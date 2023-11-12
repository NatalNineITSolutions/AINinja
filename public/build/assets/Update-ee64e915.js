import{W as v,a,F as f,j as e,c as y,b as n,g as x}from"./app-7acf19d0.js";import{C as T}from"./Card-fb3ea49d.js";import{I as o}from"./Input-75ef1dc8.js";import{T as C}from"./TextArea-67602ce0.js";import{B as N}from"./Breadcrumb-9e4ecf35.js";import{T as w,D}from"./Dashboard-7c449020.js";import{I as u}from"./InputDropdown-737fd917.js";import"./ArrowDown-009da1a2.js";const k=({template:l})=>{const{id:d,title:m,access_plan:p,status:c,slug:h,description:g}=l,{data:r,setData:i,patch:b}=v({title:m,slug:h,type:p,status:c,description:g}),s=t=>{i(t.target.name,t.target.value)};return a(f,{children:[e(y,{title:"Templates Management"}),e(N,{Icon:w,title:"Templates Update"}),a(T,{className:"shadow-card max-w-[1000px] w-full mx-auto",children:[e("div",{className:"px-7 pt-7 pb-4 border-b border-b-gray-200",children:a("p",{className:"text18 font-bold text-gray-900",children:["Update ",m," Template"]})}),a("form",{onSubmit:t=>{t.preventDefault(),b(route("templates.update",d))},className:"p-7",children:[a("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-12",children:[e(o,{fullWidth:!0,name:"title",value:r.title,placeholder:"Enter the template name",onChange:s,label:"Template Name",required:!0}),e(o,{fullWidth:!0,name:"slug",value:r.slug,placeholder:"Enter the template slug",onChange:s,label:"Template Slug",required:!0}),e(u,{required:!0,fullWidth:!0,label:"Template Status",defaultValue:r.status,onChange:t=>i("status",t.value),itemList:[{key:"Active",value:"active"},{key:"Deactive",value:"deactive"}]}),e(u,{required:!0,fullWidth:!0,label:"Template Type",defaultValue:r.type,onChange:t=>i("type",t.value),itemList:[{key:"Free",value:"Free"},{key:"Standard",value:"Standard"},{key:"Premium",value:"Premium"}]}),e(C,{rows:4,name:"description",value:r.description,onChange:s,label:"Template Description",placeholder:"Enter the short description of template",className:"min-h-0",maxLength:120,required:!0})]}),a("div",{className:"flex items-center",children:[e(n.Button,{type:"submit",variant:"text",color:"white",className:"bg-primary-500 hover:bg-primary-500 active:bg-primary-500 font-medium capitalize rounded-md text14",children:"Save"}),e(n.Button,{variant:"outlined",color:"white",onClick:()=>x.get(route("templates.admin")),className:"ml-4 capitalize text-gray-900 border-gray-900 text14",children:"Cancel"})]})]})]})]})};k.layout=l=>e(D,{children:l});export{k as default};
