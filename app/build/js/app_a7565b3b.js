var _={8826:function(n,i,e){var o={"./en":[5782,790],"./en/":[5782,790],"./en/index":[5782,790],"./en/index.js":[5782,790],"./en/login":[1930,790],"./en/login.js":[1930,790],"./en/main":[7547,790],"./en/main.js":[7547,790],"./en/nav":[5537,790],"./en/nav.js":[5537,790],"./en/router":[2698,790],"./en/router.js":[2698,790],"./en/theme":[8386,790],"./en/theme.js":[8386,790],"./jp":[3416,790],"./jp/":[3416,790],"./jp/index":[3416,790],"./jp/index.js":[3416,790],"./jp/login":[2519,790],"./jp/login.js":[2519,790],"./jp/main":[318,790],"./jp/main.js":[318,790],"./jp/nav":[790,790],"./jp/nav.js":[790,790],"./jp/router":[123,790],"./jp/router.js":[123,790],"./jp/theme":[5e3,790],"./jp/theme.js":[5e3,790],"./zh":[9687,790],"./zh/":[9687,790],"./zh/index":[9687,790],"./zh/index.js":[9687,790],"./zh/login":[3351,790],"./zh/login.js":[3351,790],"./zh/main":[1053,790],"./zh/main.js":[1053,790],"./zh/nav":[7782,790],"./zh/nav.js":[7782,790],"./zh/router":[2101,790],"./zh/router.js":[2101,790],"./zh/theme":[1281,790],"./zh/theme.js":[1281,790]};function r(t){if(!e.o(o,t))return Promise.resolve().then(function(){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s});var l=o[t],u=l[0];return e.e(l[1]).then(function(){return e(u)})}r.keys=function(){return Object.keys(o)},r.id=8826,n.exports=r},9739:function(n,i,e){var o=e(4335),r=e(8745);i.Z=(0,o.pC)(r.Z)},2168:function(n,i,e){e.d(i,{kn:function(){return l},uV:function(){return u}});var o=e(7378),r=e(2449);const t=({keys:s,children:a})=>{const[p]=(0,r.rw)();return(s&&p?.getValue(s))??a??""},l=()=>{const[s]=(0,r.rw)();return(0,o.useCallback)((a,p)=>(a&&s?.getValue(a))??p??"",[s])},u=(s,a)=>(s&&r.yH.getState()?.getValue(s))??a??"";i.ZP=t},6544:function(n,i,e){var o=e(4246),r=e(7634),t=e(7378),l=e(8611),u=e(4335),s=e(1090),a=e(8630),p=e(1429);const v=({error:f})=>{const h=f?.message?.slice(0,120).split(". ").slice(0,2).join(". ");(0,p.Z)({actionType:"pageError",text:h})};var B=f=>(0,o.jsx)(u.V7,{...f,report:v});let E=null;window.addEventListener("beforeunload",f=>{f.target.location.pathname.indexOf("/user/")===0||f.target.location.hash.indexOf("#/user/")===0||(0,p.Z)({actionType:"close",prevUuid:E})},!1);var F=()=>{const f=(0,s.k$y)();(0,p.Z)({actionType:"routeChange",uuid:f,prevUuid:E}),E=f};const k=`${a.Bj?"":"#"}/`,M=(f,h)=>{const{path:m,prevPath:T}=f;if(m.split("?")[0]===k)return h({path:"/"});h()};let S=!1;const N=f=>{const{path:h,name:m,stay:T}=f;let j;S||(j=T,S=!0),h.includes("/user/")||F({path:h,name:m,firstLoadTime:j})};var D={browserRouter:a.Bj,beforeRender:M,basepath:a.LJ,errorBoundary:B,afterRender:N},L=e(8024),O=e(2827),x=e(2449),I=e(321),U=async()=>{const f=(0,I.Z)();let h=await e(8826)(`./${f}`);return h=h.default??h,Object.setPrototypeOf(h,{getValue:m=>(0,s.NA2)(h,m)}),x.yH.setState(h),{i18ns:h,language:f}},g=e(7201),y=()=>{const[f,h]=(0,t.useState)(!0);return(0,t.useEffect)(()=>{(async()=>{h(!0);try{await(0,g.r)(),await U(),h(!1)}catch{h(!1)}})()},[]),[f]},C=e(7643),P=()=>{const{profileFn:f}=g.Z,[h,m]=(0,t.useState)(!0);return(0,t.useEffect)(()=>{(async()=>{m(!0);try{const{code:j,result:W}=await f()||{};if(m(!1),!W){(0,C.kS)(!0);return}j===200&&x.xZ.setState(W)}catch{m(!1)}})()},[]),[h]},R=e(9739),V=[{path:"/user",title:"\u767B\u5F55\u6CE8\u518C",hideMenu:!0,component:()=>e.e(790).then(e.bind(e,5169)),children:[{path:"/signin",name:"\u767B\u5F55",component:()=>Promise.all([e.e(790),e.e(443),e.e(853)]).then(e.bind(e,3369))},{path:"/signup",name:"\u6CE8\u518C",component:()=>Promise.all([e.e(790),e.e(443)]).then(e.bind(e,1831))}]}],w=[...V,{path:"/404",name:"404",component:Promise.all([e.e(713),e.e(466)]).then(e.bind(e,2466)),hideMenu:!0}],te={path:"/layout",name:"\u6846\u67B6\u914D\u7F6E",icon:"ico-flag",component:()=>Promise.all([e.e(790),e.e(443)]).then(e.bind(e,7751))},Z=f=>(0,o.jsx)("h1",{children:f.inputPath}),oe={path:"/page1",name:"\u4E00\u7EA7\u83DC\u5355",icon:"ico-flag",children:[{path:"/page1-1",name:"\u4E8C\u7EA7\u83DC\u53551",component:Z},{path:"/page1-2",name:"\u4E8C\u7EA7\u83DC\u53552",children:[{path:"/page1-2-1",name:"\u4E09\u7EA7\u83DC\u53551",icon:"ico-flag",component:Z},{path:"/page1-2-2",name:"\u4E09\u7EA7\u83DC\u53552",children:[{path:"/page1-2-2-1",name:"\u56DB\u7EA7\u83DC\u53551",component:Z},{path:"/page1-2-2-2",name:"\u56DB\u7EA7\u83DC\u53551-disabled",component:Z,linkProps:{disabled:!0}},{path:"/page1-2-2-3",name:"\u56DB\u7EA7\u83DC\u53553-_blank",component:Z,linkProps:{target:"_blank"}},{path:"/page1-2-2-4",name:"\u56DB\u7EA7\u83DC\u53554-hideMenu",component:Z,hideMenu:!0}]}]},{path:"/page1-3",name:"\u4E8C\u7EA7\u83DC\u53553",icon:"ico-flag",component:Z}]},ne={path:"/playground",name:"Playground",icon:"ico-flag",children:[{path:"/icons",name:"icons",component:()=>e.e(790).then(e.bind(e,7526))},{path:"/panel",name:"panel",component:()=>Promise.all([e.e(790),e.e(443)]).then(e.bind(e,8173))},{path:"/styles",name:"styles",component:()=>Promise.all([e.e(790),e.e(443)]).then(e.bind(e,346))},{path:"/modal",name:"modal",component:()=>Promise.all([e.e(790),e.e(443)]).then(e.bind(e,8477))},{path:"/demo-tools",name:"tools",component:()=>e.e(443).then(e.bind(e,5701))}]},re=[te,oe,ne,{path:"/profile",name:"\u4E2A\u4EBA\u4E2D\u5FC3",title:"\u4E2A\u4EBA\u4E2D\u5FC3",hideMenu:!0,component:f=>(0,o.jsx)("h1",{children:(0,o.jsxs)("h1",{children:[f.inputPath," is comming..."]})})}];const se=[{path:"/",component:()=>Promise.all([e.e(274),e.e(790),e.e(443),e.e(853)]).then(e.bind(e,2074)),children:re},...w];var ae=(f,h)=>(0,s._O2)((m,T)=>{const j=[...T,m].map(W=>W.path).join("").replace("//","/");m.name=f?.[j]??m.name,m.id=m.id??h?.find(W=>W.path===j)?._id,m.icon&&m.icon!==!0&&(m.icon=(0,o.jsx)(R.Z,{icon:m.icon})),typeof m.denied=="function"&&(m.denied=m.denied())})(se),J=()=>{const f=x.yH.getState(),h=x.F3.getState();return{routers:ae(f.router,h),title:f.title}};const Y=f=>{if(f.includes("rgb")){const h=f.match(/rgba?\((.+)\)/);if(h)return h[1].split(",").map(m=>m.trim()).slice(0,3).join()}return f};var ie=(f,h=document.documentElement)=>{const m=f?.list?.colors?.["--navBgColor"],T=f?.list?.colors?.["--menuBgColor"],j=Y((0,s.rWO)(m)),W=Y((0,s.rWO)(T)),H={...f?.list?.colors,...f?.list?.sizes,"--navBgRgb":j,"--menuBgRgb":W};H["--appLinkColor"]=H["--linkColor"],H["--appLinkActiveColor"]=H["--linkActiveColor"],H["--appLinkHoverColor"]=H["--linkHoverColor"],(0,s.A_F)(h,H,!0)};const Q=({routerCfgs:f})=>{const{output:h,loading:m,updateRouter:T}=(0,l.tv)(f);return(0,t.useEffect)(()=>{const j=x.NX.subscribe(ie);x.NX.setState((0,O.Z)()),(0,L.Z)(x.NX.setState);const W=x.bF.subscribe(async H=>{s.tOc.set("language",H),await U(),x.NX.setState((0,O.Z)()),T(J())});return()=>{W(),j()}},[]),(0,o.jsxs)(o.Fragment,{children:[h,m?(0,o.jsx)(u.$j,{global:!0}):null]})},le=f=>{const[h]=P();return h?(0,o.jsx)(u.$j,{global:!0}):(0,o.jsx)(Q,{routerCfgs:{...D,...J()}})};var ue=()=>{const[f]=y();return f?(0,o.jsx)(u.$j,{global:!0}):(0,C.pt)()?(0,o.jsx)(le,{}):(0,o.jsx)(Q,{routerCfgs:{...D,...J()}})},ce=()=>{!{configs:{browserRouter:!0,basepath:"/huxy-admin",buildTime:1680578531916,name:"\u9879\u76EE\u540D",_id:"\u5176\u5B83\u5C5E\u6027"}}.isDev&&"serviceWorker"in navigator&&(window.addEventListener("load",()=>{navigator.serviceWorker.register("/huxy-admin/service-worker.js").then(f=>{}).catch(f=>{})}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.location.reload()}))},Ee={},xe={};const fe=document.getElementById("app");(0,r.s)(fe).render((0,o.jsx)(ue,{})),ce()},1429:function(n,i,e){var o=e(1090),r=e(8611),t=e(8630),l=e(7643),u=e(7201),s=e(9876);const{type:a,version:p,model:v}=(0,o.PTJ)(),{type:b,version:B}=(0,o.afD)(),E=navigator.connection||navigator.mozConnection||navigator.webkitConnection,A={osType:a,osVersion:p,osModel:v,browserType:b,browserVersion:B,language:window.navigator.language,netType:E?.type,evn:t.Bj?"prod":"dev",appName:s.u2,appVersion:s.i8},F=k=>{if(!t.Bj||!(0,l.pt)())return;const M=(0,r.Bv)(),S=M?M.current.slice(-1)[0]??{}:{},{path:N,name:D,...L}=k,O=S.path??N??"",x={...A,...L,route:t.Bj?O:O.slice(1),routeName:S.name??D};u.Z.addReportFn?.(x)};i.Z=F},8630:function(n,i,e){e.d(i,{AN:function(){return l},Bj:function(){return o},Dj:function(){return t},LJ:function(){return r},Vb:function(){return s}});const{browserRouter:o,basepath:r,PROXY:t,buildTime:l,...u}={browserRouter:!0,basepath:"/huxy-admin",buildTime:1680578531916,name:"\u9879\u76EE\u540D",_id:"\u5176\u5B83\u5C5E\u6027"},s=u},6771:function(n,i,e){e.d(i,{Z:function(){return z}});var o={};e.r(o),e.d(o,{theme1:function(){return U},theme2:function(){return g},theme3:function(){return c},theme4:function(){return y}});var l={sizes:{"--maxWidth":"100vw","--menuWidth":"220px","--collapseWidth":"68px","--collapseMenuWidth":"180px","--headerHeight":"64px","--footerHeight":"52px","--breadHeight":"42px","--menuItemHeight":"45px"},colors:{"--appColor":"#495057","--appBgColor":"#f8f8fb","--bannerBgColor":"#2a3042","--navBgColor":"#ffffff","--menuBgColor":"#2a3042","--panelBgColor":"#ffffff","--linkColor":"#455a64","--linkHoverColor":"var(--blue1)","--linkActiveColor":"var(--blue2)","--asideLinkColor":"#f0f0f0","--bannerLinkColor":"#f0f0f0","--borderColor":"#eff2f7"}},a={sizes:{"--maxWidth":"100vw","--menuWidth":"220px","--collapseWidth":"68px","--collapseMenuWidth":"180px","--headerHeight":"60px","--footerHeight":"50px","--breadHeight":"50px","--menuItemHeight":"48px"},colors:{"--appColor":"#495057","--appBgColor":"#f3f4f7","--bannerBgColor":"#ffffff","--navBgColor":"#fcfcfc","--menuBgColor":"#ffffff","--panelBgColor":"#ffffff","--linkColor":"#495057","--linkHoverColor":"var(--blue1)","--linkActiveColor":"var(--blue2)","--borderColor":"#ebeef5"}},b={sizes:{"--maxWidth":"100vw","--menuWidth":"220px","--collapseWidth":"68px","--collapseMenuWidth":"180px","--headerHeight":"64px","--footerHeight":"52px","--breadHeight":"42px","--menuItemHeight":"45px"},colors:{"--appColor":"#ced4da","--appBgColor":"#303841","--bannerBgColor":"#37424c","--navBgColor":"#3c4752","--menuBgColor":"#37424c","--panelBgColor":"#36404a","--linkColor":"#ced4da","--linkHoverColor":"#ffffff","--linkActiveColor":"#ffffff","--borderColor":"#424e5a"}},A={sizes:{"--maxWidth":"100vw","--menuWidth":"196px","--collapseWidth":"60px","--collapseMenuWidth":"160px","--headerHeight":"56px","--footerHeight":"40px","--breadHeight":"40px","--menuItemHeight":"45px"},colors:{"--appColor":"#a6b0cf","--appBgColor":"#222736","--bannerBgColor":"#2a3042","--navBgColor":"#262b3c","--menuBgColor":"#2a3042","--panelBgColor":"#2a3042","--linkColor":"#a6b0cf","--linkHoverColor":"#ffffff","--linkActiveColor":"#ffffff","--borderColor":"#424e5a"}},M={sizes:{"--maxWidth":"86vw","--menuWidth":"200px","--collapseWidth":"60px","--collapseMenuWidth":"160px","--headerHeight":"56px","--footerHeight":"40px","--breadHeight":"40px","--menuItemHeight":"45px"},colors:{"--appColor":"#495057","--appBgColor":"#eaeff2","--bannerBgColor":"#21364a","--navBgColor":"#21364a","--menuBgColor":"#ffffff","--panelBgColor":"#ffffff","--linkColor":"#495057","--linkHoverColor":"var(--blue1)","--linkActiveColor":"var(--blue2)","--headerLinkColor":"#ffffff","--bannerLinkColor":"#ffffff","--borderColor":"#eff2f7"}},D={sizes:{"--maxWidth":"1310px","--menuWidth":"200px","--collapseWidth":"60px","--collapseMenuWidth":"180px","--headerHeight":"60px","--footerHeight":"50px","--breadHeight":"50px","--menuItemHeight":"50px"},colors:{"--appColor":"#495057","--appBgColor":"#aab0c7","--bannerBgColor":"#9575ce","--navBgColor":"#9575ce","--menuBgColor":"#ffffff","--pageBgColor":"#e9edf0","--panelBgColor":"#ffffff","--linkColor":"#455a64","--linkHoverColor":"var(--blue1)","--linkActiveColor":"var(--blue2)","--headerLinkColor":"#f0f0f0","--bannerLinkColor":"#f0f0f0","--borderColor":"#d0d0d0"}};const L={"--maxWidth":"100vw","--menuWidth":"220px","--collapseWidth":"68px","--collapseMenuWidth":"180px","--headerHeight":"60px","--footerHeight":"50px","--breadHeight":"50px","--menuItemHeight":"48px"},O={"--appColor":"#859abd","--appBgColor":"#243550","--bannerBgColor":"#334a60","--navBgColor":"#243550","--menuBgColor":"#334a60","--panelBgColor":"#334a60","--linkColor":"#859abd","--linkHoverColor":"#ffffff","--linkActiveColor":"#ffffff","--bannerLinkColor":"#ffffff","--borderColor":"#859abd"},x={"--appColor":"#24312b","--appBgColor":"#f9f7f2","--bannerBgColor":"#01170e","--navBgColor":"#ffffff","--menuBgColor":"#01170e","--panelBgColor":"#ffffff","--linkColor":"#24312b","--linkHoverColor":"#dc6962","--linkActiveColor":"#dc6962","--bannerLinkColor":"#fbfbfb","--asideLinkColor":"#f2f2f2","--borderColor":"#ebeef5"},I={"--appColor":"#334a60","--appBgColor":"#f2f2f2","--bannerBgColor":"#e6e5f2","--navBgColor":"#ffffff","--menuBgColor":"linear-gradient(to bottom, #e6e5f2, #4599cd)","--panelBgColor":"#ffffff","--linkColor":"#334a60","--linkHoverColor":"#ab47bc","--linkActiveColor":"#bc5090","--borderColor":"#ebeef5"},K={"--appColor":"#21364a","--appBgColor":"#c5cae9","--bannerBgColor":"#e6e5f2","--navBgColor":"linear-gradient(to right,#4568dc, #b06ab3)","--menuBgColor":"linear-gradient(to bottom,#e6e5f2, #4599cd)","--panelBgColor":"linear-gradient(to right,#beb9db, #7eb0d5)","--linkColor":"#21364a","--linkHoverColor":"#fb8c00","--linkActiveColor":"#fb8c00","--headerLinkColor":"#fcfcfc","--borderColor":"rgba(0, 0, 0, 0.12)"},U={sizes:L,colors:O},g={sizes:L,colors:x},c={sizes:L,colors:I},y={sizes:L,colors:K};var z=P=>[{name:P("theme.light","light"),key:"light",list:l,type:"theme"},{name:P("theme.light1","light1"),key:"light1",list:a,type:"theme"},{name:P("theme.dark","dark"),key:"dark",list:b,type:"theme"},{name:P("theme.dark1","dark1"),key:"dark1",list:A,type:"theme"},{name:P("theme.portal","portal"),key:"portal",list:M,type:"theme"},{name:P("theme.portal1","portal1"),key:"portal1",list:D,type:"theme"},...Object.keys(o).map(R=>({name:R,key:R,list:o[R],type:"theme"}))]},2449:function(n,i,e){e.d(i,{yH:function(){return M},bF:function(){return A},F3:function(){return D},NX:function(){return k},rw:function(){return I},yX:function(){return O},fl:function(){return x},xZ:function(){return S}});var o=e(1090),r=e(8124);const t=(0,o.MTn)(),l=(0,o.fHt)(t),u=(0,r.fH)(t),s="lang-store",a="theme-store",p="menuType-store",v="i18ns-store",b="userInfo-store",B="permission-store",E="routers-store",A=l(s),F=l(p),k=l(a,{}),M=l(v,{}),S=l(b,{}),N=l(B,[]),D=l(E,[]),L=c=>useStore(langName,c),O=c=>u(p,c),x=(c={})=>u(a,c),I=(c={})=>u(v,c),K=(c={})=>useStore(userInfoName,c),U=(c=[])=>useStore(permissionName,c),g=(c=[])=>useStore(routersName,c)},7201:function(n,i,e){e.d(i,{Z:function(){return U},r:function(){return K}});var o=e(1090),r=e(8630),t=e(7643);const l=r.Dj?.prefix??"/api",u=[200,1e4],s=g=>g.json().then(c=>{c.code=c.code??g.status,c.message=c.message??c.msg??g.statusText;const{message:y,code:C}=c;if(C===401)throw(0,t.kS)(!0),{code:C,message:y};if(!u.includes(C))throw{code:C,message:y};return c}).catch(c=>{throw o.ywV.error(c.message),c}),a=g=>{if(g.status!==200)throw o.ywV.error(g.statusText),{message:g.statusText};const c=g.headers.get("Content-Disposition"),y=decodeURIComponent(c);return g.blob().then(C=>{C.code=C.code??g.status;const{message:z,msg:P,code:R}=C;if(!u.includes(R))throw{message:P||z};return{result:C,fileInfo:y}}).catch(C=>{throw o.ywV.error(C.message),C})},p=(0,o._iG)(s),v=(0,o._iG)(a),b=()=>({Authorization:`yiru ${o.tOc.get("token")||""}`}),B=({method:g,url:c,prefix:y,...C})=>p(g)(`${y??l}${c}`,{headers:b(),credentials:"omit",...C}),E=({method:g,url:c,prefix:y,...C})=>wrapPromise(p(g)(`${y??l}${c}`,{headers:b(),...C})),A=({method:g,url:c,prefix:y,...C})=>v(g)(`${y??l}${c}`,{headers:b(),...C}),F=({method:g,url:c,prefix:y,...C})=>fetcher()(g)(`${y??l}${c}`,{headers:b(),credentials:"omit",...C});var k=B,M=e(1429),N=g=>k(g).catch(c=>{const{url:y}=g,C=c.code!=401&&c.code!=403&&c.code!=429,z=!y.includes("/report/")&&!y.includes("/auth/");throw C&&z&&(0,M.Z)({actionType:"fetchError",text:c.message,value:y}),Error(c.message)});const D=g=>[{name:"login",url:"/auth/login",method:"post"},{name:"logout",url:"/auth/logout"},{name:"signup",url:"/auth/signup",method:"post"},{name:"profile",url:"/users/profile",method:"get"},{name:"allUser",url:"/users/allUser"}];var O=()=>({result:{list:D(r.Vb?._id)}});const x={},I=async()=>{const{result:g}=await O();return g?.list??[]},K=async()=>{let g=[];try{g=await I()}catch{}return g.map(c=>{const{name:y,fnName:C,dataType:z,url:P,isDl:R,...$}=c,V=R?A:N,X=C??`${y}Fn`,w=z||($.method==="post"?"data":"params");x[X]=G=>V({...$,url:typeof P=="function"?P(G):P,[w]:G})}),x};var U=x},321:function(n,i,e){var o=e(1090);const r=()=>o.tOc.get("language")||(0,o.Vcq)();i.Z=r},2827:function(n,i,e){var o=e(1090),r=e(6771),t=e(2168),l=e(8024);const u=(s=null)=>{const a=typeof r.Z=="function"?(0,r.Z)(t.uV):[];if(s!=null)return a.find(v=>v.key===s)??a[0]??{};const p=o.tOc.get("theme")??a[0]??{};return(0,l.Y)()?a[0]??{}:p};i.Z=u},8745:function(n,i){i.Z={}},8024:function(n,i,e){e.d(i,{Y:function(){return r}});var o=e(2827);const r=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,t=l=>{if(!window.matchMedia)return;window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",s=>{l((0,o.Z)())},!1)};i.Z=t},7643:function(n,i,e){e.d(i,{a0:function(){return l},kS:function(){return u},pt:function(){return s}});var o=e(1090),r=e(7201),t=e(8630);const l=(a="")=>location.href=a?(0,o.qg7)(t.Bj?`${t.LJ}${a}`:`${t.LJ}/#/${a}`):t.LJ||"/",u=a=>{try{!a&&r.Z.logoutFn()}catch{}o.tOc.rm("token"),l("/user/signin")},s=()=>o.tOc.get("token")},9876:function(n){n.exports=JSON.parse('{"u2":"huxy-admin","i8":"1.5.0"}')}},q={};function d(n){var i=q[n];if(i!==void 0)return i.exports;var e=q[n]={exports:{}};return _[n](e,e.exports,d),e.exports}d.m=_,function(){var n=[];d.O=function(i,e,o,r){if(e){r=r||0;for(var t=n.length;t>0&&n[t-1][2]>r;t--)n[t]=n[t-1];n[t]=[e,o,r];return}for(var l=1/0,t=0;t<n.length;t++){for(var e=n[t][0],o=n[t][1],r=n[t][2],u=!0,s=0;s<e.length;s++)(r&!1||l>=r)&&Object.keys(d.O).every(function(E){return d.O[E](e[s])})?e.splice(s--,1):(u=!1,r<l&&(l=r));if(u){n.splice(t--,1);var a=o();a!==void 0&&(i=a)}}return i}}(),function(){d.n=function(n){var i=n&&n.__esModule?function(){return n.default}:function(){return n};return d.d(i,{a:i}),i}}(),function(){var n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i;d.t=function(e,o){if(o&1&&(e=this(e)),o&8||typeof e=="object"&&e&&(o&4&&e.__esModule||o&16&&typeof e.then=="function"))return e;var r=Object.create(null);d.r(r);var t={};i=i||[null,n({}),n([]),n(n)];for(var l=o&2&&e;typeof l=="object"&&!~i.indexOf(l);l=n(l))Object.getOwnPropertyNames(l).forEach(function(u){t[u]=function(){return e[u]}});return t.default=function(){return e},d.d(r,t),r}}(),function(){d.d=function(n,i){for(var e in i)d.o(i,e)&&!d.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:i[e]})}}(),function(){d.f={},d.e=function(n){return Promise.all(Object.keys(d.f).reduce(function(i,e){return d.f[e](n,i),i},[]))}}(),function(){d.u=function(n){return"js/"+n+"_"+{274:"c04f2023",443:"8192ed18",466:"20b71958",713:"dfa166db",790:"ae50341b",853:"dfc909e2"}[n]+".chunk.js"}}(),function(){d.miniCssF=function(n){return"css/"+n+"_"+n+"_"+{443:"65af2bd0",466:"3ee95983",790:"833c0f37",853:"6ca0545f"}[n]+".css"}}(),function(){d.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)}}(),function(){var n={};d.l=function(i,e,o,r){if(n[i]){n[i].push(e);return}var t,l;if(o!==void 0)for(var u=document.getElementsByTagName("script"),s=0;s<u.length;s++){var a=u[s];if(a.getAttribute("src")==i){t=a;break}}t||(l=!0,t=document.createElement("script"),t.type="module",t.charset="utf-8",t.timeout=120,d.nc&&t.setAttribute("nonce",d.nc),t.src=i),n[i]=[e];var p=function(b,B){t.onerror=t.onload=null,clearTimeout(v);var E=n[i];if(delete n[i],t.parentNode&&t.parentNode.removeChild(t),E&&E.forEach(function(A){return A(B)}),b)return b(B)},v=setTimeout(p.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=p.bind(null,t.onerror),t.onload=p.bind(null,t.onload),l&&document.head.appendChild(t)}}(),function(){d.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){d.p="/huxy-admin/"}(),function(){if(!(typeof document>"u")){var n=function(r,t,l,u,s){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var p=function(v){if(a.onerror=a.onload=null,v.type==="load")u();else{var b=v&&(v.type==="load"?"missing":v.type),B=v&&v.target&&v.target.href||t,E=new Error("Loading CSS chunk "+r+` failed.
(`+B+")");E.code="CSS_CHUNK_LOAD_FAILED",E.type=b,E.request=B,a.parentNode&&a.parentNode.removeChild(a),s(E)}};return a.onerror=a.onload=p,a.href=t,l?l.parentNode.insertBefore(a,l.nextSibling):document.head.appendChild(a),a},i=function(r,t){for(var l=document.getElementsByTagName("link"),u=0;u<l.length;u++){var s=l[u],a=s.getAttribute("data-href")||s.getAttribute("href");if(s.rel==="stylesheet"&&(a===r||a===t))return s}for(var p=document.getElementsByTagName("style"),u=0;u<p.length;u++){var s=p[u],a=s.getAttribute("data-href");if(a===r||a===t)return s}},e=function(r){return new Promise(function(t,l){var u=d.miniCssF(r),s=d.p+u;if(i(u,s))return t();n(r,s,null,t,l)})},o={143:0};d.f.miniCss=function(r,t){var l={443:1,466:1,790:1,853:1};o[r]?t.push(o[r]):o[r]!==0&&l[r]&&t.push(o[r]=e(r).then(function(){o[r]=0},function(u){throw delete o[r],u}))}}}(),function(){var n={143:0};d.f.j=function(o,r){var t=d.o(n,o)?n[o]:void 0;if(t!==0)if(t)r.push(t[2]);else{var l=new Promise(function(p,v){t=n[o]=[p,v]});r.push(t[2]=l);var u=d.p+d.u(o),s=new Error,a=function(p){if(d.o(n,o)&&(t=n[o],t!==0&&(n[o]=void 0),t)){var v=p&&(p.type==="load"?"missing":p.type),b=p&&p.target&&p.target.src;s.message="Loading chunk "+o+` failed.
(`+v+": "+b+")",s.name="ChunkLoadError",s.type=v,s.request=b,t[1](s)}};d.l(u,a,"chunk-"+o,o)}},d.O.j=function(o){return n[o]===0};var i=function(o,r){var t=r[0],l=r[1],u=r[2],s,a,p=0;if(t.some(function(b){return n[b]!==0})){for(s in l)d.o(l,s)&&(d.m[s]=l[s]);if(u)var v=u(d)}for(o&&o(r);p<t.length;p++)a=t[p],d.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return d.O(v)},e=self.webpackChunk=self.webpackChunk||[];e.forEach(i.bind(null,0)),e.push=i.bind(null,e.push.bind(e))}();var ee=d.O(void 0,[484,506],function(){return d(6544)});ee=d.O(ee);
