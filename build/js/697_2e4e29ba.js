(self.webpackChunk=self.webpackChunk||[]).push([[697],{1975:function(It,he,Ve){(function(_e,Te){It.exports=Te(Ve(7378),Ve(1542))})(this,function(_e,Te){return function(){"use strict";var ge={193:function(a,m,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`/*@height:2px;
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
`,""]),z.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},m.Z=z},145:function(a,m,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`.kLIGi {
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
`,""]),z.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},m.Z=z},842:function(a,m,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`@keyframes animate-drawer-in {
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
`,""]),z.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},m.Z=z},563:function(a,m,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`@keyframes animate-drop-in {
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
`,""]),z.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},m.Z=z},697:function(a,m,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`@keyframes animate-modal-in {
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
`,""]),z.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},m.Z=z},810:function(a,m,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`.clear {
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
  zoom: 1;
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
  zoom: 1;
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
`,""]),z.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"},m.Z=z},31:function(a,m,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`.cols-1 {
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
`,""]),z.locals={},m.Z=z},201:function(a,m,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`@keyframes before {
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
`,""]),z.locals={},m.Z=z},289:function(a,m,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`.clear {
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
`,""]),z.locals={},m.Z=z},626:function(a,m,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`.ofth_ {
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
`,""]),z.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},m.Z=z},435:function(a,m,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`.node-right-icon-close {
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
`,""]),z.locals={},m.Z=z},414:function(a){a.exports=function(m){var d=[];return d.toString=function(){return this.map(function(k){var g="",S=typeof k[5]!="undefined";return k[4]&&(g+="@supports (".concat(k[4],") {")),k[2]&&(g+="@media ".concat(k[2]," {")),S&&(g+="@layer".concat(k[5].length>0?" ".concat(k[5]):""," {")),g+=m(k),S&&(g+="}"),k[2]&&(g+="}"),k[4]&&(g+="}"),g}).join("")},d.i=function(k,g,S,p,z){typeof k=="string"&&(k=[[null,k,void 0]]);var A={};if(S)for(var q=0;q<this.length;q++){var X=this[q][0];X!=null&&(A[X]=!0)}for(var F=0;F<k.length;F++){var L=[].concat(k[F]);S&&A[L[0]]||(typeof z!="undefined"&&(typeof L[5]=="undefined"||(L[1]="@layer".concat(L[5].length>0?" ".concat(L[5]):""," {").concat(L[1],"}")),L[5]=z),g&&(L[2]&&(L[1]="@media ".concat(L[2]," {").concat(L[1],"}")),L[2]=g),p&&(L[4]?(L[1]="@supports (".concat(L[4],") {").concat(L[1],"}"),L[4]=p):L[4]="".concat(p)),d.push(L))}},d}},703:function(a){a.exports=function(m){return m[1]}},53:function(a,m,d){var k,g=d(899),S=Symbol.for("react.element"),p=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,A=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,q={key:!0,ref:!0,__self:!0,__source:!0};function X(F,L,W){var te,pe={},be=null,Xe=null;W!==void 0&&(be=""+W),L.key!==void 0&&(be=""+L.key),L.ref!==void 0&&(Xe=L.ref);for(te in L)z.call(L,te)&&!q.hasOwnProperty(te)&&(pe[te]=L[te]);if(F&&F.defaultProps)for(te in L=F.defaultProps,L)pe[te]===void 0&&(pe[te]=L[te]);return{$$typeof:S,type:F,key:be,ref:Xe,props:pe,_owner:A.current}}k=p,m.jsx=X,m.jsxs=X},458:function(a,m,d){a.exports=d(53)},748:function(a){var m=[];function d(S){for(var p=-1,z=0;z<m.length;z++)if(m[z].identifier===S){p=z;break}return p}function k(S,p){for(var z={},A=[],q=0;q<S.length;q++){var X=S[q],F=p.base?X[0]+p.base:X[0],L=z[F]||0,W="".concat(F," ").concat(L);z[F]=L+1;var te=d(W),pe={css:X[1],media:X[2],sourceMap:X[3],supports:X[4],layer:X[5]};if(te!==-1)m[te].references++,m[te].updater(pe);else{var be=g(pe,p);p.byIndex=q,m.splice(q,0,{identifier:W,updater:be,references:1})}A.push(W)}return A}function g(S,p){var z=p.domAPI(p);z.update(S);var A=function(q){if(q){if(q.css===S.css&&q.media===S.media&&q.sourceMap===S.sourceMap&&q.supports===S.supports&&q.layer===S.layer)return;z.update(S=q)}else z.remove()};return A}a.exports=function(S,p){p=p||{},S=S||[];var z=k(S,p);return function(A){A=A||[];for(var q=0;q<z.length;q++){var X=z[q],F=d(X);m[F].references--}for(var L=k(A,p),W=0;W<z.length;W++){var te=z[W],pe=d(te);m[pe].references===0&&(m[pe].updater(),m.splice(pe,1))}z=L}}},736:function(a){var m={};function d(g){if(typeof m[g]=="undefined"){var S=document.querySelector(g);if(window.HTMLIFrameElement&&S instanceof window.HTMLIFrameElement)try{S=S.contentDocument.head}catch(p){S=null}m[g]=S}return m[g]}function k(g,S){var p=d(g);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(S)}a.exports=k},706:function(a){function m(d){var k=document.createElement("style");return d.setAttributes(k,d.attributes),d.insert(k,d.options),k}a.exports=m},567:function(a,m,d){function k(g){var S=d.nc;S&&g.setAttribute("nonce",S)}a.exports=k},306:function(a){function m(g,S,p){var z="";p.supports&&(z+="@supports (".concat(p.supports,") {")),p.media&&(z+="@media ".concat(p.media," {"));var A=typeof p.layer!="undefined";A&&(z+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),z+=p.css,A&&(z+="}"),p.media&&(z+="}"),p.supports&&(z+="}");var q=p.sourceMap;q&&typeof btoa!="undefined"&&(z+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(q))))," */")),S.styleTagTransform(z,g,S.options)}function d(g){if(g.parentNode===null)return!1;g.parentNode.removeChild(g)}function k(g){var S=g.insertStyleElement(g);return{update:function(p){m(S,g,p)},remove:function(){d(S)}}}a.exports=k},62:function(a){function m(d,k){if(k.styleSheet)k.styleSheet.cssText=d;else{for(;k.firstChild;)k.removeChild(k.firstChild);k.appendChild(document.createTextNode(d))}}a.exports=m},899:function(a){a.exports=_e},994:function(a){a.exports=Te}},ee={};function re(a){var m=ee[a];if(m!==void 0)return m.exports;var d=ee[a]={id:a,exports:{}};return ge[a](d,d.exports,re),d.exports}(function(){re.n=function(a){var m=a&&a.__esModule?function(){return a.default}:function(){return a};return re.d(m,{a:m}),m}})(),function(){re.d=function(a,m){for(var d in m)re.o(m,d)&&!re.o(a,d)&&Object.defineProperty(a,d,{enumerable:!0,get:m[d]})}}(),function(){re.o=function(a,m){return Object.prototype.hasOwnProperty.call(a,m)}}(),function(){re.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){re.nc=void 0}();var y={};return function(){re.r(y),re.d(y,{Anico:function(){return Xe},Carousel:function(){return qt},Col:function(){return $t},Drawer:function(){return pt},Drop:function(){return kt},Ellipsis:function(){return Zt},ErrorBoundary:function(){return xr},FullPage:function(){return Ar},HandleError:function(){return Lr},LoadError:function(){return Sr},Mask:function(){return ht},MaxSize:function(){return _},Modal:function(){return de},Panel:function(){return Ke},Portal:function(){return ft},Row:function(){return Ht},Spinner:function(){return Ee},TabHeader:function(){return Mr},Tooltip:function(){return mr},Tree:function(){return Yr},fixEle:function(){return nr},fixIcon:function(){return Dr},renderTree:function(){return Et},str2React:function(){return jr},str2Vue:function(){return Vt}});var a=re(458),m=re(748),d=re.n(m),k=re(306),g=re.n(k),S=re(736),p=re.n(S),z=re(567),A=re.n(z),q=re(706),X=re.n(q),F=re(62),L=re.n(F),W=re(193),te={};te.styleTagTransform=L(),te.setAttributes=A(),te.insert=p().bind(null,"head"),te.domAPI=g(),te.insertStyleElement=X();var pe=d()(W.Z,te),be=W.Z&&W.Z.locals?W.Z.locals:void 0,Xe=i=>(0,a.jsx)("span",{className:be.anico,children:(0,a.jsx)("span",{className:[be.hline,...(i.type||"").split(" ").map(l=>be[l]).filter(Boolean)].join(" ")})}),nt=re(994),V=re(899),Ye=re.n(V),Le=(i,l)=>{const h=(0,V.useRef)();(0,V.useEffect)(()=>{h.current=i},[i]),(0,V.useEffect)(()=>{if(l){const E=setInterval(()=>h.current(),l);return()=>clearInterval(E)}},[l])},Me=()=>![typeof window,typeof document].includes("undefined"),Mt=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),ct=i=>Mt(i).indexOf("element")>-1,it=(i=null)=>{var l,h;return Me()?ct(i)?{width:i.clientWidth,height:i.clientHeight}:{width:(l=window.innerWidth)!=null?l:document.documentElement.clientWidth,height:(h=window.innerHeight)!=null?h:document.documentElement.clientHeight}:{width:0,height:0}},B=(i=()=>{},l=60)=>{let h=null;return function(...E){clearTimeout(h),h=setTimeout(()=>i.apply(this,E),l)}},oe=(i,l)=>Object.prototype.hasOwnProperty.call(i!=null?i:{},l),J=i=>oe(i,"current"),ve=(i,l)=>{var h;const E=[],T=(h=i.children)!=null?h:[];for(let I=0,Z=T.length;I<Z;I++){const K=T[I];K.className.indexOf(l)>-1&&E.push(K)}return E.length===0?null:E.length===1?E[0]:E};const ze=(i,l)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const h=document.createElement("object");return h.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),h.setAttribute("class","resize-sensor"),h.onload=()=>{h.contentDocument.defaultView.addEventListener("resize",l,!1),l()},h.type="text/html",i.appendChild(h),h.data="about:blank",h};var Qe=(i,l=60)=>{if(!Me())return;i=J(i)?i.current:i!=null?i:document.body;let h=ve(i,"resize-sensor"),E=[];const T=B(()=>E.map(G=>G(i)),l),I=G=>{ve(i,"resize-sensor")||(h=ze(i,T)),E.indexOf(G)===-1&&E.push(G)},Z=G=>{const se=E.indexOf(G);se!==-1&&E.splice(se,1),E.length===0&&h&&K()},K=()=>{h&&h.parentNode&&(h.contentDocument&&h.contentDocument.defaultView.removeEventListener("resize",T,!1),h.parentNode.removeChild(h),h=void 0,E=[])};return{element:i,bind:I,unbind:Z,destroy:K}},Ge=(i={})=>{const l=(0,V.useRef)(0),[h,E]=(0,V.useState)(i),T=(0,V.useCallback)(I=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>E(I))},[]);return(0,V.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[h,T]},dt=(i=null,l=60)=>{const h=J(i)?i.current:i,{bind:E,destroy:T}=Qe(h,l),[I,Z]=Ge(it(h));return(0,V.useEffect)(()=>(E(()=>h&&Z(it(h))),()=>T()),[h]),I},We=re(145),Ze={};Ze.styleTagTransform=L(),Ze.setAttributes=A(),Ze.insert=p().bind(null,"head"),Ze.domAPI=g(),Ze.insertStyleElement=X();var zt=d()(We.Z,Ze),Je=We.Z&&We.Z.locals?We.Z.locals:void 0,qt=({children:i,active:l=0,delay:h=5e3,className:E,...T})=>{const[I,Z]=(0,V.useState)(l+1),[K,G]=(0,V.useState)(!1),se=(0,V.useRef)(),le=(0,V.useRef)(""),{width:ke}=dt(se);i=Array.isArray(i)?i:[i];const ye=i[0],Fe=[i[i.length-1],...i,ye],Pe=Fe.length;Le(()=>{let Ce=I+1;Ce=Ce===Pe?1:Ce,le.current&&(le.current=""),Z(Ce),Ce===Pe-1&&setTimeout(()=>{le.current="none",Z(1)},500)},K?null:h);const De=(Ce,Ne)=>{Ne.stopPropagation(),le.current="",Z(Ce),(0,nt.flushSync)(()=>G(!0)),G(!1)},Oe={width:`${Pe*ke}px`,transform:`translateX(${-ke*I}px)`,transition:le.current};return(0,a.jsxs)("div",{className:`${Je["huxy-carousel"]}${E?` ${E}`:""}`,...T,ref:se,children:[(0,a.jsx)("div",{className:Je["huxy-carousel-wrap"],style:Oe,children:Fe.map((Ce,Ne)=>(0,a.jsx)("div",{className:`${Je["carousel-item"]} ${I===Ne?Je.active:""}`,style:{width:`${ke}px`},children:Ce},`huxy-carousel-${Ne}`))}),(0,a.jsx)("div",{className:Je["carousel-switch"],children:i.map((Ce,Ne)=>(0,a.jsx)("span",{className:`${Je.dot} ${I===Ne+1?Je.active:""}`,onClick:jt=>De(Ne+1,jt)},`huxy-carousel-switch-${Ne}`))})]})};const at=(i,l)=>{let h="",E="";if(typeof l=="number"&&(h=`col-${i}-${l}`),typeof l=="object"){const{span:T,offset:I}=l;h=T?`col-${i}-${T}`:"",E=I?`offset-${i}-${I}`:""}return{sp:h,os:E}};var $t=(0,V.forwardRef)(({span:i,offset:l,xl:h,lg:E,md:T,sm:I,xs:Z,style:K,width:G,auto:se,offsetWidth:le="0px",className:ke,...ye},Fe)=>{const Pe=ke?` ${ke}`:"",De=`col-${i||12}`,Oe=l?`offset-${l}`:"",{sp:Ce,os:Ne}=at("xs",Z),{sp:jt,os:dr}=at("sm",I),{sp:Ot,os:vr}=at("md",T),{sp:St,os:fr}=at("lg",E),{sp:Bt,os:Tt}=at("xl",h),ut=[De,Bt,St,Ot,jt,Ce,Oe,Tt,fr,vr,dr,Ne].filter(Boolean).join(" "),Rt=se?{width:"auto",flex:1,maxWidth:`calc(100% - ${le})`}:{width:G};return(0,a.jsx)("div",{className:`${ut}${Pe}`,...ye,style:{...Rt,...K},ref:Fe})}),Xt=()=>{const i=(0,V.useRef)(!0);return i.current?(i.current=!1,!0):!1},Gt=(i,l=[])=>{const h=Xt();(0,V.useEffect)(()=>{if(!h)return i()},l)},Wt=(i,l=450)=>{const[h,E]=(0,V.useState)(i);return Gt(()=>{let T;return i||l===0?E(i):T=setTimeout(()=>E(i),l),()=>T&&clearTimeout(T)},[i]),[h,E]},ft=({children:i,mountNode:l=document.body})=>(0,nt.createPortal)(i,l);const et={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},Jt={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},hr={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},Kt=document.body;var ht=({open:i,close:l,delay:h=300,children:E,mountNode:T,hasMask:I=!0,style:Z,className:K="h-mask"})=>{const[G]=Wt(i,h);return Kt.style.overflow=G?"hidden":"",(0,a.jsx)(ft,{mountNode:T,children:(0,a.jsx)("div",{children:G?(0,a.jsxs)("div",{className:K,style:et,children:[I?(0,a.jsx)("div",{style:Jt,onClick:se=>l==null?void 0:l(se)}):null,(0,a.jsx)("div",{style:{...hr,...Z},children:E})]}):null})})},Pt=re(842),bt={};bt.styleTagTransform=L(),bt.setAttributes=A(),bt.insert=p().bind(null,"head"),bt.domAPI=g(),bt.insertStyleElement=X();var Qt=d()(Pt.Z,bt),lt=Pt.Z&&Pt.Z.locals?Pt.Z.locals:void 0,pt=({open:i,close:l,footer:h,header:E,className:T,style:I,children:Z,width:K="300px"})=>{var G;const se=["drawer-wrap",i?"open":"",...(G=T==null?void 0:T.split(" "))!=null?G:[]].filter(Boolean).map(le=>lt[le]).join(" ");return(0,a.jsx)(ht,{open:i,close:l,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,a.jsx)("div",{className:se,style:{width:K,...I},children:(0,a.jsxs)("div",{className:lt["drawer-container"],children:[(0,a.jsxs)("div",{className:lt["drawer-header"],children:[(0,a.jsx)("span",{className:`link ${lt["ico-close"]}`,onClick:le=>l==null?void 0:l(le)}),(0,a.jsx)("div",{children:E})]}),(0,a.jsx)("div",{className:lt["drawer-content"],children:Z}),h?(0,a.jsx)("div",{className:lt["drawer-footer"],children:h}):null]})})})},er=(i,l,h="click")=>{(0,V.useEffect)(()=>{const E=I=>{const Z=J(i)?i.current:i;Z!=null&&Z.contains&&!Z.contains(I.target)&&l(I)},T=typeof h=="string"?[h]:h;return T.map(I=>{document.addEventListener(I,E,!1)}),()=>{T.map(I=>{document.removeEventListener(I,E,!1)})}},[i,l,h])},tr=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",rr=(i="")=>i.replace(/^\S/,l=>l.toUpperCase()),mt=i=>{var l;if(Me())return i=J(i)?i.current:i!=null?i:document.body,(l=i.getBoundingClientRect)==null?void 0:l.call(i)},u=i=>{if(!Me())return;const l=document.createElement("div");return l.innerHTML=i,l.children[0]},b=(i,l={},h=!1)=>{if(ct(i)){if(h){let E="";Object.keys(l).map(T=>{E+=`${T}: ${l[T]};`}),i.style=E;return}Object.keys(l).map(E=>i.style.setProperty(E,l[E]))}};const j=(i=350)=>new Promise(l=>setTimeout(l,i)),O=(i=100)=>{const l=Date.now();for(;Date.now()-l<=i;);};var P=j,H=async(i,l=15)=>{if(!Me())return;if(typeof i=="string"&&(i=u(i)),i=J(i)?i.current:i,!ct(i))return{};const h=i.cloneNode(!0);b(h,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(h),await P(l);const E=mt(h);return i.parentNode.removeChild(h),E};const ue=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,ae=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,ne=(i,l)=>{var h;l=`huxy-drop-arrow-${l}`;const E=(h=i.getAttribute("class"))!=null?h:"";ue.test(E)?i.setAttribute("class",E.replace(ae,l)):i.setAttribute("class",`${E} ${l}`)},$e=async(i,l,h)=>{const{left:E,right:T,top:I,bottom:Z}=mt(i),{width:K,height:G}=it(),{width:se,height:le}=await H(l);if(T<0||Z<0||E>K||I>G)return{};if(h==="vertical"){const ke={left:E+"px",top:Z+10+"px",right:"auto",bottom:"auto"};let ye="lt";E+se>K&&(ke.left=T-se+"px",ye="rt"),Z+10+le>G&&(ke.top=I-10-le+"px",ye=ye==="lt"?"lb":"rb"),b(l,ke),ne(l,ye)}else{const ke={left:T+10+"px",top:I+"px",right:"auto",bottom:"auto"};let ye="tl";T+10+se>K&&(ke.left=E-10-se+"px",ye="tr"),I+le>G&&(ke.top=Z-le+"px",ye=ye==="tl"?"bl":"br"),b(l,ke),ne(l,ye)}};var vt=(i,l,h="horizontal")=>{const E=B($e),T=()=>E(i,l,h);window.addEventListener("scroll",T,!1),window.addEventListener("resize",T,!1);const I=()=>{window.removeEventListener("scroll",T),window.removeEventListener("resize",T),b(l,{left:"",top:"",right:"",bottom:""})};return $e(i,l,h),I},wt=({open:i,delay:l=250,children:h,mountNode:E,style:T,className:I="huxy-mask"})=>{const[Z]=Wt(i,l);return(0,a.jsx)(ft,{mountNode:E,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:I,children:(0,a.jsx)("div",{style:{...T,display:Z?"block":"none"},children:h})})})})},st=re(563),Ae={};Ae.styleTagTransform=L(),Ae.setAttributes=A(),Ae.insert=p().bind(null,"head"),Ae.domAPI=g(),Ae.insertStyleElement=X();var or=d()(st.Z,Ae),xt=st.Z&&st.Z.locals?st.Z.locals:void 0,kt=({trigger:i="click",type:l,dropList:h,className:E,children:T,...I})=>{const[Z,K]=(0,V.useState)(!1),G=(0,V.useRef)(),se=(0,V.useRef)(),le=(0,V.useRef)();er(G,De=>Z&&K(!1),[...new Set(["click",i.toLowerCase()])]),(0,V.useEffect)(()=>()=>{var De;return(De=le.current)==null?void 0:De.call(le)},[]);const ke=De=>{De.preventDefault(),K(!0),le.current=vt(G.current,se.current,l)},ye={[`on${rr(i)}`]:ke},Fe=["drop-wrap",Z?"open":""].filter(Boolean).map(De=>xt[De]).join(" "),Pe=tr(h)?h:h==null?void 0:h(()=>K(!1),Z);return(0,a.jsxs)("span",{ref:G,className:`${xt["drop-target"]}${E?` ${E}`:""}`,...ye,...I,children:[T,(0,a.jsx)(wt,{open:Z,className:"huxy-drop",children:(0,a.jsx)("div",{ref:se,className:Fe,children:Pe})})]})},yt=(i,l,h)=>{if(!Me())return;h=J(h)?h.current:h!=null?h:document.body;const E=document.createElement("span");E.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),l&&b(E,l),E.innerText=(i!=null?i:"").replace(/[\r\n]/g,""),h.appendChild(E);const T=E.getBoundingClientRect();return h.removeChild(E),T},Ue=re(626),tt={};tt.styleTagTransform=L(),tt.setAttributes=A(),tt.insert=p().bind(null,"head"),tt.domAPI=g(),tt.insertStyleElement=X();var Xr=d()(Ue.Z,tt),pr=Ue.Z&&Ue.Z.locals?Ue.Z.locals:void 0,mr=({title:i,placement:l="topRight",children:h,ellipsis:E,className:T,...I})=>(0,a.jsx)("span",{className:`${pr[`huxy-tooltip-${l}`]}${T?` ${T}`:""}`,tooltip:i!=null?i:h,...I,children:(0,a.jsx)("span",{className:E?pr.ellipsis:"",children:h})});const Ir={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"},kr=i=>{var l,h,E,T;const{children:I,style:Z}=i,K=typeof I=="string",G=K?I:(E=(l=I==null?void 0:I.props)==null?void 0:l.title)!=null?E:(h=I==null?void 0:I.props)==null?void 0:h.children,se=(0,V.useRef)(),[le,ke]=(0,V.useState)(!0);return(0,V.useEffect)(()=>{if(se.current){const{width:ye}=yt(G,null,se.current.parentNode),{width:Fe}=mt(se.current),Pe=~~ye>~~Fe;Pe!==le&&ke(Pe)}},[G]),(0,a.jsx)("span",{ref:se,style:{display:"flex",width:"100%",...Z},children:le?K?(0,a.jsx)(mr,{...i,ellipsis:!0}):(0,a.jsx)("span",{style:Ir,children:I}):K?I:(T=I==null?void 0:I.props)==null?void 0:T.children})};var Zt=i=>i.children==null?"":(0,a.jsx)(kr,{...i}),Cr=Object.defineProperty,Pr=(i,l,h)=>l in i?Cr(i,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[l]=h,Nr=(i,l,h)=>(Pr(i,typeof l!="symbol"?l+"":l,h),h);class xr extends Ye().Component{constructor(){super(...arguments),Nr(this,"state",{error:null})}static getDerivedStateFromError(l){return{error:l}}componentDidCatch(l,h){const{errorReport:E}=this.props;typeof E=="function"&&E({error:l,info:h.componentStack})}render(){const{error:l}=this.state,{fallback:h,children:E}=this.props;return l?h(l):E}}var nr=i=>l=>{if(typeof l=="function"||typeof(l==null?void 0:l.render)=="function")return(0,a.jsx)(l,{});if(typeof l=="string"){const h=i==null?void 0:i[l];return h?(0,a.jsx)(h,{}):(0,a.jsx)("i",{className:l})}return l!=null?l:null};const yr=i=>nr(i);var Dr=i=>({icon:l,defaultIcon:h=null})=>l?yr(i)(l):l===!1?null:h;const ir=["","webkit","moz","ms"],_r=i=>ir.map(l=>l?`${l}FullscreenElement`:"fullscreenElement").find(l=>i[l]),ar=i=>ir.map(l=>l?`${l}RequestFullscreen`:"requestFullscreen").find(l=>i[l]),Er=i=>ir.map(l=>l?`${l}ExitFullscreen`:"exitFullscreen").find(l=>i[l]),Nt=ir.map(i=>`${i}fullscreenchange`);var Dt=i=>{var l,h;if(!Me())return;i=J(i)?i.current:i!=null?i:document.body;const E=_r(document),T=ar(i),I=Er(document);document[E]?(h=document[I])==null||h.call(document):(l=i[T])==null||l.call(i)},Wr=i=>Me()?(Nt.map(l=>document.addEventListener(l,i,!1)),()=>Nt.map(l=>document.removeEventListener(l,i,!1))):void 0;const _t=i=>(0,a.jsx)("i",{...i,children:"..."});var Ar=({panel:i,fullIcon:l=_t,exitIcon:h=_t,...E})=>{const T=J(i)?i.current:i,[I,Z]=(0,V.useState)();(0,V.useEffect)(()=>{const G=Wr(()=>{Z(se=>!se)});return()=>G()},[]);const K=I?h:l;return(0,a.jsx)(K,{onClick:G=>Dt(T),...E})},jr=(i,l)=>(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...l}),Sr=i=>{const{error:l={},info:h=""}=i||{},{message:E,stack:T,errMsg:I}=l;let Z=I||T||l.toString();Z=`${Z}
${h}`.replace(/\r|\n|\r\n/g,"<br/>"),Z=Z.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Z=Z.replace(/\s/g,"&nbsp;");const K=E==null?void 0:E.slice(0,120).split(". ").slice(0,2).join(". ");return(0,a.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[jr(Z,{style:{color:"red"}}),K&&(0,a.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${K}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Lr=({children:i,report:l})=>{var h;const E=(0,V.useRef)();return(h=E.current)!=null&&h.state&&(E.current.state.error=null),(0,a.jsx)(xr,{ref:E,fallback:(T,I)=>Sr({error:T,info:I}),errorReport:l,children:i})};const zr=(i,l)=>Object.keys(l).map(h=>i.style[h]=l[h]),s=(i,l)=>Object.keys(l).map(h=>i.style[h]=""),f={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},C=({left:i,top:l,width:h,height:E})=>({left:`${i}px`,top:`${l}px`,width:`${h}px`,height:`${E}px`}),v=i=>(0,a.jsx)("i",{...i,children:"..."}),x=i=>{const{left:l,top:h}=mt(i),{width:E,height:T}=it(i);return{left:l,top:h,width:E,height:T}};var _=({panel:i,target:l,fullIcon:h=v,exitIcon:E=v})=>{i=J(i)?i.current:i||document.body;const[T,I]=(0,V.useState)(),Z=(0,V.useRef)(),K=(0,V.useRef)();(0,V.useEffect)(()=>{const le=typeof l=="function"?l:()=>document.getElementsByClassName(l)[0];K.current=C(x(le())),Z.current={...f,...C(x(i))}},[i]);const G=(le,ke)=>{le?(zr(ke,Z.current),setTimeout(()=>{zr(ke,K.current)},0)):s(ke,Z.current),I(le)},se=T?E:h;return(0,a.jsx)(se,{onClick:le=>G(!T,i)})},R=re(697),Y={};Y.styleTagTransform=L(),Y.setAttributes=A(),Y.insert=p().bind(null,"head"),Y.domAPI=g(),Y.insertStyleElement=X();var M=d()(R.Z,Y),D=R.Z&&R.Z.locals?R.Z.locals:void 0,de=({open:i,close:l,hasMask:h=!0,cancelText:E="\u53D6\u6D88",submit:T,submitText:I="\u786E\u5B9A",title:Z="Modal \u5F39\u7A97",className:K,children:G,delay:se=250,...le})=>{var ke;const ye=["modal-wrap",i?"open":"",...(ke=K==null?void 0:K.split(" "))!=null?ke:[]].filter(Boolean).map(Fe=>D[Fe]).join(" ");return(0,a.jsx)(ht,{open:i,close:l,delay:se,hasMask:h,className:"huxy-modal",children:(0,a.jsx)("div",{className:ye,...le,children:(0,a.jsxs)("div",{className:D["modal-container"],children:[(0,a.jsx)("div",{className:D["modal-header"],children:Z}),(0,a.jsx)("div",{className:D["modal-content"],children:G}),(0,a.jsxs)("div",{className:D["modal-footer"],children:[(0,a.jsx)("div",{className:`${D.btn} ${D.left}`,onClick:Fe=>l==null?void 0:l(Fe),children:E}),(0,a.jsx)("div",{className:`${D.btn} ${D.right}`,onClick:Fe=>T==null?void 0:T(Fe),children:I})]})]})})})},fe=re(201),me={};me.styleTagTransform=L(),me.setAttributes=A(),me.insert=p().bind(null,"head"),me.domAPI=g(),me.insertStyleElement=X();var ce=d()(fe.Z,me),we=fe.Z&&fe.Z.locals?fe.Z.locals:void 0,Ee=({global:i,absolute:l})=>(0,a.jsx)("div",{className:`spinner${i?" global":""}${l?" absolute":""}`,children:(0,a.jsx)("figure",{className:"spinning"})}),ie=re(810),Q={};Q.styleTagTransform=L(),Q.setAttributes=A(),Q.insert=p().bind(null,"head"),Q.domAPI=g(),Q.insertStyleElement=X();var Ie=d()(ie.Z,Q),je=ie.Z&&ie.Z.locals?ie.Z.locals:void 0;const Be=i=>{var l;return(l=i==null?void 0:i.filter)==null?void 0:l.call(i,h=>typeof h=="function")},He=(i,l)=>{const h=(0,V.useRef)(),{loading:E,title:T,plugins:I,children:Z,className:K,...G}=i,se=Be(I),le=se==null?void 0:se.length,ke=K?` ${K}`:"",ye=J(l)?l:h;return(0,a.jsxs)("div",{className:`${je.panel}${ke}`,...G,ref:ye,children:[(T||le)&&(0,a.jsxs)("div",{className:je["panel-header"],children:[T&&(0,a.jsx)("h4",{className:je["panel-title"],children:T}),le&&(0,a.jsx)("div",{className:je["panel-plugins"],children:se.map((Fe,Pe)=>(0,a.jsx)("span",{className:"link",children:(0,a.jsx)(Fe,{panel:ye})},Pe))})]}),(0,a.jsx)("div",{className:je["panel-body"],children:Z}),E&&(0,a.jsx)(Ee,{})]})};var Ke=(0,V.forwardRef)(He),rt=re(31),gt={};gt.styleTagTransform=L(),gt.setAttributes=A(),gt.insert=p().bind(null,"head"),gt.domAPI=g(),gt.insertStyleElement=X();var Yt=d()(rt.Z,gt),At=rt.Z&&rt.Z.locals?rt.Z.locals:void 0;const Lt=({gutter:i=10,className:l,overflow:h="hidden",...E},T)=>{var I;const Z=l?` ${l}`:"";let K=10;if(Array.isArray(i)){const G=[...i];i=G[0],K=(I=G[1])!=null?I:G[0]}return(0,a.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(K/2)}px`,overflow:h},children:(0,a.jsx)("div",{className:`row${Z}`,...E,ref:T})})};var Ht=(0,V.forwardRef)(Lt),ot=i=>Mt(i)==="array",Br=i=>ot(i)&&!!i.length;const qe=({to:i,preventDefault:l,stopPropagation:h,...E})=>l?(0,a.jsx)("span",{...E}):(0,a.jsx)("a",{href:i,...E}),Ct=({item:i,...l})=>(0,a.jsx)("ul",{...l}),$r=(i,...l)=>{const h={};return Object.keys(i).filter(Boolean).map(E=>{h[E]=T=>i[E](T,...l)}),h},gr=({data:i=[],events:l={},List:h=Ct,Link:E=qe,leftIcon:T,rightIcon:I,isHorizontal:Z,isCollapsed:K,level:G=0,parentOpen:se=!0})=>{const le=K&&!G,ke=!Z&&!K&&!se;return i.map(ye=>{var Fe;const{name:Pe,path:De,icon:Oe,rightIcon:Ce,active:Ne,open:jt,children:dr,linkProps:Ot}=ye,vr=Br(dr),St=ye.id||De||Pe,fr=le?(Fe=ye.title)!=null?Fe:Pe:void 0,Bt=ke?"hidden":"",Tt=Oe!=null?Oe:T,ut=Ce!=null?Ce:I,Rt=Tt?(0,a.jsx)("div",{className:"node-left-icon",children:Tt===!0?(0,a.jsx)("i",{className:"default-left-icon"}):Tt}):null,Hr=Pe?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:Pe})}):null;if(vr){const eo=$r(l,ye,G),Vr=[Bt,jt?"open":""].filter(Boolean).join(" ");return(0,a.jsxs)("li",{className:Vr,"has-children":"true",...eo,children:[(0,a.jsxs)(E,{title:fr,className:`link${Ne?" active":""}`,to:De,preventDefault:!0,stopPropagation:!1,...Ot,children:[Rt,Hr,ut?(0,a.jsx)("div",{className:"node-right-icon",children:ut===!0?(0,a.jsx)("i",{className:"default-right-icon"}):ut}):null]}),(0,a.jsx)(h,{item:ye,children:gr({data:dr,events:l,List:h,Link:E,leftIcon:T,rightIcon:I,isHorizontal:Z,isCollapsed:K,level:G+1,parentOpen:!!jt})})]},St)}return(0,a.jsx)("li",{className:Bt,children:(0,a.jsxs)(E,{title:fr,className:`link${Ne?" active":""}`,to:De,...Ot,children:[Rt,Hr]})},St)})};var Et=gr,Vt=(i,...l)=>(0,a.jsx)("div",{"v-html":i,...l}),lr=re(289),Ft={};Ft.styleTagTransform=L(),Ft.setAttributes=A(),Ft.insert=p().bind(null,"head"),Ft.domAPI=g(),Ft.insertStyleElement=X();var br=d()(lr.Z,Ft),Fr=lr.Z&&lr.Z.locals?lr.Z.locals:void 0;const Rr=i=>(0,a.jsx)("div",{style:{padding:"6px 15px"},children:i}),sr=({activekey:i,tabs:l=[],switchTab:h,trackColor:E,flex:T,...I},Z)=>{var K;const[G,se]=(0,V.useState)(i!=null?i:(K=l[0])==null?void 0:K.key),[le,ke]=(0,V.useState)({}),ye=(0,V.useRef)({}),Fe=(0,V.useRef)();(0,V.useEffect)(()=>{const Oe=ye.current[G];Oe&&Pe(Oe)},[]);const Pe=Oe=>{const{left:Ce,width:Ne}=mt(Oe),jt=mt(Fe.current).left;ke({left:Ce-jt,width:Ne})},De=(Oe,Ce)=>{Oe.stopPropagation(),se(Ce),typeof h=="function"&&h(Ce),Pe(Oe.currentTarget)};return(0,a.jsxs)("div",{className:"tabs-header-wrap",...I,ref:Z,children:[(0,a.jsx)("ul",{className:`tabs-header${T?" flex":""}`,ref:Fe,children:l.map(Oe=>(0,a.jsx)("li",{ref:Ce=>ye.current[Oe.key]=Ce,className:`th-item${G===Oe.key?" active":""}`,onClick:Ce=>De(Ce,Oe.key),children:typeof Oe.renderTabs=="function"?Oe.renderTabs(Oe,G===Oe.key):Rr(Oe.value)},Oe.key))}),(0,a.jsx)("div",{className:"th-track",style:{...le,color:E}})]})};var Mr=(0,V.forwardRef)(sr),ur=(i,l,h="id",E="children")=>{if(!ot(i))return null;const T=I=>{for(let Z=0,K=I.length;Z<K;Z++){const G=I[Z];if(G[h]===l)return[G];if(ot(G[E])){const se=T(G[E]);if(se)return[G].concat(se)}}};return T(i)};const Or=i=>++i;var Gr=()=>{const[,i]=(0,V.useState)(0);return(0,V.useCallback)(()=>i(Or),[])};const Zr=i=>{const{children:l,open:h}=i;let E=0;if(h&&l!=null&&l.length){E=l.length;let T=0;return l.map(I=>T+=Zr(I)),E+T}return E};var Jr=({item:i,style:l,...h})=>(0,a.jsx)("ul",{style:{...l,"--count":Zr(i)},...h}),Tr=re(435),cr={};cr.styleTagTransform=L(),cr.setAttributes=A(),cr.insert=p().bind(null,"head"),cr.domAPI=g(),cr.insertStyleElement=X();var to=d()(Tr.Z,cr),ro=Tr.Z&&Tr.Z.locals?Tr.Z.locals:void 0;const Kr=i=>(0,a.jsx)("ul",{...i}),Qr=(i,l)=>i?Jr:({item:h,...E})=>(0,a.jsx)(Kr,{className:l==="right"?"left":"",...E});var Yr=i=>{var l;const{data:h=[],collapsed:E=!1,type:T="vertical",Link:I,width:Z,bgColor:K,itemHeight:G,collapsedWidth:se,itemPadding:le,style:ke,className:ye,...Fe}=i,Pe=(0,V.useRef)(),De=(0,V.useRef)();(0,V.useEffect)(()=>()=>clearTimeout(Pe.current),[]);const Oe=Gr(),Ce=T==="horizontal",Ne=!Ce&&E,jt={onClick:(Bt,Tt)=>{if(Bt.stopPropagation(),!Ce&&!Ne){const ut=ur(h,Tt.path,"path"),Rt=ut[ut.length-1];Rt.open=!Rt.open,Oe()}},onMouseEnter:(Bt,Tt,ut)=>{Ne&&!ut&&(clearTimeout(Pe.current),De.current.style.width="var(--maxWidth)")},onMouseLeave:(Bt,Tt,ut)=>{Ne&&!ut&&(Pe.current=setTimeout(()=>De.current.style.width="",200))}},dr=(Ce?["huxy-horizontal-tree",ye]:["huxy-tree",ye,Ne?"collapsed":""]).filter(Boolean).join(" "),{float:Ot,...vr}=(l=Fe==null?void 0:Fe.style)!=null?l:{},St={"--bgColor":K,"--itemHeight":G,"--nodeListWidth":Z,...vr};Ce?(St["--itemPadding"]=le,St["--nodeFloat"]=Ot):(St["--width"]=Z,St["--collapsedWidth"]=se);const fr=Qr(!Ce&&!Ne,Ot);return(0,a.jsx)("div",{ref:De,className:dr,style:St,...Fe,children:(0,a.jsx)("div",{className:"huxy-tree-track",children:(0,a.jsx)("ul",{className:"huxy-tree-root",children:Et({data:h,events:jt,List:fr,Link:I,leftIcon:!0,rightIcon:!0,isHorizontal:Ce,isCollapsed:Ne})})})})}}(),y}()})},4544:function(It,he,Ve){(function(_e,Te){It.exports=Te(Ve(7378))})(this,function(_e){return function(){"use strict";var Te={201:function(y,a,m){var d=m(703),k=m.n(d),g=m(414),S=m.n(g),p=S()(k());p.push([y.id,`@keyframes before {
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
`,""]),p.locals={link:"Iuy_e",active:"D3oJg"},a.Z=p},414:function(y){y.exports=function(a){var m=[];return m.toString=function(){return this.map(function(d){var k="",g=typeof d[5]!="undefined";return d[4]&&(k+="@supports (".concat(d[4],") {")),d[2]&&(k+="@media ".concat(d[2]," {")),g&&(k+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),k+=a(d),g&&(k+="}"),d[2]&&(k+="}"),d[4]&&(k+="}"),k}).join("")},m.i=function(d,k,g,S,p){typeof d=="string"&&(d=[[null,d,void 0]]);var z={};if(g)for(var A=0;A<this.length;A++){var q=this[A][0];q!=null&&(z[q]=!0)}for(var X=0;X<d.length;X++){var F=[].concat(d[X]);g&&z[F[0]]||(typeof p!="undefined"&&(typeof F[5]=="undefined"||(F[1]="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {").concat(F[1],"}")),F[5]=p),k&&(F[2]&&(F[1]="@media ".concat(F[2]," {").concat(F[1],"}")),F[2]=k),S&&(F[4]?(F[1]="@supports (".concat(F[4],") {").concat(F[1],"}"),F[4]=S):F[4]="".concat(S)),m.push(F))}},m}},703:function(y){y.exports=function(a){return a[1]}},53:function(y,a,m){var d,k=m(899),g=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,z=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function q(X,F,L){var W,te={},pe=null,be=null;L!==void 0&&(pe=""+L),F.key!==void 0&&(pe=""+F.key),F.ref!==void 0&&(be=F.ref);for(W in F)p.call(F,W)&&!A.hasOwnProperty(W)&&(te[W]=F[W]);if(X&&X.defaultProps)for(W in F=X.defaultProps,F)te[W]===void 0&&(te[W]=F[W]);return{$$typeof:g,type:X,key:pe,ref:be,props:te,_owner:z.current}}d=S,a.jsx=q,a.jsxs=q},458:function(y,a,m){y.exports=m(53)},748:function(y){var a=[];function m(g){for(var S=-1,p=0;p<a.length;p++)if(a[p].identifier===g){S=p;break}return S}function d(g,S){for(var p={},z=[],A=0;A<g.length;A++){var q=g[A],X=S.base?q[0]+S.base:q[0],F=p[X]||0,L="".concat(X," ").concat(F);p[X]=F+1;var W=m(L),te={css:q[1],media:q[2],sourceMap:q[3],supports:q[4],layer:q[5]};if(W!==-1)a[W].references++,a[W].updater(te);else{var pe=k(te,S);S.byIndex=A,a.splice(A,0,{identifier:L,updater:pe,references:1})}z.push(L)}return z}function k(g,S){var p=S.domAPI(S);p.update(g);var z=function(A){if(A){if(A.css===g.css&&A.media===g.media&&A.sourceMap===g.sourceMap&&A.supports===g.supports&&A.layer===g.layer)return;p.update(g=A)}else p.remove()};return z}y.exports=function(g,S){S=S||{},g=g||[];var p=d(g,S);return function(z){z=z||[];for(var A=0;A<p.length;A++){var q=p[A],X=m(q);a[X].references--}for(var F=d(z,S),L=0;L<p.length;L++){var W=p[L],te=m(W);a[te].references===0&&(a[te].updater(),a.splice(te,1))}p=F}}},736:function(y){var a={};function m(k){if(typeof a[k]=="undefined"){var g=document.querySelector(k);if(window.HTMLIFrameElement&&g instanceof window.HTMLIFrameElement)try{g=g.contentDocument.head}catch(S){g=null}a[k]=g}return a[k]}function d(k,g){var S=m(k);if(!S)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");S.appendChild(g)}y.exports=d},706:function(y){function a(m){var d=document.createElement("style");return m.setAttributes(d,m.attributes),m.insert(d,m.options),d}y.exports=a},567:function(y,a,m){function d(k){var g=m.nc;g&&k.setAttribute("nonce",g)}y.exports=d},306:function(y){function a(k,g,S){var p="";S.supports&&(p+="@supports (".concat(S.supports,") {")),S.media&&(p+="@media ".concat(S.media," {"));var z=typeof S.layer!="undefined";z&&(p+="@layer".concat(S.layer.length>0?" ".concat(S.layer):""," {")),p+=S.css,z&&(p+="}"),S.media&&(p+="}"),S.supports&&(p+="}");var A=S.sourceMap;A&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),g.styleTagTransform(p,k,g.options)}function m(k){if(k.parentNode===null)return!1;k.parentNode.removeChild(k)}function d(k){var g=k.insertStyleElement(k);return{update:function(S){a(g,k,S)},remove:function(){m(g)}}}y.exports=d},62:function(y){function a(m,d){if(d.styleSheet)d.styleSheet.cssText=m;else{for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(document.createTextNode(m))}}y.exports=a},899:function(y){y.exports=_e}},ge={};function ee(y){var a=ge[y];if(a!==void 0)return a.exports;var m=ge[y]={id:y,exports:{}};return Te[y](m,m.exports,ee),m.exports}(function(){ee.n=function(y){var a=y&&y.__esModule?function(){return y.default}:function(){return y};return ee.d(a,{a}),a}})(),function(){ee.d=function(y,a){for(var m in a)ee.o(a,m)&&!ee.o(y,m)&&Object.defineProperty(y,m,{enumerable:!0,get:a[m]})}}(),function(){ee.o=function(y,a){return Object.prototype.hasOwnProperty.call(y,a)}}(),function(){ee.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})}}(),function(){ee.nc=void 0}();var re={};return function(){ee.r(re),ee.d(re,{Link:function(){return jr},emitRoute:function(){return zr},getRoute:function(){return Lr},useRoute:function(){return Sr},useRouter:function(){return ar}});var y=ee(899),a=ee.n(y),m=s=>Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),d=s=>m(s)==="array",k=s=>m(s)==="object",g=s=>(s==null?void 0:s.$$typeof)&&typeof s.$$typeof=="symbol"&&s.$$typeof.description==="react.element",S=s=>s==null?void 0:s.__v_isVNode,p=(s,f)=>Object.prototype.hasOwnProperty.call(s!=null?s:{},f);const z=s=>{if(!d(s)&&!k(s))return s;const f=d(s)?[]:{};for(const C in s)if(p(s,C)){const v=s[C];f[C]=g(v)||S(v)||typeof v!="object"?v:v!==s?z(v):"cyclic"}else Object.setPrototypeOf(f,{[C]:s[C]});return f};var A=z,q=s=>m(s)==="function",X=s=>m(s)==="promise"||k(s)&&q(s.then),F=(s,f=12e4,C="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!X(s))return{};let v=null,x=null;return{promiseFn:new Promise((_,R)=>{v=(Y="canceled")=>{clearTimeout(x),_({canceled:!0,errMsg:Y})},f&&(f=typeof f!="number"?12e4:f,x=setTimeout(()=>v(C),f)),s.then(Y=>{clearTimeout(x),_({result:Y,errMsg:!1})}).catch(Y=>{clearTimeout(x),R(Y)})}),cancelFn:v}},L=s=>s?s.charAt(s.length-1)==="/"?s.slice(0,-1):s:"",W=ee(458),te=(s,f)=>(0,W.jsx)("div",{dangerouslySetInnerHTML:{__html:s},...f}),pe=s=>{const{error:f={},info:C=""}=s||{},{message:v,stack:x,errMsg:_}=f;let R=_||x||f.toString();R=`${R}
${C}`.replace(/\r|\n|\r\n/g,"<br/>"),R=R.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),R=R.replace(/\s/g,"&nbsp;");const Y=v==null?void 0:v.slice(0,120).split(". ").slice(0,2).join(". ");return(0,W.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[te(R,{style:{color:"red"}}),Y&&(0,W.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${Y}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},be=()=>{const s={};return{on:(f,C)=>{s[f]||(s[f]=[]),s[f].indexOf(C)===-1&&s[f].push(C)},emit:(f,C)=>{s[f]&&s[f].map(v=>v(C))},off:(f,C=null)=>{if(s[f]){if(typeof C!="function")return delete s[f];const v=s[f].indexOf(C);v>-1&&(s[f].splice(v,1),s[f].length||delete s[f])}}}};const Xe=s=>{const f={};for(let C in s)p(s,C)||(f[C]=s[C]);return f};var nt=(s,f)=>{if(!k(s))return f;if(!k(f))return s;const C={...Xe(s),...Xe(f)},v={...s,...f};return Object.keys(C).map(x=>{Object.setPrototypeOf(v,{[x]:C[x]})}),v},V=()=>{const{on:s,emit:f,off:C}=be(),v={};return{getState:x=>A(v[x]),setState:(x,_=!1)=>{if(typeof x=="function"&&(x=x(A(v))),!k(x))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const R=A(x);Object.keys(R).map(Y=>{const M=v[Y],D=R[Y],de=k(D)&&k(M)?nt(M,D):D;!_&&f(Y,de),v[Y]=de})},subscribe:(x,_)=>(s(x,_),()=>C(x,_)),unsubscribe:C,clean:x=>{typeof x=="string"?v[x]=void 0:Array.isArray(x)?x.map(_=>v[_]=void 0):Object.keys(v).map(_=>v[_]=void 0)}}},Ye=s=>(f,C)=>{const[v,x]=(0,y.useState)(()=>{const M=s==null?void 0:s.getState(f);return M!==void 0?M:(C!==void 0&&(s==null||s.setState({[f]:C},!0)),C)}),_=(0,y.useCallback)(M=>s==null?void 0:s.setState({[f]:typeof M=="function"?M(s==null?void 0:s.getState(f)):M}),[]),R=(0,y.useCallback)(M=>s==null?void 0:s.subscribe(f,M),[]),Y=(0,y.useCallback)((M=M)=>s==null?void 0:s.clean(M),[]);return(0,y.useEffect)(()=>{s==null||s.subscribe(f,M=>x(M))},[]),[v,_,R,Y]};const Le=V(),Me=Ye(Le),Mt=be(),ct=be(),it="push-emitter",B="replace-emitter",oe="useRoute-emitter",J={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},ve="/404",ze={getState:()=>history.state,go:s=>history.go(s),forward:()=>history.forward(),back:()=>history.back()},Qe=(s,f,C,v,x=[])=>{const _=M=>{for(let D=0,de=M.length;D<de;D++){const fe=M[D],me=fe[v].split("?")[0];if(new RegExp("^"+me.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return fe;if(d(fe[C])){const ce=_(fe[C]);if(ce)return ce}}},R=_(s);if(!R)return ve;const{redirect:Y}=R;return Y?x.includes(Y)?x:(x.push(Y),Qe(s,Y.split("?")[0],C,v,x)):x[x.length-1]},Ge=(s,f,C,v,x)=>{if(!d(s))return null;const _=de=>{const fe=de.split("/"),me=f.split("/"),ce={};return fe.map((we,Ee)=>we.indexOf(":")===0&&(ce[we.slice(1)]=me[Ee])),ce},R=(de,fe)=>{const me=[],ce=fe.split("/:")[0];for(let we=0,Ee=de.length;we<Ee;we++){const ie=de[we];if(ie[x]===ce){ie.active=!0;const{name:Q,title:Ie,icon:je,params:Be}=ie;me.push({name:Q,title:Ie,icon:je,params:Be,[x]:ce})}else if(fe.indexOf(`${ie[x]}/`)===0){ie.active=!0;const Q=_(ie[x]),Ie=Object.keys(Q).map(rt=>Q[rt]).join("/"),{name:je,title:Be,icon:He}=ie,Ke=Ie?`${ce}/${Ie}`:ie[x];me.push({name:je,title:Be,icon:He,[x]:Ke,params:{...ie.params,...Q}})}else if(ie[x]===fe){ie.active=!0;const Q=_(ie[x]),{[v]:Ie,...je}=ie;me.push({...je,[x]:f,params:{...je.params,...C,...Q}})}}return me},Y=(de,fe)=>{for(let me=0,ce=de.length;me<ce;me++){const we=de[me];if(fe.indexOf(`${we[x]}/`)===0){we.active=!0;return}}},M=de=>{for(let fe=0,me=de.length;fe<me;fe++){const ce=de[fe],we=(ce[x]||"").split("?")[0];if(we===f){ce.hideMenu&&Y(de,ce.parentPath||we),ce.active=!0;const{[v]:Ee,...ie}=ce;return[{...ie,params:{...ie.params,...C}}]}if(new RegExp("^"+we.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return R(de,we);if(d(ce[v])){const Ee=M(ce[v]);if(Ee){ce.active=!0,ce.open=!0;const{[v]:ie,...Q}=ce;return[Q,...Ee]}}}},D=M(s)||[];return{result:s,current:D}},dt=(s,f,C)=>s.filter(v=>v.hideMenu||v[C].indexOf("/:")>-1?!1:(d(v[f])&&(v[f]=dt(v[f],f,C)),!0));var We=(s,f,C,v="children",x="path")=>{const _=Qe(s,f,v,x);if(_)return{redirect:_};const{result:R,current:Y}=Ge(s,f,C,v,x),M=dt(R,v,x);return{current:Y,menu:M}},Ze=s=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(s);const zt=(s,f)=>{const C=["#/","/"],v=C[!!f-0];if(!s||C.includes(s))return v;const x=s.charAt(s.length-1)==="/"?s.slice(0,-1):s;return f||x.indexOf("#/")>-1?x:`#${x}`},Je=(s,f,C,v=!1)=>{const x=zt(f,C);return v?x:C?s&&x==="/"?s:`${s}${x}`:s?`${s}/${x}`:x},qt=(s,f,C,v,x,_)=>{if(!d(s))return s;const R=(Y,M="")=>Y.filter(D=>!D.denied).map(D=>{if(!_&&!D.exact&&!Ze(D[v])){(!D[v]||D[v]==="javascript:;")&&(D[v]="");const de=D[v].charAt(0)==="/"&&M.charAt(M.length-1)==="/"?D[v].slice(1):D[v].charAt(0)!=="/"&&M.charAt(M.length-1)!=="/"?`/${D[v]}`:D[v];D[v]=M?M+de:Je(x,de,f)}return D.redirect&&(D.redirect=Je(x,D.redirect,f)),d(D[C])&&(D[C]=R(D[C],D[v]),!D.redirect&&D[C].length&&(D.redirect=D[C][0][v])),D});return R(s)};var at=s=>{if(!k(s))return"";const f=[];return Object.keys(s).map((C,v)=>{const x=v>0?"&":"?";f.push(`${x}${C}=${s[C]}`)}),f.join("")},$t=(s="")=>{const[f,C]=s.split("?");if(C){const v={};return C.split("&").map(x=>{const[_,R]=x.split("=");v[_]=R}),{path:f,params:v}}return{path:f}};const Xt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Gt=(s,f)=>{for(let C=s.length-1,v;v=s[C--];){const{title:x,name:_}=v;if(typeof x=="string"&&x.length)return document.title=x;if((x==null||x===!0)&&_)return document.title=f?`${_}-${f}`:_;if(f)return document.title=f}},Wt=s=>{const{pathname:f,search:C,hash:v}=location;if(s){const Y=zt(f,s),M=decodeURIComponent(`${Y}${C}`),{params:D}=$t(M);return{path:M,params:D}}const x=decodeURIComponent(zt(v,s)),{params:_}=$t(x),R=L(f);return{path:R?`${R}/${x}`:x,params:_}},ft=(s,f,C)=>{typeof s=="function"&&s({...f,stay:new Date-C})},et=(s,f,C,v)=>{let x,_,R;if(typeof s=="string")x=s;else if(k(s))x=s.path,_=s.params,R=s.query;else return;!x||x==="."||x==="./"?x=v:x.indexOf("./")===0?x=`${v.split("?")[0]}${x.replace("./","/")}`:x.indexOf("../")===0&&(x=`${v.split("?")[0].split("/").slice(0,-1).join("/")}${x.replace("../","/")}`),x=Je(f,x,C,s==null?void 0:s.exact);const Y=$t(x);x=Y.path;const M={...Y.params,...R},D=at(M);return x=`${x}${D}`,_={..._,...M},{path:x,params:_}},Jt=(s,f)=>{const C=s.split(f);return C.length>1?["","/"].includes(C[1].slice(0,1)):!1},hr=be();var Kt=s=>{const{on:f,emit:C,off:v}=hr;return{on:x=>f(s,x),emit:x=>C(s,x),off:x=>v(s,x)}},ht=s=>(f,C)=>{const{getState:v,setState:x,subscribe:_,unsubscribe:R,clean:Y}=s;return C!==void 0&&x({[f]:C},!0),{getState:()=>v(f),setState:(M,D)=>x({[f]:M},D),subscribe:M=>_(f,M),unsubscribe:()=>R(f),clean:()=>Y(f)}};const Pt=V();var bt=ht(Pt);const Qt=Kt("push-emitter"),lt=Kt("replace-emitter"),pt=bt("route-store"),er=be(),tr=V(),rr=Ye(tr);var mt=()=>![typeof window,typeof document].includes("undefined"),u=s=>{if(!mt())return;const f=document.createElement("div");return f.innerHTML=s,f.children[0]},b=Object.defineProperty,j=(s,f,C)=>f in s?b(s,f,{enumerable:!0,configurable:!0,writable:!0,value:C}):s[f]=C,O=(s,f,C)=>(j(s,typeof f!="symbol"?f+"":f,C),C);class P extends a().Component{constructor(){super(...arguments),O(this,"state",{error:null})}static getDerivedStateFromError(f){return{error:f}}componentDidCatch(f,C){const{errorReport:v}=this.props;typeof v=="function"&&v({error:f,info:C.componentStack})}render(){const{error:f}=this.state,{fallback:C,children:v}=this.props;return f?C(f):v}}var H=({children:s,report:f})=>{var C;const v=(0,y.useRef)();return(C=v.current)!=null&&C.state&&(v.current.state.error=null),(0,W.jsx)(P,{ref:v,fallback:(x,_)=>pe({error:x,info:_}),errorReport:f,children:s})},ue=ee(748),ae=ee.n(ue),ne=ee(306),$e=ee.n(ne),vt=ee(736),wt=ee.n(vt),st=ee(567),Ae=ee.n(st),or=ee(706),xt=ee.n(or),kt=ee(62),yt=ee.n(kt),Ue=ee(201),tt={};tt.styleTagTransform=yt(),tt.setAttributes=Ae(),tt.insert=wt().bind(null,"head"),tt.domAPI=$e(),tt.insertStyleElement=xt();var Xr=ae()(Ue.Z,tt),pr=Ue.Z&&Ue.Z.locals?Ue.Z.locals:void 0,mr=({global:s,absolute:f})=>(0,W.jsx)("div",{className:`spinner${s?" global":""}${f?" absolute":""}`,children:(0,W.jsx)("figure",{className:"spinning"})}),Ir=()=>{const s=(0,y.useRef)([]);return(0,y.useEffect)(()=>()=>{s.current.map(f=>f.cancelFn()),s.current=[]},[]),{cancelablePromise:(0,y.useCallback)((f,C=!0)=>{const v=F(f,C);return s.current.indexOf(v)===-1&&s.current.push(v),v.promiseFn},[])}},kr=(s={})=>{const{cancelablePromise:f}=Ir(),[C,v]=(0,y.useState)(s),x=(0,y.useRef)({}),_=(0,y.useRef)({}),R=(0,y.useCallback)((M=null)=>{Array.isArray(M)&&M.length?M.map(D=>x.current[D]=s[D]):x.current=s},[]),Y=(0,y.useCallback)((M,D,de=!1)=>{const fe=Object.keys(M),me=JSON.stringify(fe.sort());if(!_.current[me]){_.current[me]=!0,de&&R(Array.isArray(de)?de:fe),fe.map(ce=>{x.current[ce]||(x.current[ce]={}),x.current[ce].pending=!0}),v({...x.current});for(let ce=0,we=fe.length;ce<we;ce++){const Ee=fe[ce];f(M[Ee]).then(ie=>{let{result:Q,errMsg:Ie}=ie;ce===we-1&&(_.current[me]=!1),typeof D=="function"&&(Q=D(Q)||Q),x.current[Ee]={...Q,pending:!1},Ie===!1&&v({...x.current})}).catch(ie=>{throw ce===we-1&&(_.current[me]=!1),x.current[Ee]={error:ie,pending:!1},v({...x.current}),ie})}}},[]);return[C,Y,R]};const Zt=s=>Object.keys(s).length;var Cr=s=>{const{Comp:f,restResolve:C,loadPromise:v,params:x,children:_}=s,[R,Y]=kr(),[M,D]=kr();return(0,y.useEffect)(()=>{Zt(C)&&Y(C),Zt(v)&&D(v)},[C,v]),(0,y.useEffect)(()=>{const de=Zt(R);de&&de===Zt(C)&&x.store.setState(R)},[R]),(0,W.jsx)(f,{...x,...R,...M,children:_})};const Pr=s=>s===!1?null:g(s)?s:q(s)?(0,W.jsx)(s,{}):(0,W.jsx)(mr,{}),Nr=({Loading:s,ErrorBoundary:f,loadedComp:C})=>{const v=(0,W.jsx)(y.Suspense,{fallback:Pr(s),children:C});return f===!1?v:q(f)?(0,W.jsx)(f,{children:v}):(0,W.jsx)(H,{children:v})};var xr=({Comp:s,routerProps:f,children:C})=>{const{params:v,...x}=f,{loading:_,errorBoundary:R,...Y}=v,M=(0,W.jsx)(Cr,{Comp:s,...x,params:Y,children:C});return Nr({Loading:_,ErrorBoundary:R,loadedComp:M})};const nr={},yr=(s,f,C,v)=>X(C)?C.then(x=>{var _;return xr({Comp:s,routerProps:f,children:(_=x.default)!=null?_:x})}):xr({Comp:s,routerProps:f,children:C}),Dr=(s,f,C)=>{const v={},x={};return k(s)?(Object.keys(s).map(_=>{const R=f.getState(_);R==null?x[_]=s[_](C):v[_]=R}),{cachedResolve:v,restResolve:x}):{cachedResolve:v,restResolve:x}},ir=(s,f)=>{if(!k(s))return{};const C={};return Object.keys(s).map(v=>C[v]=s[v](f)),C};var _r=s=>{const{current:f,menu:C,...v}=s,x=f.map(Y=>{const{component:M,resolve:D,loadData:de,loading:fe,errorBoundary:me,icon:ce,...we}=Y;return we}),_=[...f].filter(Y=>Y.component),R=(Y=0)=>{if(!_.length)return null;const M=_.shift(),{component:D,resolve:de,loadData:fe,icon:me,key:ce,...we}=M;if(typeof D=="function"||X(D)){const Ee=we.path;let ie=nr[Ee];const{cachedResolve:Q,restResolve:Ie}=Dr(de,v.store,we),je={loadPromise:ir(fe,we),restResolve:Ie,params:{current:x,...v,...we,...Q}},Be=R(Y+1);if(ie)return yr(ie,je,Be,Ee);try{ie=D(),ie=g(ie)?D:ie}catch(He){ie=D}return X(ie)?ie.then(He=>{var Ke;return ie=(Ke=He.default)!=null?Ke:He,nr[Ee]=ie,yr(ie,je,Be,Ee)}):(nr[Ee]=ie,yr(ie,je,Be,Ee))}return typeof D=="string"?u(D):D};return R()},ar=s=>{const[f,C]=(0,y.useState)(s),[v,x]=(0,y.useState)(),[_,R]=(0,y.useState)(),Y=(0,y.useRef)(),M=(0,y.useRef)(),D=(0,y.useRef)(),de=(0,y.useRef)(),fe=()=>{typeof Y.current=="function"&&(Y.current({cancel:J.cancelMsg}),Y.current=null)},me=(0,y.useCallback)(Q=>{typeof Q=="function"?C(Ie=>({...Ie,...Q(Ie)})):k(Q)&&C(Ie=>({...Ie,...Q}))},[]),ce=(Q,Ie="pushState")=>{const{basepath:je,browserRouter:Be}=de.current,He=D.current,{path:Ke,params:rt}=et(Q,je,Be,He);Ke!==He&&ie({inputPath:Ke,inputParams:rt},()=>history[Ie](Q==null?void 0:Q.state,"",Ke))},we=(0,y.useCallback)(Q=>ce(Q),[]),Ee=(0,y.useCallback)(Q=>ce(Q,"replaceState"),[]),ie=(0,y.useCallback)(({inputPath:Q="",inputParams:Ie={}},je)=>{const Be=+new Date,{browserRouter:He,childKey:Ke,idKey:rt,title:gt,routers:Yt,beforeRender:At,afterRender:Lt,basepath:Ht,allowedNotFound:ot,...Br}=de.current;if(!Q){const{path:qe,params:Ct}=Wt(He);Q=qe,Ie={...Ie,...Ct}}new Promise((qe,Ct)=>{Yt!=null&&Yt.length||Ct("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),Q!==D.current&&typeof At=="function"?At({path:Q,params:Ie,prevPath:D.current},qe,Ct):qe()}).then(qe=>{var Ct,$r;if(qe===!1)return;const gr=qe==null?void 0:qe.path;if(gr&&Je(Ht,gr,He)!==Q){Ee(qe);return}M.current=(Ct=M.current)!=null?Ct:Q;const{redirect:Et,current:Vt,menu:lr}=We(A(Yt),Q.split("?")[0],Ie,Ke,rt);if(Et){if(ot&&Et===ve&&(typeof ot=="boolean"||typeof ot=="string"&&Jt(M.current,ot)||d(ot)&&ot.find(Fr=>Jt(M.current,Fr))))return;if(d(Et)){console.error(`\u522B\u95F9\uFF0C[${[Q,...Et].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return Et===ve?Ee({path:Et}):we({path:Et,exact:!0})}je==null||je(),(Q==null?void 0:Q.split("?")[0])!==(($r=D.current)==null?void 0:$r.split("?")[0])&&Xt(),Gt(Vt,gt);const Ft={eventBus:er,store:tr,useStore:rr,...Br,updateRouter:me,emitRouter:pt.subscribe,router:{push:we,replace:Ee},current:Vt,menu:lr,inputPath:M.current,prevPath:D.current,basepath:Ht,title:gt,history:ze};pt.setState({...Ft,browserRouter:He});const br=_r(Ft);if(D.current=Q,M.current=null,fe(),X(br)){const{promiseFn:Fr,cancelFn:Rr}=F(br,{delay:J.delay,msg:{timeout:J.timeoutMsg}});return Y.current=Rr,R(!0),Fr.then(sr=>{Y.current=null;const{result:Mr,errMsg:ur}=sr,Or=ur===!1?Mr:ur!=null&&ur.timeout?pe({error:{errMsg:`${Q} ${ur.timeout}`}}):null;Or&&(R(!1),ft(Lt,Vt.slice(-1)[0],Be),x(Or))}).catch(sr=>{throw Y.current=null,R(!1),ft(Lt,Vt.slice(-1)[0],Be),x(pe({error:sr})),sr})}ft(Lt,Vt.slice(-1)[0],Be),x(br)}).catch(qe=>{throw x(pe({error:qe})),qe})},[]);return(0,y.useEffect)(()=>{const{childKey:Q="children",idKey:Ie="path",browserRouter:je=!1,routers:Be=[],basepath:He="",exact:Ke=!1,inputPath:rt="",inputParams:gt={},...Yt}=f,At=L(He),Lt=qt(A(Be),je,Q,Ie,At,Ke);de.current={...Yt,childKey:Q,idKey:Ie,browserRouter:je,routers:Lt,basepath:At};const Ht=je?"popstate":"hashchange",ot=()=>ie({});return ie({inputPath:rt,inputParams:gt}),Qt.on(we),lt.on(Ee),window.addEventListener(Ht,ot,!1),()=>{fe(),Qt.off(we),lt.off(Ee),window.removeEventListener(Ht,ot,!1)}},[f]),{updateRouter:me,output:v,loading:_}},Er=s=>{const{to:f,onClick:C,preventDefault:v,stopPropagation:x=!0,exact:_=!0,target:R,...Y}=s,M=()=>{const D=typeof f=="string"?{exact:_,path:f}:{exact:_,...f};Qt.emit(D)};return D=>{var de;if(D.preventDefault(),x&&D.stopPropagation(),!(Y!=null&&Y.disabled)){if(!v){if(R){const{browserRouter:fe}=pt.getState(),me=typeof f=="string"?f:(de=f==null?void 0:f.path)!=null?de:"",ce=at(f==null?void 0:f.query),we=fe||me.indexOf("#/")>-1||Ze(me);window==null||window.open(`${we?"":"#"}${me}${ce}`,R);return}M()}typeof C=="function"&&C()}}},Nt=ee(982),Dt={};Dt.styleTagTransform=yt(),Dt.setAttributes=Ae(),Dt.insert=wt().bind(null,"head"),Dt.domAPI=$e(),Dt.insertStyleElement=xt();var Wr=ae()(Nt.Z,Dt),_t=Nt.Z&&Nt.Z.locals?Nt.Z.locals:void 0;const Ar=s=>{if(!s)return _t.link;const f=s.trim().split(" ").filter(Boolean),C=f.find(v=>v==="active")?[_t.active]:[];return[_t.link,...C,...f].join(" ")};var jr=s=>{const{to:f,onClick:C,preventDefault:v,stopPropagation:x,exact:_,target:R,className:Y,...M}=s;return(0,W.jsx)("span",{onClick:Er(s),className:Ar(Y),...M})},Sr=()=>{const[s,f]=(0,y.useState)(pt.getState());return(0,y.useEffect)(()=>pt.subscribe(C=>f(C)),[]),s};const Lr=pt.getState,zr=pt.subscribe}(),re}()})},2445:function(It,he,Ve){(function(_e,Te){It.exports=Te(Ve(7378))})(this,function(_e){return function(){"use strict";var Te={53:function(y,a,m){var d,k=m(899),g=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,z=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function q(X,F,L){var W,te={},pe=null,be=null;L!==void 0&&(pe=""+L),F.key!==void 0&&(pe=""+F.key),F.ref!==void 0&&(be=F.ref);for(W in F)p.call(F,W)&&!A.hasOwnProperty(W)&&(te[W]=F[W]);if(X&&X.defaultProps)for(W in F=X.defaultProps,F)te[W]===void 0&&(te[W]=F[W]);return{$$typeof:g,type:X,key:pe,ref:be,props:te,_owner:z.current}}d=S,a.jsx=q,d=q},458:function(y,a,m){y.exports=m(53)},899:function(y){y.exports=_e}},ge={};function ee(y){var a=ge[y];if(a!==void 0)return a.exports;var m=ge[y]={exports:{}};return Te[y](m,m.exports,ee),m.exports}(function(){ee.d=function(y,a){for(var m in a)ee.o(a,m)&&!ee.o(y,m)&&Object.defineProperty(y,m,{enumerable:!0,get:a[m]})}})(),function(){ee.o=function(y,a){return Object.prototype.hasOwnProperty.call(y,a)}}(),function(){ee.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})}}();var re={};return function(){ee.r(re),ee.d(re,{createContainer:function(){return a},useAsync:function(){return z},useCancelablePromise:function(){return p},useClickAway:function(){return X},useDebounce:function(){return L},useDelayState:function(){return pe},useEleResize:function(){return Mt},useEvent:function(){return ct},useFirstMounted:function(){return W},useInterval:function(){return it},usePrevious:function(){return B},useRaf:function(){return Me},useScroll:function(){return J},useSearch:function(){return Xt},useStateFromProps:function(){return Gt},useStore:function(){return Kt},useTime:function(){return er},useUpdate:function(){return rr},useUpdateEffect:function(){return te},useWinResize:function(){return mt}});var y=ee(899),a=u=>(b,j)=>{const[O,P]=(0,y.useState)(()=>{const ne=u==null?void 0:u.getState(b);return ne!==void 0?ne:(j!==void 0&&(u==null||u.setState({[b]:j},!0)),j)}),H=(0,y.useCallback)(ne=>u==null?void 0:u.setState({[b]:typeof ne=="function"?ne(u==null?void 0:u.getState(b)):ne}),[]),ue=(0,y.useCallback)(ne=>u==null?void 0:u.subscribe(b,ne),[]),ae=(0,y.useCallback)((ne=ne)=>u==null?void 0:u.clean(ne),[]);return(0,y.useEffect)(()=>{u==null||u.subscribe(b,ne=>P(ne))},[]),[O,H,ue,ae]},m=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),d=u=>m(u)==="object",k=u=>m(u)==="function",g=u=>m(u)==="promise"||d(u)&&k(u.then),S=(u,b=12e4,j="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!g(u))return{};let O=null,P=null;return{promiseFn:new Promise((H,ue)=>{O=(ae="canceled")=>{clearTimeout(P),H({canceled:!0,errMsg:ae})},b&&(b=typeof b!="number"?12e4:b,P=setTimeout(()=>O(j),b)),u.then(ae=>{clearTimeout(P),H({result:ae,errMsg:!1})}).catch(ae=>{clearTimeout(P),ue(ae)})}),cancelFn:O}},p=()=>{const u=(0,y.useRef)([]);return(0,y.useEffect)(()=>()=>{u.current.map(b=>b.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,y.useCallback)((b,j=!0)=>{const O=S(b,j);return u.current.indexOf(O)===-1&&u.current.push(O),O.promiseFn},[])}},z=(u={})=>{const{cancelablePromise:b}=p(),[j,O]=(0,y.useState)(u),P=(0,y.useRef)({}),H=(0,y.useRef)({}),ue=(0,y.useCallback)((ne=null)=>{Array.isArray(ne)&&ne.length?ne.map($e=>P.current[$e]=u[$e]):P.current=u},[]),ae=(0,y.useCallback)((ne,$e,vt=!1)=>{const wt=Object.keys(ne),st=JSON.stringify(wt.sort());if(!H.current[st]){H.current[st]=!0,vt&&ue(Array.isArray(vt)?vt:wt),wt.map(Ae=>{P.current[Ae]||(P.current[Ae]={}),P.current[Ae].pending=!0}),O({...P.current});for(let Ae=0,or=wt.length;Ae<or;Ae++){const xt=wt[Ae];b(ne[xt]).then(kt=>{let{result:yt,errMsg:Ue}=kt;Ae===or-1&&(H.current[st]=!1),typeof $e=="function"&&(yt=$e(yt)||yt),P.current[xt]={...yt,pending:!1},Ue===!1&&O({...P.current})}).catch(kt=>{throw Ae===or-1&&(H.current[st]=!1),P.current[xt]={error:kt,pending:!1},O({...P.current}),kt})}}},[]);return[j,ae,ue]},A=(u,b)=>Object.prototype.hasOwnProperty.call(u!=null?u:{},b),q=u=>A(u,"current"),X=(u,b,j="click")=>{(0,y.useEffect)(()=>{const O=H=>{const ue=q(u)?u.current:u;ue!=null&&ue.contains&&!ue.contains(H.target)&&b(H)},P=typeof j=="string"?[j]:j;return P.map(H=>{document.addEventListener(H,O,!1)}),()=>{P.map(H=>{document.removeEventListener(H,O,!1)})}},[u,b,j])},F=(u=()=>{},b=60)=>{let j=null;return function(...O){clearTimeout(j),j=setTimeout(()=>u.apply(this,O),b)}},L=(u,b=60)=>(0,y.useMemo)(()=>F(u,b),[b]),W=()=>{const u=(0,y.useRef)(!0);return u.current?(u.current=!1,!0):!1},te=(u,b=[])=>{const j=W();(0,y.useEffect)(()=>{if(!j)return u()},b)},pe=(u,b=450)=>{const[j,O]=(0,y.useState)(u);return te(()=>{let P;return u||b===0?O(u):P=setTimeout(()=>O(u),b),()=>P&&clearTimeout(P)},[u]),[j,O]},be=()=>![typeof window,typeof document].includes("undefined"),Xe=u=>m(u).indexOf("element")>-1,nt=(u=null)=>{var b,j;return be()?Xe(u)?{width:u.clientWidth,height:u.clientHeight}:{width:(b=window.innerWidth)!=null?b:document.documentElement.clientWidth,height:(j=window.innerHeight)!=null?j:document.documentElement.clientHeight}:{width:0,height:0}},V=(u,b)=>{var j;const O=[],P=(j=u.children)!=null?j:[];for(let H=0,ue=P.length;H<ue;H++){const ae=P[H];ae.className.indexOf(b)>-1&&O.push(ae)}return O.length===0?null:O.length===1?O[0]:O};const Ye=(u,b)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const j=document.createElement("object");return j.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),j.setAttribute("class","resize-sensor"),j.onload=()=>{j.contentDocument.defaultView.addEventListener("resize",b,!1),b()},j.type="text/html",u.appendChild(j),j.data="about:blank",j};var Le=(u,b=60)=>{if(!be())return;u=q(u)?u.current:u!=null?u:document.body;let j=V(u,"resize-sensor"),O=[];const P=F(()=>O.map(ne=>ne(u)),b),H=ne=>{V(u,"resize-sensor")||(j=Ye(u,P)),O.indexOf(ne)===-1&&O.push(ne)},ue=ne=>{const $e=O.indexOf(ne);$e!==-1&&O.splice($e,1),O.length===0&&j&&ae()},ae=()=>{j&&j.parentNode&&(j.contentDocument&&j.contentDocument.defaultView.removeEventListener("resize",P,!1),j.parentNode.removeChild(j),j=void 0,O=[])};return{element:u,bind:H,unbind:ue,destroy:ae}},Me=(u={})=>{const b=(0,y.useRef)(0),[j,O]=(0,y.useState)(u),P=(0,y.useCallback)(H=>{cancelAnimationFrame(b.current),b.current=requestAnimationFrame(()=>O(H))},[]);return(0,y.useEffect)(()=>()=>cancelAnimationFrame(b.current),[]),[j,P]},Mt=(u=null,b=60)=>{const j=q(u)?u.current:u,{bind:O,destroy:P}=Le(j,b),[H,ue]=Me(nt(j));return(0,y.useEffect)(()=>(O(()=>j&&ue(nt(j))),()=>P()),[j]),H},ct=u=>{const b=(0,y.useRef)(null);return(0,y.useLayoutEffect)(()=>{b.current=u}),(0,y.useCallback)(b.current,[])},it=(u,b)=>{const j=(0,y.useRef)();(0,y.useEffect)(()=>{j.current=u},[u]),(0,y.useEffect)(()=>{if(b){const O=setInterval(()=>j.current(),b);return()=>clearInterval(O)}},[b])},B=u=>{const b=(0,y.useRef)();return(0,y.useEffect)(()=>{b.current=u},[u]),b.current},oe=(u=null)=>{var b,j,O,P;return be()?Xe(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:(j=(b=window.pageXOffset)!=null?b:document.documentElement.scrollLeft)!=null?j:document.body.scrollLeft,top:(P=(O=window.pageYOffset)!=null?O:document.documentElement.scrollTop)!=null?P:document.body.scrollTop}:{left:0,top:0}},J=(u=null)=>{const[b,j]=Me(oe(u));return(0,y.useEffect)(()=>{const O=()=>j(oe(u)),P=Xe(u)?u:window;return P.addEventListener("scroll",O,{capture:!1,passive:!0}),()=>P.removeEventListener("scroll",O)},[u]),b},ve=u=>m(u)==="array",ze=u=>ve(u)&&!!u.length,Qe=(u,b,j=[],O=!1,P=null)=>ze(u)?b?(j=typeof j=="string"?j.split(","):j,u.filter(H=>(j=j.length>0?j:Object.keys(H),j.filter(ue=>{const ae=H[ue];if(ae==null)return!1;if(O)return ae===b;const ne=new RegExp(b,"gi"),$e=ae.toString().match(ne);return $e&&P&&(H[ue]=P(ae.toString().replace(ne,`<span style="background-color:yellow">${$e[0]}</span>`),{display:"inline-block"})),$e}).length))):u:[],Ge=(u,b="id")=>{if(!ze(u))return u;const j=[],O=[];return u.map(P=>{const H=d(P)?P[b]:P;O.includes(H)||(O.push(H),j.push(P))}),j},dt=u=>(u==null?void 0:u.$$typeof)&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",We=u=>u==null?void 0:u.__v_isVNode;const Ze=u=>{if(!ve(u)&&!d(u))return u;const b=ve(u)?[]:{};for(const j in u)if(A(u,j)){const O=u[j];b[j]=dt(O)||We(O)||typeof O!="object"?O:O!==u?Ze(O):"cyclic"}else Object.setPrototypeOf(b,{[j]:u[j]});return b};var zt=Ze;const Je=u=>(b,j="children")=>{if(!Array.isArray(b))return b;const O=zt(b),P=H=>{const ue=[];return H.map(ae=>{if(ze(ae[j])){const ne=P(ae[j])||[];ae[j]=ne,ne.length>0&&ue.push(ae)}}),u(H,ue)};return P(O)};var qt=(u,b,j,O="name",P="id",H="children",ue=!1)=>Je((ae,ne)=>Ge([...Qe(ae,b,O,ue,j),...ne],P))(u,H),at=ee(458),$t=(u,b)=>(0,at.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...b}),Xt=(u=null,b=$t)=>{const[j,O]=(0,y.useState)(u),P=(0,y.useCallback)((...H)=>{const[ue,ae,...ne]=H;if(!ae)O(null);else{H=[ue,ae,b,...ne];const $e=qt(...H);O($e)}},[]);return[j,P]},Gt=u=>{const[b,j]=(0,y.useState)(u);return(0,y.useEffect)(()=>j(u),[u]),[b,j]},Wt=()=>{const u={};return{on:(b,j)=>{u[b]||(u[b]=[]),u[b].indexOf(j)===-1&&u[b].push(j)},emit:(b,j)=>{u[b]&&u[b].map(O=>O(j))},off:(b,j=null)=>{if(u[b]){if(typeof j!="function")return delete u[b];const O=u[b].indexOf(j);O>-1&&(u[b].splice(O,1),u[b].length||delete u[b])}}}};const ft=u=>{const b={};for(let j in u)A(u,j)||(b[j]=u[j]);return b};var et=(u,b)=>{if(!d(u))return b;if(!d(b))return u;const j={...ft(u),...ft(b)},O={...u,...b};return Object.keys(j).map(P=>{Object.setPrototypeOf(O,{[P]:j[P]})}),O},Jt=()=>{const{on:u,emit:b,off:j}=Wt(),O={};return{getState:P=>zt(O[P]),setState:(P,H=!1)=>{if(typeof P=="function"&&(P=P(zt(O))),!d(P))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const ue=zt(P);Object.keys(ue).map(ae=>{const ne=O[ae],$e=ue[ae],vt=d($e)&&d(ne)?et(ne,$e):$e;!H&&b(ae,vt),O[ae]=vt})},subscribe:(P,H)=>(u(P,H),()=>j(P,H)),unsubscribe:j,clean:P=>{typeof P=="string"?O[P]=void 0:Array.isArray(P)?P.map(H=>O[H]=void 0):Object.keys(O).map(H=>O[H]=void 0)}}};const hr=Jt();var Kt=a(hr);const ht=u=>u<10?"0"+u:u;var Pt=(u=new Date)=>{const b=new Date(u),j=b.getFullYear(),O=b.getDay(),P=ht(b.getMonth()+1),H=ht(b.getDate()),ue=ht(b.getHours()),ae=ht(b.getMinutes()),ne=ht(b.getSeconds());return[j,P,H,ue,ae,ne,O]};const bt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Qt=(u,b,j="-")=>u.replace(new RegExp(j,"g"),b);var lt=(u=new Date,b=["-","-"," ",":",":",""],j=bt)=>{const O=Pt(u);let P="";return b.map((H,ue)=>{var ae;return P+=(ue===6?j[O[ue]]:(ae=O[ue])!=null?ae:"")+H}),P};const pt=()=>lt(new Date,["-","-"," ",":",":"," ",""]);var er=()=>{const[u,b]=(0,y.useState)("");return it(()=>{b(pt())},1e3),[u]};const tr=u=>++u;var rr=()=>{const[,u]=(0,y.useState)(0);return(0,y.useCallback)(()=>u(tr),[])},mt=()=>{const[u,b]=Me(nt());return(0,y.useEffect)(()=>{const j=()=>b(nt());return window.addEventListener("resize",j,!1),()=>window.removeEventListener("resize",j,!1)},[]),u}}(),re}()})},5820:function(It){(function(he,Ve){It.exports=Ve()})(this,function(){return function(){"use strict";var he={};(function(){he.d=function(e,t){for(var r in t)he.o(t,r)&&!he.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){he.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){he.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();var Ve={};he.r(Ve),he.d(Ve,{a2o:function(){return _e},addAtNext:function(){return re},addAtPos:function(){return y},addClass:function(){return m},addDays:function(){return d},addHours:function(){return k},addMonths:function(){return g},addNodes:function(){return S},addScript:function(){return z},addStyle:function(){return A},addYears:function(){return q},arr2Tree:function(){return be},arr2TreeById:function(){return Xe},arr2TreeByPath:function(){return nt},arr2obj:function(){return X},arr2str:function(){return pe},backTop:function(){return oe},base2Ten:function(){return J},baseConversion:function(){return ze},baseFetch:function(){return qt},cacheData:function(){return Jt},cancelablePromise:function(){return Ze},changePos:function(){return hr},classifyArr:function(){return Kt},clone:function(){return et},compareVersion:function(){return ht},compose:function(){return Pt},copyToClipboard:function(){return bt},createContainer:function(){return Qt},createElement:function(){return pt},createNode:function(){return j},createStore:function(){return ue},createTextElement:function(){return lt},curry:function(){return ae},cyclic:function(){return at},dash2camel:function(){return ne},debounce:function(){return $e},deleteNodes:function(){return vt},deviceType:function(){return wt},dlfile:function(){return or},dropInfo:function(){return Pr},editNodes:function(){return Nr},emitter:function(){return O},equal:function(){return Xt},escapeHTML:function(){return xr},eventBus:function(){return yr},fetcher:function(){return _r},filter:function(){return Er},filterList:function(){return Wr},findChildEle:function(){return _t},findMax:function(){return Ar},firstUpper:function(){return jr},fixFileSizeUnit:function(){return Sr},fixPath:function(){return Lr},fixRoute:function(){return zr},fixSize:function(){return s},fixTimeUnit:function(){return f},flatten:function(){return v},formatNum:function(){return x},formatPassTime:function(){return Y},formatTime:function(){return de},fullScreen:function(){return ie},getElementsSize:function(){return mr},getExplore:function(){return Ie},getLeaveTime:function(){return Ke},getMeta:function(){return Yt},getMonthDays:function(){return At},getOffset:function(){return Lt},getOsInfo:function(){return ot},getParams:function(){return Br},getPosition:function(){return kt},getRelative:function(){return $r},getSelected:function(){return gr},getTextSize:function(){return Et},getTime:function(){return R},getTouchPosition:function(){return Ct},getType:function(){return Te},getValue:function(){return Ft},getViewportSize:function(){return xt},hasClass:function(){return br},hasProp:function(){return Ye},hex2rgba:function(){return Fr},imgtocanvas:function(){return Rr},isArray:function(){return ge},isAsync:function(){return We},isBrowser:function(){return p},isDate:function(){return sr},isElement:function(){return a},isError:function(){return Mr},isFunction:function(){return dt},isIE:function(){return ur},isObject:function(){return F},isReactComp:function(){return Or},isReactEle:function(){return Gt},isRef:function(){return Le},isRegExp:function(){return Gr},isTouch:function(){return qe},isUrl:function(){return Zr},isValidArr:function(){return ar},isValidObj:function(){return Jr},isVueEle:function(){return Wt},json2str:function(){return Tr},loadBase64:function(){return cr},loadImage:function(){return to},loop:function(){return ro},matchedStr:function(){return Kr},memoize:function(){return Qr},merge:function(){return E},mergeArr:function(){return i},mergeClass:function(){return T},mergeObj:function(){return h},mergeOwnProp:function(){return H},message:function(){return ke},monthDate:function(){return ye},moveNodes:function(){return Fe},obj2arr:function(){return Pe},obj2str:function(){return W},omit:function(){return De},once:function(){return Oe},padStart:function(){return Ce},params2data:function(){return Ge},params2str:function(){return Qe},pick:function(){return Ne},promisify:function(){return jt},randColor:function(){return dr},randItem:function(){return vr},randNum:function(){return Ot},randPercent:function(){return St},randStr:function(){return fr},randTrue:function(){return Bt},removeClass:function(){return I},resize:function(){return ut},rgba2hex:function(){return Hr},rmUnit:function(){return eo},scheduler:function(){return lo},scrollIsBottom:function(){return so},scrollTo:function(){return Me},scrollToAnchor:function(){return uo},scrollTop:function(){return V},selectedHandle:function(){return ee},session:function(){return co},setMeta:function(){return fo},setStyle:function(){return Ue},sleep:function(){return pr},sleepSync:function(){return Xr},sort:function(){return ho},sortObj:function(){return po},storage:function(){return mo},store:function(){return yo},str2Html:function(){return yt},str2code:function(){return go},sysLang:function(){return bo},template:function(){return vo},ten2Base:function(){return ve},throttle:function(){return wo},timeGap:function(){return jo},timeInterval:function(){return oo},timestamp:function(){return st},toggleClass:function(){return So},traverItem:function(){return C},traverList:function(){return zo},unescapeHTML:function(){return $o},unique:function(){return Nt},updateId:function(){return Fo},updateNode:function(){return b},updateTreeNodes:function(){return Oo},uuidv4:function(){return Ae},validObj:function(){return To},watchScreen:function(){return Io},watermark:function(){return Po},weekDate:function(){return No},wrapPromise:function(){return Do}});var _e=(e,t="key",r="value")=>{const o={};return(e||[]).map(n=>o[n[t]]=n[r]),o},Te=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),ge=e=>Te(e)==="array",ee=e=>(t,r,o="id",n="children")=>{if(!ge(t))return null;const c=(w,$="")=>{for(let N=0,U=w.length;N<U;N++){const xe=w[N];if(xe[o]===r)return e(w,N,$)||w[N];if(ge(xe[n])){const Se=c(xe[n],xe[o]);if(Se)return Se}}};return c(t),t},re=(e,t,r,o="id",n="children")=>ee((c,w)=>c.splice(w,0,r))(e,t,o,n),y=(e,t,r,o,n="id",c="children")=>ee((w,$)=>{const N=w[$];N.children?N.children.splice(o,0,r):N.children=[r]})(e,t,n,c),a=e=>Te(e).indexOf("element")>-1,m=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),n=[...new Set([...r,...o])];e.className=n.join(" ")},d=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},k=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},g=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},S=(e,t,r,o="id",n="children")=>ee((c,w)=>{const $=c[w];return $[n]=[...$[n]||[],...r],$})(e,t,o,n),p=()=>![typeof window,typeof document].includes("undefined"),z=e=>{if(p())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},A=(e,t)=>{if(p())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===t))r();else{const n=document.createElement("style");n.onerror=c=>o(new Error(`Failed to load '${t}' style`)),n.onload=r,n.innerHTML=e,n.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===e))r();else{const n=document.createElement("link");n.onerror=c=>o(new Error(`Failed to load '${e}'`)),n.onload=r,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},q=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},X=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:n})=>r[o]=n),r},F=e=>Te(e)==="object";const L=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,F(o)?t+=`${r}=${L(o)}`:Array.isArray(o)?t+=`${r}=${pe(o)}`:t+=`${r}=${o}`}),`{${t}}`};var W=L;const te=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,F(r)?t+=W(r):Array.isArray(r)?t+=te(r):t+=`${r}`}),`[${t}]`};var pe=te,be=e=>(t,r="id",o="children",n=-1)=>{if(!ge(t))return t;const c={},w=t.map($=>$[r]);return[...t].map($=>{var N;const U={...$},{[r]:xe}=U;if(xe!=null){let{parentId:Se}=U;Se==null&&(Se=(N=e==null?void 0:e(U))!=null?N:n,U.parentId=Se),c[xe]||(c[xe]=[]),U[o]=c[xe],c[Se]||(c[Se]=[]),c[n]||(c[n]=[]),w.includes(Se)?c[Se].push(U):c[n].push(U)}}),c[n]},Xe=(e,t="id",r="children",o=-1)=>be(n=>{const c=n[t].match(/\S+(?=-\S+)/);return(c==null?void 0:c[0])||o})(e,t,r,o),nt=(e,t="path",r="children",o=null)=>be(n=>{var c,w,$,N;const U=n[t],xe=U.match(/.*\/[^:/]+\/:[^/]+/);return xe?(w=(c=xe[0].match(/(.*)\/:+/))==null?void 0:c[1])!=null?w:o:(N=($=U.match(/(.*)\/+/))==null?void 0:$[1])!=null?N:o})(e,t,r,o),V=()=>{var e,t;return p()&&((t=(e=window.pageYOffset)!=null?e:document.documentElement.scrollTop)!=null?t:document.body.scrollTop)},Ye=(e,t)=>Object.prototype.hasOwnProperty.call(e!=null?e:{},t),Le=e=>Ye(e,"current"),Me=(e=0,t)=>{var r;p()&&(t=Le(t)?t.current:t!=null?t:window,(r=t.scrollTo)==null||r.call(t,{top:e,behavior:"smooth"}))},Mt=`.huxy-totop-bar {
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
}`;const ct=()=>document.getElementsByClassName("huxy-totop-bar")[0],it=e=>{if(ct())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>Me(),!1),t},B=()=>{const e=ct();e&&document.body.removeChild(e)};var oe=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!p())return;A(Mt,"huxy-backtop-css");const r=()=>{V()>e?it(t):B()};return(()=>(document.addEventListener("scroll",r,!1),()=>{B(),document.removeEventListener("scroll",r,!1)}))()},J=(e=0,t=2)=>parseInt(String(e),t),ve=(e=0,t=2)=>Number(e).toString(t),ze=(e=0,t=2,r=16)=>ve(J(e,t),r),Qe=e=>{if(!F(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const n=o>0?"&":"?";t.push(`${n}${r}=${e[r]}`)}),t.join("")},Ge=e=>{if(!F(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},dt=e=>Te(e)==="function",We=e=>Te(e)==="promise"||F(e)&&dt(e.then),Ze=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!We(e))return{};let o=null,n=null;return{promiseFn:new Promise((c,w)=>{o=($="canceled")=>{clearTimeout(n),c({canceled:!0,errMsg:$})},t&&(t=typeof t!="number"?12e4:t,n=setTimeout(()=>o(r),t)),e.then($=>{clearTimeout(n),c({result:$,errMsg:!1})}).catch($=>{clearTimeout(n),w($)})}),cancelFn:o}};const zt=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>Ge(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>Qe(e).slice(1)}],Je=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(n=>e[n]);if(o.length===1){const n=o[0],c=r?t:n;return c==="params"?{query:e[n]}:{result:e[n],type:c}}else if(o.length>1){const n=o.filter(w=>w!=="params").slice(-1)[0],c=r?t:n;return c==="params"?{query:e.params||e[n]}:{query:e.params,result:e[n],type:c}}};var qt=(e,t)=>r=>(o,n={})=>{const{headers:c,dataType:w,data:$,formData:N,form:U,params:xe,...Se}=n,Re={data:$,formData:N,form:U,params:xe};let wr;const{query:Ut,result:no,type:_o}=Je(Re,w)||{};if(!Se.body&&no){const Ur=zt.find(qr=>qr.type===_o);wr=Ur.headers,Se.body=Ur.body(no)}Ut&&(o=`${o}${Qe(Ut)}`);const{promiseFn:Ao}=Ze(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...wr,...c},...Se}),t);return Ao.then(({result:Ur,errMsg:qr})=>e(qr?{status:408,statusText:qr}:Ur))},at=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let n=!1;for(let c in o)Ye(o,c)&&r(o[c])&&(o[c]="cyclic",n=!0);return n}return!1};return r(e)&&e};const $t=(e,t)=>{const r=Te(e),o=Te(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(at(e)&&at(t))return $t(e,t);for(let n in t)if(Ye(e,n)!==Ye(t,n)||!$t(e[n],t[n]))return!1;return!0};var Xt=$t,Gt=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",Wt=e=>e==null?void 0:e.__v_isVNode;const ft=e=>{if(!ge(e)&&!F(e))return e;const t=ge(e)?[]:{};for(const r in e)if(Ye(e,r)){const o=e[r];t[r]=Gt(o)||Wt(o)||typeof o!="object"?o:o!==e?ft(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var et=ft,Jt=(e=100)=>{const t=[];let r=-1;const o=c=>{var w,$;const N=t.length,U=et(c);return Xt(U,(w=t[N-1])==null?void 0:w.data)?{index:r,length:N,data:($=t[r])==null?void 0:$.data}:(t.push({data:U}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},n=(c=0)=>{var w;const $=t.length;return r+=c,r=r<0?0:r>$-1?$-1:r,{index:r,length:$,data:et((w=t[r])==null?void 0:w.data)}};return{record:o,cursor:n,jump:c=>{var w;return r=c,{index:r,length:t.length,data:et((w=t[r])==null?void 0:w.data)}},undo:()=>n(-1),redo:()=>n(1),getList:()=>et(t),clean:()=>{t.length=0,r=-1}}},hr=(e,t,r)=>{if(!ge(e))return e;const o=e[t],n=e[r];return e.splice(t,1,n),e.splice(r,1,o),e},Kt=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},ht=(e,t,r=".")=>{const o=(N,U)=>N.split(U),n=o(e,r),c=o(t,r),w=n.length;let $=0;for(let N=0;N<w;N++)if(n[N]<c[N]){$=w-N;break}return $},Pt=(...e)=>(...t)=>{const[...r]=e,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...t)},bt=e=>{if(!p())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},Qt=e=>(t,r)=>{const{getState:o,setState:n,subscribe:c,unsubscribe:w,clean:$}=e;return r!==void 0&&n({[t]:r},!0),{getState:()=>o(t),setState:(N,U)=>n({[t]:N},U),subscribe:N=>c(t,N),unsubscribe:()=>w(t),clean:()=>$(t)}},lt=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),pt=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:lt(o))}});const er=e=>e.startsWith("on"),tr=e=>e!=="children"&&!er(e),rr=(e,t)=>r=>e[r]!==t[r],mt=(e,t)=>r=>!(r in t),u=e=>{const t=Object.keys(e);return{eventProps:t.filter(er),propertyProps:t.filter(tr)}};var b=(e,t,r)=>{const{eventProps:o,propertyProps:n}=u(t),{eventProps:c,propertyProps:w}=u(r);o.filter(mt(t,r)).map($=>{const N=$.toLowerCase().slice(2);e.removeEventListener(N,t[$])}),n.filter(mt(t,r)).map($=>e[$]=""),w.filter(rr(t,r)).map($=>e[$]=r[$]),c.filter(rr(t,r)).map($=>{const N=$.toLowerCase().slice(2);e.addEventListener(N,r[$])})},j=e=>{if(!p())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return b(t,{},e.props),t},O=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return delete e[t];const o=e[t].indexOf(r);o>-1&&(e[t].splice(o,1),e[t].length||delete e[t])}}}};const P=e=>{const t={};for(let r in e)Ye(e,r)||(t[r]=e[r]);return t};var H=(e,t)=>{if(!F(e))return t;if(!F(t))return e;const r={...P(e),...P(t)},o={...e,...t};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},ue=()=>{const{on:e,emit:t,off:r}=O(),o={};return{getState:n=>et(o[n]),setState:(n,c=!1)=>{if(typeof n=="function"&&(n=n(et(o))),!F(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const w=et(n);Object.keys(w).map($=>{const N=o[$],U=w[$],xe=F(U)&&F(N)?H(N,U):U;!c&&t($,xe),o[$]=xe})},subscribe:(n,c)=>(e(n,c),()=>r(n,c)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(c=>o[c]=void 0):Object.keys(o).map(c=>o[c]=void 0)}}},ae=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...n)=>r(...o,...n);return r},ne=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),$e=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},vt=(e,t,r="id",o="children")=>ee((n,c)=>n.splice(c,1))(e,t,r,o),wt=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",st=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Ae=()=>{let e=st();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},or=(e,t)=>{if(p())if(t=t||Ae(),typeof e=="string")fetch(e).then(r=>r.blob()).then(r=>{const o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)});else{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)}},xt=(e=null)=>{var t,r;return p()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(r=window.innerHeight)!=null?r:document.documentElement.clientHeight}:{width:0,height:0}},kt=e=>{var t;if(p())return e=Le(e)?e.current:e!=null?e:document.body,(t=e.getBoundingClientRect)==null?void 0:t.call(e)},yt=e=>{if(!p())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},Ue=(e,t={},r=!1)=>{if(a(e)){if(r){let o="";Object.keys(t).map(n=>{o+=`${n}: ${t[n]};`}),e.style=o;return}Object.keys(t).map(o=>e.style.setProperty(o,t[o]))}};const tt=(e=350)=>new Promise(t=>setTimeout(t,e)),Xr=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var pr=tt,mr=async(e,t=15)=>{if(!p())return;if(typeof e=="string"&&(e=yt(e)),e=Le(e)?e.current:e,!a(e))return{};const r=e.cloneNode(!0);Ue(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await pr(t);const o=kt(r);return e.parentNode.removeChild(r),o};const Ir=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,kr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Zt=(e,t)=>{var r;t=`huxy-drop-arrow-${t}`;const o=(r=e.getAttribute("class"))!=null?r:"";Ir.test(o)?e.setAttribute("class",o.replace(kr,t)):e.setAttribute("class",`${o} ${t}`)},Cr=async(e,t,r)=>{const{left:o,right:n,top:c,bottom:w}=kt(e),{width:$,height:N}=xt(),{width:U,height:xe}=await mr(t);if(n<0||w<0||o>$||c>N)return{};if(r==="vertical"){const Se={left:o+"px",top:w+10+"px",right:"auto",bottom:"auto"};let Re="lt";o+U>$&&(Se.left=n-U+"px",Re="rt"),w+10+xe>N&&(Se.top=c-10-xe+"px",Re=Re==="lt"?"lb":"rb"),Ue(t,Se),Zt(t,Re)}else{const Se={left:n+10+"px",top:c+"px",right:"auto",bottom:"auto"};let Re="tl";n+10+U>$&&(Se.left=o-10-U+"px",Re="tr"),c+xe>N&&(Se.top=w-xe+"px",Re=Re==="tl"?"bl":"br"),Ue(t,Se),Zt(t,Re)}};var Pr=(e,t,r="horizontal")=>{const o=$e(Cr),n=()=>o(e,t,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const c=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),Ue(t,{left:"",top:"",right:"",bottom:""})};return Cr(e,t,r),c},Nr=(e,t,r,o="id",n="children")=>ee((c,w)=>c[w]={...c[w],...r})(e,t,o,n),xr=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const nr=O();var yr=e=>{const{on:t,emit:r,off:o}=nr;return{on:n=>t(e,n),emit:n=>r(e,n),off:n=>o(e,n)}};const Dr=120*1e3,ir=e=>e.json().then(t=>t);var _r=(e=ir,t=Dr)=>(r="get")=>qt(e)((r||"get").toUpperCase()),ar=e=>ge(e)&&!!e.length,Er=(e,t,r=[],o=!1,n=null)=>ar(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(c=>(r=r.length>0?r:Object.keys(c),r.filter(w=>{const $=c[w];if($==null)return!1;if(o)return $===t;const N=new RegExp(t,"gi"),U=$.toString().match(N);return U&&n&&(c[w]=n($.toString().replace(N,`<span style="background-color:yellow">${U[0]}</span>`),{display:"inline-block"})),U}).length))):e:[],Nt=(e,t="id")=>{if(!ar(e))return e;const r=[],o=[];return e.map(n=>{const c=F(n)?n[t]:n;o.includes(c)||(o.push(c),r.push(n))}),r};const Dt=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=et(t),n=c=>{const w=[];return c.map($=>{if(ar($[r])){const N=n($[r])||[];$[r]=N,N.length>0&&w.push($)}}),e(c,w)};return n(o)};var Wr=(e,t,r,o="name",n="id",c="children",w=!1)=>Dt(($,N)=>Nt([...Er($,t,o,w,r),...N],n))(e,c),_t=(e,t)=>{var r;const o=[],n=(r=e.children)!=null?r:[];for(let c=0,w=n.length;c<w;c++){const $=n[c];$.className.indexOf(t)>-1&&o.push($)}return o.length===0?null:o.length===1?o[0]:o},Ar=(e="")=>{var t;return(t=e.match(/\d+/g))==null?void 0:t.sort((r,o)=>o-r)[0]},jr=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),Sr=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},Lr=(e="")=>(e!=null?e:"").replaceAll("//","/"),zr=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",s=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},f=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),n=e%3600,c=~~(n/60);return o<24?`${o}${t[2]}${c}${t[1]}${n%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},C=e=>(t,r="children")=>{if(!ge(t))return t;const o=(n,c=[])=>{n.map((w,$)=>{const N=ge(w[r]);if(w=e(w,c,$,N)||w,N){const{[r]:U,...xe}=w;o(U,[...c,{...xe,"@@index":$}])}})};return o(t),t},v=(e,t="children")=>{const r=[];return C(o=>{const{[t]:n,...c}=o;r.push(c)})(e,t),r},x=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const _=e=>e<10?"0"+e:e;var R=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),n=_(t.getMonth()+1),c=_(t.getDate()),w=_(t.getHours()),$=_(t.getMinutes()),N=_(t.getSeconds());return[r,n,c,w,$,N,o]},Y=(e,t=new Date)=>{e=R(e),t=R(t);const r=t.y-e.y,o=t.m-e.m,n=t.d-e.d,c=t.h-e.h,w=t.M-e.M,$=new Date(t.y,t.m,0).getDate(),N=(U,xe,Se,Re,wr)=>{const Ut="\u524D";return xe<0&&(U-=1,xe+=Se),U===0?xe+wr+Ut:xe===0?U+Re+Ut:U+Re+xe+wr+Ut};return r>0?N(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?N(o,n,$,"\u4E2A\u6708","\u5929"):n>0?N(n,c,24,"\u5929","\u5C0F\u65F6"):c>0?N(c,w,60,"\u5C0F\u65F6","\u5206\u949F"):w>0?w+"\u5206\u949F\u524D":"\u521A\u521A"};const M=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],D=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var de=(e=new Date,t=["-","-"," ",":",":",""],r=M)=>{const o=R(e);let n="";return t.map((c,w)=>{var $;return n+=(w===6?r[o[w]]:($=o[w])!=null?$:"")+c}),n};const fe=["","webkit","moz","ms"],me=e=>fe.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),ce=e=>fe.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),we=e=>fe.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),Ee=fe.map(e=>`${e}fullscreenchange`);var ie=e=>{var t,r;if(!p())return;e=Le(e)?e.current:e!=null?e:document.body;const o=me(document),n=ce(e),c=we(document);document[o]?(r=document[c])==null||r.call(document):(t=e[n])==null||t.call(e)};const Q=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var Ie=()=>{var e;if(!p())return;const t=window.navigator.userAgent.toLowerCase(),r=(e=Q.find(o=>t.match(o.reg)))!=null?e:{};return{type:r.name,version:t.match(r.reg)[1]}};const je=60*1e3,Be=60*je,He=24*Be;var Ke=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/He);r-=He*o;const n=~~(r/Be);r-=Be*n;const c=~~(r/je);r-=je*c;const w=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${c}\u5206${w}\u79D2`};const rt=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],gt=e=>{if(!Array.isArray(e))return rt;const t=[...rt];return e.map(r=>{const o=t.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var Yt=e=>{const t=gt(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return yt(t.join(""))},At=(e=new Date)=>{const t=R(e);return new Date(t[0],t[1],0).getDate()},Lt=(e=null)=>{var t,r,o,n;return p()?a(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:(r=(t=window.pageXOffset)!=null?t:document.documentElement.scrollLeft)!=null?r:document.body.scrollLeft,top:(n=(o=window.pageYOffset)!=null?o:document.documentElement.scrollTop)!=null?n:document.body.scrollTop}:{left:0,top:0}};const Ht=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>{var t;return{type:"ios",model:e[1],version:(t=e[3])==null?void 0:t.replaceAll("_",".")}}},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var ot=()=>{if(!p())return;const e=window.navigator.userAgent.toLowerCase(),t=Ht.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},Br=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(n=>{const[c,w]=n.split("=");o[c]=w}),{path:t,params:o}}return{path:t}},qe=()=>p()&&(window.ontouchstart||navigator.maxTouchPoints),Ct=e=>{var t,r,o,n;const{left:c,top:w}=Lt();return{touchX:qe()?(r=(t=e==null?void 0:e.touches)==null?void 0:t[0])==null?void 0:r.pageX:(e==null?void 0:e.pageX)||(e==null?void 0:e.clientX)+c,touchY:qe()?(n=(o=e==null?void 0:e.touches)==null?void 0:o[0])==null?void 0:n.pageY:(e==null?void 0:e.pageY)||(e==null?void 0:e.clientY)+w}},$r=(e,t)=>{var r,o;const{touchX:n,touchY:c}=Ct(e),{x:w,y:$}=(o=(r=t==null?void 0:t.getBoundingClientRect)==null?void 0:r.call(t))!=null?o:{};return{x:n-(w!=null?w:0),y:c-($!=null?$:0)}},gr=(e,t,r="id",o="children")=>{if(!ge(e))return null;const n=c=>{for(let w=0,$=c.length;w<$;w++){const N=c[w];if(N[r]===t)return[N];if(ge(N[o])){const U=n(N[o]);if(U)return[N].concat(U)}}};return n(e)},Et=(e,t,r)=>{if(!p())return;r=Le(r)?r.current:r!=null?r:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&Ue(o,t),o.innerText=(e!=null?e:"").replace(/[\r\n]/g,""),r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const Vt=(e={},t)=>{t=lr(t);const r=(o,n)=>{if(!(n!=null&&n[0]))return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(e,t)},lr=(e="")=>{var t;return(t=e.replace(/\[['"]?(.*?)['"]?\]/g,".$1"))==null?void 0:t.split(".")};var Ft=Vt,br=(e,t="")=>a(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),Fr=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,n=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${n})`;const c=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${c})`},Rr=e=>{if(!p())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:n}=e;return t.width=o,t.height=n,r.drawImage(e,0,0,o,n),t},sr=(...e)=>!Number.isNaN(new Date(...e).valueOf()),Mr=e=>Te(e)==="error",ur=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),Or=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",Gr=e=>Te(e)==="regexp",Zr=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),Jr=e=>F(e)&&Object.keys(e).length,Tr=e=>F(e)?W(e):Array.isArray(e)?pe(e):e,cr=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",n=>r(n))}),to=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",n=>r(n)))}),ro=async(e,t,r=2e3)=>{for(;!(t!=null&&t(e==null?void 0:e()));)await pr(r)},Kr=(e,t=["{","}"])=>{var r,o;return(o=(r=e==null?void 0:e.trim)==null?void 0:r.call(e).match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`)))==null?void 0:o[1]},Qr=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),c=r.find(w=>w.key===n);if(!c){const w=e(...o);return r.push({key:n,result:w}),r.length>t&&r.shift(),w}return c.result}};const Yr=(e,t,r="id")=>{if(!ge(e))return t;if(!ge(t))return e;const o={};return[...e,...t].map(n=>{var c;const w=F(n)?(c=n[r])!=null?c:JSON.stringify(n):n;if(o[w]===void 0)o[w]=n;else{const $=o[w];F($)&&F(n)?o[w]=h($,n):ge($)&&ge(n)?o[w]=Yr($,n):o[w]=n}}),Object.keys(o).map(n=>o[n])};var i=Yr;const l=(e,t)=>{if(!F(e))return t;if(!F(t))return e;for(let r in t)Ye(t,r)?F(e[r])&&F(t[r])?e[r]=l(e[r],t[r]):ge(e[r])&&ge(t[r])?e[r]=i(e[r],t[r]):e[r]=t[r]:Object.setPrototypeOf(e,{[r]:t[r]});return e};var h=l,E=(e,...t)=>{const r=ge(e)?i:h;return t.map(o=>e=r(e,o)),e},T=(e,t)=>{var r,o;const n=(r=e==null?void 0:e.split(" "))!=null?r:[],c=(o=t==null?void 0:t.split(" "))!=null?o:[];return[...new Set([...n,...c])].filter(Boolean).join(" ")},I=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(n=>!r.includes(n));e.className=o.join(" ")},Z=`@keyframes huxy-message-animate-in {
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
}`;const K=()=>document.getElementsByClassName("huxy-message")[0],G=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},se=(e,t)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${t}`);const o=document.createElement("span");o.innerText=e;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},le=(e,t=3250,r,o)=>{if(!p())return;A(Z,"huxy-message-css");let n=K();n||(n=G());const c=se(e,o);n.appendChild(c),setTimeout(()=>{n.removeChild(c),r==null||r()},t),setTimeout(()=>{I(c,"open")},t-250)};var ke={success:(e,t,r)=>le(e,t,r,"success"),warn:(e,t,r)=>le(e,t,r,"warn"),warning:(e,t,r)=>le(e,t,r,"warn"),error:(e,t,r)=>le(e,t,r,"error"),info:(e,t,r)=>le(e,t,r,"info")},ye=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[d(1-r),d(At(t)-r)]},Fe=(e,t,r,o,n="id",c="children")=>{let w={};return ee(($,N)=>(w=$[N],$.splice(N,1),!0))(e,t,n,c),y(e,r,w,o,n,c),e},Pe=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),De=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(n=>t.includes(n)?o.push({key:n,value:e[n]}):r[n]=e[n]),{newObj:r,newQuery:o}},Oe=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},Ce=(e="",t=0,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`},Ne=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!ge(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},jt=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(n,c)=>n?o(n):r(c))),dr=()=>"#"+Ce((~~(Math.random()*(1<<24))).toString(16),6),Ot=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),vr=(e=[])=>e[Ot(e.length-1)],St=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,n)=>{n===e-1?r[n]=t:(r[n]=Ot(1,t-1),t-=r[n])}),r},fr=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),Bt=()=>Math.random()>.5;const Tt=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var ut=(e,t=60)=>{if(!p())return;e=Le(e)?e.current:e!=null?e:document.body;let r=_t(e,"resize-sensor"),o=[];const n=$e(()=>o.map(N=>N(e)),t),c=N=>{_t(e,"resize-sensor")||(r=Tt(e,n)),o.indexOf(N)===-1&&o.push(N)},w=N=>{const U=o.indexOf(N);U!==-1&&o.splice(U,1),o.length===0&&r&&$()},$=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:c,unbind:w,destroy:$}};const Rt=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const n=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var Hr=(e=0,t=0,r=0,o=1)=>{var n;if(e.includes("rgb")){const c=e.match(/rgba?\((.+)\)/);if(c){const w=(n=c[1])==null?void 0:n.split(",").map($=>$.trim());return Rt(...w)}return e}return Rt(e,t,r,o)},eo=(e,t="px")=>`${e}`.replace(t,"")-0;const Vr=()=>typeof(performance==null?void 0:performance.now)=="function"?performance.now():new Date().getTime(),io=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},ao=()=>{const e=[],t=w=>{e.push(w),c(w)},r=()=>e[0],o=()=>e.shift(),n=w=>w.startTime=Vr(),c=w=>{n(w),e.sort(($,N)=>$.startTime-N.startTime)};return{hub:e,push:t,peek:r,shift:o,update:c}};var lo=(e=5)=>{const{hub:t,push:r,peek:o,shift:n,update:c}=ao(),w=io(()=>{N()&&w()}),$=U=>Vr()-U.startTime>e,N=()=>{let U=o();for(;U;){if($(U)){c(U);break}const{task:xe}=U;typeof xe=="function"?(U.task=null,xe()):n(),U=o()}return U};return(U=()=>{})=>{r({task:U}),t.length<2&&w()}},so=()=>p()&&document.documentElement.scrollHeight-V()===xt().height,uo=e=>{var t;p()&&(e=Le(e)?e.current:e!=null?e:window,(t=e.scrollIntoView)==null||t.call(e,{behavior:"smooth",block:"center"}))},co={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch(r){t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},fo=e=>{const t=Yt(e);p()&&document.head.appendChild(...t)},ho=(e,t=null,r=!1)=>[...e||[]].sort((o,n)=>{const c=t?o[t]:o,w=t?n[t]:n;return!isNaN(Number(c))&&!isNaN(Number(c))?r?w-c:c-w:typeof c=="string"&&typeof w=="string"?r?w.localeCompare(c):c.localeCompare(w):typeof c=="string"&&typeof w=="number"?r?-1:1:typeof c=="number"||typeof c=="string"?r?1:-1:r?-1:1}),po=e=>{if(!F(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},mo={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const xo=ue();var yo=Qt(xo),go=(e,t=!1)=>(e=t?e:`return ${e};`,Function(e)()),bo=()=>p()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),vo=(e,...t)=>{const r=[];return e.map((o,n)=>{var c;r.push(o,(c=t[n])!=null?c:"")}),r.join("")},wo=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const ko=e=>[12,At(e),24,60,60],Co=(e=[],t=[],r=[])=>{let o=!1;const n=[];return t.map((c,w)=>{const $=(o?c-1:c)-e[w];$<0?(n[w]=$+(r[w]||10),o=!0):(n[w]=$,o=!1)}),n.reverse()};var oo=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=ko(t).reverse(),o=R(e).slice(0,-1).reverse(),n=R(t).slice(0,-1).reverse();return Co(o,n,r)};const Eo=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var jo=(e,t=new Date)=>{const r=oo(e,t),o=r.findIndex(n=>n>0);return r.map((n,c)=>`${n||0}${Eo[c]}`).slice(o).join("")},So=(e,t)=>{a(e)&&(br(e,t)?I(e,t):m(e,t))},zo=e=>(t,r="children")=>{if(!ge(t))return t;const o=n=>(n.map(c=>{ge(c[r])&&(c[r]=o(c[r]))}),e(n));return o(t)},$o=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),Fo=(e,t="fuckId",r="children")=>C((o,n,c)=>{o[t]=[...n.map(w=>w["@@index"]),c].join("-")})(e,r),Oo=(e,t,r,o="children")=>ee((n,c)=>{const w=n[c];return w[o]=[...w[o]||[],...r],!0})(e,t),To=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},Io=e=>p()?(Ee.map(t=>document.addEventListener(t,e,!1)),()=>Ee.map(t=>document.removeEventListener(t,e,!1))):void 0,Po=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:c="20px microsoft yahei",fillStyle:w="rgba(202,202,202,0.4)",content:$="\u8BF7\u52FF\u5916\u4F20",rotate:N="-30",zIndex:U=1e3}={})=>{if(!p())return;e=Le(e)?e.current:e!=null?e:document.body;const xe=e.firstChild;(xe==null?void 0:xe.className)==="watermark-canvas"&&e.removeChild(xe);const Se=document.createElement("canvas");Se.setAttribute("width",t),Se.setAttribute("height",r);const Re=Se.getContext("2d");Re.textAlign=o,Re.textBaseline=n,Re.font=c,Re.fillStyle=w,Re.rotate(Math.PI/180*N),Re.fillText($,parseFloat(t)/2,parseFloat(r)/2);const wr=Se.toDataURL(),Ut=document.createElement("div");Ut.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${U};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${wr}')`),e.style.position="relative",e.insertBefore(Ut,e.firstChild)},No=(e=new Date)=>{const t=new Date(e).getDay();return[d(1-t),d(7-t)]},Do=e=>{if(!We(e))return{};let t="pending",r;const o=e.then(n=>{t="success",r=n}).catch(n=>{t="error",r=n});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}};return Ve}()})},3323:function(It,he){"use strict";function Ve(B,oe){var J=B.length;B.push(oe);e:for(;0<J;){var ve=J-1>>>1,ze=B[ve];if(0<ge(ze,oe))B[ve]=oe,B[J]=ze,J=ve;else break e}}function _e(B){return B.length===0?null:B[0]}function Te(B){if(B.length===0)return null;var oe=B[0],J=B.pop();if(J!==oe){B[0]=J;e:for(var ve=0,ze=B.length,Qe=ze>>>1;ve<Qe;){var Ge=2*(ve+1)-1,dt=B[Ge],We=Ge+1,Ze=B[We];if(0>ge(dt,J))We<ze&&0>ge(Ze,dt)?(B[ve]=Ze,B[We]=J,ve=We):(B[ve]=dt,B[Ge]=J,ve=Ge);else if(We<ze&&0>ge(Ze,J))B[ve]=Ze,B[We]=J,ve=We;else break e}}return oe}function ge(B,oe){var J=B.sortIndex-oe.sortIndex;return J!==0?J:B.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var ee=performance;he.unstable_now=function(){return ee.now()}}else{var re=Date,y=re.now();he.unstable_now=function(){return re.now()-y}}var a=[],m=[],d=1,k=null,g=3,S=!1,p=!1,z=!1,A=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,X=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(B){for(var oe=_e(m);oe!==null;){if(oe.callback===null)Te(m);else if(oe.startTime<=B)Te(m),oe.sortIndex=oe.expirationTime,Ve(a,oe);else break;oe=_e(m)}}function L(B){if(z=!1,F(B),!p)if(_e(a)!==null)p=!0,ct(W);else{var oe=_e(m);oe!==null&&it(L,oe.startTime-B)}}function W(B,oe){p=!1,z&&(z=!1,q(be),be=-1),S=!0;var J=g;try{for(F(oe),k=_e(a);k!==null&&(!(k.expirationTime>oe)||B&&!V());){var ve=k.callback;if(typeof ve=="function"){k.callback=null,g=k.priorityLevel;var ze=ve(k.expirationTime<=oe);oe=he.unstable_now(),typeof ze=="function"?k.callback=ze:k===_e(a)&&Te(a),F(oe)}else Te(a);k=_e(a)}if(k!==null)var Qe=!0;else{var Ge=_e(m);Ge!==null&&it(L,Ge.startTime-oe),Qe=!1}return Qe}finally{k=null,g=J,S=!1}}var te=!1,pe=null,be=-1,Xe=5,nt=-1;function V(){return!(he.unstable_now()-nt<Xe)}function Ye(){if(pe!==null){var B=he.unstable_now();nt=B;var oe=!0;try{oe=pe(!0,B)}finally{oe?Le():(te=!1,pe=null)}}else te=!1}var Le;if(typeof X=="function")Le=function(){X(Ye)};else if(typeof MessageChannel!="undefined"){var Me=new MessageChannel,Mt=Me.port2;Me.port1.onmessage=Ye,Le=function(){Mt.postMessage(null)}}else Le=function(){A(Ye,0)};function ct(B){pe=B,te||(te=!0,Le())}function it(B,oe){be=A(function(){B(he.unstable_now())},oe)}he.unstable_IdlePriority=5,he.unstable_ImmediatePriority=1,he.unstable_LowPriority=4,he.unstable_NormalPriority=3,he.unstable_Profiling=null,he.unstable_UserBlockingPriority=2,he.unstable_cancelCallback=function(B){B.callback=null},he.unstable_continueExecution=function(){p||S||(p=!0,ct(W))},he.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Xe=0<B?Math.floor(1e3/B):5},he.unstable_getCurrentPriorityLevel=function(){return g},he.unstable_getFirstCallbackNode=function(){return _e(a)},he.unstable_next=function(B){switch(g){case 1:case 2:case 3:var oe=3;break;default:oe=g}var J=g;g=oe;try{return B()}finally{g=J}},he.unstable_pauseExecution=function(){},he.unstable_requestPaint=function(){},he.unstable_runWithPriority=function(B,oe){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=g;g=B;try{return oe()}finally{g=J}},he.unstable_scheduleCallback=function(B,oe,J){var ve=he.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ve+J:ve):J=ve,B){case 1:var ze=-1;break;case 2:ze=250;break;case 5:ze=1073741823;break;case 4:ze=1e4;break;default:ze=5e3}return ze=J+ze,B={id:d++,callback:oe,priorityLevel:B,startTime:J,expirationTime:ze,sortIndex:-1},J>ve?(B.sortIndex=J,Ve(m,B),_e(a)===null&&B===_e(m)&&(z?(q(be),be=-1):z=!0,it(L,J-ve))):(B.sortIndex=ze,Ve(a,B),p||S||(p=!0,ct(W))),B},he.unstable_shouldYield=V,he.unstable_wrapCallback=function(B){var oe=g;return function(){var J=g;g=oe;try{return B.apply(this,arguments)}finally{g=J}}}},1102:function(It,he,Ve){"use strict";It.exports=Ve(3323)}}]);
