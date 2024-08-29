const menu = document.querySelector(".toggleMenu");
const navigation = document.querySelector(".navigation");
const navbar = document.querySelector("#navbar");
const navLinks = document.querySelectorAll(".nav__link");
const navLinkContainer = document.querySelector(".nav__links");
const sticky = navbar.offsetTop;
const addSkillModal = document.querySelector(".add-skill-modal");
const homeContainer = document.querySelector("#nav_home");
const skillsContainer = document.querySelector("#nav_skills");

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
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// Toggling Home and Skills
navLinkContainer.addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");

    if (id === "#nav_skills") {
      skillsContainer.style.display = "block";
      homeContainer.style.display = "none";
    } else {
      skillsContainer.style.display = "none";
      homeContainer.style.display = "block";
    }
    e.target.classList.add("active-nav-link");

    // Removing active-nav class on other links
    navLinks.forEach((link) => {
      if (link.getAttribute("href") !== id) {
        link.classList.remove("active-nav-link");
      }
    });

    if (menu.classList.contains("active")) toggleMenu();

    if (id !== "#")
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    closeSkillForm();
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
function hire(e) {
  console.log(e);
}
function sendMessage(e) {
  // if (!e) return;
  console.log(e);
  // e.preventDefault();
}

// Skills form starts

function openSkillForm() {
  addSkillModal.style.display = "block";
}

function closeSkillForm() {
  addSkillModal.style.display = "none";
}

function submitSkillForm(e) {
  if (!e) return;
  e.preventDefault();
}
// Skills form ends
