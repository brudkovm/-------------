const modal_overlay = document.querySelector('.modal-overlay');
const discount_button = document.querySelector('.discount-button__text');
const modal_close = document.querySelector('.modal-close');
const discount_close = document.querySelector('.discount-button__close');
const discount_button_all = document.querySelector('.discount-button');

discount_button.addEventListener('click', function() {
    modal_overlay.classList.add('open-modal');
});
modal_close.addEventListener('click', function() {
    modal_overlay.classList.remove('open-modal');
});
discount_close.addEventListener('click', function() {
    discount_button_all.classList.add('close-discount');
});