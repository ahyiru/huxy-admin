(self.webpackChunk=self.webpackChunk||[]).push([[721],{7309:function(Se,H,l){l.d(H,{Z:function(){return ze}});var he=l(60042),W=l.n(he),f=l(27378),F=l(26775),p=l(92746),Ze=l(649),Q=l(11026),o=l(18808),v=l(25773),y=l(50189),C=l(31542),T=l(83395),O=l(64649),z=l(78730),P=f.forwardRef(function(e,r){var g=e.prefixCls,a=e.style,x=e.className,j=e.duration,K=j===void 0?4.5:j,X=e.eventKey,k=e.content,t=e.closable,i=e.closeIcon,c=i===void 0?"x":i,n=e.props,u=e.onClick,h=e.onNoticeClose,$=e.times,S=f.useState(!1),I=(0,Q.Z)(S,2),G=I[0],V=I[1],Y=function(){h(X)},L=function(Z){(Z.key==="Enter"||Z.code==="Enter"||Z.keyCode===z.Z.ENTER)&&Y()};f.useEffect(function(){if(!G&&K>0){var N=setTimeout(function(){Y()},K*1e3);return function(){clearTimeout(N)}}},[K,G,$]);var b="".concat(g,"-notice");return f.createElement("div",(0,v.Z)({},n,{ref:r,className:W()(b,x,(0,O.Z)({},"".concat(b,"-closable"),t)),style:a,onMouseEnter:function(){V(!0)},onMouseLeave:function(){V(!1)},onClick:u}),f.createElement("div",{className:"".concat(b,"-content")},k),t&&f.createElement("a",{tabIndex:0,className:"".concat(b,"-close"),onKeyDown:L,onClick:function(Z){Z.preventDefault(),Z.stopPropagation(),Y()}},c))}),te=P,ne=f.forwardRef(function(e,r){var g=e.prefixCls,a=g===void 0?"rc-notification":g,x=e.container,j=e.motion,K=e.maxCount,X=e.className,k=e.style,t=e.onAllRemoved,i=f.useState([]),c=(0,Q.Z)(i,2),n=c[0],u=c[1],h=function(N){var Z,B=n.find(function(re){return re.key===N});B==null||(Z=B.onClose)===null||Z===void 0||Z.call(B),u(function(re){return re.filter(function(Ce){return Ce.key!==N})})};f.useImperativeHandle(r,function(){return{open:function(N){u(function(Z){var B=(0,Ze.Z)(Z),re=B.findIndex(function(Ye){return Ye.key===N.key}),Ce=(0,y.Z)({},N);if(re>=0){var He;Ce.times=(((He=Z[re])===null||He===void 0?void 0:He.times)||0)+1,B[re]=Ce}else Ce.times=0,B.push(Ce);return K>0&&B.length>K&&(B=B.slice(-K)),B})},close:function(N){h(N)},destroy:function(){u([])}}});var $=f.useState({}),S=(0,Q.Z)($,2),I=S[0],G=S[1];f.useEffect(function(){var b={};n.forEach(function(N){var Z=N.placement,B=Z===void 0?"topRight":Z;B&&(b[B]=b[B]||[],b[B].push(N))}),Object.keys(I).forEach(function(N){b[N]=b[N]||[]}),G(b)},[n]);var V=function(N){G(function(Z){var B=(0,y.Z)({},Z),re=B[N]||[];return re.length||delete B[N],B})},Y=f.useRef(!1);if(f.useEffect(function(){Object.keys(I).length>0?Y.current=!0:Y.current&&(t?.(),Y.current=!1)},[I]),!x)return null;var L=Object.keys(I);return(0,C.createPortal)(f.createElement(f.Fragment,null,L.map(function(b){var N=I[b],Z=N.map(function(re){return{config:re,key:re.key}}),B=typeof j=="function"?j(b):j;return f.createElement(T.V4,(0,v.Z)({key:b,className:W()(a,"".concat(a,"-").concat(b),X?.(b)),style:k?.(b),keys:Z,motionAppear:!0},B,{onAllRemoved:function(){V(b)}}),function(re,Ce){var He=re.config,Ye=re.className,it=re.style,Ve=He.key,at=He.times,ot=He.className,tt=He.style;return f.createElement(te,(0,v.Z)({},He,{ref:Ce,prefixCls:a,className:W()(Ye,ot),style:(0,y.Z)((0,y.Z)({},it),tt),times:at,key:Ve,eventKey:Ve,onNoticeClose:h}))})})),x)}),ge=ne,pe=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],q=function(){return document.body},ve=0;function Ie(){for(var e={},r=arguments.length,g=new Array(r),a=0;a<r;a++)g[a]=arguments[a];return g.forEach(function(x){x&&Object.keys(x).forEach(function(j){var K=x[j];K!==void 0&&(e[j]=K)})}),e}function Ne(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.getContainer,g=r===void 0?q:r,a=e.motion,x=e.prefixCls,j=e.maxCount,K=e.className,X=e.style,k=e.onAllRemoved,t=(0,o.Z)(e,pe),i=f.useState(),c=(0,Q.Z)(i,2),n=c[0],u=c[1],h=f.useRef(),$=f.createElement(ge,{container:n,ref:h,prefixCls:x,motion:a,maxCount:j,className:K,style:X,onAllRemoved:k}),S=f.useState([]),I=(0,Q.Z)(S,2),G=I[0],V=I[1],Y=f.useMemo(function(){return{open:function(b){var N=Ie(t,b);(N.key===null||N.key===void 0)&&(N.key="rc-notification-".concat(ve),ve+=1),V(function(Z){return[].concat((0,Ze.Z)(Z),[{type:"open",config:N}])})},close:function(b){V(function(N){return[].concat((0,Ze.Z)(N),[{type:"close",key:b}])})},destroy:function(){V(function(b){return[].concat((0,Ze.Z)(b),[{type:"destroy"}])})}}},[]);return f.useEffect(function(){u(g())}),f.useEffect(function(){h.current&&G.length&&(G.forEach(function(L){switch(L.type){case"open":h.current.open(L.config);break;case"close":h.current.close(L.key);break;case"destroy":h.current.destroy();break}}),V([]))},[G]),[Y,$]}var Be=l(14770),_e=l(55222),Qe=l(53058),qe=l(77597),et=l(93326),Xe=function(e,r){var g={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(g[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,a=Object.getOwnPropertySymbols(e);x<a.length;x++)r.indexOf(a[x])<0&&Object.prototype.propertyIsEnumerable.call(e,a[x])&&(g[a[x]]=e[a[x]]);return g};const rt={info:f.createElement(qe.Z,null),success:f.createElement(Be.Z,null),error:f.createElement(_e.Z,null),warning:f.createElement(Qe.Z,null),loading:f.createElement(et.Z,null)},Ue=e=>{let{prefixCls:r,type:g,icon:a,children:x}=e;return f.createElement("div",{className:W()(`${r}-custom-content`,`${r}-${g}`)},a||rt[g],f.createElement("span",null,x))},nt=e=>{const{prefixCls:r,className:g,type:a,icon:x,content:j}=e,K=Xe(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:X}=React.useContext(ConfigContext),k=r||X("message"),[,t]=useStyle(k);return React.createElement(Notice,Object.assign({},K,{prefixCls:k,className:classNames(g,t,`${k}-notice-pure-panel`),eventKey:"pure",duration:null,content:React.createElement(Ue,{prefixCls:k,type:a,icon:x},j)}))};var d=null,w=l(32299),ee=l(72457),M=l(6117),R=l(5515);const me=e=>{const{componentCls:r,iconCls:g,boxShadow:a,colorText:x,colorSuccess:j,colorError:K,colorWarning:X,colorInfo:k,fontSizeLG:t,motionEaseInOutCirc:i,motionDurationSlow:c,marginXS:n,paddingXS:u,borderRadiusLG:h,zIndexPopup:$,contentPadding:S,contentBg:I}=e,G=`${r}-notice`,V=new w.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:u,transform:"translateY(0)",opacity:1}}),Y=new w.E4("MessageMoveOut",{"0%":{maxHeight:e.height,padding:u,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),L={padding:u,textAlign:"center",[`${r}-custom-content > ${g}`]:{verticalAlign:"text-bottom",marginInlineEnd:n,fontSize:t},[`${G}-content`]:{display:"inline-block",padding:S,background:I,borderRadius:h,boxShadow:a,pointerEvents:"all"},[`${r}-success > ${g}`]:{color:j},[`${r}-error > ${g}`]:{color:K},[`${r}-warning > ${g}`]:{color:X},[`${r}-info > ${g},
      ${r}-loading > ${g}`]:{color:k}};return[{[r]:Object.assign(Object.assign({},(0,ee.Wf)(e)),{color:x,position:"fixed",top:n,width:"100%",pointerEvents:"none",zIndex:$,[`${r}-move-up`]:{animationFillMode:"forwards"},[`
        ${r}-move-up-appear,
        ${r}-move-up-enter
      `]:{animationName:V,animationDuration:c,animationPlayState:"paused",animationTimingFunction:i},[`
        ${r}-move-up-appear${r}-move-up-appear-active,
        ${r}-move-up-enter${r}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${r}-move-up-leave`]:{animationName:Y,animationDuration:c,animationPlayState:"paused",animationTimingFunction:i},[`${r}-move-up-leave${r}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[r]:{[G]:Object.assign({},L)}},{[`${r}-notice-pure-panel`]:Object.assign(Object.assign({},L),{padding:0,textAlign:"start"})}]};var le=(0,M.Z)("Message",e=>{const r=(0,R.TS)(e,{height:150});return[me(r)]},e=>({zIndexPopup:e.zIndexPopupBase+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}));function ke(e,r){return{motionName:r??`${e}-move-up`}}function ye(e){let r;const g=new Promise(x=>{r=e(()=>{x(!0)})}),a=()=>{r?.()};return a.then=(x,j)=>g.then(x,j),a.promise=g,a}var Oe=function(e,r){var g={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(g[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,a=Object.getOwnPropertySymbols(e);x<a.length;x++)r.indexOf(a[x])<0&&Object.prototype.propertyIsEnumerable.call(e,a[x])&&(g[a[x]]=e[a[x]]);return g};const ae=8,se=3,ie=f.forwardRef((e,r)=>{const{top:g,prefixCls:a,getContainer:x,maxCount:j,duration:K=se,rtl:X,transitionName:k,onAllRemoved:t}=e,{getPrefixCls:i,getPopupContainer:c,message:n}=f.useContext(F.E_),u=a||i("message"),[,h]=le(u),$=()=>({left:"50%",transform:"translateX(-50%)",top:g??ae}),S=()=>W()(h,{[`${u}-rtl`]:X}),I=()=>ke(u,k),G=f.createElement("span",{className:`${u}-close-x`},f.createElement(p.Z,{className:`${u}-close-icon`})),[V,Y]=Ne({prefixCls:u,style:$,className:S,motion:I,closable:!1,closeIcon:G,duration:K,getContainer:()=>x?.()||c?.()||document.body,maxCount:j,onAllRemoved:t});return f.useImperativeHandle(r,()=>Object.assign(Object.assign({},V),{prefixCls:u,hashId:h,message:n})),Y});let s=0;function m(e){const r=f.useRef(null);return[f.useMemo(()=>{const a=k=>{var t;(t=r.current)===null||t===void 0||t.close(k)},x=k=>{if(!r.current){const N=()=>{};return N.then=()=>{},N}const{open:t,prefixCls:i,hashId:c,message:n}=r.current,u=`${i}-notice`,{content:h,icon:$,type:S,key:I,className:G,style:V,onClose:Y}=k,L=Oe(k,["content","icon","type","key","className","style","onClose"]);let b=I;return b==null&&(s+=1,b=`antd-message-${s}`),ye(N=>(t(Object.assign(Object.assign({},L),{key:b,content:f.createElement(Ue,{prefixCls:i,type:S,icon:$},h),placement:"top",className:W()(S&&`${u}-${S}`,c,G,n?.className),style:Object.assign(Object.assign({},n?.style),V),onClose:()=>{Y?.(),N()}})),()=>{a(b)}))},K={open:x,destroy:k=>{var t;k!==void 0?a(k):(t=r.current)===null||t===void 0||t.destroy()}};return["info","success","warning","error","loading"].forEach(k=>{const t=(i,c,n)=>{let u;i&&typeof i=="object"&&"content"in i?u=i:u={content:i};let h,$;typeof c=="function"?$=c:(h=c,$=n);const S=Object.assign(Object.assign({onClose:$,duration:h},u),{type:k});return x(S)};K[k]=t}),K},[]),f.createElement(ie,Object.assign({key:"message-holder"},e,{ref:r}))]}function U(e){return m(e)}var E=l(77719),D=function(e,r){var g={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(g[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,a=Object.getOwnPropertySymbols(e);x<a.length;x++)r.indexOf(a[x])<0&&Object.prototype.propertyIsEnumerable.call(e,a[x])&&(g[a[x]]=e[a[x]]);return g};const J={info:f.createElement(qe.Z,null),success:f.createElement(Be.Z,null),error:f.createElement(_e.Z,null),warning:f.createElement(Qe.Z,null),loading:f.createElement(et.Z,null)};function oe(e,r){return r===null||r===!1?null:r||f.createElement("span",{className:`${e}-close-x`},f.createElement(p.Z,{className:`${e}-close-icon`}))}const ce={success:Be.Z,info:qe.Z,error:_e.Z,warning:Qe.Z},fe=e=>{const{prefixCls:r,icon:g,type:a,message:x,description:j,btn:K,role:X="alert"}=e;let k=null;return g?k=f.createElement("span",{className:`${r}-icon`},g):a&&(k=f.createElement(ce[a]||null,{className:W()(`${r}-icon`,`${r}-icon-${a}`)})),f.createElement("div",{className:W()({[`${r}-with-icon`]:k}),role:X},k,f.createElement("div",{className:`${r}-message`},x),f.createElement("div",{className:`${r}-description`},j),K&&f.createElement("div",{className:`${r}-btn`},K))},ue=e=>{const{prefixCls:r,className:g,icon:a,type:x,message:j,description:K,btn:X,closable:k=!0,closeIcon:t}=e,i=D(e,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon"]),{getPrefixCls:c}=React.useContext(ConfigContext),n=r||c("notification"),u=`${n}-notice`,[,h]=useStyle(n);return React.createElement(Notice,Object.assign({},i,{prefixCls:n,className:classNames(g,h,`${u}-pure-panel`),eventKey:"pure",duration:null,closable:k,closeIcon:oe(n,t),content:React.createElement(fe,{prefixCls:u,icon:a,type:x,message:j,description:K,btn:X})}))};var de=null,$e=e=>{const{componentCls:r,width:g,notificationMarginEdge:a}=e,x=new w.E4("antNotificationTopFadeIn",{"0%":{marginTop:"-100%",opacity:0},"100%":{marginTop:0,opacity:1}}),j=new w.E4("antNotificationBottomFadeIn",{"0%":{marginBottom:"-100%",opacity:0},"100%":{marginBottom:0,opacity:1}}),K=new w.E4("antNotificationLeftFadeIn",{"0%":{right:{_skip_check_:!0,value:g},opacity:0},"100%":{right:{_skip_check_:!0,value:0},opacity:1}});return{[`&${r}-top, &${r}-bottom`]:{marginInline:0},[`&${r}-top`]:{[`${r}-fade-enter${r}-fade-enter-active, ${r}-fade-appear${r}-fade-appear-active`]:{animationName:x}},[`&${r}-bottom`]:{[`${r}-fade-enter${r}-fade-enter-active, ${r}-fade-appear${r}-fade-appear-active`]:{animationName:j}},[`&${r}-topLeft, &${r}-bottomLeft`]:{marginInlineEnd:0,marginInlineStart:a,[`${r}-fade-enter${r}-fade-enter-active, ${r}-fade-appear${r}-fade-appear-active`]:{animationName:K}}}};const Pe=e=>{const{iconCls:r,componentCls:g,boxShadow:a,fontSizeLG:x,notificationMarginBottom:j,borderRadiusLG:K,colorSuccess:X,colorInfo:k,colorWarning:t,colorError:i,colorTextHeading:c,notificationBg:n,notificationPadding:u,notificationMarginEdge:h,motionDurationMid:$,motionEaseInOut:S,fontSize:I,lineHeight:G,width:V,notificationIconSize:Y,colorText:L}=e,b=`${g}-notice`,N=new w.E4("antNotificationFadeIn",{"0%":{left:{_skip_check_:!0,value:V},opacity:0},"100%":{left:{_skip_check_:!0,value:0},opacity:1}}),Z=new w.E4("antNotificationFadeOut",{"0%":{maxHeight:e.animationMaxHeight,marginBottom:j,opacity:1},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}}),B={position:"relative",width:V,maxWidth:`calc(100vw - ${h*2}px)`,marginBottom:j,marginInlineStart:"auto",padding:u,overflow:"hidden",lineHeight:G,wordWrap:"break-word",background:n,borderRadius:K,boxShadow:a,[`${g}-close-icon`]:{fontSize:I,cursor:"pointer"},[`${b}-message`]:{marginBottom:e.marginXS,color:c,fontSize:x,lineHeight:e.lineHeightLG},[`${b}-description`]:{fontSize:I,color:L},[`&${b}-closable ${b}-message`]:{paddingInlineEnd:e.paddingLG},[`${b}-with-icon ${b}-message`]:{marginBottom:e.marginXS,marginInlineStart:e.marginSM+Y,fontSize:x},[`${b}-with-icon ${b}-description`]:{marginInlineStart:e.marginSM+Y,fontSize:I},[`${b}-icon`]:{position:"absolute",fontSize:Y,lineHeight:0,[`&-success${r}`]:{color:X},[`&-info${r}`]:{color:k},[`&-warning${r}`]:{color:t},[`&-error${r}`]:{color:i}},[`${b}-close`]:{position:"absolute",top:e.notificationPaddingVertical,insetInlineEnd:e.notificationPaddingHorizontal,color:e.colorIcon,outline:"none",width:e.notificationCloseButtonSize,height:e.notificationCloseButtonSize,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.wireframe?"transparent":e.colorFillContent}},[`${b}-btn`]:{float:"right",marginTop:e.marginSM}};return[{[g]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,ee.Wf)(e)),{position:"fixed",zIndex:e.zIndexPopup,marginInlineEnd:h,[`${g}-hook-holder`]:{position:"relative"},[`&${g}-top, &${g}-bottom`]:{[b]:{marginInline:"auto auto"}},[`&${g}-topLeft, &${g}-bottomLeft`]:{[b]:{marginInlineEnd:"auto",marginInlineStart:0}},[`${g}-fade-enter, ${g}-fade-appear`]:{animationDuration:e.motionDurationMid,animationTimingFunction:S,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${g}-fade-leave`]:{animationTimingFunction:S,animationFillMode:"both",animationDuration:$,animationPlayState:"paused"},[`${g}-fade-enter${g}-fade-enter-active, ${g}-fade-appear${g}-fade-appear-active`]:{animationName:N,animationPlayState:"running"},[`${g}-fade-leave${g}-fade-leave-active`]:{animationName:Z,animationPlayState:"running"}}),$e(e)),{"&-rtl":{direction:"rtl",[`${b}-btn`]:{float:"left"}}})},{[g]:{[b]:Object.assign({},B)}},{[`${b}-pure-panel`]:Object.assign(Object.assign({},B),{margin:0})}]};var Ee=(0,M.Z)("Notification",e=>{const r=e.paddingMD,g=e.paddingLG,a=(0,R.TS)(e,{notificationBg:e.colorBgElevated,notificationPaddingVertical:r,notificationPaddingHorizontal:g,notificationIconSize:e.fontSizeLG*e.lineHeightLG,notificationCloseButtonSize:e.controlHeightLG*.55,notificationMarginBottom:e.margin,notificationPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,notificationMarginEdge:e.marginLG,animationMaxHeight:150});return[Pe(a)]},e=>({zIndexPopup:e.zIndexPopupBase+50,width:384}));function A(e,r,g){let a;switch(e){case"top":a={left:"50%",transform:"translateX(-50%)",right:"auto",top:r,bottom:"auto"};break;case"topLeft":a={left:0,top:r,bottom:"auto"};break;case"topRight":a={right:0,top:r,bottom:"auto"};break;case"bottom":a={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:g};break;case"bottomLeft":a={left:0,top:"auto",bottom:g};break;default:a={right:0,top:"auto",bottom:g};break}return a}function _(e){return{motionName:`${e}-fade`}}var Le=function(e,r){var g={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(g[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,a=Object.getOwnPropertySymbols(e);x<a.length;x++)r.indexOf(a[x])<0&&Object.prototype.propertyIsEnumerable.call(e,a[x])&&(g[a[x]]=e[a[x]]);return g};const je=24,Me=4.5,Re=f.forwardRef((e,r)=>{const{top:g,bottom:a,prefixCls:x,getContainer:j,maxCount:K,rtl:X,onAllRemoved:k}=e,{getPrefixCls:t,getPopupContainer:i,notification:c}=f.useContext(F.E_),n=x||t("notification"),u=V=>A(V,g??je,a??je),[,h]=Ee(n),$=()=>W()(h,{[`${n}-rtl`]:X}),S=()=>_(n),[I,G]=Ne({prefixCls:n,style:u,className:$,motion:S,closable:!0,closeIcon:oe(n),duration:Me,getContainer:()=>j?.()||i?.()||document.body,maxCount:K,onAllRemoved:k});return f.useImperativeHandle(r,()=>Object.assign(Object.assign({},I),{prefixCls:n,hashId:h,notification:c})),G});function xe(e){const r=f.useRef(null);return[f.useMemo(()=>{const a=X=>{if(!r.current)return;const{open:k,prefixCls:t,hashId:i,notification:c}=r.current,n=`${t}-notice`,{message:u,description:h,icon:$,type:S,btn:I,className:G,style:V,role:Y="alert",closeIcon:L}=X,b=Le(X,["message","description","icon","type","btn","className","style","role","closeIcon"]),N=oe(n,L);return k(Object.assign(Object.assign({placement:"topRight"},b),{content:f.createElement(fe,{prefixCls:n,icon:$,type:S,message:u,description:h,btn:I,role:Y}),className:W()(S&&`${n}-${S}`,i,G,c?.className),style:Object.assign(Object.assign({},c?.style),V),closeIcon:N,closable:!!N}))},j={open:a,destroy:X=>{var k,t;X!==void 0?(k=r.current)===null||k===void 0||k.close(X):(t=r.current)===null||t===void 0||t.destroy()}};return["success","info","warning","error"].forEach(X=>{j[X]=k=>a(Object.assign(Object.assign({},k),{type:X}))}),j},[]),f.createElement(Re,Object.assign({key:"notification-holder"},e,{ref:r}))]}function be(e){return xe(e)}const We=f.createContext({});var Te=f.createContext({message:{},notification:{},modal:{}});const Ke=e=>{const{componentCls:r,colorText:g,fontSize:a,lineHeight:x,fontFamily:j}=e;return{[r]:{color:g,fontSize:a,lineHeight:x,fontFamily:j}}};var Ae=(0,M.Z)("App",e=>[Ke(e)]);const Ge=()=>f.useContext(Te),De=e=>{const{prefixCls:r,children:g,className:a,rootClassName:x,message:j,notification:K,style:X}=e,{getPrefixCls:k}=(0,f.useContext)(F.E_),t=k("app",r),[i,c]=Ae(t),n=W()(c,t,a,x),u=(0,f.useContext)(We),h=f.useMemo(()=>({message:Object.assign(Object.assign({},u.message),j),notification:Object.assign(Object.assign({},u.notification),K)}),[j,K,u.message,u.notification]),[$,S]=U(h.message),[I,G]=be(h.notification),[V,Y]=(0,E.Z)(),L=f.useMemo(()=>({message:$,notification:I,modal:V}),[$,I,V]);return i(f.createElement(Te.Provider,{value:L},f.createElement(We.Provider,{value:h},f.createElement("div",{className:n,style:X},Y,S,G,g))))};De.useApp=Ge;var ze=De},93602:function(Se,H,l){l.d(H,{Z:function(){return nt}});var he=l(60042),W=l.n(he),f=l(83395),F=l(27378),p=l(97933),Ze=l(93795),Q=l(26775),o=l(32299),v=l(72457),y=l(9540),C=l(6117),T=l(5515);const O=new o.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),z=new o.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),P=new o.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),te=new o.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),ne=new o.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),ge=new o.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),pe=d=>{const{componentCls:w,iconCls:ee,antCls:M,badgeFontHeight:R,badgeShadowSize:me,badgeHeightSm:le,motionDurationSlow:ke,badgeStatusSize:ye,marginXS:Oe,badgeRibbonOffset:ae}=d,se=`${M}-scroll-number`,ie=`${M}-ribbon`,s=`${M}-ribbon-wrapper`,m=(0,y.Z)(d,(E,D)=>{let{darkColor:J}=D;return{[`&${w} ${w}-color-${E}`]:{background:J,[`&:not(${w}-count)`]:{color:J}}}}),U=(0,y.Z)(d,(E,D)=>{let{darkColor:J}=D;return{[`&${ie}-color-${E}`]:{background:J,color:J}}});return{[w]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,v.Wf)(d)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${w}-count`]:{zIndex:d.badgeZIndex,minWidth:d.badgeHeight,height:d.badgeHeight,color:d.badgeTextColor,fontWeight:d.badgeFontWeight,fontSize:d.badgeFontSize,lineHeight:`${d.badgeHeight}px`,whiteSpace:"nowrap",textAlign:"center",background:d.badgeColor,borderRadius:d.badgeHeight/2,boxShadow:`0 0 0 ${me}px ${d.badgeShadowColor}`,transition:`background ${d.motionDurationMid}`,a:{color:d.badgeTextColor},"a:hover":{color:d.badgeTextColor},"a:hover &":{background:d.badgeColorHover}},[`${w}-count-sm`]:{minWidth:le,height:le,fontSize:d.badgeFontSizeSm,lineHeight:`${le}px`,borderRadius:le/2},[`${w}-multiple-words`]:{padding:`0 ${d.paddingXS}px`},[`${w}-dot`]:{zIndex:d.badgeZIndex,width:d.badgeDotSize,minWidth:d.badgeDotSize,height:d.badgeDotSize,background:d.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${me}px ${d.badgeShadowColor}`},[`${w}-dot${se}`]:{transition:`background ${ke}`},[`${w}-count, ${w}-dot, ${se}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${ee}-spin`]:{animationName:ge,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${w}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${w}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:ye,height:ye,verticalAlign:"middle",borderRadius:"50%"},[`${w}-status-success`]:{backgroundColor:d.colorSuccess},[`${w}-status-processing`]:{position:"relative",color:d.colorPrimary,backgroundColor:d.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:me,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:O,animationDuration:d.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${w}-status-default`]:{backgroundColor:d.colorTextPlaceholder},[`${w}-status-error`]:{backgroundColor:d.colorError},[`${w}-status-warning`]:{backgroundColor:d.colorWarning},[`${w}-status-text`]:{marginInlineStart:Oe,color:d.colorText,fontSize:d.fontSize}}}),m),{[`${w}-zoom-appear, ${w}-zoom-enter`]:{animationName:z,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack,animationFillMode:"both"},[`${w}-zoom-leave`]:{animationName:P,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack,animationFillMode:"both"},[`&${w}-not-a-wrapper`]:{[`${w}-zoom-appear, ${w}-zoom-enter`]:{animationName:te,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack},[`${w}-zoom-leave`]:{animationName:ne,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack},[`&:not(${w}-status)`]:{verticalAlign:"middle"},[`${se}-custom-component, ${w}-count`]:{transform:"none"},[`${se}-custom-component, ${se}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${se}`]:{overflow:"hidden",[`${se}-only`]:{position:"relative",display:"inline-block",height:d.badgeHeight,transition:`all ${d.motionDurationSlow} ${d.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${se}-only-unit`]:{height:d.badgeHeight,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${se}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${w}-count, ${w}-dot, ${se}-custom-component`]:{transform:"translate(-50%, -50%)"}}}),[`${s}`]:{position:"relative"},[`${ie}`]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,v.Wf)(d)),{position:"absolute",top:Oe,padding:`0 ${d.paddingXS}px`,color:d.colorPrimary,lineHeight:`${R}px`,whiteSpace:"nowrap",backgroundColor:d.colorPrimary,borderRadius:d.borderRadiusSM,[`${ie}-text`]:{color:d.colorTextLightSolid},[`${ie}-corner`]:{position:"absolute",top:"100%",width:ae,height:ae,color:"currentcolor",border:`${ae/2}px solid`,transform:d.badgeRibbonCornerTransform,transformOrigin:"top",filter:d.badgeRibbonCornerFilter}}),U),{[`&${ie}-placement-end`]:{insetInlineEnd:-ae,borderEndEndRadius:0,[`${ie}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${ie}-placement-start`]:{insetInlineStart:-ae,borderEndStartRadius:0,[`${ie}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var q=(0,C.Z)("Badge",d=>{const{fontSize:w,lineHeight:ee,fontSizeSM:M,lineWidth:R,marginXS:me,colorBorderBg:le}=d,ke=Math.round(w*ee),ye=R,Oe="auto",ae=ke-2*ye,se=d.colorBgContainer,ie="normal",s=M,m=d.colorError,U=d.colorErrorHover,E=w,D=M/2,J=M,oe=M/2,ce=(0,T.TS)(d,{badgeFontHeight:ke,badgeShadowSize:ye,badgeZIndex:Oe,badgeHeight:ae,badgeTextColor:se,badgeFontWeight:ie,badgeFontSize:s,badgeColor:m,badgeColorHover:U,badgeShadowColor:le,badgeHeightSm:E,badgeDotSize:D,badgeFontSizeSm:J,badgeStatusSize:oe,badgeProcessingDuration:"1.2s",badgeRibbonOffset:me,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"});return[pe(ce)]}),Ie=d=>{const{className:w,prefixCls:ee,style:M,color:R,children:me,text:le,placement:ke="end"}=d,{getPrefixCls:ye,direction:Oe}=F.useContext(Q.E_),ae=ye("ribbon",ee),se=(0,p.o2)(R,!1),ie=W()(ae,`${ae}-placement-${ke}`,{[`${ae}-rtl`]:Oe==="rtl",[`${ae}-color-${R}`]:se},w),[s,m]=q(ae),U={},E={};return R&&!se&&(U.background=R,E.color=R),s(F.createElement("div",{className:W()(`${ae}-wrapper`,m)},me,F.createElement("div",{className:W()(ie,m),style:Object.assign(Object.assign({},U),M)},F.createElement("span",{className:`${ae}-text`},le),F.createElement("div",{className:`${ae}-corner`,style:E}))))};function Ne(d){let{prefixCls:w,value:ee,current:M,offset:R=0}=d,me;return R&&(me={position:"absolute",top:`${R}00%`,left:0}),F.createElement("span",{style:me,className:W()(`${w}-only-unit`,{current:M})},ee)}function Be(d,w,ee){let M=d,R=0;for(;(M+10)%10!==w;)M+=ee,R+=ee;return R}function _e(d){const{prefixCls:w,count:ee,value:M}=d,R=Number(M),me=Math.abs(ee),[le,ke]=F.useState(R),[ye,Oe]=F.useState(me),ae=()=>{ke(R),Oe(me)};F.useEffect(()=>{const s=setTimeout(()=>{ae()},1e3);return()=>{clearTimeout(s)}},[R]);let se,ie;if(le===R||Number.isNaN(R)||Number.isNaN(le))se=[F.createElement(Ne,Object.assign({},d,{key:R,current:!0}))],ie={transition:"none"};else{se=[];const s=R+10,m=[];for(let D=R;D<=s;D+=1)m.push(D);const U=m.findIndex(D=>D%10===le);se=m.map((D,J)=>{const oe=D%10;return F.createElement(Ne,Object.assign({},d,{key:D,value:oe,offset:J-U,current:J===U}))});const E=ye<me?1:-1;ie={transform:`translateY(${-Be(le,R,E)}00%)`}}return F.createElement("span",{className:`${w}-only`,style:ie,onTransitionEnd:ae},se)}var Qe=function(d,w){var ee={};for(var M in d)Object.prototype.hasOwnProperty.call(d,M)&&w.indexOf(M)<0&&(ee[M]=d[M]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,M=Object.getOwnPropertySymbols(d);R<M.length;R++)w.indexOf(M[R])<0&&Object.prototype.propertyIsEnumerable.call(d,M[R])&&(ee[M[R]]=d[M[R]]);return ee},et=F.forwardRef((d,w)=>{const{prefixCls:ee,count:M,className:R,motionClassName:me,style:le,title:ke,show:ye,component:Oe="sup",children:ae}=d,se=Qe(d,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:ie}=F.useContext(Q.E_),s=ie("scroll-number",ee),m=Object.assign(Object.assign({},se),{"data-show":ye,style:le,className:W()(s,R,me),title:ke});let U=M;if(M&&Number(M)%1===0){const E=String(M).split("");U=E.map((D,J)=>F.createElement(_e,{prefixCls:s,count:Number(M),value:D,key:E.length-J}))}return le&&le.borderColor&&(m.style=Object.assign(Object.assign({},le),{boxShadow:`0 0 0 1px ${le.borderColor} inset`})),ae?(0,Ze.Tm)(ae,E=>({className:W()(`${s}-custom-component`,E?.className,me)})):F.createElement(Oe,Object.assign({},m,{ref:w}),U)}),Xe=function(d,w){var ee={};for(var M in d)Object.prototype.hasOwnProperty.call(d,M)&&w.indexOf(M)<0&&(ee[M]=d[M]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,M=Object.getOwnPropertySymbols(d);R<M.length;R++)w.indexOf(M[R])<0&&Object.prototype.propertyIsEnumerable.call(d,M[R])&&(ee[M[R]]=d[M[R]]);return ee};const rt=(d,w)=>{var ee,M,R,me,le;const{prefixCls:ke,scrollNumberPrefixCls:ye,children:Oe,status:ae,text:se,color:ie,count:s=null,overflowCount:m=99,dot:U=!1,size:E="default",title:D,offset:J,style:oe,className:ce,rootClassName:fe,classNames:ue,styles:de,showZero:we=!1}=d,$e=Xe(d,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:Pe,direction:Ee,badge:A}=F.useContext(Q.E_),_=Pe("badge",ke),[Le,je]=q(_),Me=s>m?`${m}+`:s,Re=Me==="0"||Me===0,xe=s===null||Re&&!we,be=(ae!=null||ie!=null)&&xe,We=U&&!Re,Fe=We?"":Me,Te=(0,F.useMemo)(()=>(Fe==null||Fe===""||Re&&!we)&&!We,[Fe,Re,we,We]),Ke=(0,F.useRef)(s);Te||(Ke.current=s);const Ae=Ke.current,Ge=(0,F.useRef)(Fe);Te||(Ge.current=Fe);const De=Ge.current,ze=(0,F.useRef)(We);Te||(ze.current=We);const e=(0,F.useMemo)(()=>{if(!J)return Object.assign(Object.assign({},A?.style),oe);const k={marginTop:J[1]};return Ee==="rtl"?k.left=parseInt(J[0],10):k.right=-parseInt(J[0],10),Object.assign(Object.assign(Object.assign({},k),A?.style),oe)},[Ee,J,oe,A?.style]),r=D??(typeof Ae=="string"||typeof Ae=="number"?Ae:void 0),g=Te||!se?null:F.createElement("span",{className:`${_}-status-text`},se),a=!Ae||typeof Ae!="object"?void 0:(0,Ze.Tm)(Ae,k=>({style:Object.assign(Object.assign({},e),k.style)})),x=(0,p.o2)(ie,!1),j=W()(ue?.indicator,(ee=A?.classNames)===null||ee===void 0?void 0:ee.indicator,{[`${_}-status-dot`]:be,[`${_}-status-${ae}`]:!!ae,[`${_}-color-${ie}`]:x}),K={};ie&&!x&&(K.color=ie,K.background=ie);const X=W()(_,{[`${_}-status`]:be,[`${_}-not-a-wrapper`]:!Oe,[`${_}-rtl`]:Ee==="rtl"},ce,fe,A?.className,(M=A?.classNames)===null||M===void 0?void 0:M.root,ue?.root,je);if(!Oe&&be){const k=e.color;return Le(F.createElement("span",Object.assign({},$e,{className:X,style:Object.assign(Object.assign(Object.assign({},de?.root),(R=A?.styles)===null||R===void 0?void 0:R.root),e)}),F.createElement("span",{className:j,style:Object.assign(Object.assign(Object.assign({},de?.indicator),(me=A?.styles)===null||me===void 0?void 0:me.indicator),K)}),se&&F.createElement("span",{style:{color:k},className:`${_}-status-text`},se)))}return Le(F.createElement("span",Object.assign({ref:w},$e,{className:X,style:Object.assign(Object.assign({},(le=A?.styles)===null||le===void 0?void 0:le.root),de?.root)}),Oe,F.createElement(f.ZP,{visible:!Te,motionName:`${_}-zoom`,motionAppear:!1,motionDeadline:1e3},k=>{let{className:t,ref:i}=k;var c,n;const u=Pe("scroll-number",ye),h=ze.current,$=W()(ue?.indicator,(c=A?.classNames)===null||c===void 0?void 0:c.indicator,{[`${_}-dot`]:h,[`${_}-count`]:!h,[`${_}-count-sm`]:E==="small",[`${_}-multiple-words`]:!h&&De&&De.toString().length>1,[`${_}-status-${ae}`]:!!ae,[`${_}-color-${ie}`]:x});let S=Object.assign(Object.assign(Object.assign({},de?.indicator),(n=A?.styles)===null||n===void 0?void 0:n.indicator),e);return ie&&!x&&(S=S||{},S.background=ie),F.createElement(et,{prefixCls:u,show:!Te,motionClassName:t,className:$,count:De,title:r,style:S,key:"scrollNumber",ref:i},a)}),g))},Ue=F.forwardRef(rt);Ue.Ribbon=Ie;var nt=Ue},26591:function(Se,H,l){l.d(H,{Z:function(){return ie}});var he=l(60042),W=l.n(he),f=l(50189),F=l(11026),p=l(27378),Ze=l(81412),Q=l(99664),o=l(64649),v=l(25773),y=l(83395),C=l(78730),T=l(91864),O=p.createContext(null),z=O,P=function(m){var U=m.prefixCls,E=m.className,D=m.style,J=m.children,oe=m.containerRef,ce=m.onMouseEnter,fe=m.onMouseOver,ue=m.onMouseLeave,de=m.onClick,we=m.onKeyDown,$e=m.onKeyUp,Pe={onMouseEnter:ce,onMouseOver:fe,onMouseLeave:ue,onClick:de,onKeyDown:we,onKeyUp:$e};return p.createElement(p.Fragment,null,p.createElement("div",(0,v.Z)({className:W()("".concat(U,"-content"),E),style:(0,f.Z)({},D),"aria-modal":"true",role:"dialog",ref:oe},Pe),J))},te=P,ne=l(74485);function ge(s){return typeof s=="string"&&String(Number(s))===s?((0,ne.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(s)):s}function pe(s){warning(!("wrapperClassName"in s),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!s.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var q={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function ve(s,m){var U,E,D,J,oe=s.prefixCls,ce=s.open,fe=s.placement,ue=s.inline,de=s.push,we=s.forceRender,$e=s.autoFocus,Pe=s.keyboard,Ee=s.rootClassName,A=s.rootStyle,_=s.zIndex,Le=s.className,je=s.style,Me=s.motion,Re=s.width,xe=s.height,be=s.children,We=s.contentWrapperStyle,Fe=s.mask,Te=s.maskClosable,Ke=s.maskMotion,Ae=s.maskClassName,Ge=s.maskStyle,De=s.afterOpenChange,ze=s.onClose,e=s.onMouseEnter,r=s.onMouseOver,g=s.onMouseLeave,a=s.onClick,x=s.onKeyDown,j=s.onKeyUp,K=p.useRef(),X=p.useRef(),k=p.useRef();p.useImperativeHandle(m,function(){return K.current});var t=function(B){var re=B.keyCode,Ce=B.shiftKey;switch(re){case C.Z.TAB:{if(re===C.Z.TAB){if(!Ce&&document.activeElement===k.current){var He;(He=X.current)===null||He===void 0||He.focus({preventScroll:!0})}else if(Ce&&document.activeElement===X.current){var Ye;(Ye=k.current)===null||Ye===void 0||Ye.focus({preventScroll:!0})}}break}case C.Z.ESC:{ze&&Pe&&(B.stopPropagation(),ze(B));break}}};p.useEffect(function(){if(ce&&$e){var Z;(Z=K.current)===null||Z===void 0||Z.focus({preventScroll:!0})}},[ce]);var i=p.useState(!1),c=(0,F.Z)(i,2),n=c[0],u=c[1],h=p.useContext(z),$;de===!1?$={distance:0}:de===!0?$={}:$=de||{};var S=(U=(E=(D=$)===null||D===void 0?void 0:D.distance)!==null&&E!==void 0?E:h?.pushDistance)!==null&&U!==void 0?U:180,I=p.useMemo(function(){return{pushDistance:S,push:function(){u(!0)},pull:function(){u(!1)}}},[S]);p.useEffect(function(){if(ce){var Z;h==null||(Z=h.push)===null||Z===void 0||Z.call(h)}else{var B;h==null||(B=h.pull)===null||B===void 0||B.call(h)}},[ce]),p.useEffect(function(){return function(){var Z;h==null||(Z=h.pull)===null||Z===void 0||Z.call(h)}},[]);var G=Fe&&p.createElement(y.ZP,(0,v.Z)({key:"mask"},Ke,{visible:ce}),function(Z,B){var re=Z.className,Ce=Z.style;return p.createElement("div",{className:W()("".concat(oe,"-mask"),re,Ae),style:(0,f.Z)((0,f.Z)({},Ce),Ge),onClick:Te&&ce?ze:void 0,ref:B})}),V=typeof Me=="function"?Me(fe):Me,Y={};if(n&&S)switch(fe){case"top":Y.transform="translateY(".concat(S,"px)");break;case"bottom":Y.transform="translateY(".concat(-S,"px)");break;case"left":Y.transform="translateX(".concat(S,"px)");break;default:Y.transform="translateX(".concat(-S,"px)");break}fe==="left"||fe==="right"?Y.width=ge(Re):Y.height=ge(xe);var L={onMouseEnter:e,onMouseOver:r,onMouseLeave:g,onClick:a,onKeyDown:x,onKeyUp:j},b=p.createElement(y.ZP,(0,v.Z)({key:"panel"},V,{visible:ce,forceRender:we,onVisibleChanged:function(B){De?.(B)},removeOnLeave:!1,leavedClassName:"".concat(oe,"-content-wrapper-hidden")}),function(Z,B){var re=Z.className,Ce=Z.style;return p.createElement("div",(0,v.Z)({className:W()("".concat(oe,"-content-wrapper"),re),style:(0,f.Z)((0,f.Z)((0,f.Z)({},Y),Ce),We)},(0,T.Z)(s,{data:!0})),p.createElement(te,(0,v.Z)({containerRef:B,prefixCls:oe,className:Le,style:je},L),be))}),N=(0,f.Z)({},A);return _&&(N.zIndex=_),p.createElement(z.Provider,{value:I},p.createElement("div",{className:W()(oe,"".concat(oe,"-").concat(fe),Ee,(J={},(0,o.Z)(J,"".concat(oe,"-open"),ce),(0,o.Z)(J,"".concat(oe,"-inline"),ue),J)),style:N,tabIndex:-1,ref:K,onKeyDown:t},G,p.createElement("div",{tabIndex:0,ref:X,style:q,"aria-hidden":"true","data-sentinel":"start"}),b,p.createElement("div",{tabIndex:0,ref:k,style:q,"aria-hidden":"true","data-sentinel":"end"})))}var Ie=p.forwardRef(ve),Ne=Ie,Be=function(m){var U=m.open,E=U===void 0?!1:U,D=m.prefixCls,J=D===void 0?"rc-drawer":D,oe=m.placement,ce=oe===void 0?"right":oe,fe=m.autoFocus,ue=fe===void 0?!0:fe,de=m.keyboard,we=de===void 0?!0:de,$e=m.width,Pe=$e===void 0?378:$e,Ee=m.mask,A=Ee===void 0?!0:Ee,_=m.maskClosable,Le=_===void 0?!0:_,je=m.getContainer,Me=m.forceRender,Re=m.afterOpenChange,xe=m.destroyOnClose,be=m.onMouseEnter,We=m.onMouseOver,Fe=m.onMouseLeave,Te=m.onClick,Ke=m.onKeyDown,Ae=m.onKeyUp,Ge=p.useState(!1),De=(0,F.Z)(Ge,2),ze=De[0],e=De[1],r=p.useState(!1),g=(0,F.Z)(r,2),a=g[0],x=g[1];(0,Q.Z)(function(){x(!0)},[]);var j=a?E:!1,K=p.useRef(),X=p.useRef();(0,Q.Z)(function(){j&&(X.current=document.activeElement)},[j]);var k=function(n){var u;if(e(n),Re?.(n),!n&&X.current&&!(!((u=K.current)===null||u===void 0)&&u.contains(X.current))){var h;(h=X.current)===null||h===void 0||h.focus({preventScroll:!0})}};if(!Me&&!ze&&!j&&xe)return null;var t={onMouseEnter:be,onMouseOver:We,onMouseLeave:Fe,onClick:Te,onKeyDown:Ke,onKeyUp:Ae},i=(0,f.Z)((0,f.Z)({},m),{},{open:j,prefixCls:J,placement:ce,autoFocus:ue,keyboard:we,width:Pe,mask:A,maskClosable:Le,inline:je===!1,afterOpenChange:k,ref:K},t);return p.createElement(Ze.Z,{open:j||Me||ze,autoDestroy:!1,getContainer:je,autoLock:A&&(j||ze)},p.createElement(Ne,i))},_e=Be,Qe=_e,qe=l(80821),et=l(26775),Xe=l(84006),rt=l(60467),nt=s=>{const{prefixCls:m,title:U,footer:E,extra:D,closeIcon:J,closable:oe,onClose:ce,headerStyle:fe,drawerStyle:ue,bodyStyle:de,footerStyle:we,children:$e}=s,Pe=p.useCallback(je=>p.createElement("button",{type:"button",onClick:ce,"aria-label":"Close",className:`${m}-close`},je),[ce]),[Ee,A]=(0,rt.Z)(oe,J,Pe,void 0,!0),_=p.useMemo(()=>!U&&!Ee?null:p.createElement("div",{style:fe,className:W()(`${m}-header`,{[`${m}-header-close-only`]:Ee&&!U&&!D})},p.createElement("div",{className:`${m}-header-title`},A,U&&p.createElement("div",{className:`${m}-title`},U)),D&&p.createElement("div",{className:`${m}-extra`},D)),[Ee,A,D,fe,m,U]),Le=p.useMemo(()=>{if(!E)return null;const je=`${m}-footer`;return p.createElement("div",{className:je,style:we},E)},[E,we,m]);return p.createElement("div",{className:`${m}-wrapper-body`,style:ue},_,p.createElement("div",{className:`${m}-body`,style:de},$e),Le)},d=l(31630),w=l(6117),ee=l(5515),R=s=>{const{componentCls:m,motionDurationSlow:U}=s,E={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${U}`}}};return{[m]:{[`${m}-mask-motion`]:{"&-enter, &-appear, &-leave":{"&-active":{transition:`all ${U}`}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}},[`${m}-panel-motion`]:{"&-left":[E,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[E,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[E,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[E,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}}}};const me=s=>{const{componentCls:m,zIndexPopup:U,colorBgMask:E,colorBgElevated:D,motionDurationSlow:J,motionDurationMid:oe,padding:ce,paddingLG:fe,fontSizeLG:ue,lineHeightLG:de,lineWidth:we,lineType:$e,colorSplit:Pe,marginSM:Ee,colorIcon:A,colorIconHover:_,colorText:Le,fontWeightStrong:je,footerPaddingBlock:Me,footerPaddingInline:Re}=s,xe=`${m}-content-wrapper`;return{[m]:{position:"fixed",inset:0,zIndex:U,pointerEvents:"none","&-pure":{position:"relative",background:D,[`&${m}-left`]:{boxShadow:s.boxShadowDrawerLeft},[`&${m}-right`]:{boxShadow:s.boxShadowDrawerRight},[`&${m}-top`]:{boxShadow:s.boxShadowDrawerUp},[`&${m}-bottom`]:{boxShadow:s.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${m}-mask`]:{position:"absolute",inset:0,zIndex:U,background:E,pointerEvents:"auto"},[xe]:{position:"absolute",zIndex:U,maxWidth:"100vw",transition:`all ${J}`,"&-hidden":{display:"none"}},[`&-left > ${xe}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:s.boxShadowDrawerLeft},[`&-right > ${xe}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:s.boxShadowDrawerRight},[`&-top > ${xe}`]:{top:0,insetInline:0,boxShadow:s.boxShadowDrawerUp},[`&-bottom > ${xe}`]:{bottom:0,insetInline:0,boxShadow:s.boxShadowDrawerDown},[`${m}-content`]:{width:"100%",height:"100%",overflow:"auto",background:D,pointerEvents:"auto"},[`${m}-wrapper-body`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},[`${m}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${ce}px ${fe}px`,fontSize:ue,lineHeight:de,borderBottom:`${we}px ${$e} ${Pe}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${m}-extra`]:{flex:"none"},[`${m}-close`]:{display:"inline-block",marginInlineEnd:Ee,color:A,fontWeight:je,fontSize:ue,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${oe}`,textRendering:"auto","&:focus, &:hover":{color:_,textDecoration:"none"}},[`${m}-title`]:{flex:1,margin:0,color:Le,fontWeight:s.fontWeightStrong,fontSize:ue,lineHeight:de},[`${m}-body`]:{flex:1,minWidth:0,minHeight:0,padding:fe,overflow:"auto"},[`${m}-footer`]:{flexShrink:0,padding:`${Me}px ${Re}px`,borderTop:`${we}px ${$e} ${Pe}`},"&-rtl":{direction:"rtl"}}}};var le=(0,w.Z)("Drawer",s=>{const m=(0,ee.TS)(s,{});return[me(m),R(m)]},s=>({zIndexPopup:s.zIndexPopupBase,footerPaddingBlock:s.paddingXS,footerPaddingInline:s.padding})),ke=function(s,m){var U={};for(var E in s)Object.prototype.hasOwnProperty.call(s,E)&&m.indexOf(E)<0&&(U[E]=s[E]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,E=Object.getOwnPropertySymbols(s);D<E.length;D++)m.indexOf(E[D])<0&&Object.prototype.propertyIsEnumerable.call(s,E[D])&&(U[E[D]]=s[E[D]]);return U};const ye=null,Oe={distance:180};function ae(s){var m;const{rootClassName:U,width:E,height:D,size:J="default",mask:oe=!0,push:ce=Oe,open:fe,afterOpenChange:ue,onClose:de,prefixCls:we,getContainer:$e,style:Pe,className:Ee,visible:A,afterVisibleChange:_}=s,Le=ke(s,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"]),{getPopupContainer:je,getPrefixCls:Me,direction:Re,drawer:xe}=p.useContext(et.E_),be=Me("drawer",we),[We,Fe]=le(be),Te=$e===void 0&&je?()=>je(document.body):$e,Ke=W()({"no-mask":!oe,[`${be}-rtl`]:Re==="rtl"},U,Fe),Ae=p.useMemo(()=>E??(J==="large"?736:378),[E,J]),Ge=p.useMemo(()=>D??(J==="large"?736:378),[D,J]),De={motionName:(0,qe.mL)(be,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},ze=e=>({motionName:(0,qe.mL)(be,`panel-motion-${e}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500});return We(p.createElement(d.BR,null,p.createElement(Xe.Ux,{status:!0,override:!0},p.createElement(Qe,Object.assign({prefixCls:be,onClose:de,maskMotion:De,motion:ze},Le,{open:fe??A,mask:oe,push:ce,width:Ae,height:Ge,style:Object.assign(Object.assign({},xe?.style),Pe),className:W()(xe?.className,Ee),rootClassName:Ke,getContainer:Te,afterOpenChange:ue??_}),p.createElement(nt,Object.assign({prefixCls:be},Le,{onClose:de}))))))}function se(s){var{prefixCls:m,style:U,className:E,placement:D="right"}=s,J=ke(s,["prefixCls","style","className","placement"]);const{getPrefixCls:oe}=p.useContext(et.E_),ce=oe("drawer",m),[fe,ue]=le(ce);return fe(p.createElement("div",{className:W()(ce,`${ce}-pure`,`${ce}-${D}`,ue,E),style:U},p.createElement(nt,Object.assign({prefixCls:ce},J))))}ae._InternalPanelDoNotUseOrYouWillBeFired=se;var ie=ae},85270:function(Se,H,l){var he=l(73203).default;Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var W=he(l(22313)),f=W.default;H.default=f},33527:function(Se,H,l){var he=l(73203).default;Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var W=he(l(10792)),f=W.default;H.default=f},22313:function(Se,H,l){var he=l(73203).default;Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var W=he(l(91412)),f=he(l(14339)),p={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},W.default),timePickerLocale:Object.assign({},f.default)};H.default=p},10792:function(Se,H,l){var he=l(73203).default;Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var W=he(l(71480)),f=he(l(47071));const F={lang:Object.assign({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},W.default),timePickerLocale:Object.assign({},f.default)};F.lang.ok="\u786E\u5B9A";var p=F;H.default=p},75183:function(Se,H,l){var he,W=l(73203).default;he={value:!0},H.Z=void 0;var f=W(l(51367)),F=W(l(85270)),p=W(l(22313)),Ze=W(l(14339));const Q="${label} is not a valid ${type}";var v={locale:"en",Pagination:f.default,DatePicker:p.default,TimePicker:Ze.default,Calendar:F.default,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:Q,method:Q,array:Q,object:Q,number:Q,date:Q,boolean:Q,integer:Q,float:Q,regexp:Q,email:Q,url:Q,hex:Q},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}};H.Z=v},81107:function(Se,H,l){var he,W=l(73203).default;he={value:!0},H.Z=void 0;var f=W(l(95160)),F=W(l(33527)),p=W(l(10792)),Ze=W(l(47071));const Q="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}";var v={locale:"zh-cn",Pagination:f.default,DatePicker:p.default,TimePicker:Ze.default,Calendar:F.default,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:Q,method:Q,array:Q,object:Q,number:Q,date:Q,boolean:Q,integer:Q,float:Q,regexp:Q,email:Q,url:Q,hex:Q},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}};H.Z=v},14339:function(Se,H){Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var he={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};H.default=he},47071:function(Se,H){Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var he={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]};H.default=he},51367:function(Se,H){Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var l={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};H.default=l},95160:function(Se,H){Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var l={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"};H.default=l},91412:function(Se,H){Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var l={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},he=l;H.default=he},71480:function(Se,H){Object.defineProperty(H,"__esModule",{value:!0}),H.default=void 0;var l={locale:"zh_CN",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA"},he=l;H.default=he},73203:function(Se){function H(l){return l&&l.__esModule?l:{default:l}}Se.exports=H,Se.exports.__esModule=!0,Se.exports.default=Se.exports},66274:function(Se,H,l){var he;l.d(H,{Z:function(){return Q}});var W=l(27378),f={942:(o,v,y)=>{y.d(v,{Z:()=>te});var C=y(601),T=y.n(C),O=y(609),z=y.n(O),P=z()(T());P.push([o.id,`.node-right-icon-close {
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
`,""]),P.locals={};const te=P},84:(o,v,y)=>{y.d(v,{Z:()=>te});var C=y(601),T=y.n(C),O=y(609),z=y.n(O),P=z()(T());P.push([o.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]),P.locals={};const te=P},91:(o,v,y)=>{y.d(v,{Z:()=>te});var C=y(601),T=y.n(C),O=y(609),z=y.n(O),P=z()(T());P.push([o.id,`.frame {
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
`,""]),P.locals={};const te=P},505:(o,v,y)=>{y.d(v,{Z:()=>te});var C=y(601),T=y.n(C),O=y(609),z=y.n(O),P=z()(T());P.push([o.id,`.clear::after {
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
`,""]),P.locals={};const te=P},675:(o,v,y)=>{y.d(v,{Z:()=>te});var C=y(601),T=y.n(C),O=y(609),z=y.n(O),P=z()(T());P.push([o.id,`@keyframes ani-fade-in {
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
`,""]),P.locals={};const te=P},609:o=>{o.exports=function(v){var y=[];return y.toString=function(){return this.map(function(C){var T="",O=typeof C[5]<"u";return C[4]&&(T+="@supports (".concat(C[4],") {")),C[2]&&(T+="@media ".concat(C[2]," {")),O&&(T+="@layer".concat(C[5].length>0?" ".concat(C[5]):""," {")),T+=v(C),O&&(T+="}"),C[2]&&(T+="}"),C[4]&&(T+="}"),T}).join("")},y.i=function(C,T,O,z,P){typeof C=="string"&&(C=[[null,C,void 0]]);var te={};if(O)for(var ne=0;ne<this.length;ne++){var ge=this[ne][0];ge!=null&&(te[ge]=!0)}for(var pe=0;pe<C.length;pe++){var q=[].concat(C[pe]);O&&te[q[0]]||(typeof P<"u"&&(typeof q[5]>"u"||(q[1]="@layer".concat(q[5].length>0?" ".concat(q[5]):""," {").concat(q[1],"}")),q[5]=P),T&&(q[2]&&(q[1]="@media ".concat(q[2]," {").concat(q[1],"}")),q[2]=T),z&&(q[4]?(q[1]="@supports (".concat(q[4],") {").concat(q[1],"}"),q[4]=z):q[4]="".concat(z)),y.push(q))}},y}},601:o=>{o.exports=function(v){return v[1]}},837:(o,v,y)=>{var C=y(810),T=Symbol.for("react.element"),O=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,P=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,te={key:!0,ref:!0,__self:!0,__source:!0};function ne(ge,pe,q){var ve,Ie={},Ne=null,Be=null;q!==void 0&&(Ne=""+q),pe.key!==void 0&&(Ne=""+pe.key),pe.ref!==void 0&&(Be=pe.ref);for(ve in pe)z.call(pe,ve)&&!te.hasOwnProperty(ve)&&(Ie[ve]=pe[ve]);if(ge&&ge.defaultProps)for(ve in pe=ge.defaultProps,pe)Ie[ve]===void 0&&(Ie[ve]=pe[ve]);return{$$typeof:T,type:ge,key:Ne,ref:Be,props:Ie,_owner:P.current}}v.Fragment=O,v.jsx=ne,v.jsxs=ne},322:(o,v,y)=>{o.exports=y(837)},62:o=>{var v=[];function y(O){for(var z=-1,P=0;P<v.length;P++)if(v[P].identifier===O){z=P;break}return z}function C(O,z){for(var P={},te=[],ne=0;ne<O.length;ne++){var ge=O[ne],pe=z.base?ge[0]+z.base:ge[0],q=P[pe]||0,ve="".concat(pe," ").concat(q);P[pe]=q+1;var Ie=y(ve),Ne={css:ge[1],media:ge[2],sourceMap:ge[3],supports:ge[4],layer:ge[5]};if(Ie!==-1)v[Ie].references++,v[Ie].updater(Ne);else{var Be=T(Ne,z);z.byIndex=ne,v.splice(ne,0,{identifier:ve,updater:Be,references:1})}te.push(ve)}return te}function T(O,z){var P=z.domAPI(z);P.update(O);var te=function(ne){if(ne){if(ne.css===O.css&&ne.media===O.media&&ne.sourceMap===O.sourceMap&&ne.supports===O.supports&&ne.layer===O.layer)return;P.update(O=ne)}else P.remove()};return te}o.exports=function(O,z){z=z||{},O=O||[];var P=C(O,z);return function(te){te=te||[];for(var ne=0;ne<P.length;ne++){var ge=P[ne],pe=y(ge);v[pe].references--}for(var q=C(te,z),ve=0;ve<P.length;ve++){var Ie=P[ve],Ne=y(Ie);v[Ne].references===0&&(v[Ne].updater(),v.splice(Ne,1))}P=q}}},793:o=>{var v={};function y(T){if(typeof v[T]>"u"){var O=document.querySelector(T);if(window.HTMLIFrameElement&&O instanceof window.HTMLIFrameElement)try{O=O.contentDocument.head}catch{O=null}v[T]=O}return v[T]}function C(T,O){var z=y(T);if(!z)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");z.appendChild(O)}o.exports=C},173:o=>{function v(y){var C=document.createElement("style");return y.setAttributes(C,y.attributes),y.insert(C,y.options),C}o.exports=v},892:(o,v,y)=>{function C(T){var O=y.nc;O&&T.setAttribute("nonce",O)}o.exports=C},36:o=>{function v(T,O,z){var P="";z.supports&&(P+="@supports (".concat(z.supports,") {")),z.media&&(P+="@media ".concat(z.media," {"));var te=typeof z.layer<"u";te&&(P+="@layer".concat(z.layer.length>0?" ".concat(z.layer):""," {")),P+=z.css,te&&(P+="}"),z.media&&(P+="}"),z.supports&&(P+="}");var ne=z.sourceMap;ne&&typeof btoa<"u"&&(P+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ne))))," */")),O.styleTagTransform(P,T,O.options)}function y(T){if(T.parentNode===null)return!1;T.parentNode.removeChild(T)}function C(T){if(typeof document>"u")return{update:function(){},remove:function(){}};var O=T.insertStyleElement(T);return{update:function(z){v(O,T,z)},remove:function(){y(O)}}}o.exports=C},464:o=>{function v(y,C){if(C.styleSheet)C.styleSheet.cssText=y;else{for(;C.firstChild;)C.removeChild(C.firstChild);C.appendChild(document.createTextNode(y))}}o.exports=v},810:o=>{var v=C=>{var T={};return p.d(T,C),T},y=C=>()=>C;o.exports=he||(he=l.t(W,2))}},F={};function p(o){var v=F[o];if(v!==void 0)return v.exports;var y=F[o]={id:o,exports:{}};return f[o](y,y.exports,p),y.exports}p.n=o=>{var v=o&&o.__esModule?()=>o.default:()=>o;return p.d(v,{a:v}),v},p.d=(o,v)=>{for(var y in v)p.o(v,y)&&!p.o(o,y)&&Object.defineProperty(o,y,{enumerable:!0,get:v[y]})},p.o=(o,v)=>Object.prototype.hasOwnProperty.call(o,v),p.nc=void 0;var Ze={};(()=>{p.d(Ze,{Z:()=>k});var o=p(322),v=p(810);const y=()=>![typeof window,typeof document].includes("undefined"),C=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),T=t=>C(t).indexOf("element")>-1,O=(t=null)=>y()?T(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},z=(t={})=>{const i=(0,v.useRef)(0),[c,n]=(0,v.useState)(t),u=(0,v.useCallback)(h=>{cancelAnimationFrame(i.current),i.current=requestAnimationFrame(()=>n(h))},[]);return(0,v.useEffect)(()=>()=>cancelAnimationFrame(i.current),[]),[c,u]},P=()=>{const[t,i]=z(O());return(0,v.useEffect)(()=>{const c=()=>i(O());return window.addEventListener("resize",c,!1),()=>window.removeEventListener("resize",c,!1)},[]),t},te=t=>C(t)==="array",ne=(t,i,c="id",n="children")=>{if(!te(t))return null;const u=h=>{for(let $=0,S=h.length;$<S;$++){const I=h[$];if(I[c]===i)return[I];if(te(I[n])){const G=u(I[n]);if(G)return[I].concat(G)}}};return u(t)},ge=t=>++t,pe=()=>{const[,t]=(0,v.useState)(0);return(0,v.useCallback)(()=>t(ge),[])},q=t=>te(t)&&!!t.length,ve=({to:t,preventDefault:i,stopPropagation:c,...n})=>i?(0,o.jsx)("span",{...n}):(0,o.jsx)("a",{href:t,...n}),Ie=({item:t,...i})=>(0,o.jsx)("ul",{...i}),Ne=(t,...i)=>{const c={};return Object.keys(t).filter(Boolean).map(n=>{c[n]=u=>t[n](u,...i)}),c},Be=({data:t=[],events:i={},List:c=Ie,Link:n=ve,leftIcon:u,rightIcon:h,isHorizontal:$,isCollapsed:S,level:I=0,parentOpen:G=!0})=>{const V=S&&!I,Y=!$&&!S&&!G;return t.map(L=>{const{name:b,path:N,icon:Z,rightIcon:B,active:re,open:Ce,children:He,linkProps:Ye}=L,it=q(He),Ve=L.id||N||b,at=V?L.title??b:void 0,ot=Y?"hidden":"",tt=Z??u,Je=B??h,lt=tt?(0,o.jsx)("div",{className:"node-left-icon",children:tt===!0?(0,o.jsx)("i",{className:"default-left-icon"}):tt}):null,st=b?(0,o.jsx)("div",{className:"node-text",children:(0,o.jsx)("span",{children:b})}):null;if(it){const ct=Ne(i,L,I),dt=[ot,Ce?"open":""].filter(Boolean).join(" ");return(0,o.jsxs)("li",{className:dt,"has-children":"true",...ct,children:[(0,o.jsxs)(n,{title:at,className:`link${re?" active":""}`,to:N,preventDefault:!0,stopPropagation:!1,...Ye,children:[lt,st,Je?(0,o.jsx)("div",{className:"node-right-icon",children:Je===!0?(0,o.jsx)("i",{className:"default-right-icon"}):Je}):null]}),(0,o.jsx)(c,{item:L,children:Be({data:He,events:i,List:c,Link:n,leftIcon:u,rightIcon:h,isHorizontal:$,isCollapsed:S,level:I+1,parentOpen:!!Ce})})]},Ve)}return(0,o.jsx)("li",{className:ot,children:(0,o.jsxs)(n,{title:at,className:`link${re?" active":""}`,to:N,...Ye,children:[lt,st]})},Ve)})},_e=Be,Qe=t=>{const{children:i,open:c}=t;let n=0;if(c&&i?.length){n=i.length;let u=0;return i.map(h=>u+=Qe(h)),n+u}return n},qe=({item:t,style:i,...c})=>(0,o.jsx)("ul",{style:{...i,"--count":Qe(t)},...c});var et=p(62),Xe=p.n(et),rt=p(36),Ue=p.n(rt),nt=p(793),d=p.n(nt),w=p(892),ee=p.n(w),M=p(173),R=p.n(M),me=p(464),le=p.n(me),ke=p(942),ye={};ye.styleTagTransform=le(),ye.setAttributes=ee(),ye.insert=d().bind(null,"head"),ye.domAPI=Ue(),ye.insertStyleElement=R();var Oe=Xe()(ke.Z,ye);const ae=ke.Z&&ke.Z.locals?ke.Z.locals:void 0,se=t=>(0,o.jsx)("ul",{...t}),ie=(t,i)=>t?qe:({item:c,...n})=>(0,o.jsx)(se,{className:i==="right"?"left":"",...n}),s=t=>{const{data:i=[],collapsed:c=!1,type:n="vertical",Link:u,width:h,bgColor:$,itemHeight:S,collapsedWidth:I,itemPadding:G,style:V,className:Y,...L}=t,b=(0,v.useRef)(),N=(0,v.useRef)();(0,v.useEffect)(()=>()=>clearTimeout(b.current),[]);const Z=pe(),B=n==="horizontal",re=!B&&c,Ce={onClick:(ot,tt)=>{if(ot.stopPropagation(),!B&&!re){const Je=ne(i,tt.path,"path"),lt=Je[Je.length-1];lt.open=!lt.open,Z()}},onMouseEnter:(ot,tt,Je)=>{re&&!Je&&(clearTimeout(b.current),N.current.style.width="var(--maxWidth)")},onMouseLeave:(ot,tt,Je)=>{re&&!Je&&(b.current=setTimeout(()=>N.current.style.width="",200))}},He=(B?["huxy-horizontal-tree",Y]:["huxy-tree",Y,re?"collapsed":""]).filter(Boolean).join(" "),{float:Ye,...it}=L?.style??{},Ve={"--bgColor":$,"--itemHeight":S,"--nodeListWidth":h,...it};B?(Ve["--itemPadding"]=G,Ve["--nodeFloat"]=Ye):(Ve["--width"]=h,Ve["--collapsedWidth"]=I);const at=ie(!B&&!re,Ye);return(0,o.jsx)("div",{ref:N,className:He,style:Ve,...L,children:(0,o.jsx)("div",{className:"huxy-tree-track",children:(0,o.jsx)("ul",{className:"huxy-tree-root",children:_e({data:i,events:Ce,List:at,Link:u,leftIcon:!0,rightIcon:!0,isHorizontal:B,isCollapsed:re})})})})},m=(t,i)=>Object.prototype.hasOwnProperty.call(t??{},i),U=t=>m(t,"current"),E=(t,i,c="click")=>{(0,v.useEffect)(()=>{const n=h=>{const $=U(t)?t.current:t;$?.contains&&!$.contains(h.target)&&i(h)},u=typeof c=="string"?[c]:c;return u.map(h=>{document.addEventListener(h,n,!1)}),()=>{u.map(h=>{document.removeEventListener(h,n,!1)})}},[t,i,c])},D=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),J=t=>new Promise((i,c)=>{const n=new FileReader;n.readAsDataURL(t),n.addEventListener("load",()=>i(n.result)),n.addEventListener("error",u=>c(u))}),oe=async t=>{if(!D(t))return t;const i=await(await fetch(decodeURIComponent(t))).blob();return await J(i)},ce=t=>{const[i,c]=(0,v.useState)(t);return(0,v.useEffect)(()=>{(async n=>{const u=await oe(n);c(u)})(t)},[t]),i},fe=({src:t,...i})=>{const c=ce(t);return(0,o.jsx)("img",{...i,src:c})},ue=({Ricon:t,open:i})=>t===!0?(0,o.jsx)("i",{className:`huxy-header-angle-${i?"top":"bt"}`}):(0,o.jsx)(t,{status:i}),de=({img:t,name:i,icon:c,Ricon:n,open:u})=>t?(0,o.jsxs)("div",{className:"avatar",children:[(0,o.jsx)("div",{className:"img",children:(0,o.jsx)(fe,{src:t,width:"1",height:"1",crossOrigin:"anonymous",alt:"avatar"})}),i?(0,o.jsx)("span",{className:"txt",children:i}):null,n?(0,o.jsx)("span",{className:"node-icon",children:(0,o.jsx)(ue,{Ricon:n,open:u})}):null]}):(0,o.jsxs)(o.Fragment,{children:[c?(0,o.jsx)("span",{className:"node-icon",children:c}):null,i?(0,o.jsx)("span",{className:"txt",children:i}):null,n?(0,o.jsx)("span",{className:"node-icon",children:(0,o.jsx)(ue,{Ricon:n,open:u})}):null]}),we=({item:t,open:i})=>{const{Custom:c,img:n,name:u,icon:h,Ricon:$,active:S}=t;return typeof c=="function"?(0,o.jsx)(c,{item:t,className:"link"}):(0,o.jsx)("span",{className:`link${S?" active":""}`,title:t.title||u,children:(0,o.jsx)(de,{img:n,name:u,icon:h,Ricon:$,open:i})})},$e=({item:t,click:i})=>{const c=(0,v.useRef)(),[n,u]=(0,v.useState)(!1);E(c,L=>n&&u(!1));const{arrowDir:h,ChildRender:$,children:S,smShow:I}=t,G=S?.length,V=(L,b,N=null)=>{N===!1&&u(Z=>!Z),N&&(L.stopPropagation(),u(!1)),i(b,N)},Y=I?"sm-show":"";return G||$?(0,o.jsxs)("li",{ref:c,className:`${Y} ${n?"open":""}`,onClick:L=>V(L,t,!1),children:[(0,o.jsx)(we,{item:t,open:n}),(0,o.jsx)("ul",{className:`huxy-header-arrow-${h||"rt"}`,children:G?S.map((L,b)=>(0,o.jsx)("li",{className:L.divider?"divider":"",children:(0,o.jsxs)("span",{onClick:N=>V(N,L,!0),className:`link${L.active?" active":""}`,children:[L.icon?(0,o.jsx)("span",{className:"node-icon",children:L.icon}):null,(0,o.jsx)("span",{className:"drop-label",children:L.name})]})},`subItem-${b}-${L.key||L.name}`)):(0,o.jsx)("li",{children:(0,o.jsx)($,{item:t,close:()=>u(!1)})})})]}):(0,o.jsx)("li",{onClick:L=>V(L,t),className:Y,children:(0,o.jsx)(we,{item:t,open:n})})},Pe=({list:t,click:i})=>(0,o.jsx)("ul",{children:t.map((c,n)=>(0,o.jsx)($e,{click:i,item:c},`navItem-${n}-${c.key||c.name}`))}),Ee=t=>{const{leftList:i,rightList:c,handleNavClick:n,logo:u,title:h,Link:$}=t;return(0,o.jsxs)("div",{className:"header",children:[(0,o.jsxs)($,{className:"banner",to:"/",children:[u?(0,o.jsx)("div",{className:"logo",children:(0,o.jsx)("img",{width:"1",height:"1",src:u,alt:"logo"})}):null,(0,o.jsx)("div",{className:"title",children:h??"Dashboard"})]}),(0,o.jsx)("div",{className:"nav",children:(0,o.jsxs)("div",{className:"nav-wrap",children:[(0,o.jsx)("div",{className:"nav-left",children:(0,o.jsx)(Pe,{list:i,click:n})}),(0,o.jsx)("div",{className:"nav-right",children:(0,o.jsx)(Pe,{list:c,click:n})})]})})]})};var A=p(505),_={};_.styleTagTransform=le(),_.setAttributes=ee(),_.insert=d().bind(null,"head"),_.domAPI=Ue(),_.insertStyleElement=R();var Le=Xe()(A.Z,_);const je=A.Z&&A.Z.locals?A.Z.locals:void 0,Me=({language:t,...i})=>(0,v.useMemo)(()=>(0,o.jsx)(Ee,{...i}),[t]),Re=t=>{const{navMenu:i,headerStyle:c,navMenuStyle:n,Link:u,leftList:h,rightList:$,handleNavClick:S,logo:I,title:G,language:V}=t;return(0,o.jsxs)("header",{className:"frame-header",style:c,children:[h?.length||$?.length?(0,o.jsx)(Me,{Link:u,leftList:h,rightList:$,handleNavClick:(Y,L)=>S(t,Y,L),logo:I,title:G,language:V}):null,i?.length?(0,o.jsx)(s,{data:i,type:"horizontal",Link:u,style:n}):null]})};var xe=p(84),be={};be.styleTagTransform=le(),be.setAttributes=ee(),be.insert=d().bind(null,"head"),be.domAPI=Ue(),be.insertStyleElement=R();var We=Xe()(xe.Z,be);const Fe=xe.Z&&xe.Z.locals?xe.Z.locals:void 0,Te=({Footer:t})=>(0,o.jsx)("div",{className:"footer",children:t?(0,o.jsx)(t,{}):"copyright \xA9 2020-2022"}),Ke=t=>{const{useStore:i,menu:c,MenuTop:n,MenuBottom:u,Link:h,inputPath:$,asideStyle:S}=t,[I,G]=i("huxy-collapse"),{width:V}=P(),Y=(0,v.useRef)();return E(Y,L=>{V<=1024&&I&&G(!1)}),(0,v.useEffect)(()=>{V<=1024&&I&&G(!1)},[$]),(0,o.jsx)("aside",{className:"frame-aside",style:S,children:(0,o.jsxs)("div",{ref:Y,style:{height:"100%"},children:[n&&(0,o.jsx)(n,{...t}),(0,o.jsx)(s,{data:c,collapsed:I&&V>1024,Link:h}),u&&(0,o.jsx)(u,{collapsed:I,isSmall:V<=1024,setCollapsed:G})]})})},Ae=380,Ge=({inputPath:t,menuAnimate:i="ani-in"})=>{const c=(0,v.useRef)(t.split("?")[0]),n=(0,v.useRef)(),[u,h]=(0,v.useState)("");return(0,v.useEffect)(()=>{const $=t.split("?")[0];return $!==c.current&&(c.current=$,h(` ${i}`),n.current=setTimeout(()=>{h("")},Ae)),()=>{clearTimeout(n.current),h("")}},[t]),u},De=t=>{const{inputPath:i,contentStyle:c,menuAnimate:n,children:u}=t,h=Ge({inputPath:i,menuAnimate:n});return(0,o.jsx)("div",{className:`page-content${h}`,style:c,children:u})};var ze=p(675),e={};e.styleTagTransform=le(),e.setAttributes=ee(),e.insert=d().bind(null,"head"),e.domAPI=Ue(),e.insertStyleElement=R();var r=Xe()(ze.Z,e);const g=ze.Z&&ze.Z.locals?ze.Z.locals:void 0,a=t=>{const{menu:i,current:c,MainTop:n,children:u,inputPath:h,contentStyle:$,menuAnimate:S}=t,I=i?.length,G=S?S===!0?"ani-in":S:"";return(0,o.jsxs)("div",{className:`frame-container${I?"":" no-sidebar"}`,children:[I?(0,o.jsx)(Ke,{...t}):null,(0,o.jsx)("div",{className:"frame-view",children:(0,o.jsxs)("div",{className:"page-container",children:[n&&(0,o.jsx)(n,{current:c}),G?(0,o.jsx)(De,{inputPath:h,contentStyle:$,menuAnimate:G,children:u}):(0,o.jsx)("div",{className:"page-content",style:$,children:u})]})}),(0,o.jsx)("footer",{className:"frame-footer",children:(0,o.jsx)(Te,{...t})})]})};var x=p(91),j={};j.styleTagTransform=le(),j.setAttributes=ee(),j.insert=d().bind(null,"head"),j.domAPI=Ue(),j.insertStyleElement=R();var K=Xe()(x.Z,j);const X=x.Z&&x.Z.locals?x.Z.locals:void 0,k=t=>{const{useStore:i,vertical:c,horizontal:n,menu:u,leftList:h,rightList:$}=t,{width:S}=P(),[I]=i("huxy-collapse"),G=S<=1024,V=G?u:c,Y=G?[]:n,L=V?.length,b=Y?.length,N=b&&L,Z=N?"compose":b?"horizontal":I?"collapsed":"",B=N&&I?"composeCollapsed":"",re=h?.length||$?.length?"":"no-header",Ce=["frame",Z,B,re].filter(Boolean).join(" ");return(0,o.jsxs)("div",{className:Ce,children:[(0,o.jsx)(Re,{...t,navMenu:Y}),(0,o.jsx)("main",{className:"frame-main",children:(0,o.jsx)(a,{...t,menu:V})})]})}})();var Q=Ze.Z}}]);
