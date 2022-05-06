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
const moreBtnSwitch = (item) => {
    const height = item.offsetHeight;
    // const textContainer = document.querySelector('.detail__info-content-text_active');
    if(height > 259) {
      item.classList.add('detail__info-content-text_morebtn');
      moreBtn.style.display = 'block';
    } else {
      item.classList.remove('detail__info-content-text_morebtn');
      moreBtn.style.display = 'none';
    }
  
}

// Меняем активность у таба
const changeActiveClass = (e, activeClass = 'detail__info-item_active') => {
  const moreButton = document.querySelector('.detail__info-content-text_morebtn');
  const containerOpen = document.querySelector('.detail__info-content-text_open');
  moreButton && moreButton.classList.remove('detail__info-content-text_morebtn');
  containerOpen && containerOpen.classList.remove('detail__info-content-text_open');
  moreBtn.textContent = 'Развернуть полностью';

  const container = document.querySelector(`.detail__info-list-js`);
  const tab = e.target;
  const id = tab.id;
  if(tab.classList.contains('detail__info-item')) {
    const prevTab = container.querySelector(`.${activeClass}`);
    const prevContent = document.querySelector(`.detail__info-content-text_active`);
    prevTab.classList.remove(`detail__info-item_active`);
    prevContent.classList.remove('detail__info-content-text_active');
    tab.classList.add(`${activeClass}`);
    const currentContent = document.querySelector(`[data-content='${id}']`);
    currentContent.classList.add('detail__info-content-text_active');
    moreBtnSwitch(currentContent);
  } else {
    return;
  }
}

moreBtn && moreBtnSwitch(document.querySelector(`[data-content='description']`));
tab && tab.addEventListener('click', e => changeActiveClass(e));

moreBtn && moreBtn.addEventListener('click', () => {
  const textContainer = document.querySelector('.detail__info-content-text-container');
  textContainer.classList.toggle('detail__info-content-text_open');
  moreBtn.textContent === 'Свернуть' ? moreBtn.textContent = 'Развернуть полностью' : moreBtn.textContent = 'Свернуть';
})