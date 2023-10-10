document.addEventListener("DOMContentLoaded", function () {
// Забороняєм у інпуті писати все крім цифр ПОЧАТОК
// Отримуємо посилання на вхідне поле
var inputField = document.getElementById("currency-input");
        
// Додаємо обробник події "input" до поля
inputField.addEventListener("input", function(event) {
    // Отримуємо текст з вхідного поля
    var inputValue = inputField.value;
    
    // Замінюємо всі символи, які не є цифрами, на порожній рядок
    var numericValue = inputValue.replace(/[^0-9]/g, "");
    
    // Оновлюємо вміст вхідного поля на очищений рядок
    inputField.value = numericValue;
});
// Забороняєм у інпуті писати все крім цифр КІНЕЦЬ


  const oneTimeBtn = document.getElementById("one-time-btn");
  const regularBtn = document.getElementById("regular-btn");
  const regularPaymentBlock = document.querySelector(".regular-payment");

  // Приховувати блок при завантаженні сторінки
  regularPaymentBlock.style.display = "none";

  // Додати обробник кліку на кнопку "Регулярна допомога"
  regularBtn.addEventListener("click", function () {
    regularPaymentBlock.style.display = "block";
  });

  // Додати обробник кліку на кнопку "Одноразова допомога"
  oneTimeBtn.addEventListener("click", function () {
    regularPaymentBlock.style.display = "none";
  });

  // 
  // 
  // 
  const buttons = document.querySelectorAll('.bank-transfer__btn');
  const contents = document.querySelectorAll('.bank-transfer__card-content');

  buttons.forEach((button) => {
    button.addEventListener('click', function () {
      // Знайдемо кнопку, яку клікнули
      const target = button.getAttribute('data-target');

      // Приховуємо всі блоки контенту
      contents.forEach((content) => {
        content.classList.remove('active');
      });

      // Показуємо відповідний блок контенту
      document.querySelector(`.bank-transfer__card-content.${target}`).classList.add('active');

      // Відзначаємо активну кнопку
      buttons.forEach((btn) => {
        btn.classList.remove('active');
      });
      button.classList.add('active');
    });
  });

  // Показуємо початковий блок контенту (UAH)
  document.querySelector('.bank-transfer__card-content.uah').classList.add('active');



  //Обробник для всіх кнопок копіювання ПОЧАТОК
  // Отримуємо всі кнопки копіювання і повідомлення
const copyButtons = document.querySelectorAll('.copy-btn');
const notification = document.getElementById('notification');

// Додаємо обробник кліку на кожну кнопку копіювання
copyButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Отримуємо сусідній <span> для копіювання
        const spanToCopy = button.previousElementSibling;

        // Створюємо текстовий об'єкт для копіювання
        const textToCopy = spanToCopy.textContent;

        // Створюємо тимчасовий <textarea> для копіювання тексту
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = textToCopy;
        document.body.appendChild(tempTextarea);

        // Вибираємо текст у <textarea>
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999);

        // Копіюємо текст у буфер обміну
        document.execCommand('copy');

        // Видаляємо тимчасовий <textarea>
        document.body.removeChild(tempTextarea);

        // Показуємо повідомлення про копіювання
        notification.style.display = 'flex';

        // Через 2 секунди ховаємо повідомлення
        setTimeout(() => {
            notification.style.display = 'none';
        }, 2000);
    });
});
//Обробник для всіх кнопок копіювання КІНЕЦЬ

// Обробник для кнопки копіювання всіх даних у секції ПОЧАТОК
const copyAllDataButtons = document.querySelectorAll('.copy-all-data');

copyAllDataButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Отримуємо батьківський елемент секції
        const section = button.closest('.bank-tranfer__privat');

        // Знаходимо всі <span> у цій секції
        const spansToCopy = section.querySelectorAll('span');

        // Збираємо всі тексти в одну рядок через кому та пробіл
        const textToCopy = Array.from(spansToCopy).map(span => span.textContent).join('\n');

        // Створюємо тимчасовий <textarea> для копіювання тексту
        const tempTextarea = document.createElement('textarea');
        tempTextarea.value = textToCopy;
        document.body.appendChild(tempTextarea);

        // Вибираємо текст у <textarea>
        tempTextarea.select();
        tempTextarea.setSelectionRange(0, 99999);

        // Копіюємо текст у буфер обміну
        document.execCommand('copy');

        // Видаляємо тимчасовий <textarea>
        document.body.removeChild(tempTextarea);

        // Показуємо повідомлення про копіювання
        // notification.style.display = 'flex';

        // Через 2 секунди ховаємо повідомлення
        // setTimeout(() => {
        //     notification.style.display = 'none';
        // }, 2000);
        button.innerHTML = `Данні скопійовані <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.3508 16.8085L6.89027 13.348C6.48293 12.9406 6.48293 12.2802 6.89027 11.8728C7.29762 11.4655 7.95805 11.4655 8.3654 11.8728L11.0698 14.5772L16.6594 7.38949C17.038 6.90257 17.7578 6.85774 18.1939 7.2939C18.5654 7.66536 18.5961 8.25747 18.2649 8.66531L11.7107 16.7381C11.368 17.1602 10.7353 17.193 10.3508 16.8085Z" fill="#FFCB08"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 21.1667C17.5626 21.1667 21.6667 17.0626 21.6667 12C21.6667 6.93739 17.5626 2.83333 12.5 2.83333C7.43739 2.83333 3.33333 6.93739 3.33333 12C3.33333 17.0626 7.43739 21.1667 12.5 21.1667ZM12.5 23C18.5751 23 23.5 18.0751 23.5 12C23.5 5.92487 18.5751 1 12.5 1C6.42487 1 1.5 5.92487 1.5 12C1.5 18.0751 6.42487 23 12.5 23Z" fill="#FFCB08"/>
        </svg>
        `
        setTimeout(() => {
          button.innerHTML = `Скопіювати всі дані<svg
          xmlns="http://www.w3.org/2000/svg" width="22" height="22"
          viewBox="0 0 22 22" fill="none">
          <g clip-path="url(#clip0_1542_2660)">
              <path
                  d="M14.6668 0.916656H3.66683C2.65391 0.916656 1.8335 1.73707 1.8335 2.74999V15.5833H3.66683V2.74999H14.6668V0.916656ZM17.4168 4.58332H7.3335C6.32058 4.58332 5.50016 5.40374 5.50016 6.41666V19.25C5.50016 20.2629 6.32058 21.0833 7.3335 21.0833H17.4168C18.4298 21.0833 19.2502 20.2629 19.2502 19.25V6.41666C19.2502 5.40374 18.4298 4.58332 17.4168 4.58332ZM17.4168 19.25H7.3335V6.41666H17.4168V19.25Z"
                  fill="#FFCB08" />
          </g>
          <defs>
              <clipPath id="clip0_1542_2660">
                  <rect width="22" height="22" fill="white" />
              </clipPath>
          </defs>
      </svg>`
        }, 2000);
    });
});
// Обробник для кнопки копіювання всіх даних у секції КІНЕЦЬ
});



const buttonContainers = document.querySelectorAll('.nav-buttons');

buttonContainers.forEach((container) => {
  const buttons = container.querySelectorAll('.nav-button');
  const navLine = container.querySelector('.nav-line');

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      // Видаляємо клас "active" у всіх кнопок в поточному контейнері
      buttons.forEach((btn) => btn.classList.remove('active'));

      // Додаємо клас "active" обраній кнопці
      button.classList.add('active');

      // Зміщуємо лінію на позицію активної кнопки та встановлюємо ширину
      const buttonLeft = button.getBoundingClientRect().left;
      const containerLeft = container.getBoundingClientRect().left;
      const buttonWidth = button.getBoundingClientRect().width;
      navLine.style.transform = `translateX(${buttonLeft - containerLeft}px)`;
      navLine.style.width = `${buttonWidth}px`;
    });
  });

  // При завантаженні сторінки, робимо першу кнопку активною і встановлюємо початкові значення лінії
  const firstButton = buttons[0];
  const firstButtonLeft = firstButton.getBoundingClientRect().left;
  const containerLeft = container.getBoundingClientRect().left;
  const firstButtonWidth = firstButton.getBoundingClientRect().width;
  navLine.style.transform = `translateX(${firstButtonLeft - containerLeft}px)`;
  navLine.style.width = `${firstButtonWidth}px`;
  firstButton.classList.add('active');
});


// JavaScript для плавної прокрутки до якорів
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.getBoundingClientRect().top + window.pageYOffset - 60,
        behavior: 'smooth'
      });
    }
  });
});





// accordion
let acc = document.getElementsByClassName("accordion");
let i;



for (i = 0; i < acc.length; i++) {
  // console.log(acc[i])
  acc[i].addEventListener("click", function () {
    let panel = this.nextElementSibling;
    
    // Перевіряємо, чи акордеон відкритий
    let isOpen = this.classList.contains("active");

    // Закриваємо всі акордеони перед відкриттям поточного
    // for (let j = 0; j < acc.length; j++) {
    //   acc[j].classList.remove("active");
    //   let otherPanel = acc[j].nextElementSibling;
    //   otherPanel.style.maxHeight = null;
    // }

    function updateHeight(el) {
      el.classList.add("active");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

    // Відкриваємо або закриваємо поточний акордеон
    if (!isOpen) {
      updateHeight(this);
      // this.classList.add("active");
      // panel.style.maxHeight = panel.scrollHeight + "px";
    } else {
      this.classList.remove('active');
      this.nextElementSibling.style.maxHeight = null;
    }
  });
}





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

// LOADER
const mask = document.querySelector('.mask');
window.addEventListener('load', () => {
  mask.classList.add('hide');
  if (mask.classList.contains('hide')) {
    document.body.style.overflowY = 'visible';
  }
  setTimeout(() => {
    mask.remove();
  }, 600)
})


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
    document.body.style.overflow = "visible";
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
    lazyLoad: 'ondemand',
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





