(self.webpackChunk=self.webpackChunk||[]).push([[507],{10350:function(He,ne,i){i.d(ne,{Z:function(){return u}});var p=i(27378);function u(){const[,se]=p.useReducer(M=>M+1,0);return se}},23639:function(He,ne,i){i.d(ne,{Z:function(){return je}});var p=i(27378),u=i(39934),se=i(60042),M=i.n(se),ue=i(92456),Ie=i(11815),D=i(24391),de=i(42445),U=i(2874),z=i(72862),L=i(84106),fe=i(93795),ve=i(92916),pe=i(50185),ye=i(26775),be=i(51433),Me=i(10014),J=i(56318),xe=i(72457),k=i(58656),Re=i(30805),Oe=i(78030),Be=i(63488),Ye=i(15305),we=i(5515),Ne=l=>{const{componentCls:s,menuCls:v,colorError:y,colorTextLightSolid:j}=l,W=`${v}-item`;return{[`${s}, ${s}-menu-submenu`]:{[`${v} ${W}`]:{[`&${W}-danger:not(${W}-disabled)`]:{color:y,"&:hover":{color:j,backgroundColor:y}}}}}},De=i(67929),re=i(71695);const $e=l=>{const{componentCls:s,menuCls:v,zIndexPopup:y,dropdownArrowDistance:j,sizePopupArrow:W,antCls:c,iconCls:Z,motionDurationMid:q,paddingBlock:le,fontSize:ce,dropdownEdgeChildPadding:_,colorTextDisabled:A,fontSizeIcon:X,controlPaddingHorizontal:o,colorBgElevated:t}=l;return[{[s]:Object.assign(Object.assign({},(0,xe.Wf)(l)),{position:"absolute",top:-9999,left:{_skip_check_:!0,value:-9999},zIndex:y,display:"block","&::before":{position:"absolute",insetBlock:l.calc(W).div(2).sub(j).equal(),zIndex:-9999,opacity:1e-4,content:'""'},[`&-trigger${c}-btn`]:{[`& > ${Z}-down, & > ${c}-btn-icon > ${Z}-down`]:{fontSize:X}},[`${s}-wrap`]:{position:"relative",[`${c}-btn > ${Z}-down`]:{fontSize:X},[`${Z}-down::before`]:{transition:`transform ${q}`}},[`${s}-wrap-open`]:{[`${Z}-down::before`]:{transform:"rotate(180deg)"}},"\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ":{display:"none"},[`&${c}-slide-down-enter${c}-slide-down-enter-active${s}-placement-bottomLeft,
          &${c}-slide-down-appear${c}-slide-down-appear-active${s}-placement-bottomLeft,
          &${c}-slide-down-enter${c}-slide-down-enter-active${s}-placement-bottom,
          &${c}-slide-down-appear${c}-slide-down-appear-active${s}-placement-bottom,
          &${c}-slide-down-enter${c}-slide-down-enter-active${s}-placement-bottomRight,
          &${c}-slide-down-appear${c}-slide-down-appear-active${s}-placement-bottomRight`]:{animationName:k.fJ},[`&${c}-slide-up-enter${c}-slide-up-enter-active${s}-placement-topLeft,
          &${c}-slide-up-appear${c}-slide-up-appear-active${s}-placement-topLeft,
          &${c}-slide-up-enter${c}-slide-up-enter-active${s}-placement-top,
          &${c}-slide-up-appear${c}-slide-up-appear-active${s}-placement-top,
          &${c}-slide-up-enter${c}-slide-up-enter-active${s}-placement-topRight,
          &${c}-slide-up-appear${c}-slide-up-appear-active${s}-placement-topRight`]:{animationName:k.Qt},[`&${c}-slide-down-leave${c}-slide-down-leave-active${s}-placement-bottomLeft,
          &${c}-slide-down-leave${c}-slide-down-leave-active${s}-placement-bottom,
          &${c}-slide-down-leave${c}-slide-down-leave-active${s}-placement-bottomRight`]:{animationName:k.Uw},[`&${c}-slide-up-leave${c}-slide-up-leave-active${s}-placement-topLeft,
          &${c}-slide-up-leave${c}-slide-up-leave-active${s}-placement-top,
          &${c}-slide-up-leave${c}-slide-up-leave-active${s}-placement-topRight`]:{animationName:k.ly}})},(0,Be.ZP)(l,t,{arrowPlacement:{top:!0,bottom:!0}}),{[`${s} ${v}`]:{position:"relative",margin:0},[`${v}-submenu-popup`]:{position:"absolute",zIndex:y,background:"transparent",boxShadow:"none",transformOrigin:"0 0","ul, li":{listStyle:"none",margin:0}},[`${s}, ${s}-menu-submenu`]:{[v]:Object.assign(Object.assign({padding:_,listStyleType:"none",backgroundColor:t,backgroundClip:"padding-box",borderRadius:l.borderRadiusLG,outline:"none",boxShadow:l.boxShadowSecondary},(0,xe.Qy)(l)),{[`${v}-item-group-title`]:{padding:`${(0,re.bf)(le)} ${(0,re.bf)(o)}`,color:l.colorTextDescription,transition:`all ${q}`},[`${v}-item`]:{position:"relative",display:"flex",alignItems:"center"},[`${v}-item-icon`]:{minWidth:ce,marginInlineEnd:l.marginXS,fontSize:l.fontSizeSM},[`${v}-title-content`]:{flex:"auto","> a":{color:"inherit",transition:`all ${q}`,"&:hover":{color:"inherit"},"&::after":{position:"absolute",inset:0,content:'""'}}},[`${v}-item, ${v}-submenu-title`]:Object.assign(Object.assign({clear:"both",margin:0,padding:`${(0,re.bf)(le)} ${(0,re.bf)(o)}`,color:l.colorText,fontWeight:"normal",fontSize:ce,lineHeight:l.lineHeight,cursor:"pointer",transition:`all ${q}`,borderRadius:l.borderRadiusSM,"&:hover, &-active":{backgroundColor:l.controlItemBgHover}},(0,xe.Qy)(l)),{"&-selected":{color:l.colorPrimary,backgroundColor:l.controlItemBgActive,"&:hover, &-active":{backgroundColor:l.controlItemBgActiveHover}},"&-disabled":{color:A,cursor:"not-allowed","&:hover":{color:A,backgroundColor:t,cursor:"not-allowed"},a:{pointerEvents:"none"}},"&-divider":{height:1,margin:`${(0,re.bf)(l.marginXXS)} 0`,overflow:"hidden",lineHeight:0,backgroundColor:l.colorSplit},[`${s}-menu-submenu-expand-icon`]:{position:"absolute",insetInlineEnd:l.paddingXS,[`${s}-menu-submenu-arrow-icon`]:{marginInlineEnd:"0 !important",color:l.colorTextDescription,fontSize:X,fontStyle:"normal"}}}),[`${v}-item-group-list`]:{margin:`0 ${(0,re.bf)(l.marginXS)}`,padding:0,listStyle:"none"},[`${v}-submenu-title`]:{paddingInlineEnd:l.calc(o).add(l.fontSizeSM).equal()},[`${v}-submenu-vertical`]:{position:"relative"},[`${v}-submenu${v}-submenu-disabled ${s}-menu-submenu-title`]:{[`&, ${s}-menu-submenu-arrow-icon`]:{color:A,backgroundColor:t,cursor:"not-allowed"}},[`${v}-submenu-selected ${s}-menu-submenu-title`]:{color:l.colorPrimary}})}},[(0,k.oN)(l,"slide-up"),(0,k.oN)(l,"slide-down"),(0,Re.Fm)(l,"move-up"),(0,Re.Fm)(l,"move-down"),(0,Oe._y)(l,"zoom-big")]]},We=l=>Object.assign(Object.assign({zIndexPopup:l.zIndexPopupBase+50,paddingBlock:(l.controlHeight-l.fontSize*l.lineHeight)/2},(0,Be.wZ)({contentRadius:l.borderRadiusLG,limitVerticalRadius:!0})),(0,De.w)(l));var Pe=(0,Ye.I$)("Dropdown",l=>{const{marginXXS:s,sizePopupArrow:v,paddingXXS:y,componentCls:j}=l,W=(0,we.TS)(l,{menuCls:`${j}-menu`,dropdownArrowDistance:l.calc(v).div(2).add(s).equal(),dropdownEdgeChildPadding:y});return[$e(W),Ne(W)]},We),S=i(51104);const Ae=null,Q=l=>{const{menu:s,arrow:v,prefixCls:y,children:j,trigger:W,disabled:c,dropdownRender:Z,getPopupContainer:q,overlayClassName:le,rootClassName:ce,overlayStyle:_,open:A,onOpenChange:X,visible:o,onVisibleChange:t,mouseEnterDelay:e=.15,mouseLeaveDelay:n=.1,autoAdjustOverflow:r=!0,placement:a="",overlay:d,transitionName:m}=l,{getPopupContainer:b,getPrefixCls:f,direction:I,dropdown:$}=p.useContext(ye.E_),O=(0,ve.ln)("Dropdown"),B=p.useMemo(()=>{const C=f();return m!==void 0?m:a.includes("top")?`${C}-slide-down`:`${C}-slide-up`},[f,a,m]),h=p.useMemo(()=>a?a.includes("Center")?a.slice(0,a.indexOf("Center")):a:I==="rtl"?"bottomRight":"bottomLeft",[a,I]),g=f("dropdown",y),x=(0,S.Z)(g),[w,H]=Pe(g,x),[,E]=(0,J.ZP)(),F=p.Children.only(j),V=(0,fe.Tm)(F,{className:M()(`${g}-trigger`,{[`${g}-rtl`]:I==="rtl"},F.props.className),disabled:c}),P=c?[]:W;let R;P&&P.includes("contextMenu")&&(R=!0);const[N,T]=(0,D.Z)(!1,{value:A??o}),K=(0,Ie.zX)(C=>{X?.(C,{source:"trigger"}),t?.(C),T(C)}),te=M()(le,ce,H,x,$?.className,{[`${g}-rtl`]:I==="rtl"}),ie=(0,z.Z)({arrowPointAtCenter:typeof v=="object"&&v.pointAtCenter,autoAdjustOverflow:r,offset:E.marginXXS,arrowWidth:v?E.sizePopupArrow:0,borderRadius:E.borderRadius}),G=p.useCallback(()=>{s?.selectable&&s?.multiple||(X?.(!1,{source:"menu"}),T(!1))},[s?.selectable,s?.multiple]),Y=()=>{let C;return s?.items?C=p.createElement(be.Z,Object.assign({},s)):typeof d=="function"?C=d():C=d,Z&&(C=Z(C)),C=p.Children.only(typeof C=="string"?p.createElement("span",null,C):C),p.createElement(Me.J,{prefixCls:`${g}-menu`,rootClassName:x,expandIcon:p.createElement("span",{className:`${g}-menu-submenu-arrow`},p.createElement(u.Z,{className:`${g}-menu-submenu-arrow-icon`})),mode:"vertical",selectable:!1,onClick:G,validator:Se=>{let{mode:Ve}=Se}},C)},[ee,oe]=(0,U.Cn)("Dropdown",_?.zIndex);let ae=p.createElement(ue.Z,Object.assign({alignPoint:R},(0,de.Z)(l,["rootClassName"]),{mouseEnterDelay:e,mouseLeaveDelay:n,visible:N,builtinPlacements:ie,arrow:!!v,overlayClassName:te,prefixCls:g,getPopupContainer:q||b,transitionName:B,trigger:P,overlay:Y,placement:h,onVisibleChange:K,overlayStyle:Object.assign(Object.assign(Object.assign({},$?.style),_),{zIndex:ee})}),V);return ee&&(ae=p.createElement(pe.Z.Provider,{value:oe},ae)),w(ae)};function Le(l){return Object.assign(Object.assign({},l),{align:{overflow:{adjustX:!1,adjustY:!1}}})}const Ee=(0,L.Z)(Q,"dropdown",l=>l,Le),Ze=l=>p.createElement(Ee,Object.assign({},l),p.createElement("span",null));Q._InternalPanelDoNotUseOrYouWillBeFired=Ze;var Te=Q,ze=i(88377),Xe=i(43778),Fe=i(48272),ke=i(31630),Ge=function(l,s){var v={};for(var y in l)Object.prototype.hasOwnProperty.call(l,y)&&s.indexOf(y)<0&&(v[y]=l[y]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var j=0,y=Object.getOwnPropertySymbols(l);j<y.length;j++)s.indexOf(y[j])<0&&Object.prototype.propertyIsEnumerable.call(l,y[j])&&(v[y[j]]=l[y[j]]);return v};const he=l=>{const{getPopupContainer:s,getPrefixCls:v,direction:y}=p.useContext(ye.E_),{prefixCls:j,type:W="default",danger:c,disabled:Z,loading:q,onClick:le,htmlType:ce,children:_,className:A,menu:X,arrow:o,autoFocus:t,overlay:e,trigger:n,align:r,open:a,onOpenChange:d,placement:m,getPopupContainer:b,href:f,icon:I=p.createElement(ze.Z,null),title:$,buttonsRender:O=Y=>Y,mouseEnterDelay:B,mouseLeaveDelay:h,overlayClassName:g,overlayStyle:x,destroyPopupOnHide:w,dropdownRender:H}=l,E=Ge(l,["prefixCls","type","danger","disabled","loading","onClick","htmlType","children","className","menu","arrow","autoFocus","overlay","trigger","align","open","onOpenChange","placement","getPopupContainer","href","icon","title","buttonsRender","mouseEnterDelay","mouseLeaveDelay","overlayClassName","overlayStyle","destroyPopupOnHide","dropdownRender"]),F=v("dropdown",j),V=`${F}-button`,P={menu:X,arrow:o,autoFocus:t,align:r,disabled:Z,trigger:Z?[]:n,onOpenChange:d,getPopupContainer:b||s,mouseEnterDelay:B,mouseLeaveDelay:h,overlayClassName:g,overlayStyle:x,destroyPopupOnHide:w,dropdownRender:H},{compactSize:R,compactItemClassnames:N}=(0,ke.ri)(F,y),T=M()(V,N,A);"overlay"in l&&(P.overlay=e),"open"in l&&(P.open=a),"placement"in l?P.placement=m:P.placement=y==="rtl"?"bottomLeft":"bottomRight";const K=p.createElement(Xe.ZP,{type:W,danger:c,disabled:Z,loading:q,onClick:le,htmlType:ce,href:f,title:$},_),te=p.createElement(Xe.ZP,{type:W,danger:c,icon:I}),[ie,G]=O([K,te]);return p.createElement(Fe.Z.Compact,Object.assign({className:T,size:R,block:!0},E),ie,p.createElement(Te,Object.assign({},P),G))};he.__ANT_BUTTON=!0;var Ke=he;const Ce=Te;Ce.Button=Ke;var je=Ce},10014:function(He,ne,i){i.d(ne,{J:function(){return Ie}});var p=i(27378),u=i(11815),se=i(31630),M=function(D,de){var U={};for(var z in D)Object.prototype.hasOwnProperty.call(D,z)&&de.indexOf(z)<0&&(U[z]=D[z]);if(D!=null&&typeof Object.getOwnPropertySymbols=="function")for(var L=0,z=Object.getOwnPropertySymbols(D);L<z.length;L++)de.indexOf(z[L])<0&&Object.prototype.propertyIsEnumerable.call(D,z[L])&&(U[z[L]]=D[z[L]]);return U};const ue=p.createContext(null),Ie=p.forwardRef((D,de)=>{const{children:U}=D,z=M(D,["children"]),L=p.useContext(ue),fe=p.useMemo(()=>Object.assign(Object.assign({},L),z),[L,z.prefixCls,z.mode,z.selectable,z.rootClassName]),ve=(0,u.t4)(U),pe=(0,u.x1)(de,ve?U.ref:null);return p.createElement(ue.Provider,{value:fe},p.createElement(se.BR,null,ve?p.cloneElement(U,{ref:pe}):U))});ne.Z=ue},51433:function(He,ne,i){i.d(ne,{Z:function(){return X}});var p=i(20302),u=i(27378),se=i(60042),M=i.n(se),ue=function(o,t){var e={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&t.indexOf(n)<0&&(e[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(o);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(o,n[r])&&(e[n[r]]=o[n[r]]);return e};const Ie={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},D=u.createContext({}),de=(()=>{let o=0;return function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return o+=1,`${t}${o}`}})(),U=null;var z=null,L=i(26775),fe=function(o,t){var e={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&t.indexOf(n)<0&&(e[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(o);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(o,n[r])&&(e[n[r]]=o[n[r]]);return e},pe=o=>{const{prefixCls:t,className:e,dashed:n}=o,r=fe(o,["prefixCls","className","dashed"]),{getPrefixCls:a}=u.useContext(L.E_),d=a("menu",t),m=M()({[`${d}-item-divider-dashed`]:!!n},e);return u.createElement(p.iz,Object.assign({className:m},r))},ye=i(27406),be=i(42445),Me=i(99074),J=i(93795),k=(0,u.createContext)({prefixCls:"",firstLevel:!0,inlineCollapsed:!1}),Oe=o=>{var t;const{className:e,children:n,icon:r,title:a,danger:d}=o,{prefixCls:m,firstLevel:b,direction:f,disableMenuItemTitleTooltip:I,inlineCollapsed:$}=u.useContext(k),O=H=>{const E=u.createElement("span",{className:`${m}-title-content`},n);return(!r||(0,J.l$)(n)&&n.type==="span")&&n&&H&&b&&typeof n=="string"?u.createElement("div",{className:`${m}-inline-collapsed-noicon`},n.charAt(0)):E},{siderCollapsed:B}=u.useContext(D);let h=a;typeof a>"u"?h=b?n:"":a===!1&&(h="");const g={title:h};!B&&!$&&(g.title=null,g.open=!1);const x=(0,ye.Z)(n).length;let w=u.createElement(p.ck,Object.assign({},(0,be.Z)(o,["title","icon","danger"]),{className:M()({[`${m}-item-danger`]:d,[`${m}-item-only-child`]:(r?x+1:x)===1},e),title:typeof a=="string"?a:void 0}),(0,J.Tm)(r,{className:M()((0,J.l$)(r)?(t=r.props)===null||t===void 0?void 0:t.className:"",`${m}-item-icon`)}),O($));return I||(w=u.createElement(Me.Z,Object.assign({},g,{placement:f==="rtl"?"left":"right",overlayClassName:`${m}-inline-collapsed-tooltip`}),w)),w},Be=i(2874),we=o=>{var t;const{popupClassName:e,icon:n,title:r,theme:a}=o,d=u.useContext(k),{prefixCls:m,inlineCollapsed:b,theme:f}=d,I=(0,p.Xl)();let $;if(!n)$=b&&!I.length&&r&&typeof r=="string"?u.createElement("div",{className:`${m}-inline-collapsed-noicon`},r.charAt(0)):u.createElement("span",{className:`${m}-title-content`},r);else{const h=(0,J.l$)(r)&&r.type==="span";$=u.createElement(u.Fragment,null,(0,J.Tm)(n,{className:M()((0,J.l$)(n)?(t=n.props)===null||t===void 0?void 0:t.className:"",`${m}-item-icon`)}),h?r:u.createElement("span",{className:`${m}-title-content`},r))}const O=u.useMemo(()=>Object.assign(Object.assign({},d),{firstLevel:!1}),[d]),[B]=(0,Be.Cn)("Menu");return u.createElement(k.Provider,{value:O},u.createElement(p.Wd,Object.assign({},(0,be.Z)(o,["icon"]),{title:$,popupClassName:M()(m,e,`${m}-${a||f}`),popupStyle:{zIndex:B}})))},Ue=i(88377),Ne=i(11815),De=i(80821),re=function(o,t){var e={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&t.indexOf(n)<0&&(e[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(o);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(o,n[r])&&(e[n[r]]=o[n[r]]);return e};function $e(o){return(o||[]).map((t,e)=>{if(t&&typeof t=="object"){const n=t,{label:r,children:a,key:d,type:m}=n,b=re(n,["label","children","key","type"]),f=d??`tmp-${e}`;return a||m==="group"?m==="group"?u.createElement(p.BW,Object.assign({key:f},b,{title:r}),$e(a)):u.createElement(we,Object.assign({key:f},b,{title:r}),$e(a)):m==="divider"?u.createElement(pe,Object.assign({key:f},b)):u.createElement(Oe,Object.assign({key:f},b),r)}return null}).filter(t=>t)}function We(o){return u.useMemo(()=>o&&$e(o),[o])}var Pe=i(10014),S=i(71695),Ae=i(68645),Q=i(72457),Le=i(9193),Ee=i(58656),Ze=i(78030),Te=i(15305),ze=i(5515),Fe=o=>{const{componentCls:t,motionDurationSlow:e,horizontalLineHeight:n,colorSplit:r,lineWidth:a,lineType:d,itemPaddingInline:m}=o;return{[`${t}-horizontal`]:{lineHeight:n,border:0,borderBottom:`${(0,S.bf)(a)} ${d} ${r}`,boxShadow:"none","&::after":{display:"block",clear:"both",height:0,content:'"\\20"'},[`${t}-item, ${t}-submenu`]:{position:"relative",display:"inline-block",verticalAlign:"bottom",paddingInline:m},[`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]:{backgroundColor:"transparent"},[`${t}-item, ${t}-submenu-title`]:{transition:[`border-color ${e}`,`background ${e}`].join(",")},[`${t}-submenu-arrow`]:{display:"none"}}}},Ge=o=>{let{componentCls:t,menuArrowOffset:e,calc:n}=o;return{[`${t}-rtl`]:{direction:"rtl"},[`${t}-submenu-rtl`]:{transformOrigin:"100% 0"},[`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]:{[`${t}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateY(${(0,S.bf)(n(e).mul(-1).equal())})`},"&::after":{transform:`rotate(45deg) translateY(${(0,S.bf)(e)})`}}}}};const he=o=>Object.assign({},(0,Q.oN)(o));var Ce=(o,t)=>{const{componentCls:e,itemColor:n,itemSelectedColor:r,groupTitleColor:a,itemBg:d,subMenuItemBg:m,itemSelectedBg:b,activeBarHeight:f,activeBarWidth:I,activeBarBorderWidth:$,motionDurationSlow:O,motionEaseInOut:B,motionEaseOut:h,itemPaddingInline:g,motionDurationMid:x,itemHoverColor:w,lineType:H,colorSplit:E,itemDisabledColor:F,dangerItemColor:V,dangerItemHoverColor:P,dangerItemSelectedColor:R,dangerItemActiveBg:N,dangerItemSelectedBg:T,itemHoverBg:K,itemActiveBg:te,menuSubMenuBg:ie,horizontalItemSelectedColor:G,horizontalItemSelectedBg:Y,horizontalItemBorderRadius:ee,horizontalItemHoverBg:oe,popupBg:ae}=o;return{[`${e}-${t}, ${e}-${t} > ${e}`]:{color:n,background:d,[`&${e}-root:focus-visible`]:Object.assign({},he(o)),[`${e}-item-group-title`]:{color:a},[`${e}-submenu-selected`]:{[`> ${e}-submenu-title`]:{color:r}},[`${e}-item-disabled, ${e}-submenu-disabled`]:{color:`${F} !important`},[`${e}-item:not(${e}-item-selected):not(${e}-submenu-selected)`]:{[`&:hover, > ${e}-submenu-title:hover`]:{color:w}},[`&:not(${e}-horizontal)`]:{[`${e}-item:not(${e}-item-selected)`]:{"&:hover":{backgroundColor:K},"&:active":{backgroundColor:te}},[`${e}-submenu-title`]:{"&:hover":{backgroundColor:K},"&:active":{backgroundColor:te}}},[`${e}-item-danger`]:{color:V,[`&${e}-item:hover`]:{[`&:not(${e}-item-selected):not(${e}-submenu-selected)`]:{color:P}},[`&${e}-item:active`]:{background:N}},[`${e}-item a`]:{"&, &:hover":{color:"inherit"}},[`${e}-item-selected`]:{color:r,[`&${e}-item-danger`]:{color:R},"a, a:hover":{color:"inherit"}},[`& ${e}-item-selected`]:{backgroundColor:b,[`&${e}-item-danger`]:{backgroundColor:T}},[`${e}-item, ${e}-submenu-title`]:{[`&:not(${e}-item-disabled):focus-visible`]:Object.assign({},he(o))},[`&${e}-submenu > ${e}`]:{backgroundColor:ie},[`&${e}-popup > ${e}`]:{backgroundColor:ae},[`&${e}-horizontal`]:Object.assign(Object.assign({},t==="dark"?{borderBottom:0}:{}),{[`> ${e}-item, > ${e}-submenu`]:{top:$,marginTop:o.calc($).mul(-1).equal(),marginBottom:0,borderRadius:ee,"&::after":{position:"absolute",insetInline:g,bottom:0,borderBottom:`${(0,S.bf)(f)} solid transparent`,transition:`border-color ${O} ${B}`,content:'""'},"&:hover, &-active, &-open":{background:oe,"&::after":{borderBottomWidth:f,borderBottomColor:G}},"&-selected":{color:G,backgroundColor:Y,"&:hover":{backgroundColor:Y},"&::after":{borderBottomWidth:f,borderBottomColor:G}}}}),[`&${e}-root`]:{[`&${e}-inline, &${e}-vertical`]:{borderInlineEnd:`${(0,S.bf)($)} ${H} ${E}`}},[`&${e}-inline`]:{[`${e}-sub${e}-inline`]:{background:m},[`${e}-item`]:{position:"relative","&::after":{position:"absolute",insetBlock:0,insetInlineEnd:0,borderInlineEnd:`${(0,S.bf)(I)} solid ${r}`,transform:"scaleY(0.0001)",opacity:0,transition:[`transform ${x} ${h}`,`opacity ${x} ${h}`].join(","),content:'""'},[`&${e}-item-danger`]:{"&::after":{borderInlineEndColor:R}}},[`${e}-selected, ${e}-item-selected`]:{"&::after":{transform:"scaleY(1)",opacity:1,transition:[`transform ${x} ${B}`,`opacity ${x} ${B}`].join(",")}}}}}};const je=o=>{const{componentCls:t,itemHeight:e,itemMarginInline:n,padding:r,menuArrowSize:a,marginXS:d,itemMarginBlock:m,itemWidth:b}=o,f=o.calc(a).add(r).add(d).equal();return{[`${t}-item`]:{position:"relative",overflow:"hidden"},[`${t}-item, ${t}-submenu-title`]:{height:e,lineHeight:(0,S.bf)(e),paddingInline:r,overflow:"hidden",textOverflow:"ellipsis",marginInline:n,marginBlock:m,width:b},[`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]:{height:e,lineHeight:(0,S.bf)(e)},[`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]:{paddingInlineEnd:f}}};var s=o=>{const{componentCls:t,iconCls:e,itemHeight:n,colorTextLightSolid:r,dropdownWidth:a,controlHeightLG:d,motionDurationMid:m,motionEaseOut:b,paddingXL:f,itemMarginInline:I,fontSizeLG:$,motionDurationSlow:O,paddingXS:B,boxShadowSecondary:h,collapsedWidth:g,collapsedIconSize:x}=o,w={height:n,lineHeight:(0,S.bf)(n),listStylePosition:"inside",listStyleType:"disc"};return[{[t]:{"&-inline, &-vertical":Object.assign({[`&${t}-root`]:{boxShadow:"none"}},je(o))},[`${t}-submenu-popup`]:{[`${t}-vertical`]:Object.assign(Object.assign({},je(o)),{boxShadow:h})}},{[`${t}-submenu-popup ${t}-vertical${t}-sub`]:{minWidth:a,maxHeight:`calc(100vh - ${(0,S.bf)(o.calc(d).mul(2.5).equal())})`,padding:"0",overflow:"hidden",borderInlineEnd:0,"&:not([class*='-active'])":{overflowX:"hidden",overflowY:"auto"}}},{[`${t}-inline`]:{width:"100%",[`&${t}-root`]:{[`${t}-item, ${t}-submenu-title`]:{display:"flex",alignItems:"center",transition:[`border-color ${O}`,`background ${O}`,`padding ${m} ${b}`].join(","),[`> ${t}-title-content`]:{flex:"auto",minWidth:0,overflow:"hidden",textOverflow:"ellipsis"},"> *":{flex:"none"}}},[`${t}-sub${t}-inline`]:{padding:0,border:0,borderRadius:0,boxShadow:"none",[`& > ${t}-submenu > ${t}-submenu-title`]:w,[`& ${t}-item-group-title`]:{paddingInlineStart:f}},[`${t}-item`]:w}},{[`${t}-inline-collapsed`]:{width:g,[`&${t}-root`]:{[`${t}-item, ${t}-submenu ${t}-submenu-title`]:{[`> ${t}-inline-collapsed-noicon`]:{fontSize:$,textAlign:"center"}}},[`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]:{insetInlineStart:0,paddingInline:`calc(50% - ${(0,S.bf)(o.calc($).div(2).equal())} - ${(0,S.bf)(I)})`,textOverflow:"clip",[`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]:{opacity:0},[`${t}-item-icon, ${e}`]:{margin:0,fontSize:x,lineHeight:(0,S.bf)(n),"+ span":{display:"inline-block",opacity:0}}},[`${t}-item-icon, ${e}`]:{display:"inline-block"},"&-tooltip":{pointerEvents:"none",[`${t}-item-icon, ${e}`]:{display:"none"},"a, a:hover":{color:r}},[`${t}-item-group-title`]:Object.assign(Object.assign({},Q.vS),{paddingInline:B})}}]};const v=o=>{const{componentCls:t,motionDurationSlow:e,motionDurationMid:n,motionEaseInOut:r,motionEaseOut:a,iconCls:d,iconSize:m,iconMarginInlineEnd:b}=o;return{[`${t}-item, ${t}-submenu-title`]:{position:"relative",display:"block",margin:0,whiteSpace:"nowrap",cursor:"pointer",transition:[`border-color ${e}`,`background ${e}`,`padding ${e} ${r}`].join(","),[`${t}-item-icon, ${d}`]:{minWidth:m,fontSize:m,transition:[`font-size ${n} ${a}`,`margin ${e} ${r}`,`color ${e}`].join(","),"+ span":{marginInlineStart:b,opacity:1,transition:[`opacity ${e} ${r}`,`margin ${e}`,`color ${e}`].join(",")}},[`${t}-item-icon`]:Object.assign({},(0,Q.Ro)()),[`&${t}-item-only-child`]:{[`> ${d}, > ${t}-item-icon`]:{marginInlineEnd:0}}},[`${t}-item-disabled, ${t}-submenu-disabled`]:{background:"none !important",cursor:"not-allowed","&::after":{borderColor:"transparent !important"},a:{color:"inherit !important"},[`> ${t}-submenu-title`]:{color:"inherit !important",cursor:"not-allowed"}}}},y=o=>{const{componentCls:t,motionDurationSlow:e,motionEaseInOut:n,borderRadius:r,menuArrowSize:a,menuArrowOffset:d}=o;return{[`${t}-submenu`]:{"&-expand-icon, &-arrow":{position:"absolute",top:"50%",insetInlineEnd:o.margin,width:a,color:"currentcolor",transform:"translateY(-50%)",transition:`transform ${e} ${n}, opacity ${e}`},"&-arrow":{"&::before, &::after":{position:"absolute",width:o.calc(a).mul(.6).equal(),height:o.calc(a).mul(.15).equal(),backgroundColor:"currentcolor",borderRadius:r,transition:[`background ${e} ${n}`,`transform ${e} ${n}`,`top ${e} ${n}`,`color ${e} ${n}`].join(","),content:'""'},"&::before":{transform:`rotate(45deg) translateY(${(0,S.bf)(o.calc(d).mul(-1).equal())})`},"&::after":{transform:`rotate(-45deg) translateY(${(0,S.bf)(d)})`}}}}},j=o=>{const{antCls:t,componentCls:e,fontSize:n,motionDurationSlow:r,motionDurationMid:a,motionEaseInOut:d,paddingXS:m,padding:b,colorSplit:f,lineWidth:I,zIndexPopup:$,borderRadiusLG:O,subMenuItemBorderRadius:B,menuArrowSize:h,menuArrowOffset:g,lineType:x,menuPanelMaskInset:w,groupTitleLineHeight:H,groupTitleFontSize:E}=o;return[{"":{[`${e}`]:Object.assign(Object.assign({},(0,Q.dF)()),{"&-hidden":{display:"none"}})},[`${e}-submenu-hidden`]:{display:"none"}},{[e]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,Q.Wf)(o)),(0,Q.dF)()),{marginBottom:0,paddingInlineStart:0,fontSize:n,lineHeight:0,listStyle:"none",outline:"none",transition:`width ${r} cubic-bezier(0.2, 0, 0, 1) 0s`,"ul, ol":{margin:0,padding:0,listStyle:"none"},"&-overflow":{display:"flex",[`${e}-item`]:{flex:"none"}},[`${e}-item, ${e}-submenu, ${e}-submenu-title`]:{borderRadius:o.itemBorderRadius},[`${e}-item-group-title`]:{padding:`${(0,S.bf)(m)} ${(0,S.bf)(b)}`,fontSize:E,lineHeight:H,transition:`all ${r}`},[`&-horizontal ${e}-submenu`]:{transition:[`border-color ${r} ${d}`,`background ${r} ${d}`].join(",")},[`${e}-submenu, ${e}-submenu-inline`]:{transition:[`border-color ${r} ${d}`,`background ${r} ${d}`,`padding ${a} ${d}`].join(",")},[`${e}-submenu ${e}-sub`]:{cursor:"initial",transition:[`background ${r} ${d}`,`padding ${r} ${d}`].join(",")},[`${e}-title-content`]:{transition:`color ${r}`,[`> ${t}-typography-ellipsis-single-line`]:{display:"inline",verticalAlign:"unset"}},[`${e}-item a`]:{"&::before":{position:"absolute",inset:0,backgroundColor:"transparent",content:'""'}},[`${e}-item-divider`]:{overflow:"hidden",lineHeight:0,borderColor:f,borderStyle:x,borderWidth:0,borderTopWidth:I,marginBlock:I,padding:0,"&-dashed":{borderStyle:"dashed"}}}),v(o)),{[`${e}-item-group`]:{[`${e}-item-group-list`]:{margin:0,padding:0,[`${e}-item, ${e}-submenu-title`]:{paddingInline:`${(0,S.bf)(o.calc(n).mul(2).equal())} ${(0,S.bf)(b)}`}}},"&-submenu":{"&-popup":{position:"absolute",zIndex:$,borderRadius:O,boxShadow:"none",transformOrigin:"0 0",[`&${e}-submenu`]:{background:"transparent"},"&::before":{position:"absolute",inset:`${(0,S.bf)(w)} 0 0`,zIndex:-1,width:"100%",height:"100%",opacity:0,content:'""'}},"&-placement-rightTop::before":{top:0,insetInlineStart:w},"\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ":{transformOrigin:"100% 0"},"\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ":{transformOrigin:"100% 100%"},"\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ":{transformOrigin:"0 100%"},"\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ":{transformOrigin:"0 0"},"\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ":{paddingInlineEnd:o.paddingXS},"\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ":{paddingInlineStart:o.paddingXS},"\n          &-placement-topRight,\n          &-placement-topLeft\n          ":{paddingBottom:o.paddingXS},"\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ":{paddingTop:o.paddingXS},[`> ${e}`]:Object.assign(Object.assign(Object.assign({borderRadius:O},v(o)),y(o)),{[`${e}-item, ${e}-submenu > ${e}-submenu-title`]:{borderRadius:B},[`${e}-submenu-title::after`]:{transition:`transform ${r} ${d}`}})}}),y(o)),{[`&-inline-collapsed ${e}-submenu-arrow,
        &-inline ${e}-submenu-arrow`]:{"&::before":{transform:`rotate(-45deg) translateX(${(0,S.bf)(g)})`},"&::after":{transform:`rotate(45deg) translateX(${(0,S.bf)(o.calc(g).mul(-1).equal())})`}},[`${e}-submenu-open${e}-submenu-inline > ${e}-submenu-title > ${e}-submenu-arrow`]:{transform:`translateY(${(0,S.bf)(o.calc(h).mul(.2).mul(-1).equal())})`,"&::after":{transform:`rotate(-45deg) translateX(${(0,S.bf)(o.calc(g).mul(-1).equal())})`},"&::before":{transform:`rotate(45deg) translateX(${(0,S.bf)(g)})`}}})},{[`${t}-layout-header`]:{[e]:{lineHeight:"inherit"}}}]},W=o=>{const{colorPrimary:t,colorError:e,colorTextDisabled:n,colorErrorBg:r,colorText:a,colorTextDescription:d,colorBgContainer:m,colorFillAlter:b,colorFillContent:f,lineWidth:I,lineWidthBold:$,controlItemBgActive:O,colorBgTextHover:B,controlHeightLG:h,lineHeight:g,colorBgElevated:x,marginXXS:w,padding:H,fontSize:E,controlHeightSM:F,fontSizeLG:V,colorTextLightSolid:P,colorErrorHover:R}=o,N=new Ae.C(P).setAlpha(.65).toRgbString();return{dropdownWidth:160,zIndexPopup:o.zIndexPopupBase+50,radiusItem:o.borderRadiusLG,itemBorderRadius:o.borderRadiusLG,radiusSubMenuItem:o.borderRadiusSM,subMenuItemBorderRadius:o.borderRadiusSM,colorItemText:a,itemColor:a,colorItemTextHover:a,itemHoverColor:a,colorItemTextHoverHorizontal:t,horizontalItemHoverColor:t,colorGroupTitle:d,groupTitleColor:d,colorItemTextSelected:t,itemSelectedColor:t,colorItemTextSelectedHorizontal:t,horizontalItemSelectedColor:t,colorItemBg:m,itemBg:m,colorItemBgHover:B,itemHoverBg:B,colorItemBgActive:f,itemActiveBg:O,colorSubItemBg:b,subMenuItemBg:b,colorItemBgSelected:O,itemSelectedBg:O,colorItemBgSelectedHorizontal:"transparent",horizontalItemSelectedBg:"transparent",colorActiveBarWidth:0,activeBarWidth:0,colorActiveBarHeight:$,activeBarHeight:$,colorActiveBarBorderSize:I,activeBarBorderWidth:I,colorItemTextDisabled:n,itemDisabledColor:n,colorDangerItemText:e,dangerItemColor:e,colorDangerItemTextHover:e,dangerItemHoverColor:e,colorDangerItemTextSelected:e,dangerItemSelectedColor:e,colorDangerItemBgActive:r,dangerItemActiveBg:r,colorDangerItemBgSelected:r,dangerItemSelectedBg:r,itemMarginInline:o.marginXXS,horizontalItemBorderRadius:0,horizontalItemHoverBg:"transparent",itemHeight:h,groupTitleLineHeight:g,collapsedWidth:h*2,popupBg:x,itemMarginBlock:w,itemPaddingInline:H,horizontalLineHeight:`${h*1.15}px`,iconSize:E,iconMarginInlineEnd:F-E,collapsedIconSize:V,groupTitleFontSize:E,darkItemDisabledColor:new Ae.C(P).setAlpha(.25).toRgbString(),darkItemColor:N,darkDangerItemColor:e,darkItemBg:"#001529",darkPopupBg:"#001529",darkSubMenuItemBg:"#000c17",darkItemSelectedColor:P,darkItemSelectedBg:t,darkDangerItemSelectedBg:e,darkItemHoverBg:"transparent",darkGroupTitleColor:N,darkItemHoverColor:P,darkDangerItemHoverColor:R,darkDangerItemSelectedColor:P,darkDangerItemActiveBg:e,itemWidth:""}},c=o=>Object.assign(Object.assign({},o),{itemWidth:o.activeBarWidth?`calc(100% + ${o.activeBarBorderWidth}px)`:`calc(100% - ${o.itemMarginInline*2}px)`});var Z=function(o){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:o,e=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return(0,Te.I$)("Menu",r=>{const{colorBgElevated:a,colorPrimary:d,colorTextLightSolid:m,controlHeightLG:b,fontSize:f,darkItemColor:I,darkDangerItemColor:$,darkItemBg:O,darkSubMenuItemBg:B,darkItemSelectedColor:h,darkItemSelectedBg:g,darkDangerItemSelectedBg:x,darkItemHoverBg:w,darkGroupTitleColor:H,darkItemHoverColor:E,darkItemDisabledColor:F,darkDangerItemHoverColor:V,darkDangerItemSelectedColor:P,darkDangerItemActiveBg:R}=r,N=r.calc(f).div(7).mul(5).equal(),T=(0,ze.TS)(r,{menuArrowSize:N,menuHorizontalHeight:r.calc(b).mul(1.15).equal(),menuArrowOffset:r.calc(N).mul(.25).equal(),menuPanelMaskInset:-7,menuSubMenuBg:a,calc:r.calc}),K=(0,ze.TS)(T,{itemColor:I,itemHoverColor:E,groupTitleColor:H,itemSelectedColor:h,itemBg:O,popupBg:O,subMenuItemBg:B,itemActiveBg:"transparent",itemSelectedBg:g,activeBarHeight:0,activeBarBorderWidth:0,itemHoverBg:w,itemDisabledColor:F,dangerItemColor:$,dangerItemHoverColor:V,dangerItemSelectedColor:P,dangerItemActiveBg:R,dangerItemSelectedBg:x,menuSubMenuBg:B,horizontalItemSelectedColor:m,horizontalItemSelectedBg:d});return[j(T),Fe(T),s(T),Ce(T,"light"),Ce(K,"dark"),Ge(T),(0,Le.Z)(T),(0,Ee.oN)(T,"slide-up"),(0,Ee.oN)(T,"slide-down"),(0,Ze._y)(T,"zoom-big")]},W,{deprecatedTokens:[["colorGroupTitle","groupTitleColor"],["radiusItem","itemBorderRadius"],["radiusSubMenuItem","subMenuItemBorderRadius"],["colorItemText","itemColor"],["colorItemTextHover","itemHoverColor"],["colorItemTextHoverHorizontal","horizontalItemHoverColor"],["colorItemTextSelected","itemSelectedColor"],["colorItemTextSelectedHorizontal","horizontalItemSelectedColor"],["colorItemTextDisabled","itemDisabledColor"],["colorDangerItemText","dangerItemColor"],["colorDangerItemTextHover","dangerItemHoverColor"],["colorDangerItemTextSelected","dangerItemSelectedColor"],["colorDangerItemBgActive","dangerItemActiveBg"],["colorDangerItemBgSelected","dangerItemSelectedBg"],["colorItemBg","itemBg"],["colorItemBgHover","itemHoverBg"],["colorSubItemBg","subMenuItemBg"],["colorItemBgActive","itemActiveBg"],["colorItemBgSelectedHorizontal","horizontalItemSelectedBg"],["colorActiveBarWidth","activeBarWidth"],["colorActiveBarHeight","activeBarHeight"],["colorActiveBarBorderSize","activeBarBorderWidth"],["colorItemBgSelected","itemSelectedBg"]],format:c,injectStyle:e,unitless:{groupTitleLineHeight:!0}})(o,t)},q=i(51104),le=function(o,t){var e={};for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&t.indexOf(n)<0&&(e[n]=o[n]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,n=Object.getOwnPropertySymbols(o);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(o,n[r])&&(e[n[r]]=o[n[r]]);return e},_=(0,u.forwardRef)((o,t)=>{var e,n;const r=u.useContext(Pe.Z),a=r||{},{getPrefixCls:d,getPopupContainer:m,direction:b,menu:f}=u.useContext(L.E_),I=d(),{prefixCls:$,className:O,style:B,theme:h="light",expandIcon:g,_internalDisableMenuItemTitleTooltip:x,inlineCollapsed:w,siderCollapsed:H,items:E,children:F,rootClassName:V,mode:P,selectable:R,onClick:N,overflowedIndicatorPopupClassName:T}=o,K=le(o,["prefixCls","className","style","theme","expandIcon","_internalDisableMenuItemTitleTooltip","inlineCollapsed","siderCollapsed","items","children","rootClassName","mode","selectable","onClick","overflowedIndicatorPopupClassName"]),te=(0,be.Z)(K,["collapsedWidth"]),ie=We(E)||F;(e=a.validator)===null||e===void 0||e.call(a,{mode:P});const G=(0,Ne.zX)(function(){var me;N?.apply(void 0,arguments),(me=a.onClick)===null||me===void 0||me.call(a)}),Y=a.mode||P,ee=R??a.selectable,oe=u.useMemo(()=>H!==void 0?H:w,[w,H]),ae={horizontal:{motionName:`${I}-slide-up`},inline:(0,De.Z)(I),other:{motionName:`${I}-zoom-big`}},C=d("menu",$||a.prefixCls),Se=(0,q.Z)(C),[Ve,Je]=Z(C,Se,!r),Qe=M()(`${C}-${h}`,f?.className,O);let ge;if(typeof g=="function")ge=g;else if(g===null||g===!1)ge=null;else if(a.expandIcon===null||a.expandIcon===!1)ge=null;else{const me=g??a.expandIcon;ge=(0,J.Tm)(me,{className:M()(`${C}-submenu-expand-icon`,(0,J.l$)(me)?(n=me.props)===null||n===void 0?void 0:n.className:"")})}const qe=u.useMemo(()=>({prefixCls:C,inlineCollapsed:oe||!1,direction:b,firstLevel:!0,theme:h,mode:Y,disableMenuItemTitleTooltip:x}),[C,oe,b,x,h]);return Ve(u.createElement(Pe.Z.Provider,{value:null},u.createElement(k.Provider,{value:qe},u.createElement(p.ZP,Object.assign({getPopupContainer:m,overflowedIndicator:u.createElement(Ue.Z,null),overflowedIndicatorPopupClassName:M()(C,`${C}-${h}`,T),mode:Y,selectable:ee,onClick:G},te,{inlineCollapsed:oe,style:Object.assign(Object.assign({},f?.style),B),className:Qe,prefixCls:C,direction:b,defaultMotions:ae,expandIcon:ge,ref:t,rootClassName:M()(V,Je,a.rootClassName,Se)}),ie))))});const A=(0,u.forwardRef)((o,t)=>{const e=(0,u.useRef)(null),n=u.useContext(D);return(0,u.useImperativeHandle)(t,()=>({menu:e.current,focus:r=>{var a;(a=e.current)===null||a===void 0||a.focus(r)}})),u.createElement(_,Object.assign({ref:e},o,n))});A.Item=Oe,A.SubMenu=we,A.Divider=pe,A.ItemGroup=p.BW;var X=A}}]);
