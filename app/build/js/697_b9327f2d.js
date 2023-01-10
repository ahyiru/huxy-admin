(self.webpackChunk=self.webpackChunk||[]).push([[697],{1975:function(Tt,pe,Ye){(function(_e,Se){Tt.exports=Se(Ye(7378),Ye(1542))})(this,function(_e,Se){return function(){"use strict";var ve={193:function(a,m,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),$=p()(g());$.push([a.id,`/*@height:2px;
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
`,""]),$.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},m.Z=$},145:function(a,m,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),$=p()(g());$.push([a.id,`.kLIGi {
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
`,""]),$.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},m.Z=$},842:function(a,m,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),$=p()(g());$.push([a.id,`@keyframes animate-drawer-in {
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
`,""]),$.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},m.Z=$},563:function(a,m,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),$=p()(g());$.push([a.id,`@keyframes animate-drop-in {
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
`,""]),$.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},m.Z=$},697:function(a,m,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),$=p()(g());$.push([a.id,`@keyframes animate-modal-in {
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
`,""]),$.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},m.Z=$},810:function(a,m,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),$=p()(g());$.push([a.id,`.clear {
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
`,""]),$.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"},m.Z=$},31:function(a,m,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),$=p()(g());$.push([a.id,`.cols-1 {
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
`,""]),$.locals={},m.Z=$},201:function(a,m,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),$=p()(g());$.push([a.id,`@keyframes before {
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
`,""]),$.locals={},m.Z=$},289:function(a,m,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),$=p()(g());$.push([a.id,`.clear {
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
`,""]),$.locals={},m.Z=$},626:function(a,m,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),$=p()(g());$.push([a.id,`.ofth_ {
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
`,""]),$.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},m.Z=$},435:function(a,m,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),$=p()(g());$.push([a.id,`.node-right-icon-close {
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
`,""]),$.locals={},m.Z=$},414:function(a){a.exports=function(m){var c=[];return c.toString=function(){return this.map(function(w){var g="",E=typeof w[5]!="undefined";return w[4]&&(g+="@supports (".concat(w[4],") {")),w[2]&&(g+="@media ".concat(w[2]," {")),E&&(g+="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {")),g+=m(w),E&&(g+="}"),w[2]&&(g+="}"),w[4]&&(g+="}"),g}).join("")},c.i=function(w,g,E,p,$){typeof w=="string"&&(w=[[null,w,void 0]]);var _={};if(E)for(var V=0;V<this.length;V++){var U=this[V][0];U!=null&&(_[U]=!0)}for(var F=0;F<w.length;F++){var R=[].concat(w[F]);E&&_[R[0]]||(typeof $!="undefined"&&(typeof R[5]=="undefined"||(R[1]="@layer".concat(R[5].length>0?" ".concat(R[5]):""," {").concat(R[1],"}")),R[5]=$),g&&(R[2]&&(R[1]="@media ".concat(R[2]," {").concat(R[1],"}")),R[2]=g),p&&(R[4]?(R[1]="@supports (".concat(R[4],") {").concat(R[1],"}"),R[4]=p):R[4]="".concat(p)),c.push(R))}},c}},703:function(a){a.exports=function(m){return m[1]}},53:function(a,m,c){var w,g=c(899),E=Symbol.for("react.element"),p=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,_=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function U(F,R,Y){var te,me={},we=null,Xe=null;Y!==void 0&&(we=""+Y),R.key!==void 0&&(we=""+R.key),R.ref!==void 0&&(Xe=R.ref);for(te in R)$.call(R,te)&&!V.hasOwnProperty(te)&&(me[te]=R[te]);if(F&&F.defaultProps)for(te in R=F.defaultProps,R)me[te]===void 0&&(me[te]=R[te]);return{$$typeof:E,type:F,key:we,ref:Xe,props:me,_owner:_.current}}w=p,m.jsx=U,m.jsxs=U},458:function(a,m,c){a.exports=c(53)},748:function(a){var m=[];function c(E){for(var p=-1,$=0;$<m.length;$++)if(m[$].identifier===E){p=$;break}return p}function w(E,p){for(var $={},_=[],V=0;V<E.length;V++){var U=E[V],F=p.base?U[0]+p.base:U[0],R=$[F]||0,Y="".concat(F," ").concat(R);$[F]=R+1;var te=c(Y),me={css:U[1],media:U[2],sourceMap:U[3],supports:U[4],layer:U[5]};if(te!==-1)m[te].references++,m[te].updater(me);else{var we=g(me,p);p.byIndex=V,m.splice(V,0,{identifier:Y,updater:we,references:1})}_.push(Y)}return _}function g(E,p){var $=p.domAPI(p);$.update(E);var _=function(V){if(V){if(V.css===E.css&&V.media===E.media&&V.sourceMap===E.sourceMap&&V.supports===E.supports&&V.layer===E.layer)return;$.update(E=V)}else $.remove()};return _}a.exports=function(E,p){p=p||{},E=E||[];var $=w(E,p);return function(_){_=_||[];for(var V=0;V<$.length;V++){var U=$[V],F=c(U);m[F].references--}for(var R=w(_,p),Y=0;Y<$.length;Y++){var te=$[Y],me=c(te);m[me].references===0&&(m[me].updater(),m.splice(me,1))}$=R}}},736:function(a){var m={};function c(g){if(typeof m[g]=="undefined"){var E=document.querySelector(g);if(window.HTMLIFrameElement&&E instanceof window.HTMLIFrameElement)try{E=E.contentDocument.head}catch(p){E=null}m[g]=E}return m[g]}function w(g,E){var p=c(g);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(E)}a.exports=w},706:function(a){function m(c){var w=document.createElement("style");return c.setAttributes(w,c.attributes),c.insert(w,c.options),w}a.exports=m},567:function(a,m,c){function w(g){var E=c.nc;E&&g.setAttribute("nonce",E)}a.exports=w},306:function(a){function m(g,E,p){var $="";p.supports&&($+="@supports (".concat(p.supports,") {")),p.media&&($+="@media ".concat(p.media," {"));var _=typeof p.layer!="undefined";_&&($+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),$+=p.css,_&&($+="}"),p.media&&($+="}"),p.supports&&($+="}");var V=p.sourceMap;V&&typeof btoa!="undefined"&&($+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(V))))," */")),E.styleTagTransform($,g,E.options)}function c(g){if(g.parentNode===null)return!1;g.parentNode.removeChild(g)}function w(g){var E=g.insertStyleElement(g);return{update:function(p){m(E,g,p)},remove:function(){c(E)}}}a.exports=w},62:function(a){function m(c,w){if(w.styleSheet)w.styleSheet.cssText=c;else{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(document.createTextNode(c))}}a.exports=m},899:function(a){a.exports=_e},994:function(a){a.exports=Se}},Q={};function re(a){var m=Q[a];if(m!==void 0)return m.exports;var c=Q[a]={id:a,exports:{}};return ve[a](c,c.exports,re),c.exports}(function(){re.n=function(a){var m=a&&a.__esModule?function(){return a.default}:function(){return a};return re.d(m,{a:m}),m}})(),function(){re.d=function(a,m){for(var c in m)re.o(m,c)&&!re.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:m[c]})}}(),function(){re.o=function(a,m){return Object.prototype.hasOwnProperty.call(a,m)}}(),function(){re.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){re.nc=void 0}();var y={};return function(){re.r(y),re.d(y,{Anico:function(){return Xe},Carousel:function(){return Ot},Col:function(){return Nt},Drawer:function(){return Zt},Drop:function(){return pt},Ellipsis:function(){return Ir},ErrorBoundary:function(){return kr},FullPage:function(){return Mr},HandleError:function(){return Ar},LoadError:function(){return Sr},Mask:function(){return lt},MaxSize:function(){return L},Modal:function(){return ce},Panel:function(){return qe},Portal:function(){return Ct},Row:function(){return Rt},Spinner:function(){return je},TabHeader:function(){return Br},Tooltip:function(){return hr},Tree:function(){return Gr},fixEle:function(){return Cr},fixIcon:function(){return pr},renderTree:function(){return vt},str2React:function(){return nr},str2Vue:function(){return Xt}});var a=re(458),m=re(748),c=re.n(m),w=re(306),g=re.n(w),E=re(736),p=re.n(E),$=re(567),_=re.n($),V=re(706),U=re.n(V),F=re(62),R=re.n(F),Y=re(193),te={};te.styleTagTransform=R(),te.setAttributes=_(),te.insert=p().bind(null,"head"),te.domAPI=g(),te.insertStyleElement=U();var me=c()(Y.Z,te),we=Y.Z&&Y.Z.locals?Y.Z.locals:void 0,Xe=i=>(0,a.jsx)("span",{className:we.anico,children:(0,a.jsx)("span",{className:[we.hline,...(i.type||"").split(" ").map(l=>we[l]).filter(Boolean)].join(" ")})}),it=re(994),q=re(899),Me=re.n(q),Pe=(i,l)=>{const h=(0,q.useRef)();(0,q.useEffect)(()=>{h.current=i},[i]),(0,q.useEffect)(()=>{if(l){const S=setInterval(()=>h.current(),l);return()=>clearInterval(S)}},[l])},Ve=()=>![typeof window,typeof document].includes("undefined"),Wt=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),at=i=>Wt(i).indexOf("element")>-1,ft=(i=null)=>{var l,h;return Ve()?at(i)?{width:i.clientWidth,height:i.clientHeight}:{width:(l=window.innerWidth)!=null?l:document.documentElement.clientWidth,height:(h=window.innerHeight)!=null?h:document.documentElement.clientHeight}:{width:0,height:0}},A=(i=()=>{},l=60)=>{let h=null;return function(...S){clearTimeout(h),h=setTimeout(()=>i.apply(this,S),l)}},ie=(i,l)=>Object.prototype.hasOwnProperty.call(i!=null?i:{},l),X=i=>ie(i,"current");const Ce=(i,l)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const h=document.createElement("object");return h.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),h.setAttribute("class","resize-sensor"),h.onload=()=>{h.contentDocument.defaultView.addEventListener("resize",l,!1),l()},h.type="text/html",i.appendChild(h),h.data="about:blank",h};var Fe=(i,l=60)=>{if(!Ve())return;i=X(i)?i.current:i!=null?i:document.body;let h,S=[];const O=A(()=>S.map(J=>J(i)),l),D=J=>{h||(h=Ce(i,O)),S.indexOf(J)===-1&&S.push(J)},W=J=>{const ae=S.indexOf(J);ae!==-1&&S.splice(ae,1),S.length===0&&h&&ee()},ee=()=>{h&&h.parentNode&&(h.contentDocument&&h.contentDocument.defaultView.removeEventListener("resize",O,!1),h.parentNode.removeChild(h),h=void 0,S=[])};return{element:i,bind:D,unbind:W,destroy:ee}},Qe=(i={})=>{const l=(0,q.useRef)(0),[h,S]=(0,q.useState)(i),O=(0,q.useCallback)(D=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>S(D))},[]);return(0,q.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[h,O]},Ue=(i=null,l=60)=>{const h=X(i)?i.current:i,{bind:S,destroy:O}=Fe(h,l),[D,W]=Qe(ft(h));return(0,q.useEffect)(()=>(S(()=>h&&W(ft(h))),()=>O()),[h]),D},Ge=re(145),De={};De.styleTagTransform=R(),De.setAttributes=_(),De.insert=p().bind(null,"head"),De.domAPI=g(),De.insertStyleElement=U();var Je=c()(Ge.Z,De),et=Ge.Z&&Ge.Z.locals?Ge.Z.locals:void 0,Ot=({children:i,active:l=0,delay:h=5e3,className:S,...O})=>{const[D,W]=(0,q.useState)(l+1),[ee,J]=(0,q.useState)(!1),ae=(0,q.useRef)(),xe=(0,q.useRef)(""),{width:ye}=Ue(ae);i=Array.isArray(i)?i:[i];const fe=i[0],Ae=[i[i.length-1],...i,fe],Ne=Ae.length;Pe(()=>{let Te=D+1;Te=Te===Ne?1:Te,xe.current&&(xe.current=""),W(Te),Te===Ne-1&&setTimeout(()=>{xe.current="none",W(1)},500)},ee?null:h);const he=(Te,Ie)=>{Ie.stopPropagation(),xe.current="",W(Te),(0,it.flushSync)(()=>J(!0)),J(!1)},Ze={width:`${Ne*ye}px`,transform:`translateX(${-ye*D}px)`,transition:xe.current};return(0,a.jsxs)("div",{className:`${et["huxy-carousel"]}${S?` ${S}`:""}`,...O,ref:ae,children:[(0,a.jsx)("div",{className:et["huxy-carousel-wrap"],style:Ze,children:Ae.map((Te,Ie)=>(0,a.jsx)("div",{className:`${et["carousel-item"]} ${D===Ie?et.active:""}`,style:{width:`${ye}px`},children:Te},`huxy-carousel-${Ie}`))}),(0,a.jsx)("div",{className:et["carousel-switch"],children:i.map((Te,Ie)=>(0,a.jsx)("span",{className:`${et.dot} ${D===Ie+1?et.active:""}`,onClick:Lt=>he(Ie+1,Lt)},`huxy-carousel-switch-${Ie}`))})]})};const yt=(i,l)=>{let h="",S="";if(typeof l=="number"&&(h=`col-${i}-${l}`),typeof l=="object"){const{span:O,offset:D}=l;h=O?`col-${i}-${O}`:"",S=D?`offset-${i}-${D}`:""}return{sp:h,os:S}};var Nt=(0,q.forwardRef)(({span:i,offset:l,xl:h,lg:S,md:O,sm:D,xs:W,style:ee,width:J,auto:ae,offsetWidth:xe="0px",className:ye,...fe},Ae)=>{const Ne=ye?` ${ye}`:"",he=`col-${i||12}`,Ze=l?`offset-${l}`:"",{sp:Te,os:Ie}=yt("xs",W),{sp:Lt,os:cr}=yt("sm",D),{sp:Gt,os:Jt}=yt("md",O),{sp:wt,os:dr}=yt("lg",S),{sp:Bt,os:Ft}=yt("xl",h),dt=[he,Bt,wt,Gt,Lt,Te,Ze,Ft,dr,Jt,cr,Ie].filter(Boolean).join(" "),Kt=ae?{width:"auto",flex:1,maxWidth:`calc(100% - ${xe})`}:{width:J};return(0,a.jsx)("div",{className:`${dt}${Ne}`,...fe,style:{...Kt,...ee},ref:Ae})}),kt=()=>{const i=(0,q.useRef)(!0);return i.current?(i.current=!1,!0):!1},er=(i,l=[])=>{const h=kt();(0,q.useEffect)(()=>{if(!h)return i()},l)},Mt=(i,l=450)=>{const[h,S]=(0,q.useState)(i);return er(()=>{let O;return i||l===0?S(i):O=setTimeout(()=>S(i),l),()=>O&&clearTimeout(O)},[i]),[h,S]},Ct=({children:i,mountNode:l=document.body})=>(0,it.createPortal)(i,l);const It={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},tt={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},tr={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},fr=document.body;var lt=({open:i,close:l,delay:h=300,children:S,mountNode:O,hasMask:D=!0,style:W,className:ee="h-mask"})=>{const[J]=Mt(i,h);return fr.style.overflow=J?"hidden":"",(0,a.jsx)(Ct,{mountNode:O,children:(0,a.jsx)("div",{children:J?(0,a.jsxs)("div",{className:ee,style:It,children:[D?(0,a.jsx)("div",{style:tt,onClick:ae=>l==null?void 0:l(ae)}):null,(0,a.jsx)("div",{style:{...tr,...W},children:S})]}):null})})},Pt=re(842),gt={};gt.styleTagTransform=R(),gt.setAttributes=_(),gt.insert=p().bind(null,"head"),gt.domAPI=g(),gt.insertStyleElement=U();var Or=c()(Pt.Z,gt),rt=Pt.Z&&Pt.Z.locals?Pt.Z.locals:void 0,Zt=({open:i,close:l,footer:h,header:S,className:O,children:D,width:W="300px"})=>{var ee;const J=["drawer-wrap",i?"open":"",...(ee=O==null?void 0:O.split(" "))!=null?ee:[]].filter(Boolean).map(ae=>rt[ae]).join(" ");return(0,a.jsx)(lt,{open:i,close:l,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,a.jsx)("div",{className:J,style:{width:W},children:(0,a.jsxs)("div",{className:rt["drawer-container"],children:[(0,a.jsxs)("div",{className:rt["drawer-header"],children:[(0,a.jsx)("span",{className:`link ${rt["ico-close"]}`,onClick:ae=>l==null?void 0:l(ae)}),(0,a.jsx)("div",{children:S})]}),(0,a.jsx)("div",{className:rt["drawer-content"],children:D}),h?(0,a.jsx)("div",{className:rt["drawer-footer"],children:h}):null]})})})},jt=(i,l,h="click")=>{(0,q.useEffect)(()=>{const S=D=>{const W=X(i)?i.current:i;(W==null?void 0:W.contains)&&!W.contains(D.target)&&l(D)},O=typeof h=="string"?[h]:h;return O.map(D=>{document.addEventListener(D,S,!1)}),()=>{O.map(D=>{document.removeEventListener(D,S,!1)})}},[i,l,h])},rr=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",or=(i="")=>i.replace(/^\S/,l=>l.toUpperCase()),ht=i=>{var l;if(Ve())return i=X(i)?i.current:i!=null?i:document.body,(l=i.getBoundingClientRect)==null?void 0:l.call(i)},u=i=>{if(!Ve())return;const l=document.createElement("div");return l.innerHTML=i,l.children[0]},v=(i,l={},h=!1)=>{!at(i)||Object.keys(l).map(S=>{i.style.setProperty(S,h?"":l[S])})};const j=(i=350)=>new Promise(l=>setTimeout(l,i)),T=(i=100)=>{const l=Date.now();for(;Date.now()-l<=i;);};var N=j,G=async(i,l=15)=>{if(!Ve())return;if(typeof i=="string"&&(i=u(i)),i=X(i)?i.current:i,!at(i))return{};const h=i.cloneNode(!0);v(h,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(h),await N(l);const S=ht(h);return i.parentNode.removeChild(h),S};const ue=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,le=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,oe=(i,l)=>{var h;l=`huxy-drop-arrow-${l}`;const S=(h=i.getAttribute("class"))!=null?h:"";ue.test(S)?i.setAttribute("class",S.replace(le,l)):i.setAttribute("class",`${S} ${l}`)},Oe=async(i,l,h)=>{const{left:S,right:O,top:D,bottom:W}=ht(i),{width:ee,height:J}=ft(),{width:ae,height:xe}=await G(l);if(O<0||W<0||S>ee||D>J)return{};if(h==="vertical"){const ye={left:S+"px",top:W+10+"px",right:"auto",bottom:"auto"};let fe="lt";S+ae>ee&&(ye.left=O-ae+"px",fe="rt"),W+10+xe>J&&(ye.top=D-10-xe+"px",fe=fe==="lt"?"lb":"rb"),v(l,ye),oe(l,fe)}else{const ye={left:O+10+"px",top:D+"px",right:"auto",bottom:"auto"};let fe="tl";O+10+ae>ee&&(ye.left=S-10-ae+"px",fe="tr"),D+xe>J&&(ye.top=W-xe+"px",fe=fe==="tl"?"bl":"br"),v(l,ye),oe(l,fe)}};var ot=(i,l,h="horizontal")=>{const S=A(Oe),O=()=>S(i,l,h);window.addEventListener("scroll",O,!1),window.addEventListener("resize",O,!1);const D=()=>{window.removeEventListener("scroll",O),window.removeEventListener("resize",O),v(l,{left:"",top:"",right:"",bottom:""})};return Oe(i,l,h),D},Et=({open:i,delay:l=250,children:h,mountNode:S,style:O,className:D="huxy-mask"})=>{const[W]=Mt(i,l);return(0,a.jsx)(Ct,{mountNode:S,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:D,children:(0,a.jsx)("div",{style:{...O,display:W?"block":"none"},children:h})})})})},st=re(563),Re={};Re.styleTagTransform=R(),Re.setAttributes=_(),Re.insert=p().bind(null,"head"),Re.domAPI=g(),Re.insertStyleElement=U();var Dt=c()(st.Z,Re),_t=st.Z&&st.Z.locals?st.Z.locals:void 0,pt=({trigger:i="click",type:l,dropList:h,className:S,children:O,...D})=>{const[W,ee]=(0,q.useState)(!1),J=(0,q.useRef)(),ae=(0,q.useRef)(),xe=(0,q.useRef)();jt(J,he=>W&&ee(!1),[...new Set(["click",i.toLowerCase()])]),(0,q.useEffect)(()=>()=>{var he;return(he=xe.current)==null?void 0:he.call(xe)},[]);const ye=he=>{he.preventDefault(),ee(!0),xe.current=ot(J.current,ae.current,l)},fe={[`on${or(i)}`]:ye},Ae=["drop-wrap",W?"open":""].filter(Boolean).map(he=>_t[he]).join(" "),Ne=rr(h)?h:h==null?void 0:h(()=>ee(!1),W);return(0,a.jsxs)("span",{ref:J,className:`${_t["drop-target"]}${S?` ${S}`:""}`,...fe,...D,children:[O,(0,a.jsx)(Et,{open:W,className:"huxy-drop",children:(0,a.jsx)("div",{ref:ae,className:Ae,children:Ne})})]})},bt=(i,l={},h)=>{if(!Ve())return;h=X(h)?h.current:h!=null?h:document.body;const S=document.createElement("span");S.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),l&&v(S,l),S.innerText=i,h.appendChild(S);const O=S.getBoundingClientRect();return h.removeChild(S),O},mt=re(626),He={};He.styleTagTransform=R(),He.setAttributes=_(),He.insert=p().bind(null,"head"),He.domAPI=g(),He.insertStyleElement=U();var Yt=c()(mt.Z,He),Nr=mt.Z&&mt.Z.locals?mt.Z.locals:void 0,hr=({title:i,placement:l="topRight",children:h,ellipsis:S,className:O,...D})=>(0,a.jsx)("span",{className:`${Nr[`huxy-tooltip-${l}`]}${O?` ${O}`:""}`,tooltip:i!=null?i:h,...D,children:(0,a.jsx)("span",{className:S?Nr.ellipsis:"",children:h})});const br={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"};var Ir=i=>{var l,h,S,O;const{children:D}=i,W=typeof D=="string",ee=W?D:(S=(l=D==null?void 0:D.props)==null?void 0:l.title)!=null?S:(h=D==null?void 0:D.props)==null?void 0:h.children,J=(0,q.useRef)(),[ae,xe]=(0,q.useState)(!1),ye=Ue(J,250);return(0,q.useEffect)(()=>{if(J.current){const{width:fe}=bt(ee),{width:Ae}=ht(J.current),Ne=fe>Ae;Ne!==ae&&xe(Ne)}},[ee,ye.width]),(0,a.jsx)("span",{ref:J,style:{width:"100%",display:"inline-block"},children:ae?W?(0,a.jsx)(hr,{...i,ellipsis:!0}):(0,a.jsx)("span",{style:br,children:D}):W?D:(O=D==null?void 0:D.props)==null?void 0:O.children})},vr=Object.defineProperty,Ht=(i,l,h)=>l in i?vr(i,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[l]=h,wr=(i,l,h)=>(Ht(i,typeof l!="symbol"?l+"":l,h),h);class kr extends Me().Component{constructor(){super(...arguments),wr(this,"state",{error:null})}static getDerivedStateFromError(l){return{error:l}}componentDidCatch(l,h){const{errorReport:S}=this.props;typeof S=="function"&&S({error:l,info:h.componentStack})}render(){const{error:l}=this.state,{fallback:h,children:S}=this.props;return l?h(l):S}}var Cr=i=>l=>{if(typeof l=="function"||typeof(l==null?void 0:l.render)=="function")return(0,a.jsx)(l,{});if(typeof l=="string"){const h=i==null?void 0:i[l];return h?(0,a.jsx)(h,{}):(0,a.jsx)("i",{className:l})}return l!=null?l:null};const jr=i=>Cr(i);var pr=i=>({icon:l,defaultIcon:h=null})=>l?jr(i)(l):l===!1?null:h;const At=["","webkit","moz","ms"],Pr=i=>At.map(l=>l?`${l}FullscreenElement`:"fullscreenElement").find(l=>i[l]),Dr=i=>At.map(l=>l?`${l}RequestFullscreen`:"requestFullscreen").find(l=>i[l]),_r=i=>At.map(l=>l?`${l}ExitFullscreen`:"exitFullscreen").find(l=>i[l]),Vt=At.map(i=>`${i}fullscreenchange`);var Er=i=>{var l,h;if(!Ve())return;i=X(i)?i.current:i!=null?i:document.body;const S=Pr(document),O=Dr(i),D=_r(document);document[S]?(h=document[D])==null||h.call(document):(l=i[O])==null||l.call(i)},Ut=i=>Ve()?(Vt.map(l=>document.addEventListener(l,i,!1)),()=>Vt.map(l=>document.removeEventListener(l,i,!1))):void 0;const St=i=>(0,a.jsx)("i",{...i,children:"..."});var Mr=({panel:i,fullIcon:l=St,exitIcon:h=St,...S})=>{const O=X(i)?i.current:i,[D,W]=(0,q.useState)();(0,q.useEffect)(()=>{const J=Ut(()=>{W(ae=>!ae)});return()=>J()},[]);const ee=D?h:l;return(0,a.jsx)(ee,{onClick:J=>Er(O),...S})},nr=(i,l)=>(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...l}),Sr=i=>{const{error:l={},info:h=""}=i||{},{message:S,stack:O,errMsg:D}=l;let W=D||O||l.toString();W=`${W}
${h}`.replace(/\r|\n|\r\n/g,"<br/>"),W=W.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),W=W.replace(/\s/g,"&nbsp;");const ee=S==null?void 0:S.slice(0,120).split(". ").slice(0,2).join(". ");return(0,a.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[nr(W,{style:{color:"red"}}),ee&&(0,a.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${ee}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Ar=({children:i,report:l})=>{var h;const S=(0,q.useRef)();return(h=S.current)!=null&&h.state&&(S.current.state.error=null),(0,a.jsx)(kr,{ref:S,fallback:(O,D)=>Sr({error:O,info:D}),errorReport:l,children:i})};const $r=(i,l)=>Object.keys(l).map(h=>i.style[h]=l[h]),s=(i,l)=>Object.keys(l).map(h=>i.style[h]=""),f={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},C=({left:i,top:l,width:h,height:S})=>({left:`${i}px`,top:`${l}px`,width:`${h}px`,height:`${S}px`}),b=i=>(0,a.jsx)("i",{...i,children:"..."}),x=i=>{const{left:l,top:h}=ht(i),{width:S,height:O}=ft(i);return{left:l,top:h,width:S,height:O}};var L=({panel:i,target:l,fullIcon:h=b,exitIcon:S=b})=>{i=X(i)?i.current:i||document.body;const[O,D]=(0,q.useState)(),W=(0,q.useRef)(),ee=(0,q.useRef)();(0,q.useEffect)(()=>{const xe=typeof l=="function"?l:()=>document.getElementsByClassName(l)[0];ee.current=C(x(xe())),W.current={...f,...C(x(i))}},[i]);const J=(xe,ye)=>{xe?($r(ye,W.current),setTimeout(()=>{$r(ye,ee.current)},0)):s(ye,W.current),D(xe)},ae=O?S:h;return(0,a.jsx)(ae,{onClick:xe=>J(!O,i)})},M=re(697),B={};B.styleTagTransform=R(),B.setAttributes=_(),B.insert=p().bind(null,"head"),B.domAPI=g(),B.insertStyleElement=U();var Z=c()(M.Z,B),I=M.Z&&M.Z.locals?M.Z.locals:void 0,ce=({open:i,close:l,hasMask:h=!0,cancelText:S="\u53D6\u6D88",submit:O,submitText:D="\u786E\u5B9A",title:W="Modal \u5F39\u7A97",className:ee,children:J,delay:ae=250})=>{var xe;const ye=["modal-wrap",i?"open":"",...(xe=ee==null?void 0:ee.split(" "))!=null?xe:[]].filter(Boolean).map(fe=>I[fe]).join(" ");return(0,a.jsx)(lt,{open:i,close:l,delay:ae,hasMask:h,className:"huxy-modal",children:(0,a.jsx)("div",{className:ye,children:(0,a.jsxs)("div",{className:I["modal-container"],children:[(0,a.jsx)("div",{className:I["modal-header"],children:W}),(0,a.jsx)("div",{className:I["modal-content"],children:J}),(0,a.jsxs)("div",{className:I["modal-footer"],children:[(0,a.jsx)("div",{className:`${I.btn} ${I.left}`,onClick:fe=>l==null?void 0:l(fe),children:S}),(0,a.jsx)("div",{className:`${I.btn} ${I.right}`,onClick:fe=>O==null?void 0:O(fe),children:D})]})]})})})},ge=re(201),de={};de.styleTagTransform=R(),de.setAttributes=_(),de.insert=p().bind(null,"head"),de.domAPI=g(),de.insertStyleElement=U();var se=c()(ge.Z,de),ke=ge.Z&&ge.Z.locals?ge.Z.locals:void 0,je=({global:i,absolute:l})=>(0,a.jsx)("div",{className:`spinner${i?" global":""}${l?" absolute":""}`,children:(0,a.jsx)("figure",{className:"spinning"})}),ne=re(810),K={};K.styleTagTransform=R(),K.setAttributes=_(),K.insert=p().bind(null,"head"),K.domAPI=g(),K.insertStyleElement=U();var $e=c()(ne.Z,K),ze=ne.Z&&ne.Z.locals?ne.Z.locals:void 0;const Le=i=>{var l;return(l=i==null?void 0:i.filter)==null?void 0:l.call(i,h=>typeof h=="function")},We=(i,l)=>{const h=(0,q.useRef)(),{loading:S,title:O,plugins:D,children:W,className:ee,...J}=i,ae=Le(D),xe=ae==null?void 0:ae.length,ye=ee?` ${ee}`:"",fe=X(l)?l:h;return(0,a.jsxs)("div",{className:`${ze.panel}${ye}`,...J,ref:fe,children:[(O||xe)&&(0,a.jsxs)("div",{className:ze["panel-header"],children:[O&&(0,a.jsx)("h4",{className:ze["panel-title"],children:O}),xe&&(0,a.jsx)("div",{className:ze["panel-plugins"],children:ae.map((Ae,Ne)=>(0,a.jsx)("span",{className:"link",children:(0,a.jsx)(Ae,{panel:fe})},Ne))})]}),(0,a.jsx)("div",{className:ze["panel-body"],children:W}),S&&(0,a.jsx)(je,{})]})};var qe=(0,q.forwardRef)(We),ut=re(31),ct={};ct.styleTagTransform=R(),ct.setAttributes=_(),ct.insert=p().bind(null,"head"),ct.domAPI=g(),ct.insertStyleElement=U();var ir=c()(ut.Z,ct),qt=ut.Z&&ut.Z.locals?ut.Z.locals:void 0;const $t=({gutter:i=10,className:l,overflow:h="hidden",...S},O)=>{var D;const W=l?` ${l}`:"";let ee=10;if(Array.isArray(i)){const J=[...i];i=J[0],ee=(D=J[1])!=null?D:J[0]}return(0,a.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(ee/2)}px`,overflow:h},children:(0,a.jsx)("div",{className:`row${W}`,...S,ref:O})})};var Rt=(0,q.forwardRef)($t),nt=i=>Wt(i)==="array",Rr=i=>nt(i)&&!!i.length;const Ke=({to:i,preventDefault:l,stopPropagation:h,...S})=>l?(0,a.jsx)("span",{...S}):(0,a.jsx)("a",{href:i,...S}),xt=({item:i,...l})=>(0,a.jsx)("ul",{...l}),mr=(i,...l)=>{const h={};return Object.keys(i).filter(Boolean).map(S=>{h[S]=O=>i[S](O,...l)}),h},xr=({data:i=[],events:l={},List:h=xt,Link:S=Ke,leftIcon:O,rightIcon:D,isHorizontal:W,isCollapsed:ee,level:J=0,parentOpen:ae=!0})=>{const xe=ee&&!J,ye=!W&&!ee&&!ae;return i.map(fe=>{var Ae;const{name:Ne,path:he,icon:Ze,rightIcon:Te,active:Ie,open:Lt,children:cr,linkProps:Gt}=fe,Jt=Rr(cr),wt=fe.id||he||Ne,dr=xe?(Ae=fe.title)!=null?Ae:Ne:void 0,Bt=ye?"hidden":"",Ft=Ze!=null?Ze:O,dt=Te!=null?Te:D,Kt=Ft?(0,a.jsx)("div",{className:"node-left-icon",children:Ft===!0?(0,a.jsx)("i",{className:"default-left-icon"}):Ft}):null,Wr=Ne?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:Ne})}):null;if(Jt){const Jr=mr(l,fe,J),Kr=[Bt,Lt?"open":""].filter(Boolean).join(" ");return(0,a.jsxs)("li",{className:Kr,"has-children":"true",...Jr,children:[(0,a.jsxs)(S,{title:dr,className:`link${Ie?" active":""}`,to:he,preventDefault:!0,stopPropagation:!1,...Gt,children:[Kt,Wr,dt?(0,a.jsx)("div",{className:"node-right-icon",children:dt===!0?(0,a.jsx)("i",{className:"default-right-icon"}):dt}):null]}),(0,a.jsx)(h,{item:fe,children:xr({data:cr,events:l,List:h,Link:S,leftIcon:O,rightIcon:D,isHorizontal:W,isCollapsed:ee,level:J+1,parentOpen:!!Lt})})]},wt)}return(0,a.jsx)("li",{className:Bt,children:(0,a.jsxs)(S,{title:dr,className:`link${Ie?" active":""}`,to:he,...Gt,children:[Kt,Wr]})},wt)})};var vt=xr,Xt=(i,...l)=>(0,a.jsx)("div",{"v-html":i,...l}),ar=re(289),zt={};zt.styleTagTransform=R(),zt.setAttributes=_(),zt.insert=p().bind(null,"head"),zt.domAPI=g(),zt.insertStyleElement=U();var zr=c()(ar.Z,zt),yr=ar.Z&&ar.Z.locals?ar.Z.locals:void 0;const Lr=i=>(0,a.jsx)("div",{style:{padding:"6px 15px"},children:i}),lr=({activekey:i,tabs:l=[],switchTab:h,trackColor:S,flex:O},D)=>{var W;const[ee,J]=(0,q.useState)(i!=null?i:(W=l[0])==null?void 0:W.key),[ae,xe]=(0,q.useState)({}),ye=(0,q.useRef)({}),fe=(0,q.useRef)();(0,q.useEffect)(()=>{const he=ye.current[ee];he&&Ae(he)},[]);const Ae=he=>{const{left:Ze,width:Te}=ht(he),Ie=ht(fe.current).left;xe({left:Ze-Ie,width:Te})},Ne=(he,Ze)=>{he.stopPropagation(),J(Ze),typeof h=="function"&&h(Ze),Ae(he.currentTarget)};return(0,a.jsxs)("div",{className:"tabs-header-wrap",ref:D,children:[(0,a.jsx)("ul",{className:`tabs-header${O?" flex":""}`,ref:fe,children:l.map(he=>(0,a.jsx)("li",{ref:Ze=>ye.current[he.key]=Ze,className:`th-item${ee===he.key?" active":""}`,onClick:Ze=>Ne(Ze,he.key),children:typeof he.renderTabs=="function"?he.renderTabs(he,ee===he.key):Lr(he.value)},he.key))}),(0,a.jsx)("div",{className:"th-track",style:{...ae,color:S}})]})};var Br=(0,q.forwardRef)(lr),sr=(i,l,h="id",S="children")=>{if(!nt(i))return null;const O=D=>{for(let W=0,ee=D.length;W<ee;W++){const J=D[W];if(J[h]===l)return[J];if(nt(J[S])){const ae=O(J[S]);if(ae)return[J].concat(ae)}}};return O(i)};const Fr=i=>++i;var Vr=()=>{const[,i]=(0,q.useState)(0);return(0,q.useCallback)(()=>i(Fr),[])};const Zr=i=>{const{children:l,open:h}=i;let S=0;if(h&&(l==null?void 0:l.length)){S=l.length;let O=0;return l.map(D=>O+=Zr(D)),S+O}return S};var Ur=({item:i,style:l,...h})=>(0,a.jsx)("ul",{style:{...l,"--count":Zr(i)},...h}),Tr=re(435),ur={};ur.styleTagTransform=R(),ur.setAttributes=_(),ur.insert=p().bind(null,"head"),ur.domAPI=g(),ur.insertStyleElement=U();var Qr=c()(Tr.Z,ur),eo=Tr.Z&&Tr.Z.locals?Tr.Z.locals:void 0;const qr=i=>(0,a.jsx)("ul",{...i}),Xr=(i,l)=>i?Ur:({item:h,...S})=>(0,a.jsx)(qr,{className:l==="right"?"left":"",...S});var Gr=i=>{var l;const{data:h=[],collapsed:S=!1,type:O="vertical",Link:D,width:W,bgColor:ee,itemHeight:J,collapsedWidth:ae,itemPadding:xe,style:ye,className:fe,...Ae}=i,Ne=(0,q.useRef)(),he=(0,q.useRef)();(0,q.useEffect)(()=>()=>clearTimeout(Ne.current),[]);const Ze=Vr(),Te=O==="horizontal",Ie=!Te&&S,Lt={onClick:(Bt,Ft)=>{if(Bt.stopPropagation(),!Te&&!Ie){const dt=sr(h,Ft.path,"path"),Kt=dt[dt.length-1];Kt.open=!Kt.open,Ze()}},onMouseEnter:(Bt,Ft,dt)=>{Ie&&!dt&&(clearTimeout(Ne.current),he.current.style.width="var(--maxWidth)")},onMouseLeave:(Bt,Ft,dt)=>{Ie&&!dt&&(Ne.current=setTimeout(()=>he.current.style.width="",200))}},cr=(Te?["huxy-horizontal-tree",fe]:["huxy-tree",fe,Ie?"collapsed":""]).filter(Boolean).join(" "),{float:Gt,...Jt}=(l=Ae==null?void 0:Ae.style)!=null?l:{},wt={"--bgColor":ee,"--itemHeight":J,"--nodeListWidth":W,...Jt};Te?(wt["--itemPadding"]=xe,wt["--nodeFloat"]=Gt):(wt["--width"]=W,wt["--collapsedWidth"]=ae);const dr=Xr(!Te&&!Ie,Gt);return(0,a.jsx)("div",{ref:he,className:cr,style:wt,...Ae,children:(0,a.jsx)("div",{className:"huxy-tree-track",children:(0,a.jsx)("ul",{className:"huxy-tree-root",children:vt({data:h,events:Lt,List:dr,Link:D,leftIcon:!0,rightIcon:!0,isHorizontal:Te,isCollapsed:Ie})})})})}}(),y}()})},4544:function(Tt,pe,Ye){(function(_e,Se){Tt.exports=Se(Ye(7378))})(this,function(_e){return function(){"use strict";var Se={201:function(y,a,m){var c=m(703),w=m.n(c),g=m(414),E=m.n(g),p=E()(w());p.push([y.id,`@keyframes before {
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
`,""]),p.locals={},a.Z=p},982:function(y,a,m){var c=m(703),w=m.n(c),g=m(414),E=m.n(g),p=E()(w());p.push([y.id,`.Iuy_e {
  text-decoration: none;
  cursor: pointer;
  color: var(--linkColor);
  background-color: transparent;
  font-weight: 500;
  transition: color 0.3s;
}
.Iuy_e:active, .Iuy_e.D3oJg {
  color: var(--linkActiveColor, #40a9ff);
}
.Iuy_e:hover {
  color: var(--linkHoverColor, #1890ff);
}
.Iuy_e[disabled] {
  cursor: not-allowed;
  opacity: 0.7;
}
.Iuy_e[disabled]:active, .Iuy_e[disabled].D3oJg, .Iuy_e[disabled]:hover {
  color: var(--linkColor);
}
`,""]),p.locals={link:"Iuy_e",active:"D3oJg"},a.Z=p},414:function(y){y.exports=function(a){var m=[];return m.toString=function(){return this.map(function(c){var w="",g=typeof c[5]!="undefined";return c[4]&&(w+="@supports (".concat(c[4],") {")),c[2]&&(w+="@media ".concat(c[2]," {")),g&&(w+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),w+=a(c),g&&(w+="}"),c[2]&&(w+="}"),c[4]&&(w+="}"),w}).join("")},m.i=function(c,w,g,E,p){typeof c=="string"&&(c=[[null,c,void 0]]);var $={};if(g)for(var _=0;_<this.length;_++){var V=this[_][0];V!=null&&($[V]=!0)}for(var U=0;U<c.length;U++){var F=[].concat(c[U]);g&&$[F[0]]||(typeof p!="undefined"&&(typeof F[5]=="undefined"||(F[1]="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {").concat(F[1],"}")),F[5]=p),w&&(F[2]&&(F[1]="@media ".concat(F[2]," {").concat(F[1],"}")),F[2]=w),E&&(F[4]?(F[1]="@supports (".concat(F[4],") {").concat(F[1],"}"),F[4]=E):F[4]="".concat(E)),m.push(F))}},m}},703:function(y){y.exports=function(a){return a[1]}},53:function(y,a,m){var c,w=m(899),g=Symbol.for("react.element"),E=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function V(U,F,R){var Y,te={},me=null,we=null;R!==void 0&&(me=""+R),F.key!==void 0&&(me=""+F.key),F.ref!==void 0&&(we=F.ref);for(Y in F)p.call(F,Y)&&!_.hasOwnProperty(Y)&&(te[Y]=F[Y]);if(U&&U.defaultProps)for(Y in F=U.defaultProps,F)te[Y]===void 0&&(te[Y]=F[Y]);return{$$typeof:g,type:U,key:me,ref:we,props:te,_owner:$.current}}c=E,a.jsx=V,a.jsxs=V},458:function(y,a,m){y.exports=m(53)},748:function(y){var a=[];function m(g){for(var E=-1,p=0;p<a.length;p++)if(a[p].identifier===g){E=p;break}return E}function c(g,E){for(var p={},$=[],_=0;_<g.length;_++){var V=g[_],U=E.base?V[0]+E.base:V[0],F=p[U]||0,R="".concat(U," ").concat(F);p[U]=F+1;var Y=m(R),te={css:V[1],media:V[2],sourceMap:V[3],supports:V[4],layer:V[5]};if(Y!==-1)a[Y].references++,a[Y].updater(te);else{var me=w(te,E);E.byIndex=_,a.splice(_,0,{identifier:R,updater:me,references:1})}$.push(R)}return $}function w(g,E){var p=E.domAPI(E);p.update(g);var $=function(_){if(_){if(_.css===g.css&&_.media===g.media&&_.sourceMap===g.sourceMap&&_.supports===g.supports&&_.layer===g.layer)return;p.update(g=_)}else p.remove()};return $}y.exports=function(g,E){E=E||{},g=g||[];var p=c(g,E);return function($){$=$||[];for(var _=0;_<p.length;_++){var V=p[_],U=m(V);a[U].references--}for(var F=c($,E),R=0;R<p.length;R++){var Y=p[R],te=m(Y);a[te].references===0&&(a[te].updater(),a.splice(te,1))}p=F}}},736:function(y){var a={};function m(w){if(typeof a[w]=="undefined"){var g=document.querySelector(w);if(window.HTMLIFrameElement&&g instanceof window.HTMLIFrameElement)try{g=g.contentDocument.head}catch(E){g=null}a[w]=g}return a[w]}function c(w,g){var E=m(w);if(!E)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");E.appendChild(g)}y.exports=c},706:function(y){function a(m){var c=document.createElement("style");return m.setAttributes(c,m.attributes),m.insert(c,m.options),c}y.exports=a},567:function(y,a,m){function c(w){var g=m.nc;g&&w.setAttribute("nonce",g)}y.exports=c},306:function(y){function a(w,g,E){var p="";E.supports&&(p+="@supports (".concat(E.supports,") {")),E.media&&(p+="@media ".concat(E.media," {"));var $=typeof E.layer!="undefined";$&&(p+="@layer".concat(E.layer.length>0?" ".concat(E.layer):""," {")),p+=E.css,$&&(p+="}"),E.media&&(p+="}"),E.supports&&(p+="}");var _=E.sourceMap;_&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(_))))," */")),g.styleTagTransform(p,w,g.options)}function m(w){if(w.parentNode===null)return!1;w.parentNode.removeChild(w)}function c(w){var g=w.insertStyleElement(w);return{update:function(E){a(g,w,E)},remove:function(){m(g)}}}y.exports=c},62:function(y){function a(m,c){if(c.styleSheet)c.styleSheet.cssText=m;else{for(;c.firstChild;)c.removeChild(c.firstChild);c.appendChild(document.createTextNode(m))}}y.exports=a},899:function(y){y.exports=_e}},ve={};function Q(y){var a=ve[y];if(a!==void 0)return a.exports;var m=ve[y]={id:y,exports:{}};return Se[y](m,m.exports,Q),m.exports}(function(){Q.n=function(y){var a=y&&y.__esModule?function(){return y.default}:function(){return y};return Q.d(a,{a}),a}})(),function(){Q.d=function(y,a){for(var m in a)Q.o(a,m)&&!Q.o(y,m)&&Object.defineProperty(y,m,{enumerable:!0,get:a[m]})}}(),function(){Q.o=function(y,a){return Object.prototype.hasOwnProperty.call(y,a)}}(),function(){Q.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})}}(),function(){Q.nc=void 0}();var re={};return function(){Q.r(re),Q.d(re,{Link:function(){return Ar},useRoute:function(){return $r},useRouter:function(){return Vt}});var y=Q(899),a=Q.n(y),m=s=>Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),c=s=>m(s)==="array",w=s=>m(s)==="object",g=s=>(s==null?void 0:s.$$typeof)&&typeof s.$$typeof=="symbol"&&s.$$typeof.description==="react.element",E=s=>s==null?void 0:s.__v_isVNode,p=(s,f)=>Object.prototype.hasOwnProperty.call(s!=null?s:{},f);const $=s=>{if(!c(s)&&!w(s))return s;const f=c(s)?[]:{};for(const C in s)if(p(s,C)){const b=s[C];f[C]=g(b)||E(b)||typeof b!="object"?b:b!==s?$(b):"cyclic"}else Object.setPrototypeOf(f,{[C]:s[C]});return f};var _=$,V=s=>m(s)==="function",U=s=>m(s)==="promise"||w(s)&&V(s.then),F=(s,f=12e4,C="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!U(s))return{};let b=null,x=null;return{promiseFn:new Promise((L,M)=>{b=(B="canceled")=>{clearTimeout(x),L({canceled:!0,errMsg:B})},f&&(f=typeof f!="number"?12e4:f,x=setTimeout(()=>b(C),f)),s.then(B=>{clearTimeout(x),L({result:B,errMsg:!1})}).catch(B=>{clearTimeout(x),M(B)})}),cancelFn:b}},R=s=>s?s.charAt(s.length-1)==="/"?s.slice(0,-1):s:"",Y=Q(458),te=(s,f)=>(0,Y.jsx)("div",{dangerouslySetInnerHTML:{__html:s},...f}),me=s=>{const{error:f={},info:C=""}=s||{},{message:b,stack:x,errMsg:L}=f;let M=L||x||f.toString();M=`${M}
${C}`.replace(/\r|\n|\r\n/g,"<br/>"),M=M.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),M=M.replace(/\s/g,"&nbsp;");const B=b==null?void 0:b.slice(0,120).split(". ").slice(0,2).join(". ");return(0,Y.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[te(M,{style:{color:"red"}}),B&&(0,Y.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${B}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},we=()=>{const s={};return{on:(f,C)=>{s[f]||(s[f]=[]),s[f].indexOf(C)===-1&&s[f].push(C)},emit:(f,C)=>{s[f]&&s[f].map(b=>b(C))},off:(f,C=null)=>{if(s[f]){if(typeof C!="function")return s[f]=[];const b=s[f].indexOf(C);b>-1&&s[f].splice(b,1)}}}};const Xe=s=>{const f={};for(let C in s)p(s,C)||(f[C]=s[C]);return f};var it=(s,f)=>{if(!w(s))return f;if(!w(f))return s;const C={...Xe(s),...Xe(f)},b={...s,...f};return Object.keys(C).map(x=>{Object.setPrototypeOf(b,{[x]:C[x]})}),b},q=()=>{const{on:s,emit:f,off:C}=we(),b={};return{getState:x=>_(b[x]),setState:(x,L=!1)=>{if(typeof x=="function"&&(x=x(_(b))),!w(x))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const M=_(x);Object.keys(M).map(B=>{const Z=b[B],I=M[B],ce=w(I)&&w(Z)?it(Z,I):I;!L&&f(B,ce),b[B]=ce})},subscribe:(x,L)=>(s(x,L),()=>C(x,L)),unsubscribe:C,clean:x=>{typeof x=="string"?b[x]=void 0:Array.isArray(x)?x.map(L=>b[L]=void 0):Object.keys(b).map(L=>b[L]=void 0)}}},Me=s=>(f,C)=>{const[b,x]=(0,y.useState)(()=>{const Z=s==null?void 0:s.getState(f);return Z!==void 0?Z:(C!==void 0&&(s==null||s.setState({[f]:C},!0)),C)}),L=(0,y.useCallback)(Z=>s==null?void 0:s.setState({[f]:typeof Z=="function"?Z(s==null?void 0:s.getState(f)):Z}),[]),M=(0,y.useCallback)(Z=>s==null?void 0:s.subscribe(f,Z),[]),B=(0,y.useCallback)((Z=Z)=>s==null?void 0:s.clean(Z),[]);return(0,y.useEffect)(()=>{s==null||s.subscribe(f,Z=>x(Z))},[]),[b,L,M,B]};const Pe=q(),Ve=Me(Pe),Wt=we(),at=we(),ft="push-emitter",A="replace-emitter",ie="useRoute-emitter",X={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},Ce="/404",Fe={getState:()=>history.state,go:s=>history.go(s),forward:()=>history.forward(),back:()=>history.back()},Qe=(s,f,C,b,x=[])=>{const L=Z=>{for(let I=0,ce=Z.length;I<ce;I++){const ge=Z[I],de=ge[b].split("?")[0];if(new RegExp("^"+de.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return ge;if(c(ge[C])){const se=L(ge[C]);if(se)return se}}},M=L(s);if(!M)return Ce;const{redirect:B}=M;return B?x.includes(B)?x:(x.push(B),Qe(s,B.split("?")[0],C,b,x)):x[x.length-1]},Ue=(s,f,C,b,x)=>{if(!c(s))return null;const L=ce=>{const ge=ce.split("/"),de=f.split("/"),se={};return ge.map((ke,je)=>ke.indexOf(":")===0&&(se[ke.slice(1)]=de[je])),se},M=(ce,ge)=>{const de=[],se=ge.split("/:")[0];for(let ke=0,je=ce.length;ke<je;ke++){const ne=ce[ke];if(ne[x]===se){ne.active=!0;const{name:K,title:$e,icon:ze,params:Le}=ne;de.push({name:K,title:$e,icon:ze,params:Le,[x]:se})}else if(ge.indexOf(`${ne[x]}/`)===0){ne.active=!0;const K=L(ne[x]),$e=Object.keys(K).map(ut=>K[ut]).join("/"),{name:ze,title:Le,icon:We}=ne,qe=$e?`${se}/${$e}`:ne[x];de.push({name:ze,title:Le,icon:We,[x]:qe,params:{...ne.params,...K}})}else if(ne[x]===ge){ne.active=!0;const K=L(ne[x]),{[b]:$e,...ze}=ne;de.push({...ze,[x]:f,params:{...ze.params,...C,...K}})}}return de},B=(ce,ge)=>{for(let de=0,se=ce.length;de<se;de++){const ke=ce[de];if(ge.indexOf(`${ke[x]}/`)===0){ke.active=!0;return}}},Z=ce=>{for(let ge=0,de=ce.length;ge<de;ge++){const se=ce[ge],ke=(se[x]||"").split("?")[0];if(ke===f){se.hideMenu&&B(ce,se.parentPath||ke),se.active=!0;const{[b]:je,...ne}=se;return[{...ne,params:{...ne.params,...C}}]}if(new RegExp("^"+ke.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return M(ce,ke);if(c(se[b])){const je=Z(se[b]);if(je){se.active=!0,se.open=!0;const{[b]:ne,...K}=se;return[K,...je]}}}},I=Z(s)||[];return{result:s,current:I}},Ge=(s,f,C)=>s.filter(b=>b.hideMenu||b[C].indexOf("/:")>-1?!1:(c(b[f])&&(b[f]=Ge(b[f],f,C)),!0));var De=(s,f,C,b="children",x="path")=>{const L=Qe(s,f,b,x);if(L)return{redirect:L};const{result:M,current:B}=Ue(s,f,C,b,x),Z=Ge(M,b,x);return{current:B,menu:Z}},Je=s=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(s);const et=(s,f)=>{const C=["#/","/"],b=C[!!f-0];if(!s||C.includes(s))return b;const x=s.charAt(s.length-1)==="/"?s.slice(0,-1):s;return f||x.indexOf("#/")>-1?x:`#${x}`},Ot=(s,f,C,b=!1)=>{const x=et(f,C);return b?x:C?s&&x==="/"?s:`${s}${x}`:s?`${s}/${x}`:x},yt=(s,f,C,b,x,L)=>{if(!c(s))return s;const M=(B,Z="")=>B.filter(I=>!I.denied).map(I=>{if(!L&&!I.exact&&!Je(I[b])){(!I[b]||I[b]==="javascript:;")&&(I[b]="");const ce=I[b].charAt(0)==="/"&&Z.charAt(Z.length-1)==="/"?I[b].slice(1):I[b].charAt(0)!=="/"&&Z.charAt(Z.length-1)!=="/"?`/${I[b]}`:I[b];I[b]=Z?Z+ce:Ot(x,ce,f)}return I.redirect&&(I.redirect=Ot(x,I.redirect,f)),c(I[C])&&(I[C]=M(I[C],I[b]),!I.redirect&&I[C].length&&(I.redirect=I[C][0][b])),I});return M(s)};var Nt=s=>{if(!w(s))return"";const f=[];return Object.keys(s).map((C,b)=>{const x=b>0?"&":"?";f.push(`${x}${C}=${s[C]}`)}),f.join("")},kt=(s="")=>{const[f,C]=s.split("?");if(C){const b={};return C.split("&").map(x=>{const[L,M]=x.split("=");b[L]=M}),{path:f,params:b}}return{path:f}};const er=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Mt=(s,f)=>{for(let C=s.length-1,b;b=s[C--];){const{title:x,name:L}=b;if(typeof x=="string"&&x.length)return document.title=x;if((x==null||x===!0)&&L)return document.title=f?`${L}-${f}`:L;if(f)return document.title=f}},Ct=s=>{const{pathname:f,search:C,hash:b}=location;if(s){const B=et(f,s),Z=decodeURIComponent(`${B}${C}`),{params:I}=kt(Z);return{path:Z,params:I}}const x=decodeURIComponent(et(b,s)),{params:L}=kt(x),M=R(f);return{path:M?`${M}/${x}`:x,params:L}},It=(s,f,C)=>{typeof s=="function"&&s({...f,stay:new Date-C})},tt=(s,f,C,b)=>{let x,L,M;if(typeof s=="string")x=s;else if(w(s))x=s.path,L=s.params,M=s.query;else return;!x||x==="."||x==="./"?x=b:x.indexOf("./")===0?x=`${b.split("?")[0]}${x.replace("./","/")}`:x.indexOf("../")===0&&(x=`${b.split("?")[0].split("/").slice(0,-1).join("/")}${x.replace("../","/")}`),x=Ot(f,x,C,s==null?void 0:s.exact);const B=kt(x);x=B.path;const Z={...B.params,...M},I=Nt(Z);return x=`${x}${I}`,L={...L,...Z},{path:x,params:L}},tr=(s,f)=>{const C=s.split(f);return C.length>1?["","/"].includes(C[1].slice(0,1)):!1},fr=we();var lt=s=>{const{on:f,emit:C,off:b}=fr;return{on:x=>f(s,x),emit:x=>C(s,x),off:x=>b(s,x)}},Pt=s=>(f,C)=>{const{getState:b,setState:x,subscribe:L,unsubscribe:M,clean:B}=s;return C!==void 0&&x({[f]:C},!0),{getState:()=>b(f),setState:(Z,I)=>x({[f]:Z},I),subscribe:Z=>L(f,Z),unsubscribe:()=>M(f),clean:()=>B(f)}};const gt=q();var Or=Pt(gt);const rt=lt("push-emitter"),Zt=lt("replace-emitter"),jt=Or("route-store"),rr=we(),or=q(),ht=Me(or);var u=()=>![typeof window,typeof document].includes("undefined"),v=s=>{if(!u())return;const f=document.createElement("div");return f.innerHTML=s,f.children[0]},j=Object.defineProperty,T=(s,f,C)=>f in s?j(s,f,{enumerable:!0,configurable:!0,writable:!0,value:C}):s[f]=C,N=(s,f,C)=>(T(s,typeof f!="symbol"?f+"":f,C),C);class G extends a().Component{constructor(){super(...arguments),N(this,"state",{error:null})}static getDerivedStateFromError(f){return{error:f}}componentDidCatch(f,C){const{errorReport:b}=this.props;typeof b=="function"&&b({error:f,info:C.componentStack})}render(){const{error:f}=this.state,{fallback:C,children:b}=this.props;return f?C(f):b}}var ue=({children:s,report:f})=>{var C;const b=(0,y.useRef)();return(C=b.current)!=null&&C.state&&(b.current.state.error=null),(0,Y.jsx)(G,{ref:b,fallback:(x,L)=>me({error:x,info:L}),errorReport:f,children:s})},le=Q(748),oe=Q.n(le),Oe=Q(306),ot=Q.n(Oe),Et=Q(736),st=Q.n(Et),Re=Q(567),Dt=Q.n(Re),_t=Q(706),pt=Q.n(_t),bt=Q(62),mt=Q.n(bt),He=Q(201),Yt={};Yt.styleTagTransform=mt(),Yt.setAttributes=Dt(),Yt.insert=st().bind(null,"head"),Yt.domAPI=ot(),Yt.insertStyleElement=pt();var Nr=oe()(He.Z,Yt),hr=He.Z&&He.Z.locals?He.Z.locals:void 0,br=({global:s,absolute:f})=>(0,Y.jsx)("div",{className:`spinner${s?" global":""}${f?" absolute":""}`,children:(0,Y.jsx)("figure",{className:"spinning"})}),Ir=()=>{const s=(0,y.useRef)([]);return(0,y.useEffect)(()=>()=>{s.current.map(f=>f.cancelFn()),s.current=[]},[]),{cancelablePromise:(0,y.useCallback)((f,C=!0)=>{const b=F(f,C);return s.current.indexOf(b)===-1&&s.current.push(b),b.promiseFn},[])}},vr=(s={})=>{const{cancelablePromise:f}=Ir(),[C,b]=(0,y.useState)(s),x=(0,y.useRef)({}),L=(0,y.useRef)({}),M=(0,y.useCallback)((Z=null)=>{Array.isArray(Z)&&Z.length?Z.map(I=>x.current[I]=s[I]):x.current=s},[]),B=(0,y.useCallback)((Z,I,ce=!1)=>{const ge=Object.keys(Z),de=JSON.stringify(ge.sort());if(!L.current[de]){L.current[de]=!0,ce&&M(Array.isArray(ce)?ce:ge),ge.map(se=>{x.current[se]||(x.current[se]={}),x.current[se].pending=!0}),b({...x.current});for(let se=0,ke=ge.length;se<ke;se++){const je=ge[se];f(Z[je]).then(ne=>{let{result:K,errMsg:$e}=ne;se===ke-1&&(L.current[de]=!1),typeof I=="function"&&(K=I(K)||K),x.current[je]={...K,pending:!1},$e===!1&&b({...x.current})}).catch(ne=>{throw se===ke-1&&(L.current[de]=!1),x.current[je]={error:ne,pending:!1},b({...x.current}),ne})}}},[]);return[C,B,M]};const Ht=s=>Object.keys(s).length;var wr=s=>{const{Comp:f,restResolve:C,loadPromise:b,params:x,children:L}=s,[M,B]=vr(),[Z,I]=vr();return(0,y.useEffect)(()=>{Ht(C)&&B(C),Ht(b)&&I(b)},[C,b]),(0,y.useEffect)(()=>{const ce=Ht(M);ce&&ce===Ht(C)&&x.store.setState(M)},[M]),(0,Y.jsx)(f,{...x,...M,...Z,children:L})};const kr=s=>s===!1?null:g(s)?s:V(s)?(0,Y.jsx)(s,{}):(0,Y.jsx)(br,{}),Cr=({Loading:s,ErrorBoundary:f,loadedComp:C})=>{const b=(0,Y.jsx)(y.Suspense,{fallback:kr(s),children:C});return f===!1?b:V(f)?(0,Y.jsx)(f,{children:b}):(0,Y.jsx)(ue,{children:b})};var jr=({Comp:s,routerProps:f,children:C})=>{const{params:b,...x}=f,{loading:L,errorBoundary:M,...B}=b,Z=(0,Y.jsx)(wr,{Comp:s,...x,params:B,children:C});return Cr({Loading:L,ErrorBoundary:M,loadedComp:Z})};const pr={},At=(s,f,C,b)=>U(C)?C.then(x=>{var L;return jr({Comp:s,routerProps:f,children:(L=x.default)!=null?L:x})}):jr({Comp:s,routerProps:f,children:C}),Pr=(s,f,C)=>{const b={},x={};return w(s)?(Object.keys(s).map(L=>{const M=f.getState(L);M==null?x[L]=s[L](C):b[L]=M}),{cachedResolve:b,restResolve:x}):{cachedResolve:b,restResolve:x}},Dr=(s,f)=>{if(!w(s))return{};const C={};return Object.keys(s).map(b=>C[b]=s[b](f)),C};var _r=s=>{const{current:f,menu:C,...b}=s,x=f.map(B=>{const{component:Z,resolve:I,loadData:ce,loading:ge,errorBoundary:de,icon:se,...ke}=B;return ke}),L=[...f].filter(B=>B.component),M=(B=0)=>{if(!L.length)return null;const Z=L.shift(),{component:I,resolve:ce,loadData:ge,icon:de,key:se,...ke}=Z;if(typeof I=="function"||U(I)){const je=ke.path;let ne=pr[je];const{cachedResolve:K,restResolve:$e}=Pr(ce,b.store,ke),ze={loadPromise:Dr(ge,ke),restResolve:$e,params:{current:x,...b,...ke,...K}},Le=M(B+1);if(ne)return At(ne,ze,Le,je);try{ne=I(),ne=g(ne)?I:ne}catch(We){ne=I}return U(ne)?ne.then(We=>{var qe;return ne=(qe=We.default)!=null?qe:We,pr[je]=ne,At(ne,ze,Le,je)}):(pr[je]=ne,At(ne,ze,Le,je))}return typeof I=="string"?v(I):I};return M()},Vt=s=>{const[f,C]=(0,y.useState)(s),[b,x]=(0,y.useState)(),[L,M]=(0,y.useState)(),B=(0,y.useRef)(),Z=(0,y.useRef)(),I=(0,y.useRef)(),ce=(0,y.useRef)(),ge=()=>{typeof B.current=="function"&&(B.current({cancel:X.cancelMsg}),B.current=null)},de=(0,y.useCallback)(K=>{typeof K=="function"?C($e=>({...$e,...K($e)})):w(K)&&C($e=>({...$e,...K}))},[]),se=(K,$e="pushState")=>{const{basepath:ze,browserRouter:Le}=ce.current,We=I.current,{path:qe,params:ut}=tt(K,ze,Le,We);qe!==We&&ne({inputPath:qe,inputParams:ut},()=>history[$e](K==null?void 0:K.state,"",qe))},ke=(0,y.useCallback)(K=>se(K),[]),je=(0,y.useCallback)(K=>se(K,"replaceState"),[]),ne=(0,y.useCallback)(({inputPath:K="",inputParams:$e={}},ze)=>{const Le=+new Date,{browserRouter:We,childKey:qe,idKey:ut,title:ct,routers:ir,beforeRender:qt,afterRender:$t,basepath:Rt,allowedNotFound:nt,...Rr}=ce.current;if(!K){const{path:Ke,params:xt}=Ct(We);K=Ke,$e={...$e,...xt}}new Promise((Ke,xt)=>{ir!=null&&ir.length||xt("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),K!==I.current&&typeof qt=="function"?qt({path:K,params:$e,prevPath:I.current},Ke,xt):Ke()}).then(Ke=>{var xt,mr;if(Ke===!1)return;const xr=Ke==null?void 0:Ke.path;if(xr&&Ot(Rt,xr,We)!==K){je(Ke);return}Z.current=(xt=Z.current)!=null?xt:K;const{redirect:vt,current:Xt,menu:ar}=De(_(ir),K.split("?")[0],$e,qe,ut);if(vt){if(nt&&vt===Ce&&(typeof nt=="boolean"||typeof nt=="string"&&tr(Z.current,nt)||c(nt)&&nt.find(yr=>tr(Z.current,yr))))return;if(c(vt)){console.error(`\u522B\u95F9\uFF0C[${[K,...vt].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return vt===Ce?je({path:vt}):ke({path:vt,exact:!0})}ze==null||ze(),(K==null?void 0:K.split("?")[0])!==((mr=I.current)==null?void 0:mr.split("?")[0])&&er(),Mt(Xt,ct);const zt={eventBus:rr,store:or,useStore:ht,...Rr,updateRouter:de,emitRouter:jt.subscribe,router:{push:ke,replace:je},current:Xt,menu:ar,inputPath:Z.current,prevPath:I.current,basepath:Rt,title:ct,history:Fe};jt.setState({...zt,browserRouter:We});const zr=_r(zt);if(I.current=K,Z.current=null,ge(),U(zr)){const{promiseFn:yr,cancelFn:Lr}=F(zr,{delay:X.delay,msg:{timeout:X.timeoutMsg}});return B.current=Lr,M(!0),yr.then(lr=>{B.current=null;const{result:Br,errMsg:sr}=lr,Fr=sr===!1?Br:sr!=null&&sr.timeout?me({error:{errMsg:`${K} ${sr.timeout}`}}):null;Fr&&(M(!1),It($t,Xt.slice(-1)[0],Le),x(Fr))}).catch(lr=>{throw B.current=null,M(!1),It($t,Xt.slice(-1)[0],Le),x(me({error:lr})),lr})}It($t,Xt.slice(-1)[0],Le),x(zr)}).catch(Ke=>{throw x(me({error:Ke})),Ke})},[]);return(0,y.useEffect)(()=>{const{childKey:K="children",idKey:$e="path",browserRouter:ze=!1,routers:Le=[],basepath:We="",exact:qe=!1,inputPath:ut="",inputParams:ct={},...ir}=f,qt=R(We),$t=yt(_(Le),ze,K,$e,qt,qe);ce.current={...ir,childKey:K,idKey:$e,browserRouter:ze,routers:$t,basepath:qt};const Rt=ze?"popstate":"hashchange",nt=()=>ne({});return ne({inputPath:ut,inputParams:ct}),rt.on(ke),Zt.on(je),window.addEventListener(Rt,nt,!1),()=>{ge(),rt.off(ke),Zt.off(je),window.removeEventListener(Rt,nt,!1)}},[f]),{updateRouter:de,output:b,loading:L}},Er=s=>{const{to:f,onClick:C,preventDefault:b,stopPropagation:x=!0,exact:L=!0,target:M,...B}=s,Z=()=>{const I=typeof f=="string"?{exact:L,path:f}:{exact:L,...f};rt.emit(I)};return I=>{var ce;if(I.preventDefault(),x&&I.stopPropagation(),!(B!=null&&B.disabled)){if(!b){if(M){const{browserRouter:ge}=jt.getState(),de=typeof f=="string"?f:(ce=f==null?void 0:f.path)!=null?ce:"",se=Nt(f==null?void 0:f.query),ke=ge||de.indexOf("#/")>-1||Je(de);window==null||window.open(`${ke?"":"#"}${de}${se}`,M);return}Z()}typeof C=="function"&&C()}}},Ut=Q(982),St={};St.styleTagTransform=mt(),St.setAttributes=Dt(),St.insert=st().bind(null,"head"),St.domAPI=ot(),St.insertStyleElement=pt();var Mr=oe()(Ut.Z,St),nr=Ut.Z&&Ut.Z.locals?Ut.Z.locals:void 0;const Sr=s=>{if(!s)return nr.link;const f=s.trim().split(" ").filter(Boolean),C=f.find(b=>b==="active")?[nr.active]:[];return[nr.link,...C,...f].join(" ")};var Ar=s=>{const{to:f,onClick:C,preventDefault:b,stopPropagation:x,exact:L,target:M,className:B,...Z}=s;return(0,Y.jsx)("span",{onClick:Er(s),className:Sr(B),...Z})},$r=()=>{const[s,f]=(0,y.useState)(jt.getState());return(0,y.useEffect)(()=>jt.subscribe(C=>f(C)),[]),s}}(),re}()})},2445:function(Tt,pe,Ye){(function(_e,Se){Tt.exports=Se(Ye(7378))})(this,function(_e){return function(){"use strict";var Se={53:function(y,a,m){var c,w=m(899),g=Symbol.for("react.element"),E=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function V(U,F,R){var Y,te={},me=null,we=null;R!==void 0&&(me=""+R),F.key!==void 0&&(me=""+F.key),F.ref!==void 0&&(we=F.ref);for(Y in F)p.call(F,Y)&&!_.hasOwnProperty(Y)&&(te[Y]=F[Y]);if(U&&U.defaultProps)for(Y in F=U.defaultProps,F)te[Y]===void 0&&(te[Y]=F[Y]);return{$$typeof:g,type:U,key:me,ref:we,props:te,_owner:$.current}}c=E,a.jsx=V,c=V},458:function(y,a,m){y.exports=m(53)},899:function(y){y.exports=_e}},ve={};function Q(y){var a=ve[y];if(a!==void 0)return a.exports;var m=ve[y]={exports:{}};return Se[y](m,m.exports,Q),m.exports}(function(){Q.d=function(y,a){for(var m in a)Q.o(a,m)&&!Q.o(y,m)&&Object.defineProperty(y,m,{enumerable:!0,get:a[m]})}})(),function(){Q.o=function(y,a){return Object.prototype.hasOwnProperty.call(y,a)}}(),function(){Q.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})}}();var re={};return function(){Q.r(re),Q.d(re,{createContainer:function(){return a},useAsync:function(){return $},useCancelablePromise:function(){return p},useClickAway:function(){return U},useDebounce:function(){return R},useDelayState:function(){return me},useEleResize:function(){return Ve},useEvent:function(){return Wt},useFirstMounted:function(){return Y},useInterval:function(){return at},usePrevious:function(){return ft},useRaf:function(){return Pe},useScroll:function(){return ie},useSearch:function(){return kt},useStateFromProps:function(){return er},useStore:function(){return fr},useTime:function(){return jt},useUpdate:function(){return or},useUpdateEffect:function(){return te},useWinResize:function(){return ht}});var y=Q(899),a=u=>(v,j)=>{const[T,N]=(0,y.useState)(()=>{const oe=u==null?void 0:u.getState(v);return oe!==void 0?oe:(j!==void 0&&(u==null||u.setState({[v]:j},!0)),j)}),G=(0,y.useCallback)(oe=>u==null?void 0:u.setState({[v]:typeof oe=="function"?oe(u==null?void 0:u.getState(v)):oe}),[]),ue=(0,y.useCallback)(oe=>u==null?void 0:u.subscribe(v,oe),[]),le=(0,y.useCallback)((oe=oe)=>u==null?void 0:u.clean(oe),[]);return(0,y.useEffect)(()=>{u==null||u.subscribe(v,oe=>N(oe))},[]),[T,G,ue,le]},m=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),c=u=>m(u)==="object",w=u=>m(u)==="function",g=u=>m(u)==="promise"||c(u)&&w(u.then),E=(u,v=12e4,j="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!g(u))return{};let T=null,N=null;return{promiseFn:new Promise((G,ue)=>{T=(le="canceled")=>{clearTimeout(N),G({canceled:!0,errMsg:le})},v&&(v=typeof v!="number"?12e4:v,N=setTimeout(()=>T(j),v)),u.then(le=>{clearTimeout(N),G({result:le,errMsg:!1})}).catch(le=>{clearTimeout(N),ue(le)})}),cancelFn:T}},p=()=>{const u=(0,y.useRef)([]);return(0,y.useEffect)(()=>()=>{u.current.map(v=>v.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,y.useCallback)((v,j=!0)=>{const T=E(v,j);return u.current.indexOf(T)===-1&&u.current.push(T),T.promiseFn},[])}},$=(u={})=>{const{cancelablePromise:v}=p(),[j,T]=(0,y.useState)(u),N=(0,y.useRef)({}),G=(0,y.useRef)({}),ue=(0,y.useCallback)((oe=null)=>{Array.isArray(oe)&&oe.length?oe.map(Oe=>N.current[Oe]=u[Oe]):N.current=u},[]),le=(0,y.useCallback)((oe,Oe,ot=!1)=>{const Et=Object.keys(oe),st=JSON.stringify(Et.sort());if(!G.current[st]){G.current[st]=!0,ot&&ue(Array.isArray(ot)?ot:Et),Et.map(Re=>{N.current[Re]||(N.current[Re]={}),N.current[Re].pending=!0}),T({...N.current});for(let Re=0,Dt=Et.length;Re<Dt;Re++){const _t=Et[Re];v(oe[_t]).then(pt=>{let{result:bt,errMsg:mt}=pt;Re===Dt-1&&(G.current[st]=!1),typeof Oe=="function"&&(bt=Oe(bt)||bt),N.current[_t]={...bt,pending:!1},mt===!1&&T({...N.current})}).catch(pt=>{throw Re===Dt-1&&(G.current[st]=!1),N.current[_t]={error:pt,pending:!1},T({...N.current}),pt})}}},[]);return[j,le,ue]},_=(u,v)=>Object.prototype.hasOwnProperty.call(u!=null?u:{},v),V=u=>_(u,"current"),U=(u,v,j="click")=>{(0,y.useEffect)(()=>{const T=G=>{const ue=V(u)?u.current:u;(ue==null?void 0:ue.contains)&&!ue.contains(G.target)&&v(G)},N=typeof j=="string"?[j]:j;return N.map(G=>{document.addEventListener(G,T,!1)}),()=>{N.map(G=>{document.removeEventListener(G,T,!1)})}},[u,v,j])},F=(u=()=>{},v=60)=>{let j=null;return function(...T){clearTimeout(j),j=setTimeout(()=>u.apply(this,T),v)}},R=(u,v=60)=>(0,y.useMemo)(()=>F(u,v),[v]),Y=()=>{const u=(0,y.useRef)(!0);return u.current?(u.current=!1,!0):!1},te=(u,v=[])=>{const j=Y();(0,y.useEffect)(()=>{if(!j)return u()},v)},me=(u,v=450)=>{const[j,T]=(0,y.useState)(u);return te(()=>{let N;return u||v===0?T(u):N=setTimeout(()=>T(u),v),()=>N&&clearTimeout(N)},[u]),[j,T]},we=()=>![typeof window,typeof document].includes("undefined"),Xe=u=>m(u).indexOf("element")>-1,it=(u=null)=>{var v,j;return we()?Xe(u)?{width:u.clientWidth,height:u.clientHeight}:{width:(v=window.innerWidth)!=null?v:document.documentElement.clientWidth,height:(j=window.innerHeight)!=null?j:document.documentElement.clientHeight}:{width:0,height:0}};const q=(u,v)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const j=document.createElement("object");return j.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),j.setAttribute("class","resize-sensor"),j.onload=()=>{j.contentDocument.defaultView.addEventListener("resize",v,!1),v()},j.type="text/html",u.appendChild(j),j.data="about:blank",j};var Me=(u,v=60)=>{if(!we())return;u=V(u)?u.current:u!=null?u:document.body;let j,T=[];const N=F(()=>T.map(oe=>oe(u)),v),G=oe=>{j||(j=q(u,N)),T.indexOf(oe)===-1&&T.push(oe)},ue=oe=>{const Oe=T.indexOf(oe);Oe!==-1&&T.splice(Oe,1),T.length===0&&j&&le()},le=()=>{j&&j.parentNode&&(j.contentDocument&&j.contentDocument.defaultView.removeEventListener("resize",N,!1),j.parentNode.removeChild(j),j=void 0,T=[])};return{element:u,bind:G,unbind:ue,destroy:le}},Pe=(u={})=>{const v=(0,y.useRef)(0),[j,T]=(0,y.useState)(u),N=(0,y.useCallback)(G=>{cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>T(G))},[]);return(0,y.useEffect)(()=>()=>cancelAnimationFrame(v.current),[]),[j,N]},Ve=(u=null,v=60)=>{const j=V(u)?u.current:u,{bind:T,destroy:N}=Me(j,v),[G,ue]=Pe(it(j));return(0,y.useEffect)(()=>(T(()=>j&&ue(it(j))),()=>N()),[j]),G},Wt=u=>{const v=(0,y.useRef)(null);return(0,y.useLayoutEffect)(()=>{v.current=u}),(0,y.useCallback)(v.current,[])},at=(u,v)=>{const j=(0,y.useRef)();(0,y.useEffect)(()=>{j.current=u},[u]),(0,y.useEffect)(()=>{if(v){const T=setInterval(()=>j.current(),v);return()=>clearInterval(T)}},[v])},ft=u=>{const v=(0,y.useRef)();return(0,y.useEffect)(()=>{v.current=u},[u]),v.current},A=(u=null)=>{var v,j,T,N;return we()?Xe(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:(j=(v=window.pageXOffset)!=null?v:document.documentElement.scrollLeft)!=null?j:document.body.scrollLeft,top:(N=(T=window.pageYOffset)!=null?T:document.documentElement.scrollTop)!=null?N:document.body.scrollTop}:{left:0,top:0}},ie=(u=null)=>{const[v,j]=Pe(A(u));return(0,y.useEffect)(()=>{const T=()=>j(A(u)),N=Xe(u)?u:window;return N.addEventListener("scroll",T,{capture:!1,passive:!0}),()=>N.removeEventListener("scroll",T)},[u]),v},X=u=>m(u)==="array",Ce=u=>X(u)&&!!u.length,Fe=(u,v,j=[],T=!1,N=null)=>Ce(u)?v?(j=typeof j=="string"?j.split(","):j,u.filter(G=>(j=j.length>0?j:Object.keys(G),j.filter(ue=>{const le=G[ue];if(le==null)return!1;if(T)return le===v;const oe=new RegExp(v,"gi"),Oe=le.toString().match(oe);return Oe&&N&&(G[ue]=N(le.toString().replace(oe,`<span style="background-color:yellow">${Oe[0]}</span>`),{display:"inline-block"})),Oe}).length))):u:[],Qe=(u,v="id")=>{if(!Ce(u))return u;const j=[],T=[];return u.map(N=>{const G=c(N)?N[v]:N;T.includes(G)||(T.push(G),j.push(N))}),j},Ue=u=>(u==null?void 0:u.$$typeof)&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",Ge=u=>u==null?void 0:u.__v_isVNode;const De=u=>{if(!X(u)&&!c(u))return u;const v=X(u)?[]:{};for(const j in u)if(_(u,j)){const T=u[j];v[j]=Ue(T)||Ge(T)||typeof T!="object"?T:T!==u?De(T):"cyclic"}else Object.setPrototypeOf(v,{[j]:u[j]});return v};var Je=De;const et=u=>(v,j="children")=>{if(!Array.isArray(v))return v;const T=Je(v),N=G=>{const ue=[];return G.map(le=>{if(Ce(le[j])){const oe=N(le[j])||[];le[j]=oe,oe.length>0&&ue.push(le)}}),u(G,ue)};return N(T)};var Ot=(u,v,j,T="name",N="id",G="children",ue=!1)=>et((le,oe)=>Qe([...Fe(le,v,T,ue,j),...oe],N))(u,G),yt=Q(458),Nt=(u,v)=>(0,yt.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...v}),kt=(u=null,v=Nt)=>{const[j,T]=(0,y.useState)(u),N=(0,y.useCallback)((...G)=>{const[ue,le,...oe]=G;if(!le)T(null);else{G=[ue,le,v,...oe];const Oe=Ot(...G);T(Oe)}},[]);return[j,N]},er=u=>{const[v,j]=(0,y.useState)(u);return(0,y.useEffect)(()=>j(u),[u]),[v,j]},Mt=()=>{const u={};return{on:(v,j)=>{u[v]||(u[v]=[]),u[v].indexOf(j)===-1&&u[v].push(j)},emit:(v,j)=>{u[v]&&u[v].map(T=>T(j))},off:(v,j=null)=>{if(u[v]){if(typeof j!="function")return u[v]=[];const T=u[v].indexOf(j);T>-1&&u[v].splice(T,1)}}}};const Ct=u=>{const v={};for(let j in u)_(u,j)||(v[j]=u[j]);return v};var It=(u,v)=>{if(!c(u))return v;if(!c(v))return u;const j={...Ct(u),...Ct(v)},T={...u,...v};return Object.keys(j).map(N=>{Object.setPrototypeOf(T,{[N]:j[N]})}),T},tt=()=>{const{on:u,emit:v,off:j}=Mt(),T={};return{getState:N=>Je(T[N]),setState:(N,G=!1)=>{if(typeof N=="function"&&(N=N(Je(T))),!c(N))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const ue=Je(N);Object.keys(ue).map(le=>{const oe=T[le],Oe=ue[le],ot=c(Oe)&&c(oe)?It(oe,Oe):Oe;!G&&v(le,ot),T[le]=ot})},subscribe:(N,G)=>(u(N,G),()=>j(N,G)),unsubscribe:j,clean:N=>{typeof N=="string"?T[N]=void 0:Array.isArray(N)?N.map(G=>T[G]=void 0):Object.keys(T).map(G=>T[G]=void 0)}}};const tr=tt();var fr=a(tr);const lt=u=>u<10?"0"+u:u;var Pt=(u=new Date)=>{const v=new Date(u),j=v.getFullYear(),T=v.getDay(),N=lt(v.getMonth()+1),G=lt(v.getDate()),ue=lt(v.getHours()),le=lt(v.getMinutes()),oe=lt(v.getSeconds());return[j,N,G,ue,le,oe,T]};const gt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Or=(u,v,j="-")=>u.replace(new RegExp(j,"g"),v);var rt=(u=new Date,v=["-","-"," ",":",":",""],j=gt)=>{const T=Pt(u);let N="";return v.map((G,ue)=>{var le;return N+=(ue===6?j[T[ue]]:(le=T[ue])!=null?le:"")+G}),N};const Zt=()=>rt(new Date,["-","-"," ",":",":"," ",""]);var jt=()=>{const[u,v]=(0,y.useState)("");return at(()=>{v(Zt())},1e3),[u]};const rr=u=>++u;var or=()=>{const[,u]=(0,y.useState)(0);return(0,y.useCallback)(()=>u(rr),[])},ht=()=>{const[u,v]=Pe(it());return(0,y.useEffect)(()=>{const j=()=>v(it());return window.addEventListener("resize",j,!1),()=>window.removeEventListener("resize",j,!1)},[]),u}}(),re}()})},5820:function(Tt){(function(pe,Ye){Tt.exports=Ye()})(this,function(){return function(){"use strict";var pe={};(function(){pe.d=function(e,t){for(var r in t)pe.o(t,r)&&!pe.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){pe.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){pe.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();var Ye={};pe.r(Ye),pe.d(Ye,{a2o:function(){return _e},addAtNext:function(){return re},addAtPos:function(){return y},addClass:function(){return m},addDays:function(){return c},addHours:function(){return w},addMonths:function(){return g},addNodes:function(){return E},addScript:function(){return $},addStyle:function(){return _},addYears:function(){return V},arr2Tree:function(){return we},arr2TreeById:function(){return Xe},arr2TreeByPath:function(){return it},arr2obj:function(){return U},arr2str:function(){return me},backTop:function(){return ie},base2Ten:function(){return X},baseConversion:function(){return Fe},baseFetch:function(){return yt},cacheData:function(){return tr},cancelablePromise:function(){return Je},changePos:function(){return fr},classifyArr:function(){return lt},clone:function(){return tt},compareVersion:function(){return Pt},compose:function(){return gt},copyToClipboard:function(){return Or},createContainer:function(){return rt},createElement:function(){return jt},createNode:function(){return T},createStore:function(){return le},createTextElement:function(){return Zt},curry:function(){return oe},cyclic:function(){return Nt},dash2camel:function(){return Oe},debounce:function(){return ot},deleteNodes:function(){return Et},deviceType:function(){return st},dlfile:function(){return _t},dropInfo:function(){return kr},editNodes:function(){return Cr},emitter:function(){return N},equal:function(){return er},escapeHTML:function(){return jr},eventBus:function(){return At},fetcher:function(){return _r},filter:function(){return Er},filterList:function(){return Mr},findMax:function(){return nr},firstUpper:function(){return Sr},fixFileSizeUnit:function(){return Ar},fixPath:function(){return $r},fixRoute:function(){return s},fixSize:function(){return f},fixTimeUnit:function(){return C},flatten:function(){return x},formatNum:function(){return L},formatPassTime:function(){return Z},formatTime:function(){return ge},fullScreen:function(){return K},getElementsSize:function(){return br},getExplore:function(){return ze},getLeaveTime:function(){return ut},getMeta:function(){return qt},getMonthDays:function(){return $t},getOffset:function(){return Rt},getOsInfo:function(){return Rr},getParams:function(){return Ke},getPosition:function(){return bt},getRelative:function(){return xr},getSelected:function(){return vt},getTextSize:function(){return Xt},getTime:function(){return B},getTouchPosition:function(){return mr},getType:function(){return Se},getValue:function(){return zr},getViewportSize:function(){return pt},hasClass:function(){return yr},hasProp:function(){return Me},hex2rgba:function(){return Lr},imgtocanvas:function(){return lr},isArray:function(){return ve},isAsync:function(){return De},isBrowser:function(){return p},isDate:function(){return Br},isElement:function(){return a},isError:function(){return sr},isFunction:function(){return Ge},isIE:function(){return Fr},isObject:function(){return F},isReactComp:function(){return Vr},isReactEle:function(){return Mt},isRef:function(){return Pe},isRegExp:function(){return Zr},isTouch:function(){return xt},isUrl:function(){return Ur},isValidArr:function(){return Vt},isValidObj:function(){return Tr},isVueEle:function(){return Ct},json2str:function(){return ur},loadBase64:function(){return Qr},loadImage:function(){return eo},loop:function(){return qr},matchedStr:function(){return Xr},memoize:function(){return Gr},merge:function(){return O},mergeArr:function(){return l},mergeClass:function(){return D},mergeObj:function(){return S},mergeOwnProp:function(){return ue},message:function(){return fe},monthDate:function(){return Ae},moveNodes:function(){return Ne},obj2arr:function(){return he},obj2str:function(){return Y},omit:function(){return Ze},once:function(){return Te},padStart:function(){return Ie},params2data:function(){return Ue},params2str:function(){return Qe},pick:function(){return Lt},promisify:function(){return cr},randColor:function(){return Gt},randItem:function(){return wt},randNum:function(){return Jt},randPercent:function(){return dr},randStr:function(){return Bt},randTrue:function(){return Ft},removeClass:function(){return W},resize:function(){return Kt},rgba2hex:function(){return Jr},rmUnit:function(){return Kr},scheduler:function(){return ao},scrollIsBottom:function(){return lo},scrollTo:function(){return Ve},scrollToAnchor:function(){return so},scrollTop:function(){return q},selectedHandle:function(){return Q},session:function(){return uo},setMeta:function(){return co},setStyle:function(){return He},sleep:function(){return hr},sleepSync:function(){return Nr},sort:function(){return fo},sortObj:function(){return ho},storage:function(){return po},store:function(){return xo},str2Html:function(){return mt},str2code:function(){return yo},sysLang:function(){return go},template:function(){return bo},ten2Base:function(){return Ce},throttle:function(){return vo},timeGap:function(){return jo},timeInterval:function(){return ro},timestamp:function(){return Re},toggleClass:function(){return Eo},traverItem:function(){return b},traverList:function(){return So},unescapeHTML:function(){return $o},unique:function(){return Ut},updateId:function(){return zo},updateNode:function(){return j},updateTreeNodes:function(){return Fo},uuidv4:function(){return Dt},validObj:function(){return To},watchScreen:function(){return Oo},watermark:function(){return No},weekDate:function(){return Io},wrapPromise:function(){return Po}});var _e=(e,t="key",r="value")=>{const o={};return(e||[]).map(n=>o[n[t]]=n[r]),o},Se=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),ve=e=>Se(e)==="array",Q=e=>(t,r,o="id",n="children")=>{if(!ve(t))return null;const d=(k,z="")=>{for(let P=0,H=k.length;P<H;P++){const be=k[P];if(be[o]===r)return e(k,P,z)||k[P];if(ve(be[n])){const Ee=d(be[n],be[o]);if(Ee)return Ee}}};return d(t),t},re=(e,t,r,o="id",n="children")=>Q((d,k)=>d.splice(k,0,r))(e,t,o,n),y=(e,t,r,o,n="id",d="children")=>Q((k,z)=>{const P=k[z];P.children?P.children.splice(o,0,r):P.children=[r]})(e,t,n,d),a=e=>Se(e).indexOf("element")>-1,m=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),n=[...new Set([...r,...o])];e.className=n.join(" ")},c=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},w=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},g=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},E=(e,t,r,o="id",n="children")=>Q((d,k)=>{const z=d[k];return z[n]=[...z[n]||[],...r],z})(e,t,o,n),p=()=>![typeof window,typeof document].includes("undefined"),$=e=>{if(p())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},_=(e,t)=>{if(p())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===t))r();else{const n=document.createElement("style");n.onerror=d=>o(new Error(`Failed to load '${t}' style`)),n.onload=r,n.innerHTML=e,n.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===e))r();else{const n=document.createElement("link");n.onerror=d=>o(new Error(`Failed to load '${e}'`)),n.onload=r,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},V=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},U=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:n})=>r[o]=n),r},F=e=>Se(e)==="object";const R=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,F(o)?t+=`${r}=${R(o)}`:Array.isArray(o)?t+=`${r}=${me(o)}`:t+=`${r}=${o}`}),`{${t}}`};var Y=R;const te=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,F(r)?t+=Y(r):Array.isArray(r)?t+=te(r):t+=`${r}`}),`[${t}]`};var me=te,we=e=>(t,r="id",o="children",n=-1)=>{if(!ve(t))return t;const d={},k=t.map(z=>z[r]);return[...t].map(z=>{var P;const H={...z},{[r]:be}=H;if(be!=null){let{parentId:Ee}=H;Ee==null&&(Ee=(P=e==null?void 0:e(H))!=null?P:n,H.parentId=Ee),d[be]||(d[be]=[]),H[o]=d[be],d[Ee]||(d[Ee]=[]),d[n]||(d[n]=[]),k.includes(Ee)?d[Ee].push(H):d[n].push(H)}}),d[n]},Xe=(e,t="id",r="children",o=-1)=>we(n=>{const d=n[t].match(/\S+(?=-\S+)/);return(d==null?void 0:d[0])||o})(e,t,r,o),it=(e,t="path",r="children",o=null)=>we(n=>{var d,k,z,P;const H=n[t],be=H.match(/.*\/[^:/]+\/:[^/]+/);return be?(k=(d=be[0].match(/(.*)\/:+/))==null?void 0:d[1])!=null?k:o:(P=(z=H.match(/(.*)\/+/))==null?void 0:z[1])!=null?P:o})(e,t,r,o),q=()=>{var e,t;return p()&&((t=(e=window.pageYOffset)!=null?e:document.documentElement.scrollTop)!=null?t:document.body.scrollTop)},Me=(e,t)=>Object.prototype.hasOwnProperty.call(e!=null?e:{},t),Pe=e=>Me(e,"current"),Ve=(e=0,t)=>{var r;!p()||(t=Pe(t)?t.current:t!=null?t:window,(r=t.scrollTo)==null||r.call(t,{top:e,behavior:"smooth"}))},Wt=`.huxy-totop-bar {
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
}`;const at=()=>document.getElementsByClassName("huxy-totop-bar")[0],ft=e=>{if(at())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>Ve(),!1),t},A=()=>{const e=at();e&&document.body.removeChild(e)};var ie=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!p())return;_(Wt,"huxy-backtop-css");const r=()=>{q()>e?ft(t):A()};return(()=>(document.addEventListener("scroll",r,!1),()=>{A(),document.removeEventListener("scroll",r,!1)}))()},X=(e=0,t=2)=>parseInt(String(e),t),Ce=(e=0,t=2)=>Number(e).toString(t),Fe=(e=0,t=2,r=16)=>Ce(X(e,t),r),Qe=e=>{if(!F(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const n=o>0?"&":"?";t.push(`${n}${r}=${e[r]}`)}),t.join("")},Ue=e=>{if(!F(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},Ge=e=>Se(e)==="function",De=e=>Se(e)==="promise"||F(e)&&Ge(e.then),Je=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!De(e))return{};let o=null,n=null;return{promiseFn:new Promise((d,k)=>{o=(z="canceled")=>{clearTimeout(n),d({canceled:!0,errMsg:z})},t&&(t=typeof t!="number"?12e4:t,n=setTimeout(()=>o(r),t)),e.then(z=>{clearTimeout(n),d({result:z,errMsg:!1})}).catch(z=>{clearTimeout(n),k(z)})}),cancelFn:o}};const et=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>Ue(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>Qe(e).slice(1)}],Ot=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(n=>e[n]);if(o.length===1){const n=o[0],d=r?t:n;return d==="params"?{query:e[n]}:{result:e[n],type:d}}else if(o.length>1){const n=o.filter(k=>k!=="params").slice(-1)[0],d=r?t:n;return d==="params"?{query:e.params||e[n]}:{query:e.params,result:e[n],type:d}}};var yt=(e,t)=>r=>(o,n={})=>{const{headers:d,dataType:k,data:z,formData:P,form:H,params:be,...Ee}=n,Be={data:z,formData:P,form:H,params:be};let gr;const{query:Qt,result:oo,type:Do}=Ot(Be,k)||{};if(!Ee.body&&oo){const Yr=et.find(Hr=>Hr.type===Do);gr=Yr.headers,Ee.body=Yr.body(oo)}Qt&&(o=`${o}${Qe(Qt)}`);const{promiseFn:_o}=Je(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...gr,...d},...Ee}),t);return _o.then(({result:Yr,errMsg:Hr})=>e(Hr?{status:408,statusText:Hr}:Yr))},Nt=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let n=!1;for(let d in o)Me(o,d)&&r(o[d])&&(o[d]="cyclic",n=!0);return n}return!1};return r(e)&&e};const kt=(e,t)=>{const r=Se(e),o=Se(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(Nt(e)&&Nt(t))return kt(e,t);for(let n in t)if(Me(e,n)!==Me(t,n)||!kt(e[n],t[n]))return!1;return!0};var er=kt,Mt=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",Ct=e=>e==null?void 0:e.__v_isVNode;const It=e=>{if(!ve(e)&&!F(e))return e;const t=ve(e)?[]:{};for(const r in e)if(Me(e,r)){const o=e[r];t[r]=Mt(o)||Ct(o)||typeof o!="object"?o:o!==e?It(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var tt=It,tr=(e=100)=>{const t=[];let r=-1;const o=d=>{var k,z;const P=t.length,H=tt(d);return er(H,(k=t[P-1])==null?void 0:k.data)?{index:r,length:P,data:(z=t[r])==null?void 0:z.data}:(t.push({data:H}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},n=(d=0)=>{var k;const z=t.length;return r+=d,r=r<0?0:r>z-1?z-1:r,{index:r,length:z,data:tt((k=t[r])==null?void 0:k.data)}};return{record:o,cursor:n,jump:d=>{var k;return r=d,{index:r,length:t.length,data:tt((k=t[r])==null?void 0:k.data)}},undo:()=>n(-1),redo:()=>n(1),getList:()=>tt(t),clean:()=>{t.length=0,r=-1}}},fr=(e,t,r)=>{if(!ve(e))return e;const o=e[t],n=e[r];return e.splice(t,1,n),e.splice(r,1,o),e},lt=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},Pt=(e,t,r=".")=>{const o=(P,H)=>P.split(H),n=o(e,r),d=o(t,r),k=n.length;let z=0;for(let P=0;P<k;P++)if(n[P]<d[P]){z=k-P;break}return z},gt=(...e)=>(...t)=>{const[...r]=e,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...t)},Or=e=>{if(!p())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},rt=e=>(t,r)=>{const{getState:o,setState:n,subscribe:d,unsubscribe:k,clean:z}=e;return r!==void 0&&n({[t]:r},!0),{getState:()=>o(t),setState:(P,H)=>n({[t]:P},H),subscribe:P=>d(t,P),unsubscribe:()=>k(t),clean:()=>z(t)}},Zt=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),jt=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:Zt(o))}});const rr=e=>e.startsWith("on"),or=e=>e!=="children"&&!rr(e),ht=(e,t)=>r=>e[r]!==t[r],u=(e,t)=>r=>!(r in t),v=e=>{const t=Object.keys(e);return{eventProps:t.filter(rr),propertyProps:t.filter(or)}};var j=(e,t,r)=>{const{eventProps:o,propertyProps:n}=v(t),{eventProps:d,propertyProps:k}=v(r);o.filter(u(t,r)).map(z=>{const P=z.toLowerCase().slice(2);e.removeEventListener(P,t[z])}),n.filter(u(t,r)).map(z=>e[z]=""),k.filter(ht(t,r)).map(z=>e[z]=r[z]),d.filter(ht(t,r)).map(z=>{const P=z.toLowerCase().slice(2);e.addEventListener(P,r[z])})},T=e=>{if(!p())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return j(t,{},e.props),t},N=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return e[t]=[];const o=e[t].indexOf(r);o>-1&&e[t].splice(o,1)}}}};const G=e=>{const t={};for(let r in e)Me(e,r)||(t[r]=e[r]);return t};var ue=(e,t)=>{if(!F(e))return t;if(!F(t))return e;const r={...G(e),...G(t)},o={...e,...t};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},le=()=>{const{on:e,emit:t,off:r}=N(),o={};return{getState:n=>tt(o[n]),setState:(n,d=!1)=>{if(typeof n=="function"&&(n=n(tt(o))),!F(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const k=tt(n);Object.keys(k).map(z=>{const P=o[z],H=k[z],be=F(H)&&F(P)?ue(P,H):H;!d&&t(z,be),o[z]=be})},subscribe:(n,d)=>(e(n,d),()=>r(n,d)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(d=>o[d]=void 0):Object.keys(o).map(d=>o[d]=void 0)}}},oe=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...n)=>r(...o,...n);return r},Oe=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),ot=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},Et=(e,t,r="id",o="children")=>Q((n,d)=>n.splice(d,1))(e,t,r,o),st=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Re=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Dt=()=>{let e=Re();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},_t=(e,t)=>{if(p())if(t=t||Dt(),typeof e=="string")fetch(e).then(r=>r.blob()).then(r=>{const o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)});else{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)}},pt=(e=null)=>{var t,r;return p()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(r=window.innerHeight)!=null?r:document.documentElement.clientHeight}:{width:0,height:0}},bt=e=>{var t;if(p())return e=Pe(e)?e.current:e!=null?e:document.body,(t=e.getBoundingClientRect)==null?void 0:t.call(e)},mt=e=>{if(!p())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},He=(e,t={},r=!1)=>{!a(e)||Object.keys(t).map(o=>{e.style.setProperty(o,r?"":t[o])})};const Yt=(e=350)=>new Promise(t=>setTimeout(t,e)),Nr=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var hr=Yt,br=async(e,t=15)=>{if(!p())return;if(typeof e=="string"&&(e=mt(e)),e=Pe(e)?e.current:e,!a(e))return{};const r=e.cloneNode(!0);He(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await hr(t);const o=bt(r);return e.parentNode.removeChild(r),o};const Ir=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,vr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Ht=(e,t)=>{var r;t=`huxy-drop-arrow-${t}`;const o=(r=e.getAttribute("class"))!=null?r:"";Ir.test(o)?e.setAttribute("class",o.replace(vr,t)):e.setAttribute("class",`${o} ${t}`)},wr=async(e,t,r)=>{const{left:o,right:n,top:d,bottom:k}=bt(e),{width:z,height:P}=pt(),{width:H,height:be}=await br(t);if(n<0||k<0||o>z||d>P)return{};if(r==="vertical"){const Ee={left:o+"px",top:k+10+"px",right:"auto",bottom:"auto"};let Be="lt";o+H>z&&(Ee.left=n-H+"px",Be="rt"),k+10+be>P&&(Ee.top=d-10-be+"px",Be=Be==="lt"?"lb":"rb"),He(t,Ee),Ht(t,Be)}else{const Ee={left:n+10+"px",top:d+"px",right:"auto",bottom:"auto"};let Be="tl";n+10+H>z&&(Ee.left=o-10-H+"px",Be="tr"),d+be>P&&(Ee.top=k-be+"px",Be=Be==="tl"?"bl":"br"),He(t,Ee),Ht(t,Be)}};var kr=(e,t,r="horizontal")=>{const o=ot(wr),n=()=>o(e,t,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const d=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),He(t,{left:"",top:"",right:"",bottom:""})};return wr(e,t,r),d},Cr=(e,t,r,o="id",n="children")=>Q((d,k)=>d[k]={...d[k],...r})(e,t,o,n),jr=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const pr=N();var At=e=>{const{on:t,emit:r,off:o}=pr;return{on:n=>t(e,n),emit:n=>r(e,n),off:n=>o(e,n)}};const Pr=120*1e3,Dr=e=>e.json().then(t=>t);var _r=(e=Dr,t=Pr)=>(r="get")=>yt(e)((r||"get").toUpperCase()),Vt=e=>ve(e)&&!!e.length,Er=(e,t,r=[],o=!1,n=null)=>Vt(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(d=>(r=r.length>0?r:Object.keys(d),r.filter(k=>{const z=d[k];if(z==null)return!1;if(o)return z===t;const P=new RegExp(t,"gi"),H=z.toString().match(P);return H&&n&&(d[k]=n(z.toString().replace(P,`<span style="background-color:yellow">${H[0]}</span>`),{display:"inline-block"})),H}).length))):e:[],Ut=(e,t="id")=>{if(!Vt(e))return e;const r=[],o=[];return e.map(n=>{const d=F(n)?n[t]:n;o.includes(d)||(o.push(d),r.push(n))}),r};const St=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=tt(t),n=d=>{const k=[];return d.map(z=>{if(Vt(z[r])){const P=n(z[r])||[];z[r]=P,P.length>0&&k.push(z)}}),e(d,k)};return n(o)};var Mr=(e,t,r,o="name",n="id",d="children",k=!1)=>St((z,P)=>Ut([...Er(z,t,o,k,r),...P],n))(e,d),nr=(e="")=>{var t;return(t=e.match(/\d+/g))==null?void 0:t.sort((r,o)=>o-r)[0]},Sr=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),Ar=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},$r=(e="")=>e.replaceAll("//","/"),s=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",f=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},C=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),n=e%3600,d=~~(n/60);return o<24?`${o}${t[2]}${d}${t[1]}${n%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},b=e=>(t,r="children")=>{if(!ve(t))return t;const o=(n,d=[])=>{n.map((k,z)=>{const P=ve(k[r]);if(k=e(k,d,z,P)||k,P){const{[r]:H,...be}=k;o(H,[...d,{...be,"@@index":z}])}})};return o(t),t},x=(e,t="children")=>{const r=[];return b(o=>{const{[t]:n,...d}=o;r.push(d)})(e,t),r},L=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const M=e=>e<10?"0"+e:e;var B=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),n=M(t.getMonth()+1),d=M(t.getDate()),k=M(t.getHours()),z=M(t.getMinutes()),P=M(t.getSeconds());return[r,n,d,k,z,P,o]},Z=(e,t=new Date)=>{e=B(e),t=B(t);const r=t.y-e.y,o=t.m-e.m,n=t.d-e.d,d=t.h-e.h,k=t.M-e.M,z=new Date(t.y,t.m,0).getDate(),P=(H,be,Ee,Be,gr)=>{const Qt="\u524D";return be<0&&(H-=1,be+=Ee),H===0?be+gr+Qt:be===0?H+Be+Qt:H+Be+be+gr+Qt};return r>0?P(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?P(o,n,z,"\u4E2A\u6708","\u5929"):n>0?P(n,d,24,"\u5929","\u5C0F\u65F6"):d>0?P(d,k,60,"\u5C0F\u65F6","\u5206\u949F"):k>0?k+"\u5206\u949F\u524D":"\u521A\u521A"};const I=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],ce=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var ge=(e=new Date,t=["-","-"," ",":",":",""],r=I)=>{const o=B(e);let n="";return t.map((d,k)=>{var z;return n+=(k===6?r[o[k]]:(z=o[k])!=null?z:"")+d}),n};const de=["","webkit","moz","ms"],se=e=>de.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),ke=e=>de.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),je=e=>de.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),ne=de.map(e=>`${e}fullscreenchange`);var K=e=>{var t,r;if(!p())return;e=Pe(e)?e.current:e!=null?e:document.body;const o=se(document),n=ke(e),d=je(document);document[o]?(r=document[d])==null||r.call(document):(t=e[n])==null||t.call(e)};const $e=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var ze=()=>{var e;if(!p())return;const t=window.navigator.userAgent.toLowerCase(),r=(e=$e.find(o=>t.match(o.reg)))!=null?e:{};return{type:r.name,version:t.match(r.reg)[1]}};const Le=60*1e3,We=60*Le,qe=24*We;var ut=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/qe);r-=qe*o;const n=~~(r/We);r-=We*n;const d=~~(r/Le);r-=Le*d;const k=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${d}\u5206${k}\u79D2`};const ct=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],ir=e=>{if(!Array.isArray(e))return ct;const t=[...ct];return e.map(r=>{const o=t.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var qt=e=>{const t=ir(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return mt(t.join(""))},$t=(e=new Date)=>{const t=B(e);return new Date(t[0],t[1],0).getDate()},Rt=(e=null)=>{var t,r,o,n;return p()?a(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:(r=(t=window.pageXOffset)!=null?t:document.documentElement.scrollLeft)!=null?r:document.body.scrollLeft,top:(n=(o=window.pageYOffset)!=null?o:document.documentElement.scrollTop)!=null?n:document.body.scrollTop}:{left:0,top:0}};const nt=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>{var t;return{type:"ios",model:e[1],version:(t=e[3])==null?void 0:t.replaceAll("_",".")}}},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var Rr=()=>{if(!p())return;const e=window.navigator.userAgent.toLowerCase(),t=nt.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},Ke=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(n=>{const[d,k]=n.split("=");o[d]=k}),{path:t,params:o}}return{path:t}},xt=()=>p()&&(window.ontouchstart||navigator.maxTouchPoints),mr=e=>{var t,r,o,n;const{left:d,top:k}=Rt();return{touchX:xt()?(r=(t=e==null?void 0:e.touches)==null?void 0:t[0])==null?void 0:r.pageX:(e==null?void 0:e.pageX)||(e==null?void 0:e.clientX)+d,touchY:xt()?(n=(o=e==null?void 0:e.touches)==null?void 0:o[0])==null?void 0:n.pageY:(e==null?void 0:e.pageY)||(e==null?void 0:e.clientY)+k}},xr=(e,t)=>{var r,o;const{touchX:n,touchY:d}=mr(e),{x:k,y:z}=(o=(r=t==null?void 0:t.getBoundingClientRect)==null?void 0:r.call(t))!=null?o:{};return{x:n-(k!=null?k:0),y:d-(z!=null?z:0)}},vt=(e,t,r="id",o="children")=>{if(!ve(e))return null;const n=d=>{for(let k=0,z=d.length;k<z;k++){const P=d[k];if(P[r]===t)return[P];if(ve(P[o])){const H=n(P[o]);if(H)return[P].concat(H)}}};return n(e)},Xt=(e,t={},r)=>{if(!p())return;r=Pe(r)?r.current:r!=null?r:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&He(o,t),o.innerText=e,r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const ar=(e={},t)=>{t=zt(t);const r=(o,n)=>{if(!(n!=null&&n[0]))return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(e,t)},zt=(e="")=>{var t;return(t=e.replace(/\[['"]?(.*?)['"]?\]/g,".$1"))==null?void 0:t.split(".")};var zr=ar,yr=(e,t="")=>a(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),Lr=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,n=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${n})`;const d=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${d})`},lr=e=>{if(!p())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:n}=e;return t.width=o,t.height=n,r.drawImage(e,0,0,o,n),t},Br=(...e)=>!Number.isNaN(new Date(...e).valueOf()),sr=e=>Se(e)==="error",Fr=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),Vr=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",Zr=e=>Se(e)==="regexp",Ur=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),Tr=e=>F(e)&&Object.keys(e).length,ur=e=>F(e)?Y(e):Array.isArray(e)?me(e):e,Qr=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",n=>r(n))}),eo=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",n=>r(n)))}),qr=async(e,t,r=2e3)=>{for(;!(t!=null&&t(e==null?void 0:e()));)await hr(r)},Xr=(e,t=["{","}"])=>{var r,o;return(o=(r=e==null?void 0:e.trim)==null?void 0:r.call(e).match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`)))==null?void 0:o[1]},Gr=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),d=r.find(k=>k.key===n);if(!d){const k=e(...o);return r.push({key:n,result:k}),r.length>t&&r.shift(),k}return d.result}};const i=(e,t,r="id")=>{if(!ve(e))return t;if(!ve(t))return e;const o={};return[...e,...t].map(n=>{var d;const k=F(n)?(d=n[r])!=null?d:JSON.stringify(n):n;if(o[k]===void 0)o[k]=n;else{const z=o[k];F(z)&&F(n)?o[k]=S(z,n):ve(z)&&ve(n)?o[k]=i(z,n):o[k]=n}}),Object.keys(o).map(n=>o[n])};var l=i;const h=(e,t)=>{if(!F(e))return t;if(!F(t))return e;for(let r in t)Me(t,r)?F(e[r])&&F(t[r])?e[r]=h(e[r],t[r]):ve(e[r])&&ve(t[r])?e[r]=l(e[r],t[r]):e[r]=t[r]:Object.setPrototypeOf(e,{[r]:t[r]});return e};var S=h,O=(e,...t)=>{const r=ve(e)?l:S;return t.map(o=>e=r(e,o)),e},D=(e,t)=>{var r,o;const n=(r=e==null?void 0:e.split(" "))!=null?r:[],d=(o=t==null?void 0:t.split(" "))!=null?o:[];return[...new Set([...n,...d])].filter(Boolean).join(" ")},W=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(n=>!r.includes(n));e.className=o.join(" ")},ee=`@keyframes huxy-message-animate-in {
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
}`;const J=()=>document.getElementsByClassName("huxy-message")[0],ae=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},xe=(e,t)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${t}`);const o=document.createElement("span");o.innerText=e;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},ye=(e,t=3250,r,o)=>{if(!p())return;_(ee,"huxy-message-css");let n=J();n||(n=ae());const d=xe(e,o);n.appendChild(d),setTimeout(()=>{n.removeChild(d),r==null||r()},t),setTimeout(()=>{W(d,"open")},t-250)};var fe={success:(e,t,r)=>ye(e,t,r,"success"),warn:(e,t,r)=>ye(e,t,r,"warn"),warning:(e,t,r)=>ye(e,t,r,"warn"),error:(e,t,r)=>ye(e,t,r,"error"),info:(e,t,r)=>ye(e,t,r,"info")},Ae=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[c(1-r),c($t(t)-r)]},Ne=(e,t,r,o,n="id",d="children")=>{let k={};return Q((z,P)=>(k=z[P],z.splice(P,1),!0))(e,t,n,d),y(e,r,k,o,n,d),e},he=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),Ze=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(n=>t.includes(n)?o.push({key:n,value:e[n]}):r[n]=e[n]),{newObj:r,newQuery:o}},Te=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},Ie=(e="",t=0,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`},Lt=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!ve(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},cr=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(n,d)=>n?o(n):r(d))),Gt=()=>"#"+Ie((~~(Math.random()*(1<<24))).toString(16),6),Jt=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),wt=(e=[])=>e[Jt(e.length-1)],dr=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,n)=>{n===e-1?r[n]=t:(r[n]=Jt(1,t-1),t-=r[n])}),r},Bt=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),Ft=()=>Math.random()>.5;const dt=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var Kt=(e,t=60)=>{if(!p())return;e=Pe(e)?e.current:e!=null?e:document.body;let r,o=[];const n=ot(()=>o.map(P=>P(e)),t),d=P=>{r||(r=dt(e,n)),o.indexOf(P)===-1&&o.push(P)},k=P=>{const H=o.indexOf(P);H!==-1&&o.splice(H,1),o.length===0&&r&&z()},z=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:d,unbind:k,destroy:z}};const Wr=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const n=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var Jr=(e=0,t=0,r=0,o=1)=>{var n;if(e.includes("rgb")){const d=e.match(/rgba?\((.+)\)/);if(d){const k=(n=d[1])==null?void 0:n.split(",").map(z=>z.trim());return Wr(...k)}return e}return Wr(e,t,r,o)},Kr=(e,t="px")=>`${e}`.replace(t,"")-0;const to=()=>typeof(performance==null?void 0:performance.now)=="function"?performance.now():new Date().getTime(),no=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},io=()=>{const e=[],t=k=>{e.push(k),d(k)},r=()=>e[0],o=()=>e.shift(),n=k=>k.startTime=to(),d=k=>{n(k),e.sort((z,P)=>z.startTime-P.startTime)};return{hub:e,push:t,peek:r,shift:o,update:d}};var ao=(e=5)=>{const{hub:t,push:r,peek:o,shift:n,update:d}=io(),k=no(()=>{P()&&k()}),z=H=>to()-H.startTime>e,P=()=>{let H=o();for(;H;){if(z(H)){d(H);break}const{task:be}=H;typeof be=="function"?(H.task=null,be()):n(),H=o()}return H};return(H=()=>{})=>{r({task:H}),t.length<2&&k()}},lo=()=>p()&&document.documentElement.scrollHeight-q()===pt().height,so=e=>{var t;!p()||(e=Pe(e)?e.current:e!=null?e:window,(t=e.scrollIntoView)==null||t.call(e,{behavior:"smooth",block:"center"}))},uo={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch(r){t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},co=e=>{const t=qt(e);p()&&document.head.appendChild(...t)},fo=(e,t=null,r=!1)=>[...e||[]].sort((o,n)=>{const d=t?o[t]:o,k=t?n[t]:n;return!isNaN(Number(d))&&!isNaN(Number(d))?r?k-d:d-k:typeof d=="string"&&typeof k=="string"?r?k.localeCompare(d):d.localeCompare(k):typeof d=="string"&&typeof k=="number"?r?-1:1:typeof d=="number"||typeof d=="string"?r?1:-1:r?-1:1}),ho=e=>{if(!F(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},po={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const mo=le();var xo=rt(mo),yo=(e,t=!1)=>(e=t?e:`return ${e};`,Function(e)()),go=()=>p()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),bo=(e,...t)=>{const r=[];return e.map((o,n)=>{var d;r.push(o,(d=t[n])!=null?d:"")}),r.join("")},vo=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const wo=e=>[12,$t(e),24,60,60],ko=(e=[],t=[],r=[])=>{let o=!1;const n=[];return t.map((d,k)=>{const z=(o?d-1:d)-e[k];z<0?(n[k]=z+(r[k]||10),o=!0):(n[k]=z,o=!1)}),n.reverse()};var ro=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=wo(t).reverse(),o=B(e).slice(0,-1).reverse(),n=B(t).slice(0,-1).reverse();return ko(o,n,r)};const Co=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var jo=(e,t=new Date)=>{const r=ro(e,t),o=r.findIndex(n=>n>0);return r.map((n,d)=>`${n||0}${Co[d]}`).slice(o).join("")},Eo=(e,t)=>{!a(e)||(yr(e,t)?W(e,t):m(e,t))},So=e=>(t,r="children")=>{if(!ve(t))return t;const o=n=>(n.map(d=>{ve(d[r])&&(d[r]=o(d[r]))}),e(n));return o(t)},$o=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),zo=(e,t="fuckId",r="children")=>b((o,n,d)=>{o[t]=[...n.map(k=>k["@@index"]),d].join("-")})(e,r),Fo=(e,t,r,o="children")=>Q((n,d)=>{const k=n[d];return k[o]=[...k[o]||[],...r],!0})(e,t),To=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},Oo=e=>p()?(ne.map(t=>document.addEventListener(t,e,!1)),()=>ne.map(t=>document.removeEventListener(t,e,!1))):void 0,No=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:d="20px microsoft yahei",fillStyle:k="rgba(202,202,202,0.4)",content:z="\u8BF7\u52FF\u5916\u4F20",rotate:P="-30",zIndex:H=1e3}={})=>{if(!p())return;e=Pe(e)?e.current:e!=null?e:document.body;const be=e.firstChild;(be==null?void 0:be.className)==="watermark-canvas"&&e.removeChild(be);const Ee=document.createElement("canvas");Ee.setAttribute("width",t),Ee.setAttribute("height",r);const Be=Ee.getContext("2d");Be.textAlign=o,Be.textBaseline=n,Be.font=d,Be.fillStyle=k,Be.rotate(Math.PI/180*P),Be.fillText(z,parseFloat(t)/2,parseFloat(r)/2);const gr=Ee.toDataURL(),Qt=document.createElement("div");Qt.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${H};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${gr}')`),e.style.position="relative",e.insertBefore(Qt,e.firstChild)},Io=(e=new Date)=>{const t=new Date(e).getDay();return[c(1-t),c(7-t)]},Po=e=>{if(!De(e))return{};let t="pending",r;const o=e.then(n=>{t="success",r=n}).catch(n=>{t="error",r=n});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}};return Ye}()})},3323:function(Tt,pe){"use strict";function Ye(A,ie){var X=A.length;A.push(ie);e:for(;0<X;){var Ce=X-1>>>1,Fe=A[Ce];if(0<ve(Fe,ie))A[Ce]=ie,A[X]=Fe,X=Ce;else break e}}function _e(A){return A.length===0?null:A[0]}function Se(A){if(A.length===0)return null;var ie=A[0],X=A.pop();if(X!==ie){A[0]=X;e:for(var Ce=0,Fe=A.length,Qe=Fe>>>1;Ce<Qe;){var Ue=2*(Ce+1)-1,Ge=A[Ue],De=Ue+1,Je=A[De];if(0>ve(Ge,X))De<Fe&&0>ve(Je,Ge)?(A[Ce]=Je,A[De]=X,Ce=De):(A[Ce]=Ge,A[Ue]=X,Ce=Ue);else if(De<Fe&&0>ve(Je,X))A[Ce]=Je,A[De]=X,Ce=De;else break e}}return ie}function ve(A,ie){var X=A.sortIndex-ie.sortIndex;return X!==0?X:A.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var Q=performance;pe.unstable_now=function(){return Q.now()}}else{var re=Date,y=re.now();pe.unstable_now=function(){return re.now()-y}}var a=[],m=[],c=1,w=null,g=3,E=!1,p=!1,$=!1,_=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(A){for(var ie=_e(m);ie!==null;){if(ie.callback===null)Se(m);else if(ie.startTime<=A)Se(m),ie.sortIndex=ie.expirationTime,Ye(a,ie);else break;ie=_e(m)}}function R(A){if($=!1,F(A),!p)if(_e(a)!==null)p=!0,at(Y);else{var ie=_e(m);ie!==null&&ft(R,ie.startTime-A)}}function Y(A,ie){p=!1,$&&($=!1,V(we),we=-1),E=!0;var X=g;try{for(F(ie),w=_e(a);w!==null&&(!(w.expirationTime>ie)||A&&!q());){var Ce=w.callback;if(typeof Ce=="function"){w.callback=null,g=w.priorityLevel;var Fe=Ce(w.expirationTime<=ie);ie=pe.unstable_now(),typeof Fe=="function"?w.callback=Fe:w===_e(a)&&Se(a),F(ie)}else Se(a);w=_e(a)}if(w!==null)var Qe=!0;else{var Ue=_e(m);Ue!==null&&ft(R,Ue.startTime-ie),Qe=!1}return Qe}finally{w=null,g=X,E=!1}}var te=!1,me=null,we=-1,Xe=5,it=-1;function q(){return!(pe.unstable_now()-it<Xe)}function Me(){if(me!==null){var A=pe.unstable_now();it=A;var ie=!0;try{ie=me(!0,A)}finally{ie?Pe():(te=!1,me=null)}}else te=!1}var Pe;if(typeof U=="function")Pe=function(){U(Me)};else if(typeof MessageChannel!="undefined"){var Ve=new MessageChannel,Wt=Ve.port2;Ve.port1.onmessage=Me,Pe=function(){Wt.postMessage(null)}}else Pe=function(){_(Me,0)};function at(A){me=A,te||(te=!0,Pe())}function ft(A,ie){we=_(function(){A(pe.unstable_now())},ie)}pe.unstable_IdlePriority=5,pe.unstable_ImmediatePriority=1,pe.unstable_LowPriority=4,pe.unstable_NormalPriority=3,pe.unstable_Profiling=null,pe.unstable_UserBlockingPriority=2,pe.unstable_cancelCallback=function(A){A.callback=null},pe.unstable_continueExecution=function(){p||E||(p=!0,at(Y))},pe.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xe=0<A?Math.floor(1e3/A):5},pe.unstable_getCurrentPriorityLevel=function(){return g},pe.unstable_getFirstCallbackNode=function(){return _e(a)},pe.unstable_next=function(A){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var X=g;g=ie;try{return A()}finally{g=X}},pe.unstable_pauseExecution=function(){},pe.unstable_requestPaint=function(){},pe.unstable_runWithPriority=function(A,ie){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var X=g;g=A;try{return ie()}finally{g=X}},pe.unstable_scheduleCallback=function(A,ie,X){var Ce=pe.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?Ce+X:Ce):X=Ce,A){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=X+Fe,A={id:c++,callback:ie,priorityLevel:A,startTime:X,expirationTime:Fe,sortIndex:-1},X>Ce?(A.sortIndex=X,Ye(m,A),_e(a)===null&&A===_e(m)&&($?(V(we),we=-1):$=!0,ft(R,X-Ce))):(A.sortIndex=Fe,Ye(a,A),p||E||(p=!0,at(Y))),A},pe.unstable_shouldYield=q,pe.unstable_wrapCallback=function(A){var ie=g;return function(){var X=g;g=ie;try{return A.apply(this,arguments)}finally{g=X}}}},1102:function(Tt,pe,Ye){"use strict";Tt.exports=Ye(3323)}}]);
