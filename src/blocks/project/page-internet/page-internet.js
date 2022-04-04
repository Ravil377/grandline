import { overlayDisabled, sliderCard } from "../popular-tarif/popular-tarif.js";

// Интернет
let internetSlider;

internetSlider = document.querySelector('.internet__content-js');
if(internetSlider) swiperInternetSlider = sliderCard('internet');
overlayDisabled();