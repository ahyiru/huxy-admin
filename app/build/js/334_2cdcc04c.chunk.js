(self.webpackChunk=self.webpackChunk||[]).push([[334],{86665:function(Xe,M,l){l.d(M,{Z:function(){return lt}});var o=l(27378),fe=l(60042),Q=l.n(fe),S=l(26775),A=l(92746),nt=l(649),W=l(11026),r=l(18808),u=l(50189),p=l(31542),w=l(25773),$=l(64649),P=l(83395),I=l(78730),E=o.forwardRef(function(e,t){var n=e.prefixCls,a=e.style,d=e.className,N=e.duration,C=N===void 0?4.5:N,R=e.eventKey,j=e.content,k=e.closable,L=e.closeIcon,Y=L===void 0?"x":L,H=e.props,B=e.onClick,U=e.onNoticeClose,Oe=e.times,se=e.hovering,ce=o.useState(!1),He=(0,W.Z)(ce,2),Re=He[0],$e=He[1],Le=se||Re,J=function(){U(R)},ee=function(ie){(ie.key==="Enter"||ie.code==="Enter"||ie.keyCode===I.Z.ENTER)&&J()};o.useEffect(function(){if(!Le&&C>0){var de=setTimeout(function(){J()},C*1e3);return function(){clearTimeout(de)}}},[C,Le,Oe]);var V="".concat(n,"-notice");return o.createElement("div",(0,w.Z)({},H,{ref:t,className:Q()(V,d,(0,$.Z)({},"".concat(V,"-closable"),k)),style:a,onMouseEnter:function(ie){var ye;$e(!0),H==null||(ye=H.onMouseEnter)===null||ye===void 0||ye.call(H,ie)},onMouseLeave:function(ie){var ye;$e(!1),H==null||(ye=H.onMouseLeave)===null||ye===void 0||ye.call(H,ie)},onClick:B}),o.createElement("div",{className:"".concat(V,"-content")},j),k&&o.createElement("a",{tabIndex:0,className:"".concat(V,"-close"),onKeyDown:ee,onClick:function(ie){ie.preventDefault(),ie.stopPropagation(),J()}},Y))}),te=E,oe=o.createContext({}),Te=function(t){var n=t.children,a=t.classNames;return o.createElement(oe.Provider,{value:{classNames:a}},n)},Ne=Te,q=l(33940),ze=8,Ve=3,qe=16,ct=function(t){var n={offset:ze,threshold:Ve,gap:qe};if(t&&(0,q.Z)(t)==="object"){var a,d,N;n.offset=(a=t.offset)!==null&&a!==void 0?a:ze,n.threshold=(d=t.threshold)!==null&&d!==void 0?d:Ve,n.gap=(N=t.gap)!==null&&N!==void 0?N:qe}return[!!t,n]},jt=ct,bt=["className","style","classNames","styles"],kt=function(t){var n,a=t.configList,d=t.placement,N=t.prefixCls,C=t.className,R=t.style,j=t.motion,k=t.onAllNoticeRemoved,L=t.onNoticeClose,Y=t.stack,H=(0,o.useContext)(oe),B=H.classNames,U=(0,o.useRef)({}),Oe=(0,o.useState)(null),se=(0,W.Z)(Oe,2),ce=se[0],He=se[1],Re=(0,o.useState)([]),$e=(0,W.Z)(Re,2),Le=$e[0],J=$e[1],ee=a.map(function(st){return{config:st,key:String(st.key)}}),V=jt(Y),de=(0,W.Z)(V,2),ie=de[0],ye=de[1],pt=ye.offset,wt=ye.threshold,It=ye.gap,zt=ie&&(Le.length>0||ee.length<=wt),Jt=typeof j=="function"?j(d):j;return(0,o.useEffect)(function(){ie&&Le.length>1&&J(function(st){return st.filter(function(Et){return ee.some(function(Tt){var At=Tt.key;return Et===At})})})},[Le,ee,ie]),(0,o.useEffect)(function(){var st;if(ie&&U.current[(st=ee[ee.length-1])===null||st===void 0?void 0:st.key]){var Et;He(U.current[(Et=ee[ee.length-1])===null||Et===void 0?void 0:Et.key])}},[ee,ie]),o.createElement(P.V4,(0,w.Z)({key:d,className:Q()(N,"".concat(N,"-").concat(d),B?.list,C,(n={},(0,$.Z)(n,"".concat(N,"-stack"),!!ie),(0,$.Z)(n,"".concat(N,"-stack-expanded"),zt),n)),style:R,keys:ee,motionAppear:!0},Jt,{onAllRemoved:function(){k(d)}}),function(st,Et){var Tt=st.config,At=st.className,_t=st.style,qt=st.index,Xt=Tt,Wt=Xt.key,eo=Xt.times,yt=String(Wt),Mt=Tt,to=Mt.className,oo=Mt.style,Ht=Mt.classNames,Lt=Mt.styles,ro=(0,r.Z)(Mt,bt),Ft=ee.findIndex(function(Dt){return Dt.key===yt}),Zt={};if(ie){var Rt=ee.length-1-(Ft>-1?Ft:qt-1),Vt=d==="top"||d==="bottom"?"-50%":"0";if(Rt>0){var Bt,Ut,Yt;Zt.height=zt?(Bt=U.current[yt])===null||Bt===void 0?void 0:Bt.offsetHeight:ce?.offsetHeight;for(var Qt=0,Kt=0;Kt<Rt;Kt++){var Gt;Qt+=((Gt=U.current[ee[ee.length-1-Kt].key])===null||Gt===void 0?void 0:Gt.offsetHeight)+It}var no=(zt?Qt:Rt*pt)*(d.startsWith("top")?1:-1),ao=!zt&&ce!==null&&ce!==void 0&&ce.offsetWidth&&(Ut=U.current[yt])!==null&&Ut!==void 0&&Ut.offsetWidth?(ce?.offsetWidth-pt*2*(Rt<3?Rt:3))/((Yt=U.current[yt])===null||Yt===void 0?void 0:Yt.offsetWidth):1;Zt.transform="translate3d(".concat(Vt,", ").concat(no,"px, 0) scaleX(").concat(ao,")")}else Zt.transform="translate3d(".concat(Vt,", 0, 0)")}return o.createElement("div",{ref:Et,className:Q()("".concat(N,"-notice-wrapper"),At,Ht?.wrapper),style:(0,u.Z)((0,u.Z)((0,u.Z)({},_t),Zt),Lt?.wrapper),onMouseEnter:function(){return J(function(Ot){return Ot.includes(yt)?Ot:[].concat((0,nt.Z)(Ot),[yt])})},onMouseLeave:function(){return J(function(Ot){return Ot.filter(function(io){return io!==yt})})}},o.createElement(te,(0,w.Z)({},ro,{ref:function(Ot){Ft>-1?U.current[yt]=Ot:delete U.current[yt]},prefixCls:N,classNames:Ht,styles:Lt,className:Q()(to,B?.notice),style:oo,times:eo,key:Wt,eventKey:Wt,onNoticeClose:L,hovering:ie&&Le.length>0})))})},$t=kt,vt=o.forwardRef(function(e,t){var n=e.prefixCls,a=n===void 0?"rc-notification":n,d=e.container,N=e.motion,C=e.maxCount,R=e.className,j=e.style,k=e.onAllRemoved,L=e.stack,Y=e.renderNotifications,H=o.useState([]),B=(0,W.Z)(H,2),U=B[0],Oe=B[1],se=function(de){var ie,ye=U.find(function(pt){return pt.key===de});ye==null||(ie=ye.onClose)===null||ie===void 0||ie.call(ye),Oe(function(pt){return pt.filter(function(wt){return wt.key!==de})})};o.useImperativeHandle(t,function(){return{open:function(de){Oe(function(ie){var ye=(0,nt.Z)(ie),pt=ye.findIndex(function(zt){return zt.key===de.key}),wt=(0,u.Z)({},de);if(pt>=0){var It;wt.times=(((It=ie[pt])===null||It===void 0?void 0:It.times)||0)+1,ye[pt]=wt}else wt.times=0,ye.push(wt);return C>0&&ye.length>C&&(ye=ye.slice(-C)),ye})},close:function(de){se(de)},destroy:function(){Oe([])}}});var ce=o.useState({}),He=(0,W.Z)(ce,2),Re=He[0],$e=He[1];o.useEffect(function(){var V={};U.forEach(function(de){var ie=de.placement,ye=ie===void 0?"topRight":ie;ye&&(V[ye]=V[ye]||[],V[ye].push(de))}),Object.keys(Re).forEach(function(de){V[de]=V[de]||[]}),$e(V)},[U]);var Le=function(de){$e(function(ie){var ye=(0,u.Z)({},ie),pt=ye[de]||[];return pt.length||delete ye[de],ye})},J=o.useRef(!1);if(o.useEffect(function(){Object.keys(Re).length>0?J.current=!0:J.current&&(k?.(),J.current=!1)},[Re]),!d)return null;var ee=Object.keys(Re);return(0,p.createPortal)(o.createElement(o.Fragment,null,ee.map(function(V){var de=Re[V],ie=o.createElement($t,{key:V,configList:de,placement:V,prefixCls:a,className:R?.(V),style:j?.(V),motion:N,onNoticeClose:se,onAllNoticeRemoved:Le,stack:L});return Y?Y(ie,{prefixCls:a,key:V}):ie})),d)}),Ct=vt,ut=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],Nt=function(){return document.body},ht=0;function St(){for(var e={},t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return n.forEach(function(d){d&&Object.keys(d).forEach(function(N){var C=d[N];C!==void 0&&(e[N]=C)})}),e}function dt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,n=t===void 0?Nt:t,a=e.motion,d=e.prefixCls,N=e.maxCount,C=e.className,R=e.style,j=e.onAllRemoved,k=e.stack,L=e.renderNotifications,Y=(0,r.Z)(e,ut),H=o.useState(),B=(0,W.Z)(H,2),U=B[0],Oe=B[1],se=o.useRef(),ce=o.createElement(Ct,{container:U,ref:se,prefixCls:d,motion:a,maxCount:N,className:C,style:R,onAllRemoved:j,stack:k,renderNotifications:L}),He=o.useState([]),Re=(0,W.Z)(He,2),$e=Re[0],Le=Re[1],J=o.useMemo(function(){return{open:function(V){var de=St(Y,V);(de.key===null||de.key===void 0)&&(de.key="rc-notification-".concat(ht),ht+=1),Le(function(ie){return[].concat((0,nt.Z)(ie),[{type:"open",config:de}])})},close:function(V){Le(function(de){return[].concat((0,nt.Z)(de),[{type:"close",key:V}])})},destroy:function(){Le(function(V){return[].concat((0,nt.Z)(V),[{type:"destroy"}])})}}},[]);return o.useEffect(function(){Oe(n())}),o.useEffect(function(){se.current&&$e.length&&($e.forEach(function(ee){switch(ee.type){case"open":se.current.open(ee.config);break;case"close":se.current.close(ee.key);break;case"destroy":se.current.destroy();break}}),Le(function(ee){return ee.filter(function(V){return!$e.includes(V)})}))},[$e]),[J,ce]}var Pt=l(92916),c=l(14770),x=l(55222),K=l(53058),O=l(77597),y=l(93326),me=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(e);d<a.length;d++)t.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(e,a[d])&&(n[a[d]]=e[a[d]]);return n};const Ee={info:o.createElement(O.Z,null),success:o.createElement(c.Z,null),error:o.createElement(x.Z,null),warning:o.createElement(K.Z,null),loading:o.createElement(y.Z,null)},Qe=e=>{let{prefixCls:t,type:n,icon:a,children:d}=e;return o.createElement("div",{className:Q()(`${t}-custom-content`,`${t}-${n}`)},a||Ee[n],o.createElement("span",null,d))},Je=e=>{const{prefixCls:t,className:n,type:a,icon:d,content:N}=e,C=me(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:R}=React.useContext(ConfigContext),j=t||R("message"),[,k]=useStyle(j);return React.createElement(Notice,Object.assign({},C,{prefixCls:j,className:classNames(n,k,`${j}-notice-pure-panel`),eventKey:"pure",duration:null,content:React.createElement(Qe,{prefixCls:j,type:a,icon:d},N)}))};var Ue=null,pe=l(32120),re=l(72457),ve=l(6117),Ze=l(5515);const s=e=>{const{componentCls:t,iconCls:n,boxShadow:a,colorText:d,colorSuccess:N,colorError:C,colorWarning:R,colorInfo:j,fontSizeLG:k,motionEaseInOutCirc:L,motionDurationSlow:Y,marginXS:H,paddingXS:B,borderRadiusLG:U,zIndexPopup:Oe,contentPadding:se,contentBg:ce}=e,He=`${t}-notice`,Re=new pe.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:B,transform:"translateY(0)",opacity:1}}),$e=new pe.E4("MessageMoveOut",{"0%":{maxHeight:e.height,padding:B,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),Le={padding:B,textAlign:"center",[`${t}-custom-content > ${n}`]:{verticalAlign:"text-bottom",marginInlineEnd:H,fontSize:k},[`${He}-content`]:{display:"inline-block",padding:se,background:ce,borderRadius:U,boxShadow:a,pointerEvents:"all"},[`${t}-success > ${n}`]:{color:N},[`${t}-error > ${n}`]:{color:C},[`${t}-warning > ${n}`]:{color:R},[`${t}-info > ${n},
      ${t}-loading > ${n}`]:{color:j}};return[{[t]:Object.assign(Object.assign({},(0,re.Wf)(e)),{color:d,position:"fixed",top:H,width:"100%",pointerEvents:"none",zIndex:Oe,[`${t}-move-up`]:{animationFillMode:"forwards"},[`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]:{animationName:Re,animationDuration:Y,animationPlayState:"paused",animationTimingFunction:L},[`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${t}-move-up-leave`]:{animationName:$e,animationDuration:Y,animationPlayState:"paused",animationTimingFunction:L},[`${t}-move-up-leave${t}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[t]:{[`${He}-wrapper`]:Object.assign({},Le)}},{[`${t}-notice-pure-panel`]:Object.assign(Object.assign({},Le),{padding:0,textAlign:"start"})}]};var h=(0,ve.Z)("Message",e=>{const t=(0,Ze.TS)(e,{height:150});return[s(t)]},e=>({zIndexPopup:e.zIndexPopupBase+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}));function Z(e,t){return{motionName:t??`${e}-move-up`}}function b(e){let t;const n=new Promise(d=>{t=e(()=>{d(!0)})}),a=()=>{t?.()};return a.then=(d,N)=>n.then(d,N),a.promise=n,a}var D=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(e);d<a.length;d++)t.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(e,a[d])&&(n[a[d]]=e[a[d]]);return n};const Ce=8,ge=3,be=e=>{let{children:t,prefixCls:n}=e;const[,a]=h(n);return o.createElement(Ne,{classNames:{list:a,notice:a}},t)},ne=(e,t)=>{let{prefixCls:n,key:a}=t;return o.createElement(be,{prefixCls:n,key:a},e)},le=o.forwardRef((e,t)=>{const{top:n,prefixCls:a,getContainer:d,maxCount:N,duration:C=ge,rtl:R,transitionName:j,onAllRemoved:k}=e,{getPrefixCls:L,getPopupContainer:Y,message:H}=o.useContext(S.E_),B=a||L("message"),U=()=>({left:"50%",transform:"translateX(-50%)",top:n??Ce}),Oe=()=>Q()({[`${B}-rtl`]:R}),se=()=>Z(B,j),ce=o.createElement("span",{className:`${B}-close-x`},o.createElement(A.Z,{className:`${B}-close-icon`})),[He,Re]=dt({prefixCls:B,style:U,className:Oe,motion:se,closable:!1,closeIcon:ce,duration:C,getContainer:()=>d?.()||Y?.()||document.body,maxCount:N,onAllRemoved:k,renderNotifications:ne});return o.useImperativeHandle(t,()=>Object.assign(Object.assign({},He),{prefixCls:B,message:H})),Re});let we=0;function je(e){const t=o.useRef(null),n=(0,Pt.ln)("Message");return[o.useMemo(()=>{const d=k=>{var L;(L=t.current)===null||L===void 0||L.close(k)},N=k=>{if(!t.current){const ee=()=>{};return ee.then=()=>{},ee}const{open:L,prefixCls:Y,message:H}=t.current,B=`${Y}-notice`,{content:U,icon:Oe,type:se,key:ce,className:He,style:Re,onClose:$e}=k,Le=D(k,["content","icon","type","key","className","style","onClose"]);let J=ce;return J==null&&(we+=1,J=`antd-message-${we}`),b(ee=>(L(Object.assign(Object.assign({},Le),{key:J,content:o.createElement(Qe,{prefixCls:Y,type:se,icon:Oe},U),placement:"top",className:Q()(se&&`${B}-${se}`,He,H?.className),style:Object.assign(Object.assign({},H?.style),Re),onClose:()=>{$e?.(),ee()}})),()=>{d(J)}))},R={open:N,destroy:k=>{var L;k!==void 0?d(k):(L=t.current)===null||L===void 0||L.destroy()}};return["info","success","warning","error","loading"].forEach(k=>{const L=(Y,H,B)=>{let U;Y&&typeof Y=="object"&&"content"in Y?U=Y:U={content:Y};let Oe,se;typeof H=="function"?se=H:(Oe=H,se=B);const ce=Object.assign(Object.assign({onClose:se,duration:Oe},U),{type:k});return N(ce)};R[k]=L}),R},[]),o.createElement(le,Object.assign({key:"message-holder"},e,{ref:t}))]}function Ye(e){return je(e)}var Ae=l(77719),z=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(e);d<a.length;d++)t.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(e,a[d])&&(n[a[d]]=e[a[d]]);return n};const X={info:o.createElement(O.Z,null),success:o.createElement(c.Z,null),error:o.createElement(x.Z,null),warning:o.createElement(K.Z,null),loading:o.createElement(y.Z,null)};function ue(e,t){return t===null||t===!1?null:t||o.createElement("span",{className:`${e}-close-x`},o.createElement(A.Z,{className:`${e}-close-icon`}))}const G={success:c.Z,info:O.Z,error:x.Z,warning:K.Z},et=e=>{const{prefixCls:t,icon:n,type:a,message:d,description:N,btn:C,role:R="alert"}=e;let j=null;return n?j=o.createElement("span",{className:`${t}-icon`},n):a&&(j=o.createElement(G[a]||null,{className:Q()(`${t}-icon`,`${t}-icon-${a}`)})),o.createElement("div",{className:Q()({[`${t}-with-icon`]:j}),role:R},j,o.createElement("div",{className:`${t}-message`},d),o.createElement("div",{className:`${t}-description`},N),C&&o.createElement("div",{className:`${t}-btn`},C))},tt=e=>{const{prefixCls:t,className:n,icon:a,type:d,message:N,description:C,btn:R,closable:j=!0,closeIcon:k}=e,L=z(e,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon"]),{getPrefixCls:Y}=React.useContext(ConfigContext),H=t||Y("notification"),B=`${H}-notice`,[,U]=useStyle(H);return React.createElement("div",{className:classNames(`${B}-pure-panel`,U,n)},React.createElement(Notice,Object.assign({},L,{prefixCls:H,eventKey:"pure",duration:null,closable:j,closeIcon:ue(H,k),content:React.createElement(et,{prefixCls:B,icon:a,type:d,message:N,description:C,btn:R})})))};var ot=null,at=e=>{const{componentCls:t,notificationMarginEdge:n,animationMaxHeight:a}=e,d=`${t}-notice`,N=new pe.E4("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),C=new pe.E4("antNotificationTopFadeIn",{"0%":{top:-a,opacity:0},"100%":{top:0,opacity:1}}),R=new pe.E4("antNotificationBottomFadeIn",{"0%":{bottom:-a,opacity:0},"100%":{bottom:0,opacity:1}}),j=new pe.E4("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[t]:{[`&${t}-top, &${t}-bottom`]:{marginInline:0,[d]:{marginInline:"auto auto"}},[`&${t}-top`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:C}},[`&${t}-bottom`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:R}},[`&${t}-topRight, &${t}-bottomRight`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:N}},[`&${t}-topLeft, &${t}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:n,_skip_check_:!0},[d]:{marginInlineEnd:"auto",marginInlineStart:0},[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:j}}}}};const Ie=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],De={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},We=(e,t)=>{const{componentCls:n}=e;return{[`${n}-${t}`]:{[`&${n}-stack > ${n}-notice-wrapper`]:{[t.startsWith("top")?"top":"bottom"]:0,[De[t]]:{value:0,_skip_check_:!0}}}}},Ge=e=>{const t={};for(let n=1;n<e.notificationStackLayer;n++)t[`&:nth-last-child(${n+1})`]={overflow:"hidden",[`& > ${e.componentCls}-notice`]:{opacity:0,transition:`opacity ${e.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${e.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},t)},gt=e=>{const t={};for(let n=1;n<e.notificationStackLayer;n++)t[`&:nth-last-child(${n+1})`]={background:e.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},t)};var Se=e=>{const{componentCls:t}=e;return Object.assign({[`${t}-stack`]:{[`& > ${t}-notice-wrapper`]:Object.assign({transition:`all ${e.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},Ge(e))},[`${t}-stack:not(${t}-stack-expanded)`]:{[`& > ${t}-notice-wrapper`]:Object.assign({},gt(e))},[`${t}-stack${t}-stack-expanded`]:{[`& > ${t}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,width:e.width,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${e.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:e.margin,width:"100%",insetInline:0,bottom:-e.margin,background:"transparent",pointerEvents:"auto"}}}},Ie.map(n=>We(e,n)).reduce((n,a)=>Object.assign(Object.assign({},n),a),{}))};const Fe=e=>{const{iconCls:t,componentCls:n,boxShadow:a,fontSizeLG:d,notificationMarginBottom:N,borderRadiusLG:C,colorSuccess:R,colorInfo:j,colorWarning:k,colorError:L,colorTextHeading:Y,notificationBg:H,notificationPadding:B,notificationMarginEdge:U,motionDurationMid:Oe,motionEaseInOut:se,fontSize:ce,lineHeight:He,width:Re,notificationIconSize:$e,colorText:Le}=e,J=`${n}-notice`,ee=new pe.E4("antNotificationFadeOut",{"0%":{maxHeight:e.animationMaxHeight,marginBottom:N},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}}),V={position:"relative",width:Re,maxWidth:`calc(100vw - ${U*2}px)`,marginBottom:N,marginInlineStart:"auto",background:H,borderRadius:C,boxShadow:a,[J]:{padding:B,overflow:"hidden",lineHeight:He,wordWrap:"break-word"},[`${n}-close-icon`]:{fontSize:ce,cursor:"pointer"},[`${J}-message`]:{marginBottom:e.marginXS,color:Y,fontSize:d,lineHeight:e.lineHeightLG},[`${J}-description`]:{fontSize:ce,color:Le},[`&${J}-closable ${J}-message`]:{paddingInlineEnd:e.paddingLG},[`${J}-with-icon ${J}-message`]:{marginBottom:e.marginXS,marginInlineStart:e.marginSM+$e,fontSize:d},[`${J}-with-icon ${J}-description`]:{marginInlineStart:e.marginSM+$e,fontSize:ce},[`${J}-icon`]:{position:"absolute",fontSize:$e,lineHeight:0,[`&-success${t}`]:{color:R},[`&-info${t}`]:{color:j},[`&-warning${t}`]:{color:k},[`&-error${t}`]:{color:L}},[`${J}-close`]:{position:"absolute",top:e.notificationPaddingVertical,insetInlineEnd:e.notificationPaddingHorizontal,color:e.colorIcon,outline:"none",width:e.notificationCloseButtonSize,height:e.notificationCloseButtonSize,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.wireframe?"transparent":e.colorFillContent}},[`${J}-btn`]:{float:"right",marginTop:e.marginSM}};return[{[n]:Object.assign(Object.assign({},(0,re.Wf)(e)),{position:"fixed",zIndex:e.zIndexPopup,marginRight:{value:U,_skip_check_:!0},[`${n}-hook-holder`]:{position:"relative"},[`${n}-fade-appear-prepare`]:{opacity:"0 !important"},[`${n}-fade-enter, ${n}-fade-appear`]:{animationDuration:e.motionDurationMid,animationTimingFunction:se,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${n}-fade-leave`]:{animationTimingFunction:se,animationFillMode:"both",animationDuration:Oe,animationPlayState:"paused"},[`${n}-fade-enter${n}-fade-enter-active, ${n}-fade-appear${n}-fade-appear-active`]:{animationPlayState:"running"},[`${n}-fade-leave${n}-fade-leave-active`]:{animationName:ee,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${J}-btn`]:{float:"left"}}})},{[n]:{[`${J}-wrapper`]:Object.assign({},V)}},{[`${J}-pure-panel`]:Object.assign(Object.assign({},V),{margin:0})}]};var _e=(0,ve.Z)("Notification",e=>{const t=e.paddingMD,n=e.paddingLG,a=(0,Ze.TS)(e,{notificationBg:e.colorBgElevated,notificationPaddingVertical:t,notificationPaddingHorizontal:n,notificationIconSize:e.fontSizeLG*e.lineHeightLG,notificationCloseButtonSize:e.controlHeightLG*.55,notificationMarginBottom:e.margin,notificationPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,notificationMarginEdge:e.marginLG,animationMaxHeight:150,notificationStackLayer:3});return[Fe(a),at(a),Se(a)]},e=>({zIndexPopup:e.zIndexPopupBase+50,width:384}));function mt(e,t,n){let a;switch(e){case"top":a={left:"50%",transform:"translateX(-50%)",right:"auto",top:t,bottom:"auto"};break;case"topLeft":a={left:0,top:t,bottom:"auto"};break;case"topRight":a={right:0,top:t,bottom:"auto"};break;case"bottom":a={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:n};break;case"bottomLeft":a={left:0,top:"auto",bottom:n};break;default:a={right:0,top:"auto",bottom:n};break}return a}function xt(e){return{motionName:`${e}-fade`}}var it=l(56318),i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,a=Object.getOwnPropertySymbols(e);d<a.length;d++)t.indexOf(a[d])<0&&Object.prototype.propertyIsEnumerable.call(e,a[d])&&(n[a[d]]=e[a[d]]);return n};const f=24,v=4.5,m="topRight",g=e=>{let{children:t,prefixCls:n}=e;const[,a]=_e(n);return o.createElement(Ne,{classNames:{list:a,notice:a}},t)},T=(e,t)=>{let{prefixCls:n,key:a}=t;return o.createElement(g,{prefixCls:n,key:a},e)},F=o.forwardRef((e,t)=>{const{top:n,bottom:a,prefixCls:d,getContainer:N,maxCount:C,rtl:R,onAllRemoved:j,stack:k}=e,{getPrefixCls:L,getPopupContainer:Y,notification:H}=o.useContext(S.E_),[,B]=(0,it.Z)(),U=d||L("notification"),Oe=$e=>mt($e,n??f,a??f),se=()=>Q()({[`${U}-rtl`]:R}),ce=()=>xt(U),[He,Re]=dt({prefixCls:U,style:Oe,className:se,motion:ce,closable:!0,closeIcon:ue(U),duration:v,getContainer:()=>N?.()||Y?.()||document.body,maxCount:C,onAllRemoved:j,renderNotifications:T,stack:k===!1?!1:{threshold:typeof k=="object"?k?.threshold:void 0,offset:8,gap:B.margin}});return o.useImperativeHandle(t,()=>Object.assign(Object.assign({},He),{prefixCls:U,notification:H})),Re});function ae(e){const t=o.useRef(null),n=(0,Pt.ln)("Notification");return[o.useMemo(()=>{const d=j=>{var k;if(!t.current)return;const{open:L,prefixCls:Y,notification:H}=t.current,B=`${Y}-notice`,{message:U,description:Oe,icon:se,type:ce,btn:He,className:Re,style:$e,role:Le="alert",closeIcon:J}=j,ee=i(j,["message","description","icon","type","btn","className","style","role","closeIcon"]),V=ue(B,J);return L(Object.assign(Object.assign({placement:(k=e?.placement)!==null&&k!==void 0?k:m},ee),{content:o.createElement(et,{prefixCls:B,icon:se,type:ce,message:U,description:Oe,btn:He,role:Le}),className:Q()(ce&&`${B}-${ce}`,Re,H?.className),style:Object.assign(Object.assign({},H?.style),$e),closeIcon:V,closable:!!V}))},C={open:d,destroy:j=>{var k,L;j!==void 0?(k=t.current)===null||k===void 0||k.close(j):(L=t.current)===null||L===void 0||L.destroy()}};return["success","info","warning","error"].forEach(j=>{C[j]=k=>d(Object.assign(Object.assign({},k),{type:j}))}),C},[]),o.createElement(F,Object.assign({key:"notification-holder"},e,{ref:t}))]}function he(e){return ae(e)}const ke=o.createContext({});var Pe=o.createContext({message:{},notification:{},modal:{}});const _=e=>{const{componentCls:t,colorText:n,fontSize:a,lineHeight:d,fontFamily:N}=e;return{[t]:{color:n,fontSize:a,lineHeight:d,fontFamily:N}}};var xe=(0,ve.Z)("App",e=>[_(e)]);const Be=()=>o.useContext(Pe),rt=e=>{const{prefixCls:t,children:n,className:a,rootClassName:d,message:N,notification:C,style:R,component:j="div"}=e,{getPrefixCls:k}=(0,o.useContext)(S.E_),L=k("app",t),[Y,H]=xe(L),B=Q()(H,L,a,d),U=(0,o.useContext)(ke),Oe=o.useMemo(()=>({message:Object.assign(Object.assign({},U.message),N),notification:Object.assign(Object.assign({},U.notification),C)}),[N,C,U.message,U.notification]),[se,ce]=Ye(Oe.message),[He,Re]=he(Oe.notification),[$e,Le]=(0,Ae.Z)(),J=o.useMemo(()=>({message:se,notification:He,modal:$e}),[se,He,$e]),ee=j===!1?o.Fragment:j,V={className:B,style:R};return Y(o.createElement(Pe.Provider,{value:J},o.createElement(ke.Provider,{value:Oe},o.createElement(ee,Object.assign({},V),Le,ce,Re,n))))};rt.useApp=Be;var lt=rt},58035:function(Xe,M,l){l.d(M,{Z:function(){return Pt}});var o=l(60042),fe=l.n(o),Q=l(83395),S=l(27378),A=l(97933),nt=l(93795),W=l(26775),r=l(32120),u=l(72457),p=l(9540),w=l(5515),$=l(6117);const P=new r.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),I=new r.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),E=new r.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),te=new r.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),oe=new r.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),Te=new r.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),Ne=c=>{const{componentCls:x,iconCls:K,antCls:O,badgeShadowSize:y,motionDurationSlow:me,textFontSize:Ee,textFontSizeSM:Qe,statusSize:Je,dotSize:Ue,textFontWeight:pe,indicatorHeight:re,indicatorHeightSM:ve,marginXS:Ze}=c,s=`${O}-scroll-number`,h=(0,p.Z)(c,(Z,b)=>{let{darkColor:D}=b;return{[`&${x} ${x}-color-${Z}`]:{background:D,[`&:not(${x}-count)`]:{color:D}}}});return{[x]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,u.Wf)(c)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${x}-count`]:{zIndex:c.indicatorZIndex,minWidth:re,height:re,color:c.badgeTextColor,fontWeight:pe,fontSize:Ee,lineHeight:`${re}px`,whiteSpace:"nowrap",textAlign:"center",background:c.badgeColor,borderRadius:re/2,boxShadow:`0 0 0 ${y}px ${c.badgeShadowColor}`,transition:`background ${c.motionDurationMid}`,a:{color:c.badgeTextColor},"a:hover":{color:c.badgeTextColor},"a:hover &":{background:c.badgeColorHover}},[`${x}-count-sm`]:{minWidth:ve,height:ve,fontSize:Qe,lineHeight:`${ve}px`,borderRadius:ve/2},[`${x}-multiple-words`]:{padding:`0 ${c.paddingXS}px`,bdi:{unicodeBidi:"plaintext"}},[`${x}-dot`]:{zIndex:c.indicatorZIndex,width:Ue,minWidth:Ue,height:Ue,background:c.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${y}px ${c.badgeShadowColor}`},[`${x}-dot${s}`]:{transition:`background ${me}`},[`${x}-count, ${x}-dot, ${s}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${K}-spin`]:{animationName:Te,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${x}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${x}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:Je,height:Je,verticalAlign:"middle",borderRadius:"50%"},[`${x}-status-success`]:{backgroundColor:c.colorSuccess},[`${x}-status-processing`]:{overflow:"visible",color:c.colorPrimary,backgroundColor:c.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:y,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:P,animationDuration:c.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${x}-status-default`]:{backgroundColor:c.colorTextPlaceholder},[`${x}-status-error`]:{backgroundColor:c.colorError},[`${x}-status-warning`]:{backgroundColor:c.colorWarning},[`${x}-status-text`]:{marginInlineStart:Ze,color:c.colorText,fontSize:c.fontSize}}}),h),{[`${x}-zoom-appear, ${x}-zoom-enter`]:{animationName:I,animationDuration:c.motionDurationSlow,animationTimingFunction:c.motionEaseOutBack,animationFillMode:"both"},[`${x}-zoom-leave`]:{animationName:E,animationDuration:c.motionDurationSlow,animationTimingFunction:c.motionEaseOutBack,animationFillMode:"both"},[`&${x}-not-a-wrapper`]:{[`${x}-zoom-appear, ${x}-zoom-enter`]:{animationName:te,animationDuration:c.motionDurationSlow,animationTimingFunction:c.motionEaseOutBack},[`${x}-zoom-leave`]:{animationName:oe,animationDuration:c.motionDurationSlow,animationTimingFunction:c.motionEaseOutBack},[`&:not(${x}-status)`]:{verticalAlign:"middle"},[`${s}-custom-component, ${x}-count`]:{transform:"none"},[`${s}-custom-component, ${s}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${s}`]:{overflow:"hidden",[`${s}-only`]:{position:"relative",display:"inline-block",height:re,transition:`all ${c.motionDurationSlow} ${c.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${s}-only-unit`]:{height:re,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${s}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${x}-count, ${x}-dot, ${s}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},q=c=>{const{fontSize:x,lineHeight:K,lineWidth:O,marginXS:y,colorBorderBg:me}=c,Ee=Math.round(x*K),Qe=O,Je=c.colorBgContainer,Ue=c.colorError,pe=c.colorErrorHover;return(0,w.TS)(c,{badgeFontHeight:Ee,badgeShadowSize:Qe,badgeTextColor:Je,badgeColor:Ue,badgeColorHover:pe,badgeShadowColor:me,badgeProcessingDuration:"1.2s",badgeRibbonOffset:y,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},ze=c=>{const{fontSize:x,lineHeight:K,fontSizeSM:O,lineWidth:y}=c;return{indicatorZIndex:"auto",indicatorHeight:Math.round(x*K)-2*y,indicatorHeightSM:x,dotSize:O/2,textFontSize:O,textFontSizeSM:O,textFontWeight:"normal",statusSize:O/2}};var Ve=(0,$.Z)("Badge",c=>{const x=q(c);return[Ne(x)]},ze);const qe=c=>{const{antCls:x,badgeFontHeight:K,marginXS:O,badgeRibbonOffset:y}=c,me=`${x}-ribbon`,Ee=`${x}-ribbon-wrapper`,Qe=(0,p.Z)(c,(Je,Ue)=>{let{darkColor:pe}=Ue;return{[`&${me}-color-${Je}`]:{background:pe,color:pe}}});return{[`${Ee}`]:{position:"relative"},[`${me}`]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,u.Wf)(c)),{position:"absolute",top:O,padding:`0 ${c.paddingXS}px`,color:c.colorPrimary,lineHeight:`${K}px`,whiteSpace:"nowrap",backgroundColor:c.colorPrimary,borderRadius:c.borderRadiusSM,[`${me}-text`]:{color:c.colorTextLightSolid},[`${me}-corner`]:{position:"absolute",top:"100%",width:y,height:y,color:"currentcolor",border:`${y/2}px solid`,transform:c.badgeRibbonCornerTransform,transformOrigin:"top",filter:c.badgeRibbonCornerFilter}}),Qe),{[`&${me}-placement-end`]:{insetInlineEnd:-y,borderEndEndRadius:0,[`${me}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${me}-placement-start`]:{insetInlineStart:-y,borderEndStartRadius:0,[`${me}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var ct=(0,$.Z)(["Badge","Ribbon"],c=>{const x=q(c);return[qe(x)]},ze),bt=c=>{const{className:x,prefixCls:K,style:O,color:y,children:me,text:Ee,placement:Qe="end",rootClassName:Je}=c,{getPrefixCls:Ue,direction:pe}=S.useContext(W.E_),re=Ue("ribbon",K),ve=(0,A.o2)(y,!1),Ze=fe()(re,`${re}-placement-${Qe}`,{[`${re}-rtl`]:pe==="rtl",[`${re}-color-${y}`]:ve},x),[s,h]=ct(re),Z={},b={};return y&&!ve&&(Z.background=y,b.color=y),s(S.createElement("div",{className:fe()(`${re}-wrapper`,Je,h)},me,S.createElement("div",{className:fe()(Ze,h),style:Object.assign(Object.assign({},Z),O)},S.createElement("span",{className:`${re}-text`},Ee),S.createElement("div",{className:`${re}-corner`,style:b}))))};function kt(c){let{prefixCls:x,value:K,current:O,offset:y=0}=c,me;return y&&(me={position:"absolute",top:`${y}00%`,left:0}),S.createElement("span",{style:me,className:fe()(`${x}-only-unit`,{current:O})},K)}function $t(c,x,K){let O=c,y=0;for(;(O+10)%10!==x;)O+=K,y+=K;return y}function vt(c){const{prefixCls:x,count:K,value:O}=c,y=Number(O),me=Math.abs(K),[Ee,Qe]=S.useState(y),[Je,Ue]=S.useState(me),pe=()=>{Qe(y),Ue(me)};S.useEffect(()=>{const Ze=setTimeout(()=>{pe()},1e3);return()=>{clearTimeout(Ze)}},[y]);let re,ve;if(Ee===y||Number.isNaN(y)||Number.isNaN(Ee))re=[S.createElement(kt,Object.assign({},c,{key:y,current:!0}))],ve={transition:"none"};else{re=[];const Ze=y+10,s=[];for(let b=y;b<=Ze;b+=1)s.push(b);const h=s.findIndex(b=>b%10===Ee);re=s.map((b,D)=>{const Ce=b%10;return S.createElement(kt,Object.assign({},c,{key:b,value:Ce,offset:D-h,current:D===h}))});const Z=Je<me?1:-1;ve={transform:`translateY(${-$t(Ee,y,Z)}00%)`}}return S.createElement("span",{className:`${x}-only`,style:ve,onTransitionEnd:pe},re)}var Ct=function(c,x){var K={};for(var O in c)Object.prototype.hasOwnProperty.call(c,O)&&x.indexOf(O)<0&&(K[O]=c[O]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,O=Object.getOwnPropertySymbols(c);y<O.length;y++)x.indexOf(O[y])<0&&Object.prototype.propertyIsEnumerable.call(c,O[y])&&(K[O[y]]=c[O[y]]);return K},Nt=S.forwardRef((c,x)=>{const{prefixCls:K,count:O,className:y,motionClassName:me,style:Ee,title:Qe,show:Je,component:Ue="sup",children:pe}=c,re=Ct(c,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:ve}=S.useContext(W.E_),Ze=ve("scroll-number",K),s=Object.assign(Object.assign({},re),{"data-show":Je,style:Ee,className:fe()(Ze,y,me),title:Qe});let h=O;if(O&&Number(O)%1===0){const Z=String(O).split("");h=S.createElement("bdi",null,Z.map((b,D)=>S.createElement(vt,{prefixCls:Ze,count:Number(O),value:b,key:Z.length-D})))}return Ee&&Ee.borderColor&&(s.style=Object.assign(Object.assign({},Ee),{boxShadow:`0 0 0 1px ${Ee.borderColor} inset`})),pe?(0,nt.Tm)(pe,Z=>({className:fe()(`${Ze}-custom-component`,Z?.className,me)})):S.createElement(Ue,Object.assign({},s,{ref:x}),h)}),ht=function(c,x){var K={};for(var O in c)Object.prototype.hasOwnProperty.call(c,O)&&x.indexOf(O)<0&&(K[O]=c[O]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,O=Object.getOwnPropertySymbols(c);y<O.length;y++)x.indexOf(O[y])<0&&Object.prototype.propertyIsEnumerable.call(c,O[y])&&(K[O[y]]=c[O[y]]);return K};const St=(c,x)=>{var K,O,y,me,Ee;const{prefixCls:Qe,scrollNumberPrefixCls:Je,children:Ue,status:pe,text:re,color:ve,count:Ze=null,overflowCount:s=99,dot:h=!1,size:Z="default",title:b,offset:D,style:Ce,className:ge,rootClassName:be,classNames:ne,styles:le,showZero:we=!1}=c,je=ht(c,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:Ye,direction:Ae,badge:z}=S.useContext(W.E_),X=Ye("badge",Qe),[ue,G]=Ve(X),et=Ze>s?`${s}+`:Ze,tt=et==="0"||et===0,ot=Ze===null||tt&&!we,Ke=(pe!=null||ve!=null)&&ot,at=h&&!tt,Ie=at?"":et,De=(0,S.useMemo)(()=>(Ie==null||Ie===""||tt&&!we)&&!at,[Ie,tt,we,at]),We=(0,S.useRef)(Ze);De||(We.current=Ze);const Ge=We.current,gt=(0,S.useRef)(Ie);De||(gt.current=Ie);const ft=gt.current,Se=(0,S.useRef)(at);De||(Se.current=at);const Fe=(0,S.useMemo)(()=>{if(!D)return Object.assign(Object.assign({},z?.style),Ce);const m={marginTop:D[1]};return Ae==="rtl"?m.left=parseInt(D[0],10):m.right=-parseInt(D[0],10),Object.assign(Object.assign(Object.assign({},m),z?.style),Ce)},[Ae,D,Ce,z?.style]),_e=b??(typeof Ge=="string"||typeof Ge=="number"?Ge:void 0),mt=De||!re?null:S.createElement("span",{className:`${X}-status-text`},re),xt=!Ge||typeof Ge!="object"?void 0:(0,nt.Tm)(Ge,m=>({style:Object.assign(Object.assign({},Fe),m.style)})),it=(0,A.o2)(ve,!1),i=fe()(ne?.indicator,(K=z?.classNames)===null||K===void 0?void 0:K.indicator,{[`${X}-status-dot`]:Ke,[`${X}-status-${pe}`]:!!pe,[`${X}-color-${ve}`]:it}),f={};ve&&!it&&(f.color=ve,f.background=ve);const v=fe()(X,{[`${X}-status`]:Ke,[`${X}-not-a-wrapper`]:!Ue,[`${X}-rtl`]:Ae==="rtl"},ge,be,z?.className,(O=z?.classNames)===null||O===void 0?void 0:O.root,ne?.root,G);if(!Ue&&Ke){const m=Fe.color;return ue(S.createElement("span",Object.assign({},je,{className:v,style:Object.assign(Object.assign(Object.assign({},le?.root),(y=z?.styles)===null||y===void 0?void 0:y.root),Fe)}),S.createElement("span",{className:i,style:Object.assign(Object.assign(Object.assign({},le?.indicator),(me=z?.styles)===null||me===void 0?void 0:me.indicator),f)}),re&&S.createElement("span",{style:{color:m},className:`${X}-status-text`},re)))}return ue(S.createElement("span",Object.assign({ref:x},je,{className:v,style:Object.assign(Object.assign({},(Ee=z?.styles)===null||Ee===void 0?void 0:Ee.root),le?.root)}),Ue,S.createElement(Q.ZP,{visible:!De,motionName:`${X}-zoom`,motionAppear:!1,motionDeadline:1e3},m=>{let{className:g,ref:T}=m;var F,ae;const he=Ye("scroll-number",Je),ke=Se.current,Me=fe()(ne?.indicator,(F=z?.classNames)===null||F===void 0?void 0:F.indicator,{[`${X}-dot`]:ke,[`${X}-count`]:!ke,[`${X}-count-sm`]:Z==="small",[`${X}-multiple-words`]:!ke&&ft&&ft.toString().length>1,[`${X}-status-${pe}`]:!!pe,[`${X}-color-${ve}`]:it});let Pe=Object.assign(Object.assign(Object.assign({},le?.indicator),(ae=z?.styles)===null||ae===void 0?void 0:ae.indicator),Fe);return ve&&!it&&(Pe=Pe||{},Pe.background=ve),S.createElement(Nt,{prefixCls:he,show:!De,motionClassName:g,className:Me,count:ft,title:_e,style:Pe,key:"scrollNumber",ref:T},xt)}),mt))},dt=S.forwardRef(St);dt.Ribbon=bt;var Pt=dt},26591:function(Xe,M,l){l.d(M,{Z:function(){return Ze}});var o=l(27378),fe=l(60042),Q=l.n(fe),S=l(50189),A=l(11026),nt=l(81412),W=l(99664),r=o.createContext(null),u=o.createContext({}),p=r,w=l(64649),$=l(25773),P=l(83395),I=l(78730),E=l(91864),te=l(11815),oe=function(h){var Z=h.prefixCls,b=h.className,D=h.style,Ce=h.children,ge=h.containerRef,be=h.id,ne=h.onMouseEnter,le=h.onMouseOver,we=h.onMouseLeave,je=h.onClick,Ye=h.onKeyDown,Ae=h.onKeyUp,z={onMouseEnter:ne,onMouseOver:le,onMouseLeave:we,onClick:je,onKeyDown:Ye,onKeyUp:Ae},X=o.useContext(u),ue=X.panel,G=(0,te.x1)(ue,ge);return o.createElement(o.Fragment,null,o.createElement("div",(0,$.Z)({id:be,className:Q()("".concat(Z,"-content"),b),style:(0,S.Z)({},D),"aria-modal":"true",role:"dialog",ref:G},z),Ce))},Te=oe,Ne=l(74485);function q(s){return typeof s=="string"&&String(Number(s))===s?((0,Ne.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(s)):s}function ze(s){warning(!("wrapperClassName"in s),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!s.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var Ve={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function qe(s,h){var Z,b,D,Ce,ge=s.prefixCls,be=s.open,ne=s.placement,le=s.inline,we=s.push,je=s.forceRender,Ye=s.autoFocus,Ae=s.keyboard,z=s.classNames,X=s.rootClassName,ue=s.rootStyle,G=s.zIndex,et=s.className,tt=s.id,ot=s.style,Ke=s.motion,at=s.width,Ie=s.height,De=s.children,We=s.contentWrapperStyle,Ge=s.mask,gt=s.maskClosable,ft=s.maskMotion,Se=s.maskClassName,Fe=s.maskStyle,_e=s.afterOpenChange,mt=s.onClose,xt=s.onMouseEnter,it=s.onMouseOver,i=s.onMouseLeave,f=s.onClick,v=s.onKeyDown,m=s.onKeyUp,g=s.styles,T=o.useRef(),F=o.useRef(),ae=o.useRef();o.useImperativeHandle(h,function(){return T.current});var he=function(R){var j=R.keyCode,k=R.shiftKey;switch(j){case I.Z.TAB:{if(j===I.Z.TAB){if(!k&&document.activeElement===ae.current){var L;(L=F.current)===null||L===void 0||L.focus({preventScroll:!0})}else if(k&&document.activeElement===F.current){var Y;(Y=ae.current)===null||Y===void 0||Y.focus({preventScroll:!0})}}break}case I.Z.ESC:{mt&&Ae&&(R.stopPropagation(),mt(R));break}}};o.useEffect(function(){if(be&&Ye){var C;(C=T.current)===null||C===void 0||C.focus({preventScroll:!0})}},[be]);var ke=o.useState(!1),Me=(0,A.Z)(ke,2),Pe=Me[0],_=Me[1],xe=o.useContext(p),Be;we===!1?Be={distance:0}:we===!0?Be={}:Be=we||{};var rt=(Z=(b=(D=Be)===null||D===void 0?void 0:D.distance)!==null&&b!==void 0?b:xe?.pushDistance)!==null&&Z!==void 0?Z:180,lt=o.useMemo(function(){return{pushDistance:rt,push:function(){_(!0)},pull:function(){_(!1)}}},[rt]);o.useEffect(function(){if(be){var C;xe==null||(C=xe.push)===null||C===void 0||C.call(xe)}else{var R;xe==null||(R=xe.pull)===null||R===void 0||R.call(xe)}},[be]),o.useEffect(function(){return function(){var C;xe==null||(C=xe.pull)===null||C===void 0||C.call(xe)}},[]);var e=Ge&&o.createElement(P.ZP,(0,$.Z)({key:"mask"},ft,{visible:be}),function(C,R){var j=C.className,k=C.style;return o.createElement("div",{className:Q()("".concat(ge,"-mask"),j,z?.mask,Se),style:(0,S.Z)((0,S.Z)((0,S.Z)({},k),Fe),g?.mask),onClick:gt&&be?mt:void 0,ref:R})}),t=typeof Ke=="function"?Ke(ne):Ke,n={};if(Pe&&rt)switch(ne){case"top":n.transform="translateY(".concat(rt,"px)");break;case"bottom":n.transform="translateY(".concat(-rt,"px)");break;case"left":n.transform="translateX(".concat(rt,"px)");break;default:n.transform="translateX(".concat(-rt,"px)");break}ne==="left"||ne==="right"?n.width=q(at):n.height=q(Ie);var a={onMouseEnter:xt,onMouseOver:it,onMouseLeave:i,onClick:f,onKeyDown:v,onKeyUp:m},d=o.createElement(P.ZP,(0,$.Z)({key:"panel"},t,{visible:be,forceRender:je,onVisibleChanged:function(R){_e?.(R)},removeOnLeave:!1,leavedClassName:"".concat(ge,"-content-wrapper-hidden")}),function(C,R){var j=C.className,k=C.style;return o.createElement("div",(0,$.Z)({className:Q()("".concat(ge,"-content-wrapper"),z?.wrapper,j),style:(0,S.Z)((0,S.Z)((0,S.Z)((0,S.Z)({},n),k),We),g?.wrapper)},(0,E.Z)(s,{data:!0})),o.createElement(Te,(0,$.Z)({id:tt,containerRef:R,prefixCls:ge,className:Q()(et,z?.content),style:(0,S.Z)((0,S.Z)({},ot),g?.content)},a),De))}),N=(0,S.Z)({},ue);return G&&(N.zIndex=G),o.createElement(p.Provider,{value:lt},o.createElement("div",{className:Q()(ge,"".concat(ge,"-").concat(ne),X,(Ce={},(0,w.Z)(Ce,"".concat(ge,"-open"),be),(0,w.Z)(Ce,"".concat(ge,"-inline"),le),Ce)),style:N,tabIndex:-1,ref:T,onKeyDown:he},e,o.createElement("div",{tabIndex:0,ref:F,style:Ve,"aria-hidden":"true","data-sentinel":"start"}),d,o.createElement("div",{tabIndex:0,ref:ae,style:Ve,"aria-hidden":"true","data-sentinel":"end"})))}var ct=o.forwardRef(qe),jt=ct,bt=function(h){var Z=h.open,b=Z===void 0?!1:Z,D=h.prefixCls,Ce=D===void 0?"rc-drawer":D,ge=h.placement,be=ge===void 0?"right":ge,ne=h.autoFocus,le=ne===void 0?!0:ne,we=h.keyboard,je=we===void 0?!0:we,Ye=h.width,Ae=Ye===void 0?378:Ye,z=h.mask,X=z===void 0?!0:z,ue=h.maskClosable,G=ue===void 0?!0:ue,et=h.getContainer,tt=h.forceRender,ot=h.afterOpenChange,Ke=h.destroyOnClose,at=h.onMouseEnter,Ie=h.onMouseOver,De=h.onMouseLeave,We=h.onClick,Ge=h.onKeyDown,gt=h.onKeyUp,ft=h.panelRef,Se=o.useState(!1),Fe=(0,A.Z)(Se,2),_e=Fe[0],mt=Fe[1],xt=o.useState(!1),it=(0,A.Z)(xt,2),i=it[0],f=it[1];(0,W.Z)(function(){f(!0)},[]);var v=i?b:!1,m=o.useRef(),g=o.useRef();(0,W.Z)(function(){v&&(g.current=document.activeElement)},[v]);var T=function(Me){var Pe;if(mt(Me),ot?.(Me),!Me&&g.current&&!((Pe=m.current)!==null&&Pe!==void 0&&Pe.contains(g.current))){var _;(_=g.current)===null||_===void 0||_.focus({preventScroll:!0})}},F=o.useMemo(function(){return{panel:ft}},[ft]);if(!tt&&!_e&&!v&&Ke)return null;var ae={onMouseEnter:at,onMouseOver:Ie,onMouseLeave:De,onClick:We,onKeyDown:Ge,onKeyUp:gt},he=(0,S.Z)((0,S.Z)({},h),{},{open:v,prefixCls:Ce,placement:be,autoFocus:le,keyboard:je,width:Ae,mask:X,maskClosable:G,inline:et===!1,afterOpenChange:T,ref:m},ae);return o.createElement(u.Provider,{value:F},o.createElement(nt.Z,{open:v||tt||_e,autoDestroy:!1,getContainer:et,autoLock:X&&(v||_e)},o.createElement(jt,he)))},kt=bt,$t=kt,vt=l(2874),Ct=l(80821),ut=l(26775),Nt=l(84006),ht=l(31630),St=l(29670),dt=l(60467),c=s=>{var h,Z;const{prefixCls:b,title:D,footer:Ce,extra:ge,closeIcon:be,closable:ne,onClose:le,headerStyle:we,drawerStyle:je,bodyStyle:Ye,footerStyle:Ae,children:z,classNames:X,styles:ue}=s,{drawer:G}=o.useContext(ut.E_),et=o.useCallback(Ie=>o.createElement("button",{type:"button",onClick:le,"aria-label":"Close",className:`${b}-close`},Ie),[le]),[tt,ot]=(0,dt.Z)(ne,be,et,void 0,!0),Ke=o.useMemo(()=>{var Ie,De;return!D&&!tt?null:o.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(Ie=G?.styles)===null||Ie===void 0?void 0:Ie.header),we),ue?.header),className:Q()(`${b}-header`,{[`${b}-header-close-only`]:tt&&!D&&!ge},(De=G?.classNames)===null||De===void 0?void 0:De.header,X?.header)},o.createElement("div",{className:`${b}-header-title`},ot,D&&o.createElement("div",{className:`${b}-title`},D)),ge&&o.createElement("div",{className:`${b}-extra`},ge))},[tt,ot,ge,we,b,D]),at=o.useMemo(()=>{var Ie,De;if(!Ce)return null;const We=`${b}-footer`;return o.createElement("div",{className:Q()(We,(Ie=G?.classNames)===null||Ie===void 0?void 0:Ie.footer,X?.footer),style:Object.assign(Object.assign(Object.assign({},(De=G?.styles)===null||De===void 0?void 0:De.footer),Ae),ue?.footer)},Ce)},[Ce,Ae,b]);return o.createElement("div",{className:`${b}-wrapper-body`,style:je},Ke,o.createElement("div",{className:Q()(`${b}-body`,X?.body,(h=G?.classNames)===null||h===void 0?void 0:h.body),style:Object.assign(Object.assign(Object.assign({},(Z=G?.styles)===null||Z===void 0?void 0:Z.body),Ye),ue?.body)},z),at)},x=l(6117),K=l(5515),y=s=>{const{componentCls:h,motionDurationSlow:Z}=s,b={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${Z}`}}};return{[h]:{[`${h}-mask-motion`]:{"&-enter, &-appear, &-leave":{"&-active":{transition:`all ${Z}`}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}},[`${h}-panel-motion`]:{"&-left":[b,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[b,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[b,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[b,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}}}};const me=s=>{const{componentCls:h,zIndexPopup:Z,colorBgMask:b,colorBgElevated:D,motionDurationSlow:Ce,motionDurationMid:ge,padding:be,paddingLG:ne,fontSizeLG:le,lineHeightLG:we,lineWidth:je,lineType:Ye,colorSplit:Ae,marginSM:z,colorIcon:X,colorIconHover:ue,colorText:G,fontWeightStrong:et,footerPaddingBlock:tt,footerPaddingInline:ot}=s,Ke=`${h}-content-wrapper`;return{[h]:{position:"fixed",inset:0,zIndex:Z,pointerEvents:"none","&-pure":{position:"relative",background:D,[`&${h}-left`]:{boxShadow:s.boxShadowDrawerLeft},[`&${h}-right`]:{boxShadow:s.boxShadowDrawerRight},[`&${h}-top`]:{boxShadow:s.boxShadowDrawerUp},[`&${h}-bottom`]:{boxShadow:s.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${h}-mask`]:{position:"absolute",inset:0,zIndex:Z,background:b,pointerEvents:"auto"},[Ke]:{position:"absolute",zIndex:Z,maxWidth:"100vw",transition:`all ${Ce}`,"&-hidden":{display:"none"}},[`&-left > ${Ke}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:s.boxShadowDrawerLeft},[`&-right > ${Ke}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:s.boxShadowDrawerRight},[`&-top > ${Ke}`]:{top:0,insetInline:0,boxShadow:s.boxShadowDrawerUp},[`&-bottom > ${Ke}`]:{bottom:0,insetInline:0,boxShadow:s.boxShadowDrawerDown},[`${h}-content`]:{width:"100%",height:"100%",overflow:"auto",background:D,pointerEvents:"auto"},[`${h}-wrapper-body`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},[`${h}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${be}px ${ne}px`,fontSize:le,lineHeight:we,borderBottom:`${je}px ${Ye} ${Ae}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${h}-extra`]:{flex:"none"},[`${h}-close`]:{display:"inline-block",marginInlineEnd:z,color:X,fontWeight:et,fontSize:le,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${ge}`,textRendering:"auto","&:focus, &:hover":{color:ue,textDecoration:"none"}},[`${h}-title`]:{flex:1,margin:0,color:G,fontWeight:s.fontWeightStrong,fontSize:le,lineHeight:we},[`${h}-body`]:{flex:1,minWidth:0,minHeight:0,padding:ne,overflow:"auto"},[`${h}-footer`]:{flexShrink:0,padding:`${tt}px ${ot}px`,borderTop:`${je}px ${Ye} ${Ae}`},"&-rtl":{direction:"rtl"}}}};var Ee=(0,x.Z)("Drawer",s=>{const h=(0,K.TS)(s,{});return[me(h),y(h)]},s=>({zIndexPopup:s.zIndexPopupBase,footerPaddingBlock:s.paddingXS,footerPaddingInline:s.padding})),Qe=l(50185),Je=function(s,h){var Z={};for(var b in s)Object.prototype.hasOwnProperty.call(s,b)&&h.indexOf(b)<0&&(Z[b]=s[b]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,b=Object.getOwnPropertySymbols(s);D<b.length;D++)h.indexOf(b[D])<0&&Object.prototype.propertyIsEnumerable.call(s,b[D])&&(Z[b[D]]=s[b[D]]);return Z};const Ue=null,pe={distance:180},re=s=>{var h,Z,b,D,Ce,ge,be,ne,le;const{rootClassName:we,width:je,height:Ye,size:Ae="default",mask:z=!0,push:X=pe,open:ue,afterOpenChange:G,onClose:et,prefixCls:tt,getContainer:ot,style:Ke,className:at,visible:Ie,afterVisibleChange:De}=s,We=Je(s,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"]),{getPopupContainer:Ge,getPrefixCls:gt,direction:ft,drawer:Se}=o.useContext(ut.E_),Fe=gt("drawer",tt),[_e,mt]=Ee(Fe),xt=ot===void 0&&Ge?()=>Ge(document.body):ot,it=Q()({"no-mask":!z,[`${Fe}-rtl`]:ft==="rtl"},we,mt),i=o.useMemo(()=>je??(Ae==="large"?736:378),[je,Ae]),f=o.useMemo(()=>Ye??(Ae==="large"?736:378),[Ye,Ae]),v={motionName:(0,Ct.m)(Fe,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},m=ae=>({motionName:(0,Ct.m)(Fe,`panel-motion-${ae}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),g=(0,St.H)(),[T,F]=(0,vt.Cn)("Drawer",We.zIndex);return _e(o.createElement(ht.BR,null,o.createElement(Nt.Ux,{status:!0,override:!0},o.createElement(Qe.Z.Provider,{value:F},o.createElement($t,Object.assign({prefixCls:Fe,onClose:et,maskMotion:v,motion:m},We,{classNames:{mask:Q()((Z=We.classNames)===null||Z===void 0?void 0:Z.mask,(b=Se?.classNames)===null||b===void 0?void 0:b.mask),content:Q()((D=We.classNames)===null||D===void 0?void 0:D.content,(Ce=Se?.classNames)===null||Ce===void 0?void 0:Ce.content)},styles:{mask:Object.assign(Object.assign({},(ge=We.styles)===null||ge===void 0?void 0:ge.mask),(be=Se?.styles)===null||be===void 0?void 0:be.mask),content:Object.assign(Object.assign({},(ne=We.styles)===null||ne===void 0?void 0:ne.content),(le=Se?.styles)===null||le===void 0?void 0:le.content)},open:ue??Ie,mask:z,push:X,width:i,height:f,style:Object.assign(Object.assign({},Se?.style),Ke),className:Q()(Se?.className,at),rootClassName:it,getContainer:xt,afterOpenChange:G??De,panelRef:g,zIndex:T}),o.createElement(c,Object.assign({prefixCls:Fe},We,{onClose:et})))))))},ve=s=>{const{prefixCls:h,style:Z,className:b,placement:D="right"}=s,Ce=Je(s,["prefixCls","style","className","placement"]),{getPrefixCls:ge}=o.useContext(ut.E_),be=ge("drawer",h),[ne,le]=Ee(be),we=Q()(be,`${be}-pure`,`${be}-${D}`,le,b);return ne(o.createElement("div",{className:we,style:Z},o.createElement(c,Object.assign({prefixCls:be},Ce))))};re._InternalPanelDoNotUseOrYouWillBeFired=ve;var Ze=re},85270:function(Xe,M,l){var o=l(73203).default;Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;var fe=o(l(22313)),Q=M.default=fe.default},33527:function(Xe,M,l){var o=l(73203).default;Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;var fe=o(l(10792)),Q=M.default=fe.default},22313:function(Xe,M,l){var o=l(73203).default;Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;var fe=o(l(91412)),Q=o(l(14339));const S={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},fe.default),timePickerLocale:Object.assign({},Q.default)};var A=M.default=S},10792:function(Xe,M,l){var o=l(73203).default;Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;var fe=o(l(71480)),Q=o(l(47071));const S={lang:Object.assign({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},fe.default),timePickerLocale:Object.assign({},Q.default)};S.lang.ok="\u786E\u5B9A";var A=M.default=S},75183:function(Xe,M,l){var o,fe=l(73203).default;o={value:!0},M.Z=void 0;var Q=fe(l(51367)),S=fe(l(85270)),A=fe(l(22313)),nt=fe(l(14339));const W="${label} is not a valid ${type}",r={locale:"en",Pagination:Q.default,DatePicker:A.default,TimePicker:nt.default,Calendar:S.default,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:W,method:W,array:W,object:W,number:W,date:W,boolean:W,integer:W,float:W,regexp:W,email:W,url:W,hex:W},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}};var u=M.Z=r},81107:function(Xe,M,l){var o,fe=l(73203).default;o={value:!0},M.Z=void 0;var Q=fe(l(95160)),S=fe(l(33527)),A=fe(l(10792)),nt=fe(l(47071));const W="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",r={locale:"zh-cn",Pagination:Q.default,DatePicker:A.default,TimePicker:nt.default,Calendar:S.default,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:W,method:W,array:W,object:W,number:W,date:W,boolean:W,integer:W,float:W,regexp:W,email:W,url:W,hex:W},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}};var u=M.Z=r},14339:function(Xe,M){Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;const l={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};var o=M.default=l},47071:function(Xe,M){Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;const l={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]};var o=M.default=l},51367:function(Xe,M){Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;var l=M.default={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"}},95160:function(Xe,M){Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;var l=M.default={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"}},91412:function(Xe,M){Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;var l={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},o=M.default=l},71480:function(Xe,M){Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;var l={locale:"zh_CN",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA"},o=M.default=l},73203:function(Xe){function M(l){return l&&l.__esModule?l:{default:l}}Xe.exports=M,Xe.exports.__esModule=!0,Xe.exports.default=Xe.exports},66274:function(Xe,M,l){var o;l.d(M,{Z:function(){return W}});var fe=l(27378),Q={942:(r,u,p)=>{p.d(u,{Z:()=>te});var w=p(601),$=p.n(w),P=p(609),I=p.n(P),E=I()($());E.push([r.id,`.node-right-icon-close {
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
`,""]),E.locals={};const te=E},84:(r,u,p)=>{p.d(u,{Z:()=>te});var w=p(601),$=p.n(w),P=p(609),I=p.n(P),E=I()($());E.push([r.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]),E.locals={};const te=E},91:(r,u,p)=>{p.d(u,{Z:()=>te});var w=p(601),$=p.n(w),P=p(609),I=p.n(P),E=I()($());E.push([r.id,`.frame {
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
`,""]),E.locals={};const te=E},505:(r,u,p)=>{p.d(u,{Z:()=>te});var w=p(601),$=p.n(w),P=p(609),I=p.n(P),E=I()($());E.push([r.id,`.clear::after {
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
`,""]),E.locals={};const te=E},675:(r,u,p)=>{p.d(u,{Z:()=>te});var w=p(601),$=p.n(w),P=p(609),I=p.n(P),E=I()($());E.push([r.id,`@keyframes ani-fade-in {
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
`,""]),E.locals={};const te=E},609:r=>{r.exports=function(u){var p=[];return p.toString=function(){return this.map(function(w){var $="",P=typeof w[5]<"u";return w[4]&&($+="@supports (".concat(w[4],") {")),w[2]&&($+="@media ".concat(w[2]," {")),P&&($+="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {")),$+=u(w),P&&($+="}"),w[2]&&($+="}"),w[4]&&($+="}"),$}).join("")},p.i=function(w,$,P,I,E){typeof w=="string"&&(w=[[null,w,void 0]]);var te={};if(P)for(var oe=0;oe<this.length;oe++){var Te=this[oe][0];Te!=null&&(te[Te]=!0)}for(var Ne=0;Ne<w.length;Ne++){var q=[].concat(w[Ne]);P&&te[q[0]]||(typeof E<"u"&&(typeof q[5]>"u"||(q[1]="@layer".concat(q[5].length>0?" ".concat(q[5]):""," {").concat(q[1],"}")),q[5]=E),$&&(q[2]&&(q[1]="@media ".concat(q[2]," {").concat(q[1],"}")),q[2]=$),I&&(q[4]?(q[1]="@supports (".concat(q[4],") {").concat(q[1],"}"),q[4]=I):q[4]="".concat(I)),p.push(q))}},p}},601:r=>{r.exports=function(u){return u[1]}},837:(r,u,p)=>{var w=p(810),$=Symbol.for("react.element"),P=Symbol.for("react.fragment"),I=Object.prototype.hasOwnProperty,E=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,te={key:!0,ref:!0,__self:!0,__source:!0};function oe(Te,Ne,q){var ze,Ve={},qe=null,ct=null;q!==void 0&&(qe=""+q),Ne.key!==void 0&&(qe=""+Ne.key),Ne.ref!==void 0&&(ct=Ne.ref);for(ze in Ne)I.call(Ne,ze)&&!te.hasOwnProperty(ze)&&(Ve[ze]=Ne[ze]);if(Te&&Te.defaultProps)for(ze in Ne=Te.defaultProps,Ne)Ve[ze]===void 0&&(Ve[ze]=Ne[ze]);return{$$typeof:$,type:Te,key:qe,ref:ct,props:Ve,_owner:E.current}}u.Fragment=P,u.jsx=oe,u.jsxs=oe},322:(r,u,p)=>{r.exports=p(837)},62:r=>{var u=[];function p(P){for(var I=-1,E=0;E<u.length;E++)if(u[E].identifier===P){I=E;break}return I}function w(P,I){for(var E={},te=[],oe=0;oe<P.length;oe++){var Te=P[oe],Ne=I.base?Te[0]+I.base:Te[0],q=E[Ne]||0,ze="".concat(Ne," ").concat(q);E[Ne]=q+1;var Ve=p(ze),qe={css:Te[1],media:Te[2],sourceMap:Te[3],supports:Te[4],layer:Te[5]};if(Ve!==-1)u[Ve].references++,u[Ve].updater(qe);else{var ct=$(qe,I);I.byIndex=oe,u.splice(oe,0,{identifier:ze,updater:ct,references:1})}te.push(ze)}return te}function $(P,I){var E=I.domAPI(I);E.update(P);var te=function(oe){if(oe){if(oe.css===P.css&&oe.media===P.media&&oe.sourceMap===P.sourceMap&&oe.supports===P.supports&&oe.layer===P.layer)return;E.update(P=oe)}else E.remove()};return te}r.exports=function(P,I){I=I||{},P=P||[];var E=w(P,I);return function(te){te=te||[];for(var oe=0;oe<E.length;oe++){var Te=E[oe],Ne=p(Te);u[Ne].references--}for(var q=w(te,I),ze=0;ze<E.length;ze++){var Ve=E[ze],qe=p(Ve);u[qe].references===0&&(u[qe].updater(),u.splice(qe,1))}E=q}}},793:r=>{var u={};function p($){if(typeof u[$]>"u"){var P=document.querySelector($);if(window.HTMLIFrameElement&&P instanceof window.HTMLIFrameElement)try{P=P.contentDocument.head}catch{P=null}u[$]=P}return u[$]}function w($,P){var I=p($);if(!I)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");I.appendChild(P)}r.exports=w},173:r=>{function u(p){var w=document.createElement("style");return p.setAttributes(w,p.attributes),p.insert(w,p.options),w}r.exports=u},892:(r,u,p)=>{function w($){var P=p.nc;P&&$.setAttribute("nonce",P)}r.exports=w},36:r=>{function u($,P,I){var E="";I.supports&&(E+="@supports (".concat(I.supports,") {")),I.media&&(E+="@media ".concat(I.media," {"));var te=typeof I.layer<"u";te&&(E+="@layer".concat(I.layer.length>0?" ".concat(I.layer):""," {")),E+=I.css,te&&(E+="}"),I.media&&(E+="}"),I.supports&&(E+="}");var oe=I.sourceMap;oe&&typeof btoa<"u"&&(E+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(oe))))," */")),P.styleTagTransform(E,$,P.options)}function p($){if($.parentNode===null)return!1;$.parentNode.removeChild($)}function w($){if(typeof document>"u")return{update:function(){},remove:function(){}};var P=$.insertStyleElement($);return{update:function(I){u(P,$,I)},remove:function(){p(P)}}}r.exports=w},464:r=>{function u(p,w){if(w.styleSheet)w.styleSheet.cssText=p;else{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(document.createTextNode(p))}}r.exports=u},810:r=>{var u=w=>{var $={};return A.d($,w),$},p=w=>()=>w;r.exports=o||(o=l.t(fe,2))}},S={};function A(r){var u=S[r];if(u!==void 0)return u.exports;var p=S[r]={id:r,exports:{}};return Q[r](p,p.exports,A),p.exports}A.n=r=>{var u=r&&r.__esModule?()=>r.default:()=>r;return A.d(u,{a:u}),u},A.d=(r,u)=>{for(var p in u)A.o(u,p)&&!A.o(r,p)&&Object.defineProperty(r,p,{enumerable:!0,get:u[p]})},A.o=(r,u)=>Object.prototype.hasOwnProperty.call(r,u),A.nc=void 0;var nt={};(()=>{A.d(nt,{Z:()=>it});var r=A(322),u=A(810);const p=()=>![typeof window,typeof document].includes("undefined"),w=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),$=i=>w(i).indexOf("element")>-1,P=(i=null)=>p()?$(i)?{width:i.clientWidth,height:i.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},I=(i={})=>{const f=(0,u.useRef)(0),[v,m]=(0,u.useState)(i),g=(0,u.useCallback)(T=>{cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>m(T))},[]);return(0,u.useEffect)(()=>()=>cancelAnimationFrame(f.current),[]),[v,g]},E=()=>{const[i,f]=I(P());return(0,u.useEffect)(()=>{const v=()=>f(P());return window.addEventListener("resize",v,!1),()=>window.removeEventListener("resize",v,!1)},[]),i},te=i=>w(i)==="array",oe=(i,f,v="id",m="children")=>{if(!te(i))return null;const g=T=>{for(let F=0,ae=T.length;F<ae;F++){const he=T[F];if(he[v]===f)return[he];if(te(he[m])){const ke=g(he[m]);if(ke)return[he].concat(ke)}}};return g(i)},Te=i=>++i,Ne=()=>{const[,i]=(0,u.useState)(0);return(0,u.useCallback)(()=>i(Te),[])},q=i=>te(i)&&!!i.length,ze=({to:i,preventDefault:f,stopPropagation:v,...m})=>f?(0,r.jsx)("span",{...m}):(0,r.jsx)("a",{href:i,...m}),Ve=({item:i,...f})=>(0,r.jsx)("ul",{...f}),qe=(i,...f)=>{const v={};return Object.keys(i).filter(Boolean).map(m=>{v[m]=g=>i[m](g,...f)}),v},ct=({data:i=[],events:f={},List:v=Ve,Link:m=ze,leftIcon:g,rightIcon:T,isHorizontal:F,isCollapsed:ae,level:he=0,parentOpen:ke=!0})=>{const Me=ae&&!he,Pe=!F&&!ae&&!ke;return i.map(_=>{const{name:xe,path:Be,icon:rt,rightIcon:lt,active:e,open:t,children:n,linkProps:a}=_,d=q(n),N=_.id||Be||xe,C=Me?_.title??xe:void 0,R=Pe?"hidden":"",j=rt??g,k=lt??T,L=j?(0,r.jsx)("div",{className:"node-left-icon",children:j===!0?(0,r.jsx)("i",{className:"default-left-icon"}):j}):null,Y=xe?(0,r.jsx)("div",{className:"node-text",children:(0,r.jsx)("span",{children:xe})}):null;if(d){const H=qe(f,_,he),B=[R,t?"open":""].filter(Boolean).join(" ");return(0,r.jsxs)("li",{className:B,"has-children":"true",...H,children:[(0,r.jsxs)(m,{title:C,className:`link${e?" active":""}`,to:Be,preventDefault:!0,stopPropagation:!1,...a,children:[L,Y,k?(0,r.jsx)("div",{className:"node-right-icon",children:k===!0?(0,r.jsx)("i",{className:"default-right-icon"}):k}):null]}),(0,r.jsx)(v,{item:_,children:ct({data:n,events:f,List:v,Link:m,leftIcon:g,rightIcon:T,isHorizontal:F,isCollapsed:ae,level:he+1,parentOpen:!!t})})]},N)}return(0,r.jsx)("li",{className:R,children:(0,r.jsxs)(m,{title:C,className:`link${e?" active":""}`,to:Be,...a,children:[L,Y]})},N)})},jt=ct,bt=i=>{const{children:f,open:v}=i;let m=0;if(v&&f?.length){m=f.length;let g=0;return f.map(T=>g+=bt(T)),m+g}return m},kt=({item:i,style:f,...v})=>(0,r.jsx)("ul",{style:{...f,"--count":bt(i)},...v});var $t=A(62),vt=A.n($t),Ct=A(36),ut=A.n(Ct),Nt=A(793),ht=A.n(Nt),St=A(892),dt=A.n(St),Pt=A(173),c=A.n(Pt),x=A(464),K=A.n(x),O=A(942),y={};y.styleTagTransform=K(),y.setAttributes=dt(),y.insert=ht().bind(null,"head"),y.domAPI=ut(),y.insertStyleElement=c();var me=vt()(O.Z,y);const Ee=O.Z&&O.Z.locals?O.Z.locals:void 0,Qe=i=>(0,r.jsx)("ul",{...i}),Je=(i,f)=>i?kt:({item:v,...m})=>(0,r.jsx)(Qe,{className:f==="right"?"left":"",...m}),Ue=i=>{const{data:f=[],collapsed:v=!1,type:m="vertical",Link:g,width:T,bgColor:F,itemHeight:ae,collapsedWidth:he,itemPadding:ke,style:Me,className:Pe,..._}=i,xe=(0,u.useRef)(),Be=(0,u.useRef)();(0,u.useEffect)(()=>()=>clearTimeout(xe.current),[]);const rt=Ne(),lt=m==="horizontal",e=!lt&&v,t={onClick:(R,j)=>{if(R.stopPropagation(),!lt&&!e){const k=oe(f,j.path,"path"),L=k[k.length-1];L.open=!L.open,rt()}},onMouseEnter:(R,j,k)=>{e&&!k&&(clearTimeout(xe.current),Be.current.style.width="var(--maxWidth)")},onMouseLeave:(R,j,k)=>{e&&!k&&(xe.current=setTimeout(()=>Be.current.style.width="",200))}},n=(lt?["huxy-horizontal-tree",Pe]:["huxy-tree",Pe,e?"collapsed":""]).filter(Boolean).join(" "),{float:a,...d}=_?.style??{},N={"--bgColor":F,"--itemHeight":ae,"--nodeListWidth":T,...d};lt?(N["--itemPadding"]=ke,N["--nodeFloat"]=a):(N["--width"]=T,N["--collapsedWidth"]=he);const C=Je(!lt&&!e,a);return(0,r.jsx)("div",{ref:Be,className:n,style:N,..._,children:(0,r.jsx)("div",{className:"huxy-tree-track",children:(0,r.jsx)("ul",{className:"huxy-tree-root",children:jt({data:f,events:t,List:C,Link:g,leftIcon:!0,rightIcon:!0,isHorizontal:lt,isCollapsed:e})})})})},pe=(i,f)=>Object.prototype.hasOwnProperty.call(i??{},f),re=i=>pe(i,"current"),ve=(i,f,v="click")=>{(0,u.useEffect)(()=>{const m=T=>{const F=re(i)?i.current:i;F?.contains&&!F.contains(T.target)&&f(T)},g=typeof v=="string"?[v]:v;return g.map(T=>{document.addEventListener(T,m,!1)}),()=>{g.map(T=>{document.removeEventListener(T,m,!1)})}},[i,f,v])},Ze=i=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(i),s=i=>new Promise((f,v)=>{const m=new FileReader;m.readAsDataURL(i),m.addEventListener("load",()=>f(m.result)),m.addEventListener("error",g=>v(g))}),h=async i=>{if(!Ze(i))return i;const f=await(await fetch(decodeURIComponent(i))).blob();return await s(f)},Z=i=>{const[f,v]=(0,u.useState)(i);return(0,u.useEffect)(()=>{(async m=>{const g=await h(m);v(g)})(i)},[i]),f},b=({src:i,...f})=>{const v=Z(i);return(0,r.jsx)("img",{...f,src:v})},D=({Ricon:i,open:f})=>i===!0?(0,r.jsx)("i",{className:`huxy-header-angle-${f?"top":"bt"}`}):(0,r.jsx)(i,{status:f}),Ce=({img:i,name:f,icon:v,Ricon:m,open:g})=>i?(0,r.jsxs)("div",{className:"avatar",children:[(0,r.jsx)("div",{className:"img",children:(0,r.jsx)(b,{src:i,width:"1",height:"1",crossOrigin:"anonymous",alt:"avatar"})}),f?(0,r.jsx)("span",{className:"txt",children:f}):null,m?(0,r.jsx)("span",{className:"node-icon",children:(0,r.jsx)(D,{Ricon:m,open:g})}):null]}):(0,r.jsxs)(r.Fragment,{children:[v?(0,r.jsx)("span",{className:"node-icon",children:v}):null,f?(0,r.jsx)("span",{className:"txt",children:f}):null,m?(0,r.jsx)("span",{className:"node-icon",children:(0,r.jsx)(D,{Ricon:m,open:g})}):null]}),ge=({item:i,open:f})=>{const{Custom:v,img:m,name:g,icon:T,Ricon:F,active:ae}=i;return typeof v=="function"?(0,r.jsx)(v,{item:i,className:"link"}):(0,r.jsx)("span",{className:`link${ae?" active":""}`,title:i.title||g,children:(0,r.jsx)(Ce,{img:m,name:g,icon:T,Ricon:F,open:f})})},be=({item:i,click:f})=>{const v=(0,u.useRef)(),[m,g]=(0,u.useState)(!1);ve(v,_=>m&&g(!1));const{arrowDir:T,ChildRender:F,children:ae,smShow:he}=i,ke=ae?.length,Me=(_,xe,Be=null)=>{Be===!1&&g(rt=>!rt),Be&&(_.stopPropagation(),g(!1)),f(xe,Be)},Pe=he?"sm-show":"";return ke||F?(0,r.jsxs)("li",{ref:v,className:`${Pe} ${m?"open":""}`,onClick:_=>Me(_,i,!1),children:[(0,r.jsx)(ge,{item:i,open:m}),(0,r.jsx)("ul",{className:`huxy-header-arrow-${T||"rt"}`,children:ke?ae.map((_,xe)=>(0,r.jsx)("li",{className:_.divider?"divider":"",children:(0,r.jsxs)("span",{onClick:Be=>Me(Be,_,!0),className:`link${_.active?" active":""}`,children:[_.icon?(0,r.jsx)("span",{className:"node-icon",children:_.icon}):null,(0,r.jsx)("span",{className:"drop-label",children:_.name})]})},`subItem-${xe}-${_.key||_.name}`)):(0,r.jsx)("li",{children:(0,r.jsx)(F,{item:i,close:()=>g(!1)})})})]}):(0,r.jsx)("li",{onClick:_=>Me(_,i),className:Pe,children:(0,r.jsx)(ge,{item:i,open:m})})},ne=({list:i,click:f})=>(0,r.jsx)("ul",{children:i.map((v,m)=>(0,r.jsx)(be,{click:f,item:v},`navItem-${m}-${v.key||v.name}`))}),le=i=>{const{leftList:f,rightList:v,handleNavClick:m,logo:g,title:T,Link:F}=i;return(0,r.jsxs)("div",{className:"header",children:[(0,r.jsxs)(F,{className:"banner",to:"/",children:[g?(0,r.jsx)("div",{className:"logo",children:(0,r.jsx)("img",{width:"1",height:"1",src:g,alt:"logo"})}):null,(0,r.jsx)("div",{className:"title",children:T??"Dashboard"})]}),(0,r.jsx)("div",{className:"nav",children:(0,r.jsxs)("div",{className:"nav-wrap",children:[(0,r.jsx)("div",{className:"nav-left",children:(0,r.jsx)(ne,{list:f,click:m})}),(0,r.jsx)("div",{className:"nav-right",children:(0,r.jsx)(ne,{list:v,click:m})})]})})]})};var we=A(505),je={};je.styleTagTransform=K(),je.setAttributes=dt(),je.insert=ht().bind(null,"head"),je.domAPI=ut(),je.insertStyleElement=c();var Ye=vt()(we.Z,je);const Ae=we.Z&&we.Z.locals?we.Z.locals:void 0,z=({language:i,...f})=>(0,u.useMemo)(()=>(0,r.jsx)(le,{...f}),[i]),X=i=>{const{navMenu:f,headerStyle:v,navMenuStyle:m,Link:g,leftList:T,rightList:F,handleNavClick:ae,logo:he,title:ke,language:Me}=i;return(0,r.jsxs)("header",{className:"frame-header",style:v,children:[T?.length||F?.length?(0,r.jsx)(z,{Link:g,leftList:T,rightList:F,handleNavClick:(Pe,_)=>ae(i,Pe,_),logo:he,title:ke,language:Me}):null,f?.length?(0,r.jsx)(Ue,{data:f,type:"horizontal",Link:g,style:m}):null]})};var ue=A(84),G={};G.styleTagTransform=K(),G.setAttributes=dt(),G.insert=ht().bind(null,"head"),G.domAPI=ut(),G.insertStyleElement=c();var et=vt()(ue.Z,G);const tt=ue.Z&&ue.Z.locals?ue.Z.locals:void 0,ot=({Footer:i})=>(0,r.jsx)("div",{className:"footer",children:i?(0,r.jsx)(i,{}):"copyright \xA9 2020-2022"}),Ke=i=>{const{useStore:f,menu:v,MenuTop:m,MenuBottom:g,Link:T,inputPath:F,asideStyle:ae}=i,[he,ke]=f("huxy-collapse"),{width:Me}=E(),Pe=(0,u.useRef)();return ve(Pe,_=>{Me<=1024&&he&&ke(!1)}),(0,u.useEffect)(()=>{Me<=1024&&he&&ke(!1)},[F]),(0,r.jsx)("aside",{className:"frame-aside",style:ae,children:(0,r.jsxs)("div",{ref:Pe,style:{height:"100%"},children:[m&&(0,r.jsx)(m,{...i}),(0,r.jsx)(Ue,{data:v,collapsed:he&&Me>1024,Link:T}),g&&(0,r.jsx)(g,{collapsed:he,isSmall:Me<=1024,setCollapsed:ke})]})})},at=380,Ie=({inputPath:i,menuAnimate:f="ani-in"})=>{const v=(0,u.useRef)(i.split("?")[0]),m=(0,u.useRef)(),[g,T]=(0,u.useState)("");return(0,u.useEffect)(()=>{const F=i.split("?")[0];return F!==v.current&&(v.current=F,T(` ${f}`),m.current=setTimeout(()=>{T("")},at)),()=>{clearTimeout(m.current),T("")}},[i]),g},De=i=>{const{inputPath:f,contentStyle:v,menuAnimate:m,children:g}=i,T=Ie({inputPath:f,menuAnimate:m});return(0,r.jsx)("div",{className:`page-content${T}`,style:v,children:g})};var We=A(675),Ge={};Ge.styleTagTransform=K(),Ge.setAttributes=dt(),Ge.insert=ht().bind(null,"head"),Ge.domAPI=ut(),Ge.insertStyleElement=c();var gt=vt()(We.Z,Ge);const ft=We.Z&&We.Z.locals?We.Z.locals:void 0,Se=i=>{const{menu:f,current:v,MainTop:m,children:g,inputPath:T,contentStyle:F,menuAnimate:ae}=i,he=f?.length,ke=ae?ae===!0?"ani-in":ae:"";return(0,r.jsxs)("div",{className:`frame-container${he?"":" no-sidebar"}`,children:[he?(0,r.jsx)(Ke,{...i}):null,(0,r.jsx)("div",{className:"frame-view",children:(0,r.jsxs)("div",{className:"page-container",children:[m&&(0,r.jsx)(m,{current:v}),ke?(0,r.jsx)(De,{inputPath:T,contentStyle:F,menuAnimate:ke,children:g}):(0,r.jsx)("div",{className:"page-content",style:F,children:g})]})}),(0,r.jsx)("footer",{className:"frame-footer",children:(0,r.jsx)(ot,{...i})})]})};var Fe=A(91),_e={};_e.styleTagTransform=K(),_e.setAttributes=dt(),_e.insert=ht().bind(null,"head"),_e.domAPI=ut(),_e.insertStyleElement=c();var mt=vt()(Fe.Z,_e);const xt=Fe.Z&&Fe.Z.locals?Fe.Z.locals:void 0,it=i=>{const{useStore:f,vertical:v,horizontal:m,menu:g,leftList:T,rightList:F}=i,{width:ae}=E(),[he]=f("huxy-collapse"),ke=ae<=1024,Me=ke?g:v,Pe=ke?[]:m,_=Me?.length,xe=Pe?.length,Be=xe&&_,rt=Be?"compose":xe?"horizontal":he?"collapsed":"",lt=Be&&he?"composeCollapsed":"",e=T?.length||F?.length?"":"no-header",t=["frame",rt,lt,e].filter(Boolean).join(" ");return(0,r.jsxs)("div",{className:t,children:[(0,r.jsx)(X,{...i,navMenu:Pe}),(0,r.jsx)("main",{className:"frame-main",children:(0,r.jsx)(Se,{...i,menu:Me})})]})}})();var W=nt.Z}}]);
