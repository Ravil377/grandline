const faq = document.querySelector('.faq__lists-js');

const faqClose = () => {
    const active = faq.querySelector('.faq__item_open');
    active && active.classList.remove('faq__item_open');
}

const faqOpen = (e) => {
    const item = e.target;
    const isQuestion = item.closest('.faq__item').classList.contains('faq__item');
    if(isQuestion) {
        if(item.closest('.faq__item').classList.contains('faq__item_open')) {
            item.closest('.faq__item').classList.remove('faq__item_open');    
        } else {
            faqClose();
            item.closest('.faq__item').classList.add('faq__item_open');
        }
    }
}


faq && faq.addEventListener('click', e => faqOpen(e));