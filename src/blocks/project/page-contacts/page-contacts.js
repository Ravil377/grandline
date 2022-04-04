
if(document.querySelector('[id="map"]')) ymaps.ready(init);

function init() {
  let map = new ymaps.Map('map', {
    center: [55.83281781149385,37.92633620377941],
    zoom: 16.5,
  });

  let placemark = new ymaps.Placemark([55.83281781149385,37.92633620377941], {
    hintContent: '',
    balloonContent: ''
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: 'img/content/placemark.png',
    // Размеры метки.
    iconImageSize: [38, 55],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-25, -40]
  });

  map.geoObjects.add(placemark);
}