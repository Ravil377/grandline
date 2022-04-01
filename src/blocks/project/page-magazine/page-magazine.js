import Swiper, { Navigation } from 'swiper';
import { overlayDisabled } from "../popular-tarif/popular-tarif.js";
Swiper.use([Navigation]);

const magazineTopSaleSlider = '.top-sale__content-js';
const magazineSlider = '.magazine__content-js';
const tab2 = document.querySelector('.magazine__tabs2-js');

if(document.querySelector(magazineTopSaleSlider)) {
  const swiperTopSaleSlider = new Swiper(magazineTopSaleSlider, {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: '.top-sale__button-left-js',
      prevEl: '.top-sale__button-right-js',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  })
}

if(document.querySelector(magazineSlider)) {
  const swiperMagazineSlider = new Swiper(magazineSlider, {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: '.magazine__button-left-js',
      prevEl: '.magazine__button-right-js',
    },
    breakpoints: {
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    }
  })
}
tab2.addEventListener('click', (e) => {
  const tab = e.target;
  const isTab = tab.classList.contains('tab2__item-js');
  if(isTab) {
    tab2.querySelector('.menu2__tab_active').classList.remove('menu2__tab_active');
    tab.classList.add('menu2__tab_active');
  } else {
    return;
  }
})

overlayDisabled();