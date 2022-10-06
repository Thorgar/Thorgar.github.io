import{_ as e}from"./VFlexPagination.b693976f.js";import{c as a,_ as i}from"./VFlexTable.vue_vue_type_style_index_0_lang.fa46e641.js";import{_ as l}from"./VAvatar.vue_vue_type_style_index_0_lang.4faa0bb7.js";import{_ as s}from"./VPlaceholderPage.vue_vue_type_style_index_0_lang.dfb05313.js";import{_ as t}from"./VControl.81548721.js";import{A as r,u as n,c as o,o as c,d as u,e as d,k as m,w as p,J as v,K as f,f as g,H as h,m as y,I as b,a as k,L as _,F as j,l as D,t as x,i as C,g as S}from"./index.81bb9900.js";import{_ as W,a as w}from"./search-4-dark.cee9d58b.js";import{o as E}from"./via-placeholder.c9fc0738.js";const L=[{id:0,name:"Introduction to Html5",picture:"/demo/photos/courses/1.jpg",category:"Web Development",difficulty:1,price:26,skill:{icon:"lnil lnil-html5",name:"Html5"},author:{id:8,picture:"/images/avatars/svg/vuero-1.svg",username:"Erik K.",initials:"EK",color:"info"}},{id:1,name:"Mastering VueJS and Typescript",picture:"/demo/photos/courses/2.png",category:"Web Development",difficulty:4,price:12,skill:{icon:"lnir lnir-nodejs",name:"NodeJS"},author:{id:12,picture:"/demo/avatars/12.jpg",username:"Joshua S.",initials:"JS",color:"info"}},{id:2,name:"Discovering CSS3 and Stylesheets",picture:"/demo/photos/courses/3.jpg",category:"Web Development",difficulty:2,price:16,skill:{icon:"lnir lnir-css3",name:"CSS3"},author:{id:12,picture:"/demo/avatars/5.jpg",username:"Mary L.",initials:"ML",color:"info"}},{id:3,name:"Get Started with Laravel 6",picture:"/demo/photos/courses/4.png",category:"Web Development",difficulty:3,price:0,skill:{icon:"lnir lnir-laravel",name:"Laravel"},author:{id:18,picture:"/demo/avatars/18.jpg",username:"Esteban C.",initials:"EC",color:"info"}},{id:4,name:"Python Basics for Beginners",picture:"/demo/photos/courses/5.jpeg",category:"Web Development",difficulty:1,price:8,skill:{icon:"lnir lnir-python",name:"Python"},author:{id:18,picture:"/demo/avatars/18.jpg",username:"Esteban C.",initials:"EC",color:"info"}},{id:5,name:"Mastering State with React Hooks",picture:"/demo/photos/courses/6.jpg",category:"Web Development",difficulty:4,price:25,skill:{icon:"lnir lnir-react",name:"ReactJS"},author:{id:30,picture:"/demo/avatars/30.jpg",username:"Clément D.",initials:"CD",color:"info"}},{id:6,name:"Setting up an Express Server",picture:"/demo/photos/courses/7.png",category:"Web Development",difficulty:3,price:12,skill:{icon:"lnir lnir-nodejs",name:"NodeJS"},author:{id:38,picture:"/demo/avatars/38.jpg",username:"Christie D.",initials:"CD",color:"info"}},{id:7,name:"Learning to use Kubernetes",picture:"/demo/photos/courses/9.jpg",category:"Web Development",difficulty:5,price:34,skill:{icon:"lnir lnir-chrome",name:"Kubernetes"},author:{id:30,picture:"/demo/avatars/30.jpg",username:"Clément D.",initials:"CD",color:"info"}},{id:8,name:"Another Angular Crash Course",picture:"/demo/photos/courses/11.jpg",category:"Web Development",difficulty:4,price:22,skill:{icon:"lnir lnir-angular",name:"Angular"},author:{id:34,picture:"/demo/avatars/34.jpg",username:"Daniel R.",initials:"DR",color:"info"}},{id:9,name:"learning Advanced Docker Concepts",picture:"/demo/photos/courses/12.jpg",category:"Web Development",difficulty:5,price:35,skill:{icon:"lnir lnir-docker",name:"Docker"},author:{id:30,picture:"/demo/avatars/30.jpg",username:"Clément D.",initials:"CD",color:"info"}}],A={class:"list-flex-toolbar is-reversed"},V={class:"tabs-inner"},J={class:"tabs"},K=[d("span",null,"All",-1)],P=[d("span",null,"Saved",-1)],M=d("li",{class:"tab-naver"},null,-1),R={class:"flex-list-wrapper flex-list-v3"},T=d("img",{class:"light-image",src:W,alt:""},null,-1),F=d("img",{class:"dark-image",src:w,alt:""},null,-1),H={key:1,class:"tab-content is-active"},N=["src"],B={class:"item-name dark-inverted"},I={class:"item-meta"},z={class:"flex-media"},G={class:"meta"},O={class:"light-text"},U={class:"light-text no-push"},Y={class:"dot-levels"},$={class:"button v-button has-dot dark-outlined is-pushed-mobile"},q=C(" Purchase "),Q=d("i",{"aria-hidden":"true",class:"fas fa-circle dot"},null,-1),X={key:2,class:"tab-content is-active"},Z=d("img",{class:"light-image is-larger",src:"/assets/courses.a6c1a467.svg",alt:""},null,-1),ee=d("img",{class:"dark-image is-larger",src:"/assets/courses-dark.3be688be.svg",alt:""},null,-1),ae=r({__name:"FlexListV3",props:{activeTab:{default:"all"}},setup(r){const W=r,w=n(""),ae=n(W.activeTab),ie={picture:{label:"Course",grow:"lg"},category:"Category",skill:"Main Skill",difficulty:"Difficulty",actions:{label:"Actions",align:"end"}},le=o((()=>{if(w.value){const e=new RegExp(w.value,"i");return L.filter((a=>a.name.match(e)||a.category.match(e)||a.skill.name.match(e)||a.author.username.match(e)))}return L}));return(r,n)=>{const o=t,W=s,L=l,se=a,te=i,re=e;return c(),u("div",null,[d("div",A,[m(o,{icon:"feather:search"},{default:p((()=>[v(d("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>w.value=e),class:"input custom-text-filter",placeholder:"Search..."},null,512),[[f,w.value]])])),_:1}),d("div",V,[d("div",J,[d("ul",null,[d("li",{class:g(["all"===ae.value&&"is-active"])},[d("a",{tabindex:"0",onKeydown:n[1]||(n[1]=h(y((e=>ae.value="all"),["prevent"]),["space"])),onClick:n[2]||(n[2]=e=>ae.value="all")},K,32)],2),d("li",{class:g(["saved"===ae.value&&"is-active"])},[d("a",{tabindex:"0",onKeydown:n[3]||(n[3]=h(y((e=>ae.value="saved"),["prevent"]),["space"])),onClick:n[4]||(n[4]=e=>ae.value="saved")},P,32)],2),M])])])]),d("div",R,["all"!==ae.value||b(le).length?"all"===ae.value&&b(le).length?(c(),u("div",H,[m(te,{data:b(le),columns:b(ie),rounded:""},{body:p((()=>[m(_,{name:"list",tag:"div",class:"flex-list-inner"},{default:p((()=>[(c(!0),u(j,null,D(b(le),(e=>(c(),u("div",{key:e.id,class:"flex-table-item"},[m(se,{column:{media:!0,grow:!0}},{default:p((()=>[d("img",{class:"media",src:e.picture,alt:"",onErrorOnce:n[5]||(n[5]=e=>b(E)(150,110))},null,40,N),d("div",null,[d("span",B,x(e.name),1),d("div",I,[d("div",z,[m(L,{picture:e.author.picture,size:"small"},null,8,["picture"]),d("div",G,[d("span",null,"by "+x(e.author.username),1)])])])])])),_:2},1024),m(se,null,{default:p((()=>[d("span",O,x(e.category),1)])),_:2},1024),m(se,null,{default:p((()=>[d("i",{"aria-hidden":"true",class:g(["cell-icon is-pushed-mobile",e.skill.icon])},null,2),d("span",U,x(e.skill.name),1)])),_:2},1024),m(se,null,{default:p((()=>[d("span",Y,[d("i",{class:g(["fas fa-circle dot active",e.difficulty>=1?"active":""]),"aria-hidden":"true"},null,2),d("i",{class:g(["fas fa-circle dot",e.difficulty>=2?"active":""]),"aria-hidden":"true"},null,2),d("i",{class:g(["fas fa-circle dot",e.difficulty>=3?"active":""]),"aria-hidden":"true"},null,2),d("i",{class:g(["fas fa-circle dot",e.difficulty>=4?"active":""]),"aria-hidden":"true"},null,2),d("i",{class:g(["fas fa-circle dot",5===e.difficulty?"active":""]),"aria-hidden":"true"},null,2)])])),_:2},1024),m(se,{columns:{align:"end"}},{default:p((()=>[d("a",$,[q,Q,C(" $"+x(e.price),1)])])),_:2},1024)])))),128))])),_:1})])),_:1},8,["data","columns"]),b(le).length>5?(c(),k(re,{key:0,"item-per-page":10,"total-items":873,"current-page":42,"max-links-displayed":7})):S("",!0)])):"saved"===ae.value&&b(le).length?(c(),u("div",X,[m(W,{title:"No saved courses.",subtitle:"Looks like you don't have any saved courses yet. You can add a\n              course to your saved courses by visiting the course details and\n              clicking on the bookmark button."},{image:p((()=>[Z,ee])),_:1})])):S("",!0):(c(),k(W,{key:0,title:"We couldn't find any matching results.",subtitle:"Too bad. Looks like we couldn't find any matching results for the\n          search terms you've entered. Please try different search terms or\n          criteria.",larger:""},{image:p((()=>[T,F])),_:1}))])])}}});export{ae as _};
