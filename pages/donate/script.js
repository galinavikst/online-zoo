/////////////////////
/////////hamb menu open-close////////////
let header = document.querySelector(".header");
let headerBox = document.querySelector(".header-box");
let headerNav = document.querySelector("#header-nav");
let headerLogo = document.querySelector(".header-logo");
let navList = document.querySelector(".nav-list");
let hambMenu = document.querySelector("#hamb-menu");
let overlay = document.querySelector(".overlay");

let chooseAmont = document.querySelector(".choose-amount");
let amountInput = document.querySelector(".input-another-amount");
let inputArr = document.querySelectorAll(".radio-input");

hambMenu.addEventListener("click", function () {
  if (hambMenu.checked) {
    showHambMenu();
  } else {
    hideHambMenu();
  }
});

overlay.addEventListener("click", function () {
  hideHambMenu();
  hambMenu.checked = false;
});

function showHambMenu() {
  header.style.padding = "0 30px 40px";
  header.classList.add("hamb-open");
  headerLogo.style.textAlign = "left";
  headerBox.style.display = "block";
  headerNav.style.display = "block";
  navList.style.display = "block";
  overlay.style.display = "block";
}

function hideHambMenu() {
  header.style.padding = "0 30px";
  headerBox.style.display = "flex";
  headerNav.style.display = "none";
  navList.style.display = "none";
  overlay.style.display = "none";
  header.classList.remove("hamb-open");
}

window.addEventListener("resize", function () {
  if (window.matchMedia("(max-width: 640px)").matches) {
    hideHambMenu();
    hambMenu.checked = false;
    overlay.style.display = "none";
  }
});
window.addEventListener("resize", function () {
  if (window.matchMedia("(min-width: 641px)").matches) {
    headerBox.style.display = "flex";
    headerNav.style.display = "flex";
    navList.style.display = "flex";
    overlay.style.display = "none";
  }
});
////////////////////////////////
/////////////input - form///////

chooseAmont.onchange = showInputValue;

amountInput.oninput = (e) => {
  let inval = ".+-";
  if (amountInput.value.length > 4 || inval.includes(e.data))
    amountInput.value = "";
  compaireAmounts();
};

function showInputValue() {
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i].checked) {
      amountInput.value = inputArr[i].value;
    }
  }
}

function compaireAmounts() {
  for (let input of inputArr) {
    if (input.value == amountInput.value) {
      input.checked = true;
    } else {
      input.checked = false;
    }
  }
}
/////////////////
