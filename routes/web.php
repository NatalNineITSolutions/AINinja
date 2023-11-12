<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\AiChatsController;
use App\Http\Controllers\AiCodeController;
use App\Http\Controllers\AiImagesController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DocumentController;
use App\Http\Controllers\Gateways\MollieController;
use App\Http\Controllers\Gateways\PaypalController;
use App\Http\Controllers\Gateways\PaystackController;
use App\Http\Controllers\Gateways\RazorpayController;
use App\Http\Controllers\Gateways\StripeController;
use App\Http\Controllers\IntroController;
use App\Http\Controllers\OpenAIController;
use App\Http\Controllers\PaymentSettingsController;
use App\Http\Controllers\PricingController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\SetupController;
use App\Http\Controllers\SpeechTextController;
use App\Http\Controllers\TemplatesController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SubscriptionPlanController;
use App\Http\Controllers\SupportController;
use App\Http\Controllers\TestDbController;
use App\Http\Controllers\TestimonialController;
use App\Http\Controllers\UsersController;
use App\Http\Controllers\VersionUpdateController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

$installed = Storage::disk('public')->exists('installed');

Route::get('/', function (Request $request) {
    $filePath = 'installed';
    $installed = Storage::disk('public')->exists('installed');

    if ($installed === true) {
        return app('App\Http\Controllers\HomeController')->Home($request);
    } else {
        return redirect('/setup');
    }
});


