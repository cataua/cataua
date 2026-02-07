(function () {
  const button = document.querySelectorAll('[data-action="translate"]');
  const btnToggleMenu = document.querySelector('[data-action="menu-toggle"]');
  if (btnToggleMenu) {
    btnToggleMenu.addEventListener("click", (e) => toggleMenu(e));
  }
  button.forEach(function (btn) {
    btn.addEventListener("click", (e) => translate(e));
  });
})();

function translate(button) {
  const languages = ["en", "pt"];
  const lang = button.target.getAttribute("data-language");
  const buttons = document.querySelectorAll('[data-action="translate"]');
  buttons.forEach(function (btn) {
    btn.classList.toggle("hide");
  });
  languages.forEach(function (language) {
    const element = document.querySelector(`#${language}`);
    const id = element.getAttribute("id");
    if (lang !== id) {
      element.classList.add("hide");
    } else {
      element.classList.remove("hide");
    }
  });
}

function toggleMenu(event) {
  const targetSelector = event.currentTarget.getAttribute("data-target");
  const menu = document.querySelector(targetSelector);
  menu.classList.toggle("hide");
}
