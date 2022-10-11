const mainBanner = new Swiper(".mainBanner", {
  direction: "horizontal",
  slidesPerView: "auto",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const highlightGallery = new Swiper(".highlight .gallery", {
  direction: "horizontal",
  slidesPerView: "auto",
  autoplay: true,
});

const resizeMenu = () => {
  return window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".page-header");
    window.pageYOffset > 40
      ? navbar.classList.add("isActive")
      : navbar.classList.remove("isActive");
  });
};

document.addEventListener("DOMContentLoaded", () => {
  resizeMenu();
  AOS.init({ once: true, anchorPlacement: "top" });
});
