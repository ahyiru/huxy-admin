(self.webpackChunk=self.webpackChunk||[]).push([[275],{72760:function(C,c,e){e.r(c);var t=e(24246),s=e(35713),d=e(57192),o=e(20083),n=e.n(o),l=e(51512),f=e(35464),B=e(72079);const p=O=>(0,t.jsxs)("div",{className:"not-found-page",style:d.Z.colors,children:[(0,t.jsxs)("h4",{style:{color:"var(--red2)",textAlign:"center",position:"absolute",width:"100%",top:0},children:[O.inputPath," is not found"]}),(0,t.jsx)("div",{className:"not-found-icon",children:(0,t.jsx)("img",{src:n()})}),(0,t.jsx)("div",{className:"animation-info",children:(0,t.jsx)(s.sA,{objs:l.Z,models:f.Z})})]});c.default=p},81109:function(C,c,e){e.r(c);var t=e(24246),s=e(74335),d=e(71090),o=e(44276);const n=["plus","plus-circle","minus","close","close-circle","close-square","close-left","close-right","check","checked","left","right","dleft","dright","refresh","stop","time","history","loop","arrow-left","arrow-up","arrow-right","arrow-down","left-right","up-down","upload","download","waiting","wait","block","square","star","solid-start","circle-star","snow","radar","flag","solid-flag","heart","music","sun","knot","male","female","dmale","dfemale","polygon","forward","table","grid","quad","circle-left","circle-right","circle-bottom","circle-top","solid-box","box","caret-left","caret-right","round","solid-round","layout","circle-outer","border-outer"],l=f=>{const B=p=>{(0,d.vQq)(p),d.ywV.success("\u62F7\u8D1D\u6210\u529F\uFF01")};return(0,t.jsx)("div",{className:"page icon-list",children:(0,t.jsx)(s.X2,{gutter:12,children:n.map((p,O)=>(0,t.jsx)(s.JX,{span:3,sm:4,children:(0,t.jsxs)("div",{className:"ilist",onClick:()=>B(p),children:[(0,t.jsx)("span",{className:`ico-${p}`}),(0,t.jsx)("span",{className:"icon-name",children:p})]})},p))})})};c.default=l},72079:function(){var C={}},44276:function(){var C={}},20083:function(C,c,e){C.exports=e.p+"img/img_1bf88407.png"},71547:function(C,c,e){e.d(c,{T:function(){return s},n:function(){return t}});function t(d){return["small","middle","large"].includes(d)}function s(d){return d?typeof d=="number"&&!Number.isNaN(d):!1}},1799:function(C,c,e){var t=e(27378),s=e(43051),d=e(19052),o=e(60042),n=e.n(o),l=e(43128),f=e(69531),B=e(26775),p=e(26661),O=e(11887),N=e(51104),z=e(61347),a=e(84006),u=e(45080),F=e(31630),g=e(11566),i=function(m,A){var v={};for(var E in m)Object.prototype.hasOwnProperty.call(m,E)&&A.indexOf(E)<0&&(v[E]=m[E]);if(m!=null&&typeof Object.getOwnPropertySymbols=="function")for(var h=0,E=Object.getOwnPropertySymbols(m);h<E.length;h++)A.indexOf(E[h])<0&&Object.prototype.propertyIsEnumerable.call(m,E[h])&&(v[E[h]]=m[E[h]]);return v};const D=t.forwardRef((m,A)=>{const{getPrefixCls:v,direction:E}=t.useContext(B.E_),h=t.useRef(null);t.useImperativeHandle(A,()=>h.current);const{className:j,rootClassName:x,size:W,disabled:L,prefixCls:X,addonBefore:M,addonAfter:I,prefix:J,bordered:$,readOnly:y,status:H,controls:b,variant:w,wheel:Q=!1}=m,Z=i(m,["className","rootClassName","size","disabled","prefixCls","addonBefore","addonAfter","prefix","bordered","readOnly","status","controls","variant","wheel"]),r=v("input-number",X),P=(0,N.Z)(r),[eu,V,tu]=(0,g.Z)(r,P),{compactSize:nu,compactItemClassnames:uu}=(0,F.ri)(r,E);let U=t.createElement(d.Z,{className:`${r}-handler-up-inner`}),Y=t.createElement(s.Z,{className:`${r}-handler-down-inner`});const au=typeof b=="boolean"?b:void 0;typeof b=="object"&&(U=typeof b.upIcon>"u"?U:t.createElement("span",{className:`${r}-handler-up-inner`},b.upIcon),Y=typeof b.downIcon>"u"?Y:t.createElement("span",{className:`${r}-handler-down-inner`},b.downIcon));const{hasFeedback:T,status:K,isFormItemInput:k,feedbackIcon:q}=t.useContext(a.aM),G=(0,f.F)(K,H),R=(0,z.Z)(pu=>{var ru;return(ru=W??nu)!==null&&ru!==void 0?ru:pu}),lu=t.useContext(O.Z),su=L??lu,[ou,iu]=(0,u.Z)(w,$),du=T&&t.createElement(t.Fragment,null,q),cu=n()({[`${r}-lg`]:R==="large",[`${r}-sm`]:R==="small",[`${r}-rtl`]:E==="rtl",[`${r}-in-form-item`]:k},V),_u=`${r}-group`,Eu=t.createElement(l.Z,Object.assign({ref:h,disabled:su,className:n()(tu,P,j,x,uu),upHandler:U,downHandler:Y,prefixCls:r,readOnly:y,controls:au,prefix:J,suffix:du,wheel:Q,addonAfter:I&&t.createElement(F.BR,null,t.createElement(a.Ux,{override:!0,status:!0},I)),addonBefore:M&&t.createElement(F.BR,null,t.createElement(a.Ux,{override:!0,status:!0},M)),classNames:{input:cu,variant:n()({[`${r}-${ou}`]:iu},(0,f.Z)(r,G,T)),affixWrapper:n()({[`${r}-affix-wrapper-sm`]:R==="small",[`${r}-affix-wrapper-lg`]:R==="large",[`${r}-affix-wrapper-rtl`]:E==="rtl"},V),wrapper:n()({[`${_u}-rtl`]:E==="rtl"},V),groupWrapper:n()({[`${r}-group-wrapper-sm`]:R==="small",[`${r}-group-wrapper-lg`]:R==="large",[`${r}-group-wrapper-rtl`]:E==="rtl",[`${r}-group-wrapper-${ou}`]:iu},(0,f.Z)(`${r}-group-wrapper`,G,T),V)}},Z));return eu(Eu)}),_=D,S=m=>t.createElement(p.ZP,{theme:{components:{InputNumber:{handleVisible:!0}}}},t.createElement(D,Object.assign({},m)));_._InternalPanelDoNotUseOrYouWillBeFired=S,c.Z=_},11566:function(C,c,e){var t=e(80628),s=e(93114),d=e(65063),o=e(24475),n=e(72457),l=e(8179),f=e(6117),B=e(5515),p=e(56293);const O=(a,u)=>{let{componentCls:F,borderRadiusSM:g,borderRadiusLG:i}=a;const D=u==="lg"?i:g;return{[`&-${u}`]:{[`${F}-handler-wrap`]:{borderStartEndRadius:D,borderEndEndRadius:D},[`${F}-handler-up`]:{borderStartEndRadius:D},[`${F}-handler-down`]:{borderEndEndRadius:D}}}},N=a=>{const{componentCls:u,lineWidth:F,lineType:g,borderRadius:i,fontSizeLG:D,controlHeightLG:_,controlHeightSM:S,colorError:m,paddingInlineSM:A,paddingBlockSM:v,paddingBlockLG:E,paddingInlineLG:h,colorTextDescription:j,motionDurationMid:x,handleHoverColor:W,paddingInline:L,paddingBlock:X,handleBg:M,handleActiveBg:I,colorTextDisabled:J,borderRadiusSM:$,borderRadiusLG:y,controlWidth:H,handleOpacity:b,handleBorderColor:w,filledHandleBg:Q,lineHeightLG:Z,calc:r}=a;return[{[u]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},(0,n.Wf)(a)),(0,s.ik)(a)),{display:"inline-block",width:H,margin:0,padding:0,borderRadius:i}),(0,o.qG)(a,{[`${u}-handler-wrap`]:{background:M,[`${u}-handler-down`]:{borderBlockStart:`${(0,t.bf)(F)} ${g} ${w}`}}})),(0,o.H8)(a,{[`${u}-handler-wrap`]:{background:Q,[`${u}-handler-down`]:{borderBlockStart:`${(0,t.bf)(F)} ${g} ${w}`}},"&:focus-within":{[`${u}-handler-wrap`]:{background:M}}})),(0,o.Mu)(a)),{"&-rtl":{direction:"rtl",[`${u}-input`]:{direction:"rtl"}},"&-lg":{padding:0,fontSize:D,lineHeight:Z,borderRadius:y,[`input${u}-input`]:{height:r(_).sub(r(F).mul(2)).equal(),padding:`${(0,t.bf)(E)} ${(0,t.bf)(h)}`}},"&-sm":{padding:0,borderRadius:$,[`input${u}-input`]:{height:r(S).sub(r(F).mul(2)).equal(),padding:`${(0,t.bf)(v)} ${(0,t.bf)(A)}`}},"&-out-of-range":{[`${u}-input-wrap`]:{input:{color:m}}},"&-group":Object.assign(Object.assign(Object.assign({},(0,n.Wf)(a)),(0,s.s7)(a)),{"&-wrapper":Object.assign(Object.assign(Object.assign({display:"inline-block",textAlign:"start",verticalAlign:"top",[`${u}-affix-wrapper`]:{width:"100%"},"&-lg":{[`${u}-group-addon`]:{borderRadius:y,fontSize:a.fontSizeLG}},"&-sm":{[`${u}-group-addon`]:{borderRadius:$}}},(0,o.ir)(a)),(0,o.S5)(a)),{[`&:not(${u}-compact-first-item):not(${u}-compact-last-item)${u}-compact-item`]:{[`${u}, ${u}-group-addon`]:{borderRadius:0}},[`&:not(${u}-compact-last-item)${u}-compact-first-item`]:{[`${u}, ${u}-group-addon`]:{borderStartEndRadius:0,borderEndEndRadius:0}},[`&:not(${u}-compact-first-item)${u}-compact-last-item`]:{[`${u}, ${u}-group-addon`]:{borderStartStartRadius:0,borderEndStartRadius:0}}})}),[`&-disabled ${u}-input`]:{cursor:"not-allowed"},[u]:{"&-input":Object.assign(Object.assign(Object.assign(Object.assign({},(0,n.Wf)(a)),{width:"100%",padding:`${(0,t.bf)(X)} ${(0,t.bf)(L)}`,textAlign:"start",backgroundColor:"transparent",border:0,borderRadius:i,outline:0,transition:`all ${x} linear`,appearance:"textfield",fontSize:"inherit"}),(0,s.nz)(a.colorTextPlaceholder)),{'&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':{margin:0,webkitAppearance:"none",appearance:"none"}})}})},{[u]:Object.assign(Object.assign(Object.assign({[`&:hover ${u}-handler-wrap, &-focused ${u}-handler-wrap`]:{opacity:1},[`${u}-handler-wrap`]:{position:"absolute",insetBlockStart:0,insetInlineEnd:0,width:a.handleWidth,height:"100%",borderStartStartRadius:0,borderStartEndRadius:i,borderEndEndRadius:i,borderEndStartRadius:0,opacity:b,display:"flex",flexDirection:"column",alignItems:"stretch",transition:`opacity ${x} linear ${x}`,[`${u}-handler`]:{display:"flex",alignItems:"center",justifyContent:"center",flex:"auto",height:"40%",[`
              ${u}-handler-up-inner,
              ${u}-handler-down-inner
            `]:{marginInlineEnd:0,fontSize:a.handleFontSize}}},[`${u}-handler`]:{height:"50%",overflow:"hidden",color:j,fontWeight:"bold",lineHeight:0,textAlign:"center",cursor:"pointer",borderInlineStart:`${(0,t.bf)(F)} ${g} ${w}`,transition:`all ${x} linear`,"&:active":{background:I},"&:hover":{height:"60%",[`
              ${u}-handler-up-inner,
              ${u}-handler-down-inner
            `]:{color:W}},"&-up-inner, &-down-inner":Object.assign(Object.assign({},(0,n.Ro)()),{color:j,transition:`all ${x} linear`,userSelect:"none"})},[`${u}-handler-up`]:{borderStartEndRadius:i},[`${u}-handler-down`]:{borderEndEndRadius:i}},O(a,"lg")),O(a,"sm")),{"&-disabled, &-readonly":{[`${u}-handler-wrap`]:{display:"none"},[`${u}-input`]:{color:"inherit"}},[`
          ${u}-handler-up-disabled,
          ${u}-handler-down-disabled
        `]:{cursor:"not-allowed"},[`
          ${u}-handler-up-disabled:hover &-handler-up-inner,
          ${u}-handler-down-disabled:hover &-handler-down-inner
        `]:{color:J}})}]},z=a=>{const{componentCls:u,paddingBlock:F,paddingInline:g,inputAffixPadding:i,controlWidth:D,borderRadiusLG:_,borderRadiusSM:S,paddingInlineLG:m,paddingInlineSM:A,paddingBlockLG:v,paddingBlockSM:E}=a;return{[`${u}-affix-wrapper`]:Object.assign(Object.assign({[`input${u}-input`]:{padding:`${(0,t.bf)(F)} 0`}},(0,s.ik)(a)),{position:"relative",display:"inline-flex",width:D,padding:0,paddingInlineStart:g,"&-lg":{borderRadius:_,paddingInlineStart:m,[`input${u}-input`]:{padding:`${(0,t.bf)(v)} 0`}},"&-sm":{borderRadius:S,paddingInlineStart:A,[`input${u}-input`]:{padding:`${(0,t.bf)(E)} 0`}},[`&:not(${u}-disabled):hover`]:{zIndex:1},"&-focused, &:focus":{zIndex:1},[`&-disabled > ${u}-disabled`]:{background:"transparent"},[`> div${u}`]:{width:"100%",border:"none",outline:"none",[`&${u}-focused`]:{boxShadow:"none !important"}},"&::before":{display:"inline-block",width:0,visibility:"hidden",content:'"\\a0"'},[`${u}-handler-wrap`]:{zIndex:2},[u]:{color:"inherit","&-prefix, &-suffix":{display:"flex",flex:"none",alignItems:"center",pointerEvents:"none"},"&-prefix":{marginInlineEnd:i},"&-suffix":{position:"absolute",insetBlockStart:0,insetInlineEnd:0,zIndex:1,height:"100%",marginInlineEnd:g,marginInlineStart:i}}})}};c.Z=(0,f.I$)("InputNumber",a=>{const u=(0,B.TS)(a,(0,d.e)(a));return[N(u),z(u),(0,l.c)(u)]},p.e,{unitless:{handleOpacity:!0}})},56293:function(C,c,e){e.d(c,{e:function(){return d}});var t=e(68645),s=e(65063);const d=o=>{var n;const l=(n=o.handleVisible)!==null&&n!==void 0?n:"auto";return Object.assign(Object.assign({},(0,s.T)(o)),{controlWidth:90,handleWidth:o.controlHeightSM-o.lineWidth*2,handleFontSize:o.fontSize/2,handleVisible:l,handleActiveBg:o.colorFillAlter,handleBg:o.colorBgContainer,filledHandleBg:new t.C(o.colorFillSecondary).onBackground(o.colorBgContainer).toHexString(),handleHoverColor:o.colorPrimary,handleBorderColor:o.colorBorder,handleOpacity:l===!0?1:0})}},54248:function(C,c,e){var t=e(27378),s=e(21811);const d=o=>{let{className:n,index:l,children:f,split:B,style:p}=o;const{latestIndex:O}=t.useContext(s.u);return f==null?null:t.createElement(t.Fragment,null,t.createElement("div",{className:n,style:p},f),l<O&&B&&t.createElement("span",{className:`${n}-split`},B))};c.Z=d},21811:function(C,c,e){e.d(c,{B:function(){return d},u:function(){return s}});var t=e(27378);const s=t.createContext({latestIndex:0}),d=s.Provider},25384:function(C,c,e){var t=e(27378),s=e(60042),d=e.n(s),o=e(27406),n=e(71547),l=e(26775),f=e(31630),B=e(21811),p=e(54248),O=e(53797),N=function(u,F){var g={};for(var i in u)Object.prototype.hasOwnProperty.call(u,i)&&F.indexOf(i)<0&&(g[i]=u[i]);if(u!=null&&typeof Object.getOwnPropertySymbols=="function")for(var D=0,i=Object.getOwnPropertySymbols(u);D<i.length;D++)F.indexOf(i[D])<0&&Object.prototype.propertyIsEnumerable.call(u,i[D])&&(g[i[D]]=u[i[D]]);return g};const a=t.forwardRef((u,F)=>{var g,i;const{getPrefixCls:D,space:_,direction:S}=t.useContext(l.E_),{size:m=_?.size||"small",align:A,className:v,rootClassName:E,children:h,direction:j="horizontal",prefixCls:x,split:W,style:L,wrap:X=!1,classNames:M,styles:I}=u,J=N(u,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[$,y]=Array.isArray(m)?m:[m,m],H=(0,n.n)(y),b=(0,n.n)($),w=(0,n.T)(y),Q=(0,n.T)($),Z=(0,o.Z)(h,{keepEmpty:!0}),r=A===void 0&&j==="horizontal"?"center":A,P=D("space",x),[eu,V,tu]=(0,O.Z)(P),nu=d()(P,_?.className,V,`${P}-${j}`,{[`${P}-rtl`]:S==="rtl",[`${P}-align-${r}`]:r,[`${P}-gap-row-${y}`]:H,[`${P}-gap-col-${$}`]:b},v,E,tu),uu=d()(`${P}-item`,(g=M?.item)!==null&&g!==void 0?g:(i=_?.classNames)===null||i===void 0?void 0:i.item);let U=0;const Y=Z.map((K,k)=>{var q,G;K!=null&&(U=k);const R=K&&K.key||`${uu}-${k}`;return t.createElement(p.Z,{className:uu,key:R,index:k,split:W,style:(q=I?.item)!==null&&q!==void 0?q:(G=_?.styles)===null||G===void 0?void 0:G.item},K)}),au=t.useMemo(()=>({latestIndex:U}),[U]);if(Z.length===0)return null;const T={};return X&&(T.flexWrap="wrap"),!b&&Q&&(T.columnGap=$),!H&&w&&(T.rowGap=y),eu(t.createElement("div",Object.assign({ref:F,className:nu,style:Object.assign(Object.assign(Object.assign({},T),_?.style),L)},J),t.createElement(B.B,{value:au},Y)))});a.Compact=f.ZP,c.Z=a},40215:function(C,c,e){e.d(c,{G:function(){return o}});var t=e(98554),s=function(l){if((0,t.Z)()&&window.document.documentElement){var f=Array.isArray(l)?l:[l],B=window.document.documentElement;return f.some(function(p){return p in B.style})}return!1},d=function(l,f){if(!s(l))return!1;var B=document.createElement("div"),p=B.style[l];return B.style[l]=f,B.style[l]!==p};function o(n,l){return!Array.isArray(n)&&l!==void 0?d(n,l):s(n)}},33971:function(C,c,e){e.r(c);const z={bread:"\u5F53\u524D\u4F4D\u7F6E",copyright:"copyright &copy; 2020-2022",layout:{saveConfig:"\u4FDD\u5B58\u914D\u7F6E",copyConfig:"\u62F7\u8D1D\u914D\u7F6E",hideHeader:"\u9690\u85CF\u5934\u90E8\u680F",hidden:"\u9690\u85CF",menuType:"\u83DC\u5355\u7C7B\u578B",vertical:"\u7EB5\u5411",horizontal:"\u6A2A\u5411",compose:"\u7EC4\u5408",themes:"\u4E3B\u9898",frameSize:"\u6846\u67B6\u5927\u5C0F",fontSize:"\u5B57\u4F53\u5927\u5C0F",layoutDesign:"\u5E03\u5C40",sizeDesign:"\u5927\u5C0F",colorDesign:"\u989C\u8272",save_cfg_msg:"\u4E3B\u9898\u4FDD\u5B58\u6210\u529F\uFF01",copy_cfg_msg:"\u4E3B\u9898\u62F7\u8D1D\u6210\u529F\uFF01",data_valid_msg:"\u8BF7\u8F93\u5165\u5408\u6CD5\u6570\u636E\uFF01",data_px_msg:"\u8BF7\u8F93\u5165500-5000\u5185\u6570\u636E\uFF01",data_percent_msg:"\u8BF7\u8F93\u516550-100\u5185\u6570\u636E\uFF01",menu_width_msg:"\u8BF7\u8F93\u51650-300\u5185\u6570\u636E\uFF01"},tables:{add:"\u6DFB\u52A0",batchDelete:"\u6279\u91CF\u5220\u9664",search:"\u67E5\u8BE2",reset:"\u91CD\u7F6E",edit:"\u7F16\u8F91",delete:"\u5220\u9664",cancel:"\u53D6\u6D88",submit:"\u786E\u5B9A",delMsg:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F"},projects:{tableHeaderText:{name:"\u9879\u76EE\u540D",description:"\u9879\u76EE\u63CF\u8FF0",role:"\u9879\u76EE\u7B49\u7EA7",target:"\u63A5\u53E3\u524D\u7F00",updatetime:"\u66F4\u65B0\u65F6\u95F4",updater:"\u66F4\u65B0\u4EBA",action:"\u64CD\u4F5C"},actionsText:{router_action:"\u8DEF\u7531\u914D\u7F6E",api_action:"\u63A5\u53E3\u7BA1\u7406",edit_action:"\u7F16\u8F91",delete_action:"\u5220\u9664",delete_confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",delete_confirm_ok:"\u5220\u9664",delete_confirm_cancel:"\u53D6\u6D88",add_action:"\u65B0\u589E",batch_action:"\u6279\u91CF\u5220\u9664"},searchFormText:{name:"\u9879\u76EE\u540D",name_placeholder:"\u8BF7\u8F93\u5165",submit:"\u67E5\u8BE2"},addFormText:{name:"\u9879\u76EE\u540D",name_placeholder:"\u8BF7\u8F93\u5165",target:"\u63A5\u53E3\u524D\u7F00",target_placeholder:"\u63A5\u53E3\u524D\u7F00",role:"\u7B49\u7EA7",role_placeholder:"\u8BF7\u9009\u62E9",description:"\u63CF\u8FF0",description_placeholder:"\u63CF\u8FF0",submit:"\u4FDD\u5B58",reset:"\u91CD\u7F6E"}},projectApis:{tableHeaderText:{name:"\u63A5\u53E3\u540D",tags:"\u6807\u7B7E",url:"\u5730\u5740",method:"\u8BF7\u6C42\u65B9\u5F0F",dataType:"\u53C2\u6570\u7C7B\u578B",auth:"\u63A5\u53E3\u6743\u9650",input:"\u5165\u53C2",output:"\u51FA\u53C2",updatetime:"\u66F4\u65B0\u65F6\u95F4",updater:"\u66F4\u65B0\u4EBA",action:"\u64CD\u4F5C"},actionsText:{test_action:"\u6D4B\u8BD5",edit_action:"\u7F16\u8F91",delete_action:"\u5220\u9664",delete_confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",delete_confirm_ok:"\u5220\u9664",delete_confirm_cancel:"\u53D6\u6D88",add_action:"\u65B0\u589E",batch_action:"\u6279\u91CF\u5220\u9664"},searchFormText:{url:"\u63A5\u53E3\u5730\u5740",url_placeholder:"\u8BF7\u8F93\u5165",submit:"\u67E5\u8BE2",reset:"\u91CD\u7F6E"},addFormText:{name:"\u63A5\u53E3\u540D",tags:"\u6807\u7B7E",url:"\u5730\u5740",method:"\u8BF7\u6C42\u65B9\u5F0F",dataType:"\u53C2\u6570\u7C7B\u578B",auth:"\u63A5\u53E3\u6743\u9650",input:"\u5165\u53C2",output:"\u51FA\u53C2",submit:"\u4FDD\u5B58",reset:"\u91CD\u7F6E",test:"\u6D4B\u8BD5"}},projectRouter:{pageText:{search_placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",preview_text:"\u9875\u9762\u9884\u89C8",design_text:"\u9875\u9762\u8BBE\u8BA1"},actionsText:{add_action:"\u65B0\u589E",edit_action:"\u7F16\u8F91",delete_action:"\u5220\u9664",delete_confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",delete_confirm_ok:"\u5220\u9664",delete_confirm_cancel:"\u53D6\u6D88"},addFormText:{parentId:"\u7236\u8DEF\u5F84",path:"\u8DEF\u5F84",name:"\u5C55\u793A\u540D",component:"\u9875\u9762\u6587\u4EF6\u8DEF\u5F84",icon:"\u56FE\u6807",hideMenu:"\u9690\u85CF\u83DC\u5355",denied:"\u7981\u6B62\u8BBF\u95EE",add_title:"\u65B0\u589E",edit_title:"\u7F16\u8F91",ok_text:"\u786E\u5B9A",cancel_text:"\u53D6\u6D88"}},projectDesign:{pageText:{page_title:"\u5C5E\u6027\u914D\u7F6E"},actionsText:{add_action:"\u65B0\u589E",edit_action:"\u7F16\u8F91",delete_action:"\u5220\u9664",delete_confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",delete_confirm_ok:"\u5220\u9664",delete_confirm_cancel:"\u53D6\u6D88"},topActionText:{preview:"\u9884\u89C8",saveConfigs:"\u4FDD\u5B58\u914D\u7F6E",redoDesign:"\u91CD\u505A",undoDesign:"\u64A4\u9500"},addFormText:{type:"\u7EC4\u4EF6",add_title:"\u65B0\u589E",edit_title:"\u7F16\u8F91",ok_text:"\u786E\u5B9A",cancel_text:"\u53D6\u6D88"},designConfigText:{actionI18n:{required_msg:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879\uFF01",name:"\u4E8B\u4EF6\u540D",apiName:"api\u540D",handlePath:"\u8DF3\u8F6C\u8DEF\u5F84",btnText:"\u6309\u94AE\u540D",isBatch:"\u6279\u91CF\u64CD\u4F5C",is_batch_no:"\u5426",is_batch_yes:"\u662F",option:"\u64CD\u4F5C",edit_action:"\u7F16\u8F91",delete_action:"\u5220\u9664",delete_confirm:"\u786E\u8BA4\u5220\u9664\uFF1F",table_title:"\u6DFB\u52A0action"},columnI18n:{required_msg:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879\uFF01",title:"\u6807\u9898",dataIndex:"\u5C5E\u6027\u540D",align:"\u5BF9\u9F50\u65B9\u5F0F",renderType:"\u6E32\u67D3\u7C7B\u578B",renderProps:"\u6E32\u67D3\u5C5E\u6027",renderChildren:"\u5B50\u8282\u70B9",tools:"\u5DE5\u5177",option:"\u64CD\u4F5C",edit_action:"\u7F16\u8F91",delete_action:"\u5220\u9664",delete_confirm:"\u786E\u8BA4\u5220\u9664\uFF1F",table_title:"\u6DFB\u52A0column"},editorI18n:{actions:"actions\u914D\u7F6E",searchForm:"searchForm\u914D\u7F6E",columns:"columns\u914D\u7F6E",modalForm:"modalForm\u914D\u7F6E\u914D\u7F6E",required_msg:"\u6B64\u9879\u4E3A\u5FC5\u586B\u9879\uFF01",name:"\u5C5E\u6027\u540D",value:"\u5C5E\u6027\u503C",option:"\u64CD\u4F5C",edit_action:"\u7F16\u8F91",delete_action:"\u5220\u9664",delete_confirm:"\u786E\u8BA4\u5220\u9664\uFF1F",table_title:"\u6DFB\u52A0\u5C5E\u6027"}}},users:{tableHeaderText:{name:"\u7528\u6237\u540D",email:"\u90AE\u7BB1",active:"\u72B6\u6001",active_true:"\u5DF2\u6FC0\u6D3B",active_false:"\u672A\u6FC0\u6D3B",github:"GitHub",github_true:"\u5DF2\u7ED1\u5B9A",github_false:"\u672A\u7ED1\u5B9A",projectName:"\u6240\u5728\u9879\u76EE",role:"\u7B49\u7EA7",updatetime:"\u66F4\u65B0\u65F6\u95F4",updater:"\u66F4\u65B0\u4EBA",action:"\u64CD\u4F5C"},actionsText:{auth_action:"\u8BBE\u7F6E\u6743\u9650",edit_action:"\u7F16\u8F91",delete_action:"\u5220\u9664",delete_confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",delete_confirm_ok:"\u5220\u9664",delete_confirm_cancel:"\u53D6\u6D88",add_action:"\u65B0\u589E",batch_action:"\u6279\u91CF\u5220\u9664"},searchFormText:{name:"\u7528\u6237\u540D",name_placeholder:"\u8BF7\u8F93\u5165",role:"\u7B49\u7EA7",role_placeholder:"\u8BF7\u9009\u62E9",submit:"\u67E5\u8BE2",reset:"\u91CD\u7F6E"},addFormText:{name:"\u7528\u6237\u540D",email:"\u90AE\u7BB1",password:"\u5BC6\u7801",role:"\u7B49\u7EA7",avatar:"\u5934\u50CF",projectId:"\u6240\u5728\u9879\u76EE",submit:"\u4FDD\u5B58",reset:"\u91CD\u7F6E"},authFormText:{root_name:"\u8DEF\u7531\u6743\u9650\u8BBE\u7F6E",auth_msg:"\u8BF7\u5237\u65B0\u9875\u9762\u67E5\u770B\u5F53\u524D\u8DEF\u7531\u72B6\u6001\u662F\u5426\u751F\u6548\uFF01",submit:"\u4FDD\u5B58",reset:"\u6E05\u7A7A"},profilePageText:{profile:{title:"\u4E2A\u4EBA\u4FE1\u606F",name:"\u7528\u6237\u540D",email:"\u90AE\u7BB1",active:"\u72B6\u6001",active_true:"\u5DF2\u6FC0\u6D3B",active_false:"\u672A\u6FC0\u6D3B",projectName:"\u6240\u5728\u9879\u76EE",role:"\u7B49\u7EA7"},upProfile:{title:"\u66F4\u65B0\u4FE1\u606F",name:"\u7528\u6237\u540D",email:"\u90AE\u7BB1",password:"\u5BC6\u7801",submit:"\u786E\u8BA4\u4FEE\u6539",reset:"\u6E05\u7A7A"}}},suspense:{columns_title:"\u59D3\u540D",columns_email:"\u90AE\u7BB1",test1_title:"\u4E2A\u4EBA\u4FE1\u606F",test2_title:"\u7528\u6237\u4FE1\u606F",loadError:"loadError",errorBoundary:"errorBoundary",handleErrorBoundary:"handleErrorBoundary",handleError:"handleError"},canvas:{red_pen:"\u7EA2\u8272\u753B\u7B14",blue_pen:"\u84DD\u8272\u753B\u7B14",green_pen:"\u7EFF\u8272\u753B\u7B14",orange_pen:"\u6A59\u8272\u753B\u7B14",small_pen:"\u5C0F",middle_pen:"\u4E2D",large_pen:"\u5927",add_text:"\u6DFB\u52A0\u6587\u672C",eraser:"\u6A61\u76AE\u64E6",undo:"\u64A4\u56DE",redo:"\u91CD\u505A",clean_canvas:"\u6E05\u9664\u753B\u5E03",save_canvas:"\u4FDD\u5B58\u753B\u5E03",replace_pic:"\u66FF\u6362\u80CC\u666F",clean_pic:"\u6E05\u9664\u80CC\u666F\u56FE",up_image_msg:"\u8BF7\u4E0A\u4F20\u56FE\u7247\uFF01",up_image_size_msg:"\u56FE\u7247\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC78MB\uFF01"},editor:{undo:"\u64A4\u56DE",redo:"\u91CD\u505A",h1:"\u6807\u9898H1",h2:"\u6807\u9898H2",ol:"\u6709\u5E8F\u5217\u8868",ul:"\u65E0\u5E8F\u5217\u8868",bold:"\u52A0\u7C97",italic:"\u659C\u4F53",underline:"\u4E0B\u5212\u7EBF",strikethrough:"\u5220\u9664\u7EBF",fontSize:"\u5B57\u4F53\u5927\u5C0F",color:"\u5B57\u4F53\u989C\u8272",background:"\u80CC\u666F\u989C\u8272",quote:"\u5F15\u7528",dividing:"\u5206\u5272\u7EBF",alignCenter:"\u5C45\u4E2D",alignLeft:"\u5DE6\u5BF9\u9F50",alignRight:"\u53F3\u5BF9\u9F50",indent:"\u7F29\u8FDB",lineHeight:"\u884C\u95F4\u8DDD",spacing:"\u5B57\u4F53\u95F4\u8DDD",clear:"\u6E05\u9664\u683C\u5F0F",brush:"\u683C\u5F0F\u5237",code:"\u4EE3\u7801\u5757",table:"\u8868\u683C",emoji:"\u8868\u60C5",latex:"\u516C\u5F0F",file:"\u9644\u4EF6",flow:"\u6D41\u7A0B\u56FE",image:"\u56FE\u7247",video:"\u89C6\u9891",audio:"\u97F3\u9891",link:"\u8D85\u94FE\u63A5",markdown:"markdown",import:"\u6587\u6863\u5BFC\u5165"},components:{back:"\u8FD4\u56DE"}};c.default=z}}]);
