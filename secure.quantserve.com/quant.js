/* Copyright (c) 2008-2023, Quantcast Corp. https://www.quantcast.com/legal/license */
!function(){"use strict";var e="qcSes";function t(){var e=r();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)}))}var n=function(){try{if(!window.sessionStorage)return t()}catch(e){return t()}var n;try{if(n=window.sessionStorage.getItem(e))return n}catch(e){return t()}n=t();try{window.sessionStorage.setItem(e,n)}catch(e){}return n}();function r(){return(new Date).getTime()}function o(){return new Date}function a(e){var t=new Date(2e3,e,1,0,0,0,0),n=t.toUTCString(),r=new Date(n.substring(0,n.lastIndexOf(" ")-1));return t.getTime()-r.getTime()}function i(){return Math.round(2147483647*Math.random())}/qcdbgc=1$/.test(window.location.toString());function c(e,t){"undefined"!=typeof console&&console.log.apply(console,[e+" "+o().toString()].concat([].slice.call(t)))}var u=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];c("ERROR",e)};function s(e,t,o){o=o||{};var a={url:window.location.href,version:"93f4cf8b-20230329153214",time:r(),browser:navigator.userAgent,sessionId:n};t&&"string"==typeof t&&(a.label=t),e&&(e.message&&"string"==typeof e.message?a.msg=e.message:"string"==typeof e&&(a.msg=e),e.stack&&"string"==typeof e.stack&&(a.stack=e.stack)),o.pcode&&"string"==typeof o.pcode&&(a.pcode=o.pcode);var i=new XMLHttpRequest;i.open("POST","https://pixel.quantcount.com/tag/error",!0),i.send(JSON.stringify(a))}var f="_dlt=",l=function(e,t){if(void 0===e)throw new Error("window many not be undefined");if(void 0===t)throw new Error("top may not be undefined");t=t?t.self:null,this.depth=0;var n=e.self;for(this.top=n;n!==t;){n=n.parent.self;try{n.location.href&&(this.url=n.location.href,this.top=n)}catch(e){}this.depth++}this.locate=function(n){for(var r=e;;){try{if(n in r.frames)return r}catch(e){}if(r===t)break;r=r.parent.self}}},p=!1,d=[];function v(){for(p=!0;d.length>0;){var e=d.shift();e&&e()}}function h(e){p?e():d.push(e)}document.readyState in{complete:!0,interactive:!0}&&(p=!0),document.addEventListener?(document.addEventListener("DOMContentLoaded",v,!1),window.addEventListener("load",v,!1)):document.attachEvent&&window.attachEvent&&(document.attachEvent("onreadystatechange",v),window.attachEvent("onload",v));var g=function(e){var t,n,r,o,a=!1,i=!1,c=!1;this.then=function(e){return t=e,!c&&a&&(t(r),c=!0),this},this.catch=function(e){return n=e,!c&&i&&(n(o),c=!0),this},e((function(e){a=!0,r=e,"function"!=typeof t||c||(t(e),c=!0)}),(function(e){i=!0,o=e,"function"!=typeof n||c||(n(e),c=!0)}))};g.resolve=function(e){return new g((function(t){t(e)}))},g.reject=function(e){return new g((function(t,n){n(e)}))},g.all=function(e){return new g((function(t,n){var r=0,o=[];function a(n,a){o[a]=n,r+=1,e.length===r&&t(o)}if(0!==e.length)for(var i=0;i<e.length;i+=1)e[i].then((function(e){a(e,i)})).catch((function(e){n(e)}));else t(e)}))};var m=g,y=window.Promise||m,w=function(e,t){var n=null,r=[];h((function(){n=t.head||t.getElementsByTagName("head")[0]}));var o=function(e){var t=new Image;return t.src=e,t};return{image:function(e){return new y((function(t,n){var a=o(e);r.push(a),a.onload=function(){t(a),r.shift(),delete a.onload,delete a.onerror},a.onerror=n}))},beacon:function(t){var n=e.navigator;n&&n.sendBeacon?n.sendBeacon(t):o(t)},script:function(e){return new y((function(r,o){h((function(){var a=function(e,n,r){var o=t.createElement("script");o.type="text/javascript",o.src=e;var a=function(){n(o),o.onreadystatechange=null,o.onload=null,o.onerror=null};return o.onload=a,o.onreadystatechange=function(){o.readyState in{loaded:1,complete:1}&&a()},o.onerror=r,o}(e,r,o);n&&(n.firstChild?n.insertBefore(a,n.firstChild):n.appendChild(a))}))}))}}};function _(e,t,n){e.addEventListener?e.addEventListener(t,n):"function"==typeof jQuery?jQuery(e).on(t,n):e.attachEvent&&e.attachEvent("on"+t,n)}var q,b,x=function(e,t,n,o,a,i,c,u){var s,f=function(e){var t=e.source[0];return"p"+e.consent[0]+("a"==t?"e":"i")};s="object"==typeof o&&"function"==typeof o.callApi?function(e,t,n,r){var i=o.callApi(t,r,u,a,n);return e.cm=f(i),y.resolve(!0)}:function(o,i,c,s){return e.depth>0&&(_(t,"message",(function(e){var t=e.data;if("string"==typeof t&&t.indexOf("PrivacyManagerAPI")>0)try{t=JSON.parse(t)}catch(e){return}else if(void 0!==t.PrivacyManagerAPI){var n=t.PrivacyManagerAPI;o.cm=f(n)}})),n.postMessage(JSON.stringify({PrivacyManagerAPI:{timestamp:r(),action:i,self:s,domain:u,authority:a,type:c}}),"*")),y.resolve(!0)},this.consent=function(e){return s(e,"getConsent",i,c)},this.parameters={}},S=function(e,t,n){var o;if("function"==typeof t.__uspapi){var a=t.__uspapi;o=function(){return new y((function(e,t){a("getUSPData",1,(function(n){n&&"string"==typeof n.uspString?e(n):t(n)}))})).catch((function(e){return u("uspapi: unsuccessful",e),s(e,"uspapi: unsuccessful"),!0}))}}else{e.locate(n);var i={};_(t,"message",(function(e){var t=e.data;if("string"==typeof t&&"{"==t[0])try{t=JSON.parse(t)}catch(e){return}if(Object.prototype.hasOwnProperty.call(t,"__uspapiReturn")){var n=t.__uspapiReturn,r=n.callId,o=i[r];if(void 0===o)return;n.success?o[0](n.returnValue):o[1](n.returnValue)}})),o=function(){var t=e.locate(n);if(!t)return y.resolve(void 0);var o=r();return new y((function(e,n){i[o]=[e,n],t.postMessage({__uspapiCall:{command:"getUSPData",version:1,callId:o}},"*")}))}}this.consent=function(e){return o().then((function(t){if(t&&"string"==typeof t.uspString){var n=t.uspString;return e.us_privacy=n,"Y"!=n[2]}return!0}))}},O=function(e){var t,n={},r=function(r){return void 0===t&&(t=y.all(e.map((function(e){return e.consent(n)}))).then((function(e){return e.reduce((function(e,t){return e&&t}),!0)}))),t.then((function(e){if(e)return r()}))};this.consent=r,this.wrap=function(e){return function(){var t=this,n=arguments;return r((function(){return e.apply(t,n)}))}},this.parameters=n};!function(e){e.getTCData="getTCData",e.ping="ping",e.addEventListener="addEventListener",e.removeEventListener="removeEventListener"}(q||(q={})),function(e){e.getInAppTCData="getInAppTCData",e.getVendorList="getVendorList"}(b||(b={}));var I="tcf2",C=[1,3,7,8,9,10],E=[1,3],j=[1,3],A="__tcfapiReturn";function P(e,t){var n=t.gdprApplies,r=t.purpose,o=t.vendor,a=o&&o.consents&&o.consents[11],i=o&&o.legitimateInterests&&o.legitimateInterests[11],c=t.publisher?t.publisher.restrictions:{};return!n||e.map((function(e){var t=!!r.consents&&r.consents[e],n=!!r.legitimateInterests&&r.legitimateInterests[e],o=c&&c[e]?c[e][11]:null;return!(0===o||(!a||!t||2===o||-1==E.indexOf(e)&&1!==o)&&(1===o||!i||!n||-1!=j.indexOf(e)||-1!=E.indexOf(e)&&2!==o))})).reduce((function(e,t){return e&&t}),!0)}var T=function(e,t,n){var o;this.consent=function(a){var i,c;return void 0===o&&("function"==typeof t.__tcfapi?(c=t.__tcfapi,i=new y((function(e,t){c(q.addEventListener,2,(function(n,r){if(r){var o=n.eventStatus;n.gdprApplies&&"useractioncomplete"!==o&&"tcloaded"!==o||e(n)}else t(n)}))}))):i=function(){var o={},a={};_(t,"message",(function(e){var t=e.data;if(void 0===t)return u(I+": Recieved undefined message"),void s("Recieved undefined message",I);if("string"==typeof t&&"{"==t[0])try{t=JSON.parse(t)}catch(e){return}if(Object.prototype.hasOwnProperty.call(t,A)){var n=t[A],r=n.callId,i=o[r];if(void 0===i)return;var c=n.returnValue;n.success?"addEventListener"===a[r]&&c.gdprApplies&&"useractioncomplete"!==c.eventStatus&&"tcloaded"!==c.eventStatus||i[0](c):i[1](c)}}));var i=e.locate(n);if(!i)return y.resolve({gdprApplies:!1});var c=r();return new y((function(e,t){var n;o[c]=[e,t],a[c]=q.addEventListener;var r=((n={}).__tcfapiCall={command:q.addEventListener,version:2,callId:c},n);i.postMessage(JSON.stringify(r),"*")}))}(),o=i.then((function(e){var t=!1;return"boolean"==typeof e.gdprApplies?t=e.gdprApplies:"string"==typeof e.gdprApplies&&(t="false"!=e.gdprApplies),t?(a.gdpr=1,a.gdpr_consent=e.tcString):a.gdpr=a.gdpr||0,P(C,e)})).catch((function(e){return u(I+": unsuccessful",e),s(e,I+": unsuccessful"),a.gdpr=a.gdpr||0,!0}))),o}};T.resolveConsent=P;var R=T;function D(e,t){return t>>>e|t<<32-e}function L(e){return D(2,e)^D(13,e)^D(22,e)}function M(e){return D(6,e)^D(11,e)^D(25,e)}function k(e){return D(7,e)^D(18,e)^e>>>3}function U(e,t,n){return e&t^~e&n}function z(e,t,n){return e&t^e&n^t&n}var N=function(e,t){var n;for(n=0;n<t.length;n++)e^=t.charCodeAt(n),e+=(e<<1)+(e<<4)+(e<<7)+(e<<8)+(e<<24);return e};function J(e){for(var t=unescape(encodeURIComponent(e)),n=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],r=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],o=(t+=String.fromCharCode(128)).length/4+2,a=Math.ceil(o/16),i=new Array(a),c=0;c<a;c++){i[c]=new Array(16);for(var u=0;u<16;u++)i[c][u]=t.charCodeAt(64*c+4*u+0)<<24|t.charCodeAt(64*c+4*u+1)<<16|t.charCodeAt(64*c+4*u+2)<<8|t.charCodeAt(64*c+4*u+3)<<0}var s,f=8*(t.length-1)/Math.pow(2,32),l=8*(t.length-1)>>>0;for(i[a-1][14]=Math.floor(f),i[a-1][15]=l,c=0;c<a;c++){for(var p=new Array(64),d=0;d<16;d++)p[d]=i[c][d];for(d=16;d<64;d++)p[d]=(D(17,s=p[d-2])^D(19,s)^s>>>10)+p[d-7]+k(p[d-15])+p[d-16]>>>0;var v=r[0],h=r[1],g=r[2],m=r[3],y=r[4],w=r[5],_=r[6],q=r[7];for(d=0;d<64;d++){var b=q+M(y)+U(y,w,_)+n[d]+p[d],x=L(v)+z(v,h,g);q=_,_=w,w=y,y=m+b>>>0,m=g,g=h,h=v,v=b+x>>>0}r[0]=r[0]+v>>>0,r[1]=r[1]+h>>>0,r[2]=r[2]+g>>>0,r[3]=r[3]+m>>>0,r[4]=r[4]+y>>>0,r[5]=r[5]+w>>>0,r[6]=r[6]+_>>>0,r[7]=r[7]+q>>>0}var S=[];for(q=0;q<r.length;q++)S[q]=("00000000"+r[q].toString(16)).slice(-8);return S.join("")}var B=function(e){var t=typeof e;return"string"==t&&e.length>0||"number"==t||"boolean"==t},V=338688e5,F="__qca",Q=["4dcfa7079941","127fdf7967f31","588ab9292a3f","32f92b0727e5","22f9aa38dfd3","a4abfe8f3e04","18b66bc1325c","958e70ea2f28","bdbf0cb4bbb","65118a0d557","40a1d9db1864","18ae3d985046","3b26460f55d"],$=function(e,t){var n,r,o,a=null;return e?(r=(n=e.indexOf(t+"="))+t.length+1,n>-1&&((o=e.indexOf(";",r))<0&&(o=e.length),a=e.substring(r,o)),a):a};function G(e,t,c){var p,d,v,h,g,m,y,_,q,b,I,C,E,j,A,P,T,D,L,M,k,U,z,G,H,X,Y,Z,K,W,ee,te,ne,re,oe,ae,ie,ce,ue,se,fe="quantserve.com",le=function(e){for(var t=e.domain||"",n=new Date(0).toUTCString(),o=new Date(r()+864e5).toUTCString(),a=t.split("."),i="",c=2;c<=a.length;c++){i=a.slice(-c).join(".");var u=f+"1; path=/; domain="+i+"; expires="+o;if(e.cookie=u,/_dlt=1\b/.test(e.cookie))return e.cookie=f+"; path=/; domain="+i+"; expires="+n,i}return e.cookie=f+"; path=/; domain="+i+"; expires="+n,t}(t),pe=new l(e,e.top),de=new w(e,t),ve=new O([new x(pe,e,e.top,e.PrivacyManagerAPI,"truste.com","advertising",fe,le),new S(pe,e,"__uspapiLocator"),new R(pe,e,"__tcfapiLocator")]),he=function(e,t,n){var r=0,a=$(t.cookie,F)||function(e,t){var n=null;try{n=e.localStorage.getItem(t)}catch(e){}if(!n)return null;var r=JSON.parse(n);if(o().getTime()>r.expiry){try{e.localStorage.removeItem(t)}catch(e){}return null}return r.value}(e,F),c=function(e){for(var t,n,r,o=(n=N(2166136261,t=e),r=N(3386659096,t),Math.round(Math.abs(n*r)/65536).toString(16)),a=0;a<Q.length;a++)if(Q[a]===o)return!0;return!1}(n);return a||(r=1,a="P0-"+i()+"-"+o().getTime()),{SD:Q,persistIdentifier:function(){1!==r||c||(t.cookie=[F,"=",a,"; expires=",new Date(o().getTime()+V).toUTCString(),"; path=/; domain=",n].join(""),function(e,t,n,r){var a={value:n,expiry:o().getTime()+r};try{e.localStorage.setItem(t,JSON.stringify(a))}catch(e){}}(e,F,a,V))},removeIdentifier:function(){t.cookie=F+"=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;";try{e.localStorage.removeItem(F)}catch(e){}},getFirstPartyIDString:function(e){return c||1===e?";fpan=u;fpa=":";fpan="+r+";fpa="+a},getExternalIDString:function(e){if(c||1===e)return"";var n=$(t.cookie,"_pubcid")||$(t.cookie,"_sharedID"),r=$(t.cookie,"_pubcid_optout");return!$(t.cookie,"_pbjs_id_optout")&&"1"!==r&&n?";pbc="+n:";pbc="}}}(e,t,le),ge=["a","ce","cm","dst","enc","fpa","fpan","je","ns","ogl","rf","tzo","sr","ses"],me="rule",ye="webpage",we="ad",_e="load",qe="engagement",be=!1,xe=!1,Se=0,Oe=[],Ie=[],Ce=[],Ee=[],je={},Ae=0,Pe=null,Te={},Re={},De=[].slice;se=t.createElement("script"),p="async"in se?1:se.readyState?2:3,se=null;var Le=function(e){try{return{init:h,clean:Me,hash:J,push:g,rules:G,require:function(){s("deprecated api.require fn called","api",{pcode:Ee[0]})},hasRules:X,defaults:W,__qc:function(){return!0}}[e].apply(null,De.call(arguments,1))}catch(e){return u(e),s(e,"api",{pcode:Ee[0]}),!1}};Le.evts=0,Le.v=2,Le.SD=he.SD,Le.qpixelsent=[],z=function(e){var t,n=e&&e.length||0;for(t=0;t<n;t++)if(!e[t])return!1;return!0},K=function(t){(t=t||e._qacct)&&(P(Ee,t)||Ee.push(t))},P=function(e,t){var n,r=e.length;for(n=0;n<r;n++)if(e[n]===t)return!0;return!1},L=function(e){return{}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()},M=function(e){var t,n,r;if("array"===(n=L(e)))return e.slice(0);if("object"===n){for(r in t={},e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}return"string"===n?""+e:e},g=function(e,t){m(e,t)},X=function(e){return P(Ce,e)},W=function(e,t){var n;e&&((n=Te[e])&&(t=j(t,n)),t&&t.qacct&&delete t.qacct,Te[e]=t)},ee=function(t){var n,r,o,a,i,c;if(v(t))for(a in i=t){if("string"==typeof i[a]){n=t.event||_e,r=t.media||ye,n!==me&&n!==_e||r!==ye&&r!==we?m(t):(c=t.qacct||e._qacct,t.qacct=c,o=(o=Re[c])?j(o,t):t,Re[c]=o),K(t.qacct);break}"object"==typeof i[a]&&null!=i[a]&&ee(i[a])}},j=function(e,t){var n={};return n.qacct=e.qacct||t.qacct,e.event===_e||t.event===_e?n.event=_e:e.event&&t.event?n.event=e.event||t.event:n.event=null,n.media=null,e.media===ye||t.media===ye?n.media=ye:e.media===we||t.media===we?n.media=we:n.media=e.media||t.media,A(n,e,t),A(n,t,e),n.event||delete n.event,n.media||delete n.media,n},A=function(e,t,n){var r,o,a,i,c,u;for(r in t)Object.prototype.hasOwnProperty.call(t,r)&&!Object.prototype.hasOwnProperty.call(e,r)&&(o=t[r],i="",u=!!(a=n[r])&&"string"==typeof a,(c=!!o&&"string"==typeof o)&&(i=o),c&&u&&(i+=","),u&&(i+=a),e[r]=i)},te=function(){var e,t,n=[];if(!(Ae>0)){for(e in D(),Re)Object.prototype.hasOwnProperty.call(Re,e)&&Re[e]&&(t=Re[e],n.push(t),delete Re[e]);1==n.length&&m(n[0]),n.length>1&&m(n)}},ne=function(){var e,t,n,r=[];for(n=Ee.slice(0),e=0;e<n.length;e++)t=n[e],X(t)||r.push(t);if(0===r.length)te();else for(e=0;e<r.length;e++)t=r[e],Ce.push(t),C(t)},E=function(n,r,o,a){var i;n=e.location.protocol+"//"+n;var c=(Pe=t.scripts&&t.scripts[0]||null)&&Pe.parentNode||t.head||t;if(i=t.createElement("script"),1===p)i.src=n,i.async=!0,i.onload=r,o&&(i.onerror=function(e){i.onerror=null,o(e)}),c.insertBefore(i,Pe);else if(2===p){var u=!1;i.onload=i.onreadystatechange=function(){u||"loaded"!=i.readyState&&"complete"!=i.readyState||(u=!0,i.onreadystatechange=null,r())},i.src=n,c.insertBefore(i,Pe)}else a&&a()},C=function(e){Ae++,E("rules.quantcount.com/rules-"+e+".js",(function(){je[e]=2===p?2:0,re()}),(function(t){je[e]=1,s(t,"ruleFetch",{pcode:e}),re()}),(function(){je[e]=4,re()}))},re=function(){Ae-=Ae>0?1:0,te()},G=function(){var e,t,n,r=!0,o=!1;if(arguments.length){for(n=function(e){r?ee(e):m(e,!0),o=!0},e=0;e<arguments.length;e++)(t=De.call(arguments[e],0)).splice(1,0,n),H.apply(null,t);r=!1,be&&te()}return o},H=function(e,t){var n,r,o,a,i,c,u,s=[],f=[],l=t||m;if((r=De.call(arguments,2))&&r.length){for(o=r[0]||z,a=r[1],n=(i=r[2]).length,c=0;c<n;c++)s.push(!1),f.push(null);u={p:e,f:s,r:o,c:i,a:a,v:f},X(e)||Ce.push(e),Ie.push(u),Y(u,l)}else Ce.push(e),je[e]=6},Y=function(e,t){var n,r=e&&e.c?e.c.length:0;for(n=0;n<r;n++)!function(n){var r,o;try{r=e.c[n][0],(o=e.c[n].slice(1)).splice(0,0,(function(r){e.f[n]=!0,e.v[n]=r,Z(e,t)})),r.apply(null,o)}catch(r){s(r,"processRule",{pcode:e.p}),e.f[n]=!0,e.v[n]=!1,Z(e,t)}}(n)},Z=function(e,t){var n,r,o,a,i,c,u,f=e.a,l=e.f,p=e.v,d=e.r||z;if((n=z(l))&&(n=n&&d(p)),n)for(i=0;i<f.length;i++)try{for(u in r=f[i][0],o=(o=f[i].length>1?f[i].slice(1):[]).concat(e.v),a=r.apply(null,o),c={qacct:e.p,event:me},a)Object.prototype.hasOwnProperty.call(a,u)&&"qacct"!==u&&(c[u]=a[u]);t(c)}catch(t){s(t,"evalRule",{pcode:e.p});continue}},d=function(e){return e.replace(/\./g,"%2E").replace(/,/g,"%2C")},v=function(e){return void 0!==e&&null!=e},U=function(e){var t,n;if(e&&"object"===L(e))for(n=0;n<ge.length;n++)t=ge[n],Object.prototype.hasOwnProperty.call(e,t)&&e[t]&&delete e[t]},b=function(t,n,r){var o,a,i;return n&&"string"==typeof n.qacct?o=n.qacct:"string"==typeof e._qacct&&(o=e._qacct),o&&0!==o.length?(n=k(o,n),delete Re[o],i=Te[o],a=je[o],v(a)||(a=3),ue(n,i,r,o)?null:function(e,t,n,r,o){var a,i={},c=null,u=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,s=/^[A-Fa-f0-9]{64}$/,f=2;for(a in t)Object.prototype.hasOwnProperty.call(t,a)&&B(t[a])&&("uid"!==a&&"uh"!==a?"qacct"!==a&&(i[a+e]=encodeURIComponent(t[a])):(t[a].match(s)?(f=1,c=t[a].toLowerCase()):(t[a].match(u)&&(f=0,t[a]=t[a].toLowerCase()),""!==t[a]&&(c=J(t[a]))),delete t[a]));for(a in n)Object.prototype.hasOwnProperty.call(n,a)&&B(n[a])&&!i[a+e]&&(i[a+e]=encodeURIComponent(n[a]));return i["rf"+e]=""+o,"string"==typeof c&&(t.uh=c,i["uh"+e]=encodeURIComponent(c)),i["uht"+e]=""+f,i["a"+e]=r,i}(t,n,i,o,a)):null},q=function(e){var t,n=[],r=[],o=[];for(t in e)e[t]&&Object.prototype.hasOwnProperty.call(e,t)&&("uh"===t||"uht"===t?r.push(";"+t+"="+e[t]):n.push(t+"="+e[t]));return o.push(n.join(";")),o.push(r.join("")),o},I=function(){var e,n,r,o,a,i=t.getElementsByTagName("meta"),c="";for(e=0;e<i.length;e++){if(a=i[e],c.length>=1e3)return encodeURIComponent(c);v(a)&&v(a.attributes)&&v(a.attributes.property)&&v(a.attributes.property.value)&&v(a.content)&&(n=a.attributes.property.value,r=a.content,n.length>3&&"og:"===n.substring(0,3)&&(c.length>0&&(c+=","),o=r.length>80?80:r.length,c+=d(n.substring(3,n.length))+"."+d(r.substring(0,o))))}return encodeURIComponent(c)},m=function(r,u){var s,f,l,p,d,h,g,m,y,w,x,S=i(),O="",C="",E="",A="",P="1",T=[];if(Se=0,v(Le.qpixelsent)||(Le.qpixelsent=[]),v(r)){if("object"===(w=L(r)))l=b("",r,u);else if("array"===w)for(d=0;d<r.length;d++)x=b("."+(d+1),r[d],u),l=0===d?x:j(l,x)}else"string"==typeof _qacct&&(l=b("",null,u));if(l){s=c.cookieEnabled?"1":"0",v(e._qmeta)&&(O=";m="+encodeURIComponent(e._qmeta),e._qmeta=null),h=o(),g=a(0)!==a(6)?1:0,m=he.getFirstPartyIDString(Se),y=he.getExternalIDString(Se),e.location&&e.location.href&&(C=encodeURIComponent(e.location.href)),t&&t.referrer&&(A=encodeURIComponent(t.referrer)),e.self===e.top&&(P="0"),l.url?E=C:l.url=C,l.ref||(l.ref=A||""),f=I(),p=q(l);var R=ce(l.event),D=l.event===qe?"/engagement":"/pixel";T.push(D+R+"r="+S+";"+p[0]),T.push(p[1]),T.push(m+y),T.push(";ns="+P+";ce="+s+";qjs=1;qv=93f4cf8b-20230329153214"),T.push((l.ref?"":";ref=")+";d="+le+";dst="+g+";et="+h.getTime()+";tzo="+h.getTimezoneOffset()+(E?";ourl="+E:"")+O+";ogl="+f+";ses="+n),Oe.push({pixel:T,pCode:l.a}),_()}},ce=function(e){return e===qe?"?":";"},y=function(t){var n=t.pixel;ve.consent((function(){return!0})).then((function(e){return e||he.removeIdentifier(),e?fe:"quantcount.com"})).then((function(t){var r,o=ve.parameters,a=[navigator&&"Apple Computer, Inc."===navigator.vendor?"https://prreqcroab.icu":"https://pixel."+t,n[0],t===fe?[n[1],n[2]].join(""):";uh=u;uht=u",n[3],";cm=",o.cm,1===o.gdpr?";gdpr=1;gdpr_consent="+o.gdpr_consent:";gdpr=0",o.us_privacy?";us_privacy="+o.us_privacy:"",n[4]].join("");return"function"!=typeof CustomEvent?(r=document.createEvent("CustomEvent")).initCustomEvent("q_pixel_fire",!1,!1,{url:a}):r=new CustomEvent("q_pixel_fire",{detail:{url:a}}),e.dispatchEvent(r),de.image(a).catch((function(){return null})).then((function(e){e&&"number"==typeof e.width&&3===e.width?he.removeIdentifier():t===fe&&he.persistIdentifier()}))})).catch((function(e){s(e,"fire")}))},_=function(){for(;Oe.length;)y(Oe.shift())},oe=function(){var e,t=arguments;for(T([].slice.call(t)),e=0;e<t.length;e++)m(t[e]);Ee.length?ne():te()},T=function(t){var n,r=L(t);if("array"===r)for(n=0;n<t.length;n++)T(t[n]);else"object"===r&&K(t.qacct||e._qacct)},D=function(){var t;if(xe||e._qevents.length||e.ezt.length||"undefined"==typeof _qacct||(m({qacct:e._qacct}),xe=!0),!Le.evts){for(t in e._qevents)e._qevents[t]!==e._qevents.push&&Object.prototype.hasOwnProperty.call(e._qevents,t)&&m(e._qevents[t]);for(t in e.ezt)e.ezt[t]!==e.ezt.push&&Object.prototype.hasOwnProperty.call(e.ezt,t)&&m(e.ezt[t]);e._qevents={push:oe},e.ezt.push=function(){var t,n=arguments;if(v(e.queueManager))for(t=0;t<n.length;t++)e.queueManager.push(n[t]);else oe.apply(this,arguments)},Le.evts=1}},ie=function(t){var n;t&&(n=M(t),T(t),e._qevents.push(n),t=null)},ae=function(e){e.push=function(){return T([].slice.call(arguments)),ne(),[].push.apply(e,arguments)}},ue=function(e,t,n,r){t=t||{};var o=(e?e.media:t.media)||ye,a=(e?e.event:t.event)||_e;if(o===we&&(Se=1),o===ye&&a===_e){for(var i=0;i<Le.qpixelsent.length;i++)if(Le.qpixelsent[i]===r&&!n)return!0;Le.qpixelsent.push(r)}return!1},k=function(e,t){var n=Re[e];return t?n&&(t=j(t,n)):t=n,U(t),t},h=function(){try{v(e._qevents)||(e._qevents=[]),v(e.ezt)||(e.ezt=[]),ie(e._qoptions),ie(e.qcdata),ie(e.smarttagdata),Le.evts||(ae(e._qevents),ae(e.ezt)),T(e.ezt),T(e._qevents),T({qacct:e._qacct}),e._qoptions=null,Ee.length?ne():te(),be=!0}catch(e){return s(e,"init"),e}};var Me=function(){e._qevents=null,e.ezt=null,e.quantserve=null};return e.quantserve=e.quantserve||h,Le.quantserve=h,Le}void 0===window.__qc&&(window.__qc=new function(e,t,n){try{return new G(e,t,n)}catch(e){return s(e,"construct"),e}}(window,window.document,window.navigator)),window.__qc("init"),window.__qc}();