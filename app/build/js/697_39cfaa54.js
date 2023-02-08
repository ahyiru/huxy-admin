(self.webpackChunk=self.webpackChunk||[]).push([[697],{1975:function(Ot,pe,He){(function(Le,Fe){Ot.exports=Fe(He(7378),He(1542))})(this,function(Le,Fe){return function(){"use strict";var ge={193:function(a,x,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`/*@height:2px;
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
`,""]),z.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},x.Z=z},145:function(a,x,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`.kLIGi {
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
`,""]),z.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},x.Z=z},842:function(a,x,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`@keyframes animate-drawer-in {
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
`,""]),z.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},x.Z=z},563:function(a,x,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`@keyframes animate-drop-in {
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
`,""]),z.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},x.Z=z},697:function(a,x,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`@keyframes animate-modal-in {
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
`,""]),z.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},x.Z=z},810:function(a,x,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`.clear {
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
`,""]),z.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"},x.Z=z},31:function(a,x,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`.cols-1 {
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
`,""]),z.locals={},x.Z=z},201:function(a,x,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`@keyframes before {
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
`,""]),z.locals={},x.Z=z},289:function(a,x,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`.clear {
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
`,""]),z.locals={},x.Z=z},626:function(a,x,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`.ofth_ {
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
`,""]),z.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},x.Z=z},435:function(a,x,d){var k=d(703),g=d.n(k),S=d(414),p=d.n(S),z=p()(g());z.push([a.id,`.node-right-icon-close {
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
`,""]),z.locals={},x.Z=z},414:function(a){a.exports=function(x){var d=[];return d.toString=function(){return this.map(function(k){var g="",S=typeof k[5]!="undefined";return k[4]&&(g+="@supports (".concat(k[4],") {")),k[2]&&(g+="@media ".concat(k[2]," {")),S&&(g+="@layer".concat(k[5].length>0?" ".concat(k[5]):""," {")),g+=x(k),S&&(g+="}"),k[2]&&(g+="}"),k[4]&&(g+="}"),g}).join("")},d.i=function(k,g,S,p,z){typeof k=="string"&&(k=[[null,k,void 0]]);var A={};if(S)for(var U=0;U<this.length;U++){var q=this[U][0];q!=null&&(A[q]=!0)}for(var F=0;F<k.length;F++){var B=[].concat(k[F]);S&&A[B[0]]||(typeof z!="undefined"&&(typeof B[5]=="undefined"||(B[1]="@layer".concat(B[5].length>0?" ".concat(B[5]):""," {").concat(B[1],"}")),B[5]=z),g&&(B[2]&&(B[1]="@media ".concat(B[2]," {").concat(B[1],"}")),B[2]=g),p&&(B[4]?(B[1]="@supports (".concat(B[4],") {").concat(B[1],"}"),B[4]=p):B[4]="".concat(p)),d.push(B))}},d}},703:function(a){a.exports=function(x){return x[1]}},53:function(a,x,d){var k,g=d(899),S=Symbol.for("react.element"),p=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,A=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function q(F,B,W){var te,me={},be=null,Ge=null;W!==void 0&&(be=""+W),B.key!==void 0&&(be=""+B.key),B.ref!==void 0&&(Ge=B.ref);for(te in B)z.call(B,te)&&!U.hasOwnProperty(te)&&(me[te]=B[te]);if(F&&F.defaultProps)for(te in B=F.defaultProps,B)me[te]===void 0&&(me[te]=B[te]);return{$$typeof:S,type:F,key:be,ref:Ge,props:me,_owner:A.current}}k=p,x.jsx=q,x.jsxs=q},458:function(a,x,d){a.exports=d(53)},748:function(a){var x=[];function d(S){for(var p=-1,z=0;z<x.length;z++)if(x[z].identifier===S){p=z;break}return p}function k(S,p){for(var z={},A=[],U=0;U<S.length;U++){var q=S[U],F=p.base?q[0]+p.base:q[0],B=z[F]||0,W="".concat(F," ").concat(B);z[F]=B+1;var te=d(W),me={css:q[1],media:q[2],sourceMap:q[3],supports:q[4],layer:q[5]};if(te!==-1)x[te].references++,x[te].updater(me);else{var be=g(me,p);p.byIndex=U,x.splice(U,0,{identifier:W,updater:be,references:1})}A.push(W)}return A}function g(S,p){var z=p.domAPI(p);z.update(S);var A=function(U){if(U){if(U.css===S.css&&U.media===S.media&&U.sourceMap===S.sourceMap&&U.supports===S.supports&&U.layer===S.layer)return;z.update(S=U)}else z.remove()};return A}a.exports=function(S,p){p=p||{},S=S||[];var z=k(S,p);return function(A){A=A||[];for(var U=0;U<z.length;U++){var q=z[U],F=d(q);x[F].references--}for(var B=k(A,p),W=0;W<z.length;W++){var te=z[W],me=d(te);x[me].references===0&&(x[me].updater(),x.splice(me,1))}z=B}}},736:function(a){var x={};function d(g){if(typeof x[g]=="undefined"){var S=document.querySelector(g);if(window.HTMLIFrameElement&&S instanceof window.HTMLIFrameElement)try{S=S.contentDocument.head}catch(p){S=null}x[g]=S}return x[g]}function k(g,S){var p=d(g);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(S)}a.exports=k},706:function(a){function x(d){var k=document.createElement("style");return d.setAttributes(k,d.attributes),d.insert(k,d.options),k}a.exports=x},567:function(a,x,d){function k(g){var S=d.nc;S&&g.setAttribute("nonce",S)}a.exports=k},306:function(a){function x(g,S,p){var z="";p.supports&&(z+="@supports (".concat(p.supports,") {")),p.media&&(z+="@media ".concat(p.media," {"));var A=typeof p.layer!="undefined";A&&(z+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),z+=p.css,A&&(z+="}"),p.media&&(z+="}"),p.supports&&(z+="}");var U=p.sourceMap;U&&typeof btoa!="undefined"&&(z+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(U))))," */")),S.styleTagTransform(z,g,S.options)}function d(g){if(g.parentNode===null)return!1;g.parentNode.removeChild(g)}function k(g){var S=g.insertStyleElement(g);return{update:function(p){x(S,g,p)},remove:function(){d(S)}}}a.exports=k},62:function(a){function x(d,k){if(k.styleSheet)k.styleSheet.cssText=d;else{for(;k.firstChild;)k.removeChild(k.firstChild);k.appendChild(document.createTextNode(d))}}a.exports=x},899:function(a){a.exports=Le},994:function(a){a.exports=Fe}},K={};function re(a){var x=K[a];if(x!==void 0)return x.exports;var d=K[a]={id:a,exports:{}};return ge[a](d,d.exports,re),d.exports}(function(){re.n=function(a){var x=a&&a.__esModule?function(){return a.default}:function(){return a};return re.d(x,{a:x}),x}})(),function(){re.d=function(a,x){for(var d in x)re.o(x,d)&&!re.o(a,d)&&Object.defineProperty(a,d,{enumerable:!0,get:x[d]})}}(),function(){re.o=function(a,x){return Object.prototype.hasOwnProperty.call(a,x)}}(),function(){re.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){re.nc=void 0}();var y={};return function(){re.r(y),re.d(y,{Anico:function(){return Ge},Carousel:function(){return It},Col:function(){return Nt},Drawer:function(){return Zt},Drop:function(){return mt},Ellipsis:function(){return Or},ErrorBoundary:function(){return wr},FullPage:function(){return Wr},HandleError:function(){return Dr},LoadError:function(){return jr},Mask:function(){return at},MaxSize:function(){return b},Modal:function(){return R},Panel:function(){return Me},Portal:function(){return jt},Row:function(){return Ft},Spinner:function(){return le},TabHeader:function(){return Rr},Tooltip:function(){return cr},Tree:function(){return Jr},fixEle:function(){return kr},fixIcon:function(){return dr},renderTree:function(){return hr},str2React:function(){return qt},str2Vue:function(){return zr}});var a=re(458),x=re(748),d=re.n(x),k=re(306),g=re.n(k),S=re(736),p=re.n(S),z=re(567),A=re.n(z),U=re(706),q=re.n(U),F=re(62),B=re.n(F),W=re(193),te={};te.styleTagTransform=B(),te.setAttributes=A(),te.insert=p().bind(null,"head"),te.domAPI=g(),te.insertStyleElement=q();var me=d()(W.Z,te),be=W.Z&&W.Z.locals?W.Z.locals:void 0,Ge=i=>(0,a.jsx)("span",{className:be.anico,children:(0,a.jsx)("span",{className:[be.hline,...(i.type||"").split(" ").map(l=>be[l]).filter(Boolean)].join(" ")})}),nt=re(994),X=re(899),Ye=re.n(X),Pe=(i,l)=>{const h=(0,X.useRef)();(0,X.useEffect)(()=>{h.current=i},[i]),(0,X.useEffect)(()=>{if(l){const E=setInterval(()=>h.current(),l);return()=>clearInterval(E)}},[l])},qe=()=>![typeof window,typeof document].includes("undefined"),Mt=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),it=i=>Mt(i).indexOf("element")>-1,ft=(i=null)=>{var l,h;return qe()?it(i)?{width:i.clientWidth,height:i.clientHeight}:{width:(l=window.innerWidth)!=null?l:document.documentElement.clientWidth,height:(h=window.innerHeight)!=null?h:document.documentElement.clientHeight}:{width:0,height:0}},L=(i=()=>{},l=60)=>{let h=null;return function(...E){clearTimeout(h),h=setTimeout(()=>i.apply(this,E),l)}},ne=(i,l)=>Object.prototype.hasOwnProperty.call(i!=null?i:{},l),G=i=>ne(i,"current");const ve=(i,l)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const h=document.createElement("object");return h.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),h.setAttribute("class","resize-sensor"),h.onload=()=>{h.contentDocument.defaultView.addEventListener("resize",l,!1),l()},h.type="text/html",i.appendChild(h),h.data="about:blank",h};var Te=(i,l=60)=>{if(!qe())return;i=G(i)?i.current:i!=null?i:document.body;let h,E=[];const T=L(()=>E.map(H=>H(i)),l),D=H=>{h||(h=ve(i,T)),E.indexOf(H)===-1&&E.push(H)},Y=H=>{const ue=E.indexOf(H);ue!==-1&&E.splice(ue,1),E.length===0&&h&&ee()},ee=()=>{h&&h.parentNode&&(h.contentDocument&&h.contentDocument.defaultView.removeEventListener("resize",T,!1),h.parentNode.removeChild(h),h=void 0,E=[])};return{element:i,bind:D,unbind:Y,destroy:ee}},Qe=(i={})=>{const l=(0,X.useRef)(0),[h,E]=(0,X.useState)(i),T=(0,X.useCallback)(D=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>E(D))},[]);return(0,X.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[h,T]},Xe=(i=null,l=60)=>{const h=G(i)?i.current:i,{bind:E,destroy:T}=Te(h,l),[D,Y]=Qe(ft(h));return(0,X.useEffect)(()=>(E(()=>h&&Y(ft(h))),()=>T()),[h]),D},Je=re(145),_e={};_e.styleTagTransform=B(),_e.setAttributes=A(),_e.insert=p().bind(null,"head"),_e.domAPI=g(),_e.insertStyleElement=q();var Ke=d()(Je.Z,_e),et=Je.Z&&Je.Z.locals?Je.Z.locals:void 0,It=({children:i,active:l=0,delay:h=5e3,className:E,...T})=>{const[D,Y]=(0,X.useState)(l+1),[ee,H]=(0,X.useState)(!1),ue=(0,X.useRef)(),ce=(0,X.useRef)(""),{width:ke}=Xe(ue);i=Array.isArray(i)?i:[i];const fe=i[0],ze=[i[i.length-1],...i,fe],Oe=ze.length;Pe(()=>{let Ce=D+1;Ce=Ce===Oe?1:Ce,ce.current&&(ce.current=""),Y(Ce),Ce===Oe-1&&setTimeout(()=>{ce.current="none",Y(1)},500)},ee?null:h);const Ae=(Ce,De)=>{De.stopPropagation(),ce.current="",Y(Ce),(0,nt.flushSync)(()=>H(!0)),H(!1)},$e={width:`${Oe*ke}px`,transform:`translateX(${-ke*D}px)`,transition:ce.current};return(0,a.jsxs)("div",{className:`${et["huxy-carousel"]}${E?` ${E}`:""}`,...T,ref:ue,children:[(0,a.jsx)("div",{className:et["huxy-carousel-wrap"],style:$e,children:ze.map((Ce,De)=>(0,a.jsx)("div",{className:`${et["carousel-item"]} ${D===De?et.active:""}`,style:{width:`${ke}px`},children:Ce},`huxy-carousel-${De}`))}),(0,a.jsx)("div",{className:et["carousel-switch"],children:i.map((Ce,De)=>(0,a.jsx)("span",{className:`${et.dot} ${D===De+1?et.active:""}`,onClick:bt=>Ae(De+1,bt)},`huxy-carousel-switch-${De}`))})]})};const vt=(i,l)=>{let h="",E="";if(typeof l=="number"&&(h=`col-${i}-${l}`),typeof l=="object"){const{span:T,offset:D}=l;h=T?`col-${i}-${T}`:"",E=D?`offset-${i}-${D}`:""}return{sp:h,os:E}};var Nt=(0,X.forwardRef)(({span:i,offset:l,xl:h,lg:E,md:T,sm:D,xs:Y,style:ee,width:H,auto:ue,offsetWidth:ce="0px",className:ke,...fe},ze)=>{const Oe=ke?` ${ke}`:"",Ae=`col-${i||12}`,$e=l?`offset-${l}`:"",{sp:Ce,os:De}=vt("xs",Y),{sp:bt,os:lr}=vt("sm",D),{sp:Gt,os:xr}=vt("md",T),{sp:ct,os:sr}=vt("lg",E),{sp:Rt,os:Tt}=vt("xl",h),dt=[Ae,Rt,ct,Gt,bt,Ce,$e,Tt,sr,xr,lr,De].filter(Boolean).join(" "),Jt=ue?{width:"auto",flex:1,maxWidth:`calc(100% - ${ce})`}:{width:H};return(0,a.jsx)("div",{className:`${dt}${Oe}`,...fe,style:{...Jt,...ee},ref:ze})}),Et=()=>{const i=(0,X.useRef)(!0);return i.current?(i.current=!1,!0):!1},Qt=(i,l=[])=>{const h=Et();(0,X.useEffect)(()=>{if(!h)return i()},l)},Wt=(i,l=450)=>{const[h,E]=(0,X.useState)(i);return Qt(()=>{let T;return i||l===0?E(i):T=setTimeout(()=>E(i),l),()=>T&&clearTimeout(T)},[i]),[h,E]},jt=({children:i,mountNode:l=document.body})=>(0,nt.createPortal)(i,l);const Pt={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},tt={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},er={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},ur=document.body;var at=({open:i,close:l,delay:h=300,children:E,mountNode:T,hasMask:D=!0,style:Y,className:ee="h-mask"})=>{const[H]=Wt(i,h);return ur.style.overflow=H?"hidden":"",(0,a.jsx)(jt,{mountNode:T,children:(0,a.jsx)("div",{children:H?(0,a.jsxs)("div",{className:ee,style:Pt,children:[D?(0,a.jsx)("div",{style:tt,onClick:ue=>l==null?void 0:l(ue)}):null,(0,a.jsx)("div",{style:{...er,...Y},children:E})]}):null})})},Dt=re(842),wt={};wt.styleTagTransform=B(),wt.setAttributes=A(),wt.insert=p().bind(null,"head"),wt.domAPI=g(),wt.insertStyleElement=q();var Fr=d()(Dt.Z,wt),rt=Dt.Z&&Dt.Z.locals?Dt.Z.locals:void 0,Zt=({open:i,close:l,footer:h,header:E,className:T,style:D,children:Y,width:ee="300px"})=>{var H;const ue=["drawer-wrap",i?"open":"",...(H=T==null?void 0:T.split(" "))!=null?H:[]].filter(Boolean).map(ce=>rt[ce]).join(" ");return(0,a.jsx)(at,{open:i,close:l,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,a.jsx)("div",{className:ue,style:{width:ee,...D},children:(0,a.jsxs)("div",{className:rt["drawer-container"],children:[(0,a.jsxs)("div",{className:rt["drawer-header"],children:[(0,a.jsx)("span",{className:`link ${rt["ico-close"]}`,onClick:ce=>l==null?void 0:l(ce)}),(0,a.jsx)("div",{children:E})]}),(0,a.jsx)("div",{className:rt["drawer-content"],children:Y}),h?(0,a.jsx)("div",{className:rt["drawer-footer"],children:h}):null]})})})},ht=(i,l,h="click")=>{(0,X.useEffect)(()=>{const E=D=>{const Y=G(i)?i.current:i;Y!=null&&Y.contains&&!Y.contains(D.target)&&l(D)},T=typeof h=="string"?[h]:h;return T.map(D=>{document.addEventListener(D,E,!1)}),()=>{T.map(D=>{document.removeEventListener(D,E,!1)})}},[i,l,h])},tr=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",rr=(i="")=>i.replace(/^\S/,l=>l.toUpperCase()),pt=i=>{var l;if(qe())return i=G(i)?i.current:i!=null?i:document.body,(l=i.getBoundingClientRect)==null?void 0:l.call(i)},u=i=>{if(!qe())return;const l=document.createElement("div");return l.innerHTML=i,l.children[0]},w=(i,l={},h=!1)=>{if(it(i)){if(h){let E="";Object.keys(l).map(T=>{E+=`${T}: ${l[T]};`}),i.style=E;return}Object.keys(l).map(E=>i.style.setProperty(E,l[E]))}};const j=(i=350)=>new Promise(l=>setTimeout(l,i)),O=(i=100)=>{const l=Date.now();for(;Date.now()-l<=i;);};var I=j,J=async(i,l=15)=>{if(!qe())return;if(typeof i=="string"&&(i=u(i)),i=G(i)?i.current:i,!it(i))return{};const h=i.cloneNode(!0);w(h,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(h),await I(l);const E=pt(h);return i.parentNode.removeChild(h),E};const de=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,ae=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,oe=(i,l)=>{var h;l=`huxy-drop-arrow-${l}`;const E=(h=i.getAttribute("class"))!=null?h:"";de.test(E)?i.setAttribute("class",E.replace(ae,l)):i.setAttribute("class",`${E} ${l}`)},Ie=async(i,l,h)=>{const{left:E,right:T,top:D,bottom:Y}=pt(i),{width:ee,height:H}=ft(),{width:ue,height:ce}=await J(l);if(T<0||Y<0||E>ee||D>H)return{};if(h==="vertical"){const ke={left:E+"px",top:Y+10+"px",right:"auto",bottom:"auto"};let fe="lt";E+ue>ee&&(ke.left=T-ue+"px",fe="rt"),Y+10+ce>H&&(ke.top=D-10-ce+"px",fe=fe==="lt"?"lb":"rb"),w(l,ke),oe(l,fe)}else{const ke={left:T+10+"px",top:D+"px",right:"auto",bottom:"auto"};let fe="tl";T+10+ue>ee&&(ke.left=E-10-ue+"px",fe="tr"),D+ce>H&&(ke.top=Y-ce+"px",fe=fe==="tl"?"bl":"br"),w(l,ke),oe(l,fe)}};var ot=(i,l,h="horizontal")=>{const E=L(Ie),T=()=>E(i,l,h);window.addEventListener("scroll",T,!1),window.addEventListener("resize",T,!1);const D=()=>{window.removeEventListener("scroll",T),window.removeEventListener("resize",T),w(l,{left:"",top:"",right:"",bottom:""})};return Ie(i,l,h),D},St=({open:i,delay:l=250,children:h,mountNode:E,style:T,className:D="huxy-mask"})=>{const[Y]=Wt(i,l);return(0,a.jsx)(jt,{mountNode:E,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:D,children:(0,a.jsx)("div",{style:{...T,display:Y?"block":"none"},children:h})})})})},lt=re(563),Re={};Re.styleTagTransform=B(),Re.setAttributes=A(),Re.insert=p().bind(null,"head"),Re.domAPI=g(),Re.insertStyleElement=q();var _t=d()(lt.Z,Re),At=lt.Z&&lt.Z.locals?lt.Z.locals:void 0,mt=({trigger:i="click",type:l,dropList:h,className:E,children:T,...D})=>{const[Y,ee]=(0,X.useState)(!1),H=(0,X.useRef)(),ue=(0,X.useRef)(),ce=(0,X.useRef)();ht(H,Ae=>Y&&ee(!1),[...new Set(["click",i.toLowerCase()])]),(0,X.useEffect)(()=>()=>{var Ae;return(Ae=ce.current)==null?void 0:Ae.call(ce)},[]);const ke=Ae=>{Ae.preventDefault(),ee(!0),ce.current=ot(H.current,ue.current,l)},fe={[`on${rr(i)}`]:ke},ze=["drop-wrap",Y?"open":""].filter(Boolean).map(Ae=>At[Ae]).join(" "),Oe=tr(h)?h:h==null?void 0:h(()=>ee(!1),Y);return(0,a.jsxs)("span",{ref:H,className:`${At["drop-target"]}${E?` ${E}`:""}`,...fe,...D,children:[T,(0,a.jsx)(St,{open:Y,className:"huxy-drop",children:(0,a.jsx)("div",{ref:ue,className:ze,children:Oe})})]})},kt=(i,l={},h)=>{if(!qe())return;h=G(h)?h.current:h!=null?h:document.body;const E=document.createElement("span");E.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),l&&w(E,l),E.innerText=i,h.appendChild(E);const T=E.getBoundingClientRect();return h.removeChild(E),T},xt=re(626),Ve={};Ve.styleTagTransform=B(),Ve.setAttributes=A(),Ve.insert=p().bind(null,"head"),Ve.domAPI=g(),Ve.insertStyleElement=q();var Yt=d()(xt.Z,Ve),Tr=xt.Z&&xt.Z.locals?xt.Z.locals:void 0,cr=({title:i,placement:l="topRight",children:h,ellipsis:E,className:T,...D})=>(0,a.jsx)("span",{className:`${Tr[`huxy-tooltip-${l}`]}${T?` ${T}`:""}`,tooltip:i!=null?i:h,...D,children:(0,a.jsx)("span",{className:E?Tr.ellipsis:"",children:h})});const gr={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"};var Or=i=>{var l,h,E,T;const{children:D}=i,Y=typeof D=="string",ee=Y?D:(E=(l=D==null?void 0:D.props)==null?void 0:l.title)!=null?E:(h=D==null?void 0:D.props)==null?void 0:h.children,H=(0,X.useRef)(),[ue,ce]=(0,X.useState)(!1),ke=Xe(H,250);return(0,X.useEffect)(()=>{if(H.current){const{width:fe}=kt(ee),{width:ze}=pt(H.current),Oe=fe>ze;Oe!==ue&&ce(Oe)}},[ee,ke.width]),(0,a.jsx)("span",{ref:H,style:{width:"100%",display:"inline-block"},children:ue?Y?(0,a.jsx)(cr,{...i,ellipsis:!0}):(0,a.jsx)("span",{style:gr,children:D}):Y?D:(T=D==null?void 0:D.props)==null?void 0:T.children})},br=Object.defineProperty,Ht=(i,l,h)=>l in i?br(i,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[l]=h,vr=(i,l,h)=>(Ht(i,typeof l!="symbol"?l+"":l,h),h);class wr extends Ye().Component{constructor(){super(...arguments),vr(this,"state",{error:null})}static getDerivedStateFromError(l){return{error:l}}componentDidCatch(l,h){const{errorReport:E}=this.props;typeof E=="function"&&E({error:l,info:h.componentStack})}render(){const{error:l}=this.state,{fallback:h,children:E}=this.props;return l?h(l):E}}var kr=i=>l=>{if(typeof l=="function"||typeof(l==null?void 0:l.render)=="function")return(0,a.jsx)(l,{});if(typeof l=="string"){const h=i==null?void 0:i[l];return h?(0,a.jsx)(h,{}):(0,a.jsx)("i",{className:l})}return l!=null?l:null};const Cr=i=>kr(i);var dr=i=>({icon:l,defaultIcon:h=null})=>l?Cr(i)(l):l===!1?null:h;const Lt=["","webkit","moz","ms"],Ir=i=>Lt.map(l=>l?`${l}FullscreenElement`:"fullscreenElement").find(l=>i[l]),Nr=i=>Lt.map(l=>l?`${l}RequestFullscreen`:"requestFullscreen").find(l=>i[l]),Pr=i=>Lt.map(l=>l?`${l}ExitFullscreen`:"exitFullscreen").find(l=>i[l]),Vt=Lt.map(i=>`${i}fullscreenchange`);var Er=i=>{var l,h;if(!qe())return;i=G(i)?i.current:i!=null?i:document.body;const E=Ir(document),T=Nr(i),D=Pr(document);document[E]?(h=document[D])==null||h.call(document):(l=i[T])==null||l.call(i)},Ut=i=>qe()?(Vt.map(l=>document.addEventListener(l,i,!1)),()=>Vt.map(l=>document.removeEventListener(l,i,!1))):void 0;const zt=i=>(0,a.jsx)("i",{...i,children:"..."});var Wr=({panel:i,fullIcon:l=zt,exitIcon:h=zt,...E})=>{const T=G(i)?i.current:i,[D,Y]=(0,X.useState)();(0,X.useEffect)(()=>{const H=Ut(()=>{Y(ue=>!ue)});return()=>H()},[]);const ee=D?h:l;return(0,a.jsx)(ee,{onClick:H=>Er(T),...E})},qt=(i,l)=>(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...l}),jr=i=>{const{error:l={},info:h=""}=i||{},{message:E,stack:T,errMsg:D}=l;let Y=D||T||l.toString();Y=`${Y}
${h}`.replace(/\r|\n|\r\n/g,"<br/>"),Y=Y.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Y=Y.replace(/\s/g,"&nbsp;");const ee=E==null?void 0:E.slice(0,120).split(". ").slice(0,2).join(". ");return(0,a.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[qt(Y,{style:{color:"red"}}),ee&&(0,a.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${ee}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Dr=({children:i,report:l})=>{var h;const E=(0,X.useRef)();return(h=E.current)!=null&&h.state&&(E.current.state.error=null),(0,a.jsx)(wr,{ref:E,fallback:(T,D)=>jr({error:T,info:D}),errorReport:l,children:i})};const Sr=(i,l)=>Object.keys(l).map(h=>i.style[h]=l[h]),_r=(i,l)=>Object.keys(l).map(h=>i.style[h]=""),Ar={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},s=({left:i,top:l,width:h,height:E})=>({left:`${i}px`,top:`${l}px`,width:`${h}px`,height:`${E}px`}),f=i=>(0,a.jsx)("i",{...i,children:"..."}),C=i=>{const{left:l,top:h}=pt(i),{width:E,height:T}=ft(i);return{left:l,top:h,width:E,height:T}};var b=({panel:i,target:l,fullIcon:h=f,exitIcon:E=f})=>{i=G(i)?i.current:i||document.body;const[T,D]=(0,X.useState)(),Y=(0,X.useRef)(),ee=(0,X.useRef)();(0,X.useEffect)(()=>{const ce=typeof l=="function"?l:()=>document.getElementsByClassName(l)[0];ee.current=s(C(ce())),Y.current={...Ar,...s(C(i))}},[i]);const H=(ce,ke)=>{ce?(Sr(ke,Y.current),setTimeout(()=>{Sr(ke,ee.current)},0)):_r(ke,Y.current),D(ce)},ue=T?E:h;return(0,a.jsx)(ue,{onClick:ce=>H(!T,i)})},m=re(697),P={};P.styleTagTransform=B(),P.setAttributes=A(),P.insert=p().bind(null,"head"),P.domAPI=g(),P.insertStyleElement=q();var Z=d()(m.Z,P),M=m.Z&&m.Z.locals?m.Z.locals:void 0,R=({open:i,close:l,hasMask:h=!0,cancelText:E="\u53D6\u6D88",submit:T,submitText:D="\u786E\u5B9A",title:Y="Modal \u5F39\u7A97",className:ee,children:H,delay:ue=250,...ce})=>{var ke;const fe=["modal-wrap",i?"open":"",...(ke=ee==null?void 0:ee.split(" "))!=null?ke:[]].filter(Boolean).map(ze=>M[ze]).join(" ");return(0,a.jsx)(at,{open:i,close:l,delay:ue,hasMask:h,className:"huxy-modal",children:(0,a.jsx)("div",{className:fe,...ce,children:(0,a.jsxs)("div",{className:M["modal-container"],children:[(0,a.jsx)("div",{className:M["modal-header"],children:Y}),(0,a.jsx)("div",{className:M["modal-content"],children:H}),(0,a.jsxs)("div",{className:M["modal-footer"],children:[(0,a.jsx)("div",{className:`${M.btn} ${M.left}`,onClick:ze=>l==null?void 0:l(ze),children:E}),(0,a.jsx)("div",{className:`${M.btn} ${M.right}`,onClick:ze=>T==null?void 0:T(ze),children:D})]})]})})})},_=re(201),ie={};ie.styleTagTransform=B(),ie.setAttributes=A(),ie.insert=p().bind(null,"head"),ie.domAPI=g(),ie.insertStyleElement=q();var ye=d()(_.Z,ie),Ee=_.Z&&_.Z.locals?_.Z.locals:void 0,le=({global:i,absolute:l})=>(0,a.jsx)("div",{className:`spinner${i?" global":""}${l?" absolute":""}`,children:(0,a.jsx)("figure",{className:"spinning"})}),he=re(810),we={};we.styleTagTransform=B(),we.setAttributes=A(),we.insert=p().bind(null,"head"),we.domAPI=g(),we.insertStyleElement=q();var se=d()(he.Z,we),Q=he.Z&&he.Z.locals?he.Z.locals:void 0;const Se=i=>{var l;return(l=i==null?void 0:i.filter)==null?void 0:l.call(i,h=>typeof h=="function")},Ne=(i,l)=>{const h=(0,X.useRef)(),{loading:E,title:T,plugins:D,children:Y,className:ee,...H}=i,ue=Se(D),ce=ue==null?void 0:ue.length,ke=ee?` ${ee}`:"",fe=G(l)?l:h;return(0,a.jsxs)("div",{className:`${Q.panel}${ke}`,...H,ref:fe,children:[(T||ce)&&(0,a.jsxs)("div",{className:Q["panel-header"],children:[T&&(0,a.jsx)("h4",{className:Q["panel-title"],children:T}),ce&&(0,a.jsx)("div",{className:Q["panel-plugins"],children:ue.map((ze,Oe)=>(0,a.jsx)("span",{className:"link",children:(0,a.jsx)(ze,{panel:fe})},Oe))})]}),(0,a.jsx)("div",{className:Q["panel-body"],children:Y}),E&&(0,a.jsx)(le,{})]})};var Me=(0,X.forwardRef)(Ne),Be=re(31),We={};We.styleTagTransform=B(),We.setAttributes=A(),We.insert=p().bind(null,"head"),We.domAPI=g(),We.insertStyleElement=q();var $t=d()(Be.Z,We),fr=Be.Z&&Be.Z.locals?Be.Z.locals:void 0;const Bt=({gutter:i=10,className:l,overflow:h="hidden",...E},T)=>{var D;const Y=l?` ${l}`:"";let ee=10;if(Array.isArray(i)){const H=[...i];i=H[0],ee=(D=H[1])!=null?D:H[0]}return(0,a.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(ee/2)}px`,overflow:h},children:(0,a.jsx)("div",{className:`row${Y}`,...E,ref:T})})};var Ft=(0,X.forwardRef)(Bt),Ct=i=>Mt(i)==="array",Xt=i=>Ct(i)&&!!i.length;const yt=({to:i,preventDefault:l,stopPropagation:h,...E})=>l?(0,a.jsx)("span",{...E}):(0,a.jsx)("a",{href:i,...E}),Lr=({item:i,...l})=>(0,a.jsx)("ul",{...l}),Ue=(i,...l)=>{const h={};return Object.keys(i).filter(Boolean).map(E=>{h[E]=T=>i[E](T,...l)}),h},gt=({data:i=[],events:l={},List:h=Lr,Link:E=yt,leftIcon:T,rightIcon:D,isHorizontal:Y,isCollapsed:ee,level:H=0,parentOpen:ue=!0})=>{const ce=ee&&!H,ke=!Y&&!ee&&!ue;return i.map(fe=>{var ze;const{name:Oe,path:Ae,icon:$e,rightIcon:Ce,active:De,open:bt,children:lr,linkProps:Gt}=fe,xr=Xt(lr),ct=fe.id||Ae||Oe,sr=ce?(ze=fe.title)!=null?ze:Oe:void 0,Rt=ke?"hidden":"",Tt=$e!=null?$e:T,dt=Ce!=null?Ce:D,Jt=Tt?(0,a.jsx)("div",{className:"node-left-icon",children:Tt===!0?(0,a.jsx)("i",{className:"default-left-icon"}):Tt}):null,Yr=Oe?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:Oe})}):null;if(xr){const Hr=Ue(l,fe,H),Kr=[Rt,bt?"open":""].filter(Boolean).join(" ");return(0,a.jsxs)("li",{className:Kr,"has-children":"true",...Hr,children:[(0,a.jsxs)(E,{title:sr,className:`link${De?" active":""}`,to:Ae,preventDefault:!0,stopPropagation:!1,...Gt,children:[Jt,Yr,dt?(0,a.jsx)("div",{className:"node-right-icon",children:dt===!0?(0,a.jsx)("i",{className:"default-right-icon"}):dt}):null]}),(0,a.jsx)(h,{item:fe,children:gt({data:lr,events:l,List:h,Link:E,leftIcon:T,rightIcon:D,isHorizontal:Y,isCollapsed:ee,level:H+1,parentOpen:!!bt})})]},ct)}return(0,a.jsx)("li",{className:Rt,children:(0,a.jsxs)(E,{title:sr,className:`link${De?" active":""}`,to:Ae,...Gt,children:[Jt,Yr]})},ct)})};var hr=gt,zr=(i,...l)=>(0,a.jsx)("div",{"v-html":i,...l}),st=re(289),ut={};ut.styleTagTransform=B(),ut.setAttributes=A(),ut.insert=p().bind(null,"head"),ut.domAPI=g(),ut.insertStyleElement=q();var Zr=d()(st.Z,ut),Br=st.Z&&st.Z.locals?st.Z.locals:void 0;const or=i=>(0,a.jsx)("div",{style:{padding:"6px 15px"},children:i}),pr=({activekey:i,tabs:l=[],switchTab:h,trackColor:E,flex:T,...D},Y)=>{var ee;const[H,ue]=(0,X.useState)(i!=null?i:(ee=l[0])==null?void 0:ee.key),[ce,ke]=(0,X.useState)({}),fe=(0,X.useRef)({}),ze=(0,X.useRef)();(0,X.useEffect)(()=>{const $e=fe.current[H];$e&&Oe($e)},[]);const Oe=$e=>{const{left:Ce,width:De}=pt($e),bt=pt(ze.current).left;ke({left:Ce-bt,width:De})},Ae=($e,Ce)=>{$e.stopPropagation(),ue(Ce),typeof h=="function"&&h(Ce),Oe($e.currentTarget)};return(0,a.jsxs)("div",{className:"tabs-header-wrap",...D,ref:Y,children:[(0,a.jsx)("ul",{className:`tabs-header${T?" flex":""}`,ref:ze,children:l.map($e=>(0,a.jsx)("li",{ref:Ce=>fe.current[$e.key]=Ce,className:`th-item${H===$e.key?" active":""}`,onClick:Ce=>Ae(Ce,$e.key),children:typeof $e.renderTabs=="function"?$e.renderTabs($e,H===$e.key):or($e.value)},$e.key))}),(0,a.jsx)("div",{className:"th-track",style:{...ce,color:E}})]})};var Rr=(0,X.forwardRef)(pr),nr=(i,l,h="id",E="children")=>{if(!Ct(i))return null;const T=D=>{for(let Y=0,ee=D.length;Y<ee;Y++){const H=D[Y];if(H[h]===l)return[H];if(Ct(H[E])){const ue=T(H[E]);if(ue)return[H].concat(ue)}}};return T(i)};const Mr=i=>++i;var ir=()=>{const[,i]=(0,X.useState)(0);return(0,X.useCallback)(()=>i(Mr),[])};const mr=i=>{const{children:l,open:h}=i;let E=0;if(h&&l!=null&&l.length){E=l.length;let T=0;return l.map(D=>T+=mr(D)),E+T}return E};var qr=({item:i,style:l,...h})=>(0,a.jsx)("ul",{style:{...l,"--count":mr(i)},...h}),$r=re(435),ar={};ar.styleTagTransform=B(),ar.setAttributes=A(),ar.insert=p().bind(null,"head"),ar.domAPI=g(),ar.insertStyleElement=q();var Qr=d()($r.Z,ar),eo=$r.Z&&$r.Z.locals?$r.Z.locals:void 0;const Xr=i=>(0,a.jsx)("ul",{...i}),Gr=(i,l)=>i?qr:({item:h,...E})=>(0,a.jsx)(Xr,{className:l==="right"?"left":"",...E});var Jr=i=>{var l;const{data:h=[],collapsed:E=!1,type:T="vertical",Link:D,width:Y,bgColor:ee,itemHeight:H,collapsedWidth:ue,itemPadding:ce,style:ke,className:fe,...ze}=i,Oe=(0,X.useRef)(),Ae=(0,X.useRef)();(0,X.useEffect)(()=>()=>clearTimeout(Oe.current),[]);const $e=ir(),Ce=T==="horizontal",De=!Ce&&E,bt={onClick:(Rt,Tt)=>{if(Rt.stopPropagation(),!Ce&&!De){const dt=nr(h,Tt.path,"path"),Jt=dt[dt.length-1];Jt.open=!Jt.open,$e()}},onMouseEnter:(Rt,Tt,dt)=>{De&&!dt&&(clearTimeout(Oe.current),Ae.current.style.width="var(--maxWidth)")},onMouseLeave:(Rt,Tt,dt)=>{De&&!dt&&(Oe.current=setTimeout(()=>Ae.current.style.width="",200))}},lr=(Ce?["huxy-horizontal-tree",fe]:["huxy-tree",fe,De?"collapsed":""]).filter(Boolean).join(" "),{float:Gt,...xr}=(l=ze==null?void 0:ze.style)!=null?l:{},ct={"--bgColor":ee,"--itemHeight":H,"--nodeListWidth":Y,...xr};Ce?(ct["--itemPadding"]=ce,ct["--nodeFloat"]=Gt):(ct["--width"]=Y,ct["--collapsedWidth"]=ue);const sr=Gr(!Ce&&!De,Gt);return(0,a.jsx)("div",{ref:Ae,className:lr,style:ct,...ze,children:(0,a.jsx)("div",{className:"huxy-tree-track",children:(0,a.jsx)("ul",{className:"huxy-tree-root",children:hr({data:h,events:bt,List:sr,Link:D,leftIcon:!0,rightIcon:!0,isHorizontal:Ce,isCollapsed:De})})})})}}(),y}()})},4544:function(Ot,pe,He){(function(Le,Fe){Ot.exports=Fe(He(7378))})(this,function(Le){return function(){"use strict";var Fe={201:function(y,a,x){var d=x(703),k=x.n(d),g=x(414),S=x.n(g),p=S()(k());p.push([y.id,`@keyframes before {
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
`,""]),p.locals={},a.Z=p},982:function(y,a,x){var d=x(703),k=x.n(d),g=x(414),S=x.n(g),p=S()(k());p.push([y.id,`.Iuy_e {
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
`,""]),p.locals={link:"Iuy_e",active:"D3oJg"},a.Z=p},414:function(y){y.exports=function(a){var x=[];return x.toString=function(){return this.map(function(d){var k="",g=typeof d[5]!="undefined";return d[4]&&(k+="@supports (".concat(d[4],") {")),d[2]&&(k+="@media ".concat(d[2]," {")),g&&(k+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),k+=a(d),g&&(k+="}"),d[2]&&(k+="}"),d[4]&&(k+="}"),k}).join("")},x.i=function(d,k,g,S,p){typeof d=="string"&&(d=[[null,d,void 0]]);var z={};if(g)for(var A=0;A<this.length;A++){var U=this[A][0];U!=null&&(z[U]=!0)}for(var q=0;q<d.length;q++){var F=[].concat(d[q]);g&&z[F[0]]||(typeof p!="undefined"&&(typeof F[5]=="undefined"||(F[1]="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {").concat(F[1],"}")),F[5]=p),k&&(F[2]&&(F[1]="@media ".concat(F[2]," {").concat(F[1],"}")),F[2]=k),S&&(F[4]?(F[1]="@supports (".concat(F[4],") {").concat(F[1],"}"),F[4]=S):F[4]="".concat(S)),x.push(F))}},x}},703:function(y){y.exports=function(a){return a[1]}},53:function(y,a,x){var d,k=x(899),g=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,z=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function U(q,F,B){var W,te={},me=null,be=null;B!==void 0&&(me=""+B),F.key!==void 0&&(me=""+F.key),F.ref!==void 0&&(be=F.ref);for(W in F)p.call(F,W)&&!A.hasOwnProperty(W)&&(te[W]=F[W]);if(q&&q.defaultProps)for(W in F=q.defaultProps,F)te[W]===void 0&&(te[W]=F[W]);return{$$typeof:g,type:q,key:me,ref:be,props:te,_owner:z.current}}d=S,a.jsx=U,a.jsxs=U},458:function(y,a,x){y.exports=x(53)},748:function(y){var a=[];function x(g){for(var S=-1,p=0;p<a.length;p++)if(a[p].identifier===g){S=p;break}return S}function d(g,S){for(var p={},z=[],A=0;A<g.length;A++){var U=g[A],q=S.base?U[0]+S.base:U[0],F=p[q]||0,B="".concat(q," ").concat(F);p[q]=F+1;var W=x(B),te={css:U[1],media:U[2],sourceMap:U[3],supports:U[4],layer:U[5]};if(W!==-1)a[W].references++,a[W].updater(te);else{var me=k(te,S);S.byIndex=A,a.splice(A,0,{identifier:B,updater:me,references:1})}z.push(B)}return z}function k(g,S){var p=S.domAPI(S);p.update(g);var z=function(A){if(A){if(A.css===g.css&&A.media===g.media&&A.sourceMap===g.sourceMap&&A.supports===g.supports&&A.layer===g.layer)return;p.update(g=A)}else p.remove()};return z}y.exports=function(g,S){S=S||{},g=g||[];var p=d(g,S);return function(z){z=z||[];for(var A=0;A<p.length;A++){var U=p[A],q=x(U);a[q].references--}for(var F=d(z,S),B=0;B<p.length;B++){var W=p[B],te=x(W);a[te].references===0&&(a[te].updater(),a.splice(te,1))}p=F}}},736:function(y){var a={};function x(k){if(typeof a[k]=="undefined"){var g=document.querySelector(k);if(window.HTMLIFrameElement&&g instanceof window.HTMLIFrameElement)try{g=g.contentDocument.head}catch(S){g=null}a[k]=g}return a[k]}function d(k,g){var S=x(k);if(!S)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");S.appendChild(g)}y.exports=d},706:function(y){function a(x){var d=document.createElement("style");return x.setAttributes(d,x.attributes),x.insert(d,x.options),d}y.exports=a},567:function(y,a,x){function d(k){var g=x.nc;g&&k.setAttribute("nonce",g)}y.exports=d},306:function(y){function a(k,g,S){var p="";S.supports&&(p+="@supports (".concat(S.supports,") {")),S.media&&(p+="@media ".concat(S.media," {"));var z=typeof S.layer!="undefined";z&&(p+="@layer".concat(S.layer.length>0?" ".concat(S.layer):""," {")),p+=S.css,z&&(p+="}"),S.media&&(p+="}"),S.supports&&(p+="}");var A=S.sourceMap;A&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),g.styleTagTransform(p,k,g.options)}function x(k){if(k.parentNode===null)return!1;k.parentNode.removeChild(k)}function d(k){var g=k.insertStyleElement(k);return{update:function(S){a(g,k,S)},remove:function(){x(g)}}}y.exports=d},62:function(y){function a(x,d){if(d.styleSheet)d.styleSheet.cssText=x;else{for(;d.firstChild;)d.removeChild(d.firstChild);d.appendChild(document.createTextNode(x))}}y.exports=a},899:function(y){y.exports=Le}},ge={};function K(y){var a=ge[y];if(a!==void 0)return a.exports;var x=ge[y]={id:y,exports:{}};return Fe[y](x,x.exports,K),x.exports}(function(){K.n=function(y){var a=y&&y.__esModule?function(){return y.default}:function(){return y};return K.d(a,{a}),a}})(),function(){K.d=function(y,a){for(var x in a)K.o(a,x)&&!K.o(y,x)&&Object.defineProperty(y,x,{enumerable:!0,get:a[x]})}}(),function(){K.o=function(y,a){return Object.prototype.hasOwnProperty.call(y,a)}}(),function(){K.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})}}(),function(){K.nc=void 0}();var re={};return function(){K.r(re),K.d(re,{Link:function(){return Dr},emitRoute:function(){return Ar},getRoute:function(){return _r},useRoute:function(){return Sr},useRouter:function(){return Vt}});var y=K(899),a=K.n(y),x=s=>Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),d=s=>x(s)==="array",k=s=>x(s)==="object",g=s=>(s==null?void 0:s.$$typeof)&&typeof s.$$typeof=="symbol"&&s.$$typeof.description==="react.element",S=s=>s==null?void 0:s.__v_isVNode,p=(s,f)=>Object.prototype.hasOwnProperty.call(s!=null?s:{},f);const z=s=>{if(!d(s)&&!k(s))return s;const f=d(s)?[]:{};for(const C in s)if(p(s,C)){const b=s[C];f[C]=g(b)||S(b)||typeof b!="object"?b:b!==s?z(b):"cyclic"}else Object.setPrototypeOf(f,{[C]:s[C]});return f};var A=z,U=s=>x(s)==="function",q=s=>x(s)==="promise"||k(s)&&U(s.then),F=(s,f=12e4,C="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!q(s))return{};let b=null,m=null;return{promiseFn:new Promise((P,Z)=>{b=(M="canceled")=>{clearTimeout(m),P({canceled:!0,errMsg:M})},f&&(f=typeof f!="number"?12e4:f,m=setTimeout(()=>b(C),f)),s.then(M=>{clearTimeout(m),P({result:M,errMsg:!1})}).catch(M=>{clearTimeout(m),Z(M)})}),cancelFn:b}},B=s=>s?s.charAt(s.length-1)==="/"?s.slice(0,-1):s:"",W=K(458),te=(s,f)=>(0,W.jsx)("div",{dangerouslySetInnerHTML:{__html:s},...f}),me=s=>{const{error:f={},info:C=""}=s||{},{message:b,stack:m,errMsg:P}=f;let Z=P||m||f.toString();Z=`${Z}
${C}`.replace(/\r|\n|\r\n/g,"<br/>"),Z=Z.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Z=Z.replace(/\s/g,"&nbsp;");const M=b==null?void 0:b.slice(0,120).split(". ").slice(0,2).join(". ");return(0,W.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[te(Z,{style:{color:"red"}}),M&&(0,W.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${M}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},be=()=>{const s={};return{on:(f,C)=>{s[f]||(s[f]=[]),s[f].indexOf(C)===-1&&s[f].push(C)},emit:(f,C)=>{s[f]&&s[f].map(b=>b(C))},off:(f,C=null)=>{if(s[f]){if(typeof C!="function")return s[f]=[];const b=s[f].indexOf(C);b>-1&&s[f].splice(b,1)}}}};const Ge=s=>{const f={};for(let C in s)p(s,C)||(f[C]=s[C]);return f};var nt=(s,f)=>{if(!k(s))return f;if(!k(f))return s;const C={...Ge(s),...Ge(f)},b={...s,...f};return Object.keys(C).map(m=>{Object.setPrototypeOf(b,{[m]:C[m]})}),b},X=()=>{const{on:s,emit:f,off:C}=be(),b={};return{getState:m=>A(b[m]),setState:(m,P=!1)=>{if(typeof m=="function"&&(m=m(A(b))),!k(m))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const Z=A(m);Object.keys(Z).map(M=>{const R=b[M],_=Z[M],ie=k(_)&&k(R)?nt(R,_):_;!P&&f(M,ie),b[M]=ie})},subscribe:(m,P)=>(s(m,P),()=>C(m,P)),unsubscribe:C,clean:m=>{typeof m=="string"?b[m]=void 0:Array.isArray(m)?m.map(P=>b[P]=void 0):Object.keys(b).map(P=>b[P]=void 0)}}},Ye=s=>(f,C)=>{const[b,m]=(0,y.useState)(()=>{const R=s==null?void 0:s.getState(f);return R!==void 0?R:(C!==void 0&&(s==null||s.setState({[f]:C},!0)),C)}),P=(0,y.useCallback)(R=>s==null?void 0:s.setState({[f]:typeof R=="function"?R(s==null?void 0:s.getState(f)):R}),[]),Z=(0,y.useCallback)(R=>s==null?void 0:s.subscribe(f,R),[]),M=(0,y.useCallback)((R=R)=>s==null?void 0:s.clean(R),[]);return(0,y.useEffect)(()=>{s==null||s.subscribe(f,R=>m(R))},[]),[b,P,Z,M]};const Pe=X(),qe=Ye(Pe),Mt=be(),it=be(),ft="push-emitter",L="replace-emitter",ne="useRoute-emitter",G={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},ve="/404",Te={getState:()=>history.state,go:s=>history.go(s),forward:()=>history.forward(),back:()=>history.back()},Qe=(s,f,C,b,m=[])=>{const P=R=>{for(let _=0,ie=R.length;_<ie;_++){const ye=R[_],Ee=ye[b].split("?")[0];if(new RegExp("^"+Ee.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return ye;if(d(ye[C])){const le=P(ye[C]);if(le)return le}}},Z=P(s);if(!Z)return ve;const{redirect:M}=Z;return M?m.includes(M)?m:(m.push(M),Qe(s,M.split("?")[0],C,b,m)):m[m.length-1]},Xe=(s,f,C,b,m)=>{if(!d(s))return null;const P=ie=>{const ye=ie.split("/"),Ee=f.split("/"),le={};return ye.map((he,we)=>he.indexOf(":")===0&&(le[he.slice(1)]=Ee[we])),le},Z=(ie,ye)=>{const Ee=[],le=ye.split("/:")[0];for(let he=0,we=ie.length;he<we;he++){const se=ie[he];if(se[m]===le){se.active=!0;const{name:Q,title:Se,icon:Ne,params:Me}=se;Ee.push({name:Q,title:Se,icon:Ne,params:Me,[m]:le})}else if(ye.indexOf(`${se[m]}/`)===0){se.active=!0;const Q=P(se[m]),Se=Object.keys(Q).map($t=>Q[$t]).join("/"),{name:Ne,title:Me,icon:Be}=se,We=Se?`${le}/${Se}`:se[m];Ee.push({name:Ne,title:Me,icon:Be,[m]:We,params:{...se.params,...Q}})}else if(se[m]===ye){se.active=!0;const Q=P(se[m]),{[b]:Se,...Ne}=se;Ee.push({...Ne,[m]:f,params:{...Ne.params,...C,...Q}})}}return Ee},M=(ie,ye)=>{for(let Ee=0,le=ie.length;Ee<le;Ee++){const he=ie[Ee];if(ye.indexOf(`${he[m]}/`)===0){he.active=!0;return}}},R=ie=>{for(let ye=0,Ee=ie.length;ye<Ee;ye++){const le=ie[ye],he=(le[m]||"").split("?")[0];if(he===f){le.hideMenu&&M(ie,le.parentPath||he),le.active=!0;const{[b]:we,...se}=le;return[{...se,params:{...se.params,...C}}]}if(new RegExp("^"+he.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return Z(ie,he);if(d(le[b])){const we=R(le[b]);if(we){le.active=!0,le.open=!0;const{[b]:se,...Q}=le;return[Q,...we]}}}},_=R(s)||[];return{result:s,current:_}},Je=(s,f,C)=>s.filter(b=>b.hideMenu||b[C].indexOf("/:")>-1?!1:(d(b[f])&&(b[f]=Je(b[f],f,C)),!0));var _e=(s,f,C,b="children",m="path")=>{const P=Qe(s,f,b,m);if(P)return{redirect:P};const{result:Z,current:M}=Xe(s,f,C,b,m),R=Je(Z,b,m);return{current:M,menu:R}},Ke=s=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(s);const et=(s,f)=>{const C=["#/","/"],b=C[!!f-0];if(!s||C.includes(s))return b;const m=s.charAt(s.length-1)==="/"?s.slice(0,-1):s;return f||m.indexOf("#/")>-1?m:`#${m}`},It=(s,f,C,b=!1)=>{const m=et(f,C);return b?m:C?s&&m==="/"?s:`${s}${m}`:s?`${s}/${m}`:m},vt=(s,f,C,b,m,P)=>{if(!d(s))return s;const Z=(M,R="")=>M.filter(_=>!_.denied).map(_=>{if(!P&&!_.exact&&!Ke(_[b])){(!_[b]||_[b]==="javascript:;")&&(_[b]="");const ie=_[b].charAt(0)==="/"&&R.charAt(R.length-1)==="/"?_[b].slice(1):_[b].charAt(0)!=="/"&&R.charAt(R.length-1)!=="/"?`/${_[b]}`:_[b];_[b]=R?R+ie:It(m,ie,f)}return _.redirect&&(_.redirect=It(m,_.redirect,f)),d(_[C])&&(_[C]=Z(_[C],_[b]),!_.redirect&&_[C].length&&(_.redirect=_[C][0][b])),_});return Z(s)};var Nt=s=>{if(!k(s))return"";const f=[];return Object.keys(s).map((C,b)=>{const m=b>0?"&":"?";f.push(`${m}${C}=${s[C]}`)}),f.join("")},Et=(s="")=>{const[f,C]=s.split("?");if(C){const b={};return C.split("&").map(m=>{const[P,Z]=m.split("=");b[P]=Z}),{path:f,params:b}}return{path:f}};const Qt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Wt=(s,f)=>{for(let C=s.length-1,b;b=s[C--];){const{title:m,name:P}=b;if(typeof m=="string"&&m.length)return document.title=m;if((m==null||m===!0)&&P)return document.title=f?`${P}-${f}`:P;if(f)return document.title=f}},jt=s=>{const{pathname:f,search:C,hash:b}=location;if(s){const M=et(f,s),R=decodeURIComponent(`${M}${C}`),{params:_}=Et(R);return{path:R,params:_}}const m=decodeURIComponent(et(b,s)),{params:P}=Et(m),Z=B(f);return{path:Z?`${Z}/${m}`:m,params:P}},Pt=(s,f,C)=>{typeof s=="function"&&s({...f,stay:new Date-C})},tt=(s,f,C,b)=>{let m,P,Z;if(typeof s=="string")m=s;else if(k(s))m=s.path,P=s.params,Z=s.query;else return;!m||m==="."||m==="./"?m=b:m.indexOf("./")===0?m=`${b.split("?")[0]}${m.replace("./","/")}`:m.indexOf("../")===0&&(m=`${b.split("?")[0].split("/").slice(0,-1).join("/")}${m.replace("../","/")}`),m=It(f,m,C,s==null?void 0:s.exact);const M=Et(m);m=M.path;const R={...M.params,...Z},_=Nt(R);return m=`${m}${_}`,P={...P,...R},{path:m,params:P}},er=(s,f)=>{const C=s.split(f);return C.length>1?["","/"].includes(C[1].slice(0,1)):!1},ur=be();var at=s=>{const{on:f,emit:C,off:b}=ur;return{on:m=>f(s,m),emit:m=>C(s,m),off:m=>b(s,m)}},Dt=s=>(f,C)=>{const{getState:b,setState:m,subscribe:P,unsubscribe:Z,clean:M}=s;return C!==void 0&&m({[f]:C},!0),{getState:()=>b(f),setState:(R,_)=>m({[f]:R},_),subscribe:R=>P(f,R),unsubscribe:()=>Z(f),clean:()=>M(f)}};const wt=X();var Fr=Dt(wt);const rt=at("push-emitter"),Zt=at("replace-emitter"),ht=Fr("route-store"),tr=be(),rr=X(),pt=Ye(rr);var u=()=>![typeof window,typeof document].includes("undefined"),w=s=>{if(!u())return;const f=document.createElement("div");return f.innerHTML=s,f.children[0]},j=Object.defineProperty,O=(s,f,C)=>f in s?j(s,f,{enumerable:!0,configurable:!0,writable:!0,value:C}):s[f]=C,I=(s,f,C)=>(O(s,typeof f!="symbol"?f+"":f,C),C);class J extends a().Component{constructor(){super(...arguments),I(this,"state",{error:null})}static getDerivedStateFromError(f){return{error:f}}componentDidCatch(f,C){const{errorReport:b}=this.props;typeof b=="function"&&b({error:f,info:C.componentStack})}render(){const{error:f}=this.state,{fallback:C,children:b}=this.props;return f?C(f):b}}var de=({children:s,report:f})=>{var C;const b=(0,y.useRef)();return(C=b.current)!=null&&C.state&&(b.current.state.error=null),(0,W.jsx)(J,{ref:b,fallback:(m,P)=>me({error:m,info:P}),errorReport:f,children:s})},ae=K(748),oe=K.n(ae),Ie=K(306),ot=K.n(Ie),St=K(736),lt=K.n(St),Re=K(567),_t=K.n(Re),At=K(706),mt=K.n(At),kt=K(62),xt=K.n(kt),Ve=K(201),Yt={};Yt.styleTagTransform=xt(),Yt.setAttributes=_t(),Yt.insert=lt().bind(null,"head"),Yt.domAPI=ot(),Yt.insertStyleElement=mt();var Tr=oe()(Ve.Z,Yt),cr=Ve.Z&&Ve.Z.locals?Ve.Z.locals:void 0,gr=({global:s,absolute:f})=>(0,W.jsx)("div",{className:`spinner${s?" global":""}${f?" absolute":""}`,children:(0,W.jsx)("figure",{className:"spinning"})}),Or=()=>{const s=(0,y.useRef)([]);return(0,y.useEffect)(()=>()=>{s.current.map(f=>f.cancelFn()),s.current=[]},[]),{cancelablePromise:(0,y.useCallback)((f,C=!0)=>{const b=F(f,C);return s.current.indexOf(b)===-1&&s.current.push(b),b.promiseFn},[])}},br=(s={})=>{const{cancelablePromise:f}=Or(),[C,b]=(0,y.useState)(s),m=(0,y.useRef)({}),P=(0,y.useRef)({}),Z=(0,y.useCallback)((R=null)=>{Array.isArray(R)&&R.length?R.map(_=>m.current[_]=s[_]):m.current=s},[]),M=(0,y.useCallback)((R,_,ie=!1)=>{const ye=Object.keys(R),Ee=JSON.stringify(ye.sort());if(!P.current[Ee]){P.current[Ee]=!0,ie&&Z(Array.isArray(ie)?ie:ye),ye.map(le=>{m.current[le]||(m.current[le]={}),m.current[le].pending=!0}),b({...m.current});for(let le=0,he=ye.length;le<he;le++){const we=ye[le];f(R[we]).then(se=>{let{result:Q,errMsg:Se}=se;le===he-1&&(P.current[Ee]=!1),typeof _=="function"&&(Q=_(Q)||Q),m.current[we]={...Q,pending:!1},Se===!1&&b({...m.current})}).catch(se=>{throw le===he-1&&(P.current[Ee]=!1),m.current[we]={error:se,pending:!1},b({...m.current}),se})}}},[]);return[C,M,Z]};const Ht=s=>Object.keys(s).length;var vr=s=>{const{Comp:f,restResolve:C,loadPromise:b,params:m,children:P}=s,[Z,M]=br(),[R,_]=br();return(0,y.useEffect)(()=>{Ht(C)&&M(C),Ht(b)&&_(b)},[C,b]),(0,y.useEffect)(()=>{const ie=Ht(Z);ie&&ie===Ht(C)&&m.store.setState(Z)},[Z]),(0,W.jsx)(f,{...m,...Z,...R,children:P})};const wr=s=>s===!1?null:g(s)?s:U(s)?(0,W.jsx)(s,{}):(0,W.jsx)(gr,{}),kr=({Loading:s,ErrorBoundary:f,loadedComp:C})=>{const b=(0,W.jsx)(y.Suspense,{fallback:wr(s),children:C});return f===!1?b:U(f)?(0,W.jsx)(f,{children:b}):(0,W.jsx)(de,{children:b})};var Cr=({Comp:s,routerProps:f,children:C})=>{const{params:b,...m}=f,{loading:P,errorBoundary:Z,...M}=b,R=(0,W.jsx)(vr,{Comp:s,...m,params:M,children:C});return kr({Loading:P,ErrorBoundary:Z,loadedComp:R})};const dr={},Lt=(s,f,C,b)=>q(C)?C.then(m=>{var P;return Cr({Comp:s,routerProps:f,children:(P=m.default)!=null?P:m})}):Cr({Comp:s,routerProps:f,children:C}),Ir=(s,f,C)=>{const b={},m={};return k(s)?(Object.keys(s).map(P=>{const Z=f.getState(P);Z==null?m[P]=s[P](C):b[P]=Z}),{cachedResolve:b,restResolve:m}):{cachedResolve:b,restResolve:m}},Nr=(s,f)=>{if(!k(s))return{};const C={};return Object.keys(s).map(b=>C[b]=s[b](f)),C};var Pr=s=>{const{current:f,menu:C,...b}=s,m=f.map(M=>{const{component:R,resolve:_,loadData:ie,loading:ye,errorBoundary:Ee,icon:le,...he}=M;return he}),P=[...f].filter(M=>M.component),Z=(M=0)=>{if(!P.length)return null;const R=P.shift(),{component:_,resolve:ie,loadData:ye,icon:Ee,key:le,...he}=R;if(typeof _=="function"||q(_)){const we=he.path;let se=dr[we];const{cachedResolve:Q,restResolve:Se}=Ir(ie,b.store,he),Ne={loadPromise:Nr(ye,he),restResolve:Se,params:{current:m,...b,...he,...Q}},Me=Z(M+1);if(se)return Lt(se,Ne,Me,we);try{se=_(),se=g(se)?_:se}catch(Be){se=_}return q(se)?se.then(Be=>{var We;return se=(We=Be.default)!=null?We:Be,dr[we]=se,Lt(se,Ne,Me,we)}):(dr[we]=se,Lt(se,Ne,Me,we))}return typeof _=="string"?w(_):_};return Z()},Vt=s=>{const[f,C]=(0,y.useState)(s),[b,m]=(0,y.useState)(),[P,Z]=(0,y.useState)(),M=(0,y.useRef)(),R=(0,y.useRef)(),_=(0,y.useRef)(),ie=(0,y.useRef)(),ye=()=>{typeof M.current=="function"&&(M.current({cancel:G.cancelMsg}),M.current=null)},Ee=(0,y.useCallback)(Q=>{typeof Q=="function"?C(Se=>({...Se,...Q(Se)})):k(Q)&&C(Se=>({...Se,...Q}))},[]),le=(Q,Se="pushState")=>{const{basepath:Ne,browserRouter:Me}=ie.current,Be=_.current,{path:We,params:$t}=tt(Q,Ne,Me,Be);We!==Be&&se({inputPath:We,inputParams:$t},()=>history[Se](Q==null?void 0:Q.state,"",We))},he=(0,y.useCallback)(Q=>le(Q),[]),we=(0,y.useCallback)(Q=>le(Q,"replaceState"),[]),se=(0,y.useCallback)(({inputPath:Q="",inputParams:Se={}},Ne)=>{const Me=+new Date,{browserRouter:Be,childKey:We,idKey:$t,title:fr,routers:Bt,beforeRender:Ft,afterRender:Ct,basepath:Xt,allowedNotFound:yt,...Lr}=ie.current;if(!Q){const{path:Ue,params:gt}=jt(Be);Q=Ue,Se={...Se,...gt}}new Promise((Ue,gt)=>{Bt!=null&&Bt.length||gt("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),Q!==_.current&&typeof Ft=="function"?Ft({path:Q,params:Se,prevPath:_.current},Ue,gt):Ue()}).then(Ue=>{var gt,hr;if(Ue===!1)return;const zr=Ue==null?void 0:Ue.path;if(zr&&It(Xt,zr,Be)!==Q){we(Ue);return}R.current=(gt=R.current)!=null?gt:Q;const{redirect:st,current:ut,menu:Zr}=_e(A(Bt),Q.split("?")[0],Se,We,$t);if(st){if(yt&&st===ve&&(typeof yt=="boolean"||typeof yt=="string"&&er(R.current,yt)||d(yt)&&yt.find(pr=>er(R.current,pr))))return;if(d(st)){console.error(`\u522B\u95F9\uFF0C[${[Q,...st].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return st===ve?we({path:st}):he({path:st,exact:!0})}Ne==null||Ne(),(Q==null?void 0:Q.split("?")[0])!==((hr=_.current)==null?void 0:hr.split("?")[0])&&Qt(),Wt(ut,fr);const Br={eventBus:tr,store:rr,useStore:pt,...Lr,updateRouter:Ee,emitRouter:ht.subscribe,router:{push:he,replace:we},current:ut,menu:Zr,inputPath:R.current,prevPath:_.current,basepath:Xt,title:fr,history:Te};ht.setState({...Br,browserRouter:Be});const or=Pr(Br);if(_.current=Q,R.current=null,ye(),q(or)){const{promiseFn:pr,cancelFn:Rr}=F(or,{delay:G.delay,msg:{timeout:G.timeoutMsg}});return M.current=Rr,Z(!0),pr.then(nr=>{M.current=null;const{result:Mr,errMsg:ir}=nr,mr=ir===!1?Mr:ir!=null&&ir.timeout?me({error:{errMsg:`${Q} ${ir.timeout}`}}):null;mr&&(Z(!1),Pt(Ct,ut.slice(-1)[0],Me),m(mr))}).catch(nr=>{throw M.current=null,Z(!1),Pt(Ct,ut.slice(-1)[0],Me),m(me({error:nr})),nr})}Pt(Ct,ut.slice(-1)[0],Me),m(or)}).catch(Ue=>{throw m(me({error:Ue})),Ue})},[]);return(0,y.useEffect)(()=>{const{childKey:Q="children",idKey:Se="path",browserRouter:Ne=!1,routers:Me=[],basepath:Be="",exact:We=!1,inputPath:$t="",inputParams:fr={},...Bt}=f,Ft=B(Be),Ct=vt(A(Me),Ne,Q,Se,Ft,We);ie.current={...Bt,childKey:Q,idKey:Se,browserRouter:Ne,routers:Ct,basepath:Ft};const Xt=Ne?"popstate":"hashchange",yt=()=>se({});return se({inputPath:$t,inputParams:fr}),rt.on(he),Zt.on(we),window.addEventListener(Xt,yt,!1),()=>{ye(),rt.off(he),Zt.off(we),window.removeEventListener(Xt,yt,!1)}},[f]),{updateRouter:Ee,output:b,loading:P}},Er=s=>{const{to:f,onClick:C,preventDefault:b,stopPropagation:m=!0,exact:P=!0,target:Z,...M}=s,R=()=>{const _=typeof f=="string"?{exact:P,path:f}:{exact:P,...f};rt.emit(_)};return _=>{var ie;if(_.preventDefault(),m&&_.stopPropagation(),!(M!=null&&M.disabled)){if(!b){if(Z){const{browserRouter:ye}=ht.getState(),Ee=typeof f=="string"?f:(ie=f==null?void 0:f.path)!=null?ie:"",le=Nt(f==null?void 0:f.query),he=ye||Ee.indexOf("#/")>-1||Ke(Ee);window==null||window.open(`${he?"":"#"}${Ee}${le}`,Z);return}R()}typeof C=="function"&&C()}}},Ut=K(982),zt={};zt.styleTagTransform=xt(),zt.setAttributes=_t(),zt.insert=lt().bind(null,"head"),zt.domAPI=ot(),zt.insertStyleElement=mt();var Wr=oe()(Ut.Z,zt),qt=Ut.Z&&Ut.Z.locals?Ut.Z.locals:void 0;const jr=s=>{if(!s)return qt.link;const f=s.trim().split(" ").filter(Boolean),C=f.find(b=>b==="active")?[qt.active]:[];return[qt.link,...C,...f].join(" ")};var Dr=s=>{const{to:f,onClick:C,preventDefault:b,stopPropagation:m,exact:P,target:Z,className:M,...R}=s;return(0,W.jsx)("span",{onClick:Er(s),className:jr(M),...R})},Sr=()=>{const[s,f]=(0,y.useState)(ht.getState());return(0,y.useEffect)(()=>ht.subscribe(C=>f(C)),[]),s};const _r=ht.getState,Ar=ht.subscribe}(),re}()})},2445:function(Ot,pe,He){(function(Le,Fe){Ot.exports=Fe(He(7378))})(this,function(Le){return function(){"use strict";var Fe={53:function(y,a,x){var d,k=x(899),g=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,z=k.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function U(q,F,B){var W,te={},me=null,be=null;B!==void 0&&(me=""+B),F.key!==void 0&&(me=""+F.key),F.ref!==void 0&&(be=F.ref);for(W in F)p.call(F,W)&&!A.hasOwnProperty(W)&&(te[W]=F[W]);if(q&&q.defaultProps)for(W in F=q.defaultProps,F)te[W]===void 0&&(te[W]=F[W]);return{$$typeof:g,type:q,key:me,ref:be,props:te,_owner:z.current}}d=S,a.jsx=U,d=U},458:function(y,a,x){y.exports=x(53)},899:function(y){y.exports=Le}},ge={};function K(y){var a=ge[y];if(a!==void 0)return a.exports;var x=ge[y]={exports:{}};return Fe[y](x,x.exports,K),x.exports}(function(){K.d=function(y,a){for(var x in a)K.o(a,x)&&!K.o(y,x)&&Object.defineProperty(y,x,{enumerable:!0,get:a[x]})}})(),function(){K.o=function(y,a){return Object.prototype.hasOwnProperty.call(y,a)}}(),function(){K.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})}}();var re={};return function(){K.r(re),K.d(re,{createContainer:function(){return a},useAsync:function(){return z},useCancelablePromise:function(){return p},useClickAway:function(){return q},useDebounce:function(){return B},useDelayState:function(){return me},useEleResize:function(){return qe},useEvent:function(){return Mt},useFirstMounted:function(){return W},useInterval:function(){return it},usePrevious:function(){return ft},useRaf:function(){return Pe},useScroll:function(){return ne},useSearch:function(){return Et},useStateFromProps:function(){return Qt},useStore:function(){return ur},useTime:function(){return ht},useUpdate:function(){return rr},useUpdateEffect:function(){return te},useWinResize:function(){return pt}});var y=K(899),a=u=>(w,j)=>{const[O,I]=(0,y.useState)(()=>{const oe=u==null?void 0:u.getState(w);return oe!==void 0?oe:(j!==void 0&&(u==null||u.setState({[w]:j},!0)),j)}),J=(0,y.useCallback)(oe=>u==null?void 0:u.setState({[w]:typeof oe=="function"?oe(u==null?void 0:u.getState(w)):oe}),[]),de=(0,y.useCallback)(oe=>u==null?void 0:u.subscribe(w,oe),[]),ae=(0,y.useCallback)((oe=oe)=>u==null?void 0:u.clean(oe),[]);return(0,y.useEffect)(()=>{u==null||u.subscribe(w,oe=>I(oe))},[]),[O,J,de,ae]},x=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),d=u=>x(u)==="object",k=u=>x(u)==="function",g=u=>x(u)==="promise"||d(u)&&k(u.then),S=(u,w=12e4,j="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!g(u))return{};let O=null,I=null;return{promiseFn:new Promise((J,de)=>{O=(ae="canceled")=>{clearTimeout(I),J({canceled:!0,errMsg:ae})},w&&(w=typeof w!="number"?12e4:w,I=setTimeout(()=>O(j),w)),u.then(ae=>{clearTimeout(I),J({result:ae,errMsg:!1})}).catch(ae=>{clearTimeout(I),de(ae)})}),cancelFn:O}},p=()=>{const u=(0,y.useRef)([]);return(0,y.useEffect)(()=>()=>{u.current.map(w=>w.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,y.useCallback)((w,j=!0)=>{const O=S(w,j);return u.current.indexOf(O)===-1&&u.current.push(O),O.promiseFn},[])}},z=(u={})=>{const{cancelablePromise:w}=p(),[j,O]=(0,y.useState)(u),I=(0,y.useRef)({}),J=(0,y.useRef)({}),de=(0,y.useCallback)((oe=null)=>{Array.isArray(oe)&&oe.length?oe.map(Ie=>I.current[Ie]=u[Ie]):I.current=u},[]),ae=(0,y.useCallback)((oe,Ie,ot=!1)=>{const St=Object.keys(oe),lt=JSON.stringify(St.sort());if(!J.current[lt]){J.current[lt]=!0,ot&&de(Array.isArray(ot)?ot:St),St.map(Re=>{I.current[Re]||(I.current[Re]={}),I.current[Re].pending=!0}),O({...I.current});for(let Re=0,_t=St.length;Re<_t;Re++){const At=St[Re];w(oe[At]).then(mt=>{let{result:kt,errMsg:xt}=mt;Re===_t-1&&(J.current[lt]=!1),typeof Ie=="function"&&(kt=Ie(kt)||kt),I.current[At]={...kt,pending:!1},xt===!1&&O({...I.current})}).catch(mt=>{throw Re===_t-1&&(J.current[lt]=!1),I.current[At]={error:mt,pending:!1},O({...I.current}),mt})}}},[]);return[j,ae,de]},A=(u,w)=>Object.prototype.hasOwnProperty.call(u!=null?u:{},w),U=u=>A(u,"current"),q=(u,w,j="click")=>{(0,y.useEffect)(()=>{const O=J=>{const de=U(u)?u.current:u;de!=null&&de.contains&&!de.contains(J.target)&&w(J)},I=typeof j=="string"?[j]:j;return I.map(J=>{document.addEventListener(J,O,!1)}),()=>{I.map(J=>{document.removeEventListener(J,O,!1)})}},[u,w,j])},F=(u=()=>{},w=60)=>{let j=null;return function(...O){clearTimeout(j),j=setTimeout(()=>u.apply(this,O),w)}},B=(u,w=60)=>(0,y.useMemo)(()=>F(u,w),[w]),W=()=>{const u=(0,y.useRef)(!0);return u.current?(u.current=!1,!0):!1},te=(u,w=[])=>{const j=W();(0,y.useEffect)(()=>{if(!j)return u()},w)},me=(u,w=450)=>{const[j,O]=(0,y.useState)(u);return te(()=>{let I;return u||w===0?O(u):I=setTimeout(()=>O(u),w),()=>I&&clearTimeout(I)},[u]),[j,O]},be=()=>![typeof window,typeof document].includes("undefined"),Ge=u=>x(u).indexOf("element")>-1,nt=(u=null)=>{var w,j;return be()?Ge(u)?{width:u.clientWidth,height:u.clientHeight}:{width:(w=window.innerWidth)!=null?w:document.documentElement.clientWidth,height:(j=window.innerHeight)!=null?j:document.documentElement.clientHeight}:{width:0,height:0}};const X=(u,w)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const j=document.createElement("object");return j.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),j.setAttribute("class","resize-sensor"),j.onload=()=>{j.contentDocument.defaultView.addEventListener("resize",w,!1),w()},j.type="text/html",u.appendChild(j),j.data="about:blank",j};var Ye=(u,w=60)=>{if(!be())return;u=U(u)?u.current:u!=null?u:document.body;let j,O=[];const I=F(()=>O.map(oe=>oe(u)),w),J=oe=>{j||(j=X(u,I)),O.indexOf(oe)===-1&&O.push(oe)},de=oe=>{const Ie=O.indexOf(oe);Ie!==-1&&O.splice(Ie,1),O.length===0&&j&&ae()},ae=()=>{j&&j.parentNode&&(j.contentDocument&&j.contentDocument.defaultView.removeEventListener("resize",I,!1),j.parentNode.removeChild(j),j=void 0,O=[])};return{element:u,bind:J,unbind:de,destroy:ae}},Pe=(u={})=>{const w=(0,y.useRef)(0),[j,O]=(0,y.useState)(u),I=(0,y.useCallback)(J=>{cancelAnimationFrame(w.current),w.current=requestAnimationFrame(()=>O(J))},[]);return(0,y.useEffect)(()=>()=>cancelAnimationFrame(w.current),[]),[j,I]},qe=(u=null,w=60)=>{const j=U(u)?u.current:u,{bind:O,destroy:I}=Ye(j,w),[J,de]=Pe(nt(j));return(0,y.useEffect)(()=>(O(()=>j&&de(nt(j))),()=>I()),[j]),J},Mt=u=>{const w=(0,y.useRef)(null);return(0,y.useLayoutEffect)(()=>{w.current=u}),(0,y.useCallback)(w.current,[])},it=(u,w)=>{const j=(0,y.useRef)();(0,y.useEffect)(()=>{j.current=u},[u]),(0,y.useEffect)(()=>{if(w){const O=setInterval(()=>j.current(),w);return()=>clearInterval(O)}},[w])},ft=u=>{const w=(0,y.useRef)();return(0,y.useEffect)(()=>{w.current=u},[u]),w.current},L=(u=null)=>{var w,j,O,I;return be()?Ge(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:(j=(w=window.pageXOffset)!=null?w:document.documentElement.scrollLeft)!=null?j:document.body.scrollLeft,top:(I=(O=window.pageYOffset)!=null?O:document.documentElement.scrollTop)!=null?I:document.body.scrollTop}:{left:0,top:0}},ne=(u=null)=>{const[w,j]=Pe(L(u));return(0,y.useEffect)(()=>{const O=()=>j(L(u)),I=Ge(u)?u:window;return I.addEventListener("scroll",O,{capture:!1,passive:!0}),()=>I.removeEventListener("scroll",O)},[u]),w},G=u=>x(u)==="array",ve=u=>G(u)&&!!u.length,Te=(u,w,j=[],O=!1,I=null)=>ve(u)?w?(j=typeof j=="string"?j.split(","):j,u.filter(J=>(j=j.length>0?j:Object.keys(J),j.filter(de=>{const ae=J[de];if(ae==null)return!1;if(O)return ae===w;const oe=new RegExp(w,"gi"),Ie=ae.toString().match(oe);return Ie&&I&&(J[de]=I(ae.toString().replace(oe,`<span style="background-color:yellow">${Ie[0]}</span>`),{display:"inline-block"})),Ie}).length))):u:[],Qe=(u,w="id")=>{if(!ve(u))return u;const j=[],O=[];return u.map(I=>{const J=d(I)?I[w]:I;O.includes(J)||(O.push(J),j.push(I))}),j},Xe=u=>(u==null?void 0:u.$$typeof)&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",Je=u=>u==null?void 0:u.__v_isVNode;const _e=u=>{if(!G(u)&&!d(u))return u;const w=G(u)?[]:{};for(const j in u)if(A(u,j)){const O=u[j];w[j]=Xe(O)||Je(O)||typeof O!="object"?O:O!==u?_e(O):"cyclic"}else Object.setPrototypeOf(w,{[j]:u[j]});return w};var Ke=_e;const et=u=>(w,j="children")=>{if(!Array.isArray(w))return w;const O=Ke(w),I=J=>{const de=[];return J.map(ae=>{if(ve(ae[j])){const oe=I(ae[j])||[];ae[j]=oe,oe.length>0&&de.push(ae)}}),u(J,de)};return I(O)};var It=(u,w,j,O="name",I="id",J="children",de=!1)=>et((ae,oe)=>Qe([...Te(ae,w,O,de,j),...oe],I))(u,J),vt=K(458),Nt=(u,w)=>(0,vt.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...w}),Et=(u=null,w=Nt)=>{const[j,O]=(0,y.useState)(u),I=(0,y.useCallback)((...J)=>{const[de,ae,...oe]=J;if(!ae)O(null);else{J=[de,ae,w,...oe];const Ie=It(...J);O(Ie)}},[]);return[j,I]},Qt=u=>{const[w,j]=(0,y.useState)(u);return(0,y.useEffect)(()=>j(u),[u]),[w,j]},Wt=()=>{const u={};return{on:(w,j)=>{u[w]||(u[w]=[]),u[w].indexOf(j)===-1&&u[w].push(j)},emit:(w,j)=>{u[w]&&u[w].map(O=>O(j))},off:(w,j=null)=>{if(u[w]){if(typeof j!="function")return u[w]=[];const O=u[w].indexOf(j);O>-1&&u[w].splice(O,1)}}}};const jt=u=>{const w={};for(let j in u)A(u,j)||(w[j]=u[j]);return w};var Pt=(u,w)=>{if(!d(u))return w;if(!d(w))return u;const j={...jt(u),...jt(w)},O={...u,...w};return Object.keys(j).map(I=>{Object.setPrototypeOf(O,{[I]:j[I]})}),O},tt=()=>{const{on:u,emit:w,off:j}=Wt(),O={};return{getState:I=>Ke(O[I]),setState:(I,J=!1)=>{if(typeof I=="function"&&(I=I(Ke(O))),!d(I))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const de=Ke(I);Object.keys(de).map(ae=>{const oe=O[ae],Ie=de[ae],ot=d(Ie)&&d(oe)?Pt(oe,Ie):Ie;!J&&w(ae,ot),O[ae]=ot})},subscribe:(I,J)=>(u(I,J),()=>j(I,J)),unsubscribe:j,clean:I=>{typeof I=="string"?O[I]=void 0:Array.isArray(I)?I.map(J=>O[J]=void 0):Object.keys(O).map(J=>O[J]=void 0)}}};const er=tt();var ur=a(er);const at=u=>u<10?"0"+u:u;var Dt=(u=new Date)=>{const w=new Date(u),j=w.getFullYear(),O=w.getDay(),I=at(w.getMonth()+1),J=at(w.getDate()),de=at(w.getHours()),ae=at(w.getMinutes()),oe=at(w.getSeconds());return[j,I,J,de,ae,oe,O]};const wt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Fr=(u,w,j="-")=>u.replace(new RegExp(j,"g"),w);var rt=(u=new Date,w=["-","-"," ",":",":",""],j=wt)=>{const O=Dt(u);let I="";return w.map((J,de)=>{var ae;return I+=(de===6?j[O[de]]:(ae=O[de])!=null?ae:"")+J}),I};const Zt=()=>rt(new Date,["-","-"," ",":",":"," ",""]);var ht=()=>{const[u,w]=(0,y.useState)("");return it(()=>{w(Zt())},1e3),[u]};const tr=u=>++u;var rr=()=>{const[,u]=(0,y.useState)(0);return(0,y.useCallback)(()=>u(tr),[])},pt=()=>{const[u,w]=Pe(nt());return(0,y.useEffect)(()=>{const j=()=>w(nt());return window.addEventListener("resize",j,!1),()=>window.removeEventListener("resize",j,!1)},[]),u}}(),re}()})},5820:function(Ot){(function(pe,He){Ot.exports=He()})(this,function(){return function(){"use strict";var pe={};(function(){pe.d=function(e,t){for(var r in t)pe.o(t,r)&&!pe.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){pe.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){pe.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();var He={};pe.r(He),pe.d(He,{a2o:function(){return Le},addAtNext:function(){return re},addAtPos:function(){return y},addClass:function(){return x},addDays:function(){return d},addHours:function(){return k},addMonths:function(){return g},addNodes:function(){return S},addScript:function(){return z},addStyle:function(){return A},addYears:function(){return U},arr2Tree:function(){return be},arr2TreeById:function(){return Ge},arr2TreeByPath:function(){return nt},arr2obj:function(){return q},arr2str:function(){return me},backTop:function(){return ne},base2Ten:function(){return G},baseConversion:function(){return Te},baseFetch:function(){return vt},cacheData:function(){return er},cancelablePromise:function(){return Ke},changePos:function(){return ur},classifyArr:function(){return at},clone:function(){return tt},compareVersion:function(){return Dt},compose:function(){return wt},copyToClipboard:function(){return Fr},createContainer:function(){return rt},createElement:function(){return ht},createNode:function(){return O},createStore:function(){return ae},createTextElement:function(){return Zt},curry:function(){return oe},cyclic:function(){return Nt},dash2camel:function(){return Ie},debounce:function(){return ot},deleteNodes:function(){return St},deviceType:function(){return lt},dlfile:function(){return At},dropInfo:function(){return wr},editNodes:function(){return kr},emitter:function(){return I},equal:function(){return Qt},escapeHTML:function(){return Cr},eventBus:function(){return Lt},fetcher:function(){return Pr},filter:function(){return Er},filterList:function(){return Wr},findChildEle:function(){return qt},findMax:function(){return jr},firstUpper:function(){return Dr},fixFileSizeUnit:function(){return Sr},fixPath:function(){return _r},fixRoute:function(){return Ar},fixSize:function(){return s},fixTimeUnit:function(){return f},flatten:function(){return b},formatNum:function(){return m},formatPassTime:function(){return M},formatTime:function(){return ie},fullScreen:function(){return se},getElementsSize:function(){return gr},getExplore:function(){return Se},getLeaveTime:function(){return We},getMeta:function(){return Bt},getMonthDays:function(){return Ft},getOffset:function(){return Ct},getOsInfo:function(){return yt},getParams:function(){return Lr},getPosition:function(){return kt},getRelative:function(){return hr},getSelected:function(){return zr},getTextSize:function(){return st},getTime:function(){return Z},getTouchPosition:function(){return gt},getType:function(){return Fe},getValue:function(){return Br},getViewportSize:function(){return mt},hasClass:function(){return or},hasProp:function(){return Ye},hex2rgba:function(){return pr},imgtocanvas:function(){return Rr},isArray:function(){return ge},isAsync:function(){return _e},isBrowser:function(){return p},isDate:function(){return nr},isElement:function(){return a},isError:function(){return Mr},isFunction:function(){return Je},isIE:function(){return ir},isObject:function(){return F},isReactComp:function(){return mr},isReactEle:function(){return Wt},isRef:function(){return Pe},isRegExp:function(){return qr},isTouch:function(){return Ue},isUrl:function(){return $r},isValidArr:function(){return Vt},isValidObj:function(){return ar},isVueEle:function(){return jt},json2str:function(){return Qr},loadBase64:function(){return eo},loadImage:function(){return Xr},loop:function(){return Gr},matchedStr:function(){return Jr},memoize:function(){return i},merge:function(){return D},mergeArr:function(){return h},mergeClass:function(){return Y},mergeObj:function(){return T},mergeOwnProp:function(){return de},message:function(){return ze},monthDate:function(){return Oe},moveNodes:function(){return Ae},obj2arr:function(){return $e},obj2str:function(){return W},omit:function(){return Ce},once:function(){return De},padStart:function(){return bt},params2data:function(){return Xe},params2str:function(){return Qe},pick:function(){return lr},promisify:function(){return Gt},randColor:function(){return xr},randItem:function(){return sr},randNum:function(){return ct},randPercent:function(){return Rt},randStr:function(){return Tt},randTrue:function(){return dt},removeClass:function(){return ee},resize:function(){return Yr},rgba2hex:function(){return Kr},rmUnit:function(){return no},scheduler:function(){return lo},scrollIsBottom:function(){return so},scrollTo:function(){return qe},scrollToAnchor:function(){return uo},scrollTop:function(){return X},selectedHandle:function(){return K},session:function(){return co},setMeta:function(){return fo},setStyle:function(){return Ve},sleep:function(){return cr},sleepSync:function(){return Tr},sort:function(){return ho},sortObj:function(){return po},storage:function(){return mo},store:function(){return yo},str2Html:function(){return xt},str2code:function(){return go},sysLang:function(){return bo},template:function(){return vo},ten2Base:function(){return ve},throttle:function(){return wo},timeGap:function(){return jo},timeInterval:function(){return ro},timestamp:function(){return Re},toggleClass:function(){return So},traverItem:function(){return C},traverList:function(){return zo},unescapeHTML:function(){return $o},unique:function(){return Ut},updateId:function(){return Fo},updateNode:function(){return j},updateTreeNodes:function(){return To},uuidv4:function(){return _t},validObj:function(){return Oo},watchScreen:function(){return Io},watermark:function(){return No},weekDate:function(){return Po},wrapPromise:function(){return Do}});var Le=(e,t="key",r="value")=>{const o={};return(e||[]).map(n=>o[n[t]]=n[r]),o},Fe=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),ge=e=>Fe(e)==="array",K=e=>(t,r,o="id",n="children")=>{if(!ge(t))return null;const c=(v,$="")=>{for(let N=0,V=v.length;N<V;N++){const xe=v[N];if(xe[o]===r)return e(v,N,$)||v[N];if(ge(xe[n])){const je=c(xe[n],xe[o]);if(je)return je}}};return c(t),t},re=(e,t,r,o="id",n="children")=>K((c,v)=>c.splice(v,0,r))(e,t,o,n),y=(e,t,r,o,n="id",c="children")=>K((v,$)=>{const N=v[$];N.children?N.children.splice(o,0,r):N.children=[r]})(e,t,n,c),a=e=>Fe(e).indexOf("element")>-1,x=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),n=[...new Set([...r,...o])];e.className=n.join(" ")},d=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},k=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},g=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},S=(e,t,r,o="id",n="children")=>K((c,v)=>{const $=c[v];return $[n]=[...$[n]||[],...r],$})(e,t,o,n),p=()=>![typeof window,typeof document].includes("undefined"),z=e=>{if(p())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},A=(e,t)=>{if(p())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===t))r();else{const n=document.createElement("style");n.onerror=c=>o(new Error(`Failed to load '${t}' style`)),n.onload=r,n.innerHTML=e,n.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===e))r();else{const n=document.createElement("link");n.onerror=c=>o(new Error(`Failed to load '${e}'`)),n.onload=r,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},U=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},q=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:n})=>r[o]=n),r},F=e=>Fe(e)==="object";const B=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,F(o)?t+=`${r}=${B(o)}`:Array.isArray(o)?t+=`${r}=${me(o)}`:t+=`${r}=${o}`}),`{${t}}`};var W=B;const te=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,F(r)?t+=W(r):Array.isArray(r)?t+=te(r):t+=`${r}`}),`[${t}]`};var me=te,be=e=>(t,r="id",o="children",n=-1)=>{if(!ge(t))return t;const c={},v=t.map($=>$[r]);return[...t].map($=>{var N;const V={...$},{[r]:xe}=V;if(xe!=null){let{parentId:je}=V;je==null&&(je=(N=e==null?void 0:e(V))!=null?N:n,V.parentId=je),c[xe]||(c[xe]=[]),V[o]=c[xe],c[je]||(c[je]=[]),c[n]||(c[n]=[]),v.includes(je)?c[je].push(V):c[n].push(V)}}),c[n]},Ge=(e,t="id",r="children",o=-1)=>be(n=>{const c=n[t].match(/\S+(?=-\S+)/);return(c==null?void 0:c[0])||o})(e,t,r,o),nt=(e,t="path",r="children",o=null)=>be(n=>{var c,v,$,N;const V=n[t],xe=V.match(/.*\/[^:/]+\/:[^/]+/);return xe?(v=(c=xe[0].match(/(.*)\/:+/))==null?void 0:c[1])!=null?v:o:(N=($=V.match(/(.*)\/+/))==null?void 0:$[1])!=null?N:o})(e,t,r,o),X=()=>{var e,t;return p()&&((t=(e=window.pageYOffset)!=null?e:document.documentElement.scrollTop)!=null?t:document.body.scrollTop)},Ye=(e,t)=>Object.prototype.hasOwnProperty.call(e!=null?e:{},t),Pe=e=>Ye(e,"current"),qe=(e=0,t)=>{var r;p()&&(t=Pe(t)?t.current:t!=null?t:window,(r=t.scrollTo)==null||r.call(t,{top:e,behavior:"smooth"}))},Mt=`.huxy-totop-bar {
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
}`;const it=()=>document.getElementsByClassName("huxy-totop-bar")[0],ft=e=>{if(it())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>qe(),!1),t},L=()=>{const e=it();e&&document.body.removeChild(e)};var ne=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!p())return;A(Mt,"huxy-backtop-css");const r=()=>{X()>e?ft(t):L()};return(()=>(document.addEventListener("scroll",r,!1),()=>{L(),document.removeEventListener("scroll",r,!1)}))()},G=(e=0,t=2)=>parseInt(String(e),t),ve=(e=0,t=2)=>Number(e).toString(t),Te=(e=0,t=2,r=16)=>ve(G(e,t),r),Qe=e=>{if(!F(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const n=o>0?"&":"?";t.push(`${n}${r}=${e[r]}`)}),t.join("")},Xe=e=>{if(!F(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},Je=e=>Fe(e)==="function",_e=e=>Fe(e)==="promise"||F(e)&&Je(e.then),Ke=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!_e(e))return{};let o=null,n=null;return{promiseFn:new Promise((c,v)=>{o=($="canceled")=>{clearTimeout(n),c({canceled:!0,errMsg:$})},t&&(t=typeof t!="number"?12e4:t,n=setTimeout(()=>o(r),t)),e.then($=>{clearTimeout(n),c({result:$,errMsg:!1})}).catch($=>{clearTimeout(n),v($)})}),cancelFn:o}};const et=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>Xe(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>Qe(e).slice(1)}],It=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(n=>e[n]);if(o.length===1){const n=o[0],c=r?t:n;return c==="params"?{query:e[n]}:{result:e[n],type:c}}else if(o.length>1){const n=o.filter(v=>v!=="params").slice(-1)[0],c=r?t:n;return c==="params"?{query:e.params||e[n]}:{query:e.params,result:e[n],type:c}}};var vt=(e,t)=>r=>(o,n={})=>{const{headers:c,dataType:v,data:$,formData:N,form:V,params:xe,...je}=n,Ze={data:$,formData:N,form:V,params:xe};let yr;const{query:Kt,result:oo,type:_o}=It(Ze,v)||{};if(!je.body&&oo){const Vr=et.find(Ur=>Ur.type===_o);yr=Vr.headers,je.body=Vr.body(oo)}Kt&&(o=`${o}${Qe(Kt)}`);const{promiseFn:Ao}=Ke(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...yr,...c},...je}),t);return Ao.then(({result:Vr,errMsg:Ur})=>e(Ur?{status:408,statusText:Ur}:Vr))},Nt=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let n=!1;for(let c in o)Ye(o,c)&&r(o[c])&&(o[c]="cyclic",n=!0);return n}return!1};return r(e)&&e};const Et=(e,t)=>{const r=Fe(e),o=Fe(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(Nt(e)&&Nt(t))return Et(e,t);for(let n in t)if(Ye(e,n)!==Ye(t,n)||!Et(e[n],t[n]))return!1;return!0};var Qt=Et,Wt=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",jt=e=>e==null?void 0:e.__v_isVNode;const Pt=e=>{if(!ge(e)&&!F(e))return e;const t=ge(e)?[]:{};for(const r in e)if(Ye(e,r)){const o=e[r];t[r]=Wt(o)||jt(o)||typeof o!="object"?o:o!==e?Pt(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var tt=Pt,er=(e=100)=>{const t=[];let r=-1;const o=c=>{var v,$;const N=t.length,V=tt(c);return Qt(V,(v=t[N-1])==null?void 0:v.data)?{index:r,length:N,data:($=t[r])==null?void 0:$.data}:(t.push({data:V}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},n=(c=0)=>{var v;const $=t.length;return r+=c,r=r<0?0:r>$-1?$-1:r,{index:r,length:$,data:tt((v=t[r])==null?void 0:v.data)}};return{record:o,cursor:n,jump:c=>{var v;return r=c,{index:r,length:t.length,data:tt((v=t[r])==null?void 0:v.data)}},undo:()=>n(-1),redo:()=>n(1),getList:()=>tt(t),clean:()=>{t.length=0,r=-1}}},ur=(e,t,r)=>{if(!ge(e))return e;const o=e[t],n=e[r];return e.splice(t,1,n),e.splice(r,1,o),e},at=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},Dt=(e,t,r=".")=>{const o=(N,V)=>N.split(V),n=o(e,r),c=o(t,r),v=n.length;let $=0;for(let N=0;N<v;N++)if(n[N]<c[N]){$=v-N;break}return $},wt=(...e)=>(...t)=>{const[...r]=e,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...t)},Fr=e=>{if(!p())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},rt=e=>(t,r)=>{const{getState:o,setState:n,subscribe:c,unsubscribe:v,clean:$}=e;return r!==void 0&&n({[t]:r},!0),{getState:()=>o(t),setState:(N,V)=>n({[t]:N},V),subscribe:N=>c(t,N),unsubscribe:()=>v(t),clean:()=>$(t)}},Zt=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),ht=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:Zt(o))}});const tr=e=>e.startsWith("on"),rr=e=>e!=="children"&&!tr(e),pt=(e,t)=>r=>e[r]!==t[r],u=(e,t)=>r=>!(r in t),w=e=>{const t=Object.keys(e);return{eventProps:t.filter(tr),propertyProps:t.filter(rr)}};var j=(e,t,r)=>{const{eventProps:o,propertyProps:n}=w(t),{eventProps:c,propertyProps:v}=w(r);o.filter(u(t,r)).map($=>{const N=$.toLowerCase().slice(2);e.removeEventListener(N,t[$])}),n.filter(u(t,r)).map($=>e[$]=""),v.filter(pt(t,r)).map($=>e[$]=r[$]),c.filter(pt(t,r)).map($=>{const N=$.toLowerCase().slice(2);e.addEventListener(N,r[$])})},O=e=>{if(!p())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return j(t,{},e.props),t},I=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return e[t]=[];const o=e[t].indexOf(r);o>-1&&e[t].splice(o,1)}}}};const J=e=>{const t={};for(let r in e)Ye(e,r)||(t[r]=e[r]);return t};var de=(e,t)=>{if(!F(e))return t;if(!F(t))return e;const r={...J(e),...J(t)},o={...e,...t};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},ae=()=>{const{on:e,emit:t,off:r}=I(),o={};return{getState:n=>tt(o[n]),setState:(n,c=!1)=>{if(typeof n=="function"&&(n=n(tt(o))),!F(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const v=tt(n);Object.keys(v).map($=>{const N=o[$],V=v[$],xe=F(V)&&F(N)?de(N,V):V;!c&&t($,xe),o[$]=xe})},subscribe:(n,c)=>(e(n,c),()=>r(n,c)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(c=>o[c]=void 0):Object.keys(o).map(c=>o[c]=void 0)}}},oe=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...n)=>r(...o,...n);return r},Ie=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),ot=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},St=(e,t,r="id",o="children")=>K((n,c)=>n.splice(c,1))(e,t,r,o),lt=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Re=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),_t=()=>{let e=Re();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},At=(e,t)=>{if(p())if(t=t||_t(),typeof e=="string")fetch(e).then(r=>r.blob()).then(r=>{const o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)});else{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)}},mt=(e=null)=>{var t,r;return p()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(r=window.innerHeight)!=null?r:document.documentElement.clientHeight}:{width:0,height:0}},kt=e=>{var t;if(p())return e=Pe(e)?e.current:e!=null?e:document.body,(t=e.getBoundingClientRect)==null?void 0:t.call(e)},xt=e=>{if(!p())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},Ve=(e,t={},r=!1)=>{if(a(e)){if(r){let o="";Object.keys(t).map(n=>{o+=`${n}: ${t[n]};`}),e.style=o;return}Object.keys(t).map(o=>e.style.setProperty(o,t[o]))}};const Yt=(e=350)=>new Promise(t=>setTimeout(t,e)),Tr=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var cr=Yt,gr=async(e,t=15)=>{if(!p())return;if(typeof e=="string"&&(e=xt(e)),e=Pe(e)?e.current:e,!a(e))return{};const r=e.cloneNode(!0);Ve(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await cr(t);const o=kt(r);return e.parentNode.removeChild(r),o};const Or=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,br=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Ht=(e,t)=>{var r;t=`huxy-drop-arrow-${t}`;const o=(r=e.getAttribute("class"))!=null?r:"";Or.test(o)?e.setAttribute("class",o.replace(br,t)):e.setAttribute("class",`${o} ${t}`)},vr=async(e,t,r)=>{const{left:o,right:n,top:c,bottom:v}=kt(e),{width:$,height:N}=mt(),{width:V,height:xe}=await gr(t);if(n<0||v<0||o>$||c>N)return{};if(r==="vertical"){const je={left:o+"px",top:v+10+"px",right:"auto",bottom:"auto"};let Ze="lt";o+V>$&&(je.left=n-V+"px",Ze="rt"),v+10+xe>N&&(je.top=c-10-xe+"px",Ze=Ze==="lt"?"lb":"rb"),Ve(t,je),Ht(t,Ze)}else{const je={left:n+10+"px",top:c+"px",right:"auto",bottom:"auto"};let Ze="tl";n+10+V>$&&(je.left=o-10-V+"px",Ze="tr"),c+xe>N&&(je.top=v-xe+"px",Ze=Ze==="tl"?"bl":"br"),Ve(t,je),Ht(t,Ze)}};var wr=(e,t,r="horizontal")=>{const o=ot(vr),n=()=>o(e,t,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const c=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),Ve(t,{left:"",top:"",right:"",bottom:""})};return vr(e,t,r),c},kr=(e,t,r,o="id",n="children")=>K((c,v)=>c[v]={...c[v],...r})(e,t,o,n),Cr=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const dr=I();var Lt=e=>{const{on:t,emit:r,off:o}=dr;return{on:n=>t(e,n),emit:n=>r(e,n),off:n=>o(e,n)}};const Ir=120*1e3,Nr=e=>e.json().then(t=>t);var Pr=(e=Nr,t=Ir)=>(r="get")=>vt(e)((r||"get").toUpperCase()),Vt=e=>ge(e)&&!!e.length,Er=(e,t,r=[],o=!1,n=null)=>Vt(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(c=>(r=r.length>0?r:Object.keys(c),r.filter(v=>{const $=c[v];if($==null)return!1;if(o)return $===t;const N=new RegExp(t,"gi"),V=$.toString().match(N);return V&&n&&(c[v]=n($.toString().replace(N,`<span style="background-color:yellow">${V[0]}</span>`),{display:"inline-block"})),V}).length))):e:[],Ut=(e,t="id")=>{if(!Vt(e))return e;const r=[],o=[];return e.map(n=>{const c=F(n)?n[t]:n;o.includes(c)||(o.push(c),r.push(n))}),r};const zt=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=tt(t),n=c=>{const v=[];return c.map($=>{if(Vt($[r])){const N=n($[r])||[];$[r]=N,N.length>0&&v.push($)}}),e(c,v)};return n(o)};var Wr=(e,t,r,o="name",n="id",c="children",v=!1)=>zt(($,N)=>Ut([...Er($,t,o,v,r),...N],n))(e,c),qt=(e,t)=>{var r;const o=[],n=(r=e.children)!=null?r:[];for(let c=0,v=n.length;c<v;c++){const $=n[c];$.className.indexOf(t)>-1&&o.push($)}return o.length===0?null:o.length===1?o[0]:o},jr=(e="")=>{var t;return(t=e.match(/\d+/g))==null?void 0:t.sort((r,o)=>o-r)[0]},Dr=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),Sr=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},_r=(e="")=>e.replaceAll("//","/"),Ar=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",s=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},f=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),n=e%3600,c=~~(n/60);return o<24?`${o}${t[2]}${c}${t[1]}${n%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},C=e=>(t,r="children")=>{if(!ge(t))return t;const o=(n,c=[])=>{n.map((v,$)=>{const N=ge(v[r]);if(v=e(v,c,$,N)||v,N){const{[r]:V,...xe}=v;o(V,[...c,{...xe,"@@index":$}])}})};return o(t),t},b=(e,t="children")=>{const r=[];return C(o=>{const{[t]:n,...c}=o;r.push(c)})(e,t),r},m=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const P=e=>e<10?"0"+e:e;var Z=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),n=P(t.getMonth()+1),c=P(t.getDate()),v=P(t.getHours()),$=P(t.getMinutes()),N=P(t.getSeconds());return[r,n,c,v,$,N,o]},M=(e,t=new Date)=>{e=Z(e),t=Z(t);const r=t.y-e.y,o=t.m-e.m,n=t.d-e.d,c=t.h-e.h,v=t.M-e.M,$=new Date(t.y,t.m,0).getDate(),N=(V,xe,je,Ze,yr)=>{const Kt="\u524D";return xe<0&&(V-=1,xe+=je),V===0?xe+yr+Kt:xe===0?V+Ze+Kt:V+Ze+xe+yr+Kt};return r>0?N(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?N(o,n,$,"\u4E2A\u6708","\u5929"):n>0?N(n,c,24,"\u5929","\u5C0F\u65F6"):c>0?N(c,v,60,"\u5C0F\u65F6","\u5206\u949F"):v>0?v+"\u5206\u949F\u524D":"\u521A\u521A"};const R=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],_=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var ie=(e=new Date,t=["-","-"," ",":",":",""],r=R)=>{const o=Z(e);let n="";return t.map((c,v)=>{var $;return n+=(v===6?r[o[v]]:($=o[v])!=null?$:"")+c}),n};const ye=["","webkit","moz","ms"],Ee=e=>ye.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),le=e=>ye.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),he=e=>ye.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),we=ye.map(e=>`${e}fullscreenchange`);var se=e=>{var t,r;if(!p())return;e=Pe(e)?e.current:e!=null?e:document.body;const o=Ee(document),n=le(e),c=he(document);document[o]?(r=document[c])==null||r.call(document):(t=e[n])==null||t.call(e)};const Q=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var Se=()=>{var e;if(!p())return;const t=window.navigator.userAgent.toLowerCase(),r=(e=Q.find(o=>t.match(o.reg)))!=null?e:{};return{type:r.name,version:t.match(r.reg)[1]}};const Ne=60*1e3,Me=60*Ne,Be=24*Me;var We=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/Be);r-=Be*o;const n=~~(r/Me);r-=Me*n;const c=~~(r/Ne);r-=Ne*c;const v=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${c}\u5206${v}\u79D2`};const $t=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],fr=e=>{if(!Array.isArray(e))return $t;const t=[...$t];return e.map(r=>{const o=t.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var Bt=e=>{const t=fr(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return xt(t.join(""))},Ft=(e=new Date)=>{const t=Z(e);return new Date(t[0],t[1],0).getDate()},Ct=(e=null)=>{var t,r,o,n;return p()?a(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:(r=(t=window.pageXOffset)!=null?t:document.documentElement.scrollLeft)!=null?r:document.body.scrollLeft,top:(n=(o=window.pageYOffset)!=null?o:document.documentElement.scrollTop)!=null?n:document.body.scrollTop}:{left:0,top:0}};const Xt=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>{var t;return{type:"ios",model:e[1],version:(t=e[3])==null?void 0:t.replaceAll("_",".")}}},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var yt=()=>{if(!p())return;const e=window.navigator.userAgent.toLowerCase(),t=Xt.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},Lr=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(n=>{const[c,v]=n.split("=");o[c]=v}),{path:t,params:o}}return{path:t}},Ue=()=>p()&&(window.ontouchstart||navigator.maxTouchPoints),gt=e=>{var t,r,o,n;const{left:c,top:v}=Ct();return{touchX:Ue()?(r=(t=e==null?void 0:e.touches)==null?void 0:t[0])==null?void 0:r.pageX:(e==null?void 0:e.pageX)||(e==null?void 0:e.clientX)+c,touchY:Ue()?(n=(o=e==null?void 0:e.touches)==null?void 0:o[0])==null?void 0:n.pageY:(e==null?void 0:e.pageY)||(e==null?void 0:e.clientY)+v}},hr=(e,t)=>{var r,o;const{touchX:n,touchY:c}=gt(e),{x:v,y:$}=(o=(r=t==null?void 0:t.getBoundingClientRect)==null?void 0:r.call(t))!=null?o:{};return{x:n-(v!=null?v:0),y:c-($!=null?$:0)}},zr=(e,t,r="id",o="children")=>{if(!ge(e))return null;const n=c=>{for(let v=0,$=c.length;v<$;v++){const N=c[v];if(N[r]===t)return[N];if(ge(N[o])){const V=n(N[o]);if(V)return[N].concat(V)}}};return n(e)},st=(e,t,r)=>{if(!p())return;r=Pe(r)?r.current:r!=null?r:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&Ve(o,t),o.innerText=(e!=null?e:"").replace(/[\r\n]/g,""),r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const ut=(e={},t)=>{t=Zr(t);const r=(o,n)=>{if(!(n!=null&&n[0]))return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(e,t)},Zr=(e="")=>{var t;return(t=e.replace(/\[['"]?(.*?)['"]?\]/g,".$1"))==null?void 0:t.split(".")};var Br=ut,or=(e,t="")=>a(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),pr=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,n=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${n})`;const c=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${c})`},Rr=e=>{if(!p())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:n}=e;return t.width=o,t.height=n,r.drawImage(e,0,0,o,n),t},nr=(...e)=>!Number.isNaN(new Date(...e).valueOf()),Mr=e=>Fe(e)==="error",ir=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),mr=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",qr=e=>Fe(e)==="regexp",$r=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),ar=e=>F(e)&&Object.keys(e).length,Qr=e=>F(e)?W(e):Array.isArray(e)?me(e):e,eo=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",n=>r(n))}),Xr=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",n=>r(n)))}),Gr=async(e,t,r=2e3)=>{for(;!(t!=null&&t(e==null?void 0:e()));)await cr(r)},Jr=(e,t=["{","}"])=>{var r,o;return(o=(r=e==null?void 0:e.trim)==null?void 0:r.call(e).match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`)))==null?void 0:o[1]},i=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),c=r.find(v=>v.key===n);if(!c){const v=e(...o);return r.push({key:n,result:v}),r.length>t&&r.shift(),v}return c.result}};const l=(e,t,r="id")=>{if(!ge(e))return t;if(!ge(t))return e;const o={};return[...e,...t].map(n=>{var c;const v=F(n)?(c=n[r])!=null?c:JSON.stringify(n):n;if(o[v]===void 0)o[v]=n;else{const $=o[v];F($)&&F(n)?o[v]=T($,n):ge($)&&ge(n)?o[v]=l($,n):o[v]=n}}),Object.keys(o).map(n=>o[n])};var h=l;const E=(e,t)=>{if(!F(e))return t;if(!F(t))return e;for(let r in t)Ye(t,r)?F(e[r])&&F(t[r])?e[r]=E(e[r],t[r]):ge(e[r])&&ge(t[r])?e[r]=h(e[r],t[r]):e[r]=t[r]:Object.setPrototypeOf(e,{[r]:t[r]});return e};var T=E,D=(e,...t)=>{const r=ge(e)?h:T;return t.map(o=>e=r(e,o)),e},Y=(e,t)=>{var r,o;const n=(r=e==null?void 0:e.split(" "))!=null?r:[],c=(o=t==null?void 0:t.split(" "))!=null?o:[];return[...new Set([...n,...c])].filter(Boolean).join(" ")},ee=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(n=>!r.includes(n));e.className=o.join(" ")},H=`@keyframes huxy-message-animate-in {
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
}`;const ue=()=>document.getElementsByClassName("huxy-message")[0],ce=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},ke=(e,t)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${t}`);const o=document.createElement("span");o.innerText=e;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},fe=(e,t=3250,r,o)=>{if(!p())return;A(H,"huxy-message-css");let n=ue();n||(n=ce());const c=ke(e,o);n.appendChild(c),setTimeout(()=>{n.removeChild(c),r==null||r()},t),setTimeout(()=>{ee(c,"open")},t-250)};var ze={success:(e,t,r)=>fe(e,t,r,"success"),warn:(e,t,r)=>fe(e,t,r,"warn"),warning:(e,t,r)=>fe(e,t,r,"warn"),error:(e,t,r)=>fe(e,t,r,"error"),info:(e,t,r)=>fe(e,t,r,"info")},Oe=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[d(1-r),d(Ft(t)-r)]},Ae=(e,t,r,o,n="id",c="children")=>{let v={};return K(($,N)=>(v=$[N],$.splice(N,1),!0))(e,t,n,c),y(e,r,v,o,n,c),e},$e=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),Ce=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(n=>t.includes(n)?o.push({key:n,value:e[n]}):r[n]=e[n]),{newObj:r,newQuery:o}},De=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},bt=(e="",t=0,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`},lr=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!ge(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},Gt=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(n,c)=>n?o(n):r(c))),xr=()=>"#"+bt((~~(Math.random()*(1<<24))).toString(16),6),ct=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),sr=(e=[])=>e[ct(e.length-1)],Rt=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,n)=>{n===e-1?r[n]=t:(r[n]=ct(1,t-1),t-=r[n])}),r},Tt=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),dt=()=>Math.random()>.5;const Jt=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var Yr=(e,t=60)=>{if(!p())return;e=Pe(e)?e.current:e!=null?e:document.body;let r,o=[];const n=ot(()=>o.map(N=>N(e)),t),c=N=>{!r&&!qt(e,"resize-sensor")&&(r=Jt(e,n)),o.indexOf(N)===-1&&o.push(N)},v=N=>{const V=o.indexOf(N);V!==-1&&o.splice(V,1),o.length===0&&r&&$()},$=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:c,unbind:v,destroy:$}};const Hr=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const n=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var Kr=(e=0,t=0,r=0,o=1)=>{var n;if(e.includes("rgb")){const c=e.match(/rgba?\((.+)\)/);if(c){const v=(n=c[1])==null?void 0:n.split(",").map($=>$.trim());return Hr(...v)}return e}return Hr(e,t,r,o)},no=(e,t="px")=>`${e}`.replace(t,"")-0;const to=()=>typeof(performance==null?void 0:performance.now)=="function"?performance.now():new Date().getTime(),io=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},ao=()=>{const e=[],t=v=>{e.push(v),c(v)},r=()=>e[0],o=()=>e.shift(),n=v=>v.startTime=to(),c=v=>{n(v),e.sort(($,N)=>$.startTime-N.startTime)};return{hub:e,push:t,peek:r,shift:o,update:c}};var lo=(e=5)=>{const{hub:t,push:r,peek:o,shift:n,update:c}=ao(),v=io(()=>{N()&&v()}),$=V=>to()-V.startTime>e,N=()=>{let V=o();for(;V;){if($(V)){c(V);break}const{task:xe}=V;typeof xe=="function"?(V.task=null,xe()):n(),V=o()}return V};return(V=()=>{})=>{r({task:V}),t.length<2&&v()}},so=()=>p()&&document.documentElement.scrollHeight-X()===mt().height,uo=e=>{var t;p()&&(e=Pe(e)?e.current:e!=null?e:window,(t=e.scrollIntoView)==null||t.call(e,{behavior:"smooth",block:"center"}))},co={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch(r){t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},fo=e=>{const t=Bt(e);p()&&document.head.appendChild(...t)},ho=(e,t=null,r=!1)=>[...e||[]].sort((o,n)=>{const c=t?o[t]:o,v=t?n[t]:n;return!isNaN(Number(c))&&!isNaN(Number(c))?r?v-c:c-v:typeof c=="string"&&typeof v=="string"?r?v.localeCompare(c):c.localeCompare(v):typeof c=="string"&&typeof v=="number"?r?-1:1:typeof c=="number"||typeof c=="string"?r?1:-1:r?-1:1}),po=e=>{if(!F(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},mo={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const xo=ae();var yo=rt(xo),go=(e,t=!1)=>(e=t?e:`return ${e};`,Function(e)()),bo=()=>p()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),vo=(e,...t)=>{const r=[];return e.map((o,n)=>{var c;r.push(o,(c=t[n])!=null?c:"")}),r.join("")},wo=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const ko=e=>[12,Ft(e),24,60,60],Co=(e=[],t=[],r=[])=>{let o=!1;const n=[];return t.map((c,v)=>{const $=(o?c-1:c)-e[v];$<0?(n[v]=$+(r[v]||10),o=!0):(n[v]=$,o=!1)}),n.reverse()};var ro=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=ko(t).reverse(),o=Z(e).slice(0,-1).reverse(),n=Z(t).slice(0,-1).reverse();return Co(o,n,r)};const Eo=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var jo=(e,t=new Date)=>{const r=ro(e,t),o=r.findIndex(n=>n>0);return r.map((n,c)=>`${n||0}${Eo[c]}`).slice(o).join("")},So=(e,t)=>{a(e)&&(or(e,t)?ee(e,t):x(e,t))},zo=e=>(t,r="children")=>{if(!ge(t))return t;const o=n=>(n.map(c=>{ge(c[r])&&(c[r]=o(c[r]))}),e(n));return o(t)},$o=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),Fo=(e,t="fuckId",r="children")=>C((o,n,c)=>{o[t]=[...n.map(v=>v["@@index"]),c].join("-")})(e,r),To=(e,t,r,o="children")=>K((n,c)=>{const v=n[c];return v[o]=[...v[o]||[],...r],!0})(e,t),Oo=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},Io=e=>p()?(we.map(t=>document.addEventListener(t,e,!1)),()=>we.map(t=>document.removeEventListener(t,e,!1))):void 0,No=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:c="20px microsoft yahei",fillStyle:v="rgba(202,202,202,0.4)",content:$="\u8BF7\u52FF\u5916\u4F20",rotate:N="-30",zIndex:V=1e3}={})=>{if(!p())return;e=Pe(e)?e.current:e!=null?e:document.body;const xe=e.firstChild;(xe==null?void 0:xe.className)==="watermark-canvas"&&e.removeChild(xe);const je=document.createElement("canvas");je.setAttribute("width",t),je.setAttribute("height",r);const Ze=je.getContext("2d");Ze.textAlign=o,Ze.textBaseline=n,Ze.font=c,Ze.fillStyle=v,Ze.rotate(Math.PI/180*N),Ze.fillText($,parseFloat(t)/2,parseFloat(r)/2);const yr=je.toDataURL(),Kt=document.createElement("div");Kt.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${V};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${yr}')`),e.style.position="relative",e.insertBefore(Kt,e.firstChild)},Po=(e=new Date)=>{const t=new Date(e).getDay();return[d(1-t),d(7-t)]},Do=e=>{if(!_e(e))return{};let t="pending",r;const o=e.then(n=>{t="success",r=n}).catch(n=>{t="error",r=n});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}};return He}()})},3323:function(Ot,pe){"use strict";function He(L,ne){var G=L.length;L.push(ne);e:for(;0<G;){var ve=G-1>>>1,Te=L[ve];if(0<ge(Te,ne))L[ve]=ne,L[G]=Te,G=ve;else break e}}function Le(L){return L.length===0?null:L[0]}function Fe(L){if(L.length===0)return null;var ne=L[0],G=L.pop();if(G!==ne){L[0]=G;e:for(var ve=0,Te=L.length,Qe=Te>>>1;ve<Qe;){var Xe=2*(ve+1)-1,Je=L[Xe],_e=Xe+1,Ke=L[_e];if(0>ge(Je,G))_e<Te&&0>ge(Ke,Je)?(L[ve]=Ke,L[_e]=G,ve=_e):(L[ve]=Je,L[Xe]=G,ve=Xe);else if(_e<Te&&0>ge(Ke,G))L[ve]=Ke,L[_e]=G,ve=_e;else break e}}return ne}function ge(L,ne){var G=L.sortIndex-ne.sortIndex;return G!==0?G:L.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var K=performance;pe.unstable_now=function(){return K.now()}}else{var re=Date,y=re.now();pe.unstable_now=function(){return re.now()-y}}var a=[],x=[],d=1,k=null,g=3,S=!1,p=!1,z=!1,A=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(L){for(var ne=Le(x);ne!==null;){if(ne.callback===null)Fe(x);else if(ne.startTime<=L)Fe(x),ne.sortIndex=ne.expirationTime,He(a,ne);else break;ne=Le(x)}}function B(L){if(z=!1,F(L),!p)if(Le(a)!==null)p=!0,it(W);else{var ne=Le(x);ne!==null&&ft(B,ne.startTime-L)}}function W(L,ne){p=!1,z&&(z=!1,U(be),be=-1),S=!0;var G=g;try{for(F(ne),k=Le(a);k!==null&&(!(k.expirationTime>ne)||L&&!X());){var ve=k.callback;if(typeof ve=="function"){k.callback=null,g=k.priorityLevel;var Te=ve(k.expirationTime<=ne);ne=pe.unstable_now(),typeof Te=="function"?k.callback=Te:k===Le(a)&&Fe(a),F(ne)}else Fe(a);k=Le(a)}if(k!==null)var Qe=!0;else{var Xe=Le(x);Xe!==null&&ft(B,Xe.startTime-ne),Qe=!1}return Qe}finally{k=null,g=G,S=!1}}var te=!1,me=null,be=-1,Ge=5,nt=-1;function X(){return!(pe.unstable_now()-nt<Ge)}function Ye(){if(me!==null){var L=pe.unstable_now();nt=L;var ne=!0;try{ne=me(!0,L)}finally{ne?Pe():(te=!1,me=null)}}else te=!1}var Pe;if(typeof q=="function")Pe=function(){q(Ye)};else if(typeof MessageChannel!="undefined"){var qe=new MessageChannel,Mt=qe.port2;qe.port1.onmessage=Ye,Pe=function(){Mt.postMessage(null)}}else Pe=function(){A(Ye,0)};function it(L){me=L,te||(te=!0,Pe())}function ft(L,ne){be=A(function(){L(pe.unstable_now())},ne)}pe.unstable_IdlePriority=5,pe.unstable_ImmediatePriority=1,pe.unstable_LowPriority=4,pe.unstable_NormalPriority=3,pe.unstable_Profiling=null,pe.unstable_UserBlockingPriority=2,pe.unstable_cancelCallback=function(L){L.callback=null},pe.unstable_continueExecution=function(){p||S||(p=!0,it(W))},pe.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<L?Math.floor(1e3/L):5},pe.unstable_getCurrentPriorityLevel=function(){return g},pe.unstable_getFirstCallbackNode=function(){return Le(a)},pe.unstable_next=function(L){switch(g){case 1:case 2:case 3:var ne=3;break;default:ne=g}var G=g;g=ne;try{return L()}finally{g=G}},pe.unstable_pauseExecution=function(){},pe.unstable_requestPaint=function(){},pe.unstable_runWithPriority=function(L,ne){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=g;g=L;try{return ne()}finally{g=G}},pe.unstable_scheduleCallback=function(L,ne,G){var ve=pe.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ve+G:ve):G=ve,L){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=G+Te,L={id:d++,callback:ne,priorityLevel:L,startTime:G,expirationTime:Te,sortIndex:-1},G>ve?(L.sortIndex=G,He(x,L),Le(a)===null&&L===Le(x)&&(z?(U(be),be=-1):z=!0,ft(B,G-ve))):(L.sortIndex=Te,He(a,L),p||S||(p=!0,it(W))),L},pe.unstable_shouldYield=X,pe.unstable_wrapCallback=function(L){var ne=g;return function(){var G=g;g=ne;try{return L.apply(this,arguments)}finally{g=G}}}},1102:function(Ot,pe,He){"use strict";Ot.exports=He(3323)}}]);
