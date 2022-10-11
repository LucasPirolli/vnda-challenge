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

const toggleMenu = (menu) => {
  const menuButton = document.querySelector(".fa-bars");
  const navigation = document.querySelector(".page-header>.container>.navbar");
  const groupIcons = document.querySelector(".page-header>.container>.groupIcons");
  const closeButton = document.querySelector(".fa.fa-square-xmark");

  const toggle = () => {
    menu.classList.toggle("isActive");
    navigation.classList.toggle("isActive");
    closeButton.classList.toggle("isActive");
    menuButton.classList.toggle("isActive");
    groupIcons.classList.toggle("isActive");
  };
  menuButton.addEventListener("click", () => toggle());
  closeButton.addEventListener("click", () => toggle());
};

const mobileMenu = () => {
  const menu = document.querySelector(".page-header>.container");
  toggleMenu(menu);
};

document.addEventListener("DOMContentLoaded", () => {
  resizeMenu();
  toggleMenu();
  mobileMenu();
  AOS.init({ once: true, anchorPlacement: "top" });
});
