import{S as nt,i as at,s as rt,a as ot,e as C,c as st,b as K,g as de,t as F,d as pe,f as B,h as M,j as it,o as Oe,k as lt,l as ct,m as ft,n as ve,p as V,q as ut,r as dt,u as pt,v as H,w as W,x as je,y as Y,z as X,A as le}from"./chunks/index-ecd388f0.js";import{S as et,I as q,g as ze,f as He,a as Ee,b as ce,s as J,i as We,c as ue,P as Ye,d as ht,e as mt,h as _t}from"./chunks/singletons-040742f0.js";import{_ as fe}from"./chunks/preload-helper-41c905a7.js";function gt(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function yt(a){return a.split("%25").map(decodeURI).join("%25")}function wt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(a,e){const n=new URL(a);for(const l of bt){let s=n[l];Object.defineProperty(n,l,{get(){return e(),s},enumerable:!0,configurable:!0})}return Et(n),n}function Et(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function St(a){return a.replace(/\/$/,"")+kt}function Rt(a){let e=5381;if(typeof a=="string"){let n=a.length;for(;n;)e=e*33^a.charCodeAt(--n)}else if(ArrayBuffer.isView(a)){const n=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);let l=n.length;for(;l;)e=e*33^n[--l]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const he=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&ee.delete(Ne(a)),he(a,e));const ee=new Map;function Lt(a,e){const n=Ne(a,e),l=document.querySelector(n);if(l!=null&&l.textContent){const{body:s,...m}=JSON.parse(l.textContent),t=l.getAttribute("data-ttl");return t&&ee.set(n,{body:s,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(s,m))}return he(a,e)}function Ot(a,e,n){if(ee.size>0){const l=Ne(a,n),s=ee.get(l);if(s){if(performance.now()<s.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(s.body,s.init);ee.delete(l)}}return he(e,n)}function Ne(a,e){let l=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;return e!=null&&e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(l+=`[data-hash="${Rt(e.body)}"]`),l}const It=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function At(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${jt(a).map(l=>{const s=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(l);if(s)return e.push({name:s[1],matcher:s[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const m=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(l);if(m)return e.push({name:m[1],matcher:m[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!l)return;const t=l.split(/\[(.+?)\](?!\])/);return"/"+t.map((h,_)=>{if(_%2){if(h.startsWith("x+"))return ke(String.fromCharCode(parseInt(h.slice(2),16)));if(h.startsWith("u+"))return ke(String.fromCharCode(...h.slice(2).split("-").map(P=>parseInt(P,16))));const y=It.exec(h);if(!y)throw new Error(`Invalid param: ${h}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,v,R,$,T]=y;return e.push({name:$,matcher:T,optional:!!v,rest:!!R,chained:R?_===1&&t[0]==="":!1}),R?"(.*?)":v?"([^/]*)?":"([^/]+?)"}return ke(h)}).join("")}).join("")}/?$`),params:e}}function Pt(a){return!/^\([^)]+\)$/.test(a)}function jt(a){return a.slice(1).split("/").filter(Pt)}function Nt(a,e,n){const l={},s=a.slice(1);let m="";for(let t=0;t<e.length;t+=1){const f=e[t];let h=s[t];if(f.chained&&f.rest&&m&&(h=h?m+"/"+h:m),m="",h===void 0)f.rest&&(l[f.name]="");else{if(f.matcher&&!n[f.matcher](h)){if(f.optional&&f.chained){let _=s.indexOf(void 0,t);if(_===-1){const y=e[t+1];if(y!=null&&y.rest&&y.chained)m=h;else return}for(;_>=t;)s[_]=s[_-1],_-=1;continue}return}l[f.name]=h}}if(!m)return l}function ke(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(a,e,n,l){const s=new Set(e);return Object.entries(n).map(([f,[h,_,y]])=>{const{pattern:v,params:R}=At(f),$={id:f,exec:T=>{const P=v.exec(T);if(P)return Nt(P,R,l)},errors:[1,...y||[]].map(T=>a[T]),layouts:[0,..._||[]].map(t),leaf:m(h)};return $.errors.length=$.layouts.length=Math.max($.errors.length,$.layouts.length),$});function m(f){const h=f<0;return h&&(f=~f),[h,a[f]]}function t(f){return f===void 0?f:[s.has(f),a[f]]}}function $t(a){let e,n,l;var s=a[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=H(s,m(a))),{c(){e&&W(e.$$.fragment),n=C()},l(t){e&&je(e.$$.fragment,t),n=C()},m(t,f){e&&Y(e,t,f),K(t,n,f),l=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&2&&(h.form=t[1]),s!==(s=t[0][0])){if(e){de();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),pe()}s?(e=H(s,m(t)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){l||(e&&B(e.$$.fragment,t),l=!0)},o(t){e&&F(e.$$.fragment,t),l=!1},d(t){t&&M(n),e&&X(e,t)}}}function Tt(a){let e,n,l;var s=a[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Dt]},$$scope:{ctx:t}}}}return s&&(e=H(s,m(a))),{c(){e&&W(e.$$.fragment),n=C()},l(t){e&&je(e.$$.fragment,t),n=C()},m(t,f){e&&Y(e,t,f),K(t,n,f),l=!0},p(t,f){const h={};if(f&4&&(h.data=t[2]),f&523&&(h.$$scope={dirty:f,ctx:t}),s!==(s=t[0][0])){if(e){de();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),pe()}s?(e=H(s,m(t)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){l||(e&&B(e.$$.fragment,t),l=!0)},o(t){e&&F(e.$$.fragment,t),l=!1},d(t){t&&M(n),e&&X(e,t)}}}function Dt(a){let e,n,l;var s=a[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=H(s,m(a))),{c(){e&&W(e.$$.fragment),n=C()},l(t){e&&je(e.$$.fragment,t),n=C()},m(t,f){e&&Y(e,t,f),K(t,n,f),l=!0},p(t,f){const h={};if(f&8&&(h.data=t[3]),f&2&&(h.form=t[1]),s!==(s=t[0][1])){if(e){de();const _=e;F(_.$$.fragment,1,0,()=>{X(_,1)}),pe()}s?(e=H(s,m(t)),W(e.$$.fragment),B(e.$$.fragment,1),Y(e,n.parentNode,n)):e=null}else s&&e.$set(h)},i(t){l||(e&&B(e.$$.fragment,t),l=!0)},o(t){e&&F(e.$$.fragment,t),l=!1},d(t){t&&M(n),e&&X(e,t)}}}function Xe(a){let e,n=a[5]&&Ze(a);return{c(){e=lt("div"),n&&n.c(),this.h()},l(l){e=ct(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=ft(e);n&&n.l(s),s.forEach(M),this.h()},h(){ve(e,"id","svelte-announcer"),ve(e,"aria-live","assertive"),ve(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(l,s){K(l,e,s),n&&n.m(e,null)},p(l,s){l[5]?n?n.p(l,s):(n=Ze(l),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(l){l&&M(e),n&&n.d()}}}function Ze(a){let e;return{c(){e=ut(a[6])},l(n){e=dt(n,a[6])},m(n,l){K(n,e,l)},p(n,l){l&64&&pt(e,n[6])},d(n){n&&M(e)}}}function Vt(a){let e,n,l,s,m;const t=[Tt,$t],f=[];function h(y,v){return y[0][1]?0:1}e=h(a),n=f[e]=t[e](a);let _=a[4]&&Xe(a);return{c(){n.c(),l=ot(),_&&_.c(),s=C()},l(y){n.l(y),l=st(y),_&&_.l(y),s=C()},m(y,v){f[e].m(y,v),K(y,l,v),_&&_.m(y,v),K(y,s,v),m=!0},p(y,[v]){let R=e;e=h(y),e===R?f[e].p(y,v):(de(),F(f[R],1,1,()=>{f[R]=null}),pe(),n=f[e],n?n.p(y,v):(n=f[e]=t[e](y),n.c()),B(n,1),n.m(l.parentNode,l)),y[4]?_?_.p(y,v):(_=Xe(y),_.c(),_.m(s.parentNode,s)):_&&(_.d(1),_=null)},i(y){m||(B(n),m=!0)},o(y){F(n),m=!1},d(y){f[e].d(y),y&&M(l),_&&_.d(y),y&&M(s)}}}function qt(a,e,n){let{stores:l}=e,{page:s}=e,{components:m}=e,{form:t}=e,{data_0:f=null}=e,{data_1:h=null}=e;it(l.page.notify);let _=!1,y=!1,v=null;return Oe(()=>{const R=l.page.subscribe(()=>{_&&(n(5,y=!0),n(6,v=document.title||"untitled page"))});return n(4,_=!0),R}),a.$$set=R=>{"stores"in R&&n(7,l=R.stores),"page"in R&&n(8,s=R.page),"components"in R&&n(0,m=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,f=R.data_0),"data_1"in R&&n(3,h=R.data_1)},a.$$.update=()=>{a.$$.dirty&384&&l.page.set(s)},[m,t,f,h,_,y,v,l,s]}class Ct extends nt{constructor(e){super(),at(this,e,qt,Vt,rt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft={},me=[()=>fe(()=>import("./chunks/0-8c86b964.js"),["./chunks\\0-8c86b964.js","./chunks\\_layout-025914ab.js","./components\\layout.svelte-8caa0652.js","./chunks\\index-ecd388f0.js"],import.meta.url),()=>fe(()=>import("./chunks/1-b78c0488.js"),["./chunks\\1-b78c0488.js","./components\\error.svelte-540c83aa.js","./chunks\\index-ecd388f0.js","./chunks\\singletons-040742f0.js"],import.meta.url),()=>fe(()=>import("./chunks/2-e5d1eda2.js"),["./chunks\\2-e5d1eda2.js","./components\\pages\\_page.svelte-43e96a1f.js","./chunks\\index-ecd388f0.js","./chunks\\Navbar-3a68137d.js","./assets\\Navbar-865cc33e.css","./chunks\\preload-helper-41c905a7.js","./assets\\_page-3819b188.css"],import.meta.url),()=>fe(()=>import("./chunks/3-98154adb.js"),["./chunks\\3-98154adb.js","./components\\pages\\resume\\_page.svelte-3150aa2a.js","./chunks\\index-ecd388f0.js","./chunks\\Navbar-3a68137d.js","./assets\\Navbar-865cc33e.css","./assets\\_page-3aef21a9.css"],import.meta.url)],Bt=[],Mt={"/":[2],"/resume":[3]},Gt={handleError:({error:a})=>{console.error(a)}};class Ie{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Qe{constructor(e,n){this.status=e,this.location=n}}async function Jt(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([l,s])=>[l,await s])));return a}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Kt=-1,zt=-2,Ht=-3,Wt=-4,Yt=-5,Xt=-6;function Zt(a){if(typeof a=="number")return l(a,!0);if(!Array.isArray(a)||a.length===0)throw new Error("Invalid input");const e=a,n=Array(e.length);function l(s,m=!1){if(s===Kt)return;if(s===Ht)return NaN;if(s===Wt)return 1/0;if(s===Yt)return-1/0;if(s===Xt)return-0;if(m)throw new Error("Invalid input");if(s in n)return n[s];const t=e[s];if(!t||typeof t!="object")n[s]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[s]=new Date(t[1]);break;case"Set":const h=new Set;n[s]=h;for(let v=1;v<t.length;v+=1)h.add(l(t[v]));break;case"Map":const _=new Map;n[s]=_;for(let v=1;v<t.length;v+=2)_.set(l(t[v]),l(t[v+1]));break;case"RegExp":n[s]=new RegExp(t[1],t[2]);break;case"Object":n[s]=Object(t[1]);break;case"BigInt":n[s]=BigInt(t[1]);break;case"null":const y=Object.create(null);n[s]=y;for(let v=1;v<t.length;v+=2)y[t[v]]=l(t[v+1]);break}else{const f=new Array(t.length);n[s]=f;for(let h=0;h<t.length;h+=1){const _=t[h];_!==zt&&(f[h]=l(_))}}else{const f={};n[s]=f;for(const h in t){const _=t[h];f[h]=l(_)}}return n[s]}return l(0)}const Se=Ut(me,Bt,Mt,Ft),Ae=me[0],Pe=me[1];Ae();Pe();let te={};try{te=JSON.parse(sessionStorage[et])}catch{}function Re(a){te[a]=ue()}function Qt({target:a,base:e}){var Ge;const n=document.documentElement,l=[];let s=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,h=!1,_=!0,y=!1,v=!1,R=!1,$=!1,T,P=(Ge=history.state)==null?void 0:Ge[q];P||(P=Date.now(),history.replaceState({...history.state,[q]:P},"",location.href));const _e=te[P];_e&&(history.scrollRestoration="manual",scrollTo(_e.x,_e.y));let G,Ue,ne;async function $e(){ne=ne||Promise.resolve(),await ne,ne=null;const r=new URL(location.href),o=oe(r,!0);s=null,await De(o,r,[])}async function ge(r,{noScroll:o=!1,replaceState:c=!1,keepFocus:i=!1,state:d={},invalidateAll:u=!1},p,w){return typeof r=="string"&&(r=new URL(r,ze(document))),se({url:r,scroll:o?ue():null,keepfocus:i,redirect_chain:p,details:{state:d,replaceState:c},nav_token:w,accepted:()=>{u&&($=!0)},blocked:()=>{},type:"goto"})}async function Te(r){const o=oe(r,!1);if(!o)throw new Error(`Attempted to preload a URL that does not belong to this app: ${r}`);return s={id:o.id,promise:Ce(o).then(c=>(c.type==="loaded"&&c.state.error&&(s=null),c))},s.promise}async function ae(...r){const c=Se.filter(i=>r.some(d=>i.exec(d))).map(i=>Promise.all([...i.layouts,i.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(c)}async function De(r,o,c,i,d={},u){var w,b;Ue=d;let p=r&&await Ce(r);if(p||(p=await Me(o,{id:null},await x(new Error(`Not found: ${o.pathname}`),{url:o,params:{},route:{id:null}}),404)),o=(r==null?void 0:r.url)||o,Ue!==d)return!1;if(p.type==="redirect")if(c.length>10||c.includes(o.pathname))p=await re({status:500,error:await x(new Error("Redirect loop"),{url:o,params:{},route:{id:null}}),url:o,route:{id:null}});else return ge(new URL(p.location,o).href,{},[...c,o.pathname],d),!1;else((b=(w=p.props)==null?void 0:w.page)==null?void 0:b.status)>=400&&await J.updated.check()&&await ie(o);if(l.length=0,$=!1,y=!0,i&&i.details){const{details:g}=i,k=g.replaceState?0:1;g.state[q]=P+=k,history[g.replaceState?"replaceState":"pushState"](g.state,"",o)}if(s=null,h?(t=p.state,p.props.page&&(p.props.page.url=o),T.$set(p.props)):Ve(p),i){const{scroll:g,keepfocus:k}=i;if(k||Le(),await le(),_){const L=o.hash&&document.getElementById(o.hash.slice(1));g?scrollTo(g.x,g.y):L?L.scrollIntoView():scrollTo(0,0)}}else await le();_=!0,p.props.page&&(G=p.props.page),u&&u(),y=!1}function Ve(r){var i;t=r.state;const o=document.querySelector("style[data-sveltekit]");o&&o.remove(),G=r.props.page,T=new Ct({target:a,props:{...r.props,stores:J},hydrate:!0});const c={from:null,to:{params:t.params,route:{id:((i=t.route)==null?void 0:i.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};m.after_navigate.forEach(d=>d(c)),h=!0}async function Z({url:r,params:o,branch:c,status:i,error:d,route:u,form:p}){const w=c.filter(Boolean);let b="never";for(const O of c)(O==null?void 0:O.slash)!==void 0&&(b=O.slash);r.pathname=gt(r.pathname,b),r.search=r.search;const g={type:"loaded",state:{url:r,params:o,branch:c,error:d,route:u},props:{components:w.map(O=>O.node.component)}};p!==void 0&&(g.props.form=p);let k={},L=!G;for(let O=0;O<w.length;O+=1){const E=w[O];k={...k,...E.data},(L||!t.branch.some(N=>N===E))&&(g.props[`data_${O}`]=k,L=L||Object.keys(E.data??{}).length>0)}return L||(L=Object.keys(G.data).length!==Object.keys(k).length),(!t.url||r.href!==t.url.href||t.error!==d||p!==void 0||L)&&(g.props.page={error:d,params:o,route:{id:(u==null?void 0:u.id)??null},status:i,url:new URL(r),form:p??null,data:L?k:G.data}),g}async function ye({loader:r,parent:o,url:c,params:i,route:d,server_data_node:u}){var g,k,L;let p=null;const w={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},b=await r();if((g=b.universal)!=null&&g.load){let D=function(...E){for(const N of E){const{href:U}=new URL(N,c);w.dependencies.add(U)}};const O={route:{get id(){return w.route=!0,d.id}},params:new Proxy(i,{get:(E,N)=>(w.params.add(N),E[N])}),data:(u==null?void 0:u.data)??null,url:vt(c,()=>{w.url=!0}),async fetch(E,N){let U;E instanceof Request?(U=E.url,N={body:E.method==="GET"||E.method==="HEAD"?void 0:await E.blob(),cache:E.cache,credentials:E.credentials,headers:E.headers,integrity:E.integrity,keepalive:E.keepalive,method:E.method,mode:E.mode,redirect:E.redirect,referrer:E.referrer,referrerPolicy:E.referrerPolicy,signal:E.signal,...N}):U=E;const S=new URL(U,c).href;return D(S),h?Ot(U,S,N):Lt(U,N)},setHeaders:()=>{},depends:D,parent(){return w.parent=!0,o()}};p=await b.universal.load.call(null,O)??null,p=p?await Jt(p):null}return{node:b,loader:r,server:u,universal:(k=b.universal)!=null&&k.load?{type:"data",data:p,uses:w}:null,data:p??(u==null?void 0:u.data)??null,slash:((L=b.universal)==null?void 0:L.trailingSlash)??(u==null?void 0:u.slash)}}function qe(r,o,c,i,d){if($)return!0;if(!i)return!1;if(i.parent&&r||i.route&&o||i.url&&c)return!0;for(const u of i.params)if(d[u]!==t.params[u])return!0;for(const u of i.dependencies)if(l.some(p=>p(new URL(u))))return!0;return!1}function we(r,o){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?o??null:null}async function Ce({id:r,invalidating:o,url:c,params:i,route:d}){if((s==null?void 0:s.id)===r)return s.promise;const{errors:u,layouts:p,leaf:w}=d,b=[...p,w];u.forEach(S=>S==null?void 0:S().catch(()=>{})),b.forEach(S=>S==null?void 0:S[1]().catch(()=>{}));let g=null;const k=t.url?r!==t.url.pathname+t.url.search:!1,L=t.route?r!==t.route.id:!1,D=b.reduce((S,A,j)=>{var Q;const I=t.branch[j],z=!!(A!=null&&A[0])&&((I==null?void 0:I.loader)!==A[1]||qe(S.some(Boolean),L,k,(Q=I.server)==null?void 0:Q.uses,i));return S.push(z),S},[]);if(D.some(Boolean)){try{g=await xe(c,D)}catch(S){return re({status:500,error:await x(S,{url:c,params:i,route:{id:d.id}}),url:c,route:d})}if(g.type==="redirect")return g}const O=g==null?void 0:g.nodes;let E=!1;const N=b.map(async(S,A)=>{var Q;if(!S)return;const j=t.branch[A],I=O==null?void 0:O[A];if((!I||I.type==="skip")&&S[1]===(j==null?void 0:j.loader)&&!qe(E,L,k,(Q=j.universal)==null?void 0:Q.uses,i))return j;if(E=!0,(I==null?void 0:I.type)==="error")throw I;return ye({loader:S[1],url:c,params:i,route:d,parent:async()=>{var Ke;const Je={};for(let be=0;be<A;be+=1)Object.assign(Je,(Ke=await N[be])==null?void 0:Ke.data);return Je},server_data_node:we(I===void 0&&S[0]?{type:"skip"}:I??null,j==null?void 0:j.server)})});for(const S of N)S.catch(()=>{});const U=[];for(let S=0;S<b.length;S+=1)if(b[S])try{U.push(await N[S])}catch(A){if(A instanceof Qe)return{type:"redirect",location:A.location};let j=500,I;O!=null&&O.includes(A)?(j=A.status??j,I=A.error):A instanceof Ie?(j=A.status,I=A.body):I=await x(A,{params:i,url:c,route:{id:d.id}});const z=await Fe(S,U,u);return z?await Z({url:c,params:i,branch:U.slice(0,z.idx).concat(z.node),status:j,error:I,route:d}):await Me(c,{id:d.id},I,j)}else U.push(void 0);return await Z({url:c,params:i,branch:U,status:200,error:null,route:d,form:o?void 0:null})}async function Fe(r,o,c){for(;r--;)if(c[r]){let i=r;for(;!o[i];)i-=1;try{return{idx:i+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function re({status:r,error:o,url:c,route:i}){const d={},u=await Ae();let p=null;if(u.server)try{const g=await xe(c,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;p=g.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await ie(c)}const w=await ye({loader:Ae,url:c,params:d,route:i,parent:()=>Promise.resolve({}),server_data_node:we(p)}),b={node:await Pe(),loader:Pe,universal:null,server:null,data:null};return await Z({url:c,params:d,branch:[w,b],status:r,error:o,route:null})}function oe(r,o){if(We(r,e))return;const c=yt(r.pathname.slice(e.length)||"/");for(const i of Se){const d=i.exec(c);if(d)return{id:r.pathname+r.search,invalidating:o,route:i,params:wt(d),url:r}}}function Be({url:r,type:o,intent:c,delta:i}){var w,b;let d=!1;const u={from:{params:t.params,route:{id:((w=t.route)==null?void 0:w.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((b=c==null?void 0:c.route)==null?void 0:b.id)??null},url:r},willUnload:!c,type:o};i!==void 0&&(u.delta=i);const p={...u,cancel:()=>{d=!0}};return v||m.before_navigate.forEach(g=>g(p)),d?null:u}async function se({url:r,scroll:o,keepfocus:c,redirect_chain:i,details:d,type:u,delta:p,nav_token:w,accepted:b,blocked:g}){const k=oe(r,!1),L=Be({url:r,type:u,delta:p,intent:k});if(!L){g();return}Re(P),b(),v=!0,h&&J.navigating.set(L),await De(k,r,i,{scroll:o,keepfocus:c,details:d},w,()=>{v=!1,m.after_navigate.forEach(D=>D(L)),J.navigating.set(null)})}async function Me(r,o,c,i){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await re({status:i,error:c,url:r,route:o}):await ie(r)}function ie(r){return location.href=r.href,new Promise(()=>{})}function tt(){let r;n.addEventListener("mousemove",u=>{const p=u.target;clearTimeout(r),r=setTimeout(()=>{i(p,2)},20)});function o(u){i(u.composedPath()[0],1)}n.addEventListener("mousedown",o),n.addEventListener("touchstart",o,{passive:!0});const c=new IntersectionObserver(u=>{for(const p of u)p.isIntersecting&&(ae(new URL(p.target.href).pathname),c.unobserve(p.target))},{threshold:0});function i(u,p){const w=He(u,n);if(!w)return;const{url:b,external:g}=Ee(w,e);if(g)return;const k=ce(w);k.reload||(p<=k.preload_data?Te(b):p<=k.preload_code&&ae(b.pathname))}function d(){c.disconnect();for(const u of n.querySelectorAll("a")){const{url:p,external:w}=Ee(u,e);if(w)continue;const b=ce(u);b.reload||(b.preload_code===Ye.viewport&&c.observe(u),b.preload_code===Ye.eager&&ae(p.pathname))}}m.after_navigate.push(d),d()}return{after_navigate:r=>{Oe(()=>(m.after_navigate.push(r),()=>{const o=m.after_navigate.indexOf(r);m.after_navigate.splice(o,1)}))},before_navigate:r=>{Oe(()=>(m.before_navigate.push(r),()=>{const o=m.before_navigate.indexOf(r);m.before_navigate.splice(o,1)}))},disable_scroll_handling:()=>{(y||!h)&&(_=!1)},goto:(r,o={})=>ge(r,o,[]),invalidate:r=>{if(typeof r=="function")l.push(r);else{const{href:o}=new URL(r,location.href);l.push(c=>c.href===o)}return $e()},invalidateAll:()=>($=!0,$e()),preload_data:async r=>{const o=new URL(r,ze(document));await Te(o)},preload_code:ae,apply_action:async r=>{if(r.type==="error"){const o=new URL(location.href),{branch:c,route:i}=t;if(!i)return;const d=await Fe(t.branch.length,c,i.errors);if(d){const u=await Z({url:o,params:t.params,branch:c.slice(0,d.idx).concat(d.node),status:r.status??500,error:r.error,route:i});t=u.state,T.$set(u.props),le().then(Le)}}else if(r.type==="redirect")ge(r.location,{invalidateAll:!0},[]);else{const o={form:r.data,page:{...G,form:r.data,status:r.status}};T.$set(o),r.type==="success"&&le().then(Le)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var i;let c=!1;if(!v){const d={from:{params:t.params,route:{id:((i=t.route)==null?void 0:i.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};m.before_navigate.forEach(u=>u(d))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(P);try{sessionStorage[et]=JSON.stringify(te)}catch{}}}),(r=navigator.connection)!=null&&r.saveData||tt(),n.addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const c=He(o.composedPath()[0],n);if(!c)return;const{url:i,external:d,has:u}=Ee(c,e),p=ce(c);if(!i||!(c instanceof SVGAElement)&&i.protocol!==location.protocol&&!(i.protocol==="https:"||i.protocol==="http:")||u.download)return;if(d||p.reload){Be({url:i,type:"link"})||o.preventDefault(),v=!0;return}const[b,g]=i.href.split("#");if(g!==void 0&&b===location.href.split("#")[0]){R=!0,Re(P),t.url=i,J.page.set({...G,url:i}),J.page.notify();return}se({url:i,scroll:p.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:i.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),n.addEventListener("submit",o=>{if(o.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(o.target),i=o.submitter;if(((i==null?void 0:i.formMethod)||c.method)!=="get")return;const u=new URL((i==null?void 0:i.hasAttribute("formaction"))&&(i==null?void 0:i.formAction)||c.action);if(We(u,e))return;const p=o.target,{noscroll:w,reload:b}=ce(p);if(b)return;o.preventDefault(),o.stopPropagation();const g=new FormData(p),k=i==null?void 0:i.getAttribute("name");k&&g.append(k,(i==null?void 0:i.getAttribute("value"))??""),u.search=new URLSearchParams(g).toString(),se({url:u,scroll:w?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",o=>{var c;if((c=o.state)!=null&&c[q]){if(o.state[q]===P)return;const i=o.state[q]-P;se({url:new URL(location.href),scroll:te[o.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=o.state[q]},blocked:()=>{history.go(-i)},type:"popstate",delta:i})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[q]:++P},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&J.navigating.set(null)})},_hydrate:async({status:r=200,error:o,node_ids:c,params:i,route:d,data:u,form:p})=>{f=!0;const w=new URL(location.href);({params:i={},route:d={id:null}}=oe(w,!1)||{});let b;try{const g=c.map(async(k,L)=>{const D=u[L];return ye({loader:me[k],url:w,params:i,route:d,parent:async()=>{const O={};for(let E=0;E<L;E+=1)Object.assign(O,(await g[E]).data);return O},server_data_node:we(D)})});b=await Z({url:w,params:i,branch:await Promise.all(g),status:r,error:o,form:p,route:Se.find(({id:k})=>k===d.id)??null})}catch(g){if(g instanceof Qe){await ie(new URL(g.location,location.href));return}b=await re({status:g instanceof Ie?g.status:500,error:await x(g,{url:w,params:i,route:d}),url:w,route:d})}Ve(b)}}}async function xe(a,e){var m;const n=new URL(a);n.pathname=St(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const l=await he(n.href),s=await l.json();if(!l.ok)throw new Error(s);return(m=s.nodes)==null||m.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=Zt(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function x(a,e){return a instanceof Ie?a.body:Gt.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function Le(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var l;(l=getSelection())==null||l.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function nn({env:a,hydrate:e,paths:n,target:l,version:s}){ht(n),_t(s);const m=Qt({target:l,base:n.base});mt({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{nn as start};
