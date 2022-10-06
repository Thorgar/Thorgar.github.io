import{_ as e}from"./VRadio.vue_vue_type_style_index_0_lang.e2c62385.js";import{_ as l}from"./VLabel.vue_vue_type_script_setup_true_lang.9266be41.js";import{_ as a}from"./VInput.vue_vue_type_script_setup_true_lang.0aaf4fa9.js";import{_ as t}from"./VField.vue_vue_type_script_setup_true_lang.bf348dae.js";import{_ as s}from"./VControl.81548721.js";import{A as o,u as i,Q as u,c as n,j as r,o as d,d as p,e as m,f as c,I as _,k as f,w as v,m as y,i as h,N as b}from"./index.81bb9900.js";const g=["onSubmit"],V={class:"form-outer"},j={class:"form-header-inner"},x=m("div",{class:"left"},[m("h3",null,"Request Payout")],-1),k={class:"right"},A={class:"buttons"},N=h(" Cancel "),$=h(" Request Payout "),w={class:"form-body"},F={class:"form-section"},P={class:"left"},S=m("h3",{class:"has-text-centered"},"Choose an amount",-1),C=m("div",{class:"operator"},[m("span",null,"Or")],-1),R=m("div",{class:"radio-pills"},[m("div",{class:"radio-pill"},[m("input",{type:"radio",name:"amount_selection",value:20}),m("div",{class:"radio-pill-inner"},[m("span",null,"$20")])]),m("div",{class:"radio-pill"},[m("input",{type:"radio",name:"amount_selection",value:40}),m("div",{class:"radio-pill-inner"},[m("span",null,"$40")])]),m("div",{class:"radio-pill"},[m("input",{type:"radio",name:"amount_selection",value:60}),m("div",{class:"radio-pill-inner"},[m("span",null,"$60")])]),m("div",{class:"radio-pill"},[m("input",{type:"radio",name:"amount_selection",value:100}),m("div",{class:"radio-pill-inner"},[m("span",null,"$100")])])],-1),B={class:"right"},E=m("h3",{class:"has-text-centered"},"Enter your own",-1),I={class:"form-section is-grey"},L={class:"left"},q=m("h3",null,"Personal Info",-1),M={class:"right"},U=m("h3",null,"Payout Details",-1),D=h("Notify me when funds are ready?"),H=h("Yes"),O=h("No"),Q=o({__name:"FormLayoutSplit",setup(o){const h=i(""),Q=i(""),{y:X}=u(),Y=n((()=>X.value>30)),z=()=>{console.log("Form submitted!")};return(o,i)=>{const u=b,n=s,X=t,G=a,J=r("Multiselect"),K=l,T=e;return d(),p("form",{class:"form-layout is-split",onSubmit:y(z,["prevent"])},[m("div",V,[m("div",{class:c([[_(Y)&&"is-stuck"],"form-header stuck-header"])},[m("div",j,[x,m("div",k,[m("div",A,[f(u,{icon:"lnir lnir-arrow-left rem-100",to:"/sidebar/layouts/profile-view",light:"","dark-outlined":""},{default:v((()=>[N])),_:1}),f(u,{type:"submit",color:"primary",raised:""},{default:v((()=>[$])),_:1})])])])],2),m("div",w,[m("div",F,[m("div",P,[S,C,f(X,null,{default:v((()=>[f(n,null,{default:v((()=>[R])),_:1})])),_:1})]),m("div",B,[E,f(X,null,{default:v((()=>[f(n,{icon:"feather:dollar-sign"},{default:v((()=>[f(G,{type:"number",min:"0",step:"10",placeholder:"Amount..."})])),_:1})])),_:1})])]),m("div",I,[m("div",L,[q,f(X,null,{default:v((()=>[f(n,{icon:"feather:user"},{default:v((()=>[f(G,{type:"text",placeholder:"First Name *",autocomplete:"given-name"})])),_:1})])),_:1}),f(X,null,{default:v((()=>[f(n,{icon:"feather:user"},{default:v((()=>[f(G,{type:"text",placeholder:"Last Name *",autocomplete:"family-name"})])),_:1})])),_:1}),f(X,null,{default:v((()=>[f(n,{icon:"feather:mail"},{default:v((()=>[f(G,{type:"email",placeholder:"Email Address *",autocomplete:"email",inputmode:"email"})])),_:1})])),_:1}),f(X,null,{default:v((()=>[f(n,{icon:"feather:phone"},{default:v((()=>[f(G,{type:"tel",placeholder:"Phone Number *",autocomplete:"tel",inputmode:"tel"})])),_:1})])),_:1})]),m("div",M,[U,f(X,null,{default:v((({id:e})=>[f(n,null,{default:v((()=>[f(J,{modelValue:h.value,"onUpdate:modelValue":i[0]||(i[0]=e=>h.value=e),attrs:{id:e},placeholder:"Bank Account",options:["AMEX **** 42","HSBC **** 29"]},null,8,["modelValue","attrs"])])),_:2},1024)])),_:1}),f(X,null,{default:v((({id:e})=>[f(n,null,{default:v((()=>[f(J,{modelValue:Q.value,"onUpdate:modelValue":i[1]||(i[1]=e=>Q.value=e),attrs:{id:e},placeholder:"Bank Account",options:["Super Fast - $3.00","Regular - $0.50"]},null,8,["modelValue","attrs","options"])])),_:2},1024)])),_:1}),f(X,null,{default:v((({id:e})=>[f(K,null,{default:v((()=>[D])),_:1}),f(n,null,{default:v((()=>[f(T,{id:e,name:"notify-me",color:"primary",value:"yes"},{default:v((()=>[H])),_:2},1032,["id"]),f(T,{name:"notify-me",value:"no"},{default:v((()=>[O])),_:1})])),_:2},1024)])),_:1})])])])])],40,g)}}});export{Q as _};
