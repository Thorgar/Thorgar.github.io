import{A as a,c as o,o as r,d as e,I as c,f as d,g as i,b as s}from"./index.81bb9900.js";import{o as l}from"./via-placeholder.c9fc0738.js";const n=["src"],t=["data-icon"],h=a({__name:"VIconWrap",props:{icon:{default:void 0},picture:{default:void 0},color:{default:void 0},size:{default:void 0},dark:{default:"3"},hasLargeIcon:{type:Boolean},hasBackground:{type:Boolean},placeholder:{type:Boolean},darkPrimary:{type:Boolean},darkCardBordered:{type:Boolean}},setup(a){const h=a,u=o((()=>h.icon&&-1!==h.icon.indexOf(":")));return(a,o)=>(r(),e("div",{class:d(["icon-wrap",[h.color&&!h.hasBackground&&`has-text-${h.color}`,h.color&&h.hasBackground&&`has-background-${h.color}`,h.color&&"white"!==h.color&&h.hasBackground&&"has-text-white",h.color&&"white"===h.color&&h.hasBackground&&"has-text-black",h.size&&`is-${h.size}`,h.dark&&!h.hasBackground&&`is-dark-bg-${h.dark}`,h.darkPrimary&&"is-dark-primary",h.darkCardBordered&&"is-dark-card-bordered",h.hasLargeIcon&&"has-large-icon",h.picture&&"has-img",h.placeholder&&"is-placeholder"]])},[h.picture?(r(),e("img",{key:0,src:h.picture,alt:"",onErrorOnce:o[0]||(o[0]=a=>c(l)(32))},null,40,n)):c(u)?(r(),e("i",{key:1,"aria-hidden":"true",class:"iconify","data-icon":h.icon},null,8,t)):h.icon?(r(),e("i",{key:2,"aria-hidden":"true",class:d(h.icon)},null,2)):i("",!0),s(a.$slots,"after")],2))}});export{h as _};
