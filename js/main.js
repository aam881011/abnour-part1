// search-box open close js code
let navbar = document.querySelector(".navbar");
// let searchBox = document.querySelector(".search-box .bx-search");
let bxMenu = document.querySelector(".bx-menu");
// let searchBoxCancel = document.querySelector(".search-box .bx-x");

bxMenu.addEventListener("click", () => {
  navbar.classList.toggle("showInput");
  if (navbar.classList.contains("showInput")) {
    bxMenu.classList.replace("bx-search", "bx-x");
  } else {
    bxMenu.classList.replace("bx-x", "bx-search");
  }
});

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function () {
  navLinks.style.right = "0";
};
menuCloseBtn.onclick = function () {
  navLinks.style.right = "-100%";
};

// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function () {
  navLinks.classList.toggle("show1");
};

let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function () {
  navLinks.classList.toggle("show2");
};
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function () {
  navLinks.classList.toggle("show3");
};

// ****************************
