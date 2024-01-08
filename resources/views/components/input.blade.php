
<div class="border rounded-md border-gray-300 focus-within:border-primary-500 focus:outline-0 focus:ring-0 p-2 flex flex-col items-start @if($flexLabel) md:flex-row md:items-center @endif @if($fullWidth) w-full @endif">
   @if ($label)
      @if ($flexLabel)
         <small class="max-w-[164px] w-full mb-1 whitespace-nowrap font-medium text-gray-700">
            <span class="mr-1">{{$label}}</span>
            @if ($required)
               <span class="block text-red-500">*</span>
            @endif
         </small>
      @else
         <small class="w-full  whitespace-nowrap font-medium text-gray-700">
            <span class="font-bold">{{$label}}</span>
            @if ($required)
               <span class="block text-red-500"></span>
            @endif
         </small>
      @endif       
   @endif

   <div class="relative w-full  ">
      <input
         id="{{$id}}"
         type="{{$type}}"
         name="{{$name}}"
         value="{{$value}}"
         class="border-0 focus:border-0 focus:outline-0 focus:ring-0 text-sm w-full {{$className}}"
         placeholder="{{$placeholder}}"
         @if($required) required @endif
         @if($disabled) disabled @endif
      />


      @if ($error)
         <p class="text-sm text-red-500 mt-1">{{$error}}</p>
      @endif
   </div>
</div>
