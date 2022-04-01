import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);
import { overlayDisabled } from "../popular-tarif/popular-tarif.js";

const telephonySlider = '.telephony__content-js';
if(document.querySelector(telephonySlider)) {
  const swiperTelephonySlider = new Swiper(telephonySlider, {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: '.telephony__button-right-js',
      prevEl: '.telephony__button-left-js',
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