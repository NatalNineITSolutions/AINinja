@extends('layouts.auth')

@section('content')
    <div class="bg-white shadow-card  w-full min-h-screen lg:h-screen flex flex-col lg:flex-row sm:w-full ">
        <div class="w-full lg:w-3/5 flex flex-col justify-center pt-10 px-6 bg-cover bg-center " style="background-image: url('{{asset('assets/img/bg-image/login-bg.jpg')}}');">
            <h5 class="text22 md:text-[30px] text-white font-bold mb-2 ml-4">
              {{ __("My first job was working in an orange juice factory,but i got canned:couldn't concentrate.") }}
            </h5>
            <p class="text12 md:text-[20px] mt-3 pb-5 text-white font-bold ml-4">
               {{ __('-- FastAI') }}
            </p>
        </div>

        <div class="relative w-full lg:w-2/5 flex flex-col justify-center  px-[25px] py-[60px]" >
            
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
                <small class=" whitespace-nowrap text-gray-700 font-medium">{{ __('Sign In With Your FastAI Account') }}</small>
            </div>

            <form method="POST" action="{{ route('login') }}">
                @csrf
    
                <div>
                    
                    @include('components.input', [
                        'id' => 'email',
                        'type' => 'email',
                        'name' => 'email',                       
                        'value' => '',
                        'label' => 'USER EMAIL',
                        'fullWidth' => true,
                        'required' => true,
                        'flexLabel' => false,
                        'disabled' => false,
                        'error' => $errors->first('email'),
                        'className' => '',
                        'placeholder' => 'Enter your email',
                    ])
                </div>

                <div class="mt-3 mb-3">
                    @include('components.input', [
                        'id' => 'password',
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

                <div class="flex items-center justify-between">
                    <label for="remember" class="inline-flex items-center">
                        <input 
                            id="remember" 
                            type="checkbox" 
                            name="remember"
                            class="form-checkbox rounded-[5px] w-[13.5px] h-[13.5px] border-gray-500 focus:ring-white"
                        >
                        <span class="ml-1 text-sm text-gray-500 font-medium">
                            {{ __('keep me signed in') }}
                        </span>
                    </label> 
                    <a href="{{ route('password.request') }}" class="text-sm text-primary-500 hover:text-primary-600 font-medium">
                        {{ __('Help? Contact Support') }}
                    </a>                   
                </div>
    
                <button 
                    type="submit" 
                    class="bg-primary-500 hover:bg-primary-600 active:bg-primary-600 font-medium capitalize rounded-md text14 text-white px-14 h-10 mt-7"
                >
                    {{ __('Sign In') }}
                </button>
                <div class="absolute bottom-2 left-0 right-0 flex items-center justify-center">
                    <p class="font-medium text-gray-500 mt-4">
                        {{ __('Made with ') }}&#10084;&#65039;{{ __(' by ') }}
                        <a href="https://natalnine.com/" class="text-primary-500 hover:text-primary-600" target="_blank">
                          {{ __('NATALNINE') }}
                        </a>

                    </p>
                </div>
            </form>
        </div>
    
    </div>
@endsection
