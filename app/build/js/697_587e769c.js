(self.webpackChunk=self.webpackChunk||[]).push([[697],{1975:function(Pt,me,Ve){(function(Ae,$e){Pt.exports=$e(Ve(7378),Ve(1542))})(this,function(Ae,$e){return function(){"use strict";var ve={193:function(a,m,c){var k=c(703),y=c.n(k),E=c(414),p=c.n(E),$=p()(y());$.push([a.id,`/*@height:2px;
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
  background-color: var(--linkHoverColor);
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
  background-color: var(--linkHoverColor);
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
`,""]),$.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},m.Z=$},145:function(a,m,c){var k=c(703),y=c.n(k),E=c(414),p=c.n(E),$=p()(y());$.push([a.id,`.kLIGi {
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
`,""]),$.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},m.Z=$},842:function(a,m,c){var k=c(703),y=c.n(k),E=c(414),p=c.n(E),$=p()(y());$.push([a.id,`@keyframes animate-drawer-in {
  0% {
    opacity: 0;
    transform: translate3d(0, 0, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }
}
@keyframes animate-drawer-out {
  0% {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
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
  animation: animate-drawer-out 0.25s forwards;
}
.KsHNu.c6aFy {
  animation: animate-drawer-in 0.25s forwards;
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
}
.W4gG3 .e3AWW .VSVwl:before {
  content: "\\00D7";
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
`,""]),$.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},m.Z=$},563:function(a,m,c){var k=c(703),y=c.n(k),E=c(414),p=c.n(E),$=p()(y());$.push([a.id,`@keyframes animate-drop-in {
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
  zoom: 1;
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
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
`,""]),$.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},m.Z=$},697:function(a,m,c){var k=c(703),y=c.n(k),E=c(414),p=c.n(E),$=p()(y());$.push([a.id,`@keyframes animate-modal-in {
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
`,""]),$.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},m.Z=$},810:function(a,m,c){var k=c(703),y=c.n(k),E=c(414),p=c.n(E),$=p()(y());$.push([a.id,`.clear {
  zoom: 1;
}
.clear::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.J8VWE {
  position: relative;
  background: var(--panelBgColor);
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.02);
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
  border-radius: 4px;
  border-color: rgba(0, 180, 220, 0.5);
  box-shadow: 0 0 2rem rgba(0, 180, 220, 0.5) inset;
}
.J8VWE .rOxNb {
  zoom: 1;
  padding: 10px 12px;
  border-radius: 2px;
}
.J8VWE .rOxNb::after {
  clear: both;
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
}
.J8VWE .OQwTX {
  zoom: 1;
  padding: 8px 12px;
  background-color: rgba(0, 0, 0, 0.02);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
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
.J8VWE .OQwTX .eCk2_ a {
  float: right;
  font-size: 1.8rem;
}
.J8VWE .OQwTX .eCk2_ a:not(:first-of-type) {
  margin-right: 10px;
}
.J8VWE .OQwTX + .rOxNb {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
`,""]),$.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_"},m.Z=$},31:function(a,m,c){var k=c(703),y=c.n(k),E=c(414),p=c.n(E),$=p()(y());$.push([a.id,`.cols-1 {
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
`,""]),$.locals={},m.Z=$},201:function(a,m,c){var k=c(703),y=c.n(k),E=c(414),p=c.n(E),$=p()(y());$.push([a.id,`@keyframes before {
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
`,""]),$.locals={},m.Z=$},289:function(a,m,c){var k=c(703),y=c.n(k),E=c(414),p=c.n(E),$=p()(y());$.push([a.id,`.clear {
  zoom: 1;
}
.clear::after {
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
  zoom: 1;
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
`,""]),$.locals={},m.Z=$},626:function(a,m,c){var k=c(703),y=c.n(k),E=c(414),p=c.n(E),$=p()(y());$.push([a.id,`.ofth_ {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  width: 100%;
}
.hVmF3 {
  position: relative;
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
`,""]),$.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},m.Z=$},435:function(a,m,c){var k=c(703),y=c.n(k),E=c(414),p=c.n(E),$=p()(y());$.push([a.id,`.node-right-icon-close {
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
  content: "";
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
  content: "";
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
.huxy-tree .huxy-tree-track .huxy-tree-root > li > a {
  padding-left: 6px;
  font-size: 1.3rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > a {
  padding-left: 22px;
  font-size: 1.2rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > a {
  padding-left: 38px;
  font-size: 1.1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > a {
  padding-left: 54px;
  font-size: 1rem;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08) inset;
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > ul > li > ul > li > ul > li > ul > li > a {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active::after {
  display: none;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {
  content: "";
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {
  left: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 3px;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon .default-left-icon:after {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon > * {
  vertical-align: middle;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text {
  display: block;
  padding: 0 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon {
  right: 0;
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  content: "";
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  content: "";
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
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: hidden;
  transition: max-height 0.3s;
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > a {
  border-bottom: 1px solid rgba(0, 0, 0, 0.03);
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.collapsed.huxy-tree {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root {
  width: var(--collapsedWidth);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a {
  padding-left: 0px;
  position: relative;
  /*&:hover,*/
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a::after {
  content: "";
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > a.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: visible;
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
  content: "";
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon {
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  content: "";
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
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li {
  z-index: 10001;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-text,
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-right-icon {
  display: none;
}
.collapsed.huxy-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {
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
  --itemPadding: 8px;
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a.active::after {
  display: none;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li[has-children="true"] > a .node-text {
  padding-right: calc(var(--rightIconWidth) + 5px);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a {
  /*&:hover,*/
  position: relative;
  display: block;
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-decoration: none;
  transition: all 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a::after {
  content: "";
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a.active::after {
  transform: scale(1);
  transition: transform 0.3s;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a.active {
  background-color: hsla(0, 0%, 0%, 0.02);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a:hover {
  background-color: hsla(0, 0%, 0%, 0.03);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon {
  display: block;
  position: absolute;
  top: 0;
  width: var(--leftIconWidth);
  height: var(--subItemHeight);
  line-height: var(--subItemHeight);
  text-align: center;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon .default-left-icon:after {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon + .node-text {
  padding-left: var(--leftIconWidth);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-left-icon > * {
  vertical-align: middle;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text {
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
  right: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  content: "";
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  top: calc(50% + var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::before {
  transform: rotate(135deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li > a .node-text + .node-right-icon .default-right-icon::after {
  transform: rotate(45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  content: "";
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li.open > a .node-right-icon .default-right-icon::after {
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
  content: "";
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
  content: "";
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon {
  height: 100%;
  width: var(--rightIconWidth);
  position: absolute;
  top: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon {
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  content: "";
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  left: 0;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  left: calc(1px * 0.7);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before,
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  top: calc(50% - var(--pos));
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::before {
  transform: rotate(225deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > a .node-right-icon .default-right-icon::after {
  transform: rotate(-45deg);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root li:hover > ul {
  transform: scale(1);
  transition: 0.3s transform;
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li {
  float: left;
  padding: 0 var(--itemPadding);
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
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > a {
  height: var(--itemHeight);
  line-height: var(--itemHeight);
}
.huxy-horizontal-tree .huxy-tree-track .huxy-tree-root > li > a .node-left-icon {
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
  content: "";
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
  content: "";
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
`,""]),$.locals={},m.Z=$},414:function(a){a.exports=function(m){var c=[];return c.toString=function(){return this.map(function(k){var y="",E=typeof k[5]!="undefined";return k[4]&&(y+="@supports (".concat(k[4],") {")),k[2]&&(y+="@media ".concat(k[2]," {")),E&&(y+="@layer".concat(k[5].length>0?" ".concat(k[5]):""," {")),y+=m(k),E&&(y+="}"),k[2]&&(y+="}"),k[4]&&(y+="}"),y}).join("")},c.i=function(k,y,E,p,$){typeof k=="string"&&(k=[[null,k,void 0]]);var A={};if(E)for(var q=0;q<this.length;q++){var G=this[q][0];G!=null&&(A[G]=!0)}for(var F=0;F<k.length;F++){var M=[].concat(k[F]);E&&A[M[0]]||(typeof $!="undefined"&&(typeof M[5]=="undefined"||(M[1]="@layer".concat(M[5].length>0?" ".concat(M[5]):""," {").concat(M[1],"}")),M[5]=$),y&&(M[2]&&(M[1]="@media ".concat(M[2]," {").concat(M[1],"}")),M[2]=y),p&&(M[4]?(M[1]="@supports (".concat(M[4],") {").concat(M[1],"}"),M[4]=p):M[4]="".concat(p)),c.push(M))}},c}},703:function(a){a.exports=function(m){return m[1]}},53:function(a,m,c){var k,y=c(899),E=Symbol.for("react.element"),p=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,A=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function G(F,M,W){var te,xe={},Ce=null,tt=null;W!==void 0&&(Ce=""+W),M.key!==void 0&&(Ce=""+M.key),M.ref!==void 0&&(tt=M.ref);for(te in M)$.call(M,te)&&!q.hasOwnProperty(te)&&(xe[te]=M[te]);if(F&&F.defaultProps)for(te in M=F.defaultProps,M)xe[te]===void 0&&(xe[te]=M[te]);return{$$typeof:E,type:F,key:Ce,ref:tt,props:xe,_owner:A.current}}k=p,m.jsx=G,m.jsxs=G},458:function(a,m,c){a.exports=c(53)},748:function(a){var m=[];function c(E){for(var p=-1,$=0;$<m.length;$++)if(m[$].identifier===E){p=$;break}return p}function k(E,p){for(var $={},A=[],q=0;q<E.length;q++){var G=E[q],F=p.base?G[0]+p.base:G[0],M=$[F]||0,W="".concat(F," ").concat(M);$[F]=M+1;var te=c(W),xe={css:G[1],media:G[2],sourceMap:G[3],supports:G[4],layer:G[5]};if(te!==-1)m[te].references++,m[te].updater(xe);else{var Ce=y(xe,p);p.byIndex=q,m.splice(q,0,{identifier:W,updater:Ce,references:1})}A.push(W)}return A}function y(E,p){var $=p.domAPI(p);$.update(E);var A=function(q){if(q){if(q.css===E.css&&q.media===E.media&&q.sourceMap===E.sourceMap&&q.supports===E.supports&&q.layer===E.layer)return;$.update(E=q)}else $.remove()};return A}a.exports=function(E,p){p=p||{},E=E||[];var $=k(E,p);return function(A){A=A||[];for(var q=0;q<$.length;q++){var G=$[q],F=c(G);m[F].references--}for(var M=k(A,p),W=0;W<$.length;W++){var te=$[W],xe=c(te);m[xe].references===0&&(m[xe].updater(),m.splice(xe,1))}$=M}}},736:function(a){var m={};function c(y){if(typeof m[y]=="undefined"){var E=document.querySelector(y);if(window.HTMLIFrameElement&&E instanceof window.HTMLIFrameElement)try{E=E.contentDocument.head}catch(p){E=null}m[y]=E}return m[y]}function k(y,E){var p=c(y);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(E)}a.exports=k},706:function(a){function m(c){var k=document.createElement("style");return c.setAttributes(k,c.attributes),c.insert(k,c.options),k}a.exports=m},567:function(a,m,c){function k(y){var E=c.nc;E&&y.setAttribute("nonce",E)}a.exports=k},306:function(a){function m(y,E,p){var $="";p.supports&&($+="@supports (".concat(p.supports,") {")),p.media&&($+="@media ".concat(p.media," {"));var A=typeof p.layer!="undefined";A&&($+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),$+=p.css,A&&($+="}"),p.media&&($+="}"),p.supports&&($+="}");var q=p.sourceMap;q&&typeof btoa!="undefined"&&($+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(q))))," */")),E.styleTagTransform($,y,E.options)}function c(y){if(y.parentNode===null)return!1;y.parentNode.removeChild(y)}function k(y){var E=y.insertStyleElement(y);return{update:function(p){m(E,y,p)},remove:function(){c(E)}}}a.exports=k},62:function(a){function m(c,k){if(k.styleSheet)k.styleSheet.cssText=c;else{for(;k.firstChild;)k.removeChild(k.firstChild);k.appendChild(document.createTextNode(c))}}a.exports=m},899:function(a){a.exports=Ae},994:function(a){a.exports=$e}},ee={};function oe(a){var m=ee[a];if(m!==void 0)return m.exports;var c=ee[a]={id:a,exports:{}};return ve[a](c,c.exports,oe),c.exports}(function(){oe.n=function(a){var m=a&&a.__esModule?function(){return a.default}:function(){return a};return oe.d(m,{a:m}),m}})(),function(){oe.d=function(a,m){for(var c in m)oe.o(m,c)&&!oe.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:m[c]})}}(),function(){oe.o=function(a,m){return Object.prototype.hasOwnProperty.call(a,m)}}(),function(){oe.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){oe.nc=void 0}();var g={};return function(){oe.r(g),oe.d(g,{Anico:function(){return tt},Carousel:function(){return ar},Col:function(){return jt},Drawer:function(){return Et},Drop:function(){return wt},Ellipsis:function(){return gr},ErrorBoundary:function(){return wr},FullPage:function(){return h},HandleError:function(){return x},LoadError:function(){return b},Mask:function(){return ht},MaxSize:function(){return ke},Modal:function(){return ue},Panel:function(){return Rt},Portal:function(){return ft},Row:function(){return mr},Spinner:function(){return Ye},TabHeader:function(){return Zr},Tooltip:function(){return Gt},Tree:function(){return Ar},fixEle:function(){return dr},fixIcon:function(){return $r},renderTree:function(){return jr},str2React:function(){return C},str2Vue:function(){return rr}});var a=oe(458),m=oe(748),c=oe.n(m),k=oe(306),y=oe.n(k),E=oe(736),p=oe.n(E),$=oe(567),A=oe.n($),q=oe(706),G=oe.n(q),F=oe(62),M=oe.n(F),W=oe(193),te={};te.styleTagTransform=M(),te.setAttributes=A(),te.insert=p().bind(null,"head"),te.domAPI=y(),te.insertStyleElement=G();var xe=c()(W.Z,te),Ce=W.Z&&W.Z.locals?W.Z.locals:void 0,tt=i=>(0,a.jsx)("span",{className:Ce.anico,children:(0,a.jsx)("span",{className:[Ce.hline,...(i.type||"").split(" ").map(l=>Ce[l]).filter(Boolean)].join(" ")})}),rt=oe(994),Z=oe(899),Re=oe.n(Z),ze=(i,l)=>{const f=(0,Z.useRef)();(0,Z.useEffect)(()=>{f.current=i},[i]),(0,Z.useEffect)(()=>{if(l){const S=setInterval(()=>f.current(),l);return()=>clearInterval(S)}},[l])},Ue=()=>![typeof window,typeof document].includes("undefined"),bt=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),Xe=i=>bt(i).indexOf("element")>-1,at=(i=null)=>{var l,f;return Ue()?Xe(i)?{width:i.clientWidth,height:i.clientHeight}:{width:(l=window.innerWidth)!=null?l:document.documentElement.clientWidth,height:(f=window.innerHeight)!=null?f:document.documentElement.clientHeight}:{width:0,height:0}},R=(i=()=>{},l=60)=>{let f=null;return function(...S){clearTimeout(f),f=setTimeout(()=>i.apply(this,S),l)}},ae=(i,l)=>Object.prototype.hasOwnProperty.call(i!=null?i:{},l),K=i=>ae(i,"current");const Ee=(i,l)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const f=document.createElement("object");return f.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),f.setAttribute("class","resize-sensor"),f.onload=()=>{f.contentDocument.defaultView.addEventListener("resize",l,!1),l()},f.type="text/html",i.appendChild(f),f.data="about:blank",f};var Fe=(i,l=60)=>{if(!Ue())return;i=K(i)?i.current:i!=null?i:document.body;let f,S=[];const T=R(()=>S.map(H=>H(i)),l),N=H=>{f||(f=Ee(i,T)),S.indexOf(H)===-1&&S.push(H)},L=H=>{const ie=S.indexOf(H);ie!==-1&&S.splice(ie,1),S.length===0&&f&&X()},X=()=>{f&&f.parentNode&&(f.contentDocument&&f.contentDocument.defaultView.removeEventListener("resize",T,!1),f.parentNode.removeChild(f),f=void 0,S=[])};return{element:i,bind:N,unbind:L,destroy:X}},ct=(i={})=>{const l=(0,Z.useRef)(0),[f,S]=(0,Z.useState)(i),T=(0,Z.useCallback)(N=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>S(N))},[]);return(0,Z.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[f,T]},Ze=(i=null,l=60)=>{const f=K(i)?i.current:i,{bind:S,destroy:T}=Fe(f,l),[N,L]=ct(at(f));return(0,Z.useEffect)(()=>(S(()=>f&&L(at(f))),()=>T()),[f]),N},ot=oe(145),Ne={};Ne.styleTagTransform=M(),Ne.setAttributes=A(),Ne.insert=p().bind(null,"head"),Ne.domAPI=y(),Ne.insertStyleElement=G();var Ge=c()(ot.Z,Ne),Je=ot.Z&&ot.Z.locals?ot.Z.locals:void 0,ar=({children:i,active:l=0,delay:f=5e3,className:S,...T})=>{const[N,L]=(0,Z.useState)(l+1),[X,H]=(0,Z.useState)(!1),ie=(0,Z.useRef)(),le=(0,Z.useRef)(""),{width:he}=Ze(ie);i=Array.isArray(i)?i:[i];const de=i[0],Ie=[i[i.length-1],...i,de],De=Ie.length;ze(()=>{let Oe=N+1;Oe=Oe===De?1:Oe,le.current&&(le.current=""),L(Oe),Oe===De-1&&setTimeout(()=>{le.current="none",L(1)},500)},X?null:f);const ye=(Oe,Pe)=>{Pe.stopPropagation(),le.current="",L(Oe),(0,rt.flushSync)(()=>H(!0)),H(!1)},He={width:`${De*he}px`,transform:`translateX(${-he*N}px)`,transition:le.current};return(0,a.jsxs)("div",{className:`${Je["huxy-carousel"]}${S?` ${S}`:""}`,...T,ref:ie,children:[(0,a.jsx)("div",{className:Je["huxy-carousel-wrap"],style:He,children:Ie.map((Oe,Pe)=>(0,a.jsx)("div",{className:`${Je["carousel-item"]} ${N===Pe?Je.active:""}`,style:{width:`${he}px`},children:Oe},`huxy-carousel-${Pe}`))}),(0,a.jsx)("div",{className:Je["carousel-switch"],children:i.map((Oe,Pe)=>(0,a.jsx)("span",{className:`${Je.dot} ${N===Pe+1?Je.active:""}`,onClick:ut=>ye(Pe+1,ut)},`huxy-carousel-switch-${Pe}`))})]})};const dt=(i,l)=>{let f="",S="";if(typeof l=="number"&&(f=`col-${i}-${l}`),typeof l=="object"){const{span:T,offset:N}=l;f=T?`col-${i}-${T}`:"",S=N?`offset-${i}-${N}`:""}return{sp:f,os:S}};var jt=(0,Z.forwardRef)(({span:i,offset:l,xl:f,lg:S,md:T,sm:N,xs:L,style:X,width:H,auto:ie,offsetWidth:le="0px",className:he,...de},Ie)=>{const De=he?` ${he}`:"",ye=`col-${i||12}`,He=l?`offset-${l}`:"",{sp:Oe,os:Pe}=dt("xs",L),{sp:ut,os:Zt}=dt("sm",N),{sp:ir,os:Nr}=dt("md",T),{sp:Yt,os:Pr}=dt("lg",S),{sp:Ir,os:Ot}=dt("xl",f),Nt=[ye,Ir,Yt,ir,ut,Oe,He,Ot,Pr,Nr,Zt,Pe].filter(Boolean).join(" "),gt=ie?{width:"auto",flex:1,maxWidth:`calc(100% - ${le})`}:{width:H};return(0,a.jsx)("div",{className:`${Nt}${De}`,...de,style:{...gt,...X},ref:Ie})}),It=()=>{const i=(0,Z.useRef)(!0);return i.current?(i.current=!1,!0):!1},Vt=(i,l=[])=>{const f=It();(0,Z.useEffect)(()=>{if(!f)return i()},l)},Lt=(i,l=450)=>{const[f,S]=(0,Z.useState)(i);return Vt(()=>{let T;return i||l===0?S(i):T=setTimeout(()=>S(i),l),()=>T&&clearTimeout(T)},[i]),[f,S]},ft=({children:i,mountNode:l=document.body})=>(0,rt.createPortal)(i,l);const Ut={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},Ke={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},lr={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},qt=document.body;var ht=({open:i,close:l,delay:f=300,children:S,mountNode:T,hasMask:N=!0,style:L,className:X="h-mask"})=>{const[H]=Lt(i,f);return qt.style.overflow=H?"hidden":"",(0,a.jsx)(ft,{mountNode:T,children:(0,a.jsx)("div",{children:H?(0,a.jsxs)("div",{className:X,style:Ut,children:[N?(0,a.jsx)("div",{style:Ke,onClick:ie=>l==null?void 0:l(ie)}):null,(0,a.jsx)("div",{style:{...lr,...L},children:S})]}):null})})},Dt=oe(842),vt={};vt.styleTagTransform=M(),vt.setAttributes=A(),vt.insert=p().bind(null,"head"),vt.domAPI=y(),vt.insertStyleElement=G();var sr=c()(Dt.Z,vt),lt=Dt.Z&&Dt.Z.locals?Dt.Z.locals:void 0,Et=({open:i,close:l,footer:f,header:S,className:T,children:N,width:L="300px"})=>{var X;const H=["drawer-wrap",i?"open":"",...(X=T==null?void 0:T.split(" "))!=null?X:[]].filter(Boolean).map(ie=>lt[ie]).join(" ");return(0,a.jsx)(ht,{open:i,close:l,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,a.jsx)("div",{className:H,style:{width:L},children:(0,a.jsxs)("div",{className:lt["drawer-container"],children:[(0,a.jsxs)("div",{className:lt["drawer-header"],children:[(0,a.jsx)("a",{className:lt["ico-close"],onClick:ie=>l==null?void 0:l(ie)}),(0,a.jsx)("div",{children:S})]}),(0,a.jsx)("div",{className:lt["drawer-content"],children:N}),f?(0,a.jsx)("div",{className:lt["drawer-footer"],children:f}):null]})})})},ur=(i,l,f="click")=>{(0,Z.useEffect)(()=>{const S=N=>{const L=K(i)?i.current:i;(L==null?void 0:L.contains)&&!L.contains(N.target)&&l(N)},T=typeof f=="string"?[f]:f;return T.map(N=>{document.addEventListener(N,S,!1)}),()=>{T.map(N=>{document.removeEventListener(N,S,!1)})}},[i,l,f])},Mt=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",cr=(i="")=>i.replace(/^\S/,l=>l.toUpperCase()),pt=i=>{var l;if(Ue())return i=K(i)?i.current:i!=null?i:document.body,(l=i.getBoundingClientRect)==null?void 0:l.call(i)},u=i=>{if(!Ue())return;const l=document.createElement("div");return l.innerHTML=i,l.children[0]},v=(i,l={},f=!1)=>{!Xe(i)||Object.keys(l).map(S=>{i.style.setProperty(S,f?"":l[S])})};const j=(i=350)=>new Promise(l=>setTimeout(l,i)),O=(i=100)=>{const l=Date.now();for(;Date.now()-l<=i;);};var P=j,J=async(i,l=15)=>{if(!Ue())return;if(typeof i=="string"&&(i=u(i)),i=K(i)?i.current:i,!Xe(i))return{};const f=i.cloneNode(!0);v(f,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(f),await P(l);const S=pt(f);return i.parentNode.removeChild(f),S};const fe=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,se=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,ne=(i,l)=>{var f;l=`huxy-drop-arrow-${l}`;const S=(f=i.getAttribute("class"))!=null?f:"";fe.test(S)?i.setAttribute("class",S.replace(se,l)):i.setAttribute("class",`${S} ${l}`)},Te=async(i,l,f)=>{const{left:S,right:T,top:N,bottom:L}=pt(i),{width:X,height:H}=at(),{width:ie,height:le}=await J(l);if(T<0||L<0||S>X||N>H)return{};if(f==="vertical"){const he={left:S+"px",top:L+10+"px",right:"auto",bottom:"auto"};let de="lt";S+ie>X&&(he.left=T-ie+"px",de="rt"),L+10+le>H&&(he.top=N-10-le+"px",de=de==="lt"?"lb":"rb"),v(l,he),ne(l,de)}else{const he={left:T+10+"px",top:N+"px",right:"auto",bottom:"auto"};let de="tl";T+10+ie>X&&(he.left=S-10-ie+"px",de="tr"),N+le>H&&(he.top=L-le+"px",de=de==="tl"?"bl":"br"),v(l,he),ne(l,de)}};var st=(i,l,f="horizontal")=>{const S=R(Te),T=()=>S(i,l,f);window.addEventListener("scroll",T,!1),window.addEventListener("resize",T,!1);const N=()=>{window.removeEventListener("scroll",T),window.removeEventListener("resize",T),v(l,{left:"",top:"",right:"",bottom:""})};return Te(i,l,f),N},St=({open:i,delay:l=250,children:f,mountNode:S,style:T,className:N="huxy-mask"})=>{const[L]=Lt(i,l);return(0,a.jsx)(ft,{mountNode:S,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:N,children:(0,a.jsx)("div",{style:{...T,display:L?"block":"none"},children:f})})})})},mt=oe(563),Me={};Me.styleTagTransform=M(),Me.setAttributes=A(),Me.insert=p().bind(null,"head"),Me.domAPI=y(),Me.insertStyleElement=G();var Bt=c()(mt.Z,Me),At=mt.Z&&mt.Z.locals?mt.Z.locals:void 0,wt=({trigger:i="click",type:l,dropList:f,className:S,children:T,...N})=>{const[L,X]=(0,Z.useState)(!1),H=(0,Z.useRef)(),ie=(0,Z.useRef)(),le=(0,Z.useRef)();ur(H,ye=>L&&X(!1),[...new Set(["click",i.toLowerCase()])]),(0,Z.useEffect)(()=>()=>{var ye;return(ye=le.current)==null?void 0:ye.call(le)},[]);const he=ye=>{ye.preventDefault(),X(!0),le.current=st(H.current,ie.current,l)},de={[`on${cr(i)}`]:he},Ie=["drop-wrap",L?"open":""].filter(Boolean).map(ye=>At[ye]).join(" "),De=Mt(f)?f:f==null?void 0:f(()=>X(!1),L);return(0,a.jsxs)("span",{ref:H,className:`${At["drop-target"]}${S?` ${S}`:""}`,...de,...N,children:[T,(0,a.jsx)(St,{open:L,className:"huxy-drop",children:(0,a.jsx)("div",{ref:ie,className:Ie,children:De})})]})},kt=(i,l={},f)=>{if(!Ue())return;f=K(f)?f.current:f!=null?f:document.body;const S=document.createElement("span");S.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),l&&v(S,l),S.innerText=i,f.appendChild(S);const T=S.getBoundingClientRect();return f.removeChild(S),T},nt=oe(626),_e={};_e.styleTagTransform=M(),_e.setAttributes=A(),_e.insert=p().bind(null,"head"),_e.domAPI=y(),_e.insertStyleElement=G();var Mr=c()(nt.Z,_e),Sr=nt.Z&&nt.Z.locals?nt.Z.locals:void 0,Gt=({title:i,placement:l="topRight",children:f,ellipsis:S,className:T,...N})=>(0,a.jsx)("span",{className:`${Sr[`huxy-tooltip-${l}`]}${T?` ${T}`:""}`,tooltip:i!=null?i:f,...N,children:(0,a.jsx)("span",{className:S?Sr.ellipsis:"",children:f})});const yr={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"};var gr=i=>{var l,f,S,T;const{children:N}=i,L=typeof N=="string",X=L?N:(S=(l=N==null?void 0:N.props)==null?void 0:l.title)!=null?S:(f=N==null?void 0:N.props)==null?void 0:f.children,H=(0,Z.useRef)(),[ie,le]=(0,Z.useState)(!1),he=Ze(H,250);return(0,Z.useEffect)(()=>{if(H.current){const{width:de}=kt(X),{width:Ie}=pt(H.current),De=de>Ie;De!==ie&&le(De)}},[X,he.width]),(0,a.jsx)("span",{ref:H,style:{width:"100%",display:"inline-block"},children:ie?L?(0,a.jsx)(Gt,{...i,ellipsis:!0}):(0,a.jsx)("span",{style:yr,children:N}):L?N:(T=N==null?void 0:N.props)==null?void 0:T.children})},Xt=Object.defineProperty,br=(i,l,f)=>l in i?Xt(i,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):i[l]=f,vr=(i,l,f)=>(br(i,typeof l!="symbol"?l+"":l,f),f);class wr extends Re().Component{constructor(){super(...arguments),vr(this,"state",{error:null})}static getDerivedStateFromError(l){return{error:l}}componentDidCatch(l,f){const{errorReport:S}=this.props;typeof S=="function"&&S({error:l,info:f.componentStack})}render(){const{error:l}=this.state,{fallback:f,children:S}=this.props;return l?f(l):S}}var dr=i=>l=>{if(typeof l=="function"||typeof(l==null?void 0:l.render)=="function")return(0,a.jsx)(l,{});if(typeof l=="string"){const f=i==null?void 0:i[l];return f?(0,a.jsx)(f,{}):(0,a.jsx)("i",{className:l})}return l!=null?l:null};const fr=i=>dr(i);var $r=i=>({icon:l,defaultIcon:f=null})=>l?fr(i)(l):l===!1?null:f;const Jt=["","webkit","moz","ms"],hr=i=>Jt.map(l=>l?`${l}FullscreenElement`:"fullscreenElement").find(l=>i[l]),zr=i=>Jt.map(l=>l?`${l}RequestFullscreen`:"requestFullscreen").find(l=>i[l]),Fr=i=>Jt.map(l=>l?`${l}ExitFullscreen`:"exitFullscreen").find(l=>i[l]),_t=Jt.map(i=>`${i}fullscreenchange`);var kr=i=>{var l,f;if(!Ue())return;i=K(i)?i.current:i!=null?i:document.body;const S=hr(document),T=zr(i),N=Fr(document);document[S]?(f=document[N])==null||f.call(document):(l=i[T])==null||l.call(i)},Cr=i=>Ue()?(_t.map(l=>document.addEventListener(l,i,!1)),()=>_t.map(l=>document.removeEventListener(l,i,!1))):void 0;const s=i=>(0,a.jsx)("i",{...i,children:"..."});var h=({panel:i,fullIcon:l=s,exitIcon:f=s,...S})=>{const T=K(i)?i.current:i,[N,L]=(0,Z.useState)();(0,Z.useEffect)(()=>{const H=Cr(()=>{L(ie=>!ie)});return()=>H()},[]);const X=N?f:l;return(0,a.jsx)(X,{onClick:H=>kr(T),...S})},C=(i,l)=>(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...l}),b=i=>{const{error:l={},info:f=""}=i||{},{message:S,stack:T,errMsg:N}=l;let L=N||T||l.toString();L=`${L}
${f}`.replace(/\r|\n|\r\n/g,"<br/>"),L=L.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),L=L.replace(/\s/g,"&nbsp;");const X=S==null?void 0:S.slice(0,120).split(". ").slice(0,2).join(". ");return(0,a.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[C(L,{style:{color:"red"}}),X&&(0,a.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${X}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},x=({children:i,report:l})=>{var f;const S=(0,Z.useRef)();return(f=S.current)!=null&&f.state&&(S.current.state.error=null),(0,a.jsx)(wr,{ref:S,fallback:(T,N)=>b({error:T,info:N}),errorReport:l,children:i})};const B=(i,l)=>Object.keys(l).map(f=>i.style[f]=l[f]),Y=(i,l)=>Object.keys(l).map(f=>i.style[f]=""),V={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},_=({left:i,top:l,width:f,height:S})=>({left:`${i}px`,top:`${l}px`,width:`${f}px`,height:`${S}px`}),D=i=>(0,a.jsx)("i",{...i,children:"..."}),ce=i=>{const{left:l,top:f}=pt(i),{width:S,height:T}=at(i);return{left:l,top:f,width:S,height:T}};var ke=({panel:i,target:l,fullIcon:f=D,exitIcon:S=D})=>{i=K(i)?i.current:i||document.body;const[T,N]=(0,Z.useState)(),L=(0,Z.useRef)(),X=(0,Z.useRef)();(0,Z.useEffect)(()=>{const le=typeof l=="function"?l:()=>document.getElementsByClassName(l)[0];X.current=_(ce(le())),L.current={...V,..._(ce(i))}},[i]);const H=(le,he)=>{le?(B(he,L.current),setTimeout(()=>{B(he,X.current)},0)):Y(he,L.current),N(le)},ie=T?S:f;return(0,a.jsx)(ie,{onClick:le=>H(!T,i)})},pe=oe(697),Q={};Q.styleTagTransform=M(),Q.setAttributes=A(),Q.insert=p().bind(null,"head"),Q.domAPI=y(),Q.insertStyleElement=G();var we=c()(pe.Z,Q),je=pe.Z&&pe.Z.locals?pe.Z.locals:void 0,ue=({open:i,close:l,hasMask:f=!0,cancelText:S="\u53D6\u6D88",submit:T,submitText:N="\u786E\u5B9A",title:L="Modal \u5F39\u7A97",className:X,children:H,delay:ie=250})=>{var le;const he=["modal-wrap",i?"open":"",...(le=X==null?void 0:X.split(" "))!=null?le:[]].filter(Boolean).map(de=>je[de]).join(" ");return(0,a.jsx)(ht,{open:i,close:l,delay:ie,hasMask:f,className:"huxy-modal",children:(0,a.jsx)("div",{className:he,children:(0,a.jsxs)("div",{className:je["modal-container"],children:[(0,a.jsx)("div",{className:je["modal-header"],children:L}),(0,a.jsx)("div",{className:je["modal-content"],children:H}),(0,a.jsxs)("div",{className:je["modal-footer"],children:[(0,a.jsx)("div",{className:`${je.btn} ${je.left}`,onClick:de=>l==null?void 0:l(de),children:S}),(0,a.jsx)("div",{className:`${je.btn} ${je.right}`,onClick:de=>T==null?void 0:T(de),children:N})]})]})})})},re=oe(201),be={};be.styleTagTransform=M(),be.setAttributes=A(),be.insert=p().bind(null,"head"),be.domAPI=y(),be.insertStyleElement=G();var Le=c()(re.Z,be),qe=re.Z&&re.Z.locals?re.Z.locals:void 0,Ye=({global:i,absolute:l})=>(0,a.jsx)("div",{className:`spinner${i?" global":""}${l?" absolute":""}`,children:(0,a.jsx)("figure",{className:"spinning"})}),We=oe(810),Qe={};Qe.styleTagTransform=M(),Qe.setAttributes=A(),Qe.insert=p().bind(null,"head"),Qe.domAPI=y(),Qe.insertStyleElement=G();var pr=c()(We.Z,Qe),xt=We.Z&&We.Z.locals?We.Z.locals:void 0;const $t=i=>{var l;return(l=i==null?void 0:i.filter)==null?void 0:l.call(i,f=>typeof f=="function")},zt=(i,l)=>{const f=(0,Z.useRef)(),{loading:S,title:T,plugins:N,children:L,className:X,...H}=i,ie=$t(N),le=ie==null?void 0:ie.length,he=X?` ${X}`:"",de=K(l)?l:f;return(0,a.jsxs)("div",{className:`${xt.panel}${he}`,...H,ref:de,children:[(T||le)&&(0,a.jsxs)("div",{className:xt["panel-header"],children:[T&&(0,a.jsx)("h4",{className:xt["panel-title"],children:T}),le&&(0,a.jsx)("div",{className:xt["panel-plugins"],children:ie.map((Ie,De)=>(0,a.jsx)("a",{children:(0,a.jsx)(Ie,{panel:de})},De))})]}),(0,a.jsx)("div",{className:xt["panel-body"],children:L}),S&&(0,a.jsx)(Ye,{})]})};var Rt=(0,Z.forwardRef)(zt),et=oe(31),Ft={};Ft.styleTagTransform=M(),Ft.setAttributes=A(),Ft.insert=p().bind(null,"head"),Ft.domAPI=y(),Ft.insertStyleElement=G();var it=c()(et.Z,Ft),Tt=et.Z&&et.Z.locals?et.Z.locals:void 0;const Kt=({gutter:i=10,className:l,overflow:f="hidden",...S},T)=>{var N;const L=l?` ${l}`:"";let X=10;if(Array.isArray(i)){const H=[...i];i=H[0],X=(N=H[1])!=null?N:H[0]}return(0,a.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(X/2)}px`,overflow:f},children:(0,a.jsx)("div",{className:`row${L}`,...S,ref:T})})};var mr=(0,Z.forwardRef)(Kt),Ct=i=>bt(i)==="array",Wt=i=>Ct(i)&&!!i.length;const Tr=({item:i,to:l,preventDefault:f,stopPropagation:S,...T})=>(0,a.jsx)("a",{href:f?null:l,...T}),Qt=({item:i,...l})=>(0,a.jsx)("ul",{...l}),er=(i,...l)=>{const f={};return Object.keys(i).filter(Boolean).map(S=>{f[S]=T=>i[S](T,...l)}),f},tr=({data:i=[],events:l={},List:f=Qt,Link:S=Tr,leftIcon:T,rightIcon:N,level:L=0})=>i.map(X=>{const{name:H,path:ie,icon:le,rightIcon:he,active:de,open:Ie,children:De,linkProps:ye}=X,He=Wt(De),Oe=er(l,X,L,He),Pe=X.id||ie||H,ut=le!=null?le:T,Zt=he!=null?he:N;return He?(0,a.jsxs)("li",{className:Ie?"open":"","has-children":"true",...Oe,children:[(0,a.jsxs)(S,{item:{...X,level:L},className:de?"active":"",to:ie,preventDefault:!0,stopPropagation:!1,...ye,children:[ut?(0,a.jsx)("div",{className:"node-left-icon",children:ut===!0?(0,a.jsx)("i",{className:"default-left-icon"}):ut}):null,H?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:H})}):null,Zt?(0,a.jsx)("div",{className:"node-right-icon",children:Zt===!0?(0,a.jsx)("i",{className:"default-right-icon"}):Zt}):null]}),(0,a.jsx)(f,{item:X,children:tr({data:De,events:l,List:f,Link:S,leftIcon:T,rightIcon:N,level:L+1})})]},Pe):(0,a.jsx)("li",{...Oe,children:(0,a.jsxs)(S,{item:{...X,level:L},className:de?"active":"",to:ie,...ye,children:[ut?(0,a.jsx)("div",{className:"node-left-icon",children:ut===!0?(0,a.jsx)("i",{className:"default-left-icon"}):ut}):null,H?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:H})}):null]})},Pe)});var jr=tr,rr=(i,...l)=>(0,a.jsx)("div",{"v-html":i,...l}),or=oe(289),yt={};yt.styleTagTransform=M(),yt.setAttributes=A(),yt.insert=p().bind(null,"head"),yt.domAPI=y(),yt.insertStyleElement=G();var Or=c()(or.Z,yt),Br=or.Z&&or.Z.locals?or.Z.locals:void 0;const _r=i=>(0,a.jsx)("div",{style:{padding:"6px 15px"},children:i}),Wr=({activekey:i,tabs:l=[],switchTab:f,trackColor:S,flex:T},N)=>{var L;const[X,H]=(0,Z.useState)(i!=null?i:(L=l[0])==null?void 0:L.key),[ie,le]=(0,Z.useState)({}),he=(0,Z.useRef)({}),de=(0,Z.useRef)();(0,Z.useEffect)(()=>{const ye=he.current[X];ye&&Ie(ye)},[]);const Ie=ye=>{const{left:He,width:Oe}=pt(ye),Pe=pt(de.current).left;le({left:He-Pe,width:Oe})},De=(ye,He)=>{ye.stopPropagation(),H(He),typeof f=="function"&&f(He),Ie(ye.currentTarget)};return(0,a.jsxs)("div",{className:"tabs-header-wrap",ref:N,children:[(0,a.jsx)("ul",{className:`tabs-header${T?" flex":""}`,ref:de,children:l.map(ye=>(0,a.jsx)("li",{ref:He=>he.current[ye.key]=He,className:`th-item${X===ye.key?" active":""}`,onClick:He=>De(He,ye.key),children:typeof ye.renderTabs=="function"?ye.renderTabs(ye,X===ye.key):_r(ye.value)},ye.key))}),(0,a.jsx)("div",{className:"th-track",style:{...ie,color:S}})]})};var Zr=(0,Z.forwardRef)(Wr),Yr=(i,l,f="id",S="children")=>{if(!Ct(i))return null;const T=N=>{for(let L=0,X=N.length;L<X;L++){const H=N[L];if(H[f]===l)return[H];if(Ct(H[S])){const ie=T(H[S]);if(ie)return[H].concat(ie)}}};return T(i)},Hr=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Vr=()=>{let i=Hr();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,l=>{const f=(i+Math.random()*16)%16|0;return i=Math.floor(i/16),(l==="x"?f:f&3|8).toString(16)})};const Ur=i=>++i;var qr=()=>{const[,i]=(0,Z.useState)(0);return(0,Z.useCallback)(()=>i(Ur),[])},Gr=({item:i,style:l,...f})=>{var S;const{uuid:T,open:N}=i,L=(0,Z.useRef)(),X=(0,Z.useRef)(),H=It(),[ie,le]=(0,Z.useState)("");return(0,Z.useEffect)(()=>{const he=L.current,de=N?`${he.scrollHeight}px`:"0px";le(de)},[]),(0,Z.useEffect)(()=>{if(H)return;const he=L.current,de=N?"0px":`${he.scrollHeight}px`;return le(de),X.current=setTimeout(()=>{const Ie=N?`${he.scrollHeight}px`:"0px";le(Ie)},5),()=>clearTimeout(X.current)},[N,(S=i.children)==null?void 0:S.length]),(0,Z.useEffect)(()=>{T&&le("")},[T]),(0,a.jsx)("ul",{ref:L,style:{...l,maxHeight:ie},...f})},Er=oe(435),nr={};nr.styleTagTransform=M(),nr.setAttributes=A(),nr.insert=p().bind(null,"head"),nr.domAPI=y(),nr.insertStyleElement=G();var Kr=c()(Er.Z,nr),Qr=Er.Z&&Er.Z.locals?Er.Z.locals:void 0;const Xr=i=>(0,a.jsx)("ul",{...i}),Jr=(i,l)=>i?({item:f,...S})=>(0,a.jsx)(Xr,{className:l==="right"?"left":"",...S}):Gr;var Ar=i=>{var l;const{data:f=[],collapsed:S=!1,type:T="vertical",Link:N,width:L,bgColor:X,itemHeight:H,collapsedWidth:ie,itemPadding:le,style:he,className:de,...Ie}=i,De=(0,Z.useRef)(),ye=(0,Z.useRef)();(0,Z.useEffect)(()=>()=>clearTimeout(De.current),[]);const He=qr(),Oe=T==="horizontal",Pe=!Oe&&S,ut={onClick:(Ot,Nt)=>{Ot.stopPropagation(),!Oe&&!Pe&&(Yr(f,Nt.path,"path").map(gt=>gt.path===Nt.path?gt.open=!gt.open:gt.uuid=Vr()),He())},onMouseEnter:(Ot,Nt,gt,Dr)=>{Pe&&!gt&&Dr&&(clearTimeout(De.current),ye.current.style.width="var(--maxWidth)")},onMouseLeave:(Ot,Nt,gt,Dr)=>{Pe&&!gt&&Dr&&(De.current=setTimeout(()=>ye.current.style.width="",200))}},Zt=(Oe?["huxy-horizontal-tree",de]:["huxy-tree",de,Pe?"collapsed":""]).filter(Boolean).join(" "),{float:ir,...Nr}=(l=Ie==null?void 0:Ie.style)!=null?l:{},Yt={"--bgColor":X,"--itemHeight":H,"--nodeListWidth":L,...Nr};T==="horizontal"?(Yt["--itemPadding"]=le,Yt["--nodeFloat"]=ir):(Yt["--width"]=L,Yt["--collapsedWidth"]=ie);const Pr=Jr(Oe||Pe,ir),Ir=({item:Ot,...Nt})=>Pe&&!Ot.level?(0,a.jsx)(N,{...Nt,title:Ot.title||Ot.name}):(0,a.jsx)(N,{...Nt});return(0,a.jsx)("div",{ref:ye,className:Zt,style:Yt,...Ie,children:(0,a.jsx)("div",{className:"huxy-tree-track",children:(0,a.jsx)("ul",{className:"huxy-tree-root",children:jr({data:f,events:ut,List:Pr,Link:Ir,leftIcon:!0,rightIcon:!0})})})})}}(),g}()})},4544:function(Pt,me,Ve){(function(Ae,$e){Pt.exports=$e(Ve(7378))})(this,function(Ae){return function(){"use strict";var $e={201:function(g,a,m){var c=m(703),k=m.n(c),y=m(414),E=m.n(y),p=E()(k());p.push([g.id,`@keyframes before {
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
`,""]),p.locals={},a.Z=p},414:function(g){g.exports=function(a){var m=[];return m.toString=function(){return this.map(function(c){var k="",y=typeof c[5]!="undefined";return c[4]&&(k+="@supports (".concat(c[4],") {")),c[2]&&(k+="@media ".concat(c[2]," {")),y&&(k+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),k+=a(c),y&&(k+="}"),c[2]&&(k+="}"),c[4]&&(k+="}"),k}).join("")},m.i=function(c,k,y,E,p){typeof c=="string"&&(c=[[null,c,void 0]]);var $={};if(y)for(var A=0;A<this.length;A++){var q=this[A][0];q!=null&&($[q]=!0)}for(var G=0;G<c.length;G++){var F=[].concat(c[G]);y&&$[F[0]]||(typeof p!="undefined"&&(typeof F[5]=="undefined"||(F[1]="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {").concat(F[1],"}")),F[5]=p),k&&(F[2]&&(F[1]="@media ".concat(F[2]," {").concat(F[1],"}")),F[2]=k),E&&(F[4]?(F[1]="@supports (".concat(F[4],") {").concat(F[1],"}"),F[4]=E):F[4]="".concat(E)),m.push(F))}},m}},703:function(g){g.exports=function(a){return a[1]}},53:function(g,a,m){var c,k=m(899),y=Symbol.for("react.element"),E=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function q(G,F,M){var W,te={},xe=null,Ce=null;M!==void 0&&(xe=""+M),F.key!==void 0&&(xe=""+F.key),F.ref!==void 0&&(Ce=F.ref);for(W in F)p.call(F,W)&&!A.hasOwnProperty(W)&&(te[W]=F[W]);if(G&&G.defaultProps)for(W in F=G.defaultProps,F)te[W]===void 0&&(te[W]=F[W]);return{$$typeof:y,type:G,key:xe,ref:Ce,props:te,_owner:$.current}}c=E,a.jsx=q,a.jsxs=q},458:function(g,a,m){g.exports=m(53)},748:function(g){var a=[];function m(y){for(var E=-1,p=0;p<a.length;p++)if(a[p].identifier===y){E=p;break}return E}function c(y,E){for(var p={},$=[],A=0;A<y.length;A++){var q=y[A],G=E.base?q[0]+E.base:q[0],F=p[G]||0,M="".concat(G," ").concat(F);p[G]=F+1;var W=m(M),te={css:q[1],media:q[2],sourceMap:q[3],supports:q[4],layer:q[5]};if(W!==-1)a[W].references++,a[W].updater(te);else{var xe=k(te,E);E.byIndex=A,a.splice(A,0,{identifier:M,updater:xe,references:1})}$.push(M)}return $}function k(y,E){var p=E.domAPI(E);p.update(y);var $=function(A){if(A){if(A.css===y.css&&A.media===y.media&&A.sourceMap===y.sourceMap&&A.supports===y.supports&&A.layer===y.layer)return;p.update(y=A)}else p.remove()};return $}g.exports=function(y,E){E=E||{},y=y||[];var p=c(y,E);return function($){$=$||[];for(var A=0;A<p.length;A++){var q=p[A],G=m(q);a[G].references--}for(var F=c($,E),M=0;M<p.length;M++){var W=p[M],te=m(W);a[te].references===0&&(a[te].updater(),a.splice(te,1))}p=F}}},736:function(g){var a={};function m(k){if(typeof a[k]=="undefined"){var y=document.querySelector(k);if(window.HTMLIFrameElement&&y instanceof window.HTMLIFrameElement)try{y=y.contentDocument.head}catch(E){y=null}a[k]=y}return a[k]}function c(k,y){var E=m(k);if(!E)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");E.appendChild(y)}g.exports=c},706:function(g){function a(m){var c=document.createElement("style");return m.setAttributes(c,m.attributes),m.insert(c,m.options),c}g.exports=a},567:function(g,a,m){function c(k){var y=m.nc;y&&k.setAttribute("nonce",y)}g.exports=c},306:function(g){function a(k,y,E){var p="";E.supports&&(p+="@supports (".concat(E.supports,") {")),E.media&&(p+="@media ".concat(E.media," {"));var $=typeof E.layer!="undefined";$&&(p+="@layer".concat(E.layer.length>0?" ".concat(E.layer):""," {")),p+=E.css,$&&(p+="}"),E.media&&(p+="}"),E.supports&&(p+="}");var A=E.sourceMap;A&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),y.styleTagTransform(p,k,y.options)}function m(k){if(k.parentNode===null)return!1;k.parentNode.removeChild(k)}function c(k){var y=k.insertStyleElement(k);return{update:function(E){a(y,k,E)},remove:function(){m(y)}}}g.exports=c},62:function(g){function a(m,c){if(c.styleSheet)c.styleSheet.cssText=m;else{for(;c.firstChild;)c.removeChild(c.firstChild);c.appendChild(document.createTextNode(m))}}g.exports=a},899:function(g){g.exports=Ae}},ve={};function ee(g){var a=ve[g];if(a!==void 0)return a.exports;var m=ve[g]={id:g,exports:{}};return $e[g](m,m.exports,ee),m.exports}(function(){ee.n=function(g){var a=g&&g.__esModule?function(){return g.default}:function(){return g};return ee.d(a,{a}),a}})(),function(){ee.d=function(g,a){for(var m in a)ee.o(a,m)&&!ee.o(g,m)&&Object.defineProperty(g,m,{enumerable:!0,get:a[m]})}}(),function(){ee.o=function(g,a){return Object.prototype.hasOwnProperty.call(g,a)}}(),function(){ee.r=function(g){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})}}(),function(){ee.nc=void 0}();var oe={};return function(){ee.r(oe),ee.d(oe,{Link:function(){return kr},routeStore:function(){return Et},useRoute:function(){return Cr},useRouter:function(){return Fr}});var g=ee(899),a=ee.n(g),m=s=>Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),c=s=>m(s)==="array",k=s=>m(s)==="object",y=s=>(s==null?void 0:s.$$typeof)&&typeof s.$$typeof=="symbol"&&s.$$typeof.description==="react.element",E=s=>s==null?void 0:s.__v_isVNode,p=(s,h)=>Object.prototype.hasOwnProperty.call(s!=null?s:{},h);const $=s=>{if(!c(s)&&!k(s))return s;const h=c(s)?[]:{};for(const C in s)if(p(s,C)){const b=s[C];h[C]=y(b)||E(b)||typeof b!="object"?b:b!==s?$(b):"cyclic"}else Object.setPrototypeOf(h,{[C]:s[C]});return h};var A=$,q=s=>m(s)==="function",G=s=>m(s)==="promise"||k(s)&&q(s.then),F=(s,h=12e4,C="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!G(s))return{};let b=null,x=null;return{promiseFn:new Promise((B,Y)=>{b=(V="canceled")=>{clearTimeout(x),B({canceled:!0,errMsg:V})},h&&(h=typeof h!="number"?12e4:h,x=setTimeout(()=>b(C),h)),s.then(V=>{clearTimeout(x),B({result:V,errMsg:!1})}).catch(V=>{clearTimeout(x),Y(V)})}),cancelFn:b}},M=s=>s?s.charAt(s.length-1)==="/"?s.slice(0,-1):s:"",W=ee(458),te=(s,h)=>(0,W.jsx)("div",{dangerouslySetInnerHTML:{__html:s},...h}),xe=s=>{const{error:h={},info:C=""}=s||{},{message:b,stack:x,errMsg:B}=h;let Y=B||x||h.toString();Y=`${Y}
${C}`.replace(/\r|\n|\r\n/g,"<br/>"),Y=Y.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Y=Y.replace(/\s/g,"&nbsp;");const V=b==null?void 0:b.slice(0,120).split(". ").slice(0,2).join(". ");return(0,W.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[te(Y,{style:{color:"red"}}),V&&(0,W.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${V}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})};const Ce=(s,h,C,b,x=[])=>{const B=_=>{for(let D=0,ce=_.length;D<ce;D++){const ke=_[D],pe=ke[b].split("?")[0];if(new RegExp("^"+pe.replace(/:[^/]+/g,"[^/]+")+"$").test(h))return ke;if(c(ke[C])){const Q=B(ke[C]);if(Q)return Q}}},Y=B(s);if(!Y)return"/404";const{redirect:V}=Y;return V?x.includes(V)?x:(x.push(V),Ce(s,V.split("?")[0],C,b,x)):x[x.length-1]},tt=(s,h,C,b,x)=>{if(!c(s))return null;const B=ce=>{const ke=ce.split("/"),pe=h.split("/"),Q={};return ke.map((we,je)=>we.indexOf(":")===0&&(Q[we.slice(1)]=pe[je])),Q},Y=(ce,ke)=>{const pe=[],Q=ke.split("/:")[0];for(let we=0,je=ce.length;we<je;we++){const ue=ce[we];if(ue[x]===Q){ue.active=!0;const{name:re,title:be,icon:Le,params:qe}=ue;pe.push({name:re,title:be,icon:Le,params:qe,[x]:Q})}else if(ke.indexOf(`${ue[x]}/`)===0){ue.active=!0;const re=B(ue[x]),be=Object.keys(re).map(Qe=>re[Qe]).join("/"),{name:Le,title:qe,icon:Ye}=ue,We=be?`${Q}/${be}`:ue[x];pe.push({name:Le,title:qe,icon:Ye,[x]:We,params:{...ue.params,...re}})}else if(ue[x]===ke){ue.active=!0;const re=B(ue[x]),{[b]:be,...Le}=ue;pe.push({...Le,[x]:h,params:{...Le.params,...C,...re}})}}return pe},V=(ce,ke)=>{for(let pe=0,Q=ce.length;pe<Q;pe++){const we=ce[pe];if(ke.indexOf(`${we[x]}/`)===0){we.active=!0;return}}},_=ce=>{for(let ke=0,pe=ce.length;ke<pe;ke++){const Q=ce[ke],we=(Q[x]||"").split("?")[0];if(we===h){Q.hideMenu&&V(ce,Q.parentPath||we),Q.active=!0;const{[b]:je,...ue}=Q;return[{...ue,params:{...ue.params,...C}}]}if(new RegExp("^"+we.replace(/:[^/]+/g,"[^/]+")+"$").test(h))return Y(ce,we);if(c(Q[b])){const je=_(Q[b]);if(je){Q.active=!0,Q.open=!0;const{[b]:ue,...re}=Q;return[re,...je]}}}},D=_(s)||[];return{result:s,current:D}},rt=(s,h,C)=>s.filter(b=>b.hideMenu||b[C].indexOf("/:")>-1?!1:(c(b[h])&&(b[h]=rt(b[h],h,C)),!0));var Z=(s,h,C,b="children",x="path")=>{const B=Ce(s,h,b,x);if(B)return{redirect:B};const{result:Y,current:V}=tt(s,h,C,b,x),_=rt(Y,b,x);return{current:V,menu:_}},Re=()=>{const s={};return{on:(h,C)=>{s[h]||(s[h]=[]),s[h].indexOf(C)===-1&&s[h].push(C)},emit:(h,C)=>{s[h]&&s[h].map(b=>b(C))},off:(h,C=null)=>{if(s[h]){if(typeof C!="function")return s[h]=[];const b=s[h].indexOf(C);b>-1&&s[h].splice(b,1)}}}};const ze=s=>{const h={};for(let C in s)p(s,C)||(h[C]=s[C]);return h};var Ue=(s,h)=>{if(!k(s))return h;if(!k(h))return s;const C={...ze(s),...ze(h)},b={...s,...h};return Object.keys(C).map(x=>{Object.setPrototypeOf(b,{[x]:C[x]})}),b},bt=()=>{const{on:s,emit:h,off:C}=Re(),b={};return{getState:x=>A(b[x]),setState:(x,B=!1)=>{if(typeof x=="function"&&(x=x(A(b))),!k(x))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const Y=A(x);Object.keys(Y).map(V=>{const _=b[V],D=Y[V],ce=k(D)&&k(_)?Ue(_,D):D;!B&&h(V,ce),b[V]=ce})},subscribe:(x,B)=>(s(x,B),()=>C(x,B)),unsubscribe:C,clean:x=>{typeof x=="string"?b[x]=void 0:Array.isArray(x)?x.map(B=>b[B]=void 0):Object.keys(b).map(B=>b[B]=void 0)}}},Xe=s=>(h,C)=>{const[b,x]=(0,g.useState)(()=>{const _=s==null?void 0:s.getState(h);return _!==void 0?_:(C!==void 0&&(s==null||s.setState({[h]:C},!0)),C)}),B=(0,g.useCallback)(_=>s==null?void 0:s.setState({[h]:typeof _=="function"?_(s==null?void 0:s.getState(h)):_}),[]),Y=(0,g.useCallback)(_=>s==null?void 0:s.subscribe(h,_),[]),V=(0,g.useCallback)((_=_)=>s==null?void 0:s.clean(_),[]);return(0,g.useEffect)(()=>{s==null||s.subscribe(h,_=>x(_))},[]),[b,B,Y,V]};const at=bt(),R=Xe(at),ae=Re(),K=Re(),Ee="push-emitter",Fe="replace-emitter",ct="useRoute-emitter",Ze={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},ot={getState:()=>history.state,go:s=>history.go(s),forward:()=>history.forward(),back:()=>history.back()};var Ne=s=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(s);const Ge=(s,h)=>{const C=["#/","/"],b=C[!!h-0];if(!s||C.includes(s))return b;const x=s.charAt(s.length-1)==="/"?s.slice(0,-1):s;return h||x.indexOf("#/")>-1?x:`#${x}`},Je=(s,h,C,b=!1)=>{const x=Ge(h,C);return b?x:C?s&&x==="/"?s:`${s}${x}`:s?`${s}/${x}`:x},ar=(s,h,C,b,x,B)=>{if(!c(s))return s;const Y=(V,_="")=>V.filter(D=>!D.denied).map(D=>{if(!B&&!D.exact&&!Ne(D[b])){(!D[b]||D[b]==="javascript:;")&&(D[b]="");const ce=D[b].charAt(0)==="/"&&_.charAt(_.length-1)==="/"?D[b].slice(1):D[b].charAt(0)!=="/"&&_.charAt(_.length-1)!=="/"?`/${D[b]}`:D[b];D[b]=_?_+ce:Je(x,ce,h)}return D.redirect&&(D.redirect=Je(x,D.redirect,h)),c(D[C])&&(D[C]=Y(D[C],D[b]),!D.redirect&&D[C].length&&(D.redirect=D[C][0][b])),D});return Y(s)};var dt=s=>{if(!k(s))return"";const h=[];return Object.keys(s).map((C,b)=>{const x=b>0?"&":"?";h.push(`${x}${C}=${s[C]}`)}),h.join("")},jt=(s="")=>{const[h,C]=s.split("?");if(C){const b={};return C.split("&").map(x=>{const[B,Y]=x.split("=");b[B]=Y}),{path:h,params:b}}return{path:h}};const It=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Vt=(s,h)=>{for(let C=s.length-1,b;b=s[C--];){const{title:x,name:B}=b;if(typeof x=="string"&&x.length)return document.title=x;if((x==null||x===!0)&&B)return document.title=h?`${B}-${h}`:B;if(h)return document.title=h}},Lt=s=>{const{pathname:h,search:C,hash:b}=location;if(s){const V=Ge(h,s),_=decodeURIComponent(`${V}${C}`),{params:D}=jt(_);return{path:_,params:D}}const x=decodeURIComponent(Ge(b,s)),{params:B}=jt(x),Y=M(h);return{path:Y?`${Y}/${x}`:x,params:B}},ft=(s,h,C)=>{typeof s=="function"&&s({...h,stay:new Date-C})},Ut=(s,h,C,b)=>{let x,B,Y;if(typeof s=="string")x=s;else if(k(s))x=s.path,B=s.params,Y=s.query;else return;!x||x==="."||x==="./"?x=b:x.indexOf("./")===0&&(x=`${b.split("?")[0]}${x.replace("./","/")}`),x=Je(h,x,C,s==null?void 0:s.exact);const V=jt(x);x=V.path;const _={...V.params,...Y},D=dt(_);return x=`${x}${D}`,B={...B,..._},{path:x,params:B}},Ke=(s,h)=>{const C=s.split(h);return C.length>1?["","/"].includes(C[1].slice(0,1)):!1},lr=Re();var qt=s=>{const{on:h,emit:C,off:b}=lr;return{on:x=>h(s,x),emit:x=>C(s,x),off:x=>b(s,x)}},ht=s=>(h,C)=>{const{getState:b,setState:x,subscribe:B,unsubscribe:Y,clean:V}=s;return C!==void 0&&x({[h]:C},!0),{getState:()=>b(h),setState:(_,D)=>x({[h]:_},D),subscribe:_=>B(h,_),unsubscribe:()=>Y(h),clean:()=>V(h)}};const Dt=bt();var vt=ht(Dt);const sr=qt("push-emitter"),lt=qt("replace-emitter"),Et=vt("route-store"),ur=Re(),Mt=bt(),cr=Xe(Mt);var pt=()=>![typeof window,typeof document].includes("undefined"),u=s=>{if(!pt())return;const h=document.createElement("div");return h.innerHTML=s,h.children[0]},v=Object.defineProperty,j=(s,h,C)=>h in s?v(s,h,{enumerable:!0,configurable:!0,writable:!0,value:C}):s[h]=C,O=(s,h,C)=>(j(s,typeof h!="symbol"?h+"":h,C),C);class P extends a().Component{constructor(){super(...arguments),O(this,"state",{error:null})}static getDerivedStateFromError(h){return{error:h}}componentDidCatch(h,C){const{errorReport:b}=this.props;typeof b=="function"&&b({error:h,info:C.componentStack})}render(){const{error:h}=this.state,{fallback:C,children:b}=this.props;return h?C(h):b}}var J=({children:s,report:h})=>{var C;const b=(0,g.useRef)();return(C=b.current)!=null&&C.state&&(b.current.state.error=null),(0,W.jsx)(P,{ref:b,fallback:(x,B)=>xe({error:x,info:B}),errorReport:h,children:s})},fe=ee(748),se=ee.n(fe),ne=ee(306),Te=ee.n(ne),st=ee(736),St=ee.n(st),mt=ee(567),Me=ee.n(mt),Bt=ee(706),At=ee.n(Bt),wt=ee(62),kt=ee.n(wt),nt=ee(201),_e={};_e.styleTagTransform=kt(),_e.setAttributes=Me(),_e.insert=St().bind(null,"head"),_e.domAPI=Te(),_e.insertStyleElement=At();var Mr=se()(nt.Z,_e),Sr=nt.Z&&nt.Z.locals?nt.Z.locals:void 0,Gt=({global:s,absolute:h})=>(0,W.jsx)("div",{className:`spinner${s?" global":""}${h?" absolute":""}`,children:(0,W.jsx)("figure",{className:"spinning"})}),yr=()=>{const s=(0,g.useRef)([]);return(0,g.useEffect)(()=>()=>{s.current.map(h=>h.cancelFn()),s.current=[]},[]),{cancelablePromise:(0,g.useCallback)((h,C=!0)=>{const b=F(h,C);return s.current.indexOf(b)===-1&&s.current.push(b),b.promiseFn},[])}},gr=(s={})=>{const{cancelablePromise:h}=yr(),[C,b]=(0,g.useState)(s),x=(0,g.useRef)({}),B=(0,g.useRef)({}),Y=(0,g.useCallback)((_=null)=>{Array.isArray(_)&&_.length?_.map(D=>x.current[D]=s[D]):x.current=s},[]),V=(0,g.useCallback)((_,D,ce=!1)=>{const ke=Object.keys(_),pe=JSON.stringify(ke.sort());if(!B.current[pe]){B.current[pe]=!0,ce&&Y(Array.isArray(ce)?ce:ke),ke.map(Q=>{x.current[Q]||(x.current[Q]={}),x.current[Q].pending=!0}),b({...x.current});for(let Q=0,we=ke.length;Q<we;Q++){const je=ke[Q];h(_[je]).then(ue=>{let{result:re,errMsg:be}=ue;Q===we-1&&(B.current[pe]=!1),typeof D=="function"&&(re=D(re)||re),x.current[je]={...re,pending:!1},be===!1&&b({...x.current})}).catch(ue=>{throw Q===we-1&&(B.current[pe]=!1),x.current[je]={error:ue,pending:!1},b({...x.current}),ue})}}},[]);return[C,V,Y]};const Xt=s=>Object.keys(s).length;var br=s=>{const{Comp:h,restResolve:C,loadPromise:b,params:x,children:B}=s,[Y,V]=gr(),[_,D]=gr();return(0,g.useEffect)(()=>{Xt(C)&&V(C),Xt(b)&&D(b)},[C,b]),(0,g.useEffect)(()=>{const ce=Xt(Y);ce&&ce===Xt(C)&&x.store.setState(Y)},[Y]),(0,W.jsx)(h,{...x,...Y,..._,children:B})};const vr=s=>s===!1?null:y(s)?s:q(s)?(0,W.jsx)(s,{}):(0,W.jsx)(Gt,{}),wr=({Loading:s,ErrorBoundary:h,loadedComp:C})=>{const b=(0,W.jsx)(g.Suspense,{fallback:vr(s),children:C});return h===!1?b:q(h)?(0,W.jsx)(h,{children:b}):(0,W.jsx)(J,{children:b})};var dr=({Comp:s,routerProps:h,children:C})=>{const{params:b,...x}=h,{loading:B,errorBoundary:Y,...V}=b,_=(0,W.jsx)(br,{Comp:s,...x,params:V,children:C});return wr({Loading:B,ErrorBoundary:Y,loadedComp:_})};const fr={},$r=(s,h,C)=>{const b={},x={};return k(s)?(Object.keys(s).map(B=>{const Y=h.getState(B);Y==null?x[B]=s[B](C):b[B]=Y}),{cachedResolve:b,restResolve:x}):{cachedResolve:b,restResolve:x}},Jt=(s,h)=>{if(!k(s))return{};const C={};return Object.keys(s).map(b=>C[b]=s[b](h)),C},hr=(s,h,C)=>G(C)?C.then(b=>{var x;return dr({Comp:s,routerProps:h,children:(x=b.default)!=null?x:b})}):dr({Comp:s,routerProps:h,children:C});var zr=s=>{const{current:h,menu:C,...b}=s,x=h.map(V=>{const{component:_,resolve:D,loadData:ce,loading:ke,errorBoundary:pe,icon:Q,...we}=V;return we}),B=[...h].filter(V=>V.component),Y=(V=0)=>{if(!B.length)return null;const _=B.shift(),{component:D,resolve:ce,loadData:ke,icon:pe,key:Q,...we}=_;if(typeof D=="function"||G(D)){const je=we.path;let ue=fr[je];const{cachedResolve:re,restResolve:be}=$r(ce,b.store,we),Le={loadPromise:Jt(ke,we),restResolve:be,params:{current:x,...b,...we,...re}},qe=Y(V+1);if(ue)return hr(ue,Le,qe);try{ue=D(),ue=y(ue)?D:ue}catch(Ye){ue=D}return G(ue)?ue.then(Ye=>{var We;return ue=(We=Ye.default)!=null?We:Ye,fr[je]=ue,hr(ue,Le,qe)}):(fr[je]=ue,hr(ue,Le,qe))}return typeof D=="string"?u(D):D};return Y()},Fr=s=>{const[h,C]=(0,g.useState)(s),[b,x]=(0,g.useState)(),[B,Y]=(0,g.useState)(),V=(0,g.useRef)(),_=(0,g.useRef)(),D=(0,g.useRef)(),ce=(0,g.useRef)(),ke=()=>{typeof V.current=="function"&&(V.current({cancel:Ze.cancelMsg}),V.current=null)},pe=(0,g.useCallback)(re=>{typeof re=="function"?C(be=>({...be,...re(be)})):k(re)&&C(be=>({...be,...re}))},[]),Q=(re,be="pushState")=>{const{basepath:Le,browserRouter:qe}=ce.current,Ye=D.current,{path:We,params:Qe}=Ut(re,Le,qe,Ye);We!==Ye&&ue({inputPath:We,inputParams:Qe},()=>history[be](re==null?void 0:re.state,"",We))},we=(0,g.useCallback)(re=>Q(re),[]),je=(0,g.useCallback)(re=>Q(re,"replaceState"),[]),ue=(0,g.useCallback)(({inputPath:re="",inputParams:be={}},Le)=>{const qe=+new Date,{browserRouter:Ye,childKey:We,idKey:Qe,title:pr,routers:xt,beforeRender:$t,afterRender:zt,basepath:Rt,allowedNotFound:et,...Ft}=ce.current;if(!re){const{path:it,params:Tt}=Lt(Ye);re=it,be={...be,...Tt}}new Promise((it,Tt)=>{xt!=null&&xt.length||Tt("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),re!==D.current&&typeof $t=="function"?$t({path:re,params:be,prevPath:D.current},it,Tt):it()}).then(it=>{var Tt,Kt;if(it===!1)return;const mr=it==null?void 0:it.path;if(mr&&Je(Rt,mr,Ye)!==re){je(it);return}_.current=(Tt=_.current)!=null?Tt:re;const{redirect:Ct,current:Wt,menu:Tr}=Z(A(xt),re.split("?")[0],be,We,Qe);if(Ct){if(et&&Ct==="/404"&&(typeof et=="boolean"||typeof et=="string"&&Ke(_.current,et)||c(et)&&et.find(tr=>Ke(_.current,tr))))return;if(c(Ct)){console.error(`\u522B\u95F9\uFF0C[${[re,...Ct].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}we({path:Ct,exact:Ct!=="/404"});return}Le==null||Le(),(re==null?void 0:re.split("?")[0])!==((Kt=D.current)==null?void 0:Kt.split("?")[0])&&It(),Vt(Wt,pr);const Qt={eventBus:ur,store:Mt,useStore:cr,...Ft,updateRouter:pe,router:{push:we,replace:je},current:Wt,menu:Tr,inputPath:_.current,prevPath:D.current,basepath:Rt,title:pr,history:ot};Et.setState({...Qt,browserRouter:Ye});const er=zr(Qt);if(D.current=re,_.current=null,ke(),G(er)){const{promiseFn:tr,cancelFn:jr}=F(er,{delay:Ze.delay,msg:{timeout:Ze.timeoutMsg}});return V.current=jr,Y(!0),tr.then(rr=>{V.current=null;const{result:or,errMsg:yt}=rr,Or=yt===!1?or:yt!=null&&yt.timeout?xe({error:{errMsg:`${re} ${yt.timeout}`}}):null;Or&&(Y(!1),ft(zt,Wt.slice(-1)[0],qe),x(Or))}).catch(rr=>{throw V.current=null,Y(!1),ft(zt,Wt.slice(-1)[0],qe),x(xe({error:rr})),rr})}ft(zt,Wt.slice(-1)[0],qe),x(er)}).catch(it=>{throw x(xe({error:it})),it})},[]);return(0,g.useEffect)(()=>{const{childKey:re="children",idKey:be="path",browserRouter:Le=!1,routers:qe=[],basepath:Ye="",exact:We=!1,inputPath:Qe="",inputParams:pr={},...xt}=h,$t=M(Ye),zt=ar(A(qe),Le,re,be,$t,We);ce.current={...xt,childKey:re,idKey:be,browserRouter:Le,routers:zt,basepath:$t};const Rt=Le?"popstate":"hashchange",et=()=>ue({});return ue({inputPath:Qe,inputParams:pr}),sr.on(we),lt.on(je),window.addEventListener(Rt,et,!1),()=>{ke(),sr.off(we),lt.off(je),window.removeEventListener(Rt,et,!1)}},[h]),{updateRouter:pe,output:b,loading:B}},_t=s=>{const{to:h,onClick:C,preventDefault:b,stopPropagation:x=!0,exact:B=!0,target:Y,...V}=s,_=()=>{const D=typeof h=="string"?{exact:B,path:h}:{exact:B,...h};sr.emit(D)};return D=>{var ce;if(D.preventDefault(),x&&D.stopPropagation(),!(V!=null&&V.disabled)){if(!b){if(Y){const{browserRouter:ke}=Et.getState(),pe=typeof h=="string"?h:(ce=h==null?void 0:h.path)!=null?ce:"",Q=dt(h==null?void 0:h.query),we=ke||pe.indexOf("#/")>-1||Ne(pe);window==null||window.open(`${we?"":"#"}${pe}${Q}`,Y);return}_()}typeof C=="function"&&C()}}},kr=s=>{const{to:h,onClick:C,preventDefault:b,stopPropagation:x,exact:B,target:Y,...V}=s;return(0,W.jsx)("a",{onClick:_t(s),...V})};const Cr=()=>Et.getState()}(),oe}()})},2445:function(Pt,me,Ve){(function(Ae,$e){Pt.exports=$e(Ve(7378))})(this,function(Ae){return function(){"use strict";var $e={53:function(g,a,m){var c,k=m(899),y=Symbol.for("react.element"),E=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function q(G,F,M){var W,te={},xe=null,Ce=null;M!==void 0&&(xe=""+M),F.key!==void 0&&(xe=""+F.key),F.ref!==void 0&&(Ce=F.ref);for(W in F)p.call(F,W)&&!A.hasOwnProperty(W)&&(te[W]=F[W]);if(G&&G.defaultProps)for(W in F=G.defaultProps,F)te[W]===void 0&&(te[W]=F[W]);return{$$typeof:y,type:G,key:xe,ref:Ce,props:te,_owner:$.current}}c=E,a.jsx=q,c=q},458:function(g,a,m){g.exports=m(53)},899:function(g){g.exports=Ae}},ve={};function ee(g){var a=ve[g];if(a!==void 0)return a.exports;var m=ve[g]={exports:{}};return $e[g](m,m.exports,ee),m.exports}(function(){ee.d=function(g,a){for(var m in a)ee.o(a,m)&&!ee.o(g,m)&&Object.defineProperty(g,m,{enumerable:!0,get:a[m]})}})(),function(){ee.o=function(g,a){return Object.prototype.hasOwnProperty.call(g,a)}}(),function(){ee.r=function(g){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})}}();var oe={};return function(){ee.r(oe),ee.d(oe,{createContainer:function(){return a},useAsync:function(){return $},useCancelablePromise:function(){return p},useClickAway:function(){return G},useDebounce:function(){return M},useDelayState:function(){return xe},useEleResize:function(){return Ue},useEvent:function(){return bt},useFirstMounted:function(){return W},useInterval:function(){return Xe},usePrevious:function(){return at},useRaf:function(){return ze},useScroll:function(){return ae},useSearch:function(){return It},useStateFromProps:function(){return Vt},useStore:function(){return qt},useTime:function(){return ur},useUpdate:function(){return cr},useUpdateEffect:function(){return te},useWinResize:function(){return pt}});var g=ee(899),a=u=>(v,j)=>{const[O,P]=(0,g.useState)(()=>{const ne=u==null?void 0:u.getState(v);return ne!==void 0?ne:(j!==void 0&&(u==null||u.setState({[v]:j},!0)),j)}),J=(0,g.useCallback)(ne=>u==null?void 0:u.setState({[v]:typeof ne=="function"?ne(u==null?void 0:u.getState(v)):ne}),[]),fe=(0,g.useCallback)(ne=>u==null?void 0:u.subscribe(v,ne),[]),se=(0,g.useCallback)((ne=ne)=>u==null?void 0:u.clean(ne),[]);return(0,g.useEffect)(()=>{u==null||u.subscribe(v,ne=>P(ne))},[]),[O,J,fe,se]},m=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),c=u=>m(u)==="object",k=u=>m(u)==="function",y=u=>m(u)==="promise"||c(u)&&k(u.then),E=(u,v=12e4,j="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!y(u))return{};let O=null,P=null;return{promiseFn:new Promise((J,fe)=>{O=(se="canceled")=>{clearTimeout(P),J({canceled:!0,errMsg:se})},v&&(v=typeof v!="number"?12e4:v,P=setTimeout(()=>O(j),v)),u.then(se=>{clearTimeout(P),J({result:se,errMsg:!1})}).catch(se=>{clearTimeout(P),fe(se)})}),cancelFn:O}},p=()=>{const u=(0,g.useRef)([]);return(0,g.useEffect)(()=>()=>{u.current.map(v=>v.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,g.useCallback)((v,j=!0)=>{const O=E(v,j);return u.current.indexOf(O)===-1&&u.current.push(O),O.promiseFn},[])}},$=(u={})=>{const{cancelablePromise:v}=p(),[j,O]=(0,g.useState)(u),P=(0,g.useRef)({}),J=(0,g.useRef)({}),fe=(0,g.useCallback)((ne=null)=>{Array.isArray(ne)&&ne.length?ne.map(Te=>P.current[Te]=u[Te]):P.current=u},[]),se=(0,g.useCallback)((ne,Te,st=!1)=>{const St=Object.keys(ne),mt=JSON.stringify(St.sort());if(!J.current[mt]){J.current[mt]=!0,st&&fe(Array.isArray(st)?st:St),St.map(Me=>{P.current[Me]||(P.current[Me]={}),P.current[Me].pending=!0}),O({...P.current});for(let Me=0,Bt=St.length;Me<Bt;Me++){const At=St[Me];v(ne[At]).then(wt=>{let{result:kt,errMsg:nt}=wt;Me===Bt-1&&(J.current[mt]=!1),typeof Te=="function"&&(kt=Te(kt)||kt),P.current[At]={...kt,pending:!1},nt===!1&&O({...P.current})}).catch(wt=>{throw Me===Bt-1&&(J.current[mt]=!1),P.current[At]={error:wt,pending:!1},O({...P.current}),wt})}}},[]);return[j,se,fe]},A=(u,v)=>Object.prototype.hasOwnProperty.call(u!=null?u:{},v),q=u=>A(u,"current"),G=(u,v,j="click")=>{(0,g.useEffect)(()=>{const O=J=>{const fe=q(u)?u.current:u;(fe==null?void 0:fe.contains)&&!fe.contains(J.target)&&v(J)},P=typeof j=="string"?[j]:j;return P.map(J=>{document.addEventListener(J,O,!1)}),()=>{P.map(J=>{document.removeEventListener(J,O,!1)})}},[u,v,j])},F=(u=()=>{},v=60)=>{let j=null;return function(...O){clearTimeout(j),j=setTimeout(()=>u.apply(this,O),v)}},M=(u,v=60)=>(0,g.useMemo)(()=>F(u,v),[v]),W=()=>{const u=(0,g.useRef)(!0);return u.current?(u.current=!1,!0):!1},te=(u,v=[])=>{const j=W();(0,g.useEffect)(()=>{if(!j)return u()},v)},xe=(u,v=450)=>{const[j,O]=(0,g.useState)(u);return te(()=>{let P;return u||v===0?O(u):P=setTimeout(()=>O(u),v),()=>P&&clearTimeout(P)},[u]),[j,O]},Ce=()=>![typeof window,typeof document].includes("undefined"),tt=u=>m(u).indexOf("element")>-1,rt=(u=null)=>{var v,j;return Ce()?tt(u)?{width:u.clientWidth,height:u.clientHeight}:{width:(v=window.innerWidth)!=null?v:document.documentElement.clientWidth,height:(j=window.innerHeight)!=null?j:document.documentElement.clientHeight}:{width:0,height:0}};const Z=(u,v)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const j=document.createElement("object");return j.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),j.setAttribute("class","resize-sensor"),j.onload=()=>{j.contentDocument.defaultView.addEventListener("resize",v,!1),v()},j.type="text/html",u.appendChild(j),j.data="about:blank",j};var Re=(u,v=60)=>{if(!Ce())return;u=q(u)?u.current:u!=null?u:document.body;let j,O=[];const P=F(()=>O.map(ne=>ne(u)),v),J=ne=>{j||(j=Z(u,P)),O.indexOf(ne)===-1&&O.push(ne)},fe=ne=>{const Te=O.indexOf(ne);Te!==-1&&O.splice(Te,1),O.length===0&&j&&se()},se=()=>{j&&j.parentNode&&(j.contentDocument&&j.contentDocument.defaultView.removeEventListener("resize",P,!1),j.parentNode.removeChild(j),j=void 0,O=[])};return{element:u,bind:J,unbind:fe,destroy:se}},ze=(u={})=>{const v=(0,g.useRef)(0),[j,O]=(0,g.useState)(u),P=(0,g.useCallback)(J=>{cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>O(J))},[]);return(0,g.useEffect)(()=>()=>cancelAnimationFrame(v.current),[]),[j,P]},Ue=(u=null,v=60)=>{const j=q(u)?u.current:u,{bind:O,destroy:P}=Re(j,v),[J,fe]=ze(rt(j));return(0,g.useEffect)(()=>(O(()=>j&&fe(rt(j))),()=>P()),[j]),J},bt=u=>{const v=(0,g.useRef)(null);return(0,g.useLayoutEffect)(()=>{v.current=u}),(0,g.useCallback)(v.current,[])},Xe=(u,v)=>{const j=(0,g.useRef)();(0,g.useEffect)(()=>{j.current=u},[u]),(0,g.useEffect)(()=>{if(v){const O=setInterval(()=>j.current(),v);return()=>clearInterval(O)}},[v])},at=u=>{const v=(0,g.useRef)();return(0,g.useEffect)(()=>{v.current=u},[u]),v.current},R=(u=null)=>{var v,j,O,P;return Ce()?tt(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:(j=(v=window.pageXOffset)!=null?v:document.documentElement.scrollLeft)!=null?j:document.body.scrollLeft,top:(P=(O=window.pageYOffset)!=null?O:document.documentElement.scrollTop)!=null?P:document.body.scrollTop}:{left:0,top:0}},ae=(u=null)=>{const[v,j]=ze(R(u));return(0,g.useEffect)(()=>{const O=()=>j(R(u)),P=tt(u)?u:window;return P.addEventListener("scroll",O,{capture:!1,passive:!0}),()=>P.removeEventListener("scroll",O)},[u]),v},K=u=>m(u)==="array",Ee=u=>K(u)&&!!u.length,Fe=(u,v,j=[],O=!1,P=null)=>Ee(u)?v?(j=typeof j=="string"?j.split(","):j,u.filter(J=>(j=j.length>0?j:Object.keys(J),j.filter(fe=>{const se=J[fe];if(se==null)return!1;if(O)return se===v;const ne=new RegExp(v,"gi"),Te=se.toString().match(ne);return Te&&P&&(J[fe]=P(se.toString().replace(ne,`<span style="background-color:yellow">${Te[0]}</span>`),{display:"inline-block"})),Te}).length))):u:[],ct=(u,v="id")=>{if(!Ee(u))return u;const j=[],O=[];return u.map(P=>{const J=c(P)?P[v]:P;O.includes(J)||(O.push(J),j.push(P))}),j},Ze=u=>(u==null?void 0:u.$$typeof)&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",ot=u=>u==null?void 0:u.__v_isVNode;const Ne=u=>{if(!K(u)&&!c(u))return u;const v=K(u)?[]:{};for(const j in u)if(A(u,j)){const O=u[j];v[j]=Ze(O)||ot(O)||typeof O!="object"?O:O!==u?Ne(O):"cyclic"}else Object.setPrototypeOf(v,{[j]:u[j]});return v};var Ge=Ne;const Je=u=>(v,j="children")=>{if(!Array.isArray(v))return v;const O=Ge(v),P=J=>{const fe=[];return J.map(se=>{if(Ee(se[j])){const ne=P(se[j])||[];se[j]=ne,ne.length>0&&fe.push(se)}}),u(J,fe)};return P(O)};var ar=(u,v,j,O="name",P="id",J="children",fe=!1)=>Je((se,ne)=>ct([...Fe(se,v,O,fe,j),...ne],P))(u,J),dt=ee(458),jt=(u,v)=>(0,dt.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...v}),It=(u=null,v=jt)=>{const[j,O]=(0,g.useState)(u),P=(0,g.useCallback)((...J)=>{const[fe,se,...ne]=J;if(!se)O(null);else{J=[fe,se,v,...ne];const Te=ar(...J);O(Te)}},[]);return[j,P]},Vt=u=>{const[v,j]=(0,g.useState)(u);return(0,g.useEffect)(()=>j(u),[u]),[v,j]},Lt=()=>{const u={};return{on:(v,j)=>{u[v]||(u[v]=[]),u[v].indexOf(j)===-1&&u[v].push(j)},emit:(v,j)=>{u[v]&&u[v].map(O=>O(j))},off:(v,j=null)=>{if(u[v]){if(typeof j!="function")return u[v]=[];const O=u[v].indexOf(j);O>-1&&u[v].splice(O,1)}}}};const ft=u=>{const v={};for(let j in u)A(u,j)||(v[j]=u[j]);return v};var Ut=(u,v)=>{if(!c(u))return v;if(!c(v))return u;const j={...ft(u),...ft(v)},O={...u,...v};return Object.keys(j).map(P=>{Object.setPrototypeOf(O,{[P]:j[P]})}),O},Ke=()=>{const{on:u,emit:v,off:j}=Lt(),O={};return{getState:P=>Ge(O[P]),setState:(P,J=!1)=>{if(typeof P=="function"&&(P=P(Ge(O))),!c(P))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const fe=Ge(P);Object.keys(fe).map(se=>{const ne=O[se],Te=fe[se],st=c(Te)&&c(ne)?Ut(ne,Te):Te;!J&&v(se,st),O[se]=st})},subscribe:(P,J)=>(u(P,J),()=>j(P,J)),unsubscribe:j,clean:P=>{typeof P=="string"?O[P]=void 0:Array.isArray(P)?P.map(J=>O[J]=void 0):Object.keys(O).map(J=>O[J]=void 0)}}};const lr=Ke();var qt=a(lr);const ht=u=>u<10?"0"+u:u;var Dt=(u=new Date)=>{const v=new Date(u),j=v.getFullYear(),O=v.getDay(),P=ht(v.getMonth()+1),J=ht(v.getDate()),fe=ht(v.getHours()),se=ht(v.getMinutes()),ne=ht(v.getSeconds());return[j,P,J,fe,se,ne,O]};const vt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],sr=(u,v,j="-")=>u.replace(new RegExp(j,"g"),v);var lt=(u=new Date,v=["-","-"," ",":",":",""],j=vt)=>{const O=Dt(u);let P="";return v.map((J,fe)=>{var se;return P+=(fe===6?j[O[fe]]:(se=O[fe])!=null?se:"")+J}),P};const Et=()=>lt(new Date,["-","-"," ",":",":"," ",""]);var ur=()=>{const[u,v]=(0,g.useState)("");return Xe(()=>{v(Et())},1e3),[u]};const Mt=u=>++u;var cr=()=>{const[,u]=(0,g.useState)(0);return(0,g.useCallback)(()=>u(Mt),[])},pt=()=>{const[u,v]=ze(rt());return(0,g.useEffect)(()=>{const j=()=>v(rt());return window.addEventListener("resize",j,!1),()=>window.removeEventListener("resize",j,!1)},[]),u}}(),oe}()})},5820:function(Pt){(function(me,Ve){Pt.exports=Ve()})(this,function(){return function(){"use strict";var me={};(function(){me.d=function(e,t){for(var r in t)me.o(t,r)&&!me.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){me.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){me.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();var Ve={};me.r(Ve),me.d(Ve,{a2o:function(){return Ae},addAtNext:function(){return oe},addAtPos:function(){return g},addClass:function(){return m},addDays:function(){return c},addHours:function(){return k},addMonths:function(){return y},addNodes:function(){return E},addScript:function(){return $},addStyle:function(){return A},addYears:function(){return q},arr2Tree:function(){return Ce},arr2TreeById:function(){return tt},arr2TreeByPath:function(){return rt},arr2obj:function(){return G},arr2str:function(){return xe},backTop:function(){return ae},base2Ten:function(){return K},baseConversion:function(){return Fe},baseFetch:function(){return dt},cacheData:function(){return lr},cancelablePromise:function(){return Ge},changePos:function(){return qt},classifyArr:function(){return ht},clone:function(){return Ke},compareVersion:function(){return Dt},compose:function(){return vt},copyToClipboard:function(){return sr},createContainer:function(){return lt},createElement:function(){return ur},createNode:function(){return O},createStore:function(){return se},createTextElement:function(){return Et},curry:function(){return ne},cyclic:function(){return jt},dash2camel:function(){return Te},debounce:function(){return st},deleteNodes:function(){return St},deviceType:function(){return mt},dlfile:function(){return At},dropInfo:function(){return wr},editNodes:function(){return dr},emitter:function(){return P},equal:function(){return Vt},escapeHTML:function(){return fr},eventBus:function(){return Jt},fetcher:function(){return Fr},filter:function(){return kr},filterList:function(){return h},findMax:function(){return C},firstUpper:function(){return b},fixFileSizeUnit:function(){return x},fixPath:function(){return B},fixRoute:function(){return Y},fixSize:function(){return V},fixTimeUnit:function(){return _},flatten:function(){return ce},formatNum:function(){return ke},formatPassTime:function(){return we},formatTime:function(){return re},fullScreen:function(){return Qe},getElementsSize:function(){return yr},getExplore:function(){return xt},getLeaveTime:function(){return et},getMeta:function(){return Tt},getMonthDays:function(){return Kt},getOffset:function(){return mr},getOsInfo:function(){return Wt},getParams:function(){return Tr},getPosition:function(){return kt},getRelative:function(){return tr},getSelected:function(){return jr},getTextSize:function(){return rr},getTime:function(){return Q},getTouchPosition:function(){return er},getType:function(){return $e},getValue:function(){return Or},getViewportSize:function(){return wt},hasClass:function(){return Br},hasProp:function(){return Re},hex2rgba:function(){return _r},imgtocanvas:function(){return Wr},isArray:function(){return ve},isAsync:function(){return Ne},isBrowser:function(){return p},isDate:function(){return Zr},isElement:function(){return a},isError:function(){return Yr},isFunction:function(){return ot},isIE:function(){return Hr},isObject:function(){return F},isReactComp:function(){return Vr},isReactEle:function(){return Lt},isRef:function(){return ze},isRegExp:function(){return Ur},isTouch:function(){return Qt},isUrl:function(){return qr},isValidArr:function(){return _t},isValidObj:function(){return Gr},isVueEle:function(){return ft},json2str:function(){return Er},loadBase64:function(){return nr},loadImage:function(){return Kr},loop:function(){return Qr},matchedStr:function(){return Xr},memoize:function(){return Jr},merge:function(){return S},mergeArr:function(){return i},mergeClass:function(){return T},mergeObj:function(){return f},mergeOwnProp:function(){return fe},message:function(){return he},monthDate:function(){return de},moveNodes:function(){return Ie},obj2arr:function(){return De},obj2str:function(){return W},omit:function(){return ye},once:function(){return He},padStart:function(){return Oe},params2data:function(){return Ze},params2str:function(){return ct},pick:function(){return Pe},promisify:function(){return ut},randColor:function(){return Zt},randItem:function(){return Nr},randNum:function(){return ir},randPercent:function(){return Yt},randStr:function(){return Pr},randTrue:function(){return Ir},removeClass:function(){return N},resize:function(){return Nt},rgba2hex:function(){return Dr},rmUnit:function(){return oo},scheduler:function(){return ao},scrollIsBottom:function(){return lo},scrollTo:function(){return Ue},scrollToAnchor:function(){return so},scrollTop:function(){return Z},selectedHandle:function(){return ee},session:function(){return uo},setMeta:function(){return co},setStyle:function(){return _e},sleep:function(){return Gt},sleepSync:function(){return Sr},sort:function(){return fo},sortObj:function(){return ho},storage:function(){return po},store:function(){return xo},str2Html:function(){return nt},str2code:function(){return yo},sysLang:function(){return go},template:function(){return bo},ten2Base:function(){return Ee},throttle:function(){return vo},timeGap:function(){return jo},timeInterval:function(){return to},timestamp:function(){return Me},toggleClass:function(){return Eo},traverItem:function(){return D},traverList:function(){return So},unescapeHTML:function(){return $o},unique:function(){return Cr},updateId:function(){return zo},updateNode:function(){return j},updateTreeNodes:function(){return Fo},uuidv4:function(){return Bt},validObj:function(){return To},watchScreen:function(){return Oo},watermark:function(){return No},weekDate:function(){return Po},wrapPromise:function(){return Io}});var Ae=(e,t="key",r="value")=>{const o={};return(e||[]).map(n=>o[n[t]]=n[r]),o},$e=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),ve=e=>$e(e)==="array",ee=e=>(t,r,o="id",n="children")=>{if(!ve(t))return null;const d=(w,z="")=>{for(let I=0,U=w.length;I<U;I++){const ge=w[I];if(ge[o]===r)return e(w,I,z)||w[I];if(ve(ge[n])){const Se=d(ge[n],ge[o]);if(Se)return Se}}};return d(t),t},oe=(e,t,r,o="id",n="children")=>ee((d,w)=>d.splice(w,0,r))(e,t,o,n),g=(e,t,r,o,n="id",d="children")=>ee((w,z)=>{const I=w[z];I.children?I.children.splice(o,0,r):I.children=[r]})(e,t,n,d),a=e=>$e(e).indexOf("element")>-1,m=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),n=[...new Set([...r,...o])];e.className=n.join(" ")},c=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},k=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},y=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},E=(e,t,r,o="id",n="children")=>ee((d,w)=>{const z=d[w];return z[n]=[...z[n]||[],...r],z})(e,t,o,n),p=()=>![typeof window,typeof document].includes("undefined"),$=e=>{if(p())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},A=(e,t)=>{if(p())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===t))r();else{const n=document.createElement("style");n.onerror=d=>o(new Error(`Failed to load '${t}' style`)),n.onload=r,n.innerHTML=e,n.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===e))r();else{const n=document.createElement("link");n.onerror=d=>o(new Error(`Failed to load '${e}'`)),n.onload=r,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},q=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},G=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:n})=>r[o]=n),r},F=e=>$e(e)==="object";const M=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,F(o)?t+=`${r}=${M(o)}`:Array.isArray(o)?t+=`${r}=${xe(o)}`:t+=`${r}=${o}`}),`{${t}}`};var W=M;const te=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,F(r)?t+=W(r):Array.isArray(r)?t+=te(r):t+=`${r}`}),`[${t}]`};var xe=te,Ce=e=>(t,r="id",o="children",n=-1)=>{if(!ve(t))return t;const d={},w=t.map(z=>z[r]);return[...t].map(z=>{var I;const U={...z},{[r]:ge}=U;if(ge!=null){let{parentId:Se}=U;Se==null&&(Se=(I=e==null?void 0:e(U))!=null?I:n,U.parentId=Se),d[ge]||(d[ge]=[]),U[o]=d[ge],d[Se]||(d[Se]=[]),d[n]||(d[n]=[]),w.includes(Se)?d[Se].push(U):d[n].push(U)}}),d[n]},tt=(e,t="id",r="children",o=-1)=>Ce(n=>{const d=n[t].match(/\S+(?=-\S+)/);return(d==null?void 0:d[0])||o})(e,t,r,o),rt=(e,t="path",r="children",o=null)=>Ce(n=>{var d,w,z,I;const U=n[t],ge=U.match(/.*\/[^:/]+\/:[^/]+/);return ge?(w=(d=ge[0].match(/(.*)\/:+/))==null?void 0:d[1])!=null?w:o:(I=(z=U.match(/(.*)\/+/))==null?void 0:z[1])!=null?I:o})(e,t,r,o),Z=()=>{var e,t;return p()&&((t=(e=window.pageYOffset)!=null?e:document.documentElement.scrollTop)!=null?t:document.body.scrollTop)},Re=(e,t)=>Object.prototype.hasOwnProperty.call(e!=null?e:{},t),ze=e=>Re(e,"current"),Ue=(e=0,t)=>{var r;!p()||(t=ze(t)?t.current:t!=null?t:window,(r=t.scrollTo)==null||r.call(t,{top:e,behavior:"smooth"}))},bt=`.huxy-totop-bar {
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
}`;const Xe=()=>document.getElementsByClassName("huxy-totop-bar")[0],at=e=>{if(Xe())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>Ue(),!1),t},R=()=>{const e=Xe();e&&document.body.removeChild(e)};var ae=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!p())return;A(bt,"huxy-backtop-css");const r=()=>{Z()>e?at(t):R()};return(()=>(document.addEventListener("scroll",r,!1),()=>{R(),document.removeEventListener("scroll",r,!1)}))()},K=(e=0,t=2)=>parseInt(String(e),t),Ee=(e=0,t=2)=>Number(e).toString(t),Fe=(e=0,t=2,r=16)=>Ee(K(e,t),r),ct=e=>{if(!F(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const n=o>0?"&":"?";t.push(`${n}${r}=${e[r]}`)}),t.join("")},Ze=e=>{if(!F(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},ot=e=>$e(e)==="function",Ne=e=>$e(e)==="promise"||F(e)&&ot(e.then),Ge=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Ne(e))return{};let o=null,n=null;return{promiseFn:new Promise((d,w)=>{o=(z="canceled")=>{clearTimeout(n),d({canceled:!0,errMsg:z})},t&&(t=typeof t!="number"?12e4:t,n=setTimeout(()=>o(r),t)),e.then(z=>{clearTimeout(n),d({result:z,errMsg:!1})}).catch(z=>{clearTimeout(n),w(z)})}),cancelFn:o}};const Je=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>Ze(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>ct(e).slice(1)}],ar=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(n=>e[n]);if(o.length===1){const n=o[0],d=r?t:n;return d==="params"?{query:e[n]}:{result:e[n],type:d}}else if(o.length>1){const n=o.filter(w=>w!=="params").slice(-1)[0],d=r?t:n;return d==="params"?{query:e.params||e[n]}:{query:e.params,result:e[n],type:d}}};var dt=(e,t)=>r=>(o,n={})=>{const{headers:d,dataType:w,data:z,formData:I,form:U,params:ge,...Se}=n,Be={data:z,formData:I,form:U,params:ge};let xr;const{query:Ht,result:ro,type:Do}=ar(Be,w)||{};if(!Se.body&&ro){const Rr=Je.find(Lr=>Lr.type===Do);xr=Rr.headers,Se.body=Rr.body(ro)}Ht&&(o=`${o}${ct(Ht)}`);const{promiseFn:Ao}=Ge(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...xr,...d},...Se}),t);return Ao.then(({result:Rr,errMsg:Lr})=>e(Lr?{status:408,statusText:Lr}:Rr))},jt=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let n=!1;for(let d in o)Re(o,d)&&r(o[d])&&(o[d]="cyclic",n=!0);return n}return!1};return r(e)&&e};const It=(e,t)=>{const r=$e(e),o=$e(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(jt(e)&&jt(t))return It(e,t);for(let n in t)if(Re(e,n)!==Re(t,n)||!It(e[n],t[n]))return!1;return!0};var Vt=It,Lt=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",ft=e=>e==null?void 0:e.__v_isVNode;const Ut=e=>{if(!ve(e)&&!F(e))return e;const t=ve(e)?[]:{};for(const r in e)if(Re(e,r)){const o=e[r];t[r]=Lt(o)||ft(o)||typeof o!="object"?o:o!==e?Ut(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var Ke=Ut,lr=(e=100)=>{const t=[];let r=-1;const o=d=>{var w,z;const I=t.length,U=Ke(d);return Vt(U,(w=t[I-1])==null?void 0:w.data)?{index:r,length:I,data:(z=t[r])==null?void 0:z.data}:(t.push({data:U}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},n=(d=0)=>{var w;const z=t.length;return r+=d,r=r<0?0:r>z-1?z-1:r,{index:r,length:z,data:Ke((w=t[r])==null?void 0:w.data)}};return{record:o,cursor:n,jump:d=>{var w;return r=d,{index:r,length:t.length,data:Ke((w=t[r])==null?void 0:w.data)}},undo:()=>n(-1),redo:()=>n(1),getList:()=>Ke(t),clean:()=>{t.length=0,r=-1}}},qt=(e,t,r)=>{if(!ve(e))return e;const o=e[t],n=e[r];return e.splice(t,1,n),e.splice(r,1,o),e},ht=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},Dt=(e,t,r=".")=>{const o=(I,U)=>I.split(U),n=o(e,r),d=o(t,r),w=n.length;let z=0;for(let I=0;I<w;I++)if(n[I]<d[I]){z=w-I;break}return z},vt=(...e)=>(...t)=>{const[...r]=e,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...t)},sr=e=>{if(!p())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},lt=e=>(t,r)=>{const{getState:o,setState:n,subscribe:d,unsubscribe:w,clean:z}=e;return r!==void 0&&n({[t]:r},!0),{getState:()=>o(t),setState:(I,U)=>n({[t]:I},U),subscribe:I=>d(t,I),unsubscribe:()=>w(t),clean:()=>z(t)}},Et=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),ur=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:Et(o))}});const Mt=e=>e.startsWith("on"),cr=e=>e!=="children"&&!Mt(e),pt=(e,t)=>r=>e[r]!==t[r],u=(e,t)=>r=>!(r in t),v=e=>{const t=Object.keys(e);return{eventProps:t.filter(Mt),propertyProps:t.filter(cr)}};var j=(e,t,r)=>{const{eventProps:o,propertyProps:n}=v(t),{eventProps:d,propertyProps:w}=v(r);o.filter(u(t,r)).map(z=>{const I=z.toLowerCase().slice(2);e.removeEventListener(I,t[z])}),n.filter(u(t,r)).map(z=>e[z]=""),w.filter(pt(t,r)).map(z=>e[z]=r[z]),d.filter(pt(t,r)).map(z=>{const I=z.toLowerCase().slice(2);e.addEventListener(I,r[z])})},O=e=>{if(!p())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return j(t,{},e.props),t},P=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return e[t]=[];const o=e[t].indexOf(r);o>-1&&e[t].splice(o,1)}}}};const J=e=>{const t={};for(let r in e)Re(e,r)||(t[r]=e[r]);return t};var fe=(e,t)=>{if(!F(e))return t;if(!F(t))return e;const r={...J(e),...J(t)},o={...e,...t};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},se=()=>{const{on:e,emit:t,off:r}=P(),o={};return{getState:n=>Ke(o[n]),setState:(n,d=!1)=>{if(typeof n=="function"&&(n=n(Ke(o))),!F(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const w=Ke(n);Object.keys(w).map(z=>{const I=o[z],U=w[z],ge=F(U)&&F(I)?fe(I,U):U;!d&&t(z,ge),o[z]=ge})},subscribe:(n,d)=>(e(n,d),()=>r(n,d)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(d=>o[d]=void 0):Object.keys(o).map(d=>o[d]=void 0)}}},ne=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...n)=>r(...o,...n);return r},Te=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),st=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},St=(e,t,r="id",o="children")=>ee((n,d)=>n.splice(d,1))(e,t,r,o),mt=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Me=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Bt=()=>{let e=Me();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},At=(e,t)=>{if(p())if(t=t||Bt(),typeof e=="string")fetch(e).then(r=>r.blob()).then(r=>{const o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)});else{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)}},wt=(e=null)=>{var t,r;return p()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(r=window.innerHeight)!=null?r:document.documentElement.clientHeight}:{width:0,height:0}},kt=e=>{var t;if(p())return e=ze(e)?e.current:e!=null?e:document.body,(t=e.getBoundingClientRect)==null?void 0:t.call(e)},nt=e=>{if(!p())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},_e=(e,t={},r=!1)=>{!a(e)||Object.keys(t).map(o=>{e.style.setProperty(o,r?"":t[o])})};const Mr=(e=350)=>new Promise(t=>setTimeout(t,e)),Sr=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var Gt=Mr,yr=async(e,t=15)=>{if(!p())return;if(typeof e=="string"&&(e=nt(e)),e=ze(e)?e.current:e,!a(e))return{};const r=e.cloneNode(!0);_e(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await Gt(t);const o=kt(r);return e.parentNode.removeChild(r),o};const gr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Xt=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,br=(e,t)=>{var r;t=`huxy-drop-arrow-${t}`;const o=(r=e.getAttribute("class"))!=null?r:"";gr.test(o)?e.setAttribute("class",o.replace(Xt,t)):e.setAttribute("class",`${o} ${t}`)},vr=async(e,t,r)=>{const{left:o,right:n,top:d,bottom:w}=kt(e),{width:z,height:I}=wt(),{width:U,height:ge}=await yr(t);if(n<0||w<0||o>z||d>I)return{};if(r==="vertical"){const Se={left:o+"px",top:w+10+"px",right:"auto",bottom:"auto"};let Be="lt";o+U>z&&(Se.left=n-U+"px",Be="rt"),w+10+ge>I&&(Se.top=d-10-ge+"px",Be=Be==="lt"?"lb":"rb"),_e(t,Se),br(t,Be)}else{const Se={left:n+10+"px",top:d+"px",right:"auto",bottom:"auto"};let Be="tl";n+10+U>z&&(Se.left=o-10-U+"px",Be="tr"),d+ge>I&&(Se.top=w-ge+"px",Be=Be==="tl"?"bl":"br"),_e(t,Se),br(t,Be)}};var wr=(e,t,r="horizontal")=>{const o=st(vr),n=()=>o(e,t,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const d=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),_e(t,{left:"",top:"",right:"",bottom:""})};return vr(e,t,r),d},dr=(e,t,r,o="id",n="children")=>ee((d,w)=>d[w]={...d[w],...r})(e,t,o,n),fr=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const $r=P();var Jt=e=>{const{on:t,emit:r,off:o}=$r;return{on:n=>t(e,n),emit:n=>r(e,n),off:n=>o(e,n)}};const hr=120*1e3,zr=e=>e.json().then(t=>t);var Fr=(e=zr,t=hr)=>(r="get")=>dt(e)((r||"get").toUpperCase()),_t=e=>ve(e)&&!!e.length,kr=(e,t,r=[],o=!1,n=null)=>_t(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(d=>(r=r.length>0?r:Object.keys(d),r.filter(w=>{const z=d[w];if(z==null)return!1;if(o)return z===t;const I=new RegExp(t,"gi"),U=z.toString().match(I);return U&&n&&(d[w]=n(z.toString().replace(I,`<span style="background-color:yellow">${U[0]}</span>`),{display:"inline-block"})),U}).length))):e:[],Cr=(e,t="id")=>{if(!_t(e))return e;const r=[],o=[];return e.map(n=>{const d=F(n)?n[t]:n;o.includes(d)||(o.push(d),r.push(n))}),r};const s=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=Ke(t),n=d=>{const w=[];return d.map(z=>{if(_t(z[r])){const I=n(z[r])||[];z[r]=I,I.length>0&&w.push(z)}}),e(d,w)};return n(o)};var h=(e,t,r,o="name",n="id",d="children",w=!1)=>s((z,I)=>Cr([...kr(z,t,o,w,r),...I],n))(e,d),C=(e="")=>{var t;return(t=e.match(/\d+/g))==null?void 0:t.sort((r,o)=>o-r)[0]},b=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),x=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},B=(e="")=>e.replaceAll("//","/"),Y=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",V=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},_=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),n=e%3600,d=~~(n/60);return o<24?`${o}${t[2]}${d}${t[1]}${n%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},D=e=>(t,r="children")=>{if(!ve(t))return t;const o=(n,d=[])=>{n.map((w,z)=>{const I=ve(w[r]);if(w=e(w,d,z,I)||w,I){const{[r]:U,...ge}=w;o(U,[...d,{...ge,"@@index":z}])}})};return o(t),t},ce=(e,t="children")=>{const r=[];return D(o=>{const{[t]:n,...d}=o;r.push(d)})(e,t),r},ke=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const pe=e=>e<10?"0"+e:e;var Q=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),n=pe(t.getMonth()+1),d=pe(t.getDate()),w=pe(t.getHours()),z=pe(t.getMinutes()),I=pe(t.getSeconds());return[r,n,d,w,z,I,o]},we=(e,t=new Date)=>{e=Q(e),t=Q(t);const r=t.y-e.y,o=t.m-e.m,n=t.d-e.d,d=t.h-e.h,w=t.M-e.M,z=new Date(t.y,t.m,0).getDate(),I=(U,ge,Se,Be,xr)=>{const Ht="\u524D";return ge<0&&(U-=1,ge+=Se),U===0?ge+xr+Ht:ge===0?U+Be+Ht:U+Be+ge+xr+Ht};return r>0?I(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?I(o,n,z,"\u4E2A\u6708","\u5929"):n>0?I(n,d,24,"\u5929","\u5C0F\u65F6"):d>0?I(d,w,60,"\u5C0F\u65F6","\u5206\u949F"):w>0?w+"\u5206\u949F\u524D":"\u521A\u521A"};const je=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],ue=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var re=(e=new Date,t=["-","-"," ",":",":",""],r=je)=>{const o=Q(e);let n="";return t.map((d,w)=>{var z;return n+=(w===6?r[o[w]]:(z=o[w])!=null?z:"")+d}),n};const be=["","webkit","moz","ms"],Le=e=>be.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),qe=e=>be.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),Ye=e=>be.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),We=be.map(e=>`${e}fullscreenchange`);var Qe=e=>{var t,r;if(!p())return;e=ze(e)?e.current:e!=null?e:document.body;const o=Le(document),n=qe(e),d=Ye(document);document[o]?(r=document[d])==null||r.call(document):(t=e[n])==null||t.call(e)};const pr=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var xt=()=>{var e;if(!p())return;const t=window.navigator.userAgent.toLowerCase(),r=(e=pr.find(o=>t.match(o.reg)))!=null?e:{};return{type:r.name,version:t.match(r.reg)[1]}};const $t=60*1e3,zt=60*$t,Rt=24*zt;var et=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/Rt);r-=Rt*o;const n=~~(r/zt);r-=zt*n;const d=~~(r/$t);r-=$t*d;const w=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${d}\u5206${w}\u79D2`};const Ft=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],it=e=>{if(!Array.isArray(e))return Ft;const t=[...Ft];return e.map(r=>{const o=t.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var Tt=e=>{const t=it(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return nt(t.join(""))},Kt=(e=new Date)=>{const t=Q(e);return new Date(t[0],t[1],0).getDate()},mr=(e=null)=>{var t,r,o,n;return p()?a(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:(r=(t=window.pageXOffset)!=null?t:document.documentElement.scrollLeft)!=null?r:document.body.scrollLeft,top:(n=(o=window.pageYOffset)!=null?o:document.documentElement.scrollTop)!=null?n:document.body.scrollTop}:{left:0,top:0}};const Ct=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>{var t;return{type:"ios",model:e[1],version:(t=e[3])==null?void 0:t.replaceAll("_",".")}}},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var Wt=()=>{if(!p())return;const e=window.navigator.userAgent.toLowerCase(),t=Ct.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},Tr=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(n=>{const[d,w]=n.split("=");o[d]=w}),{path:t,params:o}}return{path:t}},Qt=()=>p()&&(window.ontouchstart||navigator.maxTouchPoints),er=e=>{var t,r,o,n;const{left:d,top:w}=mr();return{touchX:Qt()?(r=(t=e==null?void 0:e.touches)==null?void 0:t[0])==null?void 0:r.pageX:(e==null?void 0:e.pageX)||(e==null?void 0:e.clientX)+d,touchY:Qt()?(n=(o=e==null?void 0:e.touches)==null?void 0:o[0])==null?void 0:n.pageY:(e==null?void 0:e.pageY)||(e==null?void 0:e.clientY)+w}},tr=(e,t)=>{var r,o;const{touchX:n,touchY:d}=er(e),{x:w,y:z}=(o=(r=t==null?void 0:t.getBoundingClientRect)==null?void 0:r.call(t))!=null?o:{};return{x:n-(w!=null?w:0),y:d-(z!=null?z:0)}},jr=(e,t,r="id",o="children")=>{if(!ve(e))return null;const n=d=>{for(let w=0,z=d.length;w<z;w++){const I=d[w];if(I[r]===t)return[I];if(ve(I[o])){const U=n(I[o]);if(U)return[I].concat(U)}}};return n(e)},rr=(e,t={},r)=>{if(!p())return;r=ze(r)?r.current:r!=null?r:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&_e(o,t),o.innerText=e,r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const or=(e={},t)=>{t=yt(t);const r=(o,n)=>{if(!(n!=null&&n[0]))return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(e,t)},yt=(e="")=>{var t;return(t=e.replace(/\[['"]?(.*?)['"]?\]/g,".$1"))==null?void 0:t.split(".")};var Or=or,Br=(e,t="")=>a(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),_r=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,n=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${n})`;const d=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${d})`},Wr=e=>{if(!p())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:n}=e;return t.width=o,t.height=n,r.drawImage(e,0,0,o,n),t},Zr=(...e)=>!Number.isNaN(new Date(...e).valueOf()),Yr=e=>$e(e)==="error",Hr=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),Vr=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",Ur=e=>$e(e)==="regexp",qr=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),Gr=e=>F(e)&&Object.keys(e).length,Er=e=>F(e)?W(e):Array.isArray(e)?xe(e):e,nr=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",n=>r(n))}),Kr=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",n=>r(n)))}),Qr=async(e,t,r=2e3)=>{for(;!(t!=null&&t(e==null?void 0:e()));)await Gt(r)},Xr=(e,t=["{","}"])=>{var r,o;return(o=(r=e==null?void 0:e.trim)==null?void 0:r.call(e).match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`)))==null?void 0:o[1]},Jr=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),d=r.find(w=>w.key===n);if(!d){const w=e(...o);return r.push({key:n,result:w}),r.length>t&&r.shift(),w}return d.result}};const Ar=(e,t,r="id")=>{if(!ve(e))return t;if(!ve(t))return e;const o={};return[...e,...t].map(n=>{var d;const w=F(n)?(d=n[r])!=null?d:JSON.stringify(n):n;if(o[w]===void 0)o[w]=n;else{const z=o[w];F(z)&&F(n)?o[w]=f(z,n):ve(z)&&ve(n)?o[w]=Ar(z,n):o[w]=n}}),Object.keys(o).map(n=>o[n])};var i=Ar;const l=(e,t)=>{if(!F(e))return t;if(!F(t))return e;for(let r in t)Re(t,r)?F(e[r])&&F(t[r])?e[r]=l(e[r],t[r]):ve(e[r])&&ve(t[r])?e[r]=i(e[r],t[r]):e[r]=t[r]:Object.setPrototypeOf(e,{[r]:t[r]});return e};var f=l,S=(e,...t)=>{const r=ve(e)?i:f;return t.map(o=>e=r(e,o)),e},T=(e,t)=>{var r,o;const n=(r=e==null?void 0:e.split(" "))!=null?r:[],d=(o=t==null?void 0:t.split(" "))!=null?o:[];return[...new Set([...n,...d])].filter(Boolean).join(" ")},N=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(n=>!r.includes(n));e.className=o.join(" ")},L=`@keyframes huxy-message-animate-in {
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
  background: var(--green1);
}
.message-content.success i:before {
  content: "\\2713";
}
.message-content.error i {
  background: var(--red1);
}
.message-content.error i:before {
  content: "\\00D7";
}
.message-content.warn i {
  background: var(--orange1);
}
.message-content.warn i:before {
  content: "\\267A";
}
.message-content.info i {
  background: var(--blue1);
}
.message-content.info i:before {
  content: "\\2690";
}`;const X=()=>document.getElementsByClassName("huxy-message")[0],H=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},ie=(e,t)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${t}`);const o=document.createElement("span");o.innerText=e;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},le=(e,t=3250,r,o)=>{if(!p())return;A(L,"huxy-message-css");let n=X();n||(n=H());const d=ie(e,o);n.appendChild(d),setTimeout(()=>{n.removeChild(d),r==null||r()},t),setTimeout(()=>{N(d,"open")},t-250)};var he={success:(e,t,r)=>le(e,t,r,"success"),warn:(e,t,r)=>le(e,t,r,"warn"),warning:(e,t,r)=>le(e,t,r,"warn"),error:(e,t,r)=>le(e,t,r,"error"),info:(e,t,r)=>le(e,t,r,"info")},de=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[c(1-r),c(Kt(t)-r)]},Ie=(e,t,r,o,n="id",d="children")=>{let w={};return ee((z,I)=>(w=z[I],z.splice(I,1),!0))(e,t,n,d),g(e,r,w,o,n,d),e},De=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),ye=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(n=>t.includes(n)?o.push({key:n,value:e[n]}):r[n]=e[n]),{newObj:r,newQuery:o}},He=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},Oe=(e="",t=0,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`},Pe=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!ve(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},ut=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(n,d)=>n?o(n):r(d))),Zt=()=>"#"+Oe((~~(Math.random()*(1<<24))).toString(16),6),ir=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),Nr=(e=[])=>e[ir(e.length-1)],Yt=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,n)=>{n===e-1?r[n]=t:(r[n]=ir(1,t-1),t-=r[n])}),r},Pr=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),Ir=()=>Math.random()>.5;const Ot=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var Nt=(e,t=60)=>{if(!p())return;e=ze(e)?e.current:e!=null?e:document.body;let r,o=[];const n=st(()=>o.map(I=>I(e)),t),d=I=>{r||(r=Ot(e,n)),o.indexOf(I)===-1&&o.push(I)},w=I=>{const U=o.indexOf(I);U!==-1&&o.splice(U,1),o.length===0&&r&&z()},z=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:d,unbind:w,destroy:z}};const gt=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const n=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var Dr=(e=0,t=0,r=0,o=1)=>{var n;if(e.includes("rgb")){const d=e.match(/rgba?\((.+)\)/);if(d){const w=(n=d[1])==null?void 0:n.split(",").map(z=>z.trim());return gt(...w)}return e}return gt(e,t,r,o)},oo=(e,t="px")=>`${e}`.replace(t,"")-0;const eo=()=>typeof(performance==null?void 0:performance.now)=="function"?performance.now():new Date().getTime(),no=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},io=()=>{const e=[],t=w=>{e.push(w),d(w)},r=()=>e[0],o=()=>e.shift(),n=w=>w.startTime=eo(),d=w=>{n(w),e.sort((z,I)=>z.startTime-I.startTime)};return{hub:e,push:t,peek:r,shift:o,update:d}};var ao=(e=5)=>{const{hub:t,push:r,peek:o,shift:n,update:d}=io(),w=no(()=>{I()&&w()}),z=U=>eo()-U.startTime>e,I=()=>{let U=o();for(;U;){if(z(U)){d(U);break}const{task:ge}=U;typeof ge=="function"?(U.task=null,ge()):n(),U=o()}return U};return(U=()=>{})=>{r({task:U}),t.length<2&&w()}},lo=()=>p()&&document.documentElement.scrollHeight-Z()===wt().height,so=e=>{var t;!p()||(e=ze(e)?e.current:e!=null?e:window,(t=e.scrollIntoView)==null||t.call(e,{behavior:"smooth",block:"center"}))},uo={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch(r){t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},co=e=>{const t=Tt(e);p()&&document.head.appendChild(...t)},fo=(e,t=null,r=!1)=>[...e||[]].sort((o,n)=>{const d=t?o[t]:o,w=t?n[t]:n;return!isNaN(Number(d))&&!isNaN(Number(d))?r?w-d:d-w:typeof d=="string"&&typeof w=="string"?r?w.localeCompare(d):d.localeCompare(w):typeof d=="string"&&typeof w=="number"?r?-1:1:typeof d=="number"||typeof d=="string"?r?1:-1:r?-1:1}),ho=e=>{if(!F(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},po={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const mo=se();var xo=lt(mo),yo=(e,t=!1)=>(e=t?e:`return ${e};`,Function(e)()),go=()=>p()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),bo=(e,...t)=>{const r=[];return e.map((o,n)=>{var d;r.push(o,(d=t[n])!=null?d:"")}),r.join("")},vo=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const wo=e=>[12,Kt(e),24,60,60],ko=(e=[],t=[],r=[])=>{let o=!1;const n=[];return t.map((d,w)=>{const z=(o?d-1:d)-e[w];z<0?(n[w]=z+(r[w]||10),o=!0):(n[w]=z,o=!1)}),n.reverse()};var to=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=wo(t).reverse(),o=Q(e).slice(0,-1).reverse(),n=Q(t).slice(0,-1).reverse();return ko(o,n,r)};const Co=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var jo=(e,t=new Date)=>{const r=to(e,t),o=r.findIndex(n=>n>0);return r.map((n,d)=>`${n||0}${Co[d]}`).slice(o).join("")},Eo=(e,t)=>{!a(e)||(Br(e,t)?N(e,t):m(e,t))},So=e=>(t,r="children")=>{if(!ve(t))return t;const o=n=>(n.map(d=>{ve(d[r])&&(d[r]=o(d[r]))}),e(n));return o(t)},$o=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),zo=(e,t="fuckId",r="children")=>D((o,n,d)=>{o[t]=[...n.map(w=>w["@@index"]),d].join("-")})(e,r),Fo=(e,t,r,o="children")=>ee((n,d)=>{const w=n[d];return w[o]=[...w[o]||[],...r],!0})(e,t),To=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},Oo=e=>p()?(We.map(t=>document.addEventListener(t,e,!1)),()=>We.map(t=>document.removeEventListener(t,e,!1))):void 0,No=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:d="20px microsoft yahei",fillStyle:w="rgba(202,202,202,0.4)",content:z="\u8BF7\u52FF\u5916\u4F20",rotate:I="-30",zIndex:U=1e3}={})=>{if(!p())return;e=ze(e)?e.current:e!=null?e:document.body;const ge=e.firstChild;(ge==null?void 0:ge.className)==="watermark-canvas"&&e.removeChild(ge);const Se=document.createElement("canvas");Se.setAttribute("width",t),Se.setAttribute("height",r);const Be=Se.getContext("2d");Be.textAlign=o,Be.textBaseline=n,Be.font=d,Be.fillStyle=w,Be.rotate(Math.PI/180*I),Be.fillText(z,parseFloat(t)/2,parseFloat(r)/2);const xr=Se.toDataURL(),Ht=document.createElement("div");Ht.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${U};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${xr}')`),e.style.position="relative",e.insertBefore(Ht,e.firstChild)},Po=(e=new Date)=>{const t=new Date(e).getDay();return[c(1-t),c(7-t)]},Io=e=>{if(!Ne(e))return{};let t="pending",r;const o=e.then(n=>{t="success",r=n}).catch(n=>{t="error",r=n});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}};return Ve}()})},3323:function(Pt,me){"use strict";function Ve(R,ae){var K=R.length;R.push(ae);e:for(;0<K;){var Ee=K-1>>>1,Fe=R[Ee];if(0<ve(Fe,ae))R[Ee]=ae,R[K]=Fe,K=Ee;else break e}}function Ae(R){return R.length===0?null:R[0]}function $e(R){if(R.length===0)return null;var ae=R[0],K=R.pop();if(K!==ae){R[0]=K;e:for(var Ee=0,Fe=R.length,ct=Fe>>>1;Ee<ct;){var Ze=2*(Ee+1)-1,ot=R[Ze],Ne=Ze+1,Ge=R[Ne];if(0>ve(ot,K))Ne<Fe&&0>ve(Ge,ot)?(R[Ee]=Ge,R[Ne]=K,Ee=Ne):(R[Ee]=ot,R[Ze]=K,Ee=Ze);else if(Ne<Fe&&0>ve(Ge,K))R[Ee]=Ge,R[Ne]=K,Ee=Ne;else break e}}return ae}function ve(R,ae){var K=R.sortIndex-ae.sortIndex;return K!==0?K:R.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var ee=performance;me.unstable_now=function(){return ee.now()}}else{var oe=Date,g=oe.now();me.unstable_now=function(){return oe.now()-g}}var a=[],m=[],c=1,k=null,y=3,E=!1,p=!1,$=!1,A=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(R){for(var ae=Ae(m);ae!==null;){if(ae.callback===null)$e(m);else if(ae.startTime<=R)$e(m),ae.sortIndex=ae.expirationTime,Ve(a,ae);else break;ae=Ae(m)}}function M(R){if($=!1,F(R),!p)if(Ae(a)!==null)p=!0,Xe(W);else{var ae=Ae(m);ae!==null&&at(M,ae.startTime-R)}}function W(R,ae){p=!1,$&&($=!1,q(Ce),Ce=-1),E=!0;var K=y;try{for(F(ae),k=Ae(a);k!==null&&(!(k.expirationTime>ae)||R&&!Z());){var Ee=k.callback;if(typeof Ee=="function"){k.callback=null,y=k.priorityLevel;var Fe=Ee(k.expirationTime<=ae);ae=me.unstable_now(),typeof Fe=="function"?k.callback=Fe:k===Ae(a)&&$e(a),F(ae)}else $e(a);k=Ae(a)}if(k!==null)var ct=!0;else{var Ze=Ae(m);Ze!==null&&at(M,Ze.startTime-ae),ct=!1}return ct}finally{k=null,y=K,E=!1}}var te=!1,xe=null,Ce=-1,tt=5,rt=-1;function Z(){return!(me.unstable_now()-rt<tt)}function Re(){if(xe!==null){var R=me.unstable_now();rt=R;var ae=!0;try{ae=xe(!0,R)}finally{ae?ze():(te=!1,xe=null)}}else te=!1}var ze;if(typeof G=="function")ze=function(){G(Re)};else if(typeof MessageChannel!="undefined"){var Ue=new MessageChannel,bt=Ue.port2;Ue.port1.onmessage=Re,ze=function(){bt.postMessage(null)}}else ze=function(){A(Re,0)};function Xe(R){xe=R,te||(te=!0,ze())}function at(R,ae){Ce=A(function(){R(me.unstable_now())},ae)}me.unstable_IdlePriority=5,me.unstable_ImmediatePriority=1,me.unstable_LowPriority=4,me.unstable_NormalPriority=3,me.unstable_Profiling=null,me.unstable_UserBlockingPriority=2,me.unstable_cancelCallback=function(R){R.callback=null},me.unstable_continueExecution=function(){p||E||(p=!0,Xe(W))},me.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<R?Math.floor(1e3/R):5},me.unstable_getCurrentPriorityLevel=function(){return y},me.unstable_getFirstCallbackNode=function(){return Ae(a)},me.unstable_next=function(R){switch(y){case 1:case 2:case 3:var ae=3;break;default:ae=y}var K=y;y=ae;try{return R()}finally{y=K}},me.unstable_pauseExecution=function(){},me.unstable_requestPaint=function(){},me.unstable_runWithPriority=function(R,ae){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var K=y;y=R;try{return ae()}finally{y=K}},me.unstable_scheduleCallback=function(R,ae,K){var Ee=me.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Ee+K:Ee):K=Ee,R){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=K+Fe,R={id:c++,callback:ae,priorityLevel:R,startTime:K,expirationTime:Fe,sortIndex:-1},K>Ee?(R.sortIndex=K,Ve(m,R),Ae(a)===null&&R===Ae(m)&&($?(q(Ce),Ce=-1):$=!0,at(M,K-Ee))):(R.sortIndex=Fe,Ve(a,R),p||E||(p=!0,Xe(W))),R},me.unstable_shouldYield=Z,me.unstable_wrapCallback=function(R){var ae=y;return function(){var K=y;y=ae;try{return R.apply(this,arguments)}finally{y=K}}}},1102:function(Pt,me,Ve){"use strict";Pt.exports=Ve(3323)}}]);
