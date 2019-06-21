const body = document.body;

const openAccordion = (accordion) => {
  const list = accordion.querySelector('.e-accordion__list');
  if (list.style.maxHeight){
    list.style.maxHeight = null;
  } else {
    list.style.maxHeight = `${list.scrollHeight}px`;
  }
};

body.addEventListener('click', (event) => {
  let target = event.target;
  let currentTarget = event.currentTarget;
  
  let accordion = target.closest('.e-accordion');
  
  if (!accordion) return;
  if (!currentTarget.contains(accordion)) return;
  
  openAccordion(accordion);
});

document.querySelector('.onoffswitch').addEventListener('click', () => {
  let root = document.documentElement;
  root.classList.add('theme');
  root.classList.add('theme_color_project-inverse');
});
