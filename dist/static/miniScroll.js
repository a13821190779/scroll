!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.miniScroll=e():t.miniScroll=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:n})},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=27)}([function(t,e,r){var n=r(22)("wks"),i=r(23),o=r(1).Symbol,a="function"==typeof o;(t.exports=function(t){return n[t]||(n[t]=a&&o[t]||(a?o:i)("Symbol."+t))}).store=n},function(t,e){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,e){var r=t.exports={version:"2.5.5"};"number"==typeof __e&&(__e=r)},function(t,e,r){var n=r(7),i=r(32),o=r(33),a=Object.defineProperty;e.f=r(4)?Object.defineProperty:function(t,e,r){if(n(t),e=o(e,!0),n(r),i)try{return a(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[e]=r.value),t}},function(t,e,r){t.exports=!r(16)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(1),i=r(2),o=r(15),a=r(6),s=r(8),c=function(t,e,r){var l,u,h,f=t&c.F,d=t&c.G,p=t&c.S,m=t&c.P,v=t&c.B,y=t&c.W,k=d?i:i[e]||(i[e]={}),b=k.prototype,x=d?n:p?n[e]:(n[e]||{}).prototype;for(l in d&&(r=e),r)(u=!f&&x&&void 0!==x[l])&&s(k,l)||(h=u?x[l]:r[l],k[l]=d&&"function"!=typeof x[l]?r[l]:v&&u?o(h,n):y&&x[l]==h?function(t){var e=function(e,r,n){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,r)}return new t(e,r,n)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(h):m&&"function"==typeof h?o(Function.call,h):h,m&&((k.virtual||(k.virtual={}))[l]=h,t&c.R&&b&&!b[l]&&a(b,l,h)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,e,r){var n=r(3),i=r(10);t.exports=r(4)?function(t,e,r){return n.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},function(t,e,r){var n=r(9);t.exports=function(t){if(!n(t))throw TypeError(t+" is not an object!");return t}},function(t,e){var r={}.hasOwnProperty;t.exports=function(t,e){return r.call(t,e)}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e){var r=Math.ceil,n=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?n:r)(t)}},function(t,e){t.exports={}},function(t,e,r){var n=r(22)("keys"),i=r(23);t.exports=function(t){return n[t]||(n[t]=i(t))}},function(t,e,r){var n=r(31);t.exports=function(t,e,r){if(n(t),void 0===e)return t;switch(r){case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,i){return t.call(e,r,n,i)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,r){var n=r(9),i=r(1).document,o=n(i)&&n(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,e,r){var n=r(19),i=r(21),o=r(38);t.exports=function(t){return function(e,r,a){var s,c=n(e),l=i(c.length),u=o(a,l);if(t&&r!=r){for(;l>u;)if((s=c[u++])!=s)return!0}else for(;l>u;u++)if((t||u in c)&&c[u]===r)return t||u||0;return!t&&-1}}},function(t,e,r){var n=r(37),i=r(11);t.exports=function(t){return n(i(t))}},function(t,e){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,e,r){var n=r(12),i=Math.min;t.exports=function(t){return t>0?i(n(t),9007199254740991):0}},function(t,e,r){var n=r(1),i=n["__core-js_shared__"]||(n["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e){var r=0,n=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+n).toString(36))}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,r){var n=r(3).f,i=r(8),o=r(0)("toStringTag");t.exports=function(t,e,r){t&&!i(t=r?t:t.prototype,o)&&n(t,o,{configurable:!0,value:e})}},function(t,e,r){var n=r(11);t.exports=function(t){return Object(n(t))}},function(t,e,r){"use strict";var n=c(r(28)),i=c(r(34)),o=c(r(40)),a=function(){function t(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),(0,n.default)(t,i.key,i)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),s=r(61);function c(t){return t&&t.__esModule?t:{default:t}}r(62);var l=function(){},u=function(){throw new Error("arguments error")},h=function(){function t(){var e=this,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u(),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{direction:"vertical",bounce:!0,scrollbars:!1,smooth:40,pullForce:4},i=n.direction,o=void 0===i?"vertical":i,a=n.bounce,c=void 0===a||a,l=n.scrollbars,h=void 0!==l&&l,f=n.smooth,d=void 0===f?40:f,p=n.pullForce,m=void 0===p?4:p;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.mark={isVertical:!0,identifier:null,direction:"vertical",scrollbars:!1,bounce:!0,isBounds:!1,scroll:{touchPoint:0,curTranslate:0,maxTranslate:0,x:0,y:0},inertialMotion:{speed:0,a:40,dir:null,canMotion:!1,time:{last:0,now:0,touch:null},dist:{last:0,now:0}},lastMoveE:null},this.operate={radId:null},this.opt={offsetSize:"offsetHeight",rule:"height",clientSize:"clientHeight",clientDir:"clientY",dir:"y"},this.eventQueue={onTouchStart:[],onTouchMove:[],onTouchEnd:[],onRefresh:[],onScrollStart:[],onScroll:[],onScrollEnd:[],setCoordinate:[],setBarTranslate:[]},this.stretch={scrollMax:100,max:"vertical"===this.mark.direction?document.documentElement.clientHeight:document.documentElement.clientWidth,strength:4,multiple:.2,radId:null,stretchMax:0,specialValue:.1},this.bar={x:0,y:0,el:null,scrollMax:0,time:500,stId:null,lastWrapBox:0},this.emitEvent=function(t){e.emit("on"+e.UpperFristCase(t),e.returnHookArgs(t.toLocaleLowerCase()))};try{if(!(r=r.nodeType?r:document.body.querySelector(r)))throw"please pass the correct element";this.i=0,this.mark.direction=o,this.mark.scrollbars=h,this.mark.bounce=c,this.mark.inertialMotion.a=d,this.stretch.strength=m,this.wrapBox=null,this.wrap=r,this.wrap.classList.add("easywrap"),this.preventNativeScroll(),this.wrapAll(),this.mark.scrollbars&&this.scrollBar(),this.on("setBarTranslate",function(t){e.bar.x=t.x,e.bar.y=t.y,e.setbarTranslate(t.x,t.y)}),this.on("setCoordinate",function(t){e.mark.scroll.x=t.x,e.mark.scroll.y=t.y,e.setTranslate(e.mark.scroll.x,e.mark.scroll.y)}),this.touchStart=this.touchStart.bind(this),this.outOfBounds=(0,s.throttle)(this.outOfBounds).bind(this),this.touchMove=(0,s.throttle)(this.touchMove).bind(this),this.touchEnd=this.touchEnd.bind(this),this.barScroll=this.barScroll.bind(this),this.initTouchStart(),this.initTouchMove(),this.initTouchEnd(),this.mark.isVertical="vertical"===this.mark.direction,this.mark.isVertical||(this.opt={rule:"width",offsetSize:"offsetWidth",clientSize:"clientWidth",clientDir:"clientX",dir:"x"}),this.opt={rule:this.mark.isVertical?"height":"width",offsetSize:this.mark.isVertical?"offsetHeight":"offsetWidth",clientSize:this.mark.isVertical?"clientHeight":"clientWidth",clientDir:this.mark.isVertical?"clientY":"clientX",dir:this.mark.isVertical?"y":"x"},this.wrapBox[this.opt.offsetSize]<this.wrap[this.opt.offsetSize]?this.stretch.stretchMax=this.stretch.specialValue:(this.stretch.stretchMax=-1*(this.wrapBox[this.opt.offsetSize]-this.wrap[this.opt.offsetSize]),!this.stretch.stretchMax&&(this.stretch.stretchMax=this.stretch.specialValue)),this.mark.scroll.maxTranslate=this.wrapBox[this.opt.offsetSize]-this.wrap[this.opt.offsetSize]}catch(t){throw t}}return a(t,[{key:"wrapAll",value:function(){var t=this,e=document.createDocumentFragment(),r=0,n=0;this.wrapBox=document.createElement("div"),this.wrapBox.classList.add("easybox"),this.setTranslate(),(0,o.default)(this.wrap.children).forEach(function(e,i){r+=e.offsetWidth+parseInt(getComputedStyle(e).marginLeft)+parseInt(getComputedStyle(e).marginRight),n+=e.offsetHeight+parseInt(getComputedStyle(e).marginTop)+parseInt(getComputedStyle(e).marginBottom),t.wrapBox.appendChild(t.wrap.removeChild(e))}),this.wrapBox.style.width=r+"px",this.wrapBox.style.height=n+"px",e.appendChild(this.wrapBox),this.wrap.appendChild(e)}},{key:"scrollBar",value:function(){this.bar.el=document.createElement("div"),this.bar.el.classList.add(this.mark.isVertical?"easybary":"easybarx"),this.wrap.appendChild(this.bar.el),this.on("onScroll",this.barScroll)}},{key:"barScroll",value:function(){var t=this;this.bar.el.classList.contains("hidden")&&this.bar.el.classList.toggle("hidden"),null!==this.bar.stId&&clearTimeout(this.bar.stId),this.wrapBox[this.opt.offsetSize]!==this.bar.lastWrapBox&&this.setBarSize();var e=this.mark.scroll.curTranslate/this.mark.scroll.maxTranslate*-1;this.emit("setBarTranslate",{x:this.mark.isVertical?this.bar.x:e*this.bar.scrollMax,y:this.mark.isVertical?e*this.bar.scrollMax:this.bar.y}),this.bar.stId=setTimeout(function(){t.bar.el.classList.contains("hidden")||null!==t.mark.identifier||t.bar.el.classList.toggle("hidden")},this.bar.time)}},{key:"setbarTranslate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.bar.el.style.transform=this.mark.isVertical?"translateY("+e+"px)":"translateX("+t+"px)"}},{key:"setBarSize",value:function(){this.wrap[this.opt.offsetSize]<this.wrapBox[this.opt.offsetSize]&&(this.bar.el.style[this.opt.rule]=this.wrap[this.opt.offsetSize]/this.wrapBox[this.opt.offsetSize]*this.wrap[this.opt.offsetSize]+"px",this.bar.scrollMax=this.wrap[this.opt.offsetSize]-this.bar.el[this.opt.offsetSize],this.bar.lastWrapBox=this.wrapBox[this.opt.offsetSize])}},{key:"preventNativeScroll",value:function(){var t=!1;try{var e=Object.defineProperty({},"passive",{get:function(){t=!0}});window.addEventListener("test",null,e)}catch(t){}if(document.body.addEventListener("touchmove",function(t){t.preventDefault()},!!t&&{passive:!1}),!t){var r=document.createDocumentFragment(),n=document.createElement("div");n.classList.add("lowVersion"),n.style.height="100vh",(0,o.default)(document.body.children).forEach(function(t,e){i.default.call(["script","link"],t.nodeName.toLocaleLowerCase())||n.appendChild(document.body.removeChild(t))}),r.appendChild(n),document.body.appendChild(r),n.addEventListener("touchmove",function(t){t.preventDefault()})}}},{key:"getTranslate",value:function(){var t=this.wrapBox.style.transform.match(/-?[\d\.]+/g);return this.mark.isVertical?~~t[1]:~~t[0]}},{key:"setTranslate",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.mark.scroll.x,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.mark.scroll.y;this.wrapBox.style.transform="translateX("+t+"px) translateY("+e+"px)"}},{key:"on",value:function(t,e){switch(t){case"onTouchStart":case"onTouchMove":case"onTouchEnd":case"onScrollStart":case"onScroll":case"onScrollEnd":case"onRefresh":case"setCoordinate":case"setBarTranslate":this.eventQueue[t].push(e);break;default:throw new Error('"'+t+'" hook does not exist, please see https://github.com/a13821190779/scroll/blob/master/README.md for more infomation')}}},{key:"emit",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{x:0,y:0},n=this.eventQueue[t],i=0,o=n.length;i<o;i++)n[i].call(this,e,r)}},{key:"returnHookArgs",value:function(t){return{type:t,x:this.mark.scroll.x,y:this.mark.scroll.y}}},{key:"UpperFristCase",value:function(t){return t.replace(/./,function(t){return t.toLocaleUpperCase()})}},{key:"retraction",value:function(t,e,r){var n=this,i=!1;t===this.stretch.specialValue&&(i=!0);this.stretch.radId=requestAnimationFrame(function e(){if(Math.abs(n.mark.scroll.curTranslate)>Math.abs(t)){var r=(Math.abs(n.getTranslate())-Math.abs(t))*n.stretch.multiple;t<0&&(r*=-1),i?(r=n.getTranslate()+r,Math.abs(r)<=Math.abs(t)+.2&&(r=0)):(r=n.getTranslate()-r,Math.abs(r)<=Math.abs(t)+.2&&(r=t)),n.emit("setCoordinate",{x:n.mark.isVertical?n.mark.scroll.x:r,y:n.mark.isVertical?r:n.mark.scroll.y}),n.emit("onScroll",n.returnHookArgs("scroll")),n.mark.scroll.curTranslate=r,n.stretch.radId=requestAnimationFrame(e),r!==t&&0!==r||(n.mark.inertialMotion.dist.now=0,n.emit("onScrollEnd",n.returnHookArgs("scrollend")))}})}},{key:"refresh",value:function(){this.mark.scroll.curTranslate=0,this.mark.inertialMotion.dist.now=0,this.mark.inertialMotion.speed=0,this.emit("setCoordinate",{x:0,y:0}),this.emit("onRefresh")}},{key:"touchStart",value:function(t){var e=(0,o.default)(t.touches)[0];this.emitEvent("touchStart",t,e),this.mark.isBounds=!0,this.mark.identifier=e.identifier,this.mark.inertialMotion.speed=0,this.mark.inertialMotion.time.touch=t.timeStamp,null!==this.stretch.radId&&cancelAnimationFrame(this.stretch.radId),null!==this.operate.radId&&cancelAnimationFrame(this.operate.radId),this.mark.scroll.touchPoint=e[this.opt.clientDir]}},{key:"initTouchStart",value:function(t){var e=t?"removeEventListener":"addEventListener";this.wrap[e]("touchstart",this.touchStart)}},{key:"touchMove",value:function(t){var e=void 0,r=(0,o.default)(t.touches)[0];if(this.mark.identifier===r.identifier){this.emitEvent("touchMove",t,r);var n=r[this.opt.clientDir]-this.mark.scroll.touchPoint;if(e=+this.mark.scroll.curTranslate+n,this.mark.bounce){if(this.mark.scroll.curTranslate>0){var i=this.stretch.max-this.mark.scroll.curTranslate;e=this.mark.scroll.curTranslate+i/this.stretch.strength*n/i}else if(this.mark.scroll.curTranslate<this.stretch.stretchMax){var a=this.stretch.stretchMax-this.mark.scroll.curTranslate;e=this.mark.scroll.curTranslate+a/this.stretch.strength*n/a}this.mark.scroll.touchPoint=r[this.opt.clientDir],this.mark.scroll.curTranslate=e}else e>0?e=0:e<this.stretch.stretchMax&&(e=this.stretch.stretchMax);this.emit("setCoordinate",{x:this.mark.isVertical?this.mark.scroll.x:e,y:this.mark.isVertical?e:this.mark.scroll.y}),this.mark.inertialMotion.dist.now||this.emit("onScrollStart",this.returnHookArgs("scrollstart")),this.mark.inertialMotion.dist.now&&this.emit("onScroll",this.returnHookArgs("scroll")),this.mark.inertialMotion.dist.last=this.mark.inertialMotion.dist.now,this.mark.inertialMotion.dist.now=r[this.opt.clientDir],this.mark.inertialMotion.time.last=this.mark.inertialMotion.time.now,this.mark.inertialMotion.time.now=t.timeStamp}}},{key:"outOfBounds",value:function(t){var e=document.documentElement[this.opt.clientSize],r=(0,o.default)(t.changedTouches)[0];if((this.mark.scroll.curTranslate>0&&r[this.opt.clientDir]>e||this.mark.scroll.curTranslate<this.stretch.stretchMax&&r[this.opt.clientDir]<0)&&this.mark.isBounds){var n=new CustomEvent("touchend",{detail:{outof:!0,e:this.mark.lastMoveE}});window.dispatchEvent(n)}this.mark.lastMoveE=t}},{key:"initTouchMove",value:function(t){var e=t?"removeEventListener":"addEventListener";document.body[e]("touchmove",this.outOfBounds),document.body[e]("touchmove",this.touchMove)}},{key:"touchEnd",value:function(t){var e=this,r=t;t.detail.outof&&(r=t.detail.e),this.mark.isBounds=!1;var n=(0,o.default)(r.changedTouches)[0];if(this.mark.identifier===n.identifier)if(this.mark.identifier=null,this.emitEvent("touchEnd",r,n),this.mark.scroll.curTranslate=this.getTranslate(),this.mark.scrollbars&&!this.bar.el.classList.contains("hidden")&&this.bar.el.classList.toggle("hidden"),this.mark.scroll.curTranslate>0)this.retraction(0,r,n);else if(Math.abs(this.mark.scroll.curTranslate)>Math.abs(this.stretch.stretchMax))this.retraction(this.stretch.stretchMax,r,n);else if(r.timeStamp-this.mark.inertialMotion.time.now<30){var i=this.mark.inertialMotion.time.now-this.mark.inertialMotion.time.last,a=Math.abs(this.mark.inertialMotion.dist.now-this.mark.inertialMotion.dist.last);this.mark.inertialMotion.speed=Math.min(a/(i/1e3)/40,50),this.mark.inertialMotion.dir=this.mark.inertialMotion.dist.now-this.mark.inertialMotion.dist.last>0?1:-1,this.mark.inertialMotion.dist.now=0;requestAnimationFrame(function r(){if(e.mark.scroll.curTranslate>e.stretch.scrollMax&&e.mark.bounce)e.mark.inertialMotion.speed=0,e.retraction(0,t,n);else if(e.mark.scroll.curTranslate<e.stretch.stretchMax-e.stretch.scrollMax&&e.mark.bounce)e.mark.inertialMotion.speed=0,e.retraction(e.stretch.stretchMax,t,n);else{var i=e.mark.scroll.curTranslate+e.mark.inertialMotion.speed*e.mark.inertialMotion.dir;if(e.mark.inertialMotion.speed-=e.mark.inertialMotion.speed/e.mark.inertialMotion.a,e.mark.inertialMotion.speed<1&&(e.mark.inertialMotion.speed=0),e.mark.inertialMotion.speed>0)e.mark.bounce?e.mark.bounce&&(e.mark.scroll.curTranslate>0?(e.mark.inertialMotion.speed=0,e.retraction(0,t,n)):e.mark.scroll.curTranslate<e.stretch.stretchMax&&(e.mark.inertialMotion.speed=0,e.retraction(e.stretch.stretchMax,t,n))):e.getTranslate()>0?(e.mark.inertialMotion.speed=0,i=0,e.mark.scroll.curTranslate=e.getTranslate()):e.getTranslate()<e.stretch.stretchMax&&(e.mark.inertialMotion.speed=0,i=e.stretch.stretchMax,e.mark.scroll.curTranslate=e.getTranslate()),e.emit("setCoordinate",{x:e.mark.isVertical?e.mark.scroll.x:i,y:e.mark.isVertical?i:e.mark.scroll.y}),e.mark.scroll.curTranslate=e.getTranslate(),e.emit("onScroll",e.returnHookArgs("scroll")),requestAnimationFrame(r);else{var o=e.getTranslate();o<0&&o>-e.mark.scroll.maxTranslate&&(e.mark.inertialMotion.dist.now=0,e.emit("onScrollEnd",e.returnHookArgs("scrollend")))}}})}else this.mark.inertialMotion.dist.now&&(this.mark.inertialMotion.dist.now=0,this.emit("onScrollEnd",this.returnHookArgs("scrollend")))}},{key:"initTouchEnd",value:function(t){var e=t?"removeEventListener":"addEventListener";window[e]("touchend",this.touchEnd),window[e]("touchcancel",this.touchEnd)}},{key:"destroy",value:function(){this.initTouchStart(!0),this.initTouchMove(!0),this.initTouchEnd(!0),this.eventQueue={onTouchStart:[],onTouchMove:[],onTouchEnd:[],onRefresh:[],onScrollStart:[],onScroll:[],onScrollEnd:[]}}},{key:"easeOut",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{target:u()},r=e.target,n=void 0===r?0:r,i=e.duration,o=void 0===i?1:i,a=e.callback,s=void 0===a?l:a,c=this.mark.scroll[this.opt.dir],h=n>0;n=Math.abs(n);var f=+new Date,d=2*n/Math.pow(o,2),p=Math.sqrt(2*d*n);this.operate.radId=requestAnimationFrame(function e(){var r=(+new Date-f)/1e3;r>o&&(r=o);var n=p*r-.5*d*r*r,i=h?c+n:c-n;t.emit("setCoordinate",{x:t.mark.isVertical?t.mark.scroll.x:i,y:t.mark.isVertical?i:t.mark.scroll.y}),t.mark.scroll.curTranslate=t.getTranslate(),t.emit("onScroll",t.returnHookArgs("scroll")),r<o?t.operate.radId=requestAnimationFrame(e):(t.emit("onScrollEnd",t.returnHookArgs("scrollend")),t.operate.radId=null,s())})}},{key:"scrollBy",value:function(t){this.operate.radId||this.easeOut(t)}},{key:"scrollTo",value:function(t){t.target=t.target-this.mark.scroll[this.opt.dir],this.operate.radId||this.easeOut(t)}},{key:"scrollToElement",value:function(t){var e=t.el,r=t.offset;(e=e.nodeType?e:this.wrap.querySelector(e))&&(r="boolean"==typeof r?r?e[this.opt.offsetSize]/2:0:isNaN(parseInt(r))?0:parseInt(r),t.target=-e.offsetTop-r,this.operate.radId||this.scrollTo(t))}}]),t}();t.exports=h},function(t,e,r){t.exports={default:r(29),__esModule:!0}},function(t,e,r){r(30);var n=r(2).Object;t.exports=function(t,e,r){return n.defineProperty(t,e,r)}},function(t,e,r){var n=r(5);n(n.S+n.F*!r(4),"Object",{defineProperty:r(3).f})},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,r){t.exports=!r(4)&&!r(16)(function(){return 7!=Object.defineProperty(r(17)("div"),"a",{get:function(){return 7}}).a})},function(t,e,r){var n=r(9);t.exports=function(t,e){if(!n(t))return t;var r,i;if(e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;if("function"==typeof(r=t.valueOf)&&!n(i=r.call(t)))return i;if(!e&&"function"==typeof(r=t.toString)&&!n(i=r.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e,r){t.exports={default:r(35),__esModule:!0}},function(t,e,r){r(36),t.exports=r(2).Array.includes},function(t,e,r){"use strict";var n=r(5),i=r(18)(!0);n(n.P,"Array",{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(39)("includes")},function(t,e,r){var n=r(20);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==n(t)?t.split(""):Object(t)}},function(t,e,r){var n=r(12),i=Math.max,o=Math.min;t.exports=function(t,e){return(t=n(t))<0?i(t+e,0):o(t,e)}},function(t,e){t.exports=function(){}},function(t,e,r){t.exports={default:r(41),__esModule:!0}},function(t,e,r){r(42),r(54),t.exports=r(2).Array.from},function(t,e,r){"use strict";var n=r(43)(!0);r(44)(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,r=this._i;return r>=e.length?{value:void 0,done:!0}:(t=n(e,r),this._i+=t.length,{value:t,done:!1})})},function(t,e,r){var n=r(12),i=r(11);t.exports=function(t){return function(e,r){var o,a,s=String(i(e)),c=n(r),l=s.length;return c<0||c>=l?t?"":void 0:(o=s.charCodeAt(c))<55296||o>56319||c+1===l||(a=s.charCodeAt(c+1))<56320||a>57343?t?s.charAt(c):o:t?s.slice(c,c+2):a-56320+(o-55296<<10)+65536}}},function(t,e,r){"use strict";var n=r(45),i=r(5),o=r(46),a=r(6),s=r(13),c=r(47),l=r(25),u=r(53),h=r(0)("iterator"),f=!([].keys&&"next"in[].keys()),d=function(){return this};t.exports=function(t,e,r,p,m,v,y){c(r,e,p);var k,b,x,g=function(t){if(!f&&t in T)return T[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},w=e+" Iterator",M="values"==m,S=!1,T=t.prototype,E=T[h]||T["@@iterator"]||m&&T[m],O=E||g(m),A=m?M?g("entries"):O:void 0,j="Array"==e&&T.entries||E;if(j&&(x=u(j.call(new t)))!==Object.prototype&&x.next&&(l(x,w,!0),n||"function"==typeof x[h]||a(x,h,d)),M&&E&&"values"!==E.name&&(S=!0,O=function(){return E.call(this)}),n&&!y||!f&&!S&&T[h]||a(T,h,O),s[e]=O,s[w]=d,m)if(k={values:M?O:g("values"),keys:v?O:g("keys"),entries:A},y)for(b in k)b in T||o(T,b,k[b]);else i(i.P+i.F*(f||S),e,k);return k}},function(t,e){t.exports=!0},function(t,e,r){t.exports=r(6)},function(t,e,r){"use strict";var n=r(48),i=r(10),o=r(25),a={};r(6)(a,r(0)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(a,{next:i(1,r)}),o(t,e+" Iterator")}},function(t,e,r){var n=r(7),i=r(49),o=r(24),a=r(14)("IE_PROTO"),s=function(){},c=function(){var t,e=r(17)("iframe"),n=o.length;for(e.style.display="none",r(52).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;n--;)delete c.prototype[o[n]];return c()};t.exports=Object.create||function(t,e){var r;return null!==t?(s.prototype=n(t),r=new s,s.prototype=null,r[a]=t):r=c(),void 0===e?r:i(r,e)}},function(t,e,r){var n=r(3),i=r(7),o=r(50);t.exports=r(4)?Object.defineProperties:function(t,e){i(t);for(var r,a=o(e),s=a.length,c=0;s>c;)n.f(t,r=a[c++],e[r]);return t}},function(t,e,r){var n=r(51),i=r(24);t.exports=Object.keys||function(t){return n(t,i)}},function(t,e,r){var n=r(8),i=r(19),o=r(18)(!1),a=r(14)("IE_PROTO");t.exports=function(t,e){var r,s=i(t),c=0,l=[];for(r in s)r!=a&&n(s,r)&&l.push(r);for(;e.length>c;)n(s,r=e[c++])&&(~o(l,r)||l.push(r));return l}},function(t,e,r){var n=r(1).document;t.exports=n&&n.documentElement},function(t,e,r){var n=r(8),i=r(26),o=r(14)("IE_PROTO"),a=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=i(t),n(t,o)?t[o]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},function(t,e,r){"use strict";var n=r(15),i=r(5),o=r(26),a=r(55),s=r(56),c=r(21),l=r(57),u=r(58);i(i.S+i.F*!r(60)(function(t){Array.from(t)}),"Array",{from:function(t){var e,r,i,h,f=o(t),d="function"==typeof this?this:Array,p=arguments.length,m=p>1?arguments[1]:void 0,v=void 0!==m,y=0,k=u(f);if(v&&(m=n(m,p>2?arguments[2]:void 0,2)),void 0==k||d==Array&&s(k))for(r=new d(e=c(f.length));e>y;y++)l(r,y,v?m(f[y],y):f[y]);else for(h=k.call(f),r=new d;!(i=h.next()).done;y++)l(r,y,v?a(h,m,[i.value,y],!0):i.value);return r.length=y,r}})},function(t,e,r){var n=r(7);t.exports=function(t,e,r,i){try{return i?e(n(r)[0],r[1]):e(r)}catch(e){var o=t.return;throw void 0!==o&&n(o.call(t)),e}}},function(t,e,r){var n=r(13),i=r(0)("iterator"),o=Array.prototype;t.exports=function(t){return void 0!==t&&(n.Array===t||o[i]===t)}},function(t,e,r){"use strict";var n=r(3),i=r(10);t.exports=function(t,e,r){e in t?n.f(t,e,i(0,r)):t[e]=r}},function(t,e,r){var n=r(59),i=r(0)("iterator"),o=r(13);t.exports=r(2).getIteratorMethod=function(t){if(void 0!=t)return t[i]||t["@@iterator"]||o[n(t)]}},function(t,e,r){var n=r(20),i=r(0)("toStringTag"),o="Arguments"==n(function(){return arguments}());t.exports=function(t){var e,r,a;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?r:o?n(e):"Object"==(a=n(e))&&"function"==typeof e.callee?"Arguments":a}},function(t,e,r){var n=r(0)("iterator"),i=!1;try{var o=[7][n]();o.return=function(){i=!0},Array.from(o,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!i)return!1;var r=!1;try{var o=[7],a=o[n]();a.next=function(){return{done:r=!0}},o[n]=function(){return a},t(o)}catch(t){}return r}},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.throttle=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=void 0,n=null;return function(){var i=this,o=arguments,a=+new Date;r&&a-r<e?(clearTimeout(n),n=setTimeout(function(){r=a,t.apply(i,o)},e)):(t.apply(i,o),r=a)}}},function(t,e,r){var n=r(63);"string"==typeof n&&(n=[[t.i,n,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};r(65)(n,i);n.locals&&(t.exports=n.locals)},function(t,e,r){(t.exports=r(64)(!1)).push([t.i,"::-webkit-scrollbar {\n  display: none; }\n\n::-webkit-scrollbar {\n  width: 0;\n  height: 0; }\n\n.easywrap {\n  height: 100vh;\n  overflow: hidden;\n  position: relative; }\n\n.easybary {\n  position: absolute;\n  width: 3px;\n  background-color: #c1c1c1;\n  border-radius: 14px;\n  top: 0;\n  right: 1px; }\n\n.easybarx {\n  position: absolute;\n  height: 3px;\n  background-color: #c1c1c1;\n  border-radius: 14px;\n  bottom: 1px;\n  left: 0px; }\n\n.hidden {\n  display: none; }\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var r=function(t,e){var r=t[1]||"",n=t[3];if(!n)return r;if(e&&"function"==typeof btoa){var i=(a=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),o=n.sources.map(function(t){return"/*# sourceURL="+n.sourceRoot+t+" */"});return[r].concat(o).concat([i]).join("\n")}var a;return[r].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+r+"}":r}).join("")},e.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(n[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&n[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),e.push(a))}},e}},function(t,e,r){var n,i,o={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=n.apply(this,arguments)),i}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var r=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}}(),c=null,l=0,u=[],h=r(66);function f(t,e){for(var r=0;r<t.length;r++){var n=t[r],i=o[n.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](n.parts[a]);for(;a<n.parts.length;a++)i.parts.push(k(n.parts[a],e))}else{var s=[];for(a=0;a<n.parts.length;a++)s.push(k(n.parts[a],e));o[n.id]={id:n.id,refs:1,parts:s}}}}function d(t,e){for(var r=[],n={},i=0;i<t.length;i++){var o=t[i],a=e.base?o[0]+e.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};n[a]?n[a].parts.push(s):r.push(n[a]={id:a,parts:[s]})}return r}function p(t,e){var r=s(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),u.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(t.insertInto+" "+t.insertAt.before);r.insertBefore(e,i)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function v(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),y(e,t.attrs),p(t,e),e}function y(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function k(t,e){var r,n,i,o;if(e.transform&&t.css){if(!(o=e.transform(t.css)))return function(){};t.css=o}if(e.singleton){var a=l++;r=c||(c=v(e)),n=g.bind(null,r,a,!1),i=g.bind(null,r,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),p(t,e),e}(e),n=function(t,e,r){var n=r.css,i=r.sourceMap,o=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||o)&&(n=h(n));i&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([n],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,e),i=function(){m(r),r.href&&URL.revokeObjectURL(r.href)}):(r=v(e),n=function(t,e){var r=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),i=function(){m(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else i()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=d(t,e);return f(r,e),function(t){for(var n=[],i=0;i<r.length;i++){var a=r[i];(s=o[a.id]).refs--,n.push(s)}t&&f(d(t,e),e);for(i=0;i<n.length;i++){var s;if(0===(s=n[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var b,x=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function g(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=x(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var i,o=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?t:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?r+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}}])});
//# sourceMappingURL=miniScroll.js.map