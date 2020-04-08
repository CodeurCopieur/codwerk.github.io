const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav__list');

hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle('active');
  navList.classList.toggle('is-active');
})

const bar = document.querySelector('.bar');

addEventListener('scroll', ()=> {
  const heightPage = document.body.scrollHeight - innerHeight;
  const pourcentage = pageYOffset / heightPage * 100;
  bar.style.width = `${pourcentage}%`;
})


let loader = document.querySelector('.loader');


window.addEventListener('load', (e)=> {
  loader.style.display='none';
  e.srcElement.body.classList.add('is-change');
});