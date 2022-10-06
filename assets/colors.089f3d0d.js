import{_ as e}from"./DocumentationItem.ee20e77c.js";import{o as a,a as r,w as t,e as n,i as o,u as l,r as c,c as s,v as i,y as u,a8 as p,d,b as v,g as h,I as f,F as g,l as m,t as b,A as y,ag as w,b0 as x,b1 as k,k as $,H as _,m as C,T as S,N as z,S as A,U as N,_ as E,B as j}from"./index.81bb9900.js";import{_ as I}from"./VAction.vue_vue_type_style_index_0_lang.89aca143.js";import{_ as L}from"./VBreadcrumb.vue_vue_type_style_index_0_lang.5e3b4532.js";import{u as M}from"./viewWrapper.ff52ac28.js";import"./VIcon.vue_vue_type_script_setup_true_lang.52444b90.js";const T=n("h3",{id:"customizing-css-variables",tabindex:"-1"},"Customizing CSS Variables",-1),F=n("p",null,[o("We created a new folder and some bew files in "),n("code",null,"src/scss/css-variables"),o(". There, we use a new utility mixin "),n("code",null,"src/scss/css-variables/_mixins.scss"),o(" to generate all our colors in the other files. Please also note that you can also customize font variables and corner radiuses at runtime.")],-1);const H={disable_code:!0,disable_example:!0},P={render:function(n,o){const l=e;return a(),r(l,{frontmatter:n.frontmatter},{default:t((()=>[T,F])),_:1},8,["frontmatter"])},data:()=>({frontmatter:H})},V=n("h3",{id:"theming",tabindex:"-1"},"Theming",-1),W=n("p",null,[o("Changing Vuero colors is now a bit more complicated than before but we will point you to the right files so everything remains as easy as before. To customize Vuero base colors, which are used to generate all derived ones, you need to edit "),n("code",null,"src/bulma-css-vars.config.js"),o(". There you can edit all the "),n("code",null,"primary"),o(" and other related base variables. Please note that we also switched the base notation to "),n("code",null,"HSL"),o(" in replacement of "),n("code",null,"HEX"),o(".")],-1);const O={disable_code:!0,disable_example:!0},B={render:function(n,o){const l=e;return a(),r(l,{frontmatter:n.frontmatter},{default:t((()=>[V,W])),_:1},8,["frontmatter"])},data:()=>({frontmatter:O})};function D(e,a,r){return Math.max(a,Math.min(e,r))}function K(e,a=2){return e.toFixed(a).replace(/\.?0+$/,"")}function U(e){return e.endsWith(".")?NaN:(parseFloat(e)%360+360)%360/360}function q(e){return K(360*e)}function R(e){if(!e.endsWith("%"))return NaN;const a=e.substring(0,e.length-1);if(a.endsWith("."))return NaN;const r=parseFloat(a);return Number.isNaN(r)?NaN:D(r,0,100)/100}function X(e){return K(100*e)+"%"}function Y(e){if(e.endsWith("%"))return R(e);if(e.endsWith("."))return NaN;const a=parseFloat(e);return Number.isNaN(a)?NaN:D(a,0,255)/255}function G(e){return K(255*e)}function J(e){return e.endsWith("%")?R(e):D(parseFloat(e),0,1)}function Q(e){return String(e)}var Z={hsl:{h:{to:q,from:U},s:{to:X,from:R},l:{to:X,from:R},a:{to:Q,from:J}},hwb:{h:{to:q,from:U},w:{to:X,from:R},b:{to:X,from:R},a:{to:Q,from:J}},rgb:{r:{to:G,from:Y},g:{to:G,from:Y},b:{to:G,from:Y},a:{to:Q,from:J}}};function ee(e){const a=e.replace(/^#/,""),r=[],t=a.length>4?2:1;for(let o=0;o<a.length;o+=t){const e=a.slice(o,o+t);r.push(e.repeat(t%2+1))}3===r.length&&r.push("ff");const n=r.map((e=>parseInt(e,16)/255));return{r:n[0],g:n[1],b:n[2],a:n[3]}}function ae(e){const a=e.l<.5?e.l*(1+e.s):e.l+e.s-e.l*e.s,r=2*e.l-a;return{r:re(r,a,e.h+1/3),g:re(r,a,e.h),b:re(r,a,e.h-1/3),a:e.a}}function re(e,a,r){return r<0?r+=1:r>1&&(r-=1),r<1/6?e+6*(a-e)*r:r<.5?a:r<2/3?e+(a-e)*(2/3-r)*6:e}function te(e){return{r:ne(5,e),g:ne(3,e),b:ne(1,e),a:e.a}}function ne(e,a){const r=(e+6*a.h)%6;return a.v-a.v*a.s*Math.max(0,Math.min(r,4-r,1))}function oe(e){return{h:e.h,s:1===e.b?0:1-e.w/(1-e.b),v:1-e.b,a:e.a}}function le(e){const a=Math.min(e.r,e.g,e.b),r=Math.max(e.r,e.g,e.b);let t;return t=r===a?0:r===e.r?(0+(e.g-e.b)/(r-a))/6:r===e.g?(2+(e.b-e.r)/(r-a))/6:(4+(e.r-e.g)/(r-a))/6,t<0&&(t+=1),{h:t,w:a,b:1-r,a:e.a}}function ce(e){const a=le(e),r=a.w,t=1-a.b,n=(t+r)/2;let o;return o=0===t||1===r?0:(t-n)/Math.min(n,1-n),{h:a.h,s:o,l:n,a:e.a}}function se(e){return"#"+Object.values(e).map((e=>{const a=255*e,r=Math.round(a).toString(16);return 1===r.length?"0"+r:r})).join("")}var ie={hex:[["hsl",e=>ue(e,[ee,ce])],["hsv",e=>ue(e,[ee,le,oe])],["hwb",e=>ue(e,[ee,le])],["rgb",ee]],hsl:[["hex",e=>ue(e,[ae,se])],["hsv",function(e){const a=e.l+e.s*Math.min(e.l,1-e.l),r=0===a?0:2-2*e.l/a;return{h:e.h,s:r,v:a,a:e.a}}],["hwb",e=>ue(e,[ae,le])],["rgb",ae]],hsv:[["hex",e=>ue(e,[te,se])],["hsl",function(e){const a=e.v-e.v*e.s/2,r=Math.min(a,1-a),t=0===r?0:(e.v-a)/r;return{h:e.h,s:t,l:a,a:e.a}}],["hwb",function(e){return{h:e.h,w:(1-e.s)*e.v,b:1-e.v,a:e.a}}],["rgb",te]],hwb:[["hex",e=>ue(e,[oe,te,se])],["hsl",e=>ue(e,[oe,te,ce])],["hsv",oe],["rgb",e=>ue(e,[oe,te])]],rgb:[["hex",se],["hsl",ce],["hsv",e=>ue(e,[le,oe])],["hwb",le]]};function ue(e,a){return a.reduce(((e,a)=>a(e)),e)}function pe(e){const a={};for(const r in e)a[r]=e[r];return a}var de={hex:(e,a)=>a&&[5,9].includes(e.length)?e.substring(0,e.length-(e.length-1)/4):e,hsl:(e,a)=>`hsl(${K(360*e.h)} ${K(100*e.s)}% ${K(100*e.l)}%`+(a?")":` / ${K(e.a)})`),hwb:(e,a)=>`hwb(${K(360*e.h)} ${K(100*e.w)}% ${K(100*e.b)}%`+(a?")":` / ${K(e.a)})`),rgb:(e,a)=>`rgb(${K(255*e.r)} ${K(255*e.g)} ${K(255*e.b)}`+(a?")":` / ${K(e.a)})`)};function ve(e,a,r){return de[a](e,r)}function he(e){return/^#(?:(?:[A-F0-9]{2}){3,4}|[A-F0-9]{3,4})$/i.test(e)}var fe=["hex","hsl","hwb","rgb"],ge=["show","hide"],me={class:"vacp-range-input-group"},be=["for"],ye={class:"vacp-range-input-label-text vacp-range-input-label-text--hue"},we=o("Hue"),xe=["id","value"],ke=["for"],$e={class:"vacp-range-input-label-text vacp-range-input-label-text--alpha"},_e=o("Alpha"),Ce=["id","value"],Se=o(" Copy color "),ze={class:"vacp-color-inputs"},Ae={class:"vacp-color-input-group"},Ne=["for"],Ee=n("span",{class:"vacp-color-input-label-text"}," Hex ",-1),je=["id","value"],Ie=["id","for","onInput"],Le={class:"vacp-color-input-label-text"},Me=["id","value","onInput"],Te=o(" Switch format "),Fe={__name:"ColorPicker",props:{color:{type:[String,Object],required:!1,default:"#ffffffff"},id:{type:String,required:!1,default:"color-picker"},visibleFormats:{type:Array,required:!1,default:()=>fe,validator:e=>e.length>0&&e.every((e=>fe.includes(e)))},defaultFormat:{type:String,required:!1,default:"hsl",validator:e=>fe.includes(e)},alphaChannel:{type:String,required:!1,default:"show",validator:e=>ge.includes(e)}},emits:["color-change"],setup(e,{emit:r}){const t=e,o=l(null),y=l(null),w=l(null),x=l(!1),k=l(t.defaultFormat),$=c({hex:"#ffffffff",hsl:{h:0,s:0,l:1,a:1},hsv:{h:0,s:0,v:1,a:1},hwb:{h:0,w:1,b:0,a:1},rgb:{r:1,g:1,b:1,a:1}}),_=s((function(){const e=Object.keys($[k.value]);return"hex"!==k.value&&"hide"===t.alphaChannel?e.slice(0,3):e})),C=s((function(){return"hide"===t.alphaChannel&&[5,9].includes($.hex.length)?$.hex.substring(0,$.hex.length-($.hex.length-1)/4):$.hex}));function S(){const e=(t.visibleFormats.findIndex((e=>e===k.value))+1)%t.visibleFormats.length;k.value=t.visibleFormats[e]}function z(e){x.value=!0,E(e)}function A(e){x.value=!0,j(e)}function N(){x.value=!1}function E(e){1===e.buttons&&!1!==x.value&&y.value instanceof HTMLElement&&I(y.value,e.clientX,e.clientY)}function j(e){if(!1===x.value||!(y.value instanceof HTMLElement))return;e.preventDefault();const a=e.touches[0];I(y.value,a.clientX,a.clientY)}function I(e,a,r){const t=function(e,a,r){const t=e.getBoundingClientRect(),n=a-t.left,o=r-t.top;return{x:D(n/t.width,0,1),y:D(1-o/t.height,0,1)}}(e,a,r),n=pe($.hsv);n.s=t.x,n.v=t.y,P("hsv",n)}function L(e){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(e.key))return;e.preventDefault();const a=["ArrowLeft","ArrowDown"].includes(e.key)?-1:1,r=["ArrowLeft","ArrowRight"].includes(e.key)?"s":"v",t=e.shiftKey?10:1,n=$.hsv[r]+a*t*.01,o=pe($.hsv);o[r]=D(n,0,1),P("hsv",o)}function M(e){const a=function(e){if("string"!=typeof e)return{format:(a=e,Object.prototype.hasOwnProperty.call(a,"r")?"rgb":Object.prototype.hasOwnProperty.call(a,"w")?"hwb":Object.prototype.hasOwnProperty.call(a,"v")?"hsv":"hsl"),color:e};var a;if(he(e))return{format:"hex",color:e};if(!e.includes("(")){const a=document.createElement("canvas").getContext("2d");a.fillStyle=e;const r=a.fillStyle;return"#000000"===r&&"black"!==e?null:{format:"hex",color:r}}const[r,t]=e.split("("),n=r.substring(0,3),o=t.replace(/[,/)]/g," ").replace(/\s+/g," ").trim().split(" ");3===o.length&&o.push("1");const l=n.split("").concat("a"),c=Object.fromEntries(l.map(((e,a)=>[e,Z[n][e].from(o[a])])));return{format:n,color:c}}(e);null!==a&&P(a.format,a.color)}function T(e){const a=e.currentTarget,r=pe($.hsv);r.h=parseInt(a.value)/360,P("hsv",r)}function F(e){const a=e.currentTarget,r=pe($.hsv);r.a=parseInt(a.value)/100,P("hsv",r)}function H(e,a){const r=e.target,t=pe($[k.value]),n=Z[k.value][a].from(r.value);Number.isNaN(n)||void 0===n||(t[a]=n,P(k.value,t))}function P(e,a){let n=a;if("hide"===t.alphaChannel)if("string"!=typeof a)a.a=1,n=a;else if([5,9].includes(a.length)){const e=(a.length-1)/4;n=a.substring(0,a.length-e)+"f".repeat(e)}else[4,7].includes(a.length)&&(n=a+"f".repeat((a.length-1)/3));if(!function(e,a){if("string"==typeof e||"string"==typeof a)return e===a;for(const r in e)if(e[r]!==a[r])return!1;return!0}($[e],n)){!function(e,a){$[e]=a;for(const[r,t]of ie[e])$[r]=t($[e])}(e,n);const a=function(){const e="hide"===t.alphaChannel,a=ve($[k.value],k.value,e);return{colors:$,cssColor:a}}();r("color-change",a)}o.value instanceof HTMLElement&&y.value instanceof HTMLElement&&w.value instanceof HTMLElement&&(o.value.style.setProperty("--vacp-hsl-h",String($.hsl.h)),o.value.style.setProperty("--vacp-hsl-s",String($.hsl.s)),o.value.style.setProperty("--vacp-hsl-l",String($.hsl.l)),o.value.style.setProperty("--vacp-hsl-a",String($.hsl.a)),y.value.setAttribute("style","\n    position: relative;\n    background-color: hsl(calc(var(--vacp-hsl-h) * 360) 100% 50%); /* 1. */\n    background-image:\n      linear-gradient(to top, #000, transparent),  /* 2. */\n      linear-gradient(to right, #fff, transparent) /* 2. */\n    ;\n  "),w.value.setAttribute("style",`\n    box-sizing: border-box;\n    position: absolute;\n    left: ${100*$.hsv.s}%;   /* 3. */\n    bottom: ${100*$.hsv.v}%; /* 3. */\n  `))}async function V(){const e=$[k.value],a="hide"===t.alphaChannel,r=ve(e,k.value,a);await window.navigator.clipboard.writeText(r)}function W(e,a){return Z[e][a].to($[e][a])}function O(e){if(!["ArrowUp","ArrowRight","ArrowDown","ArrowLeft"].includes(e.key)||!e.shiftKey)return;const a=e.currentTarget,r=parseFloat(a.step),t=["ArrowLeft","ArrowDown"].includes(e.key)?-1:1,n=D(parseFloat(a.value)+t*r*10,parseInt(a.min),parseInt(a.max));a.value=String(n-t*r)}return i((()=>t.color),M),u((function(){document.addEventListener("mousemove",E,{passive:!1}),document.addEventListener("touchmove",j,{passive:!1}),document.addEventListener("mouseup",N),document.addEventListener("touchend",N),M(t.color)})),p((function(){document.removeEventListener("mousemove",E),document.removeEventListener("touchmove",j),document.removeEventListener("mouseup",N),document.removeEventListener("touchend",N)})),(r,t)=>(a(),d("div",{ref_key:"colorPicker",ref:o,class:"vacp-color-picker"},[n("div",{ref_key:"colorSpace",ref:y,class:"vacp-color-space",onMousedown:z,onTouchstart:A},[n("div",{ref_key:"thumb",ref:w,class:"vacp-color-space-thumb",tabindex:"0","aria-label":"Color space thumb",onKeydown:L},null,544)],544),n("div",me,[n("label",{class:"vacp-range-input-label vacp-range-input-label--hue",for:`${e.id}-hue-slider`},[n("span",ye,[v(r.$slots,"hue-range-input-label",{},(()=>[we]))]),n("input",{id:`${e.id}-hue-slider`,class:"vacp-range-input vacp-range-input--hue",value:360*$.hsv.h,type:"range",min:"0",max:"360",step:"1",onKeydownPassive:O,onInput:T},null,40,xe)],8,be),"show"===e.alphaChannel?(a(),d("label",{key:0,class:"vacp-range-input-label vacp-range-input-label--alpha",for:`${e.id}-alpha-slider`},[n("span",$e,[v(r.$slots,"alpha-range-input-label",{},(()=>[_e]))]),n("input",{id:`${e.id}-alpha-slider`,class:"vacp-range-input vacp-range-input--alpha",value:100*$.hsv.a,type:"range",min:"0",max:"100",step:"1",onKeydownPassive:O,onInput:F},null,40,Ce)],8,ke)):h("",!0)]),n("button",{class:"vacp-copy-button",type:"button",onClick:V},[v(r.$slots,"copy-button",{},(()=>[Se]))]),n("div",ze,[n("div",Ae,["hex"===k.value?(a(),d("label",{key:0,class:"vacp-color-input-label",for:`${e.id}-color-hex`},[Ee,n("input",{id:`${e.id}-color-hex`,class:"vacp-color-input",type:"text",value:f(C),onInput:t[0]||(t[0]=e=>function(e){const a=e.target;he(a.value)&&P("hex",a.value)}(e))},null,40,je)],8,Ne)):(a(!0),d(g,{key:1},m(f(_),(r=>(a(),d("label",{id:`${e.id}-color-${k.value}-${r}`,key:`${e.id}-color-${k.value}-${r}`,class:"vacp-color-input-label",for:`${e.id}-color-${k.value}`,onInput:e=>H(e,r)},[n("span",Le,b(r.toUpperCase()),1),n("input",{id:`${e.id}-color-${k.value}`,class:"vacp-color-input",type:"text",value:W(k.value,r),onInput:e=>H(e,r)},null,40,Me)],40,Ie)))),128))]),e.visibleFormats.length>1?(a(),d("button",{key:0,class:"vacp-format-switch-button",type:"button",onClick:S},[v(r.$slots,"format-switch-button",{},(()=>[Te]))])):h("",!0)])],512))}};!function(e,a){void 0===a&&(a={});var r=a.insertAt;if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}('.vacp-color-picker{--vacp-color:hsl(calc(var(--vacp-hsl-h) * 360) calc(var(--vacp-hsl-s) * 100%) calc(var(--vacp-hsl-l) * 100%) / var(--vacp-hsl-a));--vacp-focus-color:dodgerblue;--vacp-color-space-width:300px;--vacp-spacing:6px;--vacp-tiled-background-image:linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee),linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee);max-width:var(--vacp-color-space-width);padding:var(--vacp-spacing);display:grid;grid-gap:var(--vacp-spacing);grid-template-columns:1fr min-content;grid-template-areas:"color-space color-space" "range-inputs copy-button" "color-inputs color-inputs";font-size:.8em;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;background-color:#fff}.vacp-color-picker *,.vacp-color-picker ::after,.vacp-color-picker ::before{box-sizing:border-box}.vacp-color-picker button::-moz-focus-inner{border:none;padding:0}.vacp-color-picker :focus{outline:2px solid var(--vacp-focus-color)}.vacp-color-space{grid-area:color-space;overflow:hidden;height:calc(var(--vacp-color-space-width) * .6)}.vacp-color-space-thumb{--vacp-thumb-size:calc(var(--vacp-spacing) * 4);width:var(--vacp-thumb-size);height:var(--vacp-thumb-size);margin-left:calc(-1 * var(--vacp-thumb-size)/ 2);margin-bottom:calc(-1 * var(--vacp-thumb-size)/ 2);border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 1px #000}.vacp-color-space-thumb:focus{outline-color:transparent;box-shadow:0 0 0 1px #000,0 0 0 3px var(--vacp-focus-color)}.vacp-range-input-label{--vacp-slider-track-width:100%;--vacp-slider-track-height:calc(var(--vacp-spacing) * 3);--vacp-slider-thumb-size:calc(var(--vacp-slider-track-height) + var(--vacp-spacing));display:block}.vacp-range-input-group{grid-area:range-inputs;display:flex;flex-direction:column;justify-content:center}.vacp-range-input-group>:not(:first-child){margin-top:var(--vacp-spacing)}.vacp-range-input,.vacp-range-input::-webkit-slider-thumb{-webkit-appearance:none}.vacp-range-input{display:block;width:var(--vacp-slider-track-width);height:var(--vacp-slider-track-height);margin-right:0;margin-left:0;margin-top:calc(var(--vacp-spacing)/ 2);margin-bottom:calc(var(--vacp-spacing)/ 2);padding:0;border:none;background:0 0}.vacp-range-input:focus{outline:0}.vacp-range-input::-moz-focus-outer{border:none}.vacp-range-input--alpha{background-color:#fff;background-image:var(--vacp-tiled-background-image);background-size:calc(var(--vacp-spacing) * 2) calc(var(--vacp-spacing) * 2);background-position:0 0,var(--vacp-spacing) var(--vacp-spacing)}.vacp-range-input::-moz-range-track{display:block;box-sizing:border-box;height:var(--vacp-slider-track-height);border:none}.vacp-range-input::-webkit-slider-runnable-track{width:var(--vacp-slider-track-width);height:var(--vacp-slider-track-height);border:none}.vacp-range-input::-ms-track{width:var(--vacp-slider-track-width);height:var(--vacp-slider-track-height);border:none}.vacp-range-input:focus::-moz-range-track{border:1px solid var(--vacp-focus-color);outline:2px solid var(--vacp-focus-color)}.vacp-range-input:focus::-webkit-slider-runnable-track{border:1px solid var(--vacp-focus-color);outline:2px solid var(--vacp-focus-color)}.vacp-range-input:focus::-ms-track{border:1px solid var(--vacp-focus-color);outline:2px solid var(--vacp-focus-color)}.vacp-range-input--alpha::-moz-range-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--alpha::-webkit-slider-runnable-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--alpha::-ms-track{background-image:linear-gradient(to right,transparent,var(--vacp-color))}.vacp-range-input--hue::-moz-range-track{background-image:linear-gradient(to right,red calc(100% * 0/360),#ff0 calc(100% * 60/360),#0f0 calc(100% * 120/360),#0ff calc(100% * 180/360),#00f calc(100% * 240/360),#f0f calc(100% * 300/360),red calc(100% * 360/360))}.vacp-range-input--hue::-webkit-slider-runnable-track{background-image:linear-gradient(to right,red calc(100% * 0/360),#ff0 calc(100% * 60/360),#0f0 calc(100% * 120/360),#0ff calc(100% * 180/360),#00f calc(100% * 240/360),#f0f calc(100% * 300/360),red calc(100% * 360/360))}.vacp-range-input--hue::-ms-track{background-image:linear-gradient(to right,red calc(100% * 0/360),#ff0 calc(100% * 60/360),#0f0 calc(100% * 120/360),#0ff calc(100% * 180/360),#00f calc(100% * 240/360),#f0f calc(100% * 300/360),red calc(100% * 360/360))}.vacp-range-input::-moz-range-thumb{box-sizing:border-box;width:var(--vacp-slider-thumb-size);height:var(--vacp-slider-thumb-size);border:3px solid #fff;border-radius:50%;background-color:transparent;box-shadow:0 0 0 1px #000;transform:rotate(0)}.vacp-range-input::-webkit-slider-thumb{width:var(--vacp-slider-thumb-size);height:var(--vacp-slider-thumb-size);margin-top:calc((var(--vacp-slider-track-height) - var(--vacp-slider-thumb-size))/ 2);border:3px solid #fff;border-radius:50%;background-color:transparent;box-shadow:0 0 0 1px #000;transform:rotate(0)}.vacp-range-input::-ms-thumb{width:var(--vacp-slider-thumb-size);height:var(--vacp-slider-thumb-size);margin-top:0;border:3px solid #fff;border-radius:50%;background-color:transparent;box-shadow:0 0 0 1px #000;transform:rotate(0)}.vacp-copy-button{grid-area:copy-button;justify-self:center;align-self:center;position:relative;overflow:hidden;display:flex;align-items:center;justify-content:center;width:calc(var(--vacp-spacing) * 6);height:calc(var(--vacp-spacing) * 6);border:1px solid transparent;border-radius:50%;color:#fff;background-color:#fff;background-image:linear-gradient(var(--vacp-color),var(--vacp-color)),var(--vacp-tiled-background-image);background-size:calc(var(--vacp-spacing) * 2) calc(var(--vacp-spacing) * 2);background-position:0 0,var(--vacp-spacing) var(--vacp-spacing)}.vacp-copy-button:enabled:not(:hover) svg{display:none}.vacp-copy-button:enabled:focus{outline:0;box-shadow:0 0 0 2px var(--vacp-focus-color);border-color:var(--vacp-focus-color)}.vacp-copy-button:enabled:hover{background-color:var(--vacp-color);background-image:linear-gradient(rgb(0 0 0 / .25),rgb(0 0 0 / .25))}.vacp-color-inputs{grid-area:color-inputs;display:flex;align-items:center}.vacp-color-inputs>:not(:first-child){margin-left:var(--vacp-spacing)}.vacp-color-input-group{flex-grow:1;display:flex}.vacp-color-input-label{flex-grow:1;text-align:center}.vacp-color-input-label:not(:first-child){margin-left:var(--vacp-spacing)}.vacp-color-input{width:100%;margin:0;margin-top:calc(var(--vacp-spacing)/ 2);padding:var(--vacp-spacing);border:1px solid #ccc;font:inherit;text-align:center;color:inherit;background-color:#fff}.vacp-color-input:enabled:focus{border-color:var(--vacp-focus-color)}.vacp-format-switch-button{display:flex;justify-content:center;align-items:center;margin:0;padding:var(--vacp-spacing);border:1px solid transparent;font:inherit;color:inherit;background-color:#fff}.vacp-format-switch-button:enabled:focus{border-color:var(--vacp-focus-color)}.vacp-format-switch-button:enabled:hover{background-color:#eee}');const He=e=>(A("data-v-c2746ef6"),e=e(),N(),e),Pe={class:"color-card"},Ve={class:"color-card-header"},We=He((()=>n("div",{class:"color-dot is-primary"},null,-1))),Oe={class:"meta"},Be={class:"actions"},De={key:0},Ke={key:1},Ue={key:0},qe=He((()=>n("div",{class:"is-divider"},null,-1))),Re={class:"color-picker"},Xe=He((()=>n("span",{class:"sr-only"},"Hue",-1))),Ye=He((()=>n("span",{class:"sr-only"},"Alpha",-1))),Ge=He((()=>n("span",{class:"sr-only"},"Switch format",-1))),Je=He((()=>n("i",{class:"iconify rem-120 is-clickable","aria-hidden":"true","data-icon":"fluent:chevron-up-down-20-filled"},null,-1))),Qe=He((()=>n("div",{class:"is-divider"},null,-1))),Ze=He((()=>n("span",null,"Hue",-1))),ea=He((()=>n("span",null,"Saturation",-1))),aa=He((()=>n("span",null,"Luminance",-1))),ra={key:0,class:"is-copied"},ta={key:1},na=E(y({__name:"DocumentationColor",props:{color:null},setup(e){const r=e;w((e=>({"619f95b8":f(y)})));const o=s((()=>`--${r.color}`)),c=s((()=>`--${r.color}-h`)),i=s((()=>`--${r.color}-s`)),u=s((()=>`--${r.color}-l`)),p=x(o.value),v=x(c.value),g=x(i.value),m=x(u.value),y=s((()=>`hsl(${v.value}, ${g.value}, ${m.value})`)),A=s((()=>`@include colorHsl('${r.color}', ${v.value}, ${g.value}, ${m.value});`)),{text:N,copy:E,copied:j}=k(),L=l(!1),M=()=>{L.value=!L.value};function T({colors:e}){const{h:a,s:r,l:t}=e.hsl;v.value=`${Math.round(360*a)}`,g.value=`${Math.round(100*r)}%`,m.value=`${Math.round(100*t)}%`}return(e,l)=>{const s=I,y=z;return a(),d("div",Pe,[n("div",Ve,[We,n("div",Oe,[n("span",null,"var("+b(f(o))+")",1),n("span",null,b(f(p)),1)]),n("div",Be,[$(s,{tabindex:"0",onKeydown:_(C(M,["prevent"]),["space"]),onClick:M},{default:t((()=>[L.value?(a(),d("span",De,"Close")):(a(),d("span",Ke,"Customize"))])),_:1},8,["onKeydown"])])]),L.value?(a(),d("div",Ue,[qe,n("div",Re,[$(f(Fe),{id:r.color,class:"hide-alpha hide-copy",color:`hsl(${f(v)}, ${f(g)}, ${f(m)})`,onColorChange:T},{"hue-range-input-label":t((()=>[Xe])),"alpha-range-input-label":t((()=>[Ye])),"format-switch-button":t((()=>[Ge,Je])),_:1},8,["id","color"])]),Qe,n("dl",null,[n("dt",null,[Ze,n("small",null,"var("+b(f(c))+")",1)]),n("dd",null,b(f(v)),1)]),n("dl",null,[n("dt",null,[ea,n("small",null,"var("+b(f(i))+")",1)]),n("dd",null,b(f(g)),1)]),n("dl",null,[n("dt",null,[aa,n("small",null,"var("+b(f(u))+")",1)]),n("dd",null,b(f(m)),1)]),n("div",null,[$(y,{fullwidth:"",tabindex:"0",onKeydown:l[0]||(l[0]=_(C((e=>f(E)(f(A))),["prevent"]),["space"])),onClick:l[1]||(l[1]=e=>f(E)(f(A)))},{default:t((()=>[$(S,{name:"fade-fast",mode:"out-in"},{default:t((()=>[f(j)&&f(N)===f(A)?(a(),d("span",ra," Copied! ")):(a(),d("span",ta," Copy snippet color "))])),_:1})])),_:1})])])):h("",!0)])}}}),[["__scopeId","data-v-c2746ef6"]]),oa=n("h3",{id:"theme-colors",tabindex:"-1"},"Theme Colors",-1),la=n("p",null,[o("While Vuero was previously using predefined SCSS color variables that could be used for customization before the Sass compilation. With Vuero 2.0, this is now over. We completely switched to a new native "),n("code",null,"CSS Variables"),o(" setup. First it means that you can dynamically change any color at runtime. It also means that you can scope those changes to one or several components. However each change has a cost. We had to switch to a new Bulma setup called "),n("code",null,"Bulma CSS Vars"),o(", which completely rewrites Bulma variables to CSS variables.")],-1);const ca={disable_code:!0,disable_example:!0},sa={render:function(n,o){const l=e;return a(),r(l,{frontmatter:n.frontmatter},{default:t((()=>[oa,la])),_:1},8,["frontmatter"])},data:()=>({frontmatter:ca})},ia={class:"page-content-inner"},ua={class:"columns is-multiline"},pa={class:"column is-12"},da={class:"columns is-multiline"},va={class:"column is-4"},ha={class:"column is-4"},fa={class:"column is-4"},ga={class:"column is-4"},ma={class:"column is-4"},ba={class:"column is-4"},ya={class:"columns is-multiline"},wa={class:"column is-4"},xa={class:"column is-4"},ka={class:"column is-4"},$a={class:"column is-4"},_a={class:"column is-4"},Ca={class:"column is-4"},Sa={class:"column is-4"},za={class:"column is-4"},Aa={class:"columns is-multiline"},Na={class:"column is-4"},Ea={class:"column is-4"},ja={class:"column is-4"},Ia=y({__name:"colors",setup:e=>(M().setPageTitle("Colors"),j({title:"Colors - Elements - Vuero"}),(e,r)=>{const t=L,o=sa,l=na,c=B,s=P;return a(),d("div",ia,[$(t,{"with-icons":"",separator:"bullet",items:[{label:"Vuero",hideLabel:!0,icon:"feather:home",to:{name:"/"}},{label:"Elements",to:{name:"/elements/"}},{label:"Colors",to:{name:"/elements/colors"}}]}),n("div",ua,[n("div",pa,[$(o),n("div",da,[n("div",va,[$(l,{color:"primary"})]),n("div",ha,[$(l,{color:"secondary"})]),n("div",fa,[$(l,{color:"dark"})]),n("div",ga,[$(l,{color:"success"})]),n("div",ma,[$(l,{color:"warning"})]),n("div",ba,[$(l,{color:"danger"})])]),$(c),n("div",ya,[n("div",wa,[$(l,{color:"purple"})]),n("div",xa,[$(l,{color:"blue"})]),n("div",ka,[$(l,{color:"light-blue"})]),n("div",$a,[$(l,{color:"red"})]),n("div",_a,[$(l,{color:"orange"})]),n("div",Ca,[$(l,{color:"yellow"})]),n("div",Sa,[$(l,{color:"pink"})]),n("div",za,[$(l,{color:"green"})])]),$(s),n("div",Aa,[n("div",Na,[$(l,{color:"primary-grey"})]),n("div",Ea,[$(l,{color:"placeholder"})]),n("div",ja,[$(l,{color:"smoke-white"})])])])])])})});export{Ia as default};
