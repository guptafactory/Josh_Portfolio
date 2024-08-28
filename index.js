const menu = document.querySelector(".toggleMenu");
const navigation = document.querySelector(".navigation");
const navbar = document.querySelector("#navbar");
const sticky = navbar.offsetTop;

// Navbar starts
function toggleMenu() {
  menu.classList.toggle("active");
  navigation.classList.toggle("active");
}
// When the user scrolls the page, execute toggleSticky
window.onscroll = function () {
  toggleSticky();
};

// Adding the sticky class to the navbar when reaching its scroll position. Remove "sticky" when leaving the scroll position
function toggleSticky() {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
// Navbar ends

// Swiper starts
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  // autoplay: {
  //   delay: 1000,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// Swiper ends
