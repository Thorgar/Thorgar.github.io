import{_ as e}from"./VLabel.vue_vue_type_script_setup_true_lang.9266be41.js";import{_ as a}from"./VInput.vue_vue_type_script_setup_true_lang.0aaf4fa9.js";import{A as l,u as s,ad as t,v as o,o as u,d,a as c,w as i,k as r,p as n,I as p,f as m,H as _,m as h,e as V,t as v,g as b}from"./index.81bb9900.js";const f=V("div",{class:"slider"},null,-1),w=V("i",{"aria-hidden":"true"},null,-1),k={key:2,class:"text"},y=l({__name:"VSwitchBlock",props:{modelValue:{default:!1},label:{default:void 0},color:{default:void 0},thin:{type:Boolean}},emits:["update:modelValue"],setup(l,{emit:y}){const x=l,g=s(x.modelValue),j=t();return o(g,(()=>{y("update:modelValue",g.value)})),o((()=>x.modelValue),(()=>{g.value=x.modelValue})),(l,s)=>{const t=a,o=e;return u(),d("div",{class:m([x.label&&"switch-block",x.thin&&x.label&&"thin-switch-block"])},[x.thin?(u(),c(o,{key:0,raw:"",class:m(["thin-switch",[x.color&&`is-${x.color}`]]),tabindex:"0",onKeydown:s[1]||(s[1]=_(h((()=>y("update:modelValue",!x.modelValue)),["prevent"]),["space"]))},{default:i((()=>[r(t,n({modelValue:g.value,"onUpdate:modelValue":s[0]||(s[0]=e=>g.value=e),type:"checkbox"},p(j)),null,16,["modelValue"]),f])),_:1},8,["class"])):(u(),c(o,{key:1,raw:"",class:m(["form-switch",[x.color&&`is-${x.color}`]])},{default:i((()=>[r(t,n({raw:"",checked:x.modelValue,type:"checkbox",class:"is-switch"},l.$attrs,{onChange:s[2]||(s[2]=e=>y("update:modelValue",!x.modelValue))}),null,16,["checked"]),w])),_:1},8,["class"])),x.label?(u(),d("div",k,[r(o,{raw:""},{default:i((()=>[V("span",null,v(x.label),1)])),_:1})])):b("",!0)],2)}}});export{y as _};
