import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const mainBanner = new Swiper(".main-banner", {
  direction: 'vertical'
});

const resizeMenu = () => {
  return window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".page-header");
    console.log(window.pageYOffset);
    window.pageYOffset > 40
      ? navbar.classList.add("isActive")
      : navbar.classList.remove("isActive");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  resizeMenu();
});
