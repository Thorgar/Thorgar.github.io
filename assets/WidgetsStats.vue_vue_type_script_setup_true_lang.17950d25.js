import{_ as s}from"./VTag.vue_vue_type_style_index_0_lang.2147fe8e.js";import{_ as e}from"./VAvatar.vue_vue_type_style_index_0_lang.4faa0bb7.js";import{A as i,o as t,d as a,l,e as r,k as o,t as n,F as c,a as d,f as u,b as h,w as p,I as g}from"./index.81bb9900.js";import{w as m,a as v,b as y,_ as f,c as b}from"./groupedCircleCharts.35b24afe.js";import{l as _,f as k,a as w,w as j,b as A,c as q,_ as S}from"./groupedRadialCharts.3660ecdf.js";import{v as M}from"./vue3-apexcharts.8533aa68.js";import{s as B,a as W,b as x,c as C}from"./salesSparksChart.4f173b4a.js";import{r as R}from"./revenueAreaChart.b0c399dc.js";const T={class:"is-media"},J={class:"double-line"},$={class:"dark-inverted"},D={class:"double-line"},L={class:"dark-inverted"},P=r("span",null,"Monthly Income",-1),F={class:"avatars"},I={class:"rating-wrap"},K=r("span",null,"Rating",-1),N={class:"rating"},z={class:"tag-wrap"},V={class:"is-end"},E={class:"buttons"},G=[r("span",{class:"icon is-small"},[r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:edit-2"})],-1)],H=[r("span",{class:"icon is-small"},[r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:eye"})],-1)],O=[r("span",{class:"icon is-small"},[r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:trash-2"})],-1)],Q=i({__name:"TableWidgetRowMembers",props:{rows:null,squared:{type:Boolean},circled:{type:Boolean}},setup(i){const h=i;return(i,p)=>{const g=e,m=s;return t(!0),a(c,null,l(h.rows,(s=>(t(),a("tr",{key:s.id},[r("td",T,[o(g,{picture:s.picture,initials:s.initials,size:"medium",color:s.color,squared:h.squared},null,8,["picture","initials","color","squared"])]),r("td",null,[r("div",J,[r("span",$,n(s.name),1),r("span",null,"Member since "+n(s.membership),1)])]),r("td",null,[r("div",D,[r("span",L,"$"+n(s.income),1),P])]),r("td",null,[r("div",F,[(t(!0),a(c,null,l(s.skills,(s=>(t(),d(g,{key:s.id,picture:s.icon,size:"small"},null,8,["picture"])))),128))])]),r("td",null,[r("div",I,[K,r("div",N,[(t(),a(c,null,l(5,((e,i)=>r("i",{key:i,class:u(["fas fa-star",s.rating-i>0&&"selected"]),"aria-hidden":"true"},null,2))),64))])])]),r("td",null,[r("div",z,[o(m,{class:u(["Approved"===s.status&&"is-green","Pending"===s.status&&"is-info","Suspended"===s.status&&"is-orange"]),label:s.status,elevated:""},null,8,["class","label"])])]),r("td",V,[r("div",E,[r("button",{class:u(["button is-dark-outlined",[h.circled&&"is-circle"]])},G,2),r("button",{class:u(["button is-dark-outlined",[h.circled&&"is-circle"]])},H,2),r("button",{class:u(["button is-dark-outlined",[h.circled&&"is-circle"]])},O,2)])])])))),128)}}}),U={class:"widget-head"},X={class:"dark-inverted"},Y={class:"button v-button is-primary is-elevated"},Z=r("span",{class:"icon is-small"},[r("i",{"aria-hidden":"true",class:"fas fa-plus"})],-1),ss={class:"table is-hoverable is-fullwidth"},es=i({__name:"TableWidget",props:{data:null,title:{default:"Widget Title"},actionLabel:{default:"Add Item"},straight:{type:Boolean},squared:{type:Boolean},circled:{type:Boolean}},setup(s){const e=s;return(s,i)=>{const l=Q;return t(),a("div",{class:u(["stat-widget table-widget-v1",[e.straight&&"is-straight"]])},[r("div",U,[r("h3",X,n(e.title),1),r("button",Y,[Z,r("span",null,n(e.actionLabel),1)])]),r("table",ss,[r("tbody",null,[o(l,{rows:e.data,squared:e.squared,circled:e.circled},null,8,["rows","squared","circled"])])])],2)}}}),is={class:"follow-block"},ts={class:"follow-count"},as={class:"dark-inverted"},ls=r("span",null,"Based on your latest stats",-1),rs=r("a",{href:"#",class:"go-icon"},[r("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"})],-1),os=i({__name:"SocialStatWidget",props:{icon:null,value:null,straight:{type:Boolean},squared:{type:Boolean},colored:{type:Boolean}},setup(s){const e=s;return(s,i)=>(t(),a("div",{class:u(["stat-widget followers-stat-widget-v1",[e.straight&&"is-straight"]])},[r("div",is,[r("div",{class:u(["follow-icon",[e.squared&&"is-squared",e.colored&&"is-primary"]])},[r("i",{"aria-hidden":"true",class:u(e.icon)},null,2)],2),r("div",ts,[r("span",as,n(e.value)+" Followers",1),ls]),rs])],2))}}),ns=i({__name:"SparkStatWidget",props:{straight:{type:Boolean}},setup(s){const e=s;return(s,i)=>(t(),a("div",{class:u(["stat-widget spark-tile-widget",[e.straight&&"is-straight"]])},[h(s.$slots,"default")],2))}}),cs=[{id:0,picture:"/demo/avatars/8.gif",name:"Tina Dasilva",initials:"td",color:"info",membership:"Apr 2019",income:"7,854.32",skills:[{id:0,icon:"/images/icons/stacks/js.svg"},{id:1,icon:"/images/icons/stacks/html5.svg"},{id:2,icon:"/images/icons/stacks/css3.svg"}],rating:5,status:"Approved"},{id:1,picture:"/demo/avatars/1.gif",name:"John Wistmus",initials:"jw",color:"info",membership:"Jun 2018",income:"5,435.49",skills:[{id:3,icon:"/images/icons/stacks/reactjs.svg"},{id:4,icon:"/images/icons/stacks/nodejs.svg"}],rating:4,status:"Approved"},{id:2,picture:"/demo/avatars/4.gif",name:"Sam Watson",initials:"sw",color:"info",membership:"Jun 2020",income:"824.67",skills:[{id:5,icon:"/images/icons/stacks/csharp.svg"},{id:6,icon:"/images/icons/stacks/android.svg"},{id:7,icon:"/images/icons/stacks/laravel.svg"}],rating:5,status:"Pending"},{id:3,picture:void 0,name:"Jolaine Joestar",initials:"jj",color:"info",membership:"Feb 2020",income:"261.12",skills:[{id:8,icon:"/images/icons/stacks/illustrator.svg"}],rating:3,status:"Suspended"},{id:4,picture:"/demo/avatars/3.gif",name:"Anders Jensen",initials:"aj",color:"info",membership:"Nov 2020",income:"4,231.67",skills:[{id:3,icon:"/images/icons/stacks/reactjs.svg"},{id:9,icon:"/images/icons/stacks/vuejs.svg"}],rating:5,status:"Approved"}],ds={class:"columns is-multiline"},us={class:"column is-3"},hs={class:"column is-3"},ps={class:"column is-3"},gs={class:"column is-3"},ms={class:"column is-6"},vs={class:"column is-6"},ys={class:"column is-6"},fs={class:"column is-6"},bs={class:"column is-6"},_s={class:"column is-6"},ks={class:"column is-4"},ws={class:"column is-4"},js={class:"column is-4"},As={class:"column is-12"},qs={class:"column is-12"},Ss=M.__esModule?M.default:M,Ms=i({__name:"WidgetsStats",setup:s=>(s,e)=>{const i=ns,l=S,n=f,c=b,d=os,u=es;return t(),a("div",ds,[r("div",us,[o(i,{straight:""},{default:p((()=>[o(g(Ss),{id:"widget-spark1",height:g(B).chart.height,type:g(B).chart.type,series:g(B).series,options:g(B)},null,8,["height","type","series","options"])])),_:1})]),r("div",hs,[o(i,{straight:""},{default:p((()=>[o(g(Ss),{id:"widget-spark2",height:g(W).chart.height,type:g(W).chart.type,series:g(W).series,options:g(W)},null,8,["height","type","series","options"])])),_:1})]),r("div",ps,[o(i,{straight:""},{default:p((()=>[o(g(Ss),{id:"widget-spark3",height:g(x).chart.height,type:g(x).chart.type,series:g(x).series,options:g(x)},null,8,["height","type","series","options"])])),_:1})]),r("div",gs,[o(i,{straight:""},{default:p((()=>[o(g(Ss),{id:"widget-spark4",height:g(C).chart.height,type:g(C).chart.type,series:g(C).series,options:g(C)},null,8,["height","type","series","options"])])),_:1})]),r("div",ms,[o(l,{title:"Revenue","current-label":"This Month","current-value":"$75,648.43","previous-label":"Last Month","previous-value":"$91,512.18",straight:""},{default:p((()=>[o(g(Ss),{id:"line-stats-widget-chart",height:g(_).chart.height,type:g(_).chart.type,series:g(_).series,options:g(_)},null,8,["height","type","series","options"])])),_:1})]),r("div",vs,[o(l,{title:"Revenue","current-label":"This Month","current-value":"$75,648.43","previous-label":"Last Month","previous-value":"$91,512.18",straight:""},{default:p((()=>[o(g(Ss),{id:"line-stats-area-chart",height:g(R).chart.height,type:g(R).chart.type,series:g(R).series,options:g(R)},null,8,["height","type","series","options"])])),_:1})]),r("div",ys,[o(n,{title:"Sales Revenue",straight:""},{default:p((()=>[o(g(Ss),{id:"flex-stat-circle",height:g(k).chart.height,type:g(k).chart.type,series:g(k).series,options:g(k)},null,8,["height","type","series","options"])])),_:1})]),r("div",fs,[o(n,{title:"Sales Revenue",straight:""},{default:p((()=>[o(g(Ss),{id:"flex-stat-radial",height:g(w).chart.height,type:g(w).chart.type,series:g(w).series,options:g(w)},null,8,["height","type","series","options"])])),_:1})]),r("div",bs,[o(c,{title:"Additional Stats",values:["264","1,203","3,078"],labels:["New Deals","Proposals","Closed Deals"]},{chart1:p((()=>[o(g(Ss),{id:"group-radial-1",height:g(m).chart.height,type:g(m).chart.type,series:g(m).series,options:g(m)},null,8,["height","type","series","options"])])),chart2:p((()=>[o(g(Ss),{id:"group-radial-2",height:g(v).chart.height,type:g(v).chart.type,series:g(v).series,options:g(v)},null,8,["height","type","series","options"])])),chart3:p((()=>[o(g(Ss),{id:"group-radial-3",height:g(y).chart.height,type:g(y).chart.type,series:g(y).series,options:g(y)},null,8,["height","type","series","options"])])),_:1})]),r("div",_s,[o(c,{title:"Additional Stats",values:["264","1,203","3,078"],labels:["New Deals","Proposals","Closed Deals"],gauge:""},{chart1:p((()=>[o(g(Ss),{id:"group-gauge-1",height:g(j).chart.height,type:g(j).chart.type,series:g(j).series,options:g(j)},null,8,["height","type","series","options"])])),chart2:p((()=>[o(g(Ss),{id:"group-gauge-2",height:g(A).chart.height,type:g(A).chart.type,series:g(A).series,options:g(A)},null,8,["height","type","series","options"])])),chart3:p((()=>[o(g(Ss),{id:"group-gauge-3",height:g(q).chart.height,type:g(q).chart.type,series:g(q).series,options:g(q)},null,8,["height","type","series","options"])])),_:1})]),r("div",ks,[o(d,{icon:"fab fa-twitter",value:"138K",straight:""})]),r("div",ws,[o(d,{icon:"fab fa-twitter",value:"138K",straight:"",squared:""})]),r("div",js,[o(d,{icon:"fab fa-twitter",value:"138K",straight:"",colored:""})]),r("div",As,[o(u,{title:"Members","action-label":"Add Member",data:g(cs),straight:"",squared:""},null,8,["data"])]),r("div",qs,[o(u,{title:"Members","action-label":"Add Member",data:g(cs),straight:"",circled:""},null,8,["data"])])])}});export{Ms as _};