if ($installed === true) {
    // Global access routes
    Route::get('/', [IntroController::class, 'index']);

    // Admin and users access routes
    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

        Route::prefix('/templates')->group(function () {
            Route::get('/', [TemplatesController::class, 'index'])->name('templates');
            Route::post('/content', [OpenAIController::class, 'template_content'])->name('template-content');
            Route::get('/content/{id}', [TemplatesController::class, 'create'])->name('content-create');
            Route::post('/content/store', [TemplatesController::class, 'store'])->name('content-store');
            Route::post('/content/search', [TemplatesController::class, 'search'])->name('content-search');
        });

        Route::prefix('/ai-images')->group(function () {
            Route::get('/', [AiImagesController::class, 'index'])->name('ai-images');
            Route::post('/', [OpenAIController::class, 'ai_images'])->name('ai-images');
        });

        Route::prefix('/ai-chats')->group(function () {
            Route::get('/', [AiChatsController::class, 'index'])->name('ai-chats');
            Route::post('/', [OpenAIController::class, 'ai_chats'])->name('ai-chats');
            Route::get('/chats', [AiChatsController::class, 'chats'])->name('chats.get');
            Route::post('/chat/create', [AiChatsController::class, 'chat_create'])->name('chat.create');
            Route::put('/chat/update/{id}', [AiChatsController::class, 'chat_update'])->name('chat.update');
            Route::get('/bot/{id}', [AiChatsController::class, 'ai_bot'])->name('ai-chats.bot');
            Route::get('/bot/messages/{botId}/{chatId}', [AiChatsController::class, 'chat_messages'])->name('chat.messages');
            Route::get('/chat/search', [AiChatsController::class, 'search'])->name('chat.search');
        });

        Route::prefix('/ai-code')->group(function () {
            Route::get('/', [AiCodeController::class, 'index'])->name('');
            Route::post('/', [OpenAIController::class, 'ai_code'])->name('ai-code');
            Route::post('/save', [AiCodeController::class, 'save_code'])->name('code-save');
            Route::put('/update', [AiCodeController::class, 'ai_code'])->name('code-update');
            Route::get('/saved', [AiCodeController::class, 'ai_code'])->name('saved-codes');
        });

        Route::prefix('/speech-to-text')->group(function () {
            Route::get('/', [SpeechTextController::class, 'speech_to_text'])->name('speech-to-text');
            Route::post('/', [OpenAIController::class, 'speech_to_text'])->name('speech-to-text');
            Route::post('/save', [SpeechTextController::class, 'text_save'])->name('text-save');
        });

        Route::prefix('/text-to-speech')->group(function () {
            Route::get('/', [SpeechTextController::class, 'text_to_speech'])->name('text-to-speech');
            Route::post('/', [OpenAIController::class, 'text_to_speech'])->name('text-to-speech-save');
        });

        //---------- Saved Documents routes start ----------//
        Route::prefix('/saved-documents')->group(function () {
            Route::prefix('/template-contents')->group(function () {
                Route::get('/', [DocumentController::class, 'index'])->name('template-contents');
                Route::get('/{id}', [DocumentController::class, 'show']);
                Route::put('/{id}', [DocumentController::class, 'update'])->name('template-content-update');
                Route::delete('/{id}', [DocumentController::class, 'delete'])->name('template-content-delete');
                Route::get('/contents/search', [DocumentController::class, 'search'])->name('template-contents.search');
            });
            Route::prefix('/generated-images')->group(function () {
                Route::get('/', [AiImagesController::class, 'show']);
                Route::delete('/{id}', [AiImagesController::class, 'delete'])->name('generated-images-delete');
                Route::get('/images/search', [AiImagesController::class, 'search'])->name('generated-images.search');
            });
            Route::prefix('/generated-codes')->group(function () {
                Route::get('/', [AiCodeController::class, 'show'])->name('generated-codes');
                Route::get('/{id}', [AiCodeController::class, 'view'])->name('generated-code-view');
                Route::delete('/{id}', [AiCodeController::class, 'delete'])->name('generated-codes-delete');
                Route::get('/codes/search', [AiCodeController::class, 'search'])->name('generated-codes.search');
            });
            Route::prefix('/speech-to-text')->group(function () {
                Route::get('/', [SpeechTextController::class, 'show_text'])->name('speech-to-text');
                Route::get('/{id}', [SpeechTextController::class, 'view_text'])->name('speech-to-text-view');
                Route::put('/{id}', [SpeechTextController::class, 'update_text'])->name('speech-to-text-update');
                Route::delete('/{id}', [SpeechTextController::class, 'delete_text'])->name('speech-to-text-delete');
                Route::get('/text/search', [SpeechTextController::class, 'search_text'])->name('speech-to-text.search');
            });
            Route::prefix('/text-to-speeches')->group(function () {
                Route::get('/', [SpeechTextController::class, 'show_speeches'])->name('text-to-speech');
                Route::delete('/{id}', [SpeechTextController::class, 'delete_speech'])->name('text-to-speech-delete');
                Route::get('/speeches/search', [SpeechTextController::class, 'search_speech'])->name('text-to-speech.search');
            });
        });
        //---------- Saved Documents routes end ------------//

        //---------- Support Requests routes start ----------//
        Route::prefix('/support-request')->group(function () {
            Route::get('/', [SupportController::class, 'index'])->name('support-request');
            Route::get('/create', [SupportController::class, 'create'])->name('support-request.create');
            Route::post('/store', [SupportController::class, 'store'])->name('support-request.store');
            Route::delete('/delete/{id}', [SupportController::class, 'delete'])->name('support-request.delete');
            Route::get('/conversation/{id}', [SupportController::class, 'conversation'])->name('support-request.conversation');
            Route::post('/conversation/replay', [SupportController::class, 'replay'])->name('support-request.replay');
            Route::get('/supports/search', [SupportController::class, 'search'])->name('support-request.search');
        });
        //---------- Support Requests routes end ------------//

        //---------- Profile routes start ----------//
        Route::get('/profile', [ProfileController::class, 'index'])->name('profile');
        // Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
        Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
        Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
        //---------- Profile routes end ----------//

        //---------- Settings routes start ----------//
        Route::get('/settings/profile', [ProfileController::class, 'profile'])->name('settings.profile');
        Route::post('/settings/profile', [ProfileController::class, 'profile_update'])->name('settings.profile.update');
        Route::get('/settings/account', [ProfileController::class, 'account'])->name('settings.account');
        //---------- Settings routes end ----------//

        //---------- Update plan routes start ----------//
        Route::get('/current-plan', [SubscriptionPlanController::class, 'index'])->name('plans.current');
        Route::get('/select-plan', [SubscriptionPlanController::class, 'select'])->name('plans.select');
        Route::get('/plans/{id}', [SubscriptionPlanController::class, 'selected'])->name('plans.selected');

        Route::get('/plans/{stripeId}/stripe/checkout/{planId}', [SubscriptionPlanController::class, 'stripeCheckout'])->name('plans.stripe.checkout');
        Route::post('/plans/stripe/process-subscription', [SubscriptionPlanController::class, 'stripeProcessSubscription'])->name('plans.stripe.processSubscription');

        Route::get('/plans/{razorpayId}/razorpay/checkout/{planId}', [SubscriptionPlanController::class, 'razorpayCheckout'])->name('plans.razorpay.checkout');
        Route::post('/plan/razorpay/save-subscription', [SubscriptionPlanController::class, 'saveRazorpaySubscription'])->name('plan.razorpay.subscription.save');
        Route::post('/plan/razorpay/subscription-activation', [SubscriptionPlanController::class, 'activeSubscriptionPlan'])->name('plan.razorpay.subscription.active');

        Route::get('/plan/{paddleId}/paddle/checkout/{planId}', [SubscriptionPlanController::class, 'paddleCheckout'])->name('plan.paddle.checkout');
        Route::post('/plan/paddle/save-subscription', [SubscriptionPlanController::class, 'savePaddleSubscription'])->name('plan.paddle.subscription.save');
        //---------- Update plan routes end ----------//


        // Paypal routes start
        Route::post('/paypal/payment', [PaypalController::class, 'payment'])->name('paypal.payment');
        Route::get('/paypal/success', [PaypalController::class, 'success'])->name('paypal.success');
        Route::get('/paypal/cancel', [PaypalController::class, 'cancel'])->name('paypal.cancel');

        // Paypal routes start
        Route::post('/stripe/payment', [StripeController::class, 'payment'])->name('stripe.payment');
        Route::get('/stripe/success', [StripeController::class, 'success'])->name('stripe.success');
        Route::get('/stripe/cancel', [StripeController::class, 'cancel'])->name('stripe.cancel');

        // Razorpay routes start
        Route::get('/razorpay/form', [RazorpayController::class, 'show_form'])->name('razorpay.form');
        Route::post('/razorpay/payment', [RazorpayController::class, 'payment'])->name('razorpay.payment');

        // mollie routes start
        Route::post('/mollie/payment', [MollieController::class, 'payment'])->name('mollie.payment');
        Route::get('/mollie/success', [MollieController::class, 'success'])->name('mollie.success');

        // paystack routes start
        Route::get('/paystack/redirect', [PaystackController::class, 'paystack_redirect'])->name('paystack.redirect');
        Route::get('/paystack/callback', [PaystackController::class, 'verify_transaction'])->name('paystack.callback');
    });


    // Only admin access routes
    //---------- Admin access routes start ----------//
    Route::get('/customize', [IntroController::class, 'customize'])->middleware('admin');
    Route::prefix('/inro-section')->middleware('admin')->group(function () {
        Route::put('/update/{id}', [IntroController::class, 'section']);
        Route::put('/child/update/{id}', [IntroController::class, 'child_section']);
        Route::put('/child/link/update', [IntroController::class, 'section_link']);
    });

    Route::prefix('/admin')->middleware('admin')->group(function () {
        Route::get('/dashboard', [DashboardController::class, 'admin_dashboard'])->name('admin.dashboard');

        //---------- Testimonials routes start ----------//
        Route::prefix('/testimonials')->group(function () {
            Route::get('/', [TestimonialController::class, 'index'])->name('testimonials');
            Route::get('/create', [TestimonialController::class, 'create'])->name('testimonial.create');
            Route::post('/store', [TestimonialController::class, 'store'])->name('testimonial.store');
            Route::get('/get/{id}', [TestimonialController::class, 'get'])->name('testimonial.get');
            Route::post('/update/{id}', [TestimonialController::class, 'update'])->name('testimonial.update');
            Route::delete('/delete/{id}', [TestimonialController::class, 'delete'])->name('testimonial.delete');
        });
        //---------- Testimonials routes end ----------//


        //---------- Settings routes start ----------//
        Route::prefix('/settings')->group(function () {
            Route::get('/auth', [SettingsController::class, 'auth'])->name('settings.auth');
            Route::patch('/auth/google', [SettingsController::class, 'auth_google'])->name('settings.auth-google');

            Route::get('/global', [SettingsController::class, 'global'])->name('settings.global');
            Route::post('/global/update', [SettingsController::class, 'global_update'])->name('settings.global-update');

            Route::get('/smtp', [SettingsController::class, 'smtp'])->name('settings.smtp');
            Route::put('/smtp/update', [SettingsController::class, 'smtp_update'])->name('settings.smtp-update');

            Route::get('/payment', [PaymentSettingsController::class, 'index']);
            Route::prefix('/payment')->group(function () {
                Route::patch('/stripe', [PaymentSettingsController::class, 'stripe_update'])->name('settings.stripe');
                Route::patch('/razorpay', [PaymentSettingsController::class, 'razorpay_update'])->name('settings.razorpay');
                Route::patch('/paypal', [PaymentSettingsController::class, 'paypal_update'])->name('settings.paypal');
                Route::patch('/mollie', [PaymentSettingsController::class, 'mollie_update'])->name('settings.mollie');
                Route::patch('/paystack', [PaymentSettingsController::class, 'paystack_update'])->name('settings.paystack');
            });
        });
        //---------- Settings routes end ----------//


        //---------- Pricing routes start ----------//
        Route::prefix('/pricing-management')->group(function () {
            Route::get('/', [PricingController::class, 'index'])->name('plans');
            Route::get('/create', [PricingController::class, 'create'])->name('plans.create');
            Route::post('/store', [PricingController::class, 'store'])->name('plans.store');
            Route::patch('/update/{planId}', [PricingController::class, 'update'])->name('plans.update');
        });
        //---------- Pricing routes end ----------//


        //---------- Subscription routes start ----------//
        Route::prefix('/finance-management')->group(function () {
            Route::get('/transactions', [SubscriptionPlanController::class, 'transaction']);
            Route::get('/transactions/search', [SubscriptionPlanController::class, 'search_transaction'])->name('transaction.search');
            Route::get('/subscriptions', [SubscriptionPlanController::class, 'subscription']);
            Route::get('/subscriptions/search', [SubscriptionPlanController::class, 'search_subscription'])->name('subscription.search');
        });
        //---------- Subscription routes end ----------//


        //---------- Support Requests routes start ----------//
        Route::prefix('/support-requests')->group(function () {
            Route::get('/', [SupportController::class, 'index'])->name('support-request');
            Route::get('/create', [SupportController::class, 'create'])->name('support-request.create');
            Route::get('/conversation/{id}', [SupportController::class, 'conversation'])->name('support-request.conversation');
        });
        //---------- Support Requests routes end ------------//


        //---------- Templates routes start ----------//
        Route::prefix('/templates-management')->group(function () {
            Route::get('/', [TemplatesController::class, 'show'])->name('templates.admin');
            Route::get('/{id}', [TemplatesController::class, 'edit'])->name('templates.edit');
            Route::patch('/{id}', [TemplatesController::class, 'update'])->name('templates.update');
            Route::get('/templates/search', [TemplatesController::class, 'search'])->name('templates.search');
        });
        //---------- Templates routes end ----------//


        //---------- User routes start ----------//
        Route::prefix('/user-management')->group(function () {
            Route::get('/', [UsersController::class, 'index'])->name('users.admin');
            Route::get('/{id}', [UsersController::class, 'edit'])->name('users.edit');
            Route::post('/{id}', [UsersController::class, 'update'])->name('users.update');
            Route::get('/profile/{id}', [UsersController::class, 'profile'])->name('users.profile');
            Route::get('/users/search', [UsersController::class, 'search'])->name('users.search');
        });
        //---------- User routes end ----------//
    });
    //---------- Admin access routes end ----------//

    require __DIR__ . '/auth.php';


    // Version Update for only admin
    Route::get('/version/update', [VersionUpdateController::class, 'index']);
    Route::post('/admin/login', [VersionUpdateController::class, 'admin_login']);
    Route::middleware(['auth', 'web'])->group(function () {
        Route::get('/version/update/step-2', [VersionUpdateController::class, 'update']);
        Route::post('/version/update', [VersionUpdateController::class, 'store']);
    });

    // Redirecting after setup 
    Route::get('/setup', function () {
        return back();
    });
    Route::get('/setup/{sub}', function () {
        return back();
    });
} else {
    Route::get('/{url?}', function () {
        return redirect('/setup');
    })->where('url', '^(?!setup).*$');

    Route::get('/setup', [SetupController::class, 'viewCheck'])->name('setup');
    Route::get('/setup/step-1', [SetupController::class, 'viewStep1'])->name('viewStep1');
    Route::post('/setup/step-2', [SetupController::class, 'setupStep1'])->name('setupStep1');
    Route::post('/setup/testDB', [TestDbController::class, 'testDB'])->name('testDB');
    Route::get('/setup/step-2', [SetupController::class, 'viewStep2'])->name('viewStep2');
    Route::get('/setup/step-3', [SetupController::class, 'viewStep3'])->name('viewStep3');

    Route::get('/setup/getNewAppKey', [SetupController::class, 'getNewAppKey'])->name('getNewAppKey');
    Route::post('/setup/step-3', [SetupController::class, 'setupStep2'])->name('setupStep2');
    Route::post('/setup/step-4', [SetupController::class, 'setupStep3'])->name('setupStep3');
    Route::post('/setup/step-5', [SetupController::class, 'setupStep4'])->name('setupStep4');
    Route::post('/setup/lastStep', [SetupController::class, 'lastStep'])->name('lastStep');

    Route::get('/setup/lastStep', function () {
        return redirect('/setup', 301);
    });

    Route::get('/setup/finish', function () {
        return view('setup.finishedSetup');
    });
}
