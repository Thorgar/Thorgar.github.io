import{A as e,o as a,d as t,e as s,t as o,b as r,f as l,au as i}from"./index.81bb9900.js";const n={class:"widget-head"},d={class:"dark-inverted"},p={class:"line-stats"},h={class:"line-stat"},c={class:"current"},f={class:"line-stat"},g={class:"dark-inverted"},u=e({__name:"LineStatWidget",props:{title:{default:"Line stats widget"},currentLabel:{default:"Current Label"},currentValue:{default:"$75,648.43"},previousLabel:{default:"Previous Label"},previousValue:{default:"$91,512.18"},straight:{type:Boolean}},setup(e){const i=e;return(e,u)=>(a(),t("div",{class:l(["stat-widget line-stats-widget",[i.straight&&"is-straight"]])},[s("div",n,[s("h3",d,o(i.title),1)]),s("div",p,[s("div",h,[s("span",null,o(i.currentLabel),1),s("span",c,o(i.currentValue),1)]),s("div",f,[s("span",null,o(i.previousLabel),1),s("span",g,o(i.previousValue),1)])]),r(e.$slots,"default")],2))}}),b=i(),y={series:[65],chart:{height:150,type:"radialBar",offsetX:-10,toolbar:{show:!1}},colors:[b.purple],plotOptions:{radialBar:{hollow:{size:"75%"},dataLabels:{show:!0,name:{show:!1,fontSize:"12px",fontWeight:400,offsetY:5,color:b.lightText},value:{show:!0,fontWeight:600,fontFamily:"Roboto, sans-serif",color:b.purple,fontSize:"16px",offsetY:5}}}},labels:["Progress"]},w=i(),v={series:[65],chart:{height:180,type:"radialBar",offsetX:-15,offsetY:-10,toolbar:{show:!1}},colors:[w.info,w.secondary],plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"13px",fontWeight:"600",color:w.lightText,show:!1},value:{offsetY:5,fontSize:"16px",fontFamily:"Roboto, sans-serif",fontWeight:"500",color:void 0,formatter:function(e){return e+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:["(30 days)"]},m={series:[{name:"Revenue",data:[10835,40214,36257,51411,45697,61221,65295,91512,75648]}],chart:{height:250,type:"line",zoom:{enabled:!1},toolbar:{show:!1}},colors:[i().accent],dataLabels:{enabled:!1},stroke:{width:[2,2,2],curve:"smooth"},grid:{row:{colors:["transparent","transparent"],opacity:.5}},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},tooltip:{y:{formatter:function(e){return"$"+e}}}},k=i(),A={series:[57],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[k.accent],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},L={series:[36],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[k.orange],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]},x={series:[88],chart:{height:100,type:"radialBar",sparkline:{enabled:!0},toolbar:{show:!1}},colors:[k.green],plotOptions:{radialBar:{startAngle:-90,endAngle:90,hollow:{size:"35%"},track:{background:"#e7e7e7",strokeWidth:"97%",margin:5,dropShadow:{enabled:!1,top:2,left:0,color:"#999",opacity:1,blur:2}},dataLabels:{name:{show:!1},value:{show:!1,offsetY:-2,fontSize:"22px"}}}},fill:{type:"gradient",gradient:{shade:"light",shadeIntensity:.1,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,53,91]}},labels:["Average Results"]};export{u as _,v as a,L as b,x as c,y as f,m as l,A as w};
