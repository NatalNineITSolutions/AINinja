import{j as e,a,F as d,c as n,b as s,d as o,g as m}from"./app-7acf19d0.js";import{B as h}from"./Breadcrumb-9e4ecf35.js";import{D as g}from"./Delete-e38196f6.js";import{E as p}from"./EditFill-64bfb14b.js";import{c as u,D as x}from"./Dashboard-7c449020.js";const w=t=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",...t,children:e("path",{"fill-rule":"evenodd",d:"M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z","clip-rule":"evenodd"})}),b=({testimonials:t})=>{const c=r=>{let l=[];for(let i=0;i<Math.round(r);i++)l.push(i);return l};return a(d,{children:[e(n,{title:"Testimonials Management"}),e(h,{Icon:u,title:"Testimonials"}),a(s.Card,{className:"!shadow-card p-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7",children:[e("div",{className:"col-span-1 md:col-span-2 lg:col-span-3",children:e(o,{href:route("testimonial.create"),children:e(s.Button,{type:"submit",color:"white",className:"float-right capitalize bg-primary-500 text-white text-sm !rounded-lg px-5",children:"Create New Testimonial"})})}),t.map(r=>a("div",{class:"shadow-card relative p-6 mt-10 rounded-lg border border-gray-100",children:[a("div",{className:"mb-4",children:[e(o,{href:route("testimonial.get",r.id),children:e(s.IconButton,{variant:"text",color:"white",className:"w-7 h-7 rounded-full bg-primary-50 hover:bg-primary-50 text-primary-500",children:e(p,{className:"h-4 w-4"})})}),e(s.IconButton,{variant:"text",color:"white",className:"w-7 h-7 rounded-full bg-red-50 hover:bg-red-50 text-red-500 ml-3",onClick:()=>m.delete(route("testimonial.delete",r.id)),children:e(g,{className:"h-4 w-4"})})]}),e("img",{src:`/${r.image}`,class:"w-20 h-[90px] object-cover absolute -top-10 right-6 rounded-lg border border-white",alt:""}),e("p",{class:"text18 font-medium mb-1.5",children:r.name}),e("small",{class:"text-gray-500  dark:text-gray-300",children:r.designation}),a("div",{class:"flex items-center mt-4 mb-7",children:[e("div",{class:"flex items-center gap-1",children:c(r.rating).map(l=>e(w,{className:"w-4 h-4 text-warning-500"},l))}),e("small",{class:"text-gray-500 dark:text-gray-300 ml-1",children:r.rating})]}),e("p",{class:"text-gray-500 dark:text-white",children:r.comment})]},r.id))]})]})};b.layout=t=>e(x,{children:t});export{b as default};
