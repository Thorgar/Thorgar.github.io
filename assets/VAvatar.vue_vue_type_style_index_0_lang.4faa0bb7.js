import{A as a,o as s,d as r,b as e,f as o,I as t,e as d,t as l,g as i}from"./index.81bb9900.js";import{o as c}from"./via-placeholder.c9fc0738.js";const u=["src"],p=["src"],n=["src"],v=a({__name:"VAvatar",props:{picture:{default:void 0},pictureDark:{default:void 0},placeholder:{default:"https://via.placeholder.com/50x50"},badge:{default:void 0},initials:{default:"?"},size:{default:void 0},color:{default:void 0},dotColor:{default:void 0},squared:{type:Boolean},dot:{type:Boolean}},setup(a){const v=a;return(f,g)=>(s(),r("div",{class:o(["v-avatar",[a.size&&`is-${v.size}`,a.dot&&"has-dot",a.dotColor&&`dot-${v.dotColor}`,a.squared&&a.dot&&"has-dot-squared"]])},[e(f.$slots,"avatar",{},(()=>[v.picture?(s(),r("img",{key:0,class:o(["avatar",[v.squared&&"is-squared",v.pictureDark&&"light-image"]]),src:v.picture,alt:"",onErrorOnce:g[0]||(g[0]=a=>t(c)(150))},null,42,u)):(s(),r("span",{key:1,class:o(["avatar is-fake",[v.squared&&"is-squared",v.color&&`is-${v.color}`]])},[d("span",null,l(v.initials),1)],2)),v.picture&&v.pictureDark?(s(),r("img",{key:2,class:o(["avatar dark-image",[v.squared&&"is-squared"]]),src:v.pictureDark,alt:"",onErrorOnce:g[1]||(g[1]=a=>t(c)(150))},null,42,p)):i("",!0)])),e(f.$slots,"badge",{},(()=>[v.badge?(s(),r("img",{key:0,class:"badge",src:v.badge,alt:"",onErrorOnce:g[2]||(g[2]=a=>t(c)(150))},null,40,n)):i("",!0)]))],2))}});export{v as _};
