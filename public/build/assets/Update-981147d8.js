import{r as C,W as U,a as t,F,j as e,c as L,b as s}from"./app-7acf19d0.js";import{B as D}from"./Breadcrumb-9e4ecf35.js";import{c as I,U as R,D as S}from"./Dashboard-7c449020.js";import{I as o}from"./Input-75ef1dc8.js";import{T as P}from"./TextArea-67602ce0.js";const T=({testimonial:n})=>{const{id:g,name:h,image:c,designation:p,rating:x,comment:f}=n,[d,b]=C.useState(`/${c}`=="/null"?null:`/${c}`),{data:l,setData:u,post:v,errors:a,clearErrors:N}=U({image:null,name:h||"",designation:p||"",rating:x||"",comment:f||""}),i=r=>{u(r.target.name,r.target.value)},y=r=>{r.preventDefault(),N(),v(route("testimonial.update",g))},w=r=>{const m=r.target.files;m&&m[0]&&(u("image",m[0]),b(URL.createObjectURL(m[0])))};return t(F,{children:[e(L,{title:"Testimonial Update"}),e(D,{Icon:I,title:"Testimonial Update"}),t(s.Card,{className:"max-w-[1000px] w-full mx-auto",children:[e("div",{className:"px-7 pt-7 pb-4 border-b border-b-gray-200",children:e("p",{className:"text18 font-bold text-gray-900",children:"Add New Testimonial"})}),t("form",{onSubmit:y,className:"p-7",children:[t("div",{className:"flex flex-col md:flex-row mb-12",children:[e("p",{className:"max-w-[164px] w-full font-medium text-gray-500 mb-1",children:"Profile Image"}),t("div",{children:[d?e(s.Avatar,{src:d,alt:"item-1",size:"xs",variant:"circular",className:"h-[100px] w-[100px]"}):e(R,{className:"h-[100px] w-[100px] text-blue-gray-500"}),t("div",{className:"mt-1 flex items-center",children:[e("label",{htmlFor:"formFileSm",className:"text12 font-medium text-gray-900 px-2.5 py-1.5 border border-gray-700 bg-gray-100 whitespace-nowrap",children:"Choose Photo"}),e("input",{hidden:!0,type:"file",id:"formFileSm",onChange:w}),e("small",{className:"ml-3 text-gray-500",children:"JPG, JPEG, PNG, SVG File, Maximum 2MB"})]}),a.image&&e("p",{className:"text-sm text-red-500 mt-1",children:a.image})]})]}),e("div",{className:"mb-6",children:e(o,{fullWidth:!0,name:"name",value:l.name,error:a.name,placeholder:"Name of client or customer",onChange:i,label:"Full Name",flexLabel:!0,required:!0})}),e("div",{className:"mb-6",children:e(o,{fullWidth:!0,name:"designation",value:l.designation,error:a.designation,placeholder:"Designation of client or customer",onChange:i,label:"Designation",flexLabel:!0,required:!0})}),e("div",{className:"mb-6",children:e(o,{fullWidth:!0,type:"number",name:"rating",value:l.rating,error:a.rating,placeholder:"Rating of client or customer",onChange:i,label:"Rating",flexLabel:!0,required:!0})}),e("div",{className:"mb-6",children:e(P,{rows:4,fullWidth:!0,name:"comment",value:l.comment,error:a.comment,placeholder:"Review of customer or client",onChange:i,label:"Review",maxLength:180,flexLabel:!0,required:!0})}),e("div",{className:"flex items-center mt-10 md:pl-[164px]",children:e(s.Button,{type:"submit",variant:"text",color:"white",className:"bg-primary-500 hover:bg-primary-500 active:bg-primary-500 font-medium capitalize rounded-md text14",children:"Save Changes"})})]})]})]})};T.layout=n=>e(S,{children:n});export{T as default};
