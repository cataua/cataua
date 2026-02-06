(function() {
    const button = document.querySelectorAll('[data-action="translate"]');
    button.forEach(function(btn) {
        btn.addEventListener('click', (e) => translate(e));
    });
})();
function translate(button) {
    const languages = [ 'en', 'pt'];
    const lang = button.target.getAttribute('data-lang');
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(btn) {
        btn.classList.toggle('hide');
    });
    languages.forEach(function(language) {
        const elements = document.querySelectorAll(`#${language}`);
        elements.forEach(function(element) {
            element.classList.remove('hide');
            if (language !== lang) {
                element.classList.add('hide');
            }
        });
    });
}