!function(e){var t={};function n(a){if(t[a])return t[a].exports;var s=t[a]={i:a,l:!1,exports:{}};return e[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(a,s,function(t){return e[t]}.bind(null,s));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);var a=Array.from(document.getElementsByClassName("nav-menu__list-item"));a.forEach((function(e){e.addEventListener("click",(function(){a.forEach((function(e){e.classList.remove("active")})),e.classList.add("active")}))}));var s=document.getElementsByClassName("language-list")[0],c=Array.from(s.children);c.forEach((function(e){e.addEventListener("click",(function(){c.forEach((function(e){e.classList.remove("active")})),e.classList.add("active")}))}));var d=document.getElementsByClassName("content__nav-menu")[0],o=Array.from(d.children);o.forEach((function(e){e.addEventListener("click",(function(){o.forEach((function(e){e.classList.remove("active")})),e.classList.add("active")}))}));var i=document.getElementById("readnext-p_1"),r=document.getElementById("readnext-btn_1"),l=document.getElementsByClassName("cps-paragraph")[0],m=!1;r.addEventListener("click",(function(){m?(i.classList.remove("expanded"),r.classList.remove("expanded"),l.classList.remove("active")):(i.classList.add("expanded"),r.classList.add("expanded"),l.classList.add("active")),m=!m}));var u=document.getElementById("expand-section-btn1"),v=document.getElementById("expanding-section1"),f=document.getElementById("expand-section-btn2"),p=document.getElementById("expanding-section2"),L=!1,y=!1;u.addEventListener("click",(function(){L?(u.classList.remove("expanded"),v.classList.remove("expanded")):(u.classList.add("expanded"),v.classList.add("expanded")),L=!L})),f.addEventListener("click",(function(){y?(f.classList.remove("expanded"),p.classList.remove("expanded")):(f.classList.add("expanded"),p.classList.add("expanded")),y=!y}));var E=Array.from(document.getElementsByClassName("modal__close-btn")),g=document.getElementsByClassName("modal__feedback")[0],b=document.getElementsByClassName("modal__call")[0],x=function(){g.classList.remove("active"),document.body.classList.remove("modalopened"),b.classList.remove("active"),document.body.classList.remove("modalopened")};E.forEach((function(e){e.addEventListener("click",x)}));var _=Array.from(document.getElementsByClassName("call-btn")),B=Array.from(document.getElementsByClassName("chat-btn"));_.forEach((function(e){e.addEventListener("click",(function(){b.classList.add("active"),document.body.classList.add("modalopened")}))})),B.forEach((function(e){e.addEventListener("click",(function(){g.classList.add("active"),document.body.classList.add("modalopened")}))}));var h=window.innerWidth;Array.from(document.getElementsByClassName("swiper-slide"));h<=768&&new Swiper(".swiper",{pagination:{el:".swiper-pagination",clickable:!0},slidesPerView:"auto",spaceBetween:16});var k=document.getElementById("burger-btn"),C=document.getElementById("nav-menu"),N=document.getElementsByClassName("empty__modal")[0],w=document.getElementsByClassName("content-header__buttons")[0],I=!1,j=function(){I?(C.classList.remove("active"),document.body.classList.remove("modalopened"),N.classList.remove("active"),w.classList.remove("not-visible")):(C.classList.add("active"),document.body.classList.add("modalopened"),N.classList.add("active"),w.classList.add("not-visible")),I=!I};k.addEventListener("click",j),document.addEventListener("click",(function(e){var t=e.composedPath()[0];t.classList.contains("modal")&&(x(),t.classList.contains("empty__modal")&&j())}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map