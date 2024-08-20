document.querySelectorAll('.button[href="#partner-form"]').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#partner-form').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
