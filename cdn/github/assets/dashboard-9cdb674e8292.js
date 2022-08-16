"use strict";(()=>{var ne=Object.defineProperty;var e=(T,_)=>ne(T,"name",{value:_,configurable:!0});(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["dashboard"],{94351:(T,_,o)=>{var c=o(46263),u=o(64463),r=o(59753),l=o(51012),i=o(31579),d=o(63621),s=o(91385),t=o(55526);const{getItem:m,setItem:p}=(0,i.Z)("localStorage"),E="feeds-last-saved-tab",S=["feed-original","feed-next"],v=S[0];function f(n,a){a?n.classList.remove("overflow-auto"):n.classList.add("overflow-auto")}e(f,"toggleOverflow"),(0,u.N7)(".js-favorites-details-component",{constructor:HTMLDetailsElement,initialize(n){n.addEventListener("toggle",()=>{const a=document.querySelector(".dashboard-sidebar");f(a,n.open)})}}),(0,u.N7)(".js-shortcuts-details-component",{constructor:HTMLDetailsElement,initialize(n){n.addEventListener("toggle",()=>{const a=document.querySelector(".dashboard-sidebar");f(a,n.open)})}}),(0,r.on)("click",".js-follow-unfollow-submit",async function(n){const h=n.currentTarget.form;n.preventDefault();let y;try{y=await fetch(h.action,{method:h.method,body:new FormData(h),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{(0,d.v)()}y&&!y.ok&&(0,d.v)()}),(0,r.on)("details:toggled",".js-news-feed-event-group",function(n){if(!n.detail.open)return;const a=n.currentTarget;for(const h of a.querySelectorAll("[data-hydro-view]"))h instanceof HTMLElement&&(0,s.Fk)(h)}),(0,u.N7)(".js-feeds-tabs",{constructor:HTMLElement,initialize(n){if(n){let a=m(E)||v;S.indexOf(a)===-1&&(a=v);const h=n.querySelector(`button#${a}`);if(h){h.setAttribute("aria-selected","true");const L=h.getAttribute("aria-controls")||"",I=document.getElementById(L);I&&I.removeAttribute("hidden")}const y=document.querySelector(".js-feedback-link");y&&y.toggleAttribute("hidden",a!=="feed-next")}}}),(0,r.on)("click",".js-feeds-tabs button",function(n){const a=n.currentTarget;if(!a.id||!S.includes(a.id))return;const h=document.querySelector(".js-feedback-link");h&&h.toggleAttribute("hidden",a.id!=="feed-next"),p(E,a.id)});const g={},M=.8,A=1e3,j=new IntersectionObserver(function(n){for(const a of n){const h=a.target,y=h.getAttribute("data-hydro-view");if(!y)return;const L=JSON.parse(y).payload.feed_card.card_retrieved_id,I=a.intersectionRatio>M;!I&&g[L]&&(clearTimeout(g[L]),delete g[L]),I&&!g[L]&&(g[L]=setTimeout(()=>{(0,s.Fk)(h)},A))}},{rootMargin:"0px",threshold:[0,M]});(0,u.N7)(".js-feed-item-component",n=>j.observe(n));let C=[];function D(n){const a=n.getElementsByClassName("feed-item-heading-menu");return a.length===0?null:a[0]}e(D,"getHeadingMenuButton");const P=(0,c.D)(n=>{const a=n.target,h=D(a);!h||(h.hidden=!1,C.push(h))},100),b=(0,c.D)(()=>{w()},100);function w(){for(const n of C)n.hidden=!0;C=[]}e(w,"hideAllHeadingMenus"),(0,u.N7)(".js-feed-item-component",n=>{n.addEventListener("mouseenter",P),n.addEventListener("mouseleave",b)});const R=3,x=500;let k=null;function $(n,a,h){for(const y of a)h?n|=1<<y:n&=~(1<<y);return n}e($,"toggleBitmaskGroup");function N(n,a=!1){const h=document.querySelector(".js-feed-filter-menu");if(!h)return;const y=h.querySelectorAll(".js-navigation-item");if(n){h.setAttribute("aria-busy","true");for(const L of y)L.setAttribute("disabled","disabled")}else{h.setAttribute("aria-busy","false");for(const L of y)L.removeAttribute("disabled")}if(a)for(const L of y)L.classList.add("selected")}e(N,"toggleFilterMenuLoadingState");async function U(n,a,h,y=0,L=null){const I={method:h,credentials:"same-origin",headers:{"Scoped-CSRF-Token":L||"","X-Requested-With":"XMLHttpRequest"}},O=await fetch(new Request(a,I));if(!O.ok){if(y<R)return await new Promise(F=>setTimeout(F,x*y)),U(n,a,h,y+1);throw N(!1),(0,t.x)(document.querySelector(".js-feed-filter-error-toast").innerHTML),new Error(`${O.status}:${O.statusText} - failed to fetch ${a} for ${n}`)}return{response:O,el:n}}e(U,"fetchFeedElement");async function z(n,a,h){N(!0);let y=n,L;try{L=await Promise.all([await U(".js-feed-container",`/for_you_feed/filter_feed?filter=${y}`,"PUT",0,h),await U(".js-feed-filter-items",`/for_you_feed/filter_component?filter=${y}`,"GET")])}catch(I){await(0,l.LN)({error:I}),y=a,N(!1,!0),L=await Promise.all([await U(".js-feed-container","/for_you_feed","GET",2)])}if(!!L)for(const I of L){const{response:O,el:F}=I,q=document.querySelector(F);if(O&&q){N(!1),k=y.toString();const te=await O.text();q.innerHTML=te}}}e(z,"requestFeedUpdate");function B(){var n;const a=document.querySelector(".js-for-you-feed");if(!a)return;const h=a.getAttribute("data-filter-bitmask"),y=a.getAttribute("data-reset-bitmask"),L=document.querySelector(".js-feed-filter-csrf");let I=k||((n=document.querySelector(".js-for-you-feed"))==null?void 0:n.getAttribute("data-filter-bitmask"));!h||(Number(I)||(I=y),I&&h!==I&&z(Number(I),Number(y),L.value))}e(B,"syncFeedWithFilter");function G({bitmask:n="",groups:a=[]}){const h=document.querySelector(".js-apply-feed-filters");if(!h)return;const y=h.getAttribute("data-hydro-click")||"{}",L=JSON.parse(y);n&&(L.payload.metadata.filter_bitmask=Number(n)),a.length&&(L.payload.metadata.filter_groups=a),h.setAttribute("data-hydro-click",JSON.stringify(L))}e(G,"updateHydroAttrs"),(0,r.on)("click",".js-feed-filter-menu .js-navigation-item",function(n){var a;if(n.preventDefault(),n.currentTarget){let h=Number(k||((a=document.querySelector(".js-for-you-feed"))==null?void 0:a.getAttribute("data-filter-bitmask")));const y=n.currentTarget.getAttribute("data-group-bitmasks"),L=n.currentTarget.classList.contains("selected");if(!y)return;h=$(h,JSON.parse(y),!L),n.currentTarget.classList.toggle("selected"),k=h.toString();const I=document.querySelectorAll(".js-feed-filter-menu .js-navigation-item.selected"),O=[];for(const F of I)F.textContent&&O.push(F.textContent.trim());G({bitmask:k,groups:O})}}),(0,r.on)("click",".js-apply-feed-filters",function(n){n.preventDefault(),B()}),(0,u.N7)(".js-for-you-feed",B);var H=o(43721),X=o(98016),Z=o(57654);const V=new WeakMap,Q=100;function W(n){const a=V.get(n)||0;if(a>Q)return;const h=n.querySelector(".js-more-repos-form");h&&(V.set(n,a+1),(0,Z.Bt)(h))}e(W,"loadMoreRepositories");function J(n,a,h){const y=new URL(n,window.location.origin),L=new URLSearchParams(y.search.slice(1));return a.length<1?L.delete(h):L.set(h,a),y.search=L.toString(),y.toString()}e(J,"replaceQueryInUrl");function Y(n){const a=n.querySelector(".js-your-repositories-search");return a?document.activeElement===a?!0:a.defaultValue.trim().length>0:!1}e(Y,"shouldLoadAllRepositories");function K(n){const a=n.querySelector(".js-your-repositories-search");a&&(0,r.f)(a,"filterable:change")}e(K,"filterRepositories");function ee(n){const a=n.getAttribute("data-url"),h=n.getAttribute("data-query-name");(0,X.lO)(null,"",J(a,n.value.trim(),h))}e(ee,"updateQueryInUrl"),(0,H.ZG)(".js-your-repositories-search",function(n){const a=n.closest(".js-repos-container");W(a)}),(0,u.N7)(".js-your-repositories-search",{constructor:HTMLInputElement,initialize(n){n.defaultValue.trim().length>0&&K(n.closest(".js-repos-container"))}}),(0,H.q6)(".js-your-repositories-search",function(n){const a=n.target;ee(a)}),(0,u.N7)(".js-more-repos-form",function(n){const a=n.closest(".js-repos-container");Y(a)&&W(a),n.addEventListener("page:loaded",function(){K(a)})});var oe=o(63247),re=o(82927)},97261:(T,_,o)=>{o.d(_,{S:()=>l});function c(i){const d=document.querySelectorAll(i);if(d.length>0)return d[d.length-1]}e(c,"queryLast");function u(){const i=c("meta[name=analytics-location]");return i?i.content:window.location.pathname}e(u,"pagePathname");function r(){const i=c("meta[name=analytics-location-query-strip]");let d="";i||(d=window.location.search);const s=c("meta[name=analytics-location-params]");s&&(d+=(d?"&":"?")+s.content);for(const t of document.querySelectorAll("meta[name=analytics-param-rename]")){const m=t.content.split(":",2);d=d.replace(new RegExp(`(^|[?&])${m[0]}($|=)`,"g"),`$1${m[1]}$2`)}return d}e(r,"pageQuery");function l(){return`${window.location.protocol}//${window.location.host}${u()+r()}`}e(l,"requestUri")},73301:(T,_,o)=>{o.d(_,{N:()=>r,x:()=>l});var c=o(75488);let u=null;(async function(){await c.x,i()})();function r(s){l(d(s))}e(r,"announceFromElement");function l(s){!u||(u.textContent="",u.textContent=s)}e(l,"announce");function i(){u=document.createElement("div"),u.setAttribute("aria-live","polite"),u.classList.add("sr-only"),document.body.append(u)}e(i,"createNoticeContainer");function d(s){return(s.getAttribute("aria-label")||s.innerText||"").trim()}e(d,"getTextContent")},63621:(T,_,o)=>{o.d(_,{H:()=>r,v:()=>u});var c=o(59753);function u(){const l=document.getElementById("ajax-error-message");l&&(l.hidden=!1)}e(u,"showGlobalError");function r(){const l=document.getElementById("ajax-error-message");l&&(l.hidden=!0)}e(r,"hideGlobalError"),(0,c.on)("deprecatedAjaxError","[data-remote]",function(l){const i=l.detail,{error:d,text:s}=i;l.currentTarget===l.target&&(d==="abort"||d==="canceled"||(/<html/.test(s)?(u(),l.stopImmediatePropagation()):setTimeout(function(){l.defaultPrevented||u()},0)))}),(0,c.on)("deprecatedAjaxSend","[data-remote]",function(){r()}),(0,c.on)("click",".js-ajax-error-dismiss",function(){r()})},63247:(T,_,o)=>{var c=o(73301),u=o(64463);const r=e(async(s,t,m,p)=>{const E=new FormData;return p===!0&&E.append("upvote","true"),await fetch(s,{body:m==="delete"?"":E,method:m,mode:"same-origin",headers:{"Scoped-CSRF-Token":t}})},"sendRequest");class l{constructor(t){this.voteCountElement=t}getLabel(){var t;return((t=this.voteCountElement)==null?void 0:t.getAttribute("data-upvote-label"))||""}getText(){var t;return((t=this.voteCountElement)==null?void 0:t.textContent)||""}}e(l,"VoteCountElement");class i{constructor(t){this.voteForm=t,this.voteButton=this.voteForm.querySelector(".js-upvote-button"),this.defaultVoteCountElement=new l(t.querySelector(".js-default-vote-count")),this.upvotedCountElement=new l(t.querySelector(".js-upvoted-vote-count")),this.url=this.voteForm.getAttribute("data-url")||""}isUpvoted(){return this.voteForm.getAttribute("data-upvoted")==="true"}getCsrfDeleteInputValue(){const t=this.voteForm.querySelector(".js-data-url-delete-csrf");return t?t.value:""}getCsrfPutInputValue(){const t=this.voteForm.querySelector(".js-data-url-put-csrf");return t?t.value:""}simulateUpvote(){var t,m,p,E;this.voteForm.setAttribute("data-upvoted","true"),this.voteForm.getAttribute("data-new-upvote")&&((t=this.voteForm.querySelector(".js-upvote-button"))==null||t.classList.add("user-has-reacted","color-bg-accent"),(m=this.voteForm.querySelector(".js-upvote-button"))==null||m.classList.remove("color-fg-muted")),this.voteForm.classList.add("is-upvoted"),(p=this.voteButton)==null||p.setAttribute("aria-label",this.upvotedCountElement.getLabel()),(E=this.voteButton)==null||E.setAttribute("aria-pressed","true"),(0,c.x)(`${this.upvotedCountElement.getText()} Upvotes`)}simulateUpvoteDeletion(){var t,m,p,E;this.voteForm.setAttribute("data-upvoted","false"),this.voteForm.getAttribute("data-new-upvote")&&((t=this.voteForm.querySelector(".js-upvote-button"))==null||t.classList.remove("user-has-reacted","color-bg-accent"),(m=this.voteForm.querySelector(".js-upvote-button"))==null||m.classList.add("color-fg-muted")),this.voteForm.classList.remove("is-upvoted"),(p=this.voteButton)==null||p.setAttribute("aria-label",this.defaultVoteCountElement.getLabel()),(E=this.voteButton)==null||E.setAttribute("aria-pressed","false"),(0,c.x)(`${this.defaultVoteCountElement.getText()} Upvotes`)}displayUpVoteError(t){const m=this.voteForm.querySelector(".js-upvote-error");m instanceof HTMLElement&&(m.textContent=t,m.hidden=!1)}hideVoteErrors(){const t=this.voteForm.querySelector(".js-upvote-error");t instanceof HTMLElement&&(t.hidden=!0)}}e(i,"VoteFormElement");class d{constructor(t){this.voteFormElement=t}animateUpvote(t){t?this.voteFormElement.simulateUpvoteDeletion():this.voteFormElement.simulateUpvote()}animateUpvoteUndo(t){t?this.voteFormElement.simulateUpvote():this.voteFormElement.simulateUpvoteDeletion()}async click(){this.voteFormElement.hideVoteErrors();const t=this.voteFormElement.isUpvoted(),m=t?this.voteFormElement.getCsrfDeleteInputValue():this.voteFormElement.getCsrfPutInputValue(),p=t?"delete":"put";this.animateUpvote(t);const E=await r(this.voteFormElement.url,m,p,!t);if(!E.ok){const S=await E.json();this.voteFormElement.displayUpVoteError(S.error),this.animateUpvoteUndo(t)}}}e(d,"Upvote"),(0,u.N7)(".js-upvote-button",s=>{if(!(s instanceof HTMLElement)||!(s.parentElement instanceof HTMLElement))return;const t=new d(new i(s.parentElement));s.addEventListener("click",async()=>{await t.click()})})},75488:(T,_,o)=>{o.d(_,{C:()=>u,x:()=>c});const c=function(){return document.readyState==="interactive"||document.readyState==="complete"?Promise.resolve():new Promise(r=>{document.addEventListener("DOMContentLoaded",()=>{r()})})}(),u=function(){return document.readyState==="complete"?Promise.resolve():new Promise(r=>{window.addEventListener("load",r)})}()},51012:(T,_,o)=>{o.d(_,{LN:()=>p,aJ:()=>C,cI:()=>M,eK:()=>S,mT:()=>E});var c=o(71692),u=o(70290),r=o(82918),l=o(50232),i=o(28382),d=o(97261);let s=!1,t=0;const m=Date.now();function p(b){b.error&&v(g(f(b.error)))}e(p,"reportEvent");async function E(b){if(!!b.promise)try{await b.promise}catch(w){v(g(f(w)))}}e(E,"reportPromiseRejectionEvent");function S(b,w={}){b&&b.name!=="AbortError"&&v(g(f(b),w))}e(S,"reportError");async function v(b){var w,R;if(!P())return;const x=(R=(w=document.head)==null?void 0:w.querySelector('meta[name="browser-errors-url"]'))==null?void 0:R.content;if(!!x){if(j(b.error.stacktrace)){s=!0;return}t++;try{await fetch(x,{method:"post",body:JSON.stringify(b)})}catch{}}}e(v,"report");function f(b){return{type:b.name,value:b.message,stacktrace:M(b)}}e(f,"formatError");function g(b,w={}){return Object.assign({error:b,sanitizedUrl:(0,d.S)()||window.location.href,readyState:document.readyState,referrer:(0,c.wP)(),timeSinceLoad:Math.round(Date.now()-m),user:C()||void 0},w)}e(g,"errorContext");function M(b){return(0,i.Q)(b.stack||"").map(w=>({filename:w.file||"",function:String(w.methodName),lineno:(w.lineNumber||0).toString(),colno:(w.column||0).toString()}))}e(M,"stacktrace");const A=/(chrome|moz|safari)-extension:\/\//;function j(b){return b.some(w=>A.test(w.filename)||A.test(w.function))}e(j,"isExtensionError");function C(){var b,w;const R=(w=(b=document.head)==null?void 0:b.querySelector('meta[name="user-login"]'))==null?void 0:w.content;return R||`anonymous-${(0,r.b)()}`}e(C,"pageUser");let D=!1;window.addEventListener("pageshow",()=>D=!1),window.addEventListener("pagehide",()=>D=!0),document.addEventListener(c.QE.ERROR,b=>{v(g({type:"SoftNavError",value:b.detail,stacktrace:M(new Error)}))});function P(){return!D&&!s&&t<10&&(0,l.Gb)()&&!(0,u.Z)(document)}e(P,"reportable"),typeof BroadcastChannel=="function"&&new BroadcastChannel("shared-worker-error").addEventListener("message",w=>{S(w.data.error)})},57654:(T,_,o)=>{o.d(_,{Bt:()=>i,DN:()=>t,KL:()=>E,Se:()=>s,qC:()=>S,sw:()=>m});var c=o(59753),u=o(2077),r=o(63621);(0,c.on)("click",".js-remote-submit-button",async function(v){const g=v.currentTarget.form;v.preventDefault();let M;try{M=await fetch(g.action,{method:g.method,body:new FormData(g),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}M&&!M.ok&&(0,r.v)()});function l(v,f,g){return v.dispatchEvent(new CustomEvent(f,{bubbles:!0,cancelable:g}))}e(l,"fire");function i(v,f){f&&(d(v,f),(0,u.j)(f)),l(v,"submit",!0)&&v.submit()}e(i,"requestSubmit");function d(v,f){if(!(v instanceof HTMLFormElement))throw new TypeError("The specified element is not of type HTMLFormElement.");if(!(f instanceof HTMLElement))throw new TypeError("The specified element is not of type HTMLElement.");if(f.type!=="submit")throw new TypeError("The specified element is not a submit button.");if(!v||v!==f.form)throw new Error("The specified element is not owned by the form element.")}e(d,"checkButtonValidity");function s(v,f){if(typeof f=="boolean")if(v instanceof HTMLInputElement)v.checked=f;else throw new TypeError("only checkboxes can be set to boolean value");else{if(v.type==="checkbox")throw new TypeError("checkbox can't be set to string value");v.value=f}l(v,"change",!1)}e(s,"changeValue");function t(v,f){for(const g in f){const M=f[g],A=v.elements.namedItem(g);(A instanceof HTMLInputElement||A instanceof HTMLTextAreaElement)&&(A.value=M)}}e(t,"fillFormValues");function m(v){if(!(v instanceof HTMLElement))return!1;const f=v.nodeName.toLowerCase(),g=(v.getAttribute("type")||"").toLowerCase();return f==="select"||f==="textarea"||f==="input"&&g!=="submit"&&g!=="reset"||v.isContentEditable}e(m,"isFormField");function p(v){return new URLSearchParams(v)}e(p,"searchParamsFromFormData");function E(v,f){const g=new URLSearchParams(v.search),M=p(f);for(const[A,j]of M)g.append(A,j);return g.toString()}e(E,"combineGetFormSearchParams");function S(v){return p(new FormData(v)).toString()}e(S,"serialize")},98016:(T,_,o)=>{o.d(_,{Mw:()=>v,_C:()=>S,lO:()=>E,qA:()=>p,y0:()=>l});const c=[];let u=0,r;function l(){return r}e(l,"getState");function i(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch{return 0}}e(i,"safeGetHistory");function d(){const f={_id:new Date().getTime(),...history.state};return t(f),f}e(d,"initializeState");function s(){return i()-1+u}e(s,"position");function t(f){r=f;const g=location.href;c[s()]={url:g,state:r},c.length=i(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}e(t,"setState");function m(){return new Date().getTime()}e(m,"uniqueId");function p(f,g,M){u=0;const A={_id:m(),...f};history.pushState(A,g,M),t(A)}e(p,"pushState");function E(f,g,M){const A={...l(),...f};history.replaceState(A,g,M),t(A)}e(E,"replaceState");function S(){const f=c[s()-1];if(f)return f.url}e(S,"getBackURL");function v(){const f=c[s()+1];if(f)return f.url}e(v,"getForwardURL"),r=d(),window.addEventListener("popstate",e(function(g){var M,A,j,C,D;const P=g.state;if(!(!P||!P._id&&!((M=P.turbo)==null?void 0:M.restorationIdentifier))){if((A=P.turbo)==null?void 0:A.restorationIdentifier){const b=P.turbo.restorationIdentifier;((D=(C=(j=c[s()-1])==null?void 0:j.state)==null?void 0:C.turbo)==null?void 0:D.restorationIdentifier)===b?u--:u++}else P._id<(l()._id||NaN)?u--:u++;t(P)}},"onPopstate"),!0),window.addEventListener("turbo:visit",f=>{f instanceof CustomEvent&&f.detail.action!=="restore"&&(u=0,E(history.state,"",f.detail.url))}),window.addEventListener("turbo:load",()=>{E(history.state,"","")},{once:!0}),window.addEventListener("hashchange",e(function(){if(i()>c.length){const g={_id:m()};history.replaceState(g,"",location.href),t(g)}},"onHashchange"),!0)},91385:(T,_,o)=>{o.d(_,{$S:()=>u,Fk:()=>r,sz:()=>l});var c=o(77552);function u(i,d,s){const t={hydroEventPayload:i,hydroEventHmac:d,visitorPayload:"",visitorHmac:"",hydroClientContext:s},m=document.querySelector("meta[name=visitor-payload]");m instanceof HTMLMetaElement&&(t.visitorPayload=m.content);const p=document.querySelector("meta[name=visitor-hmac]")||"";p instanceof HTMLMetaElement&&(t.visitorHmac=p.content),(0,c.b)(t,!0)}e(u,"sendData");function r(i){const d=i.getAttribute("data-hydro-view")||"",s=i.getAttribute("data-hydro-view-hmac")||"",t=i.getAttribute("data-hydro-client-context")||"";u(d,s,t)}e(r,"trackView");function l(i){const d=i.getAttribute("data-hydro-click-payload")||"",s=i.getAttribute("data-hydro-click-hmac")||"",t=i.getAttribute("data-hydro-client-context")||"";u(d,s,t)}e(l,"sendHydroEvent")},43721:(T,_,o)=>{o.d(_,{ZG:()=>i,q6:()=>s,w4:()=>d});var c=o(8439);let u=!1;const r=new c.Z;function l(t){const m=t.target;if(m instanceof HTMLElement&&m.nodeType!==Node.DOCUMENT_NODE)for(const p of r.matches(m))p.data.call(null,m)}e(l,"handleFocus");function i(t,m){u||(u=!0,document.addEventListener("focus",l,!0)),r.add(t,m),document.activeElement instanceof HTMLElement&&document.activeElement.matches(t)&&m(document.activeElement)}e(i,"onFocus");function d(t,m,p){function E(S){const v=S.currentTarget;!v||(v.removeEventListener(t,p),v.removeEventListener("blur",E))}e(E,"blurHandler"),i(m,function(S){S.addEventListener(t,p),S.addEventListener("blur",E)})}e(d,"onKey");function s(t,m){function p(E){const{currentTarget:S}=E;!S||(S.removeEventListener("input",m),S.removeEventListener("blur",p))}e(p,"blurHandler"),i(t,function(E){E.addEventListener("input",m),E.addEventListener("blur",p)})}e(s,"onInput")},82927:(T,_,o)=>{var c=o(64463),u=o(59753);let r=null,l=null;function i(s){const{item:t,oldIndex:m}=s,{parentNode:p}=t;l=p.children[m+1]}e(i,"handleStart");async function d(s){const{oldIndex:t,newIndex:m,item:p}=s;if(t===m)return;const E=p.closest(".js-pinned-items-reorder-form"),S=E.closest(".js-pinned-items-reorder-container"),v=S.querySelector(".js-pinned-items-spinner"),f=S.querySelector(".js-pinned-items-reorder-message"),g=v&&f;if(g&&(f.textContent="",v.style.display="inline-block"),r.option("disabled",!0),!(await fetch(E.action,{method:E.method,body:new FormData(E),headers:{"X-Requested-With":"XMLHttpRequest"}})).ok){g&&(f.textContent=f.getAttribute("data-error-text")||"",v.style.display="none");const A=p.parentNode;l?A.insertBefore(p,l):A.appendChild(p);return}g&&(f.textContent=f.getAttribute("data-success-text")||"",v.style.display="none"),r.option("disabled",!1)}e(d,"handleUpdate"),(0,c.N7)(".js-pinned-items-reorder-list",{async add(s){const{Sortable:t}=await o.e("app_assets_modules_github_sortable-behavior_ts").then(o.bind(o,87449));r=t.create(s,{animation:150,item:".js-pinned-item-list-item",handle:".js-pinned-item-reorder",onUpdate:d,onStart:i,chosenClass:"is-dragging"})}}),(0,u.on)("submit",".js-pinned-items-reorder-form",function(s){s.preventDefault()}),(0,u.on)("click",".js-pinned-item-list-item .js-sortable-button",async function({currentTarget:s}){const{moveWithButton:t}=await o.e("app_assets_modules_github_sortable-behavior_ts").then(o.bind(o,87449));t(s,s.closest(".js-pinned-item-list-item"),d)})},70290:(T,_,o)=>{o.d(_,{Z:()=>c});function c(u){var r,l;const i=(l=(r=u.head)==null?void 0:r.querySelector('meta[name="expected-hostname"]'))==null?void 0:l.content;if(!i)return!1;const d=i.replace(/\.$/,"").split(".").slice(-2).join("."),s=u.location.hostname.replace(/\.$/,"").split(".").slice(-2).join(".");return d!==s}e(c,"detectProxySite")},2077:(T,_,o)=>{o.d(_,{j:()=>c,u:()=>u});function c(r){const l=r.closest("form");if(!(l instanceof HTMLFormElement))return;let i=u(l);if(r.name){const d=r.matches("input[type=submit]")?"Submit":"",s=r.value||d;i||(i=document.createElement("input"),i.type="hidden",i.classList.add("is-submit-button-value"),l.prepend(i)),i.name=r.name,i.value=s}else i&&i.remove()}e(c,"persistSubmitButtonValue");function u(r){const l=r.querySelector("input.is-submit-button-value");return l instanceof HTMLInputElement?l:null}e(u,"findPersistedSubmitButtonValue")},31579:(T,_,o)=>{o.d(_,{Z:()=>u});class c{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}}e(c,"NoOpStorage");function u(r,l={throwQuotaErrorsOnSet:!1},i=window){let d;try{d=i[r]}catch{d=new c}const{throwQuotaErrorsOnSet:s}=l;function t(E){try{return d.getItem(E)}catch{return null}}e(t,"getItem");function m(E,S){try{d.setItem(E,S)}catch(v){if(s&&v.message.toLowerCase().includes("quota"))throw v}}e(m,"setItem");function p(E){try{d.removeItem(E)}catch{}}return e(p,"removeItem"),{getItem:t,setItem:m,removeItem:p}}e(u,"safeStorage")},30855:(T,_,o)=>{o.d(_,{LS:()=>r,cl:()=>l,rV:()=>u});var c=o(31579);const{getItem:u,setItem:r,removeItem:l}=(0,c.Z)("sessionStorage")},71692:(T,_,o)=>{o.d(_,{Ak:()=>v,F2:()=>b,F6:()=>j,FP:()=>E,LD:()=>p,OE:()=>m,Po:()=>t,QE:()=>r,Rl:()=>D,Xk:()=>M,Ys:()=>A,aN:()=>P,wP:()=>C});var c=o(30855),u=o(97261);const r=Object.freeze({INITIAL:"soft-nav:initial",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",START:"soft-nav:start",END:"soft-nav:end"}),l="soft-navigation-fail",i="soft-navigation-referrer",d="soft-navigation-marker",s="reload";function t(){return(0,c.rV)(d)==="1"}e(t,"inSoftNavigation");function m(){return Boolean(f())}e(m,"hasSoftNavFailure");function p(){performance.mark(d),(0,c.LS)(d,"1"),(0,c.LS)(i,(0,u.S)()||window.location.href)}e(p,"startSoftNav");function E(){(0,c.LS)(d,"0")}e(E,"endSoftNav");function S(){(0,c.LS)(d,"0"),(0,c.cl)(i),(0,c.cl)(l)}e(S,"clearSoftNav");function v(w){(0,c.LS)(l,w||s)}e(v,"setSoftNavFailReason");function f(){return(0,c.rV)(l)}e(f,"getSoftNavFailReason");let g=0;function M(){g+=1,document.dispatchEvent(new CustomEvent(r.SUCCESS,{detail:g}))}e(M,"softNavSucceeded");function A(){document.dispatchEvent(new CustomEvent(r.ERROR,{detail:f()||s})),g=0,S()}e(A,"softNavFailed");function j(){document.dispatchEvent(new CustomEvent(r.INITIAL)),g=0,S()}e(j,"softNavInitial");function C(){return(0,c.rV)(i)||document.referrer}e(C,"getSoftNavReferrer");function D(){return performance.getEntriesByName(d).length===0?0:performance.measure(d,d).duration}e(D,"getDurationSinceLastSoftNav");function P(){document.dispatchEvent(new Event(r.START))}e(P,"beginProgressBar");function b(){document.dispatchEvent(new Event(r.END))}e(b,"completeProgressBar")},77552:(T,_,o)=>{o.d(_,{b:()=>l});var c=o(70290),u=o(75488);let r=[];function l(m,p=!1){m.timestamp===void 0&&(m.timestamp=new Date().getTime()),m.loggedIn=t(),r.push(m),p?s():d()}e(l,"sendStats");let i=null;async function d(){await u.C,i==null&&(i=window.requestIdleCallback(s))}e(d,"scheduleSendStats");function s(){var m,p;if(i=null,!r.length||(0,c.Z)(document))return;const E=(p=(m=document.head)==null?void 0:m.querySelector('meta[name="browser-stats-url"]'))==null?void 0:p.content;if(!E)return;const S=JSON.stringify({stats:r});try{navigator.sendBeacon&&navigator.sendBeacon(E,S)}catch{}r=[]}e(s,"flushStats");function t(){var m,p;return!!((p=(m=document.head)==null?void 0:m.querySelector('meta[name="user-login"]'))==null?void 0:p.content)}e(t,"isLoggedIn"),document.addEventListener("pagehide",s),document.addEventListener("visibilitychange",s)},55526:(T,_,o)=>{o.d(_,{x:()=>u});let c;function u(l){if(r(),!l)return;const i=document.createElement("div");i.innerHTML=l,document.body&&document.body.append(i);const d=i.querySelector("button");d&&d.addEventListener("click",r,{once:!0}),document.addEventListener("keydown",s=>{s.key==="Escape"&&r()&&s.stopImmediatePropagation()}),c=i}e(u,"toggleToast");function r(){return c?(c.remove(),c=null,!0):!1}e(r,"removeToast")}},T=>{var _=e(c=>T(T.s=c),"__webpack_exec__");T.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js","vendors-node_modules_github_mini-throttle_dist_index_js-node_modules_delegated-events_dist_in-2c6780"],()=>_(94351));var o=T.O()}]);})();

//# sourceMappingURL=dashboard-c5ccee06d627.js.map