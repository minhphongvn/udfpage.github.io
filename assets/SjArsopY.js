import{u as P}from"./CfZmjDB1.js";import{f as C,g as B,n as F,h as z,i as D,u as t,j,r as _,k as L,l as W,m as Y,o as k,c as S,a as i,p as l,b as d,w as p,d as b,t as g,q as M,s as U,T as N,v as H,_ as X,x as G,y as Q,z as R}from"./yQ2QP6_A.js";import{_ as J}from"./BvInCy-G.js";import{u as K}from"./BhwP5V57.js";const Z=n=>{const o=Object.create(null);for(const s in n){const r=n[s];r!==void 0&&(o[s]=r)}return o},E=(n,o)=>(s,r)=>(P(()=>n({...Z(s),...r.attrs},r)),()=>{var a,u;return o?(u=(a=r.slots).default)==null?void 0:u.call(a):null}),O={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},tt=C({name:"Title",inheritAttrs:!1,setup:E((n,{slots:o})=>{var s,r,a;return{title:((a=(r=(s=o.default)==null?void 0:s.call(o))==null?void 0:r[0])==null?void 0:a.children)||null}})}),et=C({name:"Head",inheritAttrs:!1,setup:(n,o)=>()=>{var s,r;return(r=(s=o.slots).default)==null?void 0:r.call(s)}}),ot=C({name:"Html",inheritAttrs:!1,props:{...O,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:E(n=>({htmlAttrs:n}),!0)}),nt=C({name:"Body",inheritAttrs:!1,props:{...O,renderPriority:[String,Number]},setup:E(n=>({bodyAttrs:n}),!0)});function V(n){return z()?(D(n),!0):!1}function A(n){return typeof n=="function"?n():t(n)}const rt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const st=Object.prototype.toString,at=n=>st.call(n)==="[object Object]",it=()=>{};function lt(n){return j()}function ct(n,o=!0,s){lt()?B(n,s):o?n():F(n)}const T=rt?window:void 0;function ut(n){var o;const s=A(n);return(o=s==null?void 0:s.$el)!=null?o:s}function $(...n){let o,s,r,a;if(typeof n[0]=="string"||Array.isArray(n[0])?([s,r,a]=n,o=T):[o,s,r,a]=n,!o)return it;Array.isArray(s)||(s=[s]),Array.isArray(r)||(r=[r]);const u=[],m=()=>{u.forEach(y=>y()),u.length=0},e=(y,x,c,f)=>(y.addEventListener(x,c,f),()=>y.removeEventListener(x,c,f)),v=W(()=>[ut(o),A(a)],([y,x])=>{if(m(),!y)return;const c=at(x)?{...x}:x;u.push(...s.flatMap(f=>r.map(w=>e(y,f,w,c))))},{immediate:!0,flush:"post"}),h=()=>{v(),m()};return V(h),h}function dt(){const n=_(!1),o=j();return o&&B(()=>{n.value=!0},o),n}function pt(n){const o=dt();return L(()=>(o.value,!!n()))}function ft(n,o={}){const{window:s=T}=o,r=pt(()=>s&&"matchMedia"in s&&typeof s.matchMedia=="function");let a;const u=_(!1),m=h=>{u.value=h.matches},e=()=>{a&&("removeEventListener"in a?a.removeEventListener("change",m):a.removeListener(m))},v=Y(()=>{r.value&&(e(),a=s.matchMedia(A(n)),"addEventListener"in a?a.addEventListener("change",m):a.addListener(m),u.value=a.matches)});return V(()=>{v(),e(),a=void 0}),u}function gt(n={}){const{window:o=T,behavior:s="auto"}=n;if(!o)return{x:_(0),y:_(0)};const r=_(o.scrollX),a=_(o.scrollY),u=L({get(){return r.value},set(e){scrollTo({left:e,behavior:s})}}),m=L({get(){return a.value},set(e){scrollTo({top:e,behavior:s})}});return $(o,"scroll",()=>{r.value=o.scrollX,a.value=o.scrollY},{capture:!1,passive:!0}),{x:u,y:m}}function mt(n={}){const{window:o=T,initialWidth:s=Number.POSITIVE_INFINITY,initialHeight:r=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:u=!0,type:m="inner"}=n,e=_(s),v=_(r),h=()=>{o&&(m==="outer"?(e.value=o.outerWidth,v.value=o.outerHeight):u?(e.value=o.innerWidth,v.value=o.innerHeight):(e.value=o.document.documentElement.clientWidth,v.value=o.document.documentElement.clientHeight))};if(h(),ct(h),$("resize",h,{passive:!0}),a){const y=ft("(orientation: portrait)");W(y,()=>h())}return{width:e,height:v}}function I(n){const o=n;o.__i18n=o.__i18n||[],o.__i18n.push({locale:"",resource:{en:{home:{t:0,b:{t:2,i:[{t:3}],s:"Home"}},products:{t:0,b:{t:2,i:[{t:3}],s:"Products"}},productsList:{solarCleanBot:{t:0,b:{t:2,i:[{t:3}],s:"Solar Clean Bot"}},componentsTester:{t:0,b:{t:2,i:[{t:3}],s:"Components Tester"}},factoryAutomation:{t:0,b:{t:2,i:[{t:3}],s:"Factory Automation"}},trainingEquipment:{t:0,b:{t:2,i:[{t:3}],s:"Training Equipment"}}},about:{t:0,b:{t:2,i:[{t:3}],s:"About"}},contact:{t:0,b:{t:2,i:[{t:3}],s:"Contact"}}},vi:{home:{t:0,b:{t:2,i:[{t:3}],s:"Trang chủ"}},products:{t:0,b:{t:2,i:[{t:3}],s:"Sản phẩm"}},productsList:{solarCleanBot:{t:0,b:{t:2,i:[{t:3}],s:"Robot rửa xe mặt trời"}},componentsTester:{t:0,b:{t:2,i:[{t:3}],s:"Máy kiểm tra linh kiện"}},factoryAutomation:{t:0,b:{t:2,i:[{t:3}],s:"Hệ thống tự động hóa"}},trainingEquipment:{t:0,b:{t:2,i:[{t:3}],s:"Thiết bị đào tạo"}}},about:{t:0,b:{t:2,i:[{t:3}],s:"Về chúng tôi"}},contact:{t:0,b:{t:2,i:[{t:3}],s:"Liên hệ"}}}}})}const yt={class:"container mx-auto"},bt={class:"flex items-center justify-between"},ht={class:"flex items-center"},vt={class:"hidden md:flex items-center space-x-6"},xt={class:"relative group"},_t={class:"absolute hidden group-hover:block w-64 bg-white shadow-lg py-2 rounded-lg"},wt={class:"flex items-center space-x-2 ml-4"},kt={class:"md:hidden flex items-center space-x-4"},St={class:"flex items-center space-x-2"},Lt={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},Ct={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},Tt={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},Bt={class:"container mx-auto px-4"},Et={class:"relative"},q={__name:"AppHeader",setup(n){const{setLocale:o,locale:s,t:r}=K({useScope:"local"});B(()=>{localStorage.setItem("currentLocale",s.value)});const a=L(()=>s.value),u=x=>{o(x),localStorage.setItem("currentLocale",x)},{y:m}=gt(),e=L(()=>m.value>50),{width:v}=mt(),h=_(!1),y=_(!1);return(x,c)=>{const f=J;return k(),S("nav",{class:l(["fixed p-4 w-full transition-all duration-300 text-[18px] z-50",{"bg-orange-500":!t(e),"bg-white shadow-lg":t(e),"shadow-lg":t(v)<768}])},[i("div",yt,[i("div",bt,[i("div",ht,[c[6]||(c[6]=i("img",{src:"https://netos.lhu.edu.vn/_cdn/netos/udf_logo.png",alt:"Logo",class:"h-8 w-8 mr-2",referrerpolicy:"no-referrer"},null,-1)),i("span",{class:l(["transition-colors text-xl font-semibold",{"text-white":!t(e),"text-gray-800":t(e)}])},"Uni Design Factory",2)]),i("div",vt,[d(f,{to:"/",class:l(["transition-colors hover:text-orange-200 px-3 py-1 rounded-md",t(e)?"text-gray-800":"text-white"])},{default:p(()=>[b(g(t(r)("home")),1)]),_:1},8,["class"]),i("div",xt,[d(f,{to:"/products",class:l(["transition-colors",t(e)?"text-gray-800":"text-white"])},{default:p(()=>[i("button",{class:l(["transition-colors flex items-center",t(e)?"text-gray-800":"text-white"])},[b(g(t(r)("products"))+" ",1),c[7]||(c[7]=i("svg",{class:"w-4 h-4 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))],2)]),_:1},8,["class"]),i("div",_t,[d(f,{to:"/products/solar-clean-bot",class:"block px-4 py-2 hover:bg-gray-100"},{default:p(()=>[b(g(t(r)("productsList.solarCleanBot")),1)]),_:1}),d(f,{to:"/products/components-tester",class:"block px-4 py-2 hover:bg-gray-100"},{default:p(()=>[b(g(t(r)("productsList.componentsTester")),1)]),_:1}),d(f,{to:"/products/factory-automation",class:"block px-4 py-2 hover:bg-gray-100"},{default:p(()=>[b(g(t(r)("productsList.factoryAutomation")),1)]),_:1}),d(f,{to:"/products/training-equipment",class:"block px-4 py-2 hover:bg-gray-100"},{default:p(()=>[b(g(t(r)("productsList.trainingEquipment")),1)]),_:1})])]),d(f,{to:"/about",class:l(["transition-colors",t(e)?"text-gray-800":"text-white"])},{default:p(()=>[b(g(t(r)("about")),1)]),_:1},8,["class"]),d(f,{to:"/contact",class:l(["transition-colors",t(e)?"text-gray-800":"text-white"])},{default:p(()=>[b(g(t(r)("contact")),1)]),_:1},8,["class"]),i("div",wt,[i("button",{onClick:c[0]||(c[0]=w=>u("vi")),class:l([{"font-bold":t(a)==="vi","text-white":!t(e),"text-gray-800":t(e)},"px-2 py-1 rounded transition-colors"])}," VN ",2),i("span",{class:l({"text-white":!t(e),"text-gray-800":t(e)})},"|",2),i("button",{onClick:c[1]||(c[1]=w=>u("en")),class:l([{"font-bold":t(a)==="en","text-white":!t(e),"text-gray-800":t(e)},"px-2 py-1 rounded transition-colors"])}," EN ",2)])]),i("div",kt,[i("div",St,[i("button",{onClick:c[2]||(c[2]=w=>u("vi")),class:l([{"font-bold":t(a)==="vi","text-white":!t(e),"text-gray-800":t(e)},"px-2 py-1 rounded transition-colors"])}," VN ",2),i("span",{class:l({"text-white":!t(e),"text-gray-800":t(e)})},"|",2),i("button",{onClick:c[3]||(c[3]=w=>u("en")),class:l([{"font-bold":t(a)==="en","text-white":!t(e),"text-gray-800":t(e)},"px-2 py-1 rounded transition-colors"])}," EN ",2)]),i("button",{onClick:c[4]||(c[4]=w=>h.value=!t(h)),class:l({"text-white":!t(e),"text-orange-500":t(e)})},[(k(),S("svg",Lt,[t(h)?(k(),S("path",Tt)):(k(),S("path",Ct))]))],2)])]),d(N,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 transform -translate-y-2 ease-out","enter-to-class":"opacity-100 transform translate-y-0 ease-out","leave-active-class":"transition-all duration-200","leave-from-class":"opacity-100 transform translate-y-0 ease-out","leave-to-class":"opacity-0 transform -translate-y-2 ease-out",mode:"out-in"},{default:p(()=>[M(i("div",{class:l(["md:hidden absolute top-full left-0 right-0 shadow-lg overflow-hidden transform origin-top",{"bg-orange-500":!t(e),"bg-white":t(e)}])},[i("div",Bt,[d(f,{to:"/",class:l(["block py-3 border-b",t(e)?"text-gray-800 border-gray-100":"text-white border-orange-400"])},{default:p(()=>[b(g(t(r)("home")),1)]),_:1},8,["class"]),i("div",Et,[i("button",{onClick:c[5]||(c[5]=w=>y.value=!t(y)),class:l(["w-full text-left py-3 border-b flex justify-between items-center",{"text-white border-orange-400":!t(e),"text-gray-800 border-gray-100":t(e)}])},[b(g(t(r)("products"))+" ",1),t(y)?U("",!0):(k(),S("svg",{key:0,class:l(["w-4 h-4 transform transition-transform duration-200",{"rotate-180":t(y)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},c[8]||(c[8]=[i("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))],2),d(N,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 transform -translate-y-2","enter-to-class":"opacity-100 transform translate-y-0","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:p(()=>[M(i("div",{class:l([{"bg-orange-600":!t(e),"bg-gray-50":t(e)},"px-4"])},[d(f,{to:"/products/solar-clean-bot",class:l(["block py-3 border-b",t(e)?"text-gray-800 border-gray-100":"text-white border-orange-400"])},{default:p(()=>[b(g(t(r)("productsList.solarCleanBot")),1)]),_:1},8,["class"]),d(f,{to:"/products/components-tester",class:l(["block py-3 border-b",t(e)?"text-gray-800 border-gray-100":"text-white border-orange-400"])},{default:p(()=>[b(g(t(r)("productsList.componentsTester")),1)]),_:1},8,["class"]),d(f,{to:"/products/factory-automation",class:l(["block py-3 border-b",t(e)?"text-gray-800 border-gray-100":"text-white border-orange-400"])},{default:p(()=>[b(g(t(r)("productsList.factoryAutomation")),1)]),_:1},8,["class"]),d(f,{to:"/products/training-equipment",class:l(["block py-3 border-b",t(e)?"text-gray-800 border-gray-100":"text-white border-orange-400"])},{default:p(()=>[b(g(t(r)("productsList.trainingEquipment")),1)]),_:1},8,["class"])],2),[[H,t(y)]])]),_:1})]),i("a",{href:"#",class:l(["block py-3 border-b",{"text-white border-orange-400":!t(e),"text-gray-800 border-gray-100":t(e)}])},g(t(r)("about")),3),i("a",{href:"#",class:l(["block py-3 border-b",{"text-white border-orange-400":!t(e),"text-gray-800 border-gray-100":t(e)}])},g(t(r)("contact")),3)])],2),[[H,t(h)]])]),_:1})])],2)}}};typeof I=="function"&&I(q);const At={};function Mt(n,o){return k(),S("footer",null,o[0]||(o[0]=[i("h1",null,"Footer",-1)]))}const Nt=X(At,[["render",Mt]]),Ot=C({__name:"default",setup(n){return G(),Q(),(o,s)=>{const r=tt,a=et,u=q,m=Nt,e=nt,v=ot;return k(),S("div",null,[d(v,null,{default:p(()=>[d(a,null,{default:p(()=>[d(r,null,{default:p(()=>s[0]||(s[0]=[b("Nuxt App")])),_:1})]),_:1}),d(e,null,{default:p(()=>[d(u),R(o.$slots,"default"),d(m)]),_:3})]),_:3})])}}});export{Ot as default};
