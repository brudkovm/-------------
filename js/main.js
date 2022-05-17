const btns = document.querySelectorAll('.btn');

btns.forEach(function(each_button) {
    each_button.addEventListener('click', function(e) {
        const title = e.currentTarget.parentElement.parentElement;
        title.classList.toggle('show_text');
    });
});