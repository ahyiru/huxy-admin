if(!self.define){let n,i={};const u=(u,s)=>(u=new URL(u+".js",s).href,i[u]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=u,n.onload=i,document.head.appendChild(n)}else n=u,importScripts(u),i()})).then((()=>{let n=i[u];if(!n)throw new Error(`Module ${u} didn’t register its module`);return n})));self.define=(s,l)=>{const e=n||("document"in self?document.currentScript.src:"")||location.href;if(i[e])return;let r={};const a=n=>u(n,e),d={module:{uri:e},exports:r,require:a};i[e]=Promise.all(s.map((n=>d[n]||a(n)))).then((n=>(l(...n),r)))}}define(["./workbox-e53a3393"],(function(n){"use strict";n.setCacheNameDetails({prefix:"huxy-pwa"}),self.skipWaiting(),n.clientsClaim(),n.precacheAndRoute([{url:"/huxy-admin/css/682_682_63e979a2.css",revision:null},{url:"/huxy-admin/css/785_785_ca345ae6.css",revision:null},{url:"/huxy-admin/css/7_7_60816569.css",revision:null},{url:"/huxy-admin/css/926_926_e8426295.css",revision:null},{url:"/huxy-admin/css/app_2a9c07e4.css",revision:null},{url:"/huxy-admin/favicon.ico",revision:"0dd32d28d6eda7e772b8a6246f150654"},{url:"/huxy-admin/img/img_2aad651e.png",revision:null},{url:"/huxy-admin/img/img_5edc1fb3.png",revision:null},{url:"/huxy-admin/img/img_d4294eef.jpg",revision:null},{url:"/huxy-admin/img/img_e4d5dcd0.png",revision:null},{url:"/huxy-admin/index.html",revision:"92b18f1a95c29daebf3b9d512978a24b"},{url:"/huxy-admin/js/102_dfc92a4e.js",revision:null},{url:"/huxy-admin/js/343_e718c002.chunk.js",revision:null},{url:"/huxy-admin/js/456_39098656.chunk.js",revision:null},{url:"/huxy-admin/js/484_07753da4.js",revision:null},{url:"/huxy-admin/js/546_717a47f5.chunk.js",revision:null},{url:"/huxy-admin/js/5_4226c6f0.chunk.js",revision:null},{url:"/huxy-admin/js/682_9c7ae1f9.chunk.js",revision:null},{url:"/huxy-admin/js/785_4b783eea.chunk.js",revision:null},{url:"/huxy-admin/js/7_1a2e6f5a.chunk.js",revision:null},{url:"/huxy-admin/js/828_cbd9a987.chunk.js",revision:null},{url:"/huxy-admin/js/858_707c83d8.js",revision:null},{url:"/huxy-admin/js/885_ec2229c5.chunk.js",revision:null},{url:"/huxy-admin/js/926_0acba055.chunk.js",revision:null},{url:"/huxy-admin/js/app_750ac1e6.js",revision:null},{url:"/huxy-admin/js/uiframe_bbd5aa74.js",revision:null}],{})}));
