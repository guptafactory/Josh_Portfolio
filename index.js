// Navbar starts
function toggleMenu() {
  const toggleMenu = document.querySelector(".toggleMenu");
  const navigation = document.querySelector(".navigation");

  toggleMenu.classList.toggle("active");
  navigation.classList.toggle("active");
}
// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Adding the sticky class to the navbar when reaching its scroll position. Remove "sticky" when leaving the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
