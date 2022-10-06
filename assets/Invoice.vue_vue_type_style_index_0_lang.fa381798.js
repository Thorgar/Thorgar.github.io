import{_ as a}from"./VFlexTable.vue_vue_type_style_index_0_lang.fa46e641.js";import{_ as e}from"./VControl.81548721.js";import{_ as s}from"./VField.vue_vue_type_script_setup_true_lang.bf348dae.js";import{_ as t}from"./VInput.vue_vue_type_script_setup_true_lang.0aaf4fa9.js";import{_ as l}from"./UserPopoverContent.vue_vue_type_script_setup_true_lang.9f8d3695.js";import{_ as n}from"./VAvatar.vue_vue_type_style_index_0_lang.4faa0bb7.js";import{A as i,u as o,c as r,j as u,o as c,d,e as v,k as m,w as p,I as _,a as b,g as y,t as f,M as h}from"./index.81bb9900.js";import{p as g}from"./userPopovers.d6593550.js";const j={class:"invoice-wrapper"},k=h('<div class="invoice-header"><div class="left"><h3>Invoice FC-456-14</h3></div><div class="right"><div class="controls"><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:printer"></i></a><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:download-cloud"></i></a><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></a><a class="action"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-left"></i></a></div></div></div>',1),w={class:"invoice-body"},x={class:"invoice-card"},V={class:"invoice-section is-flex is-bordered"},q=v("div",{class:"meta"},[v("h3",null,"Tara Svenson"),v("span",null,"tarasvenson@vuero.io"),v("span",null,"+1 546-5491")],-1),I=v("div",{class:"end"},[v("h3",null,"Invoice FC-456-14"),v("span",null,"Issued: May 27, 2020"),v("span",null,"Payment Due: June 27, 2015")],-1),S={class:"invoice-section is-flex is-bordered"},U=v("div",{class:"meta"},[v("h3",null,"Airbnb"),v("span",null,"888 Brannan St, San Francisco,"),v("span",null,"CA 94103, USA")],-1),C=v("div",{class:"end is-left"},[v("h3",null,"Description"),v("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod equidem non reprehendo. ")],-1),F={class:"invoice-section"},T={key:0,class:"table-label"},A={key:1,class:"table-total is-bigger"},D={key:2,class:"table-value"},P=i({__name:"Invoice",setup(i){const h=o([{name:"Website Redesign",unit:"hrs",quantity:54,rate:24},{name:"Logo Design",unit:"hrs",quantity:12,rate:24},{name:"Custom Illustrations",unit:"hrs",quantity:7,rate:32}]),P=r((()=>{const a=h.value.reduce(((a,e)=>a+e.quantity*e.rate),0),e=.1*a;return[{label:"Subtotal",value:a},{label:"Taxes",value:e},{label:"Total",value:a+e}]})),z=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),L={name:{label:"Description",grow:!0,inverted:!0},unit:{label:"Unit",align:"end"},quantity:"Quantity",rate:{label:"Rate",inverted:!0,format:a=>z.format(a)},subtotal:{label:"Subtotal",inverted:!0,format:(a,e)=>z.format(e.quantity*e.rate)}},M={label:{label:"",grow:"xl",align:"end"},value:{label:"",bold:!0,format:a=>z.format(a)}};return(i,o)=>{const r=n,z=l,Q=u("Tippy"),R=t,B=s,J=e,N=a;return c(),d("div",j,[k,v("div",w,[v("div",x,[v("div",V,[m(Q,{class:"has-help-cursor",interactive:"",placement:"bottom-start"},{content:p((()=>[m(z,{user:_(g).user13},null,8,["user"])])),default:p((()=>[m(r,{size:"large",picture:"/demo/avatars/13.jpg"})])),_:1}),q,I]),v("div",S,[m(r,{size:"large",class:"is-customer",picture:"/demo/photos/brands/airbnb.svg"}),U,C]),v("div",F,[m(N,{data:h.value,columns:_(L),rounded:"",reactive:""},{"body-cell":p((({column:a,row:e})=>["quantity"===a.key?(c(),b(J,{key:0},{default:p((()=>[m(B,null,{default:p((()=>[m(R,{modelValue:e[a.key],"onUpdate:modelValue":s=>e[a.key]=s,type:"number",min:"0"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024)])),_:2},1024)):y("",!0)])),_:1},8,["data","columns"]),m(N,{subtable:"",data:_(P),columns:_(M)},{"body-cell":p((({column:a,value:e,row:s})=>["label"===a.key?(c(),d("span",T,f(e),1)):"value"===a.key&&"Total"===s.label?(c(),d("span",A,f(e),1)):(c(),d("span",D,f(e),1))])),_:1},8,["data","columns"])])])])])}}});export{P as _};
