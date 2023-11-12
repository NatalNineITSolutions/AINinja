@extends('setup.main')
@section('content')

<div class="row mt-3 p-5">
    <div class="col-12 text-center">
        <div class="col-12 mb-2">
            <i class="fa fa-check-circle fa-4x text-success" aria-hidden="true"></i>
            <h1>{{__('Setup complete')}}</h1>
        </div>
        <div class="col-12 mb-2">
            {{__('Your changed environment variables are set in the .env File now.')}}
        </div>
        <div class="col-12 mb-2">
            <a href="/">{{__('Click here')}}</a> {{__('to get back to your project')}}
        </div>
    </div>
</div>
@endsection
