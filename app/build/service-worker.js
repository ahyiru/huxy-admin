if(!self.define){let i,n={};const u=(u,l)=>(u=new URL(u+".js",l).href,n[u]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=u,i.onload=n,document.head.appendChild(i)}else i=u,importScripts(u),n()})).then((()=>{let i=n[u];if(!i)throw new Error(`Module ${u} didn’t register its module`);return i})));self.define=(l,r)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let m={};const e=i=>u(i,s),d={module:{uri:s},exports:m,require:e};n[s]=Promise.all(l.map((i=>d[i]||e(i)))).then((i=>(r(...i),m)))}}define(["./workbox-24a20688"],(function(i){"use strict";i.setCacheNameDetails({prefix:"huxy-pwa"}),self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/huxy-admin/css/226_226_81b1c0c1.css",revision:null},{url:"/huxy-admin/css/708_708_baf510dd.css",revision:null},{url:"/huxy-admin/css/985_985_bc255860.css",revision:null},{url:"/huxy-admin/css/app_366b9e2f.css",revision:null},{url:"/huxy-admin/favicon.ico",revision:"5f6b5fd7b7c02f72252ace478cfd3f26"},{url:"/huxy-admin/img/img_0bd8fceb.png",revision:null},{url:"/huxy-admin/img/img_18156581.png",revision:null},{url:"/huxy-admin/img/img_1bf88407.png",revision:null},{url:"/huxy-admin/img/img_2bc2ed04.png",revision:null},{url:"/huxy-admin/img/img_4512a22a.png",revision:null},{url:"/huxy-admin/img/img_4542f85f.png",revision:null},{url:"/huxy-admin/img/img_4a88e074.png",revision:null},{url:"/huxy-admin/img/img_4c3443c3.png",revision:null},{url:"/huxy-admin/img/img_80fa61e6.png",revision:null},{url:"/huxy-admin/img/img_987c0fad.png",revision:null},{url:"/huxy-admin/img/img_98c65923.jpg",revision:null},{url:"/huxy-admin/img/img_b8ad20df.png",revision:null},{url:"/huxy-admin/img/img_bdef7b6c.png",revision:null},{url:"/huxy-admin/img/img_d9039ae8.png",revision:null},{url:"/huxy-admin/img/img_d9a29b56.png",revision:null},{url:"/huxy-admin/img/img_dc353f92.png",revision:null},{url:"/huxy-admin/img/img_dc6d2254.png",revision:null},{url:"/huxy-admin/img/img_e4fdac22.png",revision:null},{url:"/huxy-admin/img/img_eed84d91.png",revision:null},{url:"/huxy-admin/img/img_f2223441.png",revision:null},{url:"/huxy-admin/index.html",revision:"83d0eceda1d2169a6189d0c43d60b055"},{url:"/huxy-admin/js/226_ab456230.chunk.js",revision:null},{url:"/huxy-admin/js/484_48cade93.js",revision:null},{url:"/huxy-admin/js/579_6b1bcfdc.chunk.js",revision:null},{url:"/huxy-admin/js/697_a68725fb.js",revision:null},{url:"/huxy-admin/js/708_997c858c.chunk.js",revision:null},{url:"/huxy-admin/js/810_3c4b4add.chunk.js",revision:null},{url:"/huxy-admin/js/985_77a8200f.chunk.js",revision:null},{url:"/huxy-admin/js/app_db313a4b.js",revision:null}],{}),i.cleanupOutdatedCaches()}));
