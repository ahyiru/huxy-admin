if(!self.define){let i,n={};const u=(u,l)=>(u=new URL(u+".js",l).href,n[u]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=u,i.onload=n,document.head.appendChild(i)}else i=u,importScripts(u),n()})).then((()=>{let i=n[u];if(!i)throw new Error(`Module ${u} didn’t register its module`);return i})));self.define=(l,s)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let e={};const m=i=>u(i,r),d={module:{uri:r},exports:e,require:m};n[r]=Promise.all(l.map((i=>d[i]||m(i)))).then((i=>(s(...i),e)))}}define(["./workbox-cc9d59eb"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/huxy-admin/css/178_178_65af2bd0.css",revision:null},{url:"/huxy-admin/css/19_19_3ee95983.css",revision:null},{url:"/huxy-admin/css/581_581_6ca0545f.css",revision:null},{url:"/huxy-admin/css/583_583_90efdf5a.css",revision:null},{url:"/huxy-admin/css/app_adf0ea09.css",revision:null},{url:"/huxy-admin/favicon.png",revision:"5f6b5fd7b7c02f72252ace478cfd3f26"},{url:"/huxy-admin/img/img_0bd8fceb.png",revision:null},{url:"/huxy-admin/img/img_18156581.png",revision:null},{url:"/huxy-admin/img/img_1bf88407.png",revision:null},{url:"/huxy-admin/img/img_2bc2ed04.png",revision:null},{url:"/huxy-admin/img/img_4512a22a.png",revision:null},{url:"/huxy-admin/img/img_4542f85f.png",revision:null},{url:"/huxy-admin/img/img_4a88e074.png",revision:null},{url:"/huxy-admin/img/img_4c3443c3.png",revision:null},{url:"/huxy-admin/img/img_80fa61e6.png",revision:null},{url:"/huxy-admin/img/img_987c0fad.png",revision:null},{url:"/huxy-admin/img/img_98c65923.jpg",revision:null},{url:"/huxy-admin/img/img_b8ad20df.png",revision:null},{url:"/huxy-admin/img/img_bdef7b6c.png",revision:null},{url:"/huxy-admin/img/img_d9039ae8.png",revision:null},{url:"/huxy-admin/img/img_d9a29b56.png",revision:null},{url:"/huxy-admin/img/img_dc353f92.png",revision:null},{url:"/huxy-admin/img/img_dc6d2254.png",revision:null},{url:"/huxy-admin/img/img_e4fdac22.png",revision:null},{url:"/huxy-admin/img/img_eed84d91.png",revision:null},{url:"/huxy-admin/img/img_f2223441.png",revision:null},{url:"/huxy-admin/index.html",revision:"eed7fa533f93c1a970684d7cf2826909"},{url:"/huxy-admin/js/178_1cd7d641.chunk.js",revision:null},{url:"/huxy-admin/js/19_be9a7827.chunk.js",revision:null},{url:"/huxy-admin/js/274_c04f2023.chunk.js",revision:null},{url:"/huxy-admin/js/484_84cfb7df.js",revision:null},{url:"/huxy-admin/js/506_0c2cb765.js",revision:null},{url:"/huxy-admin/js/581_2848d419.chunk.js",revision:null},{url:"/huxy-admin/js/583_f9d4dcde.chunk.js",revision:null},{url:"/huxy-admin/js/713_dfa166db.chunk.js",revision:null},{url:"/huxy-admin/js/app_a9749f72.js",revision:null}],{}),i.cleanupOutdatedCaches()}));
