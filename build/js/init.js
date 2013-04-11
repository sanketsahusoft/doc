(function(e){"function"==typeof define?define("components/es5-shim/es5-shim.min",e):"function"==typeof YUI?YUI.add("es5",e):e()})(function(){function e(e){return e=+e,e!==e?e=0:0!==e&&e!==1/0&&e!==-1/0&&(e=(0<e||-1)*Math.floor(Math.abs(e))),e}function t(e){var t=typeof e;return null===e||"undefined"===t||"boolean"===t||"number"===t||"string"===t}Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError("Function.prototype.bind called on incompatible "+t);var n=i.call(arguments,1),r=function(){if(this instanceof r){var s=t.apply(this,n.concat(i.call(arguments)));return Object(s)===s?s:this}return t.apply(e,n.concat(i.call(arguments)))};return t.prototype&&(r.prototype=Object.create(t.prototype)),r});var n=Function.prototype.call,r=Object.prototype,i=Array.prototype.slice,s=n.bind(r.toString),o=n.bind(r.hasOwnProperty);o(r,"__defineGetter__")&&(n.bind(r.__defineGetter__),n.bind(r.__defineSetter__),n.bind(r.__lookupGetter__),n.bind(r.__lookupSetter__));if(2!=[1,2].splice(0).length){var u=Array.prototype.splice;Array.prototype.splice=function(e,t){return arguments.length?u.apply(this,[e===void 0?0:e,t===void 0?this.length-e:t].concat(i.call(arguments,2))):[]}}if(1!=[].unshift(0)){var a=Array.prototype.unshift;Array.prototype.unshift=function(){return a.apply(this,arguments),this.length}}Array.isArray||(Array.isArray=function(e){return s(e)=="[object Array]"});var n=Object("a"),f="a"!=n[0]||!(0 in n);Array.prototype.forEach||(Array.prototype.forEach=function(e,t){var n=N(this),r=f&&s(this)=="[object String]"?this.split(""):n,i=-1,o=r.length>>>0;if(s(e)!="[object Function]")throw new TypeError;for(;++i<o;)i in r&&e.call(t,r[i],i,n)}),Array.prototype.map||(Array.prototype.map=function(e,t){var n=N(this),r=f&&s(this)=="[object String]"?this.split(""):n,i=r.length>>>0,o=Array(i);if(s(e)!="[object Function]")throw new TypeError(e+" is not a function");for(var u=0;u<i;u++)u in r&&(o[u]=e.call(t,r[u],u,n));return o}),Array.prototype.filter||(Array.prototype.filter=function(e,t){var n=N(this),r=f&&s(this)=="[object String]"?this.split(""):n,i=r.length>>>0,o=[],u;if(s(e)!="[object Function]")throw new TypeError(e+" is not a function");for(var a=0;a<i;a++)a in r&&(u=r[a],e.call(t,u,a,n)&&o.push(u));return o}),Array.prototype.every||(Array.prototype.every=function(e,t){var n=N(this),r=f&&s(this)=="[object String]"?this.split(""):n,i=r.length>>>0;if(s(e)!="[object Function]")throw new TypeError(e+" is not a function");for(var o=0;o<i;o++)if(o in r&&!e.call(t,r[o],o,n))return!1;return!0}),Array.prototype.some||(Array.prototype.some=function(e,t){var n=N(this),r=f&&s(this)=="[object String]"?this.split(""):n,i=r.length>>>0;if(s(e)!="[object Function]")throw new TypeError(e+" is not a function");for(var o=0;o<i;o++)if(o in r&&e.call(t,r[o],o,n))return!0;return!1}),Array.prototype.reduce||(Array.prototype.reduce=function(e){var t=N(this),n=f&&s(this)=="[object String]"?this.split(""):t,r=n.length>>>0;if(s(e)!="[object Function]")throw new TypeError(e+" is not a function");if(!r&&arguments.length==1)throw new TypeError("reduce of empty array with no initial value");var i=0,o;if(arguments.length>=2)o=arguments[1];else do{if(i in n){o=n[i++];break}if(++i>=r)throw new TypeError("reduce of empty array with no initial value")}while(1);for(;i<r;i++)i in n&&(o=e.call(void 0,o,n[i],i,t));return o}),Array.prototype.reduceRight||(Array.prototype.reduceRight=function(e){var t=N(this),n=f&&s(this)=="[object String]"?this.split(""):t,r=n.length>>>0;if(s(e)!="[object Function]")throw new TypeError(e+" is not a function");if(!r&&arguments.length==1)throw new TypeError("reduceRight of empty array with no initial value");var i,r=r-1;if(arguments.length>=2)i=arguments[1];else do{if(r in n){i=n[r--];break}if(--r<0)throw new TypeError("reduceRight of empty array with no initial value")}while(1);do r in this&&(i=e.call(void 0,i,n[r],r,t));while(r--);return i});if(!Array.prototype.indexOf||-1!=[0,1].indexOf(1,2))Array.prototype.indexOf=function(t){var n=f&&s(this)=="[object String]"?this.split(""):N(this),r=n.length>>>0;if(!r)return-1;var i=0;arguments.length>1&&(i=e(arguments[1]));for(i=i>=0?i:Math.max(0,r+i);i<r;i++)if(i in n&&n[i]===t)return i;return-1};if(!Array.prototype.lastIndexOf||-1!=[0,1].lastIndexOf(0,-3))Array.prototype.lastIndexOf=function(t){var n=f&&s(this)=="[object String]"?this.split(""):N(this),r=n.length>>>0;if(!r)return-1;var i=r-1;arguments.length>1&&(i=Math.min(i,e(arguments[1])));for(i=i>=0?i:r-Math.abs(i);i>=0;i--)if(i in n&&t===n[i])return i;return-1};if(!Object.keys){var l=!0,c="toString toLocaleString valueOf hasOwnProperty isPrototypeOf propertyIsEnumerable constructor".split(" "),h=c.length,p;for(p in{toString:null})l=!1;Object.keys=function(e){if(typeof e!="object"&&typeof e!="function"||e===null)throw new TypeError("Object.keys called on a non-object");var t=[],n;for(n in e)o(e,n)&&t.push(n);if(l)for(n=0;n<h;n++){var r=c[n];o(e,r)&&t.push(r)}return t}}if(!Date.prototype.toISOString||-1===(new Date(-621987552e5)).toISOString().indexOf("-000001"))Date.prototype.toISOString=function(){var e,t,n,r;if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");r=this.getUTCFullYear(),e=this.getUTCMonth(),r+=Math.floor(e/12),e=[(e%12+12)%12+1,this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds()],r=(r<0?"-":r>9999?"+":"")+("00000"+Math.abs(r)).slice(0<=r&&r<=9999?-4:-6);for(t=e.length;t--;)n=e[t],n<10&&(e[t]="0"+n);return r+"-"+e.slice(0,2).join("-")+"T"+e.slice(2).join(":")+"."+("000"+this.getUTCMilliseconds()).slice(-3)+"Z"};p=!1;try{p=Date.prototype.toJSON&&null===(new Date(NaN)).toJSON()&&-1!==(new Date(-621987552e5)).toJSON().indexOf("-000001")&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(d){}p||(Date.prototype.toJSON=function(){var e=Object(this),n;e:{if(!t(e)){n=e.valueOf;if(typeof n=="function"){n=n.call(e);if(t(n))break e}n=e.toString;if(typeof n=="function"){n=n.call(e);if(t(n))break e}throw new TypeError}n=e}if(typeof n=="number"&&!isFinite(n))return null;n=e.toISOString;if(typeof n!="function")throw new TypeError("toISOString property is not callable");return n.call(e)});var v=Date,m=function(e,t,n,r,i,s,o){var u=arguments.length;return this instanceof v?(u=u==1&&String(e)===e?new v(m.parse(e)):u>=7?new v(e,t,n,r,i,s,o):u>=6?new v(e,t,n,r,i,s):u>=5?new v(e,t,n,r,i):u>=4?new v(e,t,n,r):u>=3?new v(e,t,n):u>=2?new v(e,t):u>=1?new v(e):new v,u.constructor=m,u):v.apply(this,arguments)},g=function(e,t){var n=t>1?1:0;return b[t]+Math.floor((e-1969+n)/4)-Math.floor((e-1901+n)/100)+Math.floor((e-1601+n)/400)+365*(e-1970)},y=RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:\\.(\\d{3}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),b=[0,31,59,90,120,151,181,212,243,273,304,334,365],w;for(w in v)m[w]=v[w];m.now=v.now,m.UTC=v.UTC,m.prototype=v.prototype,m.prototype.constructor=m,m.parse=function(e){var t=y.exec(e);if(t){var n=Number(t[1]),r=Number(t[2]||1)-1,i=Number(t[3]||1)-1,s=Number(t[4]||0),o=Number(t[5]||0),u=Number(t[6]||0),a=Number(t[7]||0),f=!t[4]||t[8]?0:Number(new v(1970,0)),l=t[9]==="-"?1:-1,c=Number(t[10]||0),t=Number(t[11]||0);if(s<(o>0||u>0||a>0?24:25)&&o<60&&u<60&&a<1e3&&r>-1&&r<12&&c<24&&t<60&&i>-1&&i<g(n,r+1)-g(n,r)){n=((g(n,r)+i)*24+s+c*l)*60,n=((n+o+t*l)*60+u)*1e3+a+f;if(-864e13<=n&&n<=864e13)return n}return NaN}return v.parse.apply(this,arguments)},Date=m,Date.now||(Date.now=function(){return(new Date).getTime()});if("0".split(void 0,0).length){var E=String.prototype.split;String.prototype.split=function(e,t){return e===void 0&&t===0?[]:E.apply(this,arguments)}}if("".substr&&"b"!=="0b".substr(-1)){var S=String.prototype.substr;String.prototype.substr=function(e,t){return S.call(this,e<0?(e=this.length+e)<0?0:e:e,t)}}w="	\n\f\r   ᠎             　\u2028\u2029﻿";if(!String.prototype.trim||w.trim()){w="["+w+"]";var x=RegExp("^"+w+w+"*"),T=RegExp(w+w+"*$");String.prototype.trim=function(){if(this===void 0||this===null)throw new TypeError("can't convert "+this+" to object");return String(this).replace(x,"").replace(T,"")}}var N=function(e){if(e==null)throw new TypeError("can't convert "+e+" to object");return Object(e)}}),requirejs.config({baseUrl:"/js/",paths:{jquery:"components/jquery/jquery.min",underscore:"components/lodash/dist/lodash.underscore.min",backbone:"components/backbone/backbone-min",text:"components/requirejs-text/text",chaplin:"components/chaplin/amd/chaplin.min",bootstrap:"components/bootstrap/amd/main"},shim:{underscore:{exports:"_"},backbone:{deps:["underscore","jquery"],exports:"Backbone"}}}),require(["components/es5-shim/es5-shim.min"],function(){var e=document.location.href.match(/#(.+)/),t=e?e[1]:null;t&&(document.location.href=document.location.href.replace("#"+t,"#"),window.anchor=t),require(["sequelize","jquery"],function(e,t){require(["components/jquery/jquery-migrate.min","components/jquery_viewport/jquery.viewport"],function(){window._gaq=window._gaq||[],window._gaq.push(["_setAccount","UA-9039631-4"]),window._gaq.push(["_trackPageview"]),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"===document.location.protocol?"https://ssl":"http://www")+".google-analytics.com/ga.js";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),t(window).on("hashchange",function(){var e=document.location.href.match(/http.?:\/\/.+?(\/.+)/),t=e?e[1]:null;!t||window._gaq.push(["_trackPageview",t])}),(new e).initialize()})})}),define("init",function(){});