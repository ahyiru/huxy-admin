(self.webpackChunk=self.webpackChunk||[]).push([[506],{3323:function(Rr,$t){function re(L,it){var c=L.length;L.push(it);t:for(;0<c;){var $=c-1>>>1,x=L[$];if(0<ze(x,it))L[$]=it,L[c]=x,c=$;else break t}}function Bt(L){return L.length===0?null:L[0]}function u(L){if(L.length===0)return null;var it=L[0],c=L.pop();if(c!==it){L[0]=c;t:for(var $=0,x=L.length,E=x>>>1;$<E;){var F=2*($+1)-1,O=L[F],S=F+1,C=L[S];if(0>ze(O,c))S<x&&0>ze(C,O)?(L[$]=C,L[S]=c,$=S):(L[$]=O,L[F]=c,$=F);else if(S<x&&0>ze(C,c))L[$]=C,L[S]=c,$=S;else break t}}return it}function ze(L,it){var c=L.sortIndex-it.sortIndex;return c!==0?c:L.id-it.id}if(typeof performance=="object"&&typeof performance.now=="function"){var Te=performance;$t.unstable_now=function(){return Te.now()}}else{var mt=Date,I=mt.now();$t.unstable_now=function(){return mt.now()-I}}var ut=[],jt=[],Wr=1,Zt=null,Ht=3,N=!1,V=!1,B=!1,Z=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,tt=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(L){for(var it=Bt(jt);it!==null;){if(it.callback===null)u(jt);else if(it.startTime<=L)u(jt),it.sortIndex=it.expirationTime,re(ut,it);else break;it=Bt(jt)}}function rt(L){if(B=!1,G(L),!V)if(Bt(ut)!==null)V=!0,Wt(wt);else{var it=Bt(jt);it!==null&&ie(rt,it.startTime-L)}}function wt(L,it){V=!1,B&&(B=!1,M(Nt),Nt=-1),N=!0;var c=Ht;try{for(G(it),Zt=Bt(ut);Zt!==null&&(!(Zt.expirationTime>it)||L&&!Vt());){var $=Zt.callback;if(typeof $=="function"){Zt.callback=null,Ht=Zt.priorityLevel;var x=$(Zt.expirationTime<=it);it=$t.unstable_now(),typeof x=="function"?Zt.callback=x:Zt===Bt(ut)&&u(ut),G(it)}else u(ut);Zt=Bt(ut)}if(Zt!==null)var E=!0;else{var F=Bt(jt);F!==null&&ie(rt,F.startTime-it),E=!1}return E}finally{Zt=null,Ht=c,N=!1}}var kt=!1,Ft=null,Nt=-1,ct=5,_t=-1;function Vt(){return!($t.unstable_now()-_t<ct)}function Mt(){if(Ft!==null){var L=$t.unstable_now();_t=L;var it=!0;try{it=Ft(!0,L)}finally{it?k():(kt=!1,Ft=null)}}else kt=!1}var k;if(typeof tt=="function")k=function(){tt(Mt)};else if(typeof MessageChannel<"u"){var Lt=new MessageChannel,Rt=Lt.port2;Lt.port1.onmessage=Mt,k=function(){Rt.postMessage(null)}}else k=function(){Z(Mt,0)};function Wt(L){Ft=L,kt||(kt=!0,k())}function ie(L,it){Nt=Z(function(){L($t.unstable_now())},it)}$t.unstable_IdlePriority=5,$t.unstable_ImmediatePriority=1,$t.unstable_LowPriority=4,$t.unstable_NormalPriority=3,$t.unstable_Profiling=null,$t.unstable_UserBlockingPriority=2,$t.unstable_cancelCallback=function(L){L.callback=null},$t.unstable_continueExecution=function(){V||N||(V=!0,Wt(wt))},$t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ct=0<L?Math.floor(1e3/L):5},$t.unstable_getCurrentPriorityLevel=function(){return Ht},$t.unstable_getFirstCallbackNode=function(){return Bt(ut)},$t.unstable_next=function(L){switch(Ht){case 1:case 2:case 3:var it=3;break;default:it=Ht}var c=Ht;Ht=it;try{return L()}finally{Ht=c}},$t.unstable_pauseExecution=function(){},$t.unstable_requestPaint=function(){},$t.unstable_runWithPriority=function(L,it){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var c=Ht;Ht=L;try{return it()}finally{Ht=c}},$t.unstable_scheduleCallback=function(L,it,c){var $=$t.unstable_now();switch(typeof c=="object"&&c!==null?(c=c.delay,c=typeof c=="number"&&0<c?$+c:$):c=$,L){case 1:var x=-1;break;case 2:x=250;break;case 5:x=1073741823;break;case 4:x=1e4;break;default:x=5e3}return x=c+x,L={id:Wr++,callback:it,priorityLevel:L,startTime:c,expirationTime:x,sortIndex:-1},c>$?(L.sortIndex=c,re(jt,L),Bt(ut)===null&&L===Bt(jt)&&(B?(M(Nt),Nt=-1):B=!0,ie(rt,c-$))):(L.sortIndex=x,re(ut,L),V||N||(V=!0,Wt(wt))),L},$t.unstable_shouldYield=Vt,$t.unstable_wrapCallback=function(L){var it=Ht;return function(){var c=Ht;Ht=it;try{return L.apply(this,arguments)}finally{Ht=c}}}},1102:function(Rr,$t,re){Rr.exports=re(3323)},4335:function(Rr,$t,re){var Bt;re.d($t,{$j:function(){return Vt},AN:function(){return rt},BQ:function(){return kt},GK:function(){return Mt},Hn:function(){return M},JX:function(){return Ht},PC:function(){return jt},Ud:function(){return V},V7:function(){return G},X2:function(){return _t},dy:function(){return N},h_:function(){return ct},mH:function(){return B},pC:function(){return Wt},s_:function(){return Nt},u_:function(){return Ft},zd:function(){return wt}});var u=re(7378),ze=re(1542),Te={269:(c,$,x)=>{x.d($,{Z:()=>H});var E=x(601),F=x.n(E),O=x(609),S=x.n(O),C=S()(F());C.push([c.id,`/*@height:2px;
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
`,""]),C.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"};const H=C},528:(c,$,x)=>{x.d($,{Z:()=>H});var E=x(601),F=x.n(E),O=x(609),S=x.n(O),C=S()(F());C.push([c.id,`.kLIGi {
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
`,""]),C.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"};const H=C},434:(c,$,x)=>{x.d($,{Z:()=>H});var E=x(601),F=x.n(E),O=x(609),S=x.n(O),C=S()(F());C.push([c.id,`@keyframes animate-drawer-right-in {
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
`,""]),C.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"};const H=C},503:(c,$,x)=>{x.d($,{Z:()=>H});var E=x(601),F=x.n(E),O=x(609),S=x.n(O),C=S()(F());C.push([c.id,`@keyframes animate-drop-in {
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
`,""]),C.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"};const H=C},548:(c,$,x)=>{x.d($,{Z:()=>H});var E=x(601),F=x.n(E),O=x(609),S=x.n(O),C=S()(F());C.push([c.id,`@keyframes animate-modal-in {
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
`,""]),C.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"};const H=C},232:(c,$,x)=>{x.d($,{Z:()=>H});var E=x(601),F=x.n(E),O=x(609),S=x.n(O),C=S()(F());C.push([c.id,`.clear::after {
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
`,""]),C.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"};const H=C},249:(c,$,x)=>{x.d($,{Z:()=>H});var E=x(601),F=x.n(E),O=x(609),S=x.n(O),C=S()(F());C.push([c.id,`.cols-1 {
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
`,""]),C.locals={};const H=C},990:(c,$,x)=>{x.d($,{Z:()=>H});var E=x(601),F=x.n(E),O=x(609),S=x.n(O),C=S()(F());C.push([c.id,`@keyframes before {
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
`,""]),C.locals={};const H=C},575:(c,$,x)=>{x.d($,{Z:()=>H});var E=x(601),F=x.n(E),O=x(609),S=x.n(O),C=S()(F());C.push([c.id,`.clear::after {
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
`,""]),C.locals={};const H=C},918:(c,$,x)=>{x.d($,{Z:()=>H});var E=x(601),F=x.n(E),O=x(609),S=x.n(O),C=S()(F());C.push([c.id,`.ofth_ {
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
`,""]),C.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"};const H=C},942:(c,$,x)=>{x.d($,{Z:()=>H});var E=x(601),F=x.n(E),O=x(609),S=x.n(O),C=S()(F());C.push([c.id,`.node-right-icon-close {
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
`,""]),C.locals={};const H=C},609:c=>{c.exports=function($){var x=[];return x.toString=function(){return this.map(function(E){var F="",O=typeof E[5]<"u";return E[4]&&(F+="@supports (".concat(E[4],") {")),E[2]&&(F+="@media ".concat(E[2]," {")),O&&(F+="@layer".concat(E[5].length>0?" ".concat(E[5]):""," {")),F+=$(E),O&&(F+="}"),E[2]&&(F+="}"),E[4]&&(F+="}"),F}).join("")},x.i=function(E,F,O,S,C){typeof E=="string"&&(E=[[null,E,void 0]]);var H={};if(O)for(var xt=0;xt<this.length;xt++){var Et=this[xt][0];Et!=null&&(H[Et]=!0)}for(var Ut=0;Ut<E.length;Ut++){var Q=[].concat(E[Ut]);O&&H[Q[0]]||(typeof C<"u"&&(typeof Q[5]>"u"||(Q[1]="@layer".concat(Q[5].length>0?" ".concat(Q[5]):""," {").concat(Q[1],"}")),Q[5]=C),F&&(Q[2]&&(Q[1]="@media ".concat(Q[2]," {").concat(Q[1],"}")),Q[2]=F),S&&(Q[4]?(Q[1]="@supports (".concat(Q[4],") {").concat(Q[1],"}"),Q[4]=S):Q[4]="".concat(S)),x.push(Q))}},x}},601:c=>{c.exports=function($){return $[1]}},837:(c,$,x)=>{var E,F=x(810),O=Symbol.for("react.element"),S=Symbol.for("react.fragment"),C=Object.prototype.hasOwnProperty,H=F.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,xt={key:!0,ref:!0,__self:!0,__source:!0};function Et(Ut,Q,Xt){var St,qt={},ae=null,oe=null;Xt!==void 0&&(ae=""+Xt),Q.key!==void 0&&(ae=""+Q.key),Q.ref!==void 0&&(oe=Q.ref);for(St in Q)C.call(Q,St)&&!xt.hasOwnProperty(St)&&(qt[St]=Q[St]);if(Ut&&Ut.defaultProps)for(St in Q=Ut.defaultProps,Q)qt[St]===void 0&&(qt[St]=Q[St]);return{$$typeof:O,type:Ut,key:ae,ref:oe,props:qt,_owner:H.current}}E=S,$.jsx=Et,$.jsxs=Et},322:(c,$,x)=>{c.exports=x(837)},62:c=>{var $=[];function x(O){for(var S=-1,C=0;C<$.length;C++)if($[C].identifier===O){S=C;break}return S}function E(O,S){for(var C={},H=[],xt=0;xt<O.length;xt++){var Et=O[xt],Ut=S.base?Et[0]+S.base:Et[0],Q=C[Ut]||0,Xt="".concat(Ut," ").concat(Q);C[Ut]=Q+1;var St=x(Xt),qt={css:Et[1],media:Et[2],sourceMap:Et[3],supports:Et[4],layer:Et[5]};if(St!==-1)$[St].references++,$[St].updater(qt);else{var ae=F(qt,S);S.byIndex=xt,$.splice(xt,0,{identifier:Xt,updater:ae,references:1})}H.push(Xt)}return H}function F(O,S){var C=S.domAPI(S);C.update(O);var H=function(xt){if(xt){if(xt.css===O.css&&xt.media===O.media&&xt.sourceMap===O.sourceMap&&xt.supports===O.supports&&xt.layer===O.layer)return;C.update(O=xt)}else C.remove()};return H}c.exports=function(O,S){S=S||{},O=O||[];var C=E(O,S);return function(H){H=H||[];for(var xt=0;xt<C.length;xt++){var Et=C[xt],Ut=x(Et);$[Ut].references--}for(var Q=E(H,S),Xt=0;Xt<C.length;Xt++){var St=C[Xt],qt=x(St);$[qt].references===0&&($[qt].updater(),$.splice(qt,1))}C=Q}}},793:c=>{var $={};function x(F){if(typeof $[F]>"u"){var O=document.querySelector(F);if(window.HTMLIFrameElement&&O instanceof window.HTMLIFrameElement)try{O=O.contentDocument.head}catch{O=null}$[F]=O}return $[F]}function E(F,O){var S=x(F);if(!S)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");S.appendChild(O)}c.exports=E},173:c=>{function $(x){var E=document.createElement("style");return x.setAttributes(E,x.attributes),x.insert(E,x.options),E}c.exports=$},892:(c,$,x)=>{function E(F){var O=x.nc;O&&F.setAttribute("nonce",O)}c.exports=E},36:c=>{function $(F,O,S){var C="";S.supports&&(C+="@supports (".concat(S.supports,") {")),S.media&&(C+="@media ".concat(S.media," {"));var H=typeof S.layer<"u";H&&(C+="@layer".concat(S.layer.length>0?" ".concat(S.layer):""," {")),C+=S.css,H&&(C+="}"),S.media&&(C+="}"),S.supports&&(C+="}");var xt=S.sourceMap;xt&&typeof btoa<"u"&&(C+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(xt))))," */")),O.styleTagTransform(C,F,O.options)}function x(F){if(F.parentNode===null)return!1;F.parentNode.removeChild(F)}function E(F){if(typeof document>"u")return{update:function(){},remove:function(){}};var O=F.insertStyleElement(F);return{update:function(S){$(O,F,S)},remove:function(){x(O)}}}c.exports=E},464:c=>{function $(x,E){if(E.styleSheet)E.styleSheet.cssText=x;else{for(;E.firstChild;)E.removeChild(E.firstChild);E.appendChild(document.createTextNode(x))}}c.exports=$},810:c=>{var $=E=>{var F={};return I.d(F,E),F},x=E=>()=>E;c.exports=Bt||(Bt=re.t(u,2))}},mt={};function I(c){var $=mt[c];if($!==void 0)return $.exports;var x=mt[c]={id:c,exports:{}};return Te[c](x,x.exports,I),x.exports}I.n=c=>{var $=c&&c.__esModule?()=>c.default:()=>c;return I.d($,{a:$}),$},I.d=(c,$)=>{for(var x in $)I.o($,x)&&!I.o(c,x)&&Object.defineProperty(c,x,{enumerable:!0,get:$[x]})},I.o=(c,$)=>Object.prototype.hasOwnProperty.call(c,$),I.nc=void 0;var ut={};(()=>{I.d(ut,{PC:()=>oe,rK:()=>hr,lr:()=>er,JX:()=>ve,dy:()=>_,Ud:()=>Ur,mH:()=>U,SV:()=>vt,Hn:()=>Re,rj:()=>me,V7:()=>xe,AN:()=>yr,zd:()=>Pe,BQ:()=>ge,u_:()=>Dr,s_:()=>To,h_:()=>Se,X2:()=>lr,$j:()=>fo,GK:()=>Bo,u:()=>g,mp:()=>Yo,C2:()=>zt,pC:()=>yt,ff:()=>Nr,d2:()=>Qr,Uw:()=>Io});var c=I(322),$=I(62),x=I.n($),E=I(36),F=I.n(E),O=I(793),S=I.n(O),C=I(892),H=I.n(C),xt=I(173),Et=I.n(xt),Ut=I(464),Q=I.n(Ut),Xt=I(269),St={};St.styleTagTransform=Q(),St.setAttributes=H(),St.insert=S().bind(null,"head"),St.domAPI=F(),St.insertStyleElement=Et();var qt=x()(Xt.Z,St);const ae=Xt.Z&&Xt.Z.locals?Xt.Z.locals:void 0,oe=i=>(0,c.jsx)("span",{className:ae.anico,children:(0,c.jsx)("span",{className:[ae.hline,...(i.type||"").split(" ").map(l=>ae[l]).filter(Boolean)].join(" ")})});var K=I(810);const de=i=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(i),Ge=i=>new Promise((l,f)=>{const w=new FileReader;w.readAsDataURL(i),w.addEventListener("load",()=>l(w.result)),w.addEventListener("error",j=>f(j))}),Ve=async i=>{if(!de(i))return i;const l=await(await fetch(decodeURIComponent(i))).blob();return await Ge(l)},kr=i=>{const[l,f]=(0,K.useState)(i);return(0,K.useEffect)(()=>{(async w=>{const j=await Ve(w);f(j)})(i)},[]),l},hr=({src:i,...l})=>{const f=kr(i);return(0,c.jsx)("img",{...l,src:f})};var Je=i=>{var l={};return I.d(l,i),l},Cr=i=>()=>i;const Me=Je({createPortal:()=>ze.createPortal,flushSync:()=>ze.flushSync}),fr=(i,l)=>{const f=(0,K.useRef)();(0,K.useEffect)(()=>{f.current=i},[i]),(0,K.useEffect)(()=>{if(l){const w=setInterval(()=>f.current(),l);return()=>clearInterval(w)}},[l])},ce=()=>![typeof window,typeof document].includes("undefined"),Er=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),$e=i=>Er(i).indexOf("element")>-1,He=(i=null)=>ce()?$e(i)?{width:i.clientWidth,height:i.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},he=(i=()=>{},l=60)=>{let f=null;return function(...w){clearTimeout(f),f=setTimeout(()=>i.apply(this,w),l)}},jr=(i,l)=>Object.prototype.hasOwnProperty.call(i??{},l),ne=i=>jr(i,"current"),zr=(i,l)=>{const f=[],w=i.children??[];for(let j=0,A=w.length;j<A;j++){const R=w[j];R.className.indexOf(l)>-1&&f.push(R)}return f.length===0?null:f.length===1?f[0]:f},Qe=(i,l)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const f=document.createElement("object");return f.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),f.setAttribute("class","resize-sensor"),f.onload=()=>{f.contentDocument.defaultView.addEventListener("resize",l,!1),l()},f.type="text/html",i.appendChild(f),f.data="about:blank",f},Yr=(i,l=60)=>{if(!ce())return;i=ne(i)?i.current:i??document.body;let f=zr(i,"resize-sensor"),w=[];const j=he(()=>w.map(ot=>ot(i)),l),A=ot=>{zr(i,"resize-sensor")||(f=Qe(i,j)),w.indexOf(ot)===-1&&w.push(ot)},R=ot=>{const st=w.indexOf(ot);st!==-1&&w.splice(st,1),w.length===0&&f&&et()},et=()=>{f&&f.parentNode&&(f.contentDocument&&f.contentDocument.defaultView.removeEventListener("resize",j,!1),f.parentNode.removeChild(f),f=void 0,w=[])};return{element:i,bind:A,unbind:R,destroy:et}},pr=(i={})=>{const l=(0,K.useRef)(0),[f,w]=(0,K.useState)(i),j=(0,K.useCallback)(A=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>w(A))},[]);return(0,K.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[f,j]},Zr=(i=null,l=60)=>{const f=ne(i)?i.current:i,{bind:w,destroy:j}=Yr(f,l),[A,R]=pr(He(f));return(0,K.useEffect)(()=>(w(()=>f&&R(He(f))),()=>j()),[f]),A};var Ne=I(528),Ie={};Ie.styleTagTransform=Q(),Ie.setAttributes=H(),Ie.insert=S().bind(null,"head"),Ie.domAPI=F(),Ie.insertStyleElement=Et();var tr=x()(Ne.Z,Ie);const _e=Ne.Z&&Ne.Z.locals?Ne.Z.locals:void 0,er=({children:i,active:l=0,delay:f=5e3,className:w,...j})=>{const[A,R]=(0,K.useState)(l+1),[et,ot]=(0,K.useState)(!1),st=(0,K.useRef)(),gt=(0,K.useRef)(""),{width:nt}=Zr(st);i=Array.isArray(i)?i:[i];const bt=i[0],Gt=[i[i.length-1],...i,bt],Qt=Gt.length;fr(()=>{let Yt=A+1;Yt=Yt===Qt?1:Yt,gt.current&&(gt.current=""),R(Yt),Yt===Qt-1&&setTimeout(()=>{gt.current="none",R(1)},500)},et?null:f);const Tt=(Yt,Jt)=>{Jt.stopPropagation(),gt.current="",R(Yt),(0,Me.flushSync)(()=>ot(!0)),ot(!1)},Pt={width:`${Qt*nt}px`,transform:`translateX(${-nt*A}px)`,transition:gt.current};return(0,c.jsxs)("div",{className:`${_e["huxy-carousel"]}${w?` ${w}`:""}`,...j,ref:st,children:[(0,c.jsx)("div",{className:_e["huxy-carousel-wrap"],style:Pt,children:Gt.map((Yt,Jt)=>(0,c.jsx)("div",{className:`${_e["carousel-item"]} ${A===Jt?_e.active:""}`,style:{width:`${nt}px`},children:Yt},`huxy-carousel-${Jt}`))}),(0,c.jsx)("div",{className:_e["carousel-switch"],children:i.map((Yt,Jt)=>(0,c.jsx)("span",{className:`${_e.dot} ${A===Jt+1?_e.active:""}`,onClick:qe=>Tt(Jt+1,qe)},`huxy-carousel-switch-${Jt}`))})]})},Ae=(i,l)=>{let f="",w="";if(typeof l=="number"&&(f=`col-${i}-${l}`),typeof l=="object"){const{span:j,offset:A}=l;f=j?`col-${i}-${j}`:"",w=A?`offset-${i}-${A}`:""}return{sp:f,os:w}},ve=(0,K.forwardRef)(({span:i,offset:l,xl:f,lg:w,md:j,sm:A,xs:R,style:et,width:ot,auto:st,offsetWidth:gt="0px",className:nt,...bt},Gt)=>{const Qt=nt?` ${nt}`:"",Tt=`col-${i||12}`,Pt=l?`offset-${l}`:"",{sp:Yt,os:Jt}=Ae("xs",R),{sp:qe,os:cr}=Ae("sm",A),{sp:Pr,os:Ee}=Ae("md",j),{sp:Br,os:Ke}=Ae("lg",w),{sp:Ze,os:je}=Ae("xl",f),ur=[Tt,Ze,Br,Pr,qe,Yt,Pt,je,Ke,Ee,cr,Jt].filter(Boolean).join(" "),wr=st?{width:"auto",flex:1,maxWidth:`calc(100% - ${gt})`}:{width:ot};return(0,c.jsx)("div",{className:`${ur}${Qt}`,...bt,style:{...wr,...et},ref:Gt})}),Vr=()=>{const i=(0,K.useRef)(!0);return i.current?(i.current=!1,!0):!1},rr=(i,l=[])=>{const f=Vr();(0,K.useEffect)(()=>{if(!f)return i()},l)},Mr=(i,l=450)=>{const[f,w]=(0,K.useState)(i);return rr(()=>{let j;return i||l===0?w(i):j=setTimeout(()=>w(i),l),()=>j&&clearTimeout(j)},[i]),[f,w]},Se=({children:i,mountNode:l=document.body})=>(0,Me.createPortal)(i,l),or={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},nr={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},Hr=document.body,Pe=({open:i,close:l,delay:f=300,children:w,mountNode:j,hasMask:A=!0,style:R,className:et="h-mask",relative:ot})=>{const[st]=Mr(i,f);(j??Hr).style.overflow=st?"hidden":"";const gt=ot?"absolute":"fixed";return(0,c.jsx)(Se,{mountNode:j,children:(0,c.jsx)("div",{children:st?(0,c.jsxs)("div",{className:et,style:{...or,position:gt},children:[A?(0,c.jsx)("div",{style:{...nr,position:gt},onClick:nt=>l?.(nt)}):null,K.Children.map(w,nt=>(0,K.isValidElement)(nt)?(0,K.cloneElement)(nt,{style:{position:"relative",zIndex:100001,...nt.props.style}}):nt)]}):null})})};var Fe=I(434),s={};s.styleTagTransform=Q(),s.setAttributes=H(),s.insert=S().bind(null,"head"),s.domAPI=F(),s.insertStyleElement=Et();var v=x()(Fe.Z,s);const y=Fe.Z&&Fe.Z.locals?Fe.Z.locals:void 0,_=({open:i,close:l,footer:f,header:w,className:j,style:A,children:R,width:et="300px",mountNode:ot,position:st="right",relative:gt})=>{const nt=["drawer-wrap",st,i?"open":"",...j?.split(" ")??[]].filter(Boolean).map(bt=>y[bt]).join(" ");return(0,c.jsx)(Pe,{open:i,close:l,delay:250,hasMask:!0,relative:gt,mountNode:ot,className:"huxy-drawer",children:(0,c.jsx)("div",{className:nt,style:{width:et,position:gt?"absolute":"fixed",...A},children:(0,c.jsxs)("div",{className:y["drawer-container"],children:[(0,c.jsxs)("div",{className:y["drawer-header"],children:[(0,c.jsx)("span",{className:`link ${y["ico-close"]}`,onClick:bt=>l?.(bt)}),(0,c.jsx)("div",{children:w})]}),(0,c.jsx)("div",{className:y["drawer-content"],children:R}),f?(0,c.jsx)("div",{className:y["drawer-footer"],children:f}):null]})})})},D=(i,l,f="click")=>{(0,K.useEffect)(()=>{const w=A=>{const R=ne(i)?i.current:i;R?.contains&&!R.contains(A.target)&&l(A)},j=typeof f=="string"?[f]:f;return j.map(A=>{document.addEventListener(A,w,!1)}),()=>{j.map(A=>{document.removeEventListener(A,w,!1)})}},[i,l,f])},q=i=>i?.$$typeof&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",dt=(i="")=>i.replace(/^\S/,l=>l.toUpperCase()),ht=i=>{if(ce())return i=ne(i)?i.current:i??document.body,i.getBoundingClientRect?.()},lt=i=>{if(!ce())return;const l=document.createElement("div");return l.innerHTML=i,l.children[0]},It=(i,l={},f=!1)=>{if($e(i)){if(f){let w="";Object.keys(l).map(j=>{w+=`${j}: ${l[j]};`}),i.style=w;return}Object.keys(l).map(w=>i.style.setProperty(w,l[w]))}},we=(i=350)=>new Promise(l=>setTimeout(l,i)),Be=(i=100)=>{const l=Date.now();for(;Date.now()-l<=i;);},Oe=we,fe=async(i,l=15)=>{if(!ce())return;if(typeof i=="string"&&(i=lt(i)),i=ne(i)?i.current:i,!$e(i))return{};const f=i.cloneNode(!0);It(f,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(f),await Oe(l);const w=ht(f);return i.parentNode.removeChild(f),w},ir=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,mr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,De=(i,l)=>{l=`huxy-drop-arrow-${l}`;const f=i.getAttribute("class")??"";ir.test(f)?i.setAttribute("class",f.replace(mr,l)):i.setAttribute("class",`${f} ${l}`)},Ue=async(i,l,f)=>{const{left:w,right:j,top:A,bottom:R}=ht(i),{width:et,height:ot}=He(),{width:st,height:gt}=await fe(l);if(j<0||R<0||w>et||A>ot)return{};if(f==="vertical"){const nt={left:w+"px",top:R+10+"px",right:"auto",bottom:"auto"};let bt="lt";w+st>et&&(nt.left=j-st+"px",bt="rt"),R+10+gt>ot&&(nt.top=A-10-gt+"px",bt=bt==="lt"?"lb":"rb"),It(l,nt),De(l,bt)}else{const nt={left:j+10+"px",top:A+"px",right:"auto",bottom:"auto"};let bt="tl";j+10+st>et&&(nt.left=w-10-st+"px",bt="tr"),A+gt>ot&&(nt.top=R-gt+"px",bt=bt==="tl"?"bl":"br"),It(l,nt),De(l,bt)}},Le=(i,l,f="horizontal")=>{const w=he(Ue),j=()=>w(i,l,f);window.addEventListener("scroll",j,!1),window.addEventListener("resize",j,!1);const A=()=>{window.removeEventListener("scroll",j),window.removeEventListener("resize",j),It(l,{left:"",top:"",right:"",bottom:""})};return Ue(i,l,f),A},ar=({open:i,delay:l=250,children:f,mountNode:w,style:j,className:A="huxy-mask"})=>{const[R]=Mr(i,l);return(0,c.jsx)(Se,{mountNode:w,children:(0,c.jsx)("div",{children:(0,c.jsx)("div",{className:A,children:(0,c.jsx)("div",{style:{...j,display:R?"block":"none"},children:f})})})})};var $r=I(503),ke={};ke.styleTagTransform=Q(),ke.setAttributes=H(),ke.insert=S().bind(null,"head"),ke.domAPI=F(),ke.insertStyleElement=Et();var ao=x()($r.Z,ke);const _r=$r.Z&&$r.Z.locals?$r.Z.locals:void 0,Ur=({trigger:i="click",type:l,dropList:f,className:w,wrapStyle:j,children:A,...R})=>{const[et,ot]=(0,K.useState)(!1),st=(0,K.useRef)(),gt=(0,K.useRef)(),nt=(0,K.useRef)();D(st,Pt=>et&&ot(!1),[...new Set(["click",i.toLowerCase()])]),(0,K.useEffect)(()=>()=>nt.current?.(),[]);const bt=Pt=>{Pt.preventDefault(),ot(!0),nt.current=Le(st.current,gt.current,l)},Gt={[`on${dt(i)}`]:bt},Qt=["drop-wrap",et?"open":""].filter(Boolean).map(Pt=>_r[Pt]).join(" "),Tt=q(f)?f:f?.(()=>ot(!1),et);return(0,c.jsxs)("span",{ref:st,className:`${_r["drop-target"]}${w?` ${w}`:""}`,...Gt,...R,children:[A,(0,c.jsx)(ar,{open:et,className:"huxy-drop",children:(0,c.jsx)("div",{ref:gt,className:Qt,style:j,children:Tt})})]})},Xr=(i,l,f)=>{if(!ce())return;f=ne(f)?f.current:f??document.body;const w=document.createElement("span");w.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),l&&It(w,l),w.innerText=(i??"").replace(/[\r\n]/g,""),f.appendChild(w);const j=w.getBoundingClientRect();return f.removeChild(w),j};var Sr=I(918),a={};a.styleTagTransform=Q(),a.setAttributes=H(),a.insert=S().bind(null,"head"),a.domAPI=F(),a.insertStyleElement=Et();var h=x()(Sr.Z,a);const b=Sr.Z&&Sr.Z.locals?Sr.Z.locals:void 0,g=({title:i,placement:l="topRight",children:f,ellipsis:w,className:j,...A})=>(0,c.jsx)("span",{className:`${b[`huxy-tooltip-${l}`]}${j?` ${j}`:""}`,tooltip:i??f,...A,children:(0,c.jsx)("span",{className:w?b.ellipsis:"",children:f})}),p={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},W=i=>{const{children:l,style:f}=i,w=typeof l=="string",j=w?l:l?.props?.title??l?.props?.children,A=(0,K.useRef)(),[R,et]=(0,K.useState)(!0);return(0,K.useEffect)(()=>{if(A.current){const{width:ot}=Xr(j,null,A.current.parentNode),{width:st}=ht(A.current),gt=~~ot>~~st;gt!==R&&et(gt)}},[j]),(0,c.jsx)("span",{ref:A,style:{display:"flex",width:"100%",...f},children:R?w?(0,c.jsx)(g,{...i,ellipsis:!0}):(0,c.jsx)("span",{style:p,children:l}):w?l:l?.props?.children})},U=i=>i.children==null?"":(0,c.jsx)(W,{...i});var X=Object.defineProperty,Y=(i,l,f)=>l in i?X(i,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):i[l]=f,P=(i,l,f)=>(Y(i,typeof l!="symbol"?l+"":l,f),f);class vt extends K.default.Component{constructor(){super(...arguments),P(this,"state",{error:null})}static getDerivedStateFromError(l){return{error:l}}componentDidCatch(l,f){const{errorReport:w}=this.props;typeof w=="function"&&w({error:l,info:f.componentStack})}render(){const{error:l}=this.state,{fallback:f,children:w}=this.props;return l?f(l):w}}const zt=i=>l=>{if(typeof l=="function"||typeof l?.render=="function")return(0,c.jsx)(l,{});if(typeof l=="string"){const f=i?.[l];return f?(0,c.jsx)(f,{}):(0,c.jsx)("i",{className:l})}return l??null},At=i=>zt(i),yt=i=>({icon:l,defaultIcon:f})=>l?At(i)(l):l===!1?null:f,Ct=["","webkit","moz","ms"],Ot=i=>Ct.map(l=>l?`${l}FullscreenElement`:"fullscreenElement").find(l=>i[l]),ft=i=>Ct.map(l=>l?`${l}RequestFullscreen`:"requestFullscreen").find(l=>i[l]),at=i=>Ct.map(l=>l?`${l}ExitFullscreen`:"exitFullscreen").find(l=>i[l]),Dt=Ct.map(i=>`${i}fullscreenchange`),Kt=i=>{if(!ce())return;i=ne(i)?i.current:i??document.body;const l=Ot(document),f=ft(i),w=at(document);document[l]?document[w]?.():i[f]?.()},le=i=>ce()?(Dt.map(l=>document.addEventListener(l,i,!1)),()=>Dt.map(l=>document.removeEventListener(l,i,!1))):void 0,se=i=>(0,c.jsx)("i",{...i,children:"..."}),Re=({panel:i,fullIcon:l=se,exitIcon:f=se,...w})=>{const j=ne(i)?i.current:i,[A,R]=(0,K.useState)();(0,K.useEffect)(()=>{const ot=le(()=>{R(st=>!st)});return()=>ot()},[]);const et=A?f:l;return(0,c.jsx)(et,{onClick:ot=>Kt(j),...w})};var ue=I(249),pe={};pe.styleTagTransform=Q(),pe.setAttributes=H(),pe.insert=S().bind(null,"head"),pe.domAPI=F(),pe.insertStyleElement=Et();var xr=x()(ue.Z,pe);const Fr=ue.Z&&ue.Z.locals?ue.Z.locals:void 0,We=({gutter:i=10,className:l,overflow:f="hidden",...w},j)=>{const A=l?` ${l}`:"";let R=10;if(Array.isArray(i)){const et=[...i];i=et[0],R=et[1]??et[0]}return(0,c.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(R/2)}px`,overflow:f},children:(0,c.jsx)("div",{className:`row${A}`,...w,ref:j})})},lr=(0,K.forwardRef)(We),me=({rowProps:i,colProps:l,children:f,Row:w=lr,Col:j=ve})=>{const A=[];return K.Children.map(f,R=>{R&&(R.type?.description==="react.fragment"?A.push(...R.props.children):A.push(R))}),(0,c.jsx)(w,{...i,children:A.map((R,et)=>(0,c.jsx)(j,{...l,...R.props.itemprops,children:R},`huuxy_grid_${et}`))})},Qr=(i,l)=>(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...l}),yr=i=>{const{error:l={},info:f=""}=i||{},{message:w,stack:j,errMsg:A}=l;let R=A||j||l.toString();R=`${R}
${f}`.replace(/\r|\n|\r\n/g,"<br/>"),R=R.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),R=R.replace(/\s/g,"&nbsp;");const et=w?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,c.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Qr(R,{style:{color:"red"}}),et&&(0,c.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${et}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},xe=({children:i,report:l})=>{const f=(0,K.useRef)();return f.current?.state&&(f.current.state.error=null),(0,c.jsx)(vt,{ref:f,fallback:(w,j)=>yr({error:w,info:j}),errorReport:l,children:i})},ye=(i,l)=>Object.keys(l).map(f=>i.style[f]=l[f]),Xe=(i,l)=>Object.keys(l).map(f=>i.style[f]=""),Ye={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},to=({left:i,top:l,width:f,height:w})=>({left:`${i}px`,top:`${l}px`,width:`${f}px`,height:`${w}px`}),sr=i=>(0,c.jsx)("i",{...i,children:"..."}),Or=i=>{const{left:l,top:f}=ht(i),{width:w,height:j}=He(i);return{left:l,top:f,width:w,height:j}},ge=({panel:i,target:l,fullIcon:f=sr,exitIcon:w=sr})=>{i=ne(i)?i.current:i||document.body;const[j,A]=(0,K.useState)(),R=(0,K.useRef)(),et=(0,K.useRef)();(0,K.useEffect)(()=>{const gt=typeof l=="function"?l:()=>document.getElementsByClassName(l)[0];et.current=to(Or(gt())),R.current={...Ye,...to(Or(i))}},[i]);const ot=(gt,nt)=>{gt?(ye(nt,R.current),setTimeout(()=>{ye(nt,et.current)},0)):Xe(nt,R.current),A(gt)},st=j?w:f;return(0,c.jsx)(st,{onClick:gt=>ot(!j,i)})};var gr=I(548),Ce={};Ce.styleTagTransform=Q(),Ce.setAttributes=H(),Ce.insert=S().bind(null,"head"),Ce.domAPI=F(),Ce.insertStyleElement=Et();var qr=x()(gr.Z,Ce);const be=gr.Z&&gr.Z.locals?gr.Z.locals:void 0,Dr=({open:i,close:l,hasMask:f=!0,cancelText:w="\u53D6\u6D88",submit:j,submitText:A="\u786E\u5B9A",title:R="Modal \u5F39\u7A97",className:et,children:ot,delay:st=250,...gt})=>{const nt=["modal-wrap",i?"open":"",...et?.split(" ")??[]].filter(Boolean).map(bt=>be[bt]).join(" ");return(0,c.jsx)(Pe,{open:i,close:l,delay:st,hasMask:f,className:"huxy-modal",children:(0,c.jsx)("div",{className:nt,...gt,children:(0,c.jsxs)("div",{className:be["modal-container"],children:[(0,c.jsx)("div",{className:be["modal-header"],children:R}),(0,c.jsx)("div",{className:be["modal-content"],children:ot}),(0,c.jsxs)("div",{className:be["modal-footer"],children:[(0,c.jsx)("div",{className:`${be.btn} ${be.left}`,onClick:bt=>l?.(bt),children:w}),(0,c.jsx)("div",{className:`${be.btn} ${be.right}`,onClick:bt=>j?.(bt),children:A})]})]})})})};var Kr=I(990),br={};br.styleTagTransform=Q(),br.setAttributes=H(),br.insert=S().bind(null,"head"),br.domAPI=F(),br.insertStyleElement=Et();var uo=x()(Kr.Z,br);const ho=Kr.Z&&Kr.Z.locals?Kr.Z.locals:void 0,fo=({global:i,absolute:l})=>(0,c.jsx)("div",{className:`spinner${i?" global":""}${l?" absolute":""}`,children:(0,c.jsx)("figure",{className:"spinning"})});var Gr=I(232),Tr={};Tr.styleTagTransform=Q(),Tr.setAttributes=H(),Tr.insert=S().bind(null,"head"),Tr.domAPI=F(),Tr.insertStyleElement=Et();var Do=x()(Gr.Z,Tr);const Jr=Gr.Z&&Gr.Z.locals?Gr.Z.locals:void 0,po=i=>i?.filter?.(l=>typeof l=="function"),mo=(i,l)=>{const f=(0,K.useRef)(),{loading:w,title:j,plugins:A,children:R,className:et,...ot}=i,st=po(A),gt=st?.length,nt=et?` ${et}`:"",bt=ne(l)?l:f;return(0,c.jsxs)("div",{className:`${Jr.panel}${nt}`,...ot,ref:bt,children:[(j||gt)&&(0,c.jsxs)("div",{className:Jr["panel-header"],children:[j&&(0,c.jsx)("h4",{className:Jr["panel-title"],children:j}),gt&&(0,c.jsx)("div",{className:Jr["panel-plugins"],children:st.map((Gt,Qt)=>(0,c.jsx)("span",{className:"link",children:(0,c.jsx)(Gt,{panel:bt})},Qt))})]}),(0,c.jsx)("div",{className:Jr["panel-body"],children:R}),w&&(0,c.jsx)(fo,{})]})},To=(0,K.forwardRef)(mo),eo=i=>Er(i)==="array",xo=i=>eo(i)&&!!i.length,yo=({to:i,preventDefault:l,stopPropagation:f,...w})=>l?(0,c.jsx)("span",{...w}):(0,c.jsx)("a",{href:i,...w}),No=({item:i,...l})=>(0,c.jsx)("ul",{...l}),go=(i,...l)=>{const f={};return Object.keys(i).filter(Boolean).map(w=>{f[w]=j=>i[w](j,...l)}),f},bo=({data:i=[],events:l={},List:f=No,Link:w=yo,leftIcon:j,rightIcon:A,isHorizontal:R,isCollapsed:et,level:ot=0,parentOpen:st=!0})=>{const gt=et&&!ot,nt=!R&&!et&&!st;return i.map(bt=>{const{name:Gt,path:Qt,icon:Tt,rightIcon:Pt,active:Yt,open:Jt,children:qe,linkProps:cr}=bt,Pr=xo(qe),Ee=bt.id||Qt||Gt,Br=gt?bt.title??Gt:void 0,Ke=nt?"hidden":"",Ze=Tt??j,je=Pt??A,ur=Ze?(0,c.jsx)("div",{className:"node-left-icon",children:Ze===!0?(0,c.jsx)("i",{className:"default-left-icon"}):Ze}):null,wr=Gt?(0,c.jsx)("div",{className:"node-text",children:(0,c.jsx)("span",{children:Gt})}):null;if(Pr){const no=go(l,bt,ot),lo=[Ke,Jt?"open":""].filter(Boolean).join(" ");return(0,c.jsxs)("li",{className:lo,"has-children":"true",...no,children:[(0,c.jsxs)(w,{title:Br,className:`link${Yt?" active":""}`,to:Qt,preventDefault:!0,stopPropagation:!1,...cr,children:[ur,wr,je?(0,c.jsx)("div",{className:"node-right-icon",children:je===!0?(0,c.jsx)("i",{className:"default-right-icon"}):je}):null]}),(0,c.jsx)(f,{item:bt,children:bo({data:qe,events:l,List:f,Link:w,leftIcon:j,rightIcon:A,isHorizontal:R,isCollapsed:et,level:ot+1,parentOpen:!!Jt})})]},Ee)}return(0,c.jsx)("li",{className:Ke,children:(0,c.jsxs)(w,{title:Br,className:`link${Yt?" active":""}`,to:Qt,...cr,children:[ur,wr]})},Ee)})},Nr=bo,Io=(i,...l)=>(0,c.jsx)("div",{"v-html":i,...l});var Ir=I(575),Ar={};Ar.styleTagTransform=Q(),Ar.setAttributes=H(),Ar.insert=S().bind(null,"head"),Ar.domAPI=F(),Ar.insertStyleElement=Et();var vo=x()(Ir.Z,Ar);const Ao=Ir.Z&&Ir.Z.locals?Ir.Z.locals:void 0,Po=i=>(0,c.jsx)("div",{style:{padding:"6px 15px"},children:i}),wo=({activekey:i,tabs:l=[],switchTab:f,trackColor:w,flex:j,...A},R)=>{const[et,ot]=(0,K.useState)(i??l[0]?.key),[st,gt]=(0,K.useState)({}),nt=(0,K.useRef)({}),bt=(0,K.useRef)();(0,K.useEffect)(()=>{const Tt=nt.current[et];Tt&&Gt(Tt)},[]);const Gt=Tt=>{const{left:Pt,width:Yt}=ht(Tt),Jt=ht(bt.current).left;gt({left:Pt-Jt,width:Yt})},Qt=(Tt,Pt)=>{Tt.stopPropagation(),ot(Pt),typeof f=="function"&&f(Pt),Gt(Tt.currentTarget)};return(0,c.jsxs)("div",{className:"tabs-header-wrap",...A,ref:R,children:[(0,c.jsx)("ul",{className:`tabs-header${j?" flex":""}`,ref:bt,children:l.map(Tt=>(0,c.jsx)("li",{ref:Pt=>nt.current[Tt.key]=Pt,className:`th-item${et===Tt.key?" active":""}`,onClick:Pt=>Qt(Pt,Tt.key),children:typeof Tt.renderTabs=="function"?Tt.renderTabs(Tt,et===Tt.key):Po(Tt.value)},Tt.key))}),(0,c.jsx)("div",{className:"th-track",style:{...st,color:w}})]})},Bo=(0,K.forwardRef)(wo),ro=(i,l,f="id",w="children")=>{if(!eo(i))return null;const j=A=>{for(let R=0,et=A.length;R<et;R++){const ot=A[R];if(ot[f]===l)return[ot];if(eo(ot[w])){const st=j(ot[w]);if(st)return[ot].concat(st)}}};return j(i)},Lo=i=>++i,ko=()=>{const[,i]=(0,K.useState)(0);return(0,K.useCallback)(()=>i(Lo),[])},Co=i=>{const{children:l,open:f}=i;let w=0;if(f&&l?.length){w=l.length;let j=0;return l.map(A=>j+=Co(A)),w+j}return w},Eo=({item:i,style:l,...f})=>(0,c.jsx)("ul",{style:{...l,"--count":Co(i)},...f});var oo=I(942),vr={};vr.styleTagTransform=Q(),vr.setAttributes=H(),vr.insert=S().bind(null,"head"),vr.domAPI=F(),vr.insertStyleElement=Et();var nn=x()(oo.Z,vr);const Ro=oo.Z&&oo.Z.locals?oo.Z.locals:void 0,Wo=i=>(0,c.jsx)("ul",{...i}),jo=(i,l)=>i?Eo:({item:f,...w})=>(0,c.jsx)(Wo,{className:l==="right"?"left":"",...w}),Yo=i=>{const{data:l=[],collapsed:f=!1,type:w="vertical",Link:j,width:A,bgColor:R,itemHeight:et,collapsedWidth:ot,itemPadding:st,style:gt,className:nt,...bt}=i,Gt=(0,K.useRef)(),Qt=(0,K.useRef)();(0,K.useEffect)(()=>()=>clearTimeout(Gt.current),[]);const Tt=ko(),Pt=w==="horizontal",Yt=!Pt&&f,Jt={onClick:(Ke,Ze)=>{if(Ke.stopPropagation(),!Pt&&!Yt){const je=ro(l,Ze.path,"path"),ur=je[je.length-1];ur.open=!ur.open,Tt()}},onMouseEnter:(Ke,Ze,je)=>{Yt&&!je&&(clearTimeout(Gt.current),Qt.current.style.width="var(--maxWidth)")},onMouseLeave:(Ke,Ze,je)=>{Yt&&!je&&(Gt.current=setTimeout(()=>Qt.current.style.width="",200))}},qe=(Pt?["huxy-horizontal-tree",nt]:["huxy-tree",nt,Yt?"collapsed":""]).filter(Boolean).join(" "),{float:cr,...Pr}=bt?.style??{},Ee={"--bgColor":R,"--itemHeight":et,"--nodeListWidth":A,...Pr};Pt?(Ee["--itemPadding"]=st,Ee["--nodeFloat"]=cr):(Ee["--width"]=A,Ee["--collapsedWidth"]=ot);const Br=jo(!Pt&&!Yt,cr);return(0,c.jsx)("div",{ref:Qt,className:qe,style:Ee,...bt,children:(0,c.jsx)("div",{className:"huxy-tree-track",children:(0,c.jsx)("ul",{className:"huxy-tree-root",children:Nr({data:l,events:Jt,List:Br,Link:j,leftIcon:!0,rightIcon:!0,isHorizontal:Pt,isCollapsed:Yt})})})})}})();var jt=ut.PC,Wr=ut.rK,Zt=ut.lr,Ht=ut.JX,N=ut.dy,V=ut.Ud,B=ut.mH,Z=ut.SV,M=ut.Hn,tt=ut.rj,G=ut.V7,rt=ut.AN,wt=ut.zd,kt=ut.BQ,Ft=ut.u_,Nt=ut.s_,ct=ut.h_,_t=ut.X2,Vt=ut.$j,Mt=ut.GK,k=ut.u,Lt=ut.mp,Rt=ut.C2,Wt=ut.pC,ie=ut.ff,L=ut.d2,it=ut.Uw},8611:function(Rr,$t,re){var Bt;re.d($t,{Bv:function(){return Wr},rU:function(){return ut},tv:function(){return Ht},yj:function(){return Zt}});var u=re(7378),ze={990:(N,V,B)=>{B.d(V,{Z:()=>wt});var Z=B(601),M=B.n(Z),tt=B(609),G=B.n(tt),rt=G()(M());rt.push([N.id,`@keyframes before {
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
`,""]),rt.locals={};const wt=rt},267:(N,V,B)=>{B.d(V,{Z:()=>wt});var Z=B(601),M=B.n(Z),tt=B(609),G=B.n(tt),rt=G()(M());rt.push([N.id,`.Iuy_e {
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
`,""]),rt.locals={link:"Iuy_e",active:"D3oJg"};const wt=rt},609:N=>{N.exports=function(V){var B=[];return B.toString=function(){return this.map(function(Z){var M="",tt=typeof Z[5]<"u";return Z[4]&&(M+="@supports (".concat(Z[4],") {")),Z[2]&&(M+="@media ".concat(Z[2]," {")),tt&&(M+="@layer".concat(Z[5].length>0?" ".concat(Z[5]):""," {")),M+=V(Z),tt&&(M+="}"),Z[2]&&(M+="}"),Z[4]&&(M+="}"),M}).join("")},B.i=function(Z,M,tt,G,rt){typeof Z=="string"&&(Z=[[null,Z,void 0]]);var wt={};if(tt)for(var kt=0;kt<this.length;kt++){var Ft=this[kt][0];Ft!=null&&(wt[Ft]=!0)}for(var Nt=0;Nt<Z.length;Nt++){var ct=[].concat(Z[Nt]);tt&&wt[ct[0]]||(typeof rt<"u"&&(typeof ct[5]>"u"||(ct[1]="@layer".concat(ct[5].length>0?" ".concat(ct[5]):""," {").concat(ct[1],"}")),ct[5]=rt),M&&(ct[2]&&(ct[1]="@media ".concat(ct[2]," {").concat(ct[1],"}")),ct[2]=M),G&&(ct[4]?(ct[1]="@supports (".concat(ct[4],") {").concat(ct[1],"}"),ct[4]=G):ct[4]="".concat(G)),B.push(ct))}},B}},601:N=>{N.exports=function(V){return V[1]}},837:(N,V,B)=>{var Z,M=B(810),tt=Symbol.for("react.element"),G=Symbol.for("react.fragment"),rt=Object.prototype.hasOwnProperty,wt=M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,kt={key:!0,ref:!0,__self:!0,__source:!0};function Ft(Nt,ct,_t){var Vt,Mt={},k=null,Lt=null;_t!==void 0&&(k=""+_t),ct.key!==void 0&&(k=""+ct.key),ct.ref!==void 0&&(Lt=ct.ref);for(Vt in ct)rt.call(ct,Vt)&&!kt.hasOwnProperty(Vt)&&(Mt[Vt]=ct[Vt]);if(Nt&&Nt.defaultProps)for(Vt in ct=Nt.defaultProps,ct)Mt[Vt]===void 0&&(Mt[Vt]=ct[Vt]);return{$$typeof:tt,type:Nt,key:k,ref:Lt,props:Mt,_owner:wt.current}}Z=G,V.jsx=Ft,V.jsxs=Ft},322:(N,V,B)=>{N.exports=B(837)},62:N=>{var V=[];function B(tt){for(var G=-1,rt=0;rt<V.length;rt++)if(V[rt].identifier===tt){G=rt;break}return G}function Z(tt,G){for(var rt={},wt=[],kt=0;kt<tt.length;kt++){var Ft=tt[kt],Nt=G.base?Ft[0]+G.base:Ft[0],ct=rt[Nt]||0,_t="".concat(Nt," ").concat(ct);rt[Nt]=ct+1;var Vt=B(_t),Mt={css:Ft[1],media:Ft[2],sourceMap:Ft[3],supports:Ft[4],layer:Ft[5]};if(Vt!==-1)V[Vt].references++,V[Vt].updater(Mt);else{var k=M(Mt,G);G.byIndex=kt,V.splice(kt,0,{identifier:_t,updater:k,references:1})}wt.push(_t)}return wt}function M(tt,G){var rt=G.domAPI(G);rt.update(tt);var wt=function(kt){if(kt){if(kt.css===tt.css&&kt.media===tt.media&&kt.sourceMap===tt.sourceMap&&kt.supports===tt.supports&&kt.layer===tt.layer)return;rt.update(tt=kt)}else rt.remove()};return wt}N.exports=function(tt,G){G=G||{},tt=tt||[];var rt=Z(tt,G);return function(wt){wt=wt||[];for(var kt=0;kt<rt.length;kt++){var Ft=rt[kt],Nt=B(Ft);V[Nt].references--}for(var ct=Z(wt,G),_t=0;_t<rt.length;_t++){var Vt=rt[_t],Mt=B(Vt);V[Mt].references===0&&(V[Mt].updater(),V.splice(Mt,1))}rt=ct}}},793:N=>{var V={};function B(M){if(typeof V[M]>"u"){var tt=document.querySelector(M);if(window.HTMLIFrameElement&&tt instanceof window.HTMLIFrameElement)try{tt=tt.contentDocument.head}catch{tt=null}V[M]=tt}return V[M]}function Z(M,tt){var G=B(M);if(!G)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");G.appendChild(tt)}N.exports=Z},173:N=>{function V(B){var Z=document.createElement("style");return B.setAttributes(Z,B.attributes),B.insert(Z,B.options),Z}N.exports=V},892:(N,V,B)=>{function Z(M){var tt=B.nc;tt&&M.setAttribute("nonce",tt)}N.exports=Z},36:N=>{function V(M,tt,G){var rt="";G.supports&&(rt+="@supports (".concat(G.supports,") {")),G.media&&(rt+="@media ".concat(G.media," {"));var wt=typeof G.layer<"u";wt&&(rt+="@layer".concat(G.layer.length>0?" ".concat(G.layer):""," {")),rt+=G.css,wt&&(rt+="}"),G.media&&(rt+="}"),G.supports&&(rt+="}");var kt=G.sourceMap;kt&&typeof btoa<"u"&&(rt+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(kt))))," */")),tt.styleTagTransform(rt,M,tt.options)}function B(M){if(M.parentNode===null)return!1;M.parentNode.removeChild(M)}function Z(M){if(typeof document>"u")return{update:function(){},remove:function(){}};var tt=M.insertStyleElement(M);return{update:function(G){V(tt,M,G)},remove:function(){B(tt)}}}N.exports=Z},464:N=>{function V(B,Z){if(Z.styleSheet)Z.styleSheet.cssText=B;else{for(;Z.firstChild;)Z.removeChild(Z.firstChild);Z.appendChild(document.createTextNode(B))}}N.exports=V},810:N=>{var V=Z=>{var M={};return mt.d(M,Z),M},B=Z=>()=>Z;N.exports=Bt||(Bt=re.t(u,2))}},Te={};function mt(N){var V=Te[N];if(V!==void 0)return V.exports;var B=Te[N]={id:N,exports:{}};return ze[N](B,B.exports,mt),B.exports}mt.n=N=>{var V=N&&N.__esModule?()=>N.default:()=>N;return mt.d(V,{a:V}),V},mt.d=(N,V)=>{for(var B in V)mt.o(V,B)&&!mt.o(N,B)&&Object.defineProperty(N,B,{enumerable:!0,get:V[B]})},mt.o=(N,V)=>Object.prototype.hasOwnProperty.call(N,V),mt.nc=void 0;var I={};(()=>{mt.d(I,{rU:()=>_r,cb:()=>Sr,Bv:()=>Xr,yj:()=>Ur,tv:()=>De});var N=mt(810);const V=a=>Object.prototype.toString.call(a).slice(8,-1).toLowerCase(),B=a=>V(a)==="array",Z=a=>V(a)==="object",M=a=>a?.$$typeof&&typeof a.$$typeof=="symbol"&&a.$$typeof.description==="react.element",tt=a=>a?.__v_isVNode,G=(a,h)=>Object.prototype.hasOwnProperty.call(a??{},h),rt=a=>{if(!B(a)&&!Z(a))return a;const h=B(a)?[]:{};for(const b in a)if(G(a,b)){const g=a[b];h[b]=M(g)||tt(g)||typeof g!="object"?g:g!==a?rt(g):"cyclic"}else Object.setPrototypeOf(h,{[b]:a[b]});return h},wt=rt,kt=a=>V(a)==="function",Ft=a=>V(a)==="promise"||Z(a)&&kt(a.then),Nt=(a,h=12e4,b="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Ft(a))return{};let g=null,p=null;return{promiseFn:new Promise((W,U)=>{g=(X="canceled")=>{clearTimeout(p),W({canceled:!0,errMsg:X})},h&&(h=typeof h!="number"?12e4:h,p=setTimeout(()=>g(b),h)),a.then(X=>{clearTimeout(p),W({result:X,errMsg:!1})}).catch(X=>{clearTimeout(p),U(X)})}),cancelFn:g}},ct=a=>a?a.charAt(a.length-1)==="/"?a.slice(0,-1):a:"";var _t=mt(322);const Vt=(a,h)=>(0,_t.jsx)("div",{dangerouslySetInnerHTML:{__html:a},...h}),Mt=a=>{const{error:h={},info:b=""}=a||{},{message:g,stack:p,errMsg:W}=h;let U=W||p||h.toString();U=`${U}
${b}`.replace(/\r|\n|\r\n/g,"<br/>"),U=U.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),U=U.replace(/\s/g,"&nbsp;");const X=g?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,_t.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Vt(U,{style:{color:"red"}}),X&&(0,_t.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${X}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},k=()=>{const a={};return{on:(h,b)=>{a[h]||(a[h]=[]),a[h].indexOf(b)===-1&&a[h].push(b)},emit:(h,b)=>{a[h]&&a[h].map(g=>g(b))},off:(h,b=null)=>{if(a[h]){if(typeof b!="function")return delete a[h];const g=a[h].indexOf(b);g>-1&&(a[h].splice(g,1),a[h].length||delete a[h])}}}},Lt=a=>{const h={};for(let b in a)G(a,b)||(h[b]=a[b]);return h},Rt=(a,h)=>{if(!Z(a))return h;if(!Z(h))return a;const b={...Lt(a),...Lt(h)},g={...a,...h};return Object.keys(b).map(p=>{Object.setPrototypeOf(g,{[p]:b[p]})}),g},Wt=()=>{const{on:a,emit:h,off:b}=k(),g={};return{getState:p=>wt(g[p]),setState:(p,W=!1)=>{if(typeof p=="function"&&(p=p(wt(g))),!Z(p))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const U=wt(p);Object.keys(U).map(X=>{const Y=g[X],P=U[X],vt=Z(P)&&Z(Y)?Rt(Y,P):P;!W&&h(X,vt),g[X]=vt})},subscribe:(p,W)=>(a(p,W),()=>b(p,W)),unsubscribe:b,clean:p=>{typeof p=="string"?g[p]=void 0:Array.isArray(p)?p.map(W=>g[W]=void 0):Object.keys(g).map(W=>g[W]=void 0)}}},ie=a=>(h,b)=>{const[g,p]=(0,N.useState)(()=>{const Y=a?.getState(h);return Y!==void 0?Y:(b!==void 0&&a?.setState({[h]:b},!0),b)}),W=(0,N.useCallback)(Y=>a?.setState({[h]:typeof Y=="function"?Y(a?.getState(h)):Y}),[]),U=(0,N.useCallback)(Y=>a?.subscribe(h,Y),[]),X=(0,N.useCallback)((Y=Y)=>a?.clean(Y),[]);return(0,N.useEffect)(()=>{a?.subscribe(h,Y=>p(Y))},[]),[g,W,U,X]},L=Wt(),it=ie(L),c=k(),$=k(),x="push-emitter",E="replace-emitter",F="useRoute-emitter",O={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},S="/404",C={getState:()=>history.state,go:a=>history.go(a),forward:()=>history.forward(),back:()=>history.back()},H=(a,h,b,g,p=[])=>{const W=Y=>{for(let P=0,vt=Y.length;P<vt;P++){const zt=Y[P],At=zt[g].split("?")[0];if(new RegExp("^"+At.replace(/:[^/]+/g,"[^/]+")+"$").test(h))return zt;if(B(zt[b])){const yt=W(zt[b]);if(yt)return yt}}},U=W(a);if(!U)return S;const{redirect:X}=U;return X?p.includes(X)?p:(p.push(X),H(a,X.split("?")[0],b,g,p)):p[p.length-1]},xt=(a,h,b,g,p)=>{if(!B(a))return null;const W=vt=>{const zt=vt.split("/"),At=h.split("/"),yt={};return zt.map((Ct,Ot)=>Ct.indexOf(":")===0&&(yt[Ct.slice(1)]=At[Ot])),yt},U=(vt,zt)=>{const At=[],yt=zt.split("/:")[0];for(let Ct=0,Ot=vt.length;Ct<Ot;Ct++){const ft=vt[Ct];if(ft[p]===yt){ft.active=!0;const{name:at,title:Dt,icon:Kt,params:le}=ft;At.push({name:at,title:Dt,icon:Kt,params:le,[p]:yt})}else if(zt.indexOf(`${ft[p]}/`)===0){ft.active=!0;const at=W(ft[p]),Dt=Object.keys(at).map(ue=>at[ue]).join("/"),{name:Kt,title:le,icon:se}=ft,Re=Dt?`${yt}/${Dt}`:ft[p];At.push({name:Kt,title:le,icon:se,[p]:Re,params:{...ft.params,...at}})}else if(ft[p]===zt){ft.active=!0;const at=W(ft[p]),{[g]:Dt,...Kt}=ft;At.push({...Kt,[p]:h,params:{...Kt.params,...b,...at}})}}return At},X=(vt,zt)=>{for(let At=0,yt=vt.length;At<yt;At++){const Ct=vt[At];if(zt.indexOf(`${Ct[p]}/`)===0){Ct.active=!0;return}}},Y=vt=>{for(let zt=0,At=vt.length;zt<At;zt++){const yt=vt[zt],Ct=(yt[p]||"").split("?")[0];if(Ct===h){yt.hideMenu&&X(vt,yt.parentPath||Ct),yt.active=!0;const{[g]:Ot,...ft}=yt;return[{...ft,params:{...ft.params,...b}}]}if(new RegExp("^"+Ct.replace(/:[^/]+/g,"[^/]+")+"$").test(h))return U(vt,Ct);if(B(yt[g])){const Ot=Y(yt[g]);if(Ot){yt.active=!0,yt.open=!0;const{[g]:ft,...at}=yt;return[at,...Ot]}}}},P=Y(a)||[];return{result:a,current:P}},Et=(a,h,b)=>a.filter(g=>g.hideMenu||g[b].indexOf("/:")>-1?!1:(B(g[h])&&(g[h]=Et(g[h],h,b)),!0)),Ut=(a,h,b,g="children",p="path")=>{const W=H(a,h,g,p);if(W)return{redirect:W};const{result:U,current:X}=xt(a,h,b,g,p),Y=Et(U,g,p);return{current:X,menu:Y}},Q=a=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(a),Xt=(a,h)=>{const b=["#/","/"],g=b[!!h-0];if(!a||b.includes(a))return g;const p=a.charAt(a.length-1)==="/"?a.slice(0,-1):a;return h||p.indexOf("#/")>-1?p:`#${p}`},St=(a,h,b,g=!1)=>{const p=Xt(h,b);return g?p:b?a&&p==="/"?a:`${a}${p}`:a?`${a}/${p}`:p},qt=(a,h,b,g,p,W)=>{if(!B(a))return a;const U=(X,Y="")=>X.filter(P=>!P.denied).map(P=>{if(!W&&!P.exact&&!Q(P[g])){(!P[g]||P[g]==="javascript:;")&&(P[g]="");const vt=P[g].charAt(0)==="/"&&Y.charAt(Y.length-1)==="/"?P[g].slice(1):P[g].charAt(0)!=="/"&&Y.charAt(Y.length-1)!=="/"?`/${P[g]}`:P[g];P[g]=Y?Y+vt:St(p,vt,h)}return P.redirect&&(P.redirect=St(p,P.redirect,h)),B(P[b])&&(P[b]=U(P[b],P[g]),!P.redirect&&P[b].length&&(P.redirect=P[b][0][g])),P});return U(a)},ae=a=>{if(!Z(a))return"";const h=[];return Object.keys(a).map((b,g)=>{const p=g>0?"&":"?";h.push(`${p}${b}=${a[b]}`)}),h.join("")},oe=(a="")=>{const[h,b]=a.split("?");if(b){const g={};return b.split("&").map(p=>{const[W,U]=p.split("=");g[W]=U}),{path:h,params:g}}return{path:h}},K=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},de=(a,h)=>{for(let b=a.length-1,g;g=a[b--];){const{title:p,name:W}=g;if(typeof p=="string"&&p.length)return document.title=p;if((p==null||p===!0)&&W)return document.title=h?`${W}-${h}`:W;if(h)return document.title=h}},Ge=a=>{const{pathname:h,search:b,hash:g}=location;if(a){const X=Xt(h,a),Y=decodeURIComponent(`${X}${b}`),{params:P}=oe(Y);return{path:Y,params:P}}const p=decodeURIComponent(Xt(g,a)),{params:W}=oe(p),U=ct(h);return{path:U?`${U}/${p}`:p,params:W}},Ve=(a,h,b)=>{typeof a=="function"&&a({...h,stay:new Date-b})},kr=(a,h,b,g)=>{let p=typeof a=="string"?a:a.path??"";const W=ae(a.query);Q(p)||(p=St(b,p,g,a.exact)),window?.open(`${p}${W}`,h)},hr=(a,h,b,g)=>{if(a.target){kr(a,a.target,h,b);return}let p,W,U;if(typeof a=="string")p=a;else if(Z(a))p=a.path,W=a.params,U=a.query;else return;!p||p==="."||p==="./"?p=g:p.indexOf("./")===0?p=`${g.split("?")[0]}${p.replace("./","/")}`:p.indexOf("../")===0&&(p=`${g.split("?")[0].split("/").slice(0,-1).join("/")}${p.replace("../","/")}`),p=St(h,p,b,a?.exact);const X=oe(p);p=X.path;const Y={...X.params,...U},P=ae(Y);return p=`${p}${P}`,W={...W,...Y},p===g?!1:{path:p,params:W}},Je=(a,h)=>{const b=a.split(h);return b.length>1?["","/"].includes(b[1].slice(0,1)):!1},Cr=k(),Me=a=>{const{on:h,emit:b,off:g}=Cr;return{on:p=>h(a,p),emit:p=>b(a,p),off:p=>g(a,p)}},fr=a=>(h,b)=>{const{getState:g,setState:p,subscribe:W,unsubscribe:U,clean:X}=a;return b!==void 0&&p({[h]:b},!0),{getState:()=>g(h),setState:(Y,P)=>p({[h]:Y},P),subscribe:Y=>W(h,Y),unsubscribe:()=>U(h),clean:()=>X(h)}},ce=Wt(),Er=fr(ce),$e=Me("push-emitter"),He=Me("replace-emitter"),he=Er("route-store"),jr=k(),ne=Wt(),zr=ie(ne),Qe=()=>![typeof window,typeof document].includes("undefined"),Yr=a=>{if(!Qe())return;const h=document.createElement("div");return h.innerHTML=a,h.children[0]};var pr=Object.defineProperty,Zr=(a,h,b)=>h in a?pr(a,h,{enumerable:!0,configurable:!0,writable:!0,value:b}):a[h]=b,Ne=(a,h,b)=>(Zr(a,typeof h!="symbol"?h+"":h,b),b);class Ie extends N.default.Component{constructor(){super(...arguments),Ne(this,"state",{error:null})}static getDerivedStateFromError(h){return{error:h}}componentDidCatch(h,b){const{errorReport:g}=this.props;typeof g=="function"&&g({error:h,info:b.componentStack})}render(){const{error:h}=this.state,{fallback:b,children:g}=this.props;return h?b(h):g}}const tr=({children:a,report:h})=>{const b=(0,N.useRef)();return b.current?.state&&(b.current.state.error=null),(0,_t.jsx)(Ie,{ref:b,fallback:(g,p)=>Mt({error:g,info:p}),errorReport:h,children:a})};var _e=mt(62),er=mt.n(_e),Ae=mt(36),ve=mt.n(Ae),Vr=mt(793),rr=mt.n(Vr),Mr=mt(892),Se=mt.n(Mr),or=mt(173),nr=mt.n(or),Hr=mt(464),Pe=mt.n(Hr),Fe=mt(990),s={};s.styleTagTransform=Pe(),s.setAttributes=Se(),s.insert=rr().bind(null,"head"),s.domAPI=ve(),s.insertStyleElement=nr();var v=er()(Fe.Z,s);const y=Fe.Z&&Fe.Z.locals?Fe.Z.locals:void 0,_=({global:a,absolute:h})=>(0,_t.jsx)("div",{className:`spinner${a?" global":""}${h?" absolute":""}`,children:(0,_t.jsx)("figure",{className:"spinning"})}),D=()=>{const a=(0,N.useRef)([]);return(0,N.useEffect)(()=>()=>{a.current.map(h=>h.cancelFn()),a.current=[]},[]),{cancelablePromise:(0,N.useCallback)((h,b=!0)=>{const g=Nt(h,b);return a.current.indexOf(g)===-1&&a.current.push(g),g.promiseFn},[])}},q=(a={})=>{const{cancelablePromise:h}=D(),[b,g]=(0,N.useState)(a),p=(0,N.useRef)({}),W=(0,N.useRef)({}),U=(0,N.useCallback)((Y=null)=>{Array.isArray(Y)&&Y.length?Y.map(P=>p.current[P]=a[P]):p.current=a},[]),X=(0,N.useCallback)((Y,P,vt=!1)=>{const zt=Object.keys(Y),At=JSON.stringify(zt.sort());if(!W.current[At]){W.current[At]=!0,vt&&U(Array.isArray(vt)?vt:zt),zt.map(yt=>{p.current[yt]||(p.current[yt]={}),p.current[yt].pending=!0}),g({...p.current});for(let yt=0,Ct=zt.length;yt<Ct;yt++){const Ot=zt[yt];h(Y[Ot]).then(ft=>{let{result:at,errMsg:Dt}=ft;yt===Ct-1&&(W.current[At]=!1),typeof P=="function"&&(at=P(at)||at),p.current[Ot]={...at,pending:!1},Dt===!1&&g({...p.current})}).catch(ft=>{throw yt===Ct-1&&(W.current[At]=!1),p.current[Ot]={error:ft,pending:!1},g({...p.current}),ft})}}},[]);return[b,X,U]},dt=a=>Object.keys(a).length,ht=a=>{const{Comp:h,restResolve:b,loadPromise:g,params:p,children:W}=a,[U,X]=q(),[Y,P]=q();return(0,N.useEffect)(()=>{dt(b)&&X(b),dt(g)&&P(g)},[b,g]),(0,N.useEffect)(()=>{const vt=dt(U);vt&&vt===dt(b)&&p.store.setState(U)},[U]),(0,_t.jsx)(h,{...p,...U,...Y,children:W})},lt=a=>a===!1?null:M(a)?a:kt(a)?(0,_t.jsx)(a,{}):(0,_t.jsx)(_,{}),It=({Loading:a,ErrorBoundary:h,loadedComp:b})=>{const g=(0,_t.jsx)(N.Suspense,{fallback:lt(a),children:b});return h===!1?g:kt(h)?(0,_t.jsx)(h,{children:g}):(0,_t.jsx)(tr,{children:g})},we=({Comp:a,routerProps:h,children:b})=>{const{params:g,...p}=h,{loading:W,errorBoundary:U,...X}=g,Y=(0,_t.jsx)(ht,{Comp:a,...p,params:X,children:b});return It({Loading:W,ErrorBoundary:U,loadedComp:Y})},Be={},Oe=(a,h,b,g)=>Ft(b)?b.then(p=>we({Comp:a,routerProps:h,children:p.default??p})):we({Comp:a,routerProps:h,children:b}),fe=(a,h,b)=>{const g={},p={};return Z(a)?(Object.keys(a).map(W=>{const U=h.getState(W);U==null?p[W]=a[W](b):g[W]=U}),{cachedResolve:g,restResolve:p}):{cachedResolve:g,restResolve:p}},ir=(a,h)=>{if(!Z(a))return{};const b={};return Object.keys(a).map(g=>b[g]=a[g](h)),b},mr=a=>{const{current:h,menu:b,...g}=a,p=h.map(X=>{const{component:Y,resolve:P,loadData:vt,loading:zt,errorBoundary:At,icon:yt,...Ct}=X;return Ct}),W=[...h].filter(X=>X.component),U=(X=0)=>{if(!W.length)return null;const Y=W.shift(),{component:P,resolve:vt,loadData:zt,icon:At,key:yt,...Ct}=Y;if(typeof P=="function"||Ft(P)){const Ot=Ct.path;let ft=Be[Ot];const{cachedResolve:at,restResolve:Dt}=fe(vt,g.store,Ct),Kt={loadPromise:ir(zt,Ct),restResolve:Dt,params:{current:p,...g,...Ct,...at}},le=U(X+1);if(ft)return Oe(ft,Kt,le,Ot);try{ft=P(),ft=M(ft)?P:ft}catch{ft=P}return Ft(ft)?ft.then(se=>(ft=se.default??se,Be[Ot]=ft,Oe(ft,Kt,le,Ot))):(Be[Ot]=ft,Oe(ft,Kt,le,Ot))}return typeof P=="string"?Yr(P):P};return U()},De=a=>{const[h,b]=(0,N.useState)(a),[g,p]=(0,N.useState)(),[W,U]=(0,N.useState)(),X=(0,N.useRef)(),Y=(0,N.useRef)(),P=(0,N.useRef)(),vt=(0,N.useRef)(),zt=()=>{typeof X.current=="function"&&(X.current({cancel:O.cancelMsg}),X.current=null)},At=(0,N.useCallback)(at=>{typeof at=="function"?b(Dt=>({...Dt,...at(Dt)})):Z(at)&&b(Dt=>({...Dt,...at}))},[]),yt=(at,Dt="pushState")=>{const{basepath:Kt,browserRouter:le}=vt.current,se=P.current,Re=hr(at,Kt,le,se);if(!Re)return;const{path:ue,params:pe}=Re;ft({inputPath:ue,inputParams:pe},()=>history[Dt](at?.state,"",ue))},Ct=(0,N.useCallback)(at=>yt(at),[]),Ot=(0,N.useCallback)(at=>yt(at,"replaceState"),[]),ft=(0,N.useCallback)(({inputPath:at="",inputParams:Dt={}},Kt)=>{const le=+new Date,{browserRouter:se,childKey:Re,idKey:ue,title:pe,routers:xr,beforeRender:Fr,afterRender:We,basepath:lr,allowedNotFound:me,...Qr}=vt.current;if(!at){const{path:xe,params:ye}=Ge(se);at=xe,Dt={...Dt,...ye}}const yr=P.current;new Promise((xe,ye)=>{xr?.length||ye("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),at!==P.current&&typeof Fr=="function"?Fr({path:at,params:Dt,prevPath:yr},xe,ye):xe()}).then(xe=>{if(xe===!1)return;const ye=xe?.path;if(ye&&St(lr,ye,se)!==at){Ot(xe);return}Y.current=Y.current??at;const{redirect:Xe,current:Ye,menu:to}=Ut(wt(xr),at.split("?")[0],Dt,Re,ue);if(Xe){if(me&&Xe===S&&(typeof me=="boolean"||typeof me=="string"&&Je(Y.current,me)||B(me)&&me.find(ge=>Je(Y.current,ge))))return;if(B(Xe)){console.error(`\u522B\u95F9\uFF0C[${[at,...Xe].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return Xe===S?Ot({path:Xe}):Ct({path:Xe,exact:!0})}Kt?.(),at?.split("?")[0]!==P.current?.split("?")[0]&&K(),de(Ye,pe);const sr={eventBus:jr,store:ne,useStore:zr,...Qr,updateRouter:At,emitRouter:he.subscribe,router:{push:Ct,replace:Ot},current:Ye,menu:to,inputPath:Y.current,prevPath:yr,browserRouter:se,basepath:lr,title:pe,history:{...C,goBack:ge=>Ct({...ge,path:yr})}};he.setState(sr);const Or=mr(sr);if(P.current=at,Y.current=null,zt(),Ft(Or)){const{promiseFn:ge,cancelFn:gr}=Nt(Or,{delay:O.delay,msg:{timeout:O.timeoutMsg}});return X.current=gr,U(!0),ge.then(Ce=>{X.current=null;const{result:qr,errMsg:be}=Ce,Dr=be===!1?qr:be?.timeout?Mt({error:{errMsg:`${at} ${be.timeout}`}}):null;Dr&&(U(!1),Ve(We,Ye.slice(-1)[0],le),p(Dr))}).catch(Ce=>{throw X.current=null,U(!1),Ve(We,Ye.slice(-1)[0],le),p(Mt({error:Ce})),Ce})}Ve(We,Ye.slice(-1)[0],le),p(Or)}).catch(xe=>{throw p(Mt({error:xe})),xe})},[]);return(0,N.useEffect)(()=>{const{childKey:at="children",idKey:Dt="path",browserRouter:Kt=!1,routers:le=[],basepath:se="",exact:Re=!1,inputPath:ue="",inputParams:pe={},...xr}=h,Fr=ct(se),We=qt(wt(le),Kt,at,Dt,Fr,Re);vt.current={...xr,childKey:at,idKey:Dt,browserRouter:Kt,routers:We,basepath:Fr};const lr=Kt?"popstate":"hashchange",me=()=>ft({});return ft({inputPath:ue,inputParams:pe}),$e.on(Ct),He.on(Ot),window.addEventListener(lr,me,!1),()=>{zt(),$e.off(Ct),He.off(Ot),window.removeEventListener(lr,me,!1)}},[h]),{updateRouter:At,output:g,loading:W}},Ue=a=>{const{to:h,onClick:b,preventDefault:g,stopPropagation:p=!0,exact:W=!0,target:U,...X}=a,Y=()=>{const P=typeof h=="string"?{exact:W,path:h}:{exact:W,...h};$e.emit(P)};return P=>{if(P.preventDefault(),p&&P.stopPropagation(),!X?.disabled){if(!g){if(U){const{browserRouter:vt,basepath:zt}=he.getState();kr(h,U,zt,vt);return}Y()}typeof b=="function"&&b()}}};var Le=mt(267),ar={};ar.styleTagTransform=Pe(),ar.setAttributes=Se(),ar.insert=rr().bind(null,"head"),ar.domAPI=ve(),ar.insertStyleElement=nr();var $r=er()(Le.Z,ar);const ke=Le.Z&&Le.Z.locals?Le.Z.locals:void 0,ao=a=>{if(!a)return ke.link;const h=a.trim().split(" ").filter(Boolean),b=h.find(g=>g==="active")?[ke.active]:[];return[ke.link,...b,...h].join(" ")},_r=a=>{const{to:h,onClick:b,preventDefault:g,stopPropagation:p,exact:W,target:U,className:X,...Y}=a;return(0,_t.jsx)("span",{onClick:Ue(a),className:ao(X),...Y})},Ur=()=>{const[a,h]=(0,N.useState)(he.getState());return(0,N.useEffect)(()=>he.subscribe(b=>h(b)),[]),a},Xr=he.getState,Sr=he.subscribe})();var ut=I.rU,jt=I.cb,Wr=I.Bv,Zt=I.yj,Ht=I.tv},8124:function(Rr,$t,re){var Bt;re.d($t,{Nr:function(){return N},PQ:function(){return _t},Vd:function(){return Ht},Wy:function(){return B},fH:function(){return ut},xd:function(){return Mt}});var u=re(7378),ze={837:(k,Lt,Rt)=>{var Wt,ie=Rt(810),L=Symbol.for("react.element"),it=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,$=ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function E(F,O,S){var C,H={},xt=null,Et=null;S!==void 0&&(xt=""+S),O.key!==void 0&&(xt=""+O.key),O.ref!==void 0&&(Et=O.ref);for(C in O)c.call(O,C)&&!x.hasOwnProperty(C)&&(H[C]=O[C]);if(F&&F.defaultProps)for(C in O=F.defaultProps,O)H[C]===void 0&&(H[C]=O[C]);return{$$typeof:L,type:F,key:xt,ref:Et,props:H,_owner:$.current}}Wt=it,Lt.jsx=E,Wt=E},322:(k,Lt,Rt)=>{k.exports=Rt(837)},810:k=>{var Lt=Wt=>{var ie={};return mt.d(ie,Wt),ie},Rt=Wt=>()=>Wt;k.exports=Bt||(Bt=re.t(u,2))}},Te={};function mt(k){var Lt=Te[k];if(Lt!==void 0)return Lt.exports;var Rt=Te[k]={exports:{}};return ze[k](Rt,Rt.exports,mt),Rt.exports}mt.d=(k,Lt)=>{for(var Rt in Lt)mt.o(Lt,Rt)&&!mt.o(k,Rt)&&Object.defineProperty(k,Rt,{enumerable:!0,get:Lt[Rt]})},mt.o=(k,Lt)=>Object.prototype.hasOwnProperty.call(k,Lt);var I={};(()=>{mt.d(I,{fH:()=>Lt,r5:()=>$,Nd:()=>O,KY:()=>c,Vd:()=>H,Nr:()=>Et,D:()=>Xt,Wy:()=>Ve,zX:()=>kr,Cd:()=>Ut,Yz:()=>hr,D9:()=>Je,cb:()=>Ge,vO:()=>Me,Rx:()=>Zr,OH:()=>Ne,oR:()=>Ae,rE:()=>nr,PQ:()=>Pe,rf:()=>Q,xd:()=>Fe});var k=mt(810);const Lt=s=>(v,y)=>{const[_,D]=(0,k.useState)(()=>{const lt=s?.getState(v);return lt!==void 0?lt:(y!==void 0&&s?.setState({[v]:y},!0),y)}),q=(0,k.useCallback)(lt=>s?.setState({[v]:typeof lt=="function"?lt(s?.getState(v)):lt}),[]),dt=(0,k.useCallback)(lt=>s?.subscribe(v,lt),[]),ht=(0,k.useCallback)((lt=lt)=>s?.clean(lt),[]);return(0,k.useEffect)(()=>{s?.subscribe(v,lt=>D(lt))},[]),[_,q,dt,ht]},Rt=s=>Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),Wt=s=>Rt(s)==="object",ie=s=>Rt(s)==="function",L=s=>Rt(s)==="promise"||Wt(s)&&ie(s.then),it=(s,v=12e4,y="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!L(s))return{};let _=null,D=null;return{promiseFn:new Promise((q,dt)=>{_=(ht="canceled")=>{clearTimeout(D),q({canceled:!0,errMsg:ht})},v&&(v=typeof v!="number"?12e4:v,D=setTimeout(()=>_(y),v)),s.then(ht=>{clearTimeout(D),q({result:ht,errMsg:!1})}).catch(ht=>{clearTimeout(D),dt(ht)})}),cancelFn:_}},c=()=>{const s=(0,k.useRef)([]);return(0,k.useEffect)(()=>()=>{s.current.map(v=>v.cancelFn()),s.current=[]},[]),{cancelablePromise:(0,k.useCallback)((v,y=!0)=>{const _=it(v,y);return s.current.indexOf(_)===-1&&s.current.push(_),_.promiseFn},[])}},$=(s={})=>{const{cancelablePromise:v}=c(),[y,_]=(0,k.useState)(s),D=(0,k.useRef)({}),q=(0,k.useRef)({}),dt=(0,k.useCallback)((lt=null)=>{Array.isArray(lt)&&lt.length?lt.map(It=>D.current[It]=s[It]):D.current=s},[]),ht=(0,k.useCallback)((lt,It,we=!1)=>{const Be=Object.keys(lt),Oe=JSON.stringify(Be.sort());if(!q.current[Oe]){q.current[Oe]=!0,we&&dt(Array.isArray(we)?we:Be),Be.map(fe=>{D.current[fe]||(D.current[fe]={}),D.current[fe].pending=!0}),_({...D.current});for(let fe=0,ir=Be.length;fe<ir;fe++){const mr=Be[fe];v(lt[mr]).then(De=>{let{result:Ue,errMsg:Le}=De;fe===ir-1&&(q.current[Oe]=!1),typeof It=="function"&&(Ue=It(Ue)||Ue),D.current[mr]={...Ue,pending:!1},Le===!1&&_({...D.current})}).catch(De=>{throw fe===ir-1&&(q.current[Oe]=!1),D.current[mr]={error:De,pending:!1},_({...D.current}),De})}}},[]);return[y,ht,dt]},x=s=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(s),E=s=>new Promise((v,y)=>{const _=new FileReader;_.readAsDataURL(s),_.addEventListener("load",()=>v(_.result)),_.addEventListener("error",D=>y(D))}),F=async s=>{if(!x(s))return s;const v=await(await fetch(s)).blob();return await E(v)},O=s=>{const[v,y]=(0,k.useState)(s);return(0,k.useEffect)(()=>{(async _=>{const D=await F(_);y(D)})(s)},[]),v},S=(s,v)=>Object.prototype.hasOwnProperty.call(s??{},v),C=s=>S(s,"current"),H=(s,v,y="click")=>{(0,k.useEffect)(()=>{const _=q=>{const dt=C(s)?s.current:s;dt?.contains&&!dt.contains(q.target)&&v(q)},D=typeof y=="string"?[y]:y;return D.map(q=>{document.addEventListener(q,_,!1)}),()=>{D.map(q=>{document.removeEventListener(q,_,!1)})}},[s,v,y])},xt=(s=()=>{},v=60)=>{let y=null;return function(..._){clearTimeout(y),y=setTimeout(()=>s.apply(this,_),v)}},Et=(s,v=60)=>(0,k.useMemo)(()=>xt(s,v),[v]),Ut=()=>{const s=(0,k.useRef)(!0);return s.current?(s.current=!1,!0):!1},Q=(s,v=[])=>{const y=Ut();(0,k.useEffect)(()=>{if(!y)return s()},v)},Xt=(s,v=450)=>{const[y,_]=(0,k.useState)(s);return Q(()=>{let D;return s||v===0?_(s):D=setTimeout(()=>_(s),v),()=>D&&clearTimeout(D)},[s]),[y,_]},St=()=>![typeof window,typeof document].includes("undefined"),qt=s=>Rt(s).indexOf("element")>-1,ae=(s=null)=>St()?qt(s)?{width:s.clientWidth,height:s.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},oe=(s,v)=>{const y=[],_=s.children??[];for(let D=0,q=_.length;D<q;D++){const dt=_[D];dt.className.indexOf(v)>-1&&y.push(dt)}return y.length===0?null:y.length===1?y[0]:y},K=(s,v)=>{getComputedStyle(s).position==="static"&&(s.style.position="relative");const y=document.createElement("object");return y.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),y.setAttribute("class","resize-sensor"),y.onload=()=>{y.contentDocument.defaultView.addEventListener("resize",v,!1),v()},y.type="text/html",s.appendChild(y),y.data="about:blank",y},de=(s,v=60)=>{if(!St())return;s=C(s)?s.current:s??document.body;let y=oe(s,"resize-sensor"),_=[];const D=xt(()=>_.map(lt=>lt(s)),v),q=lt=>{oe(s,"resize-sensor")||(y=K(s,D)),_.indexOf(lt)===-1&&_.push(lt)},dt=lt=>{const It=_.indexOf(lt);It!==-1&&_.splice(It,1),_.length===0&&y&&ht()},ht=()=>{y&&y.parentNode&&(y.contentDocument&&y.contentDocument.defaultView.removeEventListener("resize",D,!1),y.parentNode.removeChild(y),y=void 0,_=[])};return{element:s,bind:q,unbind:dt,destroy:ht}},Ge=(s={})=>{const v=(0,k.useRef)(0),[y,_]=(0,k.useState)(s),D=(0,k.useCallback)(q=>{cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>_(q))},[]);return(0,k.useEffect)(()=>()=>cancelAnimationFrame(v.current),[]),[y,D]},Ve=(s=null,v=60)=>{const y=C(s)?s.current:s,{bind:_,destroy:D}=de(y,v),[q,dt]=Ge(ae(y));return(0,k.useEffect)(()=>(_(()=>y&&dt(ae(y))),()=>D()),[y]),q},kr=s=>{const v=(0,k.useRef)(null);return(0,k.useLayoutEffect)(()=>{v.current=s}),(0,k.useCallback)(v.current,[])},hr=(s,v)=>{const y=(0,k.useRef)();(0,k.useEffect)(()=>{y.current=s},[s]),(0,k.useEffect)(()=>{if(v){const _=setInterval(()=>y.current(),v);return()=>clearInterval(_)}},[v])},Je=s=>{const v=(0,k.useRef)();return(0,k.useEffect)(()=>{v.current=s},[s]),v.current},Cr=(s=null)=>St()?qt(s)?{left:s.scrollLeft,top:s.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0},Me=(s=null)=>{const[v,y]=Ge(Cr(s));return(0,k.useEffect)(()=>{const _=()=>y(Cr(s)),D=qt(s)?s:window;return D.addEventListener("scroll",_,{capture:!1,passive:!0}),()=>D.removeEventListener("scroll",_)},[s]),v},fr=s=>Rt(s)==="array",ce=s=>fr(s)&&!!s.length,Er=(s,v,y=[],_=!1,D=null)=>ce(s)?v?(y=typeof y=="string"?y.split(","):y,s.filter(q=>(y=y.length>0?y:Object.keys(q),y.filter(dt=>{const ht=q[dt];if(ht==null)return!1;if(_)return ht===v;const lt=new RegExp(v,"gi"),It=ht.toString().match(lt);return It&&D&&(q[dt]=D(ht.toString().replace(lt,`<span style="background-color:yellow">${It[0]}</span>`),{display:"inline-block"})),It}).length))):s:[],$e=(s,v="id")=>{if(!ce(s))return s;const y=[],_=[];return s.map(D=>{const q=Wt(D)?D[v]:D;_.includes(q)||(_.push(q),y.push(D))}),y},He=s=>s?.$$typeof&&typeof s.$$typeof=="symbol"&&s.$$typeof.description==="react.element",he=s=>s?.__v_isVNode,jr=s=>{if(!fr(s)&&!Wt(s))return s;const v=fr(s)?[]:{};for(const y in s)if(S(s,y)){const _=s[y];v[y]=He(_)||he(_)||typeof _!="object"?_:_!==s?jr(_):"cyclic"}else Object.setPrototypeOf(v,{[y]:s[y]});return v},ne=jr,zr=s=>(v,y="children")=>{if(!Array.isArray(v))return v;const _=ne(v),D=q=>{const dt=[];return q.map(ht=>{if(ce(ht[y])){const lt=D(ht[y])||[];ht[y]=lt,lt.length>0&&dt.push(ht)}}),s(q,dt)};return D(_)},Qe=(s,v,y,_="name",D="id",q="children",dt=!1)=>zr((ht,lt)=>$e([...Er(ht,v,_,dt,y),...lt],D))(s,q);var Yr=mt(322);const pr=(s,v)=>(0,Yr.jsx)("div",{dangerouslySetInnerHTML:{__html:s},...v}),Zr=(s=null,v=pr)=>{const[y,_]=(0,k.useState)(s),D=(0,k.useCallback)((...q)=>{const[dt,ht,...lt]=q;if(!ht)_(null);else{q=[dt,ht,v,...lt];const It=Qe(...q);_(It)}},[]);return[y,D]},Ne=s=>{const[v,y]=(0,k.useState)(s);return(0,k.useEffect)(()=>y(s),[s]),[v,y]},Ie=()=>{const s={};return{on:(v,y)=>{s[v]||(s[v]=[]),s[v].indexOf(y)===-1&&s[v].push(y)},emit:(v,y)=>{s[v]&&s[v].map(_=>_(y))},off:(v,y=null)=>{if(s[v]){if(typeof y!="function")return delete s[v];const _=s[v].indexOf(y);_>-1&&(s[v].splice(_,1),s[v].length||delete s[v])}}}},tr=s=>{const v={};for(let y in s)S(s,y)||(v[y]=s[y]);return v},_e=(s,v)=>{if(!Wt(s))return v;if(!Wt(v))return s;const y={...tr(s),...tr(v)},_={...s,...v};return Object.keys(y).map(D=>{Object.setPrototypeOf(_,{[D]:y[D]})}),_},er=(()=>{const{on:s,emit:v,off:y}=Ie(),_={};return{getState:D=>ne(_[D]),setState:(D,q=!1)=>{if(typeof D=="function"&&(D=D(ne(_))),!Wt(D))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const dt=ne(D);Object.keys(dt).map(ht=>{const lt=_[ht],It=dt[ht],we=Wt(It)&&Wt(lt)?_e(lt,It):It;!q&&v(ht,we),_[ht]=we})},subscribe:(D,q)=>(s(D,q),()=>y(D,q)),unsubscribe:y,clean:D=>{typeof D=="string"?_[D]=void 0:Array.isArray(D)?D.map(q=>_[q]=void 0):Object.keys(_).map(q=>_[q]=void 0)}}})(),Ae=Lt(er),ve=s=>s<10?"0"+s:s,Vr=(s=new Date)=>{const v=new Date(s),y=v.getFullYear(),_=v.getDay(),D=ve(v.getMonth()+1),q=ve(v.getDate()),dt=ve(v.getHours()),ht=ve(v.getMinutes()),lt=ve(v.getSeconds());return[y,D,q,dt,ht,lt,_]},rr=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Mr=(s,v,y="-")=>s.replace(new RegExp(y,"g"),v),Se=(s=new Date,v=["-","-"," ",":",":",""],y=rr)=>{const _=Vr(s);let D="";return v.map((q,dt)=>D+=(dt===6?y[_[dt]]:_[dt]??"")+q),D},or=()=>Se(new Date,["-","-"," ",":",":"," ",""]),nr=()=>{const[s,v]=(0,k.useState)("");return hr(()=>{v(or())},1e3),[s]},Hr=s=>++s,Pe=()=>{const[,s]=(0,k.useState)(0);return(0,k.useCallback)(()=>s(Hr),[])},Fe=()=>{const[s,v]=Ge(ae());return(0,k.useEffect)(()=>{const y=()=>v(ae());return window.addEventListener("resize",y,!1),()=>window.removeEventListener("resize",y,!1)},[]),s}})();var ut=I.fH,jt=I.r5,Wr=I.Nd,Zt=I.KY,Ht=I.Vd,N=I.Nr,V=I.D,B=I.Wy,Z=I.zX,M=I.Cd,tt=I.Yz,G=I.D9,rt=I.cb,wt=I.vO,kt=I.Rx,Ft=I.OH,Nt=I.oR,ct=I.rE,_t=I.PQ,Vt=I.rf,Mt=I.xd},1090:function(Rr,$t,re){re.d($t,{A_F:function(){return Ki},JaC:function(){return Ni},MTn:function(){return Bi},NA2:function(){return Mi},PTJ:function(){return Zi},Vcq:function(){return Ji},_O2:function(){return ta},_iG:function(){return Li},afD:function(){return Yi},azd:function(){return Qi},eyl:function(){return Vi},f9u:function(){return ra},fHt:function(){return Pi},gVz:function(){return qi},jg2:function(){return Xi},k$y:function(){return ea},mrB:function(){return Wi},muM:function(){return Ii},qg7:function(){return Ri},rWO:function(){return Hi},tOc:function(){return Gi},vQq:function(){return Ai},ywV:function(){return Ui}});var Bt={};(function(){Bt.d=function(t,e){for(var r in e)Bt.o(e,r)&&!Bt.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),function(){Bt.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}();var u={};Bt.d(u,{NzM:function(){return Te},wBC:function(){return N},O39:function(){return B},cnu:function(){return G},E4D:function(){return wt},TRp:function(){return Ft},zI1:function(){return ct},Ufj:function(){return Vt},GxO:function(){return Rt},cu2:function(){return ie},BcS:function(){return it},lPd:function(){return xt},dC1:function(){return Ut},$L2:function(){return Xt},Vji:function(){return $},YxP:function(){return C},UhT:function(){return ce},JaC:function(){return $e},o4B:function(){return ne},Hlr:function(){return rr},muM:function(){return D},OiV:function(){return er},KTn:function(){return dt},lwL:function(){return lt},d9v:function(){return y},yCD:function(){return we},qCK:function(){return Oe},vQq:function(){return ir},fHt:function(){return De},azq:function(){return $r},dSY:function(){return b},MTn:function(){return P},RYO:function(){return Le},WAo:function(){return zt},GVc:function(){return Se},Emy:function(){return yt},v9O:function(){return Ot},DsO:function(){return at},_lj:function(){return Kt},vO6:function(){return se},xDX:function(){return yr},hf3:function(){return Gr},ip7:function(){return Do},uYe:function(){return p},DgJ:function(){return nr},rae:function(){return po},YBu:function(){return eo},_iG:function(){return go},hXT:function(){return Ir},gQq:function(){return wo},D_D:function(){return ro},$nD:function(){return ko},dtG:function(){return Eo},Y0R:function(){return vr},qg7:function(){return Ro},Xxf:function(){return jo},tSM:function(){return i},Few:function(){return f},xHg:function(){return R},aoj:function(){return ot},Dlm:function(){return Gt},mrB:function(){return Yt},dKu:function(){return Ke},v1d:function(){return Dr},afD:function(){return ur},Lz5:function(){return an},xZX:function(){return Vo},G_1:function(){return zo},osI:function(){return Mo},PTJ:function(){return cn},Qfx:function(){return un},bti:function(){return Ye},XBv:function(){return dn},eyl:function(){return hn},y35:function(){return fn},hKD:function(){return nt},BWC:function(){return Ho},oLi:function(){return I},NA2:function(){return xn},S3Y:function(){return ye},pvT:function(){return Uo},m2f:function(){return oe},rWO:function(){return yn},A$w:function(){return gn},kJL:function(){return jt},S9U:function(){return tr},dYC:function(){return me},jUY:function(){return k},J_U:function(){return bn},kKo:function(){return M},VZO:function(){return vn},mf2:function(){return Ne},w1q:function(){return wn},Kn2:function(){return E},ncl:function(){return kn},LWC:function(){return Pe},dqb:function(){return de},Kjn:function(){return Cn},TaN:function(){return $o},CBv:function(){return We},rTd:function(){return Nr},B73:function(){return En},SSA:function(){return s},CLv:function(){return jn},F$z:function(){return zn},XT_:function(){return Xo},omS:function(){return $n},poV:function(){return _n},VXY:function(){return Sn},xsP:function(){return Fn},HPs:function(){return On},TSy:function(){return Dn},B5o:function(){return _o},u1A:function(){return Tn},WAY:function(){return So},I8J:function(){return X},ywV:function(){return Bn},bEN:function(){return Ln},$45:function(){return Rn},TUk:function(){return Wn},T7B:function(){return O},CEd:function(){return Yn},IHq:function(){return Zn},SkG:function(){return Go},Smz:function(){return pr},nL5:function(){return Qe},ON:function(){return Hn},eiS:function(){return Un},Frc:function(){return Xn},z5J:function(){return qn},scT:function(){return Kn},hd2:function(){return Oo},AnA:function(){return Gn},kYX:function(){return Jn},yZP:function(){return Qn},IVd:function(){return Fo},SIr:function(){return ei},jg2:function(){return ri},gVz:function(){return oi},puc:function(){return ai},Azz:function(){return li},X5u:function(){return Ve},dPh:function(){return si},SMZ:function(){return qt},kro:function(){return Zt},nPi:function(){return ci},US:function(){return ui},A_F:function(){return ge},_vH:function(){return qr},gmH:function(){return Ce},DYV:function(){return di},qi2:function(){return hi},tOc:function(){return fi},hau:function(){return mi},FaZ:function(){return sr},uyF:function(){return xi},Vcq:function(){return yi},XKW:function(){return gi},azd:function(){return he},P2K:function(){return bi},XBe:function(){return Ci},JZ7:function(){return rn},ABi:function(){return ue},ogC:function(){return Ei},_O2:function(){return j},P0C:function(){return ji},Uo5:function(){return zi},Two:function(){return vo},tYQ:function(){return $i},tVn:function(){return a},pHy:function(){return _i},k$y:function(){return xr},yfi:function(){return Si},fl8:function(){return Fi},f9u:function(){return Oi},ZV1:function(){return Di},Lgs:function(){return Ti}});var Te=(t,e="key",r="value")=>{const o={};return(t||[]).map(n=>o[n[e]]=n[r]),o},I=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),jt=t=>I(t)==="array",Zt=t=>(e,r,o="id",n="children")=>{if(!jt(e))return null;const d=(m,z="")=>{for(let T=0,J=m.length;T<J;T++){const pt=m[T];if(pt[o]===r)return t(m,T,z)||m[T];if(jt(pt[n])){const te=d(pt[n],pt[o]);if(te)return te}}};return d(e),e},N=(t,e,r,o="id",n="children")=>Zt((d,m)=>d.splice(m,0,r))(t,e,o,n),B=(t,e,r,o,n="id",d="children")=>Zt((m,z)=>{const T=m[z];T.children?T.children.splice(o,0,r):T.children=[r]})(t,e,n,d),M=t=>I(t).indexOf("element")>-1,G=(t,e="")=>{if(!M(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" "),n=[...new Set([...r,...o])];t.className=n.join(" ")},wt=(t,e=new Date)=>{const r=new Date(e);return r.setDate(r.getDate()+t),r},Ft=(t,e=new Date)=>{const r=new Date(e);return r.setHours(r.getHours()+t),r},ct=(t,e=new Date)=>{const r=new Date(e);return r.setMonth(r.getMonth()+t),r},Vt=(t,e,r,o="id",n="children")=>Zt((d,m)=>{const z=d[m];return z[n]=[...z[n]||[],...r],z})(t,e,o,n),k=()=>![typeof window,typeof document].includes("undefined"),Rt=t=>{if(k())return new Promise((e,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===t))e();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${t}'`)),o.onload=e,o.src=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},ie=(t,e)=>{if(k())return e?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===e))r();else{const n=document.createElement("style");n.onerror=d=>o(new Error(`Failed to load '${e}' style`)),n.onload=r,n.innerHTML=t,n.setAttribute("huxy-css-hash",e),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===t))r();else{const n=document.createElement("link");n.onerror=d=>o(new Error(`Failed to load '${t}'`)),n.onload=r,n.href=t,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},it=(t,e=new Date)=>{const r=new Date(e);return r.setFullYear(r.getFullYear()+t),r},$=(t=[],e="name")=>{const r={};return t.map(({[e]:o,value:n})=>r[o]=n),r},E=t=>I(t)==="object";const F=(t={})=>{let e="";return Object.keys(t).map(r=>{const o=t[r];e=e&&`${e}, `,E(o)?e+=`${r}=${F(o)}`:Array.isArray(o)?e+=`${r}=${C(o)}`:e+=`${r}=${o}`}),`{${e}}`};var O=F;const S=(t=[])=>{let e="";return t.map(r=>{e=e&&`${e}, `,E(r)?e+=O(r):Array.isArray(r)?e+=S(r):e+=`${r}`}),`[${e}]`};var C=S,xt=t=>(e,r="id",o="children",n=-1)=>{if(!jt(e))return e;const d={},m=e.map(z=>z[r]);return[...e].map(z=>{const T={...z},{[r]:J}=T;if(J!=null){let{parentId:pt}=T;pt==null&&(pt=t?.(T)??n,T.parentId=pt),d[J]||(d[J]=[]),T[o]=d[J],d[pt]||(d[pt]=[]),d[n]||(d[n]=[]),m.includes(pt)?d[pt].push(T):d[n].push(T)}}),d[n]},Ut=(t,e="id",r="children",o=-1)=>xt(n=>n[e].match(/\S+(?=-\S+)/)?.[0]||o)(t,e,r,o),Xt=(t,e="path",r="children",o=null)=>xt(n=>{const d=n[e],m=d.match(/.*\/[^:/]+\/:[^/]+/);return m?m[0].match(/(.*)\/:+/)?.[1]??o:d.match(/(.*)\/+/)?.[1]??o})(t,e,r,o),qt=()=>k()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),oe=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),de=t=>oe(t,"current"),Ve=(t=0,e)=>{k()&&(e=de(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},hr=`.huxy-totop-bar {
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
}`;const Je=()=>document.getElementsByClassName("huxy-totop-bar")[0],Cr=t=>{if(Je())return;const e=document.createElement("div");e.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=t,e.appendChild(r),e.appendChild(o),document.body.appendChild(e),e.addEventListener("click",()=>Ve(),!1),e},Me=()=>{const t=Je();t&&document.body.removeChild(t)};var ce=(t=0,e="\u8FD4\u56DE\u9876\u90E8")=>{if(!k())return;ie(hr,"huxy-backtop-css");const r=()=>{qt()>t?Cr(e):Me()};return(()=>(document.addEventListener("scroll",r,!1),()=>{Me(),document.removeEventListener("scroll",r,!1)}))()},$e=(t=0,e=2)=>parseInt(String(t),e),he=(t=0,e=2)=>Number(t).toString(e),ne=(t=0,e=2,r=16)=>he($e(t,e),r),Qe=t=>{if(!E(t))return"";const e=[];return Object.keys(t).map((r,o)=>{const n=o>0?"&":"?";e.push(`${n}${r}=${t[r]}`)}),e.join("")},pr=t=>{if(!E(t))return{};const e=new FormData;return Object.keys(t).map(r=>{t[r]!=null&&e.append(r,t[r])}),e},Ne=t=>I(t)==="function",tr=t=>I(t)==="promise"||E(t)&&Ne(t.then),er=(t,e=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!tr(t))return{};let o=null,n=null;return{promiseFn:new Promise((d,m)=>{o=(z="canceled")=>{clearTimeout(n),d({canceled:!0,errMsg:z})},e&&(e=typeof e!="number"?12e4:e,n=setTimeout(()=>o(r),e)),t.then(z=>{clearTimeout(n),d({result:z,errMsg:!1})}).catch(z=>{clearTimeout(n),m(z)})}),cancelFn:o}};const Ae=[{type:"data",headers:{"Content-Type":"application/json"},body:t=>JSON.stringify(t)},{type:"formData",body:t=>pr(t)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t=>Qe(t).slice(1)}],ve=(t,e)=>{const r=["data","form","formData","params"].includes(e),o=Object.keys(t).filter(n=>t[n]);if(o.length===1){const n=o[0],d=r?e:n;return d==="params"?{query:t[n]}:{result:t[n],type:d}}else if(o.length>1){const n=o.filter(m=>m!=="params").slice(-1)[0],d=r?e:n;return d==="params"?{query:t.params||t[n]}:{query:t.params,result:t[n],type:d}}};var rr=(t,e)=>r=>(o,n={})=>{const{headers:d,dataType:m,data:z,formData:T,form:J,params:pt,...te}=n,ee={data:z,formData:T,form:J,params:pt};let Lr;const{query:dr,result:on,type:oa}=ve(ee,m)||{};if(!te.body&&on){const so=Ae.find(co=>co.type===oa);Lr=so.headers,te.body=so.body(on)}dr&&(o=`${o}${Qe(dr)}`);const{promiseFn:na}=er(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...Lr,...d},...te}),e);return na.then(({result:so,errMsg:co})=>t(co?{status:408,statusText:co}:so))},Se=t=>{const e=[],r=o=>{if(o&&typeof o=="object"){if(e.indexOf(o)!==-1)return!0;e.push(o);let n=!1;for(let d in o)oe(o,d)&&r(o[d])&&(o[d]="cyclic",n=!0);return n}return!1};return r(t)&&t};const or=(t,e)=>{const r=I(t),o=I(e);if(r!==o)return!1;if(t==null||e==null)return t===e;if(["object","array"].indexOf(r)===-1)return t.toString()===e.toString();if(Object.keys(t).length!==Object.keys(e).length)return!1;if(Se(t)&&Se(e))return or(t,e);for(let n in e)if(oe(t,n)!==oe(e,n)||!or(t[n],e[n]))return!1;return!0};var nr=or,Pe=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.element",s=t=>t?.__v_isVNode;const v=t=>{if(!jt(t)&&!E(t))return t;const e=jt(t)?[]:{};for(const r in t)if(oe(t,r)){const o=t[r];e[r]=Pe(o)||s(o)||typeof o!="object"?o:o!==t?v(o):"cyclic"}else Object.setPrototypeOf(e,{[r]:t[r]});return e};var y=v,D=(t=100)=>{const e=[];let r=-1;const o=d=>{const m=e.length,z=y(d);return nr(z,e[m-1]?.data)?{index:r,length:m,data:e[r]?.data}:(e.push({data:z}),e.length>t&&e.shift(),r=e.length-1,{index:r,length:r+1,data:e[r].data})},n=(d=0)=>{const m=e.length;return r+=d,r=r<0?0:r>m-1?m-1:r,{index:r,length:m,data:y(e[r]?.data)}};return{record:o,cursor:n,jump:d=>(r=d,{index:r,length:e.length,data:y(e[r]?.data)}),undo:()=>n(-1),redo:()=>n(1),getList:()=>y(e),clean:()=>{e.length=0,r=-1}}},dt=(t,e,r)=>{if(!jt(t))return t;const o=t[e],n=t[r];return t.splice(e,1,n),t.splice(r,1,o),t},lt=(t=[],e="name")=>{const r={};return t.map(o=>{r[o[e]]?r[o[e]].push(o):r[o[e]]=[o]}),r},we=(t,e,r=".")=>{const o=(T,J)=>T.split(J),n=o(t,r),d=o(e,r),m=n.length;let z=0;for(let T=0;T<m;T++)if(n[T]<d[T]){z=m-T;break}return z},Oe=(...t)=>(...e)=>{const[...r]=t,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...e)},ir=t=>{if(!k())return;const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),e.select(),e.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(e)},De=t=>(e,r)=>{const{getState:o,setState:n,subscribe:d,unsubscribe:m,clean:z}=t;return r!==void 0&&n({[e]:r},!0),{getState:()=>o(e),setState:(T,J)=>n({[e]:T},J),subscribe:T=>d(e,T),unsubscribe:()=>m(e),clean:()=>z(e)}},Le=t=>({type:"TEXT_ELEMENT",props:{nodeValue:t}}),$r=(t,e,...r)=>({type:t,props:{...e,children:r.map(o=>typeof o=="object"?o:Le(o))}});const ke=t=>t.startsWith("on"),ao=t=>t!=="children"&&!ke(t),_r=(t,e)=>r=>t[r]!==e[r],Ur=(t,e)=>r=>!(r in e),Xr=t=>{const e=Object.keys(t);return{eventProps:e.filter(ke),propertyProps:e.filter(ao)}};var a=(t,e,r)=>{const{eventProps:o,propertyProps:n}=Xr(e),{eventProps:d,propertyProps:m}=Xr(r);o.filter(Ur(e,r)).map(z=>{const T=z.toLowerCase().slice(2);t.removeEventListener(T,e[z])}),n.filter(Ur(e,r)).map(z=>t[z]=""),m.filter(_r(e,r)).map(z=>t[z]=r[z]),d.filter(_r(e,r)).map(z=>{const T=z.toLowerCase().slice(2);t.addEventListener(T,r[z])})},b=t=>{if(!k())return;const e=t.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(t.type);return a(e,{},t.props),e},p=()=>{const t={};return{on:(e,r)=>{t[e]||(t[e]=[]),t[e].indexOf(r)===-1&&t[e].push(r)},emit:(e,r)=>{t[e]&&t[e].map(o=>o(r))},off:(e,r=null)=>{if(t[e]){if(typeof r!="function")return delete t[e];const o=t[e].indexOf(r);o>-1&&(t[e].splice(o,1),t[e].length||delete t[e])}}}};const W=t=>{const e={};for(let r in t)oe(t,r)||(e[r]=t[r]);return e};var X=(t,e)=>{if(!E(t))return e;if(!E(e))return t;const r={...W(t),...W(e)},o={...t,...e};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},P=()=>{const{on:t,emit:e,off:r}=p(),o={};return{getState:n=>y(o[n]),setState:(n,d=!1)=>{if(typeof n=="function"&&(n=n(y(o))),!E(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const m=y(n);Object.keys(m).map(z=>{const T=o[z],J=m[z],pt=E(J)&&E(T)?X(T,J):J;!d&&e(z,pt),o[z]=pt})},subscribe:(n,d)=>(t(n,d),()=>r(n,d)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(d=>o[d]=void 0):Object.keys(o).map(d=>o[d]=void 0)}}},zt=(t=()=>{},e=t.length)=>{const r=(...o)=>o.length>=e?t(...o):(...n)=>r(...o,...n);return r},yt=(t,e="-")=>t.split(e).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),Ot=(t,e)=>{const r=t.split(","),o=r[0].match(/:(.*?);/)[1],n=atob(r[1]);let d=n.length;const m=new Uint8Array(d);for(;d--;)m[d]=n.charCodeAt(d);return new File([m],e??+new Date,{type:o})},at=(t=()=>{},e=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>t.apply(this,o),e)}},Kt=(t,e,r="id",o="children")=>Zt((n,d)=>n.splice(d,1))(t,e,r,o),se=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",ue=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():new Date().getTime(),xr=()=>{let t=ue();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(e==="x"?r:r&3|8).toString(16)})},We=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),me=t=>{if(typeof t!="string")return!1;const e=/^data:image\/([a-zA-Z0-9]+);base64,.+/i;return t.match(e)},yr=async(t,e,r)=>{if(!k())return;r=r||xr();const o=e?`${r}.${e}`:r,n=We(t);if(n||me(t)){t=n?decodeURIComponent(t):t;const d=await fetch(t,{mode:"no-cors"}),m=d.headers.get("Content-Disposition"),z=m&&decodeURIComponent(m.split(";")[1].split("=")[1]);d.blob().then(T=>{const J=window.URL.createObjectURL(T),pt=document.createElement("a");pt.href=J,pt.download=z||o,pt.style.display="none",document.body.appendChild(pt),pt.click(),pt.parentNode.removeChild(pt),window.URL.revokeObjectURL(J)})}else{const d=new Blob([t]),m=window.URL.createObjectURL(d),z=document.createElement("a");z.href=m,z.download=o,z.style.display="none",document.body.appendChild(z),z.click(),z.parentNode.removeChild(z),window.URL.revokeObjectURL(m)}},ye=(t=null)=>k()?M(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Ye=t=>{if(k())return t=de(t)?t.current:t??document.body,t.getBoundingClientRect?.()},sr=t=>{if(!k())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},ge=(t,e={},r=!1)=>{if(M(t)){if(r){let o="";Object.keys(e).map(n=>{o+=`${n}: ${e[n]};`}),t.style=o;return}Object.keys(e).map(o=>t.style.setProperty(o,e[o]))}};const gr=(t=350)=>new Promise(e=>setTimeout(e,t)),Ce=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);};var qr=gr,Dr=async(t,e=15)=>{if(!k())return;if(typeof t=="string"&&(t=sr(t)),t=de(t)?t.current:t,!M(t))return{};const r=t.cloneNode(!0);ge(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await qr(e);const o=Ye(r);return t.parentNode.removeChild(r),o};const Kr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,br=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,uo=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";Kr.test(r)?t.setAttribute("class",r.replace(br,e)):t.setAttribute("class",`${r} ${e}`)},ho=async(t,e,r)=>{const{left:o,right:n,top:d,bottom:m}=Ye(t),{width:z,height:T}=ye(),{width:J,height:pt}=await Dr(e);if(n<0||m<0||o>z||d>T)return{};if(r==="vertical"){const te={left:o+"px",top:m+10+"px",right:"auto",bottom:"auto"};let ee="lt";o+J>z&&(te.left=n-J+"px",ee="rt"),m+10+pt>T&&(te.top=d-10-pt+"px",ee=ee==="lt"?"lb":"rb"),ge(e,te),uo(e,ee)}else{const te={left:n+10+"px",top:d+"px",right:"auto",bottom:"auto"};let ee="tl";n+10+J>z&&(te.left=o-10-J+"px",ee="tr"),d+pt>T&&(te.top=m-pt+"px",ee=ee==="tl"?"bl":"br"),ge(e,te),uo(e,ee)}};var Gr=(t,e,r="horizontal")=>{const o=at(ho),n=()=>o(t,e,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const d=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),ge(e,{left:"",top:"",right:"",bottom:""})};return ho(t,e,r),d},Do=(t,e,r,o="id",n="children")=>Zt((d,m)=>d[m]={...d[m],...r})(t,e,o,n),po=t=>t.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e);const mo=p();var eo=t=>{const{on:e,emit:r,off:o}=mo;return{on:n=>e(t,n),emit:n=>r(t,n),off:n=>o(t,n)}};const xo=120*1e3,yo=t=>t.json().then(e=>e);var go=(t=yo,e=xo)=>(r="get")=>rr(t)((r||"get").toUpperCase()),Nr=t=>jt(t)&&!!t.length,Ir=(t,e,r=[],o=!1,n=null)=>Nr(t)?e?(r=typeof r=="string"?r.split(","):r,t.filter(d=>(r=r.length>0?r:Object.keys(d),r.filter(m=>{const z=d[m];if(z==null)return!1;if(o)return z===e;const T=new RegExp(e,"gi"),J=z.toString().match(T);return J&&n&&(d[m]=n(z.toString().replace(T,`<span style="background-color:yellow">${J[0]}</span>`),{display:"inline-block"})),J}).length))):t:[],vo=(t,e="id")=>{if(!Nr(t))return t;const r=[],o=[];return t.map(n=>{const d=E(n)?n[e]:n;o.includes(d)||(o.push(d),r.push(n))}),r};const Ao=t=>(e,r="children")=>{if(!Array.isArray(e))return e;const o=y(e),n=d=>{const m=[];return d.map(z=>{if(Nr(z[r])){const T=n(z[r])||[];z[r]=T,T.length>0&&m.push(z)}}),t(d,m)};return n(o)};var wo=(t,e,r,o="name",n="id",d="children",m=!1)=>Ao((z,T)=>vo([...Ir(z,e,o,m,r),...T],n))(t,d),ro=(t,e)=>{const r=[],o=t.children??[];for(let n=0,d=o.length;n<d;n++){const m=o[n];m.className.indexOf(e)>-1&&r.push(m)}return r.length===0?null:r.length===1?r[0]:r},ko=(t="")=>t.match(/\d+/g)?.sort((e,r)=>r-e)[0],Eo=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),vr=(t,e=1024)=>{const r=t/e;if(r<e)return`${r.toFixed(3)-0} KB`;const o=r/e;return o<e?`${o.toFixed(3)-0} M`:`${(o/e).toFixed(3)-0} G`},Ro=(t="")=>(t??"").replaceAll("//","/"),jo=t=>t?t.charAt(t.length-1)==="/"?t.slice(0,-1):t:"",i=(t,e=1)=>{const r=t.width/t.height/e,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return t.width=o},f=(t=0,e=["s","m","h","d"])=>{if(t=~~t,t<60)return`${t}${e[0]}`;const r=~~(t/60);if(r<60)return`${r}${e[1]}${t%60}${e[0]}`;const o=~~(t/3600),n=t%3600,d=~~(n/60);return o<24?`${o}${e[2]}${d}${e[1]}${n%60}${e[0]}`:`${(o/24).toFixed(2)}${e[3]}`},j=t=>(e,r="children")=>{if(!jt(e))return e;const o=(n,d=[])=>{n.map((m,z)=>{const T=jt(m[r]);if(m=t(m,d,z,T)||m,T){const{[r]:J,...pt}=m;o(J,[...d,{...pt,"@@index":z}])}})};return o(e),e},R=(t,e="children")=>{const r=[];return j(o=>{const{[e]:n,...d}=o;r.push(d)})(t,e),r},ot=t=>typeof t=="number"?t.toLocaleString("en-US"):"";const st=t=>t<10?"0"+t:t;var nt=(t=new Date)=>{const e=new Date(t),r=e.getFullYear(),o=e.getDay(),n=st(e.getMonth()+1),d=st(e.getDate()),m=st(e.getHours()),z=st(e.getMinutes()),T=st(e.getSeconds());return[r,n,d,m,z,T,o]},Gt=(t,e=new Date)=>{t=nt(t),e=nt(e);const r=e.y-t.y,o=e.m-t.m,n=e.d-t.d,d=e.h-t.h,m=e.M-t.M,z=new Date(e.y,e.m,0).getDate(),T=(J,pt,te,ee,Lr)=>{const dr="\u524D";return pt<0&&(J-=1,pt+=te),J===0?pt+Lr+dr:pt===0?J+ee+dr:J+ee+pt+Lr+dr};return r>0?T(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?T(o,n,z,"\u4E2A\u6708","\u5929"):n>0?T(n,d,24,"\u5929","\u5C0F\u65F6"):d>0?T(d,m,60,"\u5C0F\u65F6","\u5206\u949F"):m>0?m+"\u5206\u949F\u524D":"\u521A\u521A"};const Qt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Tt=(t,e,r="-")=>t.replace(new RegExp(r,"g"),e);var Yt=(t=new Date,e=["-","-"," ",":",":",""],r=Qt)=>{const o=nt(t);let n="";return e.map((d,m)=>n+=(m===6?r[o[m]]:o[m]??"")+d),n};const Jt=["","webkit","moz","ms"],qe=t=>Jt.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),cr=t=>Jt.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),Pr=t=>Jt.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),Ee=Jt.map(t=>`${t}fullscreenchange`);var Ke=t=>{if(!k())return;t=de(t)?t.current:t??document.body;const e=qe(document),r=cr(t),o=Pr(document);document[e]?document[o]?.():t[r]?.()};const Ze=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var ur=()=>{if(!k())return;const t=window.navigator.userAgent.toLowerCase(),e=Ze.find(r=>t.match(r.reg))??{};return{type:e.name,version:t.match(e.reg)[1]}};const wr=60*1e3,no=60*wr,lo=24*no;var an=(t,e=new Date)=>{let r=new Date(t)-e;const o=~~(r/lo);r-=lo*o;const n=~~(r/no);r-=no*n;const d=~~(r/wr);r-=wr*d;const m=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${d}\u5206${m}\u79D2`};const Zo=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],ln=t=>{if(!Array.isArray(t))return Zo;const e=[...Zo];return t.map(r=>{const o=e.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?e[o]=r:e.push(r)}),e};var Vo=t=>{const e=ln(t).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return sr(e.join(""))},zo=(t=new Date)=>{const e=nt(t);return new Date(e[0],e[1],0).getDate()},Mo=(t=null)=>k()?M(t)?{left:t.scrollLeft,top:t.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0};const sn=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:t=>({type:"ios",model:t[1],version:t[3]?.replaceAll("_",".")})},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:t=>({type:"macOS",version:t[1]?t[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:t=>({type:"WindowsPhone",version:t[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:t=>({type:"Windows",version:t[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:t=>({type:"Android",version:t[1]?t[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:t=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:t=>({type:"Linux"})}];var cn=()=>{if(!k())return;const t=window.navigator.userAgent.toLowerCase(),e=sn.find(r=>t.match(r.reg));return e?e.format(t.match(e.reg)):{}},un=(t="")=>{const[e,r]=t.split("?");if(r){const o={};return r.split("&").map(n=>{const[d,m]=n.split("=");o[d]=m}),{path:e,params:o}}return{path:e}},$o=()=>k()&&(window.ontouchstart||navigator.maxTouchPoints),Ho=t=>{const{left:e,top:r}=Mo();return{touchX:$o()?t?.touches?.[0]?.pageX:t?.pageX||t?.clientX+e,touchY:$o()?t?.touches?.[0]?.pageY:t?.pageY||t?.clientY+r}},dn=(t,e)=>{const{touchX:r,touchY:o}=Ho(t),{x:n,y:d}=e?.getBoundingClientRect?.()??{};return{x:r-(n??0),y:o-(d??0)}},hn=(t,e,r="id",o="children")=>{if(!jt(t))return null;const n=d=>{for(let m=0,z=d.length;m<z;m++){const T=d[m];if(T[r]===e)return[T];if(jt(T[o])){const J=n(T[o]);if(J)return[T].concat(J)}}};return n(t)},fn=(t,e,r)=>{if(!k())return;r=de(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&ge(o,e),o.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const pn=(t={},e)=>{e=mn(e);const r=(o,n)=>{if(!n?.[0])return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(t,e)},mn=(t="")=>t.replace(/\[['"]?(.*?)['"]?\]/g,".$1")?.split(".");var xn=pn,Uo=(t,e="")=>M(t)&&t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)")),yn=(t="")=>{if(t[0]!=="#")return t;t=t.replace("#","");const e=t.length;e===3?t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`:e===4&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`);const r=parseInt(t.slice(0,2),16)||0,o=parseInt(t.slice(2,4),16)||0,n=parseInt(t.slice(4,6),16)||0;if(t.length===6)return`rgb(${r},${o},${n})`;const d=parseInt(t.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${d})`},gn=t=>{if(!k())return;const e=document.createElement("canvas"),r=e.getContext("2d"),{width:o,height:n}=t;return e.width=o,e.height=n,r.drawImage(t,0,0,o,n),e},bn=(...t)=>!Number.isNaN(new Date(...t).valueOf()),vn=t=>I(t)==="error",wn=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),kn=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.forward_ref",Cn=t=>I(t)==="regexp",En=t=>E(t)&&Object.keys(t).length,jn=()=>{if(k())return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1},zn=t=>E(t)?O(t):Array.isArray(t)?C(t):t,Xo=t=>new Promise((e,r)=>{const o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>e(o.result)),o.addEventListener("error",n=>r(n))}),$n=async t=>{if(!We(t))return t;const e=await(await fetch(decodeURIComponent(t))).blob();return await Xo(e)},_n=t=>new Promise((e,r)=>{const o=new Image;o.src=t,o.crossOrigin="Anonymous",o.complete?e(o):(o.addEventListener("load",()=>e(o)),o.addEventListener("error",n=>r(n)))}),Sn=async(t,e,r=2e3)=>{for(;!e?.(t?.());)await qr(r)},Fn=(t,e=["{","}"])=>t?.trim?.().match(new RegExp(`^${e[0]}([\\s\\S]*)${e[1]}$`))?.[1],On=(t=()=>{},e=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),d=r.find(m=>m.key===n);if(!d){const m=t(...o);return r.push({key:n,result:m}),r.length>e&&r.shift(),m}return d.result}};const qo=(t,e,r="id")=>{if(!jt(t))return e;if(!jt(e))return t;const o={};return[...t,...e].map(n=>{const d=E(n)?n[r]??JSON.stringify(n):n;if(o[d]===void 0)o[d]=n;else{const m=o[d];E(m)&&E(n)?o[d]=So(m,n):jt(m)&&jt(n)?o[d]=qo(m,n):o[d]=n}}),Object.keys(o).map(n=>o[n])};var _o=qo;const Ko=(t,e)=>{if(!E(t))return e;if(!E(e))return t;for(let r in e)oe(e,r)?E(t[r])&&E(e[r])?t[r]=Ko(t[r],e[r]):jt(t[r])&&jt(e[r])?t[r]=_o(t[r],e[r]):t[r]=e[r]:Object.setPrototypeOf(t,{[r]:e[r]});return t};var So=Ko,Dn=(t,...e)=>{const r=jt(t)?_o:So;return e.map(o=>t=r(t,o)),t},Tn=(t,e)=>{const r=t?.split(" ")??[],o=e?.split(" ")??[];return[...new Set([...r,...o])].filter(Boolean).join(" ")},Fo=(t,e="")=>{if(!M(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" ").filter(n=>!r.includes(n));t.className=o.join(" ")},Nn=`@keyframes huxy-message-animate-in {
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
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  margin-top: 24px;
  padding: 10px 16px;
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
}`;const In=()=>document.getElementsByClassName("huxy-message")[0],An=()=>{const t=document.createElement("div"),e=document.createElement("div");return e.setAttribute("class","huxy-message"),t.appendChild(e),document.body.appendChild(t),e},Pn=(t,e)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${e}`);const o=document.createElement("span");o.innerText=t;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},io=(t,e=3250,r,o)=>{if(!k())return;ie(Nn,"huxy-message-css");let n=In();n||(n=An());const d=Pn(t,o);n.appendChild(d),setTimeout(()=>{n.removeChild(d),r?.()},e),setTimeout(()=>{Fo(d,"open")},e-250)};var Bn={success:(t,e,r)=>io(t,e,r,"success"),warn:(t,e,r)=>io(t,e,r,"warn"),warning:(t,e,r)=>io(t,e,r,"warn"),error:(t,e,r)=>io(t,e,r,"error"),info:(t,e,r)=>io(t,e,r,"info")},Ln=(t=new Date)=>{const e=new Date(t),r=e.getDate();return[wt(1-r),wt(zo(e)-r)]},Rn=(t,e,r,o,n="id",d="children")=>{let m={};return Zt((z,T)=>(m=z[T],z.splice(T,1),!0))(t,e,n,d),B(t,r,m,o,n,d),t},Wn=(t={},e="name")=>Object.keys(t).map(r=>({[e]:r,value:t[r]})),Yn=(t={},e=[])=>{e=typeof e=="string"?e.split(","):e;const r={},o=[];return Object.keys(t).map(n=>e.includes(n)?o.push({key:n,value:t[n]}):r[n]=t[n]),{newObj:r,newQuery:o}},Zn=(t=()=>{})=>{let e=!1;return(...r)=>{if(!e)return e=!0,t(...r)}},Go=(t="",e=0,r="0")=>{const o=t.length;return o>=e?t:`${Array(e-o+1).join(r)}${t}`};const Jo="<([^>]+)>([0-9a-zA-Z]*)<\\/\\1>",Qo="<([^>]+)><!\\[CDATA\\[([\\s\\S]*)\\]\\]><\\/\\1>",Vn=t=>{const e={},r={},o=t.match(new RegExp(Jo,"g")).map(d=>d.match(new RegExp(Jo))).filter(Boolean),n=t.match(new RegExp(Qo,"g")).map(d=>d.match(new RegExp(Qo))).filter(Boolean);return o.map(d=>{const[,m,z]=d;e[m]=z,r[m]="base"}),n.map(d=>{const[,m,z]=d;e[m]=(z??"").trim(),r[m]="data"}),{obj:e,types:r}},Mn=(t,e,r)=>`<${t}>${e==="data"?`<![CDATA[${r}]]>`:r}</${t}>
`;var Hn={xml2Obj:Vn,obj2Xml:(t,e)=>{let r="";return Object.keys(t).map(o=>{r+=Mn(o,e[o],t[o])}),`<xml>
    ${r}
  </xml>`}},Un=(t,e)=>{if(t==null||typeof t!="object")return{};if(e=typeof e=="string"?e.split(","):e,!jt(e))return t;const r={};return e.map(o=>{o in t&&(r[o]=t[o])}),r},Xn=(t=()=>{})=>(...e)=>new Promise((r,o)=>t(...e,(n,d)=>n?o(n):r(d))),qn=()=>"#"+Go((~~(Math.random()*(1<<24))).toString(16),6),Oo=(t=0,e=0,r=!0)=>(t<e&&(t=[e,e=t][0]),r?~~(Math.random()*(t-e+1))+e:Math.random()*(t-e)+e),Kn=(t=[])=>t[Oo(t.length-1)],Gn=(t,e=100)=>{const r=[];return[...new Array(t)].map((o,n)=>{n===t-1?r[n]=e:(r[n]=Oo(1,e-1),e-=r[n])}),r},Jn=(t=8,e=36)=>Math.random().toString(36).slice(2,t+2),Qn=()=>Math.random()>.5;const ti=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r};var ei=(t,e=60)=>{if(!k())return;t=de(t)?t.current:t??document.body;let r=ro(t,"resize-sensor"),o=[];const n=at(()=>o.map(T=>T(t)),e),d=T=>{ro(t,"resize-sensor")||(r=ti(t,n)),o.indexOf(T)===-1&&o.push(T)},m=T=>{const J=o.indexOf(T);J!==-1&&o.splice(J,1),o.length===0&&r&&z()},z=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:t,bind:d,unbind:m,destroy:z}};const tn=(t=0,e=0,r=0,o=1)=>{t-=0,e-=0,r-=0,o-=0;const n=`#${((1<<24)+(t<<16)+(e<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var ri=(t=0,e=0,r=0,o=1)=>{if(t.includes("rgb")){const n=t.match(/rgba?\((.+)\)/);if(n){const d=n[1]?.split(",").map(m=>m.trim());return tn(...d)}return t}return tn(t,e,r,o)},oi=(t,e="px")=>`${t}`.replace(e,"")-0;const en=()=>typeof performance?.now=="function"?performance.now():new Date().getTime(),ni=t=>{if(typeof setImmediate=="function")return()=>setImmediate(t);if(typeof MessageChannel=="function"){const{port1:e,port2:r}=new MessageChannel;return e.onmessage=t,()=>r.postMessage(null)}return()=>setTimeout(t,0)},ii=()=>{const t=[],e=m=>{t.push(m),d(m)},r=()=>t[0],o=()=>t.shift(),n=m=>m.startTime=en(),d=m=>{n(m),t.sort((z,T)=>z.startTime-T.startTime)};return{hub:t,push:e,peek:r,shift:o,update:d}};var ai=(t=5)=>{const{hub:e,push:r,peek:o,shift:n,update:d}=ii(),m=ni(()=>{T()&&m()}),z=J=>en()-J.startTime>t,T=()=>{let J=o();for(;J;){if(z(J)){d(J);break}const{task:pt}=J;typeof pt=="function"?(J.task=null,pt()):n(),J=o()}return J};return(J=()=>{})=>{r({task:J}),e.length<2&&m()}},li=()=>k()&&document.documentElement.scrollHeight-qt()===ye().height,si=t=>{k()&&(t=de(t)?t.current:t??window,t.scrollIntoView?.({behavior:"smooth",block:"center"}))},ci={get:t=>{let e=null;try{e=JSON.parse(sessionStorage.getItem(t))}catch{e=sessionStorage.getItem(t)}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),sessionStorage.setItem(t,e)},rm:t=>{sessionStorage.removeItem(t)},clear:()=>{sessionStorage.clear()}},ui=t=>{const e=Vo(t);k()&&document.head.appendChild(...e)},di=(t,e=null,r=!1)=>[...t||[]].sort((o,n)=>{const d=e?o[e]:o,m=e?n[e]:n;return!isNaN(Number(d))&&!isNaN(Number(d))?r?m-d:d-m:typeof d=="string"&&typeof m=="string"?r?m.localeCompare(d):d.localeCompare(m):typeof d=="string"&&typeof m=="number"?r?-1:1:typeof d=="number"||typeof d=="string"?r?1:-1:r?-1:1}),hi=t=>{if(!E(t))return{};const e={};return Object.keys(t).sort().map(r=>{e[r]=t[r]}),e},fi={get:t=>{let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch{}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),localStorage.setItem(t,e)},rm:t=>{localStorage.removeItem(t)},clear:()=>{localStorage.clear()}};const pi=P();var mi=De(pi),xi=(t,e=!1)=>(t=e?t:`return ${t};`,Function(t)()),yi=()=>k()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),gi=(t,...e)=>{const r=[];return t.map((o,n)=>{r.push(o,e[n]??"")}),r.join("")},bi=(t=()=>{},e=60)=>{let r=null;return function(...o){r||(t.apply(this,o),r=setTimeout(()=>r=null,e))}};const vi=t=>[12,zo(t),24,60,60],wi=(t=[],e=[],r=[])=>{let o=!1;const n=[];return e.map((d,m)=>{const z=(o?d-1:d)-t[m];z<0?(n[m]=z+(r[m]||10),o=!0):(n[m]=z,o=!1)}),n.reverse()};var rn=(t,e=new Date)=>{new Date(t)-new Date(e)>0&&(t=[e,e=t][0]);const r=vi(e).reverse(),o=nt(t).slice(0,-1).reverse(),n=nt(e).slice(0,-1).reverse();return wi(o,n,r)};const ki=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Ci=(t,e=new Date)=>{const r=rn(t,e),o=r.findIndex(n=>n>0);return r.map((n,d)=>`${n||0}${ki[d]}`).slice(o).join("")},Ei=(t,e)=>{M(t)&&(Uo(t,e)?Fo(t,e):G(t,e))},ji=t=>(e,r="children")=>{if(!jt(e))return e;const o=n=>(n.map(d=>{jt(d[r])&&(d[r]=o(d[r]))}),t(n));return o(e)},zi=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[e]||e),$i=(t,e="fuckId",r="children")=>j((o,n,d)=>{o[e]=[...n.map(m=>m["@@index"]),d].join("-")})(t,r),_i=(t,e,r,o="children")=>Zt((n,d)=>{const m=n[d];return m[o]=[...m[o]||[],...r],!0})(t,e),Si=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Fi=t=>k()?(Ee.map(e=>document.addEventListener(e,t,!1)),()=>Ee.map(e=>document.removeEventListener(e,t,!1))):void 0,Oi=({container:t,width:e="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:d="20px microsoft yahei",fillStyle:m="rgba(202,202,202,0.4)",content:z="\u8BF7\u52FF\u5916\u4F20",rotate:T="-30",zIndex:J=1e3}={})=>{if(!k())return;t=de(t)?t.current:t??document.body;const pt=t.firstChild;pt?.className==="watermark-canvas"&&t.removeChild(pt);const te=document.createElement("canvas");te.setAttribute("width",e),te.setAttribute("height",r);const ee=te.getContext("2d");ee.textAlign=o,ee.textBaseline=n,ee.font=d,ee.fillStyle=m,ee.rotate(Math.PI/180*T),ee.fillText(z,parseFloat(e)/2,parseFloat(r)/2);const Lr=te.toDataURL(),dr=document.createElement("div");dr.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${J};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${Lr}')`),t.style.position="relative",t.insertBefore(dr,t.firstChild)},Di=(t=new Date)=>{const e=new Date(t).getDay();return[wt(1-e),wt(7-e)]},Ti=t=>{if(!tr(t))return{};let e="pending",r;const o=t.then(n=>{e="success",r=n}).catch(n=>{e="error",r=n});return{read:()=>{if(e==="pending")throw o;if(e==="error")throw r;if(e==="success")return r}}},$l=u.NzM,_l=u.wBC,Sl=u.O39,Fl=u.cnu,Ol=u.E4D,Dl=u.TRp,Tl=u.zI1,Nl=u.Ufj,Il=u.GxO,Al=u.cu2,Pl=u.BcS,Bl=u.lPd,Ll=u.dC1,Rl=u.$L2,Wl=u.Vji,Yl=u.YxP,Zl=u.UhT,Ni=u.JaC,Vl=u.o4B,Ml=u.Hlr,Ii=u.muM,Hl=u.OiV,Ul=u.KTn,Xl=u.lwL,ql=u.d9v,Kl=u.yCD,Gl=u.qCK,Ai=u.vQq,Pi=u.fHt,Jl=u.azq,Ql=u.dSY,Bi=u.MTn,ts=u.RYO,es=u.WAo,rs=u.GVc,os=u.Emy,ns=u.v9O,is=u.DsO,as=u._lj,ls=u.vO6,ss=u.xDX,cs=u.hf3,us=u.ip7,ds=u.uYe,hs=u.DgJ,fs=u.rae,ps=u.YBu,Li=u._iG,ms=u.hXT,xs=u.gQq,ys=u.D_D,gs=u.$nD,bs=u.dtG,vs=u.Y0R,Ri=u.qg7,ws=u.Xxf,ks=u.tSM,Cs=u.Few,Es=u.xHg,js=u.aoj,zs=u.Dlm,Wi=u.mrB,$s=u.dKu,_s=u.v1d,Yi=u.afD,Ss=u.Lz5,Fs=u.xZX,Os=u.G_1,Ds=u.osI,Zi=u.PTJ,Ts=u.Qfx,Ns=u.bti,Is=u.XBv,Vi=u.eyl,As=u.y35,Ps=u.hKD,Bs=u.BWC,Ls=u.oLi,Mi=u.NA2,Rs=u.S3Y,Ws=u.pvT,Ys=u.m2f,Hi=u.rWO,Zs=u.A$w,Vs=u.kJL,Ms=u.S9U,Hs=u.dYC,Us=u.jUY,Xs=u.J_U,qs=u.kKo,Ks=u.VZO,Gs=u.mf2,Js=u.w1q,Qs=u.Kn2,tc=u.ncl,ec=u.LWC,rc=u.dqb,oc=u.Kjn,nc=u.TaN,ic=u.CBv,ac=u.rTd,lc=u.B73,sc=u.SSA,cc=u.CLv,uc=u.F$z,dc=u.XT_,hc=u.omS,fc=u.poV,pc=u.VXY,mc=u.xsP,xc=u.HPs,yc=u.TSy,gc=u.B5o,bc=u.u1A,vc=u.WAY,wc=u.I8J,Ui=u.ywV,kc=u.bEN,Cc=u.$45,Ec=u.TUk,jc=u.T7B,zc=u.CEd,$c=u.IHq,_c=u.SkG,Sc=u.Smz,Fc=u.nL5,Oc=u.ON,Dc=u.eiS,Tc=u.Frc,Nc=u.z5J,Ic=u.scT,Ac=u.hd2,Pc=u.AnA,Bc=u.kYX,Lc=u.yZP,Rc=u.IVd,Wc=u.SIr,Xi=u.jg2,qi=u.gVz,Yc=u.puc,Zc=u.Azz,Vc=u.X5u,Mc=u.dPh,Hc=u.SMZ,Uc=u.kro,Xc=u.nPi,qc=u.US,Ki=u.A_F,Kc=u._vH,Gc=u.gmH,Jc=u.DYV,Qc=u.qi2,Gi=u.tOc,tu=u.hau,eu=u.FaZ,ru=u.uyF,Ji=u.Vcq,ou=u.XKW,Qi=u.azd,nu=u.P2K,iu=u.XBe,au=u.JZ7,lu=u.ABi,su=u.ogC,ta=u._O2,cu=u.P0C,uu=u.Uo5,du=u.Two,hu=u.tYQ,fu=u.tVn,pu=u.pHy,ea=u.k$y,mu=u.yfi,xu=u.fl8,ra=u.f9u,yu=u.ZV1,gu=u.Lgs}}]);
