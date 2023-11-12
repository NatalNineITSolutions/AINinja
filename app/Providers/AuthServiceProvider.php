<?php

namespace App\Providers;

use App\Models\AppSetting;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;


// use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        // 'App\Models\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        $this->registerPolicies();


        VerifyEmail::toMailUsing(function (object $notifiable, string $url) {
            $app = AppSetting::first();
            // dd($app, $notifiable->name);
            // return (new MailMessage)
            //     ->subject('Verify Email Address')
            //     ->line('Click the button below to verify your email address.')
            //     ->action('Verify Email Address', $url);

            return (new MailMessage)->view('mail.email-verification', [
                'url' => $url, 'app' => $app, 'user' => $notifiable,
            ]);
        });
    }
}
