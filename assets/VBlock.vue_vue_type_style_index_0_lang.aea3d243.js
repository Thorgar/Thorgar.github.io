import{A as e,o as t,d as s,b as i,e as l,t as o,g as a,f as n}from"./index.81bb9900.js";const r={key:0},p={key:1},d={class:"flex-end"},f=e({__name:"VBlock",props:{title:{default:void 0},subtitle:{default:void 0},infratitle:{default:void 0},center:{type:Boolean},lighter:{type:Boolean},narrow:{type:Boolean},mResponsive:{type:Boolean},tResponsive:{type:Boolean}},setup(e){const f=e;return(e,c)=>(t(),s("div",{class:n([!f.center&&"media-flex",f.center&&"media-flex-center",f.narrow&&"no-margin",f.mResponsive&&"is-responsive-mobile",f.tResponsive&&"is-responsive-tablet-p"])},[i(e.$slots,"icon"),l("div",{class:n(["flex-meta",[f.lighter&&"is-lighter"]])},[i(e.$slots,"title",{},(()=>[l("span",null,o(f.title),1),f.subtitle?(t(),s("span",r,o(f.subtitle),1)):a("",!0),f.infratitle?(t(),s("span",p,o(f.infratitle),1)):a("",!0)])),i(e.$slots,"default")],2),l("div",d,[i(e.$slots,"action")])],2))}});export{f as _};
