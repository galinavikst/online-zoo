/////////////////////
/////////hamb menu open-close////////////
let header = document.querySelector(".header");
let headerBox = document.querySelector(".header-box");
let headerNav = document.querySelector("#header-nav");
let headerLogo = document.querySelector(".header-logo");
let navList = document.querySelector(".nav-list");
let hambMenu = document.querySelector("#hamb-menu");
let overlay = document.querySelector(".overlay");

// hambMenu.addEventListener("click", function () {
//   if (hambMenu.checked) {
//     showHambMenu();
//   } else {
//     hideHambMenu();
//   }
// });
//
// overlay.onclick = () => {
//   hideHambMenu();
//   hambMenu.checked = false;
// };
//
// function showHambMenu() {
//   header.style.padding = "0 30px 40px";
//   header.classList.add("hamb-open");
//   headerLogo.style.textAlign = "left";
//   headerBox.style.display = "block";
//   headerNav.style.display = "block";
//   navList.style.display = "block";
//   overlay.style.display = "block";
// }
// function hideHambMenu() {
//   header.style.padding = "0 30px";
//   headerBox.style.display = "flex";
//   headerNav.style.display = "none";
//   navList.style.display = "none";
//   overlay.style.display = "none";
//   header.classList.remove("hamb-open");
// }
//
// window.addEventListener("resize", function () {
//   if (window.matchMedia("(max-width: 640px)").matches) {
//     hideHambMenu();
//     hambMenu.checked = false;
//     overlay.style.display = "none";
//   }
// });
// window.addEventListener("resize", function () {
//   if (window.matchMedia("(min-width: 641px)").matches) {
//     headerBox.style.display = "flex";
//     headerNav.style.display = "flex";
//     navList.style.display = "flex";
//     overlay.style.display = "none";
//   }
// });
////////////////////////////////
/////////animals card slider//////////
let rightArrow = document.querySelector(".right");
let leftArrow = document.querySelector(".left");
let cardArr = document.querySelectorAll(".card-item");
let cardIndex = 0;
let count = 1;

leftArrow.onclick = slider6;

leftArrow.addEventListener("mousedown", function () {
  cardArr.forEach((item) => item.classList.remove("appear"));
});

function getRandom(arr) {
  cardIndex = Math.floor(Math.random() * arr.length);
  console.log(cardIndex);
  return cardIndex;
}

function slider6() {
  //let ranInd = getRandom(cardArr);
  for (let i = 0; i < cardArr.length; i++) {
    if (cardArr[i].classList.contains("hidden")) {
      cardArr[i].classList.remove("hidden");
    }
    if (!cardArr[i].classList.contains("hidden")) {
      cardArr[i].classList.add("appear");
    }
  }
  cardArr[getRandom(cardArr)].classList.add("hidden");
}
// function slider6() {
//   for (let i = 0; i < cardArr.length; i++) {
//     if (cardArr[i].classList.contains("hidden")) {
//       cardArr[i].classList.remove("hidden");
//     }
//     if (!cardArr[i].classList.contains("hidden")) {
//       cardArr[i].classList.add("appear");
//     }
//   }
//   cardArr[getRandom(cardArr)].classList.add("hidden");
// }
if (window.matchMedia("(max-width:640px)").matches) {
  let count = 4;
  for (let i = 1; i <= cardArr.length; i++) {}
}
