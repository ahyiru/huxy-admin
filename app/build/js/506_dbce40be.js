(self.webpackChunk=self.webpackChunk||[]).push([[506],{3323:function(Wr,St){function te(L,ot){var c=L.length;L.push(ot);t:for(;0<c;){var z=c-1>>>1,x=L[z];if(0<Se(x,ot))L[z]=ot,L[c]=x,c=z;else break t}}function Bt(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var ot=L[0],c=L.pop();if(c!==ot){L[0]=c;t:for(var z=0,x=L.length,E=x>>>1;z<E;){var F=2*(z+1)-1,O=L[F],$=F+1,C=L[$];if(0>Se(O,c))$<x&&0>Se(C,O)?(L[z]=C,L[$]=c,z=$):(L[z]=O,L[F]=c,z=F);else if($<x&&0>Se(C,c))L[z]=C,L[$]=c,z=$;else break t}}return ot}function Se(L,ot){var c=L.sortIndex-ot.sortIndex;return c!==0?c:L.id-ot.id}if(typeof performance=="object"&&typeof performance.now=="function"){var Ne=performance;St.unstable_now=function(){return Ne.now()}}else{var ft=Date,A=ft.now();St.unstable_now=function(){return ft.now()-A}}var ut=[],jt=[],Rr=1,Vt=null,Ht=3,N=!1,M=!1,B=!1,V=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,tt=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(L){for(var ot=Bt(jt);ot!==null;){if(ot.callback===null)u(jt);else if(ot.startTime<=L)u(jt),ot.sortIndex=ot.expirationTime,te(ut,ot);else break;ot=Bt(jt)}}function rt(L){if(B=!1,J(L),!M)if(Bt(ut)!==null)M=!0,Rt(vt);else{var ot=Bt(jt);ot!==null&&ae(rt,ot.startTime-L)}}function vt(L,ot){M=!1,B&&(B=!1,H(Pt),Pt=-1),N=!0;var c=Ht;try{for(J(ot),Vt=Bt(ut);Vt!==null&&(!(Vt.expirationTime>ot)||L&&!Mt());){var z=Vt.callback;if(typeof z=="function"){Vt.callback=null,Ht=Vt.priorityLevel;var x=z(Vt.expirationTime<=ot);ot=St.unstable_now(),typeof x=="function"?Vt.callback=x:Vt===Bt(ut)&&u(ut),J(ot)}else u(ut);Vt=Bt(ut)}if(Vt!==null)var E=!0;else{var F=Bt(jt);F!==null&&ae(rt,F.startTime-ot),E=!1}return E}finally{Vt=null,Ht=c,N=!1}}var wt=!1,Ft=null,Pt=-1,lt=5,$t=-1;function Mt(){return!(St.unstable_now()-$t<lt)}function Zt(){if(Ft!==null){var L=St.unstable_now();$t=L;var ot=!0;try{ot=Ft(!0,L)}finally{ot?k():(wt=!1,Ft=null)}}else wt=!1}var k;if(typeof tt=="function")k=function(){tt(Zt)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Wt=Lt.port2;Lt.port1.onmessage=Zt,k=function(){Wt.postMessage(null)}}else k=function(){V(Zt,0)};function Rt(L){Ft=L,wt||(wt=!0,k())}function ae(L,ot){Pt=V(function(){L(St.unstable_now())},ot)}St.unstable_IdlePriority=5,St.unstable_ImmediatePriority=1,St.unstable_LowPriority=4,St.unstable_NormalPriority=3,St.unstable_Profiling=null,St.unstable_UserBlockingPriority=2,St.unstable_cancelCallback=function(L){L.callback=null},St.unstable_continueExecution=function(){M||N||(M=!0,Rt(vt))},St.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):lt=0<L?Math.floor(1e3/L):5},St.unstable_getCurrentPriorityLevel=function(){return Ht},St.unstable_getFirstCallbackNode=function(){return Bt(ut)},St.unstable_next=function(L){switch(Ht){case 1:case 2:case 3:var ot=3;break;default:ot=Ht}var c=Ht;Ht=ot;try{return L()}finally{Ht=c}},St.unstable_pauseExecution=function(){},St.unstable_requestPaint=function(){},St.unstable_runWithPriority=function(L,ot){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var c=Ht;Ht=L;try{return ot()}finally{Ht=c}},St.unstable_scheduleCallback=function(L,ot,c){var z=St.unstable_now();switch(typeof c=="object"&&c!==null?(c=c.delay,c=typeof c=="number"&&0<c?z+c:z):c=z,L){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=c+x,L={id:Rr++,callback:ot,priorityLevel:L,startTime:c,expirationTime:x,sortIndex:-1},c>z?(L.sortIndex=c,te(jt,L),Bt(ut)===null&&L===Bt(jt)&&(B?(H(Pt),Pt=-1):B=!0,ae(rt,c-z))):(L.sortIndex=x,te(ut,L),M||N||(M=!0,Rt(vt))),L},St.unstable_shouldYield=Mt,St.unstable_wrapCallback=function(L){var ot=Ht;return function(){var c=Ht;Ht=ot;try{return L.apply(this,arguments)}finally{Ht=c}}}},1102:function(Wr,St,te){Wr.exports=te(3323)},4335:function(Wr,St,te){var Bt;te.d(St,{$j:function(){return Mt},AN:function(){return rt},BQ:function(){return wt},GK:function(){return Zt},Hn:function(){return H},JX:function(){return Ht},PC:function(){return jt},Ud:function(){return M},V7:function(){return J},X2:function(){return $t},dy:function(){return N},h_:function(){return lt},mH:function(){return B},pC:function(){return Rt},s_:function(){return Pt},u_:function(){return Ft},zd:function(){return vt}});var u=te(7378),Se=te(1542),Ne={269:(c,z,x)=>{x.d(z,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),$=x.n(O),C=$()(F());C.push([c.id,`/*@height:2px;
@width:18px;
// @bgcolor:currentColor;
@bgcolor:#00b4cf;

@ratio:1.4142;
@rotate:45deg;
@scale:@ratio / (@ratio + 1);
@maigin:@height * 3;
@ty:@width / 4 - @height / @ratio;
@tx:@width / 4 + @height / @ratio;
@anitime:.3s;
*/
.nstud {
  --height: 2px;
  --width: 18px;
  --ratio: 1.4142;
  --rotate: 45deg;
  --anitime: 0.3s;
  --scale: calc(var(--ratio) / (var(--ratio) + 1));
  --maigin: calc(var(--height) * 3);
  --ty: calc(var(--width) / 4 - var(--height) / var(--ratio));
  --tx: calc(var(--width) / 4 + var(--height) / var(--ratio));
  position: relative;
  display: inline-block;
  height: 100%;
  width: var(--width);
}
.nstud .IZUmD, .nstud .IZUmD::before, .nstud .IZUmD::after {
  position: absolute;
  background-color: var(--linkHoverColor, currentColor);
  border-radius: 2px;
  transform: translateZ(0);
}
.nstud .IZUmD {
  width: var(--width);
  height: var(--height);
  display: inline-block;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  transition: transform var(--anitime), background-color var(--anitime);
}
.nstud .IZUmD::before, .nstud .IZUmD::after {
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: currentColor;
  transition: transform var(--anitime);
}
.nstud .IZUmD::before {
  transform: translateY(calc(0px - var(--maigin)));
}
.nstud .IZUmD::after {
  transform: translateY(var(--maigin));
}
.nstud .IZUmD.ylzxZ {
  background-color: rgba(255, 255, 255, 0);
}
.nstud .IZUmD.ylzxZ::before {
  transform: rotate(var(--rotate));
}
.nstud .IZUmD.ylzxZ::after {
  transform: rotate(calc(0deg - var(--rotate)));
}
.nstud .IZUmD.Wy_0M::before {
  transform: translateX(var(--tx)) translateY(calc(0px - var(--ty))) rotate(var(--rotate)) scaleX(var(--scale));
}
.nstud .IZUmD.Wy_0M::after {
  transform: translateX(var(--tx)) translateY(var(--ty)) rotate(calc(0deg - var(--rotate))) scaleX(var(--scale));
}
.nstud .IZUmD.bdjKS {
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
}
.nstud .IZUmD.bdjKS::before {
  transform: translateX(calc(0px - var(--tx))) translateY(calc(0px - var(--ty))) rotate(calc(0deg - var(--rotate))) scaleX(var(--scale));
}
.nstud .IZUmD.bdjKS::after {
  transform: translateX(calc(0px - var(--tx))) translateY(var(--ty)) rotate(var(--rotate)) scaleX(var(--scale));
}
.nstud .IZUmD.QPs9T {
  transform: translateX(-50%) translateY(-50%) rotate(-90deg);
  background-color: rgba(0, 0, 0, 0);
}
.nstud .IZUmD.QPs9T::before {
  transform-origin: 0 0;
}
.nstud .IZUmD.QPs9T::after {
  transform-origin: 100% 100%;
}
.nstud .IZUmD.QPs9T.tx7CH {
  background-color: var(--linkHoverColor, currentColor);
  transform: translateX(-75%) translateY(-50%) rotate(-90deg);
}
.nstud .IZUmD.QPs9T.tx7CH::before {
  transform: rotate(60deg);
}
.nstud .IZUmD.QPs9T.tx7CH::after {
  transform: rotate(-60deg);
}
@media screen and (max-width: 1024px) {
  .nstud .IZUmD.Wy_0M {
    background-color: rgba(255, 255, 255, 0);
  }
  .nstud .IZUmD.Wy_0M::before {
    transform: rotate(45deg);
  }
  .nstud .IZUmD.Wy_0M::after {
    transform: rotate(-45deg);
  }
}
`,""]),C.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"};const U=C},528:(c,z,x)=>{x.d(z,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),$=x.n(O),C=$()(F());C.push([c.id,`.kLIGi {
  --bar-color: #fff;
  --bar-width: 16px;
  position: relative;
  overflow: hidden;
}
.XoNs4 {
  transition: transform 0.5s cubic-bezier(0.24, 0.14, 0.17, 1.07);
}
.x4UPo {
  float: left;
}
.qYuQn {
  position: absolute;
  left: 50%;
  bottom: 10px;
  transform: translateX(-50%);
}
.qYuQn .GU0qu {
  display: inline-block;
  margin: 0 5px;
  width: var(--bar-width);
  height: 4px;
  border-radius: 2px;
  background: var(--bar-color);
  opacity: 0.3;
  cursor: pointer;
}
.qYuQn .GU0qu.svhYU {
  width: calc(var(--bar-width) + 8px);
  opacity: 1;
}
`,""]),C.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"};const U=C},434:(c,z,x)=>{x.d(z,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),$=x.n(O),C=$()(F());C.push([c.id,`@keyframes animate-drawer-right-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes animate-drawer-right-out {
  0% {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes animate-drawer-left-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
}
@keyframes animate-drawer-left-out {
  0% {
    opacity: 1;
    transform: translate3d(100%, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
}
.KsHNu {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 100%;
  background: #ffffff;
  width: 300px;
  opacity: 0;
  transform: translate3d(0, 0, 0);
}
.KsHNu {
  animation: animate-drawer-right-out 0.25s forwards;
}
.KsHNu.c6aFy {
  animation: animate-drawer-right-in 0.25s forwards;
}
.KsHNu.mlowE {
  top: 0;
  bottom: 0;
  left: 100%;
}
.KsHNu.mlowE {
  animation: animate-drawer-right-out 0.25s forwards;
}
.KsHNu.mlowE.c6aFy {
  animation: animate-drawer-right-in 0.25s forwards;
}
.KsHNu.w0B0d {
  top: 0;
  bottom: 0;
  right: 100%;
  left: auto;
}
.KsHNu.w0B0d {
  animation: animate-drawer-left-out 0.25s forwards;
}
.KsHNu.w0B0d.c6aFy {
  animation: animate-drawer-left-in 0.25s forwards;
}
.W4gG3 {
  position: relative;
}
.W4gG3 .SMORg {
  padding: 8px 12px 24px;
}
.W4gG3 .e3AWW {
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.W4gG3 .e3AWW .VSVwl {
  position: relative;
  font-size: 2.2rem;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 2px;
  border-color: rgba(0, 0, 0, 0.02);
}
.W4gG3 .e3AWW .VSVwl:before {
  content: "\\00D7";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.W4gG3 .e3AWW .VSVwl:hover {
  border-color: rgba(0, 0, 0, 0.1);
}
.W4gG3 .hlj9r {
  height: 44px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
`,""]),C.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"};const U=C},503:(c,z,x)=>{x.d(z,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),$=x.n(O),C=$()(F());C.push([c.id,`@keyframes animate-drop-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes animate-drop-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -30px, 0);
  }
}
.TEYHV {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}
.TEYHV::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.NCYpg {
  --bgColor: #ffffff;
  --borderColor: #f0f0f0;
  position: fixed !important;
  z-index: 10001;
  opacity: 0;
  min-width: 100px;
  min-height: 50px;
  border-radius: 4px;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
  transform: translate3d(0, -30px, 0);
}
.NCYpg {
  animation: animate-drop-out 0.25s forwards;
}
.NCYpg.qjBWI {
  animation: animate-drop-in 0.25s forwards;
}
.huxy-drop-arrow-lt {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-lt::before,
.huxy-drop-arrow-lt::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-lt::before {
  border-width: 6px;
}
.huxy-drop-arrow-lt::after {
  border-width: 5px;
}
.huxy-drop-arrow-lt::before,
.huxy-drop-arrow-lt::after {
  top: auto;
  bottom: 100%;
}
.huxy-drop-arrow-lt::before {
  left: 10px;
  border-bottom-color: var(--borderColor);
}
.huxy-drop-arrow-lt::after {
  left: calc(10px + 1px);
  border-bottom-color: var(--bgColor);
}
.huxy-drop-arrow-rt {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-rt::before,
.huxy-drop-arrow-rt::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-rt::before {
  border-width: 6px;
}
.huxy-drop-arrow-rt::after {
  border-width: 5px;
}
.huxy-drop-arrow-rt::before,
.huxy-drop-arrow-rt::after {
  left: auto;
  top: auto;
  bottom: 100%;
}
.huxy-drop-arrow-rt::before {
  right: 10px;
  border-bottom-color: var(--borderColor);
}
.huxy-drop-arrow-rt::after {
  right: calc(10px + 1px);
  border-bottom-color: var(--bgColor);
}
.huxy-drop-arrow-lb {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-lb::before,
.huxy-drop-arrow-lb::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-lb::before {
  border-width: 6px;
}
.huxy-drop-arrow-lb::after {
  border-width: 5px;
}
.huxy-drop-arrow-lb::before,
.huxy-drop-arrow-lb::after {
  bottom: auto;
  top: 100%;
  border-top-color: var(--borderColor);
}
.huxy-drop-arrow-lb::before {
  left: 10px;
}
.huxy-drop-arrow-lb::after {
  left: calc(10px + 1px);
  border-top-color: var(--bgColor);
}
.huxy-drop-arrow-rb {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-rb::before,
.huxy-drop-arrow-rb::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-rb::before {
  border-width: 6px;
}
.huxy-drop-arrow-rb::after {
  border-width: 5px;
}
.huxy-drop-arrow-rb::before,
.huxy-drop-arrow-rb::after {
  bottom: auto;
  top: 100%;
}
.huxy-drop-arrow-rb::before {
  right: 10px;
  border-top-color: var(--borderColor);
}
.huxy-drop-arrow-rb::after {
  right: calc(10px + 1px);
  border-top-color: var(--bgColor);
}
.huxy-drop-arrow-tl {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-tl::before,
.huxy-drop-arrow-tl::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-tl::before {
  border-width: 6px;
}
.huxy-drop-arrow-tl::after {
  border-width: 5px;
}
.huxy-drop-arrow-tl::before,
.huxy-drop-arrow-tl::after {
  left: auto;
  right: 100%;
}
.huxy-drop-arrow-tl::before {
  top: 10px;
  border-right-color: var(--borderColor);
}
.huxy-drop-arrow-tl::after {
  top: calc(10px + 1px);
  border-right-color: var(--bgColor);
}
.huxy-drop-arrow-tr {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-tr::before,
.huxy-drop-arrow-tr::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-tr::before {
  border-width: 6px;
}
.huxy-drop-arrow-tr::after {
  border-width: 5px;
}
.huxy-drop-arrow-tr::before,
.huxy-drop-arrow-tr::after {
  right: auto;
  left: 100%;
}
.huxy-drop-arrow-tr::before {
  top: 10px;
  border-left-color: var(--borderColor);
}
.huxy-drop-arrow-tr::after {
  top: calc(10px + 1px);
  border-left-color: var(--bgColor);
}
.huxy-drop-arrow-bl {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-bl::before,
.huxy-drop-arrow-bl::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-bl::before {
  border-width: 6px;
}
.huxy-drop-arrow-bl::after {
  border-width: 5px;
}
.huxy-drop-arrow-bl::before,
.huxy-drop-arrow-bl::after {
  left: auto;
  right: 100%;
}
.huxy-drop-arrow-bl::before {
  bottom: 10px;
  border-right-color: var(--borderColor);
}
.huxy-drop-arrow-bl::after {
  bottom: calc(10px + 1px);
  border-right-color: var(--bgColor);
}
.huxy-drop-arrow-br {
  position: relative;
  background: var(--bgColor);
  border: 1px solid var(--borderColor);
}
.huxy-drop-arrow-br::before,
.huxy-drop-arrow-br::after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  border: solid transparent;
}
.huxy-drop-arrow-br::before {
  border-width: 6px;
}
.huxy-drop-arrow-br::after {
  border-width: 5px;
}
.huxy-drop-arrow-br::before,
.huxy-drop-arrow-br::after {
  right: auto;
  left: 100%;
}
.huxy-drop-arrow-br::before {
  bottom: 10px;
  border-left-color: var(--borderColor);
}
.huxy-drop-arrow-br::after {
  bottom: calc(10px + 1px);
  border-left-color: var(--bgColor);
}
`,""]),C.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"};const U=C},548:(c,z,x)=>{x.d(z,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),$=x.n(O),C=$()(F());C.push([c.id,`@keyframes animate-modal-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes animate-modal-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.SqXAN {
  position: fixed;
  background: #ffffff;
  border-radius: 12px;
  width: 300px;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
}
.SqXAN {
  animation: animate-modal-out 0.25s forwards;
}
.SqXAN.S3vb_ {
  animation: animate-modal-in 0.25s forwards;
}
.RiDlb {
  position: relative;
}
.RiDlb .xdqLE {
  text-align: center;
  font-weight: 500;
  font-size: 16px;
  color: #000000;
  padding: 20px 12px 0;
}
.RiDlb .C91AO {
  padding: 8px 12px 24px;
}
.RiDlb .J6dpF {
  height: 44px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
.RiDlb .J6dpF .XOnmm {
  font-weight: 500;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 50%;
  height: 100%;
}
.RiDlb .J6dpF .XOnmm.t1Fx9 {
  color: #666666;
  border-right: 1px solid #edeff2;
}
.RiDlb .J6dpF .XOnmm.YGj9K {
  color: #036dff;
}
`,""]),C.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"};const U=C},232:(c,z,x)=>{x.d(z,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),$=x.n(O),C=$()(F());C.push([c.id,`.clear::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.J8VWE {
  --radius: 2px;
  position: relative;
  background: var(--panelBgColor);
  border-radius: var(--radius);
  height: 100%;
  z-index: 1;
  /*&:hover{
      box-shadow:0px 2px 5px hsla(0,0%,80%,.7);
    }*/
}
.J8VWE.ohmPp {
  box-shadow: 0 0 3rem rgba(100, 200, 255, 0.5) inset;
}
.J8VWE.JzE05 {
  border-color: rgba(0, 180, 220, 0.5);
  box-shadow: 0 0 2rem rgba(0, 180, 220, 0.5) inset;
}
.J8VWE .rOxNb {
  padding: 10px 12px;
  border-radius: var(--radius);
}
.J8VWE .rOxNb::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.J8VWE .OQwTX {
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.02);
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
}
.J8VWE .OQwTX::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.J8VWE .OQwTX .W_1K6 {
  flex: 1;
  width: 0;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.J8VWE .OQwTX .eCk2_ {
  flex: 1;
  flex-shrink: 0;
  float: right;
}
.J8VWE .OQwTX .eCk2_ .R2Mku {
  float: right;
  font-size: 1.8rem;
}
.J8VWE .OQwTX .eCk2_ .R2Mku:not(:first-of-type) {
  margin-right: 10px;
}
.J8VWE .OQwTX + .rOxNb {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
`,""]),C.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"};const U=C},249:(c,z,x)=>{x.d(z,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),$=x.n(O),C=$()(F());C.push([c.id,`.cols-1 {
  width: 8.33333333%;
}
.cols-2 {
  width: 16.66666667%;
}
.cols-3 {
  width: 25%;
}
.cols-4 {
  width: 33.33333333%;
}
.cols-5 {
  width: 41.66666667%;
}
.cols-6 {
  width: 50%;
}
.cols-7 {
  width: 58.33333333%;
}
.cols-8 {
  width: 66.66666667%;
}
.cols-9 {
  width: 75%;
}
.cols-10 {
  width: 83.33333333%;
}
.cols-11 {
  width: 91.66666667%;
}
.cols-12 {
  width: 100%;
}
.offsets-0 {
  margin-left: 0;
}
.offsets-1 {
  margin-left: 8.33333333%;
}
.offsets-2 {
  margin-left: 16.66666667%;
}
.offsets-3 {
  margin-left: 25%;
}
.offsets-4 {
  margin-left: 33.33333333%;
}
.offsets-5 {
  margin-left: 41.66666667%;
}
.offsets-6 {
  margin-left: 50%;
}
.offsets-7 {
  margin-left: 58.33333333%;
}
.offsets-8 {
  margin-left: 66.66666667%;
}
.offsets-9 {
  margin-left: 75%;
}
.offsets-10 {
  margin-left: 83.33333333%;
}
.offsets-11 {
  margin-left: 91.66666667%;
}
.offsets-12 {
  margin-left: 100%;
}
.row-wrap {
  --gutter: 8px;
  --rowgap: 8px;
  width: 100%;
}
.row-wrap + .row-wrap {
  margin-top: calc(var(--rowgap) * 2);
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin: calc(0px - var(--rowgap)) calc(0px - var(--gutter));
}
.row [class^="col-"] {
  padding: var(--rowgap) var(--gutter);
  position: relative;
}
.row .col-1 {
  width: 8.33333333%;
}
.row .col-2 {
  width: 16.66666667%;
}
.row .col-3 {
  width: 25%;
}
.row .col-4 {
  width: 33.33333333%;
}
.row .col-5 {
  width: 41.66666667%;
}
.row .col-6 {
  width: 50%;
}
.row .col-7 {
  width: 58.33333333%;
}
.row .col-8 {
  width: 66.66666667%;
}
.row .col-9 {
  width: 75%;
}
.row .col-10 {
  width: 83.33333333%;
}
.row .col-11 {
  width: 91.66666667%;
}
.row .col-12 {
  width: 100%;
}
.row .offset-0 {
  margin-left: 0;
}
.row .offset-1 {
  margin-left: 8.33333333%;
}
.row .offset-2 {
  margin-left: 16.66666667%;
}
.row .offset-3 {
  margin-left: 25%;
}
.row .offset-4 {
  margin-left: 33.33333333%;
}
.row .offset-5 {
  margin-left: 41.66666667%;
}
.row .offset-6 {
  margin-left: 50%;
}
.row .offset-7 {
  margin-left: 58.33333333%;
}
.row .offset-8 {
  margin-left: 66.66666667%;
}
.row .offset-9 {
  margin-left: 75%;
}
.row .offset-10 {
  margin-left: 83.33333333%;
}
.row .offset-11 {
  margin-left: 91.66666667%;
}
.row .offset-12 {
  margin-left: 100%;
}
@media screen and (min-width: 1600px) {
  .row .col-xl-1 {
    width: 8.33333333%;
  }
  .row .col-xl-2 {
    width: 16.66666667%;
  }
  .row .col-xl-3 {
    width: 25%;
  }
  .row .col-xl-4 {
    width: 33.33333333%;
  }
  .row .col-xl-5 {
    width: 41.66666667%;
  }
  .row .col-xl-6 {
    width: 50%;
  }
  .row .col-xl-7 {
    width: 58.33333333%;
  }
  .row .col-xl-8 {
    width: 66.66666667%;
  }
  .row .col-xl-9 {
    width: 75%;
  }
  .row .col-xl-10 {
    width: 83.33333333%;
  }
  .row .col-xl-11 {
    width: 91.66666667%;
  }
  .row .col-xl-12 {
    width: 100%;
  }
  .row .offset-xl-0 {
    margin-left: 0;
  }
  .row .offset-xl-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-xl-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-xl-3 {
    margin-left: 25%;
  }
  .row .offset-xl-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-xl-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-xl-6 {
    margin-left: 50%;
  }
  .row .offset-xl-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-xl-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-xl-9 {
    margin-left: 75%;
  }
  .row .offset-xl-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-xl-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-xl-12 {
    margin-left: 100%;
  }
}
@media screen and (min-width: 1200px) and (max-width: 1600px) {
  .row .col-lg-1 {
    width: 8.33333333%;
  }
  .row .col-lg-2 {
    width: 16.66666667%;
  }
  .row .col-lg-3 {
    width: 25%;
  }
  .row .col-lg-4 {
    width: 33.33333333%;
  }
  .row .col-lg-5 {
    width: 41.66666667%;
  }
  .row .col-lg-6 {
    width: 50%;
  }
  .row .col-lg-7 {
    width: 58.33333333%;
  }
  .row .col-lg-8 {
    width: 66.66666667%;
  }
  .row .col-lg-9 {
    width: 75%;
  }
  .row .col-lg-10 {
    width: 83.33333333%;
  }
  .row .col-lg-11 {
    width: 91.66666667%;
  }
  .row .col-lg-12 {
    width: 100%;
  }
  .row .offset-lg-0 {
    margin-left: 0;
  }
  .row .offset-lg-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-lg-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-lg-3 {
    margin-left: 25%;
  }
  .row .offset-lg-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-lg-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-lg-6 {
    margin-left: 50%;
  }
  .row .offset-lg-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-lg-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-lg-9 {
    margin-left: 75%;
  }
  .row .offset-lg-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-lg-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-lg-12 {
    margin-left: 100%;
  }
}
@media screen and (min-width: 992px) and (max-width: 1200px) {
  .row .col-md-1 {
    width: 8.33333333%;
  }
  .row .col-md-2 {
    width: 16.66666667%;
  }
  .row .col-md-3 {
    width: 25%;
  }
  .row .col-md-4 {
    width: 33.33333333%;
  }
  .row .col-md-5 {
    width: 41.66666667%;
  }
  .row .col-md-6 {
    width: 50%;
  }
  .row .col-md-7 {
    width: 58.33333333%;
  }
  .row .col-md-8 {
    width: 66.66666667%;
  }
  .row .col-md-9 {
    width: 75%;
  }
  .row .col-md-10 {
    width: 83.33333333%;
  }
  .row .col-md-11 {
    width: 91.66666667%;
  }
  .row .col-md-12 {
    width: 100%;
  }
  .row .offset-md-0 {
    margin-left: 0;
  }
  .row .offset-md-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-md-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-md-3 {
    margin-left: 25%;
  }
  .row .offset-md-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-md-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-md-6 {
    margin-left: 50%;
  }
  .row .offset-md-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-md-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-md-9 {
    margin-left: 75%;
  }
  .row .offset-md-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-md-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-md-12 {
    margin-left: 100%;
  }
}
@media screen and (min-width: 768px) and (max-width: 992px) {
  .row .col-sm-1 {
    width: 8.33333333%;
  }
  .row .col-sm-2 {
    width: 16.66666667%;
  }
  .row .col-sm-3 {
    width: 25%;
  }
  .row .col-sm-4 {
    width: 33.33333333%;
  }
  .row .col-sm-5 {
    width: 41.66666667%;
  }
  .row .col-sm-6 {
    width: 50%;
  }
  .row .col-sm-7 {
    width: 58.33333333%;
  }
  .row .col-sm-8 {
    width: 66.66666667%;
  }
  .row .col-sm-9 {
    width: 75%;
  }
  .row .col-sm-10 {
    width: 83.33333333%;
  }
  .row .col-sm-11 {
    width: 91.66666667%;
  }
  .row .col-sm-12 {
    width: 100%;
  }
  .row .offset-sm-0 {
    margin-left: 0;
  }
  .row .offset-sm-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-sm-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-sm-3 {
    margin-left: 25%;
  }
  .row .offset-sm-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-sm-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-sm-6 {
    margin-left: 50%;
  }
  .row .offset-sm-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-sm-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-sm-9 {
    margin-left: 75%;
  }
  .row .offset-sm-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-sm-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-sm-12 {
    margin-left: 100%;
  }
}
@media screen and (max-width: 768px) {
  .row .col-xs-1 {
    width: 8.33333333%;
  }
  .row .col-xs-2 {
    width: 16.66666667%;
  }
  .row .col-xs-3 {
    width: 25%;
  }
  .row .col-xs-4 {
    width: 33.33333333%;
  }
  .row .col-xs-5 {
    width: 41.66666667%;
  }
  .row .col-xs-6 {
    width: 50%;
  }
  .row .col-xs-7 {
    width: 58.33333333%;
  }
  .row .col-xs-8 {
    width: 66.66666667%;
  }
  .row .col-xs-9 {
    width: 75%;
  }
  .row .col-xs-10 {
    width: 83.33333333%;
  }
  .row .col-xs-11 {
    width: 91.66666667%;
  }
  .row .col-xs-12 {
    width: 100%;
  }
  .row .offset-xs-0 {
    margin-left: 0;
  }
  .row .offset-xs-1 {
    margin-left: 8.33333333%;
  }
  .row .offset-xs-2 {
    margin-left: 16.66666667%;
  }
  .row .offset-xs-3 {
    margin-left: 25%;
  }
  .row .offset-xs-4 {
    margin-left: 33.33333333%;
  }
  .row .offset-xs-5 {
    margin-left: 41.66666667%;
  }
  .row .offset-xs-6 {
    margin-left: 50%;
  }
  .row .offset-xs-7 {
    margin-left: 58.33333333%;
  }
  .row .offset-xs-8 {
    margin-left: 66.66666667%;
  }
  .row .offset-xs-9 {
    margin-left: 75%;
  }
  .row .offset-xs-10 {
    margin-left: 83.33333333%;
  }
  .row .offset-xs-11 {
    margin-left: 91.66666667%;
  }
  .row .offset-xs-12 {
    margin-left: 100%;
  }
}
`,""]),C.locals={};const U=C},990:(c,z,x)=>{x.d(z,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),$=x.n(O),C=$()(F());C.push([c.id,`@keyframes before {
  0% {
    width: 0.6rem;
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
  35% {
    width: 3rem;
    box-shadow: 0 -0.6rem #ff3e38, 0 0.6rem #318ffa;
  }
  70% {
    width: 0.6rem;
    box-shadow: -1.2rem -0.6rem #ff3e38, 1.2rem 0.6rem #318ffa;
  }
  100% {
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
}
@keyframes after {
  0% {
    height: 0.6rem;
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
  35% {
    height: 3rem;
    box-shadow: 0.6rem 0 #6ce581, -0.6rem 0 #fecb2e;
  }
  70% {
    height: 0.6rem;
    box-shadow: 0.6rem -1.2rem #6ce581, -0.6rem 1.2rem #fecb2e;
  }
  100% {
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
}
.spinner {
  position: relative;
  height: 100%;
  min-height: 100px;
  display: block;
  overflow: hidden;
  pointer-events: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: hsla(0, 0%, 72%, 0.24);
}
.spinner.absolute {
  position: absolute;
  min-height: auto;
}
.spinner.global {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.spinner .spinning {
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(165deg);
  margin: 0;
}
.spinner .spinning::before,
.spinner .spinning::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  transform: translate(-50%, -50%);
}
.spinner .spinning::before {
  animation: before 1.5s infinite;
}
.spinner .spinning::after {
  animation: after 1.5s infinite;
}
`,""]),C.locals={};const U=C},575:(c,z,x)=>{x.d(z,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),$=x.n(O),C=$()(F());C.push([c.id,`.clear::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.tabs-header-wrap {
  position: relative;
  border-bottom: 3px solid rgba(0, 0, 0, 0.06);
  margin-bottom: 12px;
}
.tabs-header-wrap .tabs-header {
  display: block;
  user-select: none;
  margin: 0;
  padding: 0;
}
.tabs-header-wrap .tabs-header::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.tabs-header-wrap .tabs-header.flex {
  display: flex;
}
.tabs-header-wrap .tabs-header.flex .th-item {
  flex: 1;
  text-align: center;
}
.tabs-header-wrap .tabs-header .th-item {
  display: block;
  float: left;
  position: relative;
  cursor: pointer;
  border-right: 1px solid transparent;
  margin-right: 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 500;
}
.tabs-header-wrap .tabs-header .th-item:last-of-type {
  border: 0;
  margin-right: 0;
}
.tabs-header-wrap .tabs-header .th-item:hover {
  color: #40a9ff;
}
.tabs-header-wrap .tabs-header .th-item.active {
  color: #40a9ff;
}
.tabs-header-wrap .th-track {
  height: 3px;
  position: absolute;
  left: 0;
  bottom: -3px;
  color: #40a9ff;
  background-color: currentColor;
  transition: all 0.3s;
}
.tabs-header-wrap .th-track::after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: currentColor;
}
`,""]),C.locals={};const U=C},918:(c,z,x)=>{x.d(z,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),$=x.n(O),C=$()(F());C.push([c.id,`.ofth_ {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
}
.hVmF3 {
  position: relative;
  width: 100%;
}
.hVmF3:hover::before, .hVmF3:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.hVmF3:hover::before {
  transform: translateY(0);
}
.hVmF3:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.hVmF3::before, .hVmF3::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.hVmF3::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.hVmF3::after {
  content: "";
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.uzFyE {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: 135deg;
}
.uzFyE[tooltip] {
  position: relative;
  width: 100%;
}
.uzFyE[tooltip]:hover::before, .uzFyE[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.uzFyE[tooltip]:hover::before {
  transform: translateY(0);
}
.uzFyE[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.uzFyE[tooltip]::before, .uzFyE[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.uzFyE[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.uzFyE[tooltip]::after {
  content: "";
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.uzFyE[tooltip]::before {
  left: 0;
  bottom: calc(100% + var(--arrowSize));
}
.uzFyE[tooltip]::after {
  left: var(--position);
  bottom: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.Giihu {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: 135deg;
}
.Giihu[tooltip] {
  position: relative;
  width: 100%;
}
.Giihu[tooltip]:hover::before, .Giihu[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.Giihu[tooltip]:hover::before {
  transform: translateY(0);
}
.Giihu[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.Giihu[tooltip]::before, .Giihu[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.Giihu[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.Giihu[tooltip]::after {
  content: "";
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.Giihu[tooltip]::before {
  right: 0;
  bottom: calc(100% + var(--arrowSize));
}
.Giihu[tooltip]::after {
  right: var(--position);
  bottom: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.bFVVt {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: -45deg;
}
.bFVVt[tooltip] {
  position: relative;
  width: 100%;
}
.bFVVt[tooltip]:hover::before, .bFVVt[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.bFVVt[tooltip]:hover::before {
  transform: translateY(0);
}
.bFVVt[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.bFVVt[tooltip]::before, .bFVVt[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.bFVVt[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.bFVVt[tooltip]::after {
  content: "";
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.bFVVt[tooltip]::before {
  left: 0;
  top: calc(100% + var(--arrowSize));
}
.bFVVt[tooltip]::after {
  left: var(--position);
  top: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.oGmKq {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: -45deg;
}
.oGmKq[tooltip] {
  position: relative;
  width: 100%;
}
.oGmKq[tooltip]:hover::before, .oGmKq[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.oGmKq[tooltip]:hover::before {
  transform: translateY(0);
}
.oGmKq[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.oGmKq[tooltip]::before, .oGmKq[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.oGmKq[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.oGmKq[tooltip]::after {
  content: "";
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.oGmKq[tooltip]::before {
  right: 0;
  top: calc(100% + var(--arrowSize));
}
.oGmKq[tooltip]::after {
  right: var(--position);
  top: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.svYWD {
  --tooltipBgColor: #303133;
  --tooltipBorderColor: #303133;
  --tooltipColor: #fff;
  --position: 15px;
  --arrowSize: 8px;
  --rotate: -45deg;
}
.svYWD[tooltip] {
  position: relative;
  width: 100%;
}
.svYWD[tooltip]:hover::before, .svYWD[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.svYWD[tooltip]:hover::before {
  transform: translateY(0);
}
.svYWD[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.svYWD[tooltip]::before, .svYWD[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: var(--tooltipBgColor);
  border: 1px solid var(--tooltipBorderColor);
  transition: opacity 0.2s, transform 0.2s;
}
.svYWD[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: var(--tooltipColor);
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.svYWD[tooltip]::after {
  content: "";
  height: calc(var(--arrowSize) + 2px);
  width: calc(var(--arrowSize) + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.svYWD[tooltip]::before {
  top: 0;
  left: calc(100% + var(--arrowSize));
}
.svYWD[tooltip]::after {
  top: var(--position);
  left: calc(100% + var(--arrowSize) / 2);
  transform: translateY(0) rotate(var(--rotate));
}
`,""]),C.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"};const U=C},942:(c,z,x)=>{x.d(z,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),$=x.n(O),C=$()(F());C.push([c.id,`.node-right-icon-close {
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
`,""]),C.locals={};const U=C},609:c=>{c.exports=function(z){var x=[];return x.toString=function(){return this.map(function(E){var F="",O=typeof E[5]<"u";return E[4]&&(F+="@supports (".concat(E[4],") {")),E[2]&&(F+="@media ".concat(E[2]," {")),O&&(F+="@layer".concat(E[5].length>0?" ".concat(E[5]):""," {")),F+=z(E),O&&(F+="}"),E[2]&&(F+="}"),E[4]&&(F+="}"),F}).join("")},x.i=function(E,F,O,$,C){typeof E=="string"&&(E=[[null,E,void 0]]);var U={};if(O)for(var xt=0;xt<this.length;xt++){var kt=this[xt][0];kt!=null&&(U[kt]=!0)}for(var Ut=0;Ut<E.length;Ut++){var Q=[].concat(E[Ut]);O&&U[Q[0]]||(typeof C<"u"&&(typeof Q[5]>"u"||(Q[1]="@layer".concat(Q[5].length>0?" ".concat(Q[5]):""," {").concat(Q[1],"}")),Q[5]=C),F&&(Q[2]&&(Q[1]="@media ".concat(Q[2]," {").concat(Q[1],"}")),Q[2]=F),$&&(Q[4]?(Q[1]="@supports (".concat(Q[4],") {").concat(Q[1],"}"),Q[4]=$):Q[4]="".concat($)),x.push(Q))}},x}},601:c=>{c.exports=function(z){return z[1]}},837:(c,z,x)=>{var E,F=x(810),O=Symbol.for("react.element"),$=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,U=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xt={key:!0,ref:!0,__self:!0,__source:!0};function kt(Ut,Q,Xt){var _t,qt={},le=null,ee=null;Xt!==void 0&&(le=""+Xt),Q.key!==void 0&&(le=""+Q.key),Q.ref!==void 0&&(ee=Q.ref);for(_t in Q)C.call(Q,_t)&&!xt.hasOwnProperty(_t)&&(qt[_t]=Q[_t]);if(Ut&&Ut.defaultProps)for(_t in Q=Ut.defaultProps,Q)qt[_t]===void 0&&(qt[_t]=Q[_t]);return{$$typeof:O,type:Ut,key:le,ref:ee,props:qt,_owner:U.current}}E=$,z.jsx=kt,z.jsxs=kt},322:(c,z,x)=>{c.exports=x(837)},62:c=>{var z=[];function x(O){for(var $=-1,C=0;C<z.length;C++)if(z[C].identifier===O){$=C;break}return $}function E(O,$){for(var C={},U=[],xt=0;xt<O.length;xt++){var kt=O[xt],Ut=$.base?kt[0]+$.base:kt[0],Q=C[Ut]||0,Xt="".concat(Ut," ").concat(Q);C[Ut]=Q+1;var _t=x(Xt),qt={css:kt[1],media:kt[2],sourceMap:kt[3],supports:kt[4],layer:kt[5]};if(_t!==-1)z[_t].references++,z[_t].updater(qt);else{var le=F(qt,$);$.byIndex=xt,z.splice(xt,0,{identifier:Xt,updater:le,references:1})}U.push(Xt)}return U}function F(O,$){var C=$.domAPI($);C.update(O);var U=function(xt){if(xt){if(xt.css===O.css&&xt.media===O.media&&xt.sourceMap===O.sourceMap&&xt.supports===O.supports&&xt.layer===O.layer)return;C.update(O=xt)}else C.remove()};return U}c.exports=function(O,$){$=$||{},O=O||[];var C=E(O,$);return function(U){U=U||[];for(var xt=0;xt<C.length;xt++){var kt=C[xt],Ut=x(kt);z[Ut].references--}for(var Q=E(U,$),Xt=0;Xt<C.length;Xt++){var _t=C[Xt],qt=x(_t);z[qt].references===0&&(z[qt].updater(),z.splice(qt,1))}C=Q}}},793:c=>{var z={};function x(F){if(typeof z[F]>"u"){var O=document.querySelector(F);if(window.HTMLIFrameElement&&O instanceof window.HTMLIFrameElement)try{O=O.contentDocument.head}catch{O=null}z[F]=O}return z[F]}function E(F,O){var $=x(F);if(!$)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");$.appendChild(O)}c.exports=E},173:c=>{function z(x){var E=document.createElement("style");return x.setAttributes(E,x.attributes),x.insert(E,x.options),E}c.exports=z},892:(c,z,x)=>{function E(F){var O=x.nc;O&&F.setAttribute("nonce",O)}c.exports=E},36:c=>{function z(F,O,$){var C="";$.supports&&(C+="@supports (".concat($.supports,") {")),$.media&&(C+="@media ".concat($.media," {"));var U=typeof $.layer<"u";U&&(C+="@layer".concat($.layer.length>0?" ".concat($.layer):""," {")),C+=$.css,U&&(C+="}"),$.media&&(C+="}"),$.supports&&(C+="}");var xt=$.sourceMap;xt&&typeof btoa<"u"&&(C+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(xt))))," */")),O.styleTagTransform(C,F,O.options)}function x(F){if(F.parentNode===null)return!1;F.parentNode.removeChild(F)}function E(F){var O=F.insertStyleElement(F);return{update:function($){z(O,F,$)},remove:function(){x(O)}}}c.exports=E},464:c=>{function z(x,E){if(E.styleSheet)E.styleSheet.cssText=x;else{for(;E.firstChild;)E.removeChild(E.firstChild);E.appendChild(document.createTextNode(x))}}c.exports=z},810:c=>{var z=E=>{var F={};return A.d(F,E),F},x=E=>()=>E;c.exports=Bt||(Bt=te.t(u,2))}},ft={};function A(c){var z=ft[c];if(z!==void 0)return z.exports;var x=ft[c]={id:c,exports:{}};return Ne[c](x,x.exports,A),x.exports}A.n=c=>{var z=c&&c.__esModule?()=>c.default:()=>c;return A.d(z,{a:z}),z},A.d=(c,z)=>{for(var x in z)A.o(z,x)&&!A.o(c,x)&&Object.defineProperty(c,x,{enumerable:!0,get:z[x]})},A.o=(c,z)=>Object.prototype.hasOwnProperty.call(c,z),A.nc=void 0;var ut={};(()=>{A.d(ut,{PC:()=>ee,rK:()=>tr,lr:()=>yr,JX:()=>_e,dy:()=>S,Ud:()=>Zr,mH:()=>q,SV:()=>Ct,Hn:()=>Xe,rj:()=>Gr,V7:()=>qe,AN:()=>se,zd:()=>we,BQ:()=>Jr,u_:()=>so,s_:()=>ho,h_:()=>Be,X2:()=>Ee,$j:()=>co,GK:()=>Ao,u:()=>m,mp:()=>Lo,C2:()=>Ot,pC:()=>zt,ff:()=>to,d2:()=>Or,Uw:()=>Do});var c=A(322),z=A(62),x=A.n(z),E=A(36),F=A.n(E),O=A(793),$=A.n(O),C=A(892),U=A.n(C),xt=A(173),kt=A.n(xt),Ut=A(464),Q=A.n(Ut),Xt=A(269),_t={};_t.styleTagTransform=Q(),_t.setAttributes=U(),_t.insert=$().bind(null,"head"),_t.domAPI=F(),_t.insertStyleElement=kt();var qt=x()(Xt.Z,_t);const le=Xt.Z&&Xt.Z.locals?Xt.Z.locals:void 0,ee=i=>(0,c.jsx)("span",{className:le.anico,children:(0,c.jsx)("span",{className:[le.hline,...(i.type||"").split(" ").map(a=>le[a]).filter(Boolean)].join(" ")})});var K=A(810);const he=i=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(i),Qe=i=>new Promise((a,f)=>{const v=new FileReader;v.readAsDataURL(i),v.addEventListener("load",()=>a(v.result)),v.addEventListener("error",j=>f(j))}),Me=async i=>{if(!he(i))return i;const a=await(await fetch(i)).blob();return await Qe(a)},Yr=i=>{const[a,f]=(0,K.useState)(i);return(0,K.useEffect)(()=>{(async v=>{const j=await Me(v);f(j)})(i)},[]),a},tr=({src:i,...a})=>{const f=Yr(i);return(0,c.jsx)("img",{decoding:"async",loading:"lazy",...a,src:f})};var hr=i=>{var a={};return A.d(a,i),a},fr=i=>()=>i;const er=hr({createPortal:()=>Se.createPortal,flushSync:()=>Se.flushSync}),pr=(i,a)=>{const f=(0,K.useRef)();(0,K.useEffect)(()=>{f.current=i},[i]),(0,K.useEffect)(()=>{if(a){const v=setInterval(()=>f.current(),a);return()=>clearInterval(v)}},[a])},ce=()=>![typeof window,typeof document].includes("undefined"),rr=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),Ae=i=>rr(i).indexOf("element")>-1,fe=(i=null)=>ce()?Ae(i)?{width:i.clientWidth,height:i.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},or=(i=()=>{},a=60)=>{let f=null;return function(...v){clearTimeout(f),f=setTimeout(()=>i.apply(this,v),a)}},mr=(i,a)=>Object.prototype.hasOwnProperty.call(i??{},a),oe=i=>mr(i,"current"),jr=(i,a)=>{const f=[],v=i.children??[];for(let j=0,I=v.length;j<I;j++){const W=v[j];W.className.indexOf(a)>-1&&f.push(W)}return f.length===0?null:f.length===1?f[0]:f},nr=(i,a)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const f=document.createElement("object");return f.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),f.setAttribute("class","resize-sensor"),f.onload=()=>{f.contentDocument.defaultView.addEventListener("resize",a,!1),a()},f.type="text/html",i.appendChild(f),f.data="about:blank",f},Vr=(i,a=60)=>{if(!ce())return;i=oe(i)?i.current:i??document.body;let f=jr(i,"resize-sensor"),v=[];const j=or(()=>v.map(nt=>nt(i)),a),I=nt=>{jr(i,"resize-sensor")||(f=nr(i,j)),v.indexOf(nt)===-1&&v.push(nt)},W=nt=>{const it=v.indexOf(nt);it!==-1&&v.splice(it,1),v.length===0&&f&&G()},G=()=>{f&&f.parentNode&&(f.contentDocument&&f.contentDocument.defaultView.removeEventListener("resize",j,!1),f.parentNode.removeChild(f),f=void 0,v=[])};return{element:i,bind:I,unbind:W,destroy:G}},xr=(i={})=>{const a=(0,K.useRef)(0),[f,v]=(0,K.useState)(i),j=(0,K.useCallback)(I=>{cancelAnimationFrame(a.current),a.current=requestAnimationFrame(()=>v(I))},[]);return(0,K.useEffect)(()=>()=>cancelAnimationFrame(a.current),[]),[f,j]},Mr=(i=null,a=60)=>{const f=oe(i)?i.current:i,{bind:v,destroy:j}=Vr(f,a),[I,W]=xr(fe(f));return(0,K.useEffect)(()=>(v(()=>f&&W(fe(f))),()=>j()),[f]),I};var Ie=A(528),Pe={};Pe.styleTagTransform=Q(),Pe.setAttributes=U(),Pe.insert=$().bind(null,"head"),Pe.domAPI=F(),Pe.insertStyleElement=kt();var ir=x()(Ie.Z,Pe);const ve=Ie.Z&&Ie.Z.locals?Ie.Z.locals:void 0,yr=({children:i,active:a=0,delay:f=5e3,className:v,...j})=>{const[I,W]=(0,K.useState)(a+1),[G,nt]=(0,K.useState)(!1),it=(0,K.useRef)(),bt=(0,K.useRef)(""),{width:ht}=Mr(it);i=Array.isArray(i)?i:[i];const mt=i[0],Gt=[i[i.length-1],...i,mt],re=Gt.length;pr(()=>{let Yt=I+1;Yt=Yt===re?1:Yt,bt.current&&(bt.current=""),W(Yt),Yt===re-1&&setTimeout(()=>{bt.current="none",W(1)},500)},G?null:f);const At=(Yt,ie)=>{ie.stopPropagation(),bt.current="",W(Yt),(0,er.flushSync)(()=>nt(!0)),nt(!1)},Dt={width:`${re*ht}px`,transform:`translateX(${-ht*I}px)`,transition:bt.current};return(0,c.jsxs)("div",{className:`${ve["huxy-carousel"]}${v?` ${v}`:""}`,...j,ref:it,children:[(0,c.jsx)("div",{className:ve["huxy-carousel-wrap"],style:Dt,children:Gt.map((Yt,ie)=>(0,c.jsx)("div",{className:`${ve["carousel-item"]} ${I===ie?ve.active:""}`,style:{width:`${ht}px`},children:Yt},`huxy-carousel-${ie}`))}),(0,c.jsx)("div",{className:ve["carousel-switch"],children:i.map((Yt,ie)=>(0,c.jsx)("span",{className:`${ve.dot} ${I===ie+1?ve.active:""}`,onClick:Ge=>At(ie+1,Ge)},`huxy-carousel-switch-${ie}`))})]})},$e=(i,a)=>{let f="",v="";if(typeof a=="number"&&(f=`col-${i}-${a}`),typeof a=="object"){const{span:j,offset:I}=a;f=j?`col-${i}-${j}`:"",v=I?`offset-${i}-${I}`:""}return{sp:f,os:v}},_e=(0,K.forwardRef)(({span:i,offset:a,xl:f,lg:v,md:j,sm:I,xs:W,style:G,width:nt,auto:it,offsetWidth:bt="0px",className:ht,...mt},Gt)=>{const re=ht?` ${ht}`:"",At=`col-${i||12}`,Dt=a?`offset-${a}`:"",{sp:Yt,os:ie}=$e("xs",W),{sp:Ge,os:Je}=$e("sm",I),{sp:Kr,os:Te}=$e("md",j),{sp:Er,os:ur}=$e("lg",v),{sp:Ye,os:de}=$e("xl",f),Ve=[At,Ye,Er,Kr,Ge,Yt,Dt,de,ur,Te,Je,ie].filter(Boolean).join(" "),Br=it?{width:"auto",flex:1,maxWidth:`calc(100% - ${bt})`}:{width:nt};return(0,c.jsx)("div",{className:`${Ve}${re}`,...mt,style:{...Br,...G},ref:Gt})}),zr=()=>{const i=(0,K.useRef)(!0);return i.current?(i.current=!1,!0):!1},gr=(i,a=[])=>{const f=zr();(0,K.useEffect)(()=>{if(!f)return i()},a)},Sr=(i,a=450)=>{const[f,v]=(0,K.useState)(i);return gr(()=>{let j;return i||a===0?v(i):j=setTimeout(()=>v(i),a),()=>j&&clearTimeout(j)},[i]),[f,v]},Be=({children:i,mountNode:a=document.body})=>(0,er.createPortal)(i,a),Ze={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},br={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},$r=document.body,we=({open:i,close:a,delay:f=300,children:v,mountNode:j,hasMask:I=!0,style:W,className:G="h-mask",relative:nt})=>{const[it]=Sr(i,f);(j??$r).style.overflow=it?"hidden":"";const bt=nt?"absolute":"fixed";return(0,c.jsx)(Be,{mountNode:j,children:(0,c.jsx)("div",{children:it?(0,c.jsxs)("div",{className:G,style:{...Ze,position:bt},children:[I?(0,c.jsx)("div",{style:{...br,position:bt},onClick:ht=>a?.(ht)}):null,K.Children.map(v,ht=>(0,K.isValidElement)(ht)?(0,K.cloneElement)(ht,{style:{position:"relative",zIndex:100001,...ht.props.style}}):ht)]}):null})})};var pe=A(434),s={};s.styleTagTransform=Q(),s.setAttributes=U(),s.insert=$().bind(null,"head"),s.domAPI=F(),s.insertStyleElement=kt();var b=x()(pe.Z,s);const y=pe.Z&&pe.Z.locals?pe.Z.locals:void 0,S=({open:i,close:a,footer:f,header:v,className:j,style:I,children:W,width:G="300px",mountNode:nt,position:it="right",relative:bt})=>{const ht=["drawer-wrap",it,i?"open":"",...j?.split(" ")??[]].filter(Boolean).map(mt=>y[mt]).join(" ");return(0,c.jsx)(we,{open:i,close:a,delay:250,hasMask:!0,relative:bt,mountNode:nt,className:"huxy-drawer",children:(0,c.jsx)("div",{className:ht,style:{width:G,position:bt?"absolute":"fixed",...I},children:(0,c.jsxs)("div",{className:y["drawer-container"],children:[(0,c.jsxs)("div",{className:y["drawer-header"],children:[(0,c.jsx)("span",{className:`link ${y["ico-close"]}`,onClick:mt=>a?.(mt)}),(0,c.jsx)("div",{children:v})]}),(0,c.jsx)("div",{className:y["drawer-content"],children:W}),f?(0,c.jsx)("div",{className:y["drawer-footer"],children:f}):null]})})})},T=(i,a,f="click")=>{(0,K.useEffect)(()=>{const v=I=>{const W=oe(i)?i.current:i;W?.contains&&!W.contains(I.target)&&a(I)},j=typeof f=="string"?[f]:f;return j.map(I=>{document.addEventListener(I,v,!1)}),()=>{j.map(I=>{document.removeEventListener(I,v,!1)})}},[i,a,f])},X=i=>i?.$$typeof&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",yt=(i="")=>i.replace(/^\S/,a=>a.toUpperCase()),dt=i=>{if(ce())return i=oe(i)?i.current:i??document.body,i.getBoundingClientRect?.()},at=i=>{if(!ce())return;const a=document.createElement("div");return a.innerHTML=i,a.children[0]},It=(i,a={},f=!1)=>{if(Ae(i)){if(f){let v="";Object.keys(a).map(j=>{v+=`${j}: ${a[j]};`}),i.style=v;return}Object.keys(a).map(v=>i.style.setProperty(v,a[v]))}},me=(i=350)=>new Promise(a=>setTimeout(a,i)),Le=(i=100)=>{const a=Date.now();for(;Date.now()-a<=i;);},He=me,xe=async(i,a=15)=>{if(!ce())return;if(typeof i=="string"&&(i=at(i)),i=oe(i)?i.current:i,!Ae(i))return{};const f=i.cloneNode(!0);It(f,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(f),await He(a);const v=dt(f);return i.parentNode.removeChild(f),v},ar=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,vr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Fe=(i,a)=>{a=`huxy-drop-arrow-${a}`;const f=i.getAttribute("class")??"";ar.test(f)?i.setAttribute("class",f.replace(vr,a)):i.setAttribute("class",`${f} ${a}`)},ke=async(i,a,f)=>{const{left:v,right:j,top:I,bottom:W}=dt(i),{width:G,height:nt}=fe(),{width:it,height:bt}=await xe(a);if(j<0||W<0||v>G||I>nt)return{};if(f==="vertical"){const ht={left:v+"px",top:W+10+"px",right:"auto",bottom:"auto"};let mt="lt";v+it>G&&(ht.left=j-it+"px",mt="rt"),W+10+bt>nt&&(ht.top=I-10-bt+"px",mt=mt==="lt"?"lb":"rb"),It(a,ht),Fe(a,mt)}else{const ht={left:j+10+"px",top:I+"px",right:"auto",bottom:"auto"};let mt="tl";j+10+it>G&&(ht.left=v-10-it+"px",mt="tr"),I+bt>nt&&(ht.top=W-bt+"px",mt=mt==="tl"?"bl":"br"),It(a,ht),Fe(a,mt)}},Ce=(i,a,f="horizontal")=>{const v=or(ke),j=()=>v(i,a,f);window.addEventListener("scroll",j,!1),window.addEventListener("resize",j,!1);const I=()=>{window.removeEventListener("scroll",j),window.removeEventListener("resize",j),It(a,{left:"",top:"",right:"",bottom:""})};return ke(i,a,f),I},lo=({open:i,delay:a=250,children:f,mountNode:v,style:j,className:I="huxy-mask"})=>{const[W]=Sr(i,a);return(0,c.jsx)(Be,{mountNode:v,children:(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:I,children:(0,c.jsx)("div",{style:{...j,display:W?"block":"none"},children:f})})})})};var Ue=A(503),We={};We.styleTagTransform=Q(),We.setAttributes=U(),We.insert=$().bind(null,"head"),We.domAPI=F(),We.insertStyleElement=kt();var no=x()(Ue.Z,We);const _r=Ue.Z&&Ue.Z.locals?Ue.Z.locals:void 0,Zr=({trigger:i="click",type:a,dropList:f,className:v,wrapStyle:j,children:I,...W})=>{const[G,nt]=(0,K.useState)(!1),it=(0,K.useRef)(),bt=(0,K.useRef)(),ht=(0,K.useRef)();T(it,Dt=>G&&nt(!1),[...new Set(["click",i.toLowerCase()])]),(0,K.useEffect)(()=>()=>ht.current?.(),[]);const mt=Dt=>{Dt.preventDefault(),nt(!0),ht.current=Ce(it.current,bt.current,a)},Gt={[`on${yt(i)}`]:mt},re=["drop-wrap",G?"open":""].filter(Boolean).map(Dt=>_r[Dt]).join(" "),At=X(f)?f:f?.(()=>nt(!1),G);return(0,c.jsxs)("span",{ref:it,className:`${_r["drop-target"]}${v?` ${v}`:""}`,...Gt,...W,children:[I,(0,c.jsx)(lo,{open:G,className:"huxy-drop",children:(0,c.jsx)("div",{ref:bt,className:re,style:j,children:At})})]})},Hr=(i,a,f)=>{if(!ce())return;f=oe(f)?f.current:f??document.body;const v=document.createElement("span");v.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),a&&It(v,a),v.innerText=(i??"").replace(/[\r\n]/g,""),f.appendChild(v);const j=v.getBoundingClientRect();return f.removeChild(v),j};var l=A(918),h={};h.styleTagTransform=Q(),h.setAttributes=U(),h.insert=$().bind(null,"head"),h.domAPI=F(),h.insertStyleElement=kt();var w=x()(l.Z,h);const g=l.Z&&l.Z.locals?l.Z.locals:void 0,m=({title:i,placement:a="topRight",children:f,ellipsis:v,className:j,...I})=>(0,c.jsx)("span",{className:`${g[`huxy-tooltip-${a}`]}${j?` ${j}`:""}`,tooltip:i??f,...I,children:(0,c.jsx)("span",{className:v?g.ellipsis:"",children:f})}),Y={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},Z=i=>{const{children:a,style:f}=i,v=typeof a=="string",j=v?a:a?.props?.title??a?.props?.children,I=(0,K.useRef)(),[W,G]=(0,K.useState)(!0);return(0,K.useEffect)(()=>{if(I.current){const{width:nt}=Hr(j,null,I.current.parentNode),{width:it}=dt(I.current),bt=~~nt>~~it;bt!==W&&G(bt)}},[j]),(0,c.jsx)("span",{ref:I,style:{display:"flex",width:"100%",...f},children:W?v?(0,c.jsx)(m,{...i,ellipsis:!0}):(0,c.jsx)("span",{style:Y,children:a}):v?a:a?.props?.children})},q=i=>i.children==null?"":(0,c.jsx)(Z,{...i});var R=Object.defineProperty,P=(i,a,f)=>a in i?R(i,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):i[a]=f,gt=(i,a,f)=>(P(i,typeof a!="symbol"?a+"":a,f),f);class Ct extends K.default.Component{constructor(){super(...arguments),gt(this,"state",{error:null})}static getDerivedStateFromError(a){return{error:a}}componentDidCatch(a,f){const{errorReport:v}=this.props;typeof v=="function"&&v({error:a,info:f.componentStack})}render(){const{error:a}=this.state,{fallback:f,children:v}=this.props;return a?f(a):v}}const Ot=i=>a=>{if(typeof a=="function"||typeof a?.render=="function")return(0,c.jsx)(a,{});if(typeof a=="string"){const f=i?.[a];return f?(0,c.jsx)(f,{}):(0,c.jsx)("i",{className:a})}return a??null},pt=i=>Ot(i),zt=i=>({icon:a,defaultIcon:f})=>a?pt(i)(a):a===!1?null:f,Tt=["","webkit","moz","ms"],ct=i=>Tt.map(a=>a?`${a}FullscreenElement`:"fullscreenElement").find(a=>i[a]),st=i=>Tt.map(a=>a?`${a}RequestFullscreen`:"requestFullscreen").find(a=>i[a]),Nt=i=>Tt.map(a=>a?`${a}ExitFullscreen`:"exitFullscreen").find(a=>i[a]),Kt=Tt.map(i=>`${i}fullscreenchange`),ne=i=>{if(!ce())return;i=oe(i)?i.current:i??document.body;const a=ct(document),f=st(i),v=Nt(document);document[a]?document[v]?.():i[f]?.()},ue=i=>ce()?(Kt.map(a=>document.addEventListener(a,i,!1)),()=>Kt.map(a=>document.removeEventListener(a,i,!1))):void 0,ye=i=>(0,c.jsx)("i",{...i,children:"..."}),Xe=({panel:i,fullIcon:a=ye,exitIcon:f=ye,...v})=>{const j=oe(i)?i.current:i,[I,W]=(0,K.useState)();(0,K.useEffect)(()=>{const nt=ue(()=>{W(it=>!it)});return()=>nt()},[]);const G=I?f:a;return(0,c.jsx)(G,{onClick:nt=>ne(j),...v})};var Oe=A(249),De={};De.styleTagTransform=Q(),De.setAttributes=U(),De.insert=$().bind(null,"head"),De.domAPI=F(),De.insertStyleElement=kt();var lr=x()(Oe.Z,De);const Fr=Oe.Z&&Oe.Z.locals?Oe.Z.locals:void 0,Re=({gutter:i=10,className:a,overflow:f="hidden",...v},j)=>{const I=a?` ${a}`:"";let W=10;if(Array.isArray(i)){const G=[...i];i=G[0],W=G[1]??G[0]}return(0,c.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(W/2)}px`,overflow:f},children:(0,c.jsx)("div",{className:`row${I}`,...v,ref:j})})},Ee=(0,K.forwardRef)(Re),Gr=({rowProps:i,colProps:a,children:f,Row:v=Ee,Col:j=_e})=>{const I=[];return K.Children.map(f,W=>{W&&(W.type?.description==="react.fragment"?I.push(...W.props.children):I.push(W))}),(0,c.jsx)(v,{...i,children:I.map((W,G)=>(0,c.jsx)(j,{...a,...W.props.itemprops,children:W},`huuxy_grid_${G}`))})},Or=(i,a)=>(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...a}),se=i=>{const{error:a={},info:f=""}=i||{},{message:v,stack:j,errMsg:I}=a;let W=I||j||a.toString();W=`${W}
${f}`.replace(/\r|\n|\r\n/g,"<br/>"),W=W.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),W=W.replace(/\s/g,"&nbsp;");const G=v?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,c.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Or(W,{style:{color:"red"}}),G&&(0,c.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${G}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},qe=({children:i,report:a})=>{const f=(0,K.useRef)();return f.current?.state&&(f.current.state.error=null),(0,c.jsx)(Ct,{ref:f,fallback:(v,j)=>se({error:v,info:j}),errorReport:a,children:i})},ge=(i,a)=>Object.keys(a).map(f=>i.style[f]=a[f]),wr=(i,a)=>Object.keys(a).map(f=>i.style[f]=""),Dr={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},Ur=({left:i,top:a,width:f,height:v})=>({left:`${i}px`,top:`${a}px`,width:`${f}px`,height:`${v}px`}),je=i=>(0,c.jsx)("i",{...i,children:"..."}),Ke=i=>{const{left:a,top:f}=dt(i),{width:v,height:j}=fe(i);return{left:a,top:f,width:v,height:j}},Jr=({panel:i,target:a,fullIcon:f=je,exitIcon:v=je})=>{i=oe(i)?i.current:i||document.body;const[j,I]=(0,K.useState)(),W=(0,K.useRef)(),G=(0,K.useRef)();(0,K.useEffect)(()=>{const bt=typeof a=="function"?a:()=>document.getElementsByClassName(a)[0];G.current=Ur(Ke(bt())),W.current={...Dr,...Ur(Ke(i))}},[i]);const nt=(bt,ht)=>{bt?(ge(ht,W.current),setTimeout(()=>{ge(ht,G.current)},0)):wr(ht,W.current),I(bt)},it=j?v:f;return(0,c.jsx)(it,{onClick:bt=>nt(!j,i)})};var ze=A(548),sr={};sr.styleTagTransform=Q(),sr.setAttributes=U(),sr.insert=$().bind(null,"head"),sr.domAPI=F(),sr.insertStyleElement=kt();var Tr=x()(ze.Z,sr);const be=ze.Z&&ze.Z.locals?ze.Z.locals:void 0,so=({open:i,close:a,hasMask:f=!0,cancelText:v="\u53D6\u6D88",submit:j,submitText:I="\u786E\u5B9A",title:W="Modal \u5F39\u7A97",className:G,children:nt,delay:it=250,...bt})=>{const ht=["modal-wrap",i?"open":"",...G?.split(" ")??[]].filter(Boolean).map(mt=>be[mt]).join(" ");return(0,c.jsx)(we,{open:i,close:a,delay:it,hasMask:f,className:"huxy-modal",children:(0,c.jsx)("div",{className:ht,...bt,children:(0,c.jsxs)("div",{className:be["modal-container"],children:[(0,c.jsx)("div",{className:be["modal-header"],children:W}),(0,c.jsx)("div",{className:be["modal-content"],children:nt}),(0,c.jsxs)("div",{className:be["modal-footer"],children:[(0,c.jsx)("div",{className:`${be.btn} ${be.left}`,onClick:mt=>a?.(mt),children:v}),(0,c.jsx)("div",{className:`${be.btn} ${be.right}`,onClick:mt=>j?.(mt),children:I})]})]})})})};var Nr=A(990),cr={};cr.styleTagTransform=Q(),cr.setAttributes=U(),cr.insert=$().bind(null,"head"),cr.domAPI=F(),cr.insertStyleElement=kt();var rn=x()(Nr.Z,cr);const So=Nr.Z&&Nr.Z.locals?Nr.Z.locals:void 0,co=({global:i,absolute:a})=>(0,c.jsx)("div",{className:`spinner${i?" global":""}${a?" absolute":""}`,children:(0,c.jsx)("figure",{className:"spinning"})});var Xr=A(232),Ar={};Ar.styleTagTransform=Q(),Ar.setAttributes=U(),Ar.insert=$().bind(null,"head"),Ar.domAPI=F(),Ar.insertStyleElement=kt();var $o=x()(Xr.Z,Ar);const Ir=Xr.Z&&Xr.Z.locals?Xr.Z.locals:void 0,_o=i=>i?.filter?.(a=>typeof a=="function"),uo=(i,a)=>{const f=(0,K.useRef)(),{loading:v,title:j,plugins:I,children:W,className:G,...nt}=i,it=_o(I),bt=it?.length,ht=G?` ${G}`:"",mt=oe(a)?a:f;return(0,c.jsxs)("div",{className:`${Ir.panel}${ht}`,...nt,ref:mt,children:[(j||bt)&&(0,c.jsxs)("div",{className:Ir["panel-header"],children:[j&&(0,c.jsx)("h4",{className:Ir["panel-title"],children:j}),bt&&(0,c.jsx)("div",{className:Ir["panel-plugins"],children:it.map((Gt,re)=>(0,c.jsx)("span",{className:"link",children:(0,c.jsx)(Gt,{panel:mt})},re))})]}),(0,c.jsx)("div",{className:Ir["panel-body"],children:W}),v&&(0,c.jsx)(co,{})]})},ho=(0,K.forwardRef)(uo),Qr=i=>rr(i)==="array",Fo=i=>Qr(i)&&!!i.length,fo=({to:i,preventDefault:a,stopPropagation:f,...v})=>a?(0,c.jsx)("span",{...v}):(0,c.jsx)("a",{href:i,...v}),Oo=({item:i,...a})=>(0,c.jsx)("ul",{...a}),qr=(i,...a)=>{const f={};return Object.keys(i).filter(Boolean).map(v=>{f[v]=j=>i[v](j,...a)}),f},po=({data:i=[],events:a={},List:f=Oo,Link:v=fo,leftIcon:j,rightIcon:I,isHorizontal:W,isCollapsed:G,level:nt=0,parentOpen:it=!0})=>{const bt=G&&!nt,ht=!W&&!G&&!it;return i.map(mt=>{const{name:Gt,path:re,icon:At,rightIcon:Dt,active:Yt,open:ie,children:Ge,linkProps:Je}=mt,Kr=Fo(Ge),Te=mt.id||re||Gt,Er=bt?mt.title??Gt:void 0,ur=ht?"hidden":"",Ye=At??j,de=Dt??I,Ve=Ye?(0,c.jsx)("div",{className:"node-left-icon",children:Ye===!0?(0,c.jsx)("i",{className:"default-left-icon"}):Ye}):null,Br=Gt?(0,c.jsx)("div",{className:"node-text",children:(0,c.jsx)("span",{children:Gt})}):null;if(Kr){const Wo=qr(a,mt,nt),vo=[ur,ie?"open":""].filter(Boolean).join(" ");return(0,c.jsxs)("li",{className:vo,"has-children":"true",...Wo,children:[(0,c.jsxs)(v,{title:Er,className:`link${Yt?" active":""}`,to:re,preventDefault:!0,stopPropagation:!1,...Je,children:[Ve,Br,de?(0,c.jsx)("div",{className:"node-right-icon",children:de===!0?(0,c.jsx)("i",{className:"default-right-icon"}):de}):null]}),(0,c.jsx)(f,{item:mt,children:po({data:Ge,events:a,List:f,Link:v,leftIcon:j,rightIcon:I,isHorizontal:W,isCollapsed:G,level:nt+1,parentOpen:!!ie})})]},Te)}return(0,c.jsx)("li",{className:ur,children:(0,c.jsxs)(v,{title:Er,className:`link${Yt?" active":""}`,to:re,...Je,children:[Ve,Br]})},Te)})},to=po,Do=(i,...a)=>(0,c.jsx)("div",{"v-html":i,...a});var Pr=A(575),kr={};kr.styleTagTransform=Q(),kr.setAttributes=U(),kr.insert=$().bind(null,"head"),kr.domAPI=F(),kr.insertStyleElement=kt();var on=x()(Pr.Z,kr);const To=Pr.Z&&Pr.Z.locals?Pr.Z.locals:void 0,No=i=>(0,c.jsx)("div",{style:{padding:"6px 15px"},children:i}),eo=({activekey:i,tabs:a=[],switchTab:f,trackColor:v,flex:j,...I},W)=>{const[G,nt]=(0,K.useState)(i??a[0]?.key),[it,bt]=(0,K.useState)({}),ht=(0,K.useRef)({}),mt=(0,K.useRef)();(0,K.useEffect)(()=>{const At=ht.current[G];At&&Gt(At)},[]);const Gt=At=>{const{left:Dt,width:Yt}=dt(At),ie=dt(mt.current).left;bt({left:Dt-ie,width:Yt})},re=(At,Dt)=>{At.stopPropagation(),nt(Dt),typeof f=="function"&&f(Dt),Gt(At.currentTarget)};return(0,c.jsxs)("div",{className:"tabs-header-wrap",...I,ref:W,children:[(0,c.jsx)("ul",{className:`tabs-header${j?" flex":""}`,ref:mt,children:a.map(At=>(0,c.jsx)("li",{ref:Dt=>ht.current[At.key]=Dt,className:`th-item${G===At.key?" active":""}`,onClick:Dt=>re(Dt,At.key),children:typeof At.renderTabs=="function"?At.renderTabs(At,G===At.key):No(At.value)},At.key))}),(0,c.jsx)("div",{className:"th-track",style:{...it,color:v}})]})},Ao=(0,K.forwardRef)(eo),mo=(i,a,f="id",v="children")=>{if(!Qr(i))return null;const j=I=>{for(let W=0,G=I.length;W<G;W++){const nt=I[W];if(nt[f]===a)return[nt];if(Qr(nt[v])){const it=j(nt[v]);if(it)return[nt].concat(it)}}};return j(i)},Io=i=>++i,xo=()=>{const[,i]=(0,K.useState)(0);return(0,K.useCallback)(()=>i(Io),[])},yo=i=>{const{children:a,open:f}=i;let v=0;if(f&&a?.length){v=a.length;let j=0;return a.map(I=>j+=yo(I)),v+j}return v},go=({item:i,style:a,...f})=>(0,c.jsx)("ul",{style:{...a,"--count":yo(i)},...f});var ro=A(942),Cr={};Cr.styleTagTransform=Q(),Cr.setAttributes=U(),Cr.insert=$().bind(null,"head"),Cr.domAPI=F(),Cr.insertStyleElement=kt();var nn=x()(ro.Z,Cr);const Po=ro.Z&&ro.Z.locals?ro.Z.locals:void 0,Bo=i=>(0,c.jsx)("ul",{...i}),bo=(i,a)=>i?go:({item:f,...v})=>(0,c.jsx)(Bo,{className:a==="right"?"left":"",...v}),Lo=i=>{const{data:a=[],collapsed:f=!1,type:v="vertical",Link:j,width:I,bgColor:W,itemHeight:G,collapsedWidth:nt,itemPadding:it,style:bt,className:ht,...mt}=i,Gt=(0,K.useRef)(),re=(0,K.useRef)();(0,K.useEffect)(()=>()=>clearTimeout(Gt.current),[]);const At=xo(),Dt=v==="horizontal",Yt=!Dt&&f,ie={onClick:(ur,Ye)=>{if(ur.stopPropagation(),!Dt&&!Yt){const de=mo(a,Ye.path,"path"),Ve=de[de.length-1];Ve.open=!Ve.open,At()}},onMouseEnter:(ur,Ye,de)=>{Yt&&!de&&(clearTimeout(Gt.current),re.current.style.width="var(--maxWidth)")},onMouseLeave:(ur,Ye,de)=>{Yt&&!de&&(Gt.current=setTimeout(()=>re.current.style.width="",200))}},Ge=(Dt?["huxy-horizontal-tree",ht]:["huxy-tree",ht,Yt?"collapsed":""]).filter(Boolean).join(" "),{float:Je,...Kr}=mt?.style??{},Te={"--bgColor":W,"--itemHeight":G,"--nodeListWidth":I,...Kr};Dt?(Te["--itemPadding"]=it,Te["--nodeFloat"]=Je):(Te["--width"]=I,Te["--collapsedWidth"]=nt);const Er=bo(!Dt&&!Yt,Je);return(0,c.jsx)("div",{ref:re,className:Ge,style:Te,...mt,children:(0,c.jsx)("div",{className:"huxy-tree-track",children:(0,c.jsx)("ul",{className:"huxy-tree-root",children:to({data:a,events:ie,List:Er,Link:j,leftIcon:!0,rightIcon:!0,isHorizontal:Dt,isCollapsed:Yt})})})})}})();var jt=ut.PC,Rr=ut.rK,Vt=ut.lr,Ht=ut.JX,N=ut.dy,M=ut.Ud,B=ut.mH,V=ut.SV,H=ut.Hn,tt=ut.rj,J=ut.V7,rt=ut.AN,vt=ut.zd,wt=ut.BQ,Ft=ut.u_,Pt=ut.s_,lt=ut.h_,$t=ut.X2,Mt=ut.$j,Zt=ut.GK,k=ut.u,Lt=ut.mp,Wt=ut.C2,Rt=ut.pC,ae=ut.ff,L=ut.d2,ot=ut.Uw},8611:function(Wr,St,te){var Bt;te.d(St,{Bv:function(){return Rr},rU:function(){return ut},tv:function(){return Ht},yj:function(){return Vt}});var u=te(7378),Se={990:(N,M,B)=>{B.d(M,{Z:()=>vt});var V=B(601),H=B.n(V),tt=B(609),J=B.n(tt),rt=J()(H());rt.push([N.id,`@keyframes before {
  0% {
    width: 0.6rem;
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
  35% {
    width: 3rem;
    box-shadow: 0 -0.6rem #ff3e38, 0 0.6rem #318ffa;
  }
  70% {
    width: 0.6rem;
    box-shadow: -1.2rem -0.6rem #ff3e38, 1.2rem 0.6rem #318ffa;
  }
  100% {
    box-shadow: 1.2rem -0.6rem #ff3e38, -1.2rem 0.6rem #318ffa;
  }
}
@keyframes after {
  0% {
    height: 0.6rem;
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
  35% {
    height: 3rem;
    box-shadow: 0.6rem 0 #6ce581, -0.6rem 0 #fecb2e;
  }
  70% {
    height: 0.6rem;
    box-shadow: 0.6rem -1.2rem #6ce581, -0.6rem 1.2rem #fecb2e;
  }
  100% {
    box-shadow: 0.6rem 1.2rem #6ce581, -0.6rem -1.2rem #fecb2e;
  }
}
.spinner {
  position: relative;
  height: 100%;
  min-height: 100px;
  display: block;
  overflow: hidden;
  pointer-events: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: hsla(0, 0%, 72%, 0.24);
}
.spinner.absolute {
  position: absolute;
  min-height: auto;
}
.spinner.global {
  position: fixed;
  width: 100vw;
  height: 100vh;
}
.spinner .spinning {
  width: 3rem;
  height: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(165deg);
  margin: 0;
}
.spinner .spinning::before,
.spinner .spinning::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 0.3rem;
  transform: translate(-50%, -50%);
}
.spinner .spinning::before {
  animation: before 1.5s infinite;
}
.spinner .spinning::after {
  animation: after 1.5s infinite;
}
`,""]),rt.locals={};const vt=rt},267:(N,M,B)=>{B.d(M,{Z:()=>vt});var V=B(601),H=B.n(V),tt=B(609),J=B.n(tt),rt=J()(H());rt.push([N.id,`.Iuy_e {
  text-decoration: none;
  cursor: pointer;
  color: var(--linkColor);
  background-color: transparent;
  font-weight: 500;
  transition: color 0.3s;
}
.Iuy_e:active, .Iuy_e.D3oJg {
  color: var(--linkActiveColor, #42a5f5);
}
.Iuy_e:hover {
  color: var(--linkHoverColor, #2196f3);
}
.Iuy_e[disabled] {
  cursor: not-allowed;
  opacity: 0.7;
}
.Iuy_e[disabled]:active, .Iuy_e[disabled].D3oJg, .Iuy_e[disabled]:hover {
  color: var(--linkColor);
}
`,""]),rt.locals={link:"Iuy_e",active:"D3oJg"};const vt=rt},609:N=>{N.exports=function(M){var B=[];return B.toString=function(){return this.map(function(V){var H="",tt=typeof V[5]<"u";return V[4]&&(H+="@supports (".concat(V[4],") {")),V[2]&&(H+="@media ".concat(V[2]," {")),tt&&(H+="@layer".concat(V[5].length>0?" ".concat(V[5]):""," {")),H+=M(V),tt&&(H+="}"),V[2]&&(H+="}"),V[4]&&(H+="}"),H}).join("")},B.i=function(V,H,tt,J,rt){typeof V=="string"&&(V=[[null,V,void 0]]);var vt={};if(tt)for(var wt=0;wt<this.length;wt++){var Ft=this[wt][0];Ft!=null&&(vt[Ft]=!0)}for(var Pt=0;Pt<V.length;Pt++){var lt=[].concat(V[Pt]);tt&&vt[lt[0]]||(typeof rt<"u"&&(typeof lt[5]>"u"||(lt[1]="@layer".concat(lt[5].length>0?" ".concat(lt[5]):""," {").concat(lt[1],"}")),lt[5]=rt),H&&(lt[2]&&(lt[1]="@media ".concat(lt[2]," {").concat(lt[1],"}")),lt[2]=H),J&&(lt[4]?(lt[1]="@supports (".concat(lt[4],") {").concat(lt[1],"}"),lt[4]=J):lt[4]="".concat(J)),B.push(lt))}},B}},601:N=>{N.exports=function(M){return M[1]}},837:(N,M,B)=>{var V,H=B(810),tt=Symbol.for("react.element"),J=Symbol.for("react.fragment"),rt=Object.prototype.hasOwnProperty,vt=H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wt={key:!0,ref:!0,__self:!0,__source:!0};function Ft(Pt,lt,$t){var Mt,Zt={},k=null,Lt=null;$t!==void 0&&(k=""+$t),lt.key!==void 0&&(k=""+lt.key),lt.ref!==void 0&&(Lt=lt.ref);for(Mt in lt)rt.call(lt,Mt)&&!wt.hasOwnProperty(Mt)&&(Zt[Mt]=lt[Mt]);if(Pt&&Pt.defaultProps)for(Mt in lt=Pt.defaultProps,lt)Zt[Mt]===void 0&&(Zt[Mt]=lt[Mt]);return{$$typeof:tt,type:Pt,key:k,ref:Lt,props:Zt,_owner:vt.current}}V=J,M.jsx=Ft,M.jsxs=Ft},322:(N,M,B)=>{N.exports=B(837)},62:N=>{var M=[];function B(tt){for(var J=-1,rt=0;rt<M.length;rt++)if(M[rt].identifier===tt){J=rt;break}return J}function V(tt,J){for(var rt={},vt=[],wt=0;wt<tt.length;wt++){var Ft=tt[wt],Pt=J.base?Ft[0]+J.base:Ft[0],lt=rt[Pt]||0,$t="".concat(Pt," ").concat(lt);rt[Pt]=lt+1;var Mt=B($t),Zt={css:Ft[1],media:Ft[2],sourceMap:Ft[3],supports:Ft[4],layer:Ft[5]};if(Mt!==-1)M[Mt].references++,M[Mt].updater(Zt);else{var k=H(Zt,J);J.byIndex=wt,M.splice(wt,0,{identifier:$t,updater:k,references:1})}vt.push($t)}return vt}function H(tt,J){var rt=J.domAPI(J);rt.update(tt);var vt=function(wt){if(wt){if(wt.css===tt.css&&wt.media===tt.media&&wt.sourceMap===tt.sourceMap&&wt.supports===tt.supports&&wt.layer===tt.layer)return;rt.update(tt=wt)}else rt.remove()};return vt}N.exports=function(tt,J){J=J||{},tt=tt||[];var rt=V(tt,J);return function(vt){vt=vt||[];for(var wt=0;wt<rt.length;wt++){var Ft=rt[wt],Pt=B(Ft);M[Pt].references--}for(var lt=V(vt,J),$t=0;$t<rt.length;$t++){var Mt=rt[$t],Zt=B(Mt);M[Zt].references===0&&(M[Zt].updater(),M.splice(Zt,1))}rt=lt}}},793:N=>{var M={};function B(H){if(typeof M[H]>"u"){var tt=document.querySelector(H);if(window.HTMLIFrameElement&&tt instanceof window.HTMLIFrameElement)try{tt=tt.contentDocument.head}catch{tt=null}M[H]=tt}return M[H]}function V(H,tt){var J=B(H);if(!J)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");J.appendChild(tt)}N.exports=V},173:N=>{function M(B){var V=document.createElement("style");return B.setAttributes(V,B.attributes),B.insert(V,B.options),V}N.exports=M},892:(N,M,B)=>{function V(H){var tt=B.nc;tt&&H.setAttribute("nonce",tt)}N.exports=V},36:N=>{function M(H,tt,J){var rt="";J.supports&&(rt+="@supports (".concat(J.supports,") {")),J.media&&(rt+="@media ".concat(J.media," {"));var vt=typeof J.layer<"u";vt&&(rt+="@layer".concat(J.layer.length>0?" ".concat(J.layer):""," {")),rt+=J.css,vt&&(rt+="}"),J.media&&(rt+="}"),J.supports&&(rt+="}");var wt=J.sourceMap;wt&&typeof btoa<"u"&&(rt+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(wt))))," */")),tt.styleTagTransform(rt,H,tt.options)}function B(H){if(H.parentNode===null)return!1;H.parentNode.removeChild(H)}function V(H){var tt=H.insertStyleElement(H);return{update:function(J){M(tt,H,J)},remove:function(){B(tt)}}}N.exports=V},464:N=>{function M(B,V){if(V.styleSheet)V.styleSheet.cssText=B;else{for(;V.firstChild;)V.removeChild(V.firstChild);V.appendChild(document.createTextNode(B))}}N.exports=M},810:N=>{var M=V=>{var H={};return ft.d(H,V),H},B=V=>()=>V;N.exports=Bt||(Bt=te.t(u,2))}},Ne={};function ft(N){var M=Ne[N];if(M!==void 0)return M.exports;var B=Ne[N]={id:N,exports:{}};return Se[N](B,B.exports,ft),B.exports}ft.n=N=>{var M=N&&N.__esModule?()=>N.default:()=>N;return ft.d(M,{a:M}),M},ft.d=(N,M)=>{for(var B in M)ft.o(M,B)&&!ft.o(N,B)&&Object.defineProperty(N,B,{enumerable:!0,get:M[B]})},ft.o=(N,M)=>Object.prototype.hasOwnProperty.call(N,M),ft.nc=void 0;var A={};(()=>{ft.d(A,{rU:()=>no,cb:()=>Hr,Bv:()=>Zr,yj:()=>_r,tv:()=>vr});var N=ft(810);const M=l=>Object.prototype.toString.call(l).slice(8,-1).toLowerCase(),B=l=>M(l)==="array",V=l=>M(l)==="object",H=l=>l?.$$typeof&&typeof l.$$typeof=="symbol"&&l.$$typeof.description==="react.element",tt=l=>l?.__v_isVNode,J=(l,h)=>Object.prototype.hasOwnProperty.call(l??{},h),rt=l=>{if(!B(l)&&!V(l))return l;const h=B(l)?[]:{};for(const w in l)if(J(l,w)){const g=l[w];h[w]=H(g)||tt(g)||typeof g!="object"?g:g!==l?rt(g):"cyclic"}else Object.setPrototypeOf(h,{[w]:l[w]});return h},vt=rt,wt=l=>M(l)==="function",Ft=l=>M(l)==="promise"||V(l)&&wt(l.then),Pt=(l,h=12e4,w="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Ft(l))return{};let g=null,m=null;return{promiseFn:new Promise((Y,Z)=>{g=(q="canceled")=>{clearTimeout(m),Y({canceled:!0,errMsg:q})},h&&(h=typeof h!="number"?12e4:h,m=setTimeout(()=>g(w),h)),l.then(q=>{clearTimeout(m),Y({result:q,errMsg:!1})}).catch(q=>{clearTimeout(m),Z(q)})}),cancelFn:g}},lt=l=>l?l.charAt(l.length-1)==="/"?l.slice(0,-1):l:"";var $t=ft(322);const Mt=(l,h)=>(0,$t.jsx)("div",{dangerouslySetInnerHTML:{__html:l},...h}),Zt=l=>{const{error:h={},info:w=""}=l||{},{message:g,stack:m,errMsg:Y}=h;let Z=Y||m||h.toString();Z=`${Z}
${w}`.replace(/\r|\n|\r\n/g,"<br/>"),Z=Z.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Z=Z.replace(/\s/g,"&nbsp;");const q=g?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,$t.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Mt(Z,{style:{color:"red"}}),q&&(0,$t.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${q}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},k=()=>{const l={};return{on:(h,w)=>{l[h]||(l[h]=[]),l[h].indexOf(w)===-1&&l[h].push(w)},emit:(h,w)=>{l[h]&&l[h].map(g=>g(w))},off:(h,w=null)=>{if(l[h]){if(typeof w!="function")return delete l[h];const g=l[h].indexOf(w);g>-1&&(l[h].splice(g,1),l[h].length||delete l[h])}}}},Lt=l=>{const h={};for(let w in l)J(l,w)||(h[w]=l[w]);return h},Wt=(l,h)=>{if(!V(l))return h;if(!V(h))return l;const w={...Lt(l),...Lt(h)},g={...l,...h};return Object.keys(w).map(m=>{Object.setPrototypeOf(g,{[m]:w[m]})}),g},Rt=()=>{const{on:l,emit:h,off:w}=k(),g={};return{getState:m=>vt(g[m]),setState:(m,Y=!1)=>{if(typeof m=="function"&&(m=m(vt(g))),!V(m))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const Z=vt(m);Object.keys(Z).map(q=>{const R=g[q],P=Z[q],gt=V(P)&&V(R)?Wt(R,P):P;!Y&&h(q,gt),g[q]=gt})},subscribe:(m,Y)=>(l(m,Y),()=>w(m,Y)),unsubscribe:w,clean:m=>{typeof m=="string"?g[m]=void 0:Array.isArray(m)?m.map(Y=>g[Y]=void 0):Object.keys(g).map(Y=>g[Y]=void 0)}}},ae=l=>(h,w)=>{const[g,m]=(0,N.useState)(()=>{const R=l?.getState(h);return R!==void 0?R:(w!==void 0&&l?.setState({[h]:w},!0),w)}),Y=(0,N.useCallback)(R=>l?.setState({[h]:typeof R=="function"?R(l?.getState(h)):R}),[]),Z=(0,N.useCallback)(R=>l?.subscribe(h,R),[]),q=(0,N.useCallback)((R=R)=>l?.clean(R),[]);return(0,N.useEffect)(()=>{l?.subscribe(h,R=>m(R))},[]),[g,Y,Z,q]},L=Rt(),ot=ae(L),c=k(),z=k(),x="push-emitter",E="replace-emitter",F="useRoute-emitter",O={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},$="/404",C={getState:()=>history.state,go:l=>history.go(l),forward:()=>history.forward(),back:()=>history.back()},U=(l,h,w,g,m=[])=>{const Y=R=>{for(let P=0,gt=R.length;P<gt;P++){const Ct=R[P],Ot=Ct[g].split("?")[0];if(new RegExp("^"+Ot.replace(/:[^/]+/g,"[^/]+")+"$").test(h))return Ct;if(B(Ct[w])){const pt=Y(Ct[w]);if(pt)return pt}}},Z=Y(l);if(!Z)return $;const{redirect:q}=Z;return q?m.includes(q)?m:(m.push(q),U(l,q.split("?")[0],w,g,m)):m[m.length-1]},xt=(l,h,w,g,m)=>{if(!B(l))return null;const Y=gt=>{const Ct=gt.split("/"),Ot=h.split("/"),pt={};return Ct.map((zt,Tt)=>zt.indexOf(":")===0&&(pt[zt.slice(1)]=Ot[Tt])),pt},Z=(gt,Ct)=>{const Ot=[],pt=Ct.split("/:")[0];for(let zt=0,Tt=gt.length;zt<Tt;zt++){const ct=gt[zt];if(ct[m]===pt){ct.active=!0;const{name:st,title:Nt,icon:Kt,params:ne}=ct;Ot.push({name:st,title:Nt,icon:Kt,params:ne,[m]:pt})}else if(Ct.indexOf(`${ct[m]}/`)===0){ct.active=!0;const st=Y(ct[m]),Nt=Object.keys(st).map(Xe=>st[Xe]).join("/"),{name:Kt,title:ne,icon:ue}=ct,ye=Nt?`${pt}/${Nt}`:ct[m];Ot.push({name:Kt,title:ne,icon:ue,[m]:ye,params:{...ct.params,...st}})}else if(ct[m]===Ct){ct.active=!0;const st=Y(ct[m]),{[g]:Nt,...Kt}=ct;Ot.push({...Kt,[m]:h,params:{...Kt.params,...w,...st}})}}return Ot},q=(gt,Ct)=>{for(let Ot=0,pt=gt.length;Ot<pt;Ot++){const zt=gt[Ot];if(Ct.indexOf(`${zt[m]}/`)===0){zt.active=!0;return}}},R=gt=>{for(let Ct=0,Ot=gt.length;Ct<Ot;Ct++){const pt=gt[Ct],zt=(pt[m]||"").split("?")[0];if(zt===h){pt.hideMenu&&q(gt,pt.parentPath||zt),pt.active=!0;const{[g]:Tt,...ct}=pt;return[{...ct,params:{...ct.params,...w}}]}if(new RegExp("^"+zt.replace(/:[^/]+/g,"[^/]+")+"$").test(h))return Z(gt,zt);if(B(pt[g])){const Tt=R(pt[g]);if(Tt){pt.active=!0,pt.open=!0;const{[g]:ct,...st}=pt;return[st,...Tt]}}}},P=R(l)||[];return{result:l,current:P}},kt=(l,h,w)=>l.filter(g=>g.hideMenu||g[w].indexOf("/:")>-1?!1:(B(g[h])&&(g[h]=kt(g[h],h,w)),!0)),Ut=(l,h,w,g="children",m="path")=>{const Y=U(l,h,g,m);if(Y)return{redirect:Y};const{result:Z,current:q}=xt(l,h,w,g,m),R=kt(Z,g,m);return{current:q,menu:R}},Q=l=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(l),Xt=(l,h)=>{const w=["#/","/"],g=w[!!h-0];if(!l||w.includes(l))return g;const m=l.charAt(l.length-1)==="/"?l.slice(0,-1):l;return h||m.indexOf("#/")>-1?m:`#${m}`},_t=(l,h,w,g=!1)=>{const m=Xt(h,w);return g?m:w?l&&m==="/"?l:`${l}${m}`:l?`${l}/${m}`:m},qt=(l,h,w,g,m,Y)=>{if(!B(l))return l;const Z=(q,R="")=>q.filter(P=>!P.denied).map(P=>{if(!Y&&!P.exact&&!Q(P[g])){(!P[g]||P[g]==="javascript:;")&&(P[g]="");const gt=P[g].charAt(0)==="/"&&R.charAt(R.length-1)==="/"?P[g].slice(1):P[g].charAt(0)!=="/"&&R.charAt(R.length-1)!=="/"?`/${P[g]}`:P[g];P[g]=R?R+gt:_t(m,gt,h)}return P.redirect&&(P.redirect=_t(m,P.redirect,h)),B(P[w])&&(P[w]=Z(P[w],P[g]),!P.redirect&&P[w].length&&(P.redirect=P[w][0][g])),P});return Z(l)},le=l=>{if(!V(l))return"";const h=[];return Object.keys(l).map((w,g)=>{const m=g>0?"&":"?";h.push(`${m}${w}=${l[w]}`)}),h.join("")},ee=(l="")=>{const[h,w]=l.split("?");if(w){const g={};return w.split("&").map(m=>{const[Y,Z]=m.split("=");g[Y]=Z}),{path:h,params:g}}return{path:h}},K=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},he=(l,h)=>{for(let w=l.length-1,g;g=l[w--];){const{title:m,name:Y}=g;if(typeof m=="string"&&m.length)return document.title=m;if((m==null||m===!0)&&Y)return document.title=h?`${Y}-${h}`:Y;if(h)return document.title=h}},Qe=l=>{const{pathname:h,search:w,hash:g}=location;if(l){const q=Xt(h,l),R=decodeURIComponent(`${q}${w}`),{params:P}=ee(R);return{path:R,params:P}}const m=decodeURIComponent(Xt(g,l)),{params:Y}=ee(m),Z=lt(h);return{path:Z?`${Z}/${m}`:m,params:Y}},Me=(l,h,w)=>{typeof l=="function"&&l({...h,stay:new Date-w})},Yr=(l,h,w,g)=>{let m,Y,Z;if(typeof l=="string")m=l;else if(V(l))m=l.path,Y=l.params,Z=l.query;else return;!m||m==="."||m==="./"?m=g:m.indexOf("./")===0?m=`${g.split("?")[0]}${m.replace("./","/")}`:m.indexOf("../")===0&&(m=`${g.split("?")[0].split("/").slice(0,-1).join("/")}${m.replace("../","/")}`),m=_t(h,m,w,l?.exact);const q=ee(m);m=q.path;const R={...q.params,...Z},P=le(R);return m=`${m}${P}`,Y={...Y,...R},{path:m,params:Y}},tr=(l,h)=>{const w=l.split(h);return w.length>1?["","/"].includes(w[1].slice(0,1)):!1},hr=k(),fr=l=>{const{on:h,emit:w,off:g}=hr;return{on:m=>h(l,m),emit:m=>w(l,m),off:m=>g(l,m)}},er=l=>(h,w)=>{const{getState:g,setState:m,subscribe:Y,unsubscribe:Z,clean:q}=l;return w!==void 0&&m({[h]:w},!0),{getState:()=>g(h),setState:(R,P)=>m({[h]:R},P),subscribe:R=>Y(h,R),unsubscribe:()=>Z(h),clean:()=>q(h)}},pr=Rt(),ce=er(pr),rr=fr("push-emitter"),Ae=fr("replace-emitter"),fe=ce("route-store"),or=k(),mr=Rt(),oe=ae(mr),jr=()=>![typeof window,typeof document].includes("undefined"),nr=l=>{if(!jr())return;const h=document.createElement("div");return h.innerHTML=l,h.children[0]};var Vr=Object.defineProperty,xr=(l,h,w)=>h in l?Vr(l,h,{enumerable:!0,configurable:!0,writable:!0,value:w}):l[h]=w,Mr=(l,h,w)=>(xr(l,typeof h!="symbol"?h+"":h,w),w);class Ie extends N.default.Component{constructor(){super(...arguments),Mr(this,"state",{error:null})}static getDerivedStateFromError(h){return{error:h}}componentDidCatch(h,w){const{errorReport:g}=this.props;typeof g=="function"&&g({error:h,info:w.componentStack})}render(){const{error:h}=this.state,{fallback:w,children:g}=this.props;return h?w(h):g}}const Pe=({children:l,report:h})=>{const w=(0,N.useRef)();return w.current?.state&&(w.current.state.error=null),(0,$t.jsx)(Ie,{ref:w,fallback:(g,m)=>Zt({error:g,info:m}),errorReport:h,children:l})};var ir=ft(62),ve=ft.n(ir),yr=ft(36),$e=ft.n(yr),_e=ft(793),zr=ft.n(_e),gr=ft(892),Sr=ft.n(gr),Be=ft(173),Ze=ft.n(Be),br=ft(464),$r=ft.n(br),we=ft(990),pe={};pe.styleTagTransform=$r(),pe.setAttributes=Sr(),pe.insert=zr().bind(null,"head"),pe.domAPI=$e(),pe.insertStyleElement=Ze();var s=ve()(we.Z,pe);const b=we.Z&&we.Z.locals?we.Z.locals:void 0,y=({global:l,absolute:h})=>(0,$t.jsx)("div",{className:`spinner${l?" global":""}${h?" absolute":""}`,children:(0,$t.jsx)("figure",{className:"spinning"})}),S=()=>{const l=(0,N.useRef)([]);return(0,N.useEffect)(()=>()=>{l.current.map(h=>h.cancelFn()),l.current=[]},[]),{cancelablePromise:(0,N.useCallback)((h,w=!0)=>{const g=Pt(h,w);return l.current.indexOf(g)===-1&&l.current.push(g),g.promiseFn},[])}},T=(l={})=>{const{cancelablePromise:h}=S(),[w,g]=(0,N.useState)(l),m=(0,N.useRef)({}),Y=(0,N.useRef)({}),Z=(0,N.useCallback)((R=null)=>{Array.isArray(R)&&R.length?R.map(P=>m.current[P]=l[P]):m.current=l},[]),q=(0,N.useCallback)((R,P,gt=!1)=>{const Ct=Object.keys(R),Ot=JSON.stringify(Ct.sort());if(!Y.current[Ot]){Y.current[Ot]=!0,gt&&Z(Array.isArray(gt)?gt:Ct),Ct.map(pt=>{m.current[pt]||(m.current[pt]={}),m.current[pt].pending=!0}),g({...m.current});for(let pt=0,zt=Ct.length;pt<zt;pt++){const Tt=Ct[pt];h(R[Tt]).then(ct=>{let{result:st,errMsg:Nt}=ct;pt===zt-1&&(Y.current[Ot]=!1),typeof P=="function"&&(st=P(st)||st),m.current[Tt]={...st,pending:!1},Nt===!1&&g({...m.current})}).catch(ct=>{throw pt===zt-1&&(Y.current[Ot]=!1),m.current[Tt]={error:ct,pending:!1},g({...m.current}),ct})}}},[]);return[w,q,Z]},X=l=>Object.keys(l).length,yt=l=>{const{Comp:h,restResolve:w,loadPromise:g,params:m,children:Y}=l,[Z,q]=T(),[R,P]=T();return(0,N.useEffect)(()=>{X(w)&&q(w),X(g)&&P(g)},[w,g]),(0,N.useEffect)(()=>{const gt=X(Z);gt&&gt===X(w)&&m.store.setState(Z)},[Z]),(0,$t.jsx)(h,{...m,...Z,...R,children:Y})},dt=l=>l===!1?null:H(l)?l:wt(l)?(0,$t.jsx)(l,{}):(0,$t.jsx)(y,{}),at=({Loading:l,ErrorBoundary:h,loadedComp:w})=>{const g=(0,$t.jsx)(N.Suspense,{fallback:dt(l),children:w});return h===!1?g:wt(h)?(0,$t.jsx)(h,{children:g}):(0,$t.jsx)(Pe,{children:g})},It=({Comp:l,routerProps:h,children:w})=>{const{params:g,...m}=h,{loading:Y,errorBoundary:Z,...q}=g,R=(0,$t.jsx)(yt,{Comp:l,...m,params:q,children:w});return at({Loading:Y,ErrorBoundary:Z,loadedComp:R})},me={},Le=(l,h,w,g)=>Ft(w)?w.then(m=>It({Comp:l,routerProps:h,children:m.default??m})):It({Comp:l,routerProps:h,children:w}),He=(l,h,w)=>{const g={},m={};return V(l)?(Object.keys(l).map(Y=>{const Z=h.getState(Y);Z==null?m[Y]=l[Y](w):g[Y]=Z}),{cachedResolve:g,restResolve:m}):{cachedResolve:g,restResolve:m}},xe=(l,h)=>{if(!V(l))return{};const w={};return Object.keys(l).map(g=>w[g]=l[g](h)),w},ar=l=>{const{current:h,menu:w,...g}=l,m=h.map(q=>{const{component:R,resolve:P,loadData:gt,loading:Ct,errorBoundary:Ot,icon:pt,...zt}=q;return zt}),Y=[...h].filter(q=>q.component),Z=(q=0)=>{if(!Y.length)return null;const R=Y.shift(),{component:P,resolve:gt,loadData:Ct,icon:Ot,key:pt,...zt}=R;if(typeof P=="function"||Ft(P)){const Tt=zt.path;let ct=me[Tt];const{cachedResolve:st,restResolve:Nt}=He(gt,g.store,zt),Kt={loadPromise:xe(Ct,zt),restResolve:Nt,params:{current:m,...g,...zt,...st}},ne=Z(q+1);if(ct)return Le(ct,Kt,ne,Tt);try{ct=P(),ct=H(ct)?P:ct}catch{ct=P}return Ft(ct)?ct.then(ue=>(ct=ue.default??ue,me[Tt]=ct,Le(ct,Kt,ne,Tt))):(me[Tt]=ct,Le(ct,Kt,ne,Tt))}return typeof P=="string"?nr(P):P};return Z()},vr=l=>{const[h,w]=(0,N.useState)(l),[g,m]=(0,N.useState)(),[Y,Z]=(0,N.useState)(),q=(0,N.useRef)(),R=(0,N.useRef)(),P=(0,N.useRef)(),gt=(0,N.useRef)(),Ct=()=>{typeof q.current=="function"&&(q.current({cancel:O.cancelMsg}),q.current=null)},Ot=(0,N.useCallback)(st=>{typeof st=="function"?w(Nt=>({...Nt,...st(Nt)})):V(st)&&w(Nt=>({...Nt,...st}))},[]),pt=(st,Nt="pushState")=>{const{basepath:Kt,browserRouter:ne}=gt.current,ue=P.current,{path:ye,params:Xe}=Yr(st,Kt,ne,ue);ye!==ue&&ct({inputPath:ye,inputParams:Xe},()=>history[Nt](st?.state,"",ye))},zt=(0,N.useCallback)(st=>pt(st),[]),Tt=(0,N.useCallback)(st=>pt(st,"replaceState"),[]),ct=(0,N.useCallback)(({inputPath:st="",inputParams:Nt={}},Kt)=>{const ne=+new Date,{browserRouter:ue,childKey:ye,idKey:Xe,title:Oe,routers:De,beforeRender:lr,afterRender:Fr,basepath:Re,allowedNotFound:Ee,...Gr}=gt.current;if(!st){const{path:se,params:qe}=Qe(ue);st=se,Nt={...Nt,...qe}}const Or=P.current;new Promise((se,qe)=>{De?.length||qe("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),st!==P.current&&typeof lr=="function"?lr({path:st,params:Nt,prevPath:Or},se,qe):se()}).then(se=>{if(se===!1)return;const qe=se?.path;if(qe&&_t(Re,qe,ue)!==st){Tt(se);return}R.current=R.current??st;const{redirect:ge,current:wr,menu:Dr}=Ut(vt(De),st.split("?")[0],Nt,ye,Xe);if(ge){if(Ee&&ge===$&&(typeof Ee=="boolean"||typeof Ee=="string"&&tr(R.current,Ee)||B(Ee)&&Ee.find(Ke=>tr(R.current,Ke))))return;if(B(ge)){console.error(`\u522B\u95F9\uFF0C[${[st,...ge].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return ge===$?Tt({path:ge}):zt({path:ge,exact:!0})}Kt?.(),st?.split("?")[0]!==P.current?.split("?")[0]&&K(),he(wr,Oe);const Ur={eventBus:or,store:mr,useStore:oe,...Gr,updateRouter:Ot,emitRouter:fe.subscribe,router:{push:zt,replace:Tt},current:wr,menu:Dr,inputPath:R.current,prevPath:Or,basepath:Re,title:Oe,history:{...C,goBack:Ke=>zt({...Ke,path:Or})}};fe.setState({...Ur,browserRouter:ue});const je=ar(Ur);if(P.current=st,R.current=null,Ct(),Ft(je)){const{promiseFn:Ke,cancelFn:Jr}=Pt(je,{delay:O.delay,msg:{timeout:O.timeoutMsg}});return q.current=Jr,Z(!0),Ke.then(ze=>{q.current=null;const{result:sr,errMsg:Tr}=ze,be=Tr===!1?sr:Tr?.timeout?Zt({error:{errMsg:`${st} ${Tr.timeout}`}}):null;be&&(Z(!1),Me(Fr,wr.slice(-1)[0],ne),m(be))}).catch(ze=>{throw q.current=null,Z(!1),Me(Fr,wr.slice(-1)[0],ne),m(Zt({error:ze})),ze})}Me(Fr,wr.slice(-1)[0],ne),m(je)}).catch(se=>{throw m(Zt({error:se})),se})},[]);return(0,N.useEffect)(()=>{const{childKey:st="children",idKey:Nt="path",browserRouter:Kt=!1,routers:ne=[],basepath:ue="",exact:ye=!1,inputPath:Xe="",inputParams:Oe={},...De}=h,lr=lt(ue),Fr=qt(vt(ne),Kt,st,Nt,lr,ye);gt.current={...De,childKey:st,idKey:Nt,browserRouter:Kt,routers:Fr,basepath:lr};const Re=Kt?"popstate":"hashchange",Ee=()=>ct({});return ct({inputPath:Xe,inputParams:Oe}),rr.on(zt),Ae.on(Tt),window.addEventListener(Re,Ee,!1),()=>{Ct(),rr.off(zt),Ae.off(Tt),window.removeEventListener(Re,Ee,!1)}},[h]),{updateRouter:Ot,output:g,loading:Y}},Fe=l=>{const{to:h,onClick:w,preventDefault:g,stopPropagation:m=!0,exact:Y=!0,target:Z,...q}=l,R=()=>{const P=typeof h=="string"?{exact:Y,path:h}:{exact:Y,...h};rr.emit(P)};return P=>{if(P.preventDefault(),m&&P.stopPropagation(),!q?.disabled){if(!g){if(Z){const{browserRouter:gt}=fe.getState(),Ct=typeof h=="string"?h:h?.path??"",Ot=le(h?.query),pt=gt||Ct.indexOf("#/")>-1||Q(Ct);window?.open(`${pt?"":"#"}${Ct}${Ot}`,Z);return}R()}typeof w=="function"&&w()}}};var ke=ft(267),Ce={};Ce.styleTagTransform=$r(),Ce.setAttributes=Sr(),Ce.insert=zr().bind(null,"head"),Ce.domAPI=$e(),Ce.insertStyleElement=Ze();var lo=ve()(ke.Z,Ce);const Ue=ke.Z&&ke.Z.locals?ke.Z.locals:void 0,We=l=>{if(!l)return Ue.link;const h=l.trim().split(" ").filter(Boolean),w=h.find(g=>g==="active")?[Ue.active]:[];return[Ue.link,...w,...h].join(" ")},no=l=>{const{to:h,onClick:w,preventDefault:g,stopPropagation:m,exact:Y,target:Z,className:q,...R}=l;return(0,$t.jsx)("span",{onClick:Fe(l),className:We(q),...R})},_r=()=>{const[l,h]=(0,N.useState)(fe.getState());return(0,N.useEffect)(()=>fe.subscribe(w=>h(w)),[]),l},Zr=fe.getState,Hr=fe.subscribe})();var ut=A.rU,jt=A.cb,Rr=A.Bv,Vt=A.yj,Ht=A.tv},8124:function(Wr,St,te){var Bt;te.d(St,{Nr:function(){return N},PQ:function(){return $t},Vd:function(){return Ht},Wy:function(){return B},fH:function(){return ut},xd:function(){return Zt}});var u=te(7378),Se={837:(k,Lt,Wt)=>{var Rt,ae=Wt(810),L=Symbol.for("react.element"),ot=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,z=ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function E(F,O,$){var C,U={},xt=null,kt=null;$!==void 0&&(xt=""+$),O.key!==void 0&&(xt=""+O.key),O.ref!==void 0&&(kt=O.ref);for(C in O)c.call(O,C)&&!x.hasOwnProperty(C)&&(U[C]=O[C]);if(F&&F.defaultProps)for(C in O=F.defaultProps,O)U[C]===void 0&&(U[C]=O[C]);return{$$typeof:L,type:F,key:xt,ref:kt,props:U,_owner:z.current}}Rt=ot,Lt.jsx=E,Rt=E},322:(k,Lt,Wt)=>{k.exports=Wt(837)},810:k=>{var Lt=Rt=>{var ae={};return ft.d(ae,Rt),ae},Wt=Rt=>()=>Rt;k.exports=Bt||(Bt=te.t(u,2))}},Ne={};function ft(k){var Lt=Ne[k];if(Lt!==void 0)return Lt.exports;var Wt=Ne[k]={exports:{}};return Se[k](Wt,Wt.exports,ft),Wt.exports}ft.d=(k,Lt)=>{for(var Wt in Lt)ft.o(Lt,Wt)&&!ft.o(k,Wt)&&Object.defineProperty(k,Wt,{enumerable:!0,get:Lt[Wt]})},ft.o=(k,Lt)=>Object.prototype.hasOwnProperty.call(k,Lt);var A={};(()=>{ft.d(A,{fH:()=>Lt,r5:()=>z,Nd:()=>O,KY:()=>c,Vd:()=>U,Nr:()=>kt,D:()=>Xt,Wy:()=>Me,zX:()=>Yr,Cd:()=>Ut,Yz:()=>tr,D9:()=>hr,cb:()=>Qe,vO:()=>er,Rx:()=>Mr,OH:()=>Ie,oR:()=>$e,rE:()=>br,PQ:()=>we,rf:()=>Q,xd:()=>pe});var k=ft(810);const Lt=s=>(b,y)=>{const[S,T]=(0,k.useState)(()=>{const at=s?.getState(b);return at!==void 0?at:(y!==void 0&&s?.setState({[b]:y},!0),y)}),X=(0,k.useCallback)(at=>s?.setState({[b]:typeof at=="function"?at(s?.getState(b)):at}),[]),yt=(0,k.useCallback)(at=>s?.subscribe(b,at),[]),dt=(0,k.useCallback)((at=at)=>s?.clean(at),[]);return(0,k.useEffect)(()=>{s?.subscribe(b,at=>T(at))},[]),[S,X,yt,dt]},Wt=s=>Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),Rt=s=>Wt(s)==="object",ae=s=>Wt(s)==="function",L=s=>Wt(s)==="promise"||Rt(s)&&ae(s.then),ot=(s,b=12e4,y="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!L(s))return{};let S=null,T=null;return{promiseFn:new Promise((X,yt)=>{S=(dt="canceled")=>{clearTimeout(T),X({canceled:!0,errMsg:dt})},b&&(b=typeof b!="number"?12e4:b,T=setTimeout(()=>S(y),b)),s.then(dt=>{clearTimeout(T),X({result:dt,errMsg:!1})}).catch(dt=>{clearTimeout(T),yt(dt)})}),cancelFn:S}},c=()=>{const s=(0,k.useRef)([]);return(0,k.useEffect)(()=>()=>{s.current.map(b=>b.cancelFn()),s.current=[]},[]),{cancelablePromise:(0,k.useCallback)((b,y=!0)=>{const S=ot(b,y);return s.current.indexOf(S)===-1&&s.current.push(S),S.promiseFn},[])}},z=(s={})=>{const{cancelablePromise:b}=c(),[y,S]=(0,k.useState)(s),T=(0,k.useRef)({}),X=(0,k.useRef)({}),yt=(0,k.useCallback)((at=null)=>{Array.isArray(at)&&at.length?at.map(It=>T.current[It]=s[It]):T.current=s},[]),dt=(0,k.useCallback)((at,It,me=!1)=>{const Le=Object.keys(at),He=JSON.stringify(Le.sort());if(!X.current[He]){X.current[He]=!0,me&&yt(Array.isArray(me)?me:Le),Le.map(xe=>{T.current[xe]||(T.current[xe]={}),T.current[xe].pending=!0}),S({...T.current});for(let xe=0,ar=Le.length;xe<ar;xe++){const vr=Le[xe];b(at[vr]).then(Fe=>{let{result:ke,errMsg:Ce}=Fe;xe===ar-1&&(X.current[He]=!1),typeof It=="function"&&(ke=It(ke)||ke),T.current[vr]={...ke,pending:!1},Ce===!1&&S({...T.current})}).catch(Fe=>{throw xe===ar-1&&(X.current[He]=!1),T.current[vr]={error:Fe,pending:!1},S({...T.current}),Fe})}}},[]);return[y,dt,yt]},x=s=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(s),E=s=>new Promise((b,y)=>{const S=new FileReader;S.readAsDataURL(s),S.addEventListener("load",()=>b(S.result)),S.addEventListener("error",T=>y(T))}),F=async s=>{if(!x(s))return s;const b=await(await fetch(s)).blob();return await E(b)},O=s=>{const[b,y]=(0,k.useState)(s);return(0,k.useEffect)(()=>{(async S=>{const T=await F(S);y(T)})(s)},[]),b},$=(s,b)=>Object.prototype.hasOwnProperty.call(s??{},b),C=s=>$(s,"current"),U=(s,b,y="click")=>{(0,k.useEffect)(()=>{const S=X=>{const yt=C(s)?s.current:s;yt?.contains&&!yt.contains(X.target)&&b(X)},T=typeof y=="string"?[y]:y;return T.map(X=>{document.addEventListener(X,S,!1)}),()=>{T.map(X=>{document.removeEventListener(X,S,!1)})}},[s,b,y])},xt=(s=()=>{},b=60)=>{let y=null;return function(...S){clearTimeout(y),y=setTimeout(()=>s.apply(this,S),b)}},kt=(s,b=60)=>(0,k.useMemo)(()=>xt(s,b),[b]),Ut=()=>{const s=(0,k.useRef)(!0);return s.current?(s.current=!1,!0):!1},Q=(s,b=[])=>{const y=Ut();(0,k.useEffect)(()=>{if(!y)return s()},b)},Xt=(s,b=450)=>{const[y,S]=(0,k.useState)(s);return Q(()=>{let T;return s||b===0?S(s):T=setTimeout(()=>S(s),b),()=>T&&clearTimeout(T)},[s]),[y,S]},_t=()=>![typeof window,typeof document].includes("undefined"),qt=s=>Wt(s).indexOf("element")>-1,le=(s=null)=>_t()?qt(s)?{width:s.clientWidth,height:s.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},ee=(s,b)=>{const y=[],S=s.children??[];for(let T=0,X=S.length;T<X;T++){const yt=S[T];yt.className.indexOf(b)>-1&&y.push(yt)}return y.length===0?null:y.length===1?y[0]:y},K=(s,b)=>{getComputedStyle(s).position==="static"&&(s.style.position="relative");const y=document.createElement("object");return y.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),y.setAttribute("class","resize-sensor"),y.onload=()=>{y.contentDocument.defaultView.addEventListener("resize",b,!1),b()},y.type="text/html",s.appendChild(y),y.data="about:blank",y},he=(s,b=60)=>{if(!_t())return;s=C(s)?s.current:s??document.body;let y=ee(s,"resize-sensor"),S=[];const T=xt(()=>S.map(at=>at(s)),b),X=at=>{ee(s,"resize-sensor")||(y=K(s,T)),S.indexOf(at)===-1&&S.push(at)},yt=at=>{const It=S.indexOf(at);It!==-1&&S.splice(It,1),S.length===0&&y&&dt()},dt=()=>{y&&y.parentNode&&(y.contentDocument&&y.contentDocument.defaultView.removeEventListener("resize",T,!1),y.parentNode.removeChild(y),y=void 0,S=[])};return{element:s,bind:X,unbind:yt,destroy:dt}},Qe=(s={})=>{const b=(0,k.useRef)(0),[y,S]=(0,k.useState)(s),T=(0,k.useCallback)(X=>{cancelAnimationFrame(b.current),b.current=requestAnimationFrame(()=>S(X))},[]);return(0,k.useEffect)(()=>()=>cancelAnimationFrame(b.current),[]),[y,T]},Me=(s=null,b=60)=>{const y=C(s)?s.current:s,{bind:S,destroy:T}=he(y,b),[X,yt]=Qe(le(y));return(0,k.useEffect)(()=>(S(()=>y&&yt(le(y))),()=>T()),[y]),X},Yr=s=>{const b=(0,k.useRef)(null);return(0,k.useLayoutEffect)(()=>{b.current=s}),(0,k.useCallback)(b.current,[])},tr=(s,b)=>{const y=(0,k.useRef)();(0,k.useEffect)(()=>{y.current=s},[s]),(0,k.useEffect)(()=>{if(b){const S=setInterval(()=>y.current(),b);return()=>clearInterval(S)}},[b])},hr=s=>{const b=(0,k.useRef)();return(0,k.useEffect)(()=>{b.current=s},[s]),b.current},fr=(s=null)=>_t()?qt(s)?{left:s.scrollLeft,top:s.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0},er=(s=null)=>{const[b,y]=Qe(fr(s));return(0,k.useEffect)(()=>{const S=()=>y(fr(s)),T=qt(s)?s:window;return T.addEventListener("scroll",S,{capture:!1,passive:!0}),()=>T.removeEventListener("scroll",S)},[s]),b},pr=s=>Wt(s)==="array",ce=s=>pr(s)&&!!s.length,rr=(s,b,y=[],S=!1,T=null)=>ce(s)?b?(y=typeof y=="string"?y.split(","):y,s.filter(X=>(y=y.length>0?y:Object.keys(X),y.filter(yt=>{const dt=X[yt];if(dt==null)return!1;if(S)return dt===b;const at=new RegExp(b,"gi"),It=dt.toString().match(at);return It&&T&&(X[yt]=T(dt.toString().replace(at,`<span style="background-color:yellow">${It[0]}</span>`),{display:"inline-block"})),It}).length))):s:[],Ae=(s,b="id")=>{if(!ce(s))return s;const y=[],S=[];return s.map(T=>{const X=Rt(T)?T[b]:T;S.includes(X)||(S.push(X),y.push(T))}),y},fe=s=>s?.$$typeof&&typeof s.$$typeof=="symbol"&&s.$$typeof.description==="react.element",or=s=>s?.__v_isVNode,mr=s=>{if(!pr(s)&&!Rt(s))return s;const b=pr(s)?[]:{};for(const y in s)if($(s,y)){const S=s[y];b[y]=fe(S)||or(S)||typeof S!="object"?S:S!==s?mr(S):"cyclic"}else Object.setPrototypeOf(b,{[y]:s[y]});return b},oe=mr,jr=s=>(b,y="children")=>{if(!Array.isArray(b))return b;const S=oe(b),T=X=>{const yt=[];return X.map(dt=>{if(ce(dt[y])){const at=T(dt[y])||[];dt[y]=at,at.length>0&&yt.push(dt)}}),s(X,yt)};return T(S)},nr=(s,b,y,S="name",T="id",X="children",yt=!1)=>jr((dt,at)=>Ae([...rr(dt,b,S,yt,y),...at],T))(s,X);var Vr=ft(322);const xr=(s,b)=>(0,Vr.jsx)("div",{dangerouslySetInnerHTML:{__html:s},...b}),Mr=(s=null,b=xr)=>{const[y,S]=(0,k.useState)(s),T=(0,k.useCallback)((...X)=>{const[yt,dt,...at]=X;if(!dt)S(null);else{X=[yt,dt,b,...at];const It=nr(...X);S(It)}},[]);return[y,T]},Ie=s=>{const[b,y]=(0,k.useState)(s);return(0,k.useEffect)(()=>y(s),[s]),[b,y]},Pe=()=>{const s={};return{on:(b,y)=>{s[b]||(s[b]=[]),s[b].indexOf(y)===-1&&s[b].push(y)},emit:(b,y)=>{s[b]&&s[b].map(S=>S(y))},off:(b,y=null)=>{if(s[b]){if(typeof y!="function")return delete s[b];const S=s[b].indexOf(y);S>-1&&(s[b].splice(S,1),s[b].length||delete s[b])}}}},ir=s=>{const b={};for(let y in s)$(s,y)||(b[y]=s[y]);return b},ve=(s,b)=>{if(!Rt(s))return b;if(!Rt(b))return s;const y={...ir(s),...ir(b)},S={...s,...b};return Object.keys(y).map(T=>{Object.setPrototypeOf(S,{[T]:y[T]})}),S},yr=(()=>{const{on:s,emit:b,off:y}=Pe(),S={};return{getState:T=>oe(S[T]),setState:(T,X=!1)=>{if(typeof T=="function"&&(T=T(oe(S))),!Rt(T))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const yt=oe(T);Object.keys(yt).map(dt=>{const at=S[dt],It=yt[dt],me=Rt(It)&&Rt(at)?ve(at,It):It;!X&&b(dt,me),S[dt]=me})},subscribe:(T,X)=>(s(T,X),()=>y(T,X)),unsubscribe:y,clean:T=>{typeof T=="string"?S[T]=void 0:Array.isArray(T)?T.map(X=>S[X]=void 0):Object.keys(S).map(X=>S[X]=void 0)}}})(),$e=Lt(yr),_e=s=>s<10?"0"+s:s,zr=(s=new Date)=>{const b=new Date(s),y=b.getFullYear(),S=b.getDay(),T=_e(b.getMonth()+1),X=_e(b.getDate()),yt=_e(b.getHours()),dt=_e(b.getMinutes()),at=_e(b.getSeconds());return[y,T,X,yt,dt,at,S]},gr=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Sr=(s,b,y="-")=>s.replace(new RegExp(y,"g"),b),Be=(s=new Date,b=["-","-"," ",":",":",""],y=gr)=>{const S=zr(s);let T="";return b.map((X,yt)=>T+=(yt===6?y[S[yt]]:S[yt]??"")+X),T},Ze=()=>Be(new Date,["-","-"," ",":",":"," ",""]),br=()=>{const[s,b]=(0,k.useState)("");return tr(()=>{b(Ze())},1e3),[s]},$r=s=>++s,we=()=>{const[,s]=(0,k.useState)(0);return(0,k.useCallback)(()=>s($r),[])},pe=()=>{const[s,b]=Qe(le());return(0,k.useEffect)(()=>{const y=()=>b(le());return window.addEventListener("resize",y,!1),()=>window.removeEventListener("resize",y,!1)},[]),s}})();var ut=A.fH,jt=A.r5,Rr=A.Nd,Vt=A.KY,Ht=A.Vd,N=A.Nr,M=A.D,B=A.Wy,V=A.zX,H=A.Cd,tt=A.Yz,J=A.D9,rt=A.cb,vt=A.vO,wt=A.Rx,Ft=A.OH,Pt=A.oR,lt=A.rE,$t=A.PQ,Mt=A.rf,Zt=A.xd},1090:function(Wr,St,te){te.d(St,{A_F:function(){return Ki},JaC:function(){return Ni},MTn:function(){return Bi},NA2:function(){return Zi},PTJ:function(){return Vi},Vcq:function(){return Ji},_O2:function(){return ta},_iG:function(){return Li},afD:function(){return Yi},azd:function(){return Qi},eyl:function(){return Mi},f9u:function(){return ra},fHt:function(){return Pi},gVz:function(){return qi},jg2:function(){return Xi},k$y:function(){return ea},mrB:function(){return Ri},muM:function(){return Ai},qg7:function(){return Wi},rWO:function(){return Hi},tOc:function(){return Gi},vQq:function(){return Ii},ywV:function(){return Ui}});var Bt={};(function(){Bt.d=function(t,e){for(var r in e)Bt.o(e,r)&&!Bt.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),function(){Bt.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}();var u={};Bt.d(u,{NzM:function(){return Ne},wBC:function(){return N},O39:function(){return B},cnu:function(){return J},E4D:function(){return vt},TRp:function(){return Ft},zI1:function(){return lt},Ufj:function(){return Mt},GxO:function(){return Wt},cu2:function(){return ae},BcS:function(){return ot},lPd:function(){return xt},dC1:function(){return Ut},$L2:function(){return Xt},Vji:function(){return z},YxP:function(){return C},UhT:function(){return ce},JaC:function(){return Ae},o4B:function(){return oe},Hlr:function(){return gr},muM:function(){return T},OiV:function(){return yr},KTn:function(){return yt},lwL:function(){return at},d9v:function(){return y},yCD:function(){return me},qCK:function(){return He},vQq:function(){return ar},fHt:function(){return Fe},azq:function(){return Ue},dSY:function(){return g},MTn:function(){return gt},RYO:function(){return Ce},WAo:function(){return Ot},GVc:function(){return Be},Emy:function(){return zt},v9O:function(){return ct},DsO:function(){return Nt},_lj:function(){return ne},vO6:function(){return ye},xDX:function(){return Gr},hf3:function(){return So},ip7:function(){return Xr},uYe:function(){return Y},DgJ:function(){return br},rae:function(){return $o},YBu:function(){return uo},_iG:function(){return fo},hXT:function(){return to},gQq:function(){return To},D_D:function(){return eo},$nD:function(){return mo},dtG:function(){return xo},Y0R:function(){return go},qg7:function(){return Cr},Xxf:function(){return Po},tSM:function(){return bo},Few:function(){return i},xHg:function(){return j},aoj:function(){return W},Dlm:function(){return ht},mrB:function(){return At},dKu:function(){return Te},v1d:function(){return Tr},afD:function(){return Ye},Lz5:function(){return vo},xZX:function(){return Yo},G_1:function(){return wo},osI:function(){return Vo},PTJ:function(){return sn},Qfx:function(){return cn},bti:function(){return ge},XBv:function(){return un},eyl:function(){return dn},y35:function(){return hn},hKD:function(){return it},BWC:function(){return Mo},oLi:function(){return A},NA2:function(){return mn},S3Y:function(){return se},pvT:function(){return Zo},m2f:function(){return ee},rWO:function(){return xn},A$w:function(){return yn},kJL:function(){return jt},S9U:function(){return ir},dYC:function(){return gn},jUY:function(){return k},J_U:function(){return bn},kKo:function(){return H},VZO:function(){return vn},mf2:function(){return Ie},w1q:function(){return wn},Kn2:function(){return E},ncl:function(){return kn},LWC:function(){return we},dqb:function(){return he},Kjn:function(){return Cn},TaN:function(){return ko},CBv:function(){return Re},rTd:function(){return qr},B73:function(){return En},SSA:function(){return s},CLv:function(){return jn},F$z:function(){return zn},XT_:function(){return Ho},omS:function(){return Sn},poV:function(){return $n},VXY:function(){return _n},xsP:function(){return Fn},HPs:function(){return On},TSy:function(){return Dn},B5o:function(){return Co},u1A:function(){return Tn},WAY:function(){return Eo},I8J:function(){return R},ywV:function(){return Bn},bEN:function(){return Ln},$45:function(){return Wn},TUk:function(){return Rn},T7B:function(){return O},CEd:function(){return Yn},IHq:function(){return Vn},SkG:function(){return qo},Smz:function(){return xr},nL5:function(){return nr},ON:function(){return Hn},eiS:function(){return Un},Frc:function(){return Xn},z5J:function(){return qn},scT:function(){return Kn},hd2:function(){return zo},AnA:function(){return Gn},kYX:function(){return Jn},yZP:function(){return Qn},IVd:function(){return jo},SIr:function(){return ei},jg2:function(){return ri},gVz:function(){return oi},puc:function(){return ai},Azz:function(){return li},X5u:function(){return Me},dPh:function(){return si},SMZ:function(){return qt},kro:function(){return Vt},nPi:function(){return ci},US:function(){return ui},A_F:function(){return je},_vH:function(){return ze},gmH:function(){return Jr},DYV:function(){return di},qi2:function(){return hi},tOc:function(){return fi},hau:function(){return mi},FaZ:function(){return Dr},uyF:function(){return xi},Vcq:function(){return yi},XKW:function(){return gi},azd:function(){return or},P2K:function(){return bi},XBe:function(){return Ci},JZ7:function(){return tn},ABi:function(){return Oe},ogC:function(){return Ei},_O2:function(){return f},P0C:function(){return ji},Uo5:function(){return zi},Two:function(){return Pr},tYQ:function(){return Si},tVn:function(){return h},pHy:function(){return $i},k$y:function(){return lr},yfi:function(){return _i},fl8:function(){return Fi},f9u:function(){return Oi},ZV1:function(){return Di},Lgs:function(){return Ti}});var Ne=(t,e="key",r="value")=>{const o={};return(t||[]).map(n=>o[n[e]]=n[r]),o},A=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),jt=t=>A(t)==="array",Vt=t=>(e,r,o="id",n="children")=>{if(!jt(e))return null;const d=(p,_="")=>{for(let D=0,et=p.length;D<et;D++){const Et=p[D];if(Et[o]===r)return t(p,D,_)||p[D];if(jt(Et[n])){const Jt=d(Et[n],Et[o]);if(Jt)return Jt}}};return d(e),e},N=(t,e,r,o="id",n="children")=>Vt((d,p)=>d.splice(p,0,r))(t,e,o,n),B=(t,e,r,o,n="id",d="children")=>Vt((p,_)=>{const D=p[_];D.children?D.children.splice(o,0,r):D.children=[r]})(t,e,n,d),H=t=>A(t).indexOf("element")>-1,J=(t,e="")=>{if(!H(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" "),n=[...new Set([...r,...o])];t.className=n.join(" ")},vt=(t,e=new Date)=>{const r=new Date(e);return r.setDate(r.getDate()+t),r},Ft=(t,e=new Date)=>{const r=new Date(e);return r.setHours(r.getHours()+t),r},lt=(t,e=new Date)=>{const r=new Date(e);return r.setMonth(r.getMonth()+t),r},Mt=(t,e,r,o="id",n="children")=>Vt((d,p)=>{const _=d[p];return _[n]=[..._[n]||[],...r],_})(t,e,o,n),k=()=>![typeof window,typeof document].includes("undefined"),Wt=t=>{if(k())return new Promise((e,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===t))e();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${t}'`)),o.onload=e,o.src=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},ae=(t,e)=>{if(k())return e?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===e))r();else{const n=document.createElement("style");n.onerror=d=>o(new Error(`Failed to load '${e}' style`)),n.onload=r,n.innerHTML=t,n.setAttribute("huxy-css-hash",e),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===t))r();else{const n=document.createElement("link");n.onerror=d=>o(new Error(`Failed to load '${t}'`)),n.onload=r,n.href=t,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},ot=(t,e=new Date)=>{const r=new Date(e);return r.setFullYear(r.getFullYear()+t),r},z=(t=[],e="name")=>{const r={};return t.map(({[e]:o,value:n})=>r[o]=n),r},E=t=>A(t)==="object";const F=(t={})=>{let e="";return Object.keys(t).map(r=>{const o=t[r];e=e&&`${e}, `,E(o)?e+=`${r}=${F(o)}`:Array.isArray(o)?e+=`${r}=${C(o)}`:e+=`${r}=${o}`}),`{${e}}`};var O=F;const $=(t=[])=>{let e="";return t.map(r=>{e=e&&`${e}, `,E(r)?e+=O(r):Array.isArray(r)?e+=$(r):e+=`${r}`}),`[${e}]`};var C=$,xt=t=>(e,r="id",o="children",n=-1)=>{if(!jt(e))return e;const d={},p=e.map(_=>_[r]);return[...e].map(_=>{const D={..._},{[r]:et}=D;if(et!=null){let{parentId:Et}=D;Et==null&&(Et=t?.(D)??n,D.parentId=Et),d[et]||(d[et]=[]),D[o]=d[et],d[Et]||(d[Et]=[]),d[n]||(d[n]=[]),p.includes(Et)?d[Et].push(D):d[n].push(D)}}),d[n]},Ut=(t,e="id",r="children",o=-1)=>xt(n=>n[e].match(/\S+(?=-\S+)/)?.[0]||o)(t,e,r,o),Xt=(t,e="path",r="children",o=null)=>xt(n=>{const d=n[e],p=d.match(/.*\/[^:/]+\/:[^/]+/);return p?p[0].match(/(.*)\/:+/)?.[1]??o:d.match(/(.*)\/+/)?.[1]??o})(t,e,r,o),qt=()=>k()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),ee=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),he=t=>ee(t,"current"),Me=(t=0,e)=>{k()&&(e=he(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},tr=`.huxy-totop-bar {
  --size: 36px;
  --color: #fff;
  --bgColor: #666;
  --hoverBgColor: #40a9ff;
  width: var(--size);
  height: var(--size);
  border-radius: 4px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  background-color: var(--bgColor);
  color: var(--color);
  z-index: 99999;
  cursor: pointer;
  overflow: hidden;
}
.huxy-totop-bar i,
.huxy-totop-bar span {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: var(--size);
  height: var(--size);
  text-align: center;
}
.huxy-totop-bar i {
  font-size: 22px;
  line-height: var(--size);
  transform: translateY(0);
  transition: transform 0.2s;

  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.huxy-totop-bar i:before {
  content: "\\2191";
}
.huxy-totop-bar span {
  font-size: 13px;
  font-weight: 500;
  line-height: 1.1;
  padding: 4px 0;
  background-color: var(--hoverBgColor);
  transform: translateY(100%);
  transition: transform 0.2s;
}
.huxy-totop-bar:hover i {
  transform: translateY(-100%);
}
.huxy-totop-bar:hover span {
  transform: translateY(0);
}`;const hr=()=>document.getElementsByClassName("huxy-totop-bar")[0],fr=t=>{if(hr())return;const e=document.createElement("div");e.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=t,e.appendChild(r),e.appendChild(o),document.body.appendChild(e),e.addEventListener("click",()=>Me(),!1),e},er=()=>{const t=hr();t&&document.body.removeChild(t)};var ce=(t=0,e="\u8FD4\u56DE\u9876\u90E8")=>{if(!k())return;ae(tr,"huxy-backtop-css");const r=()=>{qt()>t?fr(e):er()};return(()=>(document.addEventListener("scroll",r,!1),()=>{er(),document.removeEventListener("scroll",r,!1)}))()},Ae=(t=0,e=2)=>parseInt(String(t),e),or=(t=0,e=2)=>Number(t).toString(e),oe=(t=0,e=2,r=16)=>or(Ae(t,e),r),nr=t=>{if(!E(t))return"";const e=[];return Object.keys(t).map((r,o)=>{const n=o>0?"&":"?";e.push(`${n}${r}=${t[r]}`)}),e.join("")},xr=t=>{if(!E(t))return{};const e=new FormData;return Object.keys(t).map(r=>{t[r]!=null&&e.append(r,t[r])}),e},Ie=t=>A(t)==="function",ir=t=>A(t)==="promise"||E(t)&&Ie(t.then),yr=(t,e=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!ir(t))return{};let o=null,n=null;return{promiseFn:new Promise((d,p)=>{o=(_="canceled")=>{clearTimeout(n),d({canceled:!0,errMsg:_})},e&&(e=typeof e!="number"?12e4:e,n=setTimeout(()=>o(r),e)),t.then(_=>{clearTimeout(n),d({result:_,errMsg:!1})}).catch(_=>{clearTimeout(n),p(_)})}),cancelFn:o}};const $e=[{type:"data",headers:{"Content-Type":"application/json"},body:t=>JSON.stringify(t)},{type:"formData",body:t=>xr(t)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t=>nr(t).slice(1)}],_e=(t,e)=>{const r=["data","form","formData","params"].includes(e),o=Object.keys(t).filter(n=>t[n]);if(o.length===1){const n=o[0],d=r?e:n;return d==="params"?{query:t[n]}:{result:t[n],type:d}}else if(o.length>1){const n=o.filter(p=>p!=="params").slice(-1)[0],d=r?e:n;return d==="params"?{query:t.params||t[n]}:{query:t.params,result:t[n],type:d}}};var gr=(t,e)=>r=>(o,n={})=>{const{headers:d,dataType:p,data:_,formData:D,form:et,params:Et,...Jt}=n,Qt={data:_,formData:D,form:et,params:Et};let Lr;const{query:dr,result:en,type:oa}=_e(Qt,p)||{};if(!Jt.body&&en){const io=$e.find(ao=>ao.type===oa);Lr=io.headers,Jt.body=io.body(en)}dr&&(o=`${o}${nr(dr)}`);const{promiseFn:na}=yr(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...Lr,...d},...Jt}),e);return na.then(({result:io,errMsg:ao})=>t(ao?{status:408,statusText:ao}:io))},Be=t=>{const e=[],r=o=>{if(o&&typeof o=="object"){if(e.indexOf(o)!==-1)return!0;e.push(o);let n=!1;for(let d in o)ee(o,d)&&r(o[d])&&(o[d]="cyclic",n=!0);return n}return!1};return r(t)&&t};const Ze=(t,e)=>{const r=A(t),o=A(e);if(r!==o)return!1;if(t==null||e==null)return t===e;if(["object","array"].indexOf(r)===-1)return t.toString()===e.toString();if(Object.keys(t).length!==Object.keys(e).length)return!1;if(Be(t)&&Be(e))return Ze(t,e);for(let n in e)if(ee(t,n)!==ee(e,n)||!Ze(t[n],e[n]))return!1;return!0};var br=Ze,we=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.element",s=t=>t?.__v_isVNode;const b=t=>{if(!jt(t)&&!E(t))return t;const e=jt(t)?[]:{};for(const r in t)if(ee(t,r)){const o=t[r];e[r]=we(o)||s(o)||typeof o!="object"?o:o!==t?b(o):"cyclic"}else Object.setPrototypeOf(e,{[r]:t[r]});return e};var y=b,T=(t=100)=>{const e=[];let r=-1;const o=d=>{const p=e.length,_=y(d);return br(_,e[p-1]?.data)?{index:r,length:p,data:e[r]?.data}:(e.push({data:_}),e.length>t&&e.shift(),r=e.length-1,{index:r,length:r+1,data:e[r].data})},n=(d=0)=>{const p=e.length;return r+=d,r=r<0?0:r>p-1?p-1:r,{index:r,length:p,data:y(e[r]?.data)}};return{record:o,cursor:n,jump:d=>(r=d,{index:r,length:e.length,data:y(e[r]?.data)}),undo:()=>n(-1),redo:()=>n(1),getList:()=>y(e),clean:()=>{e.length=0,r=-1}}},yt=(t,e,r)=>{if(!jt(t))return t;const o=t[e],n=t[r];return t.splice(e,1,n),t.splice(r,1,o),t},at=(t=[],e="name")=>{const r={};return t.map(o=>{r[o[e]]?r[o[e]].push(o):r[o[e]]=[o]}),r},me=(t,e,r=".")=>{const o=(D,et)=>D.split(et),n=o(t,r),d=o(e,r),p=n.length;let _=0;for(let D=0;D<p;D++)if(n[D]<d[D]){_=p-D;break}return _},He=(...t)=>(...e)=>{const[...r]=t,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...e)},ar=t=>{if(!k())return;const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),e.select(),e.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(e)},Fe=t=>(e,r)=>{const{getState:o,setState:n,subscribe:d,unsubscribe:p,clean:_}=t;return r!==void 0&&n({[e]:r},!0),{getState:()=>o(e),setState:(D,et)=>n({[e]:D},et),subscribe:D=>d(e,D),unsubscribe:()=>p(e),clean:()=>_(e)}},Ce=t=>({type:"TEXT_ELEMENT",props:{nodeValue:t}}),Ue=(t,e,...r)=>({type:t,props:{...e,children:r.map(o=>typeof o=="object"?o:Ce(o))}});const We=t=>t.startsWith("on"),no=t=>t!=="children"&&!We(t),_r=(t,e)=>r=>t[r]!==e[r],Zr=(t,e)=>r=>!(r in e),Hr=t=>{const e=Object.keys(t);return{eventProps:e.filter(We),propertyProps:e.filter(no)}};var h=(t,e,r)=>{const{eventProps:o,propertyProps:n}=Hr(e),{eventProps:d,propertyProps:p}=Hr(r);o.filter(Zr(e,r)).map(_=>{const D=_.toLowerCase().slice(2);t.removeEventListener(D,e[_])}),n.filter(Zr(e,r)).map(_=>t[_]=""),p.filter(_r(e,r)).map(_=>t[_]=r[_]),d.filter(_r(e,r)).map(_=>{const D=_.toLowerCase().slice(2);t.addEventListener(D,r[_])})},g=t=>{if(!k())return;const e=t.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(t.type);return h(e,{},t.props),e},Y=()=>{const t={};return{on:(e,r)=>{t[e]||(t[e]=[]),t[e].indexOf(r)===-1&&t[e].push(r)},emit:(e,r)=>{t[e]&&t[e].map(o=>o(r))},off:(e,r=null)=>{if(t[e]){if(typeof r!="function")return delete t[e];const o=t[e].indexOf(r);o>-1&&(t[e].splice(o,1),t[e].length||delete t[e])}}}};const Z=t=>{const e={};for(let r in t)ee(t,r)||(e[r]=t[r]);return e};var R=(t,e)=>{if(!E(t))return e;if(!E(e))return t;const r={...Z(t),...Z(e)},o={...t,...e};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},gt=()=>{const{on:t,emit:e,off:r}=Y(),o={};return{getState:n=>y(o[n]),setState:(n,d=!1)=>{if(typeof n=="function"&&(n=n(y(o))),!E(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const p=y(n);Object.keys(p).map(_=>{const D=o[_],et=p[_],Et=E(et)&&E(D)?R(D,et):et;!d&&e(_,Et),o[_]=Et})},subscribe:(n,d)=>(t(n,d),()=>r(n,d)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(d=>o[d]=void 0):Object.keys(o).map(d=>o[d]=void 0)}}},Ot=(t=()=>{},e=t.length)=>{const r=(...o)=>o.length>=e?t(...o):(...n)=>r(...o,...n);return r},zt=(t,e="-")=>t.split(e).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),ct=(t,e)=>{const r=t.split(","),o=r[0].match(/:(.*?);/)[1],n=atob(r[1]);let d=n.length;const p=new Uint8Array(d);for(;d--;)p[d]=n.charCodeAt(d);return new File([p],e,{type:o})},Nt=(t=()=>{},e=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>t.apply(this,o),e)}},ne=(t,e,r="id",o="children")=>Vt((n,d)=>n.splice(d,1))(t,e,r,o),ye=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Oe=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():new Date().getTime(),lr=()=>{let t=Oe();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(e==="x"?r:r&3|8).toString(16)})},Re=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),Gr=async(t,e,r)=>{if(!k())return;r=r||lr();let o=e?`${r}.${e}`:r;if(typeof t=="string"){t=Re(t)?decodeURIComponent(t):t;const n=await fetch(t,{mode:"no-cors"}),d=n.headers.get("Content-Disposition");o=d&&decodeURIComponent(d.split(";")[1].split("=")[1])||o,n.blob().then(p=>{const _=window.URL.createObjectURL(p),D=document.createElement("a");D.href=_,D.download=o,D.style.display="none",document.body.appendChild(D),D.click(),D.parentNode.removeChild(D),window.URL.revokeObjectURL(_)})}else{const n=new Blob([t]),d=window.URL.createObjectURL(n),p=document.createElement("a");p.href=d,p.download=o,p.style.display="none",document.body.appendChild(p),p.click(),p.parentNode.removeChild(p),window.URL.revokeObjectURL(d)}},se=(t=null)=>k()?H(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},ge=t=>{if(k())return t=he(t)?t.current:t??document.body,t.getBoundingClientRect?.()},Dr=t=>{if(!k())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},je=(t,e={},r=!1)=>{if(H(t)){if(r){let o="";Object.keys(e).map(n=>{o+=`${n}: ${e[n]};`}),t.style=o;return}Object.keys(e).map(o=>t.style.setProperty(o,e[o]))}};const Ke=(t=350)=>new Promise(e=>setTimeout(e,t)),Jr=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);};var ze=Ke,Tr=async(t,e=15)=>{if(!k())return;if(typeof t=="string"&&(t=Dr(t)),t=he(t)?t.current:t,!H(t))return{};const r=t.cloneNode(!0);je(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await ze(e);const o=ge(r);return t.parentNode.removeChild(r),o};const be=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,so=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Nr=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";be.test(r)?t.setAttribute("class",r.replace(so,e)):t.setAttribute("class",`${r} ${e}`)},cr=async(t,e,r)=>{const{left:o,right:n,top:d,bottom:p}=ge(t),{width:_,height:D}=se(),{width:et,height:Et}=await Tr(e);if(n<0||p<0||o>_||d>D)return{};if(r==="vertical"){const Jt={left:o+"px",top:p+10+"px",right:"auto",bottom:"auto"};let Qt="lt";o+et>_&&(Jt.left=n-et+"px",Qt="rt"),p+10+Et>D&&(Jt.top=d-10-Et+"px",Qt=Qt==="lt"?"lb":"rb"),je(e,Jt),Nr(e,Qt)}else{const Jt={left:n+10+"px",top:d+"px",right:"auto",bottom:"auto"};let Qt="tl";n+10+et>_&&(Jt.left=o-10-et+"px",Qt="tr"),d+Et>D&&(Jt.top=p-Et+"px",Qt=Qt==="tl"?"bl":"br"),je(e,Jt),Nr(e,Qt)}};var So=(t,e,r="horizontal")=>{const o=Nt(cr),n=()=>o(t,e,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const d=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),je(e,{left:"",top:"",right:"",bottom:""})};return cr(t,e,r),d},Xr=(t,e,r,o="id",n="children")=>Vt((d,p)=>d[p]={...d[p],...r})(t,e,o,n),$o=t=>t.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e);const Ir=Y();var uo=t=>{const{on:e,emit:r,off:o}=Ir;return{on:n=>e(t,n),emit:n=>r(t,n),off:n=>o(t,n)}};const ho=120*1e3,Qr=t=>t.json().then(e=>e);var fo=(t=Qr,e=ho)=>(r="get")=>gr(t)((r||"get").toUpperCase()),qr=t=>jt(t)&&!!t.length,to=(t,e,r=[],o=!1,n=null)=>qr(t)?e?(r=typeof r=="string"?r.split(","):r,t.filter(d=>(r=r.length>0?r:Object.keys(d),r.filter(p=>{const _=d[p];if(_==null)return!1;if(o)return _===e;const D=new RegExp(e,"gi"),et=_.toString().match(D);return et&&n&&(d[p]=n(_.toString().replace(D,`<span style="background-color:yellow">${et[0]}</span>`),{display:"inline-block"})),et}).length))):t:[],Pr=(t,e="id")=>{if(!qr(t))return t;const r=[],o=[];return t.map(n=>{const d=E(n)?n[e]:n;o.includes(d)||(o.push(d),r.push(n))}),r};const kr=t=>(e,r="children")=>{if(!Array.isArray(e))return e;const o=y(e),n=d=>{const p=[];return d.map(_=>{if(qr(_[r])){const D=n(_[r])||[];_[r]=D,D.length>0&&p.push(_)}}),t(d,p)};return n(o)};var To=(t,e,r,o="name",n="id",d="children",p=!1)=>kr((_,D)=>Pr([...to(_,e,o,p,r),...D],n))(t,d),eo=(t,e)=>{const r=[],o=t.children??[];for(let n=0,d=o.length;n<d;n++){const p=o[n];p.className.indexOf(e)>-1&&r.push(p)}return r.length===0?null:r.length===1?r[0]:r},mo=(t="")=>t.match(/\d+/g)?.sort((e,r)=>r-e)[0],xo=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),go=(t,e=1024)=>{const r=t/e;if(r<e)return`${r.toFixed(3)-0} KB`;const o=r/e;return o<e?`${o.toFixed(3)-0} M`:`${(o/e).toFixed(3)-0} G`},Cr=(t="")=>(t??"").replaceAll("//","/"),Po=t=>t?t.charAt(t.length-1)==="/"?t.slice(0,-1):t:"",bo=(t,e=1)=>{const r=t.width/t.height/e,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return t.width=o},i=(t=0,e=["s","m","h","d"])=>{if(t=~~t,t<60)return`${t}${e[0]}`;const r=~~(t/60);if(r<60)return`${r}${e[1]}${t%60}${e[0]}`;const o=~~(t/3600),n=t%3600,d=~~(n/60);return o<24?`${o}${e[2]}${d}${e[1]}${n%60}${e[0]}`:`${(o/24).toFixed(2)}${e[3]}`},f=t=>(e,r="children")=>{if(!jt(e))return e;const o=(n,d=[])=>{n.map((p,_)=>{const D=jt(p[r]);if(p=t(p,d,_,D)||p,D){const{[r]:et,...Et}=p;o(et,[...d,{...Et,"@@index":_}])}})};return o(e),e},j=(t,e="children")=>{const r=[];return f(o=>{const{[e]:n,...d}=o;r.push(d)})(t,e),r},W=t=>typeof t=="number"?t.toLocaleString("en-US"):"";const G=t=>t<10?"0"+t:t;var it=(t=new Date)=>{const e=new Date(t),r=e.getFullYear(),o=e.getDay(),n=G(e.getMonth()+1),d=G(e.getDate()),p=G(e.getHours()),_=G(e.getMinutes()),D=G(e.getSeconds());return[r,n,d,p,_,D,o]},ht=(t,e=new Date)=>{t=it(t),e=it(e);const r=e.y-t.y,o=e.m-t.m,n=e.d-t.d,d=e.h-t.h,p=e.M-t.M,_=new Date(e.y,e.m,0).getDate(),D=(et,Et,Jt,Qt,Lr)=>{const dr="\u524D";return Et<0&&(et-=1,Et+=Jt),et===0?Et+Lr+dr:Et===0?et+Qt+dr:et+Qt+Et+Lr+dr};return r>0?D(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?D(o,n,_,"\u4E2A\u6708","\u5929"):n>0?D(n,d,24,"\u5929","\u5C0F\u65F6"):d>0?D(d,p,60,"\u5C0F\u65F6","\u5206\u949F"):p>0?p+"\u5206\u949F\u524D":"\u521A\u521A"};const mt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Gt=(t,e,r="-")=>t.replace(new RegExp(r,"g"),e);var At=(t=new Date,e=["-","-"," ",":",":",""],r=mt)=>{const o=it(t);let n="";return e.map((d,p)=>n+=(p===6?r[o[p]]:o[p]??"")+d),n};const Dt=["","webkit","moz","ms"],Yt=t=>Dt.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),ie=t=>Dt.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),Ge=t=>Dt.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),Je=Dt.map(t=>`${t}fullscreenchange`);var Te=t=>{if(!k())return;t=he(t)?t.current:t??document.body;const e=Yt(document),r=ie(t),o=Ge(document);document[e]?document[o]?.():t[r]?.()};const Er=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var Ye=()=>{if(!k())return;const t=window.navigator.userAgent.toLowerCase(),e=Er.find(r=>t.match(r.reg))??{};return{type:e.name,version:t.match(e.reg)[1]}};const de=60*1e3,Ve=60*de,Br=24*Ve;var vo=(t,e=new Date)=>{let r=new Date(t)-e;const o=~~(r/Br);r-=Br*o;const n=~~(r/Ve);r-=Ve*n;const d=~~(r/de);r-=de*d;const p=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${d}\u5206${p}\u79D2`};const Ro=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],an=t=>{if(!Array.isArray(t))return Ro;const e=[...Ro];return t.map(r=>{const o=e.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?e[o]=r:e.push(r)}),e};var Yo=t=>{const e=an(t).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return Dr(e.join(""))},wo=(t=new Date)=>{const e=it(t);return new Date(e[0],e[1],0).getDate()},Vo=(t=null)=>k()?H(t)?{left:t.scrollLeft,top:t.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0};const ln=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:t=>({type:"ios",model:t[1],version:t[3]?.replaceAll("_",".")})},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:t=>({type:"macOS",version:t[1]?t[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:t=>({type:"WindowsPhone",version:t[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:t=>({type:"Windows",version:t[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:t=>({type:"Android",version:t[1]?t[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:t=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:t=>({type:"Linux"})}];var sn=()=>{if(!k())return;const t=window.navigator.userAgent.toLowerCase(),e=ln.find(r=>t.match(r.reg));return e?e.format(t.match(e.reg)):{}},cn=(t="")=>{const[e,r]=t.split("?");if(r){const o={};return r.split("&").map(n=>{const[d,p]=n.split("=");o[d]=p}),{path:e,params:o}}return{path:e}},ko=()=>k()&&(window.ontouchstart||navigator.maxTouchPoints),Mo=t=>{const{left:e,top:r}=Vo();return{touchX:ko()?t?.touches?.[0]?.pageX:t?.pageX||t?.clientX+e,touchY:ko()?t?.touches?.[0]?.pageY:t?.pageY||t?.clientY+r}},un=(t,e)=>{const{touchX:r,touchY:o}=Mo(t),{x:n,y:d}=e?.getBoundingClientRect?.()??{};return{x:r-(n??0),y:o-(d??0)}},dn=(t,e,r="id",o="children")=>{if(!jt(t))return null;const n=d=>{for(let p=0,_=d.length;p<_;p++){const D=d[p];if(D[r]===e)return[D];if(jt(D[o])){const et=n(D[o]);if(et)return[D].concat(et)}}};return n(t)},hn=(t,e,r)=>{if(!k())return;r=he(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&je(o,e),o.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const fn=(t={},e)=>{e=pn(e);const r=(o,n)=>{if(!n?.[0])return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(t,e)},pn=(t="")=>t.replace(/\[['"]?(.*?)['"]?\]/g,".$1")?.split(".");var mn=fn,Zo=(t,e="")=>H(t)&&t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)")),xn=(t="")=>{if(t[0]!=="#")return t;t=t.replace("#","");const e=t.length;e===3?t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`:e===4&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`);const r=parseInt(t.slice(0,2),16)||0,o=parseInt(t.slice(2,4),16)||0,n=parseInt(t.slice(4,6),16)||0;if(t.length===6)return`rgb(${r},${o},${n})`;const d=parseInt(t.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${d})`},yn=t=>{if(!k())return;const e=document.createElement("canvas"),r=e.getContext("2d"),{width:o,height:n}=t;return e.width=o,e.height=n,r.drawImage(t,0,0,o,n),e},gn=t=>{if(typeof t!="string")return!1;const e=/^data:image\/([a-zA-Z0-9]+);base64,.+/i;return t.match(e)},bn=(...t)=>!Number.isNaN(new Date(...t).valueOf()),vn=t=>A(t)==="error",wn=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),kn=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.forward_ref",Cn=t=>A(t)==="regexp",En=t=>E(t)&&Object.keys(t).length,jn=()=>{if(k())return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1},zn=t=>E(t)?O(t):Array.isArray(t)?C(t):t,Ho=t=>new Promise((e,r)=>{const o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>e(o.result)),o.addEventListener("error",n=>r(n))}),Sn=async t=>{if(!Re(t))return t;const e=await(await fetch(t)).blob();return await Ho(e)},$n=t=>new Promise((e,r)=>{const o=new Image;o.src=t,o.crossOrigin="Anonymous",o.complete?e(o):(o.addEventListener("load",()=>e(o)),o.addEventListener("error",n=>r(n)))}),_n=async(t,e,r=2e3)=>{for(;!e?.(t?.());)await ze(r)},Fn=(t,e=["{","}"])=>t?.trim?.().match(new RegExp(`^${e[0]}([\\s\\S]*)${e[1]}$`))?.[1],On=(t=()=>{},e=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),d=r.find(p=>p.key===n);if(!d){const p=t(...o);return r.push({key:n,result:p}),r.length>e&&r.shift(),p}return d.result}};const Uo=(t,e,r="id")=>{if(!jt(t))return e;if(!jt(e))return t;const o={};return[...t,...e].map(n=>{const d=E(n)?n[r]??JSON.stringify(n):n;if(o[d]===void 0)o[d]=n;else{const p=o[d];E(p)&&E(n)?o[d]=Eo(p,n):jt(p)&&jt(n)?o[d]=Uo(p,n):o[d]=n}}),Object.keys(o).map(n=>o[n])};var Co=Uo;const Xo=(t,e)=>{if(!E(t))return e;if(!E(e))return t;for(let r in e)ee(e,r)?E(t[r])&&E(e[r])?t[r]=Xo(t[r],e[r]):jt(t[r])&&jt(e[r])?t[r]=Co(t[r],e[r]):t[r]=e[r]:Object.setPrototypeOf(t,{[r]:e[r]});return t};var Eo=Xo,Dn=(t,...e)=>{const r=jt(t)?Co:Eo;return e.map(o=>t=r(t,o)),t},Tn=(t,e)=>{const r=t?.split(" ")??[],o=e?.split(" ")??[];return[...new Set([...r,...o])].filter(Boolean).join(" ")},jo=(t,e="")=>{if(!H(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" ").filter(n=>!r.includes(n));t.className=o.join(" ")},Nn=`@keyframes huxy-message-animate-in {
  0% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}
@keyframes huxy-message-animate-out {
  0% {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
}
.huxy-message {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  overflow: auto;
  z-index: 999999;
  pointer-events: none;
}

.message-content {
  position: relative;
  display: flex;
  align-items: center;
  background: #ffffff;
  color: #333333;
  border-radius: 4px;
  min-width: 100px;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  margin-top: 24px;
  padding: 8px 12px;
  opacity: 0;
  transform: translate3d(0, -100%, 0);
  animation: huxy-message-animate-out 0.25s forwards;
}

.message-content.open {
  animation: huxy-message-animate-in 0.25s forwards;
}

.message-content i {
  /* font-size: 1.8rem; */
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  /* line-height: 1; */
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 8px;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  text-align: center;
  color: #fff;
  flex-shrink: 0;
}
.message-content.success i {
  background: #73d13d;
}
.message-content.success i:before {
  content: "\\2713";
}
.message-content.error i {
  background: #ff4d4f;
}
.message-content.error i:before {
  content: "\\00D7";
}
.message-content.warn i {
  background: #ffa940;
}
.message-content.warn i:before {
  content: "\\267A";
}
.message-content.info i {
  background: #40a9ff;
}
.message-content.info i:before {
  content: "\\2690";
}`;const An=()=>document.getElementsByClassName("huxy-message")[0],In=()=>{const t=document.createElement("div"),e=document.createElement("div");return e.setAttribute("class","huxy-message"),t.appendChild(e),document.body.appendChild(t),e},Pn=(t,e)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${e}`);const o=document.createElement("span");o.innerText=t;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},oo=(t,e=3250,r,o)=>{if(!k())return;ae(Nn,"huxy-message-css");let n=An();n||(n=In());const d=Pn(t,o);n.appendChild(d),setTimeout(()=>{n.removeChild(d),r?.()},e),setTimeout(()=>{jo(d,"open")},e-250)};var Bn={success:(t,e,r)=>oo(t,e,r,"success"),warn:(t,e,r)=>oo(t,e,r,"warn"),warning:(t,e,r)=>oo(t,e,r,"warn"),error:(t,e,r)=>oo(t,e,r,"error"),info:(t,e,r)=>oo(t,e,r,"info")},Ln=(t=new Date)=>{const e=new Date(t),r=e.getDate();return[vt(1-r),vt(wo(e)-r)]},Wn=(t,e,r,o,n="id",d="children")=>{let p={};return Vt((_,D)=>(p=_[D],_.splice(D,1),!0))(t,e,n,d),B(t,r,p,o,n,d),t},Rn=(t={},e="name")=>Object.keys(t).map(r=>({[e]:r,value:t[r]})),Yn=(t={},e=[])=>{e=typeof e=="string"?e.split(","):e;const r={},o=[];return Object.keys(t).map(n=>e.includes(n)?o.push({key:n,value:t[n]}):r[n]=t[n]),{newObj:r,newQuery:o}},Vn=(t=()=>{})=>{let e=!1;return(...r)=>{if(!e)return e=!0,t(...r)}},qo=(t="",e=0,r="0")=>{const o=t.length;return o>=e?t:`${Array(e-o+1).join(r)}${t}`};const Ko="<([^>]+)>([0-9a-zA-Z]*)<\\/\\1>",Go="<([^>]+)><!\\[CDATA\\[([\\s\\S]*)\\]\\]><\\/\\1>",Mn=t=>{const e={},r={},o=t.match(new RegExp(Ko,"g")).map(d=>d.match(new RegExp(Ko))).filter(Boolean),n=t.match(new RegExp(Go,"g")).map(d=>d.match(new RegExp(Go))).filter(Boolean);return o.map(d=>{const[,p,_]=d;e[p]=_,r[p]="base"}),n.map(d=>{const[,p,_]=d;e[p]=(_??"").trim(),r[p]="data"}),{obj:e,types:r}},Zn=(t,e,r)=>`<${t}>${e==="data"?`<![CDATA[${r}]]>`:r}</${t}>
`;var Hn={xml2Obj:Mn,obj2Xml:(t,e)=>{let r="";return Object.keys(t).map(o=>{r+=Zn(o,e[o],t[o])}),`<xml>
    ${r}
  </xml>`}},Un=(t,e)=>{if(t==null||typeof t!="object")return{};if(e=typeof e=="string"?e.split(","):e,!jt(e))return t;const r={};return e.map(o=>{o in t&&(r[o]=t[o])}),r},Xn=(t=()=>{})=>(...e)=>new Promise((r,o)=>t(...e,(n,d)=>n?o(n):r(d))),qn=()=>"#"+qo((~~(Math.random()*(1<<24))).toString(16),6),zo=(t=0,e=0,r=!0)=>(t<e&&(t=[e,e=t][0]),r?~~(Math.random()*(t-e+1))+e:Math.random()*(t-e)+e),Kn=(t=[])=>t[zo(t.length-1)],Gn=(t,e=100)=>{const r=[];return[...new Array(t)].map((o,n)=>{n===t-1?r[n]=e:(r[n]=zo(1,e-1),e-=r[n])}),r},Jn=(t=8,e=36)=>Math.random().toString(36).slice(2,t+2),Qn=()=>Math.random()>.5;const ti=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r};var ei=(t,e=60)=>{if(!k())return;t=he(t)?t.current:t??document.body;let r=eo(t,"resize-sensor"),o=[];const n=Nt(()=>o.map(D=>D(t)),e),d=D=>{eo(t,"resize-sensor")||(r=ti(t,n)),o.indexOf(D)===-1&&o.push(D)},p=D=>{const et=o.indexOf(D);et!==-1&&o.splice(et,1),o.length===0&&r&&_()},_=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:t,bind:d,unbind:p,destroy:_}};const Jo=(t=0,e=0,r=0,o=1)=>{t-=0,e-=0,r-=0,o-=0;const n=`#${((1<<24)+(t<<16)+(e<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var ri=(t=0,e=0,r=0,o=1)=>{if(t.includes("rgb")){const n=t.match(/rgba?\((.+)\)/);if(n){const d=n[1]?.split(",").map(p=>p.trim());return Jo(...d)}return t}return Jo(t,e,r,o)},oi=(t,e="px")=>`${t}`.replace(e,"")-0;const Qo=()=>typeof performance?.now=="function"?performance.now():new Date().getTime(),ni=t=>{if(typeof setImmediate=="function")return()=>setImmediate(t);if(typeof MessageChannel=="function"){const{port1:e,port2:r}=new MessageChannel;return e.onmessage=t,()=>r.postMessage(null)}return()=>setTimeout(t,0)},ii=()=>{const t=[],e=p=>{t.push(p),d(p)},r=()=>t[0],o=()=>t.shift(),n=p=>p.startTime=Qo(),d=p=>{n(p),t.sort((_,D)=>_.startTime-D.startTime)};return{hub:t,push:e,peek:r,shift:o,update:d}};var ai=(t=5)=>{const{hub:e,push:r,peek:o,shift:n,update:d}=ii(),p=ni(()=>{D()&&p()}),_=et=>Qo()-et.startTime>t,D=()=>{let et=o();for(;et;){if(_(et)){d(et);break}const{task:Et}=et;typeof Et=="function"?(et.task=null,Et()):n(),et=o()}return et};return(et=()=>{})=>{r({task:et}),e.length<2&&p()}},li=()=>k()&&document.documentElement.scrollHeight-qt()===se().height,si=t=>{k()&&(t=he(t)?t.current:t??window,t.scrollIntoView?.({behavior:"smooth",block:"center"}))},ci={get:t=>{let e=null;try{e=JSON.parse(sessionStorage.getItem(t))}catch{e=sessionStorage.getItem(t)}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),sessionStorage.setItem(t,e)},rm:t=>{sessionStorage.removeItem(t)},clear:()=>{sessionStorage.clear()}},ui=t=>{const e=Yo(t);k()&&document.head.appendChild(...e)},di=(t,e=null,r=!1)=>[...t||[]].sort((o,n)=>{const d=e?o[e]:o,p=e?n[e]:n;return!isNaN(Number(d))&&!isNaN(Number(d))?r?p-d:d-p:typeof d=="string"&&typeof p=="string"?r?p.localeCompare(d):d.localeCompare(p):typeof d=="string"&&typeof p=="number"?r?-1:1:typeof d=="number"||typeof d=="string"?r?1:-1:r?-1:1}),hi=t=>{if(!E(t))return{};const e={};return Object.keys(t).sort().map(r=>{e[r]=t[r]}),e},fi={get:t=>{let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch{}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),localStorage.setItem(t,e)},rm:t=>{localStorage.removeItem(t)},clear:()=>{localStorage.clear()}};const pi=gt();var mi=Fe(pi),xi=(t,e=!1)=>(t=e?t:`return ${t};`,Function(t)()),yi=()=>k()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),gi=(t,...e)=>{const r=[];return t.map((o,n)=>{r.push(o,e[n]??"")}),r.join("")},bi=(t=()=>{},e=60)=>{let r=null;return function(...o){r||(t.apply(this,o),r=setTimeout(()=>r=null,e))}};const vi=t=>[12,wo(t),24,60,60],wi=(t=[],e=[],r=[])=>{let o=!1;const n=[];return e.map((d,p)=>{const _=(o?d-1:d)-t[p];_<0?(n[p]=_+(r[p]||10),o=!0):(n[p]=_,o=!1)}),n.reverse()};var tn=(t,e=new Date)=>{new Date(t)-new Date(e)>0&&(t=[e,e=t][0]);const r=vi(e).reverse(),o=it(t).slice(0,-1).reverse(),n=it(e).slice(0,-1).reverse();return wi(o,n,r)};const ki=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Ci=(t,e=new Date)=>{const r=tn(t,e),o=r.findIndex(n=>n>0);return r.map((n,d)=>`${n||0}${ki[d]}`).slice(o).join("")},Ei=(t,e)=>{H(t)&&(Zo(t,e)?jo(t,e):J(t,e))},ji=t=>(e,r="children")=>{if(!jt(e))return e;const o=n=>(n.map(d=>{jt(d[r])&&(d[r]=o(d[r]))}),t(n));return o(e)},zi=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[e]||e),Si=(t,e="fuckId",r="children")=>f((o,n,d)=>{o[e]=[...n.map(p=>p["@@index"]),d].join("-")})(t,r),$i=(t,e,r,o="children")=>Vt((n,d)=>{const p=n[d];return p[o]=[...p[o]||[],...r],!0})(t,e),_i=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Fi=t=>k()?(Je.map(e=>document.addEventListener(e,t,!1)),()=>Je.map(e=>document.removeEventListener(e,t,!1))):void 0,Oi=({container:t,width:e="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:d="20px microsoft yahei",fillStyle:p="rgba(202,202,202,0.4)",content:_="\u8BF7\u52FF\u5916\u4F20",rotate:D="-30",zIndex:et=1e3}={})=>{if(!k())return;t=he(t)?t.current:t??document.body;const Et=t.firstChild;Et?.className==="watermark-canvas"&&t.removeChild(Et);const Jt=document.createElement("canvas");Jt.setAttribute("width",e),Jt.setAttribute("height",r);const Qt=Jt.getContext("2d");Qt.textAlign=o,Qt.textBaseline=n,Qt.font=d,Qt.fillStyle=p,Qt.rotate(Math.PI/180*D),Qt.fillText(_,parseFloat(e)/2,parseFloat(r)/2);const Lr=Jt.toDataURL(),dr=document.createElement("div");dr.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${et};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${Lr}')`),t.style.position="relative",t.insertBefore(dr,t.firstChild)},Di=(t=new Date)=>{const e=new Date(t).getDay();return[vt(1-e),vt(7-e)]},Ti=t=>{if(!ir(t))return{};let e="pending",r;const o=t.then(n=>{e="success",r=n}).catch(n=>{e="error",r=n});return{read:()=>{if(e==="pending")throw o;if(e==="error")throw r;if(e==="success")return r}}},Sl=u.NzM,$l=u.wBC,_l=u.O39,Fl=u.cnu,Ol=u.E4D,Dl=u.TRp,Tl=u.zI1,Nl=u.Ufj,Al=u.GxO,Il=u.cu2,Pl=u.BcS,Bl=u.lPd,Ll=u.dC1,Wl=u.$L2,Rl=u.Vji,Yl=u.YxP,Vl=u.UhT,Ni=u.JaC,Ml=u.o4B,Zl=u.Hlr,Ai=u.muM,Hl=u.OiV,Ul=u.KTn,Xl=u.lwL,ql=u.d9v,Kl=u.yCD,Gl=u.qCK,Ii=u.vQq,Pi=u.fHt,Jl=u.azq,Ql=u.dSY,Bi=u.MTn,ts=u.RYO,es=u.WAo,rs=u.GVc,os=u.Emy,ns=u.v9O,is=u.DsO,as=u._lj,ls=u.vO6,ss=u.xDX,cs=u.hf3,us=u.ip7,ds=u.uYe,hs=u.DgJ,fs=u.rae,ps=u.YBu,Li=u._iG,ms=u.hXT,xs=u.gQq,ys=u.D_D,gs=u.$nD,bs=u.dtG,vs=u.Y0R,Wi=u.qg7,ws=u.Xxf,ks=u.tSM,Cs=u.Few,Es=u.xHg,js=u.aoj,zs=u.Dlm,Ri=u.mrB,Ss=u.dKu,$s=u.v1d,Yi=u.afD,_s=u.Lz5,Fs=u.xZX,Os=u.G_1,Ds=u.osI,Vi=u.PTJ,Ts=u.Qfx,Ns=u.bti,As=u.XBv,Mi=u.eyl,Is=u.y35,Ps=u.hKD,Bs=u.BWC,Ls=u.oLi,Zi=u.NA2,Ws=u.S3Y,Rs=u.pvT,Ys=u.m2f,Hi=u.rWO,Vs=u.A$w,Ms=u.kJL,Zs=u.S9U,Hs=u.dYC,Us=u.jUY,Xs=u.J_U,qs=u.kKo,Ks=u.VZO,Gs=u.mf2,Js=u.w1q,Qs=u.Kn2,tc=u.ncl,ec=u.LWC,rc=u.dqb,oc=u.Kjn,nc=u.TaN,ic=u.CBv,ac=u.rTd,lc=u.B73,sc=u.SSA,cc=u.CLv,uc=u.F$z,dc=u.XT_,hc=u.omS,fc=u.poV,pc=u.VXY,mc=u.xsP,xc=u.HPs,yc=u.TSy,gc=u.B5o,bc=u.u1A,vc=u.WAY,wc=u.I8J,Ui=u.ywV,kc=u.bEN,Cc=u.$45,Ec=u.TUk,jc=u.T7B,zc=u.CEd,Sc=u.IHq,$c=u.SkG,_c=u.Smz,Fc=u.nL5,Oc=u.ON,Dc=u.eiS,Tc=u.Frc,Nc=u.z5J,Ac=u.scT,Ic=u.hd2,Pc=u.AnA,Bc=u.kYX,Lc=u.yZP,Wc=u.IVd,Rc=u.SIr,Xi=u.jg2,qi=u.gVz,Yc=u.puc,Vc=u.Azz,Mc=u.X5u,Zc=u.dPh,Hc=u.SMZ,Uc=u.kro,Xc=u.nPi,qc=u.US,Ki=u.A_F,Kc=u._vH,Gc=u.gmH,Jc=u.DYV,Qc=u.qi2,Gi=u.tOc,tu=u.hau,eu=u.FaZ,ru=u.uyF,Ji=u.Vcq,ou=u.XKW,Qi=u.azd,nu=u.P2K,iu=u.XBe,au=u.JZ7,lu=u.ABi,su=u.ogC,ta=u._O2,cu=u.P0C,uu=u.Uo5,du=u.Two,hu=u.tYQ,fu=u.tVn,pu=u.pHy,ea=u.k$y,mu=u.yfi,xu=u.fl8,ra=u.f9u,yu=u.ZV1,gu=u.Lgs}}]);
