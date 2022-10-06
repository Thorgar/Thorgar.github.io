import{_ as e}from"./VFlex.vue_vue_type_style_index_0_lang.371bf798.js";import{A as a,D as t,G as n,c as i,j as r,o as l,a as o,w as s,e as u,b as c,k as p,f as g,I as d,H as m,m as f,d as v,g as y,l as h,i as k,t as _,F as b}from"./index.81bb9900.js";const P={class:"pagination-list"},x=k(" 1 "),z={key:0},K=[u("span",{class:"pagination-ellipsis"},"…",-1)],M={key:1},w=[u("span",{class:"pagination-ellipsis"},"…",-1)],C={key:2},D=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1),I=u("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),j=a({__name:"VFlexPagination",props:{itemPerPage:null,totalItems:null,currentPage:{default:1},maxLinksDisplayed:{default:4},noRouter:{type:Boolean},routerQueryKey:{default:"page"}},emits:["update:currentPage"],setup(a,{emit:j}){const L=a,{t:R}=t(),$=n(),F=i((()=>Math.ceil(L.totalItems/L.itemPerPage)||1)),G=i((()=>F.value>L.maxLinksDisplayed+2?L.maxLinksDisplayed+2:F.value)),Q=i((()=>{const e=[];let a=L.currentPage-Math.floor(G.value/2),t=a+(G.value-Math.ceil(G.value%2));a<1&&(a=1,t=a+(G.value-1)),t>F.value&&(t=F.value,a=t-(G.value-1));for(let n=a;n<=t;n+=1)n!==a&&n!==t&&e.push(n);return e})),q=i((()=>F.value>1)),A=(e=1)=>{if(L.noRouter)return{};const a=Math.max(1,Math.min(e,F.value)),t={...$.query};return L.routerQueryKey&&(t[L.routerQueryKey]=a<=1?void 0:a),{name:$.name,params:$.params,query:t}},V=(e,a=1)=>{const t=Math.max(1,Math.min(a,F.value));if(j("update:currentPage",t),L.noRouter)return e.preventDefault(),e.stopPropagation(),!1};return(t,n)=>{const i=r("RouterLink"),j=e;return l(),o(j,{role:"navigation",class:"flex-pagination pagination is-rounded","aria-label":"pagination","justify-content":"space-between"},{default:s((()=>[u("ul",P,[c(t.$slots,"before-pagination"),u("li",null,[p(i,{to:A(1),tabindex:"0",class:g(["pagination-link",[1===a.currentPage&&"is-current"]]),"aria-label":d(R)("goto-page-title",{page:1}),onKeydown:n[0]||(n[0]=m(f((e=>e.target.click()),["prevent"]),["space"])),onClick:n[1]||(n[1]=e=>V(e,1))},{default:s((()=>[x])),_:1},8,["to","aria-label","class"])]),d(q)&&(0===d(Q).length||d(Q)[0]>2)?(l(),v("li",z,K)):y("",!0),(l(!0),v(b,null,h(d(Q),(e=>(l(),v("li",{key:e},[p(i,{to:A(e),tabindex:"0",class:g(["pagination-link",[a.currentPage===e&&"is-current"]]),"aria-label":d(R)("goto-page-title",{page:e}),"aria-current":a.currentPage===e?"page":void 0,onKeydown:n[2]||(n[2]=m(f((e=>e.target.click()),["prevent"]),["space"])),onClick:a=>V(a,e)},{default:s((()=>[k(_(e),1)])),_:2},1032,["to","aria-label","aria-current","class","onClick"])])))),128)),d(q)&&d(Q)[d(Q).length-1]<d(F)-1?(l(),v("li",M,w)):y("",!0),d(q)?(l(),v("li",C,[p(i,{to:A(d(F)),tabindex:"0",class:g(["pagination-link",[a.currentPage===d(F)&&"is-current"]]),"aria-label":d(R)("goto-page-title",{page:d(F)}),onKeydown:n[3]||(n[3]=m(f((e=>e.target.click()),["prevent"]),["space"])),onClick:n[4]||(n[4]=e=>V(e,d(F)))},{default:s((()=>[k(_(d(F)),1)])),_:1},8,["to","aria-label","class"])])):y("",!0),c(t.$slots,"after-pagination")]),c(t.$slots,"before-navigation"),p(i,{to:A(a.currentPage-1),tabindex:"0",class:"pagination-previous has-chevron",onKeydown:n[5]||(n[5]=m(f((e=>e.target.click()),["prevent"]),["space"])),onClick:n[6]||(n[6]=e=>V(e,a.currentPage-1))},{default:s((()=>[D])),_:1},8,["to"]),p(i,{to:A(a.currentPage+1),tabindex:"0",class:"pagination-next has-chevron",onKeydown:n[7]||(n[7]=m(f((e=>e.target.click()),["prevent"]),["space"])),onClick:n[8]||(n[8]=e=>V(e,a.currentPage+1))},{default:s((()=>[I])),_:1},8,["to"]),c(t.$slots,"after-navigation")])),_:3})}}});function L(e){e.__i18n=e.__i18n||[],e.__i18n.push({locale:"",resource:{de:{"goto-page-title":e=>{const{normalize:a,interpolate:t,named:n}=e;return a(["Gehe zu Seite ",t(n("page"))])}},en:{"goto-page-title":e=>{const{normalize:a,interpolate:t,named:n}=e;return a(["Goto page ",t(n("page"))])}},"es-MX":{"goto-page-title":e=>{const{normalize:a,interpolate:t,named:n}=e;return a(["Ir a la página ",t(n("page"))])}},es:{"goto-page-title":e=>{const{normalize:a,interpolate:t,named:n}=e;return a(["Ir a la página ",t(n("page"))])}},fr:{"goto-page-title":e=>{const{normalize:a,interpolate:t,named:n}=e;return a(["Aller à la page ",t(n("page"))])}},"zh-CN":{"goto-page-title":e=>{const{normalize:a,interpolate:t,named:n}=e;return a(["转到第",t(n("page")),"页"])}}}})}L(j);export{j as _};
