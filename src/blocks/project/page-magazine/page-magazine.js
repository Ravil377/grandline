import { overlayDisabled, sliderCard, sliderTab } from "../popular-tarif/popular-tarif.js";

// Интернет-магазин
let magazineTopSlider,
    magazineEquipmentSlider,
    tabMagazineEquipmentSlider;

magazineTopSlider = document.querySelector('.top-sale__content-js');
magazineEquipmentSlider = document.querySelector('.magazine__content-js');
tabMagazineEquipmentSlider = document.querySelector('.magazine__tabs-js');
const tab2 = document.querySelector('.magazine__tabs2-js');

if(magazineTopSlider) swiperMagazineTopSlider = sliderCard('top-sale');
if(magazineEquipmentSlider) swiperMagazineEquipmentSlider = sliderCard('magazine');
if(tabMagazineEquipmentSlider) swiperTabMagazineEquipmentSlider = sliderTab('magazine');

tab2 && tab2.addEventListener('click', (e) => {
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