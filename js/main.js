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
  contentTitle: document.querySelector('.programs__content-title h2'),
  navListBtn: document.querySelector('.content-nav__list'),
  navMapBtn: document.querySelector('.content-nav__map'),
  programsMap: document.querySelector('.program__map'),
  programsList: document.querySelector('.programs__list'),
  filterItem: document.querySelectorAll('.filter__item'),
  resetBtn: document.querySelector('.reset-filter'),
};

// const textElement = document.querySelector('.card-content h4');
// console.log(textElement)
// const maxCharacters = 20;

// if (textElement.textContent.length > maxCharacters) {
//   textElement.textContent = textElement.textContent.slice(0, maxCharacters) + '...';
// }

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



if (refs.navListBtn.classList.contains('active')) {
  refs.navMapBtn.classList.remove('active');
  refs.programsList.style.display = 'flex';
  refs.programsMap.style.display = 'none';
}


refs.navListBtn.addEventListener('click', () => {
  refs.navListBtn.classList.add('active');
  refs.navMapBtn.classList.remove('active');
  refs.programsList.style.display = 'flex';
  refs.programsMap.style.display = 'none';
});

refs.navMapBtn.addEventListener('click', () => {
  refs.navMapBtn.classList.add('active');
  refs.navListBtn.classList.remove('active');
  refs.programsList.style.display = 'none';
  refs.programsMap.style.display = 'block';
})


// filter miItUp lpugin
var mixer = mixitup('#programs__list', {
  callbacks: {
    onMixStart: function () {
      refs.filterItem.forEach(item => {
        if (item.classList.contains('mixitup-control-active')) {
          const activeBtn = item.querySelector('p').innerText;
          const newTitle = activeBtn.toLowerCase();
          const titleIcon = item.querySelector('.mixitup-control-active button').innerHTML;
          refs.contentTitle.innerHTML = `<div class="wrapper-icon">${titleIcon}</div>` + newTitle[0].toUpperCase() + newTitle.slice(1);
        }
      })
    }
  }
});

refs.resetBtn.addEventListener('click', () => {
  refs.contentTitle.innerHTML = 'Всі активні програми';
})










//////

// 2. This code loads the IFrame Player API code asynchronously.
// let tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// let firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // 3. This function creates an <iframe> (and YouTube player)
// //    after the API code downloads.
// let player;

// $('.to-play').click(function () {

//   let btn = $(this),
//     videoID = btn.data('video'),
//     playerID = btn.data('id');


//   player = new YT.Player(playerID, {
//     playerVars: {
//       'autoplay': 0,
//       'conttrols': 1,
//       'playsinline': 1,
//     },
//     videoId: videoID,
//     events: {
//       'onReady': onPlayerReady,
//     }
//   });
// });

// function onPlayerReady(event) {
//   let video = event.target.h;
//   $(video).siblings('.to-play').addClass('removed');
//   event.target.playVideo();
// }




// $(document).ready(function () {
//   $(".video-items").slick({
//     centerPadding: "0px",
//     slidesToShow: 3,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           // slidesToShow: 1.2,
//         }
//       },
//       {
//         breakpoint: 375,
//         settings: {
//           // slidesToShow: 2,
//           slidesToShow: 1.2,
//         }
//       }
//     ]
//   });
// });

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

