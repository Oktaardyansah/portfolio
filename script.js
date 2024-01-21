const hM = document.getElementById("ham-toogle");
const navbarNav = document.querySelector(".navbar-nav");
const menuToogle = document.querySelector(".menu-toggle");

hM.addEventListener("click", function () {
  navbarNav.classList.toggle("flex");
  menuToogle.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (!hM.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("flex");
    menuToogle.classList.remove("active");
  }
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar-nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`.navbar-nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });
};
