(self.webpackChunk=self.webpackChunk||[]).push([[697],{1975:function(Ft,pe,He){(function(_e,ze){Ft.exports=ze(He(7378),He(1542))})(this,function(_e,ze){return function(){"use strict";var be={193:function(a,x,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),z=p()(g());z.push([a.id,`/*@height:2px;
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
`,""]),z.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},x.Z=z},145:function(a,x,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),z=p()(g());z.push([a.id,`.kLIGi {
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
`,""]),z.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},x.Z=z},842:function(a,x,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),z=p()(g());z.push([a.id,`@keyframes animate-drawer-in {
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
`,""]),z.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},x.Z=z},563:function(a,x,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),z=p()(g());z.push([a.id,`@keyframes animate-drop-in {
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
`,""]),z.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},x.Z=z},697:function(a,x,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),z=p()(g());z.push([a.id,`@keyframes animate-modal-in {
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
`,""]),z.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},x.Z=z},810:function(a,x,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),z=p()(g());z.push([a.id,`.clear {
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
`,""]),z.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"},x.Z=z},31:function(a,x,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),z=p()(g());z.push([a.id,`.cols-1 {
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
`,""]),z.locals={},x.Z=z},201:function(a,x,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),z=p()(g());z.push([a.id,`@keyframes before {
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
`,""]),z.locals={},x.Z=z},289:function(a,x,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),z=p()(g());z.push([a.id,`.clear {
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
`,""]),z.locals={},x.Z=z},626:function(a,x,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),z=p()(g());z.push([a.id,`.ofth_ {
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
`,""]),z.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},x.Z=z},435:function(a,x,c){var w=c(703),g=c.n(w),E=c(414),p=c.n(E),z=p()(g());z.push([a.id,`.node-right-icon-close {
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
`,""]),z.locals={},x.Z=z},414:function(a){a.exports=function(x){var c=[];return c.toString=function(){return this.map(function(w){var g="",E=typeof w[5]!="undefined";return w[4]&&(g+="@supports (".concat(w[4],") {")),w[2]&&(g+="@media ".concat(w[2]," {")),E&&(g+="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {")),g+=x(w),E&&(g+="}"),w[2]&&(g+="}"),w[4]&&(g+="}"),g}).join("")},c.i=function(w,g,E,p,z){typeof w=="string"&&(w=[[null,w,void 0]]);var A={};if(E)for(var V=0;V<this.length;V++){var U=this[V][0];U!=null&&(A[U]=!0)}for(var F=0;F<w.length;F++){var B=[].concat(w[F]);E&&A[B[0]]||(typeof z!="undefined"&&(typeof B[5]=="undefined"||(B[1]="@layer".concat(B[5].length>0?" ".concat(B[5]):""," {").concat(B[1],"}")),B[5]=z),g&&(B[2]&&(B[1]="@media ".concat(B[2]," {").concat(B[1],"}")),B[2]=g),p&&(B[4]?(B[1]="@supports (".concat(B[4],") {").concat(B[1],"}"),B[4]=p):B[4]="".concat(p)),c.push(B))}},c}},703:function(a){a.exports=function(x){return x[1]}},53:function(a,x,c){var w,g=c(899),E=Symbol.for("react.element"),p=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,A=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V={key:!0,ref:!0,__self:!0,__source:!0};function U(F,B,Z){var te,me={},ve=null,Ge=null;Z!==void 0&&(ve=""+Z),B.key!==void 0&&(ve=""+B.key),B.ref!==void 0&&(Ge=B.ref);for(te in B)z.call(B,te)&&!V.hasOwnProperty(te)&&(me[te]=B[te]);if(F&&F.defaultProps)for(te in B=F.defaultProps,B)me[te]===void 0&&(me[te]=B[te]);return{$$typeof:E,type:F,key:ve,ref:Ge,props:me,_owner:A.current}}w=p,x.jsx=U,x.jsxs=U},458:function(a,x,c){a.exports=c(53)},748:function(a){var x=[];function c(E){for(var p=-1,z=0;z<x.length;z++)if(x[z].identifier===E){p=z;break}return p}function w(E,p){for(var z={},A=[],V=0;V<E.length;V++){var U=E[V],F=p.base?U[0]+p.base:U[0],B=z[F]||0,Z="".concat(F," ").concat(B);z[F]=B+1;var te=c(Z),me={css:U[1],media:U[2],sourceMap:U[3],supports:U[4],layer:U[5]};if(te!==-1)x[te].references++,x[te].updater(me);else{var ve=g(me,p);p.byIndex=V,x.splice(V,0,{identifier:Z,updater:ve,references:1})}A.push(Z)}return A}function g(E,p){var z=p.domAPI(p);z.update(E);var A=function(V){if(V){if(V.css===E.css&&V.media===E.media&&V.sourceMap===E.sourceMap&&V.supports===E.supports&&V.layer===E.layer)return;z.update(E=V)}else z.remove()};return A}a.exports=function(E,p){p=p||{},E=E||[];var z=w(E,p);return function(A){A=A||[];for(var V=0;V<z.length;V++){var U=z[V],F=c(U);x[F].references--}for(var B=w(A,p),Z=0;Z<z.length;Z++){var te=z[Z],me=c(te);x[me].references===0&&(x[me].updater(),x.splice(me,1))}z=B}}},736:function(a){var x={};function c(g){if(typeof x[g]=="undefined"){var E=document.querySelector(g);if(window.HTMLIFrameElement&&E instanceof window.HTMLIFrameElement)try{E=E.contentDocument.head}catch(p){E=null}x[g]=E}return x[g]}function w(g,E){var p=c(g);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(E)}a.exports=w},706:function(a){function x(c){var w=document.createElement("style");return c.setAttributes(w,c.attributes),c.insert(w,c.options),w}a.exports=x},567:function(a,x,c){function w(g){var E=c.nc;E&&g.setAttribute("nonce",E)}a.exports=w},306:function(a){function x(g,E,p){var z="";p.supports&&(z+="@supports (".concat(p.supports,") {")),p.media&&(z+="@media ".concat(p.media," {"));var A=typeof p.layer!="undefined";A&&(z+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),z+=p.css,A&&(z+="}"),p.media&&(z+="}"),p.supports&&(z+="}");var V=p.sourceMap;V&&typeof btoa!="undefined"&&(z+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(V))))," */")),E.styleTagTransform(z,g,E.options)}function c(g){if(g.parentNode===null)return!1;g.parentNode.removeChild(g)}function w(g){var E=g.insertStyleElement(g);return{update:function(p){x(E,g,p)},remove:function(){c(E)}}}a.exports=w},62:function(a){function x(c,w){if(w.styleSheet)w.styleSheet.cssText=c;else{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(document.createTextNode(c))}}a.exports=x},899:function(a){a.exports=_e},994:function(a){a.exports=ze}},K={};function re(a){var x=K[a];if(x!==void 0)return x.exports;var c=K[a]={id:a,exports:{}};return be[a](c,c.exports,re),c.exports}(function(){re.n=function(a){var x=a&&a.__esModule?function(){return a.default}:function(){return a};return re.d(x,{a:x}),x}})(),function(){re.d=function(a,x){for(var c in x)re.o(x,c)&&!re.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:x[c]})}}(),function(){re.o=function(a,x){return Object.prototype.hasOwnProperty.call(a,x)}}(),function(){re.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){re.nc=void 0}();var y={};return function(){re.r(y),re.d(y,{Anico:function(){return Ge},Carousel:function(){return Tt},Col:function(){return Ot},Drawer:function(){return Zt},Drop:function(){return pt},Ellipsis:function(){return Nr},ErrorBoundary:function(){return kr},FullPage:function(){return Zr},HandleError:function(){return Ar},LoadError:function(){return Sr},Mask:function(){return at},MaxSize:function(){return b},Modal:function(){return M},Panel:function(){return Me},Portal:function(){return Ct},Row:function(){return Lt},Spinner:function(){return se},TabHeader:function(){return Rr},Tooltip:function(){return dr},Tree:function(){return Gr},fixEle:function(){return Cr},fixIcon:function(){return fr},renderTree:function(){return pr},str2React:function(){return or},str2Vue:function(){return $r}});var a=re(458),x=re(748),c=re.n(x),w=re(306),g=re.n(w),E=re(736),p=re.n(E),z=re(567),A=re.n(z),V=re(706),U=re.n(V),F=re(62),B=re.n(F),Z=re(193),te={};te.styleTagTransform=B(),te.setAttributes=A(),te.insert=p().bind(null,"head"),te.domAPI=g(),te.insertStyleElement=U();var me=c()(Z.Z,te),ve=Z.Z&&Z.Z.locals?Z.Z.locals:void 0,Ge=i=>(0,a.jsx)("span",{className:ve.anico,children:(0,a.jsx)("span",{className:[ve.hline,...(i.type||"").split(" ").map(s=>ve[s]).filter(Boolean)].join(" ")})}),nt=re(994),q=re(899),Ze=re.n(q),Ie=(i,s)=>{const h=(0,q.useRef)();(0,q.useEffect)(()=>{h.current=i},[i]),(0,q.useEffect)(()=>{if(s){const S=setInterval(()=>h.current(),s);return()=>clearInterval(S)}},[s])},Ue=()=>![typeof window,typeof document].includes("undefined"),Wt=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),it=i=>Wt(i).indexOf("element")>-1,dt=(i=null)=>{var s,h;return Ue()?it(i)?{width:i.clientWidth,height:i.clientHeight}:{width:(s=window.innerWidth)!=null?s:document.documentElement.clientWidth,height:(h=window.innerHeight)!=null?h:document.documentElement.clientHeight}:{width:0,height:0}},L=(i=()=>{},s=60)=>{let h=null;return function(...S){clearTimeout(h),h=setTimeout(()=>i.apply(this,S),s)}},ie=(i,s)=>Object.prototype.hasOwnProperty.call(i!=null?i:{},s),X=i=>ie(i,"current");const we=(i,s)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const h=document.createElement("object");return h.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),h.setAttribute("class","resize-sensor"),h.onload=()=>{h.contentDocument.defaultView.addEventListener("resize",s,!1),s()},h.type="text/html",i.appendChild(h),h.data="about:blank",h};var $e=(i,s=60)=>{if(!Ue())return;i=X(i)?i.current:i!=null?i:document.body;let h,S=[];const O=L(()=>S.map(J=>J(i)),s),D=J=>{h||(h=we(i,O)),S.indexOf(J)===-1&&S.push(J)},R=J=>{const ae=S.indexOf(J);ae!==-1&&S.splice(ae,1),S.length===0&&h&&ee()},ee=()=>{h&&h.parentNode&&(h.contentDocument&&h.contentDocument.defaultView.removeEventListener("resize",O,!1),h.parentNode.removeChild(h),h=void 0,S=[])};return{element:i,bind:D,unbind:R,destroy:ee}},Qe=(i={})=>{const s=(0,q.useRef)(0),[h,S]=(0,q.useState)(i),O=(0,q.useCallback)(D=>{cancelAnimationFrame(s.current),s.current=requestAnimationFrame(()=>S(D))},[]);return(0,q.useEffect)(()=>()=>cancelAnimationFrame(s.current),[]),[h,O]},qe=(i=null,s=60)=>{const h=X(i)?i.current:i,{bind:S,destroy:O}=$e(h,s),[D,R]=Qe(dt(h));return(0,q.useEffect)(()=>(S(()=>h&&R(dt(h))),()=>O()),[h]),D},Je=re(145),De={};De.styleTagTransform=B(),De.setAttributes=A(),De.insert=p().bind(null,"head"),De.domAPI=g(),De.insertStyleElement=U();var Ke=c()(Je.Z,De),et=Je.Z&&Je.Z.locals?Je.Z.locals:void 0,Tt=({children:i,active:s=0,delay:h=5e3,className:S,...O})=>{const[D,R]=(0,q.useState)(s+1),[ee,J]=(0,q.useState)(!1),ae=(0,q.useRef)(),xe=(0,q.useRef)(""),{width:ye}=qe(ae);i=Array.isArray(i)?i:[i];const fe=i[0],Le=[i[i.length-1],...i,fe],Pe=Le.length;Ie(()=>{let Fe=D+1;Fe=Fe===Pe?1:Fe,xe.current&&(xe.current=""),R(Fe),Fe===Pe-1&&setTimeout(()=>{xe.current="none",R(1)},500)},ee?null:h);const he=(Fe,Ne)=>{Ne.stopPropagation(),xe.current="",R(Fe),(0,nt.flushSync)(()=>J(!0)),J(!1)},Ye={width:`${Pe*ye}px`,transform:`translateX(${-ye*D}px)`,transition:xe.current};return(0,a.jsxs)("div",{className:`${et["huxy-carousel"]}${S?` ${S}`:""}`,...O,ref:ae,children:[(0,a.jsx)("div",{className:et["huxy-carousel-wrap"],style:Ye,children:Le.map((Fe,Ne)=>(0,a.jsx)("div",{className:`${et["carousel-item"]} ${D===Ne?et.active:""}`,style:{width:`${ye}px`},children:Fe},`huxy-carousel-${Ne}`))}),(0,a.jsx)("div",{className:et["carousel-switch"],children:i.map((Fe,Ne)=>(0,a.jsx)("span",{className:`${et.dot} ${D===Ne+1?et.active:""}`,onClick:Bt=>he(Ne+1,Bt)},`huxy-carousel-switch-${Ne}`))})]})};const yt=(i,s)=>{let h="",S="";if(typeof s=="number"&&(h=`col-${i}-${s}`),typeof s=="object"){const{span:O,offset:D}=s;h=O?`col-${i}-${O}`:"",S=D?`offset-${i}-${D}`:""}return{sp:h,os:S}};var Ot=(0,q.forwardRef)(({span:i,offset:s,xl:h,lg:S,md:O,sm:D,xs:R,style:ee,width:J,auto:ae,offsetWidth:xe="0px",className:ye,...fe},Le)=>{const Pe=ye?` ${ye}`:"",he=`col-${i||12}`,Ye=s?`offset-${s}`:"",{sp:Fe,os:Ne}=yt("xs",R),{sp:Bt,os:sr}=yt("sm",D),{sp:Xt,os:Gt}=yt("md",O),{sp:wt,os:ur}=yt("lg",S),{sp:Rt,os:$t}=yt("xl",h),ct=[he,Rt,wt,Xt,Bt,Fe,Ye,$t,ur,Gt,sr,Ne].filter(Boolean).join(" "),Jt=ae?{width:"auto",flex:1,maxWidth:`calc(100% - ${xe})`}:{width:J};return(0,a.jsx)("div",{className:`${ct}${Pe}`,...fe,style:{...Jt,...ee},ref:Le})}),kt=()=>{const i=(0,q.useRef)(!0);return i.current?(i.current=!1,!0):!1},Qt=(i,s=[])=>{const h=kt();(0,q.useEffect)(()=>{if(!h)return i()},s)},Mt=(i,s=450)=>{const[h,S]=(0,q.useState)(i);return Qt(()=>{let O;return i||s===0?S(i):O=setTimeout(()=>S(i),s),()=>O&&clearTimeout(O)},[i]),[h,S]},Ct=({children:i,mountNode:s=document.body})=>(0,nt.createPortal)(i,s);const Pt={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},tt={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},er={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},cr=document.body;var at=({open:i,close:s,delay:h=300,children:S,mountNode:O,hasMask:D=!0,style:R,className:ee="h-mask"})=>{const[J]=Mt(i,h);return cr.style.overflow=J?"hidden":"",(0,a.jsx)(Ct,{mountNode:O,children:(0,a.jsx)("div",{children:J?(0,a.jsxs)("div",{className:ee,style:Pt,children:[D?(0,a.jsx)("div",{style:tt,onClick:ae=>s==null?void 0:s(ae)}):null,(0,a.jsx)("div",{style:{...er,...R},children:S})]}):null})})},Nt=re(842),gt={};gt.styleTagTransform=B(),gt.setAttributes=A(),gt.insert=p().bind(null,"head"),gt.domAPI=g(),gt.insertStyleElement=U();var Or=c()(Nt.Z,gt),rt=Nt.Z&&Nt.Z.locals?Nt.Z.locals:void 0,Zt=({open:i,close:s,footer:h,header:S,className:O,children:D,width:R="300px"})=>{var ee;const J=["drawer-wrap",i?"open":"",...(ee=O==null?void 0:O.split(" "))!=null?ee:[]].filter(Boolean).map(ae=>rt[ae]).join(" ");return(0,a.jsx)(at,{open:i,close:s,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,a.jsx)("div",{className:J,style:{width:R},children:(0,a.jsxs)("div",{className:rt["drawer-container"],children:[(0,a.jsxs)("div",{className:rt["drawer-header"],children:[(0,a.jsx)("span",{className:`link ${rt["ico-close"]}`,onClick:ae=>s==null?void 0:s(ae)}),(0,a.jsx)("div",{children:S})]}),(0,a.jsx)("div",{className:rt["drawer-content"],children:D}),h?(0,a.jsx)("div",{className:rt["drawer-footer"],children:h}):null]})})})},ft=(i,s,h="click")=>{(0,q.useEffect)(()=>{const S=D=>{const R=X(i)?i.current:i;(R==null?void 0:R.contains)&&!R.contains(D.target)&&s(D)},O=typeof h=="string"?[h]:h;return O.map(D=>{document.addEventListener(D,S,!1)}),()=>{O.map(D=>{document.removeEventListener(D,S,!1)})}},[i,s,h])},tr=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",rr=(i="")=>i.replace(/^\S/,s=>s.toUpperCase()),ht=i=>{var s;if(Ue())return i=X(i)?i.current:i!=null?i:document.body,(s=i.getBoundingClientRect)==null?void 0:s.call(i)},u=i=>{if(!Ue())return;const s=document.createElement("div");return s.innerHTML=i,s.children[0]},v=(i,s={},h=!1)=>{!it(i)||Object.keys(s).map(S=>{i.style.setProperty(S,h?"":s[S])})};const j=(i=350)=>new Promise(s=>setTimeout(s,i)),T=(i=100)=>{const s=Date.now();for(;Date.now()-s<=i;);};var P=j,G=async(i,s=15)=>{if(!Ue())return;if(typeof i=="string"&&(i=u(i)),i=X(i)?i.current:i,!it(i))return{};const h=i.cloneNode(!0);v(h,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(h),await P(s);const S=ht(h);return i.parentNode.removeChild(h),S};const ce=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,le=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,oe=(i,s)=>{var h;s=`huxy-drop-arrow-${s}`;const S=(h=i.getAttribute("class"))!=null?h:"";ce.test(S)?i.setAttribute("class",S.replace(le,s)):i.setAttribute("class",`${S} ${s}`)},Te=async(i,s,h)=>{const{left:S,right:O,top:D,bottom:R}=ht(i),{width:ee,height:J}=dt(),{width:ae,height:xe}=await G(s);if(O<0||R<0||S>ee||D>J)return{};if(h==="vertical"){const ye={left:S+"px",top:R+10+"px",right:"auto",bottom:"auto"};let fe="lt";S+ae>ee&&(ye.left=O-ae+"px",fe="rt"),R+10+xe>J&&(ye.top=D-10-xe+"px",fe=fe==="lt"?"lb":"rb"),v(s,ye),oe(s,fe)}else{const ye={left:O+10+"px",top:D+"px",right:"auto",bottom:"auto"};let fe="tl";O+10+ae>ee&&(ye.left=S-10-ae+"px",fe="tr"),D+xe>J&&(ye.top=R-xe+"px",fe=fe==="tl"?"bl":"br"),v(s,ye),oe(s,fe)}};var ot=(i,s,h="horizontal")=>{const S=L(Te),O=()=>S(i,s,h);window.addEventListener("scroll",O,!1),window.addEventListener("resize",O,!1);const D=()=>{window.removeEventListener("scroll",O),window.removeEventListener("resize",O),v(s,{left:"",top:"",right:"",bottom:""})};return Te(i,s,h),D},jt=({open:i,delay:s=250,children:h,mountNode:S,style:O,className:D="huxy-mask"})=>{const[R]=Mt(i,s);return(0,a.jsx)(Ct,{mountNode:S,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:D,children:(0,a.jsx)("div",{style:{...O,display:R?"block":"none"},children:h})})})})},lt=re(563),Be={};Be.styleTagTransform=B(),Be.setAttributes=A(),Be.insert=p().bind(null,"head"),Be.domAPI=g(),Be.insertStyleElement=U();var It=c()(lt.Z,Be),Dt=lt.Z&&lt.Z.locals?lt.Z.locals:void 0,pt=({trigger:i="click",type:s,dropList:h,className:S,children:O,...D})=>{const[R,ee]=(0,q.useState)(!1),J=(0,q.useRef)(),ae=(0,q.useRef)(),xe=(0,q.useRef)();ft(J,he=>R&&ee(!1),[...new Set(["click",i.toLowerCase()])]),(0,q.useEffect)(()=>()=>{var he;return(he=xe.current)==null?void 0:he.call(xe)},[]);const ye=he=>{he.preventDefault(),ee(!0),xe.current=ot(J.current,ae.current,s)},fe={[`on${rr(i)}`]:ye},Le=["drop-wrap",R?"open":""].filter(Boolean).map(he=>Dt[he]).join(" "),Pe=tr(h)?h:h==null?void 0:h(()=>ee(!1),R);return(0,a.jsxs)("span",{ref:J,className:`${Dt["drop-target"]}${S?` ${S}`:""}`,...fe,...D,children:[O,(0,a.jsx)(jt,{open:R,className:"huxy-drop",children:(0,a.jsx)("div",{ref:ae,className:Le,children:Pe})})]})},bt=(i,s={},h)=>{if(!Ue())return;h=X(h)?h.current:h!=null?h:document.body;const S=document.createElement("span");S.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),s&&v(S,s),S.innerText=i,h.appendChild(S);const O=S.getBoundingClientRect();return h.removeChild(S),O},mt=re(626),Ve={};Ve.styleTagTransform=B(),Ve.setAttributes=A(),Ve.insert=p().bind(null,"head"),Ve.domAPI=g(),Ve.insertStyleElement=U();var Yt=c()(mt.Z,Ve),Pr=mt.Z&&mt.Z.locals?mt.Z.locals:void 0,dr=({title:i,placement:s="topRight",children:h,ellipsis:S,className:O,...D})=>(0,a.jsx)("span",{className:`${Pr[`huxy-tooltip-${s}`]}${O?` ${O}`:""}`,tooltip:i!=null?i:h,...D,children:(0,a.jsx)("span",{className:S?Pr.ellipsis:"",children:h})});const br={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"};var Nr=i=>{var s,h,S,O;const{children:D}=i,R=typeof D=="string",ee=R?D:(S=(s=D==null?void 0:D.props)==null?void 0:s.title)!=null?S:(h=D==null?void 0:D.props)==null?void 0:h.children,J=(0,q.useRef)(),[ae,xe]=(0,q.useState)(!1),ye=qe(J,250);return(0,q.useEffect)(()=>{if(J.current){const{width:fe}=bt(ee),{width:Le}=ht(J.current),Pe=fe>Le;Pe!==ae&&xe(Pe)}},[ee,ye.width]),(0,a.jsx)("span",{ref:J,style:{width:"100%",display:"inline-block"},children:ae?R?(0,a.jsx)(dr,{...i,ellipsis:!0}):(0,a.jsx)("span",{style:br,children:D}):R?D:(O=D==null?void 0:D.props)==null?void 0:O.children})},vr=Object.defineProperty,Ht=(i,s,h)=>s in i?vr(i,s,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[s]=h,wr=(i,s,h)=>(Ht(i,typeof s!="symbol"?s+"":s,h),h);class kr extends Ze().Component{constructor(){super(...arguments),wr(this,"state",{error:null})}static getDerivedStateFromError(s){return{error:s}}componentDidCatch(s,h){const{errorReport:S}=this.props;typeof S=="function"&&S({error:s,info:h.componentStack})}render(){const{error:s}=this.state,{fallback:h,children:S}=this.props;return s?h(s):S}}var Cr=i=>s=>{if(typeof s=="function"||typeof(s==null?void 0:s.render)=="function")return(0,a.jsx)(s,{});if(typeof s=="string"){const h=i==null?void 0:i[s];return h?(0,a.jsx)(h,{}):(0,a.jsx)("i",{className:s})}return s!=null?s:null};const jr=i=>Cr(i);var fr=i=>({icon:s,defaultIcon:h=null})=>s?jr(i)(s):s===!1?null:h;const _t=["","webkit","moz","ms"],Ir=i=>_t.map(s=>s?`${s}FullscreenElement`:"fullscreenElement").find(s=>i[s]),Dr=i=>_t.map(s=>s?`${s}RequestFullscreen`:"requestFullscreen").find(s=>i[s]),_r=i=>_t.map(s=>s?`${s}ExitFullscreen`:"exitFullscreen").find(s=>i[s]),Vt=_t.map(i=>`${i}fullscreenchange`);var Er=i=>{var s,h;if(!Ue())return;i=X(i)?i.current:i!=null?i:document.body;const S=Ir(document),O=Dr(i),D=_r(document);document[S]?(h=document[D])==null||h.call(document):(s=i[O])==null||s.call(i)},Ut=i=>Ue()?(Vt.map(s=>document.addEventListener(s,i,!1)),()=>Vt.map(s=>document.removeEventListener(s,i,!1))):void 0;const Et=i=>(0,a.jsx)("i",{...i,children:"..."});var Zr=({panel:i,fullIcon:s=Et,exitIcon:h=Et,...S})=>{const O=X(i)?i.current:i,[D,R]=(0,q.useState)();(0,q.useEffect)(()=>{const J=Ut(()=>{R(ae=>!ae)});return()=>J()},[]);const ee=D?h:s;return(0,a.jsx)(ee,{onClick:J=>Er(O),...S})},or=(i,s)=>(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...s}),Sr=i=>{const{error:s={},info:h=""}=i||{},{message:S,stack:O,errMsg:D}=s;let R=D||O||s.toString();R=`${R}
${h}`.replace(/\r|\n|\r\n/g,"<br/>"),R=R.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),R=R.replace(/\s/g,"&nbsp;");const ee=S==null?void 0:S.slice(0,120).split(". ").slice(0,2).join(". ");return(0,a.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[or(R,{style:{color:"red"}}),ee&&(0,a.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${ee}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Ar=({children:i,report:s})=>{var h;const S=(0,q.useRef)();return(h=S.current)!=null&&h.state&&(S.current.state.error=null),(0,a.jsx)(kr,{ref:S,fallback:(O,D)=>Sr({error:O,info:D}),errorReport:s,children:i})};const zr=(i,s)=>Object.keys(s).map(h=>i.style[h]=s[h]),Lr=(i,s)=>Object.keys(s).map(h=>i.style[h]=""),Br={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},l=({left:i,top:s,width:h,height:S})=>({left:`${i}px`,top:`${s}px`,width:`${h}px`,height:`${S}px`}),f=i=>(0,a.jsx)("i",{...i,children:"..."}),C=i=>{const{left:s,top:h}=ht(i),{width:S,height:O}=dt(i);return{left:s,top:h,width:S,height:O}};var b=({panel:i,target:s,fullIcon:h=f,exitIcon:S=f})=>{i=X(i)?i.current:i||document.body;const[O,D]=(0,q.useState)(),R=(0,q.useRef)(),ee=(0,q.useRef)();(0,q.useEffect)(()=>{const xe=typeof s=="function"?s:()=>document.getElementsByClassName(s)[0];ee.current=l(C(xe())),R.current={...Br,...l(C(i))}},[i]);const J=(xe,ye)=>{xe?(zr(ye,R.current),setTimeout(()=>{zr(ye,ee.current)},0)):Lr(ye,R.current),D(xe)},ae=O?S:h;return(0,a.jsx)(ae,{onClick:xe=>J(!O,i)})},m=re(697),N={};N.styleTagTransform=B(),N.setAttributes=A(),N.insert=p().bind(null,"head"),N.domAPI=g(),N.insertStyleElement=U();var Y=c()(m.Z,N),W=m.Z&&m.Z.locals?m.Z.locals:void 0,M=({open:i,close:s,hasMask:h=!0,cancelText:S="\u53D6\u6D88",submit:O,submitText:D="\u786E\u5B9A",title:R="Modal \u5F39\u7A97",className:ee,children:J,delay:ae=250})=>{var xe;const ye=["modal-wrap",i?"open":"",...(xe=ee==null?void 0:ee.split(" "))!=null?xe:[]].filter(Boolean).map(fe=>W[fe]).join(" ");return(0,a.jsx)(at,{open:i,close:s,delay:ae,hasMask:h,className:"huxy-modal",children:(0,a.jsx)("div",{className:ye,children:(0,a.jsxs)("div",{className:W["modal-container"],children:[(0,a.jsx)("div",{className:W["modal-header"],children:R}),(0,a.jsx)("div",{className:W["modal-content"],children:J}),(0,a.jsxs)("div",{className:W["modal-footer"],children:[(0,a.jsx)("div",{className:`${W.btn} ${W.left}`,onClick:fe=>s==null?void 0:s(fe),children:S}),(0,a.jsx)("div",{className:`${W.btn} ${W.right}`,onClick:fe=>O==null?void 0:O(fe),children:D})]})]})})})},_=re(201),ne={};ne.styleTagTransform=B(),ne.setAttributes=A(),ne.insert=p().bind(null,"head"),ne.domAPI=g(),ne.insertStyleElement=U();var ke=c()(_.Z,ne),je=_.Z&&_.Z.locals?_.Z.locals:void 0,se=({global:i,absolute:s})=>(0,a.jsx)("div",{className:`spinner${i?" global":""}${s?" absolute":""}`,children:(0,a.jsx)("figure",{className:"spinning"})}),de=re(810),Ce={};Ce.styleTagTransform=B(),Ce.setAttributes=A(),Ce.insert=p().bind(null,"head"),Ce.domAPI=g(),Ce.insertStyleElement=U();var ue=c()(de.Z,Ce),Q=de.Z&&de.Z.locals?de.Z.locals:void 0;const Ee=i=>{var s;return(s=i==null?void 0:i.filter)==null?void 0:s.call(i,h=>typeof h=="function")},Oe=(i,s)=>{const h=(0,q.useRef)(),{loading:S,title:O,plugins:D,children:R,className:ee,...J}=i,ae=Ee(D),xe=ae==null?void 0:ae.length,ye=ee?` ${ee}`:"",fe=X(s)?s:h;return(0,a.jsxs)("div",{className:`${Q.panel}${ye}`,...J,ref:fe,children:[(O||xe)&&(0,a.jsxs)("div",{className:Q["panel-header"],children:[O&&(0,a.jsx)("h4",{className:Q["panel-title"],children:O}),xe&&(0,a.jsx)("div",{className:Q["panel-plugins"],children:ae.map((Le,Pe)=>(0,a.jsx)("span",{className:"link",children:(0,a.jsx)(Le,{panel:fe})},Pe))})]}),(0,a.jsx)("div",{className:Q["panel-body"],children:R}),S&&(0,a.jsx)(se,{})]})};var Me=(0,q.forwardRef)(Oe),Re=re(31),Ae={};Ae.styleTagTransform=B(),Ae.setAttributes=A(),Ae.insert=p().bind(null,"head"),Ae.domAPI=g(),Ae.insertStyleElement=U();var At=c()(Re.Z,Ae),nr=Re.Z&&Re.Z.locals?Re.Z.locals:void 0;const St=({gutter:i=10,className:s,overflow:h="hidden",...S},O)=>{var D;const R=s?` ${s}`:"";let ee=10;if(Array.isArray(i)){const J=[...i];i=J[0],ee=(D=J[1])!=null?D:J[0]}return(0,a.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(ee/2)}px`,overflow:h},children:(0,a.jsx)("div",{className:`row${R}`,...S,ref:O})})};var Lt=(0,q.forwardRef)(St),zt=i=>Wt(i)==="array",qt=i=>zt(i)&&!!i.length;const xt=({to:i,preventDefault:s,stopPropagation:h,...S})=>s?(0,a.jsx)("span",{...S}):(0,a.jsx)("a",{href:i,...S}),hr=({item:i,...s})=>(0,a.jsx)("ul",{...s}),Xe=(i,...s)=>{const h={};return Object.keys(i).filter(Boolean).map(S=>{h[S]=O=>i[S](O,...s)}),h},vt=({data:i=[],events:s={},List:h=hr,Link:S=xt,leftIcon:O,rightIcon:D,isHorizontal:R,isCollapsed:ee,level:J=0,parentOpen:ae=!0})=>{const xe=ee&&!J,ye=!R&&!ee&&!ae;return i.map(fe=>{var Le;const{name:Pe,path:he,icon:Ye,rightIcon:Fe,active:Ne,open:Bt,children:sr,linkProps:Xt}=fe,Gt=qt(sr),wt=fe.id||he||Pe,ur=xe?(Le=fe.title)!=null?Le:Pe:void 0,Rt=ye?"hidden":"",$t=Ye!=null?Ye:O,ct=Fe!=null?Fe:D,Jt=$t?(0,a.jsx)("div",{className:"node-left-icon",children:$t===!0?(0,a.jsx)("i",{className:"default-left-icon"}):$t}):null,Mr=Pe?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:Pe})}):null;if(Gt){const Jr=Xe(s,fe,J),Kr=[Rt,Bt?"open":""].filter(Boolean).join(" ");return(0,a.jsxs)("li",{className:Kr,"has-children":"true",...Jr,children:[(0,a.jsxs)(S,{title:ur,className:`link${Ne?" active":""}`,to:he,preventDefault:!0,stopPropagation:!1,...Xt,children:[Jt,Mr,ct?(0,a.jsx)("div",{className:"node-right-icon",children:ct===!0?(0,a.jsx)("i",{className:"default-right-icon"}):ct}):null]}),(0,a.jsx)(h,{item:fe,children:vt({data:sr,events:s,List:h,Link:S,leftIcon:O,rightIcon:D,isHorizontal:R,isCollapsed:ee,level:J+1,parentOpen:!!Bt})})]},wt)}return(0,a.jsx)("li",{className:Rt,children:(0,a.jsxs)(S,{title:ur,className:`link${Ne?" active":""}`,to:he,...Xt,children:[Jt,Mr]})},wt)})};var pr=vt,$r=(i,...s)=>(0,a.jsx)("div",{"v-html":i,...s}),st=re(289),ut={};ut.styleTagTransform=B(),ut.setAttributes=A(),ut.insert=p().bind(null,"head"),ut.domAPI=g(),ut.insertStyleElement=U();var Yr=c()(st.Z,ut),Fr=st.Z&&st.Z.locals?st.Z.locals:void 0;const mr=i=>(0,a.jsx)("div",{style:{padding:"6px 15px"},children:i}),xr=({activekey:i,tabs:s=[],switchTab:h,trackColor:S,flex:O},D)=>{var R;const[ee,J]=(0,q.useState)(i!=null?i:(R=s[0])==null?void 0:R.key),[ae,xe]=(0,q.useState)({}),ye=(0,q.useRef)({}),fe=(0,q.useRef)();(0,q.useEffect)(()=>{const he=ye.current[ee];he&&Le(he)},[]);const Le=he=>{const{left:Ye,width:Fe}=ht(he),Ne=ht(fe.current).left;xe({left:Ye-Ne,width:Fe})},Pe=(he,Ye)=>{he.stopPropagation(),J(Ye),typeof h=="function"&&h(Ye),Le(he.currentTarget)};return(0,a.jsxs)("div",{className:"tabs-header-wrap",ref:D,children:[(0,a.jsx)("ul",{className:`tabs-header${O?" flex":""}`,ref:fe,children:s.map(he=>(0,a.jsx)("li",{ref:Ye=>ye.current[he.key]=Ye,className:`th-item${ee===he.key?" active":""}`,onClick:Ye=>Pe(Ye,he.key),children:typeof he.renderTabs=="function"?he.renderTabs(he,ee===he.key):mr(he.value)},he.key))}),(0,a.jsx)("div",{className:"th-track",style:{...ae,color:S}})]})};var Rr=(0,q.forwardRef)(xr),ir=(i,s,h="id",S="children")=>{if(!zt(i))return null;const O=D=>{for(let R=0,ee=D.length;R<ee;R++){const J=D[R];if(J[h]===s)return[J];if(zt(J[S])){const ae=O(J[S]);if(ae)return[J].concat(ae)}}};return O(i)};const Wr=i=>++i;var ar=()=>{const[,i]=(0,q.useState)(0);return(0,q.useCallback)(()=>i(Wr),[])};const yr=i=>{const{children:s,open:h}=i;let S=0;if(h&&(s==null?void 0:s.length)){S=s.length;let O=0;return s.map(D=>O+=yr(D)),S+O}return S};var Ur=({item:i,style:s,...h})=>(0,a.jsx)("ul",{style:{...s,"--count":yr(i)},...h}),Tr=re(435),lr={};lr.styleTagTransform=B(),lr.setAttributes=A(),lr.insert=p().bind(null,"head"),lr.domAPI=g(),lr.insertStyleElement=U();var Qr=c()(Tr.Z,lr),eo=Tr.Z&&Tr.Z.locals?Tr.Z.locals:void 0;const qr=i=>(0,a.jsx)("ul",{...i}),Xr=(i,s)=>i?Ur:({item:h,...S})=>(0,a.jsx)(qr,{className:s==="right"?"left":"",...S});var Gr=i=>{var s;const{data:h=[],collapsed:S=!1,type:O="vertical",Link:D,width:R,bgColor:ee,itemHeight:J,collapsedWidth:ae,itemPadding:xe,style:ye,className:fe,...Le}=i,Pe=(0,q.useRef)(),he=(0,q.useRef)();(0,q.useEffect)(()=>()=>clearTimeout(Pe.current),[]);const Ye=ar(),Fe=O==="horizontal",Ne=!Fe&&S,Bt={onClick:(Rt,$t)=>{if(Rt.stopPropagation(),!Fe&&!Ne){const ct=ir(h,$t.path,"path"),Jt=ct[ct.length-1];Jt.open=!Jt.open,Ye()}},onMouseEnter:(Rt,$t,ct)=>{Ne&&!ct&&(clearTimeout(Pe.current),he.current.style.width="var(--maxWidth)")},onMouseLeave:(Rt,$t,ct)=>{Ne&&!ct&&(Pe.current=setTimeout(()=>he.current.style.width="",200))}},sr=(Fe?["huxy-horizontal-tree",fe]:["huxy-tree",fe,Ne?"collapsed":""]).filter(Boolean).join(" "),{float:Xt,...Gt}=(s=Le==null?void 0:Le.style)!=null?s:{},wt={"--bgColor":ee,"--itemHeight":J,"--nodeListWidth":R,...Gt};Fe?(wt["--itemPadding"]=xe,wt["--nodeFloat"]=Xt):(wt["--width"]=R,wt["--collapsedWidth"]=ae);const ur=Xr(!Fe&&!Ne,Xt);return(0,a.jsx)("div",{ref:he,className:sr,style:wt,...Le,children:(0,a.jsx)("div",{className:"huxy-tree-track",children:(0,a.jsx)("ul",{className:"huxy-tree-root",children:pr({data:h,events:Bt,List:ur,Link:D,leftIcon:!0,rightIcon:!0,isHorizontal:Fe,isCollapsed:Ne})})})})}}(),y}()})},4544:function(Ft,pe,He){(function(_e,ze){Ft.exports=ze(He(7378))})(this,function(_e){return function(){"use strict";var ze={201:function(y,a,x){var c=x(703),w=x.n(c),g=x(414),E=x.n(g),p=E()(w());p.push([y.id,`@keyframes before {
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
`,""]),p.locals={},a.Z=p},982:function(y,a,x){var c=x(703),w=x.n(c),g=x(414),E=x.n(g),p=E()(w());p.push([y.id,`.Iuy_e {
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
`,""]),p.locals={link:"Iuy_e",active:"D3oJg"},a.Z=p},414:function(y){y.exports=function(a){var x=[];return x.toString=function(){return this.map(function(c){var w="",g=typeof c[5]!="undefined";return c[4]&&(w+="@supports (".concat(c[4],") {")),c[2]&&(w+="@media ".concat(c[2]," {")),g&&(w+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),w+=a(c),g&&(w+="}"),c[2]&&(w+="}"),c[4]&&(w+="}"),w}).join("")},x.i=function(c,w,g,E,p){typeof c=="string"&&(c=[[null,c,void 0]]);var z={};if(g)for(var A=0;A<this.length;A++){var V=this[A][0];V!=null&&(z[V]=!0)}for(var U=0;U<c.length;U++){var F=[].concat(c[U]);g&&z[F[0]]||(typeof p!="undefined"&&(typeof F[5]=="undefined"||(F[1]="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {").concat(F[1],"}")),F[5]=p),w&&(F[2]&&(F[1]="@media ".concat(F[2]," {").concat(F[1],"}")),F[2]=w),E&&(F[4]?(F[1]="@supports (".concat(F[4],") {").concat(F[1],"}"),F[4]=E):F[4]="".concat(E)),x.push(F))}},x}},703:function(y){y.exports=function(a){return a[1]}},53:function(y,a,x){var c,w=x(899),g=Symbol.for("react.element"),E=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,z=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function V(U,F,B){var Z,te={},me=null,ve=null;B!==void 0&&(me=""+B),F.key!==void 0&&(me=""+F.key),F.ref!==void 0&&(ve=F.ref);for(Z in F)p.call(F,Z)&&!A.hasOwnProperty(Z)&&(te[Z]=F[Z]);if(U&&U.defaultProps)for(Z in F=U.defaultProps,F)te[Z]===void 0&&(te[Z]=F[Z]);return{$$typeof:g,type:U,key:me,ref:ve,props:te,_owner:z.current}}c=E,a.jsx=V,a.jsxs=V},458:function(y,a,x){y.exports=x(53)},748:function(y){var a=[];function x(g){for(var E=-1,p=0;p<a.length;p++)if(a[p].identifier===g){E=p;break}return E}function c(g,E){for(var p={},z=[],A=0;A<g.length;A++){var V=g[A],U=E.base?V[0]+E.base:V[0],F=p[U]||0,B="".concat(U," ").concat(F);p[U]=F+1;var Z=x(B),te={css:V[1],media:V[2],sourceMap:V[3],supports:V[4],layer:V[5]};if(Z!==-1)a[Z].references++,a[Z].updater(te);else{var me=w(te,E);E.byIndex=A,a.splice(A,0,{identifier:B,updater:me,references:1})}z.push(B)}return z}function w(g,E){var p=E.domAPI(E);p.update(g);var z=function(A){if(A){if(A.css===g.css&&A.media===g.media&&A.sourceMap===g.sourceMap&&A.supports===g.supports&&A.layer===g.layer)return;p.update(g=A)}else p.remove()};return z}y.exports=function(g,E){E=E||{},g=g||[];var p=c(g,E);return function(z){z=z||[];for(var A=0;A<p.length;A++){var V=p[A],U=x(V);a[U].references--}for(var F=c(z,E),B=0;B<p.length;B++){var Z=p[B],te=x(Z);a[te].references===0&&(a[te].updater(),a.splice(te,1))}p=F}}},736:function(y){var a={};function x(w){if(typeof a[w]=="undefined"){var g=document.querySelector(w);if(window.HTMLIFrameElement&&g instanceof window.HTMLIFrameElement)try{g=g.contentDocument.head}catch(E){g=null}a[w]=g}return a[w]}function c(w,g){var E=x(w);if(!E)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");E.appendChild(g)}y.exports=c},706:function(y){function a(x){var c=document.createElement("style");return x.setAttributes(c,x.attributes),x.insert(c,x.options),c}y.exports=a},567:function(y,a,x){function c(w){var g=x.nc;g&&w.setAttribute("nonce",g)}y.exports=c},306:function(y){function a(w,g,E){var p="";E.supports&&(p+="@supports (".concat(E.supports,") {")),E.media&&(p+="@media ".concat(E.media," {"));var z=typeof E.layer!="undefined";z&&(p+="@layer".concat(E.layer.length>0?" ".concat(E.layer):""," {")),p+=E.css,z&&(p+="}"),E.media&&(p+="}"),E.supports&&(p+="}");var A=E.sourceMap;A&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),g.styleTagTransform(p,w,g.options)}function x(w){if(w.parentNode===null)return!1;w.parentNode.removeChild(w)}function c(w){var g=w.insertStyleElement(w);return{update:function(E){a(g,w,E)},remove:function(){x(g)}}}y.exports=c},62:function(y){function a(x,c){if(c.styleSheet)c.styleSheet.cssText=x;else{for(;c.firstChild;)c.removeChild(c.firstChild);c.appendChild(document.createTextNode(x))}}y.exports=a},899:function(y){y.exports=_e}},be={};function K(y){var a=be[y];if(a!==void 0)return a.exports;var x=be[y]={id:y,exports:{}};return ze[y](x,x.exports,K),x.exports}(function(){K.n=function(y){var a=y&&y.__esModule?function(){return y.default}:function(){return y};return K.d(a,{a}),a}})(),function(){K.d=function(y,a){for(var x in a)K.o(a,x)&&!K.o(y,x)&&Object.defineProperty(y,x,{enumerable:!0,get:a[x]})}}(),function(){K.o=function(y,a){return Object.prototype.hasOwnProperty.call(y,a)}}(),function(){K.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})}}(),function(){K.nc=void 0}();var re={};return function(){K.r(re),K.d(re,{Link:function(){return Ar},emitRoute:function(){return Br},getRoute:function(){return Lr},useRoute:function(){return zr},useRouter:function(){return Vt}});var y=K(899),a=K.n(y),x=l=>Object.prototype.toString.call(l).slice(8,-1).toLowerCase(),c=l=>x(l)==="array",w=l=>x(l)==="object",g=l=>(l==null?void 0:l.$$typeof)&&typeof l.$$typeof=="symbol"&&l.$$typeof.description==="react.element",E=l=>l==null?void 0:l.__v_isVNode,p=(l,f)=>Object.prototype.hasOwnProperty.call(l!=null?l:{},f);const z=l=>{if(!c(l)&&!w(l))return l;const f=c(l)?[]:{};for(const C in l)if(p(l,C)){const b=l[C];f[C]=g(b)||E(b)||typeof b!="object"?b:b!==l?z(b):"cyclic"}else Object.setPrototypeOf(f,{[C]:l[C]});return f};var A=z,V=l=>x(l)==="function",U=l=>x(l)==="promise"||w(l)&&V(l.then),F=(l,f=12e4,C="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!U(l))return{};let b=null,m=null;return{promiseFn:new Promise((N,Y)=>{b=(W="canceled")=>{clearTimeout(m),N({canceled:!0,errMsg:W})},f&&(f=typeof f!="number"?12e4:f,m=setTimeout(()=>b(C),f)),l.then(W=>{clearTimeout(m),N({result:W,errMsg:!1})}).catch(W=>{clearTimeout(m),Y(W)})}),cancelFn:b}},B=l=>l?l.charAt(l.length-1)==="/"?l.slice(0,-1):l:"",Z=K(458),te=(l,f)=>(0,Z.jsx)("div",{dangerouslySetInnerHTML:{__html:l},...f}),me=l=>{const{error:f={},info:C=""}=l||{},{message:b,stack:m,errMsg:N}=f;let Y=N||m||f.toString();Y=`${Y}
${C}`.replace(/\r|\n|\r\n/g,"<br/>"),Y=Y.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Y=Y.replace(/\s/g,"&nbsp;");const W=b==null?void 0:b.slice(0,120).split(". ").slice(0,2).join(". ");return(0,Z.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[te(Y,{style:{color:"red"}}),W&&(0,Z.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${W}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},ve=()=>{const l={};return{on:(f,C)=>{l[f]||(l[f]=[]),l[f].indexOf(C)===-1&&l[f].push(C)},emit:(f,C)=>{l[f]&&l[f].map(b=>b(C))},off:(f,C=null)=>{if(l[f]){if(typeof C!="function")return l[f]=[];const b=l[f].indexOf(C);b>-1&&l[f].splice(b,1)}}}};const Ge=l=>{const f={};for(let C in l)p(l,C)||(f[C]=l[C]);return f};var nt=(l,f)=>{if(!w(l))return f;if(!w(f))return l;const C={...Ge(l),...Ge(f)},b={...l,...f};return Object.keys(C).map(m=>{Object.setPrototypeOf(b,{[m]:C[m]})}),b},q=()=>{const{on:l,emit:f,off:C}=ve(),b={};return{getState:m=>A(b[m]),setState:(m,N=!1)=>{if(typeof m=="function"&&(m=m(A(b))),!w(m))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const Y=A(m);Object.keys(Y).map(W=>{const M=b[W],_=Y[W],ne=w(_)&&w(M)?nt(M,_):_;!N&&f(W,ne),b[W]=ne})},subscribe:(m,N)=>(l(m,N),()=>C(m,N)),unsubscribe:C,clean:m=>{typeof m=="string"?b[m]=void 0:Array.isArray(m)?m.map(N=>b[N]=void 0):Object.keys(b).map(N=>b[N]=void 0)}}},Ze=l=>(f,C)=>{const[b,m]=(0,y.useState)(()=>{const M=l==null?void 0:l.getState(f);return M!==void 0?M:(C!==void 0&&(l==null||l.setState({[f]:C},!0)),C)}),N=(0,y.useCallback)(M=>l==null?void 0:l.setState({[f]:typeof M=="function"?M(l==null?void 0:l.getState(f)):M}),[]),Y=(0,y.useCallback)(M=>l==null?void 0:l.subscribe(f,M),[]),W=(0,y.useCallback)((M=M)=>l==null?void 0:l.clean(M),[]);return(0,y.useEffect)(()=>{l==null||l.subscribe(f,M=>m(M))},[]),[b,N,Y,W]};const Ie=q(),Ue=Ze(Ie),Wt=ve(),it=ve(),dt="push-emitter",L="replace-emitter",ie="useRoute-emitter",X={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},we="/404",$e={getState:()=>history.state,go:l=>history.go(l),forward:()=>history.forward(),back:()=>history.back()},Qe=(l,f,C,b,m=[])=>{const N=M=>{for(let _=0,ne=M.length;_<ne;_++){const ke=M[_],je=ke[b].split("?")[0];if(new RegExp("^"+je.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return ke;if(c(ke[C])){const se=N(ke[C]);if(se)return se}}},Y=N(l);if(!Y)return we;const{redirect:W}=Y;return W?m.includes(W)?m:(m.push(W),Qe(l,W.split("?")[0],C,b,m)):m[m.length-1]},qe=(l,f,C,b,m)=>{if(!c(l))return null;const N=ne=>{const ke=ne.split("/"),je=f.split("/"),se={};return ke.map((de,Ce)=>de.indexOf(":")===0&&(se[de.slice(1)]=je[Ce])),se},Y=(ne,ke)=>{const je=[],se=ke.split("/:")[0];for(let de=0,Ce=ne.length;de<Ce;de++){const ue=ne[de];if(ue[m]===se){ue.active=!0;const{name:Q,title:Ee,icon:Oe,params:Me}=ue;je.push({name:Q,title:Ee,icon:Oe,params:Me,[m]:se})}else if(ke.indexOf(`${ue[m]}/`)===0){ue.active=!0;const Q=N(ue[m]),Ee=Object.keys(Q).map(At=>Q[At]).join("/"),{name:Oe,title:Me,icon:Re}=ue,Ae=Ee?`${se}/${Ee}`:ue[m];je.push({name:Oe,title:Me,icon:Re,[m]:Ae,params:{...ue.params,...Q}})}else if(ue[m]===ke){ue.active=!0;const Q=N(ue[m]),{[b]:Ee,...Oe}=ue;je.push({...Oe,[m]:f,params:{...Oe.params,...C,...Q}})}}return je},W=(ne,ke)=>{for(let je=0,se=ne.length;je<se;je++){const de=ne[je];if(ke.indexOf(`${de[m]}/`)===0){de.active=!0;return}}},M=ne=>{for(let ke=0,je=ne.length;ke<je;ke++){const se=ne[ke],de=(se[m]||"").split("?")[0];if(de===f){se.hideMenu&&W(ne,se.parentPath||de),se.active=!0;const{[b]:Ce,...ue}=se;return[{...ue,params:{...ue.params,...C}}]}if(new RegExp("^"+de.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return Y(ne,de);if(c(se[b])){const Ce=M(se[b]);if(Ce){se.active=!0,se.open=!0;const{[b]:ue,...Q}=se;return[Q,...Ce]}}}},_=M(l)||[];return{result:l,current:_}},Je=(l,f,C)=>l.filter(b=>b.hideMenu||b[C].indexOf("/:")>-1?!1:(c(b[f])&&(b[f]=Je(b[f],f,C)),!0));var De=(l,f,C,b="children",m="path")=>{const N=Qe(l,f,b,m);if(N)return{redirect:N};const{result:Y,current:W}=qe(l,f,C,b,m),M=Je(Y,b,m);return{current:W,menu:M}},Ke=l=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(l);const et=(l,f)=>{const C=["#/","/"],b=C[!!f-0];if(!l||C.includes(l))return b;const m=l.charAt(l.length-1)==="/"?l.slice(0,-1):l;return f||m.indexOf("#/")>-1?m:`#${m}`},Tt=(l,f,C,b=!1)=>{const m=et(f,C);return b?m:C?l&&m==="/"?l:`${l}${m}`:l?`${l}/${m}`:m},yt=(l,f,C,b,m,N)=>{if(!c(l))return l;const Y=(W,M="")=>W.filter(_=>!_.denied).map(_=>{if(!N&&!_.exact&&!Ke(_[b])){(!_[b]||_[b]==="javascript:;")&&(_[b]="");const ne=_[b].charAt(0)==="/"&&M.charAt(M.length-1)==="/"?_[b].slice(1):_[b].charAt(0)!=="/"&&M.charAt(M.length-1)!=="/"?`/${_[b]}`:_[b];_[b]=M?M+ne:Tt(m,ne,f)}return _.redirect&&(_.redirect=Tt(m,_.redirect,f)),c(_[C])&&(_[C]=Y(_[C],_[b]),!_.redirect&&_[C].length&&(_.redirect=_[C][0][b])),_});return Y(l)};var Ot=l=>{if(!w(l))return"";const f=[];return Object.keys(l).map((C,b)=>{const m=b>0?"&":"?";f.push(`${m}${C}=${l[C]}`)}),f.join("")},kt=(l="")=>{const[f,C]=l.split("?");if(C){const b={};return C.split("&").map(m=>{const[N,Y]=m.split("=");b[N]=Y}),{path:f,params:b}}return{path:f}};const Qt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Mt=(l,f)=>{for(let C=l.length-1,b;b=l[C--];){const{title:m,name:N}=b;if(typeof m=="string"&&m.length)return document.title=m;if((m==null||m===!0)&&N)return document.title=f?`${N}-${f}`:N;if(f)return document.title=f}},Ct=l=>{const{pathname:f,search:C,hash:b}=location;if(l){const W=et(f,l),M=decodeURIComponent(`${W}${C}`),{params:_}=kt(M);return{path:M,params:_}}const m=decodeURIComponent(et(b,l)),{params:N}=kt(m),Y=B(f);return{path:Y?`${Y}/${m}`:m,params:N}},Pt=(l,f,C)=>{typeof l=="function"&&l({...f,stay:new Date-C})},tt=(l,f,C,b)=>{let m,N,Y;if(typeof l=="string")m=l;else if(w(l))m=l.path,N=l.params,Y=l.query;else return;!m||m==="."||m==="./"?m=b:m.indexOf("./")===0?m=`${b.split("?")[0]}${m.replace("./","/")}`:m.indexOf("../")===0&&(m=`${b.split("?")[0].split("/").slice(0,-1).join("/")}${m.replace("../","/")}`),m=Tt(f,m,C,l==null?void 0:l.exact);const W=kt(m);m=W.path;const M={...W.params,...Y},_=Ot(M);return m=`${m}${_}`,N={...N,...M},{path:m,params:N}},er=(l,f)=>{const C=l.split(f);return C.length>1?["","/"].includes(C[1].slice(0,1)):!1},cr=ve();var at=l=>{const{on:f,emit:C,off:b}=cr;return{on:m=>f(l,m),emit:m=>C(l,m),off:m=>b(l,m)}},Nt=l=>(f,C)=>{const{getState:b,setState:m,subscribe:N,unsubscribe:Y,clean:W}=l;return C!==void 0&&m({[f]:C},!0),{getState:()=>b(f),setState:(M,_)=>m({[f]:M},_),subscribe:M=>N(f,M),unsubscribe:()=>Y(f),clean:()=>W(f)}};const gt=q();var Or=Nt(gt);const rt=at("push-emitter"),Zt=at("replace-emitter"),ft=Or("route-store"),tr=ve(),rr=q(),ht=Ze(rr);var u=()=>![typeof window,typeof document].includes("undefined"),v=l=>{if(!u())return;const f=document.createElement("div");return f.innerHTML=l,f.children[0]},j=Object.defineProperty,T=(l,f,C)=>f in l?j(l,f,{enumerable:!0,configurable:!0,writable:!0,value:C}):l[f]=C,P=(l,f,C)=>(T(l,typeof f!="symbol"?f+"":f,C),C);class G extends a().Component{constructor(){super(...arguments),P(this,"state",{error:null})}static getDerivedStateFromError(f){return{error:f}}componentDidCatch(f,C){const{errorReport:b}=this.props;typeof b=="function"&&b({error:f,info:C.componentStack})}render(){const{error:f}=this.state,{fallback:C,children:b}=this.props;return f?C(f):b}}var ce=({children:l,report:f})=>{var C;const b=(0,y.useRef)();return(C=b.current)!=null&&C.state&&(b.current.state.error=null),(0,Z.jsx)(G,{ref:b,fallback:(m,N)=>me({error:m,info:N}),errorReport:f,children:l})},le=K(748),oe=K.n(le),Te=K(306),ot=K.n(Te),jt=K(736),lt=K.n(jt),Be=K(567),It=K.n(Be),Dt=K(706),pt=K.n(Dt),bt=K(62),mt=K.n(bt),Ve=K(201),Yt={};Yt.styleTagTransform=mt(),Yt.setAttributes=It(),Yt.insert=lt().bind(null,"head"),Yt.domAPI=ot(),Yt.insertStyleElement=pt();var Pr=oe()(Ve.Z,Yt),dr=Ve.Z&&Ve.Z.locals?Ve.Z.locals:void 0,br=({global:l,absolute:f})=>(0,Z.jsx)("div",{className:`spinner${l?" global":""}${f?" absolute":""}`,children:(0,Z.jsx)("figure",{className:"spinning"})}),Nr=()=>{const l=(0,y.useRef)([]);return(0,y.useEffect)(()=>()=>{l.current.map(f=>f.cancelFn()),l.current=[]},[]),{cancelablePromise:(0,y.useCallback)((f,C=!0)=>{const b=F(f,C);return l.current.indexOf(b)===-1&&l.current.push(b),b.promiseFn},[])}},vr=(l={})=>{const{cancelablePromise:f}=Nr(),[C,b]=(0,y.useState)(l),m=(0,y.useRef)({}),N=(0,y.useRef)({}),Y=(0,y.useCallback)((M=null)=>{Array.isArray(M)&&M.length?M.map(_=>m.current[_]=l[_]):m.current=l},[]),W=(0,y.useCallback)((M,_,ne=!1)=>{const ke=Object.keys(M),je=JSON.stringify(ke.sort());if(!N.current[je]){N.current[je]=!0,ne&&Y(Array.isArray(ne)?ne:ke),ke.map(se=>{m.current[se]||(m.current[se]={}),m.current[se].pending=!0}),b({...m.current});for(let se=0,de=ke.length;se<de;se++){const Ce=ke[se];f(M[Ce]).then(ue=>{let{result:Q,errMsg:Ee}=ue;se===de-1&&(N.current[je]=!1),typeof _=="function"&&(Q=_(Q)||Q),m.current[Ce]={...Q,pending:!1},Ee===!1&&b({...m.current})}).catch(ue=>{throw se===de-1&&(N.current[je]=!1),m.current[Ce]={error:ue,pending:!1},b({...m.current}),ue})}}},[]);return[C,W,Y]};const Ht=l=>Object.keys(l).length;var wr=l=>{const{Comp:f,restResolve:C,loadPromise:b,params:m,children:N}=l,[Y,W]=vr(),[M,_]=vr();return(0,y.useEffect)(()=>{Ht(C)&&W(C),Ht(b)&&_(b)},[C,b]),(0,y.useEffect)(()=>{const ne=Ht(Y);ne&&ne===Ht(C)&&m.store.setState(Y)},[Y]),(0,Z.jsx)(f,{...m,...Y,...M,children:N})};const kr=l=>l===!1?null:g(l)?l:V(l)?(0,Z.jsx)(l,{}):(0,Z.jsx)(br,{}),Cr=({Loading:l,ErrorBoundary:f,loadedComp:C})=>{const b=(0,Z.jsx)(y.Suspense,{fallback:kr(l),children:C});return f===!1?b:V(f)?(0,Z.jsx)(f,{children:b}):(0,Z.jsx)(ce,{children:b})};var jr=({Comp:l,routerProps:f,children:C})=>{const{params:b,...m}=f,{loading:N,errorBoundary:Y,...W}=b,M=(0,Z.jsx)(wr,{Comp:l,...m,params:W,children:C});return Cr({Loading:N,ErrorBoundary:Y,loadedComp:M})};const fr={},_t=(l,f,C,b)=>U(C)?C.then(m=>{var N;return jr({Comp:l,routerProps:f,children:(N=m.default)!=null?N:m})}):jr({Comp:l,routerProps:f,children:C}),Ir=(l,f,C)=>{const b={},m={};return w(l)?(Object.keys(l).map(N=>{const Y=f.getState(N);Y==null?m[N]=l[N](C):b[N]=Y}),{cachedResolve:b,restResolve:m}):{cachedResolve:b,restResolve:m}},Dr=(l,f)=>{if(!w(l))return{};const C={};return Object.keys(l).map(b=>C[b]=l[b](f)),C};var _r=l=>{const{current:f,menu:C,...b}=l,m=f.map(W=>{const{component:M,resolve:_,loadData:ne,loading:ke,errorBoundary:je,icon:se,...de}=W;return de}),N=[...f].filter(W=>W.component),Y=(W=0)=>{if(!N.length)return null;const M=N.shift(),{component:_,resolve:ne,loadData:ke,icon:je,key:se,...de}=M;if(typeof _=="function"||U(_)){const Ce=de.path;let ue=fr[Ce];const{cachedResolve:Q,restResolve:Ee}=Ir(ne,b.store,de),Oe={loadPromise:Dr(ke,de),restResolve:Ee,params:{current:m,...b,...de,...Q}},Me=Y(W+1);if(ue)return _t(ue,Oe,Me,Ce);try{ue=_(),ue=g(ue)?_:ue}catch(Re){ue=_}return U(ue)?ue.then(Re=>{var Ae;return ue=(Ae=Re.default)!=null?Ae:Re,fr[Ce]=ue,_t(ue,Oe,Me,Ce)}):(fr[Ce]=ue,_t(ue,Oe,Me,Ce))}return typeof _=="string"?v(_):_};return Y()},Vt=l=>{const[f,C]=(0,y.useState)(l),[b,m]=(0,y.useState)(),[N,Y]=(0,y.useState)(),W=(0,y.useRef)(),M=(0,y.useRef)(),_=(0,y.useRef)(),ne=(0,y.useRef)(),ke=()=>{typeof W.current=="function"&&(W.current({cancel:X.cancelMsg}),W.current=null)},je=(0,y.useCallback)(Q=>{typeof Q=="function"?C(Ee=>({...Ee,...Q(Ee)})):w(Q)&&C(Ee=>({...Ee,...Q}))},[]),se=(Q,Ee="pushState")=>{const{basepath:Oe,browserRouter:Me}=ne.current,Re=_.current,{path:Ae,params:At}=tt(Q,Oe,Me,Re);Ae!==Re&&ue({inputPath:Ae,inputParams:At},()=>history[Ee](Q==null?void 0:Q.state,"",Ae))},de=(0,y.useCallback)(Q=>se(Q),[]),Ce=(0,y.useCallback)(Q=>se(Q,"replaceState"),[]),ue=(0,y.useCallback)(({inputPath:Q="",inputParams:Ee={}},Oe)=>{const Me=+new Date,{browserRouter:Re,childKey:Ae,idKey:At,title:nr,routers:St,beforeRender:Lt,afterRender:zt,basepath:qt,allowedNotFound:xt,...hr}=ne.current;if(!Q){const{path:Xe,params:vt}=Ct(Re);Q=Xe,Ee={...Ee,...vt}}new Promise((Xe,vt)=>{St!=null&&St.length||vt("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),Q!==_.current&&typeof Lt=="function"?Lt({path:Q,params:Ee,prevPath:_.current},Xe,vt):Xe()}).then(Xe=>{var vt,pr;if(Xe===!1)return;const $r=Xe==null?void 0:Xe.path;if($r&&Tt(qt,$r,Re)!==Q){Ce(Xe);return}M.current=(vt=M.current)!=null?vt:Q;const{redirect:st,current:ut,menu:Yr}=De(A(St),Q.split("?")[0],Ee,Ae,At);if(st){if(xt&&st===we&&(typeof xt=="boolean"||typeof xt=="string"&&er(M.current,xt)||c(xt)&&xt.find(xr=>er(M.current,xr))))return;if(c(st)){console.error(`\u522B\u95F9\uFF0C[${[Q,...st].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return st===we?Ce({path:st}):de({path:st,exact:!0})}Oe==null||Oe(),(Q==null?void 0:Q.split("?")[0])!==((pr=_.current)==null?void 0:pr.split("?")[0])&&Qt(),Mt(ut,nr);const Fr={eventBus:tr,store:rr,useStore:ht,...hr,updateRouter:je,emitRouter:ft.subscribe,router:{push:de,replace:Ce},current:ut,menu:Yr,inputPath:M.current,prevPath:_.current,basepath:qt,title:nr,history:$e};ft.setState({...Fr,browserRouter:Re});const mr=_r(Fr);if(_.current=Q,M.current=null,ke(),U(mr)){const{promiseFn:xr,cancelFn:Rr}=F(mr,{delay:X.delay,msg:{timeout:X.timeoutMsg}});return W.current=Rr,Y(!0),xr.then(ir=>{W.current=null;const{result:Wr,errMsg:ar}=ir,yr=ar===!1?Wr:ar!=null&&ar.timeout?me({error:{errMsg:`${Q} ${ar.timeout}`}}):null;yr&&(Y(!1),Pt(zt,ut.slice(-1)[0],Me),m(yr))}).catch(ir=>{throw W.current=null,Y(!1),Pt(zt,ut.slice(-1)[0],Me),m(me({error:ir})),ir})}Pt(zt,ut.slice(-1)[0],Me),m(mr)}).catch(Xe=>{throw m(me({error:Xe})),Xe})},[]);return(0,y.useEffect)(()=>{const{childKey:Q="children",idKey:Ee="path",browserRouter:Oe=!1,routers:Me=[],basepath:Re="",exact:Ae=!1,inputPath:At="",inputParams:nr={},...St}=f,Lt=B(Re),zt=yt(A(Me),Oe,Q,Ee,Lt,Ae);ne.current={...St,childKey:Q,idKey:Ee,browserRouter:Oe,routers:zt,basepath:Lt};const qt=Oe?"popstate":"hashchange",xt=()=>ue({});return ue({inputPath:At,inputParams:nr}),rt.on(de),Zt.on(Ce),window.addEventListener(qt,xt,!1),()=>{ke(),rt.off(de),Zt.off(Ce),window.removeEventListener(qt,xt,!1)}},[f]),{updateRouter:je,output:b,loading:N}},Er=l=>{const{to:f,onClick:C,preventDefault:b,stopPropagation:m=!0,exact:N=!0,target:Y,...W}=l,M=()=>{const _=typeof f=="string"?{exact:N,path:f}:{exact:N,...f};rt.emit(_)};return _=>{var ne;if(_.preventDefault(),m&&_.stopPropagation(),!(W!=null&&W.disabled)){if(!b){if(Y){const{browserRouter:ke}=ft.getState(),je=typeof f=="string"?f:(ne=f==null?void 0:f.path)!=null?ne:"",se=Ot(f==null?void 0:f.query),de=ke||je.indexOf("#/")>-1||Ke(je);window==null||window.open(`${de?"":"#"}${je}${se}`,Y);return}M()}typeof C=="function"&&C()}}},Ut=K(982),Et={};Et.styleTagTransform=mt(),Et.setAttributes=It(),Et.insert=lt().bind(null,"head"),Et.domAPI=ot(),Et.insertStyleElement=pt();var Zr=oe()(Ut.Z,Et),or=Ut.Z&&Ut.Z.locals?Ut.Z.locals:void 0;const Sr=l=>{if(!l)return or.link;const f=l.trim().split(" ").filter(Boolean),C=f.find(b=>b==="active")?[or.active]:[];return[or.link,...C,...f].join(" ")};var Ar=l=>{const{to:f,onClick:C,preventDefault:b,stopPropagation:m,exact:N,target:Y,className:W,...M}=l;return(0,Z.jsx)("span",{onClick:Er(l),className:Sr(W),...M})},zr=()=>{const[l,f]=(0,y.useState)(ft.getState());return(0,y.useEffect)(()=>ft.subscribe(C=>f(C)),[]),l};const Lr=ft.getState,Br=ft.subscribe}(),re}()})},2445:function(Ft,pe,He){(function(_e,ze){Ft.exports=ze(He(7378))})(this,function(_e){return function(){"use strict";var ze={53:function(y,a,x){var c,w=x(899),g=Symbol.for("react.element"),E=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,z=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function V(U,F,B){var Z,te={},me=null,ve=null;B!==void 0&&(me=""+B),F.key!==void 0&&(me=""+F.key),F.ref!==void 0&&(ve=F.ref);for(Z in F)p.call(F,Z)&&!A.hasOwnProperty(Z)&&(te[Z]=F[Z]);if(U&&U.defaultProps)for(Z in F=U.defaultProps,F)te[Z]===void 0&&(te[Z]=F[Z]);return{$$typeof:g,type:U,key:me,ref:ve,props:te,_owner:z.current}}c=E,a.jsx=V,c=V},458:function(y,a,x){y.exports=x(53)},899:function(y){y.exports=_e}},be={};function K(y){var a=be[y];if(a!==void 0)return a.exports;var x=be[y]={exports:{}};return ze[y](x,x.exports,K),x.exports}(function(){K.d=function(y,a){for(var x in a)K.o(a,x)&&!K.o(y,x)&&Object.defineProperty(y,x,{enumerable:!0,get:a[x]})}})(),function(){K.o=function(y,a){return Object.prototype.hasOwnProperty.call(y,a)}}(),function(){K.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})}}();var re={};return function(){K.r(re),K.d(re,{createContainer:function(){return a},useAsync:function(){return z},useCancelablePromise:function(){return p},useClickAway:function(){return U},useDebounce:function(){return B},useDelayState:function(){return me},useEleResize:function(){return Ue},useEvent:function(){return Wt},useFirstMounted:function(){return Z},useInterval:function(){return it},usePrevious:function(){return dt},useRaf:function(){return Ie},useScroll:function(){return ie},useSearch:function(){return kt},useStateFromProps:function(){return Qt},useStore:function(){return cr},useTime:function(){return ft},useUpdate:function(){return rr},useUpdateEffect:function(){return te},useWinResize:function(){return ht}});var y=K(899),a=u=>(v,j)=>{const[T,P]=(0,y.useState)(()=>{const oe=u==null?void 0:u.getState(v);return oe!==void 0?oe:(j!==void 0&&(u==null||u.setState({[v]:j},!0)),j)}),G=(0,y.useCallback)(oe=>u==null?void 0:u.setState({[v]:typeof oe=="function"?oe(u==null?void 0:u.getState(v)):oe}),[]),ce=(0,y.useCallback)(oe=>u==null?void 0:u.subscribe(v,oe),[]),le=(0,y.useCallback)((oe=oe)=>u==null?void 0:u.clean(oe),[]);return(0,y.useEffect)(()=>{u==null||u.subscribe(v,oe=>P(oe))},[]),[T,G,ce,le]},x=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),c=u=>x(u)==="object",w=u=>x(u)==="function",g=u=>x(u)==="promise"||c(u)&&w(u.then),E=(u,v=12e4,j="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!g(u))return{};let T=null,P=null;return{promiseFn:new Promise((G,ce)=>{T=(le="canceled")=>{clearTimeout(P),G({canceled:!0,errMsg:le})},v&&(v=typeof v!="number"?12e4:v,P=setTimeout(()=>T(j),v)),u.then(le=>{clearTimeout(P),G({result:le,errMsg:!1})}).catch(le=>{clearTimeout(P),ce(le)})}),cancelFn:T}},p=()=>{const u=(0,y.useRef)([]);return(0,y.useEffect)(()=>()=>{u.current.map(v=>v.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,y.useCallback)((v,j=!0)=>{const T=E(v,j);return u.current.indexOf(T)===-1&&u.current.push(T),T.promiseFn},[])}},z=(u={})=>{const{cancelablePromise:v}=p(),[j,T]=(0,y.useState)(u),P=(0,y.useRef)({}),G=(0,y.useRef)({}),ce=(0,y.useCallback)((oe=null)=>{Array.isArray(oe)&&oe.length?oe.map(Te=>P.current[Te]=u[Te]):P.current=u},[]),le=(0,y.useCallback)((oe,Te,ot=!1)=>{const jt=Object.keys(oe),lt=JSON.stringify(jt.sort());if(!G.current[lt]){G.current[lt]=!0,ot&&ce(Array.isArray(ot)?ot:jt),jt.map(Be=>{P.current[Be]||(P.current[Be]={}),P.current[Be].pending=!0}),T({...P.current});for(let Be=0,It=jt.length;Be<It;Be++){const Dt=jt[Be];v(oe[Dt]).then(pt=>{let{result:bt,errMsg:mt}=pt;Be===It-1&&(G.current[lt]=!1),typeof Te=="function"&&(bt=Te(bt)||bt),P.current[Dt]={...bt,pending:!1},mt===!1&&T({...P.current})}).catch(pt=>{throw Be===It-1&&(G.current[lt]=!1),P.current[Dt]={error:pt,pending:!1},T({...P.current}),pt})}}},[]);return[j,le,ce]},A=(u,v)=>Object.prototype.hasOwnProperty.call(u!=null?u:{},v),V=u=>A(u,"current"),U=(u,v,j="click")=>{(0,y.useEffect)(()=>{const T=G=>{const ce=V(u)?u.current:u;(ce==null?void 0:ce.contains)&&!ce.contains(G.target)&&v(G)},P=typeof j=="string"?[j]:j;return P.map(G=>{document.addEventListener(G,T,!1)}),()=>{P.map(G=>{document.removeEventListener(G,T,!1)})}},[u,v,j])},F=(u=()=>{},v=60)=>{let j=null;return function(...T){clearTimeout(j),j=setTimeout(()=>u.apply(this,T),v)}},B=(u,v=60)=>(0,y.useMemo)(()=>F(u,v),[v]),Z=()=>{const u=(0,y.useRef)(!0);return u.current?(u.current=!1,!0):!1},te=(u,v=[])=>{const j=Z();(0,y.useEffect)(()=>{if(!j)return u()},v)},me=(u,v=450)=>{const[j,T]=(0,y.useState)(u);return te(()=>{let P;return u||v===0?T(u):P=setTimeout(()=>T(u),v),()=>P&&clearTimeout(P)},[u]),[j,T]},ve=()=>![typeof window,typeof document].includes("undefined"),Ge=u=>x(u).indexOf("element")>-1,nt=(u=null)=>{var v,j;return ve()?Ge(u)?{width:u.clientWidth,height:u.clientHeight}:{width:(v=window.innerWidth)!=null?v:document.documentElement.clientWidth,height:(j=window.innerHeight)!=null?j:document.documentElement.clientHeight}:{width:0,height:0}};const q=(u,v)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const j=document.createElement("object");return j.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),j.setAttribute("class","resize-sensor"),j.onload=()=>{j.contentDocument.defaultView.addEventListener("resize",v,!1),v()},j.type="text/html",u.appendChild(j),j.data="about:blank",j};var Ze=(u,v=60)=>{if(!ve())return;u=V(u)?u.current:u!=null?u:document.body;let j,T=[];const P=F(()=>T.map(oe=>oe(u)),v),G=oe=>{j||(j=q(u,P)),T.indexOf(oe)===-1&&T.push(oe)},ce=oe=>{const Te=T.indexOf(oe);Te!==-1&&T.splice(Te,1),T.length===0&&j&&le()},le=()=>{j&&j.parentNode&&(j.contentDocument&&j.contentDocument.defaultView.removeEventListener("resize",P,!1),j.parentNode.removeChild(j),j=void 0,T=[])};return{element:u,bind:G,unbind:ce,destroy:le}},Ie=(u={})=>{const v=(0,y.useRef)(0),[j,T]=(0,y.useState)(u),P=(0,y.useCallback)(G=>{cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>T(G))},[]);return(0,y.useEffect)(()=>()=>cancelAnimationFrame(v.current),[]),[j,P]},Ue=(u=null,v=60)=>{const j=V(u)?u.current:u,{bind:T,destroy:P}=Ze(j,v),[G,ce]=Ie(nt(j));return(0,y.useEffect)(()=>(T(()=>j&&ce(nt(j))),()=>P()),[j]),G},Wt=u=>{const v=(0,y.useRef)(null);return(0,y.useLayoutEffect)(()=>{v.current=u}),(0,y.useCallback)(v.current,[])},it=(u,v)=>{const j=(0,y.useRef)();(0,y.useEffect)(()=>{j.current=u},[u]),(0,y.useEffect)(()=>{if(v){const T=setInterval(()=>j.current(),v);return()=>clearInterval(T)}},[v])},dt=u=>{const v=(0,y.useRef)();return(0,y.useEffect)(()=>{v.current=u},[u]),v.current},L=(u=null)=>{var v,j,T,P;return ve()?Ge(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:(j=(v=window.pageXOffset)!=null?v:document.documentElement.scrollLeft)!=null?j:document.body.scrollLeft,top:(P=(T=window.pageYOffset)!=null?T:document.documentElement.scrollTop)!=null?P:document.body.scrollTop}:{left:0,top:0}},ie=(u=null)=>{const[v,j]=Ie(L(u));return(0,y.useEffect)(()=>{const T=()=>j(L(u)),P=Ge(u)?u:window;return P.addEventListener("scroll",T,{capture:!1,passive:!0}),()=>P.removeEventListener("scroll",T)},[u]),v},X=u=>x(u)==="array",we=u=>X(u)&&!!u.length,$e=(u,v,j=[],T=!1,P=null)=>we(u)?v?(j=typeof j=="string"?j.split(","):j,u.filter(G=>(j=j.length>0?j:Object.keys(G),j.filter(ce=>{const le=G[ce];if(le==null)return!1;if(T)return le===v;const oe=new RegExp(v,"gi"),Te=le.toString().match(oe);return Te&&P&&(G[ce]=P(le.toString().replace(oe,`<span style="background-color:yellow">${Te[0]}</span>`),{display:"inline-block"})),Te}).length))):u:[],Qe=(u,v="id")=>{if(!we(u))return u;const j=[],T=[];return u.map(P=>{const G=c(P)?P[v]:P;T.includes(G)||(T.push(G),j.push(P))}),j},qe=u=>(u==null?void 0:u.$$typeof)&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",Je=u=>u==null?void 0:u.__v_isVNode;const De=u=>{if(!X(u)&&!c(u))return u;const v=X(u)?[]:{};for(const j in u)if(A(u,j)){const T=u[j];v[j]=qe(T)||Je(T)||typeof T!="object"?T:T!==u?De(T):"cyclic"}else Object.setPrototypeOf(v,{[j]:u[j]});return v};var Ke=De;const et=u=>(v,j="children")=>{if(!Array.isArray(v))return v;const T=Ke(v),P=G=>{const ce=[];return G.map(le=>{if(we(le[j])){const oe=P(le[j])||[];le[j]=oe,oe.length>0&&ce.push(le)}}),u(G,ce)};return P(T)};var Tt=(u,v,j,T="name",P="id",G="children",ce=!1)=>et((le,oe)=>Qe([...$e(le,v,T,ce,j),...oe],P))(u,G),yt=K(458),Ot=(u,v)=>(0,yt.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...v}),kt=(u=null,v=Ot)=>{const[j,T]=(0,y.useState)(u),P=(0,y.useCallback)((...G)=>{const[ce,le,...oe]=G;if(!le)T(null);else{G=[ce,le,v,...oe];const Te=Tt(...G);T(Te)}},[]);return[j,P]},Qt=u=>{const[v,j]=(0,y.useState)(u);return(0,y.useEffect)(()=>j(u),[u]),[v,j]},Mt=()=>{const u={};return{on:(v,j)=>{u[v]||(u[v]=[]),u[v].indexOf(j)===-1&&u[v].push(j)},emit:(v,j)=>{u[v]&&u[v].map(T=>T(j))},off:(v,j=null)=>{if(u[v]){if(typeof j!="function")return u[v]=[];const T=u[v].indexOf(j);T>-1&&u[v].splice(T,1)}}}};const Ct=u=>{const v={};for(let j in u)A(u,j)||(v[j]=u[j]);return v};var Pt=(u,v)=>{if(!c(u))return v;if(!c(v))return u;const j={...Ct(u),...Ct(v)},T={...u,...v};return Object.keys(j).map(P=>{Object.setPrototypeOf(T,{[P]:j[P]})}),T},tt=()=>{const{on:u,emit:v,off:j}=Mt(),T={};return{getState:P=>Ke(T[P]),setState:(P,G=!1)=>{if(typeof P=="function"&&(P=P(Ke(T))),!c(P))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const ce=Ke(P);Object.keys(ce).map(le=>{const oe=T[le],Te=ce[le],ot=c(Te)&&c(oe)?Pt(oe,Te):Te;!G&&v(le,ot),T[le]=ot})},subscribe:(P,G)=>(u(P,G),()=>j(P,G)),unsubscribe:j,clean:P=>{typeof P=="string"?T[P]=void 0:Array.isArray(P)?P.map(G=>T[G]=void 0):Object.keys(T).map(G=>T[G]=void 0)}}};const er=tt();var cr=a(er);const at=u=>u<10?"0"+u:u;var Nt=(u=new Date)=>{const v=new Date(u),j=v.getFullYear(),T=v.getDay(),P=at(v.getMonth()+1),G=at(v.getDate()),ce=at(v.getHours()),le=at(v.getMinutes()),oe=at(v.getSeconds());return[j,P,G,ce,le,oe,T]};const gt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Or=(u,v,j="-")=>u.replace(new RegExp(j,"g"),v);var rt=(u=new Date,v=["-","-"," ",":",":",""],j=gt)=>{const T=Nt(u);let P="";return v.map((G,ce)=>{var le;return P+=(ce===6?j[T[ce]]:(le=T[ce])!=null?le:"")+G}),P};const Zt=()=>rt(new Date,["-","-"," ",":",":"," ",""]);var ft=()=>{const[u,v]=(0,y.useState)("");return it(()=>{v(Zt())},1e3),[u]};const tr=u=>++u;var rr=()=>{const[,u]=(0,y.useState)(0);return(0,y.useCallback)(()=>u(tr),[])},ht=()=>{const[u,v]=Ie(nt());return(0,y.useEffect)(()=>{const j=()=>v(nt());return window.addEventListener("resize",j,!1),()=>window.removeEventListener("resize",j,!1)},[]),u}}(),re}()})},5820:function(Ft){(function(pe,He){Ft.exports=He()})(this,function(){return function(){"use strict";var pe={};(function(){pe.d=function(e,t){for(var r in t)pe.o(t,r)&&!pe.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){pe.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){pe.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();var He={};pe.r(He),pe.d(He,{a2o:function(){return _e},addAtNext:function(){return re},addAtPos:function(){return y},addClass:function(){return x},addDays:function(){return c},addHours:function(){return w},addMonths:function(){return g},addNodes:function(){return E},addScript:function(){return z},addStyle:function(){return A},addYears:function(){return V},arr2Tree:function(){return ve},arr2TreeById:function(){return Ge},arr2TreeByPath:function(){return nt},arr2obj:function(){return U},arr2str:function(){return me},backTop:function(){return ie},base2Ten:function(){return X},baseConversion:function(){return $e},baseFetch:function(){return yt},cacheData:function(){return er},cancelablePromise:function(){return Ke},changePos:function(){return cr},classifyArr:function(){return at},clone:function(){return tt},compareVersion:function(){return Nt},compose:function(){return gt},copyToClipboard:function(){return Or},createContainer:function(){return rt},createElement:function(){return ft},createNode:function(){return T},createStore:function(){return le},createTextElement:function(){return Zt},curry:function(){return oe},cyclic:function(){return Ot},dash2camel:function(){return Te},debounce:function(){return ot},deleteNodes:function(){return jt},deviceType:function(){return lt},dlfile:function(){return Dt},dropInfo:function(){return kr},editNodes:function(){return Cr},emitter:function(){return P},equal:function(){return Qt},escapeHTML:function(){return jr},eventBus:function(){return _t},fetcher:function(){return _r},filter:function(){return Er},filterList:function(){return Zr},findMax:function(){return or},firstUpper:function(){return Sr},fixFileSizeUnit:function(){return Ar},fixPath:function(){return zr},fixRoute:function(){return Lr},fixSize:function(){return Br},fixTimeUnit:function(){return l},flatten:function(){return C},formatNum:function(){return b},formatPassTime:function(){return Y},formatTime:function(){return _},fullScreen:function(){return Ce},getElementsSize:function(){return br},getExplore:function(){return Q},getLeaveTime:function(){return Re},getMeta:function(){return nr},getMonthDays:function(){return St},getOffset:function(){return Lt},getOsInfo:function(){return qt},getParams:function(){return xt},getPosition:function(){return bt},getRelative:function(){return vt},getSelected:function(){return pr},getTextSize:function(){return $r},getTime:function(){return N},getTouchPosition:function(){return Xe},getType:function(){return ze},getValue:function(){return Yr},getViewportSize:function(){return pt},hasClass:function(){return Fr},hasProp:function(){return Ze},hex2rgba:function(){return mr},imgtocanvas:function(){return xr},isArray:function(){return be},isAsync:function(){return De},isBrowser:function(){return p},isDate:function(){return Rr},isElement:function(){return a},isError:function(){return ir},isFunction:function(){return Je},isIE:function(){return Wr},isObject:function(){return F},isReactComp:function(){return ar},isReactEle:function(){return Mt},isRef:function(){return Ie},isRegExp:function(){return yr},isTouch:function(){return hr},isUrl:function(){return Ur},isValidArr:function(){return Vt},isValidObj:function(){return Tr},isVueEle:function(){return Ct},json2str:function(){return lr},loadBase64:function(){return Qr},loadImage:function(){return eo},loop:function(){return qr},matchedStr:function(){return Xr},memoize:function(){return Gr},merge:function(){return O},mergeArr:function(){return s},mergeClass:function(){return D},mergeObj:function(){return S},mergeOwnProp:function(){return ce},message:function(){return fe},monthDate:function(){return Le},moveNodes:function(){return Pe},obj2arr:function(){return he},obj2str:function(){return Z},omit:function(){return Ye},once:function(){return Fe},padStart:function(){return Ne},params2data:function(){return qe},params2str:function(){return Qe},pick:function(){return Bt},promisify:function(){return sr},randColor:function(){return Xt},randItem:function(){return wt},randNum:function(){return Gt},randPercent:function(){return ur},randStr:function(){return Rt},randTrue:function(){return $t},removeClass:function(){return R},resize:function(){return Jt},rgba2hex:function(){return Jr},rmUnit:function(){return Kr},scheduler:function(){return ao},scrollIsBottom:function(){return lo},scrollTo:function(){return Ue},scrollToAnchor:function(){return so},scrollTop:function(){return q},selectedHandle:function(){return K},session:function(){return uo},setMeta:function(){return co},setStyle:function(){return Ve},sleep:function(){return dr},sleepSync:function(){return Pr},sort:function(){return fo},sortObj:function(){return ho},storage:function(){return po},store:function(){return xo},str2Html:function(){return mt},str2code:function(){return yo},sysLang:function(){return go},template:function(){return bo},ten2Base:function(){return we},throttle:function(){return vo},timeGap:function(){return jo},timeInterval:function(){return ro},timestamp:function(){return Be},toggleClass:function(){return Eo},traverItem:function(){return f},traverList:function(){return So},unescapeHTML:function(){return zo},unique:function(){return Ut},updateId:function(){return $o},updateNode:function(){return j},updateTreeNodes:function(){return Fo},uuidv4:function(){return It},validObj:function(){return To},watchScreen:function(){return Oo},watermark:function(){return Po},weekDate:function(){return No},wrapPromise:function(){return Io}});var _e=(e,t="key",r="value")=>{const o={};return(e||[]).map(n=>o[n[t]]=n[r]),o},ze=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),be=e=>ze(e)==="array",K=e=>(t,r,o="id",n="children")=>{if(!be(t))return null;const d=(k,$="")=>{for(let I=0,H=k.length;I<H;I++){const ge=k[I];if(ge[o]===r)return e(k,I,$)||k[I];if(be(ge[n])){const Se=d(ge[n],ge[o]);if(Se)return Se}}};return d(t),t},re=(e,t,r,o="id",n="children")=>K((d,k)=>d.splice(k,0,r))(e,t,o,n),y=(e,t,r,o,n="id",d="children")=>K((k,$)=>{const I=k[$];I.children?I.children.splice(o,0,r):I.children=[r]})(e,t,n,d),a=e=>ze(e).indexOf("element")>-1,x=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),n=[...new Set([...r,...o])];e.className=n.join(" ")},c=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},w=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},g=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},E=(e,t,r,o="id",n="children")=>K((d,k)=>{const $=d[k];return $[n]=[...$[n]||[],...r],$})(e,t,o,n),p=()=>![typeof window,typeof document].includes("undefined"),z=e=>{if(p())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},A=(e,t)=>{if(p())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===t))r();else{const n=document.createElement("style");n.onerror=d=>o(new Error(`Failed to load '${t}' style`)),n.onload=r,n.innerHTML=e,n.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===e))r();else{const n=document.createElement("link");n.onerror=d=>o(new Error(`Failed to load '${e}'`)),n.onload=r,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},V=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},U=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:n})=>r[o]=n),r},F=e=>ze(e)==="object";const B=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,F(o)?t+=`${r}=${B(o)}`:Array.isArray(o)?t+=`${r}=${me(o)}`:t+=`${r}=${o}`}),`{${t}}`};var Z=B;const te=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,F(r)?t+=Z(r):Array.isArray(r)?t+=te(r):t+=`${r}`}),`[${t}]`};var me=te,ve=e=>(t,r="id",o="children",n=-1)=>{if(!be(t))return t;const d={},k=t.map($=>$[r]);return[...t].map($=>{var I;const H={...$},{[r]:ge}=H;if(ge!=null){let{parentId:Se}=H;Se==null&&(Se=(I=e==null?void 0:e(H))!=null?I:n,H.parentId=Se),d[ge]||(d[ge]=[]),H[o]=d[ge],d[Se]||(d[Se]=[]),d[n]||(d[n]=[]),k.includes(Se)?d[Se].push(H):d[n].push(H)}}),d[n]},Ge=(e,t="id",r="children",o=-1)=>ve(n=>{const d=n[t].match(/\S+(?=-\S+)/);return(d==null?void 0:d[0])||o})(e,t,r,o),nt=(e,t="path",r="children",o=null)=>ve(n=>{var d,k,$,I;const H=n[t],ge=H.match(/.*\/[^:/]+\/:[^/]+/);return ge?(k=(d=ge[0].match(/(.*)\/:+/))==null?void 0:d[1])!=null?k:o:(I=($=H.match(/(.*)\/+/))==null?void 0:$[1])!=null?I:o})(e,t,r,o),q=()=>{var e,t;return p()&&((t=(e=window.pageYOffset)!=null?e:document.documentElement.scrollTop)!=null?t:document.body.scrollTop)},Ze=(e,t)=>Object.prototype.hasOwnProperty.call(e!=null?e:{},t),Ie=e=>Ze(e,"current"),Ue=(e=0,t)=>{var r;!p()||(t=Ie(t)?t.current:t!=null?t:window,(r=t.scrollTo)==null||r.call(t,{top:e,behavior:"smooth"}))},Wt=`.huxy-totop-bar {
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
}`;const it=()=>document.getElementsByClassName("huxy-totop-bar")[0],dt=e=>{if(it())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>Ue(),!1),t},L=()=>{const e=it();e&&document.body.removeChild(e)};var ie=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!p())return;A(Wt,"huxy-backtop-css");const r=()=>{q()>e?dt(t):L()};return(()=>(document.addEventListener("scroll",r,!1),()=>{L(),document.removeEventListener("scroll",r,!1)}))()},X=(e=0,t=2)=>parseInt(String(e),t),we=(e=0,t=2)=>Number(e).toString(t),$e=(e=0,t=2,r=16)=>we(X(e,t),r),Qe=e=>{if(!F(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const n=o>0?"&":"?";t.push(`${n}${r}=${e[r]}`)}),t.join("")},qe=e=>{if(!F(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},Je=e=>ze(e)==="function",De=e=>ze(e)==="promise"||F(e)&&Je(e.then),Ke=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!De(e))return{};let o=null,n=null;return{promiseFn:new Promise((d,k)=>{o=($="canceled")=>{clearTimeout(n),d({canceled:!0,errMsg:$})},t&&(t=typeof t!="number"?12e4:t,n=setTimeout(()=>o(r),t)),e.then($=>{clearTimeout(n),d({result:$,errMsg:!1})}).catch($=>{clearTimeout(n),k($)})}),cancelFn:o}};const et=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>qe(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>Qe(e).slice(1)}],Tt=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(n=>e[n]);if(o.length===1){const n=o[0],d=r?t:n;return d==="params"?{query:e[n]}:{result:e[n],type:d}}else if(o.length>1){const n=o.filter(k=>k!=="params").slice(-1)[0],d=r?t:n;return d==="params"?{query:e.params||e[n]}:{query:e.params,result:e[n],type:d}}};var yt=(e,t)=>r=>(o,n={})=>{const{headers:d,dataType:k,data:$,formData:I,form:H,params:ge,...Se}=n,We={data:$,formData:I,form:H,params:ge};let gr;const{query:Kt,result:oo,type:Do}=Tt(We,k)||{};if(!Se.body&&oo){const Hr=et.find(Vr=>Vr.type===Do);gr=Hr.headers,Se.body=Hr.body(oo)}Kt&&(o=`${o}${Qe(Kt)}`);const{promiseFn:_o}=Ke(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...gr,...d},...Se}),t);return _o.then(({result:Hr,errMsg:Vr})=>e(Vr?{status:408,statusText:Vr}:Hr))},Ot=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let n=!1;for(let d in o)Ze(o,d)&&r(o[d])&&(o[d]="cyclic",n=!0);return n}return!1};return r(e)&&e};const kt=(e,t)=>{const r=ze(e),o=ze(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(Ot(e)&&Ot(t))return kt(e,t);for(let n in t)if(Ze(e,n)!==Ze(t,n)||!kt(e[n],t[n]))return!1;return!0};var Qt=kt,Mt=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",Ct=e=>e==null?void 0:e.__v_isVNode;const Pt=e=>{if(!be(e)&&!F(e))return e;const t=be(e)?[]:{};for(const r in e)if(Ze(e,r)){const o=e[r];t[r]=Mt(o)||Ct(o)||typeof o!="object"?o:o!==e?Pt(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var tt=Pt,er=(e=100)=>{const t=[];let r=-1;const o=d=>{var k,$;const I=t.length,H=tt(d);return Qt(H,(k=t[I-1])==null?void 0:k.data)?{index:r,length:I,data:($=t[r])==null?void 0:$.data}:(t.push({data:H}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},n=(d=0)=>{var k;const $=t.length;return r+=d,r=r<0?0:r>$-1?$-1:r,{index:r,length:$,data:tt((k=t[r])==null?void 0:k.data)}};return{record:o,cursor:n,jump:d=>{var k;return r=d,{index:r,length:t.length,data:tt((k=t[r])==null?void 0:k.data)}},undo:()=>n(-1),redo:()=>n(1),getList:()=>tt(t),clean:()=>{t.length=0,r=-1}}},cr=(e,t,r)=>{if(!be(e))return e;const o=e[t],n=e[r];return e.splice(t,1,n),e.splice(r,1,o),e},at=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},Nt=(e,t,r=".")=>{const o=(I,H)=>I.split(H),n=o(e,r),d=o(t,r),k=n.length;let $=0;for(let I=0;I<k;I++)if(n[I]<d[I]){$=k-I;break}return $},gt=(...e)=>(...t)=>{const[...r]=e,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...t)},Or=e=>{if(!p())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},rt=e=>(t,r)=>{const{getState:o,setState:n,subscribe:d,unsubscribe:k,clean:$}=e;return r!==void 0&&n({[t]:r},!0),{getState:()=>o(t),setState:(I,H)=>n({[t]:I},H),subscribe:I=>d(t,I),unsubscribe:()=>k(t),clean:()=>$(t)}},Zt=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),ft=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:Zt(o))}});const tr=e=>e.startsWith("on"),rr=e=>e!=="children"&&!tr(e),ht=(e,t)=>r=>e[r]!==t[r],u=(e,t)=>r=>!(r in t),v=e=>{const t=Object.keys(e);return{eventProps:t.filter(tr),propertyProps:t.filter(rr)}};var j=(e,t,r)=>{const{eventProps:o,propertyProps:n}=v(t),{eventProps:d,propertyProps:k}=v(r);o.filter(u(t,r)).map($=>{const I=$.toLowerCase().slice(2);e.removeEventListener(I,t[$])}),n.filter(u(t,r)).map($=>e[$]=""),k.filter(ht(t,r)).map($=>e[$]=r[$]),d.filter(ht(t,r)).map($=>{const I=$.toLowerCase().slice(2);e.addEventListener(I,r[$])})},T=e=>{if(!p())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return j(t,{},e.props),t},P=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return e[t]=[];const o=e[t].indexOf(r);o>-1&&e[t].splice(o,1)}}}};const G=e=>{const t={};for(let r in e)Ze(e,r)||(t[r]=e[r]);return t};var ce=(e,t)=>{if(!F(e))return t;if(!F(t))return e;const r={...G(e),...G(t)},o={...e,...t};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},le=()=>{const{on:e,emit:t,off:r}=P(),o={};return{getState:n=>tt(o[n]),setState:(n,d=!1)=>{if(typeof n=="function"&&(n=n(tt(o))),!F(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const k=tt(n);Object.keys(k).map($=>{const I=o[$],H=k[$],ge=F(H)&&F(I)?ce(I,H):H;!d&&t($,ge),o[$]=ge})},subscribe:(n,d)=>(e(n,d),()=>r(n,d)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(d=>o[d]=void 0):Object.keys(o).map(d=>o[d]=void 0)}}},oe=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...n)=>r(...o,...n);return r},Te=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),ot=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},jt=(e,t,r="id",o="children")=>K((n,d)=>n.splice(d,1))(e,t,r,o),lt=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Be=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),It=()=>{let e=Be();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},Dt=(e,t)=>{if(p())if(t=t||It(),typeof e=="string")fetch(e).then(r=>r.blob()).then(r=>{const o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)});else{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)}},pt=(e=null)=>{var t,r;return p()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(r=window.innerHeight)!=null?r:document.documentElement.clientHeight}:{width:0,height:0}},bt=e=>{var t;if(p())return e=Ie(e)?e.current:e!=null?e:document.body,(t=e.getBoundingClientRect)==null?void 0:t.call(e)},mt=e=>{if(!p())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},Ve=(e,t={},r=!1)=>{!a(e)||Object.keys(t).map(o=>{e.style.setProperty(o,r?"":t[o])})};const Yt=(e=350)=>new Promise(t=>setTimeout(t,e)),Pr=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var dr=Yt,br=async(e,t=15)=>{if(!p())return;if(typeof e=="string"&&(e=mt(e)),e=Ie(e)?e.current:e,!a(e))return{};const r=e.cloneNode(!0);Ve(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await dr(t);const o=bt(r);return e.parentNode.removeChild(r),o};const Nr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,vr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Ht=(e,t)=>{var r;t=`huxy-drop-arrow-${t}`;const o=(r=e.getAttribute("class"))!=null?r:"";Nr.test(o)?e.setAttribute("class",o.replace(vr,t)):e.setAttribute("class",`${o} ${t}`)},wr=async(e,t,r)=>{const{left:o,right:n,top:d,bottom:k}=bt(e),{width:$,height:I}=pt(),{width:H,height:ge}=await br(t);if(n<0||k<0||o>$||d>I)return{};if(r==="vertical"){const Se={left:o+"px",top:k+10+"px",right:"auto",bottom:"auto"};let We="lt";o+H>$&&(Se.left=n-H+"px",We="rt"),k+10+ge>I&&(Se.top=d-10-ge+"px",We=We==="lt"?"lb":"rb"),Ve(t,Se),Ht(t,We)}else{const Se={left:n+10+"px",top:d+"px",right:"auto",bottom:"auto"};let We="tl";n+10+H>$&&(Se.left=o-10-H+"px",We="tr"),d+ge>I&&(Se.top=k-ge+"px",We=We==="tl"?"bl":"br"),Ve(t,Se),Ht(t,We)}};var kr=(e,t,r="horizontal")=>{const o=ot(wr),n=()=>o(e,t,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const d=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),Ve(t,{left:"",top:"",right:"",bottom:""})};return wr(e,t,r),d},Cr=(e,t,r,o="id",n="children")=>K((d,k)=>d[k]={...d[k],...r})(e,t,o,n),jr=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const fr=P();var _t=e=>{const{on:t,emit:r,off:o}=fr;return{on:n=>t(e,n),emit:n=>r(e,n),off:n=>o(e,n)}};const Ir=120*1e3,Dr=e=>e.json().then(t=>t);var _r=(e=Dr,t=Ir)=>(r="get")=>yt(e)((r||"get").toUpperCase()),Vt=e=>be(e)&&!!e.length,Er=(e,t,r=[],o=!1,n=null)=>Vt(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(d=>(r=r.length>0?r:Object.keys(d),r.filter(k=>{const $=d[k];if($==null)return!1;if(o)return $===t;const I=new RegExp(t,"gi"),H=$.toString().match(I);return H&&n&&(d[k]=n($.toString().replace(I,`<span style="background-color:yellow">${H[0]}</span>`),{display:"inline-block"})),H}).length))):e:[],Ut=(e,t="id")=>{if(!Vt(e))return e;const r=[],o=[];return e.map(n=>{const d=F(n)?n[t]:n;o.includes(d)||(o.push(d),r.push(n))}),r};const Et=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=tt(t),n=d=>{const k=[];return d.map($=>{if(Vt($[r])){const I=n($[r])||[];$[r]=I,I.length>0&&k.push($)}}),e(d,k)};return n(o)};var Zr=(e,t,r,o="name",n="id",d="children",k=!1)=>Et(($,I)=>Ut([...Er($,t,o,k,r),...I],n))(e,d),or=(e="")=>{var t;return(t=e.match(/\d+/g))==null?void 0:t.sort((r,o)=>o-r)[0]},Sr=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),Ar=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},zr=(e="")=>e.replaceAll("//","/"),Lr=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",Br=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},l=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),n=e%3600,d=~~(n/60);return o<24?`${o}${t[2]}${d}${t[1]}${n%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},f=e=>(t,r="children")=>{if(!be(t))return t;const o=(n,d=[])=>{n.map((k,$)=>{const I=be(k[r]);if(k=e(k,d,$,I)||k,I){const{[r]:H,...ge}=k;o(H,[...d,{...ge,"@@index":$}])}})};return o(t),t},C=(e,t="children")=>{const r=[];return f(o=>{const{[t]:n,...d}=o;r.push(d)})(e,t),r},b=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const m=e=>e<10?"0"+e:e;var N=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),n=m(t.getMonth()+1),d=m(t.getDate()),k=m(t.getHours()),$=m(t.getMinutes()),I=m(t.getSeconds());return[r,n,d,k,$,I,o]},Y=(e,t=new Date)=>{e=N(e),t=N(t);const r=t.y-e.y,o=t.m-e.m,n=t.d-e.d,d=t.h-e.h,k=t.M-e.M,$=new Date(t.y,t.m,0).getDate(),I=(H,ge,Se,We,gr)=>{const Kt="\u524D";return ge<0&&(H-=1,ge+=Se),H===0?ge+gr+Kt:ge===0?H+We+Kt:H+We+ge+gr+Kt};return r>0?I(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?I(o,n,$,"\u4E2A\u6708","\u5929"):n>0?I(n,d,24,"\u5929","\u5C0F\u65F6"):d>0?I(d,k,60,"\u5C0F\u65F6","\u5206\u949F"):k>0?k+"\u5206\u949F\u524D":"\u521A\u521A"};const W=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],M=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var _=(e=new Date,t=["-","-"," ",":",":",""],r=W)=>{const o=N(e);let n="";return t.map((d,k)=>{var $;return n+=(k===6?r[o[k]]:($=o[k])!=null?$:"")+d}),n};const ne=["","webkit","moz","ms"],ke=e=>ne.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),je=e=>ne.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),se=e=>ne.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),de=ne.map(e=>`${e}fullscreenchange`);var Ce=e=>{var t,r;if(!p())return;e=Ie(e)?e.current:e!=null?e:document.body;const o=ke(document),n=je(e),d=se(document);document[o]?(r=document[d])==null||r.call(document):(t=e[n])==null||t.call(e)};const ue=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var Q=()=>{var e;if(!p())return;const t=window.navigator.userAgent.toLowerCase(),r=(e=ue.find(o=>t.match(o.reg)))!=null?e:{};return{type:r.name,version:t.match(r.reg)[1]}};const Ee=60*1e3,Oe=60*Ee,Me=24*Oe;var Re=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/Me);r-=Me*o;const n=~~(r/Oe);r-=Oe*n;const d=~~(r/Ee);r-=Ee*d;const k=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${d}\u5206${k}\u79D2`};const Ae=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],At=e=>{if(!Array.isArray(e))return Ae;const t=[...Ae];return e.map(r=>{const o=t.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var nr=e=>{const t=At(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return mt(t.join(""))},St=(e=new Date)=>{const t=N(e);return new Date(t[0],t[1],0).getDate()},Lt=(e=null)=>{var t,r,o,n;return p()?a(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:(r=(t=window.pageXOffset)!=null?t:document.documentElement.scrollLeft)!=null?r:document.body.scrollLeft,top:(n=(o=window.pageYOffset)!=null?o:document.documentElement.scrollTop)!=null?n:document.body.scrollTop}:{left:0,top:0}};const zt=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>{var t;return{type:"ios",model:e[1],version:(t=e[3])==null?void 0:t.replaceAll("_",".")}}},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var qt=()=>{if(!p())return;const e=window.navigator.userAgent.toLowerCase(),t=zt.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},xt=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(n=>{const[d,k]=n.split("=");o[d]=k}),{path:t,params:o}}return{path:t}},hr=()=>p()&&(window.ontouchstart||navigator.maxTouchPoints),Xe=e=>{var t,r,o,n;const{left:d,top:k}=Lt();return{touchX:hr()?(r=(t=e==null?void 0:e.touches)==null?void 0:t[0])==null?void 0:r.pageX:(e==null?void 0:e.pageX)||(e==null?void 0:e.clientX)+d,touchY:hr()?(n=(o=e==null?void 0:e.touches)==null?void 0:o[0])==null?void 0:n.pageY:(e==null?void 0:e.pageY)||(e==null?void 0:e.clientY)+k}},vt=(e,t)=>{var r,o;const{touchX:n,touchY:d}=Xe(e),{x:k,y:$}=(o=(r=t==null?void 0:t.getBoundingClientRect)==null?void 0:r.call(t))!=null?o:{};return{x:n-(k!=null?k:0),y:d-($!=null?$:0)}},pr=(e,t,r="id",o="children")=>{if(!be(e))return null;const n=d=>{for(let k=0,$=d.length;k<$;k++){const I=d[k];if(I[r]===t)return[I];if(be(I[o])){const H=n(I[o]);if(H)return[I].concat(H)}}};return n(e)},$r=(e,t={},r)=>{if(!p())return;r=Ie(r)?r.current:r!=null?r:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&Ve(o,t),o.innerText=e,r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const st=(e={},t)=>{t=ut(t);const r=(o,n)=>{if(!(n!=null&&n[0]))return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(e,t)},ut=(e="")=>{var t;return(t=e.replace(/\[['"]?(.*?)['"]?\]/g,".$1"))==null?void 0:t.split(".")};var Yr=st,Fr=(e,t="")=>a(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),mr=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,n=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${n})`;const d=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${d})`},xr=e=>{if(!p())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:n}=e;return t.width=o,t.height=n,r.drawImage(e,0,0,o,n),t},Rr=(...e)=>!Number.isNaN(new Date(...e).valueOf()),ir=e=>ze(e)==="error",Wr=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),ar=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",yr=e=>ze(e)==="regexp",Ur=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),Tr=e=>F(e)&&Object.keys(e).length,lr=e=>F(e)?Z(e):Array.isArray(e)?me(e):e,Qr=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",n=>r(n))}),eo=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",n=>r(n)))}),qr=async(e,t,r=2e3)=>{for(;!(t!=null&&t(e==null?void 0:e()));)await dr(r)},Xr=(e,t=["{","}"])=>{var r,o;return(o=(r=e==null?void 0:e.trim)==null?void 0:r.call(e).match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`)))==null?void 0:o[1]},Gr=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),d=r.find(k=>k.key===n);if(!d){const k=e(...o);return r.push({key:n,result:k}),r.length>t&&r.shift(),k}return d.result}};const i=(e,t,r="id")=>{if(!be(e))return t;if(!be(t))return e;const o={};return[...e,...t].map(n=>{var d;const k=F(n)?(d=n[r])!=null?d:JSON.stringify(n):n;if(o[k]===void 0)o[k]=n;else{const $=o[k];F($)&&F(n)?o[k]=S($,n):be($)&&be(n)?o[k]=i($,n):o[k]=n}}),Object.keys(o).map(n=>o[n])};var s=i;const h=(e,t)=>{if(!F(e))return t;if(!F(t))return e;for(let r in t)Ze(t,r)?F(e[r])&&F(t[r])?e[r]=h(e[r],t[r]):be(e[r])&&be(t[r])?e[r]=s(e[r],t[r]):e[r]=t[r]:Object.setPrototypeOf(e,{[r]:t[r]});return e};var S=h,O=(e,...t)=>{const r=be(e)?s:S;return t.map(o=>e=r(e,o)),e},D=(e,t)=>{var r,o;const n=(r=e==null?void 0:e.split(" "))!=null?r:[],d=(o=t==null?void 0:t.split(" "))!=null?o:[];return[...new Set([...n,...d])].filter(Boolean).join(" ")},R=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(n=>!r.includes(n));e.className=o.join(" ")},ee=`@keyframes huxy-message-animate-in {
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
}`;const J=()=>document.getElementsByClassName("huxy-message")[0],ae=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},xe=(e,t)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${t}`);const o=document.createElement("span");o.innerText=e;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},ye=(e,t=3250,r,o)=>{if(!p())return;A(ee,"huxy-message-css");let n=J();n||(n=ae());const d=xe(e,o);n.appendChild(d),setTimeout(()=>{n.removeChild(d),r==null||r()},t),setTimeout(()=>{R(d,"open")},t-250)};var fe={success:(e,t,r)=>ye(e,t,r,"success"),warn:(e,t,r)=>ye(e,t,r,"warn"),warning:(e,t,r)=>ye(e,t,r,"warn"),error:(e,t,r)=>ye(e,t,r,"error"),info:(e,t,r)=>ye(e,t,r,"info")},Le=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[c(1-r),c(St(t)-r)]},Pe=(e,t,r,o,n="id",d="children")=>{let k={};return K(($,I)=>(k=$[I],$.splice(I,1),!0))(e,t,n,d),y(e,r,k,o,n,d),e},he=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),Ye=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(n=>t.includes(n)?o.push({key:n,value:e[n]}):r[n]=e[n]),{newObj:r,newQuery:o}},Fe=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},Ne=(e="",t=0,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`},Bt=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!be(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},sr=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(n,d)=>n?o(n):r(d))),Xt=()=>"#"+Ne((~~(Math.random()*(1<<24))).toString(16),6),Gt=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),wt=(e=[])=>e[Gt(e.length-1)],ur=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,n)=>{n===e-1?r[n]=t:(r[n]=Gt(1,t-1),t-=r[n])}),r},Rt=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),$t=()=>Math.random()>.5;const ct=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var Jt=(e,t=60)=>{if(!p())return;e=Ie(e)?e.current:e!=null?e:document.body;let r,o=[];const n=ot(()=>o.map(I=>I(e)),t),d=I=>{r||(r=ct(e,n)),o.indexOf(I)===-1&&o.push(I)},k=I=>{const H=o.indexOf(I);H!==-1&&o.splice(H,1),o.length===0&&r&&$()},$=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:d,unbind:k,destroy:$}};const Mr=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const n=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var Jr=(e=0,t=0,r=0,o=1)=>{var n;if(e.includes("rgb")){const d=e.match(/rgba?\((.+)\)/);if(d){const k=(n=d[1])==null?void 0:n.split(",").map($=>$.trim());return Mr(...k)}return e}return Mr(e,t,r,o)},Kr=(e,t="px")=>`${e}`.replace(t,"")-0;const to=()=>typeof(performance==null?void 0:performance.now)=="function"?performance.now():new Date().getTime(),no=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},io=()=>{const e=[],t=k=>{e.push(k),d(k)},r=()=>e[0],o=()=>e.shift(),n=k=>k.startTime=to(),d=k=>{n(k),e.sort(($,I)=>$.startTime-I.startTime)};return{hub:e,push:t,peek:r,shift:o,update:d}};var ao=(e=5)=>{const{hub:t,push:r,peek:o,shift:n,update:d}=io(),k=no(()=>{I()&&k()}),$=H=>to()-H.startTime>e,I=()=>{let H=o();for(;H;){if($(H)){d(H);break}const{task:ge}=H;typeof ge=="function"?(H.task=null,ge()):n(),H=o()}return H};return(H=()=>{})=>{r({task:H}),t.length<2&&k()}},lo=()=>p()&&document.documentElement.scrollHeight-q()===pt().height,so=e=>{var t;!p()||(e=Ie(e)?e.current:e!=null?e:window,(t=e.scrollIntoView)==null||t.call(e,{behavior:"smooth",block:"center"}))},uo={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch(r){t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},co=e=>{const t=nr(e);p()&&document.head.appendChild(...t)},fo=(e,t=null,r=!1)=>[...e||[]].sort((o,n)=>{const d=t?o[t]:o,k=t?n[t]:n;return!isNaN(Number(d))&&!isNaN(Number(d))?r?k-d:d-k:typeof d=="string"&&typeof k=="string"?r?k.localeCompare(d):d.localeCompare(k):typeof d=="string"&&typeof k=="number"?r?-1:1:typeof d=="number"||typeof d=="string"?r?1:-1:r?-1:1}),ho=e=>{if(!F(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},po={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const mo=le();var xo=rt(mo),yo=(e,t=!1)=>(e=t?e:`return ${e};`,Function(e)()),go=()=>p()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),bo=(e,...t)=>{const r=[];return e.map((o,n)=>{var d;r.push(o,(d=t[n])!=null?d:"")}),r.join("")},vo=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const wo=e=>[12,St(e),24,60,60],ko=(e=[],t=[],r=[])=>{let o=!1;const n=[];return t.map((d,k)=>{const $=(o?d-1:d)-e[k];$<0?(n[k]=$+(r[k]||10),o=!0):(n[k]=$,o=!1)}),n.reverse()};var ro=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=wo(t).reverse(),o=N(e).slice(0,-1).reverse(),n=N(t).slice(0,-1).reverse();return ko(o,n,r)};const Co=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var jo=(e,t=new Date)=>{const r=ro(e,t),o=r.findIndex(n=>n>0);return r.map((n,d)=>`${n||0}${Co[d]}`).slice(o).join("")},Eo=(e,t)=>{!a(e)||(Fr(e,t)?R(e,t):x(e,t))},So=e=>(t,r="children")=>{if(!be(t))return t;const o=n=>(n.map(d=>{be(d[r])&&(d[r]=o(d[r]))}),e(n));return o(t)},zo=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),$o=(e,t="fuckId",r="children")=>f((o,n,d)=>{o[t]=[...n.map(k=>k["@@index"]),d].join("-")})(e,r),Fo=(e,t,r,o="children")=>K((n,d)=>{const k=n[d];return k[o]=[...k[o]||[],...r],!0})(e,t),To=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},Oo=e=>p()?(de.map(t=>document.addEventListener(t,e,!1)),()=>de.map(t=>document.removeEventListener(t,e,!1))):void 0,Po=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:d="20px microsoft yahei",fillStyle:k="rgba(202,202,202,0.4)",content:$="\u8BF7\u52FF\u5916\u4F20",rotate:I="-30",zIndex:H=1e3}={})=>{if(!p())return;e=Ie(e)?e.current:e!=null?e:document.body;const ge=e.firstChild;(ge==null?void 0:ge.className)==="watermark-canvas"&&e.removeChild(ge);const Se=document.createElement("canvas");Se.setAttribute("width",t),Se.setAttribute("height",r);const We=Se.getContext("2d");We.textAlign=o,We.textBaseline=n,We.font=d,We.fillStyle=k,We.rotate(Math.PI/180*I),We.fillText($,parseFloat(t)/2,parseFloat(r)/2);const gr=Se.toDataURL(),Kt=document.createElement("div");Kt.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${H};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${gr}')`),e.style.position="relative",e.insertBefore(Kt,e.firstChild)},No=(e=new Date)=>{const t=new Date(e).getDay();return[c(1-t),c(7-t)]},Io=e=>{if(!De(e))return{};let t="pending",r;const o=e.then(n=>{t="success",r=n}).catch(n=>{t="error",r=n});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}};return He}()})},3323:function(Ft,pe){"use strict";function He(L,ie){var X=L.length;L.push(ie);e:for(;0<X;){var we=X-1>>>1,$e=L[we];if(0<be($e,ie))L[we]=ie,L[X]=$e,X=we;else break e}}function _e(L){return L.length===0?null:L[0]}function ze(L){if(L.length===0)return null;var ie=L[0],X=L.pop();if(X!==ie){L[0]=X;e:for(var we=0,$e=L.length,Qe=$e>>>1;we<Qe;){var qe=2*(we+1)-1,Je=L[qe],De=qe+1,Ke=L[De];if(0>be(Je,X))De<$e&&0>be(Ke,Je)?(L[we]=Ke,L[De]=X,we=De):(L[we]=Je,L[qe]=X,we=qe);else if(De<$e&&0>be(Ke,X))L[we]=Ke,L[De]=X,we=De;else break e}}return ie}function be(L,ie){var X=L.sortIndex-ie.sortIndex;return X!==0?X:L.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var K=performance;pe.unstable_now=function(){return K.now()}}else{var re=Date,y=re.now();pe.unstable_now=function(){return re.now()-y}}var a=[],x=[],c=1,w=null,g=3,E=!1,p=!1,z=!1,A=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(L){for(var ie=_e(x);ie!==null;){if(ie.callback===null)ze(x);else if(ie.startTime<=L)ze(x),ie.sortIndex=ie.expirationTime,He(a,ie);else break;ie=_e(x)}}function B(L){if(z=!1,F(L),!p)if(_e(a)!==null)p=!0,it(Z);else{var ie=_e(x);ie!==null&&dt(B,ie.startTime-L)}}function Z(L,ie){p=!1,z&&(z=!1,V(ve),ve=-1),E=!0;var X=g;try{for(F(ie),w=_e(a);w!==null&&(!(w.expirationTime>ie)||L&&!q());){var we=w.callback;if(typeof we=="function"){w.callback=null,g=w.priorityLevel;var $e=we(w.expirationTime<=ie);ie=pe.unstable_now(),typeof $e=="function"?w.callback=$e:w===_e(a)&&ze(a),F(ie)}else ze(a);w=_e(a)}if(w!==null)var Qe=!0;else{var qe=_e(x);qe!==null&&dt(B,qe.startTime-ie),Qe=!1}return Qe}finally{w=null,g=X,E=!1}}var te=!1,me=null,ve=-1,Ge=5,nt=-1;function q(){return!(pe.unstable_now()-nt<Ge)}function Ze(){if(me!==null){var L=pe.unstable_now();nt=L;var ie=!0;try{ie=me(!0,L)}finally{ie?Ie():(te=!1,me=null)}}else te=!1}var Ie;if(typeof U=="function")Ie=function(){U(Ze)};else if(typeof MessageChannel!="undefined"){var Ue=new MessageChannel,Wt=Ue.port2;Ue.port1.onmessage=Ze,Ie=function(){Wt.postMessage(null)}}else Ie=function(){A(Ze,0)};function it(L){me=L,te||(te=!0,Ie())}function dt(L,ie){ve=A(function(){L(pe.unstable_now())},ie)}pe.unstable_IdlePriority=5,pe.unstable_ImmediatePriority=1,pe.unstable_LowPriority=4,pe.unstable_NormalPriority=3,pe.unstable_Profiling=null,pe.unstable_UserBlockingPriority=2,pe.unstable_cancelCallback=function(L){L.callback=null},pe.unstable_continueExecution=function(){p||E||(p=!0,it(Z))},pe.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<L?Math.floor(1e3/L):5},pe.unstable_getCurrentPriorityLevel=function(){return g},pe.unstable_getFirstCallbackNode=function(){return _e(a)},pe.unstable_next=function(L){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var X=g;g=ie;try{return L()}finally{g=X}},pe.unstable_pauseExecution=function(){},pe.unstable_requestPaint=function(){},pe.unstable_runWithPriority=function(L,ie){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=g;g=L;try{return ie()}finally{g=X}},pe.unstable_scheduleCallback=function(L,ie,X){var we=pe.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?we+X:we):X=we,L){case 1:var $e=-1;break;case 2:$e=250;break;case 5:$e=1073741823;break;case 4:$e=1e4;break;default:$e=5e3}return $e=X+$e,L={id:c++,callback:ie,priorityLevel:L,startTime:X,expirationTime:$e,sortIndex:-1},X>we?(L.sortIndex=X,He(x,L),_e(a)===null&&L===_e(x)&&(z?(V(ve),ve=-1):z=!0,dt(B,X-we))):(L.sortIndex=$e,He(a,L),p||E||(p=!0,it(Z))),L},pe.unstable_shouldYield=q,pe.unstable_wrapCallback=function(L){var ie=g;return function(){var X=g;g=ie;try{return L.apply(this,arguments)}finally{g=X}}}},1102:function(Ft,pe,He){"use strict";Ft.exports=He(3323)}}]);
