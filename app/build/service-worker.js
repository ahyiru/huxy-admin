if(!self.define){let i,n={};const u=(u,l)=>(u=new URL(u+".js",l).href,n[u]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=u,i.onload=n,document.head.appendChild(i)}else i=u,importScripts(u),n()})).then((()=>{let i=n[u];if(!i)throw new Error(`Module ${u} didn’t register its module`);return i})));self.define=(l,r)=>{const e=i||("document"in self?document.currentScript.src:"")||location.href;if(n[e])return;let s={};const m=i=>u(i,e),d={module:{uri:e},exports:s,require:m};n[e]=Promise.all(l.map((i=>d[i]||m(i)))).then((i=>(r(...i),s)))}}define(["./workbox-df93d7de"],(function(i){"use strict";i.setCacheNameDetails({prefix:"huxy-pwa"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/huxy-admin/css/382_382_baf510dd.css",revision:null},{url:"/huxy-admin/css/547_547_670453fc.css",revision:null},{url:"/huxy-admin/css/878_878_34b96f97.css",revision:null},{url:"/huxy-admin/css/app_9063c87c.css",revision:null},{url:"/huxy-admin/favicon.ico",revision:"5f6b5fd7b7c02f72252ace478cfd3f26"},{url:"/huxy-admin/img/img_0bd8fceb.png",revision:null},{url:"/huxy-admin/img/img_18156581.png",revision:null},{url:"/huxy-admin/img/img_1bf88407.png",revision:null},{url:"/huxy-admin/img/img_2bc2ed04.png",revision:null},{url:"/huxy-admin/img/img_4512a22a.png",revision:null},{url:"/huxy-admin/img/img_4542f85f.png",revision:null},{url:"/huxy-admin/img/img_4a88e074.png",revision:null},{url:"/huxy-admin/img/img_4c3443c3.png",revision:null},{url:"/huxy-admin/img/img_80fa61e6.png",revision:null},{url:"/huxy-admin/img/img_987c0fad.png",revision:null},{url:"/huxy-admin/img/img_98c65923.jpg",revision:null},{url:"/huxy-admin/img/img_b8ad20df.png",revision:null},{url:"/huxy-admin/img/img_bdef7b6c.png",revision:null},{url:"/huxy-admin/img/img_d9039ae8.png",revision:null},{url:"/huxy-admin/img/img_d9a29b56.png",revision:null},{url:"/huxy-admin/img/img_dc353f92.png",revision:null},{url:"/huxy-admin/img/img_dc6d2254.png",revision:null},{url:"/huxy-admin/img/img_e4fdac22.png",revision:null},{url:"/huxy-admin/img/img_eed84d91.png",revision:null},{url:"/huxy-admin/img/img_f2223441.png",revision:null},{url:"/huxy-admin/index.html",revision:"6344fe41b35cb5d1dcda83d622b7e562"},{url:"/huxy-admin/js/382_021195b7.chunk.js",revision:null},{url:"/huxy-admin/js/484_48cade93.js",revision:null},{url:"/huxy-admin/js/547_8787f8c0.chunk.js",revision:null},{url:"/huxy-admin/js/579_1da4cd0e.chunk.js",revision:null},{url:"/huxy-admin/js/697_587e769c.js",revision:null},{url:"/huxy-admin/js/810_abaeffcb.chunk.js",revision:null},{url:"/huxy-admin/js/878_a082b439.chunk.js",revision:null},{url:"/huxy-admin/js/app_0aa36058.js",revision:null}],{})}));
