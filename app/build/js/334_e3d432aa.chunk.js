(self.webpackChunk=self.webpackChunk||[]).push([[334],{86665:function(Qe,E,l){l.d(E,{Z:function(){return xt}});var o=l(27378),Re=l(60042),M=l.n(Re),xe=l(26775),A=l(92746),it=l(649),B=l(11026),r=l(18808),h=l(50189),p=l(31542),b=l(25773),k=l(64649),$=l(83395),N=l(78730),S=o.forwardRef(function(e,t){var a=e.prefixCls,n=e.style,s=e.className,w=e.duration,L=w===void 0?4.5:w,V=e.eventKey,R=e.content,z=e.closable,U=e.closeIcon,_=U===void 0?"x":U,D=e.props,Z=e.onClick,W=e.onNoticeClose,pe=e.times,ie=e.hovering,de=o.useState(!1),Ee=(0,B.Z)(de,2),Me=Ee[0],G=Ee[1],Ue=ie||Me,Ye=function(){W(V)},ue=function(le){(le.key==="Enter"||le.code==="Enter"||le.keyCode===N.Z.ENTER)&&Ye()};o.useEffect(function(){if(!Ue&&L>0){var he=setTimeout(function(){Ye()},L*1e3);return function(){clearTimeout(he)}}},[L,Ue,pe]);var q="".concat(a,"-notice");return o.createElement("div",(0,b.Z)({},D,{ref:t,className:M()(q,s,(0,k.Z)({},"".concat(q,"-closable"),z)),style:n,onMouseEnter:function(le){var ve;G(!0),D==null||(ve=D.onMouseEnter)===null||ve===void 0||ve.call(D,le)},onMouseLeave:function(le){var ve;G(!1),D==null||(ve=D.onMouseLeave)===null||ve===void 0||ve.call(D,le)},onClick:Z}),o.createElement("div",{className:"".concat(q,"-content")},R),z&&o.createElement("a",{tabIndex:0,className:"".concat(q,"-close"),onKeyDown:ue,onClick:function(le){le.preventDefault(),le.stopPropagation(),Ye()}},_))}),oe=S,re=o.createContext({}),Te=function(t){var a=t.children,n=t.classNames;return o.createElement(re.Provider,{value:{classNames:n}},a)},$e=Te,ee=l(33940),Oe=8,Je=3,qe=16,ft=function(t){var a={offset:Oe,threshold:Je,gap:qe};if(t&&(0,ee.Z)(t)==="object"){var n,s,w;a.offset=(n=t.offset)!==null&&n!==void 0?n:Oe,a.threshold=(s=t.threshold)!==null&&s!==void 0?s:Je,a.gap=(w=t.gap)!==null&&w!==void 0?w:qe}return[!!t,a]},Ht=ft,Nt=["className","style","classNames","styles"],Pt=function(t){var a,n=t.configList,s=t.placement,w=t.prefixCls,L=t.className,V=t.style,R=t.motion,z=t.onAllNoticeRemoved,U=t.onNoticeClose,_=t.stack,D=(0,o.useContext)(re),Z=D.classNames,W=(0,o.useRef)({}),pe=(0,o.useState)(null),ie=(0,B.Z)(pe,2),de=ie[0],Ee=ie[1],Me=(0,o.useState)([]),G=(0,B.Z)(Me,2),Ue=G[0],Ye=G[1],ue=n.map(function(ht){return{config:ht,key:String(ht.key)}}),q=Ht(_),he=(0,B.Z)(q,2),le=he[0],ve=he[1],yt=ve.offset,It=ve.threshold,Dt=ve.gap,Lt=le&&(Ue.length>0||ue.length<=It),ro=typeof R=="function"?R(s):R;return(0,o.useEffect)(function(){le&&Ue.length>1&&Ye(function(ht){return ht.filter(function(Rt){return ue.some(function(Bt){var Kt=Bt.key;return Rt===Kt})})})},[Ue,ue,le]),(0,o.useEffect)(function(){var ht;if(le&&W.current[(ht=ue[ue.length-1])===null||ht===void 0?void 0:ht.key]){var Rt;Ee(W.current[(Rt=ue[ue.length-1])===null||Rt===void 0?void 0:Rt.key])}},[ue,le]),o.createElement($.V4,(0,b.Z)({key:s,className:M()(w,"".concat(w,"-").concat(s),Z?.list,L,(a={},(0,k.Z)(a,"".concat(w,"-stack"),!!le),(0,k.Z)(a,"".concat(w,"-stack-expanded"),Lt),a)),style:V,keys:ue,motionAppear:!0},ro,{onAllRemoved:function(){z(s)}}),function(ht,Rt){var Bt=ht.config,Kt=ht.className,no=ht.style,ao=ht.index,eo=Bt,Vt=eo.key,io=eo.times,St=String(Vt),Zt=Bt,lo=Zt.className,so=Zt.style,Wt=Zt.classNames,Ft=Zt.styles,co=(0,r.Z)(Zt,Nt),Gt=ue.findIndex(function(Yt){return Yt.key===St}),Ut={};if(le){var At=ue.length-1-(Gt>-1?Gt:ao-1),to=s==="top"||s==="bottom"?"-50%":"0";if(At>0){var Xt,Qt,Jt;Ut.height=Lt?(Xt=W.current[St])===null||Xt===void 0?void 0:Xt.offsetHeight:de?.offsetHeight;for(var oo=0,_t=0;_t<At;_t++){var qt;oo+=((qt=W.current[ue[ue.length-1-_t].key])===null||qt===void 0?void 0:qt.offsetHeight)+Dt}var uo=(Lt?oo:At*yt)*(s.startsWith("top")?1:-1),ho=!Lt&&de!==null&&de!==void 0&&de.offsetWidth&&(Qt=W.current[St])!==null&&Qt!==void 0&&Qt.offsetWidth?(de?.offsetWidth-yt*2*(At<3?At:3))/((Jt=W.current[St])===null||Jt===void 0?void 0:Jt.offsetWidth):1;Ut.transform="translate3d(".concat(to,", ").concat(uo,"px, 0) scaleX(").concat(ho,")")}else Ut.transform="translate3d(".concat(to,", 0, 0)")}return o.createElement("div",{ref:Rt,className:M()("".concat(w,"-notice-wrapper"),Kt,Wt?.wrapper),style:(0,h.Z)((0,h.Z)((0,h.Z)({},no),Ut),Ft?.wrapper),onMouseEnter:function(){return Ye(function(Tt){return Tt.includes(St)?Tt:[].concat((0,it.Z)(Tt),[St])})},onMouseLeave:function(){return Ye(function(Tt){return Tt.filter(function(fo){return fo!==St})})}},o.createElement(oe,(0,b.Z)({},co,{ref:function(Tt){Gt>-1?W.current[St]=Tt:delete W.current[St]},prefixCls:w,classNames:Wt,styles:Ft,className:M()(lo,Z?.notice),style:so,times:io,key:Vt,eventKey:Vt,onNoticeClose:U,hovering:le&&Ue.length>0})))})},zt=Pt,bt=o.forwardRef(function(e,t){var a=e.prefixCls,n=a===void 0?"rc-notification":a,s=e.container,w=e.motion,L=e.maxCount,V=e.className,R=e.style,z=e.onAllRemoved,U=e.stack,_=e.renderNotifications,D=o.useState([]),Z=(0,B.Z)(D,2),W=Z[0],pe=Z[1],ie=function(he){var le,ve=W.find(function(yt){return yt.key===he});ve==null||(le=ve.onClose)===null||le===void 0||le.call(ve),pe(function(yt){return yt.filter(function(It){return It.key!==he})})};o.useImperativeHandle(t,function(){return{open:function(he){pe(function(le){var ve=(0,it.Z)(le),yt=ve.findIndex(function(Lt){return Lt.key===he.key}),It=(0,h.Z)({},he);if(yt>=0){var Dt;It.times=(((Dt=le[yt])===null||Dt===void 0?void 0:Dt.times)||0)+1,ve[yt]=It}else It.times=0,ve.push(It);return L>0&&ve.length>L&&(ve=ve.slice(-L)),ve})},close:function(he){ie(he)},destroy:function(){pe([])}}});var de=o.useState({}),Ee=(0,B.Z)(de,2),Me=Ee[0],G=Ee[1];o.useEffect(function(){var q={};W.forEach(function(he){var le=he.placement,ve=le===void 0?"topRight":le;ve&&(q[ve]=q[ve]||[],q[ve].push(he))}),Object.keys(Me).forEach(function(he){q[he]=q[he]||[]}),G(q)},[W]);var Ue=function(he){G(function(le){var ve=(0,h.Z)({},le),yt=ve[he]||[];return yt.length||delete ve[he],ve})},Ye=o.useRef(!1);if(o.useEffect(function(){Object.keys(Me).length>0?Ye.current=!0:Ye.current&&(z?.(),Ye.current=!1)},[Me]),!s)return null;var ue=Object.keys(Me);return(0,p.createPortal)(o.createElement(o.Fragment,null,ue.map(function(q){var he=Me[q],le=o.createElement(zt,{key:q,configList:he,placement:q,prefixCls:n,className:V?.(q),style:R?.(q),motion:w,onNoticeClose:ie,onAllNoticeRemoved:Ue,stack:U});return _?_(le,{prefixCls:n,key:q}):le})),s)}),Et=bt,kt=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],wt=function(){return document.body},vt=0;function Mt(){for(var e={},t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];return a.forEach(function(s){s&&Object.keys(s).forEach(function(w){var L=s[w];L!==void 0&&(e[w]=L)})}),e}function mt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,a=t===void 0?wt:t,n=e.motion,s=e.prefixCls,w=e.maxCount,L=e.className,V=e.style,R=e.onAllRemoved,z=e.stack,U=e.renderNotifications,_=(0,r.Z)(e,kt),D=o.useState(),Z=(0,B.Z)(D,2),W=Z[0],pe=Z[1],ie=o.useRef(),de=o.createElement(Et,{container:W,ref:ie,prefixCls:s,motion:n,maxCount:w,className:L,style:V,onAllRemoved:R,stack:z,renderNotifications:U}),Ee=o.useState([]),Me=(0,B.Z)(Ee,2),G=Me[0],Ue=Me[1],Ye=o.useMemo(function(){return{open:function(q){var he=Mt(_,q);(he.key===null||he.key===void 0)&&(he.key="rc-notification-".concat(vt),vt+=1),Ue(function(le){return[].concat((0,it.Z)(le),[{type:"open",config:he}])})},close:function(q){Ue(function(he){return[].concat((0,it.Z)(he),[{type:"close",key:q}])})},destroy:function(){Ue(function(q){return[].concat((0,it.Z)(q),[{type:"destroy"}])})}}},[]);return o.useEffect(function(){pe(a())}),o.useEffect(function(){ie.current&&G.length&&(G.forEach(function(ue){switch(ue.type){case"open":ie.current.open(ue.config);break;case"close":ie.current.close(ue.key);break;case"destroy":ie.current.destroy();break}}),Ue(function(ue){return ue.filter(function(q){return!G.includes(q)})}))},[G]),[Ye,de]}var Ot=l(92916),d=l(14770),g=l(55222),T=l(53058),C=l(77597),x=l(93326),Ne=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const fe={info:o.createElement(C.Z,null),success:o.createElement(d.Z,null),error:o.createElement(g.Z,null),warning:o.createElement(T.Z,null),loading:o.createElement(x.Z,null)},_e=e=>{let{prefixCls:t,type:a,icon:n,children:s}=e;return o.createElement("div",{className:M()(`${t}-custom-content`,`${t}-${a}`)},n||fe[a],o.createElement("span",null,s))},et=e=>{const{prefixCls:t,className:a,type:n,icon:s,content:w}=e,L=Ne(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:V}=React.useContext(ConfigContext),R=t||V("message"),z=useCSSVarCls(R),[U,_]=useStyle(R,z);return U(React.createElement(Notice,Object.assign({},L,{prefixCls:R,className:classNames(a,_,`${R}-notice-pure-panel`,z),eventKey:"pure",duration:null,content:React.createElement(_e,{prefixCls:R,type:n,icon:s},w)})))};var Ae=null,se=l(71695),ne=l(2874),ye=l(72457),Pe=l(15305),Ke=l(5515);const je=e=>{const{componentCls:t,iconCls:a,boxShadow:n,colorText:s,colorSuccess:w,colorError:L,colorWarning:V,colorInfo:R,fontSizeLG:z,motionEaseInOutCirc:U,motionDurationSlow:_,marginXS:D,paddingXS:Z,borderRadiusLG:W,zIndexPopup:pe,contentPadding:ie,contentBg:de}=e,Ee=`${t}-notice`,Me=new se.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:Z,transform:"translateY(0)",opacity:1}}),G=new se.E4("MessageMoveOut",{"0%":{maxHeight:e.height,padding:Z,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),Ue={padding:Z,textAlign:"center",[`${t}-custom-content > ${a}`]:{verticalAlign:"text-bottom",marginInlineEnd:D,fontSize:z},[`${Ee}-content`]:{display:"inline-block",padding:ie,background:de,borderRadius:W,boxShadow:n,pointerEvents:"all"},[`${t}-success > ${a}`]:{color:w},[`${t}-error > ${a}`]:{color:L},[`${t}-warning > ${a}`]:{color:V},[`${t}-info > ${a},
      ${t}-loading > ${a}`]:{color:R}};return[{[t]:Object.assign(Object.assign({},(0,ye.Wf)(e)),{color:s,position:"fixed",top:D,width:"100%",pointerEvents:"none",zIndex:pe,[`${t}-move-up`]:{animationFillMode:"forwards"},[`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]:{animationName:Me,animationDuration:_,animationPlayState:"paused",animationTimingFunction:U},[`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${t}-move-up-leave`]:{animationName:G,animationDuration:_,animationPlayState:"paused",animationTimingFunction:U},[`${t}-move-up-leave${t}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[t]:{[`${Ee}-wrapper`]:Object.assign({},Ue)}},{[`${t}-notice-pure-panel`]:Object.assign(Object.assign({},Ue),{padding:0,textAlign:"start"})}]},c=e=>({zIndexPopup:e.zIndexPopupBase+ne.u6+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`});var u=(0,Pe.I$)("Message",e=>{const t=(0,Ke.TS)(e,{height:150});return[je(t)]},c);function H(e,t){return{motionName:t??`${e}-move-up`}}function P(e){let t;const a=new Promise(s=>{t=e(()=>{s(!0)})}),n=()=>{t?.()};return n.then=(s,w)=>a.then(s,w),n.promise=a,n}var te=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const Ie=8,Y=3,F=e=>{let{children:t,prefixCls:a}=e;const[n,s]=u(a);return n(o.createElement($e,{classNames:{list:s,notice:s}},t))},ge=(e,t)=>{let{prefixCls:a,key:n}=t;return o.createElement(F,{prefixCls:a,key:n},e)},Ce=o.forwardRef((e,t)=>{const{top:a,prefixCls:n,getContainer:s,maxCount:w,duration:L=Y,rtl:V,transitionName:R,onAllRemoved:z}=e,{getPrefixCls:U,getPopupContainer:_,message:D}=o.useContext(xe.E_),Z=n||U("message"),W=()=>({left:"50%",transform:"translateX(-50%)",top:a??Ie}),pe=()=>M()({[`${Z}-rtl`]:V}),ie=()=>H(Z,R),de=o.createElement("span",{className:`${Z}-close-x`},o.createElement(A.Z,{className:`${Z}-close-icon`})),[Ee,Me]=mt({prefixCls:Z,style:W,className:pe,motion:ie,closable:!1,closeIcon:de,duration:L,getContainer:()=>s?.()||_?.()||document.body,maxCount:w,onAllRemoved:z,renderNotifications:ge});return o.useImperativeHandle(t,()=>Object.assign(Object.assign({},Ee),{prefixCls:Z,message:D})),Me});let He=0;function Ve(e){const t=o.useRef(null),a=(0,Ot.ln)("Message");return[o.useMemo(()=>{const s=z=>{var U;(U=t.current)===null||U===void 0||U.close(z)},w=z=>{if(!t.current){const ue=()=>{};return ue.then=()=>{},ue}const{open:U,prefixCls:_,message:D}=t.current,Z=`${_}-notice`,{content:W,icon:pe,type:ie,key:de,className:Ee,style:Me,onClose:G}=z,Ue=te(z,["content","icon","type","key","className","style","onClose"]);let Ye=de;return Ye==null&&(He+=1,Ye=`antd-message-${He}`),P(ue=>(U(Object.assign(Object.assign({},Ue),{key:Ye,content:o.createElement(_e,{prefixCls:_,type:ie,icon:pe},W),placement:"top",className:M()(ie&&`${Z}-${ie}`,Ee,D?.className),style:Object.assign(Object.assign({},D?.style),Me),onClose:()=>{G?.(),ue()}})),()=>{s(Ye)}))},V={open:w,destroy:z=>{var U;z!==void 0?s(z):(U=t.current)===null||U===void 0||U.destroy()}};return["info","success","warning","error","loading"].forEach(z=>{const U=(_,D,Z)=>{let W;_&&typeof _=="object"&&"content"in _?W=_:W={content:_};let pe,ie;typeof D=="function"?ie=D:(pe=D,ie=Z);const de=Object.assign(Object.assign({onClose:ie,duration:pe},W),{type:z});return w(de)};V[z]=U}),V},[]),o.createElement(Ce,Object.assign({key:"message-holder"},e,{ref:t}))]}function j(e){return Ve(e)}var X=l(77719),be=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const we={info:o.createElement(C.Z,null),success:o.createElement(d.Z,null),error:o.createElement(g.Z,null),warning:o.createElement(T.Z,null),loading:o.createElement(x.Z,null)};function ke(e,t){return t===null||t===!1?null:t||o.createElement("span",{className:`${e}-close-x`},o.createElement(A.Z,{className:`${e}-close-icon`}))}const K={success:d.Z,info:C.Z,error:g.Z,warning:T.Z},rt=e=>{const{prefixCls:t,icon:a,type:n,message:s,description:w,btn:L,role:V="alert"}=e;let R=null;return a?R=o.createElement("span",{className:`${t}-icon`},a):n&&(R=o.createElement(K[n]||null,{className:M()(`${t}-icon`,`${t}-icon-${n}`)})),o.createElement("div",{className:M()({[`${t}-with-icon`]:R}),role:V},R,o.createElement("div",{className:`${t}-message`},s),o.createElement("div",{className:`${t}-description`},w),L&&o.createElement("div",{className:`${t}-btn`},L))},tt=e=>{const{prefixCls:t,className:a,icon:n,type:s,message:w,description:L,btn:V,closable:R=!0,closeIcon:z,className:U}=e,_=be(e,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:D}=React.useContext(ConfigContext),Z=t||D("notification"),W=`${Z}-notice`,pe=useCSSVarCls(Z),[ie,de]=useStyle(Z,pe);return ie(React.createElement("div",{className:classNames(`${W}-pure-panel`,de,a,pe)},React.createElement(PurePanelStyle,{prefixCls:Z}),React.createElement(Notice,Object.assign({},_,{prefixCls:Z,eventKey:"pure",duration:null,closable:R,className:classNames({notificationClassName:U}),closeIcon:ke(Z,z),content:React.createElement(rt,{prefixCls:W,icon:n,type:s,message:w,description:L,btn:V})}))))};var Ge=null,nt=e=>{const{componentCls:t,notificationMarginEdge:a,animationMaxHeight:n}=e,s=`${t}-notice`,w=new se.E4("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),L=new se.E4("antNotificationTopFadeIn",{"0%":{top:-n,opacity:0},"100%":{top:0,opacity:1}}),V=new se.E4("antNotificationBottomFadeIn",{"0%":{bottom:e.calc(n).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),R=new se.E4("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[t]:{[`&${t}-top, &${t}-bottom`]:{marginInline:0,[s]:{marginInline:"auto auto"}},[`&${t}-top`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:L}},[`&${t}-bottom`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:V}},[`&${t}-topRight, &${t}-bottomRight`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:w}},[`&${t}-topLeft, &${t}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:a,_skip_check_:!0},[s]:{marginInlineEnd:"auto",marginInlineStart:0},[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:R}}}}};const De=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],Se={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},ot=(e,t)=>{const{componentCls:a}=e;return{[`${a}-${t}`]:{[`&${a}-stack > ${a}-notice-wrapper`]:{[t.startsWith("top")?"top":"bottom"]:0,[Se[t]]:{value:0,_skip_check_:!0}}}}},pt=e=>{const t={};for(let a=1;a<e.notificationStackLayer;a++)t[`&:nth-last-child(${a+1})`]={overflow:"hidden",[`& > ${e.componentCls}-notice`]:{opacity:0,transition:`opacity ${e.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${e.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},t)},gt=e=>{const t={};for(let a=1;a<e.notificationStackLayer;a++)t[`&:nth-last-child(${a+1})`]={background:e.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},t)};var me=e=>{const{componentCls:t}=e;return Object.assign({[`${t}-stack`]:{[`& > ${t}-notice-wrapper`]:Object.assign({transition:`all ${e.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},pt(e))},[`${t}-stack:not(${t}-stack-expanded)`]:{[`& > ${t}-notice-wrapper`]:Object.assign({},gt(e))},[`${t}-stack${t}-stack-expanded`]:{[`& > ${t}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${e.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:e.margin,width:"100%",insetInline:0,bottom:e.calc(e.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},De.map(a=>ot(e,a)).reduce((a,n)=>Object.assign(Object.assign({},a),n),{}))};const st=e=>{const{iconCls:t,componentCls:a,boxShadow:n,fontSizeLG:s,notificationMarginBottom:w,borderRadiusLG:L,colorSuccess:V,colorInfo:R,colorWarning:z,colorError:U,colorTextHeading:_,notificationBg:D,notificationPadding:Z,notificationMarginEdge:W,fontSize:pe,lineHeight:ie,width:de,notificationIconSize:Ee,colorText:Me}=e,G=`${a}-notice`;return{position:"relative",marginBottom:w,marginInlineStart:"auto",background:D,borderRadius:L,boxShadow:n,[G]:{padding:Z,width:de,maxWidth:`calc(100vw - ${(0,se.bf)(e.calc(W).mul(2).equal())})`,overflow:"hidden",lineHeight:ie,wordWrap:"break-word"},[`${a}-close-icon`]:{fontSize:pe,cursor:"pointer"},[`${G}-message`]:{marginBottom:e.marginXS,color:_,fontSize:s,lineHeight:e.lineHeightLG},[`${G}-description`]:{fontSize:pe,color:Me},[`${G}-closable ${G}-message`]:{paddingInlineEnd:e.paddingLG},[`${G}-with-icon ${G}-message`]:{marginBottom:e.marginXS,marginInlineStart:e.calc(e.marginSM).add(Ee).equal(),fontSize:s},[`${G}-with-icon ${G}-description`]:{marginInlineStart:e.calc(e.marginSM).add(Ee).equal(),fontSize:pe},[`${G}-icon`]:{position:"absolute",fontSize:Ee,lineHeight:1,[`&-success${t}`]:{color:V},[`&-info${t}`]:{color:R},[`&-warning${t}`]:{color:z},[`&-error${t}`]:{color:U}},[`${G}-close`]:{position:"absolute",top:e.notificationPaddingVertical,insetInlineEnd:e.notificationPaddingHorizontal,color:e.colorIcon,outline:"none",width:e.notificationCloseButtonSize,height:e.notificationCloseButtonSize,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.closeBtnHoverBg}},[`${G}-btn`]:{float:"right",marginTop:e.marginSM}}},dt=e=>{const{componentCls:t,notificationMarginBottom:a,notificationMarginEdge:n,motionDurationMid:s,motionEaseInOut:w}=e,L=`${t}-notice`,V=new se.E4("antNotificationFadeOut",{"0%":{maxHeight:e.animationMaxHeight,marginBottom:a},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[t]:Object.assign(Object.assign({},(0,ye.Wf)(e)),{position:"fixed",zIndex:e.zIndexPopup,marginRight:{value:n,_skip_check_:!0},[`${t}-hook-holder`]:{position:"relative"},[`${t}-fade-appear-prepare`]:{opacity:"0 !important"},[`${t}-fade-enter, ${t}-fade-appear`]:{animationDuration:e.motionDurationMid,animationTimingFunction:w,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${t}-fade-leave`]:{animationTimingFunction:w,animationFillMode:"both",animationDuration:s,animationPlayState:"paused"},[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationPlayState:"running"},[`${t}-fade-leave${t}-fade-leave-active`]:{animationName:V,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${L}-btn`]:{float:"left"}}})},{[t]:{[`${L}-wrapper`]:Object.assign({},st(e))}}]},ct=e=>({zIndexPopup:e.zIndexPopupBase+ne.u6+50,width:384,closeBtnHoverBg:e.wireframe?"transparent":e.colorFillContent}),i=e=>{const t=e.paddingMD,a=e.paddingLG;return(0,Ke.TS)(e,{notificationBg:e.colorBgElevated,notificationPaddingVertical:t,notificationPaddingHorizontal:a,notificationIconSize:e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),notificationCloseButtonSize:e.calc(e.controlHeightLG).mul(.55).equal(),notificationMarginBottom:e.margin,notificationPadding:`${(0,se.bf)(e.paddingMD)} ${(0,se.bf)(e.paddingContentHorizontalLG)}`,notificationMarginEdge:e.marginLG,animationMaxHeight:150,notificationStackLayer:3})};var f=(0,Pe.I$)("Notification",e=>{const t=i(e);return[dt(t),nt(t),me(t)]},ct);function v(e,t,a){let n;switch(e){case"top":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:t,bottom:"auto"};break;case"topLeft":n={left:0,top:t,bottom:"auto"};break;case"topRight":n={right:0,top:t,bottom:"auto"};break;case"bottom":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:a};break;case"bottomLeft":n={left:0,top:"auto",bottom:a};break;default:n={right:0,top:"auto",bottom:a};break}return n}function m(e){return{motionName:`${e}-fade`}}var y=l(56318),I=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(a[n[s]]=e[n[s]]);return a};const O=24,ae=4.5,Q="topRight",ce=e=>{let{children:t,prefixCls:a}=e;const[n,s]=f(a);return n(o.createElement($e,{classNames:{list:s,notice:s}},t))},Be=(e,t)=>{let{prefixCls:a,key:n}=t;return o.createElement(ce,{prefixCls:a,key:n},e)},Ze=o.forwardRef((e,t)=>{const{top:a,bottom:n,prefixCls:s,getContainer:w,maxCount:L,rtl:V,onAllRemoved:R,stack:z}=e,{getPrefixCls:U,getPopupContainer:_,notification:D}=o.useContext(xe.E_),[,Z]=(0,y.ZP)(),W=s||U("notification"),pe=G=>v(G,a??O,n??O),ie=()=>M()({[`${W}-rtl`]:V}),de=()=>m(W),[Ee,Me]=mt({prefixCls:W,style:pe,className:ie,motion:de,closable:!0,closeIcon:ke(W),duration:ae,getContainer:()=>w?.()||_?.()||document.body,maxCount:L,onAllRemoved:R,renderNotifications:Be,stack:z===!1?!1:{threshold:typeof z=="object"?z?.threshold:void 0,offset:8,gap:Z.margin}});return o.useImperativeHandle(t,()=>Object.assign(Object.assign({},Ee),{prefixCls:W,notification:D})),Me});function J(e){const t=o.useRef(null),a=(0,Ot.ln)("Notification");return[o.useMemo(()=>{const s=R=>{var z;if(!t.current)return;const{open:U,prefixCls:_,notification:D}=t.current,Z=`${_}-notice`,{message:W,description:pe,icon:ie,type:de,btn:Ee,className:Me,style:G,role:Ue="alert",closeIcon:Ye}=R,ue=I(R,["message","description","icon","type","btn","className","style","role","closeIcon"]),q=ke(Z,Ye);return U(Object.assign(Object.assign({placement:(z=e?.placement)!==null&&z!==void 0?z:Q},ue),{content:o.createElement(rt,{prefixCls:Z,icon:ie,type:de,message:W,description:pe,btn:Ee,role:Ue}),className:M()(de&&`${Z}-${de}`,Me,D?.className),style:Object.assign(Object.assign({},D?.style),G),closeIcon:q,closable:!!q}))},L={open:s,destroy:R=>{var z,U;R!==void 0?(z=t.current)===null||z===void 0||z.close(R):(U=t.current)===null||U===void 0||U.destroy()}};return["success","info","warning","error"].forEach(R=>{L[R]=z=>s(Object.assign(Object.assign({},z),{type:R}))}),L},[]),o.createElement(Ze,Object.assign({key:"notification-holder"},e,{ref:t}))]}function Fe(e){return J(e)}const ze=o.createContext({});var at=o.createContext({message:{},notification:{},modal:{}});const Xe=e=>{const{componentCls:t,colorText:a,fontSize:n,lineHeight:s,fontFamily:w}=e;return{[t]:{color:a,fontSize:n,lineHeight:s,fontFamily:w}}},Ct=()=>({});var jt=(0,Pe.I$)("App",Xe,Ct);const $t=()=>o.useContext(at),ut=e=>{const{prefixCls:t,children:a,className:n,rootClassName:s,message:w,notification:L,style:V,component:R="div"}=e,{getPrefixCls:z}=(0,o.useContext)(xe.E_),U=z("app",t),[_,D]=jt(U),Z=M()(D,U,n,s),W=(0,o.useContext)(ze),pe=o.useMemo(()=>({message:Object.assign(Object.assign({},W.message),w),notification:Object.assign(Object.assign({},W.notification),L)}),[w,L,W.message,W.notification]),[ie,de]=j(pe.message),[Ee,Me]=Fe(pe.notification),[G,Ue]=(0,X.Z)(),Ye=o.useMemo(()=>({message:ie,notification:Ee,modal:G}),[ie,Ee,G]),ue=R===!1?o.Fragment:R,q={className:Z,style:V};return _(o.createElement(at.Provider,{value:Ye},o.createElement(ze.Provider,{value:pe},o.createElement(ue,Object.assign({},R===!1?void 0:q),Ue,de,Me,a))))};ut.useApp=$t;var xt=ut},58035:function(Qe,E,l){l.d(E,{Z:function(){return Ot}});var o=l(27378),Re=l(60042),M=l.n(Re),xe=l(83395),A=l(97933),it=l(93795),B=l(26775),r=l(71695),h=l(72457),p=l(9540),b=l(5515),k=l(15305);const $=new r.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),N=new r.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),S=new r.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),oe=new r.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),re=new r.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),Te=new r.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),$e=d=>{const{componentCls:g,iconCls:T,antCls:C,badgeShadowSize:x,motionDurationSlow:Ne,textFontSize:fe,textFontSizeSM:_e,statusSize:et,dotSize:Ae,textFontWeight:se,indicatorHeight:ne,indicatorHeightSM:ye,marginXS:Pe,calc:Ke}=d,je=`${C}-scroll-number`,c=(0,p.Z)(d,(u,H)=>{let{darkColor:P}=H;return{[`&${g} ${g}-color-${u}`]:{background:P,[`&:not(${g}-count)`]:{color:P}}}});return{[g]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,h.Wf)(d)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${g}-count`]:{zIndex:d.indicatorZIndex,minWidth:ne,height:ne,color:d.badgeTextColor,fontWeight:se,fontSize:fe,lineHeight:(0,r.bf)(ne),whiteSpace:"nowrap",textAlign:"center",background:d.badgeColor,borderRadius:Ke(ne).div(2).equal(),boxShadow:`0 0 0 ${(0,r.bf)(x)} ${d.badgeShadowColor}`,transition:`background ${d.motionDurationMid}`,a:{color:d.badgeTextColor},"a:hover":{color:d.badgeTextColor},"a:hover &":{background:d.badgeColorHover}},[`${g}-count-sm`]:{minWidth:ye,height:ye,fontSize:_e,lineHeight:(0,r.bf)(ye),borderRadius:Ke(ye).div(2).equal()},[`${g}-multiple-words`]:{padding:`0 ${(0,r.bf)(d.paddingXS)}`,bdi:{unicodeBidi:"plaintext"}},[`${g}-dot`]:{zIndex:d.indicatorZIndex,width:Ae,minWidth:Ae,height:Ae,background:d.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${(0,r.bf)(x)} ${d.badgeShadowColor}`},[`${g}-dot${je}`]:{transition:`background ${Ne}`},[`${g}-count, ${g}-dot, ${je}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${T}-spin`]:{animationName:Te,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${g}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${g}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:et,height:et,verticalAlign:"middle",borderRadius:"50%"},[`${g}-status-success`]:{backgroundColor:d.colorSuccess},[`${g}-status-processing`]:{overflow:"visible",color:d.colorPrimary,backgroundColor:d.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:x,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:$,animationDuration:d.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${g}-status-default`]:{backgroundColor:d.colorTextPlaceholder},[`${g}-status-error`]:{backgroundColor:d.colorError},[`${g}-status-warning`]:{backgroundColor:d.colorWarning},[`${g}-status-text`]:{marginInlineStart:Pe,color:d.colorText,fontSize:d.fontSize}}}),c),{[`${g}-zoom-appear, ${g}-zoom-enter`]:{animationName:N,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack,animationFillMode:"both"},[`${g}-zoom-leave`]:{animationName:S,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack,animationFillMode:"both"},[`&${g}-not-a-wrapper`]:{[`${g}-zoom-appear, ${g}-zoom-enter`]:{animationName:oe,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack},[`${g}-zoom-leave`]:{animationName:re,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack},[`&:not(${g}-status)`]:{verticalAlign:"middle"},[`${je}-custom-component, ${g}-count`]:{transform:"none"},[`${je}-custom-component, ${je}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${je}`]:{overflow:"hidden",[`${je}-only`]:{position:"relative",display:"inline-block",height:ne,transition:`all ${d.motionDurationSlow} ${d.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${je}-only-unit`]:{height:ne,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${je}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${g}-count, ${g}-dot, ${je}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},ee=d=>{const{fontHeight:g,lineWidth:T,marginXS:C,colorBorderBg:x}=d,Ne=g,fe=T,_e=d.colorBgContainer,et=d.colorError,Ae=d.colorErrorHover;return(0,b.TS)(d,{badgeFontHeight:Ne,badgeShadowSize:fe,badgeTextColor:_e,badgeColor:et,badgeColorHover:Ae,badgeShadowColor:x,badgeProcessingDuration:"1.2s",badgeRibbonOffset:C,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},Oe=d=>{const{fontSize:g,lineHeight:T,fontSizeSM:C,lineWidth:x}=d;return{indicatorZIndex:"auto",indicatorHeight:Math.round(g*T)-2*x,indicatorHeightSM:g,dotSize:C/2,textFontSize:C,textFontSizeSM:C,textFontWeight:"normal",statusSize:C/2}};var Je=(0,k.I$)("Badge",d=>{const g=ee(d);return $e(g)},Oe);const qe=d=>{const{antCls:g,badgeFontHeight:T,marginXS:C,badgeRibbonOffset:x,calc:Ne}=d,fe=`${g}-ribbon`,_e=`${g}-ribbon-wrapper`,et=(0,p.Z)(d,(Ae,se)=>{let{darkColor:ne}=se;return{[`&${fe}-color-${Ae}`]:{background:ne,color:ne}}});return{[`${_e}`]:{position:"relative"},[`${fe}`]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,h.Wf)(d)),{position:"absolute",top:C,padding:`0 ${(0,r.bf)(d.paddingXS)}`,color:d.colorPrimary,lineHeight:(0,r.bf)(T),whiteSpace:"nowrap",backgroundColor:d.colorPrimary,borderRadius:d.borderRadiusSM,[`${fe}-text`]:{color:d.colorTextLightSolid},[`${fe}-corner`]:{position:"absolute",top:"100%",width:x,height:x,color:"currentcolor",border:`${(0,r.bf)(Ne(x).div(2).equal())} solid`,transform:d.badgeRibbonCornerTransform,transformOrigin:"top",filter:d.badgeRibbonCornerFilter}}),et),{[`&${fe}-placement-end`]:{insetInlineEnd:Ne(x).mul(-1).equal(),borderEndEndRadius:0,[`${fe}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${fe}-placement-start`]:{insetInlineStart:Ne(x).mul(-1).equal(),borderEndStartRadius:0,[`${fe}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var ft=(0,k.ZP)(["Badge","Ribbon"],d=>{const g=ee(d);return qe(g)},Oe),Nt=d=>{const{className:g,prefixCls:T,style:C,color:x,children:Ne,text:fe,placement:_e="end",rootClassName:et}=d,{getPrefixCls:Ae,direction:se}=o.useContext(B.E_),ne=Ae("ribbon",T),[ye,Pe]=ft(ne),Ke=(0,A.o2)(x,!1),je=M()(ne,`${ne}-placement-${_e}`,{[`${ne}-rtl`]:se==="rtl",[`${ne}-color-${x}`]:Ke},g),c={},u={};return x&&!Ke&&(c.background=x,u.color=x),ye(o.createElement("div",{className:M()(`${ne}-wrapper`,et,Pe)},Ne,o.createElement("div",{className:M()(je,Pe),style:Object.assign(Object.assign({},c),C)},o.createElement("span",{className:`${ne}-text`},fe),o.createElement("div",{className:`${ne}-corner`,style:u}))))};function Pt(d){let{prefixCls:g,value:T,current:C,offset:x=0}=d,Ne;return x&&(Ne={position:"absolute",top:`${x}00%`,left:0}),o.createElement("span",{style:Ne,className:M()(`${g}-only-unit`,{current:C})},T)}function zt(d,g,T){let C=d,x=0;for(;(C+10)%10!==g;)C+=T,x+=T;return x}function bt(d){const{prefixCls:g,count:T,value:C}=d,x=Number(C),Ne=Math.abs(T),[fe,_e]=o.useState(x),[et,Ae]=o.useState(Ne),se=()=>{_e(x),Ae(Ne)};o.useEffect(()=>{const Pe=setTimeout(()=>{se()},1e3);return()=>{clearTimeout(Pe)}},[x]);let ne,ye;if(fe===x||Number.isNaN(x)||Number.isNaN(fe))ne=[o.createElement(Pt,Object.assign({},d,{key:x,current:!0}))],ye={transition:"none"};else{ne=[];const Pe=x+10,Ke=[];for(let u=x;u<=Pe;u+=1)Ke.push(u);const je=Ke.findIndex(u=>u%10===fe);ne=Ke.map((u,H)=>{const P=u%10;return o.createElement(Pt,Object.assign({},d,{key:u,value:P,offset:H-je,current:H===je}))});const c=et<Ne?1:-1;ye={transform:`translateY(${-zt(fe,x,c)}00%)`}}return o.createElement("span",{className:`${g}-only`,style:ye,onTransitionEnd:se},ne)}var Et=function(d,g){var T={};for(var C in d)Object.prototype.hasOwnProperty.call(d,C)&&g.indexOf(C)<0&&(T[C]=d[C]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,C=Object.getOwnPropertySymbols(d);x<C.length;x++)g.indexOf(C[x])<0&&Object.prototype.propertyIsEnumerable.call(d,C[x])&&(T[C[x]]=d[C[x]]);return T},wt=o.forwardRef((d,g)=>{const{prefixCls:T,count:C,className:x,motionClassName:Ne,style:fe,title:_e,show:et,component:Ae="sup",children:se}=d,ne=Et(d,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:ye}=o.useContext(B.E_),Pe=ye("scroll-number",T),Ke=Object.assign(Object.assign({},ne),{"data-show":et,style:fe,className:M()(Pe,x,Ne),title:_e});let je=C;if(C&&Number(C)%1===0){const c=String(C).split("");je=o.createElement("bdi",null,c.map((u,H)=>o.createElement(bt,{prefixCls:Pe,count:Number(C),value:u,key:c.length-H})))}return fe&&fe.borderColor&&(Ke.style=Object.assign(Object.assign({},fe),{boxShadow:`0 0 0 1px ${fe.borderColor} inset`})),se?(0,it.Tm)(se,c=>({className:M()(`${Pe}-custom-component`,c?.className,Ne)})):o.createElement(Ae,Object.assign({},Ke,{ref:g}),je)}),vt=function(d,g){var T={};for(var C in d)Object.prototype.hasOwnProperty.call(d,C)&&g.indexOf(C)<0&&(T[C]=d[C]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,C=Object.getOwnPropertySymbols(d);x<C.length;x++)g.indexOf(C[x])<0&&Object.prototype.propertyIsEnumerable.call(d,C[x])&&(T[C[x]]=d[C[x]]);return T};const Mt=(d,g)=>{var T,C,x,Ne,fe;const{prefixCls:_e,scrollNumberPrefixCls:et,children:Ae,status:se,text:ne,color:ye,count:Pe=null,overflowCount:Ke=99,dot:je=!1,size:c="default",title:u,offset:H,style:P,className:te,rootClassName:Ie,classNames:Y,styles:F,showZero:ge=!1}=d,Ce=vt(d,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:He,direction:Ve,badge:j}=o.useContext(B.E_),X=He("badge",_e),[be,we]=Je(X),ke=Pe>Ke?`${Ke}+`:Pe,K=ke==="0"||ke===0,rt=Pe===null||K&&!ge,tt=(se!=null||ye!=null)&&rt,Ge=je&&!K,Le=Ge?"":ke,nt=(0,o.useMemo)(()=>(Le==null||Le===""||K&&!ge)&&!Ge,[Le,K,ge,Ge]),De=(0,o.useRef)(Pe);nt||(De.current=Pe);const Se=De.current,ot=(0,o.useRef)(Le);nt||(ot.current=Le);const pt=ot.current,gt=(0,o.useRef)(Ge);nt||(gt.current=Ge);const lt=(0,o.useMemo)(()=>{if(!H)return Object.assign(Object.assign({},j?.style),P);const m={marginTop:H[1]};return Ve==="rtl"?m.left=parseInt(H[0],10):m.right=-parseInt(H[0],10),Object.assign(Object.assign(Object.assign({},m),j?.style),P)},[Ve,H,P,j?.style]),me=u??(typeof Se=="string"||typeof Se=="number"?Se:void 0),st=nt||!ne?null:o.createElement("span",{className:`${X}-status-text`},ne),dt=!Se||typeof Se!="object"?void 0:(0,it.Tm)(Se,m=>({style:Object.assign(Object.assign({},lt),m.style)})),ct=(0,A.o2)(ye,!1),i=M()(Y?.indicator,(T=j?.classNames)===null||T===void 0?void 0:T.indicator,{[`${X}-status-dot`]:tt,[`${X}-status-${se}`]:!!se,[`${X}-color-${ye}`]:ct}),f={};ye&&!ct&&(f.color=ye,f.background=ye);const v=M()(X,{[`${X}-status`]:tt,[`${X}-not-a-wrapper`]:!Ae,[`${X}-rtl`]:Ve==="rtl"},te,Ie,j?.className,(C=j?.classNames)===null||C===void 0?void 0:C.root,Y?.root,we);if(!Ae&&tt){const m=lt.color;return be(o.createElement("span",Object.assign({},Ce,{className:v,style:Object.assign(Object.assign(Object.assign({},F?.root),(x=j?.styles)===null||x===void 0?void 0:x.root),lt)}),o.createElement("span",{className:i,style:Object.assign(Object.assign(Object.assign({},F?.indicator),(Ne=j?.styles)===null||Ne===void 0?void 0:Ne.indicator),f)}),ne&&o.createElement("span",{style:{color:m},className:`${X}-status-text`},ne)))}return be(o.createElement("span",Object.assign({ref:g},Ce,{className:v,style:Object.assign(Object.assign({},(fe=j?.styles)===null||fe===void 0?void 0:fe.root),F?.root)}),Ae,o.createElement(xe.ZP,{visible:!nt,motionName:`${X}-zoom`,motionAppear:!1,motionDeadline:1e3},m=>{let{className:y,ref:I}=m;var O,ae;const Q=He("scroll-number",et),ce=gt.current,Be=M()(Y?.indicator,(O=j?.classNames)===null||O===void 0?void 0:O.indicator,{[`${X}-dot`]:ce,[`${X}-count`]:!ce,[`${X}-count-sm`]:c==="small",[`${X}-multiple-words`]:!ce&&pt&&pt.toString().length>1,[`${X}-status-${se}`]:!!se,[`${X}-color-${ye}`]:ct});let Ze=Object.assign(Object.assign(Object.assign({},F?.indicator),(ae=j?.styles)===null||ae===void 0?void 0:ae.indicator),lt);return ye&&!ct&&(Ze=Ze||{},Ze.background=ye),o.createElement(wt,{prefixCls:Q,show:!nt,motionClassName:y,className:Be,count:pt,title:me,style:Ze,key:"scrollNumber",ref:I},dt)}),st))},mt=o.forwardRef(Mt);mt.Ribbon=Nt;var Ot=mt},26591:function(Qe,E,l){l.d(E,{Z:function(){return je}});var o=l(27378),Re=l(60042),M=l.n(Re),xe=l(50189),A=l(11026),it=l(81412),B=l(99664),r=o.createContext(null),h=o.createContext({}),p=r,b=l(64649),k=l(25773),$=l(83395),N=l(78730),S=l(91864),oe=l(11815),re=function(u){var H=u.prefixCls,P=u.className,te=u.style,Ie=u.children,Y=u.containerRef,F=u.id,ge=u.onMouseEnter,Ce=u.onMouseOver,He=u.onMouseLeave,Ve=u.onClick,j=u.onKeyDown,X=u.onKeyUp,be={onMouseEnter:ge,onMouseOver:Ce,onMouseLeave:He,onClick:Ve,onKeyDown:j,onKeyUp:X},we=o.useContext(h),ke=we.panel,K=(0,oe.x1)(ke,Y);return o.createElement(o.Fragment,null,o.createElement("div",(0,k.Z)({id:F,className:M()("".concat(H,"-content"),P),style:(0,xe.Z)({},te),"aria-modal":"true",role:"dialog",ref:K},be),Ie))},Te=re,$e=l(74485);function ee(c){return typeof c=="string"&&String(Number(c))===c?((0,$e.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(c)):c}function Oe(c){warning(!("wrapperClassName"in c),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!c.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var Je={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function qe(c,u){var H,P,te,Ie,Y=c.prefixCls,F=c.open,ge=c.placement,Ce=c.inline,He=c.push,Ve=c.forceRender,j=c.autoFocus,X=c.keyboard,be=c.classNames,we=c.rootClassName,ke=c.rootStyle,K=c.zIndex,rt=c.className,tt=c.id,Ge=c.style,Le=c.motion,nt=c.width,De=c.height,Se=c.children,ot=c.contentWrapperStyle,pt=c.mask,gt=c.maskClosable,lt=c.maskMotion,me=c.maskClassName,st=c.maskStyle,dt=c.afterOpenChange,ct=c.onClose,i=c.onMouseEnter,f=c.onMouseOver,v=c.onMouseLeave,m=c.onClick,y=c.onKeyDown,I=c.onKeyUp,O=c.styles,ae=o.useRef(),Q=o.useRef(),ce=o.useRef();o.useImperativeHandle(u,function(){return ae.current});var Be=function(n){var s=n.keyCode,w=n.shiftKey;switch(s){case N.Z.TAB:{if(s===N.Z.TAB){if(!w&&document.activeElement===ce.current){var L;(L=Q.current)===null||L===void 0||L.focus({preventScroll:!0})}else if(w&&document.activeElement===Q.current){var V;(V=ce.current)===null||V===void 0||V.focus({preventScroll:!0})}}break}case N.Z.ESC:{ct&&X&&(n.stopPropagation(),ct(n));break}}};o.useEffect(function(){if(F&&j){var a;(a=ae.current)===null||a===void 0||a.focus({preventScroll:!0})}},[F]);var Ze=o.useState(!1),J=(0,A.Z)(Ze,2),Fe=J[0],ze=J[1],We=o.useContext(p),at;He===!1?at={distance:0}:He===!0?at={}:at=He||{};var Xe=(H=(P=(te=at)===null||te===void 0?void 0:te.distance)!==null&&P!==void 0?P:We?.pushDistance)!==null&&H!==void 0?H:180,Ct=o.useMemo(function(){return{pushDistance:Xe,push:function(){ze(!0)},pull:function(){ze(!1)}}},[Xe]);o.useEffect(function(){if(F){var a;We==null||(a=We.push)===null||a===void 0||a.call(We)}else{var n;We==null||(n=We.pull)===null||n===void 0||n.call(We)}},[F]),o.useEffect(function(){return function(){var a;We==null||(a=We.pull)===null||a===void 0||a.call(We)}},[]);var jt=pt&&o.createElement($.ZP,(0,k.Z)({key:"mask"},lt,{visible:F}),function(a,n){var s=a.className,w=a.style;return o.createElement("div",{className:M()("".concat(Y,"-mask"),s,be?.mask,me),style:(0,xe.Z)((0,xe.Z)((0,xe.Z)({},w),st),O?.mask),onClick:gt&&F?ct:void 0,ref:n})}),$t=typeof Le=="function"?Le(ge):Le,ut={};if(Fe&&Xe)switch(ge){case"top":ut.transform="translateY(".concat(Xe,"px)");break;case"bottom":ut.transform="translateY(".concat(-Xe,"px)");break;case"left":ut.transform="translateX(".concat(Xe,"px)");break;default:ut.transform="translateX(".concat(-Xe,"px)");break}ge==="left"||ge==="right"?ut.width=ee(nt):ut.height=ee(De);var xt={onMouseEnter:i,onMouseOver:f,onMouseLeave:v,onClick:m,onKeyDown:y,onKeyUp:I},e=o.createElement($.ZP,(0,k.Z)({key:"panel"},$t,{visible:F,forceRender:Ve,onVisibleChanged:function(n){dt?.(n)},removeOnLeave:!1,leavedClassName:"".concat(Y,"-content-wrapper-hidden")}),function(a,n){var s=a.className,w=a.style;return o.createElement("div",(0,k.Z)({className:M()("".concat(Y,"-content-wrapper"),be?.wrapper,s),style:(0,xe.Z)((0,xe.Z)((0,xe.Z)((0,xe.Z)({},ut),w),ot),O?.wrapper)},(0,S.Z)(c,{data:!0})),o.createElement(Te,(0,k.Z)({id:tt,containerRef:n,prefixCls:Y,className:M()(rt,be?.content),style:(0,xe.Z)((0,xe.Z)({},Ge),O?.content)},xt),Se))}),t=(0,xe.Z)({},ke);return K&&(t.zIndex=K),o.createElement(p.Provider,{value:Ct},o.createElement("div",{className:M()(Y,"".concat(Y,"-").concat(ge),we,(Ie={},(0,b.Z)(Ie,"".concat(Y,"-open"),F),(0,b.Z)(Ie,"".concat(Y,"-inline"),Ce),Ie)),style:t,tabIndex:-1,ref:ae,onKeyDown:Be},jt,o.createElement("div",{tabIndex:0,ref:Q,style:Je,"aria-hidden":"true","data-sentinel":"start"}),e,o.createElement("div",{tabIndex:0,ref:ce,style:Je,"aria-hidden":"true","data-sentinel":"end"})))}var ft=o.forwardRef(qe),Ht=ft,Nt=function(u){var H=u.open,P=H===void 0?!1:H,te=u.prefixCls,Ie=te===void 0?"rc-drawer":te,Y=u.placement,F=Y===void 0?"right":Y,ge=u.autoFocus,Ce=ge===void 0?!0:ge,He=u.keyboard,Ve=He===void 0?!0:He,j=u.width,X=j===void 0?378:j,be=u.mask,we=be===void 0?!0:be,ke=u.maskClosable,K=ke===void 0?!0:ke,rt=u.getContainer,tt=u.forceRender,Ge=u.afterOpenChange,Le=u.destroyOnClose,nt=u.onMouseEnter,De=u.onMouseOver,Se=u.onMouseLeave,ot=u.onClick,pt=u.onKeyDown,gt=u.onKeyUp,lt=u.panelRef,me=o.useState(!1),st=(0,A.Z)(me,2),dt=st[0],ct=st[1],i=o.useState(!1),f=(0,A.Z)(i,2),v=f[0],m=f[1];(0,B.Z)(function(){m(!0)},[]);var y=v?P:!1,I=o.useRef(),O=o.useRef();(0,B.Z)(function(){y&&(O.current=document.activeElement)},[y]);var ae=function(J){var Fe;if(ct(J),Ge?.(J),!J&&O.current&&!((Fe=I.current)!==null&&Fe!==void 0&&Fe.contains(O.current))){var ze;(ze=O.current)===null||ze===void 0||ze.focus({preventScroll:!0})}},Q=o.useMemo(function(){return{panel:lt}},[lt]);if(!tt&&!dt&&!y&&Le)return null;var ce={onMouseEnter:nt,onMouseOver:De,onMouseLeave:Se,onClick:ot,onKeyDown:pt,onKeyUp:gt},Be=(0,xe.Z)((0,xe.Z)({},u),{},{open:y,prefixCls:Ie,placement:F,autoFocus:Ce,keyboard:Ve,width:X,mask:we,maskClosable:K,inline:rt===!1,afterOpenChange:ae,ref:I},ce);return o.createElement(h.Provider,{value:Q},o.createElement(it.Z,{open:y||tt||dt,autoDestroy:!1,getContainer:rt,autoLock:we&&(y||dt)},o.createElement(Ht,Be)))},Pt=Nt,zt=Pt,bt=l(2874),Et=l(80821),kt=l(50185),wt=l(26775),vt=l(84006),Mt=l(31630),mt=l(29670),Ot=l(60467),g=c=>{var u,H;const{prefixCls:P,title:te,footer:Ie,extra:Y,closeIcon:F,closable:ge,onClose:Ce,headerStyle:He,drawerStyle:Ve,bodyStyle:j,footerStyle:X,children:be,classNames:we,styles:ke}=c,{drawer:K}=o.useContext(wt.E_),rt=o.useCallback(De=>o.createElement("button",{type:"button",onClick:Ce,"aria-label":"Close",className:`${P}-close`},De),[Ce]),[tt,Ge]=(0,Ot.Z)(ge,F,rt,void 0,!0),Le=o.useMemo(()=>{var De,Se;return!te&&!tt?null:o.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(De=K?.styles)===null||De===void 0?void 0:De.header),He),ke?.header),className:M()(`${P}-header`,{[`${P}-header-close-only`]:tt&&!te&&!Y},(Se=K?.classNames)===null||Se===void 0?void 0:Se.header,we?.header)},o.createElement("div",{className:`${P}-header-title`},Ge,te&&o.createElement("div",{className:`${P}-title`},te)),Y&&o.createElement("div",{className:`${P}-extra`},Y))},[tt,Ge,Y,He,P,te]),nt=o.useMemo(()=>{var De,Se;if(!Ie)return null;const ot=`${P}-footer`;return o.createElement("div",{className:M()(ot,(De=K?.classNames)===null||De===void 0?void 0:De.footer,we?.footer),style:Object.assign(Object.assign(Object.assign({},(Se=K?.styles)===null||Se===void 0?void 0:Se.footer),X),ke?.footer)},Ie)},[Ie,X,P]);return o.createElement("div",{className:`${P}-wrapper-body`,style:Ve},Le,o.createElement("div",{className:M()(`${P}-body`,we?.body,(u=K?.classNames)===null||u===void 0?void 0:u.body),style:Object.assign(Object.assign(Object.assign({},(H=K?.styles)===null||H===void 0?void 0:H.body),j),ke?.body)},be),nt)},T=l(71695),C=l(15305),x=l(5515),fe=c=>{const{componentCls:u,motionDurationSlow:H}=c,P={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${H}`}}};return{[u]:{[`${u}-mask-motion`]:{"&-enter, &-appear, &-leave":{"&-active":{transition:`all ${H}`}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}},[`${u}-panel-motion`]:{"&-left":[P,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[P,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[P,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[P,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}}}};const _e=c=>{const{componentCls:u,zIndexPopup:H,colorBgMask:P,colorBgElevated:te,motionDurationSlow:Ie,motionDurationMid:Y,padding:F,paddingLG:ge,fontSizeLG:Ce,lineHeightLG:He,lineWidth:Ve,lineType:j,colorSplit:X,marginSM:be,colorIcon:we,colorIconHover:ke,colorText:K,fontWeightStrong:rt,footerPaddingBlock:tt,footerPaddingInline:Ge}=c,Le=`${u}-content-wrapper`;return{[u]:{position:"fixed",inset:0,zIndex:H,pointerEvents:"none","&-pure":{position:"relative",background:te,[`&${u}-left`]:{boxShadow:c.boxShadowDrawerLeft},[`&${u}-right`]:{boxShadow:c.boxShadowDrawerRight},[`&${u}-top`]:{boxShadow:c.boxShadowDrawerUp},[`&${u}-bottom`]:{boxShadow:c.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${u}-mask`]:{position:"absolute",inset:0,zIndex:H,background:P,pointerEvents:"auto"},[Le]:{position:"absolute",zIndex:H,maxWidth:"100vw",transition:`all ${Ie}`,"&-hidden":{display:"none"}},[`&-left > ${Le}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:c.boxShadowDrawerLeft},[`&-right > ${Le}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:c.boxShadowDrawerRight},[`&-top > ${Le}`]:{top:0,insetInline:0,boxShadow:c.boxShadowDrawerUp},[`&-bottom > ${Le}`]:{bottom:0,insetInline:0,boxShadow:c.boxShadowDrawerDown},[`${u}-content`]:{width:"100%",height:"100%",overflow:"auto",background:te,pointerEvents:"auto"},[`${u}-wrapper-body`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},[`${u}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${(0,T.bf)(F)} ${(0,T.bf)(ge)}`,fontSize:Ce,lineHeight:He,borderBottom:`${(0,T.bf)(Ve)} ${j} ${X}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${u}-extra`]:{flex:"none"},[`${u}-close`]:{display:"inline-block",marginInlineEnd:be,color:we,fontWeight:rt,fontSize:Ce,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${Y}`,textRendering:"auto","&:focus, &:hover":{color:ke,textDecoration:"none"}},[`${u}-title`]:{flex:1,margin:0,color:K,fontWeight:c.fontWeightStrong,fontSize:Ce,lineHeight:He},[`${u}-body`]:{flex:1,minWidth:0,minHeight:0,padding:ge,overflow:"auto"},[`${u}-footer`]:{flexShrink:0,padding:`${(0,T.bf)(tt)} ${(0,T.bf)(Ge)}`,borderTop:`${(0,T.bf)(Ve)} ${j} ${X}`},"&-rtl":{direction:"rtl"}}}},et=c=>({zIndexPopup:c.zIndexPopupBase,footerPaddingBlock:c.paddingXS,footerPaddingInline:c.padding});var Ae=(0,C.I$)("Drawer",c=>{const u=(0,x.TS)(c,{});return[_e(u),fe(u)]},et),se=function(c,u){var H={};for(var P in c)Object.prototype.hasOwnProperty.call(c,P)&&u.indexOf(P)<0&&(H[P]=c[P]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var te=0,P=Object.getOwnPropertySymbols(c);te<P.length;te++)u.indexOf(P[te])<0&&Object.prototype.propertyIsEnumerable.call(c,P[te])&&(H[P[te]]=c[P[te]]);return H};const ne=null,ye={distance:180},Pe=c=>{var u,H,P,te,Ie,Y,F,ge,Ce;const{rootClassName:He,width:Ve,height:j,size:X="default",mask:be=!0,push:we=ye,open:ke,afterOpenChange:K,onClose:rt,prefixCls:tt,getContainer:Ge,style:Le,className:nt,visible:De,afterVisibleChange:Se}=c,ot=se(c,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"]),{getPopupContainer:pt,getPrefixCls:gt,direction:lt,drawer:me}=o.useContext(wt.E_),st=gt("drawer",tt),[dt,ct]=Ae(st),i=Ge===void 0&&pt?()=>pt(document.body):Ge,f=M()({"no-mask":!be,[`${st}-rtl`]:lt==="rtl"},He,ct),v=o.useMemo(()=>Ve??(X==="large"?736:378),[Ve,X]),m=o.useMemo(()=>j??(X==="large"?736:378),[j,X]),y={motionName:(0,Et.m)(st,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},I=ce=>({motionName:(0,Et.m)(st,`panel-motion-${ce}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),O=(0,mt.H)(),[ae,Q]=(0,bt.Cn)("Drawer",ot.zIndex);return dt(o.createElement(Mt.BR,null,o.createElement(vt.Ux,{status:!0,override:!0},o.createElement(kt.Z.Provider,{value:Q},o.createElement(zt,Object.assign({prefixCls:st,onClose:rt,maskMotion:y,motion:I},ot,{classNames:{mask:M()((H=ot.classNames)===null||H===void 0?void 0:H.mask,(P=me?.classNames)===null||P===void 0?void 0:P.mask),content:M()((te=ot.classNames)===null||te===void 0?void 0:te.content,(Ie=me?.classNames)===null||Ie===void 0?void 0:Ie.content)},styles:{mask:Object.assign(Object.assign({},(Y=ot.styles)===null||Y===void 0?void 0:Y.mask),(F=me?.styles)===null||F===void 0?void 0:F.mask),content:Object.assign(Object.assign({},(ge=ot.styles)===null||ge===void 0?void 0:ge.content),(Ce=me?.styles)===null||Ce===void 0?void 0:Ce.content)},open:ke??De,mask:be,push:we,width:v,height:m,style:Object.assign(Object.assign({},me?.style),Le),className:M()(me?.className,nt),rootClassName:f,getContainer:i,afterOpenChange:K??Se,panelRef:O,zIndex:ae}),o.createElement(g,Object.assign({prefixCls:st},ot,{onClose:rt})))))))},Ke=c=>{const{prefixCls:u,style:H,className:P,placement:te="right"}=c,Ie=se(c,["prefixCls","style","className","placement"]),{getPrefixCls:Y}=o.useContext(wt.E_),F=Y("drawer",u),[ge,Ce]=Ae(F),He=M()(F,`${F}-pure`,`${F}-${te}`,Ce,P);return ge(o.createElement("div",{className:He,style:H},o.createElement(g,Object.assign({prefixCls:F},Ie))))};Pe._InternalPanelDoNotUseOrYouWillBeFired=Ke;var je=Pe},85270:function(Qe,E,l){var o=l(73203).default;Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var Re=o(l(22313)),M=E.default=Re.default},33527:function(Qe,E,l){var o=l(73203).default;Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var Re=o(l(10792)),M=E.default=Re.default},22313:function(Qe,E,l){var o=l(73203).default;Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var Re=o(l(91412)),M=o(l(14339));const xe={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},Re.default),timePickerLocale:Object.assign({},M.default)};var A=E.default=xe},10792:function(Qe,E,l){var o=l(73203).default;Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var Re=o(l(71480)),M=o(l(47071));const xe={lang:Object.assign({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},Re.default),timePickerLocale:Object.assign({},M.default)};xe.lang.ok="\u786E\u5B9A";var A=E.default=xe},75183:function(Qe,E,l){var o,Re=l(73203).default;o={value:!0},E.Z=void 0;var M=Re(l(51367)),xe=Re(l(85270)),A=Re(l(22313)),it=Re(l(14339));const B="${label} is not a valid ${type}",r={locale:"en",Pagination:M.default,DatePicker:A.default,TimePicker:it.default,Calendar:xe.default,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:B,method:B,array:B,object:B,number:B,date:B,boolean:B,integer:B,float:B,regexp:B,email:B,url:B,hex:B},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}};var h=E.Z=r},81107:function(Qe,E,l){var o,Re=l(73203).default;o={value:!0},E.Z=void 0;var M=Re(l(95160)),xe=Re(l(33527)),A=Re(l(10792)),it=Re(l(47071));const B="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",r={locale:"zh-cn",Pagination:M.default,DatePicker:A.default,TimePicker:it.default,Calendar:xe.default,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:B,method:B,array:B,object:B,number:B,date:B,boolean:B,integer:B,float:B,regexp:B,email:B,url:B,hex:B},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}};var h=E.Z=r},14339:function(Qe,E){Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;const l={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};var o=E.default=l},47071:function(Qe,E){Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;const l={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]};var o=E.default=l},51367:function(Qe,E){Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var l={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},o=E.default=l},95160:function(Qe,E){Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var l={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"},o=E.default=l},91412:function(Qe,E){Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var l={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},o=E.default=l},71480:function(Qe,E){Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var l={locale:"zh_CN",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA"},o=E.default=l},73203:function(Qe){function E(l){return l&&l.__esModule?l:{default:l}}Qe.exports=E,Qe.exports.__esModule=!0,Qe.exports.default=Qe.exports},66274:function(Qe,E,l){var o;l.d(E,{Z:function(){return B}});var Re=l(27378),M={942:(r,h,p)=>{p.d(h,{Z:()=>oe});var b=p(601),k=p.n(b),$=p(609),N=p.n($),S=N()(k());S.push([r.id,`.node-right-icon-close {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.node-right-icon-close .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.node-right-icon-close .default-right-icon::before,
.node-right-icon-close .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.node-right-icon-close .default-right-icon::before {
  left: 0;
}
.node-right-icon-close .default-right-icon::after {
  left: calc(1px * 0.7);
}
.node-right-icon-close .default-right-icon::before,
.node-right-icon-close .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.node-right-icon-close .default-right-icon::before {
  transform: rotate(135deg);
}
.node-right-icon-close .default-right-icon::after {
  transform: rotate(45deg);
}
.node-right-icon-open {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.node-right-icon-open .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.node-right-icon-open .default-right-icon::before,
.node-right-icon-open .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.node-right-icon-open .default-right-icon::before {
  left: 0;
}
.node-right-icon-open .default-right-icon::after {
  left: calc(1px * 0.7);
}
.node-right-icon-open .default-right-icon::before,
.node-right-icon-open .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.node-right-icon-open .default-right-icon::before {
  transform: rotate(225deg);
}
.node-right-icon-open .default-right-icon::after {
  transform: rotate(-45deg);
}
.hide-scrollbar {
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.huxy-tree {
  --topBar: 0px;
  --downBar: var(--footerHeight, 0);
  --width: var(--menuWidth, 100%);
  --bgColor: var(--menuBgColor, transparent);
  --itemHeight: var(--menuItemHeight, 40px);
  --nodeListWidth: var(--collapseMenuWidth, 200px);
  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));
  --subItemHeight: calc(var(--itemHeight) - 3px);
  --leftIconWidth: 38px;
  --rightIconWidth: 24px;
  --trackWidth: 15px;
  --collapsedWidth: var(--collapseWidth, 60px);
  --ulPadding: 2px 0;
  --ulPosition: calc(100% + 8px);
  --arrowPosition: 16px;
  position: relative;
  height: calc(100% - var(--topBar) - var(--downBar));
  overflow: hidden;
}
.huxy-tree .huxy-tree-track {
  width: calc(100% + var(--trackWidth));
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.huxy-tree .huxy-tree-track::-webkit-scrollbar {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: calc(100% - var(--trackWidth));
  min-height: 100%;
  padding: var(--ulPadding);
  margin: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {
  padding-left: 6px;
  font-size: 1.3rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > .link {
  padding-left: 22px;
  font-size: 1.2rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > .link {
  padding-left: 38px;
  font-size: 1.1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > .link {
  padding-left: 54px;
  font-size: 1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > .link {
  padding-left: 70px;
  font-size: 0.9rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active::after {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  left: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 3px;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: currentColor;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-2px, -2px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {
  vertical-align: middle;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {
  display: block;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {
  right: 0;
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > ul {
  height: calc(var(--subItemHeight) * var(--count));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.hidden {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  --count: 0;
  overflow: hidden;
  height: 0;
  transition: height 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.collapsed.huxy-tree {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link {
  padding-left: 0px;
  position: relative;
  /*&:hover,*/
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: visible;
  height: auto;
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: 0;
  left: var(--ulPosition);
  width: var(--nodeListWidth);
  padding: var(--ulPadding);
  opacity: 0.99;
  border-radius: 2px;
  transform: scale(0);
  transform-origin: 0 0;
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  border-width: 6px;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  border-width: 5px;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  left: auto;
  right: 100%;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  top: var(--arrowPosition);
  border-right-color: var(--treeBorderColor);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  top: calc(var(--arrowPosition) + 1px);
  border-right-color: var(--bgColor);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {
  z-index: 10001;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-text,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-right-icon {
  display: none;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  width: var(--collapsedWidth);
  font-size: 1.6rem;
}
.huxy-horizontal-tree {
  --bgColor: var(--navBgColor, transparent);
  --itemHeight: var(--menuItemHeight, 40px);
  --nodeListWidth: var(--collapseMenuWidth, 200px);
  --treeBorderColor: var(--borderColor, rgba(0, 0, 0, 0.06));
  --subItemHeight: calc(var(--itemHeight) - 3px);
  --leftIconWidth: 38px;
  --rightIconWidth: 24px;
  --itemPadding: 0 8px;
  --nodeFloat: auto;
  --ulPadding: 2px 0;
  --ulPosition: calc(100% + 8px);
  --arrowPosition: 16px;
  position: relative;
  border-top: 1px solid var(--treeBorderColor);
  float: var(--nodeFloat);
}
.huxy-horizontal-tree .huxy-tree-track {
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
}
.huxy-horizontal-tree .huxy-tree-track::-webkit-scrollbar {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root {
  float: var(--nodeFloat);
  width: max-content;
  padding: 0 10px;
  margin: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li {
  user-select: none;
  position: relative;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link.active::after {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > .link .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0px;
  bottom: 0;
  top: auto;
  height: 3px;
  width: calc(100% - 0px * 2);
  background-color: currentColor;
  transform: scale(0);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon .default-left-icon:after {
  content: "";
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: currentColor;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-2px, -2px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-left-icon > * {
  vertical-align: middle;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > .link .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: 0;
  left: var(--ulPosition);
  right: auto;
  width: var(--nodeListWidth);
  padding: var(--ulPadding);
  opacity: 0.99;
  transform: scale(0);
  transform-origin: 0 0;
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  left: auto;
  right: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::before {
  top: var(--arrowPosition);
  border-right-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul::after {
  top: calc(var(--arrowPosition) + 1px);
  border-right-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  left: auto;
  right: var(--ulPosition);
  position: absolute;
  transform-origin: 100% 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  right: auto;
  left: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::before {
  top: var(--arrowPosition);
  border-left-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > ul.left::after {
  top: calc(var(--arrowPosition) + 1px);
  border-left-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
  width: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > .link .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li {
  float: left;
  padding: var(--itemPadding);
  z-index: 10001;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li::before {
  content: "";
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > .link .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  top: var(--ulPosition);
  left: 0;
  transform-origin: 50% 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {
  border-width: 8px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  border-width: 7px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  top: auto;
  bottom: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::before {
  left: 16px;
  border-bottom-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul::after {
  left: calc(16px + 1px);
  border-bottom-color: var(--bgColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--treeBorderColor);
  position: absolute;
  left: auto;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {
  border-width: 6px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  border-width: 5px;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::before {
  right: 10px;
  border-bottom-color: var(--treeBorderColor);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > ul.left::after {
  right: calc(10px + 1px);
  border-bottom-color: var(--bgColor);
}
`,""]),S.locals={};const oe=S},84:(r,h,p)=>{p.d(h,{Z:()=>oe});var b=p(601),k=p.n(b),$=p(609),N=p.n($),S=N()(k());S.push([r.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]),S.locals={};const oe=S},91:(r,h,p)=>{p.d(h,{Z:()=>oe});var b=p(601),k=p.n(b),$=p(609),N=p.n($),S=N()(k());S.push([r.id,`.frame {
  --frame-spacing: 1rem;
  --frame-radius: 4px;
  --boxShadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  transform: none;
  --topHeight: var(--headerHeight);
  --blur: 0.3rem;
  --opacity: 0.75;
  background: var(--appBgColor);
  color: var(--appColor);
}
.frame.no-header {
  --headerHeight: 0px;
}
.frame .frame-header {
  --linkColor: var(--headerLinkColor, var(--appLinkColor));
  --linkActiveColor: var(--headerLinkActiveColor, var(--appLinkActiveColor));
  --linkHoverColor: var(--headerLinkHoverColor, var(--appLinkHoverColor));
  backdrop-filter: blur(var(--blur));
  background: var(--navBgColor);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}
.frame .frame-main {
  margin: 0 auto;
  max-width: var(--maxWidth);
  padding-top: var(--topHeight);
  z-index: 5;
}
.frame .frame-main .frame-container {
  position: relative;
}
.frame .frame-main .frame-container .frame-aside {
  --linkColor: var(--asideLinkColor, var(--appLinkColor));
  --linkActiveColor: var(--asideLinkActiveColor, var(--appLinkActiveColor));
  --linkHoverColor: var(--asideLinkHoverColor, var(--appLinkHoverColor));
  position: fixed;
  width: var(--menuWidth);
  top: var(--topHeight);
  bottom: 0;
  z-index: 6;
  background: var(--menuBgColor);
  transform: translate3d(0, 0, 0);
  transition: width 0.3s;
}
.frame .frame-main .frame-container .frame-view {
  padding-left: calc(var(--menuWidth));
  transition: padding-left 0.3s;
}
.frame .frame-main .frame-container .frame-footer {
  padding-left: calc(var(--menuWidth));
  transition: padding-left 0.3s;
  background: var(--panelBgColor);
}
.frame .frame-main .frame-container.no-sidebar .frame-view {
  padding-left: 0;
}
.frame .frame-main .frame-container.no-sidebar .frame-footer {
  padding-left: 0;
  margin-left: calc(var(--maxWidth) / 2 - 50vw);
  margin-right: calc(var(--maxWidth) / 2 - 50vw);
}
.frame.collapsed .frame-main .frame-container .frame-aside,
.frame.composeCollapsed .frame-main .frame-container .frame-aside {
  width: var(--collapseWidth);
  transition: width 0.3s;
}
.frame.collapsed .frame-main .frame-container .frame-view,
.frame.composeCollapsed .frame-main .frame-container .frame-view {
  padding-left: var(--collapseWidth);
  transition: padding-left 0.3s;
}
.frame.collapsed .frame-main .frame-container .frame-footer,
.frame.composeCollapsed .frame-main .frame-container .frame-footer {
  padding-left: calc(var(--collapseWidth));
  transition: padding-left 0.3s;
}
.frame.horizontal,
.frame.compose {
  --topHeight: calc(var(--headerHeight) + var(--menuItemHeight));
}
.frame.horizontal .frame-header .header .banner,
.frame.compose .frame-header .header .banner {
  background: transparent;
  color: var(--linkColor);
}
.frame.horizontal .frame-header .header .banner:hover,
.frame.compose .frame-header .header .banner:hover {
  color: var(--linkColor);
}
.frame.detached {
  --frame-spacing: 0.8rem;
  --frame-radius: 4px;
}
@media screen and (max-width: 1024px) {
  .frame .frame-main .frame-container .frame-aside {
    width: 0;
  }
  .frame .frame-main .frame-container .frame-view {
    padding-left: 0;
  }
  .frame .frame-main .frame-container .frame-footer {
    padding-left: 0;
  }
  .frame.collapsed .frame-main .frame-container .frame-aside {
    width: var(--menuWidth);
    backdrop-filter: blur(var(--blur));
    background: var(--menuBgColor);
  }
  .frame.collapsed .frame-main .frame-container .frame-view {
    padding-left: 0;
  }
  .frame.collapsed .frame-main .frame-container .frame-footer {
    padding-left: 0;
  }
}
/*@media screen and (max-width: env(--viewport-1)) {
  .frame {
    .frame-main {
      .frame-container {
        .frame-aside {
          // left: 0;
        }
      }
    }
  }
}*/
`,""]),S.locals={};const oe=S},505:(r,h,p)=>{p.d(h,{Z:()=>oe});var b=p(601),k=p.n(b),$=p(609),N=p.n($),S=N()(k());S.push([r.id,`.clear::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
@keyframes huxy-header-animate-bottom-in {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, 25px, 0);
  }
  100% {
    opacity: 0.98;
    visibility: visible;
    transform: translate3d(0, 2px, 0);
  }
}
.huxy-header-angle-top {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
}
.huxy-header-angle-top::before,
.huxy-header-angle-top::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-header-angle-top::before {
  left: 0;
}
.huxy-header-angle-top::after {
  left: calc(1px * 0.7);
}
.huxy-header-angle-top::before,
.huxy-header-angle-top::after {
  top: calc(50% - var(--pos));
}
.huxy-header-angle-top::before {
  transform: rotate(225deg);
}
.huxy-header-angle-top::after {
  transform: rotate(-45deg);
}
.huxy-header-angle-bt {
  --pos: calc(5px - 1px) / 2;
  position: relative;
  display: inline-block;
  font-style: normal;
  float: right;
  cursor: pointer;
  height: 100%;
  width: 10px;
}
.huxy-header-angle-bt::before,
.huxy-header-angle-bt::after {
  content: '';
  display: block;
  position: absolute;
  border-radius: 1px;
  background-color: currentColor;
  height: 1px;
  width: 5px;
  left: 0;
  transform-origin: 100% 50% 0;
  transition: all 0.3s;
}
.huxy-header-angle-bt::before {
  left: 0;
}
.huxy-header-angle-bt::after {
  left: calc(1px * 0.7);
}
.huxy-header-angle-bt::before,
.huxy-header-angle-bt::after {
  top: calc(50% + var(--pos));
}
.huxy-header-angle-bt::before {
  transform: rotate(135deg);
}
.huxy-header-angle-bt::after {
  transform: rotate(45deg);
}
.huxy-header-arrow-lt {
  position: relative;
  background: var(--navBgColor);
  border: 1px solid var(--borderColor);
  right: auto;
  left: 0;
  z-index: 100000;
}
.huxy-header-arrow-lt::before,
.huxy-header-arrow-lt::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-header-arrow-lt::before {
  border-width: 8px;
}
.huxy-header-arrow-lt::after {
  border-width: 7px;
}
.huxy-header-arrow-lt::before,
.huxy-header-arrow-lt::after {
  top: auto;
  bottom: 100%;
}
.huxy-header-arrow-lt::before {
  left: 16px;
  border-bottom-color: var(--borderColor);
}
.huxy-header-arrow-lt::after {
  left: calc(16px + 1px);
  border-bottom-color: var(--navBgColor);
}
.huxy-header-arrow-rt {
  position: relative;
  background: var(--navBgColor);
  border: 1px solid var(--borderColor);
  right: 0;
  left: auto;
  z-index: 100000;
}
.huxy-header-arrow-rt::before,
.huxy-header-arrow-rt::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-header-arrow-rt::before {
  border-width: 8px;
}
.huxy-header-arrow-rt::after {
  border-width: 7px;
}
.huxy-header-arrow-rt::before,
.huxy-header-arrow-rt::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-header-arrow-rt::before {
  right: 16px;
  border-bottom-color: var(--borderColor);
}
.huxy-header-arrow-rt::after {
  right: calc(16px + 1px);
  border-bottom-color: var(--navBgColor);
}
.header {
  --subMenuItemHeight: 40px;
  max-width: var(--maxWidth);
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  margin: 0 auto;
  position: relative;
}
.header .banner {
  color: var(--bannerLinkColor, var(--appLinkColor));
  position: absolute;
  top: 0;
  left: 0;
  width: var(--menuWidth);
  background: var(--bannerBgColor);
  z-index: 1;
  height: 100%;
  padding-left: 15px;
  padding-right: 10px;
  display: flex;
  transition: width 0.3s;
}
.header .banner:hover {
  color: var(--bannerLinkColor, var(--appLinkColor));
}
.header .banner .logo {
  height: 100%;
  font-size: 0;
}
.header .banner .logo > img {
  height: 55%;
  width: auto;
}
.header .banner .title {
  padding-left: 5px;
  font-size: 1.6rem;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header .nav {
  padding-left: var(--menuWidth);
  transition: padding-left 0.3s;
}
.header .nav .nav-wrap {
  padding: 0 10px;
  position: relative;
  display: flex;
  box-shadow: var(--boxShadow);
}
.header .nav .nav-wrap::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.header .nav .nav-wrap .nav-left > ul,
.header .nav .nav-wrap .nav-right > ul {
  margin: 0;
}
.header .nav .nav-wrap .nav-left > ul::after,
.header .nav .nav-wrap .nav-right > ul::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.header .nav .nav-wrap .nav-left > ul > li,
.header .nav .nav-wrap .nav-right > ul > li {
  position: relative;
  user-select: none;
}
.header .nav .nav-wrap .nav-left > ul > li > .link,
.header .nav .nav-wrap .nav-right > ul > li > .link {
  height: var(--headerHeight);
  display: block;
  text-align: center;
  cursor: pointer;
  padding: 0 1.2rem;
  position: relative;
  transition: color 0.3s;
}
.header .nav .nav-wrap .nav-left > ul > li > .link::before,
.header .nav .nav-wrap .nav-right > ul > li > .link::before {
  content: "";
  position: absolute;
  left: 0;
  top: calc(50% - 10px);
  height: 20px;
  width: 1px;
  background-color: rgba(0, 0, 0, 0.02);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar {
  font-size: 0;
  height: 100%;
  display: flex;
  align-items: center;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img {
  height: 48%;
  max-height: 46px;
  border-radius: 100%;
  background-color: #f0f0f0f0;
  padding: 1px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  position: relative;
  transform-origin: 50% 50%;
  transform: rotate(-42deg);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img::after,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img::after {
  content: "";
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 100%;
  bottom: -3px;
  left: calc(50% - 2px);
  background-color: #21d86e;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .img img,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .img img {
  height: 100%;
  width: auto;
  border-radius: 100%;
  display: block;
  transform-origin: 50% 50%;
  transform: rotate(42deg);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .avatar .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .avatar .txt {
  max-width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .icon,
.header .nav .nav-wrap .nav-right > ul > li > .link .icon {
  font-size: 0;
  height: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .icon img,
.header .nav .nav-wrap .nav-right > ul > li > .link .icon img {
  height: 25%;
  width: auto;
  max-height: 24px;
  min-height: 16px;
  filter: grayscale(0.1);
}
.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon,
.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon,
.header .nav .nav-wrap .nav-left > ul > li > .link .img,
.header .nav .nav-wrap .nav-right > ul > li > .link .img {
  height: 100%;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon + .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon + .txt,
.header .nav .nav-wrap .nav-left > ul > li > .link .img + .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .img + .txt {
  margin-left: 1rem;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .node-icon > *,
.header .nav .nav-wrap .nav-right > ul > li > .link .node-icon > *,
.header .nav .nav-wrap .nav-left > ul > li > .link .img > *,
.header .nav .nav-wrap .nav-right > ul > li > .link .img > * {
  font-size: 1.6rem;
  vertical-align: middle;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .txt,
.header .nav .nav-wrap .nav-right > ul > li > .link .txt {
  display: inline-block;
  font-size: 1.3rem;
}
.header .nav .nav-wrap .nav-left > ul > li > .link .txt + .node-icon,
.header .nav .nav-wrap .nav-right > ul > li > .link .txt + .node-icon {
  margin-left: 1rem;
}
.header .nav .nav-wrap .nav-left > ul > li ul,
.header .nav .nav-wrap .nav-right > ul > li ul {
  position: absolute;
  top: 100%;
  right: 0;
  width: max-content;
  min-width: 130px;
  box-shadow: 0 2px 6px var(--borderColor);
  padding: 2px 0;
  border-radius: 2px;
  opacity: 0;
  visibility: hidden;
  display: none;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li,
.header .nav .nav-wrap .nav-right > ul > li ul > li {
  user-select: none;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li.divider,
.header .nav .nav-wrap .nav-right > ul > li ul > li.divider {
  margin-top: 4px;
  padding-top: 4px;
  border-top: 1px solid var(--borderColor);
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link {
  display: flex;
  align-items: center;
  height: var(--subMenuItemHeight);
  line-height: var(--subMenuItemHeight);
  cursor: pointer;
  padding: 0 1.5rem;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .img,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .img {
  font-size: 0;
  height: 100%;
  margin-right: 1rem;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .img img,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .img img {
  height: 40%;
  width: auto;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .node-icon,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .node-icon {
  display: inline-block;
  height: 100%;
  margin-right: 1rem;
  text-align: center;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .node-icon img,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .node-icon img {
  height: 34%;
  width: auto;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link > .drop-label,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link > .drop-label {
  display: inline-block;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link:hover,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link:hover {
  background-color: #e6f7ff;
  color: #666;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link.active,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link.active {
  background-color: #e6f7ff;
  color: #666;
}
.header .nav .nav-wrap .nav-left > ul > li.open ul,
.header .nav .nav-wrap .nav-right > ul > li.open ul {
  display: block;
  animation: huxy-header-animate-bottom-in 0.22s forwards;
}
.header .nav .nav-wrap .nav-left {
  float: left;
}
.header .nav .nav-wrap .nav-left > ul {
  float: left;
}
.header .nav .nav-wrap .nav-left > ul > li {
  float: left;
  /*> .link {
              // border-left:1px solid rgba(0, 0, 0, 0.1);
              &::before {
                content: "";
                position: absolute;
                left: 0;
                top: calc(@headerHeight / 2 - 10px);
                height: 20px;
                width: 1px;
                background-color: rgba(0, 0, 0, 0.1);
              }
            }*/
}
.header .nav .nav-wrap .nav-right {
  flex: 1;
  float: right;
}
.header .nav .nav-wrap .nav-right > ul {
  float: right;
}
.header .nav .nav-wrap .nav-right > ul > li {
  float: right;
}
.collapsed .frame-header .header .banner {
  width: var(--collapseWidth);
  padding: 0;
  justify-content: center;
  transition: width 0.3s;
}
.collapsed .frame-header .header .banner .title {
  display: none;
}
.collapsed .frame-header .header .nav {
  padding-left: var(--collapseWidth);
  transition: padding-left 0.3s;
}
@media screen and (max-width: 1024px) {
  .header .banner {
    display: none;
  }
  .header .nav {
    padding-left: 0 !important;
  }
  .header .nav .nav-wrap .nav-right > ul > li .link .avatar .txt {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .header .nav {
    padding-left: 0 !important;
  }
  .header .nav .nav-wrap .nav-left > ul > li:not(.sm-show) {
    display: none;
  }
  .header .nav .nav-wrap .nav-right > ul > li:not(.sm-show) {
    display: none;
  }
  .header .nav .nav-wrap .nav-right > ul > li .link .avatar .txt {
    display: none;
  }
}
`,""]),S.locals={};const oe=S},675:(r,h,p)=>{p.d(h,{Z:()=>oe});var b=p(601),k=p.n(b),$=p(609),N=p.n($),S=N()(k());S.push([r.id,`@keyframes ani-fade-in {
  0% {
    opacity: 0;
    display: none;
  }
  1% {
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 1;
    display: block;
  }
}
@keyframes ani-fade-out {
  0% {
    opacity: 1;
    display: block;
  }
  99% {
    opacity: 0;
    display: block;
  }
  100% {
    opacity: 0;
    display: none;
  }
}
@keyframes ani-scale-in {
  0% {
    transform: scale(0);
    display: none;
  }
  1% {
    transform: scale(0);
    display: block;
  }
  100% {
    transform: scale(1);
    display: block;
  }
}
@keyframes ani-scale-out {
  0% {
    transform: scale(1);
    display: block;
  }
  99% {
    transform: scale(0);
    display: block;
  }
  100% {
    transform: scale(0);
    display: none;
  }
}
@keyframes ani-left-in {
  0% {
    opacity: 0;
    transform: translate3d(-72px, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes ani-left-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(72px, 0, 0);
  }
}
@keyframes ani-top-in {
  0% {
    opacity: 0.4;
    transform: translate(0, -72px);
  }
  100% {
    opacity: 1;
    transform: translate(0, 0);
  }
}
.page-container {
  --pageHeight: calc(var(--containerHeight) - var(--footerHeight) - var(--topHeight));
  min-height: var(--pageHeight);
  position: relative;
  background: var(--pageBgColor);
}
.page-container .page-content {
  --contentHeight: calc(var(--pageHeight) - var(--breadHeight) - var(--frame-spacing) * 2);
  padding: var(--frame-spacing);
}
.page-container .page-content.ani-in {
  overflow: hidden;
  animation: ani-left-in 0.4s forwards;
}
.page-container .page-content.ani-out {
  overflow: hidden;
  animation: ani-left-out 0.4s forwards;
}
`,""]),S.locals={};const oe=S},609:r=>{r.exports=function(h){var p=[];return p.toString=function(){return this.map(function(b){var k="",$=typeof b[5]<"u";return b[4]&&(k+="@supports (".concat(b[4],") {")),b[2]&&(k+="@media ".concat(b[2]," {")),$&&(k+="@layer".concat(b[5].length>0?" ".concat(b[5]):""," {")),k+=h(b),$&&(k+="}"),b[2]&&(k+="}"),b[4]&&(k+="}"),k}).join("")},p.i=function(b,k,$,N,S){typeof b=="string"&&(b=[[null,b,void 0]]);var oe={};if($)for(var re=0;re<this.length;re++){var Te=this[re][0];Te!=null&&(oe[Te]=!0)}for(var $e=0;$e<b.length;$e++){var ee=[].concat(b[$e]);$&&oe[ee[0]]||(typeof S<"u"&&(typeof ee[5]>"u"||(ee[1]="@layer".concat(ee[5].length>0?" ".concat(ee[5]):""," {").concat(ee[1],"}")),ee[5]=S),k&&(ee[2]&&(ee[1]="@media ".concat(ee[2]," {").concat(ee[1],"}")),ee[2]=k),N&&(ee[4]?(ee[1]="@supports (".concat(ee[4],") {").concat(ee[1],"}"),ee[4]=N):ee[4]="".concat(N)),p.push(ee))}},p}},601:r=>{r.exports=function(h){return h[1]}},837:(r,h,p)=>{var b=p(810),k=Symbol.for("react.element"),$=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,S=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};function re(Te,$e,ee){var Oe,Je={},qe=null,ft=null;ee!==void 0&&(qe=""+ee),$e.key!==void 0&&(qe=""+$e.key),$e.ref!==void 0&&(ft=$e.ref);for(Oe in $e)N.call($e,Oe)&&!oe.hasOwnProperty(Oe)&&(Je[Oe]=$e[Oe]);if(Te&&Te.defaultProps)for(Oe in $e=Te.defaultProps,$e)Je[Oe]===void 0&&(Je[Oe]=$e[Oe]);return{$$typeof:k,type:Te,key:qe,ref:ft,props:Je,_owner:S.current}}h.Fragment=$,h.jsx=re,h.jsxs=re},322:(r,h,p)=>{r.exports=p(837)},62:r=>{var h=[];function p($){for(var N=-1,S=0;S<h.length;S++)if(h[S].identifier===$){N=S;break}return N}function b($,N){for(var S={},oe=[],re=0;re<$.length;re++){var Te=$[re],$e=N.base?Te[0]+N.base:Te[0],ee=S[$e]||0,Oe="".concat($e," ").concat(ee);S[$e]=ee+1;var Je=p(Oe),qe={css:Te[1],media:Te[2],sourceMap:Te[3],supports:Te[4],layer:Te[5]};if(Je!==-1)h[Je].references++,h[Je].updater(qe);else{var ft=k(qe,N);N.byIndex=re,h.splice(re,0,{identifier:Oe,updater:ft,references:1})}oe.push(Oe)}return oe}function k($,N){var S=N.domAPI(N);S.update($);var oe=function(re){if(re){if(re.css===$.css&&re.media===$.media&&re.sourceMap===$.sourceMap&&re.supports===$.supports&&re.layer===$.layer)return;S.update($=re)}else S.remove()};return oe}r.exports=function($,N){N=N||{},$=$||[];var S=b($,N);return function(oe){oe=oe||[];for(var re=0;re<S.length;re++){var Te=S[re],$e=p(Te);h[$e].references--}for(var ee=b(oe,N),Oe=0;Oe<S.length;Oe++){var Je=S[Oe],qe=p(Je);h[qe].references===0&&(h[qe].updater(),h.splice(qe,1))}S=ee}}},793:r=>{var h={};function p(k){if(typeof h[k]>"u"){var $=document.querySelector(k);if(window.HTMLIFrameElement&&$ instanceof window.HTMLIFrameElement)try{$=$.contentDocument.head}catch{$=null}h[k]=$}return h[k]}function b(k,$){var N=p(k);if(!N)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");N.appendChild($)}r.exports=b},173:r=>{function h(p){var b=document.createElement("style");return p.setAttributes(b,p.attributes),p.insert(b,p.options),b}r.exports=h},892:(r,h,p)=>{function b(k){var $=p.nc;$&&k.setAttribute("nonce",$)}r.exports=b},36:r=>{function h(k,$,N){var S="";N.supports&&(S+="@supports (".concat(N.supports,") {")),N.media&&(S+="@media ".concat(N.media," {"));var oe=typeof N.layer<"u";oe&&(S+="@layer".concat(N.layer.length>0?" ".concat(N.layer):""," {")),S+=N.css,oe&&(S+="}"),N.media&&(S+="}"),N.supports&&(S+="}");var re=N.sourceMap;re&&typeof btoa<"u"&&(S+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(re))))," */")),$.styleTagTransform(S,k,$.options)}function p(k){if(k.parentNode===null)return!1;k.parentNode.removeChild(k)}function b(k){if(typeof document>"u")return{update:function(){},remove:function(){}};var $=k.insertStyleElement(k);return{update:function(N){h($,k,N)},remove:function(){p($)}}}r.exports=b},464:r=>{function h(p,b){if(b.styleSheet)b.styleSheet.cssText=p;else{for(;b.firstChild;)b.removeChild(b.firstChild);b.appendChild(document.createTextNode(p))}}r.exports=h},810:r=>{var h=b=>{var k={};return A.d(k,b),k},p=b=>()=>b;r.exports=o||(o=l.t(Re,2))}},xe={};function A(r){var h=xe[r];if(h!==void 0)return h.exports;var p=xe[r]={id:r,exports:{}};return M[r](p,p.exports,A),p.exports}A.n=r=>{var h=r&&r.__esModule?()=>r.default:()=>r;return A.d(h,{a:h}),h},A.d=(r,h)=>{for(var p in h)A.o(h,p)&&!A.o(r,p)&&Object.defineProperty(r,p,{enumerable:!0,get:h[p]})},A.o=(r,h)=>Object.prototype.hasOwnProperty.call(r,h),A.nc=void 0;var it={};(()=>{A.d(it,{Z:()=>ct});var r=A(322),h=A(810);const p=()=>![typeof window,typeof document].includes("undefined"),b=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),k=i=>b(i).indexOf("element")>-1,$=(i=null)=>p()?k(i)?{width:i.clientWidth,height:i.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},N=(i={})=>{const f=(0,h.useRef)(0),[v,m]=(0,h.useState)(i),y=(0,h.useCallback)(I=>{cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>m(I))},[]);return(0,h.useEffect)(()=>()=>cancelAnimationFrame(f.current),[]),[v,y]},S=()=>{const[i,f]=N($());return(0,h.useEffect)(()=>{const v=()=>f($());return window.addEventListener("resize",v,!1),()=>window.removeEventListener("resize",v,!1)},[]),i},oe=i=>b(i)==="array",re=(i,f,v="id",m="children")=>{if(!oe(i))return null;const y=I=>{for(let O=0,ae=I.length;O<ae;O++){const Q=I[O];if(Q[v]===f)return[Q];if(oe(Q[m])){const ce=y(Q[m]);if(ce)return[Q].concat(ce)}}};return y(i)},Te=i=>++i,$e=()=>{const[,i]=(0,h.useState)(0);return(0,h.useCallback)(()=>i(Te),[])},ee=i=>oe(i)&&!!i.length,Oe=({to:i,preventDefault:f,stopPropagation:v,...m})=>f?(0,r.jsx)("span",{...m}):(0,r.jsx)("a",{href:i,...m}),Je=({item:i,...f})=>(0,r.jsx)("ul",{...f}),qe=(i,...f)=>{const v={};return Object.keys(i).filter(Boolean).map(m=>{v[m]=y=>i[m](y,...f)}),v},ft=({data:i=[],events:f={},List:v=Je,Link:m=Oe,leftIcon:y,rightIcon:I,isHorizontal:O,isCollapsed:ae,level:Q=0,parentOpen:ce=!0})=>{const Be=ae&&!Q,Ze=!O&&!ae&&!ce;return i.map(J=>{const{name:Fe,path:ze,icon:We,rightIcon:at,active:Xe,open:Ct,children:jt,linkProps:$t}=J,ut=ee(jt),xt=J.id||ze||Fe,e=Be?J.title??Fe:void 0,t=Ze?"hidden":"",a=We??y,n=at??I,s=a?(0,r.jsx)("div",{className:"node-left-icon",children:a===!0?(0,r.jsx)("i",{className:"default-left-icon"}):a}):null,w=Fe?(0,r.jsx)("div",{className:"node-text",children:(0,r.jsx)("span",{children:Fe})}):null;if(ut){const L=qe(f,J,Q),V=[t,Ct?"open":""].filter(Boolean).join(" ");return(0,r.jsxs)("li",{className:V,"has-children":"true",...L,children:[(0,r.jsxs)(m,{title:e,className:`link${Xe?" active":""}`,to:ze,preventDefault:!0,stopPropagation:!1,...$t,children:[s,w,n?(0,r.jsx)("div",{className:"node-right-icon",children:n===!0?(0,r.jsx)("i",{className:"default-right-icon"}):n}):null]}),(0,r.jsx)(v,{item:J,children:ft({data:jt,events:f,List:v,Link:m,leftIcon:y,rightIcon:I,isHorizontal:O,isCollapsed:ae,level:Q+1,parentOpen:!!Ct})})]},xt)}return(0,r.jsx)("li",{className:t,children:(0,r.jsxs)(m,{title:e,className:`link${Xe?" active":""}`,to:ze,...$t,children:[s,w]})},xt)})},Ht=ft,Nt=i=>{const{children:f,open:v}=i;let m=0;if(v&&f?.length){m=f.length;let y=0;return f.map(I=>y+=Nt(I)),m+y}return m},Pt=({item:i,style:f,...v})=>(0,r.jsx)("ul",{style:{...f,"--count":Nt(i)},...v});var zt=A(62),bt=A.n(zt),Et=A(36),kt=A.n(Et),wt=A(793),vt=A.n(wt),Mt=A(892),mt=A.n(Mt),Ot=A(173),d=A.n(Ot),g=A(464),T=A.n(g),C=A(942),x={};x.styleTagTransform=T(),x.setAttributes=mt(),x.insert=vt().bind(null,"head"),x.domAPI=kt(),x.insertStyleElement=d();var Ne=bt()(C.Z,x);const fe=C.Z&&C.Z.locals?C.Z.locals:void 0,_e=i=>(0,r.jsx)("ul",{...i}),et=(i,f)=>i?Pt:({item:v,...m})=>(0,r.jsx)(_e,{className:f==="right"?"left":"",...m}),Ae=i=>{const{data:f=[],collapsed:v=!1,type:m="vertical",Link:y,width:I,bgColor:O,itemHeight:ae,collapsedWidth:Q,itemPadding:ce,style:Be,className:Ze,...J}=i,Fe=(0,h.useRef)(),ze=(0,h.useRef)();(0,h.useEffect)(()=>()=>clearTimeout(Fe.current),[]);const We=$e(),at=m==="horizontal",Xe=!at&&v,Ct={onClick:(t,a)=>{if(t.stopPropagation(),!at&&!Xe){const n=re(f,a.path,"path"),s=n[n.length-1];s.open=!s.open,We()}},onMouseEnter:(t,a,n)=>{Xe&&!n&&(clearTimeout(Fe.current),ze.current.style.width="var(--maxWidth)")},onMouseLeave:(t,a,n)=>{Xe&&!n&&(Fe.current=setTimeout(()=>ze.current.style.width="",200))}},jt=(at?["huxy-horizontal-tree",Ze]:["huxy-tree",Ze,Xe?"collapsed":""]).filter(Boolean).join(" "),{float:$t,...ut}=J?.style??{},xt={"--bgColor":O,"--itemHeight":ae,"--nodeListWidth":I,...ut};at?(xt["--itemPadding"]=ce,xt["--nodeFloat"]=$t):(xt["--width"]=I,xt["--collapsedWidth"]=Q);const e=et(!at&&!Xe,$t);return(0,r.jsx)("div",{ref:ze,className:jt,style:xt,...J,children:(0,r.jsx)("div",{className:"huxy-tree-track",children:(0,r.jsx)("ul",{className:"huxy-tree-root",children:Ht({data:f,events:Ct,List:e,Link:y,leftIcon:!0,rightIcon:!0,isHorizontal:at,isCollapsed:Xe})})})})},se=(i,f)=>Object.prototype.hasOwnProperty.call(i??{},f),ne=i=>se(i,"current"),ye=(i,f,v="click")=>{(0,h.useEffect)(()=>{const m=I=>{const O=ne(i)?i.current:i;O?.contains&&!O.contains(I.target)&&f(I)},y=typeof v=="string"?[v]:v;return y.map(I=>{document.addEventListener(I,m,!1)}),()=>{y.map(I=>{document.removeEventListener(I,m,!1)})}},[i,f,v])},Pe=i=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(i),Ke=i=>new Promise((f,v)=>{const m=new FileReader;m.readAsDataURL(i),m.addEventListener("load",()=>f(m.result)),m.addEventListener("error",y=>v(y))}),je=async i=>{if(!Pe(i))return i;const f=await(await fetch(decodeURIComponent(i))).blob();return await Ke(f)},c=i=>{const[f,v]=(0,h.useState)(i);return(0,h.useEffect)(()=>{(async m=>{const y=await je(m);v(y)})(i)},[i]),f},u=({src:i,...f})=>{const v=c(i);return(0,r.jsx)("img",{...f,src:v})},H=({Ricon:i,open:f})=>i===!0?(0,r.jsx)("i",{className:`huxy-header-angle-${f?"top":"bt"}`}):(0,r.jsx)(i,{status:f}),P=({img:i,name:f,icon:v,Ricon:m,open:y})=>i?(0,r.jsxs)("div",{className:"avatar",children:[(0,r.jsx)("div",{className:"img",children:(0,r.jsx)(u,{src:i,width:"1",height:"1",crossOrigin:"anonymous",alt:"avatar"})}),f?(0,r.jsx)("span",{className:"txt",children:f}):null,m?(0,r.jsx)("span",{className:"node-icon",children:(0,r.jsx)(H,{Ricon:m,open:y})}):null]}):(0,r.jsxs)(r.Fragment,{children:[v?(0,r.jsx)("span",{className:"node-icon",children:v}):null,f?(0,r.jsx)("span",{className:"txt",children:f}):null,m?(0,r.jsx)("span",{className:"node-icon",children:(0,r.jsx)(H,{Ricon:m,open:y})}):null]}),te=({item:i,open:f})=>{const{Custom:v,img:m,name:y,icon:I,Ricon:O,active:ae}=i;return typeof v=="function"?(0,r.jsx)(v,{item:i,className:"link"}):(0,r.jsx)("span",{className:`link${ae?" active":""}`,title:i.title||y,children:(0,r.jsx)(P,{img:m,name:y,icon:I,Ricon:O,open:f})})},Ie=({item:i,click:f})=>{const v=(0,h.useRef)(),[m,y]=(0,h.useState)(!1);ye(v,J=>m&&y(!1));const{arrowDir:I,ChildRender:O,children:ae,smShow:Q}=i,ce=ae?.length,Be=(J,Fe,ze=null)=>{ze===!1&&y(We=>!We),ze&&(J.stopPropagation(),y(!1)),f(Fe,ze)},Ze=Q?"sm-show":"";return ce||O?(0,r.jsxs)("li",{ref:v,className:`${Ze} ${m?"open":""}`,onClick:J=>Be(J,i,!1),children:[(0,r.jsx)(te,{item:i,open:m}),(0,r.jsx)("ul",{className:`huxy-header-arrow-${I||"rt"}`,children:ce?ae.map((J,Fe)=>(0,r.jsx)("li",{className:J.divider?"divider":"",children:(0,r.jsxs)("span",{onClick:ze=>Be(ze,J,!0),className:`link${J.active?" active":""}`,children:[J.icon?(0,r.jsx)("span",{className:"node-icon",children:J.icon}):null,(0,r.jsx)("span",{className:"drop-label",children:J.name})]})},`subItem-${Fe}-${J.key||J.name}`)):(0,r.jsx)("li",{children:(0,r.jsx)(O,{item:i,close:()=>y(!1)})})})]}):(0,r.jsx)("li",{onClick:J=>Be(J,i),className:Ze,children:(0,r.jsx)(te,{item:i,open:m})})},Y=({list:i,click:f})=>(0,r.jsx)("ul",{children:i.map((v,m)=>(0,r.jsx)(Ie,{click:f,item:v},`navItem-${m}-${v.key||v.name}`))}),F=i=>{const{leftList:f,rightList:v,handleNavClick:m,logo:y,title:I,Link:O}=i;return(0,r.jsxs)("div",{className:"header",children:[(0,r.jsxs)(O,{className:"banner",to:"/",children:[y?(0,r.jsx)("div",{className:"logo",children:(0,r.jsx)("img",{width:"1",height:"1",src:y,alt:"logo"})}):null,(0,r.jsx)("div",{className:"title",children:I??"Dashboard"})]}),(0,r.jsx)("div",{className:"nav",children:(0,r.jsxs)("div",{className:"nav-wrap",children:[(0,r.jsx)("div",{className:"nav-left",children:(0,r.jsx)(Y,{list:f,click:m})}),(0,r.jsx)("div",{className:"nav-right",children:(0,r.jsx)(Y,{list:v,click:m})})]})})]})};var ge=A(505),Ce={};Ce.styleTagTransform=T(),Ce.setAttributes=mt(),Ce.insert=vt().bind(null,"head"),Ce.domAPI=kt(),Ce.insertStyleElement=d();var He=bt()(ge.Z,Ce);const Ve=ge.Z&&ge.Z.locals?ge.Z.locals:void 0,j=({language:i,...f})=>(0,h.useMemo)(()=>(0,r.jsx)(F,{...f}),[i]),X=i=>{const{navMenu:f,headerStyle:v,navMenuStyle:m,Link:y,leftList:I,rightList:O,handleNavClick:ae,logo:Q,title:ce,language:Be}=i;return(0,r.jsxs)("header",{className:"frame-header",style:v,children:[I?.length||O?.length?(0,r.jsx)(j,{Link:y,leftList:I,rightList:O,handleNavClick:(Ze,J)=>ae(i,Ze,J),logo:Q,title:ce,language:Be}):null,f?.length?(0,r.jsx)(Ae,{data:f,type:"horizontal",Link:y,style:m}):null]})};var be=A(84),we={};we.styleTagTransform=T(),we.setAttributes=mt(),we.insert=vt().bind(null,"head"),we.domAPI=kt(),we.insertStyleElement=d();var ke=bt()(be.Z,we);const K=be.Z&&be.Z.locals?be.Z.locals:void 0,rt=({Footer:i})=>(0,r.jsx)("div",{className:"footer",children:i?(0,r.jsx)(i,{}):"copyright \xA9 2020-2022"}),tt=i=>{const{useStore:f,menu:v,MenuTop:m,MenuBottom:y,Link:I,inputPath:O,asideStyle:ae}=i,[Q,ce]=f("huxy-collapse"),{width:Be}=S(),Ze=(0,h.useRef)();return ye(Ze,J=>{Be<=1024&&Q&&ce(!1)}),(0,h.useEffect)(()=>{Be<=1024&&Q&&ce(!1)},[O]),(0,r.jsx)("aside",{className:"frame-aside",style:ae,children:(0,r.jsxs)("div",{ref:Ze,style:{height:"100%"},children:[m&&(0,r.jsx)(m,{...i}),(0,r.jsx)(Ae,{data:v,collapsed:Q&&Be>1024,Link:I}),y&&(0,r.jsx)(y,{collapsed:Q,isSmall:Be<=1024,setCollapsed:ce})]})})},Ge=380,Le=({inputPath:i,menuAnimate:f="ani-in"})=>{const v=(0,h.useRef)(i.split("?")[0]),m=(0,h.useRef)(),[y,I]=(0,h.useState)("");return(0,h.useEffect)(()=>{const O=i.split("?")[0];return O!==v.current&&(v.current=O,I(` ${f}`),m.current=setTimeout(()=>{I("")},Ge)),()=>{clearTimeout(m.current),I("")}},[i]),y},nt=i=>{const{inputPath:f,contentStyle:v,menuAnimate:m,children:y}=i,I=Le({inputPath:f,menuAnimate:m});return(0,r.jsx)("div",{className:`page-content${I}`,style:v,children:y})};var De=A(675),Se={};Se.styleTagTransform=T(),Se.setAttributes=mt(),Se.insert=vt().bind(null,"head"),Se.domAPI=kt(),Se.insertStyleElement=d();var ot=bt()(De.Z,Se);const pt=De.Z&&De.Z.locals?De.Z.locals:void 0,gt=i=>{const{menu:f,current:v,MainTop:m,children:y,inputPath:I,contentStyle:O,menuAnimate:ae}=i,Q=f?.length,ce=ae?ae===!0?"ani-in":ae:"";return(0,r.jsxs)("div",{className:`frame-container${Q?"":" no-sidebar"}`,children:[Q?(0,r.jsx)(tt,{...i}):null,(0,r.jsx)("div",{className:"frame-view",children:(0,r.jsxs)("div",{className:"page-container",children:[m&&(0,r.jsx)(m,{current:v}),ce?(0,r.jsx)(nt,{inputPath:I,contentStyle:O,menuAnimate:ce,children:y}):(0,r.jsx)("div",{className:"page-content",style:O,children:y})]})}),(0,r.jsx)("footer",{className:"frame-footer",children:(0,r.jsx)(rt,{...i})})]})};var lt=A(91),me={};me.styleTagTransform=T(),me.setAttributes=mt(),me.insert=vt().bind(null,"head"),me.domAPI=kt(),me.insertStyleElement=d();var st=bt()(lt.Z,me);const dt=lt.Z&&lt.Z.locals?lt.Z.locals:void 0,ct=i=>{const{useStore:f,vertical:v,horizontal:m,menu:y,leftList:I,rightList:O}=i,{width:ae}=S(),[Q]=f("huxy-collapse"),ce=ae<=1024,Be=ce?y:v,Ze=ce?[]:m,J=Be?.length,Fe=Ze?.length,ze=Fe&&J,We=ze?"compose":Fe?"horizontal":Q?"collapsed":"",at=ze&&Q?"composeCollapsed":"",Xe=I?.length||O?.length?"":"no-header",Ct=["frame",We,at,Xe].filter(Boolean).join(" ");return(0,r.jsxs)("div",{className:Ct,children:[(0,r.jsx)(X,{...i,navMenu:Ze}),(0,r.jsx)("main",{className:"frame-main",children:(0,r.jsx)(gt,{...i,menu:Be})})]})}})();var B=it.Z}}]);
