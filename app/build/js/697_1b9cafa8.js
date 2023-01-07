(self.webpackChunk=self.webpackChunk||[]).push([[697],{1975:function(Ot,me,He){(function(Be,Se){Ot.exports=Se(He(7378),He(1542))})(this,function(Be,Se){return function(){"use strict";var be={193:function(a,m,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`/*@height:2px;
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
`,""]),$.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},m.Z=$},145:function(a,m,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`.kLIGi {
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
`,""]),$.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},m.Z=$},842:function(a,m,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`@keyframes animate-drawer-in {
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
`,""]),$.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},m.Z=$},563:function(a,m,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`@keyframes animate-drop-in {
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
`,""]),$.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},m.Z=$},697:function(a,m,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`@keyframes animate-modal-in {
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
`,""]),$.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},m.Z=$},810:function(a,m,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`.clear {
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
`,""]),$.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"},m.Z=$},31:function(a,m,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`.cols-1 {
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
`,""]),$.locals={},m.Z=$},201:function(a,m,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`@keyframes before {
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
`,""]),$.locals={},m.Z=$},289:function(a,m,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`.clear {
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
`,""]),$.locals={},m.Z=$},626:function(a,m,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`.ofth_ {
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
`,""]),$.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},m.Z=$},435:function(a,m,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`.node-right-icon-close {
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
.huxy-tree .huxy-tree-track .huxy-tree-root li > ul {
  overflow: hidden;
  transition: max-height 0.3s;
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
`,""]),$.locals={},m.Z=$},414:function(a){a.exports=function(m){var c=[];return c.toString=function(){return this.map(function(k){var y="",S=typeof k[5]!="undefined";return k[4]&&(y+="@supports (".concat(k[4],") {")),k[2]&&(y+="@media ".concat(k[2]," {")),S&&(y+="@layer".concat(k[5].length>0?" ".concat(k[5]):""," {")),y+=m(k),S&&(y+="}"),k[2]&&(y+="}"),k[4]&&(y+="}"),y}).join("")},c.i=function(k,y,S,p,$){typeof k=="string"&&(k=[[null,k,void 0]]);var A={};if(S)for(var q=0;q<this.length;q++){var G=this[q][0];G!=null&&(A[G]=!0)}for(var F=0;F<k.length;F++){var B=[].concat(k[F]);S&&A[B[0]]||(typeof $!="undefined"&&(typeof B[5]=="undefined"||(B[1]="@layer".concat(B[5].length>0?" ".concat(B[5]):""," {").concat(B[1],"}")),B[5]=$),y&&(B[2]&&(B[1]="@media ".concat(B[2]," {").concat(B[1],"}")),B[2]=y),p&&(B[4]?(B[1]="@supports (".concat(B[4],") {").concat(B[1],"}"),B[4]=p):B[4]="".concat(p)),c.push(B))}},c}},703:function(a){a.exports=function(m){return m[1]}},53:function(a,m,c){var k,y=c(899),S=Symbol.for("react.element"),p=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,A=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function G(F,B,W){var te,xe={},we=null,et=null;W!==void 0&&(we=""+W),B.key!==void 0&&(we=""+B.key),B.ref!==void 0&&(et=B.ref);for(te in B)$.call(B,te)&&!q.hasOwnProperty(te)&&(xe[te]=B[te]);if(F&&F.defaultProps)for(te in B=F.defaultProps,B)xe[te]===void 0&&(xe[te]=B[te]);return{$$typeof:S,type:F,key:we,ref:et,props:xe,_owner:A.current}}k=p,m.jsx=G,m.jsxs=G},458:function(a,m,c){a.exports=c(53)},748:function(a){var m=[];function c(S){for(var p=-1,$=0;$<m.length;$++)if(m[$].identifier===S){p=$;break}return p}function k(S,p){for(var $={},A=[],q=0;q<S.length;q++){var G=S[q],F=p.base?G[0]+p.base:G[0],B=$[F]||0,W="".concat(F," ").concat(B);$[F]=B+1;var te=c(W),xe={css:G[1],media:G[2],sourceMap:G[3],supports:G[4],layer:G[5]};if(te!==-1)m[te].references++,m[te].updater(xe);else{var we=y(xe,p);p.byIndex=q,m.splice(q,0,{identifier:W,updater:we,references:1})}A.push(W)}return A}function y(S,p){var $=p.domAPI(p);$.update(S);var A=function(q){if(q){if(q.css===S.css&&q.media===S.media&&q.sourceMap===S.sourceMap&&q.supports===S.supports&&q.layer===S.layer)return;$.update(S=q)}else $.remove()};return A}a.exports=function(S,p){p=p||{},S=S||[];var $=k(S,p);return function(A){A=A||[];for(var q=0;q<$.length;q++){var G=$[q],F=c(G);m[F].references--}for(var B=k(A,p),W=0;W<$.length;W++){var te=$[W],xe=c(te);m[xe].references===0&&(m[xe].updater(),m.splice(xe,1))}$=B}}},736:function(a){var m={};function c(y){if(typeof m[y]=="undefined"){var S=document.querySelector(y);if(window.HTMLIFrameElement&&S instanceof window.HTMLIFrameElement)try{S=S.contentDocument.head}catch(p){S=null}m[y]=S}return m[y]}function k(y,S){var p=c(y);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(S)}a.exports=k},706:function(a){function m(c){var k=document.createElement("style");return c.setAttributes(k,c.attributes),c.insert(k,c.options),k}a.exports=m},567:function(a,m,c){function k(y){var S=c.nc;S&&y.setAttribute("nonce",S)}a.exports=k},306:function(a){function m(y,S,p){var $="";p.supports&&($+="@supports (".concat(p.supports,") {")),p.media&&($+="@media ".concat(p.media," {"));var A=typeof p.layer!="undefined";A&&($+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),$+=p.css,A&&($+="}"),p.media&&($+="}"),p.supports&&($+="}");var q=p.sourceMap;q&&typeof btoa!="undefined"&&($+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(q))))," */")),S.styleTagTransform($,y,S.options)}function c(y){if(y.parentNode===null)return!1;y.parentNode.removeChild(y)}function k(y){var S=y.insertStyleElement(y);return{update:function(p){m(S,y,p)},remove:function(){c(S)}}}a.exports=k},62:function(a){function m(c,k){if(k.styleSheet)k.styleSheet.cssText=c;else{for(;k.firstChild;)k.removeChild(k.firstChild);k.appendChild(document.createTextNode(c))}}a.exports=m},899:function(a){a.exports=Be},994:function(a){a.exports=Se}},ee={};function re(a){var m=ee[a];if(m!==void 0)return m.exports;var c=ee[a]={id:a,exports:{}};return be[a](c,c.exports,re),c.exports}(function(){re.n=function(a){var m=a&&a.__esModule?function(){return a.default}:function(){return a};return re.d(m,{a:m}),m}})(),function(){re.d=function(a,m){for(var c in m)re.o(m,c)&&!re.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:m[c]})}}(),function(){re.o=function(a,m){return Object.prototype.hasOwnProperty.call(a,m)}}(),function(){re.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){re.nc=void 0}();var g={};return function(){re.r(g),re.d(g,{Anico:function(){return et},Carousel:function(){return nr},Col:function(){return Ct},Drawer:function(){return $t},Drop:function(){return wt},Ellipsis:function(){return xr},ErrorBoundary:function(){return br},FullPage:function(){return Nr},HandleError:function(){return j},LoadError:function(){return f},Mask:function(){return pt},MaxSize:function(){return D},Modal:function(){return ve},Panel:function(){return Rt},Portal:function(){return ht},Row:function(){return St},Spinner:function(){return Pe},TabHeader:function(){return Zr},Tooltip:function(){return Gt},Tree:function(){return Lr},fixEle:function(){return ur},fixIcon:function(){return zr},renderTree:function(){return Qt},str2React:function(){return l},str2Vue:function(){return hr}});var a=re(458),m=re(748),c=re.n(m),k=re(306),y=re.n(k),S=re(736),p=re.n(S),$=re(567),A=re.n($),q=re(706),G=re.n(q),F=re(62),B=re.n(F),W=re(193),te={};te.styleTagTransform=B(),te.setAttributes=A(),te.insert=p().bind(null,"head"),te.domAPI=y(),te.insertStyleElement=G();var xe=c()(W.Z,te),we=W.Z&&W.Z.locals?W.Z.locals:void 0,et=i=>(0,a.jsx)("span",{className:we.anico,children:(0,a.jsx)("span",{className:[we.hline,...(i.type||"").split(" ").map(s=>we[s]).filter(Boolean)].join(" ")})}),tt=re(994),Z=re(899),Me=re.n(Z),ze=(i,s)=>{const h=(0,Z.useRef)();(0,Z.useEffect)(()=>{h.current=i},[i]),(0,Z.useEffect)(()=>{if(s){const C=setInterval(()=>h.current(),s);return()=>clearInterval(C)}},[s])},Ue=()=>![typeof window,typeof document].includes("undefined"),bt=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),Xe=i=>bt(i).indexOf("element")>-1,lt=(i=null)=>{var s,h;return Ue()?Xe(i)?{width:i.clientWidth,height:i.clientHeight}:{width:(s=window.innerWidth)!=null?s:document.documentElement.clientWidth,height:(h=window.innerHeight)!=null?h:document.documentElement.clientHeight}:{width:0,height:0}},R=(i=()=>{},s=60)=>{let h=null;return function(...C){clearTimeout(h),h=setTimeout(()=>i.apply(this,C),s)}},ae=(i,s)=>Object.prototype.hasOwnProperty.call(i!=null?i:{},s),J=i=>ae(i,"current");const ke=(i,s)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const h=document.createElement("object");return h.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),h.setAttribute("class","resize-sensor"),h.onload=()=>{h.contentDocument.defaultView.addEventListener("resize",s,!1),s()},h.type="text/html",i.appendChild(h),h.data="about:blank",h};var Fe=(i,s=60)=>{if(!Ue())return;i=J(i)?i.current:i!=null?i:document.body;let h,C=[];const T=R(()=>C.map(H=>H(i)),s),N=H=>{h||(h=ke(i,T)),C.indexOf(H)===-1&&C.push(H)},L=H=>{const ie=C.indexOf(H);ie!==-1&&C.splice(ie,1),C.length===0&&h&&X()},X=()=>{h&&h.parentNode&&(h.contentDocument&&h.contentDocument.defaultView.removeEventListener("resize",T,!1),h.parentNode.removeChild(h),h=void 0,C=[])};return{element:i,bind:N,unbind:L,destroy:X}},dt=(i={})=>{const s=(0,Z.useRef)(0),[h,C]=(0,Z.useState)(i),T=(0,Z.useCallback)(N=>{cancelAnimationFrame(s.current),s.current=requestAnimationFrame(()=>C(N))},[]);return(0,Z.useEffect)(()=>()=>cancelAnimationFrame(s.current),[]),[h,T]},Ye=(i=null,s=60)=>{const h=J(i)?i.current:i,{bind:C,destroy:T}=Fe(h,s),[N,L]=dt(lt(h));return(0,Z.useEffect)(()=>(C(()=>h&&L(lt(h))),()=>T()),[h]),N},rt=re(145),Oe={};Oe.styleTagTransform=B(),Oe.setAttributes=A(),Oe.insert=p().bind(null,"head"),Oe.domAPI=y(),Oe.insertStyleElement=G();var Ge=c()(rt.Z,Oe),Ke=rt.Z&&rt.Z.locals?rt.Z.locals:void 0,nr=({children:i,active:s=0,delay:h=5e3,className:C,...T})=>{const[N,L]=(0,Z.useState)(s+1),[X,H]=(0,Z.useState)(!1),ie=(0,Z.useRef)(),ue=(0,Z.useRef)(""),{width:pe}=Ye(ie);i=Array.isArray(i)?i:[i];const fe=i[0],Re=[i[i.length-1],...i,fe],Le=Re.length;ze(()=>{let Ne=N+1;Ne=Ne===Le?1:Ne,ue.current&&(ue.current=""),L(Ne),Ne===Le-1&&setTimeout(()=>{ue.current="none",L(1)},500)},X?null:h);const ye=(Ne,Ie)=>{Ie.stopPropagation(),ue.current="",L(Ne),(0,tt.flushSync)(()=>H(!0)),H(!1)},Ve={width:`${Le*pe}px`,transform:`translateX(${-pe*N}px)`,transition:ue.current};return(0,a.jsxs)("div",{className:`${Ke["huxy-carousel"]}${C?` ${C}`:""}`,...T,ref:ie,children:[(0,a.jsx)("div",{className:Ke["huxy-carousel-wrap"],style:Ve,children:Re.map((Ne,Ie)=>(0,a.jsx)("div",{className:`${Ke["carousel-item"]} ${N===Ie?Ke.active:""}`,style:{width:`${pe}px`},children:Ne},`huxy-carousel-${Ie}`))}),(0,a.jsx)("div",{className:Ke["carousel-switch"],children:i.map((Ne,Ie)=>(0,a.jsx)("span",{className:`${Ke.dot} ${N===Ie+1?Ke.active:""}`,onClick:ct=>ye(Ie+1,ct)},`huxy-carousel-switch-${Ie}`))})]})};const ft=(i,s)=>{let h="",C="";if(typeof s=="number"&&(h=`col-${i}-${s}`),typeof s=="object"){const{span:T,offset:N}=s;h=T?`col-${i}-${T}`:"",C=N?`offset-${i}-${N}`:""}return{sp:h,os:C}};var Ct=(0,Z.forwardRef)(({span:i,offset:s,xl:h,lg:C,md:T,sm:N,xs:L,style:X,width:H,auto:ie,offsetWidth:ue="0px",className:pe,...fe},Re)=>{const Le=pe?` ${pe}`:"",ye=`col-${i||12}`,Ve=s?`offset-${s}`:"",{sp:Ne,os:Ie}=ft("xs",L),{sp:ct,os:Zt}=ft("sm",N),{sp:or,os:Pr}=ft("md",T),{sp:Yt,os:Ir}=ft("lg",C),{sp:Dr,os:Nt}=ft("xl",h),gt=[ye,Dr,Yt,or,ct,Ne,Ve,Nt,Ir,Pr,Zt,Ie].filter(Boolean).join(" "),Qe=ie?{width:"auto",flex:1,maxWidth:`calc(100% - ${ue})`}:{width:H};return(0,a.jsx)("div",{className:`${gt}${Le}`,...fe,style:{...Qe,...X},ref:Re})}),Pt=()=>{const i=(0,Z.useRef)(!0);return i.current?(i.current=!1,!0):!1},Ht=(i,s=[])=>{const h=Pt();(0,Z.useEffect)(()=>{if(!h)return i()},s)},Bt=(i,s=450)=>{const[h,C]=(0,Z.useState)(i);return Ht(()=>{let T;return i||s===0?C(i):T=setTimeout(()=>C(i),s),()=>T&&clearTimeout(T)},[i]),[h,C]},ht=({children:i,mountNode:s=document.body})=>(0,tt.createPortal)(i,s);const Ut={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},Je={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},ir={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},qt=document.body;var pt=({open:i,close:s,delay:h=300,children:C,mountNode:T,hasMask:N=!0,style:L,className:X="h-mask"})=>{const[H]=Bt(i,h);return qt.style.overflow=H?"hidden":"",(0,a.jsx)(ht,{mountNode:T,children:(0,a.jsx)("div",{children:H?(0,a.jsxs)("div",{className:X,style:Ut,children:[N?(0,a.jsx)("div",{style:Je,onClick:ie=>s==null?void 0:s(ie)}):null,(0,a.jsx)("div",{style:{...ir,...L},children:C})]}):null})})},It=re(842),vt={};vt.styleTagTransform=B(),vt.setAttributes=A(),vt.insert=p().bind(null,"head"),vt.domAPI=y(),vt.insertStyleElement=G();var ar=c()(It.Z,vt),st=It.Z&&It.Z.locals?It.Z.locals:void 0,$t=({open:i,close:s,footer:h,header:C,className:T,children:N,width:L="300px"})=>{var X;const H=["drawer-wrap",i?"open":"",...(X=T==null?void 0:T.split(" "))!=null?X:[]].filter(Boolean).map(ie=>st[ie]).join(" ");return(0,a.jsx)(pt,{open:i,close:s,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,a.jsx)("div",{className:H,style:{width:L},children:(0,a.jsxs)("div",{className:st["drawer-container"],children:[(0,a.jsxs)("div",{className:st["drawer-header"],children:[(0,a.jsx)("span",{className:`link ${st["ico-close"]}`,onClick:ie=>s==null?void 0:s(ie)}),(0,a.jsx)("div",{children:C})]}),(0,a.jsx)("div",{className:st["drawer-content"],children:N}),h?(0,a.jsx)("div",{className:st["drawer-footer"],children:h}):null]})})})},lr=(i,s,h="click")=>{(0,Z.useEffect)(()=>{const C=N=>{const L=J(i)?i.current:i;(L==null?void 0:L.contains)&&!L.contains(N.target)&&s(N)},T=typeof h=="string"?[h]:h;return T.map(N=>{document.addEventListener(N,C,!1)}),()=>{T.map(N=>{document.removeEventListener(N,C,!1)})}},[i,s,h])},Mt=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",sr=(i="")=>i.replace(/^\S/,s=>s.toUpperCase()),mt=i=>{var s;if(Ue())return i=J(i)?i.current:i!=null?i:document.body,(s=i.getBoundingClientRect)==null?void 0:s.call(i)},u=i=>{if(!Ue())return;const s=document.createElement("div");return s.innerHTML=i,s.children[0]},v=(i,s={},h=!1)=>{!Xe(i)||Object.keys(s).map(C=>{i.style.setProperty(C,h?"":s[C])})};const E=(i=350)=>new Promise(s=>setTimeout(s,i)),O=(i=100)=>{const s=Date.now();for(;Date.now()-s<=i;);};var P=E,K=async(i,s=15)=>{if(!Ue())return;if(typeof i=="string"&&(i=u(i)),i=J(i)?i.current:i,!Xe(i))return{};const h=i.cloneNode(!0);v(h,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(h),await P(s);const C=mt(h);return i.parentNode.removeChild(h),C};const he=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,de=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,ne=(i,s)=>{var h;s=`huxy-drop-arrow-${s}`;const C=(h=i.getAttribute("class"))!=null?h:"";he.test(C)?i.setAttribute("class",C.replace(de,s)):i.setAttribute("class",`${C} ${s}`)},Te=async(i,s,h)=>{const{left:C,right:T,top:N,bottom:L}=mt(i),{width:X,height:H}=lt(),{width:ie,height:ue}=await K(s);if(T<0||L<0||C>X||N>H)return{};if(h==="vertical"){const pe={left:C+"px",top:L+10+"px",right:"auto",bottom:"auto"};let fe="lt";C+ie>X&&(pe.left=T-ie+"px",fe="rt"),L+10+ue>H&&(pe.top=N-10-ue+"px",fe=fe==="lt"?"lb":"rb"),v(s,pe),ne(s,fe)}else{const pe={left:T+10+"px",top:N+"px",right:"auto",bottom:"auto"};let fe="tl";T+10+ie>X&&(pe.left=C-10-ie+"px",fe="tr"),N+ue>H&&(pe.top=L-ue+"px",fe=fe==="tl"?"bl":"br"),v(s,pe),ne(s,fe)}};var ut=(i,s,h="horizontal")=>{const C=R(Te),T=()=>C(i,s,h);window.addEventListener("scroll",T,!1),window.addEventListener("resize",T,!1);const N=()=>{window.removeEventListener("scroll",T),window.removeEventListener("resize",T),v(s,{left:"",top:"",right:"",bottom:""})};return Te(i,s,h),N},zt=({open:i,delay:s=250,children:h,mountNode:C,style:T,className:N="huxy-mask"})=>{const[L]=Bt(i,s);return(0,a.jsx)(ht,{mountNode:C,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:N,children:(0,a.jsx)("div",{style:{...T,display:L?"block":"none"},children:h})})})})},xt=re(563),_e={};_e.styleTagTransform=B(),_e.setAttributes=A(),_e.insert=p().bind(null,"head"),_e.domAPI=y(),_e.insertStyleElement=G();var _t=c()(xt.Z,_e),Dt=xt.Z&&xt.Z.locals?xt.Z.locals:void 0,wt=({trigger:i="click",type:s,dropList:h,className:C,children:T,...N})=>{const[L,X]=(0,Z.useState)(!1),H=(0,Z.useRef)(),ie=(0,Z.useRef)(),ue=(0,Z.useRef)();lr(H,ye=>L&&X(!1),[...new Set(["click",i.toLowerCase()])]),(0,Z.useEffect)(()=>()=>{var ye;return(ye=ue.current)==null?void 0:ye.call(ue)},[]);const pe=ye=>{ye.preventDefault(),X(!0),ue.current=ut(H.current,ie.current,s)},fe={[`on${sr(i)}`]:pe},Re=["drop-wrap",L?"open":""].filter(Boolean).map(ye=>Dt[ye]).join(" "),Le=Mt(h)?h:h==null?void 0:h(()=>X(!1),L);return(0,a.jsxs)("span",{ref:H,className:`${Dt["drop-target"]}${C?` ${C}`:""}`,...fe,...N,children:[T,(0,a.jsx)(zt,{open:L,className:"huxy-drop",children:(0,a.jsx)("div",{ref:ie,className:Re,children:Le})})]})},kt=(i,s={},h)=>{if(!Ue())return;h=J(h)?h.current:h!=null?h:document.body;const C=document.createElement("span");C.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),s&&v(C,s),C.innerText=i,h.appendChild(C);const T=C.getBoundingClientRect();return h.removeChild(C),T},ot=re(626),Ze={};Ze.styleTagTransform=B(),Ze.setAttributes=A(),Ze.insert=p().bind(null,"head"),Ze.domAPI=y(),Ze.insertStyleElement=G();var _r=c()(ot.Z,Ze),$r=ot.Z&&ot.Z.locals?ot.Z.locals:void 0,Gt=({title:i,placement:s="topRight",children:h,ellipsis:C,className:T,...N})=>(0,a.jsx)("span",{className:`${$r[`huxy-tooltip-${s}`]}${T?` ${T}`:""}`,tooltip:i!=null?i:h,...N,children:(0,a.jsx)("span",{className:C?$r.ellipsis:"",children:h})});const mr={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"};var xr=i=>{var s,h,C,T;const{children:N}=i,L=typeof N=="string",X=L?N:(C=(s=N==null?void 0:N.props)==null?void 0:s.title)!=null?C:(h=N==null?void 0:N.props)==null?void 0:h.children,H=(0,Z.useRef)(),[ie,ue]=(0,Z.useState)(!1),pe=Ye(H,250);return(0,Z.useEffect)(()=>{if(H.current){const{width:fe}=kt(X),{width:Re}=mt(H.current),Le=fe>Re;Le!==ie&&ue(Le)}},[X,pe.width]),(0,a.jsx)("span",{ref:H,style:{width:"100%",display:"inline-block"},children:ie?L?(0,a.jsx)(Gt,{...i,ellipsis:!0}):(0,a.jsx)("span",{style:mr,children:N}):L?N:(T=N==null?void 0:N.props)==null?void 0:T.children})},Xt=Object.defineProperty,yr=(i,s,h)=>s in i?Xt(i,s,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[s]=h,gr=(i,s,h)=>(yr(i,typeof s!="symbol"?s+"":s,h),h);class br extends Me().Component{constructor(){super(...arguments),gr(this,"state",{error:null})}static getDerivedStateFromError(s){return{error:s}}componentDidCatch(s,h){const{errorReport:C}=this.props;typeof C=="function"&&C({error:s,info:h.componentStack})}render(){const{error:s}=this.state,{fallback:h,children:C}=this.props;return s?h(s):C}}var ur=i=>s=>{if(typeof s=="function"||typeof(s==null?void 0:s.render)=="function")return(0,a.jsx)(s,{});if(typeof s=="string"){const h=i==null?void 0:i[s];return h?(0,a.jsx)(h,{}):(0,a.jsx)("i",{className:s})}return s!=null?s:null};const cr=i=>ur(i);var zr=i=>({icon:s,defaultIcon:h=null})=>s?cr(i)(s):s===!1?null:h;const Kt=["","webkit","moz","ms"],dr=i=>Kt.map(s=>s?`${s}FullscreenElement`:"fullscreenElement").find(s=>i[s]),Fr=i=>Kt.map(s=>s?`${s}RequestFullscreen`:"requestFullscreen").find(s=>i[s]),Tr=i=>Kt.map(s=>s?`${s}ExitFullscreen`:"exitFullscreen").find(s=>i[s]),Wt=Kt.map(i=>`${i}fullscreenchange`);var vr=i=>{var s,h;if(!Ue())return;i=J(i)?i.current:i!=null?i:document.body;const C=dr(document),T=Fr(i),N=Tr(document);document[C]?(h=document[N])==null||h.call(document):(s=i[T])==null||s.call(i)},wr=i=>Ue()?(Wt.map(s=>document.addEventListener(s,i,!1)),()=>Wt.map(s=>document.removeEventListener(s,i,!1))):void 0;const kr=i=>(0,a.jsx)("i",{...i,children:"..."});var Nr=({panel:i,fullIcon:s=kr,exitIcon:h=kr,...C})=>{const T=J(i)?i.current:i,[N,L]=(0,Z.useState)();(0,Z.useEffect)(()=>{const H=wr(()=>{L(ie=>!ie)});return()=>H()},[]);const X=N?h:s;return(0,a.jsx)(X,{onClick:H=>vr(T),...C})},l=(i,s)=>(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...s}),f=i=>{const{error:s={},info:h=""}=i||{},{message:C,stack:T,errMsg:N}=s;let L=N||T||s.toString();L=`${L}
${h}`.replace(/\r|\n|\r\n/g,"<br/>"),L=L.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),L=L.replace(/\s/g,"&nbsp;");const X=C==null?void 0:C.slice(0,120).split(". ").slice(0,2).join(". ");return(0,a.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[l(L,{style:{color:"red"}}),X&&(0,a.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${X}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},j=({children:i,report:s})=>{var h;const C=(0,Z.useRef)();return(h=C.current)!=null&&h.state&&(C.current.state.error=null),(0,a.jsx)(br,{ref:C,fallback:(T,N)=>f({error:T,info:N}),errorReport:s,children:i})};const b=(i,s)=>Object.keys(s).map(h=>i.style[h]=s[h]),x=(i,s)=>Object.keys(s).map(h=>i.style[h]=""),_={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},V=({left:i,top:s,width:h,height:C})=>({left:`${i}px`,top:`${s}px`,width:`${h}px`,height:`${C}px`}),Y=i=>(0,a.jsx)("i",{...i,children:"..."}),M=i=>{const{left:s,top:h}=mt(i),{width:C,height:T}=lt(i);return{left:s,top:h,width:C,height:T}};var D=({panel:i,target:s,fullIcon:h=Y,exitIcon:C=Y})=>{i=J(i)?i.current:i||document.body;const[T,N]=(0,Z.useState)(),L=(0,Z.useRef)(),X=(0,Z.useRef)();(0,Z.useEffect)(()=>{const ue=typeof s=="function"?s:()=>document.getElementsByClassName(s)[0];X.current=V(M(ue())),L.current={..._,...V(M(i))}},[i]);const H=(ue,pe)=>{ue?(b(pe,L.current),setTimeout(()=>{b(pe,X.current)},0)):x(pe,L.current),N(ue)},ie=T?C:h;return(0,a.jsx)(ie,{onClick:ue=>H(!T,i)})},le=re(697),ce={};ce.styleTagTransform=B(),ce.setAttributes=A(),ce.insert=p().bind(null,"head"),ce.domAPI=y(),ce.insertStyleElement=G();var je=c()(le.Z,ce),oe=le.Z&&le.Z.locals?le.Z.locals:void 0,ve=({open:i,close:s,hasMask:h=!0,cancelText:C="\u53D6\u6D88",submit:T,submitText:N="\u786E\u5B9A",title:L="Modal \u5F39\u7A97",className:X,children:H,delay:ie=250})=>{var ue;const pe=["modal-wrap",i?"open":"",...(ue=X==null?void 0:X.split(" "))!=null?ue:[]].filter(Boolean).map(fe=>oe[fe]).join(" ");return(0,a.jsx)(pt,{open:i,close:s,delay:ie,hasMask:h,className:"huxy-modal",children:(0,a.jsx)("div",{className:pe,children:(0,a.jsxs)("div",{className:oe["modal-container"],children:[(0,a.jsx)("div",{className:oe["modal-header"],children:L}),(0,a.jsx)("div",{className:oe["modal-content"],children:H}),(0,a.jsxs)("div",{className:oe["modal-footer"],children:[(0,a.jsx)("div",{className:`${oe.btn} ${oe.left}`,onClick:fe=>s==null?void 0:s(fe),children:C}),(0,a.jsx)("div",{className:`${oe.btn} ${oe.right}`,onClick:fe=>T==null?void 0:T(fe),children:N})]})]})})})},Ce=re(201),Q={};Q.styleTagTransform=B(),Q.setAttributes=A(),Q.insert=p().bind(null,"head"),Q.domAPI=y(),Q.insertStyleElement=G();var se=c()(Ce.Z,Q),$e=Ce.Z&&Ce.Z.locals?Ce.Z.locals:void 0,Pe=({global:i,absolute:s})=>(0,a.jsx)("div",{className:`spinner${i?" global":""}${s?" absolute":""}`,children:(0,a.jsx)("figure",{className:"spinning"})}),De=re(810),Ae={};Ae.styleTagTransform=B(),Ae.setAttributes=A(),Ae.insert=p().bind(null,"head"),Ae.domAPI=y(),Ae.insertStyleElement=G();var nt=c()(De.Z,Ae),it=De.Z&&De.Z.locals?De.Z.locals:void 0;const At=i=>{var s;return(s=i==null?void 0:i.filter)==null?void 0:s.call(i,h=>typeof h=="function")},Ft=(i,s)=>{const h=(0,Z.useRef)(),{loading:C,title:T,plugins:N,children:L,className:X,...H}=i,ie=At(N),ue=ie==null?void 0:ie.length,pe=X?` ${X}`:"",fe=J(s)?s:h;return(0,a.jsxs)("div",{className:`${it.panel}${pe}`,...H,ref:fe,children:[(T||ue)&&(0,a.jsxs)("div",{className:it["panel-header"],children:[T&&(0,a.jsx)("h4",{className:it["panel-title"],children:T}),ue&&(0,a.jsx)("div",{className:it["panel-plugins"],children:ie.map((Re,Le)=>(0,a.jsx)("span",{className:"link",children:(0,a.jsx)(Re,{panel:fe})},Le))})]}),(0,a.jsx)("div",{className:it["panel-body"],children:L}),C&&(0,a.jsx)(Pe,{})]})};var Rt=(0,Z.forwardRef)(Ft),jt=re(31),at={};at.styleTagTransform=B(),at.setAttributes=A(),at.insert=p().bind(null,"head"),at.domAPI=y(),at.insertStyleElement=G();var Et=c()(jt.Z,at),Or=jt.Z&&jt.Z.locals?jt.Z.locals:void 0;const qe=({gutter:i=10,className:s,overflow:h="hidden",...C},T)=>{var N;const L=s?` ${s}`:"";let X=10;if(Array.isArray(i)){const H=[...i];i=H[0],X=(N=H[1])!=null?N:H[0]}return(0,a.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(X/2)}px`,overflow:h},children:(0,a.jsx)("div",{className:`row${L}`,...C,ref:T})})};var St=(0,Z.forwardRef)(qe),Jt=i=>bt(i)==="array",jr=i=>Jt(i)&&!!i.length;const Lt=({item:i,to:s,preventDefault:h,stopPropagation:C,className:T,...N})=>h?(0,a.jsx)("span",{className:`link${T?` ${T}`:""}`,...N}):(0,a.jsx)("a",{href:s,className:`link${T?` ${T}`:""}`,...N}),Tt=({item:i,...s})=>(0,a.jsx)("ul",{...s}),Er=(i,...s)=>{const h={};return Object.keys(i).filter(Boolean).map(C=>{h[C]=T=>i[C](T,...s)}),h},fr=({data:i=[],events:s={},List:h=Tt,Link:C=Lt,leftIcon:T,rightIcon:N,level:L=0})=>i.map(X=>{const{name:H,path:ie,icon:ue,rightIcon:pe,active:fe,open:Re,children:Le,linkProps:ye}=X,Ve=jr(Le),Ne=Er(s,X,L,Ve),Ie=X.id||ie||H,ct=ue!=null?ue:T,Zt=pe!=null?pe:N;return Ve?(0,a.jsxs)("li",{className:Re?"open":"","has-children":"true",...Ne,children:[(0,a.jsxs)(C,{item:{...X,level:L},className:fe?"active":"",to:ie,preventDefault:!0,stopPropagation:!1,...ye,children:[ct?(0,a.jsx)("div",{className:"node-left-icon",children:ct===!0?(0,a.jsx)("i",{className:"default-left-icon"}):ct}):null,H?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:H})}):null,Zt?(0,a.jsx)("div",{className:"node-right-icon",children:Zt===!0?(0,a.jsx)("i",{className:"default-right-icon"}):Zt}):null]}),(0,a.jsx)(h,{item:X,children:fr({data:Le,events:s,List:h,Link:C,leftIcon:T,rightIcon:N,level:L+1})})]},Ie):(0,a.jsx)("li",{...Ne,children:(0,a.jsxs)(C,{item:{...X,level:L},className:fe?"active":"",to:ie,...ye,children:[ct?(0,a.jsx)("div",{className:"node-left-icon",children:ct===!0?(0,a.jsx)("i",{className:"default-left-icon"}):ct}):null,H?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:H})}):null]})},Ie)});var Qt=fr,hr=(i,...s)=>(0,a.jsx)("div",{"v-html":i,...s}),er=re(289),yt={};yt.styleTagTransform=B(),yt.setAttributes=A(),yt.insert=p().bind(null,"head"),yt.domAPI=y(),yt.insertStyleElement=G();var Rr=c()(er.Z,yt),tr=er.Z&&er.Z.locals?er.Z.locals:void 0;const Sr=i=>(0,a.jsx)("div",{style:{padding:"6px 15px"},children:i}),Wr=({activekey:i,tabs:s=[],switchTab:h,trackColor:C,flex:T},N)=>{var L;const[X,H]=(0,Z.useState)(i!=null?i:(L=s[0])==null?void 0:L.key),[ie,ue]=(0,Z.useState)({}),pe=(0,Z.useRef)({}),fe=(0,Z.useRef)();(0,Z.useEffect)(()=>{const ye=pe.current[X];ye&&Re(ye)},[]);const Re=ye=>{const{left:Ve,width:Ne}=mt(ye),Ie=mt(fe.current).left;ue({left:Ve-Ie,width:Ne})},Le=(ye,Ve)=>{ye.stopPropagation(),H(Ve),typeof h=="function"&&h(Ve),Re(ye.currentTarget)};return(0,a.jsxs)("div",{className:"tabs-header-wrap",ref:N,children:[(0,a.jsx)("ul",{className:`tabs-header${T?" flex":""}`,ref:fe,children:s.map(ye=>(0,a.jsx)("li",{ref:Ve=>pe.current[ye.key]=Ve,className:`th-item${X===ye.key?" active":""}`,onClick:Ve=>Le(Ve,ye.key),children:typeof ye.renderTabs=="function"?ye.renderTabs(ye,X===ye.key):Sr(ye.value)},ye.key))}),(0,a.jsx)("div",{className:"th-track",style:{...ie,color:C}})]})};var Zr=(0,Z.forwardRef)(Wr),Yr=(i,s,h="id",C="children")=>{if(!Jt(i))return null;const T=N=>{for(let L=0,X=N.length;L<X;L++){const H=N[L];if(H[h]===s)return[H];if(Jt(H[C])){const ie=T(H[C]);if(ie)return[H].concat(ie)}}};return T(i)},Vr=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Hr=()=>{let i=Vr();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,s=>{const h=(i+Math.random()*16)%16|0;return i=Math.floor(i/16),(s==="x"?h:h&3|8).toString(16)})};const Ur=i=>++i;var qr=()=>{const[,i]=(0,Z.useState)(0);return(0,Z.useCallback)(()=>i(Ur),[])},Gr=({item:i,style:s,...h})=>{var C;const{uuid:T,open:N}=i,L=(0,Z.useRef)(),X=(0,Z.useRef)(),H=Pt(),[ie,ue]=(0,Z.useState)("");return(0,Z.useEffect)(()=>{const pe=L.current,fe=N?`${pe.scrollHeight}px`:"0px";ue(fe)},[]),(0,Z.useEffect)(()=>{if(H)return;const pe=L.current,fe=N?"0px":`${pe.scrollHeight}px`;return ue(fe),X.current=setTimeout(()=>{const Re=N?`${pe.scrollHeight}px`:"0px";ue(Re)},5),()=>clearTimeout(X.current)},[N,(C=i.children)==null?void 0:C.length]),(0,Z.useEffect)(()=>{T&&ue("")},[T]),(0,a.jsx)("ul",{ref:L,style:{...s,maxHeight:ie},...h})},Cr=re(435),rr={};rr.styleTagTransform=B(),rr.setAttributes=A(),rr.insert=p().bind(null,"head"),rr.domAPI=y(),rr.insertStyleElement=G();var Jr=c()(Cr.Z,rr),Qr=Cr.Z&&Cr.Z.locals?Cr.Z.locals:void 0;const Xr=i=>(0,a.jsx)("ul",{...i}),Kr=(i,s)=>i?({item:h,...C})=>(0,a.jsx)(Xr,{className:s==="right"?"left":"",...C}):Gr;var Lr=i=>{var s;const{data:h=[],collapsed:C=!1,type:T="vertical",Link:N,width:L,bgColor:X,itemHeight:H,collapsedWidth:ie,itemPadding:ue,style:pe,className:fe,...Re}=i,Le=(0,Z.useRef)(),ye=(0,Z.useRef)();(0,Z.useEffect)(()=>()=>clearTimeout(Le.current),[]);const Ve=qr(),Ne=T==="horizontal",Ie=!Ne&&C,ct={onClick:(Nt,gt)=>{Nt.stopPropagation(),!Ne&&!Ie&&(Yr(h,gt.path,"path").map(Qe=>Qe.path===gt.path?Qe.open=!Qe.open:Qe.uuid=Hr()),Ve())},onMouseEnter:(Nt,gt,Qe,Ar)=>{Ie&&!Qe&&Ar&&(clearTimeout(Le.current),ye.current.style.width="var(--maxWidth)")},onMouseLeave:(Nt,gt,Qe,Ar)=>{Ie&&!Qe&&Ar&&(Le.current=setTimeout(()=>ye.current.style.width="",200))}},Zt=(Ne?["huxy-horizontal-tree",fe]:["huxy-tree",fe,Ie?"collapsed":""]).filter(Boolean).join(" "),{float:or,...Pr}=(s=Re==null?void 0:Re.style)!=null?s:{},Yt={"--bgColor":X,"--itemHeight":H,"--nodeListWidth":L,...Pr};T==="horizontal"?(Yt["--itemPadding"]=ue,Yt["--nodeFloat"]=or):(Yt["--width"]=L,Yt["--collapsedWidth"]=ie);const Ir=Kr(Ne||Ie,or),Dr=({item:Nt,className:gt,...Qe})=>Ie&&!Nt.level?(0,a.jsx)(N,{className:`link${gt?` ${gt}`:""}`,...Qe,title:Nt.title||Nt.name}):(0,a.jsx)(N,{className:`link${gt?` ${gt}`:""}`,...Qe});return(0,a.jsx)("div",{ref:ye,className:Zt,style:Yt,...Re,children:(0,a.jsx)("div",{className:"huxy-tree-track",children:(0,a.jsx)("ul",{className:"huxy-tree-root",children:Qt({data:h,events:ct,List:Ir,Link:Dr,leftIcon:!0,rightIcon:!0})})})})}}(),g}()})},4544:function(Ot,me,He){(function(Be,Se){Ot.exports=Se(He(7378))})(this,function(Be){return function(){"use strict";var Se={201:function(g,a,m){var c=m(703),k=m.n(c),y=m(414),S=m.n(y),p=S()(k());p.push([g.id,`@keyframes before {
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
`,""]),p.locals={},a.Z=p},414:function(g){g.exports=function(a){var m=[];return m.toString=function(){return this.map(function(c){var k="",y=typeof c[5]!="undefined";return c[4]&&(k+="@supports (".concat(c[4],") {")),c[2]&&(k+="@media ".concat(c[2]," {")),y&&(k+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),k+=a(c),y&&(k+="}"),c[2]&&(k+="}"),c[4]&&(k+="}"),k}).join("")},m.i=function(c,k,y,S,p){typeof c=="string"&&(c=[[null,c,void 0]]);var $={};if(y)for(var A=0;A<this.length;A++){var q=this[A][0];q!=null&&($[q]=!0)}for(var G=0;G<c.length;G++){var F=[].concat(c[G]);y&&$[F[0]]||(typeof p!="undefined"&&(typeof F[5]=="undefined"||(F[1]="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {").concat(F[1],"}")),F[5]=p),k&&(F[2]&&(F[1]="@media ".concat(F[2]," {").concat(F[1],"}")),F[2]=k),S&&(F[4]?(F[1]="@supports (".concat(F[4],") {").concat(F[1],"}"),F[4]=S):F[4]="".concat(S)),m.push(F))}},m}},703:function(g){g.exports=function(a){return a[1]}},53:function(g,a,m){var c,k=m(899),y=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function q(G,F,B){var W,te={},xe=null,we=null;B!==void 0&&(xe=""+B),F.key!==void 0&&(xe=""+F.key),F.ref!==void 0&&(we=F.ref);for(W in F)p.call(F,W)&&!A.hasOwnProperty(W)&&(te[W]=F[W]);if(G&&G.defaultProps)for(W in F=G.defaultProps,F)te[W]===void 0&&(te[W]=F[W]);return{$$typeof:y,type:G,key:xe,ref:we,props:te,_owner:$.current}}c=S,a.jsx=q,a.jsxs=q},458:function(g,a,m){g.exports=m(53)},748:function(g){var a=[];function m(y){for(var S=-1,p=0;p<a.length;p++)if(a[p].identifier===y){S=p;break}return S}function c(y,S){for(var p={},$=[],A=0;A<y.length;A++){var q=y[A],G=S.base?q[0]+S.base:q[0],F=p[G]||0,B="".concat(G," ").concat(F);p[G]=F+1;var W=m(B),te={css:q[1],media:q[2],sourceMap:q[3],supports:q[4],layer:q[5]};if(W!==-1)a[W].references++,a[W].updater(te);else{var xe=k(te,S);S.byIndex=A,a.splice(A,0,{identifier:B,updater:xe,references:1})}$.push(B)}return $}function k(y,S){var p=S.domAPI(S);p.update(y);var $=function(A){if(A){if(A.css===y.css&&A.media===y.media&&A.sourceMap===y.sourceMap&&A.supports===y.supports&&A.layer===y.layer)return;p.update(y=A)}else p.remove()};return $}g.exports=function(y,S){S=S||{},y=y||[];var p=c(y,S);return function($){$=$||[];for(var A=0;A<p.length;A++){var q=p[A],G=m(q);a[G].references--}for(var F=c($,S),B=0;B<p.length;B++){var W=p[B],te=m(W);a[te].references===0&&(a[te].updater(),a.splice(te,1))}p=F}}},736:function(g){var a={};function m(k){if(typeof a[k]=="undefined"){var y=document.querySelector(k);if(window.HTMLIFrameElement&&y instanceof window.HTMLIFrameElement)try{y=y.contentDocument.head}catch(S){y=null}a[k]=y}return a[k]}function c(k,y){var S=m(k);if(!S)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");S.appendChild(y)}g.exports=c},706:function(g){function a(m){var c=document.createElement("style");return m.setAttributes(c,m.attributes),m.insert(c,m.options),c}g.exports=a},567:function(g,a,m){function c(k){var y=m.nc;y&&k.setAttribute("nonce",y)}g.exports=c},306:function(g){function a(k,y,S){var p="";S.supports&&(p+="@supports (".concat(S.supports,") {")),S.media&&(p+="@media ".concat(S.media," {"));var $=typeof S.layer!="undefined";$&&(p+="@layer".concat(S.layer.length>0?" ".concat(S.layer):""," {")),p+=S.css,$&&(p+="}"),S.media&&(p+="}"),S.supports&&(p+="}");var A=S.sourceMap;A&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),y.styleTagTransform(p,k,y.options)}function m(k){if(k.parentNode===null)return!1;k.parentNode.removeChild(k)}function c(k){var y=k.insertStyleElement(k);return{update:function(S){a(y,k,S)},remove:function(){m(y)}}}g.exports=c},62:function(g){function a(m,c){if(c.styleSheet)c.styleSheet.cssText=m;else{for(;c.firstChild;)c.removeChild(c.firstChild);c.appendChild(document.createTextNode(m))}}g.exports=a},899:function(g){g.exports=Be}},be={};function ee(g){var a=be[g];if(a!==void 0)return a.exports;var m=be[g]={id:g,exports:{}};return Se[g](m,m.exports,ee),m.exports}(function(){ee.n=function(g){var a=g&&g.__esModule?function(){return g.default}:function(){return g};return ee.d(a,{a}),a}})(),function(){ee.d=function(g,a){for(var m in a)ee.o(a,m)&&!ee.o(g,m)&&Object.defineProperty(g,m,{enumerable:!0,get:a[m]})}}(),function(){ee.o=function(g,a){return Object.prototype.hasOwnProperty.call(g,a)}}(),function(){ee.r=function(g){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})}}(),function(){ee.nc=void 0}();var re={};return function(){ee.r(re),ee.d(re,{Link:function(){return kr},routeStore:function(){return $t},useRoute:function(){return Nr},useRouter:function(){return Tr}});var g=ee(899),a=ee.n(g),m=l=>Object.prototype.toString.call(l).slice(8,-1).toLowerCase(),c=l=>m(l)==="array",k=l=>m(l)==="object",y=l=>(l==null?void 0:l.$$typeof)&&typeof l.$$typeof=="symbol"&&l.$$typeof.description==="react.element",S=l=>l==null?void 0:l.__v_isVNode,p=(l,f)=>Object.prototype.hasOwnProperty.call(l!=null?l:{},f);const $=l=>{if(!c(l)&&!k(l))return l;const f=c(l)?[]:{};for(const j in l)if(p(l,j)){const b=l[j];f[j]=y(b)||S(b)||typeof b!="object"?b:b!==l?$(b):"cyclic"}else Object.setPrototypeOf(f,{[j]:l[j]});return f};var A=$,q=l=>m(l)==="function",G=l=>m(l)==="promise"||k(l)&&q(l.then),F=(l,f=12e4,j="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!G(l))return{};let b=null,x=null;return{promiseFn:new Promise((_,V)=>{b=(Y="canceled")=>{clearTimeout(x),_({canceled:!0,errMsg:Y})},f&&(f=typeof f!="number"?12e4:f,x=setTimeout(()=>b(j),f)),l.then(Y=>{clearTimeout(x),_({result:Y,errMsg:!1})}).catch(Y=>{clearTimeout(x),V(Y)})}),cancelFn:b}},B=l=>l?l.charAt(l.length-1)==="/"?l.slice(0,-1):l:"",W=ee(458),te=(l,f)=>(0,W.jsx)("div",{dangerouslySetInnerHTML:{__html:l},...f}),xe=l=>{const{error:f={},info:j=""}=l||{},{message:b,stack:x,errMsg:_}=f;let V=_||x||f.toString();V=`${V}
${j}`.replace(/\r|\n|\r\n/g,"<br/>"),V=V.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),V=V.replace(/\s/g,"&nbsp;");const Y=b==null?void 0:b.slice(0,120).split(". ").slice(0,2).join(". ");return(0,W.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[te(V,{style:{color:"red"}}),Y&&(0,W.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${Y}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})};const we=(l,f,j,b,x=[])=>{const _=M=>{for(let D=0,le=M.length;D<le;D++){const ce=M[D],je=ce[b].split("?")[0];if(new RegExp("^"+je.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return ce;if(c(ce[j])){const oe=_(ce[j]);if(oe)return oe}}},V=_(l);if(!V)return"/404";const{redirect:Y}=V;return Y?x.includes(Y)?x:(x.push(Y),we(l,Y.split("?")[0],j,b,x)):x[x.length-1]},et=(l,f,j,b,x)=>{if(!c(l))return null;const _=le=>{const ce=le.split("/"),je=f.split("/"),oe={};return ce.map((ve,Ce)=>ve.indexOf(":")===0&&(oe[ve.slice(1)]=je[Ce])),oe},V=(le,ce)=>{const je=[],oe=ce.split("/:")[0];for(let ve=0,Ce=le.length;ve<Ce;ve++){const Q=le[ve];if(Q[x]===oe){Q.active=!0;const{name:se,title:$e,icon:Pe,params:De}=Q;je.push({name:se,title:$e,icon:Pe,params:De,[x]:oe})}else if(ce.indexOf(`${Q[x]}/`)===0){Q.active=!0;const se=_(Q[x]),$e=Object.keys(se).map(it=>se[it]).join("/"),{name:Pe,title:De,icon:Ae}=Q,nt=$e?`${oe}/${$e}`:Q[x];je.push({name:Pe,title:De,icon:Ae,[x]:nt,params:{...Q.params,...se}})}else if(Q[x]===ce){Q.active=!0;const se=_(Q[x]),{[b]:$e,...Pe}=Q;je.push({...Pe,[x]:f,params:{...Pe.params,...j,...se}})}}return je},Y=(le,ce)=>{for(let je=0,oe=le.length;je<oe;je++){const ve=le[je];if(ce.indexOf(`${ve[x]}/`)===0){ve.active=!0;return}}},M=le=>{for(let ce=0,je=le.length;ce<je;ce++){const oe=le[ce],ve=(oe[x]||"").split("?")[0];if(ve===f){oe.hideMenu&&Y(le,oe.parentPath||ve),oe.active=!0;const{[b]:Ce,...Q}=oe;return[{...Q,params:{...Q.params,...j}}]}if(new RegExp("^"+ve.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return V(le,ve);if(c(oe[b])){const Ce=M(oe[b]);if(Ce){oe.active=!0,oe.open=!0;const{[b]:Q,...se}=oe;return[se,...Ce]}}}},D=M(l)||[];return{result:l,current:D}},tt=(l,f,j)=>l.filter(b=>b.hideMenu||b[j].indexOf("/:")>-1?!1:(c(b[f])&&(b[f]=tt(b[f],f,j)),!0));var Z=(l,f,j,b="children",x="path")=>{const _=we(l,f,b,x);if(_)return{redirect:_};const{result:V,current:Y}=et(l,f,j,b,x),M=tt(V,b,x);return{current:Y,menu:M}},Me=()=>{const l={};return{on:(f,j)=>{l[f]||(l[f]=[]),l[f].indexOf(j)===-1&&l[f].push(j)},emit:(f,j)=>{l[f]&&l[f].map(b=>b(j))},off:(f,j=null)=>{if(l[f]){if(typeof j!="function")return l[f]=[];const b=l[f].indexOf(j);b>-1&&l[f].splice(b,1)}}}};const ze=l=>{const f={};for(let j in l)p(l,j)||(f[j]=l[j]);return f};var Ue=(l,f)=>{if(!k(l))return f;if(!k(f))return l;const j={...ze(l),...ze(f)},b={...l,...f};return Object.keys(j).map(x=>{Object.setPrototypeOf(b,{[x]:j[x]})}),b},bt=()=>{const{on:l,emit:f,off:j}=Me(),b={};return{getState:x=>A(b[x]),setState:(x,_=!1)=>{if(typeof x=="function"&&(x=x(A(b))),!k(x))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const V=A(x);Object.keys(V).map(Y=>{const M=b[Y],D=V[Y],le=k(D)&&k(M)?Ue(M,D):D;!_&&f(Y,le),b[Y]=le})},subscribe:(x,_)=>(l(x,_),()=>j(x,_)),unsubscribe:j,clean:x=>{typeof x=="string"?b[x]=void 0:Array.isArray(x)?x.map(_=>b[_]=void 0):Object.keys(b).map(_=>b[_]=void 0)}}},Xe=l=>(f,j)=>{const[b,x]=(0,g.useState)(()=>{const M=l==null?void 0:l.getState(f);return M!==void 0?M:(j!==void 0&&(l==null||l.setState({[f]:j},!0)),j)}),_=(0,g.useCallback)(M=>l==null?void 0:l.setState({[f]:typeof M=="function"?M(l==null?void 0:l.getState(f)):M}),[]),V=(0,g.useCallback)(M=>l==null?void 0:l.subscribe(f,M),[]),Y=(0,g.useCallback)((M=M)=>l==null?void 0:l.clean(M),[]);return(0,g.useEffect)(()=>{l==null||l.subscribe(f,M=>x(M))},[]),[b,_,V,Y]};const lt=bt(),R=Xe(lt),ae=Me(),J=Me(),ke="push-emitter",Fe="replace-emitter",dt="useRoute-emitter",Ye={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},rt={getState:()=>history.state,go:l=>history.go(l),forward:()=>history.forward(),back:()=>history.back()};var Oe=l=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(l);const Ge=(l,f)=>{const j=["#/","/"],b=j[!!f-0];if(!l||j.includes(l))return b;const x=l.charAt(l.length-1)==="/"?l.slice(0,-1):l;return f||x.indexOf("#/")>-1?x:`#${x}`},Ke=(l,f,j,b=!1)=>{const x=Ge(f,j);return b?x:j?l&&x==="/"?l:`${l}${x}`:l?`${l}/${x}`:x},nr=(l,f,j,b,x,_)=>{if(!c(l))return l;const V=(Y,M="")=>Y.filter(D=>!D.denied).map(D=>{if(!_&&!D.exact&&!Oe(D[b])){(!D[b]||D[b]==="javascript:;")&&(D[b]="");const le=D[b].charAt(0)==="/"&&M.charAt(M.length-1)==="/"?D[b].slice(1):D[b].charAt(0)!=="/"&&M.charAt(M.length-1)!=="/"?`/${D[b]}`:D[b];D[b]=M?M+le:Ke(x,le,f)}return D.redirect&&(D.redirect=Ke(x,D.redirect,f)),c(D[j])&&(D[j]=V(D[j],D[b]),!D.redirect&&D[j].length&&(D.redirect=D[j][0][b])),D});return V(l)};var ft=l=>{if(!k(l))return"";const f=[];return Object.keys(l).map((j,b)=>{const x=b>0?"&":"?";f.push(`${x}${j}=${l[j]}`)}),f.join("")},Ct=(l="")=>{const[f,j]=l.split("?");if(j){const b={};return j.split("&").map(x=>{const[_,V]=x.split("=");b[_]=V}),{path:f,params:b}}return{path:f}};const Pt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Ht=(l,f)=>{for(let j=l.length-1,b;b=l[j--];){const{title:x,name:_}=b;if(typeof x=="string"&&x.length)return document.title=x;if((x==null||x===!0)&&_)return document.title=f?`${_}-${f}`:_;if(f)return document.title=f}},Bt=l=>{const{pathname:f,search:j,hash:b}=location;if(l){const Y=Ge(f,l),M=decodeURIComponent(`${Y}${j}`),{params:D}=Ct(M);return{path:M,params:D}}const x=decodeURIComponent(Ge(b,l)),{params:_}=Ct(x),V=B(f);return{path:V?`${V}/${x}`:x,params:_}},ht=(l,f,j)=>{typeof l=="function"&&l({...f,stay:new Date-j})},Ut=(l,f,j,b)=>{let x,_,V;if(typeof l=="string")x=l;else if(k(l))x=l.path,_=l.params,V=l.query;else return;!x||x==="."||x==="./"?x=b:x.indexOf("./")===0&&(x=`${b.split("?")[0]}${x.replace("./","/")}`),x=Ke(f,x,j,l==null?void 0:l.exact);const Y=Ct(x);x=Y.path;const M={...Y.params,...V},D=ft(M);return x=`${x}${D}`,_={..._,...M},{path:x,params:_}},Je=(l,f)=>{const j=l.split(f);return j.length>1?["","/"].includes(j[1].slice(0,1)):!1},ir=Me();var qt=l=>{const{on:f,emit:j,off:b}=ir;return{on:x=>f(l,x),emit:x=>j(l,x),off:x=>b(l,x)}},pt=l=>(f,j)=>{const{getState:b,setState:x,subscribe:_,unsubscribe:V,clean:Y}=l;return j!==void 0&&x({[f]:j},!0),{getState:()=>b(f),setState:(M,D)=>x({[f]:M},D),subscribe:M=>_(f,M),unsubscribe:()=>V(f),clean:()=>Y(f)}};const It=bt();var vt=pt(It);const ar=qt("push-emitter"),st=qt("replace-emitter"),$t=vt("route-store"),lr=Me(),Mt=bt(),sr=Xe(Mt);var mt=()=>![typeof window,typeof document].includes("undefined"),u=l=>{if(!mt())return;const f=document.createElement("div");return f.innerHTML=l,f.children[0]},v=Object.defineProperty,E=(l,f,j)=>f in l?v(l,f,{enumerable:!0,configurable:!0,writable:!0,value:j}):l[f]=j,O=(l,f,j)=>(E(l,typeof f!="symbol"?f+"":f,j),j);class P extends a().Component{constructor(){super(...arguments),O(this,"state",{error:null})}static getDerivedStateFromError(f){return{error:f}}componentDidCatch(f,j){const{errorReport:b}=this.props;typeof b=="function"&&b({error:f,info:j.componentStack})}render(){const{error:f}=this.state,{fallback:j,children:b}=this.props;return f?j(f):b}}var K=({children:l,report:f})=>{var j;const b=(0,g.useRef)();return(j=b.current)!=null&&j.state&&(b.current.state.error=null),(0,W.jsx)(P,{ref:b,fallback:(x,_)=>xe({error:x,info:_}),errorReport:f,children:l})},he=ee(748),de=ee.n(he),ne=ee(306),Te=ee.n(ne),ut=ee(736),zt=ee.n(ut),xt=ee(567),_e=ee.n(xt),_t=ee(706),Dt=ee.n(_t),wt=ee(62),kt=ee.n(wt),ot=ee(201),Ze={};Ze.styleTagTransform=kt(),Ze.setAttributes=_e(),Ze.insert=zt().bind(null,"head"),Ze.domAPI=Te(),Ze.insertStyleElement=Dt();var _r=de()(ot.Z,Ze),$r=ot.Z&&ot.Z.locals?ot.Z.locals:void 0,Gt=({global:l,absolute:f})=>(0,W.jsx)("div",{className:`spinner${l?" global":""}${f?" absolute":""}`,children:(0,W.jsx)("figure",{className:"spinning"})}),mr=()=>{const l=(0,g.useRef)([]);return(0,g.useEffect)(()=>()=>{l.current.map(f=>f.cancelFn()),l.current=[]},[]),{cancelablePromise:(0,g.useCallback)((f,j=!0)=>{const b=F(f,j);return l.current.indexOf(b)===-1&&l.current.push(b),b.promiseFn},[])}},xr=(l={})=>{const{cancelablePromise:f}=mr(),[j,b]=(0,g.useState)(l),x=(0,g.useRef)({}),_=(0,g.useRef)({}),V=(0,g.useCallback)((M=null)=>{Array.isArray(M)&&M.length?M.map(D=>x.current[D]=l[D]):x.current=l},[]),Y=(0,g.useCallback)((M,D,le=!1)=>{const ce=Object.keys(M),je=JSON.stringify(ce.sort());if(!_.current[je]){_.current[je]=!0,le&&V(Array.isArray(le)?le:ce),ce.map(oe=>{x.current[oe]||(x.current[oe]={}),x.current[oe].pending=!0}),b({...x.current});for(let oe=0,ve=ce.length;oe<ve;oe++){const Ce=ce[oe];f(M[Ce]).then(Q=>{let{result:se,errMsg:$e}=Q;oe===ve-1&&(_.current[je]=!1),typeof D=="function"&&(se=D(se)||se),x.current[Ce]={...se,pending:!1},$e===!1&&b({...x.current})}).catch(Q=>{throw oe===ve-1&&(_.current[je]=!1),x.current[Ce]={error:Q,pending:!1},b({...x.current}),Q})}}},[]);return[j,Y,V]};const Xt=l=>Object.keys(l).length;var yr=l=>{const{Comp:f,restResolve:j,loadPromise:b,params:x,children:_}=l,[V,Y]=xr(),[M,D]=xr();return(0,g.useEffect)(()=>{Xt(j)&&Y(j),Xt(b)&&D(b)},[j,b]),(0,g.useEffect)(()=>{const le=Xt(V);le&&le===Xt(j)&&x.store.setState(V)},[V]),(0,W.jsx)(f,{...x,...V,...M,children:_})};const gr=l=>l===!1?null:y(l)?l:q(l)?(0,W.jsx)(l,{}):(0,W.jsx)(Gt,{}),br=({Loading:l,ErrorBoundary:f,loadedComp:j})=>{const b=(0,W.jsx)(g.Suspense,{fallback:gr(l),children:j});return f===!1?b:q(f)?(0,W.jsx)(f,{children:b}):(0,W.jsx)(K,{children:b})};var ur=({Comp:l,routerProps:f,children:j})=>{const{params:b,...x}=f,{loading:_,errorBoundary:V,...Y}=b,M=(0,W.jsx)(yr,{Comp:l,...x,params:Y,children:j});return br({Loading:_,ErrorBoundary:V,loadedComp:M})};const cr={},zr=(l,f,j)=>{const b={},x={};return k(l)?(Object.keys(l).map(_=>{const V=f.getState(_);V==null?x[_]=l[_](j):b[_]=V}),{cachedResolve:b,restResolve:x}):{cachedResolve:b,restResolve:x}},Kt=(l,f)=>{if(!k(l))return{};const j={};return Object.keys(l).map(b=>j[b]=l[b](f)),j},dr=(l,f,j)=>G(j)?j.then(b=>{var x;return ur({Comp:l,routerProps:f,children:(x=b.default)!=null?x:b})}):ur({Comp:l,routerProps:f,children:j});var Fr=l=>{const{current:f,menu:j,...b}=l,x=f.map(Y=>{const{component:M,resolve:D,loadData:le,loading:ce,errorBoundary:je,icon:oe,...ve}=Y;return ve}),_=[...f].filter(Y=>Y.component),V=(Y=0)=>{if(!_.length)return null;const M=_.shift(),{component:D,resolve:le,loadData:ce,icon:je,key:oe,...ve}=M;if(typeof D=="function"||G(D)){const Ce=ve.path;let Q=cr[Ce];const{cachedResolve:se,restResolve:$e}=zr(le,b.store,ve),Pe={loadPromise:Kt(ce,ve),restResolve:$e,params:{current:x,...b,...ve,...se}},De=V(Y+1);if(Q)return dr(Q,Pe,De);try{Q=D(),Q=y(Q)?D:Q}catch(Ae){Q=D}return G(Q)?Q.then(Ae=>{var nt;return Q=(nt=Ae.default)!=null?nt:Ae,cr[Ce]=Q,dr(Q,Pe,De)}):(cr[Ce]=Q,dr(Q,Pe,De))}return typeof D=="string"?u(D):D};return V()},Tr=l=>{const[f,j]=(0,g.useState)(l),[b,x]=(0,g.useState)(),[_,V]=(0,g.useState)(),Y=(0,g.useRef)(),M=(0,g.useRef)(),D=(0,g.useRef)(),le=(0,g.useRef)(),ce=()=>{typeof Y.current=="function"&&(Y.current({cancel:Ye.cancelMsg}),Y.current=null)},je=(0,g.useCallback)(se=>{typeof se=="function"?j($e=>({...$e,...se($e)})):k(se)&&j($e=>({...$e,...se}))},[]),oe=(se,$e="pushState")=>{const{basepath:Pe,browserRouter:De}=le.current,Ae=D.current,{path:nt,params:it}=Ut(se,Pe,De,Ae);nt!==Ae&&Q({inputPath:nt,inputParams:it},()=>history[$e](se==null?void 0:se.state,"",nt))},ve=(0,g.useCallback)(se=>oe(se),[]),Ce=(0,g.useCallback)(se=>oe(se,"replaceState"),[]),Q=(0,g.useCallback)(({inputPath:se="",inputParams:$e={}},Pe)=>{const De=+new Date,{browserRouter:Ae,childKey:nt,idKey:it,title:At,routers:Ft,beforeRender:Rt,afterRender:jt,basepath:at,allowedNotFound:Et,...Or}=le.current;if(!se){const{path:qe,params:St}=Bt(Ae);se=qe,$e={...$e,...St}}new Promise((qe,St)=>{Ft!=null&&Ft.length||St("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),se!==D.current&&typeof Rt=="function"?Rt({path:se,params:$e,prevPath:D.current},qe,St):qe()}).then(qe=>{var St,Jt;if(qe===!1)return;const jr=qe==null?void 0:qe.path;if(jr&&Ke(at,jr,Ae)!==se){Ce(qe);return}M.current=(St=M.current)!=null?St:se;const{redirect:Lt,current:Tt,menu:Er}=Z(A(Ft),se.split("?")[0],$e,nt,it);if(Lt){if(Et&&Lt==="/404"&&(typeof Et=="boolean"||typeof Et=="string"&&Je(M.current,Et)||c(Et)&&Et.find(hr=>Je(M.current,hr))))return;if(c(Lt)){console.error(`\u522B\u95F9\uFF0C[${[se,...Lt].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}ve({path:Lt,exact:Lt!=="/404"});return}Pe==null||Pe(),(se==null?void 0:se.split("?")[0])!==((Jt=D.current)==null?void 0:Jt.split("?")[0])&&Pt(),Ht(Tt,At);const fr={eventBus:lr,store:Mt,useStore:sr,...Or,updateRouter:je,router:{push:ve,replace:Ce},current:Tt,menu:Er,inputPath:M.current,prevPath:D.current,basepath:at,title:At,history:rt};$t.setState({...fr,browserRouter:Ae});const Qt=Fr(fr);if(D.current=se,M.current=null,ce(),G(Qt)){const{promiseFn:hr,cancelFn:er}=F(Qt,{delay:Ye.delay,msg:{timeout:Ye.timeoutMsg}});return Y.current=er,V(!0),hr.then(yt=>{Y.current=null;const{result:Rr,errMsg:tr}=yt,Sr=tr===!1?Rr:tr!=null&&tr.timeout?xe({error:{errMsg:`${se} ${tr.timeout}`}}):null;Sr&&(V(!1),ht(jt,Tt.slice(-1)[0],De),x(Sr))}).catch(yt=>{throw Y.current=null,V(!1),ht(jt,Tt.slice(-1)[0],De),x(xe({error:yt})),yt})}ht(jt,Tt.slice(-1)[0],De),x(Qt)}).catch(qe=>{throw x(xe({error:qe})),qe})},[]);return(0,g.useEffect)(()=>{const{childKey:se="children",idKey:$e="path",browserRouter:Pe=!1,routers:De=[],basepath:Ae="",exact:nt=!1,inputPath:it="",inputParams:At={},...Ft}=f,Rt=B(Ae),jt=nr(A(De),Pe,se,$e,Rt,nt);le.current={...Ft,childKey:se,idKey:$e,browserRouter:Pe,routers:jt,basepath:Rt};const at=Pe?"popstate":"hashchange",Et=()=>Q({});return Q({inputPath:it,inputParams:At}),ar.on(ve),st.on(Ce),window.addEventListener(at,Et,!1),()=>{ce(),ar.off(ve),st.off(Ce),window.removeEventListener(at,Et,!1)}},[f]),{updateRouter:je,output:b,loading:_}},Wt=l=>{const{to:f,onClick:j,preventDefault:b,stopPropagation:x=!0,exact:_=!0,target:V,...Y}=l,M=()=>{const D=typeof f=="string"?{exact:_,path:f}:{exact:_,...f};ar.emit(D)};return D=>{var le;if(D.preventDefault(),x&&D.stopPropagation(),!(Y!=null&&Y.disabled)){if(!b){if(V){const{browserRouter:ce}=$t.getState(),je=typeof f=="string"?f:(le=f==null?void 0:f.path)!=null?le:"",oe=ft(f==null?void 0:f.query),ve=ce||je.indexOf("#/")>-1||Oe(je);window==null||window.open(`${ve?"":"#"}${je}${oe}`,V);return}M()}typeof j=="function"&&j()}}};const vr={cursor:"pointer"},wr=(l,f)=>[...new Set([...(f!=null?f:"").trim().split(" "),...(l!=null?l:"").trim().split(" ")])].filter(Boolean).join(" ");var kr=l=>{const{to:f,onClick:j,preventDefault:b,stopPropagation:x,exact:_,target:V,className:Y,style:M,...D}=l;return(0,W.jsx)("span",{onClick:Wt(l),className:wr(Y,"link"),style:{...vr,style:M},...D})};const Nr=()=>$t.getState()}(),re}()})},2445:function(Ot,me,He){(function(Be,Se){Ot.exports=Se(He(7378))})(this,function(Be){return function(){"use strict";var Se={53:function(g,a,m){var c,k=m(899),y=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function q(G,F,B){var W,te={},xe=null,we=null;B!==void 0&&(xe=""+B),F.key!==void 0&&(xe=""+F.key),F.ref!==void 0&&(we=F.ref);for(W in F)p.call(F,W)&&!A.hasOwnProperty(W)&&(te[W]=F[W]);if(G&&G.defaultProps)for(W in F=G.defaultProps,F)te[W]===void 0&&(te[W]=F[W]);return{$$typeof:y,type:G,key:xe,ref:we,props:te,_owner:$.current}}c=S,a.jsx=q,c=q},458:function(g,a,m){g.exports=m(53)},899:function(g){g.exports=Be}},be={};function ee(g){var a=be[g];if(a!==void 0)return a.exports;var m=be[g]={exports:{}};return Se[g](m,m.exports,ee),m.exports}(function(){ee.d=function(g,a){for(var m in a)ee.o(a,m)&&!ee.o(g,m)&&Object.defineProperty(g,m,{enumerable:!0,get:a[m]})}})(),function(){ee.o=function(g,a){return Object.prototype.hasOwnProperty.call(g,a)}}(),function(){ee.r=function(g){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})}}();var re={};return function(){ee.r(re),ee.d(re,{createContainer:function(){return a},useAsync:function(){return $},useCancelablePromise:function(){return p},useClickAway:function(){return G},useDebounce:function(){return B},useDelayState:function(){return xe},useEleResize:function(){return Ue},useEvent:function(){return bt},useFirstMounted:function(){return W},useInterval:function(){return Xe},usePrevious:function(){return lt},useRaf:function(){return ze},useScroll:function(){return ae},useSearch:function(){return Pt},useStateFromProps:function(){return Ht},useStore:function(){return qt},useTime:function(){return lr},useUpdate:function(){return sr},useUpdateEffect:function(){return te},useWinResize:function(){return mt}});var g=ee(899),a=u=>(v,E)=>{const[O,P]=(0,g.useState)(()=>{const ne=u==null?void 0:u.getState(v);return ne!==void 0?ne:(E!==void 0&&(u==null||u.setState({[v]:E},!0)),E)}),K=(0,g.useCallback)(ne=>u==null?void 0:u.setState({[v]:typeof ne=="function"?ne(u==null?void 0:u.getState(v)):ne}),[]),he=(0,g.useCallback)(ne=>u==null?void 0:u.subscribe(v,ne),[]),de=(0,g.useCallback)((ne=ne)=>u==null?void 0:u.clean(ne),[]);return(0,g.useEffect)(()=>{u==null||u.subscribe(v,ne=>P(ne))},[]),[O,K,he,de]},m=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),c=u=>m(u)==="object",k=u=>m(u)==="function",y=u=>m(u)==="promise"||c(u)&&k(u.then),S=(u,v=12e4,E="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!y(u))return{};let O=null,P=null;return{promiseFn:new Promise((K,he)=>{O=(de="canceled")=>{clearTimeout(P),K({canceled:!0,errMsg:de})},v&&(v=typeof v!="number"?12e4:v,P=setTimeout(()=>O(E),v)),u.then(de=>{clearTimeout(P),K({result:de,errMsg:!1})}).catch(de=>{clearTimeout(P),he(de)})}),cancelFn:O}},p=()=>{const u=(0,g.useRef)([]);return(0,g.useEffect)(()=>()=>{u.current.map(v=>v.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,g.useCallback)((v,E=!0)=>{const O=S(v,E);return u.current.indexOf(O)===-1&&u.current.push(O),O.promiseFn},[])}},$=(u={})=>{const{cancelablePromise:v}=p(),[E,O]=(0,g.useState)(u),P=(0,g.useRef)({}),K=(0,g.useRef)({}),he=(0,g.useCallback)((ne=null)=>{Array.isArray(ne)&&ne.length?ne.map(Te=>P.current[Te]=u[Te]):P.current=u},[]),de=(0,g.useCallback)((ne,Te,ut=!1)=>{const zt=Object.keys(ne),xt=JSON.stringify(zt.sort());if(!K.current[xt]){K.current[xt]=!0,ut&&he(Array.isArray(ut)?ut:zt),zt.map(_e=>{P.current[_e]||(P.current[_e]={}),P.current[_e].pending=!0}),O({...P.current});for(let _e=0,_t=zt.length;_e<_t;_e++){const Dt=zt[_e];v(ne[Dt]).then(wt=>{let{result:kt,errMsg:ot}=wt;_e===_t-1&&(K.current[xt]=!1),typeof Te=="function"&&(kt=Te(kt)||kt),P.current[Dt]={...kt,pending:!1},ot===!1&&O({...P.current})}).catch(wt=>{throw _e===_t-1&&(K.current[xt]=!1),P.current[Dt]={error:wt,pending:!1},O({...P.current}),wt})}}},[]);return[E,de,he]},A=(u,v)=>Object.prototype.hasOwnProperty.call(u!=null?u:{},v),q=u=>A(u,"current"),G=(u,v,E="click")=>{(0,g.useEffect)(()=>{const O=K=>{const he=q(u)?u.current:u;(he==null?void 0:he.contains)&&!he.contains(K.target)&&v(K)},P=typeof E=="string"?[E]:E;return P.map(K=>{document.addEventListener(K,O,!1)}),()=>{P.map(K=>{document.removeEventListener(K,O,!1)})}},[u,v,E])},F=(u=()=>{},v=60)=>{let E=null;return function(...O){clearTimeout(E),E=setTimeout(()=>u.apply(this,O),v)}},B=(u,v=60)=>(0,g.useMemo)(()=>F(u,v),[v]),W=()=>{const u=(0,g.useRef)(!0);return u.current?(u.current=!1,!0):!1},te=(u,v=[])=>{const E=W();(0,g.useEffect)(()=>{if(!E)return u()},v)},xe=(u,v=450)=>{const[E,O]=(0,g.useState)(u);return te(()=>{let P;return u||v===0?O(u):P=setTimeout(()=>O(u),v),()=>P&&clearTimeout(P)},[u]),[E,O]},we=()=>![typeof window,typeof document].includes("undefined"),et=u=>m(u).indexOf("element")>-1,tt=(u=null)=>{var v,E;return we()?et(u)?{width:u.clientWidth,height:u.clientHeight}:{width:(v=window.innerWidth)!=null?v:document.documentElement.clientWidth,height:(E=window.innerHeight)!=null?E:document.documentElement.clientHeight}:{width:0,height:0}};const Z=(u,v)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const E=document.createElement("object");return E.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),E.setAttribute("class","resize-sensor"),E.onload=()=>{E.contentDocument.defaultView.addEventListener("resize",v,!1),v()},E.type="text/html",u.appendChild(E),E.data="about:blank",E};var Me=(u,v=60)=>{if(!we())return;u=q(u)?u.current:u!=null?u:document.body;let E,O=[];const P=F(()=>O.map(ne=>ne(u)),v),K=ne=>{E||(E=Z(u,P)),O.indexOf(ne)===-1&&O.push(ne)},he=ne=>{const Te=O.indexOf(ne);Te!==-1&&O.splice(Te,1),O.length===0&&E&&de()},de=()=>{E&&E.parentNode&&(E.contentDocument&&E.contentDocument.defaultView.removeEventListener("resize",P,!1),E.parentNode.removeChild(E),E=void 0,O=[])};return{element:u,bind:K,unbind:he,destroy:de}},ze=(u={})=>{const v=(0,g.useRef)(0),[E,O]=(0,g.useState)(u),P=(0,g.useCallback)(K=>{cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>O(K))},[]);return(0,g.useEffect)(()=>()=>cancelAnimationFrame(v.current),[]),[E,P]},Ue=(u=null,v=60)=>{const E=q(u)?u.current:u,{bind:O,destroy:P}=Me(E,v),[K,he]=ze(tt(E));return(0,g.useEffect)(()=>(O(()=>E&&he(tt(E))),()=>P()),[E]),K},bt=u=>{const v=(0,g.useRef)(null);return(0,g.useLayoutEffect)(()=>{v.current=u}),(0,g.useCallback)(v.current,[])},Xe=(u,v)=>{const E=(0,g.useRef)();(0,g.useEffect)(()=>{E.current=u},[u]),(0,g.useEffect)(()=>{if(v){const O=setInterval(()=>E.current(),v);return()=>clearInterval(O)}},[v])},lt=u=>{const v=(0,g.useRef)();return(0,g.useEffect)(()=>{v.current=u},[u]),v.current},R=(u=null)=>{var v,E,O,P;return we()?et(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:(E=(v=window.pageXOffset)!=null?v:document.documentElement.scrollLeft)!=null?E:document.body.scrollLeft,top:(P=(O=window.pageYOffset)!=null?O:document.documentElement.scrollTop)!=null?P:document.body.scrollTop}:{left:0,top:0}},ae=(u=null)=>{const[v,E]=ze(R(u));return(0,g.useEffect)(()=>{const O=()=>E(R(u)),P=et(u)?u:window;return P.addEventListener("scroll",O,{capture:!1,passive:!0}),()=>P.removeEventListener("scroll",O)},[u]),v},J=u=>m(u)==="array",ke=u=>J(u)&&!!u.length,Fe=(u,v,E=[],O=!1,P=null)=>ke(u)?v?(E=typeof E=="string"?E.split(","):E,u.filter(K=>(E=E.length>0?E:Object.keys(K),E.filter(he=>{const de=K[he];if(de==null)return!1;if(O)return de===v;const ne=new RegExp(v,"gi"),Te=de.toString().match(ne);return Te&&P&&(K[he]=P(de.toString().replace(ne,`<span style="background-color:yellow">${Te[0]}</span>`),{display:"inline-block"})),Te}).length))):u:[],dt=(u,v="id")=>{if(!ke(u))return u;const E=[],O=[];return u.map(P=>{const K=c(P)?P[v]:P;O.includes(K)||(O.push(K),E.push(P))}),E},Ye=u=>(u==null?void 0:u.$$typeof)&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",rt=u=>u==null?void 0:u.__v_isVNode;const Oe=u=>{if(!J(u)&&!c(u))return u;const v=J(u)?[]:{};for(const E in u)if(A(u,E)){const O=u[E];v[E]=Ye(O)||rt(O)||typeof O!="object"?O:O!==u?Oe(O):"cyclic"}else Object.setPrototypeOf(v,{[E]:u[E]});return v};var Ge=Oe;const Ke=u=>(v,E="children")=>{if(!Array.isArray(v))return v;const O=Ge(v),P=K=>{const he=[];return K.map(de=>{if(ke(de[E])){const ne=P(de[E])||[];de[E]=ne,ne.length>0&&he.push(de)}}),u(K,he)};return P(O)};var nr=(u,v,E,O="name",P="id",K="children",he=!1)=>Ke((de,ne)=>dt([...Fe(de,v,O,he,E),...ne],P))(u,K),ft=ee(458),Ct=(u,v)=>(0,ft.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...v}),Pt=(u=null,v=Ct)=>{const[E,O]=(0,g.useState)(u),P=(0,g.useCallback)((...K)=>{const[he,de,...ne]=K;if(!de)O(null);else{K=[he,de,v,...ne];const Te=nr(...K);O(Te)}},[]);return[E,P]},Ht=u=>{const[v,E]=(0,g.useState)(u);return(0,g.useEffect)(()=>E(u),[u]),[v,E]},Bt=()=>{const u={};return{on:(v,E)=>{u[v]||(u[v]=[]),u[v].indexOf(E)===-1&&u[v].push(E)},emit:(v,E)=>{u[v]&&u[v].map(O=>O(E))},off:(v,E=null)=>{if(u[v]){if(typeof E!="function")return u[v]=[];const O=u[v].indexOf(E);O>-1&&u[v].splice(O,1)}}}};const ht=u=>{const v={};for(let E in u)A(u,E)||(v[E]=u[E]);return v};var Ut=(u,v)=>{if(!c(u))return v;if(!c(v))return u;const E={...ht(u),...ht(v)},O={...u,...v};return Object.keys(E).map(P=>{Object.setPrototypeOf(O,{[P]:E[P]})}),O},Je=()=>{const{on:u,emit:v,off:E}=Bt(),O={};return{getState:P=>Ge(O[P]),setState:(P,K=!1)=>{if(typeof P=="function"&&(P=P(Ge(O))),!c(P))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const he=Ge(P);Object.keys(he).map(de=>{const ne=O[de],Te=he[de],ut=c(Te)&&c(ne)?Ut(ne,Te):Te;!K&&v(de,ut),O[de]=ut})},subscribe:(P,K)=>(u(P,K),()=>E(P,K)),unsubscribe:E,clean:P=>{typeof P=="string"?O[P]=void 0:Array.isArray(P)?P.map(K=>O[K]=void 0):Object.keys(O).map(K=>O[K]=void 0)}}};const ir=Je();var qt=a(ir);const pt=u=>u<10?"0"+u:u;var It=(u=new Date)=>{const v=new Date(u),E=v.getFullYear(),O=v.getDay(),P=pt(v.getMonth()+1),K=pt(v.getDate()),he=pt(v.getHours()),de=pt(v.getMinutes()),ne=pt(v.getSeconds());return[E,P,K,he,de,ne,O]};const vt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],ar=(u,v,E="-")=>u.replace(new RegExp(E,"g"),v);var st=(u=new Date,v=["-","-"," ",":",":",""],E=vt)=>{const O=It(u);let P="";return v.map((K,he)=>{var de;return P+=(he===6?E[O[he]]:(de=O[he])!=null?de:"")+K}),P};const $t=()=>st(new Date,["-","-"," ",":",":"," ",""]);var lr=()=>{const[u,v]=(0,g.useState)("");return Xe(()=>{v($t())},1e3),[u]};const Mt=u=>++u;var sr=()=>{const[,u]=(0,g.useState)(0);return(0,g.useCallback)(()=>u(Mt),[])},mt=()=>{const[u,v]=ze(tt());return(0,g.useEffect)(()=>{const E=()=>v(tt());return window.addEventListener("resize",E,!1),()=>window.removeEventListener("resize",E,!1)},[]),u}}(),re}()})},5820:function(Ot){(function(me,He){Ot.exports=He()})(this,function(){return function(){"use strict";var me={};(function(){me.d=function(e,t){for(var r in t)me.o(t,r)&&!me.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){me.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){me.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();var He={};me.r(He),me.d(He,{a2o:function(){return Be},addAtNext:function(){return re},addAtPos:function(){return g},addClass:function(){return m},addDays:function(){return c},addHours:function(){return k},addMonths:function(){return y},addNodes:function(){return S},addScript:function(){return $},addStyle:function(){return A},addYears:function(){return q},arr2Tree:function(){return we},arr2TreeById:function(){return et},arr2TreeByPath:function(){return tt},arr2obj:function(){return G},arr2str:function(){return xe},backTop:function(){return ae},base2Ten:function(){return J},baseConversion:function(){return Fe},baseFetch:function(){return ft},cacheData:function(){return ir},cancelablePromise:function(){return Ge},changePos:function(){return qt},classifyArr:function(){return pt},clone:function(){return Je},compareVersion:function(){return It},compose:function(){return vt},copyToClipboard:function(){return ar},createContainer:function(){return st},createElement:function(){return lr},createNode:function(){return O},createStore:function(){return de},createTextElement:function(){return $t},curry:function(){return ne},cyclic:function(){return Ct},dash2camel:function(){return Te},debounce:function(){return ut},deleteNodes:function(){return zt},deviceType:function(){return xt},dlfile:function(){return Dt},dropInfo:function(){return br},editNodes:function(){return ur},emitter:function(){return P},equal:function(){return Ht},escapeHTML:function(){return cr},eventBus:function(){return Kt},fetcher:function(){return Tr},filter:function(){return vr},filterList:function(){return Nr},findMax:function(){return l},firstUpper:function(){return f},fixFileSizeUnit:function(){return j},fixPath:function(){return b},fixRoute:function(){return x},fixSize:function(){return _},fixTimeUnit:function(){return V},flatten:function(){return M},formatNum:function(){return D},formatPassTime:function(){return je},formatTime:function(){return Ce},fullScreen:function(){return Ae},getElementsSize:function(){return mr},getExplore:function(){return it},getLeaveTime:function(){return jt},getMeta:function(){return Or},getMonthDays:function(){return qe},getOffset:function(){return St},getOsInfo:function(){return jr},getParams:function(){return Lt},getPosition:function(){return kt},getRelative:function(){return fr},getSelected:function(){return Qt},getTextSize:function(){return hr},getTime:function(){return ce},getTouchPosition:function(){return Er},getType:function(){return Se},getValue:function(){return Rr},getViewportSize:function(){return wt},hasClass:function(){return tr},hasProp:function(){return Me},hex2rgba:function(){return Sr},imgtocanvas:function(){return Wr},isArray:function(){return be},isAsync:function(){return Oe},isBrowser:function(){return p},isDate:function(){return Zr},isElement:function(){return a},isError:function(){return Yr},isFunction:function(){return rt},isIE:function(){return Vr},isObject:function(){return F},isReactComp:function(){return Hr},isReactEle:function(){return Bt},isRef:function(){return ze},isRegExp:function(){return Ur},isTouch:function(){return Tt},isUrl:function(){return qr},isValidArr:function(){return Wt},isValidObj:function(){return Gr},isVueEle:function(){return ht},json2str:function(){return Cr},loadBase64:function(){return rr},loadImage:function(){return Jr},loop:function(){return Qr},matchedStr:function(){return Xr},memoize:function(){return Kr},merge:function(){return C},mergeArr:function(){return i},mergeClass:function(){return T},mergeObj:function(){return h},mergeOwnProp:function(){return he},message:function(){return pe},monthDate:function(){return fe},moveNodes:function(){return Re},obj2arr:function(){return Le},obj2str:function(){return W},omit:function(){return ye},once:function(){return Ve},padStart:function(){return Ne},params2data:function(){return Ye},params2str:function(){return dt},pick:function(){return Ie},promisify:function(){return ct},randColor:function(){return Zt},randItem:function(){return Pr},randNum:function(){return or},randPercent:function(){return Yt},randStr:function(){return Ir},randTrue:function(){return Dr},removeClass:function(){return N},resize:function(){return gt},rgba2hex:function(){return Ar},rmUnit:function(){return oo},scheduler:function(){return ao},scrollIsBottom:function(){return lo},scrollTo:function(){return Ue},scrollToAnchor:function(){return so},scrollTop:function(){return Z},selectedHandle:function(){return ee},session:function(){return uo},setMeta:function(){return co},setStyle:function(){return Ze},sleep:function(){return Gt},sleepSync:function(){return $r},sort:function(){return fo},sortObj:function(){return ho},storage:function(){return po},store:function(){return xo},str2Html:function(){return ot},str2code:function(){return yo},sysLang:function(){return go},template:function(){return bo},ten2Base:function(){return ke},throttle:function(){return vo},timeGap:function(){return Eo},timeInterval:function(){return to},timestamp:function(){return _e},toggleClass:function(){return So},traverItem:function(){return Y},traverList:function(){return Co},unescapeHTML:function(){return $o},unique:function(){return wr},updateId:function(){return zo},updateNode:function(){return E},updateTreeNodes:function(){return Fo},uuidv4:function(){return _t},validObj:function(){return To},watchScreen:function(){return No},watermark:function(){return Oo},weekDate:function(){return Po},wrapPromise:function(){return Io}});var Be=(e,t="key",r="value")=>{const o={};return(e||[]).map(n=>o[n[t]]=n[r]),o},Se=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),be=e=>Se(e)==="array",ee=e=>(t,r,o="id",n="children")=>{if(!be(t))return null;const d=(w,z="")=>{for(let I=0,U=w.length;I<U;I++){const ge=w[I];if(ge[o]===r)return e(w,I,z)||w[I];if(be(ge[n])){const Ee=d(ge[n],ge[o]);if(Ee)return Ee}}};return d(t),t},re=(e,t,r,o="id",n="children")=>ee((d,w)=>d.splice(w,0,r))(e,t,o,n),g=(e,t,r,o,n="id",d="children")=>ee((w,z)=>{const I=w[z];I.children?I.children.splice(o,0,r):I.children=[r]})(e,t,n,d),a=e=>Se(e).indexOf("element")>-1,m=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),n=[...new Set([...r,...o])];e.className=n.join(" ")},c=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},k=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},y=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},S=(e,t,r,o="id",n="children")=>ee((d,w)=>{const z=d[w];return z[n]=[...z[n]||[],...r],z})(e,t,o,n),p=()=>![typeof window,typeof document].includes("undefined"),$=e=>{if(p())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},A=(e,t)=>{if(p())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===t))r();else{const n=document.createElement("style");n.onerror=d=>o(new Error(`Failed to load '${t}' style`)),n.onload=r,n.innerHTML=e,n.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===e))r();else{const n=document.createElement("link");n.onerror=d=>o(new Error(`Failed to load '${e}'`)),n.onload=r,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},q=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},G=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:n})=>r[o]=n),r},F=e=>Se(e)==="object";const B=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,F(o)?t+=`${r}=${B(o)}`:Array.isArray(o)?t+=`${r}=${xe(o)}`:t+=`${r}=${o}`}),`{${t}}`};var W=B;const te=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,F(r)?t+=W(r):Array.isArray(r)?t+=te(r):t+=`${r}`}),`[${t}]`};var xe=te,we=e=>(t,r="id",o="children",n=-1)=>{if(!be(t))return t;const d={},w=t.map(z=>z[r]);return[...t].map(z=>{var I;const U={...z},{[r]:ge}=U;if(ge!=null){let{parentId:Ee}=U;Ee==null&&(Ee=(I=e==null?void 0:e(U))!=null?I:n,U.parentId=Ee),d[ge]||(d[ge]=[]),U[o]=d[ge],d[Ee]||(d[Ee]=[]),d[n]||(d[n]=[]),w.includes(Ee)?d[Ee].push(U):d[n].push(U)}}),d[n]},et=(e,t="id",r="children",o=-1)=>we(n=>{const d=n[t].match(/\S+(?=-\S+)/);return(d==null?void 0:d[0])||o})(e,t,r,o),tt=(e,t="path",r="children",o=null)=>we(n=>{var d,w,z,I;const U=n[t],ge=U.match(/.*\/[^:/]+\/:[^/]+/);return ge?(w=(d=ge[0].match(/(.*)\/:+/))==null?void 0:d[1])!=null?w:o:(I=(z=U.match(/(.*)\/+/))==null?void 0:z[1])!=null?I:o})(e,t,r,o),Z=()=>{var e,t;return p()&&((t=(e=window.pageYOffset)!=null?e:document.documentElement.scrollTop)!=null?t:document.body.scrollTop)},Me=(e,t)=>Object.prototype.hasOwnProperty.call(e!=null?e:{},t),ze=e=>Me(e,"current"),Ue=(e=0,t)=>{var r;!p()||(t=ze(t)?t.current:t!=null?t:window,(r=t.scrollTo)==null||r.call(t,{top:e,behavior:"smooth"}))},bt=`.huxy-totop-bar {
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
}`;const Xe=()=>document.getElementsByClassName("huxy-totop-bar")[0],lt=e=>{if(Xe())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>Ue(),!1),t},R=()=>{const e=Xe();e&&document.body.removeChild(e)};var ae=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!p())return;A(bt,"huxy-backtop-css");const r=()=>{Z()>e?lt(t):R()};return(()=>(document.addEventListener("scroll",r,!1),()=>{R(),document.removeEventListener("scroll",r,!1)}))()},J=(e=0,t=2)=>parseInt(String(e),t),ke=(e=0,t=2)=>Number(e).toString(t),Fe=(e=0,t=2,r=16)=>ke(J(e,t),r),dt=e=>{if(!F(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const n=o>0?"&":"?";t.push(`${n}${r}=${e[r]}`)}),t.join("")},Ye=e=>{if(!F(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},rt=e=>Se(e)==="function",Oe=e=>Se(e)==="promise"||F(e)&&rt(e.then),Ge=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Oe(e))return{};let o=null,n=null;return{promiseFn:new Promise((d,w)=>{o=(z="canceled")=>{clearTimeout(n),d({canceled:!0,errMsg:z})},t&&(t=typeof t!="number"?12e4:t,n=setTimeout(()=>o(r),t)),e.then(z=>{clearTimeout(n),d({result:z,errMsg:!1})}).catch(z=>{clearTimeout(n),w(z)})}),cancelFn:o}};const Ke=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>Ye(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>dt(e).slice(1)}],nr=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(n=>e[n]);if(o.length===1){const n=o[0],d=r?t:n;return d==="params"?{query:e[n]}:{result:e[n],type:d}}else if(o.length>1){const n=o.filter(w=>w!=="params").slice(-1)[0],d=r?t:n;return d==="params"?{query:e.params||e[n]}:{query:e.params,result:e[n],type:d}}};var ft=(e,t)=>r=>(o,n={})=>{const{headers:d,dataType:w,data:z,formData:I,form:U,params:ge,...Ee}=n,We={data:z,formData:I,form:U,params:ge};let pr;const{query:Vt,result:ro,type:Do}=nr(We,w)||{};if(!Ee.body&&ro){const Br=Ke.find(Mr=>Mr.type===Do);pr=Br.headers,Ee.body=Br.body(ro)}Vt&&(o=`${o}${dt(Vt)}`);const{promiseFn:Ao}=Ge(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...pr,...d},...Ee}),t);return Ao.then(({result:Br,errMsg:Mr})=>e(Mr?{status:408,statusText:Mr}:Br))},Ct=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let n=!1;for(let d in o)Me(o,d)&&r(o[d])&&(o[d]="cyclic",n=!0);return n}return!1};return r(e)&&e};const Pt=(e,t)=>{const r=Se(e),o=Se(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(Ct(e)&&Ct(t))return Pt(e,t);for(let n in t)if(Me(e,n)!==Me(t,n)||!Pt(e[n],t[n]))return!1;return!0};var Ht=Pt,Bt=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",ht=e=>e==null?void 0:e.__v_isVNode;const Ut=e=>{if(!be(e)&&!F(e))return e;const t=be(e)?[]:{};for(const r in e)if(Me(e,r)){const o=e[r];t[r]=Bt(o)||ht(o)||typeof o!="object"?o:o!==e?Ut(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var Je=Ut,ir=(e=100)=>{const t=[];let r=-1;const o=d=>{var w,z;const I=t.length,U=Je(d);return Ht(U,(w=t[I-1])==null?void 0:w.data)?{index:r,length:I,data:(z=t[r])==null?void 0:z.data}:(t.push({data:U}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},n=(d=0)=>{var w;const z=t.length;return r+=d,r=r<0?0:r>z-1?z-1:r,{index:r,length:z,data:Je((w=t[r])==null?void 0:w.data)}};return{record:o,cursor:n,jump:d=>{var w;return r=d,{index:r,length:t.length,data:Je((w=t[r])==null?void 0:w.data)}},undo:()=>n(-1),redo:()=>n(1),getList:()=>Je(t),clean:()=>{t.length=0,r=-1}}},qt=(e,t,r)=>{if(!be(e))return e;const o=e[t],n=e[r];return e.splice(t,1,n),e.splice(r,1,o),e},pt=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},It=(e,t,r=".")=>{const o=(I,U)=>I.split(U),n=o(e,r),d=o(t,r),w=n.length;let z=0;for(let I=0;I<w;I++)if(n[I]<d[I]){z=w-I;break}return z},vt=(...e)=>(...t)=>{const[...r]=e,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...t)},ar=e=>{if(!p())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},st=e=>(t,r)=>{const{getState:o,setState:n,subscribe:d,unsubscribe:w,clean:z}=e;return r!==void 0&&n({[t]:r},!0),{getState:()=>o(t),setState:(I,U)=>n({[t]:I},U),subscribe:I=>d(t,I),unsubscribe:()=>w(t),clean:()=>z(t)}},$t=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),lr=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:$t(o))}});const Mt=e=>e.startsWith("on"),sr=e=>e!=="children"&&!Mt(e),mt=(e,t)=>r=>e[r]!==t[r],u=(e,t)=>r=>!(r in t),v=e=>{const t=Object.keys(e);return{eventProps:t.filter(Mt),propertyProps:t.filter(sr)}};var E=(e,t,r)=>{const{eventProps:o,propertyProps:n}=v(t),{eventProps:d,propertyProps:w}=v(r);o.filter(u(t,r)).map(z=>{const I=z.toLowerCase().slice(2);e.removeEventListener(I,t[z])}),n.filter(u(t,r)).map(z=>e[z]=""),w.filter(mt(t,r)).map(z=>e[z]=r[z]),d.filter(mt(t,r)).map(z=>{const I=z.toLowerCase().slice(2);e.addEventListener(I,r[z])})},O=e=>{if(!p())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return E(t,{},e.props),t},P=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return e[t]=[];const o=e[t].indexOf(r);o>-1&&e[t].splice(o,1)}}}};const K=e=>{const t={};for(let r in e)Me(e,r)||(t[r]=e[r]);return t};var he=(e,t)=>{if(!F(e))return t;if(!F(t))return e;const r={...K(e),...K(t)},o={...e,...t};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},de=()=>{const{on:e,emit:t,off:r}=P(),o={};return{getState:n=>Je(o[n]),setState:(n,d=!1)=>{if(typeof n=="function"&&(n=n(Je(o))),!F(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const w=Je(n);Object.keys(w).map(z=>{const I=o[z],U=w[z],ge=F(U)&&F(I)?he(I,U):U;!d&&t(z,ge),o[z]=ge})},subscribe:(n,d)=>(e(n,d),()=>r(n,d)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(d=>o[d]=void 0):Object.keys(o).map(d=>o[d]=void 0)}}},ne=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...n)=>r(...o,...n);return r},Te=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),ut=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},zt=(e,t,r="id",o="children")=>ee((n,d)=>n.splice(d,1))(e,t,r,o),xt=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",_e=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),_t=()=>{let e=_e();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},Dt=(e,t)=>{if(p())if(t=t||_t(),typeof e=="string")fetch(e).then(r=>r.blob()).then(r=>{const o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)});else{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)}},wt=(e=null)=>{var t,r;return p()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(r=window.innerHeight)!=null?r:document.documentElement.clientHeight}:{width:0,height:0}},kt=e=>{var t;if(p())return e=ze(e)?e.current:e!=null?e:document.body,(t=e.getBoundingClientRect)==null?void 0:t.call(e)},ot=e=>{if(!p())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},Ze=(e,t={},r=!1)=>{!a(e)||Object.keys(t).map(o=>{e.style.setProperty(o,r?"":t[o])})};const _r=(e=350)=>new Promise(t=>setTimeout(t,e)),$r=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var Gt=_r,mr=async(e,t=15)=>{if(!p())return;if(typeof e=="string"&&(e=ot(e)),e=ze(e)?e.current:e,!a(e))return{};const r=e.cloneNode(!0);Ze(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await Gt(t);const o=kt(r);return e.parentNode.removeChild(r),o};const xr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Xt=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,yr=(e,t)=>{var r;t=`huxy-drop-arrow-${t}`;const o=(r=e.getAttribute("class"))!=null?r:"";xr.test(o)?e.setAttribute("class",o.replace(Xt,t)):e.setAttribute("class",`${o} ${t}`)},gr=async(e,t,r)=>{const{left:o,right:n,top:d,bottom:w}=kt(e),{width:z,height:I}=wt(),{width:U,height:ge}=await mr(t);if(n<0||w<0||o>z||d>I)return{};if(r==="vertical"){const Ee={left:o+"px",top:w+10+"px",right:"auto",bottom:"auto"};let We="lt";o+U>z&&(Ee.left=n-U+"px",We="rt"),w+10+ge>I&&(Ee.top=d-10-ge+"px",We=We==="lt"?"lb":"rb"),Ze(t,Ee),yr(t,We)}else{const Ee={left:n+10+"px",top:d+"px",right:"auto",bottom:"auto"};let We="tl";n+10+U>z&&(Ee.left=o-10-U+"px",We="tr"),d+ge>I&&(Ee.top=w-ge+"px",We=We==="tl"?"bl":"br"),Ze(t,Ee),yr(t,We)}};var br=(e,t,r="horizontal")=>{const o=ut(gr),n=()=>o(e,t,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const d=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),Ze(t,{left:"",top:"",right:"",bottom:""})};return gr(e,t,r),d},ur=(e,t,r,o="id",n="children")=>ee((d,w)=>d[w]={...d[w],...r})(e,t,o,n),cr=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const zr=P();var Kt=e=>{const{on:t,emit:r,off:o}=zr;return{on:n=>t(e,n),emit:n=>r(e,n),off:n=>o(e,n)}};const dr=120*1e3,Fr=e=>e.json().then(t=>t);var Tr=(e=Fr,t=dr)=>(r="get")=>ft(e)((r||"get").toUpperCase()),Wt=e=>be(e)&&!!e.length,vr=(e,t,r=[],o=!1,n=null)=>Wt(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(d=>(r=r.length>0?r:Object.keys(d),r.filter(w=>{const z=d[w];if(z==null)return!1;if(o)return z===t;const I=new RegExp(t,"gi"),U=z.toString().match(I);return U&&n&&(d[w]=n(z.toString().replace(I,`<span style="background-color:yellow">${U[0]}</span>`),{display:"inline-block"})),U}).length))):e:[],wr=(e,t="id")=>{if(!Wt(e))return e;const r=[],o=[];return e.map(n=>{const d=F(n)?n[t]:n;o.includes(d)||(o.push(d),r.push(n))}),r};const kr=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=Je(t),n=d=>{const w=[];return d.map(z=>{if(Wt(z[r])){const I=n(z[r])||[];z[r]=I,I.length>0&&w.push(z)}}),e(d,w)};return n(o)};var Nr=(e,t,r,o="name",n="id",d="children",w=!1)=>kr((z,I)=>wr([...vr(z,t,o,w,r),...I],n))(e,d),l=(e="")=>{var t;return(t=e.match(/\d+/g))==null?void 0:t.sort((r,o)=>o-r)[0]},f=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),j=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},b=(e="")=>e.replaceAll("//","/"),x=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",_=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},V=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),n=e%3600,d=~~(n/60);return o<24?`${o}${t[2]}${d}${t[1]}${n%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},Y=e=>(t,r="children")=>{if(!be(t))return t;const o=(n,d=[])=>{n.map((w,z)=>{const I=be(w[r]);if(w=e(w,d,z,I)||w,I){const{[r]:U,...ge}=w;o(U,[...d,{...ge,"@@index":z}])}})};return o(t),t},M=(e,t="children")=>{const r=[];return Y(o=>{const{[t]:n,...d}=o;r.push(d)})(e,t),r},D=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const le=e=>e<10?"0"+e:e;var ce=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),n=le(t.getMonth()+1),d=le(t.getDate()),w=le(t.getHours()),z=le(t.getMinutes()),I=le(t.getSeconds());return[r,n,d,w,z,I,o]},je=(e,t=new Date)=>{e=ce(e),t=ce(t);const r=t.y-e.y,o=t.m-e.m,n=t.d-e.d,d=t.h-e.h,w=t.M-e.M,z=new Date(t.y,t.m,0).getDate(),I=(U,ge,Ee,We,pr)=>{const Vt="\u524D";return ge<0&&(U-=1,ge+=Ee),U===0?ge+pr+Vt:ge===0?U+We+Vt:U+We+ge+pr+Vt};return r>0?I(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?I(o,n,z,"\u4E2A\u6708","\u5929"):n>0?I(n,d,24,"\u5929","\u5C0F\u65F6"):d>0?I(d,w,60,"\u5C0F\u65F6","\u5206\u949F"):w>0?w+"\u5206\u949F\u524D":"\u521A\u521A"};const oe=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],ve=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var Ce=(e=new Date,t=["-","-"," ",":",":",""],r=oe)=>{const o=ce(e);let n="";return t.map((d,w)=>{var z;return n+=(w===6?r[o[w]]:(z=o[w])!=null?z:"")+d}),n};const Q=["","webkit","moz","ms"],se=e=>Q.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),$e=e=>Q.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),Pe=e=>Q.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),De=Q.map(e=>`${e}fullscreenchange`);var Ae=e=>{var t,r;if(!p())return;e=ze(e)?e.current:e!=null?e:document.body;const o=se(document),n=$e(e),d=Pe(document);document[o]?(r=document[d])==null||r.call(document):(t=e[n])==null||t.call(e)};const nt=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var it=()=>{var e;if(!p())return;const t=window.navigator.userAgent.toLowerCase(),r=(e=nt.find(o=>t.match(o.reg)))!=null?e:{};return{type:r.name,version:t.match(r.reg)[1]}};const At=60*1e3,Ft=60*At,Rt=24*Ft;var jt=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/Rt);r-=Rt*o;const n=~~(r/Ft);r-=Ft*n;const d=~~(r/At);r-=At*d;const w=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${d}\u5206${w}\u79D2`};const at=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],Et=e=>{if(!Array.isArray(e))return at;const t=[...at];return e.map(r=>{const o=t.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var Or=e=>{const t=Et(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return ot(t.join(""))},qe=(e=new Date)=>{const t=ce(e);return new Date(t[0],t[1],0).getDate()},St=(e=null)=>{var t,r,o,n;return p()?a(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:(r=(t=window.pageXOffset)!=null?t:document.documentElement.scrollLeft)!=null?r:document.body.scrollLeft,top:(n=(o=window.pageYOffset)!=null?o:document.documentElement.scrollTop)!=null?n:document.body.scrollTop}:{left:0,top:0}};const Jt=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>{var t;return{type:"ios",model:e[1],version:(t=e[3])==null?void 0:t.replaceAll("_",".")}}},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var jr=()=>{if(!p())return;const e=window.navigator.userAgent.toLowerCase(),t=Jt.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},Lt=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(n=>{const[d,w]=n.split("=");o[d]=w}),{path:t,params:o}}return{path:t}},Tt=()=>p()&&(window.ontouchstart||navigator.maxTouchPoints),Er=e=>{var t,r,o,n;const{left:d,top:w}=St();return{touchX:Tt()?(r=(t=e==null?void 0:e.touches)==null?void 0:t[0])==null?void 0:r.pageX:(e==null?void 0:e.pageX)||(e==null?void 0:e.clientX)+d,touchY:Tt()?(n=(o=e==null?void 0:e.touches)==null?void 0:o[0])==null?void 0:n.pageY:(e==null?void 0:e.pageY)||(e==null?void 0:e.clientY)+w}},fr=(e,t)=>{var r,o;const{touchX:n,touchY:d}=Er(e),{x:w,y:z}=(o=(r=t==null?void 0:t.getBoundingClientRect)==null?void 0:r.call(t))!=null?o:{};return{x:n-(w!=null?w:0),y:d-(z!=null?z:0)}},Qt=(e,t,r="id",o="children")=>{if(!be(e))return null;const n=d=>{for(let w=0,z=d.length;w<z;w++){const I=d[w];if(I[r]===t)return[I];if(be(I[o])){const U=n(I[o]);if(U)return[I].concat(U)}}};return n(e)},hr=(e,t={},r)=>{if(!p())return;r=ze(r)?r.current:r!=null?r:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&Ze(o,t),o.innerText=e,r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const er=(e={},t)=>{t=yt(t);const r=(o,n)=>{if(!(n!=null&&n[0]))return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(e,t)},yt=(e="")=>{var t;return(t=e.replace(/\[['"]?(.*?)['"]?\]/g,".$1"))==null?void 0:t.split(".")};var Rr=er,tr=(e,t="")=>a(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),Sr=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,n=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${n})`;const d=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${d})`},Wr=e=>{if(!p())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:n}=e;return t.width=o,t.height=n,r.drawImage(e,0,0,o,n),t},Zr=(...e)=>!Number.isNaN(new Date(...e).valueOf()),Yr=e=>Se(e)==="error",Vr=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),Hr=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",Ur=e=>Se(e)==="regexp",qr=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),Gr=e=>F(e)&&Object.keys(e).length,Cr=e=>F(e)?W(e):Array.isArray(e)?xe(e):e,rr=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",n=>r(n))}),Jr=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",n=>r(n)))}),Qr=async(e,t,r=2e3)=>{for(;!(t!=null&&t(e==null?void 0:e()));)await Gt(r)},Xr=(e,t=["{","}"])=>{var r,o;return(o=(r=e==null?void 0:e.trim)==null?void 0:r.call(e).match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`)))==null?void 0:o[1]},Kr=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),d=r.find(w=>w.key===n);if(!d){const w=e(...o);return r.push({key:n,result:w}),r.length>t&&r.shift(),w}return d.result}};const Lr=(e,t,r="id")=>{if(!be(e))return t;if(!be(t))return e;const o={};return[...e,...t].map(n=>{var d;const w=F(n)?(d=n[r])!=null?d:JSON.stringify(n):n;if(o[w]===void 0)o[w]=n;else{const z=o[w];F(z)&&F(n)?o[w]=h(z,n):be(z)&&be(n)?o[w]=Lr(z,n):o[w]=n}}),Object.keys(o).map(n=>o[n])};var i=Lr;const s=(e,t)=>{if(!F(e))return t;if(!F(t))return e;for(let r in t)Me(t,r)?F(e[r])&&F(t[r])?e[r]=s(e[r],t[r]):be(e[r])&&be(t[r])?e[r]=i(e[r],t[r]):e[r]=t[r]:Object.setPrototypeOf(e,{[r]:t[r]});return e};var h=s,C=(e,...t)=>{const r=be(e)?i:h;return t.map(o=>e=r(e,o)),e},T=(e,t)=>{var r,o;const n=(r=e==null?void 0:e.split(" "))!=null?r:[],d=(o=t==null?void 0:t.split(" "))!=null?o:[];return[...new Set([...n,...d])].filter(Boolean).join(" ")},N=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(n=>!r.includes(n));e.className=o.join(" ")},L=`@keyframes huxy-message-animate-in {
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
}`;const X=()=>document.getElementsByClassName("huxy-message")[0],H=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},ie=(e,t)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${t}`);const o=document.createElement("span");o.innerText=e;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},ue=(e,t=3250,r,o)=>{if(!p())return;A(L,"huxy-message-css");let n=X();n||(n=H());const d=ie(e,o);n.appendChild(d),setTimeout(()=>{n.removeChild(d),r==null||r()},t),setTimeout(()=>{N(d,"open")},t-250)};var pe={success:(e,t,r)=>ue(e,t,r,"success"),warn:(e,t,r)=>ue(e,t,r,"warn"),warning:(e,t,r)=>ue(e,t,r,"warn"),error:(e,t,r)=>ue(e,t,r,"error"),info:(e,t,r)=>ue(e,t,r,"info")},fe=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[c(1-r),c(qe(t)-r)]},Re=(e,t,r,o,n="id",d="children")=>{let w={};return ee((z,I)=>(w=z[I],z.splice(I,1),!0))(e,t,n,d),g(e,r,w,o,n,d),e},Le=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),ye=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(n=>t.includes(n)?o.push({key:n,value:e[n]}):r[n]=e[n]),{newObj:r,newQuery:o}},Ve=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},Ne=(e="",t=0,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`},Ie=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!be(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},ct=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(n,d)=>n?o(n):r(d))),Zt=()=>"#"+Ne((~~(Math.random()*(1<<24))).toString(16),6),or=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),Pr=(e=[])=>e[or(e.length-1)],Yt=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,n)=>{n===e-1?r[n]=t:(r[n]=or(1,t-1),t-=r[n])}),r},Ir=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),Dr=()=>Math.random()>.5;const Nt=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var gt=(e,t=60)=>{if(!p())return;e=ze(e)?e.current:e!=null?e:document.body;let r,o=[];const n=ut(()=>o.map(I=>I(e)),t),d=I=>{r||(r=Nt(e,n)),o.indexOf(I)===-1&&o.push(I)},w=I=>{const U=o.indexOf(I);U!==-1&&o.splice(U,1),o.length===0&&r&&z()},z=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:d,unbind:w,destroy:z}};const Qe=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const n=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var Ar=(e=0,t=0,r=0,o=1)=>{var n;if(e.includes("rgb")){const d=e.match(/rgba?\((.+)\)/);if(d){const w=(n=d[1])==null?void 0:n.split(",").map(z=>z.trim());return Qe(...w)}return e}return Qe(e,t,r,o)},oo=(e,t="px")=>`${e}`.replace(t,"")-0;const eo=()=>typeof(performance==null?void 0:performance.now)=="function"?performance.now():new Date().getTime(),no=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},io=()=>{const e=[],t=w=>{e.push(w),d(w)},r=()=>e[0],o=()=>e.shift(),n=w=>w.startTime=eo(),d=w=>{n(w),e.sort((z,I)=>z.startTime-I.startTime)};return{hub:e,push:t,peek:r,shift:o,update:d}};var ao=(e=5)=>{const{hub:t,push:r,peek:o,shift:n,update:d}=io(),w=no(()=>{I()&&w()}),z=U=>eo()-U.startTime>e,I=()=>{let U=o();for(;U;){if(z(U)){d(U);break}const{task:ge}=U;typeof ge=="function"?(U.task=null,ge()):n(),U=o()}return U};return(U=()=>{})=>{r({task:U}),t.length<2&&w()}},lo=()=>p()&&document.documentElement.scrollHeight-Z()===wt().height,so=e=>{var t;!p()||(e=ze(e)?e.current:e!=null?e:window,(t=e.scrollIntoView)==null||t.call(e,{behavior:"smooth",block:"center"}))},uo={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch(r){t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},co=e=>{const t=Or(e);p()&&document.head.appendChild(...t)},fo=(e,t=null,r=!1)=>[...e||[]].sort((o,n)=>{const d=t?o[t]:o,w=t?n[t]:n;return!isNaN(Number(d))&&!isNaN(Number(d))?r?w-d:d-w:typeof d=="string"&&typeof w=="string"?r?w.localeCompare(d):d.localeCompare(w):typeof d=="string"&&typeof w=="number"?r?-1:1:typeof d=="number"||typeof d=="string"?r?1:-1:r?-1:1}),ho=e=>{if(!F(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},po={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const mo=de();var xo=st(mo),yo=(e,t=!1)=>(e=t?e:`return ${e};`,Function(e)()),go=()=>p()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),bo=(e,...t)=>{const r=[];return e.map((o,n)=>{var d;r.push(o,(d=t[n])!=null?d:"")}),r.join("")},vo=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const wo=e=>[12,qe(e),24,60,60],ko=(e=[],t=[],r=[])=>{let o=!1;const n=[];return t.map((d,w)=>{const z=(o?d-1:d)-e[w];z<0?(n[w]=z+(r[w]||10),o=!0):(n[w]=z,o=!1)}),n.reverse()};var to=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=wo(t).reverse(),o=ce(e).slice(0,-1).reverse(),n=ce(t).slice(0,-1).reverse();return ko(o,n,r)};const jo=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Eo=(e,t=new Date)=>{const r=to(e,t),o=r.findIndex(n=>n>0);return r.map((n,d)=>`${n||0}${jo[d]}`).slice(o).join("")},So=(e,t)=>{!a(e)||(tr(e,t)?N(e,t):m(e,t))},Co=e=>(t,r="children")=>{if(!be(t))return t;const o=n=>(n.map(d=>{be(d[r])&&(d[r]=o(d[r]))}),e(n));return o(t)},$o=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),zo=(e,t="fuckId",r="children")=>Y((o,n,d)=>{o[t]=[...n.map(w=>w["@@index"]),d].join("-")})(e,r),Fo=(e,t,r,o="children")=>ee((n,d)=>{const w=n[d];return w[o]=[...w[o]||[],...r],!0})(e,t),To=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},No=e=>p()?(De.map(t=>document.addEventListener(t,e,!1)),()=>De.map(t=>document.removeEventListener(t,e,!1))):void 0,Oo=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:d="20px microsoft yahei",fillStyle:w="rgba(202,202,202,0.4)",content:z="\u8BF7\u52FF\u5916\u4F20",rotate:I="-30",zIndex:U=1e3}={})=>{if(!p())return;e=ze(e)?e.current:e!=null?e:document.body;const ge=e.firstChild;(ge==null?void 0:ge.className)==="watermark-canvas"&&e.removeChild(ge);const Ee=document.createElement("canvas");Ee.setAttribute("width",t),Ee.setAttribute("height",r);const We=Ee.getContext("2d");We.textAlign=o,We.textBaseline=n,We.font=d,We.fillStyle=w,We.rotate(Math.PI/180*I),We.fillText(z,parseFloat(t)/2,parseFloat(r)/2);const pr=Ee.toDataURL(),Vt=document.createElement("div");Vt.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${U};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${pr}')`),e.style.position="relative",e.insertBefore(Vt,e.firstChild)},Po=(e=new Date)=>{const t=new Date(e).getDay();return[c(1-t),c(7-t)]},Io=e=>{if(!Oe(e))return{};let t="pending",r;const o=e.then(n=>{t="success",r=n}).catch(n=>{t="error",r=n});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}};return He}()})},3323:function(Ot,me){"use strict";function He(R,ae){var J=R.length;R.push(ae);e:for(;0<J;){var ke=J-1>>>1,Fe=R[ke];if(0<be(Fe,ae))R[ke]=ae,R[J]=Fe,J=ke;else break e}}function Be(R){return R.length===0?null:R[0]}function Se(R){if(R.length===0)return null;var ae=R[0],J=R.pop();if(J!==ae){R[0]=J;e:for(var ke=0,Fe=R.length,dt=Fe>>>1;ke<dt;){var Ye=2*(ke+1)-1,rt=R[Ye],Oe=Ye+1,Ge=R[Oe];if(0>be(rt,J))Oe<Fe&&0>be(Ge,rt)?(R[ke]=Ge,R[Oe]=J,ke=Oe):(R[ke]=rt,R[Ye]=J,ke=Ye);else if(Oe<Fe&&0>be(Ge,J))R[ke]=Ge,R[Oe]=J,ke=Oe;else break e}}return ae}function be(R,ae){var J=R.sortIndex-ae.sortIndex;return J!==0?J:R.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var ee=performance;me.unstable_now=function(){return ee.now()}}else{var re=Date,g=re.now();me.unstable_now=function(){return re.now()-g}}var a=[],m=[],c=1,k=null,y=3,S=!1,p=!1,$=!1,A=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(R){for(var ae=Be(m);ae!==null;){if(ae.callback===null)Se(m);else if(ae.startTime<=R)Se(m),ae.sortIndex=ae.expirationTime,He(a,ae);else break;ae=Be(m)}}function B(R){if($=!1,F(R),!p)if(Be(a)!==null)p=!0,Xe(W);else{var ae=Be(m);ae!==null&&lt(B,ae.startTime-R)}}function W(R,ae){p=!1,$&&($=!1,q(we),we=-1),S=!0;var J=y;try{for(F(ae),k=Be(a);k!==null&&(!(k.expirationTime>ae)||R&&!Z());){var ke=k.callback;if(typeof ke=="function"){k.callback=null,y=k.priorityLevel;var Fe=ke(k.expirationTime<=ae);ae=me.unstable_now(),typeof Fe=="function"?k.callback=Fe:k===Be(a)&&Se(a),F(ae)}else Se(a);k=Be(a)}if(k!==null)var dt=!0;else{var Ye=Be(m);Ye!==null&&lt(B,Ye.startTime-ae),dt=!1}return dt}finally{k=null,y=J,S=!1}}var te=!1,xe=null,we=-1,et=5,tt=-1;function Z(){return!(me.unstable_now()-tt<et)}function Me(){if(xe!==null){var R=me.unstable_now();tt=R;var ae=!0;try{ae=xe(!0,R)}finally{ae?ze():(te=!1,xe=null)}}else te=!1}var ze;if(typeof G=="function")ze=function(){G(Me)};else if(typeof MessageChannel!="undefined"){var Ue=new MessageChannel,bt=Ue.port2;Ue.port1.onmessage=Me,ze=function(){bt.postMessage(null)}}else ze=function(){A(Me,0)};function Xe(R){xe=R,te||(te=!0,ze())}function lt(R,ae){we=A(function(){R(me.unstable_now())},ae)}me.unstable_IdlePriority=5,me.unstable_ImmediatePriority=1,me.unstable_LowPriority=4,me.unstable_NormalPriority=3,me.unstable_Profiling=null,me.unstable_UserBlockingPriority=2,me.unstable_cancelCallback=function(R){R.callback=null},me.unstable_continueExecution=function(){p||S||(p=!0,Xe(W))},me.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):et=0<R?Math.floor(1e3/R):5},me.unstable_getCurrentPriorityLevel=function(){return y},me.unstable_getFirstCallbackNode=function(){return Be(a)},me.unstable_next=function(R){switch(y){case 1:case 2:case 3:var ae=3;break;default:ae=y}var J=y;y=ae;try{return R()}finally{y=J}},me.unstable_pauseExecution=function(){},me.unstable_requestPaint=function(){},me.unstable_runWithPriority=function(R,ae){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var J=y;y=R;try{return ae()}finally{y=J}},me.unstable_scheduleCallback=function(R,ae,J){var ke=me.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ke+J:ke):J=ke,R){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=J+Fe,R={id:c++,callback:ae,priorityLevel:R,startTime:J,expirationTime:Fe,sortIndex:-1},J>ke?(R.sortIndex=J,He(m,R),Be(a)===null&&R===Be(m)&&($?(q(we),we=-1):$=!0,lt(B,J-ke))):(R.sortIndex=Fe,He(a,R),p||S||(p=!0,Xe(W))),R},me.unstable_shouldYield=Z,me.unstable_wrapCallback=function(R){var ae=y;return function(){var J=y;y=ae;try{return R.apply(this,arguments)}finally{y=J}}}},1102:function(Ot,me,He){"use strict";Ot.exports=He(3323)}}]);
