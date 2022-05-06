import { overlayDisabled, sliderTab, sliderCard } from "../popular-tarif/popular-tarif.js";

// Для бизнеса
let businessSlider, 
    tabBusinessSlider;

businessSlider = document.querySelector('.business__content-js');
tabBusinessSlider = document.querySelector('.business__tabs-js');

if(businessSlider) swiperBusinessSlider = sliderCard('business');
if(tabBusinessSlider) swiperTabBusinessSlider = sliderTab('business');

overlayDisabled();
