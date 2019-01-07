(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
const section = {
    about: $('.about').offset().top,
    banner1: $('.banner-1').offset().top,
    aboutWork: $('.about-work').offset().top,
    banner2: $('.banner-2').offset().top,
    offer: $('.offer').offset().top,
    form: $('.form').offset().top,
}

let scroll = 0;
/*
$(window).scroll(function (event) {
    let scroll = $(window).scrollTop();
    if (scroll > 0 ) {
        $('.lab-logo-orange').attr('src', './assets/img/logo-lab-blanco.svg');
    }
    
    if (scroll > section.about - 50 ) {
        $('.lab-logo-orange').attr('src', './assets/img/logo-lab-nar.svg');
    }
});
*/
},{}]},{},[1])