(self.webpackChunk=self.webpackChunk||[]).push([[579],{6579:function(ft,ze,gt){(function(tt,Kr){ft.exports=Kr(gt(7378))})(this,function(tt){return function(){"use strict";var Kr={615:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-3d-models {
  0% {
    transform: rotateX(var(--rotateX)) rotateY(0deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(var(--rotateX)) rotateY(0deg) rotateZ(-360deg);
  }
}
.huxy-css-3d-models-tooltip {
  --rotate: 135deg;
}
.huxy-css-3d-models-tooltip[tooltip] {
  position: relative;
}
.huxy-css-3d-models-tooltip[tooltip]:hover::before,
.huxy-css-3d-models-tooltip[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-css-3d-models-tooltip[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-css-3d-models-tooltip[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-css-3d-models-tooltip[tooltip]::before,
.huxy-css-3d-models-tooltip[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: #303133;
  border: 1px solid #303133;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-css-3d-models-tooltip[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-css-3d-models-tooltip[tooltip]::after {
  content: "";
  height: calc(8px + 2px);
  width: calc(8px + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-css-3d-models-tooltip[tooltip]::before {
  left: 0;
  bottom: calc(100% + 8px);
}
.huxy-css-3d-models-tooltip[tooltip]::after {
  left: 15px;
  bottom: calc(100% + 8px / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-css-3d-models {
  --size: 360px;
  --cardSize: 42px;
  --bottom: 60px;
  --rotateX: 72deg;
  --time: 20s;
  position: absolute;
  left: 50%;
  bottom: var(--bottom);
  transform: translateX(-50%);
  width: var(--size);
  height: var(--size);
  transform-style: preserve-3d;
  perspective: 1000px;
  perspective-origin: 50% 0;
}
.huxy-css-3d-models .model-container {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: transparent;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  animation: huxy-3d-models var(--time) linear 0s infinite;
  animation-play-state: running;
}
.huxy-css-3d-models .model-container:hover {
  animation-play-state: paused;
}
.huxy-css-3d-models .model-container .model-item {
  --rotateY: 0deg;
  transform-style: preserve-3d;
  position: absolute;
  transform-origin: calc(var(--size) / 2) 0;
  width: calc(var(--size) / 2);
  height: var(--cardSize);
  line-height: var(--cardSize);
  left: 0;
  top: 50%;
  cursor: pointer;
  transform: rotateX(-90deg) rotateY(calc(var(--rotateY) + 90deg)) translateY(-50%);
}
.huxy-css-3d-models .model-container .model-item .model-card {
  position: absolute;
  width: calc(var(--cardSize) - 12px);
  height: var(--cardSize);
  line-height: var(--cardSize);
  text-align: center;
  border-radius: 4px;
  left: calc(6px - var(--cardSize) / 2);
  bottom: 0;
  transform-origin: 50% 50%;
  transform: rotateY(-90deg);
  background: rgba(255, 255, 255, 0.98);
  transition: all 0.3s;
  -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, 0.1));
}
.huxy-css-3d-models .model-container .model-item .model-card:hover {
  color: #fff;
  background-color: var(--blue2);
  transition: all 0.3s;
  -webkit-box-reflect: below 10px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
}
.huxy-css-3d-models .model-container .model-item .model-card img {
  width: 60%;
  height: 60%;
  vertical-align: middle;
}
`,""]),e.locals={},l.Z=e},729:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.g394U {
  width: 100%;
  height: 100%;
  position: relative;
  perspective: 1000;
}
.zasVJ {
  width: 100%;
  height: 100%;
  position: relative;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  transform-style: preserve-3d;
  transition: transform 0.3s;
}
.C5n3b, .UdsvP {
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
.UdsvP {
  transform: rotateY(180deg);
}
.g394U:hover .zasVJ {
  transform: rotateY(180deg);
}
`,""]),e.locals={"huxy-card-fliper":"g394U",card:"zasVJ",front:"C5n3b",back:"UdsvP"},l.Z=e},501:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.huxy-icon-animate-tooltip {
  --rotate: 135deg;
}
.huxy-icon-animate-tooltip[tooltip] {
  position: relative;
}
.huxy-icon-animate-tooltip[tooltip]:hover::before,
.huxy-icon-animate-tooltip[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-icon-animate-tooltip[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-icon-animate-tooltip[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-icon-animate-tooltip[tooltip]::before,
.huxy-icon-animate-tooltip[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: #303133;
  border: 1px solid #303133;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-icon-animate-tooltip[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-icon-animate-tooltip[tooltip]::after {
  content: "";
  height: calc(8px + 2px);
  width: calc(8px + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-icon-animate-tooltip[tooltip]::before {
  left: 0;
  bottom: calc(100% + 8px);
}
.huxy-icon-animate-tooltip[tooltip]::after {
  left: 15px;
  bottom: calc(100% + 8px / 2);
  transform: translateY(0) rotate(var(--rotate));
}
@keyframes huxy-css-obj-jump {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(0, var(--y), 0) scale(1.1);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
}
@keyframes huxy-css-obj-blink {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes huxy-css-obj-scale {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
.obj-centerTable {
  --width: 450px;
  --left: calc(50% - 224px);
  --bottom: 78px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-scale 6s ease-in-out infinite;
}
.obj-centerLight {
  --width: 150px;
  --left: calc(50% - 75px);
  --bottom: 220px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-blink 3s ease-in-out infinite;
}
.obj-brain {
  --y: 16px;
  --time: 6s;
  --width: 80px;
  --left: calc(50% - 40px);
  --bottom: 360px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.obj-dataAnalysis {
  --y: 15px;
  --time: 6s;
  --width: 76px;
  --left: calc(50% - 200px);
  --bottom: 300px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.obj-coder {
  --y: 25px;
  --time: 4s;
  --width: 66px;
  --left: calc(50% - 280px);
  --bottom: 208px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.obj-trend {
  --y: 24px;
  --time: 6s;
  --width: 72px;
  --left: calc(50% - 380px);
  --bottom: 160px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.obj-light {
  --y: 15px;
  --time: 6s;
  --width: 78px;
  --left: calc(50% + 120px);
  --bottom: 288px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.obj-debug {
  --y: 30px;
  --time: 5s;
  --width: 66px;
  --left: calc(50% + 220px);
  --bottom: 168px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.obj-chat {
  --y: 25px;
  --time: 6s;
  --width: 68px;
  --left: calc(50% + 300px);
  --bottom: 180px;
  width: var(--width);
  left: var(--left);
  bottom: var(--bottom);
  animation: huxy-css-obj-jump var(--time) ease-in-out infinite;
}
.huxy-icon-animate-container {
  height: var(--height, 480px);
  border-radius: 4px;
  position: relative;
}
.huxy-icon-animate-materiels {
  position: relative;
  height: 100%;
}
.huxy-icon-animate-materiels > a {
  position: absolute !important;
}
.huxy-icon-animate-materiels .obj-img {
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.02);
  border-radius: 50%;
  padding: 6px;
  z-index: 999;
}
.huxy-icon-animate-materiels img {
  width: 100%;
  max-width: var(--width);
  vertical-align: middle;
}
`,""]),e.locals={},l.Z=e},17:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.huxy-icon-carousel-tooltip-lb {
  --rotate: 135deg;
}
.huxy-icon-carousel-tooltip-lb[tooltip] {
  position: relative;
}
.huxy-icon-carousel-tooltip-lb[tooltip]:hover::before,
.huxy-icon-carousel-tooltip-lb[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-icon-carousel-tooltip-lb[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-icon-carousel-tooltip-lb[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-icon-carousel-tooltip-lb[tooltip]::before,
.huxy-icon-carousel-tooltip-lb[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: #303133;
  border: 1px solid #303133;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-icon-carousel-tooltip-lb[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-icon-carousel-tooltip-lb[tooltip]::after {
  content: "";
  height: calc(8px + 2px);
  width: calc(8px + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-icon-carousel-tooltip-lb[tooltip]::before {
  left: 0;
  bottom: calc(100% + 8px);
}
.huxy-icon-carousel-tooltip-lb[tooltip]::after {
  left: 15px;
  bottom: calc(100% + 8px / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-icon-carousel-tooltip-lt {
  --rotate: -45deg;
}
.huxy-icon-carousel-tooltip-lt[tooltip] {
  position: relative;
}
.huxy-icon-carousel-tooltip-lt[tooltip]:hover::before,
.huxy-icon-carousel-tooltip-lt[tooltip]:hover::after {
  opacity: 1;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-icon-carousel-tooltip-lt[tooltip]:hover::before {
  transform: translateY(0);
}
.huxy-icon-carousel-tooltip-lt[tooltip]:hover::after {
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-icon-carousel-tooltip-lt[tooltip]::before,
.huxy-icon-carousel-tooltip-lt[tooltip]::after {
  position: absolute;
  opacity: 0;
  pointer-events: none;
  z-index: 10000;
  background-color: #303133;
  border: 1px solid #303133;
  transition: opacity 0.2s, transform 0.2s;
}
.huxy-icon-carousel-tooltip-lt[tooltip]::before {
  content: attr(tooltip);
  z-index: 100002;
  padding: 4px 10px;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.4;
  color: #fff;
  border-radius: 4px;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  transform: translateY(100%);
}
.huxy-icon-carousel-tooltip-lt[tooltip]::after {
  content: "";
  height: calc(8px + 2px);
  width: calc(8px + 2px);
  border-left-color: transparent;
  border-bottom-color: transparent;
  transform: translateY(100%) rotate(var(--rotate));
}
.huxy-icon-carousel-tooltip-lt[tooltip]::before {
  left: 0;
  top: calc(100% + 8px);
}
.huxy-icon-carousel-tooltip-lt[tooltip]::after {
  left: 15px;
  top: calc(100% + 8px / 2);
  transform: translateY(0) rotate(var(--rotate));
}
.huxy-icon-carousel .icon-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow-x: hidden;
  overflow-y: visible;
}
.huxy-icon-carousel .icon-container .icon-item {
  position: absolute;
  left: 0;
  top: 0;
  width: 60px;
  border-radius: 50%;
  text-align: center;
  border: 2px solid rgba(0, 0, 0, 0.02);
  padding: 6px;
}
.huxy-icon-carousel .icon-container .icon-item img {
  width: 100%;
  vertical-align: middle;
}
`,""]),e.locals={},l.Z=e},925:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-border-animate-dash {
  100% {
    background-position: 6% 0, -6% 100%, 0 -6%, 100% 6%;
  }
}
@keyframes huxy-border-animate-solid {
  0%,
  100% {
    clip-path: inset(0% 0% 66% 66%);
  }
  8.33% {
    clip-path: inset(0% 0% 33% 99%);
  }
  16.66% {
    clip-path: inset(33% 0% 0% 99%);
  }
  25% {
    clip-path: inset(66% 0% 0% 66%);
  }
  33.33% {
    clip-path: inset(99% 0% 0% 33%);
  }
  41.66% {
    clip-path: inset(99% 33% 0% 0%);
  }
  50% {
    clip-path: inset(66% 66% 0% 0%);
  }
  58.33% {
    clip-path: inset(33% 99% 0% 0%);
  }
  66.66% {
    clip-path: inset(0% 99% 33% 0%);
  }
  75% {
    clip-path: inset(0% 66% 66% 0%);
  }
  83.33% {
    clip-path: inset(0% 33% 99% 0%);
  }
  91.66% {
    clip-path: inset(0% 0% 99% 33%);
  }
}
.tF3eM {
  --borderColor: #03a9f3;
  --space: 2px;
  padding: var(--space);
  height: 100%;
}
.BHIzz {
  position: relative;
  height: 100%;
  padding: var(--space);
  box-sizing: border-box;
  border: 1px solid transparent;
  background: linear-gradient(90deg, var(--borderColor) 50%, transparent 0) repeat-x, linear-gradient(90deg, var(--borderColor) 50%, transparent 0) repeat-x, linear-gradient(0deg, var(--borderColor) 50%, transparent 0) repeat-y, linear-gradient(0deg, var(--borderColor) 50%, transparent 0) repeat-y;
  background-size: 8px 2px, 8px 2px, 2px 8px, 2px 8px;
  background-position: 0 0, 0 100%, 0 0, 100% 0;
}
.BHIzz {
  animation: huxy-border-animate-dash 0.5s infinite linear;
}
.Ltln8 {
  position: relative;
  height: 100%;
}
.Ltln8::before, .Ltln8::after {
  content: "";
  position: absolute;
  --size: calc(0px - var(--space));
  top: var(--size);
  left: var(--size);
  right: var(--size);
  bottom: var(--size);
  border: 2px solid var(--borderColor);
  border-radius: var(--space);
}
.Ltln8::before, .Ltln8::after {
  animation: huxy-border-animate-solid 6s infinite linear;
}
.Ltln8::before {
  animation-delay: -3s;
}
`,""]),e.locals={"huxy-border-wrap":"tF3eM","huxy-border-animate-dash":"BHIzz","huxy-border-animate-solid":"Ltln8"},l.Z=e},579:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.UJpqU {
  --bgColor: var(--appBgColor);
  --cubeColor: hsla(0, 0%, 100%, 0.3);
  background-image: linear-gradient(var(--bgColor) 14px, transparent 0), linear-gradient(90deg, var(--cubeColor) 1px, transparent 0);
  background-size: 15px 15px, 15px 15px;
}
.VXk7W {
  --bgColor: rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(var(--bgColor) 1px, transparent 0), linear-gradient(90deg, var(--bgColor) 1px, transparent 0);
  background-size: 30px 30px;
}
.q_1dQ {
  --bgColor: hsl(0, 0%, 100%);
  --cubeColor: hsla(0, 0%, 100%, 0.3);
  background-image: linear-gradient(var(--bgColor) 1px, transparent 0), linear-gradient(90deg, var(--bgColor) 1px, transparent 0), linear-gradient(var(--cubeColor) 1px, transparent 0), linear-gradient(90deg, var(--cubeColor) 1px, transparent 0);
  background-size: 75px 75px, 75px 75px, 15px 15px, 15px 15px;
}
.eBK09 {
  --bgColor: rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(45deg, var(--bgColor) 25%, transparent 0, transparent 75%, var(--bgColor) 0), linear-gradient(45deg, var(--bgColor) 25%, transparent 0, transparent 75%, var(--bgColor) 0);
  background-position: 0 0, 15px 15px;
  background-size: 30px 30px;
}
.o9pvC {
  --bgColor: hsl(0, 0%, 100%);
  --cubeColor: hsla(0, 0%, 100%, 0.3);
  --size: 20% 20%;
  background-image: linear-gradient(var(--bgColor) 15px, transparent 0), linear-gradient(90deg, var(--bgColor) 15px, transparent 0);
  background-size: var(--size);
  background-color: var(--cubeColor);
  /* background-position: -8px -8px,-8px -8px; */
}
.Po9ZE {
  --bgColor: transparent;
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-color: var(--bgColor);
}
`,""]),e.locals={"bg-box-dot":"UJpqU","bg-box-strip":"VXk7W","bg-box-cubestrip":"q_1dQ","bg-box-cube":"eBK09","bg-box-grid":"o9pvC","bg-box-img":"Po9ZE"},l.Z=e},40:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.YeHmo {
  --borderColor: var(--appColor);
  --borderRadius: 2px;
}
.vpTzN {
  position: relative;
  border: 2px solid transparent;
}
.S3bPv:before, .S3bPv:after {
  content: "";
  display: block;
  position: absolute;
  width: calc(var(--cornerSize) + 2px);
  height: calc(var(--cornerSize) + 2px);
  background-color: transparent;
  z-index: 3;
}
.S3bPv:before {
  bottom: -1px;
  left: -1px;
  border-bottom: 2px solid var(--borderColor);
  border-left: 2px solid var(--borderColor);
  border-bottom-left-radius: var(--borderRadius);
}
.S3bPv:after {
  top: -1px;
  right: -1px;
  border-top: 2px solid var(--borderColor);
  border-right: 2px solid var(--borderColor);
  border-top-right-radius: var(--borderRadius);
}
.WYlJx, .SMovL {
  position: absolute;
  width: calc(var(--cornerSize) + 2px);
  height: calc(var(--cornerSize) + 2px);
  background-color: transparent;
  z-index: 3;
}
.WYlJx {
  top: -1px;
  left: -1px;
  border-top: 2px solid var(--borderColor);
  border-left: 2px solid var(--borderColor);
  border-top-left-radius: var(--borderRadius);
}
.SMovL {
  bottom: -1px;
  right: -1px;
  border-bottom: 2px solid var(--borderColor);
  border-right: 2px solid var(--borderColor);
  border-bottom-right-radius: var(--borderRadius);
}
`,""]),e.locals={"corner-wrap":"YeHmo",corner:"vpTzN",half:"S3bPv","corner-tl":"WYlJx","corner-br":"SMovL"},l.Z=e},538:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.Usszw {
  --borderColor: var(--appColor);
  --borderRadius: 2px;
}
.XcsJP {
  position: relative;
  border: 2px solid transparent;
}
.XcsJP:before, .XcsJP:after {
  content: "";
  display: block;
  position: absolute;
  width: calc(var(--cornerSize) + 2px);
  height: calc(var(--cornerSize) + 2px);
  background-color: transparent;
  z-index: 3;
}
.XcsJP:before {
  bottom: -1px;
  left: -1px;
  border-bottom: 2px solid var(--borderColor);
  border-left: 2px solid var(--borderColor);
  border-bottom-left-radius: var(--borderRadius);
}
.XcsJP:after {
  top: -1px;
  right: -1px;
  border-top: 2px solid var(--borderColor);
  border-right: 2px solid var(--borderColor);
  border-top-right-radius: var(--borderRadius);
}
`,""]),e.locals={"corner-wrap":"Usszw","corner-half":"XcsJP"},l.Z=e},914:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.WY0lD {
  --borderColor: rgba(0, 0, 0, 0.1);
  --borderSize: 2px;
  --space: 10px;
  --fontSize: 14px;
  font-size: var(--fontSize);
  position: relative;
  padding-top: 0.713em;
  height: 100%;
}
.WY0lD ._ORAK {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 3;
}
.WY0lD ._ORAK:before, .WY0lD ._ORAK:after {
  content: "";
  height: var(--borderSize);
  background: var(--borderColor);
  flex-grow: 1;
}
.WY0lD ._ORAK:before {
  margin-right: var(--space);
}
.WY0lD ._ORAK:after {
  margin-left: var(--space);
}
.WY0lD .Vggg7 {
  height: 100%;
  border-left: var(--borderSize) solid var(--borderColor);
  border-right: var(--borderSize) solid var(--borderColor);
  border-bottom: var(--borderSize) solid var(--borderColor);
}
`,""]),e.locals={"huxy-title-border-wrap":"WY0lD","huxy-title-border-top":"_ORAK","huxy-title-border-box":"Vggg7"},l.Z=e},511:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.MuUoF {
  --titleWidth: 280px;
  --titleHeight: 80px;
  --borderColor: rgba(0, 180, 220);
  height: var(--titleHeight);
  position: relative;
  z-index: 1;
}
.MuUoF:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-image: linear-gradient(to right, transparent, var(--borderColor) 50%, transparent);
  background-size: 100% 2px;
  background-position: 0 calc(var(--titleHeight) / 2);
  background-repeat: no-repeat;
}
.MuUoF .fM2FI {
  margin: 0;
  width: var(--titleWidth);
  position: absolute;
  bottom: calc(var(--titleHeight) / 4);
  left: calc(50% - var(--titleWidth) / 2);
  padding: 10px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7), 1px 1px 0.2em var(--borderColor);
}
.MuUoF .fM2FI:before, .MuUoF .fM2FI:after {
  content: "";
  position: absolute;
  height: 0;
  border-left: calc(var(--titleHeight) / 8) solid transparent;
  border-right: calc(var(--titleHeight) / 8) solid transparent;
  z-index: -1;
}
.MuUoF .fM2FI:before {
  width: 100%;
  left: 0;
  bottom: 0;
  border-top: calc(var(--titleHeight) / 4 - 1px) solid var(--borderColor);
}
.MuUoF .fM2FI:after {
  width: calc(100% - 2px);
  left: 1px;
  bottom: 1px;
  border-top: calc(var(--titleHeight) / 4 - 1px) solid var(--appBgColor);
}
`,""]),e.locals={"huxy-title-header-box":"MuUoF",title:"fM2FI"},l.Z=e},771:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.huDNN {
  --height: 240px;
  --borderColor: rgba(0, 0, 0, 0.04);
  --space: 25px;
  --itemWidth: 25px;
  border-left: 1px solid var(--borderColor);
  border-bottom: 1px solid var(--borderColor);
  height: var(--height);
  margin: 0 auto;
  position: relative;
}
.huDNN .V5Fq4 {
  --itemHeight: 60%;
  --bgColor: rgba(0, 0, 0, 0.1);
  position: absolute;
  left: 0;
  bottom: 0;
  display: block;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-left: var(--space);
  width: var(--itemWidth);
  height: var(--itemHeight);
  background: var(--bgColor);
  box-shadow: 0 0 4px 2px rgba(255, 255, 255, 0.08);
}
`,""]),e.locals={"huxy-skeleton-barchart":"huDNN","sk-bar-item":"V5Fq4"},l.Z=e},709:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.nnDaG {
  --bgColor: transparent;
  --height: 120px;
  --leftColor: rgba(0, 0, 0, 0.1);
  --rightColor: rgba(0, 0, 0, 0.2);
  --topWidth: 42%;
  --bottomWidth: 90%;
  position: relative;
  height: var(--height);
  background: var(--bgColor);
  overflow: hidden;
}
.nnDaG .iJtPz {
  position: absolute;
  left: 0;
  top: 0;
  width: var(--height);
  height: 100%;
}
.nnDaG .iJtPz .Bya6y {
  width: 60%;
  height: 60%;
  border-radius: 50%;
  background: var(--leftColor);
  margin: 20% auto;
}
.nnDaG .c6MGh {
  margin-left: var(--height);
  margin-top: calc(var(--height) * 0.2);
  height: calc(var(--height) * 0.6);
  padding: 0 10px;
  position: relative;
  overflow: hidden;
}
.nnDaG .c6MGh .sb1hm, .nnDaG .c6MGh .YDDrB {
  margin: 0;
  border-radius: 4px;
  background: var(--rightColor);
}
.nnDaG .c6MGh .sb1hm {
  font-size: 2.2rem;
  height: calc(var(--height) * 0.22);
  width: var(--topWidth);
  margin-top: calc(var(--height) * 0.05);
}
.nnDaG .c6MGh .YDDrB {
  font-size: 1.6rem;
  height: calc(var(--height) * 0.18);
  width: var(--bottomWidth);
  margin-top: calc(var(--height) * 0.1);
}
`,""]),e.locals={"huxy-skeleton-card":"nnDaG","sk-card-left":"iJtPz","sk-card-img":"Bya6y","sk-card-right":"c6MGh",title:"sb1hm",text:"YDDrB"},l.Z=e},9:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-animate-border-circle-shadow {
  0%,
  40%,
  60%,
  100% {
    box-shadow: 0px 0px 60px 25px var(--shadowOutColor), inset 0px 1px 4px 2px var(--shadowInColor);
  }
  50% {
    box-shadow: 0px 0px 50px 16px var(--shadowOutColor), inset 0px 1px 100px 2px var(--shadowInColor);
  }
}
@keyframes huxy-animate-border-circle {
  0% {
    transform: translate(-50%, -50%) rotateZ(var(--rotateStart));
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(var(--rotateEnd));
  }
}
.Krd0d {
  --size: 300px;
  --ballBorder: 10px;
  --ballBgColor: #cedce0;
  --ballBorderColor: rgba(2, 255, 255, 0.15);
  --shadowOutColor: rgba(150, 255, 255, 0.5);
  --shadowInColor: rgba(150, 255, 255, 0.3);
  position: relative;
  margin: 0 auto;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  box-shadow: 0px 0px 50px 15px var(--shadowInColor), inset 0px 0px 50px 15px var(--shadowInColor);
}
.Krd0d::after {
  content: "";
  position: absolute;
  width: calc(var(--size) / 2 - 20px);
  height: calc(var(--size) / 2 - 20px);
  border-radius: 50%;
  background: var(--ballBgColor);
  border: var(--ballBorder) solid var(--ballBorderColor);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.Krd0d::after {
  animation: huxy-animate-border-circle-shadow 1.6s infinite;
}
.qcJ0N {
  --itemSize: 80%;
  --borderWidth: 5px;
  --time: 4s;
  --rotateStart: 0deg;
  --rotateEnd: 360deg;
  box-sizing: border-box;
  border-radius: 50%;
  position: absolute;
  width: var(--itemSize);
  height: var(--itemSize);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotateZ(var(--rotateStart));
  border-left: var(--borderWidth) solid var(--borderLeftColor, transparent);
  border-right: var(--borderWidth) solid var(--borderRightColor, transparent);
  border-top: var(--borderWidth) solid var(--borderTopColor, transparent);
  border-bottom: var(--borderWidth) solid var(--borderBottomColor, transparent);
}
.qcJ0N {
  animation: huxy-animate-border-circle var(--time) linear infinite;
}
`,""]),e.locals={"huxy-animate-border-circle":"Krd0d","border-circle-item":"qcJ0N"},l.Z=e},988:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.myyKG {
  --bgColor: transparent;
  background: var(--bgColor);
  padding: 15px 20px;
}
.myyKG.AXWTP {
  --titleBgColor: rgba(0, 0, 0, 0.2);
  --width: 100px;
  --height: 20px;
  padding-top: calc(25px + var(--height));
}
.myyKG.AXWTP::after {
  content: "";
  position: absolute;
  top: 15px;
  left: 20px;
  width: var(--width);
  height: var(--height);
  border-radius: 2px;
  background: var(--titleBgColor);
}
`,""]),e.locals={"skeleton-container":"myyKG",title:"AXWTP"},l.Z=e},681:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-skeleton-dashboard {
  50% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(180deg);
  }
}
.DYspm {
  --size: 400px;
  --width: 20px;
  --space: 20px;
  --color0: #fff;
  --color1: transparent;
  --color2: #f1462c;
  --color3: #fc5d2c;
  --color4: #fba73e;
  --color5: #e0fa4e;
  --color6: #12dd7e;
  --color7: #0a6e3f;
  position: relative;
  margin: 0 auto;
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  background: conic-gradient(var(--color2) 0%, var(--color3) 12.4%, var(--color0) 12.4%, var(--color0) 12.5%, var(--color3) 12.5%, var(--color4) 24.9%, var(--color0) 24.9%, var(--color0) 25%, var(--color4) 25%, var(--color5) 37.4%, var(--color0) 37.4%, var(--color0) 37.5%, var(--color5) 37.5%, var(--color6) 49.9%, var(--color0) 49.9%, var(--color0) 50%, var(--color6) 50%, var(--color7) 62.4%, var(--color1) 62.4%, var(--color1) 62.5%);
  transform-origin: 50% 50%;
  transform: rotate(calc(-0.625 * 180deg));
}
.DYspm::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(var(--size) - var(--width) * 2);
  height: calc(var(--size) - var(--width) * 2);
  border-radius: 50%;
  background: conic-gradient(var(--color0) 0 62.4%, var(--color1) 0 100%);
}
.DYspm::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(var(--size) - var(--width) * 2 - var(--space) * 2);
  height: calc(var(--size) - var(--width) * 2 - var(--space) * 2);
  border-radius: 50%;
  background: radial-gradient(var(--color0) 0%, var(--color0) 25%, transparent 25%, transparent 100%), conic-gradient(var(--color2) 0 12.5%, var(--color4) 0 25%, var(--color5) 0 37.5%, var(--color6) 0 50%, var(--color7) 0 62.4%, var(--color1) 0 100%);
}
.DYspm .Rg6DD {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
  background: radial-gradient(#467dc6 0%, #a4c6f3 100%);
  border-radius: 50%;
  z-index: 999;
}
.DYspm .Rg6DD::before {
  content: "";
  position: absolute;
  width: 5px;
  height: calc(var(--size) - var(--width) * 2 - var(--space));
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(0);
  border-radius: 100% 100% 5% 5%;
  background: linear-gradient(180deg, #9bc7f6 0, #467dc6 50%, transparent 50%, transparent 100%);
}
.DYspm .Rg6DD::before {
  animation: huxy-skeleton-dashboard 4s cubic-bezier(0.93, 1.32, 0.89, 1.15) infinite;
}
`,""]),e.locals={"huxy-skeleton-dashboard":"DYspm",point:"Rg6DD"},l.Z=e},41:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.YWtCI {
  --bgColor: transparent;
  --rightWidth: 100px;
  --itemHeight: 20px;
  --space: 20px;
  --leftColor: linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15));
  --rightColor: rgba(0, 0, 0, 0.2);
  background: var(--bgColor);
  padding: 15px var(--space);
}
.YWtCI .uBGAf {
  position: relative;
  border-radius: 2px;
  height: var(--itemHeight);
  width: calc(100% - var(--rightWidth) - var(--space));
  background: var(--leftColor);
}
.YWtCI .uBGAf::after {
  content: "";
  position: absolute;
  top: 0;
  right: calc(0px - var(--space) - var(--rightWidth));
  border-radius: 2px;
  height: var(--itemHeight);
  width: var(--rightWidth);
  background: var(--rightColor);
}
.YWtCI .uBGAf + .uBGAf {
  margin-top: calc(var(--space) - 2px);
}
`,""]),e.locals={"huxy-skeleton-list":"YWtCI","sk-list-item":"uBGAf"},l.Z=e},180:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.IQu9g {
  --height: 200px;
  --color1: rgba(0, 0, 0, 0.2);
  --percent1: 30%;
  --color2: rgba(0, 0, 0, 0.3);
  --percent2: 45%;
  --color3: rgba(0, 0, 0, 0.1);
  --percent3: 64%;
  --color4: rgba(0, 0, 0, 0.4);
  --percent4: 100%;
  margin: 5px auto;
  width: var(--height);
  height: var(--height);
  background: conic-gradient(var(--color1) 0 var(--percent1), var(--color2) var(--percent1) var(--percent2), var(--color3) var(--percent2) var(--percent3), var(--color4) var(--percent3) var(--percent4));
  border-radius: 50%;
  box-shadow: 0 0 6px 6px rgba(255, 255, 255, 0.08);
}
`,""]),e.locals={"huxy-skeleton-piechart":"IQu9g"},l.Z=e},752:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-progress-wave {
  0% {
    width: 0;
    opacity: 0.1;
  }
  34% {
    width: 0;
    opacity: 0.5;
  }
  100% {
    width: calc(100% * var(--percent) / 100);
    opacity: 0;
  }
}
.zFNbz {
  --waveColor: rgba(255, 255, 255, 0.1);
  --waveTime: 3s;
  --percent: 60;
  --height: 20px;
  --borderRadius: 4px;
  --bgColor: rgba(0, 0, 0, 0.15);
  --progressColor: rgba(0, 0, 0, 0.2);
  position: relative;
  border-radius: var(--borderRadius);
  height: var(--height);
  background: var(--bgColor);
  overflow: hidden;
  color: #fff;
}
.zFNbz::before, .zFNbz::after {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: calc(100% * var(--percent) / 100);
  max-width: 100%;
  border-radius: var(--borderRadius);
  background: var(--progressColor);
  transition: width 1.5s ease-in;
}
.zFNbz::before {
  counter-reset: percent var(--percent);
  content: counter(percent) "%";
  text-align: right;
}
.zFNbz::after {
  background: var(--waveColor);
  opacity: 0;
}
.zFNbz::after {
  animation: huxy-progress-wave var(--waveTime) ease-out infinite;
}
`,""]),e.locals={"huxy-progress-wave":"zFNbz"},l.Z=e},243:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-animate-border-ring {
  50% {
    opacity: 0.5;
  }
}
.WbFYr {
  --size: 300px;
  --bgColor: rgba(255, 255, 255, 0.9);
  --shadowColor: rgba(255, 255, 255, 0.6);
  --itemWidth: 30px;
  --itemHeight: 4px;
  position: relative;
  width: var(--size);
  height: var(--size);
  margin: 0 auto;
  border-radius: 50%;
}
.WbFYr::after {
  position: absolute;
  border-radius: 50%;
  width: calc(var(--size) / 2);
  height: calc(var(--size) / 2);
  left: calc(var(--size) / 4);
  top: calc(var(--size) / 4);
  background: var(--bgColor);
  box-shadow: 0px 0px 4px 10px var(--shadowColor);
}
.WbFYr .XIIyj {
  --color: rgba(0, 0, 0, 0.1);
  position: absolute;
  width: var(--itemWidth);
  height: var(--itemHeight);
  background: var(--color);
  top: calc(var(--size) / 2);
  left: 0;
  transform-origin: calc(var(--size) / 2) calc(var(--itemHeight) / 2);
}
.WbFYr .XIIyj {
  animation: huxy-animate-border-ring 2s infinite;
}
`,""]),e.locals={"huxy-animate-border-ring":"WbFYr","border-ring-item":"XIIyj"},l.Z=e},77:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.suwUY {
  --bgColor: transparent;
  --borderColor: rgba(0, 0, 0, 0.03);
  --thBgColor: rgba(0, 0, 0, 0.06);
  --thItemColor: rgba(0, 0, 0, 0.4);
  --tdItemColor: rgba(0, 0, 0, 0.2);
  --hoverColor: rgba(0, 0, 0, 0.02);
  --oddColor: rgba(0, 0, 0, 0.04);
  border-radius: 2px;
  border: 1px solid var(--borderColor);
  background: var(--bgColor);
}
.suwUY table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}
.suwUY table th {
  padding: 15px 4%;
  background: var(--thBgColor);
}
.suwUY table th span {
  display: block;
  height: 18px;
  border-radius: 2px;
  background: var(--thItemColor);
}
.suwUY table td {
  padding: 12px 3%;
}
.suwUY table td span {
  display: block;
  height: 16px;
  border-radius: 2px;
  background: var(--tdItemColor);
}
.suwUY table tr {
  transition: background 0.3s;
}
.suwUY table tr:hover {
  background: var(--hoverColor);
}
.suwUY table tr:nth-of-type(odd) {
  background: var(--oddColor);
}
`,""]),e.locals={"huxy-skeleton-table":"suwUY"},l.Z=e},832:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-loading-wave {
  0% {
    width: 0;
    opacity: 0.1;
  }
  34% {
    width: 0;
    opacity: 0.5;
  }
  100% {
    width: 100%;
    opacity: 0;
  }
}
.d9M97 {
  --waveColor: rgba(0, 0, 0, 0.06);
  --waveTime: 2s;
  position: relative;
}
.d9M97::after {
  content: "";
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: var(--waveColor);
  border-radius: 2px;
  opacity: 0;
}
.d9M97::after {
  animation: huxy-loading-wave var(--waveTime) ease-out infinite;
}
`,""]),e.locals={"huxy-loading-wave":"d9M97"},l.Z=e},784:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-conic-light-animate {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
  }
}
._ov1n {
  --rotate: 4;
  --width: 200px;
  --height: 180px;
  --bgColor: linear-gradient(to top, rgba(168, 239, 255, 0.2), rgba(168, 239, 255, 0));
  --topColor: rgba(168, 239, 255, 0.01);
  --bottomColor: rgba(168, 239, 255, 0.1);
  --space: 12%;
  --time: 6s;
  --bottomWidth: calc(var(--width) - var(--space) * 2);
  position: relative;
  margin: 0 auto;
  height: var(--height);
  width: var(--width);
  border-radius: var(--width) / calc(var(--width) / var(--rotate));
  background: var(--bgColor);
  clip-path: polygon(0 0, 100% 0, calc(100% - var(--space)) 100%, var(--space) 100%);
  opacity: 0;
}
._ov1n {
  animation: huxy-conic-light-animate var(--time) linear infinite;
}
._ov1n:before {
  --height: calc(var(--width) / var(--rotate));
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: var(--width);
  height: var(--height);
  border-radius: 50%;
  background: var(--topColor);
}
._ov1n:after {
  --height: calc(var(--bottomWidth) / var(--rotate));
  content: "";
  position: absolute;
  left: var(--space);
  bottom: 0;
  width: var(--bottomWidth);
  height: var(--height);
  background: var(--bottomColor);
  border-radius: 50%;
}
`,""]),e.locals={conic:"_ov1n"},l.Z=e},44:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-loading-ball {
  0%,
  40%,
  100% {
    transform: scale(0.2);
  }
  20% {
    transform: scale(1);
  }
}
.TikRE {
  --time: 1.6s;
  --size: 40px;
  --shadowSize: 50px;
  display: flex;
}
.TikRE .CyLSO {
  --delay: 0s;
  --bgColor: rgba(255, 255, 255, 0.8);
  background: var(--bgColor);
  box-shadow: 0 0 var(--shadowSize) var(--bgColor);
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
}
.TikRE .CyLSO {
  animation: huxy-loading-ball var(--time) ease-in-out var(--delay) infinite;
}
`,""]),e.locals={"huxy-loading-ball":"TikRE",ball:"CyLSO"},l.Z=e},875:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-location {
  50% {
    top: calc(50% - var(--size) * 0.25);
  }
}
@keyframes huxy-location-back {
  50% {
    transform: translateX(-50%) scale(0.5);
  }
}
.DdhmP {
  --size: 24px;
  --color: #ffffff;
  --bgColor: rgba(255, 255, 255, 0.2);
  --time: 2s;
  position: relative;
  display: inline-block;
  width: var(--size);
  height: var(--size);
}
.DdhmP:before, .DdhmP:after {
  position: absolute;
  content: "";
}
.DdhmP:before {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-46deg);
  width: calc(var(--size) * 0.75);
  height: calc(var(--size) * 0.75);
  border-radius: 100% 100% 100% 0;
  box-shadow: 0px 0px 0px 2px var(--color);
}
.DdhmP:before {
  animation: huxy-location var(--time) linear infinite;
}
.DdhmP:after {
  left: 50%;
  transform: translateX(-50%) scale(1);
  bottom: -50%;
  width: calc(var(--size) * 1.25);
  height: calc(var(--size) * 0.5);
  border-radius: 100%;
  background: var(--bgColor);
}
.DdhmP:after {
  animation: huxy-location-back var(--time) linear infinite;
}
`,""]),e.locals={"huxy-location":"DdhmP"},l.Z=e},950:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-search {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.3);
  }
}
.r6hPc {
  --size: 24px;
  --color: #ffffff;
  --time: 1s;
  --bar-width: 2px;
  --bar-height: 8px;
  width: var(--size);
  height: var(--size);
  position: relative;
  display: inline-block;
  border-radius: 50%;
  box-shadow: 0px 0px 0px 1px var(--color);
}
.r6hPc {
  animation: huxy-search var(--time) linear infinite alternate;
}
.r6hPc:before {
  position: absolute;
  content: "me";
  font-size: 12px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
.r6hPc:after {
  position: absolute;
  content: "";
  width: var(--bar-width);
  height: var(--bar-height);
  background: var(--color);
  bottom: calc(var(--bar-width) - var(--bar-height));
  left: calc(var(--size) - var(--bar-width) * 2);
  border-radius: var(--bar-width);
  transform: rotate(-45deg);
}
`,""]),e.locals={"huxy-search":"r6hPc"},l.Z=e},658:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-spot {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
@keyframes huxy-scale {
  0% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0px 0px calc(var(--size) / 8) 0px var(--shadowColor);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.8);
    box-shadow: 0px 0px calc(var(--size) / 8) calc(var(--size) * 5 / 8) var(--shadowColor);
  }
  100% {
    opacity: 1;
    transform: scale(1);
    box-shadow: 0px 0px calc(var(--size) / 8) 0px var(--shadowColor);
  }
}
.JsH0T {
  --size: 6px;
  --color: var(--blue1);
  display: inline-block;
  width: var(--size);
  height: var(--size);
  color: var(--color);
  background: currentColor;
  border-radius: 50%;
  position: relative;
}
.JsH0T:before, .JsH0T:after {
  content: "";
  position: absolute;
  background: currentColor;
  border-radius: 50%;
}
.JsH0T:before, .JsH0T:after {
  animation: huxy-spot 1.5s ease-in-out infinite;
}
.JsH0T:before {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}
.JsH0T:after {
  width: 150%;
  height: 150%;
  left: -25%;
  top: -25%;
}
.S4gb8 {
  --size: 8px;
  --color: var(--orange1);
  --shadowColor: var(--orange1);
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 500;
  color: #fff;
  width: var(--size);
  height: var(--size);
  line-height: var(--size);
  text-align: center;
  border-radius: 50%;
  background-color: var(--color);
}
.S4gb8 {
  animation: huxy-scale 1.5s ease-in-out infinite;
}
`,""]),e.locals={"huxy-spot":"JsH0T","huxy-scale":"S4gb8"},l.Z=e},206:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.x6fRL {
  --black: #000;
  --white: #fff;
  --width: 128px;
  --border: 2px;
  box-sizing: content-box;
  position: relative;
  width: var(--width);
  height: calc(var(--width) / 2);
  background: var(--white);
  border-color: var(--black);
  border-style: solid;
  border-width: var(--border) var(--border) calc(var(--width) / 2 + var(--border)) var(--border);
  border-radius: 100%;
  transform: rotate(90deg);
}
.x6fRL::before, .x6fRL::after {
  content: "";
  position: absolute;
  box-sizing: content-box;
  width: calc(var(--width) / 8);
  height: calc(var(--width) / 8);
  border-radius: 100%;
  top: 50%;
}
.x6fRL::before {
  left: 0;
  background: var(--black);
  border: calc(var(--width) * 3 / 16) solid var(--white);
}
.x6fRL::after {
  left: 50%;
  background: var(--white);
  border: calc(var(--width) * 3 / 16) solid var(--black);
}
`,""]),e.locals={"huxy-taiji":"x6fRL"},l.Z=e},289:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-timer {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.R1ObR {
  --size: 24px;
  --color: #ffffff;
  --handWidth: 2px;
  --maxHeight: calc(var(--size) / 2 - var(--handWidth));
  --minHeight: calc(var(--size) / 2 - var(--handWidth) * 2);
  --maxTime: 2s;
  --minTime: 8s;
  width: var(--size);
  height: var(--size);
  position: relative;
  display: inline-block;
  border-radius: 50%;
  box-shadow: inset 0px 0px 0px 2px #fff;
}
.R1ObR:after, .R1ObR:before {
  position: absolute;
  content: "";
  background: var(--color);
  height: var(--handWidth);
  transform-origin: 1px 1px;
  top: calc(var(--size) / 2 - var(--handWidth) / 2);
  left: calc(var(--size) / 2 - var(--handWidth) / 2);
}
.R1ObR:after {
  width: var(--maxHeight);
}
.R1ObR:after {
  animation: huxy-timer var(--maxTime) linear infinite;
}
.R1ObR:before {
  width: var(--minHeight);
}
.R1ObR:before {
  animation: huxy-timer var(--minTime) linear infinite;
}
`,""]),e.locals={"huxy-timer":"R1ObR"},l.Z=e},783:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`.q9v4I {
  --backColor: rgba(0, 0, 0, 0.2);
  --frontColor: #ffffff;
  --score: 0;
  position: relative;
  font-size: 2.4rem;
  color: var(--backColor);
  display: inline-block;
}
.q9v4I::before {
  content: attr(data-text);
  position: absolute;
  overflow: hidden;
  width: var(--score);
  max-width: 100%;
  white-space: nowrap;
  color: var(--frontColor);
}
`,""]),e.locals={"huxy-rate-score":"q9v4I"},l.Z=e},859:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-text-3d {
  0% {
    transform: rotateX(0deg) rotateY(90deg) rotateZ(90deg);
  }
  50% {
    transform: rotateX(0deg) rotateY(90deg) rotateZ(180deg);
  }
  51% {
    transform: rotateX(0deg) rotateY(90deg) rotateZ(360deg);
  }
  100% {
    transform: rotateX(0deg) rotateY(90deg) rotateZ(450deg);
  }
}
@keyframes huxy-text-3d-animate {
  0% {
    opacity: 1;
    transform: rotateX(90deg) rotateY(180deg) translateX(50%) scale(var(--size));
  }
  50% {
    opacity: 0.5;
    transform: rotateX(180deg) rotateY(180deg) translateX(50%) scale(0.2);
  }
  51% {
    opacity: 0.5;
    transform: rotateX(360deg) rotateY(180deg) translateX(50%) scale(0.2);
  }
  100% {
    opacity: 1;
    transform: rotateX(450deg) rotateY(180deg) translateX(50%) scale(var(--size));
  }
}
.huxy-text-3d {
  --bgColor: rgba(0, 0, 0, 0.8);
  --width: 500px;
  --padding: 50px;
  width: 100%;
  height: var(--width);
  background-color: var(--bgColor);
}
.huxy-text-3d .text-3d-container {
  margin: 0 auto;
  position: relative;
  width: var(--width);
  height: var(--width);
  transform-style: preserve-3d;
  perspective: 1000px;
  perspective-origin: 50% 50%;
  overflow: hidden;
  box-sizing: border-box;
}
.huxy-text-3d .text-3d-container .text-3d-item {
  --time: 10s;
  --center: 0px;
  --rotate: 0deg;
  --size: 1;
  --color: #fff;
  --delay: 0s;
  --current: 90deg;
  position: absolute;
  width: calc(var(--width) - var(--padding) * 2);
  height: calc(var(--width) - var(--padding) * 2);
  left: var(--padding);
  top: var(--padding);
  background-color: transparent;
  transform-style: preserve-3d;
  backface-visibility: hidden;
  transform: rotateX(0deg) rotateY(90deg) rotateZ(var(--current));
  animation: huxy-text-3d var(--time) linear var(--delay) infinite;
}
.huxy-text-3d .text-3d-container .text-3d-item .text-3d-item-card {
  transform-style: preserve-3d;
  transform-origin: 50% 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  cursor: pointer;
  transform: rotateX(0deg) rotateY(90deg) rotateZ(var(--rotate));
}
.huxy-text-3d .text-3d-container .text-3d-item .text-3d-item-card .animate-text {
  position: absolute;
  text-align: center;
  left: calc(50% - var(--center));
  bottom: 0;
  transform-origin: 50% 50%;
  transform: rotateX(var(--current)) rotateY(180deg) translateX(50%) scale(1);
  animation: huxy-text-3d-animate var(--time) linear var(--delay) infinite;
  display: block;
  font-size: 1.4rem;
  color: var(--color);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7), 1px 1px 0.1em currentColor;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 100px;
}
`,""]),e.locals={},l.Z=e},589:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-text-filter {
  0% {
    letter-spacing: -2.2rem;
    filter: blur(0.3rem);
  }
  50% {
    filter: blur(0.5rem);
  }
  90%,
  100% {
    letter-spacing: 0.5rem;
    filter: blur(0rem);
  }
}
._zrvj {
  --time: 3s;
  height: 32px;
  color: #ffffff;
  position: relative;
  filter: contrast(20);
  overflow: hidden;
}
.ww0tY {
  text-transform: uppercase;
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  letter-spacing: -2.2rem;
}
.ww0tY {
  animation: huxy-text-filter var(--time) infinite alternate ease-in-out;
}
`,""]),e.locals={"huxy-text-filter":"_zrvj","text-filter":"ww0tY"},l.Z=e},850:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-text-loading {
  0% {
    max-width: 0;
  }
}
.ZYC7Y {
  --backColor: rgba(0, 0, 0, 0.2);
  --frontColor: #ffffff;
  --time: 4s;
  position: relative;
  color: var(--backColor);
  display: inline-block;
}
.ZYC7Y::before {
  content: attr(data-text);
  position: absolute;
  overflow: hidden;
  max-width: 100%;
  white-space: nowrap;
  color: var(--frontColor);
}
.ZYC7Y::before {
  animation: huxy-text-loading var(--time) linear infinite;
}
`,""]),e.locals={"huxy-text-loading":"ZYC7Y"},l.Z=e},814:function(t,l,r){var s=r(703),a=r.n(s),n=r(414),o=r.n(n),e=o()(a());e.push([t.id,`@keyframes huxy-text-masked {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -100% 0;
  }
}
.zg3Sy {
  --startColor: #0ee5ff;
  --endColor: #f4ab20;
  --time: 6s;
  background-image: linear-gradient(to right, var(--startColor), var(--endColor) 50%, var(--startColor) 50%, var(--endColor) 100%, var(--startColor));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
}
.zg3Sy {
  animation: huxy-text-masked var(--time) infinite linear;
}
`,""]),e.locals={"huxy-text-masked":"zg3Sy"},l.Z=e},414:function(t){t.exports=function(l){var r=[];return r.toString=function(){return this.map(function(s){var a="",n=typeof s[5]!="undefined";return s[4]&&(a+="@supports (".concat(s[4],") {")),s[2]&&(a+="@media ".concat(s[2]," {")),n&&(a+="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {")),a+=l(s),n&&(a+="}"),s[2]&&(a+="}"),s[4]&&(a+="}"),a}).join("")},r.i=function(s,a,n,o,e){typeof s=="string"&&(s=[[null,s,void 0]]);var g={};if(n)for(var w=0;w<this.length;w++){var f=this[w][0];f!=null&&(g[f]=!0)}for(var z=0;z<s.length;z++){var u=[].concat(s[z]);n&&g[u[0]]||(typeof e!="undefined"&&(typeof u[5]=="undefined"||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=e),a&&(u[2]&&(u[1]="@media ".concat(u[2]," {").concat(u[1],"}")),u[2]=a),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),r.push(u))}},r}},703:function(t){t.exports=function(l){return l[1]}},53:function(t,l,r){var s=r(899),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,e=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,g={key:!0,ref:!0,__self:!0,__source:!0};function w(f,z,u){var j,y={},T=null,Y=null;u!==void 0&&(T=""+u),z.key!==void 0&&(T=""+z.key),z.ref!==void 0&&(Y=z.ref);for(j in z)o.call(z,j)&&!g.hasOwnProperty(j)&&(y[j]=z[j]);if(f&&f.defaultProps)for(j in z=f.defaultProps,z)y[j]===void 0&&(y[j]=z[j]);return{$$typeof:a,type:f,key:T,ref:Y,props:y,_owner:e.current}}l.Fragment=n,l.jsx=w,l.jsxs=w},458:function(t,l,r){t.exports=r(53)},748:function(t){var l=[];function r(n){for(var o=-1,e=0;e<l.length;e++)if(l[e].identifier===n){o=e;break}return o}function s(n,o){for(var e={},g=[],w=0;w<n.length;w++){var f=n[w],z=o.base?f[0]+o.base:f[0],u=e[z]||0,j="".concat(z," ").concat(u);e[z]=u+1;var y=r(j),T={css:f[1],media:f[2],sourceMap:f[3],supports:f[4],layer:f[5]};if(y!==-1)l[y].references++,l[y].updater(T);else{var Y=a(T,o);o.byIndex=w,l.splice(w,0,{identifier:j,updater:Y,references:1})}g.push(j)}return g}function a(n,o){var e=o.domAPI(o);e.update(n);var g=function(w){if(w){if(w.css===n.css&&w.media===n.media&&w.sourceMap===n.sourceMap&&w.supports===n.supports&&w.layer===n.layer)return;e.update(n=w)}else e.remove()};return g}t.exports=function(n,o){o=o||{},n=n||[];var e=s(n,o);return function(g){g=g||[];for(var w=0;w<e.length;w++){var f=e[w],z=r(f);l[z].references--}for(var u=s(g,o),j=0;j<e.length;j++){var y=e[j],T=r(y);l[T].references===0&&(l[T].updater(),l.splice(T,1))}e=u}}},736:function(t){var l={};function r(a){if(typeof l[a]=="undefined"){var n=document.querySelector(a);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(o){n=null}l[a]=n}return l[a]}function s(a,n){var o=r(a);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}t.exports=s},706:function(t){function l(r){var s=document.createElement("style");return r.setAttributes(s,r.attributes),r.insert(s,r.options),s}t.exports=l},567:function(t,l,r){function s(a){var n=r.nc;n&&a.setAttribute("nonce",n)}t.exports=s},306:function(t){function l(a,n,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var g=typeof o.layer!="undefined";g&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,g&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var w=o.sourceMap;w&&typeof btoa!="undefined"&&(e+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(w))))," */")),n.styleTagTransform(e,a,n.options)}function r(a){if(a.parentNode===null)return!1;a.parentNode.removeChild(a)}function s(a){var n=a.insertStyleElement(a);return{update:function(o){l(n,a,o)},remove:function(){r(n)}}}t.exports=s},62:function(t){function l(r,s){if(s.styleSheet)s.styleSheet.cssText=r;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(r))}}t.exports=l},899:function(t){t.exports=tt}},et={};function m(t){var l=et[t];if(l!==void 0)return l.exports;var r=et[t]={id:t,exports:{}};return Kr[t](r,r.exports,m),r.exports}(function(){m.n=function(t){var l=t&&t.__esModule?function(){return t.default}:function(){return t};return m.d(l,{a:l}),l}})(),function(){m.d=function(t,l){for(var r in l)m.o(l,r)&&!m.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:l[r]})}}(),function(){m.o=function(t,l){return Object.prototype.hasOwnProperty.call(t,l)}}(),function(){m.r=function(t){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){m.nc=void 0}();var qr={};return function(){m.r(qr),m.d(qr,{AnimateBorder:function(){return It},Barchart:function(){return Pt},BgBox:function(){return At},Card:function(){return Rt},Circle:function(){return _t},Container:function(){return Ot},CornerBorder:function(){return Tt},Css3dModel:function(){return ot},Dashboard:function(){return Mt},Fliper:function(){return wt},HalfBorder:function(){return Nt},IconAnimate:function(){return yt},IconCarousel:function(){return jt},Light:function(){return ce},List:function(){return Ht},Loading:function(){return ae},Location:function(){return oe},Piechart:function(){return Ft},Progress:function(){return Lt},RateScore:function(){return Ce},Ring:function(){return Ut},Search:function(){return te},Spot:function(){return le},Table:function(){return Gt},Taiji:function(){return se},Text3d:function(){return xe},TextFilter:function(){return me},TextLoading:function(){return fe},TextMasked:function(){return ye},Time:function(){return Qt},TitleBorder:function(){return Yt},TitleHeader:function(){return $t},Wave:function(){return qt}});var t=m(458),l=i=>(i==null?void 0:i.$$typeof)&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",r=(i,d="px")=>`${i}`.replace(d,"")-0,s=m(748),a=m.n(s),n=m(306),o=m.n(n),e=m(736),g=m.n(e),w=m(567),f=m.n(w),z=m(706),u=m.n(z),j=m(62),y=m.n(j),T=m(615),Y={};Y.styleTagTransform=y(),Y.setAttributes=f(),Y.insert=g().bind(null,"head"),Y.domAPI=o(),Y.insertStyleElement=u();var Ze=a()(T.Z,Y),je=T.Z&&T.Z.locals?T.Z.locals:void 0,ot=({list:i=[],size:d="360px",cardSize:p="42px",bottom:c="60px",style:h,...b})=>{const x=360/i.length;return(0,t.jsx)("div",{className:"huxy-css-3d-models",style:{"--size":d,"--cardSize":p,"--bottom":c,...h},...b,children:(0,t.jsx)("div",{className:"model-container",children:i.map((v,C)=>(0,t.jsx)("div",{className:"model-item",style:{"--rotateY":`${x*C}deg`},children:(0,t.jsxs)("a",{className:"model-card huxy-css-3d-models-tooltip",tooltip:v.label,href:v.link,target:"_blank",children:[v.icon?(0,t.jsx)("img",{src:v.icon,alt:v.label}):null,l(v.icon)?v.icon:v.icon?(0,t.jsx)("img",{src:v.icon,alt:v.label}):null]})},v.label))})})},mr=m(501),P={};P.styleTagTransform=y(),P.setAttributes=f(),P.insert=g().bind(null,"head"),P.domAPI=o(),P.insertStyleElement=u();var $e=a()(mr.Z,P),Te=mr.Z&&mr.Z.locals?mr.Z.locals:void 0,yt=({objs:i=[],models:d=[],height:p="480px",style:c,className:h,...b})=>(0,t.jsxs)("div",{className:`huxy-icon-animate-container${h?` ${h}`:""}`,style:{"--height":p,...c},...b,children:[(0,t.jsx)("div",{className:"huxy-icon-animate-materiels",children:i.map(({value:x,label:v,icon:C,link:k,type:$,style:N})=>(0,t.jsx)("a",{className:`huxy-icon-animate-tooltip obj-${x}${$?"":" obj-img"}`,tooltip:$?void 0:v,href:k,target:"_blank",style:N,children:l(C)?C:(0,t.jsx)("img",{src:C,alt:v})},v))}),(0,t.jsx)(ot,{list:d,size:`${r(p)-120}px`})]}),vr=m(729),R={};R.styleTagTransform=y(),R.setAttributes=f(),R.insert=g().bind(null,"head"),R.domAPI=o(),R.insertStyleElement=u();var Ne=a()(vr.Z,R),fr=vr.Z&&vr.Z.locals?vr.Z.locals:void 0,wt=({front:i,back:d,...p})=>(0,t.jsx)("div",{className:fr["huxy-card-fliper"],...p,children:(0,t.jsxs)("div",{className:fr.card,children:[(0,t.jsx)("div",{className:fr.front,children:i}),(0,t.jsx)("div",{className:fr.back,children:d})]})}),W=m(899),Ct=(i={})=>{const d=(0,W.useRef)(0),[p,c]=(0,W.useState)(i),h=(0,W.useCallback)(b=>{cancelAnimationFrame(d.current),d.current=requestAnimationFrame(()=>c(b))},[]);return(0,W.useEffect)(()=>()=>cancelAnimationFrame(d.current),[]),[p,h]},kt=(i,d)=>{const p=(0,W.useRef)();(0,W.useEffect)(()=>{p.current=i},[i]),(0,W.useEffect)(()=>{if(d){const c=setInterval(()=>p.current(),d);return()=>clearInterval(c)}},[d])},gr=m(17),E={};E.styleTagTransform=y(),E.setAttributes=f(),E.insert=g().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=u();var Se=a()(gr.Z,E),Ae=gr.Z&&gr.Z.locals?gr.Z.locals:void 0;const zt=(i,d=60)=>(d=1.5*d,i.map((p,c)=>{const h=Math.random();let b=1;h<.3334?b=1.2:h<.6667&&(b=.8);const x=~~(c/3),v=c%3;let C=1.5*d*x;v===1&&(C+=d/2);const k=v*d+d/6*(v+1);return p.transform={x:C,y:k,s:b},p})),Zt=(i,d=60)=>(d=2.25*d,i.map(p=>(p.transform.x-=2,p.transform.x+d<0&&(p.transform.x=~~(i.length/3)*d),p)));var jt=({width:i=60,wait:d=56,list:p=[],className:c,...h})=>{const b=(0,W.useMemo)(()=>zt(p,i),[]),[x,v]=Ct(b),[C,k]=(0,W.useState)(d);kt(()=>{const Z=Zt(x,i);v(Z)},C);const $=Z=>{k(null)},N=Z=>{k(d)};return(0,t.jsx)("div",{className:`huxy-icon-carousel${c?` ${c}`:""}`,...h,children:(0,t.jsx)("div",{className:"icon-container",children:x.map((Z,I)=>(0,t.jsx)("a",{className:`icon-item huxy-icon-carousel-tooltip-${I%3===0?"lt":"lb"}`,tooltip:Z.label,style:{transform:`translate(${Z.transform.x}px, ${Z.transform.y}px) scale(${Z.transform.s})`,width:i},onMouseEnter:$,onMouseLeave:N,href:Z.link,target:"_blank",children:(0,t.jsx)("img",{src:Z.icon,alt:Z.label})},Z.label))})})},yr=m(511),_={};_.styleTagTransform=y(),_.setAttributes=f(),_.insert=g().bind(null,"head"),_.domAPI=o(),_.insertStyleElement=u();var Ye=a()(yr.Z,_),at=yr.Z&&yr.Z.locals?yr.Z.locals:void 0,$t=({title:i,borderColor:d,titleWidth:p,titleHeight:c,style:h,className:b,...x})=>(0,t.jsx)("div",{className:`${at["huxy-title-header-box"]}${b?` ${b}`:""}`,style:{"--borderColor":d,"--titleWidth":p,"--titleHeight":c,...h},...x,children:(0,t.jsx)("h2",{className:at.title,children:i})}),wr=m(40),M={};M.styleTagTransform=y(),M.setAttributes=f(),M.insert=g().bind(null,"head"),M.domAPI=o(),M.insertStyleElement=u();var Ie=a()(wr.Z,M),xr=wr.Z&&wr.Z.locals?wr.Z.locals:void 0,Tt=({size:i="8px",borderColor:d="var(--appColor)",half1:p=!0,half2:c=!0,style:h,className:b,children:x,...v})=>(0,t.jsx)("div",{className:`${xr["corner-wrap"]}${b?` ${b}`:""}`,style:{"--cornerSize":i,"--borderColor":d,...h},...v,children:(0,t.jsxs)("div",{className:`${xr.corner}${p?` ${xr.half}`:""}`,children:[c?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:xr["corner-tl"]}),(0,t.jsx)("span",{className:xr["corner-br"]})]}):null,x]})}),Cr=m(538),H={};H.styleTagTransform=y(),H.setAttributes=f(),H.insert=g().bind(null,"head"),H.domAPI=o(),H.insertStyleElement=u();var We=a()(Cr.Z,H),it=Cr.Z&&Cr.Z.locals?Cr.Z.locals:void 0,Nt=({size:i="8px",borderColor:d="var(--appColor)",style:p,className:c,children:h,...b})=>(0,t.jsx)("div",{className:`${it["corner-wrap"]}${c?` ${c}`:""}`,style:{"--cornerSize":i,"--borderColor":d,...p},...b,children:(0,t.jsx)("div",{className:it["corner-half"],children:h})}),kr=m(579),B={};B.styleTagTransform=y(),B.setAttributes=f(),B.insert=g().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=u();var Pe=a()(kr.Z,B),St=kr.Z&&kr.Z.locals?kr.Z.locals:void 0,At=({type:i="dot",bgColor:d,cubeColor:p,url:c,style:h,className:b,children:x,...v})=>{i=c?"img":i;const C=c?{backgroundImage:`url(${c})`}:void 0;return(0,t.jsx)("div",{className:`${St[`bg-box-${i}`]}${b?` ${b}`:""}`,style:{"--bgColor":d,"--cubeColor":p,...C,...h},...v,children:x})},zr=m(914),D={};D.styleTagTransform=y(),D.setAttributes=f(),D.insert=g().bind(null,"head"),D.domAPI=o(),D.insertStyleElement=u();var Re=a()(zr.Z,D),Vr=zr.Z&&zr.Z.locals?zr.Z.locals:void 0,Yt=({children:i,title:d,fontSize:p,borderSize:c,borderColor:h="var(--appColor)",space:b="10px",style:x,className:v,...C})=>(0,t.jsxs)("div",{className:`${Vr["huxy-title-border-wrap"]}${v?` ${v}`:""}`,style:{"--borderColor":h,"--space":b,"--fontSize":p,"--borderSize":c,...x},...C,children:[(0,t.jsx)("div",{className:Vr["huxy-title-border-top"],children:d}),(0,t.jsx)("div",{className:Vr["huxy-title-border-box"],children:i})]}),Zr=m(925),F={};F.styleTagTransform=y(),F.setAttributes=f(),F.insert=g().bind(null,"head"),F.domAPI=o(),F.insertStyleElement=u();var Ee=a()(Zr.Z,F),lt=Zr.Z&&Zr.Z.locals?Zr.Z.locals:void 0,It=({type:i="solid",space:d="2px",borderColor:p="var(--appColor)",style:c,className:h,children:b,...x})=>(0,t.jsx)("div",{className:`${lt["huxy-border-wrap"]}${h?` ${h}`:""}`,style:{"--space":d,"--borderColor":p,...c},...x,children:(0,t.jsx)("div",{className:lt[`huxy-border-animate-${i==="dash"?"dash":"solid"}`],children:b})}),Wt=(i="",d=0,p="0")=>{const c=i.length;return c>=d?i:`${Array(d-c+1).join(p)}${i}`},S=()=>"#"+Wt((~~(Math.random()*(1<<24))).toString(16),6),A=(i=0,d=0,p=!0)=>(i<d&&(i=[d,d=i][0]),p?~~(Math.random()*(i-d+1))+d:Math.random()*(i-d)+d),Qr=(i=[])=>i[A(i.length-1)],jr=m(771),X={};X.styleTagTransform=y(),X.setAttributes=f(),X.insert=g().bind(null,"head"),X.domAPI=o(),X.insertStyleElement=u();var _e=a()(jr.Z,X),nt=jr.Z&&jr.Z.locals?jr.Z.locals:void 0;const st=i=>i!=null&&i.length?Qr(i):S();var Pt=({list:i=10,height:d="240px",space:p="25px",itemWidth:c="30px",colors:h=[],color:b,style:x,className:v,...C})=>(0,t.jsx)("div",{className:`${nt["huxy-skeleton-barchart"]}${v?` ${v}`:""}`,style:{"--height":d,...x},...C,children:(Array.isArray(i)?i:[...new Array(i)]).map((k,$)=>{var N,Z,I;return(0,t.jsx)("div",{className:nt["sk-bar-item"],style:{"--space":p,"--itemWidth":c,"--bgColor":(Z=(N=k==null?void 0:k.color)!=null?N:b)!=null?Z:`linear-gradient(to top, ${st(h)}, ${st(h)})`,"--itemHeight":(I=k==null?void 0:k.height)!=null?I:`${A(15,100)}%`,left:`${$*(r(p)+r(c))}px`}},`huxy-skeleton-barchart-${$}`)})}),$r=m(709),L={};L.styleTagTransform=y(),L.setAttributes=f(),L.insert=g().bind(null,"head"),L.domAPI=o(),L.insertStyleElement=u();var Me=a()($r.Z,L),U=$r.Z&&$r.Z.locals?$r.Z.locals:void 0,Rt=({height:i="120px",leftColor:d,rightColor:p,topWidth:c,bottomWidth:h,style:b,className:x,...v})=>(0,t.jsxs)("div",{className:`${U["huxy-skeleton-card"]}${x?` ${x}`:""}`,style:{"--height":i,"--leftColor":d!=null?d:S(),"--rightColor":p!=null?p:S(),"--topWidth":c!=null?c:`${A(30,60)}%`,"--bottomWidth":h!=null?h:`${A(55,95)}%`,...b},...v,children:[(0,t.jsx)("div",{className:U["sk-card-left"],children:(0,t.jsx)("div",{className:U["sk-card-img"]})}),(0,t.jsxs)("div",{className:U["sk-card-right"],children:[(0,t.jsx)("h4",{className:U.title}),(0,t.jsx)("p",{className:U.text})]})]}),Tr=m(9),O={};O.styleTagTransform=y(),O.setAttributes=f(),O.insert=g().bind(null,"head"),O.domAPI=o(),O.insertStyleElement=u();var He=a()(Tr.Z,O),dt=Tr.Z&&Tr.Z.locals?Tr.Z.locals:void 0;const Et=[{borderWidth:"2px",borderRightColor:"rgba(2, 255, 255, 0.15)",borderTopColor:"rgba(2, 255, 255, 0.15)",borderBottomColor:"rgba(2, 255, 255, 0.15)",time:"5s"},{borderWidth:"5px",borderTopColor:"rgba(2, 255, 255, 0.7)",borderBottomColor:"rgba(2, 255, 255, 0.7)",time:"4s",rotateStart:"360deg",rotateEnd:"0deg"},{borderWidth:"3px",borderTopColor:"rgba(2, 255, 255, 0.5)",borderBottomColor:"rgba(2, 255, 255, 0.5)",time:"3s"},{borderWidth:"4px",borderTopColor:"rgba(2, 255, 255, 0.15)",time:"2s",rotateStart:"360deg",rotateEnd:"0deg"}];var _t=({size:i="300px",space:d="8px",style:p,className:c,...h})=>{let b=r(d)*3;return(0,t.jsx)("div",{className:`${dt["huxy-animate-border-circle"]}${c?` ${c}`:""}`,style:{"--size":i,...p},...h,children:Et.map((x,v)=>(b=b+r(x.borderWidth)*2+r(d)*2,(0,t.jsx)("div",{className:dt["border-circle-item"],style:{"--itemSize":`calc(${i} - ${b}px)`,"--borderWidth":x.borderWidth,"--borderLeftColor":x.borderLeftColor,"--borderRightColor":x.borderRightColor,"--borderTopColor":x.borderTopColor,"--borderBottomColor":x.borderBottomColor,"--time":x.time,"--rotateStart":x.rotateStart,"--rotateEnd":x.rotateEnd}},`huxy-animate-border-circle-${v}`)))})},Nr=m(681),J={};J.styleTagTransform=y(),J.setAttributes=f(),J.insert=g().bind(null,"head"),J.domAPI=o(),J.insertStyleElement=u();var Be=a()(Nr.Z,J),ct=Nr.Z&&Nr.Z.locals?Nr.Z.locals:void 0,Mt=({size:i="400px",width:d="20px",space:p="20px",colors:c=[],style:h,className:b,...x})=>(0,t.jsx)("div",{className:`${ct["huxy-skeleton-dashboard"]}${b?` ${b}`:""}`,style:{"--size":i,"--width":d,"--space":p,"--color1":c[0],"--color2":c[1],"--color3":c[2],"--color4":c[3],"--color5":c[4],"--color6":c[5],"--color7":c[6],...h},...x,children:(0,t.jsx)("div",{className:ct.point})}),Sr=m(41),G={};G.styleTagTransform=y(),G.setAttributes=f(),G.insert=g().bind(null,"head"),G.domAPI=o(),G.insertStyleElement=u();var De=a()(Sr.Z,G),pt=Sr.Z&&Sr.Z.locals?Sr.Z.locals:void 0,Ht=({row:i=8,leftColor:d="linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))",rightColor:p="rgba(0, 0, 0, 0.2)",rightWidth:c="100px",itemHeight:h="20px",space:b="20px",className:x,...v})=>(0,t.jsx)("div",{className:`${pt["huxy-skeleton-list"]}${x?` ${x}`:""}`,style:{"--rightWidth":c,"--itemHeight":h,"--space":b,"--leftColor":d,"--rightColor":p},...v,children:[...new Array(i)].map((C,k)=>(0,t.jsx)("div",{className:pt["sk-list-item"]},`huxy-skeleton-list-${k}`))}),Bt=(i,d=100)=>{const p=[];return[...new Array(i)].map((c,h)=>{h===i-1?p[h]=d:(p[h]=A(1,d-1),d-=p[h])}),p},Ar=m(180),K={};K.styleTagTransform=y(),K.setAttributes=f(),K.insert=g().bind(null,"head"),K.domAPI=o(),K.insertStyleElement=u();var Fe=a()(Ar.Z,K),Dt=Ar.Z&&Ar.Z.locals?Ar.Z.locals:void 0;const Yr=i=>i!=null&&i.length?Qr(i):S(),q=Bt(4);var Ft=({height:i,colors:d=[],style:p,className:c,...h})=>(0,t.jsx)("div",{className:`${Dt["huxy-skeleton-piechart"]}${c?` ${c}`:""}`,style:{"--height":i,"--color1":Yr(d),"--color2":Yr(d),"--color3":Yr(d),"--color4":Yr(d),"--percent1":`${q[0]}%`,"--percent2":`${q[0]+q[1]}%`,"--percent3":`${q[0]+q[1]+q[2]}%`,"--percent4":"100%",...p},...h}),Ir=m(752),V={};V.styleTagTransform=y(),V.setAttributes=f(),V.insert=g().bind(null,"head"),V.domAPI=o(),V.insertStyleElement=u();var Xe=a()(Ir.Z,V),Xt=Ir.Z&&Ir.Z.locals?Ir.Z.locals:void 0,Lt=({percent:i,height:d="20px",bgColor:p="rgba(0, 0, 0, 0.15)",progressColor:c,borderRadius:h="4px",waveColor:b="rgba(255, 255, 255, 0.2)",waveTime:x="3s",style:v,className:C,...k})=>(0,t.jsx)("div",{className:`${Xt["huxy-progress-wave"]}${C?` ${C}`:""}`,style:{"--percent":i!=null?i:A(33,99),"--height":d,"--bgColor":p,"--progressColor":c!=null?c:S(),"--borderRadius":h,"--waveColor":b,"--waveTime":x,...v},...k}),Wr=m(243),Q={};Q.styleTagTransform=y(),Q.setAttributes=f(),Q.insert=g().bind(null,"head"),Q.domAPI=o(),Q.insertStyleElement=u();var Le=a()(Wr.Z,Q),ht=Wr.Z&&Wr.Z.locals?Wr.Z.locals:void 0,Ut=({list:i=60,size:d="300px",itemWidth:p="30px",itemHeight:c="4px",bgColor:h="rgba(255, 255, 255 , 0.9)",shadowColor:b="rgba(255, 255, 255 , 0.6)",color:x,style:v,className:C,...k})=>(i=Array.isArray(i)?i:[...new Array(i)],(0,t.jsx)("div",{className:`${ht["huxy-animate-border-ring"]}${C?` ${C}`:""}`,style:{"--size":d,"--itemWidth":p,"--itemHeight":c,"--bgColor":h,"--shadowColor":b,...v},...k,children:i.map(($,N)=>{var Z,I;return(0,t.jsx)("div",{className:ht["border-ring-item"],style:{"--color":(I=(Z=$==null?void 0:$.color)!=null?Z:x)!=null?I:S(),transform:`rotate(${360/i.length*N}deg)`}},`huxy-animate-border-ring-${N}`)})})),Pr=m(988),rr={};rr.styleTagTransform=y(),rr.setAttributes=f(),rr.insert=g().bind(null,"head"),rr.domAPI=o(),rr.insertStyleElement=u();var Ue=a()(Pr.Z,rr),bt=Pr.Z&&Pr.Z.locals?Pr.Z.locals:void 0,Ot=({children:i,hasTitle:d,titleBgColor:p,style:c,className:h,...b})=>(0,t.jsx)("div",{className:`${bt["skeleton-container"]}${d?` ${bt.title}`:""}${h?` ${h}`:""}`,style:{"--titleBgColor":p!=null?p:S(),...c},...b,children:i}),Rr=m(77),tr={};tr.styleTagTransform=y(),tr.setAttributes=f(),tr.insert=g().bind(null,"head"),tr.domAPI=o(),tr.insertStyleElement=u();var Oe=a()(Rr.Z,tr),Jt=Rr.Z&&Rr.Z.locals?Rr.Z.locals:void 0,Gt=({row:i=6,col:d=8,...p})=>(0,t.jsx)("div",{className:Jt["huxy-skeleton-table"],...p,children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:[...new Array(d)].map((c,h)=>(0,t.jsx)("th",{children:(0,t.jsx)("span",{})},`skeleton-table-th-${h}`))})}),(0,t.jsx)("tbody",{children:[...new Array(i)].map((c,h)=>(0,t.jsx)("tr",{children:[...new Array(d)].map((b,x)=>(0,t.jsx)("td",{children:(0,t.jsx)("span",{})},`skeleton-table-tr-${h}-${x}`))},`tr-${h}`))})]})}),Er=m(832),er={};er.styleTagTransform=y(),er.setAttributes=f(),er.insert=g().bind(null,"head"),er.domAPI=o(),er.insertStyleElement=u();var Je=a()(Er.Z,er),Kt=Er.Z&&Er.Z.locals?Er.Z.locals:void 0,qt=({color:i="rgba(0, 0, 0, 0.06)",delay:d="2s",style:p,className:c,children:h,...b})=>(0,t.jsx)("div",{className:`${Kt["huxy-loading-wave"]}${c?` ${c}`:""}`,style:{"--waveColor":i,"--waveTime":d,...p},...b,children:h}),_r=m(289),or={};or.styleTagTransform=y(),or.setAttributes=f(),or.insert=g().bind(null,"head"),or.domAPI=o(),or.insertStyleElement=u();var Ge=a()(_r.Z,or),Vt=_r.Z&&_r.Z.locals?_r.Z.locals:void 0,Qt=i=>(0,t.jsx)("span",{className:Vt["huxy-timer"],...i}),Mr=m(950),ar={};ar.styleTagTransform=y(),ar.setAttributes=f(),ar.insert=g().bind(null,"head"),ar.domAPI=o(),ar.insertStyleElement=u();var Ke=a()(Mr.Z,ar),re=Mr.Z&&Mr.Z.locals?Mr.Z.locals:void 0,te=i=>(0,t.jsx)("span",{className:re["huxy-search"],...i}),Hr=m(875),ir={};ir.styleTagTransform=y(),ir.setAttributes=f(),ir.insert=g().bind(null,"head"),ir.domAPI=o(),ir.insertStyleElement=u();var qe=a()(Hr.Z,ir),ee=Hr.Z&&Hr.Z.locals?Hr.Z.locals:void 0,oe=i=>(0,t.jsx)("span",{className:ee["huxy-location"],...i}),Br=m(44),lr={};lr.styleTagTransform=y(),lr.setAttributes=f(),lr.insert=g().bind(null,"head"),lr.domAPI=o(),lr.insertStyleElement=u();var Ve=a()(Br.Z,lr),ut=Br.Z&&Br.Z.locals?Br.Z.locals:void 0,ae=({list:i=7,size:d="40px",shadowSize:p="50px",time:c="1.6s",style:h,className:b,...x})=>(c=r(c,"s"),(0,t.jsx)("div",{className:`${ut["huxy-loading-ball"]}${b?` ${b}`:""}`,style:{"--size":d,"--shadowSize":p,"--time":`${c}s`,...h},...x,children:(Array.isArray(i)?i:[...new Array(i)]).map((v,C)=>{var k,$,N;return(0,t.jsx)("div",{className:ut.ball,style:{"--delay":($=v==null?void 0:v.delay)!=null?$:`${c/(((k=i==null?void 0:i.length)!=null?k:i)+1)*(C+1)-c}s`,"--bgColor":(N=v==null?void 0:v.color)!=null?N:S()}},`huxy-loading-ball-${C}`)})})),Dr=m(658),nr={};nr.styleTagTransform=y(),nr.setAttributes=f(),nr.insert=g().bind(null,"head"),nr.domAPI=o(),nr.insertStyleElement=u();var Qe=a()(Dr.Z,nr),ie=Dr.Z&&Dr.Z.locals?Dr.Z.locals:void 0,le=({type:i="spot",size:d,color:p,shadowColor:c,style:h,className:b,...x})=>(0,t.jsx)("span",{className:`${ie[`huxy-${i}`]}${b?` ${b}`:""}`,style:{"--size":d!=null?d:`${A(6,30)}px`,"--color":p!=null?p:S(),"--shadowColor":c!=null?c:S(),...h},...x}),Fr=m(206),sr={};sr.styleTagTransform=y(),sr.setAttributes=f(),sr.insert=g().bind(null,"head"),sr.domAPI=o(),sr.insertStyleElement=u();var ro=a()(Fr.Z,sr),ne=Fr.Z&&Fr.Z.locals?Fr.Z.locals:void 0,se=({width:i,border:d,black:p,white:c,style:h,className:b,...x})=>(0,t.jsx)("div",{className:`${ne["huxy-taiji"]} ${b}`,style:{"--width":i,"--border":d,"--black":p,"--white":c,...h},...x}),Xr=m(784),dr={};dr.styleTagTransform=y(),dr.setAttributes=f(),dr.insert=g().bind(null,"head"),dr.domAPI=o(),dr.insertStyleElement=u();var to=a()(Xr.Z,dr),de=Xr.Z&&Xr.Z.locals?Xr.Z.locals:void 0,ce=({width:i="200px",height:d="180px",space:p="12%",bgColor:c,style:h,className:b,...x})=>(0,t.jsx)("div",{className:`${de.conic}${b?` ${b}`:""}`,style:{"--width":i,"--height":d,"--space":p,"--bgColor":c,...h},...x}),Lr=m(859),cr={};cr.styleTagTransform=y(),cr.setAttributes=f(),cr.insert=g().bind(null,"head"),cr.domAPI=o(),cr.insertStyleElement=u();var eo=a()(Lr.Z,cr),oo=Lr.Z&&Lr.Z.locals?Lr.Z.locals:void 0;const rt=()=>Math.random()-.5,pe=()=>~~(rt()*A(5,10)*10),he=()=>~~(rt()*A(2,8)*10),be=()=>(1-rt())*A(1.1,1.4,!1),ue=i=>i!=null&&i.length?Qr(i):S();var xe=({list:i=[],colors:d=[],width:p,padding:c,bgColor:h,style:b,...x})=>(0,t.jsx)("div",{className:"huxy-text-3d",style:{"--width":p,"--padding":c,"--bgColor":h,...b},...x,children:(0,t.jsx)("div",{className:"text-3d-container",children:i.map((v,C)=>{var k,$,N,Z,I,mt;const vt=(k=v.time)!=null?k:A(6,24,!1).toFixed(2),ke=($=v.delay)!=null?$:-A(0,vt,!1).toFixed(2);return(0,t.jsx)("div",{className:"text-3d-item",style:{"--time":`${vt}s`,"--center":(N=v.center)!=null?N:`${pe()}%`,"--rotate":(Z=v.rotate)!=null?Z:`${he()}deg`,"--size":(I=v.size)!=null?I:be(),"--color":(mt=v.color)!=null?mt:ue(d),"--delay":`${ke}s`},children:(0,t.jsx)("div",{className:"text-3d-item-card",children:(0,t.jsx)("span",{className:"link animate-text",children:v.label})})},v.label)})})}),Ur=m(589),pr={};pr.styleTagTransform=y(),pr.setAttributes=f(),pr.insert=g().bind(null,"head"),pr.domAPI=o(),pr.insertStyleElement=u();var ao=a()(Ur.Z,pr),xt=Ur.Z&&Ur.Z.locals?Ur.Z.locals:void 0,me=({time:i="3s",style:d,className:p,children:c,...h})=>(0,t.jsx)("div",{className:`${xt["huxy-text-filter"]}${p?` ${p}`:""}`,style:{"--time":i,...d},...h,children:(0,t.jsx)("div",{className:xt["text-filter"],children:c})}),Or=m(850),hr={};hr.styleTagTransform=y(),hr.setAttributes=f(),hr.insert=g().bind(null,"head"),hr.domAPI=o(),hr.insertStyleElement=u();var io=a()(Or.Z,hr),ve=Or.Z&&Or.Z.locals?Or.Z.locals:void 0,fe=({backColor:i="rgba(0, 0, 0, 0.3)",frontColor:d="rgba(255, 255, 255, 1)",time:p="4s",style:c,className:h,children:b,...x})=>(0,t.jsx)("div",{className:`${ve["huxy-text-loading"]}${h?` ${h}`:""}`,style:{"--backColor":i,"--frontColor":d,"--time":p,...c},...x,"data-text":b,children:b}),Jr=m(814),br={};br.styleTagTransform=y(),br.setAttributes=f(),br.insert=g().bind(null,"head"),br.domAPI=o(),br.insertStyleElement=u();var lo=a()(Jr.Z,br),ge=Jr.Z&&Jr.Z.locals?Jr.Z.locals:void 0,ye=({startColor:i,endColor:d,style:p,className:c,children:h,...b})=>(0,t.jsx)("div",{className:`${ge["huxy-text-masked"]}${c?` ${c}`:""}`,style:{"--startColor":i!=null?i:S(),"--endColor":d!=null?d:S(),...p},...b,children:h}),Gr=m(783),ur={};ur.styleTagTransform=y(),ur.setAttributes=f(),ur.insert=g().bind(null,"head"),ur.domAPI=o(),ur.insertStyleElement=u();var no=a()(Gr.Z,ur),we=Gr.Z&&Gr.Z.locals?Gr.Z.locals:void 0,Ce=({score:i=0,backColor:d="rgba(0, 0, 0, 0.3)",frontColor:p="var(--yellow2)",style:c,className:h,children:b,backend:x,...v})=>(0,t.jsx)("div",{className:`${we["huxy-rate-score"]}${h?` ${h}`:""}`,style:{"--backColor":d,"--frontColor":p,"--score":`${i}`.includes("%")?i:`${i*100}%`,...c},...v,"data-text":b,children:x!=null?x:b})}(),qr}()})}}]);
