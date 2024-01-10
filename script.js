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
