"use strict";
//открытие меню
var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
navMain.classList.remove("main-nav--nojs");
navMain.classList.add("main-nav--closed");
navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});
//открытие модалки
var link = document.querySelectorAll(".js-modal-open");
console.log(link);
var pageBody = document.body;
var pageHtml = document.querySelector("html");
var modal = document.querySelector(".modal");
var overlay = document.querySelector(".modal__overlay");

for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function(evt) {
    evt.preventDefault();
    modal.classList.add("modal-show");
    pageBody.classList.add("modal-open");
    pageHtml.classList.add("modal-open");
  });

  overlay.addEventListener("click", function(evt) {
    modal.classList.remove("modal-show");
    pageBody.classList.remove("modal-open");
    pageHtml.classList.remove("modal-open");
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (modal.classList.contains("modal-show")) {
        modal.classList.remove("modal-show");
        pageBody.classList.remove("modal-open");
        pageHtml.classList.remove("modal-open");
      }
    }
  });
}
