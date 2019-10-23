!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("react")},
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/*! exports used: BrowserRouter, Route, StaticRouter */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("react-router-dom")},
/*!*******************************************!*\
  !*** ./src/client/routes.jsx + 1 modules ***!
  \*******************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with external "react" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "react-router-dom" (<- Module is not an ECMAScript module) */function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(1),u=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"React-SSR Boilerplate"),o.a.createElement("p",null,"This is a minimal SSR boilerplate with ReactJS, NodeJS, HapiJS, Webpack."),o.a.createElement("button",{onClick:function(){return console.log("Click Works !!!")}},"Test Click Event"))};t.a=function(){return o.a.createElement(i.Route,{exact:!0,path:"/",component:u})}},
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@babel/runtime/regenerator")},
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){var r,n,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===i||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:i}catch(e){r=i}try{n="function"==typeof clearTimeout?clearTimeout:u}catch(e){n=u}}();var c,l=[],s=!1,f=-1;function p(){s&&c&&(s=!1,c.length?l=c.concat(l):f=-1,l.length&&h())}function h(){if(!s){var e=a(p);s=!0;for(var t=l.length;t;){for(c=l,l=[];++f<t;)c&&c[f].run();f=-1,t=l.length}c=null,s=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===u||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];l.push(new m(e,t)),1!==l.length||s||a(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},
/*!*****************************!*\
  !*** external "@hapi/hapi" ***!
  \*****************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@hapi/hapi")},
/*!******************************!*\
  !*** external "@hapi/inert" ***!
  \******************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("@hapi/inert")},
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var o=e[n];"."===o?e.splice(n,1):".."===o?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var u=i>=0?arguments[i]:e.cwd();if("string"!=typeof u)throw new TypeError("Arguments to path.resolve must be strings");u&&(t=u+"/"+t,o="/"===u.charAt(0))}return(o?"/":"")+(t=r(n(t.split("/"),(function(e){return!!e})),!o).join("/"))||"."},t.normalize=function(e){var i=t.isAbsolute(e),u="/"===o(e,-1);return(e=r(n(e.split("/"),(function(e){return!!e})),!i).join("/"))||i||(e="."),e&&u&&(e+="/"),(i?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var o=n(e.split("/")),i=n(r.split("/")),u=Math.min(o.length,i.length),a=u,c=0;c<u;c++)if(o[c]!==i[c]){a=c;break}var l=[];for(c=a;c<o.length;c++)l.push("..");return(l=l.concat(i.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,o=!0,i=e.length-1;i>=1;--i)if(47===(t=e.charCodeAt(i))){if(!o){n=i;break}}else o=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=function(e){"string"!=typeof e&&(e+="");var t,r=0,n=-1,o=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!o){r=t+1;break}}else-1===n&&(o=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,r=0,n=-1,o=!0,i=0,u=e.length-1;u>=0;--u){var a=e.charCodeAt(u);if(47!==a)-1===n&&(o=!1,n=u+1),46===a?-1===t?t=u:1!==i&&(i=1):-1!==t&&(i=-1);else if(!o){r=u+1;break}}return-1===t||-1===n||0===i||1===i&&t===n-1&&t===r+1?"":e.slice(t,n)};var o="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r(/*! ./../process/browser.js */4))},
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/*! exports used: renderToString */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=require("react-dom/server")},
/*!******************************************!*\
  !*** ./src/server/routes.js + 2 modules ***!
  \******************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Cannot concat with ./src/client/routes.jsx */
/*! ModuleConcatenation bailout: Cannot concat with ./node_modules/path-browserify/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "react" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "react-dom/server" (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external "react-router-dom" (<- Module is not an ECMAScript module) */,function(e,t,r){"use strict";var n=r(8),o=r.n(n),i=r(9),u=r(0),a=r.n(u),c=r(1),l=r(2),s=function(e,t){return"<!DOCTYPE html>"+Object(i.renderToString)((r=e,a.a.createElement("html",{lang:"en"},a.a.createElement("head",null,a.a.createElement("meta",{charSet:"UTF-8"}),a.a.createElement("title",null,"Boilerplate - SSR")),a.a.createElement("body",null,a.a.createElement("div",{id:"app"},a.a.createElement(c.StaticRouter,{location:r.path,context:{}},a.a.createElement(l.a,null))),a.a.createElement("script",{src:"bundle.js"})))));var r};t.a=[{path:"/{param*}",method:"GET",config:{handler:{directory:{path:o.a.resolve("dist")}}}},{method:"GET",path:"/",handler:s}]},
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/*! all exports used */
/*! ModuleConcatenation bailout: Module uses injected variables (process) */function(e,t,r){"use strict";r.r(t),function(e){var t=r(/*! @babel/runtime/regenerator */3),n=r.n(t),o=r(/*! @babel/runtime/helpers/asyncToGenerator */5),i=r.n(o),u=r(/*! @hapi/hapi */6),a=r.n(u),c=r(/*! @hapi/inert */7),l=r.n(c),s=r(/*! ./routes */11),f=function(){var e=i()(n.a.mark((function e(){var t;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.a.server({port:3e3,host:"localhost"}),e.next=3,t.register(l.a);case 3:return e.next=5,t.route(s.a);case 5:return e.next=7,t.start();case 7:console.log("\n SERVER up and running on... "),console.dir(t.info);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e.on("unhandledRejection",(function(t){console.log(t),e.exit(1)})),f()}.call(this,r(/*! ./../../node_modules/process/browser.js */4))}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLjEwZTI0ZDNhOTBlNTIzMGIwZWEzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NlcnZlci4xMGUyNGQzYTkwZTUyMzBiMGVhMy5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQThGQTs7Ozs7O0FBWUE7Ozs7Ozs7QUFhQTs7Ozs7O0FBMkNBOzs7Ozs7QUFZQTs7Ozs7O0FBb01BOzs7Ozs7QUFZQTs7Ozs7O0FBWUE7Ozs7OztBQVlBOzs7Ozs7QUEyVEE7Ozs7Ozs7Ozs7QUFpQkE7Ozs7OztBQTZFQSIsInNvdXJjZVJvb3QiOiIifQ==