import{A as e,u as l,j as a,o as s,d as t,e as o,k as n,w as u,t as i,m as c,i as r,N as d,B as m}from"./index.81bb9900.js";import{_ as p}from"./VFlex.vue_vue_type_style_index_0_lang.371bf798.js";import{_ as f}from"./VCheckbox.vue_vue_type_style_index_0_lang.c43b7cfa.js";import{_}from"./VField.vue_vue_type_script_setup_true_lang.bf348dae.js";import{_ as v}from"./VControl.81548721.js";import{_ as y}from"./VInput.vue_vue_type_script_setup_true_lang.0aaf4fa9.js";import{_ as b}from"./VLabel.vue_vue_type_script_setup_true_lang.9266be41.js";import{u as g}from"./viewWrapper.ff52ac28.js";const h=["onSubmit"],x={class:"form-outer"},V={class:"form-body"},j={class:"form-section"},F={class:"form-section-inner has-padding-bottom"},k=o("h3",{class:"has-text-centered"},"Personal Information",-1),S={class:"columns is-multiline"},w={class:"column is-6"},C=r("First Name"),L={class:"column is-6"},N=r("Last Name"),E={class:"column is-12"},P=r("Email Address"),U={class:"column is-12"},A=r("Street"),D={class:"column is-6"},I=r("City"),M={class:"column is-6"},O=r("Country"),B={class:"multiselect-single-label"},G=["src"],T={class:"select-label-text"},W=["src"],q={class:"select-label-text"},z={class:"column is-12"},H=r("Phone"),J={class:"form-section"},K={class:"form-section-inner"},Q=o("h3",{class:"has-text-centered"},"Delivery",-1),R={class:"columns is-multiline"},X={class:"column is-12"},Y=r("Delivery Fee"),Z={class:"radio-boxes"},$=o("div",{class:"radio-box-inner"},[o("div",{class:"fee"},[o("span",null,"0")]),o("p",null,"3-4 weeks")],-1),ee=o("div",{class:"radio-box-inner"},[o("div",{class:"fee"},[o("span",null,"5")]),o("p",null,"2-5 days")],-1),le=o("p",null,[o("span",null,[r("Estimated delivery date: "),o("span",null,"Oct 23")]),o("span",null,"Each package has a tracking number")],-1),ae={class:"form-section-outer"},se={class:"checkboxes"},te={class:"button-wrap"},oe=r(" Confirm My Order "),ne=e({__name:"FormLayoutSeparate",setup(e){const r=l(""),m=l(!0),g=l(!1),ne=()=>{console.log("Form submitted!")};return(e,l)=>{const ue=b,ie=y,ce=v,re=_,de=a("Multiselect"),me=f,pe=p,fe=d;return s(),t("form",{class:"form-layout is-separate",onSubmit:c(ne,["prevent"])},[o("div",x,[o("div",V,[o("div",j,[o("div",F,[k,o("div",S,[o("div",w,[n(re,null,{default:u((()=>[n(ue,null,{default:u((()=>[C])),_:1}),n(ce,{icon:"feather:user"},{default:u((()=>[n(ie,{type:"text",placeholder:"",autocomplete:"given-name"})])),_:1})])),_:1})]),o("div",L,[n(re,null,{default:u((()=>[n(ue,null,{default:u((()=>[N])),_:1}),n(ce,{icon:"feather:user"},{default:u((()=>[n(ie,{type:"text",placeholder:"",autocomplete:"family-name"})])),_:1})])),_:1})]),o("div",E,[n(re,null,{default:u((()=>[n(ue,null,{default:u((()=>[P])),_:1}),n(ce,{icon:"feather:mail"},{default:u((()=>[n(ie,{type:"email",placeholder:"",autocomplete:"email",inputmode:"email"})])),_:1})])),_:1})]),o("div",U,[n(re,null,{default:u((()=>[n(ue,null,{default:u((()=>[A])),_:1}),n(ce,{icon:"feather:map-pin"},{default:u((()=>[n(ie,{type:"text",placeholder:"",autocomplete:"street-address"})])),_:1})])),_:1})]),o("div",D,[n(re,null,{default:u((()=>[n(ue,null,{default:u((()=>[I])),_:1}),n(ce,{icon:"feather:map-pin"},{default:u((()=>[n(ie,{type:"text",placeholder:"",autocomplete:"address-level2"})])),_:1})])),_:1})]),o("div",M,[n(re,{class:"is-image-select"},{default:u((({id:e})=>[n(ue,null,{default:u((()=>[O])),_:1}),n(ce,null,{default:u((()=>[n(de,{modelValue:r.value,"onUpdate:modelValue":l[0]||(l[0]=e=>r.value=e),attrs:{id:e},placeholder:"Select a country",autocomplete:"country",label:"name",options:[{value:"english",name:"English",icon:"/images/icons/flags/united-states-of-america.svg"},{value:"french",name:"French",icon:"/images/icons/flags/france.svg"},{value:"german",name:"German",icon:"/images/icons/flags/germany.svg"},{value:"spanish",name:"Spanish",icon:"/images/icons/flags/spain.svg"}]},{singlelabel:u((({value:e})=>[o("div",B,[o("img",{class:"select-label-icon",src:e.icon,alt:""},null,8,G),o("span",T,i(e.name),1)])])),option:u((({option:e})=>[o("img",{class:"select-option-icon",src:e.icon,alt:""},null,8,W),o("span",q,i(e.name),1)])),_:2},1032,["modelValue","attrs","options"])])),_:2},1024)])),_:1})]),o("div",z,[n(re,null,{default:u((()=>[n(ue,null,{default:u((()=>[H])),_:1}),n(ce,{icon:"feather:phone"},{default:u((()=>[n(ie,{type:"tel",placeholder:"",autocomplete:"tel",inputmode:"tel"})])),_:1})])),_:1})])])])]),o("div",J,[o("div",K,[Q,o("div",R,[o("div",X,[n(re,null,{default:u((()=>[n(ue,null,{default:u((()=>[Y])),_:1}),n(ce,null,{default:u((()=>[o("div",Z,[n(ce,{class:"radio-box",subcontrol:""},{default:u((()=>[n(ie,{type:"radio",name:"delivery_type"}),$])),_:1}),n(ce,{class:"radio-box"},{default:u((()=>[n(ie,{type:"radio",name:"delivery_type",checked:""}),ee])),_:1})]),le])),_:1})])),_:1})])])]),o("div",ae,[o("div",se,[n(re,null,{default:u((()=>[n(pe,{"column-gap":"1rem"},{default:u((()=>[n(ce,null,{default:u((()=>[n(me,{modelValue:m.value,"onUpdate:modelValue":l[1]||(l[1]=e=>m.value=e),label:"Create an account",color:"primary",circle:""},null,8,["modelValue"])])),_:1}),n(ce,{subcontrol:""},{default:u((()=>[n(me,{modelValue:g.value,"onUpdate:modelValue":l[2]||(l[2]=e=>g.value=e),label:"Subscribe to our Newsletter",color:"primary",circle:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1})]),o("div",te,[n(fe,{type:"submit",color:"primary",bold:"",raised:"",fullwidth:""},{default:u((()=>[oe])),_:1})])])])])])],40,h)}}}),ue={class:"page-content-inner"},ie=e({__name:"form-layouts-3",setup:e=>(g().setPageTitle("Form Layouts 3"),m({title:"Form Layouts 3 - Navbar - Vuero"}),(e,l)=>{const a=ne;return s(),t("div",ue,[n(a)])})});export{ie as default};
