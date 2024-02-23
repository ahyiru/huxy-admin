(self.webpackChunk=self.webpackChunk||[]).push([[600],{60925:function(et,O,l){l.d(O,{A:function(){return ut}});var o=l(63696),Me=l(4452),R=l.n(Me),ye=l(6451),L=l(49338),lt=l(74318),D=l(67346),r=l(29644),u=l(27405),m=l(78325),k=l(68102),C=l(41705),$=l(56737),N=l(82772),S=o.forwardRef(function(e,t){var i=e.prefixCls,n=e.style,s=e.className,b=e.duration,j=b===void 0?4.5:b,X=e.eventKey,A=e.content,T=e.closable,U=e.closeIcon,ae=U===void 0?"x":U,z=e.props,Q=e.onClick,Y=e.onNoticeClose,me=e.times,J=e.hovering,ie=o.useState(!1),Se=(0,D.A)(ie,2),Pe=Se[0],_=Se[1],Ae=J||Pe,Ie=function(){Y(X)},he=function(le){(le.key==="Enter"||le.code==="Enter"||le.keyCode===N.A.ENTER)&&Ie()};o.useEffect(function(){if(!Ae&&j>0){var oe=setTimeout(function(){Ie()},j*1e3);return function(){clearTimeout(oe)}}},[j,Ae,me]);var q="".concat(i,"-notice");return o.createElement("div",(0,k.A)({},z,{ref:t,className:R()(q,s,(0,C.A)({},"".concat(q,"-closable"),T)),style:n,onMouseEnter:function(le){var pe;_(!0),z==null||(pe=z.onMouseEnter)===null||pe===void 0||pe.call(z,le)},onMouseLeave:function(le){var pe;_(!1),z==null||(pe=z.onMouseLeave)===null||pe===void 0||pe.call(z,le)},onClick:Q}),o.createElement("div",{className:"".concat(q,"-content")},A),T&&o.createElement("a",{tabIndex:0,className:"".concat(q,"-close"),onKeyDown:he,onClick:function(le){le.preventDefault(),le.stopPropagation(),Ie()}},ae))}),re=S,ne=o.createContext({}),Re=function(t){var i=t.children,n=t.classNames;return o.createElement(ne.Provider,{value:{classNames:n}},i)},ke=Re,ee=l(40694),Oe=8,tt=3,at=16,ft=function(t){var i={offset:Oe,threshold:tt,gap:at};if(t&&(0,ee.A)(t)==="object"){var n,s,b;i.offset=(n=t.offset)!==null&&n!==void 0?n:Oe,i.threshold=(s=t.threshold)!==null&&s!==void 0?s:tt,i.gap=(b=t.gap)!==null&&b!==void 0?b:at}return[!!t,i]},Ht=ft,Pt=["className","style","classNames","styles"],Ot=function(t){var i,n=t.configList,s=t.placement,b=t.prefixCls,j=t.className,X=t.style,A=t.motion,T=t.onAllNoticeRemoved,U=t.onNoticeClose,ae=t.stack,z=(0,o.useContext)(ne),Q=z.classNames,Y=(0,o.useRef)({}),me=(0,o.useState)(null),J=(0,D.A)(me,2),ie=J[0],Se=J[1],Pe=(0,o.useState)([]),_=(0,D.A)(Pe,2),Ae=_[0],Ie=_[1],he=n.map(function(ht){return{config:ht,key:String(ht.key)}}),q=Ht(ae),oe=(0,D.A)(q,2),le=oe[0],pe=oe[1],yt=pe.offset,zt=pe.threshold,Dt=pe.gap,Lt=le&&(Ae.length>0||he.length<=zt),no=typeof A=="function"?A(s):A;return(0,o.useEffect)(function(){le&&Ae.length>1&&Ie(function(ht){return ht.filter(function(Rt){return he.some(function(Wt){var Yt=Wt.key;return Rt===Yt})})})},[Ae,he,le]),(0,o.useEffect)(function(){var ht;if(le&&Y.current[(ht=he[he.length-1])===null||ht===void 0?void 0:ht.key]){var Rt;Se(Y.current[(Rt=he[he.length-1])===null||Rt===void 0?void 0:Rt.key])}},[he,le]),o.createElement($.aF,(0,k.A)({key:s,className:R()(b,"".concat(b,"-").concat(s),Q?.list,j,(i={},(0,C.A)(i,"".concat(b,"-stack"),!!le),(0,C.A)(i,"".concat(b,"-stack-expanded"),Lt),i)),style:X,keys:he,motionAppear:!0},no,{onAllRemoved:function(){T(s)}}),function(ht,Rt){var Wt=ht.config,Yt=ht.className,ao=ht.style,io=ht.index,to=Wt,Gt=to.key,lo=to.times,Nt=String(Gt),Ft=Wt,so=Ft.className,co=Ft.style,Ut=Ft.classNames,Kt=Ft.styles,uo=(0,r.A)(Ft,Pt),Xt=he.findIndex(function(Vt){return Vt.key===Nt}),Zt={};if(le){var Bt=he.length-1-(Xt>-1?Xt:io-1),oo=s==="top"||s==="bottom"?"-50%":"0";if(Bt>0){var Qt,Jt,_t;Zt.height=Lt?(Qt=Y.current[Nt])===null||Qt===void 0?void 0:Qt.offsetHeight:ie?.offsetHeight;for(var ro=0,qt=0;qt<Bt;qt++){var eo;ro+=((eo=Y.current[he[he.length-1-qt].key])===null||eo===void 0?void 0:eo.offsetHeight)+Dt}var ho=(Lt?ro:Bt*yt)*(s.startsWith("top")?1:-1),fo=!Lt&&ie!==null&&ie!==void 0&&ie.offsetWidth&&(Jt=Y.current[Nt])!==null&&Jt!==void 0&&Jt.offsetWidth?(ie?.offsetWidth-yt*2*(Bt<3?Bt:3))/((_t=Y.current[Nt])===null||_t===void 0?void 0:_t.offsetWidth):1;Zt.transform="translate3d(".concat(oo,", ").concat(ho,"px, 0) scaleX(").concat(fo,")")}else Zt.transform="translate3d(".concat(oo,", 0, 0)")}return o.createElement("div",{ref:Rt,className:R()("".concat(b,"-notice-wrapper"),Yt,Ut?.wrapper),style:(0,u.A)((0,u.A)((0,u.A)({},ao),Zt),Kt?.wrapper),onMouseEnter:function(){return Ie(function(Tt){return Tt.includes(Nt)?Tt:[].concat((0,lt.A)(Tt),[Nt])})},onMouseLeave:function(){return Ie(function(Tt){return Tt.filter(function(mo){return mo!==Nt})})}},o.createElement(re,(0,k.A)({},uo,{ref:function(Tt){Xt>-1?Y.current[Nt]=Tt:delete Y.current[Nt]},prefixCls:b,classNames:Ut,styles:Kt,className:R()(so,Q?.notice),style:co,times:lo,key:Gt,eventKey:Gt,onNoticeClose:U,hovering:le&&Ae.length>0})))})},At=Ot,bt=o.forwardRef(function(e,t){var i=e.prefixCls,n=i===void 0?"rc-notification":i,s=e.container,b=e.motion,j=e.maxCount,X=e.className,A=e.style,T=e.onAllRemoved,U=e.stack,ae=e.renderNotifications,z=o.useState([]),Q=(0,D.A)(z,2),Y=Q[0],me=Q[1],J=function(oe){var le,pe=Y.find(function(yt){return yt.key===oe});pe==null||(le=pe.onClose)===null||le===void 0||le.call(pe),me(function(yt){return yt.filter(function(zt){return zt.key!==oe})})};o.useImperativeHandle(t,function(){return{open:function(oe){me(function(le){var pe=(0,lt.A)(le),yt=pe.findIndex(function(Lt){return Lt.key===oe.key}),zt=(0,u.A)({},oe);if(yt>=0){var Dt;zt.times=(((Dt=le[yt])===null||Dt===void 0?void 0:Dt.times)||0)+1,pe[yt]=zt}else zt.times=0,pe.push(zt);return j>0&&pe.length>j&&(pe=pe.slice(-j)),pe})},close:function(oe){J(oe)},destroy:function(){me([])}}});var ie=o.useState({}),Se=(0,D.A)(ie,2),Pe=Se[0],_=Se[1];o.useEffect(function(){var q={};Y.forEach(function(oe){var le=oe.placement,pe=le===void 0?"topRight":le;pe&&(q[pe]=q[pe]||[],q[pe].push(oe))}),Object.keys(Pe).forEach(function(oe){q[oe]=q[oe]||[]}),_(q)},[Y]);var Ae=function(oe){_(function(le){var pe=(0,u.A)({},le),yt=pe[oe]||[];return yt.length||delete pe[oe],pe})},Ie=o.useRef(!1);if(o.useEffect(function(){Object.keys(Pe).length>0?Ie.current=!0:Ie.current&&(T?.(),Ie.current=!1)},[Pe]),!s)return null;var he=Object.keys(Pe);return(0,m.createPortal)(o.createElement(o.Fragment,null,he.map(function(q){var oe=Pe[q],le=o.createElement(At,{key:q,configList:oe,placement:q,prefixCls:n,className:X?.(q),style:A?.(q),motion:b,onNoticeClose:J,onAllNoticeRemoved:Ae,stack:U});return ae?ae(le,{prefixCls:n,key:q}):le})),s)}),Et=bt,kt=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],wt=function(){return document.body},gt=0;function It(){for(var e={},t=arguments.length,i=new Array(t),n=0;n<t;n++)i[n]=arguments[n];return i.forEach(function(s){s&&Object.keys(s).forEach(function(b){var j=s[b];j!==void 0&&(e[b]=j)})}),e}function mt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.getContainer,i=t===void 0?wt:t,n=e.motion,s=e.prefixCls,b=e.maxCount,j=e.className,X=e.style,A=e.onAllRemoved,T=e.stack,U=e.renderNotifications,ae=(0,r.A)(e,kt),z=o.useState(),Q=(0,D.A)(z,2),Y=Q[0],me=Q[1],J=o.useRef(),ie=o.createElement(Et,{container:Y,ref:J,prefixCls:s,motion:n,maxCount:b,className:j,style:X,onAllRemoved:A,stack:T,renderNotifications:U}),Se=o.useState([]),Pe=(0,D.A)(Se,2),_=Pe[0],Ae=Pe[1],Ie=o.useMemo(function(){return{open:function(q){var oe=It(ae,q);(oe.key===null||oe.key===void 0)&&(oe.key="rc-notification-".concat(gt),gt+=1),Ae(function(le){return[].concat((0,lt.A)(le),[{type:"open",config:oe}])})},close:function(q){Ae(function(oe){return[].concat((0,lt.A)(oe),[{type:"close",key:q}])})},destroy:function(){Ae(function(q){return[].concat((0,lt.A)(q),[{type:"destroy"}])})}}},[]);return o.useEffect(function(){me(i())}),o.useEffect(function(){J.current&&_.length&&(_.forEach(function(he){switch(he.type){case"open":J.current.open(he.config);break;case"close":J.current.close(he.key);break;case"destroy":J.current.destroy();break}}),Ae(function(he){return he.filter(function(q){return!_.includes(q)})}))},[_]),[Ie,ie]}var jt=l(78761),c=l(8346),g=l(31964),H=l(97496),w=l(31573),y=l(20278),Ce=l(15438),se=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]]);return i};const ot={info:o.createElement(y.A,null),success:o.createElement(g.A,null),error:o.createElement(H.A,null),warning:o.createElement(w.A,null),loading:o.createElement(Ce.A,null)},Qe=e=>{let{prefixCls:t,type:i,icon:n,children:s}=e;return o.createElement("div",{className:R()(`${t}-custom-content`,`${t}-${i}`)},n||ot[i],o.createElement("span",null,s))},Ye=e=>{const{prefixCls:t,className:i,type:n,icon:s,content:b}=e,j=se(e,["prefixCls","className","type","icon","content"]),{getPrefixCls:X}=React.useContext(ConfigContext),A=t||X("message"),T=useCSSVarCls(A),[U,ae,z]=useStyle(A,T);return U(React.createElement(Notice,Object.assign({},j,{prefixCls:A,className:classNames(i,ae,`${A}-notice-pure-panel`,z,T),eventKey:"pure",duration:null,content:React.createElement(Qe,{prefixCls:A,type:n,icon:s},b)})))};var De=null,F=l(81382),ve=l(98735),Te=l(94029),Fe=l(414),Ee=l(48876);const Je=e=>{const{componentCls:t,iconCls:i,boxShadow:n,colorText:s,colorSuccess:b,colorError:j,colorWarning:X,colorInfo:A,fontSizeLG:T,motionEaseInOutCirc:U,motionDurationSlow:ae,marginXS:z,paddingXS:Q,borderRadiusLG:Y,zIndexPopup:me,contentPadding:J,contentBg:ie}=e,Se=`${t}-notice`,Pe=new F.Mo("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:Q,transform:"translateY(0)",opacity:1}}),_=new F.Mo("MessageMoveOut",{"0%":{maxHeight:e.height,padding:Q,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),Ae={padding:Q,textAlign:"center",[`${t}-custom-content > ${i}`]:{verticalAlign:"text-bottom",marginInlineEnd:z,fontSize:T},[`${Se}-content`]:{display:"inline-block",padding:J,background:ie,borderRadius:Y,boxShadow:n,pointerEvents:"all"},[`${t}-success > ${i}`]:{color:b},[`${t}-error > ${i}`]:{color:j},[`${t}-warning > ${i}`]:{color:X},[`${t}-info > ${i},
      ${t}-loading > ${i}`]:{color:A}};return[{[t]:Object.assign(Object.assign({},(0,Te.dF)(e)),{color:s,position:"fixed",top:z,width:"100%",pointerEvents:"none",zIndex:me,[`${t}-move-up`]:{animationFillMode:"forwards"},[`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]:{animationName:Pe,animationDuration:ae,animationPlayState:"paused",animationTimingFunction:U},[`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${t}-move-up-leave`]:{animationName:_,animationDuration:ae,animationPlayState:"paused",animationTimingFunction:U},[`${t}-move-up-leave${t}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[t]:{[`${Se}-wrapper`]:Object.assign({},Ae)}},{[`${t}-notice-pure-panel`]:Object.assign(Object.assign({},Ae),{padding:0,textAlign:"start"})}]},He=e=>({zIndexPopup:e.zIndexPopupBase+ve.jH+10,contentBg:e.colorBgElevated,contentPadding:`${(e.controlHeightLG-e.fontSize*e.lineHeight)/2}px ${e.paddingSM}px`});var Ge=(0,Fe.OF)("Message",e=>{const t=(0,Ee.h1)(e,{height:150});return[Je(t)]},He);function st(e,t){return{motionName:t??`${e}-move-up`}}function d(e){let t;const i=new Promise(s=>{t=e(()=>{s(!0)})}),n=()=>{t?.()};return n.then=(s,b)=>i.then(s,b),n.promise=i,n}var h=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]]);return i};const K=8,P=3,B=e=>{let{children:t,prefixCls:i}=e;const n=(0,c.A)(i),[s,b,j]=Ge(i,n);return s(o.createElement(ke,{classNames:{list:R()(b,j,n)}},t))},te=(e,t)=>{let{prefixCls:i,key:n}=t;return o.createElement(B,{prefixCls:i,key:n},e)},ge=o.forwardRef((e,t)=>{const{top:i,prefixCls:n,getContainer:s,maxCount:b,duration:j=P,rtl:X,transitionName:A,onAllRemoved:T}=e,{getPrefixCls:U,getPopupContainer:ae,message:z,direction:Q}=o.useContext(ye.QO),Y=n||U("message"),me=()=>({left:"50%",transform:"translateX(-50%)",top:i??K}),J=()=>R()({[`${Y}-rtl`]:X??Q==="rtl"}),ie=()=>st(Y,A),Se=o.createElement("span",{className:`${Y}-close-x`},o.createElement(L.A,{className:`${Y}-close-icon`})),[Pe,_]=mt({prefixCls:Y,style:me,className:J,motion:ie,closable:!1,closeIcon:Se,duration:j,getContainer:()=>s?.()||ae?.()||document.body,maxCount:b,onAllRemoved:T,renderNotifications:te});return o.useImperativeHandle(t,()=>Object.assign(Object.assign({},Pe),{prefixCls:Y,message:z})),_});let be=0;function E(e){const t=o.useRef(null),i=(0,jt.rJ)("Message");return[o.useMemo(()=>{const s=T=>{var U;(U=t.current)===null||U===void 0||U.close(T)},b=T=>{if(!t.current){const he=()=>{};return he.then=()=>{},he}const{open:U,prefixCls:ae,message:z}=t.current,Q=`${ae}-notice`,{content:Y,icon:me,type:J,key:ie,className:Se,style:Pe,onClose:_}=T,Ae=h(T,["content","icon","type","key","className","style","onClose"]);let Ie=ie;return Ie==null&&(be+=1,Ie=`antd-message-${be}`),d(he=>(U(Object.assign(Object.assign({},Ae),{key:Ie,content:o.createElement(Qe,{prefixCls:ae,type:J,icon:me},Y),placement:"top",className:R()(J&&`${Q}-${J}`,Se,z?.className),style:Object.assign(Object.assign({},z?.style),Pe),onClose:()=>{_?.(),he()}})),()=>{s(Ie)}))},X={open:b,destroy:T=>{var U;T!==void 0?s(T):(U=t.current)===null||U===void 0||U.destroy()}};return["info","success","warning","error","loading"].forEach(T=>{const U=(ae,z,Q)=>{let Y;ae&&typeof ae=="object"&&"content"in ae?Y=ae:Y={content:ae};let me,J;typeof z=="function"?J=z:(me=z,J=Q);const ie=Object.assign(Object.assign({onClose:J,duration:me},Y),{type:T});return b(ie)};X[T]=U}),X},[]),o.createElement(ge,Object.assign({key:"message-holder"},e,{ref:t}))]}function Z(e){return E(e)}var Ne=l(13829),Le=l(94313),rt=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]]);return i};const je={info:o.createElement(y.A,null),success:o.createElement(g.A,null),error:o.createElement(H.A,null),warning:o.createElement(w.A,null),loading:o.createElement(Ce.A,null)};function xe(e,t){return t===null||t===!1?null:t||o.createElement("span",{className:`${e}-close-x`},o.createElement(L.A,{className:`${e}-close-icon`}))}const ze={success:g.A,info:y.A,error:H.A,warning:w.A},V=e=>{const{prefixCls:t,icon:i,type:n,message:s,description:b,btn:j,role:X="alert"}=e;let A=null;return i?A=o.createElement("span",{className:`${t}-icon`},i):n&&(A=o.createElement(ze[n]||null,{className:R()(`${t}-icon`,`${t}-icon-${n}`)})),o.createElement("div",{className:R()({[`${t}-with-icon`]:A}),role:X},A,o.createElement("div",{className:`${t}-message`},s),o.createElement("div",{className:`${t}-description`},b),j&&o.createElement("div",{className:`${t}-btn`},j))},nt=e=>{const{prefixCls:t,className:i,icon:n,type:s,message:b,description:j,btn:X,closable:A=!0,closeIcon:T,className:U}=e,ae=rt(e,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:z}=React.useContext(ConfigContext),Q=t||z("notification"),Y=`${Q}-notice`,me=useCSSVarCls(Q),[J,ie,Se]=useStyle(Q,me);return J(React.createElement("div",{className:classNames(`${Y}-pure-panel`,ie,i,Se,me)},React.createElement(PurePanelStyle,{prefixCls:Q}),React.createElement(Notice,Object.assign({},ae,{prefixCls:Q,eventKey:"pure",duration:null,closable:A,className:classNames({notificationClassName:U}),closeIcon:xe(Q,T),content:React.createElement(V,{prefixCls:Y,icon:n,type:s,message:b,description:j,btn:X})}))))};var Xe=null,we=e=>{const{componentCls:t,notificationMarginEdge:i,animationMaxHeight:n}=e,s=`${t}-notice`,b=new F.Mo("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),j=new F.Mo("antNotificationTopFadeIn",{"0%":{top:-n,opacity:0},"100%":{top:0,opacity:1}}),X=new F.Mo("antNotificationBottomFadeIn",{"0%":{bottom:e.calc(n).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),A=new F.Mo("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[t]:{[`&${t}-top, &${t}-bottom`]:{marginInline:0,[s]:{marginInline:"auto auto"}},[`&${t}-top`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:j}},[`&${t}-bottom`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:X}},[`&${t}-topRight, &${t}-bottomRight`]:{[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:b}},[`&${t}-topLeft, &${t}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:i,_skip_check_:!0},[s]:{marginInlineEnd:"auto",marginInlineStart:0},[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationName:A}}}}};const We=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"],_e={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},qe=(e,t)=>{const{componentCls:i}=e;return{[`${i}-${t}`]:{[`&${i}-stack > ${i}-notice-wrapper`]:{[t.startsWith("top")?"top":"bottom"]:0,[_e[t]]:{value:0,_skip_check_:!0}}}}},Ke=e=>{const t={};for(let i=1;i<e.notificationStackLayer;i++)t[`&:nth-last-child(${i+1})`]={overflow:"hidden",[`& > ${e.componentCls}-notice`]:{opacity:0,transition:`opacity ${e.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${e.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},t)},Ue=e=>{const t={};for(let i=1;i<e.notificationStackLayer;i++)t[`&:nth-last-child(${i+1})`]={background:e.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},t)};var Ct=e=>{const{componentCls:t}=e;return Object.assign({[`${t}-stack`]:{[`& > ${t}-notice-wrapper`]:Object.assign({transition:`all ${e.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},Ke(e))},[`${t}-stack:not(${t}-stack-expanded)`]:{[`& > ${t}-notice-wrapper`]:Object.assign({},Ue(e))},[`${t}-stack${t}-stack-expanded`]:{[`& > ${t}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${e.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:e.margin,width:"100%",insetInline:0,bottom:e.calc(e.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},We.map(i=>qe(e,i)).reduce((i,n)=>Object.assign(Object.assign({},i),n),{}))};const xt=e=>{const{iconCls:t,componentCls:i,boxShadow:n,fontSizeLG:s,notificationMarginBottom:b,borderRadiusLG:j,colorSuccess:X,colorInfo:A,colorWarning:T,colorError:U,colorTextHeading:ae,notificationBg:z,notificationPadding:Q,notificationMarginEdge:Y,fontSize:me,lineHeight:J,width:ie,notificationIconSize:Se,colorText:Pe}=e,_=`${i}-notice`;return{position:"relative",marginBottom:b,marginInlineStart:"auto",background:z,borderRadius:j,boxShadow:n,[_]:{padding:Q,width:ie,maxWidth:`calc(100vw - ${(0,F.zA)(e.calc(Y).mul(2).equal())})`,overflow:"hidden",lineHeight:J,wordWrap:"break-word"},[`${i}-close-icon`]:{fontSize:me,cursor:"pointer"},[`${_}-message`]:{marginBottom:e.marginXS,color:ae,fontSize:s,lineHeight:e.lineHeightLG},[`${_}-description`]:{fontSize:me,color:Pe},[`${_}-closable ${_}-message`]:{paddingInlineEnd:e.paddingLG},[`${_}-with-icon ${_}-message`]:{marginBottom:e.marginXS,marginInlineStart:e.calc(e.marginSM).add(Se).equal(),fontSize:s},[`${_}-with-icon ${_}-description`]:{marginInlineStart:e.calc(e.marginSM).add(Se).equal(),fontSize:me},[`${_}-icon`]:{position:"absolute",fontSize:Se,lineHeight:1,[`&-success${t}`]:{color:X},[`&-info${t}`]:{color:A},[`&-warning${t}`]:{color:T},[`&-error${t}`]:{color:U}},[`${_}-close`]:{position:"absolute",top:e.notificationPaddingVertical,insetInlineEnd:e.notificationPaddingHorizontal,color:e.colorIcon,outline:"none",width:e.notificationCloseButtonSize,height:e.notificationCloseButtonSize,borderRadius:e.borderRadiusSM,transition:`background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:e.colorIconHover,backgroundColor:e.closeBtnHoverBg}},[`${_}-btn`]:{float:"right",marginTop:e.marginSM}}},a=e=>{const{componentCls:t,notificationMarginBottom:i,notificationMarginEdge:n,motionDurationMid:s,motionEaseInOut:b}=e,j=`${t}-notice`,X=new F.Mo("antNotificationFadeOut",{"0%":{maxHeight:e.animationMaxHeight,marginBottom:i},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[t]:Object.assign(Object.assign({},(0,Te.dF)(e)),{position:"fixed",zIndex:e.zIndexPopup,marginRight:{value:n,_skip_check_:!0},[`${t}-hook-holder`]:{position:"relative"},[`${t}-fade-appear-prepare`]:{opacity:"0 !important"},[`${t}-fade-enter, ${t}-fade-appear`]:{animationDuration:e.motionDurationMid,animationTimingFunction:b,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${t}-fade-leave`]:{animationTimingFunction:b,animationFillMode:"both",animationDuration:s,animationPlayState:"paused"},[`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]:{animationPlayState:"running"},[`${t}-fade-leave${t}-fade-leave-active`]:{animationName:X,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${j}-btn`]:{float:"left"}}})},{[t]:{[`${j}-wrapper`]:Object.assign({},xt(e))}}]},f=e=>({zIndexPopup:e.zIndexPopupBase+ve.jH+50,width:384,closeBtnHoverBg:e.wireframe?"transparent":e.colorFillContent}),v=e=>{const t=e.paddingMD,i=e.paddingLG;return(0,Ee.h1)(e,{notificationBg:e.colorBgElevated,notificationPaddingVertical:t,notificationPaddingHorizontal:i,notificationIconSize:e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),notificationCloseButtonSize:e.calc(e.controlHeightLG).mul(.55).equal(),notificationMarginBottom:e.margin,notificationPadding:`${(0,F.zA)(e.paddingMD)} ${(0,F.zA)(e.paddingContentHorizontalLG)}`,notificationMarginEdge:e.marginLG,animationMaxHeight:150,notificationStackLayer:3})};var p=(0,Fe.OF)("Notification",e=>{const t=v(e);return[a(t),we(t),Ct(t)]},f);function x(e,t,i){let n;switch(e){case"top":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:t,bottom:"auto"};break;case"topLeft":n={left:0,top:t,bottom:"auto"};break;case"topRight":n={right:0,top:t,bottom:"auto"};break;case"bottom":n={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:i};break;case"bottomLeft":n={left:0,top:"auto",bottom:i};break;default:n={right:0,top:"auto",bottom:i};break}return n}function I(e){return{motionName:`${e}-fade`}}var G=function(e,t){var i={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(i[n[s]]=e[n[s]]);return i};const ce=24,M=4.5,de="topRight",ue=e=>{let{children:t,prefixCls:i}=e;const n=(0,c.A)(i),[s,b,j]=p(i,n);return s(o.createElement(ke,{classNames:{list:R()(b,j,n)}},t))},$e=(e,t)=>{let{prefixCls:i,key:n}=t;return o.createElement(ue,{prefixCls:i,key:n},e)},W=o.forwardRef((e,t)=>{const{top:i,bottom:n,prefixCls:s,getContainer:b,maxCount:j,rtl:X,onAllRemoved:A,stack:T,duration:U}=e,{getPrefixCls:ae,getPopupContainer:z,notification:Q,direction:Y}=(0,o.useContext)(ye.QO),[,me]=(0,Le.Ay)(),J=s||ae("notification"),ie=Ie=>x(Ie,i??ce,n??ce),Se=()=>R()({[`${J}-rtl`]:X??Y==="rtl"}),Pe=()=>I(J),[_,Ae]=mt({prefixCls:J,style:ie,className:Se,motion:Pe,closable:!0,closeIcon:xe(J),duration:U??M,getContainer:()=>b?.()||z?.()||document.body,maxCount:j,onAllRemoved:A,renderNotifications:$e,stack:T===!1?!1:{threshold:typeof T=="object"?T?.threshold:void 0,offset:8,gap:me.margin}});return o.useImperativeHandle(t,()=>Object.assign(Object.assign({},_),{prefixCls:J,notification:Q})),Ae});function Ze(e){const t=o.useRef(null),i=(0,jt.rJ)("Notification");return[o.useMemo(()=>{const s=A=>{var T;if(!t.current)return;const{open:U,prefixCls:ae,notification:z}=t.current,Q=`${ae}-notice`,{message:Y,description:me,icon:J,type:ie,btn:Se,className:Pe,style:_,role:Ae="alert",closeIcon:Ie}=A,he=G(A,["message","description","icon","type","btn","className","style","role","closeIcon"]),q=xe(Q,typeof Ie<"u"?Ie:z?.closeIcon);return U(Object.assign(Object.assign({placement:(T=e?.placement)!==null&&T!==void 0?T:de},he),{content:o.createElement(V,{prefixCls:Q,icon:J,type:ie,message:Y,description:me,btn:Se,role:Ae}),className:R()(ie&&`${Q}-${ie}`,Pe,z?.className),style:Object.assign(Object.assign({},z?.style),_),closeIcon:q,closable:!!q}))},j={open:s,destroy:A=>{var T,U;A!==void 0?(T=t.current)===null||T===void 0||T.close(A):(U=t.current)===null||U===void 0||U.destroy()}};return["success","info","warning","error"].forEach(A=>{j[A]=T=>s(Object.assign(Object.assign({},T),{type:A}))}),j},[]),o.createElement(W,Object.assign({key:"notification-holder"},e,{ref:t}))]}function Ve(e){return Ze(e)}const pt=o.createContext({});var fe=o.createContext({message:{},notification:{},modal:{}});const ct=e=>{const{componentCls:t,colorText:i,fontSize:n,lineHeight:s,fontFamily:b}=e;return{[t]:{color:i,fontSize:n,lineHeight:s,fontFamily:b}}},dt=()=>({});var St=(0,Fe.OF)("App",ct,dt);const Mt=()=>o.useContext(fe),vt=e=>{const{prefixCls:t,children:i,className:n,rootClassName:s,message:b,notification:j,style:X,component:A="div"}=e,{getPrefixCls:T}=(0,o.useContext)(ye.QO),U=T("app",t),[ae,z,Q]=St(U),Y=R()(z,U,n,s,Q),me=(0,o.useContext)(pt),J=o.useMemo(()=>({message:Object.assign(Object.assign({},me.message),b),notification:Object.assign(Object.assign({},me.notification),j)}),[b,j,me.message,me.notification]),[ie,Se]=Z(J.message),[Pe,_]=Ve(J.notification),[Ae,Ie]=(0,Ne.A)(),he=o.useMemo(()=>({message:ie,notification:Pe,modal:Ae}),[ie,Pe,Ae]),q=A===!1?o.Fragment:A,oe={className:Y,style:X};return ae(o.createElement(fe.Provider,{value:he},o.createElement(pt.Provider,{value:J},o.createElement(q,Object.assign({},A===!1?void 0:oe),Ie,Se,_,i))))};vt.useApp=Mt;var ut=vt},60772:function(et,O,l){l.d(O,{A:function(){return jt}});var o=l(63696),Me=l(4452),R=l.n(Me),ye=l(56737),L=l(23397),lt=l(55046),D=l(6451),r=l(81382),u=l(94029),m=l(45816),k=l(48876),C=l(414);const $=new r.Mo("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),N=new r.Mo("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),S=new r.Mo("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),re=new r.Mo("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),ne=new r.Mo("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),Re=new r.Mo("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),ke=c=>{const{componentCls:g,iconCls:H,antCls:w,badgeShadowSize:y,motionDurationSlow:Ce,textFontSize:se,textFontSizeSM:ot,statusSize:Qe,dotSize:Ye,textFontWeight:De,indicatorHeight:F,indicatorHeightSM:ve,marginXS:Te,calc:Fe}=c,Ee=`${w}-scroll-number`,Je=(0,m.A)(c,(He,Ge)=>{let{darkColor:st}=Ge;return{[`&${g} ${g}-color-${He}`]:{background:st,[`&:not(${g}-count)`]:{color:st}}}});return{[g]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,u.dF)(c)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${g}-count`]:{zIndex:c.indicatorZIndex,minWidth:F,height:F,color:c.badgeTextColor,fontWeight:De,fontSize:se,lineHeight:(0,r.zA)(F),whiteSpace:"nowrap",textAlign:"center",background:c.badgeColor,borderRadius:Fe(F).div(2).equal(),boxShadow:`0 0 0 ${(0,r.zA)(y)} ${c.badgeShadowColor}`,transition:`background ${c.motionDurationMid}`,a:{color:c.badgeTextColor},"a:hover":{color:c.badgeTextColor},"a:hover &":{background:c.badgeColorHover}},[`${g}-count-sm`]:{minWidth:ve,height:ve,fontSize:ot,lineHeight:(0,r.zA)(ve),borderRadius:Fe(ve).div(2).equal()},[`${g}-multiple-words`]:{padding:`0 ${(0,r.zA)(c.paddingXS)}`,bdi:{unicodeBidi:"plaintext"}},[`${g}-dot`]:{zIndex:c.indicatorZIndex,width:Ye,minWidth:Ye,height:Ye,background:c.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${(0,r.zA)(y)} ${c.badgeShadowColor}`},[`${g}-dot${Ee}`]:{transition:`background ${Ce}`},[`${g}-count, ${g}-dot, ${Ee}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${H}-spin`]:{animationName:Re,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${g}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${g}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:Qe,height:Qe,verticalAlign:"middle",borderRadius:"50%"},[`${g}-status-success`]:{backgroundColor:c.colorSuccess},[`${g}-status-processing`]:{overflow:"visible",color:c.colorPrimary,backgroundColor:c.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:y,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:$,animationDuration:c.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${g}-status-default`]:{backgroundColor:c.colorTextPlaceholder},[`${g}-status-error`]:{backgroundColor:c.colorError},[`${g}-status-warning`]:{backgroundColor:c.colorWarning},[`${g}-status-text`]:{marginInlineStart:Te,color:c.colorText,fontSize:c.fontSize}}}),Je),{[`${g}-zoom-appear, ${g}-zoom-enter`]:{animationName:N,animationDuration:c.motionDurationSlow,animationTimingFunction:c.motionEaseOutBack,animationFillMode:"both"},[`${g}-zoom-leave`]:{animationName:S,animationDuration:c.motionDurationSlow,animationTimingFunction:c.motionEaseOutBack,animationFillMode:"both"},[`&${g}-not-a-wrapper`]:{[`${g}-zoom-appear, ${g}-zoom-enter`]:{animationName:re,animationDuration:c.motionDurationSlow,animationTimingFunction:c.motionEaseOutBack},[`${g}-zoom-leave`]:{animationName:ne,animationDuration:c.motionDurationSlow,animationTimingFunction:c.motionEaseOutBack},[`&:not(${g}-status)`]:{verticalAlign:"middle"},[`${Ee}-custom-component, ${g}-count`]:{transform:"none"},[`${Ee}-custom-component, ${Ee}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${Ee}`]:{overflow:"hidden",[`${Ee}-only`]:{position:"relative",display:"inline-block",height:F,transition:`all ${c.motionDurationSlow} ${c.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${Ee}-only-unit`]:{height:F,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${Ee}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${g}-count, ${g}-dot, ${Ee}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},ee=c=>{const{fontHeight:g,lineWidth:H,marginXS:w,colorBorderBg:y}=c,Ce=g,se=H,ot=c.colorBgContainer,Qe=c.colorError,Ye=c.colorErrorHover;return(0,k.h1)(c,{badgeFontHeight:Ce,badgeShadowSize:se,badgeTextColor:ot,badgeColor:Qe,badgeColorHover:Ye,badgeShadowColor:y,badgeProcessingDuration:"1.2s",badgeRibbonOffset:w,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},Oe=c=>{const{fontSize:g,lineHeight:H,fontSizeSM:w,lineWidth:y}=c;return{indicatorZIndex:"auto",indicatorHeight:Math.round(g*H)-2*y,indicatorHeightSM:g,dotSize:w/2,textFontSize:w,textFontSizeSM:w,textFontWeight:"normal",statusSize:w/2}};var tt=(0,C.OF)("Badge",c=>{const g=ee(c);return ke(g)},Oe);const at=c=>{const{antCls:g,badgeFontHeight:H,marginXS:w,badgeRibbonOffset:y,calc:Ce}=c,se=`${g}-ribbon`,ot=`${g}-ribbon-wrapper`,Qe=(0,m.A)(c,(Ye,De)=>{let{darkColor:F}=De;return{[`&${se}-color-${Ye}`]:{background:F,color:F}}});return{[`${ot}`]:{position:"relative"},[`${se}`]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,u.dF)(c)),{position:"absolute",top:w,padding:`0 ${(0,r.zA)(c.paddingXS)}`,color:c.colorPrimary,lineHeight:(0,r.zA)(H),whiteSpace:"nowrap",backgroundColor:c.colorPrimary,borderRadius:c.borderRadiusSM,[`${se}-text`]:{color:c.colorTextLightSolid},[`${se}-corner`]:{position:"absolute",top:"100%",width:y,height:y,color:"currentcolor",border:`${(0,r.zA)(Ce(y).div(2).equal())} solid`,transform:c.badgeRibbonCornerTransform,transformOrigin:"top",filter:c.badgeRibbonCornerFilter}}),Qe),{[`&${se}-placement-end`]:{insetInlineEnd:Ce(y).mul(-1).equal(),borderEndEndRadius:0,[`${se}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${se}-placement-start`]:{insetInlineStart:Ce(y).mul(-1).equal(),borderEndStartRadius:0,[`${se}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};var ft=(0,C.OF)(["Badge","Ribbon"],c=>{const g=ee(c);return at(g)},Oe),Pt=c=>{const{className:g,prefixCls:H,style:w,color:y,children:Ce,text:se,placement:ot="end",rootClassName:Qe}=c,{getPrefixCls:Ye,direction:De}=o.useContext(D.QO),F=Ye("ribbon",H),ve=`${F}-wrapper`,[Te,Fe,Ee]=ft(F,ve),Je=(0,L.nP)(y,!1),He=R()(F,`${F}-placement-${ot}`,{[`${F}-rtl`]:De==="rtl",[`${F}-color-${y}`]:Je},g),Ge={},st={};return y&&!Je&&(Ge.background=y,st.color=y),Te(o.createElement("div",{className:R()(ve,Qe,Fe,Ee)},Ce,o.createElement("div",{className:R()(He,Fe),style:Object.assign(Object.assign({},Ge),w)},o.createElement("span",{className:`${F}-text`},se),o.createElement("div",{className:`${F}-corner`,style:st}))))};function Ot(c){let{prefixCls:g,value:H,current:w,offset:y=0}=c,Ce;return y&&(Ce={position:"absolute",top:`${y}00%`,left:0}),o.createElement("span",{style:Ce,className:R()(`${g}-only-unit`,{current:w})},H)}function At(c,g,H){let w=c,y=0;for(;(w+10)%10!==g;)w+=H,y+=H;return y}function bt(c){const{prefixCls:g,count:H,value:w}=c,y=Number(w),Ce=Math.abs(H),[se,ot]=o.useState(y),[Qe,Ye]=o.useState(Ce),De=()=>{ot(y),Ye(Ce)};o.useEffect(()=>{const Te=setTimeout(()=>{De()},1e3);return()=>{clearTimeout(Te)}},[y]);let F,ve;if(se===y||Number.isNaN(y)||Number.isNaN(se))F=[o.createElement(Ot,Object.assign({},c,{key:y,current:!0}))],ve={transition:"none"};else{F=[];const Te=y+10,Fe=[];for(let He=y;He<=Te;He+=1)Fe.push(He);const Ee=Fe.findIndex(He=>He%10===se);F=Fe.map((He,Ge)=>{const st=He%10;return o.createElement(Ot,Object.assign({},c,{key:He,value:st,offset:Ge-Ee,current:Ge===Ee}))});const Je=Qe<Ce?1:-1;ve={transform:`translateY(${-At(se,y,Je)}00%)`}}return o.createElement("span",{className:`${g}-only`,style:ve,onTransitionEnd:De},F)}var Et=function(c,g){var H={};for(var w in c)Object.prototype.hasOwnProperty.call(c,w)&&g.indexOf(w)<0&&(H[w]=c[w]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,w=Object.getOwnPropertySymbols(c);y<w.length;y++)g.indexOf(w[y])<0&&Object.prototype.propertyIsEnumerable.call(c,w[y])&&(H[w[y]]=c[w[y]]);return H},wt=o.forwardRef((c,g)=>{const{prefixCls:H,count:w,className:y,motionClassName:Ce,style:se,title:ot,show:Qe,component:Ye="sup",children:De}=c,F=Et(c,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:ve}=o.useContext(D.QO),Te=ve("scroll-number",H),Fe=Object.assign(Object.assign({},F),{"data-show":Qe,style:se,className:R()(Te,y,Ce),title:ot});let Ee=w;if(w&&Number(w)%1===0){const Je=String(w).split("");Ee=o.createElement("bdi",null,Je.map((He,Ge)=>o.createElement(bt,{prefixCls:Te,count:Number(w),value:He,key:Je.length-Ge})))}return se&&se.borderColor&&(Fe.style=Object.assign(Object.assign({},se),{boxShadow:`0 0 0 1px ${se.borderColor} inset`})),De?(0,lt.Ob)(De,Je=>({className:R()(`${Te}-custom-component`,Je?.className,Ce)})):o.createElement(Ye,Object.assign({},Fe,{ref:g}),Ee)}),gt=function(c,g){var H={};for(var w in c)Object.prototype.hasOwnProperty.call(c,w)&&g.indexOf(w)<0&&(H[w]=c[w]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var y=0,w=Object.getOwnPropertySymbols(c);y<w.length;y++)g.indexOf(w[y])<0&&Object.prototype.propertyIsEnumerable.call(c,w[y])&&(H[w[y]]=c[w[y]]);return H};const It=(c,g)=>{var H,w,y,Ce,se;const{prefixCls:ot,scrollNumberPrefixCls:Qe,children:Ye,status:De,text:F,color:ve,count:Te=null,overflowCount:Fe=99,dot:Ee=!1,size:Je="default",title:He,offset:Ge,style:st,className:d,rootClassName:h,classNames:K,styles:P,showZero:B=!1}=c,te=gt(c,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:ge,direction:be,badge:E}=o.useContext(D.QO),Z=ge("badge",ot),[Ne,Le,rt]=tt(Z),je=Te>Fe?`${Fe}+`:Te,xe=je==="0"||je===0,ze=Te===null||xe&&!B,V=(De!=null||ve!=null)&&ze,nt=Ee&&!xe,Xe=nt?"":je,Be=(0,o.useMemo)(()=>(Xe==null||Xe===""||xe&&!B)&&!nt,[Xe,xe,B,nt]),we=(0,o.useRef)(Te);Be||(we.current=Te);const We=we.current,_e=(0,o.useRef)(Xe);Be||(_e.current=Xe);const qe=_e.current,Ke=(0,o.useRef)(nt);Be||(Ke.current=nt);const Ue=(0,o.useMemo)(()=>{if(!Ge)return Object.assign(Object.assign({},E?.style),st);const x={marginTop:Ge[1]};return be==="rtl"?x.left=parseInt(Ge[0],10):x.right=-parseInt(Ge[0],10),Object.assign(Object.assign(Object.assign({},x),E?.style),st)},[be,Ge,st,E?.style]),$t=He??(typeof We=="string"||typeof We=="number"?We:void 0),Ct=Be||!F?null:o.createElement("span",{className:`${Z}-status-text`},F),xt=!We||typeof We!="object"?void 0:(0,lt.Ob)(We,x=>({style:Object.assign(Object.assign({},Ue),x.style)})),a=(0,L.nP)(ve,!1),f=R()(K?.indicator,(H=E?.classNames)===null||H===void 0?void 0:H.indicator,{[`${Z}-status-dot`]:V,[`${Z}-status-${De}`]:!!De,[`${Z}-color-${ve}`]:a}),v={};ve&&!a&&(v.color=ve,v.background=ve);const p=R()(Z,{[`${Z}-status`]:V,[`${Z}-not-a-wrapper`]:!Ye,[`${Z}-rtl`]:be==="rtl"},d,h,E?.className,(w=E?.classNames)===null||w===void 0?void 0:w.root,K?.root,Le,rt);if(!Ye&&V){const x=Ue.color;return Ne(o.createElement("span",Object.assign({},te,{className:p,style:Object.assign(Object.assign(Object.assign({},P?.root),(y=E?.styles)===null||y===void 0?void 0:y.root),Ue)}),o.createElement("span",{className:f,style:Object.assign(Object.assign(Object.assign({},P?.indicator),(Ce=E?.styles)===null||Ce===void 0?void 0:Ce.indicator),v)}),F&&o.createElement("span",{style:{color:x},className:`${Z}-status-text`},F)))}return Ne(o.createElement("span",Object.assign({ref:g},te,{className:p,style:Object.assign(Object.assign({},(se=E?.styles)===null||se===void 0?void 0:se.root),P?.root)}),Ye,o.createElement(ye.Ay,{visible:!Be,motionName:`${Z}-zoom`,motionAppear:!1,motionDeadline:1e3},x=>{let{className:I,ref:G}=x;var ce,M;const de=ge("scroll-number",Qe),ue=Ke.current,$e=R()(K?.indicator,(ce=E?.classNames)===null||ce===void 0?void 0:ce.indicator,{[`${Z}-dot`]:ue,[`${Z}-count`]:!ue,[`${Z}-count-sm`]:Je==="small",[`${Z}-multiple-words`]:!ue&&qe&&qe.toString().length>1,[`${Z}-status-${De}`]:!!De,[`${Z}-color-${ve}`]:a});let W=Object.assign(Object.assign(Object.assign({},P?.indicator),(M=E?.styles)===null||M===void 0?void 0:M.indicator),Ue);return ve&&!a&&(W=W||{},W.background=ve),o.createElement(wt,{prefixCls:de,show:!Be,motionClassName:I,className:$e,count:qe,title:$t,style:W,key:"scrollNumber",ref:G},xt)}),Ct))},mt=o.forwardRef(It);mt.Ribbon=Pt;var jt=mt},69907:function(et,O,l){l.d(O,{A:function(){return st}});var o=l(63696),Me=l(4452),R=l.n(Me),ye=l(27405),L=l(67346),lt=l(49522),D=l(70697),r=o.createContext(null),u=o.createContext({}),m=r,k=l(41705),C=l(68102),$=l(56737),N=l(82772),S=l(83541),re=l(63690),ne=function(h){var K=h.prefixCls,P=h.className,B=h.style,te=h.children,ge=h.containerRef,be=h.id,E=h.onMouseEnter,Z=h.onMouseOver,Ne=h.onMouseLeave,Le=h.onClick,rt=h.onKeyDown,je=h.onKeyUp,xe={onMouseEnter:E,onMouseOver:Z,onMouseLeave:Ne,onClick:Le,onKeyDown:rt,onKeyUp:je},ze=o.useContext(u),V=ze.panel,nt=(0,re.xK)(V,ge);return o.createElement(o.Fragment,null,o.createElement("div",(0,C.A)({id:be,className:R()("".concat(K,"-content"),P),style:(0,ye.A)({},B),"aria-modal":"true",role:"dialog",ref:nt},xe),te))},Re=ne,ke=l(54358);function ee(d){return typeof d=="string"&&String(Number(d))===d?((0,ke.Ay)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(d)):d}function Oe(d){warning(!("wrapperClassName"in d),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!d.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}var tt={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function at(d,h){var K,P,B,te=d.prefixCls,ge=d.open,be=d.placement,E=d.inline,Z=d.push,Ne=d.forceRender,Le=d.autoFocus,rt=d.keyboard,je=d.classNames,xe=d.rootClassName,ze=d.rootStyle,V=d.zIndex,nt=d.className,Xe=d.id,Be=d.style,we=d.motion,We=d.width,_e=d.height,qe=d.children,Ke=d.mask,Ue=d.maskClosable,$t=d.maskMotion,Ct=d.maskClassName,xt=d.maskStyle,a=d.afterOpenChange,f=d.onClose,v=d.onMouseEnter,p=d.onMouseOver,x=d.onMouseLeave,I=d.onClick,G=d.onKeyDown,ce=d.onKeyUp,M=d.styles,de=o.useRef(),ue=o.useRef(),$e=o.useRef();o.useImperativeHandle(h,function(){return de.current});var W=function(s){var b=s.keyCode,j=s.shiftKey;switch(b){case N.A.TAB:{if(b===N.A.TAB){if(!j&&document.activeElement===$e.current){var X;(X=ue.current)===null||X===void 0||X.focus({preventScroll:!0})}else if(j&&document.activeElement===ue.current){var A;(A=$e.current)===null||A===void 0||A.focus({preventScroll:!0})}}break}case N.A.ESC:{f&&rt&&(s.stopPropagation(),f(s));break}}};o.useEffect(function(){if(ge&&Le){var n;(n=de.current)===null||n===void 0||n.focus({preventScroll:!0})}},[ge]);var Ze=o.useState(!1),Ve=(0,L.A)(Ze,2),pt=Ve[0],it=Ve[1],fe=o.useContext(m),ct;Z===!1?ct={distance:0}:Z===!0?ct={}:ct=Z||{};var dt=(K=(P=(B=ct)===null||B===void 0?void 0:B.distance)!==null&&P!==void 0?P:fe?.pushDistance)!==null&&K!==void 0?K:180,St=o.useMemo(function(){return{pushDistance:dt,push:function(){it(!0)},pull:function(){it(!1)}}},[dt]);o.useEffect(function(){if(ge){var n;fe==null||(n=fe.push)===null||n===void 0||n.call(fe)}else{var s;fe==null||(s=fe.pull)===null||s===void 0||s.call(fe)}},[ge]),o.useEffect(function(){return function(){var n;fe==null||(n=fe.pull)===null||n===void 0||n.call(fe)}},[]);var Mt=Ke&&o.createElement($.Ay,(0,C.A)({key:"mask"},$t,{visible:ge}),function(n,s){var b=n.className,j=n.style;return o.createElement("div",{className:R()("".concat(te,"-mask"),b,je?.mask,Ct),style:(0,ye.A)((0,ye.A)((0,ye.A)({},j),xt),M?.mask),onClick:Ue&&ge?f:void 0,ref:s})}),vt=typeof we=="function"?we(be):we,ut={};if(pt&&dt)switch(be){case"top":ut.transform="translateY(".concat(dt,"px)");break;case"bottom":ut.transform="translateY(".concat(-dt,"px)");break;case"left":ut.transform="translateX(".concat(dt,"px)");break;default:ut.transform="translateX(".concat(-dt,"px)");break}be==="left"||be==="right"?ut.width=ee(We):ut.height=ee(_e);var e={onMouseEnter:v,onMouseOver:p,onMouseLeave:x,onClick:I,onKeyDown:G,onKeyUp:ce},t=o.createElement($.Ay,(0,C.A)({key:"panel"},vt,{visible:ge,forceRender:Ne,onVisibleChanged:function(s){a?.(s)},removeOnLeave:!1,leavedClassName:"".concat(te,"-content-wrapper-hidden")}),function(n,s){var b=n.className,j=n.style;return o.createElement("div",(0,C.A)({className:R()("".concat(te,"-content-wrapper"),je?.wrapper,b),style:(0,ye.A)((0,ye.A)((0,ye.A)({},ut),j),M?.wrapper)},(0,S.A)(d,{data:!0})),o.createElement(Re,(0,C.A)({id:Xe,containerRef:s,prefixCls:te,className:R()(nt,je?.content),style:(0,ye.A)((0,ye.A)({},Be),M?.content)},e),qe))}),i=(0,ye.A)({},ze);return V&&(i.zIndex=V),o.createElement(m.Provider,{value:St},o.createElement("div",{className:R()(te,"".concat(te,"-").concat(be),xe,(0,k.A)((0,k.A)({},"".concat(te,"-open"),ge),"".concat(te,"-inline"),E)),style:i,tabIndex:-1,ref:de,onKeyDown:W},Mt,o.createElement("div",{tabIndex:0,ref:ue,style:tt,"aria-hidden":"true","data-sentinel":"start"}),t,o.createElement("div",{tabIndex:0,ref:$e,style:tt,"aria-hidden":"true","data-sentinel":"end"})))}var ft=o.forwardRef(at),Ht=ft,Pt=function(h){var K=h.open,P=K===void 0?!1:K,B=h.prefixCls,te=B===void 0?"rc-drawer":B,ge=h.placement,be=ge===void 0?"right":ge,E=h.autoFocus,Z=E===void 0?!0:E,Ne=h.keyboard,Le=Ne===void 0?!0:Ne,rt=h.width,je=rt===void 0?378:rt,xe=h.mask,ze=xe===void 0?!0:xe,V=h.maskClosable,nt=V===void 0?!0:V,Xe=h.getContainer,Be=h.forceRender,we=h.afterOpenChange,We=h.destroyOnClose,_e=h.onMouseEnter,qe=h.onMouseOver,Ke=h.onMouseLeave,Ue=h.onClick,$t=h.onKeyDown,Ct=h.onKeyUp,xt=h.panelRef,a=o.useState(!1),f=(0,L.A)(a,2),v=f[0],p=f[1],x=o.useState(!1),I=(0,L.A)(x,2),G=I[0],ce=I[1];(0,D.A)(function(){ce(!0)},[]);var M=G?P:!1,de=o.useRef(),ue=o.useRef();(0,D.A)(function(){M&&(ue.current=document.activeElement)},[M]);var $e=function(it){var fe;if(p(it),we?.(it),!it&&ue.current&&!((fe=de.current)!==null&&fe!==void 0&&fe.contains(ue.current))){var ct;(ct=ue.current)===null||ct===void 0||ct.focus({preventScroll:!0})}},W=o.useMemo(function(){return{panel:xt}},[xt]);if(!Be&&!v&&!M&&We)return null;var Ze={onMouseEnter:_e,onMouseOver:qe,onMouseLeave:Ke,onClick:Ue,onKeyDown:$t,onKeyUp:Ct},Ve=(0,ye.A)((0,ye.A)({},h),{},{open:M,prefixCls:te,placement:be,autoFocus:Z,keyboard:Le,width:je,mask:ze,maskClosable:nt,inline:Xe===!1,afterOpenChange:$e,ref:de},Ze);return o.createElement(u.Provider,{value:W},o.createElement(lt.A,{open:M||Be||v,autoDestroy:!1,getContainer:Xe,autoLock:ze&&(M||v)},o.createElement(Ht,Ve)))},Ot=Pt,At=Ot,bt=l(98735),Et=l(48663),kt=l(85892),wt=l(6451),gt=l(94085),It=l(28227),mt=l(40497),jt=l(96420),g=d=>{var h,K;const{prefixCls:P,title:B,footer:te,extra:ge,closeIcon:be,closable:E,onClose:Z,headerStyle:Ne,bodyStyle:Le,footerStyle:rt,children:je,classNames:xe,styles:ze}=d,{drawer:V}=o.useContext(wt.QO),nt=o.useCallback(_e=>o.createElement("button",{type:"button",onClick:Z,"aria-label":"Close",className:`${P}-close`},_e),[Z]),[Xe,Be]=(0,jt.A)(E,typeof be<"u"?be:V?.closeIcon,nt,void 0,!0),we=o.useMemo(()=>{var _e,qe;return!B&&!Xe?null:o.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(_e=V?.styles)===null||_e===void 0?void 0:_e.header),Ne),ze?.header),className:R()(`${P}-header`,{[`${P}-header-close-only`]:Xe&&!B&&!ge},(qe=V?.classNames)===null||qe===void 0?void 0:qe.header,xe?.header)},o.createElement("div",{className:`${P}-header-title`},Be,B&&o.createElement("div",{className:`${P}-title`},B)),ge&&o.createElement("div",{className:`${P}-extra`},ge))},[Xe,Be,ge,Ne,P,B]),We=o.useMemo(()=>{var _e,qe;if(!te)return null;const Ke=`${P}-footer`;return o.createElement("div",{className:R()(Ke,(_e=V?.classNames)===null||_e===void 0?void 0:_e.footer,xe?.footer),style:Object.assign(Object.assign(Object.assign({},(qe=V?.styles)===null||qe===void 0?void 0:qe.footer),rt),ze?.footer)},te)},[te,rt,P]);return o.createElement(o.Fragment,null,we,o.createElement("div",{className:R()(`${P}-body`,xe?.body,(h=V?.classNames)===null||h===void 0?void 0:h.body),style:Object.assign(Object.assign(Object.assign({},(K=V?.styles)===null||K===void 0?void 0:K.body),Le),ze?.body)},je),We)},H=l(81382),w=l(414),y=l(48876);const Ce=d=>{const h="100%";return{left:`translateX(-${h})`,right:`translateX(${h})`,top:`translateY(-${h})`,bottom:`translateY(${h})`}[d]},se=(d,h)=>({"&-enter, &-appear":Object.assign(Object.assign({},d),{"&-active":h}),"&-leave":Object.assign(Object.assign({},h),{"&-active":d})}),ot=(d,h)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${h}`}}},se({opacity:d},{opacity:1})),Qe=(d,h)=>[ot(.7,h),se({transform:Ce(d)},{transform:"none"})];var De=d=>{const{componentCls:h,motionDurationSlow:K}=d;return{[h]:{[`${h}-mask-motion`]:ot(0,K),[`${h}-panel-motion`]:["left","right","top","bottom"].reduce((P,B)=>Object.assign(Object.assign({},P),{[`&-${B}`]:Qe(B,K)}),{})}}};const F=d=>{const{componentCls:h,zIndexPopup:K,colorBgMask:P,colorBgElevated:B,motionDurationSlow:te,motionDurationMid:ge,padding:be,paddingLG:E,fontSizeLG:Z,lineHeightLG:Ne,lineWidth:Le,lineType:rt,colorSplit:je,marginSM:xe,colorIcon:ze,colorIconHover:V,colorText:nt,fontWeightStrong:Xe,footerPaddingBlock:Be,footerPaddingInline:we}=d,We=`${h}-content-wrapper`;return{[h]:{position:"fixed",inset:0,zIndex:K,pointerEvents:"none","&-pure":{position:"relative",background:B,display:"flex",flexDirection:"column",[`&${h}-left`]:{boxShadow:d.boxShadowDrawerLeft},[`&${h}-right`]:{boxShadow:d.boxShadowDrawerRight},[`&${h}-top`]:{boxShadow:d.boxShadowDrawerUp},[`&${h}-bottom`]:{boxShadow:d.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${h}-mask`]:{position:"absolute",inset:0,zIndex:K,background:P,pointerEvents:"auto"},[We]:{position:"absolute",zIndex:K,maxWidth:"100vw",transition:`all ${te}`,"&-hidden":{display:"none"}},[`&-left > ${We}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:d.boxShadowDrawerLeft},[`&-right > ${We}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:d.boxShadowDrawerRight},[`&-top > ${We}`]:{top:0,insetInline:0,boxShadow:d.boxShadowDrawerUp},[`&-bottom > ${We}`]:{bottom:0,insetInline:0,boxShadow:d.boxShadowDrawerDown},[`${h}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:B,pointerEvents:"auto"},[`${h}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${(0,H.zA)(be)} ${(0,H.zA)(E)}`,fontSize:Z,lineHeight:Ne,borderBottom:`${(0,H.zA)(Le)} ${rt} ${je}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${h}-extra`]:{flex:"none"},[`${h}-close`]:{display:"inline-block",marginInlineEnd:xe,color:ze,fontWeight:Xe,fontSize:Z,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${ge}`,textRendering:"auto","&:focus, &:hover":{color:V,textDecoration:"none"}},[`${h}-title`]:{flex:1,margin:0,color:nt,fontWeight:d.fontWeightStrong,fontSize:Z,lineHeight:Ne},[`${h}-body`]:{flex:1,minWidth:0,minHeight:0,padding:E,overflow:"auto"},[`${h}-footer`]:{flexShrink:0,padding:`${(0,H.zA)(Be)} ${(0,H.zA)(we)}`,borderTop:`${(0,H.zA)(Le)} ${rt} ${je}`},"&-rtl":{direction:"rtl"}}}},ve=d=>({zIndexPopup:d.zIndexPopupBase,footerPaddingBlock:d.paddingXS,footerPaddingInline:d.padding});var Te=(0,w.OF)("Drawer",d=>{const h=(0,y.h1)(d,{});return[F(h),De(h)]},ve),Fe=function(d,h){var K={};for(var P in d)Object.prototype.hasOwnProperty.call(d,P)&&h.indexOf(P)<0&&(K[P]=d[P]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var B=0,P=Object.getOwnPropertySymbols(d);B<P.length;B++)h.indexOf(P[B])<0&&Object.prototype.propertyIsEnumerable.call(d,P[B])&&(K[P[B]]=d[P[B]]);return K};const Ee=null,Je={distance:180},He=d=>{var h;const{rootClassName:K,width:P,height:B,size:te="default",mask:ge=!0,push:be=Je,open:E,afterOpenChange:Z,onClose:Ne,prefixCls:Le,getContainer:rt,style:je,className:xe,visible:ze,afterVisibleChange:V,maskStyle:nt,drawerStyle:Xe,contentWrapperStyle:Be}=d,we=Fe(d,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer:We,getPrefixCls:_e,direction:qe,drawer:Ke}=o.useContext(wt.QO),Ue=_e("drawer",Le),[$t,Ct,xt]=Te(Ue),a=rt===void 0&&We?()=>We(document.body):rt,f=R()({"no-mask":!ge,[`${Ue}-rtl`]:qe==="rtl"},K,Ct,xt),v=o.useMemo(()=>P??(te==="large"?736:378),[P,te]),p=o.useMemo(()=>B??(te==="large"?736:378),[B,te]),x={motionName:(0,Et.b)(Ue,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},I=Ze=>({motionName:(0,Et.b)(Ue,`panel-motion-${Ze}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),G=(0,mt.f)(),[ce,M]=(0,bt.YK)("Drawer",we.zIndex),{classNames:de={},styles:ue={}}=we,{classNames:$e={},styles:W={}}=Ke||{};return $t(o.createElement(It.K6,null,o.createElement(gt.XB,{status:!0,override:!0},o.createElement(kt.A.Provider,{value:M},o.createElement(At,Object.assign({prefixCls:Ue,onClose:Ne,maskMotion:x,motion:I},we,{classNames:{mask:R()(de.mask,$e.mask),content:R()(de.content,$e.content)},styles:{mask:Object.assign(Object.assign(Object.assign({},ue.mask),nt),W.mask),content:Object.assign(Object.assign(Object.assign({},ue.content),Xe),W.content),wrapper:Object.assign(Object.assign(Object.assign({},ue.wrapper),Be),W.wrapper)},open:E??ze,mask:ge,push:be,width:v,height:p,style:Object.assign(Object.assign({},Ke?.style),je),className:R()(Ke?.className,xe),rootClassName:f,getContainer:a,afterOpenChange:Z??V,panelRef:G,zIndex:ce}),o.createElement(g,Object.assign({prefixCls:Ue},we,{onClose:Ne})))))))},Ge=d=>{const{prefixCls:h,style:K,className:P,placement:B="right"}=d,te=Fe(d,["prefixCls","style","className","placement"]),{getPrefixCls:ge}=o.useContext(wt.QO),be=ge("drawer",h),[E,Z,Ne]=Te(be),Le=R()(be,`${be}-pure`,`${be}-${B}`,Z,Ne,P);return E(o.createElement("div",{className:Le,style:K},o.createElement(g,Object.assign({prefixCls:be},te))))};He._InternalPanelDoNotUseOrYouWillBeFired=Ge;var st=He},16144:function(et,O,l){var o=l(96784);Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;var Me=o(l(39979)),R=O.default=Me.default},19266:function(et,O,l){var o=l(96784);Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;var Me=o(l(88925)),R=O.default=Me.default},39979:function(et,O,l){var o=l(96784);Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;var Me=o(l(64678)),R=o(l(73170));const ye={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},Me.default),timePickerLocale:Object.assign({},R.default)};var L=O.default=ye},88925:function(et,O,l){var o=l(96784);Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;var Me=o(l(40940)),R=o(l(85544));const ye={lang:Object.assign({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},Me.default),timePickerLocale:Object.assign({},R.default)};ye.lang.ok="\u786E\u5B9A";var L=O.default=ye},39985:function(et,O,l){var o,Me=l(96784);o={value:!0},O.A=void 0;var R=Me(l(19140)),ye=Me(l(16144)),L=Me(l(39979)),lt=Me(l(73170));const D="${label} is not a valid ${type}",r={locale:"en",Pagination:R.default,DatePicker:L.default,TimePicker:lt.default,Calendar:ye.default,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:D,method:D,array:D,object:D,number:D,date:D,boolean:D,integer:D,float:D,regexp:D,email:D,url:D,hex:D},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty"}};var u=O.A=r},52999:function(et,O,l){var o,Me=l(96784);o={value:!0},O.A=void 0;var R=Me(l(2278)),ye=Me(l(19266)),L=Me(l(88925)),lt=Me(l(85544));const D="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",r={locale:"zh-cn",Pagination:R.default,DatePicker:L.default,TimePicker:lt.default,Calendar:ye.default,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:D,method:D,array:D,object:D,number:D,date:D,boolean:D,integer:D,float:D,regexp:D,email:D,url:D,hex:D},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0"}};var u=O.A=r},73170:function(et,O){Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;const l={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};var o=O.default=l},85544:function(et,O){Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;const l={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]};var o=O.default=l},19140:function(et,O){Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;var l={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},o=O.default=l},2278:function(et,O){Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;var l={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"},o=O.default=l},64678:function(et,O){Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;var l={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},o=O.default=l},40940:function(et,O){Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;var l={locale:"zh_CN",yearFormat:"YYYY\u5E74",cellDateFormat:"D",cellMeridiemFormat:"A",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA"},o=O.default=l},96784:function(et){function O(l){return l&&l.__esModule?l:{default:l}}et.exports=O,et.exports.__esModule=!0,et.exports.default=et.exports},81953:function(et,O,l){var o;l.d(O,{A:function(){return D}});var Me=l(63696),R={942:(r,u,m)=>{m.d(u,{Z:()=>re});var k=m(601),C=m.n(k),$=m(609),N=m.n($),S=N()(C());S.push([r.id,`.node-right-icon-close {
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
`,""]),S.locals={};const re=S},84:(r,u,m)=>{m.d(u,{Z:()=>re});var k=m(601),C=m.n(k),$=m(609),N=m.n($),S=N()(C());S.push([r.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]),S.locals={};const re=S},91:(r,u,m)=>{m.d(u,{Z:()=>re});var k=m(601),C=m.n(k),$=m(609),N=m.n($),S=N()(C());S.push([r.id,`.frame {
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
`,""]),S.locals={};const re=S},505:(r,u,m)=>{m.d(u,{Z:()=>re});var k=m(601),C=m.n(k),$=m(609),N=m.n($),S=N()(C());S.push([r.id,`.clear::after {
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
`,""]),S.locals={};const re=S},675:(r,u,m)=>{m.d(u,{Z:()=>re});var k=m(601),C=m.n(k),$=m(609),N=m.n($),S=N()(C());S.push([r.id,`@keyframes ani-fade-in {
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
`,""]),S.locals={};const re=S},609:r=>{r.exports=function(u){var m=[];return m.toString=function(){return this.map(function(k){var C="",$=typeof k[5]<"u";return k[4]&&(C+="@supports (".concat(k[4],") {")),k[2]&&(C+="@media ".concat(k[2]," {")),$&&(C+="@layer".concat(k[5].length>0?" ".concat(k[5]):""," {")),C+=u(k),$&&(C+="}"),k[2]&&(C+="}"),k[4]&&(C+="}"),C}).join("")},m.i=function(k,C,$,N,S){typeof k=="string"&&(k=[[null,k,void 0]]);var re={};if($)for(var ne=0;ne<this.length;ne++){var Re=this[ne][0];Re!=null&&(re[Re]=!0)}for(var ke=0;ke<k.length;ke++){var ee=[].concat(k[ke]);$&&re[ee[0]]||(typeof S<"u"&&(typeof ee[5]>"u"||(ee[1]="@layer".concat(ee[5].length>0?" ".concat(ee[5]):""," {").concat(ee[1],"}")),ee[5]=S),C&&(ee[2]&&(ee[1]="@media ".concat(ee[2]," {").concat(ee[1],"}")),ee[2]=C),N&&(ee[4]?(ee[1]="@supports (".concat(ee[4],") {").concat(ee[1],"}"),ee[4]=N):ee[4]="".concat(N)),m.push(ee))}},m}},601:r=>{r.exports=function(u){return u[1]}},837:(r,u,m)=>{var k=m(810),C=Symbol.for("react.element"),$=Symbol.for("react.fragment"),N=Object.prototype.hasOwnProperty,S=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,re={key:!0,ref:!0,__self:!0,__source:!0};function ne(Re,ke,ee){var Oe,tt={},at=null,ft=null;ee!==void 0&&(at=""+ee),ke.key!==void 0&&(at=""+ke.key),ke.ref!==void 0&&(ft=ke.ref);for(Oe in ke)N.call(ke,Oe)&&!re.hasOwnProperty(Oe)&&(tt[Oe]=ke[Oe]);if(Re&&Re.defaultProps)for(Oe in ke=Re.defaultProps,ke)tt[Oe]===void 0&&(tt[Oe]=ke[Oe]);return{$$typeof:C,type:Re,key:at,ref:ft,props:tt,_owner:S.current}}u.Fragment=$,u.jsx=ne,u.jsxs=ne},322:(r,u,m)=>{r.exports=m(837)},62:r=>{var u=[];function m($){for(var N=-1,S=0;S<u.length;S++)if(u[S].identifier===$){N=S;break}return N}function k($,N){for(var S={},re=[],ne=0;ne<$.length;ne++){var Re=$[ne],ke=N.base?Re[0]+N.base:Re[0],ee=S[ke]||0,Oe="".concat(ke," ").concat(ee);S[ke]=ee+1;var tt=m(Oe),at={css:Re[1],media:Re[2],sourceMap:Re[3],supports:Re[4],layer:Re[5]};if(tt!==-1)u[tt].references++,u[tt].updater(at);else{var ft=C(at,N);N.byIndex=ne,u.splice(ne,0,{identifier:Oe,updater:ft,references:1})}re.push(Oe)}return re}function C($,N){var S=N.domAPI(N);S.update($);var re=function(ne){if(ne){if(ne.css===$.css&&ne.media===$.media&&ne.sourceMap===$.sourceMap&&ne.supports===$.supports&&ne.layer===$.layer)return;S.update($=ne)}else S.remove()};return re}r.exports=function($,N){N=N||{},$=$||[];var S=k($,N);return function(re){re=re||[];for(var ne=0;ne<S.length;ne++){var Re=S[ne],ke=m(Re);u[ke].references--}for(var ee=k(re,N),Oe=0;Oe<S.length;Oe++){var tt=S[Oe],at=m(tt);u[at].references===0&&(u[at].updater(),u.splice(at,1))}S=ee}}},793:r=>{var u={};function m(C){if(typeof u[C]>"u"){var $=document.querySelector(C);if(window.HTMLIFrameElement&&$ instanceof window.HTMLIFrameElement)try{$=$.contentDocument.head}catch{$=null}u[C]=$}return u[C]}function k(C,$){var N=m(C);if(!N)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");N.appendChild($)}r.exports=k},173:r=>{function u(m){var k=document.createElement("style");return m.setAttributes(k,m.attributes),m.insert(k,m.options),k}r.exports=u},892:(r,u,m)=>{function k(C){var $=m.nc;$&&C.setAttribute("nonce",$)}r.exports=k},36:r=>{function u(C,$,N){var S="";N.supports&&(S+="@supports (".concat(N.supports,") {")),N.media&&(S+="@media ".concat(N.media," {"));var re=typeof N.layer<"u";re&&(S+="@layer".concat(N.layer.length>0?" ".concat(N.layer):""," {")),S+=N.css,re&&(S+="}"),N.media&&(S+="}"),N.supports&&(S+="}");var ne=N.sourceMap;ne&&typeof btoa<"u"&&(S+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ne))))," */")),$.styleTagTransform(S,C,$.options)}function m(C){if(C.parentNode===null)return!1;C.parentNode.removeChild(C)}function k(C){if(typeof document>"u")return{update:function(){},remove:function(){}};var $=C.insertStyleElement(C);return{update:function(N){u($,C,N)},remove:function(){m($)}}}r.exports=k},464:r=>{function u(m,k){if(k.styleSheet)k.styleSheet.cssText=m;else{for(;k.firstChild;)k.removeChild(k.firstChild);k.appendChild(document.createTextNode(m))}}r.exports=u},810:r=>{var u=k=>{var C={};return L.d(C,k),C},m=k=>()=>k;r.exports=o||(o=l.t(Me,2))}},ye={};function L(r){var u=ye[r];if(u!==void 0)return u.exports;var m=ye[r]={id:r,exports:{}};return R[r](m,m.exports,L),m.exports}L.n=r=>{var u=r&&r.__esModule?()=>r.default:()=>r;return L.d(u,{a:u}),u},L.d=(r,u)=>{for(var m in u)L.o(u,m)&&!L.o(r,m)&&Object.defineProperty(r,m,{enumerable:!0,get:u[m]})},L.o=(r,u)=>Object.prototype.hasOwnProperty.call(r,u),L.nc=void 0;var lt={};(()=>{L.d(lt,{Z:()=>xt});var r=L(322),u=L(810);const m=()=>![typeof window,typeof document].includes("undefined"),k=a=>Object.prototype.toString.call(a).slice(8,-1).toLowerCase(),C=a=>k(a).indexOf("element")>-1,$=(a=null)=>m()?C(a)?{width:a.clientWidth,height:a.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},N=(a={})=>{const f=(0,u.useRef)(0),[v,p]=(0,u.useState)(a),x=(0,u.useCallback)(I=>{cancelAnimationFrame(f.current),f.current=requestAnimationFrame(()=>p(I))},[]);return(0,u.useEffect)(()=>()=>cancelAnimationFrame(f.current),[]),[v,x]},S=()=>{const[a,f]=N($());return(0,u.useEffect)(()=>{const v=()=>f($());return window.addEventListener("resize",v,!1),()=>window.removeEventListener("resize",v,!1)},[]),a},re=a=>k(a)==="array",ne=(a,f,v="id",p="children")=>{if(!re(a))return null;const x=I=>{for(let G=0,ce=I.length;G<ce;G++){const M=I[G];if(M[v]===f)return[M];if(re(M[p])){const de=x(M[p]);if(de)return[M].concat(de)}}};return x(a)},Re=a=>++a,ke=()=>{const[,a]=(0,u.useState)(0);return(0,u.useCallback)(()=>a(Re),[])},ee=a=>re(a)&&!!a.length,Oe=({to:a,preventDefault:f,stopPropagation:v,...p})=>f?(0,r.jsx)("span",{...p}):(0,r.jsx)("a",{href:a,...p}),tt=({item:a,...f})=>(0,r.jsx)("ul",{...f}),at=(a,...f)=>{const v={};return Object.keys(a).filter(Boolean).map(p=>{v[p]=x=>a[p](x,...f)}),v},ft=({data:a=[],events:f={},List:v=tt,Link:p=Oe,leftIcon:x,rightIcon:I,isHorizontal:G,isCollapsed:ce,level:M=0,parentOpen:de=!0})=>{const ue=ce&&!M,$e=!G&&!ce&&!de;return a.map(W=>{const{name:Ze,path:Ve,icon:pt,rightIcon:it,active:fe,open:ct,children:dt,linkProps:St}=W,Mt=ee(dt),vt=W.id||Ve||Ze,ut=ue?W.title??Ze:void 0,e=$e?"hidden":"",t=pt??x,i=it??I,n=t?(0,r.jsx)("div",{className:"node-left-icon",children:t===!0?(0,r.jsx)("i",{className:"default-left-icon"}):t}):null,s=Ze?(0,r.jsx)("div",{className:"node-text",children:(0,r.jsx)("span",{children:Ze})}):null;if(Mt){const b=at(f,W,M),j=[e,ct?"open":""].filter(Boolean).join(" ");return(0,r.jsxs)("li",{className:j,"has-children":"true",...b,children:[(0,r.jsxs)(p,{title:ut,className:`link${fe?" active":""}`,to:Ve,preventDefault:!0,stopPropagation:!1,...St,children:[n,s,i?(0,r.jsx)("div",{className:"node-right-icon",children:i===!0?(0,r.jsx)("i",{className:"default-right-icon"}):i}):null]}),(0,r.jsx)(v,{item:W,children:ft({data:dt,events:f,List:v,Link:p,leftIcon:x,rightIcon:I,isHorizontal:G,isCollapsed:ce,level:M+1,parentOpen:!!ct})})]},vt)}return(0,r.jsx)("li",{className:e,children:(0,r.jsxs)(p,{title:ut,className:`link${fe?" active":""}`,to:Ve,...St,children:[n,s]})},vt)})},Ht=ft,Pt=a=>{const{children:f,open:v}=a;let p=0;if(v&&f?.length){p=f.length;let x=0;return f.map(I=>x+=Pt(I)),p+x}return p},Ot=({item:a,style:f,...v})=>(0,r.jsx)("ul",{style:{...f,"--count":Pt(a)},...v});var At=L(62),bt=L.n(At),Et=L(36),kt=L.n(Et),wt=L(793),gt=L.n(wt),It=L(892),mt=L.n(It),jt=L(173),c=L.n(jt),g=L(464),H=L.n(g),w=L(942),y={};y.styleTagTransform=H(),y.setAttributes=mt(),y.insert=gt().bind(null,"head"),y.domAPI=kt(),y.insertStyleElement=c();var Ce=bt()(w.Z,y);const se=w.Z&&w.Z.locals?w.Z.locals:void 0,ot=a=>(0,r.jsx)("ul",{...a}),Qe=(a,f)=>a?Ot:({item:v,...p})=>(0,r.jsx)(ot,{className:f==="right"?"left":"",...p}),Ye=a=>{const{data:f=[],collapsed:v=!1,type:p="vertical",Link:x,width:I,bgColor:G,itemHeight:ce,collapsedWidth:M,itemPadding:de,style:ue,className:$e,...W}=a,Ze=(0,u.useRef)(),Ve=(0,u.useRef)();(0,u.useEffect)(()=>()=>clearTimeout(Ze.current),[]);const pt=ke(),it=p==="horizontal",fe=!it&&v,ct={onClick:(e,t)=>{if(e.stopPropagation(),!it&&!fe){const i=ne(f,t.path,"path"),n=i[i.length-1];n.open=!n.open,pt()}},onMouseEnter:(e,t,i)=>{fe&&!i&&(clearTimeout(Ze.current),Ve.current.style.width="var(--maxWidth)")},onMouseLeave:(e,t,i)=>{fe&&!i&&(Ze.current=setTimeout(()=>Ve.current.style.width="",200))}},dt=(it?["huxy-horizontal-tree",$e]:["huxy-tree",$e,fe?"collapsed":""]).filter(Boolean).join(" "),{float:St,...Mt}=W?.style??{},vt={"--bgColor":G,"--itemHeight":ce,"--nodeListWidth":I,...Mt};it?(vt["--itemPadding"]=de,vt["--nodeFloat"]=St):(vt["--width"]=I,vt["--collapsedWidth"]=M);const ut=Qe(!it&&!fe,St);return(0,r.jsx)("div",{ref:Ve,className:dt,style:vt,...W,children:(0,r.jsx)("div",{className:"huxy-tree-track",children:(0,r.jsx)("ul",{className:"huxy-tree-root",children:Ht({data:f,events:ct,List:ut,Link:x,leftIcon:!0,rightIcon:!0,isHorizontal:it,isCollapsed:fe})})})})},De=(a,f)=>Object.prototype.hasOwnProperty.call(a??{},f),F=a=>De(a,"current"),ve=(a,f,v="click")=>{(0,u.useEffect)(()=>{const p=I=>{const G=F(a)?a.current:a;G?.contains&&!G.contains(I.target)&&f(I)},x=typeof v=="string"?[v]:v;return x.map(I=>{document.addEventListener(I,p,!1)}),()=>{x.map(I=>{document.removeEventListener(I,p,!1)})}},[a,f,v])},Te=a=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(a),Fe=a=>new Promise((f,v)=>{const p=new FileReader;p.readAsDataURL(a),p.addEventListener("load",()=>f(p.result)),p.addEventListener("error",x=>v(x))}),Ee=async a=>{if(!Te(a))return a;const f=await(await fetch(decodeURIComponent(a))).blob();return await Fe(f)},Je=a=>{const[f,v]=(0,u.useState)(a);return(0,u.useEffect)(()=>{(async p=>{const x=await Ee(p);v(x)})(a)},[a]),f},He=({src:a,...f})=>{const v=Je(a);return(0,r.jsx)("img",{...f,src:v})},Ge=({Ricon:a,open:f})=>a===!0?(0,r.jsx)("i",{className:`huxy-header-angle-${f?"top":"bt"}`}):(0,r.jsx)(a,{status:f}),st=({img:a,name:f,icon:v,Ricon:p,open:x})=>a?(0,r.jsxs)("div",{className:"avatar",children:[(0,r.jsx)("div",{className:"img",children:(0,r.jsx)(He,{src:a,width:"1",height:"1",crossOrigin:"anonymous",alt:"avatar"})}),f?(0,r.jsx)("span",{className:"txt",children:f}):null,p?(0,r.jsx)("span",{className:"node-icon",children:(0,r.jsx)(Ge,{Ricon:p,open:x})}):null]}):(0,r.jsxs)(r.Fragment,{children:[v?(0,r.jsx)("span",{className:"node-icon",children:v}):null,f?(0,r.jsx)("span",{className:"txt",children:f}):null,p?(0,r.jsx)("span",{className:"node-icon",children:(0,r.jsx)(Ge,{Ricon:p,open:x})}):null]}),d=({item:a,open:f})=>{const{Custom:v,img:p,name:x,icon:I,Ricon:G,active:ce}=a;return typeof v=="function"?(0,r.jsx)(v,{item:a,className:"link"}):(0,r.jsx)("span",{className:`link${ce?" active":""}`,title:a.title||x,children:(0,r.jsx)(st,{img:p,name:x,icon:I,Ricon:G,open:f})})},h=({item:a,click:f})=>{const v=(0,u.useRef)(),[p,x]=(0,u.useState)(!1);ve(v,W=>p&&x(!1));const{arrowDir:I,ChildRender:G,children:ce,smShow:M}=a,de=ce?.length,ue=(W,Ze,Ve=null)=>{Ve===!1&&x(pt=>!pt),Ve&&(W.stopPropagation(),x(!1)),f(Ze,Ve)},$e=M?"sm-show":"";return de||G?(0,r.jsxs)("li",{ref:v,className:`${$e} ${p?"open":""}`,onClick:W=>ue(W,a,!1),children:[(0,r.jsx)(d,{item:a,open:p}),(0,r.jsx)("ul",{className:`huxy-header-arrow-${I||"rt"}`,children:de?ce.map((W,Ze)=>(0,r.jsx)("li",{className:W.divider?"divider":"",children:(0,r.jsxs)("span",{onClick:Ve=>ue(Ve,W,!0),className:`link${W.active?" active":""}`,children:[W.icon?(0,r.jsx)("span",{className:"node-icon",children:W.icon}):null,(0,r.jsx)("span",{className:"drop-label",children:W.name})]})},`subItem-${Ze}-${W.key||W.name}`)):(0,r.jsx)("li",{children:(0,r.jsx)(G,{item:a,close:()=>x(!1)})})})]}):(0,r.jsx)("li",{onClick:W=>ue(W,a),className:$e,children:(0,r.jsx)(d,{item:a,open:p})})},K=({list:a,click:f})=>(0,r.jsx)("ul",{children:a.map((v,p)=>(0,r.jsx)(h,{click:f,item:v},`navItem-${p}-${v.key||v.name}`))}),P=a=>{const{leftList:f,rightList:v,handleNavClick:p,logo:x,title:I,Link:G}=a;return(0,r.jsxs)("div",{className:"header",children:[(0,r.jsxs)(G,{className:"banner",to:"/",children:[x?(0,r.jsx)("div",{className:"logo",children:(0,r.jsx)("img",{width:"1",height:"1",src:x,alt:"logo"})}):null,(0,r.jsx)("div",{className:"title",children:I??"Dashboard"})]}),(0,r.jsx)("div",{className:"nav",children:(0,r.jsxs)("div",{className:"nav-wrap",children:[(0,r.jsx)("div",{className:"nav-left",children:(0,r.jsx)(K,{list:f,click:p})}),(0,r.jsx)("div",{className:"nav-right",children:(0,r.jsx)(K,{list:v,click:p})})]})})]})};var B=L(505),te={};te.styleTagTransform=H(),te.setAttributes=mt(),te.insert=gt().bind(null,"head"),te.domAPI=kt(),te.insertStyleElement=c();var ge=bt()(B.Z,te);const be=B.Z&&B.Z.locals?B.Z.locals:void 0,E=({language:a,...f})=>(0,u.useMemo)(()=>(0,r.jsx)(P,{...f}),[a]),Z=a=>{const{navMenu:f,headerStyle:v,navMenuStyle:p,Link:x,leftList:I,rightList:G,handleNavClick:ce,logo:M,title:de,language:ue}=a;return(0,r.jsxs)("header",{className:"frame-header",style:v,children:[I?.length||G?.length?(0,r.jsx)(E,{Link:x,leftList:I,rightList:G,handleNavClick:($e,W)=>ce(a,$e,W),logo:M,title:de,language:ue}):null,f?.length?(0,r.jsx)(Ye,{data:f,type:"horizontal",Link:x,style:p}):null]})};var Ne=L(84),Le={};Le.styleTagTransform=H(),Le.setAttributes=mt(),Le.insert=gt().bind(null,"head"),Le.domAPI=kt(),Le.insertStyleElement=c();var rt=bt()(Ne.Z,Le);const je=Ne.Z&&Ne.Z.locals?Ne.Z.locals:void 0,xe=({Footer:a})=>(0,r.jsx)("div",{className:"footer",children:a?(0,r.jsx)(a,{}):"copyright \xA9 2020-2022"}),ze=a=>{const{useStore:f,menu:v,MenuTop:p,MenuBottom:x,Link:I,inputPath:G,asideStyle:ce}=a,[M,de]=f("huxy-collapse"),{width:ue}=S(),$e=(0,u.useRef)();return ve($e,W=>{ue<=1024&&M&&de(!1)}),(0,u.useEffect)(()=>{ue<=1024&&M&&de(!1)},[G]),(0,r.jsx)("aside",{className:"frame-aside",style:ce,children:(0,r.jsxs)("div",{ref:$e,style:{height:"100%"},children:[p&&(0,r.jsx)(p,{...a}),(0,r.jsx)(Ye,{data:v,collapsed:M&&ue>1024,Link:I}),x&&(0,r.jsx)(x,{collapsed:M,isSmall:ue<=1024,setCollapsed:de})]})})},V=380,nt=({inputPath:a,menuAnimate:f="ani-in"})=>{const v=(0,u.useRef)(a.split("?")[0]),p=(0,u.useRef)(),[x,I]=(0,u.useState)("");return(0,u.useEffect)(()=>{const G=a.split("?")[0];return G!==v.current&&(v.current=G,I(` ${f}`),p.current=setTimeout(()=>{I("")},V)),()=>{clearTimeout(p.current),I("")}},[a]),x},Xe=a=>{const{inputPath:f,contentStyle:v,menuAnimate:p,children:x}=a,I=nt({inputPath:f,menuAnimate:p});return(0,r.jsx)("div",{className:`page-content${I}`,style:v,children:x})};var Be=L(675),we={};we.styleTagTransform=H(),we.setAttributes=mt(),we.insert=gt().bind(null,"head"),we.domAPI=kt(),we.insertStyleElement=c();var We=bt()(Be.Z,we);const _e=Be.Z&&Be.Z.locals?Be.Z.locals:void 0,qe=a=>{const{menu:f,current:v,MainTop:p,children:x,inputPath:I,contentStyle:G,menuAnimate:ce}=a,M=f?.length,de=ce?ce===!0?"ani-in":ce:"";return(0,r.jsxs)("div",{className:`frame-container${M?"":" no-sidebar"}`,children:[M?(0,r.jsx)(ze,{...a}):null,(0,r.jsx)("div",{className:"frame-view",children:(0,r.jsxs)("div",{className:"page-container",children:[p&&(0,r.jsx)(p,{current:v}),de?(0,r.jsx)(Xe,{inputPath:I,contentStyle:G,menuAnimate:de,children:x}):(0,r.jsx)("div",{className:"page-content",style:G,children:x})]})}),(0,r.jsx)("footer",{className:"frame-footer",children:(0,r.jsx)(xe,{...a})})]})};var Ke=L(91),Ue={};Ue.styleTagTransform=H(),Ue.setAttributes=mt(),Ue.insert=gt().bind(null,"head"),Ue.domAPI=kt(),Ue.insertStyleElement=c();var $t=bt()(Ke.Z,Ue);const Ct=Ke.Z&&Ke.Z.locals?Ke.Z.locals:void 0,xt=a=>{const{useStore:f,vertical:v,horizontal:p,menu:x,leftList:I,rightList:G}=a,{width:ce}=S(),[M]=f("huxy-collapse"),de=ce<=1024,ue=de?x:v,$e=de?[]:p,W=ue?.length,Ze=$e?.length,Ve=Ze&&W,pt=Ve?"compose":Ze?"horizontal":M?"collapsed":"",it=Ve&&M?"composeCollapsed":"",fe=I?.length||G?.length?"":"no-header",ct=["frame",pt,it,fe].filter(Boolean).join(" ");return(0,r.jsxs)("div",{className:ct,children:[(0,r.jsx)(Z,{...a,navMenu:$e}),(0,r.jsx)("main",{className:"frame-main",children:(0,r.jsx)(qe,{...a,menu:ue})})]})}})();var D=lt.Z}}]);
