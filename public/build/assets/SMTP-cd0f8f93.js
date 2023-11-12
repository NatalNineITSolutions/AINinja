import{W as g,a as o,F as S,j as e,c as x,b as y}from"./app-7acf19d0.js";import{C as v}from"./Card-fb3ea49d.js";import{I as l}from"./Input-75ef1dc8.js";import{B as w}from"./Breadcrumb-9e4ecf35.js";import{b as C,D as P}from"./Dashboard-7c449020.js";import{I as L}from"./InputDropdown-737fd917.js";import"./ArrowDown-009da1a2.js";const T=m=>{const{host:p,port:d,username:u,password:i,sender_email:c,sender_name:h,encryption:_}=m.smtp,{data:t,setData:n,put:f,processing:M,errors:r,clearErrors:b}=g({smtp_host:p,smtp_port:d,smtp_encryption:_,smtp_username:u,smtp_password:i,mail_from_address:c,mail_from_name:h}),a=s=>{n(s.target.name,s.target.value)};return o(S,{children:[e(x,{title:"SMTP Settings"}),e(w,{Icon:C,title:"SMTP Settings"}),o(v,{className:"max-w-[1000px] w-full mx-auto",children:[e("div",{className:"px-7 pt-7 pb-4 border-b border-b-gray-200",children:e("p",{className:"text18 font-bold text-gray-900",children:"Setup SMTP Settings"})}),o("form",{onSubmit:s=>{s.preventDefault(),b(),f(route("settings.smtp-update"))},className:"p-7",children:[o("div",{className:"grid grid-cols-1 gap-7",children:[e(l,{type:"password",name:"smtp_host",label:"SMTP Host",value:t.smtp_host,error:r.smtp_host,onChange:a,placeholder:"Your smtp host",fullWidth:!0,flexLabel:!0,required:!0}),e(l,{type:"number",name:"smtp_port",label:"SMTP Port",value:t.smtp_port,error:r.smtp_port,onChange:a,placeholder:"Your smtp port",fullWidth:!0,flexLabel:!0,required:!0}),e(l,{type:"password",name:"smtp_username",label:"SMTP Username",value:t.smtp_username,error:r.smtp_username,onChange:a,placeholder:"Your smtp username",fullWidth:!0,flexLabel:!0,required:!0}),e(l,{type:"password",name:"smtp_password",label:"SMTP Password",value:t.smtp_password,error:r.smtp_password,onChange:a,placeholder:"Your smtp password",fullWidth:!0,flexLabel:!0,required:!0}),e(l,{name:"mail_from_address",label:"Sender Email Address",value:t.mail_from_address,error:r.mail_from_address,onChange:a,placeholder:"Sender email address",fullWidth:!0,flexLabel:!0,required:!0}),e(l,{name:"mail_from_name",label:"Sender Name",value:t.mail_from_name,error:r.mail_from_name,onChange:a,placeholder:"Email seder name",fullWidth:!0,flexLabel:!0,required:!0}),e(L,{required:!0,flexLabel:!0,fullWidth:!0,label:"SMTP Encryption",error:r.smtp_encryption,defaultValue:m.smtp.encryption,itemList:[{key:"TLS",value:"tls"},{key:"SSL",value:"ssl"}],onChange:s=>n("smtp_encryption",s.value)})]}),e("div",{className:"flex items-center mt-7 md:pl-[164px]",children:e(y.Button,{type:"submit",variant:"text",color:"white",className:"bg-primary-500 hover:bg-primary-500 active:bg-primary-500 font-medium capitalize rounded-md text14",children:"Save Changes"})})]})]})]})};T.layout=m=>e(P,{children:m});export{T as default};
