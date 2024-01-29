(self.webpackChunk=self.webpackChunk||[]).push([[328],{29464:function(Z,g,e){e.d(g,{J:function(){return M}});var n=e(27378);const M=n.createContext({}),b=n.createContext({message:{},notification:{},modal:{}});g.Z=b},99500:function(Z,g,e){var n=e(27378),M=e(60042),b=e.n(M),h=e(26775),E=e(98363),O=e(30156),s=e(38195),t=e(29464),o=e(66274);const i=()=>n.useContext(t.Z),l=r=>{const{prefixCls:c,children:y,className:a,rootClassName:f,message:d,notification:x,style:v,component:P="div"}=r,{getPrefixCls:u}=(0,n.useContext)(h.E_),m=u("app",c),[p,_,D]=(0,o.Z)(m),w=b()(_,m,a,f,D),N=(0,n.useContext)(t.J),K=n.useMemo(()=>({message:Object.assign(Object.assign({},N.message),d),notification:Object.assign(Object.assign({},N.notification),x)}),[d,x,N.message,N.notification]),[T,k]=(0,E.Z)(K.message),[L,$]=(0,s.Z)(K.notification),[I,A]=(0,O.Z)(),S=n.useMemo(()=>({message:T,notification:L,modal:I}),[T,L,I]),B=P===!1?n.Fragment:P,U={className:w,style:v};return p(n.createElement(t.Z.Provider,{value:S},n.createElement(t.J.Provider,{value:K},n.createElement(B,Object.assign({},P===!1?void 0:U),A,k,$,y))))};l.useApp=i,g.Z=l},66274:function(Z,g,e){var n=e(6117);const M=h=>{const{componentCls:E,colorText:O,fontSize:s,lineHeight:t,fontFamily:o}=h;return{[E]:{color:O,fontSize:s,lineHeight:t,fontFamily:o}}},b=()=>({});g.Z=(0,n.I$)("App",M,b)},36808:function(Z,g,e){var n=e(27378),M=e(60042),b=e.n(M),h=e(97933),E=e(26775),O=e(66676);const s=t=>{const{className:o,prefixCls:i,style:l,color:r,children:c,text:y,placement:a="end",rootClassName:f}=t,{getPrefixCls:d,direction:x}=n.useContext(E.E_),v=d("ribbon",i),P=`${v}-wrapper`,[u,m,p]=(0,O.Z)(v,P),_=(0,h.o2)(r,!1),D=b()(v,`${v}-placement-${a}`,{[`${v}-rtl`]:x==="rtl",[`${v}-color-${r}`]:_},o),w={},N={};return r&&!_&&(w.background=r,N.color=r),u(n.createElement("div",{className:b()(P,f,m,p)},c,n.createElement("div",{className:b()(D,m),style:Object.assign(Object.assign({},w),l)},n.createElement("span",{className:`${v}-text`},y),n.createElement("div",{className:`${v}-corner`,style:N}))))};g.Z=s},68273:function(Z,g,e){var n=e(60042),M=e.n(n),b=e(27378),h=e(93795),E=e(26775),O=e(27839),s=function(o,i){var l={};for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&i.indexOf(r)<0&&(l[r]=o[r]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,r=Object.getOwnPropertySymbols(o);c<r.length;c++)i.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(o,r[c])&&(l[r[c]]=o[r[c]]);return l};const t=b.forwardRef((o,i)=>{const{prefixCls:l,count:r,className:c,motionClassName:y,style:a,title:f,show:d,component:x="sup",children:v}=o,P=s(o,["prefixCls","count","className","motionClassName","style","title","show","component","children"]),{getPrefixCls:u}=b.useContext(E.E_),m=u("scroll-number",l),p=Object.assign(Object.assign({},P),{"data-show":d,style:a,className:M()(m,c,y),title:f});let _=r;if(r&&Number(r)%1===0){const D=String(r).split("");_=b.createElement("bdi",null,D.map((w,N)=>b.createElement(O.Z,{prefixCls:m,count:Number(r),value:w,key:D.length-N})))}return a&&a.borderColor&&(p.style=Object.assign(Object.assign({},a),{boxShadow:`0 0 0 1px ${a.borderColor} inset`})),v?(0,h.Tm)(v,D=>({className:M()(`${m}-custom-component`,D?.className,y)})):b.createElement(x,Object.assign({},p,{ref:i}),_)});g.Z=t},27839:function(Z,g,e){e.d(g,{Z:function(){return O}});var n=e(60042),M=e.n(n),b=e(27378);function h(s){let{prefixCls:t,value:o,current:i,offset:l=0}=s,r;return l&&(r={position:"absolute",top:`${l}00%`,left:0}),b.createElement("span",{style:r,className:M()(`${t}-only-unit`,{current:i})},o)}function E(s,t,o){let i=s,l=0;for(;(i+10)%10!==t;)i+=o,l+=o;return l}function O(s){const{prefixCls:t,count:o,value:i}=s,l=Number(i),r=Math.abs(o),[c,y]=b.useState(l),[a,f]=b.useState(r),d=()=>{y(l),f(r)};b.useEffect(()=>{const P=setTimeout(()=>{d()},1e3);return()=>{clearTimeout(P)}},[l]);let x,v;if(c===l||Number.isNaN(l)||Number.isNaN(c))x=[b.createElement(h,Object.assign({},s,{key:l,current:!0}))],v={transition:"none"};else{x=[];const P=l+10,u=[];for(let _=l;_<=P;_+=1)u.push(_);const m=u.findIndex(_=>_%10===c);x=u.map((_,D)=>{const w=_%10;return b.createElement(h,Object.assign({},s,{key:_,value:w,offset:D-m,current:D===m}))});const p=a<r?1:-1;v={transform:`translateY(${-E(c,l,p)}00%)`}}return b.createElement("span",{className:`${t}-only`,style:v,onTransitionEnd:d},x)}},82110:function(Z,g,e){var n=e(27378),M=e(60042),b=e.n(M),h=e(7821),E=e(97933),O=e(93795),s=e(26775),t=e(36808),o=e(68273),i=e(80498),l=function(y,a){var f={};for(var d in y)Object.prototype.hasOwnProperty.call(y,d)&&a.indexOf(d)<0&&(f[d]=y[d]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var x=0,d=Object.getOwnPropertySymbols(y);x<d.length;x++)a.indexOf(d[x])<0&&Object.prototype.propertyIsEnumerable.call(y,d[x])&&(f[d[x]]=y[d[x]]);return f};const r=(y,a)=>{var f,d,x,v,P;const{prefixCls:u,scrollNumberPrefixCls:m,children:p,status:_,text:D,color:w,count:N=null,overflowCount:K=99,dot:T=!1,size:k="default",title:L,offset:$,style:I,className:A,rootClassName:S,classNames:B,styles:U,showZero:J=!1}=y,Y=l(y,["prefixCls","scrollNumberPrefixCls","children","status","text","color","count","overflowCount","dot","size","title","offset","style","className","rootClassName","classNames","styles","showZero"]),{getPrefixCls:ae,direction:Q,badge:z}=n.useContext(s.E_),V=ae("badge",u),[ue,we,Ie]=(0,i.ZP)(V),le=N>K?`${K}+`:N,Pe=le==="0"||le===0,X=N===null||Pe&&!J,fe=(_!=null||w!=null)&&X,ve=T&&!Pe,pe=ve?"":le,G=(0,n.useMemo)(()=>(pe==null||pe===""||Pe&&!J)&&!ve,[pe,Pe,J,ve]),ie=(0,n.useRef)(N);G||(ie.current=N);const se=ie.current,ge=(0,n.useRef)(pe);G||(ge.current=pe);const xe=ge.current,ye=(0,n.useRef)(ve);G||(ye.current=ve);const be=(0,n.useMemo)(()=>{if(!$)return Object.assign(Object.assign({},z?.style),I);const re={marginTop:$[1]};return Q==="rtl"?re.left=parseInt($[0],10):re.right=-parseInt($[0],10),Object.assign(Object.assign(Object.assign({},re),z?.style),I)},[Q,$,I,z?.style]),je=L??(typeof se=="string"||typeof se=="number"?se:void 0),Te=G||!D?null:n.createElement("span",{className:`${V}-status-text`},D),_e=!se||typeof se!="object"?void 0:(0,O.Tm)(se,re=>({style:Object.assign(Object.assign({},be),re.style)})),oe=(0,E.o2)(w,!1),Ae=b()(B?.indicator,(f=z?.classNames)===null||f===void 0?void 0:f.indicator,{[`${V}-status-dot`]:fe,[`${V}-status-${_}`]:!!_,[`${V}-color-${w}`]:oe}),me={};w&&!oe&&(me.color=w,me.background=w);const Se=b()(V,{[`${V}-status`]:fe,[`${V}-not-a-wrapper`]:!p,[`${V}-rtl`]:Q==="rtl"},A,S,z?.className,(d=z?.classNames)===null||d===void 0?void 0:d.root,B?.root,we,Ie);if(!p&&fe){const re=be.color;return ue(n.createElement("span",Object.assign({},Y,{className:Se,style:Object.assign(Object.assign(Object.assign({},U?.root),(x=z?.styles)===null||x===void 0?void 0:x.root),be)}),n.createElement("span",{className:Ae,style:Object.assign(Object.assign(Object.assign({},U?.indicator),(v=z?.styles)===null||v===void 0?void 0:v.indicator),me)}),D&&n.createElement("span",{style:{color:re},className:`${V}-status-text`},D)))}return ue(n.createElement("span",Object.assign({ref:a},Y,{className:Se,style:Object.assign(Object.assign({},(P=z?.styles)===null||P===void 0?void 0:P.root),U?.root)}),p,n.createElement(h.ZP,{visible:!G,motionName:`${V}-zoom`,motionAppear:!1,motionDeadline:1e3},re=>{let{className:Ne,ref:$e}=re;var Ue,Be;const Ze=ae("scroll-number",m),q=ye.current,ce=b()(B?.indicator,(Ue=z?.classNames)===null||Ue===void 0?void 0:Ue.indicator,{[`${V}-dot`]:q,[`${V}-count`]:!q,[`${V}-count-sm`]:k==="small",[`${V}-multiple-words`]:!q&&xe&&xe.toString().length>1,[`${V}-status-${_}`]:!!_,[`${V}-color-${w}`]:oe});let Oe=Object.assign(Object.assign(Object.assign({},U?.indicator),(Be=z?.styles)===null||Be===void 0?void 0:Be.indicator),be);return w&&!oe&&(Oe=Oe||{},Oe.background=w),n.createElement(o.Z,{prefixCls:Ze,show:!G,motionClassName:Ne,className:ce,count:xe,title:je,style:Oe,key:"scrollNumber",ref:$e},_e)}),Te))},c=n.forwardRef(r);c.Ribbon=t.Z,g.Z=c},80498:function(Z,g,e){e.d(g,{B4:function(){return c},eh:function(){return y}});var n=e(80628),M=e(72457),b=e(9540),h=e(5515),E=e(6117);const O=new n.E4("antStatusProcessing",{"0%":{transform:"scale(0.8)",opacity:.5},"100%":{transform:"scale(2.4)",opacity:0}}),s=new n.E4("antZoomBadgeIn",{"0%":{transform:"scale(0) translate(50%, -50%)",opacity:0},"100%":{transform:"scale(1) translate(50%, -50%)"}}),t=new n.E4("antZoomBadgeOut",{"0%":{transform:"scale(1) translate(50%, -50%)"},"100%":{transform:"scale(0) translate(50%, -50%)",opacity:0}}),o=new n.E4("antNoWrapperZoomBadgeIn",{"0%":{transform:"scale(0)",opacity:0},"100%":{transform:"scale(1)"}}),i=new n.E4("antNoWrapperZoomBadgeOut",{"0%":{transform:"scale(1)"},"100%":{transform:"scale(0)",opacity:0}}),l=new n.E4("antBadgeLoadingCircle",{"0%":{transformOrigin:"50%"},"100%":{transform:"translate(50%, -50%) rotate(360deg)",transformOrigin:"50%"}}),r=a=>{const{componentCls:f,iconCls:d,antCls:x,badgeShadowSize:v,motionDurationSlow:P,textFontSize:u,textFontSizeSM:m,statusSize:p,dotSize:_,textFontWeight:D,indicatorHeight:w,indicatorHeightSM:N,marginXS:K,calc:T}=a,k=`${x}-scroll-number`,L=(0,b.Z)(a,($,I)=>{let{darkColor:A}=I;return{[`&${f} ${f}-color-${$}`]:{background:A,[`&:not(${f}-count)`]:{color:A}}}});return{[f]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,M.Wf)(a)),{position:"relative",display:"inline-block",width:"fit-content",lineHeight:1,[`${f}-count`]:{zIndex:a.indicatorZIndex,minWidth:w,height:w,color:a.badgeTextColor,fontWeight:D,fontSize:u,lineHeight:(0,n.bf)(w),whiteSpace:"nowrap",textAlign:"center",background:a.badgeColor,borderRadius:T(w).div(2).equal(),boxShadow:`0 0 0 ${(0,n.bf)(v)} ${a.badgeShadowColor}`,transition:`background ${a.motionDurationMid}`,a:{color:a.badgeTextColor},"a:hover":{color:a.badgeTextColor},"a:hover &":{background:a.badgeColorHover}},[`${f}-count-sm`]:{minWidth:N,height:N,fontSize:m,lineHeight:(0,n.bf)(N),borderRadius:T(N).div(2).equal()},[`${f}-multiple-words`]:{padding:`0 ${(0,n.bf)(a.paddingXS)}`,bdi:{unicodeBidi:"plaintext"}},[`${f}-dot`]:{zIndex:a.indicatorZIndex,width:_,minWidth:_,height:_,background:a.badgeColor,borderRadius:"100%",boxShadow:`0 0 0 ${(0,n.bf)(v)} ${a.badgeShadowColor}`},[`${f}-dot${k}`]:{transition:`background ${P}`},[`${f}-count, ${f}-dot, ${k}-custom-component`]:{position:"absolute",top:0,insetInlineEnd:0,transform:"translate(50%, -50%)",transformOrigin:"100% 0%",[`&${d}-spin`]:{animationName:l,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&${f}-status`]:{lineHeight:"inherit",verticalAlign:"baseline",[`${f}-status-dot`]:{position:"relative",top:-1,display:"inline-block",width:p,height:p,verticalAlign:"middle",borderRadius:"50%"},[`${f}-status-success`]:{backgroundColor:a.colorSuccess},[`${f}-status-processing`]:{overflow:"visible",color:a.colorPrimary,backgroundColor:a.colorPrimary,"&::after":{position:"absolute",top:0,insetInlineStart:0,width:"100%",height:"100%",borderWidth:v,borderStyle:"solid",borderColor:"inherit",borderRadius:"50%",animationName:O,animationDuration:a.badgeProcessingDuration,animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",content:'""'}},[`${f}-status-default`]:{backgroundColor:a.colorTextPlaceholder},[`${f}-status-error`]:{backgroundColor:a.colorError},[`${f}-status-warning`]:{backgroundColor:a.colorWarning},[`${f}-status-text`]:{marginInlineStart:K,color:a.colorText,fontSize:a.fontSize}}}),L),{[`${f}-zoom-appear, ${f}-zoom-enter`]:{animationName:s,animationDuration:a.motionDurationSlow,animationTimingFunction:a.motionEaseOutBack,animationFillMode:"both"},[`${f}-zoom-leave`]:{animationName:t,animationDuration:a.motionDurationSlow,animationTimingFunction:a.motionEaseOutBack,animationFillMode:"both"},[`&${f}-not-a-wrapper`]:{[`${f}-zoom-appear, ${f}-zoom-enter`]:{animationName:o,animationDuration:a.motionDurationSlow,animationTimingFunction:a.motionEaseOutBack},[`${f}-zoom-leave`]:{animationName:i,animationDuration:a.motionDurationSlow,animationTimingFunction:a.motionEaseOutBack},[`&:not(${f}-status)`]:{verticalAlign:"middle"},[`${k}-custom-component, ${f}-count`]:{transform:"none"},[`${k}-custom-component, ${k}`]:{position:"relative",top:"auto",display:"block",transformOrigin:"50% 50%"}},[`${k}`]:{overflow:"hidden",[`${k}-only`]:{position:"relative",display:"inline-block",height:w,transition:`all ${a.motionDurationSlow} ${a.motionEaseOutBack}`,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",[`> p${k}-only-unit`]:{height:w,margin:0,WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden"}},[`${k}-symbol`]:{verticalAlign:"top"}},"&-rtl":{direction:"rtl",[`${f}-count, ${f}-dot, ${k}-custom-component`]:{transform:"translate(-50%, -50%)"}}})}},c=a=>{const{fontHeight:f,lineWidth:d,marginXS:x,colorBorderBg:v}=a,P=f,u=d,m=a.colorBgContainer,p=a.colorError,_=a.colorErrorHover;return(0,h.TS)(a,{badgeFontHeight:P,badgeShadowSize:u,badgeTextColor:m,badgeColor:p,badgeColorHover:_,badgeShadowColor:v,badgeProcessingDuration:"1.2s",badgeRibbonOffset:x,badgeRibbonCornerTransform:"scaleY(0.75)",badgeRibbonCornerFilter:"brightness(75%)"})},y=a=>{const{fontSize:f,lineHeight:d,fontSizeSM:x,lineWidth:v}=a;return{indicatorZIndex:"auto",indicatorHeight:Math.round(f*d)-2*v,indicatorHeightSM:f,dotSize:x/2,textFontSize:x,textFontSizeSM:x,textFontWeight:"normal",statusSize:x/2}};g.ZP=(0,E.I$)("Badge",a=>{const f=c(a);return r(f)},y)},66676:function(Z,g,e){var n=e(80628),M=e(80498),b=e(72457),h=e(9540),E=e(6117);const O=s=>{const{antCls:t,badgeFontHeight:o,marginXS:i,badgeRibbonOffset:l,calc:r}=s,c=`${t}-ribbon`,y=`${t}-ribbon-wrapper`,a=(0,h.Z)(s,(f,d)=>{let{darkColor:x}=d;return{[`&${c}-color-${f}`]:{background:x,color:x}}});return{[`${y}`]:{position:"relative"},[`${c}`]:Object.assign(Object.assign(Object.assign(Object.assign({},(0,b.Wf)(s)),{position:"absolute",top:i,padding:`0 ${(0,n.bf)(s.paddingXS)}`,color:s.colorPrimary,lineHeight:(0,n.bf)(o),whiteSpace:"nowrap",backgroundColor:s.colorPrimary,borderRadius:s.borderRadiusSM,[`${c}-text`]:{color:s.colorTextLightSolid},[`${c}-corner`]:{position:"absolute",top:"100%",width:l,height:l,color:"currentcolor",border:`${(0,n.bf)(r(l).div(2).equal())} solid`,transform:s.badgeRibbonCornerTransform,transformOrigin:"top",filter:s.badgeRibbonCornerFilter}}),a),{[`&${c}-placement-end`]:{insetInlineEnd:r(l).mul(-1).equal(),borderEndEndRadius:0,[`${c}-corner`]:{insetInlineEnd:0,borderInlineEndColor:"transparent",borderBlockEndColor:"transparent"}},[`&${c}-placement-start`]:{insetInlineStart:r(l).mul(-1).equal(),borderEndStartRadius:0,[`${c}-corner`]:{insetInlineStart:0,borderBlockEndColor:"transparent",borderInlineStartColor:"transparent"}},"&-rtl":{direction:"rtl"}})}};g.Z=(0,E.I$)(["Badge","Ribbon"],s=>{const t=(0,M.B4)(s);return O(t)},M.eh)},19242:function(Z,g,e){var n=e(27378),M=e(60042),b=e.n(M),h=e(60467),E=e(26775);const O=s=>{var t,o;const{prefixCls:i,title:l,footer:r,extra:c,closeIcon:y,closable:a,onClose:f,headerStyle:d,bodyStyle:x,footerStyle:v,children:P,classNames:u,styles:m}=s,{drawer:p}=n.useContext(E.E_),_=n.useCallback(T=>n.createElement("button",{type:"button",onClick:f,"aria-label":"Close",className:`${i}-close`},T),[f]),[D,w]=(0,h.Z)(a,y,_,void 0,!0),N=n.useMemo(()=>{var T,k;return!l&&!D?null:n.createElement("div",{style:Object.assign(Object.assign(Object.assign({},(T=p?.styles)===null||T===void 0?void 0:T.header),d),m?.header),className:b()(`${i}-header`,{[`${i}-header-close-only`]:D&&!l&&!c},(k=p?.classNames)===null||k===void 0?void 0:k.header,u?.header)},n.createElement("div",{className:`${i}-header-title`},w,l&&n.createElement("div",{className:`${i}-title`},l)),c&&n.createElement("div",{className:`${i}-extra`},c))},[D,w,c,d,i,l]),K=n.useMemo(()=>{var T,k;if(!r)return null;const L=`${i}-footer`;return n.createElement("div",{className:b()(L,(T=p?.classNames)===null||T===void 0?void 0:T.footer,u?.footer),style:Object.assign(Object.assign(Object.assign({},(k=p?.styles)===null||k===void 0?void 0:k.footer),v),m?.footer)},r)},[r,v,i]);return n.createElement(n.Fragment,null,N,n.createElement("div",{className:b()(`${i}-body`,u?.body,(t=p?.classNames)===null||t===void 0?void 0:t.body),style:Object.assign(Object.assign(Object.assign({},(o=p?.styles)===null||o===void 0?void 0:o.body),x),m?.body)},P),K)};g.Z=O},47394:function(Z,g,e){var n=e(27378),M=e(60042),b=e.n(M),h=e(51924),E=e(2874),O=e(80821),s=e(50185),t=e(26775),o=e(84006),i=e(31630),l=e(29670),r=e(19242),c=e(30003),y=function(v,P){var u={};for(var m in v)Object.prototype.hasOwnProperty.call(v,m)&&P.indexOf(m)<0&&(u[m]=v[m]);if(v!=null&&typeof Object.getOwnPropertySymbols=="function")for(var p=0,m=Object.getOwnPropertySymbols(v);p<m.length;p++)P.indexOf(m[p])<0&&Object.prototype.propertyIsEnumerable.call(v,m[p])&&(u[m[p]]=v[m[p]]);return u};const a=null,f={distance:180},d=v=>{var P,u,m,p,_,D,w,N,K,T,k;const{rootClassName:L,width:$,height:I,size:A="default",mask:S=!0,push:B=f,open:U,afterOpenChange:J,onClose:Y,prefixCls:ae,getContainer:Q,style:z,className:V,visible:ue,afterVisibleChange:we,maskStyle:Ie,drawerStyle:le,contentWrapperStyle:Pe}=v,X=y(v,["rootClassName","width","height","size","mask","push","open","afterOpenChange","onClose","prefixCls","getContainer","style","className","visible","afterVisibleChange","maskStyle","drawerStyle","contentWrapperStyle"]),{getPopupContainer:fe,getPrefixCls:ve,direction:pe,drawer:G}=n.useContext(t.E_),ie=ve("drawer",ae),[se,ge,xe]=(0,c.Z)(ie),ye=Q===void 0&&fe?()=>fe(document.body):Q,be=b()({"no-mask":!S,[`${ie}-rtl`]:pe==="rtl"},L,ge,xe),je=n.useMemo(()=>$??(A==="large"?736:378),[$,A]),Te=n.useMemo(()=>I??(A==="large"?736:378),[I,A]),_e={motionName:(0,O.m)(ie,"mask-motion"),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500},oe=re=>({motionName:(0,O.m)(ie,`panel-motion-${re}`),motionAppear:!0,motionEnter:!0,motionLeave:!0,motionDeadline:500}),Ae=(0,l.H)(),[me,Se]=(0,E.Cn)("Drawer",X.zIndex);return se(n.createElement(i.BR,null,n.createElement(o.Ux,{status:!0,override:!0},n.createElement(s.Z.Provider,{value:Se},n.createElement(h.Z,Object.assign({prefixCls:ie,onClose:Y,maskMotion:_e,motion:oe},X,{classNames:{mask:b()((u=X.classNames)===null||u===void 0?void 0:u.mask,(m=G?.classNames)===null||m===void 0?void 0:m.mask),content:b()((p=X.classNames)===null||p===void 0?void 0:p.content,(_=G?.classNames)===null||_===void 0?void 0:_.content)},styles:{mask:Object.assign(Object.assign(Object.assign({},(D=X.styles)===null||D===void 0?void 0:D.mask),Ie),(w=G?.styles)===null||w===void 0?void 0:w.mask),content:Object.assign(Object.assign(Object.assign({},(N=X.styles)===null||N===void 0?void 0:N.content),le),(K=G?.styles)===null||K===void 0?void 0:K.content),wrapper:Object.assign(Object.assign(Object.assign({},(T=X.styles)===null||T===void 0?void 0:T.wrapper),Pe),(k=G?.styles)===null||k===void 0?void 0:k.wrapper)},open:U??ue,mask:S,push:B,width:je,height:Te,style:Object.assign(Object.assign({},G?.style),z),className:b()(G?.className,V),rootClassName:be,getContainer:ye,afterOpenChange:J??we,panelRef:Ae,zIndex:me}),n.createElement(r.Z,Object.assign({prefixCls:ie},X,{onClose:Y})))))))},x=v=>{const{prefixCls:P,style:u,className:m,placement:p="right"}=v,_=y(v,["prefixCls","style","className","placement"]),{getPrefixCls:D}=n.useContext(t.E_),w=D("drawer",P),[N,K,T]=(0,c.Z)(w),k=b()(w,`${w}-pure`,`${w}-${p}`,K,T,m);return N(n.createElement("div",{className:k,style:u},n.createElement(r.Z,Object.assign({prefixCls:w},_))))};d._InternalPanelDoNotUseOrYouWillBeFired=x,g.Z=d},30003:function(Z,g,e){var n=e(80628),M=e(6117),b=e(5515),h=e(51255);const E=s=>{const{componentCls:t,zIndexPopup:o,colorBgMask:i,colorBgElevated:l,motionDurationSlow:r,motionDurationMid:c,padding:y,paddingLG:a,fontSizeLG:f,lineHeightLG:d,lineWidth:x,lineType:v,colorSplit:P,marginSM:u,colorIcon:m,colorIconHover:p,colorText:_,fontWeightStrong:D,footerPaddingBlock:w,footerPaddingInline:N}=s,K=`${t}-content-wrapper`;return{[t]:{position:"fixed",inset:0,zIndex:o,pointerEvents:"none","&-pure":{position:"relative",background:l,display:"flex",flexDirection:"column",[`&${t}-left`]:{boxShadow:s.boxShadowDrawerLeft},[`&${t}-right`]:{boxShadow:s.boxShadowDrawerRight},[`&${t}-top`]:{boxShadow:s.boxShadowDrawerUp},[`&${t}-bottom`]:{boxShadow:s.boxShadowDrawerDown}},"&-inline":{position:"absolute"},[`${t}-mask`]:{position:"absolute",inset:0,zIndex:o,background:i,pointerEvents:"auto"},[K]:{position:"absolute",zIndex:o,maxWidth:"100vw",transition:`all ${r}`,"&-hidden":{display:"none"}},[`&-left > ${K}`]:{top:0,bottom:0,left:{_skip_check_:!0,value:0},boxShadow:s.boxShadowDrawerLeft},[`&-right > ${K}`]:{top:0,right:{_skip_check_:!0,value:0},bottom:0,boxShadow:s.boxShadowDrawerRight},[`&-top > ${K}`]:{top:0,insetInline:0,boxShadow:s.boxShadowDrawerUp},[`&-bottom > ${K}`]:{bottom:0,insetInline:0,boxShadow:s.boxShadowDrawerDown},[`${t}-content`]:{display:"flex",flexDirection:"column",width:"100%",height:"100%",overflow:"auto",background:l,pointerEvents:"auto"},[`${t}-header`]:{display:"flex",flex:0,alignItems:"center",padding:`${(0,n.bf)(y)} ${(0,n.bf)(a)}`,fontSize:f,lineHeight:d,borderBottom:`${(0,n.bf)(x)} ${v} ${P}`,"&-title":{display:"flex",flex:1,alignItems:"center",minWidth:0,minHeight:0}},[`${t}-extra`]:{flex:"none"},[`${t}-close`]:{display:"inline-block",marginInlineEnd:u,color:m,fontWeight:D,fontSize:f,fontStyle:"normal",lineHeight:1,textAlign:"center",textTransform:"none",textDecoration:"none",background:"transparent",border:0,outline:0,cursor:"pointer",transition:`color ${c}`,textRendering:"auto","&:focus, &:hover":{color:p,textDecoration:"none"}},[`${t}-title`]:{flex:1,margin:0,color:_,fontWeight:s.fontWeightStrong,fontSize:f,lineHeight:d},[`${t}-body`]:{flex:1,minWidth:0,minHeight:0,padding:a,overflow:"auto"},[`${t}-footer`]:{flexShrink:0,padding:`${(0,n.bf)(w)} ${(0,n.bf)(N)}`,borderTop:`${(0,n.bf)(x)} ${v} ${P}`},"&-rtl":{direction:"rtl"}}}},O=s=>({zIndexPopup:s.zIndexPopupBase,footerPaddingBlock:s.paddingXS,footerPaddingInline:s.padding});g.Z=(0,M.I$)("Drawer",s=>{const t=(0,b.TS)(s,{});return[E(t),(0,h.Z)(t)]},O)},51255:function(Z,g){const e=E=>{const O="100%";return{left:`translateX(-${O})`,right:`translateX(${O})`,top:`translateY(-${O})`,bottom:`translateY(${O})`}[E]},n=(E,O)=>({"&-enter, &-appear":Object.assign(Object.assign({},E),{"&-active":O}),"&-leave":Object.assign(Object.assign({},O),{"&-active":E})}),M=(E,O)=>Object.assign({"&-enter, &-appear, &-leave":{"&-start":{transition:"none"},"&-active":{transition:`all ${O}`}}},n({opacity:E},{opacity:1})),b=(E,O)=>[M(.7,O),n({transform:e(E)},{transform:"none"})],h=E=>{const{componentCls:O,motionDurationSlow:s}=E;return{[O]:{[`${O}-mask-motion`]:M(0,s),[`${O}-panel-motion`]:["left","right","top","bottom"].reduce((t,o)=>Object.assign(Object.assign({},t),{[`&-${o}`]:b(o,s)}),{})}}};g.Z=h},73878:function(Z,g,e){e.d(g,{CW:function(){return r}});var n=e(14770),M=e(55222),b=e(53058),h=e(77597),E=e(93326),O=e(60042),s=e.n(O),t=e(48600),o=e(27378),i=function(a,f){var d={};for(var x in a)Object.prototype.hasOwnProperty.call(a,x)&&f.indexOf(x)<0&&(d[x]=a[x]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var v=0,x=Object.getOwnPropertySymbols(a);v<x.length;v++)f.indexOf(x[v])<0&&Object.prototype.propertyIsEnumerable.call(a,x[v])&&(d[x[v]]=a[x[v]]);return d};const l={info:o.createElement(h.Z,null),success:o.createElement(n.Z,null),error:o.createElement(M.Z,null),warning:o.createElement(b.Z,null),loading:o.createElement(E.Z,null)},r=a=>{let{prefixCls:f,type:d,icon:x,children:v}=a;return o.createElement("div",{className:s()(`${f}-custom-content`,`${f}-${d}`)},x||l[d],o.createElement("span",null,v))},c=a=>{const{prefixCls:f,className:d,type:x,icon:v,content:P}=a,u=i(a,["prefixCls","className","type","icon","content"]),{getPrefixCls:m}=React.useContext(ConfigContext),p=f||m("message"),_=useCSSVarCls(p),[D,w,N]=useStyle(p,_);return D(React.createElement(Notice,Object.assign({},u,{prefixCls:p,className:classNames(d,w,`${p}-notice-pure-panel`,N,_),eventKey:"pure",duration:null,content:React.createElement(r,{prefixCls:p,type:x,icon:v},P)})))};var y=null},89214:function(Z,g,e){var n=e(80628),M=e(2874),b=e(72457),h=e(6117),E=e(5515);const O=t=>{const{componentCls:o,iconCls:i,boxShadow:l,colorText:r,colorSuccess:c,colorError:y,colorWarning:a,colorInfo:f,fontSizeLG:d,motionEaseInOutCirc:x,motionDurationSlow:v,marginXS:P,paddingXS:u,borderRadiusLG:m,zIndexPopup:p,contentPadding:_,contentBg:D}=t,w=`${o}-notice`,N=new n.E4("MessageMoveIn",{"0%":{padding:0,transform:"translateY(-100%)",opacity:0},"100%":{padding:u,transform:"translateY(0)",opacity:1}}),K=new n.E4("MessageMoveOut",{"0%":{maxHeight:t.height,padding:u,opacity:1},"100%":{maxHeight:0,padding:0,opacity:0}}),T={padding:u,textAlign:"center",[`${o}-custom-content > ${i}`]:{verticalAlign:"text-bottom",marginInlineEnd:P,fontSize:d},[`${w}-content`]:{display:"inline-block",padding:_,background:D,borderRadius:m,boxShadow:l,pointerEvents:"all"},[`${o}-success > ${i}`]:{color:c},[`${o}-error > ${i}`]:{color:y},[`${o}-warning > ${i}`]:{color:a},[`${o}-info > ${i},
      ${o}-loading > ${i}`]:{color:f}};return[{[o]:Object.assign(Object.assign({},(0,b.Wf)(t)),{color:r,position:"fixed",top:P,width:"100%",pointerEvents:"none",zIndex:p,[`${o}-move-up`]:{animationFillMode:"forwards"},[`
        ${o}-move-up-appear,
        ${o}-move-up-enter
      `]:{animationName:N,animationDuration:v,animationPlayState:"paused",animationTimingFunction:x},[`
        ${o}-move-up-appear${o}-move-up-appear-active,
        ${o}-move-up-enter${o}-move-up-enter-active
      `]:{animationPlayState:"running"},[`${o}-move-up-leave`]:{animationName:K,animationDuration:v,animationPlayState:"paused",animationTimingFunction:x},[`${o}-move-up-leave${o}-move-up-leave-active`]:{animationPlayState:"running"},"&-rtl":{direction:"rtl",span:{direction:"rtl"}}})},{[o]:{[`${w}-wrapper`]:Object.assign({},T)}},{[`${o}-notice-pure-panel`]:Object.assign(Object.assign({},T),{padding:0,textAlign:"start"})}]},s=t=>({zIndexPopup:t.zIndexPopupBase+M.u6+10,contentBg:t.colorBgElevated,contentPadding:`${(t.controlHeightLG-t.fontSize*t.lineHeight)/2}px ${t.paddingSM}px`});g.Z=(0,h.I$)("Message",t=>{const o=(0,E.TS)(t,{height:150});return[O(o)]},s)},98363:function(Z,g,e){e.d(g,{Z:function(){return P}});var n=e(27378),M=e(92746),b=e(60042),h=e.n(b),E=e(48600),O=e(92916),s=e(26775),t=e(51104),o=e(73878),i=e(89214),l=e(99970),r=function(u,m){var p={};for(var _ in u)Object.prototype.hasOwnProperty.call(u,_)&&m.indexOf(_)<0&&(p[_]=u[_]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,_=Object.getOwnPropertySymbols(u);D<_.length;D++)m.indexOf(_[D])<0&&Object.prototype.propertyIsEnumerable.call(u,_[D])&&(p[_[D]]=u[_[D]]);return p};const c=8,y=3,a=u=>{let{children:m,prefixCls:p}=u;const _=(0,t.Z)(p),[D,w,N]=(0,i.Z)(p,_);return D(n.createElement(E.JB,{classNames:{list:h()(w,N,_)}},m))},f=(u,m)=>{let{prefixCls:p,key:_}=m;return n.createElement(a,{prefixCls:p,key:_},u)},d=n.forwardRef((u,m)=>{const{top:p,prefixCls:_,getContainer:D,maxCount:w,duration:N=y,rtl:K,transitionName:T,onAllRemoved:k}=u,{getPrefixCls:L,getPopupContainer:$,message:I,direction:A}=n.useContext(s.E_),S=_||L("message"),B=()=>({left:"50%",transform:"translateX(-50%)",top:p??c}),U=()=>h()({[`${S}-rtl`]:K??A==="rtl"}),J=()=>(0,l.g)(S,T),Y=n.createElement("span",{className:`${S}-close-x`},n.createElement(M.Z,{className:`${S}-close-icon`})),[ae,Q]=(0,E.lm)({prefixCls:S,style:B,className:U,motion:J,closable:!1,closeIcon:Y,duration:N,getContainer:()=>D?.()||$?.()||document.body,maxCount:w,onAllRemoved:k,renderNotifications:f});return n.useImperativeHandle(m,()=>Object.assign(Object.assign({},ae),{prefixCls:S,message:I})),Q});let x=0;function v(u){const m=n.useRef(null),p=(0,O.ln)("Message");return[n.useMemo(()=>{const D=k=>{var L;(L=m.current)===null||L===void 0||L.close(k)},w=k=>{if(!m.current){const ue=()=>{};return ue.then=()=>{},ue}const{open:L,prefixCls:$,message:I}=m.current,A=`${$}-notice`,{content:S,icon:B,type:U,key:J,className:Y,style:ae,onClose:Q}=k,z=r(k,["content","icon","type","key","className","style","onClose"]);let V=J;return V==null&&(x+=1,V=`antd-message-${x}`),(0,l.J)(ue=>(L(Object.assign(Object.assign({},z),{key:V,content:n.createElement(o.CW,{prefixCls:$,type:U,icon:B},S),placement:"top",className:h()(U&&`${A}-${U}`,Y,I?.className),style:Object.assign(Object.assign({},I?.style),ae),onClose:()=>{Q?.(),ue()}})),()=>{D(V)}))},K={open:w,destroy:k=>{var L;k!==void 0?D(k):(L=m.current)===null||L===void 0||L.destroy()}};return["info","success","warning","error","loading"].forEach(k=>{const L=($,I,A)=>{let S;$&&typeof $=="object"&&"content"in $?S=$:S={content:$};let B,U;typeof I=="function"?U=I:(B=I,U=A);const J=Object.assign(Object.assign({onClose:U,duration:B},S),{type:k});return w(J)};K[k]=L}),K},[]),n.createElement(d,Object.assign({key:"message-holder"},u,{ref:m}))]}function P(u){return v(u)}},99970:function(Z,g,e){e.d(g,{J:function(){return M},g:function(){return n}});function n(b,h){return{motionName:h??`${b}-move-up`}}function M(b){let h;const E=new Promise(s=>{h=b(()=>{s(!0)})}),O=()=>{h?.()};return O.then=(s,t)=>E.then(s,t),O.promise=E,O}},62164:function(Z,g,e){e.d(g,{CW:function(){return a},z5:function(){return c}});var n=e(27378),M=e(14770),b=e(55222),h=e(92746),E=e(53058),O=e(77597),s=e(93326),t=e(60042),o=e.n(t),i=e(48600),l=function(x,v){var P={};for(var u in x)Object.prototype.hasOwnProperty.call(x,u)&&v.indexOf(u)<0&&(P[u]=x[u]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var m=0,u=Object.getOwnPropertySymbols(x);m<u.length;m++)v.indexOf(u[m])<0&&Object.prototype.propertyIsEnumerable.call(x,u[m])&&(P[u[m]]=x[u[m]]);return P};const r={info:n.createElement(O.Z,null),success:n.createElement(M.Z,null),error:n.createElement(b.Z,null),warning:n.createElement(E.Z,null),loading:n.createElement(s.Z,null)};function c(x,v){return v===null||v===!1?null:v||n.createElement("span",{className:`${x}-close-x`},n.createElement(h.Z,{className:`${x}-close-icon`}))}const y={success:M.Z,info:O.Z,error:b.Z,warning:E.Z},a=x=>{const{prefixCls:v,icon:P,type:u,message:m,description:p,btn:_,role:D="alert"}=x;let w=null;return P?w=n.createElement("span",{className:`${v}-icon`},P):u&&(w=n.createElement(y[u]||null,{className:o()(`${v}-icon`,`${v}-icon-${u}`)})),n.createElement("div",{className:o()({[`${v}-with-icon`]:w}),role:D},w,n.createElement("div",{className:`${v}-message`},m),n.createElement("div",{className:`${v}-description`},p),_&&n.createElement("div",{className:`${v}-btn`},_))},f=x=>{const{prefixCls:v,className:P,icon:u,type:m,message:p,description:_,btn:D,closable:w=!0,closeIcon:N,className:K}=x,T=l(x,["prefixCls","className","icon","type","message","description","btn","closable","closeIcon","className"]),{getPrefixCls:k}=React.useContext(ConfigContext),L=v||k("notification"),$=`${L}-notice`,I=useCSSVarCls(L),[A,S,B]=useStyle(L,I);return A(React.createElement("div",{className:classNames(`${$}-pure-panel`,S,P,B,I)},React.createElement(PurePanelStyle,{prefixCls:L}),React.createElement(Notice,Object.assign({},T,{prefixCls:L,eventKey:"pure",duration:null,closable:w,className:classNames({notificationClassName:K}),closeIcon:c(L,N),content:React.createElement(a,{prefixCls:$,icon:u,type:m,message:p,description:_,btn:D})}))))};var d=null},32596:function(Z,g,e){e.d(g,{H:function(){return n}});const n=["top","topLeft","topRight","bottom","bottomLeft","bottomRight"]},33183:function(Z,g,e){var n=e(80628),M=e(2874),b=e(72457),h=e(5515),E=e(6117),O=e(6667),s=e(45450);const t=r=>{const{iconCls:c,componentCls:y,boxShadow:a,fontSizeLG:f,notificationMarginBottom:d,borderRadiusLG:x,colorSuccess:v,colorInfo:P,colorWarning:u,colorError:m,colorTextHeading:p,notificationBg:_,notificationPadding:D,notificationMarginEdge:w,fontSize:N,lineHeight:K,width:T,notificationIconSize:k,colorText:L}=r,$=`${y}-notice`;return{position:"relative",marginBottom:d,marginInlineStart:"auto",background:_,borderRadius:x,boxShadow:a,[$]:{padding:D,width:T,maxWidth:`calc(100vw - ${(0,n.bf)(r.calc(w).mul(2).equal())})`,overflow:"hidden",lineHeight:K,wordWrap:"break-word"},[`${y}-close-icon`]:{fontSize:N,cursor:"pointer"},[`${$}-message`]:{marginBottom:r.marginXS,color:p,fontSize:f,lineHeight:r.lineHeightLG},[`${$}-description`]:{fontSize:N,color:L},[`${$}-closable ${$}-message`]:{paddingInlineEnd:r.paddingLG},[`${$}-with-icon ${$}-message`]:{marginBottom:r.marginXS,marginInlineStart:r.calc(r.marginSM).add(k).equal(),fontSize:f},[`${$}-with-icon ${$}-description`]:{marginInlineStart:r.calc(r.marginSM).add(k).equal(),fontSize:N},[`${$}-icon`]:{position:"absolute",fontSize:k,lineHeight:1,[`&-success${c}`]:{color:v},[`&-info${c}`]:{color:P},[`&-warning${c}`]:{color:u},[`&-error${c}`]:{color:m}},[`${$}-close`]:{position:"absolute",top:r.notificationPaddingVertical,insetInlineEnd:r.notificationPaddingHorizontal,color:r.colorIcon,outline:"none",width:r.notificationCloseButtonSize,height:r.notificationCloseButtonSize,borderRadius:r.borderRadiusSM,transition:`background-color ${r.motionDurationMid}, color ${r.motionDurationMid}`,display:"flex",alignItems:"center",justifyContent:"center","&:hover":{color:r.colorIconHover,backgroundColor:r.closeBtnHoverBg}},[`${$}-btn`]:{float:"right",marginTop:r.marginSM}}},o=r=>{const{componentCls:c,notificationMarginBottom:y,notificationMarginEdge:a,motionDurationMid:f,motionEaseInOut:d}=r,x=`${c}-notice`,v=new n.E4("antNotificationFadeOut",{"0%":{maxHeight:r.animationMaxHeight,marginBottom:y},"100%":{maxHeight:0,marginBottom:0,paddingTop:0,paddingBottom:0,opacity:0}});return[{[c]:Object.assign(Object.assign({},(0,b.Wf)(r)),{position:"fixed",zIndex:r.zIndexPopup,marginRight:{value:a,_skip_check_:!0},[`${c}-hook-holder`]:{position:"relative"},[`${c}-fade-appear-prepare`]:{opacity:"0 !important"},[`${c}-fade-enter, ${c}-fade-appear`]:{animationDuration:r.motionDurationMid,animationTimingFunction:d,animationFillMode:"both",opacity:0,animationPlayState:"paused"},[`${c}-fade-leave`]:{animationTimingFunction:d,animationFillMode:"both",animationDuration:f,animationPlayState:"paused"},[`${c}-fade-enter${c}-fade-enter-active, ${c}-fade-appear${c}-fade-appear-active`]:{animationPlayState:"running"},[`${c}-fade-leave${c}-fade-leave-active`]:{animationName:v,animationPlayState:"running"},"&-rtl":{direction:"rtl",[`${x}-btn`]:{float:"left"}}})},{[c]:{[`${x}-wrapper`]:Object.assign({},t(r))}}]},i=r=>({zIndexPopup:r.zIndexPopupBase+M.u6+50,width:384,closeBtnHoverBg:r.wireframe?"transparent":r.colorFillContent}),l=r=>{const c=r.paddingMD,y=r.paddingLG;return(0,h.TS)(r,{notificationBg:r.colorBgElevated,notificationPaddingVertical:c,notificationPaddingHorizontal:y,notificationIconSize:r.calc(r.fontSizeLG).mul(r.lineHeightLG).equal(),notificationCloseButtonSize:r.calc(r.controlHeightLG).mul(.55).equal(),notificationMarginBottom:r.margin,notificationPadding:`${(0,n.bf)(r.paddingMD)} ${(0,n.bf)(r.paddingContentHorizontalLG)}`,notificationMarginEdge:r.marginLG,animationMaxHeight:150,notificationStackLayer:3})};g.ZP=(0,E.I$)("Notification",r=>{const c=l(r);return[o(c),(0,O.Z)(c),(0,s.Z)(c)]},i)},6667:function(Z,g,e){var n=e(80628);const M=b=>{const{componentCls:h,notificationMarginEdge:E,animationMaxHeight:O}=b,s=`${h}-notice`,t=new n.E4("antNotificationFadeIn",{"0%":{transform:"translate3d(100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}}),o=new n.E4("antNotificationTopFadeIn",{"0%":{top:-O,opacity:0},"100%":{top:0,opacity:1}}),i=new n.E4("antNotificationBottomFadeIn",{"0%":{bottom:b.calc(O).mul(-1).equal(),opacity:0},"100%":{bottom:0,opacity:1}}),l=new n.E4("antNotificationLeftFadeIn",{"0%":{transform:"translate3d(-100%, 0, 0)",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",opacity:1}});return{[h]:{[`&${h}-top, &${h}-bottom`]:{marginInline:0,[s]:{marginInline:"auto auto"}},[`&${h}-top`]:{[`${h}-fade-enter${h}-fade-enter-active, ${h}-fade-appear${h}-fade-appear-active`]:{animationName:o}},[`&${h}-bottom`]:{[`${h}-fade-enter${h}-fade-enter-active, ${h}-fade-appear${h}-fade-appear-active`]:{animationName:i}},[`&${h}-topRight, &${h}-bottomRight`]:{[`${h}-fade-enter${h}-fade-enter-active, ${h}-fade-appear${h}-fade-appear-active`]:{animationName:t}},[`&${h}-topLeft, &${h}-bottomLeft`]:{marginRight:{value:0,_skip_check_:!0},marginLeft:{value:E,_skip_check_:!0},[s]:{marginInlineEnd:"auto",marginInlineStart:0},[`${h}-fade-enter${h}-fade-enter-active, ${h}-fade-appear${h}-fade-appear-active`]:{animationName:l}}}}};g.Z=M},45450:function(Z,g,e){var n=e(32596);const M={topLeft:"left",topRight:"right",bottomLeft:"left",bottomRight:"right",top:"left",bottom:"left"},b=(s,t)=>{const{componentCls:o}=s;return{[`${o}-${t}`]:{[`&${o}-stack > ${o}-notice-wrapper`]:{[t.startsWith("top")?"top":"bottom"]:0,[M[t]]:{value:0,_skip_check_:!0}}}}},h=s=>{const t={};for(let o=1;o<s.notificationStackLayer;o++)t[`&:nth-last-child(${o+1})`]={overflow:"hidden",[`& > ${s.componentCls}-notice`]:{opacity:0,transition:`opacity ${s.motionDurationMid}`}};return Object.assign({[`&:not(:nth-last-child(-n+${s.notificationStackLayer}))`]:{opacity:0,overflow:"hidden",color:"transparent",pointerEvents:"none"}},t)},E=s=>{const t={};for(let o=1;o<s.notificationStackLayer;o++)t[`&:nth-last-child(${o+1})`]={background:s.colorBgBlur,backdropFilter:"blur(10px)","-webkit-backdrop-filter":"blur(10px)"};return Object.assign({},t)},O=s=>{const{componentCls:t}=s;return Object.assign({[`${t}-stack`]:{[`& > ${t}-notice-wrapper`]:Object.assign({transition:`all ${s.motionDurationSlow}, backdrop-filter 0s`,position:"absolute"},h(s))},[`${t}-stack:not(${t}-stack-expanded)`]:{[`& > ${t}-notice-wrapper`]:Object.assign({},E(s))},[`${t}-stack${t}-stack-expanded`]:{[`& > ${t}-notice-wrapper`]:{"&:not(:nth-last-child(-n + 1))":{opacity:1,overflow:"unset",color:"inherit",pointerEvents:"auto",[`& > ${s.componentCls}-notice`]:{opacity:1}},"&:after":{content:'""',position:"absolute",height:s.margin,width:"100%",insetInline:0,bottom:s.calc(s.margin).mul(-1).equal(),background:"transparent",pointerEvents:"auto"}}}},n.H.map(o=>b(s,o)).reduce((o,i)=>Object.assign(Object.assign({},o),i),{}))};g.Z=O},38195:function(Z,g,e){e.d(g,{Z:function(){return P}});var n=e(27378),M=e(60042),b=e.n(M),h=e(48600),E=e(92916),O=e(26775),s=e(51104),t=e(11579),o=e(62164),i=e(33183),l=e(98283),r=function(u,m){var p={};for(var _ in u)Object.prototype.hasOwnProperty.call(u,_)&&m.indexOf(_)<0&&(p[_]=u[_]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,_=Object.getOwnPropertySymbols(u);D<_.length;D++)m.indexOf(_[D])<0&&Object.prototype.propertyIsEnumerable.call(u,_[D])&&(p[_[D]]=u[_[D]]);return p};const c=24,y=4.5,a="topRight",f=u=>{let{children:m,prefixCls:p}=u;const _=(0,s.Z)(p),[D,w,N]=(0,i.ZP)(p,_);return D(n.createElement(h.JB,{classNames:{list:b()(w,N,_)}},m))},d=(u,m)=>{let{prefixCls:p,key:_}=m;return n.createElement(f,{prefixCls:p,key:_},u)},x=n.forwardRef((u,m)=>{const{top:p,bottom:_,prefixCls:D,getContainer:w,maxCount:N,rtl:K,onAllRemoved:T,stack:k}=u,{getPrefixCls:L,getPopupContainer:$,notification:I,direction:A}=(0,n.useContext)(O.E_),[,S]=(0,t.ZP)(),B=D||L("notification"),U=z=>(0,l.f)(z,p??c,_??c),J=()=>b()({[`${B}-rtl`]:K??A==="rtl"}),Y=()=>(0,l.g)(B),[ae,Q]=(0,h.lm)({prefixCls:B,style:U,className:J,motion:Y,closable:!0,closeIcon:(0,o.z5)(B),duration:y,getContainer:()=>w?.()||$?.()||document.body,maxCount:N,onAllRemoved:T,renderNotifications:d,stack:k===!1?!1:{threshold:typeof k=="object"?k?.threshold:void 0,offset:8,gap:S.margin}});return n.useImperativeHandle(m,()=>Object.assign(Object.assign({},ae),{prefixCls:B,notification:I})),Q});function v(u){const m=n.useRef(null),p=(0,E.ln)("Notification");return[n.useMemo(()=>{const D=T=>{var k;if(!m.current)return;const{open:L,prefixCls:$,notification:I}=m.current,A=`${$}-notice`,{message:S,description:B,icon:U,type:J,btn:Y,className:ae,style:Q,role:z="alert",closeIcon:V}=T,ue=r(T,["message","description","icon","type","btn","className","style","role","closeIcon"]),we=(0,o.z5)(A,V);return L(Object.assign(Object.assign({placement:(k=u?.placement)!==null&&k!==void 0?k:a},ue),{content:n.createElement(o.CW,{prefixCls:A,icon:U,type:J,message:S,description:B,btn:Y,role:z}),className:b()(J&&`${A}-${J}`,ae,I?.className),style:Object.assign(Object.assign({},I?.style),Q),closeIcon:we,closable:!!we}))},N={open:D,destroy:T=>{var k,L;T!==void 0?(k=m.current)===null||k===void 0||k.close(T):(L=m.current)===null||L===void 0||L.destroy()}};return["success","info","warning","error"].forEach(T=>{N[T]=k=>D(Object.assign(Object.assign({},k),{type:T}))}),N},[]),n.createElement(x,Object.assign({key:"notification-holder"},u,{ref:m}))]}function P(u){return v(u)}},98283:function(Z,g,e){e.d(g,{f:function(){return n},g:function(){return M}});function n(b,h,E){let O;switch(b){case"top":O={left:"50%",transform:"translateX(-50%)",right:"auto",top:h,bottom:"auto"};break;case"topLeft":O={left:0,top:h,bottom:"auto"};break;case"topRight":O={right:0,top:h,bottom:"auto"};break;case"bottom":O={left:"50%",transform:"translateX(-50%)",right:"auto",top:"auto",bottom:E};break;case"bottomLeft":O={left:0,top:"auto",bottom:E};break;default:O={right:0,top:"auto",bottom:E};break}return O}function M(b){return{motionName:`${b}-fade`}}},85270:function(Z,g,e){var n=e(73203);Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var M=n(e(22313)),b=g.default=M.default},33527:function(Z,g,e){var n=e(73203);Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var M=n(e(10792)),b=g.default=M.default},22313:function(Z,g,e){var n=e(73203);Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var M=n(e(91412)),b=n(e(14339));const h={lang:Object.assign({placeholder:"Select date",yearPlaceholder:"Select year",quarterPlaceholder:"Select quarter",monthPlaceholder:"Select month",weekPlaceholder:"Select week",rangePlaceholder:["Start date","End date"],rangeYearPlaceholder:["Start year","End year"],rangeQuarterPlaceholder:["Start quarter","End quarter"],rangeMonthPlaceholder:["Start month","End month"],rangeWeekPlaceholder:["Start week","End week"]},M.default),timePickerLocale:Object.assign({},b.default)};var E=g.default=h},10792:function(Z,g,e){var n=e(73203);Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var M=n(e(71480)),b=n(e(47071));const h={lang:Object.assign({placeholder:"\u8BF7\u9009\u62E9\u65E5\u671F",yearPlaceholder:"\u8BF7\u9009\u62E9\u5E74\u4EFD",quarterPlaceholder:"\u8BF7\u9009\u62E9\u5B63\u5EA6",monthPlaceholder:"\u8BF7\u9009\u62E9\u6708\u4EFD",weekPlaceholder:"\u8BF7\u9009\u62E9\u5468",rangePlaceholder:["\u5F00\u59CB\u65E5\u671F","\u7ED3\u675F\u65E5\u671F"],rangeYearPlaceholder:["\u5F00\u59CB\u5E74\u4EFD","\u7ED3\u675F\u5E74\u4EFD"],rangeMonthPlaceholder:["\u5F00\u59CB\u6708\u4EFD","\u7ED3\u675F\u6708\u4EFD"],rangeQuarterPlaceholder:["\u5F00\u59CB\u5B63\u5EA6","\u7ED3\u675F\u5B63\u5EA6"],rangeWeekPlaceholder:["\u5F00\u59CB\u5468","\u7ED3\u675F\u5468"]},M.default),timePickerLocale:Object.assign({},b.default)};h.lang.ok="\u786E\u5B9A";var E=g.default=h},75183:function(Z,g,e){var n,M=e(73203);n={value:!0},g.Z=void 0;var b=M(e(51367)),h=M(e(85270)),E=M(e(22313)),O=M(e(14339));const s="${label} is not a valid ${type}",t={locale:"en",Pagination:b.default,DatePicker:E.default,TimePicker:O.default,Calendar:h.default,global:{placeholder:"Please select"},Table:{filterTitle:"Filter menu",filterConfirm:"OK",filterReset:"Reset",filterEmptyText:"No filters",filterCheckall:"Select all items",filterSearchPlaceholder:"Search in filters",emptyText:"No data",selectAll:"Select current page",selectInvert:"Invert current page",selectNone:"Clear all data",selectionAll:"Select all data",sortTitle:"Sort",expand:"Expand row",collapse:"Collapse row",triggerDesc:"Click to sort descending",triggerAsc:"Click to sort ascending",cancelSort:"Click to cancel sorting"},Tour:{Next:"Next",Previous:"Previous",Finish:"Finish"},Modal:{okText:"OK",cancelText:"Cancel",justOkText:"OK"},Popconfirm:{okText:"OK",cancelText:"Cancel"},Transfer:{titles:["",""],searchPlaceholder:"Search here",itemUnit:"item",itemsUnit:"items",remove:"Remove",selectCurrent:"Select current page",removeCurrent:"Remove current page",selectAll:"Select all data",removeAll:"Remove all data",selectInvert:"Invert current page"},Upload:{uploading:"Uploading...",removeFile:"Remove file",uploadError:"Upload error",previewFile:"Preview file",downloadFile:"Download file"},Empty:{description:"No data"},Icon:{icon:"icon"},Text:{edit:"Edit",copy:"Copy",copied:"Copied",expand:"Expand"},Form:{optional:"(optional)",defaultValidateMessages:{default:"Field validation error for ${label}",required:"Please enter ${label}",enum:"${label} must be one of [${enum}]",whitespace:"${label} cannot be a blank character",date:{format:"${label} date format is invalid",parse:"${label} cannot be converted to a date",invalid:"${label} is an invalid date"},types:{string:s,method:s,array:s,object:s,number:s,date:s,boolean:s,integer:s,float:s,regexp:s,email:s,url:s,hex:s},string:{len:"${label} must be ${len} characters",min:"${label} must be at least ${min} characters",max:"${label} must be up to ${max} characters",range:"${label} must be between ${min}-${max} characters"},number:{len:"${label} must be equal to ${len}",min:"${label} must be minimum ${min}",max:"${label} must be maximum ${max}",range:"${label} must be between ${min}-${max}"},array:{len:"Must be ${len} ${label}",min:"At least ${min} ${label}",max:"At most ${max} ${label}",range:"The amount of ${label} must be between ${min}-${max}"},pattern:{mismatch:"${label} does not match the pattern ${pattern}"}}},Image:{preview:"Preview"},QRCode:{expired:"QR code expired",refresh:"Refresh",scanned:"Scanned"},ColorPicker:{presetEmpty:"Empty"}};var o=g.Z=t},81107:function(Z,g,e){var n,M=e(73203);n={value:!0},g.Z=void 0;var b=M(e(95160)),h=M(e(33527)),E=M(e(10792)),O=M(e(47071));const s="${label}\u4E0D\u662F\u4E00\u4E2A\u6709\u6548\u7684${type}",t={locale:"zh-cn",Pagination:b.default,DatePicker:E.default,TimePicker:O.default,Calendar:h.default,global:{placeholder:"\u8BF7\u9009\u62E9"},Table:{filterTitle:"\u7B5B\u9009",filterConfirm:"\u786E\u5B9A",filterReset:"\u91CD\u7F6E",filterEmptyText:"\u65E0\u7B5B\u9009\u9879",filterCheckall:"\u5168\u9009",filterSearchPlaceholder:"\u5728\u7B5B\u9009\u9879\u4E2D\u641C\u7D22",selectAll:"\u5168\u9009\u5F53\u9875",selectInvert:"\u53CD\u9009\u5F53\u9875",selectNone:"\u6E05\u7A7A\u6240\u6709",selectionAll:"\u5168\u9009\u6240\u6709",sortTitle:"\u6392\u5E8F",expand:"\u5C55\u5F00\u884C",collapse:"\u5173\u95ED\u884C",triggerDesc:"\u70B9\u51FB\u964D\u5E8F",triggerAsc:"\u70B9\u51FB\u5347\u5E8F",cancelSort:"\u53D6\u6D88\u6392\u5E8F"},Modal:{okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",justOkText:"\u77E5\u9053\u4E86"},Tour:{Next:"\u4E0B\u4E00\u6B65",Previous:"\u4E0A\u4E00\u6B65",Finish:"\u7ED3\u675F\u5BFC\u89C8"},Popconfirm:{cancelText:"\u53D6\u6D88",okText:"\u786E\u5B9A"},Transfer:{titles:["",""],searchPlaceholder:"\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",itemUnit:"\u9879",itemsUnit:"\u9879",remove:"\u5220\u9664",selectCurrent:"\u5168\u9009\u5F53\u9875",removeCurrent:"\u5220\u9664\u5F53\u9875",selectAll:"\u5168\u9009\u6240\u6709",removeAll:"\u5220\u9664\u5168\u90E8",selectInvert:"\u53CD\u9009\u5F53\u9875"},Upload:{uploading:"\u6587\u4EF6\u4E0A\u4F20\u4E2D",removeFile:"\u5220\u9664\u6587\u4EF6",uploadError:"\u4E0A\u4F20\u9519\u8BEF",previewFile:"\u9884\u89C8\u6587\u4EF6",downloadFile:"\u4E0B\u8F7D\u6587\u4EF6"},Empty:{description:"\u6682\u65E0\u6570\u636E"},Icon:{icon:"\u56FE\u6807"},Text:{edit:"\u7F16\u8F91",copy:"\u590D\u5236",copied:"\u590D\u5236\u6210\u529F",expand:"\u5C55\u5F00"},Form:{optional:"\uFF08\u53EF\u9009\uFF09",defaultValidateMessages:{default:"\u5B57\u6BB5\u9A8C\u8BC1\u9519\u8BEF${label}",required:"\u8BF7\u8F93\u5165${label}",enum:"${label}\u5FC5\u987B\u662F\u5176\u4E2D\u4E00\u4E2A[${enum}]",whitespace:"${label}\u4E0D\u80FD\u4E3A\u7A7A\u5B57\u7B26",date:{format:"${label}\u65E5\u671F\u683C\u5F0F\u65E0\u6548",parse:"${label}\u4E0D\u80FD\u8F6C\u6362\u4E3A\u65E5\u671F",invalid:"${label}\u662F\u4E00\u4E2A\u65E0\u6548\u65E5\u671F"},types:{string:s,method:s,array:s,object:s,number:s,date:s,boolean:s,integer:s,float:s,regexp:s,email:s,url:s,hex:s},string:{len:"${label}\u987B\u4E3A${len}\u4E2A\u5B57\u7B26",min:"${label}\u6700\u5C11${min}\u4E2A\u5B57\u7B26",max:"${label}\u6700\u591A${max}\u4E2A\u5B57\u7B26",range:"${label}\u987B\u5728${min}-${max}\u5B57\u7B26\u4E4B\u95F4"},number:{len:"${label}\u5FC5\u987B\u7B49\u4E8E${len}",min:"${label}\u6700\u5C0F\u503C\u4E3A${min}",max:"${label}\u6700\u5927\u503C\u4E3A${max}",range:"${label}\u987B\u5728${min}-${max}\u4E4B\u95F4"},array:{len:"\u987B\u4E3A${len}\u4E2A${label}",min:"\u6700\u5C11${min}\u4E2A${label}",max:"\u6700\u591A${max}\u4E2A${label}",range:"${label}\u6570\u91CF\u987B\u5728${min}-${max}\u4E4B\u95F4"},pattern:{mismatch:"${label}\u4E0E\u6A21\u5F0F\u4E0D\u5339\u914D${pattern}"}}},Image:{preview:"\u9884\u89C8"},QRCode:{expired:"\u4E8C\u7EF4\u7801\u8FC7\u671F",refresh:"\u70B9\u51FB\u5237\u65B0",scanned:"\u5DF2\u626B\u63CF"},ColorPicker:{presetEmpty:"\u6682\u65E0"}};var o=g.Z=t},14339:function(Z,g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;const e={placeholder:"Select time",rangePlaceholder:["Start time","End time"]};var n=g.default=e},47071:function(Z,g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;const e={placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",rangePlaceholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"]};var n=g.default=e},67764:function(Z,g,e){var n=e(50189),M=e(66886),b=e(56637),h=e(99664),E=e(27378),O=e(71747),s=e(12746),t=e(89882),o=function(l){var r=l.open,c=r===void 0?!1:r,y=l.prefixCls,a=y===void 0?"rc-drawer":y,f=l.placement,d=f===void 0?"right":f,x=l.autoFocus,v=x===void 0?!0:x,P=l.keyboard,u=P===void 0?!0:P,m=l.width,p=m===void 0?378:m,_=l.mask,D=_===void 0?!0:_,w=l.maskClosable,N=w===void 0?!0:w,K=l.getContainer,T=l.forceRender,k=l.afterOpenChange,L=l.destroyOnClose,$=l.onMouseEnter,I=l.onMouseOver,A=l.onMouseLeave,S=l.onClick,B=l.onKeyDown,U=l.onKeyUp,J=l.panelRef,Y=E.useState(!1),ae=(0,M.Z)(Y,2),Q=ae[0],z=ae[1],V=E.useState(!1),ue=(0,M.Z)(V,2),we=ue[0],Ie=ue[1];(0,h.Z)(function(){Ie(!0)},[]);var le=we?c:!1,Pe=E.useRef(),X=E.useRef();(0,h.Z)(function(){le&&(X.current=document.activeElement)},[le]);var fe=function(se){var ge;if(z(se),k?.(se),!se&&X.current&&!((ge=Pe.current)!==null&&ge!==void 0&&ge.contains(X.current))){var xe;(xe=X.current)===null||xe===void 0||xe.focus({preventScroll:!0})}},ve=E.useMemo(function(){return{panel:J}},[J]);if(!T&&!Q&&!le&&L)return null;var pe={onMouseEnter:$,onMouseOver:I,onMouseLeave:A,onClick:S,onKeyDown:B,onKeyUp:U},G=(0,n.Z)((0,n.Z)({},l),{},{open:le,prefixCls:a,placement:d,autoFocus:v,keyboard:u,width:p,mask:D,maskClosable:N,inline:K===!1,afterOpenChange:fe,ref:Pe},pe);return E.createElement(O.C.Provider,{value:ve},E.createElement(b.Z,{open:le||T||Q,autoDestroy:!1,getContainer:K,autoLock:D&&(le||Q)},E.createElement(s.Z,G)))};g.Z=o},53864:function(Z,g,e){var n=e(25773),M=e(50189),b=e(60042),h=e.n(b),E=e(11815),O=e(27378),s=e(71747),t=function(i){var l=i.prefixCls,r=i.className,c=i.style,y=i.children,a=i.containerRef,f=i.id,d=i.onMouseEnter,x=i.onMouseOver,v=i.onMouseLeave,P=i.onClick,u=i.onKeyDown,m=i.onKeyUp,p={onMouseEnter:d,onMouseOver:x,onMouseLeave:v,onClick:P,onKeyDown:u,onKeyUp:m},_=O.useContext(s.C),D=_.panel,w=(0,E.x1)(D,a);return O.createElement(O.Fragment,null,O.createElement("div",(0,n.Z)({id:f,className:h()("".concat(l,"-content"),r),style:(0,M.Z)({},c),"aria-modal":"true",role:"dialog",ref:w},p),y))};g.Z=t},12746:function(Z,g,e){var n=e(64649),M=e(25773),b=e(50189),h=e(66886),E=e(60042),O=e.n(E),s=e(7821),t=e(78730),o=e(91864),i=e(27378),l=e(71747),r=e(53864),c=e(89882),y={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function a(d,x){var v,P,u,m=d.prefixCls,p=d.open,_=d.placement,D=d.inline,w=d.push,N=d.forceRender,K=d.autoFocus,T=d.keyboard,k=d.classNames,L=d.rootClassName,$=d.rootStyle,I=d.zIndex,A=d.className,S=d.id,B=d.style,U=d.motion,J=d.width,Y=d.height,ae=d.children,Q=d.mask,z=d.maskClosable,V=d.maskMotion,ue=d.maskClassName,we=d.maskStyle,Ie=d.afterOpenChange,le=d.onClose,Pe=d.onMouseEnter,X=d.onMouseOver,fe=d.onMouseLeave,ve=d.onClick,pe=d.onKeyDown,G=d.onKeyUp,ie=d.styles,se=i.useRef(),ge=i.useRef(),xe=i.useRef();i.useImperativeHandle(x,function(){return se.current});var ye=function(ce){var Oe=ce.keyCode,Re=ce.shiftKey;switch(Oe){case t.Z.TAB:{if(Oe===t.Z.TAB){if(!Re&&document.activeElement===xe.current){var Me;(Me=ge.current)===null||Me===void 0||Me.focus({preventScroll:!0})}else if(Re&&document.activeElement===ge.current){var Le;(Le=xe.current)===null||Le===void 0||Le.focus({preventScroll:!0})}}break}case t.Z.ESC:{le&&T&&(ce.stopPropagation(),le(ce));break}}};i.useEffect(function(){if(p&&K){var q;(q=se.current)===null||q===void 0||q.focus({preventScroll:!0})}},[p]);var be=i.useState(!1),je=(0,h.Z)(be,2),Te=je[0],_e=je[1],oe=i.useContext(l.Z),Ae;w===!1?Ae={distance:0}:w===!0?Ae={}:Ae=w||{};var me=(v=(P=(u=Ae)===null||u===void 0?void 0:u.distance)!==null&&P!==void 0?P:oe?.pushDistance)!==null&&v!==void 0?v:180,Se=i.useMemo(function(){return{pushDistance:me,push:function(){_e(!0)},pull:function(){_e(!1)}}},[me]);i.useEffect(function(){if(p){var q;oe==null||(q=oe.push)===null||q===void 0||q.call(oe)}else{var ce;oe==null||(ce=oe.pull)===null||ce===void 0||ce.call(oe)}},[p]),i.useEffect(function(){return function(){var q;oe==null||(q=oe.pull)===null||q===void 0||q.call(oe)}},[]);var re=Q&&i.createElement(s.ZP,(0,M.Z)({key:"mask"},V,{visible:p}),function(q,ce){var Oe=q.className,Re=q.style;return i.createElement("div",{className:O()("".concat(m,"-mask"),Oe,k?.mask,ue),style:(0,b.Z)((0,b.Z)((0,b.Z)({},Re),we),ie?.mask),onClick:z&&p?le:void 0,ref:ce})}),Ne=typeof U=="function"?U(_):U,$e={};if(Te&&me)switch(_){case"top":$e.transform="translateY(".concat(me,"px)");break;case"bottom":$e.transform="translateY(".concat(-me,"px)");break;case"left":$e.transform="translateX(".concat(me,"px)");break;default:$e.transform="translateX(".concat(-me,"px)");break}_==="left"||_==="right"?$e.width=(0,c.E)(J):$e.height=(0,c.E)(Y);var Ue={onMouseEnter:Pe,onMouseOver:X,onMouseLeave:fe,onClick:ve,onKeyDown:pe,onKeyUp:G},Be=i.createElement(s.ZP,(0,M.Z)({key:"panel"},Ne,{visible:p,forceRender:N,onVisibleChanged:function(ce){Ie?.(ce)},removeOnLeave:!1,leavedClassName:"".concat(m,"-content-wrapper-hidden")}),function(q,ce){var Oe=q.className,Re=q.style;return i.createElement("div",(0,M.Z)({className:O()("".concat(m,"-content-wrapper"),k?.wrapper,Oe),style:(0,b.Z)((0,b.Z)((0,b.Z)({},$e),Re),ie?.wrapper)},(0,o.Z)(d,{data:!0})),i.createElement(r.Z,(0,M.Z)({id:S,containerRef:ce,prefixCls:m,className:O()(A,k?.content),style:(0,b.Z)((0,b.Z)({},B),ie?.content)},Ue),ae))}),Ze=(0,b.Z)({},$);return I&&(Ze.zIndex=I),i.createElement(l.Z.Provider,{value:Se},i.createElement("div",{className:O()(m,"".concat(m,"-").concat(_),L,(0,n.Z)((0,n.Z)({},"".concat(m,"-open"),p),"".concat(m,"-inline"),D)),style:Ze,tabIndex:-1,ref:se,onKeyDown:ye},re,i.createElement("div",{tabIndex:0,ref:ge,style:y,"aria-hidden":"true","data-sentinel":"start"}),Be,i.createElement("div",{tabIndex:0,ref:xe,style:y,"aria-hidden":"true","data-sentinel":"end"})))}var f=i.forwardRef(a);g.Z=f},71747:function(Z,g,e){e.d(g,{C:function(){return b}});var n=e(27378),M=n.createContext(null),b=n.createContext({});g.Z=M},51924:function(Z,g,e){var n=e(67764);g.Z=n.Z},89882:function(Z,g,e){e.d(g,{E:function(){return M}});var n=e(74485);function M(h){return typeof h=="string"&&String(Number(h))===h?((0,n.ZP)(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(h)):h}function b(h){warning(!("wrapperClassName"in h),"'wrapperClassName' is removed. Please use 'rootClassName' instead."),warning(canUseDom()||!h.open,"Drawer with 'open' in SSR is not work since no place to createPortal. Please move to 'useEffect' instead.")}},12865:function(Z,g,e){var n=e(25773),M=e(64649),b=e(66886),h=e(60042),E=e.n(h),O=e(78730),s=e(27378),t=s.forwardRef(function(o,i){var l=o.prefixCls,r=o.style,c=o.className,y=o.duration,a=y===void 0?4.5:y,f=o.eventKey,d=o.content,x=o.closable,v=o.closeIcon,P=v===void 0?"x":v,u=o.props,m=o.onClick,p=o.onNoticeClose,_=o.times,D=o.hovering,w=s.useState(!1),N=(0,b.Z)(w,2),K=N[0],T=N[1],k=D||K,L=function(){p(f)},$=function(S){(S.key==="Enter"||S.code==="Enter"||S.keyCode===O.Z.ENTER)&&L()};s.useEffect(function(){if(!k&&a>0){var A=setTimeout(function(){L()},a*1e3);return function(){clearTimeout(A)}}},[a,k,_]);var I="".concat(l,"-notice");return s.createElement("div",(0,n.Z)({},u,{ref:i,className:E()(I,c,(0,M.Z)({},"".concat(I,"-closable"),x)),style:r,onMouseEnter:function(S){var B;T(!0),u==null||(B=u.onMouseEnter)===null||B===void 0||B.call(u,S)},onMouseLeave:function(S){var B;T(!1),u==null||(B=u.onMouseLeave)===null||B===void 0||B.call(u,S)},onClick:m}),s.createElement("div",{className:"".concat(I,"-content")},d),x&&s.createElement("a",{tabIndex:0,className:"".concat(I,"-close"),onKeyDown:$,onClick:function(S){S.preventDefault(),S.stopPropagation(),L()}},P))});g.Z=t},62067:function(Z,g,e){var n=e(25773),M=e(90228),b=e(50189),h=e(53782),E=e(64649),O=e(66886),s=e(27378),t=e(60042),o=e.n(t),i=e(7821),l=e(12865),r=e(54445),c=e(27063),y=["className","style","classNames","styles"],a=function(d){var x,v=d.configList,P=d.placement,u=d.prefixCls,m=d.className,p=d.style,_=d.motion,D=d.onAllNoticeRemoved,w=d.onNoticeClose,N=d.stack,K=(0,s.useContext)(r.u),T=K.classNames,k=(0,s.useRef)({}),L=(0,s.useState)(null),$=(0,O.Z)(L,2),I=$[0],A=$[1],S=(0,s.useState)([]),B=(0,O.Z)(S,2),U=B[0],J=B[1],Y=v.map(function(X){return{config:X,key:String(X.key)}}),ae=(0,c.Z)(N),Q=(0,O.Z)(ae,2),z=Q[0],V=Q[1],ue=V.offset,we=V.threshold,Ie=V.gap,le=z&&(U.length>0||Y.length<=we),Pe=typeof _=="function"?_(P):_;return(0,s.useEffect)(function(){z&&U.length>1&&J(function(X){return X.filter(function(fe){return Y.some(function(ve){var pe=ve.key;return fe===pe})})})},[U,Y,z]),(0,s.useEffect)(function(){var X;if(z&&k.current[(X=Y[Y.length-1])===null||X===void 0?void 0:X.key]){var fe;A(k.current[(fe=Y[Y.length-1])===null||fe===void 0?void 0:fe.key])}},[Y,z]),s.createElement(i.V4,(0,n.Z)({key:P,className:o()(u,"".concat(u,"-").concat(P),T?.list,m,(x={},(0,E.Z)(x,"".concat(u,"-stack"),!!z),(0,E.Z)(x,"".concat(u,"-stack-expanded"),le),x)),style:p,keys:Y,motionAppear:!0},Pe,{onAllRemoved:function(){D(P)}}),function(X,fe){var ve=X.config,pe=X.className,G=X.style,ie=X.index,se=ve,ge=se.key,xe=se.times,ye=String(ge),be=ve,je=be.className,Te=be.style,_e=be.classNames,oe=be.styles,Ae=(0,h.Z)(be,y),me=Y.findIndex(function(Me){return Me.key===ye}),Se={};if(z){var re=Y.length-1-(me>-1?me:ie-1),Ne=P==="top"||P==="bottom"?"-50%":"0";if(re>0){var $e,Ue,Be;Se.height=le?($e=k.current[ye])===null||$e===void 0?void 0:$e.offsetHeight:I?.offsetHeight;for(var Ze=0,q=0;q<re;q++){var ce;Ze+=((ce=k.current[Y[Y.length-1-q].key])===null||ce===void 0?void 0:ce.offsetHeight)+Ie}var Oe=(le?Ze:re*ue)*(P.startsWith("top")?1:-1),Re=!le&&I!==null&&I!==void 0&&I.offsetWidth&&(Ue=k.current[ye])!==null&&Ue!==void 0&&Ue.offsetWidth?(I?.offsetWidth-ue*2*(re<3?re:3))/((Be=k.current[ye])===null||Be===void 0?void 0:Be.offsetWidth):1;Se.transform="translate3d(".concat(Ne,", ").concat(Oe,"px, 0) scaleX(").concat(Re,")")}else Se.transform="translate3d(".concat(Ne,", 0, 0)")}return s.createElement("div",{ref:fe,className:o()("".concat(u,"-notice-wrapper"),pe,_e?.wrapper),style:(0,b.Z)((0,b.Z)((0,b.Z)({},G),Se),oe?.wrapper),onMouseEnter:function(){return J(function(Le){return Le.includes(ye)?Le:[].concat((0,M.Z)(Le),[ye])})},onMouseLeave:function(){return J(function(Le){return Le.filter(function(nt){return nt!==ye})})}},s.createElement(l.Z,(0,n.Z)({},Ae,{ref:function(Le){me>-1?k.current[ye]=Le:delete k.current[ye]},prefixCls:u,classNames:_e,styles:oe,className:o()(je,T?.notice),style:Te,times:xe,key:ge,eventKey:ge,onNoticeClose:w,hovering:z&&U.length>0})))})};g.Z=a},54445:function(Z,g,e){e.d(g,{u:function(){return M}});var n=e(27378),M=n.createContext({}),b=function(E){var O=E.children,s=E.classNames;return n.createElement(M.Provider,{value:{classNames:s}},O)};g.Z=b},66992:function(Z,g,e){var n=e(50189),M=e(90228),b=e(66886),h=e(27378),E=e(31542),O=e(62067),s=h.forwardRef(function(t,o){var i=t.prefixCls,l=i===void 0?"rc-notification":i,r=t.container,c=t.motion,y=t.maxCount,a=t.className,f=t.style,d=t.onAllRemoved,x=t.stack,v=t.renderNotifications,P=h.useState([]),u=(0,b.Z)(P,2),m=u[0],p=u[1],_=function(I){var A,S=m.find(function(B){return B.key===I});S==null||(A=S.onClose)===null||A===void 0||A.call(S),p(function(B){return B.filter(function(U){return U.key!==I})})};h.useImperativeHandle(o,function(){return{open:function(I){p(function(A){var S=(0,M.Z)(A),B=S.findIndex(function(Y){return Y.key===I.key}),U=(0,n.Z)({},I);if(B>=0){var J;U.times=(((J=A[B])===null||J===void 0?void 0:J.times)||0)+1,S[B]=U}else U.times=0,S.push(U);return y>0&&S.length>y&&(S=S.slice(-y)),S})},close:function(I){_(I)},destroy:function(){p([])}}});var D=h.useState({}),w=(0,b.Z)(D,2),N=w[0],K=w[1];h.useEffect(function(){var $={};m.forEach(function(I){var A=I.placement,S=A===void 0?"topRight":A;S&&($[S]=$[S]||[],$[S].push(I))}),Object.keys(N).forEach(function(I){$[I]=$[I]||[]}),K($)},[m]);var T=function(I){K(function(A){var S=(0,n.Z)({},A),B=S[I]||[];return B.length||delete S[I],S})},k=h.useRef(!1);if(h.useEffect(function(){Object.keys(N).length>0?k.current=!0:k.current&&(d?.(),k.current=!1)},[N]),!r)return null;var L=Object.keys(N);return(0,E.createPortal)(h.createElement(h.Fragment,null,L.map(function($){var I=N[$],A=h.createElement(O.Z,{key:$,configList:I,placement:$,prefixCls:l,className:a?.($),style:f?.($),motion:c,onNoticeClose:_,onAllNoticeRemoved:T,stack:x});return v?v(A,{prefixCls:l,key:$}):A})),r)});g.Z=s},44235:function(Z,g,e){e.d(g,{Z:function(){return i}});var n=e(90228),M=e(66886),b=e(53782),h=e(27378),E=e(66992),O=["getContainer","motion","prefixCls","maxCount","className","style","onAllRemoved","stack","renderNotifications"],s=function(){return document.body},t=0;function o(){for(var l={},r=arguments.length,c=new Array(r),y=0;y<r;y++)c[y]=arguments[y];return c.forEach(function(a){a&&Object.keys(a).forEach(function(f){var d=a[f];d!==void 0&&(l[f]=d)})}),l}function i(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=l.getContainer,c=r===void 0?s:r,y=l.motion,a=l.prefixCls,f=l.maxCount,d=l.className,x=l.style,v=l.onAllRemoved,P=l.stack,u=l.renderNotifications,m=(0,b.Z)(l,O),p=h.useState(),_=(0,M.Z)(p,2),D=_[0],w=_[1],N=h.useRef(),K=h.createElement(E.Z,{container:D,ref:N,prefixCls:a,motion:y,maxCount:f,className:d,style:x,onAllRemoved:v,stack:P,renderNotifications:u}),T=h.useState([]),k=(0,M.Z)(T,2),L=k[0],$=k[1],I=h.useMemo(function(){return{open:function(S){var B=o(m,S);(B.key===null||B.key===void 0)&&(B.key="rc-notification-".concat(t),t+=1),$(function(U){return[].concat((0,n.Z)(U),[{type:"open",config:B}])})},close:function(S){$(function(B){return[].concat((0,n.Z)(B),[{type:"close",key:S}])})},destroy:function(){$(function(S){return[].concat((0,n.Z)(S),[{type:"destroy"}])})}}},[]);return h.useEffect(function(){w(c())}),h.useEffect(function(){N.current&&L.length&&(L.forEach(function(A){switch(A.type){case"open":N.current.open(A.config);break;case"close":N.current.close(A.key);break;case"destroy":N.current.destroy();break}}),$(function(A){return A.filter(function(S){return!L.includes(S)})}))},[L]),[I,K]}},27063:function(Z,g,e){var n=e(33940),M=8,b=3,h=16,E=function(s){var t={offset:M,threshold:b,gap:h};if(s&&(0,n.Z)(s)==="object"){var o,i,l;t.offset=(o=s.offset)!==null&&o!==void 0?o:M,t.threshold=(i=s.threshold)!==null&&i!==void 0?i:b,t.gap=(l=s.gap)!==null&&l!==void 0?l:h}return[!!s,t]};g.Z=E},48600:function(Z,g,e){e.d(g,{JB:function(){return b.Z},lm:function(){return n.Z}});var n=e(44235),M=e(12865),b=e(54445)},51367:function(Z,g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var e={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},n=g.default=e},95160:function(Z,g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var e={items_per_page:"\u6761/\u9875",jump_to:"\u8DF3\u81F3",jump_to_confirm:"\u786E\u5B9A",page:"\u9875",prev_page:"\u4E0A\u4E00\u9875",next_page:"\u4E0B\u4E00\u9875",prev_5:"\u5411\u524D 5 \u9875",next_5:"\u5411\u540E 5 \u9875",prev_3:"\u5411\u524D 3 \u9875",next_3:"\u5411\u540E 3 \u9875",page_size:"\u9875\u7801"},n=g.default=e},91412:function(Z,g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var e={locale:"en_US",today:"Today",now:"Now",backToToday:"Back to today",ok:"OK",clear:"Clear",month:"Month",year:"Year",timeSelect:"select time",dateSelect:"select date",weekSelect:"Choose a week",monthSelect:"Choose a month",yearSelect:"Choose a year",decadeSelect:"Choose a decade",yearFormat:"YYYY",dateFormat:"M/D/YYYY",dayFormat:"D",dateTimeFormat:"M/D/YYYY HH:mm:ss",monthBeforeYear:!0,previousMonth:"Previous month (PageUp)",nextMonth:"Next month (PageDown)",previousYear:"Last year (Control + left)",nextYear:"Next year (Control + right)",previousDecade:"Last decade",nextDecade:"Next decade",previousCentury:"Last century",nextCentury:"Next century"},n=g.default=e},71480:function(Z,g){Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var e={locale:"zh_CN",today:"\u4ECA\u5929",now:"\u6B64\u523B",backToToday:"\u8FD4\u56DE\u4ECA\u5929",ok:"\u786E\u5B9A",timeSelect:"\u9009\u62E9\u65F6\u95F4",dateSelect:"\u9009\u62E9\u65E5\u671F",weekSelect:"\u9009\u62E9\u5468",clear:"\u6E05\u9664",month:"\u6708",year:"\u5E74",previousMonth:"\u4E0A\u4E2A\u6708 (\u7FFB\u9875\u4E0A\u952E)",nextMonth:"\u4E0B\u4E2A\u6708 (\u7FFB\u9875\u4E0B\u952E)",monthSelect:"\u9009\u62E9\u6708\u4EFD",yearSelect:"\u9009\u62E9\u5E74\u4EFD",decadeSelect:"\u9009\u62E9\u5E74\u4EE3",yearFormat:"YYYY\u5E74",dayFormat:"D\u65E5",dateFormat:"YYYY\u5E74M\u6708D\u65E5",dateTimeFormat:"YYYY\u5E74M\u6708D\u65E5 HH\u65F6mm\u5206ss\u79D2",previousYear:"\u4E0A\u4E00\u5E74 (Control\u952E\u52A0\u5DE6\u65B9\u5411\u952E)",nextYear:"\u4E0B\u4E00\u5E74 (Control\u952E\u52A0\u53F3\u65B9\u5411\u952E)",previousDecade:"\u4E0A\u4E00\u5E74\u4EE3",nextDecade:"\u4E0B\u4E00\u5E74\u4EE3",previousCentury:"\u4E0A\u4E00\u4E16\u7EAA",nextCentury:"\u4E0B\u4E00\u4E16\u7EAA"},n=g.default=e},73203:function(Z){function g(e){return e&&e.__esModule?e:{default:e}}Z.exports=g,Z.exports.__esModule=!0,Z.exports.default=Z.exports},76290:function(Z,g,e){var n;e.d(g,{Z:function(){return s}});var M=e(27378),b={942:(t,o,i)=>{i.d(o,{Z:()=>f});var l=i(601),r=i.n(l),c=i(609),y=i.n(c),a=y()(r());a.push([t.id,`.node-right-icon-close {
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
`,""]),a.locals={};const f=a},84:(t,o,i)=>{i.d(o,{Z:()=>f});var l=i(601),r=i.n(l),c=i(609),y=i.n(c),a=y()(r());a.push([t.id,`.footer {
  height: var(--footerHeight);
  line-height: var(--footerHeight);
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, 0.06);
  margin: 0 auto;
  max-width: var(--maxWidth);
}
`,""]),a.locals={};const f=a},91:(t,o,i)=>{i.d(o,{Z:()=>f});var l=i(601),r=i.n(l),c=i(609),y=i.n(c),a=y()(r());a.push([t.id,`.frame {
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
`,""]),a.locals={};const f=a},505:(t,o,i)=>{i.d(o,{Z:()=>f});var l=i(601),r=i.n(l),c=i(609),y=i.n(c),a=y()(r());a.push([t.id,`.clear::after {
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
`,""]),a.locals={};const f=a},675:(t,o,i)=>{i.d(o,{Z:()=>f});var l=i(601),r=i.n(l),c=i(609),y=i.n(c),a=y()(r());a.push([t.id,`@keyframes ani-fade-in {
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
`,""]),a.locals={};const f=a},609:t=>{t.exports=function(o){var i=[];return i.toString=function(){return this.map(function(l){var r="",c=typeof l[5]<"u";return l[4]&&(r+="@supports (".concat(l[4],") {")),l[2]&&(r+="@media ".concat(l[2]," {")),c&&(r+="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {")),r+=o(l),c&&(r+="}"),l[2]&&(r+="}"),l[4]&&(r+="}"),r}).join("")},i.i=function(l,r,c,y,a){typeof l=="string"&&(l=[[null,l,void 0]]);var f={};if(c)for(var d=0;d<this.length;d++){var x=this[d][0];x!=null&&(f[x]=!0)}for(var v=0;v<l.length;v++){var P=[].concat(l[v]);c&&f[P[0]]||(typeof a<"u"&&(typeof P[5]>"u"||(P[1]="@layer".concat(P[5].length>0?" ".concat(P[5]):""," {").concat(P[1],"}")),P[5]=a),r&&(P[2]&&(P[1]="@media ".concat(P[2]," {").concat(P[1],"}")),P[2]=r),y&&(P[4]?(P[1]="@supports (".concat(P[4],") {").concat(P[1],"}"),P[4]=y):P[4]="".concat(y)),i.push(P))}},i}},601:t=>{t.exports=function(o){return o[1]}},837:(t,o,i)=>{var l=i(810),r=Symbol.for("react.element"),c=Symbol.for("react.fragment"),y=Object.prototype.hasOwnProperty,a=l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function d(x,v,P){var u,m={},p=null,_=null;P!==void 0&&(p=""+P),v.key!==void 0&&(p=""+v.key),v.ref!==void 0&&(_=v.ref);for(u in v)y.call(v,u)&&!f.hasOwnProperty(u)&&(m[u]=v[u]);if(x&&x.defaultProps)for(u in v=x.defaultProps,v)m[u]===void 0&&(m[u]=v[u]);return{$$typeof:r,type:x,key:p,ref:_,props:m,_owner:a.current}}o.Fragment=c,o.jsx=d,o.jsxs=d},322:(t,o,i)=>{t.exports=i(837)},62:t=>{var o=[];function i(c){for(var y=-1,a=0;a<o.length;a++)if(o[a].identifier===c){y=a;break}return y}function l(c,y){for(var a={},f=[],d=0;d<c.length;d++){var x=c[d],v=y.base?x[0]+y.base:x[0],P=a[v]||0,u="".concat(v," ").concat(P);a[v]=P+1;var m=i(u),p={css:x[1],media:x[2],sourceMap:x[3],supports:x[4],layer:x[5]};if(m!==-1)o[m].references++,o[m].updater(p);else{var _=r(p,y);y.byIndex=d,o.splice(d,0,{identifier:u,updater:_,references:1})}f.push(u)}return f}function r(c,y){var a=y.domAPI(y);a.update(c);var f=function(d){if(d){if(d.css===c.css&&d.media===c.media&&d.sourceMap===c.sourceMap&&d.supports===c.supports&&d.layer===c.layer)return;a.update(c=d)}else a.remove()};return f}t.exports=function(c,y){y=y||{},c=c||[];var a=l(c,y);return function(f){f=f||[];for(var d=0;d<a.length;d++){var x=a[d],v=i(x);o[v].references--}for(var P=l(f,y),u=0;u<a.length;u++){var m=a[u],p=i(m);o[p].references===0&&(o[p].updater(),o.splice(p,1))}a=P}}},793:t=>{var o={};function i(r){if(typeof o[r]>"u"){var c=document.querySelector(r);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch{c=null}o[r]=c}return o[r]}function l(r,c){var y=i(r);if(!y)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");y.appendChild(c)}t.exports=l},173:t=>{function o(i){var l=document.createElement("style");return i.setAttributes(l,i.attributes),i.insert(l,i.options),l}t.exports=o},892:(t,o,i)=>{function l(r){var c=i.nc;c&&r.setAttribute("nonce",c)}t.exports=l},36:t=>{function o(r,c,y){var a="";y.supports&&(a+="@supports (".concat(y.supports,") {")),y.media&&(a+="@media ".concat(y.media," {"));var f=typeof y.layer<"u";f&&(a+="@layer".concat(y.layer.length>0?" ".concat(y.layer):""," {")),a+=y.css,f&&(a+="}"),y.media&&(a+="}"),y.supports&&(a+="}");var d=y.sourceMap;d&&typeof btoa<"u"&&(a+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(d))))," */")),c.styleTagTransform(a,r,c.options)}function i(r){if(r.parentNode===null)return!1;r.parentNode.removeChild(r)}function l(r){if(typeof document>"u")return{update:function(){},remove:function(){}};var c=r.insertStyleElement(r);return{update:function(y){o(c,r,y)},remove:function(){i(c)}}}t.exports=l},464:t=>{function o(i,l){if(l.styleSheet)l.styleSheet.cssText=i;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(i))}}t.exports=o},810:t=>{var o=l=>{var r={};return E.d(r,l),r},i=l=>()=>l;t.exports=n||(n=e.t(M,2))}},h={};function E(t){var o=h[t];if(o!==void 0)return o.exports;var i=h[t]={id:t,exports:{}};return b[t](i,i.exports,E),i.exports}E.n=t=>{var o=t&&t.__esModule?()=>t.default:()=>t;return E.d(o,{a:o}),o},E.d=(t,o)=>{for(var i in o)E.o(o,i)&&!E.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:o[i]})},E.o=(t,o)=>Object.prototype.hasOwnProperty.call(t,o),E.nc=void 0;var O={};(()=>{E.d(O,{Z:()=>it});var t=E(322),o=E(810);const i=()=>![typeof window,typeof document].includes("undefined"),l=C=>Object.prototype.toString.call(C).slice(8,-1).toLowerCase(),r=C=>l(C).indexOf("element")>-1,c=(C=null)=>i()?r(C)?{width:C.clientWidth,height:C.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},y=(C={})=>{const R=(0,o.useRef)(0),[j,W]=(0,o.useState)(C),H=(0,o.useCallback)(F=>{cancelAnimationFrame(R.current),R.current=requestAnimationFrame(()=>W(F))},[]);return(0,o.useEffect)(()=>()=>cancelAnimationFrame(R.current),[]),[j,H]},a=()=>{const[C,R]=y(c());return(0,o.useEffect)(()=>{const j=()=>R(c());return window.addEventListener("resize",j,!1),()=>window.removeEventListener("resize",j,!1)},[]),C},f=C=>l(C)==="array",d=(C,R,j="id",W="children")=>{if(!f(C))return null;const H=F=>{for(let ee=0,de=F.length;ee<de;ee++){const ne=F[ee];if(ne[j]===R)return[ne];if(f(ne[W])){const he=H(ne[W]);if(he)return[ne].concat(he)}}};return H(C)},x=C=>++C,v=()=>{const[,C]=(0,o.useState)(0);return(0,o.useCallback)(()=>C(x),[])},P=C=>f(C)&&!!C.length,u=({to:C,preventDefault:R,stopPropagation:j,...W})=>R?(0,t.jsx)("span",{...W}):(0,t.jsx)("a",{href:C,...W}),m=({item:C,...R})=>(0,t.jsx)("ul",{...R}),p=(C,...R)=>{const j={};return Object.keys(C).filter(Boolean).map(W=>{j[W]=H=>C[W](H,...R)}),j},_=({data:C=[],events:R={},List:j=m,Link:W=u,leftIcon:H,rightIcon:F,isHorizontal:ee,isCollapsed:de,level:ne=0,parentOpen:he=!0})=>{const Ee=de&&!ne,ke=!ee&&!de&&!he;return C.map(te=>{const{name:De,path:Ce,icon:Fe,rightIcon:Ke,active:We,open:Ge,children:et,linkProps:Je}=te,ot=P(et),He=te.id||Ce||De,tt=Ee?te.title??De:void 0,Xe=ke?"hidden":"",Ye=Fe??H,ze=Ke??F,Qe=Ye?(0,t.jsx)("div",{className:"node-left-icon",children:Ye===!0?(0,t.jsx)("i",{className:"default-left-icon"}):Ye}):null,rt=De?(0,t.jsx)("div",{className:"node-text",children:(0,t.jsx)("span",{children:De})}):null;if(ot){const lt=p(R,te,ne),st=[Xe,Ge?"open":""].filter(Boolean).join(" ");return(0,t.jsxs)("li",{className:st,"has-children":"true",...lt,children:[(0,t.jsxs)(W,{title:tt,className:`link${We?" active":""}`,to:Ce,preventDefault:!0,stopPropagation:!1,...Je,children:[Qe,rt,ze?(0,t.jsx)("div",{className:"node-right-icon",children:ze===!0?(0,t.jsx)("i",{className:"default-right-icon"}):ze}):null]}),(0,t.jsx)(j,{item:te,children:_({data:et,events:R,List:j,Link:W,leftIcon:H,rightIcon:F,isHorizontal:ee,isCollapsed:de,level:ne+1,parentOpen:!!Ge})})]},He)}return(0,t.jsx)("li",{className:Xe,children:(0,t.jsxs)(W,{title:tt,className:`link${We?" active":""}`,to:Ce,...Je,children:[Qe,rt]})},He)})},D=_,w=C=>{const{children:R,open:j}=C;let W=0;if(j&&R?.length){W=R.length;let H=0;return R.map(F=>H+=w(F)),W+H}return W},N=({item:C,style:R,...j})=>(0,t.jsx)("ul",{style:{...R,"--count":w(C)},...j});var K=E(62),T=E.n(K),k=E(36),L=E.n(k),$=E(793),I=E.n($),A=E(892),S=E.n(A),B=E(173),U=E.n(B),J=E(464),Y=E.n(J),ae=E(942),Q={};Q.styleTagTransform=Y(),Q.setAttributes=S(),Q.insert=I().bind(null,"head"),Q.domAPI=L(),Q.insertStyleElement=U();var z=T()(ae.Z,Q);const V=ae.Z&&ae.Z.locals?ae.Z.locals:void 0,ue=C=>(0,t.jsx)("ul",{...C}),we=(C,R)=>C?N:({item:j,...W})=>(0,t.jsx)(ue,{className:R==="right"?"left":"",...W}),Ie=C=>{const{data:R=[],collapsed:j=!1,type:W="vertical",Link:H,width:F,bgColor:ee,itemHeight:de,collapsedWidth:ne,itemPadding:he,style:Ee,className:ke,...te}=C,De=(0,o.useRef)(),Ce=(0,o.useRef)();(0,o.useEffect)(()=>()=>clearTimeout(De.current),[]);const Fe=v(),Ke=W==="horizontal",We=!Ke&&j,Ge={onClick:(Xe,Ye)=>{if(Xe.stopPropagation(),!Ke&&!We){const ze=d(R,Ye.path,"path"),Qe=ze[ze.length-1];Qe.open=!Qe.open,Fe()}},onMouseEnter:(Xe,Ye,ze)=>{We&&!ze&&(clearTimeout(De.current),Ce.current.style.width="var(--maxWidth)")},onMouseLeave:(Xe,Ye,ze)=>{We&&!ze&&(De.current=setTimeout(()=>Ce.current.style.width="",200))}},et=(Ke?["huxy-horizontal-tree",ke]:["huxy-tree",ke,We?"collapsed":""]).filter(Boolean).join(" "),{float:Je,...ot}=te?.style??{},He={"--bgColor":ee,"--itemHeight":de,"--nodeListWidth":F,...ot};Ke?(He["--itemPadding"]=he,He["--nodeFloat"]=Je):(He["--width"]=F,He["--collapsedWidth"]=ne);const tt=we(!Ke&&!We,Je);return(0,t.jsx)("div",{ref:Ce,className:et,style:He,...te,children:(0,t.jsx)("div",{className:"huxy-tree-track",children:(0,t.jsx)("ul",{className:"huxy-tree-root",children:D({data:R,events:Ge,List:tt,Link:H,leftIcon:!0,rightIcon:!0,isHorizontal:Ke,isCollapsed:We})})})})},le=(C,R)=>Object.prototype.hasOwnProperty.call(C??{},R),Pe=C=>le(C,"current"),X=(C,R,j="click")=>{(0,o.useEffect)(()=>{const W=F=>{const ee=Pe(C)?C.current:C;ee?.contains&&!ee.contains(F.target)&&R(F)},H=typeof j=="string"?[j]:j;return H.map(F=>{document.addEventListener(F,W,!1)}),()=>{H.map(F=>{document.removeEventListener(F,W,!1)})}},[C,R,j])},fe=C=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(C),ve=C=>new Promise((R,j)=>{const W=new FileReader;W.readAsDataURL(C),W.addEventListener("load",()=>R(W.result)),W.addEventListener("error",H=>j(H))}),pe=async C=>{if(!fe(C))return C;const R=await(await fetch(decodeURIComponent(C))).blob();return await ve(R)},G=C=>{const[R,j]=(0,o.useState)(C);return(0,o.useEffect)(()=>{(async W=>{const H=await pe(W);j(H)})(C)},[C]),R},ie=({src:C,...R})=>{const j=G(C);return(0,t.jsx)("img",{...R,src:j})},se=({Ricon:C,open:R})=>C===!0?(0,t.jsx)("i",{className:`huxy-header-angle-${R?"top":"bt"}`}):(0,t.jsx)(C,{status:R}),ge=({img:C,name:R,icon:j,Ricon:W,open:H})=>C?(0,t.jsxs)("div",{className:"avatar",children:[(0,t.jsx)("div",{className:"img",children:(0,t.jsx)(ie,{src:C,width:"1",height:"1",crossOrigin:"anonymous",alt:"avatar"})}),R?(0,t.jsx)("span",{className:"txt",children:R}):null,W?(0,t.jsx)("span",{className:"node-icon",children:(0,t.jsx)(se,{Ricon:W,open:H})}):null]}):(0,t.jsxs)(t.Fragment,{children:[j?(0,t.jsx)("span",{className:"node-icon",children:j}):null,R?(0,t.jsx)("span",{className:"txt",children:R}):null,W?(0,t.jsx)("span",{className:"node-icon",children:(0,t.jsx)(se,{Ricon:W,open:H})}):null]}),xe=({item:C,open:R})=>{const{Custom:j,img:W,name:H,icon:F,Ricon:ee,active:de}=C;return typeof j=="function"?(0,t.jsx)(j,{item:C,className:"link"}):(0,t.jsx)("span",{className:`link${de?" active":""}`,title:C.title||H,children:(0,t.jsx)(ge,{img:W,name:H,icon:F,Ricon:ee,open:R})})},ye=({item:C,click:R})=>{const j=(0,o.useRef)(),[W,H]=(0,o.useState)(!1);X(j,te=>W&&H(!1));const{arrowDir:F,ChildRender:ee,children:de,smShow:ne}=C,he=de?.length,Ee=(te,De,Ce=null)=>{Ce===!1&&H(Fe=>!Fe),Ce&&(te.stopPropagation(),H(!1)),R(De,Ce)},ke=ne?"sm-show":"";return he||ee?(0,t.jsxs)("li",{ref:j,className:`${ke} ${W?"open":""}`,onClick:te=>Ee(te,C,!1),children:[(0,t.jsx)(xe,{item:C,open:W}),(0,t.jsx)("ul",{className:`huxy-header-arrow-${F||"rt"}`,children:he?de.map((te,De)=>(0,t.jsx)("li",{className:te.divider?"divider":"",children:(0,t.jsxs)("span",{onClick:Ce=>Ee(Ce,te,!0),className:`link${te.active?" active":""}`,children:[te.icon?(0,t.jsx)("span",{className:"node-icon",children:te.icon}):null,(0,t.jsx)("span",{className:"drop-label",children:te.name})]})},`subItem-${De}-${te.key||te.name}`)):(0,t.jsx)("li",{children:(0,t.jsx)(ee,{item:C,close:()=>H(!1)})})})]}):(0,t.jsx)("li",{onClick:te=>Ee(te,C),className:ke,children:(0,t.jsx)(xe,{item:C,open:W})})},be=({list:C,click:R})=>(0,t.jsx)("ul",{children:C.map((j,W)=>(0,t.jsx)(ye,{click:R,item:j},`navItem-${W}-${j.key||j.name}`))}),je=C=>{const{leftList:R,rightList:j,handleNavClick:W,logo:H,title:F,Link:ee}=C;return(0,t.jsxs)("div",{className:"header",children:[(0,t.jsxs)(ee,{className:"banner",to:"/",children:[H?(0,t.jsx)("div",{className:"logo",children:(0,t.jsx)("img",{width:"1",height:"1",src:H,alt:"logo"})}):null,(0,t.jsx)("div",{className:"title",children:F??"Dashboard"})]}),(0,t.jsx)("div",{className:"nav",children:(0,t.jsxs)("div",{className:"nav-wrap",children:[(0,t.jsx)("div",{className:"nav-left",children:(0,t.jsx)(be,{list:R,click:W})}),(0,t.jsx)("div",{className:"nav-right",children:(0,t.jsx)(be,{list:j,click:W})})]})})]})};var Te=E(505),_e={};_e.styleTagTransform=Y(),_e.setAttributes=S(),_e.insert=I().bind(null,"head"),_e.domAPI=L(),_e.insertStyleElement=U();var oe=T()(Te.Z,_e);const Ae=Te.Z&&Te.Z.locals?Te.Z.locals:void 0,me=({language:C,...R})=>(0,o.useMemo)(()=>(0,t.jsx)(je,{...R}),[C]),Se=C=>{const{navMenu:R,headerStyle:j,navMenuStyle:W,Link:H,leftList:F,rightList:ee,handleNavClick:de,logo:ne,title:he,language:Ee}=C;return(0,t.jsxs)("header",{className:"frame-header",style:j,children:[F?.length||ee?.length?(0,t.jsx)(me,{Link:H,leftList:F,rightList:ee,handleNavClick:(ke,te)=>de(C,ke,te),logo:ne,title:he,language:Ee}):null,R?.length?(0,t.jsx)(Ie,{data:R,type:"horizontal",Link:H,style:W}):null]})};var re=E(84),Ne={};Ne.styleTagTransform=Y(),Ne.setAttributes=S(),Ne.insert=I().bind(null,"head"),Ne.domAPI=L(),Ne.insertStyleElement=U();var $e=T()(re.Z,Ne);const Ue=re.Z&&re.Z.locals?re.Z.locals:void 0,Be=({Footer:C})=>(0,t.jsx)("div",{className:"footer",children:C?(0,t.jsx)(C,{}):"copyright \xA9 2020-2022"}),Ze=C=>{const{useStore:R,menu:j,MenuTop:W,MenuBottom:H,Link:F,inputPath:ee,asideStyle:de}=C,[ne,he]=R("huxy-collapse"),{width:Ee}=a(),ke=(0,o.useRef)();return X(ke,te=>{Ee<=1024&&ne&&he(!1)}),(0,o.useEffect)(()=>{Ee<=1024&&ne&&he(!1)},[ee]),(0,t.jsx)("aside",{className:"frame-aside",style:de,children:(0,t.jsxs)("div",{ref:ke,style:{height:"100%"},children:[W&&(0,t.jsx)(W,{...C}),(0,t.jsx)(Ie,{data:j,collapsed:ne&&Ee>1024,Link:F}),H&&(0,t.jsx)(H,{collapsed:ne,isSmall:Ee<=1024,setCollapsed:he})]})})},q=380,ce=({inputPath:C,menuAnimate:R="ani-in"})=>{const j=(0,o.useRef)(C.split("?")[0]),W=(0,o.useRef)(),[H,F]=(0,o.useState)("");return(0,o.useEffect)(()=>{const ee=C.split("?")[0];return ee!==j.current&&(j.current=ee,F(` ${R}`),W.current=setTimeout(()=>{F("")},q)),()=>{clearTimeout(W.current),F("")}},[C]),H},Oe=C=>{const{inputPath:R,contentStyle:j,menuAnimate:W,children:H}=C,F=ce({inputPath:R,menuAnimate:W});return(0,t.jsx)("div",{className:`page-content${F}`,style:j,children:H})};var Re=E(675),Me={};Me.styleTagTransform=Y(),Me.setAttributes=S(),Me.insert=I().bind(null,"head"),Me.domAPI=L(),Me.insertStyleElement=U();var Le=T()(Re.Z,Me);const nt=Re.Z&&Re.Z.locals?Re.Z.locals:void 0,at=C=>{const{menu:R,current:j,MainTop:W,children:H,inputPath:F,contentStyle:ee,menuAnimate:de}=C,ne=R?.length,he=de?de===!0?"ani-in":de:"";return(0,t.jsxs)("div",{className:`frame-container${ne?"":" no-sidebar"}`,children:[ne?(0,t.jsx)(Ze,{...C}):null,(0,t.jsx)("div",{className:"frame-view",children:(0,t.jsxs)("div",{className:"page-container",children:[W&&(0,t.jsx)(W,{current:j}),he?(0,t.jsx)(Oe,{inputPath:F,contentStyle:ee,menuAnimate:he,children:H}):(0,t.jsx)("div",{className:"page-content",style:ee,children:H})]})}),(0,t.jsx)("footer",{className:"frame-footer",children:(0,t.jsx)(Be,{...C})})]})};var qe=E(91),Ve={};Ve.styleTagTransform=Y(),Ve.setAttributes=S(),Ve.insert=I().bind(null,"head"),Ve.domAPI=L(),Ve.insertStyleElement=U();var ct=T()(qe.Z,Ve);const dt=qe.Z&&qe.Z.locals?qe.Z.locals:void 0,it=C=>{const{useStore:R,vertical:j,horizontal:W,menu:H,leftList:F,rightList:ee}=C,{width:de}=a(),[ne]=R("huxy-collapse"),he=de<=1024,Ee=he?H:j,ke=he?[]:W,te=Ee?.length,De=ke?.length,Ce=De&&te,Fe=Ce?"compose":De?"horizontal":ne?"collapsed":"",Ke=Ce&&ne?"composeCollapsed":"",We=F?.length||ee?.length?"":"no-header",Ge=["frame",Fe,Ke,We].filter(Boolean).join(" ");return(0,t.jsxs)("div",{className:Ge,children:[(0,t.jsx)(Se,{...C,navMenu:ke}),(0,t.jsx)("main",{className:"frame-main",children:(0,t.jsx)(at,{...C,menu:Ee})})]})}})();var s=O.Z}}]);
