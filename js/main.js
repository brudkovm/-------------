const btns = document.querySelectorAll('.btn');
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const title = e.currentTarget.parentElement.parentElement;
        title.classList.toggle('show_text');
    });
});