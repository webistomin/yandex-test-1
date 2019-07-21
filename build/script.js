const body = document.body;
const root = document.documentElement;

const openAccordion = (accordion) => {
  const list = accordion.querySelector('.e-accordion__list');
  if (list.style.maxHeight) {
    list.style.maxHeight = null;
  } else {
    list.style.maxHeight = `${list.scrollHeight}px`;
  }
};

const switchTheme = (switcher) => {
  const switchWidth = getComputedStyle(switcher).width;
  const switchSlider = switcher.querySelector('.onoffswitch__slider');
  switcher.classList.toggle('onoffswitch_switched');
  root.classList.toggle('theme');
  root.classList.toggle('theme_color_project-inverse');
  
  if (switcher.classList.contains('onoffswitch_switched')) {
    switchSlider.style.transform = `translate(${parseInt(switchWidth, 10) - 32}px, -50%)`;
  } else {
    switchSlider.style.transform = `translate(0, -50%)`;
  }
  
};

body.addEventListener('click', (event) => {
  
  let target = event.target;
  let currentTarget = event.currentTarget;
  
  let accordion = target.closest('.e-accordion');
  if (accordion && currentTarget.contains(accordion)) {
    openAccordion(accordion);
  }
  
  let themeSwitcher = target.closest('.onoffswitch');
  if (themeSwitcher && currentTarget.contains(themeSwitcher)) {
    switchTheme(themeSwitcher)
  }
  
});
