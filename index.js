// DOM elements
const navLinks = document.querySelectorAll(".nav__link");
const menu = document.querySelector(".toggleMenu");
const navigation = document.querySelector(".navigation");
const navLinkContainer = document.querySelector(".nav__links");
const addSkillModal = document.querySelector(".add-skill-modal");
const navbar = document.querySelector("#navbar");
const homeContainer = document.querySelector("#nav_home");
const skillsContainer = document.querySelector("#nav_skills");
const contactForm = document.querySelector(".contact-form");
const skillForm = document.querySelector(".skill-form");
const btnSkill1 = document.querySelector(".btn-skill1");
const formDialog = document.querySelector("#dialog");

const sticky = navbar.offsetTop;

// Resetting all form inputs
if (contactForm) contactForm.reset();
if (skillForm) skillForm.reset();

///// Responsive Nav /////

function toggleMenu() {
  menu.classList.toggle("active");
  navigation.classList.toggle("active");
}

///// Sticky Nav /////
// When the user scrolls the page, execute toggleSticky
window.onscroll = () => toggleSticky();

// Adding the sticky class to the navbar when reaching its scroll position. Remove "sticky" when leaving the scroll position
function toggleSticky() {
  if (window.scrollY >= sticky) navbar.classList.add("sticky");
  else navbar.classList.remove("sticky");
}

///// Toggling Home and Skills /////

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

///// Swiper /////

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
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function hire() {} // Dummy function

///// Dialog (success or failure) /////

function executeDialog(str) {
  if (str === "success") {
    formDialog.innerHTML = "<p>Form submission successfull</p>";
    formDialog.style.backgroundColor = "#4caf50";
  } else if (str === "failure") {
    formDialog.innerHTML =
      "<p>Form submission unsuccessfull. Invalid inputs. Try again!</p>";
    formDialog.style.backgroundColor = "#ff5250";
  } else {
    formDialog.innerHTML =
      "<p>Form submission unsuccessfull. Invalid proficiency (Range 1-100). Try again!</p>";
    formDialog.style.backgroundColor = "#ff5250";
  }

  // Show the dialog
  formDialog.classList.remove("hidden");
  formDialog.classList.add("show");

  // Hide the dialog after 2 seconds
  setTimeout(function () {
    formDialog.classList.remove("show");
    formDialog.classList.add("hidden");
  }, 2000);
}

///// Contact form /////

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let elements = contactForm.elements;
  let obj = {};

  // Destructuring form values
  for (let i = 0; i < elements.length; i++) {
    let item = elements.item(i);
    obj[item.name] = item.value;
  }

  const { fullName, email, subject, message } = obj;
  console.log(fullName, email, subject, message);

  executeDialog("success");
  contactForm.reset();
});

///// Skill Form /////

function openSkillForm() {
  addSkillModal.style.display = "block";
}
function closeSkillForm() {
  skillForm.reset();
  addSkillModal.style.display = "none";
}

skillForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const subskillArr = [],
    proficiencyArr = [];
  let elements = skillForm.elements;

  // Destructuring form values
  for (let i = 1; i < elements.length - 2; i += 2) {
    let subskill = elements.item(i).value;
    let proficiency = Number(elements.item(i + 1).value);

    if (!subskill && !proficiency) continue;
    if ((subskill && !proficiency) || (!subskill && proficiency)) {
      executeDialog("failure");
      closeSkillForm();
      return;
    }
    if (isNaN(proficiency) || proficiency < 1 || proficiency > 100) {
      executeDialog("invalid proficiency");
      closeSkillForm();
      return;
    }

    // storing for future use
    subskillArr.push(subskill);
    proficiencyArr.push(proficiency);
  }

  executeDialog("success");
  closeSkillForm();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeSkillForm();
});
