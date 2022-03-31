import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const tarifSlider = '.popular-tarif__content-js';
const tabSlider = '.popular-tarif__tabs-js';
const tabEquipmentSlider = '.equipment__tabs-js';
const equipmentSlider = '.equipment__content-js';
if(document.querySelector(tarifSlider)) {
  const swiperTarifSlider = new Swiper(tarifSlider, {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: '.popular-tarif__button-right-js',
      prevEl: '.popular-tarif__button-left-js',
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
if(document.querySelector(equipmentSlider)) {
  const swiperEquipmentSlider = new Swiper(equipmentSlider, {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: '.equipment__button-right-js',
      prevEl: '.equipment__button-left-js',
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
if(document.querySelector(tabSlider)) {
  const swiperTarifTabSlider = new Swiper(tabSlider, {
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    spaceBetween: 5,
    // centeredSlides: true,
    centeredSlidesBounds: true,
  })
}

if(document.querySelector(tabEquipmentSlider)) {
  const swiperTarifTabSlider = new Swiper(tabEquipmentSlider, {
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    spaceBetween: 5,
    // centeredSlides: true,
    centeredSlidesBounds: true,
  })
}

const tabs = document.querySelector('.popular-tarif__tabs-js');
const tabsEquipment = document.querySelector('.equipment__content-js');
// const '.overlay-js'

const changeActiveClass = (e, container) => {
  const tab = e.target;
  if(tab.classList.contains('swiper-slide')) {
    const prevTab = container.querySelector('.popular-tarif__tab_active');
    prevTab.classList.remove('popular-tarif__tab_active');
    tab.classList.add('popular-tarif__tab_active');
  } else {
    return;
  }
}

tabs && tabs.addEventListener('click', (e) => changeActiveClass(e, tabs));
tabsEquipment && tabsEquipment.addEventListener('click', (e) => changeActiveClass(e, tabsEquipment));

export const overlayDisabled = () => {
  const btns = document.querySelectorAll('.popular-tarif__button-right');
  btns.forEach(btn => {
    let btnDisabled = btn.classList.contains('swiper-button-disabled');
    let overlay = btn.closest('.overlay-js');
    btnDisabled ? overlay.classList.add('overlay_disabled') : overlay.classList.remove('overlay_disabled');
  })
}
if(document.querySelector('.popular-tarif__button-right')) {
  window.addEventListener(`resize`, event => {
    overlayDisabled();
  }, false);  
  overlayDisabled();
}