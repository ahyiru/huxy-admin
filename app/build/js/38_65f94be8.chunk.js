(self.webpackChunk=self.webpackChunk||[]).push([[38],{39038:function(Rt,ye,R){R.d(ye,{Z:function(){return qe}});var ie=R(25773),w=R(50189),Y=R(64649),C=R(11026),Te=R(18808),a=R(27378),He=R(60042),j=R.n(He),Ce=R(85709),le=a.forwardRef(function(t,f){var i=t.height,e=t.offset,l=t.children,r=t.prefixCls,s=t.onInnerResize,n=t.innerProps,o={},u={display:"flex",flexDirection:"column"};return e!==void 0&&(o={height:i,position:"relative",overflow:"hidden"},u=(0,w.Z)((0,w.Z)({},u),{},{transform:"translateY(".concat(e,"px)"),position:"absolute",left:0,right:0,top:0})),a.createElement("div",{style:o},a.createElement(Ce.Z,{onResize:function(c){var d=c.offsetHeight;d&&s&&s()}},a.createElement("div",(0,ie.Z)({style:u,className:j()((0,Y.Z)({},"".concat(r,"-holder-inner"),r)),ref:f},n),l)))});le.displayName="Filler";var xe=le,ue=R(22951),se=R(91976),De=R(67591),Le=R(12357),T=R(94068),we=20;function ce(t){return"touches"in t?t.touches[0].pageY:t.pageY}var Ie=function(t){(0,De.Z)(i,t);var f=(0,Le.Z)(i);function i(){var e;(0,ue.Z)(this,i);for(var l=arguments.length,r=new Array(l),s=0;s<l;s++)r[s]=arguments[s];return e=f.call.apply(f,[this].concat(r)),e.moveRaf=null,e.scrollbarRef=a.createRef(),e.thumbRef=a.createRef(),e.visibleTimeout=null,e.state={dragging:!1,pageY:null,startTop:null,visible:!1},e.delayHidden=function(){clearTimeout(e.visibleTimeout),e.setState({visible:!0}),e.visibleTimeout=setTimeout(function(){e.setState({visible:!1})},2e3)},e.onScrollbarTouchStart=function(n){n.preventDefault()},e.onContainerMouseDown=function(n){n.stopPropagation(),n.preventDefault()},e.patchEvents=function(){window.addEventListener("mousemove",e.onMouseMove),window.addEventListener("mouseup",e.onMouseUp),e.thumbRef.current.addEventListener("touchmove",e.onMouseMove),e.thumbRef.current.addEventListener("touchend",e.onMouseUp)},e.removeEvents=function(){window.removeEventListener("mousemove",e.onMouseMove),window.removeEventListener("mouseup",e.onMouseUp),e.thumbRef.current&&(e.thumbRef.current.removeEventListener("touchmove",e.onMouseMove),e.thumbRef.current.removeEventListener("touchend",e.onMouseUp)),T.Z.cancel(e.moveRaf)},e.onMouseDown=function(n){var o=e.props.onStartMove;e.setState({dragging:!0,pageY:ce(n),startTop:e.getTop()}),o(),e.patchEvents(),n.stopPropagation(),n.preventDefault()},e.onMouseMove=function(n){var o=e.state,u=o.dragging,v=o.pageY,c=o.startTop,d=e.props.onScroll;if(T.Z.cancel(e.moveRaf),u){var g=ce(n)-v,p=c+g,S=e.getEnableScrollRange(),E=e.getEnableHeightRange(),x=E?p/E:0,D=Math.ceil(x*S);e.moveRaf=(0,T.Z)(function(){d(D)})}},e.onMouseUp=function(){var n=e.props.onStopMove;e.setState({dragging:!1}),n(),e.removeEvents()},e.getSpinHeight=function(){var n=e.props,o=n.height,u=n.count,v=o/u*10;return v=Math.max(v,we),v=Math.min(v,o/2),Math.floor(v)},e.getEnableScrollRange=function(){var n=e.props,o=n.scrollHeight,u=n.height;return o-u||0},e.getEnableHeightRange=function(){var n=e.props.height,o=e.getSpinHeight();return n-o||0},e.getTop=function(){var n=e.props.scrollTop,o=e.getEnableScrollRange(),u=e.getEnableHeightRange();if(n===0||o===0)return 0;var v=n/o;return v*u},e.showScroll=function(){var n=e.props,o=n.height,u=n.scrollHeight;return u>o},e}return(0,se.Z)(i,[{key:"componentDidMount",value:function(){this.scrollbarRef.current.addEventListener("touchstart",this.onScrollbarTouchStart),this.thumbRef.current.addEventListener("touchstart",this.onMouseDown)}},{key:"componentDidUpdate",value:function(l){l.scrollTop!==this.props.scrollTop&&this.delayHidden()}},{key:"componentWillUnmount",value:function(){var l,r;this.removeEvents(),(l=this.scrollbarRef.current)===null||l===void 0||l.removeEventListener("touchstart",this.onScrollbarTouchStart),(r=this.thumbRef.current)===null||r===void 0||r.removeEventListener("touchstart",this.onMouseDown),clearTimeout(this.visibleTimeout)}},{key:"render",value:function(){var l=this.state,r=l.dragging,s=l.visible,n=this.props,o=n.prefixCls,u=n.direction,v=this.getSpinHeight(),c=this.getTop(),d=this.showScroll(),g=d&&s,p=u==="rtl"?{left:0}:{right:0};return a.createElement("div",{ref:this.scrollbarRef,className:j()("".concat(o,"-scrollbar"),(0,Y.Z)({},"".concat(o,"-scrollbar-show"),d)),style:(0,w.Z)((0,w.Z)({width:8,top:0,bottom:0},p),{},{position:"absolute",display:g?null:"none"}),onMouseDown:this.onContainerMouseDown,onMouseMove:this.delayHidden},a.createElement("div",{ref:this.thumbRef,className:j()("".concat(o,"-scrollbar-thumb"),(0,Y.Z)({},"".concat(o,"-scrollbar-thumb-moving"),r)),style:{width:"100%",height:v,top:c,left:0,position:"absolute",background:"rgba(0, 0, 0, 0.5)",borderRadius:99,cursor:"pointer",userSelect:"none"},onMouseDown:this.onMouseDown}))}}]),i}(a.Component);function Pe(t){var f=t.children,i=t.setRef,e=a.useCallback(function(l){i(l)},[]);return a.cloneElement(f,{ref:e})}function $e(t,f,i,e,l,r){var s=r.getKey;return t.slice(f,i+1).map(function(n,o){var u=f+o,v=l(n,u,{}),c=s(n);return a.createElement(Pe,{key:c,setRef:function(g){return e(n,g)}},v)})}var Fe=R(62738),Ne=function(){function t(){(0,ue.Z)(this,t),this.maps=void 0,this.maps=Object.create(null)}return(0,se.Z)(t,[{key:"set",value:function(i,e){this.maps[i]=e}},{key:"get",value:function(i){return this.maps[i]}}]),t}(),Ue=Ne;function Ye(t,f,i){var e=a.useState(0),l=(0,C.Z)(e,2),r=l[0],s=l[1],n=(0,a.useRef)(new Map),o=(0,a.useRef)(new Ue),u=(0,a.useRef)();function v(){T.Z.cancel(u.current)}function c(){v(),u.current=(0,T.Z)(function(){n.current.forEach(function(g,p){if(g&&g.offsetParent){var S=(0,Fe.Z)(g),E=S.offsetHeight;o.current.get(p)!==E&&o.current.set(p,S.offsetHeight)}}),s(function(g){return g+1})})}function d(g,p){var S=t(g),E=n.current.get(S);p?(n.current.set(S,p),c()):n.current.delete(S),!E!=!p&&(p?f?.(g):i?.(g))}return(0,a.useEffect)(function(){return v},[]),[d,c,o.current,r]}var fe=R(33940);function Oe(t,f,i,e,l,r,s,n){var o=a.useRef();return function(u){if(u==null){n();return}if(T.Z.cancel(o.current),typeof u=="number")s(u);else if(u&&(0,fe.Z)(u)==="object"){var v,c=u.align;"index"in u?v=u.index:v=f.findIndex(function(S){return l(S)===u.key});var d=u.offset,g=d===void 0?0:d,p=function S(E,x){if(!(E<0||!t.current)){var D=t.current.clientHeight,V=!1,O=x;if(D){for(var Z=x||c,z=0,$=0,I=0,H=Math.min(f.length,v),F=0;F<=H;F+=1){var _=l(f[F]);$=z;var N=i.get(_);I=$+(N===void 0?e:N),z=I,F===v&&N===void 0&&(V=!0)}var P=null;switch(Z){case"top":P=$-g;break;case"bottom":P=I-D+g;break;default:{var W=t.current.scrollTop,ee=W+D;$<W?O="top":I>ee&&(O="bottom")}}P!==null&&P!==t.current.scrollTop&&s(P)}o.current=(0,T.Z)(function(){V&&r(),S(E-1,O)},2)}};p(3)}}}function St(t,f,i,e){var l=i-t,r=f-i,s=Math.min(l,r)*2;if(e<=s){var n=Math.floor(e/2);return e%2?i+n+1:i-n}return l>r?i-(e-r):i+(e-l)}function ze(t,f,i){var e=t.length,l=f.length,r,s;if(e===0&&l===0)return null;e<l?(r=t,s=f):(r=f,s=t);var n={__EMPTY_ITEM__:!0};function o(p){return p!==void 0?i(p):n}for(var u=null,v=Math.abs(e-l)!==1,c=0;c<s.length;c+=1){var d=o(r[c]),g=o(s[c]);if(d!==g){u=c,v=v||d!==o(s[c+1]);break}}return u===null?null:{index:u,multiple:v}}function We(t,f,i){var e=a.useState(t),l=(0,C.Z)(e,2),r=l[0],s=l[1],n=a.useState(null),o=(0,C.Z)(n,2),u=o[0],v=o[1];return a.useEffect(function(){var c=ze(r||[],t||[],f);c?.index!==void 0&&(i?.(c.index),v(t[c.index])),s(t)},[t]),[u]}var ke=(typeof navigator>"u"?"undefined":(0,fe.Z)(navigator))==="object"&&/Firefox/i.test(navigator.userAgent),Ke=ke,ve=function(t,f){var i=(0,a.useRef)(!1),e=(0,a.useRef)(null);function l(){clearTimeout(e.current),i.current=!0,e.current=setTimeout(function(){i.current=!1},50)}var r=(0,a.useRef)({top:t,bottom:f});return r.current.top=t,r.current.bottom=f,function(s){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=s<0&&r.current.top||s>0&&r.current.bottom;return n&&o?(clearTimeout(e.current),i.current=!1):(!o||i.current)&&l(),!i.current&&o}};function je(t,f,i,e){var l=(0,a.useRef)(0),r=(0,a.useRef)(null),s=(0,a.useRef)(null),n=(0,a.useRef)(!1),o=ve(f,i);function u(c){if(t){T.Z.cancel(r.current);var d=c.deltaY;l.current+=d,s.current=d,!o(d)&&(Ke||c.preventDefault(),r.current=(0,T.Z)(function(){var g=n.current?10:1;e(l.current*g),l.current=0}))}}function v(c){t&&(n.current=c.detail===s.current)}return[u,v]}var q=R(99664),Ve=14/15;function Ae(t,f,i){var e=(0,a.useRef)(!1),l=(0,a.useRef)(0),r=(0,a.useRef)(null),s=(0,a.useRef)(null),n,o=function(d){if(e.current){var g=Math.ceil(d.touches[0].pageY),p=l.current-g;l.current=g,i(p)&&d.preventDefault(),clearInterval(s.current),s.current=setInterval(function(){p*=Ve,(!i(p,!0)||Math.abs(p)<=.1)&&clearInterval(s.current)},16)}},u=function(){e.current=!1,n()},v=function(d){n(),d.touches.length===1&&!e.current&&(e.current=!0,l.current=Math.ceil(d.touches[0].pageY),r.current=d.target,r.current.addEventListener("touchmove",o),r.current.addEventListener("touchend",u))};n=function(){r.current&&(r.current.removeEventListener("touchmove",o),r.current.removeEventListener("touchend",u))},(0,q.Z)(function(){return t&&f.current.addEventListener("touchstart",v),function(){var c;(c=f.current)===null||c===void 0||c.removeEventListener("touchstart",v),n(),clearInterval(s.current)}},[t])}var Be=["prefixCls","className","height","itemHeight","fullHeight","style","data","children","itemKey","virtual","direction","component","onScroll","onVisibleChange","innerProps"],Ge=[],Je={overflowY:"auto",overflowAnchor:"none"};function Qe(t,f){var i=t.prefixCls,e=i===void 0?"rc-virtual-list":i,l=t.className,r=t.height,s=t.itemHeight,n=t.fullHeight,o=n===void 0?!0:n,u=t.style,v=t.data,c=t.children,d=t.itemKey,g=t.virtual,p=t.direction,S=t.component,E=S===void 0?"div":S,x=t.onScroll,D=t.onVisibleChange,V=t.innerProps,O=(0,Te.Z)(t,Be),Z=!!(g!==!1&&r&&s),z=Z&&v&&s*v.length>r,$=(0,a.useState)(0),I=(0,C.Z)($,2),H=I[0],F=I[1],_=(0,a.useState)(!1),N=(0,C.Z)(_,2),P=N[0],W=N[1],ee=j()(e,(0,Y.Z)({},"".concat(e,"-rtl"),p==="rtl"),l),M=v||Ge,y=(0,a.useRef)(),de=(0,a.useRef)(),ge=(0,a.useRef)(),k=a.useCallback(function(h){return typeof d=="function"?d(h):h?.[d]},[d]),_e={getKey:k};function A(h){F(function(m){var b;typeof h=="function"?b=h(m):b=h;var U=ut(b);return y.current.scrollTop=U,U})}var pe=(0,a.useRef)({start:0,end:M.length}),et=(0,a.useRef)(),tt=We(M,k),nt=(0,C.Z)(tt,1),rt=nt[0];et.current=rt;var ot=Ye(k,null,null),B=(0,C.Z)(ot,4),at=B[0],me=B[1],Re=B[2],it=B[3],G=a.useMemo(function(){if(!Z)return{scrollHeight:void 0,start:0,end:M.length-1,offset:void 0};if(!z){var h;return{scrollHeight:((h=de.current)===null||h===void 0?void 0:h.offsetHeight)||0,start:0,end:M.length-1,offset:void 0}}for(var m=0,b,U,L,gt=M.length,K=0;K<gt;K+=1){var pt=M[K],mt=k(pt),Ze=Re.get(mt),ae=m+(Ze===void 0?s:Ze);ae>=H&&b===void 0&&(b=K,U=m),ae>H+r&&L===void 0&&(L=K),m=ae}return b===void 0&&(b=0,U=0,L=Math.ceil(r/s)),L===void 0&&(L=M.length-1),L=Math.min(L+1,M.length),{scrollHeight:m,start:b,end:L,offset:U}},[z,Z,H,M,it,r]),te=G.scrollHeight,J=G.start,Q=G.end,lt=G.offset;pe.current.start=J,pe.current.end=Q;var ne=te-r,re=(0,a.useRef)(ne);re.current=ne;function ut(h){var m=h;return Number.isNaN(re.current)||(m=Math.min(m,re.current)),m=Math.max(m,0),m}var Se=H<=0,Me=H>=ne,st=ve(Se,Me);function ct(h){var m=h;A(m)}function ft(h){var m=h.currentTarget.scrollTop;m!==H&&A(m),x?.(h)}var vt=je(Z,Se,Me,function(h){A(function(m){var b=m+h;return b})}),be=(0,C.Z)(vt,2),oe=be[0],Ee=be[1];Ae(Z,y,function(h,m){return st(h,m)?!1:(oe({preventDefault:function(){},deltaY:h}),!0)}),(0,q.Z)(function(){function h(m){Z&&m.preventDefault()}return y.current.addEventListener("wheel",oe),y.current.addEventListener("DOMMouseScroll",Ee),y.current.addEventListener("MozMousePixelScroll",h),function(){y.current&&(y.current.removeEventListener("wheel",oe),y.current.removeEventListener("DOMMouseScroll",Ee),y.current.removeEventListener("MozMousePixelScroll",h))}},[Z]);var ht=Oe(y,M,Re,s,k,me,A,function(){var h;(h=ge.current)===null||h===void 0||h.delayHidden()});a.useImperativeHandle(f,function(){return{scrollTo:ht}}),(0,q.Z)(function(){if(D){var h=M.slice(J,Q+1);D(h,M)}},[J,Q,M]);var dt=$e(M,J,Q,at,c,_e),X=null;return r&&(X=(0,w.Z)((0,Y.Z)({},o?"height":"maxHeight",r),Je),Z&&(X.overflowY="hidden",P&&(X.pointerEvents="none"))),a.createElement("div",(0,ie.Z)({style:(0,w.Z)((0,w.Z)({},u),{},{position:"relative"}),className:ee},O),a.createElement(E,{className:"".concat(e,"-holder"),style:X,ref:y,onScroll:ft},a.createElement(xe,{prefixCls:e,height:te,offset:lt,onInnerResize:me,ref:de,innerProps:V},dt)),Z&&a.createElement(Ie,{ref:ge,prefixCls:e,scrollTop:H,height:r,scrollHeight:te,count:M.length,direction:p,onScroll:ct,onStartMove:function(){W(!0)},onStopMove:function(){W(!1)}}))}var he=a.forwardRef(Qe);he.displayName="List";var Xe=he,qe=Xe}}]);
