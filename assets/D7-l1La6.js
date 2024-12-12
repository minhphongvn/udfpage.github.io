import{u as z}from"./BCkSW8Sl.js";import{g as C,h as B,n as Y,i as R,j as U,u as t,k as j,l as x,f as L,m as q,q as X,o as w,c as k,a,s as c,b as d,w as g,d as h,t as y,v as M,e as W,T as H,x as $,y as G,z as Q,A as J,B as K}from"./Bucmki7d.js";import{_ as Z}from"./B7zqFXBf.js";import{u as P}from"./BAT01UZI.js";import{_ as tt}from"./DaY32Zj8.js";import"./CpL3h8hc.js";const et=s=>{const o=Object.create(null);for(const r in s){const n=s[r];n!==void 0&&(o[r]=n)}return o},A=(s,o)=>(r,n)=>(z(()=>s({...et(r),...n.attrs},n)),()=>{var i,p;return o?(p=(i=n.slots).default)==null?void 0:p.call(i):null}),V={accesskey:String,autocapitalize:String,autofocus:{type:Boolean,default:void 0},class:[String,Object,Array],contenteditable:{type:Boolean,default:void 0},contextmenu:String,dir:String,draggable:{type:Boolean,default:void 0},enterkeyhint:String,exportparts:String,hidden:{type:Boolean,default:void 0},id:String,inputmode:String,is:String,itemid:String,itemprop:String,itemref:String,itemscope:String,itemtype:String,lang:String,nonce:String,part:String,slot:String,spellcheck:{type:Boolean,default:void 0},style:String,tabindex:String,title:String,translate:String},ot=C({name:"Title",inheritAttrs:!1,setup:A((s,{slots:o})=>{var r,n,i;return{title:((i=(n=(r=o.default)==null?void 0:r.call(o))==null?void 0:n[0])==null?void 0:i.children)||null}})}),nt=C({name:"Head",inheritAttrs:!1,setup:(s,o)=>()=>{var r,n;return(n=(r=o.slots).default)==null?void 0:n.call(r)}}),st=C({name:"Html",inheritAttrs:!1,props:{...V,manifest:String,version:String,xmlns:String,renderPriority:[String,Number]},setup:A(s=>({htmlAttrs:s}),!0)}),rt=C({name:"Body",inheritAttrs:!1,props:{...V,renderPriority:[String,Number]},setup:A(s=>({bodyAttrs:s}),!0)});function O(s){return R()?(U(s),!0):!1}function E(s){return typeof s=="function"?s():t(s)}const at=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const it=Object.prototype.toString,lt=s=>it.call(s)==="[object Object]",ct=()=>{};function ut(s){return j()}function dt(s,o=!0,r){ut()?B(s,r):o?s():Y(s)}const T=at?window:void 0;function pt(s){var o;const r=E(s);return(o=r==null?void 0:r.$el)!=null?o:r}function F(...s){let o,r,n,i;if(typeof s[0]=="string"||Array.isArray(s[0])?([r,n,i]=s,o=T):[o,r,n,i]=s,!o)return ct;Array.isArray(r)||(r=[r]),Array.isArray(n)||(n=[n]);const p=[],m=()=>{p.forEach(b=>b()),p.length=0},e=(b,_,l,u)=>(b.addEventListener(_,l,u),()=>b.removeEventListener(_,l,u)),v=q(()=>[pt(o),E(i)],([b,_])=>{if(m(),!b)return;const l=lt(_)?{..._}:_;p.push(...r.flatMap(u=>n.map(S=>e(b,u,S,l))))},{immediate:!0,flush:"post"}),f=()=>{v(),m()};return O(f),f}function gt(){const s=x(!1),o=j();return o&&B(()=>{s.value=!0},o),s}function ft(s){const o=gt();return L(()=>(o.value,!!s()))}function mt(s,o={}){const{window:r=T}=o,n=ft(()=>r&&"matchMedia"in r&&typeof r.matchMedia=="function");let i;const p=x(!1),m=f=>{p.value=f.matches},e=()=>{i&&("removeEventListener"in i?i.removeEventListener("change",m):i.removeListener(m))},v=X(()=>{n.value&&(e(),i=r.matchMedia(E(s)),"addEventListener"in i?i.addEventListener("change",m):i.addListener(m),p.value=i.matches)});return O(()=>{v(),e(),i=void 0}),p}function bt(s={}){const{window:o=T,behavior:r="auto"}=s;if(!o)return{x:x(0),y:x(0)};const n=x(o.scrollX),i=x(o.scrollY),p=L({get(){return n.value},set(e){scrollTo({left:e,behavior:r})}}),m=L({get(){return i.value},set(e){scrollTo({top:e,behavior:r})}});return F(o,"scroll",()=>{n.value=o.scrollX,i.value=o.scrollY},{capture:!1,passive:!0}),{x:p,y:m}}function ht(s={}){const{window:o=T,initialWidth:r=Number.POSITIVE_INFINITY,initialHeight:n=Number.POSITIVE_INFINITY,listenOrientation:i=!0,includeScrollbar:p=!0,type:m="inner"}=s,e=x(r),v=x(n),f=()=>{o&&(m==="outer"?(e.value=o.outerWidth,v.value=o.outerHeight):p?(e.value=o.innerWidth,v.value=o.innerHeight):(e.value=o.document.documentElement.clientWidth,v.value=o.document.documentElement.clientHeight))};if(f(),dt(f),F("resize",f,{passive:!0}),i){const b=mt("(orientation: portrait)");q(b,()=>f())}return{width:e,height:v}}function N(s){const o=s;o.__i18n=o.__i18n||[],o.__i18n.push({locale:"",resource:{en:{home:{t:0,b:{t:2,i:[{t:3}],s:"Home"}},products:{t:0,b:{t:2,i:[{t:3}],s:"Products"}},productsList:{solarCleanBot:{t:0,b:{t:2,i:[{t:3}],s:"Solar Clean Bot"}},componentsTester:{t:0,b:{t:2,i:[{t:3}],s:"Components Tester"}},factoryAutomation:{t:0,b:{t:2,i:[{t:3}],s:"Factory Automation"}},trainingEquipment:{t:0,b:{t:2,i:[{t:3}],s:"Training Equipment"}}},about:{t:0,b:{t:2,i:[{t:3}],s:"About"}},contact:{t:0,b:{t:2,i:[{t:3}],s:"Contact"}}},vi:{home:{t:0,b:{t:2,i:[{t:3}],s:"Trang chủ"}},products:{t:0,b:{t:2,i:[{t:3}],s:"Sản phẩm"}},productsList:{solarCleanBot:{t:0,b:{t:2,i:[{t:3}],s:"Robot rửa xe mặt trời"}},componentsTester:{t:0,b:{t:2,i:[{t:3}],s:"Máy kiểm tra linh kiện"}},factoryAutomation:{t:0,b:{t:2,i:[{t:3}],s:"Hệ thống tự động hóa"}},trainingEquipment:{t:0,b:{t:2,i:[{t:3}],s:"Thiết bị đào tạo"}}},about:{t:0,b:{t:2,i:[{t:3}],s:"Về chúng tôi"}},contact:{t:0,b:{t:2,i:[{t:3}],s:"Liên hệ"}}}}})}const yt={class:"container max-w-7xl mx-auto"},vt={class:"flex items-center justify-between"},_t={class:"flex items-center"},xt={class:"hidden md:flex items-center space-x-6"},wt={class:"relative group"},kt={class:"absolute hidden group-hover:block w-64 bg-white shadow-lg py-2 rounded-lg"},St={class:"flex items-center space-x-2 ml-4"},Lt={class:"md:hidden flex items-center space-x-4"},Ct={class:"flex items-center space-x-2"},Tt={class:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},Bt={key:0,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},At={key:1,"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},Et={class:"container mx-auto px-4"},Mt={class:"relative"},D={__name:"AppHeader",setup(s){const{setLocale:o,locale:r,t:n}=P({scope:"header"});B(()=>{localStorage.setItem("currentLocale",r.value)});const i=L(()=>r.value),p=_=>{o(_),localStorage.setItem("currentLocale",_)},{y:m}=bt(),e=L(()=>m.value>50),{width:v}=ht(),f=x(!1),b=x(!1);return(_,l)=>{const u=Z;return w(),k("nav",{class:c(["fixed p-4 w-full transition-all duration-300 text-[18px] z-50",{"bg-orange-500":!t(e),"bg-white shadow-lg":t(e),"shadow-lg":t(v)<768}])},[a("div",yt,[a("div",vt,[a("div",_t,[l[6]||(l[6]=a("img",{src:"https://netos.lhu.edu.vn/_cdn/netos/udf_logo.png",alt:"Logo",class:"h-8 w-8 mr-2",referrerpolicy:"no-referrer"},null,-1)),a("span",{class:c(["transition-colors text-xl font-semibold",{"text-white":!t(e),"text-gray-800":t(e)}])},"Uni Design Factory",2)]),a("div",xt,[d(u,{to:"/",class:c(["transition-colors hover:text-orange-200 px-3 py-1 rounded-md",t(e)?"text-gray-800":"text-white"])},{default:g(()=>[h(y(t(n)("home")),1)]),_:1},8,["class"]),a("div",wt,[d(u,{to:"/products",class:c(["transition-colors",t(e)?"text-gray-800":"text-white"])},{default:g(()=>[a("button",{class:c(["transition-colors flex items-center",t(e)?"text-gray-800":"text-white"])},[h(y(t(n)("products"))+" ",1),l[7]||(l[7]=a("svg",{class:"w-4 h-4 ml-1",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"})],-1))],2)]),_:1},8,["class"]),a("div",kt,[d(u,{to:"/products/solar-clean-bot",class:"block px-4 py-2 hover:bg-gray-100"},{default:g(()=>[h(y(t(n)("productsList.solarCleanBot")),1)]),_:1}),d(u,{to:"/products/components-tester",class:"block px-4 py-2 hover:bg-gray-100"},{default:g(()=>[h(y(t(n)("productsList.componentsTester")),1)]),_:1}),d(u,{to:"/products/factory-automation",class:"block px-4 py-2 hover:bg-gray-100"},{default:g(()=>[h(y(t(n)("productsList.factoryAutomation")),1)]),_:1}),d(u,{to:"/products/training-equipment",class:"block px-4 py-2 hover:bg-gray-100"},{default:g(()=>[h(y(t(n)("productsList.trainingEquipment")),1)]),_:1})])]),d(u,{to:"/about",class:c(["transition-colors",t(e)?"text-gray-800":"text-white"])},{default:g(()=>[h(y(t(n)("about")),1)]),_:1},8,["class"]),d(u,{to:"/contact",class:c(["transition-colors",t(e)?"text-gray-800":"text-white"])},{default:g(()=>[h(y(t(n)("contact")),1)]),_:1},8,["class"]),a("div",St,[a("button",{onClick:l[0]||(l[0]=S=>p("vi")),class:c([{"font-bold":t(i)==="vi","text-white":!t(e),"text-gray-800":t(e)},"px-2 py-1 rounded transition-colors"])}," VN ",2),a("span",{class:c({"text-white":!t(e),"text-gray-800":t(e)})},"|",2),a("button",{onClick:l[1]||(l[1]=S=>p("en")),class:c([{"font-bold":t(i)==="en","text-white":!t(e),"text-gray-800":t(e)},"px-2 py-1 rounded transition-colors"])}," EN ",2)])]),a("div",Lt,[a("div",Ct,[a("button",{onClick:l[2]||(l[2]=S=>p("vi")),class:c([{"font-bold":t(i)==="vi","text-white":!t(e),"text-gray-800":t(e)},"px-2 py-1 rounded transition-colors"])}," VN ",2),a("span",{class:c({"text-white":!t(e),"text-gray-800":t(e)})},"|",2),a("button",{onClick:l[3]||(l[3]=S=>p("en")),class:c([{"font-bold":t(i)==="en","text-white":!t(e),"text-gray-800":t(e)},"px-2 py-1 rounded transition-colors"])}," EN ",2)]),a("button",{onClick:l[4]||(l[4]=S=>f.value=!t(f)),class:c({"text-white":!t(e),"text-orange-500":t(e)})},[(w(),k("svg",Tt,[t(f)?(w(),k("path",At)):(w(),k("path",Bt))]))],2)])]),d(H,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 transform -translate-y-2 ease-out","enter-to-class":"opacity-100 transform translate-y-0 ease-out","leave-active-class":"transition-all duration-200","leave-from-class":"opacity-100 transform translate-y-0 ease-out","leave-to-class":"opacity-0 transform -translate-y-2 ease-out",mode:"out-in"},{default:g(()=>[M(a("div",{class:c(["md:hidden absolute top-full left-0 right-0 shadow-lg overflow-hidden transform origin-top",{"bg-orange-500":!t(e),"bg-white":t(e)}])},[a("div",Et,[d(u,{to:"/",class:c(["block py-3 border-b",t(e)?"text-gray-800 border-gray-100":"text-white border-orange-400"])},{default:g(()=>[h(y(t(n)("home")),1)]),_:1},8,["class"]),a("div",Mt,[a("button",{onClick:l[5]||(l[5]=S=>b.value=!t(b)),class:c(["w-full text-left py-3 border-b flex justify-between items-center",{"text-white border-orange-400":!t(e),"text-gray-800 border-gray-100":t(e)}])},[h(y(t(n)("products"))+" ",1),t(b)?W("",!0):(w(),k("svg",{key:0,class:c(["w-4 h-4 transform transition-transform duration-200",{"rotate-180":t(b)}]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},l[8]||(l[8]=[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 9l-7 7-7-7"},null,-1)]),2))],2),d(H,{"enter-active-class":"transition-all duration-300 ease-out","enter-from-class":"opacity-0 transform -translate-y-2","enter-to-class":"opacity-100 transform translate-y-0","leave-active-class":"transition-all duration-200 ease-in","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:g(()=>[M(a("div",{class:c([{"bg-orange-600":!t(e),"bg-gray-50":t(e)},"px-4"])},[d(u,{to:"/products/solar-clean-bot",class:c(["block py-3 border-b",t(e)?"text-gray-800 border-gray-100":"text-white border-orange-400"])},{default:g(()=>[h(y(t(n)("productsList.solarCleanBot")),1)]),_:1},8,["class"]),d(u,{to:"/products/components-tester",class:c(["block py-3 border-b",t(e)?"text-gray-800 border-gray-100":"text-white border-orange-400"])},{default:g(()=>[h(y(t(n)("productsList.componentsTester")),1)]),_:1},8,["class"]),d(u,{to:"/products/factory-automation",class:c(["block py-3 border-b",t(e)?"text-gray-800 border-gray-100":"text-white border-orange-400"])},{default:g(()=>[h(y(t(n)("productsList.factoryAutomation")),1)]),_:1},8,["class"]),d(u,{to:"/products/training-equipment",class:c(["block py-3 border-b",t(e)?"text-gray-800 border-gray-100":"text-white border-orange-400"])},{default:g(()=>[h(y(t(n)("productsList.trainingEquipment")),1)]),_:1},8,["class"])],2),[[$,t(b)]])]),_:1})]),d(u,{to:"/about",class:c(["block py-3 border-b",t(e)?"text-gray-800 border-gray-100":"text-white border-orange-400"])},{default:g(()=>[h(y(t(n)("about")),1)]),_:1},8,["class"]),d(u,{to:"/contact",class:c(["block py-3 border-b",t(e)?"text-gray-800 border-gray-100":"text-white border-orange-400"])},{default:g(()=>[h(y(t(n)("contact")),1)]),_:1},8,["class"])])],2),[[$,t(f)]])]),_:1})])],2)}}};typeof N=="function"&&N(D);function I(s){const o=s;o.__i18n=o.__i18n||[],o.__i18n.push({locale:"",resource:{en:{home:{t:0,b:{t:2,i:[{t:3}],s:"Home"}},products:{t:0,b:{t:2,i:[{t:3}],s:"Products"}},productsList:{solarCleanBot:{t:0,b:{t:2,i:[{t:3}],s:"Solar Clean Bot"}},componentsTester:{t:0,b:{t:2,i:[{t:3}],s:"Components Tester"}},factoryAutomation:{t:0,b:{t:2,i:[{t:3}],s:"Factory Automation"}},trainingEquipment:{t:0,b:{t:2,i:[{t:3}],s:"Training Equipment"}}},about:{t:0,b:{t:2,i:[{t:3}],s:"About"}},contact:{t:0,b:{t:2,i:[{t:3}],s:"Contact"}}},vi:{home:{t:0,b:{t:2,i:[{t:3}],s:"Trang chủ"}},products:{t:0,b:{t:2,i:[{t:3}],s:"Sản phẩm"}},productsList:{solarCleanBot:{t:0,b:{t:2,i:[{t:3}],s:"Robot rửa xe mặt trời"}},componentsTester:{t:0,b:{t:2,i:[{t:3}],s:"Máy kiểm tra linh kiện"}},factoryAutomation:{t:0,b:{t:2,i:[{t:3}],s:"Hệ thống tự động hóa"}},trainingEquipment:{t:0,b:{t:2,i:[{t:3}],s:"Thiết bị đào tạo"}}},about:{t:0,b:{t:2,i:[{t:3}],s:"Về chúng tôi"}},contact:{t:0,b:{t:2,i:[{t:3}],s:"Liên hệ"}}}}})}const Ht={class:"pt-16"},$t={class:"relative"},Nt={class:"bg-orange-500 py-6"},It=["src"],jt={key:1,class:"w-full text-center max-w-6xl mx-auto h-auto"},qt={class:"text-4xl font-bold text-white"},Wt={class:"container max-w-7xl mx-auto px-4"},Pt={class:"py-16 bg-white"},Vt={__name:"default",setup(s){const o=G(),{locale:r,t:n}=P();Q();const i=L(()=>{var v,f;const m={"/":{bg:"/home/hero_bg.png",title:n("home")},"/products":{bg:"/products/hero_bg_products.png",title:n("products")},"/products/solar-clean-bot":{bg:"/products/solar-clean-bot/solar_hero.png",title:n("productsList.solarCleanBot")},"/products/components-tester":{bg:null,title:n("productsList.componentsTester")},"/products/factory-automation":{bg:null,title:n("productsList.factoryAutomation")},"/products/training-equipment":{bg:null,title:n("productsList.trainingEquipment")},"/about":{bg:"/about/hero_bg_about.png",title:n("about")},"/contact":{bg:"/contact/hero_bg_contact.png",title:n("contact")}};let e=o.path;return e==="/"||e==="/en"?e="/":(e=e.replace(/^\/(en|vi)/,""),e.startsWith("/")||(e="./"+e)),{bg:(v=m[e])==null?void 0:v.bg,title:(f=m[e])==null?void 0:f.title}}),p=L(()=>o.path===`/${r.value}/contact`||o.path==="/contact");return(m,e)=>{const v=ot,f=nt,b=D,_=tt,l=rt,u=st;return w(),k("div",null,[d(u,null,{default:g(()=>[d(f,null,{default:g(()=>[d(v,null,{default:g(()=>e[0]||(e[0]=[h("Uni Design Factory")])),_:1})]),_:1}),d(l,null,{default:g(()=>[d(b),a("div",null,[a("section",Ht,[a("div",$t,[a("div",Nt,[t(i).bg?(w(),k("img",{key:0,src:t(i).bg,alt:"Robots",class:"w-full max-w-6xl mx-auto h-auto",referrerpolicy:"no-referrer"},null,8,It)):(w(),k("div",jt,[a("h1",qt,y(t(i).title),1)]))])])])]),a("div",null,[a("div",null,[J(m.$slots,"default")]),a("div",Wt,[a("footer",Pt,[t(p)?W("",!0):(w(),K(_,{key:0}))])])])]),_:3})]),_:3})])}}};typeof I=="function"&&I(Vt);export{Vt as default};
