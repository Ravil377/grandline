import { sliderTab } from "../../project/popular-tarif/popular-tarif.js";

// Новости
let newsSlider, 
    faqSlider,
  swiperTabNewsSlider,
  swiperTabFaqSlider;
newsSlider = document.querySelector('.news__tabs-js');
faqSlider = document.querySelector('.faq__tabs-js');

if(newsSlider) sliderTab('news', swiperTabNewsSlider, 'title');
if(faqSlider) sliderTab('faq', swiperTabFaqSlider, 'title');