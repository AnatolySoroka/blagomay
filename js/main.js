const refs = {
  dropdownToggle: document.querySelector(".has-sub"),
  dropdownMenu: document.querySelector(".sub-menu__list"),
  headerBottom: document.querySelector(".header__bottom"),
  closeSearch: document.querySelector(".close-search"),
  searchBtn: document.querySelector(".search__btn"),
};

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

refs.searchBtn.addEventListener("click", function () {
  refs.headerBottom.classList.toggle("show");
});
refs.closeSearch.addEventListener("click", function () {
    refs.headerBottom.classList.remove("show");
});
