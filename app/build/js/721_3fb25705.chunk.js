(self.webpackChunk=self.webpackChunk||[]).push([[721],{7309:function(Ne,j,l){l.d(j,{Z:function(){return Ke}});var se=l(60042),L=l.n(se),f=l(27378),A=l(26775),h=l(649),Me=l(11026),q=l(18808),r=l(25773),m=l(50189),y=l(31542),w=l(83395),I=l(64649),P=l(78730),O=f.forwardRef(function(e,o){var i=e.prefixCls,a=e.style,v=e.className,B=e.duration,W=B===void 0?4.5:B,D=e.eventKey,N=e.content,Z=e.closable,J=e.closeIcon,t=J===void 0?"x":J,n=e.props,u=e.onClick,d=e.onNoticeClose,g=e.times,x=f.useState(!1),C=(0,Me.Z)(x,2),z=C[0],T=C[1],Y=function(){d(D)},Q=function(V){(V.key==="Enter"||V.code==="Enter"||V.keyCode===P.Z.ENTER)&&Y()};f.useEffect(function(){if(!z&&W>0){var k=setTimeout(function(){Y()},W*1e3);return function(){clearTimeout(k)}}},[W,z,g]);var b="".concat(i,"-notice");return f.createElement("div",(0,r.Z)({},n,{ref:o,className:L()(b,v,(0,I.Z)({},"".concat(b,"-closable"),Z)),style:a,onMouseEnter:function(){T(!0)},onMouseLeave:function(){T(!1)},onClick:u}),f.createElement("div",{className:"".concat(b,"-content")},N),Z&&f.createElement("a",{tabIndex:0,className:"".concat(b,"-close"),onKeyDown:Q,onClick:function(V){V.preventDefault(),V.stopPropagation(),Y()}},t))}),$=O,ee=f.forwardRef(function(e,o){var i=e.prefixCls,a=i===void 0?"rc-notification":i,v=e.container,B=e.motion,W=e.maxCount,D=e.className,N=e.style,Z=e.onAllRemoved,J=f.useState([]),t=(0,Me.Z)(J,2),n=t[0],u=t[1],d=function(k){var V,K=n.find(function(U){return U.key===k});K==null||(V=K.onClose)===null||V===void 0||V.call(K),u(function(U){return U.filter(function(ae){return ae.key!==k})})};f.useImperativeHandle(o,function(){return{open:function(k){u(function(V){var K=(0,h.Z)(V),U=K.findIndex(function(He){return He.key===k.key}),ae=(0,m.Z)({},k);if(U>=0){var pe;ae.times=(((pe=V[U])===null||pe===void 0?void 0:pe.times)||0)+1,K[U]=ae}else ae.times=0,K.push(ae);return W>0&&K.length>W&&(K=K.slice(-W)),K})},close:function(k){d(k)},destroy:function(){u([])}}});var g=f.useState({}),x=(0,Me.Z)(g,2),C=x[0],z=x[1];f.useEffect(function(){var b={};n.forEach(function(k){var V=k.placement,K=V===void 0?"topRight":V;K&&(b[K]=b[K]||[],b[K].push(k))}),Object.keys(C).forEach(function(k){b[k]=b[k]||[]}),z(b)},[n]);var T=function(k){z(function(V){var K=(0,m.Z)({},V),U=K[k]||[];return U.length||delete K[k],K})},Y=f.useRef(!1);if(f.useEffect(function(){Object.keys(C).length>0?Y.current=!0:Y.current&&(Z?.(),Y.current=!1)},[C]),!v)return null;var Q=Object.keys(C);return(0,y.createPortal)(f.createElement(f.Fragment,null,Q.map(function(b){var k=C[b],V=k.map(function(U){return{config:U,key:U.key}}),K=typeof B=="function"?B(b):B;return f.createElement(w.V4,(0,r.Z)({key:b,className:L()(a,"".concat(a,"-").concat(b),D?.(b)),style:N?.(b),keys:V,motionAppear:!0},K,{onAllRemoved:function(){T(b)}}),function(U,ae){var pe=U.config,He=U.className,Ve=U.style,We=pe.key,it=pe.times,Qe=pe.className,nt=pe.style;return f.createElement($,(0,r.Z)({},pe,{ref:ae,prefixCls:a,className:L()(He,Qe),style:(0,m.Z)((0,m.Z)({},Ve),nt),times:it,key:We,eventKey:We,onNoticeClose:d}))})})),v)}),te=ee,xe=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],me=function(){return document.body},_=0;function ye(){for(var e={},o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return i.forEach(function(v){v&&Object.keys(v).forEach(function(B){var W=v[B];W!==void 0&&(e[B]=W)})}),e}function Oe(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=e.getContainer,i=o===void 0?me:o,a=e.motion,v=e.prefixCls,B=e.maxCount,W=e.className,D=e.style,N=e.onAllRemoved,Z=(0,q.Z)(e,xe),J=f.useState(),t=(0,Me.Z)(J,2),n=t[0],u=t[1],d=f.useRef(),g=f.createElement(te,{container:n,ref:d,prefixCls:v,motion:a,maxCount:B,className:W,style:D,onAllRemoved:N}),x=f.useState([]),C=(0,Me.Z)(x,2),z=C[0],T=C[1],Y=f.useMemo(function(){return{open:function(b){var k=ye(Z,b);(k.key===null||k.key===void 0)&&(k.key="rc-notification-".concat(_),_+=1),T(function(V){return[].concat((0,h.Z)(V),[{type:"open",config:k}])})},close:function(b){T(function(k){return[].concat((0,h.Z)(k),[{type:"close",key:b}])})},destroy:function(){T(function(b){return[].concat((0,h.Z)(b),[{type:"destroy"}])})}}},[]);return f.useEffect(function(){u(i())}),f.useEffect(function(){d.current&&z.length&&(z.forEach(function(Q){switch(Q.type){case"open":d.current.open(Q.config);break;case"close":d.current.close(Q.key);break;case"destroy":d.current.destroy();break}}),T([]))},[z]),[Y,g]}var Pe=l(92746),ze=l(32299),qe=l(72457),Ge=l(6117),et=l(5515);const tt=e=>{const{componentCls:o,iconCls:i,boxShadow:a,colorText:v,colorSuccess:B,colorError:W,colorWarning:D,colorInfo:N,fontSizeLG:Z,motionEaseInOutCirc:J,motionDurationSlow:t,marginXS:n,paddingXS:u,borderRadiusLG:d,zIndexPopup:g,contentPadding:x,contentBg:C}=e,z=`${o}-notice`,T=new ze.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:u,transform:"translateY(0)",opacity:1}}),Y=new ze.E4("MessageMoveOut",{"0%":{maxHeight:e.height,padding:u,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),Q={padding:u,textAlign:"center",[`${o}-custom-content > ${i}`]:{verticalAlign:"text-bottom",marginInlineEnd:n,fontSize:Z},[`${z}-content`]:{display:"inline-block",padding:x,background:C,borderRadius:d,boxShadow:a,pointerEvents:"all"},[`${o}-success > ${i}`]:{color:B},[`${o}-error > ${i}`]:{color:W},[`${o}-warning > ${i}`]:{color:D},[`${o}-info > ${i},
      ${o}-loading > ${i}`]:{color:N}};return[{[o]:Object.assign(Object.assign({},(0,qe.Wf)(e)),{color:v,position:"fixed",top:n,width:"100%",pointerEvents:"none",zIndex:g,[`${o}-move-up`]:{animationFillMode:"forwards"},[`
        ${o}-move-up-appear,
        ${o}-move-up-enter
      `]:{animationName:T,animationDuration:t,animationPlayState:"paused",animationTimingFunction:J},[`
        ${o}-move-up-appear${o}-move-up-appear-active,
        ${o}-move-up-enter${o}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${o}-move-up-leave`]:{animationName:Y,animationDuration:t,animationPlayState:"paused",animationTimingFunction:J},[`${o}-move-up-leave${o}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[o]:{[z]:Object.assign({},Q)}},{[`${o}-notice-pure-panel`]:Object.assign(Object.assign({},Q),{padding:0,textAlign:"start"})}]};var Be=(0,Ge.Z)("Message",e=>{const o=(0,et.TS)(e,{height:150});return[tt(o)]},e=>({zIndexPopup:e.zIndexPopupBase+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}));function rt(e,o){return{motionName:o??`${e}-move-up`}}function Fe(e){let o;const i=new Promise(v=>{o=e(()=>{v(!0)})}),a=()=>{o?.()};return a.then=(v,B)=>i.then(v,B),a.promise=i,a}var _e=l(93326),s=l(53058),E=l(55222),re=l(14770),M=l(77597),R=function(e,o){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,a=Object.getOwnPropertySymbols(e);v<a.length;v++)o.indexOf(a[v])<0&&Object.prototype.propertyIsEnumerable.call(e,a[v])&&(i[a[v]]=e[a[v]]);return i};const le={info:f.createElement(M.Z,null),success:f.createElement(re.Z,null),error:f.createElement(E.Z,null),warning:f.createElement(s.Z,null),loading:f.createElement(_e.Z,null)};function oe(e){let{prefixCls:o,type:i,icon:a,children:v}=e;return f.createElement("div",{className:L()(`${o}-custom-content`,`${o}-${i}`)},a||le[i],f.createElement("span",null,v))}function ce(e){const{prefixCls:o,className:i,type:a,icon:v,content:B}=e,W=R(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:D}=React.useContext(ConfigContext),N=o||D("message"),[,Z]=useStyle(N);return React.createElement(Notice,Object.assign({},W,{prefixCls:N,className:classNames(i,Z,`${N}-notice-pure-panel`),eventKey:"pure",duration:null,content:React.createElement(oe,{prefixCls:N,type:a,icon:v},B)}))}var ge=function(e,o){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,a=Object.getOwnPropertySymbols(e);v<a.length;v++)o.indexOf(a[v])<0&&Object.prototype.propertyIsEnumerable.call(e,a[v])&&(i[a[v]]=e[a[v]]);return i};const je=8,de=3,ue=f.forwardRef((e,o)=>{const{top:i,prefixCls:a,getContainer:v,maxCount:B,duration:W=de,rtl:D,transitionName:N,onAllRemoved:Z}=e,{getPrefixCls:J,getPopupContainer:t}=f.useContext(A.E_),n=a||J("message"),[,u]=Be(n),d=()=>({left:"50%",transform:"translateX(-50%)",top:i??je}),g=()=>L()(u,D?`${n}-rtl`:""),x=()=>rt(n,N),C=f.createElement("span",{className:`${n}-close-x`},f.createElement(Pe.Z,{className:`${n}-close-icon`})),[z,T]=Oe({prefixCls:n,style:d,className:g,motion:x,closable:!1,closeIcon:C,duration:W,getContainer:()=>v?.()||t?.()||document.body,maxCount:B,onAllRemoved:Z});return f.useImperativeHandle(o,()=>Object.assign(Object.assign({},z),{prefixCls:n,hashId:u})),T});let he=0;function c(e){const o=f.useRef(null);return[f.useMemo(()=>{const a=N=>{var Z;(Z=o.current)===null||Z===void 0||Z.close(N)},v=N=>{if(!o.current){const Q=()=>{};return Q.then=()=>{},Q}const{open:Z,prefixCls:J,hashId:t}=o.current,n=`${J}-notice`,{content:u,icon:d,type:g,key:x,className:C,onClose:z}=N,T=ge(N,["content","icon","type","key","className","onClose"]);let Y=x;return Y==null&&(he+=1,Y=`antd-message-${he}`),Fe(Q=>(Z(Object.assign(Object.assign({},T),{key:Y,content:f.createElement(oe,{prefixCls:J,type:g,icon:d},u),placement:"top",className:L()(g&&`${n}-${g}`,t,C),onClose:()=>{z?.(),Q()}})),()=>{a(Y)}))},W={open:v,destroy:N=>{var Z;N!==void 0?a(N):(Z=o.current)===null||Z===void 0||Z.destroy()}};return["info","success","warning","error","loading"].forEach(N=>{const Z=(J,t,n)=>{let u;J&&typeof J=="object"&&"content"in J?u=J:u={content:J};let d,g;typeof t=="function"?g=t:(d=t,g=n);const x=Object.assign(Object.assign({onClose:g,duration:d},u),{type:N});return v(x)};W[N]=Z}),W},[]),f.createElement(ue,Object.assign({key:"message-holder"},e,{ref:o}))]}function p(e){return c(e)}var F=l(77719),S=function(e,o){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,a=Object.getOwnPropertySymbols(e);v<a.length;v++)o.indexOf(a[v])<0&&Object.prototype.propertyIsEnumerable.call(e,a[v])&&(i[a[v]]=e[a[v]]);return i};const H={info:f.createElement(M.Z,null),success:f.createElement(re.Z,null),error:f.createElement(E.Z,null),warning:f.createElement(s.Z,null),loading:f.createElement(_e.Z,null)};function G(e,o){return o||f.createElement("span",{className:`${e}-close-x`},f.createElement(Pe.Z,{className:`${e}-close-icon`}))}const ie={success:re.Z,info:M.Z,error:E.Z,warning:s.Z};function ne(e){let{prefixCls:o,icon:i,type:a,message:v,description:B,btn:W,role:D="alert"}=e,N=null;return i?N=f.createElement("span",{className:`${o}-icon`},i):a&&(N=f.createElement(ie[a]||null,{className:L()(`${o}-icon`,`${o}-icon-${a}`)})),f.createElement("div",{className:L()({[`${o}-with-icon`]:N}),role:D},N,f.createElement("div",{className:`${o}-message`},v),f.createElement("div",{className:`${o}-description`},B),W&&f.createElement("div",{className:`${o}-btn`},W))}function X(e){const{prefixCls:o,className:i,icon:a,type:v,message:B,description:W,btn:D,closable:N=!0,closeIcon:Z}=e,J=S(e,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon"]),{getPrefixCls:t}=React.useContext(ConfigContext),n=o||t("notification"),u=`${n}-notice`,[,d]=useStyle(n);return React.createElement(Notice,Object.assign({},J,{prefixCls:n,className:classNames(i,d,`${u}-pure-panel`),eventKey:"pure",duration:null,closable:N,closeIcon:G(n,Z),content:React.createElement(ne,{prefixCls:u,icon:a,type:v,message:B,description:W,btn:D})}))}var $e=e=>{const{componentCls:o,width:i,notificationMarginEdge:a}=e,v=new ze.E4("antNotificationTopFadeIn",{"0%":{marginTop:"-100%",opacity:0},"100%":{marginTop:0,opacity:1}}),B=new ze.E4("antNotificationBottomFadeIn",{"0%":{marginBottom:"-100%",opacity:0},"100%":{marginBottom:0,opacity:1}}),W=new ze.E4("antNotificationLeftFadeIn",{"0%":{right:{_skip_check_:!0,value:i},opacity:0},"100%":{right:{_skip_check_:!0,value:0},opacity:1}});return{[`&${o}-top, &${o}-bottom`]:{marginInline:0},[`&${o}-top`]:{[`${o}-fade-enter${o}-fade-enter-active, ${o}-fade-appear${o}-fade-appear-active`]:{animationName:v}},[`&${o}-bottom`]:{[`${o}-fade-enter${o}-fade-enter-active, ${o}-fade-appear${o}-fade-appear-active`]:{animationName:B}},[`&${o}-topLeft, &${o}-bottomLeft`]:{marginInlineEnd:0,marginInlineStart:a,[`${o}-fade-enter${o}-fade-enter-active, ${o}-fade-appear${o}-fade-appear-active`]:{animationName:W}}}};const Se=e=>{const{iconCls:o,componentCls:i,boxShadow:a,fontSizeLG:v,notificationMarginBottom:B,borderRadiusLG:W,colorSuccess:D,colorInfo:N,colorWarning:Z,colorError:J,colorTextHeading:t,notificationBg:n,notificationPadding:u,notificationMarginEdge:d,motionDurationMid:g,motionEaseInOut:x,fontSize:C,lineHeight:z,width:T,notificationIconSize:Y,colorText:Q}=e,b=`${i}-notice`,k=new ze.E4("antNotificationFadeIn",{"0%":{left:{_skip_check_:!0,value:T},opacity:0},"100%":{left:{_skip_check_:!0,value:0},opacity:1}}),V=new ze.E4("antNotificationFadeOut",{"0%":{maxHeight:e.animationMaxHeight,marginBottom:B,opacity:1},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}}),K={position:"relative",width:T,maxWidth:`calc(100vw - ${d*2}px)`,marginBottom:B,marginInlineStart:"auto",padding:u,overflow:"hidden",lineHeight:z,wordWrap:"break-word",background:n,borderRadius:W,boxShadow:a,[`${i}-close-icon`]:{fontSize:C,cursor:"pointer"},[`${b}-message`]:{marginBottom:e.marginXS,color:t,fontSize:v,lineHeight:e.lineHeightLG},[`${b}-description`]:{fontSize:C,color:Q},[`&${b}-closable ${b}-message`]:{paddingInlineEnd:e.paddingLG},[`${b}-with-icon ${b}-message`]:{marginBottom:e.marginXS,marginInlineStart:e.marginSM+Y,fontSize:v},[`${b}-with-icon ${b}-description`]:{marginInlineStart:e.marginSM+Y,fontSize:C},[`${b}-icon`]:{position:"absolute",fontSize:Y,lineHeight:0,[`&-success${o}`]:{color:D},[`&-info${o}`]:{color:N},[`&-warning${o}`]:{color:Z},[`&-error${o}`]:{color:J}},[`${b}-close`]:{position:"absolute",top:e.notificationPaddingVertical,insetInlineEnd:e.notificationPaddingHorizontal,color:e.colorIcon,outline:"none",width:e.notificationCloseButtonSize,height:e.notificationCloseButtonSize,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.wireframe?"transparent":e.colorFillContent}},[`${b}-btn`]:{float:"right",marginTop:e.marginSM}};return[{[i]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,qe.Wf)(e)),{position:"fixed",zIndex:e.zIndexPopup,marginInlineEnd:d,[`${i}-hook-holder`]:{position:"relative"},[`&${i}-top, &${i}-bottom`]:{[b]:{marginInline:"auto auto"}},[`&${i}-topLeft, &${i}-bottomLeft`]:{[b]:{marginInlineEnd:"auto",marginInlineStart:0}},[`${i}-fade-enter, ${i}-fade-appear`]:{animationDuration:e.motionDurationMid,animationTimingFunction:x,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${i}-fade-leave`]:{animationTimingFunction:x,animationFillMode:"both",animationDuration:g,animationPlayState:"paused"},[`${i}-fade-enter${i}-fade-enter-active, ${i}-fade-appear${i}-fade-appear-active`]:{animationName:k,animationPlayState:"running"},[`${i}-fade-leave${i}-fade-leave-active`]:{animationName:V,animationPlayState:"running"}}),$e(e)),{"&-rtl":{direction:"rtl",[`${b}-btn`]:{float:"left"}}})},{[i]:{[b]:Object.assign({},K)}},{[`${b}-pure-panel`]:Object.assign(Object.assign({},K),{margin:0})}]};var Ce=(0,Ge.Z)("Notification",e=>{const o=e.paddingMD,i=e.paddingLG,a=(0,et.TS)(e,{notificationBg:e.colorBgElevated,notificationPaddingVertical:o,notificationPaddingHorizontal:i,notificationIconSize:e.fontSizeLG*e.lineHeightLG,notificationCloseButtonSize:e.controlHeightLG*.55,notificationMarginBottom:e.margin,notificationPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,notificationMarginEdge:e.marginLG,animationMaxHeight:150});return[Se(a)]},e=>({zIndexPopup:e.zIndexPopupBase+50,width:384}));function Ee(e,o,i){let a;switch(e){case"top":a={left:"50%",transform:"translateX(-50%)",right:"auto",top:o,bottom:"auto"};break;case"topLeft":a={left:0,top:o,bottom:"auto"};break;case"topRight":a={right:0,top:o,bottom:"auto"};break;case"bottom":a={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:i};break;case"bottomLeft":a={left:0,top:"auto",bottom:i};break;default:a={right:0,top:"auto",bottom:i};break}return a}function Ie(e){return{motionName:`${e}-fade`}}var ke=function(e,o){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&o.indexOf(a)<0&&(i[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,a=Object.getOwnPropertySymbols(e);v<a.length;v++)o.indexOf(a[v])<0&&Object.prototype.propertyIsEnumerable.call(e,a[v])&&(i[a[v]]=e[a[v]]);return i};const fe=24,Re=4.5,Le=f.forwardRef((e,o)=>{const{top:i,bottom:a,prefixCls:v,getContainer:B,maxCount:W,rtl:D,onAllRemoved:N}=e,{getPrefixCls:Z,getPopupContainer:J}=f.useContext(A.E_),t=v||Z("notification"),n=z=>Ee(z,i??fe,a??fe),[,u]=Ce(t),d=()=>L()(u,{[`${t}-rtl`]:D}),g=()=>Ie(t),[x,C]=Oe({prefixCls:t,style:n,className:d,motion:g,closable:!0,closeIcon:G(t),duration:Re,getContainer:()=>B?.()||J?.()||document.body,maxCount:W,onAllRemoved:N});return f.useImperativeHandle(o,()=>Object.assign(Object.assign({},x),{prefixCls:t,hashId:u})),C});function ve(e){const o=f.useRef(null);return[f.useMemo(()=>{const a=D=>{if(!o.current)return;const{open:N,prefixCls:Z,hashId:J}=o.current,t=`${Z}-notice`,{message:n,description:u,icon:d,type:g,btn:x,className:C,role:z="alert"}=D,T=ke(D,["message","description","icon","type","btn","className","role"]);return N(Object.assign(Object.assign({placement:"topRight"},T),{content:f.createElement(ne,{prefixCls:t,icon:d,type:g,message:n,description:u,btn:x,role:z}),className:L()(g&&`${t}-${g}`,J,C)}))},B={open:a,destroy:D=>{var N,Z;D!==void 0?(N=o.current)===null||N===void 0||N.close(D):(Z=o.current)===null||Z===void 0||Z.destroy()}};return["success","info","warning","error"].forEach(D=>{B[D]=N=>a(Object.assign(Object.assign({},N),{type:D}))}),B},[]),f.createElement(Le,Object.assign({key:"notification-holder"},e,{ref:o}))]}function Te(e){return ve(e)}const we=f.createContext({});var Ae=f.createContext({message:{},notification:{},modal:{}});const Xe=e=>{const{componentCls:o,colorText:i,fontSize:a,lineHeight:v,fontFamily:B}=e;return{[o]:{color:i,fontSize:a,lineHeight:v,fontFamily:B}}};var Ye=(0,Ge.Z)("App",e=>[Xe(e)]);const Ue=()=>f.useContext(Ae),Ze=e=>{const{prefixCls:o,children:i,className:a,rootClassName:v,message:B,notification:W,style:D}=e,{getPrefixCls:N}=(0,f.useContext)(A.E_),Z=N("app",o),[J,t]=Ye(Z),n=L()(t,Z,a,v),u=(0,f.useContext)(we),d=f.useMemo(()=>({message:Object.assign(Object.assign({},u.message),B),notification:Object.assign(Object.assign({},u.notification),W)}),[B,W,u.message,u.notification]),[g,x]=p(d.message),[C,z]=Te(d.notification),[T,Y]=(0,F.Z)(),Q=f.useMemo(()=>({message:g,notification:C,modal:T}),[g,C,T]);return J(f.createElement(Ae.Provider,{value:Q},f.createElement(we.Provider,{value:d},f.createElement("div",{className:n,style:D},Y,x,z,i))))};Ze.useApp=Ue;var Ke=Ze},93602:function(Ne,j,l){l.d(j,{Z:function(){return _e}});var se=l(60042),L=l.n(se),f=l(83395),A=l(27378),h=l(26775),Me=l(97933),q=l(93795),r=l(32299),m=l(72457),y=l(9540),w=l(6117),I=l(5515);const P=new r.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),O=new r.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),$=new r.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),ee=new r.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),te=new r.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),xe=new r.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),me=s=>{const{componentCls:E,iconCls:re,antCls:M,badgeFontHeight:R,badgeShadowSize:le,badgeHeightSm:oe,motionDurationSlow:ce,badgeStatusSize:ge,marginXS:je,badgeRibbonOffset:de}=s,ue=`${M}-scroll-number`,he=`${M}-ribbon`,c=`${M}-ribbon-wrapper`,p=(0,y.Z)(s,(S,H)=>{let{darkColor:G}=H;return{[`&${E} ${E}-color-${S}`]:{background:G,[`&:not(${E}-count)`]:{color:G}}}}),F=(0,y.Z)(s,(S,H)=>{let{darkColor:G}=H;return{[`&${he}-color-${S}`]:{background:G,color:G}}});return{[E]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,m.Wf)(s)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${E}-count`]:{zIndex:s.badgeZIndex,minWidth:s.badgeHeight,height:s.badgeHeight,color:s.badgeTextColor,fontWeight:s.badgeFontWeight,fontSize:s.badgeFontSize,lineHeight:`${s.badgeHeight}px`,whiteSpace:"nowrap",textAlign:"center",background:s.badgeColor,borderRadius:s.badgeHeight/2,boxShadow:`0 0 0 ${le}px ${s.badgeShadowColor}`,transition:`background ${s.motionDurationMid}`,a:{color:s.badgeTextColor},"a:hover":{color:s.badgeTextColor},"a:hover &":{background:s.badgeColorHover}},[`${E}-count-sm`]:{minWidth:oe,height:oe,fontSize:s.badgeFontSizeSm,lineHeight:`${oe}px`,borderRadius:oe/2},[`${E}-multiple-words`]:{padding:`0 ${s.paddingXS}px`},[`${E}-dot`]:{zIndex:s.badgeZIndex,width:s.badgeDotSize,minWidth:s.badgeDotSize,height:s.badgeDotSize,background:s.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${le}px ${s.badgeShadowColor}`},[`${E}-dot${ue}`]:{transition:`background ${ce}`},[`${E}-count, ${E}-dot, ${ue}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${re}-spin`]:{animationName:xe,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${E}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${E}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:ge,height:ge,verticalAlign:"middle",borderRadius:"50%"},[`${E}-status-success`]:{backgroundColor:s.colorSuccess},[`${E}-status-processing`]:{position:"relative",color:s.colorPrimary,backgroundColor:s.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:le,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:P,animationDuration:s.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${E}-status-default`]:{backgroundColor:s.colorTextPlaceholder},[`${E}-status-error`]:{backgroundColor:s.colorError},[`${E}-status-warning`]:{backgroundColor:s.colorWarning},[`${E}-status-text`]:{marginInlineStart:je,color:s.colorText,fontSize:s.fontSize}}}),p),{[`${E}-zoom-appear, ${E}-zoom-enter`]:{animationName:O,animationDuration:s.motionDurationSlow,animationTimingFunction:s.motionEaseOutBack,animationFillMode:"both"},[`${E}-zoom-leave`]:{animationName:$,animationDuration:s.motionDurationSlow,animationTimingFunction:s.motionEaseOutBack,animationFillMode:"both"},[`&${E}-not-a-wrapper`]:{[`${E}-zoom-appear, ${E}-zoom-enter`]:{animationName:ee,animationDuration:s.motionDurationSlow,animationTimingFunction:s.motionEaseOutBack},[`${E}-zoom-leave`]:{animationName:te,animationDuration:s.motionDurationSlow,animationTimingFunction:s.motionEaseOutBack},[`&:not(${E}-status)`]:{verticalAlign:"middle"},[`${ue}-custom-component, ${E}-count`]:{transform:"none"},[`${ue}-custom-component, ${ue}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${ue}`]:{overflow:"hidden",[`${ue}-only`]:{position:"relative",display:"inline-block",height:s.badgeHeight,transition:`all ${s.motionDurationSlow} ${s.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${ue}-only-unit`]:{height:s.badgeHeight,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${ue}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${E}-count, ${E}-dot, ${ue}-custom-component`]:{transform:"translate(-50%, -50%)"}}}),[`${c}`]:{position:"relative"},[`${he}`]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,m.Wf)(s)),{position:"absolute",top:je,padding:`0 ${s.paddingXS}px`,color:s.colorPrimary,lineHeight:`${R}px`,whiteSpace:"nowrap",backgroundColor:s.colorPrimary,borderRadius:s.borderRadiusSM,[`${he}-text`]:{color:s.colorTextLightSolid},[`${he}-corner`]:{position:"absolute",top:"100%",width:de,height:de,color:"currentcolor",border:`${de/2}px solid`,transform:s.badgeRibbonCornerTransform,transformOrigin:"top",filter:s.badgeRibbonCornerFilter}}),F),{[`&${he}-placement-end`]:{insetInlineEnd:-de,borderEndEndRadius:0,[`${he}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${he}-placement-start`]:{insetInlineStart:-de,borderEndStartRadius:0,[`${he}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var _=(0,w.Z)("Badge",s=>{const{fontSize:E,lineHeight:re,fontSizeSM:M,lineWidth:R,marginXS:le,colorBorderBg:oe}=s,ce=Math.round(E*re),ge=R,je="auto",de=ce-2*ge,ue=s.colorBgContainer,he="normal",c=M,p=s.colorError,F=s.colorErrorHover,S=E,H=M/2,G=M,ie=M/2,ne=(0,I.TS)(s,{badgeFontHeight:ce,badgeShadowSize:ge,badgeZIndex:je,badgeHeight:de,badgeTextColor:ue,badgeFontWeight:he,badgeFontSize:c,badgeColor:p,badgeColorHover:F,badgeShadowColor:oe,badgeHeightSm:S,badgeDotSize:H,badgeFontSizeSm:G,badgeStatusSize:ie,badgeProcessingDuration:"1.2s",badgeRibbonOffset:le,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"});return[me(ne)]}),Oe=s=>{let{className:E,prefixCls:re,style:M,color:R,children:le,text:oe,placement:ce="end"}=s;const{getPrefixCls:ge,direction:je}=A.useContext(h.E_),de=ge("ribbon",re),ue=(0,Me.o2)(R,!1),he=L()(de,`${de}-placement-${ce}`,{[`${de}-rtl`]:je==="rtl",[`${de}-color-${R}`]:ue},E),[c,p]=_(de),F={},S={};return R&&!ue&&(F.background=R,S.color=R),c(A.createElement("div",{className:L()(`${de}-wrapper`,p)},le,A.createElement("div",{className:L()(he,p),style:Object.assign(Object.assign({},F),M)},A.createElement("span",{className:`${de}-text`},oe),A.createElement("div",{className:`${de}-corner`,style:S}))))};function Pe(s){let{prefixCls:E,value:re,current:M,offset:R=0}=s,le;return R&&(le={position:"absolute",top:`${R}00%`,left:0}),A.createElement("span",{style:le,className:L()(`${E}-only-unit`,{current:M})},re)}function ze(s,E,re){let M=s,R=0;for(;(M+10)%10!==E;)M+=re,R+=re;return R}function qe(s){const{prefixCls:E,count:re,value:M}=s,R=Number(M),le=Math.abs(re),[oe,ce]=A.useState(R),[ge,je]=A.useState(le),de=()=>{ce(R),je(le)};A.useEffect(()=>{const c=setTimeout(()=>{de()},1e3);return()=>{clearTimeout(c)}},[R]);let ue,he;if(oe===R||Number.isNaN(R)||Number.isNaN(oe))ue=[A.createElement(Pe,Object.assign({},s,{key:R,current:!0}))],he={transition:"none"};else{ue=[];const c=R+10,p=[];for(let H=R;H<=c;H+=1)p.push(H);const F=p.findIndex(H=>H%10===oe);ue=p.map((H,G)=>{const ie=H%10;return A.createElement(Pe,Object.assign({},s,{key:H,value:ie,offset:G-F,current:G===F}))});const S=ge<le?1:-1;he={transform:`translateY(${-ze(oe,R,S)}00%)`}}return A.createElement("span",{className:`${E}-only`,style:he,onTransitionEnd:de},ue)}var Ge=function(s,E){var re={};for(var M in s)Object.prototype.hasOwnProperty.call(s,M)&&E.indexOf(M)<0&&(re[M]=s[M]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,M=Object.getOwnPropertySymbols(s);R<M.length;R++)E.indexOf(M[R])<0&&Object.prototype.propertyIsEnumerable.call(s,M[R])&&(re[M[R]]=s[M[R]]);return re},tt=A.forwardRef((s,E)=>{var{prefixCls:re,count:M,className:R,motionClassName:le,style:oe,title:ce,show:ge,component:je="sup",children:de}=s,ue=Ge(s,["prefixCls","count","className","motionClassName","style","title","show","component","children"]);const{getPrefixCls:he}=A.useContext(h.E_),c=he("scroll-number",re),p=Object.assign(Object.assign({},ue),{"data-show":ge,style:oe,className:L()(c,R,le),title:ce});let F=M;if(M&&Number(M)%1===0){const S=String(M).split("");F=S.map((H,G)=>A.createElement(qe,{prefixCls:c,count:Number(M),value:H,key:S.length-G}))}return oe&&oe.borderColor&&(p.style=Object.assign(Object.assign({},oe),{boxShadow:`0 0 0 1px ${oe.borderColor} inset`})),de?(0,q.Tm)(de,S=>({className:L()(`${c}-custom-component`,S?.className,le)})):A.createElement(je,Object.assign({},p,{ref:E}),F)}),Be=function(s,E){var re={};for(var M in s)Object.prototype.hasOwnProperty.call(s,M)&&E.indexOf(M)<0&&(re[M]=s[M]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,M=Object.getOwnPropertySymbols(s);R<M.length;R++)E.indexOf(M[R])<0&&Object.prototype.propertyIsEnumerable.call(s,M[R])&&(re[M[R]]=s[M[R]]);return re};const rt=(s,E)=>{const{prefixCls:re,scrollNumberPrefixCls:M,children:R,status:le,text:oe,color:ce,count:ge=null,overflowCount:je=99,dot:de=!1,size:ue="default",title:he,offset:c,style:p,className:F,rootClassName:S,showZero:H=!1}=s,G=Be(s,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","showZero"]),{getPrefixCls:ie,direction:ne}=A.useContext(h.E_),X=ie("badge",re),[be,$e]=_(X),Se=ge>je?`${je}+`:ge,Ce=Se==="0"||Se===0,Ee=ge===null||Ce&&!H,Ie=(le!=null||ce!=null)&&Ee,ke=de&&!Ce,fe=ke?"":Se,Re=(0,A.useMemo)(()=>(fe==null||fe===""||Ce&&!H)&&!ke,[fe,Ce,H,ke]),Le=(0,A.useRef)(ge);Re||(Le.current=ge);const ve=Le.current,Te=(0,A.useRef)(fe);Re||(Te.current=fe);const we=Te.current,De=(0,A.useRef)(ke);Re||(De.current=ke);const Ae=(0,A.useMemo)(()=>{if(!c)return Object.assign({},p);const i={marginTop:c[1]};return ne==="rtl"?i.left=parseInt(c[0],10):i.right=-parseInt(c[0],10),Object.assign(Object.assign({},i),p)},[ne,c,p]),Xe=he??(typeof ve=="string"||typeof ve=="number"?ve:void 0),Ye=Re||!oe?null:A.createElement("span",{className:`${X}-status-text`},oe),Ue=!ve||typeof ve!="object"?void 0:(0,q.Tm)(ve,i=>({style:Object.assign(Object.assign({},Ae),i.style)})),Ze=(0,Me.o2)(ce,!1),Ke=L()({[`${X}-status-dot`]:Ie,[`${X}-status-${le}`]:!!le,[`${X}-color-${ce}`]:Ze}),e={};ce&&!Ze&&(e.color=ce,e.background=ce);const o=L()(X,{[`${X}-status`]:Ie,[`${X}-not-a-wrapper`]:!R,[`${X}-rtl`]:ne==="rtl"},F,S,$e);if(!R&&Ie){const i=Ae.color;return be(A.createElement("span",Object.assign({},G,{className:o,style:Ae}),A.createElement("span",{className:Ke,style:e}),oe&&A.createElement("span",{style:{color:i},className:`${X}-status-text`},oe)))}return be(A.createElement("span",Object.assign({ref:E},G,{className:o}),R,A.createElement(f.ZP,{visible:!Re,motionName:`${X}-zoom`,motionAppear:!1,motionDeadline:1e3},i=>{let{className:a,ref:v}=i;const B=ie("scroll-number",M),W=De.current,D=L()({[`${X}-dot`]:W,[`${X}-count`]:!W,[`${X}-count-sm`]:ue==="small",[`${X}-multiple-words`]:!W&&we&&we.toString().length>1,[`${X}-status-${le}`]:!!le,[`${X}-color-${ce}`]:Ze});let N=Object.assign({},Ae);return ce&&!Ze&&(N=N||{},N.background=ce),A.createElement(tt,{prefixCls:B,show:!Re,motionClassName:a,className:D,count:we,title:Xe,style:N,key:"scrollNumber",ref:v},Ue)}),Ye))},Fe=A.forwardRef(rt);Fe.Ribbon=Oe;var _e=Fe},26591:function(Ne,j,l){l.d(j,{Z:function(){return he}});var se=l(60042),L=l.n(se),f=l(50189),A=l(11026),h=l(27378),Me=l(81412),q=l(99664),r=l(64649),m=l(25773),y=l(83395),w=l(78730),I=l(91864),P=h.createContext(null),O=P,$=function(p){var F=p.prefixCls,S=p.className,H=p.style,G=p.children,ie=p.containerRef,ne=p.onMouseEnter,X=p.onMouseOver,be=p.onMouseLeave,$e=p.onClick,Se=p.onKeyDown,Ce=p.onKeyUp,Ee={onMouseEnter:ne,onMouseOver:X,onMouseLeave:be,onClick:$e,onKeyDown:Se,onKeyUp:Ce};return h.createElement(h.Fragment,null,h.createElement("div",(0,m.Z)({className:L()("".concat(F,"-content"),S),style:(0,f.Z)({},H),"aria-modal":"true",role:"dialog",ref:ie},Ee),G))},ee=$,te=l(74485);function xe(c){return typeof c=="string"&&String(Number(c))===c?((0,te.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(c)):c}function me(c){warning(!("wrapperClassName"in c),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!c.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var _={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function ye(c,p){var F,S,H,G,ie=c.prefixCls,ne=c.open,X=c.placement,be=c.inline,$e=c.push,Se=c.forceRender,Ce=c.autoFocus,Ee=c.keyboard,Ie=c.rootClassName,ke=c.rootStyle,fe=c.zIndex,Re=c.className,Le=c.style,ve=c.motion,Te=c.width,we=c.height,De=c.children,Ae=c.contentWrapperStyle,Xe=c.mask,Ye=c.maskClosable,Ue=c.maskMotion,Ze=c.maskClassName,Ke=c.maskStyle,e=c.afterOpenChange,o=c.onClose,i=c.onMouseEnter,a=c.onMouseOver,v=c.onMouseLeave,B=c.onClick,W=c.onKeyDown,D=c.onKeyUp,N=h.useRef(),Z=h.useRef(),J=h.useRef();h.useImperativeHandle(p,function(){return N.current});var t=function(ae){var pe=ae.keyCode,He=ae.shiftKey;switch(pe){case w.Z.TAB:{if(pe===w.Z.TAB){if(!He&&document.activeElement===J.current){var Ve;(Ve=Z.current)===null||Ve===void 0||Ve.focus({preventScroll:!0})}else if(He&&document.activeElement===Z.current){var We;(We=J.current)===null||We===void 0||We.focus({preventScroll:!0})}}break}case w.Z.ESC:{o&&Ee&&(ae.stopPropagation(),o(ae));break}}};h.useEffect(function(){if(ne&&Ce){var U;(U=N.current)===null||U===void 0||U.focus({preventScroll:!0})}},[ne]);var n=h.useState(!1),u=(0,A.Z)(n,2),d=u[0],g=u[1],x=h.useContext(O),C;$e===!1?C={distance:0}:$e===!0?C={}:C=$e||{};var z=(F=(S=(H=C)===null||H===void 0?void 0:H.distance)!==null&&S!==void 0?S:x?.pushDistance)!==null&&F!==void 0?F:180,T=h.useMemo(function(){return{pushDistance:z,push:function(){g(!0)},pull:function(){g(!1)}}},[z]);h.useEffect(function(){if(ne){var U;x==null||(U=x.push)===null||U===void 0||U.call(x)}else{var ae;x==null||(ae=x.pull)===null||ae===void 0||ae.call(x)}},[ne]),h.useEffect(function(){return function(){var U;x==null||(U=x.pull)===null||U===void 0||U.call(x)}},[]);var Y=Xe&&h.createElement(y.ZP,(0,m.Z)({key:"mask"},Ue,{visible:ne}),function(U,ae){var pe=U.className,He=U.style;return h.createElement("div",{className:L()("".concat(ie,"-mask"),pe,Ze),style:(0,f.Z)((0,f.Z)({},He),Ke),onClick:Ye&&ne?o:void 0,ref:ae})}),Q=typeof ve=="function"?ve(X):ve,b={};if(d&&z)switch(X){case"top":b.transform="translateY(".concat(z,"px)");break;case"bottom":b.transform="translateY(".concat(-z,"px)");break;case"left":b.transform="translateX(".concat(z,"px)");break;default:b.transform="translateX(".concat(-z,"px)");break}X==="left"||X==="right"?b.width=xe(Te):b.height=xe(we);var k={onMouseEnter:i,onMouseOver:a,onMouseLeave:v,onClick:B,onKeyDown:W,onKeyUp:D},V=h.createElement(y.ZP,(0,m.Z)({key:"panel"},Q,{visible:ne,forceRender:Se,onVisibleChanged:function(ae){e?.(ae)},removeOnLeave:!1,leavedClassName:"".concat(ie,"-content-wrapper-hidden")}),function(U,ae){var pe=U.className,He=U.style;return h.createElement("div",(0,m.Z)({className:L()("".concat(ie,"-content-wrapper"),pe),style:(0,f.Z)((0,f.Z)((0,f.Z)({},b),He),Ae)},(0,I.Z)(c,{data:!0})),h.createElement(ee,(0,m.Z)({containerRef:ae,prefixCls:ie,className:Re,style:Le},k),De))}),K=(0,f.Z)({},ke);return fe&&(K.zIndex=fe),h.createElement(O.Provider,{value:T},h.createElement("div",{className:L()(ie,"".concat(ie,"-").concat(X),Ie,(G={},(0,r.Z)(G,"".concat(ie,"-open"),ne),(0,r.Z)(G,"".concat(ie,"-inline"),be),G)),style:K,tabIndex:-1,ref:N,onKeyDown:t},Y,h.createElement("div",{tabIndex:0,ref:Z,style:_,"aria-hidden":"true","data-sentinel":"start"}),V,h.createElement("div",{tabIndex:0,ref:J,style:_,"aria-hidden":"true","data-sentinel":"end"})))}var Oe=h.forwardRef(ye),Pe=Oe,ze=function(p){var F=p.open,S=F===void 0?!1:F,H=p.prefixCls,G=H===void 0?"rc-drawer":H,ie=p.placement,ne=ie===void 0?"right":ie,X=p.autoFocus,be=X===void 0?!0:X,$e=p.keyboard,Se=$e===void 0?!0:$e,Ce=p.width,Ee=Ce===void 0?378:Ce,Ie=p.mask,ke=Ie===void 0?!0:Ie,fe=p.maskClosable,Re=fe===void 0?!0:fe,Le=p.getContainer,ve=p.forceRender,Te=p.afterOpenChange,we=p.destroyOnClose,De=p.onMouseEnter,Ae=p.onMouseOver,Xe=p.onMouseLeave,Ye=p.onClick,Ue=p.onKeyDown,Ze=p.onKeyUp,Ke=h.useState(!1),e=(0,A.Z)(Ke,2),o=e[0],i=e[1],a=h.useState(!1),v=(0,A.Z)(a,2),B=v[0],W=v[1];(0,q.Z)(function(){W(!0)},[]);var D=B?S:!1,N=h.useRef(),Z=h.useRef();(0,q.Z)(function(){D&&(Z.current=document.activeElement)},[D]);var J=function(d){var g;if(i(d),Te?.(d),!d&&Z.current&&!(!((g=N.current)===null||g===void 0)&&g.contains(Z.current))){var x;(x=Z.current)===null||x===void 0||x.focus({preventScroll:!0})}};if(!ve&&!o&&!D&&we)return null;var t={onMouseEnter:De,onMouseOver:Ae,onMouseLeave:Xe,onClick:Ye,onKeyDown:Ue,onKeyUp:Ze},n=(0,f.Z)((0,f.Z)({},p),{},{open:D,prefixCls:G,placement:ne,autoFocus:be,keyboard:Se,width:Ee,mask:ke,maskClosable:Re,inline:Le===!1,afterOpenChange:J,ref:N},t);return h.createElement(Me.Z,{open:D||ve||o,autoDestroy:!1,getContainer:Le,autoLock:ke&&(D||o)},h.createElement(Pe,n))},qe=ze,Ge=qe,et=l(26775),tt=l(84006),Be=l(80821),rt=l(92746),_e=c=>{const{prefixCls:p,title:F,footer:S,extra:H,closable:G=!0,closeIcon:ie=h.createElement(rt.Z,null),onClose:ne,headerStyle:X,drawerStyle:be,bodyStyle:$e,footerStyle:Se,children:Ce}=c,Ee=G&&h.createElement("button",{type:"button",onClick:ne,"aria-label":"Close",className:`${p}-close`},ie),Ie=h.useMemo(()=>!F&&!G?null:h.createElement("div",{style:X,className:L()(`${p}-header`,{[`${p}-header-close-only`]:G&&!F&&!H})},h.createElement("div",{className:`${p}-header-title`},Ee,F&&h.createElement("div",{className:`${p}-title`},F)),H&&h.createElement("div",{className:`${p}-extra`},H)),[G,Ee,H,X,p,F]),ke=h.useMemo(()=>{if(!S)return null;const fe=`${p}-footer`;return h.createElement("div",{className:fe,style:Se},S)},[S,Se,p]);return h.createElement("div",{className:`${p}-wrapper-body`,style:be},Ie,h.createElement("div",{className:`${p}-body`,style:$e},Ce),ke)},s=l(6117),E=l(5515),M=c=>{const{componentCls:p,motionDurationSlow:F}=c,S={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${F}`}}};return{[p]:{[`${p}-mask-motion`]:{"&-enter, &-appear, &-leave":{"&-active":{transition:`all ${F}`}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}},[`${p}-panel-motion`]:{"&-left":[S,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[S,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[S,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[S,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}}}};const R=c=>{const{componentCls:p,zIndexPopup:F,colorBgMask:S,colorBgElevated:H,motionDurationSlow:G,motionDurationMid:ie,padding:ne,paddingLG:X,fontSizeLG:be,lineHeightLG:$e,lineWidth:Se,lineType:Ce,colorSplit:Ee,marginSM:Ie,colorIcon:ke,colorIconHover:fe,colorText:Re,fontWeightStrong:Le,footerPaddingBlock:ve,footerPaddingInline:Te}=c,we=`${p}-content-wrapper`;return{[p]:{position:"fixed",inset:0,zIndex:F,pointerEvents:"none","&-pure":{position:"relative",background:H,[`&${p}-left`]:{boxShadow:c.boxShadowDrawerLeft},[`&${p}-right`]:{boxShadow:c.boxShadowDrawerRight},[`&${p}-top`]:{boxShadow:c.boxShadowDrawerUp},[`&${p}-bottom`]:{boxShadow:c.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${p}-mask`]:{position:"absolute",inset:0,zIndex:F,background:S,pointerEvents:"auto"},[we]:{position:"absolute",zIndex:F,maxWidth:"100vw",transition:`all ${G}`,"&-hidden":{display:"none"}},[`&-left > ${we}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:c.boxShadowDrawerLeft},[`&-right > ${we}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:c.boxShadowDrawerRight},[`&-top > ${we}`]:{top:0,insetInline:0,boxShadow:c.boxShadowDrawerUp},[`&-bottom > ${we}`]:{bottom:0,insetInline:0,boxShadow:c.boxShadowDrawerDown},[`${p}-content`]:{width:"100%",height:"100%",overflow:"auto",background:H,pointerEvents:"auto"},[`${p}-wrapper-body`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},[`${p}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${ne}px ${X}px`,fontSize:be,lineHeight:$e,borderBottom:`${Se}px ${Ce} ${Ee}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${p}-extra`]:{flex:"none"},[`${p}-close`]:{display:"inline-block",marginInlineEnd:Ie,color:ke,fontWeight:Le,fontSize:be,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${ie}`,textRendering:"auto","&:focus, &:hover":{color:fe,textDecoration:"none"}},[`${p}-title`]:{flex:1,margin:0,color:Re,fontWeight:c.fontWeightStrong,fontSize:be,lineHeight:$e},[`${p}-body`]:{flex:1,minWidth:0,minHeight:0,padding:X,overflow:"auto"},[`${p}-footer`]:{flexShrink:0,padding:`${ve}px ${Te}px`,borderTop:`${Se}px ${Ce} ${Ee}`},"&-rtl":{direction:"rtl"}}}};var le=(0,s.Z)("Drawer",c=>{const p=(0,E.TS)(c,{});return[R(p),M(p)]},c=>({zIndexPopup:c.zIndexPopupBase,footerPaddingBlock:c.paddingXS,footerPaddingInline:c.padding})),oe=l(31630),ce=function(c,p){var F={};for(var S in c)Object.prototype.hasOwnProperty.call(c,S)&&p.indexOf(S)<0&&(F[S]=c[S]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var H=0,S=Object.getOwnPropertySymbols(c);H<S.length;H++)p.indexOf(S[H])<0&&Object.prototype.propertyIsEnumerable.call(c,S[H])&&(F[S[H]]=c[S[H]]);return F};const ge=null,je={distance:180};function de(c){var p;const{rootClassName:F,width:S,height:H,size:G="default",mask:ie=!0,push:ne=je,open:X,afterOpenChange:be,onClose:$e,prefixCls:Se,getContainer:Ce,visible:Ee,afterVisibleChange:Ie}=c,ke=ce(c,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","visible","afterVisibleChange"]),{getPopupContainer:fe,getPrefixCls:Re,direction:Le}=h.useContext(et.E_),ve=Re("drawer",Se),[Te,we]=le(ve),De=Ce===void 0&&fe?()=>fe(document.body):Ce,Ae=L()({"no-mask":!ie,[`${ve}-rtl`]:Le==="rtl"},F,we),Xe=h.useMemo(()=>S??(G==="large"?736:378),[S,G]),Ye=h.useMemo(()=>H??(G==="large"?736:378),[H,G]),Ue={motionName:(0,Be.mL)(ve,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},Ze=Ke=>({motionName:(0,Be.mL)(ve,`panel-motion-${Ke}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500});return Te(h.createElement(oe.BR,null,h.createElement(tt.Ux,{status:!0,override:!0},h.createElement(Ge,Object.assign({prefixCls:ve,onClose:$e,maskMotion:Ue,motion:Ze},ke,{open:X??Ee,mask:ie,push:ne,width:Xe,height:Ye,rootClassName:Ae,getContainer:De,afterOpenChange:be??Ie}),h.createElement(_e,Object.assign({prefixCls:ve},ke,{onClose:$e}))))))}function ue(c){var{prefixCls:p,style:F,className:S,placement:H="right"}=c,G=ce(c,["prefixCls","style","className","placement"]);const{getPrefixCls:ie}=h.useContext(et.E_),ne=ie("drawer",p),[X,be]=le(ne);return X(h.createElement("div",{className:L()(ne,`${ne}-pure`,`${ne}-${H}`,be,S),style:F},h.createElement(_e,Object.assign({prefixCls:ne},G))))}de._InternalPanelDoNotUseOrYouWillBeFired=ue;var he=de},85270:function(Ne,j,l){var se=l(73203).default;Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var L=se(l(22313)),f=L.default;j.default=f},33527:function(Ne,j,l){var se=l(73203).default;Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var L=se(l(10792)),f=L.default;j.default=f},22313:function(Ne,j,l){var se=l(73203).default;Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var L=se(l(91412)),f=se(l(14339)),h={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},L.default),timePickerLocale:Object.assign({},f.default)};j.default=h},10792:function(Ne,j,l){var se=l(73203).default;Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var L=se(l(71480)),f=se(l(47071));const A={lang:Object.assign({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},L.default),timePickerLocale:Object.assign({},f.default)};A.lang.ok="\u786E\u5B9A";var h=A;j.default=h},75183:function(Ne,j,l){var se,L=l(73203).default;se={value:!0},j.Z=void 0;var f=L(l(51367)),A=L(l(85270)),h=L(l(22313)),Me=L(l(14339));const q="${label} is not a valid ${type}";var m={locale:"en",Pagination:f.default,DatePicker:h.default,TimePicker:Me.default,Calendar:A.default,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:q,method:q,array:q,object:q,number:q,date:q,boolean:q,integer:q,float:q,regexp:q,email:q,url:q,hex:q},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}};j.Z=m},81107:function(Ne,j,l){var se,L=l(73203).default;se={value:!0},j.Z=void 0;var f=L(l(95160)),A=L(l(33527)),h=L(l(10792)),Me=L(l(47071));const q="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}";var m={locale:"zh-cn",Pagination:f.default,DatePicker:h.default,TimePicker:Me.default,Calendar:A.default,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:q,method:q,array:q,object:q,number:q,date:q,boolean:q,integer:q,float:q,regexp:q,email:q,url:q,hex:q},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}};j.Z=m},14339:function(Ne,j){Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var se={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};j.default=se},47071:function(Ne,j){Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var se={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]};j.default=se},51367:function(Ne,j){Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var l={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};j.default=l},95160:function(Ne,j){Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var l={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"};j.default=l},91412:function(Ne,j){Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var l={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},se=l;j.default=se},71480:function(Ne,j){Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var l={locale:"zh_CN",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA"},se=l;j.default=se},73203:function(Ne){function j(l){return l&&l.__esModule?l:{default:l}}Ne.exports=j,Ne.exports.__esModule=!0,Ne.exports.default=Ne.exports},66274:function(Ne,j,l){var se;l.d(j,{Z:function(){return q}});var L=l(27378),f={942:(r,m,y)=>{y.d(m,{Z:()=>ee});var w=y(601),I=y.n(w),P=y(609),O=y.n(P),$=O()(I());$.push([r.id,`.node-right-icon-close {
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
`,""]),$.locals={};const ee=$},84:(r,m,y)=>{y.d(m,{Z:()=>ee});var w=y(601),I=y.n(w),P=y(609),O=y.n(P),$=O()(I());$.push([r.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]),$.locals={};const ee=$},91:(r,m,y)=>{y.d(m,{Z:()=>ee});var w=y(601),I=y.n(w),P=y(609),O=y.n(P),$=O()(I());$.push([r.id,`.frame {
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
`,""]),$.locals={};const ee=$},505:(r,m,y)=>{y.d(m,{Z:()=>ee});var w=y(601),I=y.n(w),P=y(609),O=y.n(P),$=O()(I());$.push([r.id,`.clear::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
@keyframes huxy-header-animate-top-in {
  0% {
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, -30px, 0);
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
  padding: 0 12px;
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
  padding: 2px;
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
  margin-left: 10px;
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
  margin-left: 10px;
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
  padding: 0 15px;
}
.header .nav .nav-wrap .nav-left > ul > li ul > li .link .img,
.header .nav .nav-wrap .nav-right > ul > li ul > li .link .img {
  font-size: 0;
  height: 100%;
  margin-right: 10px;
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
  margin-right: 10px;
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
  animation: huxy-header-animate-top-in 0.2s forwards;
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
}
`,""]),$.locals={};const ee=$},675:(r,m,y)=>{y.d(m,{Z:()=>ee});var w=y(601),I=y.n(w),P=y(609),O=y.n(P),$=O()(I());$.push([r.id,`@keyframes ani-fade-in {
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
`,""]),$.locals={};const ee=$},609:r=>{r.exports=function(m){var y=[];return y.toString=function(){return this.map(function(w){var I="",P=typeof w[5]<"u";return w[4]&&(I+="@supports (".concat(w[4],") {")),w[2]&&(I+="@media ".concat(w[2]," {")),P&&(I+="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {")),I+=m(w),P&&(I+="}"),w[2]&&(I+="}"),w[4]&&(I+="}"),I}).join("")},y.i=function(w,I,P,O,$){typeof w=="string"&&(w=[[null,w,void 0]]);var ee={};if(P)for(var te=0;te<this.length;te++){var xe=this[te][0];xe!=null&&(ee[xe]=!0)}for(var me=0;me<w.length;me++){var _=[].concat(w[me]);P&&ee[_[0]]||(typeof $<"u"&&(typeof _[5]>"u"||(_[1]="@layer".concat(_[5].length>0?" ".concat(_[5]):""," {").concat(_[1],"}")),_[5]=$),I&&(_[2]&&(_[1]="@media ".concat(_[2]," {").concat(_[1],"}")),_[2]=I),O&&(_[4]?(_[1]="@supports (".concat(_[4],") {").concat(_[1],"}"),_[4]=O):_[4]="".concat(O)),y.push(_))}},y}},601:r=>{r.exports=function(m){return m[1]}},837:(r,m,y)=>{var w=y(810),I=Symbol.for("react.element"),P=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,$=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ee={key:!0,ref:!0,__self:!0,__source:!0};function te(xe,me,_){var ye,Oe={},Pe=null,ze=null;_!==void 0&&(Pe=""+_),me.key!==void 0&&(Pe=""+me.key),me.ref!==void 0&&(ze=me.ref);for(ye in me)O.call(me,ye)&&!ee.hasOwnProperty(ye)&&(Oe[ye]=me[ye]);if(xe&&xe.defaultProps)for(ye in me=xe.defaultProps,me)Oe[ye]===void 0&&(Oe[ye]=me[ye]);return{$$typeof:I,type:xe,key:Pe,ref:ze,props:Oe,_owner:$.current}}m.Fragment=P,m.jsx=te,m.jsxs=te},322:(r,m,y)=>{r.exports=y(837)},62:r=>{var m=[];function y(P){for(var O=-1,$=0;$<m.length;$++)if(m[$].identifier===P){O=$;break}return O}function w(P,O){for(var $={},ee=[],te=0;te<P.length;te++){var xe=P[te],me=O.base?xe[0]+O.base:xe[0],_=$[me]||0,ye="".concat(me," ").concat(_);$[me]=_+1;var Oe=y(ye),Pe={css:xe[1],media:xe[2],sourceMap:xe[3],supports:xe[4],layer:xe[5]};if(Oe!==-1)m[Oe].references++,m[Oe].updater(Pe);else{var ze=I(Pe,O);O.byIndex=te,m.splice(te,0,{identifier:ye,updater:ze,references:1})}ee.push(ye)}return ee}function I(P,O){var $=O.domAPI(O);$.update(P);var ee=function(te){if(te){if(te.css===P.css&&te.media===P.media&&te.sourceMap===P.sourceMap&&te.supports===P.supports&&te.layer===P.layer)return;$.update(P=te)}else $.remove()};return ee}r.exports=function(P,O){O=O||{},P=P||[];var $=w(P,O);return function(ee){ee=ee||[];for(var te=0;te<$.length;te++){var xe=$[te],me=y(xe);m[me].references--}for(var _=w(ee,O),ye=0;ye<$.length;ye++){var Oe=$[ye],Pe=y(Oe);m[Pe].references===0&&(m[Pe].updater(),m.splice(Pe,1))}$=_}}},793:r=>{var m={};function y(I){if(typeof m[I]>"u"){var P=document.querySelector(I);if(window.HTMLIFrameElement&&P instanceof window.HTMLIFrameElement)try{P=P.contentDocument.head}catch{P=null}m[I]=P}return m[I]}function w(I,P){var O=y(I);if(!O)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");O.appendChild(P)}r.exports=w},173:r=>{function m(y){var w=document.createElement("style");return y.setAttributes(w,y.attributes),y.insert(w,y.options),w}r.exports=m},892:(r,m,y)=>{function w(I){var P=y.nc;P&&I.setAttribute("nonce",P)}r.exports=w},36:r=>{function m(I,P,O){var $="";O.supports&&($+="@supports (".concat(O.supports,") {")),O.media&&($+="@media ".concat(O.media," {"));var ee=typeof O.layer<"u";ee&&($+="@layer".concat(O.layer.length>0?" ".concat(O.layer):""," {")),$+=O.css,ee&&($+="}"),O.media&&($+="}"),O.supports&&($+="}");var te=O.sourceMap;te&&typeof btoa<"u"&&($+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(te))))," */")),P.styleTagTransform($,I,P.options)}function y(I){if(I.parentNode===null)return!1;I.parentNode.removeChild(I)}function w(I){if(typeof document>"u")return{update:function(){},remove:function(){}};var P=I.insertStyleElement(I);return{update:function(O){m(P,I,O)},remove:function(){y(P)}}}r.exports=w},464:r=>{function m(y,w){if(w.styleSheet)w.styleSheet.cssText=y;else{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(document.createTextNode(y))}}r.exports=m},810:r=>{var m=w=>{var I={};return h.d(I,w),I},y=w=>()=>w;r.exports=se||(se=l.t(L,2))}},A={};function h(r){var m=A[r];if(m!==void 0)return m.exports;var y=A[r]={id:r,exports:{}};return f[r](y,y.exports,h),y.exports}h.n=r=>{var m=r&&r.__esModule?()=>r.default:()=>r;return h.d(m,{a:m}),m},h.d=(r,m)=>{for(var y in m)h.o(m,y)&&!h.o(r,y)&&Object.defineProperty(r,y,{enumerable:!0,get:m[y]})},h.o=(r,m)=>Object.prototype.hasOwnProperty.call(r,m),h.nc=void 0;var Me={};(()=>{h.d(Me,{Z:()=>J});var r=h(322),m=h(810);const y=()=>![typeof window,typeof document].includes("undefined"),w=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),I=t=>w(t).indexOf("element")>-1,P=(t=null)=>y()?I(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},O=(t={})=>{const n=(0,m.useRef)(0),[u,d]=(0,m.useState)(t),g=(0,m.useCallback)(x=>{cancelAnimationFrame(n.current),n.current=requestAnimationFrame(()=>d(x))},[]);return(0,m.useEffect)(()=>()=>cancelAnimationFrame(n.current),[]),[u,g]},$=()=>{const[t,n]=O(P());return(0,m.useEffect)(()=>{const u=()=>n(P());return window.addEventListener("resize",u,!1),()=>window.removeEventListener("resize",u,!1)},[]),t},ee=t=>w(t)==="array",te=(t,n,u="id",d="children")=>{if(!ee(t))return null;const g=x=>{for(let C=0,z=x.length;C<z;C++){const T=x[C];if(T[u]===n)return[T];if(ee(T[d])){const Y=g(T[d]);if(Y)return[T].concat(Y)}}};return g(t)},xe=t=>++t,me=()=>{const[,t]=(0,m.useState)(0);return(0,m.useCallback)(()=>t(xe),[])},_=t=>ee(t)&&!!t.length,ye=({to:t,preventDefault:n,stopPropagation:u,...d})=>n?(0,r.jsx)("span",{...d}):(0,r.jsx)("a",{href:t,...d}),Oe=({item:t,...n})=>(0,r.jsx)("ul",{...n}),Pe=(t,...n)=>{const u={};return Object.keys(t).filter(Boolean).map(d=>{u[d]=g=>t[d](g,...n)}),u},ze=({data:t=[],events:n={},List:u=Oe,Link:d=ye,leftIcon:g,rightIcon:x,isHorizontal:C,isCollapsed:z,level:T=0,parentOpen:Y=!0})=>{const Q=z&&!T,b=!C&&!z&&!Y;return t.map(k=>{const{name:V,path:K,icon:U,rightIcon:ae,active:pe,open:He,children:Ve,linkProps:We}=k,it=_(Ve),Qe=k.id||K||V,nt=Q?k.title??V:void 0,at=b?"hidden":"",ot=U??g,Je=ae??x,lt=ot?(0,r.jsx)("div",{className:"node-left-icon",children:ot===!0?(0,r.jsx)("i",{className:"default-left-icon"}):ot}):null,st=V?(0,r.jsx)("div",{className:"node-text",children:(0,r.jsx)("span",{children:V})}):null;if(it){const ct=Pe(n,k,T),dt=[at,He?"open":""].filter(Boolean).join(" ");return(0,r.jsxs)("li",{className:dt,"has-children":"true",...ct,children:[(0,r.jsxs)(d,{title:nt,className:`link${pe?" active":""}`,to:K,preventDefault:!0,stopPropagation:!1,...We,children:[lt,st,Je?(0,r.jsx)("div",{className:"node-right-icon",children:Je===!0?(0,r.jsx)("i",{className:"default-right-icon"}):Je}):null]}),(0,r.jsx)(u,{item:k,children:ze({data:Ve,events:n,List:u,Link:d,leftIcon:g,rightIcon:x,isHorizontal:C,isCollapsed:z,level:T+1,parentOpen:!!He})})]},Qe)}return(0,r.jsx)("li",{className:at,children:(0,r.jsxs)(d,{title:nt,className:`link${pe?" active":""}`,to:K,...We,children:[lt,st]})},Qe)})},qe=ze,Ge=t=>{const{children:n,open:u}=t;let d=0;if(u&&n?.length){d=n.length;let g=0;return n.map(x=>g+=Ge(x)),d+g}return d},et=({item:t,style:n,...u})=>(0,r.jsx)("ul",{style:{...n,"--count":Ge(t)},...u});var tt=h(62),Be=h.n(tt),rt=h(36),Fe=h.n(rt),_e=h(793),s=h.n(_e),E=h(892),re=h.n(E),M=h(173),R=h.n(M),le=h(464),oe=h.n(le),ce=h(942),ge={};ge.styleTagTransform=oe(),ge.setAttributes=re(),ge.insert=s().bind(null,"head"),ge.domAPI=Fe(),ge.insertStyleElement=R();var je=Be()(ce.Z,ge);const de=ce.Z&&ce.Z.locals?ce.Z.locals:void 0,ue=t=>(0,r.jsx)("ul",{...t}),he=(t,n)=>t?et:({item:u,...d})=>(0,r.jsx)(ue,{className:n==="right"?"left":"",...d}),c=t=>{const{data:n=[],collapsed:u=!1,type:d="vertical",Link:g,width:x,bgColor:C,itemHeight:z,collapsedWidth:T,itemPadding:Y,style:Q,className:b,...k}=t,V=(0,m.useRef)(),K=(0,m.useRef)();(0,m.useEffect)(()=>()=>clearTimeout(V.current),[]);const U=me(),ae=d==="horizontal",pe=!ae&&u,He={onClick:(at,ot)=>{if(at.stopPropagation(),!ae&&!pe){const Je=te(n,ot.path,"path"),lt=Je[Je.length-1];lt.open=!lt.open,U()}},onMouseEnter:(at,ot,Je)=>{pe&&!Je&&(clearTimeout(V.current),K.current.style.width="var(--maxWidth)")},onMouseLeave:(at,ot,Je)=>{pe&&!Je&&(V.current=setTimeout(()=>K.current.style.width="",200))}},Ve=(ae?["huxy-horizontal-tree",b]:["huxy-tree",b,pe?"collapsed":""]).filter(Boolean).join(" "),{float:We,...it}=k?.style??{},Qe={"--bgColor":C,"--itemHeight":z,"--nodeListWidth":x,...it};ae?(Qe["--itemPadding"]=Y,Qe["--nodeFloat"]=We):(Qe["--width"]=x,Qe["--collapsedWidth"]=T);const nt=he(!ae&&!pe,We);return(0,r.jsx)("div",{ref:K,className:Ve,style:Qe,...k,children:(0,r.jsx)("div",{className:"huxy-tree-track",children:(0,r.jsx)("ul",{className:"huxy-tree-root",children:qe({data:n,events:He,List:nt,Link:g,leftIcon:!0,rightIcon:!0,isHorizontal:ae,isCollapsed:pe})})})})},p=(t,n)=>Object.prototype.hasOwnProperty.call(t??{},n),F=t=>p(t,"current"),S=(t,n,u="click")=>{(0,m.useEffect)(()=>{const d=x=>{const C=F(t)?t.current:t;C?.contains&&!C.contains(x.target)&&n(x)},g=typeof u=="string"?[u]:u;return g.map(x=>{document.addEventListener(x,d,!1)}),()=>{g.map(x=>{document.removeEventListener(x,d,!1)})}},[t,n,u])},H=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),G=t=>new Promise((n,u)=>{const d=new FileReader;d.readAsDataURL(t),d.addEventListener("load",()=>n(d.result)),d.addEventListener("error",g=>u(g))}),ie=async t=>{if(!H(t))return t;const n=await(await fetch(decodeURIComponent(t))).blob();return await G(n)},ne=t=>{const[n,u]=(0,m.useState)(t);return(0,m.useEffect)(()=>{(async d=>{const g=await ie(d);u(g)})(t)},[t]),n},X=({src:t,...n})=>{const u=ne(t);return(0,r.jsx)("img",{...n,src:u})},be=({Ricon:t,open:n})=>t===!0?(0,r.jsx)("i",{className:`huxy-header-angle-${n?"top":"bt"}`}):(0,r.jsx)(t,{status:n}),$e=({img:t,name:n,icon:u,Ricon:d,open:g})=>t?(0,r.jsxs)("div",{className:"avatar",children:[(0,r.jsx)("div",{className:"img",children:(0,r.jsx)(X,{src:t,width:"1",height:"1",crossOrigin:"anonymous",alt:"avatar"})}),n?(0,r.jsx)("span",{className:"txt",children:n}):null,d?(0,r.jsx)("span",{className:"node-icon",children:(0,r.jsx)(be,{Ricon:d,open:g})}):null]}):(0,r.jsxs)(r.Fragment,{children:[u?(0,r.jsx)("span",{className:"node-icon",children:u}):null,n?(0,r.jsx)("span",{className:"txt",children:n}):null,d?(0,r.jsx)("span",{className:"node-icon",children:(0,r.jsx)(be,{Ricon:d,open:g})}):null]}),Se=({item:t,open:n})=>{const{Custom:u,img:d,name:g,icon:x,Ricon:C,active:z}=t;return typeof u=="function"?(0,r.jsx)(u,{item:t,className:"link"}):(0,r.jsx)("span",{className:`link${z?" active":""}`,title:t.title||g,children:(0,r.jsx)($e,{img:d,name:g,icon:x,Ricon:C,open:n})})},Ce=({item:t,click:n})=>{const u=(0,m.useRef)(),[d,g]=(0,m.useState)(!1);S(u,k=>d&&g(!1));const{arrowDir:x,ChildRender:C,children:z,smShow:T}=t,Y=z?.length,Q=(k,V,K=null)=>{K===!1&&g(U=>!U),K&&(k.stopPropagation(),g(!1)),n(V,K)},b=T?"sm-show":"";return Y||C?(0,r.jsxs)("li",{ref:u,className:`${b} ${d?"open":""}`,onClick:k=>Q(k,t,!1),children:[(0,r.jsx)(Se,{item:t,open:d}),(0,r.jsx)("ul",{className:`huxy-header-arrow-${x||"rt"}`,children:Y?z.map((k,V)=>(0,r.jsx)("li",{className:k.divider?"divider":"",children:(0,r.jsxs)("span",{onClick:K=>Q(K,k,!0),className:`link${k.active?" active":""}`,children:[k.icon?(0,r.jsx)("span",{className:"node-icon",children:k.icon}):null,(0,r.jsx)("span",{className:"drop-label",children:k.name})]})},`subItem-${V}-${k.key||k.name}`)):(0,r.jsx)("li",{children:(0,r.jsx)(C,{item:t,close:()=>g(!1)})})})]}):(0,r.jsx)("li",{onClick:k=>Q(k,t),className:b,children:(0,r.jsx)(Se,{item:t,open:d})})},Ee=({list:t,click:n})=>(0,r.jsx)("ul",{children:t.map((u,d)=>(0,r.jsx)(Ce,{click:n,item:u},`navItem-${d}-${u.key||u.name}`))}),Ie=t=>{const{leftList:n,rightList:u,handleNavClick:d,logo:g,title:x,Link:C}=t;return(0,r.jsxs)("div",{className:"header",children:[(0,r.jsxs)(C,{className:"banner",to:"/",children:[g?(0,r.jsx)("div",{className:"logo",children:(0,r.jsx)("img",{width:"1",height:"1",src:g,alt:"logo"})}):null,(0,r.jsx)("div",{className:"title",children:x??"Dashboard"})]}),(0,r.jsx)("div",{className:"nav",children:(0,r.jsxs)("div",{className:"nav-wrap",children:[(0,r.jsx)("div",{className:"nav-left",children:(0,r.jsx)(Ee,{list:n,click:d})}),(0,r.jsx)("div",{className:"nav-right",children:(0,r.jsx)(Ee,{list:u,click:d})})]})})]})};var ke=h(505),fe={};fe.styleTagTransform=oe(),fe.setAttributes=re(),fe.insert=s().bind(null,"head"),fe.domAPI=Fe(),fe.insertStyleElement=R();var Re=Be()(ke.Z,fe);const Le=ke.Z&&ke.Z.locals?ke.Z.locals:void 0,ve=({language:t,...n})=>(0,m.useMemo)(()=>(0,r.jsx)(Ie,{...n}),[t]),Te=t=>{const{navMenu:n,headerStyle:u,navMenuStyle:d,Link:g,leftList:x,rightList:C,handleNavClick:z,logo:T,title:Y,language:Q}=t;return(0,r.jsxs)("header",{className:"frame-header",style:u,children:[x?.length||C?.length?(0,r.jsx)(ve,{Link:g,leftList:x,rightList:C,handleNavClick:(b,k)=>z(t,b,k),logo:T,title:Y,language:Q}):null,n?.length?(0,r.jsx)(c,{data:n,type:"horizontal",Link:g,style:d}):null]})};var we=h(84),De={};De.styleTagTransform=oe(),De.setAttributes=re(),De.insert=s().bind(null,"head"),De.domAPI=Fe(),De.insertStyleElement=R();var Ae=Be()(we.Z,De);const Xe=we.Z&&we.Z.locals?we.Z.locals:void 0,Ye=({Footer:t})=>(0,r.jsx)("div",{className:"footer",children:t?(0,r.jsx)(t,{}):"copyright \xA9 2020-2022"}),Ue=t=>{const{useStore:n,menu:u,MenuTop:d,MenuBottom:g,Link:x,inputPath:C,asideStyle:z}=t,[T,Y]=n("huxy-collapse"),{width:Q}=$(),b=(0,m.useRef)();return S(b,k=>{Q<=1024&&T&&Y(!1)}),(0,m.useEffect)(()=>{Q<=1024&&T&&Y(!1)},[C]),(0,r.jsx)("aside",{className:"frame-aside",style:z,children:(0,r.jsxs)("div",{ref:b,style:{height:"100%"},children:[d&&(0,r.jsx)(d,{...t}),(0,r.jsx)(c,{data:u,collapsed:T&&Q>1024,Link:x}),g&&(0,r.jsx)(g,{collapsed:T,isSmall:Q<=1024,setCollapsed:Y})]})})},Ze=380,Ke=({inputPath:t,menuAnimate:n="ani-in"})=>{const u=(0,m.useRef)(t.split("?")[0]),d=(0,m.useRef)(),[g,x]=(0,m.useState)("");return(0,m.useEffect)(()=>{const C=t.split("?")[0];return C!==u.current&&(u.current=C,x(` ${n}`),d.current=setTimeout(()=>{x("")},Ze)),()=>{clearTimeout(d.current),x("")}},[t]),g},e=t=>{const{inputPath:n,contentStyle:u,menuAnimate:d,children:g}=t,x=Ke({inputPath:n,menuAnimate:d});return(0,r.jsx)("div",{className:`page-content${x}`,style:u,children:g})};var o=h(675),i={};i.styleTagTransform=oe(),i.setAttributes=re(),i.insert=s().bind(null,"head"),i.domAPI=Fe(),i.insertStyleElement=R();var a=Be()(o.Z,i);const v=o.Z&&o.Z.locals?o.Z.locals:void 0,B=t=>{const{menu:n,current:u,MainTop:d,children:g,inputPath:x,contentStyle:C,menuAnimate:z}=t,T=n?.length,Y=z?z===!0?"ani-in":z:"";return(0,r.jsxs)("div",{className:`frame-container${T?"":" no-sidebar"}`,children:[T?(0,r.jsx)(Ue,{...t}):null,(0,r.jsx)("div",{className:"frame-view",children:(0,r.jsxs)("div",{className:"page-container",children:[d&&(0,r.jsx)(d,{current:u}),Y?(0,r.jsx)(e,{inputPath:x,contentStyle:C,menuAnimate:Y,children:g}):(0,r.jsx)("div",{className:"page-content",style:C,children:g})]})}),(0,r.jsx)("footer",{className:"frame-footer",children:(0,r.jsx)(Ye,{...t})})]})};var W=h(91),D={};D.styleTagTransform=oe(),D.setAttributes=re(),D.insert=s().bind(null,"head"),D.domAPI=Fe(),D.insertStyleElement=R();var N=Be()(W.Z,D);const Z=W.Z&&W.Z.locals?W.Z.locals:void 0,J=t=>{const{useStore:n,vertical:u,horizontal:d,menu:g,leftList:x,rightList:C}=t,{width:z}=$(),[T]=n("huxy-collapse"),Y=z<=1024,Q=Y?g:u,b=Y?[]:d,k=Q?.length,V=b?.length,K=V&&k,U=K?"compose":V?"horizontal":T?"collapsed":"",ae=K&&T?"composeCollapsed":"",pe=x?.length||C?.length?"":"no-header",He=["frame",U,ae,pe].filter(Boolean).join(" ");return(0,r.jsxs)("div",{className:He,children:[(0,r.jsx)(Te,{...t,navMenu:b}),(0,r.jsx)("main",{className:"frame-main",children:(0,r.jsx)(B,{...t,menu:Q})})]})}})();var q=Me.Z}}]);
