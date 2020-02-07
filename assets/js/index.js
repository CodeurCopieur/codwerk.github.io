const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');

hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle('active');
  navList.classList.toggle('is-active');
})