import{j as e,R as c,a as o,r as N,F as R,c as L,b as S,g as E}from"./app-7acf19d0.js";import{f as V,a as m,T as F}from"./columns-35ec10a6.js";import{d as G,D as j}from"./Dashboard-7c449020.js";import{B as I}from"./Breadcrumb-9e4ecf35.js";import{T as Z,a as A}from"./TablePagination-9a318772.js";import{D as z}from"./Delete-e38196f6.js";import{s as O}from"./text-to-speech-5872ffda.js";import{D as _}from"./Download-8f30efd9.js";import{f as k}from"./index-3f3950c2.js";import{p as M}from"./index-1e8bddeb.js";import"./search-8c27863c.js";import"./ArrowDown-009da1a2.js";import"./debounce-367be966.js";import"./index-4c8a935a.js";const q=s=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:e("path",{d:"M4.5 2C3.67188 2 3 2.67188 3 3.5V12.5C3 13.3281 3.67188 14 4.5 14H5.5C6.32812 14 7 13.3281 7 12.5V3.5C7 2.67188 6.32812 2 5.5 2H4.5ZM10.5 2C9.67188 2 9 2.67188 9 3.5V12.5C9 13.3281 9.67188 14 10.5 14H11.5C12.3281 14 13 13.3281 13 12.5V3.5C13 2.67188 12.3281 2 11.5 2H10.5Z",fill:"currentColor"})}),J=s=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:e("path",{d:"M4.28125 1.22051C3.81875 0.936189 3.2375 0.926815 2.76562 1.19239C2.29375 1.45797 2 1.95788 2 2.50154V13.4996C2 14.0432 2.29375 14.5432 2.76562 14.8087C3.2375 15.0743 3.81875 15.0618 4.28125 14.7806L13.2812 9.28159C13.7281 9.00976 14 8.52547 14 8.00056C14 7.47566 13.7281 6.99449 13.2812 6.71954L4.28125 1.22051Z",fill:"currentColor"})}),K=s=>e("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...s,children:e("path",{d:"M1.98055 7.00035H1.7241C1.32283 7.00035 1 6.66602 1 6.25046V2.25102C1 1.94794 1.17499 1.67298 1.44653 1.55737C1.71806 1.44176 2.02882 1.50425 2.237 1.71985L3.49211 3.01966C6.13507 0.316922 10.3922 0.326296 13.02 3.05091C15.66 5.7849 15.66 10.2155 13.02 12.9495C10.3801 15.6835 6.10188 15.6835 3.46194 12.9495C3.0848 12.5589 3.0848 11.9247 3.46194 11.5341C3.83907 11.1435 4.45154 11.1435 4.82867 11.5341C6.71435 13.4869 9.77065 13.4869 11.6563 11.5341C13.542 9.58124 13.542 6.41606 11.6563 4.46321C9.7797 2.51974 6.74754 2.51036 4.85884 4.43196L6.09886 5.71928C6.30704 5.93488 6.36738 6.25671 6.25575 6.53792C6.14412 6.81913 5.87862 7.00035 5.58596 7.00035H1.98055Z",fill:"currentColor"})}),Q=({audioSrc:s})=>{const r=c.useRef(null),u=c.useRef(null),h=c.useRef(null),p=c.useRef(null),g=c.useRef(null),[w,d]=c.useState(!1),f=()=>{r.current.paused?(r.current.play(),d(!0)):(r.current.pause(),d(!1))},C=()=>{r.current.pause(),r.current.currentTime=0,d(!1)},x=()=>{const t=document.createElement("a");t.href=s,t.download="audio.mp3",t.click()},v=()=>{const t=parseFloat(g.current.value);r.current.playbackRate=t};return c.useEffect(()=>{const t=r.current,n=u.current,y=h.current;t.addEventListener("timeupdate",()=>{const a=t.currentTime/t.duration*100;n.style.width=`${a}%`;const l=Math.floor(t.currentTime/60),i=Math.floor(t.currentTime%60);y.textContent=`${l<10?"0":""}${l}:${i<10?"0":""}${i}`}),t.addEventListener("loadedmetadata",()=>{const a=Math.floor(t.duration/60),l=Math.floor(t.duration%60);p.current.textContent=`${a<10?"0":""}${a}:${l<10?"0":""}${l}`})},[]),o("div",{className:"audio-player w-full p-3 bg-gray-100 rounded flex items-center",children:[o("div",{className:"controls flex items-center mr-4",children:[w?e(q,{className:"w-4 h-4 text-gray-400 hover:text-primary-400 cursor-pointer",onClick:f}):e(J,{className:"w-4 h-4 text-gray-400 hover:text-primary-400 cursor-pointer",onClick:f}),e(K,{className:"ml-3 w-4 h-4 text-gray-400 hover:text-primary-400 cursor-pointer",onClick:C})]}),o("div",{className:"time text-sm text-gray-700 w-[100px]",children:[e("span",{ref:h,children:"00:00"})," /"," ",e("span",{ref:p,children:"00:00"})]}),e("div",{className:"progress-bar flex-grow h-1 bg-gray-400 rounded overflow-hidden",children:e("div",{ref:u,className:"progress w-0 h-full bg-primary-500"})}),e("div",{className:"controls",children:e(_,{className:"ml-3 w-5 h-5 text-gray-400 hover:text-primary-400 cursor-pointer",onClick:x})}),e("div",{className:"controls ml-3",children:o("select",{ref:g,className:"bg-gray-200 w-12 rounded cursor-pointer outline-0",onChange:v,children:[e("option",{value:"1",children:"1x"}),e("option",{value:"1.5",children:"1.5x"}),e("option",{value:"2",children:"2x"})]})}),e("audio",{ref:r,src:s})]})},U=s=>{const[r,u]=N.useState(s.speeches),h=N.useMemo(()=>r.data,[r]),p=N.useMemo(()=>V,[]),{rows:g,prepareRow:w,headerGroups:d,getTableProps:f,getTableBodyProps:C}=m.useTable({columns:p,data:h},m.useFilters,m.useGlobalFilter,m.useSortBy,m.usePagination),x=t=>{const n=k(M(t),"hh:mm aa");return{date:k(M(t),"dd MMM, yyyy"),time:n}},v=t=>{E.delete(route("text-to-speech-delete",t))};return o(R,{children:[e(L,{title:"Generated Codes"}),e(I,{Icon:G,title:"Generated Codes"}),o(S.Card,{className:"shadow-card",children:[e(Z,{data:r,title:"All Speeches",globalSearch:!0,setSearchData:u,searchPath:route("text-to-speech.search"),tablePageSizes:[10,15,20,25]}),e("div",{className:"overflow-x-auto",children:o("table",{...f(),className:"w-full min-w-[1000px]",children:[e("thead",{children:e(F,{headerGroups:d})}),e("tbody",{...C(),children:g.map(t=>(w(t),e("tr",{...t.getRowProps(),className:"border-b border-gray-200 dark:border-neutral-500",children:t.cells.map(n=>{const{row:y,column:a}=n,{id:l,title:i,language:$,voice:D,audio:B,created_at:P}=y.original,T=O.find(b=>b.value===$),H=T.voices.find(b=>b.value===D);return e("td",{...n.getCellProps(),className:`px-7 py-[18px] text-start last:text-end ${a.id!=="document"&&"whitespace-nowrap"}`,children:a.id==="title"?e("p",{className:"text-sm font-medium text-gray-700",children:i.length>30?`${i.slice(0,30)}...`:i}):a.id==="language"?e("p",{className:"text-sm text-gray-700",children:T.key}):a.id==="voice"?e("p",{className:"text-sm text-gray-700",children:H.key}):a.id==="created"?o(R,{children:[e("small",{className:"font-bold text-gray-700",children:x(P).date}),e("p",{className:"text12 text-gray-400 mt-1",children:x(P).time})]}):a.id==="audio"?e("span",{className:"text-sm text-gray-700 font-medium",children:e(Q,{audioSrc:`/${B}`})}):a.id==="action"?e("div",{className:"flex justify-end items-center",children:e(S.IconButton,{variant:"text",color:"white",className:"w-7 h-7 rounded-full hover:bg-primary-50 text-gray-500 hover:text-primary-500 ml-3",onClick:()=>v(l),children:e(z,{className:"h-4 w-4"})})}):e("span",{className:`text-sm text-gray-700 ${a.id==="document"&&"font-bold"}`,children:n.render("Cell")})})})})))})]})}),e(A,{paginationInfo:r,className:"p-7"})]})]})};U.layout=s=>e(j,{children:s});export{U as default};
