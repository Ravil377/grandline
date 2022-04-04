import Swiper from 'swiper';
const burger = document.querySelector('.burger-js');
const burgerMenu = document.querySelector('.burger__menu-js');
const body = document.querySelector('.body');
const burgerSwiper = '.header__navigation_mobil-js';
const moreBtns = document.querySelectorAll('.dropdown__icon-js');
moreBtns.forEach(moteBtn => moteBtn.addEventListener('click', (e) => e.preventDefault()));
if(document.querySelector(burgerSwiper)) {
  const swiperBurgerSlider = new Swiper(burgerSwiper, {
    slidesPerView: 'auto',
    spaceBetween: 32,
  })
}

const checkKeyPress = (e) => {
  if(e.code === "Escape") {
    burger.classList.remove('burger_close');
    burgerMenu.classList.remove('burger__menu_open');
    body.classList.remove('body_fixed');
  }
}

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_close');
  burgerMenu.classList.toggle('burger__menu_open');
  body.classList.toggle('body_fixed');
})

document.addEventListener('keydown', checkKeyPress);