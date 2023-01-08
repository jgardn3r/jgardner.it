import{S as Z,i as ee,s as te,k as g,l as v,m as S,h,n as c,b as B,I as le,B as R,J as ie,o as oe,w as N,x as K,y as $,f as Q,t as X,z as Y,a as I,q as A,c as M,r as j,K as ce,G as i}from"../../chunks/index-ecd388f0.js";import{N as fe}from"../../chunks/Navbar-3a68137d.js";import{_ as ue}from"../../chunks/preload-helper-41c905a7.js";function de(m){let r,e,n;return{c(){r=g("div"),this.h()},l(a){r=v(a,"DIV",{style:!0,class:!0}),S(r).forEach(h),this.h()},h(){c(r,"style",m[0]),c(r,"class","m-0")},m(a,d){B(a,r,d),e||(n=le(m[1].call(null,r)),e=!0)},p(a,[d]){d&1&&c(r,"style",a[0])},i:R,o:R,d(a){a&&h(r),e=!1,n()}}}function he(m,r){return r.forEach(([e,n])=>m[e]=n),m}function me(m,r,e){let{target:n=void 0}=r,{sketch:a=void 0}=r,{parentDivStyle:d="display: block;"}=r,{debug:s=!1}=r,f;const p=ie(),E={ref(){p("ref",n)},instance(){p("instance",f)}};function u(t){return e(2,n=t),{destroy(){e(2,n=void 0)}}}return oe(async()=>{const t=await ue(()=>import("../../chunks/p5.min-7dea8225.js").then(o=>o.p),[],import.meta.url),{default:b}=t,y=Object.entries(t).filter(([o,k])=>k instanceof Function&&o[0]!=="_"&&o!=="default");s&&console.log("available p5 native classes",y),f=new b(o=>(o=he(o,y),s&&console.log("p5 instance",o),window._p5Instance=o,a(o)),n),E.ref(),E.instance()}),m.$$set=t=>{"target"in t&&e(2,n=t.target),"sketch"in t&&e(3,a=t.sketch),"parentDivStyle"in t&&e(0,d=t.parentDivStyle),"debug"in t&&e(4,s=t.debug)},[d,u,n,a,s]}class ge extends Z{constructor(r){super(),ee(this,r,me,de,te,{target:2,sketch:3,parentDivStyle:0,debug:4})}}function ve(m){let r,e;return r=new ge({props:{sketch:m[0]}}),{c(){N(r.$$.fragment)},l(n){K(r.$$.fragment,n)},m(n,a){$(r,n,a),e=!0},p:R,i(n){e||(Q(r.$$.fragment,n),e=!0)},o(n){X(r.$$.fragment,n),e=!1},d(n){Y(r,n)}}}function _e(m){return[e=>{let n,a,d,s=[],f,p=[e.color(255,0,0),e.color(255,0,255),e.color(255,0,204),e.color(255,153,51)];e.preload=()=>{d=e.loadStrings("/assets/data/cityHeights.txt")},e.setup=()=>{n=window.innerWidth,a=window.innerHeight;let u=e.createCanvas(n,a);u.position(0,0),u.style("z-index: -1");for(let t in d)s.push(parseFloat(d[t]));f=e.floor(e.random(0,s.length))},e.draw=()=>{e.background(0);let u=300;for(var t=0;t<n;t++){let b=e.abs((t/2+f)%n*4/2-n)/n;e.stroke(255),e.strokeWeight(12),E(t,0,t,a,e.lerpColor(p[0],p[1],b),e.lerpColor(p[3],p[2],b))}for(var t=0;t<n;t++)e.noStroke(),e.fill(0),e.beginShape(),e.vertex(t,s[(t+f)%s.length]+u),e.vertex(t+1,s[(t+1+f)%s.length]+u),e.vertex(t+1,a),e.vertex(t,a),e.endShape(e.CLOSE);f+=1};function E(u,t,b,D,y,o){var k=e.drawingContext.createLinearGradient(u,t,b,D);k.addColorStop(0,y),k.addColorStop(1,o),e.drawingContext.strokeStyle=k,e.line(u,t,b,D),e.drawingContext.strokeStyle=e.color(0,0,0)}e.windowResized=()=>{n=window.innerWidth,a=window.innerHeight,e.resizeCanvas(n,a)}}]}class we extends Z{constructor(r){super(),ee(this,r,_e,ve,te,{})}}function be(m){let r,e,n,a,d,s,f,p,E,u,t,b,D,y,o,k,L,_,O,z,W,q,J,T,U,V,P,F,H,G;return e=new fe({props:{page:"/"}}),a=new we({}),{c(){r=g("header"),N(e.$$.fragment),n=I(),N(a.$$.fragment),d=I(),s=g("div"),f=g("img"),E=I(),u=g("h1"),t=g("u"),b=A("Joshua Gardner"),D=I(),y=g("h3"),o=g("em"),k=A("Integrated Application Development"),L=I(),_=g("p"),O=A(`Swinburne University of Technology
        `),z=g("br"),W=A(`
        Bachelor of Computer Science - Professional
        `),q=g("br"),J=A(`
        Major: Software Design
        `),T=g("br"),U=A(`
        Minor: Applied Mathematics`),V=I(),P=g("a"),F=I(),H=g("a"),this.h()},l(l){r=v(l,"HEADER",{});var x=S(r);K(e.$$.fragment,x),x.forEach(h),n=M(l),K(a.$$.fragment,l),d=M(l),s=v(l,"DIV",{id:!0,class:!0});var w=S(s);f=v(w,"IMG",{src:!0,alt:!0,id:!0,class:!0}),E=M(w),u=v(w,"H1",{class:!0});var re=S(u);t=v(re,"U",{});var ne=S(t);b=j(ne,"Joshua Gardner"),ne.forEach(h),re.forEach(h),D=M(w),y=v(w,"H3",{class:!0});var se=S(y);o=v(se,"EM",{});var ae=S(o);k=j(ae,"Integrated Application Development"),ae.forEach(h),se.forEach(h),L=M(w),_=v(w,"P",{class:!0});var C=S(_);O=j(C,`Swinburne University of Technology
        `),z=v(C,"BR",{}),W=j(C,`
        Bachelor of Computer Science - Professional
        `),q=v(C,"BR",{}),J=j(C,`
        Major: Software Design
        `),T=v(C,"BR",{}),U=j(C,`
        Minor: Applied Mathematics`),C.forEach(h),V=M(w),P=v(w,"A",{href:!0,class:!0,title:!0}),S(P).forEach(h),F=M(w),H=v(w,"A",{href:!0,class:!0,title:!0}),S(H).forEach(h),w.forEach(h),this.h()},h(){ce(f.src,p="/assets/images/dp.png")||c(f,"src",p),c(f,"alt","DP"),c(f,"id","dp"),c(f,"class","svelte-1ee8s0h"),c(u,"class","svelte-1ee8s0h"),c(y,"class","svelte-1ee8s0h"),c(_,"class","svelte-1ee8s0h"),c(P,"href","https://github.com/jgardn3r"),c(P,"class","fa fa-github svelte-1ee8s0h"),c(P,"title","GitHub"),c(H,"href","https://www.linkedin.com/in/joshua-gardner-7441301b1/"),c(H,"class","fa fa-linkedin svelte-1ee8s0h"),c(H,"title","LinkedIn"),c(s,"id","box"),c(s,"class","svelte-1ee8s0h")},m(l,x){B(l,r,x),$(e,r,null),B(l,n,x),$(a,l,x),B(l,d,x),B(l,s,x),i(s,f),i(s,E),i(s,u),i(u,t),i(t,b),i(s,D),i(s,y),i(y,o),i(o,k),i(s,L),i(s,_),i(_,O),i(_,z),i(_,W),i(_,q),i(_,J),i(_,T),i(_,U),i(s,V),i(s,P),i(s,F),i(s,H),G=!0},p:R,i(l){G||(Q(e.$$.fragment,l),Q(a.$$.fragment,l),G=!0)},o(l){X(e.$$.fragment,l),X(a.$$.fragment,l),G=!1},d(l){l&&h(r),Y(e),l&&h(n),Y(a,l),l&&h(d),l&&h(s)}}}class ke extends Z{constructor(r){super(),ee(this,r,null,be,te,{})}}export{ke as default};
