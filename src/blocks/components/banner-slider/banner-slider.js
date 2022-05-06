import Swiper, { Pagination, Autoplay } from "swiper";
Swiper.use([Pagination, Autoplay]);

const mainSlider = '.main-slider-js';
const businessSlider = '.business-slider-js';
const magazineSlider = '.magazine-slider-js';

if(document.querySelector(mainSlider)) {
  const swiperMainSlider = new Swiper(mainSlider, {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 1000,
    pagination: {
      el: ".slider__dots",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  })
}

if(document.querySelector(businessSlider)) {
  const swiperBusinessSlider = new Swiper(businessSlider, {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 1000,
    pagination: {
      el: ".slider__dots",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  })
}

if(document.querySelector(magazineSlider)) {
  const swiperMagazineSlider = new Swiper(magazineSlider, {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 1000,
    pagination: {
      el: ".slider__dots",
      clickable: true,
    },
    autoplay: {
      delay: 5000,
    },
  })
}