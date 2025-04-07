const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-menu-close");

menuBtn.addEventListener("click", () => {
  const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
  menuBtn.setAttribute("aria-expanded", !isExpanded);
  mobileMenu.classList.add("is-open");
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", () => {
  menuBtn.setAttribute("aria-expanded", "false");
  mobileMenu.classList.remove("is-open");
  document.body.style.overflow = "";
});

// Close menu when clicking on links
const menuLinks = document.querySelectorAll(".mobile-menu-link");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("is-open");
    document.body.style.overflow = "";
  });
});
