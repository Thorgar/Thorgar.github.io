import{_ as e}from"./VLoader.vue_vue_type_style_index_0_lang.b2188f53.js";import{_ as a}from"./VBlock.vue_vue_type_style_index_0_lang.aea3d243.js";import{_ as i}from"./VIconBox.vue_vue_type_style_index_0_lang.4b5893ab.js";import{_ as t}from"./VAvatar.vue_vue_type_style_index_0_lang.4faa0bb7.js";import{A as l,C as s,c as n,u as d,$ as c,j as o,o as r,d as u,e as p,k as m,I as v,w as _,t as b,a as h,F as y,l as f}from"./index.81bb9900.js";import{d as g}from"./dayjs.c5268440.js";import{u as j}from"./wizard.03916eaa.js";import"./via-placeholder.c9fc0738.js";import"./chunk-J5OVEZKG.926eac83.js";import"./sleep.2a252ff4.js";const w={id:"wizard-step-6",class:"inner-wrapper is-active","data-step-title":"Preview"},k={class:"step-content"},x=p("div",{class:"step-title"},[p("h2",{class:"dark-inverted"},"Make sure everything is good"),p("p",null,"You can go back to previous steps if you need to edit anything.")],-1),z={class:"project-preview-header"},D={class:"title is-4 is-narrow is-thin"},P={key:0},T={key:1},F=p("i",{"aria-hidden":"true",class:"lnil lnil-pencil"},null,-1),M={class:"project-preview-body"},N={class:"columns is-multiline"},V={class:"column is-12 is-tablet-100"},Y={class:"edit-box"},A=p("h4",null,"Description",-1),C=p("i",{"aria-hidden":"true",class:"lnil lnil-pencil"},null,-1),L={key:0},S={key:1},B={class:"column is-6 is-tablet-50"},E={class:"edit-box"},Q=p("i",{"aria-hidden":"true",class:"lnil lnil-pencil"},null,-1),R=p("i",{"aria-hidden":"true",class:"lnil lnil-vector-pen"},null,-1),U={class:"column is-6 is-tablet-50"},q={class:"edit-box"},G=p("i",{"aria-hidden":"true",class:"lnil lnil-pencil"},null,-1),I={key:1,class:"edit-box-placeholder is-media"},H=[p("span",null,"No selected customer",-1)],J={class:"column is-4 is-tablet-33"},K={class:"edit-box"},O=p("i",{"aria-hidden":"true",class:"lnil lnil-pencil"},null,-1),Z={class:"estimated-budget"},$={class:"inner-block"},W={class:"budget"},X=p("p",null,"Estimated Budget",-1),ee={class:"column is-4 is-tablet-33"},ae={class:"edit-box"},ie=p("i",{"aria-hidden":"true",class:"lnil lnil-pencil"},null,-1),te={class:"estimated-due-date"},le={class:"inner-block"},se={class:"date"},ne=p("p",null,"Estimated Due Date",-1),de={class:"column is-4 is-tablet-33"},ce={class:"edit-box"},oe=p("i",{"aria-hidden":"true",class:"lnil lnil-pencil"},null,-1),re={class:"attachments-count"},ue={class:"inner-block"},pe={class:"attachments"},me={key:0},ve={key:1},_e=p("p",null,"Attachments",-1),be={class:"column is-6 is-tablet-50"},he={class:"edit-box"},ye=p("h4",null,"Team",-1),fe=p("i",{"aria-hidden":"true",class:"lnil lnil-pencil"},null,-1),ge={key:0,class:"edit-box-placeholder is-media"},je=[p("span",null,"No selected teammate",-1)],we={key:1,class:"media-list"},ke={class:"column is-6 is-tablet-50"},xe={class:"edit-box"},ze=p("h4",null,"Tools",-1),De=p("i",{"aria-hidden":"true",class:"lnil lnil-pencil"},null,-1),Pe={key:0,class:"edit-box-placeholder is-list"},Te=[p("span",null,"No selected tools",-1)],Fe={key:1,class:"media-list"},Me=g.__esModule?g.default:g,Ne=l({__name:"project-review",setup(l){const g=j(),Ne=s();g.setStep({number:7,canNavigate:!0,previousStepFn:async()=>{Ne.push({name:"/wizard-v1/project-tools"})},validateStepFn:async()=>{Ne.push({name:"/wizard-v1/success"})}});const Ve=n((()=>g.data.name.slice(0,1).toUpperCase()||"P")),Ye=n((()=>Me(g.data.timeFrame.end).format("MMM D, YYYY"))),Ae=d("");return c((async()=>{try{Ae.value=await new Promise(((e,a)=>{if(g.data.logo){const i=new FileReader;i.readAsDataURL(g.data.logo),i.onload=()=>{var a;return e((null==(a=i.result)?void 0:a.toString())||"")},i.onerror=e=>a(e)}else Ae.value=""}))}catch(e){Ae.value=""}})),(l,s)=>{const n=t,d=o("RouterLink"),c=i,j=a,Me=e;return r(),u("div",w,[p("div",k,[x,m(Me,{size:"xl",class:"project-preview-wrapper",active:v(g).loading,grey:""},{default:_((()=>[p("div",z,[m(n,{color:"h-green",size:"big",initials:v(Ve),picture:Ae.value},null,8,["initials","picture"]),p("h3",D,[v(g).data.name?(r(),u("span",P,b(v(g).data.name),1)):(r(),u("span",T,"Project Title Goes Here")),m(d,{class:"edit-icon",to:"/wizard-v1/project-info"},{default:_((()=>[F])),_:1})])]),p("div",M,[p("div",N,[p("div",V,[p("div",Y,[A,m(d,{class:"edit-icon",to:"/wizard-v1/project-info"},{default:_((()=>[C])),_:1}),v(g).data.description?(r(),u("p",L,b(v(g).data.description),1)):(r(),u("p",S," Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis negat? Tamen a proposito, inquam, aberramus. Deinde dolorem quem maximum? Quae duo sunt, unum facit. Quod vestri non item. "))])]),p("div",B,[p("div",E,[m(d,{class:"edit-icon",to:"/wizard-v1"},{default:_((()=>[Q])),_:1}),m(j,{title:v(g).data.relatedTo,subtitle:"Project Type",center:""},{icon:_((()=>[m(c,{size:"medium",color:"warning",rounded:""},{default:_((()=>[R])),_:1})])),_:1},8,["title"])])]),p("div",U,[p("div",q,[m(d,{class:"edit-icon",to:"/wizard-v1/project-details"},{default:_((()=>[G])),_:1}),v(g).data.customer?(r(),h(j,{key:0,title:v(g).data.customer.name,subtitle:"Project Customer",center:""},{icon:_((()=>[m(n,{size:"medium",picture:v(g).data.customer.logo},null,8,["picture"])])),_:1},8,["title"])):(r(),u("div",I,H))])]),p("div",J,[p("div",K,[m(d,{class:"edit-icon",to:"/wizard-v1/project-details"},{default:_((()=>[O])),_:1}),p("div",Z,[p("div",$,[p("div",W,[p("span",null,b(v(g).data.budget),1)]),X])])])]),p("div",ee,[p("div",ae,[m(d,{class:"edit-icon",to:"/wizard-v1/project-details"},{default:_((()=>[ie])),_:1}),p("div",te,[p("div",le,[p("div",se,[p("span",null,b(v(Ye)),1)]),ne])])])]),p("div",de,[p("div",ce,[m(d,{class:"edit-icon",to:"/wizard-v1/project-files"},{default:_((()=>[oe])),_:1}),p("div",re,[p("div",ue,[p("div",pe,[v(g).data.attachments.length?(r(),u("span",me,b(v(g).data.attachments.length),1)):(r(),u("span",ve,"No"))]),_e])])])]),p("div",be,[p("div",he,[ye,m(d,{class:"edit-icon",to:"/wizard-v1/project-team"},{default:_((()=>[fe])),_:1}),0===v(g).data.teammates.length?(r(),u("div",ge,je)):(r(),u("div",we,[(r(!0),u(y,null,f(v(g).data.teammates,(e=>{return r(),u("div",{key:e.name,class:"media-list-item"},[m(j,{title:e.name,subtitle:(a=e.role,a.slice(0,1).toUpperCase()+a.slice(1)),center:""},{icon:_((()=>[m(n,{picture:e.picture},null,8,["picture"])])),_:2},1032,["title","subtitle"])]);var a})),128))]))])]),p("div",ke,[p("div",xe,[ze,m(d,{class:"edit-icon",to:"/wizard-v1/project-tools"},{default:_((()=>[De])),_:1}),0===v(g).data.tools.length?(r(),u("div",Pe,Te)):(r(),u("div",Fe,[(r(!0),u(y,null,f(v(g).data.tools,(e=>(r(),u("div",{key:e.name,class:"media-list-item"},[m(j,{title:e.name,subtitle:e.description,center:""},{icon:_((()=>[m(n,{picture:e.logo},null,8,["picture"])])),_:2},1032,["title","subtitle"])])))),128))]))])])])])])),_:1},8,["active"])])])}}});export{Ne as default};
