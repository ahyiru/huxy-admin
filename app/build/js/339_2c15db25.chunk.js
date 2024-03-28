(self.webpackChunk=self.webpackChunk||[]).push([[339],{95340:function(K,g,e){e.d(g,{B:function(){return M}});var n=e(63696);const M=n.createContext({}),_=n.createContext({message:{},notification:{},modal:{}});g.A=_},11367:function(K,g,e){var n=e(63696),M=e(4452),_=e.n(M),f=e(6451),b=e(84181),k=e(59730),u=e(5235),t=e(95340),o=e(27065);const a=()=>n.useContext(t.A),l=r=>{const{prefixCls:s,children:y,className:i,rootClassName:m,message:c,notification:x,style:v,component:P="div"}=r,{getPrefixCls:d}=(0,n.useContext)(f.QO),p=d("app",s),[h,E,w]=(0,o.A)(p),A=_()(E,p,i,m,w),N=(0,n.useContext)(t.B),H=n.useMemo(()=>({message:Object.assign(Object.assign({},N.message),c),notification:Object.assign(Object.assign({},N.notification),x)}),[c,x,N.message,N.notification]),[B,O]=(0,b.A)(H.message),[$,I]=(0,u.A)(H.notification),[D,T]=(0,k.A)(),S=n.useMemo(()=>({message:B,notification:$,modal:D}),[B,$,D]),W=P===!1?n.Fragment:P,j={className:A,style:v};return h(n.createElement(t.A.Provider,{value:S},n.createElement(t.B.Provider,{value:H},n.createElement(W,Object.assign({},P===!1?void 0:j),T,O,I,y))))};l.useApp=a,g.A=l},27065:function(K,g,e){var n=e(97923);const M=f=>{const{componentCls:b,colorText:k,fontSize:u,lineHeight:t,fontFamily:o}=f;return{[b]:{color:k,fontSize:u,lineHeight:t,fontFamily:o}}},_=()=>({});g.A=(0,n.OF)("App",M,_)},515:function(K,g,e){var n=e(63696),M=e(4452),_=e.n(M),f=e(23397),b=e(6451),k=e(37745);const u=t=>{const{className:o,prefixCls:a,style:l,color:r,children:s,text:y,placement:i="end",rootClassName:m}=t,{getPrefixCls:c,direction:x}=n.useContext(b.QO),v=c("ribbon",a),P=`${v}-wrapper`,[d,p,h]=(0,k.A)(v,P),E=(0,f.nP)(r,!1),w=_()(v,`${v}-placement-${i}`,{[`${v}-rtl`]:x==="rtl",[`${v}-color-${r}`]:E},o),A={},N={};return r&&!E&&(A.background=r,N.color=r),d(n.createElement("div",{className:_()(P,m,p,h)},s,n.createElement("div",{className:_()(w,p),style:Object.assign(Object.assign({},A),l)},n.createElement("span",{className:`${v}-text`},y),n.createElement("div",{className:`${v}-corner`,style:N}))))};g.A=u},39583:function(K,g,e){var n=e(4452),M=e.n(n),_=e(63696),f=e(55046),b=e(6451),k=e(92122),u=function(o,a){var l={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&a.indexOf(r)<0&&(l[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(o);s<r.length;s++)a.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(o,r[s])&&(l[r[s]]=o[r[s]]);return l};const t=_.forwardRef((o,a)=>{const{prefixCls:l,count:r,className:s,motionClassName:y,style:i,title:m,show:c,component:x="sup",children:v}=o,P=u(o,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:d}=_.useContext(b.QO),p=d("scroll-number",l),h=Object.assign(Object.assign({},P),{"data-show":c,style:i,className:M()(p,s,y),title:m});let E=r;if(r&&Number(r)%1===0){const w=String(r).split("");E=_.createElement("bdi",null,w.map((A,N)=>_.createElement(k.A,{prefixCls:p,count:Number(r),value:A,key:w.length-N})))}return i&&i.borderColor&&(h.style=Object.assign(Object.assign({},i),{boxShadow:`0 0 0 1px ${i.borderColor} inset`})),v?(0,f.Ob)(v,w=>({className:M()(`${p}-custom-component`,w?.className,y)})):_.createElement(x,Object.assign({},h,{ref:a}),E)});g.A=t},92122:function(K,g,e){e.d(g,{A:function(){return k}});var n=e(4452),M=e.n(n),_=e(63696);function f(u){let{prefixCls:t,value:o,current:a,offset:l=0}=u,r;return l&&(r={position:"absolute",top:`${l}00%`,left:0}),_.createElement("span",{style:r,className:M()(`${t}-only-unit`,{current:a})},o)}function b(u,t,o){let a=u,l=0;for(;(a+10)%10!==t;)a+=o,l+=o;return l}function k(u){const{prefixCls:t,count:o,value:a}=u,l=Number(a),r=Math.abs(o),[s,y]=_.useState(l),[i,m]=_.useState(r),c=()=>{y(l),m(r)};_.useEffect(()=>{const P=setTimeout(()=>{c()},1e3);return()=>{clearTimeout(P)}},[l]);let x,v;if(s===l||Number.isNaN(l)||Number.isNaN(s))x=[_.createElement(f,Object.assign({},u,{key:l,current:!0}))],v={transition:"none"};else{x=[];const P=l+10,d=[];for(let E=l;E<=P;E+=1)d.push(E);const p=d.findIndex(E=>E%10===s);x=d.map((E,w)=>{const A=E%10;return _.createElement(f,Object.assign({},u,{key:E,value:A,offset:w-p,current:w===p}))});const h=i<r?1:-1;v={transform:`translateY(${-b(s,l,h)}00%)`}}return _.createElement("span",{className:`${t}-only`,style:v,onTransitionEnd:c},x)}},71199:function(K,g,e){var n=e(63696),M=e(4452),_=e.n(M),f=e(9144),b=e(23397),k=e(55046),u=e(6451),t=e(515),o=e(39583),a=e(80097),l=function(y,i){var m={};for(var c in y)Object.prototype.hasOwnProperty.call(y,c)&&i.indexOf(c)<0&&(m[c]=y[c]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,c=Object.getOwnPropertySymbols(y);x<c.length;x++)i.indexOf(c[x])<0&&Object.prototype.propertyIsEnumerable.call(y,c[x])&&(m[c[x]]=y[c[x]]);return m};const r=(y,i)=>{var m,c,x,v,P;const{prefixCls:d,scrollNumberPrefixCls:p,children:h,status:E,text:w,color:A,count:N=null,overflowCount:H=99,dot:B=!1,size:O="default",title:$,offset:I,style:D,className:T,rootClassName:S,classNames:W,styles:j,showZero:G=!1}=y,V=l(y,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:re,direction:X,badge:z}=n.useContext(u.QO),Z=re("badge",d),[te,Ae,we]=(0,a.Ay)(Z),ae=N>H?`${H}+`:N,Pe=ae==="0"||ae===0,ee=N===null||Pe&&!G,he=(E!=null||A!=null)&&ee,ve=B&&!Pe,pe=ve?"":ae,_e=(0,n.useMemo)(()=>(pe==null||pe===""||Pe&&!G)&&!ve,[pe,Pe,G,ve]),fe=(0,n.useRef)(N);_e||(fe.current=N);const le=fe.current,ge=(0,n.useRef)(pe);_e||(ge.current=pe);const me=ge.current,ue=(0,n.useRef)(ve);_e||(ue.current=ve);const xe=(0,n.useMemo)(()=>{if(!I)return Object.assign(Object.assign({},z?.style),D);const ie={marginTop:I[1]};return X==="rtl"?ie.left=parseInt(I[0],10):ie.right=-parseInt(I[0],10),Object.assign(Object.assign(Object.assign({},ie),z?.style),D)},[X,I,D,z?.style]),Ne=$??(typeof le=="string"||typeof le=="number"?le:void 0),Re=_e||!w?null:n.createElement("span",{className:`${Z}-status-text`},w),be=!le||typeof le!="object"?void 0:(0,k.Ob)(le,ie=>({style:Object.assign(Object.assign({},xe),ie.style)})),oe=(0,b.nP)(A,!1),He=_()(W?.indicator,(m=z?.classNames)===null||m===void 0?void 0:m.indicator,{[`${Z}-status-dot`]:he,[`${Z}-status-${E}`]:!!E,[`${Z}-color-${A}`]:oe}),ye={};A&&!oe&&(ye.color=A,ye.background=A);const Le=_()(Z,{[`${Z}-status`]:he,[`${Z}-not-a-wrapper`]:!h,[`${Z}-rtl`]:X==="rtl"},T,S,z?.className,(c=z?.classNames)===null||c===void 0?void 0:c.root,W?.root,Ae,we);if(!h&&he){const ie=xe.color;return te(n.createElement("span",Object.assign({},V,{className:Le,style:Object.assign(Object.assign(Object.assign({},j?.root),(x=z?.styles)===null||x===void 0?void 0:x.root),xe)}),n.createElement("span",{className:He,style:Object.assign(Object.assign(Object.assign({},j?.indicator),(v=z?.styles)===null||v===void 0?void 0:v.indicator),ye)}),w&&n.createElement("span",{style:{color:ie},className:`${Z}-status-text`},w)))}return te(n.createElement("span",Object.assign({ref:i},V,{className:Le,style:Object.assign(Object.assign({},(P=z?.styles)===null||P===void 0?void 0:P.root),j?.root)}),h,n.createElement(f.Ay,{visible:!_e,motionName:`${Z}-zoom`,motionAppear:!1,motionDeadline:1e3},ie=>{let{className:$e,ref:Ie}=ie;var je,Be;const Ke=re("scroll-number",p),Q=ue.current,se=_()(W?.indicator,(je=z?.classNames)===null||je===void 0?void 0:je.indicator,{[`${Z}-dot`]:Q,[`${Z}-count`]:!Q,[`${Z}-count-sm`]:O==="small",[`${Z}-multiple-words`]:!Q&&me&&me.toString().length>1,[`${Z}-status-${E}`]:!!E,[`${Z}-color-${A}`]:oe});let Oe=Object.assign(Object.assign(Object.assign({},j?.indicator),(Be=z?.styles)===null||Be===void 0?void 0:Be.indicator),xe);return A&&!oe&&(Oe=Oe||{},Oe.background=A),n.createElement(o.A,{prefixCls:Ke,show:!_e,motionClassName:$e,className:se,count:me,title:Ne,style:Oe,key:"scrollNumber",ref:Ie},be)}),Re))},s=n.forwardRef(r);s.Ribbon=t.A,g.A=s},80097:function(K,g,e){e.d(g,{FY:function(){return s},cH:function(){return y}});var n=e(44534),M=e(94029),_=e(45816),f=e(48876),b=e(97923);const k=new n.Mo("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),u=new n.Mo("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),t=new n.Mo("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),o=new n.Mo("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),a=new n.Mo("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),l=new n.Mo("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),r=i=>{const{componentCls:m,iconCls:c,antCls:x,badgeShadowSize:v,motionDurationSlow:P,textFontSize:d,textFontSizeSM:p,statusSize:h,dotSize:E,textFontWeight:w,indicatorHeight:A,indicatorHeightSM:N,marginXS:H,calc:B}=i,O=`${x}-scroll-number`,$=(0,_.A)(i,(I,D)=>{let{darkColor:T}=D;return{[`&${m} ${m}-color-${I}`]:{background:T,[`&:not(${m}-count)`]:{color:T}}}});return{[m]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,M.dF)(i)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${m}-count`]:{zIndex:i.indicatorZIndex,minWidth:A,height:A,color:i.badgeTextColor,fontWeight:w,fontSize:d,lineHeight:(0,n.zA)(A),whiteSpace:"nowrap",textAlign:"center",background:i.badgeColor,borderRadius:B(A).div(2).equal(),boxShadow:`0 0 0 ${(0,n.zA)(v)} ${i.badgeShadowColor}`,transition:`background ${i.motionDurationMid}`,a:{color:i.badgeTextColor},"a:hover":{color:i.badgeTextColor},"a:hover &":{background:i.badgeColorHover}},[`${m}-count-sm`]:{minWidth:N,height:N,fontSize:p,lineHeight:(0,n.zA)(N),borderRadius:B(N).div(2).equal()},[`${m}-multiple-words`]:{padding:`0 ${(0,n.zA)(i.paddingXS)}`,bdi:{unicodeBidi:"plaintext"}},[`${m}-dot`]:{zIndex:i.indicatorZIndex,width:E,minWidth:E,height:E,background:i.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${(0,n.zA)(v)} ${i.badgeShadowColor}`},[`${m}-dot${O}`]:{transition:`background ${P}`},[`${m}-count, ${m}-dot, ${O}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${c}-spin`]:{animationName:l,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${m}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${m}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:h,height:h,verticalAlign:"middle",borderRadius:"50%"},[`${m}-status-success`]:{backgroundColor:i.colorSuccess},[`${m}-status-processing`]:{overflow:"visible",color:i.colorPrimary,backgroundColor:i.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:v,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:k,animationDuration:i.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${m}-status-default`]:{backgroundColor:i.colorTextPlaceholder},[`${m}-status-error`]:{backgroundColor:i.colorError},[`${m}-status-warning`]:{backgroundColor:i.colorWarning},[`${m}-status-text`]:{marginInlineStart:H,color:i.colorText,fontSize:i.fontSize}}}),$),{[`${m}-zoom-appear, ${m}-zoom-enter`]:{animationName:u,animationDuration:i.motionDurationSlow,animationTimingFunction:i.motionEaseOutBack,animationFillMode:"both"},[`${m}-zoom-leave`]:{animationName:t,animationDuration:i.motionDurationSlow,animationTimingFunction:i.motionEaseOutBack,animationFillMode:"both"},[`&${m}-not-a-wrapper`]:{[`${m}-zoom-appear, ${m}-zoom-enter`]:{animationName:o,animationDuration:i.motionDurationSlow,animationTimingFunction:i.motionEaseOutBack},[`${m}-zoom-leave`]:{animationName:a,animationDuration:i.motionDurationSlow,animationTimingFunction:i.motionEaseOutBack},[`&:not(${m}-status)`]:{verticalAlign:"middle"},[`${O}-custom-component, ${m}-count`]:{transform:"none"},[`${O}-custom-component, ${O}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${O}`]:{overflow:"hidden",[`${O}-only`]:{position:"relative",display:"inline-block",height:A,transition:`all ${i.motionDurationSlow} ${i.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${O}-only-unit`]:{height:A,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${O}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${m}-count, ${m}-dot, ${O}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},s=i=>{const{fontHeight:m,lineWidth:c,marginXS:x,colorBorderBg:v}=i,P=m,d=c,p=i.colorBgContainer,h=i.colorError,E=i.colorErrorHover;return(0,f.h1)(i,{badgeFontHeight:P,badgeShadowSize:d,badgeTextColor:p,badgeColor:h,badgeColorHover:E,badgeShadowColor:v,badgeProcessingDuration:"1.2s",badgeRibbonOffset:x,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},y=i=>{const{fontSize:m,lineHeight:c,fontSizeSM:x,lineWidth:v}=i;return{indicatorZIndex:"auto",indicatorHeight:Math.round(m*c)-2*v,indicatorHeightSM:m,dotSize:x/2,textFontSize:x,textFontSizeSM:x,textFontWeight:"normal",statusSize:x/2}};g.Ay=(0,b.OF)("Badge",i=>{const m=s(i);return r(m)},y)},37745:function(K,g,e){var n=e(44534),M=e(80097),_=e(94029),f=e(45816),b=e(97923);const k=u=>{const{antCls:t,badgeFontHeight:o,marginXS:a,badgeRibbonOffset:l,calc:r}=u,s=`${t}-ribbon`,y=`${t}-ribbon-wrapper`,i=(0,f.A)(u,(m,c)=>{let{darkColor:x}=c;return{[`&${s}-color-${m}`]:{background:x,color:x}}});return{[`${y}`]:{position:"relative"},[`${s}`]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,_.dF)(u)),{position:"absolute",top:a,padding:`0 ${(0,n.zA)(u.paddingXS)}`,color:u.colorPrimary,lineHeight:(0,n.zA)(o),whiteSpace:"nowrap",backgroundColor:u.colorPrimary,borderRadius:u.borderRadiusSM,[`${s}-text`]:{color:u.colorTextLightSolid},[`${s}-corner`]:{position:"absolute",top:"100%",width:l,height:l,color:"currentcolor",border:`${(0,n.zA)(r(l).div(2).equal())} solid`,transform:u.badgeRibbonCornerTransform,transformOrigin:"top",filter:u.badgeRibbonCornerFilter}}),i),{[`&${s}-placement-end`]:{insetInlineEnd:r(l).mul(-1).equal(),borderEndEndRadius:0,[`${s}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${s}-placement-start`]:{insetInlineStart:r(l).mul(-1).equal(),borderEndStartRadius:0,[`${s}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};g.A=(0,b.OF)(["Badge","Ribbon"],u=>{const t=(0,M.FY)(u);return k(t)},M.cH)},89932:function(K,g,e){var n=e(63696),M=e(4452),_=e.n(M),f=e(96420),b=e(6451);const k=u=>{var t,o;const{prefixCls:a,title:l,footer:r,extra:s,closeIcon:y,closable:i,onClose:m,headerStyle:c,bodyStyle:x,footerStyle:v,children:P,classNames:d,styles:p}=u,{drawer:h}=n.useContext(b.QO),E=n.useCallback(O=>n.createElement("button",{type:"button",onClick:m,"aria-label":"Close",className:`${a}-close`},O),[m]),w=n.useMemo(()=>typeof h?.closable=="object"&&h.closable.closeIcon?h.closable.closeIcon:h?.closeIcon,[h?.closable,h?.closeIcon]),[A,N]=(0,f.A)({closable:i??h?.closable,closeIcon:typeof y<"u"?y:w,customCloseIconRender:E,defaultClosable:!0}),H=n.useMemo(()=>{var O,$;return!l&&!A?null:n.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(O=h?.styles)===null||O===void 0?void 0:O.header),c),p?.header),className:_()(`${a}-header`,{[`${a}-header-close-only`]:A&&!l&&!s},($=h?.classNames)===null||$===void 0?void 0:$.header,d?.header)},n.createElement("div",{className:`${a}-header-title`},N,l&&n.createElement("div",{className:`${a}-title`},l)),s&&n.createElement("div",{className:`${a}-extra`},s))},[A,N,s,c,a,l]),B=n.useMemo(()=>{var O,$;if(!r)return null;const I=`${a}-footer`;return n.createElement("div",{className:_()(I,(O=h?.classNames)===null||O===void 0?void 0:O.footer,d?.footer),style:Object.assign(Object.assign(Object.assign({},($=h?.styles)===null||$===void 0?void 0:$.footer),v),p?.footer)},r)},[r,v,a]);return n.createElement(n.Fragment,null,H,n.createElement("div",{className:_()(`${a}-body`,d?.body,(t=h?.classNames)===null||t===void 0?void 0:t.body),style:Object.assign(Object.assign(Object.assign({},(o=h?.styles)===null||o===void 0?void 0:o.body),x),p?.body)},P),B)};g.A=k},18325:function(K,g,e){var n=e(63696),M=e(4452),_=e.n(M),f=e(16693),b=e(98735),k=e(48663),u=e(85892),t=e(6451),o=e(94085),a=e(28227),l=e(40497),r=e(89932),s=e(60415),y=function(v,P){var d={};for(var p in v)Object.prototype.hasOwnProperty.call(v,p)&&P.indexOf(p)<0&&(d[p]=v[p]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,p=Object.getOwnPropertySymbols(v);h<p.length;h++)P.indexOf(p[h])<0&&Object.prototype.propertyIsEnumerable.call(v,p[h])&&(d[p[h]]=v[p[h]]);return d};const i=null,m={distance:180},c=v=>{var P;const{rootClassName:d,width:p,height:h,size:E="default",mask:w=!0,push:A=m,open:N,afterOpenChange:H,onClose:B,prefixCls:O,getContainer:$,style:I,className:D,visible:T,afterVisibleChange:S,maskStyle:W,drawerStyle:j,contentWrapperStyle:G}=v,V=y(v,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer:re,getPrefixCls:X,direction:z,drawer:Z}=n.useContext(t.QO),te=X("drawer",O),[Ae,we,ae]=(0,s.A)(te),Pe=$===void 0&&re?()=>re(document.body):$,ee=_()({"no-mask":!w,[`${te}-rtl`]:z==="rtl"},d,we,ae),he=n.useMemo(()=>p??(E==="large"?736:378),[p,E]),ve=n.useMemo(()=>h??(E==="large"?736:378),[h,E]),pe={motionName:(0,k.b)(te,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},_e=Re=>({motionName:(0,k.b)(te,`panel-motion-${Re}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),fe=(0,l.f)(),[le,ge]=(0,b.YK)("Drawer",V.zIndex),{classNames:me={},styles:ue={}}=V,{classNames:xe={},styles:Ne={}}=Z||{};return Ae(n.createElement(a.K6,null,n.createElement(o.XB,{status:!0,override:!0},n.createElement(u.A.Provider,{value:ge},n.createElement(f.A,Object.assign({prefixCls:te,onClose:B,maskMotion:pe,motion:_e},V,{classNames:{mask:_()(me.mask,xe.mask),content:_()(me.content,xe.content)},styles:{mask:Object.assign(Object.assign(Object.assign({},ue.mask),W),Ne.mask),content:Object.assign(Object.assign(Object.assign({},ue.content),j),Ne.content),wrapper:Object.assign(Object.assign(Object.assign({},ue.wrapper),G),Ne.wrapper)},open:N??T,mask:w,push:A,width:he,height:ve,style:Object.assign(Object.assign({},Z?.style),I),className:_()(Z?.className,D),rootClassName:ee,getContainer:Pe,afterOpenChange:H??S,panelRef:fe,zIndex:le}),n.createElement(r.A,Object.assign({prefixCls:te},V,{onClose:B})))))))},x=v=>{const{prefixCls:P,style:d,className:p,placement:h="right"}=v,E=y(v,["prefixCls","style","className","placement"]),{getPrefixCls:w}=n.useContext(t.QO),A=w("drawer",P),[N,H,B]=(0,s.A)(A),O=_()(A,`${A}-pure`,`${A}-${h}`,H,B,p);return N(n.createElement("div",{className:O,style:d},n.createElement(r.A,Object.assign({prefixCls:A},E))))};c._InternalPanelDoNotUseOrYouWillBeFired=x,g.A=c},60415:function(K,g,e){var n=e(44534),M=e(94029),_=e(97923),f=e(48876),b=e(96545);const k=t=>{const{borderRadiusSM:o,componentCls:a,zIndexPopup:l,colorBgMask:r,colorBgElevated:s,motionDurationSlow:y,motionDurationMid:i,paddingXS:m,padding:c,paddingLG:x,fontSizeLG:v,lineHeightLG:P,lineWidth:d,lineType:p,colorSplit:h,marginXS:E,colorIcon:w,colorIconHover:A,colorBgTextHover:N,colorBgTextActive:H,colorText:B,fontWeightStrong:O,footerPaddingBlock:$,footerPaddingInline:I,calc:D}=t,T=`${a}-content-wrapper`;return{[a]:{position:"fixed",inset:0,zIndex:l,pointerEvents:"none","&-pure":{position:"relative",background:s,display:"flex",flexDirection:"column",[`&${a}-left`]:{boxShadow:t.boxShadowDrawerLeft},[`&${a}-right`]:{boxShadow:t.boxShadowDrawerRight},[`&${a}-top`]:{boxShadow:t.boxShadowDrawerUp},[`&${a}-bottom`]:{boxShadow:t.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${a}-mask`]:{position:"absolute",inset:0,zIndex:l,background:r,pointerEvents:"auto"},[T]:{position:"absolute",zIndex:l,maxWidth:"100vw",transition:`all ${y}`,"&-hidden":{display:"none"}},[`&-left > ${T}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:t.boxShadowDrawerLeft},[`&-right > ${T}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:t.boxShadowDrawerRight},[`&-top > ${T}`]:{top:0,insetInline:0,boxShadow:t.boxShadowDrawerUp},[`&-bottom > ${T}`]:{bottom:0,insetInline:0,boxShadow:t.boxShadowDrawerDown},[`${a}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:s,pointerEvents:"auto"},[`${a}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${(0,n.zA)(c)} ${(0,n.zA)(x)}`,fontSize:v,lineHeight:P,borderBottom:`${(0,n.zA)(d)} ${p} ${h}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${a}-extra`]:{flex:"none"},[`${a}-close`]:Object.assign({display:"inline-flex",width:D(v).add(m).equal(),height:D(v).add(m).equal(),borderRadius:o,justifyContent:"center",alignItems:"center",marginInlineEnd:E,color:w,fontWeight:O,fontSize:v,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,cursor:"pointer",transition:`all ${i}`,textRendering:"auto","&:hover":{color:A,backgroundColor:N,textDecoration:"none"},"&:active":{backgroundColor:H}},(0,M.K8)(t)),[`${a}-title`]:{flex:1,margin:0,color:B,fontWeight:t.fontWeightStrong,fontSize:v,lineHeight:P},[`${a}-body`]:{flex:1,minWidth:0,minHeight:0,padding:x,overflow:"auto"},[`${a}-footer`]:{flexShrink:0,padding:`${(0,n.zA)($)} ${(0,n.zA)(I)}`,borderTop:`${(0,n.zA)(d)} ${p} ${h}`},"&-rtl":{direction:"rtl"}}}},u=t=>({zIndexPopup:t.zIndexPopupBase,footerPaddingBlock:t.paddingXS,footerPaddingInline:t.padding});g.A=(0,_.OF)("Drawer",t=>{const o=(0,f.h1)(t,{});return[k(o),(0,b.A)(o)]},u)},96545:function(K,g){const e=b=>{const k="100%";return{left:`translateX(-${k})`,right:`translateX(${k})`,top:`translateY(-${k})`,bottom:`translateY(${k})`}[b]},n=(b,k)=>({"&-enter, &-appear":Object.assign(Object.assign({},b),{"&-active":k}),"&-leave":Object.assign(Object.assign({},k),{"&-active":b})}),M=(b,k)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${k}`}}},n({opacity:b},{opacity:1})),_=(b,k)=>[M(.7,k),n({transform:e(b)},{transform:"none"})],f=b=>{const{componentCls:k,motionDurationSlow:u}=b;return{[k]:{[`${k}-mask-motion`]:M(0,u),[`${k}-panel-motion`]:["left","right","top","bottom"].reduce((t,o)=>Object.assign(Object.assign({},t),{[`&-${o}`]:_(o,u)}),{})}}};g.A=f},38867:function(K,g,e){e.d(g,{Mb:function(){return r}});var n=e(31964),M=e(97496),_=e(31573),f=e(20278),b=e(15438),k=e(4452),u=e.n(k),t=e(23715),o=e(63696),a=function(i,m){var c={};for(var x in i)Object.prototype.hasOwnProperty.call(i,x)&&m.indexOf(x)<0&&(c[x]=i[x]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,x=Object.getOwnPropertySymbols(i);v<x.length;v++)m.indexOf(x[v])<0&&Object.prototype.propertyIsEnumerable.call(i,x[v])&&(c[x[v]]=i[x[v]]);return c};const l={info:o.createElement(f.A,null),success:o.createElement(n.A,null),error:o.createElement(M.A,null),warning:o.createElement(_.A,null),loading:o.createElement(b.A,null)},r=i=>{let{prefixCls:m,type:c,icon:x,children:v}=i;return o.createElement("div",{className:u()(`${m}-custom-content`,`${m}-${c}`)},x||l[c],o.createElement("span",null,v))},s=i=>{const{prefixCls:m,className:c,type:x,icon:v,content:P}=i,d=a(i,["prefixCls","className","type","icon","content"]),{getPrefixCls:p}=React.useContext(ConfigContext),h=m||p("message"),E=useCSSVarCls(h),[w,A,N]=useStyle(h,E);return w(React.createElement(Notice,Object.assign({},d,{prefixCls:h,className:classNames(c,A,`${h}-notice-pure-panel`,N,E),eventKey:"pure",duration:null,content:React.createElement(r,{prefixCls:h,type:x,icon:v},P)})))};var y=null},68621:function(K,g,e){var n=e(44534),M=e(98735),_=e(94029),f=e(97923),b=e(48876);const k=t=>{const{componentCls:o,iconCls:a,boxShadow:l,colorText:r,colorSuccess:s,colorError:y,colorWarning:i,colorInfo:m,fontSizeLG:c,motionEaseInOutCirc:x,motionDurationSlow:v,marginXS:P,paddingXS:d,borderRadiusLG:p,zIndexPopup:h,contentPadding:E,contentBg:w}=t,A=`${o}-notice`,N=new n.Mo("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:d,transform:"translateY(0)",opacity:1}}),H=new n.Mo("MessageMoveOut",{"0%":{maxHeight:t.height,padding:d,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),B={padding:d,textAlign:"center",[`${o}-custom-content > ${a}`]:{verticalAlign:"text-bottom",marginInlineEnd:P,fontSize:c},[`${A}-content`]:{display:"inline-block",padding:E,background:w,borderRadius:p,boxShadow:l,pointerEvents:"all"},[`${o}-success > ${a}`]:{color:s},[`${o}-error > ${a}`]:{color:y},[`${o}-warning > ${a}`]:{color:i},[`${o}-info > ${a},
      ${o}-loading > ${a}`]:{color:m}};return[{[o]:Object.assign(Object.assign({},(0,_.dF)(t)),{color:r,position:"fixed",top:P,width:"100%",pointerEvents:"none",zIndex:h,[`${o}-move-up`]:{animationFillMode:"forwards"},[`
        ${o}-move-up-appear,
        ${o}-move-up-enter
      `]:{animationName:N,animationDuration:v,animationPlayState:"paused",animationTimingFunction:x},[`
        ${o}-move-up-appear${o}-move-up-appear-active,
        ${o}-move-up-enter${o}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${o}-move-up-leave`]:{animationName:H,animationDuration:v,animationPlayState:"paused",animationTimingFunction:x},[`${o}-move-up-leave${o}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[o]:{[`${A}-wrapper`]:Object.assign({},B)}},{[`${o}-notice-pure-panel`]:Object.assign(Object.assign({},B),{padding:0,textAlign:"start"})}]},u=t=>({zIndexPopup:t.zIndexPopupBase+M.jH+10,contentBg:t.colorBgElevated,contentPadding:`${(t.controlHeightLG-t.fontSize*t.lineHeight)/2}px ${t.paddingSM}px`});g.A=(0,f.OF)("Message",t=>{const o=(0,b.h1)(t,{height:150});return[k(o)]},u)},84181:function(K,g,e){e.d(g,{A:function(){return P}});var n=e(63696),M=e(49338),_=e(4452),f=e.n(_),b=e(23715),k=e(78761),u=e(6451),t=e(8346),o=e(38867),a=e(68621),l=e(5587),r=function(d,p){var h={};for(var E in d)Object.prototype.hasOwnProperty.call(d,E)&&p.indexOf(E)<0&&(h[E]=d[E]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var w=0,E=Object.getOwnPropertySymbols(d);w<E.length;w++)p.indexOf(E[w])<0&&Object.prototype.propertyIsEnumerable.call(d,E[w])&&(h[E[w]]=d[E[w]]);return h};const s=8,y=3,i=d=>{let{children:p,prefixCls:h}=d;const E=(0,t.A)(h),[w,A,N]=(0,a.A)(h,E);return w(n.createElement(b.ph,{classNames:{list:f()(A,N,E)}},p))},m=(d,p)=>{let{prefixCls:h,key:E}=p;return n.createElement(i,{prefixCls:h,key:E},d)},c=n.forwardRef((d,p)=>{const{top:h,prefixCls:E,getContainer:w,maxCount:A,duration:N=y,rtl:H,transitionName:B,onAllRemoved:O}=d,{getPrefixCls:$,getPopupContainer:I,message:D,direction:T}=n.useContext(u.QO),S=E||$("message"),W=()=>({left:"50%",transform:"translateX(-50%)",top:h??s}),j=()=>f()({[`${S}-rtl`]:H??T==="rtl"}),G=()=>(0,l.V)(S,B),V=n.createElement("span",{className:`${S}-close-x`},n.createElement(M.A,{className:`${S}-close-icon`})),[re,X]=(0,b.hN)({prefixCls:S,style:W,className:j,motion:G,closable:!1,closeIcon:V,duration:N,getContainer:()=>w?.()||I?.()||document.body,maxCount:A,onAllRemoved:O,renderNotifications:m});return n.useImperativeHandle(p,()=>Object.assign(Object.assign({},re),{prefixCls:S,message:D})),X});let x=0;function v(d){const p=n.useRef(null),h=(0,k.rJ)("Message");return[n.useMemo(()=>{const w=O=>{var $;($=p.current)===null||$===void 0||$.close(O)},A=O=>{if(!p.current){const te=()=>{};return te.then=()=>{},te}const{open:$,prefixCls:I,message:D}=p.current,T=`${I}-notice`,{content:S,icon:W,type:j,key:G,className:V,style:re,onClose:X}=O,z=r(O,["content","icon","type","key","className","style","onClose"]);let Z=G;return Z==null&&(x+=1,Z=`antd-message-${x}`),(0,l.E)(te=>($(Object.assign(Object.assign({},z),{key:Z,content:n.createElement(o.Mb,{prefixCls:I,type:j,icon:W},S),placement:"top",className:f()(j&&`${T}-${j}`,V,D?.className),style:Object.assign(Object.assign({},D?.style),re),onClose:()=>{X?.(),te()}})),()=>{w(Z)}))},H={open:A,destroy:O=>{var $;O!==void 0?w(O):($=p.current)===null||$===void 0||$.destroy()}};return["info","success","warning","error","loading"].forEach(O=>{const $=(I,D,T)=>{let S;I&&typeof I=="object"&&"content"in I?S=I:S={content:I};let W,j;typeof D=="function"?j=D:(W=D,j=T);const G=Object.assign(Object.assign({onClose:j,duration:W},S),{type:O});return A(G)};H[O]=$}),H},[]),n.createElement(c,Object.assign({key:"message-holder"},d,{ref:p}))]}function P(d){return v(d)}},5587:function(K,g,e){e.d(g,{E:function(){return M},V:function(){return n}});function n(_,f){return{motionName:f??`${_}-move-up`}}function M(_){let f;const b=new Promise(u=>{f=_(()=>{u(!0)})}),k=()=>{f?.()};return k.then=(u,t)=>b.then(u,t),k.promise=b,k}},15387:function(K,g,e){e.d(g,{Mb:function(){return i},aC:function(){return s}});var n=e(63696),M=e(31964),_=e(97496),f=e(49338),b=e(31573),k=e(20278),u=e(15438),t=e(4452),o=e.n(t),a=e(23715),l=function(x,v){var P={};for(var d in x)Object.prototype.hasOwnProperty.call(x,d)&&v.indexOf(d)<0&&(P[d]=x[d]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,d=Object.getOwnPropertySymbols(x);p<d.length;p++)v.indexOf(d[p])<0&&Object.prototype.propertyIsEnumerable.call(x,d[p])&&(P[d[p]]=x[d[p]]);return P};const r={info:n.createElement(k.A,null),success:n.createElement(M.A,null),error:n.createElement(_.A,null),warning:n.createElement(b.A,null),loading:n.createElement(u.A,null)};function s(x,v){return v===null||v===!1?null:v||n.createElement(f.A,{className:`${x}-close-icon`})}const y={success:M.A,info:k.A,error:_.A,warning:b.A},i=x=>{const{prefixCls:v,icon:P,type:d,message:p,description:h,btn:E,role:w="alert"}=x;let A=null;return P?A=n.createElement("span",{className:`${v}-icon`},P):d&&(A=n.createElement(y[d]||null,{className:o()(`${v}-icon`,`${v}-icon-${d}`)})),n.createElement("div",{className:o()({[`${v}-with-icon`]:A}),role:w},A,n.createElement("div",{className:`${v}-message`},p),n.createElement("div",{className:`${v}-description`},h),E&&n.createElement("div",{className:`${v}-btn`},E))},m=x=>{const{prefixCls:v,className:P,icon:d,type:p,message:h,description:E,btn:w,closable:A=!0,closeIcon:N,className:H}=x,B=l(x,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:O}=React.useContext(ConfigContext),$=v||O("notification"),I=`${$}-notice`,D=useCSSVarCls($),[T,S,W]=useStyle($,D);return T(React.createElement("div",{className:classNames(`${I}-pure-panel`,S,P,W,D)},React.createElement(PurePanelStyle,{prefixCls:$}),React.createElement(Notice,Object.assign({},B,{prefixCls:$,eventKey:"pure",duration:null,closable:A,className:classNames({notificationClassName:H}),closeIcon:s($,N),content:React.createElement(i,{prefixCls:I,icon:d,type:p,message:h,description:E,btn:w})}))))};var c=null},64728:function(K,g,e){e.d(g,{k:function(){return n}});const n=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"]},77461:function(K,g,e){var n=e(44534),M=e(98735),_=e(94029),f=e(48876),b=e(97923),k=e(81226),u=e(7241);const t=r=>{const{iconCls:s,componentCls:y,boxShadow:i,fontSizeLG:m,notificationMarginBottom:c,borderRadiusLG:x,colorSuccess:v,colorInfo:P,colorWarning:d,colorError:p,colorTextHeading:h,notificationBg:E,notificationPadding:w,notificationMarginEdge:A,fontSize:N,lineHeight:H,width:B,notificationIconSize:O,colorText:$}=r,I=`${y}-notice`;return{position:"relative",marginBottom:c,marginInlineStart:"auto",background:E,borderRadius:x,boxShadow:i,[I]:{padding:w,width:B,maxWidth:`calc(100vw - ${(0,n.zA)(r.calc(A).mul(2).equal())})`,overflow:"hidden",lineHeight:H,wordWrap:"break-word"},[`${I}-message`]:{marginBottom:r.marginXS,color:h,fontSize:m,lineHeight:r.lineHeightLG},[`${I}-description`]:{fontSize:N,color:$},[`${I}-closable ${I}-message`]:{paddingInlineEnd:r.paddingLG},[`${I}-with-icon ${I}-message`]:{marginBottom:r.marginXS,marginInlineStart:r.calc(r.marginSM).add(O).equal(),fontSize:m},[`${I}-with-icon ${I}-description`]:{marginInlineStart:r.calc(r.marginSM).add(O).equal(),fontSize:N},[`${I}-icon`]:{position:"absolute",fontSize:O,lineHeight:1,[`&-success${s}`]:{color:v},[`&-info${s}`]:{color:P},[`&-warning${s}`]:{color:d},[`&-error${s}`]:{color:p}},[`${I}-close`]:Object.assign({position:"absolute",top:r.notificationPaddingVertical,insetInlineEnd:r.notificationPaddingHorizontal,color:r.colorIcon,outline:"none",width:r.notificationCloseButtonSize,height:r.notificationCloseButtonSize,borderRadius:r.borderRadiusSM,transition:`background-color ${r.motionDurationMid}, color ${r.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:r.colorIconHover,backgroundColor:r.colorBgTextHover},"&:active":{backgroundColor:r.colorBgTextActive}},(0,_.K8)(r)),[`${I}-btn`]:{float:"right",marginTop:r.marginSM}}},o=r=>{const{componentCls:s,notificationMarginBottom:y,notificationMarginEdge:i,motionDurationMid:m,motionEaseInOut:c}=r,x=`${s}-notice`,v=new n.Mo("antNotificationFadeOut",{"0%":{maxHeight:r.animationMaxHeight,marginBottom:y},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[s]:Object.assign(Object.assign({},(0,_.dF)(r)),{position:"fixed",zIndex:r.zIndexPopup,marginRight:{value:i,_skip_check_:!0},[`${s}-hook-holder`]:{position:"relative"},[`${s}-fade-appear-prepare`]:{opacity:"0 !important"},[`${s}-fade-enter, ${s}-fade-appear`]:{animationDuration:r.motionDurationMid,animationTimingFunction:c,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${s}-fade-leave`]:{animationTimingFunction:c,animationFillMode:"both",animationDuration:m,animationPlayState:"paused"},[`${s}-fade-enter${s}-fade-enter-active, ${s}-fade-appear${s}-fade-appear-active`]:{animationPlayState:"running"},[`${s}-fade-leave${s}-fade-leave-active`]:{animationName:v,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${x}-btn`]:{float:"left"}}})},{[s]:{[`${x}-wrapper`]:Object.assign({},t(r))}}]},a=r=>({zIndexPopup:r.zIndexPopupBase+M.jH+50,width:384}),l=r=>{const s=r.paddingMD,y=r.paddingLG;return(0,f.h1)(r,{notificationBg:r.colorBgElevated,notificationPaddingVertical:s,notificationPaddingHorizontal:y,notificationIconSize:r.calc(r.fontSizeLG).mul(r.lineHeightLG).equal(),notificationCloseButtonSize:r.calc(r.controlHeightLG).mul(.55).equal(),notificationMarginBottom:r.margin,notificationPadding:`${(0,n.zA)(r.paddingMD)} ${(0,n.zA)(r.paddingContentHorizontalLG)}`,notificationMarginEdge:r.marginLG,animationMaxHeight:150,notificationStackLayer:3})};g.Ay=(0,b.OF)("Notification",r=>{const s=l(r);return[o(s),(0,k.A)(s),(0,u.A)(s)]},a)},81226:function(K,g,e){var n=e(44534);const M=_=>{const{componentCls:f,notificationMarginEdge:b,animationMaxHeight:k}=_,u=`${f}-notice`,t=new n.Mo("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),o=new n.Mo("antNotificationTopFadeIn",{"0%":{top:-k,opacity:0},"100%":{top:0,opacity:1}}),a=new n.Mo("antNotificationBottomFadeIn",{"0%":{bottom:_.calc(k).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),l=new n.Mo("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[f]:{[`&${f}-top, &${f}-bottom`]:{marginInline:0,[u]:{marginInline:"auto auto"}},[`&${f}-top`]:{[`${f}-fade-enter${f}-fade-enter-active, ${f}-fade-appear${f}-fade-appear-active`]:{animationName:o}},[`&${f}-bottom`]:{[`${f}-fade-enter${f}-fade-enter-active, ${f}-fade-appear${f}-fade-appear-active`]:{animationName:a}},[`&${f}-topRight, &${f}-bottomRight`]:{[`${f}-fade-enter${f}-fade-enter-active, ${f}-fade-appear${f}-fade-appear-active`]:{animationName:t}},[`&${f}-topLeft, &${f}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:b,_skip_check_:!0},[u]:{marginInlineEnd:"auto",marginInlineStart:0},[`${f}-fade-enter${f}-fade-enter-active, ${f}-fade-appear${f}-fade-appear-active`]:{animationName:l}}}}};g.A=M},7241:function(K,g,e){var n=e(64728);const M={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},_=(u,t)=>{const{componentCls:o}=u;return{[`${o}-${t}`]:{[`&${o}-stack > ${o}-notice-wrapper`]:{[t.startsWith("top")?"top":"bottom"]:0,[M[t]]:{value:0,_skip_check_:!0}}}}},f=u=>{const t={};for(let o=1;o<u.notificationStackLayer;o++)t[`&:nth-last-child(${o+1})`]={overflow:"hidden",[`& > ${u.componentCls}-notice`]:{opacity:0,transition:`opacity ${u.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${u.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},t)},b=u=>{const t={};for(let o=1;o<u.notificationStackLayer;o++)t[`&:nth-last-child(${o+1})`]={background:u.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},t)},k=u=>{const{componentCls:t}=u;return Object.assign({[`${t}-stack`]:{[`& > ${t}-notice-wrapper`]:Object.assign({transition:`all ${u.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},f(u))},[`${t}-stack:not(${t}-stack-expanded)`]:{[`& > ${t}-notice-wrapper`]:Object.assign({},b(u))},[`${t}-stack${t}-stack-expanded`]:{[`& > ${t}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${u.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:u.margin,width:"100%",insetInline:0,bottom:u.calc(u.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},n.k.map(o=>_(u,o)).reduce((o,a)=>Object.assign(Object.assign({},o),a),{}))};g.A=k},5235:function(K,g,e){e.d(g,{A:function(){return P}});var n=e(63696),M=e(4452),_=e.n(M),f=e(23715),b=e(78761),k=e(6451),u=e(8346),t=e(96553),o=e(15387),a=e(77461),l=e(94635),r=function(d,p){var h={};for(var E in d)Object.prototype.hasOwnProperty.call(d,E)&&p.indexOf(E)<0&&(h[E]=d[E]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var w=0,E=Object.getOwnPropertySymbols(d);w<E.length;w++)p.indexOf(E[w])<0&&Object.prototype.propertyIsEnumerable.call(d,E[w])&&(h[E[w]]=d[E[w]]);return h};const s=24,y=4.5,i="topRight",m=d=>{let{children:p,prefixCls:h}=d;const E=(0,u.A)(h),[w,A,N]=(0,a.Ay)(h,E);return w(n.createElement(f.ph,{classNames:{list:_()(A,N,E)}},p))},c=(d,p)=>{let{prefixCls:h,key:E}=p;return n.createElement(m,{prefixCls:h,key:E},d)},x=n.forwardRef((d,p)=>{const{top:h,bottom:E,prefixCls:w,getContainer:A,maxCount:N,rtl:H,onAllRemoved:B,stack:O,duration:$}=d,{getPrefixCls:I,getPopupContainer:D,notification:T,direction:S}=(0,n.useContext)(k.QO),[,W]=(0,t.Ay)(),j=w||I("notification"),G=Z=>(0,l.n)(Z,h??s,E??s),V=()=>_()({[`${j}-rtl`]:H??S==="rtl"}),re=()=>(0,l.V)(j),[X,z]=(0,f.hN)({prefixCls:j,style:G,className:V,motion:re,closable:!0,closeIcon:(0,o.aC)(j),duration:$??y,getContainer:()=>A?.()||D?.()||document.body,maxCount:N,onAllRemoved:B,renderNotifications:c,stack:O===!1?!1:{threshold:typeof O=="object"?O?.threshold:void 0,offset:8,gap:W.margin}});return n.useImperativeHandle(p,()=>Object.assign(Object.assign({},X),{prefixCls:j,notification:T})),z});function v(d){const p=n.useRef(null),h=(0,b.rJ)("Notification");return[n.useMemo(()=>{const w=B=>{var O;if(!p.current)return;const{open:$,prefixCls:I,notification:D}=p.current,T=`${I}-notice`,{message:S,description:W,icon:j,type:G,btn:V,className:re,style:X,role:z="alert",closeIcon:Z}=B,te=r(B,["message","description","icon","type","btn","className","style","role","closeIcon"]),Ae=(0,o.aC)(T,typeof Z<"u"?Z:D?.closeIcon);return $(Object.assign(Object.assign({placement:(O=d?.placement)!==null&&O!==void 0?O:i},te),{content:n.createElement(o.Mb,{prefixCls:T,icon:j,type:G,message:S,description:W,btn:V,role:z}),className:_()(G&&`${T}-${G}`,re,D?.className),style:Object.assign(Object.assign({},D?.style),X),closeIcon:Ae,closable:!!Ae}))},N={open:w,destroy:B=>{var O,$;B!==void 0?(O=p.current)===null||O===void 0||O.close(B):($=p.current)===null||$===void 0||$.destroy()}};return["success","info","warning","error"].forEach(B=>{N[B]=O=>w(Object.assign(Object.assign({},O),{type:B}))}),N},[]),n.createElement(x,Object.assign({key:"notification-holder"},d,{ref:p}))]}function P(d){return v(d)}},94635:function(K,g,e){e.d(g,{V:function(){return M},n:function(){return n}});function n(_,f,b){let k;switch(_){case"top":k={left:"50%",transform:"translateX(-50%)",right:"auto",top:f,bottom:"auto"};break;case"topLeft":k={left:0,top:f,bottom:"auto"};break;case"topRight":k={right:0,top:f,bottom:"auto"};break;case"bottom":k={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:b};break;case"bottomLeft":k={left:0,top:"auto",bottom:b};break;default:k={right:0,top:"auto",bottom:b};break}return k}function M(_){return{motionName:`${_}-fade`}}},16144:function(K,g,e){var n=e(96784).default;Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var M=n(e(39979)),_=g.default=M.default},19266:function(K,g,e){var n=e(96784).default;Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var M=n(e(88925)),_=g.default=M.default},39979:function(K,g,e){var n=e(96784).default;Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var M=n(e(64678)),_=n(e(73170));const f={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},M.default),timePickerLocale:Object.assign({},_.default)};var b=g.default=f},88925:function(K,g,e){var n=e(96784).default;Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var M=n(e(40940)),_=n(e(85544));const f={lang:Object.assign({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},M.default),timePickerLocale:Object.assign({},_.default)};f.lang.ok="\u786E\u5B9A";var b=g.default=f},39985:function(K,g,e){var n,M=e(96784).default;n={value:!0},g.A=void 0;var _=M(e(19140)),f=M(e(16144)),b=M(e(39979)),k=M(e(73170));const u="${label} is not a valid ${type}",t={locale:"en",Pagination:_.default,DatePicker:b.default,TimePicker:k.default,Calendar:f.default,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:u,method:u,array:u,object:u,number:u,date:u,boolean:u,integer:u,float:u,regexp:u,email:u,url:u,hex:u},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty"}};var o=g.A=t},52999:function(K,g,e){var n,M=e(96784).default;n={value:!0},g.A=void 0;var _=M(e(2278)),f=M(e(19266)),b=M(e(88925)),k=M(e(85544));const u="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",t={locale:"zh-cn",Pagination:_.default,DatePicker:b.default,TimePicker:k.default,Calendar:f.default,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:u,method:u,array:u,object:u,number:u,date:u,boolean:u,integer:u,float:u,regexp:u,email:u,url:u,hex:u},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0"}};var o=g.A=t},73170:function(K,g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;const e={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};var n=g.default=e},85544:function(K,g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;const e={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]};var n=g.default=e},4004:function(K,g,e){var n=e(27405),M=e(10911),_=e(9930),f=e(70697),b=e(63696),k=e(48674),u=e(90876),t=e(46725),o=function(l){var r=l.open,s=r===void 0?!1:r,y=l.prefixCls,i=y===void 0?"rc-drawer":y,m=l.placement,c=m===void 0?"right":m,x=l.autoFocus,v=x===void 0?!0:x,P=l.keyboard,d=P===void 0?!0:P,p=l.width,h=p===void 0?378:p,E=l.mask,w=E===void 0?!0:E,A=l.maskClosable,N=A===void 0?!0:A,H=l.getContainer,B=l.forceRender,O=l.afterOpenChange,$=l.destroyOnClose,I=l.onMouseEnter,D=l.onMouseOver,T=l.onMouseLeave,S=l.onClick,W=l.onKeyDown,j=l.onKeyUp,G=l.panelRef,V=b.useState(!1),re=(0,M.A)(V,2),X=re[0],z=re[1],Z=b.useState(!1),te=(0,M.A)(Z,2),Ae=te[0],we=te[1];(0,f.A)(function(){we(!0)},[]);var ae=Ae?s:!1,Pe=b.useRef(),ee=b.useRef();(0,f.A)(function(){ae&&(ee.current=document.activeElement)},[ae]);var he=function(le){var ge;if(z(le),O?.(le),!le&&ee.current&&!((ge=Pe.current)!==null&&ge!==void 0&&ge.contains(ee.current))){var me;(me=ee.current)===null||me===void 0||me.focus({preventScroll:!0})}},ve=b.useMemo(function(){return{panel:G}},[G]);if(!B&&!X&&!ae&&$)return null;var pe={onMouseEnter:I,onMouseOver:D,onMouseLeave:T,onClick:S,onKeyDown:W,onKeyUp:j},_e=(0,n.A)((0,n.A)({},l),{},{open:ae,prefixCls:i,placement:c,autoFocus:v,keyboard:d,width:h,mask:w,maskClosable:N,inline:H===!1,afterOpenChange:he,ref:Pe},pe);return b.createElement(k.v.Provider,{value:ve},b.createElement(_.A,{open:ae||B||X,autoDestroy:!1,getContainer:H,autoLock:w&&(ae||X)},b.createElement(u.A,_e)))};g.A=o},1708:function(K,g,e){var n=e(68102),M=e(81515),_=e(4452),f=e.n(_),b=e(63696),k=e(48674),u=e(83541),t=e(58483),o=["prefixCls","className","containerRef"],a=function(r){var s=r.prefixCls,y=r.className,i=r.containerRef,m=(0,M.A)(r,o),c=b.useContext(k.v),x=c.panel,v=(0,t.xK)(x,i);return b.createElement("div",(0,n.A)({className:f()("".concat(s,"-content"),y),role:"dialog",ref:v},(0,u.A)(r,{aria:!0}),{"aria-modal":"true"},m))};g.A=a},90876:function(K,g,e){var n=e(41705),M=e(68102),_=e(27405),f=e(10911),b=e(4452),k=e.n(b),u=e(9144),t=e(82772),o=e(83541),a=e(63696),l=e(48674),r=e(1708),s=e(46725),y={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function i(c,x){var v,P,d,p=c.prefixCls,h=c.open,E=c.placement,w=c.inline,A=c.push,N=c.forceRender,H=c.autoFocus,B=c.keyboard,O=c.classNames,$=c.rootClassName,I=c.rootStyle,D=c.zIndex,T=c.className,S=c.id,W=c.style,j=c.motion,G=c.width,V=c.height,re=c.children,X=c.mask,z=c.maskClosable,Z=c.maskMotion,te=c.maskClassName,Ae=c.maskStyle,we=c.afterOpenChange,ae=c.onClose,Pe=c.onMouseEnter,ee=c.onMouseOver,he=c.onMouseLeave,ve=c.onClick,pe=c.onKeyDown,_e=c.onKeyUp,fe=c.styles,le=a.useRef(),ge=a.useRef(),me=a.useRef();a.useImperativeHandle(x,function(){return le.current});var ue=function(se){var Oe=se.keyCode,Se=se.shiftKey;switch(Oe){case t.A.TAB:{if(Oe===t.A.TAB){if(!Se&&document.activeElement===me.current){var Me;(Me=ge.current)===null||Me===void 0||Me.focus({preventScroll:!0})}else if(Se&&document.activeElement===ge.current){var Te;(Te=me.current)===null||Te===void 0||Te.focus({preventScroll:!0})}}break}case t.A.ESC:{ae&&B&&(se.stopPropagation(),ae(se));break}}};a.useEffect(function(){if(h&&H){var Q;(Q=le.current)===null||Q===void 0||Q.focus({preventScroll:!0})}},[h]);var xe=a.useState(!1),Ne=(0,f.A)(xe,2),Re=Ne[0],be=Ne[1],oe=a.useContext(l.A),He;typeof A=="boolean"?He=A?{}:{distance:0}:He=A||{};var ye=(v=(P=(d=He)===null||d===void 0?void 0:d.distance)!==null&&P!==void 0?P:oe?.pushDistance)!==null&&v!==void 0?v:180,Le=a.useMemo(function(){return{pushDistance:ye,push:function(){be(!0)},pull:function(){be(!1)}}},[ye]);a.useEffect(function(){if(h){var Q;oe==null||(Q=oe.push)===null||Q===void 0||Q.call(oe)}else{var se;oe==null||(se=oe.pull)===null||se===void 0||se.call(oe)}},[h]),a.useEffect(function(){return function(){var Q;oe==null||(Q=oe.pull)===null||Q===void 0||Q.call(oe)}},[]);var ie=X&&a.createElement(u.Ay,(0,M.A)({key:"mask"},Z,{visible:h}),function(Q,se){var Oe=Q.className,Se=Q.style;return a.createElement("div",{className:k()("".concat(p,"-mask"),Oe,O?.mask,te),style:(0,_.A)((0,_.A)((0,_.A)({},Se),Ae),fe?.mask),onClick:z&&h?ae:void 0,ref:se})}),$e=typeof j=="function"?j(E):j,Ie={};if(Re&&ye)switch(E){case"top":Ie.transform="translateY(".concat(ye,"px)");break;case"bottom":Ie.transform="translateY(".concat(-ye,"px)");break;case"left":Ie.transform="translateX(".concat(ye,"px)");break;default:Ie.transform="translateX(".concat(-ye,"px)");break}E==="left"||E==="right"?Ie.width=(0,s.t)(G):Ie.height=(0,s.t)(V);var je={onMouseEnter:Pe,onMouseOver:ee,onMouseLeave:he,onClick:ve,onKeyDown:pe,onKeyUp:_e},Be=a.createElement(u.Ay,(0,M.A)({key:"panel"},$e,{visible:h,forceRender:N,onVisibleChanged:function(se){we?.(se)},removeOnLeave:!1,leavedClassName:"".concat(p,"-content-wrapper-hidden")}),function(Q,se){var Oe=Q.className,Se=Q.style;return a.createElement("div",(0,M.A)({className:k()("".concat(p,"-content-wrapper"),O?.wrapper,Oe),style:(0,_.A)((0,_.A)((0,_.A)({},Ie),Se),fe?.wrapper)},(0,o.A)(c,{data:!0})),a.createElement(r.A,(0,M.A)({id:S,containerRef:se,prefixCls:p,className:k()(T,O?.content),style:(0,_.A)((0,_.A)({},W),fe?.content)},(0,o.A)(c,{aria:!0}),je),re))}),Ke=(0,_.A)({},I);return D&&(Ke.zIndex=D),a.createElement(l.A.Provider,{value:Le},a.createElement("div",{className:k()(p,"".concat(p,"-").concat(E),$,(0,n.A)((0,n.A)({},"".concat(p,"-open"),h),"".concat(p,"-inline"),w)),style:Ke,tabIndex:-1,ref:le,onKeyDown:ue},ie,a.createElement("div",{tabIndex:0,ref:ge,style:y,"aria-hidden":"true","data-sentinel":"start"}),Be,a.createElement("div",{tabIndex:0,ref:me,style:y,"aria-hidden":"true","data-sentinel":"end"})))}var m=a.forwardRef(i);g.A=m},48674:function(K,g,e){e.d(g,{v:function(){return _}});var n=e(63696),M=n.createContext(null),_=n.createContext({});g.A=M},16693:function(K,g,e){var n=e(4004);g.A=n.A},46725:function(K,g,e){e.d(g,{t:function(){return M}});var n=e(54358);function M(f){return typeof f=="string"&&String(Number(f))===f?((0,n.Ay)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(f)):f}function _(f){warning(!("wrapperClassName"in f),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!f.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}},3459:function(K,g,e){var n=e(68102),M=e(41705),_=e(10911),f=e(4452),b=e.n(f),k=e(82772),u=e(63696),t=u.forwardRef(function(o,a){var l=o.prefixCls,r=o.style,s=o.className,y=o.duration,i=y===void 0?4.5:y,m=o.eventKey,c=o.content,x=o.closable,v=o.closeIcon,P=v===void 0?"x":v,d=o.props,p=o.onClick,h=o.onNoticeClose,E=o.times,w=o.hovering,A=u.useState(!1),N=(0,_.A)(A,2),H=N[0],B=N[1],O=w||H,$=function(){h(m)},I=function(S){(S.key==="Enter"||S.code==="Enter"||S.keyCode===k.A.ENTER)&&$()};u.useEffect(function(){if(!O&&i>0){var T=setTimeout(function(){$()},i*1e3);return function(){clearTimeout(T)}}},[i,O,E]);var D="".concat(l,"-notice");return u.createElement("div",(0,n.A)({},d,{ref:a,className:b()(D,s,(0,M.A)({},"".concat(D,"-closable"),x)),style:r,onMouseEnter:function(S){var W;B(!0),d==null||(W=d.onMouseEnter)===null||W===void 0||W.call(d,S)},onMouseLeave:function(S){var W;B(!1),d==null||(W=d.onMouseLeave)===null||W===void 0||W.call(d,S)},onClick:p}),u.createElement("div",{className:"".concat(D,"-content")},c),x&&u.createElement("a",{tabIndex:0,className:"".concat(D,"-close"),onKeyDown:I,onClick:function(S){S.preventDefault(),S.stopPropagation(),$()}},P))});g.A=t},62635:function(K,g,e){var n=e(68102),M=e(82480),_=e(27405),f=e(81515),b=e(41705),k=e(10911),u=e(63696),t=e(4452),o=e.n(t),a=e(9144),l=e(3459),r=e(96433),s=e(15631),y=["className","style","classNames","styles"],i=function(c){var x,v=c.configList,P=c.placement,d=c.prefixCls,p=c.className,h=c.style,E=c.motion,w=c.onAllNoticeRemoved,A=c.onNoticeClose,N=c.stack,H=(0,u.useContext)(r.V),B=H.classNames,O=(0,u.useRef)({}),$=(0,u.useState)(null),I=(0,k.A)($,2),D=I[0],T=I[1],S=(0,u.useState)([]),W=(0,k.A)(S,2),j=W[0],G=W[1],V=v.map(function(ee){return{config:ee,key:String(ee.key)}}),re=(0,s.A)(N),X=(0,k.A)(re,2),z=X[0],Z=X[1],te=Z.offset,Ae=Z.threshold,we=Z.gap,ae=z&&(j.length>0||V.length<=Ae),Pe=typeof E=="function"?E(P):E;return(0,u.useEffect)(function(){z&&j.length>1&&G(function(ee){return ee.filter(function(he){return V.some(function(ve){var pe=ve.key;return he===pe})})})},[j,V,z]),(0,u.useEffect)(function(){var ee;if(z&&O.current[(ee=V[V.length-1])===null||ee===void 0?void 0:ee.key]){var he;T(O.current[(he=V[V.length-1])===null||he===void 0?void 0:he.key])}},[V,z]),u.createElement(a.aF,(0,n.A)({key:P,className:o()(d,"".concat(d,"-").concat(P),B?.list,p,(x={},(0,b.A)(x,"".concat(d,"-stack"),!!z),(0,b.A)(x,"".concat(d,"-stack-expanded"),ae),x)),style:h,keys:V,motionAppear:!0},Pe,{onAllRemoved:function(){w(P)}}),function(ee,he){var ve=ee.config,pe=ee.className,_e=ee.style,fe=ee.index,le=ve,ge=le.key,me=le.times,ue=String(ge),xe=ve,Ne=xe.className,Re=xe.style,be=xe.classNames,oe=xe.styles,He=(0,f.A)(xe,y),ye=V.findIndex(function(Me){return Me.key===ue}),Le={};if(z){var ie=V.length-1-(ye>-1?ye:fe-1),$e=P==="top"||P==="bottom"?"-50%":"0";if(ie>0){var Ie,je,Be;Le.height=ae?(Ie=O.current[ue])===null||Ie===void 0?void 0:Ie.offsetHeight:D?.offsetHeight;for(var Ke=0,Q=0;Q<ie;Q++){var se;Ke+=((se=O.current[V[V.length-1-Q].key])===null||se===void 0?void 0:se.offsetHeight)+we}var Oe=(ae?Ke:ie*te)*(P.startsWith("top")?1:-1),Se=!ae&&D!==null&&D!==void 0&&D.offsetWidth&&(je=O.current[ue])!==null&&je!==void 0&&je.offsetWidth?(D?.offsetWidth-te*2*(ie<3?ie:3))/((Be=O.current[ue])===null||Be===void 0?void 0:Be.offsetWidth):1;Le.transform="translate3d(".concat($e,", ").concat(Oe,"px, 0) scaleX(").concat(Se,")")}else Le.transform="translate3d(".concat($e,", 0, 0)")}return u.createElement("div",{ref:he,className:o()("".concat(d,"-notice-wrapper"),pe,be?.wrapper),style:(0,_.A)((0,_.A)((0,_.A)({},_e),Le),oe?.wrapper),onMouseEnter:function(){return G(function(Te){return Te.includes(ue)?Te:[].concat((0,M.A)(Te),[ue])})},onMouseLeave:function(){return G(function(Te){return Te.filter(function(nt){return nt!==ue})})}},u.createElement(l.A,(0,n.A)({},He,{ref:function(Te){ye>-1?O.current[ue]=Te:delete O.current[ue]},prefixCls:d,classNames:be,styles:oe,className:o()(Ne,B?.notice),style:Re,times:me,key:ge,eventKey:ge,onNoticeClose:A,hovering:z&&j.length>0})))})};g.A=i},96433:function(K,g,e){e.d(g,{V:function(){return M}});var n=e(63696),M=n.createContext({}),_=function(b){var k=b.children,u=b.classNames;return n.createElement(M.Provider,{value:{classNames:u}},k)};g.A=_},55355:function(K,g,e){var n=e(27405),M=e(82480),_=e(10911),f=e(63696),b=e(78325),k=e(62635),u=f.forwardRef(function(t,o){var a=t.prefixCls,l=a===void 0?"rc-notification":a,r=t.container,s=t.motion,y=t.maxCount,i=t.className,m=t.style,c=t.onAllRemoved,x=t.stack,v=t.renderNotifications,P=f.useState([]),d=(0,_.A)(P,2),p=d[0],h=d[1],E=function(D){var T,S=p.find(function(W){return W.key===D});S==null||(T=S.onClose)===null||T===void 0||T.call(S),h(function(W){return W.filter(function(j){return j.key!==D})})};f.useImperativeHandle(o,function(){return{open:function(D){h(function(T){var S=(0,M.A)(T),W=S.findIndex(function(V){return V.key===D.key}),j=(0,n.A)({},D);if(W>=0){var G;j.times=(((G=T[W])===null||G===void 0?void 0:G.times)||0)+1,S[W]=j}else j.times=0,S.push(j);return y>0&&S.length>y&&(S=S.slice(-y)),S})},close:function(D){E(D)},destroy:function(){h([])}}});var w=f.useState({}),A=(0,_.A)(w,2),N=A[0],H=A[1];f.useEffect(function(){var I={};p.forEach(function(D){var T=D.placement,S=T===void 0?"topRight":T;S&&(I[S]=I[S]||[],I[S].push(D))}),Object.keys(N).forEach(function(D){I[D]=I[D]||[]}),H(I)},[p]);var B=function(D){H(function(T){var S=(0,n.A)({},T),W=S[D]||[];return W.length||delete S[D],S})},O=f.useRef(!1);if(f.useEffect(function(){Object.keys(N).length>0?O.current=!0:O.current&&(c?.(),O.current=!1)},[N]),!r)return null;var $=Object.keys(N);return(0,b.createPortal)(f.createElement(f.Fragment,null,$.map(function(I){var D=N[I],T=f.createElement(k.A,{key:I,configList:D,placement:I,prefixCls:l,className:i?.(I),style:m?.(I),motion:s,onNoticeClose:E,onAllNoticeRemoved:B,stack:x});return v?v(T,{prefixCls:l,key:I}):T})),r)});g.A=u},97324:function(K,g,e){e.d(g,{A:function(){return a}});var n=e(82480),M=e(10911),_=e(81515),f=e(63696),b=e(55355),k=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],u=function(){return document.body},t=0;function o(){for(var l={},r=arguments.length,s=new Array(r),y=0;y<r;y++)s[y]=arguments[y];return s.forEach(function(i){i&&Object.keys(i).forEach(function(m){var c=i[m];c!==void 0&&(l[m]=c)})}),l}function a(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=l.getContainer,s=r===void 0?u:r,y=l.motion,i=l.prefixCls,m=l.maxCount,c=l.className,x=l.style,v=l.onAllRemoved,P=l.stack,d=l.renderNotifications,p=(0,_.A)(l,k),h=f.useState(),E=(0,M.A)(h,2),w=E[0],A=E[1],N=f.useRef(),H=f.createElement(b.A,{container:w,ref:N,prefixCls:i,motion:y,maxCount:m,className:c,style:x,onAllRemoved:v,stack:P,renderNotifications:d}),B=f.useState([]),O=(0,M.A)(B,2),$=O[0],I=O[1],D=f.useMemo(function(){return{open:function(S){var W=o(p,S);(W.key===null||W.key===void 0)&&(W.key="rc-notification-".concat(t),t+=1),I(function(j){return[].concat((0,n.A)(j),[{type:"open",config:W}])})},close:function(S){I(function(W){return[].concat((0,n.A)(W),[{type:"close",key:S}])})},destroy:function(){I(function(S){return[].concat((0,n.A)(S),[{type:"destroy"}])})}}},[]);return f.useEffect(function(){A(s())}),f.useEffect(function(){N.current&&$.length&&($.forEach(function(T){switch(T.type){case"open":N.current.open(T.config);break;case"close":N.current.close(T.key);break;case"destroy":N.current.destroy();break}}),I(function(T){return T.filter(function(S){return!$.includes(S)})}))},[$]),[D,H]}},15631:function(K,g,e){var n=e(40694),M=8,_=3,f=16,b=function(u){var t={offset:M,threshold:_,gap:f};if(u&&(0,n.A)(u)==="object"){var o,a,l;t.offset=(o=u.offset)!==null&&o!==void 0?o:M,t.threshold=(a=u.threshold)!==null&&a!==void 0?a:_,t.gap=(l=u.gap)!==null&&l!==void 0?l:f}return[!!u,t]};g.A=b},23715:function(K,g,e){e.d(g,{hN:function(){return n.A},ph:function(){return _.A}});var n=e(97324),M=e(3459),_=e(96433)},19140:function(K,g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var e={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},n=g.default=e},2278:function(K,g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var e={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"},n=g.default=e},64678:function(K,g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var e={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},n=g.default=e},40940:function(K,g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var e={locale:"zh_CN",yearFormat:"YYYY\u5E74",cellDateFormat:"D",cellMeridiemFormat:"A",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA"},n=g.default=e},96784:function(K){function g(e){return e&&e.__esModule?e:{default:e}}K.exports=g,K.exports.__esModule=!0,K.exports.default=K.exports},81953:function(K,g,e){var n;e.d(g,{A:function(){return u}});var M=e(63696),_={942:(t,o,a)=>{a.d(o,{Z:()=>m});var l=a(601),r=a.n(l),s=a(609),y=a.n(s),i=y()(r());i.push([t.id,`.node-right-icon-close {
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
`,""]),i.locals={};const m=i},84:(t,o,a)=>{a.d(o,{Z:()=>m});var l=a(601),r=a.n(l),s=a(609),y=a.n(s),i=y()(r());i.push([t.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]),i.locals={};const m=i},91:(t,o,a)=>{a.d(o,{Z:()=>m});var l=a(601),r=a.n(l),s=a(609),y=a.n(s),i=y()(r());i.push([t.id,`.frame {
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
`,""]),i.locals={};const m=i},505:(t,o,a)=>{a.d(o,{Z:()=>m});var l=a(601),r=a.n(l),s=a(609),y=a.n(s),i=y()(r());i.push([t.id,`.clear::after {
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
`,""]),i.locals={};const m=i},675:(t,o,a)=>{a.d(o,{Z:()=>m});var l=a(601),r=a.n(l),s=a(609),y=a.n(s),i=y()(r());i.push([t.id,`@keyframes ani-fade-in {
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
`,""]),i.locals={};const m=i},609:t=>{t.exports=function(o){var a=[];return a.toString=function(){return this.map(function(l){var r="",s=typeof l[5]<"u";return l[4]&&(r+="@supports (".concat(l[4],") {")),l[2]&&(r+="@media ".concat(l[2]," {")),s&&(r+="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {")),r+=o(l),s&&(r+="}"),l[2]&&(r+="}"),l[4]&&(r+="}"),r}).join("")},a.i=function(l,r,s,y,i){typeof l=="string"&&(l=[[null,l,void 0]]);var m={};if(s)for(var c=0;c<this.length;c++){var x=this[c][0];x!=null&&(m[x]=!0)}for(var v=0;v<l.length;v++){var P=[].concat(l[v]);s&&m[P[0]]||(typeof i<"u"&&(typeof P[5]>"u"||(P[1]="@layer".concat(P[5].length>0?" ".concat(P[5]):""," {").concat(P[1],"}")),P[5]=i),r&&(P[2]&&(P[1]="@media ".concat(P[2]," {").concat(P[1],"}")),P[2]=r),y&&(P[4]?(P[1]="@supports (".concat(P[4],") {").concat(P[1],"}"),P[4]=y):P[4]="".concat(y)),a.push(P))}},a}},601:t=>{t.exports=function(o){return o[1]}},837:(t,o,a)=>{var l=a(810),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,i=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,m={key:!0,ref:!0,__self:!0,__source:!0};function c(x,v,P){var d,p={},h=null,E=null;P!==void 0&&(h=""+P),v.key!==void 0&&(h=""+v.key),v.ref!==void 0&&(E=v.ref);for(d in v)y.call(v,d)&&!m.hasOwnProperty(d)&&(p[d]=v[d]);if(x&&x.defaultProps)for(d in v=x.defaultProps,v)p[d]===void 0&&(p[d]=v[d]);return{$$typeof:r,type:x,key:h,ref:E,props:p,_owner:i.current}}o.Fragment=s,o.jsx=c,o.jsxs=c},322:(t,o,a)=>{t.exports=a(837)},62:t=>{var o=[];function a(s){for(var y=-1,i=0;i<o.length;i++)if(o[i].identifier===s){y=i;break}return y}function l(s,y){for(var i={},m=[],c=0;c<s.length;c++){var x=s[c],v=y.base?x[0]+y.base:x[0],P=i[v]||0,d="".concat(v," ").concat(P);i[v]=P+1;var p=a(d),h={css:x[1],media:x[2],sourceMap:x[3],supports:x[4],layer:x[5]};if(p!==-1)o[p].references++,o[p].updater(h);else{var E=r(h,y);y.byIndex=c,o.splice(c,0,{identifier:d,updater:E,references:1})}m.push(d)}return m}function r(s,y){var i=y.domAPI(y);i.update(s);var m=function(c){if(c){if(c.css===s.css&&c.media===s.media&&c.sourceMap===s.sourceMap&&c.supports===s.supports&&c.layer===s.layer)return;i.update(s=c)}else i.remove()};return m}t.exports=function(s,y){y=y||{},s=s||[];var i=l(s,y);return function(m){m=m||[];for(var c=0;c<i.length;c++){var x=i[c],v=a(x);o[v].references--}for(var P=l(m,y),d=0;d<i.length;d++){var p=i[d],h=a(p);o[h].references===0&&(o[h].updater(),o.splice(h,1))}i=P}}},793:t=>{var o={};function a(r){if(typeof o[r]>"u"){var s=document.querySelector(r);if(window.HTMLIFrameElement&&s instanceof window.HTMLIFrameElement)try{s=s.contentDocument.head}catch{s=null}o[r]=s}return o[r]}function l(r,s){var y=a(r);if(!y)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");y.appendChild(s)}t.exports=l},173:t=>{function o(a){var l=document.createElement("style");return a.setAttributes(l,a.attributes),a.insert(l,a.options),l}t.exports=o},892:(t,o,a)=>{function l(r){var s=a.nc;s&&r.setAttribute("nonce",s)}t.exports=l},36:t=>{function o(r,s,y){var i="";y.supports&&(i+="@supports (".concat(y.supports,") {")),y.media&&(i+="@media ".concat(y.media," {"));var m=typeof y.layer<"u";m&&(i+="@layer".concat(y.layer.length>0?" ".concat(y.layer):""," {")),i+=y.css,m&&(i+="}"),y.media&&(i+="}"),y.supports&&(i+="}");var c=y.sourceMap;c&&typeof btoa<"u"&&(i+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),s.styleTagTransform(i,r,s.options)}function a(r){if(r.parentNode===null)return!1;r.parentNode.removeChild(r)}function l(r){if(typeof document>"u")return{update:function(){},remove:function(){}};var s=r.insertStyleElement(r);return{update:function(y){o(s,r,y)},remove:function(){a(s)}}}t.exports=l},464:t=>{function o(a,l){if(l.styleSheet)l.styleSheet.cssText=a;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(a))}}t.exports=o},810:t=>{var o=l=>{var r={};return b.d(r,l),r},a=l=>()=>l;t.exports=n||(n=e.t(M,2))}},f={};function b(t){var o=f[t];if(o!==void 0)return o.exports;var a=f[t]={id:t,exports:{}};return _[t](a,a.exports,b),a.exports}b.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return b.d(o,{a:o}),o},b.d=(t,o)=>{for(var a in o)b.o(o,a)&&!b.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})},b.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),b.nc=void 0;var k={};(()=>{b.d(k,{Z:()=>it});var t=b(322),o=b(810);const a=()=>![typeof window,typeof document].includes("undefined"),l=C=>Object.prototype.toString.call(C).slice(8,-1).toLowerCase(),r=C=>l(C).indexOf("element")>-1,s=(C=null)=>a()?r(C)?{width:C.clientWidth,height:C.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},y=(C={})=>{const R=(0,o.useRef)(0),[U,L]=(0,o.useState)(C),F=(0,o.useCallback)(Y=>{cancelAnimationFrame(R.current),R.current=requestAnimationFrame(()=>L(Y))},[]);return(0,o.useEffect)(()=>()=>cancelAnimationFrame(R.current),[]),[U,F]},i=()=>{const[C,R]=y(s());return(0,o.useEffect)(()=>{const U=()=>R(s());return window.addEventListener("resize",U,!1),()=>window.removeEventListener("resize",U,!1)},[]),C},m=C=>l(C)==="array",c=(C,R,U="id",L="children")=>{if(!m(C))return null;const F=Y=>{for(let J=0,ce=Y.length;J<ce;J++){const ne=Y[J];if(ne[U]===R)return[ne];if(m(ne[L])){const de=F(ne[L]);if(de)return[ne].concat(de)}}};return F(C)},x=C=>++C,v=()=>{const[,C]=(0,o.useState)(0);return(0,o.useCallback)(()=>C(x),[])},P=C=>m(C)&&!!C.length,d=({to:C,preventDefault:R,stopPropagation:U,...L})=>R?(0,t.jsx)("span",{...L}):(0,t.jsx)("a",{href:C,...L}),p=({item:C,...R})=>(0,t.jsx)("ul",{...R}),h=(C,...R)=>{const U={};return Object.keys(C).filter(Boolean).map(L=>{U[L]=F=>C[L](F,...R)}),U},E=({data:C=[],events:R={},List:U=p,Link:L=d,leftIcon:F,rightIcon:Y,isHorizontal:J,isCollapsed:ce,level:ne=0,parentOpen:de=!0})=>{const Ee=ce&&!ne,ke=!J&&!ce&&!de;return C.map(q=>{const{name:De,path:Ce,icon:Ze,rightIcon:Ue,active:We,open:Ge,children:et,linkProps:Qe}=q,ot=P(et),Fe=q.id||Ce||De,tt=Ee?q.title??De:void 0,Xe=ke?"hidden":"",Ve=Ze??F,ze=Ue??Y,Je=Ve?(0,t.jsx)("div",{className:"node-left-icon",children:Ve===!0?(0,t.jsx)("i",{className:"default-left-icon"}):Ve}):null,rt=De?(0,t.jsx)("div",{className:"node-text",children:(0,t.jsx)("span",{children:De})}):null;if(ot){const lt=h(R,q,ne),st=[Xe,Ge?"open":""].filter(Boolean).join(" ");return(0,t.jsxs)("li",{className:st,"has-children":"true",...lt,children:[(0,t.jsxs)(L,{title:tt,className:`link${We?" active":""}`,to:Ce,preventDefault:!0,stopPropagation:!1,...Qe,children:[Je,rt,ze?(0,t.jsx)("div",{className:"node-right-icon",children:ze===!0?(0,t.jsx)("i",{className:"default-right-icon"}):ze}):null]}),(0,t.jsx)(U,{item:q,children:E({data:et,events:R,List:U,Link:L,leftIcon:F,rightIcon:Y,isHorizontal:J,isCollapsed:ce,level:ne+1,parentOpen:!!Ge})})]},Fe)}return(0,t.jsx)("li",{className:Xe,children:(0,t.jsxs)(L,{title:tt,className:`link${We?" active":""}`,to:Ce,...Qe,children:[Je,rt]})},Fe)})},w=E,A=C=>{const{children:R,open:U}=C;let L=0;if(U&&R?.length){L=R.length;let F=0;return R.map(Y=>F+=A(Y)),L+F}return L},N=({item:C,style:R,...U})=>(0,t.jsx)("ul",{style:{...R,"--count":A(C)},...U});var H=b(62),B=b.n(H),O=b(36),$=b.n(O),I=b(793),D=b.n(I),T=b(892),S=b.n(T),W=b(173),j=b.n(W),G=b(464),V=b.n(G),re=b(942),X={};X.styleTagTransform=V(),X.setAttributes=S(),X.insert=D().bind(null,"head"),X.domAPI=$(),X.insertStyleElement=j();var z=B()(re.Z,X);const Z=re.Z&&re.Z.locals?re.Z.locals:void 0,te=C=>(0,t.jsx)("ul",{...C}),Ae=(C,R)=>C?N:({item:U,...L})=>(0,t.jsx)(te,{className:R==="right"?"left":"",...L}),we=C=>{const{data:R=[],collapsed:U=!1,type:L="vertical",Link:F,width:Y,bgColor:J,itemHeight:ce,collapsedWidth:ne,itemPadding:de,style:Ee,className:ke,...q}=C,De=(0,o.useRef)(),Ce=(0,o.useRef)();(0,o.useEffect)(()=>()=>clearTimeout(De.current),[]);const Ze=v(),Ue=L==="horizontal",We=!Ue&&U,Ge={onClick:(Xe,Ve)=>{if(Xe.stopPropagation(),!Ue&&!We){const ze=c(R,Ve.path,"path"),Je=ze[ze.length-1];Je.open=!Je.open,Ze()}},onMouseEnter:(Xe,Ve,ze)=>{We&&!ze&&(clearTimeout(De.current),Ce.current.style.width="var(--maxWidth)")},onMouseLeave:(Xe,Ve,ze)=>{We&&!ze&&(De.current=setTimeout(()=>Ce.current.style.width="",200))}},et=(Ue?["huxy-horizontal-tree",ke]:["huxy-tree",ke,We?"collapsed":""]).filter(Boolean).join(" "),{float:Qe,...ot}=q?.style??{},Fe={"--bgColor":J,"--itemHeight":ce,"--nodeListWidth":Y,...ot};Ue?(Fe["--itemPadding"]=de,Fe["--nodeFloat"]=Qe):(Fe["--width"]=Y,Fe["--collapsedWidth"]=ne);const tt=Ae(!Ue&&!We,Qe);return(0,t.jsx)("div",{ref:Ce,className:et,style:Fe,...q,children:(0,t.jsx)("div",{className:"huxy-tree-track",children:(0,t.jsx)("ul",{className:"huxy-tree-root",children:w({data:R,events:Ge,List:tt,Link:F,leftIcon:!0,rightIcon:!0,isHorizontal:Ue,isCollapsed:We})})})})},ae=(C,R)=>Object.prototype.hasOwnProperty.call(C??{},R),Pe=C=>ae(C,"current"),ee=(C,R,U="click")=>{(0,o.useEffect)(()=>{const L=Y=>{const J=Pe(C)?C.current:C;J?.contains&&!J.contains(Y.target)&&R(Y)},F=typeof U=="string"?[U]:U;return F.map(Y=>{document.addEventListener(Y,L,!1)}),()=>{F.map(Y=>{document.removeEventListener(Y,L,!1)})}},[C,R,U])},he=C=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(C),ve=C=>new Promise((R,U)=>{const L=new FileReader;L.readAsDataURL(C),L.addEventListener("load",()=>R(L.result)),L.addEventListener("error",F=>U(F))}),pe=async C=>{if(!he(C))return C;const R=await(await fetch(decodeURIComponent(C))).blob();return await ve(R)},_e=C=>{const[R,U]=(0,o.useState)(C);return(0,o.useEffect)(()=>{(async L=>{const F=await pe(L);U(F)})(C)},[C]),R},fe=({src:C,...R})=>{const U=_e(C);return(0,t.jsx)("img",{...R,src:U})},le=({Ricon:C,open:R})=>C===!0?(0,t.jsx)("i",{className:`huxy-header-angle-${R?"top":"bt"}`}):(0,t.jsx)(C,{status:R}),ge=({img:C,name:R,icon:U,Ricon:L,open:F})=>C?(0,t.jsxs)("div",{className:"avatar",children:[(0,t.jsx)("div",{className:"img",children:(0,t.jsx)(fe,{src:C,width:"1",height:"1",crossOrigin:"anonymous",alt:"avatar"})}),R?(0,t.jsx)("span",{className:"txt",children:R}):null,L?(0,t.jsx)("span",{className:"node-icon",children:(0,t.jsx)(le,{Ricon:L,open:F})}):null]}):(0,t.jsxs)(t.Fragment,{children:[U?(0,t.jsx)("span",{className:"node-icon",children:U}):null,R?(0,t.jsx)("span",{className:"txt",children:R}):null,L?(0,t.jsx)("span",{className:"node-icon",children:(0,t.jsx)(le,{Ricon:L,open:F})}):null]}),me=({item:C,open:R})=>{const{Custom:U,img:L,name:F,icon:Y,Ricon:J,active:ce}=C;return typeof U=="function"?(0,t.jsx)(U,{item:C,className:"link"}):(0,t.jsx)("span",{className:`link${ce?" active":""}`,title:C.title||F,children:(0,t.jsx)(ge,{img:L,name:F,icon:Y,Ricon:J,open:R})})},ue=({item:C,click:R})=>{const U=(0,o.useRef)(),[L,F]=(0,o.useState)(!1);ee(U,q=>L&&F(!1));const{arrowDir:Y,ChildRender:J,children:ce,smShow:ne}=C,de=ce?.length,Ee=(q,De,Ce=null)=>{Ce===!1&&F(Ze=>!Ze),Ce&&(q.stopPropagation(),F(!1)),R(De,Ce)},ke=ne?"sm-show":"";return de||J?(0,t.jsxs)("li",{ref:U,className:`${ke} ${L?"open":""}`,onClick:q=>Ee(q,C,!1),children:[(0,t.jsx)(me,{item:C,open:L}),(0,t.jsx)("ul",{className:`huxy-header-arrow-${Y||"rt"}`,children:de?ce.map((q,De)=>(0,t.jsx)("li",{className:q.divider?"divider":"",children:(0,t.jsxs)("span",{onClick:Ce=>Ee(Ce,q,!0),className:`link${q.active?" active":""}`,children:[q.icon?(0,t.jsx)("span",{className:"node-icon",children:q.icon}):null,(0,t.jsx)("span",{className:"drop-label",children:q.name})]})},`subItem-${De}-${q.key||q.name}`)):(0,t.jsx)("li",{children:(0,t.jsx)(J,{item:C,close:()=>F(!1)})})})]}):(0,t.jsx)("li",{onClick:q=>Ee(q,C),className:ke,children:(0,t.jsx)(me,{item:C,open:L})})},xe=({list:C,click:R})=>(0,t.jsx)("ul",{children:C.map((U,L)=>(0,t.jsx)(ue,{click:R,item:U},`navItem-${L}-${U.key||U.name}`))}),Ne=C=>{const{leftList:R,rightList:U,handleNavClick:L,logo:F,title:Y,Link:J}=C;return(0,t.jsxs)("div",{className:"header",children:[(0,t.jsxs)(J,{className:"banner",to:"/",children:[F?(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)("img",{width:"1",height:"1",src:F,alt:"logo"})}):null,(0,t.jsx)("div",{className:"title",children:Y??"Dashboard"})]}),(0,t.jsx)("div",{className:"nav",children:(0,t.jsxs)("div",{className:"nav-wrap",children:[(0,t.jsx)("div",{className:"nav-left",children:(0,t.jsx)(xe,{list:R,click:L})}),(0,t.jsx)("div",{className:"nav-right",children:(0,t.jsx)(xe,{list:U,click:L})})]})})]})};var Re=b(505),be={};be.styleTagTransform=V(),be.setAttributes=S(),be.insert=D().bind(null,"head"),be.domAPI=$(),be.insertStyleElement=j();var oe=B()(Re.Z,be);const He=Re.Z&&Re.Z.locals?Re.Z.locals:void 0,ye=({language:C,...R})=>(0,o.useMemo)(()=>(0,t.jsx)(Ne,{...R}),[C]),Le=C=>{const{navMenu:R,headerStyle:U,navMenuStyle:L,Link:F,leftList:Y,rightList:J,handleNavClick:ce,logo:ne,title:de,language:Ee}=C;return(0,t.jsxs)("header",{className:"frame-header",style:U,children:[Y?.length||J?.length?(0,t.jsx)(ye,{Link:F,leftList:Y,rightList:J,handleNavClick:(ke,q)=>ce(C,ke,q),logo:ne,title:de,language:Ee}):null,R?.length?(0,t.jsx)(we,{data:R,type:"horizontal",Link:F,style:L}):null]})};var ie=b(84),$e={};$e.styleTagTransform=V(),$e.setAttributes=S(),$e.insert=D().bind(null,"head"),$e.domAPI=$(),$e.insertStyleElement=j();var Ie=B()(ie.Z,$e);const je=ie.Z&&ie.Z.locals?ie.Z.locals:void 0,Be=({Footer:C})=>(0,t.jsx)("div",{className:"footer",children:C?(0,t.jsx)(C,{}):"copyright \xA9 2020-2022"}),Ke=C=>{const{useStore:R,menu:U,MenuTop:L,MenuBottom:F,Link:Y,inputPath:J,asideStyle:ce}=C,[ne,de]=R("huxy-collapse"),{width:Ee}=i(),ke=(0,o.useRef)();return ee(ke,q=>{Ee<=1024&&ne&&de(!1)}),(0,o.useEffect)(()=>{Ee<=1024&&ne&&de(!1)},[J]),(0,t.jsx)("aside",{className:"frame-aside",style:ce,children:(0,t.jsxs)("div",{ref:ke,style:{height:"100%"},children:[L&&(0,t.jsx)(L,{...C}),(0,t.jsx)(we,{data:U,collapsed:ne&&Ee>1024,Link:Y}),F&&(0,t.jsx)(F,{collapsed:ne,isSmall:Ee<=1024,setCollapsed:de})]})})},Q=380,se=({inputPath:C,menuAnimate:R="ani-in"})=>{const U=(0,o.useRef)(C.split("?")[0]),L=(0,o.useRef)(),[F,Y]=(0,o.useState)("");return(0,o.useEffect)(()=>{const J=C.split("?")[0];return J!==U.current&&(U.current=J,Y(` ${R}`),L.current=setTimeout(()=>{Y("")},Q)),()=>{clearTimeout(L.current),Y("")}},[C]),F},Oe=C=>{const{inputPath:R,contentStyle:U,menuAnimate:L,children:F}=C,Y=se({inputPath:R,menuAnimate:L});return(0,t.jsx)("div",{className:`page-content${Y}`,style:U,children:F})};var Se=b(675),Me={};Me.styleTagTransform=V(),Me.setAttributes=S(),Me.insert=D().bind(null,"head"),Me.domAPI=$(),Me.insertStyleElement=j();var Te=B()(Se.Z,Me);const nt=Se.Z&&Se.Z.locals?Se.Z.locals:void 0,at=C=>{const{menu:R,current:U,MainTop:L,children:F,inputPath:Y,contentStyle:J,menuAnimate:ce}=C,ne=R?.length,de=ce?ce===!0?"ani-in":ce:"";return(0,t.jsxs)("div",{className:`frame-container${ne?"":" no-sidebar"}`,children:[ne?(0,t.jsx)(Ke,{...C}):null,(0,t.jsx)("div",{className:"frame-view",children:(0,t.jsxs)("div",{className:"page-container",children:[L&&(0,t.jsx)(L,{current:U}),de?(0,t.jsx)(Oe,{inputPath:Y,contentStyle:J,menuAnimate:de,children:F}):(0,t.jsx)("div",{className:"page-content",style:J,children:F})]})}),(0,t.jsx)("footer",{className:"frame-footer",children:(0,t.jsx)(Be,{...C})})]})};var qe=b(91),Ye={};Ye.styleTagTransform=V(),Ye.setAttributes=S(),Ye.insert=D().bind(null,"head"),Ye.domAPI=$(),Ye.insertStyleElement=j();var ct=B()(qe.Z,Ye);const dt=qe.Z&&qe.Z.locals?qe.Z.locals:void 0,it=C=>{const{useStore:R,vertical:U,horizontal:L,menu:F,leftList:Y,rightList:J}=C,{width:ce}=i(),[ne]=R("huxy-collapse"),de=ce<=1024,Ee=de?F:U,ke=de?[]:L,q=Ee?.length,De=ke?.length,Ce=De&&q,Ze=Ce?"compose":De?"horizontal":ne?"collapsed":"",Ue=Ce&&ne?"composeCollapsed":"",We=Y?.length||J?.length?"":"no-header",Ge=["frame",Ze,Ue,We].filter(Boolean).join(" ");return(0,t.jsxs)("div",{className:Ge,children:[(0,t.jsx)(Le,{...C,navMenu:ke}),(0,t.jsx)("main",{className:"frame-main",children:(0,t.jsx)(at,{...C,menu:Ee})})]})}})();var u=k.Z}}]);
