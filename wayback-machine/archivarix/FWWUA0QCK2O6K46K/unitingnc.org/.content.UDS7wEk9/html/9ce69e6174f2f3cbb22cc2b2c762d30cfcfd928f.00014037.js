/*! This file is auto-generated */
this.wp=this.wp||{},this.wp.apiFetch=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s="jqrR")}({Mmq9:function(e,t){e.exports=window.wp.url},jqrR:function(e,t,r){"use strict";r.r(t);var n=r("l3Sj");var o=function(e){const t=(e,r)=>{const{headers:n={}}=e;for(const o in n)if("x-wp-nonce"===o.toLowerCase()&&n[o]===t.nonce)return r(e);return r({...e,headers:{...n,"X-WP-Nonce":t.nonce}})};return t.nonce=e,t};var a=(e,t)=>{let r,n,o=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(r=e.namespace.replace(/^\/|\/$/g,""),n=e.endpoint.replace(/^\//,""),o=n?r+"/"+n:r),delete e.namespace,delete e.endpoint,t({...e,path:o})};var s=e=>(t,r)=>a(t,t=>{let n,o=t.url,a=t.path;return"string"==typeof a&&(n=e,-1!==e.indexOf("?")&&(a=a.replace("?","&")),a=a.replace(/^\//,""),"string"==typeof n&&-1!==n.indexOf("?")&&(a=a.replace("?","&")),o=n+a),r({...t,url:o})});function c(e){const t=e.split("?"),r=t[1],n=t[0];return r?n+"?"+r.split("&").map(e=>e.split("=")).sort((e,t)=>e[0].localeCompare(t[0])).map(e=>e.join("=")).join("&"):n}var i=function(e){const t=Object.keys(e).reduce((t,r)=>(t[c(r)]=e[r],t),{});return(e,r)=>{const{parse:n=!0}=e;if("string"==typeof e.path){const r=e.method||"GET",o=c(e.path);if("GET"===r&&t[o]){const e=t[o];return delete t[o],Promise.resolve(n?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}if("OPTIONS"===r&&t[r]&&t[r][o])return Promise.resolve(n?t[r][o].body:t[r][o])}return r(e)}},u=r("Mmq9");const p=({path:e,url:t,...r},n)=>({...r,url:t&&Object(u.addQueryArgs)(t,n),path:e&&Object(u.addQueryArgs)(e,n)}),d=e=>e.json?e.json():Promise.reject(e),l=e=>{const{next:t}=(e=>{if(!e)return{};const t=e.match(/<([^>]+)>; rel="next"/);return t?{next:t[1]}:{}})(e.headers.get("link"));return t};var f=async(e,t)=>{if(!1===e.parse)return t(e);if(!(e=>{const t=!!e.path&&-1!==e.path.indexOf("per_page=-1"),r=!!e.url&&-1!==e.url.indexOf("per_page=-1");return t||r})(e))return t(e);const r=await x({...p(e,{per_page:100}),parse:!1}),n=await d(r);if(!Array.isArray(n))return n;let o=l(r);if(!o)return n;let a=[].concat(n);for(;o;){const t=await x({...e,path:void 0,url:o,parse:!1}),r=await d(t);a=a.concat(r),o=l(t)}return a};const h=new Set(["PATCH","PUT","DELETE"]),w="GET";const m=(e,t=!0)=>Promise.resolve(((e,t=!0)=>t?204===e.status?null:e.json?e.json():Promise.reject(e):e)(e,t)).catch(e=>j(e,t));function j(e,t=!0){if(!t)throw e;return(e=>{const t={code:"invalid_json",message:Object(n.__)("The response is not a valid JSON response.")};if(!e||!e.json)throw t;return e.json().catch(()=>{throw t})})(e).then(e=>{const t={code:"unknown_error",message:Object(n.__)("An unknown error occurred.")};throw e||t})}var y=(e,t)=>{if(!(e.path&&-1!==e.path.indexOf("/wp/v2/media")||e.url&&-1!==e.url.indexOf("/wp/v2/media")))return t(e);let r=0;const o=e=>(r++,t({path:`/wp/v2/media/${e}/post-process`,method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch(()=>r<5?o(e):(t({path:`/wp/v2/media/${e}?force=true`,method:"DELETE"}),Promise.reject())));return t({...e,parse:!1}).catch(t=>{const r=t.headers.get("x-wp-upload-attachment-id");return t.status>=500&&t.status<600&&r?o(r).catch(()=>!1!==e.parse?Promise.reject({code:"post_process",message:Object(n.__)("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(t)):j(t,e.parse)}).then(t=>m(t,e.parse))};const g={Accept:"application/json, */*;q=0.1"},O={credentials:"include"},b=[(e,t)=>("string"!=typeof e.url||Object(u.hasQueryArg)(e.url,"_locale")||(e.url=Object(u.addQueryArgs)(e.url,{_locale:"user"})),"string"!=typeof e.path||Object(u.hasQueryArg)(e.path,"_locale")||(e.path=Object(u.addQueryArgs)(e.path,{_locale:"user"})),t(e)),a,(e,t)=>{const{method:r=w}=e;return h.has(r.toUpperCase())&&(e={...e,headers:{...e.headers,"X-HTTP-Method-Override":r,"Content-Type":"application/json"},method:"POST"}),t(e)},f];const v=e=>{if(e.status>=200&&e.status<300)return e;throw e};let _=e=>{const{url:t,path:r,data:o,parse:a=!0,...s}=e;let{body:c,headers:i}=e;i={...g,...i},o&&(c=JSON.stringify(o),i["Content-Type"]="application/json");return window.fetch(t||r||window.location.href,{...O,...s,body:c,headers:i}).then(e=>Promise.resolve(e).then(v).catch(e=>j(e,a)).then(e=>m(e,a)),()=>{throw{code:"fetch_error",message:Object(n.__)("You are probably offline.")}})};function P(e){return b.reduceRight((e,t)=>r=>t(r,e),_)(e).catch(t=>"rest_cookie_invalid_nonce"!==t.code?Promise.reject(t):window.fetch(P.nonceEndpoint).then(v).then(e=>e.text()).then(t=>(P.nonceMiddleware.nonce=t,P(e))))}P.use=function(e){b.unshift(e)},P.setFetchHandler=function(e){_=e},P.createNonceMiddleware=o,P.createPreloadingMiddleware=i,P.createRootURLMiddleware=s,P.fetchAllMiddleware=f,P.mediaUploadMiddleware=y;var x=t.default=P},l3Sj:function(e,t){e.exports=window.wp.i18n}}).default;