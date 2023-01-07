(self.webpackChunk=self.webpackChunk||[]).push([[697],{1975:function(Nt,ye,qe){(function(Ae,Se){Nt.exports=Se(qe(7378),qe(1542))})(this,function(Ae,Se){return function(){"use strict";var we={193:function(a,x,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`/*@height:2px;
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
`,""]),$.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},x.Z=$},145:function(a,x,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`.kLIGi {
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
`,""]),$.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},x.Z=$},842:function(a,x,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`@keyframes animate-drawer-in {
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
`,""]),$.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},x.Z=$},563:function(a,x,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`@keyframes animate-drop-in {
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
`,""]),$.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},x.Z=$},697:function(a,x,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`@keyframes animate-modal-in {
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
`,""]),$.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},x.Z=$},810:function(a,x,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`.clear {
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
`,""]),$.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"},x.Z=$},31:function(a,x,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`.cols-1 {
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
`,""]),$.locals={},x.Z=$},201:function(a,x,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`@keyframes before {
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
`,""]),$.locals={},x.Z=$},289:function(a,x,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`.clear {
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
`,""]),$.locals={},x.Z=$},626:function(a,x,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`.ofth_ {
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
`,""]),$.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},x.Z=$},435:function(a,x,c){var k=c(703),y=c.n(k),S=c(414),p=c.n(S),$=p()(y());$.push([a.id,`.node-right-icon-close {
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
`,""]),$.locals={},x.Z=$},414:function(a){a.exports=function(x){var c=[];return c.toString=function(){return this.map(function(k){var y="",S=typeof k[5]!="undefined";return k[4]&&(y+="@supports (".concat(k[4],") {")),k[2]&&(y+="@media ".concat(k[2]," {")),S&&(y+="@layer".concat(k[5].length>0?" ".concat(k[5]):""," {")),y+=x(k),S&&(y+="}"),k[2]&&(y+="}"),k[4]&&(y+="}"),y}).join("")},c.i=function(k,y,S,p,$){typeof k=="string"&&(k=[[null,k,void 0]]);var A={};if(S)for(var q=0;q<this.length;q++){var G=this[q][0];G!=null&&(A[G]=!0)}for(var F=0;F<k.length;F++){var B=[].concat(k[F]);S&&A[B[0]]||(typeof $!="undefined"&&(typeof B[5]=="undefined"||(B[1]="@layer".concat(B[5].length>0?" ".concat(B[5]):""," {").concat(B[1],"}")),B[5]=$),y&&(B[2]&&(B[1]="@media ".concat(B[2]," {").concat(B[1],"}")),B[2]=y),p&&(B[4]?(B[1]="@supports (".concat(B[4],") {").concat(B[1],"}"),B[4]=p):B[4]="".concat(p)),c.push(B))}},c}},703:function(a){a.exports=function(x){return x[1]}},53:function(a,x,c){var k,y=c(899),S=Symbol.for("react.element"),p=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,A=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function G(F,B,W){var te,ge={},ke=null,rt=null;W!==void 0&&(ke=""+W),B.key!==void 0&&(ke=""+B.key),B.ref!==void 0&&(rt=B.ref);for(te in B)$.call(B,te)&&!q.hasOwnProperty(te)&&(ge[te]=B[te]);if(F&&F.defaultProps)for(te in B=F.defaultProps,B)ge[te]===void 0&&(ge[te]=B[te]);return{$$typeof:S,type:F,key:ke,ref:rt,props:ge,_owner:A.current}}k=p,x.jsx=G,x.jsxs=G},458:function(a,x,c){a.exports=c(53)},748:function(a){var x=[];function c(S){for(var p=-1,$=0;$<x.length;$++)if(x[$].identifier===S){p=$;break}return p}function k(S,p){for(var $={},A=[],q=0;q<S.length;q++){var G=S[q],F=p.base?G[0]+p.base:G[0],B=$[F]||0,W="".concat(F," ").concat(B);$[F]=B+1;var te=c(W),ge={css:G[1],media:G[2],sourceMap:G[3],supports:G[4],layer:G[5]};if(te!==-1)x[te].references++,x[te].updater(ge);else{var ke=y(ge,p);p.byIndex=q,x.splice(q,0,{identifier:W,updater:ke,references:1})}A.push(W)}return A}function y(S,p){var $=p.domAPI(p);$.update(S);var A=function(q){if(q){if(q.css===S.css&&q.media===S.media&&q.sourceMap===S.sourceMap&&q.supports===S.supports&&q.layer===S.layer)return;$.update(S=q)}else $.remove()};return A}a.exports=function(S,p){p=p||{},S=S||[];var $=k(S,p);return function(A){A=A||[];for(var q=0;q<$.length;q++){var G=$[q],F=c(G);x[F].references--}for(var B=k(A,p),W=0;W<$.length;W++){var te=$[W],ge=c(te);x[ge].references===0&&(x[ge].updater(),x.splice(ge,1))}$=B}}},736:function(a){var x={};function c(y){if(typeof x[y]=="undefined"){var S=document.querySelector(y);if(window.HTMLIFrameElement&&S instanceof window.HTMLIFrameElement)try{S=S.contentDocument.head}catch(p){S=null}x[y]=S}return x[y]}function k(y,S){var p=c(y);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(S)}a.exports=k},706:function(a){function x(c){var k=document.createElement("style");return c.setAttributes(k,c.attributes),c.insert(k,c.options),k}a.exports=x},567:function(a,x,c){function k(y){var S=c.nc;S&&y.setAttribute("nonce",S)}a.exports=k},306:function(a){function x(y,S,p){var $="";p.supports&&($+="@supports (".concat(p.supports,") {")),p.media&&($+="@media ".concat(p.media," {"));var A=typeof p.layer!="undefined";A&&($+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),$+=p.css,A&&($+="}"),p.media&&($+="}"),p.supports&&($+="}");var q=p.sourceMap;q&&typeof btoa!="undefined"&&($+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(q))))," */")),S.styleTagTransform($,y,S.options)}function c(y){if(y.parentNode===null)return!1;y.parentNode.removeChild(y)}function k(y){var S=y.insertStyleElement(y);return{update:function(p){x(S,y,p)},remove:function(){c(S)}}}a.exports=k},62:function(a){function x(c,k){if(k.styleSheet)k.styleSheet.cssText=c;else{for(;k.firstChild;)k.removeChild(k.firstChild);k.appendChild(document.createTextNode(c))}}a.exports=x},899:function(a){a.exports=Ae},994:function(a){a.exports=Se}},ee={};function re(a){var x=ee[a];if(x!==void 0)return x.exports;var c=ee[a]={id:a,exports:{}};return we[a](c,c.exports,re),c.exports}(function(){re.n=function(a){var x=a&&a.__esModule?function(){return a.default}:function(){return a};return re.d(x,{a:x}),x}})(),function(){re.d=function(a,x){for(var c in x)re.o(x,c)&&!re.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:x[c]})}}(),function(){re.o=function(a,x){return Object.prototype.hasOwnProperty.call(a,x)}}(),function(){re.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){re.nc=void 0}();var g={};return function(){re.r(g),re.d(g,{Anico:function(){return rt},Carousel:function(){return nr},Col:function(){return Et},Drawer:function(){return St},Drop:function(){return vt},Ellipsis:function(){return gr},ErrorBoundary:function(){return wr},FullPage:function(){return l},HandleError:function(){return v},LoadError:function(){return j},Mask:function(){return ht},MaxSize:function(){return fe},Modal:function(){return Pe},Panel:function(){return At},Portal:function(){return ft},Row:function(){return fr},Spinner:function(){return Ye},TabHeader:function(){return Zr},Tooltip:function(){return Xt},Tree:function(){return Rr},fixEle:function(){return ur},fixIcon:function(){return zr},renderTree:function(){return tr},str2React:function(){return f},str2Vue:function(){return Nr}});var a=re(458),x=re(748),c=re.n(x),k=re(306),y=re.n(k),S=re(736),p=re.n(S),$=re(567),A=re.n($),q=re(706),G=re.n(q),F=re(62),B=re.n(F),W=re(193),te={};te.styleTagTransform=B(),te.setAttributes=A(),te.insert=p().bind(null,"head"),te.domAPI=y(),te.insertStyleElement=G();var ge=c()(W.Z,te),ke=W.Z&&W.Z.locals?W.Z.locals:void 0,rt=i=>(0,a.jsx)("span",{className:ke.anico,children:(0,a.jsx)("span",{className:[ke.hline,...(i.type||"").split(" ").map(s=>ke[s]).filter(Boolean)].join(" ")})}),ot=re(994),Z=re(899),Re=re.n(Z),$e=(i,s)=>{const h=(0,Z.useRef)();(0,Z.useEffect)(()=>{h.current=i},[i]),(0,Z.useEffect)(()=>{if(s){const C=setInterval(()=>h.current(),s);return()=>clearInterval(C)}},[s])},Ge=()=>![typeof window,typeof document].includes("undefined"),gt=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),Ke=i=>gt(i).indexOf("element")>-1,at=(i=null)=>{var s,h;return Ge()?Ke(i)?{width:i.clientWidth,height:i.clientHeight}:{width:(s=window.innerWidth)!=null?s:document.documentElement.clientWidth,height:(h=window.innerHeight)!=null?h:document.documentElement.clientHeight}:{width:0,height:0}},R=(i=()=>{},s=60)=>{let h=null;return function(...C){clearTimeout(h),h=setTimeout(()=>i.apply(this,C),s)}},ie=(i,s)=>Object.prototype.hasOwnProperty.call(i!=null?i:{},s),J=i=>ie(i,"current");const je=(i,s)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const h=document.createElement("object");return h.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),h.setAttribute("class","resize-sensor"),h.onload=()=>{h.contentDocument.defaultView.addEventListener("resize",s,!1),s()},h.type="text/html",i.appendChild(h),h.data="about:blank",h};var ze=(i,s=60)=>{if(!Ge())return;i=J(i)?i.current:i!=null?i:document.body;let h,C=[];const T=R(()=>C.map(H=>H(i)),s),N=H=>{h||(h=je(i,T)),C.indexOf(H)===-1&&C.push(H)},L=H=>{const ne=C.indexOf(H);ne!==-1&&C.splice(ne,1),C.length===0&&h&&X()},X=()=>{h&&h.parentNode&&(h.contentDocument&&h.contentDocument.defaultView.removeEventListener("resize",T,!1),h.parentNode.removeChild(h),h=void 0,C=[])};return{element:i,bind:N,unbind:L,destroy:X}},ct=(i={})=>{const s=(0,Z.useRef)(0),[h,C]=(0,Z.useState)(i),T=(0,Z.useCallback)(N=>{cancelAnimationFrame(s.current),s.current=requestAnimationFrame(()=>C(N))},[]);return(0,Z.useEffect)(()=>()=>cancelAnimationFrame(s.current),[]),[h,T]},Ve=(i=null,s=60)=>{const h=J(i)?i.current:i,{bind:C,destroy:T}=ze(h,s),[N,L]=ct(at(h));return(0,Z.useEffect)(()=>(C(()=>h&&L(at(h))),()=>T()),[h]),N},nt=re(145),Ne={};Ne.styleTagTransform=B(),Ne.setAttributes=A(),Ne.insert=p().bind(null,"head"),Ne.domAPI=y(),Ne.insertStyleElement=G();var Xe=c()(nt.Z,Ne),Je=nt.Z&&nt.Z.locals?nt.Z.locals:void 0,nr=({children:i,active:s=0,delay:h=5e3,className:C,...T})=>{const[N,L]=(0,Z.useState)(s+1),[X,H]=(0,Z.useState)(!1),ne=(0,Z.useRef)(),le=(0,Z.useRef)(""),{width:xe}=Ve(ne);i=Array.isArray(i)?i:[i];const pe=i[0],Ie=[i[i.length-1],...i,pe],De=Ie.length;$e(()=>{let Te=N+1;Te=Te===De?1:Te,le.current&&(le.current=""),L(Te),Te===De-1&&setTimeout(()=>{le.current="none",L(1)},500)},X?null:h);const be=(Te,Oe)=>{Oe.stopPropagation(),le.current="",L(Te),(0,ot.flushSync)(()=>H(!0)),H(!1)},Ue={width:`${De*xe}px`,transform:`translateX(${-xe*N}px)`,transition:le.current};return(0,a.jsxs)("div",{className:`${Je["huxy-carousel"]}${C?` ${C}`:""}`,...T,ref:ne,children:[(0,a.jsx)("div",{className:Je["huxy-carousel-wrap"],style:Ue,children:Ie.map((Te,Oe)=>(0,a.jsx)("div",{className:`${Je["carousel-item"]} ${N===Oe?Je.active:""}`,style:{width:`${xe}px`},children:Te},`huxy-carousel-${Oe}`))}),(0,a.jsx)("div",{className:Je["carousel-switch"],children:i.map((Te,Oe)=>(0,a.jsx)("span",{className:`${Je.dot} ${N===Oe+1?Je.active:""}`,onClick:ut=>be(Oe+1,ut)},`huxy-carousel-switch-${Oe}`))})]})};const dt=(i,s)=>{let h="",C="";if(typeof s=="number"&&(h=`col-${i}-${s}`),typeof s=="object"){const{span:T,offset:N}=s;h=T?`col-${i}-${T}`:"",C=N?`offset-${i}-${N}`:""}return{sp:h,os:C}};var Et=(0,Z.forwardRef)(({span:i,offset:s,xl:h,lg:C,md:T,sm:N,xs:L,style:X,width:H,auto:ne,offsetWidth:le="0px",className:xe,...pe},Ie)=>{const De=xe?` ${xe}`:"",be=`col-${i||12}`,Ue=s?`offset-${s}`:"",{sp:Te,os:Oe}=dt("xs",L),{sp:ut,os:Yt}=dt("sm",N),{sp:or,os:Or}=dt("md",T),{sp:Vt,os:Pr}=dt("lg",C),{sp:Ir,os:Tt}=dt("xl",h),yt=[be,Ir,Vt,or,ut,Te,Ue,Tt,Pr,Or,Yt,Oe].filter(Boolean).join(" "),tt=ne?{width:"auto",flex:1,maxWidth:`calc(100% - ${le})`}:{width:H};return(0,a.jsx)("div",{className:`${yt}${De}`,...pe,style:{...tt,...X},ref:Ie})}),Ot=()=>{const i=(0,Z.useRef)(!0);return i.current?(i.current=!1,!0):!1},Ut=(i,s=[])=>{const h=Ot();(0,Z.useEffect)(()=>{if(!h)return i()},s)},Bt=(i,s=450)=>{const[h,C]=(0,Z.useState)(i);return Ut(()=>{let T;return i||s===0?C(i):T=setTimeout(()=>C(i),s),()=>T&&clearTimeout(T)},[i]),[h,C]},ft=({children:i,mountNode:s=document.body})=>(0,ot.createPortal)(i,s);const qt={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},Qe={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},ir={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},Gt=document.body;var ht=({open:i,close:s,delay:h=300,children:C,mountNode:T,hasMask:N=!0,style:L,className:X="h-mask"})=>{const[H]=Bt(i,h);return Gt.style.overflow=H?"hidden":"",(0,a.jsx)(ft,{mountNode:T,children:(0,a.jsx)("div",{children:H?(0,a.jsxs)("div",{className:X,style:qt,children:[N?(0,a.jsx)("div",{style:Qe,onClick:ne=>s==null?void 0:s(ne)}):null,(0,a.jsx)("div",{style:{...ir,...L},children:C})]}):null})})},Pt=re(842),bt={};bt.styleTagTransform=B(),bt.setAttributes=A(),bt.insert=p().bind(null,"head"),bt.domAPI=y(),bt.insertStyleElement=G();var ar=c()(Pt.Z,bt),lt=Pt.Z&&Pt.Z.locals?Pt.Z.locals:void 0,St=({open:i,close:s,footer:h,header:C,className:T,children:N,width:L="300px"})=>{var X;const H=["drawer-wrap",i?"open":"",...(X=T==null?void 0:T.split(" "))!=null?X:[]].filter(Boolean).map(ne=>lt[ne]).join(" ");return(0,a.jsx)(ht,{open:i,close:s,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,a.jsx)("div",{className:H,style:{width:L},children:(0,a.jsxs)("div",{className:lt["drawer-container"],children:[(0,a.jsxs)("div",{className:lt["drawer-header"],children:[(0,a.jsx)("span",{className:`link ${lt["ico-close"]}`,onClick:ne=>s==null?void 0:s(ne)}),(0,a.jsx)("div",{children:C})]}),(0,a.jsx)("div",{className:lt["drawer-content"],children:N}),h?(0,a.jsx)("div",{className:lt["drawer-footer"],children:h}):null]})})})},lr=(i,s,h="click")=>{(0,Z.useEffect)(()=>{const C=N=>{const L=J(i)?i.current:i;(L==null?void 0:L.contains)&&!L.contains(N.target)&&s(N)},T=typeof h=="string"?[h]:h;return T.map(N=>{document.addEventListener(N,C,!1)}),()=>{T.map(N=>{document.removeEventListener(N,C,!1)})}},[i,s,h])},Mt=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",sr=(i="")=>i.replace(/^\S/,s=>s.toUpperCase()),pt=i=>{var s;if(Ge())return i=J(i)?i.current:i!=null?i:document.body,(s=i.getBoundingClientRect)==null?void 0:s.call(i)},u=i=>{if(!Ge())return;const s=document.createElement("div");return s.innerHTML=i,s.children[0]},b=(i,s={},h=!1)=>{!Ke(i)||Object.keys(s).map(C=>{i.style.setProperty(C,h?"":s[C])})};const E=(i=350)=>new Promise(s=>setTimeout(s,i)),O=(i=100)=>{const s=Date.now();for(;Date.now()-s<=i;);};var P=E,K=async(i,s=15)=>{if(!Ge())return;if(typeof i=="string"&&(i=u(i)),i=J(i)?i.current:i,!Ke(i))return{};const h=i.cloneNode(!0);b(h,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(h),await P(s);const C=pt(h);return i.parentNode.removeChild(h),C};const me=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,se=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,oe=(i,s)=>{var h;s=`huxy-drop-arrow-${s}`;const C=(h=i.getAttribute("class"))!=null?h:"";me.test(C)?i.setAttribute("class",C.replace(se,s)):i.setAttribute("class",`${C} ${s}`)},Fe=async(i,s,h)=>{const{left:C,right:T,top:N,bottom:L}=pt(i),{width:X,height:H}=at(),{width:ne,height:le}=await K(s);if(T<0||L<0||C>X||N>H)return{};if(h==="vertical"){const xe={left:C+"px",top:L+10+"px",right:"auto",bottom:"auto"};let pe="lt";C+ne>X&&(xe.left=T-ne+"px",pe="rt"),L+10+le>H&&(xe.top=N-10-le+"px",pe=pe==="lt"?"lb":"rb"),b(s,xe),oe(s,pe)}else{const xe={left:T+10+"px",top:N+"px",right:"auto",bottom:"auto"};let pe="tl";T+10+ne>X&&(xe.left=C-10-ne+"px",pe="tr"),N+le>H&&(xe.top=L-le+"px",pe=pe==="tl"?"bl":"br"),b(s,xe),oe(s,pe)}};var st=(i,s,h="horizontal")=>{const C=R(Fe),T=()=>C(i,s,h);window.addEventListener("scroll",T,!1),window.addEventListener("resize",T,!1);const N=()=>{window.removeEventListener("scroll",T),window.removeEventListener("resize",T),b(s,{left:"",top:"",right:"",bottom:""})};return Fe(i,s,h),N},Ct=({open:i,delay:s=250,children:h,mountNode:C,style:T,className:N="huxy-mask"})=>{const[L]=Bt(i,s);return(0,a.jsx)(ft,{mountNode:C,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:N,children:(0,a.jsx)("div",{style:{...T,display:L?"block":"none"},children:h})})})})},mt=re(563),Me={};Me.styleTagTransform=B(),Me.setAttributes=A(),Me.insert=p().bind(null,"head"),Me.domAPI=y(),Me.insertStyleElement=G();var _t=c()(mt.Z,Me),It=mt.Z&&mt.Z.locals?mt.Z.locals:void 0,vt=({trigger:i="click",type:s,dropList:h,className:C,children:T,...N})=>{const[L,X]=(0,Z.useState)(!1),H=(0,Z.useRef)(),ne=(0,Z.useRef)(),le=(0,Z.useRef)();lr(H,be=>L&&X(!1),[...new Set(["click",i.toLowerCase()])]),(0,Z.useEffect)(()=>()=>{var be;return(be=le.current)==null?void 0:be.call(le)},[]);const xe=be=>{be.preventDefault(),X(!0),le.current=st(H.current,ne.current,s)},pe={[`on${sr(i)}`]:xe},Ie=["drop-wrap",L?"open":""].filter(Boolean).map(be=>It[be]).join(" "),De=Mt(h)?h:h==null?void 0:h(()=>X(!1),L);return(0,a.jsxs)("span",{ref:H,className:`${It["drop-target"]}${C?` ${C}`:""}`,...pe,...N,children:[T,(0,a.jsx)(Ct,{open:L,className:"huxy-drop",children:(0,a.jsx)("div",{ref:ne,className:Ie,children:De})})]})},wt=(i,s={},h)=>{if(!Ge())return;h=J(h)?h.current:h!=null?h:document.body;const C=document.createElement("span");C.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),s&&b(C,s),C.innerText=i,h.appendChild(C);const T=C.getBoundingClientRect();return h.removeChild(C),T},it=re(626),Ze={};Ze.styleTagTransform=B(),Ze.setAttributes=A(),Ze.insert=p().bind(null,"head"),Ze.domAPI=y(),Ze.insertStyleElement=G();var Mr=c()(it.Z,Ze),$r=it.Z&&it.Z.locals?it.Z.locals:void 0,Xt=({title:i,placement:s="topRight",children:h,ellipsis:C,className:T,...N})=>(0,a.jsx)("span",{className:`${$r[`huxy-tooltip-${s}`]}${T?` ${T}`:""}`,tooltip:i!=null?i:h,...N,children:(0,a.jsx)("span",{className:C?$r.ellipsis:"",children:h})});const yr={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"};var gr=i=>{var s,h,C,T;const{children:N}=i,L=typeof N=="string",X=L?N:(C=(s=N==null?void 0:N.props)==null?void 0:s.title)!=null?C:(h=N==null?void 0:N.props)==null?void 0:h.children,H=(0,Z.useRef)(),[ne,le]=(0,Z.useState)(!1),xe=Ve(H,250);return(0,Z.useEffect)(()=>{if(H.current){const{width:pe}=wt(X),{width:Ie}=pt(H.current),De=pe>Ie;De!==ne&&le(De)}},[X,xe.width]),(0,a.jsx)("span",{ref:H,style:{width:"100%",display:"inline-block"},children:ne?L?(0,a.jsx)(Xt,{...i,ellipsis:!0}):(0,a.jsx)("span",{style:yr,children:N}):L?N:(T=N==null?void 0:N.props)==null?void 0:T.children})},Kt=Object.defineProperty,br=(i,s,h)=>s in i?Kt(i,s,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[s]=h,vr=(i,s,h)=>(br(i,typeof s!="symbol"?s+"":s,h),h);class wr extends Re().Component{constructor(){super(...arguments),vr(this,"state",{error:null})}static getDerivedStateFromError(s){return{error:s}}componentDidCatch(s,h){const{errorReport:C}=this.props;typeof C=="function"&&C({error:s,info:h.componentStack})}render(){const{error:s}=this.state,{fallback:h,children:C}=this.props;return s?h(s):C}}var ur=i=>s=>{if(typeof s=="function"||typeof(s==null?void 0:s.render)=="function")return(0,a.jsx)(s,{});if(typeof s=="string"){const h=i==null?void 0:i[s];return h?(0,a.jsx)(h,{}):(0,a.jsx)("i",{className:s})}return s!=null?s:null};const cr=i=>ur(i);var zr=i=>({icon:s,defaultIcon:h=null})=>s?cr(i)(s):s===!1?null:h;const Jt=["","webkit","moz","ms"],dr=i=>Jt.map(s=>s?`${s}FullscreenElement`:"fullscreenElement").find(s=>i[s]),Fr=i=>Jt.map(s=>s?`${s}RequestFullscreen`:"requestFullscreen").find(s=>i[s]),Tr=i=>Jt.map(s=>s?`${s}ExitFullscreen`:"exitFullscreen").find(s=>i[s]),Wt=Jt.map(i=>`${i}fullscreenchange`);var kr=i=>{var s,h;if(!Ge())return;i=J(i)?i.current:i!=null?i:document.body;const C=dr(document),T=Fr(i),N=Tr(document);document[C]?(h=document[N])==null||h.call(document):(s=i[T])==null||s.call(i)},jr=i=>Ge()?(Wt.map(s=>document.addEventListener(s,i,!1)),()=>Wt.map(s=>document.removeEventListener(s,i,!1))):void 0;const Er=i=>(0,a.jsx)("i",{...i,children:"..."});var l=({panel:i,fullIcon:s=Er,exitIcon:h=Er,...C})=>{const T=J(i)?i.current:i,[N,L]=(0,Z.useState)();(0,Z.useEffect)(()=>{const H=jr(()=>{L(ne=>!ne)});return()=>H()},[]);const X=N?h:s;return(0,a.jsx)(X,{onClick:H=>kr(T),...C})},f=(i,s)=>(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...s}),j=i=>{const{error:s={},info:h=""}=i||{},{message:C,stack:T,errMsg:N}=s;let L=N||T||s.toString();L=`${L}
${h}`.replace(/\r|\n|\r\n/g,"<br/>"),L=L.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),L=L.replace(/\s/g,"&nbsp;");const X=C==null?void 0:C.slice(0,120).split(". ").slice(0,2).join(". ");return(0,a.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[f(L,{style:{color:"red"}}),X&&(0,a.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${X}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},v=({children:i,report:s})=>{var h;const C=(0,Z.useRef)();return(h=C.current)!=null&&h.state&&(C.current.state.error=null),(0,a.jsx)(wr,{ref:C,fallback:(T,N)=>j({error:T,info:N}),errorReport:s,children:i})};const m=(i,s)=>Object.keys(s).map(h=>i.style[h]=s[h]),_=(i,s)=>Object.keys(s).map(h=>i.style[h]=""),Y={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},V=({left:i,top:s,width:h,height:C})=>({left:`${i}px`,top:`${s}px`,width:`${h}px`,height:`${C}px`}),M=i=>(0,a.jsx)("i",{...i,children:"..."}),D=i=>{const{left:s,top:h}=pt(i),{width:C,height:T}=at(i);return{left:s,top:h,width:C,height:T}};var fe=({panel:i,target:s,fullIcon:h=M,exitIcon:C=M})=>{i=J(i)?i.current:i||document.body;const[T,N]=(0,Z.useState)(),L=(0,Z.useRef)(),X=(0,Z.useRef)();(0,Z.useEffect)(()=>{const le=typeof s=="function"?s:()=>document.getElementsByClassName(s)[0];X.current=V(D(le())),L.current={...Y,...V(D(i))}},[i]);const H=(le,xe)=>{le?(m(xe,L.current),setTimeout(()=>{m(xe,X.current)},0)):_(xe,L.current),N(le)},ne=T?C:h;return(0,a.jsx)(ne,{onClick:le=>H(!T,i)})},he=re(697),ce={};ce.styleTagTransform=B(),ce.setAttributes=A(),ce.insert=p().bind(null,"head"),ce.domAPI=y(),ce.insertStyleElement=G();var de=c()(he.Z,ce),ue=he.Z&&he.Z.locals?he.Z.locals:void 0,Pe=({open:i,close:s,hasMask:h=!0,cancelText:C="\u53D6\u6D88",submit:T,submitText:N="\u786E\u5B9A",title:L="Modal \u5F39\u7A97",className:X,children:H,delay:ne=250})=>{var le;const xe=["modal-wrap",i?"open":"",...(le=X==null?void 0:X.split(" "))!=null?le:[]].filter(Boolean).map(pe=>ue[pe]).join(" ");return(0,a.jsx)(ht,{open:i,close:s,delay:ne,hasMask:h,className:"huxy-modal",children:(0,a.jsx)("div",{className:xe,children:(0,a.jsxs)("div",{className:ue["modal-container"],children:[(0,a.jsx)("div",{className:ue["modal-header"],children:L}),(0,a.jsx)("div",{className:ue["modal-content"],children:H}),(0,a.jsxs)("div",{className:ue["modal-footer"],children:[(0,a.jsx)("div",{className:`${ue.btn} ${ue.left}`,onClick:pe=>s==null?void 0:s(pe),children:C}),(0,a.jsx)("div",{className:`${ue.btn} ${ue.right}`,onClick:pe=>T==null?void 0:T(pe),children:N})]})]})})})},ae=re(201),Q={};Q.styleTagTransform=B(),Q.setAttributes=A(),Q.insert=p().bind(null,"head"),Q.domAPI=y(),Q.insertStyleElement=G();var Ce=c()(ae.Z,Q),Le=ae.Z&&ae.Z.locals?ae.Z.locals:void 0,Ye=({global:i,absolute:s})=>(0,a.jsx)("div",{className:`spinner${i?" global":""}${s?" absolute":""}`,children:(0,a.jsx)("figure",{className:"spinning"})}),Be=re(810),_e={};_e.styleTagTransform=B(),_e.setAttributes=A(),_e.insert=p().bind(null,"head"),_e.domAPI=y(),_e.insertStyleElement=G();var Dt=c()(Be.Z,_e),kt=Be.Z&&Be.Z.locals?Be.Z.locals:void 0;const $t=i=>{var s;return(s=i==null?void 0:i.filter)==null?void 0:s.call(i,h=>typeof h=="function")},zt=(i,s)=>{const h=(0,Z.useRef)(),{loading:C,title:T,plugins:N,children:L,className:X,...H}=i,ne=$t(N),le=ne==null?void 0:ne.length,xe=X?` ${X}`:"",pe=J(s)?s:h;return(0,a.jsxs)("div",{className:`${kt.panel}${xe}`,...H,ref:pe,children:[(T||le)&&(0,a.jsxs)("div",{className:kt["panel-header"],children:[T&&(0,a.jsx)("h4",{className:kt["panel-title"],children:T}),le&&(0,a.jsx)("div",{className:kt["panel-plugins"],children:ne.map((Ie,De)=>(0,a.jsx)("span",{className:"link",children:(0,a.jsx)(Ie,{panel:pe})},De))})]}),(0,a.jsx)("div",{className:kt["panel-body"],children:L}),C&&(0,a.jsx)(Ye,{})]})};var At=(0,Z.forwardRef)(zt),jt=re(31),He={};He.styleTagTransform=B(),He.setAttributes=A(),He.insert=p().bind(null,"head"),He.domAPI=y(),He.insertStyleElement=G();var Ar=c()(jt.Z,He),et=jt.Z&&jt.Z.locals?jt.Z.locals:void 0;const xt=({gutter:i=10,className:s,overflow:h="hidden",...C},T)=>{var N;const L=s?` ${s}`:"";let X=10;if(Array.isArray(i)){const H=[...i];i=H[0],X=(N=H[1])!=null?N:H[0]}return(0,a.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(X/2)}px`,overflow:h},children:(0,a.jsx)("div",{className:`row${L}`,...C,ref:T})})};var fr=(0,Z.forwardRef)(xt),Qt=i=>gt(i)==="array",Rt=i=>Qt(i)&&!!i.length;const Zt=({item:i,to:s,preventDefault:h,stopPropagation:C,className:T,...N})=>h?(0,a.jsx)("span",{className:`link${T?` ${T}`:""}`,...N}):(0,a.jsx)("a",{href:s,className:`link${T?` ${T}`:""}`,...N}),hr=({item:i,...s})=>(0,a.jsx)("ul",{...s}),pr=(i,...s)=>{const h={};return Object.keys(i).filter(Boolean).map(C=>{h[C]=T=>i[C](T,...s)}),h},er=({data:i=[],events:s={},List:h=hr,Link:C=Zt,leftIcon:T,rightIcon:N,level:L=0})=>i.map(X=>{const{name:H,path:ne,icon:le,rightIcon:xe,active:pe,open:Ie,children:De,linkProps:be}=X,Ue=Rt(De),Te=pr(s,X,L,Ue),Oe=X.id||ne||H,ut=le!=null?le:T,Yt=xe!=null?xe:N;return Ue?(0,a.jsxs)("li",{className:Ie?"open":"","has-children":"true",...Te,children:[(0,a.jsxs)(C,{item:{...X,level:L},className:pe?"active":"",to:ne,preventDefault:!0,stopPropagation:!1,...be,children:[ut?(0,a.jsx)("div",{className:"node-left-icon",children:ut===!0?(0,a.jsx)("i",{className:"default-left-icon"}):ut}):null,H?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:H})}):null,Yt?(0,a.jsx)("div",{className:"node-right-icon",children:Yt===!0?(0,a.jsx)("i",{className:"default-right-icon"}):Yt}):null]}),(0,a.jsx)(h,{item:X,children:er({data:De,events:s,List:h,Link:C,leftIcon:T,rightIcon:N,level:L+1})})]},Oe):(0,a.jsx)("li",{...Te,children:(0,a.jsxs)(C,{item:{...X,level:L},className:pe?"active":"",to:ne,...be,children:[ut?(0,a.jsx)("div",{className:"node-left-icon",children:ut===!0?(0,a.jsx)("i",{className:"default-left-icon"}):ut}):null,H?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:H})}):null]})},Oe)});var tr=er,Nr=(i,...s)=>(0,a.jsx)("div",{"v-html":i,...s}),Ft=re(289),Lt={};Lt.styleTagTransform=B(),Lt.setAttributes=A(),Lt.insert=p().bind(null,"head"),Lt.domAPI=y(),Lt.insertStyleElement=G();var mr=c()(Ft.Z,Lt),Sr=Ft.Z&&Ft.Z.locals?Ft.Z.locals:void 0;const _r=i=>(0,a.jsx)("div",{style:{padding:"6px 15px"},children:i}),Wr=({activekey:i,tabs:s=[],switchTab:h,trackColor:C,flex:T},N)=>{var L;const[X,H]=(0,Z.useState)(i!=null?i:(L=s[0])==null?void 0:L.key),[ne,le]=(0,Z.useState)({}),xe=(0,Z.useRef)({}),pe=(0,Z.useRef)();(0,Z.useEffect)(()=>{const be=xe.current[X];be&&Ie(be)},[]);const Ie=be=>{const{left:Ue,width:Te}=pt(be),Oe=pt(pe.current).left;le({left:Ue-Oe,width:Te})},De=(be,Ue)=>{be.stopPropagation(),H(Ue),typeof h=="function"&&h(Ue),Ie(be.currentTarget)};return(0,a.jsxs)("div",{className:"tabs-header-wrap",ref:N,children:[(0,a.jsx)("ul",{className:`tabs-header${T?" flex":""}`,ref:pe,children:s.map(be=>(0,a.jsx)("li",{ref:Ue=>xe.current[be.key]=Ue,className:`th-item${X===be.key?" active":""}`,onClick:Ue=>De(Ue,be.key),children:typeof be.renderTabs=="function"?be.renderTabs(be,X===be.key):_r(be.value)},be.key))}),(0,a.jsx)("div",{className:"th-track",style:{...ne,color:C}})]})};var Zr=(0,Z.forwardRef)(Wr),Yr=(i,s,h="id",C="children")=>{if(!Qt(i))return null;const T=N=>{for(let L=0,X=N.length;L<X;L++){const H=N[L];if(H[h]===s)return[H];if(Qt(H[C])){const ne=T(H[C]);if(ne)return[H].concat(ne)}}};return T(i)},Vr=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Hr=()=>{let i=Vr();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,s=>{const h=(i+Math.random()*16)%16|0;return i=Math.floor(i/16),(s==="x"?h:h&3|8).toString(16)})};const Ur=i=>++i;var qr=()=>{const[,i]=(0,Z.useState)(0);return(0,Z.useCallback)(()=>i(Ur),[])},Gr=({item:i,style:s,...h})=>{var C;const{uuid:T,open:N}=i,L=(0,Z.useRef)(),X=(0,Z.useRef)(),H=Ot(),[ne,le]=(0,Z.useState)("");return(0,Z.useEffect)(()=>{const xe=L.current,pe=N?`${xe.scrollHeight}px`:"0px";le(pe)},[]),(0,Z.useEffect)(()=>{if(H)return;const xe=L.current,pe=N?"0px":`${xe.scrollHeight}px`;return le(pe),X.current=setTimeout(()=>{const Ie=N?`${xe.scrollHeight}px`:"0px";le(Ie)},5),()=>clearTimeout(X.current)},[N,(C=i.children)==null?void 0:C.length]),(0,Z.useEffect)(()=>{T&&le("")},[T]),(0,a.jsx)("ul",{ref:L,style:{...s,maxHeight:ne},...h})},Cr=re(435),rr={};rr.styleTagTransform=B(),rr.setAttributes=A(),rr.insert=p().bind(null,"head"),rr.domAPI=y(),rr.insertStyleElement=G();var Jr=c()(Cr.Z,rr),Qr=Cr.Z&&Cr.Z.locals?Cr.Z.locals:void 0;const Xr=i=>(0,a.jsx)("ul",{...i}),Kr=(i,s)=>i?({item:h,...C})=>(0,a.jsx)(Xr,{className:s==="right"?"left":"",...C}):Gr;var Rr=i=>{var s;const{data:h=[],collapsed:C=!1,type:T="vertical",Link:N,width:L,bgColor:X,itemHeight:H,collapsedWidth:ne,itemPadding:le,style:xe,className:pe,...Ie}=i,De=(0,Z.useRef)(),be=(0,Z.useRef)();(0,Z.useEffect)(()=>()=>clearTimeout(De.current),[]);const Ue=qr(),Te=T==="horizontal",Oe=!Te&&C,ut={onClick:(Tt,yt)=>{Tt.stopPropagation(),!Te&&!Oe&&(Yr(h,yt.path,"path").map(tt=>tt.path===yt.path?tt.open=!tt.open:tt.uuid=Hr()),Ue())},onMouseEnter:(Tt,yt,tt,Dr)=>{Oe&&!tt&&Dr&&(clearTimeout(De.current),be.current.style.width="var(--maxWidth)")},onMouseLeave:(Tt,yt,tt,Dr)=>{Oe&&!tt&&Dr&&(De.current=setTimeout(()=>be.current.style.width="",200))}},Yt=(Te?["huxy-horizontal-tree",pe]:["huxy-tree",pe,Oe?"collapsed":""]).filter(Boolean).join(" "),{float:or,...Or}=(s=Ie==null?void 0:Ie.style)!=null?s:{},Vt={"--bgColor":X,"--itemHeight":H,"--nodeListWidth":L,...Or};T==="horizontal"?(Vt["--itemPadding"]=le,Vt["--nodeFloat"]=or):(Vt["--width"]=L,Vt["--collapsedWidth"]=ne);const Pr=Kr(Te||Oe,or),Ir=({item:Tt,className:yt,...tt})=>Oe&&!Tt.level?(0,a.jsx)(N,{className:`link${yt?` ${yt}`:""}`,...tt,title:Tt.title||Tt.name}):(0,a.jsx)(N,{className:`link${yt?` ${yt}`:""}`,...tt});return(0,a.jsx)("div",{ref:be,className:Yt,style:Vt,...Ie,children:(0,a.jsx)("div",{className:"huxy-tree-track",children:(0,a.jsx)("ul",{className:"huxy-tree-root",children:tr({data:h,events:ut,List:Pr,Link:Ir,leftIcon:!0,rightIcon:!0})})})})}}(),g}()})},4544:function(Nt,ye,qe){(function(Ae,Se){Nt.exports=Se(qe(7378))})(this,function(Ae){return function(){"use strict";var Se={201:function(g,a,x){var c=x(703),k=x.n(c),y=x(414),S=x.n(y),p=S()(k());p.push([g.id,`@keyframes before {
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
`,""]),p.locals={},a.Z=p},414:function(g){g.exports=function(a){var x=[];return x.toString=function(){return this.map(function(c){var k="",y=typeof c[5]!="undefined";return c[4]&&(k+="@supports (".concat(c[4],") {")),c[2]&&(k+="@media ".concat(c[2]," {")),y&&(k+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),k+=a(c),y&&(k+="}"),c[2]&&(k+="}"),c[4]&&(k+="}"),k}).join("")},x.i=function(c,k,y,S,p){typeof c=="string"&&(c=[[null,c,void 0]]);var $={};if(y)for(var A=0;A<this.length;A++){var q=this[A][0];q!=null&&($[q]=!0)}for(var G=0;G<c.length;G++){var F=[].concat(c[G]);y&&$[F[0]]||(typeof p!="undefined"&&(typeof F[5]=="undefined"||(F[1]="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {").concat(F[1],"}")),F[5]=p),k&&(F[2]&&(F[1]="@media ".concat(F[2]," {").concat(F[1],"}")),F[2]=k),S&&(F[4]?(F[1]="@supports (".concat(F[4],") {").concat(F[1],"}"),F[4]=S):F[4]="".concat(S)),x.push(F))}},x}},703:function(g){g.exports=function(a){return a[1]}},53:function(g,a,x){var c,k=x(899),y=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function q(G,F,B){var W,te={},ge=null,ke=null;B!==void 0&&(ge=""+B),F.key!==void 0&&(ge=""+F.key),F.ref!==void 0&&(ke=F.ref);for(W in F)p.call(F,W)&&!A.hasOwnProperty(W)&&(te[W]=F[W]);if(G&&G.defaultProps)for(W in F=G.defaultProps,F)te[W]===void 0&&(te[W]=F[W]);return{$$typeof:y,type:G,key:ge,ref:ke,props:te,_owner:$.current}}c=S,a.jsx=q,a.jsxs=q},458:function(g,a,x){g.exports=x(53)},748:function(g){var a=[];function x(y){for(var S=-1,p=0;p<a.length;p++)if(a[p].identifier===y){S=p;break}return S}function c(y,S){for(var p={},$=[],A=0;A<y.length;A++){var q=y[A],G=S.base?q[0]+S.base:q[0],F=p[G]||0,B="".concat(G," ").concat(F);p[G]=F+1;var W=x(B),te={css:q[1],media:q[2],sourceMap:q[3],supports:q[4],layer:q[5]};if(W!==-1)a[W].references++,a[W].updater(te);else{var ge=k(te,S);S.byIndex=A,a.splice(A,0,{identifier:B,updater:ge,references:1})}$.push(B)}return $}function k(y,S){var p=S.domAPI(S);p.update(y);var $=function(A){if(A){if(A.css===y.css&&A.media===y.media&&A.sourceMap===y.sourceMap&&A.supports===y.supports&&A.layer===y.layer)return;p.update(y=A)}else p.remove()};return $}g.exports=function(y,S){S=S||{},y=y||[];var p=c(y,S);return function($){$=$||[];for(var A=0;A<p.length;A++){var q=p[A],G=x(q);a[G].references--}for(var F=c($,S),B=0;B<p.length;B++){var W=p[B],te=x(W);a[te].references===0&&(a[te].updater(),a.splice(te,1))}p=F}}},736:function(g){var a={};function x(k){if(typeof a[k]=="undefined"){var y=document.querySelector(k);if(window.HTMLIFrameElement&&y instanceof window.HTMLIFrameElement)try{y=y.contentDocument.head}catch(S){y=null}a[k]=y}return a[k]}function c(k,y){var S=x(k);if(!S)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");S.appendChild(y)}g.exports=c},706:function(g){function a(x){var c=document.createElement("style");return x.setAttributes(c,x.attributes),x.insert(c,x.options),c}g.exports=a},567:function(g,a,x){function c(k){var y=x.nc;y&&k.setAttribute("nonce",y)}g.exports=c},306:function(g){function a(k,y,S){var p="";S.supports&&(p+="@supports (".concat(S.supports,") {")),S.media&&(p+="@media ".concat(S.media," {"));var $=typeof S.layer!="undefined";$&&(p+="@layer".concat(S.layer.length>0?" ".concat(S.layer):""," {")),p+=S.css,$&&(p+="}"),S.media&&(p+="}"),S.supports&&(p+="}");var A=S.sourceMap;A&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),y.styleTagTransform(p,k,y.options)}function x(k){if(k.parentNode===null)return!1;k.parentNode.removeChild(k)}function c(k){var y=k.insertStyleElement(k);return{update:function(S){a(y,k,S)},remove:function(){x(y)}}}g.exports=c},62:function(g){function a(x,c){if(c.styleSheet)c.styleSheet.cssText=x;else{for(;c.firstChild;)c.removeChild(c.firstChild);c.appendChild(document.createTextNode(x))}}g.exports=a},899:function(g){g.exports=Ae}},we={};function ee(g){var a=we[g];if(a!==void 0)return a.exports;var x=we[g]={id:g,exports:{}};return Se[g](x,x.exports,ee),x.exports}(function(){ee.n=function(g){var a=g&&g.__esModule?function(){return g.default}:function(){return g};return ee.d(a,{a}),a}})(),function(){ee.d=function(g,a){for(var x in a)ee.o(a,x)&&!ee.o(g,x)&&Object.defineProperty(g,x,{enumerable:!0,get:a[x]})}}(),function(){ee.o=function(g,a){return Object.prototype.hasOwnProperty.call(g,a)}}(),function(){ee.r=function(g){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})}}(),function(){ee.nc=void 0}();var re={};return function(){ee.r(re),ee.d(re,{Link:function(){return jr},routeStore:function(){return St},useRoute:function(){return Er},useRouter:function(){return Tr}});var g=ee(899),a=ee.n(g),x=l=>Object.prototype.toString.call(l).slice(8,-1).toLowerCase(),c=l=>x(l)==="array",k=l=>x(l)==="object",y=l=>(l==null?void 0:l.$$typeof)&&typeof l.$$typeof=="symbol"&&l.$$typeof.description==="react.element",S=l=>l==null?void 0:l.__v_isVNode,p=(l,f)=>Object.prototype.hasOwnProperty.call(l!=null?l:{},f);const $=l=>{if(!c(l)&&!k(l))return l;const f=c(l)?[]:{};for(const j in l)if(p(l,j)){const v=l[j];f[j]=y(v)||S(v)||typeof v!="object"?v:v!==l?$(v):"cyclic"}else Object.setPrototypeOf(f,{[j]:l[j]});return f};var A=$,q=l=>x(l)==="function",G=l=>x(l)==="promise"||k(l)&&q(l.then),F=(l,f=12e4,j="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!G(l))return{};let v=null,m=null;return{promiseFn:new Promise((_,Y)=>{v=(V="canceled")=>{clearTimeout(m),_({canceled:!0,errMsg:V})},f&&(f=typeof f!="number"?12e4:f,m=setTimeout(()=>v(j),f)),l.then(V=>{clearTimeout(m),_({result:V,errMsg:!1})}).catch(V=>{clearTimeout(m),Y(V)})}),cancelFn:v}},B=l=>l?l.charAt(l.length-1)==="/"?l.slice(0,-1):l:"",W=ee(458),te=(l,f)=>(0,W.jsx)("div",{dangerouslySetInnerHTML:{__html:l},...f}),ge=l=>{const{error:f={},info:j=""}=l||{},{message:v,stack:m,errMsg:_}=f;let Y=_||m||f.toString();Y=`${Y}
${j}`.replace(/\r|\n|\r\n/g,"<br/>"),Y=Y.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Y=Y.replace(/\s/g,"&nbsp;");const V=v==null?void 0:v.slice(0,120).split(". ").slice(0,2).join(". ");return(0,W.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[te(Y,{style:{color:"red"}}),V&&(0,W.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${V}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})};const ke=(l,f,j,v,m=[])=>{const _=M=>{for(let D=0,fe=M.length;D<fe;D++){const he=M[D],ce=he[v].split("?")[0];if(new RegExp("^"+ce.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return he;if(c(he[j])){const de=_(he[j]);if(de)return de}}},Y=_(l);if(!Y)return"/404";const{redirect:V}=Y;return V?m.includes(V)?m:(m.push(V),ke(l,V.split("?")[0],j,v,m)):m[m.length-1]},rt=(l,f,j,v,m)=>{if(!c(l))return null;const _=fe=>{const he=fe.split("/"),ce=f.split("/"),de={};return he.map((ue,Pe)=>ue.indexOf(":")===0&&(de[ue.slice(1)]=ce[Pe])),de},Y=(fe,he)=>{const ce=[],de=he.split("/:")[0];for(let ue=0,Pe=fe.length;ue<Pe;ue++){const ae=fe[ue];if(ae[m]===de){ae.active=!0;const{name:Q,title:Ce,icon:Le,params:Ye}=ae;ce.push({name:Q,title:Ce,icon:Le,params:Ye,[m]:de})}else if(he.indexOf(`${ae[m]}/`)===0){ae.active=!0;const Q=_(ae[m]),Ce=Object.keys(Q).map(Dt=>Q[Dt]).join("/"),{name:Le,title:Ye,icon:Be}=ae,_e=Ce?`${de}/${Ce}`:ae[m];ce.push({name:Le,title:Ye,icon:Be,[m]:_e,params:{...ae.params,...Q}})}else if(ae[m]===he){ae.active=!0;const Q=_(ae[m]),{[v]:Ce,...Le}=ae;ce.push({...Le,[m]:f,params:{...Le.params,...j,...Q}})}}return ce},V=(fe,he)=>{for(let ce=0,de=fe.length;ce<de;ce++){const ue=fe[ce];if(he.indexOf(`${ue[m]}/`)===0){ue.active=!0;return}}},M=fe=>{for(let he=0,ce=fe.length;he<ce;he++){const de=fe[he],ue=(de[m]||"").split("?")[0];if(ue===f){de.hideMenu&&V(fe,de.parentPath||ue),de.active=!0;const{[v]:Pe,...ae}=de;return[{...ae,params:{...ae.params,...j}}]}if(new RegExp("^"+ue.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return Y(fe,ue);if(c(de[v])){const Pe=M(de[v]);if(Pe){de.active=!0,de.open=!0;const{[v]:ae,...Q}=de;return[Q,...Pe]}}}},D=M(l)||[];return{result:l,current:D}},ot=(l,f,j)=>l.filter(v=>v.hideMenu||v[j].indexOf("/:")>-1?!1:(c(v[f])&&(v[f]=ot(v[f],f,j)),!0));var Z=(l,f,j,v="children",m="path")=>{const _=ke(l,f,v,m);if(_)return{redirect:_};const{result:Y,current:V}=rt(l,f,j,v,m),M=ot(Y,v,m);return{current:V,menu:M}},Re=()=>{const l={};return{on:(f,j)=>{l[f]||(l[f]=[]),l[f].indexOf(j)===-1&&l[f].push(j)},emit:(f,j)=>{l[f]&&l[f].map(v=>v(j))},off:(f,j=null)=>{if(l[f]){if(typeof j!="function")return l[f]=[];const v=l[f].indexOf(j);v>-1&&l[f].splice(v,1)}}}};const $e=l=>{const f={};for(let j in l)p(l,j)||(f[j]=l[j]);return f};var Ge=(l,f)=>{if(!k(l))return f;if(!k(f))return l;const j={...$e(l),...$e(f)},v={...l,...f};return Object.keys(j).map(m=>{Object.setPrototypeOf(v,{[m]:j[m]})}),v},gt=()=>{const{on:l,emit:f,off:j}=Re(),v={};return{getState:m=>A(v[m]),setState:(m,_=!1)=>{if(typeof m=="function"&&(m=m(A(v))),!k(m))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const Y=A(m);Object.keys(Y).map(V=>{const M=v[V],D=Y[V],fe=k(D)&&k(M)?Ge(M,D):D;!_&&f(V,fe),v[V]=fe})},subscribe:(m,_)=>(l(m,_),()=>j(m,_)),unsubscribe:j,clean:m=>{typeof m=="string"?v[m]=void 0:Array.isArray(m)?m.map(_=>v[_]=void 0):Object.keys(v).map(_=>v[_]=void 0)}}},Ke=l=>(f,j)=>{const[v,m]=(0,g.useState)(()=>{const M=l==null?void 0:l.getState(f);return M!==void 0?M:(j!==void 0&&(l==null||l.setState({[f]:j},!0)),j)}),_=(0,g.useCallback)(M=>l==null?void 0:l.setState({[f]:typeof M=="function"?M(l==null?void 0:l.getState(f)):M}),[]),Y=(0,g.useCallback)(M=>l==null?void 0:l.subscribe(f,M),[]),V=(0,g.useCallback)((M=M)=>l==null?void 0:l.clean(M),[]);return(0,g.useEffect)(()=>{l==null||l.subscribe(f,M=>m(M))},[]),[v,_,Y,V]};const at=gt(),R=Ke(at),ie=Re(),J=Re(),je="push-emitter",ze="replace-emitter",ct="useRoute-emitter",Ve={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},nt={getState:()=>history.state,go:l=>history.go(l),forward:()=>history.forward(),back:()=>history.back()};var Ne=l=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(l);const Xe=(l,f)=>{const j=["#/","/"],v=j[!!f-0];if(!l||j.includes(l))return v;const m=l.charAt(l.length-1)==="/"?l.slice(0,-1):l;return f||m.indexOf("#/")>-1?m:`#${m}`},Je=(l,f,j,v=!1)=>{const m=Xe(f,j);return v?m:j?l&&m==="/"?l:`${l}${m}`:l?`${l}/${m}`:m},nr=(l,f,j,v,m,_)=>{if(!c(l))return l;const Y=(V,M="")=>V.filter(D=>!D.denied).map(D=>{if(!_&&!D.exact&&!Ne(D[v])){(!D[v]||D[v]==="javascript:;")&&(D[v]="");const fe=D[v].charAt(0)==="/"&&M.charAt(M.length-1)==="/"?D[v].slice(1):D[v].charAt(0)!=="/"&&M.charAt(M.length-1)!=="/"?`/${D[v]}`:D[v];D[v]=M?M+fe:Je(m,fe,f)}return D.redirect&&(D.redirect=Je(m,D.redirect,f)),c(D[j])&&(D[j]=Y(D[j],D[v]),!D.redirect&&D[j].length&&(D.redirect=D[j][0][v])),D});return Y(l)};var dt=l=>{if(!k(l))return"";const f=[];return Object.keys(l).map((j,v)=>{const m=v>0?"&":"?";f.push(`${m}${j}=${l[j]}`)}),f.join("")},Et=(l="")=>{const[f,j]=l.split("?");if(j){const v={};return j.split("&").map(m=>{const[_,Y]=m.split("=");v[_]=Y}),{path:f,params:v}}return{path:f}};const Ot=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Ut=(l,f)=>{for(let j=l.length-1,v;v=l[j--];){const{title:m,name:_}=v;if(typeof m=="string"&&m.length)return document.title=m;if((m==null||m===!0)&&_)return document.title=f?`${_}-${f}`:_;if(f)return document.title=f}},Bt=l=>{const{pathname:f,search:j,hash:v}=location;if(l){const V=Xe(f,l),M=decodeURIComponent(`${V}${j}`),{params:D}=Et(M);return{path:M,params:D}}const m=decodeURIComponent(Xe(v,l)),{params:_}=Et(m),Y=B(f);return{path:Y?`${Y}/${m}`:m,params:_}},ft=(l,f,j)=>{typeof l=="function"&&l({...f,stay:new Date-j})},qt=(l,f,j,v)=>{let m,_,Y;if(typeof l=="string")m=l;else if(k(l))m=l.path,_=l.params,Y=l.query;else return;!m||m==="."||m==="./"?m=v:m.indexOf("./")===0&&(m=`${v.split("?")[0]}${m.replace("./","/")}`),m=Je(f,m,j,l==null?void 0:l.exact);const V=Et(m);m=V.path;const M={...V.params,...Y},D=dt(M);return m=`${m}${D}`,_={..._,...M},{path:m,params:_}},Qe=(l,f)=>{const j=l.split(f);return j.length>1?["","/"].includes(j[1].slice(0,1)):!1},ir=Re();var Gt=l=>{const{on:f,emit:j,off:v}=ir;return{on:m=>f(l,m),emit:m=>j(l,m),off:m=>v(l,m)}},ht=l=>(f,j)=>{const{getState:v,setState:m,subscribe:_,unsubscribe:Y,clean:V}=l;return j!==void 0&&m({[f]:j},!0),{getState:()=>v(f),setState:(M,D)=>m({[f]:M},D),subscribe:M=>_(f,M),unsubscribe:()=>Y(f),clean:()=>V(f)}};const Pt=gt();var bt=ht(Pt);const ar=Gt("push-emitter"),lt=Gt("replace-emitter"),St=bt("route-store"),lr=Re(),Mt=gt(),sr=Ke(Mt);var pt=()=>![typeof window,typeof document].includes("undefined"),u=l=>{if(!pt())return;const f=document.createElement("div");return f.innerHTML=l,f.children[0]},b=Object.defineProperty,E=(l,f,j)=>f in l?b(l,f,{enumerable:!0,configurable:!0,writable:!0,value:j}):l[f]=j,O=(l,f,j)=>(E(l,typeof f!="symbol"?f+"":f,j),j);class P extends a().Component{constructor(){super(...arguments),O(this,"state",{error:null})}static getDerivedStateFromError(f){return{error:f}}componentDidCatch(f,j){const{errorReport:v}=this.props;typeof v=="function"&&v({error:f,info:j.componentStack})}render(){const{error:f}=this.state,{fallback:j,children:v}=this.props;return f?j(f):v}}var K=({children:l,report:f})=>{var j;const v=(0,g.useRef)();return(j=v.current)!=null&&j.state&&(v.current.state.error=null),(0,W.jsx)(P,{ref:v,fallback:(m,_)=>ge({error:m,info:_}),errorReport:f,children:l})},me=ee(748),se=ee.n(me),oe=ee(306),Fe=ee.n(oe),st=ee(736),Ct=ee.n(st),mt=ee(567),Me=ee.n(mt),_t=ee(706),It=ee.n(_t),vt=ee(62),wt=ee.n(vt),it=ee(201),Ze={};Ze.styleTagTransform=wt(),Ze.setAttributes=Me(),Ze.insert=Ct().bind(null,"head"),Ze.domAPI=Fe(),Ze.insertStyleElement=It();var Mr=se()(it.Z,Ze),$r=it.Z&&it.Z.locals?it.Z.locals:void 0,Xt=({global:l,absolute:f})=>(0,W.jsx)("div",{className:`spinner${l?" global":""}${f?" absolute":""}`,children:(0,W.jsx)("figure",{className:"spinning"})}),yr=()=>{const l=(0,g.useRef)([]);return(0,g.useEffect)(()=>()=>{l.current.map(f=>f.cancelFn()),l.current=[]},[]),{cancelablePromise:(0,g.useCallback)((f,j=!0)=>{const v=F(f,j);return l.current.indexOf(v)===-1&&l.current.push(v),v.promiseFn},[])}},gr=(l={})=>{const{cancelablePromise:f}=yr(),[j,v]=(0,g.useState)(l),m=(0,g.useRef)({}),_=(0,g.useRef)({}),Y=(0,g.useCallback)((M=null)=>{Array.isArray(M)&&M.length?M.map(D=>m.current[D]=l[D]):m.current=l},[]),V=(0,g.useCallback)((M,D,fe=!1)=>{const he=Object.keys(M),ce=JSON.stringify(he.sort());if(!_.current[ce]){_.current[ce]=!0,fe&&Y(Array.isArray(fe)?fe:he),he.map(de=>{m.current[de]||(m.current[de]={}),m.current[de].pending=!0}),v({...m.current});for(let de=0,ue=he.length;de<ue;de++){const Pe=he[de];f(M[Pe]).then(ae=>{let{result:Q,errMsg:Ce}=ae;de===ue-1&&(_.current[ce]=!1),typeof D=="function"&&(Q=D(Q)||Q),m.current[Pe]={...Q,pending:!1},Ce===!1&&v({...m.current})}).catch(ae=>{throw de===ue-1&&(_.current[ce]=!1),m.current[Pe]={error:ae,pending:!1},v({...m.current}),ae})}}},[]);return[j,V,Y]};const Kt=l=>Object.keys(l).length;var br=l=>{const{Comp:f,restResolve:j,loadPromise:v,params:m,children:_}=l,[Y,V]=gr(),[M,D]=gr();return(0,g.useEffect)(()=>{Kt(j)&&V(j),Kt(v)&&D(v)},[j,v]),(0,g.useEffect)(()=>{const fe=Kt(Y);fe&&fe===Kt(j)&&m.store.setState(Y)},[Y]),(0,W.jsx)(f,{...m,...Y,...M,children:_})};const vr=l=>l===!1?null:y(l)?l:q(l)?(0,W.jsx)(l,{}):(0,W.jsx)(Xt,{}),wr=({Loading:l,ErrorBoundary:f,loadedComp:j})=>{const v=(0,W.jsx)(g.Suspense,{fallback:vr(l),children:j});return f===!1?v:q(f)?(0,W.jsx)(f,{children:v}):(0,W.jsx)(K,{children:v})};var ur=({Comp:l,routerProps:f,children:j})=>{const{params:v,...m}=f,{loading:_,errorBoundary:Y,...V}=v,M=(0,W.jsx)(br,{Comp:l,...m,params:V,children:j});return wr({Loading:_,ErrorBoundary:Y,loadedComp:M})};const cr={},zr=(l,f,j)=>{const v={},m={};return k(l)?(Object.keys(l).map(_=>{const Y=f.getState(_);Y==null?m[_]=l[_](j):v[_]=Y}),{cachedResolve:v,restResolve:m}):{cachedResolve:v,restResolve:m}},Jt=(l,f)=>{if(!k(l))return{};const j={};return Object.keys(l).map(v=>j[v]=l[v](f)),j},dr=(l,f,j)=>G(j)?j.then(v=>{var m;return ur({Comp:l,routerProps:f,children:(m=v.default)!=null?m:v})}):ur({Comp:l,routerProps:f,children:j});var Fr=l=>{const{current:f,menu:j,...v}=l,m=f.map(V=>{const{component:M,resolve:D,loadData:fe,loading:he,errorBoundary:ce,icon:de,...ue}=V;return ue}),_=[...f].filter(V=>V.component),Y=(V=0)=>{if(!_.length)return null;const M=_.shift(),{component:D,resolve:fe,loadData:he,icon:ce,key:de,...ue}=M;if(typeof D=="function"||G(D)){const Pe=ue.path;let ae=cr[Pe];const{cachedResolve:Q,restResolve:Ce}=zr(fe,v.store,ue),Le={loadPromise:Jt(he,ue),restResolve:Ce,params:{current:m,...v,...ue,...Q}},Ye=Y(V+1);if(ae)return dr(ae,Le,Ye);try{ae=D(),ae=y(ae)?D:ae}catch(Be){ae=D}return G(ae)?ae.then(Be=>{var _e;return ae=(_e=Be.default)!=null?_e:Be,cr[Pe]=ae,dr(ae,Le,Ye)}):(cr[Pe]=ae,dr(ae,Le,Ye))}return typeof D=="string"?u(D):D};return Y()},Tr=l=>{const[f,j]=(0,g.useState)(l),[v,m]=(0,g.useState)(),[_,Y]=(0,g.useState)(),V=(0,g.useRef)(),M=(0,g.useRef)(),D=(0,g.useRef)(),fe=(0,g.useRef)(),he=()=>{typeof V.current=="function"&&(V.current({cancel:Ve.cancelMsg}),V.current=null)},ce=(0,g.useCallback)(Q=>{typeof Q=="function"?j(Ce=>({...Ce,...Q(Ce)})):k(Q)&&j(Ce=>({...Ce,...Q}))},[]),de=(Q,Ce="pushState")=>{const{basepath:Le,browserRouter:Ye}=fe.current,Be=D.current,{path:_e,params:Dt}=qt(Q,Le,Ye,Be);_e!==Be&&ae({inputPath:_e,inputParams:Dt},()=>history[Ce](Q==null?void 0:Q.state,"",_e))},ue=(0,g.useCallback)(Q=>de(Q),[]),Pe=(0,g.useCallback)(Q=>de(Q,"replaceState"),[]),ae=(0,g.useCallback)(({inputPath:Q="",inputParams:Ce={}},Le)=>{const Ye=+new Date,{browserRouter:Be,childKey:_e,idKey:Dt,title:kt,routers:$t,beforeRender:zt,afterRender:At,basepath:jt,allowedNotFound:He,...Ar}=fe.current;if(!Q){const{path:et,params:xt}=Bt(Be);Q=et,Ce={...Ce,...xt}}new Promise((et,xt)=>{$t!=null&&$t.length||xt("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),Q!==D.current&&typeof zt=="function"?zt({path:Q,params:Ce,prevPath:D.current},et,xt):et()}).then(et=>{var xt,fr;if(et===!1)return;const Qt=et==null?void 0:et.path;if(Qt&&Je(jt,Qt,Be)!==Q){Pe(et);return}M.current=(xt=M.current)!=null?xt:Q;const{redirect:Rt,current:Zt,menu:hr}=Z(A($t),Q.split("?")[0],Ce,_e,Dt);if(Rt){if(He&&Rt==="/404"&&(typeof He=="boolean"||typeof He=="string"&&Qe(M.current,He)||c(He)&&He.find(tr=>Qe(M.current,tr))))return;if(c(Rt)){console.error(`\u522B\u95F9\uFF0C[${[Q,...Rt].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}ue({path:Rt,exact:Rt!=="/404"});return}Le==null||Le(),(Q==null?void 0:Q.split("?")[0])!==((fr=D.current)==null?void 0:fr.split("?")[0])&&Ot(),Ut(Zt,kt);const pr={eventBus:lr,store:Mt,useStore:sr,...Ar,updateRouter:ce,router:{push:ue,replace:Pe},current:Zt,menu:hr,inputPath:M.current,prevPath:D.current,basepath:jt,title:kt,history:nt};St.setState({...pr,browserRouter:Be});const er=Fr(pr);if(D.current=Q,M.current=null,he(),G(er)){const{promiseFn:tr,cancelFn:Nr}=F(er,{delay:Ve.delay,msg:{timeout:Ve.timeoutMsg}});return V.current=Nr,Y(!0),tr.then(Ft=>{V.current=null;const{result:Lt,errMsg:mr}=Ft,Sr=mr===!1?Lt:mr!=null&&mr.timeout?ge({error:{errMsg:`${Q} ${mr.timeout}`}}):null;Sr&&(Y(!1),ft(At,Zt.slice(-1)[0],Ye),m(Sr))}).catch(Ft=>{throw V.current=null,Y(!1),ft(At,Zt.slice(-1)[0],Ye),m(ge({error:Ft})),Ft})}ft(At,Zt.slice(-1)[0],Ye),m(er)}).catch(et=>{throw m(ge({error:et})),et})},[]);return(0,g.useEffect)(()=>{const{childKey:Q="children",idKey:Ce="path",browserRouter:Le=!1,routers:Ye=[],basepath:Be="",exact:_e=!1,inputPath:Dt="",inputParams:kt={},...$t}=f,zt=B(Be),At=nr(A(Ye),Le,Q,Ce,zt,_e);fe.current={...$t,childKey:Q,idKey:Ce,browserRouter:Le,routers:At,basepath:zt};const jt=Le?"popstate":"hashchange",He=()=>ae({});return ae({inputPath:Dt,inputParams:kt}),ar.on(ue),lt.on(Pe),window.addEventListener(jt,He,!1),()=>{he(),ar.off(ue),lt.off(Pe),window.removeEventListener(jt,He,!1)}},[f]),{updateRouter:ce,output:v,loading:_}},Wt=l=>{const{to:f,onClick:j,preventDefault:v,stopPropagation:m=!0,exact:_=!0,target:Y,...V}=l,M=()=>{const D=typeof f=="string"?{exact:_,path:f}:{exact:_,...f};ar.emit(D)};return D=>{var fe;if(D.preventDefault(),m&&D.stopPropagation(),!(V!=null&&V.disabled)){if(!v){if(Y){const{browserRouter:he}=St.getState(),ce=typeof f=="string"?f:(fe=f==null?void 0:f.path)!=null?fe:"",de=dt(f==null?void 0:f.query),ue=he||ce.indexOf("#/")>-1||Ne(ce);window==null||window.open(`${ue?"":"#"}${ce}${de}`,Y);return}M()}typeof j=="function"&&j()}}};const kr=(l,f)=>[...new Set([...(f!=null?f:"").trim().split(" "),...(l!=null?l:"").trim().split(" ")])].filter(Boolean).join(" ");var jr=l=>{const{to:f,onClick:j,preventDefault:v,stopPropagation:m,exact:_,target:Y,className:V,...M}=l;return(0,W.jsx)("span",{onClick:Wt(l),className:kr(V,"link"),...M})};const Er=()=>St.getState()}(),re}()})},2445:function(Nt,ye,qe){(function(Ae,Se){Nt.exports=Se(qe(7378))})(this,function(Ae){return function(){"use strict";var Se={53:function(g,a,x){var c,k=x(899),y=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function q(G,F,B){var W,te={},ge=null,ke=null;B!==void 0&&(ge=""+B),F.key!==void 0&&(ge=""+F.key),F.ref!==void 0&&(ke=F.ref);for(W in F)p.call(F,W)&&!A.hasOwnProperty(W)&&(te[W]=F[W]);if(G&&G.defaultProps)for(W in F=G.defaultProps,F)te[W]===void 0&&(te[W]=F[W]);return{$$typeof:y,type:G,key:ge,ref:ke,props:te,_owner:$.current}}c=S,a.jsx=q,c=q},458:function(g,a,x){g.exports=x(53)},899:function(g){g.exports=Ae}},we={};function ee(g){var a=we[g];if(a!==void 0)return a.exports;var x=we[g]={exports:{}};return Se[g](x,x.exports,ee),x.exports}(function(){ee.d=function(g,a){for(var x in a)ee.o(a,x)&&!ee.o(g,x)&&Object.defineProperty(g,x,{enumerable:!0,get:a[x]})}})(),function(){ee.o=function(g,a){return Object.prototype.hasOwnProperty.call(g,a)}}(),function(){ee.r=function(g){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})}}();var re={};return function(){ee.r(re),ee.d(re,{createContainer:function(){return a},useAsync:function(){return $},useCancelablePromise:function(){return p},useClickAway:function(){return G},useDebounce:function(){return B},useDelayState:function(){return ge},useEleResize:function(){return Ge},useEvent:function(){return gt},useFirstMounted:function(){return W},useInterval:function(){return Ke},usePrevious:function(){return at},useRaf:function(){return $e},useScroll:function(){return ie},useSearch:function(){return Ot},useStateFromProps:function(){return Ut},useStore:function(){return Gt},useTime:function(){return lr},useUpdate:function(){return sr},useUpdateEffect:function(){return te},useWinResize:function(){return pt}});var g=ee(899),a=u=>(b,E)=>{const[O,P]=(0,g.useState)(()=>{const oe=u==null?void 0:u.getState(b);return oe!==void 0?oe:(E!==void 0&&(u==null||u.setState({[b]:E},!0)),E)}),K=(0,g.useCallback)(oe=>u==null?void 0:u.setState({[b]:typeof oe=="function"?oe(u==null?void 0:u.getState(b)):oe}),[]),me=(0,g.useCallback)(oe=>u==null?void 0:u.subscribe(b,oe),[]),se=(0,g.useCallback)((oe=oe)=>u==null?void 0:u.clean(oe),[]);return(0,g.useEffect)(()=>{u==null||u.subscribe(b,oe=>P(oe))},[]),[O,K,me,se]},x=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),c=u=>x(u)==="object",k=u=>x(u)==="function",y=u=>x(u)==="promise"||c(u)&&k(u.then),S=(u,b=12e4,E="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!y(u))return{};let O=null,P=null;return{promiseFn:new Promise((K,me)=>{O=(se="canceled")=>{clearTimeout(P),K({canceled:!0,errMsg:se})},b&&(b=typeof b!="number"?12e4:b,P=setTimeout(()=>O(E),b)),u.then(se=>{clearTimeout(P),K({result:se,errMsg:!1})}).catch(se=>{clearTimeout(P),me(se)})}),cancelFn:O}},p=()=>{const u=(0,g.useRef)([]);return(0,g.useEffect)(()=>()=>{u.current.map(b=>b.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,g.useCallback)((b,E=!0)=>{const O=S(b,E);return u.current.indexOf(O)===-1&&u.current.push(O),O.promiseFn},[])}},$=(u={})=>{const{cancelablePromise:b}=p(),[E,O]=(0,g.useState)(u),P=(0,g.useRef)({}),K=(0,g.useRef)({}),me=(0,g.useCallback)((oe=null)=>{Array.isArray(oe)&&oe.length?oe.map(Fe=>P.current[Fe]=u[Fe]):P.current=u},[]),se=(0,g.useCallback)((oe,Fe,st=!1)=>{const Ct=Object.keys(oe),mt=JSON.stringify(Ct.sort());if(!K.current[mt]){K.current[mt]=!0,st&&me(Array.isArray(st)?st:Ct),Ct.map(Me=>{P.current[Me]||(P.current[Me]={}),P.current[Me].pending=!0}),O({...P.current});for(let Me=0,_t=Ct.length;Me<_t;Me++){const It=Ct[Me];b(oe[It]).then(vt=>{let{result:wt,errMsg:it}=vt;Me===_t-1&&(K.current[mt]=!1),typeof Fe=="function"&&(wt=Fe(wt)||wt),P.current[It]={...wt,pending:!1},it===!1&&O({...P.current})}).catch(vt=>{throw Me===_t-1&&(K.current[mt]=!1),P.current[It]={error:vt,pending:!1},O({...P.current}),vt})}}},[]);return[E,se,me]},A=(u,b)=>Object.prototype.hasOwnProperty.call(u!=null?u:{},b),q=u=>A(u,"current"),G=(u,b,E="click")=>{(0,g.useEffect)(()=>{const O=K=>{const me=q(u)?u.current:u;(me==null?void 0:me.contains)&&!me.contains(K.target)&&b(K)},P=typeof E=="string"?[E]:E;return P.map(K=>{document.addEventListener(K,O,!1)}),()=>{P.map(K=>{document.removeEventListener(K,O,!1)})}},[u,b,E])},F=(u=()=>{},b=60)=>{let E=null;return function(...O){clearTimeout(E),E=setTimeout(()=>u.apply(this,O),b)}},B=(u,b=60)=>(0,g.useMemo)(()=>F(u,b),[b]),W=()=>{const u=(0,g.useRef)(!0);return u.current?(u.current=!1,!0):!1},te=(u,b=[])=>{const E=W();(0,g.useEffect)(()=>{if(!E)return u()},b)},ge=(u,b=450)=>{const[E,O]=(0,g.useState)(u);return te(()=>{let P;return u||b===0?O(u):P=setTimeout(()=>O(u),b),()=>P&&clearTimeout(P)},[u]),[E,O]},ke=()=>![typeof window,typeof document].includes("undefined"),rt=u=>x(u).indexOf("element")>-1,ot=(u=null)=>{var b,E;return ke()?rt(u)?{width:u.clientWidth,height:u.clientHeight}:{width:(b=window.innerWidth)!=null?b:document.documentElement.clientWidth,height:(E=window.innerHeight)!=null?E:document.documentElement.clientHeight}:{width:0,height:0}};const Z=(u,b)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const E=document.createElement("object");return E.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),E.setAttribute("class","resize-sensor"),E.onload=()=>{E.contentDocument.defaultView.addEventListener("resize",b,!1),b()},E.type="text/html",u.appendChild(E),E.data="about:blank",E};var Re=(u,b=60)=>{if(!ke())return;u=q(u)?u.current:u!=null?u:document.body;let E,O=[];const P=F(()=>O.map(oe=>oe(u)),b),K=oe=>{E||(E=Z(u,P)),O.indexOf(oe)===-1&&O.push(oe)},me=oe=>{const Fe=O.indexOf(oe);Fe!==-1&&O.splice(Fe,1),O.length===0&&E&&se()},se=()=>{E&&E.parentNode&&(E.contentDocument&&E.contentDocument.defaultView.removeEventListener("resize",P,!1),E.parentNode.removeChild(E),E=void 0,O=[])};return{element:u,bind:K,unbind:me,destroy:se}},$e=(u={})=>{const b=(0,g.useRef)(0),[E,O]=(0,g.useState)(u),P=(0,g.useCallback)(K=>{cancelAnimationFrame(b.current),b.current=requestAnimationFrame(()=>O(K))},[]);return(0,g.useEffect)(()=>()=>cancelAnimationFrame(b.current),[]),[E,P]},Ge=(u=null,b=60)=>{const E=q(u)?u.current:u,{bind:O,destroy:P}=Re(E,b),[K,me]=$e(ot(E));return(0,g.useEffect)(()=>(O(()=>E&&me(ot(E))),()=>P()),[E]),K},gt=u=>{const b=(0,g.useRef)(null);return(0,g.useLayoutEffect)(()=>{b.current=u}),(0,g.useCallback)(b.current,[])},Ke=(u,b)=>{const E=(0,g.useRef)();(0,g.useEffect)(()=>{E.current=u},[u]),(0,g.useEffect)(()=>{if(b){const O=setInterval(()=>E.current(),b);return()=>clearInterval(O)}},[b])},at=u=>{const b=(0,g.useRef)();return(0,g.useEffect)(()=>{b.current=u},[u]),b.current},R=(u=null)=>{var b,E,O,P;return ke()?rt(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:(E=(b=window.pageXOffset)!=null?b:document.documentElement.scrollLeft)!=null?E:document.body.scrollLeft,top:(P=(O=window.pageYOffset)!=null?O:document.documentElement.scrollTop)!=null?P:document.body.scrollTop}:{left:0,top:0}},ie=(u=null)=>{const[b,E]=$e(R(u));return(0,g.useEffect)(()=>{const O=()=>E(R(u)),P=rt(u)?u:window;return P.addEventListener("scroll",O,{capture:!1,passive:!0}),()=>P.removeEventListener("scroll",O)},[u]),b},J=u=>x(u)==="array",je=u=>J(u)&&!!u.length,ze=(u,b,E=[],O=!1,P=null)=>je(u)?b?(E=typeof E=="string"?E.split(","):E,u.filter(K=>(E=E.length>0?E:Object.keys(K),E.filter(me=>{const se=K[me];if(se==null)return!1;if(O)return se===b;const oe=new RegExp(b,"gi"),Fe=se.toString().match(oe);return Fe&&P&&(K[me]=P(se.toString().replace(oe,`<span style="background-color:yellow">${Fe[0]}</span>`),{display:"inline-block"})),Fe}).length))):u:[],ct=(u,b="id")=>{if(!je(u))return u;const E=[],O=[];return u.map(P=>{const K=c(P)?P[b]:P;O.includes(K)||(O.push(K),E.push(P))}),E},Ve=u=>(u==null?void 0:u.$$typeof)&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",nt=u=>u==null?void 0:u.__v_isVNode;const Ne=u=>{if(!J(u)&&!c(u))return u;const b=J(u)?[]:{};for(const E in u)if(A(u,E)){const O=u[E];b[E]=Ve(O)||nt(O)||typeof O!="object"?O:O!==u?Ne(O):"cyclic"}else Object.setPrototypeOf(b,{[E]:u[E]});return b};var Xe=Ne;const Je=u=>(b,E="children")=>{if(!Array.isArray(b))return b;const O=Xe(b),P=K=>{const me=[];return K.map(se=>{if(je(se[E])){const oe=P(se[E])||[];se[E]=oe,oe.length>0&&me.push(se)}}),u(K,me)};return P(O)};var nr=(u,b,E,O="name",P="id",K="children",me=!1)=>Je((se,oe)=>ct([...ze(se,b,O,me,E),...oe],P))(u,K),dt=ee(458),Et=(u,b)=>(0,dt.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...b}),Ot=(u=null,b=Et)=>{const[E,O]=(0,g.useState)(u),P=(0,g.useCallback)((...K)=>{const[me,se,...oe]=K;if(!se)O(null);else{K=[me,se,b,...oe];const Fe=nr(...K);O(Fe)}},[]);return[E,P]},Ut=u=>{const[b,E]=(0,g.useState)(u);return(0,g.useEffect)(()=>E(u),[u]),[b,E]},Bt=()=>{const u={};return{on:(b,E)=>{u[b]||(u[b]=[]),u[b].indexOf(E)===-1&&u[b].push(E)},emit:(b,E)=>{u[b]&&u[b].map(O=>O(E))},off:(b,E=null)=>{if(u[b]){if(typeof E!="function")return u[b]=[];const O=u[b].indexOf(E);O>-1&&u[b].splice(O,1)}}}};const ft=u=>{const b={};for(let E in u)A(u,E)||(b[E]=u[E]);return b};var qt=(u,b)=>{if(!c(u))return b;if(!c(b))return u;const E={...ft(u),...ft(b)},O={...u,...b};return Object.keys(E).map(P=>{Object.setPrototypeOf(O,{[P]:E[P]})}),O},Qe=()=>{const{on:u,emit:b,off:E}=Bt(),O={};return{getState:P=>Xe(O[P]),setState:(P,K=!1)=>{if(typeof P=="function"&&(P=P(Xe(O))),!c(P))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const me=Xe(P);Object.keys(me).map(se=>{const oe=O[se],Fe=me[se],st=c(Fe)&&c(oe)?qt(oe,Fe):Fe;!K&&b(se,st),O[se]=st})},subscribe:(P,K)=>(u(P,K),()=>E(P,K)),unsubscribe:E,clean:P=>{typeof P=="string"?O[P]=void 0:Array.isArray(P)?P.map(K=>O[K]=void 0):Object.keys(O).map(K=>O[K]=void 0)}}};const ir=Qe();var Gt=a(ir);const ht=u=>u<10?"0"+u:u;var Pt=(u=new Date)=>{const b=new Date(u),E=b.getFullYear(),O=b.getDay(),P=ht(b.getMonth()+1),K=ht(b.getDate()),me=ht(b.getHours()),se=ht(b.getMinutes()),oe=ht(b.getSeconds());return[E,P,K,me,se,oe,O]};const bt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],ar=(u,b,E="-")=>u.replace(new RegExp(E,"g"),b);var lt=(u=new Date,b=["-","-"," ",":",":",""],E=bt)=>{const O=Pt(u);let P="";return b.map((K,me)=>{var se;return P+=(me===6?E[O[me]]:(se=O[me])!=null?se:"")+K}),P};const St=()=>lt(new Date,["-","-"," ",":",":"," ",""]);var lr=()=>{const[u,b]=(0,g.useState)("");return Ke(()=>{b(St())},1e3),[u]};const Mt=u=>++u;var sr=()=>{const[,u]=(0,g.useState)(0);return(0,g.useCallback)(()=>u(Mt),[])},pt=()=>{const[u,b]=$e(ot());return(0,g.useEffect)(()=>{const E=()=>b(ot());return window.addEventListener("resize",E,!1),()=>window.removeEventListener("resize",E,!1)},[]),u}}(),re}()})},5820:function(Nt){(function(ye,qe){Nt.exports=qe()})(this,function(){return function(){"use strict";var ye={};(function(){ye.d=function(e,t){for(var r in t)ye.o(t,r)&&!ye.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){ye.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){ye.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();var qe={};ye.r(qe),ye.d(qe,{a2o:function(){return Ae},addAtNext:function(){return re},addAtPos:function(){return g},addClass:function(){return x},addDays:function(){return c},addHours:function(){return k},addMonths:function(){return y},addNodes:function(){return S},addScript:function(){return $},addStyle:function(){return A},addYears:function(){return q},arr2Tree:function(){return ke},arr2TreeById:function(){return rt},arr2TreeByPath:function(){return ot},arr2obj:function(){return G},arr2str:function(){return ge},backTop:function(){return ie},base2Ten:function(){return J},baseConversion:function(){return ze},baseFetch:function(){return dt},cacheData:function(){return ir},cancelablePromise:function(){return Xe},changePos:function(){return Gt},classifyArr:function(){return ht},clone:function(){return Qe},compareVersion:function(){return Pt},compose:function(){return bt},copyToClipboard:function(){return ar},createContainer:function(){return lt},createElement:function(){return lr},createNode:function(){return O},createStore:function(){return se},createTextElement:function(){return St},curry:function(){return oe},cyclic:function(){return Et},dash2camel:function(){return Fe},debounce:function(){return st},deleteNodes:function(){return Ct},deviceType:function(){return mt},dlfile:function(){return It},dropInfo:function(){return wr},editNodes:function(){return ur},emitter:function(){return P},equal:function(){return Ut},escapeHTML:function(){return cr},eventBus:function(){return Jt},fetcher:function(){return Tr},filter:function(){return kr},filterList:function(){return l},findMax:function(){return f},firstUpper:function(){return j},fixFileSizeUnit:function(){return v},fixPath:function(){return m},fixRoute:function(){return _},fixSize:function(){return Y},fixTimeUnit:function(){return V},flatten:function(){return D},formatNum:function(){return fe},formatPassTime:function(){return de},formatTime:function(){return ae},fullScreen:function(){return _e},getElementsSize:function(){return yr},getExplore:function(){return kt},getLeaveTime:function(){return jt},getMeta:function(){return et},getMonthDays:function(){return xt},getOffset:function(){return fr},getOsInfo:function(){return Rt},getParams:function(){return Zt},getPosition:function(){return wt},getRelative:function(){return er},getSelected:function(){return tr},getTextSize:function(){return Nr},getTime:function(){return ce},getTouchPosition:function(){return pr},getType:function(){return Se},getValue:function(){return mr},getViewportSize:function(){return vt},hasClass:function(){return Sr},hasProp:function(){return Re},hex2rgba:function(){return _r},imgtocanvas:function(){return Wr},isArray:function(){return we},isAsync:function(){return Ne},isBrowser:function(){return p},isDate:function(){return Zr},isElement:function(){return a},isError:function(){return Yr},isFunction:function(){return nt},isIE:function(){return Vr},isObject:function(){return F},isReactComp:function(){return Hr},isReactEle:function(){return Bt},isRef:function(){return $e},isRegExp:function(){return Ur},isTouch:function(){return hr},isUrl:function(){return qr},isValidArr:function(){return Wt},isValidObj:function(){return Gr},isVueEle:function(){return ft},json2str:function(){return Cr},loadBase64:function(){return rr},loadImage:function(){return Jr},loop:function(){return Qr},matchedStr:function(){return Xr},memoize:function(){return Kr},merge:function(){return C},mergeArr:function(){return i},mergeClass:function(){return T},mergeObj:function(){return h},mergeOwnProp:function(){return me},message:function(){return xe},monthDate:function(){return pe},moveNodes:function(){return Ie},obj2arr:function(){return De},obj2str:function(){return W},omit:function(){return be},once:function(){return Ue},padStart:function(){return Te},params2data:function(){return Ve},params2str:function(){return ct},pick:function(){return Oe},promisify:function(){return ut},randColor:function(){return Yt},randItem:function(){return Or},randNum:function(){return or},randPercent:function(){return Vt},randStr:function(){return Pr},randTrue:function(){return Ir},removeClass:function(){return N},resize:function(){return yt},rgba2hex:function(){return Dr},rmUnit:function(){return oo},scheduler:function(){return ao},scrollIsBottom:function(){return lo},scrollTo:function(){return Ge},scrollToAnchor:function(){return so},scrollTop:function(){return Z},selectedHandle:function(){return ee},session:function(){return uo},setMeta:function(){return co},setStyle:function(){return Ze},sleep:function(){return Xt},sleepSync:function(){return $r},sort:function(){return fo},sortObj:function(){return ho},storage:function(){return po},store:function(){return xo},str2Html:function(){return it},str2code:function(){return yo},sysLang:function(){return go},template:function(){return bo},ten2Base:function(){return je},throttle:function(){return vo},timeGap:function(){return Eo},timeInterval:function(){return to},timestamp:function(){return Me},toggleClass:function(){return So},traverItem:function(){return M},traverList:function(){return Co},unescapeHTML:function(){return $o},unique:function(){return jr},updateId:function(){return zo},updateNode:function(){return E},updateTreeNodes:function(){return Fo},uuidv4:function(){return _t},validObj:function(){return To},watchScreen:function(){return No},watermark:function(){return Oo},weekDate:function(){return Po},wrapPromise:function(){return Io}});var Ae=(e,t="key",r="value")=>{const o={};return(e||[]).map(n=>o[n[t]]=n[r]),o},Se=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),we=e=>Se(e)==="array",ee=e=>(t,r,o="id",n="children")=>{if(!we(t))return null;const d=(w,z="")=>{for(let I=0,U=w.length;I<U;I++){const ve=w[I];if(ve[o]===r)return e(w,I,z)||w[I];if(we(ve[n])){const Ee=d(ve[n],ve[o]);if(Ee)return Ee}}};return d(t),t},re=(e,t,r,o="id",n="children")=>ee((d,w)=>d.splice(w,0,r))(e,t,o,n),g=(e,t,r,o,n="id",d="children")=>ee((w,z)=>{const I=w[z];I.children?I.children.splice(o,0,r):I.children=[r]})(e,t,n,d),a=e=>Se(e).indexOf("element")>-1,x=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),n=[...new Set([...r,...o])];e.className=n.join(" ")},c=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},k=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},y=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},S=(e,t,r,o="id",n="children")=>ee((d,w)=>{const z=d[w];return z[n]=[...z[n]||[],...r],z})(e,t,o,n),p=()=>![typeof window,typeof document].includes("undefined"),$=e=>{if(p())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},A=(e,t)=>{if(p())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===t))r();else{const n=document.createElement("style");n.onerror=d=>o(new Error(`Failed to load '${t}' style`)),n.onload=r,n.innerHTML=e,n.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===e))r();else{const n=document.createElement("link");n.onerror=d=>o(new Error(`Failed to load '${e}'`)),n.onload=r,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},q=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},G=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:n})=>r[o]=n),r},F=e=>Se(e)==="object";const B=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,F(o)?t+=`${r}=${B(o)}`:Array.isArray(o)?t+=`${r}=${ge(o)}`:t+=`${r}=${o}`}),`{${t}}`};var W=B;const te=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,F(r)?t+=W(r):Array.isArray(r)?t+=te(r):t+=`${r}`}),`[${t}]`};var ge=te,ke=e=>(t,r="id",o="children",n=-1)=>{if(!we(t))return t;const d={},w=t.map(z=>z[r]);return[...t].map(z=>{var I;const U={...z},{[r]:ve}=U;if(ve!=null){let{parentId:Ee}=U;Ee==null&&(Ee=(I=e==null?void 0:e(U))!=null?I:n,U.parentId=Ee),d[ve]||(d[ve]=[]),U[o]=d[ve],d[Ee]||(d[Ee]=[]),d[n]||(d[n]=[]),w.includes(Ee)?d[Ee].push(U):d[n].push(U)}}),d[n]},rt=(e,t="id",r="children",o=-1)=>ke(n=>{const d=n[t].match(/\S+(?=-\S+)/);return(d==null?void 0:d[0])||o})(e,t,r,o),ot=(e,t="path",r="children",o=null)=>ke(n=>{var d,w,z,I;const U=n[t],ve=U.match(/.*\/[^:/]+\/:[^/]+/);return ve?(w=(d=ve[0].match(/(.*)\/:+/))==null?void 0:d[1])!=null?w:o:(I=(z=U.match(/(.*)\/+/))==null?void 0:z[1])!=null?I:o})(e,t,r,o),Z=()=>{var e,t;return p()&&((t=(e=window.pageYOffset)!=null?e:document.documentElement.scrollTop)!=null?t:document.body.scrollTop)},Re=(e,t)=>Object.prototype.hasOwnProperty.call(e!=null?e:{},t),$e=e=>Re(e,"current"),Ge=(e=0,t)=>{var r;!p()||(t=$e(t)?t.current:t!=null?t:window,(r=t.scrollTo)==null||r.call(t,{top:e,behavior:"smooth"}))},gt=`.huxy-totop-bar {
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
}`;const Ke=()=>document.getElementsByClassName("huxy-totop-bar")[0],at=e=>{if(Ke())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>Ge(),!1),t},R=()=>{const e=Ke();e&&document.body.removeChild(e)};var ie=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!p())return;A(gt,"huxy-backtop-css");const r=()=>{Z()>e?at(t):R()};return(()=>(document.addEventListener("scroll",r,!1),()=>{R(),document.removeEventListener("scroll",r,!1)}))()},J=(e=0,t=2)=>parseInt(String(e),t),je=(e=0,t=2)=>Number(e).toString(t),ze=(e=0,t=2,r=16)=>je(J(e,t),r),ct=e=>{if(!F(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const n=o>0?"&":"?";t.push(`${n}${r}=${e[r]}`)}),t.join("")},Ve=e=>{if(!F(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},nt=e=>Se(e)==="function",Ne=e=>Se(e)==="promise"||F(e)&&nt(e.then),Xe=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Ne(e))return{};let o=null,n=null;return{promiseFn:new Promise((d,w)=>{o=(z="canceled")=>{clearTimeout(n),d({canceled:!0,errMsg:z})},t&&(t=typeof t!="number"?12e4:t,n=setTimeout(()=>o(r),t)),e.then(z=>{clearTimeout(n),d({result:z,errMsg:!1})}).catch(z=>{clearTimeout(n),w(z)})}),cancelFn:o}};const Je=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>Ve(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>ct(e).slice(1)}],nr=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(n=>e[n]);if(o.length===1){const n=o[0],d=r?t:n;return d==="params"?{query:e[n]}:{result:e[n],type:d}}else if(o.length>1){const n=o.filter(w=>w!=="params").slice(-1)[0],d=r?t:n;return d==="params"?{query:e.params||e[n]}:{query:e.params,result:e[n],type:d}}};var dt=(e,t)=>r=>(o,n={})=>{const{headers:d,dataType:w,data:z,formData:I,form:U,params:ve,...Ee}=n,We={data:z,formData:I,form:U,params:ve};let xr;const{query:Ht,result:ro,type:Do}=nr(We,w)||{};if(!Ee.body&&ro){const Lr=Je.find(Br=>Br.type===Do);xr=Lr.headers,Ee.body=Lr.body(ro)}Ht&&(o=`${o}${ct(Ht)}`);const{promiseFn:Ao}=Xe(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...xr,...d},...Ee}),t);return Ao.then(({result:Lr,errMsg:Br})=>e(Br?{status:408,statusText:Br}:Lr))},Et=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let n=!1;for(let d in o)Re(o,d)&&r(o[d])&&(o[d]="cyclic",n=!0);return n}return!1};return r(e)&&e};const Ot=(e,t)=>{const r=Se(e),o=Se(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(Et(e)&&Et(t))return Ot(e,t);for(let n in t)if(Re(e,n)!==Re(t,n)||!Ot(e[n],t[n]))return!1;return!0};var Ut=Ot,Bt=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",ft=e=>e==null?void 0:e.__v_isVNode;const qt=e=>{if(!we(e)&&!F(e))return e;const t=we(e)?[]:{};for(const r in e)if(Re(e,r)){const o=e[r];t[r]=Bt(o)||ft(o)||typeof o!="object"?o:o!==e?qt(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var Qe=qt,ir=(e=100)=>{const t=[];let r=-1;const o=d=>{var w,z;const I=t.length,U=Qe(d);return Ut(U,(w=t[I-1])==null?void 0:w.data)?{index:r,length:I,data:(z=t[r])==null?void 0:z.data}:(t.push({data:U}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},n=(d=0)=>{var w;const z=t.length;return r+=d,r=r<0?0:r>z-1?z-1:r,{index:r,length:z,data:Qe((w=t[r])==null?void 0:w.data)}};return{record:o,cursor:n,jump:d=>{var w;return r=d,{index:r,length:t.length,data:Qe((w=t[r])==null?void 0:w.data)}},undo:()=>n(-1),redo:()=>n(1),getList:()=>Qe(t),clean:()=>{t.length=0,r=-1}}},Gt=(e,t,r)=>{if(!we(e))return e;const o=e[t],n=e[r];return e.splice(t,1,n),e.splice(r,1,o),e},ht=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},Pt=(e,t,r=".")=>{const o=(I,U)=>I.split(U),n=o(e,r),d=o(t,r),w=n.length;let z=0;for(let I=0;I<w;I++)if(n[I]<d[I]){z=w-I;break}return z},bt=(...e)=>(...t)=>{const[...r]=e,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...t)},ar=e=>{if(!p())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},lt=e=>(t,r)=>{const{getState:o,setState:n,subscribe:d,unsubscribe:w,clean:z}=e;return r!==void 0&&n({[t]:r},!0),{getState:()=>o(t),setState:(I,U)=>n({[t]:I},U),subscribe:I=>d(t,I),unsubscribe:()=>w(t),clean:()=>z(t)}},St=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),lr=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:St(o))}});const Mt=e=>e.startsWith("on"),sr=e=>e!=="children"&&!Mt(e),pt=(e,t)=>r=>e[r]!==t[r],u=(e,t)=>r=>!(r in t),b=e=>{const t=Object.keys(e);return{eventProps:t.filter(Mt),propertyProps:t.filter(sr)}};var E=(e,t,r)=>{const{eventProps:o,propertyProps:n}=b(t),{eventProps:d,propertyProps:w}=b(r);o.filter(u(t,r)).map(z=>{const I=z.toLowerCase().slice(2);e.removeEventListener(I,t[z])}),n.filter(u(t,r)).map(z=>e[z]=""),w.filter(pt(t,r)).map(z=>e[z]=r[z]),d.filter(pt(t,r)).map(z=>{const I=z.toLowerCase().slice(2);e.addEventListener(I,r[z])})},O=e=>{if(!p())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return E(t,{},e.props),t},P=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return e[t]=[];const o=e[t].indexOf(r);o>-1&&e[t].splice(o,1)}}}};const K=e=>{const t={};for(let r in e)Re(e,r)||(t[r]=e[r]);return t};var me=(e,t)=>{if(!F(e))return t;if(!F(t))return e;const r={...K(e),...K(t)},o={...e,...t};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},se=()=>{const{on:e,emit:t,off:r}=P(),o={};return{getState:n=>Qe(o[n]),setState:(n,d=!1)=>{if(typeof n=="function"&&(n=n(Qe(o))),!F(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const w=Qe(n);Object.keys(w).map(z=>{const I=o[z],U=w[z],ve=F(U)&&F(I)?me(I,U):U;!d&&t(z,ve),o[z]=ve})},subscribe:(n,d)=>(e(n,d),()=>r(n,d)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(d=>o[d]=void 0):Object.keys(o).map(d=>o[d]=void 0)}}},oe=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...n)=>r(...o,...n);return r},Fe=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),st=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},Ct=(e,t,r="id",o="children")=>ee((n,d)=>n.splice(d,1))(e,t,r,o),mt=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Me=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),_t=()=>{let e=Me();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},It=(e,t)=>{if(p())if(t=t||_t(),typeof e=="string")fetch(e).then(r=>r.blob()).then(r=>{const o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)});else{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)}},vt=(e=null)=>{var t,r;return p()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(r=window.innerHeight)!=null?r:document.documentElement.clientHeight}:{width:0,height:0}},wt=e=>{var t;if(p())return e=$e(e)?e.current:e!=null?e:document.body,(t=e.getBoundingClientRect)==null?void 0:t.call(e)},it=e=>{if(!p())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},Ze=(e,t={},r=!1)=>{!a(e)||Object.keys(t).map(o=>{e.style.setProperty(o,r?"":t[o])})};const Mr=(e=350)=>new Promise(t=>setTimeout(t,e)),$r=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var Xt=Mr,yr=async(e,t=15)=>{if(!p())return;if(typeof e=="string"&&(e=it(e)),e=$e(e)?e.current:e,!a(e))return{};const r=e.cloneNode(!0);Ze(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await Xt(t);const o=wt(r);return e.parentNode.removeChild(r),o};const gr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Kt=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,br=(e,t)=>{var r;t=`huxy-drop-arrow-${t}`;const o=(r=e.getAttribute("class"))!=null?r:"";gr.test(o)?e.setAttribute("class",o.replace(Kt,t)):e.setAttribute("class",`${o} ${t}`)},vr=async(e,t,r)=>{const{left:o,right:n,top:d,bottom:w}=wt(e),{width:z,height:I}=vt(),{width:U,height:ve}=await yr(t);if(n<0||w<0||o>z||d>I)return{};if(r==="vertical"){const Ee={left:o+"px",top:w+10+"px",right:"auto",bottom:"auto"};let We="lt";o+U>z&&(Ee.left=n-U+"px",We="rt"),w+10+ve>I&&(Ee.top=d-10-ve+"px",We=We==="lt"?"lb":"rb"),Ze(t,Ee),br(t,We)}else{const Ee={left:n+10+"px",top:d+"px",right:"auto",bottom:"auto"};let We="tl";n+10+U>z&&(Ee.left=o-10-U+"px",We="tr"),d+ve>I&&(Ee.top=w-ve+"px",We=We==="tl"?"bl":"br"),Ze(t,Ee),br(t,We)}};var wr=(e,t,r="horizontal")=>{const o=st(vr),n=()=>o(e,t,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const d=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),Ze(t,{left:"",top:"",right:"",bottom:""})};return vr(e,t,r),d},ur=(e,t,r,o="id",n="children")=>ee((d,w)=>d[w]={...d[w],...r})(e,t,o,n),cr=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const zr=P();var Jt=e=>{const{on:t,emit:r,off:o}=zr;return{on:n=>t(e,n),emit:n=>r(e,n),off:n=>o(e,n)}};const dr=120*1e3,Fr=e=>e.json().then(t=>t);var Tr=(e=Fr,t=dr)=>(r="get")=>dt(e)((r||"get").toUpperCase()),Wt=e=>we(e)&&!!e.length,kr=(e,t,r=[],o=!1,n=null)=>Wt(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(d=>(r=r.length>0?r:Object.keys(d),r.filter(w=>{const z=d[w];if(z==null)return!1;if(o)return z===t;const I=new RegExp(t,"gi"),U=z.toString().match(I);return U&&n&&(d[w]=n(z.toString().replace(I,`<span style="background-color:yellow">${U[0]}</span>`),{display:"inline-block"})),U}).length))):e:[],jr=(e,t="id")=>{if(!Wt(e))return e;const r=[],o=[];return e.map(n=>{const d=F(n)?n[t]:n;o.includes(d)||(o.push(d),r.push(n))}),r};const Er=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=Qe(t),n=d=>{const w=[];return d.map(z=>{if(Wt(z[r])){const I=n(z[r])||[];z[r]=I,I.length>0&&w.push(z)}}),e(d,w)};return n(o)};var l=(e,t,r,o="name",n="id",d="children",w=!1)=>Er((z,I)=>jr([...kr(z,t,o,w,r),...I],n))(e,d),f=(e="")=>{var t;return(t=e.match(/\d+/g))==null?void 0:t.sort((r,o)=>o-r)[0]},j=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),v=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},m=(e="")=>e.replaceAll("//","/"),_=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",Y=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},V=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),n=e%3600,d=~~(n/60);return o<24?`${o}${t[2]}${d}${t[1]}${n%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},M=e=>(t,r="children")=>{if(!we(t))return t;const o=(n,d=[])=>{n.map((w,z)=>{const I=we(w[r]);if(w=e(w,d,z,I)||w,I){const{[r]:U,...ve}=w;o(U,[...d,{...ve,"@@index":z}])}})};return o(t),t},D=(e,t="children")=>{const r=[];return M(o=>{const{[t]:n,...d}=o;r.push(d)})(e,t),r},fe=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const he=e=>e<10?"0"+e:e;var ce=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),n=he(t.getMonth()+1),d=he(t.getDate()),w=he(t.getHours()),z=he(t.getMinutes()),I=he(t.getSeconds());return[r,n,d,w,z,I,o]},de=(e,t=new Date)=>{e=ce(e),t=ce(t);const r=t.y-e.y,o=t.m-e.m,n=t.d-e.d,d=t.h-e.h,w=t.M-e.M,z=new Date(t.y,t.m,0).getDate(),I=(U,ve,Ee,We,xr)=>{const Ht="\u524D";return ve<0&&(U-=1,ve+=Ee),U===0?ve+xr+Ht:ve===0?U+We+Ht:U+We+ve+xr+Ht};return r>0?I(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?I(o,n,z,"\u4E2A\u6708","\u5929"):n>0?I(n,d,24,"\u5929","\u5C0F\u65F6"):d>0?I(d,w,60,"\u5C0F\u65F6","\u5206\u949F"):w>0?w+"\u5206\u949F\u524D":"\u521A\u521A"};const ue=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Pe=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var ae=(e=new Date,t=["-","-"," ",":",":",""],r=ue)=>{const o=ce(e);let n="";return t.map((d,w)=>{var z;return n+=(w===6?r[o[w]]:(z=o[w])!=null?z:"")+d}),n};const Q=["","webkit","moz","ms"],Ce=e=>Q.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),Le=e=>Q.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),Ye=e=>Q.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),Be=Q.map(e=>`${e}fullscreenchange`);var _e=e=>{var t,r;if(!p())return;e=$e(e)?e.current:e!=null?e:document.body;const o=Ce(document),n=Le(e),d=Ye(document);document[o]?(r=document[d])==null||r.call(document):(t=e[n])==null||t.call(e)};const Dt=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var kt=()=>{var e;if(!p())return;const t=window.navigator.userAgent.toLowerCase(),r=(e=Dt.find(o=>t.match(o.reg)))!=null?e:{};return{type:r.name,version:t.match(r.reg)[1]}};const $t=60*1e3,zt=60*$t,At=24*zt;var jt=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/At);r-=At*o;const n=~~(r/zt);r-=zt*n;const d=~~(r/$t);r-=$t*d;const w=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${d}\u5206${w}\u79D2`};const He=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],Ar=e=>{if(!Array.isArray(e))return He;const t=[...He];return e.map(r=>{const o=t.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var et=e=>{const t=Ar(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return it(t.join(""))},xt=(e=new Date)=>{const t=ce(e);return new Date(t[0],t[1],0).getDate()},fr=(e=null)=>{var t,r,o,n;return p()?a(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:(r=(t=window.pageXOffset)!=null?t:document.documentElement.scrollLeft)!=null?r:document.body.scrollLeft,top:(n=(o=window.pageYOffset)!=null?o:document.documentElement.scrollTop)!=null?n:document.body.scrollTop}:{left:0,top:0}};const Qt=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>{var t;return{type:"ios",model:e[1],version:(t=e[3])==null?void 0:t.replaceAll("_",".")}}},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var Rt=()=>{if(!p())return;const e=window.navigator.userAgent.toLowerCase(),t=Qt.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},Zt=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(n=>{const[d,w]=n.split("=");o[d]=w}),{path:t,params:o}}return{path:t}},hr=()=>p()&&(window.ontouchstart||navigator.maxTouchPoints),pr=e=>{var t,r,o,n;const{left:d,top:w}=fr();return{touchX:hr()?(r=(t=e==null?void 0:e.touches)==null?void 0:t[0])==null?void 0:r.pageX:(e==null?void 0:e.pageX)||(e==null?void 0:e.clientX)+d,touchY:hr()?(n=(o=e==null?void 0:e.touches)==null?void 0:o[0])==null?void 0:n.pageY:(e==null?void 0:e.pageY)||(e==null?void 0:e.clientY)+w}},er=(e,t)=>{var r,o;const{touchX:n,touchY:d}=pr(e),{x:w,y:z}=(o=(r=t==null?void 0:t.getBoundingClientRect)==null?void 0:r.call(t))!=null?o:{};return{x:n-(w!=null?w:0),y:d-(z!=null?z:0)}},tr=(e,t,r="id",o="children")=>{if(!we(e))return null;const n=d=>{for(let w=0,z=d.length;w<z;w++){const I=d[w];if(I[r]===t)return[I];if(we(I[o])){const U=n(I[o]);if(U)return[I].concat(U)}}};return n(e)},Nr=(e,t={},r)=>{if(!p())return;r=$e(r)?r.current:r!=null?r:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&Ze(o,t),o.innerText=e,r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const Ft=(e={},t)=>{t=Lt(t);const r=(o,n)=>{if(!(n!=null&&n[0]))return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(e,t)},Lt=(e="")=>{var t;return(t=e.replace(/\[['"]?(.*?)['"]?\]/g,".$1"))==null?void 0:t.split(".")};var mr=Ft,Sr=(e,t="")=>a(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),_r=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,n=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${n})`;const d=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${d})`},Wr=e=>{if(!p())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:n}=e;return t.width=o,t.height=n,r.drawImage(e,0,0,o,n),t},Zr=(...e)=>!Number.isNaN(new Date(...e).valueOf()),Yr=e=>Se(e)==="error",Vr=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),Hr=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",Ur=e=>Se(e)==="regexp",qr=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),Gr=e=>F(e)&&Object.keys(e).length,Cr=e=>F(e)?W(e):Array.isArray(e)?ge(e):e,rr=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",n=>r(n))}),Jr=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",n=>r(n)))}),Qr=async(e,t,r=2e3)=>{for(;!(t!=null&&t(e==null?void 0:e()));)await Xt(r)},Xr=(e,t=["{","}"])=>{var r,o;return(o=(r=e==null?void 0:e.trim)==null?void 0:r.call(e).match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`)))==null?void 0:o[1]},Kr=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),d=r.find(w=>w.key===n);if(!d){const w=e(...o);return r.push({key:n,result:w}),r.length>t&&r.shift(),w}return d.result}};const Rr=(e,t,r="id")=>{if(!we(e))return t;if(!we(t))return e;const o={};return[...e,...t].map(n=>{var d;const w=F(n)?(d=n[r])!=null?d:JSON.stringify(n):n;if(o[w]===void 0)o[w]=n;else{const z=o[w];F(z)&&F(n)?o[w]=h(z,n):we(z)&&we(n)?o[w]=Rr(z,n):o[w]=n}}),Object.keys(o).map(n=>o[n])};var i=Rr;const s=(e,t)=>{if(!F(e))return t;if(!F(t))return e;for(let r in t)Re(t,r)?F(e[r])&&F(t[r])?e[r]=s(e[r],t[r]):we(e[r])&&we(t[r])?e[r]=i(e[r],t[r]):e[r]=t[r]:Object.setPrototypeOf(e,{[r]:t[r]});return e};var h=s,C=(e,...t)=>{const r=we(e)?i:h;return t.map(o=>e=r(e,o)),e},T=(e,t)=>{var r,o;const n=(r=e==null?void 0:e.split(" "))!=null?r:[],d=(o=t==null?void 0:t.split(" "))!=null?o:[];return[...new Set([...n,...d])].filter(Boolean).join(" ")},N=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(n=>!r.includes(n));e.className=o.join(" ")},L=`@keyframes huxy-message-animate-in {
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
}`;const X=()=>document.getElementsByClassName("huxy-message")[0],H=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},ne=(e,t)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${t}`);const o=document.createElement("span");o.innerText=e;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},le=(e,t=3250,r,o)=>{if(!p())return;A(L,"huxy-message-css");let n=X();n||(n=H());const d=ne(e,o);n.appendChild(d),setTimeout(()=>{n.removeChild(d),r==null||r()},t),setTimeout(()=>{N(d,"open")},t-250)};var xe={success:(e,t,r)=>le(e,t,r,"success"),warn:(e,t,r)=>le(e,t,r,"warn"),warning:(e,t,r)=>le(e,t,r,"warn"),error:(e,t,r)=>le(e,t,r,"error"),info:(e,t,r)=>le(e,t,r,"info")},pe=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[c(1-r),c(xt(t)-r)]},Ie=(e,t,r,o,n="id",d="children")=>{let w={};return ee((z,I)=>(w=z[I],z.splice(I,1),!0))(e,t,n,d),g(e,r,w,o,n,d),e},De=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),be=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(n=>t.includes(n)?o.push({key:n,value:e[n]}):r[n]=e[n]),{newObj:r,newQuery:o}},Ue=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},Te=(e="",t=0,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`},Oe=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!we(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},ut=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(n,d)=>n?o(n):r(d))),Yt=()=>"#"+Te((~~(Math.random()*(1<<24))).toString(16),6),or=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),Or=(e=[])=>e[or(e.length-1)],Vt=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,n)=>{n===e-1?r[n]=t:(r[n]=or(1,t-1),t-=r[n])}),r},Pr=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),Ir=()=>Math.random()>.5;const Tt=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var yt=(e,t=60)=>{if(!p())return;e=$e(e)?e.current:e!=null?e:document.body;let r,o=[];const n=st(()=>o.map(I=>I(e)),t),d=I=>{r||(r=Tt(e,n)),o.indexOf(I)===-1&&o.push(I)},w=I=>{const U=o.indexOf(I);U!==-1&&o.splice(U,1),o.length===0&&r&&z()},z=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:d,unbind:w,destroy:z}};const tt=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const n=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var Dr=(e=0,t=0,r=0,o=1)=>{var n;if(e.includes("rgb")){const d=e.match(/rgba?\((.+)\)/);if(d){const w=(n=d[1])==null?void 0:n.split(",").map(z=>z.trim());return tt(...w)}return e}return tt(e,t,r,o)},oo=(e,t="px")=>`${e}`.replace(t,"")-0;const eo=()=>typeof(performance==null?void 0:performance.now)=="function"?performance.now():new Date().getTime(),no=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},io=()=>{const e=[],t=w=>{e.push(w),d(w)},r=()=>e[0],o=()=>e.shift(),n=w=>w.startTime=eo(),d=w=>{n(w),e.sort((z,I)=>z.startTime-I.startTime)};return{hub:e,push:t,peek:r,shift:o,update:d}};var ao=(e=5)=>{const{hub:t,push:r,peek:o,shift:n,update:d}=io(),w=no(()=>{I()&&w()}),z=U=>eo()-U.startTime>e,I=()=>{let U=o();for(;U;){if(z(U)){d(U);break}const{task:ve}=U;typeof ve=="function"?(U.task=null,ve()):n(),U=o()}return U};return(U=()=>{})=>{r({task:U}),t.length<2&&w()}},lo=()=>p()&&document.documentElement.scrollHeight-Z()===vt().height,so=e=>{var t;!p()||(e=$e(e)?e.current:e!=null?e:window,(t=e.scrollIntoView)==null||t.call(e,{behavior:"smooth",block:"center"}))},uo={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch(r){t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},co=e=>{const t=et(e);p()&&document.head.appendChild(...t)},fo=(e,t=null,r=!1)=>[...e||[]].sort((o,n)=>{const d=t?o[t]:o,w=t?n[t]:n;return!isNaN(Number(d))&&!isNaN(Number(d))?r?w-d:d-w:typeof d=="string"&&typeof w=="string"?r?w.localeCompare(d):d.localeCompare(w):typeof d=="string"&&typeof w=="number"?r?-1:1:typeof d=="number"||typeof d=="string"?r?1:-1:r?-1:1}),ho=e=>{if(!F(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},po={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const mo=se();var xo=lt(mo),yo=(e,t=!1)=>(e=t?e:`return ${e};`,Function(e)()),go=()=>p()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),bo=(e,...t)=>{const r=[];return e.map((o,n)=>{var d;r.push(o,(d=t[n])!=null?d:"")}),r.join("")},vo=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const wo=e=>[12,xt(e),24,60,60],ko=(e=[],t=[],r=[])=>{let o=!1;const n=[];return t.map((d,w)=>{const z=(o?d-1:d)-e[w];z<0?(n[w]=z+(r[w]||10),o=!0):(n[w]=z,o=!1)}),n.reverse()};var to=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=wo(t).reverse(),o=ce(e).slice(0,-1).reverse(),n=ce(t).slice(0,-1).reverse();return ko(o,n,r)};const jo=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Eo=(e,t=new Date)=>{const r=to(e,t),o=r.findIndex(n=>n>0);return r.map((n,d)=>`${n||0}${jo[d]}`).slice(o).join("")},So=(e,t)=>{!a(e)||(Sr(e,t)?N(e,t):x(e,t))},Co=e=>(t,r="children")=>{if(!we(t))return t;const o=n=>(n.map(d=>{we(d[r])&&(d[r]=o(d[r]))}),e(n));return o(t)},$o=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),zo=(e,t="fuckId",r="children")=>M((o,n,d)=>{o[t]=[...n.map(w=>w["@@index"]),d].join("-")})(e,r),Fo=(e,t,r,o="children")=>ee((n,d)=>{const w=n[d];return w[o]=[...w[o]||[],...r],!0})(e,t),To=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},No=e=>p()?(Be.map(t=>document.addEventListener(t,e,!1)),()=>Be.map(t=>document.removeEventListener(t,e,!1))):void 0,Oo=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:d="20px microsoft yahei",fillStyle:w="rgba(202,202,202,0.4)",content:z="\u8BF7\u52FF\u5916\u4F20",rotate:I="-30",zIndex:U=1e3}={})=>{if(!p())return;e=$e(e)?e.current:e!=null?e:document.body;const ve=e.firstChild;(ve==null?void 0:ve.className)==="watermark-canvas"&&e.removeChild(ve);const Ee=document.createElement("canvas");Ee.setAttribute("width",t),Ee.setAttribute("height",r);const We=Ee.getContext("2d");We.textAlign=o,We.textBaseline=n,We.font=d,We.fillStyle=w,We.rotate(Math.PI/180*I),We.fillText(z,parseFloat(t)/2,parseFloat(r)/2);const xr=Ee.toDataURL(),Ht=document.createElement("div");Ht.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${U};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${xr}')`),e.style.position="relative",e.insertBefore(Ht,e.firstChild)},Po=(e=new Date)=>{const t=new Date(e).getDay();return[c(1-t),c(7-t)]},Io=e=>{if(!Ne(e))return{};let t="pending",r;const o=e.then(n=>{t="success",r=n}).catch(n=>{t="error",r=n});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}};return qe}()})},3323:function(Nt,ye){"use strict";function qe(R,ie){var J=R.length;R.push(ie);e:for(;0<J;){var je=J-1>>>1,ze=R[je];if(0<we(ze,ie))R[je]=ie,R[J]=ze,J=je;else break e}}function Ae(R){return R.length===0?null:R[0]}function Se(R){if(R.length===0)return null;var ie=R[0],J=R.pop();if(J!==ie){R[0]=J;e:for(var je=0,ze=R.length,ct=ze>>>1;je<ct;){var Ve=2*(je+1)-1,nt=R[Ve],Ne=Ve+1,Xe=R[Ne];if(0>we(nt,J))Ne<ze&&0>we(Xe,nt)?(R[je]=Xe,R[Ne]=J,je=Ne):(R[je]=nt,R[Ve]=J,je=Ve);else if(Ne<ze&&0>we(Xe,J))R[je]=Xe,R[Ne]=J,je=Ne;else break e}}return ie}function we(R,ie){var J=R.sortIndex-ie.sortIndex;return J!==0?J:R.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var ee=performance;ye.unstable_now=function(){return ee.now()}}else{var re=Date,g=re.now();ye.unstable_now=function(){return re.now()-g}}var a=[],x=[],c=1,k=null,y=3,S=!1,p=!1,$=!1,A=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(R){for(var ie=Ae(x);ie!==null;){if(ie.callback===null)Se(x);else if(ie.startTime<=R)Se(x),ie.sortIndex=ie.expirationTime,qe(a,ie);else break;ie=Ae(x)}}function B(R){if($=!1,F(R),!p)if(Ae(a)!==null)p=!0,Ke(W);else{var ie=Ae(x);ie!==null&&at(B,ie.startTime-R)}}function W(R,ie){p=!1,$&&($=!1,q(ke),ke=-1),S=!0;var J=y;try{for(F(ie),k=Ae(a);k!==null&&(!(k.expirationTime>ie)||R&&!Z());){var je=k.callback;if(typeof je=="function"){k.callback=null,y=k.priorityLevel;var ze=je(k.expirationTime<=ie);ie=ye.unstable_now(),typeof ze=="function"?k.callback=ze:k===Ae(a)&&Se(a),F(ie)}else Se(a);k=Ae(a)}if(k!==null)var ct=!0;else{var Ve=Ae(x);Ve!==null&&at(B,Ve.startTime-ie),ct=!1}return ct}finally{k=null,y=J,S=!1}}var te=!1,ge=null,ke=-1,rt=5,ot=-1;function Z(){return!(ye.unstable_now()-ot<rt)}function Re(){if(ge!==null){var R=ye.unstable_now();ot=R;var ie=!0;try{ie=ge(!0,R)}finally{ie?$e():(te=!1,ge=null)}}else te=!1}var $e;if(typeof G=="function")$e=function(){G(Re)};else if(typeof MessageChannel!="undefined"){var Ge=new MessageChannel,gt=Ge.port2;Ge.port1.onmessage=Re,$e=function(){gt.postMessage(null)}}else $e=function(){A(Re,0)};function Ke(R){ge=R,te||(te=!0,$e())}function at(R,ie){ke=A(function(){R(ye.unstable_now())},ie)}ye.unstable_IdlePriority=5,ye.unstable_ImmediatePriority=1,ye.unstable_LowPriority=4,ye.unstable_NormalPriority=3,ye.unstable_Profiling=null,ye.unstable_UserBlockingPriority=2,ye.unstable_cancelCallback=function(R){R.callback=null},ye.unstable_continueExecution=function(){p||S||(p=!0,Ke(W))},ye.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<R?Math.floor(1e3/R):5},ye.unstable_getCurrentPriorityLevel=function(){return y},ye.unstable_getFirstCallbackNode=function(){return Ae(a)},ye.unstable_next=function(R){switch(y){case 1:case 2:case 3:var ie=3;break;default:ie=y}var J=y;y=ie;try{return R()}finally{y=J}},ye.unstable_pauseExecution=function(){},ye.unstable_requestPaint=function(){},ye.unstable_runWithPriority=function(R,ie){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var J=y;y=R;try{return ie()}finally{y=J}},ye.unstable_scheduleCallback=function(R,ie,J){var je=ye.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?je+J:je):J=je,R){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=J+ze,R={id:c++,callback:ie,priorityLevel:R,startTime:J,expirationTime:ze,sortIndex:-1},J>je?(R.sortIndex=J,qe(x,R),Ae(a)===null&&R===Ae(x)&&($?(q(ke),ke=-1):$=!0,at(B,J-je))):(R.sortIndex=ze,qe(a,R),p||S||(p=!0,Ke(W))),R},ye.unstable_shouldYield=Z,ye.unstable_wrapCallback=function(R){var ie=y;return function(){var J=y;y=ie;try{return R.apply(this,arguments)}finally{y=J}}}},1102:function(Nt,ye,qe){"use strict";Nt.exports=qe(3323)}}]);
