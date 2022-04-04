const supportForm = document.querySelector('.support__form-js');
supportForm && supportForm.addEventListener('click', (e) => {
  const input = e.target.closest('.support__placeholder-container');
  if(input) {
    input.classList.remove('form__placeholder-container_active');
  }
})