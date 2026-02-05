(function() {
    const button = document.querySelectorAll('[data-action="translate"]');
    button.forEach(function(btn) {
        btn.addEventListener('click', (e) => translate(e));
    });
})();
function translate(button) {
    const languages = [ 'en', 'pt'];
    const lang = button.target.getAttribute('data-lang');
    languages.forEach(function(language) {
        const elements = document.querySelectorAll(`#${language}`);
        elements.forEach(function(element) {
            element.classList.remove('hiden');
            if (language !== lang) {
                element.classList.add('hiden');
            }
        });
    });
}