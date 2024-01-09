@extends('layouts.auth')

@section('content')
    <div class="bg-white shadow-card w-full min-h-screen lg:h-screen flex flex-col lg:flex-row">
        <div class="w-full lg:w-3/5 flex flex-col justify-center pt-10 px-6 bg-cover bg-center" style="background-image: url('{{asset('assets/img/bg-image/Register-bg.jpg')}}');">
            <h5 class="text22 md:text-[30px] text-white font-bold mb-2 ml-4">
              {{ __("Join the great family of creators shaping AI's future.") }}
            </h5>
            <p class="text12 md:text-[20px] mt-3 pb-5 text-white font-bold ml-4">
               {{ __('-- FastAI') }}
            </p>
        </div>

        <div class=" w-full lg:w-2/5 flex flex-col justify-center md:px-[25px] py-[60px]">
            <div class="flex items-center">
               <img src="{{asset('assets/logo/fastai.png')}}" alt="Logo" width="32" height="32" class="mr-2 mb-6 ">
               <h5 class="text16 md:text-[22px] text-gray-900 font-bold mb-6">
                  {{ __('Welcome to FastAI') }}
                </h5>
            </div>
            
            <div class="flex items-center justify-between gap-3">
                @if($googleLoginAllow)
                    <a 
                        href="/auth/google" 
                        class="px-3 py-2.5 border border-gray-200 rounded-lg flex items-center justify-center w-full"
                    >
                        <img 
                            width="20" 
                            height="20" 
                            class="mr-2" 
                            src="{{asset('assets/svg/google.svg')}}" 
                            alt=""
                        >
                        <small class="whitespace-nowrap font-medium text-gray-900 flex">
                            <span>{{ __('Sign In') }}</span>
                            <span class="ml-1 hidden md:block">
                                {{ __('with Google') }}
                            </span>
                        </small>
                    </a>
                @endif
            </div>
            <div class="flex items-center justify-between pb-3">
                <small class=" whitespace-nowrap text-gray-700 font-medium">{{ __('Or Sign Up With') }}</small>
            </div>

            <form method="POST" action="{{ route('register') }}">
                @csrf
    
                <div>
                    @include('components.input', [
                        'id' => '',
                        'type' => 'text',
                        'name' => 'name',
                        'value' => old('name'),
                        'label' => 'NAME',
                        'fullWidth' => true,
                        'required' => true,
                        'flexLabel' => false,
                        'disabled' => false,
                        'error' => $errors->first('name'),
                        'className' => '',
                        'placeholder' => 'Enter your full name',
                    ])
                </div>

                <div class="mt-3">
                    @include('components.input', [
                        'id' => '',
                        'type' => 'email',
                        'name' => 'email',
                        'value' => old('email'),
                        'label' => 'EMAIL',
                        'fullWidth' => true,
                        'required' => true,
                        'flexLabel' => false,
                        'disabled' => false,
                        'error' => $errors->first('email'),
                        'className' => '',
                        'placeholder' => 'Enter your email',
                    ])
                </div>

                <div class="mt-3">
                    @include('components.input', [
                        'id' => '',
                        'type' => 'password',
                        'name' => 'password',
                        'value' => '',
                        'label' => 'PASSWORD',
                        'fullWidth' => true,
                        'required' => true,
                        'flexLabel' => false,
                        'disabled' => false,
                        'error' => $errors->first('password'),
                        'className' => '',
                        'placeholder' => 'Enter your password',
                    ])
                </div>

                <div class="mt-3">
                    @include('components.input', [
                        'id' => '',
                        'type' => 'password',
                        'name' => 'password_confirmation',
                        'value' => '',
                        'label' => 'CONFIRM PASSWORD',
                        'fullWidth' => true,
                        'required' => true,
                        'flexLabel' => false,
                        'disabled' => false,
                        'error' => '',
                        'className' => '',
                        'placeholder' => 'Enter confirm password',
                    ])
                </div>
    
                <button 
                    type="submit" 
                    class="bg-primary-500 hover:bg-primary-600 active:bg-primary-600 font-medium capitalize rounded-md text17 text-white px-14 h-12 mt-4"
                >
                    {{ __('Sign Up') }}
                </button>
                <p class="font-medium text-gray-500 mt-4">
                    {{ __('Already have an account?') }}
                    <a href="{{ route('login') }}" class="text-primary-500 hover:text-primary-600">
                        {{ __('Sign In') }}
                    </a>
                </p>
            </form>
        </div>
    </div>

    <script>
        const email = document.getElementById('email');
        const password = document.getElementById('password');
        const superAdmin = document.getElementById('superAdmin');

        superAdmin.addEventListener('click', () => {
            email.value = 'superadmin@gmail.com';
            password.value = 'superadmin';
        });
    </script>
@endsection
