import{P as T,j as e,a as s,r as h,W as j,b as o,F as v,c as F,d as k}from"./app-7acf19d0.js";import{b as E,a as d,T as I}from"./columns-35ec10a6.js";import{D as $}from"./Dollar-8874d6df.js";import{B as A}from"./Breadcrumb-9e4ecf35.js";import{T as G,a as H}from"./TablePagination-9a318772.js";import{D as L}from"./Dashboard-7c449020.js";import{f as P}from"./index-3f3950c2.js";import{p as M}from"./index-1e8bddeb.js";import"./search-8c27863c.js";import"./ArrowDown-009da1a2.js";import"./debounce-367be966.js";import"./index-4c8a935a.js";const z=({className:a})=>e("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:a,fill:"currentColor",children:e("path",{className:"fa-primary",d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 448C362 448 448 362 448 256C448 149.1 362 64 256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448z"})});z.propTypes={className:T.string};const S=({className:a})=>s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",className:a,fill:"currentColor",children:[e("path",{className:"fa-primary",d:"M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM256 448C362 448 448 362 448 256C448 149.1 362 64 256 64C149.1 64 64 149.1 64 256C64 362 149.1 448 256 448z"}),e("path",{className:"fa-secondary",style:{opacity:.4},d:"M144.8 99.5L412.5 367.2C400.1 384.7 384.7 400.1 367.2 412.5L99.5 144.8C111.1 127.3 127.3 111.9 144.8 99.5V99.5z"})]});S.propTypes={className:T.string};const O=a=>{const{id:x,status:n}=a,[m,l]=h.useState(!1),{patch:y,setData:p,reset:b,wasSuccessful:c}=j({status:""}),g=r=>{y(route("plans.update",r))},u=()=>{m?(b("status"),l(!1)):l(!0)},t=r=>{l(!0),r==="active"?p("status","deactive"):p("status","active")};return h.useEffect(()=>{c&&l(!1)},[c]),s("div",{className:"flex justify-end items-center",children:[e(o.IconButton,{variant:"text",color:"white",onClick:()=>t(n),className:"w-7 h-7 rounded-full hover:bg-primary-50 text-gray-500 hover:text-primary-500",children:n==="active"?e(S,{className:"h-4 w-4"}):e(z,{className:"h-4 w-4"})}),s(o.Dialog,{size:"xs",open:m,handler:u,className:"px-7 py-10",children:[n==="active"?e("p",{className:"text22 font-medium text-red-500 text-center mb-10",children:"Are you sure to deactive plan?"}):e("p",{className:"text22 font-medium text-primary-500 text-center mb-10",children:"Are you sure to active plan?"}),s("div",{className:"flex items-center justify-center",children:[e(o.Button,{type:"submit",variant:"text",color:"white",onClick:()=>g(x),className:"bg-primary-500 hover:bg-primary-500 active:bg-primary-500 font-medium capitalize rounded-md text14",children:"Confirm"}),e(o.Button,{variant:"outlined",color:"white",onClick:u,className:"ml-4 capitalize text-gray-900 border-gray-900 text14",children:"Cancel"})]})]})]})},R=({plans:a})=>{const x=h.useMemo(()=>a.data,[a]),n=h.useMemo(()=>E,[]),{rows:m,getTableProps:l,getTableBodyProps:y,headerGroups:p,prepareRow:b}=d.useTable({columns:n,data:x},d.useFilters,d.useGlobalFilter,d.useSortBy,d.usePagination),c=t=>{const r=P(M(t),"hh:mm aa");return{date:P(M(t),"dd MMM, yyyy"),time:r}},g=t=>t==="active"?"text-success-500 bg-success-50":"text-gray-500 bg-gray-100",u=t=>t==="Free"?"text-warning-500 bg-warning-50":t==="Standard"?"text-blue-500 bg-blue-50":"text-primary-500 bg-primary-50";return s(v,{children:[e(F,{title:"Subscription Plans"}),e(A,{Icon:$,title:"Subscription Plans"}),s(o.Card,{className:"shadow-card",children:[e(G,{data:a,title:"All Plans",globalSearch:!1,tablePageSizes:[10,15,20,25],component:e(k,{href:route("plans.create"),children:e(o.Button,{variant:"text",color:"white",className:"bg-primary-500 hover:bg-primary-500 active:bg-primary-500 font-medium capitalize rounded-md py-3 px-5 ml-3",children:"Create New Subscription"})})}),e("div",{className:"overflow-x-auto",children:s("table",{...l(),className:"w-full min-w-[1000px]",children:[e("thead",{children:e(I,{headerGroups:p})}),e("tbody",{...y(),children:m.map(t=>(b(t),e("tr",{...t.getRowProps(),className:"border-b border-gray-200 dark:border-neutral-500",children:t.cells.map(r=>{const{row:C,column:i}=r,{id:B,title:D,status:f,type:w,created_at:N}=C.original;return e("td",{...r.getCellProps(),className:`px-7 py-[18px] text-start last:text-end ${i.id!=="document"&&"whitespace-nowrap"}`,children:i.id==="title"?e("span",{className:"text-sm text-gray-700 font-semibold",children:D}):i.id==="status"?e("span",{className:`text12 py-0.5 px-2 rounded-full capitalize ${g(f)}`,children:f}):i.id==="type"?e("span",{className:`text12 py-0.5 px-2 rounded-full capitalize ${u(w)}`,children:w}):i.id==="action"?e(O,{id:B,status:f}):i.id==="created"?s(v,{children:[e("small",{className:"font-medium text-gray-700",children:c(N).date}),e("p",{className:"text12 text-gray-400 mt-1",children:c(N).time})]}):s("span",{className:"text-sm text-gray-700",children:["$",r.render("Cell")]})})})})))})]})}),e(H,{paginationInfo:a,className:"p-7"})]})]})};R.layout=a=>e(L,{children:a});export{R as default};