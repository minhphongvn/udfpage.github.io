import{A as R,f as j,r as q,B as S,g as B,C as E,D as T,E as U,F as I,G as A,H as w,I as F,J as D,k as x,K as O,L,M as V,N as H,O as z,P as M,Q as G}from"./yQ2QP6_A.js";async function N(t,r=R()){const{path:f,matched:y}=r.resolve(t);if(!y.length||(r._routePreloaded||(r._routePreloaded=new Set),r._routePreloaded.has(f)))return;const e=r._preloadPromises=r._preloadPromises||[];if(e.length>4)return Promise.all(e).then(()=>N(t,r));r._routePreloaded.add(f);const a=y.map(s=>{var n;return(n=s.components)==null?void 0:n.default}).filter(s=>typeof s=="function");for(const s of a){const n=Promise.resolve(s()).catch(()=>{}).finally(()=>e.splice(e.indexOf(n)));e.push(n)}await Promise.all(e)}const Q=(...t)=>t.find(r=>r!==void 0);function $(t){const r=t.componentName||"NuxtLink";function f(e,a){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return k(e,t.trailingSlash);const s="path"in e&&e.path!==void 0?e.path:a(e).path;return{...e,name:void 0,path:k(s,t.trailingSlash)}}function y(e){const a=R(),s=z(),n=x(()=>!!e.target&&e.target!=="_self"),v=x(()=>{const d=e.to||e.href||"";return typeof d=="string"&&O(d,{acceptRelative:!0})}),b=w("RouterLink"),g=b&&typeof b!="string"?b.useLink:void 0,m=x(()=>{if(e.external)return!0;const d=e.to||e.href||"";return typeof d=="object"?!1:d===""||v.value}),u=x(()=>{const d=e.to||e.href||"";return m.value?d:f(d,a.resolve)}),c=m.value||g==null?void 0:g({...e,to:u}),p=x(()=>{var d;if(!u.value||v.value)return u.value;if(m.value){const P=typeof u.value=="object"&&"path"in u.value?L(u.value):u.value,C=typeof P=="object"?a.resolve(P).href:P;return f(C,a.resolve)}return typeof u.value=="object"?((d=a.resolve(u.value))==null?void 0:d.href)??null:f(V(s.app.baseURL,u.value),a.resolve)});return{to:u,hasTarget:n,isAbsoluteUrl:v,isExternal:m,href:p,isActive:(c==null?void 0:c.isActive)??x(()=>u.value===a.currentRoute.value.path),isExactActive:(c==null?void 0:c.isExactActive)??x(()=>u.value===a.currentRoute.value.path),route:(c==null?void 0:c.route)??x(()=>a.resolve(u.value)),async navigate(){await H(p.value,{replace:e.replace,external:m.value||n.value})}}}return j({name:r,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},prefetchOn:{type:[String,Object],default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},useLink:y,setup(e,{slots:a}){const s=R(),{to:n,href:v,navigate:b,isExternal:g,hasTarget:m,isAbsoluteUrl:u}=y(e),c=q(!1),p=q(null),d=l=>{var o;p.value=e.custom?(o=l==null?void 0:l.$el)==null?void 0:o.nextElementSibling:l==null?void 0:l.$el};function P(l){var o,i;return!c.value&&(typeof e.prefetchOn=="string"?e.prefetchOn===l:((o=e.prefetchOn)==null?void 0:o[l])??((i=t.prefetchOn)==null?void 0:i[l]))&&(e.prefetch??t.prefetch)!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!W()}async function C(l=S()){if(c.value)return;c.value=!0;const o=typeof n.value=="string"?n.value:g.value?L(n.value):s.resolve(n.value).fullPath,i=g.value?new URL(o,window.location.href).href:o;await Promise.all([l.hooks.callHook("link:prefetch",i).catch(()=>{}),!g.value&&!m.value&&N(n.value,s).catch(()=>{})])}if(P("visibility")){const l=S();let o,i=null;B(()=>{const h=J();E(()=>{o=T(()=>{var _;(_=p==null?void 0:p.value)!=null&&_.tagName&&(i=h.observe(p.value,async()=>{i==null||i(),i=null,await C(l)}))})})}),U(()=>{o&&I(o),i==null||i(),i=null})}return()=>{var i;if(!g.value&&!m.value){const h={ref:d,to:n.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(P("interaction")&&(h.onPointerenter=C.bind(null,void 0),h.onFocus=C.bind(null,void 0)),c.value&&(h.class=e.prefetchedClass||t.prefetchedClass),h.rel=e.rel||void 0),A(w("RouterLink"),h,a.default)}const l=e.target||null,o=Q(e.noRel?"":e.rel,t.externalRelAttribute,u.value||m.value?"noopener noreferrer":"")||null;return e.custom?a.default?a.default({href:v.value,navigate:b,prefetch:C,get route(){if(!v.value)return;const h=new URL(v.value,window.location.href);return{path:h.pathname,fullPath:h.pathname,get query(){return F(h.search)},hash:h.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:v.value}},rel:o,target:l,isExternal:g.value||m.value,isActive:!1,isExactActive:!1}):null:A("a",{ref:p,href:v.value||null,rel:o,target:l},(i=a.default)==null?void 0:i.call(a))}}})}const Y=$(D);function k(t,r){const f=r==="append"?M:G;return O(t)&&!t.startsWith("http")?t:f(t,!0)}function J(){const t=S();if(t._observer)return t._observer;let r=null;const f=new Map,y=(a,s)=>(r||(r=new IntersectionObserver(n=>{for(const v of n){const b=f.get(v.target);(v.isIntersecting||v.intersectionRatio>0)&&b&&b()}})),f.set(a,s),r.observe(a),()=>{f.delete(a),r.unobserve(a),f.size===0&&(r.disconnect(),r=null)});return t._observer={observe:y}}const K=/2g/;function W(){const t=navigator.connection;return!!(t&&(t.saveData||K.test(t.effectiveType)))}export{Y as _};
