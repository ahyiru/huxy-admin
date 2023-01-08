(self.webpackChunk=self.webpackChunk||[]).push([[697],{1975:function(Dt,pe,He){(function(_e,Se){Dt.exports=Se(He(7378),He(1542))})(this,function(_e,Se){return function(){"use strict";var ge={193:function(a,m,c){var w=c(703),y=c.n(w),j=c(414),p=c.n(j),$=p()(y());$.push([a.id,`/*@height:2px;
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
`,""]),$.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},m.Z=$},145:function(a,m,c){var w=c(703),y=c.n(w),j=c(414),p=c.n(j),$=p()(y());$.push([a.id,`.kLIGi {
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
`,""]),$.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},m.Z=$},842:function(a,m,c){var w=c(703),y=c.n(w),j=c(414),p=c.n(j),$=p()(y());$.push([a.id,`@keyframes animate-drawer-in {
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
`,""]),$.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},m.Z=$},563:function(a,m,c){var w=c(703),y=c.n(w),j=c(414),p=c.n(j),$=p()(y());$.push([a.id,`@keyframes animate-drop-in {
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
`,""]),$.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},m.Z=$},697:function(a,m,c){var w=c(703),y=c.n(w),j=c(414),p=c.n(j),$=p()(y());$.push([a.id,`@keyframes animate-modal-in {
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
`,""]),$.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},m.Z=$},810:function(a,m,c){var w=c(703),y=c.n(w),j=c(414),p=c.n(j),$=p()(y());$.push([a.id,`.clear {
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
`,""]),$.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"},m.Z=$},31:function(a,m,c){var w=c(703),y=c.n(w),j=c(414),p=c.n(j),$=p()(y());$.push([a.id,`.cols-1 {
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
`,""]),$.locals={},m.Z=$},201:function(a,m,c){var w=c(703),y=c.n(w),j=c(414),p=c.n(j),$=p()(y());$.push([a.id,`@keyframes before {
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
`,""]),$.locals={},m.Z=$},289:function(a,m,c){var w=c(703),y=c.n(w),j=c(414),p=c.n(j),$=p()(y());$.push([a.id,`.clear {
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
`,""]),$.locals={},m.Z=$},626:function(a,m,c){var w=c(703),y=c.n(w),j=c(414),p=c.n(j),$=p()(y());$.push([a.id,`.ofth_ {
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
`,""]),$.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},m.Z=$},435:function(a,m,c){var w=c(703),y=c.n(w),j=c(414),p=c.n(j),$=p()(y());$.push([a.id,`.node-right-icon-close {
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
`,""]),$.locals={},m.Z=$},414:function(a){a.exports=function(m){var c=[];return c.toString=function(){return this.map(function(w){var y="",j=typeof w[5]!="undefined";return w[4]&&(y+="@supports (".concat(w[4],") {")),w[2]&&(y+="@media ".concat(w[2]," {")),j&&(y+="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {")),y+=m(w),j&&(y+="}"),w[2]&&(y+="}"),w[4]&&(y+="}"),y}).join("")},c.i=function(w,y,j,p,$){typeof w=="string"&&(w=[[null,w,void 0]]);var A={};if(j)for(var q=0;q<this.length;q++){var G=this[q][0];G!=null&&(A[G]=!0)}for(var z=0;z<w.length;z++){var B=[].concat(w[z]);j&&A[B[0]]||(typeof $!="undefined"&&(typeof B[5]=="undefined"||(B[1]="@layer".concat(B[5].length>0?" ".concat(B[5]):""," {").concat(B[1],"}")),B[5]=$),y&&(B[2]&&(B[1]="@media ".concat(B[2]," {").concat(B[1],"}")),B[2]=y),p&&(B[4]?(B[1]="@supports (".concat(B[4],") {").concat(B[1],"}"),B[4]=p):B[4]="".concat(p)),c.push(B))}},c}},703:function(a){a.exports=function(m){return m[1]}},53:function(a,m,c){var w,y=c(899),j=Symbol.for("react.element"),p=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,A=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function G(z,B,Z){var te,me={},Ee=null,tt=null;Z!==void 0&&(Ee=""+Z),B.key!==void 0&&(Ee=""+B.key),B.ref!==void 0&&(tt=B.ref);for(te in B)$.call(B,te)&&!q.hasOwnProperty(te)&&(me[te]=B[te]);if(z&&z.defaultProps)for(te in B=z.defaultProps,B)me[te]===void 0&&(me[te]=B[te]);return{$$typeof:j,type:z,key:Ee,ref:tt,props:me,_owner:A.current}}w=p,m.jsx=G,m.jsxs=G},458:function(a,m,c){a.exports=c(53)},748:function(a){var m=[];function c(j){for(var p=-1,$=0;$<m.length;$++)if(m[$].identifier===j){p=$;break}return p}function w(j,p){for(var $={},A=[],q=0;q<j.length;q++){var G=j[q],z=p.base?G[0]+p.base:G[0],B=$[z]||0,Z="".concat(z," ").concat(B);$[z]=B+1;var te=c(Z),me={css:G[1],media:G[2],sourceMap:G[3],supports:G[4],layer:G[5]};if(te!==-1)m[te].references++,m[te].updater(me);else{var Ee=y(me,p);p.byIndex=q,m.splice(q,0,{identifier:Z,updater:Ee,references:1})}A.push(Z)}return A}function y(j,p){var $=p.domAPI(p);$.update(j);var A=function(q){if(q){if(q.css===j.css&&q.media===j.media&&q.sourceMap===j.sourceMap&&q.supports===j.supports&&q.layer===j.layer)return;$.update(j=q)}else $.remove()};return A}a.exports=function(j,p){p=p||{},j=j||[];var $=w(j,p);return function(A){A=A||[];for(var q=0;q<$.length;q++){var G=$[q],z=c(G);m[z].references--}for(var B=w(A,p),Z=0;Z<$.length;Z++){var te=$[Z],me=c(te);m[me].references===0&&(m[me].updater(),m.splice(me,1))}$=B}}},736:function(a){var m={};function c(y){if(typeof m[y]=="undefined"){var j=document.querySelector(y);if(window.HTMLIFrameElement&&j instanceof window.HTMLIFrameElement)try{j=j.contentDocument.head}catch(p){j=null}m[y]=j}return m[y]}function w(y,j){var p=c(y);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(j)}a.exports=w},706:function(a){function m(c){var w=document.createElement("style");return c.setAttributes(w,c.attributes),c.insert(w,c.options),w}a.exports=m},567:function(a,m,c){function w(y){var j=c.nc;j&&y.setAttribute("nonce",j)}a.exports=w},306:function(a){function m(y,j,p){var $="";p.supports&&($+="@supports (".concat(p.supports,") {")),p.media&&($+="@media ".concat(p.media," {"));var A=typeof p.layer!="undefined";A&&($+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),$+=p.css,A&&($+="}"),p.media&&($+="}"),p.supports&&($+="}");var q=p.sourceMap;q&&typeof btoa!="undefined"&&($+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(q))))," */")),j.styleTagTransform($,y,j.options)}function c(y){if(y.parentNode===null)return!1;y.parentNode.removeChild(y)}function w(y){var j=y.insertStyleElement(y);return{update:function(p){m(j,y,p)},remove:function(){c(j)}}}a.exports=w},62:function(a){function m(c,w){if(w.styleSheet)w.styleSheet.cssText=c;else{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(document.createTextNode(c))}}a.exports=m},899:function(a){a.exports=_e},994:function(a){a.exports=Se}},Q={};function re(a){var m=Q[a];if(m!==void 0)return m.exports;var c=Q[a]={id:a,exports:{}};return ge[a](c,c.exports,re),c.exports}(function(){re.n=function(a){var m=a&&a.__esModule?function(){return a.default}:function(){return a};return re.d(m,{a:m}),m}})(),function(){re.d=function(a,m){for(var c in m)re.o(m,c)&&!re.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:m[c]})}}(),function(){re.o=function(a,m){return Object.prototype.hasOwnProperty.call(a,m)}}(),function(){re.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){re.nc=void 0}();var g={};return function(){re.r(g),re.d(g,{Anico:function(){return tt},Carousel:function(){return lr},Col:function(){return jt},Drawer:function(){return St},Drop:function(){return kt},Ellipsis:function(){return br},ErrorBoundary:function(){return kr},FullPage:function(){return er},HandleError:function(){return Or},LoadError:function(){return Cr},Mask:function(){return pt},MaxSize:function(){return V},Modal:function(){return we},Panel:function(){return Et},Portal:function(){return ht},Row:function(){return ut},Spinner:function(){return ue},TabHeader:function(){return nr},Tooltip:function(){return Jt},Tree:function(){return Mr},fixEle:function(){return fr},fixIcon:function(){return zr},renderTree:function(){return _t},str2React:function(){return Er},str2Vue:function(){return Dr}});var a=re(458),m=re(748),c=re.n(m),w=re(306),y=re.n(w),j=re(736),p=re.n(j),$=re(567),A=re.n($),q=re(706),G=re.n(q),z=re(62),B=re.n(z),Z=re(193),te={};te.styleTagTransform=B(),te.setAttributes=A(),te.insert=p().bind(null,"head"),te.domAPI=y(),te.insertStyleElement=G();var me=c()(Z.Z,te),Ee=Z.Z&&Z.Z.locals?Z.Z.locals:void 0,tt=i=>(0,a.jsx)("span",{className:Ee.anico,children:(0,a.jsx)("span",{className:[Ee.hline,...(i.type||"").split(" ").map(s=>Ee[s]).filter(Boolean)].join(" ")})}),rt=re(994),Y=re(899),Re=re.n(Y),Fe=(i,s)=>{const h=(0,Y.useRef)();(0,Y.useEffect)(()=>{h.current=i},[i]),(0,Y.useEffect)(()=>{if(s){const S=setInterval(()=>h.current(),s);return()=>clearInterval(S)}},[s])},Ue=()=>![typeof window,typeof document].includes("undefined"),bt=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),Xe=i=>bt(i).indexOf("element")>-1,at=(i=null)=>{var s,h;return Ue()?Xe(i)?{width:i.clientWidth,height:i.clientHeight}:{width:(s=window.innerWidth)!=null?s:document.documentElement.clientWidth,height:(h=window.innerHeight)!=null?h:document.documentElement.clientHeight}:{width:0,height:0}},_=(i=()=>{},s=60)=>{let h=null;return function(...S){clearTimeout(h),h=setTimeout(()=>i.apply(this,S),s)}},le=(i,s)=>Object.prototype.hasOwnProperty.call(i!=null?i:{},s),K=i=>le(i,"current");const Ce=(i,s)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const h=document.createElement("object");return h.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),h.setAttribute("class","resize-sensor"),h.onload=()=>{h.contentDocument.defaultView.addEventListener("resize",s,!1),s()},h.type="text/html",i.appendChild(h),h.data="about:blank",h};var ze=(i,s=60)=>{if(!Ue())return;i=K(i)?i.current:i!=null?i:document.body;let h,S=[];const T=_(()=>S.map(H=>H(i)),s),N=H=>{h||(h=Ce(i,T)),S.indexOf(H)===-1&&S.push(H)},L=H=>{const ae=S.indexOf(H);ae!==-1&&S.splice(ae,1),S.length===0&&h&&X()},X=()=>{h&&h.parentNode&&(h.contentDocument&&h.contentDocument.defaultView.removeEventListener("resize",T,!1),h.parentNode.removeChild(h),h=void 0,S=[])};return{element:i,bind:N,unbind:L,destroy:X}},dt=(i={})=>{const s=(0,Y.useRef)(0),[h,S]=(0,Y.useState)(i),T=(0,Y.useCallback)(N=>{cancelAnimationFrame(s.current),s.current=requestAnimationFrame(()=>S(N))},[]);return(0,Y.useEffect)(()=>()=>cancelAnimationFrame(s.current),[]),[h,T]},Ye=(i=null,s=60)=>{const h=K(i)?i.current:i,{bind:S,destroy:T}=ze(h,s),[N,L]=dt(at(h));return(0,Y.useEffect)(()=>(S(()=>h&&L(at(h))),()=>T()),[h]),N},ot=re(145),Ne={};Ne.styleTagTransform=B(),Ne.setAttributes=A(),Ne.insert=p().bind(null,"head"),Ne.domAPI=y(),Ne.insertStyleElement=G();var Ge=c()(ot.Z,Ne),Je=ot.Z&&ot.Z.locals?ot.Z.locals:void 0,lr=({children:i,active:s=0,delay:h=5e3,className:S,...T})=>{const[N,L]=(0,Y.useState)(s+1),[X,H]=(0,Y.useState)(!1),ae=(0,Y.useRef)(),se=(0,Y.useRef)(""),{width:he}=Ye(ae);i=Array.isArray(i)?i:[i];const de=i[0],Pe=[i[i.length-1],...i,de],Ae=Pe.length;Fe(()=>{let Te=N+1;Te=Te===Ae?1:Te,se.current&&(se.current=""),L(Te),Te===Ae-1&&setTimeout(()=>{se.current="none",L(1)},500)},X?null:h);const xe=(Te,Ie)=>{Ie.stopPropagation(),se.current="",L(Te),(0,rt.flushSync)(()=>H(!0)),H(!1)},Ve={width:`${Ae*he}px`,transform:`translateX(${-he*N}px)`,transition:se.current};return(0,a.jsxs)("div",{className:`${Je["huxy-carousel"]}${S?` ${S}`:""}`,...T,ref:ae,children:[(0,a.jsx)("div",{className:Je["huxy-carousel-wrap"],style:Ve,children:Pe.map((Te,Ie)=>(0,a.jsx)("div",{className:`${Je["carousel-item"]} ${N===Ie?Je.active:""}`,style:{width:`${he}px`},children:Te},`huxy-carousel-${Ie}`))}),(0,a.jsx)("div",{className:Je["carousel-switch"],children:i.map((Te,Ie)=>(0,a.jsx)("span",{className:`${Je.dot} ${N===Ie+1?Je.active:""}`,onClick:ct=>xe(Ie+1,ct)},`huxy-carousel-switch-${Ie}`))})]})};const ft=(i,s)=>{let h="",S="";if(typeof s=="number"&&(h=`col-${i}-${s}`),typeof s=="object"){const{span:T,offset:N}=s;h=T?`col-${i}-${T}`:"",S=N?`offset-${i}-${N}`:""}return{sp:h,os:S}};var jt=(0,Y.forwardRef)(({span:i,offset:s,xl:h,lg:S,md:T,sm:N,xs:L,style:X,width:H,auto:ae,offsetWidth:se="0px",className:he,...de},Pe)=>{const Ae=he?` ${he}`:"",xe=`col-${i||12}`,Ve=s?`offset-${s}`:"",{sp:Te,os:Ie}=ft("xs",L),{sp:ct,os:Vt}=ft("sm",N),{sp:ar,os:_r}=ft("md",T),{sp:Ht,os:Rr}=ft("lg",S),{sp:Lr,os:Ot}=ft("xl",h),gt=[xe,Lr,Ht,ar,ct,Te,Ve,Ot,Rr,_r,Vt,Ie].filter(Boolean).join(" "),et=ae?{width:"auto",flex:1,maxWidth:`calc(100% - ${se})`}:{width:H};return(0,a.jsx)("div",{className:`${gt}${Ae}`,...de,style:{...et,...X},ref:Pe})}),Pt=()=>{const i=(0,Y.useRef)(!0);return i.current?(i.current=!1,!0):!1},qt=(i,s=[])=>{const h=Pt();(0,Y.useEffect)(()=>{if(!h)return i()},s)},Rt=(i,s=450)=>{const[h,S]=(0,Y.useState)(i);return qt(()=>{let T;return i||s===0?S(i):T=setTimeout(()=>S(i),s),()=>T&&clearTimeout(T)},[i]),[h,S]},ht=({children:i,mountNode:s=document.body})=>(0,rt.createPortal)(i,s);const Gt={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},Ke={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},sr={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},Xt=document.body;var pt=({open:i,close:s,delay:h=300,children:S,mountNode:T,hasMask:N=!0,style:L,className:X="h-mask"})=>{const[H]=Rt(i,h);return Xt.style.overflow=H?"hidden":"",(0,a.jsx)(ht,{mountNode:T,children:(0,a.jsx)("div",{children:H?(0,a.jsxs)("div",{className:X,style:Gt,children:[N?(0,a.jsx)("div",{style:Ke,onClick:ae=>s==null?void 0:s(ae)}):null,(0,a.jsx)("div",{style:{...sr,...L},children:S})]}):null})})},At=re(842),vt={};vt.styleTagTransform=B(),vt.setAttributes=A(),vt.insert=p().bind(null,"head"),vt.domAPI=y(),vt.insertStyleElement=G();var ur=c()(At.Z,vt),lt=At.Z&&At.Z.locals?At.Z.locals:void 0,St=({open:i,close:s,footer:h,header:S,className:T,children:N,width:L="300px"})=>{var X;const H=["drawer-wrap",i?"open":"",...(X=T==null?void 0:T.split(" "))!=null?X:[]].filter(Boolean).map(ae=>lt[ae]).join(" ");return(0,a.jsx)(pt,{open:i,close:s,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,a.jsx)("div",{className:H,style:{width:L},children:(0,a.jsxs)("div",{className:lt["drawer-container"],children:[(0,a.jsxs)("div",{className:lt["drawer-header"],children:[(0,a.jsx)("span",{className:`link ${lt["ico-close"]}`,onClick:ae=>s==null?void 0:s(ae)}),(0,a.jsx)("div",{children:S})]}),(0,a.jsx)("div",{className:lt["drawer-content"],children:N}),h?(0,a.jsx)("div",{className:lt["drawer-footer"],children:h}):null]})})})},cr=(i,s,h="click")=>{(0,Y.useEffect)(()=>{const S=N=>{const L=K(i)?i.current:i;(L==null?void 0:L.contains)&&!L.contains(N.target)&&s(N)},T=typeof h=="string"?[h]:h;return T.map(N=>{document.addEventListener(N,S,!1)}),()=>{T.map(N=>{document.removeEventListener(N,S,!1)})}},[i,s,h])},Lt=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",dr=(i="")=>i.replace(/^\S/,s=>s.toUpperCase()),mt=i=>{var s;if(Ue())return i=K(i)?i.current:i!=null?i:document.body,(s=i.getBoundingClientRect)==null?void 0:s.call(i)},u=i=>{if(!Ue())return;const s=document.createElement("div");return s.innerHTML=i,s.children[0]},v=(i,s={},h=!1)=>{!Xe(i)||Object.keys(s).map(S=>{i.style.setProperty(S,h?"":s[S])})};const C=(i=350)=>new Promise(s=>setTimeout(s,i)),I=(i=100)=>{const s=Date.now();for(;Date.now()-s<=i;);};var O=C,J=async(i,s=15)=>{if(!Ue())return;if(typeof i=="string"&&(i=u(i)),i=K(i)?i.current:i,!Xe(i))return{};const h=i.cloneNode(!0);v(h,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(h),await O(s);const S=mt(h);return i.parentNode.removeChild(h),S};const fe=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,ce=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,ne=(i,s)=>{var h;s=`huxy-drop-arrow-${s}`;const S=(h=i.getAttribute("class"))!=null?h:"";fe.test(S)?i.setAttribute("class",S.replace(ce,s)):i.setAttribute("class",`${S} ${s}`)},$e=async(i,s,h)=>{const{left:S,right:T,top:N,bottom:L}=mt(i),{width:X,height:H}=at(),{width:ae,height:se}=await J(s);if(T<0||L<0||S>X||N>H)return{};if(h==="vertical"){const he={left:S+"px",top:L+10+"px",right:"auto",bottom:"auto"};let de="lt";S+ae>X&&(he.left=T-ae+"px",de="rt"),L+10+se>H&&(he.top=N-10-se+"px",de=de==="lt"?"lb":"rb"),v(s,he),ne(s,de)}else{const he={left:T+10+"px",top:N+"px",right:"auto",bottom:"auto"};let de="tl";T+10+ae>X&&(he.left=S-10-ae+"px",de="tr"),N+se>H&&(he.top=L-se+"px",de=de==="tl"?"bl":"br"),v(s,he),ne(s,de)}};var st=(i,s,h="horizontal")=>{const S=_($e),T=()=>S(i,s,h);window.addEventListener("scroll",T,!1),window.addEventListener("resize",T,!1);const N=()=>{window.removeEventListener("scroll",T),window.removeEventListener("resize",T),v(s,{left:"",top:"",right:"",bottom:""})};return $e(i,s,h),N},wt=({open:i,delay:s=250,children:h,mountNode:S,style:T,className:N="huxy-mask"})=>{const[L]=Rt(i,s);return(0,a.jsx)(ht,{mountNode:S,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:N,children:(0,a.jsx)("div",{style:{...T,display:L?"block":"none"},children:h})})})})},xt=re(563),Le={};Le.styleTagTransform=B(),Le.setAttributes=A(),Le.insert=p().bind(null,"head"),Le.domAPI=y(),Le.insertStyleElement=G();var Bt=c()(xt.Z,Le),$t=xt.Z&&xt.Z.locals?xt.Z.locals:void 0,kt=({trigger:i="click",type:s,dropList:h,className:S,children:T,...N})=>{const[L,X]=(0,Y.useState)(!1),H=(0,Y.useRef)(),ae=(0,Y.useRef)(),se=(0,Y.useRef)();cr(H,xe=>L&&X(!1),[...new Set(["click",i.toLowerCase()])]),(0,Y.useEffect)(()=>()=>{var xe;return(xe=se.current)==null?void 0:xe.call(se)},[]);const he=xe=>{xe.preventDefault(),X(!0),se.current=st(H.current,ae.current,s)},de={[`on${dr(i)}`]:he},Pe=["drop-wrap",L?"open":""].filter(Boolean).map(xe=>$t[xe]).join(" "),Ae=Lt(h)?h:h==null?void 0:h(()=>X(!1),L);return(0,a.jsxs)("span",{ref:H,className:`${$t["drop-target"]}${S?` ${S}`:""}`,...de,...N,children:[T,(0,a.jsx)(wt,{open:L,className:"huxy-drop",children:(0,a.jsx)("div",{ref:ae,className:Pe,children:Ae})})]})},yt=(i,s={},h)=>{if(!Ue())return;h=K(h)?h.current:h!=null?h:document.body;const S=document.createElement("span");S.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),s&&v(S,s),S.innerText=i,h.appendChild(S);const T=S.getBoundingClientRect();return h.removeChild(S),T},nt=re(626),We={};We.styleTagTransform=B(),We.setAttributes=A(),We.insert=p().bind(null,"head"),We.domAPI=y(),We.insertStyleElement=G();var Yr=c()(nt.Z,We),Fr=nt.Z&&nt.Z.locals?nt.Z.locals:void 0,Jt=({title:i,placement:s="topRight",children:h,ellipsis:S,className:T,...N})=>(0,a.jsx)("span",{className:`${Fr[`huxy-tooltip-${s}`]}${T?` ${T}`:""}`,tooltip:i!=null?i:h,...N,children:(0,a.jsx)("span",{className:S?Fr.ellipsis:"",children:h})});const gr={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"};var br=i=>{var s,h,S,T;const{children:N}=i,L=typeof N=="string",X=L?N:(S=(s=N==null?void 0:N.props)==null?void 0:s.title)!=null?S:(h=N==null?void 0:N.props)==null?void 0:h.children,H=(0,Y.useRef)(),[ae,se]=(0,Y.useState)(!1),he=Ye(H,250);return(0,Y.useEffect)(()=>{if(H.current){const{width:de}=yt(X),{width:Pe}=mt(H.current),Ae=de>Pe;Ae!==ae&&se(Ae)}},[X,he.width]),(0,a.jsx)("span",{ref:H,style:{width:"100%",display:"inline-block"},children:ae?L?(0,a.jsx)(Jt,{...i,ellipsis:!0}):(0,a.jsx)("span",{style:gr,children:N}):L?N:(T=N==null?void 0:N.props)==null?void 0:T.children})},Kt=Object.defineProperty,vr=(i,s,h)=>s in i?Kt(i,s,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[s]=h,wr=(i,s,h)=>(vr(i,typeof s!="symbol"?s+"":s,h),h);class kr extends Re().Component{constructor(){super(...arguments),wr(this,"state",{error:null})}static getDerivedStateFromError(s){return{error:s}}componentDidCatch(s,h){const{errorReport:S}=this.props;typeof S=="function"&&S({error:s,info:h.componentStack})}render(){const{error:s}=this.state,{fallback:h,children:S}=this.props;return s?h(s):S}}var fr=i=>s=>{if(typeof s=="function"||typeof(s==null?void 0:s.render)=="function")return(0,a.jsx)(s,{});if(typeof s=="string"){const h=i==null?void 0:i[s];return h?(0,a.jsx)(h,{}):(0,a.jsx)("i",{className:s})}return s!=null?s:null};const hr=i=>fr(i);var zr=i=>({icon:s,defaultIcon:h=null})=>s?hr(i)(s):s===!1?null:h;const Qt=["","webkit","moz","ms"],pr=i=>Qt.map(s=>s?`${s}FullscreenElement`:"fullscreenElement").find(s=>i[s]),Tr=i=>Qt.map(s=>s?`${s}RequestFullscreen`:"requestFullscreen").find(s=>i[s]),Nr=i=>Qt.map(s=>s?`${s}ExitFullscreen`:"exitFullscreen").find(s=>i[s]),Mt=Qt.map(i=>`${i}fullscreenchange`);var Wt=i=>{var s,h;if(!Ue())return;i=K(i)?i.current:i!=null?i:document.body;const S=pr(document),T=Tr(i),N=Nr(document);document[S]?(h=document[N])==null||h.call(document):(s=i[T])==null||s.call(i)},Ft=i=>Ue()?(Mt.map(s=>document.addEventListener(s,i,!1)),()=>Mt.map(s=>document.removeEventListener(s,i,!1))):void 0;const Ir=i=>(0,a.jsx)("i",{...i,children:"..."});var er=({panel:i,fullIcon:s=Ir,exitIcon:h=Ir,...S})=>{const T=K(i)?i.current:i,[N,L]=(0,Y.useState)();(0,Y.useEffect)(()=>{const H=Ft(()=>{L(ae=>!ae)});return()=>H()},[]);const X=N?h:s;return(0,a.jsx)(X,{onClick:H=>Wt(T),...S})},Er=(i,s)=>(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...s}),Cr=i=>{const{error:s={},info:h=""}=i||{},{message:S,stack:T,errMsg:N}=s;let L=N||T||s.toString();L=`${L}
${h}`.replace(/\r|\n|\r\n/g,"<br/>"),L=L.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),L=L.replace(/\s/g,"&nbsp;");const X=S==null?void 0:S.slice(0,120).split(". ").slice(0,2).join(". ");return(0,a.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[Er(L,{style:{color:"red"}}),X&&(0,a.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${X}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Or=({children:i,report:s})=>{var h;const S=(0,Y.useRef)();return(h=S.current)!=null&&h.state&&(S.current.state.error=null),(0,a.jsx)(kr,{ref:S,fallback:(T,N)=>Cr({error:T,info:N}),errorReport:s,children:i})};const l=(i,s)=>Object.keys(s).map(h=>i.style[h]=s[h]),f=(i,s)=>Object.keys(s).map(h=>i.style[h]=""),E={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},b=({left:i,top:s,width:h,height:S})=>({left:`${i}px`,top:`${s}px`,width:`${h}px`,height:`${S}px`}),x=i=>(0,a.jsx)("i",{...i,children:"..."}),M=i=>{const{left:s,top:h}=mt(i),{width:S,height:T}=at(i);return{left:s,top:h,width:S,height:T}};var V=({panel:i,target:s,fullIcon:h=x,exitIcon:S=x})=>{i=K(i)?i.current:i||document.body;const[T,N]=(0,Y.useState)(),L=(0,Y.useRef)(),X=(0,Y.useRef)();(0,Y.useEffect)(()=>{const se=typeof s=="function"?s:()=>document.getElementsByClassName(s)[0];X.current=b(M(se())),L.current={...E,...b(M(i))}},[i]);const H=(se,he)=>{se?(l(he,L.current),setTimeout(()=>{l(he,X.current)},0)):f(he,L.current),N(se)},ae=T?S:h;return(0,a.jsx)(ae,{onClick:se=>H(!T,i)})},W=re(697),P={};P.styleTagTransform=B(),P.setAttributes=A(),P.insert=p().bind(null,"head"),P.domAPI=y(),P.insertStyleElement=G();var R=c()(W.Z,P),ie=W.Z&&W.Z.locals?W.Z.locals:void 0,we=({open:i,close:s,hasMask:h=!0,cancelText:S="\u53D6\u6D88",submit:T,submitText:N="\u786E\u5B9A",title:L="Modal \u5F39\u7A97",className:X,children:H,delay:ae=250})=>{var se;const he=["modal-wrap",i?"open":"",...(se=X==null?void 0:X.split(" "))!=null?se:[]].filter(Boolean).map(de=>ie[de]).join(" ");return(0,a.jsx)(pt,{open:i,close:s,delay:ae,hasMask:h,className:"huxy-modal",children:(0,a.jsx)("div",{className:he,children:(0,a.jsxs)("div",{className:ie["modal-container"],children:[(0,a.jsx)("div",{className:ie["modal-header"],children:L}),(0,a.jsx)("div",{className:ie["modal-content"],children:H}),(0,a.jsxs)("div",{className:ie["modal-footer"],children:[(0,a.jsx)("div",{className:`${ie.btn} ${ie.left}`,onClick:de=>s==null?void 0:s(de),children:S}),(0,a.jsx)("div",{className:`${ie.btn} ${ie.right}`,onClick:de=>T==null?void 0:T(de),children:N})]})]})})})},be=re(201),oe={};oe.styleTagTransform=B(),oe.setAttributes=A(),oe.insert=p().bind(null,"head"),oe.domAPI=y(),oe.insertStyleElement=G();var ve=c()(be.Z,oe),Oe=be.Z&&be.Z.locals?be.Z.locals:void 0,ue=({global:i,absolute:s})=>(0,a.jsx)("div",{className:`spinner${i?" global":""}${s?" absolute":""}`,children:(0,a.jsx)("figure",{className:"spinning"})}),ee=re(810),ke={};ke.styleTagTransform=B(),ke.setAttributes=A(),ke.insert=p().bind(null,"head"),ke.domAPI=y(),ke.insertStyleElement=G();var Be=c()(ee.Z,ke),De=ee.Z&&ee.Z.locals?ee.Z.locals:void 0;const Ze=i=>{var s;return(s=i==null?void 0:i.filter)==null?void 0:s.call(i,h=>typeof h=="function")},qe=(i,s)=>{const h=(0,Y.useRef)(),{loading:S,title:T,plugins:N,children:L,className:X,...H}=i,ae=Ze(N),se=ae==null?void 0:ae.length,he=X?` ${X}`:"",de=K(s)?s:h;return(0,a.jsxs)("div",{className:`${De.panel}${he}`,...H,ref:de,children:[(T||se)&&(0,a.jsxs)("div",{className:De["panel-header"],children:[T&&(0,a.jsx)("h4",{className:De["panel-title"],children:T}),se&&(0,a.jsx)("div",{className:De["panel-plugins"],children:ae.map((Pe,Ae)=>(0,a.jsx)("span",{className:"link",children:(0,a.jsx)(Pe,{panel:de})},Ae))})]}),(0,a.jsx)("div",{className:De["panel-body"],children:L}),S&&(0,a.jsx)(ue,{})]})};var Et=(0,Y.forwardRef)(qe),zt=re(31),it={};it.styleTagTransform=B(),it.setAttributes=A(),it.insert=p().bind(null,"head"),it.domAPI=y(),it.insertStyleElement=G();var tr=c()(zt.Z,it),Zt=zt.Z&&zt.Z.locals?zt.Z.locals:void 0;const Tt=({gutter:i=10,className:s,overflow:h="hidden",...S},T)=>{var N;const L=s?` ${s}`:"";let X=10;if(Array.isArray(i)){const H=[...i];i=H[0],X=(N=H[1])!=null?N:H[0]}return(0,a.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(X/2)}px`,overflow:h},children:(0,a.jsx)("div",{className:`row${L}`,...S,ref:T})})};var ut=(0,Y.forwardRef)(Tt),mr=i=>bt(i)==="array",Qe=i=>mr(i)&&!!i.length;const Nt=({item:i,to:s,preventDefault:h,stopPropagation:S,className:T,...N})=>h?(0,a.jsx)("span",{className:`link${T?` ${T}`:""}`,...N}):(0,a.jsx)("a",{href:s,className:`link${T?` ${T}`:""}`,...N}),rr=({item:i,...s})=>(0,a.jsx)("ul",{...s}),xr=(i,...s)=>{const h={};return Object.keys(i).filter(Boolean).map(S=>{h[S]=T=>i[S](T,...s)}),h},It=({data:i=[],events:s={},List:h=rr,Link:S=Nt,leftIcon:T,rightIcon:N,level:L=0})=>i.map(X=>{const{name:H,path:ae,icon:se,rightIcon:he,active:de,open:Pe,children:Ae,linkProps:xe}=X,Ve=Qe(Ae),Te=xr(s,X,L,Ve),Ie=X.id||ae||H,ct=se!=null?se:T,Vt=he!=null?he:N;return Ve?(0,a.jsxs)("li",{className:Pe?"open":"","has-children":"true",...Te,children:[(0,a.jsxs)(S,{item:{...X,level:L},className:de?"active":"",to:ae,preventDefault:!0,stopPropagation:!1,...xe,children:[ct?(0,a.jsx)("div",{className:"node-left-icon",children:ct===!0?(0,a.jsx)("i",{className:"default-left-icon"}):ct}):null,H?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:H})}):null,Vt?(0,a.jsx)("div",{className:"node-right-icon",children:Vt===!0?(0,a.jsx)("i",{className:"default-right-icon"}):Vt}):null]}),(0,a.jsx)(h,{item:X,children:It({data:Ae,events:s,List:h,Link:S,leftIcon:T,rightIcon:N,level:L+1})})]},Ie):(0,a.jsx)("li",{...Te,children:(0,a.jsxs)(S,{item:{...X,level:L},className:de?"active":"",to:ae,...xe,children:[ct?(0,a.jsx)("div",{className:"node-left-icon",children:ct===!0?(0,a.jsx)("i",{className:"default-left-icon"}):ct}):null,H?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:H})}):null]})},Ie)});var _t=It,Dr=(i,...s)=>(0,a.jsx)("div",{"v-html":i,...s}),Yt=re(289),Ct={};Ct.styleTagTransform=B(),Ct.setAttributes=A(),Ct.insert=p().bind(null,"head"),Ct.domAPI=y(),Ct.insertStyleElement=G();var jr=c()(Yt.Z,Ct),Pr=Yt.Z&&Yt.Z.locals?Yt.Z.locals:void 0;const or=i=>(0,a.jsx)("div",{style:{padding:"6px 15px"},children:i}),Ar=({activekey:i,tabs:s=[],switchTab:h,trackColor:S,flex:T},N)=>{var L;const[X,H]=(0,Y.useState)(i!=null?i:(L=s[0])==null?void 0:L.key),[ae,se]=(0,Y.useState)({}),he=(0,Y.useRef)({}),de=(0,Y.useRef)();(0,Y.useEffect)(()=>{const xe=he.current[X];xe&&Pe(xe)},[]);const Pe=xe=>{const{left:Ve,width:Te}=mt(xe),Ie=mt(de.current).left;se({left:Ve-Ie,width:Te})},Ae=(xe,Ve)=>{xe.stopPropagation(),H(Ve),typeof h=="function"&&h(Ve),Pe(xe.currentTarget)};return(0,a.jsxs)("div",{className:"tabs-header-wrap",ref:N,children:[(0,a.jsx)("ul",{className:`tabs-header${T?" flex":""}`,ref:de,children:s.map(xe=>(0,a.jsx)("li",{ref:Ve=>he.current[xe.key]=Ve,className:`th-item${X===xe.key?" active":""}`,onClick:Ve=>Ae(Ve,xe.key),children:typeof xe.renderTabs=="function"?xe.renderTabs(xe,X===xe.key):or(xe.value)},xe.key))}),(0,a.jsx)("div",{className:"th-track",style:{...ae,color:S}})]})};var nr=(0,Y.forwardRef)(Ar),Sr=(i,s,h="id",S="children")=>{if(!mr(i))return null;const T=N=>{for(let L=0,X=N.length;L<X;L++){const H=N[L];if(H[h]===s)return[H];if(mr(H[S])){const ae=T(H[S]);if(ae)return[H].concat(ae)}}};return T(i)},Vr=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Hr=()=>{let i=Vr();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,s=>{const h=(i+Math.random()*16)%16|0;return i=Math.floor(i/16),(s==="x"?h:h&3|8).toString(16)})};const Ur=i=>++i;var qr=()=>{const[,i]=(0,Y.useState)(0);return(0,Y.useCallback)(()=>i(Ur),[])},Gr=({item:i,style:s,...h})=>{var S;const{uuid:T,open:N}=i,L=(0,Y.useRef)(),X=(0,Y.useRef)(),H=Pt(),[ae,se]=(0,Y.useState)("");return(0,Y.useEffect)(()=>{const he=L.current,de=N?`${he.scrollHeight}px`:"0px";se(de)},[]),(0,Y.useEffect)(()=>{if(H)return;const he=L.current,de=N?"0px":`${he.scrollHeight}px`;return se(de),X.current=setTimeout(()=>{const Pe=N?`${he.scrollHeight}px`:"0px";se(Pe)},5),()=>clearTimeout(X.current)},[N,(S=i.children)==null?void 0:S.length]),(0,Y.useEffect)(()=>{T&&se("")},[T]),(0,a.jsx)("ul",{ref:L,style:{...s,maxHeight:ae},...h})},$r=re(435),ir={};ir.styleTagTransform=B(),ir.setAttributes=A(),ir.insert=p().bind(null,"head"),ir.domAPI=y(),ir.insertStyleElement=G();var Kr=c()($r.Z,ir),Qr=$r.Z&&$r.Z.locals?$r.Z.locals:void 0;const Xr=i=>(0,a.jsx)("ul",{...i}),Jr=(i,s)=>i?({item:h,...S})=>(0,a.jsx)(Xr,{className:s==="right"?"left":"",...S}):Gr;var Mr=i=>{var s;const{data:h=[],collapsed:S=!1,type:T="vertical",Link:N,width:L,bgColor:X,itemHeight:H,collapsedWidth:ae,itemPadding:se,style:he,className:de,...Pe}=i,Ae=(0,Y.useRef)(),xe=(0,Y.useRef)();(0,Y.useEffect)(()=>()=>clearTimeout(Ae.current),[]);const Ve=qr(),Te=T==="horizontal",Ie=!Te&&S,ct={onClick:(Ot,gt)=>{Ot.stopPropagation(),!Te&&!Ie&&(Sr(h,gt.path,"path").map(et=>et.path===gt.path?et.open=!et.open:et.uuid=Hr()),Ve())},onMouseEnter:(Ot,gt,et,Br)=>{Ie&&!et&&Br&&(clearTimeout(Ae.current),xe.current.style.width="var(--maxWidth)")},onMouseLeave:(Ot,gt,et,Br)=>{Ie&&!et&&Br&&(Ae.current=setTimeout(()=>xe.current.style.width="",200))}},Vt=(Te?["huxy-horizontal-tree",de]:["huxy-tree",de,Ie?"collapsed":""]).filter(Boolean).join(" "),{float:ar,..._r}=(s=Pe==null?void 0:Pe.style)!=null?s:{},Ht={"--bgColor":X,"--itemHeight":H,"--nodeListWidth":L,..._r};T==="horizontal"?(Ht["--itemPadding"]=se,Ht["--nodeFloat"]=ar):(Ht["--width"]=L,Ht["--collapsedWidth"]=ae);const Rr=Jr(Te||Ie,ar),Lr=({item:Ot,className:gt,...et})=>Ie&&!Ot.level?(0,a.jsx)(N,{className:`link${gt?` ${gt}`:""}`,...et,title:Ot.title||Ot.name}):(0,a.jsx)(N,{className:`link${gt?` ${gt}`:""}`,...et});return(0,a.jsx)("div",{ref:xe,className:Vt,style:Ht,...Pe,children:(0,a.jsx)("div",{className:"huxy-tree-track",children:(0,a.jsx)("ul",{className:"huxy-tree-root",children:_t({data:h,events:ct,List:Rr,Link:Lr,leftIcon:!0,rightIcon:!0})})})})}}(),g}()})},4544:function(Dt,pe,He){(function(_e,Se){Dt.exports=Se(He(7378))})(this,function(_e){return function(){"use strict";var Se={201:function(g,a,m){var c=m(703),w=m.n(c),y=m(414),j=m.n(y),p=j()(w());p.push([g.id,`@keyframes before {
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
`,""]),p.locals={},a.Z=p},982:function(g,a,m){var c=m(703),w=m.n(c),y=m(414),j=m.n(y),p=j()(w());p.push([g.id,`.Iuy_e {
  text-decoration: none;
  display: inline-block;
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
  color: rgba(0, 0, 0, 0.25);
  opacity: 0.7;
}
`,""]),p.locals={link:"Iuy_e",active:"D3oJg"},a.Z=p},414:function(g){g.exports=function(a){var m=[];return m.toString=function(){return this.map(function(c){var w="",y=typeof c[5]!="undefined";return c[4]&&(w+="@supports (".concat(c[4],") {")),c[2]&&(w+="@media ".concat(c[2]," {")),y&&(w+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),w+=a(c),y&&(w+="}"),c[2]&&(w+="}"),c[4]&&(w+="}"),w}).join("")},m.i=function(c,w,y,j,p){typeof c=="string"&&(c=[[null,c,void 0]]);var $={};if(y)for(var A=0;A<this.length;A++){var q=this[A][0];q!=null&&($[q]=!0)}for(var G=0;G<c.length;G++){var z=[].concat(c[G]);y&&$[z[0]]||(typeof p!="undefined"&&(typeof z[5]=="undefined"||(z[1]="@layer".concat(z[5].length>0?" ".concat(z[5]):""," {").concat(z[1],"}")),z[5]=p),w&&(z[2]&&(z[1]="@media ".concat(z[2]," {").concat(z[1],"}")),z[2]=w),j&&(z[4]?(z[1]="@supports (".concat(z[4],") {").concat(z[1],"}"),z[4]=j):z[4]="".concat(j)),m.push(z))}},m}},703:function(g){g.exports=function(a){return a[1]}},53:function(g,a,m){var c,w=m(899),y=Symbol.for("react.element"),j=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function q(G,z,B){var Z,te={},me=null,Ee=null;B!==void 0&&(me=""+B),z.key!==void 0&&(me=""+z.key),z.ref!==void 0&&(Ee=z.ref);for(Z in z)p.call(z,Z)&&!A.hasOwnProperty(Z)&&(te[Z]=z[Z]);if(G&&G.defaultProps)for(Z in z=G.defaultProps,z)te[Z]===void 0&&(te[Z]=z[Z]);return{$$typeof:y,type:G,key:me,ref:Ee,props:te,_owner:$.current}}c=j,a.jsx=q,a.jsxs=q},458:function(g,a,m){g.exports=m(53)},748:function(g){var a=[];function m(y){for(var j=-1,p=0;p<a.length;p++)if(a[p].identifier===y){j=p;break}return j}function c(y,j){for(var p={},$=[],A=0;A<y.length;A++){var q=y[A],G=j.base?q[0]+j.base:q[0],z=p[G]||0,B="".concat(G," ").concat(z);p[G]=z+1;var Z=m(B),te={css:q[1],media:q[2],sourceMap:q[3],supports:q[4],layer:q[5]};if(Z!==-1)a[Z].references++,a[Z].updater(te);else{var me=w(te,j);j.byIndex=A,a.splice(A,0,{identifier:B,updater:me,references:1})}$.push(B)}return $}function w(y,j){var p=j.domAPI(j);p.update(y);var $=function(A){if(A){if(A.css===y.css&&A.media===y.media&&A.sourceMap===y.sourceMap&&A.supports===y.supports&&A.layer===y.layer)return;p.update(y=A)}else p.remove()};return $}g.exports=function(y,j){j=j||{},y=y||[];var p=c(y,j);return function($){$=$||[];for(var A=0;A<p.length;A++){var q=p[A],G=m(q);a[G].references--}for(var z=c($,j),B=0;B<p.length;B++){var Z=p[B],te=m(Z);a[te].references===0&&(a[te].updater(),a.splice(te,1))}p=z}}},736:function(g){var a={};function m(w){if(typeof a[w]=="undefined"){var y=document.querySelector(w);if(window.HTMLIFrameElement&&y instanceof window.HTMLIFrameElement)try{y=y.contentDocument.head}catch(j){y=null}a[w]=y}return a[w]}function c(w,y){var j=m(w);if(!j)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");j.appendChild(y)}g.exports=c},706:function(g){function a(m){var c=document.createElement("style");return m.setAttributes(c,m.attributes),m.insert(c,m.options),c}g.exports=a},567:function(g,a,m){function c(w){var y=m.nc;y&&w.setAttribute("nonce",y)}g.exports=c},306:function(g){function a(w,y,j){var p="";j.supports&&(p+="@supports (".concat(j.supports,") {")),j.media&&(p+="@media ".concat(j.media," {"));var $=typeof j.layer!="undefined";$&&(p+="@layer".concat(j.layer.length>0?" ".concat(j.layer):""," {")),p+=j.css,$&&(p+="}"),j.media&&(p+="}"),j.supports&&(p+="}");var A=j.sourceMap;A&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),y.styleTagTransform(p,w,y.options)}function m(w){if(w.parentNode===null)return!1;w.parentNode.removeChild(w)}function c(w){var y=w.insertStyleElement(w);return{update:function(j){a(y,w,j)},remove:function(){m(y)}}}g.exports=c},62:function(g){function a(m,c){if(c.styleSheet)c.styleSheet.cssText=m;else{for(;c.firstChild;)c.removeChild(c.firstChild);c.appendChild(document.createTextNode(m))}}g.exports=a},899:function(g){g.exports=_e}},ge={};function Q(g){var a=ge[g];if(a!==void 0)return a.exports;var m=ge[g]={id:g,exports:{}};return Se[g](m,m.exports,Q),m.exports}(function(){Q.n=function(g){var a=g&&g.__esModule?function(){return g.default}:function(){return g};return Q.d(a,{a}),a}})(),function(){Q.d=function(g,a){for(var m in a)Q.o(a,m)&&!Q.o(g,m)&&Object.defineProperty(g,m,{enumerable:!0,get:a[m]})}}(),function(){Q.o=function(g,a){return Object.prototype.hasOwnProperty.call(g,a)}}(),function(){Q.r=function(g){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})}}(),function(){Q.nc=void 0}();var re={};return function(){Q.r(re),Q.d(re,{Link:function(){return Cr},routeStore:function(){return St},useRoute:function(){return Or},useRouter:function(){return Nr}});var g=Q(899),a=Q.n(g),m=l=>Object.prototype.toString.call(l).slice(8,-1).toLowerCase(),c=l=>m(l)==="array",w=l=>m(l)==="object",y=l=>(l==null?void 0:l.$$typeof)&&typeof l.$$typeof=="symbol"&&l.$$typeof.description==="react.element",j=l=>l==null?void 0:l.__v_isVNode,p=(l,f)=>Object.prototype.hasOwnProperty.call(l!=null?l:{},f);const $=l=>{if(!c(l)&&!w(l))return l;const f=c(l)?[]:{};for(const E in l)if(p(l,E)){const b=l[E];f[E]=y(b)||j(b)||typeof b!="object"?b:b!==l?$(b):"cyclic"}else Object.setPrototypeOf(f,{[E]:l[E]});return f};var A=$,q=l=>m(l)==="function",G=l=>m(l)==="promise"||w(l)&&q(l.then),z=(l,f=12e4,E="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!G(l))return{};let b=null,x=null;return{promiseFn:new Promise((M,V)=>{b=(W="canceled")=>{clearTimeout(x),M({canceled:!0,errMsg:W})},f&&(f=typeof f!="number"?12e4:f,x=setTimeout(()=>b(E),f)),l.then(W=>{clearTimeout(x),M({result:W,errMsg:!1})}).catch(W=>{clearTimeout(x),V(W)})}),cancelFn:b}},B=l=>l?l.charAt(l.length-1)==="/"?l.slice(0,-1):l:"",Z=Q(458),te=(l,f)=>(0,Z.jsx)("div",{dangerouslySetInnerHTML:{__html:l},...f}),me=l=>{const{error:f={},info:E=""}=l||{},{message:b,stack:x,errMsg:M}=f;let V=M||x||f.toString();V=`${V}
${E}`.replace(/\r|\n|\r\n/g,"<br/>"),V=V.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),V=V.replace(/\s/g,"&nbsp;");const W=b==null?void 0:b.slice(0,120).split(". ").slice(0,2).join(". ");return(0,Z.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[te(V,{style:{color:"red"}}),W&&(0,Z.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${W}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})};const Ee=(l,f,E,b,x=[])=>{const M=P=>{for(let R=0,ie=P.length;R<ie;R++){const we=P[R],be=we[b].split("?")[0];if(new RegExp("^"+be.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return we;if(c(we[E])){const oe=M(we[E]);if(oe)return oe}}},V=M(l);if(!V)return"/404";const{redirect:W}=V;return W?x.includes(W)?x:(x.push(W),Ee(l,W.split("?")[0],E,b,x)):x[x.length-1]},tt=(l,f,E,b,x)=>{if(!c(l))return null;const M=ie=>{const we=ie.split("/"),be=f.split("/"),oe={};return we.map((ve,Oe)=>ve.indexOf(":")===0&&(oe[ve.slice(1)]=be[Oe])),oe},V=(ie,we)=>{const be=[],oe=we.split("/:")[0];for(let ve=0,Oe=ie.length;ve<Oe;ve++){const ue=ie[ve];if(ue[x]===oe){ue.active=!0;const{name:ee,title:ke,icon:Be,params:De}=ue;be.push({name:ee,title:ke,icon:Be,params:De,[x]:oe})}else if(we.indexOf(`${ue[x]}/`)===0){ue.active=!0;const ee=M(ue[x]),ke=Object.keys(ee).map(Et=>ee[Et]).join("/"),{name:Be,title:De,icon:Ze}=ue,qe=ke?`${oe}/${ke}`:ue[x];be.push({name:Be,title:De,icon:Ze,[x]:qe,params:{...ue.params,...ee}})}else if(ue[x]===we){ue.active=!0;const ee=M(ue[x]),{[b]:ke,...Be}=ue;be.push({...Be,[x]:f,params:{...Be.params,...E,...ee}})}}return be},W=(ie,we)=>{for(let be=0,oe=ie.length;be<oe;be++){const ve=ie[be];if(we.indexOf(`${ve[x]}/`)===0){ve.active=!0;return}}},P=ie=>{for(let we=0,be=ie.length;we<be;we++){const oe=ie[we],ve=(oe[x]||"").split("?")[0];if(ve===f){oe.hideMenu&&W(ie,oe.parentPath||ve),oe.active=!0;const{[b]:Oe,...ue}=oe;return[{...ue,params:{...ue.params,...E}}]}if(new RegExp("^"+ve.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return V(ie,ve);if(c(oe[b])){const Oe=P(oe[b]);if(Oe){oe.active=!0,oe.open=!0;const{[b]:ue,...ee}=oe;return[ee,...Oe]}}}},R=P(l)||[];return{result:l,current:R}},rt=(l,f,E)=>l.filter(b=>b.hideMenu||b[E].indexOf("/:")>-1?!1:(c(b[f])&&(b[f]=rt(b[f],f,E)),!0));var Y=(l,f,E,b="children",x="path")=>{const M=Ee(l,f,b,x);if(M)return{redirect:M};const{result:V,current:W}=tt(l,f,E,b,x),P=rt(V,b,x);return{current:W,menu:P}},Re=()=>{const l={};return{on:(f,E)=>{l[f]||(l[f]=[]),l[f].indexOf(E)===-1&&l[f].push(E)},emit:(f,E)=>{l[f]&&l[f].map(b=>b(E))},off:(f,E=null)=>{if(l[f]){if(typeof E!="function")return l[f]=[];const b=l[f].indexOf(E);b>-1&&l[f].splice(b,1)}}}};const Fe=l=>{const f={};for(let E in l)p(l,E)||(f[E]=l[E]);return f};var Ue=(l,f)=>{if(!w(l))return f;if(!w(f))return l;const E={...Fe(l),...Fe(f)},b={...l,...f};return Object.keys(E).map(x=>{Object.setPrototypeOf(b,{[x]:E[x]})}),b},bt=()=>{const{on:l,emit:f,off:E}=Re(),b={};return{getState:x=>A(b[x]),setState:(x,M=!1)=>{if(typeof x=="function"&&(x=x(A(b))),!w(x))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const V=A(x);Object.keys(V).map(W=>{const P=b[W],R=V[W],ie=w(R)&&w(P)?Ue(P,R):R;!M&&f(W,ie),b[W]=ie})},subscribe:(x,M)=>(l(x,M),()=>E(x,M)),unsubscribe:E,clean:x=>{typeof x=="string"?b[x]=void 0:Array.isArray(x)?x.map(M=>b[M]=void 0):Object.keys(b).map(M=>b[M]=void 0)}}},Xe=l=>(f,E)=>{const[b,x]=(0,g.useState)(()=>{const P=l==null?void 0:l.getState(f);return P!==void 0?P:(E!==void 0&&(l==null||l.setState({[f]:E},!0)),E)}),M=(0,g.useCallback)(P=>l==null?void 0:l.setState({[f]:typeof P=="function"?P(l==null?void 0:l.getState(f)):P}),[]),V=(0,g.useCallback)(P=>l==null?void 0:l.subscribe(f,P),[]),W=(0,g.useCallback)((P=P)=>l==null?void 0:l.clean(P),[]);return(0,g.useEffect)(()=>{l==null||l.subscribe(f,P=>x(P))},[]),[b,M,V,W]};const at=bt(),_=Xe(at),le=Re(),K=Re(),Ce="push-emitter",ze="replace-emitter",dt="useRoute-emitter",Ye={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},ot={getState:()=>history.state,go:l=>history.go(l),forward:()=>history.forward(),back:()=>history.back()};var Ne=l=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(l);const Ge=(l,f)=>{const E=["#/","/"],b=E[!!f-0];if(!l||E.includes(l))return b;const x=l.charAt(l.length-1)==="/"?l.slice(0,-1):l;return f||x.indexOf("#/")>-1?x:`#${x}`},Je=(l,f,E,b=!1)=>{const x=Ge(f,E);return b?x:E?l&&x==="/"?l:`${l}${x}`:l?`${l}/${x}`:x},lr=(l,f,E,b,x,M)=>{if(!c(l))return l;const V=(W,P="")=>W.filter(R=>!R.denied).map(R=>{if(!M&&!R.exact&&!Ne(R[b])){(!R[b]||R[b]==="javascript:;")&&(R[b]="");const ie=R[b].charAt(0)==="/"&&P.charAt(P.length-1)==="/"?R[b].slice(1):R[b].charAt(0)!=="/"&&P.charAt(P.length-1)!=="/"?`/${R[b]}`:R[b];R[b]=P?P+ie:Je(x,ie,f)}return R.redirect&&(R.redirect=Je(x,R.redirect,f)),c(R[E])&&(R[E]=V(R[E],R[b]),!R.redirect&&R[E].length&&(R.redirect=R[E][0][b])),R});return V(l)};var ft=l=>{if(!w(l))return"";const f=[];return Object.keys(l).map((E,b)=>{const x=b>0?"&":"?";f.push(`${x}${E}=${l[E]}`)}),f.join("")},jt=(l="")=>{const[f,E]=l.split("?");if(E){const b={};return E.split("&").map(x=>{const[M,V]=x.split("=");b[M]=V}),{path:f,params:b}}return{path:f}};const Pt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},qt=(l,f)=>{for(let E=l.length-1,b;b=l[E--];){const{title:x,name:M}=b;if(typeof x=="string"&&x.length)return document.title=x;if((x==null||x===!0)&&M)return document.title=f?`${M}-${f}`:M;if(f)return document.title=f}},Rt=l=>{const{pathname:f,search:E,hash:b}=location;if(l){const W=Ge(f,l),P=decodeURIComponent(`${W}${E}`),{params:R}=jt(P);return{path:P,params:R}}const x=decodeURIComponent(Ge(b,l)),{params:M}=jt(x),V=B(f);return{path:V?`${V}/${x}`:x,params:M}},ht=(l,f,E)=>{typeof l=="function"&&l({...f,stay:new Date-E})},Gt=(l,f,E,b)=>{let x,M,V;if(typeof l=="string")x=l;else if(w(l))x=l.path,M=l.params,V=l.query;else return;!x||x==="."||x==="./"?x=b:x.indexOf("./")===0&&(x=`${b.split("?")[0]}${x.replace("./","/")}`),x=Je(f,x,E,l==null?void 0:l.exact);const W=jt(x);x=W.path;const P={...W.params,...V},R=ft(P);return x=`${x}${R}`,M={...M,...P},{path:x,params:M}},Ke=(l,f)=>{const E=l.split(f);return E.length>1?["","/"].includes(E[1].slice(0,1)):!1},sr=Re();var Xt=l=>{const{on:f,emit:E,off:b}=sr;return{on:x=>f(l,x),emit:x=>E(l,x),off:x=>b(l,x)}},pt=l=>(f,E)=>{const{getState:b,setState:x,subscribe:M,unsubscribe:V,clean:W}=l;return E!==void 0&&x({[f]:E},!0),{getState:()=>b(f),setState:(P,R)=>x({[f]:P},R),subscribe:P=>M(f,P),unsubscribe:()=>V(f),clean:()=>W(f)}};const At=bt();var vt=pt(At);const ur=Xt("push-emitter"),lt=Xt("replace-emitter"),St=vt("route-store"),cr=Re(),Lt=bt(),dr=Xe(Lt);var mt=()=>![typeof window,typeof document].includes("undefined"),u=l=>{if(!mt())return;const f=document.createElement("div");return f.innerHTML=l,f.children[0]},v=Object.defineProperty,C=(l,f,E)=>f in l?v(l,f,{enumerable:!0,configurable:!0,writable:!0,value:E}):l[f]=E,I=(l,f,E)=>(C(l,typeof f!="symbol"?f+"":f,E),E);class O extends a().Component{constructor(){super(...arguments),I(this,"state",{error:null})}static getDerivedStateFromError(f){return{error:f}}componentDidCatch(f,E){const{errorReport:b}=this.props;typeof b=="function"&&b({error:f,info:E.componentStack})}render(){const{error:f}=this.state,{fallback:E,children:b}=this.props;return f?E(f):b}}var J=({children:l,report:f})=>{var E;const b=(0,g.useRef)();return(E=b.current)!=null&&E.state&&(b.current.state.error=null),(0,Z.jsx)(O,{ref:b,fallback:(x,M)=>me({error:x,info:M}),errorReport:f,children:l})},fe=Q(748),ce=Q.n(fe),ne=Q(306),$e=Q.n(ne),st=Q(736),wt=Q.n(st),xt=Q(567),Le=Q.n(xt),Bt=Q(706),$t=Q.n(Bt),kt=Q(62),yt=Q.n(kt),nt=Q(201),We={};We.styleTagTransform=yt(),We.setAttributes=Le(),We.insert=wt().bind(null,"head"),We.domAPI=$e(),We.insertStyleElement=$t();var Yr=ce()(nt.Z,We),Fr=nt.Z&&nt.Z.locals?nt.Z.locals:void 0,Jt=({global:l,absolute:f})=>(0,Z.jsx)("div",{className:`spinner${l?" global":""}${f?" absolute":""}`,children:(0,Z.jsx)("figure",{className:"spinning"})}),gr=()=>{const l=(0,g.useRef)([]);return(0,g.useEffect)(()=>()=>{l.current.map(f=>f.cancelFn()),l.current=[]},[]),{cancelablePromise:(0,g.useCallback)((f,E=!0)=>{const b=z(f,E);return l.current.indexOf(b)===-1&&l.current.push(b),b.promiseFn},[])}},br=(l={})=>{const{cancelablePromise:f}=gr(),[E,b]=(0,g.useState)(l),x=(0,g.useRef)({}),M=(0,g.useRef)({}),V=(0,g.useCallback)((P=null)=>{Array.isArray(P)&&P.length?P.map(R=>x.current[R]=l[R]):x.current=l},[]),W=(0,g.useCallback)((P,R,ie=!1)=>{const we=Object.keys(P),be=JSON.stringify(we.sort());if(!M.current[be]){M.current[be]=!0,ie&&V(Array.isArray(ie)?ie:we),we.map(oe=>{x.current[oe]||(x.current[oe]={}),x.current[oe].pending=!0}),b({...x.current});for(let oe=0,ve=we.length;oe<ve;oe++){const Oe=we[oe];f(P[Oe]).then(ue=>{let{result:ee,errMsg:ke}=ue;oe===ve-1&&(M.current[be]=!1),typeof R=="function"&&(ee=R(ee)||ee),x.current[Oe]={...ee,pending:!1},ke===!1&&b({...x.current})}).catch(ue=>{throw oe===ve-1&&(M.current[be]=!1),x.current[Oe]={error:ue,pending:!1},b({...x.current}),ue})}}},[]);return[E,W,V]};const Kt=l=>Object.keys(l).length;var vr=l=>{const{Comp:f,restResolve:E,loadPromise:b,params:x,children:M}=l,[V,W]=br(),[P,R]=br();return(0,g.useEffect)(()=>{Kt(E)&&W(E),Kt(b)&&R(b)},[E,b]),(0,g.useEffect)(()=>{const ie=Kt(V);ie&&ie===Kt(E)&&x.store.setState(V)},[V]),(0,Z.jsx)(f,{...x,...V,...P,children:M})};const wr=l=>l===!1?null:y(l)?l:q(l)?(0,Z.jsx)(l,{}):(0,Z.jsx)(Jt,{}),kr=({Loading:l,ErrorBoundary:f,loadedComp:E})=>{const b=(0,Z.jsx)(g.Suspense,{fallback:wr(l),children:E});return f===!1?b:q(f)?(0,Z.jsx)(f,{children:b}):(0,Z.jsx)(J,{children:b})};var fr=({Comp:l,routerProps:f,children:E})=>{const{params:b,...x}=f,{loading:M,errorBoundary:V,...W}=b,P=(0,Z.jsx)(vr,{Comp:l,...x,params:W,children:E});return kr({Loading:M,ErrorBoundary:V,loadedComp:P})};const hr={},zr=(l,f,E)=>{const b={},x={};return w(l)?(Object.keys(l).map(M=>{const V=f.getState(M);V==null?x[M]=l[M](E):b[M]=V}),{cachedResolve:b,restResolve:x}):{cachedResolve:b,restResolve:x}},Qt=(l,f)=>{if(!w(l))return{};const E={};return Object.keys(l).map(b=>E[b]=l[b](f)),E},pr=(l,f,E)=>G(E)?E.then(b=>{var x;return fr({Comp:l,routerProps:f,children:(x=b.default)!=null?x:b})}):fr({Comp:l,routerProps:f,children:E});var Tr=l=>{const{current:f,menu:E,...b}=l,x=f.map(W=>{const{component:P,resolve:R,loadData:ie,loading:we,errorBoundary:be,icon:oe,...ve}=W;return ve}),M=[...f].filter(W=>W.component),V=(W=0)=>{if(!M.length)return null;const P=M.shift(),{component:R,resolve:ie,loadData:we,icon:be,key:oe,...ve}=P;if(typeof R=="function"||G(R)){const Oe=ve.path;let ue=hr[Oe];const{cachedResolve:ee,restResolve:ke}=zr(ie,b.store,ve),Be={loadPromise:Qt(we,ve),restResolve:ke,params:{current:x,...b,...ve,...ee}},De=V(W+1);if(ue)return pr(ue,Be,De);try{ue=R(),ue=y(ue)?R:ue}catch(Ze){ue=R}return G(ue)?ue.then(Ze=>{var qe;return ue=(qe=Ze.default)!=null?qe:Ze,hr[Oe]=ue,pr(ue,Be,De)}):(hr[Oe]=ue,pr(ue,Be,De))}return typeof R=="string"?u(R):R};return V()},Nr=l=>{const[f,E]=(0,g.useState)(l),[b,x]=(0,g.useState)(),[M,V]=(0,g.useState)(),W=(0,g.useRef)(),P=(0,g.useRef)(),R=(0,g.useRef)(),ie=(0,g.useRef)(),we=()=>{typeof W.current=="function"&&(W.current({cancel:Ye.cancelMsg}),W.current=null)},be=(0,g.useCallback)(ee=>{typeof ee=="function"?E(ke=>({...ke,...ee(ke)})):w(ee)&&E(ke=>({...ke,...ee}))},[]),oe=(ee,ke="pushState")=>{const{basepath:Be,browserRouter:De}=ie.current,Ze=R.current,{path:qe,params:Et}=Gt(ee,Be,De,Ze);qe!==Ze&&ue({inputPath:qe,inputParams:Et},()=>history[ke](ee==null?void 0:ee.state,"",qe))},ve=(0,g.useCallback)(ee=>oe(ee),[]),Oe=(0,g.useCallback)(ee=>oe(ee,"replaceState"),[]),ue=(0,g.useCallback)(({inputPath:ee="",inputParams:ke={}},Be)=>{const De=+new Date,{browserRouter:Ze,childKey:qe,idKey:Et,title:zt,routers:it,beforeRender:tr,afterRender:Zt,basepath:Tt,allowedNotFound:ut,...mr}=ie.current;if(!ee){const{path:Qe,params:Nt}=Rt(Ze);ee=Qe,ke={...ke,...Nt}}new Promise((Qe,Nt)=>{it!=null&&it.length||Nt("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),ee!==R.current&&typeof tr=="function"?tr({path:ee,params:ke,prevPath:R.current},Qe,Nt):Qe()}).then(Qe=>{var Nt,rr;if(Qe===!1)return;const xr=Qe==null?void 0:Qe.path;if(xr&&Je(Tt,xr,Ze)!==ee){Oe(Qe);return}P.current=(Nt=P.current)!=null?Nt:ee;const{redirect:It,current:_t,menu:Dr}=Y(A(it),ee.split("?")[0],ke,qe,Et);if(It){if(ut&&It==="/404"&&(typeof ut=="boolean"||typeof ut=="string"&&Ke(P.current,ut)||c(ut)&&ut.find(jr=>Ke(P.current,jr))))return;if(c(It)){console.error(`\u522B\u95F9\uFF0C[${[ee,...It].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}ve({path:It,exact:It!=="/404"});return}Be==null||Be(),(ee==null?void 0:ee.split("?")[0])!==((rr=R.current)==null?void 0:rr.split("?")[0])&&Pt(),qt(_t,zt);const Yt={eventBus:cr,store:Lt,useStore:dr,...mr,updateRouter:be,router:{push:ve,replace:Oe},current:_t,menu:Dr,inputPath:P.current,prevPath:R.current,basepath:Tt,title:zt,history:ot};St.setState({...Yt,browserRouter:Ze});const Ct=Tr(Yt);if(R.current=ee,P.current=null,we(),G(Ct)){const{promiseFn:jr,cancelFn:Pr}=z(Ct,{delay:Ye.delay,msg:{timeout:Ye.timeoutMsg}});return W.current=Pr,V(!0),jr.then(or=>{W.current=null;const{result:Ar,errMsg:nr}=or,Sr=nr===!1?Ar:nr!=null&&nr.timeout?me({error:{errMsg:`${ee} ${nr.timeout}`}}):null;Sr&&(V(!1),ht(Zt,_t.slice(-1)[0],De),x(Sr))}).catch(or=>{throw W.current=null,V(!1),ht(Zt,_t.slice(-1)[0],De),x(me({error:or})),or})}ht(Zt,_t.slice(-1)[0],De),x(Ct)}).catch(Qe=>{throw x(me({error:Qe})),Qe})},[]);return(0,g.useEffect)(()=>{const{childKey:ee="children",idKey:ke="path",browserRouter:Be=!1,routers:De=[],basepath:Ze="",exact:qe=!1,inputPath:Et="",inputParams:zt={},...it}=f,tr=B(Ze),Zt=lr(A(De),Be,ee,ke,tr,qe);ie.current={...it,childKey:ee,idKey:ke,browserRouter:Be,routers:Zt,basepath:tr};const Tt=Be?"popstate":"hashchange",ut=()=>ue({});return ue({inputPath:Et,inputParams:zt}),ur.on(ve),lt.on(Oe),window.addEventListener(Tt,ut,!1),()=>{we(),ur.off(ve),lt.off(Oe),window.removeEventListener(Tt,ut,!1)}},[f]),{updateRouter:be,output:b,loading:M}},Mt=l=>{const{to:f,onClick:E,preventDefault:b,stopPropagation:x=!0,exact:M=!0,target:V,...W}=l,P=()=>{const R=typeof f=="string"?{exact:M,path:f}:{exact:M,...f};ur.emit(R)};return R=>{var ie;if(R.preventDefault(),x&&R.stopPropagation(),!(W!=null&&W.disabled)){if(!b){if(V){const{browserRouter:we}=St.getState(),be=typeof f=="string"?f:(ie=f==null?void 0:f.path)!=null?ie:"",oe=ft(f==null?void 0:f.query),ve=we||be.indexOf("#/")>-1||Ne(be);window==null||window.open(`${ve?"":"#"}${be}${oe}`,V);return}P()}typeof E=="function"&&E()}}},Wt=Q(982),Ft={};Ft.styleTagTransform=yt(),Ft.setAttributes=Le(),Ft.insert=wt().bind(null,"head"),Ft.domAPI=$e(),Ft.insertStyleElement=$t();var Ir=ce()(Wt.Z,Ft),er=Wt.Z&&Wt.Z.locals?Wt.Z.locals:void 0;const Er=l=>{if(!l)return er.link;const f=l.trim().split(" ").filter(Boolean),E=f.findIndex(b=>b==="active");return E>-1?(f.splice(E,1),[er.link,er.active,...f].join(" ")):[...f,er.link].join(" ")};var Cr=l=>{const{to:f,onClick:E,preventDefault:b,stopPropagation:x,exact:M,target:V,className:W,...P}=l;return(0,Z.jsx)("span",{onClick:Mt(l),className:Er(W),...P})};const Or=()=>St.getState()}(),re}()})},2445:function(Dt,pe,He){(function(_e,Se){Dt.exports=Se(He(7378))})(this,function(_e){return function(){"use strict";var Se={53:function(g,a,m){var c,w=m(899),y=Symbol.for("react.element"),j=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function q(G,z,B){var Z,te={},me=null,Ee=null;B!==void 0&&(me=""+B),z.key!==void 0&&(me=""+z.key),z.ref!==void 0&&(Ee=z.ref);for(Z in z)p.call(z,Z)&&!A.hasOwnProperty(Z)&&(te[Z]=z[Z]);if(G&&G.defaultProps)for(Z in z=G.defaultProps,z)te[Z]===void 0&&(te[Z]=z[Z]);return{$$typeof:y,type:G,key:me,ref:Ee,props:te,_owner:$.current}}c=j,a.jsx=q,c=q},458:function(g,a,m){g.exports=m(53)},899:function(g){g.exports=_e}},ge={};function Q(g){var a=ge[g];if(a!==void 0)return a.exports;var m=ge[g]={exports:{}};return Se[g](m,m.exports,Q),m.exports}(function(){Q.d=function(g,a){for(var m in a)Q.o(a,m)&&!Q.o(g,m)&&Object.defineProperty(g,m,{enumerable:!0,get:a[m]})}})(),function(){Q.o=function(g,a){return Object.prototype.hasOwnProperty.call(g,a)}}(),function(){Q.r=function(g){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})}}();var re={};return function(){Q.r(re),Q.d(re,{createContainer:function(){return a},useAsync:function(){return $},useCancelablePromise:function(){return p},useClickAway:function(){return G},useDebounce:function(){return B},useDelayState:function(){return me},useEleResize:function(){return Ue},useEvent:function(){return bt},useFirstMounted:function(){return Z},useInterval:function(){return Xe},usePrevious:function(){return at},useRaf:function(){return Fe},useScroll:function(){return le},useSearch:function(){return Pt},useStateFromProps:function(){return qt},useStore:function(){return Xt},useTime:function(){return cr},useUpdate:function(){return dr},useUpdateEffect:function(){return te},useWinResize:function(){return mt}});var g=Q(899),a=u=>(v,C)=>{const[I,O]=(0,g.useState)(()=>{const ne=u==null?void 0:u.getState(v);return ne!==void 0?ne:(C!==void 0&&(u==null||u.setState({[v]:C},!0)),C)}),J=(0,g.useCallback)(ne=>u==null?void 0:u.setState({[v]:typeof ne=="function"?ne(u==null?void 0:u.getState(v)):ne}),[]),fe=(0,g.useCallback)(ne=>u==null?void 0:u.subscribe(v,ne),[]),ce=(0,g.useCallback)((ne=ne)=>u==null?void 0:u.clean(ne),[]);return(0,g.useEffect)(()=>{u==null||u.subscribe(v,ne=>O(ne))},[]),[I,J,fe,ce]},m=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),c=u=>m(u)==="object",w=u=>m(u)==="function",y=u=>m(u)==="promise"||c(u)&&w(u.then),j=(u,v=12e4,C="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!y(u))return{};let I=null,O=null;return{promiseFn:new Promise((J,fe)=>{I=(ce="canceled")=>{clearTimeout(O),J({canceled:!0,errMsg:ce})},v&&(v=typeof v!="number"?12e4:v,O=setTimeout(()=>I(C),v)),u.then(ce=>{clearTimeout(O),J({result:ce,errMsg:!1})}).catch(ce=>{clearTimeout(O),fe(ce)})}),cancelFn:I}},p=()=>{const u=(0,g.useRef)([]);return(0,g.useEffect)(()=>()=>{u.current.map(v=>v.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,g.useCallback)((v,C=!0)=>{const I=j(v,C);return u.current.indexOf(I)===-1&&u.current.push(I),I.promiseFn},[])}},$=(u={})=>{const{cancelablePromise:v}=p(),[C,I]=(0,g.useState)(u),O=(0,g.useRef)({}),J=(0,g.useRef)({}),fe=(0,g.useCallback)((ne=null)=>{Array.isArray(ne)&&ne.length?ne.map($e=>O.current[$e]=u[$e]):O.current=u},[]),ce=(0,g.useCallback)((ne,$e,st=!1)=>{const wt=Object.keys(ne),xt=JSON.stringify(wt.sort());if(!J.current[xt]){J.current[xt]=!0,st&&fe(Array.isArray(st)?st:wt),wt.map(Le=>{O.current[Le]||(O.current[Le]={}),O.current[Le].pending=!0}),I({...O.current});for(let Le=0,Bt=wt.length;Le<Bt;Le++){const $t=wt[Le];v(ne[$t]).then(kt=>{let{result:yt,errMsg:nt}=kt;Le===Bt-1&&(J.current[xt]=!1),typeof $e=="function"&&(yt=$e(yt)||yt),O.current[$t]={...yt,pending:!1},nt===!1&&I({...O.current})}).catch(kt=>{throw Le===Bt-1&&(J.current[xt]=!1),O.current[$t]={error:kt,pending:!1},I({...O.current}),kt})}}},[]);return[C,ce,fe]},A=(u,v)=>Object.prototype.hasOwnProperty.call(u!=null?u:{},v),q=u=>A(u,"current"),G=(u,v,C="click")=>{(0,g.useEffect)(()=>{const I=J=>{const fe=q(u)?u.current:u;(fe==null?void 0:fe.contains)&&!fe.contains(J.target)&&v(J)},O=typeof C=="string"?[C]:C;return O.map(J=>{document.addEventListener(J,I,!1)}),()=>{O.map(J=>{document.removeEventListener(J,I,!1)})}},[u,v,C])},z=(u=()=>{},v=60)=>{let C=null;return function(...I){clearTimeout(C),C=setTimeout(()=>u.apply(this,I),v)}},B=(u,v=60)=>(0,g.useMemo)(()=>z(u,v),[v]),Z=()=>{const u=(0,g.useRef)(!0);return u.current?(u.current=!1,!0):!1},te=(u,v=[])=>{const C=Z();(0,g.useEffect)(()=>{if(!C)return u()},v)},me=(u,v=450)=>{const[C,I]=(0,g.useState)(u);return te(()=>{let O;return u||v===0?I(u):O=setTimeout(()=>I(u),v),()=>O&&clearTimeout(O)},[u]),[C,I]},Ee=()=>![typeof window,typeof document].includes("undefined"),tt=u=>m(u).indexOf("element")>-1,rt=(u=null)=>{var v,C;return Ee()?tt(u)?{width:u.clientWidth,height:u.clientHeight}:{width:(v=window.innerWidth)!=null?v:document.documentElement.clientWidth,height:(C=window.innerHeight)!=null?C:document.documentElement.clientHeight}:{width:0,height:0}};const Y=(u,v)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const C=document.createElement("object");return C.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),C.setAttribute("class","resize-sensor"),C.onload=()=>{C.contentDocument.defaultView.addEventListener("resize",v,!1),v()},C.type="text/html",u.appendChild(C),C.data="about:blank",C};var Re=(u,v=60)=>{if(!Ee())return;u=q(u)?u.current:u!=null?u:document.body;let C,I=[];const O=z(()=>I.map(ne=>ne(u)),v),J=ne=>{C||(C=Y(u,O)),I.indexOf(ne)===-1&&I.push(ne)},fe=ne=>{const $e=I.indexOf(ne);$e!==-1&&I.splice($e,1),I.length===0&&C&&ce()},ce=()=>{C&&C.parentNode&&(C.contentDocument&&C.contentDocument.defaultView.removeEventListener("resize",O,!1),C.parentNode.removeChild(C),C=void 0,I=[])};return{element:u,bind:J,unbind:fe,destroy:ce}},Fe=(u={})=>{const v=(0,g.useRef)(0),[C,I]=(0,g.useState)(u),O=(0,g.useCallback)(J=>{cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>I(J))},[]);return(0,g.useEffect)(()=>()=>cancelAnimationFrame(v.current),[]),[C,O]},Ue=(u=null,v=60)=>{const C=q(u)?u.current:u,{bind:I,destroy:O}=Re(C,v),[J,fe]=Fe(rt(C));return(0,g.useEffect)(()=>(I(()=>C&&fe(rt(C))),()=>O()),[C]),J},bt=u=>{const v=(0,g.useRef)(null);return(0,g.useLayoutEffect)(()=>{v.current=u}),(0,g.useCallback)(v.current,[])},Xe=(u,v)=>{const C=(0,g.useRef)();(0,g.useEffect)(()=>{C.current=u},[u]),(0,g.useEffect)(()=>{if(v){const I=setInterval(()=>C.current(),v);return()=>clearInterval(I)}},[v])},at=u=>{const v=(0,g.useRef)();return(0,g.useEffect)(()=>{v.current=u},[u]),v.current},_=(u=null)=>{var v,C,I,O;return Ee()?tt(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:(C=(v=window.pageXOffset)!=null?v:document.documentElement.scrollLeft)!=null?C:document.body.scrollLeft,top:(O=(I=window.pageYOffset)!=null?I:document.documentElement.scrollTop)!=null?O:document.body.scrollTop}:{left:0,top:0}},le=(u=null)=>{const[v,C]=Fe(_(u));return(0,g.useEffect)(()=>{const I=()=>C(_(u)),O=tt(u)?u:window;return O.addEventListener("scroll",I,{capture:!1,passive:!0}),()=>O.removeEventListener("scroll",I)},[u]),v},K=u=>m(u)==="array",Ce=u=>K(u)&&!!u.length,ze=(u,v,C=[],I=!1,O=null)=>Ce(u)?v?(C=typeof C=="string"?C.split(","):C,u.filter(J=>(C=C.length>0?C:Object.keys(J),C.filter(fe=>{const ce=J[fe];if(ce==null)return!1;if(I)return ce===v;const ne=new RegExp(v,"gi"),$e=ce.toString().match(ne);return $e&&O&&(J[fe]=O(ce.toString().replace(ne,`<span style="background-color:yellow">${$e[0]}</span>`),{display:"inline-block"})),$e}).length))):u:[],dt=(u,v="id")=>{if(!Ce(u))return u;const C=[],I=[];return u.map(O=>{const J=c(O)?O[v]:O;I.includes(J)||(I.push(J),C.push(O))}),C},Ye=u=>(u==null?void 0:u.$$typeof)&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",ot=u=>u==null?void 0:u.__v_isVNode;const Ne=u=>{if(!K(u)&&!c(u))return u;const v=K(u)?[]:{};for(const C in u)if(A(u,C)){const I=u[C];v[C]=Ye(I)||ot(I)||typeof I!="object"?I:I!==u?Ne(I):"cyclic"}else Object.setPrototypeOf(v,{[C]:u[C]});return v};var Ge=Ne;const Je=u=>(v,C="children")=>{if(!Array.isArray(v))return v;const I=Ge(v),O=J=>{const fe=[];return J.map(ce=>{if(Ce(ce[C])){const ne=O(ce[C])||[];ce[C]=ne,ne.length>0&&fe.push(ce)}}),u(J,fe)};return O(I)};var lr=(u,v,C,I="name",O="id",J="children",fe=!1)=>Je((ce,ne)=>dt([...ze(ce,v,I,fe,C),...ne],O))(u,J),ft=Q(458),jt=(u,v)=>(0,ft.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...v}),Pt=(u=null,v=jt)=>{const[C,I]=(0,g.useState)(u),O=(0,g.useCallback)((...J)=>{const[fe,ce,...ne]=J;if(!ce)I(null);else{J=[fe,ce,v,...ne];const $e=lr(...J);I($e)}},[]);return[C,O]},qt=u=>{const[v,C]=(0,g.useState)(u);return(0,g.useEffect)(()=>C(u),[u]),[v,C]},Rt=()=>{const u={};return{on:(v,C)=>{u[v]||(u[v]=[]),u[v].indexOf(C)===-1&&u[v].push(C)},emit:(v,C)=>{u[v]&&u[v].map(I=>I(C))},off:(v,C=null)=>{if(u[v]){if(typeof C!="function")return u[v]=[];const I=u[v].indexOf(C);I>-1&&u[v].splice(I,1)}}}};const ht=u=>{const v={};for(let C in u)A(u,C)||(v[C]=u[C]);return v};var Gt=(u,v)=>{if(!c(u))return v;if(!c(v))return u;const C={...ht(u),...ht(v)},I={...u,...v};return Object.keys(C).map(O=>{Object.setPrototypeOf(I,{[O]:C[O]})}),I},Ke=()=>{const{on:u,emit:v,off:C}=Rt(),I={};return{getState:O=>Ge(I[O]),setState:(O,J=!1)=>{if(typeof O=="function"&&(O=O(Ge(I))),!c(O))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const fe=Ge(O);Object.keys(fe).map(ce=>{const ne=I[ce],$e=fe[ce],st=c($e)&&c(ne)?Gt(ne,$e):$e;!J&&v(ce,st),I[ce]=st})},subscribe:(O,J)=>(u(O,J),()=>C(O,J)),unsubscribe:C,clean:O=>{typeof O=="string"?I[O]=void 0:Array.isArray(O)?O.map(J=>I[J]=void 0):Object.keys(I).map(J=>I[J]=void 0)}}};const sr=Ke();var Xt=a(sr);const pt=u=>u<10?"0"+u:u;var At=(u=new Date)=>{const v=new Date(u),C=v.getFullYear(),I=v.getDay(),O=pt(v.getMonth()+1),J=pt(v.getDate()),fe=pt(v.getHours()),ce=pt(v.getMinutes()),ne=pt(v.getSeconds());return[C,O,J,fe,ce,ne,I]};const vt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],ur=(u,v,C="-")=>u.replace(new RegExp(C,"g"),v);var lt=(u=new Date,v=["-","-"," ",":",":",""],C=vt)=>{const I=At(u);let O="";return v.map((J,fe)=>{var ce;return O+=(fe===6?C[I[fe]]:(ce=I[fe])!=null?ce:"")+J}),O};const St=()=>lt(new Date,["-","-"," ",":",":"," ",""]);var cr=()=>{const[u,v]=(0,g.useState)("");return Xe(()=>{v(St())},1e3),[u]};const Lt=u=>++u;var dr=()=>{const[,u]=(0,g.useState)(0);return(0,g.useCallback)(()=>u(Lt),[])},mt=()=>{const[u,v]=Fe(rt());return(0,g.useEffect)(()=>{const C=()=>v(rt());return window.addEventListener("resize",C,!1),()=>window.removeEventListener("resize",C,!1)},[]),u}}(),re}()})},5820:function(Dt){(function(pe,He){Dt.exports=He()})(this,function(){return function(){"use strict";var pe={};(function(){pe.d=function(e,t){for(var r in t)pe.o(t,r)&&!pe.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){pe.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){pe.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();var He={};pe.r(He),pe.d(He,{a2o:function(){return _e},addAtNext:function(){return re},addAtPos:function(){return g},addClass:function(){return m},addDays:function(){return c},addHours:function(){return w},addMonths:function(){return y},addNodes:function(){return j},addScript:function(){return $},addStyle:function(){return A},addYears:function(){return q},arr2Tree:function(){return Ee},arr2TreeById:function(){return tt},arr2TreeByPath:function(){return rt},arr2obj:function(){return G},arr2str:function(){return me},backTop:function(){return le},base2Ten:function(){return K},baseConversion:function(){return ze},baseFetch:function(){return ft},cacheData:function(){return sr},cancelablePromise:function(){return Ge},changePos:function(){return Xt},classifyArr:function(){return pt},clone:function(){return Ke},compareVersion:function(){return At},compose:function(){return vt},copyToClipboard:function(){return ur},createContainer:function(){return lt},createElement:function(){return cr},createNode:function(){return I},createStore:function(){return ce},createTextElement:function(){return St},curry:function(){return ne},cyclic:function(){return jt},dash2camel:function(){return $e},debounce:function(){return st},deleteNodes:function(){return wt},deviceType:function(){return xt},dlfile:function(){return $t},dropInfo:function(){return kr},editNodes:function(){return fr},emitter:function(){return O},equal:function(){return qt},escapeHTML:function(){return hr},eventBus:function(){return Qt},fetcher:function(){return Nr},filter:function(){return Wt},filterList:function(){return er},findMax:function(){return Er},firstUpper:function(){return Cr},fixFileSizeUnit:function(){return Or},fixPath:function(){return l},fixRoute:function(){return f},fixSize:function(){return E},fixTimeUnit:function(){return b},flatten:function(){return M},formatNum:function(){return V},formatPassTime:function(){return R},formatTime:function(){return be},fullScreen:function(){return ke},getElementsSize:function(){return gr},getExplore:function(){return De},getLeaveTime:function(){return zt},getMeta:function(){return Zt},getMonthDays:function(){return Tt},getOffset:function(){return ut},getOsInfo:function(){return Qe},getParams:function(){return Nt},getPosition:function(){return yt},getRelative:function(){return It},getSelected:function(){return _t},getTextSize:function(){return Dr},getTime:function(){return P},getTouchPosition:function(){return xr},getType:function(){return Se},getValue:function(){return jr},getViewportSize:function(){return kt},hasClass:function(){return Pr},hasProp:function(){return Re},hex2rgba:function(){return or},imgtocanvas:function(){return Ar},isArray:function(){return ge},isAsync:function(){return Ne},isBrowser:function(){return p},isDate:function(){return nr},isElement:function(){return a},isError:function(){return Sr},isFunction:function(){return ot},isIE:function(){return Vr},isObject:function(){return z},isReactComp:function(){return Hr},isReactEle:function(){return Rt},isRef:function(){return Fe},isRegExp:function(){return Ur},isTouch:function(){return rr},isUrl:function(){return qr},isValidArr:function(){return Mt},isValidObj:function(){return Gr},isVueEle:function(){return ht},json2str:function(){return $r},loadBase64:function(){return ir},loadImage:function(){return Kr},loop:function(){return Qr},matchedStr:function(){return Xr},memoize:function(){return Jr},merge:function(){return S},mergeArr:function(){return i},mergeClass:function(){return T},mergeObj:function(){return h},mergeOwnProp:function(){return fe},message:function(){return he},monthDate:function(){return de},moveNodes:function(){return Pe},obj2arr:function(){return Ae},obj2str:function(){return Z},omit:function(){return xe},once:function(){return Ve},padStart:function(){return Te},params2data:function(){return Ye},params2str:function(){return dt},pick:function(){return Ie},promisify:function(){return ct},randColor:function(){return Vt},randItem:function(){return _r},randNum:function(){return ar},randPercent:function(){return Ht},randStr:function(){return Rr},randTrue:function(){return Lr},removeClass:function(){return N},resize:function(){return gt},rgba2hex:function(){return Br},rmUnit:function(){return oo},scheduler:function(){return ao},scrollIsBottom:function(){return lo},scrollTo:function(){return Ue},scrollToAnchor:function(){return so},scrollTop:function(){return Y},selectedHandle:function(){return Q},session:function(){return uo},setMeta:function(){return co},setStyle:function(){return We},sleep:function(){return Jt},sleepSync:function(){return Fr},sort:function(){return fo},sortObj:function(){return ho},storage:function(){return po},store:function(){return xo},str2Html:function(){return nt},str2code:function(){return yo},sysLang:function(){return go},template:function(){return bo},ten2Base:function(){return Ce},throttle:function(){return vo},timeGap:function(){return Co},timeInterval:function(){return to},timestamp:function(){return Le},toggleClass:function(){return jo},traverItem:function(){return x},traverList:function(){return So},unescapeHTML:function(){return $o},unique:function(){return Ft},updateId:function(){return Fo},updateNode:function(){return C},updateTreeNodes:function(){return zo},uuidv4:function(){return Bt},validObj:function(){return To},watchScreen:function(){return No},watermark:function(){return Io},weekDate:function(){return Oo},wrapPromise:function(){return Do}});var _e=(e,t="key",r="value")=>{const o={};return(e||[]).map(n=>o[n[t]]=n[r]),o},Se=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),ge=e=>Se(e)==="array",Q=e=>(t,r,o="id",n="children")=>{if(!ge(t))return null;const d=(k,F="")=>{for(let D=0,U=k.length;D<U;D++){const ye=k[D];if(ye[o]===r)return e(k,D,F)||k[D];if(ge(ye[n])){const je=d(ye[n],ye[o]);if(je)return je}}};return d(t),t},re=(e,t,r,o="id",n="children")=>Q((d,k)=>d.splice(k,0,r))(e,t,o,n),g=(e,t,r,o,n="id",d="children")=>Q((k,F)=>{const D=k[F];D.children?D.children.splice(o,0,r):D.children=[r]})(e,t,n,d),a=e=>Se(e).indexOf("element")>-1,m=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),n=[...new Set([...r,...o])];e.className=n.join(" ")},c=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},w=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},y=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},j=(e,t,r,o="id",n="children")=>Q((d,k)=>{const F=d[k];return F[n]=[...F[n]||[],...r],F})(e,t,o,n),p=()=>![typeof window,typeof document].includes("undefined"),$=e=>{if(p())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},A=(e,t)=>{if(p())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===t))r();else{const n=document.createElement("style");n.onerror=d=>o(new Error(`Failed to load '${t}' style`)),n.onload=r,n.innerHTML=e,n.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===e))r();else{const n=document.createElement("link");n.onerror=d=>o(new Error(`Failed to load '${e}'`)),n.onload=r,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},q=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},G=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:n})=>r[o]=n),r},z=e=>Se(e)==="object";const B=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,z(o)?t+=`${r}=${B(o)}`:Array.isArray(o)?t+=`${r}=${me(o)}`:t+=`${r}=${o}`}),`{${t}}`};var Z=B;const te=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,z(r)?t+=Z(r):Array.isArray(r)?t+=te(r):t+=`${r}`}),`[${t}]`};var me=te,Ee=e=>(t,r="id",o="children",n=-1)=>{if(!ge(t))return t;const d={},k=t.map(F=>F[r]);return[...t].map(F=>{var D;const U={...F},{[r]:ye}=U;if(ye!=null){let{parentId:je}=U;je==null&&(je=(D=e==null?void 0:e(U))!=null?D:n,U.parentId=je),d[ye]||(d[ye]=[]),U[o]=d[ye],d[je]||(d[je]=[]),d[n]||(d[n]=[]),k.includes(je)?d[je].push(U):d[n].push(U)}}),d[n]},tt=(e,t="id",r="children",o=-1)=>Ee(n=>{const d=n[t].match(/\S+(?=-\S+)/);return(d==null?void 0:d[0])||o})(e,t,r,o),rt=(e,t="path",r="children",o=null)=>Ee(n=>{var d,k,F,D;const U=n[t],ye=U.match(/.*\/[^:/]+\/:[^/]+/);return ye?(k=(d=ye[0].match(/(.*)\/:+/))==null?void 0:d[1])!=null?k:o:(D=(F=U.match(/(.*)\/+/))==null?void 0:F[1])!=null?D:o})(e,t,r,o),Y=()=>{var e,t;return p()&&((t=(e=window.pageYOffset)!=null?e:document.documentElement.scrollTop)!=null?t:document.body.scrollTop)},Re=(e,t)=>Object.prototype.hasOwnProperty.call(e!=null?e:{},t),Fe=e=>Re(e,"current"),Ue=(e=0,t)=>{var r;!p()||(t=Fe(t)?t.current:t!=null?t:window,(r=t.scrollTo)==null||r.call(t,{top:e,behavior:"smooth"}))},bt=`.huxy-totop-bar {
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
}`;const Xe=()=>document.getElementsByClassName("huxy-totop-bar")[0],at=e=>{if(Xe())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>Ue(),!1),t},_=()=>{const e=Xe();e&&document.body.removeChild(e)};var le=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!p())return;A(bt,"huxy-backtop-css");const r=()=>{Y()>e?at(t):_()};return(()=>(document.addEventListener("scroll",r,!1),()=>{_(),document.removeEventListener("scroll",r,!1)}))()},K=(e=0,t=2)=>parseInt(String(e),t),Ce=(e=0,t=2)=>Number(e).toString(t),ze=(e=0,t=2,r=16)=>Ce(K(e,t),r),dt=e=>{if(!z(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const n=o>0?"&":"?";t.push(`${n}${r}=${e[r]}`)}),t.join("")},Ye=e=>{if(!z(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},ot=e=>Se(e)==="function",Ne=e=>Se(e)==="promise"||z(e)&&ot(e.then),Ge=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Ne(e))return{};let o=null,n=null;return{promiseFn:new Promise((d,k)=>{o=(F="canceled")=>{clearTimeout(n),d({canceled:!0,errMsg:F})},t&&(t=typeof t!="number"?12e4:t,n=setTimeout(()=>o(r),t)),e.then(F=>{clearTimeout(n),d({result:F,errMsg:!1})}).catch(F=>{clearTimeout(n),k(F)})}),cancelFn:o}};const Je=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>Ye(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>dt(e).slice(1)}],lr=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(n=>e[n]);if(o.length===1){const n=o[0],d=r?t:n;return d==="params"?{query:e[n]}:{result:e[n],type:d}}else if(o.length>1){const n=o.filter(k=>k!=="params").slice(-1)[0],d=r?t:n;return d==="params"?{query:e.params||e[n]}:{query:e.params,result:e[n],type:d}}};var ft=(e,t)=>r=>(o,n={})=>{const{headers:d,dataType:k,data:F,formData:D,form:U,params:ye,...je}=n,Me={data:F,formData:D,form:U,params:ye};let yr;const{query:Ut,result:ro,type:Po}=lr(Me,k)||{};if(!je.body&&ro){const Wr=Je.find(Zr=>Zr.type===Po);yr=Wr.headers,je.body=Wr.body(ro)}Ut&&(o=`${o}${dt(Ut)}`);const{promiseFn:Ao}=Ge(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...yr,...d},...je}),t);return Ao.then(({result:Wr,errMsg:Zr})=>e(Zr?{status:408,statusText:Zr}:Wr))},jt=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let n=!1;for(let d in o)Re(o,d)&&r(o[d])&&(o[d]="cyclic",n=!0);return n}return!1};return r(e)&&e};const Pt=(e,t)=>{const r=Se(e),o=Se(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(jt(e)&&jt(t))return Pt(e,t);for(let n in t)if(Re(e,n)!==Re(t,n)||!Pt(e[n],t[n]))return!1;return!0};var qt=Pt,Rt=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",ht=e=>e==null?void 0:e.__v_isVNode;const Gt=e=>{if(!ge(e)&&!z(e))return e;const t=ge(e)?[]:{};for(const r in e)if(Re(e,r)){const o=e[r];t[r]=Rt(o)||ht(o)||typeof o!="object"?o:o!==e?Gt(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var Ke=Gt,sr=(e=100)=>{const t=[];let r=-1;const o=d=>{var k,F;const D=t.length,U=Ke(d);return qt(U,(k=t[D-1])==null?void 0:k.data)?{index:r,length:D,data:(F=t[r])==null?void 0:F.data}:(t.push({data:U}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},n=(d=0)=>{var k;const F=t.length;return r+=d,r=r<0?0:r>F-1?F-1:r,{index:r,length:F,data:Ke((k=t[r])==null?void 0:k.data)}};return{record:o,cursor:n,jump:d=>{var k;return r=d,{index:r,length:t.length,data:Ke((k=t[r])==null?void 0:k.data)}},undo:()=>n(-1),redo:()=>n(1),getList:()=>Ke(t),clean:()=>{t.length=0,r=-1}}},Xt=(e,t,r)=>{if(!ge(e))return e;const o=e[t],n=e[r];return e.splice(t,1,n),e.splice(r,1,o),e},pt=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},At=(e,t,r=".")=>{const o=(D,U)=>D.split(U),n=o(e,r),d=o(t,r),k=n.length;let F=0;for(let D=0;D<k;D++)if(n[D]<d[D]){F=k-D;break}return F},vt=(...e)=>(...t)=>{const[...r]=e,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...t)},ur=e=>{if(!p())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},lt=e=>(t,r)=>{const{getState:o,setState:n,subscribe:d,unsubscribe:k,clean:F}=e;return r!==void 0&&n({[t]:r},!0),{getState:()=>o(t),setState:(D,U)=>n({[t]:D},U),subscribe:D=>d(t,D),unsubscribe:()=>k(t),clean:()=>F(t)}},St=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),cr=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:St(o))}});const Lt=e=>e.startsWith("on"),dr=e=>e!=="children"&&!Lt(e),mt=(e,t)=>r=>e[r]!==t[r],u=(e,t)=>r=>!(r in t),v=e=>{const t=Object.keys(e);return{eventProps:t.filter(Lt),propertyProps:t.filter(dr)}};var C=(e,t,r)=>{const{eventProps:o,propertyProps:n}=v(t),{eventProps:d,propertyProps:k}=v(r);o.filter(u(t,r)).map(F=>{const D=F.toLowerCase().slice(2);e.removeEventListener(D,t[F])}),n.filter(u(t,r)).map(F=>e[F]=""),k.filter(mt(t,r)).map(F=>e[F]=r[F]),d.filter(mt(t,r)).map(F=>{const D=F.toLowerCase().slice(2);e.addEventListener(D,r[F])})},I=e=>{if(!p())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return C(t,{},e.props),t},O=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return e[t]=[];const o=e[t].indexOf(r);o>-1&&e[t].splice(o,1)}}}};const J=e=>{const t={};for(let r in e)Re(e,r)||(t[r]=e[r]);return t};var fe=(e,t)=>{if(!z(e))return t;if(!z(t))return e;const r={...J(e),...J(t)},o={...e,...t};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},ce=()=>{const{on:e,emit:t,off:r}=O(),o={};return{getState:n=>Ke(o[n]),setState:(n,d=!1)=>{if(typeof n=="function"&&(n=n(Ke(o))),!z(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const k=Ke(n);Object.keys(k).map(F=>{const D=o[F],U=k[F],ye=z(U)&&z(D)?fe(D,U):U;!d&&t(F,ye),o[F]=ye})},subscribe:(n,d)=>(e(n,d),()=>r(n,d)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(d=>o[d]=void 0):Object.keys(o).map(d=>o[d]=void 0)}}},ne=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...n)=>r(...o,...n);return r},$e=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),st=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},wt=(e,t,r="id",o="children")=>Q((n,d)=>n.splice(d,1))(e,t,r,o),xt=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Le=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Bt=()=>{let e=Le();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},$t=(e,t)=>{if(p())if(t=t||Bt(),typeof e=="string")fetch(e).then(r=>r.blob()).then(r=>{const o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)});else{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)}},kt=(e=null)=>{var t,r;return p()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(r=window.innerHeight)!=null?r:document.documentElement.clientHeight}:{width:0,height:0}},yt=e=>{var t;if(p())return e=Fe(e)?e.current:e!=null?e:document.body,(t=e.getBoundingClientRect)==null?void 0:t.call(e)},nt=e=>{if(!p())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},We=(e,t={},r=!1)=>{!a(e)||Object.keys(t).map(o=>{e.style.setProperty(o,r?"":t[o])})};const Yr=(e=350)=>new Promise(t=>setTimeout(t,e)),Fr=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var Jt=Yr,gr=async(e,t=15)=>{if(!p())return;if(typeof e=="string"&&(e=nt(e)),e=Fe(e)?e.current:e,!a(e))return{};const r=e.cloneNode(!0);We(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await Jt(t);const o=yt(r);return e.parentNode.removeChild(r),o};const br=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Kt=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,vr=(e,t)=>{var r;t=`huxy-drop-arrow-${t}`;const o=(r=e.getAttribute("class"))!=null?r:"";br.test(o)?e.setAttribute("class",o.replace(Kt,t)):e.setAttribute("class",`${o} ${t}`)},wr=async(e,t,r)=>{const{left:o,right:n,top:d,bottom:k}=yt(e),{width:F,height:D}=kt(),{width:U,height:ye}=await gr(t);if(n<0||k<0||o>F||d>D)return{};if(r==="vertical"){const je={left:o+"px",top:k+10+"px",right:"auto",bottom:"auto"};let Me="lt";o+U>F&&(je.left=n-U+"px",Me="rt"),k+10+ye>D&&(je.top=d-10-ye+"px",Me=Me==="lt"?"lb":"rb"),We(t,je),vr(t,Me)}else{const je={left:n+10+"px",top:d+"px",right:"auto",bottom:"auto"};let Me="tl";n+10+U>F&&(je.left=o-10-U+"px",Me="tr"),d+ye>D&&(je.top=k-ye+"px",Me=Me==="tl"?"bl":"br"),We(t,je),vr(t,Me)}};var kr=(e,t,r="horizontal")=>{const o=st(wr),n=()=>o(e,t,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const d=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),We(t,{left:"",top:"",right:"",bottom:""})};return wr(e,t,r),d},fr=(e,t,r,o="id",n="children")=>Q((d,k)=>d[k]={...d[k],...r})(e,t,o,n),hr=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const zr=O();var Qt=e=>{const{on:t,emit:r,off:o}=zr;return{on:n=>t(e,n),emit:n=>r(e,n),off:n=>o(e,n)}};const pr=120*1e3,Tr=e=>e.json().then(t=>t);var Nr=(e=Tr,t=pr)=>(r="get")=>ft(e)((r||"get").toUpperCase()),Mt=e=>ge(e)&&!!e.length,Wt=(e,t,r=[],o=!1,n=null)=>Mt(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(d=>(r=r.length>0?r:Object.keys(d),r.filter(k=>{const F=d[k];if(F==null)return!1;if(o)return F===t;const D=new RegExp(t,"gi"),U=F.toString().match(D);return U&&n&&(d[k]=n(F.toString().replace(D,`<span style="background-color:yellow">${U[0]}</span>`),{display:"inline-block"})),U}).length))):e:[],Ft=(e,t="id")=>{if(!Mt(e))return e;const r=[],o=[];return e.map(n=>{const d=z(n)?n[t]:n;o.includes(d)||(o.push(d),r.push(n))}),r};const Ir=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=Ke(t),n=d=>{const k=[];return d.map(F=>{if(Mt(F[r])){const D=n(F[r])||[];F[r]=D,D.length>0&&k.push(F)}}),e(d,k)};return n(o)};var er=(e,t,r,o="name",n="id",d="children",k=!1)=>Ir((F,D)=>Ft([...Wt(F,t,o,k,r),...D],n))(e,d),Er=(e="")=>{var t;return(t=e.match(/\d+/g))==null?void 0:t.sort((r,o)=>o-r)[0]},Cr=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),Or=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},l=(e="")=>e.replaceAll("//","/"),f=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",E=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},b=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),n=e%3600,d=~~(n/60);return o<24?`${o}${t[2]}${d}${t[1]}${n%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},x=e=>(t,r="children")=>{if(!ge(t))return t;const o=(n,d=[])=>{n.map((k,F)=>{const D=ge(k[r]);if(k=e(k,d,F,D)||k,D){const{[r]:U,...ye}=k;o(U,[...d,{...ye,"@@index":F}])}})};return o(t),t},M=(e,t="children")=>{const r=[];return x(o=>{const{[t]:n,...d}=o;r.push(d)})(e,t),r},V=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const W=e=>e<10?"0"+e:e;var P=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),n=W(t.getMonth()+1),d=W(t.getDate()),k=W(t.getHours()),F=W(t.getMinutes()),D=W(t.getSeconds());return[r,n,d,k,F,D,o]},R=(e,t=new Date)=>{e=P(e),t=P(t);const r=t.y-e.y,o=t.m-e.m,n=t.d-e.d,d=t.h-e.h,k=t.M-e.M,F=new Date(t.y,t.m,0).getDate(),D=(U,ye,je,Me,yr)=>{const Ut="\u524D";return ye<0&&(U-=1,ye+=je),U===0?ye+yr+Ut:ye===0?U+Me+Ut:U+Me+ye+yr+Ut};return r>0?D(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?D(o,n,F,"\u4E2A\u6708","\u5929"):n>0?D(n,d,24,"\u5929","\u5C0F\u65F6"):d>0?D(d,k,60,"\u5C0F\u65F6","\u5206\u949F"):k>0?k+"\u5206\u949F\u524D":"\u521A\u521A"};const ie=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],we=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var be=(e=new Date,t=["-","-"," ",":",":",""],r=ie)=>{const o=P(e);let n="";return t.map((d,k)=>{var F;return n+=(k===6?r[o[k]]:(F=o[k])!=null?F:"")+d}),n};const oe=["","webkit","moz","ms"],ve=e=>oe.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),Oe=e=>oe.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),ue=e=>oe.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),ee=oe.map(e=>`${e}fullscreenchange`);var ke=e=>{var t,r;if(!p())return;e=Fe(e)?e.current:e!=null?e:document.body;const o=ve(document),n=Oe(e),d=ue(document);document[o]?(r=document[d])==null||r.call(document):(t=e[n])==null||t.call(e)};const Be=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var De=()=>{var e;if(!p())return;const t=window.navigator.userAgent.toLowerCase(),r=(e=Be.find(o=>t.match(o.reg)))!=null?e:{};return{type:r.name,version:t.match(r.reg)[1]}};const Ze=60*1e3,qe=60*Ze,Et=24*qe;var zt=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/Et);r-=Et*o;const n=~~(r/qe);r-=qe*n;const d=~~(r/Ze);r-=Ze*d;const k=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${d}\u5206${k}\u79D2`};const it=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],tr=e=>{if(!Array.isArray(e))return it;const t=[...it];return e.map(r=>{const o=t.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var Zt=e=>{const t=tr(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return nt(t.join(""))},Tt=(e=new Date)=>{const t=P(e);return new Date(t[0],t[1],0).getDate()},ut=(e=null)=>{var t,r,o,n;return p()?a(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:(r=(t=window.pageXOffset)!=null?t:document.documentElement.scrollLeft)!=null?r:document.body.scrollLeft,top:(n=(o=window.pageYOffset)!=null?o:document.documentElement.scrollTop)!=null?n:document.body.scrollTop}:{left:0,top:0}};const mr=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>{var t;return{type:"ios",model:e[1],version:(t=e[3])==null?void 0:t.replaceAll("_",".")}}},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var Qe=()=>{if(!p())return;const e=window.navigator.userAgent.toLowerCase(),t=mr.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},Nt=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(n=>{const[d,k]=n.split("=");o[d]=k}),{path:t,params:o}}return{path:t}},rr=()=>p()&&(window.ontouchstart||navigator.maxTouchPoints),xr=e=>{var t,r,o,n;const{left:d,top:k}=ut();return{touchX:rr()?(r=(t=e==null?void 0:e.touches)==null?void 0:t[0])==null?void 0:r.pageX:(e==null?void 0:e.pageX)||(e==null?void 0:e.clientX)+d,touchY:rr()?(n=(o=e==null?void 0:e.touches)==null?void 0:o[0])==null?void 0:n.pageY:(e==null?void 0:e.pageY)||(e==null?void 0:e.clientY)+k}},It=(e,t)=>{var r,o;const{touchX:n,touchY:d}=xr(e),{x:k,y:F}=(o=(r=t==null?void 0:t.getBoundingClientRect)==null?void 0:r.call(t))!=null?o:{};return{x:n-(k!=null?k:0),y:d-(F!=null?F:0)}},_t=(e,t,r="id",o="children")=>{if(!ge(e))return null;const n=d=>{for(let k=0,F=d.length;k<F;k++){const D=d[k];if(D[r]===t)return[D];if(ge(D[o])){const U=n(D[o]);if(U)return[D].concat(U)}}};return n(e)},Dr=(e,t={},r)=>{if(!p())return;r=Fe(r)?r.current:r!=null?r:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&We(o,t),o.innerText=e,r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const Yt=(e={},t)=>{t=Ct(t);const r=(o,n)=>{if(!(n!=null&&n[0]))return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(e,t)},Ct=(e="")=>{var t;return(t=e.replace(/\[['"]?(.*?)['"]?\]/g,".$1"))==null?void 0:t.split(".")};var jr=Yt,Pr=(e,t="")=>a(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),or=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,n=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${n})`;const d=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${d})`},Ar=e=>{if(!p())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:n}=e;return t.width=o,t.height=n,r.drawImage(e,0,0,o,n),t},nr=(...e)=>!Number.isNaN(new Date(...e).valueOf()),Sr=e=>Se(e)==="error",Vr=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),Hr=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",Ur=e=>Se(e)==="regexp",qr=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),Gr=e=>z(e)&&Object.keys(e).length,$r=e=>z(e)?Z(e):Array.isArray(e)?me(e):e,ir=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",n=>r(n))}),Kr=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",n=>r(n)))}),Qr=async(e,t,r=2e3)=>{for(;!(t!=null&&t(e==null?void 0:e()));)await Jt(r)},Xr=(e,t=["{","}"])=>{var r,o;return(o=(r=e==null?void 0:e.trim)==null?void 0:r.call(e).match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`)))==null?void 0:o[1]},Jr=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),d=r.find(k=>k.key===n);if(!d){const k=e(...o);return r.push({key:n,result:k}),r.length>t&&r.shift(),k}return d.result}};const Mr=(e,t,r="id")=>{if(!ge(e))return t;if(!ge(t))return e;const o={};return[...e,...t].map(n=>{var d;const k=z(n)?(d=n[r])!=null?d:JSON.stringify(n):n;if(o[k]===void 0)o[k]=n;else{const F=o[k];z(F)&&z(n)?o[k]=h(F,n):ge(F)&&ge(n)?o[k]=Mr(F,n):o[k]=n}}),Object.keys(o).map(n=>o[n])};var i=Mr;const s=(e,t)=>{if(!z(e))return t;if(!z(t))return e;for(let r in t)Re(t,r)?z(e[r])&&z(t[r])?e[r]=s(e[r],t[r]):ge(e[r])&&ge(t[r])?e[r]=i(e[r],t[r]):e[r]=t[r]:Object.setPrototypeOf(e,{[r]:t[r]});return e};var h=s,S=(e,...t)=>{const r=ge(e)?i:h;return t.map(o=>e=r(e,o)),e},T=(e,t)=>{var r,o;const n=(r=e==null?void 0:e.split(" "))!=null?r:[],d=(o=t==null?void 0:t.split(" "))!=null?o:[];return[...new Set([...n,...d])].filter(Boolean).join(" ")},N=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(n=>!r.includes(n));e.className=o.join(" ")},L=`@keyframes huxy-message-animate-in {
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
}`;const X=()=>document.getElementsByClassName("huxy-message")[0],H=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},ae=(e,t)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${t}`);const o=document.createElement("span");o.innerText=e;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},se=(e,t=3250,r,o)=>{if(!p())return;A(L,"huxy-message-css");let n=X();n||(n=H());const d=ae(e,o);n.appendChild(d),setTimeout(()=>{n.removeChild(d),r==null||r()},t),setTimeout(()=>{N(d,"open")},t-250)};var he={success:(e,t,r)=>se(e,t,r,"success"),warn:(e,t,r)=>se(e,t,r,"warn"),warning:(e,t,r)=>se(e,t,r,"warn"),error:(e,t,r)=>se(e,t,r,"error"),info:(e,t,r)=>se(e,t,r,"info")},de=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[c(1-r),c(Tt(t)-r)]},Pe=(e,t,r,o,n="id",d="children")=>{let k={};return Q((F,D)=>(k=F[D],F.splice(D,1),!0))(e,t,n,d),g(e,r,k,o,n,d),e},Ae=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),xe=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(n=>t.includes(n)?o.push({key:n,value:e[n]}):r[n]=e[n]),{newObj:r,newQuery:o}},Ve=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},Te=(e="",t=0,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`},Ie=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!ge(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},ct=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(n,d)=>n?o(n):r(d))),Vt=()=>"#"+Te((~~(Math.random()*(1<<24))).toString(16),6),ar=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),_r=(e=[])=>e[ar(e.length-1)],Ht=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,n)=>{n===e-1?r[n]=t:(r[n]=ar(1,t-1),t-=r[n])}),r},Rr=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),Lr=()=>Math.random()>.5;const Ot=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var gt=(e,t=60)=>{if(!p())return;e=Fe(e)?e.current:e!=null?e:document.body;let r,o=[];const n=st(()=>o.map(D=>D(e)),t),d=D=>{r||(r=Ot(e,n)),o.indexOf(D)===-1&&o.push(D)},k=D=>{const U=o.indexOf(D);U!==-1&&o.splice(U,1),o.length===0&&r&&F()},F=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:d,unbind:k,destroy:F}};const et=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const n=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var Br=(e=0,t=0,r=0,o=1)=>{var n;if(e.includes("rgb")){const d=e.match(/rgba?\((.+)\)/);if(d){const k=(n=d[1])==null?void 0:n.split(",").map(F=>F.trim());return et(...k)}return e}return et(e,t,r,o)},oo=(e,t="px")=>`${e}`.replace(t,"")-0;const eo=()=>typeof(performance==null?void 0:performance.now)=="function"?performance.now():new Date().getTime(),no=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},io=()=>{const e=[],t=k=>{e.push(k),d(k)},r=()=>e[0],o=()=>e.shift(),n=k=>k.startTime=eo(),d=k=>{n(k),e.sort((F,D)=>F.startTime-D.startTime)};return{hub:e,push:t,peek:r,shift:o,update:d}};var ao=(e=5)=>{const{hub:t,push:r,peek:o,shift:n,update:d}=io(),k=no(()=>{D()&&k()}),F=U=>eo()-U.startTime>e,D=()=>{let U=o();for(;U;){if(F(U)){d(U);break}const{task:ye}=U;typeof ye=="function"?(U.task=null,ye()):n(),U=o()}return U};return(U=()=>{})=>{r({task:U}),t.length<2&&k()}},lo=()=>p()&&document.documentElement.scrollHeight-Y()===kt().height,so=e=>{var t;!p()||(e=Fe(e)?e.current:e!=null?e:window,(t=e.scrollIntoView)==null||t.call(e,{behavior:"smooth",block:"center"}))},uo={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch(r){t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},co=e=>{const t=Zt(e);p()&&document.head.appendChild(...t)},fo=(e,t=null,r=!1)=>[...e||[]].sort((o,n)=>{const d=t?o[t]:o,k=t?n[t]:n;return!isNaN(Number(d))&&!isNaN(Number(d))?r?k-d:d-k:typeof d=="string"&&typeof k=="string"?r?k.localeCompare(d):d.localeCompare(k):typeof d=="string"&&typeof k=="number"?r?-1:1:typeof d=="number"||typeof d=="string"?r?1:-1:r?-1:1}),ho=e=>{if(!z(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},po={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const mo=ce();var xo=lt(mo),yo=(e,t=!1)=>(e=t?e:`return ${e};`,Function(e)()),go=()=>p()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),bo=(e,...t)=>{const r=[];return e.map((o,n)=>{var d;r.push(o,(d=t[n])!=null?d:"")}),r.join("")},vo=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const wo=e=>[12,Tt(e),24,60,60],ko=(e=[],t=[],r=[])=>{let o=!1;const n=[];return t.map((d,k)=>{const F=(o?d-1:d)-e[k];F<0?(n[k]=F+(r[k]||10),o=!0):(n[k]=F,o=!1)}),n.reverse()};var to=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=wo(t).reverse(),o=P(e).slice(0,-1).reverse(),n=P(t).slice(0,-1).reverse();return ko(o,n,r)};const Eo=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Co=(e,t=new Date)=>{const r=to(e,t),o=r.findIndex(n=>n>0);return r.map((n,d)=>`${n||0}${Eo[d]}`).slice(o).join("")},jo=(e,t)=>{!a(e)||(Pr(e,t)?N(e,t):m(e,t))},So=e=>(t,r="children")=>{if(!ge(t))return t;const o=n=>(n.map(d=>{ge(d[r])&&(d[r]=o(d[r]))}),e(n));return o(t)},$o=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),Fo=(e,t="fuckId",r="children")=>x((o,n,d)=>{o[t]=[...n.map(k=>k["@@index"]),d].join("-")})(e,r),zo=(e,t,r,o="children")=>Q((n,d)=>{const k=n[d];return k[o]=[...k[o]||[],...r],!0})(e,t),To=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},No=e=>p()?(ee.map(t=>document.addEventListener(t,e,!1)),()=>ee.map(t=>document.removeEventListener(t,e,!1))):void 0,Io=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:d="20px microsoft yahei",fillStyle:k="rgba(202,202,202,0.4)",content:F="\u8BF7\u52FF\u5916\u4F20",rotate:D="-30",zIndex:U=1e3}={})=>{if(!p())return;e=Fe(e)?e.current:e!=null?e:document.body;const ye=e.firstChild;(ye==null?void 0:ye.className)==="watermark-canvas"&&e.removeChild(ye);const je=document.createElement("canvas");je.setAttribute("width",t),je.setAttribute("height",r);const Me=je.getContext("2d");Me.textAlign=o,Me.textBaseline=n,Me.font=d,Me.fillStyle=k,Me.rotate(Math.PI/180*D),Me.fillText(F,parseFloat(t)/2,parseFloat(r)/2);const yr=je.toDataURL(),Ut=document.createElement("div");Ut.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${U};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${yr}')`),e.style.position="relative",e.insertBefore(Ut,e.firstChild)},Oo=(e=new Date)=>{const t=new Date(e).getDay();return[c(1-t),c(7-t)]},Do=e=>{if(!Ne(e))return{};let t="pending",r;const o=e.then(n=>{t="success",r=n}).catch(n=>{t="error",r=n});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}};return He}()})},3323:function(Dt,pe){"use strict";function He(_,le){var K=_.length;_.push(le);e:for(;0<K;){var Ce=K-1>>>1,ze=_[Ce];if(0<ge(ze,le))_[Ce]=le,_[K]=ze,K=Ce;else break e}}function _e(_){return _.length===0?null:_[0]}function Se(_){if(_.length===0)return null;var le=_[0],K=_.pop();if(K!==le){_[0]=K;e:for(var Ce=0,ze=_.length,dt=ze>>>1;Ce<dt;){var Ye=2*(Ce+1)-1,ot=_[Ye],Ne=Ye+1,Ge=_[Ne];if(0>ge(ot,K))Ne<ze&&0>ge(Ge,ot)?(_[Ce]=Ge,_[Ne]=K,Ce=Ne):(_[Ce]=ot,_[Ye]=K,Ce=Ye);else if(Ne<ze&&0>ge(Ge,K))_[Ce]=Ge,_[Ne]=K,Ce=Ne;else break e}}return le}function ge(_,le){var K=_.sortIndex-le.sortIndex;return K!==0?K:_.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var Q=performance;pe.unstable_now=function(){return Q.now()}}else{var re=Date,g=re.now();pe.unstable_now=function(){return re.now()-g}}var a=[],m=[],c=1,w=null,y=3,j=!1,p=!1,$=!1,A=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,G=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(_){for(var le=_e(m);le!==null;){if(le.callback===null)Se(m);else if(le.startTime<=_)Se(m),le.sortIndex=le.expirationTime,He(a,le);else break;le=_e(m)}}function B(_){if($=!1,z(_),!p)if(_e(a)!==null)p=!0,Xe(Z);else{var le=_e(m);le!==null&&at(B,le.startTime-_)}}function Z(_,le){p=!1,$&&($=!1,q(Ee),Ee=-1),j=!0;var K=y;try{for(z(le),w=_e(a);w!==null&&(!(w.expirationTime>le)||_&&!Y());){var Ce=w.callback;if(typeof Ce=="function"){w.callback=null,y=w.priorityLevel;var ze=Ce(w.expirationTime<=le);le=pe.unstable_now(),typeof ze=="function"?w.callback=ze:w===_e(a)&&Se(a),z(le)}else Se(a);w=_e(a)}if(w!==null)var dt=!0;else{var Ye=_e(m);Ye!==null&&at(B,Ye.startTime-le),dt=!1}return dt}finally{w=null,y=K,j=!1}}var te=!1,me=null,Ee=-1,tt=5,rt=-1;function Y(){return!(pe.unstable_now()-rt<tt)}function Re(){if(me!==null){var _=pe.unstable_now();rt=_;var le=!0;try{le=me(!0,_)}finally{le?Fe():(te=!1,me=null)}}else te=!1}var Fe;if(typeof G=="function")Fe=function(){G(Re)};else if(typeof MessageChannel!="undefined"){var Ue=new MessageChannel,bt=Ue.port2;Ue.port1.onmessage=Re,Fe=function(){bt.postMessage(null)}}else Fe=function(){A(Re,0)};function Xe(_){me=_,te||(te=!0,Fe())}function at(_,le){Ee=A(function(){_(pe.unstable_now())},le)}pe.unstable_IdlePriority=5,pe.unstable_ImmediatePriority=1,pe.unstable_LowPriority=4,pe.unstable_NormalPriority=3,pe.unstable_Profiling=null,pe.unstable_UserBlockingPriority=2,pe.unstable_cancelCallback=function(_){_.callback=null},pe.unstable_continueExecution=function(){p||j||(p=!0,Xe(Z))},pe.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):tt=0<_?Math.floor(1e3/_):5},pe.unstable_getCurrentPriorityLevel=function(){return y},pe.unstable_getFirstCallbackNode=function(){return _e(a)},pe.unstable_next=function(_){switch(y){case 1:case 2:case 3:var le=3;break;default:le=y}var K=y;y=le;try{return _()}finally{y=K}},pe.unstable_pauseExecution=function(){},pe.unstable_requestPaint=function(){},pe.unstable_runWithPriority=function(_,le){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var K=y;y=_;try{return le()}finally{y=K}},pe.unstable_scheduleCallback=function(_,le,K){var Ce=pe.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?Ce+K:Ce):K=Ce,_){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=K+ze,_={id:c++,callback:le,priorityLevel:_,startTime:K,expirationTime:ze,sortIndex:-1},K>Ce?(_.sortIndex=K,He(m,_),_e(a)===null&&_===_e(m)&&($?(q(Ee),Ee=-1):$=!0,at(B,K-Ce))):(_.sortIndex=ze,He(a,_),p||j||(p=!0,Xe(Z))),_},pe.unstable_shouldYield=Y,pe.unstable_wrapCallback=function(_){var le=y;return function(){var K=y;y=le;try{return _.apply(this,arguments)}finally{y=K}}}},1102:function(Dt,pe,He){"use strict";Dt.exports=He(3323)}}]);
