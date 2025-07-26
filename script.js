const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});
console.log("Portfolio loaded");
