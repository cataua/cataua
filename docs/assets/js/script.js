(function () {
    const button = document.querySelectorAll('[data-action="translate"]');
    button.forEach(function (btn) {
        btn.addEventListener('click', (e) => translate(e));
    });
})();
function translate(button) {
    const languages = ['en', 'pt'];
    const lang = button.target.getAttribute('data-language');
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(function (btn) {
        btn.classList.toggle('hide');
    });
    languages.forEach(function (language) {
        const element = document.querySelector(`#${language}`);
        const id = element.getAttribute('id');
        if (lang !== id) {
            element.classList.add('hide');
        } else {
            element.classList.remove('hide');
        }
    });
}