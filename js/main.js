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
  borderBtn: document.querySelector('.border-btn'),
  programsMap: document.querySelector('.program__map'),
  programsList: document.querySelector('.programs__list'),
  filterItem: document.querySelectorAll('.filter__item'),
  resetBtn: document.querySelector('.reset-filter'),
};


// получаем текущий путь
const path = window.location.pathname;
const curUrl = '/' + 'templates' + '/' + path.split('/').pop();

// выбираем все элементы меню
const menuItems = document.querySelectorAll('.menu__list-item');

// перебираем все элементы меню
menuItems.forEach(item => {
  // получаем ссылку элемента меню
  const link = item.querySelector('a');
  // если ссылка соответствует текущему пути, то добавляем класс "link"
  if (link.getAttribute('href') === curUrl) {
    link.classList.add('link');
  } else {
    link.classList.remove('link');
  }
});

////
const subMenuItems = document.querySelectorAll('.menu-mobile .menu__list .menu__list-item');

subMenuItems.forEach(item => {
  // // получаем ссылку элемента меню
  const link = item.querySelector('a');
  // // если ссылка соответствует текущему пути, то добавляем класс "link"
  if (link.getAttribute('href') === curUrl) {
    link.classList.add('link');
  } else {
    link.classList.remove('link');
  }
});



// video init

const videoInit = (selector) => {
  const videos = document.querySelectorAll(selector)

  if (videos.length > 0) {
    videos.forEach(video => {
      videoGenerate(video)
    })
  }
}

const videoGenerate = (video) => {
  const btn = video.querySelector('.video-block__button')
  const videoID = btn.dataset.videoId
  const container = video.querySelector('.video-block__inner')

  btn.addEventListener('click', () => {
    const iframe = iframeGenerate(videoID)

    container.innerHTML = '';
    container.appendChild(iframe)
  })
}

const iframeGenerate = (videoID) => {
  const iframe = document.createElement('iframe')

  const src = `https://www.youtube.com/embed/${videoID}?rel=0&showinfo=0&autoplay=1`

  iframe.setAttribute('src', src)
  iframe.setAttribute('frameborder', '0')
  iframe.setAttribute('allow', 'autoplay')
  iframe.setAttribute('allowfullscreen', '')
  iframe.classList.add('video-block__content')

  return iframe
}

videoInit('.video-block')

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

// SLIDERS
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
          slidesToScroll: 4,
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
          slidesToScroll: 2,
          arrows: false,
        }
      }
    ]
  });
});

// charity slider
$(document).ready(function () {
  $(".charity__slider").slick({
    dots: true,
    centerPadding: "0px",
    rows: 3,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
          slidesToScroll: 2,
          arrows: false,
        }
      }
    ]
  });
});

// news resize
const itemsToShow = 6; // кількість елементів, які ми хочемо показати

function hideItems() {
  const allItems = document.querySelectorAll('.news__list-item'); // отримуємо всі елементи
  for (let i = itemsToShow; i < allItems.length; i++) {
    allItems[i].style.display = 'none'; // ховаємо елементи, які не мають бути показані
  }
}

function showItems() {
  const allItems = document.querySelectorAll('.news__list-item'); // отримуємо всі елементи
  for (let i = itemsToShow; i < allItems.length; i++) {
    allItems[i].style.display = 'block'; // показуємо елементи, які повинні бути показані
  }
}

// перевірка розміру екрану при завантаженні сторінки і під час зміни розміру вікна
window.addEventListener('resize', () => {
  if (window.innerWidth < 768) {
    hideItems(); // ховаємо елементи, які не мають бути показані
  } else {
    showItems(); // показуємо елементи, які повинні бути показані
  }
});

// виклик функції при завантаженні сторінки
if (window.innerWidth < 768) {
  hideItems(); // ховаємо елементи, які не мають бути показані
}



// FILTER/
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

let prevBtn = null;

// добавляем обработчик клика на каждую кнопку
refs.filterItem.forEach(function (button) {
  button.addEventListener('click', function () {

    // если это первый клик на кнопке, просто сортируем элементы
    if (prevBtn === null || prevBtn !== this) {
      mixer.filter(this.getAttribute('data-filter'));
      prevBtn = this;
    }
    // если кнопка была уже выбрана, сбрасываем фильтр
    else {
      mixer.filter('all');
      refs.contentTitle.innerHTML = 'Всі активні програми';
      prevBtn = null;
    }
  });
});


refs.resetBtn.addEventListener('click', () => {
  refs.contentTitle.innerHTML = 'Всі активні програми';
});


/////
refs.navListBtn.addEventListener('click', () => {
  refs.borderBtn.style.left = '0';
});

refs.navMapBtn.addEventListener('click', () => {
  refs.borderBtn.style.left = refs.navMapBtn.offsetLeft + 'px';
});





