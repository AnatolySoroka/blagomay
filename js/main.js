const refs = {
  dropdownToggle: document.querySelector(".has-sub"),
  dropdownMenu: document.querySelector(".sub-menu__list"),
  headerBottom: document.querySelector(".header__bottom"),
  closeSearch: document.querySelector(".close-search"),
  searchBtn: document.querySelector(".search__btn"),
  selectLanguage: document.querySelector(".select-language"),
  selectLanguageMenu: document.querySelector(".select-language__list"),
};

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
  $(".slider").slick({
    centerMode: true,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    centerPadding: '0px',
  });
});
