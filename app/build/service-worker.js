if(!self.define){let i,n={};const u=(u,l)=>(u=new URL(u+".js",l).href,n[u]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=u,i.onload=n,document.head.appendChild(i)}else i=u,importScripts(u),n()})).then((()=>{let i=n[u];if(!i)throw new Error(`Module ${u} didn’t register its module`);return i})));self.define=(l,s)=>{const r=i||("document"in self?document.currentScript.src:"")||location.href;if(n[r])return;let m={};const e=i=>u(i,r),d={module:{uri:r},exports:m,require:e};n[r]=Promise.all(l.map((i=>d[i]||e(i)))).then((i=>(s(...i),m)))}}define(["./workbox-6db16f92"],(function(i){"use strict";self.skipWaiting(),i.clientsClaim(),i.precacheAndRoute([{url:"/huxy-admin/css/25_25_7cf508be.css",revision:null},{url:"/huxy-admin/css/270_270_258fe0ce.css",revision:null},{url:"/huxy-admin/css/363_363_b13ca5da.css",revision:null},{url:"/huxy-admin/css/818_818_32699289.css",revision:null},{url:"/huxy-admin/css/831_831_274d1136.css",revision:null},{url:"/huxy-admin/css/909_909_35e55ac2.css",revision:null},{url:"/huxy-admin/css/961_961_f2afeff9.css",revision:null},{url:"/huxy-admin/css/app_8d751bcc.css",revision:null},{url:"/huxy-admin/favicon.png",revision:"0dd32d28d6eda7e772b8a6246f150654"},{url:"/huxy-admin/img/img_00ed15c3.png",revision:null},{url:"/huxy-admin/img/img_05d91403.png",revision:null},{url:"/huxy-admin/img/img_0bd8fceb.png",revision:null},{url:"/huxy-admin/img/img_11f7f8e1.png",revision:null},{url:"/huxy-admin/img/img_18156581.png",revision:null},{url:"/huxy-admin/img/img_1bf88407.png",revision:null},{url:"/huxy-admin/img/img_2bc2ed04.png",revision:null},{url:"/huxy-admin/img/img_3b260126.png",revision:null},{url:"/huxy-admin/img/img_4512a22a.png",revision:null},{url:"/huxy-admin/img/img_4542f85f.png",revision:null},{url:"/huxy-admin/img/img_47f2615a.png",revision:null},{url:"/huxy-admin/img/img_4a88e074.png",revision:null},{url:"/huxy-admin/img/img_4c3443c3.png",revision:null},{url:"/huxy-admin/img/img_534c19b0.png",revision:null},{url:"/huxy-admin/img/img_67c69369.png",revision:null},{url:"/huxy-admin/img/img_80fa61e6.png",revision:null},{url:"/huxy-admin/img/img_85dda956.png",revision:null},{url:"/huxy-admin/img/img_8c276863.png",revision:null},{url:"/huxy-admin/img/img_987c0fad.png",revision:null},{url:"/huxy-admin/img/img_98c65923.jpg",revision:null},{url:"/huxy-admin/img/img_ac6bf8c0.jpg",revision:null},{url:"/huxy-admin/img/img_b8ad20df.png",revision:null},{url:"/huxy-admin/img/img_bb332316.png",revision:null},{url:"/huxy-admin/img/img_bdef7b6c.png",revision:null},{url:"/huxy-admin/img/img_c50c8ae6.png",revision:null},{url:"/huxy-admin/img/img_c8f41c35.png",revision:null},{url:"/huxy-admin/img/img_cb9d1666.png",revision:null},{url:"/huxy-admin/img/img_cdbb0313.png",revision:null},{url:"/huxy-admin/img/img_d9039ae8.png",revision:null},{url:"/huxy-admin/img/img_d9a29b56.png",revision:null},{url:"/huxy-admin/img/img_dc353f92.png",revision:null},{url:"/huxy-admin/img/img_dc6d2254.png",revision:null},{url:"/huxy-admin/img/img_e4fdac22.png",revision:null},{url:"/huxy-admin/img/img_eed84d91.png",revision:null},{url:"/huxy-admin/img/img_f2223441.png",revision:null},{url:"/huxy-admin/img/img_f98c79fb.png",revision:null},{url:"/huxy-admin/index.html",revision:"946a65f77567336d63342dafc09f2758"},{url:"/huxy-admin/js/113_1ab3e0d3.js",revision:null},{url:"/huxy-admin/js/121_433d5bbe.js",revision:null},{url:"/huxy-admin/js/179_e1c60b5b.js",revision:null},{url:"/huxy-admin/js/196_8d2a3472.chunk.js",revision:null},{url:"/huxy-admin/js/219_b90cd99c.chunk.js",revision:null},{url:"/huxy-admin/js/229_2b68ac76.chunk.js",revision:null},{url:"/huxy-admin/js/25_f44cc73e.chunk.js",revision:null},{url:"/huxy-admin/js/270_63faa947.chunk.js",revision:null},{url:"/huxy-admin/js/321_d4e4ba11.chunk.js",revision:null},{url:"/huxy-admin/js/363_ec70052f.chunk.js",revision:null},{url:"/huxy-admin/js/370_8de4dd80.chunk.js",revision:null},{url:"/huxy-admin/js/38_5d473255.chunk.js",revision:null},{url:"/huxy-admin/js/411_7a98ed90.js",revision:null},{url:"/huxy-admin/js/415_211cba34.js",revision:null},{url:"/huxy-admin/js/423_c8ef8b9c.chunk.js",revision:null},{url:"/huxy-admin/js/451_95c80459.chunk.js",revision:null},{url:"/huxy-admin/js/458_3919d549.chunk.js",revision:null},{url:"/huxy-admin/js/476_430ea9b0.chunk.js",revision:null},{url:"/huxy-admin/js/481_bd6ffdea.chunk.js",revision:null},{url:"/huxy-admin/js/484_bc1d4d87.js",revision:null},{url:"/huxy-admin/js/507_293274b9.chunk.js",revision:null},{url:"/huxy-admin/js/512_7db0c25e.chunk.js",revision:null},{url:"/huxy-admin/js/51_f837643d.chunk.js",revision:null},{url:"/huxy-admin/js/541_b27e0d5f.js",revision:null},{url:"/huxy-admin/js/550_b489909b.chunk.js",revision:null},{url:"/huxy-admin/js/595_8f826e11.chunk.js",revision:null},{url:"/huxy-admin/js/614_13cf1f54.chunk.js",revision:null},{url:"/huxy-admin/js/713_271ca3c0.chunk.js",revision:null},{url:"/huxy-admin/js/721_64eb29e2.chunk.js",revision:null},{url:"/huxy-admin/js/729_0775e8f2.js",revision:null},{url:"/huxy-admin/js/734_de141372.chunk.js",revision:null},{url:"/huxy-admin/js/749_fd650142.js",revision:null},{url:"/huxy-admin/js/74_65f27c00.js",revision:null},{url:"/huxy-admin/js/754_9e5e0f50.chunk.js",revision:null},{url:"/huxy-admin/js/759_4d32d53a.js",revision:null},{url:"/huxy-admin/js/818_efa2157e.chunk.js",revision:null},{url:"/huxy-admin/js/831_1bf50481.chunk.js",revision:null},{url:"/huxy-admin/js/833_718396d1.chunk.js",revision:null},{url:"/huxy-admin/js/852_c37647f3.js",revision:null},{url:"/huxy-admin/js/894_79d3a2b2.chunk.js",revision:null},{url:"/huxy-admin/js/909_1397c1ac.chunk.js",revision:null},{url:"/huxy-admin/js/923_db76797a.js",revision:null},{url:"/huxy-admin/js/925_b568f38a.chunk.js",revision:null},{url:"/huxy-admin/js/950_90b9498d.chunk.js",revision:null},{url:"/huxy-admin/js/957_90858dce.chunk.js",revision:null},{url:"/huxy-admin/js/961_2f2f3735.chunk.js",revision:null},{url:"/huxy-admin/js/988_6a7eea89.chunk.js",revision:null},{url:"/huxy-admin/js/app_542cad00.js",revision:null}],{}),i.cleanupOutdatedCaches()}));
