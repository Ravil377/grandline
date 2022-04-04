import Swiper, { Pagination, Thumbs } from "swiper";
Swiper.use([Pagination, Thumbs]);

const tab = document.querySelector('.detail__info-list-js');
const moreBtn = document.querySelector('.detail__info-content-text-more-js');

if(document.querySelector('.detail__big-slider-js')) {
  const cardThumbs = new Swiper(".detail__small-slider-js", {
      slidesPerView: 4,
      spaceBetween: 31,
      freeMode: true,
      watchSlidesProgress: true,
  });

  const card = new Swiper(".detail__big-slider-js", {
      spaceBetween: 10,
      thumbs: {
        swiper: cardThumbs,
      },
  });
}

// Меняем активность у таба
const changeActiveClass = (e, activeClass = 'detail__info-item_active') => {
  const container = document.querySelector(`.detail__info-list-js`);
  const tab = e.target;
  if(tab.classList.contains('detail__info-item')) {
    const prevTab = container.querySelector(`.${activeClass}`);
    prevTab.classList.remove(`${activeClass}`);
    tab.classList.add(`${activeClass}`);
  } else {
    return;
  }
}
tab && tab.addEventListener('click', e => changeActiveClass(e));
moreBtn && moreBtn.addEventListener('click', () => {
  const textContainer = document.querySelector('.detail__info-content-text-container');
  textContainer.classList.toggle('detail__info-content-text_open');
  moreBtn.textContent === 'Свернуть' ? moreBtn.textContent = 'Развернуть полностью' : moreBtn.textContent = 'Свернуть';
})