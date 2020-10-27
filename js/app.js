// Scroll to Top Button Start
let scrollButton = document.getElementById("scroll-top-btn");

scrollButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

window.onscroll = function () {
  scrollFunction();
};

// Hamburger Menu Start
const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUl.classList.toggle("show");
});

// Mobile Search Button Start
const mobileSearchButton = document.querySelector("#mobile-search-btn");
const mobileSearchBar = document.querySelector("#mobile-search-bar");

function showSearchBar() {
  if (mobileSearchBar.style.display === "none") {
    mobileSearchBar.style.display = "block";
  } else {
    mobileSearchBar.style.display = "none";
  }
}

mobileSearchButton.addEventListener("click", showSearchBar);

// Category Read More Button Start
const dots = document.querySelector("#category-info-dots");
const more = document.querySelector("#category-info-more");
const readMoreButton = document.querySelector("#category-info-btn");

function moreInfoCategory() {
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readMoreButton.innerHTML = "Read More";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    readMoreButton.innerHTML = "Read Less";
    more.style.display = "inline";
  }
}

readMoreButton.addEventListener("click", moreInfoCategory);
