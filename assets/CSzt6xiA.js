import{g as Q,a0 as N,a1 as J,a2 as d,a3 as O,a4 as F,K as Re,a5 as ct,a6 as it,h as mt,a7 as ft,a8 as _t,a9 as Ie,aa as gt,ab as bt,ac as C,ad as S,ae as dt,af as I,ag as p,ah as se,ai as Y,aj as h,f as V,ak as oe,m as ue,F as ke,al as vt,am as Et,k as Z,an as G,ao as j,l as Tt,ap as Ot,aq as Lt,ar as ce,as as ie,at as Ft,au as Nt,av as Rt,aw as me,ax as fe,ay as _e,az as ge,aA as be,aB as de,aC as ve,aD as It,aE as kt,aF as ye,aG as yt,aH as St,aI as pt,b as Ct,aJ as Dt,aK as Ee,aL as Pt,aM as Mt}from"./CN4KR4ze.js";/*!
  * vue-i18n v10.0.5
  * (c) 2024 kazuya kawaguchi
  * Released under the MIT License.
  */const At="10.0.5";function ht(){typeof __INTLIFY_PROD_DEVTOOLS__!="boolean"&&(Ie().__INTLIFY_PROD_DEVTOOLS__=!1)}const M={UNEXPECTED_RETURN_TYPE:gt,INVALID_ARGUMENT:25,MUST_BE_CALL_SETUP_TOP:26,NOT_INSTALLED:27,REQUIRED_VALUE:28,INVALID_VALUE:29,CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN:30,NOT_INSTALLED_WITH_PROVIDE:31,UNEXPECTED_ERROR:32,NOT_COMPATIBLE_LEGACY_VUE_I18N:33,NOT_AVAILABLE_COMPOSITION_IN_LEGACY:34};function U(e,...a){return bt(e,null,void 0)}const X=C("__translateVNode"),q=C("__datetimeParts"),z=C("__numberParts"),Vt=C("__setPluralRules"),Ut=C("__injectWithOption"),$=C("__dispose");function x(e){if(!F(e))return e;for(const a in e)if(j(e,a))if(!a.includes("."))F(e[a])&&x(e[a]);else{const u=a.split("."),l=u.length-1;let o=e,m=!1;for(let r=0;r<l;r++){if(u[r]in o||(o[u[r]]=O()),!F(o[u[r]])){m=!0;break}o=o[u[r]]}m||(o[u[l]]=e[a],delete e[a]),F(o[u[l]])&&x(o[u[l]])}return e}function Se(e,a){const{messages:u,__i18n:l,messageResolver:o,flatJson:m}=a,r=p(u)?u:I(l)?O():{[e]:O()};if(I(l)&&l.forEach(s=>{if("locale"in s&&"resource"in s){const{locale:i,resource:_}=s;i?(r[i]=r[i]||O(),G(_,r[i])):G(_,r)}else d(s)&&G(JSON.parse(s),r)}),o==null&&m)for(const s in r)j(r,s)&&x(r[s]);return r}function pe(e){return e.type}function xt(e,a,u){let l=F(a.messages)?a.messages:O();"__i18nGlobal"in u&&(l=Se(e.locale.value,{messages:l,__i18n:u.__i18nGlobal}));const o=Object.keys(l);o.length&&o.forEach(m=>{e.mergeLocaleMessage(m,l[m])});{if(F(a.datetimeFormats)){const m=Object.keys(a.datetimeFormats);m.length&&m.forEach(r=>{e.mergeDateTimeFormat(r,a.datetimeFormats[r])})}if(F(a.numberFormats)){const m=Object.keys(a.numberFormats);m.length&&m.forEach(r=>{e.mergeNumberFormat(r,a.numberFormats[r])})}}}function Te(e){return Ct(Dt,null,e,0)}const Oe="__INTLIFY_META__",Le=()=>[],Wt=()=>!1;let Fe=0;function Ne(e){return(a,u,l,o)=>e(u,l,Z()||void 0,o)}const wt=()=>{const e=Z();let a=null;return e&&(a=pe(e)[Oe])?{[Oe]:a}:null};function Ht(e={}){const{__root:a,__injectWithOption:u}=e,l=a===void 0,o=e.flatJson,m=oe?Tt:Ot;let r=S(e.inheritLocale)?e.inheritLocale:!0;const s=m(a&&r?a.locale.value:d(e.locale)?e.locale:dt),i=m(a&&r?a.fallbackLocale.value:d(e.fallbackLocale)||I(e.fallbackLocale)||p(e.fallbackLocale)||e.fallbackLocale===!1?e.fallbackLocale:s.value),_=m(Se(s.value,e)),v=m(p(e.datetimeFormats)?e.datetimeFormats:{[s.value]:{}}),E=m(p(e.numberFormats)?e.numberFormats:{[s.value]:{}});let T=a?a.missingWarn:S(e.missingWarn)||se(e.missingWarn)?e.missingWarn:!0,L=a?a.fallbackWarn:S(e.fallbackWarn)||se(e.fallbackWarn)?e.fallbackWarn:!0,D=a?a.fallbackRoot:S(e.fallbackRoot)?e.fallbackRoot:!0,R=!!e.fallbackFormat,ae=Y(e.missing)?e.missing:null,W=Y(e.missing)?Ne(e.missing):null,A=Y(e.postTranslation)?e.postTranslation:null,B=a?a.warnHtmlMessage:S(e.warnHtmlMessage)?e.warnHtmlMessage:!0,K=!!e.escapeParameter;const ne=a?a.modifiers:p(e.modifiers)?e.modifiers:{};let w=e.pluralRules||a&&a.pluralRules,c;c=(()=>{l&&Ee(null);const t={version:At,locale:s.value,fallbackLocale:i.value,messages:_.value,modifiers:ne,pluralRules:w,missing:W===null?void 0:W,missingWarn:T,fallbackWarn:L,fallbackFormat:R,unresolving:!0,postTranslation:A===null?void 0:A,warnHtmlMessage:B,escapeParameter:K,messageResolver:e.messageResolver,messageCompiler:e.messageCompiler,__meta:{framework:"vue"}};t.datetimeFormats=v.value,t.numberFormats=E.value,t.__datetimeFormatters=p(c)?c.__datetimeFormatters:void 0,t.__numberFormatters=p(c)?c.__numberFormatters:void 0;const n=Lt(t);return l&&Ee(n),n})(),h(c,s.value,i.value);function Pe(){return[s.value,i.value,_.value,v.value,E.value]}const Me=V({get:()=>s.value,set:t=>{s.value=t,c.locale=s.value}}),Ae=V({get:()=>i.value,set:t=>{i.value=t,c.fallbackLocale=i.value,h(c,s.value,t)}}),he=V(()=>_.value),Ve=V(()=>v.value),Ue=V(()=>E.value);function xe(){return Y(A)?A:null}function We(t){A=t,c.postTranslation=t}function we(){return ae}function He(t){t!==null&&(W=Ne(t)),ae=t,c.missing=W}const k=(t,n,f,g,y,H)=>{Pe();let P;try{__INTLIFY_PROD_DEVTOOLS__&&Ft(wt()),l||(c.fallbackContext=a?Nt():void 0),P=t(c)}finally{__INTLIFY_PROD_DEVTOOLS__,l||(c.fallbackContext=void 0)}if(f!=="translate exists"&&J(P)&&P===Rt||f==="translate exists"&&!P){const[ut,Zt]=n();return a&&D?g(a):y(ut)}else{if(H(P))return P;throw U(M.UNEXPECTED_RETURN_TYPE)}};function le(...t){return k(n=>Reflect.apply(fe,null,[n,...t]),()=>me(...t),"translate",n=>Reflect.apply(n.t,n,[...t]),n=>n,n=>d(n))}function Ye(...t){const[n,f,g]=t;if(g&&!F(g))throw U(M.INVALID_ARGUMENT);return le(n,f,N({resolvedMessage:!0},g||{}))}function Ge(...t){return k(n=>Reflect.apply(be,null,[n,...t]),()=>ge(...t),"datetime format",n=>Reflect.apply(n.d,n,[...t]),()=>_e,n=>d(n))}function je(...t){return k(n=>Reflect.apply(ve,null,[n,...t]),()=>de(...t),"number format",n=>Reflect.apply(n.n,n,[...t]),()=>_e,n=>d(n))}function Be(t){return t.map(n=>d(n)||J(n)||S(n)?Te(String(n)):n)}const Ke={normalize:Be,interpolate:t=>t,type:"vnode"};function Je(...t){return k(n=>{let f;const g=n;try{g.processor=Ke,f=Reflect.apply(fe,null,[g,...t])}finally{g.processor=null}return f},()=>me(...t),"translate",n=>n[X](...t),n=>[Te(n)],n=>I(n))}function Xe(...t){return k(n=>Reflect.apply(ve,null,[n,...t]),()=>de(...t),"number format",n=>n[z](...t),Le,n=>d(n)||I(n))}function qe(...t){return k(n=>Reflect.apply(be,null,[n,...t]),()=>ge(...t),"datetime format",n=>n[q](...t),Le,n=>d(n)||I(n))}function ze(t){w=t,c.pluralRules=w}function $e(t,n){return k(()=>{if(!t)return!1;const f=d(n)?n:s.value,g=re(f),y=c.messageResolver(g,t);return It(y)||kt(y)||d(y)},()=>[t],"translate exists",f=>Reflect.apply(f.te,f,[t,n]),Wt,f=>S(f))}function Qe(t){let n=null;const f=ye(c,i.value,s.value);for(let g=0;g<f.length;g++){const y=_.value[f[g]]||{},H=c.messageResolver(y,t);if(H!=null){n=H;break}}return n}function Ze(t){const n=Qe(t);return n??(a?a.tm(t)||{}:{})}function re(t){return _.value[t]||{}}function et(t,n){if(o){const f={[t]:n};for(const g in f)j(f,g)&&x(f[g]);n=f[t]}_.value[t]=n,c.messages=_.value}function tt(t,n){_.value[t]=_.value[t]||{};const f={[t]:n};if(o)for(const g in f)j(f,g)&&x(f[g]);n=f[t],G(n,_.value[t]),c.messages=_.value}function at(t){return v.value[t]||{}}function nt(t,n){v.value[t]=n,c.datetimeFormats=v.value,ce(c,t,n)}function lt(t,n){v.value[t]=N(v.value[t]||{},n),c.datetimeFormats=v.value,ce(c,t,n)}function rt(t){return E.value[t]||{}}function st(t,n){E.value[t]=n,c.numberFormats=E.value,ie(c,t,n)}function ot(t,n){E.value[t]=N(E.value[t]||{},n),c.numberFormats=E.value,ie(c,t,n)}Fe++,a&&oe&&(ue(a.locale,t=>{r&&(s.value=t,c.locale=t,h(c,s.value,i.value))}),ue(a.fallbackLocale,t=>{r&&(i.value=t,c.fallbackLocale=t,h(c,s.value,i.value))}));const b={id:Fe,locale:Me,fallbackLocale:Ae,get inheritLocale(){return r},set inheritLocale(t){r=t,t&&a&&(s.value=a.locale.value,i.value=a.fallbackLocale.value,h(c,s.value,i.value))},get availableLocales(){return Object.keys(_.value).sort()},messages:he,get modifiers(){return ne},get pluralRules(){return w||{}},get isGlobal(){return l},get missingWarn(){return T},set missingWarn(t){T=t,c.missingWarn=T},get fallbackWarn(){return L},set fallbackWarn(t){L=t,c.fallbackWarn=L},get fallbackRoot(){return D},set fallbackRoot(t){D=t},get fallbackFormat(){return R},set fallbackFormat(t){R=t,c.fallbackFormat=R},get warnHtmlMessage(){return B},set warnHtmlMessage(t){B=t,c.warnHtmlMessage=t},get escapeParameter(){return K},set escapeParameter(t){K=t,c.escapeParameter=t},t:le,getLocaleMessage:re,setLocaleMessage:et,mergeLocaleMessage:tt,getPostTranslationHandler:xe,setPostTranslationHandler:We,getMissingHandler:we,setMissingHandler:He,[Vt]:ze};return b.datetimeFormats=Ve,b.numberFormats=Ue,b.rt=Ye,b.te=$e,b.tm=Ze,b.d=Ge,b.n=je,b.getDateTimeFormat=at,b.setDateTimeFormat=nt,b.mergeDateTimeFormat=lt,b.getNumberFormat=rt,b.setNumberFormat=st,b.mergeNumberFormat=ot,b[Ut]=u,b[X]=Je,b[q]=qe,b[z]=Xe,b}const ee={tag:{type:[String,Object]},locale:{type:String},scope:{type:String,validator:e=>e==="parent"||e==="global",default:"parent"},i18n:{type:Object}};function Yt({slots:e},a){return a.length===1&&a[0]==="default"?(e.default?e.default():[]).reduce((l,o)=>[...l,...o.type===ke?o.children:[o]],[]):a.reduce((u,l)=>{const o=e[l];return o&&(u[l]=o()),u},O())}function Ce(){return ke}N({keypath:{type:String,required:!0},plural:{type:[Number,String],validator:e=>J(e)||!isNaN(e)}},ee);function Gt(e){return I(e)&&!d(e[0])}function De(e,a,u,l){const{slots:o,attrs:m}=a;return()=>{const r={part:!0};let s=O();e.locale&&(r.locale=e.locale),d(e.format)?r.key=e.format:F(e.format)&&(d(e.format.key)&&(r.key=e.format.key),s=Object.keys(e.format).reduce((T,L)=>u.includes(L)?N(O(),T,{[L]:e.format[L]}):T,O()));const i=l(e.value,r,s);let _=[r.key];I(i)?_=i.map((T,L)=>{const D=o[T.type],R=D?D({[T.type]:T.value,index:L,parts:i}):[T.value];return Gt(R)&&(R[0].key=`${T.type}-${L}`),R}):d(i)&&(_=[i]);const v=N(O(),m),E=d(e.tag)||F(e.tag)?e.tag:Ce();return Re(E,v,_)}}N({value:{type:Number,required:!0},format:{type:[String,Object]}},ee);N({value:{type:[Number,Date],required:!0},format:{type:[String,Object]}},ee);const jt=C("global-vue-i18n");function te(e={}){const a=Z();if(a==null)throw U(M.MUST_BE_CALL_SETUP_TOP);if(!a.isCE&&a.appContext.app!=null&&!a.appContext.app.__VUE_I18N_SYMBOL__)throw U(M.NOT_INSTALLED);const u=Bt(a),l=Jt(u),o=pe(a),m=Kt(e,o);if(m==="global")return xt(l,e,o),l;if(m==="parent"){let i=Xt(u,a,e.__useComponent);return i==null&&(i=l),i}const r=u;let s=r.__getInstance(a);if(s==null){const i=N({},e);"__i18n"in o&&(i.__i18n=o.__i18n),l&&(i.__root=l),s=Ht(i),r.__composerExtend&&(s[$]=r.__composerExtend(s)),zt(r,a,s),r.__setInstance(a,s)}return s}function Bt(e){const a=ct(e.isCE?jt:e.appContext.app.__VUE_I18N_SYMBOL__);if(!a)throw U(e.isCE?M.NOT_INSTALLED_WITH_PROVIDE:M.UNEXPECTED_ERROR);return a}function Kt(e,a){return it(e)?"__i18n"in a?"local":"global":e.useScope?e.useScope:"local"}function Jt(e){return e.mode==="composition"?e.global:e.global.__composer}function Xt(e,a,u=!1){let l=null;const o=a.root;let m=qt(a,u);for(;m!=null;){const r=e;if(e.mode==="composition"&&(l=r.__getInstance(m)),l!=null||o===m)break;m=m.parent}return l}function qt(e,a=!1){return e==null?null:a&&e.vnode.ctx||e.parent}function zt(e,a,u){mt(()=>{},a),ft(()=>{const l=u;e.__deleteInstance(a);const o=l[$];o&&(o(),delete l[$])},a)}ht();yt(Pt);St(Mt);pt(ye);if(__INTLIFY_PROD_DEVTOOLS__){const e=Ie();e.__INTLIFY__=!0,_t(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)}export{te as u};