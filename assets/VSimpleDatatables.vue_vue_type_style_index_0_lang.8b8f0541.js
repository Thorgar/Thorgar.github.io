import{a2 as e,A as t,u as s,r as a,y as i,a8 as n,al as r,v as l,o,d as h,e as d,b as c}from"./index.81bb9900.js";var p=e=>"[object Object]"===Object.prototype.toString.call(e),u=(e,t)=>{const s=document.createElement(e);if(t&&"object"==typeof t)for(const a in t)"html"===a?s.innerHTML=t[a]:s.setAttribute(a,t[a]);return s},g=e=>{e instanceof NodeList?e.forEach((e=>g(e))):e.innerHTML=""},f=(e,t,s)=>u("li",{class:e,html:`<a href="#" data-page="${t}">${s}</a>`}),m=(e,t)=>{let s,a;1===t?(s=0,a=e.length):-1===t&&(s=e.length-1,a=-1);for(let i=!0;i;){i=!1;for(let n=s;n!=a;n+=t)if(e[n+t]&&e[n].value>e[n+t].value){const s=e[n],a=e[n+t],r=s;e[n]=a,e[n+t]=r,i=!0}}return e},b=function(e){let t=!1,s=!1;if((e=e||this.options.data).headings){t=u("thead");const s=u("tr");e.headings.forEach((e=>{const t=u("th",{html:e});s.appendChild(t)})),t.appendChild(s)}e.data&&e.data.length&&(s=u("tbody"),e.data.forEach((t=>{if(e.headings&&e.headings.length!==t.length)throw new Error("The number of rows do not match the number of headings.");const a=u("tr");t.forEach((e=>{const t=u("td",{html:e});a.appendChild(t)})),s.appendChild(a)}))),t&&(null!==this.dom.tHead&&this.dom.removeChild(this.dom.tHead),this.dom.appendChild(t)),s&&(this.dom.tBodies.length&&this.dom.removeChild(this.dom.tBodies[0]),this.dom.appendChild(s))},v={sortable:!0,searchable:!0,paging:!0,perPage:10,perPageSelect:[5,10,15,20,25],nextPrev:!0,firstLast:!1,prevText:"&lsaquo;",nextText:"&rsaquo;",firstText:"&laquo;",lastText:"&raquo;",ellipsisText:"&hellip;",ascText:"▴",descText:"▾",truncatePager:!0,pagerDelta:2,scrollY:"",fixedColumns:!0,fixedHeight:!1,header:!0,hiddenHeader:!1,footer:!1,labels:{placeholder:"Search...",perPage:"{select} entries per page",noRows:"No entries found",noResults:"No results match your search query",info:"Showing {start} to {end} of {rows} entries"},layout:{top:"{select}{search}",bottom:"{info}{pager}"}},y=class{constructor(e,t={}){const s="string"==typeof e?document.querySelector(e):e;if(this.options={...v,...t,layout:{...v.layout,...t.layout},labels:{...v.labels,...t.labels}},this.initialized=!1,this.initialLayout=s.innerHTML,this.initialSortable=this.options.sortable,this.options.header||(this.options.sortable=!1),null===s.tHead&&(!this.options.data||this.options.data&&!this.options.data.headings)&&(this.options.sortable=!1),s.tBodies.length&&!s.tBodies[0].rows.length&&this.options.data&&!this.options.data.data)throw new Error("You seem to be using the data option, but you've not defined any rows.");this.dom=s,this.table=this.dom,this.listeners={onResize:e=>this.onResize(e)},this.init()}static extend(e,t){"function"==typeof t?y.prototype[e]=t:y[e]=t}init(e){if(this.initialized||this.dom.classList.contains("dataTable-table"))return!1;Object.assign(this.options,e||{}),this.currentPage=1,this.onFirstPage=!0,this.hiddenColumns=[],this.columnRenderers=[],this.selectedColumns=[],this.render(),setTimeout((()=>{this.emit("datatable.init"),this.initialized=!0,this.options.plugins&&Object.entries(this.options.plugins).forEach((([e,t])=>{this[e]&&"function"==typeof this[e]&&(this[e]=this[e](t,{createElement:u}),t.enabled&&this[e].init&&"function"==typeof this[e].init&&this[e].init())}))}),10)}render(e){if(e){switch(e){case"page":this.renderPage();break;case"pager":this.renderPager();break;case"header":this.renderHeader()}return!1}const t=this.options;let s="";if(t.data&&b.call(this),this.body=this.dom.tBodies[0],this.head=this.dom.tHead,this.foot=this.dom.tFoot,this.body||(this.body=u("tbody"),this.dom.appendChild(this.body)),this.hasRows=this.body.rows.length>0,!this.head){const e=u("thead"),s=u("tr");this.hasRows&&(Array.from(this.body.rows[0].cells).forEach((()=>{s.appendChild(u("th"))})),e.appendChild(s)),this.head=e,this.dom.insertBefore(this.head,this.body),this.hiddenHeader=t.hiddenHeader}if(this.headings=[],this.hasHeadings=this.head.rows.length>0,this.hasHeadings&&(this.header=this.head.rows[0],this.headings=[].slice.call(this.header.cells)),t.header||this.head&&this.dom.removeChild(this.dom.tHead),t.footer?this.head&&!this.foot&&(this.foot=u("tfoot",{html:this.head.innerHTML}),this.dom.appendChild(this.foot)):this.foot&&this.dom.removeChild(this.dom.tFoot),this.wrapper=u("div",{class:"dataTable-wrapper dataTable-loading"}),s+="<div class='dataTable-top'>",s+=t.layout.top,s+="</div>",t.scrollY.length?s+=`<div class='dataTable-container' style='height: ${t.scrollY}; overflow-Y: auto;'></div>`:s+="<div class='dataTable-container'></div>",s+="<div class='dataTable-bottom'>",s+=t.layout.bottom,s+="</div>",s=s.replace("{info}",t.paging?"<div class='dataTable-info'></div>":""),t.paging&&t.perPageSelect){let e="<div class='dataTable-dropdown'><label>";e+=t.labels.perPage,e+="</label></div>";const a=u("select",{class:"dataTable-selector"});t.perPageSelect.forEach((e=>{const s=e===t.perPage,i=new Option(e,e,s,s);a.add(i)})),e=e.replace("{select}",a.outerHTML),s=s.replace("{select}",e)}else s=s.replace("{select}","");if(t.searchable){const e=`<div class='dataTable-search'><input class='dataTable-input' placeholder='${t.labels.placeholder}' type='text'></div>`;s=s.replace("{search}",e)}else s=s.replace("{search}","");this.hasHeadings&&this.render("header"),this.dom.classList.add("dataTable-table");const a=u("nav",{class:"dataTable-pagination"}),i=u("ul",{class:"dataTable-pagination-list"});a.appendChild(i),s=s.replace(/\{pager\}/g,a.outerHTML),this.wrapper.innerHTML=s,this.container=this.wrapper.querySelector(".dataTable-container"),this.pagers=this.wrapper.querySelectorAll(".dataTable-pagination-list"),this.label=this.wrapper.querySelector(".dataTable-info"),this.dom.parentNode.replaceChild(this.wrapper,this.dom),this.container.appendChild(this.dom),this.rect=this.dom.getBoundingClientRect(),this.data=Array.from(this.body.rows),this.activeRows=this.data.slice(),this.activeHeadings=this.headings.slice(),this.update(),this.setColumns(),this.fixHeight(),this.fixColumns(),t.header||this.wrapper.classList.add("no-header"),t.footer||this.wrapper.classList.add("no-footer"),t.sortable&&this.wrapper.classList.add("sortable"),t.searchable&&this.wrapper.classList.add("searchable"),t.fixedHeight&&this.wrapper.classList.add("fixed-height"),t.fixedColumns&&this.wrapper.classList.add("fixed-columns"),this.bindEvents()}renderPage(){if(this.hasHeadings&&(g(this.header),this.activeHeadings.forEach((e=>this.header.appendChild(e)))),this.hasRows&&this.totalPages){this.currentPage>this.totalPages&&(this.currentPage=1);const e=this.currentPage-1,t=document.createDocumentFragment();this.pages[e].forEach((e=>t.appendChild(this.rows().render(e)))),this.clear(t),this.onFirstPage=1===this.currentPage,this.onLastPage=this.currentPage===this.lastPage}else this.setMessage(this.options.labels.noRows);let e,t=0,s=0,a=0;if(this.totalPages&&(t=this.currentPage-1,s=t*this.options.perPage,a=s+this.pages[t].length,s+=1,e=this.searching?this.searchData.length:this.data.length),this.label&&this.options.labels.info.length){const t=this.options.labels.info.replace("{start}",s).replace("{end}",a).replace("{page}",this.currentPage).replace("{pages}",this.totalPages).replace("{rows}",e);this.label.innerHTML=e?t:""}1==this.currentPage&&this.fixHeight()}renderPager(){if(g(this.pagers),this.totalPages>1){const e="pager",t=document.createDocumentFragment(),s=this.onFirstPage?1:this.currentPage-1,a=this.onLastPage?this.totalPages:this.currentPage+1;this.options.firstLast&&t.appendChild(f(e,1,this.options.firstText)),this.options.nextPrev&&!this.onFirstPage&&t.appendChild(f(e,s,this.options.prevText));let i=this.links;this.options.truncatePager&&(i=((e,t,s,a,i)=>{let n;const r=2*(a=a||2);let l=t-a,o=t+a;const h=[],d=[];t<4-a+r?o=3+r:t>s-(3-a+r)&&(l=s-(2+r));for(let c=1;c<=s;c++)if(1==c||c==s||c>=l&&c<=o){const t=e[c-1];t.classList.remove("active"),h.push(t)}return h.forEach((t=>{const s=t.children[0].getAttribute("data-page");if(n){const t=n.children[0].getAttribute("data-page");if(s-t==2)d.push(e[t]);else if(s-t!=1){const e=u("li",{class:"ellipsis",html:`<a href="#">${i}</a>`});d.push(e)}}d.push(t),n=t})),d})(this.links,this.currentPage,this.pages.length,this.options.pagerDelta,this.options.ellipsisText)),this.links[this.currentPage-1].classList.add("active"),i.forEach((e=>{e.classList.remove("active"),t.appendChild(e)})),this.links[this.currentPage-1].classList.add("active"),this.options.nextPrev&&!this.onLastPage&&t.appendChild(f(e,a,this.options.nextText)),this.options.firstLast&&t.appendChild(f(e,this.totalPages,this.options.lastText)),this.pagers.forEach((e=>{e.appendChild(t.cloneNode(!0))}))}}renderHeader(){this.labels=[],this.headings&&this.headings.length&&this.headings.forEach(((e,t)=>{if(this.labels[t]=e.textContent,e.firstElementChild&&e.firstElementChild.classList.contains("dataTable-sorter")&&(e.innerHTML=e.firstElementChild.innerHTML),e.sortable="false"!==e.getAttribute("data-sortable"),e.originalCellIndex=t,this.options.sortable&&e.sortable){const t=u("a",{href:"#",class:"dataTable-sorter",html:e.innerHTML});e.innerHTML="",e.setAttribute("data-sortable",""),e.appendChild(t)}})),this.fixColumns()}bindEvents(){const e=this.options;if(e.perPageSelect){const t=this.wrapper.querySelector(".dataTable-selector");t&&t.addEventListener("change",(()=>{e.perPage=parseInt(t.value,10),this.update(),this.fixHeight(),this.emit("datatable.perpage",e.perPage)}),!1)}e.searchable&&(this.input=this.wrapper.querySelector(".dataTable-input"),this.input&&this.input.addEventListener("keyup",(()=>this.search(this.input.value)),!1)),this.wrapper.addEventListener("click",(t=>{const s=t.target.closest("a");s&&"a"===s.nodeName.toLowerCase()&&(s.hasAttribute("data-page")?(this.page(s.getAttribute("data-page")),t.preventDefault()):e.sortable&&s.classList.contains("dataTable-sorter")&&"false"!=s.parentNode.getAttribute("data-sortable")&&(this.columns().sort(this.headings.indexOf(s.parentNode)),t.preventDefault()))}),!1),window.addEventListener("resize",this.listeners.onResize)}onResize(){this.rect=this.container.getBoundingClientRect(),this.rect.width&&this.fixColumns()}setColumns(e){e||this.data.forEach((e=>{Array.from(e.cells).forEach((e=>{e.data=e.innerHTML}))})),this.options.columns&&this.headings.length&&this.options.columns.forEach((e=>{Array.isArray(e.select)||(e.select=[e.select]),e.hasOwnProperty("render")&&"function"==typeof e.render&&(this.selectedColumns=this.selectedColumns.concat(e.select),this.columnRenderers.push({columns:e.select,renderer:e.render})),e.select.forEach((t=>{const s=this.headings[t];s&&(e.type&&s.setAttribute("data-type",e.type),e.format&&s.setAttribute("data-format",e.format),e.hasOwnProperty("sortable")&&s.setAttribute("data-sortable",e.sortable),e.hasOwnProperty("hidden")&&!1!==e.hidden&&this.columns().hide([t]),e.hasOwnProperty("sort")&&1===e.select.length&&this.columns().sort(e.select[0],e.sort,!0))}))})),this.hasRows&&(this.data.forEach(((e,t)=>{e.dataIndex=t,Array.from(e.cells).forEach((e=>{e.data=e.innerHTML}))})),this.selectedColumns.length&&this.data.forEach((e=>{Array.from(e.cells).forEach(((t,s)=>{this.selectedColumns.includes(s)&&this.columnRenderers.forEach((a=>{a.columns.includes(s)&&(t.innerHTML=a.renderer.call(this,t.data,t,e))}))}))})),this.columns().rebuild()),this.render("header")}destroy(){this.dom.innerHTML=this.initialLayout,this.dom.classList.remove("dataTable-table"),this.wrapper.parentNode.replaceChild(this.dom,this.wrapper),this.initialized=!1,window.removeEventListener("resize",this.listeners.onResize)}update(){this.wrapper.classList.remove("dataTable-empty"),this.paginate(this),this.render("page"),this.links=[];let e=this.pages.length;for(;e--;){const t=e+1;this.links[e]=f(0===e?"active":"",t,t)}this.sorting=!1,this.render("pager"),this.rows().update(),this.emit("datatable.update")}paginate(){const e=this.options.perPage;let t=this.activeRows;return this.searching&&(t=[],this.searchData.forEach((e=>t.push(this.activeRows[e])))),this.options.paging?this.pages=t.map(((s,a)=>a%e==0?t.slice(a,a+e):null)).filter((e=>e)):this.pages=[t],this.totalPages=this.lastPage=this.pages.length,this.totalPages}fixColumns(){if((this.options.scrollY.length||this.options.fixedColumns)&&this.activeHeadings&&this.activeHeadings.length){let e,t=!1;if(this.columnWidths=[],this.dom.tHead){this.options.scrollY.length&&(t=u("thead"),t.appendChild(u("tr")),t.style.height="0px",this.headerTable&&(this.dom.tHead=this.headerTable.tHead)),this.activeHeadings.forEach((e=>{e.style.width=""}));const e=this.activeHeadings.reduce(((e,t)=>e+t.offsetWidth),0);if(this.activeHeadings.forEach(((s,a)=>{const i=s.offsetWidth,n=i/e*100;if(s.style.width=`${n}%`,this.columnWidths[a]=i,this.options.scrollY.length){const e=u("th");t.firstElementChild.appendChild(e),e.style.width=`${n}%`,e.style.paddingTop="0",e.style.paddingBottom="0",e.style.border="0"}})),this.options.scrollY.length){const e=this.dom.parentElement;if(!this.headerTable){this.headerTable=u("table",{class:"dataTable-table"});const t=u("div",{class:"dataTable-headercontainer"});t.appendChild(this.headerTable),e.parentElement.insertBefore(t,e)}const s=this.dom.tHead;this.dom.replaceChild(t,s),this.headerTable.tHead=s,this.headerTable.parentElement.style.paddingRight=`${this.headerTable.clientWidth-this.dom.clientWidth+parseInt(this.headerTable.parentElement.style.paddingRight||"0",10)}px`,e.scrollHeight>e.clientHeight&&(e.style.overflowY="scroll")}}else{e=[],t=u("thead");const s=u("tr");Array.from(this.dom.tBodies[0].rows[0].cells).forEach((()=>{const t=u("th");s.appendChild(t),e.push(t)})),t.appendChild(s),this.dom.insertBefore(t,this.body);const a=[];e.forEach(((e,t)=>{const s=e.offsetWidth,i=s/this.rect.width*100;a.push(i),this.columnWidths[t]=s})),this.data.forEach((e=>{Array.from(e.cells).forEach(((e,t)=>{this.columns(e.cellIndex).visible()&&(e.style.width=`${a[t]}%`)}))})),this.dom.removeChild(t)}}}fixHeight(){this.options.fixedHeight&&(this.container.style.height=null,this.rect=this.container.getBoundingClientRect(),this.container.style.height=`${this.rect.height}px`)}search(e){return!!this.hasRows&&(e=e.toLowerCase(),this.currentPage=1,this.searching=!0,this.searchData=[],e.length?(this.clear(),this.data.forEach(((t,s)=>{const a=this.searchData.includes(t);e.split(" ").reduce(((e,s)=>{let a=!1,i=null,n=null;for(let r=0;r<t.cells.length;r++)if(i=t.cells[r],n=i.hasAttribute("data-content")?i.getAttribute("data-content"):i.textContent,n.toLowerCase().includes(s)&&this.columns(i.cellIndex).visible()){a=!0;break}return e&&a}),!0)&&!a?(t.searchIndex=s,this.searchData.push(s)):t.searchIndex=null})),this.wrapper.classList.add("search-results"),this.searchData.length?this.update():(this.wrapper.classList.remove("search-results"),this.setMessage(this.options.labels.noResults)),void this.emit("datatable.search",e,this.searchData)):(this.searching=!1,this.update(),this.emit("datatable.search",e,this.searchData),this.wrapper.classList.remove("search-results"),!1))}page(e){return e!=this.currentPage&&(isNaN(e)||(this.currentPage=parseInt(e,10)),!(e>this.pages.length||e<0)&&(this.render("page"),this.render("pager"),void this.emit("datatable.page",e)))}sortColumn(e,t){this.columns().sort(e,t)}insert(e){let t=[];if(p(e)){if(e.headings&&!this.hasHeadings&&!this.hasRows){const t=u("tr");e.headings.forEach((e=>{const s=u("th",{html:e});t.appendChild(s)})),this.head.appendChild(t),this.header=t,this.headings=[].slice.call(t.cells),this.hasHeadings=!0,this.options.sortable=this.initialSortable,this.render("header"),this.activeHeadings=this.headings.slice()}e.data&&Array.isArray(e.data)&&(t=e.data)}else Array.isArray(e)&&e.forEach((e=>{const s=[];Object.entries(e).forEach((([e,t])=>{const a=this.labels.indexOf(e);a>-1&&(s[a]=t)})),t.push(s)}));t.length&&(this.rows().add(t),this.hasRows=!0),this.update(),this.setColumns(),this.fixColumns()}refresh(){this.options.searchable&&(this.input.value="",this.searching=!1),this.currentPage=1,this.onFirstPage=!0,this.update(),this.emit("datatable.refresh")}clear(e){this.body&&g(this.body);let t=this.body;if(this.body||(t=this.dom),e){if("string"==typeof e){document.createDocumentFragment().innerHTML=e}t.appendChild(e)}}export(e){if(!this.hasHeadings&&!this.hasRows)return!1;const t=this.activeHeadings;let s=[];const a=[];let i,n,r,l;if(!p(e))return!1;const o={download:!0,skipColumn:[],lineDelimiter:"\n",columnDelimiter:",",tableName:"myTable",replacer:null,space:4,...e};if(o.type){if("txt"!==o.type&&"csv"!==o.type||(s[0]=this.header),o.selection)if(isNaN(o.selection)){if(Array.isArray(o.selection))for(i=0;i<o.selection.length;i++)s=s.concat(this.pages[o.selection[i]-1])}else s=s.concat(this.pages[o.selection-1]);else s=s.concat(this.activeRows);if(s.length){if("txt"===o.type||"csv"===o.type){for(r="",i=0;i<s.length;i++){for(n=0;n<s[i].cells.length;n++)if(!o.skipColumn.includes(t[n].originalCellIndex)&&this.columns(t[n].originalCellIndex).visible()){let e=s[i].cells[n].textContent;e=e.trim(),e=e.replace(/\s{2,}/g," "),e=e.replace(/\n/g,"  "),e=e.replace(/"/g,'""'),e=e.replace(/#/g,"%23"),e.includes(",")&&(e=`"${e}"`),r+=e+o.columnDelimiter}r=r.trim().substring(0,r.length-1),r+=o.lineDelimiter}r=r.trim().substring(0,r.length-1),o.download&&(r=`data:text/csv;charset=utf-8,${r}`)}else if("sql"===o.type){for(r=`INSERT INTO \`${o.tableName}\` (`,i=0;i<t.length;i++)!o.skipColumn.includes(t[i].originalCellIndex)&&this.columns(t[i].originalCellIndex).visible()&&(r+=`\`${t[i].textContent}\`,`);for(r=r.trim().substring(0,r.length-1),r+=") VALUES ",i=0;i<s.length;i++){for(r+="(",n=0;n<s[i].cells.length;n++)!o.skipColumn.includes(t[n].originalCellIndex)&&this.columns(t[n].originalCellIndex).visible()&&(r+=`"${s[i].cells[n].textContent}",`);r=r.trim().substring(0,r.length-1),r+="),"}r=r.trim().substring(0,r.length-1),r+=";",o.download&&(r=`data:application/sql;charset=utf-8,${r}`)}else if("json"===o.type){for(n=0;n<s.length;n++)for(a[n]=a[n]||{},i=0;i<t.length;i++)!o.skipColumn.includes(t[i].originalCellIndex)&&this.columns(t[i].originalCellIndex).visible()&&(a[n][t[i].textContent]=s[n].cells[i].textContent);r=JSON.stringify(a,o.replacer,o.space),o.download&&(r=`data:application/json;charset=utf-8,${r}`)}return o.download&&(o.filename=o.filename||"datatable_export",o.filename+=`.${o.type}`,r=encodeURI(r),l=document.createElement("a"),l.href=r,l.download=o.filename,document.body.appendChild(l),l.click(),document.body.removeChild(l)),r}}return!1}import(e){let t=!1;if(!p(e))return!1;const s={lineDelimiter:"\n",columnDelimiter:",",removeDoubleQuotes:!1,...e};if(s.data.length||p(s.data)){if("csv"===s.type){t={data:[]};const e=s.data.split(s.lineDelimiter);e.length&&(s.headings&&(t.headings=e[0].split(s.columnDelimiter),s.removeDoubleQuotes&&(t.headings=t.headings.map((e=>e.trim().replace(/(^"|"$)/g,"")))),e.shift()),e.forEach(((e,a)=>{t.data[a]=[];const i=e.split(s.columnDelimiter);i.length&&i.forEach((e=>{s.removeDoubleQuotes&&(e=e.trim().replace(/(^"|"$)/g,"")),t.data[a].push(e)}))})))}else if("json"===s.type){const e=(e=>{let t=!1;try{t=JSON.parse(e)}catch(s){return!1}return!(null===t||!Array.isArray(t)&&!p(t))&&t})(s.data);e&&(t={headings:[],data:[]},e.forEach(((e,s)=>{t.data[s]=[],Object.entries(e).forEach((([e,a])=>{t.headings.includes(e)||t.headings.push(e),t.data[s].push(a)}))})))}p(s.data)&&(t=s.data),t&&this.insert(t)}return!1}print(){const e=this.activeHeadings,t=this.activeRows,s=u("table"),a=u("thead"),i=u("tbody"),n=u("tr");e.forEach((e=>{n.appendChild(u("th",{html:e.textContent}))})),a.appendChild(n),t.forEach((e=>{const t=u("tr");Array.from(e.cells).forEach((e=>{t.appendChild(u("td",{html:e.textContent}))})),i.appendChild(t)})),s.appendChild(a),s.appendChild(i);const r=window.open();r.document.body.appendChild(s),r.print()}setMessage(e){let t=1;this.hasRows?t=this.data[0].cells.length:this.activeHeadings.length&&(t=this.activeHeadings.length),this.wrapper.classList.add("dataTable-empty"),this.label&&(this.label.innerHTML=""),this.totalPages=0,this.render("pager"),this.clear(u("tr",{html:`<td class="dataTables-empty" colspan="${t}">${e}</td>`}))}columns(t){return new class{constructor(e){return this.dt=e,this}swap(e){if(e.length&&2===e.length){const t=[];this.dt.headings.forEach(((e,s)=>{t.push(s)}));const s=e[0],a=e[1],i=t[a];t[a]=t[s],t[s]=i,this.order(t)}}order(e){let t,s,a,i,n,r,l;const o=[[],[],[],[]],h=this.dt;e.forEach(((e,a)=>{n=h.headings[e],r="false"!==n.getAttribute("data-sortable"),t=n.cloneNode(!0),t.originalCellIndex=a,t.sortable=r,o[0].push(t),h.hiddenColumns.includes(e)||(s=n.cloneNode(!0),s.originalCellIndex=a,s.sortable=r,o[1].push(s))})),h.data.forEach(((t,s)=>{a=t.cloneNode(!1),i=t.cloneNode(!1),a.dataIndex=i.dataIndex=s,null!==t.searchIndex&&void 0!==t.searchIndex&&(a.searchIndex=i.searchIndex=t.searchIndex),e.forEach((e=>{l=t.cells[e].cloneNode(!0),l.data=t.cells[e].data,a.appendChild(l),h.hiddenColumns.includes(e)||(l=t.cells[e].cloneNode(!0),l.data=t.cells[e].data,i.appendChild(l))})),o[2].push(a),o[3].push(i)})),h.headings=o[0],h.activeHeadings=o[1],h.data=o[2],h.activeRows=o[3],h.update()}hide(e){if(e.length){const t=this.dt;e.forEach((e=>{t.hiddenColumns.includes(e)||t.hiddenColumns.push(e)})),this.rebuild()}}show(e){if(e.length){let t;const s=this.dt;e.forEach((e=>{t=s.hiddenColumns.indexOf(e),t>-1&&s.hiddenColumns.splice(t,1)})),this.rebuild()}}visible(e){let t;const s=this.dt;return e=e||s.headings.map((e=>e.originalCellIndex)),isNaN(e)?Array.isArray(e)&&(t=[],e.forEach((e=>{t.push(!s.hiddenColumns.includes(e))}))):t=!s.hiddenColumns.includes(e),t}add(e){let t;const s=document.createElement("th");if(!this.dt.headings.length)return this.dt.insert({headings:[e.heading],data:e.data.map((e=>[e]))}),void this.rebuild();this.dt.hiddenHeader?s.innerHTML="":e.heading.nodeName?s.appendChild(e.heading):s.innerHTML=e.heading,this.dt.headings.push(s),this.dt.data.forEach(((s,a)=>{e.data[a]&&(t=document.createElement("td"),e.data[a].nodeName?t.appendChild(e.data[a]):t.innerHTML=e.data[a],t.data=t.innerHTML,e.render&&(t.innerHTML=e.render.call(this,t.data,t,s)),s.appendChild(t))})),e.type&&s.setAttribute("data-type",e.type),e.format&&s.setAttribute("data-format",e.format),e.hasOwnProperty("sortable")&&(s.sortable=e.sortable,s.setAttribute("data-sortable",!0===e.sortable?"true":"false")),this.rebuild(),this.dt.renderHeader()}remove(e){Array.isArray(e)?(e.sort(((e,t)=>t-e)),e.forEach((e=>this.remove(e)))):(this.dt.headings.splice(e,1),this.dt.data.forEach((t=>{t.removeChild(t.cells[e])}))),this.rebuild()}filter(e,t,s,a){const i=this.dt;if(i.filterState||(i.filterState={originalData:i.data}),!i.filterState[e]){const t=[...a,()=>!0];i.filterState[e]=function(){let e=0;return()=>t[e++%t.length]}()}const n=i.filterState[e](),r=Array.from(i.filterState.originalData).filter((t=>{const s=t.cells[e],a=s.hasAttribute("data-content")?s.getAttribute("data-content"):s.innerText;return"function"==typeof n?n(a):a===n}));i.data=r,i.data.length?(this.rebuild(),i.update()):(i.clear(),i.hasRows=!1,i.setMessage(i.options.labels.noRows)),s||i.emit("datatable.sort",e,t)}sort(t,s,a){const i=this.dt;if(i.hasHeadings&&(t<0||t>i.headings.length))return!1;const n=i.options.filters&&i.options.filters[i.headings[t].textContent];if(n&&0!==n.length)return void this.filter(t,s,a,n);i.sorting=!0,a||i.emit("datatable.sorting",t,s);let r=i.data;const l=[],o=[];let h=0,d=0;const c=i.headings[t],p=[];if("date"===c.getAttribute("data-type")){let t=!1;c.hasAttribute("data-format")&&(t=c.getAttribute("data-format")),p.push(e((()=>import("./date-OYZ36CG5.5344d7c2.js")),["assets/date-OYZ36CG5.5344d7c2.js","assets/chunk-J5OVEZKG.926eac83.js","assets/index.81bb9900.js","assets/index.b15502eb.css"]).then((({parseDate:e})=>s=>e(s,t))))}Promise.all(p).then((e=>{const n=e[0];let p,u;Array.from(r).forEach((e=>{const s=e.cells[t],a=s.hasAttribute("data-content")?s.getAttribute("data-content"):s.innerText;let i;i=n?n(a):"string"==typeof a?a.replace(/(\$|,|\s|%)/g,""):a,parseFloat(i)==i?o[d++]={value:Number(i),row:e}:l[h++]={value:"string"==typeof a?a.toLowerCase():a,row:e}})),s||(s=c.classList.contains("asc")?"desc":"asc"),"desc"==s?(p=m(l,-1),u=m(o,-1),c.classList.remove("asc"),c.classList.add("desc")):(p=m(o,1),u=m(l,1),c.classList.remove("desc"),c.classList.add("asc")),i.lastTh&&c!=i.lastTh&&(i.lastTh.classList.remove("desc"),i.lastTh.classList.remove("asc")),i.lastTh=c,r=p.concat(u),i.data=[];const g=[];r.forEach(((e,t)=>{i.data.push(e.row),null!==e.row.searchIndex&&void 0!==e.row.searchIndex&&g.push(t)})),i.searchData=g,this.rebuild(),i.update(),a||i.emit("datatable.sort",t,s)}))}rebuild(){let e,t,s,a;const i=this.dt,n=[];i.activeRows=[],i.activeHeadings=[],i.headings.forEach(((e,t)=>{e.originalCellIndex=t,e.sortable="false"!==e.getAttribute("data-sortable"),i.hiddenColumns.includes(t)||i.activeHeadings.push(e)})),i.data.forEach(((r,l)=>{e=r.cloneNode(!1),t=r.cloneNode(!1),e.dataIndex=t.dataIndex=l,null!==r.searchIndex&&void 0!==r.searchIndex&&(e.searchIndex=t.searchIndex=r.searchIndex),Array.from(r.cells).forEach((n=>{s=n.cloneNode(!0),s.data=n.data,e.appendChild(s),i.hiddenColumns.includes(s.cellIndex)||(a=s.cloneNode(!0),a.data=s.data,t.appendChild(a))})),n.push(e),i.activeRows.push(t)})),i.data=n,i.update()}}(this,t)}rows(e){return new class{constructor(e,t){return this.dt=e,this.rows=t,this}build(e){const t=u("tr");let s=this.dt.headings;return s.length||(s=e.map((()=>""))),s.forEach(((s,a)=>{const i=u("td");e[a]&&e[a].length||(e[a]=""),i.innerHTML=e[a],i.data=e[a],t.appendChild(i)})),t}render(e){return e}add(e){if(Array.isArray(e)){const t=this.dt;Array.isArray(e[0])?e.forEach((e=>{t.data.push(this.build(e))})):t.data.push(this.build(e)),t.data.length&&(t.hasRows=!0),this.update(),t.columns().rebuild()}}remove(e){const t=this.dt;Array.isArray(e)?(e.sort(((e,t)=>t-e)),e.forEach((e=>{t.data.splice(e,1)}))):"all"==e?t.data=[]:t.data.splice(e,1),t.data.length||(t.hasRows=!1),this.update(),t.columns().rebuild()}update(){this.dt.data.forEach(((e,t)=>{e.dataIndex=t}))}findRowIndex(e,t){return this.dt.data.findIndex((s=>s.children[e].innerText.toLowerCase().includes(String(t).toLowerCase())))}findRow(e,t){const s=this.findRowIndex(e,t);if(s<0)return{index:-1,row:null,cols:[]};const a=this.dt.data[s];return{index:s,row:a,cols:[...a.cells].map((e=>e.innerHTML))}}updateRow(e,t){const s=this.build(t);this.dt.data.splice(e,1,s),this.update(),this.dt.columns().rebuild()}}(this,e)}on(e,t){this.events=this.events||{},this.events[e]=this.events[e]||[],this.events[e].push(t)}off(e,t){this.events=this.events||{},e in this.events!=!1&&this.events[e].splice(this.events[e].indexOf(t),1)}emit(e){if(this.events=this.events||{},e in this.events!=!1)for(let t=0;t<this.events[e].length;t++)this.events[e][t].apply(this,Array.prototype.slice.call(arguments,1))}};
/*!
 *
 * Simple-DataTables
 * Copyright (c) 2015-2017 Karl Saunders (https://mobius.ovh)
 * Copyright (c) 2018- Johannes Wilm (https://www.johanneswilm.org)
 * Licensed under MIT (https://www.opensource.org/licenses/mit-license.php)
 *
 *
 */
const C=t({__name:"VSimpleDatatables",props:{options:{default:()=>({})},autoupdate:{type:Boolean}},emits:["init","refresh","update","page","sort","perpage","search"],setup(e,{emit:t}){const p=e,u=s(),g=s(),f=s(null),m=s(!1),b=a({column:0,direction:""}),v=e=>{m.value||(m.value=!0)},C=e=>{m.value&&(m.value=!1)},w=()=>{if(g.value){const e=g.value.querySelector(".dataTable-input"),t=g.value.querySelector(".dataTable-selector"),s=g.value.querySelector(".dataTable-pagination"),a=g.value.querySelectorAll(".dataTable-sorter");e&&(e.addEventListener("focus",v,!1),e.addEventListener("blur",C,!1)),t&&(t.addEventListener("focus",v,!1),t.addEventListener("blur",C,!1),t.addEventListener("change",C,!1)),s&&(s.addEventListener("mousedown",v,!1),s.addEventListener("mouseup",C,!1)),a.forEach((e=>{let t=e;t&&(t.addEventListener("mousedown",v,!1),t.addEventListener("mouseup",C,!1))}))}f.value&&(f.value.on("datatable.init",(()=>{t("init")})),f.value.on("datatable.refresh",(()=>{t("refresh")})),f.value.on("datatable.update",(()=>{t("update")})),f.value.on("datatable.page",(e=>{t("page",e)})),f.value.on("datatable.sort",((e,s)=>{b.column=e,b.direction=s||"",t("sort",e,s)})),f.value.on("datatable.perpage",(e=>{t("perpage",e)})),f.value.on("datatable.search",((e,s)=>{t("search",e,s)})))},E=()=>{if(f.value&&(f.value.destroy(),f.value=null),g.value){const e=g.value.querySelector(".dataTable-input"),t=g.value.querySelector(".dataTable-selector"),s=g.value.querySelector(".dataTable-pagination"),a=g.value.querySelectorAll(".dataTable-sorter");e&&(e.removeEventListener("focus",v),e.removeEventListener("blur",C)),t&&(t.removeEventListener("focus",v),t.removeEventListener("blur",C),t.removeEventListener("change",C)),s&&(s.removeEventListener("mousedown",v),s.removeEventListener("mouseup",C)),a.forEach((e=>{let t=e;t&&(t.removeEventListener("mousedown",v),t.removeEventListener("mouseup",C))}))}};return i((()=>{u.value&&(f.value=new y(u.value,p.options)),w()})),n((()=>{E()})),r(p.options)&&l([p.options,()=>p.autoupdate],(()=>{var e,t;if(u.value&&p.autoupdate&&!m.value){let s=1,a=10,i="";f.value&&(s=f.value.currentPage,i=null==(e=f.value.input)?void 0:e.value,a=null==(t=f.value.options)?void 0:t.perPage,E()),f.value=new y(u.value,{...p.options,perPage:a}),!1!==p.options.searchable&&(f.value.input.value=i,f.value.input.dispatchEvent(new Event("keyup"))),""!==b.direction&&f.value.columns().sort(b.column,b.direction),f.value.page(s),w()}})),(e,t)=>(o(),h("div",{ref_key:"wrapperElement",ref:g},[d("table",{ref_key:"tableElement",ref:u},[c(e.$slots,"default")],512)],512))}});export{C as _};
