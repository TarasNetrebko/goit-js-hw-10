!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=o.parcelRequire7bc7;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var r={id:e,exports:{}};return n[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,o){t[e]=o},o.parcelRequire7bc7=r);var i=r("iU1Pc"),u=document.querySelector("button"),c=document.querySelector(".delay"),l=document.querySelector(".amount"),a=document.querySelector(".step");function d(o,n){var t=Math.random()>.3;setTimeout((function(){t?Promise.resolve({position:o,delay:n}).then((function(o){e(i).Notify.success("Fulfilled promise ".concat(o.position," in ").concat(o.delay,"ms"))})):Promise.reject({position:o,delay:n}).catch((function(o){e(i).Notify.failure("Rejected promise ".concat(o.position," in ").concat(o.delay,"ms"))}))}),n)}u.addEventListener("click",(function(e){e.preventDefault();for(var o=Number(c.value),n=1;n<=l.value;n+=1)d(n,o),o+=Number(a.value)}))}();
//# sourceMappingURL=03-promises.cab54af6.js.map