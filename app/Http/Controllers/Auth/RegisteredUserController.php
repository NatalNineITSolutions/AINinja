<?php

namespace App\Http\Controllers\Auth;

use App\Helpers\AppHelper;
use App\Http\Controllers\Controller;
use App\Models\SocialLogin;
use App\Models\SubscriptionPlan;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Illuminate\Support\Facades\Log; // Import the Log facade


class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    // public function create() 
    // {
    //     return Inertia::render('Auth/Register');
    // }
    public function create()
    {
        $google = SocialLogin::where('name', 'google')->first();
        $googleLoginAllow = intval($google->active);

        return view('auth.register', compact('googleLoginAllow'));
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        // AppHelper::smtp(); line Commanded to stop email Authentication.
        $plan = SubscriptionPlan::where('type', 'Free')->first();

        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . User::class, 
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

// Log at the "info" level
         Log::info("User registration attempt for email: {$request->email}");


        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'subscription_plan_id' => $plan->id,
            'status' => 'active',
            'role' => 'user',
        ]);
        
        Log::info("User registered successfully: {$user->email}");

      // event(new Registered($user)); this line commanded to stop email verification.

        Auth::login($user);

        Log::info("User logged in after registration: {$user->email}");

        return redirect(RouteServiceProvider::HOME);

        
    }
}
