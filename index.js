const menu = document.querySelector(".toggleMenu");
const navigation = document.querySelector(".navigation");
const navbar = document.querySelector("#navbar");
const sticky = navbar.offsetTop;
const addSkillModal = document.querySelector(".add-skill-modal");

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

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    if (id === "#nav_skills") {
    } else {
    }
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});
// Navbar ends

// Swiper starts
const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  grabCursor: true,
  mousewheel: true,
  keyboard: {
    enabled: true,
  },
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
  //   delay: 1500,
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

function sendMessage() {}
// Skills form starts
function showSkillForm() {}
function submitSkillForm(e) {
  e.preventDefault();
}
function cancelSkillForm() {}
// Skills form ends

function openSkillForm() {
  addSkillModal.style.display = "block";
}

function closeSkillForm() {
  addSkillModal.style.display = "none";
}
