const refs = {
  dropdownToggle: document.querySelectorAll(".has-sub"),
  dropdownMenu: document.querySelector(".sub-menu__list"),
  headerBottom: document.querySelector(".header__bottom"),
  closeSearch: document.querySelector(".close-search"),
  searchBtn: document.querySelector(".search__btn"),
  selectLanguage: document.querySelector(".select-language"),
  selectLanguageMenu: document.querySelector(".select-language__list"),
  burgerBtn: document.querySelector(".burger-button"),
  mobileMenu: document.querySelector(".header__mobile"),
};


// var iFrameID = document.getElementById('.frame');
// if (iFrameID) {
//   // here you can make the height, I delete it first, then I make it again
//   iFrameID.height = "";
//   iFrameID.height = iFrameID.contentWindow.document.body.scrollHeight + "px";
// }

$(function () {
  var iframe = $('.frame', parent.document.body);
  iframe.height($(document.body).height());
});

// $(function () {
//   var iframe = $('.frame', parent.document.body);
//   iframe.height($(document.body).height());
// });


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

refs.dropdownToggle.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.toggle("active");
    item.nextElementSibling.classList.toggle("show");

    window.addEventListener("click", function (event) {
      if (!event.target.matches(".has-sub")) {
        item.classList.remove("active");
        item.nextElementSibling.classList.remove("show");
      }
    });
  });
});

// search input
refs.searchBtn.addEventListener("click", function () {
  refs.headerBottom.classList.toggle("show");
});
refs.closeSearch.addEventListener("click", function () {
  refs.headerBottom.classList.remove("show");
});

document.addEventListener('click', function (event) {
  let isClickInsideHeader = event.target.closest('.header');
  let isClickInsideShow = event.target.closest('.show');
  let isClickInsideButton = event.target.closest('.header__button');
  if (!isClickInsideHeader && !isClickInsideShow && !isClickInsideButton) {
    // клік відбувся поза межами .header, .show та .header__button
    // Приховуємо елемент .show
    document.querySelector('.show').classList.remove('show');
  }
});


// Отримуємо посилання на елемент headerBottom
// var headerBottom = document.querySelector('.header-bottom');

// Додаємо обробник подій на всю сторінку
// document.addEventListener('click', function (event) {
//   let isClickInsideHeaderBottom = refs.headerBottom.contains(event.target);

// Якщо клік відбувається поза межами headerBottom, видаляємо клас "show"
//   if (!isClickInsideHeaderBottom) {
//     refs.headerBottom.classList.remove('show');
//   }
// });

// Додаємо обробник подій на кнопку пошуку
// refs.searchBtn.addEventListener('click', function () {
//   refs.headerBottom.classList.toggle('show');
// });

// Додаємо обробник подій на кнопку закриття пошуку
// refs.closeSearch.addEventListener('click', function () {
//   refs.headerBottom.classList.remove('show');
// });

/////
// window.addEventListener("click", function (event) {
//   if (!event.target.matches(".header__bottom")) {
//     refs.headerBottom.classList.remove("show");
//   }
// });


// hero slider
$(document).ready(function () {
  $("#hero-slider").slick({
    centerMode: true,
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    adaptiveWidth: true,
    centerPadding: "0px",
    autoplay: true,
  });
});

// partners slider
$(document).ready(function () {
  $(".partners__slider").slick({
    centerMode: true,
    dots: true,
    centerPadding: "0px",
    rows: 2,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    // slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          arrows: false,
        }
      }
    ]
  });
});

// charity slider
$(document).ready(function () {
  $(".charity__slider").slick({
    centerMode: true,
    dots: true,
    centerPadding: "0px",
    rows: 3,
    slidesToShow: 5,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          arrows: false,
        }
      }
    ]
  });
});

// news resize
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
