import{W as p,r as f,a as o,F as w,j as e,c as h,b}from"./app-7acf19d0.js";import{C as x}from"./Card-fb3ea49d.js";import{I as l}from"./Input-75ef1dc8.js";import{G as g}from"./GuestLayout-6ae1fda8.js";function y(a){const{token:i,email:n}=a,{data:t,setData:m,post:u,errors:d,reset:c,wasSuccessful:v}=p({token:i,email:n,password:"",password_confirmation:""});f.useEffect(()=>()=>{c("password","password_confirmation")},[]);const s=r=>{m(r.target.name,r.target.value)};return o(w,{children:[e(h,{title:"Reset Password"}),o(x,{className:"shadow-card max-w-[1000px] w-full mx-auto",children:[e("div",{className:"px-7 pt-7 pb-4 border-b border-b-gray-200",children:e("p",{className:"text18 font-bold text-gray-900",children:"Reset Your Password"})}),o("form",{onSubmit:r=>{r.preventDefault(),u(route("password.store"))},className:"grid grid-cols-1 gap-7 p-7",children:[e(l,{type:"email",name:"email",label:"Account Email",value:t.email,onChange:s,placeholder:"Your account email",error:d.email,flexLabel:!0,fullWidth:!0,required:!0,disabled:!0}),e(l,{type:"password",name:"password",label:"Password",value:t.password,onChange:s,placeholder:"Enter your new password",error:d.password,flexLabel:!0,fullWidth:!0,required:!0}),e(l,{type:"password",name:"password_confirmation",label:"Confirm Password",value:t.password_confirmation,onChange:s,placeholder:"Enter your confirm password",flexLabel:!0,fullWidth:!0,required:!0}),e("div",{className:"flex items-center mt-4 md:pl-[164px]",children:e(b.Button,{type:"submit",variant:"text",color:"white",className:"bg-primary-500 hover:bg-primary-500 active:bg-primary-500 font-medium capitalize rounded-md text14",children:"Save Changes"})})]})]})]})}y.layout=a=>e(g,{children:a});export{y as default};