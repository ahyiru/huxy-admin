(self.webpackChunk=self.webpackChunk||[]).push([[506],{3323:function(Wr,$t){function oe(W,at){var ct=W.length;W.push(at);t:for(;0<ct;){var s=ct-1>>>1,F=W[s];if(0<ze(F,at))W[s]=at,W[ct]=F,ct=s;else break t}}function Yt(W){return W.length===0?null:W[0]}function d(W){if(W.length===0)return null;var at=W[0],ct=W.pop();if(ct!==at){W[0]=ct;t:for(var s=0,F=W.length,m=F>>>1;s<m;){var O=2*(s+1)-1,S=W[O],T=O+1,z=W[T];if(0>ze(S,ct))T<F&&0>ze(z,S)?(W[s]=z,W[T]=ct,s=T):(W[s]=S,W[O]=ct,s=O);else if(T<F&&0>ze(z,ct))W[s]=z,W[T]=ct,s=T;else break t}}return at}function ze(W,at){var ct=W.sortIndex-at.sortIndex;return ct!==0?ct:W.id-at.id}if(typeof performance=="object"&&typeof performance.now=="function"){var De=performance;$t.unstable_now=function(){return De.now()}}else{var xt=Date,I=xt.now();$t.unstable_now=function(){return xt.now()-I}}var dt=[],jt=[],Hr=1,Zt=null,qt=3,A=!1,X=!1,H=!1,U=typeof setTimeout=="function"?setTimeout:null,K=typeof clearTimeout=="function"?clearTimeout:null,et=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function Q(W){for(var at=Yt(jt);at!==null;){if(at.callback===null)d(jt);else if(at.startTime<=W)d(jt),at.sortIndex=at.expirationTime,oe(dt,at);else break;at=Yt(jt)}}function ot(W){if(H=!1,Q(W),!X)if(Yt(dt)!==null)X=!0,Kt(bt);else{var at=Yt(jt);at!==null&&ne(ot,at.startTime-W)}}function bt(W,at){X=!1,H&&(H=!1,K(Bt),Bt=-1),A=!0;var ct=qt;try{for(Q(at),Zt=Yt(dt);Zt!==null&&(!(Zt.expirationTime>at)||W&&!Mt());){var s=Zt.callback;if(typeof s=="function"){Zt.callback=null,qt=Zt.priorityLevel;var F=s(Zt.expirationTime<=at);at=$t.unstable_now(),typeof F=="function"?Zt.callback=F:Zt===Yt(dt)&&d(dt),Q(at)}else d(dt);Zt=Yt(dt)}if(Zt!==null)var m=!0;else{var O=Yt(jt);O!==null&&ne(ot,O.startTime-at),m=!1}return m}finally{Zt=null,qt=ct,A=!1}}var vt=!1,Ot=null,Bt=-1,st=5,St=-1;function Mt(){return!($t.unstable_now()-St<st)}function Vt(){if(Ot!==null){var W=$t.unstable_now();St=W;var at=!0;try{at=Ot(!0,W)}finally{at?E():(vt=!1,Ot=null)}}else vt=!1}var E;if(typeof et=="function")E=function(){et(Vt)};else if(typeof MessageChannel<"u"){var Pt=new MessageChannel,Lt=Pt.port2;Pt.port1.onmessage=Vt,E=function(){Lt.postMessage(null)}}else E=function(){U(Vt,0)};function Kt(W){Ot=W,vt||(vt=!0,E())}function ne(W,at){Bt=U(function(){W($t.unstable_now())},at)}$t.unstable_IdlePriority=5,$t.unstable_ImmediatePriority=1,$t.unstable_LowPriority=4,$t.unstable_NormalPriority=3,$t.unstable_Profiling=null,$t.unstable_UserBlockingPriority=2,$t.unstable_cancelCallback=function(W){W.callback=null},$t.unstable_continueExecution=function(){X||A||(X=!0,Kt(bt))},$t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):st=0<W?Math.floor(1e3/W):5},$t.unstable_getCurrentPriorityLevel=function(){return qt},$t.unstable_getFirstCallbackNode=function(){return Yt(dt)},$t.unstable_next=function(W){switch(qt){case 1:case 2:case 3:var at=3;break;default:at=qt}var ct=qt;qt=at;try{return W()}finally{qt=ct}},$t.unstable_pauseExecution=function(){},$t.unstable_requestPaint=function(){},$t.unstable_runWithPriority=function(W,at){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var ct=qt;qt=W;try{return at()}finally{qt=ct}},$t.unstable_scheduleCallback=function(W,at,ct){var s=$t.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?s+ct:s):ct=s,W){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=ct+F,W={id:Hr++,callback:at,priorityLevel:W,startTime:ct,expirationTime:F,sortIndex:-1},ct>s?(W.sortIndex=ct,oe(jt,W),Yt(dt)===null&&W===Yt(jt)&&(H?(K(Bt),Bt=-1):H=!0,ne(ot,ct-s))):(W.sortIndex=F,oe(dt,W),X||A||(X=!0,Kt(bt))),W},$t.unstable_shouldYield=Mt,$t.unstable_wrapCallback=function(W){var at=qt;return function(){var ct=qt;qt=at;try{return W.apply(this,arguments)}finally{qt=ct}}}},1102:function(Wr,$t,oe){Wr.exports=oe(3323)},4335:function(Wr,$t,oe){var Yt;oe.d($t,{$j:function(){return Vt},AN:function(){return ot},BQ:function(){return vt},GK:function(){return E},Hn:function(){return K},JX:function(){return qt},PC:function(){return jt},Ud:function(){return X},V7:function(){return Q},X2:function(){return Mt},dy:function(){return A},h_:function(){return St},mH:function(){return H},pC:function(){return ne},s_:function(){return st},u_:function(){return Bt},zd:function(){return bt}});var d=oe(7378),ze=oe(1542),De={269:(s,F,m)=>{m.d(F,{Z:()=>Z});var O=m(601),S=m.n(O),T=m(609),z=m.n(T),N=z()(S());N.push([s.id,`/*@height:2px;
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
`,""]),N.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"};const Z=N},528:(s,F,m)=>{m.d(F,{Z:()=>Z});var O=m(601),S=m.n(O),T=m(609),z=m.n(T),N=z()(S());N.push([s.id,`.kLIGi {
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
`,""]),N.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"};const Z=N},434:(s,F,m)=>{m.d(F,{Z:()=>Z});var O=m(601),S=m.n(O),T=m(609),z=m.n(T),N=z()(S());N.push([s.id,`@keyframes animate-drawer-right-in {
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
  height: 100%;
  --headerHeight: 44px;
  --footerHeight: 0px;
}
.W4gG3 .SMORg {
  padding: 8px 12px 24px;
  height: calc(100% - var(--headerHeight) - var(--footerHeight));
}
.W4gG3 .e3AWW {
  font-weight: 500;
  font-size: 1.6rem;
  padding: 12px 16px;
  height: var(--headerHeight);
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
  height: var(--footerHeight);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
`,""]),N.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"};const Z=N},503:(s,F,m)=>{m.d(F,{Z:()=>Z});var O=m(601),S=m.n(O),T=m(609),z=m.n(T),N=z()(S());N.push([s.id,`@keyframes animate-drop-in {
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
  display: inline-block;
  max-width: 100%;
  vertical-align: bottom;
  text-overflow: ellipsis;
  white-space: nowrap;
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
  width: max-content;
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
`,""]),N.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"};const Z=N},556:(s,F,m)=>{m.d(F,{Z:()=>Z});var O=m(601),S=m.n(O),T=m(609),z=m.n(T),N=z()(S());N.push([s.id,`.huxy-doc-frame {
  --headerHeight: 60px;
  --menuWidth: 180px;
  --bannerWidth: 180px;
  --menuItemHeight: 45px;
  --borderColor: rgba(0, 0, 0, 0.08);
  --panelBgColor: rgba(253, 253, 253, 0.85);
  --linkColor: #455a64;
  --linkHoverColor: var(--blue1);
  --linkActiveColor: var(--blue2);
  position: relative;
  transform: none;
  overflow: visible;
  max-width: 1200px;
  margin: 0 auto;
  border-left: 1px solid var(--borderColor);
  border-right: 1px solid var(--borderColor);
  color: #495057;
}
.huxy-doc-header {
  height: var(--headerHeight);
  overflow: hidden;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 4;
  border-bottom: 1px solid var(--borderColor);
  background: var(--panelBgColor);
  backdrop-filter: blur(0.3rem);
}
.huxy-doc-header .huxy-doc-banner {
  float: left;
  width: var(--bannerWidth);
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  text-align: center;
  font-size: 24px;
}
.huxy-doc-header .huxy-doc-nav {
  float: left;
  width: calc(100% - var(--bannerWidth));
  overflow: hidden;
}
.huxy-doc-header .huxy-doc-nav li {
  float: left;
}
.huxy-doc-header .huxy-doc-nav li > .link {
  display: block;
  height: var(--headerHeight);
  line-height: var(--headerHeight);
  text-decoration: none;
  padding: 0 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.01);
  transition: all 0.3s;
}
.huxy-doc-header .huxy-doc-nav li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.04);
}
.huxy-doc-header .huxy-doc-nav li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-doc-container {
  display: flex;
}
.huxy-doc-container .huxy-doc-main-page {
  flex: 1;
  overflow: auto;
}
.huxy-doc-container .huxy-doc-menu {
  width: var(--menuWidth);
  position: sticky;
  top: var(--headerHeight);
  height: calc(var(--containerHeight) - var(--headerHeight));
  overflow: hidden;
  background-color: var(--panelBgColor);
  border-left: 1px solid var(--borderColor);
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li > .link {
  position: relative;
  display: block;
  height: var(--menuItemHeight);
  line-height: var(--menuItemHeight);
  text-decoration: none;
  padding: 0 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.01);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.3s;
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li > .link.active {
  background-color: hsla(0, 0%, 0%, 0.04);
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li > .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li > ul > li > .link {
  padding-left: 25px;
}
.huxy-doc-container .huxy-doc-menu .huxy-doc-menu-root li.open > ul {
  display: block;
}
.huxy-anchor-page {
  position: relative;
  padding: 15px 24px;
}
.huxy-anchor-page .huxy-anchor-item {
  min-height: 200px;
}
.huxy-anchor-page .huxy-anchor-item:not(:first-of-type) {
  margin-top: 20px;
  border-top: 1px dashed #eee;
}
.huxy-anchor-page .huxy-anchor-item .huxy-content {
  padding: 10px 15px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.012);
  word-wrap: break-word;
  word-break: break-all;
  overflow: auto;
}
.huxy-anchor-page .huxy-anchor-item .huxy-content img {
  width: 100%;
}
.huxy-doc-menu-drawer {
  list-style: none;
  padding: 0;
  margin: 0;
}
.huxy-doc-menu-drawer .link {
  display: block;
  height: 45px;
  line-height: 45px;
  text-decoration: none;
  padding: 0 15px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.01);
  border-radius: 4px;
  transition: all 0.3s;
}
.huxy-doc-menu-drawer .link.active {
  background-color: hsla(0, 0%, 0%, 0.04);
}
.huxy-doc-menu-drawer .link:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
@media screen and (max-width: 1024px) {
  .huxy-doc-frame {
    --menuWidth: 0px;
  }
}
`,""]),N.locals={};const Z=N},548:(s,F,m)=>{m.d(F,{Z:()=>Z});var O=m(601),S=m.n(O),T=m(609),z=m.n(T),N=z()(S());N.push([s.id,`@keyframes animate-modal-in {
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
  min-width: 333px;
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
`,""]),N.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"};const Z=N},232:(s,F,m)=>{m.d(F,{Z:()=>Z});var O=m(601),S=m.n(O),T=m(609),z=m.n(T),N=z()(S());N.push([s.id,`.clear::after {
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
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
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
  flex-shrink: 0;
}
.J8VWE .OQwTX .eCk2_ .R2Mku {
  text-align: right;
  font-size: 1.8rem;
}
.J8VWE .OQwTX .eCk2_ .R2Mku:not(:first-of-type) {
  margin-left: 10px;
}
.J8VWE .OQwTX + .rOxNb {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
`,""]),N.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"};const Z=N},249:(s,F,m)=>{m.d(F,{Z:()=>Z});var O=m(601),S=m.n(O),T=m(609),z=m.n(T),N=z()(S());N.push([s.id,`.cols-1 {
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
`,""]),N.locals={};const Z=N},990:(s,F,m)=>{m.d(F,{Z:()=>Z});var O=m(601),S=m.n(O),T=m(609),z=m.n(T),N=z()(S());N.push([s.id,`@keyframes before {
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
`,""]),N.locals={};const Z=N},575:(s,F,m)=>{m.d(F,{Z:()=>Z});var O=m(601),S=m.n(O),T=m(609),z=m.n(T),N=z()(S());N.push([s.id,`.clear::after {
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
`,""]),N.locals={};const Z=N},918:(s,F,m)=>{m.d(F,{Z:()=>Z});var O=m(601),S=m.n(O),T=m(609),z=m.n(T),N=z()(S());N.push([s.id,`.ofth_ {
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
`,""]),N.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"};const Z=N},942:(s,F,m)=>{m.d(F,{Z:()=>Z});var O=m(601),S=m.n(O),T=m(609),z=m.n(T),N=z()(S());N.push([s.id,`.node-right-icon-close {
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
`,""]),N.locals={};const Z=N},609:s=>{s.exports=function(F){var m=[];return m.toString=function(){return this.map(function(O){var S="",T=typeof O[5]<"u";return O[4]&&(S+="@supports (".concat(O[4],") {")),O[2]&&(S+="@media ".concat(O[2]," {")),T&&(S+="@layer".concat(O[5].length>0?" ".concat(O[5]):""," {")),S+=F(O),T&&(S+="}"),O[2]&&(S+="}"),O[4]&&(S+="}"),S}).join("")},m.i=function(O,S,T,z,N){typeof O=="string"&&(O=[[null,O,void 0]]);var Z={};if(T)for(var Et=0;Et<this.length;Et++){var Ct=this[Et][0];Ct!=null&&(Z[Ct]=!0)}for(var At=0;At<O.length;At++){var lt=[].concat(O[At]);T&&Z[lt[0]]||(typeof N<"u"&&(typeof lt[5]>"u"||(lt[1]="@layer".concat(lt[5].length>0?" ".concat(lt[5]):""," {").concat(lt[1],"}")),lt[5]=N),S&&(lt[2]&&(lt[1]="@media ".concat(lt[2]," {").concat(lt[1],"}")),lt[2]=S),z&&(lt[4]?(lt[1]="@supports (".concat(lt[4],") {").concat(lt[1],"}"),lt[4]=z):lt[4]="".concat(z)),m.push(lt))}},m}},601:s=>{s.exports=function(F){return F[1]}},837:(s,F,m)=>{var O=m(810),S=Symbol.for("react.element"),T=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,N=O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Z={key:!0,ref:!0,__self:!0,__source:!0};function Et(Ct,At,lt){var Ft,Rt={},ae=null,Ut=null;lt!==void 0&&(ae=""+lt),At.key!==void 0&&(ae=""+At.key),At.ref!==void 0&&(Ut=At.ref);for(Ft in At)z.call(At,Ft)&&!Z.hasOwnProperty(Ft)&&(Rt[Ft]=At[Ft]);if(Ct&&Ct.defaultProps)for(Ft in At=Ct.defaultProps,At)Rt[Ft]===void 0&&(Rt[Ft]=At[Ft]);return{$$typeof:S,type:Ct,key:ae,ref:Ut,props:Rt,_owner:N.current}}F.Fragment=T,F.jsx=Et,F.jsxs=Et},322:(s,F,m)=>{s.exports=m(837)},62:s=>{var F=[];function m(T){for(var z=-1,N=0;N<F.length;N++)if(F[N].identifier===T){z=N;break}return z}function O(T,z){for(var N={},Z=[],Et=0;Et<T.length;Et++){var Ct=T[Et],At=z.base?Ct[0]+z.base:Ct[0],lt=N[At]||0,Ft="".concat(At," ").concat(lt);N[At]=lt+1;var Rt=m(Ft),ae={css:Ct[1],media:Ct[2],sourceMap:Ct[3],supports:Ct[4],layer:Ct[5]};if(Rt!==-1)F[Rt].references++,F[Rt].updater(ae);else{var Ut=S(ae,z);z.byIndex=Et,F.splice(Et,0,{identifier:Ft,updater:Ut,references:1})}Z.push(Ft)}return Z}function S(T,z){var N=z.domAPI(z);N.update(T);var Z=function(Et){if(Et){if(Et.css===T.css&&Et.media===T.media&&Et.sourceMap===T.sourceMap&&Et.supports===T.supports&&Et.layer===T.layer)return;N.update(T=Et)}else N.remove()};return Z}s.exports=function(T,z){z=z||{},T=T||[];var N=O(T,z);return function(Z){Z=Z||[];for(var Et=0;Et<N.length;Et++){var Ct=N[Et],At=m(Ct);F[At].references--}for(var lt=O(Z,z),Ft=0;Ft<N.length;Ft++){var Rt=N[Ft],ae=m(Rt);F[ae].references===0&&(F[ae].updater(),F.splice(ae,1))}N=lt}}},793:s=>{var F={};function m(S){if(typeof F[S]>"u"){var T=document.querySelector(S);if(window.HTMLIFrameElement&&T instanceof window.HTMLIFrameElement)try{T=T.contentDocument.head}catch{T=null}F[S]=T}return F[S]}function O(S,T){var z=m(S);if(!z)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");z.appendChild(T)}s.exports=O},173:s=>{function F(m){var O=document.createElement("style");return m.setAttributes(O,m.attributes),m.insert(O,m.options),O}s.exports=F},892:(s,F,m)=>{function O(S){var T=m.nc;T&&S.setAttribute("nonce",T)}s.exports=O},36:s=>{function F(S,T,z){var N="";z.supports&&(N+="@supports (".concat(z.supports,") {")),z.media&&(N+="@media ".concat(z.media," {"));var Z=typeof z.layer<"u";Z&&(N+="@layer".concat(z.layer.length>0?" ".concat(z.layer):""," {")),N+=z.css,Z&&(N+="}"),z.media&&(N+="}"),z.supports&&(N+="}");var Et=z.sourceMap;Et&&typeof btoa<"u"&&(N+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(Et))))," */")),T.styleTagTransform(N,S,T.options)}function m(S){if(S.parentNode===null)return!1;S.parentNode.removeChild(S)}function O(S){if(typeof document>"u")return{update:function(){},remove:function(){}};var T=S.insertStyleElement(S);return{update:function(z){F(T,S,z)},remove:function(){m(T)}}}s.exports=O},464:s=>{function F(m,O){if(O.styleSheet)O.styleSheet.cssText=m;else{for(;O.firstChild;)O.removeChild(O.firstChild);O.appendChild(document.createTextNode(m))}}s.exports=F},810:s=>{var F=O=>{var S={};return I.d(S,O),S},m=O=>()=>O;s.exports=Yt||(Yt=oe.t(d,2))}},xt={};function I(s){var F=xt[s];if(F!==void 0)return F.exports;var m=xt[s]={id:s,exports:{}};return De[s](m,m.exports,I),m.exports}I.n=s=>{var F=s&&s.__esModule?()=>s.default:()=>s;return I.d(F,{a:F}),F},I.d=(s,F)=>{for(var m in F)I.o(F,m)&&!I.o(s,m)&&Object.defineProperty(s,m,{enumerable:!0,get:F[m]})},I.o=(s,F)=>Object.prototype.hasOwnProperty.call(s,F),I.nc=void 0;var dt={};(()=>{I.d(dt,{PC:()=>Sr,rK:()=>tr,lr:()=>Tr,JX:()=>Dr,dy:()=>D,Ud:()=>Zr,mH:()=>q,SV:()=>zt,Hn:()=>we,rj:()=>ho,V7:()=>ke,AN:()=>ye,zd:()=>Be,BQ:()=>Gr,Ur:()=>Po,u_:()=>bo,s_:()=>ko,h_:()=>Ie,X2:()=>xe,$j:()=>Qr,GK:()=>oo,u:()=>x,mp:()=>So,C2:()=>It,pC:()=>_t,ff:()=>jo,d2:()=>ur,Uw:()=>po});var s=I(322),F=I(62),m=I.n(F),O=I(36),S=I.n(O),T=I(793),z=I.n(T),N=I(892),Z=I.n(N),Et=I(173),Ct=I.n(Et),At=I(464),lt=I.n(At),Ft=I(269),Rt={};Rt.styleTagTransform=lt(),Rt.setAttributes=Z(),Rt.insert=z().bind(null,"head"),Rt.domAPI=S(),Rt.insertStyleElement=Ct();var ae=m()(Ft.Z,Rt);const Ut=Ft.Z&&Ft.Z.locals?Ft.Z.locals:void 0,Sr=n=>(0,s.jsx)("span",{className:Ut.anico,children:(0,s.jsx)("span",{className:[Ut.hline,...(n.type||"").split(" ").map(i=>Ut[i]).filter(Boolean)].join(" ")})});var B=I(810);const Qe=n=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(n),Ue=n=>new Promise((i,u)=>{const p=new FileReader;p.readAsDataURL(n),p.addEventListener("load",()=>i(p.result)),p.addEventListener("error",k=>u(k))}),Fr=async n=>{if(!Qe(n))return n;const i=await(await fetch(decodeURIComponent(n))).blob();return await Ue(i)},yr=n=>{const[i,u]=(0,B.useState)(n);return(0,B.useEffect)(()=>{(async p=>{const k=await Fr(p);u(k)})(n)},[n]),i},tr=({src:n,...i})=>{const u=yr(n);return(0,s.jsx)("img",{...i,src:u})};var gr=n=>{var i={};return I.d(i,n),i},br=n=>()=>n;const er=gr({createPortal:()=>ze.createPortal,flushSync:()=>ze.flushSync}),rr=(n,i)=>{const u=(0,B.useRef)();(0,B.useEffect)(()=>{u.current=n},[n]),(0,B.useEffect)(()=>{if(i){const p=setInterval(()=>u.current(),i);return()=>clearInterval(p)}},[i])},he=()=>![typeof window,typeof document].includes("undefined"),Oe=n=>Object.prototype.toString.call(n).slice(8,-1).toLowerCase(),or=n=>Oe(n).indexOf("element")>-1,ie=(n=null)=>he()?or(n)?{width:n.clientWidth,height:n.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},vr=(n=()=>{},i=60)=>{let u=null;return function(...p){clearTimeout(u),u=setTimeout(()=>n.apply(this,p),i)}},Pe=(n,i)=>Object.prototype.hasOwnProperty.call(n??{},i),ce=n=>Pe(n,"current"),Xe=(n,i)=>{const u=[],p=n.children??[];for(let k=0,C=p.length;k<C;k++){const j=p[k];j.className.indexOf(i)>-1&&u.push(j)}return u.length===0?null:u.length===1?u[0]:u},Yr=(n,i)=>{getComputedStyle(n).position==="static"&&(n.style.position="relative");const u=document.createElement("object");return u.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),u.setAttribute("class","resize-sensor"),u.onload=()=>{u.contentDocument.defaultView.addEventListener("resize",i,!1),i()},u.type="text/html",n.appendChild(u),u.data="about:blank",u},wr=(n,i=60)=>{if(!he())return;n=ce(n)?n.current:n??document.body;let u=Xe(n,"resize-sensor"),p=[];const k=vr(()=>p.map(V=>V(n)),i),C=V=>{Xe(n,"resize-sensor")||(u=Yr(n,k)),p.indexOf(V)===-1&&p.push(V)},j=V=>{const nt=p.indexOf(V);nt!==-1&&p.splice(nt,1),p.length===0&&u&&L()},L=()=>{u&&u.parentNode&&(u.contentDocument&&u.contentDocument.defaultView.removeEventListener("resize",k,!1),u.parentNode.removeChild(u),u=void 0,p=[])};return{element:n,bind:C,unbind:j,destroy:L}},Nr=(n={})=>{const i=(0,B.useRef)(0),[u,p]=(0,B.useState)(n),k=(0,B.useCallback)(C=>{cancelAnimationFrame(i.current),i.current=requestAnimationFrame(()=>p(C))},[]);return(0,B.useEffect)(()=>()=>cancelAnimationFrame(i.current),[]),[u,k]},kr=(n=null,i=60)=>{const u=ce(n)?n.current:n,{bind:p,destroy:k}=wr(u,i),[C,j]=Nr(ie(u));return(0,B.useEffect)(()=>(p(()=>u&&j(ie(u))),()=>k()),[u]),C};var nr=I(528),fe={};fe.styleTagTransform=lt(),fe.setAttributes=Z(),fe.insert=z().bind(null,"head"),fe.domAPI=S(),fe.insertStyleElement=Ct();var Xr=m()(nr.Z,fe);const pe=nr.Z&&nr.Z.locals?nr.Z.locals:void 0,Tr=({children:n,active:i=0,delay:u=5e3,className:p,...k})=>{const[C,j]=(0,B.useState)(i+1),[L,V]=(0,B.useState)(!1),nt=(0,B.useRef)(),yt=(0,B.useRef)(""),{width:ut}=kr(nt);n=Array.isArray(n)?n:[n];const pt=n[0],Qt=[n[n.length-1],...n,pt],Xt=Qt.length;rr(()=>{let Ht=C+1;Ht=Ht===Xt?1:Ht,yt.current&&(yt.current=""),j(Ht),Ht===Xt-1&&setTimeout(()=>{yt.current="none",j(1)},500)},L?null:u);const Tt=(Ht,te)=>{te.stopPropagation(),yt.current="",j(Ht),(0,er.flushSync)(()=>V(!0)),V(!1)},Nt={width:`${Xt*ut}px`,transform:`translateX(${-ut*C}px)`,transition:yt.current};return(0,s.jsxs)("div",{className:`${pe["huxy-carousel"]}${p?` ${p}`:""}`,...k,ref:nt,children:[(0,s.jsx)("div",{className:pe["huxy-carousel-wrap"],style:Nt,children:Qt.map((Ht,te)=>(0,s.jsx)("div",{className:`${pe["carousel-item"]} ${C===te?pe.active:""}`,style:{width:`${ut}px`},children:Ht},`huxy-carousel-${te}`))}),(0,s.jsx)("div",{className:pe["carousel-switch"],children:n.map((Ht,te)=>(0,s.jsx)("span",{className:`${pe.dot} ${C===te+1?pe.active:""}`,onClick:Ce=>Tt(te+1,Ce)},`huxy-carousel-switch-${te}`))})]})},ue=(n,i)=>{let u="",p="";if(typeof i=="number"&&(u=`col-${n}-${i}`),typeof i=="object"){const{span:k,offset:C}=i;u=k?`col-${n}-${k}`:"",p=C?`offset-${n}-${C}`:""}return{sp:u,os:p}},Dr=(0,B.forwardRef)(({span:n,offset:i,xl:u,lg:p,md:k,sm:C,xs:j,style:L,width:V,auto:nt,offsetWidth:yt="0px",className:ut,...pt},Qt)=>{const Xt=ut?` ${ut}`:"",Tt=`col-${n||12}`,Nt=i?`offset-${i}`:"",{sp:Ht,os:te}=ue("xs",j),{sp:Ce,os:Te}=ue("sm",C),{sp:Ze,os:Ve}=ue("md",k),{sp:_r,os:mr}=ue("lg",p),{sp:Ee,os:je}=ue("xl",u),Je=[Tt,Ee,_r,Ze,Ce,Ht,Nt,je,mr,Ve,Te,te].filter(Boolean).join(" "),lo=nt?{width:"auto",flex:1,maxWidth:`calc(100% - ${yt})`}:{width:V};return(0,s.jsx)("div",{className:`${Je}${Xt}`,...pt,style:{...lo,...L},ref:Qt})}),ar=()=>{const n=(0,B.useRef)(!0);return n.current?(n.current=!1,!0):!1},qr=(n,i=[])=>{const u=ar();(0,B.useEffect)(()=>{if(!u)return n()},i)},Ae=(n,i=450)=>{const[u,p]=(0,B.useState)(n);return qr(()=>{let k;return n||i===0?p(n):k=setTimeout(()=>p(n),i),()=>k&&clearTimeout(k)},[n]),[u,p]},Ie=({children:n,mountNode:i=document.body})=>(0,er.createPortal)(n,i),ir={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:9999},Mr={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e4},lr=document.body,Be=({open:n,close:i,delay:u=300,children:p,mountNode:k,hasMask:C=!0,style:j,className:L="h-mask",relative:V})=>{const[nt]=Ae(n,u);(k??lr).style.overflow=nt?"hidden":"";const yt=V?"absolute":"fixed";return(0,s.jsx)(Ie,{mountNode:k,children:(0,s.jsx)("div",{children:nt?(0,s.jsxs)("div",{className:L,style:{...ir,position:yt},children:[C?(0,s.jsx)("div",{style:{...Mr,position:yt},onClick:ut=>i?.(ut)}):null,B.Children.map(p,ut=>(0,B.isValidElement)(ut)?(0,B.cloneElement)(ut,{style:{position:"relative",zIndex:100001,...ut.props.style}}):ut)]}):null})})};var c=I(434),g={};g.styleTagTransform=lt(),g.setAttributes=Z(),g.insert=z().bind(null,"head"),g.domAPI=S(),g.insertStyleElement=Ct();var v=m()(c.Z,g);const $=c.Z&&c.Z.locals?c.Z.locals:void 0,D=({open:n,close:i,footer:u,header:p,className:k,style:C,children:j,width:L="300px",mountNode:V,position:nt="right",relative:yt})=>{const ut=["drawer-wrap",nt,n?"open":"",...k?.split(" ")??[]].filter(Boolean).map(pt=>$[pt]).join(" ");return(0,s.jsx)(Be,{open:n,close:i,delay:250,hasMask:!0,relative:yt,mountNode:V,className:"huxy-drawer",children:(0,s.jsx)("div",{className:ut,style:{width:L,position:yt?"absolute":"fixed","--footerHeight":u?"44px":"0px",...C},children:(0,s.jsxs)("div",{className:$["drawer-container"],children:[(0,s.jsxs)("div",{className:$["drawer-header"],children:[(0,s.jsx)("span",{className:`link ${$["ico-close"]}`,onClick:pt=>i?.(pt)}),(0,s.jsx)("div",{children:p})]}),(0,s.jsx)("div",{className:$["drawer-content"],children:j}),u?(0,s.jsx)("div",{className:$["drawer-footer"],children:u}):null]})})})},J=(n,i,u="click")=>{(0,B.useEffect)(()=>{const p=C=>{const j=ce(n)?n.current:n;j?.contains&&!j.contains(C.target)&&i(C)},k=typeof u=="string"?[u]:u;return k.map(C=>{document.addEventListener(C,p,!1)}),()=>{k.map(C=>{document.removeEventListener(C,p,!1)})}},[n,i,u])},ht=n=>n?.$$typeof&&typeof n.$$typeof=="symbol"&&n.$$typeof.description==="react.element",wt=(n="")=>n.replace(/^\S/,i=>i.toUpperCase()),rt=n=>{if(he())return n=ce(n)?n.current:n??document.body,n.getBoundingClientRect?.()},Gt=n=>{if(!he())return;const i=document.createElement("div");return i.innerHTML=n,i.children[0]},se=(n,i={},u=!1)=>{if(or(n)){if(u){let p="";Object.keys(i).map(k=>{p+=`${k}: ${i[k]};`}),n.style=p;return}Object.keys(i).map(p=>n.style.setProperty(p,i[p]))}},$e=(n=350)=>new Promise(i=>setTimeout(i,n)),Le=(n=100)=>{const i=Date.now();for(;Date.now()-i<=n;);},ve=$e,sr=async(n,i=15)=>{if(!he())return;if(typeof n=="string"&&(n=Gt(n)),n=ce(n)?n.current:n,!or(n))return{};const u=n.cloneNode(!0);se(u,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),n.parentNode.appendChild(u),await ve(i);const p=rt(u);return n.parentNode.removeChild(u),p},Cr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Re=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,qe=(n,i)=>{i=`huxy-drop-arrow-${i}`;const u=n.getAttribute("class")??"";Cr.test(u)?n.setAttribute("class",u.replace(Re,i)):n.setAttribute("class",`${u} ${i}`)},_e=async(n,i,u)=>{const{left:p,right:k,top:C,bottom:j}=rt(n),{width:L,height:V}=ie(),{width:nt,height:yt}=await sr(i);if(k<0||j<0||p>L||C>V)return{};if(u==="vertical"){const ut={left:p+"px",top:j+10+"px",right:"auto",bottom:"auto"};let pt="lt";p+nt>L&&(ut.left=k-nt+"px",pt="rt"),j+10+yt>V&&(ut.top=C-10-yt+"px",pt=pt==="lt"?"lb":"rb"),se(i,ut),qe(i,pt)}else{const ut={left:k+10+"px",top:C+"px",right:"auto",bottom:"auto"};let pt="tl";k+10+nt>L&&(ut.left=p-10-nt+"px",pt="tr"),C+yt>V&&(ut.top=j-yt+"px",pt=pt==="tl"?"bl":"br"),se(i,ut),qe(i,pt)}},cr=(n,i,u="horizontal")=>{const p=vr(_e),k=()=>p(n,i,u);window.addEventListener("scroll",k,!1),window.addEventListener("resize",k,!1);const C=()=>{window.removeEventListener("scroll",k),window.removeEventListener("resize",k),se(i,{left:"",top:"",right:"",bottom:""})};return _e(n,i,u),C},co=({open:n,delay:i=280,children:u,mountNode:p,style:k,...C})=>{const[j]=Ae(n,i);return(0,s.jsx)(Ie,{mountNode:p,children:(0,s.jsx)("div",{children:(0,s.jsx)("div",{style:{...k,display:j?"block":"none"},...C,children:u})})})};var We=I(503),Ke={};Ke.styleTagTransform=lt(),Ke.setAttributes=Z(),Ke.insert=z().bind(null,"head"),Ke.domAPI=S(),Ke.insertStyleElement=Ct();var Kr=m()(We.Z,Ke);const Or=We.Z&&We.Z.locals?We.Z.locals:void 0,Zr=({trigger:n="click",type:i,dropList:u,className:p,children:k,targetProps:C,...j})=>{const[L,V]=(0,B.useState)(!1),nt=(0,B.useRef)(),yt=(0,B.useRef)(),ut=(0,B.useRef)();J(nt,Nt=>L&&V(!1),[...new Set(["click",n.toLowerCase()])]),(0,B.useEffect)(()=>()=>ut.current?.(),[]);const pt=Nt=>{Nt.preventDefault(),V(!0),ut.current=cr(nt.current,yt.current,i)},Qt={[`on${wt(n)}`]:pt},Xt=["drop-wrap",L?"open":"",p].filter(Boolean).map(Nt=>Or[Nt]).join(" "),Tt=ht(u)?u:u?.(()=>V(!1),L);return(0,s.jsxs)("span",{ref:nt,className:Or["drop-target"],...C,...Qt,children:[k,(0,s.jsx)(co,{open:L,className:"huxy-drop",children:(0,s.jsx)("div",{ref:yt,className:Xt,...j,children:Tt})})]})},uo=(n,i,u)=>{if(!he())return;u=ce(u)?u.current:u??document.body;const p=document.createElement("span");p.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),i&&se(p,i),p.innerText=(n??"").replace(/[\r\n]/g,""),u.appendChild(p);const k=p.getBoundingClientRect();return u.removeChild(p),k};var l=I(918),f={};f.styleTagTransform=lt(),f.setAttributes=Z(),f.insert=z().bind(null,"head"),f.domAPI=S(),f.insertStyleElement=Ct();var w=m()(l.Z,f);const b=l.Z&&l.Z.locals?l.Z.locals:void 0,x=({title:n,placement:i="topRight",children:u,ellipsis:p,className:k,...C})=>(0,s.jsx)("span",{className:`${b[`huxy-tooltip-${i}`]}${k?` ${k}`:""}`,tooltip:n??u,...C,children:(0,s.jsx)("span",{className:p?b.ellipsis:"",children:u})}),Y={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},G=n=>{const{children:i,style:u}=n,p=typeof i=="string",k=p?i:i?.props?.title??i?.props?.children,C=(0,B.useRef)(),[j,L]=(0,B.useState)(!0);return(0,B.useEffect)(()=>{if(C.current){const{width:V}=uo(k,null,C.current.parentNode),{width:nt}=rt(C.current),yt=~~V>~~nt;yt!==j&&L(yt)}},[k]),(0,s.jsx)("span",{ref:C,style:{display:"flex",width:"100%",...u},children:j?p?(0,s.jsx)(x,{...n,ellipsis:!0}):(0,s.jsx)("span",{style:Y,children:i}):p?i:i?.props?.children})},q=n=>n.children==null?"":(0,s.jsx)(G,{...n});var M=Object.defineProperty,R=(n,i,u)=>i in n?M(n,i,{enumerable:!0,configurable:!0,writable:!0,value:u}):n[i]=u,kt=(n,i,u)=>(R(n,typeof i!="symbol"?i+"":i,u),u);class zt extends B.default.Component{constructor(){super(...arguments),kt(this,"state",{error:null})}static getDerivedStateFromError(i){return{error:i}}componentDidCatch(i,u){const{errorReport:p}=this.props;typeof p=="function"&&p({error:i,info:u.componentStack})}render(){const{error:i}=this.state,{fallback:u,children:p}=this.props;return i?u(i):p}}const It=n=>i=>{if(typeof i=="function"||typeof i?.render=="function")return(0,s.jsx)(i,{});if(typeof i=="string"){const u=n?.[i];return u?(0,s.jsx)(u,{}):(0,s.jsx)("i",{className:i})}return i??null},gt=n=>It(n),_t=n=>({icon:i,defaultIcon:u})=>i?gt(n)(i):i===!1?null:u,Dt=["","webkit","moz","ms"],ft=n=>Dt.map(i=>i?`${i}FullscreenElement`:"fullscreenElement").find(i=>n[i]),it=n=>Dt.map(i=>i?`${i}RequestFullscreen`:"requestFullscreen").find(i=>n[i]),Wt=n=>Dt.map(i=>i?`${i}ExitFullscreen`:"exitFullscreen").find(i=>n[i]),Jt=Dt.map(n=>`${n}fullscreenchange`),le=n=>{if(!he())return;n=ce(n)?n.current:n??document.body;const i=ft(document),u=it(n),p=Wt(document);document[i]?document[p]?.():n[u]?.()},de=n=>he()?(Jt.map(i=>document.addEventListener(i,n,!1)),()=>Jt.map(i=>document.removeEventListener(i,n,!1))):void 0,Se=n=>(0,s.jsx)("i",{...n,children:"..."}),we=({panel:n,fullIcon:i=Se,exitIcon:u=Se,...p})=>{const k=ce(n)?n.current:n,[C,j]=(0,B.useState)();(0,B.useEffect)(()=>{const V=de(()=>{j(nt=>!nt)});return()=>V()},[]);const L=C?u:i;return(0,s.jsx)(L,{onClick:V=>le(k),...p})};var Fe=I(249),me={};me.styleTagTransform=lt(),me.setAttributes=Z(),me.insert=z().bind(null,"head"),me.domAPI=S(),me.insertStyleElement=Ct();var Pr=m()(Fe.Z,me);const Ge=Fe.Z&&Fe.Z.locals?Fe.Z.locals:void 0,Er=({gutter:n=10,className:i,overflow:u="hidden",...p},k)=>{const C=i?` ${i}`:"";let j=10;if(Array.isArray(n)){const L=[...n];n=L[0],j=L[1]??L[0]}return(0,s.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(n/2)}px`,"--rowgap":`${Math.floor(j/2)}px`,overflow:u},children:(0,s.jsx)("div",{className:`row${C}`,...p,ref:k})})},xe=(0,B.forwardRef)(Er),ho=({rowProps:n,colProps:i,children:u,Row:p=xe,Col:k=Dr})=>{const C=[];return B.Children.map(u,j=>{j&&(j.type?.description==="react.fragment"?C.push(...j.props.children):C.push(j))}),(0,s.jsx)(p,{...n,children:C.map((j,L)=>(0,s.jsx)(k,{...i,...j.props.itemprops,children:j},`huuxy_grid_${L}`))})},ur=(n,i)=>(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:n},...i}),ye=n=>{const{error:i={},info:u=""}=n||{},{message:p,stack:k,errMsg:C}=i;let j=C||k||i.toString();j=`${j}
${u}`.replace(/\r|\n|\r\n/g,"<br/>"),j=j.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),j=j.replace(/\s/g,"&nbsp;");const L=p?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,s.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[ur(j,{style:{color:"red"}}),L&&(0,s.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${L}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},ke=({children:n,report:i})=>{const u=(0,B.useRef)();return u.current?.state&&(u.current.state.error=null),(0,s.jsx)(zt,{ref:u,fallback:(p,k)=>ye({error:p,info:k}),errorReport:i,children:n})},He=(n,i)=>Object.keys(i).map(u=>n.style[u]=i[u]),Ye=(n,i)=>Object.keys(i).map(u=>n.style[u]=""),fo={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},dr=({left:n,top:i,width:u,height:p})=>({left:`${n}px`,top:`${i}px`,width:`${u}px`,height:`${p}px`}),Ar=n=>(0,s.jsx)("i",{...n,children:"..."}),ge=n=>{const{left:i,top:u}=rt(n),{width:p,height:k}=ie(n);return{left:i,top:u,width:p,height:k}},Gr=({panel:n,target:i,fullIcon:u=Ar,exitIcon:p=Ar})=>{n=ce(n)?n.current:n||document.body;const[k,C]=(0,B.useState)(),j=(0,B.useRef)();(0,B.useEffect)(()=>{j.current={...fo,...dr(ge(n))}},[n]);const L=(nt,yt)=>{if(nt){const ut=dr(ge((typeof i=="function"?i:()=>document.getElementsByClassName(i)[0])()));He(yt,j.current),setTimeout(()=>{He(yt,ut)},0)}else Ye(yt,j.current);C(nt)},V=k?p:u;return(0,s.jsx)(V,{onClick:nt=>L(!k,n)})};var Me=I(548),Ne={};Ne.styleTagTransform=lt(),Ne.setAttributes=Z(),Ne.insert=z().bind(null,"head"),Ne.domAPI=S(),Ne.insertStyleElement=Ct();var Jr=m()(Me.Z,Ne);const be=Me.Z&&Me.Z.locals?Me.Z.locals:void 0,bo=({open:n,close:i,hasMask:u=!0,cancelText:p="\u53D6\u6D88",submit:k,submitText:C="\u786E\u5B9A",title:j="Modal \u5F39\u7A97",className:L,children:V,delay:nt=250,...yt})=>{const ut=["modal-wrap",n?"open":"",...L?.split(" ")??[]].filter(Boolean).map(pt=>be[pt]).join(" ");return(0,s.jsx)(Be,{open:n,close:i,delay:nt,hasMask:u,className:"huxy-modal",children:(0,s.jsx)("div",{className:ut,...yt,children:(0,s.jsxs)("div",{className:be["modal-container"],children:[(0,s.jsx)("div",{className:be["modal-header"],children:j}),(0,s.jsx)("div",{className:be["modal-content"],children:V}),(0,s.jsxs)("div",{className:be["modal-footer"],children:[(0,s.jsx)("div",{className:`${be.btn} ${be.left}`,onClick:pt=>i?.(pt),children:p}),(0,s.jsx)("div",{className:`${be.btn} ${be.right}`,onClick:pt=>k?.(pt),children:C})]})]})})})};var Vr=I(990),hr={};hr.styleTagTransform=lt(),hr.setAttributes=Z(),hr.insert=z().bind(null,"head"),hr.domAPI=S(),hr.insertStyleElement=Ct();var vo=m()(Vr.Z,hr);const bn=Vr.Z&&Vr.Z.locals?Vr.Z.locals:void 0,Qr=({global:n,absolute:i})=>(0,s.jsx)("div",{className:`spinner${n?" global":""}${i?" absolute":""}`,children:(0,s.jsx)("figure",{className:"spinning"})});var to=I(232),jr={};jr.styleTagTransform=lt(),jr.setAttributes=Z(),jr.insert=z().bind(null,"head"),jr.domAPI=S(),jr.insertStyleElement=Ct();var vn=m()(to.Z,jr);const zr=to.Z&&to.Z.locals?to.Z.locals:void 0,wo=n=>n?.filter?.(i=>typeof i=="function"),Wo=(n,i)=>{const u=(0,B.useRef)(),{loading:p,title:k,plugins:C,children:j,className:L,...V}=n,nt=wo(C),yt=nt?.length,ut=L?` ${L}`:"",pt=ce(i)?i:u;return(0,s.jsxs)("div",{className:`${zr.panel}${ut}`,...V,ref:pt,children:[(k||yt)&&(0,s.jsxs)("div",{className:zr["panel-header"],children:[k&&(0,s.jsx)("h4",{className:zr["panel-title"],children:k}),yt&&(0,s.jsx)("div",{className:zr["panel-plugins"],children:nt.map((Qt,Xt)=>(0,s.jsx)("span",{className:`link ${zr.link}`,children:(0,s.jsx)(Qt,{panel:pt})},Xt))})]}),(0,s.jsx)("div",{className:zr["panel-body"],children:j}),p&&(0,s.jsx)(Qr,{})]})},ko=(0,B.forwardRef)(Wo),eo=n=>Oe(n)==="array",Co=n=>eo(n)&&!!n.length,Ho=({to:n,preventDefault:i,stopPropagation:u,...p})=>i?(0,s.jsx)("span",{...p}):(0,s.jsx)("a",{href:n,...p}),Eo=({item:n,...i})=>(0,s.jsx)("ul",{...i}),Yo=(n,...i)=>{const u={};return Object.keys(n).filter(Boolean).map(p=>{u[p]=k=>n[p](k,...i)}),u},Ir=({data:n=[],events:i={},List:u=Eo,Link:p=Ho,leftIcon:k,rightIcon:C,isHorizontal:j,isCollapsed:L,level:V=0,parentOpen:nt=!0})=>{const yt=L&&!V,ut=!j&&!L&&!nt;return n.map(pt=>{const{name:Qt,path:Xt,icon:Tt,rightIcon:Nt,active:Ht,open:te,children:Ce,linkProps:Te}=pt,Ze=Co(Ce),Ve=pt.id||Xt||Qt,_r=yt?pt.title??Qt:void 0,mr=ut?"hidden":"",Ee=Tt??k,je=Nt??C,Je=Ee?(0,s.jsx)("div",{className:"node-left-icon",children:Ee===!0?(0,s.jsx)("i",{className:"default-left-icon"}):Ee}):null,lo=Qt?(0,s.jsx)("div",{className:"node-text",children:(0,s.jsx)("span",{children:Qt})}):null;if(Ze){const Ao=Yo(i,pt,V),an=[mr,te?"open":""].filter(Boolean).join(" ");return(0,s.jsxs)("li",{className:an,"has-children":"true",...Ao,children:[(0,s.jsxs)(p,{title:_r,className:`link${Ht?" active":""}`,to:Xt,preventDefault:!0,stopPropagation:!1,...Te,children:[Je,lo,je?(0,s.jsx)("div",{className:"node-right-icon",children:je===!0?(0,s.jsx)("i",{className:"default-right-icon"}):je}):null]}),(0,s.jsx)(u,{item:pt,children:Ir({data:Ce,events:i,List:u,Link:p,leftIcon:k,rightIcon:C,isHorizontal:j,isCollapsed:L,level:V+1,parentOpen:!!te})})]},Ve)}return(0,s.jsx)("li",{className:mr,children:(0,s.jsxs)(p,{title:_r,className:`link${Ht?" active":""}`,to:Xt,...Te,children:[Je,lo]})},Ve)})},jo=Ir,po=(n,...i)=>(0,s.jsx)("div",{"v-html":n,...i});var ro=I(575),fr={};fr.styleTagTransform=lt(),fr.setAttributes=Z(),fr.insert=z().bind(null,"head"),fr.domAPI=S(),fr.insertStyleElement=Ct();var Mo=m()(ro.Z,fr);const wn=ro.Z&&ro.Z.locals?ro.Z.locals:void 0,zo=n=>(0,s.jsx)("div",{style:{padding:"6px 15px"},children:n}),Zo=({activekey:n,tabs:i=[],switchTab:u,trackColor:p,flex:k,...C},j)=>{const[L,V]=(0,B.useState)(n??i[0]?.key),[nt,yt]=(0,B.useState)({}),ut=(0,B.useRef)({}),pt=(0,B.useRef)();(0,B.useEffect)(()=>{const Tt=ut.current[L];Tt&&Qt(Tt)},[]);const Qt=Tt=>{const{left:Nt,width:Ht}=rt(Tt),te=rt(pt.current).left;yt({left:Nt-te,width:Ht})},Xt=(Tt,Nt)=>{Tt.stopPropagation(),V(Nt),typeof u=="function"&&u(Nt),Qt(Tt.currentTarget)};return(0,s.jsxs)("div",{className:"tabs-header-wrap",...C,ref:j,children:[(0,s.jsx)("ul",{className:`tabs-header${k?" flex":""}`,ref:pt,children:i.map(Tt=>(0,s.jsx)("li",{ref:Nt=>ut.current[Tt.key]=Nt,className:`th-item${L===Tt.key?" active":""}`,onClick:Nt=>Xt(Nt,Tt.key),children:typeof Tt.renderTabs=="function"?Tt.renderTabs(Tt,L===Tt.key):zo(Tt.value)},Tt.key))}),(0,s.jsx)("div",{className:"th-track",style:{...nt,color:p}})]})},oo=(0,B.forwardRef)(Zo),Vo=(n,i,u="id",p="children")=>{if(!eo(n))return null;const k=C=>{for(let j=0,L=C.length;j<L;j++){const V=C[j];if(V[u]===i)return[V];if(eo(V[p])){const nt=k(V[p]);if(nt)return[V].concat(nt)}}};return k(n)},$o=n=>++n,Uo=()=>{const[,n]=(0,B.useState)(0);return(0,B.useCallback)(()=>n($o),[])},mo=n=>{const{children:i,open:u}=n;let p=0;if(u&&i?.length){p=i.length;let k=0;return i.map(C=>k+=mo(C)),p+k}return p},Xo=({item:n,style:i,...u})=>(0,s.jsx)("ul",{style:{...i,"--count":mo(n)},...u});var Ur=I(942),Br={};Br.styleTagTransform=lt(),Br.setAttributes=Z(),Br.insert=z().bind(null,"head"),Br.domAPI=S(),Br.insertStyleElement=Ct();var qo=m()(Ur.Z,Br);const kn=Ur.Z&&Ur.Z.locals?Ur.Z.locals:void 0,_o=n=>(0,s.jsx)("ul",{...n}),Ko=(n,i)=>n?Xo:({item:u,...p})=>(0,s.jsx)(_o,{className:i==="right"?"left":"",...p}),So=n=>{const{data:i=[],collapsed:u=!1,type:p="vertical",Link:k,width:C,bgColor:j,itemHeight:L,collapsedWidth:V,itemPadding:nt,style:yt,className:ut,...pt}=n,Qt=(0,B.useRef)(),Xt=(0,B.useRef)();(0,B.useEffect)(()=>()=>clearTimeout(Qt.current),[]);const Tt=Uo(),Nt=p==="horizontal",Ht=!Nt&&u,te={onClick:(mr,Ee)=>{if(mr.stopPropagation(),!Nt&&!Ht){const je=Vo(i,Ee.path,"path"),Je=je[je.length-1];Je.open=!Je.open,Tt()}},onMouseEnter:(mr,Ee,je)=>{Ht&&!je&&(clearTimeout(Qt.current),Xt.current.style.width="var(--maxWidth)")},onMouseLeave:(mr,Ee,je)=>{Ht&&!je&&(Qt.current=setTimeout(()=>Xt.current.style.width="",200))}},Ce=(Nt?["huxy-horizontal-tree",ut]:["huxy-tree",ut,Ht?"collapsed":""]).filter(Boolean).join(" "),{float:Te,...Ze}=pt?.style??{},Ve={"--bgColor":j,"--itemHeight":L,"--nodeListWidth":C,...Ze};Nt?(Ve["--itemPadding"]=nt,Ve["--nodeFloat"]=Te):(Ve["--width"]=C,Ve["--collapsedWidth"]=V);const _r=Ko(!Nt&&!Ht,Te);return(0,s.jsx)("div",{ref:Xt,className:Ce,style:Ve,...pt,children:(0,s.jsx)("div",{className:"huxy-tree-track",children:(0,s.jsx)("ul",{className:"huxy-tree-root",children:jo({data:i,events:te,List:_r,Link:k,leftIcon:!0,rightIcon:!0,isHorizontal:Nt,isCollapsed:Ht})})})})},Go=()=>{const[n,i]=Nr(ie());return(0,B.useEffect)(()=>{const u=()=>i(ie());return window.addEventListener("resize",u,!1),()=>window.removeEventListener("resize",u,!1)},[]),n},xo=({menu:n,curName:i,Link:u})=>n.map(p=>{const{path:k,name:C,open:j,children:L}=p,V=C===i;return L?.length?(0,s.jsxs)("li",{className:j?"open":"",children:[(0,s.jsx)(u,{to:{query:{name:C}},className:`link${V?" active":""}`,preventDefault:!0,children:(0,s.jsx)("span",{children:C})}),(0,s.jsx)("ul",{children:(0,s.jsx)(xo,{menu:L,curName:C,Link:u})})]},k||C):(0,s.jsx)("li",{children:(0,s.jsx)(u,{to:{query:{name:C}},className:`link${V?" active":""}`,children:(0,s.jsx)("span",{children:C})})},k||C)}),Jo=xo,no=(n={})=>{const i={};return Object.keys(n).map(u=>{n[u]!=null&&(i[u]=n[u])}),i},Qo=(n=0,i)=>{he()&&(i=ce(i)?i.current:i??window,i.scrollTo?.({top:n,behavior:"smooth"}))},Fo=(n=()=>{},i=60)=>{let u=null;return function(...p){u||(n.apply(this,p),u=setTimeout(()=>u=null,i))}},tn=(n,i=null,u=!1)=>[...n||[]].sort((p,k)=>{const C=i?p[i]:p,j=i?k[i]:k;return!isNaN(Number(C))&&!isNaN(Number(C))?u?j-C:C-j:typeof C=="string"&&typeof j=="string"?u?j.localeCompare(C):C.localeCompare(j):typeof C=="string"&&typeof j=="number"?u?-1:1:typeof C=="number"||typeof C=="string"?u?1:-1:u?-1:1}),No=()=>he()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Lr=({curName:n,itemList:i})=>{const u=(0,B.useRef)(!1),p=(0,B.useRef)(""),[k,C]=(0,B.useState)(n);return(0,B.useEffect)(()=>{if(i.current=no(i.current),!n){const V=Object.keys(i.current).map(nt=>({name:nt,offsetTop:i.current[nt]?.offsetTop??0}));C(V[0]?.name)}let j=0,L=0;if(p.current!==n){p.current=n;const V=i.current[n];u.current=!0,V?(Qo(V.offsetTop),j=setTimeout(()=>u.current=!1,1050)):L=setTimeout(()=>{window.scrollTo?.({top:i.current[n]?.offsetTop??0,behavior:"instant"}),j=setTimeout(()=>u.current=!1,1050)},550)}return()=>{clearTimeout(j),clearTimeout(L),u.current=!1}},[n]),(0,B.useEffect)(()=>{const j=Fo(()=>{if(!u.current){const L=tn(Object.keys(i.current).map(V=>({name:V,offsetTop:i.current[V]?.offsetTop??0})),"offsetTop",!0).find(V=>V.offsetTop<No())?.name;p.current!==L&&(p.current=L,C(L))}});return window.addEventListener("scroll",j,!1),()=>window.removeEventListener("scroll",j,!1)},[]),[k]},en=/!\[.*\]\((.*)\)/g,pr=async(n,i,u)=>{const p={};for(let k=0,C=n.length;k<C;k++){const j=n[k],L=j.slice(2);p[j]=await u({folder:i,name:L})}return p},rn=async(n,{folder:i},u)=>{const p=[...n.matchAll(en)].filter(Boolean).map(k=>k[1]);if(p?.length){const k=await pr(p,i,u);p.map(C=>{n=n.replace(C,k[C])})}return n},To=({item:n,marked:i,getContext:u})=>{const[p,k]=(0,B.useState)("");return(0,B.useEffect)(()=>{(async()=>{try{const C=await u({...n,type:".md"}),j=await rn(C,n,u),L=typeof i=="function"?i.parse(j):L;k(L)}catch(C){k(C?.message)}})()},[]),(0,s.jsxs)("div",{className:"huxy-content",children:[ur(p),!p&&(0,s.jsx)(Qr,{global:!0})]})},Do=({router:n,curName:i,context:u,marked:p,getContext:k})=>{const C=(0,B.useRef)({}),[j]=Lr({curName:i,itemList:C});return(0,B.useEffect)(()=>{j&&n.push({query:{name:j}})},[j]),(0,s.jsx)("div",{className:"huxy-anchor-page",children:u.map((L,V)=>(0,s.jsxs)("div",{className:"huxy-anchor-item",ref:nt=>C.current[L.name]=nt,children:[(0,s.jsx)("h2",{children:`${L.name}`}),(0,s.jsx)(To,{item:L,marked:p,getContext:k})]},L.name))})},on=n=>{const i=[];return n.map(u=>{const[p,k]=u.name.split("/"),C=i.find(j=>j.name===p);C?C.children.push({name:k,folder:p}):i.push({name:p,children:[{name:k,folder:p}]})}),i};var ao=I(556),$r={};$r.styleTagTransform=lt(),$r.setAttributes=Z(),$r.insert=z().bind(null,"head"),$r.domAPI=S(),$r.insertStyleElement=Ct();var io=m()(ao.Z,$r);const nn=ao.Z&&ao.Z.locals?ao.Z.locals:void 0,Oo=(n,i,u)=>({sidebar:n.find(p=>p.name===i)?.children??[],listEle:n.map(({name:p,children:k})=>(0,s.jsx)("li",{children:(0,s.jsx)(u,{to:{query:{folder:p,name:k[0]?.name}},className:`link${p===i?" active":""}`,children:(0,s.jsx)("span",{children:p})})},p))}),Po=n=>{const{params:i,router:u,Link:p,listFiles:k,getContext:C,marked:j,title:L,className:V,style:nt}=n,{folder:yt,name:ut}=i,{width:pt}=Go(),[Qt,Xt]=(0,B.useState)([]),[Tt,Nt]=(0,B.useState)(!1);(0,B.useEffect)(()=>{(async()=>{const Te=await k(),Ze=on(Te);Xt(Ze),yt||u.push({query:{folder:Ze[0]?.name,name:Ze[0]?.children[0]?.name}})})()},[]);const Ht=pt<=1024,{sidebar:te,listEle:Ce}=Oo(Qt,yt,p);return(0,s.jsxs)("div",{className:`huxy-doc-frame ${V??""}`,style:nt,children:[(0,s.jsxs)("div",{className:"huxy-doc-header",children:[(0,s.jsx)("div",{className:"huxy-doc-banner",children:L||"\u6587\u6863\u7CFB\u7EDF"}),(0,s.jsx)("ul",{className:"huxy-doc-nav",children:Ht?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("li",{className:"huxy-doc-collapsed",children:(0,s.jsx)("span",{className:"link",onClick:Te=>{Te.stopPropagation(),Nt(!Tt)},children:(0,s.jsx)(Sr,{type:Tt?"right":""})})}),(0,s.jsx)(D,{open:Tt,close:()=>Nt(!1),width:"220px",children:(0,s.jsx)("ul",{className:"huxy-doc-menu-drawer",children:Ce})})]}):Ce})]}),(0,s.jsxs)("div",{className:"huxy-doc-container",children:[(0,s.jsx)("div",{className:"huxy-doc-main-page",children:(0,s.jsx)(Do,{router:u,curName:ut,context:te,marked:j,getContext:C})}),(0,s.jsx)("div",{className:"huxy-doc-menu",children:(0,s.jsx)("ul",{className:"huxy-doc-menu-root",children:(0,s.jsx)(Jo,{menu:te,curName:ut,Link:p})})})]})]})}})();var jt=dt.PC,Hr=dt.rK,Zt=dt.lr,qt=dt.JX,A=dt.dy,X=dt.Ud,H=dt.mH,U=dt.SV,K=dt.Hn,et=dt.rj,Q=dt.V7,ot=dt.AN,bt=dt.zd,vt=dt.BQ,Ot=dt.Ur,Bt=dt.u_,st=dt.s_,St=dt.h_,Mt=dt.X2,Vt=dt.$j,E=dt.GK,Pt=dt.u,Lt=dt.mp,Kt=dt.C2,ne=dt.pC,W=dt.ff,at=dt.d2,ct=dt.Uw},8611:function(Wr,$t,oe){var Yt;oe.d($t,{Bv:function(){return Hr},rU:function(){return dt},tv:function(){return qt},yj:function(){return Zt}});var d=oe(7378),ze={990:(A,X,H)=>{H.d(X,{Z:()=>bt});var U=H(601),K=H.n(U),et=H(609),Q=H.n(et),ot=Q()(K());ot.push([A.id,`@keyframes before {
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
`,""]),ot.locals={};const bt=ot},267:(A,X,H)=>{H.d(X,{Z:()=>bt});var U=H(601),K=H.n(U),et=H(609),Q=H.n(et),ot=Q()(K());ot.push([A.id,`.Iuy_e {
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
`,""]),ot.locals={link:"Iuy_e",active:"D3oJg"};const bt=ot},609:A=>{A.exports=function(X){var H=[];return H.toString=function(){return this.map(function(U){var K="",et=typeof U[5]<"u";return U[4]&&(K+="@supports (".concat(U[4],") {")),U[2]&&(K+="@media ".concat(U[2]," {")),et&&(K+="@layer".concat(U[5].length>0?" ".concat(U[5]):""," {")),K+=X(U),et&&(K+="}"),U[2]&&(K+="}"),U[4]&&(K+="}"),K}).join("")},H.i=function(U,K,et,Q,ot){typeof U=="string"&&(U=[[null,U,void 0]]);var bt={};if(et)for(var vt=0;vt<this.length;vt++){var Ot=this[vt][0];Ot!=null&&(bt[Ot]=!0)}for(var Bt=0;Bt<U.length;Bt++){var st=[].concat(U[Bt]);et&&bt[st[0]]||(typeof ot<"u"&&(typeof st[5]>"u"||(st[1]="@layer".concat(st[5].length>0?" ".concat(st[5]):""," {").concat(st[1],"}")),st[5]=ot),K&&(st[2]&&(st[1]="@media ".concat(st[2]," {").concat(st[1],"}")),st[2]=K),Q&&(st[4]?(st[1]="@supports (".concat(st[4],") {").concat(st[1],"}"),st[4]=Q):st[4]="".concat(Q)),H.push(st))}},H}},601:A=>{A.exports=function(X){return X[1]}},837:(A,X,H)=>{var U,K=H(810),et=Symbol.for("react.element"),Q=Symbol.for("react.fragment"),ot=Object.prototype.hasOwnProperty,bt=K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vt={key:!0,ref:!0,__self:!0,__source:!0};function Ot(Bt,st,St){var Mt,Vt={},E=null,Pt=null;St!==void 0&&(E=""+St),st.key!==void 0&&(E=""+st.key),st.ref!==void 0&&(Pt=st.ref);for(Mt in st)ot.call(st,Mt)&&!vt.hasOwnProperty(Mt)&&(Vt[Mt]=st[Mt]);if(Bt&&Bt.defaultProps)for(Mt in st=Bt.defaultProps,st)Vt[Mt]===void 0&&(Vt[Mt]=st[Mt]);return{$$typeof:et,type:Bt,key:E,ref:Pt,props:Vt,_owner:bt.current}}U=Q,X.jsx=Ot,X.jsxs=Ot},322:(A,X,H)=>{A.exports=H(837)},62:A=>{var X=[];function H(et){for(var Q=-1,ot=0;ot<X.length;ot++)if(X[ot].identifier===et){Q=ot;break}return Q}function U(et,Q){for(var ot={},bt=[],vt=0;vt<et.length;vt++){var Ot=et[vt],Bt=Q.base?Ot[0]+Q.base:Ot[0],st=ot[Bt]||0,St="".concat(Bt," ").concat(st);ot[Bt]=st+1;var Mt=H(St),Vt={css:Ot[1],media:Ot[2],sourceMap:Ot[3],supports:Ot[4],layer:Ot[5]};if(Mt!==-1)X[Mt].references++,X[Mt].updater(Vt);else{var E=K(Vt,Q);Q.byIndex=vt,X.splice(vt,0,{identifier:St,updater:E,references:1})}bt.push(St)}return bt}function K(et,Q){var ot=Q.domAPI(Q);ot.update(et);var bt=function(vt){if(vt){if(vt.css===et.css&&vt.media===et.media&&vt.sourceMap===et.sourceMap&&vt.supports===et.supports&&vt.layer===et.layer)return;ot.update(et=vt)}else ot.remove()};return bt}A.exports=function(et,Q){Q=Q||{},et=et||[];var ot=U(et,Q);return function(bt){bt=bt||[];for(var vt=0;vt<ot.length;vt++){var Ot=ot[vt],Bt=H(Ot);X[Bt].references--}for(var st=U(bt,Q),St=0;St<ot.length;St++){var Mt=ot[St],Vt=H(Mt);X[Vt].references===0&&(X[Vt].updater(),X.splice(Vt,1))}ot=st}}},793:A=>{var X={};function H(K){if(typeof X[K]>"u"){var et=document.querySelector(K);if(window.HTMLIFrameElement&&et instanceof window.HTMLIFrameElement)try{et=et.contentDocument.head}catch{et=null}X[K]=et}return X[K]}function U(K,et){var Q=H(K);if(!Q)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");Q.appendChild(et)}A.exports=U},173:A=>{function X(H){var U=document.createElement("style");return H.setAttributes(U,H.attributes),H.insert(U,H.options),U}A.exports=X},892:(A,X,H)=>{function U(K){var et=H.nc;et&&K.setAttribute("nonce",et)}A.exports=U},36:A=>{function X(K,et,Q){var ot="";Q.supports&&(ot+="@supports (".concat(Q.supports,") {")),Q.media&&(ot+="@media ".concat(Q.media," {"));var bt=typeof Q.layer<"u";bt&&(ot+="@layer".concat(Q.layer.length>0?" ".concat(Q.layer):""," {")),ot+=Q.css,bt&&(ot+="}"),Q.media&&(ot+="}"),Q.supports&&(ot+="}");var vt=Q.sourceMap;vt&&typeof btoa<"u"&&(ot+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(vt))))," */")),et.styleTagTransform(ot,K,et.options)}function H(K){if(K.parentNode===null)return!1;K.parentNode.removeChild(K)}function U(K){if(typeof document>"u")return{update:function(){},remove:function(){}};var et=K.insertStyleElement(K);return{update:function(Q){X(et,K,Q)},remove:function(){H(et)}}}A.exports=U},464:A=>{function X(H,U){if(U.styleSheet)U.styleSheet.cssText=H;else{for(;U.firstChild;)U.removeChild(U.firstChild);U.appendChild(document.createTextNode(H))}}A.exports=X},810:A=>{var X=U=>{var K={};return xt.d(K,U),K},H=U=>()=>U;A.exports=Yt||(Yt=oe.t(d,2))}},De={};function xt(A){var X=De[A];if(X!==void 0)return X.exports;var H=De[A]={id:A,exports:{}};return ze[A](H,H.exports,xt),H.exports}xt.n=A=>{var X=A&&A.__esModule?()=>A.default:()=>A;return xt.d(X,{a:X}),X},xt.d=(A,X)=>{for(var H in X)xt.o(X,H)&&!xt.o(A,H)&&Object.defineProperty(A,H,{enumerable:!0,get:X[H]})},xt.o=(A,X)=>Object.prototype.hasOwnProperty.call(A,X),xt.nc=void 0;var I={};(()=>{xt.d(I,{rU:()=>Kr,cb:()=>uo,Bv:()=>Zr,yj:()=>Or,tv:()=>Re});var A=xt(810);const X=l=>Object.prototype.toString.call(l).slice(8,-1).toLowerCase(),H=l=>X(l)==="array",U=l=>X(l)==="object",K=l=>l?.$$typeof&&typeof l.$$typeof=="symbol"&&l.$$typeof.description==="react.element",et=l=>l?.__v_isVNode,Q=(l,f)=>Object.prototype.hasOwnProperty.call(l??{},f),ot=l=>{if(!H(l)&&!U(l))return l;const f=H(l)?[]:{};for(const w in l)if(Q(l,w)){const b=l[w];f[w]=K(b)||et(b)||typeof b!="object"?b:b!==l?ot(b):"cyclic"}else Object.setPrototypeOf(f,{[w]:l[w]});return f},bt=ot,vt=l=>X(l)==="function",Ot=l=>X(l)==="promise"||U(l)&&vt(l.then),Bt=(l,f=12e4,w="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Ot(l))return{};let b=null,x=null;return{promiseFn:new Promise((Y,G)=>{b=(q="canceled")=>{clearTimeout(x),Y({canceled:!0,errMsg:q})},f&&(f=typeof f!="number"?12e4:f,x=setTimeout(()=>b(w),f)),l.then(q=>{clearTimeout(x),Y({result:q,errMsg:!1})}).catch(q=>{clearTimeout(x),G(q)})}),cancelFn:b}},st=l=>l?l.charAt(l.length-1)==="/"?l.slice(0,-1):l:"";var St=xt(322);const Mt=(l,f)=>(0,St.jsx)("div",{dangerouslySetInnerHTML:{__html:l},...f}),Vt=l=>{const{error:f={},info:w=""}=l||{},{message:b,stack:x,errMsg:Y}=f;let G=Y||x||f.toString();G=`${G}
${w}`.replace(/\r|\n|\r\n/g,"<br/>"),G=G.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),G=G.replace(/\s/g,"&nbsp;");const q=b?.slice(0,120).split(". ").slice(0,2).join(". ");return(0,St.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Mt(G,{style:{color:"red"}}),q&&(0,St.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${q}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},E=l=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(l),Pt=()=>{const l={};return{on:(f,w)=>{l[f]||(l[f]=[]),l[f].indexOf(w)===-1&&l[f].push(w)},emit:(f,w)=>{l[f]&&l[f].map(b=>b(w))},off:(f,w=null)=>{if(l[f]){if(typeof w!="function")return delete l[f];const b=l[f].indexOf(w);b>-1&&(l[f].splice(b,1),l[f].length||delete l[f])}}}},Lt=l=>{const f={};for(let w in l)Q(l,w)||(f[w]=l[w]);return f},Kt=(l,f)=>{if(!U(l))return f;if(!U(f))return l;const w={...Lt(l),...Lt(f)},b={...l,...f};return Object.keys(w).map(x=>{Object.setPrototypeOf(b,{[x]:w[x]})}),b},ne=()=>{const{on:l,emit:f,off:w}=Pt(),b={};return{getState:x=>bt(b[x]),setState:(x,Y=!1)=>{if(typeof x=="function"&&(x=x(bt(b))),!U(x))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const G=bt(x);Object.keys(G).map(q=>{const M=b[q],R=G[q],kt=U(R)&&U(M)?Kt(M,R):R;!Y&&f(q,kt),b[q]=kt})},subscribe:(x,Y)=>(l(x,Y),()=>w(x,Y)),unsubscribe:w,clean:x=>{typeof x=="string"?b[x]=void 0:Array.isArray(x)?x.map(Y=>b[Y]=void 0):Object.keys(b).map(Y=>b[Y]=void 0)}}},W=l=>(f,w)=>{const[b,x]=(0,A.useState)(()=>{const M=l?.getState(f);return M!==void 0?M:(w!==void 0&&l?.setState({[f]:w},!0),w)}),Y=(0,A.useCallback)(M=>l?.setState({[f]:typeof M=="function"?M(l?.getState(f)):M}),[]),G=(0,A.useCallback)(M=>l?.subscribe(f,M),[]),q=(0,A.useCallback)((M=M)=>l?.clean(M),[]);return(0,A.useEffect)(()=>{l?.subscribe(f,M=>x(M))},[]),[b,Y,G,q]},at=ne(),ct=W(at),s=Pt(),F=Pt(),m="push-emitter",O="replace-emitter",S="useRoute-emitter",T={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},z="/404",N={getState:()=>history.state,go:l=>history.go(l),forward:()=>history.forward(),back:()=>history.back()},Z=(l,f,w,b,x=[])=>{const Y=M=>{for(let R=0,kt=M.length;R<kt;R++){const zt=M[R],It=zt[b].split("?")[0];if(new RegExp("^"+It.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return zt;if(H(zt[w])){const gt=Y(zt[w]);if(gt)return gt}}},G=Y(l);if(!G)return z;const{redirect:q}=G;return q?E(q)?q:x.includes(q)?x:(x.push(q),Z(l,q.split("?")[0],w,b,x)):x[x.length-1]},Et=(l,f,w,b,x)=>{if(!H(l))return null;const Y=kt=>{const zt=kt.split("/"),It=f.split("/"),gt={};return zt.map((_t,Dt)=>_t.indexOf(":")===0&&(gt[_t.slice(1)]=It[Dt])),gt},G=(kt,zt)=>{const It=[],gt=zt.split("/:")[0];for(let _t=0,Dt=kt.length;_t<Dt;_t++){const ft=kt[_t];if(ft[x]===gt){ft.active=!0;const{name:it,title:Wt,icon:Jt,params:le}=ft;It.push({name:it,title:Wt,icon:Jt,params:le,[x]:gt})}else if(zt.indexOf(`${ft[x]}/`)===0){ft.active=!0;const it=Y(ft[x]),Wt=Object.keys(it).map(we=>it[we]).join("/"),{name:Jt,title:le,icon:de}=ft,Se=Wt?`${gt}/${Wt}`:ft[x];It.push({name:Jt,title:le,icon:de,[x]:Se,params:{...ft.params,...it}})}else if(ft[x]===zt){ft.active=!0;const it=Y(ft[x]),{[b]:Wt,...Jt}=ft;It.push({...Jt,[x]:f,params:{...Jt.params,...w,...it}})}}return It},q=(kt,zt)=>{for(let It=0,gt=kt.length;It<gt;It++){const _t=kt[It];if(zt.indexOf(`${_t[x]}/`)===0){_t.active=!0;return}}},M=kt=>{for(let zt=0,It=kt.length;zt<It;zt++){const gt=kt[zt],_t=(gt[x]||"").split("?")[0];if(_t===f){gt.hideMenu&&q(kt,gt.parentPath||_t),gt.active=!0;const{[b]:Dt,...ft}=gt;return[{...ft,params:{...ft.params,...w}}]}if(new RegExp("^"+_t.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return G(kt,_t);if(H(gt[b])){const Dt=M(gt[b]);if(Dt){gt.active=!0,gt.open=!0;const{[b]:ft,...it}=gt;return[it,...Dt]}}}},R=M(l)||[];return{result:l,current:R}},Ct=(l,f,w)=>l.filter(b=>b.hideMenu||b[w].indexOf("/:")>-1?!1:(H(b[f])&&(b[f]=Ct(b[f],f,w)),!0)),At=(l,f,w,b="children",x="path")=>{const Y=Z(l,f,b,x);if(Y)return{redirect:Y};const{result:G,current:q}=Et(l,f,w,b,x),M=Ct(G,b,x);return{current:q,menu:M}},lt=(l,f)=>{const w=["#/","/"],b=w[!!f-0];if(!l||w.includes(l))return b;const x=l.charAt(l.length-1)==="/"?l.slice(0,-1):l;return f||x.indexOf("#/")>-1?x:`#${x}`},Ft=(l,f,w,b=!1)=>{const x=lt(f,w);return b?x:w?l&&x==="/"?l:`${l}${x}`:l?`${l}/${x}`:x},Rt=(l,f,w,b,x,Y)=>{if(!H(l))return l;const G=(q,M="")=>q.filter(R=>!R.denied).map(R=>{if(!Y&&!R.exact&&!E(R[b])){(!R[b]||R[b]==="javascript:;")&&(R[b]="");const kt=R[b].charAt(0)==="/"&&M.charAt(M.length-1)==="/"?R[b].slice(1):R[b].charAt(0)!=="/"&&M.charAt(M.length-1)!=="/"?`/${R[b]}`:R[b];R[b]=M?M+kt:Ft(x,kt,f)}return R.redirect&&!E(R.redirect)&&(R.redirect=Ft(x,R.redirect,f)),H(R[w])&&(R[w]=G(R[w],R[b]),!R.redirect&&R[w].length&&(R.redirect=R[w][0][b])),R});return G(l)},ae=l=>{if(!U(l))return"";const f=[];return Object.keys(l).map((w,b)=>{const x=b>0?"&":"?";f.push(`${x}${w}=${l[w]}`)}),f.join("")},Ut=(l="")=>{const[f,w]=l.split("?");if(w){const b={};return w.split("&").map(x=>{const[Y,G]=x.split("=");b[Y]=G}),{path:f,params:b}}return{path:f}},Sr=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},B=(l,f)=>{for(let w=l.length-1,b;b=l[w--];){const{title:x,name:Y}=b;if(typeof x=="string"&&x.length)return document.title=x;if((x==null||x===!0)&&Y)return document.title=f?`${Y}-${f}`:Y;if(f)return document.title=f}},Qe=l=>{const{pathname:f,search:w,hash:b}=location;if(l){const q=lt(f,l),M=decodeURIComponent(`${q}${w}`),{params:R}=Ut(M);return{path:M,params:R}}const x=decodeURIComponent(lt(b,l)),{params:Y}=Ut(x),G=st(f);return{path:G?`${G}/${x}`:x,params:Y}},Ue=(l,f,w)=>{typeof l=="function"&&l({...f,stay:new Date-w})},Fr=(l,f,w,b)=>{let x=typeof l=="string"?l:l.path??"";const Y=ae(l.query);E(x)||(x=Ft(w,x,b,l.exact)),window?.open(`${x}${Y}`,f)},yr=(l,f,w,b)=>{if(l.target||E(l.path)){Fr(l,l.target,f,w);return}let x,Y,G;if(typeof l=="string")x=l;else if(U(l))x=l.path,Y=l.params,G=l.query;else return;!x||x==="."||x==="./"?x=b:x.indexOf("./")===0?x=`${b.split("?")[0]}${x.replace("./","/")}`:x.indexOf("../")===0&&(x=`${b.split("?")[0].split("/").slice(0,-1).join("/")}${x.replace("../","/")}`),x=Ft(f,x,w,l?.exact);const q=Ut(x);x=q.path;const M={...q.params,...G},R=ae(M);return x=`${x}${R}`,Y={...Y,...M},x===b?!1:{path:x,params:Y}},tr=(l,f)=>{const w=l.split(f);return w.length>1?["","/"].includes(w[1].slice(0,1)):!1},gr=Pt(),br=l=>{const{on:f,emit:w,off:b}=gr;return{on:x=>f(l,x),emit:x=>w(l,x),off:x=>b(l,x)}},er=l=>(f,w)=>{const{getState:b,setState:x,subscribe:Y,unsubscribe:G,clean:q}=l;return w!==void 0&&x({[f]:w},!0),{getState:()=>b(f),setState:(M,R)=>x({[f]:M},R),subscribe:M=>Y(f,M),unsubscribe:()=>G(f),clean:()=>q(f)}},rr=ne(),he=er(rr),Oe=br("push-emitter"),or=br("replace-emitter"),ie=he("route-store"),vr=Pt(),Pe=ne(),ce=W(Pe),Xe=()=>![typeof window,typeof document].includes("undefined"),Yr=l=>{if(!Xe())return;const f=document.createElement("div");return f.innerHTML=l,f.children[0]};var wr=Object.defineProperty,Nr=(l,f,w)=>f in l?wr(l,f,{enumerable:!0,configurable:!0,writable:!0,value:w}):l[f]=w,kr=(l,f,w)=>(Nr(l,typeof f!="symbol"?f+"":f,w),w);class nr extends A.default.Component{constructor(){super(...arguments),kr(this,"state",{error:null})}static getDerivedStateFromError(f){return{error:f}}componentDidCatch(f,w){const{errorReport:b}=this.props;typeof b=="function"&&b({error:f,info:w.componentStack})}render(){const{error:f}=this.state,{fallback:w,children:b}=this.props;return f?w(f):b}}const fe=({children:l,report:f})=>{const w=(0,A.useRef)();return w.current?.state&&(w.current.state.error=null),(0,St.jsx)(nr,{ref:w,fallback:(b,x)=>Vt({error:b,info:x}),errorReport:f,children:l})};var Xr=xt(62),pe=xt.n(Xr),Tr=xt(36),ue=xt.n(Tr),Dr=xt(793),ar=xt.n(Dr),qr=xt(892),Ae=xt.n(qr),Ie=xt(173),ir=xt.n(Ie),Mr=xt(464),lr=xt.n(Mr),Be=xt(990),c={};c.styleTagTransform=lr(),c.setAttributes=Ae(),c.insert=ar().bind(null,"head"),c.domAPI=ue(),c.insertStyleElement=ir();var g=pe()(Be.Z,c);const v=Be.Z&&Be.Z.locals?Be.Z.locals:void 0,$=({global:l,absolute:f})=>(0,St.jsx)("div",{className:`spinner${l?" global":""}${f?" absolute":""}`,children:(0,St.jsx)("figure",{className:"spinning"})}),D=()=>{const l=(0,A.useRef)([]);return(0,A.useEffect)(()=>()=>{l.current.map(f=>f.cancelFn()),l.current=[]},[]),{cancelablePromise:(0,A.useCallback)((f,w=!0)=>{const b=Bt(f,w);return l.current.indexOf(b)===-1&&l.current.push(b),b.promiseFn},[])}},J=(l={})=>{const{cancelablePromise:f}=D(),[w,b]=(0,A.useState)(l),x=(0,A.useRef)({}),Y=(0,A.useRef)({}),G=(0,A.useCallback)((M=null)=>{Array.isArray(M)&&M.length?M.map(R=>x.current[R]=l[R]):x.current=l},[]),q=(0,A.useCallback)((M,R,kt=!1)=>{const zt=Object.keys(M),It=JSON.stringify(zt.sort());if(!Y.current[It]){Y.current[It]=!0,kt&&G(Array.isArray(kt)?kt:zt),zt.map(gt=>{x.current[gt]||(x.current[gt]={}),x.current[gt].pending=!0}),b({...x.current});for(let gt=0,_t=zt.length;gt<_t;gt++){const Dt=zt[gt];f(M[Dt]).then(ft=>{let{result:it,errMsg:Wt}=ft;gt===_t-1&&(Y.current[It]=!1),typeof R=="function"&&(it=R(it)||it),x.current[Dt]={...it,pending:!1},Wt===!1&&b({...x.current})}).catch(ft=>{throw gt===_t-1&&(Y.current[It]=!1),x.current[Dt]={error:ft,pending:!1},b({...x.current}),ft})}}},[]);return[w,q,G]},ht=l=>Object.keys(l).length,wt=l=>{const{Comp:f,restResolve:w,loadPromise:b,params:x,children:Y}=l,[G,q]=J(),[M,R]=J();return(0,A.useEffect)(()=>{ht(w)&&q(w),ht(b)&&R(b)},[w,b]),(0,A.useEffect)(()=>{const kt=ht(G);kt&&kt===ht(w)&&x.store.setState(G)},[G]),(0,St.jsx)(f,{...x,...G,...M,children:Y})},rt=l=>l===!1?null:K(l)?l:vt(l)?(0,St.jsx)(l,{}):(0,St.jsx)($,{}),Gt=({Loading:l,ErrorBoundary:f,loadedComp:w})=>{const b=(0,St.jsx)(A.Suspense,{fallback:rt(l),children:w});return f===!1?b:vt(f)?(0,St.jsx)(f,{children:b}):(0,St.jsx)(fe,{children:b})},se=({Comp:l,routerProps:f,children:w})=>{const{params:b,...x}=f,{loading:Y,errorBoundary:G,...q}=b,M=(0,St.jsx)(wt,{Comp:l,...x,params:q,children:w});return Gt({Loading:Y,ErrorBoundary:G,loadedComp:M})},$e={},Le=(l,f,w,b)=>Ot(w)?w.then(x=>se({Comp:l,routerProps:f,children:x.default??x})):se({Comp:l,routerProps:f,children:w}),ve=(l,f,w)=>{const b={},x={};return U(l)?(Object.keys(l).map(Y=>{const G=f.getState(Y);G==null?x[Y]=l[Y](w):b[Y]=G}),{cachedResolve:b,restResolve:x}):{cachedResolve:b,restResolve:x}},sr=(l,f)=>{if(!U(l))return{};const w={};return Object.keys(l).map(b=>w[b]=l[b](f)),w},Cr=l=>{const{current:f,menu:w,...b}=l,x=f.map(q=>{const{component:M,resolve:R,loadData:kt,loading:zt,errorBoundary:It,icon:gt,..._t}=q;return _t}),Y=[...f].filter(q=>q.component),G=(q=0)=>{if(!Y.length)return null;const M=Y.shift(),{component:R,resolve:kt,loadData:zt,icon:It,key:gt,..._t}=M;if(typeof R=="function"||Ot(R)){const Dt=_t.path;let ft=$e[Dt];const{cachedResolve:it,restResolve:Wt}=ve(kt,b.store,_t),Jt={loadPromise:sr(zt,_t),restResolve:Wt,params:{current:x,...b,..._t,...it}},le=G(q+1);if(ft)return Le(ft,Jt,le,Dt);try{ft=R(),ft=K(ft)?R:ft}catch{ft=R}return Ot(ft)?ft.then(de=>(ft=de.default??de,$e[Dt]=ft,Le(ft,Jt,le,Dt))):($e[Dt]=ft,Le(ft,Jt,le,Dt))}return typeof R=="string"?Yr(R):R};return G()},Re=l=>{const[f,w]=(0,A.useState)(l),[b,x]=(0,A.useState)(),[Y,G]=(0,A.useState)(),q=(0,A.useRef)(),M=(0,A.useRef)(),R=(0,A.useRef)(),kt=(0,A.useRef)(),zt=()=>{typeof q.current=="function"&&(q.current({cancel:T.cancelMsg}),q.current=null)},It=(0,A.useCallback)(it=>{typeof it=="function"?w(Wt=>({...Wt,...it(Wt)})):U(it)&&w(Wt=>({...Wt,...it}))},[]),gt=(it,Wt="pushState")=>{const{basepath:Jt,browserRouter:le}=kt.current,de=R.current,Se=yr(it,Jt,le,de);if(!Se)return;const{path:we,params:Fe}=Se;ft({inputPath:we,inputParams:Fe},()=>history[Wt](it?.state,"",we))},_t=(0,A.useCallback)(it=>gt(it),[]),Dt=(0,A.useCallback)(it=>gt(it,"replaceState"),[]),ft=(0,A.useCallback)(({inputPath:it="",inputParams:Wt={}},Jt)=>{const le=+new Date,{browserRouter:de,childKey:Se,idKey:we,title:Fe,routers:me,beforeRender:Pr,afterRender:Ge,basepath:Er,allowedNotFound:xe,...ho}=kt.current;if(!it){const{path:ye,params:ke}=Qe(de);it=ye,Wt={...Wt,...ke}}const ur=R.current;new Promise((ye,ke)=>{me?.length||ke("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),it!==R.current&&typeof Pr=="function"?Pr({path:it,params:Wt,prevPath:ur},ye,ke):ye()}).then(ye=>{if(ye===!1)return;const ke=ye?.path;if(ke&&Ft(Er,ke,de)!==it){Dt(ye);return}M.current=M.current??it;const{redirect:He,current:Ye,menu:fo}=At(bt(me),it.split("?")[0],Wt,Se,we);if(He){if(xe&&He===z&&(typeof xe=="boolean"||typeof xe=="string"&&tr(M.current,xe)||H(xe)&&xe.find(ge=>tr(M.current,ge))))return;if(H(He)){console.error(`\u522B\u95F9\uFF0C[${[it,...He].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return He===z?Dt({path:He}):_t({path:He,exact:!0})}Jt?.(),it?.split("?")[0]!==R.current?.split("?")[0]&&Sr(),B(Ye,Fe);const dr={eventBus:vr,store:Pe,useStore:ce,...ho,updateRouter:It,emitRouter:ie.subscribe,router:{push:_t,replace:Dt},current:Ye,menu:fo,inputPath:M.current,prevPath:ur,browserRouter:de,basepath:Er,title:Fe,history:{...N,goBack:ge=>_t({...ge,path:ur})}};ie.setState(dr);const Ar=Cr(dr);if(R.current=it,M.current=null,zt(),Ot(Ar)){const{promiseFn:ge,cancelFn:Gr}=Bt(Ar,{delay:T.delay,msg:{timeout:T.timeoutMsg}});return q.current=Gr,G(!0),ge.then(Me=>{q.current=null;const{result:Ne,errMsg:Jr}=Me,be=Jr===!1?Ne:Jr?.timeout?Vt({error:{errMsg:`${it} ${Jr.timeout}`}}):null;be&&(G(!1),Ue(Ge,Ye.slice(-1)[0],le),x(be))}).catch(Me=>{throw q.current=null,G(!1),Ue(Ge,Ye.slice(-1)[0],le),x(Vt({error:Me})),Me})}Ue(Ge,Ye.slice(-1)[0],le),x(Ar)}).catch(ye=>{throw x(Vt({error:ye})),ye})},[]);return(0,A.useEffect)(()=>{const{childKey:it="children",idKey:Wt="path",browserRouter:Jt=!1,routers:le=[],basepath:de="",exact:Se=!1,inputPath:we="",inputParams:Fe={},...me}=f,Pr=st(de),Ge=Rt(bt(le),Jt,it,Wt,Pr,Se);kt.current={...me,childKey:it,idKey:Wt,browserRouter:Jt,routers:Ge,basepath:Pr};const Er=Jt?"popstate":"hashchange",xe=()=>ft({});return ft({inputPath:we,inputParams:Fe}),Oe.on(_t),or.on(Dt),window.addEventListener(Er,xe,!1),()=>{zt(),Oe.off(_t),or.off(Dt),window.removeEventListener(Er,xe,!1)}},[f]),{updateRouter:It,output:b,loading:Y}},qe=l=>{const{to:f,onClick:w,preventDefault:b,stopPropagation:x=!0,exact:Y=!0,target:G,...q}=l,M=()=>{const R=typeof f=="string"?{exact:Y,path:f}:{exact:Y,...f};Oe.emit(R)};return R=>{if(R.preventDefault(),x&&R.stopPropagation(),!q?.disabled){if(!b){if(G){const{browserRouter:kt,basepath:zt}=ie.getState();Fr(f,G,zt,kt);return}M()}typeof w=="function"&&w()}}};var _e=xt(267),cr={};cr.styleTagTransform=lr(),cr.setAttributes=Ae(),cr.insert=ar().bind(null,"head"),cr.domAPI=ue(),cr.insertStyleElement=ir();var co=pe()(_e.Z,cr);const We=_e.Z&&_e.Z.locals?_e.Z.locals:void 0,Ke=l=>{if(!l)return We.link;const f=l.trim().split(" ").filter(Boolean),w=f.find(b=>b==="active")?[We.active]:[];return[We.link,...w,...f].join(" ")},Kr=l=>{const{to:f,onClick:w,preventDefault:b,stopPropagation:x,exact:Y,target:G,className:q,...M}=l;return(0,St.jsx)("span",{onClick:qe(l),className:Ke(q),...M})},Or=()=>{const[l,f]=(0,A.useState)(ie.getState());return(0,A.useEffect)(()=>ie.subscribe(w=>f(w)),[]),l},Zr=ie.getState,uo=ie.subscribe})();var dt=I.rU,jt=I.cb,Hr=I.Bv,Zt=I.yj,qt=I.tv},8124:function(Wr,$t,oe){var Yt;oe.d($t,{Nr:function(){return A},PQ:function(){return St},Vd:function(){return qt},Wy:function(){return H},fH:function(){return dt},rf:function(){return Mt},xd:function(){return Vt}});var d=oe(7378),ze={837:(E,Pt,Lt)=>{var Kt,ne=Lt(810),W=Symbol.for("react.element"),at=Symbol.for("react.fragment"),ct=Object.prototype.hasOwnProperty,s=ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F={key:!0,ref:!0,__self:!0,__source:!0};function m(O,S,T){var z,N={},Z=null,Et=null;T!==void 0&&(Z=""+T),S.key!==void 0&&(Z=""+S.key),S.ref!==void 0&&(Et=S.ref);for(z in S)ct.call(S,z)&&!F.hasOwnProperty(z)&&(N[z]=S[z]);if(O&&O.defaultProps)for(z in S=O.defaultProps,S)N[z]===void 0&&(N[z]=S[z]);return{$$typeof:W,type:O,key:Z,ref:Et,props:N,_owner:s.current}}Kt=at,Pt.jsx=m,Kt=m},322:(E,Pt,Lt)=>{E.exports=Lt(837)},810:E=>{var Pt=Kt=>{var ne={};return xt.d(ne,Kt),ne},Lt=Kt=>()=>Kt;E.exports=Yt||(Yt=oe.t(d,2))}},De={};function xt(E){var Pt=De[E];if(Pt!==void 0)return Pt.exports;var Lt=De[E]={exports:{}};return ze[E](Lt,Lt.exports,xt),Lt.exports}xt.d=(E,Pt)=>{for(var Lt in Pt)xt.o(Pt,Lt)&&!xt.o(E,Lt)&&Object.defineProperty(E,Lt,{enumerable:!0,get:Pt[Lt]})},xt.o=(E,Pt)=>Object.prototype.hasOwnProperty.call(E,Pt);var I={};(()=>{xt.d(I,{fH:()=>Pt,r5:()=>s,Nd:()=>S,KY:()=>ct,Vd:()=>N,Nr:()=>Et,D:()=>lt,Wy:()=>Ue,zX:()=>Fr,Cd:()=>Ct,Yz:()=>yr,D9:()=>tr,cb:()=>Qe,vO:()=>br,Rx:()=>Nr,OH:()=>kr,oR:()=>Tr,rE:()=>ir,PQ:()=>lr,rf:()=>At,xd:()=>Be});var E=xt(810);const Pt=c=>(g,v)=>{const[$,D]=(0,E.useState)(()=>{const rt=c?.getState(g);return rt!==void 0?rt:(v!==void 0&&c?.setState({[g]:v},!0),v)}),J=(0,E.useCallback)(rt=>c?.setState({[g]:typeof rt=="function"?rt(c?.getState(g)):rt}),[]),ht=(0,E.useCallback)(rt=>c?.subscribe(g,rt),[]),wt=(0,E.useCallback)((rt=rt)=>c?.clean(rt),[]);return(0,E.useEffect)(()=>{c?.subscribe(g,rt=>D(rt))},[]),[$,J,ht,wt]},Lt=c=>Object.prototype.toString.call(c).slice(8,-1).toLowerCase(),Kt=c=>Lt(c)==="object",ne=c=>Lt(c)==="function",W=c=>Lt(c)==="promise"||Kt(c)&&ne(c.then),at=(c,g=12e4,v="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!W(c))return{};let $=null,D=null;return{promiseFn:new Promise((J,ht)=>{$=(wt="canceled")=>{clearTimeout(D),J({canceled:!0,errMsg:wt})},g&&(g=typeof g!="number"?12e4:g,D=setTimeout(()=>$(v),g)),c.then(wt=>{clearTimeout(D),J({result:wt,errMsg:!1})}).catch(wt=>{clearTimeout(D),ht(wt)})}),cancelFn:$}},ct=()=>{const c=(0,E.useRef)([]);return(0,E.useEffect)(()=>()=>{c.current.map(g=>g.cancelFn()),c.current=[]},[]),{cancelablePromise:(0,E.useCallback)((g,v=!0)=>{const $=at(g,v);return c.current.indexOf($)===-1&&c.current.push($),$.promiseFn},[])}},s=(c={})=>{const{cancelablePromise:g}=ct(),[v,$]=(0,E.useState)(c),D=(0,E.useRef)({}),J=(0,E.useRef)({}),ht=(0,E.useCallback)((rt=null)=>{Array.isArray(rt)&&rt.length?rt.map(Gt=>D.current[Gt]=c[Gt]):D.current=c},[]),wt=(0,E.useCallback)((rt,Gt,se=!1)=>{const $e=Object.keys(rt),Le=JSON.stringify($e.sort());if(!J.current[Le]){J.current[Le]=!0,se&&ht(Array.isArray(se)?se:$e),$e.map(ve=>{D.current[ve]||(D.current[ve]={}),D.current[ve].pending=!0}),$({...D.current});for(let ve=0,sr=$e.length;ve<sr;ve++){const Cr=$e[ve];g(rt[Cr]).then(Re=>{let{result:qe,errMsg:_e}=Re;ve===sr-1&&(J.current[Le]=!1),typeof Gt=="function"&&(qe=Gt(qe)||qe),D.current[Cr]={...qe,pending:!1},_e===!1&&$({...D.current})}).catch(Re=>{throw ve===sr-1&&(J.current[Le]=!1),D.current[Cr]={error:Re,pending:!1},$({...D.current}),Re})}}},[]);return[v,wt,ht]},F=c=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(c),m=c=>new Promise((g,v)=>{const $=new FileReader;$.readAsDataURL(c),$.addEventListener("load",()=>g($.result)),$.addEventListener("error",D=>v(D))}),O=async c=>{if(!F(c))return c;const g=await(await fetch(decodeURIComponent(c))).blob();return await m(g)},S=c=>{const[g,v]=(0,E.useState)(c);return(0,E.useEffect)(()=>{(async $=>{const D=await O($);v(D)})(c)},[c]),g},T=(c,g)=>Object.prototype.hasOwnProperty.call(c??{},g),z=c=>T(c,"current"),N=(c,g,v="click")=>{(0,E.useEffect)(()=>{const $=J=>{const ht=z(c)?c.current:c;ht?.contains&&!ht.contains(J.target)&&g(J)},D=typeof v=="string"?[v]:v;return D.map(J=>{document.addEventListener(J,$,!1)}),()=>{D.map(J=>{document.removeEventListener(J,$,!1)})}},[c,g,v])},Z=(c=()=>{},g=60)=>{let v=null;return function(...$){clearTimeout(v),v=setTimeout(()=>c.apply(this,$),g)}},Et=(c,g=60)=>(0,E.useMemo)(()=>Z(c,g),[g]),Ct=()=>{const c=(0,E.useRef)(!0);return c.current?(c.current=!1,!0):!1},At=(c,g=[])=>{const v=Ct();(0,E.useEffect)(()=>{if(!v)return c()},g)},lt=(c,g=450)=>{const[v,$]=(0,E.useState)(c);return At(()=>{let D;return c||g===0?$(c):D=setTimeout(()=>$(c),g),()=>D&&clearTimeout(D)},[c]),[v,$]},Ft=()=>![typeof window,typeof document].includes("undefined"),Rt=c=>Lt(c).indexOf("element")>-1,ae=(c=null)=>Ft()?Rt(c)?{width:c.clientWidth,height:c.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Ut=(c,g)=>{const v=[],$=c.children??[];for(let D=0,J=$.length;D<J;D++){const ht=$[D];ht.className.indexOf(g)>-1&&v.push(ht)}return v.length===0?null:v.length===1?v[0]:v},Sr=(c,g)=>{getComputedStyle(c).position==="static"&&(c.style.position="relative");const v=document.createElement("object");return v.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),v.setAttribute("class","resize-sensor"),v.onload=()=>{v.contentDocument.defaultView.addEventListener("resize",g,!1),g()},v.type="text/html",c.appendChild(v),v.data="about:blank",v},B=(c,g=60)=>{if(!Ft())return;c=z(c)?c.current:c??document.body;let v=Ut(c,"resize-sensor"),$=[];const D=Z(()=>$.map(rt=>rt(c)),g),J=rt=>{Ut(c,"resize-sensor")||(v=Sr(c,D)),$.indexOf(rt)===-1&&$.push(rt)},ht=rt=>{const Gt=$.indexOf(rt);Gt!==-1&&$.splice(Gt,1),$.length===0&&v&&wt()},wt=()=>{v&&v.parentNode&&(v.contentDocument&&v.contentDocument.defaultView.removeEventListener("resize",D,!1),v.parentNode.removeChild(v),v=void 0,$=[])};return{element:c,bind:J,unbind:ht,destroy:wt}},Qe=(c={})=>{const g=(0,E.useRef)(0),[v,$]=(0,E.useState)(c),D=(0,E.useCallback)(J=>{cancelAnimationFrame(g.current),g.current=requestAnimationFrame(()=>$(J))},[]);return(0,E.useEffect)(()=>()=>cancelAnimationFrame(g.current),[]),[v,D]},Ue=(c=null,g=60)=>{const v=z(c)?c.current:c,{bind:$,destroy:D}=B(v,g),[J,ht]=Qe(ae(v));return(0,E.useEffect)(()=>($(()=>v&&ht(ae(v))),()=>D()),[v]),J},Fr=c=>{const g=(0,E.useRef)(null);return(0,E.useLayoutEffect)(()=>{g.current=c}),(0,E.useCallback)(g.current,[])},yr=(c,g)=>{const v=(0,E.useRef)();(0,E.useEffect)(()=>{v.current=c},[c]),(0,E.useEffect)(()=>{if(g){const $=setInterval(()=>v.current(),g);return()=>clearInterval($)}},[g])},tr=c=>{const g=(0,E.useRef)();return(0,E.useEffect)(()=>{g.current=c},[c]),g.current},gr=(c=null)=>Ft()?Rt(c)?{left:c.scrollLeft,top:c.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0},br=(c=null)=>{const[g,v]=Qe(gr(c));return(0,E.useEffect)(()=>{const $=()=>v(gr(c)),D=Rt(c)?c:window;return D.addEventListener("scroll",$,{capture:!1,passive:!0}),()=>D.removeEventListener("scroll",$)},[c]),g},er=c=>Lt(c)==="array",rr=c=>er(c)&&!!c.length,he=(c,g,v=[],$=!1,D=null)=>rr(c)?g?(v=typeof v=="string"?v.split(","):v,c.filter(J=>(v=v.length>0?v:Object.keys(J),v.filter(ht=>{const wt=J[ht];if(wt==null)return!1;if($)return wt===g;const rt=new RegExp(g,"gi"),Gt=wt.toString().match(rt);return Gt&&D&&(J[ht]=D(wt.toString().replace(rt,`<span style="background-color:yellow">${Gt[0]}</span>`),{display:"inline-block"})),Gt}).length))):c:[],Oe=(c,g="id")=>{if(!rr(c))return c;const v=[],$=[];return c.map(D=>{const J=Kt(D)?D[g]:D;$.includes(J)||($.push(J),v.push(D))}),v},or=c=>c?.$$typeof&&typeof c.$$typeof=="symbol"&&c.$$typeof.description==="react.element",ie=c=>c?.__v_isVNode,vr=c=>{if(!er(c)&&!Kt(c))return c;const g=er(c)?[]:{};for(const v in c)if(T(c,v)){const $=c[v];g[v]=or($)||ie($)||typeof $!="object"?$:$!==c?vr($):"cyclic"}else Object.setPrototypeOf(g,{[v]:c[v]});return g},Pe=vr,ce=c=>(g,v="children")=>{if(!Array.isArray(g))return g;const $=Pe(g),D=J=>{const ht=[];return J.map(wt=>{if(rr(wt[v])){const rt=D(wt[v])||[];wt[v]=rt,rt.length>0&&ht.push(wt)}}),c(J,ht)};return D($)},Xe=(c,g,v,$="name",D="id",J="children",ht=!1)=>ce((wt,rt)=>Oe([...he(wt,g,$,ht,v),...rt],D))(c,J);var Yr=xt(322);const wr=(c,g)=>(0,Yr.jsx)("div",{dangerouslySetInnerHTML:{__html:c},...g}),Nr=(c=null,g=wr)=>{const[v,$]=(0,E.useState)(c),D=(0,E.useCallback)((...J)=>{const[ht,wt,...rt]=J;if(!wt)$(null);else{J=[ht,wt,g,...rt];const Gt=Xe(...J);$(Gt)}},[]);return[v,D]},kr=c=>{const[g,v]=(0,E.useState)(c);return(0,E.useEffect)(()=>v(c),[c]),[g,v]},nr=()=>{const c={};return{on:(g,v)=>{c[g]||(c[g]=[]),c[g].indexOf(v)===-1&&c[g].push(v)},emit:(g,v)=>{c[g]&&c[g].map($=>$(v))},off:(g,v=null)=>{if(c[g]){if(typeof v!="function")return delete c[g];const $=c[g].indexOf(v);$>-1&&(c[g].splice($,1),c[g].length||delete c[g])}}}},fe=c=>{const g={};for(let v in c)T(c,v)||(g[v]=c[v]);return g},Xr=(c,g)=>{if(!Kt(c))return g;if(!Kt(g))return c;const v={...fe(c),...fe(g)},$={...c,...g};return Object.keys(v).map(D=>{Object.setPrototypeOf($,{[D]:v[D]})}),$},pe=(()=>{const{on:c,emit:g,off:v}=nr(),$={};return{getState:D=>Pe($[D]),setState:(D,J=!1)=>{if(typeof D=="function"&&(D=D(Pe($))),!Kt(D))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const ht=Pe(D);Object.keys(ht).map(wt=>{const rt=$[wt],Gt=ht[wt],se=Kt(Gt)&&Kt(rt)?Xr(rt,Gt):Gt;!J&&g(wt,se),$[wt]=se})},subscribe:(D,J)=>(c(D,J),()=>v(D,J)),unsubscribe:v,clean:D=>{typeof D=="string"?$[D]=void 0:Array.isArray(D)?D.map(J=>$[J]=void 0):Object.keys($).map(J=>$[J]=void 0)}}})(),Tr=Pt(pe),ue=c=>c<10?"0"+c:c,Dr=(c=new Date)=>{const g=new Date(c),v=g.getFullYear(),$=g.getDay(),D=ue(g.getMonth()+1),J=ue(g.getDate()),ht=ue(g.getHours()),wt=ue(g.getMinutes()),rt=ue(g.getSeconds());return[v,D,J,ht,wt,rt,$]},ar=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],qr=(c,g,v="-")=>c.replace(new RegExp(v,"g"),g),Ae=(c=new Date,g=["-","-"," ",":",":",""],v=ar)=>{const $=Dr(c);let D="";return g.map((J,ht)=>D+=(ht===6?v[$[ht]]:$[ht]??"")+J),D},Ie=()=>Ae(new Date,["-","-"," ",":",":"," ",""]),ir=()=>{const[c,g]=(0,E.useState)("");return yr(()=>{g(Ie())},1e3),[c]},Mr=c=>++c,lr=()=>{const[,c]=(0,E.useState)(0);return(0,E.useCallback)(()=>c(Mr),[])},Be=()=>{const[c,g]=Qe(ae());return(0,E.useEffect)(()=>{const v=()=>g(ae());return window.addEventListener("resize",v,!1),()=>window.removeEventListener("resize",v,!1)},[]),c}})();var dt=I.fH,jt=I.r5,Hr=I.Nd,Zt=I.KY,qt=I.Vd,A=I.Nr,X=I.D,H=I.Wy,U=I.zX,K=I.Cd,et=I.Yz,Q=I.D9,ot=I.cb,bt=I.vO,vt=I.Rx,Ot=I.OH,Bt=I.oR,st=I.rE,St=I.PQ,Mt=I.rf,Vt=I.xd},1090:function(Wr,$t,oe){oe.d($t,{A_F:function(){return ii},JaC:function(){return Ma},MTn:function(){return Xa},NA2:function(){return ei},PTJ:function(){return Qa},Vcq:function(){return si},_O2:function(){return ui},_iG:function(){return qa},afD:function(){return Ja},azd:function(){return ci},eyl:function(){return ti},f9u:function(){return hi},fHt:function(){return Ua},gVz:function(){return ai},jg2:function(){return ni},k$y:function(){return di},mrB:function(){return Ga},muM:function(){return Za},qg7:function(){return Ka},rWO:function(){return ri},tOc:function(){return li},vQq:function(){return Va},ywV:function(){return oi}});var Yt={};(function(){Yt.d=function(t,e){for(var r in e)Yt.o(e,r)&&!Yt.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}})(),function(){Yt.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}();var d={};Yt.d(d,{NzM:function(){return De},wBC:function(){return A},O39:function(){return H},cnu:function(){return Q},E4D:function(){return bt},TRp:function(){return Ot},zI1:function(){return st},Ufj:function(){return Mt},GxO:function(){return Lt},cu2:function(){return ne},BcS:function(){return at},lPd:function(){return Z},dC1:function(){return Ct},$L2:function(){return lt},Vji:function(){return s},YxP:function(){return z},UhT:function(){return rr},JaC:function(){return Oe},o4B:function(){return Pe},Hlr:function(){return ar},muM:function(){return D},OiV:function(){return pe},KTn:function(){return ht},lwL:function(){return rt},d9v:function(){return v},yCD:function(){return se},qCK:function(){return Le},vQq:function(){return sr},fHt:function(){return Re},azq:function(){return co},dSY:function(){return w},MTn:function(){return R},RYO:function(){return _e},WAo:function(){return zt},GVc:function(){return Ae},Emy:function(){return gt},v9O:function(){return Dt},DsO:function(){return it},_lj:function(){return Jt},vO6:function(){return de},xDX:function(){return ur},hf3:function(){return Qr},ip7:function(){return jr},uYe:function(){return x},DgJ:function(){return ir},rae:function(){return zr},YBu:function(){return ko},_iG:function(){return Eo},hXT:function(){return po},gQq:function(){return zo},D_D:function(){return oo},$nD:function(){return $o},dtG:function(){return mo},Y0R:function(){return Ur},qg7:function(){return qo},Xxf:function(){return _o},tSM:function(){return So},Few:function(){return xo},xHg:function(){return Fo},aoj:function(){return No},Dlm:function(){return To},mrB:function(){return $r},dKu:function(){return u},v1d:function(){return be},afD:function(){return C},Lz5:function(){return yt},xZX:function(){return Xt},G_1:function(){return Nt},osI:function(){return te},PTJ:function(){return Ze},Qfx:function(){return _r},bti:function(){return Ye},XBv:function(){return Ao},eyl:function(){return Cn},y35:function(){return En},hKD:function(){return pr},BWC:function(){return Je},oLi:function(){return I},NA2:function(){return $n},S3Y:function(){return ke},pvT:function(){return ln},m2f:function(){return Ut},rWO:function(){return _n},A$w:function(){return Sn},kJL:function(){return jt},S9U:function(){return fe},dYC:function(){return xe},jUY:function(){return E},J_U:function(){return Fn},kKo:function(){return K},VZO:function(){return Nn},mf2:function(){return kr},w1q:function(){return Tn},Kn2:function(){return m},ncl:function(){return Dn},LWC:function(){return lr},dqb:function(){return B},Kjn:function(){return On},TaN:function(){return Ee},CBv:function(){return Ge},rTd:function(){return Ir},B73:function(){return Pn},SSA:function(){return c},CLv:function(){return An},F$z:function(){return In},XT_:function(){return sn},omS:function(){return Bn},poV:function(){return Ln},VXY:function(){return Rn},xsP:function(){return Wn},HPs:function(){return Hn},TSy:function(){return Yn},B5o:function(){return Io},u1A:function(){return Mn},WAY:function(){return Bo},I8J:function(){return q},ywV:function(){return Xn},bEN:function(){return qn},$45:function(){return Kn},TUk:function(){return Gn},T7B:function(){return S},CEd:function(){return Jn},IHq:function(){return Qn},SkG:function(){return hn},Smz:function(){return wr},nL5:function(){return Xe},ON:function(){return ra},eiS:function(){return oa},Frc:function(){return na},z5J:function(){return aa},scT:function(){return ia},hd2:function(){return Ro},AnA:function(){return la},kYX:function(){return sa},yZP:function(){return ca},IVd:function(){return Lo},SIr:function(){return da},jg2:function(){return ha},gVz:function(){return fa},puc:function(){return xa},Azz:function(){return ya},X5u:function(){return Ue},dPh:function(){return ga},SMZ:function(){return Rt},kro:function(){return Zt},nPi:function(){return ba},US:function(){return va},A_F:function(){return ge},_vH:function(){return Ne},gmH:function(){return Me},DYV:function(){return wa},qi2:function(){return ka},tOc:function(){return Ca},hau:function(){return ja},FaZ:function(){return dr},uyF:function(){return za},Vcq:function(){return $a},XKW:function(){return _a},azd:function(){return ie},P2K:function(){return Sa},XBe:function(){return Da},JZ7:function(){return yn},ABi:function(){return we},ogC:function(){return Oa},_O2:function(){return no},P0C:function(){return Pa},Uo5:function(){return Aa},Two:function(){return fr},tYQ:function(){return Ia},tVn:function(){return l},pHy:function(){return Ba},k$y:function(){return me},yfi:function(){return La},fl8:function(){return Ra},f9u:function(){return Wa},ZV1:function(){return Ha},Lgs:function(){return Ya}});var De=(t,e="key",r="value")=>{const o={};return(t||[]).map(a=>o[a[e]]=a[r]),o},I=t=>Object.prototype.toString.call(t).slice(8,-1).toLowerCase(),jt=t=>I(t)==="array",Zt=t=>(e,r,o="id",a="children")=>{if(!jt(e))return null;const h=(y,_="")=>{for(let P=0,tt=y.length;P<tt;P++){const mt=y[P];if(mt[o]===r)return t(y,P,_)||y[P];if(jt(mt[a])){const ee=h(mt[a],mt[o]);if(ee)return ee}}};return h(e),e},A=(t,e,r,o="id",a="children")=>Zt((h,y)=>h.splice(y,0,r))(t,e,o,a),H=(t,e,r,o,a="id",h="children")=>Zt((y,_)=>{const P=y[_];P.children?P.children.splice(o,0,r):P.children=[r]})(t,e,a,h),K=t=>I(t).indexOf("element")>-1,Q=(t,e="")=>{if(!K(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" "),a=[...new Set([...r,...o])];t.className=a.join(" ")},bt=(t,e=new Date)=>{const r=new Date(e);return r.setDate(r.getDate()+t),r},Ot=(t,e=new Date)=>{const r=new Date(e);return r.setHours(r.getHours()+t),r},st=(t,e=new Date)=>{const r=new Date(e);return r.setMonth(r.getMonth()+t),r},Mt=(t,e,r,o="id",a="children")=>Zt((h,y)=>{const _=h[y];return _[a]=[..._[a]||[],...r],_})(t,e,o,a),E=()=>![typeof window,typeof document].includes("undefined"),Lt=t=>{if(E())return new Promise((e,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===t))e();else{const o=document.createElement("script");o.onerror=a=>r(new Error(`Failed to load '${t}'`)),o.onload=e,o.src=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},ne=(t,e)=>{if(E())return e?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(a=>a.getAttribute("huxy-css-hash")).filter(Boolean).find(a=>a===e))r();else{const a=document.createElement("style");a.onerror=h=>o(new Error(`Failed to load '${e}' style`)),a.onload=r,a.innerHTML=t,a.setAttribute("huxy-css-hash",e),(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(a=>a.href===t))r();else{const a=document.createElement("link");a.onerror=h=>o(new Error(`Failed to load '${t}'`)),a.onload=r,a.href=t,a.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(a)}})},at=(t,e=new Date)=>{const r=new Date(e);return r.setFullYear(r.getFullYear()+t),r},s=(t=[],e="name")=>{const r={};return t.map(({[e]:o,value:a})=>r[o]=a),r},m=t=>I(t)==="object";const O=(t={})=>{let e="";return Object.keys(t).map(r=>{const o=t[r];e=e&&`${e}, `,m(o)?e+=`${r}=${O(o)}`:Array.isArray(o)?e+=`${r}=${z(o)}`:e+=`${r}=${o}`}),`{${e}}`};var S=O;const T=(t=[])=>{let e="";return t.map(r=>{e=e&&`${e}, `,m(r)?e+=S(r):Array.isArray(r)?e+=T(r):e+=`${r}`}),`[${e}]`};var z=T,Z=t=>(e,r="id",o="children",a=-1)=>{if(!jt(e))return e;const h={},y=e.map(_=>_[r]);return[...e].map(_=>{const P={..._},{[r]:tt}=P;if(tt!=null){let{parentId:mt}=P;mt==null&&(mt=t?.(P)??a,P.parentId=mt),h[tt]||(h[tt]=[]),P[o]=h[tt],h[mt]||(h[mt]=[]),h[a]||(h[a]=[]),y.includes(mt)?h[mt].push(P):h[a].push(P)}}),h[a]},Ct=(t,e="id",r="children",o=-1)=>Z(a=>a[e].match(/\S+(?=-\S+)/)?.[0]||o)(t,e,r,o),lt=(t,e="path",r="children",o=null)=>Z(a=>{const h=a[e],y=h.match(/.*\/[^:/]+\/:[^/]+/);return y?y[0].match(/(.*)\/:+/)?.[1]??o:h.match(/(.*)\/+/)?.[1]??o})(t,e,r,o),Rt=()=>E()&&(window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop),Ut=(t,e)=>Object.prototype.hasOwnProperty.call(t??{},e),B=t=>Ut(t,"current"),Ue=(t=0,e)=>{E()&&(e=B(e)?e.current:e??window,e.scrollTo?.({top:t,behavior:"smooth"}))},yr=`.huxy-totop-bar {
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
}`;const tr=()=>document.getElementsByClassName("huxy-totop-bar")[0],gr=t=>{if(tr())return;const e=document.createElement("div");e.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=t,e.appendChild(r),e.appendChild(o),document.body.appendChild(e),e.addEventListener("click",()=>Ue(),!1),e},br=()=>{const t=tr();t&&document.body.removeChild(t)};var rr=(t=0,e="\u8FD4\u56DE\u9876\u90E8")=>{if(!E())return;ne(yr,"huxy-backtop-css");const r=()=>{Rt()>t?gr(e):br()};return(()=>(document.addEventListener("scroll",r,!1),()=>{br(),document.removeEventListener("scroll",r,!1)}))()},Oe=(t=0,e=2)=>parseInt(String(t),e),ie=(t=0,e=2)=>Number(t).toString(e),Pe=(t=0,e=2,r=16)=>ie(Oe(t,e),r),Xe=t=>{if(!m(t))return"";const e=[];return Object.keys(t).map((r,o)=>{const a=o>0?"&":"?";e.push(`${a}${r}=${t[r]}`)}),e.join("")},wr=t=>{if(!m(t))return{};const e=new FormData;return Object.keys(t).map(r=>{t[r]!=null&&e.append(r,t[r])}),e},kr=t=>I(t)==="function",fe=t=>I(t)==="promise"||m(t)&&kr(t.then),pe=(t,e=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!fe(t))return{};let o=null,a=null;return{promiseFn:new Promise((h,y)=>{o=(_="canceled")=>{clearTimeout(a),h({canceled:!0,errMsg:_})},e&&(e=typeof e!="number"?12e4:e,a=setTimeout(()=>o(r),e)),t.then(_=>{clearTimeout(a),h({result:_,errMsg:!1})}).catch(_=>{clearTimeout(a),y(_)})}),cancelFn:o}};const Tr=[{type:"data",headers:{"Content-Type":"application/json"},body:t=>JSON.stringify(t)},{type:"formData",body:t=>wr(t)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:t=>Xe(t).slice(1)}],ue=(t,e)=>{const r=["data","form","formData","params"].includes(e),o=Object.keys(t).filter(a=>t[a]);if(o.length===1){const a=o[0],h=r?e:a;return h==="params"?{query:t[a]}:{result:t[a],type:h}}else if(o.length>1){const a=o.filter(y=>y!=="params").slice(-1)[0],h=r?e:a;return h==="params"?{query:t.params||t[a]}:{query:t.params,result:t[a],type:h}}};var ar=(t,e)=>r=>(o,a={})=>{const{headers:h,dataType:y,data:_,formData:P,form:tt,params:mt,...ee}=a,re={data:_,formData:P,form:tt,params:mt};let Rr;const{query:xr,result:gn,type:fi}=ue(re,y)||{};if(!ee.body&&gn){const yo=Tr.find(go=>go.type===fi);Rr=yo.headers,ee.body=yo.body(gn)}xr&&(o=`${o}${Xe(xr)}`);const{promiseFn:pi}=pe(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...Rr,...h},...ee}),e);return pi.then(({result:yo,errMsg:go})=>t(go?{status:408,statusText:go}:yo))},Ae=t=>{const e=[],r=o=>{if(o&&typeof o=="object"){if(e.indexOf(o)!==-1)return!0;e.push(o);let a=!1;for(let h in o)Ut(o,h)&&r(o[h])&&(o[h]="cyclic",a=!0);return a}return!1};return r(t)&&t};const Ie=(t,e)=>{const r=I(t),o=I(e);if(r!==o)return!1;if(t==null||e==null)return t===e;if(["object","array"].indexOf(r)===-1)return t.toString()===e.toString();if(Object.keys(t).length!==Object.keys(e).length)return!1;if(Ae(t)&&Ae(e))return Ie(t,e);for(let a in e)if(Ut(t,a)!==Ut(e,a)||!Ie(t[a],e[a]))return!1;return!0};var ir=Ie,lr=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.element",c=t=>t?.__v_isVNode;const g=t=>{if(!jt(t)&&!m(t))return t;const e=jt(t)?[]:{};for(const r in t)if(Ut(t,r)){const o=t[r];e[r]=lr(o)||c(o)||typeof o!="object"?o:o!==t?g(o):"cyclic"}else Object.setPrototypeOf(e,{[r]:t[r]});return e};var v=g,D=(t=100)=>{const e=[];let r=-1;const o=h=>{const y=e.length,_=v(h);return ir(_,e[y-1]?.data)?{index:r,length:y,data:e[r]?.data}:(e.push({data:_}),e.length>t&&e.shift(),r=e.length-1,{index:r,length:r+1,data:e[r].data})},a=(h=0)=>{const y=e.length;return r+=h,r=r<0?0:r>y-1?y-1:r,{index:r,length:y,data:v(e[r]?.data)}};return{record:o,cursor:a,jump:h=>(r=h,{index:r,length:e.length,data:v(e[r]?.data)}),undo:()=>a(-1),redo:()=>a(1),getList:()=>v(e),clean:()=>{e.length=0,r=-1}}},ht=(t,e,r)=>{if(!jt(t))return t;const o=t[e],a=t[r];return t.splice(e,1,a),t.splice(r,1,o),t},rt=(t=[],e="name")=>{const r={};return t.map(o=>{r[o[e]]?r[o[e]].push(o):r[o[e]]=[o]}),r},se=(t,e,r=".")=>{const o=(P,tt)=>P.split(tt),a=o(t,r),h=o(e,r),y=a.length;let _=0;for(let P=0;P<y;P++)if(a[P]<h[P]){_=y-P;break}return _},Le=(...t)=>(...e)=>{const[...r]=t,o=(...a)=>r.length===0?a[0]:o(r.pop()(...a));return o(...e)},sr=t=>{if(!E())return;const e=document.createElement("textarea");e.value=t,e.style.position="fixed",e.style.left="-9999px",document.body.appendChild(e),e.select(),e.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(e)},Re=t=>(e,r)=>{const{getState:o,setState:a,subscribe:h,unsubscribe:y,clean:_}=t;return r!==void 0&&a({[e]:r},!0),{getState:()=>o(e),setState:(P,tt)=>a({[e]:P},tt),subscribe:P=>h(e,P),unsubscribe:()=>y(e),clean:()=>_(e)}},_e=t=>({type:"TEXT_ELEMENT",props:{nodeValue:t}}),co=(t,e,...r)=>({type:t,props:{...e,children:r.map(o=>typeof o=="object"?o:_e(o))}});const We=t=>t.startsWith("on"),Ke=t=>t!=="children"&&!We(t),Kr=(t,e)=>r=>t[r]!==e[r],Or=(t,e)=>r=>!(r in e),Zr=t=>{const e=Object.keys(t);return{eventProps:e.filter(We),propertyProps:e.filter(Ke)}};var l=(t,e,r)=>{const{eventProps:o,propertyProps:a}=Zr(e),{eventProps:h,propertyProps:y}=Zr(r);o.filter(Or(e,r)).map(_=>{const P=_.toLowerCase().slice(2);t.removeEventListener(P,e[_])}),a.filter(Or(e,r)).map(_=>t[_]=""),y.filter(Kr(e,r)).map(_=>t[_]=r[_]),h.filter(Kr(e,r)).map(_=>{const P=_.toLowerCase().slice(2);t.addEventListener(P,r[_])})},w=t=>{if(!E())return;const e=t.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(t.type);return l(e,{},t.props),e},x=()=>{const t={};return{on:(e,r)=>{t[e]||(t[e]=[]),t[e].indexOf(r)===-1&&t[e].push(r)},emit:(e,r)=>{t[e]&&t[e].map(o=>o(r))},off:(e,r=null)=>{if(t[e]){if(typeof r!="function")return delete t[e];const o=t[e].indexOf(r);o>-1&&(t[e].splice(o,1),t[e].length||delete t[e])}}}};const Y=t=>{const e={};for(let r in t)Ut(t,r)||(e[r]=t[r]);return e};var q=(t,e)=>{if(!m(t))return e;if(!m(e))return t;const r={...Y(t),...Y(e)},o={...t,...e};return Object.keys(r).map(a=>{Object.setPrototypeOf(o,{[a]:r[a]})}),o},R=()=>{const{on:t,emit:e,off:r}=x(),o={};return{getState:a=>v(o[a]),setState:(a,h=!1)=>{if(typeof a=="function"&&(a=a(v(o))),!m(a))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const y=v(a);Object.keys(y).map(_=>{const P=o[_],tt=y[_],mt=m(tt)&&m(P)?q(P,tt):tt;!h&&e(_,mt),o[_]=mt})},subscribe:(a,h)=>(t(a,h),()=>r(a,h)),unsubscribe:r,clean:a=>{typeof a=="string"?o[a]=void 0:Array.isArray(a)?a.map(h=>o[h]=void 0):Object.keys(o).map(h=>o[h]=void 0)}}},zt=(t=()=>{},e=t.length)=>{const r=(...o)=>o.length>=e?t(...o):(...a)=>r(...o,...a);return r},gt=(t,e="-")=>t.split(e).map((r,o)=>o>0?r.replace(/^\S/,a=>a.toUpperCase()):r.replace(/^\S/,a=>a.toLowerCase())).join(""),Dt=(t,e)=>{const r=t.split(","),o=r[0].match(/:(.*?);/)[1],a=atob(r[1]);let h=a.length;const y=new Uint8Array(h);for(;h--;)y[h]=a.charCodeAt(h);return new File([y],e??+new Date,{type:o})},it=(t=()=>{},e=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>t.apply(this,o),e)}},Jt=(t,e,r="id",o="children")=>Zt((a,h)=>a.splice(h,1))(t,e,r,o),de=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",we=()=>typeof performance<"u"&&typeof performance.now=="function"?performance.now():new Date().getTime(),me=()=>{let t=we();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,e=>{const r=(t+Math.random()*16)%16|0;return t=Math.floor(t/16),(e==="x"?r:r&3|8).toString(16)})},Ge=t=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(t),xe=t=>{if(typeof t!="string")return!1;const e=/^data:image\/([a-zA-Z0-9]+);base64,.+/i;return t.match(e)},ur=async(t,e,r)=>{if(!E())return;r=r||me();const o=e?`${r}.${e}`:r,a=Ge(t);if(a||xe(t)){t=a?decodeURIComponent(t):t;const h=await fetch(t),y=h.headers.get("Content-Disposition"),_=y&&decodeURIComponent(y.split(";")[1].split("=")[1]);h.blob().then(P=>{const tt=window.URL.createObjectURL(P),mt=document.createElement("a");mt.href=tt,mt.download=_||o,mt.style.display="none",document.body.appendChild(mt),mt.click(),mt.parentNode.removeChild(mt),window.URL.revokeObjectURL(tt)})}else{const h=new Blob([t]),y=window.URL.createObjectURL(h),_=document.createElement("a");_.href=y,_.download=o,_.style.display="none",document.body.appendChild(_),_.click(),_.parentNode.removeChild(_),window.URL.revokeObjectURL(y)}},ke=(t=null)=>E()?K(t)?{width:t.clientWidth,height:t.clientHeight}:{width:window.innerWidth??document.documentElement.clientWidth,height:window.innerHeight??document.documentElement.clientHeight}:{width:0,height:0},Ye=t=>{if(E())return t=B(t)?t.current:t??document.body,t.getBoundingClientRect?.()},dr=t=>{if(!E())return;const e=document.createElement("div");return e.innerHTML=t,e.children[0]},ge=(t,e={},r=!1)=>{if(K(t)){if(r){let o="";Object.keys(e).map(a=>{o+=`${a}: ${e[a]};`}),t.style=o;return}Object.keys(e).map(o=>t.style.setProperty(o,e[o]))}};const Gr=(t=350)=>new Promise(e=>setTimeout(e,t)),Me=(t=100)=>{const e=Date.now();for(;Date.now()-e<=t;);};var Ne=Gr,be=async(t,e=15)=>{if(!E())return;if(typeof t=="string"&&(t=dr(t)),t=B(t)?t.current:t,!K(t))return{};const r=t.cloneNode(!0);ge(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),t.parentNode.appendChild(r),await Ne(e);const o=Ye(r);return t.parentNode.removeChild(r),o};const bo=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Vr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,hr=(t,e)=>{e=`huxy-drop-arrow-${e}`;const r=t.getAttribute("class")??"";bo.test(r)?t.setAttribute("class",r.replace(Vr,e)):t.setAttribute("class",`${r} ${e}`)},vo=async(t,e,r)=>{const{left:o,right:a,top:h,bottom:y}=Ye(t),{width:_,height:P}=ke(),{width:tt,height:mt}=await be(e);if(a<0||y<0||o>_||h>P)return{};if(r==="vertical"){const ee={left:o+"px",top:y+10+"px",right:"auto",bottom:"auto"};let re="lt";o+tt>_&&(ee.left=a-tt+"px",re="rt"),y+10+mt>P&&(ee.top=h-10-mt+"px",re=re==="lt"?"lb":"rb"),ge(e,ee),hr(e,re)}else{const ee={left:a+10+"px",top:h+"px",right:"auto",bottom:"auto"};let re="tl";a+10+tt>_&&(ee.left=o-10-tt+"px",re="tr"),h+mt>P&&(ee.top=y-mt+"px",re=re==="tl"?"bl":"br"),ge(e,ee),hr(e,re)}};var Qr=(t,e,r="horizontal")=>{const o=it(vo),a=()=>o(t,e,r);window.addEventListener("scroll",a,!1),window.addEventListener("resize",a,!1);const h=()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a),ge(e,{left:"",top:"",right:"",bottom:""})};return vo(t,e,r),h},jr=(t,e,r,o="id",a="children")=>Zt((h,y)=>h[y]={...h[y],...r})(t,e,o,a),zr=t=>t.replace(/[&<>'"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[e]||e);const wo=x();var ko=t=>{const{on:e,emit:r,off:o}=wo;return{on:a=>e(t,a),emit:a=>r(t,a),off:a=>o(t,a)}};const eo=120*1e3,Co=t=>t.json().then(e=>e);var Eo=(t=Co,e=eo)=>(r="get")=>ar(t)((r||"get").toUpperCase()),Ir=t=>jt(t)&&!!t.length,po=(t,e,r=[],o=!1,a=null)=>Ir(t)?e?(r=typeof r=="string"?r.split(","):r,t.filter(h=>(r=r.length>0?r:Object.keys(h),r.filter(y=>{const _=h[y];if(_==null)return!1;if(o)return _===e;const P=new RegExp(e,"gi"),tt=_.toString().match(P);return tt&&a&&(h[y]=a(_.toString().replace(P,`<span style="background-color:yellow">${tt[0]}</span>`),{display:"inline-block"})),tt}).length))):t:[],fr=(t,e="id")=>{if(!Ir(t))return t;const r=[],o=[];return t.map(a=>{const h=m(a)?a[e]:a;o.includes(h)||(o.push(h),r.push(a))}),r};const Mo=t=>(e,r="children")=>{if(!Array.isArray(e))return e;const o=v(e),a=h=>{const y=[];return h.map(_=>{if(Ir(_[r])){const P=a(_[r])||[];_[r]=P,P.length>0&&y.push(_)}}),t(h,y)};return a(o)};var zo=(t,e,r,o="name",a="id",h="children",y=!1)=>Mo((_,P)=>fr([...po(_,e,o,y,r),...P],a))(t,h),oo=(t,e)=>{const r=[],o=t.children??[];for(let a=0,h=o.length;a<h;a++){const y=o[a];y.className.indexOf(e)>-1&&r.push(y)}return r.length===0?null:r.length===1?r[0]:r},$o=(t="")=>t.match(/\d+/g)?.sort((e,r)=>r-e)[0],mo=(t="")=>t.replace(/^\S/,e=>e.toUpperCase()),Ur=(t,e=1024)=>{const r=t/e;if(r<e)return`${r.toFixed(3)-0} KB`;const o=r/e;return o<e?`${o.toFixed(3)-0} M`:`${(o/e).toFixed(3)-0} G`},qo=(t="")=>(t??"").replaceAll("//","/"),_o=t=>t?t.charAt(t.length-1)==="/"?t.slice(0,-1):t:"",So=(t,e=1)=>{const r=t.width/t.height/e,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return t.width=o},xo=(t=0,e=["s","m","h","d"])=>{if(t=~~t,t<60)return`${t}${e[0]}`;const r=~~(t/60);if(r<60)return`${r}${e[1]}${t%60}${e[0]}`;const o=~~(t/3600),a=t%3600,h=~~(a/60);return o<24?`${o}${e[2]}${h}${e[1]}${a%60}${e[0]}`:`${(o/24).toFixed(2)}${e[3]}`},no=t=>(e,r="children")=>{if(!jt(e))return e;const o=(a,h=[])=>a.map((y,_)=>{const P=jt(y[r]);if(y=t(y,h,_,P)||y,P){const{[r]:tt,...mt}=y;y[r]=o(tt,[...h,{...mt,"@@index":_}])}return y});return o(e)},Fo=(t,e="children")=>{const r=[];return no(o=>{const{[e]:a,...h}=o;r.push(h)})(t,e),r},No=t=>typeof t=="number"?t.toLocaleString("en-US"):"";const Lr=t=>t<10?"0"+t:t;var pr=(t=new Date)=>{const e=new Date(t),r=e.getFullYear(),o=e.getDay(),a=Lr(e.getMonth()+1),h=Lr(e.getDate()),y=Lr(e.getHours()),_=Lr(e.getMinutes()),P=Lr(e.getSeconds());return[r,a,h,y,_,P,o]},To=(t,e=new Date)=>{t=pr(t),e=pr(e);const r=e.y-t.y,o=e.m-t.m,a=e.d-t.d,h=e.h-t.h,y=e.M-t.M,_=new Date(e.y,e.m,0).getDate(),P=(tt,mt,ee,re,Rr)=>{const xr="\u524D";return mt<0&&(tt-=1,mt+=ee),tt===0?mt+Rr+xr:mt===0?tt+re+xr:tt+re+mt+Rr+xr};return r>0?P(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?P(o,a,_,"\u4E2A\u6708","\u5929"):a>0?P(a,h,24,"\u5929","\u5C0F\u65F6"):h>0?P(h,y,60,"\u5C0F\u65F6","\u5206\u949F"):y>0?y+"\u5206\u949F\u524D":"\u521A\u521A"};const Do=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],on=(t,e,r="-")=>t.replace(new RegExp(r,"g"),e);var $r=(t=new Date,e=["-","-"," ",":",":",""],r=Do)=>{const o=pr(t);let a="";return e.map((h,y)=>a+=(y===6?r[o[y]]:o[y]??"")+h),a};const io=["","webkit","moz","ms"],nn=t=>io.map(e=>e?`${e}FullscreenElement`:"fullscreenElement").find(e=>t[e]),Oo=t=>io.map(e=>e?`${e}RequestFullscreen`:"requestFullscreen").find(e=>t[e]),Po=t=>io.map(e=>e?`${e}ExitFullscreen`:"exitFullscreen").find(e=>t[e]),n=io.map(t=>`${t}fullscreenchange`);var u=t=>{if(!E())return;t=B(t)?t.current:t??document.body;const e=nn(document),r=Oo(t),o=Po(document);document[e]?document[o]?.():t[r]?.()};const p=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var C=()=>{if(!E())return;const t=window.navigator.userAgent.toLowerCase(),e=p.find(r=>t.match(r.reg))??{};return{type:e.name,version:t.match(e.reg)[1]}};const j=60*1e3,L=60*j,V=24*L;var yt=(t,e=new Date)=>{let r=new Date(t)-e;const o=~~(r/V);r-=V*o;const a=~~(r/L);r-=L*a;const h=~~(r/j);r-=j*h;const y=~~(r/1e3);return`${o}\u5929${a}\u5C0F\u65F6${h}\u5206${y}\u79D2`};const ut=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],pt=t=>{if(!Array.isArray(t))return ut;const e=[...ut];return t.map(r=>{const o=e.findIndex(a=>a.name===r.name||a["http-equiv"]===r["http-equiv"]);o>-1?e[o]=r:e.push(r)}),e};var Xt=t=>{const e=pt(t).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return dr(e.join(""))},Nt=(t=new Date)=>{const e=pr(t);return new Date(e[0],e[1],0).getDate()},te=(t=null)=>E()?K(t)?{left:t.scrollLeft,top:t.scrollTop}:{left:window.pageXOffset??document.documentElement.scrollLeft??document.body.scrollLeft,top:window.pageYOffset??document.documentElement.scrollTop??document.body.scrollTop}:{left:0,top:0};const Ce=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:t=>({type:"ios",model:t[1],version:t[3]?.replaceAll("_",".")})},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:t=>({type:"macOS",version:t[1]?t[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:t=>({type:"WindowsPhone",version:t[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:t=>({type:"Windows",version:t[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:t=>({type:"Android",version:t[1]?t[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:t=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:t=>({type:"Linux"})}];var Ze=()=>{if(!E())return;const t=window.navigator.userAgent.toLowerCase(),e=Ce.find(r=>t.match(r.reg));return e?e.format(t.match(e.reg)):{}},_r=(t="")=>{const[e,r]=t.split("?");if(r){const o={};return r.split("&").map(a=>{const[h,y]=a.split("=");o[h]=y}),{path:e,params:o}}return{path:e}},Ee=()=>E()&&(window.ontouchstart||navigator.maxTouchPoints),Je=t=>{const{left:e,top:r}=te();return{touchX:Ee()?t?.touches?.[0]?.pageX:t?.pageX||t?.clientX+e,touchY:Ee()?t?.touches?.[0]?.pageY:t?.pageY||t?.clientY+r}},Ao=(t,e)=>{const{touchX:r,touchY:o}=Je(t),{x:a,y:h}=e?.getBoundingClientRect?.()??{};return{x:r-(a??0),y:o-(h??0)}},Cn=(t,e,r="id",o="children")=>{if(!jt(t))return null;const a=h=>{for(let y=0,_=h.length;y<_;y++){const P=h[y];if(P[r]===e)return[P];if(jt(P[o])){const tt=a(P[o]);if(tt)return[P].concat(tt)}}};return a(t)},En=(t,e,r)=>{if(!E())return;r=B(r)?r.current:r??document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),e&&ge(o,e),o.innerText=(t??"").replace(/[\r\n]/g,""),r.appendChild(o);const a=o.getBoundingClientRect();return r.removeChild(o),a};const jn=(t={},e)=>{e=zn(e);const r=(o,a)=>{if(!a?.[0])return o;if(typeof o[a[0]]=="object")return r(o[a[0]],a.slice(1));if(!(a.length>1))return o[a[0]]};return r(t,e)},zn=(t="")=>t.replace(/\[['"]?(.*?)['"]?\]/g,".$1")?.split(".");var $n=jn,ln=(t,e="")=>K(t)&&t.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)")),_n=(t="")=>{if(t[0]!=="#")return t;t=t.replace("#","");const e=t.length;e===3?t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}`:e===4&&(t=`${t[0]}${t[0]}${t[1]}${t[1]}${t[2]}${t[2]}${t[3]}${t[3]}`);const r=parseInt(t.slice(0,2),16)||0,o=parseInt(t.slice(2,4),16)||0,a=parseInt(t.slice(4,6),16)||0;if(t.length===6)return`rgb(${r},${o},${a})`;const h=parseInt(t.slice(6,8),16)/255||1;return`rgba(${r},${o},${a},${h})`},Sn=t=>{if(!E())return;const e=document.createElement("canvas"),r=e.getContext("2d"),{width:o,height:a}=t;return e.width=o,e.height=a,r.drawImage(t,0,0,o,a),e},Fn=(...t)=>!Number.isNaN(new Date(...t).valueOf()),Nn=t=>I(t)==="error",Tn=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),Dn=t=>t?.$$typeof&&typeof t.$$typeof=="symbol"&&t.$$typeof.description==="react.forward_ref",On=t=>I(t)==="regexp",Pn=t=>m(t)&&Object.keys(t).length,An=()=>{if(E())return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1},In=t=>m(t)?S(t):Array.isArray(t)?z(t):t,sn=t=>new Promise((e,r)=>{const o=new FileReader;o.readAsDataURL(t),o.addEventListener("load",()=>e(o.result)),o.addEventListener("error",a=>r(a))}),Bn=async t=>{if(!Ge(t))return t;const e=await(await fetch(decodeURIComponent(t))).blob();return await sn(e)},Ln=t=>new Promise((e,r)=>{const o=new Image;o.src=t,o.crossOrigin="Anonymous",o.complete?e(o):(o.addEventListener("load",()=>e(o)),o.addEventListener("error",a=>r(a)))}),Rn=async(t,e,r=2e3)=>{for(;!e?.(t?.());)await Ne(r)},Wn=(t,e=["{","}"])=>t?.trim?.().match(new RegExp(`^${e[0]}([\\s\\S]*)${e[1]}$`))?.[1],Hn=(t=()=>{},e=100)=>{let r=[];return(...o)=>{const a=JSON.stringify(o),h=r.find(y=>y.key===a);if(!h){const y=t(...o);return r.push({key:a,result:y}),r.length>e&&r.shift(),y}return h.result}};const cn=(t,e,r="id")=>{if(!jt(t))return e;if(!jt(e))return t;const o={};return[...t,...e].map(a=>{const h=m(a)?a[r]??JSON.stringify(a):a;if(o[h]===void 0)o[h]=a;else{const y=o[h];m(y)&&m(a)?o[h]=Bo(y,a,r):jt(y)&&jt(a)?o[h]=cn(y,a,r):o[h]=a}}),Object.keys(o).map(a=>o[a])};var Io=cn;const un=(t,e,r="id")=>{if(!m(t))return e;if(!m(e))return t;for(let o in e)Ut(e,o)?m(t[o])&&m(e[o])?t[o]=un(t[o],e[o],r):jt(t[o])&&jt(e[o])?t[o]=Io(t[o],e[o],r):t[o]=e[o]:Object.setPrototypeOf(t,{[o]:e[o]});return t};var Bo=un,Yn=(t,...e)=>{const r=jt(t)?Io:Bo;return e.map(o=>t=r(t,o)),t},Mn=(t,e)=>{const r=t?.split(" ")??[],o=e?.split(" ")??[];return[...new Set([...r,...o])].filter(Boolean).join(" ")},Lo=(t,e="")=>{if(!K(t))return;const r=e.split(" ").filter(Boolean),o=t.className.split(" ").filter(a=>!r.includes(a));t.className=o.join(" ")},Zn=`@keyframes huxy-message-animate-in {
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

