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
  const lang = button.currentTarget.getAttribute("data-language");
  const contentToShow = document.querySelector(`#${lang}`);
  const buttonsToShow = document.querySelectorAll(
    `[data-action="translate"]:not([data-language="${lang}"])`,
  );
  button.currentTarget.classList.add("hide");
  buttonsToShow.forEach(function (btn) {
    btn.classList.remove("hide");
  });
  if (contentToShow) {
    languages.forEach(function (language) {
      const content = document.querySelector(`#${language}`);
      if (content) {
        if (language === lang) {
          content.classList.remove("hide");
        } else {
          content.classList.add("hide");
        }
      }
    });
  }
}

function toggleMenu(event) {
  const targetSelector = event.currentTarget.getAttribute("data-target");
  event.currentTarget.classList.toggle("active");
  const menu = document.querySelector(targetSelector);
  menu.classList.toggle("active");
}
