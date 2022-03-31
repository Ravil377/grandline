import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
import { overlayDisabled } from "../popular-tarif/popular-tarif.js";

const internetSlider = '.internet__content-js';
if(document.querySelector(internetSlider)) {
  const swiperInternetSlider = new Swiper(internetSlider, {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: '.internet__button-right-js',
      prevEl: '.internet__button-left-js',
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

overlayDisabled();