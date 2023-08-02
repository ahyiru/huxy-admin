(self.webpackChunk=self.webpackChunk||[]).push([[721],{7309:function(Be,D,u){u.d(D,{Z:function(){return je}});var he=u(60042),F=u.n(he),f=u(27378),W=u(26775),m=u(92746),Te=u(649),V=u(11026),o=u(18808),v=u(25773),y=u(50189),w=u(31542),M=u(83395),P=u(64649),O=u(78730),S=f.forwardRef(function(e,r){var g=e.prefixCls,n=e.style,x=e.className,Z=e.duration,U=Z===void 0?4.5:Z,B=e.eventKey,t=e.content,a=e.closable,h=e.closeIcon,l=h===void 0?"x":h,c=e.props,i=e.onClick,k=e.onNoticeClose,E=e.times,H=f.useState(!1),T=(0,V.Z)(H,2),X=T[0],Y=T[1],j=function(){k(B)},J=function(L){(L.key==="Enter"||L.code==="Enter"||L.keyCode===O.Z.ENTER)&&j()};f.useEffect(function(){if(!X&&U>0){var C=setTimeout(function(){j()},U*1e3);return function(){clearTimeout(C)}}},[U,X,E]);var b="".concat(g,"-notice");return f.createElement("div",(0,v.Z)({},c,{ref:r,className:F()(b,x,(0,P.Z)({},"".concat(b,"-closable"),a)),style:n,onMouseEnter:function(){Y(!0)},onMouseLeave:function(){Y(!1)},onClick:i}),f.createElement("div",{className:"".concat(b,"-content")},t),a&&f.createElement("a",{tabIndex:0,className:"".concat(b,"-close"),onKeyDown:J,onClick:function(L){L.preventDefault(),L.stopPropagation(),j()}},l))}),te=S,re=f.forwardRef(function(e,r){var g=e.prefixCls,n=g===void 0?"rc-notification":g,x=e.container,Z=e.motion,U=e.maxCount,B=e.className,t=e.style,a=e.onAllRemoved,h=f.useState([]),l=(0,V.Z)(h,2),c=l[0],i=l[1],k=function(C){var L,G=c.find(function(ue){return ue.key===C});G==null||(L=G.onClose)===null||L===void 0||L.call(G),i(function(ue){return ue.filter(function(He){return He.key!==C})})};f.useImperativeHandle(r,function(){return{open:function(C){i(function(L){var G=(0,Te.Z)(L),ue=G.findIndex(function(nt){return nt.key===C.key}),He=(0,y.Z)({},C);if(ue>=0){var ze;He.times=(((ze=L[ue])===null||ze===void 0?void 0:ze.times)||0)+1,G[ue]=He}else He.times=0,G.push(He);return U>0&&G.length>U&&(G=G.slice(-U)),G})},close:function(C){k(C)},destroy:function(){i([])}}});var E=f.useState({}),H=(0,V.Z)(E,2),T=H[0],X=H[1];f.useEffect(function(){var b={};c.forEach(function(C){var L=C.placement,G=L===void 0?"topRight":L;G&&(b[G]=b[G]||[],b[G].push(C))}),Object.keys(T).forEach(function(C){b[C]=b[C]||[]}),X(b)},[c]);var Y=function(C){X(function(L){var G=(0,y.Z)({},L),ue=G[C]||[];return ue.length||delete G[C],G})},j=f.useRef(!1);if(f.useEffect(function(){Object.keys(T).length>0?j.current=!0:j.current&&(a?.(),j.current=!1)},[T]),!x)return null;var J=Object.keys(T);return(0,w.createPortal)(f.createElement(f.Fragment,null,J.map(function(b){var C=T[b],L=C.map(function(ue){return{config:ue,key:ue.key}}),G=typeof Z=="function"?Z(b):Z;return f.createElement(M.V4,(0,v.Z)({key:b,className:F()(n,"".concat(n,"-").concat(b),B?.(b)),style:t?.(b),keys:L,motionAppear:!0},G,{onAllRemoved:function(){Y(b)}}),function(ue,He){var ze=ue.config,nt=ue.className,Je=ue.style,it=ze.key,ot=ze.times,tt=ze.className,Xe=ze.style;return f.createElement(te,(0,v.Z)({},ze,{ref:He,prefixCls:n,className:F()(nt,tt),style:(0,y.Z)((0,y.Z)({},Je),Xe),times:ot,key:it,eventKey:it,onNoticeClose:k}))})})),x)}),ge=re,me=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved"],q=function(){return document.body},ve=0;function Ie(){for(var e={},r=arguments.length,g=new Array(r),n=0;n<r;n++)g[n]=arguments[n];return g.forEach(function(x){x&&Object.keys(x).forEach(function(Z){var U=x[Z];U!==void 0&&(e[Z]=U)})}),e}function $e(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=e.getContainer,g=r===void 0?q:r,n=e.motion,x=e.prefixCls,Z=e.maxCount,U=e.className,B=e.style,t=e.onAllRemoved,a=(0,o.Z)(e,me),h=f.useState(),l=(0,V.Z)(h,2),c=l[0],i=l[1],k=f.useRef(),E=f.createElement(ge,{container:c,ref:k,prefixCls:x,motion:n,maxCount:Z,className:U,style:B,onAllRemoved:t}),H=f.useState([]),T=(0,V.Z)(H,2),X=T[0],Y=T[1],j=f.useMemo(function(){return{open:function(b){var C=Ie(a,b);(C.key===null||C.key===void 0)&&(C.key="rc-notification-".concat(ve),ve+=1),Y(function(L){return[].concat((0,Te.Z)(L),[{type:"open",config:C}])})},close:function(b){Y(function(C){return[].concat((0,Te.Z)(C),[{type:"close",key:b}])})},destroy:function(){Y(function(b){return[].concat((0,Te.Z)(b),[{type:"destroy"}])})}}},[]);return f.useEffect(function(){i(g())}),f.useEffect(function(){k.current&&X.length&&(X.forEach(function(J){switch(J.type){case"open":k.current.open(J.config);break;case"close":k.current.close(J.key);break;case"destroy":k.current.destroy();break}}),Y([]))},[X]),[j,E]}var Fe=u(14770),_e=u(55222),Qe=u(53058),qe=u(77597),et=u(93326),Ve=function(e,r){var g={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(g[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,n=Object.getOwnPropertySymbols(e);x<n.length;x++)r.indexOf(n[x])<0&&Object.prototype.propertyIsEnumerable.call(e,n[x])&&(g[n[x]]=e[n[x]]);return g};const rt={info:f.createElement(qe.Z,null),success:f.createElement(Fe.Z,null),error:f.createElement(_e.Z,null),warning:f.createElement(Qe.Z,null),loading:f.createElement(et.Z,null)},Ke=e=>{let{prefixCls:r,type:g,icon:n,children:x}=e;return f.createElement("div",{className:F()(`${r}-custom-content`,`${r}-${g}`)},n||rt[g],f.createElement("span",null,x))},at=e=>{const{prefixCls:r,className:g,type:n,icon:x,content:Z}=e,U=Ve(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:B}=React.useContext(ConfigContext),t=r||B("message"),[,a]=useStyle(t);return React.createElement(Notice,Object.assign({},U,{prefixCls:t,className:classNames(g,a,`${t}-notice-pure-panel`),eventKey:"pure",duration:null,content:React.createElement(Ke,{prefixCls:t,type:n,icon:x},Z)}))};var d=null,$=u(9372),ee=u(72457),z=u(6117),I=u(5515);const pe=e=>{const{componentCls:r,iconCls:g,boxShadow:n,colorText:x,colorSuccess:Z,colorError:U,colorWarning:B,colorInfo:t,fontSizeLG:a,motionEaseInOutCirc:h,motionDurationSlow:l,marginXS:c,paddingXS:i,borderRadiusLG:k,zIndexPopup:E,contentPadding:H,contentBg:T}=e,X=`${r}-notice`,Y=new $.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:i,transform:"translateY(0)",opacity:1}}),j=new $.E4("MessageMoveOut",{"0%":{maxHeight:e.height,padding:i,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),J={padding:i,textAlign:"center",[`${r}-custom-content > ${g}`]:{verticalAlign:"text-bottom",marginInlineEnd:c,fontSize:a},[`${X}-content`]:{display:"inline-block",padding:H,background:T,borderRadius:k,boxShadow:n,pointerEvents:"all"},[`${r}-success > ${g}`]:{color:Z},[`${r}-error > ${g}`]:{color:U},[`${r}-warning > ${g}`]:{color:B},[`${r}-info > ${g},
      ${r}-loading > ${g}`]:{color:t}};return[{[r]:Object.assign(Object.assign({},(0,ee.Wf)(e)),{color:x,position:"fixed",top:c,width:"100%",pointerEvents:"none",zIndex:E,[`${r}-move-up`]:{animationFillMode:"forwards"},[`
        ${r}-move-up-appear,
        ${r}-move-up-enter
      `]:{animationName:Y,animationDuration:l,animationPlayState:"paused",animationTimingFunction:h},[`
        ${r}-move-up-appear${r}-move-up-appear-active,
        ${r}-move-up-enter${r}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${r}-move-up-leave`]:{animationName:j,animationDuration:l,animationPlayState:"paused",animationTimingFunction:h},[`${r}-move-up-leave${r}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[r]:{[X]:Object.assign({},J)}},{[`${r}-notice-pure-panel`]:Object.assign(Object.assign({},J),{padding:0,textAlign:"start"})}]};var ie=(0,z.Z)("Message",e=>{const r=(0,I.TS)(e,{height:150});return[pe(r)]},e=>({zIndexPopup:e.zIndexPopupBase+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`}),{clientOnly:!0});function ke(e,r){return{motionName:r??`${e}-move-up`}}function ye(e){let r;const g=new Promise(x=>{r=e(()=>{x(!0)})}),n=()=>{r?.()};return n.then=(x,Z)=>g.then(x,Z),n.promise=g,n}var Ee=function(e,r){var g={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(g[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,n=Object.getOwnPropertySymbols(e);x<n.length;x++)r.indexOf(n[x])<0&&Object.prototype.propertyIsEnumerable.call(e,n[x])&&(g[n[x]]=e[n[x]]);return g};const ae=8,se=3,ne=f.forwardRef((e,r)=>{const{top:g,prefixCls:n,getContainer:x,maxCount:Z,duration:U=se,rtl:B,transitionName:t,onAllRemoved:a}=e,{getPrefixCls:h,getPopupContainer:l,message:c}=f.useContext(W.E_),i=n||h("message"),[,k]=ie(i),E=()=>({left:"50%",transform:"translateX(-50%)",top:g??ae}),H=()=>F()(k,{[`${i}-rtl`]:B}),T=()=>ke(i,t),X=f.createElement("span",{className:`${i}-close-x`},f.createElement(m.Z,{className:`${i}-close-icon`})),[Y,j]=$e({prefixCls:i,style:E,className:H,motion:T,closable:!1,closeIcon:X,duration:U,getContainer:()=>x?.()||l?.()||document.body,maxCount:Z,onAllRemoved:a});return f.useImperativeHandle(r,()=>Object.assign(Object.assign({},Y),{prefixCls:i,hashId:k,message:c})),j});let s=0;function p(e){const r=f.useRef(null);return[f.useMemo(()=>{const n=t=>{var a;(a=r.current)===null||a===void 0||a.close(t)},x=t=>{if(!r.current){const C=()=>{};return C.then=()=>{},C}const{open:a,prefixCls:h,hashId:l,message:c}=r.current,i=`${h}-notice`,{content:k,icon:E,type:H,key:T,className:X,style:Y,onClose:j}=t,J=Ee(t,["content","icon","type","key","className","style","onClose"]);let b=T;return b==null&&(s+=1,b=`antd-message-${s}`),ye(C=>(a(Object.assign(Object.assign({},J),{key:b,content:f.createElement(Ke,{prefixCls:h,type:H,icon:E},k),placement:"top",className:F()(H&&`${i}-${H}`,l,X,c?.className),style:Object.assign(Object.assign({},c?.style),Y),onClose:()=>{j?.(),C()}})),()=>{n(b)}))},U={open:x,destroy:t=>{var a;t!==void 0?n(t):(a=r.current)===null||a===void 0||a.destroy()}};return["info","success","warning","error","loading"].forEach(t=>{const a=(h,l,c)=>{let i;h&&typeof h=="object"&&"content"in h?i=h:i={content:h};let k,E;typeof l=="function"?E=l:(k=l,E=c);const H=Object.assign(Object.assign({onClose:E,duration:k},i),{type:t});return x(H)};U[t]=a}),U},[]),f.createElement(ne,Object.assign({key:"message-holder"},e,{ref:r}))]}function K(e){return p(e)}var N=u(77719),R=function(e,r){var g={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(g[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,n=Object.getOwnPropertySymbols(e);x<n.length;x++)r.indexOf(n[x])<0&&Object.prototype.propertyIsEnumerable.call(e,n[x])&&(g[n[x]]=e[n[x]]);return g};const Q={info:f.createElement(qe.Z,null),success:f.createElement(Fe.Z,null),error:f.createElement(_e.Z,null),warning:f.createElement(Qe.Z,null),loading:f.createElement(et.Z,null)};function oe(e,r){return r===null||r===!1?null:r||f.createElement("span",{className:`${e}-close-x`},f.createElement(m.Z,{className:`${e}-close-icon`}))}const ce={success:Fe.Z,info:qe.Z,error:_e.Z,warning:Qe.Z},fe=e=>{const{prefixCls:r,icon:g,type:n,message:x,description:Z,btn:U,role:B="alert"}=e;let t=null;return g?t=f.createElement("span",{className:`${r}-icon`},g):n&&(t=f.createElement(ce[n]||null,{className:F()(`${r}-icon`,`${r}-icon-${n}`)})),f.createElement("div",{className:F()({[`${r}-with-icon`]:t}),role:B},t,f.createElement("div",{className:`${r}-message`},x),f.createElement("div",{className:`${r}-description`},Z),U&&f.createElement("div",{className:`${r}-btn`},U))},de=e=>{const{prefixCls:r,className:g,icon:n,type:x,message:Z,description:U,btn:B,closable:t=!0,closeIcon:a}=e,h=R(e,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon"]),{getPrefixCls:l}=React.useContext(ConfigContext),c=r||l("notification"),i=`${c}-notice`,[,k]=useStyle(c);return React.createElement(Notice,Object.assign({},h,{prefixCls:c,className:classNames(g,k,`${i}-pure-panel`),eventKey:"pure",duration:null,closable:t,closeIcon:oe(c,a),content:React.createElement(fe,{prefixCls:i,icon:n,type:x,message:Z,description:U,btn:B})}))};var le=null,we=e=>{const{componentCls:r,width:g,notificationMarginEdge:n}=e,x=new $.E4("antNotificationTopFadeIn",{"0%":{marginTop:"-100%",opacity:0},"100%":{marginTop:0,opacity:1}}),Z=new $.E4("antNotificationBottomFadeIn",{"0%":{marginBottom:"-100%",opacity:0},"100%":{marginBottom:0,opacity:1}}),U=new $.E4("antNotificationLeftFadeIn",{"0%":{right:{_skip_check_:!0,value:g},opacity:0},"100%":{right:{_skip_check_:!0,value:0},opacity:1}});return{[`&${r}-top, &${r}-bottom`]:{marginInline:0},[`&${r}-top`]:{[`${r}-fade-enter${r}-fade-enter-active, ${r}-fade-appear${r}-fade-appear-active`]:{animationName:x}},[`&${r}-bottom`]:{[`${r}-fade-enter${r}-fade-enter-active, ${r}-fade-appear${r}-fade-appear-active`]:{animationName:Z}},[`&${r}-topLeft, &${r}-bottomLeft`]:{marginInlineEnd:0,marginInlineStart:n,[`${r}-fade-enter${r}-fade-enter-active, ${r}-fade-appear${r}-fade-appear-active`]:{animationName:U}}}};const Se=e=>{const{iconCls:r,componentCls:g,boxShadow:n,fontSizeLG:x,notificationMarginBottom:Z,borderRadiusLG:U,colorSuccess:B,colorInfo:t,colorWarning:a,colorError:h,colorTextHeading:l,notificationBg:c,notificationPadding:i,notificationMarginEdge:k,motionDurationMid:E,motionEaseInOut:H,fontSize:T,lineHeight:X,width:Y,notificationIconSize:j,colorText:J}=e,b=`${g}-notice`,C=new $.E4("antNotificationFadeIn",{"0%":{left:{_skip_check_:!0,value:Y},opacity:0},"100%":{left:{_skip_check_:!0,value:0},opacity:1}}),L=new $.E4("antNotificationFadeOut",{"0%":{maxHeight:e.animationMaxHeight,marginBottom:Z,opacity:1},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}}),G={position:"relative",width:Y,maxWidth:`calc(100vw - ${k*2}px)`,marginBottom:Z,marginInlineStart:"auto",padding:i,overflow:"hidden",lineHeight:X,wordWrap:"break-word",background:c,borderRadius:U,boxShadow:n,[`${g}-close-icon`]:{fontSize:T,cursor:"pointer"},[`${b}-message`]:{marginBottom:e.marginXS,color:l,fontSize:x,lineHeight:e.lineHeightLG},[`${b}-description`]:{fontSize:T,color:J},[`&${b}-closable ${b}-message`]:{paddingInlineEnd:e.paddingLG},[`${b}-with-icon ${b}-message`]:{marginBottom:e.marginXS,marginInlineStart:e.marginSM+j,fontSize:x},[`${b}-with-icon ${b}-description`]:{marginInlineStart:e.marginSM+j,fontSize:T},[`${b}-icon`]:{position:"absolute",fontSize:j,lineHeight:0,[`&-success${r}`]:{color:B},[`&-info${r}`]:{color:t},[`&-warning${r}`]:{color:a},[`&-error${r}`]:{color:h}},[`${b}-close`]:{position:"absolute",top:e.notificationPaddingVertical,insetInlineEnd:e.notificationPaddingHorizontal,color:e.colorIcon,outline:"none",width:e.notificationCloseButtonSize,height:e.notificationCloseButtonSize,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.wireframe?"transparent":e.colorFillContent}},[`${b}-btn`]:{float:"right",marginTop:e.marginSM}};return[{[g]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,ee.Wf)(e)),{position:"fixed",zIndex:e.zIndexPopup,marginInlineEnd:k,[`${g}-hook-holder`]:{position:"relative"},[`&${g}-top, &${g}-bottom`]:{[b]:{marginInline:"auto auto"}},[`&${g}-topLeft, &${g}-bottomLeft`]:{[b]:{marginInlineEnd:"auto",marginInlineStart:0}},[`${g}-fade-enter, ${g}-fade-appear`]:{animationDuration:e.motionDurationMid,animationTimingFunction:H,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${g}-fade-leave`]:{animationTimingFunction:H,animationFillMode:"both",animationDuration:E,animationPlayState:"paused"},[`${g}-fade-enter${g}-fade-enter-active, ${g}-fade-appear${g}-fade-appear-active`]:{animationName:C,animationPlayState:"running"},[`${g}-fade-leave${g}-fade-leave-active`]:{animationName:L,animationPlayState:"running"}}),we(e)),{"&-rtl":{direction:"rtl",[`${b}-btn`]:{float:"left"}}})},{[g]:{[b]:Object.assign({},G)}},{[`${b}-pure-panel`]:Object.assign(Object.assign({},G),{margin:0})}]};var Ne=(0,z.Z)("Notification",e=>{const r=e.paddingMD,g=e.paddingLG,n=(0,I.TS)(e,{notificationBg:e.colorBgElevated,notificationPaddingVertical:r,notificationPaddingHorizontal:g,notificationIconSize:e.fontSizeLG*e.lineHeightLG,notificationCloseButtonSize:e.controlHeightLG*.55,notificationMarginBottom:e.margin,notificationPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`,notificationMarginEdge:e.marginLG,animationMaxHeight:150});return[Se(n)]},e=>({zIndexPopup:e.zIndexPopupBase+50,width:384}),{clientOnly:!0});function A(e,r,g){let n;switch(e){case"top":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:r,bottom:"auto"};break;case"topLeft":n={left:0,top:r,bottom:"auto"};break;case"topRight":n={right:0,top:r,bottom:"auto"};break;case"bottom":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:g};break;case"bottomLeft":n={left:0,top:"auto",bottom:g};break;default:n={right:0,top:"auto",bottom:g};break}return n}function _(e){return{motionName:`${e}-fade`}}var De=function(e,r){var g={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(g[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,n=Object.getOwnPropertySymbols(e);x<n.length;x++)r.indexOf(n[x])<0&&Object.prototype.propertyIsEnumerable.call(e,n[x])&&(g[n[x]]=e[n[x]]);return g};const Oe=24,Me=4.5,Re="topRight",xe=f.forwardRef((e,r)=>{const{top:g,bottom:n,prefixCls:x,getContainer:Z,maxCount:U,rtl:B,onAllRemoved:t}=e,{getPrefixCls:a,getPopupContainer:h,notification:l}=f.useContext(W.E_),c=x||a("notification"),i=Y=>A(Y,g??Oe,n??Oe),[,k]=Ne(c),E=()=>F()(k,{[`${c}-rtl`]:B}),H=()=>_(c),[T,X]=$e({prefixCls:c,style:i,className:E,motion:H,closable:!0,closeIcon:oe(c),duration:Me,getContainer:()=>Z?.()||h?.()||document.body,maxCount:U,onAllRemoved:t});return f.useImperativeHandle(r,()=>Object.assign(Object.assign({},T),{prefixCls:c,hashId:k,notification:l})),X});function be(e){const r=f.useRef(null);return[f.useMemo(()=>{const n=B=>{var t;if(!r.current)return;const{open:a,prefixCls:h,hashId:l,notification:c}=r.current,i=`${h}-notice`,{message:k,description:E,icon:H,type:T,btn:X,className:Y,style:j,role:J="alert",closeIcon:b}=B,C=De(B,["message","description","icon","type","btn","className","style","role","closeIcon"]),L=oe(i,b);return a(Object.assign(Object.assign({placement:(t=e?.placement)!==null&&t!==void 0?t:Re},C),{content:f.createElement(fe,{prefixCls:i,icon:H,type:T,message:k,description:E,btn:X,role:J}),className:F()(T&&`${i}-${T}`,l,Y,c?.className),style:Object.assign(Object.assign({},c?.style),j),closeIcon:L,closable:!!L}))},Z={open:n,destroy:B=>{var t,a;B!==void 0?(t=r.current)===null||t===void 0||t.close(B):(a=r.current)===null||a===void 0||a.destroy()}};return["success","info","warning","error"].forEach(B=>{Z[B]=t=>n(Object.assign(Object.assign({},t),{type:B}))}),Z},[]),f.createElement(xe,Object.assign({key:"notification-holder"},e,{ref:r}))]}function Ue(e){return be(e)}const Ze=f.createContext({});var Ye=f.createContext({message:{},notification:{},modal:{}});const Le=e=>{const{componentCls:r,colorText:g,fontSize:n,lineHeight:x,fontFamily:Z}=e;return{[r]:{color:g,fontSize:n,lineHeight:x,fontFamily:Z}}};var Ge=(0,z.Z)("App",e=>[Le(e)]);const Ae=()=>f.useContext(Ye),Pe=e=>{const{prefixCls:r,children:g,className:n,rootClassName:x,message:Z,notification:U,style:B}=e,{getPrefixCls:t}=(0,f.useContext)(W.E_),a=t("app",r),[h,l]=Ge(a),c=F()(l,a,n,x),i=(0,f.useContext)(Ze),k=f.useMemo(()=>({message:Object.assign(Object.assign({},i.message),Z),notification:Object.assign(Object.assign({},i.notification),U)}),[Z,U,i.message,i.notification]),[E,H]=K(k.message),[T,X]=Ue(k.notification),[Y,j]=(0,N.Z)(),J=f.useMemo(()=>({message:E,notification:T,modal:Y}),[E,T,Y]);return h(f.createElement(Ye.Provider,{value:J},f.createElement(Ze.Provider,{value:k},f.createElement("div",{className:c,style:B},j,H,X,g))))};Pe.useApp=Ae;var je=Pe},93602:function(Be,D,u){u.d(D,{Z:function(){return at}});var he=u(60042),F=u.n(he),f=u(83395),W=u(27378),m=u(97933),Te=u(93795),V=u(26775),o=u(9372),v=u(72457),y=u(9540),w=u(6117),M=u(5515);const P=new o.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),O=new o.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),S=new o.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),te=new o.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),re=new o.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),ge=new o.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),me=d=>{const{componentCls:$,iconCls:ee,antCls:z,badgeFontHeight:I,badgeShadowSize:pe,badgeHeightSm:ie,motionDurationSlow:ke,badgeStatusSize:ye,marginXS:Ee,badgeRibbonOffset:ae}=d,se=`${z}-scroll-number`,ne=`${z}-ribbon`,s=`${z}-ribbon-wrapper`,p=(0,y.Z)(d,(N,R)=>{let{darkColor:Q}=R;return{[`&${$} ${$}-color-${N}`]:{background:Q,[`&:not(${$}-count)`]:{color:Q}}}}),K=(0,y.Z)(d,(N,R)=>{let{darkColor:Q}=R;return{[`&${ne}-color-${N}`]:{background:Q,color:Q}}});return{[$]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,v.Wf)(d)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${$}-count`]:{zIndex:d.badgeZIndex,minWidth:d.badgeHeight,height:d.badgeHeight,color:d.badgeTextColor,fontWeight:d.badgeFontWeight,fontSize:d.badgeFontSize,lineHeight:`${d.badgeHeight}px`,whiteSpace:"nowrap",textAlign:"center",background:d.badgeColor,borderRadius:d.badgeHeight/2,boxShadow:`0 0 0 ${pe}px ${d.badgeShadowColor}`,transition:`background ${d.motionDurationMid}`,a:{color:d.badgeTextColor},"a:hover":{color:d.badgeTextColor},"a:hover &":{background:d.badgeColorHover}},[`${$}-count-sm`]:{minWidth:ie,height:ie,fontSize:d.badgeFontSizeSm,lineHeight:`${ie}px`,borderRadius:ie/2},[`${$}-multiple-words`]:{padding:`0 ${d.paddingXS}px`},[`${$}-dot`]:{zIndex:d.badgeZIndex,width:d.badgeDotSize,minWidth:d.badgeDotSize,height:d.badgeDotSize,background:d.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${pe}px ${d.badgeShadowColor}`},[`${$}-dot${se}`]:{transition:`background ${ke}`},[`${$}-count, ${$}-dot, ${se}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${ee}-spin`]:{animationName:ge,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${$}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${$}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:ye,height:ye,verticalAlign:"middle",borderRadius:"50%"},[`${$}-status-success`]:{backgroundColor:d.colorSuccess},[`${$}-status-processing`]:{position:"relative",color:d.colorPrimary,backgroundColor:d.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:pe,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:P,animationDuration:d.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${$}-status-default`]:{backgroundColor:d.colorTextPlaceholder},[`${$}-status-error`]:{backgroundColor:d.colorError},[`${$}-status-warning`]:{backgroundColor:d.colorWarning},[`${$}-status-text`]:{marginInlineStart:Ee,color:d.colorText,fontSize:d.fontSize}}}),p),{[`${$}-zoom-appear, ${$}-zoom-enter`]:{animationName:O,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack,animationFillMode:"both"},[`${$}-zoom-leave`]:{animationName:S,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack,animationFillMode:"both"},[`&${$}-not-a-wrapper`]:{[`${$}-zoom-appear, ${$}-zoom-enter`]:{animationName:te,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack},[`${$}-zoom-leave`]:{animationName:re,animationDuration:d.motionDurationSlow,animationTimingFunction:d.motionEaseOutBack},[`&:not(${$}-status)`]:{verticalAlign:"middle"},[`${se}-custom-component, ${$}-count`]:{transform:"none"},[`${se}-custom-component, ${se}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${se}`]:{overflow:"hidden",[`${se}-only`]:{position:"relative",display:"inline-block",height:d.badgeHeight,transition:`all ${d.motionDurationSlow} ${d.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${se}-only-unit`]:{height:d.badgeHeight,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${se}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${$}-count, ${$}-dot, ${se}-custom-component`]:{transform:"translate(-50%, -50%)"}}}),[`${s}`]:{position:"relative"},[`${ne}`]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,v.Wf)(d)),{position:"absolute",top:Ee,padding:`0 ${d.paddingXS}px`,color:d.colorPrimary,lineHeight:`${I}px`,whiteSpace:"nowrap",backgroundColor:d.colorPrimary,borderRadius:d.borderRadiusSM,[`${ne}-text`]:{color:d.colorTextLightSolid},[`${ne}-corner`]:{position:"absolute",top:"100%",width:ae,height:ae,color:"currentcolor",border:`${ae/2}px solid`,transform:d.badgeRibbonCornerTransform,transformOrigin:"top",filter:d.badgeRibbonCornerFilter}}),K),{[`&${ne}-placement-end`]:{insetInlineEnd:-ae,borderEndEndRadius:0,[`${ne}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${ne}-placement-start`]:{insetInlineStart:-ae,borderEndStartRadius:0,[`${ne}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var q=(0,w.Z)("Badge",d=>{const{fontSize:$,lineHeight:ee,fontSizeSM:z,lineWidth:I,marginXS:pe,colorBorderBg:ie}=d,ke=Math.round($*ee),ye=I,Ee="auto",ae=ke-2*ye,se=d.colorBgContainer,ne="normal",s=z,p=d.colorError,K=d.colorErrorHover,N=$,R=z/2,Q=z,oe=z/2,ce=(0,M.TS)(d,{badgeFontHeight:ke,badgeShadowSize:ye,badgeZIndex:Ee,badgeHeight:ae,badgeTextColor:se,badgeFontWeight:ne,badgeFontSize:s,badgeColor:p,badgeColorHover:K,badgeShadowColor:ie,badgeHeightSm:N,badgeDotSize:R,badgeFontSizeSm:Q,badgeStatusSize:oe,badgeProcessingDuration:"1.2s",badgeRibbonOffset:pe,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"});return[me(ce)]}),Ie=d=>{const{className:$,prefixCls:ee,style:z,color:I,children:pe,text:ie,placement:ke="end"}=d,{getPrefixCls:ye,direction:Ee}=W.useContext(V.E_),ae=ye("ribbon",ee),se=(0,m.o2)(I,!1),ne=F()(ae,`${ae}-placement-${ke}`,{[`${ae}-rtl`]:Ee==="rtl",[`${ae}-color-${I}`]:se},$),[s,p]=q(ae),K={},N={};return I&&!se&&(K.background=I,N.color=I),s(W.createElement("div",{className:F()(`${ae}-wrapper`,p)},pe,W.createElement("div",{className:F()(ne,p),style:Object.assign(Object.assign({},K),z)},W.createElement("span",{className:`${ae}-text`},ie),W.createElement("div",{className:`${ae}-corner`,style:N}))))};function $e(d){let{prefixCls:$,value:ee,current:z,offset:I=0}=d,pe;return I&&(pe={position:"absolute",top:`${I}00%`,left:0}),W.createElement("span",{style:pe,className:F()(`${$}-only-unit`,{current:z})},ee)}function Fe(d,$,ee){let z=d,I=0;for(;(z+10)%10!==$;)z+=ee,I+=ee;return I}function _e(d){const{prefixCls:$,count:ee,value:z}=d,I=Number(z),pe=Math.abs(ee),[ie,ke]=W.useState(I),[ye,Ee]=W.useState(pe),ae=()=>{ke(I),Ee(pe)};W.useEffect(()=>{const s=setTimeout(()=>{ae()},1e3);return()=>{clearTimeout(s)}},[I]);let se,ne;if(ie===I||Number.isNaN(I)||Number.isNaN(ie))se=[W.createElement($e,Object.assign({},d,{key:I,current:!0}))],ne={transition:"none"};else{se=[];const s=I+10,p=[];for(let R=I;R<=s;R+=1)p.push(R);const K=p.findIndex(R=>R%10===ie);se=p.map((R,Q)=>{const oe=R%10;return W.createElement($e,Object.assign({},d,{key:R,value:oe,offset:Q-K,current:Q===K}))});const N=ye<pe?1:-1;ne={transform:`translateY(${-Fe(ie,I,N)}00%)`}}return W.createElement("span",{className:`${$}-only`,style:ne,onTransitionEnd:ae},se)}var Qe=function(d,$){var ee={};for(var z in d)Object.prototype.hasOwnProperty.call(d,z)&&$.indexOf(z)<0&&(ee[z]=d[z]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var I=0,z=Object.getOwnPropertySymbols(d);I<z.length;I++)$.indexOf(z[I])<0&&Object.prototype.propertyIsEnumerable.call(d,z[I])&&(ee[z[I]]=d[z[I]]);return ee},et=W.forwardRef((d,$)=>{const{prefixCls:ee,count:z,className:I,motionClassName:pe,style:ie,title:ke,show:ye,component:Ee="sup",children:ae}=d,se=Qe(d,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:ne}=W.useContext(V.E_),s=ne("scroll-number",ee),p=Object.assign(Object.assign({},se),{"data-show":ye,style:ie,className:F()(s,I,pe),title:ke});let K=z;if(z&&Number(z)%1===0){const N=String(z).split("");K=N.map((R,Q)=>W.createElement(_e,{prefixCls:s,count:Number(z),value:R,key:N.length-Q}))}return ie&&ie.borderColor&&(p.style=Object.assign(Object.assign({},ie),{boxShadow:`0 0 0 1px ${ie.borderColor} inset`})),ae?(0,Te.Tm)(ae,N=>({className:F()(`${s}-custom-component`,N?.className,pe)})):W.createElement(Ee,Object.assign({},p,{ref:$}),K)}),Ve=function(d,$){var ee={};for(var z in d)Object.prototype.hasOwnProperty.call(d,z)&&$.indexOf(z)<0&&(ee[z]=d[z]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var I=0,z=Object.getOwnPropertySymbols(d);I<z.length;I++)$.indexOf(z[I])<0&&Object.prototype.propertyIsEnumerable.call(d,z[I])&&(ee[z[I]]=d[z[I]]);return ee};const rt=(d,$)=>{var ee,z,I,pe,ie;const{prefixCls:ke,scrollNumberPrefixCls:ye,children:Ee,status:ae,text:se,color:ne,count:s=null,overflowCount:p=99,dot:K=!1,size:N="default",title:R,offset:Q,style:oe,className:ce,rootClassName:fe,classNames:de,styles:le,showZero:Ce=!1}=d,we=Ve(d,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:Se,direction:Ne,badge:A}=W.useContext(V.E_),_=Se("badge",ke),[De,Oe]=q(_),Me=s>p?`${p}+`:s,Re=Me==="0"||Me===0,xe=s===null||Re&&!Ce,be=(ae!=null||ne!=null)&&xe,Ue=K&&!Re,Ze=Ue?"":Me,We=(0,W.useMemo)(()=>(Ze==null||Ze===""||Re&&!Ce)&&!Ue,[Ze,Re,Ce,Ue]),Ye=(0,W.useRef)(s);We||(Ye.current=s);const Le=Ye.current,Ge=(0,W.useRef)(Ze);We||(Ge.current=Ze);const Ae=Ge.current,Pe=(0,W.useRef)(Ue);We||(Pe.current=Ue);const je=(0,W.useMemo)(()=>{if(!Q)return Object.assign(Object.assign({},A?.style),oe);const B={marginTop:Q[1]};return Ne==="rtl"?B.left=parseInt(Q[0],10):B.right=-parseInt(Q[0],10),Object.assign(Object.assign(Object.assign({},B),A?.style),oe)},[Ne,Q,oe,A?.style]),e=R??(typeof Le=="string"||typeof Le=="number"?Le:void 0),r=We||!se?null:W.createElement("span",{className:`${_}-status-text`},se),g=!Le||typeof Le!="object"?void 0:(0,Te.Tm)(Le,B=>({style:Object.assign(Object.assign({},je),B.style)})),n=(0,m.o2)(ne,!1),x=F()(de?.indicator,(ee=A?.classNames)===null||ee===void 0?void 0:ee.indicator,{[`${_}-status-dot`]:be,[`${_}-status-${ae}`]:!!ae,[`${_}-color-${ne}`]:n}),Z={};ne&&!n&&(Z.color=ne,Z.background=ne);const U=F()(_,{[`${_}-status`]:be,[`${_}-not-a-wrapper`]:!Ee,[`${_}-rtl`]:Ne==="rtl"},ce,fe,A?.className,(z=A?.classNames)===null||z===void 0?void 0:z.root,de?.root,Oe);if(!Ee&&be){const B=je.color;return De(W.createElement("span",Object.assign({},we,{className:U,style:Object.assign(Object.assign(Object.assign({},le?.root),(I=A?.styles)===null||I===void 0?void 0:I.root),je)}),W.createElement("span",{className:x,style:Object.assign(Object.assign(Object.assign({},le?.indicator),(pe=A?.styles)===null||pe===void 0?void 0:pe.indicator),Z)}),se&&W.createElement("span",{style:{color:B},className:`${_}-status-text`},se)))}return De(W.createElement("span",Object.assign({ref:$},we,{className:U,style:Object.assign(Object.assign({},(ie=A?.styles)===null||ie===void 0?void 0:ie.root),le?.root)}),Ee,W.createElement(f.ZP,{visible:!We,motionName:`${_}-zoom`,motionAppear:!1,motionDeadline:1e3},B=>{let{className:t,ref:a}=B;var h,l;const c=Se("scroll-number",ye),i=Pe.current,k=F()(de?.indicator,(h=A?.classNames)===null||h===void 0?void 0:h.indicator,{[`${_}-dot`]:i,[`${_}-count`]:!i,[`${_}-count-sm`]:N==="small",[`${_}-multiple-words`]:!i&&Ae&&Ae.toString().length>1,[`${_}-status-${ae}`]:!!ae,[`${_}-color-${ne}`]:n});let E=Object.assign(Object.assign(Object.assign({},le?.indicator),(l=A?.styles)===null||l===void 0?void 0:l.indicator),je);return ne&&!n&&(E=E||{},E.background=ne),W.createElement(et,{prefixCls:c,show:!We,motionClassName:t,className:k,count:Ae,title:e,style:E,key:"scrollNumber",ref:a},g)}),r))},Ke=W.forwardRef(rt);Ke.Ribbon=Ie;var at=Ke},26591:function(Be,D,u){u.d(D,{Z:function(){return ne}});var he=u(60042),F=u.n(he),f=u(50189),W=u(11026),m=u(27378),Te=u(81412),V=u(99664),o=u(64649),v=u(25773),y=u(83395),w=u(78730),M=u(91864),P=m.createContext(null),O=P,S=function(p){var K=p.prefixCls,N=p.className,R=p.style,Q=p.children,oe=p.containerRef,ce=p.onMouseEnter,fe=p.onMouseOver,de=p.onMouseLeave,le=p.onClick,Ce=p.onKeyDown,we=p.onKeyUp,Se={onMouseEnter:ce,onMouseOver:fe,onMouseLeave:de,onClick:le,onKeyDown:Ce,onKeyUp:we};return m.createElement(m.Fragment,null,m.createElement("div",(0,v.Z)({className:F()("".concat(K,"-content"),N),style:(0,f.Z)({},R),"aria-modal":"true",role:"dialog",ref:oe},Se),Q))},te=S,re=u(74485);function ge(s){return typeof s=="string"&&String(Number(s))===s?((0,re.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(s)):s}function me(s){warning(!("wrapperClassName"in s),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!s.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var q={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function ve(s,p){var K,N,R,Q,oe=s.prefixCls,ce=s.open,fe=s.placement,de=s.inline,le=s.push,Ce=s.forceRender,we=s.autoFocus,Se=s.keyboard,Ne=s.rootClassName,A=s.rootStyle,_=s.zIndex,De=s.className,Oe=s.style,Me=s.motion,Re=s.width,xe=s.height,be=s.children,Ue=s.contentWrapperStyle,Ze=s.mask,We=s.maskClosable,Ye=s.maskMotion,Le=s.maskClassName,Ge=s.maskStyle,Ae=s.afterOpenChange,Pe=s.onClose,je=s.onMouseEnter,e=s.onMouseOver,r=s.onMouseLeave,g=s.onClick,n=s.onKeyDown,x=s.onKeyUp,Z=m.useRef(),U=m.useRef(),B=m.useRef();m.useImperativeHandle(p,function(){return Z.current});var t=function(L){var G=L.keyCode,ue=L.shiftKey;switch(G){case w.Z.TAB:{if(G===w.Z.TAB){if(!ue&&document.activeElement===B.current){var He;(He=U.current)===null||He===void 0||He.focus({preventScroll:!0})}else if(ue&&document.activeElement===U.current){var ze;(ze=B.current)===null||ze===void 0||ze.focus({preventScroll:!0})}}break}case w.Z.ESC:{Pe&&Se&&(L.stopPropagation(),Pe(L));break}}};m.useEffect(function(){if(ce&&we){var C;(C=Z.current)===null||C===void 0||C.focus({preventScroll:!0})}},[ce]);var a=m.useState(!1),h=(0,W.Z)(a,2),l=h[0],c=h[1],i=m.useContext(O),k;le===!1?k={distance:0}:le===!0?k={}:k=le||{};var E=(K=(N=(R=k)===null||R===void 0?void 0:R.distance)!==null&&N!==void 0?N:i?.pushDistance)!==null&&K!==void 0?K:180,H=m.useMemo(function(){return{pushDistance:E,push:function(){c(!0)},pull:function(){c(!1)}}},[E]);m.useEffect(function(){if(ce){var C;i==null||(C=i.push)===null||C===void 0||C.call(i)}else{var L;i==null||(L=i.pull)===null||L===void 0||L.call(i)}},[ce]),m.useEffect(function(){return function(){var C;i==null||(C=i.pull)===null||C===void 0||C.call(i)}},[]);var T=Ze&&m.createElement(y.ZP,(0,v.Z)({key:"mask"},Ye,{visible:ce}),function(C,L){var G=C.className,ue=C.style;return m.createElement("div",{className:F()("".concat(oe,"-mask"),G,Le),style:(0,f.Z)((0,f.Z)({},ue),Ge),onClick:We&&ce?Pe:void 0,ref:L})}),X=typeof Me=="function"?Me(fe):Me,Y={};if(l&&E)switch(fe){case"top":Y.transform="translateY(".concat(E,"px)");break;case"bottom":Y.transform="translateY(".concat(-E,"px)");break;case"left":Y.transform="translateX(".concat(E,"px)");break;default:Y.transform="translateX(".concat(-E,"px)");break}fe==="left"||fe==="right"?Y.width=ge(Re):Y.height=ge(xe);var j={onMouseEnter:je,onMouseOver:e,onMouseLeave:r,onClick:g,onKeyDown:n,onKeyUp:x},J=m.createElement(y.ZP,(0,v.Z)({key:"panel"},X,{visible:ce,forceRender:Ce,onVisibleChanged:function(L){Ae?.(L)},removeOnLeave:!1,leavedClassName:"".concat(oe,"-content-wrapper-hidden")}),function(C,L){var G=C.className,ue=C.style;return m.createElement("div",(0,v.Z)({className:F()("".concat(oe,"-content-wrapper"),G),style:(0,f.Z)((0,f.Z)((0,f.Z)({},Y),ue),Ue)},(0,M.Z)(s,{data:!0})),m.createElement(te,(0,v.Z)({containerRef:L,prefixCls:oe,className:De,style:Oe},j),be))}),b=(0,f.Z)({},A);return _&&(b.zIndex=_),m.createElement(O.Provider,{value:H},m.createElement("div",{className:F()(oe,"".concat(oe,"-").concat(fe),Ne,(Q={},(0,o.Z)(Q,"".concat(oe,"-open"),ce),(0,o.Z)(Q,"".concat(oe,"-inline"),de),Q)),style:b,tabIndex:-1,ref:Z,onKeyDown:t},T,m.createElement("div",{tabIndex:0,ref:U,style:q,"aria-hidden":"true","data-sentinel":"start"}),J,m.createElement("div",{tabIndex:0,ref:B,style:q,"aria-hidden":"true","data-sentinel":"end"})))}var Ie=m.forwardRef(ve),$e=Ie,Fe=function(p){var K=p.open,N=K===void 0?!1:K,R=p.prefixCls,Q=R===void 0?"rc-drawer":R,oe=p.placement,ce=oe===void 0?"right":oe,fe=p.autoFocus,de=fe===void 0?!0:fe,le=p.keyboard,Ce=le===void 0?!0:le,we=p.width,Se=we===void 0?378:we,Ne=p.mask,A=Ne===void 0?!0:Ne,_=p.maskClosable,De=_===void 0?!0:_,Oe=p.getContainer,Me=p.forceRender,Re=p.afterOpenChange,xe=p.destroyOnClose,be=p.onMouseEnter,Ue=p.onMouseOver,Ze=p.onMouseLeave,We=p.onClick,Ye=p.onKeyDown,Le=p.onKeyUp,Ge=m.useState(!1),Ae=(0,W.Z)(Ge,2),Pe=Ae[0],je=Ae[1],e=m.useState(!1),r=(0,W.Z)(e,2),g=r[0],n=r[1];(0,V.Z)(function(){n(!0)},[]);var x=g?N:!1,Z=m.useRef(),U=m.useRef();(0,V.Z)(function(){x&&(U.current=document.activeElement)},[x]);var B=function(l){var c;if(je(l),Re?.(l),!l&&U.current&&!(!((c=Z.current)===null||c===void 0)&&c.contains(U.current))){var i;(i=U.current)===null||i===void 0||i.focus({preventScroll:!0})}};if(!Me&&!Pe&&!x&&xe)return null;var t={onMouseEnter:be,onMouseOver:Ue,onMouseLeave:Ze,onClick:We,onKeyDown:Ye,onKeyUp:Le},a=(0,f.Z)((0,f.Z)({},p),{},{open:x,prefixCls:Q,placement:ce,autoFocus:de,keyboard:Ce,width:Se,mask:A,maskClosable:De,inline:Oe===!1,afterOpenChange:B,ref:Z},t);return m.createElement(Te.Z,{open:x||Me||Pe,autoDestroy:!1,getContainer:Oe,autoLock:A&&(x||Pe)},m.createElement($e,a))},_e=Fe,Qe=_e,qe=u(80821),et=u(26775),Ve=u(84006),rt=u(60467),at=s=>{const{prefixCls:p,title:K,footer:N,extra:R,closeIcon:Q,closable:oe,onClose:ce,headerStyle:fe,drawerStyle:de,bodyStyle:le,footerStyle:Ce,children:we}=s,Se=m.useCallback(Oe=>m.createElement("button",{type:"button",onClick:ce,"aria-label":"Close",className:`${p}-close`},Oe),[ce]),[Ne,A]=(0,rt.Z)(oe,Q,Se,void 0,!0),_=m.useMemo(()=>!K&&!Ne?null:m.createElement("div",{style:fe,className:F()(`${p}-header`,{[`${p}-header-close-only`]:Ne&&!K&&!R})},m.createElement("div",{className:`${p}-header-title`},A,K&&m.createElement("div",{className:`${p}-title`},K)),R&&m.createElement("div",{className:`${p}-extra`},R)),[Ne,A,R,fe,p,K]),De=m.useMemo(()=>{if(!N)return null;const Oe=`${p}-footer`;return m.createElement("div",{className:Oe,style:Ce},N)},[N,Ce,p]);return m.createElement("div",{className:`${p}-wrapper-body`,style:de},_,m.createElement("div",{className:`${p}-body`,style:le},we),De)},d=u(31630),$=u(6117),ee=u(5515),I=s=>{const{componentCls:p,motionDurationSlow:K}=s,N={"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${K}`}}};return{[p]:{[`${p}-mask-motion`]:{"&-enter, &-appear, &-leave":{"&-active":{transition:`all ${K}`}},"&-enter, &-appear":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}}},[`${p}-panel-motion`]:{"&-left":[N,{"&-enter, &-appear":{"&-start":{transform:"translateX(-100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(-100%)"}}}],"&-right":[N,{"&-enter, &-appear":{"&-start":{transform:"translateX(100%) !important"},"&-active":{transform:"translateX(0)"}},"&-leave":{transform:"translateX(0)","&-active":{transform:"translateX(100%)"}}}],"&-top":[N,{"&-enter, &-appear":{"&-start":{transform:"translateY(-100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(-100%)"}}}],"&-bottom":[N,{"&-enter, &-appear":{"&-start":{transform:"translateY(100%) !important"},"&-active":{transform:"translateY(0)"}},"&-leave":{transform:"translateY(0)","&-active":{transform:"translateY(100%)"}}}]}}}};const pe=s=>{const{componentCls:p,zIndexPopup:K,colorBgMask:N,colorBgElevated:R,motionDurationSlow:Q,motionDurationMid:oe,padding:ce,paddingLG:fe,fontSizeLG:de,lineHeightLG:le,lineWidth:Ce,lineType:we,colorSplit:Se,marginSM:Ne,colorIcon:A,colorIconHover:_,colorText:De,fontWeightStrong:Oe,footerPaddingBlock:Me,footerPaddingInline:Re}=s,xe=`${p}-content-wrapper`;return{[p]:{position:"fixed",inset:0,zIndex:K,pointerEvents:"none","&-pure":{position:"relative",background:R,[`&${p}-left`]:{boxShadow:s.boxShadowDrawerLeft},[`&${p}-right`]:{boxShadow:s.boxShadowDrawerRight},[`&${p}-top`]:{boxShadow:s.boxShadowDrawerUp},[`&${p}-bottom`]:{boxShadow:s.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${p}-mask`]:{position:"absolute",inset:0,zIndex:K,background:N,pointerEvents:"auto"},[xe]:{position:"absolute",zIndex:K,maxWidth:"100vw",transition:`all ${Q}`,"&-hidden":{display:"none"}},[`&-left > ${xe}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:s.boxShadowDrawerLeft},[`&-right > ${xe}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:s.boxShadowDrawerRight},[`&-top > ${xe}`]:{top:0,insetInline:0,boxShadow:s.boxShadowDrawerUp},[`&-bottom > ${xe}`]:{bottom:0,insetInline:0,boxShadow:s.boxShadowDrawerDown},[`${p}-content`]:{width:"100%",height:"100%",overflow:"auto",background:R,pointerEvents:"auto"},[`${p}-wrapper-body`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%"},[`${p}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${ce}px ${fe}px`,fontSize:de,lineHeight:le,borderBottom:`${Ce}px ${we} ${Se}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${p}-extra`]:{flex:"none"},[`${p}-close`]:{display:"inline-block",marginInlineEnd:Ne,color:A,fontWeight:Oe,fontSize:de,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${oe}`,textRendering:"auto","&:focus, &:hover":{color:_,textDecoration:"none"}},[`${p}-title`]:{flex:1,margin:0,color:De,fontWeight:s.fontWeightStrong,fontSize:de,lineHeight:le},[`${p}-body`]:{flex:1,minWidth:0,minHeight:0,padding:fe,overflow:"auto"},[`${p}-footer`]:{flexShrink:0,padding:`${Me}px ${Re}px`,borderTop:`${Ce}px ${we} ${Se}`},"&-rtl":{direction:"rtl"}}}};var ie=(0,$.Z)("Drawer",s=>{const p=(0,ee.TS)(s,{});return[pe(p),I(p)]},s=>({zIndexPopup:s.zIndexPopupBase,footerPaddingBlock:s.paddingXS,footerPaddingInline:s.padding})),ke=function(s,p){var K={};for(var N in s)Object.prototype.hasOwnProperty.call(s,N)&&p.indexOf(N)<0&&(K[N]=s[N]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var R=0,N=Object.getOwnPropertySymbols(s);R<N.length;R++)p.indexOf(N[R])<0&&Object.prototype.propertyIsEnumerable.call(s,N[R])&&(K[N[R]]=s[N[R]]);return K};const ye=null,Ee={distance:180},ae=s=>{var p;const{rootClassName:K,width:N,height:R,size:Q="default",mask:oe=!0,push:ce=Ee,open:fe,afterOpenChange:de,onClose:le,prefixCls:Ce,getContainer:we,style:Se,className:Ne,visible:A,afterVisibleChange:_}=s,De=ke(s,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange"]),{getPopupContainer:Oe,getPrefixCls:Me,direction:Re,drawer:xe}=m.useContext(et.E_),be=Me("drawer",Ce),[Ue,Ze]=ie(be),We=we===void 0&&Oe?()=>Oe(document.body):we,Ye=F()({"no-mask":!oe,[`${be}-rtl`]:Re==="rtl"},K,Ze),Le=m.useMemo(()=>N??(Q==="large"?736:378),[N,Q]),Ge=m.useMemo(()=>R??(Q==="large"?736:378),[R,Q]),Ae={motionName:(0,qe.m)(be,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},Pe=je=>({motionName:(0,qe.m)(be,`panel-motion-${je}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500});return Ue(m.createElement(d.BR,null,m.createElement(Ve.Ux,{status:!0,override:!0},m.createElement(Qe,Object.assign({prefixCls:be,onClose:le,maskMotion:Ae,motion:Pe},De,{open:fe??A,mask:oe,push:ce,width:Le,height:Ge,style:Object.assign(Object.assign({},xe?.style),Se),className:F()(xe?.className,Ne),rootClassName:Ye,getContainer:We,afterOpenChange:de??_}),m.createElement(at,Object.assign({prefixCls:be},De,{onClose:le}))))))},se=s=>{const{prefixCls:p,style:K,className:N,placement:R="right"}=s,Q=ke(s,["prefixCls","style","className","placement"]),{getPrefixCls:oe}=m.useContext(et.E_),ce=oe("drawer",p),[fe,de]=ie(ce),le=F()(ce,`${ce}-pure`,`${ce}-${R}`,de,N);return fe(m.createElement("div",{className:le,style:K},m.createElement(at,Object.assign({prefixCls:ce},Q))))};ae._InternalPanelDoNotUseOrYouWillBeFired=se;var ne=ae},85270:function(Be,D,u){var he=u(73203).default;Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var F=he(u(22313)),f=F.default;D.default=f},33527:function(Be,D,u){var he=u(73203).default;Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var F=he(u(10792)),f=F.default;D.default=f},22313:function(Be,D,u){var he=u(73203).default;Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var F=he(u(91412)),f=he(u(14339)),m={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},F.default),timePickerLocale:Object.assign({},f.default)};D.default=m},10792:function(Be,D,u){var he=u(73203).default;Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var F=he(u(71480)),f=he(u(47071));const W={lang:Object.assign({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},F.default),timePickerLocale:Object.assign({},f.default)};W.lang.ok="\u786E\u5B9A";var m=W;D.default=m},75183:function(Be,D,u){var he,F=u(73203).default;he={value:!0},D.Z=void 0;var f=F(u(51367)),W=F(u(85270)),m=F(u(22313)),Te=F(u(14339));const V="${label} is not a valid ${type}";var v={locale:"en",Pagination:f.default,DatePicker:m.default,TimePicker:Te.default,Calendar:W.default,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},PageHeader:{back:"Back"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:V,method:V,array:V,object:V,number:V,date:V,boolean:V,integer:V,float:V,regexp:V,email:V,url:V,hex:V},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh"},ColorPicker:{presetEmpty:"Empty"}};D.Z=v},81107:function(Be,D,u){var he,F=u(73203).default;he={value:!0},D.Z=void 0;var f=F(u(95160)),W=F(u(33527)),m=F(u(10792)),Te=F(u(47071));const V="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}";var v={locale:"zh-cn",Pagination:f.default,DatePicker:m.default,TimePicker:Te.default,Calendar:W.default,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},PageHeader:{back:"\u8FD4\u56DE"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:V,method:V,array:V,object:V,number:V,date:V,boolean:V,integer:V,float:V,regexp:V,email:V,url:V,hex:V},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0"},ColorPicker:{presetEmpty:"\u6682\u65E0"}};D.Z=v},14339:function(Be,D){Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var he={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};D.default=he},47071:function(Be,D){Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var he={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]};D.default=he},51367:function(Be,D){Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var u={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"};D.default=u},95160:function(Be,D){Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var u={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"};D.default=u},91412:function(Be,D){Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var u={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},he=u;D.default=he},71480:function(Be,D){Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var u={locale:"zh_CN",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA"},he=u;D.default=he},66274:function(Be,D,u){var he;u.d(D,{Z:function(){return V}});var F=u(27378),f={942:(o,v,y)=>{y.d(v,{Z:()=>te});var w=y(601),M=y.n(w),P=y(609),O=y.n(P),S=O()(M());S.push([o.id,`.node-right-icon-close {
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
`,""]),S.locals={};const te=S},84:(o,v,y)=>{y.d(v,{Z:()=>te});var w=y(601),M=y.n(w),P=y(609),O=y.n(P),S=O()(M());S.push([o.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]),S.locals={};const te=S},91:(o,v,y)=>{y.d(v,{Z:()=>te});var w=y(601),M=y.n(w),P=y(609),O=y.n(P),S=O()(M());S.push([o.id,`.frame {
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
`,""]),S.locals={};const te=S},505:(o,v,y)=>{y.d(v,{Z:()=>te});var w=y(601),M=y.n(w),P=y(609),O=y.n(P),S=O()(M());S.push([o.id,`.clear::after {
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
`,""]),S.locals={};const te=S},675:(o,v,y)=>{y.d(v,{Z:()=>te});var w=y(601),M=y.n(w),P=y(609),O=y.n(P),S=O()(M());S.push([o.id,`@keyframes ani-fade-in {
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
`,""]),S.locals={};const te=S},609:o=>{o.exports=function(v){var y=[];return y.toString=function(){return this.map(function(w){var M="",P=typeof w[5]<"u";return w[4]&&(M+="@supports (".concat(w[4],") {")),w[2]&&(M+="@media ".concat(w[2]," {")),P&&(M+="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {")),M+=v(w),P&&(M+="}"),w[2]&&(M+="}"),w[4]&&(M+="}"),M}).join("")},y.i=function(w,M,P,O,S){typeof w=="string"&&(w=[[null,w,void 0]]);var te={};if(P)for(var re=0;re<this.length;re++){var ge=this[re][0];ge!=null&&(te[ge]=!0)}for(var me=0;me<w.length;me++){var q=[].concat(w[me]);P&&te[q[0]]||(typeof S<"u"&&(typeof q[5]>"u"||(q[1]="@layer".concat(q[5].length>0?" ".concat(q[5]):""," {").concat(q[1],"}")),q[5]=S),M&&(q[2]&&(q[1]="@media ".concat(q[2]," {").concat(q[1],"}")),q[2]=M),O&&(q[4]?(q[1]="@supports (".concat(q[4],") {").concat(q[1],"}"),q[4]=O):q[4]="".concat(O)),y.push(q))}},y}},601:o=>{o.exports=function(v){return v[1]}},837:(o,v,y)=>{var w=y(810),M=Symbol.for("react.element"),P=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,S=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,te={key:!0,ref:!0,__self:!0,__source:!0};function re(ge,me,q){var ve,Ie={},$e=null,Fe=null;q!==void 0&&($e=""+q),me.key!==void 0&&($e=""+me.key),me.ref!==void 0&&(Fe=me.ref);for(ve in me)O.call(me,ve)&&!te.hasOwnProperty(ve)&&(Ie[ve]=me[ve]);if(ge&&ge.defaultProps)for(ve in me=ge.defaultProps,me)Ie[ve]===void 0&&(Ie[ve]=me[ve]);return{$$typeof:M,type:ge,key:$e,ref:Fe,props:Ie,_owner:S.current}}v.Fragment=P,v.jsx=re,v.jsxs=re},322:(o,v,y)=>{o.exports=y(837)},62:o=>{var v=[];function y(P){for(var O=-1,S=0;S<v.length;S++)if(v[S].identifier===P){O=S;break}return O}function w(P,O){for(var S={},te=[],re=0;re<P.length;re++){var ge=P[re],me=O.base?ge[0]+O.base:ge[0],q=S[me]||0,ve="".concat(me," ").concat(q);S[me]=q+1;var Ie=y(ve),$e={css:ge[1],media:ge[2],sourceMap:ge[3],supports:ge[4],layer:ge[5]};if(Ie!==-1)v[Ie].references++,v[Ie].updater($e);else{var Fe=M($e,O);O.byIndex=re,v.splice(re,0,{identifier:ve,updater:Fe,references:1})}te.push(ve)}return te}function M(P,O){var S=O.domAPI(O);S.update(P);var te=function(re){if(re){if(re.css===P.css&&re.media===P.media&&re.sourceMap===P.sourceMap&&re.supports===P.supports&&re.layer===P.layer)return;S.update(P=re)}else S.remove()};return te}o.exports=function(P,O){O=O||{},P=P||[];var S=w(P,O);return function(te){te=te||[];for(var re=0;re<S.length;re++){var ge=S[re],me=y(ge);v[me].references--}for(var q=w(te,O),ve=0;ve<S.length;ve++){var Ie=S[ve],$e=y(Ie);v[$e].references===0&&(v[$e].updater(),v.splice($e,1))}S=q}}},793:o=>{var v={};function y(M){if(typeof v[M]>"u"){var P=document.querySelector(M);if(window.HTMLIFrameElement&&P instanceof window.HTMLIFrameElement)try{P=P.contentDocument.head}catch{P=null}v[M]=P}return v[M]}function w(M,P){var O=y(M);if(!O)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");O.appendChild(P)}o.exports=w},173:o=>{function v(y){var w=document.createElement("style");return y.setAttributes(w,y.attributes),y.insert(w,y.options),w}o.exports=v},892:(o,v,y)=>{function w(M){var P=y.nc;P&&M.setAttribute("nonce",P)}o.exports=w},36:o=>{function v(M,P,O){var S="";O.supports&&(S+="@supports (".concat(O.supports,") {")),O.media&&(S+="@media ".concat(O.media," {"));var te=typeof O.layer<"u";te&&(S+="@layer".concat(O.layer.length>0?" ".concat(O.layer):""," {")),S+=O.css,te&&(S+="}"),O.media&&(S+="}"),O.supports&&(S+="}");var re=O.sourceMap;re&&typeof btoa<"u"&&(S+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(re))))," */")),P.styleTagTransform(S,M,P.options)}function y(M){if(M.parentNode===null)return!1;M.parentNode.removeChild(M)}function w(M){if(typeof document>"u")return{update:function(){},remove:function(){}};var P=M.insertStyleElement(M);return{update:function(O){v(P,M,O)},remove:function(){y(P)}}}o.exports=w},464:o=>{function v(y,w){if(w.styleSheet)w.styleSheet.cssText=y;else{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(document.createTextNode(y))}}o.exports=v},810:o=>{var v=w=>{var M={};return m.d(M,w),M},y=w=>()=>w;o.exports=he||(he=u.t(F,2))}},W={};function m(o){var v=W[o];if(v!==void 0)return v.exports;var y=W[o]={id:o,exports:{}};return f[o](y,y.exports,m),y.exports}m.n=o=>{var v=o&&o.__esModule?()=>o.default:()=>o;return m.d(v,{a:v}),v},m.d=(o,v)=>{for(var y in v)m.o(v,y)&&!m.o(o,y)&&Object.defineProperty(o,y,{enumerable:!0,get:v[y]})},m.o=(o,v)=>Object.prototype.hasOwnProperty.call(o,v),m.nc=void 0;var Te={};(()=>{m.d(Te,{Z:()=>B});var o=m(322),v=m(810);const y=()=>![typeof window,typeof document].includes("undefined"),w=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),M=t=>w(t).indexOf("element")>-1,P=(t=null)=>y()?M(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},O=(t={})=>{const a=(0,v.useRef)(0),[h,l]=(0,v.useState)(t),c=(0,v.useCallback)(i=>{cancelAnimationFrame(a.current),a.current=requestAnimationFrame(()=>l(i))},[]);return(0,v.useEffect)(()=>()=>cancelAnimationFrame(a.current),[]),[h,c]},S=()=>{const[t,a]=O(P());return(0,v.useEffect)(()=>{const h=()=>a(P());return window.addEventListener("resize",h,!1),()=>window.removeEventListener("resize",h,!1)},[]),t},te=t=>w(t)==="array",re=(t,a,h="id",l="children")=>{if(!te(t))return null;const c=i=>{for(let k=0,E=i.length;k<E;k++){const H=i[k];if(H[h]===a)return[H];if(te(H[l])){const T=c(H[l]);if(T)return[H].concat(T)}}};return c(t)},ge=t=>++t,me=()=>{const[,t]=(0,v.useState)(0);return(0,v.useCallback)(()=>t(ge),[])},q=t=>te(t)&&!!t.length,ve=({to:t,preventDefault:a,stopPropagation:h,...l})=>a?(0,o.jsx)("span",{...l}):(0,o.jsx)("a",{href:t,...l}),Ie=({item:t,...a})=>(0,o.jsx)("ul",{...a}),$e=(t,...a)=>{const h={};return Object.keys(t).filter(Boolean).map(l=>{h[l]=c=>t[l](c,...a)}),h},Fe=({data:t=[],events:a={},List:h=Ie,Link:l=ve,leftIcon:c,rightIcon:i,isHorizontal:k,isCollapsed:E,level:H=0,parentOpen:T=!0})=>{const X=E&&!H,Y=!k&&!E&&!T;return t.map(j=>{const{name:J,path:b,icon:C,rightIcon:L,active:G,open:ue,children:He,linkProps:ze}=j,nt=q(He),Je=j.id||b||J,it=X?j.title??J:void 0,ot=Y?"hidden":"",tt=C??c,Xe=L??i,lt=tt?(0,o.jsx)("div",{className:"node-left-icon",children:tt===!0?(0,o.jsx)("i",{className:"default-left-icon"}):tt}):null,st=J?(0,o.jsx)("div",{className:"node-text",children:(0,o.jsx)("span",{children:J})}):null;if(nt){const ct=$e(a,j,H),dt=[ot,ue?"open":""].filter(Boolean).join(" ");return(0,o.jsxs)("li",{className:dt,"has-children":"true",...ct,children:[(0,o.jsxs)(l,{title:it,className:`link${G?" active":""}`,to:b,preventDefault:!0,stopPropagation:!1,...ze,children:[lt,st,Xe?(0,o.jsx)("div",{className:"node-right-icon",children:Xe===!0?(0,o.jsx)("i",{className:"default-right-icon"}):Xe}):null]}),(0,o.jsx)(h,{item:j,children:Fe({data:He,events:a,List:h,Link:l,leftIcon:c,rightIcon:i,isHorizontal:k,isCollapsed:E,level:H+1,parentOpen:!!ue})})]},Je)}return(0,o.jsx)("li",{className:ot,children:(0,o.jsxs)(l,{title:it,className:`link${G?" active":""}`,to:b,...ze,children:[lt,st]})},Je)})},_e=Fe,Qe=t=>{const{children:a,open:h}=t;let l=0;if(h&&a?.length){l=a.length;let c=0;return a.map(i=>c+=Qe(i)),l+c}return l},qe=({item:t,style:a,...h})=>(0,o.jsx)("ul",{style:{...a,"--count":Qe(t)},...h});var et=m(62),Ve=m.n(et),rt=m(36),Ke=m.n(rt),at=m(793),d=m.n(at),$=m(892),ee=m.n($),z=m(173),I=m.n(z),pe=m(464),ie=m.n(pe),ke=m(942),ye={};ye.styleTagTransform=ie(),ye.setAttributes=ee(),ye.insert=d().bind(null,"head"),ye.domAPI=Ke(),ye.insertStyleElement=I();var Ee=Ve()(ke.Z,ye);const ae=ke.Z&&ke.Z.locals?ke.Z.locals:void 0,se=t=>(0,o.jsx)("ul",{...t}),ne=(t,a)=>t?qe:({item:h,...l})=>(0,o.jsx)(se,{className:a==="right"?"left":"",...l}),s=t=>{const{data:a=[],collapsed:h=!1,type:l="vertical",Link:c,width:i,bgColor:k,itemHeight:E,collapsedWidth:H,itemPadding:T,style:X,className:Y,...j}=t,J=(0,v.useRef)(),b=(0,v.useRef)();(0,v.useEffect)(()=>()=>clearTimeout(J.current),[]);const C=me(),L=l==="horizontal",G=!L&&h,ue={onClick:(ot,tt)=>{if(ot.stopPropagation(),!L&&!G){const Xe=re(a,tt.path,"path"),lt=Xe[Xe.length-1];lt.open=!lt.open,C()}},onMouseEnter:(ot,tt,Xe)=>{G&&!Xe&&(clearTimeout(J.current),b.current.style.width="var(--maxWidth)")},onMouseLeave:(ot,tt,Xe)=>{G&&!Xe&&(J.current=setTimeout(()=>b.current.style.width="",200))}},He=(L?["huxy-horizontal-tree",Y]:["huxy-tree",Y,G?"collapsed":""]).filter(Boolean).join(" "),{float:ze,...nt}=j?.style??{},Je={"--bgColor":k,"--itemHeight":E,"--nodeListWidth":i,...nt};L?(Je["--itemPadding"]=T,Je["--nodeFloat"]=ze):(Je["--width"]=i,Je["--collapsedWidth"]=H);const it=ne(!L&&!G,ze);return(0,o.jsx)("div",{ref:b,className:He,style:Je,...j,children:(0,o.jsx)("div",{className:"huxy-tree-track",children:(0,o.jsx)("ul",{className:"huxy-tree-root",children:_e({data:a,events:ue,List:it,Link:c,leftIcon:!0,rightIcon:!0,isHorizontal:L,isCollapsed:G})})})})},p=(t,a)=>Object.prototype.hasOwnProperty.call(t??{},a),K=t=>p(t,"current"),N=(t,a,h="click")=>{(0,v.useEffect)(()=>{const l=i=>{const k=K(t)?t.current:t;k?.contains&&!k.contains(i.target)&&a(i)},c=typeof h=="string"?[h]:h;return c.map(i=>{document.addEventListener(i,l,!1)}),()=>{c.map(i=>{document.removeEventListener(i,l,!1)})}},[t,a,h])},R=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),Q=t=>new Promise((a,h)=>{const l=new FileReader;l.readAsDataURL(t),l.addEventListener("load",()=>a(l.result)),l.addEventListener("error",c=>h(c))}),oe=async t=>{if(!R(t))return t;const a=await(await fetch(decodeURIComponent(t))).blob();return await Q(a)},ce=t=>{const[a,h]=(0,v.useState)(t);return(0,v.useEffect)(()=>{(async l=>{const c=await oe(l);h(c)})(t)},[t]),a},fe=({src:t,...a})=>{const h=ce(t);return(0,o.jsx)("img",{...a,src:h})},de=({Ricon:t,open:a})=>t===!0?(0,o.jsx)("i",{className:`huxy-header-angle-${a?"top":"bt"}`}):(0,o.jsx)(t,{status:a}),le=({img:t,name:a,icon:h,Ricon:l,open:c})=>t?(0,o.jsxs)("div",{className:"avatar",children:[(0,o.jsx)("div",{className:"img",children:(0,o.jsx)(fe,{src:t,width:"1",height:"1",crossOrigin:"anonymous",alt:"avatar"})}),a?(0,o.jsx)("span",{className:"txt",children:a}):null,l?(0,o.jsx)("span",{className:"node-icon",children:(0,o.jsx)(de,{Ricon:l,open:c})}):null]}):(0,o.jsxs)(o.Fragment,{children:[h?(0,o.jsx)("span",{className:"node-icon",children:h}):null,a?(0,o.jsx)("span",{className:"txt",children:a}):null,l?(0,o.jsx)("span",{className:"node-icon",children:(0,o.jsx)(de,{Ricon:l,open:c})}):null]}),Ce=({item:t,open:a})=>{const{Custom:h,img:l,name:c,icon:i,Ricon:k,active:E}=t;return typeof h=="function"?(0,o.jsx)(h,{item:t,className:"link"}):(0,o.jsx)("span",{className:`link${E?" active":""}`,title:t.title||c,children:(0,o.jsx)(le,{img:l,name:c,icon:i,Ricon:k,open:a})})},we=({item:t,click:a})=>{const h=(0,v.useRef)(),[l,c]=(0,v.useState)(!1);N(h,j=>l&&c(!1));const{arrowDir:i,ChildRender:k,children:E,smShow:H}=t,T=E?.length,X=(j,J,b=null)=>{b===!1&&c(C=>!C),b&&(j.stopPropagation(),c(!1)),a(J,b)},Y=H?"sm-show":"";return T||k?(0,o.jsxs)("li",{ref:h,className:`${Y} ${l?"open":""}`,onClick:j=>X(j,t,!1),children:[(0,o.jsx)(Ce,{item:t,open:l}),(0,o.jsx)("ul",{className:`huxy-header-arrow-${i||"rt"}`,children:T?E.map((j,J)=>(0,o.jsx)("li",{className:j.divider?"divider":"",children:(0,o.jsxs)("span",{onClick:b=>X(b,j,!0),className:`link${j.active?" active":""}`,children:[j.icon?(0,o.jsx)("span",{className:"node-icon",children:j.icon}):null,(0,o.jsx)("span",{className:"drop-label",children:j.name})]})},`subItem-${J}-${j.key||j.name}`)):(0,o.jsx)("li",{children:(0,o.jsx)(k,{item:t,close:()=>c(!1)})})})]}):(0,o.jsx)("li",{onClick:j=>X(j,t),className:Y,children:(0,o.jsx)(Ce,{item:t,open:l})})},Se=({list:t,click:a})=>(0,o.jsx)("ul",{children:t.map((h,l)=>(0,o.jsx)(we,{click:a,item:h},`navItem-${l}-${h.key||h.name}`))}),Ne=t=>{const{leftList:a,rightList:h,handleNavClick:l,logo:c,title:i,Link:k}=t;return(0,o.jsxs)("div",{className:"header",children:[(0,o.jsxs)(k,{className:"banner",to:"/",children:[c?(0,o.jsx)("div",{className:"logo",children:(0,o.jsx)("img",{width:"1",height:"1",src:c,alt:"logo"})}):null,(0,o.jsx)("div",{className:"title",children:i??"Dashboard"})]}),(0,o.jsx)("div",{className:"nav",children:(0,o.jsxs)("div",{className:"nav-wrap",children:[(0,o.jsx)("div",{className:"nav-left",children:(0,o.jsx)(Se,{list:a,click:l})}),(0,o.jsx)("div",{className:"nav-right",children:(0,o.jsx)(Se,{list:h,click:l})})]})})]})};var A=m(505),_={};_.styleTagTransform=ie(),_.setAttributes=ee(),_.insert=d().bind(null,"head"),_.domAPI=Ke(),_.insertStyleElement=I();var De=Ve()(A.Z,_);const Oe=A.Z&&A.Z.locals?A.Z.locals:void 0,Me=({language:t,...a})=>(0,v.useMemo)(()=>(0,o.jsx)(Ne,{...a}),[t]),Re=t=>{const{navMenu:a,headerStyle:h,navMenuStyle:l,Link:c,leftList:i,rightList:k,handleNavClick:E,logo:H,title:T,language:X}=t;return(0,o.jsxs)("header",{className:"frame-header",style:h,children:[i?.length||k?.length?(0,o.jsx)(Me,{Link:c,leftList:i,rightList:k,handleNavClick:(Y,j)=>E(t,Y,j),logo:H,title:T,language:X}):null,a?.length?(0,o.jsx)(s,{data:a,type:"horizontal",Link:c,style:l}):null]})};var xe=m(84),be={};be.styleTagTransform=ie(),be.setAttributes=ee(),be.insert=d().bind(null,"head"),be.domAPI=Ke(),be.insertStyleElement=I();var Ue=Ve()(xe.Z,be);const Ze=xe.Z&&xe.Z.locals?xe.Z.locals:void 0,We=({Footer:t})=>(0,o.jsx)("div",{className:"footer",children:t?(0,o.jsx)(t,{}):"copyright \xA9 2020-2022"}),Ye=t=>{const{useStore:a,menu:h,MenuTop:l,MenuBottom:c,Link:i,inputPath:k,asideStyle:E}=t,[H,T]=a("huxy-collapse"),{width:X}=S(),Y=(0,v.useRef)();return N(Y,j=>{X<=1024&&H&&T(!1)}),(0,v.useEffect)(()=>{X<=1024&&H&&T(!1)},[k]),(0,o.jsx)("aside",{className:"frame-aside",style:E,children:(0,o.jsxs)("div",{ref:Y,style:{height:"100%"},children:[l&&(0,o.jsx)(l,{...t}),(0,o.jsx)(s,{data:h,collapsed:H&&X>1024,Link:i}),c&&(0,o.jsx)(c,{collapsed:H,isSmall:X<=1024,setCollapsed:T})]})})},Le=380,Ge=({inputPath:t,menuAnimate:a="ani-in"})=>{const h=(0,v.useRef)(t.split("?")[0]),l=(0,v.useRef)(),[c,i]=(0,v.useState)("");return(0,v.useEffect)(()=>{const k=t.split("?")[0];return k!==h.current&&(h.current=k,i(` ${a}`),l.current=setTimeout(()=>{i("")},Le)),()=>{clearTimeout(l.current),i("")}},[t]),c},Ae=t=>{const{inputPath:a,contentStyle:h,menuAnimate:l,children:c}=t,i=Ge({inputPath:a,menuAnimate:l});return(0,o.jsx)("div",{className:`page-content${i}`,style:h,children:c})};var Pe=m(675),je={};je.styleTagTransform=ie(),je.setAttributes=ee(),je.insert=d().bind(null,"head"),je.domAPI=Ke(),je.insertStyleElement=I();var e=Ve()(Pe.Z,je);const r=Pe.Z&&Pe.Z.locals?Pe.Z.locals:void 0,g=t=>{const{menu:a,current:h,MainTop:l,children:c,inputPath:i,contentStyle:k,menuAnimate:E}=t,H=a?.length,T=E?E===!0?"ani-in":E:"";return(0,o.jsxs)("div",{className:`frame-container${H?"":" no-sidebar"}`,children:[H?(0,o.jsx)(Ye,{...t}):null,(0,o.jsx)("div",{className:"frame-view",children:(0,o.jsxs)("div",{className:"page-container",children:[l&&(0,o.jsx)(l,{current:h}),T?(0,o.jsx)(Ae,{inputPath:i,contentStyle:k,menuAnimate:T,children:c}):(0,o.jsx)("div",{className:"page-content",style:k,children:c})]})}),(0,o.jsx)("footer",{className:"frame-footer",children:(0,o.jsx)(We,{...t})})]})};var n=m(91),x={};x.styleTagTransform=ie(),x.setAttributes=ee(),x.insert=d().bind(null,"head"),x.domAPI=Ke(),x.insertStyleElement=I();var Z=Ve()(n.Z,x);const U=n.Z&&n.Z.locals?n.Z.locals:void 0,B=t=>{const{useStore:a,vertical:h,horizontal:l,menu:c,leftList:i,rightList:k}=t,{width:E}=S(),[H]=a("huxy-collapse"),T=E<=1024,X=T?c:h,Y=T?[]:l,j=X?.length,J=Y?.length,b=J&&j,C=b?"compose":J?"horizontal":H?"collapsed":"",L=b&&H?"composeCollapsed":"",G=i?.length||k?.length?"":"no-header",ue=["frame",C,L,G].filter(Boolean).join(" ");return(0,o.jsxs)("div",{className:ue,children:[(0,o.jsx)(Re,{...t,navMenu:Y}),(0,o.jsx)("main",{className:"frame-main",children:(0,o.jsx)(g,{...t,menu:X})})]})}})();var V=Te.Z}}]);
