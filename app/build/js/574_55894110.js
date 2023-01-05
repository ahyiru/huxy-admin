(self.webpackChunk=self.webpackChunk||[]).push([[574],{1975:function(or,ht,nt){(function(Et,$e){or.exports=$e(nt(7378),nt(1542))})(this,function(Et,$e){return function(){"use strict";var be={193:function(a,b,d){var j=d(703),C=d.n(j),S=d(414),p=d.n(S),$=p()(C());$.push([a.id,`/*@height:2px;
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
`,""]),$.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},b.Z=$},145:function(a,b,d){var j=d(703),C=d.n(j),S=d(414),p=d.n(S),$=p()(C());$.push([a.id,`.kLIGi {
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
`,""]),$.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},b.Z=$},842:function(a,b,d){var j=d(703),C=d.n(j),S=d(414),p=d.n(S),$=p()(C());$.push([a.id,`@keyframes animate-drawer-in {
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
`,""]),$.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},b.Z=$},563:function(a,b,d){var j=d(703),C=d.n(j),S=d(414),p=d.n(S),$=p()(C());$.push([a.id,`@keyframes animate-drop-in {
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
`,""]),$.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},b.Z=$},697:function(a,b,d){var j=d(703),C=d.n(j),S=d(414),p=d.n(S),$=p()(C());$.push([a.id,`@keyframes animate-modal-in {
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
`,""]),$.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},b.Z=$},810:function(a,b,d){var j=d(703),C=d.n(j),S=d(414),p=d.n(S),$=p()(C());$.push([a.id,`.clear {
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
`,""]),$.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_"},b.Z=$},31:function(a,b,d){var j=d(703),C=d.n(j),S=d(414),p=d.n(S),$=p()(C());$.push([a.id,`.cols-1 {
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
`,""]),$.locals={},b.Z=$},201:function(a,b,d){var j=d(703),C=d.n(j),S=d(414),p=d.n(S),$=p()(C());$.push([a.id,`@keyframes before {
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
`,""]),$.locals={},b.Z=$},289:function(a,b,d){var j=d(703),C=d.n(j),S=d(414),p=d.n(S),$=p()(C());$.push([a.id,`.clear {
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
`,""]),$.locals={},b.Z=$},626:function(a,b,d){var j=d(703),C=d.n(j),S=d(414),p=d.n(S),$=p()(C());$.push([a.id,`.ofth_ {
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
`,""]),$.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},b.Z=$},435:function(a,b,d){var j=d(703),C=d.n(j),S=d(414),p=d.n(S),$=p()(C());$.push([a.id,`.node-right-icon-close {
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
`,""]),$.locals={},b.Z=$},414:function(a){a.exports=function(b){var d=[];return d.toString=function(){return this.map(function(j){var C="",S=typeof j[5]!="undefined";return j[4]&&(C+="@supports (".concat(j[4],") {")),j[2]&&(C+="@media ".concat(j[2]," {")),S&&(C+="@layer".concat(j[5].length>0?" ".concat(j[5]):""," {")),C+=b(j),S&&(C+="}"),j[2]&&(C+="}"),j[4]&&(C+="}"),C}).join("")},d.i=function(j,C,S,p,$){typeof j=="string"&&(j=[[null,j,void 0]]);var R={};if(S)for(var G=0;G<this.length;G++){var X=this[G][0];X!=null&&(R[X]=!0)}for(var F=0;F<j.length;F++){var B=[].concat(j[F]);S&&R[B[0]]||(typeof $!="undefined"&&(typeof B[5]=="undefined"||(B[1]="@layer".concat(B[5].length>0?" ".concat(B[5]):""," {").concat(B[1],"}")),B[5]=$),C&&(B[2]&&(B[1]="@media ".concat(B[2]," {").concat(B[1],"}")),B[2]=C),p&&(B[4]?(B[1]="@supports (".concat(B[4],") {").concat(B[1],"}"),B[4]=p):B[4]="".concat(p)),d.push(B))}},d}},703:function(a){a.exports=function(b){return b[1]}},53:function(a,b,d){var j,C=d(899),S=Symbol.for("react.element"),p=Symbol.for("react.fragment"),$=Object.prototype.hasOwnProperty,R=C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,G={key:!0,ref:!0,__self:!0,__source:!0};function X(F,B,W){var ne,ye={},we=null,it=null;W!==void 0&&(we=""+W),B.key!==void 0&&(we=""+B.key),B.ref!==void 0&&(it=B.ref);for(ne in B)$.call(B,ne)&&!G.hasOwnProperty(ne)&&(ye[ne]=B[ne]);if(F&&F.defaultProps)for(ne in B=F.defaultProps,B)ye[ne]===void 0&&(ye[ne]=B[ne]);return{$$typeof:S,type:F,key:we,ref:it,props:ye,_owner:R.current}}j=p,b.jsx=X,b.jsxs=X},458:function(a,b,d){a.exports=d(53)},748:function(a){var b=[];function d(S){for(var p=-1,$=0;$<b.length;$++)if(b[$].identifier===S){p=$;break}return p}function j(S,p){for(var $={},R=[],G=0;G<S.length;G++){var X=S[G],F=p.base?X[0]+p.base:X[0],B=$[F]||0,W="".concat(F," ").concat(B);$[F]=B+1;var ne=d(W),ye={css:X[1],media:X[2],sourceMap:X[3],supports:X[4],layer:X[5]};if(ne!==-1)b[ne].references++,b[ne].updater(ye);else{var we=C(ye,p);p.byIndex=G,b.splice(G,0,{identifier:W,updater:we,references:1})}R.push(W)}return R}function C(S,p){var $=p.domAPI(p);$.update(S);var R=function(G){if(G){if(G.css===S.css&&G.media===S.media&&G.sourceMap===S.sourceMap&&G.supports===S.supports&&G.layer===S.layer)return;$.update(S=G)}else $.remove()};return R}a.exports=function(S,p){p=p||{},S=S||[];var $=j(S,p);return function(R){R=R||[];for(var G=0;G<$.length;G++){var X=$[G],F=d(X);b[F].references--}for(var B=j(R,p),W=0;W<$.length;W++){var ne=$[W],ye=d(ne);b[ye].references===0&&(b[ye].updater(),b.splice(ye,1))}$=B}}},736:function(a){var b={};function d(C){if(typeof b[C]=="undefined"){var S=document.querySelector(C);if(window.HTMLIFrameElement&&S instanceof window.HTMLIFrameElement)try{S=S.contentDocument.head}catch(p){S=null}b[C]=S}return b[C]}function j(C,S){var p=d(C);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(S)}a.exports=j},706:function(a){function b(d){var j=document.createElement("style");return d.setAttributes(j,d.attributes),d.insert(j,d.options),j}a.exports=b},567:function(a,b,d){function j(C){var S=d.nc;S&&C.setAttribute("nonce",S)}a.exports=j},306:function(a){function b(C,S,p){var $="";p.supports&&($+="@supports (".concat(p.supports,") {")),p.media&&($+="@media ".concat(p.media," {"));var R=typeof p.layer!="undefined";R&&($+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),$+=p.css,R&&($+="}"),p.media&&($+="}"),p.supports&&($+="}");var G=p.sourceMap;G&&typeof btoa!="undefined"&&($+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(G))))," */")),S.styleTagTransform($,C,S.options)}function d(C){if(C.parentNode===null)return!1;C.parentNode.removeChild(C)}function j(C){var S=C.insertStyleElement(C);return{update:function(p){b(S,C,p)},remove:function(){d(S)}}}a.exports=j},62:function(a){function b(d,j){if(j.styleSheet)j.styleSheet.cssText=d;else{for(;j.firstChild;)j.removeChild(j.firstChild);j.appendChild(document.createTextNode(d))}}a.exports=b},899:function(a){a.exports=Et},994:function(a){a.exports=$e}},Q={};function re(a){var b=Q[a];if(b!==void 0)return b.exports;var d=Q[a]={id:a,exports:{}};return be[a](d,d.exports,re),d.exports}(function(){re.n=function(a){var b=a&&a.__esModule?function(){return a.default}:function(){return a};return re.d(b,{a:b}),b}})(),function(){re.d=function(a,b){for(var d in b)re.o(b,d)&&!re.o(a,d)&&Object.defineProperty(a,d,{enumerable:!0,get:b[d]})}}(),function(){re.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)}}(),function(){re.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){re.nc=void 0}();var x={};return function(){re.r(x),re.d(x,{Anico:function(){return it},Carousel:function(){return nr},Col:function(){return xt},Drawer:function(){return yt},Drop:function(){return ct},Ellipsis:function(){return gr},ErrorBoundary:function(){return wr},FullPage:function(){return h},HandleError:function(){return m},LoadError:function(){return y},Mask:function(){return Ke},MaxSize:function(){return xe},Modal:function(){return ae},Panel:function(){return Ot},Portal:function(){return Je},Row:function(){return hr},Spinner:function(){return Pe},TabHeader:function(){return Yr},Tooltip:function(){return Vt},Tree:function(){return Ar},fixEle:function(){return ur},fixIcon:function(){return $r},renderTree:function(){return jr},str2React:function(){return w},str2Vue:function(){return Qt}});var a=re(458),b=re(748),d=re.n(b),j=re(306),C=re.n(j),S=re(736),p=re.n(S),$=re(567),R=re.n($),G=re(706),X=re.n(G),F=re(62),B=re.n(F),W=re(193),ne={};ne.styleTagTransform=B(),ne.setAttributes=R(),ne.insert=p().bind(null,"head"),ne.domAPI=C(),ne.insertStyleElement=X();var ye=d()(W.Z,ne),we=W.Z&&W.Z.locals?W.Z.locals:void 0,it=i=>(0,a.jsx)("span",{className:we.anico,children:(0,a.jsx)("span",{className:[we.hline,...(i.type||"").split(" ").map(l=>we[l]).filter(Boolean)].join(" ")})}),at=re(994),_=re(899),Ae=re.n(_),De=(i,l)=>{const f=(0,_.useRef)();(0,_.useEffect)(()=>{f.current=i},[i]),(0,_.useEffect)(()=>{if(l){const E=setInterval(()=>f.current(),l);return()=>clearInterval(E)}},[l])},_e=()=>![typeof window,typeof document].includes("undefined"),St=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),lt=i=>St(i).indexOf("element")>-1,$t=(i=null)=>{var l,f;return _e()?lt(i)?{width:i.clientWidth,height:i.clientHeight}:{width:(l=window.innerWidth)!=null?l:document.documentElement.clientWidth,height:(f=window.innerHeight)!=null?f:document.documentElement.clientHeight}:{width:0,height:0}},Nt=(i=()=>{},l=60)=>{let f=null;return function(...E){clearTimeout(f),f=setTimeout(()=>i.apply(this,E),l)}},mr=(i,l)=>Object.prototype.hasOwnProperty.call(i!=null?i:{},l),Re=i=>mr(i,"current");const Dt=(i,l)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const f=document.createElement("object");return f.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),f.setAttribute("class","resize-sensor"),f.onload=()=>{f.contentDocument.defaultView.addEventListener("resize",l,!1),l()},f.type="text/html",i.appendChild(f),f.data="about:blank",f};var xr=(i,l=60)=>{if(!_e())return;i=Re(i)?i.current:i!=null?i:document.body;let f,E=[];const T=Nt(()=>E.map(Y=>Y(i)),l),N=Y=>{f||(f=Dt(i,T)),E.indexOf(Y)===-1&&E.push(Y)},A=Y=>{const te=E.indexOf(Y);te!==-1&&E.splice(te,1),E.length===0&&f&&U()},U=()=>{f&&f.parentNode&&(f.contentDocument&&f.contentDocument.defaultView.removeEventListener("resize",T,!1),f.parentNode.removeChild(f),f=void 0,E=[])};return{element:i,bind:N,unbind:A,destroy:U}},Zt=(i={})=>{const l=(0,_.useRef)(0),[f,E]=(0,_.useState)(i),T=(0,_.useCallback)(N=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>E(N))},[]);return(0,_.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[f,T]},pt=(i=null,l=60)=>{const f=Re(i)?i.current:i,{bind:E,destroy:T}=xr(f,l),[N,A]=Zt($t(f));return(0,_.useEffect)(()=>(E(()=>f&&A($t(f))),()=>T()),[f]),N},mt=re(145),Be={};Be.styleTagTransform=B(),Be.setAttributes=R(),Be.insert=p().bind(null,"head"),Be.domAPI=C(),Be.insertStyleElement=X();var st=d()(mt.Z,Be),Me=mt.Z&&mt.Z.locals?mt.Z.locals:void 0,nr=({children:i,active:l=0,delay:f=5e3,className:E,...T})=>{const[N,A]=(0,_.useState)(l+1),[U,Y]=(0,_.useState)(!1),te=(0,_.useRef)(),oe=(0,_.useRef)(""),{width:ce}=pt(te);i=Array.isArray(i)?i:[i];const se=i[0],Ee=[i[i.length-1],...i,se],Se=Ee.length;De(()=>{let Ce=N+1;Ce=Ce===Se?1:Ce,oe.current&&(oe.current=""),A(Ce),Ce===Se-1&&setTimeout(()=>{oe.current="none",A(1)},500)},U?null:f);const fe=(Ce,je)=>{je.stopPropagation(),oe.current="",A(Ce),(0,at.flushSync)(()=>Y(!0)),Y(!1)},Ie={width:`${Se*ce}px`,transform:`translateX(${-ce*N}px)`,transition:oe.current};return(0,a.jsxs)("div",{className:`${Me["huxy-carousel"]}${E?` ${E}`:""}`,...T,ref:te,children:[(0,a.jsx)("div",{className:Me["huxy-carousel-wrap"],style:Ie,children:Ee.map((Ce,je)=>(0,a.jsx)("div",{className:`${Me["carousel-item"]} ${N===je?Me.active:""}`,style:{width:`${ce}px`},children:Ce},`huxy-carousel-${je}`))}),(0,a.jsx)("div",{className:Me["carousel-switch"],children:i.map((Ce,je)=>(0,a.jsx)("span",{className:`${Me.dot} ${N===je+1?Me.active:""}`,onClick:Ge=>fe(je+1,Ge)},`huxy-carousel-switch-${je}`))})]})};const Xe=(i,l)=>{let f="",E="";if(typeof l=="number"&&(f=`col-${i}-${l}`),typeof l=="object"){const{span:T,offset:N}=l;f=T?`col-${i}-${T}`:"",E=N?`offset-${i}-${N}`:""}return{sp:f,os:E}};var xt=(0,_.forwardRef)(({span:i,offset:l,xl:f,lg:E,md:T,sm:N,xs:A,style:U,width:Y,auto:te,offsetWidth:oe="0px",className:ce,...se},Ee)=>{const Se=ce?` ${ce}`:"",fe=`col-${i||12}`,Ie=l?`offset-${l}`:"",{sp:Ce,os:je}=Xe("xs",A),{sp:Ge,os:Bt}=Xe("sm",N),{sp:rr,os:Nr}=Xe("md",T),{sp:Mt,os:Dr}=Xe("lg",E),{sp:Pr,os:Ct}=Xe("xl",f),jt=[fe,Pr,Mt,rr,Ge,Ce,Ie,Ct,Dr,Nr,Bt,je].filter(Boolean).join(" "),ot=te?{width:"auto",flex:1,maxWidth:`calc(100% - ${oe})`}:{width:Y};return(0,a.jsx)("div",{className:`${jt}${Se}`,...se,style:{...ot,...U},ref:Ee})}),zt=()=>{const i=(0,_.useRef)(!0);return i.current?(i.current=!1,!0):!1},Yt=(i,l=[])=>{const f=zt();(0,_.useEffect)(()=>{if(!f)return i()},l)},Pt=(i,l=450)=>{const[f,E]=(0,_.useState)(i);return Yt(()=>{let T;return i||l===0?E(i):T=setTimeout(()=>E(i),l),()=>T&&clearTimeout(T)},[i]),[f,E]},Je=({children:i,mountNode:l=document.body})=>(0,at.createPortal)(i,l);const _t={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},We={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},ir={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},Ht=document.body;var Ke=({open:i,close:l,delay:f=300,children:E,mountNode:T,hasMask:N=!0,style:A,className:U="h-mask"})=>{const[Y]=Pt(i,f);return Ht.style.overflow=Y?"hidden":"",(0,a.jsx)(Je,{mountNode:T,children:(0,a.jsx)("div",{children:Y?(0,a.jsxs)("div",{className:U,style:_t,children:[N?(0,a.jsx)("div",{style:We,onClick:te=>l==null?void 0:l(te)}):null,(0,a.jsx)("div",{style:{...ir,...A},children:E})]}):null})})},Ft=re(842),ut={};ut.styleTagTransform=B(),ut.setAttributes=R(),ut.insert=p().bind(null,"head"),ut.domAPI=C(),ut.insertStyleElement=X();var ar=d()(Ft.Z,ut),Ue=Ft.Z&&Ft.Z.locals?Ft.Z.locals:void 0,yt=({open:i,close:l,footer:f,header:E,className:T,children:N,width:A="300px"})=>{var U;const Y=["drawer-wrap",i?"open":"",...(U=T==null?void 0:T.split(" "))!=null?U:[]].filter(Boolean).map(te=>Ue[te]).join(" ");return(0,a.jsx)(Ke,{open:i,close:l,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,a.jsx)("div",{className:Y,style:{width:A},children:(0,a.jsxs)("div",{className:Ue["drawer-container"],children:[(0,a.jsxs)("div",{className:Ue["drawer-header"],children:[(0,a.jsx)("a",{className:Ue["ico-close"],onClick:te=>l==null?void 0:l(te)}),(0,a.jsx)("div",{children:E})]}),(0,a.jsx)("div",{className:Ue["drawer-content"],children:N}),f?(0,a.jsx)("div",{className:Ue["drawer-footer"],children:f}):null]})})})},lr=(i,l,f="click")=>{(0,_.useEffect)(()=>{const E=N=>{const A=Re(i)?i.current:i;(A==null?void 0:A.contains)&&!A.contains(N.target)&&l(N)},T=typeof f=="string"?[f]:f;return T.map(N=>{document.addEventListener(N,E,!1)}),()=>{T.map(N=>{document.removeEventListener(N,E,!1)})}},[i,l,f])},It=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",sr=(i="")=>i.replace(/^\S/,l=>l.toUpperCase()),Qe=i=>{var l;if(_e())return i=Re(i)?i.current:i!=null?i:document.body,(l=i.getBoundingClientRect)==null?void 0:l.call(i)},u=i=>{if(!_e())return;const l=document.createElement("div");return l.innerHTML=i,l.children[0]},g=(i,l={},f=!1)=>{!lt(i)||Object.keys(l).map(E=>{i.style.setProperty(E,f?"":l[E])})};const k=(i=350)=>new Promise(l=>setTimeout(l,i)),O=(i=100)=>{const l=Date.now();for(;Date.now()-l<=i;);};var D=k,q=async(i,l=15)=>{if(!_e())return;if(typeof i=="string"&&(i=u(i)),i=Re(i)?i.current:i,!lt(i))return{};const f=i.cloneNode(!0);g(f,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(f),await D(l);const E=Qe(f);return i.parentNode.removeChild(f),E};const ue=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,ie=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,ee=(i,l)=>{var f;l=`huxy-drop-arrow-${l}`;const E=(f=i.getAttribute("class"))!=null?f:"";ue.test(E)?i.setAttribute("class",E.replace(ie,l)):i.setAttribute("class",`${E} ${l}`)},ke=async(i,l,f)=>{const{left:E,right:T,top:N,bottom:A}=Qe(i),{width:U,height:Y}=$t(),{width:te,height:oe}=await q(l);if(T<0||A<0||E>U||N>Y)return{};if(f==="vertical"){const ce={left:E+"px",top:A+10+"px",right:"auto",bottom:"auto"};let se="lt";E+te>U&&(ce.left=T-te+"px",se="rt"),A+10+oe>Y&&(ce.top=N-10-oe+"px",se=se==="lt"?"lb":"rb"),g(l,ce),ee(l,se)}else{const ce={left:T+10+"px",top:N+"px",right:"auto",bottom:"auto"};let se="tl";T+10+te>U&&(ce.left=E-10-te+"px",se="tr"),N+oe>Y&&(ce.top=A-oe+"px",se=se==="tl"?"bl":"br"),g(l,ce),ee(l,se)}};var qe=(i,l,f="horizontal")=>{const E=Nt(ke),T=()=>E(i,l,f);window.addEventListener("scroll",T,!1),window.addEventListener("resize",T,!1);const N=()=>{window.removeEventListener("scroll",T),window.removeEventListener("resize",T),g(l,{left:"",top:"",right:"",bottom:""})};return ke(i,l,f),N},gt=({open:i,delay:l=250,children:f,mountNode:E,style:T,className:N="huxy-mask"})=>{const[A]=Pt(i,l);return(0,a.jsx)(Je,{mountNode:E,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:N,children:(0,a.jsx)("div",{style:{...T,display:A?"block":"none"},children:f})})})})},et=re(563),Fe={};Fe.styleTagTransform=B(),Fe.setAttributes=R(),Fe.insert=p().bind(null,"head"),Fe.domAPI=C(),Fe.insertStyleElement=X();var At=d()(et.Z,Fe),Tt=et.Z&&et.Z.locals?et.Z.locals:void 0,ct=({trigger:i="click",type:l,dropList:f,className:E,children:T,...N})=>{const[A,U]=(0,_.useState)(!1),Y=(0,_.useRef)(),te=(0,_.useRef)(),oe=(0,_.useRef)();lr(Y,fe=>A&&U(!1),[...new Set(["click",i.toLowerCase()])]),(0,_.useEffect)(()=>()=>{var fe;return(fe=oe.current)==null?void 0:fe.call(oe)},[]);const ce=fe=>{fe.preventDefault(),U(!0),oe.current=qe(Y.current,te.current,l)},se={[`on${sr(i)}`]:ce},Ee=["drop-wrap",A?"open":""].filter(Boolean).map(fe=>Tt[fe]).join(" "),Se=It(f)?f:f==null?void 0:f(()=>U(!1),A);return(0,a.jsxs)("span",{ref:Y,className:`${Tt["drop-target"]}${E?` ${E}`:""}`,...se,...N,children:[T,(0,a.jsx)(gt,{open:A,className:"huxy-drop",children:(0,a.jsx)("div",{ref:te,className:Ee,children:Se})})]})},dt=(i,l={},f)=>{if(!_e())return;f=Re(f)?f.current:f!=null?f:document.body;const E=document.createElement("span");E.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),l&&g(E,l),E.innerText=i,f.appendChild(E);const T=E.getBoundingClientRect();return f.removeChild(E),T},He=re(626),Oe={};Oe.styleTagTransform=B(),Oe.setAttributes=R(),Oe.insert=p().bind(null,"head"),Oe.domAPI=C(),Oe.insertStyleElement=X();var Br=d()(He.Z,Oe),Sr=He.Z&&He.Z.locals?He.Z.locals:void 0,Vt=({title:i,placement:l="topRight",children:f,ellipsis:E,className:T,...N})=>(0,a.jsx)("span",{className:`${Sr[`huxy-tooltip-${l}`]}${T?` ${T}`:""}`,tooltip:i!=null?i:f,...N,children:(0,a.jsx)("span",{className:E?Sr.ellipsis:"",children:f})});const yr={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"};var gr=i=>{var l,f,E,T;const{children:N}=i,A=typeof N=="string",U=A?N:(E=(l=N==null?void 0:N.props)==null?void 0:l.title)!=null?E:(f=N==null?void 0:N.props)==null?void 0:f.children,Y=(0,_.useRef)(),[te,oe]=(0,_.useState)(!1),ce=pt(Y,250);return(0,_.useEffect)(()=>{if(Y.current){const{width:se}=dt(U),{width:Ee}=Qe(Y.current),Se=se>Ee;Se!==te&&oe(Se)}},[U,ce.width]),(0,a.jsx)("span",{ref:Y,style:{width:"100%",display:"inline-block"},children:te?A?(0,a.jsx)(Vt,{...i,ellipsis:!0}):(0,a.jsx)("span",{style:yr,children:N}):A?N:(T=N==null?void 0:N.props)==null?void 0:T.children})},Ut=Object.defineProperty,br=(i,l,f)=>l in i?Ut(i,l,{enumerable:!0,configurable:!0,writable:!0,value:f}):i[l]=f,vr=(i,l,f)=>(br(i,typeof l!="symbol"?l+"":l,f),f);class wr extends Ae().Component{constructor(){super(...arguments),vr(this,"state",{error:null})}static getDerivedStateFromError(l){return{error:l}}componentDidCatch(l,f){const{errorReport:E}=this.props;typeof E=="function"&&E({error:l,info:f.componentStack})}render(){const{error:l}=this.state,{fallback:f,children:E}=this.props;return l?f(l):E}}var ur=i=>l=>{if(typeof l=="function"||typeof(l==null?void 0:l.render)=="function")return(0,a.jsx)(l,{});if(typeof l=="string"){const f=i==null?void 0:i[l];return f?(0,a.jsx)(f,{}):(0,a.jsx)("i",{className:l})}return l!=null?l:null};const cr=i=>ur(i);var $r=i=>({icon:l,defaultIcon:f=null})=>l?cr(i)(l):l===!1?null:f;const qt=["","webkit","moz","ms"],dr=i=>qt.map(l=>l?`${l}FullscreenElement`:"fullscreenElement").find(l=>i[l]),zr=i=>qt.map(l=>l?`${l}RequestFullscreen`:"requestFullscreen").find(l=>i[l]),Fr=i=>qt.map(l=>l?`${l}ExitFullscreen`:"exitFullscreen").find(l=>i[l]),Rt=qt.map(i=>`${i}fullscreenchange`);var kr=i=>{var l,f;if(!_e())return;i=Re(i)?i.current:i!=null?i:document.body;const E=dr(document),T=zr(i),N=Fr(document);document[E]?(f=document[N])==null||f.call(document):(l=i[T])==null||l.call(i)},Cr=i=>_e()?(Rt.map(l=>document.addEventListener(l,i,!1)),()=>Rt.map(l=>document.removeEventListener(l,i,!1))):void 0;const s=i=>(0,a.jsx)("i",{...i,children:"..."});var h=({panel:i,fullIcon:l=s,exitIcon:f=s,...E})=>{const T=Re(i)?i.current:i,[N,A]=(0,_.useState)();(0,_.useEffect)(()=>{const Y=Cr(()=>{A(te=>!te)});return()=>Y()},[]);const U=N?f:l;return(0,a.jsx)(U,{onClick:Y=>kr(T),...E})},w=(i,l)=>(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...l}),y=i=>{const{error:l={},info:f=""}=i||{},{message:E,stack:T,errMsg:N}=l;let A=N||T||l.toString();A=`${A}
${f}`.replace(/\r|\n|\r\n/g,"<br/>"),A=A.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),A=A.replace(/\s/g,"&nbsp;");const U=E==null?void 0:E.slice(0,120).split(". ").slice(0,2).join(". ");return(0,a.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[w(A,{style:{color:"red"}}),U&&(0,a.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${U}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},m=({children:i,report:l})=>{var f;const E=(0,_.useRef)();return(f=E.current)!=null&&f.state&&(E.current.state.error=null),(0,a.jsx)(wr,{ref:E,fallback:(T,N)=>y({error:T,info:N}),errorReport:l,children:i})};const L=(i,l)=>Object.keys(l).map(f=>i.style[f]=l[f]),Z=(i,l)=>Object.keys(l).map(f=>i.style[f]=""),H={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},M=({left:i,top:l,width:f,height:E})=>({left:`${i}px`,top:`${l}px`,width:`${f}px`,height:`${E}px`}),I=i=>(0,a.jsx)("i",{...i,children:"..."}),le=i=>{const{left:l,top:f}=Qe(i),{width:E,height:T}=$t(i);return{left:l,top:f,width:E,height:T}};var xe=({panel:i,target:l,fullIcon:f=I,exitIcon:E=I})=>{i=Re(i)?i.current:i||document.body;const[T,N]=(0,_.useState)(),A=(0,_.useRef)(),U=(0,_.useRef)();(0,_.useEffect)(()=>{const oe=typeof l=="function"?l:()=>document.getElementsByClassName(l)[0];U.current=M(le(oe())),A.current={...H,...M(le(i))}},[i]);const Y=(oe,ce)=>{oe?(L(ce,A.current),setTimeout(()=>{L(ce,U.current)},0)):Z(ce,A.current),N(oe)},te=T?E:f;return(0,a.jsx)(te,{onClick:oe=>Y(!T,i)})},de=re(697),J={};J.styleTagTransform=B(),J.setAttributes=R(),J.insert=p().bind(null,"head"),J.domAPI=C(),J.insertStyleElement=X();var me=d()(de.Z,J),ge=de.Z&&de.Z.locals?de.Z.locals:void 0,ae=({open:i,close:l,hasMask:f=!0,cancelText:E="\u53D6\u6D88",submit:T,submitText:N="\u786E\u5B9A",title:A="Modal \u5F39\u7A97",className:U,children:Y,delay:te=250})=>{var oe;const ce=["modal-wrap",i?"open":"",...(oe=U==null?void 0:U.split(" "))!=null?oe:[]].filter(Boolean).map(se=>ge[se]).join(" ");return(0,a.jsx)(Ke,{open:i,close:l,delay:te,hasMask:f,className:"huxy-modal",children:(0,a.jsx)("div",{className:ce,children:(0,a.jsxs)("div",{className:ge["modal-container"],children:[(0,a.jsx)("div",{className:ge["modal-header"],children:A}),(0,a.jsx)("div",{className:ge["modal-content"],children:Y}),(0,a.jsxs)("div",{className:ge["modal-footer"],children:[(0,a.jsx)("div",{className:`${ge.btn} ${ge.left}`,onClick:se=>l==null?void 0:l(se),children:E}),(0,a.jsx)("div",{className:`${ge.btn} ${ge.right}`,onClick:se=>T==null?void 0:T(se),children:N})]})]})})})},K=re(201),pe={};pe.styleTagTransform=B(),pe.setAttributes=R(),pe.insert=p().bind(null,"head"),pe.domAPI=C(),pe.insertStyleElement=X();var ze=d()(K.Z,pe),Le=K.Z&&K.Z.locals?K.Z.locals:void 0,Pe=({global:i,absolute:l})=>(0,a.jsx)("div",{className:`spinner${i?" global":""}${l?" absolute":""}`,children:(0,a.jsx)("figure",{className:"spinning"})}),Ne=re(810),Ze={};Ze.styleTagTransform=B(),Ze.setAttributes=R(),Ze.insert=p().bind(null,"head"),Ze.domAPI=C(),Ze.insertStyleElement=X();var fr=d()(Ne.Z,Ze),tt=Ne.Z&&Ne.Z.locals?Ne.Z.locals:void 0;const bt=i=>{var l;return(l=i==null?void 0:i.filter)==null?void 0:l.call(i,f=>typeof f=="function")},vt=(i,l)=>{const f=(0,_.useRef)(),{loading:E,title:T,plugins:N,children:A,className:U,...Y}=i,te=bt(N),oe=te==null?void 0:te.length,ce=U?` ${U}`:"",se=Re(l)?l:f;return(0,a.jsxs)("div",{className:`${tt.panel}${ce}`,...Y,ref:se,children:[(T||oe)&&(0,a.jsxs)("div",{className:tt["panel-header"],children:[T&&(0,a.jsx)("h4",{className:tt["panel-title"],children:T}),oe&&(0,a.jsx)("div",{className:tt["panel-plugins"],children:te.map((Ee,Se)=>(0,a.jsx)("a",{children:(0,a.jsx)(Ee,{panel:se})},Se))})]}),(0,a.jsx)("div",{className:tt["panel-body"],children:A}),E&&(0,a.jsx)(Pe,{})]})};var Ot=(0,_.forwardRef)(vt),Ye=re(31),wt={};wt.styleTagTransform=B(),wt.setAttributes=R(),wt.insert=p().bind(null,"head"),wt.domAPI=C(),wt.insertStyleElement=X();var Ve=d()(Ye.Z,wt),kt=Ye.Z&&Ye.Z.locals?Ye.Z.locals:void 0;const Gt=({gutter:i=10,className:l,overflow:f="hidden",...E},T)=>{var N;const A=l?` ${l}`:"";let U=10;if(Array.isArray(i)){const Y=[...i];i=Y[0],U=(N=Y[1])!=null?N:Y[0]}return(0,a.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(U/2)}px`,overflow:f},children:(0,a.jsx)("div",{className:`row${A}`,...E,ref:T})})};var hr=(0,_.forwardRef)(Gt),ft=i=>St(i)==="array",Lt=i=>ft(i)&&!!i.length;const Tr=({item:i,to:l,preventDefault:f,stopPropagation:E,...T})=>(0,a.jsx)("a",{href:f?null:l,...T}),Xt=({item:i,...l})=>(0,a.jsx)("ul",{...l}),Jt=(i,...l)=>{const f={};return Object.keys(i).filter(Boolean).map(E=>{f[E]=T=>i[E](T,...l)}),f},Kt=({data:i=[],events:l={},List:f=Xt,Link:E=Tr,leftIcon:T,rightIcon:N,level:A=0})=>i.map(U=>{const{name:Y,path:te,icon:oe,rightIcon:ce,active:se,open:Ee,children:Se,linkProps:fe}=U,Ie=Lt(Se),Ce=Jt(l,U,A,Ie),je=U.id||te||Y,Ge=oe!=null?oe:T,Bt=ce!=null?ce:N;return Ie?(0,a.jsxs)("li",{className:Ee?"open":"","has-children":"true",...Ce,children:[(0,a.jsxs)(E,{item:{...U,level:A},className:se?"active":"",to:te,preventDefault:!0,stopPropagation:!1,...fe,children:[Ge?(0,a.jsx)("div",{className:"node-left-icon",children:Ge===!0?(0,a.jsx)("i",{className:"default-left-icon"}):Ge}):null,Y?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:Y})}):null,Bt?(0,a.jsx)("div",{className:"node-right-icon",children:Bt===!0?(0,a.jsx)("i",{className:"default-right-icon"}):Bt}):null]}),(0,a.jsx)(f,{item:U,children:Kt({data:Se,events:l,List:f,Link:E,leftIcon:T,rightIcon:N,level:A+1})})]},je):(0,a.jsx)("li",{...Ce,children:(0,a.jsxs)(E,{item:{...U,level:A},className:se?"active":"",to:te,...fe,children:[Ge?(0,a.jsx)("div",{className:"node-left-icon",children:Ge===!0?(0,a.jsx)("i",{className:"default-left-icon"}):Ge}):null,Y?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:Y})}):null]})},je)});var jr=Kt,Qt=(i,...l)=>(0,a.jsx)("div",{"v-html":i,...l}),er=re(289),rt={};rt.styleTagTransform=B(),rt.setAttributes=R(),rt.insert=p().bind(null,"head"),rt.domAPI=C(),rt.insertStyleElement=X();var Or=d()(er.Z,rt),Mr=er.Z&&er.Z.locals?er.Z.locals:void 0;const Wr=i=>(0,a.jsx)("div",{style:{padding:"6px 15px"},children:i}),Zr=({activekey:i,tabs:l=[],switchTab:f,trackColor:E,flex:T},N)=>{var A;const[U,Y]=(0,_.useState)(i!=null?i:(A=l[0])==null?void 0:A.key),[te,oe]=(0,_.useState)({}),ce=(0,_.useRef)({}),se=(0,_.useRef)();(0,_.useEffect)(()=>{const fe=ce.current[U];fe&&Ee(fe)},[]);const Ee=fe=>{const{left:Ie,width:Ce}=Qe(fe),je=Qe(se.current).left;oe({left:Ie-je,width:Ce})},Se=(fe,Ie)=>{fe.stopPropagation(),Y(Ie),typeof f=="function"&&f(Ie),Ee(fe.currentTarget)};return(0,a.jsxs)("div",{className:"tabs-header-wrap",ref:N,children:[(0,a.jsx)("ul",{className:`tabs-header${T?" flex":""}`,ref:se,children:l.map(fe=>(0,a.jsx)("li",{ref:Ie=>ce.current[fe.key]=Ie,className:`th-item${U===fe.key?" active":""}`,onClick:Ie=>Se(Ie,fe.key),children:typeof fe.renderTabs=="function"?fe.renderTabs(fe,U===fe.key):Wr(fe.value)},fe.key))}),(0,a.jsx)("div",{className:"th-track",style:{...te,color:E}})]})};var Yr=(0,_.forwardRef)(Zr),_r=(i,l,f="id",E="children")=>{if(!ft(i))return null;const T=N=>{for(let A=0,U=N.length;A<U;A++){const Y=N[A];if(Y[f]===l)return[Y];if(ft(Y[E])){const te=T(Y[E]);if(te)return[Y].concat(te)}}};return T(i)},Hr=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Vr=()=>{let i=Hr();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,l=>{const f=(i+Math.random()*16)%16|0;return i=Math.floor(i/16),(l==="x"?f:f&3|8).toString(16)})};const Ur=i=>++i;var qr=()=>{const[,i]=(0,_.useState)(0);return(0,_.useCallback)(()=>i(Ur),[])},Gr=({item:i,style:l,...f})=>{var E;const{uuid:T,open:N}=i,A=(0,_.useRef)(),U=(0,_.useRef)(),Y=zt(),[te,oe]=(0,_.useState)("");return(0,_.useEffect)(()=>{const ce=A.current,se=N?`${ce.scrollHeight}px`:"0px";oe(se)},[]),(0,_.useEffect)(()=>{if(Y)return;const ce=A.current,se=N?"0px":`${ce.scrollHeight}px`;return oe(se),U.current=setTimeout(()=>{const Ee=N?`${ce.scrollHeight}px`:"0px";oe(Ee)},5),()=>clearTimeout(U.current)},[N,(E=i.children)==null?void 0:E.length]),(0,_.useEffect)(()=>{T&&oe("")},[T]),(0,a.jsx)("ul",{ref:A,style:{...l,maxHeight:te},...f})},Er=re(435),tr={};tr.styleTagTransform=B(),tr.setAttributes=R(),tr.insert=p().bind(null,"head"),tr.domAPI=C(),tr.insertStyleElement=X();var Kr=d()(Er.Z,tr),Qr=Er.Z&&Er.Z.locals?Er.Z.locals:void 0;const Xr=i=>(0,a.jsx)("ul",{...i}),Jr=(i,l)=>i?({item:f,...E})=>(0,a.jsx)(Xr,{className:l==="right"?"left":"",...E}):Gr;var Ar=i=>{var l;const{data:f=[],collapsed:E=!1,type:T="vertical",Link:N,width:A,bgColor:U,itemHeight:Y,collapsedWidth:te,itemPadding:oe,style:ce,className:se,...Ee}=i,Se=(0,_.useRef)(),fe=(0,_.useRef)();(0,_.useEffect)(()=>()=>clearTimeout(Se.current),[]);const Ie=qr(),Ce=T==="horizontal",je=!Ce&&E,Ge={onClick:(Ct,jt)=>{Ct.stopPropagation(),!Ce&&!je&&(_r(f,jt.path,"path").map(ot=>ot.path===jt.path?ot.open=!ot.open:ot.uuid=Vr()),Ie())},onMouseEnter:(Ct,jt,ot,Ir)=>{je&&!ot&&Ir&&(clearTimeout(Se.current),fe.current.style.width="var(--maxWidth)")},onMouseLeave:(Ct,jt,ot,Ir)=>{je&&!ot&&Ir&&(Se.current=setTimeout(()=>fe.current.style.width="",200))}},Bt=(Ce?["huxy-horizontal-tree",se]:["huxy-tree",se,je?"collapsed":""]).filter(Boolean).join(" "),{float:rr,...Nr}=(l=Ee==null?void 0:Ee.style)!=null?l:{},Mt={"--bgColor":U,"--itemHeight":Y,"--nodeListWidth":A,...Nr};T==="horizontal"?(Mt["--itemPadding"]=oe,Mt["--nodeFloat"]=rr):(Mt["--width"]=A,Mt["--collapsedWidth"]=te);const Dr=Jr(Ce||je,rr),Pr=({item:Ct,...jt})=>je&&!Ct.level?(0,a.jsx)(N,{...jt,title:Ct.title||Ct.name}):(0,a.jsx)(N,{...jt});return(0,a.jsx)("div",{ref:fe,className:Bt,style:Mt,...Ee,children:(0,a.jsx)("div",{className:"huxy-tree-track",children:(0,a.jsx)("ul",{className:"huxy-tree-root",children:jr({data:f,events:Ge,List:Dr,Link:Pr,leftIcon:!0,rightIcon:!0})})})})}}(),x}()})},4544:function(or,ht,nt){(function(Et,$e){or.exports=$e(nt(7378))})(this,function(Et){return function(){"use strict";var $e={201:function(x,a,b){var d=b(703),j=b.n(d),C=b(414),S=b.n(C),p=S()(j());p.push([x.id,`@keyframes before {
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
`,""]),p.locals={},a.Z=p},414:function(x){x.exports=function(a){var b=[];return b.toString=function(){return this.map(function(d){var j="",C=typeof d[5]!="undefined";return d[4]&&(j+="@supports (".concat(d[4],") {")),d[2]&&(j+="@media ".concat(d[2]," {")),C&&(j+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),j+=a(d),C&&(j+="}"),d[2]&&(j+="}"),d[4]&&(j+="}"),j}).join("")},b.i=function(d,j,C,S,p){typeof d=="string"&&(d=[[null,d,void 0]]);var $={};if(C)for(var R=0;R<this.length;R++){var G=this[R][0];G!=null&&($[G]=!0)}for(var X=0;X<d.length;X++){var F=[].concat(d[X]);C&&$[F[0]]||(typeof p!="undefined"&&(typeof F[5]=="undefined"||(F[1]="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {").concat(F[1],"}")),F[5]=p),j&&(F[2]&&(F[1]="@media ".concat(F[2]," {").concat(F[1],"}")),F[2]=j),S&&(F[4]?(F[1]="@supports (".concat(F[4],") {").concat(F[1],"}"),F[4]=S):F[4]="".concat(S)),b.push(F))}},b}},703:function(x){x.exports=function(a){return a[1]}},53:function(x,a,b){var d,j=b(899),C=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function G(X,F,B){var W,ne={},ye=null,we=null;B!==void 0&&(ye=""+B),F.key!==void 0&&(ye=""+F.key),F.ref!==void 0&&(we=F.ref);for(W in F)p.call(F,W)&&!R.hasOwnProperty(W)&&(ne[W]=F[W]);if(X&&X.defaultProps)for(W in F=X.defaultProps,F)ne[W]===void 0&&(ne[W]=F[W]);return{$$typeof:C,type:X,key:ye,ref:we,props:ne,_owner:$.current}}d=S,a.jsx=G,a.jsxs=G},458:function(x,a,b){x.exports=b(53)},748:function(x){var a=[];function b(C){for(var S=-1,p=0;p<a.length;p++)if(a[p].identifier===C){S=p;break}return S}function d(C,S){for(var p={},$=[],R=0;R<C.length;R++){var G=C[R],X=S.base?G[0]+S.base:G[0],F=p[X]||0,B="".concat(X," ").concat(F);p[X]=F+1;var W=b(B),ne={css:G[1],media:G[2],sourceMap:G[3],supports:G[4],layer:G[5]};if(W!==-1)a[W].references++,a[W].updater(ne);else{var ye=j(ne,S);S.byIndex=R,a.splice(R,0,{identifier:B,updater:ye,references:1})}$.push(B)}return $}function j(C,S){var p=S.domAPI(S);p.update(C);var $=function(R){if(R){if(R.css===C.css&&R.media===C.media&&R.sourceMap===C.sourceMap&&R.supports===C.supports&&R.layer===C.layer)return;p.update(C=R)}else p.remove()};return $}x.exports=function(C,S){S=S||{},C=C||[];var p=d(C,S);return function($){$=$||[];for(var R=0;R<p.length;R++){var G=p[R],X=b(G);a[X].references--}for(var F=d($,S),B=0;B<p.length;B++){var W=p[B],ne=b(W);a[ne].references===0&&(a[ne].updater(),a.splice(ne,1))}p=F}}},736:function(x){var a={};function b(j){if(typeof a[j]=="undefined"){var C=document.querySelector(j);if(window.HTMLIFrameElement&&C instanceof window.HTMLIFrameElement)try{C=C.contentDocument.head}catch(S){C=null}a[j]=C}return a[j]}function d(j,C){var S=b(j);if(!S)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");S.appendChild(C)}x.exports=d},706:function(x){function a(b){var d=document.createElement("style");return b.setAttributes(d,b.attributes),b.insert(d,b.options),d}x.exports=a},567:function(x,a,b){function d(j){var C=b.nc;C&&j.setAttribute("nonce",C)}x.exports=d},306:function(x){function a(j,C,S){var p="";S.supports&&(p+="@supports (".concat(S.supports,") {")),S.media&&(p+="@media ".concat(S.media," {"));var $=typeof S.layer!="undefined";$&&(p+="@layer".concat(S.layer.length>0?" ".concat(S.layer):""," {")),p+=S.css,$&&(p+="}"),S.media&&(p+="}"),S.supports&&(p+="}");var R=S.sourceMap;R&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(R))))," */")),C.styleTagTransform(p,j,C.options)}function b(j){if(j.parentNode===null)return!1;j.parentNode.removeChild(j)}function d(j){var C=j.insertStyleElement(j);return{update:function(S){a(C,j,S)},remove:function(){b(C)}}}x.exports=d},62:function(x){function a(b,d){if(d.styleSheet)d.styleSheet.cssText=b;else{for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(document.createTextNode(b))}}x.exports=a},899:function(x){x.exports=Et}},be={};function Q(x){var a=be[x];if(a!==void 0)return a.exports;var b=be[x]={id:x,exports:{}};return $e[x](b,b.exports,Q),b.exports}(function(){Q.n=function(x){var a=x&&x.__esModule?function(){return x.default}:function(){return x};return Q.d(a,{a}),a}})(),function(){Q.d=function(x,a){for(var b in a)Q.o(a,b)&&!Q.o(x,b)&&Object.defineProperty(x,b,{enumerable:!0,get:a[b]})}}(),function(){Q.o=function(x,a){return Object.prototype.hasOwnProperty.call(x,a)}}(),function(){Q.r=function(x){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(x,"__esModule",{value:!0})}}(),function(){Q.nc=void 0}();var re={};return function(){Q.r(re),Q.d(re,{Link:function(){return kr},routeStore:function(){return yt},useRoute:function(){return Cr},useRouter:function(){return Fr}});var x=Q(899),a=Q.n(x),b=s=>Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),d=s=>b(s)==="array",j=s=>b(s)==="object",C=s=>(s==null?void 0:s.$$typeof)&&typeof s.$$typeof=="symbol"&&s.$$typeof.description==="react.element",S=s=>s==null?void 0:s.__v_isVNode,p=(s,h)=>Object.prototype.hasOwnProperty.call(s!=null?s:{},h);const $=s=>{if(!d(s)&&!j(s))return s;const h=d(s)?[]:{};for(const w in s)if(p(s,w)){const y=s[w];h[w]=C(y)||S(y)||typeof y!="object"?y:y!==s?$(y):"cyclic"}else Object.setPrototypeOf(h,{[w]:s[w]});return h};var R=$,G=s=>b(s)==="function",X=s=>b(s)==="promise"||j(s)&&G(s.then),F=(s,h=12e4,w="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!X(s))return{};let y=null,m=null;return{promiseFn:new Promise((L,Z)=>{y=(H="canceled")=>{clearTimeout(m),L({canceled:!0,errMsg:H})},h&&(h=typeof h!="number"?12e4:h,m=setTimeout(()=>y(w),h)),s.then(H=>{clearTimeout(m),L({result:H,errMsg:!1})}).catch(H=>{clearTimeout(m),Z(H)})}),cancelFn:y}},B=s=>s?s.charAt(s.length-1)==="/"?s.slice(0,-1):s:"",W=Q(458),ne=(s,h)=>(0,W.jsx)("div",{dangerouslySetInnerHTML:{__html:s},...h}),ye=s=>{const{error:h={},info:w=""}=s||{},{message:y,stack:m,errMsg:L}=h;let Z=L||m||h.toString();Z=`${Z}
${w}`.replace(/\r|\n|\r\n/g,"<br/>"),Z=Z.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Z=Z.replace(/\s/g,"&nbsp;");const H=y==null?void 0:y.slice(0,120).split(". ").slice(0,2).join(". ");return(0,W.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[ne(Z,{style:{color:"red"}}),H&&(0,W.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${H}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})};const we=(s,h,w,y,m=[])=>{const L=M=>{for(let I=0,le=M.length;I<le;I++){const xe=M[I],de=xe[y].split("?")[0];if(new RegExp("^"+de.replace(/:[^/]+/g,"[^/]+")+"$").test(h))return xe;if(d(xe[w])){const J=L(xe[w]);if(J)return J}}},Z=L(s);if(!Z)return"/404";const{redirect:H}=Z;return H?m.includes(H)?m:(m.push(H),we(s,H.split("?")[0],w,y,m)):m[m.length-1]},it=(s,h,w,y,m)=>{if(!d(s))return null;const L=le=>{const xe=le.split("/"),de=h.split("/"),J={};return xe.map((me,ge)=>me.indexOf(":")===0&&(J[me.slice(1)]=de[ge])),J},Z=(le,xe)=>{const de=[],J=xe.split("/:")[0];for(let me=0,ge=le.length;me<ge;me++){const ae=le[me];if(ae[m]===J){ae.active=!0;const{name:K,title:pe,icon:ze,params:Le}=ae;de.push({name:K,title:pe,icon:ze,params:Le,[m]:J})}else if(xe.indexOf(`${ae[m]}/`)===0){ae.active=!0;const K=L(ae[m]),pe=Object.keys(K).map(Ze=>K[Ze]).join("/"),{name:ze,title:Le,icon:Pe}=ae,Ne=pe?`${J}/${pe}`:ae[m];de.push({name:ze,title:Le,icon:Pe,[m]:Ne,params:{...ae.params,...K}})}else if(ae[m]===xe){ae.active=!0;const K=L(ae[m]),{[y]:pe,...ze}=ae;de.push({...ze,[m]:h,params:{...ze.params,...w,...K}})}}return de},H=(le,xe)=>{for(let de=0,J=le.length;de<J;de++){const me=le[de];if(xe.indexOf(`${me[m]}/`)===0){me.active=!0;return}}},M=le=>{for(let xe=0,de=le.length;xe<de;xe++){const J=le[xe],me=(J[m]||"").split("?")[0];if(me===h){J.hideMenu&&H(le,J.parentPath||me),J.active=!0;const{[y]:ge,...ae}=J;return[{...ae,params:{...ae.params,...w}}]}if(new RegExp("^"+me.replace(/:[^/]+/g,"[^/]+")+"$").test(h))return Z(le,me);if(d(J[y])){const ge=M(J[y]);if(ge){J.active=!0,J.open=!0;const{[y]:ae,...K}=J;return[K,...ge]}}}},I=M(s)||[];return{result:s,current:I}},at=(s,h,w)=>s.filter(y=>y.hideMenu||y[w].indexOf("/:")>-1?!1:(d(y[h])&&(y[h]=at(y[h],h,w)),!0));var _=(s,h,w,y="children",m="path")=>{const L=we(s,h,y,m);if(L)return{redirect:L};const{result:Z,current:H}=it(s,h,w,y,m),M=at(Z,y,m);return{current:H,menu:M}},Ae=()=>{const s={};return{on:(h,w)=>{s[h]||(s[h]=[]),s[h].indexOf(w)===-1&&s[h].push(w)},emit:(h,w)=>{s[h]&&s[h].map(y=>y(w))},off:(h,w=null)=>{if(s[h]){if(typeof w!="function")return s[h]=[];const y=s[h].indexOf(w);y>-1&&s[h].splice(y,1)}}}};const De=s=>{const h={};for(let w in s)p(s,w)||(h[w]=s[w]);return h};var _e=(s,h)=>{if(!j(s))return h;if(!j(h))return s;const w={...De(s),...De(h)},y={...s,...h};return Object.keys(w).map(m=>{Object.setPrototypeOf(y,{[m]:w[m]})}),y},St=()=>{const{on:s,emit:h,off:w}=Ae(),y={};return{getState:m=>R(y[m]),setState:(m,L=!1)=>{if(typeof m=="function"&&(m=m(R(y))),!j(m))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const Z=R(m);Object.keys(Z).map(H=>{const M=y[H],I=Z[H],le=j(I)&&j(M)?_e(M,I):I;!L&&h(H,le),y[H]=le})},subscribe:(m,L)=>(s(m,L),()=>w(m,L)),unsubscribe:w,clean:m=>{typeof m=="string"?y[m]=void 0:Array.isArray(m)?m.map(L=>y[L]=void 0):Object.keys(y).map(L=>y[L]=void 0)}}},lt=s=>(h,w)=>{const[y,m]=(0,x.useState)(()=>{const M=s==null?void 0:s.getState(h);return M!==void 0?M:(w!==void 0&&(s==null||s.setState({[h]:w},!0)),w)}),L=(0,x.useCallback)(M=>s==null?void 0:s.setState({[h]:typeof M=="function"?M(s==null?void 0:s.getState(h)):M}),[]),Z=(0,x.useCallback)(M=>s==null?void 0:s.subscribe(h,M),[]),H=(0,x.useCallback)((M=M)=>s==null?void 0:s.clean(M),[]);return(0,x.useEffect)(()=>{s==null||s.subscribe(h,M=>m(M))},[]),[y,L,Z,H]};const $t=St(),Nt=lt($t),mr=Ae(),Re=Ae(),Dt="push-emitter",xr="replace-emitter",Zt="useRoute-emitter",pt={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},mt={getState:()=>history.state,go:s=>history.go(s),forward:()=>history.forward(),back:()=>history.back()};var Be=s=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(s);const st=(s,h)=>{const w=["#/","/"],y=w[!!h-0];if(!s||w.includes(s))return y;const m=s.charAt(s.length-1)==="/"?s.slice(0,-1):s;return h||m.indexOf("#/")>-1?m:`#${m}`},Me=(s,h,w,y=!1)=>{const m=st(h,w);return y?m:w?s&&m==="/"?s:`${s}${m}`:s?`${s}/${m}`:m},nr=(s,h,w,y,m,L)=>{if(!d(s))return s;const Z=(H,M="")=>H.filter(I=>!I.denied).map(I=>{if(!L&&!I.exact&&!Be(I[y])){(!I[y]||I[y]==="javascript:;")&&(I[y]="");const le=I[y].charAt(0)==="/"&&M.charAt(M.length-1)==="/"?I[y].slice(1):I[y].charAt(0)!=="/"&&M.charAt(M.length-1)!=="/"?`/${I[y]}`:I[y];I[y]=M?M+le:Me(m,le,h)}return I.redirect&&(I.redirect=Me(m,I.redirect,h)),d(I[w])&&(I[w]=Z(I[w],I[y]),!I.redirect&&I[w].length&&(I.redirect=I[w][0][y])),I});return Z(s)};var Xe=s=>{if(!j(s))return"";const h=[];return Object.keys(s).map((w,y)=>{const m=y>0?"&":"?";h.push(`${m}${w}=${s[w]}`)}),h.join("")},xt=(s="")=>{const[h,w]=s.split("?");if(w){const y={};return w.split("&").map(m=>{const[L,Z]=m.split("=");y[L]=Z}),{path:h,params:y}}return{path:h}};const zt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Yt=(s,h)=>{for(let w=s.length-1,y;y=s[w--];){const{title:m,name:L}=y;if(typeof m=="string"&&m.length)return document.title=m;if((m==null||m===!0)&&L)return document.title=h?`${L}-${h}`:L;if(h)return document.title=h}},Pt=s=>{const{pathname:h,search:w,hash:y}=location;if(s){const H=st(h,s),M=decodeURIComponent(`${H}${w}`),{params:I}=xt(M);return{path:M,params:I}}const m=decodeURIComponent(st(y,s)),{params:L}=xt(m),Z=B(h);return{path:Z?`${Z}/${m}`:m,params:L}},Je=(s,h,w)=>{typeof s=="function"&&s({...h,stay:new Date-w})},_t=(s,h,w,y)=>{let m,L,Z;if(typeof s=="string")m=s;else if(j(s))m=s.path,L=s.params,Z=s.query;else return;!m||m==="."||m==="./"?m=y:m.indexOf("./")===0&&(m=`${y.split("?")[0]}${m.replace("./","/")}`),m=Me(h,m,w,s==null?void 0:s.exact);const H=xt(m);m=H.path;const M={...H.params,...Z},I=Xe(M);return m=`${m}${I}`,L={...L,...M},{path:m,params:L}},We=(s,h)=>{const w=s.split(h);return w.length>1?["","/"].includes(w[1].slice(0,1)):!1},ir=Ae();var Ht=s=>{const{on:h,emit:w,off:y}=ir;return{on:m=>h(s,m),emit:m=>w(s,m),off:m=>y(s,m)}},Ke=s=>(h,w)=>{const{getState:y,setState:m,subscribe:L,unsubscribe:Z,clean:H}=s;return w!==void 0&&m({[h]:w},!0),{getState:()=>y(h),setState:(M,I)=>m({[h]:M},I),subscribe:M=>L(h,M),unsubscribe:()=>Z(h),clean:()=>H(h)}};const Ft=St();var ut=Ke(Ft);const ar=Ht("push-emitter"),Ue=Ht("replace-emitter"),yt=ut("route-store"),lr=Ae(),It=St(),sr=lt(It);var Qe=()=>![typeof window,typeof document].includes("undefined"),u=s=>{if(!Qe())return;const h=document.createElement("div");return h.innerHTML=s,h.children[0]},g=Object.defineProperty,k=(s,h,w)=>h in s?g(s,h,{enumerable:!0,configurable:!0,writable:!0,value:w}):s[h]=w,O=(s,h,w)=>(k(s,typeof h!="symbol"?h+"":h,w),w);class D extends a().Component{constructor(){super(...arguments),O(this,"state",{error:null})}static getDerivedStateFromError(h){return{error:h}}componentDidCatch(h,w){const{errorReport:y}=this.props;typeof y=="function"&&y({error:h,info:w.componentStack})}render(){const{error:h}=this.state,{fallback:w,children:y}=this.props;return h?w(h):y}}var q=({children:s,report:h})=>{var w;const y=(0,x.useRef)();return(w=y.current)!=null&&w.state&&(y.current.state.error=null),(0,W.jsx)(D,{ref:y,fallback:(m,L)=>ye({error:m,info:L}),errorReport:h,children:s})},ue=Q(748),ie=Q.n(ue),ee=Q(306),ke=Q.n(ee),qe=Q(736),gt=Q.n(qe),et=Q(567),Fe=Q.n(et),At=Q(706),Tt=Q.n(At),ct=Q(62),dt=Q.n(ct),He=Q(201),Oe={};Oe.styleTagTransform=dt(),Oe.setAttributes=Fe(),Oe.insert=gt().bind(null,"head"),Oe.domAPI=ke(),Oe.insertStyleElement=Tt();var Br=ie()(He.Z,Oe),Sr=He.Z&&He.Z.locals?He.Z.locals:void 0,Vt=({global:s,absolute:h})=>(0,W.jsx)("div",{className:`spinner${s?" global":""}${h?" absolute":""}`,children:(0,W.jsx)("figure",{className:"spinning"})}),yr=()=>{const s=(0,x.useRef)([]);return(0,x.useEffect)(()=>()=>{s.current.map(h=>h.cancelFn()),s.current=[]},[]),{cancelablePromise:(0,x.useCallback)((h,w=!0)=>{const y=F(h,w);return s.current.indexOf(y)===-1&&s.current.push(y),y.promiseFn},[])}},gr=(s={})=>{const{cancelablePromise:h}=yr(),[w,y]=(0,x.useState)(s),m=(0,x.useRef)({}),L=(0,x.useRef)({}),Z=(0,x.useCallback)((M=null)=>{Array.isArray(M)&&M.length?M.map(I=>m.current[I]=s[I]):m.current=s},[]),H=(0,x.useCallback)((M,I,le=!1)=>{const xe=Object.keys(M),de=JSON.stringify(xe.sort());if(!L.current[de]){L.current[de]=!0,le&&Z(Array.isArray(le)?le:xe),xe.map(J=>{m.current[J]||(m.current[J]={}),m.current[J].pending=!0}),y({...m.current});for(let J=0,me=xe.length;J<me;J++){const ge=xe[J];h(M[ge]).then(ae=>{let{result:K,errMsg:pe}=ae;J===me-1&&(L.current[de]=!1),typeof I=="function"&&(K=I(K)||K),m.current[ge]={...K,pending:!1},pe===!1&&y({...m.current})}).catch(ae=>{throw J===me-1&&(L.current[de]=!1),m.current[ge]={error:ae,pending:!1},y({...m.current}),ae})}}},[]);return[w,H,Z]};const Ut=s=>Object.keys(s).length;var br=s=>{const{Comp:h,restResolve:w,loadPromise:y,params:m,children:L}=s,[Z,H]=gr(),[M,I]=gr();return(0,x.useEffect)(()=>{Ut(w)&&H(w),Ut(y)&&I(y)},[w,y]),(0,x.useEffect)(()=>{const le=Ut(Z);le&&le===Ut(w)&&m.store.setState(Z)},[Z]),(0,W.jsx)(h,{...m,...Z,...M,children:L})};const vr=s=>s===!1?null:C(s)?s:G(s)?(0,W.jsx)(s,{}):(0,W.jsx)(Vt,{}),wr=({Loading:s,ErrorBoundary:h,loadedComp:w})=>{const y=(0,W.jsx)(x.Suspense,{fallback:vr(s),children:w});return h===!1?y:G(h)?(0,W.jsx)(h,{children:y}):(0,W.jsx)(q,{children:y})};var ur=({Comp:s,routerProps:h,children:w})=>{const{params:y,...m}=h,{loading:L,errorBoundary:Z,...H}=y,M=(0,W.jsx)(br,{Comp:s,...m,params:H,children:w});return wr({Loading:L,ErrorBoundary:Z,loadedComp:M})};const cr={},$r=(s,h,w)=>{const y={},m={};return j(s)?(Object.keys(s).map(L=>{const Z=h.getState(L);Z==null?m[L]=s[L](w):y[L]=Z}),{cachedResolve:y,restResolve:m}):{cachedResolve:y,restResolve:m}},qt=(s,h)=>{if(!j(s))return{};const w={};return Object.keys(s).map(y=>w[y]=s[y](h)),w},dr=(s,h,w)=>X(w)?w.then(y=>{var m;return ur({Comp:s,routerProps:h,children:(m=y.default)!=null?m:y})}):ur({Comp:s,routerProps:h,children:w});var zr=s=>{const{current:h,menu:w,...y}=s,m=h.map(H=>{const{component:M,resolve:I,loadData:le,loading:xe,errorBoundary:de,icon:J,...me}=H;return me}),L=[...h].filter(H=>H.component),Z=(H=0)=>{if(!L.length)return null;const M=L.shift(),{component:I,resolve:le,loadData:xe,icon:de,key:J,...me}=M;if(typeof I=="function"||X(I)){const ge=me.path;let ae=cr[ge];const{cachedResolve:K,restResolve:pe}=$r(le,y.store,me),ze={loadPromise:qt(xe,me),restResolve:pe,params:{current:m,...y,...me,...K}},Le=Z(H+1);if(ae)return dr(ae,ze,Le);try{ae=I(),ae=C(ae)?I:ae}catch(Pe){ae=I}return X(ae)?ae.then(Pe=>{var Ne;return ae=(Ne=Pe.default)!=null?Ne:Pe,cr[ge]=ae,dr(ae,ze,Le)}):(cr[ge]=ae,dr(ae,ze,Le))}return typeof I=="string"?u(I):I};return Z()},Fr=s=>{const[h,w]=(0,x.useState)(s),[y,m]=(0,x.useState)(),[L,Z]=(0,x.useState)(),H=(0,x.useRef)(),M=(0,x.useRef)(),I=(0,x.useRef)(),le=(0,x.useRef)(),xe=()=>{typeof H.current=="function"&&(H.current({cancel:pt.cancelMsg}),H.current=null)},de=(0,x.useCallback)(K=>{typeof K=="function"?w(pe=>({...pe,...K(pe)})):j(K)&&w(pe=>({...pe,...K}))},[]),J=(K,pe="pushState")=>{const{basepath:ze,browserRouter:Le}=le.current,Pe=I.current,{path:Ne,params:Ze}=_t(K,ze,Le,Pe);Ne!==Pe&&ae({inputPath:Ne,inputParams:Ze},()=>history[pe](K==null?void 0:K.state,"",Ne))},me=(0,x.useCallback)(K=>J(K),[]),ge=(0,x.useCallback)(K=>J(K,"replaceState"),[]),ae=(0,x.useCallback)(({inputPath:K="",inputParams:pe={}},ze)=>{const Le=+new Date,{browserRouter:Pe,childKey:Ne,idKey:Ze,title:fr,routers:tt,beforeRender:bt,afterRender:vt,basepath:Ot,allowedNotFound:Ye,...wt}=le.current;if(!K){const{path:Ve,params:kt}=Pt(Pe);K=Ve,pe={...pe,...kt}}new Promise((Ve,kt)=>{tt!=null&&tt.length||kt("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),K!==I.current&&typeof bt=="function"?bt({path:K,params:pe,prevPath:I.current},Ve,kt):Ve()}).then(Ve=>{var kt,Gt;if(Ve===!1)return;const hr=Ve==null?void 0:Ve.path;if(hr&&Me(Ot,hr,Pe)!==K){ge(Ve);return}M.current=(kt=M.current)!=null?kt:K;const{redirect:ft,current:Lt,menu:Tr}=_(R(tt),K.split("?")[0],pe,Ne,Ze);if(ft){if(Ye&&ft==="/404"&&(typeof Ye=="boolean"||typeof Ye=="string"&&We(M.current,Ye)||d(Ye)&&Ye.find(Kt=>We(M.current,Kt))))return;if(d(ft)){console.error(`\u522B\u95F9\uFF0C[${[K,...ft].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}me({path:ft,exact:ft!=="/404"});return}ze==null||ze(),(K==null?void 0:K.split("?")[0])!==((Gt=I.current)==null?void 0:Gt.split("?")[0])&&zt(),Yt(Lt,fr);const Xt={eventBus:lr,store:It,useStore:sr,...wt,updateRouter:de,router:{push:me,replace:ge},current:Lt,menu:Tr,inputPath:M.current,prevPath:I.current,basepath:Ot,title:fr,history:mt};yt.setState({...Xt,browserRouter:Pe});const Jt=zr(Xt);if(I.current=K,M.current=null,xe(),X(Jt)){const{promiseFn:Kt,cancelFn:jr}=F(Jt,{delay:pt.delay,msg:{timeout:pt.timeoutMsg}});return H.current=jr,Z(!0),Kt.then(Qt=>{H.current=null;const{result:er,errMsg:rt}=Qt,Or=rt===!1?er:rt!=null&&rt.timeout?ye({error:{errMsg:`${K} ${rt.timeout}`}}):null;Or&&(Z(!1),Je(vt,Lt.slice(-1)[0],Le),m(Or))}).catch(Qt=>{throw H.current=null,Z(!1),Je(vt,Lt.slice(-1)[0],Le),m(ye({error:Qt})),Qt})}Je(vt,Lt.slice(-1)[0],Le),m(Jt)}).catch(Ve=>{throw m(ye({error:Ve})),Ve})},[]);return(0,x.useEffect)(()=>{const{childKey:K="children",idKey:pe="path",browserRouter:ze=!1,routers:Le=[],basepath:Pe="",exact:Ne=!1,inputPath:Ze="",inputParams:fr={},...tt}=h,bt=B(Pe),vt=nr(R(Le),ze,K,pe,bt,Ne);le.current={...tt,childKey:K,idKey:pe,browserRouter:ze,routers:vt,basepath:bt};const Ot=ze?"popstate":"hashchange",Ye=()=>ae({});return ae({inputPath:Ze,inputParams:fr}),ar.on(me),Ue.on(ge),window.addEventListener(Ot,Ye,!1),()=>{xe(),ar.off(me),Ue.off(ge),window.removeEventListener(Ot,Ye,!1)}},[h]),{updateRouter:de,output:y,loading:L}},Rt=s=>{const{to:h,onClick:w,preventDefault:y,stopPropagation:m=!0,exact:L=!0,target:Z,...H}=s,M=()=>{const I=typeof h=="string"?{exact:L,path:h}:{exact:L,...h};ar.emit(I)};return I=>{var le;if(I.preventDefault(),m&&I.stopPropagation(),!(H!=null&&H.disabled)){if(!y){if(Z){const{browserRouter:xe}=yt.getState(),de=typeof h=="string"?h:(le=h==null?void 0:h.path)!=null?le:"",J=Xe(h==null?void 0:h.query),me=xe||de.indexOf("#/")>-1||Be(de);window==null||window.open(`${me?"":"#"}${de}${J}`,Z);return}M()}typeof w=="function"&&w()}}},kr=s=>{const{to:h,onClick:w,preventDefault:y,stopPropagation:m,exact:L,target:Z,...H}=s;return(0,W.jsx)("a",{onClick:Rt(s),...H})};const Cr=()=>yt.getState()}(),re}()})},2445:function(or,ht,nt){(function(Et,$e){or.exports=$e(nt(7378))})(this,function(Et){return function(){"use strict";var $e={53:function(x,a,b){var d,j=b(899),C=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,$=j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function G(X,F,B){var W,ne={},ye=null,we=null;B!==void 0&&(ye=""+B),F.key!==void 0&&(ye=""+F.key),F.ref!==void 0&&(we=F.ref);for(W in F)p.call(F,W)&&!R.hasOwnProperty(W)&&(ne[W]=F[W]);if(X&&X.defaultProps)for(W in F=X.defaultProps,F)ne[W]===void 0&&(ne[W]=F[W]);return{$$typeof:C,type:X,key:ye,ref:we,props:ne,_owner:$.current}}d=S,a.jsx=G,d=G},458:function(x,a,b){x.exports=b(53)},899:function(x){x.exports=Et}},be={};function Q(x){var a=be[x];if(a!==void 0)return a.exports;var b=be[x]={exports:{}};return $e[x](b,b.exports,Q),b.exports}(function(){Q.d=function(x,a){for(var b in a)Q.o(a,b)&&!Q.o(x,b)&&Object.defineProperty(x,b,{enumerable:!0,get:a[b]})}})(),function(){Q.o=function(x,a){return Object.prototype.hasOwnProperty.call(x,a)}}(),function(){Q.r=function(x){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(x,"__esModule",{value:!0})}}();var re={};return function(){Q.r(re),Q.d(re,{createContainer:function(){return a},useAsync:function(){return $},useCancelablePromise:function(){return p},useClickAway:function(){return X},useDebounce:function(){return B},useDelayState:function(){return ye},useEleResize:function(){return _e},useEvent:function(){return St},useFirstMounted:function(){return W},useInterval:function(){return lt},usePrevious:function(){return $t},useRaf:function(){return De},useScroll:function(){return mr},useSearch:function(){return zt},useStateFromProps:function(){return Yt},useStore:function(){return Ht},useTime:function(){return lr},useUpdate:function(){return sr},useUpdateEffect:function(){return ne},useWinResize:function(){return Qe}});var x=Q(899),a=u=>(g,k)=>{const[O,D]=(0,x.useState)(()=>{const ee=u==null?void 0:u.getState(g);return ee!==void 0?ee:(k!==void 0&&(u==null||u.setState({[g]:k},!0)),k)}),q=(0,x.useCallback)(ee=>u==null?void 0:u.setState({[g]:typeof ee=="function"?ee(u==null?void 0:u.getState(g)):ee}),[]),ue=(0,x.useCallback)(ee=>u==null?void 0:u.subscribe(g,ee),[]),ie=(0,x.useCallback)((ee=ee)=>u==null?void 0:u.clean(ee),[]);return(0,x.useEffect)(()=>{u==null||u.subscribe(g,ee=>D(ee))},[]),[O,q,ue,ie]},b=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),d=u=>b(u)==="object",j=u=>b(u)==="function",C=u=>b(u)==="promise"||d(u)&&j(u.then),S=(u,g=12e4,k="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!C(u))return{};let O=null,D=null;return{promiseFn:new Promise((q,ue)=>{O=(ie="canceled")=>{clearTimeout(D),q({canceled:!0,errMsg:ie})},g&&(g=typeof g!="number"?12e4:g,D=setTimeout(()=>O(k),g)),u.then(ie=>{clearTimeout(D),q({result:ie,errMsg:!1})}).catch(ie=>{clearTimeout(D),ue(ie)})}),cancelFn:O}},p=()=>{const u=(0,x.useRef)([]);return(0,x.useEffect)(()=>()=>{u.current.map(g=>g.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,x.useCallback)((g,k=!0)=>{const O=S(g,k);return u.current.indexOf(O)===-1&&u.current.push(O),O.promiseFn},[])}},$=(u={})=>{const{cancelablePromise:g}=p(),[k,O]=(0,x.useState)(u),D=(0,x.useRef)({}),q=(0,x.useRef)({}),ue=(0,x.useCallback)((ee=null)=>{Array.isArray(ee)&&ee.length?ee.map(ke=>D.current[ke]=u[ke]):D.current=u},[]),ie=(0,x.useCallback)((ee,ke,qe=!1)=>{const gt=Object.keys(ee),et=JSON.stringify(gt.sort());if(!q.current[et]){q.current[et]=!0,qe&&ue(Array.isArray(qe)?qe:gt),gt.map(Fe=>{D.current[Fe]||(D.current[Fe]={}),D.current[Fe].pending=!0}),O({...D.current});for(let Fe=0,At=gt.length;Fe<At;Fe++){const Tt=gt[Fe];g(ee[Tt]).then(ct=>{let{result:dt,errMsg:He}=ct;Fe===At-1&&(q.current[et]=!1),typeof ke=="function"&&(dt=ke(dt)||dt),D.current[Tt]={...dt,pending:!1},He===!1&&O({...D.current})}).catch(ct=>{throw Fe===At-1&&(q.current[et]=!1),D.current[Tt]={error:ct,pending:!1},O({...D.current}),ct})}}},[]);return[k,ie,ue]},R=(u,g)=>Object.prototype.hasOwnProperty.call(u!=null?u:{},g),G=u=>R(u,"current"),X=(u,g,k="click")=>{(0,x.useEffect)(()=>{const O=q=>{const ue=G(u)?u.current:u;(ue==null?void 0:ue.contains)&&!ue.contains(q.target)&&g(q)},D=typeof k=="string"?[k]:k;return D.map(q=>{document.addEventListener(q,O,!1)}),()=>{D.map(q=>{document.removeEventListener(q,O,!1)})}},[u,g,k])},F=(u=()=>{},g=60)=>{let k=null;return function(...O){clearTimeout(k),k=setTimeout(()=>u.apply(this,O),g)}},B=(u,g=60)=>(0,x.useMemo)(()=>F(u,g),[g]),W=()=>{const u=(0,x.useRef)(!0);return u.current?(u.current=!1,!0):!1},ne=(u,g=[])=>{const k=W();(0,x.useEffect)(()=>{if(!k)return u()},g)},ye=(u,g=450)=>{const[k,O]=(0,x.useState)(u);return ne(()=>{let D;return u||g===0?O(u):D=setTimeout(()=>O(u),g),()=>D&&clearTimeout(D)},[u]),[k,O]},we=()=>![typeof window,typeof document].includes("undefined"),it=u=>b(u).indexOf("element")>-1,at=(u=null)=>{var g,k;return we()?it(u)?{width:u.clientWidth,height:u.clientHeight}:{width:(g=window.innerWidth)!=null?g:document.documentElement.clientWidth,height:(k=window.innerHeight)!=null?k:document.documentElement.clientHeight}:{width:0,height:0}};const _=(u,g)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const k=document.createElement("object");return k.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),k.setAttribute("class","resize-sensor"),k.onload=()=>{k.contentDocument.defaultView.addEventListener("resize",g,!1),g()},k.type="text/html",u.appendChild(k),k.data="about:blank",k};var Ae=(u,g=60)=>{if(!we())return;u=G(u)?u.current:u!=null?u:document.body;let k,O=[];const D=F(()=>O.map(ee=>ee(u)),g),q=ee=>{k||(k=_(u,D)),O.indexOf(ee)===-1&&O.push(ee)},ue=ee=>{const ke=O.indexOf(ee);ke!==-1&&O.splice(ke,1),O.length===0&&k&&ie()},ie=()=>{k&&k.parentNode&&(k.contentDocument&&k.contentDocument.defaultView.removeEventListener("resize",D,!1),k.parentNode.removeChild(k),k=void 0,O=[])};return{element:u,bind:q,unbind:ue,destroy:ie}},De=(u={})=>{const g=(0,x.useRef)(0),[k,O]=(0,x.useState)(u),D=(0,x.useCallback)(q=>{cancelAnimationFrame(g.current),g.current=requestAnimationFrame(()=>O(q))},[]);return(0,x.useEffect)(()=>()=>cancelAnimationFrame(g.current),[]),[k,D]},_e=(u=null,g=60)=>{const k=G(u)?u.current:u,{bind:O,destroy:D}=Ae(k,g),[q,ue]=De(at(k));return(0,x.useEffect)(()=>(O(()=>k&&ue(at(k))),()=>D()),[k]),q},St=u=>{const g=(0,x.useRef)(null);return(0,x.useLayoutEffect)(()=>{g.current=u}),(0,x.useCallback)(g.current,[])},lt=(u,g)=>{const k=(0,x.useRef)();(0,x.useEffect)(()=>{k.current=u},[u]),(0,x.useEffect)(()=>{if(g){const O=setInterval(()=>k.current(),g);return()=>clearInterval(O)}},[g])},$t=u=>{const g=(0,x.useRef)();return(0,x.useEffect)(()=>{g.current=u},[u]),g.current},Nt=(u=null)=>{var g,k,O,D;return we()?it(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:(k=(g=window.pageXOffset)!=null?g:document.documentElement.scrollLeft)!=null?k:document.body.scrollLeft,top:(D=(O=window.pageYOffset)!=null?O:document.documentElement.scrollTop)!=null?D:document.body.scrollTop}:{left:0,top:0}},mr=(u=null)=>{const[g,k]=De(Nt(u));return(0,x.useEffect)(()=>{const O=()=>k(Nt(u)),D=it(u)?u:window;return D.addEventListener("scroll",O,{capture:!1,passive:!0}),()=>D.removeEventListener("scroll",O)},[u]),g},Re=u=>b(u)==="array",Dt=u=>Re(u)&&!!u.length,xr=(u,g,k=[],O=!1,D=null)=>Dt(u)?g?(k=typeof k=="string"?k.split(","):k,u.filter(q=>(k=k.length>0?k:Object.keys(q),k.filter(ue=>{const ie=q[ue];if(ie==null)return!1;if(O)return ie===g;const ee=new RegExp(g,"gi"),ke=ie.toString().match(ee);return ke&&D&&(q[ue]=D(ie.toString().replace(ee,`<span style="background-color:yellow">${ke[0]}</span>`),{display:"inline-block"})),ke}).length))):u:[],Zt=(u,g="id")=>{if(!Dt(u))return u;const k=[],O=[];return u.map(D=>{const q=d(D)?D[g]:D;O.includes(q)||(O.push(q),k.push(D))}),k},pt=u=>(u==null?void 0:u.$$typeof)&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",mt=u=>u==null?void 0:u.__v_isVNode;const Be=u=>{if(!Re(u)&&!d(u))return u;const g=Re(u)?[]:{};for(const k in u)if(R(u,k)){const O=u[k];g[k]=pt(O)||mt(O)||typeof O!="object"?O:O!==u?Be(O):"cyclic"}else Object.setPrototypeOf(g,{[k]:u[k]});return g};var st=Be;const Me=u=>(g,k="children")=>{if(!Array.isArray(g))return g;const O=st(g),D=q=>{const ue=[];return q.map(ie=>{if(Dt(ie[k])){const ee=D(ie[k])||[];ie[k]=ee,ee.length>0&&ue.push(ie)}}),u(q,ue)};return D(O)};var nr=(u,g,k,O="name",D="id",q="children",ue=!1)=>Me((ie,ee)=>Zt([...xr(ie,g,O,ue,k),...ee],D))(u,q),Xe=Q(458),xt=(u,g)=>(0,Xe.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...g}),zt=(u=null,g=xt)=>{const[k,O]=(0,x.useState)(u),D=(0,x.useCallback)((...q)=>{const[ue,ie,...ee]=q;if(!ie)O(null);else{q=[ue,ie,g,...ee];const ke=nr(...q);O(ke)}},[]);return[k,D]},Yt=u=>{const[g,k]=(0,x.useState)(u);return(0,x.useEffect)(()=>k(u),[u]),[g,k]},Pt=()=>{const u={};return{on:(g,k)=>{u[g]||(u[g]=[]),u[g].indexOf(k)===-1&&u[g].push(k)},emit:(g,k)=>{u[g]&&u[g].map(O=>O(k))},off:(g,k=null)=>{if(u[g]){if(typeof k!="function")return u[g]=[];const O=u[g].indexOf(k);O>-1&&u[g].splice(O,1)}}}};const Je=u=>{const g={};for(let k in u)R(u,k)||(g[k]=u[k]);return g};var _t=(u,g)=>{if(!d(u))return g;if(!d(g))return u;const k={...Je(u),...Je(g)},O={...u,...g};return Object.keys(k).map(D=>{Object.setPrototypeOf(O,{[D]:k[D]})}),O},We=()=>{const{on:u,emit:g,off:k}=Pt(),O={};return{getState:D=>st(O[D]),setState:(D,q=!1)=>{if(typeof D=="function"&&(D=D(st(O))),!d(D))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const ue=st(D);Object.keys(ue).map(ie=>{const ee=O[ie],ke=ue[ie],qe=d(ke)&&d(ee)?_t(ee,ke):ke;!q&&g(ie,qe),O[ie]=qe})},subscribe:(D,q)=>(u(D,q),()=>k(D,q)),unsubscribe:k,clean:D=>{typeof D=="string"?O[D]=void 0:Array.isArray(D)?D.map(q=>O[q]=void 0):Object.keys(O).map(q=>O[q]=void 0)}}};const ir=We();var Ht=a(ir);const Ke=u=>u<10?"0"+u:u;var Ft=(u=new Date)=>{const g=new Date(u),k=g.getFullYear(),O=g.getDay(),D=Ke(g.getMonth()+1),q=Ke(g.getDate()),ue=Ke(g.getHours()),ie=Ke(g.getMinutes()),ee=Ke(g.getSeconds());return[k,D,q,ue,ie,ee,O]};const ut=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],ar=(u,g,k="-")=>u.replace(new RegExp(k,"g"),g);var Ue=(u=new Date,g=["-","-"," ",":",":",""],k=ut)=>{const O=Ft(u);let D="";return g.map((q,ue)=>{var ie;return D+=(ue===6?k[O[ue]]:(ie=O[ue])!=null?ie:"")+q}),D};const yt=()=>Ue(new Date,["-","-"," ",":",":"," ",""]);var lr=()=>{const[u,g]=(0,x.useState)("");return lt(()=>{g(yt())},1e3),[u]};const It=u=>++u;var sr=()=>{const[,u]=(0,x.useState)(0);return(0,x.useCallback)(()=>u(It),[])},Qe=()=>{const[u,g]=De(at());return(0,x.useEffect)(()=>{const k=()=>g(at());return window.addEventListener("resize",k,!1),()=>window.removeEventListener("resize",k,!1)},[]),u}}(),re}()})},5820:function(or){(function(ht,nt){or.exports=nt()})(this,function(){return function(){"use strict";var ht={};(function(){ht.d=function(e,t){for(var r in t)ht.o(t,r)&&!ht.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){ht.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){ht.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();var nt={};ht.r(nt),ht.d(nt,{a2o:function(){return Et},addAtNext:function(){return re},addAtPos:function(){return x},addClass:function(){return b},addDays:function(){return d},addHours:function(){return j},addMonths:function(){return C},addNodes:function(){return S},addScript:function(){return $},addStyle:function(){return R},addYears:function(){return G},arr2Tree:function(){return we},arr2TreeById:function(){return it},arr2TreeByPath:function(){return at},arr2obj:function(){return X},arr2str:function(){return ye},backTop:function(){return mr},base2Ten:function(){return Re},baseConversion:function(){return xr},baseFetch:function(){return Xe},cacheData:function(){return ir},cancelablePromise:function(){return st},changePos:function(){return Ht},classifyArr:function(){return Ke},clone:function(){return We},compareVersion:function(){return Ft},compose:function(){return ut},copyToClipboard:function(){return ar},createContainer:function(){return Ue},createElement:function(){return lr},createNode:function(){return O},createStore:function(){return ie},createTextElement:function(){return yt},curry:function(){return ee},cyclic:function(){return xt},dash2camel:function(){return ke},debounce:function(){return qe},deleteNodes:function(){return gt},deviceType:function(){return et},dlfile:function(){return Tt},dropInfo:function(){return wr},editNodes:function(){return ur},emitter:function(){return D},equal:function(){return Yt},escapeHTML:function(){return cr},eventBus:function(){return qt},fetcher:function(){return Fr},filter:function(){return kr},filterList:function(){return h},findMax:function(){return w},firstUpper:function(){return y},fixFileSizeUnit:function(){return m},fixPath:function(){return L},fixRoute:function(){return Z},fixSize:function(){return H},fixTimeUnit:function(){return M},flatten:function(){return le},formatNum:function(){return xe},formatPassTime:function(){return me},formatTime:function(){return K},fullScreen:function(){return Ze},getElementsSize:function(){return yr},getExplore:function(){return tt},getLeaveTime:function(){return Ye},getMeta:function(){return kt},getMonthDays:function(){return Gt},getOffset:function(){return hr},getOsInfo:function(){return Lt},getParams:function(){return Tr},getPosition:function(){return dt},getRelative:function(){return Kt},getSelected:function(){return jr},getTextSize:function(){return Qt},getTime:function(){return J},getTouchPosition:function(){return Jt},getType:function(){return $e},getValue:function(){return Or},getViewportSize:function(){return ct},hasClass:function(){return Mr},hasProp:function(){return Ae},hex2rgba:function(){return Wr},imgtocanvas:function(){return Zr},isArray:function(){return be},isAsync:function(){return Be},isBrowser:function(){return p},isDate:function(){return Yr},isElement:function(){return a},isError:function(){return _r},isFunction:function(){return mt},isIE:function(){return Hr},isObject:function(){return F},isReactComp:function(){return Vr},isReactEle:function(){return Pt},isRef:function(){return De},isRegExp:function(){return Ur},isTouch:function(){return Xt},isUrl:function(){return qr},isValidArr:function(){return Rt},isValidObj:function(){return Gr},isVueEle:function(){return Je},json2str:function(){return Er},loadBase64:function(){return tr},loadImage:function(){return Kr},loop:function(){return Qr},matchedStr:function(){return Xr},memoize:function(){return Jr},merge:function(){return E},mergeArr:function(){return i},mergeClass:function(){return T},mergeObj:function(){return f},mergeOwnProp:function(){return ue},message:function(){return ce},monthDate:function(){return se},moveNodes:function(){return Ee},obj2arr:function(){return Se},obj2str:function(){return W},omit:function(){return fe},once:function(){return Ie},padStart:function(){return Ce},params2data:function(){return pt},params2str:function(){return Zt},pick:function(){return je},promisify:function(){return Ge},randColor:function(){return Bt},randItem:function(){return Nr},randNum:function(){return rr},randPercent:function(){return Mt},randStr:function(){return Dr},randTrue:function(){return Pr},removeClass:function(){return N},resize:function(){return jt},rgba2hex:function(){return Ir},rmUnit:function(){return oo},scheduler:function(){return ao},scrollIsBottom:function(){return lo},scrollTo:function(){return _e},scrollToAnchor:function(){return so},scrollTop:function(){return _},selectedHandle:function(){return Q},session:function(){return uo},setMeta:function(){return co},setStyle:function(){return Oe},sleep:function(){return Vt},sleepSync:function(){return Sr},sort:function(){return fo},sortObj:function(){return ho},storage:function(){return po},store:function(){return xo},str2Html:function(){return He},str2code:function(){return yo},sysLang:function(){return go},template:function(){return bo},ten2Base:function(){return Dt},throttle:function(){return vo},timeGap:function(){return jo},timeInterval:function(){return to},timestamp:function(){return Fe},toggleClass:function(){return Eo},traverItem:function(){return I},traverList:function(){return So},unescapeHTML:function(){return $o},unique:function(){return Cr},updateId:function(){return zo},updateNode:function(){return k},updateTreeNodes:function(){return Fo},uuidv4:function(){return At},validObj:function(){return To},watchScreen:function(){return Oo},watermark:function(){return No},weekDate:function(){return Do},wrapPromise:function(){return Po}});var Et=(e,t="key",r="value")=>{const o={};return(e||[]).map(n=>o[n[t]]=n[r]),o},$e=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),be=e=>$e(e)==="array",Q=e=>(t,r,o="id",n="children")=>{if(!be(t))return null;const c=(v,z="")=>{for(let P=0,V=v.length;P<V;P++){const he=v[P];if(he[o]===r)return e(v,P,z)||v[P];if(be(he[n])){const ve=c(he[n],he[o]);if(ve)return ve}}};return c(t),t},re=(e,t,r,o="id",n="children")=>Q((c,v)=>c.splice(v,0,r))(e,t,o,n),x=(e,t,r,o,n="id",c="children")=>Q((v,z)=>{const P=v[z];P.children?P.children.splice(o,0,r):P.children=[r]})(e,t,n,c),a=e=>$e(e).indexOf("element")>-1,b=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),n=[...new Set([...r,...o])];e.className=n.join(" ")},d=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},j=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},C=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},S=(e,t,r,o="id",n="children")=>Q((c,v)=>{const z=c[v];return z[n]=[...z[n]||[],...r],z})(e,t,o,n),p=()=>![typeof window,typeof document].includes("undefined"),$=e=>{if(p())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},R=(e,t)=>{if(p())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===t))r();else{const n=document.createElement("style");n.onerror=c=>o(new Error(`Failed to load '${t}' style`)),n.onload=r,n.innerHTML=e,n.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===e))r();else{const n=document.createElement("link");n.onerror=c=>o(new Error(`Failed to load '${e}'`)),n.onload=r,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},G=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},X=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:n})=>r[o]=n),r},F=e=>$e(e)==="object";const B=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,F(o)?t+=`${r}=${B(o)}`:Array.isArray(o)?t+=`${r}=${ye(o)}`:t+=`${r}=${o}`}),`{${t}}`};var W=B;const ne=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,F(r)?t+=W(r):Array.isArray(r)?t+=ne(r):t+=`${r}`}),`[${t}]`};var ye=ne,we=e=>(t,r="id",o="children",n=-1)=>{if(!be(t))return t;const c={},v=t.map(z=>z[r]);return[...t].map(z=>{var P;const V={...z},{[r]:he}=V;if(he!=null){let{parentId:ve}=V;ve==null&&(ve=(P=e==null?void 0:e(V))!=null?P:n,V.parentId=ve),c[he]||(c[he]=[]),V[o]=c[he],c[ve]||(c[ve]=[]),c[n]||(c[n]=[]),v.includes(ve)?c[ve].push(V):c[n].push(V)}}),c[n]},it=(e,t="id",r="children",o=-1)=>we(n=>{const c=n[t].match(/\S+(?=-\S+)/);return(c==null?void 0:c[0])||o})(e,t,r,o),at=(e,t="path",r="children",o=null)=>we(n=>{var c,v,z,P;const V=n[t],he=V.match(/.*\/[^:/]+\/:[^/]+/);return he?(v=(c=he[0].match(/(.*)\/:+/))==null?void 0:c[1])!=null?v:o:(P=(z=V.match(/(.*)\/+/))==null?void 0:z[1])!=null?P:o})(e,t,r,o),_=()=>{var e,t;return p()&&((t=(e=window.pageYOffset)!=null?e:document.documentElement.scrollTop)!=null?t:document.body.scrollTop)},Ae=(e,t)=>Object.prototype.hasOwnProperty.call(e!=null?e:{},t),De=e=>Ae(e,"current"),_e=(e=0,t)=>{var r;!p()||(t=De(t)?t.current:t!=null?t:window,(r=t.scrollTo)==null||r.call(t,{top:e,behavior:"smooth"}))},St=`.huxy-totop-bar {
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
}`;const lt=()=>document.getElementsByClassName("huxy-totop-bar")[0],$t=e=>{if(lt())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>_e(),!1),t},Nt=()=>{const e=lt();e&&document.body.removeChild(e)};var mr=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!p())return;R(St,"huxy-backtop-css");const r=()=>{_()>e?$t(t):Nt()};return(()=>(document.addEventListener("scroll",r,!1),()=>{Nt(),document.removeEventListener("scroll",r,!1)}))()},Re=(e=0,t=2)=>parseInt(String(e),t),Dt=(e=0,t=2)=>Number(e).toString(t),xr=(e=0,t=2,r=16)=>Dt(Re(e,t),r),Zt=e=>{if(!F(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const n=o>0?"&":"?";t.push(`${n}${r}=${e[r]}`)}),t.join("")},pt=e=>{if(!F(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},mt=e=>$e(e)==="function",Be=e=>$e(e)==="promise"||F(e)&&mt(e.then),st=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!Be(e))return{};let o=null,n=null;return{promiseFn:new Promise((c,v)=>{o=(z="canceled")=>{clearTimeout(n),c({canceled:!0,errMsg:z})},t&&(t=typeof t!="number"?12e4:t,n=setTimeout(()=>o(r),t)),e.then(z=>{clearTimeout(n),c({result:z,errMsg:!1})}).catch(z=>{clearTimeout(n),v(z)})}),cancelFn:o}};const Me=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>pt(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>Zt(e).slice(1)}],nr=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(n=>e[n]);if(o.length===1){const n=o[0],c=r?t:n;return c==="params"?{query:e[n]}:{result:e[n],type:c}}else if(o.length>1){const n=o.filter(v=>v!=="params").slice(-1)[0],c=r?t:n;return c==="params"?{query:e.params||e[n]}:{query:e.params,result:e[n],type:c}}};var Xe=(e,t)=>r=>(o,n={})=>{const{headers:c,dataType:v,data:z,formData:P,form:V,params:he,...ve}=n,Te={data:z,formData:P,form:V,params:he};let pr;const{query:Wt,result:ro,type:Io}=nr(Te,v)||{};if(!ve.body&&ro){const Rr=Me.find(Lr=>Lr.type===Io);pr=Rr.headers,ve.body=Rr.body(ro)}Wt&&(o=`${o}${Zt(Wt)}`);const{promiseFn:Ao}=st(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...pr,...c},...ve}),t);return Ao.then(({result:Rr,errMsg:Lr})=>e(Lr?{status:408,statusText:Lr}:Rr))},xt=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let n=!1;for(let c in o)Ae(o,c)&&r(o[c])&&(o[c]="cyclic",n=!0);return n}return!1};return r(e)&&e};const zt=(e,t)=>{const r=$e(e),o=$e(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(xt(e)&&xt(t))return zt(e,t);for(let n in t)if(Ae(e,n)!==Ae(t,n)||!zt(e[n],t[n]))return!1;return!0};var Yt=zt,Pt=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",Je=e=>e==null?void 0:e.__v_isVNode;const _t=e=>{if(!be(e)&&!F(e))return e;const t=be(e)?[]:{};for(const r in e)if(Ae(e,r)){const o=e[r];t[r]=Pt(o)||Je(o)||typeof o!="object"?o:o!==e?_t(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var We=_t,ir=(e=100)=>{const t=[];let r=-1;const o=c=>{var v,z;const P=t.length,V=We(c);return Yt(V,(v=t[P-1])==null?void 0:v.data)?{index:r,length:P,data:(z=t[r])==null?void 0:z.data}:(t.push({data:V}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},n=(c=0)=>{var v;const z=t.length;return r+=c,r=r<0?0:r>z-1?z-1:r,{index:r,length:z,data:We((v=t[r])==null?void 0:v.data)}};return{record:o,cursor:n,jump:c=>{var v;return r=c,{index:r,length:t.length,data:We((v=t[r])==null?void 0:v.data)}},undo:()=>n(-1),redo:()=>n(1),getList:()=>We(t),clean:()=>{t.length=0,r=-1}}},Ht=(e,t,r)=>{if(!be(e))return e;const o=e[t],n=e[r];return e.splice(t,1,n),e.splice(r,1,o),e},Ke=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},Ft=(e,t,r=".")=>{const o=(P,V)=>P.split(V),n=o(e,r),c=o(t,r),v=n.length;let z=0;for(let P=0;P<v;P++)if(n[P]<c[P]){z=v-P;break}return z},ut=(...e)=>(...t)=>{const[...r]=e,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...t)},ar=e=>{if(!p())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},Ue=e=>(t,r)=>{const{getState:o,setState:n,subscribe:c,unsubscribe:v,clean:z}=e;return r!==void 0&&n({[t]:r},!0),{getState:()=>o(t),setState:(P,V)=>n({[t]:P},V),subscribe:P=>c(t,P),unsubscribe:()=>v(t),clean:()=>z(t)}},yt=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),lr=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:yt(o))}});const It=e=>e.startsWith("on"),sr=e=>e!=="children"&&!It(e),Qe=(e,t)=>r=>e[r]!==t[r],u=(e,t)=>r=>!(r in t),g=e=>{const t=Object.keys(e);return{eventProps:t.filter(It),propertyProps:t.filter(sr)}};var k=(e,t,r)=>{const{eventProps:o,propertyProps:n}=g(t),{eventProps:c,propertyProps:v}=g(r);o.filter(u(t,r)).map(z=>{const P=z.toLowerCase().slice(2);e.removeEventListener(P,t[z])}),n.filter(u(t,r)).map(z=>e[z]=""),v.filter(Qe(t,r)).map(z=>e[z]=r[z]),c.filter(Qe(t,r)).map(z=>{const P=z.toLowerCase().slice(2);e.addEventListener(P,r[z])})},O=e=>{if(!p())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return k(t,{},e.props),t},D=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return e[t]=[];const o=e[t].indexOf(r);o>-1&&e[t].splice(o,1)}}}};const q=e=>{const t={};for(let r in e)Ae(e,r)||(t[r]=e[r]);return t};var ue=(e,t)=>{if(!F(e))return t;if(!F(t))return e;const r={...q(e),...q(t)},o={...e,...t};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},ie=()=>{const{on:e,emit:t,off:r}=D(),o={};return{getState:n=>We(o[n]),setState:(n,c=!1)=>{if(typeof n=="function"&&(n=n(We(o))),!F(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const v=We(n);Object.keys(v).map(z=>{const P=o[z],V=v[z],he=F(V)&&F(P)?ue(P,V):V;!c&&t(z,he),o[z]=he})},subscribe:(n,c)=>(e(n,c),()=>r(n,c)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(c=>o[c]=void 0):Object.keys(o).map(c=>o[c]=void 0)}}},ee=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...n)=>r(...o,...n);return r},ke=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),qe=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},gt=(e,t,r="id",o="children")=>Q((n,c)=>n.splice(c,1))(e,t,r,o),et=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Fe=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),At=()=>{let e=Fe();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},Tt=(e,t)=>{if(p())if(t=t||At(),typeof e=="string")fetch(e).then(r=>r.blob()).then(r=>{const o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)});else{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)}},ct=(e=null)=>{var t,r;return p()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(r=window.innerHeight)!=null?r:document.documentElement.clientHeight}:{width:0,height:0}},dt=e=>{var t;if(p())return e=De(e)?e.current:e!=null?e:document.body,(t=e.getBoundingClientRect)==null?void 0:t.call(e)},He=e=>{if(!p())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},Oe=(e,t={},r=!1)=>{!a(e)||Object.keys(t).map(o=>{e.style.setProperty(o,r?"":t[o])})};const Br=(e=350)=>new Promise(t=>setTimeout(t,e)),Sr=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var Vt=Br,yr=async(e,t=15)=>{if(!p())return;if(typeof e=="string"&&(e=He(e)),e=De(e)?e.current:e,!a(e))return{};const r=e.cloneNode(!0);Oe(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await Vt(t);const o=dt(r);return e.parentNode.removeChild(r),o};const gr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,Ut=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,br=(e,t)=>{var r;t=`huxy-drop-arrow-${t}`;const o=(r=e.getAttribute("class"))!=null?r:"";gr.test(o)?e.setAttribute("class",o.replace(Ut,t)):e.setAttribute("class",`${o} ${t}`)},vr=async(e,t,r)=>{const{left:o,right:n,top:c,bottom:v}=dt(e),{width:z,height:P}=ct(),{width:V,height:he}=await yr(t);if(n<0||v<0||o>z||c>P)return{};if(r==="vertical"){const ve={left:o+"px",top:v+10+"px",right:"auto",bottom:"auto"};let Te="lt";o+V>z&&(ve.left=n-V+"px",Te="rt"),v+10+he>P&&(ve.top=c-10-he+"px",Te=Te==="lt"?"lb":"rb"),Oe(t,ve),br(t,Te)}else{const ve={left:n+10+"px",top:c+"px",right:"auto",bottom:"auto"};let Te="tl";n+10+V>z&&(ve.left=o-10-V+"px",Te="tr"),c+he>P&&(ve.top=v-he+"px",Te=Te==="tl"?"bl":"br"),Oe(t,ve),br(t,Te)}};var wr=(e,t,r="horizontal")=>{const o=qe(vr),n=()=>o(e,t,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const c=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),Oe(t,{left:"",top:"",right:"",bottom:""})};return vr(e,t,r),c},ur=(e,t,r,o="id",n="children")=>Q((c,v)=>c[v]={...c[v],...r})(e,t,o,n),cr=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const $r=D();var qt=e=>{const{on:t,emit:r,off:o}=$r;return{on:n=>t(e,n),emit:n=>r(e,n),off:n=>o(e,n)}};const dr=120*1e3,zr=e=>e.json().then(t=>t);var Fr=(e=zr,t=dr)=>(r="get")=>Xe(e)((r||"get").toUpperCase()),Rt=e=>be(e)&&!!e.length,kr=(e,t,r=[],o=!1,n=null)=>Rt(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(c=>(r=r.length>0?r:Object.keys(c),r.filter(v=>{const z=c[v];if(z==null)return!1;if(o)return z===t;const P=new RegExp(t,"gi"),V=z.toString().match(P);return V&&n&&(c[v]=n(z.toString().replace(P,`<span style="background-color:yellow">${V[0]}</span>`),{display:"inline-block"})),V}).length))):e:[],Cr=(e,t="id")=>{if(!Rt(e))return e;const r=[],o=[];return e.map(n=>{const c=F(n)?n[t]:n;o.includes(c)||(o.push(c),r.push(n))}),r};const s=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=We(t),n=c=>{const v=[];return c.map(z=>{if(Rt(z[r])){const P=n(z[r])||[];z[r]=P,P.length>0&&v.push(z)}}),e(c,v)};return n(o)};var h=(e,t,r,o="name",n="id",c="children",v=!1)=>s((z,P)=>Cr([...kr(z,t,o,v,r),...P],n))(e,c),w=(e="")=>{var t;return(t=e.match(/\d+/g))==null?void 0:t.sort((r,o)=>o-r)[0]},y=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),m=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},L=(e="")=>e.replaceAll("//","/"),Z=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",H=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},M=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),n=e%3600,c=~~(n/60);return o<24?`${o}${t[2]}${c}${t[1]}${n%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},I=e=>(t,r="children")=>{if(!be(t))return t;const o=(n,c=[])=>{n.map((v,z)=>{const P=be(v[r]);if(v=e(v,c,z,P)||v,P){const{[r]:V,...he}=v;o(V,[...c,{...he,"@@index":z}])}})};return o(t),t},le=(e,t="children")=>{const r=[];return I(o=>{const{[t]:n,...c}=o;r.push(c)})(e,t),r},xe=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const de=e=>e<10?"0"+e:e;var J=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),n=de(t.getMonth()+1),c=de(t.getDate()),v=de(t.getHours()),z=de(t.getMinutes()),P=de(t.getSeconds());return[r,n,c,v,z,P,o]},me=(e,t=new Date)=>{e=J(e),t=J(t);const r=t.y-e.y,o=t.m-e.m,n=t.d-e.d,c=t.h-e.h,v=t.M-e.M,z=new Date(t.y,t.m,0).getDate(),P=(V,he,ve,Te,pr)=>{const Wt="\u524D";return he<0&&(V-=1,he+=ve),V===0?he+pr+Wt:he===0?V+Te+Wt:V+Te+he+pr+Wt};return r>0?P(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?P(o,n,z,"\u4E2A\u6708","\u5929"):n>0?P(n,c,24,"\u5929","\u5C0F\u65F6"):c>0?P(c,v,60,"\u5C0F\u65F6","\u5206\u949F"):v>0?v+"\u5206\u949F\u524D":"\u521A\u521A"};const ge=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],ae=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var K=(e=new Date,t=["-","-"," ",":",":",""],r=ge)=>{const o=J(e);let n="";return t.map((c,v)=>{var z;return n+=(v===6?r[o[v]]:(z=o[v])!=null?z:"")+c}),n};const pe=["","webkit","moz","ms"],ze=e=>pe.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),Le=e=>pe.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),Pe=e=>pe.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),Ne=pe.map(e=>`${e}fullscreenchange`);var Ze=e=>{var t,r;if(!p())return;e=De(e)?e.current:e!=null?e:document.body;const o=ze(document),n=Le(e),c=Pe(document);document[o]?(r=document[c])==null||r.call(document):(t=e[n])==null||t.call(e)};const fr=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var tt=()=>{var e;if(!p())return;const t=window.navigator.userAgent.toLowerCase(),r=(e=fr.find(o=>t.match(o.reg)))!=null?e:{};return{type:r.name,version:t.match(r.reg)[1]}};const bt=60*1e3,vt=60*bt,Ot=24*vt;var Ye=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/Ot);r-=Ot*o;const n=~~(r/vt);r-=vt*n;const c=~~(r/bt);r-=bt*c;const v=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${c}\u5206${v}\u79D2`};const wt=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],Ve=e=>{if(!Array.isArray(e))return wt;const t=[...wt];return e.map(r=>{const o=t.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var kt=e=>{const t=Ve(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return He(t.join(""))},Gt=(e=new Date)=>{const t=J(e);return new Date(t[0],t[1],0).getDate()},hr=(e=null)=>{var t,r,o,n;return p()?a(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:(r=(t=window.pageXOffset)!=null?t:document.documentElement.scrollLeft)!=null?r:document.body.scrollLeft,top:(n=(o=window.pageYOffset)!=null?o:document.documentElement.scrollTop)!=null?n:document.body.scrollTop}:{left:0,top:0}};const ft=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>{var t;return{type:"ios",model:e[1],version:(t=e[3])==null?void 0:t.replaceAll("_",".")}}},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var Lt=()=>{if(!p())return;const e=window.navigator.userAgent.toLowerCase(),t=ft.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},Tr=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(n=>{const[c,v]=n.split("=");o[c]=v}),{path:t,params:o}}return{path:t}},Xt=()=>p()&&(window.ontouchstart||navigator.maxTouchPoints),Jt=e=>{var t,r,o,n;const{left:c,top:v}=hr();return{touchX:Xt()?(r=(t=e==null?void 0:e.touches)==null?void 0:t[0])==null?void 0:r.pageX:(e==null?void 0:e.pageX)||(e==null?void 0:e.clientX)+c,touchY:Xt()?(n=(o=e==null?void 0:e.touches)==null?void 0:o[0])==null?void 0:n.pageY:(e==null?void 0:e.pageY)||(e==null?void 0:e.clientY)+v}},Kt=(e,t)=>{var r,o;const{touchX:n,touchY:c}=Jt(e),{x:v,y:z}=(o=(r=t==null?void 0:t.getBoundingClientRect)==null?void 0:r.call(t))!=null?o:{};return{x:n-(v!=null?v:0),y:c-(z!=null?z:0)}},jr=(e,t,r="id",o="children")=>{if(!be(e))return null;const n=c=>{for(let v=0,z=c.length;v<z;v++){const P=c[v];if(P[r]===t)return[P];if(be(P[o])){const V=n(P[o]);if(V)return[P].concat(V)}}};return n(e)},Qt=(e,t={},r)=>{if(!p())return;r=De(r)?r.current:r!=null?r:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&Oe(o,t),o.innerText=e,r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const er=(e={},t)=>{t=rt(t);const r=(o,n)=>{if(!(n!=null&&n[0]))return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(e,t)},rt=(e="")=>{var t;return(t=e.replace(/\[['"]?(.*?)['"]?\]/g,".$1"))==null?void 0:t.split(".")};var Or=er,Mr=(e,t="")=>a(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),Wr=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,n=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${n})`;const c=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${c})`},Zr=e=>{if(!p())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:n}=e;return t.width=o,t.height=n,r.drawImage(e,0,0,o,n),t},Yr=(...e)=>!Number.isNaN(new Date(...e).valueOf()),_r=e=>$e(e)==="error",Hr=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),Vr=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",Ur=e=>$e(e)==="regexp",qr=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),Gr=e=>F(e)&&Object.keys(e).length,Er=e=>F(e)?W(e):Array.isArray(e)?ye(e):e,tr=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",n=>r(n))}),Kr=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",n=>r(n)))}),Qr=async(e,t,r=2e3)=>{for(;!(t!=null&&t(e==null?void 0:e()));)await Vt(r)},Xr=(e,t=["{","}"])=>{var r,o;return(o=(r=e==null?void 0:e.trim)==null?void 0:r.call(e).match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`)))==null?void 0:o[1]},Jr=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),c=r.find(v=>v.key===n);if(!c){const v=e(...o);return r.push({key:n,result:v}),r.length>t&&r.shift(),v}return c.result}};const Ar=(e,t,r="id")=>{if(!be(e))return t;if(!be(t))return e;const o={};return[...e,...t].map(n=>{var c;const v=F(n)?(c=n[r])!=null?c:JSON.stringify(n):n;if(o[v]===void 0)o[v]=n;else{const z=o[v];F(z)&&F(n)?o[v]=f(z,n):be(z)&&be(n)?o[v]=Ar(z,n):o[v]=n}}),Object.keys(o).map(n=>o[n])};var i=Ar;const l=(e,t)=>{if(!F(e))return t;if(!F(t))return e;for(let r in t)Ae(t,r)?F(e[r])&&F(t[r])?e[r]=l(e[r],t[r]):be(e[r])&&be(t[r])?e[r]=i(e[r],t[r]):e[r]=t[r]:Object.setPrototypeOf(e,{[r]:t[r]});return e};var f=l,E=(e,...t)=>{const r=be(e)?i:f;return t.map(o=>e=r(e,o)),e},T=(e,t)=>{var r,o;const n=(r=e==null?void 0:e.split(" "))!=null?r:[],c=(o=t==null?void 0:t.split(" "))!=null?o:[];return[...new Set([...n,...c])].filter(Boolean).join(" ")},N=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(n=>!r.includes(n));e.className=o.join(" ")},A=`@keyframes huxy-message-animate-in {
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
}`;const U=()=>document.getElementsByClassName("huxy-message")[0],Y=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},te=(e,t)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${t}`);const o=document.createElement("span");o.innerText=e;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},oe=(e,t=3250,r,o)=>{if(!p())return;R(A,"huxy-message-css");let n=U();n||(n=Y());const c=te(e,o);n.appendChild(c),setTimeout(()=>{n.removeChild(c),r==null||r()},t),setTimeout(()=>{N(c,"open")},t-250)};var ce={success:(e,t,r)=>oe(e,t,r,"success"),warn:(e,t,r)=>oe(e,t,r,"warn"),warning:(e,t,r)=>oe(e,t,r,"warn"),error:(e,t,r)=>oe(e,t,r,"error"),info:(e,t,r)=>oe(e,t,r,"info")},se=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[d(1-r),d(Gt(t)-r)]},Ee=(e,t,r,o,n="id",c="children")=>{let v={};return Q((z,P)=>(v=z[P],z.splice(P,1),!0))(e,t,n,c),x(e,r,v,o,n,c),e},Se=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),fe=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(n=>t.includes(n)?o.push({key:n,value:e[n]}):r[n]=e[n]),{newObj:r,newQuery:o}},Ie=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},Ce=(e="",t=0,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`},je=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!be(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},Ge=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(n,c)=>n?o(n):r(c))),Bt=()=>"#"+Ce((~~(Math.random()*(1<<24))).toString(16),6),rr=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),Nr=(e=[])=>e[rr(e.length-1)],Mt=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,n)=>{n===e-1?r[n]=t:(r[n]=rr(1,t-1),t-=r[n])}),r},Dr=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),Pr=()=>Math.random()>.5;const Ct=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var jt=(e,t=60)=>{if(!p())return;e=De(e)?e.current:e!=null?e:document.body;let r,o=[];const n=qe(()=>o.map(P=>P(e)),t),c=P=>{r||(r=Ct(e,n)),o.indexOf(P)===-1&&o.push(P)},v=P=>{const V=o.indexOf(P);V!==-1&&o.splice(V,1),o.length===0&&r&&z()},z=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:c,unbind:v,destroy:z}};const ot=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const n=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var Ir=(e=0,t=0,r=0,o=1)=>{var n;if(e.includes("rgb")){const c=e.match(/rgba?\((.+)\)/);if(c){const v=(n=c[1])==null?void 0:n.split(",").map(z=>z.trim());return ot(...v)}return e}return ot(e,t,r,o)},oo=(e,t="px")=>`${e}`.replace(t,"")-0;const eo=()=>typeof(performance==null?void 0:performance.now)=="function"?performance.now():new Date().getTime(),no=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},io=()=>{const e=[],t=v=>{e.push(v),c(v)},r=()=>e[0],o=()=>e.shift(),n=v=>v.startTime=eo(),c=v=>{n(v),e.sort((z,P)=>z.startTime-P.startTime)};return{hub:e,push:t,peek:r,shift:o,update:c}};var ao=(e=5)=>{const{hub:t,push:r,peek:o,shift:n,update:c}=io(),v=no(()=>{P()&&v()}),z=V=>eo()-V.startTime>e,P=()=>{let V=o();for(;V;){if(z(V)){c(V);break}const{task:he}=V;typeof he=="function"?(V.task=null,he()):n(),V=o()}return V};return(V=()=>{})=>{r({task:V}),t.length<2&&v()}},lo=()=>p()&&document.documentElement.scrollHeight-_()===ct().height,so=e=>{var t;!p()||(e=De(e)?e.current:e!=null?e:window,(t=e.scrollIntoView)==null||t.call(e,{behavior:"smooth",block:"center"}))},uo={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch(r){t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},co=e=>{const t=kt(e);p()&&document.head.appendChild(...t)},fo=(e,t=null,r=!1)=>[...e||[]].sort((o,n)=>{const c=t?o[t]:o,v=t?n[t]:n;return!isNaN(Number(c))&&!isNaN(Number(c))?r?v-c:c-v:typeof c=="string"&&typeof v=="string"?r?v.localeCompare(c):c.localeCompare(v):typeof c=="string"&&typeof v=="number"?r?-1:1:typeof c=="number"||typeof c=="string"?r?1:-1:r?-1:1}),ho=e=>{if(!F(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},po={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const mo=ie();var xo=Ue(mo),yo=(e,t=!1)=>(e=t?e:`return ${e};`,Function(e)()),go=()=>p()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),bo=(e,...t)=>{const r=[];return e.map((o,n)=>{var c;r.push(o,(c=t[n])!=null?c:"")}),r.join("")},vo=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const wo=e=>[12,Gt(e),24,60,60],ko=(e=[],t=[],r=[])=>{let o=!1;const n=[];return t.map((c,v)=>{const z=(o?c-1:c)-e[v];z<0?(n[v]=z+(r[v]||10),o=!0):(n[v]=z,o=!1)}),n.reverse()};var to=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=wo(t).reverse(),o=J(e).slice(0,-1).reverse(),n=J(t).slice(0,-1).reverse();return ko(o,n,r)};const Co=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var jo=(e,t=new Date)=>{const r=to(e,t),o=r.findIndex(n=>n>0);return r.map((n,c)=>`${n||0}${Co[c]}`).slice(o).join("")},Eo=(e,t)=>{!a(e)||(Mr(e,t)?N(e,t):b(e,t))},So=e=>(t,r="children")=>{if(!be(t))return t;const o=n=>(n.map(c=>{be(c[r])&&(c[r]=o(c[r]))}),e(n));return o(t)},$o=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),zo=(e,t="fuckId",r="children")=>I((o,n,c)=>{o[t]=[...n.map(v=>v["@@index"]),c].join("-")})(e,r),Fo=(e,t,r,o="children")=>Q((n,c)=>{const v=n[c];return v[o]=[...v[o]||[],...r],!0})(e,t),To=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},Oo=e=>p()?(Ne.map(t=>document.addEventListener(t,e,!1)),()=>Ne.map(t=>document.removeEventListener(t,e,!1))):void 0,No=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:c="20px microsoft yahei",fillStyle:v="rgba(202,202,202,0.4)",content:z="\u8BF7\u52FF\u5916\u4F20",rotate:P="-30",zIndex:V=1e3}={})=>{if(!p())return;e=De(e)?e.current:e!=null?e:document.body;const he=e.firstChild;(he==null?void 0:he.className)==="watermark-canvas"&&e.removeChild(he);const ve=document.createElement("canvas");ve.setAttribute("width",t),ve.setAttribute("height",r);const Te=ve.getContext("2d");Te.textAlign=o,Te.textBaseline=n,Te.font=c,Te.fillStyle=v,Te.rotate(Math.PI/180*P),Te.fillText(z,parseFloat(t)/2,parseFloat(r)/2);const pr=ve.toDataURL(),Wt=document.createElement("div");Wt.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${V};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${pr}')`),e.style.position="relative",e.insertBefore(Wt,e.firstChild)},Do=(e=new Date)=>{const t=new Date(e).getDay();return[d(1-t),d(7-t)]},Po=e=>{if(!Be(e))return{};let t="pending",r;const o=e.then(n=>{t="success",r=n}).catch(n=>{t="error",r=n});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}};return nt}()})}}]);
