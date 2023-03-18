(self.webpackChunk=self.webpackChunk||[]).push([[713],{5713:function($e,vr,Kt){var tr;Kt.d(vr,{Cd:function(){return gr},FM:function(){return wr},_k:function(){return yr},sA:function(){return fr}});var mr=Kt(7378),ur={496:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-3d-models {
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
  content: '';
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
`,""]),e.locals={};const l=e},190:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.g394U {
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
`,""]),e.locals={"huxy-card-fliper":"g394U",card:"zasVJ",front:"C5n3b",back:"UdsvP"};const l=e},271:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.huxy-icon-animate-tooltip {
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
  content: '';
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
`,""]),e.locals={};const l=e},498:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.huxy-icon-carousel-tooltip-lb {
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
  content: '';
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
  content: '';
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
`,""]),e.locals={};const l=e},804:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-border-animate-dash {
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
`,""]),e.locals={"huxy-border-wrap":"tF3eM","huxy-border-animate-dash":"BHIzz","huxy-border-animate-solid":"Ltln8"};const l=e},289:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.UJpqU {
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
`,""]),e.locals={"bg-box-dot":"UJpqU","bg-box-strip":"VXk7W","bg-box-cubestrip":"q_1dQ","bg-box-cube":"eBK09","bg-box-grid":"o9pvC","bg-box-img":"Po9ZE"};const l=e},548:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.YeHmo {
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
`,""]),e.locals={"corner-wrap":"YeHmo",corner:"vpTzN",half:"S3bPv","corner-tl":"WYlJx","corner-br":"SMovL"};const l=e},479:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.Usszw {
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
`,""]),e.locals={"corner-wrap":"Usszw","corner-half":"XcsJP"};const l=e},96:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.WY0lD {
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
`,""]),e.locals={"huxy-title-border-wrap":"WY0lD","huxy-title-border-top":"_ORAK","huxy-title-border-box":"Vggg7"};const l=e},317:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.MuUoF {
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
`,""]),e.locals={"huxy-title-header-box":"MuUoF",title:"fM2FI"};const l=e},303:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.huDNN {
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
`,""]),e.locals={"huxy-skeleton-barchart":"huDNN","sk-bar-item":"V5Fq4"};const l=e},761:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.nnDaG {
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
`,""]),e.locals={"huxy-skeleton-card":"nnDaG","sk-card-left":"iJtPz","sk-card-img":"Bya6y","sk-card-right":"c6MGh",title:"sb1hm",text:"YDDrB"};const l=e},129:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-animate-border-circle-shadow {
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
`,""]),e.locals={"huxy-animate-border-circle":"Krd0d","border-circle-item":"qcJ0N"};const l=e},917:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.myyKG {
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
`,""]),e.locals={"skeleton-container":"myyKG",title:"AXWTP"};const l=e},696:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-skeleton-dashboard {
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
`,""]),e.locals={"huxy-skeleton-dashboard":"DYspm",point:"Rg6DD"};const l=e},263:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.YWtCI {
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
`,""]),e.locals={"huxy-skeleton-list":"YWtCI","sk-list-item":"uBGAf"};const l=e},955:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.IQu9g {
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
`,""]),e.locals={"huxy-skeleton-piechart":"IQu9g"};const l=e},709:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-progress-wave {
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
`,""]),e.locals={"huxy-progress-wave":"zFNbz"};const l=e},664:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-animate-border-ring {
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
`,""]),e.locals={"huxy-animate-border-ring":"WbFYr","border-ring-item":"XIIyj"};const l=e},177:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.suwUY {
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
`,""]),e.locals={"huxy-skeleton-table":"suwUY"};const l=e},202:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-loading-wave {
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
  --waveColor: rgba(255, 255, 255, 0.1);
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
`,""]),e.locals={"huxy-loading-wave":"d9M97"};const l=e},972:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-conic-light-animate {
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
`,""]),e.locals={conic:"_ov1n"};const l=e},75:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-loading-ball {
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
`,""]),e.locals={"huxy-loading-ball":"TikRE",ball:"CyLSO"};const l=e},871:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-location {
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
`,""]),e.locals={"huxy-location":"DdhmP"};const l=e},845:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-search {
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
`,""]),e.locals={"huxy-search":"r6hPc"};const l=e},943:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-spot {
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
`,""]),e.locals={"huxy-spot":"JsH0T","huxy-scale":"S4gb8"};const l=e},389:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.x6fRL {
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
`,""]),e.locals={"huxy-taiji":"x6fRL"};const l=e},833:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-timer {
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
`,""]),e.locals={"huxy-timer":"R1ObR"};const l=e},608:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`.q9v4I {
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
`,""]),e.locals={"huxy-rate-score":"q9v4I"};const l=e},735:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-text-3d {
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
`,""]),e.locals={};const l=e},814:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-text-filter {
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
`,""]),e.locals={"huxy-text-filter":"_zrvj","text-filter":"ww0tY"};const l=e},325:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-text-loading {
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
`,""]),e.locals={"huxy-text-loading":"ZYC7Y"};const l=e},82:(r,s,t)=>{t.d(s,{Z:()=>l});var n=t(601),a=t.n(n),d=t(609),o=t.n(d),e=o()(a());e.push([r.id,`@keyframes huxy-text-masked {
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
`,""]),e.locals={"huxy-text-masked":"zg3Sy"};const l=e},609:r=>{r.exports=function(s){var t=[];return t.toString=function(){return this.map(function(n){var a="",d=typeof n[5]<"u";return n[4]&&(a+="@supports (".concat(n[4],") {")),n[2]&&(a+="@media ".concat(n[2]," {")),d&&(a+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),a+=s(n),d&&(a+="}"),n[2]&&(a+="}"),n[4]&&(a+="}"),a}).join("")},t.i=function(n,a,d,o,e){typeof n=="string"&&(n=[[null,n,void 0]]);var l={};if(d)for(var C=0;C<this.length;C++){var f=this[C][0];f!=null&&(l[f]=!0)}for(var z=0;z<n.length;z++){var v=[].concat(n[z]);d&&l[v[0]]||(typeof e<"u"&&(typeof v[5]>"u"||(v[1]="@layer".concat(v[5].length>0?" ".concat(v[5]):""," {").concat(v[1],"}")),v[5]=e),a&&(v[2]&&(v[1]="@media ".concat(v[2]," {").concat(v[1],"}")),v[2]=a),o&&(v[4]?(v[1]="@supports (".concat(v[4],") {").concat(v[1],"}"),v[4]=o):v[4]="".concat(o)),t.push(v))}},t}},601:r=>{r.exports=function(s){return s[1]}},837:(r,s,t)=>{var n=t(810),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,e=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function C(f,z,v){var Z,y={},j=null,S=null;v!==void 0&&(j=""+v),z.key!==void 0&&(j=""+z.key),z.ref!==void 0&&(S=z.ref);for(Z in z)o.call(z,Z)&&!l.hasOwnProperty(Z)&&(y[Z]=z[Z]);if(f&&f.defaultProps)for(Z in z=f.defaultProps,z)y[Z]===void 0&&(y[Z]=z[Z]);return{$$typeof:a,type:f,key:j,ref:S,props:y,_owner:e.current}}s.Fragment=d,s.jsx=C,s.jsxs=C},322:(r,s,t)=>{r.exports=t(837)},62:r=>{var s=[];function t(d){for(var o=-1,e=0;e<s.length;e++)if(s[e].identifier===d){o=e;break}return o}function n(d,o){for(var e={},l=[],C=0;C<d.length;C++){var f=d[C],z=o.base?f[0]+o.base:f[0],v=e[z]||0,Z="".concat(z," ").concat(v);e[z]=v+1;var y=t(Z),j={css:f[1],media:f[2],sourceMap:f[3],supports:f[4],layer:f[5]};if(y!==-1)s[y].references++,s[y].updater(j);else{var S=a(j,o);o.byIndex=C,s.splice(C,0,{identifier:Z,updater:S,references:1})}l.push(Z)}return l}function a(d,o){var e=o.domAPI(o);e.update(d);var l=function(C){if(C){if(C.css===d.css&&C.media===d.media&&C.sourceMap===d.sourceMap&&C.supports===d.supports&&C.layer===d.layer)return;e.update(d=C)}else e.remove()};return l}r.exports=function(d,o){o=o||{},d=d||[];var e=n(d,o);return function(l){l=l||[];for(var C=0;C<e.length;C++){var f=e[C],z=t(f);s[z].references--}for(var v=n(l,o),Z=0;Z<e.length;Z++){var y=e[Z],j=t(y);s[j].references===0&&(s[j].updater(),s.splice(j,1))}e=v}}},793:r=>{var s={};function t(a){if(typeof s[a]>"u"){var d=document.querySelector(a);if(window.HTMLIFrameElement&&d instanceof window.HTMLIFrameElement)try{d=d.contentDocument.head}catch{d=null}s[a]=d}return s[a]}function n(a,d){var o=t(a);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(d)}r.exports=n},173:r=>{function s(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}r.exports=s},892:(r,s,t)=>{function n(a){var d=t.nc;d&&a.setAttribute("nonce",d)}r.exports=n},36:r=>{function s(a,d,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var l=typeof o.layer<"u";l&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,l&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var C=o.sourceMap;C&&typeof btoa<"u"&&(e+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(C))))," */")),d.styleTagTransform(e,a,d.options)}function t(a){if(a.parentNode===null)return!1;a.parentNode.removeChild(a)}function n(a){if(typeof document>"u")return{update:function(){},remove:function(){}};var d=a.insertStyleElement(a);return{update:function(o){s(d,a,o)},remove:function(){t(d)}}}r.exports=n},464:r=>{function s(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}r.exports=s},810:r=>{var s=n=>{var a={};return u.d(a,n),a},t=n=>()=>n;r.exports=tr||(tr=Kt.t(mr,2))}},rr={};function u(r){var s=rr[r];if(s!==void 0)return s.exports;var t=rr[r]={id:r,exports:{}};return ur[r](t,t.exports,u),t.exports}u.n=r=>{var s=r&&r.__esModule?()=>r.default:()=>r;return u.d(s,{a:s}),s},u.d=(r,s)=>{for(var t in s)u.o(s,t)&&!u.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:s[t]})},u.o=(r,s)=>Object.prototype.hasOwnProperty.call(r,s),u.nc=void 0;var w={};(()=>{u.d(w,{$V:()=>Pr,Bp:()=>Er,Ak:()=>_r,Zb:()=>Rr,Cd:()=>Dr,W2:()=>Gr,M9:()=>Ar,V5:()=>er,A:()=>Br,QN:()=>kr,aI:()=>Sr,sA:()=>Cr,TK:()=>Nr,_k:()=>he,aV:()=>Fr,gb:()=>le,Ye:()=>ie,df:()=>Or,Ex:()=>Lr,gd:()=>ze,FM:()=>Jr,ol:()=>oe,z6:()=>ne,iA:()=>Vr,P8:()=>ce,Qp:()=>ue,QV:()=>ge,R8:()=>ye,By:()=>Ce,qp:()=>re,ql:()=>Ir,iL:()=>Tr,iC:()=>Qr});var r=u(322);const s=i=>i?.$$typeof&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",t=(i,c="px")=>`${i}`.replace(c,"")-0;var n=u(62),a=u.n(n),d=u(36),o=u.n(d),e=u(793),l=u.n(e),C=u(892),f=u.n(C),z=u(173),v=u.n(z),Z=u(464),y=u.n(Z),j=u(496),S={};S.styleTagTransform=y(),S.setAttributes=f(),S.insert=l().bind(null,"head"),S.domAPI=o(),S.insertStyleElement=v();var eo=a()(j.Z,S);const oo=j.Z&&j.Z.locals?j.Z.locals:void 0,er=({list:i=[],size:c="360px",cardSize:h="42px",bottom:p="60px",style:b,...x})=>{const m=360/i.length;return(0,r.jsx)("div",{className:"huxy-css-3d-models",style:{"--size":c,"--cardSize":h,"--bottom":p,...b},...x,children:(0,r.jsx)("div",{className:"model-container",children:i.map((g,k)=>(0,r.jsx)("div",{className:"model-item",style:{"--rotateY":`${m*k}deg`},children:(0,r.jsxs)("a",{className:"model-card huxy-css-3d-models-tooltip",tooltip:g.label,href:g.link,target:"_blank",children:[g.icon?(0,r.jsx)("img",{src:g.icon,alt:g.label}):null,s(g.icon)?g.icon:g.icon?(0,r.jsx)("img",{src:g.icon,alt:g.label}):null]})},g.label))})})};var mt=u(271),I={};I.styleTagTransform=y(),I.setAttributes=f(),I.insert=l().bind(null,"head"),I.domAPI=o(),I.insertStyleElement=v();var ao=a()(mt.Z,I);const io=mt.Z&&mt.Z.locals?mt.Z.locals:void 0,Cr=({objs:i=[],models:c=[],height:h="480px",style:p,className:b,...x})=>(0,r.jsxs)("div",{className:`huxy-icon-animate-container${b?` ${b}`:""}`,style:{"--height":h,...p},...x,children:[(0,r.jsx)("div",{className:"huxy-icon-animate-materiels",children:i.map(({value:m,label:g,icon:k,link:$,type:Y,style:xt})=>(0,r.jsx)("a",{className:`huxy-icon-animate-tooltip obj-${m}${Y?"":" obj-img"}`,tooltip:Y?void 0:g,href:$,target:"_blank",style:xt,children:s(k)?k:(0,r.jsx)("img",{src:k,alt:g})},g))}),(0,r.jsx)(er,{list:c,size:`${t(h)-120}px`})]});var ut=u(190),P={};P.styleTagTransform=y(),P.setAttributes=f(),P.insert=l().bind(null,"head"),P.domAPI=o(),P.insertStyleElement=v();var lo=a()(ut.Z,P);const gt=ut.Z&&ut.Z.locals?ut.Z.locals:void 0,kr=({front:i,back:c,...h})=>(0,r.jsx)("div",{className:gt["huxy-card-fliper"],...h,children:(0,r.jsxs)("div",{className:gt.card,children:[(0,r.jsx)("div",{className:gt.front,children:i}),(0,r.jsx)("div",{className:gt.back,children:c})]})});var _=u(810);const zr=(i={})=>{const c=(0,_.useRef)(0),[h,p]=(0,_.useState)(i),b=(0,_.useCallback)(x=>{cancelAnimationFrame(c.current),c.current=requestAnimationFrame(()=>p(x))},[]);return(0,_.useEffect)(()=>()=>cancelAnimationFrame(c.current),[]),[h,b]},Zr=(i,c)=>{const h=(0,_.useRef)();(0,_.useEffect)(()=>{h.current=i},[i]),(0,_.useEffect)(()=>{if(c){const p=setInterval(()=>h.current(),c);return()=>clearInterval(p)}},[c])};var ft=u(498),W={};W.styleTagTransform=y(),W.setAttributes=f(),W.insert=l().bind(null,"head"),W.domAPI=o(),W.insertStyleElement=v();var so=a()(ft.Z,W);const no=ft.Z&&ft.Z.locals?ft.Z.locals:void 0,$r=(i,c=60)=>(c=1.5*c,i.map((h,p)=>{const b=Math.random();let x=1;b<.3334?x=1.2:b<.6667&&(x=.8);const m=~~(p/3),g=p%3;let k=1.5*c*m;g===1&&(k+=c/2);const $=g*c+c/6*(g+1);return h.transform={x:k,y:$,s:x},h})),jr=(i,c=60)=>(c=2.25*c,i.map(h=>(h.transform.x-=2,h.transform.x+c<0&&(h.transform.x=~~(i.length/3)*c),h))),Nr=({width:i=60,wait:c=56,list:h=[],className:p,...b})=>{const x=(0,_.useMemo)(()=>$r(h,i),[]),[m,g]=zr(x),[k,$]=(0,_.useState)(c);Zr(()=>{const A=jr(m,i);g(A)},k);const Y=A=>{$(null)},xt=A=>{$(c)};return(0,r.jsx)("div",{className:`huxy-icon-carousel${p?` ${p}`:""}`,...b,children:(0,r.jsx)("div",{className:"icon-container",children:m.map((A,Ze)=>(0,r.jsx)("a",{className:`icon-item huxy-icon-carousel-tooltip-${Ze%3===0?"lt":"lb"}`,tooltip:A.label,style:{transform:`translate(${A.transform.x}px, ${A.transform.y}px) scale(${A.transform.s})`,width:i},onMouseEnter:Y,onMouseLeave:xt,href:A.link,target:"_blank",children:(0,r.jsx)("img",{src:A.icon,alt:A.label})},A.label))})})};var yt=u(317),E={};E.styleTagTransform=y(),E.setAttributes=f(),E.insert=l().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=v();var co=a()(yt.Z,E);const or=yt.Z&&yt.Z.locals?yt.Z.locals:void 0,Tr=({title:i,borderColor:c,titleWidth:h,titleHeight:p,style:b,className:x,...m})=>(0,r.jsx)("div",{className:`${or["huxy-title-header-box"]}${x?` ${x}`:""}`,style:{"--borderColor":c,"--titleWidth":h,"--titleHeight":p,...b},...m,children:(0,r.jsx)("h2",{className:or.title,children:i})});var wt=u(548),R={};R.styleTagTransform=y(),R.setAttributes=f(),R.insert=l().bind(null,"head"),R.domAPI=o(),R.insertStyleElement=v();var po=a()(wt.Z,R);const vt=wt.Z&&wt.Z.locals?wt.Z.locals:void 0,Ar=({size:i="8px",borderColor:c="var(--appColor)",half1:h=!0,half2:p=!0,style:b,className:x,children:m,...g})=>(0,r.jsx)("div",{className:`${vt["corner-wrap"]}${x?` ${x}`:""}`,style:{"--cornerSize":i,"--borderColor":c,...b},...g,children:(0,r.jsxs)("div",{className:`${vt.corner}${h?` ${vt.half}`:""}`,children:[p?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:vt["corner-tl"]}),(0,r.jsx)("span",{className:vt["corner-br"]})]}):null,m]})});var Ct=u(479),M={};M.styleTagTransform=y(),M.setAttributes=f(),M.insert=l().bind(null,"head"),M.domAPI=o(),M.insertStyleElement=v();var ho=a()(Ct.Z,M);const ar=Ct.Z&&Ct.Z.locals?Ct.Z.locals:void 0,Sr=({size:i="8px",borderColor:c="var(--appColor)",style:h,className:p,children:b,...x})=>(0,r.jsx)("div",{className:`${ar["corner-wrap"]}${p?` ${p}`:""}`,style:{"--cornerSize":i,"--borderColor":c,...h},...x,children:(0,r.jsx)("div",{className:ar["corner-half"],children:b})});var kt=u(289),D={};D.styleTagTransform=y(),D.setAttributes=f(),D.insert=l().bind(null,"head"),D.domAPI=o(),D.insertStyleElement=v();var bo=a()(kt.Z,D);const Yr=kt.Z&&kt.Z.locals?kt.Z.locals:void 0,_r=({type:i="dot",bgColor:c,cubeColor:h,url:p,style:b,className:x,children:m,...g})=>{i=p?"img":i;const k=p?{backgroundImage:`url(${p})`}:void 0;return(0,r.jsx)("div",{className:`${Yr[`bg-box-${i}`]}${x?` ${x}`:""}`,style:{"--bgColor":c,"--cubeColor":h,...k,...b},...g,children:m})};var zt=u(96),B={};B.styleTagTransform=y(),B.setAttributes=f(),B.insert=l().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=v();var xo=a()(zt.Z,B);const Vt=zt.Z&&zt.Z.locals?zt.Z.locals:void 0,Ir=({children:i,title:c,fontSize:h,borderSize:p,borderColor:b="var(--appColor)",space:x="10px",style:m,className:g,...k})=>(0,r.jsxs)("div",{className:`${Vt["huxy-title-border-wrap"]}${g?` ${g}`:""}`,style:{"--borderColor":b,"--space":x,"--fontSize":h,"--borderSize":p,...m},...k,children:[(0,r.jsx)("div",{className:Vt["huxy-title-border-top"],children:c}),(0,r.jsx)("div",{className:Vt["huxy-title-border-box"],children:i})]});var Zt=u(804),F={};F.styleTagTransform=y(),F.setAttributes=f(),F.insert=l().bind(null,"head"),F.domAPI=o(),F.insertStyleElement=v();var vo=a()(Zt.Z,F);const ir=Zt.Z&&Zt.Z.locals?Zt.Z.locals:void 0,Pr=({type:i="solid",space:c="2px",borderColor:h="var(--appColor)",style:p,className:b,children:x,...m})=>(0,r.jsx)("div",{className:`${ir["huxy-border-wrap"]}${b?` ${b}`:""}`,style:{"--space":c,"--borderColor":h,...p},...m,children:(0,r.jsx)("div",{className:ir[`huxy-border-animate-${i==="dash"?"dash":"solid"}`],children:x})}),Wr=(i="",c=0,h="0")=>{const p=i.length;return p>=c?i:`${Array(c-p+1).join(h)}${i}`},N=()=>"#"+Wr((~~(Math.random()*(1<<24))).toString(16),6),T=(i=0,c=0,h=!0)=>(i<c&&(i=[c,c=i][0]),h?~~(Math.random()*(i-c+1))+c:Math.random()*(i-c)+c),qt=(i=[])=>i[T(i.length-1)];var $t=u(303),H={};H.styleTagTransform=y(),H.setAttributes=f(),H.insert=l().bind(null,"head"),H.domAPI=o(),H.insertStyleElement=v();var mo=a()($t.Z,H);const lr=$t.Z&&$t.Z.locals?$t.Z.locals:void 0,sr=i=>i?.length?qt(i):N(),Er=({list:i=10,height:c="240px",space:h="25px",itemWidth:p="30px",colors:b=[],color:x,style:m,className:g,...k})=>(0,r.jsx)("div",{className:`${lr["huxy-skeleton-barchart"]}${g?` ${g}`:""}`,style:{"--height":c,...m},...k,children:(Array.isArray(i)?i:[...new Array(i)]).map(($,Y)=>(0,r.jsx)("div",{className:lr["sk-bar-item"],style:{"--space":h,"--itemWidth":p,"--bgColor":$?.color??x??`linear-gradient(to top, ${sr(b)}, ${sr(b)})`,"--itemHeight":$?.height??`${T(15,100)}%`,left:`${Y*(t(h)+t(p))}px`}},`huxy-skeleton-barchart-${Y}`))});var jt=u(761),X={};X.styleTagTransform=y(),X.setAttributes=f(),X.insert=l().bind(null,"head"),X.domAPI=o(),X.insertStyleElement=v();var uo=a()(jt.Z,X);const O=jt.Z&&jt.Z.locals?jt.Z.locals:void 0,Rr=({height:i="120px",leftColor:c,rightColor:h,topWidth:p,bottomWidth:b,style:x,className:m,...g})=>(0,r.jsxs)("div",{className:`${O["huxy-skeleton-card"]}${m?` ${m}`:""}`,style:{"--height":i,"--leftColor":c??N(),"--rightColor":h??N(),"--topWidth":p??`${T(30,60)}%`,"--bottomWidth":b??`${T(55,95)}%`,...x},...g,children:[(0,r.jsx)("div",{className:O["sk-card-left"],children:(0,r.jsx)("div",{className:O["sk-card-img"]})}),(0,r.jsxs)("div",{className:O["sk-card-right"],children:[(0,r.jsx)("h4",{className:O.title}),(0,r.jsx)("p",{className:O.text})]})]});var Nt=u(129),U={};U.styleTagTransform=y(),U.setAttributes=f(),U.insert=l().bind(null,"head"),U.domAPI=o(),U.insertStyleElement=v();var go=a()(Nt.Z,U);const nr=Nt.Z&&Nt.Z.locals?Nt.Z.locals:void 0,Mr=[{borderWidth:"2px",borderRightColor:"rgba(2, 255, 255, 0.15)",borderTopColor:"rgba(2, 255, 255, 0.15)",borderBottomColor:"rgba(2, 255, 255, 0.15)",time:"5s"},{borderWidth:"5px",borderTopColor:"rgba(2, 255, 255, 0.7)",borderBottomColor:"rgba(2, 255, 255, 0.7)",time:"4s",rotateStart:"360deg",rotateEnd:"0deg"},{borderWidth:"3px",borderTopColor:"rgba(2, 255, 255, 0.5)",borderBottomColor:"rgba(2, 255, 255, 0.5)",time:"3s"},{borderWidth:"4px",borderTopColor:"rgba(2, 255, 255, 0.15)",time:"2s",rotateStart:"360deg",rotateEnd:"0deg"}],Dr=({size:i="300px",space:c="8px",style:h,className:p,...b})=>{let x=t(c)*3;return(0,r.jsx)("div",{className:`${nr["huxy-animate-border-circle"]}${p?` ${p}`:""}`,style:{"--size":i,...h},...b,children:Mr.map((m,g)=>(x=x+t(m.borderWidth)*2+t(c)*2,(0,r.jsx)("div",{className:nr["border-circle-item"],style:{"--itemSize":`calc(${i} - ${x}px)`,"--borderWidth":m.borderWidth,"--borderLeftColor":m.borderLeftColor,"--borderRightColor":m.borderRightColor,"--borderTopColor":m.borderTopColor,"--borderBottomColor":m.borderBottomColor,"--time":m.time,"--rotateStart":m.rotateStart,"--rotateEnd":m.rotateEnd}},`huxy-animate-border-circle-${g}`)))})};var Tt=u(696),L={};L.styleTagTransform=y(),L.setAttributes=f(),L.insert=l().bind(null,"head"),L.domAPI=o(),L.insertStyleElement=v();var fo=a()(Tt.Z,L);const dr=Tt.Z&&Tt.Z.locals?Tt.Z.locals:void 0,Br=({size:i="400px",width:c="20px",space:h="20px",colors:p=[],style:b,className:x,...m})=>(0,r.jsx)("div",{className:`${dr["huxy-skeleton-dashboard"]}${x?` ${x}`:""}`,style:{"--size":i,"--width":c,"--space":h,"--color1":p[0],"--color2":p[1],"--color3":p[2],"--color4":p[3],"--color5":p[4],"--color6":p[5],"--color7":p[6],...b},...m,children:(0,r.jsx)("div",{className:dr.point})});var At=u(263),J={};J.styleTagTransform=y(),J.setAttributes=f(),J.insert=l().bind(null,"head"),J.domAPI=o(),J.insertStyleElement=v();var yo=a()(At.Z,J);const cr=At.Z&&At.Z.locals?At.Z.locals:void 0,Fr=({row:i=8,leftColor:c="linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))",rightColor:h="rgba(0, 0, 0, 0.2)",rightWidth:p="100px",itemHeight:b="20px",space:x="20px",className:m,...g})=>(0,r.jsx)("div",{className:`${cr["huxy-skeleton-list"]}${m?` ${m}`:""}`,style:{"--rightWidth":p,"--itemHeight":b,"--space":x,"--leftColor":c,"--rightColor":h},...g,children:[...new Array(i)].map((k,$)=>(0,r.jsx)("div",{className:cr["sk-list-item"]},`huxy-skeleton-list-${$}`))}),Hr=(i,c=100)=>{const h=[];return[...new Array(i)].map((p,b)=>{b===i-1?h[b]=c:(h[b]=T(1,c-1),c-=h[b])}),h};var St=u(955),G={};G.styleTagTransform=y(),G.setAttributes=f(),G.insert=l().bind(null,"head"),G.domAPI=o(),G.insertStyleElement=v();var wo=a()(St.Z,G);const Xr=St.Z&&St.Z.locals?St.Z.locals:void 0,Yt=i=>i?.length?qt(i):N(),K=Hr(4),Or=({height:i,colors:c=[],style:h,className:p,...b})=>(0,r.jsx)("div",{className:`${Xr["huxy-skeleton-piechart"]}${p?` ${p}`:""}`,style:{"--height":i,"--color1":Yt(c),"--color2":Yt(c),"--color3":Yt(c),"--color4":Yt(c),"--percent1":`${K[0]}%`,"--percent2":`${K[0]+K[1]}%`,"--percent3":`${K[0]+K[1]+K[2]}%`,"--percent4":"100%",...h},...b});var _t=u(709),V={};V.styleTagTransform=y(),V.setAttributes=f(),V.insert=l().bind(null,"head"),V.domAPI=o(),V.insertStyleElement=v();var Co=a()(_t.Z,V);const Ur=_t.Z&&_t.Z.locals?_t.Z.locals:void 0,Lr=({percent:i,height:c="20px",bgColor:h="rgba(0, 0, 0, 0.15)",progressColor:p,borderRadius:b="4px",waveColor:x="rgba(255, 255, 255, 0.2)",waveTime:m="3s",style:g,className:k,...$})=>(0,r.jsx)("div",{className:`${Ur["huxy-progress-wave"]}${k?` ${k}`:""}`,style:{"--percent":i??T(33,99),"--height":c,"--bgColor":h,"--progressColor":p??N(),"--borderRadius":b,"--waveColor":x,"--waveTime":m,...g},...$});var It=u(664),q={};q.styleTagTransform=y(),q.setAttributes=f(),q.insert=l().bind(null,"head"),q.domAPI=o(),q.insertStyleElement=v();var ko=a()(It.Z,q);const pr=It.Z&&It.Z.locals?It.Z.locals:void 0,Jr=({list:i=60,size:c="300px",itemWidth:h="30px",itemHeight:p="4px",bgColor:b="rgba(255, 255, 255 , 0.9)",shadowColor:x="rgba(255, 255, 255 , 0.6)",color:m,style:g,className:k,...$})=>(i=Array.isArray(i)?i:[...new Array(i)],(0,r.jsx)("div",{className:`${pr["huxy-animate-border-ring"]}${k?` ${k}`:""}`,style:{"--size":c,"--itemWidth":h,"--itemHeight":p,"--bgColor":b,"--shadowColor":x,...g},...$,children:i.map((Y,xt)=>(0,r.jsx)("div",{className:pr["border-ring-item"],style:{"--color":Y?.color??m??N(),transform:`rotate(${360/i.length*xt}deg)`}},`huxy-animate-border-ring-${xt}`))}));var Pt=u(917),Q={};Q.styleTagTransform=y(),Q.setAttributes=f(),Q.insert=l().bind(null,"head"),Q.domAPI=o(),Q.insertStyleElement=v();var zo=a()(Pt.Z,Q);const hr=Pt.Z&&Pt.Z.locals?Pt.Z.locals:void 0,Gr=({children:i,hasTitle:c,titleBgColor:h,style:p,className:b,...x})=>(0,r.jsx)("div",{className:`${hr["skeleton-container"]}${c?` ${hr.title}`:""}${b?` ${b}`:""}`,style:{"--titleBgColor":h??N(),...p},...x,children:i});var Wt=u(177),tt={};tt.styleTagTransform=y(),tt.setAttributes=f(),tt.insert=l().bind(null,"head"),tt.domAPI=o(),tt.insertStyleElement=v();var Zo=a()(Wt.Z,tt);const Kr=Wt.Z&&Wt.Z.locals?Wt.Z.locals:void 0,Vr=({row:i=6,col:c=8,...h})=>(0,r.jsx)("div",{className:Kr["huxy-skeleton-table"],...h,children:(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsx)("tr",{children:[...new Array(c)].map((p,b)=>(0,r.jsx)("th",{children:(0,r.jsx)("span",{})},`skeleton-table-th-${b}`))})}),(0,r.jsx)("tbody",{children:[...new Array(i)].map((p,b)=>(0,r.jsx)("tr",{children:[...new Array(c)].map((x,m)=>(0,r.jsx)("td",{children:(0,r.jsx)("span",{})},`skeleton-table-tr-${b}-${m}`))},`tr-${b}`))})]})});var Et=u(202),rt={};rt.styleTagTransform=y(),rt.setAttributes=f(),rt.insert=l().bind(null,"head"),rt.domAPI=o(),rt.insertStyleElement=v();var $o=a()(Et.Z,rt);const qr=Et.Z&&Et.Z.locals?Et.Z.locals:void 0,Qr=({color:i="rgba(255, 255, 255, 0.1)",delay:c="2s",style:h,className:p,children:b,...x})=>(0,r.jsx)("div",{className:`${qr["huxy-loading-wave"]}${p?` ${p}`:""}`,style:{"--waveColor":i,"--waveTime":c,...h},...x,children:b});var Rt=u(833),et={};et.styleTagTransform=y(),et.setAttributes=f(),et.insert=l().bind(null,"head"),et.domAPI=o(),et.insertStyleElement=v();var jo=a()(Rt.Z,et);const te=Rt.Z&&Rt.Z.locals?Rt.Z.locals:void 0,re=i=>(0,r.jsx)("span",{className:te["huxy-timer"],...i});var Mt=u(845),ot={};ot.styleTagTransform=y(),ot.setAttributes=f(),ot.insert=l().bind(null,"head"),ot.domAPI=o(),ot.insertStyleElement=v();var No=a()(Mt.Z,ot);const ee=Mt.Z&&Mt.Z.locals?Mt.Z.locals:void 0,oe=i=>(0,r.jsx)("span",{className:ee["huxy-search"],...i});var Dt=u(871),at={};at.styleTagTransform=y(),at.setAttributes=f(),at.insert=l().bind(null,"head"),at.domAPI=o(),at.insertStyleElement=v();var To=a()(Dt.Z,at);const ae=Dt.Z&&Dt.Z.locals?Dt.Z.locals:void 0,ie=i=>(0,r.jsx)("span",{className:ae["huxy-location"],...i});var Bt=u(75),it={};it.styleTagTransform=y(),it.setAttributes=f(),it.insert=l().bind(null,"head"),it.domAPI=o(),it.insertStyleElement=v();var Ao=a()(Bt.Z,it);const br=Bt.Z&&Bt.Z.locals?Bt.Z.locals:void 0,le=({list:i=7,size:c="40px",shadowSize:h="50px",time:p="1.6s",style:b,className:x,...m})=>(p=t(p,"s"),(0,r.jsx)("div",{className:`${br["huxy-loading-ball"]}${x?` ${x}`:""}`,style:{"--size":c,"--shadowSize":h,"--time":`${p}s`,...b},...m,children:(Array.isArray(i)?i:[...new Array(i)]).map((g,k)=>(0,r.jsx)("div",{className:br.ball,style:{"--delay":g?.delay??`${p/((i?.length??i)+1)*(k+1)-p}s`,"--bgColor":g?.color??N()}},`huxy-loading-ball-${k}`))}));var Ft=u(943),lt={};lt.styleTagTransform=y(),lt.setAttributes=f(),lt.insert=l().bind(null,"head"),lt.domAPI=o(),lt.insertStyleElement=v();var So=a()(Ft.Z,lt);const se=Ft.Z&&Ft.Z.locals?Ft.Z.locals:void 0,ne=({type:i="spot",size:c,color:h,shadowColor:p,style:b,className:x,...m})=>(0,r.jsx)("span",{className:`${se[`huxy-${i}`]}${x?` ${x}`:""}`,style:{"--size":c??`${T(6,30)}px`,"--color":h??N(),"--shadowColor":p??N(),...b},...m});var Ht=u(389),st={};st.styleTagTransform=y(),st.setAttributes=f(),st.insert=l().bind(null,"head"),st.domAPI=o(),st.insertStyleElement=v();var Yo=a()(Ht.Z,st);const de=Ht.Z&&Ht.Z.locals?Ht.Z.locals:void 0,ce=({width:i,border:c,black:h,white:p,style:b,className:x,...m})=>(0,r.jsx)("div",{className:`${de["huxy-taiji"]} ${x}`,style:{"--width":i,"--border":c,"--black":h,"--white":p,...b},...m});var Xt=u(972),nt={};nt.styleTagTransform=y(),nt.setAttributes=f(),nt.insert=l().bind(null,"head"),nt.domAPI=o(),nt.insertStyleElement=v();var _o=a()(Xt.Z,nt);const pe=Xt.Z&&Xt.Z.locals?Xt.Z.locals:void 0,he=({width:i="200px",height:c="180px",space:h="12%",bgColor:p,style:b,className:x,...m})=>(0,r.jsx)("div",{className:`${pe.conic}${x?` ${x}`:""}`,style:{"--width":i,"--height":c,"--space":h,"--bgColor":p,...b},...m});var Ot=u(735),dt={};dt.styleTagTransform=y(),dt.setAttributes=f(),dt.insert=l().bind(null,"head"),dt.domAPI=o(),dt.insertStyleElement=v();var Io=a()(Ot.Z,dt);const Po=Ot.Z&&Ot.Z.locals?Ot.Z.locals:void 0,Qt=()=>Math.random()-.5,be=()=>~~(Qt()*T(5,10)*10),xe=()=>~~(Qt()*T(2,8)*10),ve=()=>(1-Qt())*T(1.1,1.4,!1),me=i=>i?.length?qt(i):N(),ue=({list:i=[],colors:c=[],width:h,padding:p,bgColor:b,style:x,...m})=>(0,r.jsx)("div",{className:"huxy-text-3d",style:{"--width":h,"--padding":p,"--bgColor":b,...x},...m,children:(0,r.jsx)("div",{className:"text-3d-container",children:i.map((g,k)=>{const $=g.time??T(6,24,!1).toFixed(2),Y=g.delay??-T(0,$,!1).toFixed(2);return(0,r.jsx)("div",{className:"text-3d-item",style:{"--time":`${$}s`,"--center":g.center??`${be()}%`,"--rotate":g.rotate??`${xe()}deg`,"--size":g.size??ve(),"--color":g.color??me(c),"--delay":`${Y}s`},children:(0,r.jsx)("div",{className:"text-3d-item-card",children:(0,r.jsx)("span",{className:"link animate-text",children:g.label})})},g.label)})})});var Ut=u(814),ct={};ct.styleTagTransform=y(),ct.setAttributes=f(),ct.insert=l().bind(null,"head"),ct.domAPI=o(),ct.insertStyleElement=v();var Wo=a()(Ut.Z,ct);const xr=Ut.Z&&Ut.Z.locals?Ut.Z.locals:void 0,ge=({time:i="3s",style:c,className:h,children:p,...b})=>(0,r.jsx)("div",{className:`${xr["huxy-text-filter"]}${h?` ${h}`:""}`,style:{"--time":i,...c},...b,children:(0,r.jsx)("div",{className:xr["text-filter"],children:p})});var Lt=u(325),pt={};pt.styleTagTransform=y(),pt.setAttributes=f(),pt.insert=l().bind(null,"head"),pt.domAPI=o(),pt.insertStyleElement=v();var Eo=a()(Lt.Z,pt);const fe=Lt.Z&&Lt.Z.locals?Lt.Z.locals:void 0,ye=({backColor:i="rgba(0, 0, 0, 0.3)",frontColor:c="rgba(255, 255, 255, 1)",time:h="4s",style:p,className:b,children:x,...m})=>(0,r.jsx)("div",{className:`${fe["huxy-text-loading"]}${b?` ${b}`:""}`,style:{"--backColor":i,"--frontColor":c,"--time":h,...p},...m,"data-text":x,children:x});var Jt=u(82),ht={};ht.styleTagTransform=y(),ht.setAttributes=f(),ht.insert=l().bind(null,"head"),ht.domAPI=o(),ht.insertStyleElement=v();var Ro=a()(Jt.Z,ht);const we=Jt.Z&&Jt.Z.locals?Jt.Z.locals:void 0,Ce=({startColor:i,endColor:c,style:h,className:p,children:b,...x})=>(0,r.jsx)("div",{className:`${we["huxy-text-masked"]}${p?` ${p}`:""}`,style:{"--startColor":i??N(),"--endColor":c??N(),...h},...x,children:b});var Gt=u(608),bt={};bt.styleTagTransform=y(),bt.setAttributes=f(),bt.insert=l().bind(null,"head"),bt.domAPI=o(),bt.insertStyleElement=v();var Mo=a()(Gt.Z,bt);const ke=Gt.Z&&Gt.Z.locals?Gt.Z.locals:void 0,ze=({score:i=0,backColor:c="rgba(0, 0, 0, 0.3)",frontColor:h="var(--yellow2)",style:p,className:b,children:x,backend:m,...g})=>(0,r.jsx)("div",{className:`${ke["huxy-rate-score"]}${b?` ${b}`:""}`,style:{"--backColor":c,"--frontColor":h,"--score":`${i}`.includes("%")?i:`${i*100}%`,...p},...g,"data-text":x,children:m??x})})();var je=w.$V,Ne=w.Bp,Te=w.Ak,Ae=w.Zb,gr=w.Cd,Se=w.W2,Ye=w.M9,_e=w.V5,Ie=w.A,Pe=w.QN,We=w.aI,fr=w.sA,Ee=w.TK,yr=w._k,Re=w.aV,Me=w.gb,De=w.Ye,Be=w.df,Fe=w.Ex,He=w.gd,wr=w.FM,Xe=w.ol,Oe=w.z6,Ue=w.iA,Le=w.P8,Je=w.Qp,Ge=w.QV,Ke=w.R8,Ve=w.By,qe=w.qp,Qe=w.ql,to=w.iL,ro=w.iC}}]);
