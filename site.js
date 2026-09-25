const mobileMenu = document.querySelector(".mobile-menu");

if (mobileMenu) {
  const closeMenu = () => {
    mobileMenu.removeAttribute("open");
  };

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!mobileMenu.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("scroll", closeMenu, { passive: true });
}
