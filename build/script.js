"use strict";

var body = document.body;

var openAccordion = function openAccordion(accordion) {
  var list = accordion.querySelector('.e-accordion__list');

  if (list.style.maxHeight) {
    list.style.maxHeight = null;
  } else {
    list.style.maxHeight = "".concat(list.scrollHeight, "px");
  }
};

body.addEventListener('click', function (event) {
  var target = event.target;
  var currentTarget = event.currentTarget;
  var accordion = target.closest('.e-accordion');
  if (!accordion) return;
  if (!currentTarget.contains(accordion)) return;
  openAccordion(accordion);
});
document.querySelector('.onoffswitch').addEventListener('click', function () {
  var root = document.documentElement;
  root.classList.add('theme');
  root.classList.add('theme_color_project-inverse');
});