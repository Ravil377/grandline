import { overlayDisabled, sliderCard } from "../popular-tarif/popular-tarif.js";

// Телефония
let telephonySlider;
telephonySlider = document.querySelector('.telephony__content-js');

if(telephonySlider) swiperTelephonySlider = sliderCard('telephony');
overlayDisabled();