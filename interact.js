const navToggle = document.querySelector(".toggle-button");
const nav = document.querySelector(".nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});
