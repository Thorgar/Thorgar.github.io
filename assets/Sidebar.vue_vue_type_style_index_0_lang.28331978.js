import{_ as s}from"./AnimatedLogo.0f636858.js";import{A as e,c as a,j as r,o as l,d as o,e as t,k as i,w as n,b as c,f as d,I as u}from"./index.81bb9900.js";const b={class:"sidebar-brand"},m={class:"sidebar-inner"},p=t("div",{class:"naver"},null,-1),f={class:"icon-menu has-slimscroll"},v={class:"bottom-menu"},h=e({__name:"Sidebar",props:{theme:{default:"default"},isOpen:{type:Boolean}},setup(e){const h=e,_=a((()=>{switch(h.theme){case"color":return"is-colored";case"labels":return"has-labels";case"labels-hover":return"has-labels has-hover-labels";case"float":return h.isOpen?"is-float is-bordered":"is-float";case"curved":return h.isOpen?"":"is-curved";case"color-curved":return h.isOpen?"is-colored":"is-colored is-curved";default:return""}}));return(e,a)=>{const h=s,k=r("RouterLink");return l(),o("div",{class:d(["main-sidebar",[u(_)]])},[t("div",b,[i(k,{to:"/"},{default:n((()=>[i(h,{width:"36px"})])),_:1})]),t("div",m,[p,t("ul",f,[c(e.$slots,"links")]),t("ul",v,[c(e.$slots,"bottom-links")])])],2)}}});export{h as _};
