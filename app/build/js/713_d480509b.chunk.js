(self.webpackChunk=self.webpackChunk||[]).push([[713],{35713:function(ro,vt,Kr){var rt;Kr.d(vt,{$V:function(){return gt},A:function(){return Zt},Ak:function(){return yt},Bp:function(){return ft},By:function(){return Ot},Cd:function(){return Ct},Ex:function(){return Pt},FM:function(){return Et},M9:function(){return zt},P8:function(){return Dt},QN:function(){return $t},QV:function(){return Ht},Qp:function(){return Ft},R8:function(){return Xt},TK:function(){return Tt},W2:function(){return kt},Ye:function(){return _t},Zb:function(){return wt},_k:function(){return At},aI:function(){return jt},aV:function(){return St},df:function(){return It},gb:function(){return Yt},gd:function(){return Wt},iA:function(){return Bt},iC:function(){return Gt},iL:function(){return Jt},ol:function(){return Rt},ql:function(){return Lt},qp:function(){return Ut},sA:function(){return Nt},z6:function(){return Mt}});var ut=Kr(27378),mt={496:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-3d-models {
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
`,""]),e.locals={};const n=e},190:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.g394U {
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
`,""]),e.locals={"huxy-card-fliper":"g394U",card:"zasVJ",front:"C5n3b",back:"UdsvP"};const n=e},271:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.huxy-icon-animate-tooltip {
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
`,""]),e.locals={};const n=e},498:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.huxy-icon-carousel-tooltip-lb {
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
`,""]),e.locals={};const n=e},804:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-border-animate-dash {
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
`,""]),e.locals={"huxy-border-wrap":"tF3eM","huxy-border-animate-dash":"BHIzz","huxy-border-animate-solid":"Ltln8"};const n=e},289:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.UJpqU {
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
`,""]),e.locals={"bg-box-dot":"UJpqU","bg-box-strip":"VXk7W","bg-box-cubestrip":"q_1dQ","bg-box-cube":"eBK09","bg-box-grid":"o9pvC","bg-box-img":"Po9ZE"};const n=e},548:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.YeHmo {
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
`,""]),e.locals={"corner-wrap":"YeHmo",corner:"vpTzN",half:"S3bPv","corner-tl":"WYlJx","corner-br":"SMovL"};const n=e},479:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.Usszw {
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
`,""]),e.locals={"corner-wrap":"Usszw","corner-half":"XcsJP"};const n=e},96:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.WY0lD {
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
`,""]),e.locals={"huxy-title-border-wrap":"WY0lD","huxy-title-border-top":"_ORAK","huxy-title-border-box":"Vggg7"};const n=e},317:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.MuUoF {
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
`,""]),e.locals={"huxy-title-header-box":"MuUoF",title:"fM2FI"};const n=e},303:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.huDNN {
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
`,""]),e.locals={"huxy-skeleton-barchart":"huDNN","sk-bar-item":"V5Fq4"};const n=e},761:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.nnDaG {
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
`,""]),e.locals={"huxy-skeleton-card":"nnDaG","sk-card-left":"iJtPz","sk-card-img":"Bya6y","sk-card-right":"c6MGh",title:"sb1hm",text:"YDDrB"};const n=e},129:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-animate-border-circle-shadow {
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
`,""]),e.locals={"huxy-animate-border-circle":"Krd0d","border-circle-item":"qcJ0N"};const n=e},917:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.myyKG {
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
`,""]),e.locals={"skeleton-container":"myyKG",title:"AXWTP"};const n=e},696:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-skeleton-dashboard {
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
`,""]),e.locals={"huxy-skeleton-dashboard":"DYspm",point:"Rg6DD"};const n=e},263:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.YWtCI {
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
`,""]),e.locals={"huxy-skeleton-list":"YWtCI","sk-list-item":"uBGAf"};const n=e},955:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.IQu9g {
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
`,""]),e.locals={"huxy-skeleton-piechart":"IQu9g"};const n=e},709:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-progress-wave {
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
`,""]),e.locals={"huxy-progress-wave":"zFNbz"};const n=e},664:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-animate-border-ring {
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
`,""]),e.locals={"huxy-animate-border-ring":"WbFYr","border-ring-item":"XIIyj"};const n=e},177:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.suwUY {
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
`,""]),e.locals={"huxy-skeleton-table":"suwUY"};const n=e},202:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-loading-wave {
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
`,""]),e.locals={"huxy-loading-wave":"d9M97"};const n=e},972:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-conic-light-animate {
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
`,""]),e.locals={conic:"_ov1n"};const n=e},75:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-loading-ball {
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
`,""]),e.locals={"huxy-loading-ball":"TikRE",ball:"CyLSO"};const n=e},871:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-location {
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
`,""]),e.locals={"huxy-location":"DdhmP"};const n=e},845:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-search {
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
`,""]),e.locals={"huxy-search":"r6hPc"};const n=e},943:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-spot {
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
`,""]),e.locals={"huxy-spot":"JsH0T","huxy-scale":"S4gb8"};const n=e},389:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.x6fRL {
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
`,""]),e.locals={"huxy-taiji":"x6fRL"};const n=e},833:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-timer {
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
`,""]),e.locals={"huxy-timer":"R1ObR"};const n=e},608:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`.q9v4I {
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
`,""]),e.locals={"huxy-rate-score":"q9v4I"};const n=e},735:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-text-3d {
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
`,""]),e.locals={};const n=e},814:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-text-filter {
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
`,""]),e.locals={"huxy-text-filter":"_zrvj","text-filter":"ww0tY"};const n=e},325:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-text-loading {
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
`,""]),e.locals={"huxy-text-loading":"ZYC7Y"};const n=e},82:(t,l,r)=>{r.d(l,{Z:()=>n});var s=r(601),a=r.n(s),d=r(609),o=r.n(d),e=o()(a());e.push([t.id,`@keyframes huxy-text-masked {
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
`,""]),e.locals={"huxy-text-masked":"zg3Sy"};const n=e},609:t=>{t.exports=function(l){var r=[];return r.toString=function(){return this.map(function(s){var a="",d=typeof s[5]<"u";return s[4]&&(a+="@supports (".concat(s[4],") {")),s[2]&&(a+="@media ".concat(s[2]," {")),d&&(a+="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {")),a+=l(s),d&&(a+="}"),s[2]&&(a+="}"),s[4]&&(a+="}"),a}).join("")},r.i=function(s,a,d,o,e){typeof s=="string"&&(s=[[null,s,void 0]]);var n={};if(d)for(var C=0;C<this.length;C++){var f=this[C][0];f!=null&&(n[f]=!0)}for(var z=0;z<s.length;z++){var v=[].concat(s[z]);d&&n[v[0]]||(typeof e<"u"&&(typeof v[5]>"u"||(v[1]="@layer".concat(v[5].length>0?" ".concat(v[5]):""," {").concat(v[1],"}")),v[5]=e),a&&(v[2]&&(v[1]="@media ".concat(v[2]," {").concat(v[1],"}")),v[2]=a),o&&(v[4]?(v[1]="@supports (".concat(v[4],") {").concat(v[1],"}"),v[4]=o):v[4]="".concat(o)),r.push(v))}},r}},601:t=>{t.exports=function(l){return l[1]}},837:(t,l,r)=>{var s=r(810),a=Symbol.for("react.element"),d=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,e=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n={key:!0,ref:!0,__self:!0,__source:!0};function C(f,z,v){var Z,y={},j=null,S=null;v!==void 0&&(j=""+v),z.key!==void 0&&(j=""+z.key),z.ref!==void 0&&(S=z.ref);for(Z in z)o.call(z,Z)&&!n.hasOwnProperty(Z)&&(y[Z]=z[Z]);if(f&&f.defaultProps)for(Z in z=f.defaultProps,z)y[Z]===void 0&&(y[Z]=z[Z]);return{$$typeof:a,type:f,key:j,ref:S,props:y,_owner:e.current}}l.Fragment=d,l.jsx=C,l.jsxs=C},322:(t,l,r)=>{t.exports=r(837)},62:t=>{var l=[];function r(d){for(var o=-1,e=0;e<l.length;e++)if(l[e].identifier===d){o=e;break}return o}function s(d,o){for(var e={},n=[],C=0;C<d.length;C++){var f=d[C],z=o.base?f[0]+o.base:f[0],v=e[z]||0,Z="".concat(z," ").concat(v);e[z]=v+1;var y=r(Z),j={css:f[1],media:f[2],sourceMap:f[3],supports:f[4],layer:f[5]};if(y!==-1)l[y].references++,l[y].updater(j);else{var S=a(j,o);o.byIndex=C,l.splice(C,0,{identifier:Z,updater:S,references:1})}n.push(Z)}return n}function a(d,o){var e=o.domAPI(o);e.update(d);var n=function(C){if(C){if(C.css===d.css&&C.media===d.media&&C.sourceMap===d.sourceMap&&C.supports===d.supports&&C.layer===d.layer)return;e.update(d=C)}else e.remove()};return n}t.exports=function(d,o){o=o||{},d=d||[];var e=s(d,o);return function(n){n=n||[];for(var C=0;C<e.length;C++){var f=e[C],z=r(f);l[z].references--}for(var v=s(n,o),Z=0;Z<e.length;Z++){var y=e[Z],j=r(y);l[j].references===0&&(l[j].updater(),l.splice(j,1))}e=v}}},793:t=>{var l={};function r(a){if(typeof l[a]>"u"){var d=document.querySelector(a);if(window.HTMLIFrameElement&&d instanceof window.HTMLIFrameElement)try{d=d.contentDocument.head}catch{d=null}l[a]=d}return l[a]}function s(a,d){var o=r(a);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(d)}t.exports=s},173:t=>{function l(r){var s=document.createElement("style");return r.setAttributes(s,r.attributes),r.insert(s,r.options),s}t.exports=l},892:(t,l,r)=>{function s(a){var d=r.nc;d&&a.setAttribute("nonce",d)}t.exports=s},36:t=>{function l(a,d,o){var e="";o.supports&&(e+="@supports (".concat(o.supports,") {")),o.media&&(e+="@media ".concat(o.media," {"));var n=typeof o.layer<"u";n&&(e+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),e+=o.css,n&&(e+="}"),o.media&&(e+="}"),o.supports&&(e+="}");var C=o.sourceMap;C&&typeof btoa<"u"&&(e+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(C))))," */")),d.styleTagTransform(e,a,d.options)}function r(a){if(a.parentNode===null)return!1;a.parentNode.removeChild(a)}function s(a){if(typeof document>"u")return{update:function(){},remove:function(){}};var d=a.insertStyleElement(a);return{update:function(o){l(d,a,o)},remove:function(){r(d)}}}t.exports=s},464:t=>{function l(r,s){if(s.styleSheet)s.styleSheet.cssText=r;else{for(;s.firstChild;)s.removeChild(s.firstChild);s.appendChild(document.createTextNode(r))}}t.exports=l},810:t=>{var l=s=>{var a={};return m.d(a,s),a},r=s=>()=>s;t.exports=rt||(rt=Kr.t(ut,2))}},tt={};function m(t){var l=tt[t];if(l!==void 0)return l.exports;var r=tt[t]={id:t,exports:{}};return mt[t](r,r.exports,m),r.exports}m.n=t=>{var l=t&&t.__esModule?()=>t.default:()=>t;return m.d(l,{a:l}),l},m.d=(t,l)=>{for(var r in l)m.o(l,r)&&!m.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:l[r]})},m.o=(t,l)=>Object.prototype.hasOwnProperty.call(t,l),m.nc=void 0;var w={};(()=>{m.d(w,{$V:()=>de,Bp:()=>pe,Ak:()=>le,Zb:()=>he,Cd:()=>xe,W2:()=>ke,M9:()=>ae,V5:()=>et,A:()=>ve,QN:()=>Vt,aI:()=>ie,sA:()=>Kt,TK:()=>ee,_k:()=>Be,aV:()=>ue,gb:()=>Ie,Ye:()=>_e,df:()=>fe,Ex:()=>we,gd:()=>qe,FM:()=>Ce,ol:()=>Se,z6:()=>We,iA:()=>Ze,P8:()=>Re,Qp:()=>Oe,QV:()=>Ue,R8:()=>Je,By:()=>Ke,qp:()=>Te,ql:()=>se,iL:()=>oe,iC:()=>je});var t=m(322);const l=i=>i?.$$typeof&&typeof i.$$typeof=="symbol"&&i.$$typeof.description==="react.element",r=(i,c="px")=>`${i}`.replace(c,"")-0;var s=m(62),a=m.n(s),d=m(36),o=m.n(d),e=m(793),n=m.n(e),C=m(892),f=m.n(C),z=m(173),v=m.n(z),Z=m(464),y=m.n(Z),j=m(496),S={};S.styleTagTransform=y(),S.setAttributes=f(),S.insert=n().bind(null,"head"),S.domAPI=o(),S.insertStyleElement=v();var eo=a()(j.Z,S);const oo=j.Z&&j.Z.locals?j.Z.locals:void 0,et=({list:i=[],size:c="360px",cardSize:h="42px",bottom:p="60px",style:b,...x})=>{const u=360/i.length;return(0,t.jsx)("div",{className:"huxy-css-3d-models",style:{"--size":c,"--cardSize":h,"--bottom":p,...b},...x,children:(0,t.jsx)("div",{className:"model-container",children:i.map((g,k)=>(0,t.jsx)("div",{className:"model-item",style:{"--rotateY":`${u*k}deg`},children:(0,t.jsxs)("a",{className:"model-card huxy-css-3d-models-tooltip",tooltip:g.label,href:g.link,target:"_blank",children:[g.icon?(0,t.jsx)("img",{src:g.icon,alt:g.label}):null,l(g.icon)?g.icon:g.icon?(0,t.jsx)("img",{src:g.icon,alt:g.label}):null]})},g.label))})})};var ur=m(271),I={};I.styleTagTransform=y(),I.setAttributes=f(),I.insert=n().bind(null,"head"),I.domAPI=o(),I.insertStyleElement=v();var ao=a()(ur.Z,I);const io=ur.Z&&ur.Z.locals?ur.Z.locals:void 0,Kt=({objs:i=[],models:c=[],height:h="480px",style:p,className:b,...x})=>(0,t.jsxs)("div",{className:`huxy-icon-animate-container${b?` ${b}`:""}`,style:{"--height":h,...p},...x,children:[(0,t.jsx)("div",{className:"huxy-icon-animate-materiels",children:i.map(({value:u,label:g,icon:k,link:$,type:Y,style:xr})=>(0,t.jsx)("a",{className:`huxy-icon-animate-tooltip obj-${u}${Y?"":" obj-img"}`,tooltip:Y?void 0:g,href:$,target:"_blank",style:xr,children:l(k)?k:(0,t.jsx)("img",{src:k,alt:g})},g))}),(0,t.jsx)(et,{list:c,size:`${r(h)-120}px`})]});var mr=m(190),P={};P.styleTagTransform=y(),P.setAttributes=f(),P.insert=n().bind(null,"head"),P.domAPI=o(),P.insertStyleElement=v();var no=a()(mr.Z,P);const gr=mr.Z&&mr.Z.locals?mr.Z.locals:void 0,Vt=({front:i,back:c,...h})=>(0,t.jsx)("div",{className:gr["huxy-card-fliper"],...h,children:(0,t.jsxs)("div",{className:gr.card,children:[(0,t.jsx)("div",{className:gr.front,children:i}),(0,t.jsx)("div",{className:gr.back,children:c})]})});var _=m(810);const qt=(i={})=>{const c=(0,_.useRef)(0),[h,p]=(0,_.useState)(i),b=(0,_.useCallback)(x=>{cancelAnimationFrame(c.current),c.current=requestAnimationFrame(()=>p(x))},[]);return(0,_.useEffect)(()=>()=>cancelAnimationFrame(c.current),[]),[h,b]},Qt=(i,c)=>{const h=(0,_.useRef)();(0,_.useEffect)(()=>{h.current=i},[i]),(0,_.useEffect)(()=>{if(c){const p=setInterval(()=>h.current(),c);return()=>clearInterval(p)}},[c])};var fr=m(498),W={};W.styleTagTransform=y(),W.setAttributes=f(),W.insert=n().bind(null,"head"),W.domAPI=o(),W.insertStyleElement=v();var lo=a()(fr.Z,W);const so=fr.Z&&fr.Z.locals?fr.Z.locals:void 0,re=(i,c=60)=>(c=1.5*c,i.map((h,p)=>{const b=Math.random();let x=1;b<.3334?x=1.2:b<.6667&&(x=.8);const u=~~(p/3),g=p%3;let k=1.5*c*u;g===1&&(k+=c/2);const $=g*c+c/6*(g+1);return h.transform={x:k,y:$,s:x},h})),te=(i,c=60)=>(c=2.25*c,i.map(h=>(h.transform.x-=2,h.transform.x+c<0&&(h.transform.x=~~(i.length/3)*c),h))),ee=({width:i=60,wait:c=56,list:h=[],className:p,...b})=>{const x=(0,_.useMemo)(()=>re(h,i),[]),[u,g]=qt(x),[k,$]=(0,_.useState)(c);Qt(()=>{const A=te(u,i);g(A)},k);const Y=A=>{$(null)},xr=A=>{$(c)};return(0,t.jsx)("div",{className:`huxy-icon-carousel${p?` ${p}`:""}`,...b,children:(0,t.jsx)("div",{className:"icon-container",children:u.map((A,Qe)=>(0,t.jsx)("a",{className:`icon-item huxy-icon-carousel-tooltip-${Qe%3===0?"lt":"lb"}`,tooltip:A.label,style:{transform:`translate(${A.transform.x}px, ${A.transform.y}px) scale(${A.transform.s})`,width:i},onMouseEnter:Y,onMouseLeave:xr,href:A.link,target:"_blank",children:(0,t.jsx)("img",{src:A.icon,alt:A.label})},A.label))})})};var yr=m(317),E={};E.styleTagTransform=y(),E.setAttributes=f(),E.insert=n().bind(null,"head"),E.domAPI=o(),E.insertStyleElement=v();var co=a()(yr.Z,E);const ot=yr.Z&&yr.Z.locals?yr.Z.locals:void 0,oe=({title:i,borderColor:c,titleWidth:h,titleHeight:p,style:b,className:x,...u})=>(0,t.jsx)("div",{className:`${ot["huxy-title-header-box"]}${x?` ${x}`:""}`,style:{"--borderColor":c,"--titleWidth":h,"--titleHeight":p,...b},...u,children:(0,t.jsx)("h2",{className:ot.title,children:i})});var wr=m(548),R={};R.styleTagTransform=y(),R.setAttributes=f(),R.insert=n().bind(null,"head"),R.domAPI=o(),R.insertStyleElement=v();var po=a()(wr.Z,R);const vr=wr.Z&&wr.Z.locals?wr.Z.locals:void 0,ae=({size:i="8px",borderColor:c="var(--appColor)",half1:h=!0,half2:p=!0,style:b,className:x,children:u,...g})=>(0,t.jsx)("div",{className:`${vr["corner-wrap"]}${x?` ${x}`:""}`,style:{"--cornerSize":i,"--borderColor":c,...b},...g,children:(0,t.jsxs)("div",{className:`${vr.corner}${h?` ${vr.half}`:""}`,children:[p?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:vr["corner-tl"]}),(0,t.jsx)("span",{className:vr["corner-br"]})]}):null,u]})});var Cr=m(479),M={};M.styleTagTransform=y(),M.setAttributes=f(),M.insert=n().bind(null,"head"),M.domAPI=o(),M.insertStyleElement=v();var ho=a()(Cr.Z,M);const at=Cr.Z&&Cr.Z.locals?Cr.Z.locals:void 0,ie=({size:i="8px",borderColor:c="var(--appColor)",style:h,className:p,children:b,...x})=>(0,t.jsx)("div",{className:`${at["corner-wrap"]}${p?` ${p}`:""}`,style:{"--cornerSize":i,"--borderColor":c,...h},...x,children:(0,t.jsx)("div",{className:at["corner-half"],children:b})});var kr=m(289),B={};B.styleTagTransform=y(),B.setAttributes=f(),B.insert=n().bind(null,"head"),B.domAPI=o(),B.insertStyleElement=v();var bo=a()(kr.Z,B);const ne=kr.Z&&kr.Z.locals?kr.Z.locals:void 0,le=({type:i="dot",bgColor:c,cubeColor:h,url:p,style:b,className:x,children:u,...g})=>{i=p?"img":i;const k=p?{backgroundImage:`url(${p})`}:void 0;return(0,t.jsx)("div",{className:`${ne[`bg-box-${i}`]}${x?` ${x}`:""}`,style:{"--bgColor":c,"--cubeColor":h,...k,...b},...g,children:u})};var zr=m(96),D={};D.styleTagTransform=y(),D.setAttributes=f(),D.insert=n().bind(null,"head"),D.domAPI=o(),D.insertStyleElement=v();var xo=a()(zr.Z,D);const Vr=zr.Z&&zr.Z.locals?zr.Z.locals:void 0,se=({children:i,title:c,fontSize:h,borderSize:p,borderColor:b="var(--appColor)",space:x="10px",style:u,className:g,...k})=>(0,t.jsxs)("div",{className:`${Vr["huxy-title-border-wrap"]}${g?` ${g}`:""}`,style:{"--borderColor":b,"--space":x,"--fontSize":h,"--borderSize":p,...u},...k,children:[(0,t.jsx)("div",{className:Vr["huxy-title-border-top"],children:c}),(0,t.jsx)("div",{className:Vr["huxy-title-border-box"],children:i})]});var Zr=m(804),F={};F.styleTagTransform=y(),F.setAttributes=f(),F.insert=n().bind(null,"head"),F.domAPI=o(),F.insertStyleElement=v();var vo=a()(Zr.Z,F);const it=Zr.Z&&Zr.Z.locals?Zr.Z.locals:void 0,de=({type:i="solid",space:c="2px",borderColor:h="var(--appColor)",style:p,className:b,children:x,...u})=>(0,t.jsx)("div",{className:`${it["huxy-border-wrap"]}${b?` ${b}`:""}`,style:{"--space":c,"--borderColor":h,...p},...u,children:(0,t.jsx)("div",{className:it[`huxy-border-animate-${i==="dash"?"dash":"solid"}`],children:x})}),ce=(i="",c=0,h="0")=>{const p=i.length;return p>=c?i:`${Array(c-p+1).join(h)}${i}`},N=()=>"#"+ce((~~(Math.random()*(1<<24))).toString(16),6),T=(i=0,c=0,h=!0)=>(i<c&&(i=[c,c=i][0]),h?~~(Math.random()*(i-c+1))+c:Math.random()*(i-c)+c),qr=(i=[])=>i[T(i.length-1)];var $r=m(303),H={};H.styleTagTransform=y(),H.setAttributes=f(),H.insert=n().bind(null,"head"),H.domAPI=o(),H.insertStyleElement=v();var uo=a()($r.Z,H);const nt=$r.Z&&$r.Z.locals?$r.Z.locals:void 0,lt=i=>i?.length?qr(i):N(),pe=({list:i=10,height:c="240px",space:h="25px",itemWidth:p="30px",colors:b=[],color:x,style:u,className:g,...k})=>(0,t.jsx)("div",{className:`${nt["huxy-skeleton-barchart"]}${g?` ${g}`:""}`,style:{"--height":c,...u},...k,children:(Array.isArray(i)?i:[...new Array(i)]).map(($,Y)=>(0,t.jsx)("div",{className:nt["sk-bar-item"],style:{"--space":h,"--itemWidth":p,"--bgColor":$?.color??x??`linear-gradient(to top, ${lt(b)}, ${lt(b)})`,"--itemHeight":$?.height??`${T(15,100)}%`,left:`${Y*(r(h)+r(p))}px`}},`huxy-skeleton-barchart-${Y}`))});var jr=m(761),X={};X.styleTagTransform=y(),X.setAttributes=f(),X.insert=n().bind(null,"head"),X.domAPI=o(),X.insertStyleElement=v();var mo=a()(jr.Z,X);const O=jr.Z&&jr.Z.locals?jr.Z.locals:void 0,he=({height:i="120px",leftColor:c,rightColor:h,topWidth:p,bottomWidth:b,style:x,className:u,...g})=>(0,t.jsxs)("div",{className:`${O["huxy-skeleton-card"]}${u?` ${u}`:""}`,style:{"--height":i,"--leftColor":c??N(),"--rightColor":h??N(),"--topWidth":p??`${T(30,60)}%`,"--bottomWidth":b??`${T(55,95)}%`,...x},...g,children:[(0,t.jsx)("div",{className:O["sk-card-left"],children:(0,t.jsx)("div",{className:O["sk-card-img"]})}),(0,t.jsxs)("div",{className:O["sk-card-right"],children:[(0,t.jsx)("h4",{className:O.title}),(0,t.jsx)("p",{className:O.text})]})]});var Nr=m(129),U={};U.styleTagTransform=y(),U.setAttributes=f(),U.insert=n().bind(null,"head"),U.domAPI=o(),U.insertStyleElement=v();var go=a()(Nr.Z,U);const st=Nr.Z&&Nr.Z.locals?Nr.Z.locals:void 0,be=[{borderWidth:"2px",borderRightColor:"rgba(2, 255, 255, 0.15)",borderTopColor:"rgba(2, 255, 255, 0.15)",borderBottomColor:"rgba(2, 255, 255, 0.15)",time:"5s"},{borderWidth:"5px",borderTopColor:"rgba(2, 255, 255, 0.7)",borderBottomColor:"rgba(2, 255, 255, 0.7)",time:"4s",rotateStart:"360deg",rotateEnd:"0deg"},{borderWidth:"3px",borderTopColor:"rgba(2, 255, 255, 0.5)",borderBottomColor:"rgba(2, 255, 255, 0.5)",time:"3s"},{borderWidth:"4px",borderTopColor:"rgba(2, 255, 255, 0.15)",time:"2s",rotateStart:"360deg",rotateEnd:"0deg"}],xe=({size:i="300px",space:c="8px",style:h,className:p,...b})=>{let x=r(c)*3;return(0,t.jsx)("div",{className:`${st["huxy-animate-border-circle"]}${p?` ${p}`:""}`,style:{"--size":i,...h},...b,children:be.map((u,g)=>(x=x+r(u.borderWidth)*2+r(c)*2,(0,t.jsx)("div",{className:st["border-circle-item"],style:{"--itemSize":`calc(${i} - ${x}px)`,"--borderWidth":u.borderWidth,"--borderLeftColor":u.borderLeftColor,"--borderRightColor":u.borderRightColor,"--borderTopColor":u.borderTopColor,"--borderBottomColor":u.borderBottomColor,"--time":u.time,"--rotateStart":u.rotateStart,"--rotateEnd":u.rotateEnd}},`huxy-animate-border-circle-${g}`)))})};var Tr=m(696),L={};L.styleTagTransform=y(),L.setAttributes=f(),L.insert=n().bind(null,"head"),L.domAPI=o(),L.insertStyleElement=v();var fo=a()(Tr.Z,L);const dt=Tr.Z&&Tr.Z.locals?Tr.Z.locals:void 0,ve=({size:i="400px",width:c="20px",space:h="20px",colors:p=[],style:b,className:x,...u})=>(0,t.jsx)("div",{className:`${dt["huxy-skeleton-dashboard"]}${x?` ${x}`:""}`,style:{"--size":i,"--width":c,"--space":h,"--color1":p[0],"--color2":p[1],"--color3":p[2],"--color4":p[3],"--color5":p[4],"--color6":p[5],"--color7":p[6],...b},...u,children:(0,t.jsx)("div",{className:dt.point})});var Ar=m(263),J={};J.styleTagTransform=y(),J.setAttributes=f(),J.insert=n().bind(null,"head"),J.domAPI=o(),J.insertStyleElement=v();var yo=a()(Ar.Z,J);const ct=Ar.Z&&Ar.Z.locals?Ar.Z.locals:void 0,ue=({row:i=8,leftColor:c="linear-gradient(to right, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.15))",rightColor:h="rgba(0, 0, 0, 0.2)",rightWidth:p="100px",itemHeight:b="20px",space:x="20px",className:u,...g})=>(0,t.jsx)("div",{className:`${ct["huxy-skeleton-list"]}${u?` ${u}`:""}`,style:{"--rightWidth":p,"--itemHeight":b,"--space":x,"--leftColor":c,"--rightColor":h},...g,children:[...new Array(i)].map((k,$)=>(0,t.jsx)("div",{className:ct["sk-list-item"]},`huxy-skeleton-list-${$}`))}),me=(i,c=100)=>{const h=[];return[...new Array(i)].map((p,b)=>{b===i-1?h[b]=c:(h[b]=T(1,c-1),c-=h[b])}),h};var Sr=m(955),G={};G.styleTagTransform=y(),G.setAttributes=f(),G.insert=n().bind(null,"head"),G.domAPI=o(),G.insertStyleElement=v();var wo=a()(Sr.Z,G);const ge=Sr.Z&&Sr.Z.locals?Sr.Z.locals:void 0,Yr=i=>i?.length?qr(i):N(),K=me(4),fe=({height:i,colors:c=[],style:h,className:p,...b})=>(0,t.jsx)("div",{className:`${ge["huxy-skeleton-piechart"]}${p?` ${p}`:""}`,style:{"--height":i,"--color1":Yr(c),"--color2":Yr(c),"--color3":Yr(c),"--color4":Yr(c),"--percent1":`${K[0]}%`,"--percent2":`${K[0]+K[1]}%`,"--percent3":`${K[0]+K[1]+K[2]}%`,"--percent4":"100%",...h},...b});var _r=m(709),V={};V.styleTagTransform=y(),V.setAttributes=f(),V.insert=n().bind(null,"head"),V.domAPI=o(),V.insertStyleElement=v();var Co=a()(_r.Z,V);const ye=_r.Z&&_r.Z.locals?_r.Z.locals:void 0,we=({percent:i,height:c="20px",bgColor:h="rgba(0, 0, 0, 0.15)",progressColor:p,borderRadius:b="4px",waveColor:x="rgba(255, 255, 255, 0.2)",waveTime:u="3s",style:g,className:k,...$})=>(0,t.jsx)("div",{className:`${ye["huxy-progress-wave"]}${k?` ${k}`:""}`,style:{"--percent":i??T(33,99),"--height":c,"--bgColor":h,"--progressColor":p??N(),"--borderRadius":b,"--waveColor":x,"--waveTime":u,...g},...$});var Ir=m(664),q={};q.styleTagTransform=y(),q.setAttributes=f(),q.insert=n().bind(null,"head"),q.domAPI=o(),q.insertStyleElement=v();var ko=a()(Ir.Z,q);const pt=Ir.Z&&Ir.Z.locals?Ir.Z.locals:void 0,Ce=({list:i=60,size:c="300px",itemWidth:h="30px",itemHeight:p="4px",bgColor:b="rgba(255, 255, 255 , 0.9)",shadowColor:x="rgba(255, 255, 255 , 0.6)",color:u,style:g,className:k,...$})=>(i=Array.isArray(i)?i:[...new Array(i)],(0,t.jsx)("div",{className:`${pt["huxy-animate-border-ring"]}${k?` ${k}`:""}`,style:{"--size":c,"--itemWidth":h,"--itemHeight":p,"--bgColor":b,"--shadowColor":x,...g},...$,children:i.map((Y,xr)=>(0,t.jsx)("div",{className:pt["border-ring-item"],style:{"--color":Y?.color??u??N(),transform:`rotate(${360/i.length*xr}deg)`}},`huxy-animate-border-ring-${xr}`))}));var Pr=m(917),Q={};Q.styleTagTransform=y(),Q.setAttributes=f(),Q.insert=n().bind(null,"head"),Q.domAPI=o(),Q.insertStyleElement=v();var zo=a()(Pr.Z,Q);const ht=Pr.Z&&Pr.Z.locals?Pr.Z.locals:void 0,ke=({children:i,hasTitle:c,titleBgColor:h,style:p,className:b,...x})=>(0,t.jsx)("div",{className:`${ht["skeleton-container"]}${c?` ${ht.title}`:""}${b?` ${b}`:""}`,style:{"--titleBgColor":h??N(),...p},...x,children:i});var Wr=m(177),rr={};rr.styleTagTransform=y(),rr.setAttributes=f(),rr.insert=n().bind(null,"head"),rr.domAPI=o(),rr.insertStyleElement=v();var Zo=a()(Wr.Z,rr);const ze=Wr.Z&&Wr.Z.locals?Wr.Z.locals:void 0,Ze=({row:i=6,col:c=8,...h})=>(0,t.jsx)("div",{className:ze["huxy-skeleton-table"],...h,children:(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsx)("tr",{children:[...new Array(c)].map((p,b)=>(0,t.jsx)("th",{children:(0,t.jsx)("span",{})},`skeleton-table-th-${b}`))})}),(0,t.jsx)("tbody",{children:[...new Array(i)].map((p,b)=>(0,t.jsx)("tr",{children:[...new Array(c)].map((x,u)=>(0,t.jsx)("td",{children:(0,t.jsx)("span",{})},`skeleton-table-tr-${b}-${u}`))},`tr-${b}`))})]})});var Er=m(202),tr={};tr.styleTagTransform=y(),tr.setAttributes=f(),tr.insert=n().bind(null,"head"),tr.domAPI=o(),tr.insertStyleElement=v();var $o=a()(Er.Z,tr);const $e=Er.Z&&Er.Z.locals?Er.Z.locals:void 0,je=({color:i="rgba(255, 255, 255, 0.1)",delay:c="2s",style:h,className:p,children:b,...x})=>(0,t.jsx)("div",{className:`${$e["huxy-loading-wave"]}${p?` ${p}`:""}`,style:{"--waveColor":i,"--waveTime":c,...h},...x,children:b});var Rr=m(833),er={};er.styleTagTransform=y(),er.setAttributes=f(),er.insert=n().bind(null,"head"),er.domAPI=o(),er.insertStyleElement=v();var jo=a()(Rr.Z,er);const Ne=Rr.Z&&Rr.Z.locals?Rr.Z.locals:void 0,Te=i=>(0,t.jsx)("span",{className:Ne["huxy-timer"],...i});var Mr=m(845),or={};or.styleTagTransform=y(),or.setAttributes=f(),or.insert=n().bind(null,"head"),or.domAPI=o(),or.insertStyleElement=v();var No=a()(Mr.Z,or);const Ae=Mr.Z&&Mr.Z.locals?Mr.Z.locals:void 0,Se=i=>(0,t.jsx)("span",{className:Ae["huxy-search"],...i});var Br=m(871),ar={};ar.styleTagTransform=y(),ar.setAttributes=f(),ar.insert=n().bind(null,"head"),ar.domAPI=o(),ar.insertStyleElement=v();var To=a()(Br.Z,ar);const Ye=Br.Z&&Br.Z.locals?Br.Z.locals:void 0,_e=i=>(0,t.jsx)("span",{className:Ye["huxy-location"],...i});var Dr=m(75),ir={};ir.styleTagTransform=y(),ir.setAttributes=f(),ir.insert=n().bind(null,"head"),ir.domAPI=o(),ir.insertStyleElement=v();var Ao=a()(Dr.Z,ir);const bt=Dr.Z&&Dr.Z.locals?Dr.Z.locals:void 0,Ie=({list:i=7,size:c="40px",shadowSize:h="50px",time:p="1.6s",style:b,className:x,...u})=>(p=r(p,"s"),(0,t.jsx)("div",{className:`${bt["huxy-loading-ball"]}${x?` ${x}`:""}`,style:{"--size":c,"--shadowSize":h,"--time":`${p}s`,...b},...u,children:(Array.isArray(i)?i:[...new Array(i)]).map((g,k)=>(0,t.jsx)("div",{className:bt.ball,style:{"--delay":g?.delay??`${p/((i?.length??i)+1)*(k+1)-p}s`,"--bgColor":g?.color??N()}},`huxy-loading-ball-${k}`))}));var Fr=m(943),nr={};nr.styleTagTransform=y(),nr.setAttributes=f(),nr.insert=n().bind(null,"head"),nr.domAPI=o(),nr.insertStyleElement=v();var So=a()(Fr.Z,nr);const Pe=Fr.Z&&Fr.Z.locals?Fr.Z.locals:void 0,We=({type:i="spot",size:c,color:h,shadowColor:p,style:b,className:x,...u})=>(0,t.jsx)("span",{className:`${Pe[`huxy-${i}`]}${x?` ${x}`:""}`,style:{"--size":c??`${T(6,30)}px`,"--color":h??N(),"--shadowColor":p??N(),...b},...u});var Hr=m(389),lr={};lr.styleTagTransform=y(),lr.setAttributes=f(),lr.insert=n().bind(null,"head"),lr.domAPI=o(),lr.insertStyleElement=v();var Yo=a()(Hr.Z,lr);const Ee=Hr.Z&&Hr.Z.locals?Hr.Z.locals:void 0,Re=({width:i,border:c,black:h,white:p,style:b,className:x,...u})=>(0,t.jsx)("div",{className:`${Ee["huxy-taiji"]} ${x}`,style:{"--width":i,"--border":c,"--black":h,"--white":p,...b},...u});var Xr=m(972),sr={};sr.styleTagTransform=y(),sr.setAttributes=f(),sr.insert=n().bind(null,"head"),sr.domAPI=o(),sr.insertStyleElement=v();var _o=a()(Xr.Z,sr);const Me=Xr.Z&&Xr.Z.locals?Xr.Z.locals:void 0,Be=({width:i="200px",height:c="180px",space:h="12%",bgColor:p,style:b,className:x,...u})=>(0,t.jsx)("div",{className:`${Me.conic}${x?` ${x}`:""}`,style:{"--width":i,"--height":c,"--space":h,"--bgColor":p,...b},...u});var Or=m(735),dr={};dr.styleTagTransform=y(),dr.setAttributes=f(),dr.insert=n().bind(null,"head"),dr.domAPI=o(),dr.insertStyleElement=v();var Io=a()(Or.Z,dr);const Po=Or.Z&&Or.Z.locals?Or.Z.locals:void 0,Qr=()=>Math.random()-.5,De=()=>~~(Qr()*T(5,10)*10),Fe=()=>~~(Qr()*T(2,8)*10),He=()=>(1-Qr())*T(1.1,1.4,!1),Xe=i=>i?.length?qr(i):N(),Oe=({list:i=[],colors:c=[],width:h,padding:p,bgColor:b,style:x,...u})=>(0,t.jsx)("div",{className:"huxy-text-3d",style:{"--width":h,"--padding":p,"--bgColor":b,...x},...u,children:(0,t.jsx)("div",{className:"text-3d-container",children:i.map((g,k)=>{const $=g.time??T(6,24,!1).toFixed(2),Y=g.delay??-T(0,$,!1).toFixed(2);return(0,t.jsx)("div",{className:"text-3d-item",style:{"--time":`${$}s`,"--center":g.center??`${De()}%`,"--rotate":g.rotate??`${Fe()}deg`,"--size":g.size??He(),"--color":g.color??Xe(c),"--delay":`${Y}s`},children:(0,t.jsx)("div",{className:"text-3d-item-card",children:(0,t.jsx)("span",{className:"link animate-text",children:g.label})})},g.label)})})});var Ur=m(814),cr={};cr.styleTagTransform=y(),cr.setAttributes=f(),cr.insert=n().bind(null,"head"),cr.domAPI=o(),cr.insertStyleElement=v();var Wo=a()(Ur.Z,cr);const xt=Ur.Z&&Ur.Z.locals?Ur.Z.locals:void 0,Ue=({time:i="3s",style:c,className:h,children:p,...b})=>(0,t.jsx)("div",{className:`${xt["huxy-text-filter"]}${h?` ${h}`:""}`,style:{"--time":i,...c},...b,children:(0,t.jsx)("div",{className:xt["text-filter"],children:p})});var Lr=m(325),pr={};pr.styleTagTransform=y(),pr.setAttributes=f(),pr.insert=n().bind(null,"head"),pr.domAPI=o(),pr.insertStyleElement=v();var Eo=a()(Lr.Z,pr);const Le=Lr.Z&&Lr.Z.locals?Lr.Z.locals:void 0,Je=({backColor:i="rgba(0, 0, 0, 0.3)",frontColor:c="rgba(255, 255, 255, 1)",time:h="4s",style:p,className:b,children:x,...u})=>(0,t.jsx)("div",{className:`${Le["huxy-text-loading"]}${b?` ${b}`:""}`,style:{"--backColor":i,"--frontColor":c,"--time":h,...p},...u,"data-text":x,children:x});var Jr=m(82),hr={};hr.styleTagTransform=y(),hr.setAttributes=f(),hr.insert=n().bind(null,"head"),hr.domAPI=o(),hr.insertStyleElement=v();var Ro=a()(Jr.Z,hr);const Ge=Jr.Z&&Jr.Z.locals?Jr.Z.locals:void 0,Ke=({startColor:i,endColor:c,style:h,className:p,children:b,...x})=>(0,t.jsx)("div",{className:`${Ge["huxy-text-masked"]}${p?` ${p}`:""}`,style:{"--startColor":i??N(),"--endColor":c??N(),...h},...x,children:b});var Gr=m(608),br={};br.styleTagTransform=y(),br.setAttributes=f(),br.insert=n().bind(null,"head"),br.domAPI=o(),br.insertStyleElement=v();var Mo=a()(Gr.Z,br);const Ve=Gr.Z&&Gr.Z.locals?Gr.Z.locals:void 0,qe=({score:i=0,backColor:c="rgba(0, 0, 0, 0.3)",frontColor:h="var(--yellow2)",style:p,className:b,children:x,backend:u,...g})=>(0,t.jsx)("div",{className:`${Ve["huxy-rate-score"]}${b?` ${b}`:""}`,style:{"--backColor":c,"--frontColor":h,"--score":`${i}`.includes("%")?i:`${i*100}%`,...p},...g,"data-text":x,children:u??x})})();var gt=w.$V,ft=w.Bp,yt=w.Ak,wt=w.Zb,Ct=w.Cd,kt=w.W2,zt=w.M9,to=w.V5,Zt=w.A,$t=w.QN,jt=w.aI,Nt=w.sA,Tt=w.TK,At=w._k,St=w.aV,Yt=w.gb,_t=w.Ye,It=w.df,Pt=w.Ex,Wt=w.gd,Et=w.FM,Rt=w.ol,Mt=w.z6,Bt=w.iA,Dt=w.P8,Ft=w.Qp,Ht=w.QV,Xt=w.R8,Ot=w.By,Ut=w.qp,Lt=w.ql,Jt=w.iL,Gt=w.iC}}]);
