if(!self.define){let i,n={};const u=(u,l)=>(u=new URL(u+".js",l).href,n[u]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=u,i.onload=n,document.head.appendChild(i)}else i=u,importScripts(u),n()})).then((()=>{let i=n[u];if(!i)throw new Error(`Module ${u} didn’t register its module`);return i})));self.define=(l,r)=>{const e=i||("document"in self?document.currentScript.src:"")||location.href;if(n[e])return;let s={};const m=i=>u(i,e),d={module:{uri:e},exports:s,require:m};n[e]=Promise.all(l.map((i=>d[i]||m(i)))).then((i=>(r(...i),s)))}}define(["./workbox-24a20688"],(function(i){"use strict";i.setCacheNameDetails({prefix:"huxy-pwa"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/huxy-admin/css/356_356_b3630c50.css",revision:null},{url:"/huxy-admin/css/518_518_967e5d90.css",revision:null},{url:"/huxy-admin/css/918_918_baf510dd.css",revision:null},{url:"/huxy-admin/css/app_130d8ede.css",revision:null},{url:"/huxy-admin/favicon.ico",revision:"5f6b5fd7b7c02f72252ace478cfd3f26"},{url:"/huxy-admin/img/img_0bd8fceb.png",revision:null},{url:"/huxy-admin/img/img_18156581.png",revision:null},{url:"/huxy-admin/img/img_1bf88407.png",revision:null},{url:"/huxy-admin/img/img_2bc2ed04.png",revision:null},{url:"/huxy-admin/img/img_4512a22a.png",revision:null},{url:"/huxy-admin/img/img_4542f85f.png",revision:null},{url:"/huxy-admin/img/img_4a88e074.png",revision:null},{url:"/huxy-admin/img/img_4c3443c3.png",revision:null},{url:"/huxy-admin/img/img_80fa61e6.png",revision:null},{url:"/huxy-admin/img/img_987c0fad.png",revision:null},{url:"/huxy-admin/img/img_98c65923.jpg",revision:null},{url:"/huxy-admin/img/img_b8ad20df.png",revision:null},{url:"/huxy-admin/img/img_bdef7b6c.png",revision:null},{url:"/huxy-admin/img/img_d9039ae8.png",revision:null},{url:"/huxy-admin/img/img_d9a29b56.png",revision:null},{url:"/huxy-admin/img/img_dc353f92.png",revision:null},{url:"/huxy-admin/img/img_dc6d2254.png",revision:null},{url:"/huxy-admin/img/img_e4fdac22.png",revision:null},{url:"/huxy-admin/img/img_eed84d91.png",revision:null},{url:"/huxy-admin/img/img_f2223441.png",revision:null},{url:"/huxy-admin/index.html",revision:"12854458d3ac18327000960fdd596a5d"},{url:"/huxy-admin/js/356_7d937d0b.chunk.js",revision:null},{url:"/huxy-admin/js/484_70de6340.js",revision:null},{url:"/huxy-admin/js/518_05fd853a.chunk.js",revision:null},{url:"/huxy-admin/js/579_70df9d2d.chunk.js",revision:null},{url:"/huxy-admin/js/697_96d3ed61.js",revision:null},{url:"/huxy-admin/js/810_b11726f7.chunk.js",revision:null},{url:"/huxy-admin/js/918_5ffb75e3.chunk.js",revision:null},{url:"/huxy-admin/js/app_0f7edf4a.js",revision:null}],{}),i.cleanupOutdatedCaches()}));
