const refs = {
  dropdownToggle: document.querySelector(".has-sub"),
  dropdownMenu: document.querySelector(".sub-menu__list"),
  headerBottom: document.querySelector(".header__bottom"),
  closeSearch: document.querySelector(".close-search"),
  searchBtn: document.querySelector(".search__btn"),
  selectLanguage: document.querySelector(".select-language"),
  selectLanguageMenu: document.querySelector(".select-language__list"),
  burgerBtn: document.querySelector(".burger-button"),
  mobileMenu: document.querySelector(".header__mobile"),
};

console.log(refs.burgerBtn);
console.log(refs.mobileMenu);

// mobile menu

refs.burgerBtn.addEventListener("click", showMobileMenu);

function showMobileMenu() {
  refs.burgerBtn.classList.toggle("active");
  refs.mobileMenu.classList.toggle("show");
  if (refs.mobileMenu.classList.contains("show")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

// select language
refs.selectLanguage.addEventListener("click", function () {
  refs.selectLanguageMenu.classList.toggle("show");
  refs.selectLanguage.classList.toggle("active");
});

window.addEventListener("click", function (event) {
  if (!event.target.matches(".select-language")) {
    refs.selectLanguageMenu.classList.remove("show");
    refs.selectLanguage.classList.remove("active");
  }
});

// dropdown menu

refs.dropdownToggle.addEventListener("click", function () {
  refs.dropdownMenu.classList.toggle("show");
  refs.dropdownToggle.classList.toggle("active");
});

window.addEventListener("click", function (event) {
  if (!event.target.matches(".has-sub")) {
    refs.dropdownMenu.classList.remove("show");
    refs.dropdownToggle.classList.remove("active");
  }
});

// search input
refs.searchBtn.addEventListener("click", function () {
  refs.headerBottom.classList.toggle("show");
});
refs.closeSearch.addEventListener("click", function () {
  refs.headerBottom.classList.remove("show");
});

$(document).ready(function () {
  $("#hero-slider").slick({
    centerMode: true,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    centerPadding: "0px",
  });
});

$(document).ready(function () {
  $(".partners__slider").slick({
    centerMode: true,
    dots: true,
    // adaptiveHeight: true,
    // adaptiveWidth: true,
    centerPadding: "0px",
  });
});

$(document).ready(function () {
  $(".charity__slider").slick({
    centerMode: true,
    dots: true,
    // adaptiveHeight: true,
    // adaptiveWidth: true,
    centerPadding: "0px",
  });
});

const list = document.querySelector(".news__list");

function resize() {
  const width = window.innerWidth;
  const itemsToShow = width < 931 ? 6 : 12;
  const items = list.querySelectorAll(".news__list-item");
  for (let i = 0; i < items.length; i++) {
    if (i < itemsToShow) {
      items[i].style.display = "block";
    } else {
      items[i].style.display = "none";
    }
  }
}

resize();
window.addEventListener("resize", resize);
