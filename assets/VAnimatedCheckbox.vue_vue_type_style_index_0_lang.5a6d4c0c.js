import{A as e,u as a,c as l,$ as s,o as c,d as u,e as o,p as i,I as t,f as d}from"./index.81bb9900.js";const n=["checked","value"],r=o("svg",{class:"checkmark",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 52 52"},[o("circle",{class:"checkmark-circle",cx:"26",cy:"26",r:"25",fill:"none"}),o("path",{class:"checkmark-check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"})],-1);let v=0;const m=e({__name:"VAnimatedCheckbox",props:{value:{default:void 0},color:{default:void 0},modelValue:{default:()=>[]}},emits:["update:modelValue"],setup(e,{emit:m}){const k=e,h="animated-checkbox-"+ ++v,p=a(),f=a(),x=l((()=>k.modelValue.includes(k.value)));function b(){const e=[...k.modelValue];x.value?e.splice(e.indexOf(k.value),1):e.push(k.value),m("update:modelValue",e)}return s((()=>{p.value&&f.value&&(x.value?(p.value.classList.add("is-checked"),f.value.classList.add("is-opaque"),setTimeout((()=>{var e;null==(e=p.value)||e.classList.remove("is-unchecked")}),150)):(p.value.classList.add("is-unchecked"),p.value.classList.remove("is-checked"),setTimeout((()=>{var e;null==(e=f.value)||e.classList.remove("is-opaque")}),150)))})),(a,l)=>(c(),u("div",{ref_key:"element",ref:p,class:d(["animated-checkbox",[e.color&&"is-"+e.color]])},[o("input",i({id:h,type:"checkbox",checked:t(x),value:k.value},a.$attrs,{onChange:b}),null,16,n),o("label",{for:h,class:"checkmark-wrap"},[o("div",{ref_key:"innerElement",ref:f,class:"shadow-circle"},null,512),r])],2))}});export{m as _};
