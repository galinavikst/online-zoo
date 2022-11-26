let header = document.querySelector(".header");
let headerBox = document.querySelector(".header-box");
let headerNav = document.querySelector("#header-nav");
let navList = document.querySelector(".nav-list");
let hambMenu = document.querySelector("#hamb-menu");
function showHambMenu() {
  if (hambMenu.checked) {
    header.style.padding = "0 30px 40px";
    headerBox.style.display = "block";
    headerNav.style.display = "block";
    navList.style.display = "block";
  } else {
    hideHambMenu();
  }
}
hambMenu.addEventListener("click", showHambMenu);
function hideHambMenu() {
  header.style.padding = "0 30px";
  headerBox.style.display = "flex";
  headerNav.style.display = "none";
  navList.style.display = "none";
}
window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 640px)").matches) {
    hideHambMenu();
  } else {
    hambMenu.addEventListener("click", showHambMenu);
  }
});
