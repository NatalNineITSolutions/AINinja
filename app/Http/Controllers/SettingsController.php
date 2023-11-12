<?php

namespace App\Http\Controllers;

use App\Helpers\AppHelper;
use App\Models\AppSetting;
use App\Models\SmtpSetting;
use App\Models\SocialLogin;
use App\Rules\XSSPurifier;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\File;
use App\Mail\ChangeEmailVerification;
use Intervention\Image\ImageManagerStatic as Image;

class SettingsController extends Controller
{
    private $config;

    public function __construct()
    {
        $this->config = base_path('config\app.php');
    }

    public function configRewrite($key, $prevValue, $newValue)
    {
        file_put_contents(
            $this->config,
            str_replace("'$key' => '" . $prevValue . "'", "'$key' => '" . $newValue . "'", file_get_contents($this->config))
        );
    }

    // Auth settings for admin
    public function auth()
    {
        try {
            $google = SocialLogin::where('name', 'google')->first();

            return Inertia::render('Admin/Settings/Auth', compact('google'));
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }

    // Auth settings for admin
    public function auth_google(Request $request): RedirectResponse
    {
        $request->validate([
            'google_client_id' => ['required', 'string', 'max:200', new XSSPurifier],
            'google_client_secret' => ['required', 'string', 'max:100', new XSSPurifier],
            'google_redirect' => ['required', 'string', 'max:100', new XSSPurifier],
        ]);
        $google_login_allow = $request->google_login_allow ? true : false;

        try {
            SocialLogin::where('name', 'google')->update([
                'active' => $google_login_allow,
                'client_id' => $request->google_client_id,
                'client_secret' => $request->google_client_secret,
                'redirect_url' => $request->google_redirect,
            ]);

            return Redirect::route('settings.auth')->with('success', 'Google auth successfully updated.');
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }

    // Global settings for admin
    public function global()
    {
        try {
            return Inertia::render('Admin/Settings/Global');
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }

    // Global settings for admin
    public function global_update(Request $request): RedirectResponse
    {
        $request->validate([
            'app_name' => ['required', 'string', 'max:50', new XSSPurifier],
            'app_email' => ['required', 'max:50', 'email', new XSSPurifier],
            'app_timezone' => ['required', 'string', 'max:50', new XSSPurifier],
            'app_copyright' => ['required', 'string', 'max:100', new XSSPurifier],
            'openai_key' => ['required', 'string', 'max:100', new XSSPurifier],
            'aws_key' => ['required', 'string', 'max:100', new XSSPurifier],
            'aws_secret' => ['required', 'string', 'max:100', new XSSPurifier],
        ]);
        if ($request->app_logo) {
            $request->validate([
                'app_logo' => ['image', 'mimes:jpg,png,jpeg', 'max:2048']
            ]);
        }

        try {
            $app = AppSetting::first();

            if ($request->app_logo) {
                File::delete($app->logo);
                $imgUrl = AppHelper::image_uploader($request->app_logo);
                $app->logo = $imgUrl;
            }

            $app->name = $request->app_name;
            $app->email = $request->app_email;
            $app->timezone = $request->app_timezone;
            $app->copyright = $request->app_copyright;
            $app->openai_key = $request->openai_key;
            $app->aws_key = $request->aws_key;
            $app->aws_secret = $request->aws_secret;
            $app->save();

            return back()->with('success', 'Global settings successfully updated.');
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    // SMTP settings for admin
    public function smtp()
    {
        try {
            $smtp = SmtpSetting::first();

            return Inertia::render('Admin/Settings/SMTP', compact('smtp'));
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }

    // SMTP settings for admin
    public function smtp_update(Request $request): RedirectResponse
    {
        $request->validate([
            'smtp_host' => ['required', 'max:50', new XSSPurifier],
            'smtp_port' => ['required', 'max:10', new XSSPurifier],
            'smtp_username' => ['required', 'max:50', new XSSPurifier],
            'smtp_password' => ['required', 'max:100'],
            'smtp_encryption' => ['required', 'max:10', new XSSPurifier],
            'mail_from_address' => ['required', 'max:50', 'email', new XSSPurifier],
            'mail_from_name' => ['required', 'max:50', new XSSPurifier],
        ]);

        try {
            $smtp = SmtpSetting::first();

            $smtp->host = $request->smtp_host;
            $smtp->port = $request->smtp_port;
            $smtp->username = $request->smtp_username;
            $smtp->password = $request->smtp_password;
            $smtp->sender_email = $request->mail_from_address;
            $smtp->sender_name = $request->mail_from_name;
            $smtp->encryption = $request->smtp_encryption;
            $smtp->save();

            return back()->with('success', 'SMTP successfully updated.');
        } catch (\Throwable $th) {
            return back()->with('error', 'Internal server error!. Try again later.');
        }
    }



    // Email change feature
    public function change_email(Request $request)
    {
        $request->validate([
            'current_email' => 'required|string|email|max:55||exists:users,email',
            'new_email' => 'required|string|email|max:55|unique:users,email',
        ]);

        try {
            AppHelper::smtp();
            $app = AppSetting::first();
            $user = User::find(auth()->user()->id);

            // Generate a unique token for email verification
            $token = Str::random(60);
            $url = route('save.email', ['token' => $token]);

            // Store the email change request in the database
            $user->email_change_new_email = $request->new_email;
            $user->email_change_token = $token;
            $user->save();

            // Send an email with the verification link to the new email
            Mail::to($request->new_email)->send(new ChangeEmailVerification($user, $app, $url));

            return back()->with('success', 'We have sent a email verification link to your new email account.');
        } catch (\Throwable $th) {
            return back()->with('error', $th->getMessage());
        }
    }

    public function save_email(Request $request)
    {
        try {
            $user = User::find(auth()->user()->id);

            if ($request->token !== $user->email_change_token) {
                return redirect()->route('settings')->with('error', "Verification token didn't match or expire.");
            }
            $user->email = $user->email_change_new_email;
            $user->email_change_new_email = null;
            $user->email_change_token = null;
            $user->save();

            return redirect()->route('settings.account')->with('success', "Your email successfully changed.");
        } catch (\Throwable $th) {
            return redirect()->route('settings.account')->with('error', $th->getMessage());
        }
    }
}
