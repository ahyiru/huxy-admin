(self.webpackChunk=self.webpackChunk||[]).push([[506],{3323:function(Wr,St){function re(L,it){var c=L.length;L.push(it);t:for(;0<c;){var S=c-1>>>1,x=L[S];if(0<ze(x,it))L[S]=it,L[c]=x,c=S;else break t}}function Bt(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var it=L[0],c=L.pop();if(c!==it){L[0]=c;t:for(var S=0,x=L.length,E=x>>>1;S<E;){var F=2*(S+1)-1,O=L[F],_=F+1,C=L[_];if(0>ze(O,c))_<x&&0>ze(C,O)?(L[S]=C,L[_]=c,S=_):(L[S]=O,L[F]=c,S=F);else if(_<x&&0>ze(C,c))L[S]=C,L[_]=c,S=_;else break t}}return it}function ze(L,it){var c=L.sortIndex-it.sortIndex;return c!==0?c:L.id-it.id}if(typeof performance=="object"&&typeof performance.now=="function"){var De=performance;St.unstable_now=function(){return De.now()}}else{var pt=Date,A=pt.now();St.unstable_now=function(){return pt.now()-A}}var dt=[],jt=[],Yr=1,Vt=null,Ht=3,N=!1,Z=!1,B=!1,V=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,tt=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function J(L){for(var it=Bt(jt);it!==null;){if(it.callback===null)u(jt);else if(it.startTime<=L)u(jt),it.sortIndex=it.expirationTime,re(dt,it);else break;it=Bt(jt)}}function rt(L){if(B=!1,J(L),!Z)if(Bt(dt)!==null)Z=!0,Wt(wt);else{var it=Bt(jt);it!==null&&ae(rt,it.startTime-L)}}function wt(L,it){Z=!1,B&&(B=!1,H(It),It=-1),N=!0;var c=Ht;try{for(J(it),Vt=Bt(dt);Vt!==null&&(!(Vt.expirationTime>it)||L&&!Zt());){var S=Vt.callback;if(typeof S=="function"){Vt.callback=null,Ht=Vt.priorityLevel;var x=S(Vt.expirationTime<=it);it=St.unstable_now(),typeof x=="function"?Vt.callback=x:Vt===Bt(dt)&&u(dt),J(it)}else u(dt);Vt=Bt(dt)}if(Vt!==null)var E=!0;else{var F=Bt(jt);F!==null&&ae(rt,F.startTime-it),E=!1}return E}finally{Vt=null,Ht=c,N=!1}}var kt=!1,Ft=null,It=-1,st=5,$t=-1;function Zt(){return!(St.unstable_now()-$t<st)}function Mt(){if(Ft!==null){var L=St.unstable_now();$t=L;var it=!0;try{it=Ft(!0,L)}finally{it?k():(kt=!1,Ft=null)}}else kt=!1}var k;if(typeof tt=="function")k=function(){tt(Mt)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Rt=Lt.port2;Lt.port1.onmessage=Mt,k=function(){Rt.postMessage(null)}}else k=function(){V(Mt,0)};function Wt(L){Ft=L,kt||(kt=!0,k())}function ae(L,it){It=V(function(){L(St.unstable_now())},it)}St.unstable_IdlePriority=5,St.unstable_ImmediatePriority=1,St.unstable_LowPriority=4,St.unstable_NormalPriority=3,St.unstable_Profiling=null,St.unstable_UserBlockingPriority=2,St.unstable_cancelCallback=function(L){L.callback=null},St.unstable_continueExecution=function(){Z||N||(Z=!0,Wt(wt))},St.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):st=0<L?Math.floor(1e3/L):5},St.unstable_getCurrentPriorityLevel=function(){return Ht},St.unstable_getFirstCallbackNode=function(){return Bt(dt)},St.unstable_next=function(L){switch(Ht){case 1:case 2:case 3:var it=3;break;default:it=Ht}var c=Ht;Ht=it;try{return L()}finally{Ht=c}},St.unstable_pauseExecution=function(){},St.unstable_requestPaint=function(){},St.unstable_runWithPriority=function(L,it){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var c=Ht;Ht=L;try{return it()}finally{Ht=c}},St.unstable_scheduleCallback=function(L,it,c){var S=St.unstable_now();switch(typeof c=="object"&&c!==null?(c=c.delay,c=typeof c=="number"&&0<c?S+c:S):c=S,L){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=c+x,L={id:Yr++,callback:it,priorityLevel:L,startTime:c,expirationTime:x,sortIndex:-1},c>S?(L.sortIndex=c,re(jt,L),Bt(dt)===null&&L===Bt(jt)&&(B?(H(It),It=-1):B=!0,ae(rt,c-S))):(L.sortIndex=x,re(dt,L),Z||N||(Z=!0,Wt(wt))),L},St.unstable_shouldYield=Zt,St.unstable_wrapCallback=function(L){var it=Ht;return function(){var c=Ht;Ht=it;try{return L.apply(this,arguments)}finally{Ht=c}}}},1102:function(Wr,St,re){Wr.exports=re(3323)},4335:function(Wr,St,re){var Bt;re.d(St,{$j:function(){return Zt},AN:function(){return rt},BQ:function(){return kt},GK:function(){return Mt},Hn:function(){return H},JX:function(){return Ht},PC:function(){return jt},Ud:function(){return Z},V7:function(){return J},X2:function(){return $t},dy:function(){return N},h_:function(){return st},mH:function(){return B},pC:function(){return Wt},s_:function(){return It},u_:function(){return Ft},zd:function(){return wt}});var u=re(7378),ze=re(1542),De={269:(c,S,x)=>{x.d(S,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),_=x.n(O),C=_()(F());C.push([c.id,`/*@height:2px;
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
`,""]),C.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"};const U=C},528:(c,S,x)=>{x.d(S,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),_=x.n(O),C=_()(F());C.push([c.id,`.kLIGi {
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
`,""]),C.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"};const U=C},434:(c,S,x)=>{x.d(S,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),_=x.n(O),C=_()(F());C.push([c.id,`@keyframes animate-drawer-right-in {
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
  overflow: auto;
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
`,""]),C.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"};const U=C},503:(c,S,x)=>{x.d(S,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),_=x.n(O),C=_()(F());C.push([c.id,`@keyframes animate-drop-in {
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
`,""]),C.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"};const U=C},548:(c,S,x)=>{x.d(S,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),_=x.n(O),C=_()(F());C.push([c.id,`@keyframes animate-modal-in {
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
`,""]),C.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"};const U=C},232:(c,S,x)=>{x.d(S,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),_=x.n(O),C=_()(F());C.push([c.id,`.clear::after {
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
`,""]),C.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"};const U=C},249:(c,S,x)=>{x.d(S,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),_=x.n(O),C=_()(F());C.push([c.id,`.cols-1 {
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
`,""]),C.locals={};const U=C},990:(c,S,x)=>{x.d(S,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),_=x.n(O),C=_()(F());C.push([c.id,`@keyframes before {
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
`,""]),C.locals={};const U=C},575:(c,S,x)=>{x.d(S,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),_=x.n(O),C=_()(F());C.push([c.id,`.clear::after {
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
`,""]),C.locals={};const U=C},918:(c,S,x)=>{x.d(S,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),_=x.n(O),C=_()(F());C.push([c.id,`.ofth_ {
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
`,""]),C.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"};const U=C},942:(c,S,x)=>{x.d(S,{Z:()=>U});var E=x(601),F=x.n(E),O=x(609),_=x.n(O),C=_()(F());C.push([c.id,`.node-right-icon-close {
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
`,""]),C.locals={};const U=C},609:c=>{c.exports=function(S){var x=[];return x.toString=function(){return this.map(function(E){var F="",O=typeof E[5]<"u";return E[4]&&(F+="@supports (".concat(E[4],") {")),E[2]&&(F+="@media ".concat(E[2]," {")),O&&(F+="@layer".concat(E[5].length>0?" ".concat(E[5]):""," {")),F+=S(E),O&&(F+="}"),E[2]&&(F+="}"),E[4]&&(F+="}"),F}).join("")},x.i=function(E,F,O,_,C){typeof E=="string"&&(E=[[null,E,void 0]]);var U={};if(O)for(var xt=0;xt<this.length;xt++){var Ct=this[xt][0];Ct!=null&&(U[Ct]=!0)}for(var Ut=0;Ut<E.length;Ut++){var Q=[].concat(E[Ut]);O&&U[Q[0]]||(typeof C<"u"&&(typeof Q[5]>"u"||(Q[1]="@layer".concat(Q[5].length>0?" ".concat(Q[5]):""," {").concat(Q[1],"}")),Q[5]=C),F&&(Q[2]&&(Q[1]="@media ".concat(Q[2]," {").concat(Q[1],"}")),Q[2]=F),_&&(Q[4]?(Q[1]="@supports (".concat(Q[4],") {").concat(Q[1],"}"),Q[4]=_):Q[4]="".concat(_)),x.push(Q))}},x}},601:c=>{c.exports=function(S){return S[1]}},837:(c,S,x)=>{var E,F=x(810),O=Symbol.for("react.element"),_=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,U=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xt={key:!0,ref:!0,__self:!0,__source:!0};function Ct(Ut,Q,Xt){var _t,qt={},le=null,oe=null;Xt!==void 0&&(le=""+Xt),Q.key!==void 0&&(le=""+Q.key),Q.ref!==void 0&&(oe=Q.ref);for(_t in Q)C.call(Q,_t)&&!xt.hasOwnProperty(_t)&&(qt[_t]=Q[_t]);if(Ut&&Ut.defaultProps)for(_t in Q=Ut.defaultProps,Q)qt[_t]===void 0&&(qt[_t]=Q[_t]);return{$$typeof:O,type:Ut,key:le,ref:oe,props:qt,_owner:U.current}}E=_,S.jsx=Ct,S.jsxs=Ct},322:(c,S,x)=>{c.exports=x(837)},62:c=>{var S=[];function x(O){for(var _=-1,C=0;C<S.length;C++)if(S[C].identifier===O){_=C;break}return _}function E(O,_){for(var C={},U=[],xt=0;xt<O.length;xt++){var Ct=O[xt],Ut=_.base?Ct[0]+_.base:Ct[0],Q=C[Ut]||0,Xt="".concat(Ut," ").concat(Q);C[Ut]=Q+1;var _t=x(Xt),qt={css:Ct[1],media:Ct[2],sourceMap:Ct[3],supports:Ct[4],layer:Ct[5]};if(_t!==-1)S[_t].references++,S[_t].updater(qt);else{var le=F(qt,_);_.byIndex=xt,S.splice(xt,0,{identifier:Xt,updater:le,references:1})}U.push(Xt)}return U}function F(O,_){var C=_.domAPI(_);C.update(O);var U=function(xt){if(xt){if(xt.css===O.css&&xt.media===O.media&&xt.sourceMap===O.sourceMap&&xt.supports===O.supports&&xt.layer===O.layer)return;C.update(O=xt)}else C.remove()};return U}c.exports=function(O,_){_=_||{},O=O||[];var C=E(O,_);return function(U){U=U||[];for(var xt=0;xt<C.length;xt++){var Ct=C[xt],Ut=x(Ct);S[Ut].references--}for(var Q=E(U,_),Xt=0;Xt<C.length;Xt++){var _t=C[Xt],qt=x(_t);S[qt].references===0&&(S[qt].updater(),S.splice(qt,1))}C=Q}}},793:c=>{var S={};function x(F){if(typeof S[F]>"u"){var O=document.querySelector(F);if(window.HTMLIFrameElement&&O instanceof window.HTMLIFrameElement)try{O=O.contentDocument.head}catch{O=null}S[F]=O}return S[F]}function E(F,O){var _=x(F);if(!_)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");_.appendChild(O)}c.exports=E},173:c=>{function S(x){var E=document.createElement("style");return x.setAttributes(E,x.attributes),x.insert(E,x.options),E}c.exports=S},892:(c,S,x)=>{function E(F){var O=x.nc;O&&F.setAttribute("nonce",O)}c.exports=E},36:c=>{function S(F,O,_){var C="";_.supports&&(C+="@supports (".concat(_.supports,") {")),_.media&&(C+="@media ".concat(_.media," {"));var U=typeof _.layer<"u";U&&(C+="@layer".concat(_.layer.length>0?" ".concat(_.layer):""," {")),C+=_.css,U&&(C+="}"),_.media&&(C+="}"),_.supports&&(C+="}");var xt=_.sourceMap;xt&&typeof btoa<"u"&&(C+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(xt))))," */")),O.styleTagTransform(C,F,O.options)}function x(F){if(F.parentNode===null)return!1;F.parentNode.removeChild(F)}function E(F){if(typeof document>"u")return{update:function(){},remove:function(){}};var O=F.insertStyleElement(F);return{update:function(_){S(O,F,_)},remove:function(){x(O)}}}c.exports=E},464:c=>{function S(x,E){if(E.styleSheet)E.styleSheet.cssText=x;else{for(;E.firstChild;)E.removeChild(E.firstChild);E.appendChild(document.createTextNode(x))}}c.exports=S},810:c=>{var S=E=>{var F={};return A.d(F,E),F},x=E=>()=>E;c.exports=Bt||(Bt=re.t(u,2))}},pt={};function A(c){var S=pt[c];if(S!==void 0)return S.exports;var x=pt[c]={id:c,exports:{}};return De[c](x,x.exports,A),x.exports}A.n=c=>{var S=c&&c.__esModule?()=>c.default:()=>c;return A.d(S,{a:S}),S},A.d=(c,S)=>{for(var x in S)A.o(S,x)&&!A.o(c,x)&&Object.defineProperty(c,x,{enumerable:!0,get:S[x]})},A.o=(c,S)=>Object.prototype.hasOwnProperty.call(c,S),A.nc=void 0;var dt={};(()=>{A.d(dt,{PC:()=>oe,rK:()=>tr,lr:()=>yr,JX:()=>$e,dy:()=>$,Ud:()=>Hr,mH:()=>q,SV:()=>Et,Hn:()=>He,rj:()=>Xr,V7:()=>Ue,AN:()=>ue,zd:()=>be,BQ:()=>qe,u_:()=>io,s_:()=>To,h_:()=>Ie,X2:()=>ke,$j:()=>fo,GK:()=>Bo,u:()=>p,mp:()=>Yo,C2:()=>Ot,pC:()=>zt,ff:()=>Ar,d2:()=>Dr,Uw:()=>Ao});var c=A(322),S=A(62),x=A.n(S),E=A(36),F=A.n(E),O=A(793),_=A.n(O),C=A(892),U=A.n(C),xt=A(173),Ct=A.n(xt),Ut=A(464),Q=A.n(Ut),Xt=A(269),_t={};_t.styleTagTransform=Q(),_t.setAttributes=U(),_t.insert=_().bind(null,"head"),_t.domAPI=F(),_t.insertStyleElement=Ct();var qt=x()(Xt.Z,_t);const le=Xt.Z&&Xt.Z.locals?Xt.Z.locals:void 0,oe=i=>(0,c.jsx)("span",{className:le.anico,children:(0,c.jsx)("span",{className:[le.hline,...(i.type||"").split(" ").map(a=>le[a]).filter(Boolean)].join(" ")})});var K=A(810);const de=i=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(i),Qe=i=>new Promise((a,f)=>{const v=new FileReader;v.readAsDataURL(i),v.addEventListener("load",()=>a(v.result)),v.addEventListener("error",j=>f(j))}),Ye=async i=>{if(!de(i))return i;const a=await(await fetch(decodeURIComponent(i))).blob();return await Qe(a)},Vr=i=>{const[a,f]=(0,K.useState)(i);return(0,K.useEffect)(()=>{(async v=>{const j=await Ye(v);f(j)})(i)},[]),a},tr=({src:i,...a})=>{const f=Vr(i);return(0,c.jsx)("img",{...a,src:f})};var hr=i=>{var a={};return A.d(a,i),a},fr=i=>()=>i;const er=hr({createPortal:()=>ze.createPortal,flushSync:()=>ze.flushSync}),pr=(i,a)=>{const f=(0,K.useRef)();(0,K.useEffect)(()=>{f.current=i},[i]),(0,K.useEffect)(()=>{if(a){const v=setInterval(()=>f.current(),a);return()=>clearInterval(v)}},[a])},se=()=>![typeof window,typeof document].includes("undefined"),rr=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),Te=i=>rr(i).indexOf("element")>-1,he=(i=null)=>se()?Te(i)?{width:i.clientWidth,height:i.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},or=(i=()=>{},a=60)=>{let f=null;return function(...v){clearTimeout(f),f=setTimeout(()=>i.apply(this,v),a)}},mr=(i,a)=>Object.prototype.hasOwnProperty.call(i??{},a),ne=i=>mr(i,"current"),zr=(i,a)=>{const f=[],v=i.children??[];for(let j=0,I=v.length;j<I;j++){const R=v[j];R.className.indexOf(a)>-1&&f.push(R)}return f.length===0?null:f.length===1?f[0]:f},nr=(i,a)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const f=document.createElement("object");return f.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),f.setAttribute("class","resize-sensor"),f.onload=()=>{f.contentDocument.defaultView.addEventListener("resize",a,!1),a()},f.type="text/html",i.appendChild(f),f.data="about:blank",f},Zr=(i,a=60)=>{if(!se())return;i=ne(i)?i.current:i??document.body;let f=zr(i,"resize-sensor"),v=[];const j=or(()=>v.map(ot=>ot(i)),a),I=ot=>{zr(i,"resize-sensor")||(f=nr(i,j)),v.indexOf(ot)===-1&&v.push(ot)},R=ot=>{const lt=v.indexOf(ot);lt!==-1&&v.splice(lt,1),v.length===0&&f&&et()},et=()=>{f&&f.parentNode&&(f.contentDocument&&f.contentDocument.defaultView.removeEventListener("resize",j,!1),f.parentNode.removeChild(f),f=void 0,v=[])};return{element:i,bind:I,unbind:R,destroy:et}},xr=(i={})=>{const a=(0,K.useRef)(0),[f,v]=(0,K.useState)(i),j=(0,K.useCallback)(I=>{cancelAnimationFrame(a.current),a.current=requestAnimationFrame(()=>v(I))},[]);return(0,K.useEffect)(()=>()=>cancelAnimationFrame(a.current),[]),[f,j]},Mr=(i=null,a=60)=>{const f=ne(i)?i.current:i,{bind:v,destroy:j}=Zr(f,a),[I,R]=xr(he(f));return(0,K.useEffect)(()=>(v(()=>f&&R(he(f))),()=>j()),[f]),I};var Ne=A(528),Ae={};Ae.styleTagTransform=Q(),Ae.setAttributes=U(),Ae.insert=_().bind(null,"head"),Ae.domAPI=F(),Ae.insertStyleElement=Ct();var ir=x()(Ne.Z,Ae);const ge=Ne.Z&&Ne.Z.locals?Ne.Z.locals:void 0,yr=({children:i,active:a=0,delay:f=5e3,className:v,...j})=>{const[I,R]=(0,K.useState)(a+1),[et,ot]=(0,K.useState)(!1),lt=(0,K.useRef)(),bt=(0,K.useRef)(""),{width:nt}=Mr(lt);i=Array.isArray(i)?i:[i];const vt=i[0],Jt=[i[i.length-1],...i,vt],Qt=Jt.length;pr(()=>{let Yt=I+1;Yt=Yt===Qt?1:Yt,bt.current&&(bt.current=""),R(Yt),Yt===Qt-1&&setTimeout(()=>{bt.current="none",R(1)},500)},et?null:f);const At=(Yt,Gt)=>{Gt.stopPropagation(),bt.current="",R(Yt),(0,er.flushSync)(()=>ot(!0)),ot(!1)},Pt={width:`${Qt*nt}px`,transform:`translateX(${-nt*I}px)`,transition:bt.current};return(0,c.jsxs)("div",{className:`${ge["huxy-carousel"]}${v?` ${v}`:""}`,...j,ref:lt,children:[(0,c.jsx)("div",{className:ge["huxy-carousel-wrap"],style:Pt,children:Jt.map((Yt,Gt)=>(0,c.jsx)("div",{className:`${ge["carousel-item"]} ${I===Gt?ge.active:""}`,style:{width:`${nt}px`},children:Yt},`huxy-carousel-${Gt}`))}),(0,c.jsx)("div",{className:ge["carousel-switch"],children:i.map((Yt,Gt)=>(0,c.jsx)("span",{className:`${ge.dot} ${I===Gt+1?ge.active:""}`,onClick:Je=>At(Gt+1,Je)},`huxy-carousel-switch-${Gt}`))})]})},Se=(i,a)=>{let f="",v="";if(typeof a=="number"&&(f=`col-${i}-${a}`),typeof a=="object"){const{span:j,offset:I}=a;f=j?`col-${i}-${j}`:"",v=I?`offset-${i}-${I}`:""}return{sp:f,os:v}},$e=(0,K.forwardRef)(({span:i,offset:a,xl:f,lg:v,md:j,sm:I,xs:R,style:et,width:ot,auto:lt,offsetWidth:bt="0px",className:nt,...vt},Jt)=>{const Qt=nt?` ${nt}`:"",At=`col-${i||12}`,Pt=a?`offset-${a}`:"",{sp:Yt,os:Gt}=Se("xs",R),{sp:Je,os:cr}=Se("sm",I),{sp:Br,os:Ee}=Se("md",j),{sp:Lr,os:Ge}=Se("lg",v),{sp:We,os:je}=Se("xl",f),ur=[At,We,Lr,Br,Je,Yt,Pt,je,Ge,Ee,cr,Gt].filter(Boolean).join(" "),jr=lt?{width:"auto",flex:1,maxWidth:`calc(100% - ${bt})`}:{width:ot};return(0,c.jsx)("div",{className:`${ur}${Qt}`,...vt,style:{...jr,...et},ref:Jt})}),Sr=()=>{const i=(0,K.useRef)(!0);return i.current?(i.current=!1,!0):!1},gr=(i,a=[])=>{const f=Sr();(0,K.useEffect)(()=>{if(!f)return i()},a)},$r=(i,a=450)=>{const[f,v]=(0,K.useState)(i);return gr(()=>{let j;return i||a===0?v(i):j=setTimeout(()=>v(i),a),()=>j&&clearTimeout(j)},[i]),[f,v]},Ie=({children:i,mountNode:a=document.body})=>(0,er.createPortal)(i,a),Ve={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},br={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},_r=document.body,be=({open:i,close:a,delay:f=300,children:v,mountNode:j,hasMask:I=!0,style:R,className:et="h-mask",relative:ot})=>{const[lt]=$r(i,f);(j??_r).style.overflow=lt?"hidden":"";const bt=ot?"absolute":"fixed";return(0,c.jsx)(Ie,{mountNode:j,children:(0,c.jsx)("div",{children:lt?(0,c.jsxs)("div",{className:et,style:{...Ve,position:bt},children:[I?(0,c.jsx)("div",{style:{...br,position:bt},onClick:nt=>a?.(nt)}):null,K.Children.map(v,nt=>(0,K.isValidElement)(nt)?(0,K.cloneElement)(nt,{style:{position:"relative",zIndex:100001,...nt.props.style}}):nt)]}):null})})};var fe=A(434),s={};s.styleTagTransform=Q(),s.setAttributes=U(),s.insert=_().bind(null,"head"),s.domAPI=F(),s.insertStyleElement=Ct();var b=x()(fe.Z,s);const y=fe.Z&&fe.Z.locals?fe.Z.locals:void 0,$=({open:i,close:a,footer:f,header:v,className:j,style:I,children:R,width:et="300px",mountNode:ot,position:lt="right",relative:bt})=>{const nt=["drawer-wrap",lt,i?"open":"",...j?.split(" ")??[]].filter(Boolean).map(vt=>y[vt]).join(" ");return(0,c.jsx)(be,{open:i,close:a,delay:250,hasMask:!0,relative:bt,mountNode:ot,className:"huxy-drawer",children:(0,c.jsx)("div",{className:nt,style:{width:et,position:bt?"absolute":"fixed",...I},children:(0,c.jsxs)("div",{className:y["drawer-container"],children:[(0,c.jsxs)("div",{className:y["drawer-header"],children:[(0,c.jsx)("span",{className:`link ${y["ico-close"]}`,onClick:vt=>a?.(vt)}),(0,c.jsx)("div",{children:v})]}),(0,c.jsx)("div",{className:y["drawer-content"],children:R}),f?(0,c.jsx)("div",{className:y["drawer-footer"],children:f}):null]})})})},D=(i,a,f="click")=>{(0,K.useEffect)(()=>{const v=I=>{const R=ne(i)?i.current:i;R?.contains&&!R.contains(I.target)&&a(I)},j=typeof f=="string"?[f]:f;return j.map(I=>{document.addEventListener(I,v,!1)}),()=>{j.map(I=>{document.removeEventListener(I,v,!1)})}},[i,a,f])},X=i=>i?.$$typeof&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",yt=(i="")=>i.replace(/^\S/,a=>a.toUpperCase()),ht=i=>{if(se())return i=ne(i)?i.current:i??document.body,i.getBoundingClientRect?.()},at=i=>{if(!se())return;const a=document.createElement("div");return a.innerHTML=i,a.children[0]},Nt=(i,a={},f=!1)=>{if(Te(i)){if(f){let v="";Object.keys(a).map(j=>{v+=`${j}: ${a[j]};`}),i.style=v;return}Object.keys(a).map(v=>i.style.setProperty(v,a[v]))}},pe=(i=350)=>new Promise(a=>setTimeout(a,i)),Pe=(i=100)=>{const a=Date.now();for(;Date.now()-a<=i;);},Ze=pe,me=async(i,a=15)=>{if(!se())return;if(typeof i=="string"&&(i=at(i)),i=ne(i)?i.current:i,!Te(i))return{};const f=i.cloneNode(!0);Nt(f,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(f),await Ze(a);const v=ht(f);return i.parentNode.removeChild(f),v},ar=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,vr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,_e=(i,a)=>{a=`huxy-drop-arrow-${a}`;const f=i.getAttribute("class")??"";ar.test(f)?i.setAttribute("class",f.replace(vr,a)):i.setAttribute("class",`${f} ${a}`)},ve=async(i,a,f)=>{const{left:v,right:j,top:I,bottom:R}=ht(i),{width:et,height:ot}=he(),{width:lt,height:bt}=await me(a);if(j<0||R<0||v>et||I>ot)return{};if(f==="vertical"){const nt={left:v+"px",top:R+10+"px",right:"auto",bottom:"auto"};let vt="lt";v+lt>et&&(nt.left=j-lt+"px",vt="rt"),R+10+bt>ot&&(nt.top=I-10-bt+"px",vt=vt==="lt"?"lb":"rb"),Nt(a,nt),_e(a,vt)}else{const nt={left:j+10+"px",top:I+"px",right:"auto",bottom:"auto"};let vt="tl";j+10+lt>et&&(nt.left=v-10-lt+"px",vt="tr"),I+bt>ot&&(nt.top=R-bt+"px",vt=vt==="tl"?"bl":"br"),Nt(a,nt),_e(a,vt)}},we=(i,a,f="horizontal")=>{const v=or(ve),j=()=>v(i,a,f);window.addEventListener("scroll",j,!1),window.addEventListener("resize",j,!1);const I=()=>{window.removeEventListener("scroll",j),window.removeEventListener("resize",j),Nt(a,{left:"",top:"",right:"",bottom:""})};return ve(i,a,f),I},co=({open:i,delay:a=250,children:f,mountNode:v,style:j,className:I="huxy-mask"})=>{const[R]=$r(i,a);return(0,c.jsx)(Ie,{mountNode:v,children:(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:I,children:(0,c.jsx)("div",{style:{...j,display:R?"block":"none"},children:f})})})})};var Me=A(503),Be={};Be.styleTagTransform=Q(),Be.setAttributes=U(),Be.insert=_().bind(null,"head"),Be.domAPI=F(),Be.insertStyleElement=Ct();var no=x()(Me.Z,Be);const Fr=Me.Z&&Me.Z.locals?Me.Z.locals:void 0,Hr=({trigger:i="click",type:a,dropList:f,className:v,wrapStyle:j,children:I,...R})=>{const[et,ot]=(0,K.useState)(!1),lt=(0,K.useRef)(),bt=(0,K.useRef)(),nt=(0,K.useRef)();D(lt,Pt=>et&&ot(!1),[...new Set(["click",i.toLowerCase()])]),(0,K.useEffect)(()=>()=>nt.current?.(),[]);const vt=Pt=>{Pt.preventDefault(),ot(!0),nt.current=we(lt.current,bt.current,a)},Jt={[`on${yt(i)}`]:vt},Qt=["drop-wrap",et?"open":""].filter(Boolean).map(Pt=>Fr[Pt]).join(" "),At=X(f)?f:f?.(()=>ot(!1),et);return(0,c.jsxs)("span",{ref:lt,className:`${Fr["drop-target"]}${v?` ${v}`:""}`,...Jt,...R,children:[I,(0,c.jsx)(co,{open:et,className:"huxy-drop",children:(0,c.jsx)("div",{ref:bt,className:Qt,style:j,children:At})})]})},Ur=(i,a,f)=>{if(!se())return;f=ne(f)?f.current:f??document.body;const v=document.createElement("span");v.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),a&&Nt(v,a),v.innerText=(i??"").replace(/[\r\n]/g,""),f.appendChild(v);const j=v.getBoundingClientRect();return f.removeChild(v),j};var l=A(918),h={};h.styleTagTransform=Q(),h.setAttributes=U(),h.insert=_().bind(null,"head"),h.domAPI=F(),h.insertStyleElement=Ct();var w=x()(l.Z,h);const g=l.Z&&l.Z.locals?l.Z.locals:void 0,p=({title:i,placement:a="topRight",children:f,ellipsis:v,className:j,...I})=>(0,c.jsx)("span",{className:`${g[`huxy-tooltip-${a}`]}${j?` ${j}`:""}`,tooltip:i??f,...I,children:(0,c.jsx)("span",{className:v?g.ellipsis:"",children:f})}),Y={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},M=i=>{const{children:a,style:f}=i,v=typeof a=="string",j=v?a:a?.props?.title??a?.props?.children,I=(0,K.useRef)(),[R,et]=(0,K.useState)(!0);return(0,K.useEffect)(()=>{if(I.current){const{width:ot}=Ur(j,null,I.current.parentNode),{width:lt}=ht(I.current),bt=~~ot>~~lt;bt!==R&&et(bt)}},[j]),(0,c.jsx)("span",{ref:I,style:{display:"flex",width:"100%",...f},children:R?v?(0,c.jsx)(p,{...i,ellipsis:!0}):(0,c.jsx)("span",{style:Y,children:a}):v?a:a?.props?.children})},q=i=>i.children==null?"":(0,c.jsx)(M,{...i});var W=Object.defineProperty,P=(i,a,f)=>a in i?W(i,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):i[a]=f,gt=(i,a,f)=>(P(i,typeof a!="symbol"?a+"":a,f),f);class Et extends K.default.Component{constructor(){super(...arguments),gt(this,"state",{error:null})}static getDerivedStateFromError(a){return{error:a}}componentDidCatch(a,f){const{errorReport:v}=this.props;typeof v=="function"&&v({error:a,info:f.componentStack})}render(){const{error:a}=this.state,{fallback:f,children:v}=this.props;return a?f(a):v}}const Ot=i=>a=>{if(typeof a=="function"||typeof a?.render=="function")return(0,c.jsx)(a,{});if(typeof a=="string"){const f=i?.[a];return f?(0,c.jsx)(f,{}):(0,c.jsx)("i",{className:a})}return a??null},mt=i=>Ot(i),zt=i=>({icon:a,defaultIcon:f})=>a?mt(i)(a):a===!1?null:f,Dt=["","webkit","moz","ms"],ut=i=>Dt.map(a=>a?`${a}FullscreenElement`:"fullscreenElement").find(a=>i[a]),ct=i=>Dt.map(a=>a?`${a}RequestFullscreen`:"requestFullscreen").find(a=>i[a]),Tt=i=>Dt.map(a=>a?`${a}ExitFullscreen`:"exitFullscreen").find(a=>i[a]),Kt=Dt.map(i=>`${i}fullscreenchange`),ie=i=>{if(!se())return;i=ne(i)?i.current:i??document.body;const a=ut(document),f=ct(i),v=Tt(document);document[a]?document[v]?.():i[f]?.()},ce=i=>se()?(Kt.map(a=>document.addEventListener(a,i,!1)),()=>Kt.map(a=>document.removeEventListener(a,i,!1))):void 0,xe=i=>(0,c.jsx)("i",{...i,children:"..."}),He=({panel:i,fullIcon:a=xe,exitIcon:f=xe,...v})=>{const j=ne(i)?i.current:i,[I,R]=(0,K.useState)();(0,K.useEffect)(()=>{const ot=ce(()=>{R(lt=>!lt)});return()=>ot()},[]);const et=I?f:a;return(0,c.jsx)(et,{onClick:ot=>ie(j),...v})};var Fe=A(249),Oe={};Oe.styleTagTransform=Q(),Oe.setAttributes=U(),Oe.insert=_().bind(null,"head"),Oe.domAPI=F(),Oe.insertStyleElement=Ct();var lr=x()(Fe.Z,Oe);const Or=Fe.Z&&Fe.Z.locals?Fe.Z.locals:void 0,Le=({gutter:i=10,className:a,overflow:f="hidden",...v},j)=>{const I=a?` ${a}`:"";let R=10;if(Array.isArray(i)){const et=[...i];i=et[0],R=et[1]??et[0]}return(0,c.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(R/2)}px`,overflow:f},children:(0,c.jsx)("div",{className:`row${I}`,...v,ref:j})})},ke=(0,K.forwardRef)(Le),Xr=({rowProps:i,colProps:a,children:f,Row:v=ke,Col:j=$e})=>{const I=[];return K.Children.map(f,R=>{R&&(R.type?.description==="react.fragment"?I.push(...R.props.children):I.push(R))}),(0,c.jsx)(v,{...i,children:I.map((R,et)=>(0,c.jsx)(j,{...a,...R.props.itemprops,children:R},`huuxy_grid_${et}`))})},Dr=(i,a)=>(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...a}),ue=i=>{const{error:a={},info:f=""}=i||{},{message:v,stack:j,errMsg:I}=a;let R=I||j||a.toString();R=`${R}
${f}`.replace(/\r|\n|\r\n/g,"<br/>"),R=R.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),R=R.replace(/\s/g,"&nbsp;");const et=v?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,c.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Dr(R,{style:{color:"red"}}),et&&(0,c.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${et}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Ue=({children:i,report:a})=>{const f=(0,K.useRef)();return f.current?.state&&(f.current.state.error=null),(0,c.jsx)(Et,{ref:f,fallback:(v,j)=>ue({error:v,info:j}),errorReport:a,children:i})},ye=(i,a)=>Object.keys(a).map(f=>i.style[f]=a[f]),wr=(i,a)=>Object.keys(a).map(f=>i.style[f]=""),Tr={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},qr=({left:i,top:a,width:f,height:v})=>({left:`${i}px`,top:`${a}px`,width:`${f}px`,height:`${v}px`}),Xe=i=>(0,c.jsx)("i",{...i,children:"..."}),sr=i=>{const{left:a,top:f}=ht(i),{width:v,height:j}=he(i);return{left:a,top:f,width:v,height:j}},qe=({panel:i,target:a,fullIcon:f=Xe,exitIcon:v=Xe})=>{i=ne(i)?i.current:i||document.body;const[j,I]=(0,K.useState)(),R=(0,K.useRef)(),et=(0,K.useRef)();(0,K.useEffect)(()=>{const bt=typeof a=="function"?a:()=>document.getElementsByClassName(a)[0];et.current=qr(sr(bt())),R.current={...Tr,...qr(sr(i))}},[i]);const ot=(bt,nt)=>{bt?(ye(nt,R.current),setTimeout(()=>{ye(nt,et.current)},0)):wr(nt,R.current),I(bt)},lt=j?v:f;return(0,c.jsx)(lt,{onClick:bt=>ot(!j,i)})};var Re=A(548),Ke={};Ke.styleTagTransform=Q(),Ke.setAttributes=U(),Ke.insert=_().bind(null,"head"),Ke.domAPI=F(),Ke.insertStyleElement=Ct();var kr=x()(Re.Z,Ke);const Ce=Re.Z&&Re.Z.locals?Re.Z.locals:void 0,io=({open:i,close:a,hasMask:f=!0,cancelText:v="\u53D6\u6D88",submit:j,submitText:I="\u786E\u5B9A",title:R="Modal \u5F39\u7A97",className:et,children:ot,delay:lt=250,...bt})=>{const nt=["modal-wrap",i?"open":"",...et?.split(" ")??[]].filter(Boolean).map(vt=>Ce[vt]).join(" ");return(0,c.jsx)(be,{open:i,close:a,delay:lt,hasMask:f,className:"huxy-modal",children:(0,c.jsx)("div",{className:nt,...bt,children:(0,c.jsxs)("div",{className:Ce["modal-container"],children:[(0,c.jsx)("div",{className:Ce["modal-header"],children:R}),(0,c.jsx)("div",{className:Ce["modal-content"],children:ot}),(0,c.jsxs)("div",{className:Ce["modal-footer"],children:[(0,c.jsx)("div",{className:`${Ce.btn} ${Ce.left}`,onClick:vt=>a?.(vt),children:v}),(0,c.jsx)("div",{className:`${Ce.btn} ${Ce.right}`,onClick:vt=>j?.(vt),children:I})]})]})})})};var Kr=A(990),Cr={};Cr.styleTagTransform=Q(),Cr.setAttributes=U(),Cr.insert=_().bind(null,"head"),Cr.domAPI=F(),Cr.insertStyleElement=Ct();var uo=x()(Kr.Z,Cr);const ho=Kr.Z&&Kr.Z.locals?Kr.Z.locals:void 0,fo=({global:i,absolute:a})=>(0,c.jsx)("div",{className:`spinner${i?" global":""}${a?" absolute":""}`,children:(0,c.jsx)("figure",{className:"spinning"})});var Jr=A(232),Nr={};Nr.styleTagTransform=Q(),Nr.setAttributes=U(),Nr.insert=_().bind(null,"head"),Nr.domAPI=F(),Nr.insertStyleElement=Ct();var Do=x()(Jr.Z,Nr);const Gr=Jr.Z&&Jr.Z.locals?Jr.Z.locals:void 0,po=i=>i?.filter?.(a=>typeof a=="function"),mo=(i,a)=>{const f=(0,K.useRef)(),{loading:v,title:j,plugins:I,children:R,className:et,...ot}=i,lt=po(I),bt=lt?.length,nt=et?` ${et}`:"",vt=ne(a)?a:f;return(0,c.jsxs)("div",{className:`${Gr.panel}${nt}`,...ot,ref:vt,children:[(j||bt)&&(0,c.jsxs)("div",{className:Gr["panel-header"],children:[j&&(0,c.jsx)("h4",{className:Gr["panel-title"],children:j}),bt&&(0,c.jsx)("div",{className:Gr["panel-plugins"],children:lt.map((Jt,Qt)=>(0,c.jsx)("span",{className:"link",children:(0,c.jsx)(Jt,{panel:vt})},Qt))})]}),(0,c.jsx)("div",{className:Gr["panel-body"],children:R}),v&&(0,c.jsx)(fo,{})]})},To=(0,K.forwardRef)(mo),Qr=i=>rr(i)==="array",xo=i=>Qr(i)&&!!i.length,yo=({to:i,preventDefault:a,stopPropagation:f,...v})=>a?(0,c.jsx)("span",{...v}):(0,c.jsx)("a",{href:i,...v}),No=({item:i,...a})=>(0,c.jsx)("ul",{...a}),go=(i,...a)=>{const f={};return Object.keys(i).filter(Boolean).map(v=>{f[v]=j=>i[v](j,...a)}),f},bo=({data:i=[],events:a={},List:f=No,Link:v=yo,leftIcon:j,rightIcon:I,isHorizontal:R,isCollapsed:et,level:ot=0,parentOpen:lt=!0})=>{const bt=et&&!ot,nt=!R&&!et&&!lt;return i.map(vt=>{const{name:Jt,path:Qt,icon:At,rightIcon:Pt,active:Yt,open:Gt,children:Je,linkProps:cr}=vt,Br=xo(Je),Ee=vt.id||Qt||Jt,Lr=bt?vt.title??Jt:void 0,Ge=nt?"hidden":"",We=At??j,je=Pt??I,ur=We?(0,c.jsx)("div",{className:"node-left-icon",children:We===!0?(0,c.jsx)("i",{className:"default-left-icon"}):We}):null,jr=Jt?(0,c.jsx)("div",{className:"node-text",children:(0,c.jsx)("span",{children:Jt})}):null;if(Br){const ro=go(a,vt,ot),ao=[Ge,Gt?"open":""].filter(Boolean).join(" ");return(0,c.jsxs)("li",{className:ao,"has-children":"true",...ro,children:[(0,c.jsxs)(v,{title:Lr,className:`link${Yt?" active":""}`,to:Qt,preventDefault:!0,stopPropagation:!1,...cr,children:[ur,jr,je?(0,c.jsx)("div",{className:"node-right-icon",children:je===!0?(0,c.jsx)("i",{className:"default-right-icon"}):je}):null]}),(0,c.jsx)(f,{item:vt,children:bo({data:Je,events:a,List:f,Link:v,leftIcon:j,rightIcon:I,isHorizontal:R,isCollapsed:et,level:ot+1,parentOpen:!!Gt})})]},Ee)}return(0,c.jsx)("li",{className:Ge,children:(0,c.jsxs)(v,{title:Lr,className:`link${Yt?" active":""}`,to:Qt,...cr,children:[ur,jr]})},Ee)})},Ar=bo,Ao=(i,...a)=>(0,c.jsx)("div",{"v-html":i,...a});var Ir=A(575),Pr={};Pr.styleTagTransform=Q(),Pr.setAttributes=U(),Pr.insert=_().bind(null,"head"),Pr.domAPI=F(),Pr.insertStyleElement=Ct();var vo=x()(Ir.Z,Pr);const Io=Ir.Z&&Ir.Z.locals?Ir.Z.locals:void 0,Po=i=>(0,c.jsx)("div",{style:{padding:"6px 15px"},children:i}),wo=({activekey:i,tabs:a=[],switchTab:f,trackColor:v,flex:j,...I},R)=>{const[et,ot]=(0,K.useState)(i??a[0]?.key),[lt,bt]=(0,K.useState)({}),nt=(0,K.useRef)({}),vt=(0,K.useRef)();(0,K.useEffect)(()=>{const At=nt.current[et];At&&Jt(At)},[]);const Jt=At=>{const{left:Pt,width:Yt}=ht(At),Gt=ht(vt.current).left;bt({left:Pt-Gt,width:Yt})},Qt=(At,Pt)=>{At.stopPropagation(),ot(Pt),typeof f=="function"&&f(Pt),Jt(At.currentTarget)};return(0,c.jsxs)("div",{className:"tabs-header-wrap",...I,ref:R,children:[(0,c.jsx)("ul",{className:`tabs-header${j?" flex":""}`,ref:vt,children:a.map(At=>(0,c.jsx)("li",{ref:Pt=>nt.current[At.key]=Pt,className:`th-item${et===At.key?" active":""}`,onClick:Pt=>Qt(Pt,At.key),children:typeof At.renderTabs=="function"?At.renderTabs(At,et===At.key):Po(At.value)},At.key))}),(0,c.jsx)("div",{className:"th-track",style:{...lt,color:v}})]})},Bo=(0,K.forwardRef)(wo),to=(i,a,f="id",v="children")=>{if(!Qr(i))return null;const j=I=>{for(let R=0,et=I.length;R<et;R++){const ot=I[R];if(ot[f]===a)return[ot];if(Qr(ot[v])){const lt=j(ot[v]);if(lt)return[ot].concat(lt)}}};return j(i)},Lo=i=>++i,ko=()=>{const[,i]=(0,K.useState)(0);return(0,K.useCallback)(()=>i(Lo),[])},Co=i=>{const{children:a,open:f}=i;let v=0;if(f&&a?.length){v=a.length;let j=0;return a.map(I=>j+=Co(I)),v+j}return v},Eo=({item:i,style:a,...f})=>(0,c.jsx)("ul",{style:{...a,"--count":Co(i)},...f});var eo=A(942),Er={};Er.styleTagTransform=Q(),Er.setAttributes=U(),Er.insert=_().bind(null,"head"),Er.domAPI=F(),Er.insertStyleElement=Ct();var nn=x()(eo.Z,Er);const Ro=eo.Z&&eo.Z.locals?eo.Z.locals:void 0,Wo=i=>(0,c.jsx)("ul",{...i}),jo=(i,a)=>i?Eo:({item:f,...v})=>(0,c.jsx)(Wo,{className:a==="right"?"left":"",...v}),Yo=i=>{const{data:a=[],collapsed:f=!1,type:v="vertical",Link:j,width:I,bgColor:R,itemHeight:et,collapsedWidth:ot,itemPadding:lt,style:bt,className:nt,...vt}=i,Jt=(0,K.useRef)(),Qt=(0,K.useRef)();(0,K.useEffect)(()=>()=>clearTimeout(Jt.current),[]);const At=ko(),Pt=v==="horizontal",Yt=!Pt&&f,Gt={onClick:(Ge,We)=>{if(Ge.stopPropagation(),!Pt&&!Yt){const je=to(a,We.path,"path"),ur=je[je.length-1];ur.open=!ur.open,At()}},onMouseEnter:(Ge,We,je)=>{Yt&&!je&&(clearTimeout(Jt.current),Qt.current.style.width="var(--maxWidth)")},onMouseLeave:(Ge,We,je)=>{Yt&&!je&&(Jt.current=setTimeout(()=>Qt.current.style.width="",200))}},Je=(Pt?["huxy-horizontal-tree",nt]:["huxy-tree",nt,Yt?"collapsed":""]).filter(Boolean).join(" "),{float:cr,...Br}=vt?.style??{},Ee={"--bgColor":R,"--itemHeight":et,"--nodeListWidth":I,...Br};Pt?(Ee["--itemPadding"]=lt,Ee["--nodeFloat"]=cr):(Ee["--width"]=I,Ee["--collapsedWidth"]=ot);const Lr=jo(!Pt&&!Yt,cr);return(0,c.jsx)("div",{ref:Qt,className:Je,style:Ee,...vt,children:(0,c.jsx)("div",{className:"huxy-tree-track",children:(0,c.jsx)("ul",{className:"huxy-tree-root",children:Ar({data:a,events:Gt,List:Lr,Link:j,leftIcon:!0,rightIcon:!0,isHorizontal:Pt,isCollapsed:Yt})})})})}})();var jt=dt.PC,Yr=dt.rK,Vt=dt.lr,Ht=dt.JX,N=dt.dy,Z=dt.Ud,B=dt.mH,V=dt.SV,H=dt.Hn,tt=dt.rj,J=dt.V7,rt=dt.AN,wt=dt.zd,kt=dt.BQ,Ft=dt.u_,It=dt.s_,st=dt.h_,$t=dt.X2,Zt=dt.$j,Mt=dt.GK,k=dt.u,Lt=dt.mp,Rt=dt.C2,Wt=dt.pC,ae=dt.ff,L=dt.d2,it=dt.Uw},8611:function(Wr,St,re){var Bt;re.d(St,{Bv:function(){return Yr},rU:function(){return dt},tv:function(){return Ht},yj:function(){return Vt}});var u=re(7378),ze={990:(N,Z,B)=>{B.d(Z,{Z:()=>wt});var V=B(601),H=B.n(V),tt=B(609),J=B.n(tt),rt=J()(H());rt.push([N.id,`@keyframes before {
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
`,""]),rt.locals={};const wt=rt},267:(N,Z,B)=>{B.d(Z,{Z:()=>wt});var V=B(601),H=B.n(V),tt=B(609),J=B.n(tt),rt=J()(H());rt.push([N.id,`.Iuy_e {
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
`,""]),rt.locals={link:"Iuy_e",active:"D3oJg"};const wt=rt},609:N=>{N.exports=function(Z){var B=[];return B.toString=function(){return this.map(function(V){var H="",tt=typeof V[5]<"u";return V[4]&&(H+="@supports (".concat(V[4],") {")),V[2]&&(H+="@media ".concat(V[2]," {")),tt&&(H+="@layer".concat(V[5].length>0?" ".concat(V[5]):""," {")),H+=Z(V),tt&&(H+="}"),V[2]&&(H+="}"),V[4]&&(H+="}"),H}).join("")},B.i=function(V,H,tt,J,rt){typeof V=="string"&&(V=[[null,V,void 0]]);var wt={};if(tt)for(var kt=0;kt<this.length;kt++){var Ft=this[kt][0];Ft!=null&&(wt[Ft]=!0)}for(var It=0;It<V.length;It++){var st=[].concat(V[It]);tt&&wt[st[0]]||(typeof rt<"u"&&(typeof st[5]>"u"||(st[1]="@layer".concat(st[5].length>0?" ".concat(st[5]):""," {").concat(st[1],"}")),st[5]=rt),H&&(st[2]&&(st[1]="@media ".concat(st[2]," {").concat(st[1],"}")),st[2]=H),J&&(st[4]?(st[1]="@supports (".concat(st[4],") {").concat(st[1],"}"),st[4]=J):st[4]="".concat(J)),B.push(st))}},B}},601:N=>{N.exports=function(Z){return Z[1]}},837:(N,Z,B)=>{var V,H=B(810),tt=Symbol.for("react.element"),J=Symbol.for("react.fragment"),rt=Object.prototype.hasOwnProperty,wt=H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kt={key:!0,ref:!0,__self:!0,__source:!0};function Ft(It,st,$t){var Zt,Mt={},k=null,Lt=null;$t!==void 0&&(k=""+$t),st.key!==void 0&&(k=""+st.key),st.ref!==void 0&&(Lt=st.ref);for(Zt in st)rt.call(st,Zt)&&!kt.hasOwnProperty(Zt)&&(Mt[Zt]=st[Zt]);if(It&&It.defaultProps)for(Zt in st=It.defaultProps,st)Mt[Zt]===void 0&&(Mt[Zt]=st[Zt]);return{$$typeof:tt,type:It,key:k,ref:Lt,props:Mt,_owner:wt.current}}V=J,Z.jsx=Ft,Z.jsxs=Ft},322:(N,Z,B)=>{N.exports=B(837)},62:N=>{var Z=[];function B(tt){for(var J=-1,rt=0;rt<Z.length;rt++)if(Z[rt].identifier===tt){J=rt;break}return J}function V(tt,J){for(var rt={},wt=[],kt=0;kt<tt.length;kt++){var Ft=tt[kt],It=J.base?Ft[0]+J.base:Ft[0],st=rt[It]||0,$t="".concat(It," ").concat(st);rt[It]=st+1;var Zt=B($t),Mt={css:Ft[1],media:Ft[2],sourceMap:Ft[3],supports:Ft[4],layer:Ft[5]};if(Zt!==-1)Z[Zt].references++,Z[Zt].updater(Mt);else{var k=H(Mt,J);J.byIndex=kt,Z.splice(kt,0,{identifier:$t,updater:k,references:1})}wt.push($t)}return wt}function H(tt,J){var rt=J.domAPI(J);rt.update(tt);var wt=function(kt){if(kt){if(kt.css===tt.css&&kt.media===tt.media&&kt.sourceMap===tt.sourceMap&&kt.supports===tt.supports&&kt.layer===tt.layer)return;rt.update(tt=kt)}else rt.remove()};return wt}N.exports=function(tt,J){J=J||{},tt=tt||[];var rt=V(tt,J);return function(wt){wt=wt||[];for(var kt=0;kt<rt.length;kt++){var Ft=rt[kt],It=B(Ft);Z[It].references--}for(var st=V(wt,J),$t=0;$t<rt.length;$t++){var Zt=rt[$t],Mt=B(Zt);Z[Mt].references===0&&(Z[Mt].updater(),Z.splice(Mt,1))}rt=st}}},793:N=>{var Z={};function B(H){if(typeof Z[H]>"u"){var tt=document.querySelector(H);if(window.HTMLIFrameElement&&tt instanceof window.HTMLIFrameElement)try{tt=tt.contentDocument.head}catch{tt=null}Z[H]=tt}return Z[H]}function V(H,tt){var J=B(H);if(!J)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");J.appendChild(tt)}N.exports=V},173:N=>{function Z(B){var V=document.createElement("style");return B.setAttributes(V,B.attributes),B.insert(V,B.options),V}N.exports=Z},892:(N,Z,B)=>{function V(H){var tt=B.nc;tt&&H.setAttribute("nonce",tt)}N.exports=V},36:N=>{function Z(H,tt,J){var rt="";J.supports&&(rt+="@supports (".concat(J.supports,") {")),J.media&&(rt+="@media ".concat(J.media," {"));var wt=typeof J.layer<"u";wt&&(rt+="@layer".concat(J.layer.length>0?" ".concat(J.layer):""," {")),rt+=J.css,wt&&(rt+="}"),J.media&&(rt+="}"),J.supports&&(rt+="}");var kt=J.sourceMap;kt&&typeof btoa<"u"&&(rt+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(kt))))," */")),tt.styleTagTransform(rt,H,tt.options)}function B(H){if(H.parentNode===null)return!1;H.parentNode.removeChild(H)}function V(H){var tt=H.insertStyleElement(H);return{update:function(J){Z(tt,H,J)},remove:function(){B(tt)}}}N.exports=V},464:N=>{function Z(B,V){if(V.styleSheet)V.styleSheet.cssText=B;else{for(;V.firstChild;)V.removeChild(V.firstChild);V.appendChild(document.createTextNode(B))}}N.exports=Z},810:N=>{var Z=V=>{var H={};return pt.d(H,V),H},B=V=>()=>V;N.exports=Bt||(Bt=re.t(u,2))}},De={};function pt(N){var Z=De[N];if(Z!==void 0)return Z.exports;var B=De[N]={id:N,exports:{}};return ze[N](B,B.exports,pt),B.exports}pt.n=N=>{var Z=N&&N.__esModule?()=>N.default:()=>N;return pt.d(Z,{a:Z}),Z},pt.d=(N,Z)=>{for(var B in Z)pt.o(Z,B)&&!pt.o(N,B)&&Object.defineProperty(N,B,{enumerable:!0,get:Z[B]})},pt.o=(N,Z)=>Object.prototype.hasOwnProperty.call(N,Z),pt.nc=void 0;var A={};(()=>{pt.d(A,{rU:()=>no,cb:()=>Ur,Bv:()=>Hr,yj:()=>Fr,tv:()=>vr});var N=pt(810);const Z=l=>Object.prototype.toString.call(l).slice(8,-1).toLowerCase(),B=l=>Z(l)==="array",V=l=>Z(l)==="object",H=l=>l?.$$typeof&&typeof l.$$typeof=="symbol"&&l.$$typeof.description==="react.element",tt=l=>l?.__v_isVNode,J=(l,h)=>Object.prototype.hasOwnProperty.call(l??{},h),rt=l=>{if(!B(l)&&!V(l))return l;const h=B(l)?[]:{};for(const w in l)if(J(l,w)){const g=l[w];h[w]=H(g)||tt(g)||typeof g!="object"?g:g!==l?rt(g):"cyclic"}else Object.setPrototypeOf(h,{[w]:l[w]});return h},wt=rt,kt=l=>Z(l)==="function",Ft=l=>Z(l)==="promise"||V(l)&&kt(l.then),It=(l,h=12e4,w="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Ft(l))return{};let g=null,p=null;return{promiseFn:new Promise((Y,M)=>{g=(q="canceled")=>{clearTimeout(p),Y({canceled:!0,errMsg:q})},h&&(h=typeof h!="number"?12e4:h,p=setTimeout(()=>g(w),h)),l.then(q=>{clearTimeout(p),Y({result:q,errMsg:!1})}).catch(q=>{clearTimeout(p),M(q)})}),cancelFn:g}},st=l=>l?l.charAt(l.length-1)==="/"?l.slice(0,-1):l:"";var $t=pt(322);const Zt=(l,h)=>(0,$t.jsx)("div",{dangerouslySetInnerHTML:{__html:l},...h}),Mt=l=>{const{error:h={},info:w=""}=l||{},{message:g,stack:p,errMsg:Y}=h;let M=Y||p||h.toString();M=`${M}
${w}`.replace(/\r|\n|\r\n/g,"<br/>"),M=M.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),M=M.replace(/\s/g,"&nbsp;");const q=g?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,$t.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Zt(M,{style:{color:"red"}}),q&&(0,$t.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${q}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},k=()=>{const l={};return{on:(h,w)=>{l[h]||(l[h]=[]),l[h].indexOf(w)===-1&&l[h].push(w)},emit:(h,w)=>{l[h]&&l[h].map(g=>g(w))},off:(h,w=null)=>{if(l[h]){if(typeof w!="function")return delete l[h];const g=l[h].indexOf(w);g>-1&&(l[h].splice(g,1),l[h].length||delete l[h])}}}},Lt=l=>{const h={};for(let w in l)J(l,w)||(h[w]=l[w]);return h},Rt=(l,h)=>{if(!V(l))return h;if(!V(h))return l;const w={...Lt(l),...Lt(h)},g={...l,...h};return Object.keys(w).map(p=>{Object.setPrototypeOf(g,{[p]:w[p]})}),g},Wt=()=>{const{on:l,emit:h,off:w}=k(),g={};return{getState:p=>wt(g[p]),setState:(p,Y=!1)=>{if(typeof p=="function"&&(p=p(wt(g))),!V(p))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const M=wt(p);Object.keys(M).map(q=>{const W=g[q],P=M[q],gt=V(P)&&V(W)?Rt(W,P):P;!Y&&h(q,gt),g[q]=gt})},subscribe:(p,Y)=>(l(p,Y),()=>w(p,Y)),unsubscribe:w,clean:p=>{typeof p=="string"?g[p]=void 0:Array.isArray(p)?p.map(Y=>g[Y]=void 0):Object.keys(g).map(Y=>g[Y]=void 0)}}},ae=l=>(h,w)=>{const[g,p]=(0,N.useState)(()=>{const W=l?.getState(h);return W!==void 0?W:(w!==void 0&&l?.setState({[h]:w},!0),w)}),Y=(0,N.useCallback)(W=>l?.setState({[h]:typeof W=="function"?W(l?.getState(h)):W}),[]),M=(0,N.useCallback)(W=>l?.subscribe(h,W),[]),q=(0,N.useCallback)((W=W)=>l?.clean(W),[]);return(0,N.useEffect)(()=>{l?.subscribe(h,W=>p(W))},[]),[g,Y,M,q]},L=Wt(),it=ae(L),c=k(),S=k(),x="push-emitter",E="replace-emitter",F="useRoute-emitter",O={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},_="/404",C={getState:()=>history.state,go:l=>history.go(l),forward:()=>history.forward(),back:()=>history.back()},U=(l,h,w,g,p=[])=>{const Y=W=>{for(let P=0,gt=W.length;P<gt;P++){const Et=W[P],Ot=Et[g].split("?")[0];if(new RegExp("^"+Ot.replace(/:[^/]+/g,"[^/]+")+"$").test(h))return Et;if(B(Et[w])){const mt=Y(Et[w]);if(mt)return mt}}},M=Y(l);if(!M)return _;const{redirect:q}=M;return q?p.includes(q)?p:(p.push(q),U(l,q.split("?")[0],w,g,p)):p[p.length-1]},xt=(l,h,w,g,p)=>{if(!B(l))return null;const Y=gt=>{const Et=gt.split("/"),Ot=h.split("/"),mt={};return Et.map((zt,Dt)=>zt.indexOf(":")===0&&(mt[zt.slice(1)]=Ot[Dt])),mt},M=(gt,Et)=>{const Ot=[],mt=Et.split("/:")[0];for(let zt=0,Dt=gt.length;zt<Dt;zt++){const ut=gt[zt];if(ut[p]===mt){ut.active=!0;const{name:ct,title:Tt,icon:Kt,params:ie}=ut;Ot.push({name:ct,title:Tt,icon:Kt,params:ie,[p]:mt})}else if(Et.indexOf(`${ut[p]}/`)===0){ut.active=!0;const ct=Y(ut[p]),Tt=Object.keys(ct).map(He=>ct[He]).join("/"),{name:Kt,title:ie,icon:ce}=ut,xe=Tt?`${mt}/${Tt}`:ut[p];Ot.push({name:Kt,title:ie,icon:ce,[p]:xe,params:{...ut.params,...ct}})}else if(ut[p]===Et){ut.active=!0;const ct=Y(ut[p]),{[g]:Tt,...Kt}=ut;Ot.push({...Kt,[p]:h,params:{...Kt.params,...w,...ct}})}}return Ot},q=(gt,Et)=>{for(let Ot=0,mt=gt.length;Ot<mt;Ot++){const zt=gt[Ot];if(Et.indexOf(`${zt[p]}/`)===0){zt.active=!0;return}}},W=gt=>{for(let Et=0,Ot=gt.length;Et<Ot;Et++){const mt=gt[Et],zt=(mt[p]||"").split("?")[0];if(zt===h){mt.hideMenu&&q(gt,mt.parentPath||zt),mt.active=!0;const{[g]:Dt,...ut}=mt;return[{...ut,params:{...ut.params,...w}}]}if(new RegExp("^"+zt.replace(/:[^/]+/g,"[^/]+")+"$").test(h))return M(gt,zt);if(B(mt[g])){const Dt=W(mt[g]);if(Dt){mt.active=!0,mt.open=!0;const{[g]:ut,...ct}=mt;return[ct,...Dt]}}}},P=W(l)||[];return{result:l,current:P}},Ct=(l,h,w)=>l.filter(g=>g.hideMenu||g[w].indexOf("/:")>-1?!1:(B(g[h])&&(g[h]=Ct(g[h],h,w)),!0)),Ut=(l,h,w,g="children",p="path")=>{const Y=U(l,h,g,p);if(Y)return{redirect:Y};const{result:M,current:q}=xt(l,h,w,g,p),W=Ct(M,g,p);return{current:q,menu:W}},Q=l=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(l),Xt=(l,h)=>{const w=["#/","/"],g=w[!!h-0];if(!l||w.includes(l))return g;const p=l.charAt(l.length-1)==="/"?l.slice(0,-1):l;return h||p.indexOf("#/")>-1?p:`#${p}`},_t=(l,h,w,g=!1)=>{const p=Xt(h,w);return g?p:w?l&&p==="/"?l:`${l}${p}`:l?`${l}/${p}`:p},qt=(l,h,w,g,p,Y)=>{if(!B(l))return l;const M=(q,W="")=>q.filter(P=>!P.denied).map(P=>{if(!Y&&!P.exact&&!Q(P[g])){(!P[g]||P[g]==="javascript:;")&&(P[g]="");const gt=P[g].charAt(0)==="/"&&W.charAt(W.length-1)==="/"?P[g].slice(1):P[g].charAt(0)!=="/"&&W.charAt(W.length-1)!=="/"?`/${P[g]}`:P[g];P[g]=W?W+gt:_t(p,gt,h)}return P.redirect&&(P.redirect=_t(p,P.redirect,h)),B(P[w])&&(P[w]=M(P[w],P[g]),!P.redirect&&P[w].length&&(P.redirect=P[w][0][g])),P});return M(l)},le=l=>{if(!V(l))return"";const h=[];return Object.keys(l).map((w,g)=>{const p=g>0?"&":"?";h.push(`${p}${w}=${l[w]}`)}),h.join("")},oe=(l="")=>{const[h,w]=l.split("?");if(w){const g={};return w.split("&").map(p=>{const[Y,M]=p.split("=");g[Y]=M}),{path:h,params:g}}return{path:h}},K=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},de=(l,h)=>{for(let w=l.length-1,g;g=l[w--];){const{title:p,name:Y}=g;if(typeof p=="string"&&p.length)return document.title=p;if((p==null||p===!0)&&Y)return document.title=h?`${Y}-${h}`:Y;if(h)return document.title=h}},Qe=l=>{const{pathname:h,search:w,hash:g}=location;if(l){const q=Xt(h,l),W=decodeURIComponent(`${q}${w}`),{params:P}=oe(W);return{path:W,params:P}}const p=decodeURIComponent(Xt(g,l)),{params:Y}=oe(p),M=st(h);return{path:M?`${M}/${p}`:p,params:Y}},Ye=(l,h,w)=>{typeof l=="function"&&l({...h,stay:new Date-w})},Vr=(l,h,w,g)=>{let p,Y,M;if(typeof l=="string")p=l;else if(V(l))p=l.path,Y=l.params,M=l.query;else return;!p||p==="."||p==="./"?p=g:p.indexOf("./")===0?p=`${g.split("?")[0]}${p.replace("./","/")}`:p.indexOf("../")===0&&(p=`${g.split("?")[0].split("/").slice(0,-1).join("/")}${p.replace("../","/")}`),p=_t(h,p,w,l?.exact);const q=oe(p);p=q.path;const W={...q.params,...M},P=le(W);return p=`${p}${P}`,Y={...Y,...W},{path:p,params:Y}},tr=(l,h)=>{const w=l.split(h);return w.length>1?["","/"].includes(w[1].slice(0,1)):!1},hr=k(),fr=l=>{const{on:h,emit:w,off:g}=hr;return{on:p=>h(l,p),emit:p=>w(l,p),off:p=>g(l,p)}},er=l=>(h,w)=>{const{getState:g,setState:p,subscribe:Y,unsubscribe:M,clean:q}=l;return w!==void 0&&p({[h]:w},!0),{getState:()=>g(h),setState:(W,P)=>p({[h]:W},P),subscribe:W=>Y(h,W),unsubscribe:()=>M(h),clean:()=>q(h)}},pr=Wt(),se=er(pr),rr=fr("push-emitter"),Te=fr("replace-emitter"),he=se("route-store"),or=k(),mr=Wt(),ne=ae(mr),zr=()=>![typeof window,typeof document].includes("undefined"),nr=l=>{if(!zr())return;const h=document.createElement("div");return h.innerHTML=l,h.children[0]};var Zr=Object.defineProperty,xr=(l,h,w)=>h in l?Zr(l,h,{enumerable:!0,configurable:!0,writable:!0,value:w}):l[h]=w,Mr=(l,h,w)=>(xr(l,typeof h!="symbol"?h+"":h,w),w);class Ne extends N.default.Component{constructor(){super(...arguments),Mr(this,"state",{error:null})}static getDerivedStateFromError(h){return{error:h}}componentDidCatch(h,w){const{errorReport:g}=this.props;typeof g=="function"&&g({error:h,info:w.componentStack})}render(){const{error:h}=this.state,{fallback:w,children:g}=this.props;return h?w(h):g}}const Ae=({children:l,report:h})=>{const w=(0,N.useRef)();return w.current?.state&&(w.current.state.error=null),(0,$t.jsx)(Ne,{ref:w,fallback:(g,p)=>Mt({error:g,info:p}),errorReport:h,children:l})};var ir=pt(62),ge=pt.n(ir),yr=pt(36),Se=pt.n(yr),$e=pt(793),Sr=pt.n($e),gr=pt(892),$r=pt.n(gr),Ie=pt(173),Ve=pt.n(Ie),br=pt(464),_r=pt.n(br),be=pt(990),fe={};fe.styleTagTransform=_r(),fe.setAttributes=$r(),fe.insert=Sr().bind(null,"head"),fe.domAPI=Se(),fe.insertStyleElement=Ve();var s=ge()(be.Z,fe);const b=be.Z&&be.Z.locals?be.Z.locals:void 0,y=({global:l,absolute:h})=>(0,$t.jsx)("div",{className:`spinner${l?" global":""}${h?" absolute":""}`,children:(0,$t.jsx)("figure",{className:"spinning"})}),$=()=>{const l=(0,N.useRef)([]);return(0,N.useEffect)(()=>()=>{l.current.map(h=>h.cancelFn()),l.current=[]},[]),{cancelablePromise:(0,N.useCallback)((h,w=!0)=>{const g=It(h,w);return l.current.indexOf(g)===-1&&l.current.push(g),g.promiseFn},[])}},D=(l={})=>{const{cancelablePromise:h}=$(),[w,g]=(0,N.useState)(l),p=(0,N.useRef)({}),Y=(0,N.useRef)({}),M=(0,N.useCallback)((W=null)=>{Array.isArray(W)&&W.length?W.map(P=>p.current[P]=l[P]):p.current=l},[]),q=(0,N.useCallback)((W,P,gt=!1)=>{const Et=Object.keys(W),Ot=JSON.stringify(Et.sort());if(!Y.current[Ot]){Y.current[Ot]=!0,gt&&M(Array.isArray(gt)?gt:Et),Et.map(mt=>{p.current[mt]||(p.current[mt]={}),p.current[mt].pending=!0}),g({...p.current});for(let mt=0,zt=Et.length;mt<zt;mt++){const Dt=Et[mt];h(W[Dt]).then(ut=>{let{result:ct,errMsg:Tt}=ut;mt===zt-1&&(Y.current[Ot]=!1),typeof P=="function"&&(ct=P(ct)||ct),p.current[Dt]={...ct,pending:!1},Tt===!1&&g({...p.current})}).catch(ut=>{throw mt===zt-1&&(Y.current[Ot]=!1),p.current[Dt]={error:ut,pending:!1},g({...p.current}),ut})}}},[]);return[w,q,M]},X=l=>Object.keys(l).length,yt=l=>{const{Comp:h,restResolve:w,loadPromise:g,params:p,children:Y}=l,[M,q]=D(),[W,P]=D();return(0,N.useEffect)(()=>{X(w)&&q(w),X(g)&&P(g)},[w,g]),(0,N.useEffect)(()=>{const gt=X(M);gt&&gt===X(w)&&p.store.setState(M)},[M]),(0,$t.jsx)(h,{...p,...M,...W,children:Y})},ht=l=>l===!1?null:H(l)?l:kt(l)?(0,$t.jsx)(l,{}):(0,$t.jsx)(y,{}),at=({Loading:l,ErrorBoundary:h,loadedComp:w})=>{const g=(0,$t.jsx)(N.Suspense,{fallback:ht(l),children:w});return h===!1?g:kt(h)?(0,$t.jsx)(h,{children:g}):(0,$t.jsx)(Ae,{children:g})},Nt=({Comp:l,routerProps:h,children:w})=>{const{params:g,...p}=h,{loading:Y,errorBoundary:M,...q}=g,W=(0,$t.jsx)(yt,{Comp:l,...p,params:q,children:w});return at({Loading:Y,ErrorBoundary:M,loadedComp:W})},pe={},Pe=(l,h,w,g)=>Ft(w)?w.then(p=>Nt({Comp:l,routerProps:h,children:p.default??p})):Nt({Comp:l,routerProps:h,children:w}),Ze=(l,h,w)=>{const g={},p={};return V(l)?(Object.keys(l).map(Y=>{const M=h.getState(Y);M==null?p[Y]=l[Y](w):g[Y]=M}),{cachedResolve:g,restResolve:p}):{cachedResolve:g,restResolve:p}},me=(l,h)=>{if(!V(l))return{};const w={};return Object.keys(l).map(g=>w[g]=l[g](h)),w},ar=l=>{const{current:h,menu:w,...g}=l,p=h.map(q=>{const{component:W,resolve:P,loadData:gt,loading:Et,errorBoundary:Ot,icon:mt,...zt}=q;return zt}),Y=[...h].filter(q=>q.component),M=(q=0)=>{if(!Y.length)return null;const W=Y.shift(),{component:P,resolve:gt,loadData:Et,icon:Ot,key:mt,...zt}=W;if(typeof P=="function"||Ft(P)){const Dt=zt.path;let ut=pe[Dt];const{cachedResolve:ct,restResolve:Tt}=Ze(gt,g.store,zt),Kt={loadPromise:me(Et,zt),restResolve:Tt,params:{current:p,...g,...zt,...ct}},ie=M(q+1);if(ut)return Pe(ut,Kt,ie,Dt);try{ut=P(),ut=H(ut)?P:ut}catch{ut=P}return Ft(ut)?ut.then(ce=>(ut=ce.default??ce,pe[Dt]=ut,Pe(ut,Kt,ie,Dt))):(pe[Dt]=ut,Pe(ut,Kt,ie,Dt))}return typeof P=="string"?nr(P):P};return M()},vr=l=>{const[h,w]=(0,N.useState)(l),[g,p]=(0,N.useState)(),[Y,M]=(0,N.useState)(),q=(0,N.useRef)(),W=(0,N.useRef)(),P=(0,N.useRef)(),gt=(0,N.useRef)(),Et=()=>{typeof q.current=="function"&&(q.current({cancel:O.cancelMsg}),q.current=null)},Ot=(0,N.useCallback)(ct=>{typeof ct=="function"?w(Tt=>({...Tt,...ct(Tt)})):V(ct)&&w(Tt=>({...Tt,...ct}))},[]),mt=(ct,Tt="pushState")=>{const{basepath:Kt,browserRouter:ie}=gt.current,ce=P.current,{path:xe,params:He}=Vr(ct,Kt,ie,ce);xe!==ce&&ut({inputPath:xe,inputParams:He},()=>history[Tt](ct?.state,"",xe))},zt=(0,N.useCallback)(ct=>mt(ct),[]),Dt=(0,N.useCallback)(ct=>mt(ct,"replaceState"),[]),ut=(0,N.useCallback)(({inputPath:ct="",inputParams:Tt={}},Kt)=>{const ie=+new Date,{browserRouter:ce,childKey:xe,idKey:He,title:Fe,routers:Oe,beforeRender:lr,afterRender:Or,basepath:Le,allowedNotFound:ke,...Xr}=gt.current;if(!ct){const{path:ue,params:Ue}=Qe(ce);ct=ue,Tt={...Tt,...Ue}}const Dr=P.current;new Promise((ue,Ue)=>{Oe?.length||Ue("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),ct!==P.current&&typeof lr=="function"?lr({path:ct,params:Tt,prevPath:Dr},ue,Ue):ue()}).then(ue=>{if(ue===!1)return;const Ue=ue?.path;if(Ue&&_t(Le,Ue,ce)!==ct){Dt(ue);return}W.current=W.current??ct;const{redirect:ye,current:wr,menu:Tr}=Ut(wt(Oe),ct.split("?")[0],Tt,xe,He);if(ye){if(ke&&ye===_&&(typeof ke=="boolean"||typeof ke=="string"&&tr(W.current,ke)||B(ke)&&ke.find(sr=>tr(W.current,sr))))return;if(B(ye)){console.error(`\u522B\u95F9\uFF0C[${[ct,...ye].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return ye===_?Dt({path:ye}):zt({path:ye,exact:!0})}Kt?.(),ct?.split("?")[0]!==P.current?.split("?")[0]&&K(),de(wr,Fe);const qr={eventBus:or,store:mr,useStore:ne,...Xr,updateRouter:Ot,emitRouter:he.subscribe,router:{push:zt,replace:Dt},current:wr,menu:Tr,inputPath:W.current,prevPath:Dr,basepath:Le,title:Fe,history:{...C,goBack:sr=>zt({...sr,path:Dr})}};he.setState({...qr,browserRouter:ce});const Xe=ar(qr);if(P.current=ct,W.current=null,Et(),Ft(Xe)){const{promiseFn:sr,cancelFn:qe}=It(Xe,{delay:O.delay,msg:{timeout:O.timeoutMsg}});return q.current=qe,M(!0),sr.then(Re=>{q.current=null;const{result:Ke,errMsg:kr}=Re,Ce=kr===!1?Ke:kr?.timeout?Mt({error:{errMsg:`${ct} ${kr.timeout}`}}):null;Ce&&(M(!1),Ye(Or,wr.slice(-1)[0],ie),p(Ce))}).catch(Re=>{throw q.current=null,M(!1),Ye(Or,wr.slice(-1)[0],ie),p(Mt({error:Re})),Re})}Ye(Or,wr.slice(-1)[0],ie),p(Xe)}).catch(ue=>{throw p(Mt({error:ue})),ue})},[]);return(0,N.useEffect)(()=>{const{childKey:ct="children",idKey:Tt="path",browserRouter:Kt=!1,routers:ie=[],basepath:ce="",exact:xe=!1,inputPath:He="",inputParams:Fe={},...Oe}=h,lr=st(ce),Or=qt(wt(ie),Kt,ct,Tt,lr,xe);gt.current={...Oe,childKey:ct,idKey:Tt,browserRouter:Kt,routers:Or,basepath:lr};const Le=Kt?"popstate":"hashchange",ke=()=>ut({});return ut({inputPath:He,inputParams:Fe}),rr.on(zt),Te.on(Dt),window.addEventListener(Le,ke,!1),()=>{Et(),rr.off(zt),Te.off(Dt),window.removeEventListener(Le,ke,!1)}},[h]),{updateRouter:Ot,output:g,loading:Y}},_e=l=>{const{to:h,onClick:w,preventDefault:g,stopPropagation:p=!0,exact:Y=!0,target:M,...q}=l,W=()=>{const P=typeof h=="string"?{exact:Y,path:h}:{exact:Y,...h};rr.emit(P)};return P=>{if(P.preventDefault(),p&&P.stopPropagation(),!q?.disabled){if(!g){if(M){const{browserRouter:gt}=he.getState(),Et=typeof h=="string"?h:h?.path??"",Ot=le(h?.query),mt=gt||Et.indexOf("#/")>-1||Q(Et);window?.open(`${mt?"":"#"}${Et}${Ot}`,M);return}W()}typeof w=="function"&&w()}}};var ve=pt(267),we={};we.styleTagTransform=_r(),we.setAttributes=$r(),we.insert=Sr().bind(null,"head"),we.domAPI=Se(),we.insertStyleElement=Ve();var co=ge()(ve.Z,we);const Me=ve.Z&&ve.Z.locals?ve.Z.locals:void 0,Be=l=>{if(!l)return Me.link;const h=l.trim().split(" ").filter(Boolean),w=h.find(g=>g==="active")?[Me.active]:[];return[Me.link,...w,...h].join(" ")},no=l=>{const{to:h,onClick:w,preventDefault:g,stopPropagation:p,exact:Y,target:M,className:q,...W}=l;return(0,$t.jsx)("span",{onClick:_e(l),className:Be(q),...W})},Fr=()=>{const[l,h]=(0,N.useState)(he.getState());return(0,N.useEffect)(()=>he.subscribe(w=>h(w)),[]),l},Hr=he.getState,Ur=he.subscribe})();var dt=A.rU,jt=A.cb,Yr=A.Bv,Vt=A.yj,Ht=A.tv},8124:function(Wr,St,re){var Bt;re.d(St,{Nr:function(){return N},PQ:function(){return $t},Vd:function(){return Ht},Wy:function(){return B},fH:function(){return dt},xd:function(){return Mt}});var u=re(7378),ze={837:(k,Lt,Rt)=>{var Wt,ae=Rt(810),L=Symbol.for("react.element"),it=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,S=ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function E(F,O,_){var C,U={},xt=null,Ct=null;_!==void 0&&(xt=""+_),O.key!==void 0&&(xt=""+O.key),O.ref!==void 0&&(Ct=O.ref);for(C in O)c.call(O,C)&&!x.hasOwnProperty(C)&&(U[C]=O[C]);if(F&&F.defaultProps)for(C in O=F.defaultProps,O)U[C]===void 0&&(U[C]=O[C]);return{$$typeof:L,type:F,key:xt,ref:Ct,props:U,_owner:S.current}}Wt=it,Lt.jsx=E,Wt=E},322:(k,Lt,Rt)=>{k.exports=Rt(837)},810:k=>{var Lt=Wt=>{var ae={};return pt.d(ae,Wt),ae},Rt=Wt=>()=>Wt;k.exports=Bt||(Bt=re.t(u,2))}},De={};function pt(k){var Lt=De[k];if(Lt!==void 0)return Lt.exports;var Rt=De[k]={exports:{}};return ze[k](Rt,Rt.exports,pt),Rt.exports}pt.d=(k,Lt)=>{for(var Rt in Lt)pt.o(Lt,Rt)&&!pt.o(k,Rt)&&Object.defineProperty(k,Rt,{enumerable:!0,get:Lt[Rt]})},pt.o=(k,Lt)=>Object.prototype.hasOwnProperty.call(k,Lt);var A={};(()=>{pt.d(A,{fH:()=>Lt,r5:()=>S,Nd:()=>O,KY:()=>c,Vd:()=>U,Nr:()=>Ct,D:()=>Xt,Wy:()=>Ye,zX:()=>Vr,Cd:()=>Ut,Yz:()=>tr,D9:()=>hr,cb:()=>Qe,vO:()=>er,Rx:()=>Mr,OH:()=>Ne,oR:()=>Se,rE:()=>br,PQ:()=>be,rf:()=>Q,xd:()=>fe});var k=pt(810);const Lt=s=>(b,y)=>{const[$,D]=(0,k.useState)(()=>{const at=s?.getState(b);return at!==void 0?at:(y!==void 0&&s?.setState({[b]:y},!0),y)}),X=(0,k.useCallback)(at=>s?.setState({[b]:typeof at=="function"?at(s?.getState(b)):at}),[]),yt=(0,k.useCallback)(at=>s?.subscribe(b,at),[]),ht=(0,k.useCallback)((at=at)=>s?.clean(at),[]);return(0,k.useEffect)(()=>{s?.subscribe(b,at=>D(at))},[]),[$,X,yt,ht]},Rt=s=>Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),Wt=s=>Rt(s)==="object",ae=s=>Rt(s)==="function",L=s=>Rt(s)==="promise"||Wt(s)&&ae(s.then),it=(s,b=12e4,y="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!L(s))return{};let $=null,D=null;return{promiseFn:new Promise((X,yt)=>{$=(ht="canceled")=>{clearTimeout(D),X({canceled:!0,errMsg:ht})},b&&(b=typeof b!="number"?12e4:b,D=setTimeout(()=>$(y),b)),s.then(ht=>{clearTimeout(D),X({result:ht,errMsg:!1})}).catch(ht=>{clearTimeout(D),yt(ht)})}),cancelFn:$}},c=()=>{const s=(0,k.useRef)([]);return(0,k.useEffect)(()=>()=>{s.current.map(b=>b.cancelFn()),s.current=[]},[]),{cancelablePromise:(0,k.useCallback)((b,y=!0)=>{const $=it(b,y);return s.current.indexOf($)===-1&&s.current.push($),$.promiseFn},[])}},S=(s={})=>{const{cancelablePromise:b}=c(),[y,$]=(0,k.useState)(s),D=(0,k.useRef)({}),X=(0,k.useRef)({}),yt=(0,k.useCallback)((at=null)=>{Array.isArray(at)&&at.length?at.map(Nt=>D.current[Nt]=s[Nt]):D.current=s},[]),ht=(0,k.useCallback)((at,Nt,pe=!1)=>{const Pe=Object.keys(at),Ze=JSON.stringify(Pe.sort());if(!X.current[Ze]){X.current[Ze]=!0,pe&&yt(Array.isArray(pe)?pe:Pe),Pe.map(me=>{D.current[me]||(D.current[me]={}),D.current[me].pending=!0}),$({...D.current});for(let me=0,ar=Pe.length;me<ar;me++){const vr=Pe[me];b(at[vr]).then(_e=>{let{result:ve,errMsg:we}=_e;me===ar-1&&(X.current[Ze]=!1),typeof Nt=="function"&&(ve=Nt(ve)||ve),D.current[vr]={...ve,pending:!1},we===!1&&$({...D.current})}).catch(_e=>{throw me===ar-1&&(X.current[Ze]=!1),D.current[vr]={error:_e,pending:!1},$({...D.current}),_e})}}},[]);return[y,ht,yt]},x=s=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(s),E=s=>new Promise((b,y)=>{const $=new FileReader;$.readAsDataURL(s),$.addEventListener("load",()=>b($.result)),$.addEventListener("error",D=>y(D))}),F=async s=>{if(!x(s))return s;const b=await(await fetch(s)).blob();return await E(b)},O=s=>{const[b,y]=(0,k.useState)(s);return(0,k.useEffect)(()=>{(async $=>{const D=await F($);y(D)})(s)},[]),b},_=(s,b)=>Object.prototype.hasOwnProperty.call(s??{},b),C=s=>_(s,"current"),U=(s,b,y="click")=>{(0,k.useEffect)(()=>{const $=X=>{const yt=C(s)?s.current:s;yt?.contains&&!yt.contains(X.target)&&b(X)},D=typeof y=="string"?[y]:y;return D.map(X=>{document.addEventListener(X,$,!1)}),()=>{D.map(X=>{document.removeEventListener(X,$,!1)})}},[s,b,y])},xt=(s=()=>{},b=60)=>{let y=null;return function(...$){clearTimeout(y),y=setTimeout(()=>s.apply(this,$),b)}},Ct=(s,b=60)=>(0,k.useMemo)(()=>xt(s,b),[b]),Ut=()=>{const s=(0,k.useRef)(!0);return s.current?(s.current=!1,!0):!1},Q=(s,b=[])=>{const y=Ut();(0,k.useEffect)(()=>{if(!y)return s()},b)},Xt=(s,b=450)=>{const[y,$]=(0,k.useState)(s);return Q(()=>{let D;return s||b===0?$(s):D=setTimeout(()=>$(s),b),()=>D&&clearTimeout(D)},[s]),[y,$]},_t=()=>![typeof window,typeof document].includes("undefined"),qt=s=>Rt(s).indexOf("element")>-1,le=(s=null)=>_t()?qt(s)?{width:s.clientWidth,height:s.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},oe=(s,b)=>{const y=[],$=s.children??[];for(let D=0,X=$.length;D<X;D++){const yt=$[D];yt.className.indexOf(b)>-1&&y.push(yt)}return y.length===0?null:y.length===1?y[0]:y},K=(s,b)=>{getComputedStyle(s).position==="static"&&(s.style.position="relative");const y=document.createElement("object");return y.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),y.setAttribute("class","resize-sensor"),y.onload=()=>{y.contentDocument.defaultView.addEventListener("resize",b,!1),b()},y.type="text/html",s.appendChild(y),y.data="about:blank",y},de=(s,b=60)=>{if(!_t())return;s=C(s)?s.current:s??document.body;let y=oe(s,"resize-sensor"),$=[];const D=xt(()=>$.map(at=>at(s)),b),X=at=>{oe(s,"resize-sensor")||(y=K(s,D)),$.indexOf(at)===-1&&$.push(at)},yt=at=>{const Nt=$.indexOf(at);Nt!==-1&&$.splice(Nt,1),$.length===0&&y&&ht()},ht=()=>{y&&y.parentNode&&(y.contentDocument&&y.contentDocument.defaultView.removeEventListener("resize",D,!1),y.parentNode.removeChild(y),y=void 0,$=[])};return{element:s,bind:X,unbind:yt,destroy:ht}},Qe=(s={})=>{const b=(0,k.useRef)(0),[y,$]=(0,k.useState)(s),D=(0,k.useCallback)(X=>{cancelAnimationFrame(b.current),b.current=requestAnimationFrame(()=>$(X))},[]);return(0,k.useEffect)(()=>()=>cancelAnimationFrame(b.current),[]),[y,D]},Ye=(s=null,b=60)=>{const y=C(s)?s.current:s,{bind:$,destroy:D}=de(y,b),[X,yt]=Qe(le(y));return(0,k.useEffect)(()=>($(()=>y&&yt(le(y))),()=>D()),[y]),X},Vr=s=>{const b=(0,k.useRef)(null);return(0,k.useLayoutEffect)(()=>{b.current=s}),(0,k.useCallback)(b.current,[])},tr=(s,b)=>{const y=(0,k.useRef)();(0,k.useEffect)(()=>{y.current=s},[s]),(0,k.useEffect)(()=>{if(b){const $=setInterval(()=>y.current(),b);return()=>clearInterval($)}},[b])},hr=s=>{const b=(0,k.useRef)();return(0,k.useEffect)(()=>{b.current=s},[s]),b.current},fr=(s=null)=>_t()?qt(s)?{left:s.scrollLeft,top:s.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0},er=(s=null)=>{const[b,y]=Qe(fr(s));return(0,k.useEffect)(()=>{const $=()=>y(fr(s)),D=qt(s)?s:window;return D.addEventListener("scroll",$,{capture:!1,passive:!0}),()=>D.removeEventListener("scroll",$)},[s]),b},pr=s=>Rt(s)==="array",se=s=>pr(s)&&!!s.length,rr=(s,b,y=[],$=!1,D=null)=>se(s)?b?(y=typeof y=="string"?y.split(","):y,s.filter(X=>(y=y.length>0?y:Object.keys(X),y.filter(yt=>{const ht=X[yt];if(ht==null)return!1;if($)return ht===b;const at=new RegExp(b,"gi"),Nt=ht.toString().match(at);return Nt&&D&&(X[yt]=D(ht.toString().replace(at,`<span style="background-color:yellow">${Nt[0]}</span>`),{display:"inline-block"})),Nt}).length))):s:[],Te=(s,b="id")=>{if(!se(s))return s;const y=[],$=[];return s.map(D=>{const X=Wt(D)?D[b]:D;$.includes(X)||($.push(X),y.push(D))}),y},he=s=>s?.$$typeof&&typeof s.$$typeof=="symbol"&&s.$$typeof.description==="react.element",or=s=>s?.__v_isVNode,mr=s=>{if(!pr(s)&&!Wt(s))return s;const b=pr(s)?[]:{};for(const y in s)if(_(s,y)){const $=s[y];b[y]=he($)||or($)||typeof $!="object"?$:$!==s?mr($):"cyclic"}else Object.setPrototypeOf(b,{[y]:s[y]});return b},ne=mr,zr=s=>(b,y="children")=>{if(!Array.isArray(b))return b;const $=ne(b),D=X=>{const yt=[];return X.map(ht=>{if(se(ht[y])){const at=D(ht[y])||[];ht[y]=at,at.length>0&&yt.push(ht)}}),s(X,yt)};return D($)},nr=(s,b,y,$="name",D="id",X="children",yt=!1)=>zr((ht,at)=>Te([...rr(ht,b,$,yt,y),...at],D))(s,X);var Zr=pt(322);const xr=(s,b)=>(0,Zr.jsx)("div",{dangerouslySetInnerHTML:{__html:s},...b}),Mr=(s=null,b=xr)=>{const[y,$]=(0,k.useState)(s),D=(0,k.useCallback)((...X)=>{const[yt,ht,...at]=X;if(!ht)$(null);else{X=[yt,ht,b,...at];const Nt=nr(...X);$(Nt)}},[]);return[y,D]},Ne=s=>{const[b,y]=(0,k.useState)(s);return(0,k.useEffect)(()=>y(s),[s]),[b,y]},Ae=()=>{const s={};return{on:(b,y)=>{s[b]||(s[b]=[]),s[b].indexOf(y)===-1&&s[b].push(y)},emit:(b,y)=>{s[b]&&s[b].map($=>$(y))},off:(b,y=null)=>{if(s[b]){if(typeof y!="function")return delete s[b];const $=s[b].indexOf(y);$>-1&&(s[b].splice($,1),s[b].length||delete s[b])}}}},ir=s=>{const b={};for(let y in s)_(s,y)||(b[y]=s[y]);return b},ge=(s,b)=>{if(!Wt(s))return b;if(!Wt(b))return s;const y={...ir(s),...ir(b)},$={...s,...b};return Object.keys(y).map(D=>{Object.setPrototypeOf($,{[D]:y[D]})}),$},yr=(()=>{const{on:s,emit:b,off:y}=Ae(),$={};return{getState:D=>ne($[D]),setState:(D,X=!1)=>{if(typeof D=="function"&&(D=D(ne($))),!Wt(D))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const yt=ne(D);Object.keys(yt).map(ht=>{const at=$[ht],Nt=yt[ht],pe=Wt(Nt)&&Wt(at)?ge(at,Nt):Nt;!X&&b(ht,pe),$[ht]=pe})},subscribe:(D,X)=>(s(D,X),()=>y(D,X)),unsubscribe:y,clean:D=>{typeof D=="string"?$[D]=void 0:Array.isArray(D)?D.map(X=>$[X]=void 0):Object.keys($).map(X=>$[X]=void 0)}}})(),Se=Lt(yr),$e=s=>s<10?"0"+s:s,Sr=(s=new Date)=>{const b=new Date(s),y=b.getFullYear(),$=b.getDay(),D=$e(b.getMonth()+1),X=$e(b.getDate()),yt=$e(b.getHours()),ht=$e(b.getMinutes()),at=$e(b.getSeconds());return[y,D,X,yt,ht,at,$]},gr=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],$r=(s,b,y="-")=>s.replace(new RegExp(y,"g"),b),Ie=(s=new Date,b=["-","-"," ",":",":",""],y=gr)=>{const $=Sr(s);let D="";return b.map((X,yt)=>D+=(yt===6?y[$[yt]]:$[yt]??"")+X),D},Ve=()=>Ie(new Date,["-","-"," ",":",":"," ",""]),br=()=>{const[s,b]=(0,k.useState)("");return tr(()=>{b(Ve())},1e3),[s]},_r=s=>++s,be=()=>{const[,s]=(0,k.useState)(0);return(0,k.useCallback)(()=>s(_r),[])},fe=()=>{const[s,b]=Qe(le());return(0,k.useEffect)(()=>{const y=()=>b(le());return window.addEventListener("resize",y,!1),()=>window.removeEventListener("resize",y,!1)},[]),s}})();var dt=A.fH,jt=A.r5,Yr=A.Nd,Vt=A.KY,Ht=A.Vd,N=A.Nr,Z=A.D,B=A.Wy,V=A.zX,H=A.Cd,tt=A.Yz,J=A.D9,rt=A.cb,wt=A.vO,kt=A.Rx,Ft=A.OH,It=A.oR,st=A.rE,$t=A.PQ,Zt=A.rf,Mt=A.xd},1090:function(Wr,St,re){re.d(St,{A_F:function(){return Ki},JaC:function(){return Ni},MTn:function(){return Bi},NA2:function(){return Mi},PTJ:function(){return Vi},Vcq:function(){return Gi},_O2:function(){return ta},_iG:function(){return Li},afD:function(){return Yi},azd:function(){return Qi},eyl:function(){return Zi},f9u:function(){return ra},fHt:function(){return Pi},gVz:function(){return qi},jg2:function(){return Xi},k$y:function(){return ea},mrB:function(){return Wi},muM:function(){return Ai},qg7:function(){return Ri},rWO:function(){return Hi},tOc:function(){return Ji},vQq:function(){return Ii},ywV:function(){return Ui}});var Bt={};(function(){Bt.d=function(t,e){for(var r in e)Bt.o(e,r)&&!Bt.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),function(){Bt.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}();var u={};Bt.d(u,{NzM:function(){return De},wBC:function(){return N},O39:function(){return B},cnu:function(){return J},E4D:function(){return wt},TRp:function(){return Ft},zI1:function(){return st},Ufj:function(){return Zt},GxO:function(){return Rt},cu2:function(){return ae},BcS:function(){return it},lPd:function(){return xt},dC1:function(){return Ut},$L2:function(){return Xt},Vji:function(){return S},YxP:function(){return C},UhT:function(){return se},JaC:function(){return Te},o4B:function(){return ne},Hlr:function(){return gr},muM:function(){return D},OiV:function(){return yr},KTn:function(){return yt},lwL:function(){return at},d9v:function(){return y},yCD:function(){return pe},qCK:function(){return Ze},vQq:function(){return ar},fHt:function(){return _e},azq:function(){return Me},dSY:function(){return g},MTn:function(){return gt},RYO:function(){return we},WAo:function(){return Ot},GVc:function(){return Ie},Emy:function(){return zt},v9O:function(){return ut},DsO:function(){return Tt},_lj:function(){return ie},vO6:function(){return xe},xDX:function(){return ue},hf3:function(){return Jr},ip7:function(){return Do},uYe:function(){return Y},DgJ:function(){return br},rae:function(){return po},YBu:function(){return Qr},_iG:function(){return go},hXT:function(){return Ir},gQq:function(){return wo},D_D:function(){return to},$nD:function(){return ko},dtG:function(){return Eo},Y0R:function(){return Er},qg7:function(){return Ro},Xxf:function(){return jo},tSM:function(){return i},Few:function(){return f},xHg:function(){return R},aoj:function(){return ot},Dlm:function(){return Jt},mrB:function(){return Yt},dKu:function(){return Ge},v1d:function(){return io},afD:function(){return ur},Lz5:function(){return an},xZX:function(){return Zo},G_1:function(){return zo},osI:function(){return Mo},PTJ:function(){return cn},Qfx:function(){return un},bti:function(){return Tr},XBv:function(){return dn},eyl:function(){return hn},y35:function(){return fn},hKD:function(){return nt},BWC:function(){return Ho},oLi:function(){return A},NA2:function(){return xn},S3Y:function(){return ye},pvT:function(){return Uo},m2f:function(){return oe},rWO:function(){return yn},A$w:function(){return gn},kJL:function(){return jt},S9U:function(){return ir},dYC:function(){return Xr},jUY:function(){return k},J_U:function(){return bn},kKo:function(){return H},VZO:function(){return vn},mf2:function(){return Ne},w1q:function(){return wn},Kn2:function(){return E},ncl:function(){return kn},LWC:function(){return be},dqb:function(){return de},Kjn:function(){return Cn},TaN:function(){return So},CBv:function(){return Le},rTd:function(){return Ar},B73:function(){return En},SSA:function(){return s},CLv:function(){return jn},F$z:function(){return zn},XT_:function(){return Xo},omS:function(){return Sn},poV:function(){return $n},VXY:function(){return _n},xsP:function(){return Fn},HPs:function(){return On},TSy:function(){return Dn},B5o:function(){return $o},u1A:function(){return Tn},WAY:function(){return _o},I8J:function(){return W},ywV:function(){return Bn},bEN:function(){return Ln},$45:function(){return Rn},TUk:function(){return Wn},T7B:function(){return O},CEd:function(){return Yn},IHq:function(){return Vn},SkG:function(){return Jo},Smz:function(){return xr},nL5:function(){return nr},ON:function(){return Hn},eiS:function(){return Un},Frc:function(){return Xn},z5J:function(){return qn},scT:function(){return Kn},hd2:function(){return Oo},AnA:function(){return Jn},kYX:function(){return Gn},yZP:function(){return Qn},IVd:function(){return Fo},SIr:function(){return ei},jg2:function(){return ri},gVz:function(){return oi},puc:function(){return ai},Azz:function(){return li},X5u:function(){return Ye},dPh:function(){return si},SMZ:function(){return qt},kro:function(){return Vt},nPi:function(){return ci},US:function(){return ui},A_F:function(){return qe},_vH:function(){return kr},gmH:function(){return Ke},DYV:function(){return di},qi2:function(){return hi},tOc:function(){return fi},hau:function(){return mi},FaZ:function(){return Xe},uyF:function(){return xi},Vcq:function(){return yi},XKW:function(){return gi},azd:function(){return or},P2K:function(){return bi},XBe:function(){return Ci},JZ7:function(){return rn},ABi:function(){return Fe},ogC:function(){return Ei},_O2:function(){return j},P0C:function(){return ji},Uo5:function(){return zi},Two:function(){return vo},tYQ:function(){return Si},tVn:function(){return h},pHy:function(){return $i},k$y:function(){return lr},yfi:function(){return _i},fl8:function(){return Fi},f9u:function(){return Oi},ZV1:function(){return Di},Lgs:function(){return Ti}});var De=(t,e="key",r="value")=>{const o={};return(t||[]).map(n=>o[n[e]]=n[r]),o},A=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),jt=t=>A(t)==="array",Vt=t=>(e,r,o="id",n="children")=>{if(!jt(e))return null;const d=(m,z="")=>{for(let T=0,G=m.length;T<G;T++){const ft=m[T];if(ft[o]===r)return t(m,T,z)||m[T];if(jt(ft[n])){const te=d(ft[n],ft[o]);if(te)return te}}};return d(e),e},N=(t,e,r,o="id",n="children")=>Vt((d,m)=>d.splice(m,0,r))(t,e,o,n),B=(t,e,r,o,n="id",d="children")=>Vt((m,z)=>{const T=m[z];T.children?T.children.splice(o,0,r):T.children=[r]})(t,e,n,d),H=t=>A(t).indexOf("element")>-1,J=(t,e="")=>{if(!H(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" "),n=[...new Set([...r,...o])];t.className=n.join(" ")},wt=(t,e=new Date)=>{const r=new Date(e);return r.setDate(r.getDate()+t),r},Ft=(t,e=new Date)=>{const r=new Date(e);return r.setHours(r.getHours()+t),r},st=(t,e=new Date)=>{const r=new Date(e);return r.setMonth(r.getMonth()+t),r},Zt=(t,e,r,o="id",n="children")=>Vt((d,m)=>{const z=d[m];return z[n]=[...z[n]||[],...r],z})(t,e,o,n),k=()=>![typeof window,typeof document].includes("undefined"),Rt=t=>{if(k())return new Promise((e,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===t))e();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${t}'`)),o.onload=e,o.src=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},ae=(t,e)=>{if(k())return e?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===e))r();else{const n=document.createElement("style");n.onerror=d=>o(new Error(`Failed to load '${e}' style`)),n.onload=r,n.innerHTML=t,n.setAttribute("huxy-css-hash",e),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===t))r();else{const n=document.createElement("link");n.onerror=d=>o(new Error(`Failed to load '${t}'`)),n.onload=r,n.href=t,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},it=(t,e=new Date)=>{const r=new Date(e);return r.setFullYear(r.getFullYear()+t),r},S=(t=[],e="name")=>{const r={};return t.map(({[e]:o,value:n})=>r[o]=n),r},E=t=>A(t)==="object";const F=(t={})=>{let e="";return Object.keys(t).map(r=>{const o=t[r];e=e&&`${e}, `,E(o)?e+=`${r}=${F(o)}`:Array.isArray(o)?e+=`${r}=${C(o)}`:e+=`${r}=${o}`}),`{${e}}`};var O=F;const _=(t=[])=>{let e="";return t.map(r=>{e=e&&`${e}, `,E(r)?e+=O(r):Array.isArray(r)?e+=_(r):e+=`${r}`}),`[${e}]`};var C=_,xt=t=>(e,r="id",o="children",n=-1)=>{if(!jt(e))return e;const d={},m=e.map(z=>z[r]);return[...e].map(z=>{const T={...z},{[r]:G}=T;if(G!=null){let{parentId:ft}=T;ft==null&&(ft=t?.(T)??n,T.parentId=ft),d[G]||(d[G]=[]),T[o]=d[G],d[ft]||(d[ft]=[]),d[n]||(d[n]=[]),m.includes(ft)?d[ft].push(T):d[n].push(T)}}),d[n]},Ut=(t,e="id",r="children",o=-1)=>xt(n=>n[e].match(/\S+(?=-\S+)/)?.[0]||o)(t,e,r,o),Xt=(t,e="path",r="children",o=null)=>xt(n=>{const d=n[e],m=d.match(/.*\/[^:/]+\/:[^/]+/);return m?m[0].match(/(.*)\/:+/)?.[1]??o:d.match(/(.*)\/+/)?.[1]??o})(t,e,r,o),qt=()=>k()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),oe=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),de=t=>oe(t,"current"),Ye=(t=0,e)=>{k()&&(e=de(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},tr=`.huxy-totop-bar {
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
}`;const hr=()=>document.getElementsByClassName("huxy-totop-bar")[0],fr=t=>{if(hr())return;const e=document.createElement("div");e.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=t,e.appendChild(r),e.appendChild(o),document.body.appendChild(e),e.addEventListener("click",()=>Ye(),!1),e},er=()=>{const t=hr();t&&document.body.removeChild(t)};var se=(t=0,e="\u8FD4\u56DE\u9876\u90E8")=>{if(!k())return;ae(tr,"huxy-backtop-css");const r=()=>{qt()>t?fr(e):er()};return(()=>(document.addEventListener("scroll",r,!1),()=>{er(),document.removeEventListener("scroll",r,!1)}))()},Te=(t=0,e=2)=>parseInt(String(t),e),or=(t=0,e=2)=>Number(t).toString(e),ne=(t=0,e=2,r=16)=>or(Te(t,e),r),nr=t=>{if(!E(t))return"";const e=[];return Object.keys(t).map((r,o)=>{const n=o>0?"&":"?";e.push(`${n}${r}=${t[r]}`)}),e.join("")},xr=t=>{if(!E(t))return{};const e=new FormData;return Object.keys(t).map(r=>{t[r]!=null&&e.append(r,t[r])}),e},Ne=t=>A(t)==="function",ir=t=>A(t)==="promise"||E(t)&&Ne(t.then),yr=(t,e=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!ir(t))return{};let o=null,n=null;return{promiseFn:new Promise((d,m)=>{o=(z="canceled")=>{clearTimeout(n),d({canceled:!0,errMsg:z})},e&&(e=typeof e!="number"?12e4:e,n=setTimeout(()=>o(r),e)),t.then(z=>{clearTimeout(n),d({result:z,errMsg:!1})}).catch(z=>{clearTimeout(n),m(z)})}),cancelFn:o}};const Se=[{type:"data",headers:{"Content-Type":"application/json"},body:t=>JSON.stringify(t)},{type:"formData",body:t=>xr(t)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t=>nr(t).slice(1)}],$e=(t,e)=>{const r=["data","form","formData","params"].includes(e),o=Object.keys(t).filter(n=>t[n]);if(o.length===1){const n=o[0],d=r?e:n;return d==="params"?{query:t[n]}:{result:t[n],type:d}}else if(o.length>1){const n=o.filter(m=>m!=="params").slice(-1)[0],d=r?e:n;return d==="params"?{query:t.params||t[n]}:{query:t.params,result:t[n],type:d}}};var gr=(t,e)=>r=>(o,n={})=>{const{headers:d,dataType:m,data:z,formData:T,form:G,params:ft,...te}=n,ee={data:z,formData:T,form:G,params:ft};let Rr;const{query:dr,result:on,type:oa}=$e(ee,m)||{};if(!te.body&&on){const lo=Se.find(so=>so.type===oa);Rr=lo.headers,te.body=lo.body(on)}dr&&(o=`${o}${nr(dr)}`);const{promiseFn:na}=yr(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...Rr,...d},...te}),e);return na.then(({result:lo,errMsg:so})=>t(so?{status:408,statusText:so}:lo))},Ie=t=>{const e=[],r=o=>{if(o&&typeof o=="object"){if(e.indexOf(o)!==-1)return!0;e.push(o);let n=!1;for(let d in o)oe(o,d)&&r(o[d])&&(o[d]="cyclic",n=!0);return n}return!1};return r(t)&&t};const Ve=(t,e)=>{const r=A(t),o=A(e);if(r!==o)return!1;if(t==null||e==null)return t===e;if(["object","array"].indexOf(r)===-1)return t.toString()===e.toString();if(Object.keys(t).length!==Object.keys(e).length)return!1;if(Ie(t)&&Ie(e))return Ve(t,e);for(let n in e)if(oe(t,n)!==oe(e,n)||!Ve(t[n],e[n]))return!1;return!0};var br=Ve,be=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.element",s=t=>t?.__v_isVNode;const b=t=>{if(!jt(t)&&!E(t))return t;const e=jt(t)?[]:{};for(const r in t)if(oe(t,r)){const o=t[r];e[r]=be(o)||s(o)||typeof o!="object"?o:o!==t?b(o):"cyclic"}else Object.setPrototypeOf(e,{[r]:t[r]});return e};var y=b,D=(t=100)=>{const e=[];let r=-1;const o=d=>{const m=e.length,z=y(d);return br(z,e[m-1]?.data)?{index:r,length:m,data:e[r]?.data}:(e.push({data:z}),e.length>t&&e.shift(),r=e.length-1,{index:r,length:r+1,data:e[r].data})},n=(d=0)=>{const m=e.length;return r+=d,r=r<0?0:r>m-1?m-1:r,{index:r,length:m,data:y(e[r]?.data)}};return{record:o,cursor:n,jump:d=>(r=d,{index:r,length:e.length,data:y(e[r]?.data)}),undo:()=>n(-1),redo:()=>n(1),getList:()=>y(e),clean:()=>{e.length=0,r=-1}}},yt=(t,e,r)=>{if(!jt(t))return t;const o=t[e],n=t[r];return t.splice(e,1,n),t.splice(r,1,o),t},at=(t=[],e="name")=>{const r={};return t.map(o=>{r[o[e]]?r[o[e]].push(o):r[o[e]]=[o]}),r},pe=(t,e,r=".")=>{const o=(T,G)=>T.split(G),n=o(t,r),d=o(e,r),m=n.length;let z=0;for(let T=0;T<m;T++)if(n[T]<d[T]){z=m-T;break}return z},Ze=(...t)=>(...e)=>{const[...r]=t,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...e)},ar=t=>{if(!k())return;const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),e.select(),e.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(e)},_e=t=>(e,r)=>{const{getState:o,setState:n,subscribe:d,unsubscribe:m,clean:z}=t;return r!==void 0&&n({[e]:r},!0),{getState:()=>o(e),setState:(T,G)=>n({[e]:T},G),subscribe:T=>d(e,T),unsubscribe:()=>m(e),clean:()=>z(e)}},we=t=>({type:"TEXT_ELEMENT",props:{nodeValue:t}}),Me=(t,e,...r)=>({type:t,props:{...e,children:r.map(o=>typeof o=="object"?o:we(o))}});const Be=t=>t.startsWith("on"),no=t=>t!=="children"&&!Be(t),Fr=(t,e)=>r=>t[r]!==e[r],Hr=(t,e)=>r=>!(r in e),Ur=t=>{const e=Object.keys(t);return{eventProps:e.filter(Be),propertyProps:e.filter(no)}};var h=(t,e,r)=>{const{eventProps:o,propertyProps:n}=Ur(e),{eventProps:d,propertyProps:m}=Ur(r);o.filter(Hr(e,r)).map(z=>{const T=z.toLowerCase().slice(2);t.removeEventListener(T,e[z])}),n.filter(Hr(e,r)).map(z=>t[z]=""),m.filter(Fr(e,r)).map(z=>t[z]=r[z]),d.filter(Fr(e,r)).map(z=>{const T=z.toLowerCase().slice(2);t.addEventListener(T,r[z])})},g=t=>{if(!k())return;const e=t.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(t.type);return h(e,{},t.props),e},Y=()=>{const t={};return{on:(e,r)=>{t[e]||(t[e]=[]),t[e].indexOf(r)===-1&&t[e].push(r)},emit:(e,r)=>{t[e]&&t[e].map(o=>o(r))},off:(e,r=null)=>{if(t[e]){if(typeof r!="function")return delete t[e];const o=t[e].indexOf(r);o>-1&&(t[e].splice(o,1),t[e].length||delete t[e])}}}};const M=t=>{const e={};for(let r in t)oe(t,r)||(e[r]=t[r]);return e};var W=(t,e)=>{if(!E(t))return e;if(!E(e))return t;const r={...M(t),...M(e)},o={...t,...e};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},gt=()=>{const{on:t,emit:e,off:r}=Y(),o={};return{getState:n=>y(o[n]),setState:(n,d=!1)=>{if(typeof n=="function"&&(n=n(y(o))),!E(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const m=y(n);Object.keys(m).map(z=>{const T=o[z],G=m[z],ft=E(G)&&E(T)?W(T,G):G;!d&&e(z,ft),o[z]=ft})},subscribe:(n,d)=>(t(n,d),()=>r(n,d)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(d=>o[d]=void 0):Object.keys(o).map(d=>o[d]=void 0)}}},Ot=(t=()=>{},e=t.length)=>{const r=(...o)=>o.length>=e?t(...o):(...n)=>r(...o,...n);return r},zt=(t,e="-")=>t.split(e).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),ut=(t,e)=>{const r=t.split(","),o=r[0].match(/:(.*?);/)[1],n=atob(r[1]);let d=n.length;const m=new Uint8Array(d);for(;d--;)m[d]=n.charCodeAt(d);return new File([m],e??+new Date,{type:o})},Tt=(t=()=>{},e=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>t.apply(this,o),e)}},ie=(t,e,r="id",o="children")=>Vt((n,d)=>n.splice(d,1))(t,e,r,o),xe=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Fe=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():new Date().getTime(),lr=()=>{let t=Fe();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(e==="x"?r:r&3|8).toString(16)})},Le=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),Xr=t=>{if(typeof t!="string")return!1;const e=/^data:image\/([a-zA-Z0-9]+);base64,.+/i;return t.match(e)},ue=async(t,e,r)=>{if(!k())return;r=r||lr();const o=e?`${r}.${e}`:r,n=Le(t);if(n||Xr(t)){t=n?decodeURIComponent(t):t;const d=await fetch(t,{mode:"no-cors"}),m=d.headers.get("Content-Disposition"),z=m&&decodeURIComponent(m.split(";")[1].split("=")[1]);d.blob().then(T=>{const G=window.URL.createObjectURL(T),ft=document.createElement("a");ft.href=G,ft.download=z||o,ft.style.display="none",document.body.appendChild(ft),ft.click(),ft.parentNode.removeChild(ft),window.URL.revokeObjectURL(G)})}else{const d=new Blob([t]),m=window.URL.createObjectURL(d),z=document.createElement("a");z.href=m,z.download=o,z.style.display="none",document.body.appendChild(z),z.click(),z.parentNode.removeChild(z),window.URL.revokeObjectURL(m)}},ye=(t=null)=>k()?H(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Tr=t=>{if(k())return t=de(t)?t.current:t??document.body,t.getBoundingClientRect?.()},Xe=t=>{if(!k())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},qe=(t,e={},r=!1)=>{if(H(t)){if(r){let o="";Object.keys(e).map(n=>{o+=`${n}: ${e[n]};`}),t.style=o;return}Object.keys(e).map(o=>t.style.setProperty(o,e[o]))}};const Re=(t=350)=>new Promise(e=>setTimeout(e,t)),Ke=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);};var kr=Re,io=async(t,e=15)=>{if(!k())return;if(typeof t=="string"&&(t=Xe(t)),t=de(t)?t.current:t,!H(t))return{};const r=t.cloneNode(!0);qe(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await kr(e);const o=Tr(r);return t.parentNode.removeChild(r),o};const Kr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Cr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,uo=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";Kr.test(r)?t.setAttribute("class",r.replace(Cr,e)):t.setAttribute("class",`${r} ${e}`)},ho=async(t,e,r)=>{const{left:o,right:n,top:d,bottom:m}=Tr(t),{width:z,height:T}=ye(),{width:G,height:ft}=await io(e);if(n<0||m<0||o>z||d>T)return{};if(r==="vertical"){const te={left:o+"px",top:m+10+"px",right:"auto",bottom:"auto"};let ee="lt";o+G>z&&(te.left=n-G+"px",ee="rt"),m+10+ft>T&&(te.top=d-10-ft+"px",ee=ee==="lt"?"lb":"rb"),qe(e,te),uo(e,ee)}else{const te={left:n+10+"px",top:d+"px",right:"auto",bottom:"auto"};let ee="tl";n+10+G>z&&(te.left=o-10-G+"px",ee="tr"),d+ft>T&&(te.top=m-ft+"px",ee=ee==="tl"?"bl":"br"),qe(e,te),uo(e,ee)}};var Jr=(t,e,r="horizontal")=>{const o=Tt(ho),n=()=>o(t,e,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const d=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),qe(e,{left:"",top:"",right:"",bottom:""})};return ho(t,e,r),d},Do=(t,e,r,o="id",n="children")=>Vt((d,m)=>d[m]={...d[m],...r})(t,e,o,n),po=t=>t.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e);const mo=Y();var Qr=t=>{const{on:e,emit:r,off:o}=mo;return{on:n=>e(t,n),emit:n=>r(t,n),off:n=>o(t,n)}};const xo=120*1e3,yo=t=>t.json().then(e=>e);var go=(t=yo,e=xo)=>(r="get")=>gr(t)((r||"get").toUpperCase()),Ar=t=>jt(t)&&!!t.length,Ir=(t,e,r=[],o=!1,n=null)=>Ar(t)?e?(r=typeof r=="string"?r.split(","):r,t.filter(d=>(r=r.length>0?r:Object.keys(d),r.filter(m=>{const z=d[m];if(z==null)return!1;if(o)return z===e;const T=new RegExp(e,"gi"),G=z.toString().match(T);return G&&n&&(d[m]=n(z.toString().replace(T,`<span style="background-color:yellow">${G[0]}</span>`),{display:"inline-block"})),G}).length))):t:[],vo=(t,e="id")=>{if(!Ar(t))return t;const r=[],o=[];return t.map(n=>{const d=E(n)?n[e]:n;o.includes(d)||(o.push(d),r.push(n))}),r};const Io=t=>(e,r="children")=>{if(!Array.isArray(e))return e;const o=y(e),n=d=>{const m=[];return d.map(z=>{if(Ar(z[r])){const T=n(z[r])||[];z[r]=T,T.length>0&&m.push(z)}}),t(d,m)};return n(o)};var wo=(t,e,r,o="name",n="id",d="children",m=!1)=>Io((z,T)=>vo([...Ir(z,e,o,m,r),...T],n))(t,d),to=(t,e)=>{const r=[],o=t.children??[];for(let n=0,d=o.length;n<d;n++){const m=o[n];m.className.indexOf(e)>-1&&r.push(m)}return r.length===0?null:r.length===1?r[0]:r},ko=(t="")=>t.match(/\d+/g)?.sort((e,r)=>r-e)[0],Eo=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),Er=(t,e=1024)=>{const r=t/e;if(r<e)return`${r.toFixed(3)-0} KB`;const o=r/e;return o<e?`${o.toFixed(3)-0} M`:`${(o/e).toFixed(3)-0} G`},Ro=(t="")=>(t??"").replaceAll("//","/"),jo=t=>t?t.charAt(t.length-1)==="/"?t.slice(0,-1):t:"",i=(t,e=1)=>{const r=t.width/t.height/e,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return t.width=o},f=(t=0,e=["s","m","h","d"])=>{if(t=~~t,t<60)return`${t}${e[0]}`;const r=~~(t/60);if(r<60)return`${r}${e[1]}${t%60}${e[0]}`;const o=~~(t/3600),n=t%3600,d=~~(n/60);return o<24?`${o}${e[2]}${d}${e[1]}${n%60}${e[0]}`:`${(o/24).toFixed(2)}${e[3]}`},j=t=>(e,r="children")=>{if(!jt(e))return e;const o=(n,d=[])=>{n.map((m,z)=>{const T=jt(m[r]);if(m=t(m,d,z,T)||m,T){const{[r]:G,...ft}=m;o(G,[...d,{...ft,"@@index":z}])}})};return o(e),e},R=(t,e="children")=>{const r=[];return j(o=>{const{[e]:n,...d}=o;r.push(d)})(t,e),r},ot=t=>typeof t=="number"?t.toLocaleString("en-US"):"";const lt=t=>t<10?"0"+t:t;var nt=(t=new Date)=>{const e=new Date(t),r=e.getFullYear(),o=e.getDay(),n=lt(e.getMonth()+1),d=lt(e.getDate()),m=lt(e.getHours()),z=lt(e.getMinutes()),T=lt(e.getSeconds());return[r,n,d,m,z,T,o]},Jt=(t,e=new Date)=>{t=nt(t),e=nt(e);const r=e.y-t.y,o=e.m-t.m,n=e.d-t.d,d=e.h-t.h,m=e.M-t.M,z=new Date(e.y,e.m,0).getDate(),T=(G,ft,te,ee,Rr)=>{const dr="\u524D";return ft<0&&(G-=1,ft+=te),G===0?ft+Rr+dr:ft===0?G+ee+dr:G+ee+ft+Rr+dr};return r>0?T(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?T(o,n,z,"\u4E2A\u6708","\u5929"):n>0?T(n,d,24,"\u5929","\u5C0F\u65F6"):d>0?T(d,m,60,"\u5C0F\u65F6","\u5206\u949F"):m>0?m+"\u5206\u949F\u524D":"\u521A\u521A"};const Qt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],At=(t,e,r="-")=>t.replace(new RegExp(r,"g"),e);var Yt=(t=new Date,e=["-","-"," ",":",":",""],r=Qt)=>{const o=nt(t);let n="";return e.map((d,m)=>n+=(m===6?r[o[m]]:o[m]??"")+d),n};const Gt=["","webkit","moz","ms"],Je=t=>Gt.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),cr=t=>Gt.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),Br=t=>Gt.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),Ee=Gt.map(t=>`${t}fullscreenchange`);var Ge=t=>{if(!k())return;t=de(t)?t.current:t??document.body;const e=Je(document),r=cr(t),o=Br(document);document[e]?document[o]?.():t[r]?.()};const We=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var ur=()=>{if(!k())return;const t=window.navigator.userAgent.toLowerCase(),e=We.find(r=>t.match(r.reg))??{};return{type:e.name,version:t.match(e.reg)[1]}};const jr=60*1e3,ro=60*jr,ao=24*ro;var an=(t,e=new Date)=>{let r=new Date(t)-e;const o=~~(r/ao);r-=ao*o;const n=~~(r/ro);r-=ro*n;const d=~~(r/jr);r-=jr*d;const m=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${d}\u5206${m}\u79D2`};const Vo=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],ln=t=>{if(!Array.isArray(t))return Vo;const e=[...Vo];return t.map(r=>{const o=e.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?e[o]=r:e.push(r)}),e};var Zo=t=>{const e=ln(t).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return Xe(e.join(""))},zo=(t=new Date)=>{const e=nt(t);return new Date(e[0],e[1],0).getDate()},Mo=(t=null)=>k()?H(t)?{left:t.scrollLeft,top:t.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0};const sn=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:t=>({type:"ios",model:t[1],version:t[3]?.replaceAll("_",".")})},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:t=>({type:"macOS",version:t[1]?t[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:t=>({type:"WindowsPhone",version:t[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:t=>({type:"Windows",version:t[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:t=>({type:"Android",version:t[1]?t[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:t=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:t=>({type:"Linux"})}];var cn=()=>{if(!k())return;const t=window.navigator.userAgent.toLowerCase(),e=sn.find(r=>t.match(r.reg));return e?e.format(t.match(e.reg)):{}},un=(t="")=>{const[e,r]=t.split("?");if(r){const o={};return r.split("&").map(n=>{const[d,m]=n.split("=");o[d]=m}),{path:e,params:o}}return{path:e}},So=()=>k()&&(window.ontouchstart||navigator.maxTouchPoints),Ho=t=>{const{left:e,top:r}=Mo();return{touchX:So()?t?.touches?.[0]?.pageX:t?.pageX||t?.clientX+e,touchY:So()?t?.touches?.[0]?.pageY:t?.pageY||t?.clientY+r}},dn=(t,e)=>{const{touchX:r,touchY:o}=Ho(t),{x:n,y:d}=e?.getBoundingClientRect?.()??{};return{x:r-(n??0),y:o-(d??0)}},hn=(t,e,r="id",o="children")=>{if(!jt(t))return null;const n=d=>{for(let m=0,z=d.length;m<z;m++){const T=d[m];if(T[r]===e)return[T];if(jt(T[o])){const G=n(T[o]);if(G)return[T].concat(G)}}};return n(t)},fn=(t,e,r)=>{if(!k())return;r=de(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&qe(o,e),o.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const pn=(t={},e)=>{e=mn(e);const r=(o,n)=>{if(!n?.[0])return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(t,e)},mn=(t="")=>t.replace(/\[['"]?(.*?)['"]?\]/g,".$1")?.split(".");var xn=pn,Uo=(t,e="")=>H(t)&&t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)")),yn=(t="")=>{if(t[0]!=="#")return t;t=t.replace("#","");const e=t.length;e===3?t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`:e===4&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`);const r=parseInt(t.slice(0,2),16)||0,o=parseInt(t.slice(2,4),16)||0,n=parseInt(t.slice(4,6),16)||0;if(t.length===6)return`rgb(${r},${o},${n})`;const d=parseInt(t.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${d})`},gn=t=>{if(!k())return;const e=document.createElement("canvas"),r=e.getContext("2d"),{width:o,height:n}=t;return e.width=o,e.height=n,r.drawImage(t,0,0,o,n),e},bn=(...t)=>!Number.isNaN(new Date(...t).valueOf()),vn=t=>A(t)==="error",wn=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),kn=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.forward_ref",Cn=t=>A(t)==="regexp",En=t=>E(t)&&Object.keys(t).length,jn=()=>{if(k())return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1},zn=t=>E(t)?O(t):Array.isArray(t)?C(t):t,Xo=t=>new Promise((e,r)=>{const o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>e(o.result)),o.addEventListener("error",n=>r(n))}),Sn=async t=>{if(!Le(t))return t;const e=await(await fetch(decodeURIComponent(t))).blob();return await Xo(e)},$n=t=>new Promise((e,r)=>{const o=new Image;o.src=t,o.crossOrigin="Anonymous",o.complete?e(o):(o.addEventListener("load",()=>e(o)),o.addEventListener("error",n=>r(n)))}),_n=async(t,e,r=2e3)=>{for(;!e?.(t?.());)await kr(r)},Fn=(t,e=["{","}"])=>t?.trim?.().match(new RegExp(`^${e[0]}([\\s\\S]*)${e[1]}$`))?.[1],On=(t=()=>{},e=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),d=r.find(m=>m.key===n);if(!d){const m=t(...o);return r.push({key:n,result:m}),r.length>e&&r.shift(),m}return d.result}};const qo=(t,e,r="id")=>{if(!jt(t))return e;if(!jt(e))return t;const o={};return[...t,...e].map(n=>{const d=E(n)?n[r]??JSON.stringify(n):n;if(o[d]===void 0)o[d]=n;else{const m=o[d];E(m)&&E(n)?o[d]=_o(m,n):jt(m)&&jt(n)?o[d]=qo(m,n):o[d]=n}}),Object.keys(o).map(n=>o[n])};var $o=qo;const Ko=(t,e)=>{if(!E(t))return e;if(!E(e))return t;for(let r in e)oe(e,r)?E(t[r])&&E(e[r])?t[r]=Ko(t[r],e[r]):jt(t[r])&&jt(e[r])?t[r]=$o(t[r],e[r]):t[r]=e[r]:Object.setPrototypeOf(t,{[r]:e[r]});return t};var _o=Ko,Dn=(t,...e)=>{const r=jt(t)?$o:_o;return e.map(o=>t=r(t,o)),t},Tn=(t,e)=>{const r=t?.split(" ")??[],o=e?.split(" ")??[];return[...new Set([...r,...o])].filter(Boolean).join(" ")},Fo=(t,e="")=>{if(!H(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" ").filter(n=>!r.includes(n));t.className=o.join(" ")},Nn=`@keyframes huxy-message-animate-in {
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
}`;const An=()=>document.getElementsByClassName("huxy-message")[0],In=()=>{const t=document.createElement("div"),e=document.createElement("div");return e.setAttribute("class","huxy-message"),t.appendChild(e),document.body.appendChild(t),e},Pn=(t,e)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${e}`);const o=document.createElement("span");o.innerText=t;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},oo=(t,e=3250,r,o)=>{if(!k())return;ae(Nn,"huxy-message-css");let n=An();n||(n=In());const d=Pn(t,o);n.appendChild(d),setTimeout(()=>{n.removeChild(d),r?.()},e),setTimeout(()=>{Fo(d,"open")},e-250)};var Bn={success:(t,e,r)=>oo(t,e,r,"success"),warn:(t,e,r)=>oo(t,e,r,"warn"),warning:(t,e,r)=>oo(t,e,r,"warn"),error:(t,e,r)=>oo(t,e,r,"error"),info:(t,e,r)=>oo(t,e,r,"info")},Ln=(t=new Date)=>{const e=new Date(t),r=e.getDate();return[wt(1-r),wt(zo(e)-r)]},Rn=(t,e,r,o,n="id",d="children")=>{let m={};return Vt((z,T)=>(m=z[T],z.splice(T,1),!0))(t,e,n,d),B(t,r,m,o,n,d),t},Wn=(t={},e="name")=>Object.keys(t).map(r=>({[e]:r,value:t[r]})),Yn=(t={},e=[])=>{e=typeof e=="string"?e.split(","):e;const r={},o=[];return Object.keys(t).map(n=>e.includes(n)?o.push({key:n,value:t[n]}):r[n]=t[n]),{newObj:r,newQuery:o}},Vn=(t=()=>{})=>{let e=!1;return(...r)=>{if(!e)return e=!0,t(...r)}},Jo=(t="",e=0,r="0")=>{const o=t.length;return o>=e?t:`${Array(e-o+1).join(r)}${t}`};const Go="<([^>]+)>([0-9a-zA-Z]*)<\\/\\1>",Qo="<([^>]+)><!\\[CDATA\\[([\\s\\S]*)\\]\\]><\\/\\1>",Zn=t=>{const e={},r={},o=t.match(new RegExp(Go,"g")).map(d=>d.match(new RegExp(Go))).filter(Boolean),n=t.match(new RegExp(Qo,"g")).map(d=>d.match(new RegExp(Qo))).filter(Boolean);return o.map(d=>{const[,m,z]=d;e[m]=z,r[m]="base"}),n.map(d=>{const[,m,z]=d;e[m]=(z??"").trim(),r[m]="data"}),{obj:e,types:r}},Mn=(t,e,r)=>`<${t}>${e==="data"?`<![CDATA[${r}]]>`:r}</${t}>
`;var Hn={xml2Obj:Zn,obj2Xml:(t,e)=>{let r="";return Object.keys(t).map(o=>{r+=Mn(o,e[o],t[o])}),`<xml>
    ${r}
  </xml>`}},Un=(t,e)=>{if(t==null||typeof t!="object")return{};if(e=typeof e=="string"?e.split(","):e,!jt(e))return t;const r={};return e.map(o=>{o in t&&(r[o]=t[o])}),r},Xn=(t=()=>{})=>(...e)=>new Promise((r,o)=>t(...e,(n,d)=>n?o(n):r(d))),qn=()=>"#"+Jo((~~(Math.random()*(1<<24))).toString(16),6),Oo=(t=0,e=0,r=!0)=>(t<e&&(t=[e,e=t][0]),r?~~(Math.random()*(t-e+1))+e:Math.random()*(t-e)+e),Kn=(t=[])=>t[Oo(t.length-1)],Jn=(t,e=100)=>{const r=[];return[...new Array(t)].map((o,n)=>{n===t-1?r[n]=e:(r[n]=Oo(1,e-1),e-=r[n])}),r},Gn=(t=8,e=36)=>Math.random().toString(36).slice(2,t+2),Qn=()=>Math.random()>.5;const ti=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r};var ei=(t,e=60)=>{if(!k())return;t=de(t)?t.current:t??document.body;let r=to(t,"resize-sensor"),o=[];const n=Tt(()=>o.map(T=>T(t)),e),d=T=>{to(t,"resize-sensor")||(r=ti(t,n)),o.indexOf(T)===-1&&o.push(T)},m=T=>{const G=o.indexOf(T);G!==-1&&o.splice(G,1),o.length===0&&r&&z()},z=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:t,bind:d,unbind:m,destroy:z}};const tn=(t=0,e=0,r=0,o=1)=>{t-=0,e-=0,r-=0,o-=0;const n=`#${((1<<24)+(t<<16)+(e<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var ri=(t=0,e=0,r=0,o=1)=>{if(t.includes("rgb")){const n=t.match(/rgba?\((.+)\)/);if(n){const d=n[1]?.split(",").map(m=>m.trim());return tn(...d)}return t}return tn(t,e,r,o)},oi=(t,e="px")=>`${t}`.replace(e,"")-0;const en=()=>typeof performance?.now=="function"?performance.now():new Date().getTime(),ni=t=>{if(typeof setImmediate=="function")return()=>setImmediate(t);if(typeof MessageChannel=="function"){const{port1:e,port2:r}=new MessageChannel;return e.onmessage=t,()=>r.postMessage(null)}return()=>setTimeout(t,0)},ii=()=>{const t=[],e=m=>{t.push(m),d(m)},r=()=>t[0],o=()=>t.shift(),n=m=>m.startTime=en(),d=m=>{n(m),t.sort((z,T)=>z.startTime-T.startTime)};return{hub:t,push:e,peek:r,shift:o,update:d}};var ai=(t=5)=>{const{hub:e,push:r,peek:o,shift:n,update:d}=ii(),m=ni(()=>{T()&&m()}),z=G=>en()-G.startTime>t,T=()=>{let G=o();for(;G;){if(z(G)){d(G);break}const{task:ft}=G;typeof ft=="function"?(G.task=null,ft()):n(),G=o()}return G};return(G=()=>{})=>{r({task:G}),e.length<2&&m()}},li=()=>k()&&document.documentElement.scrollHeight-qt()===ye().height,si=t=>{k()&&(t=de(t)?t.current:t??window,t.scrollIntoView?.({behavior:"smooth",block:"center"}))},ci={get:t=>{let e=null;try{e=JSON.parse(sessionStorage.getItem(t))}catch{e=sessionStorage.getItem(t)}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),sessionStorage.setItem(t,e)},rm:t=>{sessionStorage.removeItem(t)},clear:()=>{sessionStorage.clear()}},ui=t=>{const e=Zo(t);k()&&document.head.appendChild(...e)},di=(t,e=null,r=!1)=>[...t||[]].sort((o,n)=>{const d=e?o[e]:o,m=e?n[e]:n;return!isNaN(Number(d))&&!isNaN(Number(d))?r?m-d:d-m:typeof d=="string"&&typeof m=="string"?r?m.localeCompare(d):d.localeCompare(m):typeof d=="string"&&typeof m=="number"?r?-1:1:typeof d=="number"||typeof d=="string"?r?1:-1:r?-1:1}),hi=t=>{if(!E(t))return{};const e={};return Object.keys(t).sort().map(r=>{e[r]=t[r]}),e},fi={get:t=>{let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch{}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),localStorage.setItem(t,e)},rm:t=>{localStorage.removeItem(t)},clear:()=>{localStorage.clear()}};const pi=gt();var mi=_e(pi),xi=(t,e=!1)=>(t=e?t:`return ${t};`,Function(t)()),yi=()=>k()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),gi=(t,...e)=>{const r=[];return t.map((o,n)=>{r.push(o,e[n]??"")}),r.join("")},bi=(t=()=>{},e=60)=>{let r=null;return function(...o){r||(t.apply(this,o),r=setTimeout(()=>r=null,e))}};const vi=t=>[12,zo(t),24,60,60],wi=(t=[],e=[],r=[])=>{let o=!1;const n=[];return e.map((d,m)=>{const z=(o?d-1:d)-t[m];z<0?(n[m]=z+(r[m]||10),o=!0):(n[m]=z,o=!1)}),n.reverse()};var rn=(t,e=new Date)=>{new Date(t)-new Date(e)>0&&(t=[e,e=t][0]);const r=vi(e).reverse(),o=nt(t).slice(0,-1).reverse(),n=nt(e).slice(0,-1).reverse();return wi(o,n,r)};const ki=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Ci=(t,e=new Date)=>{const r=rn(t,e),o=r.findIndex(n=>n>0);return r.map((n,d)=>`${n||0}${ki[d]}`).slice(o).join("")},Ei=(t,e)=>{H(t)&&(Uo(t,e)?Fo(t,e):J(t,e))},ji=t=>(e,r="children")=>{if(!jt(e))return e;const o=n=>(n.map(d=>{jt(d[r])&&(d[r]=o(d[r]))}),t(n));return o(e)},zi=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[e]||e),Si=(t,e="fuckId",r="children")=>j((o,n,d)=>{o[e]=[...n.map(m=>m["@@index"]),d].join("-")})(t,r),$i=(t,e,r,o="children")=>Vt((n,d)=>{const m=n[d];return m[o]=[...m[o]||[],...r],!0})(t,e),_i=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Fi=t=>k()?(Ee.map(e=>document.addEventListener(e,t,!1)),()=>Ee.map(e=>document.removeEventListener(e,t,!1))):void 0,Oi=({container:t,width:e="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:d="20px microsoft yahei",fillStyle:m="rgba(202,202,202,0.4)",content:z="\u8BF7\u52FF\u5916\u4F20",rotate:T="-30",zIndex:G=1e3}={})=>{if(!k())return;t=de(t)?t.current:t??document.body;const ft=t.firstChild;ft?.className==="watermark-canvas"&&t.removeChild(ft);const te=document.createElement("canvas");te.setAttribute("width",e),te.setAttribute("height",r);const ee=te.getContext("2d");ee.textAlign=o,ee.textBaseline=n,ee.font=d,ee.fillStyle=m,ee.rotate(Math.PI/180*T),ee.fillText(z,parseFloat(e)/2,parseFloat(r)/2);const Rr=te.toDataURL(),dr=document.createElement("div");dr.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${G};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${Rr}')`),t.style.position="relative",t.insertBefore(dr,t.firstChild)},Di=(t=new Date)=>{const e=new Date(t).getDay();return[wt(1-e),wt(7-e)]},Ti=t=>{if(!ir(t))return{};let e="pending",r;const o=t.then(n=>{e="success",r=n}).catch(n=>{e="error",r=n});return{read:()=>{if(e==="pending")throw o;if(e==="error")throw r;if(e==="success")return r}}},Sl=u.NzM,$l=u.wBC,_l=u.O39,Fl=u.cnu,Ol=u.E4D,Dl=u.TRp,Tl=u.zI1,Nl=u.Ufj,Al=u.GxO,Il=u.cu2,Pl=u.BcS,Bl=u.lPd,Ll=u.dC1,Rl=u.$L2,Wl=u.Vji,Yl=u.YxP,Vl=u.UhT,Ni=u.JaC,Zl=u.o4B,Ml=u.Hlr,Ai=u.muM,Hl=u.OiV,Ul=u.KTn,Xl=u.lwL,ql=u.d9v,Kl=u.yCD,Jl=u.qCK,Ii=u.vQq,Pi=u.fHt,Gl=u.azq,Ql=u.dSY,Bi=u.MTn,ts=u.RYO,es=u.WAo,rs=u.GVc,os=u.Emy,ns=u.v9O,is=u.DsO,as=u._lj,ls=u.vO6,ss=u.xDX,cs=u.hf3,us=u.ip7,ds=u.uYe,hs=u.DgJ,fs=u.rae,ps=u.YBu,Li=u._iG,ms=u.hXT,xs=u.gQq,ys=u.D_D,gs=u.$nD,bs=u.dtG,vs=u.Y0R,Ri=u.qg7,ws=u.Xxf,ks=u.tSM,Cs=u.Few,Es=u.xHg,js=u.aoj,zs=u.Dlm,Wi=u.mrB,Ss=u.dKu,$s=u.v1d,Yi=u.afD,_s=u.Lz5,Fs=u.xZX,Os=u.G_1,Ds=u.osI,Vi=u.PTJ,Ts=u.Qfx,Ns=u.bti,As=u.XBv,Zi=u.eyl,Is=u.y35,Ps=u.hKD,Bs=u.BWC,Ls=u.oLi,Mi=u.NA2,Rs=u.S3Y,Ws=u.pvT,Ys=u.m2f,Hi=u.rWO,Vs=u.A$w,Zs=u.kJL,Ms=u.S9U,Hs=u.dYC,Us=u.jUY,Xs=u.J_U,qs=u.kKo,Ks=u.VZO,Js=u.mf2,Gs=u.w1q,Qs=u.Kn2,tc=u.ncl,ec=u.LWC,rc=u.dqb,oc=u.Kjn,nc=u.TaN,ic=u.CBv,ac=u.rTd,lc=u.B73,sc=u.SSA,cc=u.CLv,uc=u.F$z,dc=u.XT_,hc=u.omS,fc=u.poV,pc=u.VXY,mc=u.xsP,xc=u.HPs,yc=u.TSy,gc=u.B5o,bc=u.u1A,vc=u.WAY,wc=u.I8J,Ui=u.ywV,kc=u.bEN,Cc=u.$45,Ec=u.TUk,jc=u.T7B,zc=u.CEd,Sc=u.IHq,$c=u.SkG,_c=u.Smz,Fc=u.nL5,Oc=u.ON,Dc=u.eiS,Tc=u.Frc,Nc=u.z5J,Ac=u.scT,Ic=u.hd2,Pc=u.AnA,Bc=u.kYX,Lc=u.yZP,Rc=u.IVd,Wc=u.SIr,Xi=u.jg2,qi=u.gVz,Yc=u.puc,Vc=u.Azz,Zc=u.X5u,Mc=u.dPh,Hc=u.SMZ,Uc=u.kro,Xc=u.nPi,qc=u.US,Ki=u.A_F,Kc=u._vH,Jc=u.gmH,Gc=u.DYV,Qc=u.qi2,Ji=u.tOc,tu=u.hau,eu=u.FaZ,ru=u.uyF,Gi=u.Vcq,ou=u.XKW,Qi=u.azd,nu=u.P2K,iu=u.XBe,au=u.JZ7,lu=u.ABi,su=u.ogC,ta=u._O2,cu=u.P0C,uu=u.Uo5,du=u.Two,hu=u.tYQ,fu=u.tVn,pu=u.pHy,ea=u.k$y,mu=u.yfi,xu=u.fl8,ra=u.f9u,yu=u.ZV1,gu=u.Lgs}}]);
