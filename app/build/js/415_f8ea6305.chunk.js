(self.webpackChunk=self.webpackChunk||[]).push([[415],{76408:function(L,x,t){t.d(x,{Z:function(){return a}});var e=t(24246),u={"h-btn":"dvZYe",link:"RHxmY",default:"f4yr7",outlineDefault:"kJKrM",info:"ZakFV",outlineInfo:"Zd_vm",success:"C4ThU",outlineSuccess:"i4_gW",warn:"WqYCn",outlineWarn:"Yt9hk",danger:"aATLw",outlineDanger:"YAbKM",sm:"TYtKw",lg:"HxrRu",block:"ojXq7",right:"koEUi","h-btn-group":"qIbso"},a=({className:m,...n})=>{const j=["h-btn",...m?.split(" ")??[]].filter(Boolean).map(o=>u[o]).join(" ");return(0,e.jsx)("button",{className:j,...n})}},81808:function(L,x,t){var e=t(24246),u=t(99074),h=t(74335);const a=({children:m,...n})=>(0,e.jsx)(h.mH,{...n,children:(0,e.jsx)(u.Z,{placement:"topLeft",title:m,children:m})});x.Z=a},56366:function(L,x,t){var e=t(24246),u=t(57982),h=t(24422),a=t(76408),m=t(35814);const n={width:"100%",height:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},j={width:"100px"},o={width:"100%",paddingRight:"50px",fontSize:"1.6rem",fontWeight:500,textAlign:"center"},E={maxWidth:"500px"},A=({back:I,title:C,actions:F=[],backText:f="\u8FD4\u56DE"})=>(0,e.jsx)(u.Z,{style:{height:"4.4rem"},children:(0,e.jsxs)("div",{style:n,children:[(0,e.jsx)("div",{style:j,children:(0,e.jsxs)(a.Z,{onClick:d=>typeof I=="function"?I():history.back(),className:"sm link",children:[(0,e.jsx)(h.Z,{icon:"ico-left"}),(0,e.jsx)("span",{children:(0,e.jsx)(m.ZP,{keys:"main.components.back",children:f})})]})}),C&&(0,e.jsx)("div",{style:o,children:C}),F.length?(0,e.jsx)("div",{style:E,children:F.map(({text:d,icon:p,className:O,style:D,...g},y)=>(0,e.jsxs)(a.Z,{className:`sm ${O??""}`,style:{marginLeft:y?12:0,...D},...g,children:[(0,e.jsx)(h.Z,{icon:p}),(0,e.jsx)("span",{children:d})]},d))}):null]})});x.Z=A},57982:function(L,x,t){var e=t(24246),u=t(74335);const h=({style:a,children:m,...n})=>(0,e.jsx)(u.s_,{style:{background:"var(--panelBgColor)",...a},...n,children:m});x.Z=h},93662:function(L,x,t){t.d(x,{J:function(){return j},X:function(){return n}});var e=t(24246),u=t(74335);const h={gutter:[12,12]},a={},m={sm:12,xs:12},n=({children:o,style:E,...A})=>(0,e.jsx)(u.X2,{...h,style:{...a,...E},...A,children:o}),j=({children:o,...E})=>(0,e.jsx)(u.JX,{...m,...E,children:o})},78801:function(L,x,t){var e=t(27378),u=t(18124);const h=(a,m=null,n,j=null)=>{const[o,E]=(0,u.r5)({}),A=(0,e.useCallback)(C=>a&&E({res:a({...j,...C})},n),[]);(0,e.useEffect)(()=>{A({...m})},[]);const{res:I}=o;return[{pending:I?.pending,data:I?.result},A]};x.Z=h},63043:function(L,x,t){t.r(x),t.d(x,{default:function(){return k}});var e=t(24246),u=t(27378),h=t(31734),a=t(77921),m=t(56921),n=t(43778),j=t(43051),o=t(74335),E=t(71090),A=t(18124),I=t(78801),C=t(56366),F=t(57982),f=t(35814),d=t(24422),O=S=>(0,E._O2)(Z=>{(0,E.rTd)(Z.children)||(Z.isLeaf=!0),Z.key=Z.key||Z.path,typeof Z.icon=="string"&&(Z.iconKey=Z.icon),Z.icon=(0,e.jsx)(d.Z,{icon:Z.icon||"EyeInvisibleOutlined"})})((0,E.$L2)(S)),D=t(32733),g=t(20867);const{getRouter:y,getAuthedRouter:M,setAuthedRouter:v}=g.apiList,{Search:P}=h.default,B={path:"",icon:"LayoutOutlined"};var k=S=>{const K=(0,f.kn)()("main.users.authFormText",{}),{getState:$}=S.history,{backState:N}=$(),[X,W]=(0,u.useState)([]),[V,H]=(0,A.Rx)(null),[Y]=(0,I.Z)(y,{projectId:D.Vb._id}),G=(0,u.useCallback)(async()=>{const{code:c,result:R,message:b}=await M({uid:S.params.id});c===200&&W(R||[])},[]);(0,u.useEffect)(()=>{G()},[]);const Q=(0,A.Nr)((c,R)=>{const{value:b}=c.target;H(R,b,"name","path")},500),_=async()=>{const{code:c,result:R,message:b}=await v({uid:S.params.id,authKeys:X.filter(Boolean)});c===200&&(E.ywV.success(`${b} ${K.auth_msg}`),S.router.push("/playground/configList"))},q=c=>{W(c)},ee=()=>{N?S.router.push(N):S.history.back()},{pending:te,data:w}=Y,s=O([{...B,name:K.root_name},...w||[]]),r=V||s||[],l=[];(0,E._O2)(c=>{(0,E.rTd)(c.children)&&l.push(c.path)})(r);const i=X.filter(c=>!l.includes(c));return(0,e.jsx)("div",{children:(0,e.jsxs)(o.X2,{children:[(0,e.jsx)(o.JX,{children:(0,e.jsx)(C.Z,{back:ee})}),(0,e.jsx)(o.JX,{children:(0,e.jsx)(F.Z,{children:(0,e.jsxs)(a.Z,{spinning:te,children:[(0,e.jsx)(P,{placeholder:"\u641C\u7D22...",allowClear:!0,enterButton:!0,style:{maxWidth:"240px",marginBottom:"12px"},onChange:c=>Q(c,w)}),(0,e.jsx)(m.Z,{showIcon:!0,defaultExpandAll:!0,switcherIcon:(0,e.jsx)(j.Z,{}),titleRender:c=>c.name,treeData:r,virtual:!1,checkable:!0,onCheck:q,checkedKeys:i}),(0,e.jsxs)("div",{style:{padding:"12px 16px"},children:[(0,e.jsx)(n.ZP,{type:"primary",htmlType:"submit",onClick:c=>_(),children:K.submit}),(0,e.jsx)(n.ZP,{style:{marginLeft:"12px"},onClick:()=>W([]),children:K.reset})]})]})})})]})})}},7578:function(L,x,t){t.r(x);var e=t(24246),u=t(27378),h=t(43778),a=t(74335),m=t(71090),n=t(93662),j=t(57982);const o=E=>{const[A,I]=(0,u.useState)(!1),[C,F]=(0,u.useState)(!1),[f,d]=(0,u.useState)(!1),[p,O]=(0,u.useState)(!1);return(0,u.useEffect)(()=>(0,m.UhT)(),[]),(0,e.jsxs)(n.X,{style:{height:"100vh"},children:[(0,e.jsx)(n.J,{children:(0,e.jsxs)(j.Z,{children:[(0,e.jsx)("div",{id:"portal-test",children:"portal demo"}),(0,e.jsx)(a.h_,{children:(0,e.jsx)("div",{style:{zIndex:100,position:"fixed",top:"40%",right:0,color:"var(--red2)"},children:"mounted at body"})})]})}),(0,e.jsx)(n.J,{children:(0,e.jsxs)(j.Z,{children:[(0,e.jsx)(h.ZP,{onClick:D=>I(!0),children:"openMask"}),(0,e.jsx)(a.zd,{open:A,close:()=>I(!1),delay:0,children:"mask test"})]})}),(0,e.jsx)(n.J,{children:(0,e.jsxs)(j.Z,{children:[(0,e.jsx)(h.ZP,{onClick:D=>F(!0),children:"openModal"}),(0,e.jsx)(a.u_,{open:C,close:()=>F(!1),delay:250,children:(0,e.jsx)("div",{children:"modal test"})})]})}),(0,e.jsx)(n.J,{children:(0,e.jsxs)(j.Z,{children:[(0,e.jsx)(h.ZP,{onClick:D=>d(!0),children:"openDrawer"}),(0,e.jsx)(a.dy,{open:f,close:()=>d(!1),children:(0,e.jsx)("div",{children:"drawer test"})})]})}),(0,e.jsx)(n.J,{children:(0,e.jsx)(j.Z,{children:(0,e.jsx)(a.Ud,{type:"vertical",dropList:(0,e.jsxs)("div",{children:[(0,e.jsx)("h4",{children:"list 1"}),(0,e.jsx)("h4",{children:"list 2"}),(0,e.jsx)("h4",{children:"list 3"})]}),children:(0,e.jsx)(h.ZP,{children:"openDrop"})})})}),(0,e.jsx)(n.J,{children:(0,e.jsxs)(j.Z,{children:[(0,e.jsx)(h.ZP,{onClick:D=>m.ywV.success("message success"),children:"success"}),(0,e.jsx)(h.ZP,{onClick:D=>m.ywV.warn("message warn"),children:"warn"}),(0,e.jsx)(h.ZP,{onClick:D=>m.ywV.error("message error"),children:"error"}),(0,e.jsx)(h.ZP,{onClick:D=>m.ywV.info("message info"),children:"info"})]})})]})};x.default=o},39838:function(L,x,t){t.r(x),t.d(x,{default:function(){return D}});var e=t(24246),u=t(27378),h=t(74335),a=t(93662),m=t(57982),n=t(81808),j=t(76408),o=t(71090),E=t(18124),A={};const I=({data:g=[]})=>{const y=(0,E.PQ)(),M=(v,P)=>{v.stopPropagation(),(0,o._O2)(B=>{P.value===B.value?P.list?.length?B.open=!P.open:B.active=!0:(B.open=!1,B.active=!1)})(g),y()};return(0,e.jsx)("div",{className:"menu-wrap",children:(0,e.jsx)("ul",{className:"menu-container",children:g.map((v,P)=>(0,e.jsx)(C,{li:v,itemClick:M},v.value))})})},C=({li:g,itemClick:y})=>{const M=(0,u.useRef)();return(0,E.Vd)(M,v=>g.open&&y(v,g)),(0,e.jsxs)("li",{ref:M,className:`${g.open?"open":""}`,onClick:v=>y(v,g),children:[(0,e.jsxs)("span",{className:`link menu-follow${g.active?" active":""}`,children:[(0,e.jsx)("span",{children:g.name}),g.list?.length?(0,e.jsx)("i",{className:`menu-angle-${g.open?"top":"bt"}`}):null]}),g.list?.length?(0,e.jsx)("ul",{className:"menu-arrow-rt",children:g.list.map(v=>(0,e.jsx)("li",{children:(0,e.jsx)("span",{className:"link menu-tooltip",tooltip:v.name,children:v.name})},v.value))}):null]})};var F=I;const f=[{key:"",name:"\u7EBF"},{key:"close",name:"\u5173\u95ED"},{key:"right",name:"\u53F3\u7BAD\u5934"},{key:"bottom",name:"\u4E0B\u7BAD\u5934"},{key:"play",name:"\u542F\u52A8"},{key:"play pause",name:"\u505C\u6B62"}],d=[{name:"menu1",value:"menu1"},{name:"menu2",value:"menu2",list:[{name:"menu2-1",value:"menu2-1"},{name:"menu2-2",value:"menu2-2"}]},{name:"menu3",value:"menu3",list:[{name:"menu3-1",value:"menu3-1"},{name:"menu3-2",value:"menu3-2"},{name:"menu3-3",value:"menu3-3"}]},{name:"menu4",value:"menu4"}],p=({state:g,name:y})=>(0,e.jsx)("div",{children:g[y]});var D=g=>{const[y,M]=(0,u.useState)(""),[v,P]=(0,u.useState)({});return(0,e.jsxs)(a.X,{children:[(0,e.jsx)(a.J,{span:6,children:(0,e.jsxs)(m.Z,{children:[(0,e.jsx)("div",{style:{width:200},children:(0,e.jsx)(n.Z,{children:"12233345657688967i8ijhfgrtrrfgthtgryhhyt"})}),(0,e.jsx)("div",{style:{width:200},children:(0,e.jsx)(n.Z,{children:"33333"})}),(0,e.jsx)("div",{style:{width:100},children:(0,e.jsx)(n.Z,{children:"12233345657688967i8ijhfgrtrrfgthtgryhhyt"})})]})}),(0,e.jsx)(a.J,{span:6,children:(0,e.jsxs)(m.Z,{children:[(0,e.jsx)("div",{style:{padding:20},children:(0,e.jsx)(h.PC,{type:y})}),(0,e.jsx)("div",{children:f.map(({key:B,name:T})=>(0,e.jsx)(j.Z,{style:{marginRight:10},type:B===y?"primary":"",onClick:k=>M(B),children:T},B))})]})}),(0,e.jsx)(a.J,{span:6,children:(0,e.jsx)(m.Z,{children:(0,e.jsx)(h.$j,{})})}),(0,e.jsx)(a.J,{span:6,children:(0,e.jsxs)(m.Z,{children:[(0,e.jsx)("div",{children:(0,h.AN)({error:"load error demo"})}),(0,e.jsx)(h.V7,{children:(0,e.jsx)(p,{state:v,name:"eb"})}),v&&(0,e.jsx)(j.Z,{onClick:B=>P(null),children:"load"})]})}),(0,e.jsx)(a.J,{children:(0,e.jsx)(m.Z,{style:{height:"300px"},children:(0,e.jsx)(F,{data:d})})})]})}},16046:function(L,x,t){t.r(x),t.d(x,{default:function(){return C}});var e=t(24246),u=t(27378),h=t(71090),a=t(74335),m=t(18124),n=t(93662),j={};const o=[{color:"rgba(0,0,0,.2)",height:"60%"},{color:"rgba(0,0,0,.15)",height:"70%"},{color:"rgba(0,0,0,.25)",height:"40%"},{color:"rgba(0,0,0,.3)",height:"80%"},{color:"rgba(0,0,0,.35)",height:"60%"},{color:"rgba(0,0,0,.30)",height:"90%"},{color:"rgba(0,0,0,.2)",height:"50%"},{color:"rgba(0,0,0,.3)",height:"15%"},{color:"rgba(0,0,0,.1)",height:"65%"},{color:"rgba(0,0,0,.15)",height:"45%"}];var A=F=>(0,e.jsxs)("div",{className:"skeleton-content",children:[(0,e.jsx)(a.X2,{gutter:8,children:[...new Array(4)].map((f,d)=>(0,e.jsx)(a.JX,{span:3,children:(0,e.jsxs)("div",{className:"skeleton-card",children:[(0,e.jsx)("div",{className:"left",children:(0,e.jsx)("div",{className:"img"})}),(0,e.jsxs)("div",{className:"right",children:[(0,e.jsx)("h4",{}),(0,e.jsx)("p",{})]})]})},d))}),(0,e.jsxs)(a.X2,{gutter:8,children:[(0,e.jsx)(a.JX,{span:8,children:(0,e.jsx)("div",{className:"sk-container",children:(0,e.jsx)("div",{className:"sk-table",children:(0,e.jsxs)("table",{children:[(0,e.jsx)("thead",{children:(0,e.jsx)("tr",{children:[...new Array(6)].map((f,d)=>(0,e.jsx)("th",{children:(0,e.jsx)("span",{})},`th-${d}`))})}),(0,e.jsx)("tbody",{children:[...new Array(5)].map((f,d)=>(0,e.jsx)("tr",{children:[...new Array(6)].map((p,O)=>(0,e.jsx)("td",{children:(0,e.jsx)("span",{})},`${d}-${O}`))},d))})]})})})}),(0,e.jsx)(a.JX,{span:4,children:(0,e.jsx)("div",{className:"chart-container",children:(0,e.jsx)("div",{className:"sk-piechart"})})})]}),(0,e.jsxs)(a.X2,{gutter:8,children:[(0,e.jsx)(a.JX,{span:6,children:(0,e.jsx)("div",{className:"chart-container",children:(0,e.jsx)("div",{className:"sk-barchart",children:o.map((f,d)=>{const D={"--space":"25px","--itemWidth":"30px","--bgColor":f.color,"--itemHeight":f.height,left:`${d*55}px`};return(0,e.jsx)("div",{className:"item",style:D},d)})})})}),(0,e.jsx)(a.JX,{span:6,children:(0,e.jsx)("div",{className:"sk-list",children:[...new Array(7)].map((f,d)=>(0,e.jsx)("div",{className:"item"},d))})})]})]}),C=F=>{const f=(0,u.useRef)(),d=(0,u.useRef)(),{width:p}=(0,m.Wy)(d,250);return(0,u.useEffect)(()=>{(0,h.f9u)({container:f})},[]),(0,e.jsxs)(n.X,{children:[(0,e.jsx)(n.J,{children:(0,e.jsx)(a.s_,{title:"watermark",children:(0,e.jsx)("div",{ref:f,style:{height:"300px"},children:(0,e.jsx)("span",{children:"hello world"})})})}),(0,e.jsx)(n.J,{children:(0,e.jsx)(a.s_,{ref:d,title:"skeleton",plugins:[()=>(0,e.jsxs)("div",{style:{padding:"0.3rem 2rem",fontSize:"1.2rem",color:"var(--appColor)"},style:{background:"var(--panelBgColor)"},children:["panelWidth: ",p]})],children:(0,e.jsx)(A,{})})})]})}},77851:function(L,x,t){t.r(x);var e=t(24246),u=t(27378),h=t(43778),a=t(74335),m=t(57982),n=t(93662),j=t(35814);const o=({state:f,name:d})=>(0,e.jsx)("div",{children:f[d]}),E=({title:f})=>(0,e.jsxs)(m.Z,{children:[(0,e.jsx)("h2",{children:f}),(0,e.jsx)("div",{children:(0,e.jsx)(a.AN,{error:new Error("loadError")})})]}),A=({title:f})=>(0,e.jsxs)(m.Z,{children:[(0,e.jsx)("h2",{children:f}),(0,e.jsx)(a.SV,{fallback:(d,p)=>(0,e.jsx)(a.AN,{error:d,info:p}),children:(0,e.jsx)(o,{state:null,name:"eb2"})})]}),I=({title:f})=>{const[d,p]=(0,u.useState)({eb3:"eb3"});return(0,e.jsxs)(m.Z,{children:[(0,e.jsxs)("div",{style:{overflow:"hidden"},children:[(0,e.jsx)("h2",{style:{float:"left"},children:f}),(0,e.jsx)(h.ZP,{style:{float:"right"},type:"primary",onClick:()=>p(null),children:"error"})]}),(0,e.jsx)(a.SV,{fallback:(O,D)=>(0,e.jsx)(a.AN,{error:O,info:D}),children:(0,e.jsx)(o,{state:d,name:"eb3"})})]})},C=({title:f})=>(0,e.jsxs)(m.Z,{children:[(0,e.jsx)("h2",{children:f}),(0,e.jsx)(a.V7,{children:(0,e.jsx)(o,{state:null,name:"eb4"})})]}),F=f=>{const d=(0,j.kn)();return(0,e.jsxs)("div",{children:[(0,e.jsxs)(n.X,{children:[(0,e.jsx)(n.J,{span:6,children:(0,e.jsx)(E,{title:d("main.suspense.loadError")})}),(0,e.jsx)(n.J,{span:6,children:(0,e.jsx)(A,{title:d("main.suspense.errorBoundary")})})]}),(0,e.jsxs)(n.X,{children:[(0,e.jsx)(n.J,{span:6,children:(0,e.jsx)(I,{title:d("main.suspense.handleErrorBoundary")})}),(0,e.jsx)(n.J,{span:6,children:(0,e.jsx)(C,{title:d("main.suspense.handleError")})})]})]})};x.default=F},20050:function(L,x,t){t.r(x),t.d(x,{default:function(){return g}});var e=t(24246),u=t(27378),h=t(82170),a=t(74335),m=t(57982),n=t(93662),j=t(35814),o=t(71090);const E=async y=>(await(0,o._vH)(2500),{code:200,msg:"success",result:{name:"huy",age:18}}),A=async y=>(await(0,o._vH)(4e3),{code:200,msg:"success",result:{list:[{name:"huy"},{name:"yiru"},{name:"test"}]}}),I=y=>(0,o.Lgs)(E(y)),C=y=>(0,o.Lgs)(A(y)),F=I(),f=C(),d=y=>[{dataIndex:"name",title:y.columns_title},{dataIndex:"email",title:y.columns_email}],p=({userinfo:y,title:M})=>{const{result:v}=y.read(),P=Object.keys(v).map(B=>({key:B,value:v[B]}));return(0,e.jsxs)(m.Z,{children:[(0,e.jsx)("h2",{children:M}),P.map(({key:B,value:T})=>(0,e.jsxs)("div",{children:[(0,e.jsxs)("span",{children:[B,"\uFF1A"]}),(0,e.jsx)("span",{children:T})]},B))]})},O=({users:y,title:M,i18nCfg:v})=>{const{result:P}=y.read();return(0,e.jsxs)(m.Z,{children:[(0,e.jsx)("h2",{children:M}),(0,e.jsx)(h.Z,{dataSource:P?.list??[],columns:d(v),rowKey:"name"})]})};var g=y=>{const v=(0,j.kn)()("main.suspense",{});return(0,e.jsx)("div",{children:(0,e.jsxs)(n.X,{children:[(0,e.jsx)(n.J,{span:6,children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(a.$j,{}),children:(0,e.jsx)(p,{userinfo:F,title:"sus-test1"})})}),(0,e.jsx)(n.J,{span:6,children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(a.$j,{}),children:(0,e.jsx)(O,{users:f,title:"sus-test2",i18nCfg:v})})})]})})}},90407:function(L,x,t){t.d(x,{FA:function(){return o},QN:function(){return e},Uy:function(){return u},bK:function(){return j}});const e=[{type:"vip1",label:"\u57FA\u7840\u7248",price:29,period:3,count:800,description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

800 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\uFF0C\u6709\u6548\u671F 3 \u4E2A\u6708\u3002`},{type:"vip2",label:"\u767D\u94F6\u7248",price:39,period:6,count:1500,description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

1500 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\uFF0C\u6709\u6548\u671F 6 \u4E2A\u6708\u3002`},{type:"vip3",label:"\u9EC4\u91D1\u7248",price:69,period:12,count:3e3,description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

3000 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\uFF0C\u6709\u6548\u671F 12 \u4E2A\u6708\u3002`}],u=[{value:0,label:"\u666E\u901A\u7528\u6237",price:0,period:0,name:"general",description:"\u6BCF\u5929 2 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002"},{value:1,label:"\u57FA\u7840\u4F1A\u5458",price:19,period:1,name:"vip1",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 50 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:2,label:"\u767D\u94F6\u4F1A\u5458",price:29,period:1,name:"vip2",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 100 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:3,label:"\u9EC4\u91D1\u4F1A\u5458",price:39,period:1,name:"vip3",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 200 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:4,label:"\u94BB\u77F3\u4F1A\u5458",price:49,period:1,name:"vip4",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 320 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`},{value:5,label:"\u8D85\u7EA7\u7BA1\u7406\u5458",price:1e4,period:1e4,name:"vip5",description:`\u63D0\u4F9B OpenAI API \u63A5\u53E3\u4EE3\u7406\u3002

\u6BCF\u5929 500 \u6B21 chatgpt \u5BF9\u8BDD\u673A\u4F1A\u3002`}],h=[{value:1,label:"1 \u4E2A\u6708"},{value:3,label:"3 \u4E2A\u6708"},{value:6,label:"6 \u4E2A\u6708"},{value:12,label:"12 \u4E2A\u6708"},{value:24,label:"24 \u4E2A\u6708"}],a=[{value:"get",label:"get"},{value:"post",label:"post"}],m=[{value:"data",label:"data"},{value:"params",label:"params"},{value:"form",label:"form"},{value:"formData",label:"formData"}],n=[{value:0,label:"\u666E\u901A",color:"green"},{value:1,label:"\u91CD\u8981",color:"orange"},{value:2,label:"\u6838\u5FC3",color:"red"}],j={labelCol:{span:4},wrapperCol:{span:16}},o={wrapperCol:{offset:4,span:16}},E={sm:12,xs:12},A={rowKey:"name",pagination:!1,scroll:{x:!0,y:!0},size:"small"}},20867:function(L,x,t){t.d(x,{BU:function(){return G},VW:function(){return q},apiList:function(){return H},rf:function(){return w},IR:function(){return _},Pu:function(){return Y},Rt:function(){return te},eA:function(){return Q}});var e={};t.r(e),t.d(e,{addRouter:function(){return T},addUser:function(){return y},allUser:function(){return P},deleteRouter:function(){return S},deleteUser:function(){return v},editRouter:function(){return k},editUser:function(){return M},getAuthedRouter:function(){return Z},getRouter:function(){return B},login:function(){return D},logout:function(){return g},projectList:function(){return O},setAuthedRouter:function(){return K}});var u=t(24246),h=t(55617),a=t(48272),m=t(43778),n=t(71090),j=t(90407);const o=async s=>(await(0,n._vH)(),{code:200,message:"success\uFF01",result:{}}),E=(s,r=10)=>[...Array(r)].map((l,i)=>({id:uuidv4(),...s})),A={name:"demo",email:"demo@gmail.com",password:"123456",role:2,token:(0,n.k$y)(),projectName:"demo",projectId:"demo-1",description:"demo",active:1,createtime:+new Date,updatetime:+new Date,creator:"huy",updater:"huy",avatar:"https://pic2.zhimg.com/a2e68681a006bd3e60fd5b22d51cb629_im.jpg",github:""},I={path:"",projectId:"demo-1",parentId:"",name:"",icon:"",redirect:"",hideMenu:!1,denied:!1,component:"",isRoot:!1,createtime:+new Date,updatetime:+new Date,creator:"huy",updater:"huy"},C=[{parentId:"",path:"/",name:"\u9996\u9875",icon:"HomeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620635990643},{parentId:"",path:"/user",name:"\u767B\u5F55\u6CE8\u518C",icon:"TeamOutlined",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636017796},{parentId:"",path:"/404",name:"404",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636048186},{parentId:"/user",path:"/user/signin",name:"\u767B\u5F55",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636070080},{parentId:"/user",path:"/user/signup",name:"\u6CE8\u518C",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636092363},{parentId:"/user",path:"/user/verifyEmail",name:"\u9A8C\u8BC1\u90AE\u7BB1",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636109839},{parentId:"/user",path:"/user/setNewPwd",name:"\u91CD\u7F6E\u5BC6\u7801",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636127522},{parentId:"/",path:"/layout",name:"\u6846\u67B6\u914D\u7F6E",icon:"LayoutOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636154481,updater:"zys",updatetime:1624872133851},{parentId:"/",path:"/projects",name:"\u9879\u76EE\u7BA1\u7406",icon:"ConsoleSqlOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636177773},{parentId:"/",path:"/projects/add",name:"\u6DFB\u52A0\u9879\u76EE",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636207200},{parentId:"/",path:"/projects/edit/:id",name:"\u7F16\u8F91\u9879\u76EE",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636226823},{parentId:"/",path:"/projects/router/:id",name:"\u9879\u76EE\u8DEF\u7531\u8BBE\u7F6E",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636245820},{parentId:"/",path:"/users",name:"\u7528\u6237\u7BA1\u7406",icon:"UsergroupAddOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636267387},{parentId:"/",path:"/users/add",name:"\u6DFB\u52A0\u7528\u6237",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636289415},{parentId:"/",path:"/users/edit/:id",name:"\u7F16\u8F91\u7528\u6237",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636307487},{parentId:"/",path:"/users/auth/:id",name:"\u8DEF\u7531\u6743\u9650\u8BBE\u7F6E",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636329861},{parentId:"/",path:"/profile",name:"\u4E2A\u4EBA\u4E2D\u5FC3",hideMenu:!0,denied:!1,creator:"zys",createtime:1620636349501},{parentId:"/",path:"/dashboard",name:"\u4EEA\u8868\u76D8",icon:"DashboardOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636376269},{parentId:"/",path:"/pages",name:"\u9875\u9762\u8BBE\u8BA1",icon:"DesktopOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636398998},{parentId:"/",path:"/apis",name:"\u63A5\u53E3\u7BA1\u7406",icon:"ClusterOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636421223},{parentId:"/",path:"/docs",name:"\u6587\u6863\u7BA1\u7406",icon:"FileMarkdownOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636442351},{parentId:"/",path:"/i18n",name:"\u8BED\u8A00\u7BA1\u7406",icon:"GlobalOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1620636467249},{parentId:"/",path:"/apis/add",name:"\u6DFB\u52A0\u63A5\u53E3",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690561030},{parentId:"/",path:"/apis/edit/:id",name:"\u7F16\u8F91\u63A5\u53E3",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690599153},{parentId:"/",path:"/apis/test/:id",name:"\u63A5\u53E3\u6D4B\u8BD5",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690623384},{parentId:"/",path:"/suspense",name:"suspense",icon:"CoffeeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690670034},{parentId:"/",path:"/canvas",name:"\u56FE\u5F62\u7ED8\u5236",icon:"AreaChartOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690702896},{parentId:"/",path:"/editor",name:"\u5BCC\u6587\u672C\u7F16\u8F91\u5668",icon:"EditOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1624690737041},{parentId:"/",path:"/low-code",name:"\u4F4E\u4EE3\u7801",icon:"CoffeeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882549254},{parentId:"/low-code",path:"/low-code/users/edit/:id",name:"\u7F16\u8F91\u7528\u6237",hideMenu:!0,denied:!1,creator:"zys",createtime:1626882672292},{parentId:"/low-code",path:"/low-code/users/add",name:"\u6DFB\u52A0\u7528\u6237",hideMenu:!0,denied:!1,creator:"zys",createtime:1626882700289},{parentId:"/low-code",path:"/low-code/users",name:"\u4E1A\u52A1\u7EC4\u4EF6",icon:"CodeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882742565},{parentId:"/low-code",path:"/low-code/ui",name:"UI\u7EC4\u4EF6",icon:"CodeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882785052},{parentId:"/low-code",path:"/low-code/dom",name:"\u539F\u751Fdom",icon:"CodeOutlined",hideMenu:!1,denied:!1,creator:"zys",createtime:1626882800008}],f=((s,r=10)=>[...Array(r)].map((l,i)=>({...s,_id:(0,n.k$y)(),name:`${s.name}-${i+1}`,email:`${s.name}${i+1}@gmail.com`,role:(0,n.hd2)(5),active:(0,n.yZP)()})))(A,500),d=C.map(s=>({...I,...s,_id:(0,n.k$y)()})),p=(0,n.MTn)();p.setState({users:f,routers:d});const O=[{_id:(0,n.k$y)(),name:"demo1"},{_id:(0,n.k$y)(),name:"demo2"}],D=async s=>{const r=await o(),i=p.getState("users").find(c=>s.name===c.name&&s.password===c.password);return{...r,result:i}},g=async s=>({...await o(),result:!0}),y=async s=>{const r=await o(),l={...s,_id:(0,n.k$y)()},i=p.getState("users");return i.push(l),p.setState({users:i}),{...r,result:l}},M=async s=>{const r=await o(),l=p.getState("users");let i=l.find(c=>c._id===s._id);return i&&(i={...i,...s},p.setState({users:l})),{...r,result:s}},v=async({ids:s})=>{const r=await o(),l=p.getState("users");return(s||[]).map(i=>{const c=l.findIndex(R=>R._id===i);c>-1&&l.splice(c,1)}),p.setState({users:l}),r},P=async({active:s,current:r,size:l,name:i,role:c})=>{const R=await o(),b=p.getState("users"),J=l*(r-1);let U=[];if(s!=null?U=b.filter(z=>z.active==s):U=[...b],c!=null&&(U=U.filter(z=>z.role===c)),i){const z=new RegExp(i,"gi");U=U.filter(se=>se.name.toString().match(z))}const ne=U.slice(J,J+l);return{...R,result:{current:r,size:l,total:U.length,list:ne}}},B=async()=>{const s=await o(),r=p.getState("routers");return{...s,result:r}},T=async s=>{const r=await o(),l=p.getState("routers"),i={...s,_id:(0,n.k$y)()};return l.push(i),p.setState({routers:l}),{...r,result:i}},k=async s=>{const r=await o(),l=p.getState("routers");let i=l.find(c=>c._id===s._id);return i&&(i={...i,...s},p.setState({routers:l})),{...r,result:s}},S=async s=>{const r=await o(),l=p.getState("routers"),i=l.findIndex(c=>c._id===s._id);return i>-1&&(l.splice(i,1),p.setState({routers:l})),r},Z=async()=>{const s=await o(),r=p.getState("authedRouter")||[];return{...s,result:r}},K=async s=>{const r=await o(),l=p.getState("authedRouter")||[],i=[...new Set([...l,...s?.authKeys??[]])];return p.setState({authedRouter:i}),{...r,result:i}};var $=t(81808);const N=()=>({render:s=>(0,u.jsx)($.Z,{children:s})});var W=(s,r,l=N())=>s.map(i=>({...l,...i,...r?.find(({dataIndex:c})=>c===i.dataIndex)}));const V=({index:s,style:r,item:l,isItemLoaded:i})=>{let c;return i(s)?c=l.name:c="Loading...",(0,u.jsx)("div",{style:{...r,borderBottom:"1px solid #333"},children:(0,u.jsx)("div",{style:{display:"flex",alignItems:"center",height:"100%"},children:c})})},H=e,Y=W,G=V,Q=[{key:1,value:"\u5DF2\u6FC0\u6D3B"},{key:0,value:"\u672A\u6FC0\u6D3B"}],_=[{type:"input",name:"name",label:"\u7528\u6237\u540D",props:{placeholder:"\u8BF7\u8F93\u5165",allowClear:!0,style:{width:"120px"}}},{type:"select",name:"role",label:"\u7B49\u7EA7",props:{placeholder:"\u8BF7\u9009\u62E9",allowClear:!0,style:{width:"100px"},options:j.Uy}}],q=(s,r)=>[{key:"add",type:"primary",label:"\u65B0\u589E",action:s.handleAdd},{key:"export",type:"default",label:"\u5BFC\u51FA",action:s.handleExport},{key:"handleDelete",type:"default",label:"\u6279\u91CF\u5220\u9664",action:s.handleDelete,disabled:r}],ee=[{key:"handleCheck",type:"link",label:"\u8BBE\u7F6E"},{key:"handleEdit",type:"link",label:"\u7F16\u8F91"},{key:"handleDelete",type:"link",label:"\u5220\u9664"}],te=[{dataIndex:"name",title:"\u7528\u6237\u540D"},{dataIndex:"email",title:"\u90AE\u7BB1"},{dataIndex:"active",title:"\u72B6\u6001"},{dataIndex:"github",title:"\u7ED1\u5B9AGitHub"},{dataIndex:"role",title:"\u7B49\u7EA7"},{dataIndex:"updatetime",title:"\u66F4\u65B0\u65F6\u95F4"},{dataIndex:"updater",title:"\u66F4\u65B0\u4EBA"},{dataIndex:"action",title:"\u64CD\u4F5C",align:"center"}],w=s=>[{dataIndex:"name",render:(r,l)=>(0,u.jsx)("span",{className:"link",onClick:()=>s.handleCheck(l),children:r})},{dataIndex:"email",render:r=>r.replace(/\S+(@\S+)/,"*****$1")},{dataIndex:"active",render:r=>r?(0,u.jsx)(h.Z,{color:"green",children:"\u5DF2\u6FC0\u6D3B"}):(0,u.jsx)(h.Z,{color:"red",children:"\u672A\u6FC0\u6D3B"})},{dataIndex:"github",render:r=>r?(0,u.jsx)(h.Z,{color:"green",children:"\u5DF2\u6FC0\u6D3B"}):(0,u.jsx)(h.Z,{color:"red",children:"\u672A\u6FC0\u6D3B"})},{dataIndex:"role",render:(r,l)=>j.Uy.find(i=>i.value===r)?.label??"-"},{dataIndex:"updatetime",render:(r,l)=>{const i=r||l.createtime||l.signuptime||+new Date;return(0,n.mrB)(new Date(i))}},{dataIndex:"updater",render:(r,l)=>r||l.creator},{dataIndex:"action",render:(r,l)=>{const c=Object.keys(s).map(R=>({...ee.find(b=>b.key===R),action:s[R]}));return(0,u.jsx)(a.Z,{children:c.map(({key:R,action:b,type:J,label:U})=>(0,u.jsx)(m.ZP,{type:J,size:"small",disabled:!1,danger:R==="handleDelete",onClick:()=>b(l),children:U},R))})}}]}}]);
