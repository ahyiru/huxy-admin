(self.webpackChunk=self.webpackChunk||[]).push([[350],{2949:function(Se,H,l){l.d(H,{Z:function(){return m}});var f=l(60042),G=l.n(f),c=l(27378),I=l(26775),Y=l(92746),He=l(649),Q=l(11026),n=l(18808),h=l(50189),g=l(31542),S=l(25773),O=l(83395),P=l(64649),j=l(78730),E=c.forwardRef(function(e,t){var r=e.prefixCls,o=e.style,i=e.className,b=e.duration,x=b===void 0?4.5:b,p=e.eventKey,k=e.content,v=e.closable,y=e.closeIcon,R=y===void 0?"x":y,$=e.props,T=e.onClick,A=e.onNoticeClose,X=e.times,_=c.useState(!1),z=(0,Q.Z)(_,2),U=z[0],ee=z[1],V=function(){A(p)},fe=function(F){(F.key==="Enter"||F.code==="Enter"||F.keyCode===j.Z.ENTER)&&V()};c.useEffect(function(){if(!U&&x>0){var Z=setTimeout(function(){V()},x*1e3);return function(){clearTimeout(Z)}}},[x,U,X]);var D="".concat(r,"-notice");return c.createElement("div",(0,S.Z)({},$,{ref:t,className:G()(D,i,(0,P.Z)({},"".concat(D,"-closable"),v)),style:o,onMouseEnter:function(){ee(!0)},onMouseLeave:function(){ee(!1)},onClick:T}),c.createElement("div",{className:"".concat(D,"-content")},k),v&&c.createElement("a",{tabIndex:0,className:"".concat(D,"-close"),onKeyDown:fe,onClick:function(F){F.preventDefault(),F.stopPropagation(),V()}},R))}),oe=E,re=c.createContext({}),pe=function(t){var r=t.children,o=t.classNames;return c.createElement(re.Provider,{value:{classNames:o}},r)},de=pe,te=function(t){var r=t.configList,o=t.placement,i=t.prefixCls,b=t.className,x=t.style,p=t.motion,k=t.onAllNoticeRemoved,v=t.onNoticeClose,y=(0,c.useContext)(re),R=y.classNames,$=r.map(function(A){return{config:A,key:A.key}}),T=typeof p=="function"?p(o):p;return c.createElement(O.V4,(0,S.Z)({key:o,className:G()(i,"".concat(i,"-").concat(o),R?.list,b),style:x,keys:$,motionAppear:!0},T,{onAllRemoved:function(){k(o)}}),function(A,X){var _=A.config,z=A.className,U=A.style,ee=_,V=ee.key,fe=ee.times,D=_,Z=D.className,F=D.style;return c.createElement(oe,(0,S.Z)({},_,{ref:X,prefixCls:i,className:G()(z,Z,R?.notice),style:(0,h.Z)((0,h.Z)({},U),F),times:fe,key:V,eventKey:V,onNoticeClose:v}))})},ge=te,Ee=c.forwardRef(function(e,t){var r=e.prefixCls,o=r===void 0?"rc-notification":r,i=e.container,b=e.motion,x=e.maxCount,p=e.className,k=e.style,v=e.onAllRemoved,y=e.renderNotifications,R=c.useState([]),$=(0,Q.Z)(R,2),T=$[0],A=$[1],X=function(F){var be,Ce=T.find(function(qe){return qe.key===F});Ce==null||(be=Ce.onClose)===null||be===void 0||be.call(Ce),A(function(qe){return qe.filter(function(ct){return ct.key!==F})})};c.useImperativeHandle(t,function(){return{open:function(F){A(function(be){var Ce=(0,He.Z)(be),qe=Ce.findIndex(function(ht){return ht.key===F.key}),ct=(0,h.Z)({},F);if(qe>=0){var ut;ct.times=(((ut=be[qe])===null||ut===void 0?void 0:ut.times)||0)+1,Ce[qe]=ct}else ct.times=0,Ce.push(ct);return x>0&&Ce.length>x&&(Ce=Ce.slice(-x)),Ce})},close:function(F){X(F)},destroy:function(){A([])}}});var _=c.useState({}),z=(0,Q.Z)(_,2),U=z[0],ee=z[1];c.useEffect(function(){var Z={};T.forEach(function(F){var be=F.placement,Ce=be===void 0?"topRight":be;Ce&&(Z[Ce]=Z[Ce]||[],Z[Ce].push(F))}),Object.keys(U).forEach(function(F){Z[F]=Z[F]||[]}),ee(Z)},[T]);var V=function(F){ee(function(be){var Ce=(0,h.Z)({},be),qe=Ce[F]||[];return qe.length||delete Ce[F],Ce})},fe=c.useRef(!1);if(c.useEffect(function(){Object.keys(U).length>0?fe.current=!0:fe.current&&(v?.(),fe.current=!1)},[U]),!i)return null;var D=Object.keys(U);return(0,g.createPortal)(c.createElement(c.Fragment,null,D.map(function(Z){var F=U[Z],be=c.createElement(ge,{key:Z,configList:F,placement:Z,prefixCls:o,className:p?.(Z),style:k?.(Z),motion:b,onNoticeClose:X,onAllNoticeRemoved:V});return y?y(be,{prefixCls:o,key:Z}):be})),i)}),Ie=Ee,Ke=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","renderNotifications"],dt=function(){return document.body},tt=0;function nt(){for(var e={},t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return r.forEach(function(i){i&&Object.keys(i).forEach(function(b){var x=i[b];x!==void 0&&(e[b]=x)})}),e}function at(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,r=t===void 0?dt:t,o=e.motion,i=e.prefixCls,b=e.maxCount,x=e.className,p=e.style,k=e.onAllRemoved,v=e.renderNotifications,y=(0,n.Z)(e,Ke),R=c.useState(),$=(0,Q.Z)(R,2),T=$[0],A=$[1],X=c.useRef(),_=c.createElement(Ie,{container:T,ref:X,prefixCls:i,motion:o,maxCount:b,className:x,style:p,onAllRemoved:k,renderNotifications:v}),z=c.useState([]),U=(0,Q.Z)(z,2),ee=U[0],V=U[1],fe=c.useMemo(function(){return{open:function(Z){var F=nt(y,Z);(F.key===null||F.key===void 0)&&(F.key="rc-notification-".concat(tt),tt+=1),V(function(be){return[].concat((0,He.Z)(be),[{type:"open",config:F}])})},close:function(Z){V(function(F){return[].concat((0,He.Z)(F),[{type:"close",key:Z}])})},destroy:function(){V(function(Z){return[].concat((0,He.Z)(Z),[{type:"destroy"}])})}}},[]);return c.useEffect(function(){A(r())}),c.useEffect(function(){X.current&&ee.length&&(ee.forEach(function(D){switch(D.type){case"open":X.current.open(D.config);break;case"close":X.current.close(D.key);break;case"destroy":X.current.destroy();break}}),V(function(D){return D.filter(function(Z){return!ee.includes(Z)})}))},[ee]),[fe,_]}var Xe=l(92916),et=l(14770),Ve=l(55222),ot=l(53058),Ge=l(77597),it=l(93326),Je=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]]);return r};const lt={info:c.createElement(Ge.Z,null),success:c.createElement(et.Z,null),error:c.createElement(Ve.Z,null),warning:c.createElement(ot.Z,null),loading:c.createElement(it.Z,null)},d=e=>{let{prefixCls:t,type:r,icon:o,children:i}=e;return c.createElement("div",{className:G()(`${t}-custom-content`,`${t}-${r}`)},o||lt[r],c.createElement("span",null,i))},N=e=>{const{prefixCls:t,className:r,type:o,icon:i,content:b}=e,x=Je(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:p}=React.useContext(ConfigContext),k=t||p("message"),[,v]=useStyle(k);return React.createElement(Notice,Object.assign({},x,{prefixCls:k,className:classNames(r,v,`${k}-notice-pure-panel`),eventKey:"pure",duration:null,content:React.createElement(d,{prefixCls:k,type:o,icon:i},b)}))};var q=null,w=l(32120),C=l(72457),ne=l(6117),ue=l(5515);const Me=e=>{const{componentCls:t,iconCls:r,boxShadow:o,colorText:i,colorSuccess:b,colorError:x,colorWarning:p,colorInfo:k,fontSizeLG:v,motionEaseInOutCirc:y,motionDurationSlow:R,marginXS:$,paddingXS:T,borderRadiusLG:A,zIndexPopup:X,contentPadding:_,contentBg:z}=e,U=`${t}-notice`,ee=new w.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:T,transform:"translateY(0)",opacity:1}}),V=new w.E4("MessageMoveOut",{"0%":{maxHeight:e.height,padding:T,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),fe={padding:T,textAlign:"center",[`${t}-custom-content > ${r}`]:{verticalAlign:"text-bottom",marginInlineEnd:$,fontSize:v},[`${U}-content`]:{display:"inline-block",padding:_,background:z,borderRadius:A,boxShadow:o,pointerEvents:"all"},[`${t}-success > ${r}`]:{color:b},[`${t}-error > ${r}`]:{color:x},[`${t}-warning > ${r}`]:{color:p},[`${t}-info > ${r},
      ${t}-loading > ${r}`]:{color:k}};return[{[t]:Object.assign(Object.assign({},(0,C.Wf)(e)),{color:i,position:"fixed",top:$,width:"100%",pointerEvents:"none",zIndex:X,[`${t}-move-up`]:{animationFillMode:"forwards"},[`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]:{animationName:ee,animationDuration:R,animationPlayState:"paused",animationTimingFunction:y},[`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${t}-move-up-leave`]:{animationName:V,animationDuration:R,animationPlayState:"paused",animationTimingFunction:y},[`${t}-move-up-leave${t}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[t]:{[U]:Object.assign({},fe)}},{[`${t}-notice-pure-panel`]:Object.assign(Object.assign({},fe),{padding:0,textAlign:"start"})}]};var Pe=(0,ne.Z)("Message",e=>{const t=(0,ue.TS)(e,{height:150});return[Me(t)]},e=>({zIndexPopup:e.zIndexPopupBase+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}));function ve(e,t){return{motionName:t??`${e}-move-up`}}function me(e){let t;const r=new Promise(i=>{t=e(()=>{i(!0)})}),o=()=>{t?.()};return o.then=(i,b)=>r.then(i,b),o.promise=r,o}var ie=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]]);return r};const s=8,u=3,M=e=>{let{children:t,prefixCls:r}=e;const[,o]=Pe(r);return c.createElement(de,{classNames:{list:o,notice:o}},t)},L=(e,t)=>{let{prefixCls:r,key:o}=t;return c.createElement(M,{prefixCls:r,key:o},e)},B=c.forwardRef((e,t)=>{const{top:r,prefixCls:o,getContainer:i,maxCount:b,duration:x=u,rtl:p,transitionName:k,onAllRemoved:v}=e,{getPrefixCls:y,getPopupContainer:R,message:$}=c.useContext(I.E_),T=o||y("message"),A=()=>({left:"50%",transform:"translateX(-50%)",top:r??s}),X=()=>G()({[`${T}-rtl`]:p}),_=()=>ve(T,k),z=c.createElement("span",{className:`${T}-close-x`},c.createElement(Y.Z,{className:`${T}-close-icon`})),[U,ee]=at({prefixCls:T,style:A,className:X,motion:_,closable:!1,closeIcon:z,duration:x,getContainer:()=>i?.()||R?.()||document.body,maxCount:b,onAllRemoved:v,renderNotifications:L});return c.useImperativeHandle(t,()=>Object.assign(Object.assign({},U),{prefixCls:T,message:$})),ee});let K=0;function J(e){const t=c.useRef(null),r=(0,Xe.ln)("Message");return[c.useMemo(()=>{const i=v=>{var y;(y=t.current)===null||y===void 0||y.close(v)},b=v=>{if(!t.current){const Z=()=>{};return Z.then=()=>{},Z}const{open:y,prefixCls:R,message:$}=t.current,T=`${R}-notice`,{content:A,icon:X,type:_,key:z,className:U,style:ee,onClose:V}=v,fe=ie(v,["content","icon","type","key","className","style","onClose"]);let D=z;return D==null&&(K+=1,D=`antd-message-${K}`),me(Z=>(y(Object.assign(Object.assign({},fe),{key:D,content:c.createElement(d,{prefixCls:R,type:_,icon:X},A),placement:"top",className:G()(_&&`${T}-${_}`,U,$?.className),style:Object.assign(Object.assign({},$?.style),ee),onClose:()=>{V?.(),Z()}})),()=>{i(D)}))},p={open:b,destroy:v=>{var y;v!==void 0?i(v):(y=t.current)===null||y===void 0||y.destroy()}};return["info","success","warning","error","loading"].forEach(v=>{const y=(R,$,T)=>{let A;R&&typeof R=="object"&&"content"in R?A=R:A={content:R};let X,_;typeof $=="function"?_=$:(X=$,_=T);const z=Object.assign(Object.assign({onClose:_,duration:X},A),{type:v});return b(z)};p[v]=y}),p},[]),c.createElement(B,Object.assign({key:"message-holder"},e,{ref:t}))]}function ae(e){return J(e)}var he=l(77719),we=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]]);return r};const se={info:c.createElement(Ge.Z,null),success:c.createElement(et.Z,null),error:c.createElement(Ve.Z,null),warning:c.createElement(ot.Z,null),loading:c.createElement(it.Z,null)};function ce(e,t){return t===null||t===!1?null:t||c.createElement("span",{className:`${e}-close-x`},c.createElement(Y.Z,{className:`${e}-close-icon`}))}const xe={success:et.Z,info:Ge.Z,error:Ve.Z,warning:ot.Z},ye=e=>{const{prefixCls:t,icon:r,type:o,message:i,description:b,btn:x,role:p="alert"}=e;let k=null;return r?k=c.createElement("span",{className:`${t}-icon`},r):o&&(k=c.createElement(xe[o]||null,{className:G()(`${t}-icon`,`${t}-icon-${o}`)})),c.createElement("div",{className:G()({[`${t}-with-icon`]:k}),role:p},k,c.createElement("div",{className:`${t}-message`},i),c.createElement("div",{className:`${t}-description`},b),x&&c.createElement("div",{className:`${t}-btn`},x))},Oe=e=>{const{prefixCls:t,className:r,icon:o,type:i,message:b,description:x,btn:p,closable:k=!0,closeIcon:v}=e,y=we(e,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon"]),{getPrefixCls:R}=React.useContext(ConfigContext),$=t||R("notification"),T=`${$}-notice`,[,A]=useStyle($);return React.createElement(Notice,Object.assign({},y,{prefixCls:$,className:classNames(r,A,`${T}-pure-panel`),eventKey:"pure",duration:null,closable:k,closeIcon:ce($,v),content:React.createElement(ye,{prefixCls:T,icon:o,type:i,message:b,description:x,btn:p})}))};var je=null,le=e=>{const{componentCls:t,width:r,notificationMarginEdge:o,animationMaxHeight:i}=e,b=new w.E4("antNotificationTopFadeIn",{"0%":{marginTop:"-100%",opacity:0},"100%":{marginTop:0,opacity:1}}),x=new w.E4("antNotificationBottomFadeIn",{"0%":{bottom:-i,opacity:0},"100%":{bottom:0,opacity:1}}),p=new w.E4("antNotificationLeftFadeIn",{"0%":{right:{_skip_check_:!0,value:r},opacity:0},"100%":{right:{_skip_check_:!0,value:0},opacity:1}});return{[`&${t}-top, &${t}-bottom`]:{marginInline:0},[`&${t}-top`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:b}},[`&${t}-bottom`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:x}},[`&${t}-topLeft, &${t}-bottomLeft`]:{marginInlineEnd:0,marginInlineStart:o,[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:p}}}};const $e=e=>{const{iconCls:t,componentCls:r,boxShadow:o,fontSizeLG:i,notificationMarginBottom:b,borderRadiusLG:x,colorSuccess:p,colorInfo:k,colorWarning:v,colorError:y,colorTextHeading:R,notificationBg:$,notificationPadding:T,notificationMarginEdge:A,motionDurationMid:X,motionEaseInOut:_,fontSize:z,lineHeight:U,width:ee,notificationIconSize:V,colorText:fe}=e,D=`${r}-notice`,Z=new w.E4("antNotificationFadeIn",{"0%":{left:{_skip_check_:!0,value:ee},opacity:0},"100%":{left:{_skip_check_:!0,value:0},opacity:1}}),F=new w.E4("antNotificationFadeOut",{"0%":{maxHeight:e.animationMaxHeight,marginBottom:b,opacity:1},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}}),be={position:"relative",width:ee,maxWidth:`calc(100vw - ${A*2}px)`,marginBottom:b,marginInlineStart:"auto",padding:T,overflow:"hidden",lineHeight:U,wordWrap:"break-word",background:$,borderRadius:x,boxShadow:o,[`${r}-close-icon`]:{fontSize:z,cursor:"pointer"},[`${D}-message`]:{marginBottom:e.marginXS,color:R,fontSize:i,lineHeight:e.lineHeightLG},[`${D}-description`]:{fontSize:z,color:fe},[`&${D}-closable ${D}-message`]:{paddingInlineEnd:e.paddingLG},[`${D}-with-icon ${D}-message`]:{marginBottom:e.marginXS,marginInlineStart:e.marginSM+V,fontSize:i},[`${D}-with-icon ${D}-description`]:{marginInlineStart:e.marginSM+V,fontSize:z},[`${D}-icon`]:{position:"absolute",fontSize:V,lineHeight:0,[`&-success${t}`]:{color:p},[`&-info${t}`]:{color:k},[`&-warning${t}`]:{color:v},[`&-error${t}`]:{color:y}},[`${D}-close`]:{position:"absolute",top:e.notificationPaddingVertical,insetInlineEnd:e.notificationPaddingHorizontal,color:e.colorIcon,outline:"none",width:e.notificationCloseButtonSize,height:e.notificationCloseButtonSize,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.wireframe?"transparent":e.colorFillContent}},[`${D}-btn`]:{float:"right",marginTop:e.marginSM}};return[{[r]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,C.Wf)(e)),{position:"fixed",zIndex:e.zIndexPopup,marginInlineEnd:A,[`${r}-hook-holder`]:{position:"relative"},[`&${r}-top, &${r}-bottom`]:{[D]:{marginInline:"auto auto"}},[`&${r}-topLeft, &${r}-bottomLeft`]:{[D]:{marginInlineEnd:"auto",marginInlineStart:0}},[`${r}-fade-enter, ${r}-fade-appear`]:{animationDuration:e.motionDurationMid,animationTimingFunction:_,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${r}-fade-leave`]:{animationTimingFunction:_,animationFillMode:"both",animationDuration:X,animationPlayState:"paused"},[`${r}-fade-enter${r}-fade-enter-active, ${r}-fade-appear${r}-fade-appear-active`]:{animationName:Z,animationPlayState:"running"},[`${r}-fade-leave${r}-fade-leave-active`]:{animationName:F,animationPlayState:"running"}}),le(e)),{"&-rtl":{direction:"rtl",[`${D}-btn`]:{float:"left"}}})},{[r]:{[D]:Object.assign({},be)}},{[`${D}-pure-panel`]:Object.assign(Object.assign({},be),{margin:0})}]};var ze=(0,ne.Z)("Notification",e=>{const t=e.paddingMD,r=e.paddingLG,o=(0,ue.TS)(e,{notificationBg:e.colorBgElevated,notificationPaddingVertical:t,notificationPaddingHorizontal:r,notificationIconSize:e.fontSizeLG*e.lineHeightLG,notificationCloseButtonSize:e.controlHeightLG*.55,notificationMarginBottom:e.margin,notificationPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,notificationMarginEdge:e.marginLG,animationMaxHeight:150});return[$e(o)]},e=>({zIndexPopup:e.zIndexPopupBase+50,width:384}));function Re(e,t,r){let o;switch(e){case"top":o={left:"50%",transform:"translateX(-50%)",right:"auto",top:t,bottom:"auto"};break;case"topLeft":o={left:0,top:t,bottom:"auto"};break;case"topRight":o={right:0,top:t,bottom:"auto"};break;case"bottom":o={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:r};break;case"bottomLeft":o={left:0,top:"auto",bottom:r};break;default:o={right:0,top:"auto",bottom:r};break}return o}function ke(e){return{motionName:`${e}-fade`}}var De=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(r[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,o=Object.getOwnPropertySymbols(e);i<o.length;i++)t.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(e,o[i])&&(r[o[i]]=e[o[i]]);return r};const Ye=24,Be=4.5,Le="topRight",Ze=e=>{let{children:t,prefixCls:r}=e;const[,o]=ze(r);return c.createElement(de,{classNames:{list:o,notice:o}},t)},We=(e,t)=>{let{prefixCls:r,key:o}=t;return c.createElement(Ze,{prefixCls:r,key:o},e)},Ne=c.forwardRef((e,t)=>{const{top:r,bottom:o,prefixCls:i,getContainer:b,maxCount:x,rtl:p,onAllRemoved:k}=e,{getPrefixCls:v,getPopupContainer:y,notification:R}=c.useContext(I.E_),$=i||v("notification"),T=U=>Re(U,r??Ye,o??Ye),A=()=>G()({[`${$}-rtl`]:p}),X=()=>ke($),[_,z]=at({prefixCls:$,style:T,className:A,motion:X,closable:!0,closeIcon:ce($),duration:Be,getContainer:()=>b?.()||y?.()||document.body,maxCount:x,onAllRemoved:k,renderNotifications:We});return c.useImperativeHandle(t,()=>Object.assign(Object.assign({},_),{prefixCls:$,notification:R})),z});function _e(e){const t=c.useRef(null),r=(0,Xe.ln)("Notification");return[c.useMemo(()=>{const i=k=>{var v;if(!t.current)return;const{open:y,prefixCls:R,notification:$}=t.current,T=`${R}-notice`,{message:A,description:X,icon:_,type:z,btn:U,className:ee,style:V,role:fe="alert",closeIcon:D}=k,Z=De(k,["message","description","icon","type","btn","className","style","role","closeIcon"]),F=ce(T,D);return y(Object.assign(Object.assign({placement:(v=e?.placement)!==null&&v!==void 0?v:Le},Z),{content:c.createElement(ye,{prefixCls:T,icon:_,type:z,message:A,description:X,btn:U,role:fe}),className:G()(z&&`${T}-${z}`,ee,$?.className),style:Object.assign(Object.assign({},$?.style),V),closeIcon:F,closable:!!F}))},x={open:i,destroy:k=>{var v,y;k!==void 0?(v=t.current)===null||v===void 0||v.close(k):(y=t.current)===null||y===void 0||y.destroy()}};return["success","info","warning","error"].forEach(k=>{x[k]=v=>i(Object.assign(Object.assign({},v),{type:k}))}),x},[]),c.createElement(Ne,Object.assign({key:"notification-holder"},e,{ref:t}))]}function Fe(e){return _e(e)}const Te=c.createContext({});var Ue=c.createContext({message:{},notification:{},modal:{}});const rt=e=>{const{componentCls:t,colorText:r,fontSize:o,lineHeight:i,fontFamily:b}=e;return{[t]:{color:r,fontSize:o,lineHeight:i,fontFamily:b}}};var st=(0,ne.Z)("App",e=>[rt(e)]);const Qe=()=>c.useContext(Ue),a=e=>{const{prefixCls:t,children:r,className:o,rootClassName:i,message:b,notification:x,style:p}=e,{getPrefixCls:k}=(0,c.useContext)(I.E_),v=k("app",t),[y,R]=st(v),$=G()(R,v,o,i),T=(0,c.useContext)(Te),A=c.useMemo(()=>({message:Object.assign(Object.assign({},T.message),b),notification:Object.assign(Object.assign({},T.notification),x)}),[b,x,T.message,T.notification]),[X,_]=ae(A.message),[z,U]=Fe(A.notification),[ee,V]=(0,he.Z)(),fe=c.useMemo(()=>({message:X,notification:z,modal:ee}),[X,z,ee]);return y(c.createElement(Ue.Provider,{value:fe},c.createElement(Te.Provider,{value:A},c.createElement("div",{className:$,style:p},V,_,U,r))))};a.useApp=Qe;var m=a},58035:function(Se,H,l){l.d(H,{Z:function(){return lt}});var f=l(60042),G=l.n(f),c=l(83395),I=l(27378),Y=l(97933),He=l(93795),Q=l(26775),n=l(32120),h=l(72457),g=l(9540),S=l(5515),O=l(6117);const P=new n.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),j=new n.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),E=new n.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),oe=new n.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),re=new n.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),pe=new n.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),de=d=>{const{componentCls:N,iconCls:q,antCls:w,badgeShadowSize:C,motionDurationSlow:ne,textFontSize:ue,textFontSizeSM:Me,statusSize:Pe,dotSize:ve,textFontWeight:me,indicatorHeight:ie,indicatorHeightSM:s,marginXS:u}=d,M=`${w}-scroll-number`,L=(0,g.Z)(d,(B,K)=>{let{darkColor:J}=K;return{[`&${N} ${N}-color-${B}`]:{background:J,[`&:not(${N}-count)`]:{color:J}}}});return{[N]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,h.Wf)(d)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${N}-count`]:{zIndex:d.indicatorZIndex,minWidth:ie,height:ie,color:d.badgeTextColor,fontWeight:me,fontSize:ue,lineHeight:`${ie}px`,whiteSpace:"nowrap",textAlign:"center",background:d.badgeColor,borderRadius:ie/2,boxShadow:`0 0 0 ${C}px ${d.badgeShadowColor}`,transition:`background ${d.motionDurationMid}`,a:{color:d.badgeTextColor},"a:hover":{color:d.badgeTextColor},"a:hover &":{background:d.badgeColorHover}},[`${N}-count-sm`]:{minWidth:s,height:s,fontSize:Me,lineHeight:`${s}px`,borderRadius:s/2},[`${N}-multiple-words`]:{padding:`0 ${d.paddingXS}px`,bdi:{unicodeBidi:"plaintext"}},[`${N}-dot`]:{zIndex:d.indicatorZIndex,width:ve,minWidth:ve,height:ve,background:d.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${C}px ${d.badgeShadowColor}`},[`${N}-dot${M}`]:{transition:`background ${ne}`},[`${N}-count, ${N}-dot, ${M}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${q}-spin`]:{animationName:pe,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${N}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${N}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:Pe,height:Pe,verticalAlign:"middle",borderRadius:"50%"},[`${N}-status-success`]:{backgroundColor:d.colorSuccess},[`${N}-status-processing`]:{overflow:"visible",color:d.colorPrimary,backgroundColor:d.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:C,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:P,animationDuration:d.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${N}-status-default`]:{backgroundColor:d.colorTextPlaceholder},[`${N}-status-error`]:{backgroundColor:d.colorError},[`${N}-status-warning`]:{backgroundColor:d.colorWarning},[`${N}-status-text`]:{marginInlineStart:u,color:d.colorText,fontSize:d.fontSize}}}),L),{[`${N}-zoom-appear, ${N}-zoom-enter`]:{animationName:j,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack,animationFillMode:"both"},[`${N}-zoom-leave`]:{animationName:E,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack,animationFillMode:"both"},[`&${N}-not-a-wrapper`]:{[`${N}-zoom-appear, ${N}-zoom-enter`]:{animationName:oe,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack},[`${N}-zoom-leave`]:{animationName:re,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack},[`&:not(${N}-status)`]:{verticalAlign:"middle"},[`${M}-custom-component, ${N}-count`]:{transform:"none"},[`${M}-custom-component, ${M}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${M}`]:{overflow:"hidden",[`${M}-only`]:{position:"relative",display:"inline-block",height:ie,transition:`all ${d.motionDurationSlow} ${d.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${M}-only-unit`]:{height:ie,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${M}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${N}-count, ${N}-dot, ${M}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},te=d=>{const{fontSize:N,lineHeight:q,lineWidth:w,marginXS:C,colorBorderBg:ne}=d,ue=Math.round(N*q),Me=w,Pe=d.colorBgContainer,ve=d.colorError,me=d.colorErrorHover;return(0,S.TS)(d,{badgeFontHeight:ue,badgeShadowSize:Me,badgeTextColor:Pe,badgeColor:ve,badgeColorHover:me,badgeShadowColor:ne,badgeProcessingDuration:"1.2s",badgeRibbonOffset:C,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},ge=d=>{const{fontSize:N,lineHeight:q,fontSizeSM:w,lineWidth:C}=d;return{indicatorZIndex:"auto",indicatorHeight:Math.round(N*q)-2*C,indicatorHeightSM:N,dotSize:w/2,textFontSize:w,textFontSizeSM:w,textFontWeight:"normal",statusSize:w/2}};var Ee=(0,O.Z)("Badge",d=>{const N=te(d);return[de(N)]},ge);const Ie=d=>{const{antCls:N,badgeFontHeight:q,marginXS:w,badgeRibbonOffset:C}=d,ne=`${N}-ribbon`,ue=`${N}-ribbon-wrapper`,Me=(0,g.Z)(d,(Pe,ve)=>{let{darkColor:me}=ve;return{[`&${ne}-color-${Pe}`]:{background:me,color:me}}});return{[`${ue}`]:{position:"relative"},[`${ne}`]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,h.Wf)(d)),{position:"absolute",top:w,padding:`0 ${d.paddingXS}px`,color:d.colorPrimary,lineHeight:`${q}px`,whiteSpace:"nowrap",backgroundColor:d.colorPrimary,borderRadius:d.borderRadiusSM,[`${ne}-text`]:{color:d.colorTextLightSolid},[`${ne}-corner`]:{position:"absolute",top:"100%",width:C,height:C,color:"currentcolor",border:`${C/2}px solid`,transform:d.badgeRibbonCornerTransform,transformOrigin:"top",filter:d.badgeRibbonCornerFilter}}),Me),{[`&${ne}-placement-end`]:{insetInlineEnd:-C,borderEndEndRadius:0,[`${ne}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${ne}-placement-start`]:{insetInlineStart:-C,borderEndStartRadius:0,[`${ne}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var Ke=(0,O.Z)(["Badge","Ribbon"],d=>{const N=te(d);return[Ie(N)]},ge),tt=d=>{const{className:N,prefixCls:q,style:w,color:C,children:ne,text:ue,placement:Me="end",rootClassName:Pe}=d,{getPrefixCls:ve,direction:me}=I.useContext(Q.E_),ie=ve("ribbon",q),s=(0,Y.o2)(C,!1),u=G()(ie,`${ie}-placement-${Me}`,{[`${ie}-rtl`]:me==="rtl",[`${ie}-color-${C}`]:s},N),[M,L]=Ke(ie),B={},K={};return C&&!s&&(B.background=C,K.color=C),M(I.createElement("div",{className:G()(`${ie}-wrapper`,Pe,L)},ne,I.createElement("div",{className:G()(u,L),style:Object.assign(Object.assign({},B),w)},I.createElement("span",{className:`${ie}-text`},ue),I.createElement("div",{className:`${ie}-corner`,style:K}))))};function nt(d){let{prefixCls:N,value:q,current:w,offset:C=0}=d,ne;return C&&(ne={position:"absolute",top:`${C}00%`,left:0}),I.createElement("span",{style:ne,className:G()(`${N}-only-unit`,{current:w})},q)}function at(d,N,q){let w=d,C=0;for(;(w+10)%10!==N;)w+=q,C+=q;return C}function Xe(d){const{prefixCls:N,count:q,value:w}=d,C=Number(w),ne=Math.abs(q),[ue,Me]=I.useState(C),[Pe,ve]=I.useState(ne),me=()=>{Me(C),ve(ne)};I.useEffect(()=>{const u=setTimeout(()=>{me()},1e3);return()=>{clearTimeout(u)}},[C]);let ie,s;if(ue===C||Number.isNaN(C)||Number.isNaN(ue))ie=[I.createElement(nt,Object.assign({},d,{key:C,current:!0}))],s={transition:"none"};else{ie=[];const u=C+10,M=[];for(let K=C;K<=u;K+=1)M.push(K);const L=M.findIndex(K=>K%10===ue);ie=M.map((K,J)=>{const ae=K%10;return I.createElement(nt,Object.assign({},d,{key:K,value:ae,offset:J-L,current:J===L}))});const B=Pe<ne?1:-1;s={transform:`translateY(${-at(ue,C,B)}00%)`}}return I.createElement("span",{className:`${N}-only`,style:s,onTransitionEnd:me},ie)}var et=function(d,N){var q={};for(var w in d)Object.prototype.hasOwnProperty.call(d,w)&&N.indexOf(w)<0&&(q[w]=d[w]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,w=Object.getOwnPropertySymbols(d);C<w.length;C++)N.indexOf(w[C])<0&&Object.prototype.propertyIsEnumerable.call(d,w[C])&&(q[w[C]]=d[w[C]]);return q},ot=I.forwardRef((d,N)=>{const{prefixCls:q,count:w,className:C,motionClassName:ne,style:ue,title:Me,show:Pe,component:ve="sup",children:me}=d,ie=et(d,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:s}=I.useContext(Q.E_),u=s("scroll-number",q),M=Object.assign(Object.assign({},ie),{"data-show":Pe,style:ue,className:G()(u,C,ne),title:Me});let L=w;if(w&&Number(w)%1===0){const B=String(w).split("");L=I.createElement("bdi",null,B.map((K,J)=>I.createElement(Xe,{prefixCls:u,count:Number(w),value:K,key:B.length-J})))}return ue&&ue.borderColor&&(M.style=Object.assign(Object.assign({},ue),{boxShadow:`0 0 0 1px ${ue.borderColor} inset`})),me?(0,He.Tm)(me,B=>({className:G()(`${u}-custom-component`,B?.className,ne)})):I.createElement(ve,Object.assign({},M,{ref:N}),L)}),Ge=function(d,N){var q={};for(var w in d)Object.prototype.hasOwnProperty.call(d,w)&&N.indexOf(w)<0&&(q[w]=d[w]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var C=0,w=Object.getOwnPropertySymbols(d);C<w.length;C++)N.indexOf(w[C])<0&&Object.prototype.propertyIsEnumerable.call(d,w[C])&&(q[w[C]]=d[w[C]]);return q};const it=(d,N)=>{var q,w,C,ne,ue;const{prefixCls:Me,scrollNumberPrefixCls:Pe,children:ve,status:me,text:ie,color:s,count:u=null,overflowCount:M=99,dot:L=!1,size:B="default",title:K,offset:J,style:ae,className:he,rootClassName:we,classNames:se,styles:ce,showZero:xe=!1}=d,ye=Ge(d,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:Oe,direction:je,badge:W}=I.useContext(Q.E_),le=Oe("badge",Me),[$e,ze]=Ee(le),Re=u>M?`${M}+`:u,ke=Re==="0"||Re===0,De=u===null||ke&&!xe,Ye=(me!=null||s!=null)&&De,Be=L&&!ke,Le=Be?"":Re,Ze=(0,I.useMemo)(()=>(Le==null||Le===""||ke&&!xe)&&!Be,[Le,ke,xe,Be]),We=(0,I.useRef)(u);Ze||(We.current=u);const Ne=We.current,_e=(0,I.useRef)(Le);Ze||(_e.current=Le);const Fe=_e.current,Te=(0,I.useRef)(Be);Ze||(Te.current=Be);const Ae=(0,I.useMemo)(()=>{if(!J)return Object.assign(Object.assign({},W?.style),ae);const t={marginTop:J[1]};return je==="rtl"?t.left=parseInt(J[0],10):t.right=-parseInt(J[0],10),Object.assign(Object.assign(Object.assign({},t),W?.style),ae)},[je,J,ae,W?.style]),Ue=K??(typeof Ne=="string"||typeof Ne=="number"?Ne:void 0),rt=Ze||!ie?null:I.createElement("span",{className:`${le}-status-text`},ie),st=!Ne||typeof Ne!="object"?void 0:(0,He.Tm)(Ne,t=>({style:Object.assign(Object.assign({},Ae),t.style)})),Qe=(0,Y.o2)(s,!1),a=G()(se?.indicator,(q=W?.classNames)===null||q===void 0?void 0:q.indicator,{[`${le}-status-dot`]:Ye,[`${le}-status-${me}`]:!!me,[`${le}-color-${s}`]:Qe}),m={};s&&!Qe&&(m.color=s,m.background=s);const e=G()(le,{[`${le}-status`]:Ye,[`${le}-not-a-wrapper`]:!ve,[`${le}-rtl`]:je==="rtl"},he,we,W?.className,(w=W?.classNames)===null||w===void 0?void 0:w.root,se?.root,ze);if(!ve&&Ye){const t=Ae.color;return $e(I.createElement("span",Object.assign({},ye,{className:e,style:Object.assign(Object.assign(Object.assign({},ce?.root),(C=W?.styles)===null||C===void 0?void 0:C.root),Ae)}),I.createElement("span",{className:a,style:Object.assign(Object.assign(Object.assign({},ce?.indicator),(ne=W?.styles)===null||ne===void 0?void 0:ne.indicator),m)}),ie&&I.createElement("span",{style:{color:t},className:`${le}-status-text`},ie)))}return $e(I.createElement("span",Object.assign({ref:N},ye,{className:e,style:Object.assign(Object.assign({},(ue=W?.styles)===null||ue===void 0?void 0:ue.root),ce?.root)}),ve,I.createElement(c.ZP,{visible:!Ze,motionName:`${le}-zoom`,motionAppear:!1,motionDeadline:1e3},t=>{let{className:r,ref:o}=t;var i,b;const x=Oe("scroll-number",Pe),p=Te.current,k=G()(se?.indicator,(i=W?.classNames)===null||i===void 0?void 0:i.indicator,{[`${le}-dot`]:p,[`${le}-count`]:!p,[`${le}-count-sm`]:B==="small",[`${le}-multiple-words`]:!p&&Fe&&Fe.toString().length>1,[`${le}-status-${me}`]:!!me,[`${le}-color-${s}`]:Qe});let v=Object.assign(Object.assign(Object.assign({},ce?.indicator),(b=W?.styles)===null||b===void 0?void 0:b.indicator),Ae);return s&&!Qe&&(v=v||{},v.background=s),I.createElement(ot,{prefixCls:x,show:!Ze,motionClassName:r,className:k,count:Fe,title:Ue,style:v,key:"scrollNumber",ref:o},st)}),rt))},Je=I.forwardRef(it);Je.Ribbon=tt;var lt=Je},26591:function(Se,H,l){l.d(H,{Z:function(){return ie}});var f=l(27378),G=l(60042),c=l.n(G),I=l(50189),Y=l(11026),He=l(81412),Q=l(99664),n=f.createContext(null),h=f.createContext({}),g=n,S=l(64649),O=l(25773),P=l(83395),j=l(78730),E=l(91864),oe=l(11815),re=function(u){var M=u.prefixCls,L=u.className,B=u.style,K=u.children,J=u.containerRef,ae=u.id,he=u.onMouseEnter,we=u.onMouseOver,se=u.onMouseLeave,ce=u.onClick,xe=u.onKeyDown,ye=u.onKeyUp,Oe={onMouseEnter:he,onMouseOver:we,onMouseLeave:se,onClick:ce,onKeyDown:xe,onKeyUp:ye},je=f.useContext(h),W=je.panel,le=(0,oe.x1)(W,J);return f.createElement(f.Fragment,null,f.createElement("div",(0,O.Z)({id:ae,className:c()("".concat(M,"-content"),L),style:(0,I.Z)({},B),"aria-modal":"true",role:"dialog",ref:le},Oe),K))},pe=re,de=l(74485);function te(s){return typeof s=="string"&&String(Number(s))===s?((0,de.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(s)):s}function ge(s){warning(!("wrapperClassName"in s),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!s.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var Ee={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function Ie(s,u){var M,L,B,K,J=s.prefixCls,ae=s.open,he=s.placement,we=s.inline,se=s.push,ce=s.forceRender,xe=s.autoFocus,ye=s.keyboard,Oe=s.rootClassName,je=s.rootStyle,W=s.zIndex,le=s.className,$e=s.id,ze=s.style,Re=s.motion,ke=s.width,De=s.height,Ye=s.children,Be=s.contentWrapperStyle,Le=s.mask,Ze=s.maskClosable,We=s.maskMotion,Ne=s.maskClassName,_e=s.maskStyle,Fe=s.afterOpenChange,Te=s.onClose,Ae=s.onMouseEnter,Ue=s.onMouseOver,rt=s.onMouseLeave,st=s.onClick,Qe=s.onKeyDown,a=s.onKeyUp,m=f.useRef(),e=f.useRef(),t=f.useRef();f.useImperativeHandle(u,function(){return m.current});var r=function(U){var ee=U.keyCode,V=U.shiftKey;switch(ee){case j.Z.TAB:{if(ee===j.Z.TAB){if(!V&&document.activeElement===t.current){var fe;(fe=e.current)===null||fe===void 0||fe.focus({preventScroll:!0})}else if(V&&document.activeElement===e.current){var D;(D=t.current)===null||D===void 0||D.focus({preventScroll:!0})}}break}case j.Z.ESC:{Te&&ye&&(U.stopPropagation(),Te(U));break}}};f.useEffect(function(){if(ae&&xe){var z;(z=m.current)===null||z===void 0||z.focus({preventScroll:!0})}},[ae]);var o=f.useState(!1),i=(0,Y.Z)(o,2),b=i[0],x=i[1],p=f.useContext(g),k;se===!1?k={distance:0}:se===!0?k={}:k=se||{};var v=(M=(L=(B=k)===null||B===void 0?void 0:B.distance)!==null&&L!==void 0?L:p?.pushDistance)!==null&&M!==void 0?M:180,y=f.useMemo(function(){return{pushDistance:v,push:function(){x(!0)},pull:function(){x(!1)}}},[v]);f.useEffect(function(){if(ae){var z;p==null||(z=p.push)===null||z===void 0||z.call(p)}else{var U;p==null||(U=p.pull)===null||U===void 0||U.call(p)}},[ae]),f.useEffect(function(){return function(){var z;p==null||(z=p.pull)===null||z===void 0||z.call(p)}},[]);var R=Le&&f.createElement(P.ZP,(0,O.Z)({key:"mask"},We,{visible:ae}),function(z,U){var ee=z.className,V=z.style;return f.createElement("div",{className:c()("".concat(J,"-mask"),ee,Ne),style:(0,I.Z)((0,I.Z)({},V),_e),onClick:Ze&&ae?Te:void 0,ref:U})}),$=typeof Re=="function"?Re(he):Re,T={};if(b&&v)switch(he){case"top":T.transform="translateY(".concat(v,"px)");break;case"bottom":T.transform="translateY(".concat(-v,"px)");break;case"left":T.transform="translateX(".concat(v,"px)");break;default:T.transform="translateX(".concat(-v,"px)");break}he==="left"||he==="right"?T.width=te(ke):T.height=te(De);var A={onMouseEnter:Ae,onMouseOver:Ue,onMouseLeave:rt,onClick:st,onKeyDown:Qe,onKeyUp:a},X=f.createElement(P.ZP,(0,O.Z)({key:"panel"},$,{visible:ae,forceRender:ce,onVisibleChanged:function(U){Fe?.(U)},removeOnLeave:!1,leavedClassName:"".concat(J,"-content-wrapper-hidden")}),function(z,U){var ee=z.className,V=z.style;return f.createElement("div",(0,O.Z)({className:c()("".concat(J,"-content-wrapper"),ee),style:(0,I.Z)((0,I.Z)((0,I.Z)({},T),V),Be)},(0,E.Z)(s,{data:!0})),f.createElement(pe,(0,O.Z)({id:$e,containerRef:U,prefixCls:J,className:le,style:ze},A),Ye))}),_=(0,I.Z)({},je);return W&&(_.zIndex=W),f.createElement(g.Provider,{value:y},f.createElement("div",{className:c()(J,"".concat(J,"-").concat(he),Oe,(K={},(0,S.Z)(K,"".concat(J,"-open"),ae),(0,S.Z)(K,"".concat(J,"-inline"),we),K)),style:_,tabIndex:-1,ref:m,onKeyDown:r},R,f.createElement("div",{tabIndex:0,ref:e,style:Ee,"aria-hidden":"true","data-sentinel":"start"}),X,f.createElement("div",{tabIndex:0,ref:t,style:Ee,"aria-hidden":"true","data-sentinel":"end"})))}var Ke=f.forwardRef(Ie),dt=Ke,tt=function(u){var M=u.open,L=M===void 0?!1:M,B=u.prefixCls,K=B===void 0?"rc-drawer":B,J=u.placement,ae=J===void 0?"right":J,he=u.autoFocus,we=he===void 0?!0:he,se=u.keyboard,ce=se===void 0?!0:se,xe=u.width,ye=xe===void 0?378:xe,Oe=u.mask,je=Oe===void 0?!0:Oe,W=u.maskClosable,le=W===void 0?!0:W,$e=u.getContainer,ze=u.forceRender,Re=u.afterOpenChange,ke=u.destroyOnClose,De=u.onMouseEnter,Ye=u.onMouseOver,Be=u.onMouseLeave,Le=u.onClick,Ze=u.onKeyDown,We=u.onKeyUp,Ne=u.panelRef,_e=f.useState(!1),Fe=(0,Y.Z)(_e,2),Te=Fe[0],Ae=Fe[1],Ue=f.useState(!1),rt=(0,Y.Z)(Ue,2),st=rt[0],Qe=rt[1];(0,Q.Z)(function(){Qe(!0)},[]);var a=st?L:!1,m=f.useRef(),e=f.useRef();(0,Q.Z)(function(){a&&(e.current=document.activeElement)},[a]);var t=function(x){var p;if(Ae(x),Re?.(x),!x&&e.current&&!((p=m.current)!==null&&p!==void 0&&p.contains(e.current))){var k;(k=e.current)===null||k===void 0||k.focus({preventScroll:!0})}},r=f.useMemo(function(){return{panel:Ne}},[Ne]);if(!ze&&!Te&&!a&&ke)return null;var o={onMouseEnter:De,onMouseOver:Ye,onMouseLeave:Be,onClick:Le,onKeyDown:Ze,onKeyUp:We},i=(0,I.Z)((0,I.Z)({},u),{},{open:a,prefixCls:K,placement:ae,autoFocus:we,keyboard:ce,width:ye,mask:je,maskClosable:le,inline:$e===!1,afterOpenChange:t,ref:m},o);return f.createElement(h.Provider,{value:r},f.createElement(He.Z,{open:a||ze||Te,autoDestroy:!1,getContainer:$e,autoLock:je&&(a||Te)},f.createElement(dt,i)))},nt=tt,at=nt,Xe=l(80821),et=l(26775),Ve=l(84006),ot=l(31630),Ge=l(29670),it=l(60467),lt=s=>{const{prefixCls:u,title:M,footer:L,extra:B,closeIcon:K,closable:J,onClose:ae,headerStyle:he,drawerStyle:we,bodyStyle:se,footerStyle:ce,children:xe}=s,ye=f.useCallback($e=>f.createElement("button",{type:"button",onClick:ae,"aria-label":"Close",className:`${u}-close`},$e),[ae]),[Oe,je]=(0,it.Z)(J,K,ye,void 0,!0),W=f.useMemo(()=>!M&&!Oe?null:f.createElement("div",{style:he,className:c()(`${u}-header`,{[`${u}-header-close-only`]:Oe&&!M&&!B})},f.createElement("div",{className:`${u}-header-title`},je,M&&f.createElement("div",{className:`${u}-title`},M)),B&&f.createElement("div",{className:`${u}-extra`},B)),[Oe,je,B,he,u,M]),le=f.useMemo(()=>{if(!L)return null;const $e=`${u}-footer`;return f.createElement("div",{className:$e,style:ce},L)},[L,ce,u]);return f.createElement("div",{className:`${u}-wrapper-body`,style:we},W,f.createElement("div",{className:`${u}-body`,style:se},xe),le)},d=l(6117),N=l(5515),w=s=>{const{componentCls:u,motionDurationSlow:M}=s,L={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${M}`}}};return{[u]:{[`${u}-mask-motion`]:{"&-enter, &-appear, &-leave":{"&-active":{transition:`all ${M}`}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}},[`${u}-panel-motion`]:{"&-left":[L,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[L,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[L,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[L,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}}}};const C=s=>{const{componentCls:u,zIndexPopup:M,colorBgMask:L,colorBgElevated:B,motionDurationSlow:K,motionDurationMid:J,padding:ae,paddingLG:he,fontSizeLG:we,lineHeightLG:se,lineWidth:ce,lineType:xe,colorSplit:ye,marginSM:Oe,colorIcon:je,colorIconHover:W,colorText:le,fontWeightStrong:$e,footerPaddingBlock:ze,footerPaddingInline:Re}=s,ke=`${u}-content-wrapper`;return{[u]:{position:"fixed",inset:0,zIndex:M,pointerEvents:"none","&-pure":{position:"relative",background:B,[`&${u}-left`]:{boxShadow:s.boxShadowDrawerLeft},[`&${u}-right`]:{boxShadow:s.boxShadowDrawerRight},[`&${u}-top`]:{boxShadow:s.boxShadowDrawerUp},[`&${u}-bottom`]:{boxShadow:s.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${u}-mask`]:{position:"absolute",inset:0,zIndex:M,background:L,pointerEvents:"auto"},[ke]:{position:"absolute",zIndex:M,maxWidth:"100vw",transition:`all ${K}`,"&-hidden":{display:"none"}},[`&-left > ${ke}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:s.boxShadowDrawerLeft},[`&-right > ${ke}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:s.boxShadowDrawerRight},[`&-top > ${ke}`]:{top:0,insetInline:0,boxShadow:s.boxShadowDrawerUp},[`&-bottom > ${ke}`]:{bottom:0,insetInline:0,boxShadow:s.boxShadowDrawerDown},[`${u}-content`]:{width:"100%",height:"100%",overflow:"auto",background:B,pointerEvents:"auto"},[`${u}-wrapper-body`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},[`${u}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${ae}px ${he}px`,fontSize:we,lineHeight:se,borderBottom:`${ce}px ${xe} ${ye}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${u}-extra`]:{flex:"none"},[`${u}-close`]:{display:"inline-block",marginInlineEnd:Oe,color:je,fontWeight:$e,fontSize:we,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${J}`,textRendering:"auto","&:focus, &:hover":{color:W,textDecoration:"none"}},[`${u}-title`]:{flex:1,margin:0,color:le,fontWeight:s.fontWeightStrong,fontSize:we,lineHeight:se},[`${u}-body`]:{flex:1,minWidth:0,minHeight:0,padding:he,overflow:"auto"},[`${u}-footer`]:{flexShrink:0,padding:`${ze}px ${Re}px`,borderTop:`${ce}px ${xe} ${ye}`},"&-rtl":{direction:"rtl"}}}};var ne=(0,d.Z)("Drawer",s=>{const u=(0,N.TS)(s,{});return[C(u),w(u)]},s=>({zIndexPopup:s.zIndexPopupBase,footerPaddingBlock:s.paddingXS,footerPaddingInline:s.padding})),ue=function(s,u){var M={};for(var L in s)Object.prototype.hasOwnProperty.call(s,L)&&u.indexOf(L)<0&&(M[L]=s[L]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var B=0,L=Object.getOwnPropertySymbols(s);B<L.length;B++)u.indexOf(L[B])<0&&Object.prototype.propertyIsEnumerable.call(s,L[B])&&(M[L[B]]=s[L[B]]);return M};const Me=null,Pe={distance:180},ve=s=>{var u;const{rootClassName:M,width:L,height:B,size:K="default",mask:J=!0,push:ae=Pe,open:he,afterOpenChange:we,onClose:se,prefixCls:ce,getContainer:xe,style:ye,className:Oe,visible:je,afterVisibleChange:W}=s,le=ue(s,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"]),{getPopupContainer:$e,getPrefixCls:ze,direction:Re,drawer:ke}=f.useContext(et.E_),De=ze("drawer",ce),[Ye,Be]=ne(De),Le=xe===void 0&&$e?()=>$e(document.body):xe,Ze=c()({"no-mask":!J,[`${De}-rtl`]:Re==="rtl"},M,Be),We=f.useMemo(()=>L??(K==="large"?736:378),[L,K]),Ne=f.useMemo(()=>B??(K==="large"?736:378),[B,K]),_e={motionName:(0,Xe.m)(De,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},Fe=Ae=>({motionName:(0,Xe.m)(De,`panel-motion-${Ae}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),Te=(0,Ge.H)();return Ye(f.createElement(ot.BR,null,f.createElement(Ve.Ux,{status:!0,override:!0},f.createElement(at,Object.assign({prefixCls:De,onClose:se,maskMotion:_e,motion:Fe},le,{open:he??je,mask:J,push:ae,width:We,height:Ne,style:Object.assign(Object.assign({},ke?.style),ye),className:c()(ke?.className,Oe),rootClassName:Ze,getContainer:Le,afterOpenChange:we??W,panelRef:Te}),f.createElement(lt,Object.assign({prefixCls:De},le,{onClose:se}))))))},me=s=>{const{prefixCls:u,style:M,className:L,placement:B="right"}=s,K=ue(s,["prefixCls","style","className","placement"]),{getPrefixCls:J}=f.useContext(et.E_),ae=J("drawer",u),[he,we]=ne(ae),se=c()(ae,`${ae}-pure`,`${ae}-${B}`,we,L);return he(f.createElement("div",{className:se,style:M},f.createElement(lt,Object.assign({prefixCls:ae},K))))};ve._InternalPanelDoNotUseOrYouWillBeFired=me;var ie=ve},85270:function(Se,H,l){var f=l(73203).default;Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var G=f(l(22313)),c=G.default;H.default=c},33527:function(Se,H,l){var f=l(73203).default;Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var G=f(l(10792)),c=G.default;H.default=c},22313:function(Se,H,l){var f=l(73203).default;Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var G=f(l(91412)),c=f(l(14339)),Y={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},G.default),timePickerLocale:Object.assign({},c.default)};H.default=Y},10792:function(Se,H,l){var f=l(73203).default;Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var G=f(l(71480)),c=f(l(47071));const I={lang:Object.assign({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},G.default),timePickerLocale:Object.assign({},c.default)};I.lang.ok="\u786E\u5B9A";var Y=I;H.default=Y},75183:function(Se,H,l){var f,G=l(73203).default;f={value:!0},H.Z=void 0;var c=G(l(51367)),I=G(l(85270)),Y=G(l(22313)),He=G(l(14339));const Q="${label} is not a valid ${type}";var h={locale:"en",Pagination:c.default,DatePicker:Y.default,TimePicker:He.default,Calendar:I.default,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:Q,method:Q,array:Q,object:Q,number:Q,date:Q,boolean:Q,integer:Q,float:Q,regexp:Q,email:Q,url:Q,hex:Q},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}};H.Z=h},81107:function(Se,H,l){var f,G=l(73203).default;f={value:!0},H.Z=void 0;var c=G(l(95160)),I=G(l(33527)),Y=G(l(10792)),He=G(l(47071));const Q="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}";var h={locale:"zh-cn",Pagination:c.default,DatePicker:Y.default,TimePicker:He.default,Calendar:I.default,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:Q,method:Q,array:Q,object:Q,number:Q,date:Q,boolean:Q,integer:Q,float:Q,regexp:Q,email:Q,url:Q,hex:Q},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}};H.Z=h},14339:function(Se,H){Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var f={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};H.default=f},47071:function(Se,H){Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var f={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]};H.default=f},51367:function(Se,H){Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var l={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};H.default=l},95160:function(Se,H){Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var l={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"};H.default=l},91412:function(Se,H){Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var l={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},f=l;H.default=f},71480:function(Se,H){Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var l={locale:"zh_CN",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA"},f=l;H.default=f},73203:function(Se){function H(l){return l&&l.__esModule?l:{default:l}}Se.exports=H,Se.exports.__esModule=!0,Se.exports.default=Se.exports},66274:function(Se,H,l){var f;l.d(H,{Z:function(){return Q}});var G=l(27378),c={942:(n,h,g)=>{g.d(h,{Z:()=>oe});var S=g(601),O=g.n(S),P=g(609),j=g.n(P),E=j()(O());E.push([n.id,`.node-right-icon-close {
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
`,""]),E.locals={};const oe=E},84:(n,h,g)=>{g.d(h,{Z:()=>oe});var S=g(601),O=g.n(S),P=g(609),j=g.n(P),E=j()(O());E.push([n.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]),E.locals={};const oe=E},91:(n,h,g)=>{g.d(h,{Z:()=>oe});var S=g(601),O=g.n(S),P=g(609),j=g.n(P),E=j()(O());E.push([n.id,`.frame {
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
`,""]),E.locals={};const oe=E},505:(n,h,g)=>{g.d(h,{Z:()=>oe});var S=g(601),O=g.n(S),P=g(609),j=g.n(P),E=j()(O());E.push([n.id,`.clear::after {
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
`,""]),E.locals={};const oe=E},675:(n,h,g)=>{g.d(h,{Z:()=>oe});var S=g(601),O=g.n(S),P=g(609),j=g.n(P),E=j()(O());E.push([n.id,`@keyframes ani-fade-in {
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
`,""]),E.locals={};const oe=E},609:n=>{n.exports=function(h){var g=[];return g.toString=function(){return this.map(function(S){var O="",P=typeof S[5]<"u";return S[4]&&(O+="@supports (".concat(S[4],") {")),S[2]&&(O+="@media ".concat(S[2]," {")),P&&(O+="@layer".concat(S[5].length>0?" ".concat(S[5]):""," {")),O+=h(S),P&&(O+="}"),S[2]&&(O+="}"),S[4]&&(O+="}"),O}).join("")},g.i=function(S,O,P,j,E){typeof S=="string"&&(S=[[null,S,void 0]]);var oe={};if(P)for(var re=0;re<this.length;re++){var pe=this[re][0];pe!=null&&(oe[pe]=!0)}for(var de=0;de<S.length;de++){var te=[].concat(S[de]);P&&oe[te[0]]||(typeof E<"u"&&(typeof te[5]>"u"||(te[1]="@layer".concat(te[5].length>0?" ".concat(te[5]):""," {").concat(te[1],"}")),te[5]=E),O&&(te[2]&&(te[1]="@media ".concat(te[2]," {").concat(te[1],"}")),te[2]=O),j&&(te[4]?(te[1]="@supports (".concat(te[4],") {").concat(te[1],"}"),te[4]=j):te[4]="".concat(j)),g.push(te))}},g}},601:n=>{n.exports=function(h){return h[1]}},837:(n,h,g)=>{var S=g(810),O=Symbol.for("react.element"),P=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,E=S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oe={key:!0,ref:!0,__self:!0,__source:!0};function re(pe,de,te){var ge,Ee={},Ie=null,Ke=null;te!==void 0&&(Ie=""+te),de.key!==void 0&&(Ie=""+de.key),de.ref!==void 0&&(Ke=de.ref);for(ge in de)j.call(de,ge)&&!oe.hasOwnProperty(ge)&&(Ee[ge]=de[ge]);if(pe&&pe.defaultProps)for(ge in de=pe.defaultProps,de)Ee[ge]===void 0&&(Ee[ge]=de[ge]);return{$$typeof:O,type:pe,key:Ie,ref:Ke,props:Ee,_owner:E.current}}h.Fragment=P,h.jsx=re,h.jsxs=re},322:(n,h,g)=>{n.exports=g(837)},62:n=>{var h=[];function g(P){for(var j=-1,E=0;E<h.length;E++)if(h[E].identifier===P){j=E;break}return j}function S(P,j){for(var E={},oe=[],re=0;re<P.length;re++){var pe=P[re],de=j.base?pe[0]+j.base:pe[0],te=E[de]||0,ge="".concat(de," ").concat(te);E[de]=te+1;var Ee=g(ge),Ie={css:pe[1],media:pe[2],sourceMap:pe[3],supports:pe[4],layer:pe[5]};if(Ee!==-1)h[Ee].references++,h[Ee].updater(Ie);else{var Ke=O(Ie,j);j.byIndex=re,h.splice(re,0,{identifier:ge,updater:Ke,references:1})}oe.push(ge)}return oe}function O(P,j){var E=j.domAPI(j);E.update(P);var oe=function(re){if(re){if(re.css===P.css&&re.media===P.media&&re.sourceMap===P.sourceMap&&re.supports===P.supports&&re.layer===P.layer)return;E.update(P=re)}else E.remove()};return oe}n.exports=function(P,j){j=j||{},P=P||[];var E=S(P,j);return function(oe){oe=oe||[];for(var re=0;re<E.length;re++){var pe=E[re],de=g(pe);h[de].references--}for(var te=S(oe,j),ge=0;ge<E.length;ge++){var Ee=E[ge],Ie=g(Ee);h[Ie].references===0&&(h[Ie].updater(),h.splice(Ie,1))}E=te}}},793:n=>{var h={};function g(O){if(typeof h[O]>"u"){var P=document.querySelector(O);if(window.HTMLIFrameElement&&P instanceof window.HTMLIFrameElement)try{P=P.contentDocument.head}catch{P=null}h[O]=P}return h[O]}function S(O,P){var j=g(O);if(!j)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");j.appendChild(P)}n.exports=S},173:n=>{function h(g){var S=document.createElement("style");return g.setAttributes(S,g.attributes),g.insert(S,g.options),S}n.exports=h},892:(n,h,g)=>{function S(O){var P=g.nc;P&&O.setAttribute("nonce",P)}n.exports=S},36:n=>{function h(O,P,j){var E="";j.supports&&(E+="@supports (".concat(j.supports,") {")),j.media&&(E+="@media ".concat(j.media," {"));var oe=typeof j.layer<"u";oe&&(E+="@layer".concat(j.layer.length>0?" ".concat(j.layer):""," {")),E+=j.css,oe&&(E+="}"),j.media&&(E+="}"),j.supports&&(E+="}");var re=j.sourceMap;re&&typeof btoa<"u"&&(E+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(re))))," */")),P.styleTagTransform(E,O,P.options)}function g(O){if(O.parentNode===null)return!1;O.parentNode.removeChild(O)}function S(O){if(typeof document>"u")return{update:function(){},remove:function(){}};var P=O.insertStyleElement(O);return{update:function(j){h(P,O,j)},remove:function(){g(P)}}}n.exports=S},464:n=>{function h(g,S){if(S.styleSheet)S.styleSheet.cssText=g;else{for(;S.firstChild;)S.removeChild(S.firstChild);S.appendChild(document.createTextNode(g))}}n.exports=h},810:n=>{var h=S=>{var O={};return Y.d(O,S),O},g=S=>()=>S;n.exports=f||(f=l.t(G,2))}},I={};function Y(n){var h=I[n];if(h!==void 0)return h.exports;var g=I[n]={id:n,exports:{}};return c[n](g,g.exports,Y),g.exports}Y.n=n=>{var h=n&&n.__esModule?()=>n.default:()=>n;return Y.d(h,{a:h}),h},Y.d=(n,h)=>{for(var g in h)Y.o(h,g)&&!Y.o(n,g)&&Object.defineProperty(n,g,{enumerable:!0,get:h[g]})},Y.o=(n,h)=>Object.prototype.hasOwnProperty.call(n,h),Y.nc=void 0;var He={};(()=>{Y.d(He,{Z:()=>Qe});var n=Y(322),h=Y(810);const g=()=>![typeof window,typeof document].includes("undefined"),S=a=>Object.prototype.toString.call(a).slice(8,-1).toLowerCase(),O=a=>S(a).indexOf("element")>-1,P=(a=null)=>g()?O(a)?{width:a.clientWidth,height:a.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},j=(a={})=>{const m=(0,h.useRef)(0),[e,t]=(0,h.useState)(a),r=(0,h.useCallback)(o=>{cancelAnimationFrame(m.current),m.current=requestAnimationFrame(()=>t(o))},[]);return(0,h.useEffect)(()=>()=>cancelAnimationFrame(m.current),[]),[e,r]},E=()=>{const[a,m]=j(P());return(0,h.useEffect)(()=>{const e=()=>m(P());return window.addEventListener("resize",e,!1),()=>window.removeEventListener("resize",e,!1)},[]),a},oe=a=>S(a)==="array",re=(a,m,e="id",t="children")=>{if(!oe(a))return null;const r=o=>{for(let i=0,b=o.length;i<b;i++){const x=o[i];if(x[e]===m)return[x];if(oe(x[t])){const p=r(x[t]);if(p)return[x].concat(p)}}};return r(a)},pe=a=>++a,de=()=>{const[,a]=(0,h.useState)(0);return(0,h.useCallback)(()=>a(pe),[])},te=a=>oe(a)&&!!a.length,ge=({to:a,preventDefault:m,stopPropagation:e,...t})=>m?(0,n.jsx)("span",{...t}):(0,n.jsx)("a",{href:a,...t}),Ee=({item:a,...m})=>(0,n.jsx)("ul",{...m}),Ie=(a,...m)=>{const e={};return Object.keys(a).filter(Boolean).map(t=>{e[t]=r=>a[t](r,...m)}),e},Ke=({data:a=[],events:m={},List:e=Ee,Link:t=ge,leftIcon:r,rightIcon:o,isHorizontal:i,isCollapsed:b,level:x=0,parentOpen:p=!0})=>{const k=b&&!x,v=!i&&!b&&!p;return a.map(y=>{const{name:R,path:$,icon:T,rightIcon:A,active:X,open:_,children:z,linkProps:U}=y,ee=te(z),V=y.id||$||R,fe=k?y.title??R:void 0,D=v?"hidden":"",Z=T??r,F=A??o,be=Z?(0,n.jsx)("div",{className:"node-left-icon",children:Z===!0?(0,n.jsx)("i",{className:"default-left-icon"}):Z}):null,Ce=R?(0,n.jsx)("div",{className:"node-text",children:(0,n.jsx)("span",{children:R})}):null;if(ee){const qe=Ie(m,y,x),ct=[D,_?"open":""].filter(Boolean).join(" ");return(0,n.jsxs)("li",{className:ct,"has-children":"true",...qe,children:[(0,n.jsxs)(t,{title:fe,className:`link${X?" active":""}`,to:$,preventDefault:!0,stopPropagation:!1,...U,children:[be,Ce,F?(0,n.jsx)("div",{className:"node-right-icon",children:F===!0?(0,n.jsx)("i",{className:"default-right-icon"}):F}):null]}),(0,n.jsx)(e,{item:y,children:Ke({data:z,events:m,List:e,Link:t,leftIcon:r,rightIcon:o,isHorizontal:i,isCollapsed:b,level:x+1,parentOpen:!!_})})]},V)}return(0,n.jsx)("li",{className:D,children:(0,n.jsxs)(t,{title:fe,className:`link${X?" active":""}`,to:$,...U,children:[be,Ce]})},V)})},dt=Ke,tt=a=>{const{children:m,open:e}=a;let t=0;if(e&&m?.length){t=m.length;let r=0;return m.map(o=>r+=tt(o)),t+r}return t},nt=({item:a,style:m,...e})=>(0,n.jsx)("ul",{style:{...m,"--count":tt(a)},...e});var at=Y(62),Xe=Y.n(at),et=Y(36),Ve=Y.n(et),ot=Y(793),Ge=Y.n(ot),it=Y(892),Je=Y.n(it),lt=Y(173),d=Y.n(lt),N=Y(464),q=Y.n(N),w=Y(942),C={};C.styleTagTransform=q(),C.setAttributes=Je(),C.insert=Ge().bind(null,"head"),C.domAPI=Ve(),C.insertStyleElement=d();var ne=Xe()(w.Z,C);const ue=w.Z&&w.Z.locals?w.Z.locals:void 0,Me=a=>(0,n.jsx)("ul",{...a}),Pe=(a,m)=>a?nt:({item:e,...t})=>(0,n.jsx)(Me,{className:m==="right"?"left":"",...t}),ve=a=>{const{data:m=[],collapsed:e=!1,type:t="vertical",Link:r,width:o,bgColor:i,itemHeight:b,collapsedWidth:x,itemPadding:p,style:k,className:v,...y}=a,R=(0,h.useRef)(),$=(0,h.useRef)();(0,h.useEffect)(()=>()=>clearTimeout(R.current),[]);const T=de(),A=t==="horizontal",X=!A&&e,_={onClick:(D,Z)=>{if(D.stopPropagation(),!A&&!X){const F=re(m,Z.path,"path"),be=F[F.length-1];be.open=!be.open,T()}},onMouseEnter:(D,Z,F)=>{X&&!F&&(clearTimeout(R.current),$.current.style.width="var(--maxWidth)")},onMouseLeave:(D,Z,F)=>{X&&!F&&(R.current=setTimeout(()=>$.current.style.width="",200))}},z=(A?["huxy-horizontal-tree",v]:["huxy-tree",v,X?"collapsed":""]).filter(Boolean).join(" "),{float:U,...ee}=y?.style??{},V={"--bgColor":i,"--itemHeight":b,"--nodeListWidth":o,...ee};A?(V["--itemPadding"]=p,V["--nodeFloat"]=U):(V["--width"]=o,V["--collapsedWidth"]=x);const fe=Pe(!A&&!X,U);return(0,n.jsx)("div",{ref:$,className:z,style:V,...y,children:(0,n.jsx)("div",{className:"huxy-tree-track",children:(0,n.jsx)("ul",{className:"huxy-tree-root",children:dt({data:m,events:_,List:fe,Link:r,leftIcon:!0,rightIcon:!0,isHorizontal:A,isCollapsed:X})})})})},me=(a,m)=>Object.prototype.hasOwnProperty.call(a??{},m),ie=a=>me(a,"current"),s=(a,m,e="click")=>{(0,h.useEffect)(()=>{const t=o=>{const i=ie(a)?a.current:a;i?.contains&&!i.contains(o.target)&&m(o)},r=typeof e=="string"?[e]:e;return r.map(o=>{document.addEventListener(o,t,!1)}),()=>{r.map(o=>{document.removeEventListener(o,t,!1)})}},[a,m,e])},u=a=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(a),M=a=>new Promise((m,e)=>{const t=new FileReader;t.readAsDataURL(a),t.addEventListener("load",()=>m(t.result)),t.addEventListener("error",r=>e(r))}),L=async a=>{if(!u(a))return a;const m=await(await fetch(decodeURIComponent(a))).blob();return await M(m)},B=a=>{const[m,e]=(0,h.useState)(a);return(0,h.useEffect)(()=>{(async t=>{const r=await L(t);e(r)})(a)},[a]),m},K=({src:a,...m})=>{const e=B(a);return(0,n.jsx)("img",{...m,src:e})},J=({Ricon:a,open:m})=>a===!0?(0,n.jsx)("i",{className:`huxy-header-angle-${m?"top":"bt"}`}):(0,n.jsx)(a,{status:m}),ae=({img:a,name:m,icon:e,Ricon:t,open:r})=>a?(0,n.jsxs)("div",{className:"avatar",children:[(0,n.jsx)("div",{className:"img",children:(0,n.jsx)(K,{src:a,width:"1",height:"1",crossOrigin:"anonymous",alt:"avatar"})}),m?(0,n.jsx)("span",{className:"txt",children:m}):null,t?(0,n.jsx)("span",{className:"node-icon",children:(0,n.jsx)(J,{Ricon:t,open:r})}):null]}):(0,n.jsxs)(n.Fragment,{children:[e?(0,n.jsx)("span",{className:"node-icon",children:e}):null,m?(0,n.jsx)("span",{className:"txt",children:m}):null,t?(0,n.jsx)("span",{className:"node-icon",children:(0,n.jsx)(J,{Ricon:t,open:r})}):null]}),he=({item:a,open:m})=>{const{Custom:e,img:t,name:r,icon:o,Ricon:i,active:b}=a;return typeof e=="function"?(0,n.jsx)(e,{item:a,className:"link"}):(0,n.jsx)("span",{className:`link${b?" active":""}`,title:a.title||r,children:(0,n.jsx)(ae,{img:t,name:r,icon:o,Ricon:i,open:m})})},we=({item:a,click:m})=>{const e=(0,h.useRef)(),[t,r]=(0,h.useState)(!1);s(e,y=>t&&r(!1));const{arrowDir:o,ChildRender:i,children:b,smShow:x}=a,p=b?.length,k=(y,R,$=null)=>{$===!1&&r(T=>!T),$&&(y.stopPropagation(),r(!1)),m(R,$)},v=x?"sm-show":"";return p||i?(0,n.jsxs)("li",{ref:e,className:`${v} ${t?"open":""}`,onClick:y=>k(y,a,!1),children:[(0,n.jsx)(he,{item:a,open:t}),(0,n.jsx)("ul",{className:`huxy-header-arrow-${o||"rt"}`,children:p?b.map((y,R)=>(0,n.jsx)("li",{className:y.divider?"divider":"",children:(0,n.jsxs)("span",{onClick:$=>k($,y,!0),className:`link${y.active?" active":""}`,children:[y.icon?(0,n.jsx)("span",{className:"node-icon",children:y.icon}):null,(0,n.jsx)("span",{className:"drop-label",children:y.name})]})},`subItem-${R}-${y.key||y.name}`)):(0,n.jsx)("li",{children:(0,n.jsx)(i,{item:a,close:()=>r(!1)})})})]}):(0,n.jsx)("li",{onClick:y=>k(y,a),className:v,children:(0,n.jsx)(he,{item:a,open:t})})},se=({list:a,click:m})=>(0,n.jsx)("ul",{children:a.map((e,t)=>(0,n.jsx)(we,{click:m,item:e},`navItem-${t}-${e.key||e.name}`))}),ce=a=>{const{leftList:m,rightList:e,handleNavClick:t,logo:r,title:o,Link:i}=a;return(0,n.jsxs)("div",{className:"header",children:[(0,n.jsxs)(i,{className:"banner",to:"/",children:[r?(0,n.jsx)("div",{className:"logo",children:(0,n.jsx)("img",{width:"1",height:"1",src:r,alt:"logo"})}):null,(0,n.jsx)("div",{className:"title",children:o??"Dashboard"})]}),(0,n.jsx)("div",{className:"nav",children:(0,n.jsxs)("div",{className:"nav-wrap",children:[(0,n.jsx)("div",{className:"nav-left",children:(0,n.jsx)(se,{list:m,click:t})}),(0,n.jsx)("div",{className:"nav-right",children:(0,n.jsx)(se,{list:e,click:t})})]})})]})};var xe=Y(505),ye={};ye.styleTagTransform=q(),ye.setAttributes=Je(),ye.insert=Ge().bind(null,"head"),ye.domAPI=Ve(),ye.insertStyleElement=d();var Oe=Xe()(xe.Z,ye);const je=xe.Z&&xe.Z.locals?xe.Z.locals:void 0,W=({language:a,...m})=>(0,h.useMemo)(()=>(0,n.jsx)(ce,{...m}),[a]),le=a=>{const{navMenu:m,headerStyle:e,navMenuStyle:t,Link:r,leftList:o,rightList:i,handleNavClick:b,logo:x,title:p,language:k}=a;return(0,n.jsxs)("header",{className:"frame-header",style:e,children:[o?.length||i?.length?(0,n.jsx)(W,{Link:r,leftList:o,rightList:i,handleNavClick:(v,y)=>b(a,v,y),logo:x,title:p,language:k}):null,m?.length?(0,n.jsx)(ve,{data:m,type:"horizontal",Link:r,style:t}):null]})};var $e=Y(84),ze={};ze.styleTagTransform=q(),ze.setAttributes=Je(),ze.insert=Ge().bind(null,"head"),ze.domAPI=Ve(),ze.insertStyleElement=d();var Re=Xe()($e.Z,ze);const ke=$e.Z&&$e.Z.locals?$e.Z.locals:void 0,De=({Footer:a})=>(0,n.jsx)("div",{className:"footer",children:a?(0,n.jsx)(a,{}):"copyright \xA9 2020-2022"}),Ye=a=>{const{useStore:m,menu:e,MenuTop:t,MenuBottom:r,Link:o,inputPath:i,asideStyle:b}=a,[x,p]=m("huxy-collapse"),{width:k}=E(),v=(0,h.useRef)();return s(v,y=>{k<=1024&&x&&p(!1)}),(0,h.useEffect)(()=>{k<=1024&&x&&p(!1)},[i]),(0,n.jsx)("aside",{className:"frame-aside",style:b,children:(0,n.jsxs)("div",{ref:v,style:{height:"100%"},children:[t&&(0,n.jsx)(t,{...a}),(0,n.jsx)(ve,{data:e,collapsed:x&&k>1024,Link:o}),r&&(0,n.jsx)(r,{collapsed:x,isSmall:k<=1024,setCollapsed:p})]})})},Be=380,Le=({inputPath:a,menuAnimate:m="ani-in"})=>{const e=(0,h.useRef)(a.split("?")[0]),t=(0,h.useRef)(),[r,o]=(0,h.useState)("");return(0,h.useEffect)(()=>{const i=a.split("?")[0];return i!==e.current&&(e.current=i,o(` ${m}`),t.current=setTimeout(()=>{o("")},Be)),()=>{clearTimeout(t.current),o("")}},[a]),r},Ze=a=>{const{inputPath:m,contentStyle:e,menuAnimate:t,children:r}=a,o=Le({inputPath:m,menuAnimate:t});return(0,n.jsx)("div",{className:`page-content${o}`,style:e,children:r})};var We=Y(675),Ne={};Ne.styleTagTransform=q(),Ne.setAttributes=Je(),Ne.insert=Ge().bind(null,"head"),Ne.domAPI=Ve(),Ne.insertStyleElement=d();var _e=Xe()(We.Z,Ne);const Fe=We.Z&&We.Z.locals?We.Z.locals:void 0,Te=a=>{const{menu:m,current:e,MainTop:t,children:r,inputPath:o,contentStyle:i,menuAnimate:b}=a,x=m?.length,p=b?b===!0?"ani-in":b:"";return(0,n.jsxs)("div",{className:`frame-container${x?"":" no-sidebar"}`,children:[x?(0,n.jsx)(Ye,{...a}):null,(0,n.jsx)("div",{className:"frame-view",children:(0,n.jsxs)("div",{className:"page-container",children:[t&&(0,n.jsx)(t,{current:e}),p?(0,n.jsx)(Ze,{inputPath:o,contentStyle:i,menuAnimate:p,children:r}):(0,n.jsx)("div",{className:"page-content",style:i,children:r})]})}),(0,n.jsx)("footer",{className:"frame-footer",children:(0,n.jsx)(De,{...a})})]})};var Ae=Y(91),Ue={};Ue.styleTagTransform=q(),Ue.setAttributes=Je(),Ue.insert=Ge().bind(null,"head"),Ue.domAPI=Ve(),Ue.insertStyleElement=d();var rt=Xe()(Ae.Z,Ue);const st=Ae.Z&&Ae.Z.locals?Ae.Z.locals:void 0,Qe=a=>{const{useStore:m,vertical:e,horizontal:t,menu:r,leftList:o,rightList:i}=a,{width:b}=E(),[x]=m("huxy-collapse"),p=b<=1024,k=p?r:e,v=p?[]:t,y=k?.length,R=v?.length,$=R&&y,T=$?"compose":R?"horizontal":x?"collapsed":"",A=$&&x?"composeCollapsed":"",X=o?.length||i?.length?"":"no-header",_=["frame",T,A,X].filter(Boolean).join(" ");return(0,n.jsxs)("div",{className:_,children:[(0,n.jsx)(le,{...a,navMenu:v}),(0,n.jsx)("main",{className:"frame-main",children:(0,n.jsx)(Te,{...a,menu:k})})]})}})();var Q=He.Z}}]);
