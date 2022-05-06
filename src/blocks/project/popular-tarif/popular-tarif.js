import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

var swiperTarifSlider,
swiperTabTarifSlider,
swiperEquipmentSlider,
swiperTabEqipmentSlider,
swiperBusinessSlider,
swiperTabBusinessSlider,
swiperInternetSlider,
swiperMagazineTopSlider,
swiperMagazineEquipmentSlider,
swiperTabMagazineEquipmentSlider;

var tarifSlider, 
    tabTarifSlider, 
    equipmentSlider, 
    tabEquipmentSlider;

// Главная
tarifSlider = document.querySelector('.popular-tarif__content-js');
tabTarifSlider = document.querySelector('.popular-tarif__tabs-js');
equipmentSlider = document.querySelector('.equipment__content-js');
tabEquipmentSlider = document.querySelector('.equipment__tabs-js');

// Меняем активность у таба
const changeActiveClass = (e, tabClass, activeClass = 'popular-tarif') => {
  const container = document.querySelector(`.${tabClass}__tabs-js`);
  const tab = e.target;
  if(tab.classList.contains('swiper-slide')) {
    const prevTab = container.querySelector(`.${activeClass}__tab_active`);
    prevTab.classList.remove(`${activeClass}__tab_active`);
    tab.classList.add(`${activeClass}__tab_active`);
  } else {
    return;
  }
}
// Вешаем слайдер на табы
export const sliderTab = (tabClass, active) => {
  const tab = document.querySelector(`.${tabClass}__tabs-js`);
  tab.addEventListener('click', (e) => changeActiveClass(e, tabClass, active));
  return new Swiper(`.${tabClass}__tabs-js`, {
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    spaceBetween: 5,
    centeredSlidesBounds: true,
  })
}
// Вешаем слайдер на карты
export const sliderCard = (slider) => {
  return new Swiper(`.${slider}__content-js`, {
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlidesBounds: true,
    navigation: {
      nextEl: `.${slider}__button-right-js`,
      prevEl: `.${slider}__button-left-js`,
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
// Проверяем присутствие кнопки дизаблед и отключаем оверлей у слайдера
export const overlayDisabled = () => {
  const btns = document.querySelectorAll('.popular-tarif__button-right');
  btns.forEach(btn => {
    let btnDisabled = btn.classList.contains('swiper-button-disabled');
    let overlay = btn.closest('.overlay-js');
    btnDisabled ? overlay.classList.add('overlay_disabled') : overlay.classList.remove('overlay_disabled');
  })
}

if(tarifSlider) swiperTarifSlider = sliderCard('popular-tarif');
if(tabTarifSlider) swiperTabTarifSlider = sliderTab('popular-tarif');
if(equipmentSlider) swiperEquipmentSlider = sliderCard('equipment');
if(tabEquipmentSlider) swiperTabEqipmentSlider = sliderTab('equipment');

// Если есть кнопка следующий слайд вешаем слушатель на ресайз
if(document.querySelector('.popular-tarif__button-right')) {
  window.addEventListener(`resize`, event => {
    overlayDisabled();
  }, false);  
  overlayDisabled();
}