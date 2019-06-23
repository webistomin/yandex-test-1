"use strict";

var body = document.body;
var root = document.documentElement;

var openAccordion = function openAccordion(accordion) {
  var list = accordion.querySelector('.e-accordion__list');

  if (list.style.maxHeight) {
    list.style.maxHeight = null;
  } else {
    list.style.maxHeight = "".concat(list.scrollHeight, "px");
  }
};

var switchTheme = function switchTheme(switcher) {
  var switchWidth = getComputedStyle(switcher).width;
  var switchSlider = switcher.querySelector('.onoffswitch__slider');
  switcher.classList.toggle('onoffswitch_switched');
  root.classList.toggle('theme');
  root.classList.toggle('theme_color_project-inverse');

  if (switcher.classList.contains('onoffswitch_switched')) {
    switchSlider.style.transform = "translate(".concat(parseInt(switchWidth, 10) - 32, "px, -50%)");
  } else {
    switchSlider.style.transform = "translate(0, -50%)";
  }
};

body.addEventListener('click', function (event) {
  var target = event.target;
  var currentTarget = event.currentTarget;
  var accordion = target.closest('.e-accordion');

  if (accordion && currentTarget.contains(accordion)) {
    openAccordion(accordion);
  }

  var themeSwitcher = target.closest('.onoffswitch');

  if (themeSwitcher && currentTarget.contains(themeSwitcher)) {
    switchTheme(themeSwitcher);
  }
});
