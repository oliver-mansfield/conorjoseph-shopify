if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>i(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/30-b05ff1243c4dfb97.js",revision:"b05ff1243c4dfb97"},{url:"/_next/static/chunks/353-5bc2a1f7876425a5.js",revision:"5bc2a1f7876425a5"},{url:"/_next/static/chunks/664-490830c05ded00aa.js",revision:"490830c05ded00aa"},{url:"/_next/static/chunks/731-08c75999dd48a0f2.js",revision:"08c75999dd48a0f2"},{url:"/_next/static/chunks/94726e6d-bccd49b8ad175122.js",revision:"bccd49b8ad175122"},{url:"/_next/static/chunks/ed81d8d0-5b0bf5c066ed51b1.js",revision:"5b0bf5c066ed51b1"},{url:"/_next/static/chunks/framework-7751730b10fa0f74.js",revision:"7751730b10fa0f74"},{url:"/_next/static/chunks/main-a1797ee4c87c0f94.js",revision:"a1797ee4c87c0f94"},{url:"/_next/static/chunks/pages/_app-82e942161e5ab75d.js",revision:"82e942161e5ab75d"},{url:"/_next/static/chunks/pages/_error-e4f561a102d9bb14.js",revision:"e4f561a102d9bb14"},{url:"/_next/static/chunks/pages/checkout-b22509f33ac7fedc.js",revision:"b22509f33ac7fedc"},{url:"/_next/static/chunks/pages/index-2a2f66e12ab819da.js",revision:"2a2f66e12ab819da"},{url:"/_next/static/chunks/pages/products-b6321933a69eec57.js",revision:"b6321933a69eec57"},{url:"/_next/static/chunks/pages/products/%5BproductHandle%5D-1b2bcc16e33fa004.js",revision:"1b2bcc16e33fa004"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-59c5c889f52620d6.js",revision:"59c5c889f52620d6"},{url:"/_next/static/css/72529a315ba7e050.css",revision:"72529a315ba7e050"},{url:"/_next/static/rEEGht9P97zl_7W_i-BzN/_buildManifest.js",revision:"0b39d41dce6e84721102710d44858ae7"},{url:"/_next/static/rEEGht9P97zl_7W_i-BzN/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/favicon-32x32.png",revision:"61ca37a699f710dc5ddc72cf4e983e79"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/images/articulus-model-1.jpg",revision:"f140a483dc3f0cf00dd9390a052dd3bf"},{url:"/images/articulus-model-2.jpg",revision:"c95be5fd9bd7746adf137b7a9e835320"},{url:"/images/girl.png",revision:"0814b4840dea7310e74e6c80c5fd8781"},{url:"/images/girl2.jpg",revision:"3fb7de94baba95a9fbc1dd68fb57be6f"},{url:"/images/guy.png",revision:"cfac0377dce077dfc57cb5a5ece73691"},{url:"/images/icon-close.svg",revision:"0105bf92c561cf10edc6cf898d805411"},{url:"/images/icons/icon-128x128.png",revision:"9754d686290c173c1cb034f53a77320e"},{url:"/images/icons/icon-144x144.png",revision:"996adc8fff90edf417bfa83a10670043"},{url:"/images/icons/icon-152x152.png",revision:"20ada3ecd1ec9ecd4d2c6a8aebc49a71"},{url:"/images/icons/icon-192x192.png",revision:"de9c8c4103d85c3bb518f537cfd0449b"},{url:"/images/icons/icon-384x384.png",revision:"29cba9a97ebc980e894dab7140bc8360"},{url:"/images/icons/icon-512x512.png",revision:"5107bb1aa0061a77e7c1165261dc3def"},{url:"/images/icons/icon-72x72.png",revision:"c131958f3ca17870551c9084954f321c"},{url:"/images/icons/icon-96x96.png",revision:"2e795ccb9efceadae5e0c0766e952f49"},{url:"/images/manibus-model-1.jpg",revision:"3fb7de94baba95a9fbc1dd68fb57be6f"},{url:"/images/manibus-model-2.jpg",revision:"29b3e6bbd0821a6ff637a3b971a628a3"},{url:"/images/manibus.jpg",revision:"8a452ddbcfff3ffe1a2b079469631360"},{url:"/images/manibus.png",revision:"f315d63d915f9bbf6e303ba584a186e5"},{url:"/images/pellis-model.jpg",revision:"86a3f6ebcc72e651e9888a298a6067cb"},{url:"/manifest.json",revision:"08d3157c886954a7309bb4735a653299"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
