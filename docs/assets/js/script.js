(function () {
  const button = document.querySelectorAll('[data-action="translate"]');
  const btnToggleMenu = document.querySelector('[data-action="menu-toggle"]');
  const menuNav = document.querySelector(".menu-nav");
  if (btnToggleMenu) {
    btnToggleMenu.addEventListener("click", (e) => toggleMenu(e));
  }
  if (menuNav) {
    const links = menuNav.querySelectorAll("a");
    links.forEach(function (link) {
      link.addEventListener("click", NavigationMenu);
    });
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
      const menuNav = document.querySelector(".menu-nav");
      const menuLinks = menuNav ? menuNav.querySelectorAll("a") : [];
      menuLinks.forEach(function (link) {
        const contentKey = link.getAttribute("data-content");
        const menuText = MenuText[lang][contentKey];
        if (menuText) {
          link.textContent = menuText;
        }
      });
      if (content) {
        if (language === lang) {
          content.classList.remove("hide");
        } else {
          content.classList.add("hide");
        }
      }
    });
      const menuNav = document.querySelector(".menu-nav");
      if (menuNav) {
        const links = menuNav.querySelectorAll("a");
        links.forEach(function (link) {
          const href = link.getAttribute("href");
          const newDestination = (lang === "pt" && href !== "#top")
            ? `${href}-pt`
            : href.replace("-pt", "");
          link.setAttribute("href", newDestination);
        });
      }
  }
  hideMenu();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleMenu(event) {
  const targetSelector = event.currentTarget.getAttribute("data-target");
  event.currentTarget.classList.toggle("active");
  const menu = document.querySelector(targetSelector);
  menu.classList.toggle("active");
}

function hideMenu() {
  const btnToggleMenu = document.querySelector('[data-action="menu-toggle"]');
  const menuNav = document.querySelector(".menu-nav");
  if (btnToggleMenu && menuNav) {
    btnToggleMenu.classList.remove("active");
    menuNav.classList.remove("active");
  }
}

function NavigationMenu(event) {
  event.preventDefault();
  const targetSelector = event.currentTarget.getAttribute("href");
  if (targetSelector === "#top") {  
    window.scrollTo({ top: 0, behavior: "smooth" });
    hideMenu();
    return;
  }
  const targetElement = document.querySelector(targetSelector);
  if (targetElement) {
    const posY = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const isMobile = window.innerWidth < 768;
    window.scrollTo({ top: posY - (isMobile ? 150 : 250), behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  hideMenu();
}

const MenuText = {
  en: {
    about: "About",
    background: "Background",
    stack: "Tech Stack & Tools",
    interests: "Personal Interests",
    contact: "Contact",
  },
  pt: {
    about: "Sobre",
    background: "Histórico",
    stack: "Tecnologias & Ferramentas",
    interests: "Interesses Pessoais",
    contact: "Contato",
  },
};