.message-content.left {
  margin-left: 20px;
}

.message-content.right {
  margin-right: 20px;
}

.message-content.open {
  animation: huxy-message-animate-in 0.25s forwards;
}

.message-content .title {
  font-size: 1.8rem;
}

.message-content .message {
  line-height: 1.75;
}

.message-content i {
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  vertical-align: middle;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-right: 10px;
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
}`;const dn=()=>document.getElementsByClassName("huxy-message")[0],Vn=()=>{const t=document.createElement("div"),e=document.createElement("div");return e.setAttribute("class","huxy-message"),t.appendChild(e),document.body.appendChild(t),e},Un=(t,e,r)=>{const o=t?.dir??"auto",a=document.createElement("div");a.setAttribute("class",`message-content open ${e} ${o}`),a.setAttribute("data-id",r);const h=document.createElement("span");h.setAttribute("class","message"),h.innerText=t?.message??t;const y=document.createElement("i");return a.appendChild(y),a.appendChild(h),a},so=(t,e=3250,r,o)=>{if(!E())return;ne(Zn,"huxy-message-css");let a=dn();a||(a=Vn());const h=me(),y=Un(t,o,h);return a.appendChild(y),e&&(setTimeout(()=>{a.removeChild(y),r?.()},e),setTimeout(()=>{Lo(y,"open")},e-250)),h};var Xn={success:(t,e,r)=>so(t,e,r,"success"),warn:(t,e,r)=>so(t,e,r,"warn"),warning:(t,e,r)=>so(t,e,r,"warn"),error:(t,e,r)=>so(t,e,r,"error"),info:(t,e,r)=>so(t,e,r,"info"),destroy:t=>{const e=dn();if(e)if(t){const r=e.querySelector(`[data-id="${t}"]`);r&&e.removeChild(r)}else for(;e.firstChild;)e.removeChild(e.firstChild)}},qn=(t=new Date)=>{const e=new Date(t),r=e.getDate();return[bt(1-r),bt(Nt(e)-r)]},Kn=(t,e,r,o,a="id",h="children")=>{let y={};return Zt((_,P)=>(y=_[P],_.splice(P,1),!0))(t,e,a,h),H(t,r,y,o,a,h),t},Gn=(t={},e="name")=>Object.keys(t).map(r=>({[e]:r,value:t[r]})),Jn=(t={},e=[])=>{e=typeof e=="string"?e.split(","):e;const r={},o=[];return Object.keys(t).map(a=>e.includes(a)?o.push({key:a,value:t[a]}):r[a]=t[a]),{newObj:r,newQuery:o}},Qn=(t=()=>{})=>{let e=!1;return(...r)=>{if(!e)return e=!0,t(...r)}},hn=(t="",e=0,r="0")=>{const o=t.length;return o>=e?t:`${Array(e-o+1).join(r)}${t}`};const fn="<([^>]+)>([0-9a-zA-Z]*)<\\/\\1>",pn="<([^>]+)><!\\[CDATA\\[([\\s\\S]*)\\]\\]><\\/\\1>",ta=t=>{const e={},r={},o=t.match(new RegExp(fn,"g")).map(h=>h.match(new RegExp(fn))).filter(Boolean),a=t.match(new RegExp(pn,"g")).map(h=>h.match(new RegExp(pn))).filter(Boolean);return o.map(h=>{const[,y,_]=h;e[y]=_,r[y]="base"}),a.map(h=>{const[,y,_]=h;e[y]=(_??"").trim(),r[y]="data"}),{obj:e,types:r}},ea=(t,e,r)=>`<${t}>${e==="data"?`<![CDATA[${r}]]>`:r}</${t}>
`;var ra={xml2Obj:ta,obj2Xml:(t,e)=>{let r="";return Object.keys(t).map(o=>{r+=ea(o,e[o],t[o])}),`<xml>
    ${r}
  </xml>`}},oa=(t,e)=>{if(t==null||typeof t!="object")return{};if(e=typeof e=="string"?e.split(","):e,!jt(e))return t;const r={};return e.map(o=>{o in t&&(r[o]=t[o])}),r},na=(t=()=>{})=>(...e)=>new Promise((r,o)=>t(...e,(a,h)=>a?o(a):r(h))),aa=()=>"#"+hn((~~(Math.random()*(1<<24))).toString(16),6),Ro=(t=0,e=0,r=!0)=>(t<e&&(t=[e,e=t][0]),r?~~(Math.random()*(t-e+1))+e:Math.random()*(t-e)+e),ia=(t=[])=>t[Ro(t.length-1)],la=(t,e=100)=>{const r=[];return[...new Array(t)].map((o,a)=>{a===t-1?r[a]=e:(r[a]=Ro(1,e-1),e-=r[a])}),r},sa=(t=8,e=36)=>Math.random().toString(36).slice(2,t+2),ca=()=>Math.random()>.5;const ua=(t,e)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",e,!1),e()},r.type="text/html",t.appendChild(r),r.data="about:blank",r};var da=(t,e=60)=>{if(!E())return;t=B(t)?t.current:t??document.body;let r=oo(t,"resize-sensor"),o=[];const a=it(()=>o.map(P=>P(t)),e),h=P=>{oo(t,"resize-sensor")||(r=ua(t,a)),o.indexOf(P)===-1&&o.push(P)},y=P=>{const tt=o.indexOf(P);tt!==-1&&o.splice(tt,1),o.length===0&&r&&_()},_=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",a,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:t,bind:h,unbind:y,destroy:_}};const mn=(t=0,e=0,r=0,o=1)=>{t-=0,e-=0,r-=0,o-=0;const a=`#${((1<<24)+(t<<16)+(e<<8)+r).toString(16).slice(1)}`;return o===1?a:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${a}${o}`)};var ha=(t=0,e=0,r=0,o=1)=>{if(t.includes("rgb")){const a=t.match(/rgba?\((.+)\)/);if(a){const h=a[1]?.split(",").map(y=>y.trim());return mn(...h)}return t}return mn(t,e,r,o)},fa=(t,e="px")=>`${t}`.replace(e,"")-0;const xn=()=>typeof performance?.now=="function"?performance.now():new Date().getTime(),pa=t=>{if(typeof setImmediate=="function")return()=>setImmediate(t);if(typeof MessageChannel=="function"){const{port1:e,port2:r}=new MessageChannel;return e.onmessage=t,()=>r.postMessage(null)}return()=>setTimeout(t,0)},ma=()=>{const t=[],e=y=>{t.push(y),h(y)},r=()=>t[0],o=()=>t.shift(),a=y=>y.startTime=xn(),h=y=>{a(y),t.sort((_,P)=>_.startTime-P.startTime)};return{hub:t,push:e,peek:r,shift:o,update:h}};var xa=(t=5)=>{const{hub:e,push:r,peek:o,shift:a,update:h}=ma(),y=pa(()=>{P()&&y()}),_=tt=>xn()-tt.startTime>t,P=()=>{let tt=o();for(;tt;){if(_(tt)){h(tt);break}const{task:mt}=tt;typeof mt=="function"?(tt.task=null,mt()):a(),tt=o()}return tt};return(tt=()=>{})=>{r({task:tt}),e.length<2&&y()}},ya=()=>E()&&document.documentElement.scrollHeight-Rt()===ke().height,ga=t=>{E()&&(t=B(t)?t.current:t??window,t.scrollIntoView?.({behavior:"smooth",block:"center"}))},ba={get:t=>{let e=null;try{e=JSON.parse(sessionStorage.getItem(t))}catch{e=sessionStorage.getItem(t)}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),sessionStorage.setItem(t,e)},rm:t=>{sessionStorage.removeItem(t)},clear:()=>{sessionStorage.clear()}},va=t=>{const e=Xt(t);E()&&document.head.appendChild(...e)},wa=(t,e=null,r=!1)=>[...t||[]].sort((o,a)=>{const h=e?o[e]:o,y=e?a[e]:a;return!isNaN(Number(h))&&!isNaN(Number(h))?r?y-h:h-y:typeof h=="string"&&typeof y=="string"?r?y.localeCompare(h):h.localeCompare(y):typeof h=="string"&&typeof y=="number"?r?-1:1:typeof h=="number"||typeof h=="string"?r?1:-1:r?-1:1}),ka=t=>{if(!m(t))return{};const e={};return Object.keys(t).sort().map(r=>{e[r]=t[r]}),e},Ca={get:t=>{let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch{}return e},set:(t,e)=>{typeof e=="object"&&(e=JSON.stringify(e)),localStorage.setItem(t,e)},rm:t=>{localStorage.removeItem(t)},clear:()=>{localStorage.clear()}};const Ea=R();var ja=Re(Ea),za=(t,e=!1)=>(t=e?t:`return ${t};`,Function(t)()),$a=()=>E()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),_a=(t,...e)=>{const r=[];return t.map((o,a)=>{r.push(o,e[a]??"")}),r.join("")},Sa=(t=()=>{},e=60)=>{let r=null;return function(...o){r||(t.apply(this,o),r=setTimeout(()=>r=null,e))}};const Fa=t=>[12,Nt(t),24,60,60],Na=(t=[],e=[],r=[])=>{let o=!1;const a=[];return e.map((h,y)=>{const _=(o?h-1:h)-t[y];_<0?(a[y]=_+(r[y]||10),o=!0):(a[y]=_,o=!1)}),a.reverse()};var yn=(t,e=new Date)=>{new Date(t)-new Date(e)>0&&(t=[e,e=t][0]);const r=Fa(e).reverse(),o=pr(t).slice(0,-1).reverse(),a=pr(e).slice(0,-1).reverse();return Na(o,a,r)};const Ta=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Da=(t,e=new Date)=>{const r=yn(t,e),o=r.findIndex(a=>a>0);return r.map((a,h)=>`${a||0}${Ta[h]}`).slice(o).join("")},Oa=(t,e)=>{K(t)&&(ln(t,e)?Lo(t,e):Q(t,e))},Pa=t=>(e,r="children")=>{if(!jt(e))return e;const o=a=>(a.map(h=>{jt(h[r])&&(h[r]=o(h[r]))}),t(a));return o(e)},Aa=t=>t.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,e=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[e]||e),Ia=(t,e="fuckId",r="children")=>no((o,a,h)=>{o[e]=[...a.map(y=>y["@@index"]),h].join("-")})(t,r),Ba=(t,e,r,o="children")=>Zt((a,h)=>{const y=a[h];return y[o]=[...y[o]||[],...r],!0})(t,e),La=(t={})=>{const e={};return Object.keys(t).map(r=>{t[r]!=null&&(e[r]=t[r])}),e},Ra=t=>E()?(n.map(e=>document.addEventListener(e,t,!1)),()=>n.map(e=>document.removeEventListener(e,t,!1))):void 0,Wa=({container:t,width:e="220px",height:r="200px",textAlign:o="center",textBaseline:a="middle",font:h="20px microsoft yahei",fillStyle:y="rgba(202,202,202,0.4)",content:_="\u8BF7\u52FF\u5916\u4F20",rotate:P="-30",zIndex:tt=1e3}={})=>{if(!E())return;t=B(t)?t.current:t??document.body;const mt=t.firstChild;mt?.className==="watermark-canvas"&&t.removeChild(mt);const ee=document.createElement("canvas");ee.setAttribute("width",e),ee.setAttribute("height",r);const re=ee.getContext("2d");re.textAlign=o,re.textBaseline=a,re.font=h,re.fillStyle=y,re.rotate(Math.PI/180*P),re.fillText(_,parseFloat(e)/2,parseFloat(r)/2);const Rr=ee.toDataURL(),xr=document.createElement("div");xr.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${tt};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${Rr}')`),t.style.position="relative",t.insertBefore(xr,t.firstChild)},Ha=(t=new Date)=>{const e=new Date(t).getDay();return[bt(1-e),bt(7-e)]},Ya=t=>{if(!fe(t))return{};let e="pending",r;const o=t.then(a=>{e="success",r=a}).catch(a=>{e="error",r=a});return{read:()=>{if(e==="pending")throw o;if(e==="error")throw r;if(e==="success")return r}}},_l=d.NzM,Sl=d.wBC,Fl=d.O39,Nl=d.cnu,Tl=d.E4D,Dl=d.TRp,Ol=d.zI1,Pl=d.Ufj,Al=d.GxO,Il=d.cu2,Bl=d.BcS,Ll=d.lPd,Rl=d.dC1,Wl=d.$L2,Hl=d.Vji,Yl=d.YxP,Ml=d.UhT,Ma=d.JaC,Zl=d.o4B,Vl=d.Hlr,Za=d.muM,Ul=d.OiV,Xl=d.KTn,ql=d.lwL,Kl=d.d9v,Gl=d.yCD,Jl=d.qCK,Va=d.vQq,Ua=d.fHt,Ql=d.azq,ts=d.dSY,Xa=d.MTn,es=d.RYO,rs=d.WAo,os=d.GVc,ns=d.Emy,as=d.v9O,is=d.DsO,ls=d._lj,ss=d.vO6,cs=d.xDX,us=d.hf3,ds=d.ip7,hs=d.uYe,fs=d.DgJ,ps=d.rae,ms=d.YBu,qa=d._iG,xs=d.hXT,ys=d.gQq,gs=d.D_D,bs=d.$nD,vs=d.dtG,ws=d.Y0R,Ka=d.qg7,ks=d.Xxf,Cs=d.tSM,Es=d.Few,js=d.xHg,zs=d.aoj,$s=d.Dlm,Ga=d.mrB,_s=d.dKu,Ss=d.v1d,Ja=d.afD,Fs=d.Lz5,Ns=d.xZX,Ts=d.G_1,Ds=d.osI,Qa=d.PTJ,Os=d.Qfx,Ps=d.bti,As=d.XBv,ti=d.eyl,Is=d.y35,Bs=d.hKD,Ls=d.BWC,Rs=d.oLi,ei=d.NA2,Ws=d.S3Y,Hs=d.pvT,Ys=d.m2f,ri=d.rWO,Ms=d.A$w,Zs=d.kJL,Vs=d.S9U,Us=d.dYC,Xs=d.jUY,qs=d.J_U,Ks=d.kKo,Gs=d.VZO,Js=d.mf2,Qs=d.w1q,tc=d.Kn2,ec=d.ncl,rc=d.LWC,oc=d.dqb,nc=d.Kjn,ac=d.TaN,ic=d.CBv,lc=d.rTd,sc=d.B73,cc=d.SSA,uc=d.CLv,dc=d.F$z,hc=d.XT_,fc=d.omS,pc=d.poV,mc=d.VXY,xc=d.xsP,yc=d.HPs,gc=d.TSy,bc=d.B5o,vc=d.u1A,wc=d.WAY,kc=d.I8J,oi=d.ywV,Cc=d.bEN,Ec=d.$45,jc=d.TUk,zc=d.T7B,$c=d.CEd,_c=d.IHq,Sc=d.SkG,Fc=d.Smz,Nc=d.nL5,Tc=d.ON,Dc=d.eiS,Oc=d.Frc,Pc=d.z5J,Ac=d.scT,Ic=d.hd2,Bc=d.AnA,Lc=d.kYX,Rc=d.yZP,Wc=d.IVd,Hc=d.SIr,ni=d.jg2,ai=d.gVz,Yc=d.puc,Mc=d.Azz,Zc=d.X5u,Vc=d.dPh,Uc=d.SMZ,Xc=d.kro,qc=d.nPi,Kc=d.US,ii=d.A_F,Gc=d._vH,Jc=d.gmH,Qc=d.DYV,tu=d.qi2,li=d.tOc,eu=d.hau,ru=d.FaZ,ou=d.uyF,si=d.Vcq,nu=d.XKW,ci=d.azd,au=d.P2K,iu=d.XBe,lu=d.JZ7,su=d.ABi,cu=d.ogC,ui=d._O2,uu=d.P0C,du=d.Uo5,hu=d.Two,fu=d.tYQ,pu=d.tVn,mu=d.pHy,di=d.k$y,xu=d.yfi,yu=d.fl8,hi=d.f9u,gu=d.ZV1,bu=d.Lgs}}]);
