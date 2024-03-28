(self.webpackChunk=self.webpackChunk||[]).push([[697],{47680:function(T,P,o){var n=o(63696),_=o(4452),u=o.n(_),b=o(65041),M=o(72322),$=o(55046),E=o(6451),D=o(27946),t=function(i,e){var s={};for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&e.indexOf(l)<0&&(s[l]=i[l]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,l=Object.getOwnPropertySymbols(i);c<l.length;c++)e.indexOf(l[c])<0&&Object.prototype.propertyIsEnumerable.call(i,l[c])&&(s[l[c]]=i[l[c]]);return s};const a=null;let r=null;function m(i,e){const{indicator:s}=e,l=`${i}-dot`;return s===null?null:n.isValidElement(s)?(0,$.Ob)(s,{className:u()(s.props.className,l)}):n.isValidElement(r)?(0,$.Ob)(r,{className:u()(r.props.className,l)}):n.createElement("span",{className:u()(l,`${i}-dot-spin`)},n.createElement("i",{className:`${i}-dot-item`,key:1}),n.createElement("i",{className:`${i}-dot-item`,key:2}),n.createElement("i",{className:`${i}-dot-item`,key:3}),n.createElement("i",{className:`${i}-dot-item`,key:4}))}function v(i,e){return!!i&&!!e&&!isNaN(Number(e))}const p=i=>{const{prefixCls:e,spinning:s=!0,delay:l=0,className:c,rootClassName:d,size:g="default",tip:O,wrapperClassName:f,style:W,children:A,fullscreen:B=!1}=i,z=t(i,["prefixCls","spinning","delay","className","rootClassName","size","tip","wrapperClassName","style","children","fullscreen"]),{getPrefixCls:R}=n.useContext(E.QO),y=R("spin",e),[L,H,S]=(0,D.A)(y),[N,X]=n.useState(()=>s&&!v(s,l));n.useEffect(()=>{if(s){const h=(0,M.s)(l,()=>{X(!0)});return h(),()=>{var I;(I=h?.cancel)===null||I===void 0||I.call(h)}}X(!1)},[l,s]);const F=n.useMemo(()=>typeof A<"u"&&!B,[A,B]),{direction:G,spin:x}=n.useContext(E.QO),V=u()(y,x?.className,{[`${y}-sm`]:g==="small",[`${y}-lg`]:g==="large",[`${y}-spinning`]:N,[`${y}-show-text`]:!!O,[`${y}-fullscreen`]:B,[`${y}-fullscreen-show`]:B&&N,[`${y}-rtl`]:G==="rtl"},c,d,H,S),j=u()(`${y}-container`,{[`${y}-blur`]:N}),U=(0,b.A)(z,["indicator"]),Q=Object.assign(Object.assign({},x?.style),W),C=n.createElement("div",Object.assign({},U,{style:Q,className:V,"aria-live":"polite","aria-busy":N}),m(y,i),O&&(F||B)?n.createElement("div",{className:`${y}-text`},O):null);return L(F?n.createElement("div",Object.assign({},U,{className:u()(`${y}-nested-loading`,f,H,S)}),N&&n.createElement("div",{key:"loading"},C),n.createElement("div",{className:j,key:"container"},A)):C)};p.setDefaultIndicator=i=>{r=i},P.A=p},27946:function(T,P,o){var n=o(44534),_=o(94029),u=o(97923),b=o(48876);const M=new n.Mo("antSpinMove",{to:{opacity:1}}),$=new n.Mo("antRotate",{to:{transform:"rotate(405deg)"}}),E=t=>{const{componentCls:a,calc:r}=t;return{[`${a}`]:Object.assign(Object.assign({},(0,_.dF)(t)),{position:"absolute",display:"none",color:t.colorPrimary,fontSize:0,textAlign:"center",verticalAlign:"middle",opacity:0,transition:`transform ${t.motionDurationSlow} ${t.motionEaseInOutCirc}`,"&-spinning":{position:"static",display:"inline-block",opacity:1},[`${a}-text`]:{fontSize:t.fontSize,paddingTop:r(r(t.dotSize).sub(t.fontSize)).div(2).add(2).equal()},"&-fullscreen":{position:"fixed",width:"100vw",height:"100vh",backgroundColor:t.colorBgMask,zIndex:t.zIndexPopupBase,inset:0,display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"center",opacity:0,visibility:"hidden",transition:`all ${t.motionDurationMid}`,"&-show":{opacity:1,visibility:"visible"},[`${a}-dot ${a}-dot-item`]:{backgroundColor:t.colorWhite},[`${a}-text`]:{color:t.colorTextLightSolid}},"&-nested-loading":{position:"relative",[`> div > ${a}`]:{position:"absolute",top:0,insetInlineStart:0,zIndex:4,display:"block",width:"100%",height:"100%",maxHeight:t.contentHeight,[`${a}-dot`]:{position:"absolute",top:"50%",insetInlineStart:"50%",margin:r(t.dotSize).mul(-1).div(2).equal()},[`${a}-text`]:{position:"absolute",top:"50%",width:"100%",textShadow:`0 1px 2px ${t.colorBgContainer}`},[`&${a}-show-text ${a}-dot`]:{marginTop:r(t.dotSize).div(2).mul(-1).sub(10).equal()},"&-sm":{[`${a}-dot`]:{margin:r(t.dotSizeSM).mul(-1).div(2).equal()},[`${a}-text`]:{paddingTop:r(r(t.dotSizeSM).sub(t.fontSize)).div(2).add(2).equal()},[`&${a}-show-text ${a}-dot`]:{marginTop:r(t.dotSizeSM).div(2).mul(-1).sub(10).equal()}},"&-lg":{[`${a}-dot`]:{margin:r(t.dotSizeLG).mul(-1).div(2).equal()},[`${a}-text`]:{paddingTop:r(r(t.dotSizeLG).sub(t.fontSize)).div(2).add(2).equal()},[`&${a}-show-text ${a}-dot`]:{marginTop:r(t.dotSizeLG).div(2).mul(-1).sub(10).equal()}}},[`${a}-container`]:{position:"relative",transition:`opacity ${t.motionDurationSlow}`,"&::after":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,zIndex:10,width:"100%",height:"100%",background:t.colorBgContainer,opacity:0,transition:`all ${t.motionDurationSlow}`,content:'""',pointerEvents:"none"}},[`${a}-blur`]:{clear:"both",opacity:.5,userSelect:"none",pointerEvents:"none","&::after":{opacity:.4,pointerEvents:"auto"}}},"&-tip":{color:t.spinDotDefault},[`${a}-dot`]:{position:"relative",display:"inline-block",fontSize:t.dotSize,width:"1em",height:"1em","&-item":{position:"absolute",display:"block",width:r(t.dotSize).sub(r(t.marginXXS).div(2)).div(2).equal(),height:r(t.dotSize).sub(r(t.marginXXS).div(2)).div(2).equal(),backgroundColor:t.colorPrimary,borderRadius:"100%",transform:"scale(0.75)",transformOrigin:"50% 50%",opacity:.3,animationName:M,animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDirection:"alternate","&:nth-child(1)":{top:0,insetInlineStart:0,animationDelay:"0s"},"&:nth-child(2)":{top:0,insetInlineEnd:0,animationDelay:"0.4s"},"&:nth-child(3)":{insetInlineEnd:0,bottom:0,animationDelay:"0.8s"},"&:nth-child(4)":{bottom:0,insetInlineStart:0,animationDelay:"1.2s"}},"&-spin":{transform:"rotate(45deg)",animationName:$,animationDuration:"1.2s",animationIterationCount:"infinite",animationTimingFunction:"linear"}},[`&-sm ${a}-dot`]:{fontSize:t.dotSizeSM,i:{width:r(r(t.dotSizeSM).sub(r(t.marginXXS).div(2))).div(2).equal(),height:r(r(t.dotSizeSM).sub(r(t.marginXXS).div(2))).div(2).equal()}},[`&-lg ${a}-dot`]:{fontSize:t.dotSizeLG,i:{width:r(r(t.dotSizeLG).sub(t.marginXXS)).div(2).equal(),height:r(r(t.dotSizeLG).sub(t.marginXXS)).div(2).equal()}},[`&${a}-show-text ${a}-text`]:{display:"block"}})}},D=t=>{const{controlHeightLG:a,controlHeight:r}=t;return{contentHeight:400,dotSize:a/2,dotSizeSM:a*.35,dotSizeLG:r}};P.A=(0,u.OF)("Spin",t=>{const a=(0,b.h1)(t,{spinDotDefault:t.colorTextDescription});return[E(a)]},D)},7733:function(T,P){const o=n=>({[n.componentCls]:{[`${n.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${n.motionDurationMid} ${n.motionEaseInOut},
        opacity ${n.motionDurationMid} ${n.motionEaseInOut} !important`}},[`${n.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${n.motionDurationMid} ${n.motionEaseInOut},
        opacity ${n.motionDurationMid} ${n.motionEaseInOut} !important`}}});P.A=o},37487:function(T,P,o){var n=o(82480),_=o(63696),u=o(4050),b=o(69124),M=o(82296),$=o(4452),E=o.n($),D=o(80520),t=o(47378),a=o(6451),r=o(35502),m=o(73980),v=function(l,c){var d={};for(var g in l)Object.prototype.hasOwnProperty.call(l,g)&&c.indexOf(g)<0&&(d[g]=l[g]);if(l!=null&&typeof Object.getOwnPropertySymbols=="function")for(var O=0,g=Object.getOwnPropertySymbols(l);O<g.length;O++)c.indexOf(g[O])<0&&Object.prototype.propertyIsEnumerable.call(l,g[O])&&(d[g[O]]=l[g[O]]);return d};function p(l){const{isLeaf:c,expanded:d}=l;return c?_.createElement(u.A,null):d?_.createElement(b.A,null):_.createElement(M.A,null)}function i(l){let{treeData:c,children:d}=l;return c||(0,t.vH)(d)}const e=(l,c)=>{var{defaultExpandAll:d,defaultExpandParent:g,defaultExpandedKeys:O}=l,f=v(l,["defaultExpandAll","defaultExpandParent","defaultExpandedKeys"]);const W=_.useRef(),A=_.useRef(),B=()=>{const{keyEntities:C}=(0,t.cG)(i(f));let h;return d?h=Object.keys(C):g?h=(0,D.hr)(f.expandedKeys||O||[],C):h=f.expandedKeys||O||[],h},[z,R]=_.useState(f.selectedKeys||f.defaultSelectedKeys||[]),[y,L]=_.useState(()=>B());_.useEffect(()=>{"selectedKeys"in f&&R(f.selectedKeys)},[f.selectedKeys]),_.useEffect(()=>{"expandedKeys"in f&&L(f.expandedKeys)},[f.expandedKeys]);const H=(C,h)=>{var I;return"expandedKeys"in f||L(C),(I=f.onExpand)===null||I===void 0?void 0:I.call(f,C,h)},S=(C,h)=>{var I;const{multiple:k,fieldNames:Z}=f,{node:ee,nativeEvent:w}=h,{key:J=""}=ee,Y=i(f),q=Object.assign(Object.assign({},h),{selected:!0}),te=w?.ctrlKey||w?.metaKey,ne=w?.shiftKey;let K;k&&te?(K=C,W.current=J,A.current=K,q.selectedNodes=(0,m.F)(Y,K,Z)):k&&ne?(K=Array.from(new Set([].concat((0,n.A)(A.current||[]),(0,n.A)((0,m.h)({treeData:Y,expandedKeys:y,startKey:J,endKey:W.current,fieldNames:Z}))))),q.selectedNodes=(0,m.F)(Y,K,Z)):(K=[J],W.current=J,A.current=K,q.selectedNodes=(0,m.F)(Y,K,Z)),(I=f.onSelect)===null||I===void 0||I.call(f,K,q),"selectedKeys"in f||R(K)},{getPrefixCls:N,direction:X}=_.useContext(a.QO),{prefixCls:F,className:G,showIcon:x=!0,expandAction:V="click"}=f,j=v(f,["prefixCls","className","showIcon","expandAction"]),U=N("tree",F),Q=E()(`${U}-directory`,{[`${U}-directory-rtl`]:X==="rtl"},G);return _.createElement(r.A,Object.assign({icon:p,ref:c,blockNode:!0},j,{showIcon:x,expandAction:V,prefixCls:U,className:Q,expandedKeys:y,selectedKeys:z,onSelect:S,onExpand:H}))},s=_.forwardRef(e);P.A=s},35502:function(T,P,o){var n=o(63696),_=o(76518),u=o(4452),b=o.n(u),M=o(12630),$=o(48663),E=o(6451),D=o(14906),t=o(60740),a=o(8825),r=o(96553);const m=n.forwardRef((v,p)=>{var i;const{getPrefixCls:e,direction:s,virtual:l,tree:c}=n.useContext(E.QO),{prefixCls:d,className:g,showIcon:O=!1,showLine:f,switcherIcon:W,blockNode:A=!1,children:B,checkable:z=!1,selectable:R=!0,draggable:y,motion:L,style:H}=v,S=e("tree",d),N=e(),X=L??Object.assign(Object.assign({},(0,$.A)(N)),{motionAppear:!1}),F=Object.assign(Object.assign({},v),{checkable:z,selectable:R,showIcon:O,motion:X,blockNode:A,showLine:!!f,dropIndicatorRender:t.A}),[G,x,V]=(0,D.Ay)(S),[,j]=(0,r.Ay)(),U=j.paddingXS/2+(((i=j.Tree)===null||i===void 0?void 0:i.titleHeight)||j.controlHeightSM),Q=n.useMemo(()=>{if(!y)return!1;let h={};switch(typeof y){case"function":h.nodeDraggable=y;break;case"object":h=Object.assign({},y);break;default:break}return h.icon!==!1&&(h.icon=h.icon||n.createElement(_.A,null)),h},[y]),C=h=>n.createElement(a.A,{prefixCls:S,switcherIcon:W,treeNodeProps:h,showLine:f});return G(n.createElement(M.A,Object.assign({itemHeight:U,ref:p,virtual:l},F,{style:Object.assign(Object.assign({},c?.style),H),prefixCls:S,className:b()({[`${S}-icon-hide`]:!O,[`${S}-block-node`]:A,[`${S}-unselectable`]:!R,[`${S}-rtl`]:s==="rtl"},c?.className,g,x,V),direction:s,checkable:z&&n.createElement("span",{className:`${S}-checkbox-inner`}),selectable:R,switcherIcon:C,draggable:Q}),B))});P.A=m},18480:function(T,P,o){var n=o(12630),_=o(37487),u=o(35502);const b=u.A;b.DirectoryTree=_.A,b.TreeNode=n.n,P.A=b},14906:function(T,P,o){var n=o(44534),_=o(10299),u=o(94029),b=o(7733),M=o(48876),$=o(97923);const E=new n.Mo("ant-tree-node-fx-do-not-use",{"0%":{opacity:0},"100%":{opacity:1}}),D=(i,e)=>({[`.${i}-switcher-icon`]:{display:"inline-block",fontSize:10,verticalAlign:"baseline",svg:{transition:`transform ${e.motionDurationSlow}`}}}),t=(i,e)=>({[`.${i}-drop-indicator`]:{position:"absolute",zIndex:1,height:2,backgroundColor:e.colorPrimary,borderRadius:1,pointerEvents:"none","&:after":{position:"absolute",top:-3,insetInlineStart:-6,width:8,height:8,backgroundColor:"transparent",border:`${(0,n.zA)(e.lineWidthBold)} solid ${e.colorPrimary}`,borderRadius:"50%",content:'""'}}}),a=(i,e)=>{const{treeCls:s,treeNodeCls:l,treeNodePadding:c,titleHeight:d,nodeSelectedBg:g,nodeHoverBg:O}=e,f=e.paddingXS;return{[s]:Object.assign(Object.assign({},(0,u.dF)(e)),{background:e.colorBgContainer,borderRadius:e.borderRadius,transition:`background-color ${e.motionDurationSlow}`,[`&${s}-rtl`]:{[`${s}-switcher`]:{"&_close":{[`${s}-switcher-icon`]:{svg:{transform:"rotate(90deg)"}}}}},[`&-focused:not(:hover):not(${s}-active-focused)`]:Object.assign({},(0,u.jk)(e)),[`${s}-list-holder-inner`]:{alignItems:"flex-start"},[`&${s}-block-node`]:{[`${s}-list-holder-inner`]:{alignItems:"stretch",[`${s}-node-content-wrapper`]:{flex:"auto"},[`${l}.dragging`]:{position:"relative","&:after":{position:"absolute",top:0,insetInlineEnd:0,bottom:c,insetInlineStart:0,border:`1px solid ${e.colorPrimary}`,opacity:0,animationName:E,animationDuration:e.motionDurationSlow,animationPlayState:"running",animationFillMode:"forwards",content:'""',pointerEvents:"none"}}}},[`${l}`]:{display:"flex",alignItems:"flex-start",padding:`0 0 ${(0,n.zA)(c)} 0`,outline:"none","&-rtl":{direction:"rtl"},"&-disabled":{[`${s}-node-content-wrapper`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:hover":{background:"transparent"}}},[`&-active ${s}-node-content-wrapper`]:{background:e.controlItemBgHover},[`&:not(${l}-disabled).filter-node ${s}-title`]:{color:"inherit",fontWeight:500},"&-draggable":{cursor:"grab",[`${s}-draggable-icon`]:{flexShrink:0,width:d,lineHeight:`${(0,n.zA)(d)}`,textAlign:"center",visibility:"visible",opacity:.2,transition:`opacity ${e.motionDurationSlow}`,[`${l}:hover &`]:{opacity:.45}},[`&${l}-disabled`]:{[`${s}-draggable-icon`]:{visibility:"hidden"}}}},[`${s}-indent`]:{alignSelf:"stretch",whiteSpace:"nowrap",userSelect:"none","&-unit":{display:"inline-block",width:d}},[`${s}-draggable-icon`]:{visibility:"hidden"},[`${s}-switcher`]:Object.assign(Object.assign({},D(i,e)),{position:"relative",flex:"none",alignSelf:"stretch",width:d,margin:0,lineHeight:`${(0,n.zA)(d)}`,textAlign:"center",cursor:"pointer",userSelect:"none",transition:`all ${e.motionDurationSlow}`,borderRadius:e.borderRadius,"&-noop":{cursor:"unset"},[`&:not(${s}-switcher-noop):hover`]:{backgroundColor:e.colorBgTextHover},"&_close":{[`${s}-switcher-icon`]:{svg:{transform:"rotate(-90deg)"}}},"&-loading-icon":{color:e.colorPrimary},"&-leaf-line":{position:"relative",zIndex:1,display:"inline-block",width:"100%",height:"100%","&:before":{position:"absolute",top:0,insetInlineEnd:e.calc(d).div(2).equal(),bottom:e.calc(c).mul(-1).equal(),marginInlineStart:-1,borderInlineEnd:`1px solid ${e.colorBorder}`,content:'""'},"&:after":{position:"absolute",width:e.calc(e.calc(d).div(2).equal()).mul(.8).equal(),height:e.calc(d).div(2).equal(),borderBottom:`1px solid ${e.colorBorder}`,content:'""'}}}),[`${s}-checkbox`]:{top:"initial",marginInlineEnd:f,alignSelf:"flex-start",marginTop:e.marginXXS},[`${s}-node-content-wrapper, ${s}-checkbox + span`]:{position:"relative",zIndex:"auto",minHeight:d,margin:0,padding:`0 ${(0,n.zA)(e.calc(e.paddingXS).div(2).equal())}`,color:"inherit",lineHeight:`${(0,n.zA)(d)}`,background:"transparent",borderRadius:e.borderRadius,cursor:"pointer",transition:`all ${e.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,"&:hover":{backgroundColor:O},[`&${s}-node-selected`]:{backgroundColor:g},[`${s}-iconEle`]:{display:"inline-block",width:d,height:d,lineHeight:`${(0,n.zA)(d)}`,textAlign:"center",verticalAlign:"top","&:empty":{display:"none"}}},[`${s}-unselectable ${s}-node-content-wrapper:hover`]:{backgroundColor:"transparent"},[`${s}-node-content-wrapper`]:Object.assign({lineHeight:`${(0,n.zA)(d)}`,userSelect:"none"},t(i,e)),[`${l}.drop-container`]:{"> [draggable]":{boxShadow:`0 0 0 2px ${e.colorPrimary}`}},"&-show-line":{[`${s}-indent`]:{"&-unit":{position:"relative",height:"100%","&:before":{position:"absolute",top:0,insetInlineEnd:e.calc(d).div(2).equal(),bottom:e.calc(c).mul(-1).equal(),borderInlineEnd:`1px solid ${e.colorBorder}`,content:'""'},"&-end":{"&:before":{display:"none"}}}},[`${s}-switcher`]:{background:"transparent","&-line-icon":{verticalAlign:"-0.15em"}}},[`${l}-leaf-last`]:{[`${s}-switcher`]:{"&-leaf-line":{"&:before":{top:"auto !important",bottom:"auto !important",height:`${(0,n.zA)(e.calc(d).div(2).equal())} !important`}}}}})}},r=i=>{const{treeCls:e,treeNodeCls:s,treeNodePadding:l,directoryNodeSelectedBg:c,directoryNodeSelectedColor:d}=i;return{[`${e}${e}-directory`]:{[s]:{position:"relative","&:before":{position:"absolute",top:0,insetInlineEnd:0,bottom:l,insetInlineStart:0,transition:`background-color ${i.motionDurationMid}`,content:'""',pointerEvents:"none"},"&:hover":{"&:before":{background:i.controlItemBgHover}},"> *":{zIndex:1},[`${e}-switcher`]:{transition:`color ${i.motionDurationMid}`},[`${e}-node-content-wrapper`]:{borderRadius:0,userSelect:"none","&:hover":{background:"transparent"},[`&${e}-node-selected`]:{color:d,background:"transparent"}},"&-selected":{"\n            &:hover::before,\n            &::before\n          ":{background:c},[`${e}-switcher`]:{color:d},[`${e}-node-content-wrapper`]:{color:d,background:"transparent"}}}}}},m=(i,e)=>{const s=`.${i}`,l=`${s}-treenode`,c=e.calc(e.paddingXS).div(2).equal(),d=(0,M.h1)(e,{treeCls:s,treeNodeCls:l,treeNodePadding:c});return[a(i,d),r(d)]},v=i=>{const{controlHeightSM:e}=i;return{titleHeight:e,nodeHoverBg:i.controlItemBgHover,nodeSelectedBg:i.controlItemBgActive}},p=i=>{const{colorTextLightSolid:e,colorPrimary:s}=i;return Object.assign(Object.assign({},v(i)),{directoryNodeSelectedColor:e,directoryNodeSelectedBg:s})};P.Ay=(0,$.OF)("Tree",(i,e)=>{let{prefixCls:s}=e;return[{[i.componentCls]:(0,_.gd)(`${s}-checkbox`,i)},m(s,i),(0,b.A)(i)]},p)},73980:function(T,P,o){o.d(P,{F:function(){return $},h:function(){return M}});var n=o(82480),_=o(47378),u;(function(E){E[E.None=0]="None",E[E.Start=1]="Start",E[E.End=2]="End"})(u||(u={}));function b(E,D,t){const{key:a,children:r}=t;function m(v){const p=v[a],i=v[r];D(p,v)!==!1&&b(i||[],D,t)}E.forEach(m)}function M(E){let{treeData:D,expandedKeys:t,startKey:a,endKey:r,fieldNames:m}=E;const v=[];let p=u.None;if(a&&a===r)return[a];if(!a||!r)return[];function i(e){return e===a||e===r}return b(D,e=>{if(p===u.End)return!1;if(i(e)){if(v.push(e),p===u.None)p=u.Start;else if(p===u.Start)return p=u.End,!1}else p===u.Start&&v.push(e);return t.includes(e)},(0,_.AZ)(m)),v}function $(E,D,t){const a=(0,n.A)(D),r=[];return b(E,(m,v)=>{const p=a.indexOf(m);return p!==-1&&(r.push(v),a.splice(p,1)),!!a.length},(0,_.AZ)(t)),r}},60740:function(T,P,o){o.d(P,{A:function(){return u}});var n=o(63696);const _=4;function u(b){const{dropPosition:M,dropLevelOffset:$,prefixCls:E,indent:D,direction:t="ltr"}=b,a=t==="ltr"?"left":"right",r=t==="ltr"?"right":"left",m={[a]:-$*D+_,[r]:0};switch(M){case-1:m.top=-3;break;case 1:m.bottom=-3;break;default:m.bottom=-3,m[a]=D+_;break}return n.createElement("div",{style:m,className:`${E}-drop-indicator`})}},8825:function(T,P,o){var n=o(63696),_=o(70907),u=o(4050),b=o(15438),M=o(71889),$=o(81795),E=o(4452),D=o.n(E),t=o(55046);const a=r=>{const{prefixCls:m,switcherIcon:v,treeNodeProps:p,showLine:i}=r,{isLeaf:e,expanded:s,loading:l}=p;if(l)return n.createElement(b.A,{className:`${m}-switcher-loading-icon`});let c;if(i&&typeof i=="object"&&(c=i.showLeafIcon),e){if(!i)return null;if(typeof c!="boolean"&&c){const O=typeof c=="function"?c(p):c,f=`${m}-switcher-line-custom-icon`;return n.isValidElement(O)?(0,t.Ob)(O,{className:D()(O.props.className||"",f)}):O}return c?n.createElement(u.A,{className:`${m}-switcher-line-icon`}):n.createElement("span",{className:`${m}-switcher-leaf-line`})}const d=`${m}-switcher-icon`,g=typeof v=="function"?v(p):v;return n.isValidElement(g)?(0,t.Ob)(g,{className:D()(g.props.className||"",d)}):g!==void 0?g:i?s?n.createElement(M.A,{className:`${m}-switcher-line-icon`}):n.createElement($.A,{className:`${m}-switcher-line-icon`}):n.createElement(_.A,{className:d})};P.A=a}}]);