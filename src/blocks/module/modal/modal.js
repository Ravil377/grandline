const modal = document.querySelector('.modal');
const connectionBtn = document.querySelectorAll(`[data-id='connection']`);
const body = document.querySelector('.body');
const formSubmit = document.querySelector('.modal__form-js');
const modalCloseBtn = document.querySelector('.modal__close-js');
const modalContent = document.querySelector('.modal__content-js');
const success = document.querySelector('.modal__content-success-js');
const error = document.querySelector('.modal__content-error-js');
const returnBtns = document.querySelectorAll('.form_return-btn-js');

formSubmit && formSubmit.addEventListener('submit', (e) => {
  e.preventDefault();
  modalContent.style.display = 'none';
  success.style.display = 'flex';
})

connectionBtn.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
  })
  
})
const checkKeyPress = (e) => {
  if (e.code === "Escape") {
    closeModal();
  }
};

const checkPressOverlay = (e) => {
  if (e.target === modal) {
    closeModal();
  }
};

const openModal = () => {
  modalContent.style.display = 'block';
  error.style.display = 'none';
  success.style.display = 'none';
  modal.classList.add('modal_opened');
  body.classList.add('body_fixed');
}

const closeModal = () => {
  modal.classList.remove('modal_opened');
  body.classList.remove('body_fixed');
}

document.addEventListener('keydown', (e) => checkKeyPress(e));
modal && modal.addEventListener("click", e => checkPressOverlay(e));
modalCloseBtn && modalCloseBtn.addEventListener("click", closeModal);
returnBtns && returnBtns.forEach(btn => btn.addEventListener('click', closeModal));