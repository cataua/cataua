(function() {
    const button = document.querySelectorAll('[data-action="translate"]');
    button.forEach(function(btn) {
        btn.addEventListener('click', (e) => translate(e));
    });
})();
function translate(button) {
    const languages = [ 'en', 'pt'];
    const lang = button.target.getAttribute('data-language');
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function(btn) {
        btn.classList.toggle('hide');
    });
    languages.forEach(function(language) {
        const elements = document.querySelectorAll(`#${language}`);
        elements.forEach(function(element) {
            const id = element.getAttribute('id');
            if (language !== id) {
                element.classList.add('hide');
            } else {
                element.classList.remove('hide');
            }
        });
    });
}