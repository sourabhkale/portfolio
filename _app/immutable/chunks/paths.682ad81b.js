import{n as b,s as p}from"./scheduler.7a274a43.js";const e=[];function g(i,u=b){let n;const o=new Set;function r(t){if(p(i,t)&&(i=t,n)){const c=!e.length;for(const s of o)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(i))}function _(t,c=b){const s=[t,c];return o.add(s),o.size===1&&(n=u(r,f)||b),t(i),()=>{o.delete(s),o.size===0&&n&&(n(),n=null)}}return{set:r,update:f,subscribe:_}}var a;const d=((a=globalThis.__sveltekit_1dnaw0i)==null?void 0:a.base)??"/slick-portfolio-svelte";var l;const w=((l=globalThis.__sveltekit_1dnaw0i)==null?void 0:l.assets)??d;export{w as a,d as b,g as w};
