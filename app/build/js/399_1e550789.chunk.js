(self.webpackChunk=self.webpackChunk||[]).push([[399],{4918:function(e,t,n){"use strict";n.d(t,{Z:function(){return b}});var r,o=n(4078),a=n.n(o),l=n(8191),i=n.n(l),s=n(1439),u=n.n(s),c=n(7378),d=n(4246);e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const f=e=>{let{data:t=[]}=e;const n=u()(),r=(e,r)=>{e.stopPropagation(),i()((e=>{var t;r.value===e.value?null!=(t=r.list)&&t.length?e.open=!r.open:e.active=!0:(e.open=!1,e.active=!1)}))(t),n()};return(0,d.jsx)("div",{className:"menu-wrap",children:(0,d.jsx)("ul",{className:"menu-container",children:t.map(((e,t)=>(0,d.jsx)(m,{li:e,itemClick:r},e.value)))})})};p(f,"useUpdate{rerender}",(()=>[u()]));const m=e=>{var t,n;let{li:r,itemClick:o}=e;const l=(0,c.useRef)();return a()(l,(e=>r.open&&o(e,r))),(0,d.jsxs)("li",{ref:l,className:""+(r.open?"open":""),onClick:e=>o(e,r),children:[(0,d.jsxs)("a",{className:"menu-follow"+(r.active?" active":""),children:[(0,d.jsx)("span",{children:r.name}),null!=(t=r.list)&&t.length?(0,d.jsx)("i",{className:"menu-angle-"+(r.open?"top":"bt")}):null]}),null!=(n=r.list)&&n.length?(0,d.jsx)("ul",{className:"menu-arrow-rt",children:r.list.map((e=>(0,d.jsx)("li",{children:(0,d.jsx)("a",{className:"menu-tooltip",tooltips:e.name,children:e.name})},e.value)))}):null]})};p(m,"useRef{liRef}\nuseClickAway{}",(()=>[a()]));const y=f;var h,v,b=y;(h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(h.register(f,"Index","/Users/huyong/Desktop/huxy-admin/app/components/base/menu/index.jsx"),h.register(m,"LiItem","/Users/huyong/Desktop/huxy-admin/app/components/base/menu/index.jsx"),h.register(y,"default","/Users/huyong/Desktop/huxy-admin/app/components/base/menu/index.jsx")),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&v(e)},507:function(e,t,n){"use strict";var r,o=n(4246);e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const a=e=>{let{children:t,title:n,placement:r}=e;return(0,o.jsx)("span",{className:`tooltip-${r}`,tooltips:n,children:t})},l=a;var i,s;t.Z=l,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(a,"Index","/Users/huyong/Desktop/huxy-admin/app/components/base/tooltip/index.jsx"),i.register(l,"default","/Users/huyong/Desktop/huxy-admin/app/components/base/tooltip/index.jsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)},6836:function(e,t,n){"use strict";var r,o=n(4649),a=n(5396),l=n.n(a),i=n(7826),s=n.n(i),u=n(4347),c=n.n(u),d=n(7378),p=n(507),f=n(4246);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var h="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const v={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},b=e=>{let{children:t,ttProps:n}=e;const r=(0,d.useRef)(),[o,a]=(0,d.useState)(!1),i=c()(r,250);return(0,d.useEffect)((()=>{if(r.current){const{width:e}=s()(t),{width:n}=l()(r.current),i=e>n;i!==o&&a(i)}}),[t,i.width]),(0,f.jsx)("span",{ref:r,style:v,children:o?(0,f.jsx)(p.Z,y(y({placement:"topLeft",title:t},n),{},{children:t})):(0,f.jsx)("span",{children:t})})};h(b,"useRef{span}\nuseState{[ellipsis, setEllipsis](false)}\nuseEleResize{state}\nuseEffect{}",(()=>[c()]));const x=b;var j,g;t.Z=x,(j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(j.register(v,"style","/Users/huyong/Desktop/huxy-admin/app/components/ellipsis.jsx"),j.register(b,"Index","/Users/huyong/Desktop/huxy-admin/app/components/ellipsis.jsx"),j.register(x,"default","/Users/huyong/Desktop/huxy-admin/app/components/ellipsis.jsx")),(g="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&g(e)},1016:function(e,t,n){"use strict";var r;n.d(t,{a:function(){return a},z:function(){return o}}),e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const o=[{key:"",name:"线"},{key:"close",name:"关闭"},{key:"right",name:"右箭头"},{key:"bottom",name:"下箭头"},{key:"play",name:"启动"},{key:"play pause",name:"停止"}],a=[{name:"menu1",value:"menu1"},{name:"menu2",value:"menu2",list:[{name:"menu2-1",value:"menu2-1"},{name:"menu2-2",value:"menu2-2"}]},{name:"menu3",value:"menu3",list:[{name:"menu3-1",value:"menu3-1"},{name:"menu3-2",value:"menu3-2"},{name:"menu3-3",value:"menu3-3"}]},{name:"menu4",value:"menu4"}];var l,i;(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(l.register(o,"typeList","/Users/huyong/Desktop/huxy-admin/app/views/demo/styles/config.js"),l.register(a,"data","/Users/huyong/Desktop/huxy-admin/app/views/demo/styles/config.js")),(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&i(e)},2858:function(e,t,n){"use strict";n.r(t);var r,o=n(3735),a=n.n(o),l=n(8772),i=n.n(l),s=n(8233),u=n.n(s),c=n(4525),d=n.n(c),p=n(7378),f=n(8640),m=n(4265),y=n(6836),h=n(2775),v=n(4918),b=n(1016),x=n(4246);e=n.hmd(e),(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var j="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e};const g=e=>{let{state:t,name:n}=e;return(0,x.jsx)("div",{children:t[n]})},O=e=>{const[t,n]=(0,p.useState)(""),[r,o]=(0,p.useState)({});return(0,x.jsxs)(f.X,{children:[(0,x.jsx)(f.J,{span:6,children:(0,x.jsxs)(m.Z,{children:[(0,x.jsx)("div",{style:{width:200},children:(0,x.jsx)(y.Z,{children:"12233345657688967i8ijhfgrtrrfgthtgryhhyt"})}),(0,x.jsx)("div",{style:{width:200},children:(0,x.jsx)(y.Z,{children:"33333"})}),(0,x.jsx)("div",{style:{width:100},children:(0,x.jsx)(y.Z,{children:"12233345657688967i8ijhfgrtrrfgthtgryhhyt"})})]})}),(0,x.jsx)(f.J,{span:6,children:(0,x.jsxs)(m.Z,{children:[(0,x.jsx)("div",{style:{padding:20},children:(0,x.jsx)(d(),{type:t})}),(0,x.jsx)("div",{children:b.z.map((e=>{let{key:r,name:o}=e;return(0,x.jsx)(h.Z,{style:{marginRight:10},type:r===t?"primary":"",onClick:e=>n(r),children:o},r)}))})]})}),(0,x.jsx)(f.J,{span:6,children:(0,x.jsx)(m.Z,{children:(0,x.jsx)(u(),{})})}),(0,x.jsx)(f.J,{span:6,children:(0,x.jsxs)(m.Z,{children:[(0,x.jsx)("div",{children:i()({error:"load error demo"})}),(0,x.jsx)(a(),{children:(0,x.jsx)(g,{state:r,name:"eb"})}),r&&(0,x.jsx)(h.Z,{onClick:e=>o(null),children:"load"})]})}),(0,x.jsx)(f.J,{children:(0,x.jsx)(m.Z,{children:(0,x.jsx)(v.Z,{data:b.a})})})]})};j(O,"useState{[type, setType]('')}\nuseState{[demoError, setDemoError]({})}");const w=O;var L,k;t.default=w,(L="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(L.register(g,"ErrorComp","/Users/huyong/Desktop/huxy-admin/app/views/demo/styles/index.jsx"),L.register(O,"Index","/Users/huyong/Desktop/huxy-admin/app/views/demo/styles/index.jsx"),L.register(w,"default","/Users/huyong/Desktop/huxy-admin/app/views/demo/styles/index.jsx")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)},9982:function(e,t,n){var r;r=function(e){return function(){"use strict";var t={6053:function(e,t,n){var r=n(3899),o=Symbol.for("react.element"),a=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,n){var r,s={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:c,props:s,_owner:l.current}}t.jsx=s},7458:function(e,t,n){e.exports=n(6053)},3899:function(t){t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o={};return function(){function e(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}r.d(o,{default:function(){return v}});var n=r(3899),a=()=>![typeof window,typeof document].includes("undefined"),l=(e,t)=>Object.prototype.hasOwnProperty.call(null!=e?e:{},t),i=e=>l(e,"current");const s=["","webkit","moz","ms"],u=s.map((e=>`${e}fullscreenchange`));var c=e=>{if(!a())return;e=(e=i(e)?e.current:e)||document.body;const t=(e=>s.map((e=>e?`${e}FullscreenElement`:"fullscreenElement")).find((t=>e[t])))(document),n=(e=>s.map((e=>e?`${e}RequestFullscreen`:"requestFullscreen")).find((t=>e[t])))(e),r=(e=>s.map((e=>e?`${e}ExitFullscreen`:"exitFullscreen")).find((t=>e[t])))(document);var o,l,u,c;document[t]?null==(o=(l=document)[r])||o.call(l):null==(u=(c=e)[n])||u.call(c)},d=e=>{if(a())return u.map((t=>document.addEventListener(t,e,!1))),()=>u.map((t=>document.removeEventListener(t,e,!1)))},p=r(7458);const f=["panel","fullIcon","exitIcon"];function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?m(Object(r),!0).forEach((function(n){t(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const h=e=>(0,p.jsx)("i",y(y({},e),{},{children:"..."}));var v=t=>{let{panel:r,fullIcon:o=h,exitIcon:a=h}=t,l=e(t,f);const s=i(r)?r.current:r,[u,m]=(0,n.useState)();(0,n.useEffect)((()=>{const e=d((()=>{m((e=>!e))}));return()=>e()}),[]);const v=u?a:o;return(0,p.jsx)(v,y({onClick:e=>c(s)},l))}}(),o=o.default}()},e.exports=r(n(7378))},4347:function(e,t,n){var r;r=function(e){return function(){"use strict";var t={728:function(e,t,n){var r=n(899);t.default=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=(0,r.useRef)(0),[n,o]=(0,r.useState)(e),a=(0,r.useCallback)((e=>{cancelAnimationFrame(t.current),t.current=requestAnimationFrame((()=>o(e)))}),[]);return(0,r.useEffect)((()=>()=>cancelAnimationFrame(t.current)),[]),[n,a]}},899:function(t){t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var o={};return function(){r.d(o,{default:function(){return f}});var e=r(899),t=()=>![typeof window,typeof document].includes("undefined"),n=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),a=e=>n(e).indexOf("element")>-1,l=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return t()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:window.innerWidth||document.documentElement.clientWidth,height:window.innerHeight||document.documentElement.clientHeight}:{width:0,height:0}},i=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:()=>{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60,n=null;return function(){for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}},s=(e,t)=>Object.prototype.hasOwnProperty.call(null!=e?e:{},t),u=e=>s(e,"current");const c=(e,t)=>{e=a(e)?e:document.body,"static"===getComputedStyle(e).position&&(e.style.position="relative");const n=document.createElement("object");return n.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),n.setAttribute("class","resize-sensor"),n.onload=()=>{n.contentDocument.defaultView.addEventListener("resize",t,!1),t()},n.type="text/html",e.appendChild(n),n.data="about:blank",n};var d=function(e){let n,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;if(!t())return;e=u(e)?e.current:e;let o=[];const a=i((()=>o.map((t=>t(e)))),r),l=t=>{n||(n=c(e,a)),-1===o.indexOf(t)&&o.push(t)},s=e=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1),0===o.length&&n&&d()},d=()=>{n&&n.parentNode&&(n.contentDocument&&n.contentDocument.defaultView.removeEventListener("resize",a,!1),n.parentNode.removeChild(n),n=void 0,o=[])};return{element:e,bind:l,unbind:s,destroy:d}},p=r(728),f=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;const r=u(t)?t.current:t,{bind:o,destroy:a}=d(r,n),[i,s]=(0,p.default)(l(r));return(0,e.useEffect)((()=>(o((()=>s(l(r)))),()=>a())),[r]),i}}(),o=o.default}()},e.exports=r(n(7378))}}]);