parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
var e=document.querySelector(".work");function n(e){"Enter"===e.code&&(t(this.value),this.value="")}function t(e){e&&c(e)}function c(n){e.innerHTML+='\n  <li class = "new__block">\n       <input type="radio">\n       <p class = "new__text">'.concat(n,'</p> \n       <img class = "delete" src="/dump.d496a47b.png";   \n  </li>\n  '),r(),o()}function r(){document.querySelectorAll(".delete").forEach(function(e){return e.addEventListener("click",function(){e.parentElement.remove()})})}function o(){e.querySelectorAll('[type="radio"]').forEach(function(e){e.addEventListener("click",function(){e.parentElement.style.backgroundColor="#A9B2C3",e.parentElement.style.opacity="0.3"})})}document.querySelector(".enter__word").addEventListener("keypress",n);
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.4470a3e9.js.map