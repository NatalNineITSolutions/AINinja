import{P as e,a as r,j as l}from"./app-7acf19d0.js";const m=t=>{const{switchId:s,name:o,label:a,labelClass:c,onChange:n,defaultChecked:i,checked:d,required:h}=t;return r("label",{for:s,className:"group flex items-center cursor-pointer",children:[r("div",{className:"relative",children:[l("input",{name:o,id:s,role:"switch",type:"checkbox",className:"sr-only",onChange:n,required:h,checked:d,defaultChecked:i}),l("div",{className:"container block bg-gray-300 w-11 h-6 rounded-full"}),l("div",{className:"dot absolute left-[0.11rem] top-[0.1rem] bg-white w-5 h-5 rounded-full transition"})]}),a&&l("small",{className:`whitespace-nowrap text-gray-500 font-medium pl-4 ${c}`,children:a})]})};m.propTypes={name:e.string,label:e.string,labelClass:e.string,switchId:e.string,onChange:e.func,checked:e.bool,defaultChecked:e.bool,required:e.bool};export{m as S};