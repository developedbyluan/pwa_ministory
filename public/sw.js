if(!self.define){let e,a={};const s=(s,n)=>(s=new URL(s+".js",n).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let o={};const r=e=>s(e,c),p={module:{uri:c},exports:o,require:r};a[c]=Promise.all(n.map((e=>p[e]||r(e)))).then((e=>(i(...e),o)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"b532b00dd26901a02880eaad047a64cb"},{url:"/_next/static/chunks/662-45445f5d76f00ffd.js",revision:"oRwB1ZPLMJdEwsW3ynecb"},{url:"/_next/static/chunks/9048db3c-751e884888046d89.js",revision:"oRwB1ZPLMJdEwsW3ynecb"},{url:"/_next/static/chunks/app/_not-found/page-8d41f7a475fe3b1f.js",revision:"oRwB1ZPLMJdEwsW3ynecb"},{url:"/_next/static/chunks/app/layout-5a5f9b62a518f5f4.js",revision:"oRwB1ZPLMJdEwsW3ynecb"},{url:"/_next/static/chunks/app/page-38fb0ec89ca81f37.js",revision:"oRwB1ZPLMJdEwsW3ynecb"},{url:"/_next/static/chunks/framework-180cc137bfad14b0.js",revision:"oRwB1ZPLMJdEwsW3ynecb"},{url:"/_next/static/chunks/main-ac9c6f84c55dacbc.js",revision:"oRwB1ZPLMJdEwsW3ynecb"},{url:"/_next/static/chunks/main-app-72998247be16000e.js",revision:"oRwB1ZPLMJdEwsW3ynecb"},{url:"/_next/static/chunks/pages/_app-88bfdd990fbfa239.js",revision:"oRwB1ZPLMJdEwsW3ynecb"},{url:"/_next/static/chunks/pages/_error-740f732e466af7da.js",revision:"oRwB1ZPLMJdEwsW3ynecb"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-df9c9cd9b1613aab.js",revision:"oRwB1ZPLMJdEwsW3ynecb"},{url:"/_next/static/css/1252ea4a0726387c.css",revision:"1252ea4a0726387c"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/_next/static/oRwB1ZPLMJdEwsW3ynecb/_buildManifest.js",revision:"e3192b0d1176251ca629c570b95ecc01"},{url:"/_next/static/oRwB1ZPLMJdEwsW3ynecb/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icon-192x192.png",revision:"3622453ac31ac3840891833702d45ae9"},{url:"/icon-512x512..png",revision:"8c30a85214df0dfa4f7143004ebe654d"},{url:"/manifest.json",revision:"ec1d4238b4dd43545030db9e21fcedf6"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/pwa-app-icons/AppImages.zip",revision:"5615ab086459e7f665f48204edaeda50"},{url:"/pwa-app-icons/android/android-launchericon-144-144.png",revision:"c9d6cfb9c4af889179aa3ac3307631f0"},{url:"/pwa-app-icons/android/android-launchericon-192-192.png",revision:"3622453ac31ac3840891833702d45ae9"},{url:"/pwa-app-icons/android/android-launchericon-48-48.png",revision:"7eb6959dd1d9799ae29762264e42ad67"},{url:"/pwa-app-icons/android/android-launchericon-512-512.png",revision:"8c30a85214df0dfa4f7143004ebe654d"},{url:"/pwa-app-icons/android/android-launchericon-72-72.png",revision:"e0a429c07870814b8e06ad358f473377"},{url:"/pwa-app-icons/android/android-launchericon-96-96.png",revision:"da8fb7e16378af8f39406af129443cca"},{url:"/pwa-app-icons/icons.json",revision:"a291acf90eb5e3afa590c540ffa74236"},{url:"/pwa-app-icons/ios/100.png",revision:"24c928a92d80e8e42806a81db67b4da4"},{url:"/pwa-app-icons/ios/1024.png",revision:"ac7aebd6cc7eb7e103682ee832ec82b8"},{url:"/pwa-app-icons/ios/114.png",revision:"af2bcdb344710a67397ddace04bcc6da"},{url:"/pwa-app-icons/ios/120.png",revision:"5562fe191820d89e9b05657517085f50"},{url:"/pwa-app-icons/ios/128.png",revision:"95ff5edbe8dfcbf24f2e309e6061495a"},{url:"/pwa-app-icons/ios/144.png",revision:"c9d6cfb9c4af889179aa3ac3307631f0"},{url:"/pwa-app-icons/ios/152.png",revision:"c1d1845adba0430c55225daf195c0afd"},{url:"/pwa-app-icons/ios/16.png",revision:"875af8b689a289d92cc55c18749cc046"},{url:"/pwa-app-icons/ios/167.png",revision:"487a3aa296261fbd58bd65c5c23bd75b"},{url:"/pwa-app-icons/ios/180.png",revision:"91efda617c77433c6c60c3a5aff564e7"},{url:"/pwa-app-icons/ios/192.png",revision:"3622453ac31ac3840891833702d45ae9"},{url:"/pwa-app-icons/ios/20.png",revision:"94a36d090631915df388d773c5935ca4"},{url:"/pwa-app-icons/ios/256.png",revision:"eaa2312eb6ba6648cf708f4a4f8a75f9"},{url:"/pwa-app-icons/ios/29.png",revision:"633bc26c14ebd39f0b87cf1745517093"},{url:"/pwa-app-icons/ios/32.png",revision:"7336d437322e165c540a5f410f65e983"},{url:"/pwa-app-icons/ios/40.png",revision:"742806c6b9de28b09124b47565e30e0e"},{url:"/pwa-app-icons/ios/50.png",revision:"c6d03b3f7ad101dda5d4b57f2a3bf2d1"},{url:"/pwa-app-icons/ios/512.png",revision:"8c30a85214df0dfa4f7143004ebe654d"},{url:"/pwa-app-icons/ios/57.png",revision:"c1479029970574889f3030131729fdcc"},{url:"/pwa-app-icons/ios/58.png",revision:"08c1dc0bfc01d61fd7b8a16095a9b13d"},{url:"/pwa-app-icons/ios/60.png",revision:"316496e85309f7f1ff83d1a1d2e2c7fc"},{url:"/pwa-app-icons/ios/64.png",revision:"75fac72e799fc4b91071ac173405e18b"},{url:"/pwa-app-icons/ios/72.png",revision:"e0a429c07870814b8e06ad358f473377"},{url:"/pwa-app-icons/ios/76.png",revision:"809be3ba6cf08b7489675b7040cdf753"},{url:"/pwa-app-icons/ios/80.png",revision:"1d6cb7f6b89af8eebea970ab878a9926"},{url:"/pwa-app-icons/ios/87.png",revision:"37fa80314f9031a674231629c06348e8"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));