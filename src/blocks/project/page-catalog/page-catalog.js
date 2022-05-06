import Swiper, { Pagination, Autoplay, Navigation } from "swiper";
Swiper.use([Pagination, Autoplay, Navigation]);

const catalogSlider = '.catalog__banner-slider-js';
const clearBtn = document.querySelector('.catalog__filter-clear-btn-js');

if(document.querySelector(catalogSlider)) {
  const swiperCatalogSlider = new Swiper(catalogSlider, {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 32,
    pagination: {
      el: ".slider__dots",
      clickable: true,
    },
    navigation: {
      nextEl: `.catalog__banner-btn-left-js`,
      prevEl: `.catalog__banner-btn-right-js`,
    },
    autoplay: {
      delay: 5000,
    },
  })
}

clearBtn && clearBtn.addEventListener('click', () => {
  const checkBoxContainer = document.querySelector('.catalog__filter-checkbox-container');
  const inputs = checkBoxContainer.querySelectorAll('.catalog__filter-checkbox-input-js');
  inputs.forEach(input => {
    input.checked = false;
  })
})

$(".js-range-slider").ionRangeSlider();