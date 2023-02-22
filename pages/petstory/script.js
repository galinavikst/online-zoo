/////////////////////

/////////hamb menu open-close////////////
let header = document.querySelector(".header");
let headerBox = document.querySelector(".header-box");
let headerNav = document.querySelector("#header-nav");
let headerLogo = document.querySelector(".header-logo");
let navList = document.querySelector(".nav-list");
let hambMenu = document.querySelector("#hamb-menu");
let overlay = document.querySelector(".overlay");

let testBtnArr = document.querySelectorAll(".test-btn");
let testBorderArr = document.querySelectorAll(".border");
let testItem = document.querySelectorAll(".testimonial-item");
let testPerson = document.querySelectorAll(".testimonial-person");
let testHideText = document.querySelectorAll(".hide-text");
let testText = document.querySelectorAll(".testimonial-text");
let testName = document.querySelectorAll(".test-name");
let testUl = document.querySelector(".testimonial-list");

let rightArrow = document.querySelector(".right");
let leftArrow = document.querySelector(".left");
let cardArr = document.querySelectorAll(".card-item");
let cardA = Array.from(cardArr);

hambMenu.addEventListener("click", function () {
  if (hambMenu.checked) {
    showHambMenu();
  } else {
    hideHambMenu();
  }
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
/////////animals card slider//////////
let cardIndex = 0;

addAnimation(cardArr, "appear");

leftArrow.onclick = slider6;
rightArrow.onclick = slider6;

function timeuot(btn) {
  btn.disabled = true;
  setTimeout(() => {
    btn.disabled = false;
  }, 1000);
}

function getRandom(arr) {
  cardIndex = Math.floor(Math.random() * arr.length);
  return cardIndex;
}

function allVis(arr) {
  for (let item of arr) {
    if (item.classList.contains("hidden")) item.classList.remove("hidden");
  }
}
// function shuffle(array) {
//   let counter = array.length;
//
//   // While there are elements in the array
//   while (counter > 0) {
//     // Pick a random index
//     let index = Math.floor(Math.random() * counter);
//
//     // Decrease counter by 1
//     counter--;
//
//     // And swap the last element with it
//     let temp = array[counter];
//     array[counter] = array[index];
//     array[index] = temp;
//   }
//
//   return array;
// }
function slider6() {
  let visarr = [];
  for (let i of cardArr) {
    if (!i.classList.contains("hidden")) {
      visarr.push(i);
    }
  }
  allVis(cardArr);
  timeuot(leftArrow);
  timeuot(rightArrow);
  visarr[getRandom(visarr)].classList.add("hidden");
}
//////////////////////
//////////testimonial slider/////////
createNewTest();

let borderArr = document.querySelectorAll(".border");
let arrBorder = Array.from(borderArr);
let range = document.querySelector('input[type = "range"]');
let visArrTest = [];

addAnimation(arrBorder, "slide");

range.oninput = slider;

function addAnimation(arr, animation) {
  for (el of arr) {
    if (!el.classList.contains(animation)) el.classList.add(animation);
  }
}
function removeAnimation(arr, animation) {
  for (el of arr) {
    if (el.classList.contains(animation)) el.classList.remove(animation);
  }
}

function allHidden() {
  for (el of arrBorder)
    if (!el.classList.contains("hidden")) {
      el.classList.add("hidden");
    }
}

function slider() {
  allHidden();
  let i = range.value;
  visArrTest = arrBorder.slice(i, Number(i) + 4);
  getActive(visArrTest);
}

function getActive(arr) {
  arr.forEach((element) => {
    element.classList.remove("hidden");
  });
}

function createNewTest() {
  let numbers = [5, 6, 7, 8, 9, 10, 11];
  for (let i = 0; i < numbers.length; i++) {
    let newTest = document.createElement("li");
    newTest.className = "border";
    newTest.classList.add("hidden");
    newTest.innerHTML = `<div class="testimonial-item">
                <div class="testimonial-person">
                  <img
                    src="./assets/icons/user_icon.svg"
                    width="35"
                    alt="no photo"
                  />
                  <div class="testimoninal-header">
                    <h3 class="test-name">${numbers[i]}</h3>
                    <p class="location">Local Austria &sdot; Today</p>
                  </div>
                  <button class="test-btn">X</button>
                </div>
                <div class="hide-text">
                  <p class="testimonial-text">
                    The best online zoo I’ve met. My son delighted very much
                    ljves to watch gouillas. Online zoo is one jf the ways to
                    instill a love for animals.The best online zoo I’ve met. My
                    son delighted very much ljves to watch gouillas. Online zoo
                    is one jf the ways to instill a love for animals. The best
                    online zoo I’ve met. My son delighted very much ljves to
                    watch gouillas. Online zoo is one jf the ways to instill a
                    love for animals.The best online zoo I’ve met. My son
                    delighted very much ljves to watch gouillas. Online zoo is
                    one jf the ways to instill a love for animals.
                  </p>
                </div>
              </div>`;
    testUl.append(newTest);
  }
}
///////////////slider Testimonial 1000px/////////
if (window.matchMedia("(max-width:1000px)").matches) {
  window.onload = () => {
    testBorderArr[3].classList.add("hidden");
  };
  range.max = 8;
  range.oninput = slider;
  function slider() {
    allHidden();
    let i = range.value;
    visArrTest = arrBorder.slice(i, Number(i) + 3);
    getActive(visArrTest);
  }
}
///////////////////////
///////////////sliders 640px /////////
if (window.matchMedia("(max-width:640px)").matches) {
  window.onload = () => {
    removeAnimation(arrBorder, "slide");
    testBorderArr[3].classList.add("hidden");
    cardArr[5].classList.add("hidden");
    cardArr[4].classList.add("hidden");
  };
  overlay.addEventListener("click", function () {
    hideHambMenu();
    hambMenu.checked = false;
    for (let i = 0; i < testBtnArr.length; i++) {
      if ((testBtnArr[i].style.display = "block")) closeTestimonial(i);
    }
  });

  rightArrow.onclick = slider4;
  leftArrow.onclick = slider4;

  function slider4() {
    timeuot(rightArrow);
    timeuot(leftArrow);
    let visArr = [];
    for (let i = 0; i < cardArr.length; i++) {
      if (!cardArr[i].classList.contains("hidden")) {
        visArr.push(cardArr[i]);
      }
    }
    allVis(cardArr);
    for (let el of visArr) {
      el.classList.add("hidden");
    }
    visArr[getRandom(visArr)].classList.remove("hidden");
  }

  /////////popup testimonials 640px//////////
  addEventToTestItem();
  addEventToTestBtn();
}

function addEventToTestItem() {
  for (let i = 0; i < testItem.length; i++) {
    testItem[i].addEventListener("click", function () {
      showTestimonial(i);
    });
  }
}

function addEventToTestBtn() {
  for (let i = 0; i < testBtnArr.length; i++) {
    testBtnArr[i].addEventListener("click", function (event) {
      event.stopPropagation();
      closeTestimonial(i);
    });
  }
}
function showTestimonial(index) {
  testBtnArr[index].style.display = "block";
  overlay.style.display = "block";
  testItem[index].style.zIndex = "2";
  testItem[index].style.height = "fit-content";
  testHideText[index].style.height = "fit-content";
}
function closeTestimonial(index) {
  testBtnArr[index].style.display = "none";
  overlay.style.display = "none";
  testItem[index].style.zIndex = "0";
  testItem[index].style.height = "73px";
  testHideText[index].style.height = "46px";
}
