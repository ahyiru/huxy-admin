(self.webpackChunk=self.webpackChunk||[]).push([[697],{1975:function(Tt,he,He){(function(Le,Fe){Tt.exports=Fe(He(7378),He(1542))})(this,function(Le,Fe){return function(){"use strict";var ge={193:function(a,x,c){var w=c(703),g=c.n(w),S=c(414),p=c.n(S),z=p()(g());z.push([a.id,`/*@height:2px;
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
`,""]),z.locals={anico:"nstud",hline:"IZUmD",close:"ylzxZ",right:"Wy_0M",bottom:"bdjKS",play:"QPs9T",pause:"tx7CH"},x.Z=z},145:function(a,x,c){var w=c(703),g=c.n(w),S=c(414),p=c.n(S),z=p()(g());z.push([a.id,`.kLIGi {
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
`,""]),z.locals={"huxy-carousel":"kLIGi","huxy-carousel-wrap":"XoNs4","carousel-item":"x4UPo","carousel-switch":"qYuQn",dot:"GU0qu",active:"svhYU"},x.Z=z},842:function(a,x,c){var w=c(703),g=c.n(w),S=c(414),p=c.n(S),z=p()(g());z.push([a.id,`@keyframes animate-drawer-in {
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
`,""]),z.locals={"drawer-wrap":"KsHNu",open:"c6aFy","drawer-container":"W4gG3","drawer-content":"SMORg","drawer-header":"e3AWW","ico-close":"VSVwl","drawer-footer":"hlj9r"},x.Z=z},563:function(a,x,c){var w=c(703),g=c.n(w),S=c(414),p=c.n(S),z=p()(g());z.push([a.id,`@keyframes animate-drop-in {
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
`,""]),z.locals={"drop-target":"TEYHV","drop-wrap":"NCYpg",open:"qjBWI"},x.Z=z},697:function(a,x,c){var w=c(703),g=c.n(w),S=c(414),p=c.n(S),z=p()(g());z.push([a.id,`@keyframes animate-modal-in {
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
`,""]),z.locals={"modal-wrap":"SqXAN",open:"S3vb_","modal-container":"RiDlb","modal-header":"xdqLE","modal-content":"C91AO","modal-footer":"J6dpF",btn:"XOnmm",left:"t1Fx9",right:"YGj9K"},x.Z=z},810:function(a,x,c){var w=c(703),g=c.n(w),S=c(414),p=c.n(S),z=p()(g());z.push([a.id,`.clear {
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
`,""]),z.locals={panel:"J8VWE",shadow1:"ohmPp",shadow2:"JzE05","panel-body":"rOxNb","panel-header":"OQwTX","panel-title":"W_1K6","panel-plugins":"eCk2_",link:"R2Mku"},x.Z=z},31:function(a,x,c){var w=c(703),g=c.n(w),S=c(414),p=c.n(S),z=p()(g());z.push([a.id,`.cols-1 {
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
`,""]),z.locals={},x.Z=z},201:function(a,x,c){var w=c(703),g=c.n(w),S=c(414),p=c.n(S),z=p()(g());z.push([a.id,`@keyframes before {
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
`,""]),z.locals={},x.Z=z},289:function(a,x,c){var w=c(703),g=c.n(w),S=c(414),p=c.n(S),z=p()(g());z.push([a.id,`.clear {
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
`,""]),z.locals={},x.Z=z},626:function(a,x,c){var w=c(703),g=c.n(w),S=c(414),p=c.n(S),z=p()(g());z.push([a.id,`.ofth_ {
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
`,""]),z.locals={ellipsis:"ofth_","huxy-tooltip":"hVmF3","huxy-tooltip-topRight":"uzFyE","huxy-tooltip-topLeft":"Giihu","huxy-tooltip-bottomRight":"bFVVt","huxy-tooltip-bottomLeft":"oGmKq","huxy-tooltip-rightTop":"svYWD"},x.Z=z},435:function(a,x,c){var w=c(703),g=c.n(w),S=c(414),p=c.n(S),z=p()(g());z.push([a.id,`.node-right-icon-close {
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
`,""]),z.locals={},x.Z=z},414:function(a){a.exports=function(x){var c=[];return c.toString=function(){return this.map(function(w){var g="",S=typeof w[5]!="undefined";return w[4]&&(g+="@supports (".concat(w[4],") {")),w[2]&&(g+="@media ".concat(w[2]," {")),S&&(g+="@layer".concat(w[5].length>0?" ".concat(w[5]):""," {")),g+=x(w),S&&(g+="}"),w[2]&&(g+="}"),w[4]&&(g+="}"),g}).join("")},c.i=function(w,g,S,p,z){typeof w=="string"&&(w=[[null,w,void 0]]);var A={};if(S)for(var U=0;U<this.length;U++){var q=this[U][0];q!=null&&(A[q]=!0)}for(var F=0;F<w.length;F++){var B=[].concat(w[F]);S&&A[B[0]]||(typeof z!="undefined"&&(typeof B[5]=="undefined"||(B[1]="@layer".concat(B[5].length>0?" ".concat(B[5]):""," {").concat(B[1],"}")),B[5]=z),g&&(B[2]&&(B[1]="@media ".concat(B[2]," {").concat(B[1],"}")),B[2]=g),p&&(B[4]?(B[1]="@supports (".concat(B[4],") {").concat(B[1],"}"),B[4]=p):B[4]="".concat(p)),c.push(B))}},c}},703:function(a){a.exports=function(x){return x[1]}},53:function(a,x,c){var w,g=c(899),S=Symbol.for("react.element"),p=Symbol.for("react.fragment"),z=Object.prototype.hasOwnProperty,A=g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,U={key:!0,ref:!0,__self:!0,__source:!0};function q(F,B,Z){var ee,pe={},be=null,Ge=null;Z!==void 0&&(be=""+Z),B.key!==void 0&&(be=""+B.key),B.ref!==void 0&&(Ge=B.ref);for(ee in B)z.call(B,ee)&&!U.hasOwnProperty(ee)&&(pe[ee]=B[ee]);if(F&&F.defaultProps)for(ee in B=F.defaultProps,B)pe[ee]===void 0&&(pe[ee]=B[ee]);return{$$typeof:S,type:F,key:be,ref:Ge,props:pe,_owner:A.current}}w=p,x.jsx=q,x.jsxs=q},458:function(a,x,c){a.exports=c(53)},748:function(a){var x=[];function c(S){for(var p=-1,z=0;z<x.length;z++)if(x[z].identifier===S){p=z;break}return p}function w(S,p){for(var z={},A=[],U=0;U<S.length;U++){var q=S[U],F=p.base?q[0]+p.base:q[0],B=z[F]||0,Z="".concat(F," ").concat(B);z[F]=B+1;var ee=c(Z),pe={css:q[1],media:q[2],sourceMap:q[3],supports:q[4],layer:q[5]};if(ee!==-1)x[ee].references++,x[ee].updater(pe);else{var be=g(pe,p);p.byIndex=U,x.splice(U,0,{identifier:Z,updater:be,references:1})}A.push(Z)}return A}function g(S,p){var z=p.domAPI(p);z.update(S);var A=function(U){if(U){if(U.css===S.css&&U.media===S.media&&U.sourceMap===S.sourceMap&&U.supports===S.supports&&U.layer===S.layer)return;z.update(S=U)}else z.remove()};return A}a.exports=function(S,p){p=p||{},S=S||[];var z=w(S,p);return function(A){A=A||[];for(var U=0;U<z.length;U++){var q=z[U],F=c(q);x[F].references--}for(var B=w(A,p),Z=0;Z<z.length;Z++){var ee=z[Z],pe=c(ee);x[pe].references===0&&(x[pe].updater(),x.splice(pe,1))}z=B}}},736:function(a){var x={};function c(g){if(typeof x[g]=="undefined"){var S=document.querySelector(g);if(window.HTMLIFrameElement&&S instanceof window.HTMLIFrameElement)try{S=S.contentDocument.head}catch(p){S=null}x[g]=S}return x[g]}function w(g,S){var p=c(g);if(!p)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");p.appendChild(S)}a.exports=w},706:function(a){function x(c){var w=document.createElement("style");return c.setAttributes(w,c.attributes),c.insert(w,c.options),w}a.exports=x},567:function(a,x,c){function w(g){var S=c.nc;S&&g.setAttribute("nonce",S)}a.exports=w},306:function(a){function x(g,S,p){var z="";p.supports&&(z+="@supports (".concat(p.supports,") {")),p.media&&(z+="@media ".concat(p.media," {"));var A=typeof p.layer!="undefined";A&&(z+="@layer".concat(p.layer.length>0?" ".concat(p.layer):""," {")),z+=p.css,A&&(z+="}"),p.media&&(z+="}"),p.supports&&(z+="}");var U=p.sourceMap;U&&typeof btoa!="undefined"&&(z+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(U))))," */")),S.styleTagTransform(z,g,S.options)}function c(g){if(g.parentNode===null)return!1;g.parentNode.removeChild(g)}function w(g){var S=g.insertStyleElement(g);return{update:function(p){x(S,g,p)},remove:function(){c(S)}}}a.exports=w},62:function(a){function x(c,w){if(w.styleSheet)w.styleSheet.cssText=c;else{for(;w.firstChild;)w.removeChild(w.firstChild);w.appendChild(document.createTextNode(c))}}a.exports=x},899:function(a){a.exports=Le},994:function(a){a.exports=Fe}},K={};function te(a){var x=K[a];if(x!==void 0)return x.exports;var c=K[a]={id:a,exports:{}};return ge[a](c,c.exports,te),c.exports}(function(){te.n=function(a){var x=a&&a.__esModule?function(){return a.default}:function(){return a};return te.d(x,{a:x}),x}})(),function(){te.d=function(a,x){for(var c in x)te.o(x,c)&&!te.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:x[c]})}}(),function(){te.o=function(a,x){return Object.prototype.hasOwnProperty.call(a,x)}}(),function(){te.r=function(a){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})}}(),function(){te.nc=void 0}();var y={};return function(){te.r(y),te.d(y,{Anico:function(){return Ge},Carousel:function(){return Ot},Col:function(){return It},Drawer:function(){return Zt},Drop:function(){return pt},Ellipsis:function(){return Pr},ErrorBoundary:function(){return kr},FullPage:function(){return Zr},HandleError:function(){return Ar},LoadError:function(){return Sr},Mask:function(){return at},MaxSize:function(){return b},Modal:function(){return M},Panel:function(){return Ze},Portal:function(){return Et},Row:function(){return Bt},Spinner:function(){return le},TabHeader:function(){return Rr},Tooltip:function(){return dr},Tree:function(){return Gr},fixEle:function(){return Cr},fixIcon:function(){return fr},renderTree:function(){return pr},str2React:function(){return or},str2Vue:function(){return $r}});var a=te(458),x=te(748),c=te.n(x),w=te(306),g=te.n(w),S=te(736),p=te.n(S),z=te(567),A=te.n(z),U=te(706),q=te.n(U),F=te(62),B=te.n(F),Z=te(193),ee={};ee.styleTagTransform=B(),ee.setAttributes=A(),ee.insert=p().bind(null,"head"),ee.domAPI=g(),ee.insertStyleElement=q();var pe=c()(Z.Z,ee),be=Z.Z&&Z.Z.locals?Z.Z.locals:void 0,Ge=i=>(0,a.jsx)("span",{className:be.anico,children:(0,a.jsx)("span",{className:[be.hline,...(i.type||"").split(" ").map(l=>be[l]).filter(Boolean)].join(" ")})}),nt=te(994),X=te(899),Ye=te.n(X),De=(i,l)=>{const h=(0,X.useRef)();(0,X.useEffect)(()=>{h.current=i},[i]),(0,X.useEffect)(()=>{if(l){const E=setInterval(()=>h.current(),l);return()=>clearInterval(E)}},[l])},Ue=()=>![typeof window,typeof document].includes("undefined"),Mt=i=>Object.prototype.toString.call(i).slice(8,-1).toLowerCase(),it=i=>Mt(i).indexOf("element")>-1,dt=(i=null)=>{var l,h;return Ue()?it(i)?{width:i.clientWidth,height:i.clientHeight}:{width:(l=window.innerWidth)!=null?l:document.documentElement.clientWidth,height:(h=window.innerHeight)!=null?h:document.documentElement.clientHeight}:{width:0,height:0}},L=(i=()=>{},l=60)=>{let h=null;return function(...E){clearTimeout(h),h=setTimeout(()=>i.apply(this,E),l)}},ie=(i,l)=>Object.prototype.hasOwnProperty.call(i!=null?i:{},l),G=i=>ie(i,"current");const ve=(i,l)=>{getComputedStyle(i).position==="static"&&(i.style.position="relative");const h=document.createElement("object");return h.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),h.setAttribute("class","resize-sensor"),h.onload=()=>{h.contentDocument.defaultView.addEventListener("resize",l,!1),l()},h.type="text/html",i.appendChild(h),h.data="about:blank",h};var Te=(i,l=60)=>{if(!Ue())return;i=G(i)?i.current:i!=null?i:document.body;let h,E=[];const T=L(()=>E.map(H=>H(i)),l),D=H=>{h||(h=ve(i,T)),E.indexOf(H)===-1&&E.push(H)},W=H=>{const ue=E.indexOf(H);ue!==-1&&E.splice(ue,1),E.length===0&&h&&re()},re=()=>{h&&h.parentNode&&(h.contentDocument&&h.contentDocument.defaultView.removeEventListener("resize",T,!1),h.parentNode.removeChild(h),h=void 0,E=[])};return{element:i,bind:D,unbind:W,destroy:re}},Qe=(i={})=>{const l=(0,X.useRef)(0),[h,E]=(0,X.useState)(i),T=(0,X.useCallback)(D=>{cancelAnimationFrame(l.current),l.current=requestAnimationFrame(()=>E(D))},[]);return(0,X.useEffect)(()=>()=>cancelAnimationFrame(l.current),[]),[h,T]},qe=(i=null,l=60)=>{const h=G(i)?i.current:i,{bind:E,destroy:T}=Te(h,l),[D,W]=Qe(dt(h));return(0,X.useEffect)(()=>(E(()=>h&&W(dt(h))),()=>T()),[h]),D},Je=te(145),_e={};_e.styleTagTransform=B(),_e.setAttributes=A(),_e.insert=p().bind(null,"head"),_e.domAPI=g(),_e.insertStyleElement=q();var Ke=c()(Je.Z,_e),et=Je.Z&&Je.Z.locals?Je.Z.locals:void 0,Ot=({children:i,active:l=0,delay:h=5e3,className:E,...T})=>{const[D,W]=(0,X.useState)(l+1),[re,H]=(0,X.useState)(!1),ue=(0,X.useRef)(),ce=(0,X.useRef)(""),{width:me}=qe(ue);i=Array.isArray(i)?i:[i];const ye=i[0],ze=[i[i.length-1],...i,ye],Oe=ze.length;De(()=>{let Ce=D+1;Ce=Ce===Oe?1:Ce,ce.current&&(ce.current=""),W(Ce),Ce===Oe-1&&setTimeout(()=>{ce.current="none",W(1)},500)},re?null:h);const Ae=(Ce,Ne)=>{Ne.stopPropagation(),ce.current="",W(Ce),(0,nt.flushSync)(()=>H(!0)),H(!1)},$e={width:`${Oe*me}px`,transform:`translateX(${-me*D}px)`,transition:ce.current};return(0,a.jsxs)("div",{className:`${et["huxy-carousel"]}${E?` ${E}`:""}`,...T,ref:ue,children:[(0,a.jsx)("div",{className:et["huxy-carousel-wrap"],style:$e,children:ze.map((Ce,Ne)=>(0,a.jsx)("div",{className:`${et["carousel-item"]} ${D===Ne?et.active:""}`,style:{width:`${me}px`},children:Ce},`huxy-carousel-${Ne}`))}),(0,a.jsx)("div",{className:et["carousel-switch"],children:i.map((Ce,Ne)=>(0,a.jsx)("span",{className:`${et.dot} ${D===Ne+1?et.active:""}`,onClick:wt=>Ae(Ne+1,wt)},`huxy-carousel-switch-${Ne}`))})]})};const yt=(i,l)=>{let h="",E="";if(typeof l=="number"&&(h=`col-${i}-${l}`),typeof l=="object"){const{span:T,offset:D}=l;h=T?`col-${i}-${T}`:"",E=D?`offset-${i}-${D}`:""}return{sp:h,os:E}};var It=(0,X.forwardRef)(({span:i,offset:l,xl:h,lg:E,md:T,sm:D,xs:W,style:re,width:H,auto:ue,offsetWidth:ce="0px",className:me,...ye},ze)=>{const Oe=me?` ${me}`:"",Ae=`col-${i||12}`,$e=l?`offset-${l}`:"",{sp:Ce,os:Ne}=yt("xs",W),{sp:wt,os:sr}=yt("sm",D),{sp:Xt,os:Gt}=yt("md",T),{sp:kt,os:ur}=yt("lg",E),{sp:Rt,os:Ft}=yt("xl",h),ct=[Ae,Rt,kt,Xt,wt,Ce,$e,Ft,ur,Gt,sr,Ne].filter(Boolean).join(" "),Jt=ue?{width:"auto",flex:1,maxWidth:`calc(100% - ${ce})`}:{width:H};return(0,a.jsx)("div",{className:`${ct}${Oe}`,...ye,style:{...Jt,...re},ref:ze})}),Ct=()=>{const i=(0,X.useRef)(!0);return i.current?(i.current=!1,!0):!1},Qt=(i,l=[])=>{const h=Ct();(0,X.useEffect)(()=>{if(!h)return i()},l)},Wt=(i,l=450)=>{const[h,E]=(0,X.useState)(i);return Qt(()=>{let T;return i||l===0?E(i):T=setTimeout(()=>E(i),l),()=>T&&clearTimeout(T)},[i]),[h,E]},Et=({children:i,mountNode:l=document.body})=>(0,nt.createPortal)(i,l);const Pt={position:"fixed",top:0,left:0,bottom:0,right:0,display:"flex",justifyContent:"center",alignItems:"center",zIndex:99999},tt={position:"fixed",top:0,left:0,bottom:0,right:0,background:"rgba(0, 0, 0, 0.5)",zIndex:1e5},er={position:"relative",zIndex:100001,display:"flex",alignItems:"center",justifyContent:"center"},cr=document.body;var at=({open:i,close:l,delay:h=300,children:E,mountNode:T,hasMask:D=!0,style:W,className:re="h-mask"})=>{const[H]=Wt(i,h);return cr.style.overflow=H?"hidden":"",(0,a.jsx)(Et,{mountNode:T,children:(0,a.jsx)("div",{children:H?(0,a.jsxs)("div",{className:re,style:Pt,children:[D?(0,a.jsx)("div",{style:tt,onClick:ue=>l==null?void 0:l(ue)}):null,(0,a.jsx)("div",{style:{...er,...W},children:E})]}):null})})},Nt=te(842),gt={};gt.styleTagTransform=B(),gt.setAttributes=A(),gt.insert=p().bind(null,"head"),gt.domAPI=g(),gt.insertStyleElement=q();var Or=c()(Nt.Z,gt),rt=Nt.Z&&Nt.Z.locals?Nt.Z.locals:void 0,Zt=({open:i,close:l,footer:h,header:E,className:T,style:D,children:W,width:re="300px"})=>{var H;const ue=["drawer-wrap",i?"open":"",...(H=T==null?void 0:T.split(" "))!=null?H:[]].filter(Boolean).map(ce=>rt[ce]).join(" ");return(0,a.jsx)(at,{open:i,close:l,delay:250,hasMask:!0,className:"huxy-drawer",children:(0,a.jsx)("div",{className:ue,style:{width:re,...D},children:(0,a.jsxs)("div",{className:rt["drawer-container"],children:[(0,a.jsxs)("div",{className:rt["drawer-header"],children:[(0,a.jsx)("span",{className:`link ${rt["ico-close"]}`,onClick:ce=>l==null?void 0:l(ce)}),(0,a.jsx)("div",{children:E})]}),(0,a.jsx)("div",{className:rt["drawer-content"],children:W}),h?(0,a.jsx)("div",{className:rt["drawer-footer"],children:h}):null]})})})},ft=(i,l,h="click")=>{(0,X.useEffect)(()=>{const E=D=>{const W=G(i)?i.current:i;W!=null&&W.contains&&!W.contains(D.target)&&l(D)},T=typeof h=="string"?[h]:h;return T.map(D=>{document.addEventListener(D,E,!1)}),()=>{T.map(D=>{document.removeEventListener(D,E,!1)})}},[i,l,h])},tr=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",rr=(i="")=>i.replace(/^\S/,l=>l.toUpperCase()),ht=i=>{var l;if(Ue())return i=G(i)?i.current:i!=null?i:document.body,(l=i.getBoundingClientRect)==null?void 0:l.call(i)},u=i=>{if(!Ue())return;const l=document.createElement("div");return l.innerHTML=i,l.children[0]},v=(i,l={},h=!1)=>{if(it(i)){if(h){let E="";Object.keys(l).map(T=>{E+=`${T}: ${l[T]};`}),i.style=E;return}Object.keys(l).map(E=>i.style.setProperty(E,l[E]))}};const j=(i=350)=>new Promise(l=>setTimeout(l,i)),O=(i=100)=>{const l=Date.now();for(;Date.now()-l<=i;);};var I=j,J=async(i,l=15)=>{if(!Ue())return;if(typeof i=="string"&&(i=u(i)),i=G(i)?i.current:i,!it(i))return{};const h=i.cloneNode(!0);v(h,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),i.parentNode.appendChild(h),await I(l);const E=ht(h);return i.parentNode.removeChild(h),E};const de=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,ae=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,oe=(i,l)=>{var h;l=`huxy-drop-arrow-${l}`;const E=(h=i.getAttribute("class"))!=null?h:"";de.test(E)?i.setAttribute("class",E.replace(ae,l)):i.setAttribute("class",`${E} ${l}`)},Ie=async(i,l,h)=>{const{left:E,right:T,top:D,bottom:W}=ht(i),{width:re,height:H}=dt(),{width:ue,height:ce}=await J(l);if(T<0||W<0||E>re||D>H)return{};if(h==="vertical"){const me={left:E+"px",top:W+10+"px",right:"auto",bottom:"auto"};let ye="lt";E+ue>re&&(me.left=T-ue+"px",ye="rt"),W+10+ce>H&&(me.top=D-10-ce+"px",ye=ye==="lt"?"lb":"rb"),v(l,me),oe(l,ye)}else{const me={left:T+10+"px",top:D+"px",right:"auto",bottom:"auto"};let ye="tl";T+10+ue>re&&(me.left=E-10-ue+"px",ye="tr"),D+ce>H&&(me.top=W-ce+"px",ye=ye==="tl"?"bl":"br"),v(l,me),oe(l,ye)}};var ot=(i,l,h="horizontal")=>{const E=L(Ie),T=()=>E(i,l,h);window.addEventListener("scroll",T,!1),window.addEventListener("resize",T,!1);const D=()=>{window.removeEventListener("scroll",T),window.removeEventListener("resize",T),v(l,{left:"",top:"",right:"",bottom:""})};return Ie(i,l,h),D},jt=({open:i,delay:l=250,children:h,mountNode:E,style:T,className:D="huxy-mask"})=>{const[W]=Wt(i,l);return(0,a.jsx)(Et,{mountNode:E,children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:D,children:(0,a.jsx)("div",{style:{...T,display:W?"block":"none"},children:h})})})})},lt=te(563),Re={};Re.styleTagTransform=B(),Re.setAttributes=A(),Re.insert=p().bind(null,"head"),Re.domAPI=g(),Re.insertStyleElement=q();var Dt=c()(lt.Z,Re),_t=lt.Z&&lt.Z.locals?lt.Z.locals:void 0,pt=({trigger:i="click",type:l,dropList:h,className:E,children:T,...D})=>{const[W,re]=(0,X.useState)(!1),H=(0,X.useRef)(),ue=(0,X.useRef)(),ce=(0,X.useRef)();ft(H,Ae=>W&&re(!1),[...new Set(["click",i.toLowerCase()])]),(0,X.useEffect)(()=>()=>{var Ae;return(Ae=ce.current)==null?void 0:Ae.call(ce)},[]);const me=Ae=>{Ae.preventDefault(),re(!0),ce.current=ot(H.current,ue.current,l)},ye={[`on${rr(i)}`]:me},ze=["drop-wrap",W?"open":""].filter(Boolean).map(Ae=>_t[Ae]).join(" "),Oe=tr(h)?h:h==null?void 0:h(()=>re(!1),W);return(0,a.jsxs)("span",{ref:H,className:`${_t["drop-target"]}${E?` ${E}`:""}`,...ye,...D,children:[T,(0,a.jsx)(jt,{open:W,className:"huxy-drop",children:(0,a.jsx)("div",{ref:ue,className:ze,children:Oe})})]})},bt=(i,l={},h)=>{if(!Ue())return;h=G(h)?h.current:h!=null?h:document.body;const E=document.createElement("span");E.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),l&&v(E,l),E.innerText=i,h.appendChild(E);const T=E.getBoundingClientRect();return h.removeChild(E),T},mt=te(626),Ve={};Ve.styleTagTransform=B(),Ve.setAttributes=A(),Ve.insert=p().bind(null,"head"),Ve.domAPI=g(),Ve.insertStyleElement=q();var Yt=c()(mt.Z,Ve),Ir=mt.Z&&mt.Z.locals?mt.Z.locals:void 0,dr=({title:i,placement:l="topRight",children:h,ellipsis:E,className:T,...D})=>(0,a.jsx)("span",{className:`${Ir[`huxy-tooltip-${l}`]}${T?` ${T}`:""}`,tooltip:i!=null?i:h,...D,children:(0,a.jsx)("span",{className:E?Ir.ellipsis:"",children:h})});const br={overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",display:"inline-block",width:"100%"};var Pr=i=>{var l,h,E,T;const{children:D}=i,W=typeof D=="string",re=W?D:(E=(l=D==null?void 0:D.props)==null?void 0:l.title)!=null?E:(h=D==null?void 0:D.props)==null?void 0:h.children,H=(0,X.useRef)(),[ue,ce]=(0,X.useState)(!1),me=qe(H,250);return(0,X.useEffect)(()=>{if(H.current){const{width:ye}=bt(re),{width:ze}=ht(H.current),Oe=ye>ze;Oe!==ue&&ce(Oe)}},[re,me.width]),(0,a.jsx)("span",{ref:H,style:{width:"100%",display:"inline-block"},children:ue?W?(0,a.jsx)(dr,{...i,ellipsis:!0}):(0,a.jsx)("span",{style:br,children:D}):W?D:(T=D==null?void 0:D.props)==null?void 0:T.children})},vr=Object.defineProperty,Ht=(i,l,h)=>l in i?vr(i,l,{enumerable:!0,configurable:!0,writable:!0,value:h}):i[l]=h,wr=(i,l,h)=>(Ht(i,typeof l!="symbol"?l+"":l,h),h);class kr extends Ye().Component{constructor(){super(...arguments),wr(this,"state",{error:null})}static getDerivedStateFromError(l){return{error:l}}componentDidCatch(l,h){const{errorReport:E}=this.props;typeof E=="function"&&E({error:l,info:h.componentStack})}render(){const{error:l}=this.state,{fallback:h,children:E}=this.props;return l?h(l):E}}var Cr=i=>l=>{if(typeof l=="function"||typeof(l==null?void 0:l.render)=="function")return(0,a.jsx)(l,{});if(typeof l=="string"){const h=i==null?void 0:i[l];return h?(0,a.jsx)(h,{}):(0,a.jsx)("i",{className:l})}return l!=null?l:null};const Er=i=>Cr(i);var fr=i=>({icon:l,defaultIcon:h=null})=>l?Er(i)(l):l===!1?null:h;const At=["","webkit","moz","ms"],Nr=i=>At.map(l=>l?`${l}FullscreenElement`:"fullscreenElement").find(l=>i[l]),Dr=i=>At.map(l=>l?`${l}RequestFullscreen`:"requestFullscreen").find(l=>i[l]),_r=i=>At.map(l=>l?`${l}ExitFullscreen`:"exitFullscreen").find(l=>i[l]),Vt=At.map(i=>`${i}fullscreenchange`);var jr=i=>{var l,h;if(!Ue())return;i=G(i)?i.current:i!=null?i:document.body;const E=Nr(document),T=Dr(i),D=_r(document);document[E]?(h=document[D])==null||h.call(document):(l=i[T])==null||l.call(i)},Ut=i=>Ue()?(Vt.map(l=>document.addEventListener(l,i,!1)),()=>Vt.map(l=>document.removeEventListener(l,i,!1))):void 0;const St=i=>(0,a.jsx)("i",{...i,children:"..."});var Zr=({panel:i,fullIcon:l=St,exitIcon:h=St,...E})=>{const T=G(i)?i.current:i,[D,W]=(0,X.useState)();(0,X.useEffect)(()=>{const H=Ut(()=>{W(ue=>!ue)});return()=>H()},[]);const re=D?h:l;return(0,a.jsx)(re,{onClick:H=>jr(T),...E})},or=(i,l)=>(0,a.jsx)("div",{dangerouslySetInnerHTML:{__html:i},...l}),Sr=i=>{const{error:l={},info:h=""}=i||{},{message:E,stack:T,errMsg:D}=l;let W=D||T||l.toString();W=`${W}
${h}`.replace(/\r|\n|\r\n/g,"<br/>"),W=W.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),W=W.replace(/\s/g,"&nbsp;");const re=E==null?void 0:E.slice(0,120).split(". ").slice(0,2).join(". ");return(0,a.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[or(W,{style:{color:"red"}}),re&&(0,a.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${re}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},Ar=({children:i,report:l})=>{var h;const E=(0,X.useRef)();return(h=E.current)!=null&&h.state&&(E.current.state.error=null),(0,a.jsx)(kr,{ref:E,fallback:(T,D)=>Sr({error:T,info:D}),errorReport:l,children:i})};const zr=(i,l)=>Object.keys(l).map(h=>i.style[h]=l[h]),Lr=(i,l)=>Object.keys(l).map(h=>i.style[h]=""),Br={overflow:"auto",position:"fixed",zIndex:5555,transition:"all .2s"},s=({left:i,top:l,width:h,height:E})=>({left:`${i}px`,top:`${l}px`,width:`${h}px`,height:`${E}px`}),f=i=>(0,a.jsx)("i",{...i,children:"..."}),C=i=>{const{left:l,top:h}=ht(i),{width:E,height:T}=dt(i);return{left:l,top:h,width:E,height:T}};var b=({panel:i,target:l,fullIcon:h=f,exitIcon:E=f})=>{i=G(i)?i.current:i||document.body;const[T,D]=(0,X.useState)(),W=(0,X.useRef)(),re=(0,X.useRef)();(0,X.useEffect)(()=>{const ce=typeof l=="function"?l:()=>document.getElementsByClassName(l)[0];re.current=s(C(ce())),W.current={...Br,...s(C(i))}},[i]);const H=(ce,me)=>{ce?(zr(me,W.current),setTimeout(()=>{zr(me,re.current)},0)):Lr(me,W.current),D(ce)},ue=T?E:h;return(0,a.jsx)(ue,{onClick:ce=>H(!T,i)})},m=te(697),P={};P.styleTagTransform=B(),P.setAttributes=A(),P.insert=p().bind(null,"head"),P.domAPI=g(),P.insertStyleElement=q();var Y=c()(m.Z,P),R=m.Z&&m.Z.locals?m.Z.locals:void 0,M=({open:i,close:l,hasMask:h=!0,cancelText:E="\u53D6\u6D88",submit:T,submitText:D="\u786E\u5B9A",title:W="Modal \u5F39\u7A97",className:re,children:H,delay:ue=250,...ce})=>{var me;const ye=["modal-wrap",i?"open":"",...(me=re==null?void 0:re.split(" "))!=null?me:[]].filter(Boolean).map(ze=>R[ze]).join(" ");return(0,a.jsx)(at,{open:i,close:l,delay:ue,hasMask:h,className:"huxy-modal",children:(0,a.jsx)("div",{className:ye,...ce,children:(0,a.jsxs)("div",{className:R["modal-container"],children:[(0,a.jsx)("div",{className:R["modal-header"],children:W}),(0,a.jsx)("div",{className:R["modal-content"],children:H}),(0,a.jsxs)("div",{className:R["modal-footer"],children:[(0,a.jsx)("div",{className:`${R.btn} ${R.left}`,onClick:ze=>l==null?void 0:l(ze),children:E}),(0,a.jsx)("div",{className:`${R.btn} ${R.right}`,onClick:ze=>T==null?void 0:T(ze),children:D})]})]})})})},_=te(201),ne={};ne.styleTagTransform=B(),ne.setAttributes=A(),ne.insert=p().bind(null,"head"),ne.domAPI=g(),ne.insertStyleElement=q();var we=c()(_.Z,ne),Ee=_.Z&&_.Z.locals?_.Z.locals:void 0,le=({global:i,absolute:l})=>(0,a.jsx)("div",{className:`spinner${i?" global":""}${l?" absolute":""}`,children:(0,a.jsx)("figure",{className:"spinning"})}),fe=te(810),ke={};ke.styleTagTransform=B(),ke.setAttributes=A(),ke.insert=p().bind(null,"head"),ke.domAPI=g(),ke.insertStyleElement=q();var se=c()(fe.Z,ke),Q=fe.Z&&fe.Z.locals?fe.Z.locals:void 0;const je=i=>{var l;return(l=i==null?void 0:i.filter)==null?void 0:l.call(i,h=>typeof h=="function")},Pe=(i,l)=>{const h=(0,X.useRef)(),{loading:E,title:T,plugins:D,children:W,className:re,...H}=i,ue=je(D),ce=ue==null?void 0:ue.length,me=re?` ${re}`:"",ye=G(l)?l:h;return(0,a.jsxs)("div",{className:`${Q.panel}${me}`,...H,ref:ye,children:[(T||ce)&&(0,a.jsxs)("div",{className:Q["panel-header"],children:[T&&(0,a.jsx)("h4",{className:Q["panel-title"],children:T}),ce&&(0,a.jsx)("div",{className:Q["panel-plugins"],children:ue.map((ze,Oe)=>(0,a.jsx)("span",{className:"link",children:(0,a.jsx)(ze,{panel:ye})},Oe))})]}),(0,a.jsx)("div",{className:Q["panel-body"],children:W}),E&&(0,a.jsx)(le,{})]})};var Ze=(0,X.forwardRef)(Pe),Me=te(31),Be={};Be.styleTagTransform=B(),Be.setAttributes=A(),Be.insert=p().bind(null,"head"),Be.domAPI=g(),Be.insertStyleElement=q();var Lt=c()(Me.Z,Be),nr=Me.Z&&Me.Z.locals?Me.Z.locals:void 0;const zt=({gutter:i=10,className:l,overflow:h="hidden",...E},T)=>{var D;const W=l?` ${l}`:"";let re=10;if(Array.isArray(i)){const H=[...i];i=H[0],re=(D=H[1])!=null?D:H[0]}return(0,a.jsx)("div",{className:"row-wrap",style:{"--gutter":`${Math.floor(i/2)}px`,"--rowgap":`${Math.floor(re/2)}px`,overflow:h},children:(0,a.jsx)("div",{className:`row${W}`,...E,ref:T})})};var Bt=(0,X.forwardRef)(zt),$t=i=>Mt(i)==="array",qt=i=>$t(i)&&!!i.length;const xt=({to:i,preventDefault:l,stopPropagation:h,...E})=>l?(0,a.jsx)("span",{...E}):(0,a.jsx)("a",{href:i,...E}),hr=({item:i,...l})=>(0,a.jsx)("ul",{...l}),Xe=(i,...l)=>{const h={};return Object.keys(i).filter(Boolean).map(E=>{h[E]=T=>i[E](T,...l)}),h},vt=({data:i=[],events:l={},List:h=hr,Link:E=xt,leftIcon:T,rightIcon:D,isHorizontal:W,isCollapsed:re,level:H=0,parentOpen:ue=!0})=>{const ce=re&&!H,me=!W&&!re&&!ue;return i.map(ye=>{var ze;const{name:Oe,path:Ae,icon:$e,rightIcon:Ce,active:Ne,open:wt,children:sr,linkProps:Xt}=ye,Gt=qt(sr),kt=ye.id||Ae||Oe,ur=ce?(ze=ye.title)!=null?ze:Oe:void 0,Rt=me?"hidden":"",Ft=$e!=null?$e:T,ct=Ce!=null?Ce:D,Jt=Ft?(0,a.jsx)("div",{className:"node-left-icon",children:Ft===!0?(0,a.jsx)("i",{className:"default-left-icon"}):Ft}):null,Wr=Oe?(0,a.jsx)("div",{className:"node-text",children:(0,a.jsx)("span",{children:Oe})}):null;if(Gt){const Jr=Xe(l,ye,H),Kr=[Rt,wt?"open":""].filter(Boolean).join(" ");return(0,a.jsxs)("li",{className:Kr,"has-children":"true",...Jr,children:[(0,a.jsxs)(E,{title:ur,className:`link${Ne?" active":""}`,to:Ae,preventDefault:!0,stopPropagation:!1,...Xt,children:[Jt,Wr,ct?(0,a.jsx)("div",{className:"node-right-icon",children:ct===!0?(0,a.jsx)("i",{className:"default-right-icon"}):ct}):null]}),(0,a.jsx)(h,{item:ye,children:vt({data:sr,events:l,List:h,Link:E,leftIcon:T,rightIcon:D,isHorizontal:W,isCollapsed:re,level:H+1,parentOpen:!!wt})})]},kt)}return(0,a.jsx)("li",{className:Rt,children:(0,a.jsxs)(E,{title:ur,className:`link${Ne?" active":""}`,to:Ae,...Xt,children:[Jt,Wr]})},kt)})};var pr=vt,$r=(i,...l)=>(0,a.jsx)("div",{"v-html":i,...l}),st=te(289),ut={};ut.styleTagTransform=B(),ut.setAttributes=A(),ut.insert=p().bind(null,"head"),ut.domAPI=g(),ut.insertStyleElement=q();var Yr=c()(st.Z,ut),Fr=st.Z&&st.Z.locals?st.Z.locals:void 0;const mr=i=>(0,a.jsx)("div",{style:{padding:"6px 15px"},children:i}),xr=({activekey:i,tabs:l=[],switchTab:h,trackColor:E,flex:T,...D},W)=>{var re;const[H,ue]=(0,X.useState)(i!=null?i:(re=l[0])==null?void 0:re.key),[ce,me]=(0,X.useState)({}),ye=(0,X.useRef)({}),ze=(0,X.useRef)();(0,X.useEffect)(()=>{const $e=ye.current[H];$e&&Oe($e)},[]);const Oe=$e=>{const{left:Ce,width:Ne}=ht($e),wt=ht(ze.current).left;me({left:Ce-wt,width:Ne})},Ae=($e,Ce)=>{$e.stopPropagation(),ue(Ce),typeof h=="function"&&h(Ce),Oe($e.currentTarget)};return(0,a.jsxs)("div",{className:"tabs-header-wrap",...D,ref:W,children:[(0,a.jsx)("ul",{className:`tabs-header${T?" flex":""}`,ref:ze,children:l.map($e=>(0,a.jsx)("li",{ref:Ce=>ye.current[$e.key]=Ce,className:`th-item${H===$e.key?" active":""}`,onClick:Ce=>Ae(Ce,$e.key),children:typeof $e.renderTabs=="function"?$e.renderTabs($e,H===$e.key):mr($e.value)},$e.key))}),(0,a.jsx)("div",{className:"th-track",style:{...ce,color:E}})]})};var Rr=(0,X.forwardRef)(xr),ir=(i,l,h="id",E="children")=>{if(!$t(i))return null;const T=D=>{for(let W=0,re=D.length;W<re;W++){const H=D[W];if(H[h]===l)return[H];if($t(H[E])){const ue=T(H[E]);if(ue)return[H].concat(ue)}}};return T(i)};const Mr=i=>++i;var ar=()=>{const[,i]=(0,X.useState)(0);return(0,X.useCallback)(()=>i(Mr),[])};const yr=i=>{const{children:l,open:h}=i;let E=0;if(h&&l!=null&&l.length){E=l.length;let T=0;return l.map(D=>T+=yr(D)),E+T}return E};var Ur=({item:i,style:l,...h})=>(0,a.jsx)("ul",{style:{...l,"--count":yr(i)},...h}),Tr=te(435),lr={};lr.styleTagTransform=B(),lr.setAttributes=A(),lr.insert=p().bind(null,"head"),lr.domAPI=g(),lr.insertStyleElement=q();var Qr=c()(Tr.Z,lr),eo=Tr.Z&&Tr.Z.locals?Tr.Z.locals:void 0;const qr=i=>(0,a.jsx)("ul",{...i}),Xr=(i,l)=>i?Ur:({item:h,...E})=>(0,a.jsx)(qr,{className:l==="right"?"left":"",...E});var Gr=i=>{var l;const{data:h=[],collapsed:E=!1,type:T="vertical",Link:D,width:W,bgColor:re,itemHeight:H,collapsedWidth:ue,itemPadding:ce,style:me,className:ye,...ze}=i,Oe=(0,X.useRef)(),Ae=(0,X.useRef)();(0,X.useEffect)(()=>()=>clearTimeout(Oe.current),[]);const $e=ar(),Ce=T==="horizontal",Ne=!Ce&&E,wt={onClick:(Rt,Ft)=>{if(Rt.stopPropagation(),!Ce&&!Ne){const ct=ir(h,Ft.path,"path"),Jt=ct[ct.length-1];Jt.open=!Jt.open,$e()}},onMouseEnter:(Rt,Ft,ct)=>{Ne&&!ct&&(clearTimeout(Oe.current),Ae.current.style.width="var(--maxWidth)")},onMouseLeave:(Rt,Ft,ct)=>{Ne&&!ct&&(Oe.current=setTimeout(()=>Ae.current.style.width="",200))}},sr=(Ce?["huxy-horizontal-tree",ye]:["huxy-tree",ye,Ne?"collapsed":""]).filter(Boolean).join(" "),{float:Xt,...Gt}=(l=ze==null?void 0:ze.style)!=null?l:{},kt={"--bgColor":re,"--itemHeight":H,"--nodeListWidth":W,...Gt};Ce?(kt["--itemPadding"]=ce,kt["--nodeFloat"]=Xt):(kt["--width"]=W,kt["--collapsedWidth"]=ue);const ur=Xr(!Ce&&!Ne,Xt);return(0,a.jsx)("div",{ref:Ae,className:sr,style:kt,...ze,children:(0,a.jsx)("div",{className:"huxy-tree-track",children:(0,a.jsx)("ul",{className:"huxy-tree-root",children:pr({data:h,events:wt,List:ur,Link:D,leftIcon:!0,rightIcon:!0,isHorizontal:Ce,isCollapsed:Ne})})})})}}(),y}()})},4544:function(Tt,he,He){(function(Le,Fe){Tt.exports=Fe(He(7378))})(this,function(Le){return function(){"use strict";var Fe={201:function(y,a,x){var c=x(703),w=x.n(c),g=x(414),S=x.n(g),p=S()(w());p.push([y.id,`@keyframes before {
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
`,""]),p.locals={},a.Z=p},982:function(y,a,x){var c=x(703),w=x.n(c),g=x(414),S=x.n(g),p=S()(w());p.push([y.id,`.Iuy_e {
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
`,""]),p.locals={link:"Iuy_e",active:"D3oJg"},a.Z=p},414:function(y){y.exports=function(a){var x=[];return x.toString=function(){return this.map(function(c){var w="",g=typeof c[5]!="undefined";return c[4]&&(w+="@supports (".concat(c[4],") {")),c[2]&&(w+="@media ".concat(c[2]," {")),g&&(w+="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {")),w+=a(c),g&&(w+="}"),c[2]&&(w+="}"),c[4]&&(w+="}"),w}).join("")},x.i=function(c,w,g,S,p){typeof c=="string"&&(c=[[null,c,void 0]]);var z={};if(g)for(var A=0;A<this.length;A++){var U=this[A][0];U!=null&&(z[U]=!0)}for(var q=0;q<c.length;q++){var F=[].concat(c[q]);g&&z[F[0]]||(typeof p!="undefined"&&(typeof F[5]=="undefined"||(F[1]="@layer".concat(F[5].length>0?" ".concat(F[5]):""," {").concat(F[1],"}")),F[5]=p),w&&(F[2]&&(F[1]="@media ".concat(F[2]," {").concat(F[1],"}")),F[2]=w),S&&(F[4]?(F[1]="@supports (".concat(F[4],") {").concat(F[1],"}"),F[4]=S):F[4]="".concat(S)),x.push(F))}},x}},703:function(y){y.exports=function(a){return a[1]}},53:function(y,a,x){var c,w=x(899),g=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,z=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function U(q,F,B){var Z,ee={},pe=null,be=null;B!==void 0&&(pe=""+B),F.key!==void 0&&(pe=""+F.key),F.ref!==void 0&&(be=F.ref);for(Z in F)p.call(F,Z)&&!A.hasOwnProperty(Z)&&(ee[Z]=F[Z]);if(q&&q.defaultProps)for(Z in F=q.defaultProps,F)ee[Z]===void 0&&(ee[Z]=F[Z]);return{$$typeof:g,type:q,key:pe,ref:be,props:ee,_owner:z.current}}c=S,a.jsx=U,a.jsxs=U},458:function(y,a,x){y.exports=x(53)},748:function(y){var a=[];function x(g){for(var S=-1,p=0;p<a.length;p++)if(a[p].identifier===g){S=p;break}return S}function c(g,S){for(var p={},z=[],A=0;A<g.length;A++){var U=g[A],q=S.base?U[0]+S.base:U[0],F=p[q]||0,B="".concat(q," ").concat(F);p[q]=F+1;var Z=x(B),ee={css:U[1],media:U[2],sourceMap:U[3],supports:U[4],layer:U[5]};if(Z!==-1)a[Z].references++,a[Z].updater(ee);else{var pe=w(ee,S);S.byIndex=A,a.splice(A,0,{identifier:B,updater:pe,references:1})}z.push(B)}return z}function w(g,S){var p=S.domAPI(S);p.update(g);var z=function(A){if(A){if(A.css===g.css&&A.media===g.media&&A.sourceMap===g.sourceMap&&A.supports===g.supports&&A.layer===g.layer)return;p.update(g=A)}else p.remove()};return z}y.exports=function(g,S){S=S||{},g=g||[];var p=c(g,S);return function(z){z=z||[];for(var A=0;A<p.length;A++){var U=p[A],q=x(U);a[q].references--}for(var F=c(z,S),B=0;B<p.length;B++){var Z=p[B],ee=x(Z);a[ee].references===0&&(a[ee].updater(),a.splice(ee,1))}p=F}}},736:function(y){var a={};function x(w){if(typeof a[w]=="undefined"){var g=document.querySelector(w);if(window.HTMLIFrameElement&&g instanceof window.HTMLIFrameElement)try{g=g.contentDocument.head}catch(S){g=null}a[w]=g}return a[w]}function c(w,g){var S=x(w);if(!S)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");S.appendChild(g)}y.exports=c},706:function(y){function a(x){var c=document.createElement("style");return x.setAttributes(c,x.attributes),x.insert(c,x.options),c}y.exports=a},567:function(y,a,x){function c(w){var g=x.nc;g&&w.setAttribute("nonce",g)}y.exports=c},306:function(y){function a(w,g,S){var p="";S.supports&&(p+="@supports (".concat(S.supports,") {")),S.media&&(p+="@media ".concat(S.media," {"));var z=typeof S.layer!="undefined";z&&(p+="@layer".concat(S.layer.length>0?" ".concat(S.layer):""," {")),p+=S.css,z&&(p+="}"),S.media&&(p+="}"),S.supports&&(p+="}");var A=S.sourceMap;A&&typeof btoa!="undefined"&&(p+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),g.styleTagTransform(p,w,g.options)}function x(w){if(w.parentNode===null)return!1;w.parentNode.removeChild(w)}function c(w){var g=w.insertStyleElement(w);return{update:function(S){a(g,w,S)},remove:function(){x(g)}}}y.exports=c},62:function(y){function a(x,c){if(c.styleSheet)c.styleSheet.cssText=x;else{for(;c.firstChild;)c.removeChild(c.firstChild);c.appendChild(document.createTextNode(x))}}y.exports=a},899:function(y){y.exports=Le}},ge={};function K(y){var a=ge[y];if(a!==void 0)return a.exports;var x=ge[y]={id:y,exports:{}};return Fe[y](x,x.exports,K),x.exports}(function(){K.n=function(y){var a=y&&y.__esModule?function(){return y.default}:function(){return y};return K.d(a,{a}),a}})(),function(){K.d=function(y,a){for(var x in a)K.o(a,x)&&!K.o(y,x)&&Object.defineProperty(y,x,{enumerable:!0,get:a[x]})}}(),function(){K.o=function(y,a){return Object.prototype.hasOwnProperty.call(y,a)}}(),function(){K.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})}}(),function(){K.nc=void 0}();var te={};return function(){K.r(te),K.d(te,{Link:function(){return Ar},emitRoute:function(){return Br},getRoute:function(){return Lr},useRoute:function(){return zr},useRouter:function(){return Vt}});var y=K(899),a=K.n(y),x=s=>Object.prototype.toString.call(s).slice(8,-1).toLowerCase(),c=s=>x(s)==="array",w=s=>x(s)==="object",g=s=>(s==null?void 0:s.$$typeof)&&typeof s.$$typeof=="symbol"&&s.$$typeof.description==="react.element",S=s=>s==null?void 0:s.__v_isVNode,p=(s,f)=>Object.prototype.hasOwnProperty.call(s!=null?s:{},f);const z=s=>{if(!c(s)&&!w(s))return s;const f=c(s)?[]:{};for(const C in s)if(p(s,C)){const b=s[C];f[C]=g(b)||S(b)||typeof b!="object"?b:b!==s?z(b):"cyclic"}else Object.setPrototypeOf(f,{[C]:s[C]});return f};var A=z,U=s=>x(s)==="function",q=s=>x(s)==="promise"||w(s)&&U(s.then),F=(s,f=12e4,C="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!q(s))return{};let b=null,m=null;return{promiseFn:new Promise((P,Y)=>{b=(R="canceled")=>{clearTimeout(m),P({canceled:!0,errMsg:R})},f&&(f=typeof f!="number"?12e4:f,m=setTimeout(()=>b(C),f)),s.then(R=>{clearTimeout(m),P({result:R,errMsg:!1})}).catch(R=>{clearTimeout(m),Y(R)})}),cancelFn:b}},B=s=>s?s.charAt(s.length-1)==="/"?s.slice(0,-1):s:"",Z=K(458),ee=(s,f)=>(0,Z.jsx)("div",{dangerouslySetInnerHTML:{__html:s},...f}),pe=s=>{const{error:f={},info:C=""}=s||{},{message:b,stack:m,errMsg:P}=f;let Y=P||m||f.toString();Y=`${Y}
${C}`.replace(/\r|\n|\r\n/g,"<br/>"),Y=Y.replace(/\t/g,"&nbsp;&nbsp;&nbsp;&nbsp;"),Y=Y.replace(/\s/g,"&nbsp;");const R=b==null?void 0:b.slice(0,120).split(". ").slice(0,2).join(". ");return(0,Z.jsxs)("div",{style:{padding:"15px 20px",backgroundColor:"#fff",wordWrap:"break-word"},children:[ee(Y,{style:{color:"red"}}),R&&(0,Z.jsxs)("a",{style:{display:"inline-block",padding:"15px",color:"#00b4cf"},href:`https://stackoverflow.com/search?q=${R}`,target:"_blank",children:[" ","--> \u53BB\u7F51\u4E0A\u67E5\u627E\u9519\u8BEF\u539F\u56E0\uFF1F"]})]})},be=()=>{const s={};return{on:(f,C)=>{s[f]||(s[f]=[]),s[f].indexOf(C)===-1&&s[f].push(C)},emit:(f,C)=>{s[f]&&s[f].map(b=>b(C))},off:(f,C=null)=>{if(s[f]){if(typeof C!="function")return s[f]=[];const b=s[f].indexOf(C);b>-1&&s[f].splice(b,1)}}}};const Ge=s=>{const f={};for(let C in s)p(s,C)||(f[C]=s[C]);return f};var nt=(s,f)=>{if(!w(s))return f;if(!w(f))return s;const C={...Ge(s),...Ge(f)},b={...s,...f};return Object.keys(C).map(m=>{Object.setPrototypeOf(b,{[m]:C[m]})}),b},X=()=>{const{on:s,emit:f,off:C}=be(),b={};return{getState:m=>A(b[m]),setState:(m,P=!1)=>{if(typeof m=="function"&&(m=m(A(b))),!w(m))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const Y=A(m);Object.keys(Y).map(R=>{const M=b[R],_=Y[R],ne=w(_)&&w(M)?nt(M,_):_;!P&&f(R,ne),b[R]=ne})},subscribe:(m,P)=>(s(m,P),()=>C(m,P)),unsubscribe:C,clean:m=>{typeof m=="string"?b[m]=void 0:Array.isArray(m)?m.map(P=>b[P]=void 0):Object.keys(b).map(P=>b[P]=void 0)}}},Ye=s=>(f,C)=>{const[b,m]=(0,y.useState)(()=>{const M=s==null?void 0:s.getState(f);return M!==void 0?M:(C!==void 0&&(s==null||s.setState({[f]:C},!0)),C)}),P=(0,y.useCallback)(M=>s==null?void 0:s.setState({[f]:typeof M=="function"?M(s==null?void 0:s.getState(f)):M}),[]),Y=(0,y.useCallback)(M=>s==null?void 0:s.subscribe(f,M),[]),R=(0,y.useCallback)((M=M)=>s==null?void 0:s.clean(M),[]);return(0,y.useEffect)(()=>{s==null||s.subscribe(f,M=>m(M))},[]),[b,P,Y,R]};const De=X(),Ue=Ye(De),Mt=be(),it=be(),dt="push-emitter",L="replace-emitter",ie="useRoute-emitter",G={delay:8e3,timeoutMsg:"\u8BF7\u6C42\u8D85\u65F6\uFF01",cancelMsg:"\u8BF7\u6C42\u5DF2\u53D6\u6D88\uFF01"},ve="/404",Te={getState:()=>history.state,go:s=>history.go(s),forward:()=>history.forward(),back:()=>history.back()},Qe=(s,f,C,b,m=[])=>{const P=M=>{for(let _=0,ne=M.length;_<ne;_++){const we=M[_],Ee=we[b].split("?")[0];if(new RegExp("^"+Ee.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return we;if(c(we[C])){const le=P(we[C]);if(le)return le}}},Y=P(s);if(!Y)return ve;const{redirect:R}=Y;return R?m.includes(R)?m:(m.push(R),Qe(s,R.split("?")[0],C,b,m)):m[m.length-1]},qe=(s,f,C,b,m)=>{if(!c(s))return null;const P=ne=>{const we=ne.split("/"),Ee=f.split("/"),le={};return we.map((fe,ke)=>fe.indexOf(":")===0&&(le[fe.slice(1)]=Ee[ke])),le},Y=(ne,we)=>{const Ee=[],le=we.split("/:")[0];for(let fe=0,ke=ne.length;fe<ke;fe++){const se=ne[fe];if(se[m]===le){se.active=!0;const{name:Q,title:je,icon:Pe,params:Ze}=se;Ee.push({name:Q,title:je,icon:Pe,params:Ze,[m]:le})}else if(we.indexOf(`${se[m]}/`)===0){se.active=!0;const Q=P(se[m]),je=Object.keys(Q).map(Lt=>Q[Lt]).join("/"),{name:Pe,title:Ze,icon:Me}=se,Be=je?`${le}/${je}`:se[m];Ee.push({name:Pe,title:Ze,icon:Me,[m]:Be,params:{...se.params,...Q}})}else if(se[m]===we){se.active=!0;const Q=P(se[m]),{[b]:je,...Pe}=se;Ee.push({...Pe,[m]:f,params:{...Pe.params,...C,...Q}})}}return Ee},R=(ne,we)=>{for(let Ee=0,le=ne.length;Ee<le;Ee++){const fe=ne[Ee];if(we.indexOf(`${fe[m]}/`)===0){fe.active=!0;return}}},M=ne=>{for(let we=0,Ee=ne.length;we<Ee;we++){const le=ne[we],fe=(le[m]||"").split("?")[0];if(fe===f){le.hideMenu&&R(ne,le.parentPath||fe),le.active=!0;const{[b]:ke,...se}=le;return[{...se,params:{...se.params,...C}}]}if(new RegExp("^"+fe.replace(/:[^/]+/g,"[^/]+")+"$").test(f))return Y(ne,fe);if(c(le[b])){const ke=M(le[b]);if(ke){le.active=!0,le.open=!0;const{[b]:se,...Q}=le;return[Q,...ke]}}}},_=M(s)||[];return{result:s,current:_}},Je=(s,f,C)=>s.filter(b=>b.hideMenu||b[C].indexOf("/:")>-1?!1:(c(b[f])&&(b[f]=Je(b[f],f,C)),!0));var _e=(s,f,C,b="children",m="path")=>{const P=Qe(s,f,b,m);if(P)return{redirect:P};const{result:Y,current:R}=qe(s,f,C,b,m),M=Je(Y,b,m);return{current:R,menu:M}},Ke=s=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(s);const et=(s,f)=>{const C=["#/","/"],b=C[!!f-0];if(!s||C.includes(s))return b;const m=s.charAt(s.length-1)==="/"?s.slice(0,-1):s;return f||m.indexOf("#/")>-1?m:`#${m}`},Ot=(s,f,C,b=!1)=>{const m=et(f,C);return b?m:C?s&&m==="/"?s:`${s}${m}`:s?`${s}/${m}`:m},yt=(s,f,C,b,m,P)=>{if(!c(s))return s;const Y=(R,M="")=>R.filter(_=>!_.denied).map(_=>{if(!P&&!_.exact&&!Ke(_[b])){(!_[b]||_[b]==="javascript:;")&&(_[b]="");const ne=_[b].charAt(0)==="/"&&M.charAt(M.length-1)==="/"?_[b].slice(1):_[b].charAt(0)!=="/"&&M.charAt(M.length-1)!=="/"?`/${_[b]}`:_[b];_[b]=M?M+ne:Ot(m,ne,f)}return _.redirect&&(_.redirect=Ot(m,_.redirect,f)),c(_[C])&&(_[C]=Y(_[C],_[b]),!_.redirect&&_[C].length&&(_.redirect=_[C][0][b])),_});return Y(s)};var It=s=>{if(!w(s))return"";const f=[];return Object.keys(s).map((C,b)=>{const m=b>0?"&":"?";f.push(`${m}${C}=${s[C]}`)}),f.join("")},Ct=(s="")=>{const[f,C]=s.split("?");if(C){const b={};return C.split("&").map(m=>{const[P,Y]=m.split("=");b[P]=Y}),{path:f,params:b}}return{path:f}};const Qt=()=>{document.documentElement.scrollTop?document.documentElement.scrollTop=0:document.body.scrollTop&&(document.body.scrollTop=0)},Wt=(s,f)=>{for(let C=s.length-1,b;b=s[C--];){const{title:m,name:P}=b;if(typeof m=="string"&&m.length)return document.title=m;if((m==null||m===!0)&&P)return document.title=f?`${P}-${f}`:P;if(f)return document.title=f}},Et=s=>{const{pathname:f,search:C,hash:b}=location;if(s){const R=et(f,s),M=decodeURIComponent(`${R}${C}`),{params:_}=Ct(M);return{path:M,params:_}}const m=decodeURIComponent(et(b,s)),{params:P}=Ct(m),Y=B(f);return{path:Y?`${Y}/${m}`:m,params:P}},Pt=(s,f,C)=>{typeof s=="function"&&s({...f,stay:new Date-C})},tt=(s,f,C,b)=>{let m,P,Y;if(typeof s=="string")m=s;else if(w(s))m=s.path,P=s.params,Y=s.query;else return;!m||m==="."||m==="./"?m=b:m.indexOf("./")===0?m=`${b.split("?")[0]}${m.replace("./","/")}`:m.indexOf("../")===0&&(m=`${b.split("?")[0].split("/").slice(0,-1).join("/")}${m.replace("../","/")}`),m=Ot(f,m,C,s==null?void 0:s.exact);const R=Ct(m);m=R.path;const M={...R.params,...Y},_=It(M);return m=`${m}${_}`,P={...P,...M},{path:m,params:P}},er=(s,f)=>{const C=s.split(f);return C.length>1?["","/"].includes(C[1].slice(0,1)):!1},cr=be();var at=s=>{const{on:f,emit:C,off:b}=cr;return{on:m=>f(s,m),emit:m=>C(s,m),off:m=>b(s,m)}},Nt=s=>(f,C)=>{const{getState:b,setState:m,subscribe:P,unsubscribe:Y,clean:R}=s;return C!==void 0&&m({[f]:C},!0),{getState:()=>b(f),setState:(M,_)=>m({[f]:M},_),subscribe:M=>P(f,M),unsubscribe:()=>Y(f),clean:()=>R(f)}};const gt=X();var Or=Nt(gt);const rt=at("push-emitter"),Zt=at("replace-emitter"),ft=Or("route-store"),tr=be(),rr=X(),ht=Ye(rr);var u=()=>![typeof window,typeof document].includes("undefined"),v=s=>{if(!u())return;const f=document.createElement("div");return f.innerHTML=s,f.children[0]},j=Object.defineProperty,O=(s,f,C)=>f in s?j(s,f,{enumerable:!0,configurable:!0,writable:!0,value:C}):s[f]=C,I=(s,f,C)=>(O(s,typeof f!="symbol"?f+"":f,C),C);class J extends a().Component{constructor(){super(...arguments),I(this,"state",{error:null})}static getDerivedStateFromError(f){return{error:f}}componentDidCatch(f,C){const{errorReport:b}=this.props;typeof b=="function"&&b({error:f,info:C.componentStack})}render(){const{error:f}=this.state,{fallback:C,children:b}=this.props;return f?C(f):b}}var de=({children:s,report:f})=>{var C;const b=(0,y.useRef)();return(C=b.current)!=null&&C.state&&(b.current.state.error=null),(0,Z.jsx)(J,{ref:b,fallback:(m,P)=>pe({error:m,info:P}),errorReport:f,children:s})},ae=K(748),oe=K.n(ae),Ie=K(306),ot=K.n(Ie),jt=K(736),lt=K.n(jt),Re=K(567),Dt=K.n(Re),_t=K(706),pt=K.n(_t),bt=K(62),mt=K.n(bt),Ve=K(201),Yt={};Yt.styleTagTransform=mt(),Yt.setAttributes=Dt(),Yt.insert=lt().bind(null,"head"),Yt.domAPI=ot(),Yt.insertStyleElement=pt();var Ir=oe()(Ve.Z,Yt),dr=Ve.Z&&Ve.Z.locals?Ve.Z.locals:void 0,br=({global:s,absolute:f})=>(0,Z.jsx)("div",{className:`spinner${s?" global":""}${f?" absolute":""}`,children:(0,Z.jsx)("figure",{className:"spinning"})}),Pr=()=>{const s=(0,y.useRef)([]);return(0,y.useEffect)(()=>()=>{s.current.map(f=>f.cancelFn()),s.current=[]},[]),{cancelablePromise:(0,y.useCallback)((f,C=!0)=>{const b=F(f,C);return s.current.indexOf(b)===-1&&s.current.push(b),b.promiseFn},[])}},vr=(s={})=>{const{cancelablePromise:f}=Pr(),[C,b]=(0,y.useState)(s),m=(0,y.useRef)({}),P=(0,y.useRef)({}),Y=(0,y.useCallback)((M=null)=>{Array.isArray(M)&&M.length?M.map(_=>m.current[_]=s[_]):m.current=s},[]),R=(0,y.useCallback)((M,_,ne=!1)=>{const we=Object.keys(M),Ee=JSON.stringify(we.sort());if(!P.current[Ee]){P.current[Ee]=!0,ne&&Y(Array.isArray(ne)?ne:we),we.map(le=>{m.current[le]||(m.current[le]={}),m.current[le].pending=!0}),b({...m.current});for(let le=0,fe=we.length;le<fe;le++){const ke=we[le];f(M[ke]).then(se=>{let{result:Q,errMsg:je}=se;le===fe-1&&(P.current[Ee]=!1),typeof _=="function"&&(Q=_(Q)||Q),m.current[ke]={...Q,pending:!1},je===!1&&b({...m.current})}).catch(se=>{throw le===fe-1&&(P.current[Ee]=!1),m.current[ke]={error:se,pending:!1},b({...m.current}),se})}}},[]);return[C,R,Y]};const Ht=s=>Object.keys(s).length;var wr=s=>{const{Comp:f,restResolve:C,loadPromise:b,params:m,children:P}=s,[Y,R]=vr(),[M,_]=vr();return(0,y.useEffect)(()=>{Ht(C)&&R(C),Ht(b)&&_(b)},[C,b]),(0,y.useEffect)(()=>{const ne=Ht(Y);ne&&ne===Ht(C)&&m.store.setState(Y)},[Y]),(0,Z.jsx)(f,{...m,...Y,...M,children:P})};const kr=s=>s===!1?null:g(s)?s:U(s)?(0,Z.jsx)(s,{}):(0,Z.jsx)(br,{}),Cr=({Loading:s,ErrorBoundary:f,loadedComp:C})=>{const b=(0,Z.jsx)(y.Suspense,{fallback:kr(s),children:C});return f===!1?b:U(f)?(0,Z.jsx)(f,{children:b}):(0,Z.jsx)(de,{children:b})};var Er=({Comp:s,routerProps:f,children:C})=>{const{params:b,...m}=f,{loading:P,errorBoundary:Y,...R}=b,M=(0,Z.jsx)(wr,{Comp:s,...m,params:R,children:C});return Cr({Loading:P,ErrorBoundary:Y,loadedComp:M})};const fr={},At=(s,f,C,b)=>q(C)?C.then(m=>{var P;return Er({Comp:s,routerProps:f,children:(P=m.default)!=null?P:m})}):Er({Comp:s,routerProps:f,children:C}),Nr=(s,f,C)=>{const b={},m={};return w(s)?(Object.keys(s).map(P=>{const Y=f.getState(P);Y==null?m[P]=s[P](C):b[P]=Y}),{cachedResolve:b,restResolve:m}):{cachedResolve:b,restResolve:m}},Dr=(s,f)=>{if(!w(s))return{};const C={};return Object.keys(s).map(b=>C[b]=s[b](f)),C};var _r=s=>{const{current:f,menu:C,...b}=s,m=f.map(R=>{const{component:M,resolve:_,loadData:ne,loading:we,errorBoundary:Ee,icon:le,...fe}=R;return fe}),P=[...f].filter(R=>R.component),Y=(R=0)=>{if(!P.length)return null;const M=P.shift(),{component:_,resolve:ne,loadData:we,icon:Ee,key:le,...fe}=M;if(typeof _=="function"||q(_)){const ke=fe.path;let se=fr[ke];const{cachedResolve:Q,restResolve:je}=Nr(ne,b.store,fe),Pe={loadPromise:Dr(we,fe),restResolve:je,params:{current:m,...b,...fe,...Q}},Ze=Y(R+1);if(se)return At(se,Pe,Ze,ke);try{se=_(),se=g(se)?_:se}catch(Me){se=_}return q(se)?se.then(Me=>{var Be;return se=(Be=Me.default)!=null?Be:Me,fr[ke]=se,At(se,Pe,Ze,ke)}):(fr[ke]=se,At(se,Pe,Ze,ke))}return typeof _=="string"?v(_):_};return Y()},Vt=s=>{const[f,C]=(0,y.useState)(s),[b,m]=(0,y.useState)(),[P,Y]=(0,y.useState)(),R=(0,y.useRef)(),M=(0,y.useRef)(),_=(0,y.useRef)(),ne=(0,y.useRef)(),we=()=>{typeof R.current=="function"&&(R.current({cancel:G.cancelMsg}),R.current=null)},Ee=(0,y.useCallback)(Q=>{typeof Q=="function"?C(je=>({...je,...Q(je)})):w(Q)&&C(je=>({...je,...Q}))},[]),le=(Q,je="pushState")=>{const{basepath:Pe,browserRouter:Ze}=ne.current,Me=_.current,{path:Be,params:Lt}=tt(Q,Pe,Ze,Me);Be!==Me&&se({inputPath:Be,inputParams:Lt},()=>history[je](Q==null?void 0:Q.state,"",Be))},fe=(0,y.useCallback)(Q=>le(Q),[]),ke=(0,y.useCallback)(Q=>le(Q,"replaceState"),[]),se=(0,y.useCallback)(({inputPath:Q="",inputParams:je={}},Pe)=>{const Ze=+new Date,{browserRouter:Me,childKey:Be,idKey:Lt,title:nr,routers:zt,beforeRender:Bt,afterRender:$t,basepath:qt,allowedNotFound:xt,...hr}=ne.current;if(!Q){const{path:Xe,params:vt}=Et(Me);Q=Xe,je={...je,...vt}}new Promise((Xe,vt)=>{zt!=null&&zt.length||vt("\u8DEF\u7531\u4E3A\u7A7A\uFF01"),Q!==_.current&&typeof Bt=="function"?Bt({path:Q,params:je,prevPath:_.current},Xe,vt):Xe()}).then(Xe=>{var vt,pr;if(Xe===!1)return;const $r=Xe==null?void 0:Xe.path;if($r&&Ot(qt,$r,Me)!==Q){ke(Xe);return}M.current=(vt=M.current)!=null?vt:Q;const{redirect:st,current:ut,menu:Yr}=_e(A(zt),Q.split("?")[0],je,Be,Lt);if(st){if(xt&&st===ve&&(typeof xt=="boolean"||typeof xt=="string"&&er(M.current,xt)||c(xt)&&xt.find(xr=>er(M.current,xr))))return;if(c(st)){console.error(`\u522B\u95F9\uFF0C[${[Q,...st].join(" -> ")}] \u91CD\u5B9A\u5411\u6B7B\u5FAA\u73AF\uFF01\uFF01\uFF01`);return}return st===ve?ke({path:st}):fe({path:st,exact:!0})}Pe==null||Pe(),(Q==null?void 0:Q.split("?")[0])!==((pr=_.current)==null?void 0:pr.split("?")[0])&&Qt(),Wt(ut,nr);const Fr={eventBus:tr,store:rr,useStore:ht,...hr,updateRouter:Ee,emitRouter:ft.subscribe,router:{push:fe,replace:ke},current:ut,menu:Yr,inputPath:M.current,prevPath:_.current,basepath:qt,title:nr,history:Te};ft.setState({...Fr,browserRouter:Me});const mr=_r(Fr);if(_.current=Q,M.current=null,we(),q(mr)){const{promiseFn:xr,cancelFn:Rr}=F(mr,{delay:G.delay,msg:{timeout:G.timeoutMsg}});return R.current=Rr,Y(!0),xr.then(ir=>{R.current=null;const{result:Mr,errMsg:ar}=ir,yr=ar===!1?Mr:ar!=null&&ar.timeout?pe({error:{errMsg:`${Q} ${ar.timeout}`}}):null;yr&&(Y(!1),Pt($t,ut.slice(-1)[0],Ze),m(yr))}).catch(ir=>{throw R.current=null,Y(!1),Pt($t,ut.slice(-1)[0],Ze),m(pe({error:ir})),ir})}Pt($t,ut.slice(-1)[0],Ze),m(mr)}).catch(Xe=>{throw m(pe({error:Xe})),Xe})},[]);return(0,y.useEffect)(()=>{const{childKey:Q="children",idKey:je="path",browserRouter:Pe=!1,routers:Ze=[],basepath:Me="",exact:Be=!1,inputPath:Lt="",inputParams:nr={},...zt}=f,Bt=B(Me),$t=yt(A(Ze),Pe,Q,je,Bt,Be);ne.current={...zt,childKey:Q,idKey:je,browserRouter:Pe,routers:$t,basepath:Bt};const qt=Pe?"popstate":"hashchange",xt=()=>se({});return se({inputPath:Lt,inputParams:nr}),rt.on(fe),Zt.on(ke),window.addEventListener(qt,xt,!1),()=>{we(),rt.off(fe),Zt.off(ke),window.removeEventListener(qt,xt,!1)}},[f]),{updateRouter:Ee,output:b,loading:P}},jr=s=>{const{to:f,onClick:C,preventDefault:b,stopPropagation:m=!0,exact:P=!0,target:Y,...R}=s,M=()=>{const _=typeof f=="string"?{exact:P,path:f}:{exact:P,...f};rt.emit(_)};return _=>{var ne;if(_.preventDefault(),m&&_.stopPropagation(),!(R!=null&&R.disabled)){if(!b){if(Y){const{browserRouter:we}=ft.getState(),Ee=typeof f=="string"?f:(ne=f==null?void 0:f.path)!=null?ne:"",le=It(f==null?void 0:f.query),fe=we||Ee.indexOf("#/")>-1||Ke(Ee);window==null||window.open(`${fe?"":"#"}${Ee}${le}`,Y);return}M()}typeof C=="function"&&C()}}},Ut=K(982),St={};St.styleTagTransform=mt(),St.setAttributes=Dt(),St.insert=lt().bind(null,"head"),St.domAPI=ot(),St.insertStyleElement=pt();var Zr=oe()(Ut.Z,St),or=Ut.Z&&Ut.Z.locals?Ut.Z.locals:void 0;const Sr=s=>{if(!s)return or.link;const f=s.trim().split(" ").filter(Boolean),C=f.find(b=>b==="active")?[or.active]:[];return[or.link,...C,...f].join(" ")};var Ar=s=>{const{to:f,onClick:C,preventDefault:b,stopPropagation:m,exact:P,target:Y,className:R,...M}=s;return(0,Z.jsx)("span",{onClick:jr(s),className:Sr(R),...M})},zr=()=>{const[s,f]=(0,y.useState)(ft.getState());return(0,y.useEffect)(()=>ft.subscribe(C=>f(C)),[]),s};const Lr=ft.getState,Br=ft.subscribe}(),te}()})},2445:function(Tt,he,He){(function(Le,Fe){Tt.exports=Fe(He(7378))})(this,function(Le){return function(){"use strict";var Fe={53:function(y,a,x){var c,w=x(899),g=Symbol.for("react.element"),S=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,z=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,A={key:!0,ref:!0,__self:!0,__source:!0};function U(q,F,B){var Z,ee={},pe=null,be=null;B!==void 0&&(pe=""+B),F.key!==void 0&&(pe=""+F.key),F.ref!==void 0&&(be=F.ref);for(Z in F)p.call(F,Z)&&!A.hasOwnProperty(Z)&&(ee[Z]=F[Z]);if(q&&q.defaultProps)for(Z in F=q.defaultProps,F)ee[Z]===void 0&&(ee[Z]=F[Z]);return{$$typeof:g,type:q,key:pe,ref:be,props:ee,_owner:z.current}}c=S,a.jsx=U,c=U},458:function(y,a,x){y.exports=x(53)},899:function(y){y.exports=Le}},ge={};function K(y){var a=ge[y];if(a!==void 0)return a.exports;var x=ge[y]={exports:{}};return Fe[y](x,x.exports,K),x.exports}(function(){K.d=function(y,a){for(var x in a)K.o(a,x)&&!K.o(y,x)&&Object.defineProperty(y,x,{enumerable:!0,get:a[x]})}})(),function(){K.o=function(y,a){return Object.prototype.hasOwnProperty.call(y,a)}}(),function(){K.r=function(y){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})}}();var te={};return function(){K.r(te),K.d(te,{createContainer:function(){return a},useAsync:function(){return z},useCancelablePromise:function(){return p},useClickAway:function(){return q},useDebounce:function(){return B},useDelayState:function(){return pe},useEleResize:function(){return Ue},useEvent:function(){return Mt},useFirstMounted:function(){return Z},useInterval:function(){return it},usePrevious:function(){return dt},useRaf:function(){return De},useScroll:function(){return ie},useSearch:function(){return Ct},useStateFromProps:function(){return Qt},useStore:function(){return cr},useTime:function(){return ft},useUpdate:function(){return rr},useUpdateEffect:function(){return ee},useWinResize:function(){return ht}});var y=K(899),a=u=>(v,j)=>{const[O,I]=(0,y.useState)(()=>{const oe=u==null?void 0:u.getState(v);return oe!==void 0?oe:(j!==void 0&&(u==null||u.setState({[v]:j},!0)),j)}),J=(0,y.useCallback)(oe=>u==null?void 0:u.setState({[v]:typeof oe=="function"?oe(u==null?void 0:u.getState(v)):oe}),[]),de=(0,y.useCallback)(oe=>u==null?void 0:u.subscribe(v,oe),[]),ae=(0,y.useCallback)((oe=oe)=>u==null?void 0:u.clean(oe),[]);return(0,y.useEffect)(()=>{u==null||u.subscribe(v,oe=>I(oe))},[]),[O,J,de,ae]},x=u=>Object.prototype.toString.call(u).slice(8,-1).toLowerCase(),c=u=>x(u)==="object",w=u=>x(u)==="function",g=u=>x(u)==="promise"||c(u)&&w(u.then),S=(u,v=12e4,j="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!g(u))return{};let O=null,I=null;return{promiseFn:new Promise((J,de)=>{O=(ae="canceled")=>{clearTimeout(I),J({canceled:!0,errMsg:ae})},v&&(v=typeof v!="number"?12e4:v,I=setTimeout(()=>O(j),v)),u.then(ae=>{clearTimeout(I),J({result:ae,errMsg:!1})}).catch(ae=>{clearTimeout(I),de(ae)})}),cancelFn:O}},p=()=>{const u=(0,y.useRef)([]);return(0,y.useEffect)(()=>()=>{u.current.map(v=>v.cancelFn()),u.current=[]},[]),{cancelablePromise:(0,y.useCallback)((v,j=!0)=>{const O=S(v,j);return u.current.indexOf(O)===-1&&u.current.push(O),O.promiseFn},[])}},z=(u={})=>{const{cancelablePromise:v}=p(),[j,O]=(0,y.useState)(u),I=(0,y.useRef)({}),J=(0,y.useRef)({}),de=(0,y.useCallback)((oe=null)=>{Array.isArray(oe)&&oe.length?oe.map(Ie=>I.current[Ie]=u[Ie]):I.current=u},[]),ae=(0,y.useCallback)((oe,Ie,ot=!1)=>{const jt=Object.keys(oe),lt=JSON.stringify(jt.sort());if(!J.current[lt]){J.current[lt]=!0,ot&&de(Array.isArray(ot)?ot:jt),jt.map(Re=>{I.current[Re]||(I.current[Re]={}),I.current[Re].pending=!0}),O({...I.current});for(let Re=0,Dt=jt.length;Re<Dt;Re++){const _t=jt[Re];v(oe[_t]).then(pt=>{let{result:bt,errMsg:mt}=pt;Re===Dt-1&&(J.current[lt]=!1),typeof Ie=="function"&&(bt=Ie(bt)||bt),I.current[_t]={...bt,pending:!1},mt===!1&&O({...I.current})}).catch(pt=>{throw Re===Dt-1&&(J.current[lt]=!1),I.current[_t]={error:pt,pending:!1},O({...I.current}),pt})}}},[]);return[j,ae,de]},A=(u,v)=>Object.prototype.hasOwnProperty.call(u!=null?u:{},v),U=u=>A(u,"current"),q=(u,v,j="click")=>{(0,y.useEffect)(()=>{const O=J=>{const de=U(u)?u.current:u;de!=null&&de.contains&&!de.contains(J.target)&&v(J)},I=typeof j=="string"?[j]:j;return I.map(J=>{document.addEventListener(J,O,!1)}),()=>{I.map(J=>{document.removeEventListener(J,O,!1)})}},[u,v,j])},F=(u=()=>{},v=60)=>{let j=null;return function(...O){clearTimeout(j),j=setTimeout(()=>u.apply(this,O),v)}},B=(u,v=60)=>(0,y.useMemo)(()=>F(u,v),[v]),Z=()=>{const u=(0,y.useRef)(!0);return u.current?(u.current=!1,!0):!1},ee=(u,v=[])=>{const j=Z();(0,y.useEffect)(()=>{if(!j)return u()},v)},pe=(u,v=450)=>{const[j,O]=(0,y.useState)(u);return ee(()=>{let I;return u||v===0?O(u):I=setTimeout(()=>O(u),v),()=>I&&clearTimeout(I)},[u]),[j,O]},be=()=>![typeof window,typeof document].includes("undefined"),Ge=u=>x(u).indexOf("element")>-1,nt=(u=null)=>{var v,j;return be()?Ge(u)?{width:u.clientWidth,height:u.clientHeight}:{width:(v=window.innerWidth)!=null?v:document.documentElement.clientWidth,height:(j=window.innerHeight)!=null?j:document.documentElement.clientHeight}:{width:0,height:0}};const X=(u,v)=>{getComputedStyle(u).position==="static"&&(u.style.position="relative");const j=document.createElement("object");return j.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),j.setAttribute("class","resize-sensor"),j.onload=()=>{j.contentDocument.defaultView.addEventListener("resize",v,!1),v()},j.type="text/html",u.appendChild(j),j.data="about:blank",j};var Ye=(u,v=60)=>{if(!be())return;u=U(u)?u.current:u!=null?u:document.body;let j,O=[];const I=F(()=>O.map(oe=>oe(u)),v),J=oe=>{j||(j=X(u,I)),O.indexOf(oe)===-1&&O.push(oe)},de=oe=>{const Ie=O.indexOf(oe);Ie!==-1&&O.splice(Ie,1),O.length===0&&j&&ae()},ae=()=>{j&&j.parentNode&&(j.contentDocument&&j.contentDocument.defaultView.removeEventListener("resize",I,!1),j.parentNode.removeChild(j),j=void 0,O=[])};return{element:u,bind:J,unbind:de,destroy:ae}},De=(u={})=>{const v=(0,y.useRef)(0),[j,O]=(0,y.useState)(u),I=(0,y.useCallback)(J=>{cancelAnimationFrame(v.current),v.current=requestAnimationFrame(()=>O(J))},[]);return(0,y.useEffect)(()=>()=>cancelAnimationFrame(v.current),[]),[j,I]},Ue=(u=null,v=60)=>{const j=U(u)?u.current:u,{bind:O,destroy:I}=Ye(j,v),[J,de]=De(nt(j));return(0,y.useEffect)(()=>(O(()=>j&&de(nt(j))),()=>I()),[j]),J},Mt=u=>{const v=(0,y.useRef)(null);return(0,y.useLayoutEffect)(()=>{v.current=u}),(0,y.useCallback)(v.current,[])},it=(u,v)=>{const j=(0,y.useRef)();(0,y.useEffect)(()=>{j.current=u},[u]),(0,y.useEffect)(()=>{if(v){const O=setInterval(()=>j.current(),v);return()=>clearInterval(O)}},[v])},dt=u=>{const v=(0,y.useRef)();return(0,y.useEffect)(()=>{v.current=u},[u]),v.current},L=(u=null)=>{var v,j,O,I;return be()?Ge(u)?{left:u.scrollLeft,top:u.scrollTop}:{left:(j=(v=window.pageXOffset)!=null?v:document.documentElement.scrollLeft)!=null?j:document.body.scrollLeft,top:(I=(O=window.pageYOffset)!=null?O:document.documentElement.scrollTop)!=null?I:document.body.scrollTop}:{left:0,top:0}},ie=(u=null)=>{const[v,j]=De(L(u));return(0,y.useEffect)(()=>{const O=()=>j(L(u)),I=Ge(u)?u:window;return I.addEventListener("scroll",O,{capture:!1,passive:!0}),()=>I.removeEventListener("scroll",O)},[u]),v},G=u=>x(u)==="array",ve=u=>G(u)&&!!u.length,Te=(u,v,j=[],O=!1,I=null)=>ve(u)?v?(j=typeof j=="string"?j.split(","):j,u.filter(J=>(j=j.length>0?j:Object.keys(J),j.filter(de=>{const ae=J[de];if(ae==null)return!1;if(O)return ae===v;const oe=new RegExp(v,"gi"),Ie=ae.toString().match(oe);return Ie&&I&&(J[de]=I(ae.toString().replace(oe,`<span style="background-color:yellow">${Ie[0]}</span>`),{display:"inline-block"})),Ie}).length))):u:[],Qe=(u,v="id")=>{if(!ve(u))return u;const j=[],O=[];return u.map(I=>{const J=c(I)?I[v]:I;O.includes(J)||(O.push(J),j.push(I))}),j},qe=u=>(u==null?void 0:u.$$typeof)&&typeof u.$$typeof=="symbol"&&u.$$typeof.description==="react.element",Je=u=>u==null?void 0:u.__v_isVNode;const _e=u=>{if(!G(u)&&!c(u))return u;const v=G(u)?[]:{};for(const j in u)if(A(u,j)){const O=u[j];v[j]=qe(O)||Je(O)||typeof O!="object"?O:O!==u?_e(O):"cyclic"}else Object.setPrototypeOf(v,{[j]:u[j]});return v};var Ke=_e;const et=u=>(v,j="children")=>{if(!Array.isArray(v))return v;const O=Ke(v),I=J=>{const de=[];return J.map(ae=>{if(ve(ae[j])){const oe=I(ae[j])||[];ae[j]=oe,oe.length>0&&de.push(ae)}}),u(J,de)};return I(O)};var Ot=(u,v,j,O="name",I="id",J="children",de=!1)=>et((ae,oe)=>Qe([...Te(ae,v,O,de,j),...oe],I))(u,J),yt=K(458),It=(u,v)=>(0,yt.jsx)("div",{dangerouslySetInnerHTML:{__html:u},...v}),Ct=(u=null,v=It)=>{const[j,O]=(0,y.useState)(u),I=(0,y.useCallback)((...J)=>{const[de,ae,...oe]=J;if(!ae)O(null);else{J=[de,ae,v,...oe];const Ie=Ot(...J);O(Ie)}},[]);return[j,I]},Qt=u=>{const[v,j]=(0,y.useState)(u);return(0,y.useEffect)(()=>j(u),[u]),[v,j]},Wt=()=>{const u={};return{on:(v,j)=>{u[v]||(u[v]=[]),u[v].indexOf(j)===-1&&u[v].push(j)},emit:(v,j)=>{u[v]&&u[v].map(O=>O(j))},off:(v,j=null)=>{if(u[v]){if(typeof j!="function")return u[v]=[];const O=u[v].indexOf(j);O>-1&&u[v].splice(O,1)}}}};const Et=u=>{const v={};for(let j in u)A(u,j)||(v[j]=u[j]);return v};var Pt=(u,v)=>{if(!c(u))return v;if(!c(v))return u;const j={...Et(u),...Et(v)},O={...u,...v};return Object.keys(j).map(I=>{Object.setPrototypeOf(O,{[I]:j[I]})}),O},tt=()=>{const{on:u,emit:v,off:j}=Wt(),O={};return{getState:I=>Ke(O[I]),setState:(I,J=!1)=>{if(typeof I=="function"&&(I=I(Ke(O))),!c(I))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const de=Ke(I);Object.keys(de).map(ae=>{const oe=O[ae],Ie=de[ae],ot=c(Ie)&&c(oe)?Pt(oe,Ie):Ie;!J&&v(ae,ot),O[ae]=ot})},subscribe:(I,J)=>(u(I,J),()=>j(I,J)),unsubscribe:j,clean:I=>{typeof I=="string"?O[I]=void 0:Array.isArray(I)?I.map(J=>O[J]=void 0):Object.keys(O).map(J=>O[J]=void 0)}}};const er=tt();var cr=a(er);const at=u=>u<10?"0"+u:u;var Nt=(u=new Date)=>{const v=new Date(u),j=v.getFullYear(),O=v.getDay(),I=at(v.getMonth()+1),J=at(v.getDate()),de=at(v.getHours()),ae=at(v.getMinutes()),oe=at(v.getSeconds());return[j,I,J,de,ae,oe,O]};const gt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Or=(u,v,j="-")=>u.replace(new RegExp(j,"g"),v);var rt=(u=new Date,v=["-","-"," ",":",":",""],j=gt)=>{const O=Nt(u);let I="";return v.map((J,de)=>{var ae;return I+=(de===6?j[O[de]]:(ae=O[de])!=null?ae:"")+J}),I};const Zt=()=>rt(new Date,["-","-"," ",":",":"," ",""]);var ft=()=>{const[u,v]=(0,y.useState)("");return it(()=>{v(Zt())},1e3),[u]};const tr=u=>++u;var rr=()=>{const[,u]=(0,y.useState)(0);return(0,y.useCallback)(()=>u(tr),[])},ht=()=>{const[u,v]=De(nt());return(0,y.useEffect)(()=>{const j=()=>v(nt());return window.addEventListener("resize",j,!1),()=>window.removeEventListener("resize",j,!1)},[]),u}}(),te}()})},5820:function(Tt){(function(he,He){Tt.exports=He()})(this,function(){return function(){"use strict";var he={};(function(){he.d=function(e,t){for(var r in t)he.o(t,r)&&!he.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}})(),function(){he.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){he.r=function(e){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}();var He={};he.r(He),he.d(He,{a2o:function(){return Le},addAtNext:function(){return te},addAtPos:function(){return y},addClass:function(){return x},addDays:function(){return c},addHours:function(){return w},addMonths:function(){return g},addNodes:function(){return S},addScript:function(){return z},addStyle:function(){return A},addYears:function(){return U},arr2Tree:function(){return be},arr2TreeById:function(){return Ge},arr2TreeByPath:function(){return nt},arr2obj:function(){return q},arr2str:function(){return pe},backTop:function(){return ie},base2Ten:function(){return G},baseConversion:function(){return Te},baseFetch:function(){return yt},cacheData:function(){return er},cancelablePromise:function(){return Ke},changePos:function(){return cr},classifyArr:function(){return at},clone:function(){return tt},compareVersion:function(){return Nt},compose:function(){return gt},copyToClipboard:function(){return Or},createContainer:function(){return rt},createElement:function(){return ft},createNode:function(){return O},createStore:function(){return ae},createTextElement:function(){return Zt},curry:function(){return oe},cyclic:function(){return It},dash2camel:function(){return Ie},debounce:function(){return ot},deleteNodes:function(){return jt},deviceType:function(){return lt},dlfile:function(){return _t},dropInfo:function(){return kr},editNodes:function(){return Cr},emitter:function(){return I},equal:function(){return Qt},escapeHTML:function(){return Er},eventBus:function(){return At},fetcher:function(){return _r},filter:function(){return jr},filterList:function(){return Zr},findMax:function(){return or},firstUpper:function(){return Sr},fixFileSizeUnit:function(){return Ar},fixPath:function(){return zr},fixRoute:function(){return Lr},fixSize:function(){return Br},fixTimeUnit:function(){return s},flatten:function(){return C},formatNum:function(){return b},formatPassTime:function(){return Y},formatTime:function(){return _},fullScreen:function(){return ke},getElementsSize:function(){return br},getExplore:function(){return Q},getLeaveTime:function(){return Me},getMeta:function(){return nr},getMonthDays:function(){return zt},getOffset:function(){return Bt},getOsInfo:function(){return qt},getParams:function(){return xt},getPosition:function(){return bt},getRelative:function(){return vt},getSelected:function(){return pr},getTextSize:function(){return $r},getTime:function(){return P},getTouchPosition:function(){return Xe},getType:function(){return Fe},getValue:function(){return Yr},getViewportSize:function(){return pt},hasClass:function(){return Fr},hasProp:function(){return Ye},hex2rgba:function(){return mr},imgtocanvas:function(){return xr},isArray:function(){return ge},isAsync:function(){return _e},isBrowser:function(){return p},isDate:function(){return Rr},isElement:function(){return a},isError:function(){return ir},isFunction:function(){return Je},isIE:function(){return Mr},isObject:function(){return F},isReactComp:function(){return ar},isReactEle:function(){return Wt},isRef:function(){return De},isRegExp:function(){return yr},isTouch:function(){return hr},isUrl:function(){return Ur},isValidArr:function(){return Vt},isValidObj:function(){return Tr},isVueEle:function(){return Et},json2str:function(){return lr},loadBase64:function(){return Qr},loadImage:function(){return eo},loop:function(){return qr},matchedStr:function(){return Xr},memoize:function(){return Gr},merge:function(){return T},mergeArr:function(){return l},mergeClass:function(){return D},mergeObj:function(){return E},mergeOwnProp:function(){return de},message:function(){return ye},monthDate:function(){return ze},moveNodes:function(){return Oe},obj2arr:function(){return Ae},obj2str:function(){return Z},omit:function(){return $e},once:function(){return Ce},padStart:function(){return Ne},params2data:function(){return qe},params2str:function(){return Qe},pick:function(){return wt},promisify:function(){return sr},randColor:function(){return Xt},randItem:function(){return kt},randNum:function(){return Gt},randPercent:function(){return ur},randStr:function(){return Rt},randTrue:function(){return Ft},removeClass:function(){return W},resize:function(){return Jt},rgba2hex:function(){return Jr},rmUnit:function(){return Kr},scheduler:function(){return ao},scrollIsBottom:function(){return lo},scrollTo:function(){return Ue},scrollToAnchor:function(){return so},scrollTop:function(){return X},selectedHandle:function(){return K},session:function(){return uo},setMeta:function(){return co},setStyle:function(){return Ve},sleep:function(){return dr},sleepSync:function(){return Ir},sort:function(){return fo},sortObj:function(){return ho},storage:function(){return po},store:function(){return xo},str2Html:function(){return mt},str2code:function(){return yo},sysLang:function(){return go},template:function(){return bo},ten2Base:function(){return ve},throttle:function(){return vo},timeGap:function(){return Eo},timeInterval:function(){return ro},timestamp:function(){return Re},toggleClass:function(){return jo},traverItem:function(){return f},traverList:function(){return So},unescapeHTML:function(){return zo},unique:function(){return Ut},updateId:function(){return $o},updateNode:function(){return j},updateTreeNodes:function(){return Fo},uuidv4:function(){return Dt},validObj:function(){return To},watchScreen:function(){return Oo},watermark:function(){return Io},weekDate:function(){return Po},wrapPromise:function(){return No}});var Le=(e,t="key",r="value")=>{const o={};return(e||[]).map(n=>o[n[t]]=n[r]),o},Fe=e=>Object.prototype.toString.call(e).slice(8,-1).toLowerCase(),ge=e=>Fe(e)==="array",K=e=>(t,r,o="id",n="children")=>{if(!ge(t))return null;const d=(k,$="")=>{for(let N=0,V=k.length;N<V;N++){const xe=k[N];if(xe[o]===r)return e(k,N,$)||k[N];if(ge(xe[n])){const Se=d(xe[n],xe[o]);if(Se)return Se}}};return d(t),t},te=(e,t,r,o="id",n="children")=>K((d,k)=>d.splice(k,0,r))(e,t,o,n),y=(e,t,r,o,n="id",d="children")=>K((k,$)=>{const N=k[$];N.children?N.children.splice(o,0,r):N.children=[r]})(e,t,n,d),a=e=>Fe(e).indexOf("element")>-1,x=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" "),n=[...new Set([...r,...o])];e.className=n.join(" ")},c=(e,t=new Date)=>{const r=new Date(t);return r.setDate(r.getDate()+e),r},w=(e,t=new Date)=>{const r=new Date(t);return r.setHours(r.getHours()+e),r},g=(e,t=new Date)=>{const r=new Date(t);return r.setMonth(r.getMonth()+e),r},S=(e,t,r,o="id",n="children")=>K((d,k)=>{const $=d[k];return $[n]=[...$[n]||[],...r],$})(e,t,o,n),p=()=>![typeof window,typeof document].includes("undefined"),z=e=>{if(p())return new Promise((t,r)=>{if([...document.getElementsByTagName("script")].find(o=>o.src===e))t();else{const o=document.createElement("script");o.onerror=n=>r(new Error(`Failed to load '${e}'`)),o.onload=t,o.src=e,(document.head||document.getElementsByTagName("head")[0]).appendChild(o)}})},A=(e,t)=>{if(p())return t?new Promise((r,o)=>{if([...document.getElementsByTagName("style")].map(n=>n.getAttribute("huxy-css-hash")).filter(Boolean).find(n=>n===t))r();else{const n=document.createElement("style");n.onerror=d=>o(new Error(`Failed to load '${t}' style`)),n.onload=r,n.innerHTML=e,n.setAttribute("huxy-css-hash",t),(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}}):new Promise((r,o)=>{if([...document.getElementsByTagName("link")].find(n=>n.href===e))r();else{const n=document.createElement("link");n.onerror=d=>o(new Error(`Failed to load '${e}'`)),n.onload=r,n.href=e,n.rel="stylesheet",(document.head||document.getElementsByTagName("head")[0]).appendChild(n)}})},U=(e,t=new Date)=>{const r=new Date(t);return r.setFullYear(r.getFullYear()+e),r},q=(e=[],t="name")=>{const r={};return e.map(({[t]:o,value:n})=>r[o]=n),r},F=e=>Fe(e)==="object";const B=(e={})=>{let t="";return Object.keys(e).map(r=>{const o=e[r];t=t&&`${t}, `,F(o)?t+=`${r}=${B(o)}`:Array.isArray(o)?t+=`${r}=${pe(o)}`:t+=`${r}=${o}`}),`{${t}}`};var Z=B;const ee=(e=[])=>{let t="";return e.map(r=>{t=t&&`${t}, `,F(r)?t+=Z(r):Array.isArray(r)?t+=ee(r):t+=`${r}`}),`[${t}]`};var pe=ee,be=e=>(t,r="id",o="children",n=-1)=>{if(!ge(t))return t;const d={},k=t.map($=>$[r]);return[...t].map($=>{var N;const V={...$},{[r]:xe}=V;if(xe!=null){let{parentId:Se}=V;Se==null&&(Se=(N=e==null?void 0:e(V))!=null?N:n,V.parentId=Se),d[xe]||(d[xe]=[]),V[o]=d[xe],d[Se]||(d[Se]=[]),d[n]||(d[n]=[]),k.includes(Se)?d[Se].push(V):d[n].push(V)}}),d[n]},Ge=(e,t="id",r="children",o=-1)=>be(n=>{const d=n[t].match(/\S+(?=-\S+)/);return(d==null?void 0:d[0])||o})(e,t,r,o),nt=(e,t="path",r="children",o=null)=>be(n=>{var d,k,$,N;const V=n[t],xe=V.match(/.*\/[^:/]+\/:[^/]+/);return xe?(k=(d=xe[0].match(/(.*)\/:+/))==null?void 0:d[1])!=null?k:o:(N=($=V.match(/(.*)\/+/))==null?void 0:$[1])!=null?N:o})(e,t,r,o),X=()=>{var e,t;return p()&&((t=(e=window.pageYOffset)!=null?e:document.documentElement.scrollTop)!=null?t:document.body.scrollTop)},Ye=(e,t)=>Object.prototype.hasOwnProperty.call(e!=null?e:{},t),De=e=>Ye(e,"current"),Ue=(e=0,t)=>{var r;p()&&(t=De(t)?t.current:t!=null?t:window,(r=t.scrollTo)==null||r.call(t,{top:e,behavior:"smooth"}))},Mt=`.huxy-totop-bar {
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
}`;const it=()=>document.getElementsByClassName("huxy-totop-bar")[0],dt=e=>{if(it())return;const t=document.createElement("div");t.setAttribute("class","huxy-totop-bar");const r=document.createElement("i"),o=document.createElement("span");return o.innerText=e,t.appendChild(r),t.appendChild(o),document.body.appendChild(t),t.addEventListener("click",()=>Ue(),!1),t},L=()=>{const e=it();e&&document.body.removeChild(e)};var ie=(e=0,t="\u8FD4\u56DE\u9876\u90E8")=>{if(!p())return;A(Mt,"huxy-backtop-css");const r=()=>{X()>e?dt(t):L()};return(()=>(document.addEventListener("scroll",r,!1),()=>{L(),document.removeEventListener("scroll",r,!1)}))()},G=(e=0,t=2)=>parseInt(String(e),t),ve=(e=0,t=2)=>Number(e).toString(t),Te=(e=0,t=2,r=16)=>ve(G(e,t),r),Qe=e=>{if(!F(e))return"";const t=[];return Object.keys(e).map((r,o)=>{const n=o>0?"&":"?";t.push(`${n}${r}=${e[r]}`)}),t.join("")},qe=e=>{if(!F(e))return{};const t=new FormData;return Object.keys(e).map(r=>{e[r]!=null&&t.append(r,e[r])}),t},Je=e=>Fe(e)==="function",_e=e=>Fe(e)==="promise"||F(e)&&Je(e.then),Ke=(e,t=12e4,r="\u8BF7\u6C42\u8D85\u65F6\uFF01")=>{if(!_e(e))return{};let o=null,n=null;return{promiseFn:new Promise((d,k)=>{o=($="canceled")=>{clearTimeout(n),d({canceled:!0,errMsg:$})},t&&(t=typeof t!="number"?12e4:t,n=setTimeout(()=>o(r),t)),e.then($=>{clearTimeout(n),d({result:$,errMsg:!1})}).catch($=>{clearTimeout(n),k($)})}),cancelFn:o}};const et=[{type:"data",headers:{"Content-Type":"application/json"},body:e=>JSON.stringify(e)},{type:"formData",body:e=>qe(e)},{type:"form",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:e=>Qe(e).slice(1)}],Ot=(e,t)=>{const r=["data","form","formData","params"].includes(t),o=Object.keys(e).filter(n=>e[n]);if(o.length===1){const n=o[0],d=r?t:n;return d==="params"?{query:e[n]}:{result:e[n],type:d}}else if(o.length>1){const n=o.filter(k=>k!=="params").slice(-1)[0],d=r?t:n;return d==="params"?{query:e.params||e[n]}:{query:e.params,result:e[n],type:d}}};var yt=(e,t)=>r=>(o,n={})=>{const{headers:d,dataType:k,data:$,formData:N,form:V,params:xe,...Se}=n,We={data:$,formData:N,form:V,params:xe};let gr;const{query:Kt,result:oo,type:Do}=Ot(We,k)||{};if(!Se.body&&oo){const Hr=et.find(Vr=>Vr.type===Do);gr=Hr.headers,Se.body=Hr.body(oo)}Kt&&(o=`${o}${Qe(Kt)}`);const{promiseFn:_o}=Ke(fetch(o,{method:r,mode:"cors",credentials:"include",cache:"default",headers:{...gr,...d},...Se}),t);return _o.then(({result:Hr,errMsg:Vr})=>e(Vr?{status:408,statusText:Vr}:Hr))},It=e=>{const t=[],r=o=>{if(o&&typeof o=="object"){if(t.indexOf(o)!==-1)return!0;t.push(o);let n=!1;for(let d in o)Ye(o,d)&&r(o[d])&&(o[d]="cyclic",n=!0);return n}return!1};return r(e)&&e};const Ct=(e,t)=>{const r=Fe(e),o=Fe(t);if(r!==o)return!1;if(e==null||t==null)return e===t;if(["object","array"].indexOf(r)===-1)return e.toString()===t.toString();if(Object.keys(e).length!==Object.keys(t).length)return!1;if(It(e)&&It(t))return Ct(e,t);for(let n in t)if(Ye(e,n)!==Ye(t,n)||!Ct(e[n],t[n]))return!1;return!0};var Qt=Ct,Wt=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.element",Et=e=>e==null?void 0:e.__v_isVNode;const Pt=e=>{if(!ge(e)&&!F(e))return e;const t=ge(e)?[]:{};for(const r in e)if(Ye(e,r)){const o=e[r];t[r]=Wt(o)||Et(o)||typeof o!="object"?o:o!==e?Pt(o):"cyclic"}else Object.setPrototypeOf(t,{[r]:e[r]});return t};var tt=Pt,er=(e=100)=>{const t=[];let r=-1;const o=d=>{var k,$;const N=t.length,V=tt(d);return Qt(V,(k=t[N-1])==null?void 0:k.data)?{index:r,length:N,data:($=t[r])==null?void 0:$.data}:(t.push({data:V}),t.length>e&&t.shift(),r=t.length-1,{index:r,length:r+1,data:t[r].data})},n=(d=0)=>{var k;const $=t.length;return r+=d,r=r<0?0:r>$-1?$-1:r,{index:r,length:$,data:tt((k=t[r])==null?void 0:k.data)}};return{record:o,cursor:n,jump:d=>{var k;return r=d,{index:r,length:t.length,data:tt((k=t[r])==null?void 0:k.data)}},undo:()=>n(-1),redo:()=>n(1),getList:()=>tt(t),clean:()=>{t.length=0,r=-1}}},cr=(e,t,r)=>{if(!ge(e))return e;const o=e[t],n=e[r];return e.splice(t,1,n),e.splice(r,1,o),e},at=(e=[],t="name")=>{const r={};return e.map(o=>{r[o[t]]?r[o[t]].push(o):r[o[t]]=[o]}),r},Nt=(e,t,r=".")=>{const o=(N,V)=>N.split(V),n=o(e,r),d=o(t,r),k=n.length;let $=0;for(let N=0;N<k;N++)if(n[N]<d[N]){$=k-N;break}return $},gt=(...e)=>(...t)=>{const[...r]=e,o=(...n)=>r.length===0?n[0]:o(r.pop()(...n));return o(...t)},Or=e=>{if(!p())return;const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-9999px",document.body.appendChild(t),t.select(),t.setSelectionRange(0,-1);try{document.execCommand("copy")}catch(r){console.error(r)}document.body.removeChild(t)},rt=e=>(t,r)=>{const{getState:o,setState:n,subscribe:d,unsubscribe:k,clean:$}=e;return r!==void 0&&n({[t]:r},!0),{getState:()=>o(t),setState:(N,V)=>n({[t]:N},V),subscribe:N=>d(t,N),unsubscribe:()=>k(t),clean:()=>$(t)}},Zt=e=>({type:"TEXT_ELEMENT",props:{nodeValue:e}}),ft=(e,t,...r)=>({type:e,props:{...t,children:r.map(o=>typeof o=="object"?o:Zt(o))}});const tr=e=>e.startsWith("on"),rr=e=>e!=="children"&&!tr(e),ht=(e,t)=>r=>e[r]!==t[r],u=(e,t)=>r=>!(r in t),v=e=>{const t=Object.keys(e);return{eventProps:t.filter(tr),propertyProps:t.filter(rr)}};var j=(e,t,r)=>{const{eventProps:o,propertyProps:n}=v(t),{eventProps:d,propertyProps:k}=v(r);o.filter(u(t,r)).map($=>{const N=$.toLowerCase().slice(2);e.removeEventListener(N,t[$])}),n.filter(u(t,r)).map($=>e[$]=""),k.filter(ht(t,r)).map($=>e[$]=r[$]),d.filter(ht(t,r)).map($=>{const N=$.toLowerCase().slice(2);e.addEventListener(N,r[$])})},O=e=>{if(!p())return;const t=e.type==="TEXT_ELEMENT"?document.createTextNode(""):document.createElement(e.type);return j(t,{},e.props),t},I=()=>{const e={};return{on:(t,r)=>{e[t]||(e[t]=[]),e[t].indexOf(r)===-1&&e[t].push(r)},emit:(t,r)=>{e[t]&&e[t].map(o=>o(r))},off:(t,r=null)=>{if(e[t]){if(typeof r!="function")return e[t]=[];const o=e[t].indexOf(r);o>-1&&e[t].splice(o,1)}}}};const J=e=>{const t={};for(let r in e)Ye(e,r)||(t[r]=e[r]);return t};var de=(e,t)=>{if(!F(e))return t;if(!F(t))return e;const r={...J(e),...J(t)},o={...e,...t};return Object.keys(r).map(n=>{Object.setPrototypeOf(o,{[n]:r[n]})}),o},ae=()=>{const{on:e,emit:t,off:r}=I(),o={};return{getState:n=>tt(o[n]),setState:(n,d=!1)=>{if(typeof n=="function"&&(n=n(tt(o))),!F(n))throw TypeError("\u5FC5\u987B\u4F20\u5165object\u5BF9\u8C61\uFF01");const k=tt(n);Object.keys(k).map($=>{const N=o[$],V=k[$],xe=F(V)&&F(N)?de(N,V):V;!d&&t($,xe),o[$]=xe})},subscribe:(n,d)=>(e(n,d),()=>r(n,d)),unsubscribe:r,clean:n=>{typeof n=="string"?o[n]=void 0:Array.isArray(n)?n.map(d=>o[d]=void 0):Object.keys(o).map(d=>o[d]=void 0)}}},oe=(e=()=>{},t=e.length)=>{const r=(...o)=>o.length>=t?e(...o):(...n)=>r(...o,...n);return r},Ie=(e,t="-")=>e.split(t).map((r,o)=>o>0?r.replace(/^\S/,n=>n.toUpperCase()):r.replace(/^\S/,n=>n.toLowerCase())).join(""),ot=(e=()=>{},t=60)=>{let r=null;return function(...o){clearTimeout(r),r=setTimeout(()=>e.apply(this,o),t)}},jt=(e,t,r="id",o="children")=>K((n,d)=>n.splice(d,1))(e,t,r,o),lt=()=>/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?"Mobile":"Desktop",Re=()=>typeof performance!="undefined"&&typeof performance.now=="function"?performance.now():new Date().getTime(),Dt=()=>{let e=Re();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const r=(e+Math.random()*16)%16|0;return e=Math.floor(e/16),(t==="x"?r:r&3|8).toString(16)})},_t=(e,t)=>{if(p())if(t=t||Dt(),typeof e=="string")fetch(e).then(r=>r.blob()).then(r=>{const o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)});else{const r=new Blob([e]),o=window.URL.createObjectURL(r),n=document.createElement("a");n.href=o,n.download=t,n.style.display="none",document.body.appendChild(n),n.click(),n.parentNode.removeChild(n),window.URL.revokeObjectURL(o)}},pt=(e=null)=>{var t,r;return p()?a(e)?{width:e.clientWidth,height:e.clientHeight}:{width:(t=window.innerWidth)!=null?t:document.documentElement.clientWidth,height:(r=window.innerHeight)!=null?r:document.documentElement.clientHeight}:{width:0,height:0}},bt=e=>{var t;if(p())return e=De(e)?e.current:e!=null?e:document.body,(t=e.getBoundingClientRect)==null?void 0:t.call(e)},mt=e=>{if(!p())return;const t=document.createElement("div");return t.innerHTML=e,t.children[0]},Ve=(e,t={},r=!1)=>{if(a(e)){if(r){let o="";Object.keys(t).map(n=>{o+=`${n}: ${t[n]};`}),e.style=o;return}Object.keys(t).map(o=>e.style.setProperty(o,t[o]))}};const Yt=(e=350)=>new Promise(t=>setTimeout(t,e)),Ir=(e=100)=>{const t=Date.now();for(;Date.now()-t<=e;);};var dr=Yt,br=async(e,t=15)=>{if(!p())return;if(typeof e=="string"&&(e=mt(e)),e=De(e)?e.current:e,!a(e))return{};const r=e.cloneNode(!0);Ve(r,{"pointer-events":"none","z-index":-1,opacity:0,display:"block",animation:"none"}),e.parentNode.appendChild(r),await dr(t);const o=bt(r);return e.parentNode.removeChild(r),o};const Pr=/(\s|^)(huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br)(\s|$)/,vr=/huxy-drop-arrow-lt|huxy-drop-arrow-rt|huxy-drop-arrow-lb|huxy-drop-arrow-rb|huxy-drop-arrow-tl|huxy-drop-arrow-tr|huxy-drop-arrow-bl|huxy-drop-arrow-br/,Ht=(e,t)=>{var r;t=`huxy-drop-arrow-${t}`;const o=(r=e.getAttribute("class"))!=null?r:"";Pr.test(o)?e.setAttribute("class",o.replace(vr,t)):e.setAttribute("class",`${o} ${t}`)},wr=async(e,t,r)=>{const{left:o,right:n,top:d,bottom:k}=bt(e),{width:$,height:N}=pt(),{width:V,height:xe}=await br(t);if(n<0||k<0||o>$||d>N)return{};if(r==="vertical"){const Se={left:o+"px",top:k+10+"px",right:"auto",bottom:"auto"};let We="lt";o+V>$&&(Se.left=n-V+"px",We="rt"),k+10+xe>N&&(Se.top=d-10-xe+"px",We=We==="lt"?"lb":"rb"),Ve(t,Se),Ht(t,We)}else{const Se={left:n+10+"px",top:d+"px",right:"auto",bottom:"auto"};let We="tl";n+10+V>$&&(Se.left=o-10-V+"px",We="tr"),d+xe>N&&(Se.top=k-xe+"px",We=We==="tl"?"bl":"br"),Ve(t,Se),Ht(t,We)}};var kr=(e,t,r="horizontal")=>{const o=ot(wr),n=()=>o(e,t,r);window.addEventListener("scroll",n,!1),window.addEventListener("resize",n,!1);const d=()=>{window.removeEventListener("scroll",n),window.removeEventListener("resize",n),Ve(t,{left:"",top:"",right:"",bottom:""})};return wr(e,t,r),d},Cr=(e,t,r,o="id",n="children")=>K((d,k)=>d[k]={...d[k],...r})(e,t,o,n),Er=e=>e.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t);const fr=I();var At=e=>{const{on:t,emit:r,off:o}=fr;return{on:n=>t(e,n),emit:n=>r(e,n),off:n=>o(e,n)}};const Nr=120*1e3,Dr=e=>e.json().then(t=>t);var _r=(e=Dr,t=Nr)=>(r="get")=>yt(e)((r||"get").toUpperCase()),Vt=e=>ge(e)&&!!e.length,jr=(e,t,r=[],o=!1,n=null)=>Vt(e)?t?(r=typeof r=="string"?r.split(","):r,e.filter(d=>(r=r.length>0?r:Object.keys(d),r.filter(k=>{const $=d[k];if($==null)return!1;if(o)return $===t;const N=new RegExp(t,"gi"),V=$.toString().match(N);return V&&n&&(d[k]=n($.toString().replace(N,`<span style="background-color:yellow">${V[0]}</span>`),{display:"inline-block"})),V}).length))):e:[],Ut=(e,t="id")=>{if(!Vt(e))return e;const r=[],o=[];return e.map(n=>{const d=F(n)?n[t]:n;o.includes(d)||(o.push(d),r.push(n))}),r};const St=e=>(t,r="children")=>{if(!Array.isArray(t))return t;const o=tt(t),n=d=>{const k=[];return d.map($=>{if(Vt($[r])){const N=n($[r])||[];$[r]=N,N.length>0&&k.push($)}}),e(d,k)};return n(o)};var Zr=(e,t,r,o="name",n="id",d="children",k=!1)=>St(($,N)=>Ut([...jr($,t,o,k,r),...N],n))(e,d),or=(e="")=>{var t;return(t=e.match(/\d+/g))==null?void 0:t.sort((r,o)=>o-r)[0]},Sr=(e="")=>e.replace(/^\S/,t=>t.toUpperCase()),Ar=(e,t=1024)=>{const r=e/t;if(r<t)return`${r.toFixed(3)-0} KB`;const o=r/t;return o<t?`${o.toFixed(3)-0} M`:`${(o/t).toFixed(3)-0} G`},zr=(e="")=>e.replaceAll("//","/"),Lr=e=>e?e.charAt(e.length-1)==="/"?e.slice(0,-1):e:"",Br=(e,t=1)=>{const r=e.width/e.height/t,o=r>1?"100%":`${(r*100).toFixed(4)}%`;return e.width=o},s=(e=0,t=["s","m","h","d"])=>{if(e=~~e,e<60)return`${e}${t[0]}`;const r=~~(e/60);if(r<60)return`${r}${t[1]}${e%60}${t[0]}`;const o=~~(e/3600),n=e%3600,d=~~(n/60);return o<24?`${o}${t[2]}${d}${t[1]}${n%60}${t[0]}`:`${(o/24).toFixed(2)}${t[3]}`},f=e=>(t,r="children")=>{if(!ge(t))return t;const o=(n,d=[])=>{n.map((k,$)=>{const N=ge(k[r]);if(k=e(k,d,$,N)||k,N){const{[r]:V,...xe}=k;o(V,[...d,{...xe,"@@index":$}])}})};return o(t),t},C=(e,t="children")=>{const r=[];return f(o=>{const{[t]:n,...d}=o;r.push(d)})(e,t),r},b=e=>typeof e=="number"?e.toLocaleString("en-US"):"";const m=e=>e<10?"0"+e:e;var P=(e=new Date)=>{const t=new Date(e),r=t.getFullYear(),o=t.getDay(),n=m(t.getMonth()+1),d=m(t.getDate()),k=m(t.getHours()),$=m(t.getMinutes()),N=m(t.getSeconds());return[r,n,d,k,$,N,o]},Y=(e,t=new Date)=>{e=P(e),t=P(t);const r=t.y-e.y,o=t.m-e.m,n=t.d-e.d,d=t.h-e.h,k=t.M-e.M,$=new Date(t.y,t.m,0).getDate(),N=(V,xe,Se,We,gr)=>{const Kt="\u524D";return xe<0&&(V-=1,xe+=Se),V===0?xe+gr+Kt:xe===0?V+We+Kt:V+We+xe+gr+Kt};return r>0?N(r,o,12,"\u5E74","\u4E2A\u6708"):o>0?N(o,n,$,"\u4E2A\u6708","\u5929"):n>0?N(n,d,24,"\u5929","\u5C0F\u65F6"):d>0?N(d,k,60,"\u5C0F\u65F6","\u5206\u949F"):k>0?k+"\u5206\u949F\u524D":"\u521A\u521A"};const R=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],M=(e,t,r="-")=>e.replace(new RegExp(r,"g"),t);var _=(e=new Date,t=["-","-"," ",":",":",""],r=R)=>{const o=P(e);let n="";return t.map((d,k)=>{var $;return n+=(k===6?r[o[k]]:($=o[k])!=null?$:"")+d}),n};const ne=["","webkit","moz","ms"],we=e=>ne.map(t=>t?`${t}FullscreenElement`:"fullscreenElement").find(t=>e[t]),Ee=e=>ne.map(t=>t?`${t}RequestFullscreen`:"requestFullscreen").find(t=>e[t]),le=e=>ne.map(t=>t?`${t}ExitFullscreen`:"exitFullscreen").find(t=>e[t]),fe=ne.map(e=>`${e}fullscreenchange`);var ke=e=>{var t,r;if(!p())return;e=De(e)?e.current:e!=null?e:document.body;const o=we(document),n=Ee(e),d=le(document);document[o]?(r=document[d])==null||r.call(document):(t=e[n])==null||t.call(e)};const se=[{name:"IE11",reg:/rv:([\d.]+)\) like gecko/},{name:"IE",reg:/msie ([\d.]+)/},{name:"Edge",reg:/edge\/([\d.]+)/},{name:"Firefox",reg:/firefox\/([\d.]+)/},{name:"Opera",reg:/(?:opera|opr).([\d.]+)/},{name:"Chrome",reg:/chrome\/([\d.]+)/},{name:"Safari",reg:/version\/([\d.]+).*safari/},{name:"WeiXin",reg:/micromessenger\/([\d.]+)/},{name:"TIM",reg:/tim\/([\d.]+)/},{name:"QQ",reg:/qq\/([\d.]+)/},{name:"IOS Chrome",reg:/crios\/([\d.]+)/}];var Q=()=>{var e;if(!p())return;const t=window.navigator.userAgent.toLowerCase(),r=(e=se.find(o=>t.match(o.reg)))!=null?e:{};return{type:r.name,version:t.match(r.reg)[1]}};const je=60*1e3,Pe=60*je,Ze=24*Pe;var Me=(e,t=new Date)=>{let r=new Date(e)-t;const o=~~(r/Ze);r-=Ze*o;const n=~~(r/Pe);r-=Pe*n;const d=~~(r/je);r-=je*d;const k=~~(r/1e3);return`${o}\u5929${n}\u5C0F\u65F6${d}\u5206${k}\u79D2`};const Be=[{"http-equiv":"X-UA-Compatible",content:"IE=edge,chrome=1"},{"http-equiv":"Cache-Control",content:"no-siteapp"},{name:"renderer",content:"webkit|ie-comp|ie-stand"},{name:"referrer",content:"no-referrer"},{name:"description",content:"web design"},{name:"keywords",content:"react,hooks,huxy,function"},{name:"viewport",content:"viewport-fit=cover"},{name:"robots",content:"index,follow"},{name:"apple-mobile-web-app-title",content:"web"},{name:"apple-mobile-web-app-capable",content:"yes"},{name:"apple-mobile-web-app-status-bar-style",content:"black"},{name:"format-detection",content:"telphone=no,email=no"},{name:"x5-fullscreen",content:"true"},{name:"theme-color",content:"#33363b"},{name:"google",value:"notranslate"}],Lt=e=>{if(!Array.isArray(e))return Be;const t=[...Be];return e.map(r=>{const o=t.findIndex(n=>n.name===r.name||n["http-equiv"]===r["http-equiv"]);o>-1?t[o]=r:t.push(r)}),t};var nr=e=>{const t=Lt(e).map(r=>`<meta ${Object.keys(r).map(o=>`${o}=${r[o]}`).join(" ")} />`);return mt(t.join(""))},zt=(e=new Date)=>{const t=P(e);return new Date(t[0],t[1],0).getDate()},Bt=(e=null)=>{var t,r,o,n;return p()?a(e)?{left:e.scrollLeft,top:e.scrollTop}:{left:(r=(t=window.pageXOffset)!=null?t:document.documentElement.scrollLeft)!=null?r:document.body.scrollLeft,top:(n=(o=window.pageYOffset)!=null?o:document.documentElement.scrollTop)!=null?n:document.body.scrollTop}:{left:0,top:0}};const $t=[{name:"ios",reg:/\(([^;]+);(.+)os (.+) like mac os x/,format:e=>{var t;return{type:"ios",model:e[1],version:(t=e[3])==null?void 0:t.replaceAll("_",".")}}},{name:"macOS",reg:/mac os x ([\w_.]+)/,format:e=>({type:"macOS",version:e[1]?e[1].replaceAll("_","."):void 0})},{name:"WindowsPhone",reg:/windows phone( os)? ([\d.]+)/,format:e=>({type:"WindowsPhone",version:e[2]})},{name:"Windows",reg:/windows nt ([\d.]+)/,format:e=>({type:"Windows",version:e[1]})},{name:"Android",reg:/android( [\d.]+)?/,format:e=>({type:"Android",version:e[1]?e[1].replaceAll(" ",""):void 0})},{name:"Ubuntu",reg:/ubuntu/,format:e=>({type:"Ubuntu"})},{name:"Linux",reg:/linux/,format:e=>({type:"Linux"})}];var qt=()=>{if(!p())return;const e=window.navigator.userAgent.toLowerCase(),t=$t.find(r=>e.match(r.reg));return t?t.format(e.match(t.reg)):{}},xt=(e="")=>{const[t,r]=e.split("?");if(r){const o={};return r.split("&").map(n=>{const[d,k]=n.split("=");o[d]=k}),{path:t,params:o}}return{path:t}},hr=()=>p()&&(window.ontouchstart||navigator.maxTouchPoints),Xe=e=>{var t,r,o,n;const{left:d,top:k}=Bt();return{touchX:hr()?(r=(t=e==null?void 0:e.touches)==null?void 0:t[0])==null?void 0:r.pageX:(e==null?void 0:e.pageX)||(e==null?void 0:e.clientX)+d,touchY:hr()?(n=(o=e==null?void 0:e.touches)==null?void 0:o[0])==null?void 0:n.pageY:(e==null?void 0:e.pageY)||(e==null?void 0:e.clientY)+k}},vt=(e,t)=>{var r,o;const{touchX:n,touchY:d}=Xe(e),{x:k,y:$}=(o=(r=t==null?void 0:t.getBoundingClientRect)==null?void 0:r.call(t))!=null?o:{};return{x:n-(k!=null?k:0),y:d-($!=null?$:0)}},pr=(e,t,r="id",o="children")=>{if(!ge(e))return null;const n=d=>{for(let k=0,$=d.length;k<$;k++){const N=d[k];if(N[r]===t)return[N];if(ge(N[o])){const V=n(N[o]);if(V)return[N].concat(V)}}};return n(e)},$r=(e,t={},r)=>{if(!p())return;r=De(r)?r.current:r!=null?r:document.body;const o=document.createElement("span");o.setAttribute("style","pointer-events: none; z-index: -1; opacity: 0;"),t&&Ve(o,t),o.innerText=e,r.appendChild(o);const n=o.getBoundingClientRect();return r.removeChild(o),n};const st=(e={},t)=>{t=ut(t);const r=(o,n)=>{if(!(n!=null&&n[0]))return o;if(typeof o[n[0]]=="object")return r(o[n[0]],n.slice(1));if(!(n.length>1))return o[n[0]]};return r(e,t)},ut=(e="")=>{var t;return(t=e.replace(/\[['"]?(.*?)['"]?\]/g,".$1"))==null?void 0:t.split(".")};var Yr=st,Fr=(e,t="")=>a(e)&&e.className.match(new RegExp("(\\s|^)"+t+"(\\s|$)")),mr=(e="")=>{if(e[0]!=="#")return e;e=e.replace("#","");const t=e.length;t===3?e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}`:t===4&&(e=`${e[0]}${e[0]}${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}`);const r=parseInt(e.slice(0,2),16)||0,o=parseInt(e.slice(2,4),16)||0,n=parseInt(e.slice(4,6),16)||0;if(e.length===6)return`rgb(${r},${o},${n})`;const d=parseInt(e.slice(6,8),16)/255||1;return`rgba(${r},${o},${n},${d})`},xr=e=>{if(!p())return;const t=document.createElement("canvas"),r=t.getContext("2d"),{width:o,height:n}=e;return t.width=o,t.height=n,r.drawImage(e,0,0,o,n),t},Rr=(...e)=>!Number.isNaN(new Date(...e).valueOf()),ir=e=>Fe(e)==="error",Mr=()=>navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/Edge/),ar=e=>(e==null?void 0:e.$$typeof)&&typeof e.$$typeof=="symbol"&&e.$$typeof.description==="react.forward_ref",yr=e=>Fe(e)==="regexp",Ur=e=>/^https?:\/\/[^\s/?.#]+\.[^\s]+/.test(e),Tr=e=>F(e)&&Object.keys(e).length,lr=e=>F(e)?Z(e):Array.isArray(e)?pe(e):e,Qr=e=>new Promise((t,r)=>{const o=new FileReader;o.readAsDataURL(e),o.addEventListener("load",()=>t(o.result)),o.addEventListener("error",n=>r(n))}),eo=e=>new Promise((t,r)=>{const o=new Image;o.src=e,o.complete?t(o):(o.addEventListener("load",()=>t(o)),o.addEventListener("error",n=>r(n)))}),qr=async(e,t,r=2e3)=>{for(;!(t!=null&&t(e==null?void 0:e()));)await dr(r)},Xr=(e,t=["{","}"])=>{var r,o;return(o=(r=e==null?void 0:e.trim)==null?void 0:r.call(e).match(new RegExp(`^${t[0]}([\\s\\S]*)${t[1]}$`)))==null?void 0:o[1]},Gr=(e=()=>{},t=100)=>{let r=[];return(...o)=>{const n=JSON.stringify(o),d=r.find(k=>k.key===n);if(!d){const k=e(...o);return r.push({key:n,result:k}),r.length>t&&r.shift(),k}return d.result}};const i=(e,t,r="id")=>{if(!ge(e))return t;if(!ge(t))return e;const o={};return[...e,...t].map(n=>{var d;const k=F(n)?(d=n[r])!=null?d:JSON.stringify(n):n;if(o[k]===void 0)o[k]=n;else{const $=o[k];F($)&&F(n)?o[k]=E($,n):ge($)&&ge(n)?o[k]=i($,n):o[k]=n}}),Object.keys(o).map(n=>o[n])};var l=i;const h=(e,t)=>{if(!F(e))return t;if(!F(t))return e;for(let r in t)Ye(t,r)?F(e[r])&&F(t[r])?e[r]=h(e[r],t[r]):ge(e[r])&&ge(t[r])?e[r]=l(e[r],t[r]):e[r]=t[r]:Object.setPrototypeOf(e,{[r]:t[r]});return e};var E=h,T=(e,...t)=>{const r=ge(e)?l:E;return t.map(o=>e=r(e,o)),e},D=(e,t)=>{var r,o;const n=(r=e==null?void 0:e.split(" "))!=null?r:[],d=(o=t==null?void 0:t.split(" "))!=null?o:[];return[...new Set([...n,...d])].filter(Boolean).join(" ")},W=(e,t="")=>{if(!a(e))return;const r=t.split(" ").filter(Boolean),o=e.className.split(" ").filter(n=>!r.includes(n));e.className=o.join(" ")},re=`@keyframes huxy-message-animate-in {
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
}`;const H=()=>document.getElementsByClassName("huxy-message")[0],ue=()=>{const e=document.createElement("div"),t=document.createElement("div");return t.setAttribute("class","huxy-message"),e.appendChild(t),document.body.appendChild(e),t},ce=(e,t)=>{const r=document.createElement("div");r.setAttribute("class",`message-content open ${t}`);const o=document.createElement("span");o.innerText=e;const n=document.createElement("i");return r.appendChild(n),r.appendChild(o),r},me=(e,t=3250,r,o)=>{if(!p())return;A(re,"huxy-message-css");let n=H();n||(n=ue());const d=ce(e,o);n.appendChild(d),setTimeout(()=>{n.removeChild(d),r==null||r()},t),setTimeout(()=>{W(d,"open")},t-250)};var ye={success:(e,t,r)=>me(e,t,r,"success"),warn:(e,t,r)=>me(e,t,r,"warn"),warning:(e,t,r)=>me(e,t,r,"warn"),error:(e,t,r)=>me(e,t,r,"error"),info:(e,t,r)=>me(e,t,r,"info")},ze=(e=new Date)=>{const t=new Date(e),r=t.getDate();return[c(1-r),c(zt(t)-r)]},Oe=(e,t,r,o,n="id",d="children")=>{let k={};return K(($,N)=>(k=$[N],$.splice(N,1),!0))(e,t,n,d),y(e,r,k,o,n,d),e},Ae=(e={},t="name")=>Object.keys(e).map(r=>({[t]:r,value:e[r]})),$e=(e={},t=[])=>{t=typeof t=="string"?t.split(","):t;const r={},o=[];return Object.keys(e).map(n=>t.includes(n)?o.push({key:n,value:e[n]}):r[n]=e[n]),{newObj:r,newQuery:o}},Ce=(e=()=>{})=>{let t=!1;return(...r)=>{if(!t)return t=!0,e(...r)}},Ne=(e="",t=0,r="0")=>{const o=e.length;return o>=t?e:`${Array(t-o+1).join(r)}${e}`},wt=(e,t)=>{if(e==null||typeof e!="object")return{};if(t=typeof t=="string"?t.split(","):t,!ge(t))return e;const r={};return t.map(o=>{o in e&&(r[o]=e[o])}),r},sr=(e=()=>{})=>(...t)=>new Promise((r,o)=>e(...t,(n,d)=>n?o(n):r(d))),Xt=()=>"#"+Ne((~~(Math.random()*(1<<24))).toString(16),6),Gt=(e=0,t=0,r=!0)=>(e<t&&(e=[t,t=e][0]),r?~~(Math.random()*(e-t+1))+t:Math.random()*(e-t)+t),kt=(e=[])=>e[Gt(e.length-1)],ur=(e,t=100)=>{const r=[];return[...new Array(e)].map((o,n)=>{n===e-1?r[n]=t:(r[n]=Gt(1,t-1),t-=r[n])}),r},Rt=(e=8,t=36)=>Math.random().toString(36).slice(2,e+2),Ft=()=>Math.random()>.5;const ct=(e,t)=>{getComputedStyle(e).position==="static"&&(e.style.position="relative");const r=document.createElement("object");return r.setAttribute("style","display:block;position:absolute;top:0;left:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;opacity:0"),r.setAttribute("class","resize-sensor"),r.onload=()=>{r.contentDocument.defaultView.addEventListener("resize",t,!1),t()},r.type="text/html",e.appendChild(r),r.data="about:blank",r};var Jt=(e,t=60)=>{if(!p())return;e=De(e)?e.current:e!=null?e:document.body;let r,o=[];const n=ot(()=>o.map(N=>N(e)),t),d=N=>{r||(r=ct(e,n)),o.indexOf(N)===-1&&o.push(N)},k=N=>{const V=o.indexOf(N);V!==-1&&o.splice(V,1),o.length===0&&r&&$()},$=()=>{r&&r.parentNode&&(r.contentDocument&&r.contentDocument.defaultView.removeEventListener("resize",n,!1),r.parentNode.removeChild(r),r=void 0,o=[])};return{element:e,bind:d,unbind:k,destroy:$}};const Wr=(e=0,t=0,r=0,o=1)=>{e-=0,t-=0,r-=0,o-=0;const n=`#${((1<<24)+(e<<16)+(t<<8)+r).toString(16).slice(1)}`;return o===1?n:(o=Math.round(o*255).toString(16),o=o.length===1?`0${o}`:o.length===3?"ff":o,`${n}${o}`)};var Jr=(e=0,t=0,r=0,o=1)=>{var n;if(e.includes("rgb")){const d=e.match(/rgba?\((.+)\)/);if(d){const k=(n=d[1])==null?void 0:n.split(",").map($=>$.trim());return Wr(...k)}return e}return Wr(e,t,r,o)},Kr=(e,t="px")=>`${e}`.replace(t,"")-0;const to=()=>typeof(performance==null?void 0:performance.now)=="function"?performance.now():new Date().getTime(),no=e=>{if(typeof setImmediate=="function")return()=>setImmediate(e);if(typeof MessageChannel=="function"){const{port1:t,port2:r}=new MessageChannel;return t.onmessage=e,()=>r.postMessage(null)}return()=>setTimeout(e,0)},io=()=>{const e=[],t=k=>{e.push(k),d(k)},r=()=>e[0],o=()=>e.shift(),n=k=>k.startTime=to(),d=k=>{n(k),e.sort(($,N)=>$.startTime-N.startTime)};return{hub:e,push:t,peek:r,shift:o,update:d}};var ao=(e=5)=>{const{hub:t,push:r,peek:o,shift:n,update:d}=io(),k=no(()=>{N()&&k()}),$=V=>to()-V.startTime>e,N=()=>{let V=o();for(;V;){if($(V)){d(V);break}const{task:xe}=V;typeof xe=="function"?(V.task=null,xe()):n(),V=o()}return V};return(V=()=>{})=>{r({task:V}),t.length<2&&k()}},lo=()=>p()&&document.documentElement.scrollHeight-X()===pt().height,so=e=>{var t;p()&&(e=De(e)?e.current:e!=null?e:window,(t=e.scrollIntoView)==null||t.call(e,{behavior:"smooth",block:"center"}))},uo={get:e=>{let t=null;try{t=JSON.parse(sessionStorage.getItem(e))}catch(r){t=sessionStorage.getItem(e)}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),sessionStorage.setItem(e,t)},rm:e=>{sessionStorage.removeItem(e)},clear:()=>{sessionStorage.clear()}},co=e=>{const t=nr(e);p()&&document.head.appendChild(...t)},fo=(e,t=null,r=!1)=>[...e||[]].sort((o,n)=>{const d=t?o[t]:o,k=t?n[t]:n;return!isNaN(Number(d))&&!isNaN(Number(d))?r?k-d:d-k:typeof d=="string"&&typeof k=="string"?r?k.localeCompare(d):d.localeCompare(k):typeof d=="string"&&typeof k=="number"?r?-1:1:typeof d=="number"||typeof d=="string"?r?1:-1:r?-1:1}),ho=e=>{if(!F(e))return{};const t={};return Object.keys(e).sort().map(r=>{t[r]=e[r]}),t},po={get:e=>{let t=localStorage.getItem(e);try{t=JSON.parse(t)}catch(r){}return t},set:(e,t)=>{typeof t=="object"&&(t=JSON.stringify(t)),localStorage.setItem(e,t)},rm:e=>{localStorage.removeItem(e)},clear:()=>{localStorage.clear()}};const mo=ae();var xo=rt(mo),yo=(e,t=!1)=>(e=t?e:`return ${e};`,Function(e)()),go=()=>p()&&(window.navigator.language||window.navigator.userLanguage).toLowerCase().slice(0,2),bo=(e,...t)=>{const r=[];return e.map((o,n)=>{var d;r.push(o,(d=t[n])!=null?d:"")}),r.join("")},vo=(e=()=>{},t=60)=>{let r=null;return function(...o){r||(e.apply(this,o),r=setTimeout(()=>r=null,t))}};const wo=e=>[12,zt(e),24,60,60],ko=(e=[],t=[],r=[])=>{let o=!1;const n=[];return t.map((d,k)=>{const $=(o?d-1:d)-e[k];$<0?(n[k]=$+(r[k]||10),o=!0):(n[k]=$,o=!1)}),n.reverse()};var ro=(e,t=new Date)=>{new Date(e)-new Date(t)>0&&(e=[t,t=e][0]);const r=wo(t).reverse(),o=P(e).slice(0,-1).reverse(),n=P(t).slice(0,-1).reverse();return ko(o,n,r)};const Co=["\u5E74","\u6708","\u65E5","\u65F6","\u5206","\u79D2"];var Eo=(e,t=new Date)=>{const r=ro(e,t),o=r.findIndex(n=>n>0);return r.map((n,d)=>`${n||0}${Co[d]}`).slice(o).join("")},jo=(e,t)=>{a(e)&&(Fr(e,t)?W(e,t):x(e,t))},So=e=>(t,r="children")=>{if(!ge(t))return t;const o=n=>(n.map(d=>{ge(d[r])&&(d[r]=o(d[r]))}),e(n));return o(t)},zo=e=>e.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g,t=>({"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'})[t]||t),$o=(e,t="fuckId",r="children")=>f((o,n,d)=>{o[t]=[...n.map(k=>k["@@index"]),d].join("-")})(e,r),Fo=(e,t,r,o="children")=>K((n,d)=>{const k=n[d];return k[o]=[...k[o]||[],...r],!0})(e,t),To=(e={})=>{const t={};return Object.keys(e).map(r=>{e[r]!=null&&(t[r]=e[r])}),t},Oo=e=>p()?(fe.map(t=>document.addEventListener(t,e,!1)),()=>fe.map(t=>document.removeEventListener(t,e,!1))):void 0,Io=({container:e,width:t="220px",height:r="200px",textAlign:o="center",textBaseline:n="middle",font:d="20px microsoft yahei",fillStyle:k="rgba(202,202,202,0.4)",content:$="\u8BF7\u52FF\u5916\u4F20",rotate:N="-30",zIndex:V=1e3}={})=>{if(!p())return;e=De(e)?e.current:e!=null?e:document.body;const xe=e.firstChild;(xe==null?void 0:xe.className)==="watermark-canvas"&&e.removeChild(xe);const Se=document.createElement("canvas");Se.setAttribute("width",t),Se.setAttribute("height",r);const We=Se.getContext("2d");We.textAlign=o,We.textBaseline=n,We.font=d,We.fillStyle=k,We.rotate(Math.PI/180*N),We.fillText($,parseFloat(t)/2,parseFloat(r)/2);const gr=Se.toDataURL(),Kt=document.createElement("div");Kt.setAttribute("style",`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:${V};
    pointer-events:none;
    background-repeat:repeat;
    background-image:url('${gr}')`),e.style.position="relative",e.insertBefore(Kt,e.firstChild)},Po=(e=new Date)=>{const t=new Date(e).getDay();return[c(1-t),c(7-t)]},No=e=>{if(!_e(e))return{};let t="pending",r;const o=e.then(n=>{t="success",r=n}).catch(n=>{t="error",r=n});return{read:()=>{if(t==="pending")throw o;if(t==="error")throw r;if(t==="success")return r}}};return He}()})},3323:function(Tt,he){"use strict";function He(L,ie){var G=L.length;L.push(ie);e:for(;0<G;){var ve=G-1>>>1,Te=L[ve];if(0<ge(Te,ie))L[ve]=ie,L[G]=Te,G=ve;else break e}}function Le(L){return L.length===0?null:L[0]}function Fe(L){if(L.length===0)return null;var ie=L[0],G=L.pop();if(G!==ie){L[0]=G;e:for(var ve=0,Te=L.length,Qe=Te>>>1;ve<Qe;){var qe=2*(ve+1)-1,Je=L[qe],_e=qe+1,Ke=L[_e];if(0>ge(Je,G))_e<Te&&0>ge(Ke,Je)?(L[ve]=Ke,L[_e]=G,ve=_e):(L[ve]=Je,L[qe]=G,ve=qe);else if(_e<Te&&0>ge(Ke,G))L[ve]=Ke,L[_e]=G,ve=_e;else break e}}return ie}function ge(L,ie){var G=L.sortIndex-ie.sortIndex;return G!==0?G:L.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var K=performance;he.unstable_now=function(){return K.now()}}else{var te=Date,y=te.now();he.unstable_now=function(){return te.now()-y}}var a=[],x=[],c=1,w=null,g=3,S=!1,p=!1,z=!1,A=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,q=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(L){for(var ie=Le(x);ie!==null;){if(ie.callback===null)Fe(x);else if(ie.startTime<=L)Fe(x),ie.sortIndex=ie.expirationTime,He(a,ie);else break;ie=Le(x)}}function B(L){if(z=!1,F(L),!p)if(Le(a)!==null)p=!0,it(Z);else{var ie=Le(x);ie!==null&&dt(B,ie.startTime-L)}}function Z(L,ie){p=!1,z&&(z=!1,U(be),be=-1),S=!0;var G=g;try{for(F(ie),w=Le(a);w!==null&&(!(w.expirationTime>ie)||L&&!X());){var ve=w.callback;if(typeof ve=="function"){w.callback=null,g=w.priorityLevel;var Te=ve(w.expirationTime<=ie);ie=he.unstable_now(),typeof Te=="function"?w.callback=Te:w===Le(a)&&Fe(a),F(ie)}else Fe(a);w=Le(a)}if(w!==null)var Qe=!0;else{var qe=Le(x);qe!==null&&dt(B,qe.startTime-ie),Qe=!1}return Qe}finally{w=null,g=G,S=!1}}var ee=!1,pe=null,be=-1,Ge=5,nt=-1;function X(){return!(he.unstable_now()-nt<Ge)}function Ye(){if(pe!==null){var L=he.unstable_now();nt=L;var ie=!0;try{ie=pe(!0,L)}finally{ie?De():(ee=!1,pe=null)}}else ee=!1}var De;if(typeof q=="function")De=function(){q(Ye)};else if(typeof MessageChannel!="undefined"){var Ue=new MessageChannel,Mt=Ue.port2;Ue.port1.onmessage=Ye,De=function(){Mt.postMessage(null)}}else De=function(){A(Ye,0)};function it(L){pe=L,ee||(ee=!0,De())}function dt(L,ie){be=A(function(){L(he.unstable_now())},ie)}he.unstable_IdlePriority=5,he.unstable_ImmediatePriority=1,he.unstable_LowPriority=4,he.unstable_NormalPriority=3,he.unstable_Profiling=null,he.unstable_UserBlockingPriority=2,he.unstable_cancelCallback=function(L){L.callback=null},he.unstable_continueExecution=function(){p||S||(p=!0,it(Z))},he.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ge=0<L?Math.floor(1e3/L):5},he.unstable_getCurrentPriorityLevel=function(){return g},he.unstable_getFirstCallbackNode=function(){return Le(a)},he.unstable_next=function(L){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var G=g;g=ie;try{return L()}finally{g=G}},he.unstable_pauseExecution=function(){},he.unstable_requestPaint=function(){},he.unstable_runWithPriority=function(L,ie){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var G=g;g=L;try{return ie()}finally{g=G}},he.unstable_scheduleCallback=function(L,ie,G){var ve=he.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ve+G:ve):G=ve,L){case 1:var Te=-1;break;case 2:Te=250;break;case 5:Te=1073741823;break;case 4:Te=1e4;break;default:Te=5e3}return Te=G+Te,L={id:c++,callback:ie,priorityLevel:L,startTime:G,expirationTime:Te,sortIndex:-1},G>ve?(L.sortIndex=G,He(x,L),Le(a)===null&&L===Le(x)&&(z?(U(be),be=-1):z=!0,dt(B,G-ve))):(L.sortIndex=Te,He(a,L),p||S||(p=!0,it(Z))),L},he.unstable_shouldYield=X,he.unstable_wrapCallback=function(L){var ie=g;return function(){var G=g;g=ie;try{return L.apply(this,arguments)}finally{g=G}}}},1102:function(Tt,he,He){"use strict";Tt.exports=He(3323)}}]);
