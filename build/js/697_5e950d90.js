(self.webpackChunk=self.webpackChunk||[]).push([[697],{1975:function(Nt,me,Ue){(function(Ae,Te){Nt.exports=Te(Ue(7378),Ue(1542))})(this,function(Ae,Te){return function(){"use strict";var be={851:function(a,m,d){var k=d(601),g=d.n(k),S=d(609),p=d.n(S),$=p()(g());$.push([a.id,`/*@height:2px;
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
`,""]),$.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},m.Z=$},921:function(a,m,d){var k=d(601),g=d.n(k),S=d(609),p=d.n(S),$=p()(g());$.push([a.id,`.kLIGi {
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
`,""]),$.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},m.Z=$},546:function(a,m,d){var k=d(601),g=d.n(k),S=d(609),p=d.n(S),$=p()(g());$.push([a.id,`@keyframes animate-drawer-right-in {
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
  border-color: rgba(0, 0, 0, 0.2);
}
.W4gG3 .e3AWW .VSVwl:before {
  content: "\\00D7";
  position: absolute;
  top: -4px;
  left: 0;
  width: 100%;
  height: 100%;
}
.W4gG3 .e3AWW .VSVwl:hover {
  border-color: rgba(0, 0, 0, 0.2);
}
.W4gG3 .hlj9r {
  height: 44px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  border-top: 1px solid #edeff2;
}
`,""]),$.locals={"drawer-wrap":"KsHNu",open:"c6aFy",right:"mlowE",left:"w0B0d","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},m.Z=$},199:function(a,m,d){var k=d(601),g=d.n(k),S=d(609),p=d.n(S),$=p()(g());$.push([a.id,`@keyframes animate-drop-in {
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
  position: fixed !important;
  z-index: 10001;
  opacity: 0;
  min-width: 100px;
  min-height: 50px;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
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
  background: #ffffff;
  border: 1px solid #f0f0f0;
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
  border-bottom-color: #f0f0f0;
}
.huxy-drop-arrow-lt::after {
  left: calc(10px + 1px);
  border-bottom-color: #ffffff;
}
.huxy-drop-arrow-rt {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
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
  border-bottom-color: #f0f0f0;
}
.huxy-drop-arrow-rt::after {
  right: calc(10px + 1px);
  border-bottom-color: #ffffff;
}
.huxy-drop-arrow-lb {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
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
  border-top-color: #f0f0f0;
}
.huxy-drop-arrow-lb::before {
  left: 10px;
}
.huxy-drop-arrow-lb::after {
  left: calc(10px + 1px);
  border-top-color: #ffffff;
}
.huxy-drop-arrow-rb {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
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
  border-top-color: #f0f0f0;
}
.huxy-drop-arrow-rb::after {
  right: calc(10px + 1px);
  border-top-color: #ffffff;
}
.huxy-drop-arrow-tl {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
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
  border-right-color: #f0f0f0;
}
.huxy-drop-arrow-tl::after {
  top: calc(10px + 1px);
  border-right-color: #ffffff;
}
.huxy-drop-arrow-tr {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
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
  border-left-color: #f0f0f0;
}
.huxy-drop-arrow-tr::after {
  top: calc(10px + 1px);
  border-left-color: #ffffff;
}
.huxy-drop-arrow-bl {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
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
  border-right-color: #f0f0f0;
}
.huxy-drop-arrow-bl::after {
  bottom: calc(10px + 1px);
  border-right-color: #ffffff;
}
.huxy-drop-arrow-br {
  position: relative;
  background: #ffffff;
  border: 1px solid #f0f0f0;
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
  border-left-color: #f0f0f0;
}
.huxy-drop-arrow-br::after {
  bottom: calc(10px + 1px);
  border-left-color: #ffffff;
}
`,""]),$.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},m.Z=$},514:function(a,m,d){var k=d(601),g=d.n(k),S=d(609),p=d.n(S),$=p()(g());$.push([a.id,`@keyframes animate-modal-in {
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
`,""]),$.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},m.Z=$},408:function(a,m,d){var k=d(601),g=d.n(k),S=d(609),p=d.n(S),$=p()(g());$.push([a.id,`.clear::after {
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
`,""]),$.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"},m.Z=$},836:function(a,m,d){var k=d(601),g=d.n(k),S=d(609),p=d.n(S),$=p()(g());$.push([a.id,`.cols-1 {
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
`,""]),$.locals={},m.Z=$},897:function(a,m,d){var k=d(601),g=d.n(k),S=d(609),p=d.n(S),$=p()(g());$.push([a.id,`@keyframes before {
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
`,""]),$.locals={},m.Z=$},874:function(a,m,d){var k=d(601),g=d.n(k),S=d(609),p=d.n(S),$=p()(g());$.push([a.id,`.clear::after {
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
`,""]),$.locals={},m.Z=$},198:function(a,m,d){var k=d(601),g=d.n(k),S=d(609),p=d.n(S),$=p()(g());$.push([a.id,`.ofth_ {
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
`,""]),$.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},m.Z=$},454:function(a,m,d){var k=d(601),g=d.n(k),S=d(609),p=d.n(S),$=p()(g());$.push([a.id,`.node-right-icon-close {
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
`,""]),$.locals={},m.Z=$},609:function(a){a.exports=function(m){var d=[];return d.toString=function(){return this.map(function(k){var g="",S=typeof k[5]!="undefined";return k[4]&&(g+="@supports (".concat(k[4],") {")),k[2]&&(g+="@media ".concat(k[2]," {")),S&&(g+="@layer".concat(k[5].length>0?" ".concat(k[5]):""," {")),g+=m(k),S&&(g+="}"),k[2]&&(g+="}"),k[4]&&(g+="}"),g}).join("")},d.i=function(k,g,S,p,$){typeof k=="string"&&(k=[[null,k,void 0]]);var _={};if(S)for(var U=0;U<this.length;U++){var q=this[U][0];q!=null&&(_[q]=!0)}for(var F=0;F<k.length;F++){var L=[].concat(k[F]);S&&_[L[0]]||(typeof $!="undefined"&&(typeof L[5]=="undefined"||(L[1]="@layer".concat(L[5].length>0?" ".concat(L[5]):""," {").concat(L[1],"}")),L[5]=$),g&&(L[2]&&(L[1]="@media ".concat(L[2]," {").concat(L[1],"}")),L[2]=g),p&&(L[4]?(L[1]="@supports (".concat(L[4],") {").concat(L[1],"}"),L[4]=p):L[4]="".concat(p)),d.push(L))}},d}},601:function(a){a.exports=function(m){return m[1]}},837:function(a,m,d){var k,g=d(899),S=Symbol.for("react.element"),p=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,_=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function q(F,L,W){var ee,xe={},ve=null,Ge=null;W!==void 0&&(ve=""+W),L.key!==void 0&&(ve=""+L.key),L.ref!==void 0&&(Ge=L.ref);for(ee in L)$.call(L,ee)&&!U.hasOwnProperty(ee)&&(xe[ee]=L[ee]);if(F&&F.defaultProps)for(ee in L=F.defaultProps,L)xe[ee]===void 0&&(xe[ee]=L[ee]);return{$$typeof:S,type:F,key:ve,ref:Ge,props:xe,_owner:_.current}}k=p,m.jsx=q,m.jsxs=q},322:function(a,m,d){a.exports=d(837)},62:function(a){var m=[];function d(S){for(var p=-1,$=0;$<m.length;$++)if(m[$].identifier===S){p=$;break}return p}function k(S,p){for(var $={},_=[],U=0;U<S.length;U++){var q=S[U],F=p.base?q[0]+p.base:q[0],L=$[F]||0,W="".concat(F," ").concat(L);$[F]=L+1;var ee=d(W),xe={css:q[1],media:q[2],sourceMap:q[3],supports:q[4],layer:q[5]};if(ee!==-1)m[ee].references++,m[ee].updater(xe);else{var ve=g(xe,p);p.byIndex=U,m.splice(U,0,{identifier:W,updater:ve,references:1})}_.push(W)}return _}function g(S,p){var $=p.domAPI(p);$.update(S);var _=function(U){if(U){if(U.css===S.css&&U.media===S.media&&U.sourceMap===S.sourceMap&&U.supports===S.supports&&U.layer===S.layer)return;$.update(S=U)}else $.remove()};return _}a.exports=function(S,p){p=p||{},S=S||[];var $=k(S,p);return function(_){_=_||[];for(var U=0;U<$.length;U++){var q=$[U],F=d(q);m[F].references--}for(var L=k(_,p),W=0;W<$.length;W++){var ee=$[W],xe=d(ee);m[xe].references===0&&(m[xe].updater(),m.splice(xe,1))}$=L}}},793:function(a){var m={};function d(g){if(typeof m[g]=="undefined"){var S=document.querySelector(g);if(window.HTMLIFrameElement&&S instanceof window.HTMLIFrameElement)try{S=S.contentDocument.head}catch(p){S=null}m[g]=S}return m[g]}function k(g,S){var p=d(g);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(S)}a.exports=k},173:function(a){function m(d){var k=document.createElement("style");return d.setAttributes(k,d.attributes),d.insert(k,d.options),k}a.exports=m},892:function(a,m,d){function k(g){var S=d.nc;S&&g.setAttribute("nonce",S)}a.exports=k},36:function(a){function m(g,S,p){var $="";p.supports&&($+="@supports (".concat(p.supports,") {")),p.media&&($+="@media ".concat(p.media," {"));var _=typeof p.layer!="undefined";_&&($+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),$+=p.css,_&&($+="}"),p.media&&($+="}"),p.supports&&($+="}");var U=p.sourceMap;U&&typeof btoa!="undefined"&&($+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(U))))," */")),S.styleTagTransform($,g,S.options)}function d(g){if(g.parentNode===null)return!1;g.parentNode.removeChild(g)}function k(g){var S=g.insertStyleElement(g);return{update:function(p){m(S,g,p)},remove:function(){d(S)}}}a.exports=k},464:function(a){function m(d,k){if(k.styleSheet)k.styleSheet.cssText=d;else{for(;k.firstChild;)k.removeChild(k.firstChild);k.appendChild(document.createTextNode(d))}}a.exports=m},899:function(a){a.exports=Ae},994:function(a){a.exports=Te}},Q={};function te(a){var m=Q[a];if(m!==void 0)return m.exports;var d=Q[a]={id:a,exports:{}};return be[a](d,d.exports,te),d.exports}(function(){te.n=function(a){var m=a&&a.__esModule?function(){return a.default}:function(){return a};return te.d(m,{a:m}),m}})(),function(){te.d=function(a,m){for(var d in m)te.o(m,d)&&!te.o(a,d)&&Object.defineProperty(a,d,{enumerable:!0,get:m[d]})}}(),function(){te.o=function(a,m){return Object.prototype.hasOwnProperty.call(a,m)}}(),function(){te.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){te.nc=void 0}();var y={};return function(){te.r(y),te.d(y,{Anico:function(){return Ge},Carousel:function(){return Gt},Col:function(){return St},Drawer:function(){return Wt},Drop:function(){return vt},Ellipsis:function(){return jr},ErrorBoundary:function(){return Sr},FullPage:function(){return Vt},HandleError:function(){return Br},LoadError:function(){return $r},Mask:function(){return It},MaxSize:function(){return x},Modal:function(){return B},Panel:function(){return Ye},Portal:function(){return ht},Row:function(){return At},Spinner:function(){return ye},TabHeader:function(){return ir},Tooltip:function(){return cr},Tree:function(){return Kr},fixEle:function(){return dr},fixIcon:function(){return hr},renderTree:function(){return yr},str2React:function(){return zr},str2Vue:function(){return Ft}});var a=te(322),m=te(62),d=te.n(m),k=te(36),g=te.n(k),S=te(793),p=te.n(S),$=te(892),_=te.n($),U=te(173),q=te.n(U),F=te(464),L=te.n(F),W=te(851),ee={};ee.styleTagTransform=L(),ee.setAttributes=_(),ee.insert=p().bind(null,"head"),ee.domAPI=g(),ee.insertStyleElement=q();var xe=d()(W.Z,ee),ve=W.Z&&W.Z.locals?W.Z.locals:void 0,Ge=i=>(0,a.jsx)("span",{className:ve.anico,children:(0,a.jsx)("span",{className:[ve.hline,...(i.type||"").split(" ").map(l=>ve[l]).filter(Boolean)].join(" ")})}),it=te(994),H=te(899),He=te.n(H),_e=(i,l)=>{const h=(0,H.useRef)();(0,H.useEffect)(()=>{h.current=i},[i]),(0,H.useEffect)(()=>{if(l){const j=setInterval(()=>h.current(),l);return()=>clearInterval(j)}},[l])},Re=()=>![typeof window,typeof document].includes("undefined"),Rt=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),dt=i=>Rt(i).indexOf("element")>-1,at=(i=null)=>{var l,h;return Re()?dt(i)?{width:i.clientWidth,height:i.clientHeight}:{width:(l=window.innerWidth)!=null?l:document.documentElement.clientWidth,height:(h=window.innerHeight)!=null?h:document.documentElement.clientHeight}:{width:0,height:0}},R=(i=()=>{},l=60)=>{let h=null;return function(...j){clearTimeout(h),h=setTimeout(()=>i.apply(this,j),l)}},oe=(i,l)=>Object.prototype.hasOwnProperty.call(i!=null?i:{},l),G=i=>oe(i,"current"),we=(i,l)=>{var h;const j=[],O=(h=i.children)!=null?h:[];for(let I=0,Z=O.length;I<Z;I++){const K=O[I];K.className.indexOf(l)>-1&&j.push(K)}return j.length===0?null:j.length===1?j[0]:j};const $e=(i,l)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const h=document.createElement("object");return h.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),h.setAttribute("class","resize-sensor"),h.onload=()=>{h.contentDocument.defaultView.addEventListener("resize",l,!1),l()},h.type="text/html",i.appendChild(h),h.data="about:blank",h};var rt=(i,l=60)=>{if(!Re())return;i=G(i)?i.current:i!=null?i:document.body;let h=we(i,"resize-sensor"),j=[];const O=R(()=>j.map(J=>J(i)),l),I=J=>{we(i,"resize-sensor")||(h=$e(i,O)),j.indexOf(J)===-1&&j.push(J)},Z=J=>{const le=j.indexOf(J);le!==-1&&j.splice(le,1),j.length===0&&h&&K()},K=()=>{h&&h.parentNode&&(h.contentDocument&&h.contentDocument.defaultView.removeEventListener("resize",O,!1),h.parentNode.removeChild(h),h=void 0,j=[])};return{element:i,bind:I,unbind:Z,destroy:K}},Ke=(i={})=>{const l=(0,H.useRef)(0),[h,j]=(0,H.useState)(i),O=(0,H.useCallback)(I=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>j(I))},[]);return(0,H.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[h,O]},ft=(i=null,l=60)=>{const h=G(i)?i.current:i,{bind:j,destroy:O}=rt(h,l),[I,Z]=Ke(at(h));return(0,H.useEffect)(()=>(j(()=>h&&Z(at(h))),()=>O()),[h]),I},Me=te(921),We={};We.styleTagTransform=L(),We.setAttributes=_(),We.insert=p().bind(null,"head"),We.domAPI=g(),We.insertStyleElement=q();var Et=d()(Me.Z,We),Je=Me.Z&&Me.Z.locals?Me.Z.locals:void 0,Gt=({children:i,active:l=0,delay:h=5e3,className:j,...O})=>{const[I,Z]=(0,H.useState)(l+1),[K,J]=(0,H.useState)(!1),le=(0,H.useRef)(),ue=(0,H.useRef)(""),{width:ce}=ft(le);i=Array.isArray(i)?i:[i];const pe=i[0],Ee=[i[i.length-1],...i,pe],Ne=Ee.length;_e(()=>{let ke=I+1;ke=ke===Ne?1:ke,ue.current&&(ue.current=""),Z(ke),ke===Ne-1&&setTimeout(()=>{ue.current="none",Z(1)},500)},K?null:h);const De=(ke,Pe)=>{Pe.stopPropagation(),ue.current="",Z(ke),(0,it.flushSync)(()=>J(!0)),J(!1)},Fe={width:`${Ne*ce}px`,transform:`translateX(${-ce*I}px)`,transition:ue.current};return(0,a.jsxs)("div",{className:`${Je["huxy-carousel"]}${j?` ${j}`:""}`,...O,ref:le,children:[(0,a.jsx)("div",{className:Je["huxy-carousel-wrap"],style:Fe,children:Ee.map((ke,Pe)=>(0,a.jsx)("div",{className:`${Je["carousel-item"]} ${I===Pe?Je.active:""}`,style:{width:`${ce}px`},children:ke},`huxy-carousel-${Pe}`))}),(0,a.jsx)("div",{className:Je["carousel-switch"],children:i.map((ke,Pe)=>(0,a.jsx)("span",{className:`${Je.dot} ${I===Pe+1?Je.active:""}`,onClick:yt=>De(Pe+1,yt)},`huxy-carousel-switch-${Pe}`))})]})};const lt=(i,l)=>{let h="",j="";if(typeof l=="number"&&(h=`col-${i}-${l}`),typeof l=="object"){const{span:O,offset:I}=l;h=O?`col-${i}-${O}`:"",j=I?`offset-${i}-${I}`:""}return{sp:h,os:j}};var St=(0,H.forwardRef)(({span:i,offset:l,xl:h,lg:j,md:O,sm:I,xs:Z,style:K,width:J,auto:le,offsetWidth:ue="0px",className:ce,...pe},Ee)=>{const Ne=ce?` ${ce}`:"",De=`col-${i||12}`,Fe=l?`offset-${l}`:"",{sp:ke,os:Pe}=lt("xs",Z),{sp:yt,os:qt}=lt("sm",I),{sp:Bt,os:vr}=lt("md",O),{sp:jt,os:sr}=lt("lg",j),{sp:Lt,os:Tt}=lt("xl",h),ct=[De,Lt,jt,Bt,yt,ke,Fe,Tt,sr,vr,qt,Pe].filter(Boolean).join(" "),Ot=le?{width:"auto",flex:1,maxWidth:`calc(100% - ${ue})`}:{width:J};return(0,a.jsx)("div",{className:`${ct}${Ne}`,...pe,style:{...Ot,...K},ref:Ee})}),Kt=()=>{const i=(0,H.useRef)(!0);return i.current?(i.current=!1,!0):!1},Jt=(i,l=[])=>{const h=Kt();(0,H.useEffect)(()=>{if(!h)return i()},l)},Mt=(i,l=450)=>{const[h,j]=(0,H.useState)(i);return Jt(()=>{let O;return i||l===0?j(i):O=setTimeout(()=>j(i),l),()=>O&&clearTimeout(O)},[i]),[h,j]},ht=({children:i,mountNode:l=document.body})=>(0,it.createPortal)(i,l);const ot={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},Qt={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},ur=document.body;var It=({open:i,close:l,delay:h=300,children:j,mountNode:O,hasMask:I=!0,style:Z,className:K="h-mask",relative:J})=>{const[le]=Mt(i,h);(O!=null?O:ur).style.overflow=le?"hidden":"";const ue=J?"absolute":"fixed";return(0,a.jsx)(ht,{mountNode:O,children:(0,a.jsx)("div",{children:le?(0,a.jsxs)("div",{className:K,style:{...ot,position:ue},children:[I?(0,a.jsx)("div",{style:{...Qt,position:ue},onClick:ce=>l==null?void 0:l(ce)}):null,H.Children.map(j,ce=>(0,H.isValidElement)(ce)?(0,H.cloneElement)(ce,{style:{position:"relative",zIndex:100001,...ce.props.style}}):ce)]}):null})})},st=te(546),gt={};gt.styleTagTransform=L(),gt.setAttributes=_(),gt.insert=p().bind(null,"head"),gt.domAPI=g(),gt.insertStyleElement=q();var kr=d()(st.Z,gt),ut=st.Z&&st.Z.locals?st.Z.locals:void 0,Wt=({open:i,close:l,footer:h,header:j,className:O,style:I,children:Z,width:K="300px",mountNode:J,position:le="right",relative:ue})=>{var ce;const pe=["drawer-wrap",le,i?"open":"",...(ce=O==null?void 0:O.split(" "))!=null?ce:[]].filter(Boolean).map(Ee=>ut[Ee]).join(" ");return(0,a.jsx)(It,{open:i,close:l,delay:250,hasMask:!0,relative:ue,mountNode:J,className:"huxy-drawer",children:(0,a.jsx)("div",{className:pe,style:{width:K,position:ue?"absolute":"fixed",...I},children:(0,a.jsxs)("div",{className:ut["drawer-container"],children:[(0,a.jsxs)("div",{className:ut["drawer-header"],children:[(0,a.jsx)("span",{className:`link ${ut["ico-close"]}`,onClick:Ee=>l==null?void 0:l(Ee)}),(0,a.jsx)("div",{children:j})]}),(0,a.jsx)("div",{className:ut["drawer-content"],children:Z}),h?(0,a.jsx)("div",{className:ut["drawer-footer"],children:h}):null]})})})},pt=(i,l,h="click")=>{(0,H.useEffect)(()=>{const j=I=>{const Z=G(i)?i.current:i;Z!=null&&Z.contains&&!Z.contains(I.target)&&l(I)},O=typeof h=="string"?[h]:h;return O.map(I=>{document.addEventListener(I,j,!1)}),()=>{O.map(I=>{document.removeEventListener(I,j,!1)})}},[i,l,h])},er=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",tr=(i="")=>i.replace(/^\S/,l=>l.toUpperCase()),mt=i=>{var l;if(Re())return i=G(i)?i.current:i!=null?i:document.body,(l=i.getBoundingClientRect)==null?void 0:l.call(i)},rr=i=>{if(!Re())return;const l=document.createElement("div");return l.innerHTML=i,l.children[0]},u=(i,l={},h=!1)=>{if(dt(i)){if(h){let j="";Object.keys(l).map(O=>{j+=`${O}: ${l[O]};`}),i.style=j;return}Object.keys(l).map(j=>i.style.setProperty(j,l[j]))}};const w=(i=350)=>new Promise(l=>setTimeout(l,i)),E=(i=100)=>{const l=Date.now();for(;Date.now()-l<=i;);};var T=w,N=async(i,l=15)=>{if(!Re())return;if(typeof i=="string"&&(i=rr(i)),i=G(i)?i.current:i,!dt(i))return{};const h=i.cloneNode(!0);u(h,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(h),await T(l);const j=mt(h);return i.parentNode.removeChild(h),j};const Y=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,de=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,ie=(i,l)=>{var h;l=`huxy-drop-arrow-${l}`;const j=(h=i.getAttribute("class"))!=null?h:"";Y.test(j)?i.setAttribute("class",j.replace(de,l)):i.setAttribute("class",`${j} ${l}`)},ne=async(i,l,h)=>{const{left:j,right:O,top:I,bottom:Z}=mt(i),{width:K,height:J}=at(),{width:le,height:ue}=await N(l);if(O<0||Z<0||j>K||I>J)return{};if(h==="vertical"){const ce={left:j+"px",top:Z+10+"px",right:"auto",bottom:"auto"};let pe="lt";j+le>K&&(ce.left=O-le+"px",pe="rt"),Z+10+ue>J&&(ce.top=I-10-ue+"px",pe=pe==="lt"?"lb":"rb"),u(l,ce),ie(l,pe)}else{const ce={left:O+10+"px",top:I+"px",right:"auto",bottom:"auto"};let pe="tl";O+10+le>K&&(ce.left=j-10-le+"px",pe="tr"),I+ue>J&&(ce.top=Z-ue+"px",pe=pe==="tl"?"bl":"br"),u(l,ce),ie(l,pe)}};var Oe=(i,l,h="horizontal")=>{const j=R(ne),O=()=>j(i,l,h);window.addEventListener("scroll",O,!1),window.addEventListener("resize",O,!1);const I=()=>{window.removeEventListener("scroll",O),window.removeEventListener("resize",O),u(l,{left:"",top:"",right:"",bottom:""})};return ne(i,l,h),I},bt=({open:i,delay:l=250,children:h,mountNode:j,style:O,className:I="huxy-mask"})=>{const[Z]=Mt(i,l);return(0,a.jsx)(ht,{mountNode:j,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:I,children:(0,a.jsx)("div",{style:{...O,display:Z?"block":"none"},children:h})})})})},nt=te(199),Qe={};Qe.styleTagTransform=L(),Qe.setAttributes=_(),Qe.insert=p().bind(null,"head"),Qe.domAPI=g(),Qe.insertStyleElement=q();var et=d()(nt.Z,Qe),Pt=nt.Z&&nt.Z.locals?nt.Z.locals:void 0,vt=({trigger:i="click",type:l,dropList:h,className:j,children:O,...I})=>{const[Z,K]=(0,H.useState)(!1),J=(0,H.useRef)(),le=(0,H.useRef)(),ue=(0,H.useRef)();pt(J,De=>Z&&K(!1),[...new Set(["click",i.toLowerCase()])]),(0,H.useEffect)(()=>()=>{var De;return(De=ue.current)==null?void 0:De.call(ue)},[]);const ce=De=>{De.preventDefault(),K(!0),ue.current=Oe(J.current,le.current,l)},pe={[`on${tr(i)}`]:ce},Ee=["drop-wrap",Z?"open":""].filter(Boolean).map(De=>Pt[De]).join(" "),Ne=er(h)?h:h==null?void 0:h(()=>K(!1),Z);return(0,a.jsxs)("span",{ref:J,className:`${Pt["drop-target"]}${j?` ${j}`:""}`,...pe,...I,children:[O,(0,a.jsx)(bt,{open:Z,className:"huxy-drop",children:(0,a.jsx)("div",{ref:le,className:Ee,children:Ne})})]})},wt=(i,l,h)=>{if(!Re())return;h=G(h)?h.current:h!=null?h:document.body;const j=document.createElement("span");j.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),l&&u(j,l),j.innerText=(i!=null?i:"").replace(/[\r\n]/g,""),h.appendChild(j);const O=j.getBoundingClientRect();return h.removeChild(j),O},tt=te(198),Ze={};Ze.styleTagTransform=L(),Ze.setAttributes=_(),Ze.insert=p().bind(null,"head"),Ze.domAPI=g(),Ze.insertStyleElement=q();var Zt=d()(tt.Z,Ze),Nr=tt.Z&&tt.Z.locals?tt.Z.locals:void 0,cr=({title:i,placement:l="topRight",children:h,ellipsis:j,className:O,...I})=>(0,a.jsx)("span",{className:`${Nr[`huxy-tooltip-${l}`]}${O?` ${O}`:""}`,tooltip:i!=null?i:h,...I,children:(0,a.jsx)("span",{className:j?Nr.ellipsis:"",children:h})});const Cr={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},Ir=i=>{var l,h,j,O;const{children:I,style:Z}=i,K=typeof I=="string",J=K?I:(j=(l=I==null?void 0:I.props)==null?void 0:l.title)!=null?j:(h=I==null?void 0:I.props)==null?void 0:h.children,le=(0,H.useRef)(),[ue,ce]=(0,H.useState)(!0);return(0,H.useEffect)(()=>{if(le.current){const{width:pe}=wt(J,null,le.current.parentNode),{width:Ee}=mt(le.current),Ne=~~pe>~~Ee;Ne!==ue&&ce(Ne)}},[J]),(0,a.jsx)("span",{ref:le,style:{display:"flex",width:"100%",...Z},children:ue?K?(0,a.jsx)(cr,{...i,ellipsis:!0}):(0,a.jsx)("span",{style:Cr,children:I}):K?I:(O=I==null?void 0:I.props)==null?void 0:O.children})};var jr=i=>i.children==null?"":(0,a.jsx)(Ir,{...i}),Ht=Object.defineProperty,Er=(i,l,h)=>l in i?Ht(i,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[l]=h,Pr=(i,l,h)=>(Er(i,typeof l!="symbol"?l+"":l,h),h);class Sr extends He().Component{constructor(){super(...arguments),Pr(this,"state",{error:null})}static getDerivedStateFromError(l){return{error:l}}componentDidCatch(l,h){const{errorReport:j}=this.props;typeof j=="function"&&j({error:l,info:h.componentStack})}render(){const{error:l}=this.state,{fallback:h,children:j}=this.props;return l?h(l):j}}var dr=i=>l=>{if(typeof l=="function"||typeof(l==null?void 0:l.render)=="function")return(0,a.jsx)(l,{});if(typeof l=="string"){const h=i==null?void 0:i[l];return h?(0,a.jsx)(h,{}):(0,a.jsx)("i",{className:l})}return l!=null?l:null};const fr=i=>dr(i);var hr=i=>({icon:l,defaultIcon:h})=>l?fr(i)(l):l===!1?null:h;const or=["","webkit","moz","ms"],Dr=i=>or.map(l=>l?`${l}FullscreenElement`:"fullscreenElement").find(l=>i[l]),Ar=i=>or.map(l=>l?`${l}RequestFullscreen`:"requestFullscreen").find(l=>i[l]),nr=i=>or.map(l=>l?`${l}ExitFullscreen`:"exitFullscreen").find(l=>i[l]),pr=or.map(i=>`${i}fullscreenchange`);var Yt=i=>{var l,h;if(!Re())return;i=G(i)?i.current:i!=null?i:document.body;const j=Dr(document),O=Ar(i),I=nr(document);document[j]?(h=document[I])==null||h.call(document):(l=i[O])==null||l.call(i)},Dt=i=>Re()?(pr.map(l=>document.addEventListener(l,i,!1)),()=>pr.map(l=>document.removeEventListener(l,i,!1))):void 0;const _r=i=>(0,a.jsx)("i",{...i,children:"..."});var Vt=({panel:i,fullIcon:l=_r,exitIcon:h=_r,...j})=>{const O=G(i)?i.current:i,[I,Z]=(0,H.useState)();(0,H.useEffect)(()=>{const J=Dt(()=>{Z(le=>!le)});return()=>J()},[]);const K=I?h:l;return(0,a.jsx)(K,{onClick:J=>Yt(O),...j})},zr=(i,l)=>(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...l}),$r=i=>{const{error:l={},info:h=""}=i||{},{message:j,stack:O,errMsg:I}=l;let Z=I||O||l.toString();Z=`${Z}
${h}`.replace(/\r|\n|\r\n/g,"<br/>"),Z=Z.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Z=Z.replace(/\s/g,"&nbsp;");const K=j==null?void 0:j.slice(0,120).split(". ").slice(0,2).join(". ");return(0,a.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[zr(Z,{style:{color:"red"}}),K&&(0,a.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${K}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Br=({children:i,report:l})=>{var h;const j=(0,H.useRef)();return(h=j.current)!=null&&h.state&&(j.current.state.error=null),(0,a.jsx)(Sr,{ref:j,fallback:(O,I)=>$r({error:O,info:I}),errorReport:l,children:i})};const Fr=(i,l)=>Object.keys(l).map(h=>i.style[h]=l[h]),Lr=(i,l)=>Object.keys(l).map(h=>i.style[h]=""),s={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},f=({left:i,top:l,width:h,height:j})=>({left:`${i}px`,top:`${l}px`,width:`${h}px`,height:`${j}px`}),C=i=>(0,a.jsx)("i",{...i,children:"..."}),v=i=>{const{left:l,top:h}=mt(i),{width:j,height:O}=at(i);return{left:l,top:h,width:j,height:O}};var x=({panel:i,target:l,fullIcon:h=C,exitIcon:j=C})=>{i=G(i)?i.current:i||document.body;const[O,I]=(0,H.useState)(),Z=(0,H.useRef)(),K=(0,H.useRef)();(0,H.useEffect)(()=>{const ue=typeof l=="function"?l:()=>document.getElementsByClassName(l)[0];K.current=f(v(ue())),Z.current={...s,...f(v(i))}},[i]);const J=(ue,ce)=>{ue?(Fr(ce,Z.current),setTimeout(()=>{Fr(ce,K.current)},0)):Lr(ce,Z.current),I(ue)},le=O?j:h;return(0,a.jsx)(le,{onClick:ue=>J(!O,i)})},D=te(514),M={};M.styleTagTransform=L(),M.setAttributes=_(),M.insert=p().bind(null,"head"),M.domAPI=g(),M.insertStyleElement=q();var X=d()(D.Z,M),A=D.Z&&D.Z.locals?D.Z.locals:void 0,B=({open:i,close:l,hasMask:h=!0,cancelText:j="\u53D6\u6D88",submit:O,submitText:I="\u786E\u5B9A",title:Z="Modal \u5F39\u7A97",className:K,children:J,delay:le=250,...ue})=>{var ce;const pe=["modal-wrap",i?"open":"",...(ce=K==null?void 0:K.split(" "))!=null?ce:[]].filter(Boolean).map(Ee=>A[Ee]).join(" ");return(0,a.jsx)(It,{open:i,close:l,delay:le,hasMask:h,className:"huxy-modal",children:(0,a.jsx)("div",{className:pe,...ue,children:(0,a.jsxs)("div",{className:A["modal-container"],children:[(0,a.jsx)("div",{className:A["modal-header"],children:Z}),(0,a.jsx)("div",{className:A["modal-content"],children:J}),(0,a.jsxs)("div",{className:A["modal-footer"],children:[(0,a.jsx)("div",{className:`${A.btn} ${A.left}`,onClick:Ee=>l==null?void 0:l(Ee),children:j}),(0,a.jsx)("div",{className:`${A.btn} ${A.right}`,onClick:Ee=>O==null?void 0:O(Ee),children:I})]})]})})})},se=te(897),fe={};fe.styleTagTransform=L(),fe.setAttributes=_(),fe.insert=p().bind(null,"head"),fe.domAPI=g(),fe.insertStyleElement=q();var Se=d()(se.Z,fe),he=se.Z&&se.Z.locals?se.Z.locals:void 0,ye=({global:i,absolute:l})=>(0,a.jsx)("div",{className:`spinner${i?" global":""}${l?" absolute":""}`,children:(0,a.jsx)("figure",{className:"spinning"})}),Ce=te(408),re={};re.styleTagTransform=L(),re.setAttributes=_(),re.insert=p().bind(null,"head"),re.domAPI=g(),re.insertStyleElement=q();var ae=d()(Ce.Z,re),je=Ce.Z&&Ce.Z.locals?Ce.Z.locals:void 0;const Ie=i=>{var l;return(l=i==null?void 0:i.filter)==null?void 0:l.call(i,h=>typeof h=="function")},Be=(i,l)=>{const h=(0,H.useRef)(),{loading:j,title:O,plugins:I,children:Z,className:K,...J}=i,le=Ie(I),ue=le==null?void 0:le.length,ce=K?` ${K}`:"",pe=G(l)?l:h;return(0,a.jsxs)("div",{className:`${je.panel}${ce}`,...J,ref:pe,children:[(O||ue)&&(0,a.jsxs)("div",{className:je["panel-header"],children:[O&&(0,a.jsx)("h4",{className:je["panel-title"],children:O}),ue&&(0,a.jsx)("div",{className:je["panel-plugins"],children:le.map((Ee,Ne)=>(0,a.jsx)("span",{className:"link",children:(0,a.jsx)(Ee,{panel:pe})},Ne))})]}),(0,a.jsx)("div",{className:je["panel-body"],children:Z}),j&&(0,a.jsx)(ye,{})]})};var Ye=(0,H.forwardRef)(Be),Ve=te(836),Xe={};Xe.styleTagTransform=L(),Xe.setAttributes=_(),Xe.insert=p().bind(null,"head"),Xe.domAPI=g(),Xe.insertStyleElement=q();var mr=d()(Ve.Z,Xe),Ut=Ve.Z&&Ve.Z.locals?Ve.Z.locals:void 0;const zt=({gutter:i=10,className:l,overflow:h="hidden",...j},O)=>{var I;const Z=l?` ${l}`:"";let K=10;if(Array.isArray(i)){const J=[...i];i=J[0],K=(I=J[1])!=null?I:J[0]}return(0,a.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(K/2)}px`,overflow:h},children:(0,a.jsx)("div",{className:`row${Z}`,...j,ref:O})})};var At=(0,H.forwardRef)(zt),$t=i=>Rt(i)==="array",xt=i=>$t(i)&&!!i.length;const Rr=({to:i,preventDefault:l,stopPropagation:h,...j})=>l?(0,a.jsx)("span",{...j}):(0,a.jsx)("a",{href:i,...j}),qe=({item:i,...l})=>(0,a.jsx)("ul",{...l}),kt=(i,...l)=>{const h={};return Object.keys(i).filter(Boolean).map(j=>{h[j]=O=>i[j](O,...l)}),h},xr=({data:i=[],events:l={},List:h=qe,Link:j=Rr,leftIcon:O,rightIcon:I,isHorizontal:Z,isCollapsed:K,level:J=0,parentOpen:le=!0})=>{const ue=K&&!J,ce=!Z&&!K&&!le;return i.map(pe=>{var Ee;const{name:Ne,path:De,icon:Fe,rightIcon:ke,active:Pe,open:yt,children:qt,linkProps:Bt}=pe,vr=xt(qt),jt=pe.id||De||Ne,sr=ue?(Ee=pe.title)!=null?Ee:Ne:void 0,Lt=ce?"hidden":"",Tt=Fe!=null?Fe:O,ct=ke!=null?ke:I,Ot=Tt?(0,a.jsx)("div",{className:"node-left-icon",children:Tt===!0?(0,a.jsx)("i",{className:"default-left-icon"}):Tt}):null,Yr=Ne?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:Ne})}):null;if(vr){const Jr=kt(l,pe,J),Qr=[Lt,yt?"open":""].filter(Boolean).join(" ");return(0,a.jsxs)("li",{className:Qr,"has-children":"true",...Jr,children:[(0,a.jsxs)(j,{title:sr,className:`link${Pe?" active":""}`,to:De,preventDefault:!0,stopPropagation:!1,...Bt,children:[Ot,Yr,ct?(0,a.jsx)("div",{className:"node-right-icon",children:ct===!0?(0,a.jsx)("i",{className:"default-right-icon"}):ct}):null]}),(0,a.jsx)(h,{item:pe,children:xr({data:qt,events:l,List:h,Link:j,leftIcon:O,rightIcon:I,isHorizontal:Z,isCollapsed:K,level:J+1,parentOpen:!!yt})})]},jt)}return(0,a.jsx)("li",{className:Lt,children:(0,a.jsxs)(j,{title:sr,className:`link${Pe?" active":""}`,to:De,...Bt,children:[Ot,Yr]})},jt)})};var yr=xr,Ft=(i,...l)=>(0,a.jsx)("div",{"v-html":i,...l}),Ct=te(874),_t={};_t.styleTagTransform=L(),_t.setAttributes=_(),_t.insert=p().bind(null,"head"),_t.domAPI=g(),_t.insertStyleElement=q();var Mr=d()(Ct.Z,_t),gr=Ct.Z&&Ct.Z.locals?Ct.Z.locals:void 0;const br=i=>(0,a.jsx)("div",{style:{padding:"6px 15px"},children:i}),Wr=({activekey:i,tabs:l=[],switchTab:h,trackColor:j,flex:O,...I},Z)=>{var K;const[J,le]=(0,H.useState)(i!=null?i:(K=l[0])==null?void 0:K.key),[ue,ce]=(0,H.useState)({}),pe=(0,H.useRef)({}),Ee=(0,H.useRef)();(0,H.useEffect)(()=>{const Fe=pe.current[J];Fe&&Ne(Fe)},[]);const Ne=Fe=>{const{left:ke,width:Pe}=mt(Fe),yt=mt(Ee.current).left;ce({left:ke-yt,width:Pe})},De=(Fe,ke)=>{Fe.stopPropagation(),le(ke),typeof h=="function"&&h(ke),Ne(Fe.currentTarget)};return(0,a.jsxs)("div",{className:"tabs-header-wrap",...I,ref:Z,children:[(0,a.jsx)("ul",{className:`tabs-header${O?" flex":""}`,ref:Ee,children:l.map(Fe=>(0,a.jsx)("li",{ref:ke=>pe.current[Fe.key]=ke,className:`th-item${J===Fe.key?" active":""}`,onClick:ke=>De(ke,Fe.key),children:typeof Fe.renderTabs=="function"?Fe.renderTabs(Fe,J===Fe.key):br(Fe.value)},Fe.key))}),(0,a.jsx)("div",{className:"th-track",style:{...ue,color:j}})]})};var ir=(0,H.forwardRef)(Wr),Zr=(i,l,h="id",j="children")=>{if(!$t(i))return null;const O=I=>{for(let Z=0,K=I.length;Z<K;Z++){const J=I[Z];if(J[h]===l)return[J];if($t(J[j])){const le=O(J[j]);if(le)return[J].concat(le)}}};return O(i)};const ar=i=>++i;var Tr=()=>{const[,i]=(0,H.useState)(0);return(0,H.useCallback)(()=>i(ar),[])};const Hr=i=>{const{children:l,open:h}=i;let j=0;if(h&&l!=null&&l.length){j=l.length;let O=0;return l.map(I=>O+=Hr(I)),j+O}return j};var qr=({item:i,style:l,...h})=>(0,a.jsx)("ul",{style:{...l,"--count":Hr(i)},...h}),Or=te(454),lr={};lr.styleTagTransform=L(),lr.setAttributes=_(),lr.insert=p().bind(null,"head"),lr.domAPI=g(),lr.insertStyleElement=q();var eo=d()(Or.Z,lr),to=Or.Z&&Or.Z.locals?Or.Z.locals:void 0;const Xr=i=>(0,a.jsx)("ul",{...i}),Gr=(i,l)=>i?qr:({item:h,...j})=>(0,a.jsx)(Xr,{className:l==="right"?"left":"",...j});var Kr=i=>{var l;const{data:h=[],collapsed:j=!1,type:O="vertical",Link:I,width:Z,bgColor:K,itemHeight:J,collapsedWidth:le,itemPadding:ue,style:ce,className:pe,...Ee}=i,Ne=(0,H.useRef)(),De=(0,H.useRef)();(0,H.useEffect)(()=>()=>clearTimeout(Ne.current),[]);const Fe=Tr(),ke=O==="horizontal",Pe=!ke&&j,yt={onClick:(Lt,Tt)=>{if(Lt.stopPropagation(),!ke&&!Pe){const ct=Zr(h,Tt.path,"path"),Ot=ct[ct.length-1];Ot.open=!Ot.open,Fe()}},onMouseEnter:(Lt,Tt,ct)=>{Pe&&!ct&&(clearTimeout(Ne.current),De.current.style.width="var(--maxWidth)")},onMouseLeave:(Lt,Tt,ct)=>{Pe&&!ct&&(Ne.current=setTimeout(()=>De.current.style.width="",200))}},qt=(ke?["huxy-horizontal-tree",pe]:["huxy-tree",pe,Pe?"collapsed":""]).filter(Boolean).join(" "),{float:Bt,...vr}=(l=Ee==null?void 0:Ee.style)!=null?l:{},jt={"--bgColor":K,"--itemHeight":J,"--nodeListWidth":Z,...vr};ke?(jt["--itemPadding"]=ue,jt["--nodeFloat"]=Bt):(jt["--width"]=Z,jt["--collapsedWidth"]=le);const sr=Gr(!ke&&!Pe,Bt);return(0,a.jsx)("div",{ref:De,className:qt,style:jt,...Ee,children:(0,a.jsx)("div",{className:"huxy-tree-track",children:(0,a.jsx)("ul",{className:"huxy-tree-root",children:yr({data:h,events:yt,List:sr,Link:I,leftIcon:!0,rightIcon:!0,isHorizontal:ke,isCollapsed:Pe})})})})}}(),y}()})},4544:function(Nt,me,Ue){(function(Ae,Te){Nt.exports=Te(Ue(7378))})(this,function(Ae){return function(){"use strict";var Te={201:function(y,a,m){var d=m(703),k=m.n(d),g=m(414),S=m.n(g),p=S()(k());p.push([y.id,`@keyframes before {
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
`,""]),p.locals={},a.Z=p},982:function(y,a,m){var d=m(703),k=m.n(d),g=m(414),S=m.n(g),p=S()(k());p.push([y.id,`.Iuy_e {
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
`,""]),p.locals={link:"Iuy_e",active:"D3oJg"},a.Z=p},414:function(y){y.exports=function(a){var m=[];return m.toString=function(){return this.map(function(d){var k="",g=typeof d[5]!="undefined";return d[4]&&(k+="@supports (".concat(d[4],") {")),d[2]&&(k+="@media ".concat(d[2]," {")),g&&(k+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),k+=a(d),g&&(k+="}"),d[2]&&(k+="}"),d[4]&&(k+="}"),k}).join("")},m.i=function(d,k,g,S,p){typeof d=="string"&&(d=[[null,d,void 0]]);var $={};if(g)for(var _=0;_<this.length;_++){var U=this[_][0];U!=null&&($[U]=!0)}for(var q=0;q<d.length;q++){var F=[].concat(d[q]);g&&$[F[0]]||(typeof p!="undefined"&&(typeof F[5]=="undefined"||(F[1]="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {").concat(F[1],"}")),F[5]=p),k&&(F[2]&&(F[1]="@media ".concat(F[2]," {").concat(F[1],"}")),F[2]=k),S&&(F[4]?(F[1]="@supports (".concat(F[4],") {").concat(F[1],"}"),F[4]=S):F[4]="".concat(S)),m.push(F))}},m}},703:function(y){y.exports=function(a){return a[1]}},53:function(y,a,m){var d,k=m(899),g=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function U(q,F,L){var W,ee={},xe=null,ve=null;L!==void 0&&(xe=""+L),F.key!==void 0&&(xe=""+F.key),F.ref!==void 0&&(ve=F.ref);for(W in F)p.call(F,W)&&!_.hasOwnProperty(W)&&(ee[W]=F[W]);if(q&&q.defaultProps)for(W in F=q.defaultProps,F)ee[W]===void 0&&(ee[W]=F[W]);return{$$typeof:g,type:q,key:xe,ref:ve,props:ee,_owner:$.current}}d=S,a.jsx=U,a.jsxs=U},458:function(y,a,m){y.exports=m(53)},748:function(y){var a=[];function m(g){for(var S=-1,p=0;p<a.length;p++)if(a[p].identifier===g){S=p;break}return S}function d(g,S){for(var p={},$=[],_=0;_<g.length;_++){var U=g[_],q=S.base?U[0]+S.base:U[0],F=p[q]||0,L="".concat(q," ").concat(F);p[q]=F+1;var W=m(L),ee={css:U[1],media:U[2],sourceMap:U[3],supports:U[4],layer:U[5]};if(W!==-1)a[W].references++,a[W].updater(ee);else{var xe=k(ee,S);S.byIndex=_,a.splice(_,0,{identifier:L,updater:xe,references:1})}$.push(L)}return $}function k(g,S){var p=S.domAPI(S);p.update(g);var $=function(_){if(_){if(_.css===g.css&&_.media===g.media&&_.sourceMap===g.sourceMap&&_.supports===g.supports&&_.layer===g.layer)return;p.update(g=_)}else p.remove()};return $}y.exports=function(g,S){S=S||{},g=g||[];var p=d(g,S);return function($){$=$||[];for(var _=0;_<p.length;_++){var U=p[_],q=m(U);a[q].references--}for(var F=d($,S),L=0;L<p.length;L++){var W=p[L],ee=m(W);a[ee].references===0&&(a[ee].updater(),a.splice(ee,1))}p=F}}},736:function(y){var a={};function m(k){if(typeof a[k]=="undefined"){var g=document.querySelector(k);if(window.HTMLIFrameElement&&g instanceof window.HTMLIFrameElement)try{g=g.contentDocument.head}catch(S){g=null}a[k]=g}return a[k]}function d(k,g){var S=m(k);if(!S)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");S.appendChild(g)}y.exports=d},706:function(y){function a(m){var d=document.createElement("style");return m.setAttributes(d,m.attributes),m.insert(d,m.options),d}y.exports=a},567:function(y,a,m){function d(k){var g=m.nc;g&&k.setAttribute("nonce",g)}y.exports=d},306:function(y){function a(k,g,S){var p="";S.supports&&(p+="@supports (".concat(S.supports,") {")),S.media&&(p+="@media ".concat(S.media," {"));var $=typeof S.layer!="undefined";$&&(p+="@layer".concat(S.layer.length>0?" ".concat(S.layer):""," {")),p+=S.css,$&&(p+="}"),S.media&&(p+="}"),S.supports&&(p+="}");var _=S.sourceMap;_&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(_))))," */")),g.styleTagTransform(p,k,g.options)}function m(k){if(k.parentNode===null)return!1;k.parentNode.removeChild(k)}function d(k){var g=k.insertStyleElement(k);return{update:function(S){a(g,k,S)},remove:function(){m(g)}}}y.exports=d},62:function(y){function a(m,d){if(d.styleSheet)d.styleSheet.cssText=m;else{for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(document.createTextNode(m))}}y.exports=a},899:function(y){y.exports=Ae}},be={};function Q(y){var a=be[y];if(a!==void 0)return a.exports;var m=be[y]={id:y,exports:{}};return Te[y](m,m.exports,Q),m.exports}(function(){Q.n=function(y){var a=y&&y.__esModule?function(){return y.default}:function(){return y};return Q.d(a,{a}),a}})(),function(){Q.d=function(y,a){for(var m in a)Q.o(a,m)&&!Q.o(y,m)&&Object.defineProperty(y,m,{enumerable:!0,get:a[m]})}}(),function(){Q.o=function(y,a){return Object.prototype.hasOwnProperty.call(y,a)}}(),function(){Q.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})}}(),function(){Q.nc=void 0}();var te={};return function(){Q.r(te),Q.d(te,{Link:function(){return $r},emitRoute:function(){return Lr},getRoute:function(){return Fr},useRoute:function(){return Br},useRouter:function(){return nr}});var y=Q(899),a=Q.n(y),m=s=>Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),d=s=>m(s)==="array",k=s=>m(s)==="object",g=s=>(s==null?void 0:s.$$typeof)&&typeof s.$$typeof=="symbol"&&s.$$typeof.description==="react.element",S=s=>s==null?void 0:s.__v_isVNode,p=(s,f)=>Object.prototype.hasOwnProperty.call(s!=null?s:{},f);const $=s=>{if(!d(s)&&!k(s))return s;const f=d(s)?[]:{};for(const C in s)if(p(s,C)){const v=s[C];f[C]=g(v)||S(v)||typeof v!="object"?v:v!==s?$(v):"cyclic"}else Object.setPrototypeOf(f,{[C]:s[C]});return f};var _=$,U=s=>m(s)==="function",q=s=>m(s)==="promise"||k(s)&&U(s.then),F=(s,f=12e4,C="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!q(s))return{};let v=null,x=null;return{promiseFn:new Promise((D,M)=>{v=(X="canceled")=>{clearTimeout(x),D({canceled:!0,errMsg:X})},f&&(f=typeof f!="number"?12e4:f,x=setTimeout(()=>v(C),f)),s.then(X=>{clearTimeout(x),D({result:X,errMsg:!1})}).catch(X=>{clearTimeout(x),M(X)})}),cancelFn:v}},L=s=>s?s.charAt(s.length-1)==="/"?s.slice(0,-1):s:"",W=Q(458),ee=(s,f)=>(0,W.jsx)("div",{dangerouslySetInnerHTML:{__html:s},...f}),xe=s=>{const{error:f={},info:C=""}=s||{},{message:v,stack:x,errMsg:D}=f;let M=D||x||f.toString();M=`${M}
${C}`.replace(/\r|\n|\r\n/g,"<br/>"),M=M.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),M=M.replace(/\s/g,"&nbsp;");const X=v==null?void 0:v.slice(0,120).split(". ").slice(0,2).join(". ");return(0,W.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[ee(M,{style:{color:"red"}}),X&&(0,W.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${X}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},ve=()=>{const s={};return{on:(f,C)=>{s[f]||(s[f]=[]),s[f].indexOf(C)===-1&&s[f].push(C)},emit:(f,C)=>{s[f]&&s[f].map(v=>v(C))},off:(f,C=null)=>{if(s[f]){if(typeof C!="function")return delete s[f];const v=s[f].indexOf(C);v>-1&&(s[f].splice(v,1),s[f].length||delete s[f])}}}};const Ge=s=>{const f={};for(let C in s)p(s,C)||(f[C]=s[C]);return f};var it=(s,f)=>{if(!k(s))return f;if(!k(f))return s;const C={...Ge(s),...Ge(f)},v={...s,...f};return Object.keys(C).map(x=>{Object.setPrototypeOf(v,{[x]:C[x]})}),v},H=()=>{const{on:s,emit:f,off:C}=ve(),v={};return{getState:x=>_(v[x]),setState:(x,D=!1)=>{if(typeof x=="function"&&(x=x(_(v))),!k(x))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const M=_(x);Object.keys(M).map(X=>{const A=v[X],B=M[X],se=k(B)&&k(A)?it(A,B):B;!D&&f(X,se),v[X]=se})},subscribe:(x,D)=>(s(x,D),()=>C(x,D)),unsubscribe:C,clean:x=>{typeof x=="string"?v[x]=void 0:Array.isArray(x)?x.map(D=>v[D]=void 0):Object.keys(v).map(D=>v[D]=void 0)}}},He=s=>(f,C)=>{const[v,x]=(0,y.useState)(()=>{const A=s==null?void 0:s.getState(f);return A!==void 0?A:(C!==void 0&&(s==null||s.setState({[f]:C},!0)),C)}),D=(0,y.useCallback)(A=>s==null?void 0:s.setState({[f]:typeof A=="function"?A(s==null?void 0:s.getState(f)):A}),[]),M=(0,y.useCallback)(A=>s==null?void 0:s.subscribe(f,A),[]),X=(0,y.useCallback)((A=A)=>s==null?void 0:s.clean(A),[]);return(0,y.useEffect)(()=>{s==null||s.subscribe(f,A=>x(A))},[]),[v,D,M,X]};const _e=H(),Re=He(_e),Rt=ve(),dt=ve(),at="push-emitter",R="replace-emitter",oe="useRoute-emitter",G={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},we="/404",$e={getState:()=>history.state,go:s=>history.go(s),forward:()=>history.forward(),back:()=>history.back()},rt=(s,f,C,v,x=[])=>{const D=A=>{for(let B=0,se=A.length;B<se;B++){const fe=A[B],Se=fe[v].split("?")[0];if(new RegExp("^"+Se.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return fe;if(d(fe[C])){const he=D(fe[C]);if(he)return he}}},M=D(s);if(!M)return we;const{redirect:X}=M;return X?x.includes(X)?x:(x.push(X),rt(s,X.split("?")[0],C,v,x)):x[x.length-1]},Ke=(s,f,C,v,x)=>{if(!d(s))return null;const D=se=>{const fe=se.split("/"),Se=f.split("/"),he={};return fe.map((ye,Ce)=>ye.indexOf(":")===0&&(he[ye.slice(1)]=Se[Ce])),he},M=(se,fe)=>{const Se=[],he=fe.split("/:")[0];for(let ye=0,Ce=se.length;ye<Ce;ye++){const re=se[ye];if(re[x]===he){re.active=!0;const{name:ae,title:je,icon:Ie,params:Be}=re;Se.push({name:ae,title:je,icon:Ie,params:Be,[x]:he})}else if(fe.indexOf(`${re[x]}/`)===0){re.active=!0;const ae=D(re[x]),je=Object.keys(ae).map(Xe=>ae[Xe]).join("/"),{name:Ie,title:Be,icon:Ye}=re,Ve=je?`${he}/${je}`:re[x];Se.push({name:Ie,title:Be,icon:Ye,[x]:Ve,params:{...re.params,...ae}})}else if(re[x]===fe){re.active=!0;const ae=D(re[x]),{[v]:je,...Ie}=re;Se.push({...Ie,[x]:f,params:{...Ie.params,...C,...ae}})}}return Se},X=(se,fe)=>{for(let Se=0,he=se.length;Se<he;Se++){const ye=se[Se];if(fe.indexOf(`${ye[x]}/`)===0){ye.active=!0;return}}},A=se=>{for(let fe=0,Se=se.length;fe<Se;fe++){const he=se[fe],ye=(he[x]||"").split("?")[0];if(ye===f){he.hideMenu&&X(se,he.parentPath||ye),he.active=!0;const{[v]:Ce,...re}=he;return[{...re,params:{...re.params,...C}}]}if(new RegExp("^"+ye.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return M(se,ye);if(d(he[v])){const Ce=A(he[v]);if(Ce){he.active=!0,he.open=!0;const{[v]:re,...ae}=he;return[ae,...Ce]}}}},B=A(s)||[];return{result:s,current:B}},ft=(s,f,C)=>s.filter(v=>v.hideMenu||v[C].indexOf("/:")>-1?!1:(d(v[f])&&(v[f]=ft(v[f],f,C)),!0));var Me=(s,f,C,v="children",x="path")=>{const D=rt(s,f,v,x);if(D)return{redirect:D};const{result:M,current:X}=Ke(s,f,C,v,x),A=ft(M,v,x);return{current:X,menu:A}},We=s=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(s);const Et=(s,f)=>{const C=["#/","/"],v=C[!!f-0];if(!s||C.includes(s))return v;const x=s.charAt(s.length-1)==="/"?s.slice(0,-1):s;return f||x.indexOf("#/")>-1?x:`#${x}`},Je=(s,f,C,v=!1)=>{const x=Et(f,C);return v?x:C?s&&x==="/"?s:`${s}${x}`:s?`${s}/${x}`:x},Gt=(s,f,C,v,x,D)=>{if(!d(s))return s;const M=(X,A="")=>X.filter(B=>!B.denied).map(B=>{if(!D&&!B.exact&&!We(B[v])){(!B[v]||B[v]==="javascript:;")&&(B[v]="");const se=B[v].charAt(0)==="/"&&A.charAt(A.length-1)==="/"?B[v].slice(1):B[v].charAt(0)!=="/"&&A.charAt(A.length-1)!=="/"?`/${B[v]}`:B[v];B[v]=A?A+se:Je(x,se,f)}return B.redirect&&(B.redirect=Je(x,B.redirect,f)),d(B[C])&&(B[C]=M(B[C],B[v]),!B.redirect&&B[C].length&&(B.redirect=B[C][0][v])),B});return M(s)};var lt=s=>{if(!k(s))return"";const f=[];return Object.keys(s).map((C,v)=>{const x=v>0?"&":"?";f.push(`${x}${C}=${s[C]}`)}),f.join("")},St=(s="")=>{const[f,C]=s.split("?");if(C){const v={};return C.split("&").map(x=>{const[D,M]=x.split("=");v[D]=M}),{path:f,params:v}}return{path:f}};const Kt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Jt=(s,f)=>{for(let C=s.length-1,v;v=s[C--];){const{title:x,name:D}=v;if(typeof x=="string"&&x.length)return document.title=x;if((x==null||x===!0)&&D)return document.title=f?`${D}-${f}`:D;if(f)return document.title=f}},Mt=s=>{const{pathname:f,search:C,hash:v}=location;if(s){const X=Et(f,s),A=decodeURIComponent(`${X}${C}`),{params:B}=St(A);return{path:A,params:B}}const x=decodeURIComponent(Et(v,s)),{params:D}=St(x),M=L(f);return{path:M?`${M}/${x}`:x,params:D}},ht=(s,f,C)=>{typeof s=="function"&&s({...f,stay:new Date-C})},ot=(s,f,C,v)=>{let x,D,M;if(typeof s=="string")x=s;else if(k(s))x=s.path,D=s.params,M=s.query;else return;!x||x==="."||x==="./"?x=v:x.indexOf("./")===0?x=`${v.split("?")[0]}${x.replace("./","/")}`:x.indexOf("../")===0&&(x=`${v.split("?")[0].split("/").slice(0,-1).join("/")}${x.replace("../","/")}`),x=Je(f,x,C,s==null?void 0:s.exact);const X=St(x);x=X.path;const A={...X.params,...M},B=lt(A);return x=`${x}${B}`,D={...D,...A},{path:x,params:D}},Qt=(s,f)=>{const C=s.split(f);return C.length>1?["","/"].includes(C[1].slice(0,1)):!1},ur=ve();var It=s=>{const{on:f,emit:C,off:v}=ur;return{on:x=>f(s,x),emit:x=>C(s,x),off:x=>v(s,x)}},st=s=>(f,C)=>{const{getState:v,setState:x,subscribe:D,unsubscribe:M,clean:X}=s;return C!==void 0&&x({[f]:C},!0),{getState:()=>v(f),setState:(A,B)=>x({[f]:A},B),subscribe:A=>D(f,A),unsubscribe:()=>M(f),clean:()=>X(f)}};const gt=H();var kr=st(gt);const ut=It("push-emitter"),Wt=It("replace-emitter"),pt=kr("route-store"),er=ve(),tr=H(),mt=He(tr);var rr=()=>![typeof window,typeof document].includes("undefined"),u=s=>{if(!rr())return;const f=document.createElement("div");return f.innerHTML=s,f.children[0]},w=Object.defineProperty,E=(s,f,C)=>f in s?w(s,f,{enumerable:!0,configurable:!0,writable:!0,value:C}):s[f]=C,T=(s,f,C)=>(E(s,typeof f!="symbol"?f+"":f,C),C);class N extends a().Component{constructor(){super(...arguments),T(this,"state",{error:null})}static getDerivedStateFromError(f){return{error:f}}componentDidCatch(f,C){const{errorReport:v}=this.props;typeof v=="function"&&v({error:f,info:C.componentStack})}render(){const{error:f}=this.state,{fallback:C,children:v}=this.props;return f?C(f):v}}var Y=({children:s,report:f})=>{var C;const v=(0,y.useRef)();return(C=v.current)!=null&&C.state&&(v.current.state.error=null),(0,W.jsx)(N,{ref:v,fallback:(x,D)=>xe({error:x,info:D}),errorReport:f,children:s})},de=Q(748),ie=Q.n(de),ne=Q(306),Oe=Q.n(ne),bt=Q(736),nt=Q.n(bt),Qe=Q(567),et=Q.n(Qe),Pt=Q(706),vt=Q.n(Pt),wt=Q(62),tt=Q.n(wt),Ze=Q(201),Zt={};Zt.styleTagTransform=tt(),Zt.setAttributes=et(),Zt.insert=nt().bind(null,"head"),Zt.domAPI=Oe(),Zt.insertStyleElement=vt();var Nr=ie()(Ze.Z,Zt),cr=Ze.Z&&Ze.Z.locals?Ze.Z.locals:void 0,Cr=({global:s,absolute:f})=>(0,W.jsx)("div",{className:`spinner${s?" global":""}${f?" absolute":""}`,children:(0,W.jsx)("figure",{className:"spinning"})}),Ir=()=>{const s=(0,y.useRef)([]);return(0,y.useEffect)(()=>()=>{s.current.map(f=>f.cancelFn()),s.current=[]},[]),{cancelablePromise:(0,y.useCallback)((f,C=!0)=>{const v=F(f,C);return s.current.indexOf(v)===-1&&s.current.push(v),v.promiseFn},[])}},jr=(s={})=>{const{cancelablePromise:f}=Ir(),[C,v]=(0,y.useState)(s),x=(0,y.useRef)({}),D=(0,y.useRef)({}),M=(0,y.useCallback)((A=null)=>{Array.isArray(A)&&A.length?A.map(B=>x.current[B]=s[B]):x.current=s},[]),X=(0,y.useCallback)((A,B,se=!1)=>{const fe=Object.keys(A),Se=JSON.stringify(fe.sort());if(!D.current[Se]){D.current[Se]=!0,se&&M(Array.isArray(se)?se:fe),fe.map(he=>{x.current[he]||(x.current[he]={}),x.current[he].pending=!0}),v({...x.current});for(let he=0,ye=fe.length;he<ye;he++){const Ce=fe[he];f(A[Ce]).then(re=>{let{result:ae,errMsg:je}=re;he===ye-1&&(D.current[Se]=!1),typeof B=="function"&&(ae=B(ae)||ae),x.current[Ce]={...ae,pending:!1},je===!1&&v({...x.current})}).catch(re=>{throw he===ye-1&&(D.current[Se]=!1),x.current[Ce]={error:re,pending:!1},v({...x.current}),re})}}},[]);return[C,X,M]};const Ht=s=>Object.keys(s).length;var Er=s=>{const{Comp:f,restResolve:C,loadPromise:v,params:x,children:D}=s,[M,X]=jr(),[A,B]=jr();return(0,y.useEffect)(()=>{Ht(C)&&X(C),Ht(v)&&B(v)},[C,v]),(0,y.useEffect)(()=>{const se=Ht(M);se&&se===Ht(C)&&x.store.setState(M)},[M]),(0,W.jsx)(f,{...x,...M,...A,children:D})};const Pr=s=>s===!1?null:g(s)?s:U(s)?(0,W.jsx)(s,{}):(0,W.jsx)(Cr,{}),Sr=({Loading:s,ErrorBoundary:f,loadedComp:C})=>{const v=(0,W.jsx)(y.Suspense,{fallback:Pr(s),children:C});return f===!1?v:U(f)?(0,W.jsx)(f,{children:v}):(0,W.jsx)(Y,{children:v})};var dr=({Comp:s,routerProps:f,children:C})=>{const{params:v,...x}=f,{loading:D,errorBoundary:M,...X}=v,A=(0,W.jsx)(Er,{Comp:s,...x,params:X,children:C});return Sr({Loading:D,ErrorBoundary:M,loadedComp:A})};const fr={},hr=(s,f,C,v)=>q(C)?C.then(x=>{var D;return dr({Comp:s,routerProps:f,children:(D=x.default)!=null?D:x})}):dr({Comp:s,routerProps:f,children:C}),or=(s,f,C)=>{const v={},x={};return k(s)?(Object.keys(s).map(D=>{const M=f.getState(D);M==null?x[D]=s[D](C):v[D]=M}),{cachedResolve:v,restResolve:x}):{cachedResolve:v,restResolve:x}},Dr=(s,f)=>{if(!k(s))return{};const C={};return Object.keys(s).map(v=>C[v]=s[v](f)),C};var Ar=s=>{const{current:f,menu:C,...v}=s,x=f.map(X=>{const{component:A,resolve:B,loadData:se,loading:fe,errorBoundary:Se,icon:he,...ye}=X;return ye}),D=[...f].filter(X=>X.component),M=(X=0)=>{if(!D.length)return null;const A=D.shift(),{component:B,resolve:se,loadData:fe,icon:Se,key:he,...ye}=A;if(typeof B=="function"||q(B)){const Ce=ye.path;let re=fr[Ce];const{cachedResolve:ae,restResolve:je}=or(se,v.store,ye),Ie={loadPromise:Dr(fe,ye),restResolve:je,params:{current:x,...v,...ye,...ae}},Be=M(X+1);if(re)return hr(re,Ie,Be,Ce);try{re=B(),re=g(re)?B:re}catch(Ye){re=B}return q(re)?re.then(Ye=>{var Ve;return re=(Ve=Ye.default)!=null?Ve:Ye,fr[Ce]=re,hr(re,Ie,Be,Ce)}):(fr[Ce]=re,hr(re,Ie,Be,Ce))}return typeof B=="string"?u(B):B};return M()},nr=s=>{const[f,C]=(0,y.useState)(s),[v,x]=(0,y.useState)(),[D,M]=(0,y.useState)(),X=(0,y.useRef)(),A=(0,y.useRef)(),B=(0,y.useRef)(),se=(0,y.useRef)(),fe=()=>{typeof X.current=="function"&&(X.current({cancel:G.cancelMsg}),X.current=null)},Se=(0,y.useCallback)(ae=>{typeof ae=="function"?C(je=>({...je,...ae(je)})):k(ae)&&C(je=>({...je,...ae}))},[]),he=(ae,je="pushState")=>{const{basepath:Ie,browserRouter:Be}=se.current,Ye=B.current,{path:Ve,params:Xe}=ot(ae,Ie,Be,Ye);Ve!==Ye&&re({inputPath:Ve,inputParams:Xe},()=>history[je](ae==null?void 0:ae.state,"",Ve))},ye=(0,y.useCallback)(ae=>he(ae),[]),Ce=(0,y.useCallback)(ae=>he(ae,"replaceState"),[]),re=(0,y.useCallback)(({inputPath:ae="",inputParams:je={}},Ie)=>{const Be=+new Date,{browserRouter:Ye,childKey:Ve,idKey:Xe,title:mr,routers:Ut,beforeRender:zt,afterRender:At,basepath:$t,allowedNotFound:xt,...Rr}=se.current;if(!ae){const{path:qe,params:kt}=Mt(Ye);ae=qe,je={...je,...kt}}new Promise((qe,kt)=>{Ut!=null&&Ut.length||kt("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),ae!==B.current&&typeof zt=="function"?zt({path:ae,params:je,prevPath:B.current},qe,kt):qe()}).then(qe=>{var kt,xr;if(qe===!1)return;const yr=qe==null?void 0:qe.path;if(yr&&Je($t,yr,Ye)!==ae){Ce(qe);return}A.current=(kt=A.current)!=null?kt:ae;const{redirect:Ft,current:Ct,menu:_t}=Me(_(Ut),ae.split("?")[0],je,Ve,Xe);if(Ft){if(xt&&Ft===we&&(typeof xt=="boolean"||typeof xt=="string"&&Qt(A.current,xt)||d(xt)&&xt.find(br=>Qt(A.current,br))))return;if(d(Ft)){console.error(`\u522B\u95F9\uFF0C[${[ae,...Ft].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return Ft===we?Ce({path:Ft}):ye({path:Ft,exact:!0})}Ie==null||Ie(),(ae==null?void 0:ae.split("?")[0])!==((xr=B.current)==null?void 0:xr.split("?")[0])&&Kt(),Jt(Ct,mr);const Mr={eventBus:er,store:tr,useStore:mt,...Rr,updateRouter:Se,emitRouter:pt.subscribe,router:{push:ye,replace:Ce},current:Ct,menu:_t,inputPath:A.current,prevPath:B.current,basepath:$t,title:mr,history:$e};pt.setState({...Mr,browserRouter:Ye});const gr=Ar(Mr);if(B.current=ae,A.current=null,fe(),q(gr)){const{promiseFn:br,cancelFn:Wr}=F(gr,{delay:G.delay,msg:{timeout:G.timeoutMsg}});return X.current=Wr,M(!0),br.then(ir=>{X.current=null;const{result:Zr,errMsg:ar}=ir,Tr=ar===!1?Zr:ar!=null&&ar.timeout?xe({error:{errMsg:`${ae} ${ar.timeout}`}}):null;Tr&&(M(!1),ht(At,Ct.slice(-1)[0],Be),x(Tr))}).catch(ir=>{throw X.current=null,M(!1),ht(At,Ct.slice(-1)[0],Be),x(xe({error:ir})),ir})}ht(At,Ct.slice(-1)[0],Be),x(gr)}).catch(qe=>{throw x(xe({error:qe})),qe})},[]);return(0,y.useEffect)(()=>{const{childKey:ae="children",idKey:je="path",browserRouter:Ie=!1,routers:Be=[],basepath:Ye="",exact:Ve=!1,inputPath:Xe="",inputParams:mr={},...Ut}=f,zt=L(Ye),At=Gt(_(Be),Ie,ae,je,zt,Ve);se.current={...Ut,childKey:ae,idKey:je,browserRouter:Ie,routers:At,basepath:zt};const $t=Ie?"popstate":"hashchange",xt=()=>re({});return re({inputPath:Xe,inputParams:mr}),ut.on(ye),Wt.on(Ce),window.addEventListener($t,xt,!1),()=>{fe(),ut.off(ye),Wt.off(Ce),window.removeEventListener($t,xt,!1)}},[f]),{updateRouter:Se,output:v,loading:D}},pr=s=>{const{to:f,onClick:C,preventDefault:v,stopPropagation:x=!0,exact:D=!0,target:M,...X}=s,A=()=>{const B=typeof f=="string"?{exact:D,path:f}:{exact:D,...f};ut.emit(B)};return B=>{var se;if(B.preventDefault(),x&&B.stopPropagation(),!(X!=null&&X.disabled)){if(!v){if(M){const{browserRouter:fe}=pt.getState(),Se=typeof f=="string"?f:(se=f==null?void 0:f.path)!=null?se:"",he=lt(f==null?void 0:f.query),ye=fe||Se.indexOf("#/")>-1||We(Se);window==null||window.open(`${ye?"":"#"}${Se}${he}`,M);return}A()}typeof C=="function"&&C()}}},Yt=Q(982),Dt={};Dt.styleTagTransform=tt(),Dt.setAttributes=et(),Dt.insert=nt().bind(null,"head"),Dt.domAPI=Oe(),Dt.insertStyleElement=vt();var _r=ie()(Yt.Z,Dt),Vt=Yt.Z&&Yt.Z.locals?Yt.Z.locals:void 0;const zr=s=>{if(!s)return Vt.link;const f=s.trim().split(" ").filter(Boolean),C=f.find(v=>v==="active")?[Vt.active]:[];return[Vt.link,...C,...f].join(" ")};var $r=s=>{const{to:f,onClick:C,preventDefault:v,stopPropagation:x,exact:D,target:M,className:X,...A}=s;return(0,W.jsx)("span",{onClick:pr(s),className:zr(X),...A})},Br=()=>{const[s,f]=(0,y.useState)(pt.getState());return(0,y.useEffect)(()=>pt.subscribe(C=>f(C)),[]),s};const Fr=pt.getState,Lr=pt.subscribe}(),te}()})},2445:function(Nt,me,Ue){(function(Ae,Te){Nt.exports=Te(Ue(7378))})(this,function(Ae){return function(){"use strict";var Te={53:function(y,a,m){var d,k=m(899),g=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function U(q,F,L){var W,ee={},xe=null,ve=null;L!==void 0&&(xe=""+L),F.key!==void 0&&(xe=""+F.key),F.ref!==void 0&&(ve=F.ref);for(W in F)p.call(F,W)&&!_.hasOwnProperty(W)&&(ee[W]=F[W]);if(q&&q.defaultProps)for(W in F=q.defaultProps,F)ee[W]===void 0&&(ee[W]=F[W]);return{$$typeof:g,type:q,key:xe,ref:ve,props:ee,_owner:$.current}}d=S,a.jsx=U,d=U},458:function(y,a,m){y.exports=m(53)},899:function(y){y.exports=Ae}},be={};function Q(y){var a=be[y];if(a!==void 0)return a.exports;var m=be[y]={exports:{}};return Te[y](m,m.exports,Q),m.exports}(function(){Q.d=function(y,a){for(var m in a)Q.o(a,m)&&!Q.o(y,m)&&Object.defineProperty(y,m,{enumerable:!0,get:a[m]})}})(),function(){Q.o=function(y,a){return Object.prototype.hasOwnProperty.call(y,a)}}(),function(){Q.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})}}();var te={};return function(){Q.r(te),Q.d(te,{createContainer:function(){return a},useAsync:function(){return $},useCancelablePromise:function(){return p},useClickAway:function(){return q},useDebounce:function(){return L},useDelayState:function(){return xe},useEleResize:function(){return Rt},useEvent:function(){return dt},useFirstMounted:function(){return W},useInterval:function(){return at},usePrevious:function(){return R},useRaf:function(){return Re},useScroll:function(){return G},useSearch:function(){return Kt},useStateFromProps:function(){return Jt},useStore:function(){return It},useTime:function(){return er},useUpdate:function(){return mt},useUpdateEffect:function(){return ee},useWinResize:function(){return rr}});var y=Q(899),a=u=>(w,E)=>{const[T,N]=(0,y.useState)(()=>{const ne=u==null?void 0:u.getState(w);return ne!==void 0?ne:(E!==void 0&&(u==null||u.setState({[w]:E},!0)),E)}),Y=(0,y.useCallback)(ne=>u==null?void 0:u.setState({[w]:typeof ne=="function"?ne(u==null?void 0:u.getState(w)):ne}),[]),de=(0,y.useCallback)(ne=>u==null?void 0:u.subscribe(w,ne),[]),ie=(0,y.useCallback)((ne=ne)=>u==null?void 0:u.clean(ne),[]);return(0,y.useEffect)(()=>{u==null||u.subscribe(w,ne=>N(ne))},[]),[T,Y,de,ie]},m=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),d=u=>m(u)==="object",k=u=>m(u)==="function",g=u=>m(u)==="promise"||d(u)&&k(u.then),S=(u,w=12e4,E="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!g(u))return{};let T=null,N=null;return{promiseFn:new Promise((Y,de)=>{T=(ie="canceled")=>{clearTimeout(N),Y({canceled:!0,errMsg:ie})},w&&(w=typeof w!="number"?12e4:w,N=setTimeout(()=>T(E),w)),u.then(ie=>{clearTimeout(N),Y({result:ie,errMsg:!1})}).catch(ie=>{clearTimeout(N),de(ie)})}),cancelFn:T}},p=()=>{const u=(0,y.useRef)([]);return(0,y.useEffect)(()=>()=>{u.current.map(w=>w.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,y.useCallback)((w,E=!0)=>{const T=S(w,E);return u.current.indexOf(T)===-1&&u.current.push(T),T.promiseFn},[])}},$=(u={})=>{const{cancelablePromise:w}=p(),[E,T]=(0,y.useState)(u),N=(0,y.useRef)({}),Y=(0,y.useRef)({}),de=(0,y.useCallback)((ne=null)=>{Array.isArray(ne)&&ne.length?ne.map(Oe=>N.current[Oe]=u[Oe]):N.current=u},[]),ie=(0,y.useCallback)((ne,Oe,bt=!1)=>{const nt=Object.keys(ne),Qe=JSON.stringify(nt.sort());if(!Y.current[Qe]){Y.current[Qe]=!0,bt&&de(Array.isArray(bt)?bt:nt),nt.map(et=>{N.current[et]||(N.current[et]={}),N.current[et].pending=!0}),T({...N.current});for(let et=0,Pt=nt.length;et<Pt;et++){const vt=nt[et];w(ne[vt]).then(wt=>{let{result:tt,errMsg:Ze}=wt;et===Pt-1&&(Y.current[Qe]=!1),typeof Oe=="function"&&(tt=Oe(tt)||tt),N.current[vt]={...tt,pending:!1},Ze===!1&&T({...N.current})}).catch(wt=>{throw et===Pt-1&&(Y.current[Qe]=!1),N.current[vt]={error:wt,pending:!1},T({...N.current}),wt})}}},[]);return[E,ie,de]},_=(u,w)=>Object.prototype.hasOwnProperty.call(u!=null?u:{},w),U=u=>_(u,"current"),q=(u,w,E="click")=>{(0,y.useEffect)(()=>{const T=Y=>{const de=U(u)?u.current:u;de!=null&&de.contains&&!de.contains(Y.target)&&w(Y)},N=typeof E=="string"?[E]:E;return N.map(Y=>{document.addEventListener(Y,T,!1)}),()=>{N.map(Y=>{document.removeEventListener(Y,T,!1)})}},[u,w,E])},F=(u=()=>{},w=60)=>{let E=null;return function(...T){clearTimeout(E),E=setTimeout(()=>u.apply(this,T),w)}},L=(u,w=60)=>(0,y.useMemo)(()=>F(u,w),[w]),W=()=>{const u=(0,y.useRef)(!0);return u.current?(u.current=!1,!0):!1},ee=(u,w=[])=>{const E=W();(0,y.useEffect)(()=>{if(!E)return u()},w)},xe=(u,w=450)=>{const[E,T]=(0,y.useState)(u);return ee(()=>{let N;return u||w===0?T(u):N=setTimeout(()=>T(u),w),()=>N&&clearTimeout(N)},[u]),[E,T]},ve=()=>![typeof window,typeof document].includes("undefined"),Ge=u=>m(u).indexOf("element")>-1,it=(u=null)=>{var w,E;return ve()?Ge(u)?{width:u.clientWidth,height:u.clientHeight}:{width:(w=window.innerWidth)!=null?w:document.documentElement.clientWidth,height:(E=window.innerHeight)!=null?E:document.documentElement.clientHeight}:{width:0,height:0}},H=(u,w)=>{var E;const T=[],N=(E=u.children)!=null?E:[];for(let Y=0,de=N.length;Y<de;Y++){const ie=N[Y];ie.className.indexOf(w)>-1&&T.push(ie)}return T.length===0?null:T.length===1?T[0]:T};const He=(u,w)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const E=document.createElement("object");return E.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),E.setAttribute("class","resize-sensor"),E.onload=()=>{E.contentDocument.defaultView.addEventListener("resize",w,!1),w()},E.type="text/html",u.appendChild(E),E.data="about:blank",E};var _e=(u,w=60)=>{if(!ve())return;u=U(u)?u.current:u!=null?u:document.body;let E=H(u,"resize-sensor"),T=[];const N=F(()=>T.map(ne=>ne(u)),w),Y=ne=>{H(u,"resize-sensor")||(E=He(u,N)),T.indexOf(ne)===-1&&T.push(ne)},de=ne=>{const Oe=T.indexOf(ne);Oe!==-1&&T.splice(Oe,1),T.length===0&&E&&ie()},ie=()=>{E&&E.parentNode&&(E.contentDocument&&E.contentDocument.defaultView.removeEventListener("resize",N,!1),E.parentNode.removeChild(E),E=void 0,T=[])};return{element:u,bind:Y,unbind:de,destroy:ie}},Re=(u={})=>{const w=(0,y.useRef)(0),[E,T]=(0,y.useState)(u),N=(0,y.useCallback)(Y=>{cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>T(Y))},[]);return(0,y.useEffect)(()=>()=>cancelAnimationFrame(w.current),[]),[E,N]},Rt=(u=null,w=60)=>{const E=U(u)?u.current:u,{bind:T,destroy:N}=_e(E,w),[Y,de]=Re(it(E));return(0,y.useEffect)(()=>(T(()=>E&&de(it(E))),()=>N()),[E]),Y},dt=u=>{const w=(0,y.useRef)(null);return(0,y.useLayoutEffect)(()=>{w.current=u}),(0,y.useCallback)(w.current,[])},at=(u,w)=>{const E=(0,y.useRef)();(0,y.useEffect)(()=>{E.current=u},[u]),(0,y.useEffect)(()=>{if(w){const T=setInterval(()=>E.current(),w);return()=>clearInterval(T)}},[w])},R=u=>{const w=(0,y.useRef)();return(0,y.useEffect)(()=>{w.current=u},[u]),w.current},oe=(u=null)=>{var w,E,T,N;return ve()?Ge(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:(E=(w=window.pageXOffset)!=null?w:document.documentElement.scrollLeft)!=null?E:document.body.scrollLeft,top:(N=(T=window.pageYOffset)!=null?T:document.documentElement.scrollTop)!=null?N:document.body.scrollTop}:{left:0,top:0}},G=(u=null)=>{const[w,E]=Re(oe(u));return(0,y.useEffect)(()=>{const T=()=>E(oe(u)),N=Ge(u)?u:window;return N.addEventListener("scroll",T,{capture:!1,passive:!0}),()=>N.removeEventListener("scroll",T)},[u]),w},we=u=>m(u)==="array",$e=u=>we(u)&&!!u.length,rt=(u,w,E=[],T=!1,N=null)=>$e(u)?w?(E=typeof E=="string"?E.split(","):E,u.filter(Y=>(E=E.length>0?E:Object.keys(Y),E.filter(de=>{const ie=Y[de];if(ie==null)return!1;if(T)return ie===w;const ne=new RegExp(w,"gi"),Oe=ie.toString().match(ne);return Oe&&N&&(Y[de]=N(ie.toString().replace(ne,`<span style="background-color:yellow">${Oe[0]}</span>`),{display:"inline-block"})),Oe}).length))):u:[],Ke=(u,w="id")=>{if(!$e(u))return u;const E=[],T=[];return u.map(N=>{const Y=d(N)?N[w]:N;T.includes(Y)||(T.push(Y),E.push(N))}),E},ft=u=>(u==null?void 0:u.$$typeof)&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",Me=u=>u==null?void 0:u.__v_isVNode;const We=u=>{if(!we(u)&&!d(u))return u;const w=we(u)?[]:{};for(const E in u)if(_(u,E)){const T=u[E];w[E]=ft(T)||Me(T)||typeof T!="object"?T:T!==u?We(T):"cyclic"}else Object.setPrototypeOf(w,{[E]:u[E]});return w};var Et=We;const Je=u=>(w,E="children")=>{if(!Array.isArray(w))return w;const T=Et(w),N=Y=>{const de=[];return Y.map(ie=>{if($e(ie[E])){const ne=N(ie[E])||[];ie[E]=ne,ne.length>0&&de.push(ie)}}),u(Y,de)};return N(T)};var Gt=(u,w,E,T="name",N="id",Y="children",de=!1)=>Je((ie,ne)=>Ke([...rt(ie,w,T,de,E),...ne],N))(u,Y),lt=Q(458),St=(u,w)=>(0,lt.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...w}),Kt=(u=null,w=St)=>{const[E,T]=(0,y.useState)(u),N=(0,y.useCallback)((...Y)=>{const[de,ie,...ne]=Y;if(!ie)T(null);else{Y=[de,ie,w,...ne];const Oe=Gt(...Y);T(Oe)}},[]);return[E,N]},Jt=u=>{const[w,E]=(0,y.useState)(u);return(0,y.useEffect)(()=>E(u),[u]),[w,E]},Mt=()=>{const u={};return{on:(w,E)=>{u[w]||(u[w]=[]),u[w].indexOf(E)===-1&&u[w].push(E)},emit:(w,E)=>{u[w]&&u[w].map(T=>T(E))},off:(w,E=null)=>{if(u[w]){if(typeof E!="function")return delete u[w];const T=u[w].indexOf(E);T>-1&&(u[w].splice(T,1),u[w].length||delete u[w])}}}};const ht=u=>{const w={};for(let E in u)_(u,E)||(w[E]=u[E]);return w};var ot=(u,w)=>{if(!d(u))return w;if(!d(w))return u;const E={...ht(u),...ht(w)},T={...u,...w};return Object.keys(E).map(N=>{Object.setPrototypeOf(T,{[N]:E[N]})}),T},Qt=()=>{const{on:u,emit:w,off:E}=Mt(),T={};return{getState:N=>Et(T[N]),setState:(N,Y=!1)=>{if(typeof N=="function"&&(N=N(Et(T))),!d(N))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const de=Et(N);Object.keys(de).map(ie=>{const ne=T[ie],Oe=de[ie],bt=d(Oe)&&d(ne)?ot(ne,Oe):Oe;!Y&&w(ie,bt),T[ie]=bt})},subscribe:(N,Y)=>(u(N,Y),()=>E(N,Y)),unsubscribe:E,clean:N=>{typeof N=="string"?T[N]=void 0:Array.isArray(N)?N.map(Y=>T[Y]=void 0):Object.keys(T).map(Y=>T[Y]=void 0)}}};const ur=Qt();var It=a(ur);const st=u=>u<10?"0"+u:u;var gt=(u=new Date)=>{const w=new Date(u),E=w.getFullYear(),T=w.getDay(),N=st(w.getMonth()+1),Y=st(w.getDate()),de=st(w.getHours()),ie=st(w.getMinutes()),ne=st(w.getSeconds());return[E,N,Y,de,ie,ne,T]};const kr=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],ut=(u,w,E="-")=>u.replace(new RegExp(E,"g"),w);var Wt=(u=new Date,w=["-","-"," ",":",":",""],E=kr)=>{const T=gt(u);let N="";return w.map((Y,de)=>{var ie;return N+=(de===6?E[T[de]]:(ie=T[de])!=null?ie:"")+Y}),N};const pt=()=>Wt(new Date,["-","-"," ",":",":"," ",""]);var er=()=>{const[u,w]=(0,y.useState)("");return at(()=>{w(pt())},1e3),[u]};const tr=u=>++u;var mt=()=>{const[,u]=(0,y.useState)(0);return(0,y.useCallback)(()=>u(tr),[])},rr=()=>{const[u,w]=Re(it());return(0,y.useEffect)(()=>{const E=()=>w(it());return window.addEventListener("resize",E,!1),()=>window.removeEventListener("resize",E,!1)},[]),u}}(),te}()})},5820:function(Nt){(function(me,Ue){Nt.exports=Ue()})(this,function(){return function(){"use strict";var me={};(function(){me.d=function(e,t){for(var r in t)me.o(t,r)&&!me.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){me.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){me.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();var Ue={};me.r(Ue),me.d(Ue,{a2o:function(){return Ae},addAtNext:function(){return te},addAtPos:function(){return y},addClass:function(){return m},addDays:function(){return d},addHours:function(){return k},addMonths:function(){return g},addNodes:function(){return S},addScript:function(){return $},addStyle:function(){return _},addYears:function(){return U},arr2Tree:function(){return ve},arr2TreeById:function(){return Ge},arr2TreeByPath:function(){return it},arr2obj:function(){return q},arr2str:function(){return xe},backTop:function(){return oe},base2Ten:function(){return G},baseConversion:function(){return $e},baseFetch:function(){return Gt},cacheData:function(){return Qt},cancelablePromise:function(){return We},changePos:function(){return ur},classifyArr:function(){return It},clone:function(){return ot},compareVersion:function(){return st},compose:function(){return gt},copyToClipboard:function(){return kr},createContainer:function(){return ut},createElement:function(){return pt},createNode:function(){return E},createStore:function(){return de},createTextElement:function(){return Wt},curry:function(){return ie},cyclic:function(){return lt},dash2camel:function(){return ne},debounce:function(){return Oe},deleteNodes:function(){return bt},deviceType:function(){return nt},dlfile:function(){return Pt},dropInfo:function(){return Pr},editNodes:function(){return Sr},emitter:function(){return T},equal:function(){return Kt},escapeHTML:function(){return dr},eventBus:function(){return hr},fetcher:function(){return Ar},filter:function(){return pr},filterList:function(){return _r},findChildEle:function(){return Vt},findMax:function(){return zr},firstUpper:function(){return $r},fixFileSizeUnit:function(){return Br},fixPath:function(){return Fr},fixRoute:function(){return Lr},fixSize:function(){return s},fixTimeUnit:function(){return f},flatten:function(){return v},formatNum:function(){return x},formatPassTime:function(){return X},formatTime:function(){return se},fullScreen:function(){return re},getElementsSize:function(){return Cr},getExplore:function(){return je},getLeaveTime:function(){return Ve},getMeta:function(){return Ut},getMonthDays:function(){return zt},getOffset:function(){return At},getOsInfo:function(){return xt},getParams:function(){return Rr},getPosition:function(){return wt},getRelative:function(){return xr},getSelected:function(){return yr},getTextSize:function(){return Ft},getTime:function(){return M},getTouchPosition:function(){return kt},getType:function(){return Te},getValue:function(){return Mr},getViewportSize:function(){return vt},hasClass:function(){return gr},hasProp:function(){return He},hex2rgba:function(){return br},imgtocanvas:function(){return Wr},isArray:function(){return be},isAsync:function(){return Me},isBrowser:function(){return p},isDate:function(){return ir},isElement:function(){return a},isError:function(){return Zr},isFunction:function(){return ft},isIE:function(){return ar},isObject:function(){return F},isReactComp:function(){return Tr},isReactEle:function(){return Jt},isRef:function(){return _e},isRegExp:function(){return Hr},isTouch:function(){return qe},isUrl:function(){return qr},isValidArr:function(){return nr},isValidObj:function(){return Or},isVueEle:function(){return Mt},isWechat:function(){return lr},json2str:function(){return eo},loadBase64:function(){return to},loadImage:function(){return Xr},loop:function(){return Gr},matchedStr:function(){return Kr},memoize:function(){return i},merge:function(){return I},mergeArr:function(){return h},mergeClass:function(){return Z},mergeObj:function(){return O},mergeOwnProp:function(){return Y},message:function(){return Ee},monthDate:function(){return Ne},moveNodes:function(){return De},obj2arr:function(){return Fe},obj2str:function(){return W},omit:function(){return ke},once:function(){return Pe},padStart:function(){return yt},params2data:function(){return Ke},params2str:function(){return rt},parseXml:function(){return sr},pick:function(){return Lt},promisify:function(){return Tt},randColor:function(){return ct},randItem:function(){return Yr},randNum:function(){return Ot},randPercent:function(){return Jr},randStr:function(){return Qr},randTrue:function(){return ao},removeClass:function(){return K},resize:function(){return so},rgba2hex:function(){return uo},rmUnit:function(){return co},scheduler:function(){return po},scrollIsBottom:function(){return mo},scrollTo:function(){return Re},scrollToAnchor:function(){return xo},scrollTop:function(){return H},selectedHandle:function(){return Q},session:function(){return yo},setMeta:function(){return go},setStyle:function(){return Ze},sleep:function(){return cr},sleepSync:function(){return Nr},sort:function(){return bo},sortObj:function(){return vo},storage:function(){return wo},store:function(){return Co},str2Html:function(){return tt},str2code:function(){return jo},sysLang:function(){return Eo},template:function(){return So},ten2Base:function(){return we},throttle:function(){return zo},timeGap:function(){return Oo},timeInterval:function(){return no},timestamp:function(){return Qe},toggleClass:function(){return No},traverItem:function(){return C},traverList:function(){return Io},unescapeHTML:function(){return Po},unique:function(){return Yt},updateId:function(){return Do},updateNode:function(){return w},updateTreeNodes:function(){return Ao},uuidv4:function(){return et},validObj:function(){return _o},watchScreen:function(){return Bo},watermark:function(){return Lo},weekDate:function(){return Ro},wrapPromise:function(){return Mo}});var Ae=(e,t="key",r="value")=>{const o={};return(e||[]).map(n=>o[n[t]]=n[r]),o},Te=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),be=e=>Te(e)==="array",Q=e=>(t,r,o="id",n="children")=>{if(!be(t))return null;const c=(b,z="")=>{for(let P=0,V=b.length;P<V;P++){const ge=b[P];if(ge[o]===r)return e(b,P,z)||b[P];if(be(ge[n])){const ze=c(ge[n],ge[o]);if(ze)return ze}}};return c(t),t},te=(e,t,r,o="id",n="children")=>Q((c,b)=>c.splice(b,0,r))(e,t,o,n),y=(e,t,r,o,n="id",c="children")=>Q((b,z)=>{const P=b[z];P.children?P.children.splice(o,0,r):P.children=[r]})(e,t,n,c),a=e=>Te(e).indexOf("element")>-1,m=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),n=[...new Set([...r,...o])];e.className=n.join(" ")},d=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},k=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},g=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},S=(e,t,r,o="id",n="children")=>Q((c,b)=>{const z=c[b];return z[n]=[...z[n]||[],...r],z})(e,t,o,n),p=()=>![typeof window,typeof document].includes("undefined"),$=e=>{if(p())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},_=(e,t)=>{if(p())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===t))r();else{const n=document.createElement("style");n.onerror=c=>o(new Error(`Failed to load '${t}' style`)),n.onload=r,n.innerHTML=e,n.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===e))r();else{const n=document.createElement("link");n.onerror=c=>o(new Error(`Failed to load '${e}'`)),n.onload=r,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},U=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},q=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:n})=>r[o]=n),r},F=e=>Te(e)==="object";const L=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,F(o)?t+=`${r}=${L(o)}`:Array.isArray(o)?t+=`${r}=${xe(o)}`:t+=`${r}=${o}`}),`{${t}}`};var W=L;const ee=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,F(r)?t+=W(r):Array.isArray(r)?t+=ee(r):t+=`${r}`}),`[${t}]`};var xe=ee,ve=e=>(t,r="id",o="children",n=-1)=>{if(!be(t))return t;const c={},b=t.map(z=>z[r]);return[...t].map(z=>{var P;const V={...z},{[r]:ge}=V;if(ge!=null){let{parentId:ze}=V;ze==null&&(ze=(P=e==null?void 0:e(V))!=null?P:n,V.parentId=ze),c[ge]||(c[ge]=[]),V[o]=c[ge],c[ze]||(c[ze]=[]),c[n]||(c[n]=[]),b.includes(ze)?c[ze].push(V):c[n].push(V)}}),c[n]},Ge=(e,t="id",r="children",o=-1)=>ve(n=>{const c=n[t].match(/\S+(?=-\S+)/);return(c==null?void 0:c[0])||o})(e,t,r,o),it=(e,t="path",r="children",o=null)=>ve(n=>{var c,b,z,P;const V=n[t],ge=V.match(/.*\/[^:/]+\/:[^/]+/);return ge?(b=(c=ge[0].match(/(.*)\/:+/))==null?void 0:c[1])!=null?b:o:(P=(z=V.match(/(.*)\/+/))==null?void 0:z[1])!=null?P:o})(e,t,r,o),H=()=>{var e,t;return p()&&((t=(e=window.pageYOffset)!=null?e:document.documentElement.scrollTop)!=null?t:document.body.scrollTop)},He=(e,t)=>Object.prototype.hasOwnProperty.call(e!=null?e:{},t),_e=e=>He(e,"current"),Re=(e=0,t)=>{var r;p()&&(t=_e(t)?t.current:t!=null?t:window,(r=t.scrollTo)==null||r.call(t,{top:e,behavior:"smooth"}))},Rt=`.huxy-totop-bar {
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
}`;const dt=()=>document.getElementsByClassName("huxy-totop-bar")[0],at=e=>{if(dt())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>Re(),!1),t},R=()=>{const e=dt();e&&document.body.removeChild(e)};var oe=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!p())return;_(Rt,"huxy-backtop-css");const r=()=>{H()>e?at(t):R()};return(()=>(document.addEventListener("scroll",r,!1),()=>{R(),document.removeEventListener("scroll",r,!1)}))()},G=(e=0,t=2)=>parseInt(String(e),t),we=(e=0,t=2)=>Number(e).toString(t),$e=(e=0,t=2,r=16)=>we(G(e,t),r),rt=e=>{if(!F(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const n=o>0?"&":"?";t.push(`${n}${r}=${e[r]}`)}),t.join("")},Ke=e=>{if(!F(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},ft=e=>Te(e)==="function",Me=e=>Te(e)==="promise"||F(e)&&ft(e.then),We=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Me(e))return{};let o=null,n=null;return{promiseFn:new Promise((c,b)=>{o=(z="canceled")=>{clearTimeout(n),c({canceled:!0,errMsg:z})},t&&(t=typeof t!="number"?12e4:t,n=setTimeout(()=>o(r),t)),e.then(z=>{clearTimeout(n),c({result:z,errMsg:!1})}).catch(z=>{clearTimeout(n),b(z)})}),cancelFn:o}};const Et=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>Ke(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>rt(e).slice(1)}],Je=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(n=>e[n]);if(o.length===1){const n=o[0],c=r?t:n;return c==="params"?{query:e[n]}:{result:e[n],type:c}}else if(o.length>1){const n=o.filter(b=>b!=="params").slice(-1)[0],c=r?t:n;return c==="params"?{query:e.params||e[n]}:{query:e.params,result:e[n],type:c}}};var Gt=(e,t)=>r=>(o,n={})=>{const{headers:c,dataType:b,data:z,formData:P,form:V,params:ge,...ze}=n,Le={data:z,formData:P,form:V,params:ge};let wr;const{query:Xt,result:io,type:Wo}=Je(Le,b)||{};if(!ze.body&&io){const Vr=Et.find(Ur=>Ur.type===Wo);wr=Vr.headers,ze.body=Vr.body(io)}Xt&&(o=`${o}${rt(Xt)}`);const{promiseFn:Zo}=We(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...wr,...c},...ze}),t);return Zo.then(({result:Vr,errMsg:Ur})=>e(Ur?{status:408,statusText:Ur}:Vr))},lt=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let n=!1;for(let c in o)He(o,c)&&r(o[c])&&(o[c]="cyclic",n=!0);return n}return!1};return r(e)&&e};const St=(e,t)=>{const r=Te(e),o=Te(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(lt(e)&&lt(t))return St(e,t);for(let n in t)if(He(e,n)!==He(t,n)||!St(e[n],t[n]))return!1;return!0};var Kt=St,Jt=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",Mt=e=>e==null?void 0:e.__v_isVNode;const ht=e=>{if(!be(e)&&!F(e))return e;const t=be(e)?[]:{};for(const r in e)if(He(e,r)){const o=e[r];t[r]=Jt(o)||Mt(o)||typeof o!="object"?o:o!==e?ht(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var ot=ht,Qt=(e=100)=>{const t=[];let r=-1;const o=c=>{var b,z;const P=t.length,V=ot(c);return Kt(V,(b=t[P-1])==null?void 0:b.data)?{index:r,length:P,data:(z=t[r])==null?void 0:z.data}:(t.push({data:V}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},n=(c=0)=>{var b;const z=t.length;return r+=c,r=r<0?0:r>z-1?z-1:r,{index:r,length:z,data:ot((b=t[r])==null?void 0:b.data)}};return{record:o,cursor:n,jump:c=>{var b;return r=c,{index:r,length:t.length,data:ot((b=t[r])==null?void 0:b.data)}},undo:()=>n(-1),redo:()=>n(1),getList:()=>ot(t),clean:()=>{t.length=0,r=-1}}},ur=(e,t,r)=>{if(!be(e))return e;const o=e[t],n=e[r];return e.splice(t,1,n),e.splice(r,1,o),e},It=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},st=(e,t,r=".")=>{const o=(P,V)=>P.split(V),n=o(e,r),c=o(t,r),b=n.length;let z=0;for(let P=0;P<b;P++)if(n[P]<c[P]){z=b-P;break}return z},gt=(...e)=>(...t)=>{const[...r]=e,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...t)},kr=e=>{if(!p())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},ut=e=>(t,r)=>{const{getState:o,setState:n,subscribe:c,unsubscribe:b,clean:z}=e;return r!==void 0&&n({[t]:r},!0),{getState:()=>o(t),setState:(P,V)=>n({[t]:P},V),subscribe:P=>c(t,P),unsubscribe:()=>b(t),clean:()=>z(t)}},Wt=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),pt=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:Wt(o))}});const er=e=>e.startsWith("on"),tr=e=>e!=="children"&&!er(e),mt=(e,t)=>r=>e[r]!==t[r],rr=(e,t)=>r=>!(r in t),u=e=>{const t=Object.keys(e);return{eventProps:t.filter(er),propertyProps:t.filter(tr)}};var w=(e,t,r)=>{const{eventProps:o,propertyProps:n}=u(t),{eventProps:c,propertyProps:b}=u(r);o.filter(rr(t,r)).map(z=>{const P=z.toLowerCase().slice(2);e.removeEventListener(P,t[z])}),n.filter(rr(t,r)).map(z=>e[z]=""),b.filter(mt(t,r)).map(z=>e[z]=r[z]),c.filter(mt(t,r)).map(z=>{const P=z.toLowerCase().slice(2);e.addEventListener(P,r[z])})},E=e=>{if(!p())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return w(t,{},e.props),t},T=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return delete e[t];const o=e[t].indexOf(r);o>-1&&(e[t].splice(o,1),e[t].length||delete e[t])}}}};const N=e=>{const t={};for(let r in e)He(e,r)||(t[r]=e[r]);return t};var Y=(e,t)=>{if(!F(e))return t;if(!F(t))return e;const r={...N(e),...N(t)},o={...e,...t};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},de=()=>{const{on:e,emit:t,off:r}=T(),o={};return{getState:n=>ot(o[n]),setState:(n,c=!1)=>{if(typeof n=="function"&&(n=n(ot(o))),!F(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const b=ot(n);Object.keys(b).map(z=>{const P=o[z],V=b[z],ge=F(V)&&F(P)?Y(P,V):V;!c&&t(z,ge),o[z]=ge})},subscribe:(n,c)=>(e(n,c),()=>r(n,c)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(c=>o[c]=void 0):Object.keys(o).map(c=>o[c]=void 0)}}},ie=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...n)=>r(...o,...n);return r},ne=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),Oe=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},bt=(e,t,r="id",o="children")=>Q((n,c)=>n.splice(c,1))(e,t,r,o),nt=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Qe=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),et=()=>{let e=Qe();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},Pt=(e,t)=>{if(p())if(t=t||et(),typeof e=="string")fetch(e).then(r=>r.blob()).then(r=>{const o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)});else{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)}},vt=(e=null)=>{var t,r;return p()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(r=window.innerHeight)!=null?r:document.documentElement.clientHeight}:{width:0,height:0}},wt=e=>{var t;if(p())return e=_e(e)?e.current:e!=null?e:document.body,(t=e.getBoundingClientRect)==null?void 0:t.call(e)},tt=e=>{if(!p())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},Ze=(e,t={},r=!1)=>{if(a(e)){if(r){let o="";Object.keys(t).map(n=>{o+=`${n}: ${t[n]};`}),e.style=o;return}Object.keys(t).map(o=>e.style.setProperty(o,t[o]))}};const Zt=(e=350)=>new Promise(t=>setTimeout(t,e)),Nr=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var cr=Zt,Cr=async(e,t=15)=>{if(!p())return;if(typeof e=="string"&&(e=tt(e)),e=_e(e)?e.current:e,!a(e))return{};const r=e.cloneNode(!0);Ze(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await cr(t);const o=wt(r);return e.parentNode.removeChild(r),o};const Ir=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,jr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Ht=(e,t)=>{var r;t=`huxy-drop-arrow-${t}`;const o=(r=e.getAttribute("class"))!=null?r:"";Ir.test(o)?e.setAttribute("class",o.replace(jr,t)):e.setAttribute("class",`${o} ${t}`)},Er=async(e,t,r)=>{const{left:o,right:n,top:c,bottom:b}=wt(e),{width:z,height:P}=vt(),{width:V,height:ge}=await Cr(t);if(n<0||b<0||o>z||c>P)return{};if(r==="vertical"){const ze={left:o+"px",top:b+10+"px",right:"auto",bottom:"auto"};let Le="lt";o+V>z&&(ze.left=n-V+"px",Le="rt"),b+10+ge>P&&(ze.top=c-10-ge+"px",Le=Le==="lt"?"lb":"rb"),Ze(t,ze),Ht(t,Le)}else{const ze={left:n+10+"px",top:c+"px",right:"auto",bottom:"auto"};let Le="tl";n+10+V>z&&(ze.left=o-10-V+"px",Le="tr"),c+ge>P&&(ze.top=b-ge+"px",Le=Le==="tl"?"bl":"br"),Ze(t,ze),Ht(t,Le)}};var Pr=(e,t,r="horizontal")=>{const o=Oe(Er),n=()=>o(e,t,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const c=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),Ze(t,{left:"",top:"",right:"",bottom:""})};return Er(e,t,r),c},Sr=(e,t,r,o="id",n="children")=>Q((c,b)=>c[b]={...c[b],...r})(e,t,o,n),dr=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const fr=T();var hr=e=>{const{on:t,emit:r,off:o}=fr;return{on:n=>t(e,n),emit:n=>r(e,n),off:n=>o(e,n)}};const or=120*1e3,Dr=e=>e.json().then(t=>t);var Ar=(e=Dr,t=or)=>(r="get")=>Gt(e)((r||"get").toUpperCase()),nr=e=>be(e)&&!!e.length,pr=(e,t,r=[],o=!1,n=null)=>nr(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(c=>(r=r.length>0?r:Object.keys(c),r.filter(b=>{const z=c[b];if(z==null)return!1;if(o)return z===t;const P=new RegExp(t,"gi"),V=z.toString().match(P);return V&&n&&(c[b]=n(z.toString().replace(P,`<span style="background-color:yellow">${V[0]}</span>`),{display:"inline-block"})),V}).length))):e:[],Yt=(e,t="id")=>{if(!nr(e))return e;const r=[],o=[];return e.map(n=>{const c=F(n)?n[t]:n;o.includes(c)||(o.push(c),r.push(n))}),r};const Dt=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=ot(t),n=c=>{const b=[];return c.map(z=>{if(nr(z[r])){const P=n(z[r])||[];z[r]=P,P.length>0&&b.push(z)}}),e(c,b)};return n(o)};var _r=(e,t,r,o="name",n="id",c="children",b=!1)=>Dt((z,P)=>Yt([...pr(z,t,o,b,r),...P],n))(e,c),Vt=(e,t)=>{var r;const o=[],n=(r=e.children)!=null?r:[];for(let c=0,b=n.length;c<b;c++){const z=n[c];z.className.indexOf(t)>-1&&o.push(z)}return o.length===0?null:o.length===1?o[0]:o},zr=(e="")=>{var t;return(t=e.match(/\d+/g))==null?void 0:t.sort((r,o)=>o-r)[0]},$r=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),Br=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},Fr=(e="")=>(e!=null?e:"").replaceAll("//","/"),Lr=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",s=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},f=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),n=e%3600,c=~~(n/60);return o<24?`${o}${t[2]}${c}${t[1]}${n%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},C=e=>(t,r="children")=>{if(!be(t))return t;const o=(n,c=[])=>{n.map((b,z)=>{const P=be(b[r]);if(b=e(b,c,z,P)||b,P){const{[r]:V,...ge}=b;o(V,[...c,{...ge,"@@index":z}])}})};return o(t),t},v=(e,t="children")=>{const r=[];return C(o=>{const{[t]:n,...c}=o;r.push(c)})(e,t),r},x=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const D=e=>e<10?"0"+e:e;var M=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),n=D(t.getMonth()+1),c=D(t.getDate()),b=D(t.getHours()),z=D(t.getMinutes()),P=D(t.getSeconds());return[r,n,c,b,z,P,o]},X=(e,t=new Date)=>{e=M(e),t=M(t);const r=t.y-e.y,o=t.m-e.m,n=t.d-e.d,c=t.h-e.h,b=t.M-e.M,z=new Date(t.y,t.m,0).getDate(),P=(V,ge,ze,Le,wr)=>{const Xt="\u524D";return ge<0&&(V-=1,ge+=ze),V===0?ge+wr+Xt:ge===0?V+Le+Xt:V+Le+ge+wr+Xt};return r>0?P(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?P(o,n,z,"\u4E2A\u6708","\u5929"):n>0?P(n,c,24,"\u5929","\u5C0F\u65F6"):c>0?P(c,b,60,"\u5C0F\u65F6","\u5206\u949F"):b>0?b+"\u5206\u949F\u524D":"\u521A\u521A"};const A=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],B=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var se=(e=new Date,t=["-","-"," ",":",":",""],r=A)=>{const o=M(e);let n="";return t.map((c,b)=>{var z;return n+=(b===6?r[o[b]]:(z=o[b])!=null?z:"")+c}),n};const fe=["","webkit","moz","ms"],Se=e=>fe.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),he=e=>fe.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),ye=e=>fe.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),Ce=fe.map(e=>`${e}fullscreenchange`);var re=e=>{var t,r;if(!p())return;e=_e(e)?e.current:e!=null?e:document.body;const o=Se(document),n=he(e),c=ye(document);document[o]?(r=document[c])==null||r.call(document):(t=e[n])==null||t.call(e)};const ae=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var je=()=>{var e;if(!p())return;const t=window.navigator.userAgent.toLowerCase(),r=(e=ae.find(o=>t.match(o.reg)))!=null?e:{};return{type:r.name,version:t.match(r.reg)[1]}};const Ie=60*1e3,Be=60*Ie,Ye=24*Be;var Ve=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/Ye);r-=Ye*o;const n=~~(r/Be);r-=Be*n;const c=~~(r/Ie);r-=Ie*c;const b=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${c}\u5206${b}\u79D2`};const Xe=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],mr=e=>{if(!Array.isArray(e))return Xe;const t=[...Xe];return e.map(r=>{const o=t.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var Ut=e=>{const t=mr(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return tt(t.join(""))},zt=(e=new Date)=>{const t=M(e);return new Date(t[0],t[1],0).getDate()},At=(e=null)=>{var t,r,o,n;return p()?a(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:(r=(t=window.pageXOffset)!=null?t:document.documentElement.scrollLeft)!=null?r:document.body.scrollLeft,top:(n=(o=window.pageYOffset)!=null?o:document.documentElement.scrollTop)!=null?n:document.body.scrollTop}:{left:0,top:0}};const $t=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>{var t;return{type:"ios",model:e[1],version:(t=e[3])==null?void 0:t.replaceAll("_",".")}}},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var xt=()=>{if(!p())return;const e=window.navigator.userAgent.toLowerCase(),t=$t.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},Rr=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(n=>{const[c,b]=n.split("=");o[c]=b}),{path:t,params:o}}return{path:t}},qe=()=>p()&&(window.ontouchstart||navigator.maxTouchPoints),kt=e=>{var t,r,o,n;const{left:c,top:b}=At();return{touchX:qe()?(r=(t=e==null?void 0:e.touches)==null?void 0:t[0])==null?void 0:r.pageX:(e==null?void 0:e.pageX)||(e==null?void 0:e.clientX)+c,touchY:qe()?(n=(o=e==null?void 0:e.touches)==null?void 0:o[0])==null?void 0:n.pageY:(e==null?void 0:e.pageY)||(e==null?void 0:e.clientY)+b}},xr=(e,t)=>{var r,o;const{touchX:n,touchY:c}=kt(e),{x:b,y:z}=(o=(r=t==null?void 0:t.getBoundingClientRect)==null?void 0:r.call(t))!=null?o:{};return{x:n-(b!=null?b:0),y:c-(z!=null?z:0)}},yr=(e,t,r="id",o="children")=>{if(!be(e))return null;const n=c=>{for(let b=0,z=c.length;b<z;b++){const P=c[b];if(P[r]===t)return[P];if(be(P[o])){const V=n(P[o]);if(V)return[P].concat(V)}}};return n(e)},Ft=(e,t,r)=>{if(!p())return;r=_e(r)?r.current:r!=null?r:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&Ze(o,t),o.innerText=(e!=null?e:"").replace(/[\r\n]/g,""),r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const Ct=(e={},t)=>{t=_t(t);const r=(o,n)=>{if(!(n!=null&&n[0]))return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(e,t)},_t=(e="")=>{var t;return(t=e.replace(/\[['"]?(.*?)['"]?\]/g,".$1"))==null?void 0:t.split(".")};var Mr=Ct,gr=(e,t="")=>a(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),br=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,n=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${n})`;const c=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${c})`},Wr=e=>{if(!p())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:n}=e;return t.width=o,t.height=n,r.drawImage(e,0,0,o,n),t},ir=(...e)=>!Number.isNaN(new Date(...e).valueOf()),Zr=e=>Te(e)==="error",ar=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),Tr=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",Hr=e=>Te(e)==="regexp",qr=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),Or=e=>F(e)&&Object.keys(e).length,lr=()=>{if(p())return navigator.userAgent.toLowerCase().indexOf("micromessenger")>-1},eo=e=>F(e)?W(e):Array.isArray(e)?xe(e):e,to=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",n=>r(n))}),Xr=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",n=>r(n)))}),Gr=async(e,t,r=2e3)=>{for(;!(t!=null&&t(e==null?void 0:e()));)await cr(r)},Kr=(e,t=["{","}"])=>{var r,o;return(o=(r=e==null?void 0:e.trim)==null?void 0:r.call(e).match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`)))==null?void 0:o[1]},i=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),c=r.find(b=>b.key===n);if(!c){const b=e(...o);return r.push({key:n,result:b}),r.length>t&&r.shift(),b}return c.result}};const l=(e,t,r="id")=>{if(!be(e))return t;if(!be(t))return e;const o={};return[...e,...t].map(n=>{var c;const b=F(n)?(c=n[r])!=null?c:JSON.stringify(n):n;if(o[b]===void 0)o[b]=n;else{const z=o[b];F(z)&&F(n)?o[b]=O(z,n):be(z)&&be(n)?o[b]=l(z,n):o[b]=n}}),Object.keys(o).map(n=>o[n])};var h=l;const j=(e,t)=>{if(!F(e))return t;if(!F(t))return e;for(let r in t)He(t,r)?F(e[r])&&F(t[r])?e[r]=j(e[r],t[r]):be(e[r])&&be(t[r])?e[r]=h(e[r],t[r]):e[r]=t[r]:Object.setPrototypeOf(e,{[r]:t[r]});return e};var O=j,I=(e,...t)=>{const r=be(e)?h:O;return t.map(o=>e=r(e,o)),e},Z=(e,t)=>{var r,o;const n=(r=e==null?void 0:e.split(" "))!=null?r:[],c=(o=t==null?void 0:t.split(" "))!=null?o:[];return[...new Set([...n,...c])].filter(Boolean).join(" ")},K=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(n=>!r.includes(n));e.className=o.join(" ")},J=`@keyframes huxy-message-animate-in {
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
}`;const le=()=>document.getElementsByClassName("huxy-message")[0],ue=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},ce=(e,t)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${t}`);const o=document.createElement("span");o.innerText=e;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},pe=(e,t=3250,r,o)=>{if(!p())return;_(J,"huxy-message-css");let n=le();n||(n=ue());const c=ce(e,o);n.appendChild(c),setTimeout(()=>{n.removeChild(c),r==null||r()},t),setTimeout(()=>{K(c,"open")},t-250)};var Ee={success:(e,t,r)=>pe(e,t,r,"success"),warn:(e,t,r)=>pe(e,t,r,"warn"),warning:(e,t,r)=>pe(e,t,r,"warn"),error:(e,t,r)=>pe(e,t,r,"error"),info:(e,t,r)=>pe(e,t,r,"info")},Ne=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[d(1-r),d(zt(t)-r)]},De=(e,t,r,o,n="id",c="children")=>{let b={};return Q((z,P)=>(b=z[P],z.splice(P,1),!0))(e,t,n,c),y(e,r,b,o,n,c),e},Fe=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),ke=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(n=>t.includes(n)?o.push({key:n,value:e[n]}):r[n]=e[n]),{newObj:r,newQuery:o}},Pe=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},yt=(e="",t=0,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`};const qt="<([^>]+)>([0-9a-zA-Z]*)<\\/\\1>",Bt="<([^>]+)><!\\[CDATA\\[([\\s\\S]*)\\]\\]><\\/\\1>",vr=e=>{const t={},r={},o=e.match(new RegExp(qt,"g")).map(c=>c.match(new RegExp(qt))).filter(Boolean),n=e.match(new RegExp(Bt,"g")).map(c=>c.match(new RegExp(Bt))).filter(Boolean);return o.map(c=>{const[,b,z]=c;t[b]=z,r[b]="base"}),n.map(c=>{const[,b,z]=c;t[b]=(z!=null?z:"").trim(),r[b]="data"}),{obj:t,types:r}},jt=(e,t,r)=>`<${e}>${t==="data"?`<![CDATA[${r}]]>`:r}</${e}>
`;var sr={xml2Obj:vr,obj2Xml:(e,t)=>{let r="";return Object.keys(e).map(o=>{r+=jt(o,t[o],e[o])}),`<xml>
    ${r}
  </xml>`}},Lt=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!be(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},Tt=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(n,c)=>n?o(n):r(c))),ct=()=>"#"+yt((~~(Math.random()*(1<<24))).toString(16),6),Ot=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),Yr=(e=[])=>e[Ot(e.length-1)],Jr=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,n)=>{n===e-1?r[n]=t:(r[n]=Ot(1,t-1),t-=r[n])}),r},Qr=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),ao=()=>Math.random()>.5;const lo=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var so=(e,t=60)=>{if(!p())return;e=_e(e)?e.current:e!=null?e:document.body;let r=Vt(e,"resize-sensor"),o=[];const n=Oe(()=>o.map(P=>P(e)),t),c=P=>{Vt(e,"resize-sensor")||(r=lo(e,n)),o.indexOf(P)===-1&&o.push(P)},b=P=>{const V=o.indexOf(P);V!==-1&&o.splice(V,1),o.length===0&&r&&z()},z=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:c,unbind:b,destroy:z}};const ro=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const n=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var uo=(e=0,t=0,r=0,o=1)=>{var n;if(e.includes("rgb")){const c=e.match(/rgba?\((.+)\)/);if(c){const b=(n=c[1])==null?void 0:n.split(",").map(z=>z.trim());return ro(...b)}return e}return ro(e,t,r,o)},co=(e,t="px")=>`${e}`.replace(t,"")-0;const oo=()=>typeof(performance==null?void 0:performance.now)=="function"?performance.now():new Date().getTime(),fo=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},ho=()=>{const e=[],t=b=>{e.push(b),c(b)},r=()=>e[0],o=()=>e.shift(),n=b=>b.startTime=oo(),c=b=>{n(b),e.sort((z,P)=>z.startTime-P.startTime)};return{hub:e,push:t,peek:r,shift:o,update:c}};var po=(e=5)=>{const{hub:t,push:r,peek:o,shift:n,update:c}=ho(),b=fo(()=>{P()&&b()}),z=V=>oo()-V.startTime>e,P=()=>{let V=o();for(;V;){if(z(V)){c(V);break}const{task:ge}=V;typeof ge=="function"?(V.task=null,ge()):n(),V=o()}return V};return(V=()=>{})=>{r({task:V}),t.length<2&&b()}},mo=()=>p()&&document.documentElement.scrollHeight-H()===vt().height,xo=e=>{var t;p()&&(e=_e(e)?e.current:e!=null?e:window,(t=e.scrollIntoView)==null||t.call(e,{behavior:"smooth",block:"center"}))},yo={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch(r){t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},go=e=>{const t=Ut(e);p()&&document.head.appendChild(...t)},bo=(e,t=null,r=!1)=>[...e||[]].sort((o,n)=>{const c=t?o[t]:o,b=t?n[t]:n;return!isNaN(Number(c))&&!isNaN(Number(c))?r?b-c:c-b:typeof c=="string"&&typeof b=="string"?r?b.localeCompare(c):c.localeCompare(b):typeof c=="string"&&typeof b=="number"?r?-1:1:typeof c=="number"||typeof c=="string"?r?1:-1:r?-1:1}),vo=e=>{if(!F(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},wo={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const ko=de();var Co=ut(ko),jo=(e,t=!1)=>(e=t?e:`return ${e};`,Function(e)()),Eo=()=>p()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),So=(e,...t)=>{const r=[];return e.map((o,n)=>{var c;r.push(o,(c=t[n])!=null?c:"")}),r.join("")},zo=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const $o=e=>[12,zt(e),24,60,60],Fo=(e=[],t=[],r=[])=>{let o=!1;const n=[];return t.map((c,b)=>{const z=(o?c-1:c)-e[b];z<0?(n[b]=z+(r[b]||10),o=!0):(n[b]=z,o=!1)}),n.reverse()};var no=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=$o(t).reverse(),o=M(e).slice(0,-1).reverse(),n=M(t).slice(0,-1).reverse();return Fo(o,n,r)};const To=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Oo=(e,t=new Date)=>{const r=no(e,t),o=r.findIndex(n=>n>0);return r.map((n,c)=>`${n||0}${To[c]}`).slice(o).join("")},No=(e,t)=>{a(e)&&(gr(e,t)?K(e,t):m(e,t))},Io=e=>(t,r="children")=>{if(!be(t))return t;const o=n=>(n.map(c=>{be(c[r])&&(c[r]=o(c[r]))}),e(n));return o(t)},Po=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),Do=(e,t="fuckId",r="children")=>C((o,n,c)=>{o[t]=[...n.map(b=>b["@@index"]),c].join("-")})(e,r),Ao=(e,t,r,o="children")=>Q((n,c)=>{const b=n[c];return b[o]=[...b[o]||[],...r],!0})(e,t),_o=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},Bo=e=>p()?(Ce.map(t=>document.addEventListener(t,e,!1)),()=>Ce.map(t=>document.removeEventListener(t,e,!1))):void 0,Lo=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:c="20px microsoft yahei",fillStyle:b="rgba(202,202,202,0.4)",content:z="\u8BF7\u52FF\u5916\u4F20",rotate:P="-30",zIndex:V=1e3}={})=>{if(!p())return;e=_e(e)?e.current:e!=null?e:document.body;const ge=e.firstChild;(ge==null?void 0:ge.className)==="watermark-canvas"&&e.removeChild(ge);const ze=document.createElement("canvas");ze.setAttribute("width",t),ze.setAttribute("height",r);const Le=ze.getContext("2d");Le.textAlign=o,Le.textBaseline=n,Le.font=c,Le.fillStyle=b,Le.rotate(Math.PI/180*P),Le.fillText(z,parseFloat(t)/2,parseFloat(r)/2);const wr=ze.toDataURL(),Xt=document.createElement("div");Xt.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${V};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${wr}')`),e.style.position="relative",e.insertBefore(Xt,e.firstChild)},Ro=(e=new Date)=>{const t=new Date(e).getDay();return[d(1-t),d(7-t)]},Mo=e=>{if(!Me(e))return{};let t="pending",r;const o=e.then(n=>{t="success",r=n}).catch(n=>{t="error",r=n});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}};return Ue}()})},3323:function(Nt,me){"use strict";function Ue(R,oe){var G=R.length;R.push(oe);e:for(;0<G;){var we=G-1>>>1,$e=R[we];if(0<be($e,oe))R[we]=oe,R[G]=$e,G=we;else break e}}function Ae(R){return R.length===0?null:R[0]}function Te(R){if(R.length===0)return null;var oe=R[0],G=R.pop();if(G!==oe){R[0]=G;e:for(var we=0,$e=R.length,rt=$e>>>1;we<rt;){var Ke=2*(we+1)-1,ft=R[Ke],Me=Ke+1,We=R[Me];if(0>be(ft,G))Me<$e&&0>be(We,ft)?(R[we]=We,R[Me]=G,we=Me):(R[we]=ft,R[Ke]=G,we=Ke);else if(Me<$e&&0>be(We,G))R[we]=We,R[Me]=G,we=Me;else break e}}return oe}function be(R,oe){var G=R.sortIndex-oe.sortIndex;return G!==0?G:R.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var Q=performance;me.unstable_now=function(){return Q.now()}}else{var te=Date,y=te.now();me.unstable_now=function(){return te.now()-y}}var a=[],m=[],d=1,k=null,g=3,S=!1,p=!1,$=!1,_=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(R){for(var oe=Ae(m);oe!==null;){if(oe.callback===null)Te(m);else if(oe.startTime<=R)Te(m),oe.sortIndex=oe.expirationTime,Ue(a,oe);else break;oe=Ae(m)}}function L(R){if($=!1,F(R),!p)if(Ae(a)!==null)p=!0,dt(W);else{var oe=Ae(m);oe!==null&&at(L,oe.startTime-R)}}function W(R,oe){p=!1,$&&($=!1,U(ve),ve=-1),S=!0;var G=g;try{for(F(oe),k=Ae(a);k!==null&&(!(k.expirationTime>oe)||R&&!H());){var we=k.callback;if(typeof we=="function"){k.callback=null,g=k.priorityLevel;var $e=we(k.expirationTime<=oe);oe=me.unstable_now(),typeof $e=="function"?k.callback=$e:k===Ae(a)&&Te(a),F(oe)}else Te(a);k=Ae(a)}if(k!==null)var rt=!0;else{var Ke=Ae(m);Ke!==null&&at(L,Ke.startTime-oe),rt=!1}return rt}finally{k=null,g=G,S=!1}}var ee=!1,xe=null,ve=-1,Ge=5,it=-1;function H(){return!(me.unstable_now()-it<Ge)}function He(){if(xe!==null){var R=me.unstable_now();it=R;var oe=!0;try{oe=xe(!0,R)}finally{oe?_e():(ee=!1,xe=null)}}else ee=!1}var _e;if(typeof q=="function")_e=function(){q(He)};else if(typeof MessageChannel!="undefined"){var Re=new MessageChannel,Rt=Re.port2;Re.port1.onmessage=He,_e=function(){Rt.postMessage(null)}}else _e=function(){_(He,0)};function dt(R){xe=R,ee||(ee=!0,_e())}function at(R,oe){ve=_(function(){R(me.unstable_now())},oe)}me.unstable_IdlePriority=5,me.unstable_ImmediatePriority=1,me.unstable_LowPriority=4,me.unstable_NormalPriority=3,me.unstable_Profiling=null,me.unstable_UserBlockingPriority=2,me.unstable_cancelCallback=function(R){R.callback=null},me.unstable_continueExecution=function(){p||S||(p=!0,dt(W))},me.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<R?Math.floor(1e3/R):5},me.unstable_getCurrentPriorityLevel=function(){return g},me.unstable_getFirstCallbackNode=function(){return Ae(a)},me.unstable_next=function(R){switch(g){case 1:case 2:case 3:var oe=3;break;default:oe=g}var G=g;g=oe;try{return R()}finally{g=G}},me.unstable_pauseExecution=function(){},me.unstable_requestPaint=function(){},me.unstable_runWithPriority=function(R,oe){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var G=g;g=R;try{return oe()}finally{g=G}},me.unstable_scheduleCallback=function(R,oe,G){var we=me.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?we+G:we):G=we,R){case 1:var $e=-1;break;case 2:$e=250;break;case 5:$e=1073741823;break;case 4:$e=1e4;break;default:$e=5e3}return $e=G+$e,R={id:d++,callback:oe,priorityLevel:R,startTime:G,expirationTime:$e,sortIndex:-1},G>we?(R.sortIndex=G,Ue(m,R),Ae(a)===null&&R===Ae(m)&&($?(U(ve),ve=-1):$=!0,at(L,G-we))):(R.sortIndex=$e,Ue(a,R),p||S||(p=!0,dt(W))),R},me.unstable_shouldYield=H,me.unstable_wrapCallback=function(R){var oe=g;return function(){var G=g;g=oe;try{return R.apply(this,arguments)}finally{g=G}}}},1102:function(Nt,me,Ue){"use strict";Nt.exports=Ue(3323)}}]);
