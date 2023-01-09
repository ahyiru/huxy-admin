(self.webpackChunk=self.webpackChunk||[]).push([[697],{1975:function(_t,he,He){(function(_e,Se){_t.exports=Se(He(7378),He(1542))})(this,function(_e,Se){return function(){"use strict";var ge={193:function(a,m,c){var w=c(703),y=c.n(w),j=c(414),p=c.n(j),$=p()(y());$.push([a.id,`/*@height:2px;
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
`,""]),$.locals={},m.Z=$},414:function(a){a.exports=function(m){var c=[];return c.toString=function(){return this.map(function(w){var y="",j=typeof w[5]!="undefined";return w[4]&&(y+="@supports (".concat(w[4],") {")),w[2]&&(y+="@media ".concat(w[2]," {")),j&&(y+="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {")),y+=m(w),j&&(y+="}"),w[2]&&(y+="}"),w[4]&&(y+="}"),y}).join("")},c.i=function(w,y,j,p,$){typeof w=="string"&&(w=[[null,w,void 0]]);var _={};if(j)for(var H=0;H<this.length;H++){var U=this[H][0];U!=null&&(_[U]=!0)}for(var F=0;F<w.length;F++){var L=[].concat(w[F]);j&&_[L[0]]||(typeof $!="undefined"&&(typeof L[5]=="undefined"||(L[1]="@layer".concat(L[5].length>0?" ".concat(L[5]):""," {").concat(L[1],"}")),L[5]=$),y&&(L[2]&&(L[1]="@media ".concat(L[2]," {").concat(L[1],"}")),L[2]=y),p&&(L[4]?(L[1]="@supports (".concat(L[4],") {").concat(L[1],"}"),L[4]=p):L[4]="".concat(p)),c.push(L))}},c}},703:function(a){a.exports=function(m){return m[1]}},53:function(a,m,c){var w,y=c(899),j=Symbol.for("react.element"),p=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,_=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,H={key:!0,ref:!0,__self:!0,__source:!0};function U(F,L,Z){var te,pe={},Ce=null,et=null;Z!==void 0&&(Ce=""+Z),L.key!==void 0&&(Ce=""+L.key),L.ref!==void 0&&(et=L.ref);for(te in L)$.call(L,te)&&!H.hasOwnProperty(te)&&(pe[te]=L[te]);if(F&&F.defaultProps)for(te in L=F.defaultProps,L)pe[te]===void 0&&(pe[te]=L[te]);return{$$typeof:j,type:F,key:Ce,ref:et,props:pe,_owner:_.current}}w=p,m.jsx=U,m.jsxs=U},458:function(a,m,c){a.exports=c(53)},748:function(a){var m=[];function c(j){for(var p=-1,$=0;$<m.length;$++)if(m[$].identifier===j){p=$;break}return p}function w(j,p){for(var $={},_=[],H=0;H<j.length;H++){var U=j[H],F=p.base?U[0]+p.base:U[0],L=$[F]||0,Z="".concat(F," ").concat(L);$[F]=L+1;var te=c(Z),pe={css:U[1],media:U[2],sourceMap:U[3],supports:U[4],layer:U[5]};if(te!==-1)m[te].references++,m[te].updater(pe);else{var Ce=y(pe,p);p.byIndex=H,m.splice(H,0,{identifier:Z,updater:Ce,references:1})}_.push(Z)}return _}function y(j,p){var $=p.domAPI(p);$.update(j);var _=function(H){if(H){if(H.css===j.css&&H.media===j.media&&H.sourceMap===j.sourceMap&&H.supports===j.supports&&H.layer===j.layer)return;$.update(j=H)}else $.remove()};return _}a.exports=function(j,p){p=p||{},j=j||[];var $=w(j,p);return function(_){_=_||[];for(var H=0;H<$.length;H++){var U=$[H],F=c(U);m[F].references--}for(var L=w(_,p),Z=0;Z<$.length;Z++){var te=$[Z],pe=c(te);m[pe].references===0&&(m[pe].updater(),m.splice(pe,1))}$=L}}},736:function(a){var m={};function c(y){if(typeof m[y]=="undefined"){var j=document.querySelector(y);if(window.HTMLIFrameElement&&j instanceof window.HTMLIFrameElement)try{j=j.contentDocument.head}catch(p){j=null}m[y]=j}return m[y]}function w(y,j){var p=c(y);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(j)}a.exports=w},706:function(a){function m(c){var w=document.createElement("style");return c.setAttributes(w,c.attributes),c.insert(w,c.options),w}a.exports=m},567:function(a,m,c){function w(y){var j=c.nc;j&&y.setAttribute("nonce",j)}a.exports=w},306:function(a){function m(y,j,p){var $="";p.supports&&($+="@supports (".concat(p.supports,") {")),p.media&&($+="@media ".concat(p.media," {"));var _=typeof p.layer!="undefined";_&&($+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),$+=p.css,_&&($+="}"),p.media&&($+="}"),p.supports&&($+="}");var H=p.sourceMap;H&&typeof btoa!="undefined"&&($+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(H))))," */")),j.styleTagTransform($,y,j.options)}function c(y){if(y.parentNode===null)return!1;y.parentNode.removeChild(y)}function w(y){var j=y.insertStyleElement(y);return{update:function(p){m(j,y,p)},remove:function(){c(j)}}}a.exports=w},62:function(a){function m(c,w){if(w.styleSheet)w.styleSheet.cssText=c;else{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(document.createTextNode(c))}}a.exports=m},899:function(a){a.exports=_e},994:function(a){a.exports=Se}},Q={};function re(a){var m=Q[a];if(m!==void 0)return m.exports;var c=Q[a]={id:a,exports:{}};return ge[a](c,c.exports,re),c.exports}(function(){re.n=function(a){var m=a&&a.__esModule?function(){return a.default}:function(){return a};return re.d(m,{a:m}),m}})(),function(){re.d=function(a,m){for(var c in m)re.o(m,c)&&!re.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:m[c]})}}(),function(){re.o=function(a,m){return Object.prototype.hasOwnProperty.call(a,m)}}(),function(){re.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){re.nc=void 0}();var g={};return function(){re.r(g),re.d(g,{Anico:function(){return et},Carousel:function(){return sr},Col:function(){return St},Drawer:function(){return $t},Drop:function(){return wt},Ellipsis:function(){return wr},ErrorBoundary:function(){return Er},FullPage:function(){return tr},HandleError:function(){return Pr},LoadError:function(){return Sr},Mask:function(){return ft},MaxSize:function(){return Y},Modal:function(){return we},Panel:function(){return kt},Portal:function(){return dt},Row:function(){return st},Spinner:function(){return se},TabHeader:function(){return ir},Tooltip:function(){return Kt},Tree:function(){return Gr},fixEle:function(){return hr},fixIcon:function(){return Nr},renderTree:function(){return Rt},str2React:function(){return jr},str2Vue:function(){return _r}});var a=re(458),m=re(748),c=re.n(m),w=re(306),y=re.n(w),j=re(736),p=re.n(j),$=re(567),_=re.n($),H=re(706),U=re.n(H),F=re(62),L=re.n(F),Z=re(193),te={};te.styleTagTransform=L(),te.setAttributes=_(),te.insert=p().bind(null,"head"),te.domAPI=y(),te.insertStyleElement=U();var pe=c()(Z.Z,te),Ce=Z.Z&&Z.Z.locals?Z.Z.locals:void 0,et=i=>(0,a.jsx)("span",{className:Ce.anico,children:(0,a.jsx)("span",{className:[Ce.hline,...(i.type||"").split(" ").map(l=>Ce[l]).filter(Boolean)].join(" ")})}),tt=re(994),q=re(899),Ae=re.n(q),ze=(i,l)=>{const h=(0,q.useRef)();(0,q.useEffect)(()=>{h.current=i},[i]),(0,q.useEffect)(()=>{if(l){const S=setInterval(()=>h.current(),l);return()=>clearInterval(S)}},[l])},Ue=()=>![typeof window,typeof document].includes("undefined"),gt=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),Ge=i=>gt(i).indexOf("element")>-1,it=(i=null)=>{var l,h;return Ue()?Ge(i)?{width:i.clientWidth,height:i.clientHeight}:{width:(l=window.innerWidth)!=null?l:document.documentElement.clientWidth,height:(h=window.innerHeight)!=null?h:document.documentElement.clientHeight}:{width:0,height:0}},A=(i=()=>{},l=60)=>{let h=null;return function(...S){clearTimeout(h),h=setTimeout(()=>i.apply(this,S),l)}},le=(i,l)=>Object.prototype.hasOwnProperty.call(i!=null?i:{},l),G=i=>le(i,"current");const Ee=(i,l)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const h=document.createElement("object");return h.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),h.setAttribute("class","resize-sensor"),h.onload=()=>{h.contentDocument.defaultView.addEventListener("resize",l,!1),l()},h.type="text/html",i.appendChild(h),h.data="about:blank",h};var Fe=(i,l=60)=>{if(!Ue())return;i=G(i)?i.current:i!=null?i:document.body;let h,S=[];const T=A(()=>S.map(J=>J(i)),l),O=J=>{h||(h=Ee(i,T)),S.indexOf(J)===-1&&S.push(J)},M=J=>{const ne=S.indexOf(J);ne!==-1&&S.splice(ne,1),S.length===0&&h&&K()},K=()=>{h&&h.parentNode&&(h.contentDocument&&h.contentDocument.defaultView.removeEventListener("resize",T,!1),h.parentNode.removeChild(h),h=void 0,S=[])};return{element:i,bind:O,unbind:M,destroy:K}},ut=(i={})=>{const l=(0,q.useRef)(0),[h,S]=(0,q.useState)(i),T=(0,q.useCallback)(O=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>S(O))},[]);return(0,q.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[h,T]},Ye=(i=null,l=60)=>{const h=G(i)?i.current:i,{bind:S,destroy:T}=Fe(h,l),[O,M]=ut(it(h));return(0,q.useEffect)(()=>(S(()=>h&&M(it(h))),()=>T()),[h]),O},rt=re(145),Ne={};Ne.styleTagTransform=L(),Ne.setAttributes=_(),Ne.insert=p().bind(null,"head"),Ne.domAPI=y(),Ne.insertStyleElement=U();var Xe=c()(rt.Z,Ne),Je=rt.Z&&rt.Z.locals?rt.Z.locals:void 0,sr=({children:i,active:l=0,delay:h=5e3,className:S,...T})=>{const[O,M]=(0,q.useState)(l+1),[K,J]=(0,q.useState)(!1),ne=(0,q.useRef)(),ce=(0,q.useRef)(""),{width:fe}=Ye(ne);i=Array.isArray(i)?i:[i];const xe=i[0],Be=[i[i.length-1],...i,xe],Pe=Be.length;ze(()=>{let Oe=O+1;Oe=Oe===Pe?1:Oe,ce.current&&(ce.current=""),M(Oe),Oe===Pe-1&&setTimeout(()=>{ce.current="none",M(1)},500)},K?null:h);const me=(Oe,Te)=>{Te.stopPropagation(),ce.current="",M(Oe),(0,tt.flushSync)(()=>J(!0)),J(!1)},Ve={width:`${Pe*fe}px`,transform:`translateX(${-fe*O}px)`,transition:ce.current};return(0,a.jsxs)("div",{className:`${Je["huxy-carousel"]}${S?` ${S}`:""}`,...T,ref:ne,children:[(0,a.jsx)("div",{className:Je["huxy-carousel-wrap"],style:Ve,children:Be.map((Oe,Te)=>(0,a.jsx)("div",{className:`${Je["carousel-item"]} ${O===Te?Je.active:""}`,style:{width:`${fe}px`},children:Oe},`huxy-carousel-${Te}`))}),(0,a.jsx)("div",{className:Je["carousel-switch"],children:i.map((Oe,Te)=>(0,a.jsx)("span",{className:`${Je.dot} ${O===Te+1?Je.active:""}`,onClick:Ut=>me(Te+1,Ut)},`huxy-carousel-switch-${Te}`))})]})};const ct=(i,l)=>{let h="",S="";if(typeof l=="number"&&(h=`col-${i}-${l}`),typeof l=="object"){const{span:T,offset:O}=l;h=T?`col-${i}-${T}`:"",S=O?`offset-${i}-${O}`:""}return{sp:h,os:S}};var St=(0,q.forwardRef)(({span:i,offset:l,xl:h,lg:S,md:T,sm:O,xs:M,style:K,width:J,auto:ne,offsetWidth:ce="0px",className:fe,...xe},Be)=>{const Pe=fe?` ${fe}`:"",me=`col-${i||12}`,Ve=l?`offset-${l}`:"",{sp:Oe,os:Te}=ct("xs",M),{sp:Ut,os:lr}=ct("sm",O),{sp:xt,os:Dt}=ct("md",T),{sp:Et,os:gr}=ct("lg",S),{sp:Lr,os:Pt}=ct("xl",h),jt=[me,Lr,Et,xt,Ut,Oe,Ve,Pt,gr,Dt,lr,Te].filter(Boolean).join(" "),yt=ne?{width:"auto",flex:1,maxWidth:`calc(100% - ${ce})`}:{width:J};return(0,a.jsx)("div",{className:`${jt}${Pe}`,...xe,style:{...yt,...K},ref:Be})}),Lt=()=>{const i=(0,q.useRef)(!0);return i.current?(i.current=!1,!0):!1},Xt=(i,l=[])=>{const h=Lt();(0,q.useEffect)(()=>{if(!h)return i()},l)},Bt=(i,l=450)=>{const[h,S]=(0,q.useState)(i);return Xt(()=>{let T;return i||l===0?S(i):T=setTimeout(()=>S(i),l),()=>T&&clearTimeout(T)},[i]),[h,S]},dt=({children:i,mountNode:l=document.body})=>(0,tt.createPortal)(i,l);const Gt={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},Ke={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},ur={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},Jt=document.body;var ft=({open:i,close:l,delay:h=300,children:S,mountNode:T,hasMask:O=!0,style:M,className:K="h-mask"})=>{const[J]=Bt(i,h);return Jt.style.overflow=J?"hidden":"",(0,a.jsx)(dt,{mountNode:T,children:(0,a.jsx)("div",{children:J?(0,a.jsxs)("div",{className:K,style:Gt,children:[O?(0,a.jsx)("div",{style:Ke,onClick:ne=>l==null?void 0:l(ne)}):null,(0,a.jsx)("div",{style:{...ur,...M},children:S})]}):null})})},At=re(842),bt={};bt.styleTagTransform=L(),bt.setAttributes=_(),bt.insert=p().bind(null,"head"),bt.domAPI=y(),bt.insertStyleElement=U();var cr=c()(At.Z,bt),at=At.Z&&At.Z.locals?At.Z.locals:void 0,$t=({open:i,close:l,footer:h,header:S,className:T,children:O,width:M="300px"})=>{var K;const J=["drawer-wrap",i?"open":"",...(K=T==null?void 0:T.split(" "))!=null?K:[]].filter(Boolean).map(ne=>at[ne]).join(" ");return(0,a.jsx)(ft,{open:i,close:l,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,a.jsx)("div",{className:J,style:{width:M},children:(0,a.jsxs)("div",{className:at["drawer-container"],children:[(0,a.jsxs)("div",{className:at["drawer-header"],children:[(0,a.jsx)("span",{className:`link ${at["ico-close"]}`,onClick:ne=>l==null?void 0:l(ne)}),(0,a.jsx)("div",{children:S})]}),(0,a.jsx)("div",{className:at["drawer-content"],children:O}),h?(0,a.jsx)("div",{className:at["drawer-footer"],children:h}):null]})})})},dr=(i,l,h="click")=>{(0,q.useEffect)(()=>{const S=O=>{const M=G(i)?i.current:i;(M==null?void 0:M.contains)&&!M.contains(O.target)&&l(O)},T=typeof h=="string"?[h]:h;return T.map(O=>{document.addEventListener(O,S,!1)}),()=>{T.map(O=>{document.removeEventListener(O,S,!1)})}},[i,l,h])},Mt=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",fr=(i="")=>i.replace(/^\S/,l=>l.toUpperCase()),ht=i=>{var l;if(Ue())return i=G(i)?i.current:i!=null?i:document.body,(l=i.getBoundingClientRect)==null?void 0:l.call(i)},u=i=>{if(!Ue())return;const l=document.createElement("div");return l.innerHTML=i,l.children[0]},v=(i,l={},h=!1)=>{!Ge(i)||Object.keys(l).map(S=>{i.style.setProperty(S,h?"":l[S])})};const E=(i=350)=>new Promise(l=>setTimeout(l,i)),N=(i=100)=>{const l=Date.now();for(;Date.now()-l<=i;);};var I=E,X=async(i,l=15)=>{if(!Ue())return;if(typeof i=="string"&&(i=u(i)),i=G(i)?i.current:i,!Ge(i))return{};const h=i.cloneNode(!0);v(h,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(h),await I(l);const S=ht(h);return i.parentNode.removeChild(h),S};const de=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,ue=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,ie=(i,l)=>{var h;l=`huxy-drop-arrow-${l}`;const S=(h=i.getAttribute("class"))!=null?h:"";de.test(S)?i.setAttribute("class",S.replace(ue,l)):i.setAttribute("class",`${S} ${l}`)},$e=async(i,l,h)=>{const{left:S,right:T,top:O,bottom:M}=ht(i),{width:K,height:J}=it(),{width:ne,height:ce}=await X(l);if(T<0||M<0||S>K||O>J)return{};if(h==="vertical"){const fe={left:S+"px",top:M+10+"px",right:"auto",bottom:"auto"};let xe="lt";S+ne>K&&(fe.left=T-ne+"px",xe="rt"),M+10+ce>J&&(fe.top=O-10-ce+"px",xe=xe==="lt"?"lb":"rb"),v(l,fe),ie(l,xe)}else{const fe={left:T+10+"px",top:O+"px",right:"auto",bottom:"auto"};let xe="tl";T+10+ne>K&&(fe.left=S-10-ne+"px",xe="tr"),O+ce>J&&(fe.top=M-ce+"px",xe=xe==="tl"?"bl":"br"),v(l,fe),ie(l,xe)}};var lt=(i,l,h="horizontal")=>{const S=A($e),T=()=>S(i,l,h);window.addEventListener("scroll",T,!1),window.addEventListener("resize",T,!1);const O=()=>{window.removeEventListener("scroll",T),window.removeEventListener("resize",T),v(l,{left:"",top:"",right:"",bottom:""})};return $e(i,l,h),O},vt=({open:i,delay:l=250,children:h,mountNode:S,style:T,className:O="huxy-mask"})=>{const[M]=Bt(i,l);return(0,a.jsx)(dt,{mountNode:S,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:O,children:(0,a.jsx)("div",{style:{...T,display:M?"block":"none"},children:h})})})})},pt=re(563),Re={};Re.styleTagTransform=L(),Re.setAttributes=_(),Re.insert=p().bind(null,"head"),Re.domAPI=y(),Re.insertStyleElement=U();var Wt=c()(pt.Z,Re),zt=pt.Z&&pt.Z.locals?pt.Z.locals:void 0,wt=({trigger:i="click",type:l,dropList:h,className:S,children:T,...O})=>{const[M,K]=(0,q.useState)(!1),J=(0,q.useRef)(),ne=(0,q.useRef)(),ce=(0,q.useRef)();dr(J,me=>M&&K(!1),[...new Set(["click",i.toLowerCase()])]),(0,q.useEffect)(()=>()=>{var me;return(me=ce.current)==null?void 0:me.call(ce)},[]);const fe=me=>{me.preventDefault(),K(!0),ce.current=lt(J.current,ne.current,l)},xe={[`on${fr(i)}`]:fe},Be=["drop-wrap",M?"open":""].filter(Boolean).map(me=>zt[me]).join(" "),Pe=Mt(h)?h:h==null?void 0:h(()=>K(!1),M);return(0,a.jsxs)("span",{ref:J,className:`${zt["drop-target"]}${S?` ${S}`:""}`,...xe,...O,children:[T,(0,a.jsx)(vt,{open:M,className:"huxy-drop",children:(0,a.jsx)("div",{ref:ne,className:Be,children:Pe})})]})},mt=(i,l={},h)=>{if(!Ue())return;h=G(h)?h.current:h!=null?h:document.body;const S=document.createElement("span");S.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),l&&v(S,l),S.innerText=i,h.appendChild(S);const T=S.getBoundingClientRect();return h.removeChild(S),T},ot=re(626),We={};We.styleTagTransform=L(),We.setAttributes=_(),We.insert=p().bind(null,"head"),We.domAPI=y(),We.insertStyleElement=U();var Yr=c()(ot.Z,We),Tr=ot.Z&&ot.Z.locals?ot.Z.locals:void 0,Kt=({title:i,placement:l="topRight",children:h,ellipsis:S,className:T,...O})=>(0,a.jsx)("span",{className:`${Tr[`huxy-tooltip-${l}`]}${T?` ${T}`:""}`,tooltip:i!=null?i:h,...O,children:(0,a.jsx)("span",{className:S?Tr.ellipsis:"",children:h})});const vr={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"};var wr=i=>{var l,h,S,T;const{children:O}=i,M=typeof O=="string",K=M?O:(S=(l=O==null?void 0:O.props)==null?void 0:l.title)!=null?S:(h=O==null?void 0:O.props)==null?void 0:h.children,J=(0,q.useRef)(),[ne,ce]=(0,q.useState)(!1),fe=Ye(J,250);return(0,q.useEffect)(()=>{if(J.current){const{width:xe}=mt(K),{width:Be}=ht(J.current),Pe=xe>Be;Pe!==ne&&ce(Pe)}},[K,fe.width]),(0,a.jsx)("span",{ref:J,style:{width:"100%",display:"inline-block"},children:ne?M?(0,a.jsx)(Kt,{...i,ellipsis:!0}):(0,a.jsx)("span",{style:vr,children:O}):M?O:(T=O==null?void 0:O.props)==null?void 0:T.children})},Qt=Object.defineProperty,kr=(i,l,h)=>l in i?Qt(i,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[l]=h,Cr=(i,l,h)=>(kr(i,typeof l!="symbol"?l+"":l,h),h);class Er extends Ae().Component{constructor(){super(...arguments),Cr(this,"state",{error:null})}static getDerivedStateFromError(l){return{error:l}}componentDidCatch(l,h){const{errorReport:S}=this.props;typeof S=="function"&&S({error:l,info:h.componentStack})}render(){const{error:l}=this.state,{fallback:h,children:S}=this.props;return l?h(l):S}}var hr=i=>l=>{if(typeof l=="function"||typeof(l==null?void 0:l.render)=="function")return(0,a.jsx)(l,{});if(typeof l=="string"){const h=i==null?void 0:i[l];return h?(0,a.jsx)(h,{}):(0,a.jsx)("i",{className:l})}return l!=null?l:null};const pr=i=>hr(i);var Nr=i=>({icon:l,defaultIcon:h=null})=>l?pr(i)(l):l===!1?null:h;const er=["","webkit","moz","ms"],mr=i=>er.map(l=>l?`${l}FullscreenElement`:"fullscreenElement").find(l=>i[l]),Or=i=>er.map(l=>l?`${l}RequestFullscreen`:"requestFullscreen").find(l=>i[l]),Ir=i=>er.map(l=>l?`${l}ExitFullscreen`:"exitFullscreen").find(l=>i[l]),Zt=er.map(i=>`${i}fullscreenchange`);var Yt=i=>{var l,h;if(!Ue())return;i=G(i)?i.current:i!=null?i:document.body;const S=mr(document),T=Or(i),O=Ir(document);document[S]?(h=document[O])==null||h.call(document):(l=i[T])==null||l.call(i)},Ft=i=>Ue()?(Zt.map(l=>document.addEventListener(l,i,!1)),()=>Zt.map(l=>document.removeEventListener(l,i,!1))):void 0;const Dr=i=>(0,a.jsx)("i",{...i,children:"..."});var tr=({panel:i,fullIcon:l=Dr,exitIcon:h=Dr,...S})=>{const T=G(i)?i.current:i,[O,M]=(0,q.useState)();(0,q.useEffect)(()=>{const J=Ft(()=>{M(ne=>!ne)});return()=>J()},[]);const K=O?h:l;return(0,a.jsx)(K,{onClick:J=>Yt(T),...S})},jr=(i,l)=>(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...l}),Sr=i=>{const{error:l={},info:h=""}=i||{},{message:S,stack:T,errMsg:O}=l;let M=O||T||l.toString();M=`${M}
${h}`.replace(/\r|\n|\r\n/g,"<br/>"),M=M.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),M=M.replace(/\s/g,"&nbsp;");const K=S==null?void 0:S.slice(0,120).split(". ").slice(0,2).join(". ");return(0,a.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[jr(M,{style:{color:"red"}}),K&&(0,a.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${K}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Pr=({children:i,report:l})=>{var h;const S=(0,q.useRef)();return(h=S.current)!=null&&h.state&&(S.current.state.error=null),(0,a.jsx)(Er,{ref:S,fallback:(T,O)=>Sr({error:T,info:O}),errorReport:l,children:i})};const s=(i,l)=>Object.keys(l).map(h=>i.style[h]=l[h]),f=(i,l)=>Object.keys(l).map(h=>i.style[h]=""),C={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},b=({left:i,top:l,width:h,height:S})=>({left:`${i}px`,top:`${l}px`,width:`${h}px`,height:`${S}px`}),x=i=>(0,a.jsx)("i",{...i,children:"..."}),B=i=>{const{left:l,top:h}=ht(i),{width:S,height:T}=it(i);return{left:l,top:h,width:S,height:T}};var Y=({panel:i,target:l,fullIcon:h=x,exitIcon:S=x})=>{i=G(i)?i.current:i||document.body;const[T,O]=(0,q.useState)(),M=(0,q.useRef)(),K=(0,q.useRef)();(0,q.useEffect)(()=>{const ce=typeof l=="function"?l:()=>document.getElementsByClassName(l)[0];K.current=b(B(ce())),M.current={...C,...b(B(i))}},[i]);const J=(ce,fe)=>{ce?(s(fe,M.current),setTimeout(()=>{s(fe,K.current)},0)):f(fe,M.current),O(ce)},ne=T?S:h;return(0,a.jsx)(ne,{onClick:ce=>J(!T,i)})},W=re(697),P={};P.styleTagTransform=L(),P.setAttributes=_(),P.insert=p().bind(null,"head"),P.domAPI=y(),P.insertStyleElement=U();var R=c()(W.Z,P),ae=W.Z&&W.Z.locals?W.Z.locals:void 0,we=({open:i,close:l,hasMask:h=!0,cancelText:S="\u53D6\u6D88",submit:T,submitText:O="\u786E\u5B9A",title:M="Modal \u5F39\u7A97",className:K,children:J,delay:ne=250})=>{var ce;const fe=["modal-wrap",i?"open":"",...(ce=K==null?void 0:K.split(" "))!=null?ce:[]].filter(Boolean).map(xe=>ae[xe]).join(" ");return(0,a.jsx)(ft,{open:i,close:l,delay:ne,hasMask:h,className:"huxy-modal",children:(0,a.jsx)("div",{className:fe,children:(0,a.jsxs)("div",{className:ae["modal-container"],children:[(0,a.jsx)("div",{className:ae["modal-header"],children:M}),(0,a.jsx)("div",{className:ae["modal-content"],children:J}),(0,a.jsxs)("div",{className:ae["modal-footer"],children:[(0,a.jsx)("div",{className:`${ae.btn} ${ae.left}`,onClick:xe=>l==null?void 0:l(xe),children:S}),(0,a.jsx)("div",{className:`${ae.btn} ${ae.right}`,onClick:xe=>T==null?void 0:T(xe),children:O})]})]})})})},be=re(201),oe={};oe.styleTagTransform=L(),oe.setAttributes=_(),oe.insert=p().bind(null,"head"),oe.domAPI=y(),oe.insertStyleElement=U();var ve=c()(be.Z,oe),Ie=be.Z&&be.Z.locals?be.Z.locals:void 0,se=({global:i,absolute:l})=>(0,a.jsx)("div",{className:`spinner${i?" global":""}${l?" absolute":""}`,children:(0,a.jsx)("figure",{className:"spinning"})}),ee=re(810),ke={};ke.styleTagTransform=L(),ke.setAttributes=_(),ke.insert=p().bind(null,"head"),ke.domAPI=y(),ke.insertStyleElement=U();var Le=c()(ee.Z,ke),De=ee.Z&&ee.Z.locals?ee.Z.locals:void 0;const Ze=i=>{var l;return(l=i==null?void 0:i.filter)==null?void 0:l.call(i,h=>typeof h=="function")},qe=(i,l)=>{const h=(0,q.useRef)(),{loading:S,title:T,plugins:O,children:M,className:K,...J}=i,ne=Ze(O),ce=ne==null?void 0:ne.length,fe=K?` ${K}`:"",xe=G(l)?l:h;return(0,a.jsxs)("div",{className:`${De.panel}${fe}`,...J,ref:xe,children:[(T||ce)&&(0,a.jsxs)("div",{className:De["panel-header"],children:[T&&(0,a.jsx)("h4",{className:De["panel-title"],children:T}),ce&&(0,a.jsx)("div",{className:De["panel-plugins"],children:ne.map((Be,Pe)=>(0,a.jsx)("span",{className:"link",children:(0,a.jsx)(Be,{panel:xe})},Pe))})]}),(0,a.jsx)("div",{className:De["panel-body"],children:M}),S&&(0,a.jsx)(se,{})]})};var kt=(0,q.forwardRef)(qe),Tt=re(31),nt={};nt.styleTagTransform=L(),nt.setAttributes=_(),nt.insert=p().bind(null,"head"),nt.domAPI=y(),nt.insertStyleElement=U();var rr=c()(Tt.Z,nt),Vt=Tt.Z&&Tt.Z.locals?Tt.Z.locals:void 0;const Nt=({gutter:i=10,className:l,overflow:h="hidden",...S},T)=>{var O;const M=l?` ${l}`:"";let K=10;if(Array.isArray(i)){const J=[...i];i=J[0],K=(O=J[1])!=null?O:J[0]}return(0,a.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(K/2)}px`,overflow:h},children:(0,a.jsx)("div",{className:`row${M}`,...S,ref:T})})};var st=(0,q.forwardRef)(Nt),xr=i=>gt(i)==="array",Qe=i=>xr(i)&&!!i.length;const Ot=({item:i,to:l,preventDefault:h,stopPropagation:S,className:T,...O})=>h?(0,a.jsx)("span",{className:`link${T?` ${T}`:""}`,...O}):(0,a.jsx)("a",{href:l,className:`link${T?` ${T}`:""}`,...O}),or=({item:i,...l})=>(0,a.jsx)("ul",{...l}),yr=(i,...l)=>{const h={};return Object.keys(i).filter(Boolean).map(S=>{h[S]=T=>i[S](T,...l)}),h},It=({data:i=[],events:l={},List:h=or,Link:S=Ot,leftIcon:T,rightIcon:O,collapsed:M,level:K=0,parentOpen:J=!0})=>i.map(ne=>{const{name:ce,path:fe,icon:xe,rightIcon:Be,active:Pe,open:me,children:Ve,linkProps:Oe}=ne,Te=Qe(Ve),Ut=yr(l,ne,K),lr=ne.id||fe||ce,xt=xe!=null?xe:T,Dt=Be!=null?Be:O,Et=M||J?"":"hidden";if(Te){const gr=[Et,me?"open":""].filter(Boolean).join(" ");return(0,a.jsxs)("li",{className:gr,"has-children":"true",...Ut,children:[(0,a.jsxs)(S,{item:{...ne,level:K},className:Pe?"active":"",to:fe,preventDefault:!0,stopPropagation:!1,...Oe,children:[xt?(0,a.jsx)("div",{className:"node-left-icon",children:xt===!0?(0,a.jsx)("i",{className:"default-left-icon"}):xt}):null,ce?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:ce})}):null,Dt?(0,a.jsx)("div",{className:"node-right-icon",children:Dt===!0?(0,a.jsx)("i",{className:"default-right-icon"}):Dt}):null]}),(0,a.jsx)(h,{item:ne,children:It({data:Ve,events:l,List:h,Link:S,leftIcon:T,rightIcon:O,collapsed:M,level:K+1,parentOpen:!!me})})]},lr)}return(0,a.jsx)("li",{className:Et,children:(0,a.jsxs)(S,{item:{...ne,level:K},className:Pe?"active":"",to:fe,...Oe,children:[xt?(0,a.jsx)("div",{className:"node-left-icon",children:xt===!0?(0,a.jsx)("i",{className:"default-left-icon"}):xt}):null,ce?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:ce})}):null]})},lr)});var Rt=It,_r=(i,...l)=>(0,a.jsx)("div",{"v-html":i,...l}),Ht=re(289),Ct={};Ct.styleTagTransform=L(),Ct.setAttributes=_(),Ct.insert=p().bind(null,"head"),Ct.domAPI=y(),Ct.insertStyleElement=U();var $r=c()(Ht.Z,Ct),Ar=Ht.Z&&Ht.Z.locals?Ht.Z.locals:void 0;const nr=i=>(0,a.jsx)("div",{style:{padding:"6px 15px"},children:i}),Rr=({activekey:i,tabs:l=[],switchTab:h,trackColor:S,flex:T},O)=>{var M;const[K,J]=(0,q.useState)(i!=null?i:(M=l[0])==null?void 0:M.key),[ne,ce]=(0,q.useState)({}),fe=(0,q.useRef)({}),xe=(0,q.useRef)();(0,q.useEffect)(()=>{const me=fe.current[K];me&&Be(me)},[]);const Be=me=>{const{left:Ve,width:Oe}=ht(me),Te=ht(xe.current).left;ce({left:Ve-Te,width:Oe})},Pe=(me,Ve)=>{me.stopPropagation(),J(Ve),typeof h=="function"&&h(Ve),Be(me.currentTarget)};return(0,a.jsxs)("div",{className:"tabs-header-wrap",ref:O,children:[(0,a.jsx)("ul",{className:`tabs-header${T?" flex":""}`,ref:xe,children:l.map(me=>(0,a.jsx)("li",{ref:Ve=>fe.current[me.key]=Ve,className:`th-item${K===me.key?" active":""}`,onClick:Ve=>Pe(Ve,me.key),children:typeof me.renderTabs=="function"?me.renderTabs(me,K===me.key):nr(me.value)},me.key))}),(0,a.jsx)("div",{className:"th-track",style:{...ne,color:S}})]})};var ir=(0,q.forwardRef)(Rr),zr=(i,l,h="id",S="children")=>{if(!xr(i))return null;const T=O=>{for(let M=0,K=O.length;M<K;M++){const J=O[M];if(J[h]===l)return[J];if(xr(J[S])){const ne=T(J[S]);if(ne)return[J].concat(ne)}}};return T(i)};const Vr=i=>++i;var Hr=()=>{const[,i]=(0,q.useState)(0);return(0,q.useCallback)(()=>i(Vr),[])};const Mr=i=>{const{children:l,open:h}=i;let S=0;if(h&&(l==null?void 0:l.length)){S=l.length;let T=0;return l.map(O=>T+=Mr(O)),S+T}return S};var Ur=({item:i,style:l,...h})=>(0,a.jsx)("ul",{style:{...l,"--count":Mr(i)},...h}),Fr=re(435),ar={};ar.styleTagTransform=L(),ar.setAttributes=_(),ar.insert=p().bind(null,"head"),ar.domAPI=y(),ar.insertStyleElement=U();var Jr=c()(Fr.Z,ar),Kr=Fr.Z&&Fr.Z.locals?Fr.Z.locals:void 0;const qr=i=>(0,a.jsx)("ul",{...i}),Xr=(i,l)=>i?({item:h,...S})=>(0,a.jsx)(qr,{className:l==="right"?"left":"",...S}):Ur;var Gr=i=>{var l;const{data:h=[],collapsed:S=!1,type:T="vertical",Link:O,width:M,bgColor:K,itemHeight:J,collapsedWidth:ne,itemPadding:ce,style:fe,className:xe,...Be}=i,Pe=(0,q.useRef)(),me=(0,q.useRef)();(0,q.useEffect)(()=>()=>clearTimeout(Pe.current),[]);const Ve=Hr(),Oe=T==="horizontal",Te=!Oe&&S,Ut={onClick:(Pt,jt)=>{if(Pt.stopPropagation(),!Oe&&!Te){const yt=zr(h,jt.path,"path"),Br=yt[yt.length-1];Br.open=!Br.open,Ve()}},onMouseEnter:(Pt,jt,yt)=>{Te&&!yt&&(clearTimeout(Pe.current),me.current.style.width="var(--maxWidth)")},onMouseLeave:(Pt,jt,yt)=>{Te&&!yt&&(Pe.current=setTimeout(()=>me.current.style.width="",200))}},lr=(Oe?["huxy-horizontal-tree",xe]:["huxy-tree",xe,Te?"collapsed":""]).filter(Boolean).join(" "),{float:xt,...Dt}=(l=Be==null?void 0:Be.style)!=null?l:{},Et={"--bgColor":K,"--itemHeight":J,"--nodeListWidth":M,...Dt};T==="horizontal"?(Et["--itemPadding"]=ce,Et["--nodeFloat"]=xt):(Et["--width"]=M,Et["--collapsedWidth"]=ne);const gr=Xr(Oe||Te,xt),Lr=({item:Pt,className:jt,...yt})=>Te&&!Pt.level?(0,a.jsx)(O,{className:`link${jt?` ${jt}`:""}`,...yt,title:Pt.title||Pt.name}):(0,a.jsx)(O,{className:`link${jt?` ${jt}`:""}`,...yt});return(0,a.jsx)("div",{ref:me,className:lr,style:Et,...Be,children:(0,a.jsx)("div",{className:"huxy-tree-track",children:(0,a.jsx)("ul",{className:"huxy-tree-root",children:Rt({data:h,events:Ut,List:gr,Link:Lr,leftIcon:!0,rightIcon:!0,collapsed:Te})})})})}}(),g}()})},4544:function(_t,he,He){(function(_e,Se){_t.exports=Se(He(7378))})(this,function(_e){return function(){"use strict";var Se={201:function(g,a,m){var c=m(703),w=m.n(c),y=m(414),j=m.n(y),p=j()(w());p.push([g.id,`@keyframes before {
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
`,""]),p.locals={link:"Iuy_e",active:"D3oJg"},a.Z=p},414:function(g){g.exports=function(a){var m=[];return m.toString=function(){return this.map(function(c){var w="",y=typeof c[5]!="undefined";return c[4]&&(w+="@supports (".concat(c[4],") {")),c[2]&&(w+="@media ".concat(c[2]," {")),y&&(w+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),w+=a(c),y&&(w+="}"),c[2]&&(w+="}"),c[4]&&(w+="}"),w}).join("")},m.i=function(c,w,y,j,p){typeof c=="string"&&(c=[[null,c,void 0]]);var $={};if(y)for(var _=0;_<this.length;_++){var H=this[_][0];H!=null&&($[H]=!0)}for(var U=0;U<c.length;U++){var F=[].concat(c[U]);y&&$[F[0]]||(typeof p!="undefined"&&(typeof F[5]=="undefined"||(F[1]="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {").concat(F[1],"}")),F[5]=p),w&&(F[2]&&(F[1]="@media ".concat(F[2]," {").concat(F[1],"}")),F[2]=w),j&&(F[4]?(F[1]="@supports (".concat(F[4],") {").concat(F[1],"}"),F[4]=j):F[4]="".concat(j)),m.push(F))}},m}},703:function(g){g.exports=function(a){return a[1]}},53:function(g,a,m){var c,w=m(899),y=Symbol.for("react.element"),j=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function H(U,F,L){var Z,te={},pe=null,Ce=null;L!==void 0&&(pe=""+L),F.key!==void 0&&(pe=""+F.key),F.ref!==void 0&&(Ce=F.ref);for(Z in F)p.call(F,Z)&&!_.hasOwnProperty(Z)&&(te[Z]=F[Z]);if(U&&U.defaultProps)for(Z in F=U.defaultProps,F)te[Z]===void 0&&(te[Z]=F[Z]);return{$$typeof:y,type:U,key:pe,ref:Ce,props:te,_owner:$.current}}c=j,a.jsx=H,a.jsxs=H},458:function(g,a,m){g.exports=m(53)},748:function(g){var a=[];function m(y){for(var j=-1,p=0;p<a.length;p++)if(a[p].identifier===y){j=p;break}return j}function c(y,j){for(var p={},$=[],_=0;_<y.length;_++){var H=y[_],U=j.base?H[0]+j.base:H[0],F=p[U]||0,L="".concat(U," ").concat(F);p[U]=F+1;var Z=m(L),te={css:H[1],media:H[2],sourceMap:H[3],supports:H[4],layer:H[5]};if(Z!==-1)a[Z].references++,a[Z].updater(te);else{var pe=w(te,j);j.byIndex=_,a.splice(_,0,{identifier:L,updater:pe,references:1})}$.push(L)}return $}function w(y,j){var p=j.domAPI(j);p.update(y);var $=function(_){if(_){if(_.css===y.css&&_.media===y.media&&_.sourceMap===y.sourceMap&&_.supports===y.supports&&_.layer===y.layer)return;p.update(y=_)}else p.remove()};return $}g.exports=function(y,j){j=j||{},y=y||[];var p=c(y,j);return function($){$=$||[];for(var _=0;_<p.length;_++){var H=p[_],U=m(H);a[U].references--}for(var F=c($,j),L=0;L<p.length;L++){var Z=p[L],te=m(Z);a[te].references===0&&(a[te].updater(),a.splice(te,1))}p=F}}},736:function(g){var a={};function m(w){if(typeof a[w]=="undefined"){var y=document.querySelector(w);if(window.HTMLIFrameElement&&y instanceof window.HTMLIFrameElement)try{y=y.contentDocument.head}catch(j){y=null}a[w]=y}return a[w]}function c(w,y){var j=m(w);if(!j)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");j.appendChild(y)}g.exports=c},706:function(g){function a(m){var c=document.createElement("style");return m.setAttributes(c,m.attributes),m.insert(c,m.options),c}g.exports=a},567:function(g,a,m){function c(w){var y=m.nc;y&&w.setAttribute("nonce",y)}g.exports=c},306:function(g){function a(w,y,j){var p="";j.supports&&(p+="@supports (".concat(j.supports,") {")),j.media&&(p+="@media ".concat(j.media," {"));var $=typeof j.layer!="undefined";$&&(p+="@layer".concat(j.layer.length>0?" ".concat(j.layer):""," {")),p+=j.css,$&&(p+="}"),j.media&&(p+="}"),j.supports&&(p+="}");var _=j.sourceMap;_&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(_))))," */")),y.styleTagTransform(p,w,y.options)}function m(w){if(w.parentNode===null)return!1;w.parentNode.removeChild(w)}function c(w){var y=w.insertStyleElement(w);return{update:function(j){a(y,w,j)},remove:function(){m(y)}}}g.exports=c},62:function(g){function a(m,c){if(c.styleSheet)c.styleSheet.cssText=m;else{for(;c.firstChild;)c.removeChild(c.firstChild);c.appendChild(document.createTextNode(m))}}g.exports=a},899:function(g){g.exports=_e}},ge={};function Q(g){var a=ge[g];if(a!==void 0)return a.exports;var m=ge[g]={id:g,exports:{}};return Se[g](m,m.exports,Q),m.exports}(function(){Q.n=function(g){var a=g&&g.__esModule?function(){return g.default}:function(){return g};return Q.d(a,{a}),a}})(),function(){Q.d=function(g,a){for(var m in a)Q.o(a,m)&&!Q.o(g,m)&&Object.defineProperty(g,m,{enumerable:!0,get:a[m]})}}(),function(){Q.o=function(g,a){return Object.prototype.hasOwnProperty.call(g,a)}}(),function(){Q.r=function(g){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})}}(),function(){Q.nc=void 0}();var re={};return function(){Q.r(re),Q.d(re,{Link:function(){return Sr},routeStore:function(){return $t},useRoute:function(){return Pr},useRouter:function(){return Ir}});var g=Q(899),a=Q.n(g),m=s=>Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),c=s=>m(s)==="array",w=s=>m(s)==="object",y=s=>(s==null?void 0:s.$$typeof)&&typeof s.$$typeof=="symbol"&&s.$$typeof.description==="react.element",j=s=>s==null?void 0:s.__v_isVNode,p=(s,f)=>Object.prototype.hasOwnProperty.call(s!=null?s:{},f);const $=s=>{if(!c(s)&&!w(s))return s;const f=c(s)?[]:{};for(const C in s)if(p(s,C)){const b=s[C];f[C]=y(b)||j(b)||typeof b!="object"?b:b!==s?$(b):"cyclic"}else Object.setPrototypeOf(f,{[C]:s[C]});return f};var _=$,H=s=>m(s)==="function",U=s=>m(s)==="promise"||w(s)&&H(s.then),F=(s,f=12e4,C="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!U(s))return{};let b=null,x=null;return{promiseFn:new Promise((B,Y)=>{b=(W="canceled")=>{clearTimeout(x),B({canceled:!0,errMsg:W})},f&&(f=typeof f!="number"?12e4:f,x=setTimeout(()=>b(C),f)),s.then(W=>{clearTimeout(x),B({result:W,errMsg:!1})}).catch(W=>{clearTimeout(x),Y(W)})}),cancelFn:b}},L=s=>s?s.charAt(s.length-1)==="/"?s.slice(0,-1):s:"",Z=Q(458),te=(s,f)=>(0,Z.jsx)("div",{dangerouslySetInnerHTML:{__html:s},...f}),pe=s=>{const{error:f={},info:C=""}=s||{},{message:b,stack:x,errMsg:B}=f;let Y=B||x||f.toString();Y=`${Y}
${C}`.replace(/\r|\n|\r\n/g,"<br/>"),Y=Y.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Y=Y.replace(/\s/g,"&nbsp;");const W=b==null?void 0:b.slice(0,120).split(". ").slice(0,2).join(". ");return(0,Z.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[te(Y,{style:{color:"red"}}),W&&(0,Z.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${W}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})};const Ce=(s,f,C,b,x=[])=>{const B=P=>{for(let R=0,ae=P.length;R<ae;R++){const we=P[R],be=we[b].split("?")[0];if(new RegExp("^"+be.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return we;if(c(we[C])){const oe=B(we[C]);if(oe)return oe}}},Y=B(s);if(!Y)return"/404";const{redirect:W}=Y;return W?x.includes(W)?x:(x.push(W),Ce(s,W.split("?")[0],C,b,x)):x[x.length-1]},et=(s,f,C,b,x)=>{if(!c(s))return null;const B=ae=>{const we=ae.split("/"),be=f.split("/"),oe={};return we.map((ve,Ie)=>ve.indexOf(":")===0&&(oe[ve.slice(1)]=be[Ie])),oe},Y=(ae,we)=>{const be=[],oe=we.split("/:")[0];for(let ve=0,Ie=ae.length;ve<Ie;ve++){const se=ae[ve];if(se[x]===oe){se.active=!0;const{name:ee,title:ke,icon:Le,params:De}=se;be.push({name:ee,title:ke,icon:Le,params:De,[x]:oe})}else if(we.indexOf(`${se[x]}/`)===0){se.active=!0;const ee=B(se[x]),ke=Object.keys(ee).map(kt=>ee[kt]).join("/"),{name:Le,title:De,icon:Ze}=se,qe=ke?`${oe}/${ke}`:se[x];be.push({name:Le,title:De,icon:Ze,[x]:qe,params:{...se.params,...ee}})}else if(se[x]===we){se.active=!0;const ee=B(se[x]),{[b]:ke,...Le}=se;be.push({...Le,[x]:f,params:{...Le.params,...C,...ee}})}}return be},W=(ae,we)=>{for(let be=0,oe=ae.length;be<oe;be++){const ve=ae[be];if(we.indexOf(`${ve[x]}/`)===0){ve.active=!0;return}}},P=ae=>{for(let we=0,be=ae.length;we<be;we++){const oe=ae[we],ve=(oe[x]||"").split("?")[0];if(ve===f){oe.hideMenu&&W(ae,oe.parentPath||ve),oe.active=!0;const{[b]:Ie,...se}=oe;return[{...se,params:{...se.params,...C}}]}if(new RegExp("^"+ve.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return Y(ae,ve);if(c(oe[b])){const Ie=P(oe[b]);if(Ie){oe.active=!0,oe.open=!0;const{[b]:se,...ee}=oe;return[ee,...Ie]}}}},R=P(s)||[];return{result:s,current:R}},tt=(s,f,C)=>s.filter(b=>b.hideMenu||b[C].indexOf("/:")>-1?!1:(c(b[f])&&(b[f]=tt(b[f],f,C)),!0));var q=(s,f,C,b="children",x="path")=>{const B=Ce(s,f,b,x);if(B)return{redirect:B};const{result:Y,current:W}=et(s,f,C,b,x),P=tt(Y,b,x);return{current:W,menu:P}},Ae=()=>{const s={};return{on:(f,C)=>{s[f]||(s[f]=[]),s[f].indexOf(C)===-1&&s[f].push(C)},emit:(f,C)=>{s[f]&&s[f].map(b=>b(C))},off:(f,C=null)=>{if(s[f]){if(typeof C!="function")return s[f]=[];const b=s[f].indexOf(C);b>-1&&s[f].splice(b,1)}}}};const ze=s=>{const f={};for(let C in s)p(s,C)||(f[C]=s[C]);return f};var Ue=(s,f)=>{if(!w(s))return f;if(!w(f))return s;const C={...ze(s),...ze(f)},b={...s,...f};return Object.keys(C).map(x=>{Object.setPrototypeOf(b,{[x]:C[x]})}),b},gt=()=>{const{on:s,emit:f,off:C}=Ae(),b={};return{getState:x=>_(b[x]),setState:(x,B=!1)=>{if(typeof x=="function"&&(x=x(_(b))),!w(x))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const Y=_(x);Object.keys(Y).map(W=>{const P=b[W],R=Y[W],ae=w(R)&&w(P)?Ue(P,R):R;!B&&f(W,ae),b[W]=ae})},subscribe:(x,B)=>(s(x,B),()=>C(x,B)),unsubscribe:C,clean:x=>{typeof x=="string"?b[x]=void 0:Array.isArray(x)?x.map(B=>b[B]=void 0):Object.keys(b).map(B=>b[B]=void 0)}}},Ge=s=>(f,C)=>{const[b,x]=(0,g.useState)(()=>{const P=s==null?void 0:s.getState(f);return P!==void 0?P:(C!==void 0&&(s==null||s.setState({[f]:C},!0)),C)}),B=(0,g.useCallback)(P=>s==null?void 0:s.setState({[f]:typeof P=="function"?P(s==null?void 0:s.getState(f)):P}),[]),Y=(0,g.useCallback)(P=>s==null?void 0:s.subscribe(f,P),[]),W=(0,g.useCallback)((P=P)=>s==null?void 0:s.clean(P),[]);return(0,g.useEffect)(()=>{s==null||s.subscribe(f,P=>x(P))},[]),[b,B,Y,W]};const it=gt(),A=Ge(it),le=Ae(),G=Ae(),Ee="push-emitter",Fe="replace-emitter",ut="useRoute-emitter",Ye={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},rt={getState:()=>history.state,go:s=>history.go(s),forward:()=>history.forward(),back:()=>history.back()};var Ne=s=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(s);const Xe=(s,f)=>{const C=["#/","/"],b=C[!!f-0];if(!s||C.includes(s))return b;const x=s.charAt(s.length-1)==="/"?s.slice(0,-1):s;return f||x.indexOf("#/")>-1?x:`#${x}`},Je=(s,f,C,b=!1)=>{const x=Xe(f,C);return b?x:C?s&&x==="/"?s:`${s}${x}`:s?`${s}/${x}`:x},sr=(s,f,C,b,x,B)=>{if(!c(s))return s;const Y=(W,P="")=>W.filter(R=>!R.denied).map(R=>{if(!B&&!R.exact&&!Ne(R[b])){(!R[b]||R[b]==="javascript:;")&&(R[b]="");const ae=R[b].charAt(0)==="/"&&P.charAt(P.length-1)==="/"?R[b].slice(1):R[b].charAt(0)!=="/"&&P.charAt(P.length-1)!=="/"?`/${R[b]}`:R[b];R[b]=P?P+ae:Je(x,ae,f)}return R.redirect&&(R.redirect=Je(x,R.redirect,f)),c(R[C])&&(R[C]=Y(R[C],R[b]),!R.redirect&&R[C].length&&(R.redirect=R[C][0][b])),R});return Y(s)};var ct=s=>{if(!w(s))return"";const f=[];return Object.keys(s).map((C,b)=>{const x=b>0?"&":"?";f.push(`${x}${C}=${s[C]}`)}),f.join("")},St=(s="")=>{const[f,C]=s.split("?");if(C){const b={};return C.split("&").map(x=>{const[B,Y]=x.split("=");b[B]=Y}),{path:f,params:b}}return{path:f}};const Lt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Xt=(s,f)=>{for(let C=s.length-1,b;b=s[C--];){const{title:x,name:B}=b;if(typeof x=="string"&&x.length)return document.title=x;if((x==null||x===!0)&&B)return document.title=f?`${B}-${f}`:B;if(f)return document.title=f}},Bt=s=>{const{pathname:f,search:C,hash:b}=location;if(s){const W=Xe(f,s),P=decodeURIComponent(`${W}${C}`),{params:R}=St(P);return{path:P,params:R}}const x=decodeURIComponent(Xe(b,s)),{params:B}=St(x),Y=L(f);return{path:Y?`${Y}/${x}`:x,params:B}},dt=(s,f,C)=>{typeof s=="function"&&s({...f,stay:new Date-C})},Gt=(s,f,C,b)=>{let x,B,Y;if(typeof s=="string")x=s;else if(w(s))x=s.path,B=s.params,Y=s.query;else return;!x||x==="."||x==="./"?x=b:x.indexOf("./")===0&&(x=`${b.split("?")[0]}${x.replace("./","/")}`),x=Je(f,x,C,s==null?void 0:s.exact);const W=St(x);x=W.path;const P={...W.params,...Y},R=ct(P);return x=`${x}${R}`,B={...B,...P},{path:x,params:B}},Ke=(s,f)=>{const C=s.split(f);return C.length>1?["","/"].includes(C[1].slice(0,1)):!1},ur=Ae();var Jt=s=>{const{on:f,emit:C,off:b}=ur;return{on:x=>f(s,x),emit:x=>C(s,x),off:x=>b(s,x)}},ft=s=>(f,C)=>{const{getState:b,setState:x,subscribe:B,unsubscribe:Y,clean:W}=s;return C!==void 0&&x({[f]:C},!0),{getState:()=>b(f),setState:(P,R)=>x({[f]:P},R),subscribe:P=>B(f,P),unsubscribe:()=>Y(f),clean:()=>W(f)}};const At=gt();var bt=ft(At);const cr=Jt("push-emitter"),at=Jt("replace-emitter"),$t=bt("route-store"),dr=Ae(),Mt=gt(),fr=Ge(Mt);var ht=()=>![typeof window,typeof document].includes("undefined"),u=s=>{if(!ht())return;const f=document.createElement("div");return f.innerHTML=s,f.children[0]},v=Object.defineProperty,E=(s,f,C)=>f in s?v(s,f,{enumerable:!0,configurable:!0,writable:!0,value:C}):s[f]=C,N=(s,f,C)=>(E(s,typeof f!="symbol"?f+"":f,C),C);class I extends a().Component{constructor(){super(...arguments),N(this,"state",{error:null})}static getDerivedStateFromError(f){return{error:f}}componentDidCatch(f,C){const{errorReport:b}=this.props;typeof b=="function"&&b({error:f,info:C.componentStack})}render(){const{error:f}=this.state,{fallback:C,children:b}=this.props;return f?C(f):b}}var X=({children:s,report:f})=>{var C;const b=(0,g.useRef)();return(C=b.current)!=null&&C.state&&(b.current.state.error=null),(0,Z.jsx)(I,{ref:b,fallback:(x,B)=>pe({error:x,info:B}),errorReport:f,children:s})},de=Q(748),ue=Q.n(de),ie=Q(306),$e=Q.n(ie),lt=Q(736),vt=Q.n(lt),pt=Q(567),Re=Q.n(pt),Wt=Q(706),zt=Q.n(Wt),wt=Q(62),mt=Q.n(wt),ot=Q(201),We={};We.styleTagTransform=mt(),We.setAttributes=Re(),We.insert=vt().bind(null,"head"),We.domAPI=$e(),We.insertStyleElement=zt();var Yr=ue()(ot.Z,We),Tr=ot.Z&&ot.Z.locals?ot.Z.locals:void 0,Kt=({global:s,absolute:f})=>(0,Z.jsx)("div",{className:`spinner${s?" global":""}${f?" absolute":""}`,children:(0,Z.jsx)("figure",{className:"spinning"})}),vr=()=>{const s=(0,g.useRef)([]);return(0,g.useEffect)(()=>()=>{s.current.map(f=>f.cancelFn()),s.current=[]},[]),{cancelablePromise:(0,g.useCallback)((f,C=!0)=>{const b=F(f,C);return s.current.indexOf(b)===-1&&s.current.push(b),b.promiseFn},[])}},wr=(s={})=>{const{cancelablePromise:f}=vr(),[C,b]=(0,g.useState)(s),x=(0,g.useRef)({}),B=(0,g.useRef)({}),Y=(0,g.useCallback)((P=null)=>{Array.isArray(P)&&P.length?P.map(R=>x.current[R]=s[R]):x.current=s},[]),W=(0,g.useCallback)((P,R,ae=!1)=>{const we=Object.keys(P),be=JSON.stringify(we.sort());if(!B.current[be]){B.current[be]=!0,ae&&Y(Array.isArray(ae)?ae:we),we.map(oe=>{x.current[oe]||(x.current[oe]={}),x.current[oe].pending=!0}),b({...x.current});for(let oe=0,ve=we.length;oe<ve;oe++){const Ie=we[oe];f(P[Ie]).then(se=>{let{result:ee,errMsg:ke}=se;oe===ve-1&&(B.current[be]=!1),typeof R=="function"&&(ee=R(ee)||ee),x.current[Ie]={...ee,pending:!1},ke===!1&&b({...x.current})}).catch(se=>{throw oe===ve-1&&(B.current[be]=!1),x.current[Ie]={error:se,pending:!1},b({...x.current}),se})}}},[]);return[C,W,Y]};const Qt=s=>Object.keys(s).length;var kr=s=>{const{Comp:f,restResolve:C,loadPromise:b,params:x,children:B}=s,[Y,W]=wr(),[P,R]=wr();return(0,g.useEffect)(()=>{Qt(C)&&W(C),Qt(b)&&R(b)},[C,b]),(0,g.useEffect)(()=>{const ae=Qt(Y);ae&&ae===Qt(C)&&x.store.setState(Y)},[Y]),(0,Z.jsx)(f,{...x,...Y,...P,children:B})};const Cr=s=>s===!1?null:y(s)?s:H(s)?(0,Z.jsx)(s,{}):(0,Z.jsx)(Kt,{}),Er=({Loading:s,ErrorBoundary:f,loadedComp:C})=>{const b=(0,Z.jsx)(g.Suspense,{fallback:Cr(s),children:C});return f===!1?b:H(f)?(0,Z.jsx)(f,{children:b}):(0,Z.jsx)(X,{children:b})};var hr=({Comp:s,routerProps:f,children:C})=>{const{params:b,...x}=f,{loading:B,errorBoundary:Y,...W}=b,P=(0,Z.jsx)(kr,{Comp:s,...x,params:W,children:C});return Er({Loading:B,ErrorBoundary:Y,loadedComp:P})};const pr={},Nr=(s,f,C)=>{const b={},x={};return w(s)?(Object.keys(s).map(B=>{const Y=f.getState(B);Y==null?x[B]=s[B](C):b[B]=Y}),{cachedResolve:b,restResolve:x}):{cachedResolve:b,restResolve:x}},er=(s,f)=>{if(!w(s))return{};const C={};return Object.keys(s).map(b=>C[b]=s[b](f)),C},mr=(s,f,C)=>U(C)?C.then(b=>{var x;return hr({Comp:s,routerProps:f,children:(x=b.default)!=null?x:b})}):hr({Comp:s,routerProps:f,children:C});var Or=s=>{const{current:f,menu:C,...b}=s,x=f.map(W=>{const{component:P,resolve:R,loadData:ae,loading:we,errorBoundary:be,icon:oe,...ve}=W;return ve}),B=[...f].filter(W=>W.component),Y=(W=0)=>{if(!B.length)return null;const P=B.shift(),{component:R,resolve:ae,loadData:we,icon:be,key:oe,...ve}=P;if(typeof R=="function"||U(R)){const Ie=ve.path;let se=pr[Ie];const{cachedResolve:ee,restResolve:ke}=Nr(ae,b.store,ve),Le={loadPromise:er(we,ve),restResolve:ke,params:{current:x,...b,...ve,...ee}},De=Y(W+1);if(se)return mr(se,Le,De);try{se=R(),se=y(se)?R:se}catch(Ze){se=R}return U(se)?se.then(Ze=>{var qe;return se=(qe=Ze.default)!=null?qe:Ze,pr[Ie]=se,mr(se,Le,De)}):(pr[Ie]=se,mr(se,Le,De))}return typeof R=="string"?u(R):R};return Y()},Ir=s=>{const[f,C]=(0,g.useState)(s),[b,x]=(0,g.useState)(),[B,Y]=(0,g.useState)(),W=(0,g.useRef)(),P=(0,g.useRef)(),R=(0,g.useRef)(),ae=(0,g.useRef)(),we=()=>{typeof W.current=="function"&&(W.current({cancel:Ye.cancelMsg}),W.current=null)},be=(0,g.useCallback)(ee=>{typeof ee=="function"?C(ke=>({...ke,...ee(ke)})):w(ee)&&C(ke=>({...ke,...ee}))},[]),oe=(ee,ke="pushState")=>{const{basepath:Le,browserRouter:De}=ae.current,Ze=R.current,{path:qe,params:kt}=Gt(ee,Le,De,Ze);qe!==Ze&&se({inputPath:qe,inputParams:kt},()=>history[ke](ee==null?void 0:ee.state,"",qe))},ve=(0,g.useCallback)(ee=>oe(ee),[]),Ie=(0,g.useCallback)(ee=>oe(ee,"replaceState"),[]),se=(0,g.useCallback)(({inputPath:ee="",inputParams:ke={}},Le)=>{const De=+new Date,{browserRouter:Ze,childKey:qe,idKey:kt,title:Tt,routers:nt,beforeRender:rr,afterRender:Vt,basepath:Nt,allowedNotFound:st,...xr}=ae.current;if(!ee){const{path:Qe,params:Ot}=Bt(Ze);ee=Qe,ke={...ke,...Ot}}new Promise((Qe,Ot)=>{nt!=null&&nt.length||Ot("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),ee!==R.current&&typeof rr=="function"?rr({path:ee,params:ke,prevPath:R.current},Qe,Ot):Qe()}).then(Qe=>{var Ot,or;if(Qe===!1)return;const yr=Qe==null?void 0:Qe.path;if(yr&&Je(Nt,yr,Ze)!==ee){Ie(Qe);return}P.current=(Ot=P.current)!=null?Ot:ee;const{redirect:It,current:Rt,menu:_r}=q(_(nt),ee.split("?")[0],ke,qe,kt);if(It){if(st&&It==="/404"&&(typeof st=="boolean"||typeof st=="string"&&Ke(P.current,st)||c(st)&&st.find($r=>Ke(P.current,$r))))return;if(c(It)){console.error(`\u522B\u95F9\uFF0C[${[ee,...It].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}ve({path:It,exact:It!=="/404"});return}Le==null||Le(),(ee==null?void 0:ee.split("?")[0])!==((or=R.current)==null?void 0:or.split("?")[0])&&Lt(),Xt(Rt,Tt);const Ht={eventBus:dr,store:Mt,useStore:fr,...xr,updateRouter:be,router:{push:ve,replace:Ie},current:Rt,menu:_r,inputPath:P.current,prevPath:R.current,basepath:Nt,title:Tt,history:rt};$t.setState({...Ht,browserRouter:Ze});const Ct=Or(Ht);if(R.current=ee,P.current=null,we(),U(Ct)){const{promiseFn:$r,cancelFn:Ar}=F(Ct,{delay:Ye.delay,msg:{timeout:Ye.timeoutMsg}});return W.current=Ar,Y(!0),$r.then(nr=>{W.current=null;const{result:Rr,errMsg:ir}=nr,zr=ir===!1?Rr:ir!=null&&ir.timeout?pe({error:{errMsg:`${ee} ${ir.timeout}`}}):null;zr&&(Y(!1),dt(Vt,Rt.slice(-1)[0],De),x(zr))}).catch(nr=>{throw W.current=null,Y(!1),dt(Vt,Rt.slice(-1)[0],De),x(pe({error:nr})),nr})}dt(Vt,Rt.slice(-1)[0],De),x(Ct)}).catch(Qe=>{throw x(pe({error:Qe})),Qe})},[]);return(0,g.useEffect)(()=>{const{childKey:ee="children",idKey:ke="path",browserRouter:Le=!1,routers:De=[],basepath:Ze="",exact:qe=!1,inputPath:kt="",inputParams:Tt={},...nt}=f,rr=L(Ze),Vt=sr(_(De),Le,ee,ke,rr,qe);ae.current={...nt,childKey:ee,idKey:ke,browserRouter:Le,routers:Vt,basepath:rr};const Nt=Le?"popstate":"hashchange",st=()=>se({});return se({inputPath:kt,inputParams:Tt}),cr.on(ve),at.on(Ie),window.addEventListener(Nt,st,!1),()=>{we(),cr.off(ve),at.off(Ie),window.removeEventListener(Nt,st,!1)}},[f]),{updateRouter:be,output:b,loading:B}},Zt=s=>{const{to:f,onClick:C,preventDefault:b,stopPropagation:x=!0,exact:B=!0,target:Y,...W}=s,P=()=>{const R=typeof f=="string"?{exact:B,path:f}:{exact:B,...f};cr.emit(R)};return R=>{var ae;if(R.preventDefault(),x&&R.stopPropagation(),!(W!=null&&W.disabled)){if(!b){if(Y){const{browserRouter:we}=$t.getState(),be=typeof f=="string"?f:(ae=f==null?void 0:f.path)!=null?ae:"",oe=ct(f==null?void 0:f.query),ve=we||be.indexOf("#/")>-1||Ne(be);window==null||window.open(`${ve?"":"#"}${be}${oe}`,Y);return}P()}typeof C=="function"&&C()}}},Yt=Q(982),Ft={};Ft.styleTagTransform=mt(),Ft.setAttributes=Re(),Ft.insert=vt().bind(null,"head"),Ft.domAPI=$e(),Ft.insertStyleElement=zt();var Dr=ue()(Yt.Z,Ft),tr=Yt.Z&&Yt.Z.locals?Yt.Z.locals:void 0;const jr=s=>{if(!s)return tr.link;const f=s.trim().split(" ").filter(Boolean),C=f.findIndex(b=>b==="active");return C>-1?(f.splice(C,1),[tr.link,tr.active,...f].join(" ")):[...f,tr.link].join(" ")};var Sr=s=>{const{to:f,onClick:C,preventDefault:b,stopPropagation:x,exact:B,target:Y,className:W,...P}=s;return(0,Z.jsx)("span",{onClick:Zt(s),className:jr(W),...P})};const Pr=()=>$t.getState()}(),re}()})},2445:function(_t,he,He){(function(_e,Se){_t.exports=Se(He(7378))})(this,function(_e){return function(){"use strict";var Se={53:function(g,a,m){var c,w=m(899),y=Symbol.for("react.element"),j=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,_={key:!0,ref:!0,__self:!0,__source:!0};function H(U,F,L){var Z,te={},pe=null,Ce=null;L!==void 0&&(pe=""+L),F.key!==void 0&&(pe=""+F.key),F.ref!==void 0&&(Ce=F.ref);for(Z in F)p.call(F,Z)&&!_.hasOwnProperty(Z)&&(te[Z]=F[Z]);if(U&&U.defaultProps)for(Z in F=U.defaultProps,F)te[Z]===void 0&&(te[Z]=F[Z]);return{$$typeof:y,type:U,key:pe,ref:Ce,props:te,_owner:$.current}}c=j,a.jsx=H,c=H},458:function(g,a,m){g.exports=m(53)},899:function(g){g.exports=_e}},ge={};function Q(g){var a=ge[g];if(a!==void 0)return a.exports;var m=ge[g]={exports:{}};return Se[g](m,m.exports,Q),m.exports}(function(){Q.d=function(g,a){for(var m in a)Q.o(a,m)&&!Q.o(g,m)&&Object.defineProperty(g,m,{enumerable:!0,get:a[m]})}})(),function(){Q.o=function(g,a){return Object.prototype.hasOwnProperty.call(g,a)}}(),function(){Q.r=function(g){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(g,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(g,"__esModule",{value:!0})}}();var re={};return function(){Q.r(re),Q.d(re,{createContainer:function(){return a},useAsync:function(){return $},useCancelablePromise:function(){return p},useClickAway:function(){return U},useDebounce:function(){return L},useDelayState:function(){return pe},useEleResize:function(){return Ue},useEvent:function(){return gt},useFirstMounted:function(){return Z},useInterval:function(){return Ge},usePrevious:function(){return it},useRaf:function(){return ze},useScroll:function(){return le},useSearch:function(){return Lt},useStateFromProps:function(){return Xt},useStore:function(){return Jt},useTime:function(){return dr},useUpdate:function(){return fr},useUpdateEffect:function(){return te},useWinResize:function(){return ht}});var g=Q(899),a=u=>(v,E)=>{const[N,I]=(0,g.useState)(()=>{const ie=u==null?void 0:u.getState(v);return ie!==void 0?ie:(E!==void 0&&(u==null||u.setState({[v]:E},!0)),E)}),X=(0,g.useCallback)(ie=>u==null?void 0:u.setState({[v]:typeof ie=="function"?ie(u==null?void 0:u.getState(v)):ie}),[]),de=(0,g.useCallback)(ie=>u==null?void 0:u.subscribe(v,ie),[]),ue=(0,g.useCallback)((ie=ie)=>u==null?void 0:u.clean(ie),[]);return(0,g.useEffect)(()=>{u==null||u.subscribe(v,ie=>I(ie))},[]),[N,X,de,ue]},m=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),c=u=>m(u)==="object",w=u=>m(u)==="function",y=u=>m(u)==="promise"||c(u)&&w(u.then),j=(u,v=12e4,E="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!y(u))return{};let N=null,I=null;return{promiseFn:new Promise((X,de)=>{N=(ue="canceled")=>{clearTimeout(I),X({canceled:!0,errMsg:ue})},v&&(v=typeof v!="number"?12e4:v,I=setTimeout(()=>N(E),v)),u.then(ue=>{clearTimeout(I),X({result:ue,errMsg:!1})}).catch(ue=>{clearTimeout(I),de(ue)})}),cancelFn:N}},p=()=>{const u=(0,g.useRef)([]);return(0,g.useEffect)(()=>()=>{u.current.map(v=>v.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,g.useCallback)((v,E=!0)=>{const N=j(v,E);return u.current.indexOf(N)===-1&&u.current.push(N),N.promiseFn},[])}},$=(u={})=>{const{cancelablePromise:v}=p(),[E,N]=(0,g.useState)(u),I=(0,g.useRef)({}),X=(0,g.useRef)({}),de=(0,g.useCallback)((ie=null)=>{Array.isArray(ie)&&ie.length?ie.map($e=>I.current[$e]=u[$e]):I.current=u},[]),ue=(0,g.useCallback)((ie,$e,lt=!1)=>{const vt=Object.keys(ie),pt=JSON.stringify(vt.sort());if(!X.current[pt]){X.current[pt]=!0,lt&&de(Array.isArray(lt)?lt:vt),vt.map(Re=>{I.current[Re]||(I.current[Re]={}),I.current[Re].pending=!0}),N({...I.current});for(let Re=0,Wt=vt.length;Re<Wt;Re++){const zt=vt[Re];v(ie[zt]).then(wt=>{let{result:mt,errMsg:ot}=wt;Re===Wt-1&&(X.current[pt]=!1),typeof $e=="function"&&(mt=$e(mt)||mt),I.current[zt]={...mt,pending:!1},ot===!1&&N({...I.current})}).catch(wt=>{throw Re===Wt-1&&(X.current[pt]=!1),I.current[zt]={error:wt,pending:!1},N({...I.current}),wt})}}},[]);return[E,ue,de]},_=(u,v)=>Object.prototype.hasOwnProperty.call(u!=null?u:{},v),H=u=>_(u,"current"),U=(u,v,E="click")=>{(0,g.useEffect)(()=>{const N=X=>{const de=H(u)?u.current:u;(de==null?void 0:de.contains)&&!de.contains(X.target)&&v(X)},I=typeof E=="string"?[E]:E;return I.map(X=>{document.addEventListener(X,N,!1)}),()=>{I.map(X=>{document.removeEventListener(X,N,!1)})}},[u,v,E])},F=(u=()=>{},v=60)=>{let E=null;return function(...N){clearTimeout(E),E=setTimeout(()=>u.apply(this,N),v)}},L=(u,v=60)=>(0,g.useMemo)(()=>F(u,v),[v]),Z=()=>{const u=(0,g.useRef)(!0);return u.current?(u.current=!1,!0):!1},te=(u,v=[])=>{const E=Z();(0,g.useEffect)(()=>{if(!E)return u()},v)},pe=(u,v=450)=>{const[E,N]=(0,g.useState)(u);return te(()=>{let I;return u||v===0?N(u):I=setTimeout(()=>N(u),v),()=>I&&clearTimeout(I)},[u]),[E,N]},Ce=()=>![typeof window,typeof document].includes("undefined"),et=u=>m(u).indexOf("element")>-1,tt=(u=null)=>{var v,E;return Ce()?et(u)?{width:u.clientWidth,height:u.clientHeight}:{width:(v=window.innerWidth)!=null?v:document.documentElement.clientWidth,height:(E=window.innerHeight)!=null?E:document.documentElement.clientHeight}:{width:0,height:0}};const q=(u,v)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const E=document.createElement("object");return E.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),E.setAttribute("class","resize-sensor"),E.onload=()=>{E.contentDocument.defaultView.addEventListener("resize",v,!1),v()},E.type="text/html",u.appendChild(E),E.data="about:blank",E};var Ae=(u,v=60)=>{if(!Ce())return;u=H(u)?u.current:u!=null?u:document.body;let E,N=[];const I=F(()=>N.map(ie=>ie(u)),v),X=ie=>{E||(E=q(u,I)),N.indexOf(ie)===-1&&N.push(ie)},de=ie=>{const $e=N.indexOf(ie);$e!==-1&&N.splice($e,1),N.length===0&&E&&ue()},ue=()=>{E&&E.parentNode&&(E.contentDocument&&E.contentDocument.defaultView.removeEventListener("resize",I,!1),E.parentNode.removeChild(E),E=void 0,N=[])};return{element:u,bind:X,unbind:de,destroy:ue}},ze=(u={})=>{const v=(0,g.useRef)(0),[E,N]=(0,g.useState)(u),I=(0,g.useCallback)(X=>{cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>N(X))},[]);return(0,g.useEffect)(()=>()=>cancelAnimationFrame(v.current),[]),[E,I]},Ue=(u=null,v=60)=>{const E=H(u)?u.current:u,{bind:N,destroy:I}=Ae(E,v),[X,de]=ze(tt(E));return(0,g.useEffect)(()=>(N(()=>E&&de(tt(E))),()=>I()),[E]),X},gt=u=>{const v=(0,g.useRef)(null);return(0,g.useLayoutEffect)(()=>{v.current=u}),(0,g.useCallback)(v.current,[])},Ge=(u,v)=>{const E=(0,g.useRef)();(0,g.useEffect)(()=>{E.current=u},[u]),(0,g.useEffect)(()=>{if(v){const N=setInterval(()=>E.current(),v);return()=>clearInterval(N)}},[v])},it=u=>{const v=(0,g.useRef)();return(0,g.useEffect)(()=>{v.current=u},[u]),v.current},A=(u=null)=>{var v,E,N,I;return Ce()?et(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:(E=(v=window.pageXOffset)!=null?v:document.documentElement.scrollLeft)!=null?E:document.body.scrollLeft,top:(I=(N=window.pageYOffset)!=null?N:document.documentElement.scrollTop)!=null?I:document.body.scrollTop}:{left:0,top:0}},le=(u=null)=>{const[v,E]=ze(A(u));return(0,g.useEffect)(()=>{const N=()=>E(A(u)),I=et(u)?u:window;return I.addEventListener("scroll",N,{capture:!1,passive:!0}),()=>I.removeEventListener("scroll",N)},[u]),v},G=u=>m(u)==="array",Ee=u=>G(u)&&!!u.length,Fe=(u,v,E=[],N=!1,I=null)=>Ee(u)?v?(E=typeof E=="string"?E.split(","):E,u.filter(X=>(E=E.length>0?E:Object.keys(X),E.filter(de=>{const ue=X[de];if(ue==null)return!1;if(N)return ue===v;const ie=new RegExp(v,"gi"),$e=ue.toString().match(ie);return $e&&I&&(X[de]=I(ue.toString().replace(ie,`<span style="background-color:yellow">${$e[0]}</span>`),{display:"inline-block"})),$e}).length))):u:[],ut=(u,v="id")=>{if(!Ee(u))return u;const E=[],N=[];return u.map(I=>{const X=c(I)?I[v]:I;N.includes(X)||(N.push(X),E.push(I))}),E},Ye=u=>(u==null?void 0:u.$$typeof)&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",rt=u=>u==null?void 0:u.__v_isVNode;const Ne=u=>{if(!G(u)&&!c(u))return u;const v=G(u)?[]:{};for(const E in u)if(_(u,E)){const N=u[E];v[E]=Ye(N)||rt(N)||typeof N!="object"?N:N!==u?Ne(N):"cyclic"}else Object.setPrototypeOf(v,{[E]:u[E]});return v};var Xe=Ne;const Je=u=>(v,E="children")=>{if(!Array.isArray(v))return v;const N=Xe(v),I=X=>{const de=[];return X.map(ue=>{if(Ee(ue[E])){const ie=I(ue[E])||[];ue[E]=ie,ie.length>0&&de.push(ue)}}),u(X,de)};return I(N)};var sr=(u,v,E,N="name",I="id",X="children",de=!1)=>Je((ue,ie)=>ut([...Fe(ue,v,N,de,E),...ie],I))(u,X),ct=Q(458),St=(u,v)=>(0,ct.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...v}),Lt=(u=null,v=St)=>{const[E,N]=(0,g.useState)(u),I=(0,g.useCallback)((...X)=>{const[de,ue,...ie]=X;if(!ue)N(null);else{X=[de,ue,v,...ie];const $e=sr(...X);N($e)}},[]);return[E,I]},Xt=u=>{const[v,E]=(0,g.useState)(u);return(0,g.useEffect)(()=>E(u),[u]),[v,E]},Bt=()=>{const u={};return{on:(v,E)=>{u[v]||(u[v]=[]),u[v].indexOf(E)===-1&&u[v].push(E)},emit:(v,E)=>{u[v]&&u[v].map(N=>N(E))},off:(v,E=null)=>{if(u[v]){if(typeof E!="function")return u[v]=[];const N=u[v].indexOf(E);N>-1&&u[v].splice(N,1)}}}};const dt=u=>{const v={};for(let E in u)_(u,E)||(v[E]=u[E]);return v};var Gt=(u,v)=>{if(!c(u))return v;if(!c(v))return u;const E={...dt(u),...dt(v)},N={...u,...v};return Object.keys(E).map(I=>{Object.setPrototypeOf(N,{[I]:E[I]})}),N},Ke=()=>{const{on:u,emit:v,off:E}=Bt(),N={};return{getState:I=>Xe(N[I]),setState:(I,X=!1)=>{if(typeof I=="function"&&(I=I(Xe(N))),!c(I))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const de=Xe(I);Object.keys(de).map(ue=>{const ie=N[ue],$e=de[ue],lt=c($e)&&c(ie)?Gt(ie,$e):$e;!X&&v(ue,lt),N[ue]=lt})},subscribe:(I,X)=>(u(I,X),()=>E(I,X)),unsubscribe:E,clean:I=>{typeof I=="string"?N[I]=void 0:Array.isArray(I)?I.map(X=>N[X]=void 0):Object.keys(N).map(X=>N[X]=void 0)}}};const ur=Ke();var Jt=a(ur);const ft=u=>u<10?"0"+u:u;var At=(u=new Date)=>{const v=new Date(u),E=v.getFullYear(),N=v.getDay(),I=ft(v.getMonth()+1),X=ft(v.getDate()),de=ft(v.getHours()),ue=ft(v.getMinutes()),ie=ft(v.getSeconds());return[E,I,X,de,ue,ie,N]};const bt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],cr=(u,v,E="-")=>u.replace(new RegExp(E,"g"),v);var at=(u=new Date,v=["-","-"," ",":",":",""],E=bt)=>{const N=At(u);let I="";return v.map((X,de)=>{var ue;return I+=(de===6?E[N[de]]:(ue=N[de])!=null?ue:"")+X}),I};const $t=()=>at(new Date,["-","-"," ",":",":"," ",""]);var dr=()=>{const[u,v]=(0,g.useState)("");return Ge(()=>{v($t())},1e3),[u]};const Mt=u=>++u;var fr=()=>{const[,u]=(0,g.useState)(0);return(0,g.useCallback)(()=>u(Mt),[])},ht=()=>{const[u,v]=ze(tt());return(0,g.useEffect)(()=>{const E=()=>v(tt());return window.addEventListener("resize",E,!1),()=>window.removeEventListener("resize",E,!1)},[]),u}}(),re}()})},5820:function(_t){(function(he,He){_t.exports=He()})(this,function(){return function(){"use strict";var he={};(function(){he.d=function(e,t){for(var r in t)he.o(t,r)&&!he.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){he.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){he.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();var He={};he.r(He),he.d(He,{a2o:function(){return _e},addAtNext:function(){return re},addAtPos:function(){return g},addClass:function(){return m},addDays:function(){return c},addHours:function(){return w},addMonths:function(){return y},addNodes:function(){return j},addScript:function(){return $},addStyle:function(){return _},addYears:function(){return H},arr2Tree:function(){return Ce},arr2TreeById:function(){return et},arr2TreeByPath:function(){return tt},arr2obj:function(){return U},arr2str:function(){return pe},backTop:function(){return le},base2Ten:function(){return G},baseConversion:function(){return Fe},baseFetch:function(){return ct},cacheData:function(){return ur},cancelablePromise:function(){return Xe},changePos:function(){return Jt},classifyArr:function(){return ft},clone:function(){return Ke},compareVersion:function(){return At},compose:function(){return bt},copyToClipboard:function(){return cr},createContainer:function(){return at},createElement:function(){return dr},createNode:function(){return N},createStore:function(){return ue},createTextElement:function(){return $t},curry:function(){return ie},cyclic:function(){return St},dash2camel:function(){return $e},debounce:function(){return lt},deleteNodes:function(){return vt},deviceType:function(){return pt},dlfile:function(){return zt},dropInfo:function(){return Er},editNodes:function(){return hr},emitter:function(){return I},equal:function(){return Xt},escapeHTML:function(){return pr},eventBus:function(){return er},fetcher:function(){return Ir},filter:function(){return Yt},filterList:function(){return tr},findMax:function(){return jr},firstUpper:function(){return Sr},fixFileSizeUnit:function(){return Pr},fixPath:function(){return s},fixRoute:function(){return f},fixSize:function(){return C},fixTimeUnit:function(){return b},flatten:function(){return B},formatNum:function(){return Y},formatPassTime:function(){return R},formatTime:function(){return be},fullScreen:function(){return ke},getElementsSize:function(){return vr},getExplore:function(){return De},getLeaveTime:function(){return Tt},getMeta:function(){return Vt},getMonthDays:function(){return Nt},getOffset:function(){return st},getOsInfo:function(){return Qe},getParams:function(){return Ot},getPosition:function(){return mt},getRelative:function(){return It},getSelected:function(){return Rt},getTextSize:function(){return _r},getTime:function(){return P},getTouchPosition:function(){return yr},getType:function(){return Se},getValue:function(){return $r},getViewportSize:function(){return wt},hasClass:function(){return Ar},hasProp:function(){return Ae},hex2rgba:function(){return nr},imgtocanvas:function(){return Rr},isArray:function(){return ge},isAsync:function(){return Ne},isBrowser:function(){return p},isDate:function(){return ir},isElement:function(){return a},isError:function(){return zr},isFunction:function(){return rt},isIE:function(){return Vr},isObject:function(){return F},isReactComp:function(){return Hr},isReactEle:function(){return Bt},isRef:function(){return ze},isRegExp:function(){return Mr},isTouch:function(){return or},isUrl:function(){return Ur},isValidArr:function(){return Zt},isValidObj:function(){return Fr},isVueEle:function(){return dt},json2str:function(){return ar},loadBase64:function(){return Jr},loadImage:function(){return Kr},loop:function(){return qr},matchedStr:function(){return Xr},memoize:function(){return Gr},merge:function(){return T},mergeArr:function(){return l},mergeClass:function(){return O},mergeObj:function(){return S},mergeOwnProp:function(){return de},message:function(){return xe},monthDate:function(){return Be},moveNodes:function(){return Pe},obj2arr:function(){return me},obj2str:function(){return Z},omit:function(){return Ve},once:function(){return Oe},padStart:function(){return Te},params2data:function(){return Ye},params2str:function(){return ut},pick:function(){return Ut},promisify:function(){return lr},randColor:function(){return xt},randItem:function(){return Et},randNum:function(){return Dt},randPercent:function(){return gr},randStr:function(){return Lr},randTrue:function(){return Pt},removeClass:function(){return M},resize:function(){return yt},rgba2hex:function(){return ro},rmUnit:function(){return oo},scheduler:function(){return ao},scrollIsBottom:function(){return lo},scrollTo:function(){return Ue},scrollToAnchor:function(){return so},scrollTop:function(){return q},selectedHandle:function(){return Q},session:function(){return uo},setMeta:function(){return co},setStyle:function(){return We},sleep:function(){return Kt},sleepSync:function(){return Tr},sort:function(){return fo},sortObj:function(){return ho},storage:function(){return po},store:function(){return xo},str2Html:function(){return ot},str2code:function(){return yo},sysLang:function(){return go},template:function(){return bo},ten2Base:function(){return Ee},throttle:function(){return vo},timeGap:function(){return Eo},timeInterval:function(){return eo},timestamp:function(){return Re},toggleClass:function(){return jo},traverItem:function(){return x},traverList:function(){return So},unescapeHTML:function(){return $o},unique:function(){return Ft},updateId:function(){return zo},updateNode:function(){return E},updateTreeNodes:function(){return Fo},uuidv4:function(){return Wt},validObj:function(){return To},watchScreen:function(){return No},watermark:function(){return Oo},weekDate:function(){return Io},wrapPromise:function(){return Do}});var _e=(e,t="key",r="value")=>{const o={};return(e||[]).map(n=>o[n[t]]=n[r]),o},Se=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),ge=e=>Se(e)==="array",Q=e=>(t,r,o="id",n="children")=>{if(!ge(t))return null;const d=(k,z="")=>{for(let D=0,V=k.length;D<V;D++){const ye=k[D];if(ye[o]===r)return e(k,D,z)||k[D];if(ge(ye[n])){const je=d(ye[n],ye[o]);if(je)return je}}};return d(t),t},re=(e,t,r,o="id",n="children")=>Q((d,k)=>d.splice(k,0,r))(e,t,o,n),g=(e,t,r,o,n="id",d="children")=>Q((k,z)=>{const D=k[z];D.children?D.children.splice(o,0,r):D.children=[r]})(e,t,n,d),a=e=>Se(e).indexOf("element")>-1,m=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),n=[...new Set([...r,...o])];e.className=n.join(" ")},c=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},w=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},y=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},j=(e,t,r,o="id",n="children")=>Q((d,k)=>{const z=d[k];return z[n]=[...z[n]||[],...r],z})(e,t,o,n),p=()=>![typeof window,typeof document].includes("undefined"),$=e=>{if(p())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},_=(e,t)=>{if(p())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===t))r();else{const n=document.createElement("style");n.onerror=d=>o(new Error(`Failed to load '${t}' style`)),n.onload=r,n.innerHTML=e,n.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===e))r();else{const n=document.createElement("link");n.onerror=d=>o(new Error(`Failed to load '${e}'`)),n.onload=r,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},H=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},U=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:n})=>r[o]=n),r},F=e=>Se(e)==="object";const L=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,F(o)?t+=`${r}=${L(o)}`:Array.isArray(o)?t+=`${r}=${pe(o)}`:t+=`${r}=${o}`}),`{${t}}`};var Z=L;const te=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,F(r)?t+=Z(r):Array.isArray(r)?t+=te(r):t+=`${r}`}),`[${t}]`};var pe=te,Ce=e=>(t,r="id",o="children",n=-1)=>{if(!ge(t))return t;const d={},k=t.map(z=>z[r]);return[...t].map(z=>{var D;const V={...z},{[r]:ye}=V;if(ye!=null){let{parentId:je}=V;je==null&&(je=(D=e==null?void 0:e(V))!=null?D:n,V.parentId=je),d[ye]||(d[ye]=[]),V[o]=d[ye],d[je]||(d[je]=[]),d[n]||(d[n]=[]),k.includes(je)?d[je].push(V):d[n].push(V)}}),d[n]},et=(e,t="id",r="children",o=-1)=>Ce(n=>{const d=n[t].match(/\S+(?=-\S+)/);return(d==null?void 0:d[0])||o})(e,t,r,o),tt=(e,t="path",r="children",o=null)=>Ce(n=>{var d,k,z,D;const V=n[t],ye=V.match(/.*\/[^:/]+\/:[^/]+/);return ye?(k=(d=ye[0].match(/(.*)\/:+/))==null?void 0:d[1])!=null?k:o:(D=(z=V.match(/(.*)\/+/))==null?void 0:z[1])!=null?D:o})(e,t,r,o),q=()=>{var e,t;return p()&&((t=(e=window.pageYOffset)!=null?e:document.documentElement.scrollTop)!=null?t:document.body.scrollTop)},Ae=(e,t)=>Object.prototype.hasOwnProperty.call(e!=null?e:{},t),ze=e=>Ae(e,"current"),Ue=(e=0,t)=>{var r;!p()||(t=ze(t)?t.current:t!=null?t:window,(r=t.scrollTo)==null||r.call(t,{top:e,behavior:"smooth"}))},gt=`.huxy-totop-bar {
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
}`;const Ge=()=>document.getElementsByClassName("huxy-totop-bar")[0],it=e=>{if(Ge())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>Ue(),!1),t},A=()=>{const e=Ge();e&&document.body.removeChild(e)};var le=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!p())return;_(gt,"huxy-backtop-css");const r=()=>{q()>e?it(t):A()};return(()=>(document.addEventListener("scroll",r,!1),()=>{A(),document.removeEventListener("scroll",r,!1)}))()},G=(e=0,t=2)=>parseInt(String(e),t),Ee=(e=0,t=2)=>Number(e).toString(t),Fe=(e=0,t=2,r=16)=>Ee(G(e,t),r),ut=e=>{if(!F(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const n=o>0?"&":"?";t.push(`${n}${r}=${e[r]}`)}),t.join("")},Ye=e=>{if(!F(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},rt=e=>Se(e)==="function",Ne=e=>Se(e)==="promise"||F(e)&&rt(e.then),Xe=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Ne(e))return{};let o=null,n=null;return{promiseFn:new Promise((d,k)=>{o=(z="canceled")=>{clearTimeout(n),d({canceled:!0,errMsg:z})},t&&(t=typeof t!="number"?12e4:t,n=setTimeout(()=>o(r),t)),e.then(z=>{clearTimeout(n),d({result:z,errMsg:!1})}).catch(z=>{clearTimeout(n),k(z)})}),cancelFn:o}};const Je=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>Ye(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>ut(e).slice(1)}],sr=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(n=>e[n]);if(o.length===1){const n=o[0],d=r?t:n;return d==="params"?{query:e[n]}:{result:e[n],type:d}}else if(o.length>1){const n=o.filter(k=>k!=="params").slice(-1)[0],d=r?t:n;return d==="params"?{query:e.params||e[n]}:{query:e.params,result:e[n],type:d}}};var ct=(e,t)=>r=>(o,n={})=>{const{headers:d,dataType:k,data:z,formData:D,form:V,params:ye,...je}=n,Me={data:z,formData:D,form:V,params:ye};let br;const{query:qt,result:to,type:Po}=sr(Me,k)||{};if(!je.body&&to){const Wr=Je.find(Zr=>Zr.type===Po);br=Wr.headers,je.body=Wr.body(to)}qt&&(o=`${o}${ut(qt)}`);const{promiseFn:_o}=Xe(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...br,...d},...je}),t);return _o.then(({result:Wr,errMsg:Zr})=>e(Zr?{status:408,statusText:Zr}:Wr))},St=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let n=!1;for(let d in o)Ae(o,d)&&r(o[d])&&(o[d]="cyclic",n=!0);return n}return!1};return r(e)&&e};const Lt=(e,t)=>{const r=Se(e),o=Se(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(St(e)&&St(t))return Lt(e,t);for(let n in t)if(Ae(e,n)!==Ae(t,n)||!Lt(e[n],t[n]))return!1;return!0};var Xt=Lt,Bt=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",dt=e=>e==null?void 0:e.__v_isVNode;const Gt=e=>{if(!ge(e)&&!F(e))return e;const t=ge(e)?[]:{};for(const r in e)if(Ae(e,r)){const o=e[r];t[r]=Bt(o)||dt(o)||typeof o!="object"?o:o!==e?Gt(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var Ke=Gt,ur=(e=100)=>{const t=[];let r=-1;const o=d=>{var k,z;const D=t.length,V=Ke(d);return Xt(V,(k=t[D-1])==null?void 0:k.data)?{index:r,length:D,data:(z=t[r])==null?void 0:z.data}:(t.push({data:V}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},n=(d=0)=>{var k;const z=t.length;return r+=d,r=r<0?0:r>z-1?z-1:r,{index:r,length:z,data:Ke((k=t[r])==null?void 0:k.data)}};return{record:o,cursor:n,jump:d=>{var k;return r=d,{index:r,length:t.length,data:Ke((k=t[r])==null?void 0:k.data)}},undo:()=>n(-1),redo:()=>n(1),getList:()=>Ke(t),clean:()=>{t.length=0,r=-1}}},Jt=(e,t,r)=>{if(!ge(e))return e;const o=e[t],n=e[r];return e.splice(t,1,n),e.splice(r,1,o),e},ft=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},At=(e,t,r=".")=>{const o=(D,V)=>D.split(V),n=o(e,r),d=o(t,r),k=n.length;let z=0;for(let D=0;D<k;D++)if(n[D]<d[D]){z=k-D;break}return z},bt=(...e)=>(...t)=>{const[...r]=e,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...t)},cr=e=>{if(!p())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},at=e=>(t,r)=>{const{getState:o,setState:n,subscribe:d,unsubscribe:k,clean:z}=e;return r!==void 0&&n({[t]:r},!0),{getState:()=>o(t),setState:(D,V)=>n({[t]:D},V),subscribe:D=>d(t,D),unsubscribe:()=>k(t),clean:()=>z(t)}},$t=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),dr=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:$t(o))}});const Mt=e=>e.startsWith("on"),fr=e=>e!=="children"&&!Mt(e),ht=(e,t)=>r=>e[r]!==t[r],u=(e,t)=>r=>!(r in t),v=e=>{const t=Object.keys(e);return{eventProps:t.filter(Mt),propertyProps:t.filter(fr)}};var E=(e,t,r)=>{const{eventProps:o,propertyProps:n}=v(t),{eventProps:d,propertyProps:k}=v(r);o.filter(u(t,r)).map(z=>{const D=z.toLowerCase().slice(2);e.removeEventListener(D,t[z])}),n.filter(u(t,r)).map(z=>e[z]=""),k.filter(ht(t,r)).map(z=>e[z]=r[z]),d.filter(ht(t,r)).map(z=>{const D=z.toLowerCase().slice(2);e.addEventListener(D,r[z])})},N=e=>{if(!p())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return E(t,{},e.props),t},I=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return e[t]=[];const o=e[t].indexOf(r);o>-1&&e[t].splice(o,1)}}}};const X=e=>{const t={};for(let r in e)Ae(e,r)||(t[r]=e[r]);return t};var de=(e,t)=>{if(!F(e))return t;if(!F(t))return e;const r={...X(e),...X(t)},o={...e,...t};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},ue=()=>{const{on:e,emit:t,off:r}=I(),o={};return{getState:n=>Ke(o[n]),setState:(n,d=!1)=>{if(typeof n=="function"&&(n=n(Ke(o))),!F(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const k=Ke(n);Object.keys(k).map(z=>{const D=o[z],V=k[z],ye=F(V)&&F(D)?de(D,V):V;!d&&t(z,ye),o[z]=ye})},subscribe:(n,d)=>(e(n,d),()=>r(n,d)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(d=>o[d]=void 0):Object.keys(o).map(d=>o[d]=void 0)}}},ie=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...n)=>r(...o,...n);return r},$e=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),lt=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},vt=(e,t,r="id",o="children")=>Q((n,d)=>n.splice(d,1))(e,t,r,o),pt=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Re=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Wt=()=>{let e=Re();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},zt=(e,t)=>{if(p())if(t=t||Wt(),typeof e=="string")fetch(e).then(r=>r.blob()).then(r=>{const o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)});else{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)}},wt=(e=null)=>{var t,r;return p()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(r=window.innerHeight)!=null?r:document.documentElement.clientHeight}:{width:0,height:0}},mt=e=>{var t;if(p())return e=ze(e)?e.current:e!=null?e:document.body,(t=e.getBoundingClientRect)==null?void 0:t.call(e)},ot=e=>{if(!p())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},We=(e,t={},r=!1)=>{!a(e)||Object.keys(t).map(o=>{e.style.setProperty(o,r?"":t[o])})};const Yr=(e=350)=>new Promise(t=>setTimeout(t,e)),Tr=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var Kt=Yr,vr=async(e,t=15)=>{if(!p())return;if(typeof e=="string"&&(e=ot(e)),e=ze(e)?e.current:e,!a(e))return{};const r=e.cloneNode(!0);We(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await Kt(t);const o=mt(r);return e.parentNode.removeChild(r),o};const wr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Qt=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,kr=(e,t)=>{var r;t=`huxy-drop-arrow-${t}`;const o=(r=e.getAttribute("class"))!=null?r:"";wr.test(o)?e.setAttribute("class",o.replace(Qt,t)):e.setAttribute("class",`${o} ${t}`)},Cr=async(e,t,r)=>{const{left:o,right:n,top:d,bottom:k}=mt(e),{width:z,height:D}=wt(),{width:V,height:ye}=await vr(t);if(n<0||k<0||o>z||d>D)return{};if(r==="vertical"){const je={left:o+"px",top:k+10+"px",right:"auto",bottom:"auto"};let Me="lt";o+V>z&&(je.left=n-V+"px",Me="rt"),k+10+ye>D&&(je.top=d-10-ye+"px",Me=Me==="lt"?"lb":"rb"),We(t,je),kr(t,Me)}else{const je={left:n+10+"px",top:d+"px",right:"auto",bottom:"auto"};let Me="tl";n+10+V>z&&(je.left=o-10-V+"px",Me="tr"),d+ye>D&&(je.top=k-ye+"px",Me=Me==="tl"?"bl":"br"),We(t,je),kr(t,Me)}};var Er=(e,t,r="horizontal")=>{const o=lt(Cr),n=()=>o(e,t,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const d=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),We(t,{left:"",top:"",right:"",bottom:""})};return Cr(e,t,r),d},hr=(e,t,r,o="id",n="children")=>Q((d,k)=>d[k]={...d[k],...r})(e,t,o,n),pr=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const Nr=I();var er=e=>{const{on:t,emit:r,off:o}=Nr;return{on:n=>t(e,n),emit:n=>r(e,n),off:n=>o(e,n)}};const mr=120*1e3,Or=e=>e.json().then(t=>t);var Ir=(e=Or,t=mr)=>(r="get")=>ct(e)((r||"get").toUpperCase()),Zt=e=>ge(e)&&!!e.length,Yt=(e,t,r=[],o=!1,n=null)=>Zt(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(d=>(r=r.length>0?r:Object.keys(d),r.filter(k=>{const z=d[k];if(z==null)return!1;if(o)return z===t;const D=new RegExp(t,"gi"),V=z.toString().match(D);return V&&n&&(d[k]=n(z.toString().replace(D,`<span style="background-color:yellow">${V[0]}</span>`),{display:"inline-block"})),V}).length))):e:[],Ft=(e,t="id")=>{if(!Zt(e))return e;const r=[],o=[];return e.map(n=>{const d=F(n)?n[t]:n;o.includes(d)||(o.push(d),r.push(n))}),r};const Dr=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=Ke(t),n=d=>{const k=[];return d.map(z=>{if(Zt(z[r])){const D=n(z[r])||[];z[r]=D,D.length>0&&k.push(z)}}),e(d,k)};return n(o)};var tr=(e,t,r,o="name",n="id",d="children",k=!1)=>Dr((z,D)=>Ft([...Yt(z,t,o,k,r),...D],n))(e,d),jr=(e="")=>{var t;return(t=e.match(/\d+/g))==null?void 0:t.sort((r,o)=>o-r)[0]},Sr=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),Pr=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},s=(e="")=>e.replaceAll("//","/"),f=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",C=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},b=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),n=e%3600,d=~~(n/60);return o<24?`${o}${t[2]}${d}${t[1]}${n%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},x=e=>(t,r="children")=>{if(!ge(t))return t;const o=(n,d=[])=>{n.map((k,z)=>{const D=ge(k[r]);if(k=e(k,d,z,D)||k,D){const{[r]:V,...ye}=k;o(V,[...d,{...ye,"@@index":z}])}})};return o(t),t},B=(e,t="children")=>{const r=[];return x(o=>{const{[t]:n,...d}=o;r.push(d)})(e,t),r},Y=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const W=e=>e<10?"0"+e:e;var P=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),n=W(t.getMonth()+1),d=W(t.getDate()),k=W(t.getHours()),z=W(t.getMinutes()),D=W(t.getSeconds());return[r,n,d,k,z,D,o]},R=(e,t=new Date)=>{e=P(e),t=P(t);const r=t.y-e.y,o=t.m-e.m,n=t.d-e.d,d=t.h-e.h,k=t.M-e.M,z=new Date(t.y,t.m,0).getDate(),D=(V,ye,je,Me,br)=>{const qt="\u524D";return ye<0&&(V-=1,ye+=je),V===0?ye+br+qt:ye===0?V+Me+qt:V+Me+ye+br+qt};return r>0?D(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?D(o,n,z,"\u4E2A\u6708","\u5929"):n>0?D(n,d,24,"\u5929","\u5C0F\u65F6"):d>0?D(d,k,60,"\u5C0F\u65F6","\u5206\u949F"):k>0?k+"\u5206\u949F\u524D":"\u521A\u521A"};const ae=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],we=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var be=(e=new Date,t=["-","-"," ",":",":",""],r=ae)=>{const o=P(e);let n="";return t.map((d,k)=>{var z;return n+=(k===6?r[o[k]]:(z=o[k])!=null?z:"")+d}),n};const oe=["","webkit","moz","ms"],ve=e=>oe.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),Ie=e=>oe.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),se=e=>oe.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),ee=oe.map(e=>`${e}fullscreenchange`);var ke=e=>{var t,r;if(!p())return;e=ze(e)?e.current:e!=null?e:document.body;const o=ve(document),n=Ie(e),d=se(document);document[o]?(r=document[d])==null||r.call(document):(t=e[n])==null||t.call(e)};const Le=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var De=()=>{var e;if(!p())return;const t=window.navigator.userAgent.toLowerCase(),r=(e=Le.find(o=>t.match(o.reg)))!=null?e:{};return{type:r.name,version:t.match(r.reg)[1]}};const Ze=60*1e3,qe=60*Ze,kt=24*qe;var Tt=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/kt);r-=kt*o;const n=~~(r/qe);r-=qe*n;const d=~~(r/Ze);r-=Ze*d;const k=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${d}\u5206${k}\u79D2`};const nt=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],rr=e=>{if(!Array.isArray(e))return nt;const t=[...nt];return e.map(r=>{const o=t.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var Vt=e=>{const t=rr(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return ot(t.join(""))},Nt=(e=new Date)=>{const t=P(e);return new Date(t[0],t[1],0).getDate()},st=(e=null)=>{var t,r,o,n;return p()?a(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:(r=(t=window.pageXOffset)!=null?t:document.documentElement.scrollLeft)!=null?r:document.body.scrollLeft,top:(n=(o=window.pageYOffset)!=null?o:document.documentElement.scrollTop)!=null?n:document.body.scrollTop}:{left:0,top:0}};const xr=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>{var t;return{type:"ios",model:e[1],version:(t=e[3])==null?void 0:t.replaceAll("_",".")}}},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var Qe=()=>{if(!p())return;const e=window.navigator.userAgent.toLowerCase(),t=xr.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},Ot=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(n=>{const[d,k]=n.split("=");o[d]=k}),{path:t,params:o}}return{path:t}},or=()=>p()&&(window.ontouchstart||navigator.maxTouchPoints),yr=e=>{var t,r,o,n;const{left:d,top:k}=st();return{touchX:or()?(r=(t=e==null?void 0:e.touches)==null?void 0:t[0])==null?void 0:r.pageX:(e==null?void 0:e.pageX)||(e==null?void 0:e.clientX)+d,touchY:or()?(n=(o=e==null?void 0:e.touches)==null?void 0:o[0])==null?void 0:n.pageY:(e==null?void 0:e.pageY)||(e==null?void 0:e.clientY)+k}},It=(e,t)=>{var r,o;const{touchX:n,touchY:d}=yr(e),{x:k,y:z}=(o=(r=t==null?void 0:t.getBoundingClientRect)==null?void 0:r.call(t))!=null?o:{};return{x:n-(k!=null?k:0),y:d-(z!=null?z:0)}},Rt=(e,t,r="id",o="children")=>{if(!ge(e))return null;const n=d=>{for(let k=0,z=d.length;k<z;k++){const D=d[k];if(D[r]===t)return[D];if(ge(D[o])){const V=n(D[o]);if(V)return[D].concat(V)}}};return n(e)},_r=(e,t={},r)=>{if(!p())return;r=ze(r)?r.current:r!=null?r:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&We(o,t),o.innerText=e,r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const Ht=(e={},t)=>{t=Ct(t);const r=(o,n)=>{if(!(n!=null&&n[0]))return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(e,t)},Ct=(e="")=>{var t;return(t=e.replace(/\[['"]?(.*?)['"]?\]/g,".$1"))==null?void 0:t.split(".")};var $r=Ht,Ar=(e,t="")=>a(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),nr=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,n=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${n})`;const d=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${d})`},Rr=e=>{if(!p())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:n}=e;return t.width=o,t.height=n,r.drawImage(e,0,0,o,n),t},ir=(...e)=>!Number.isNaN(new Date(...e).valueOf()),zr=e=>Se(e)==="error",Vr=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),Hr=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",Mr=e=>Se(e)==="regexp",Ur=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),Fr=e=>F(e)&&Object.keys(e).length,ar=e=>F(e)?Z(e):Array.isArray(e)?pe(e):e,Jr=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",n=>r(n))}),Kr=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",n=>r(n)))}),qr=async(e,t,r=2e3)=>{for(;!(t!=null&&t(e==null?void 0:e()));)await Kt(r)},Xr=(e,t=["{","}"])=>{var r,o;return(o=(r=e==null?void 0:e.trim)==null?void 0:r.call(e).match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`)))==null?void 0:o[1]},Gr=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),d=r.find(k=>k.key===n);if(!d){const k=e(...o);return r.push({key:n,result:k}),r.length>t&&r.shift(),k}return d.result}};const i=(e,t,r="id")=>{if(!ge(e))return t;if(!ge(t))return e;const o={};return[...e,...t].map(n=>{var d;const k=F(n)?(d=n[r])!=null?d:JSON.stringify(n):n;if(o[k]===void 0)o[k]=n;else{const z=o[k];F(z)&&F(n)?o[k]=S(z,n):ge(z)&&ge(n)?o[k]=i(z,n):o[k]=n}}),Object.keys(o).map(n=>o[n])};var l=i;const h=(e,t)=>{if(!F(e))return t;if(!F(t))return e;for(let r in t)Ae(t,r)?F(e[r])&&F(t[r])?e[r]=h(e[r],t[r]):ge(e[r])&&ge(t[r])?e[r]=l(e[r],t[r]):e[r]=t[r]:Object.setPrototypeOf(e,{[r]:t[r]});return e};var S=h,T=(e,...t)=>{const r=ge(e)?l:S;return t.map(o=>e=r(e,o)),e},O=(e,t)=>{var r,o;const n=(r=e==null?void 0:e.split(" "))!=null?r:[],d=(o=t==null?void 0:t.split(" "))!=null?o:[];return[...new Set([...n,...d])].filter(Boolean).join(" ")},M=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(n=>!r.includes(n));e.className=o.join(" ")},K=`@keyframes huxy-message-animate-in {
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
}`;const J=()=>document.getElementsByClassName("huxy-message")[0],ne=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},ce=(e,t)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${t}`);const o=document.createElement("span");o.innerText=e;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},fe=(e,t=3250,r,o)=>{if(!p())return;_(K,"huxy-message-css");let n=J();n||(n=ne());const d=ce(e,o);n.appendChild(d),setTimeout(()=>{n.removeChild(d),r==null||r()},t),setTimeout(()=>{M(d,"open")},t-250)};var xe={success:(e,t,r)=>fe(e,t,r,"success"),warn:(e,t,r)=>fe(e,t,r,"warn"),warning:(e,t,r)=>fe(e,t,r,"warn"),error:(e,t,r)=>fe(e,t,r,"error"),info:(e,t,r)=>fe(e,t,r,"info")},Be=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[c(1-r),c(Nt(t)-r)]},Pe=(e,t,r,o,n="id",d="children")=>{let k={};return Q((z,D)=>(k=z[D],z.splice(D,1),!0))(e,t,n,d),g(e,r,k,o,n,d),e},me=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),Ve=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(n=>t.includes(n)?o.push({key:n,value:e[n]}):r[n]=e[n]),{newObj:r,newQuery:o}},Oe=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},Te=(e="",t=0,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`},Ut=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!ge(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},lr=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(n,d)=>n?o(n):r(d))),xt=()=>"#"+Te((~~(Math.random()*(1<<24))).toString(16),6),Dt=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),Et=(e=[])=>e[Dt(e.length-1)],gr=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,n)=>{n===e-1?r[n]=t:(r[n]=Dt(1,t-1),t-=r[n])}),r},Lr=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),Pt=()=>Math.random()>.5;const jt=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var yt=(e,t=60)=>{if(!p())return;e=ze(e)?e.current:e!=null?e:document.body;let r,o=[];const n=lt(()=>o.map(D=>D(e)),t),d=D=>{r||(r=jt(e,n)),o.indexOf(D)===-1&&o.push(D)},k=D=>{const V=o.indexOf(D);V!==-1&&o.splice(V,1),o.length===0&&r&&z()},z=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:d,unbind:k,destroy:z}};const Br=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const n=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var ro=(e=0,t=0,r=0,o=1)=>{var n;if(e.includes("rgb")){const d=e.match(/rgba?\((.+)\)/);if(d){const k=(n=d[1])==null?void 0:n.split(",").map(z=>z.trim());return Br(...k)}return e}return Br(e,t,r,o)},oo=(e,t="px")=>`${e}`.replace(t,"")-0;const Qr=()=>typeof(performance==null?void 0:performance.now)=="function"?performance.now():new Date().getTime(),no=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},io=()=>{const e=[],t=k=>{e.push(k),d(k)},r=()=>e[0],o=()=>e.shift(),n=k=>k.startTime=Qr(),d=k=>{n(k),e.sort((z,D)=>z.startTime-D.startTime)};return{hub:e,push:t,peek:r,shift:o,update:d}};var ao=(e=5)=>{const{hub:t,push:r,peek:o,shift:n,update:d}=io(),k=no(()=>{D()&&k()}),z=V=>Qr()-V.startTime>e,D=()=>{let V=o();for(;V;){if(z(V)){d(V);break}const{task:ye}=V;typeof ye=="function"?(V.task=null,ye()):n(),V=o()}return V};return(V=()=>{})=>{r({task:V}),t.length<2&&k()}},lo=()=>p()&&document.documentElement.scrollHeight-q()===wt().height,so=e=>{var t;!p()||(e=ze(e)?e.current:e!=null?e:window,(t=e.scrollIntoView)==null||t.call(e,{behavior:"smooth",block:"center"}))},uo={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch(r){t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},co=e=>{const t=Vt(e);p()&&document.head.appendChild(...t)},fo=(e,t=null,r=!1)=>[...e||[]].sort((o,n)=>{const d=t?o[t]:o,k=t?n[t]:n;return!isNaN(Number(d))&&!isNaN(Number(d))?r?k-d:d-k:typeof d=="string"&&typeof k=="string"?r?k.localeCompare(d):d.localeCompare(k):typeof d=="string"&&typeof k=="number"?r?-1:1:typeof d=="number"||typeof d=="string"?r?1:-1:r?-1:1}),ho=e=>{if(!F(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},po={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const mo=ue();var xo=at(mo),yo=(e,t=!1)=>(e=t?e:`return ${e};`,Function(e)()),go=()=>p()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),bo=(e,...t)=>{const r=[];return e.map((o,n)=>{var d;r.push(o,(d=t[n])!=null?d:"")}),r.join("")},vo=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const wo=e=>[12,Nt(e),24,60,60],ko=(e=[],t=[],r=[])=>{let o=!1;const n=[];return t.map((d,k)=>{const z=(o?d-1:d)-e[k];z<0?(n[k]=z+(r[k]||10),o=!0):(n[k]=z,o=!1)}),n.reverse()};var eo=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=wo(t).reverse(),o=P(e).slice(0,-1).reverse(),n=P(t).slice(0,-1).reverse();return ko(o,n,r)};const Co=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Eo=(e,t=new Date)=>{const r=eo(e,t),o=r.findIndex(n=>n>0);return r.map((n,d)=>`${n||0}${Co[d]}`).slice(o).join("")},jo=(e,t)=>{!a(e)||(Ar(e,t)?M(e,t):m(e,t))},So=e=>(t,r="children")=>{if(!ge(t))return t;const o=n=>(n.map(d=>{ge(d[r])&&(d[r]=o(d[r]))}),e(n));return o(t)},$o=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),zo=(e,t="fuckId",r="children")=>x((o,n,d)=>{o[t]=[...n.map(k=>k["@@index"]),d].join("-")})(e,r),Fo=(e,t,r,o="children")=>Q((n,d)=>{const k=n[d];return k[o]=[...k[o]||[],...r],!0})(e,t),To=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},No=e=>p()?(ee.map(t=>document.addEventListener(t,e,!1)),()=>ee.map(t=>document.removeEventListener(t,e,!1))):void 0,Oo=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:d="20px microsoft yahei",fillStyle:k="rgba(202,202,202,0.4)",content:z="\u8BF7\u52FF\u5916\u4F20",rotate:D="-30",zIndex:V=1e3}={})=>{if(!p())return;e=ze(e)?e.current:e!=null?e:document.body;const ye=e.firstChild;(ye==null?void 0:ye.className)==="watermark-canvas"&&e.removeChild(ye);const je=document.createElement("canvas");je.setAttribute("width",t),je.setAttribute("height",r);const Me=je.getContext("2d");Me.textAlign=o,Me.textBaseline=n,Me.font=d,Me.fillStyle=k,Me.rotate(Math.PI/180*D),Me.fillText(z,parseFloat(t)/2,parseFloat(r)/2);const br=je.toDataURL(),qt=document.createElement("div");qt.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${V};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${br}')`),e.style.position="relative",e.insertBefore(qt,e.firstChild)},Io=(e=new Date)=>{const t=new Date(e).getDay();return[c(1-t),c(7-t)]},Do=e=>{if(!Ne(e))return{};let t="pending",r;const o=e.then(n=>{t="success",r=n}).catch(n=>{t="error",r=n});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}};return He}()})},3323:function(_t,he){"use strict";function He(A,le){var G=A.length;A.push(le);e:for(;0<G;){var Ee=G-1>>>1,Fe=A[Ee];if(0<ge(Fe,le))A[Ee]=le,A[G]=Fe,G=Ee;else break e}}function _e(A){return A.length===0?null:A[0]}function Se(A){if(A.length===0)return null;var le=A[0],G=A.pop();if(G!==le){A[0]=G;e:for(var Ee=0,Fe=A.length,ut=Fe>>>1;Ee<ut;){var Ye=2*(Ee+1)-1,rt=A[Ye],Ne=Ye+1,Xe=A[Ne];if(0>ge(rt,G))Ne<Fe&&0>ge(Xe,rt)?(A[Ee]=Xe,A[Ne]=G,Ee=Ne):(A[Ee]=rt,A[Ye]=G,Ee=Ye);else if(Ne<Fe&&0>ge(Xe,G))A[Ee]=Xe,A[Ne]=G,Ee=Ne;else break e}}return le}function ge(A,le){var G=A.sortIndex-le.sortIndex;return G!==0?G:A.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var Q=performance;he.unstable_now=function(){return Q.now()}}else{var re=Date,g=re.now();he.unstable_now=function(){return re.now()-g}}var a=[],m=[],c=1,w=null,y=3,j=!1,p=!1,$=!1,_=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(A){for(var le=_e(m);le!==null;){if(le.callback===null)Se(m);else if(le.startTime<=A)Se(m),le.sortIndex=le.expirationTime,He(a,le);else break;le=_e(m)}}function L(A){if($=!1,F(A),!p)if(_e(a)!==null)p=!0,Ge(Z);else{var le=_e(m);le!==null&&it(L,le.startTime-A)}}function Z(A,le){p=!1,$&&($=!1,H(Ce),Ce=-1),j=!0;var G=y;try{for(F(le),w=_e(a);w!==null&&(!(w.expirationTime>le)||A&&!q());){var Ee=w.callback;if(typeof Ee=="function"){w.callback=null,y=w.priorityLevel;var Fe=Ee(w.expirationTime<=le);le=he.unstable_now(),typeof Fe=="function"?w.callback=Fe:w===_e(a)&&Se(a),F(le)}else Se(a);w=_e(a)}if(w!==null)var ut=!0;else{var Ye=_e(m);Ye!==null&&it(L,Ye.startTime-le),ut=!1}return ut}finally{w=null,y=G,j=!1}}var te=!1,pe=null,Ce=-1,et=5,tt=-1;function q(){return!(he.unstable_now()-tt<et)}function Ae(){if(pe!==null){var A=he.unstable_now();tt=A;var le=!0;try{le=pe(!0,A)}finally{le?ze():(te=!1,pe=null)}}else te=!1}var ze;if(typeof U=="function")ze=function(){U(Ae)};else if(typeof MessageChannel!="undefined"){var Ue=new MessageChannel,gt=Ue.port2;Ue.port1.onmessage=Ae,ze=function(){gt.postMessage(null)}}else ze=function(){_(Ae,0)};function Ge(A){pe=A,te||(te=!0,ze())}function it(A,le){Ce=_(function(){A(he.unstable_now())},le)}he.unstable_IdlePriority=5,he.unstable_ImmediatePriority=1,he.unstable_LowPriority=4,he.unstable_NormalPriority=3,he.unstable_Profiling=null,he.unstable_UserBlockingPriority=2,he.unstable_cancelCallback=function(A){A.callback=null},he.unstable_continueExecution=function(){p||j||(p=!0,Ge(Z))},he.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):et=0<A?Math.floor(1e3/A):5},he.unstable_getCurrentPriorityLevel=function(){return y},he.unstable_getFirstCallbackNode=function(){return _e(a)},he.unstable_next=function(A){switch(y){case 1:case 2:case 3:var le=3;break;default:le=y}var G=y;y=le;try{return A()}finally{y=G}},he.unstable_pauseExecution=function(){},he.unstable_requestPaint=function(){},he.unstable_runWithPriority=function(A,le){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var G=y;y=A;try{return le()}finally{y=G}},he.unstable_scheduleCallback=function(A,le,G){var Ee=he.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?Ee+G:Ee):G=Ee,A){case 1:var Fe=-1;break;case 2:Fe=250;break;case 5:Fe=1073741823;break;case 4:Fe=1e4;break;default:Fe=5e3}return Fe=G+Fe,A={id:c++,callback:le,priorityLevel:A,startTime:G,expirationTime:Fe,sortIndex:-1},G>Ee?(A.sortIndex=G,He(m,A),_e(a)===null&&A===_e(m)&&($?(H(Ce),Ce=-1):$=!0,it(L,G-Ee))):(A.sortIndex=Fe,He(a,A),p||j||(p=!0,Ge(Z))),A},he.unstable_shouldYield=q,he.unstable_wrapCallback=function(A){var le=y;return function(){var G=y;y=le;try{return A.apply(this,arguments)}finally{y=G}}}},1102:function(_t,he,He){"use strict";_t.exports=He(3323)}}]);
