import{i as xe,t as oe}from"../chunks/experience.1ac3d399.js";import{s as ke,a as y,f as w,c as T,g as E,h as D,d as _,j as C,i as P,K as $,I as de,n as he,l as N,m as U,p as H,M as ce}from"../chunks/scheduler.7a274a43.js";import{S as we,i as Ee,b as M,d as S,m as j,t as k,c as Y,a as x,e as B,g as Z}from"../chunks/index.28409b7f.js";import{g as ee,U as re,e as X}from"../chunks/UIcon.818a3600.js";import{b as fe}from"../chunks/paths.682ad81b.js";import{a as ue,M as Ce}from"../chunks/app.49854a0e.js";import{C as De}from"../chunks/CardLogo.ffd18bf4.js";import{B as Ie,M as Ve}from"../chunks/Banner.e0b2f90a.js";import{T as ye}from"../chunks/TabTitle.7e78d6c0.js";import{C as ge}from"../chunks/Chip.2121a9fa.js";import{C as Te}from"../chunks/CardDivider.09b854d8.js";function Pe({params:o}){if(o.slug)return{experience:xe.find(l=>l.slug===o.slug)}}const Ze=Object.freeze(Object.defineProperty({__proto__:null,load:Pe},Symbol.toStringTag,{value:"Module"}));function pe(o,e,l){const t=o.slice();return t[2]=e[l],t}function me(o,e,l){const t=o.slice();return t[2]=e[l],t}function Me(o){let e,l,t,n,r,f,s,a;l=new Ie({props:{img:ee(o[0].experience.logo),$$slots:{default:[Ne]},$$scope:{ctx:o}}});const m=[ze,Ue],i=[];function b(d,v){return d[0].experience.description?0:1}return f=b(o),s=i[f]=m[f](o),{c(){e=w("div"),M(l.$$.fragment),t=y(),n=w("div"),r=w("div"),s.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var v=D(e);S(l.$$.fragment,v),t=T(v),n=E(v,"DIV",{class:!0});var A=D(n);r=E(A,"DIV",{class:!0});var V=D(r);s.l(V),V.forEach(_),A.forEach(_),v.forEach(_),this.h()},h(){C(r,"class","px-10px m-y-5"),C(n,"class","pt-3 pb-1 overflow-x-hidden w-full"),C(e,"class","flex flex-col items-center overflow-x-hidden")},m(d,v){P(d,e,v),j(l,e,null),$(e,t),$(e,n),$(n,r),i[f].m(r,null),a=!0},p(d,v){const A={};v&1&&(A.img=ee(d[0].experience.logo)),v&129&&(A.$$scope={dirty:v,ctx:d}),l.$set(A);let V=f;f=b(d),f===V?i[f].p(d,v):(Z(),k(i[V],1,1,()=>{i[V]=null}),Y(),s=i[f],s?s.p(d,v):(s=i[f]=m[f](d),s.c()),x(s,1),s.m(r,null))},i(d){a||(x(l.$$.fragment,d),x(s),a=!0)},o(d){k(l.$$.fragment,d),k(s),a=!1},d(d){d&&_(e),B(l),i[f].d()}}}function Se(o){let e,l,t,n,r="Could not load experience data...",f;return l=new re({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),M(l.$$.fragment),t=y(),n=w("p"),n.textContent=r,this.h()},l(s){e=E(s,"DIV",{class:!0});var a=D(e);S(l.$$.fragment,a),t=T(a),n=E(a,"P",{class:!0,["data-svelte-h"]:!0}),de(n)!=="svelte-1o82fhi"&&(n.textContent=r),a.forEach(_),this.h()},h(){C(n,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(s,a){P(s,e,a),j(l,e,null),$(e,t),$(e,n),f=!0},p:he,i(s){f||(x(l.$$.fragment,s),f=!0)},o(s){k(l.$$.fragment,s),f=!1},d(s){s&&_(e),B(l)}}}function je(o){let e=o[0].experience.name+"",l;return{c(){l=N(e)},l(t){l=U(t,e)},m(t,n){P(t,l,n)},p(t,n){n&1&&e!==(e=t[0].experience.name+"")&&H(l,e)},d(t){t&&_(l)}}}function Be(o){let e,l,t,n,r=o[2].label+"",f,s,a;return l=new re({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),M(l.$$.fragment),t=y(),n=w("span"),f=N(r),s=y(),this.h()},l(m){e=E(m,"DIV",{class:!0});var i=D(e);S(l.$$.fragment,i),t=T(i),n=E(i,"SPAN",{});var b=D(n);f=U(b,r),b.forEach(_),i.forEach(_),s=T(m),this.h()},h(){C(e,"class","row-center gap-2")},m(m,i){P(m,e,i),j(l,e,null),$(e,t),$(e,n),$(n,f),P(m,s,i),a=!0},p(m,i){(!a||i&1)&&r!==(r=m[2].label+"")&&H(f,r)},i(m){a||(x(l.$$.fragment,m),a=!0)},o(m){k(l.$$.fragment,m),a=!1},d(m){m&&(_(e),_(s)),B(l)}}}function $e(o){let e,l;return e=new ge({props:{href:o[2].to,$$slots:{default:[Be]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,n){j(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.href=t[2].to),n&129&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Ae(o){let e,l,t,n=o[2].name+"",r,f,s;return e=new De({props:{src:ee(o[2].logo),alt:o[2].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){M(e.$$.fragment),l=y(),t=w("span"),r=N(n),f=y(),this.h()},l(a){S(e.$$.fragment,a),l=T(a),t=E(a,"SPAN",{class:!0});var m=D(t);r=U(m,n),m.forEach(_),f=T(a),this.h()},h(){C(t,"class","text-[0.9em]")},m(a,m){j(e,a,m),P(a,l,m),P(a,t,m),$(t,r),P(a,f,m),s=!0},p(a,m){const i={};m&1&&(i.src=ee(a[2].logo)),m&1&&(i.alt=a[2].name),e.$set(i),(!s||m&1)&&n!==(n=a[2].name+"")&&H(r,n)},i(a){s||(x(e.$$.fragment,a),s=!0)},o(a){k(e.$$.fragment,a),s=!1},d(a){a&&(_(l),_(t),_(f)),B(e,a)}}}function _e(o){let e,l;return e=new ge({props:{classes:"inline-flex flex-row items-center justify-center",href:`${fe}/skills/${o[2].slug}`,$$slots:{default:[Ae]},$$scope:{ctx:o}}}),{c(){M(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,n){j(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.href=`${fe}/skills/${t[2].slug}`),n&129&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Ne(o){let e,l,t,n,r,f=o[0].experience.company+"",s,a,m=o[0].experience.location+"",i,b,d=o[0].experience.type+"",v,A,V,Q=ue(o[0].experience.period.from,o[0].experience.period.to)+"",W,te,J,O,le,q,ne,K,z;t=new Ce({props:{$$slots:{default:[je]},$$scope:{ctx:o}}}),O=new Te({});let R=X(o[0].experience.links),h=[];for(let c=0;c<R.length;c+=1)h[c]=$e(me(o,R,c));const ve=c=>k(h[c],1,1,()=>{h[c]=null});let F=X(o[0].experience.skills),g=[];for(let c=0;c<F.length;c+=1)g[c]=_e(pe(o,F,c));const be=c=>k(g[c],1,1,()=>{g[c]=null});return{c(){e=w("div"),l=w("div"),M(t.$$.fragment),n=y(),r=w("p"),s=N(f),a=N(" · "),i=N(m),b=N(" · "),v=N(d),A=y(),V=w("p"),W=N(Q),te=y(),J=w("div"),M(O.$$.fragment),le=y(),q=w("div");for(let c=0;c<h.length;c+=1)h[c].c();ne=y(),K=w("div");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var u=D(e);l=E(u,"DIV",{class:!0});var I=D(l);S(t.$$.fragment,I),I.forEach(_),n=T(u),r=E(u,"P",{class:!0});var p=D(r);s=U(p,f),a=U(p," · "),i=U(p,m),b=U(p," · "),v=U(p,d),p.forEach(_),A=T(u),V=E(u,"P",{class:!0});var L=D(V);W=U(L,Q),L.forEach(_),te=T(u),J=E(u,"DIV",{class:!0});var ae=D(J);S(O.$$.fragment,ae),ae.forEach(_),le=T(u),q=E(u,"DIV",{class:!0});var se=D(q);for(let G=0;G<h.length;G+=1)h[G].l(se);se.forEach(_),ne=T(u),K=E(u,"DIV",{class:!0});var ie=D(K);for(let G=0;G<g.length;G+=1)g[G].l(ie);ie.forEach(_),u.forEach(_),this.h()},h(){C(l,"class","text-0.9em"),C(r,"class","font-300 text-[var(--tertiary-text)] m-y-2 text-center"),C(V,"class","font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center"),C(J,"class","w-75%"),C(q,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),C(K,"class","row-center flex-wrap m-b-2"),C(e,"class","col-center p-y-20")},m(c,u){P(c,e,u),$(e,l),j(t,l,null),$(e,n),$(e,r),$(r,s),$(r,a),$(r,i),$(r,b),$(r,v),$(e,A),$(e,V),$(V,W),$(e,te),$(e,J),j(O,J,null),$(e,le),$(e,q);for(let I=0;I<h.length;I+=1)h[I]&&h[I].m(q,null);$(e,ne),$(e,K);for(let I=0;I<g.length;I+=1)g[I]&&g[I].m(K,null);z=!0},p(c,u){const I={};if(u&129&&(I.$$scope={dirty:u,ctx:c}),t.$set(I),(!z||u&1)&&f!==(f=c[0].experience.company+"")&&H(s,f),(!z||u&1)&&m!==(m=c[0].experience.location+"")&&H(i,m),(!z||u&1)&&d!==(d=c[0].experience.type+"")&&H(v,d),(!z||u&1)&&Q!==(Q=ue(c[0].experience.period.from,c[0].experience.period.to)+"")&&H(W,Q),u&1){R=X(c[0].experience.links);let p;for(p=0;p<R.length;p+=1){const L=me(c,R,p);h[p]?(h[p].p(L,u),x(h[p],1)):(h[p]=$e(L),h[p].c(),x(h[p],1),h[p].m(q,null))}for(Z(),p=R.length;p<h.length;p+=1)ve(p);Y()}if(u&1){F=X(c[0].experience.skills);let p;for(p=0;p<F.length;p+=1){const L=pe(c,F,p);g[p]?(g[p].p(L,u),x(g[p],1)):(g[p]=_e(L),g[p].c(),x(g[p],1),g[p].m(K,null))}for(Z(),p=F.length;p<g.length;p+=1)be(p);Y()}},i(c){if(!z){x(t.$$.fragment,c),x(O.$$.fragment,c);for(let u=0;u<R.length;u+=1)x(h[u]);for(let u=0;u<F.length;u+=1)x(g[u]);z=!0}},o(c){k(t.$$.fragment,c),k(O.$$.fragment,c),h=h.filter(Boolean);for(let u=0;u<h.length;u+=1)k(h[u]);g=g.filter(Boolean);for(let u=0;u<g.length;u+=1)k(g[u]);z=!1},d(c){c&&_(e),B(t),B(O),ce(h,c),ce(g,c)}}}function Ue(o){let e,l,t,n,r="No description...",f;return l=new re({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),M(l.$$.fragment),t=y(),n=w("p"),n.textContent=r,this.h()},l(s){e=E(s,"DIV",{class:!0});var a=D(e);S(l.$$.fragment,a),t=T(a),n=E(a,"P",{class:!0,["data-svelte-h"]:!0}),de(n)!=="svelte-kl0ixf"&&(n.textContent=r),a.forEach(_),this.h()},h(){C(n,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,a){P(s,e,a),j(l,e,null),$(e,t),$(e,n),f=!0},p:he,i(s){f||(x(l.$$.fragment,s),f=!0)},o(s){k(l.$$.fragment,s),f=!1},d(s){s&&_(e),B(l)}}}function ze(o){let e,l;return e=new Ve({props:{content:o[0].experience.description??"This place is yet to be filled..."}}),{c(){M(e.$$.fragment)},l(t){S(e.$$.fragment,t)},m(t,n){j(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.content=t[0].experience.description??"This place is yet to be filled..."),e.$set(r)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Le(o){let e,l,t,n,r,f;e=new ye({props:{title:o[1]}});const s=[Se,Me],a=[];function m(i,b){return i[0].experience===void 0?0:1}return n=m(o),r=a[n]=s[n](o),{c(){M(e.$$.fragment),l=y(),t=w("div"),r.c(),this.h()},l(i){S(e.$$.fragment,i),l=T(i),t=E(i,"DIV",{class:!0});var b=D(t);r.l(b),b.forEach(_),this.h()},h(){C(t,"class","pb-10 overflow-x-hidden col flex-1")},m(i,b){j(e,i,b),P(i,l,b),P(i,t,b),a[n].m(t,null),f=!0},p(i,[b]){const d={};b&2&&(d.title=i[1]),e.$set(d);let v=n;n=m(i),n===v?a[n].p(i,b):(Z(),k(a[v],1,1,()=>{a[v]=null}),Y(),r=a[n],r?r.p(i,b):(r=a[n]=s[n](i),r.c()),x(r,1),r.m(t,null))},i(i){f||(x(e.$$.fragment,i),x(r),f=!0)},o(i){k(e.$$.fragment,i),k(r),f=!1},d(i){i&&(_(l),_(t)),B(e,i),a[n].d()}}}function Oe(o,e,l){let t,{data:n}=e;return o.$$set=r=>{"data"in r&&l(0,n=r.data)},o.$$.update=()=>{o.$$.dirty&1&&l(1,t=n.experience?`${n.experience.name} - ${oe}`:oe)},[n,t]}class et extends we{constructor(e){super(),Ee(this,e,Oe,Le,ke,{data:0})}}export{et as component,Ze as universal};
