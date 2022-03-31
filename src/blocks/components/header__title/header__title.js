import Swiper from 'swiper';
const tabs = document.querySelector('.title__tabs-js');
const titleTabSlider = '.title__tabs-js';

if(document.querySelector(titleTabSlider)) {
  const swipertitleTabSlider = new Swiper(titleTabSlider, {
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    spaceBetween: 5,
    // centeredSlides: true,
    centeredSlidesBounds: true,
  })
}

const changeActiveClass = (e, container) => {
  const tab = e.target;
  if(tab.classList.contains('swiper-slide')) {
    const prevTab = container.querySelector('.title__tab_active');
    prevTab.classList.remove('title__tab_active');
    tab.classList.add('title__tab_active');
  } else {
    return;
  }
}

tabs && tabs.addEventListener('click', (e) => changeActiveClass(e, tabs));