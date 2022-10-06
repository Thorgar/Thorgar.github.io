import{_ as e}from"./VIconButton.vue_vue_type_script_lang.d0429344.js";import{_ as s}from"./UserPopoverContent.vue_vue_type_script_setup_true_lang.9f8d3695.js";import{au as t,A as a,j as i,o as r,d as o,e as n,k as l,w as c,I as d,i as u,M as p,N as h}from"./index.81bb9900.js";import{_ as f}from"./VBlock.vue_vue_type_style_index_0_lang.aea3d243.js";import{_ as v}from"./GraphDropdown.0726cd50.js";import{_ as m}from"./VAvatar.vue_vue_type_style_index_0_lang.4faa0bb7.js";import{_ as g}from"./VAction.vue_vue_type_style_index_0_lang.89aca143.js";import{v as y}from"./vue3-apexcharts.8533aa68.js";import{p as _}from"./userPopovers.d6593550.js";const b=t();function k(e,s){const t=[[.4,.3,1,.9,2.9,1.9,2.5,.9,1.2,.7,1.9,.5,1.3,.9,1.7,.2,.7,.5],[.2,.3,.8,.7,2.2,1.6,2.3,.7,1.1,.5,1.2,.5,1,.4,1.5,.2,.6,2]];let a=0;const i=[];let r=new Date("11 Nov 2020").getTime();for(;a<s;)i.push([r,t[e][a]]),r+=864e5,a++;return i}const x={chart:{type:"area",height:350,foreColor:"#999",stacked:!0,toolbar:{show:!1},dropShadow:{enabled:!0,enabledSeries:[0],top:-2,left:2,blur:5,opacity:.06}},colors:[b.green,b.accent,b.green],stroke:{curve:"smooth",width:3},title:{text:"Bitcoin (BTC) Price Chart",align:"left"},dataLabels:{enabled:!1},series:[{name:"Expected",data:k(0,18)},{name:"Real",data:k(1,18)}],markers:{size:0,strokeColor:"#fff",strokeWidth:3,strokeOpacity:1,fillOpacity:1,hover:{size:6}},xaxis:{type:"datetime",axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{labels:{offsetX:0,offsetY:-5},tooltip:{enabled:!0}},grid:{show:!1,padding:{left:-5,right:5}},tooltip:{x:{format:"dd MMM yyyy"},y:{formatter:function(e){return e+"%"}}},legend:{position:"top",horizontalAlign:"center"},fill:{type:"solid",fillOpacity:.7}},B=t(),C={series:[54],chart:{height:220,type:"radialBar"},colors:[B.accent,B.orange,B.orange],title:{text:"Bitcoin (BTC) Evolution",align:"left"},plotOptions:{radialBar:{dataLabels:{name:{offsetY:15,fontSize:"13px",fontFamily:"Roboto, sans-serif",color:B.lightText,formatter:function(){return["(30 days)"]}},value:{color:B.accent,offsetY:-20,fontSize:"16px",fontFamily:"Roboto, sans-serif",fontWeight:"500"}}}},labels:["Median Ratio"]},w=t(),T={series:[67],title:{text:"Bitcoin (BTC) Popularity"},chart:{height:225,type:"radialBar",toolbar:{show:!1}},colors:[w.green,w.secondary],plotOptions:{radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"13px",fontWeight:"600",color:w.lightText,offsetY:80},value:{offsetY:40,fontSize:"18px",fontFamily:"Roboto, sans-serif",fontWeight:"500",color:void 0,formatter:function(e){return e+"%"}}}}},fill:{type:"gradient",gradient:{shade:"dark",shadeIntensity:.15,inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,50,65,91]}},stroke:{dashArray:4},labels:["(30 days)"]},j={class:"banking-dashboard banking-dashboard-v3"},z={class:"dashboard-header"},L=n("div",{class:"left"},[n("span",null,"Latest Bitcoin (BTC) Price Chart"),n("div",{class:"currency"},[n("span",{class:"amount is-positive dark-inverted"},"$10584.30")])],-1),A={class:"right"},M={class:"buttons"},V=u("Hour"),R=u("Day"),P=u("Week"),S=u("Month"),q=u("Year"),O={class:"columns"},Y={class:"column is-8"},D=p('<div class="dashboard-tiles"><div class="dashboard-tile"><span>Market Cap</span><span class="dark-inverted">$129,992,260,090</span></div><div class="dashboard-tile"><span>Volume 24h</span><span class="dark-inverted">$453,178 K</span></div><div class="dashboard-tile"><span>Low/high 24h</span><span class="dark-inverted">$10,212 - $10,584</span></div></div>',1),F={class:"dashboard-card"},W={class:"columns is-multiline"},$={class:"column is-6"},I={class:"dashboard-card"},N={class:"column is-6"},K={class:"dashboard-card"},E={class:"column is-4"},X={class:"dashboard-card is-side"},G=n("div",{class:"currency-description"},[n("p",null," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vide, quantum, inquam, fallare, Torquate. Quid censes in Latino fore? Optime, inquam. Ratio quidem vestra sic cogit. Prave, nequiter, turpiter cenabat; Duo Reges: constructio interrete. ")],-1),H={class:"button-wrap"},Q=u("Buy BTC"),U=u("Compare"),J={class:"dashboard-card is-side"},Z=n("div",{class:"subheading-wrap"},[n("h4",{class:"subheading dark-inverted"},"Followers"),n("a",{class:"action-link",tabindex:"0"},"View All")],-1),ee={class:"people"},se={class:"dashboard-card is-side"},te=n("div",{class:"subheading-wrap"},[n("h4",{class:"subheading dark-inverted"},"Popular Coins"),n("a",{class:"action-link",tabindex:"0"},"View All")],-1),ae=y.__esModule?y.default:y,ie=a({__name:"BankingDashboardV3",setup:t=>(t,a)=>{const u=g,p=m,y=v,b=f,k=h,B=s,w=i("Tippy"),ie=e;return r(),o("div",j,[n("div",z,[L,n("div",A,[n("div",M,[l(u,{dark:"3"},{default:c((()=>[V])),_:1}),l(u,{dark:"3"},{default:c((()=>[R])),_:1}),l(u,{dark:"3",active:""},{default:c((()=>[P])),_:1}),l(u,{dark:"3"},{default:c((()=>[S])),_:1}),l(u,{dark:"3"},{default:c((()=>[q])),_:1})])])]),n("div",O,[n("div",Y,[D,n("div",F,[l(d(ae),{id:"currency-chart",height:d(x).chart.height,type:d(x).chart.type,series:d(x).series,options:d(x)},null,8,["height","type","series","options"])]),n("div",W,[n("div",$,[n("div",I,[l(d(ae),{id:"radial-chart",height:d(C).chart.height,type:d(C).chart.type,series:d(C).series,options:d(C)},null,8,["height","type","series","options"])])]),n("div",N,[n("div",K,[l(d(ae),{id:"radial-gauge",height:d(T).chart.height,type:d(T).chart.type,series:d(T).series,options:d(T)},null,8,["height","type","series","options"])])])])]),n("div",E,[n("div",X,[l(b,{title:"Bitcoin",subtitle:"BTC",center:"","m-responsive":""},{icon:c((()=>[l(p,{picture:"/images/icons/cryptocurrencies/btc.svg"})])),action:c((()=>[l(y)])),_:1}),G,n("div",H,[l(k,{color:"primary",elevated:""},{default:c((()=>[Q])),_:1}),l(k,{"dark-outlined":""},{default:c((()=>[U])),_:1})])]),n("div",J,[Z,n("div",ee,[n("div",null,[l(w,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:c((()=>[l(B,{user:d(_).user21},null,8,["user"])])),default:c((()=>[l(p,{picture:"/demo/avatars/21.jpg"})])),_:1})]),n("div",null,[l(w,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:c((()=>[l(B,{user:d(_).user120},null,8,["user"])])),default:c((()=>[l(p,{initials:"SC",color:"h-purple"})])),_:1})]),n("div",null,[l(w,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:c((()=>[l(B,{user:d(_).user7},null,8,["user"])])),default:c((()=>[l(p,{picture:"/demo/avatars/7.jpg"})])),_:1})]),n("div",null,[l(w,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:c((()=>[l(B,{user:d(_).user124},null,8,["user"])])),default:c((()=>[l(p,{initials:"AT",color:"success"})])),_:1})]),n("div",null,[l(w,{class:"has-help-cursor",interactive:"",offset:[0,40],placement:"top-end"},{content:c((()=>[l(B,{user:d(_).user31},null,8,["user"])])),default:c((()=>[l(p,{picture:"/demo/avatars/31.jpg"})])),_:1})]),l(p,{initials:"50K",color:"h-yellow"})])]),n("div",se,[te,l(b,{title:"Monero",subtitle:"XMR",center:""},{icon:c((()=>[l(p,{picture:"/images/icons/cryptocurrencies/xmr.svg",size:"small"})])),action:c((()=>[l(ie,{icon:"feather:plus",circle:"","dark-outlined":""})])),_:1}),l(b,{title:"Litecoin",subtitle:"LTC",center:""},{icon:c((()=>[l(p,{picture:"/images/icons/cryptocurrencies/ltc.svg",size:"small"})])),action:c((()=>[l(ie,{icon:"feather:plus",circle:"","dark-outlined":""})])),_:1}),l(b,{title:"ChainLink",subtitle:"LINK",center:""},{icon:c((()=>[l(p,{picture:"/images/icons/cryptocurrencies/link.svg",size:"small"})])),action:c((()=>[l(ie,{icon:"feather:plus",circle:"","dark-outlined":""})])),_:1}),l(b,{title:"Binance Coin",subtitle:"BNB",center:""},{icon:c((()=>[l(p,{picture:"/images/icons/cryptocurrencies/bnb.svg",size:"small"})])),action:c((()=>[l(ie,{icon:"feather:plus",circle:"","dark-outlined":""})])),_:1})])])])])}});export{ie as _};
