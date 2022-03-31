import Swiper, { Pagination, Autoplay } from "swiper";
Swiper.use([Pagination, Autoplay]);

const mainSlider = '.main-slider-js';
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