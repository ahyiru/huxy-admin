var ct={74582:function(e,l,t){var o={"./en":[89572,966],"./en/":[89572,966],"./en/index":[89572,966],"./en/index.js":[89572,966],"./en/login":[73609,966],"./en/login.js":[73609,966],"./en/main":[92939,966],"./en/main.js":[92939,966],"./en/nav":[82566,966],"./en/nav.js":[82566,966],"./en/router":[62047,966],"./en/router.js":[62047,966],"./en/theme":[90537,966],"./en/theme.js":[90537,966],"./zh":[53121,114],"./zh/":[53121,114],"./zh/index":[53121,114],"./zh/index.js":[53121,114],"./zh/login":[65852,114],"./zh/login.js":[65852,114],"./zh/main":[6896,114],"./zh/main.js":[6896,114],"./zh/nav":[16520,114],"./zh/nav.js":[16520,114],"./zh/router":[74104,114],"./zh/router.js":[74104,114],"./zh/theme":[77792,114],"./zh/theme.js":[77792,114]};function s(n){if(!t.o(o,n))return Promise.resolve().then(function(){var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a});var i=o[n],f=i[0];return t.e(i[1]).then(function(){return t(f)})}s.keys=function(){return Object.keys(o)},s.id=74582,e.exports=s},32651:function(e,l,t){var o=t(7003),s=t(69032);l.A=(0,o.J0)(s.A)},48393:function(e,l,t){t.d(l,{D3:function(){return f},_6:function(){return i}});var o=t(63696),s=t(17212);const n=({keys:a,children:r})=>{const[h]=(0,s.kc)();return(a&&h?.getValue(a))??r??""},i=()=>{const[a]=(0,s.kc)();return(0,o.useCallback)((r,h)=>(r&&a?.getValue(r))??h??"",[a])},f=(a,r)=>(a&&s.lV.getState()?.getValue(a))??r??"";l.Ay=n},51059:function(e,l,t){var o=t(62540),s=t(7470),n=t(63696),i=t(90246),f=t(7003),a=t(60608),r=t(2314),h=t(92291);const C=/\/projects\/router\/[0-9a-z]+\/[0-9a-z]+/,B=/\/playground\/utils\/list\/auth\/[0-9a-z]+/,P=d=>{r.A.confirm({title:"\u6570\u636E\u8FD8\u672A\u4FDD\u5B58\uFF0C\u662F\u5426\u786E\u8BA4\u79BB\u5F00\uFF1F",icon:(0,o.jsx)(h.A,{}),content:"",onOk(){d()},onCancel(){d(!1)}})};var z=[{path:"/user",title:"\u767B\u5F55\u6CE8\u518C",hideMenu:!0,component:()=>t.e(660).then(t.bind(t,39e3)),children:[{path:"/signin",name:"\u767B\u5F55",title:"\u767B\u5F55",component:()=>Promise.all([t.e(493),t.e(372),t.e(703),t.e(639),t.e(114),t.e(803),t.e(661),t.e(155),t.e(148)]).then(t.bind(t,75698))},{path:"/signup",name:"\u6CE8\u518C",component:()=>Promise.all([t.e(493),t.e(372),t.e(703),t.e(350),t.e(639),t.e(114),t.e(803),t.e(661),t.e(148)]).then(t.bind(t,35161))},{path:"/verifyEmail",name:"\u9A8C\u8BC1\u90AE\u7BB1",component:()=>Promise.all([t.e(493),t.e(372),t.e(703),t.e(350),t.e(639),t.e(114),t.e(803),t.e(661),t.e(148)]).then(t.bind(t,23148))},{path:"/setNewPwd",name:"\u91CD\u7F6E\u5BC6\u7801",component:()=>Promise.all([t.e(493),t.e(372),t.e(703),t.e(639),t.e(114),t.e(803),t.e(661),t.e(148)]).then(t.bind(t,64966))}]}],k=[...z,{path:"/404",name:"404",component:Promise.all([t.e(903),t.e(969),t.e(20)]).then(t.bind(t,81295)),hideMenu:!0}];const G=["/layout"];(0,a.GyK)((d,c)=>{const E=`${c.map(M=>M.path).join("")}${d.path}`;G.push(E)})(k);var F=G,O=t(74012),N=t(85312);const U=({error:d})=>{const c=d?.message?.slice(0,120).split(". ").slice(0,2).join(". ");(0,N.A)({actionType:"pageError",text:c})};var $=d=>(0,o.jsx)(f.lz,{...d,report:U});let R=null;window.addEventListener("beforeunload",d=>{d.target.location.pathname.indexOf("/user/")===0||d.target.location.hash.indexOf("#/user/")===0||(0,N.A)({actionType:"close",prevUuid:R})},!1);var Y=d=>{const c=(0,a.gZm)();(0,N.A)({actionType:"routeChange",uuid:c,prevUuid:R,...d}),R=c};const Z=`${O.w4?"":"#"}/`,et=O.w4?F:F.map(d=>`#${d}`),K=(d,c)=>{const{path:E,prevPath:M}=d;if(E.split("?")[0]===Z)return c({path:"/"});if(E!==M&&B.test(M))return P(c);c()};let T=!1;const A=d=>{const{path:c,name:E,stay:M}=d;let S;T||(S=M,T=!0),c.includes("/user/")||Y({path:c,name:E,firstLoadTime:S})};var st={browserRouter:O.w4,beforeRender:K,basepath:O.N5,errorBoundary:$,afterRender:A},lt=t(15413),at=t(58317),u=t(17212),g=t(71230),v=async()=>{const d=(0,g.A)();let c=await t(74582)(`./${d}`);return c=c.default??c,Object.setPrototypeOf(c,{getValue:E=>(0,a._WG)(c,E)}),u.lV.setState(c),{i18ns:c,language:d}},L=t(66954),I=()=>{const[d,c]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{(async()=>{c(!0);try{await(0,L.DV)();const{language:M}=await v();u.WN.setState(M),c(!1)}catch{c(!1)}})()},[]),[d]},X=t(98139),_=()=>{const{profileFn:d,listAuthFn:c,listRouterFn:E}=L.Ay,[M,S]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{const Q=async()=>{S(!0);try{const{code:y,result:D}=await d()||{};if(!D){(0,X.ri)(!0),S(!1);return}y===200&&(u.PK.setState(D),j(D))}catch{S(!1)}},j=async y=>{try{const{code:D,result:b}=await c({uid:y?._id})||{};D===200&&(u.d5.setState(b),ft(y))}catch{S(!1)}},ft=async y=>{try{const{code:D,result:b}=await E({projectId:y?.projectId||O.ti._id})||{};S(!1),D===200&&u.Yu.setState(b)}catch{S(!1)}};Q()},[]),[M]},tt=t(88585),w=t(32651),it={path:"/layout",name:"\u6846\u67B6\u914D\u7F6E",icon:"LayoutOutlined",component:()=>Promise.all([t.e(493),t.e(372),t.e(929),t.e(20),t.e(601),t.e(966),t.e(639),t.e(114),t.e(803),t.e(661),t.e(665),t.e(162),t.e(369),t.e(530),t.e(660)]).then(t.bind(t,47186))},gt={path:"/payer",name:"\u4F1A\u5458\u7BA1\u7406",icon:"AccountBookOutlined",hideMenu:!0,children:[{path:"/count",name:"\u5305\u6B21\u4F1A\u5458",icon:"FundViewOutlined",children:[{path:"/member",name:"\u5F00\u901A\u4F1A\u5458",icon:"ShoppingOutlined",component:()=>t.e(39).then(t.bind(t,29592))},{path:"/order",name:"\u8BA2\u5355\u5217\u8868",icon:"AuditOutlined",component:()=>Promise.all([t.e(493),t.e(372),t.e(20),t.e(703),t.e(929),t.e(601),t.e(966),t.e(249),t.e(334),t.e(639),t.e(114),t.e(803),t.e(661),t.e(665),t.e(162),t.e(466),t.e(963),t.e(988),t.e(39)]).then(t.bind(t,85229))},{path:"/pay",name:"\u652F\u4ED8",icon:"DollarOutlined",hideMenu:!0,component:()=>t.e(661).then(t.bind(t,77979))}]}]},vt=[{path:"/messages",name:"\u6D88\u606F\u7BA1\u7406",hideMenu:!0,component:()=>Promise.all([t.e(493),t.e(372),t.e(20),t.e(703),t.e(929),t.e(601),t.e(966),t.e(249),t.e(334),t.e(639),t.e(114),t.e(803),t.e(661),t.e(665),t.e(162),t.e(466),t.e(963),t.e(988),t.e(39)]).then(t.bind(t,66555))}],ot=d=>(0,o.jsx)("h1",{children:d.inputPath}),Ct=[{path:"/page1-2",name:"\u4E8C\u7EA7\u83DC\u53552",children:[{path:"/page1-2-1",name:"\u4E09\u7EA7\u83DC\u53551",icon:"RobotOutlined",component:ot},{path:"/page1-2-2",name:"\u4E09\u7EA7\u83DC\u53552",children:[{path:"/page1-2-2-1",name:"\u56DB\u7EA7\u83DC\u53551",component:ot},{path:"/page1-2-2-2",name:"\u56DB\u7EA7\u83DC\u53551-disabled",component:ot,linkProps:{disabled:!0}},{path:"/page1-2-2-3",name:"\u56DB\u7EA7\u83DC\u53553-_blank",component:ot,linkProps:{target:"_blank"}},{path:"/page1-2-2-4",name:"\u56DB\u7EA7\u83DC\u53554-hideMenu",component:ot,hideMenu:!0}]}]}],pt=[{path:"/configList",name:"configList",component:()=>Promise.all([t.e(493),t.e(372),t.e(20),t.e(703),t.e(929),t.e(601),t.e(966),t.e(249),t.e(334),t.e(639),t.e(114),t.e(803),t.e(661),t.e(665),t.e(162),t.e(466),t.e(963),t.e(988),t.e(735),t.e(39)]).then(t.bind(t,55426))},{path:"/configList/add",name:"\u6DFB\u52A0\u7528\u6237",hideMenu:!0,component:()=>Promise.all([t.e(493),t.e(372),t.e(20),t.e(703),t.e(929),t.e(601),t.e(114),t.e(639),t.e(803),t.e(661),t.e(665),t.e(162),t.e(369),t.e(148)]).then(t.bind(t,86066))},{path:"/configList/edit/:id",name:"\u7F16\u8F91\u7528\u6237",component:()=>Promise.all([t.e(493),t.e(372),t.e(20),t.e(703),t.e(929),t.e(601),t.e(114),t.e(639),t.e(803),t.e(661),t.e(665),t.e(162),t.e(369),t.e(148)]).then(t.bind(t,86066))},{path:"/configList/auth/:id",name:"\u8DEF\u7531\u6743\u9650\u8BBE\u7F6E",component:()=>Promise.all([t.e(493),t.e(372),t.e(20),t.e(966),t.e(114),t.e(639),t.e(803),t.e(665),t.e(963),t.e(632),t.e(124)]).then(t.bind(t,11690))}],yt={path:"/playground",name:"Playground",icon:"ToolOutlined",children:[...pt,{path:"/suspense",name:"suspense",icon:"CoffeeOutlined",children:[{path:"/suspense",name:"suspense",component:()=>Promise.all([t.e(493),t.e(372),t.e(20),t.e(929),t.e(601),t.e(966),t.e(249),t.e(334),t.e(639),t.e(114),t.e(803),t.e(661),t.e(665),t.e(162),t.e(466),t.e(963),t.e(988),t.e(703),t.e(124)]).then(t.bind(t,55938))},{path:"/errorboundary",name:"errorboundary",component:()=>t.e(124).then(t.bind(t,86906))}]},{path:"/canvas",name:"\u56FE\u5F62\u7ED8\u5236",icon:"PictureOutlined",children:[{path:"/canvas",name:"canvas",component:()=>Promise.all([t.e(493),t.e(20),t.e(929),t.e(249),t.e(114),t.e(639),t.e(661),t.e(466),t.e(402)]).then(t.bind(t,44110))},{path:"http://ihuxy.com:8081/",name:"webgl",linkProps:{target:"_blank"}}]},{path:"/materials",name:"css \u7269\u6599",children:[{path:"/animation",name:"\u52A8\u6548",component:()=>Promise.all([t.e(903),t.e(969),t.e(137)]).then(t.bind(t,51222))},{path:"/border",name:"\u8FB9\u6846",component:()=>Promise.all([t.e(903),t.e(969)]).then(t.bind(t,22541))},{path:"/chart",name:"\u56FE\u8868",component:()=>Promise.all([t.e(903),t.e(966)]).then(t.bind(t,27457))},{path:"/shape",name:"\u5F62\u72B6",component:()=>Promise.all([t.e(903),t.e(661)]).then(t.bind(t,53712))},{path:"/text",name:"\u6587\u672C",component:()=>Promise.all([t.e(903),t.e(137)]).then(t.bind(t,84530))}]},...Ct,{path:"/functions",name:"functions",icon:"CoffeeOutlined",children:[{path:"/icons",name:"icons",component:()=>t.e(20).then(t.bind(t,20479))},{path:"/panel",name:"panel",component:()=>Promise.all([t.e(372),t.e(20),t.e(929),t.e(639),t.e(803),t.e(661),t.e(493),t.e(660)]).then(t.bind(t,6224))},{path:"/styles",name:"styles",component:()=>Promise.all([t.e(493),t.e(639),t.e(114),t.e(124)]).then(t.bind(t,9873))},{path:"/modal",name:"modal",component:()=>t.e(124).then(t.bind(t,91587))},{path:"/tools",name:"tools",component:()=>t.e(124).then(t.bind(t,70381))}]}]};const At={path:"/profile",name:"\u4E2A\u4EBA\u4E2D\u5FC3",title:"\u4E2A\u4EBA\u4E2D\u5FC3",hideMenu:!0,component:()=>Promise.all([t.e(493),t.e(372),t.e(20),t.e(703),t.e(639),t.e(114),t.e(803),t.e(661),t.e(466),t.e(929),t.e(148)]).then(t.bind(t,65738))};var Et=[it,gt,yt,...vt,At],Bt=["/","/404","/layout","/profile","/messages","/user","/user/signin","/user/signup","/user/verifyEmail","/user/setNewPwd","/payer","/payer/count","/payer/count/member","/payer/count/order","/payer/count/pay"];const Pt=["/playground"],xt=d=>Pt.find(c=>d.indexOf(`${c}/`)!==0&&c!==d),Ot=[{path:"/",component:()=>Promise.all([t.e(493),t.e(372),t.e(20),t.e(929),t.e(601),t.e(966),t.e(639),t.e(114),t.e(803),t.e(661),t.e(665),t.e(162),t.e(369),t.e(530),t.e(600),t.e(660)]).then(t.bind(t,2219)),children:Et},...k];var Lt=(d,c,E,M)=>{const S=!(0,tt.li)(),Q=(0,a.GyK)(({denied:y,...D})=>(D.parentId.length>1&&(D.path=D.path.replace(D.parentId,"")),D))((0,a.o5o)(d||[])),j=(0,a.GBf)(Ot,Q,"path"),ft=[...new Set([...E||[],...Bt])];return(0,a.GyK)((y,D)=>{y.fullpath=[...D,y].map(Nt=>Nt.path).join("").replace("//","/"),y.id=y._id,y.name=c?.[y.fullpath]??y.name;let b=y.icon;b&&b!==!0&&(y.icon=(0,o.jsx)(w.A,{icon:b})),typeof y.denied=="function"&&(y.denied=y.denied()),!S&&xt(y.fullpath)&&(y.denied=y.denied||!ft.includes(y.fullpath))})(j)},rt=()=>{const d=u.lV.getState(),c=u.d5.getState(),E=u.Yu.getState();return{routers:Lt(E,d.router,c),title:d.title}};const dt=d=>{if(d.includes("rgb")){const c=d.match(/rgba?\((.+)\)/);if(c)return c[1].split(",").map(E=>E.trim()).slice(0,3).join()}return d};var Dt=(d,c=document.documentElement)=>{const E=d?.list?.colors?.["--navBgColor"],M=d?.list?.colors?.["--menuBgColor"],S=dt((0,a.qh3)(E)),Q=dt((0,a.qh3)(M)),j={...d?.list?.colors,...d?.list?.sizes,"--navBgRgb":S,"--menuBgRgb":Q};j["--appLinkColor"]=j["--linkColor"],j["--appLinkActiveColor"]=j["--linkActiveColor"],j["--appLinkHoverColor"]=j["--linkHoverColor"],j["--containerHeight"]=`${c.clientHeight}px`,(0,a.eCW)(c,j,!0)};const ut=({routerCfgs:d})=>{const{output:c,loading:E,updateRouter:M}=(0,i.rd)(d);return(0,n.useEffect)(()=>{const S=u.nc.subscribe(Dt);u.nc.setState((0,at.A)()),(0,lt.A)(u.nc.setState);const Q=u.WN.subscribe(async j=>{a.IGN.set("language",j),await v(),u.nc.setState((0,at.A)()),M(rt())});return()=>{Q(),S()}},[]),(0,o.jsxs)(o.Fragment,{children:[c,E?(0,o.jsx)(f.y$,{global:!0}):null]})},Mt=d=>{const[c]=_();return c?(0,o.jsx)(f.y$,{global:!0}):(0,o.jsx)(ut,{routerCfgs:{...st,...rt()}})};var St=()=>{const[d]=I();return d?(0,o.jsx)(f.y$,{global:!0}):(0,X.a$)()?(0,o.jsx)(Mt,{}):(0,o.jsx)(ut,{routerCfgs:{...st,...rt()}})},jt=()=>{!{configs:{browserRouter:!0,basepath:"/huxy-admin",buildTime:1708666075980,name:"\u9879\u76EE\u540D",_id:"\u5176\u5B83\u5C5E\u6027"}}.isDev&&"serviceWorker"in navigator&&(window.addEventListener("load",()=>{navigator.serviceWorker.register("/huxy-admin/service-worker.js").then(d=>{}).catch(d=>{})}),navigator.serviceWorker.addEventListener("controllerchange",()=>{window.location.reload()}))},Tt=()=>{jt();const{params:d}=(0,a.tIx)(location.href);d?.authed_token&&a.IGN.set("token",d.authed_token)},Zt={},Xt={};(0,s.H)(document.getElementById("app")).render((0,o.jsx)(St,{})),Tt()},66954:function(e,l,t){t.d(l,{Ay:function(){return at},DV:function(){return lt}});var o=t(60608),s=t(74012),n=t(98139);const i=Array.isArray(s.rG)?s.rG[0]?.prefix:s.rG?.prefix??"/api",f=[200,1e4],a=u=>u.json().then(g=>{g.code=g.code??u.status,g.message=g.message??g.msg??u.statusText;const{message:p,code:v}=g;if(v===401)throw(0,n.ri)(!0),{code:v,message:p};if(!f.includes(v))throw{code:v,message:p};return g}).catch(g=>{throw o.iUO.error(g.message),g}),r=async u=>{if(u.status!==200){let g;const p=await u.body.getReader(),{value:v}=await p.read(),W=new TextDecoder("utf8").decode(v);try{g=JSON.parse(W).message}catch{g=u.statusText}throw msgAlert.error(g),{message:g,code:u.status}}return u.body},h=u=>{if(u.status!==200)throw o.iUO.error(u.statusText),{message:u.statusText};const g=u.headers.get("Content-Disposition"),p=decodeURIComponent(g);return u.blob().then(v=>{v.code=v.code??u.status;const{message:L,msg:W,code:I}=v;if(!f.includes(I))throw{message:W||L};return{result:v,fileInfo:p}}).catch(v=>{throw o.iUO.error(v.message),v})},C=(0,o.GON)(a),B=(0,o.GON)(h),P=()=>({Authorization:`yiru ${o.IGN.get("token")||""}`}),x=({method:u,url:g,prefix:p,headers:v,...L})=>C(u)(`${p??i}${g}`,{headers:{...P(),...v},credentials:"omit",...L}),z=({method:u,url:g,prefix:p,headers:v,...L})=>(0,o.o8U)(C(u)(`${p??i}${g}`,{headers:{...P(),...v},...L})),H=({method:u,url:g,prefix:p,...v})=>B(u)(`${p??i}${g}`,{headers:P(),...v}),k=({method:u,url:g,prefix:p,headers:v,...L})=>fetcher(r)(u)(`${p??i}${g}`,{headers:{...P(),...v},...L}),G=({method:u,url:g,prefix:p,...v})=>fetcher()(u)(`${p??i}${g}`,{headers:P(),credentials:"omit",...v});var F=x,O=t(85312);const N=[401,403,429],U=["/report","/auth"];var $=u=>F(u).catch(g=>{const{url:p}=u,v=!N.includes(g.code),L=!U.find(W=>p.includes(`${W}/`));throw v&&L&&(0,O.A)({actionType:"fetchError",text:g.message,value:p}),Error(g.message)});const R=u=>[{name:"login",url:"/auth/login",method:"post"},{name:"logout",url:"/auth/logout"},{name:"signup",url:"/auth/signup",method:"post"},{name:"profile",url:"/users/profile",method:"get"},{name:"allUser",url:"/users/allUser"}];var Y=()=>({result:{list:R(s.ti?._id)}});const Z=async()=>(await(0,o.yy4)(500),{result:{total:5,list:[{_id:"123456",name:"admin",email:"admin@zys.com",github:"githubid",wechat:"openid",role:5,avatar:"https://pic2.zhimg.com/a2e68681a006bd3e60fd5b22d51cb629_im.jpg",active:1,creator:"huy",createtime:1620628987826,__v:0,updater:"zys",updatetime:1626883786994,projectId:"6098f12b099e1202a287acad",projectName:"\u63A7\u5236\u53F0"},{_id:"1234567",name:"demo",email:"demo@zys.com",github:"githubid1",role:3,avatar:"",active:1,creator:"huy",createtime:1620628987826,__v:0,updater:"zys",updatetime:1626883786994,projectId:"demo",projectName:"demo"},{_id:"12345678",name:"test",email:"test@zys.com",weixin:"openid1",role:2,avatar:"",active:1,creator:"huy",createtime:1620628987826,__v:0,updater:"zys",updatetime:1626883786994,projectId:"test",projectName:"test"},{_id:"123456789",name:"visitor",email:"visitor@zys.com",role:0,avatar:"",active:1,creator:"huy",createtime:1620628987826,__v:0,updater:"zys",updatetime:1626883786994,projectId:"visitor",projectName:"visitor"},{_id:"1234567890",name:"unverified",email:"unverified@zys.com",role:0,avatar:"",active:0,creator:"huy",createtime:1620628987826,__v:0,updater:"zys",updatetime:1626883786994,projectId:"unverified",projectName:"unverified"}],count:1,current:1,size:10}}),et=()=>(0,o.o8U)(Z()),K={allUserMock:Z},T={allUserSuspenseMock:et},A=u=>{u.filter(p=>["profile","allUser"].includes(p.name)).map(p=>{const{name:v,fnName:L,dataType:W,url:I,isDl:X,...q}=p,_=X?H:z,tt=L??`${v}Suspense`,w=W||q.method==="post"?"data":"params";T[tt]=(nt,...it)=>_({...q,url:typeof I=="function"?I(nt):I,[w]:nt,...it})})},st=async()=>{const{result:u}=await Y();return u?.list??[]},lt=async()=>{let u=[];try{u=await st()}catch{}return u.map(g=>{const{name:p,fnName:v,dataType:L,url:W,isDl:I,...X}=g,q=I?H:$,_=v??`${p}Fn`,tt=L||(X.method==="post"?"data":"params");K[_]=(w,...nt)=>q({...X,url:typeof W=="function"?W(w):W,[tt]:w,...nt})}),A(u),K};var at=K},85312:function(e,l,t){t.d(l,{A:function(){return G}});var o=t(90246),s=t(74012),n=t(98139),i=t(66954),f=t(60608),a=t(9510);const{type:r,version:h,model:C}=(0,f.NwO)(),{type:B,version:P}=(0,f.e3U)(),x=navigator.connection||navigator.mozConnection||navigator.webkitConnection;var H={osType:r,osVersion:h,osModel:C,browserType:B,browserVersion:P,language:window.navigator.language,netType:x?.type,evn:s.w4?"prod":"dev",appName:a.UU,appVersion:a.rE},G=F=>{if(!s.w4||!(0,n.a$)())return;const O=(0,o.aM)(),N=O?O.current.slice(-1)[0]??{}:{},{path:U,name:V,...$}=F,R=N.path??U??"",J={...H,...$,route:s.w4?R:R.slice(1),routeName:N.name??V};i.Ay.addReportFn?.(J)}},74012:function(e,l,t){t.d(l,{N5:function(){return s},aD:function(){return i},rG:function(){return n},ti:function(){return a},w4:function(){return o}});const{browserRouter:o,basepath:s,PROXY:n,buildTime:i,...f}={browserRouter:!0,basepath:"/huxy-admin",buildTime:1708666075980,name:"\u9879\u76EE\u540D",_id:"\u5176\u5B83\u5C5E\u6027"},a=f},57698:function(e,l,t){t.d(l,{A:function(){return K}});var o={};t.r(o),t.d(o,{theme1:function(){return R},theme2:function(){return J},theme3:function(){return Y},theme4:function(){return Z}});var i={sizes:{"--maxWidth":"100vw","--menuWidth":"20.4rem","--collapseWidth":"6rem","--collapseMenuWidth":"16.4rem","--headerHeight":"5.8rem","--footerHeight":"4.3rem","--breadHeight":"3.6rem","--menuItemHeight":"4rem"},colors:{"--appColor":"#495057","--appBgColor":"#f8f8fb","--bannerBgColor":"#2a3042","--navBgColor":"#ffffff","--menuBgColor":"#2a3042","--panelBgColor":"#ffffff","--linkColor":"#455a64","--linkHoverColor":"#2196f3","--linkActiveColor":"#42a5f5","--asideLinkColor":"#f0f0f0","--bannerLinkColor":"#f0f0f0","--borderColor":"#eff2f7"}},r={sizes:{"--maxWidth":"100vw","--menuWidth":"220px","--collapseWidth":"68px","--collapseMenuWidth":"180px","--headerHeight":"60px","--footerHeight":"50px","--breadHeight":"50px","--menuItemHeight":"48px"},colors:{"--appColor":"#495057","--appBgColor":"#f3f4f7","--bannerBgColor":"#ffffff","--navBgColor":"#fcfcfc","--menuBgColor":"#ffffff","--panelBgColor":"#ffffff","--linkColor":"#495057","--linkHoverColor":"#2196f3","--linkActiveColor":"#42a5f5","--borderColor":"#ebeef5"}},h=t(8547),P={sizes:{"--maxWidth":"100vw","--menuWidth":"196px","--collapseWidth":"60px","--collapseMenuWidth":"160px","--headerHeight":"56px","--footerHeight":"40px","--breadHeight":"40px","--menuItemHeight":"45px"},colors:{"--appColor":"#a6b0cf","--appBgColor":"#222736","--bannerBgColor":"#2a3042","--navBgColor":"#262b3c","--menuBgColor":"#2a3042","--panelBgColor":"#2a3042","--linkColor":"#a6b0cf","--linkHoverColor":"#ffffff","--linkActiveColor":"#ffffff","--borderColor":"#424e5a"}},H={sizes:{"--maxWidth":"86vw","--menuWidth":"200px","--collapseWidth":"60px","--collapseMenuWidth":"160px","--headerHeight":"56px","--footerHeight":"40px","--breadHeight":"40px","--menuItemHeight":"45px"},colors:{"--appColor":"#495057","--appBgColor":"#eaeff2","--bannerBgColor":"#21364a","--navBgColor":"#21364a","--menuBgColor":"#ffffff","--panelBgColor":"#ffffff","--linkColor":"#495057","--linkHoverColor":"#2196f3","--linkActiveColor":"#42a5f5","--headerLinkColor":"#ffffff","--bannerLinkColor":"#ffffff","--borderColor":"#eff2f7"}},F={sizes:{"--maxWidth":"1310px","--menuWidth":"200px","--collapseWidth":"60px","--collapseMenuWidth":"180px","--headerHeight":"60px","--footerHeight":"50px","--breadHeight":"50px","--menuItemHeight":"50px"},colors:{"--appColor":"#495057","--appBgColor":"#aab0c7","--bannerBgColor":"#9575ce","--navBgColor":"#9575ce","--menuBgColor":"#ffffff","--pageBgColor":"#e9edf0","--panelBgColor":"#ffffff","--linkColor":"#455a64","--linkHoverColor":"#2196f3","--linkActiveColor":"#42a5f5","--headerLinkColor":"#f0f0f0","--bannerLinkColor":"#f0f0f0","--borderColor":"#d0d0d0"}};const O={"--maxWidth":"100vw","--menuWidth":"220px","--collapseWidth":"68px","--collapseMenuWidth":"180px","--headerHeight":"60px","--footerHeight":"50px","--breadHeight":"50px","--menuItemHeight":"48px"},N={"--appColor":"#859abd","--appBgColor":"#243550","--bannerBgColor":"#334a60","--navBgColor":"#243550","--menuBgColor":"#334a60","--panelBgColor":"#334a60","--linkColor":"#859abd","--linkHoverColor":"#ffffff","--linkActiveColor":"#ffffff","--bannerLinkColor":"#ffffff","--borderColor":"#859abd"},U={"--appColor":"#24312b","--appBgColor":"#f9f7f2","--bannerBgColor":"#01170e","--navBgColor":"#ffffff","--menuBgColor":"#01170e","--panelBgColor":"#ffffff","--linkColor":"#24312b","--linkHoverColor":"#dc6962","--linkActiveColor":"#dc6962","--bannerLinkColor":"#fbfbfb","--asideLinkColor":"#f2f2f2","--borderColor":"#ebeef5"},V={"--appColor":"#334a60","--appBgColor":"#f2f2f2","--bannerBgColor":"#e6e5f2","--navBgColor":"#ffffff","--menuBgColor":"linear-gradient(to bottom, #e6e5f2, #4599cd)","--panelBgColor":"#ffffff","--linkColor":"#334a60","--linkHoverColor":"#ab47bc","--linkActiveColor":"#bc5090","--borderColor":"#ebeef5"},$={"--appColor":"#21364a","--appBgColor":"#c5cae9","--bannerBgColor":"#e6e5f2","--navBgColor":"linear-gradient(to right,#4568dc, #b06ab3)","--menuBgColor":"linear-gradient(to bottom,#e6e5f2, #4599cd)","--panelBgColor":"linear-gradient(to right,#beb9db, #7eb0d5)","--linkColor":"#21364a","--linkHoverColor":"#fb8c00","--linkActiveColor":"#fb8c00","--headerLinkColor":"#fcfcfc","--borderColor":"rgba(0, 0, 0, 0.12)"},R={sizes:O,colors:N},J={sizes:O,colors:U},Y={sizes:O,colors:V},Z={sizes:O,colors:$};var K=T=>[{name:T("theme.light","light"),key:"light",list:i,type:"theme"},{name:T("theme.light1","light1"),key:"light1",list:r,type:"theme"},{name:T("theme.dark","dark"),key:"dark",list:h.A,type:"theme"},{name:T("theme.dark1","dark1"),key:"dark1",list:P,type:"theme"},{name:T("theme.portal","portal"),key:"portal",list:H,type:"theme"},{name:T("theme.portal1","portal1"),key:"portal1",list:F,type:"theme"},...Object.keys(o).map(A=>({name:A,key:A,list:o[A],type:"theme"}))]},8547:function(e,l){const t={"--maxWidth":"100vw","--menuWidth":"20.4rem","--collapseWidth":"6rem","--collapseMenuWidth":"16.4rem","--headerHeight":"5.8rem","--footerHeight":"4.3rem","--breadHeight":"3.6rem","--menuItemHeight":"4rem"},o={"--appColor":"#ced4da","--appBgColor":"#303841","--bannerBgColor":"#37424c","--navBgColor":"#3c4752","--menuBgColor":"#37424c","--panelBgColor":"#36404a","--linkColor":"#ced4da","--linkHoverColor":"#ffffff","--linkActiveColor":"#ffffff","--borderColor":"#424e5a"};l.A={sizes:t,colors:o}},17212:function(e,l,t){t.d(l,{lV:function(){return F},WN:function(){return H},d2:function(){return V},d5:function(){return N},Yu:function(){return U},nc:function(){return G},kc:function(){return Y},Je:function(){return $},wD:function(){return R},WZ:function(){return T},Ct:function(){return J},PK:function(){return O}});var o=t(60608),s=t(87458);const n=(0,o.y$O)(),i=(0,o.g$M)(n),f=(0,s.g$)(n),a="lang-store",r="theme-store",h="menuType-store",C="i18ns-store",B="userInfo-store",P="permission-store",x="routers-store",z="notify-store",H=i(a),k=i(h),G=i(r,{}),F=i(C,{}),O=i(B,{}),N=i(P,[]),U=i(x,[]),V=i(z,0),$=A=>f(a,A),R=A=>f(h,A),J=(A={})=>f(r,A),Y=(A={})=>f(C,A),Z=(A={})=>useStore(userInfoName,A),et=(A=[])=>useStore(permissionName,A),K=(A=[])=>useStore(routersName,A),T=(A=0)=>f(z,A)},71230:function(e,l,t){var o=t(60608);const s=()=>o.IGN.get("language")||(0,o.CRY)();l.A=s},58317:function(e,l,t){var o=t(60608),s=t(57698),n=t(48393),i=t(15413);const f=(a=null)=>{const r=typeof s.A=="function"?(0,s.A)(n.D3):[];if(a!=null)return r.find(C=>C.key===a)??r[0]??{};const h=o.IGN.get("theme")??r[0]??{};return(0,i.u)()?r[0]??{}:h};l.A=f},69032:function(e,l,t){var o=t(72453);l.A=o},88585:function(e,l,t){t.d(l,{li:function(){return n}});var o=t(17212);const s=()=>o.PK.getState(),n=()=>s()?.role!==5,i=()=>s()?.payCount},15413:function(e,l,t){t.d(l,{u:function(){return s}});var o=t(58317);const s=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,n=i=>{if(!window.matchMedia)return;window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",a=>{i((0,o.A)())},!1)};l.A=n},98139:function(e,l,t){t.d(l,{a$:function(){return a},gV:function(){return i},ri:function(){return f}});var o=t(60608),s=t(66954),n=t(74012);const i=(r="")=>location.href=r?(0,o.VT1)(n.w4?`${n.N5}${r}`:`${n.N5}/#/${r}`):n.N5||"/",f=r=>{try{!r&&s.Ay.logoutFn()}catch{}o.IGN.rm("token"),i("/user/signin")},a=()=>o.IGN.get("token")},9510:function(e){e.exports=JSON.parse('{"UU":"huxy-admin","rE":"1.6.0"}')}},mt={};function m(e){var l=mt[e];if(l!==void 0)return l.exports;var t=mt[e]={exports:{}};return ct[e].call(t.exports,t,t.exports,m),t.exports}m.m=ct,function(){var e=[];m.O=function(l,t,o,s){if(t){s=s||0;for(var n=e.length;n>0&&e[n-1][2]>s;n--)e[n]=e[n-1];e[n]=[t,o,s];return}for(var i=1/0,n=0;n<e.length;n++){for(var t=e[n][0],o=e[n][1],s=e[n][2],f=!0,a=0;a<t.length;a++)(s&!1||i>=s)&&Object.keys(m.O).every(function(x){return m.O[x](t[a])})?t.splice(a--,1):(f=!1,s<i&&(i=s));if(f){e.splice(n--,1);var r=o();r!==void 0&&(l=r)}}return l}}(),function(){m.n=function(e){var l=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(l,{a:l}),l}}(),function(){var e=Object.getPrototypeOf?function(t){return Object.getPrototypeOf(t)}:function(t){return t.__proto__},l;m.t=function(t,o){if(o&1&&(t=this(t)),o&8||typeof t=="object"&&t&&(o&4&&t.__esModule||o&16&&typeof t.then=="function"))return t;var s=Object.create(null);m.r(s);var n={};l=l||[null,e({}),e([]),e(e)];for(var i=o&2&&t;typeof i=="object"&&!~l.indexOf(i);i=e(i))Object.getOwnPropertyNames(i).forEach(function(f){n[f]=function(){return t[f]}});return n.default=function(){return t},m.d(s,n),s}}(),function(){m.d=function(e,l){for(var t in l)m.o(l,t)&&!m.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:l[t]})}}(),function(){m.f={},m.e=function(e){return Promise.all(Object.keys(m.f).reduce(function(l,t){return m.f[t](e,l),l},[]))}}(),function(){m.u=function(e){return"js/"+e+"_"+{20:"04054e11",39:"3b87ef51",114:"e57ff2e0",124:"65bd0f48",137:"1cf54ed2",148:"b887d80d",155:"ee19234e",162:"108d0210",249:"c0b79693",334:"1c91ba32",350:"2a9258c3",369:"0bea1d87",372:"86b2da7d",402:"3da8158e",466:"53e5b377",493:"ea6559da",530:"8a817adc",600:"46990f89",601:"a8f7796b",632:"fd29faa5",639:"7c49f7e3",660:"4ad66fd7",661:"e1f16203",665:"141eea37",703:"afcdbe53",735:"16343dd4",803:"6844c29d",903:"d9e74bdd",929:"bbcaecd8",963:"b9e2f156",966:"dda34fa7",969:"8f8364f6",988:"cb38d9a0"}[e]+".chunk.js"}}(),function(){m.miniCssF=function(e){return"css/"+e+"_"+e+"_"+{20:"032056d9",39:"1dd5eba7",114:"df76289a",124:"007bed26",148:"b13ca5da",660:"be2b2747",661:"cdd7e307"}[e]+".css"}}(),function(){m.o=function(e,l){return Object.prototype.hasOwnProperty.call(e,l)}}(),function(){var e={};m.l=function(l,t,o,s){if(e[l]){e[l].push(t);return}var n,i;if(o!==void 0)for(var f=document.getElementsByTagName("script"),a=0;a<f.length;a++){var r=f[a];if(r.getAttribute("src")==l){n=r;break}}n||(i=!0,n=document.createElement("script"),n.type="module",n.charset="utf-8",n.timeout=120,m.nc&&n.setAttribute("nonce",m.nc),n.src=l),e[l]=[t];var h=function(B,P){n.onerror=n.onload=null,clearTimeout(C);var x=e[l];if(delete e[l],n.parentNode&&n.parentNode.removeChild(n),x&&x.forEach(function(z){return z(P)}),B)return B(P)},C=setTimeout(h.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=h.bind(null,n.onerror),n.onload=h.bind(null,n.onload),i&&document.head.appendChild(n)}}(),function(){m.r=function(e){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){m.p="/huxy-admin/"}(),function(){if(!(typeof document>"u")){var e=function(s,n,i,f,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var h=function(C){if(r.onerror=r.onload=null,C.type==="load")f();else{var B=C&&C.type,P=C&&C.target&&C.target.href||n,x=new Error("Loading CSS chunk "+s+` failed.
(`+B+": "+P+")");x.name="ChunkLoadError",x.code="CSS_CHUNK_LOAD_FAILED",x.type=B,x.request=P,r.parentNode&&r.parentNode.removeChild(r),a(x)}};return r.onerror=r.onload=h,r.href=n,i?i.parentNode.insertBefore(r,i.nextSibling):document.head.appendChild(r),r},l=function(s,n){for(var i=document.getElementsByTagName("link"),f=0;f<i.length;f++){var a=i[f],r=a.getAttribute("data-href")||a.getAttribute("href");if(a.rel==="stylesheet"&&(r===s||r===n))return a}for(var h=document.getElementsByTagName("style"),f=0;f<h.length;f++){var a=h[f],r=a.getAttribute("data-href");if(r===s||r===n)return a}},t=function(s){return new Promise(function(n,i){var f=m.miniCssF(s),a=m.p+f;if(l(f,a))return n();e(s,a,null,n,i)})},o={524:0};m.f.miniCss=function(s,n){var i={20:1,39:1,114:1,124:1,148:1,660:1,661:1};o[s]?n.push(o[s]):o[s]!==0&&i[s]&&n.push(o[s]=t(s).then(function(){o[s]=0},function(f){throw delete o[s],f}))}}}(),function(){var e={524:0};m.f.j=function(o,s){var n=m.o(e,o)?e[o]:void 0;if(n!==0)if(n)s.push(n[2]);else{var i=new Promise(function(h,C){n=e[o]=[h,C]});s.push(n[2]=i);var f=m.p+m.u(o),a=new Error,r=function(h){if(m.o(e,o)&&(n=e[o],n!==0&&(e[o]=void 0),n)){var C=h&&(h.type==="load"?"missing":h.type),B=h&&h.target&&h.target.src;a.message="Loading chunk "+o+` failed.
(`+C+": "+B+")",a.name="ChunkLoadError",a.type=C,a.request=B,n[1](a)}};m.l(f,r,"chunk-"+o,o)}},m.O.j=function(o){return e[o]===0};var l=function(o,s){var n=s[0],i=s[1],f=s[2],a,r,h=0;if(n.some(function(B){return e[B]!==0})){for(a in i)m.o(i,a)&&(m.m[a]=i[a]);if(f)var C=f(m)}for(o&&o(s);h<n.length;h++)r=n[h],m.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return m.O(C)},t=self.webpackChunk=self.webpackChunk||[];t.forEach(l.bind(null,0)),t.push=l.bind(null,t.push.bind(t))}();var ht=m.O(void 0,[97,393,382,192,810,378,267,876,453,214,270,429,349],function(){return m(51059)});ht=m.O(ht);
