(function () {
  /*================================================================*/
  /*========================burger menu=============================*/
  /*================================================================*/

  const burgerIcon = document.querySelector(".burger-menu");
  burgerIcon.addEventListener("click", burgerInit);

  function burgerInit(e) {
    if (document.documentElement.clientWidth > 850) return;

    const header = document.querySelector(".header__inner");
    if (!header.classList.contains("header__inner--mobile")) {
      burgerIcon.classList.add("burger-menu--open");
      header.classList.add("header__inner--mobile");
    } else {
      burgerIcon.classList.remove("burger-menu--open");
      header.classList.remove("header__inner--mobile");
    }
  }

  /*================================================================*/
  /*========================tabs produts=============================*/
  /*================================================================*/

  const blockSwitch = document.querySelector(".products__tabs");
  blockSwitch.addEventListener("click", productsSwitch);

  function productsSwitch(e) {
    const button = e.target.closest(".products__category-link");
    if (!button) return;

    e.preventDefault();
    if (button.classList.contains("products__category--active")) return;

    const productsID = button.getAttribute("href");
    const activeCategory = document.querySelector(
      ".products__category--active"
    );
    const activeProduct = document.querySelectorAll(".products__item--active");
    const productsCards = document.querySelectorAll(productsID);

    if (activeCategory) {
      activeCategory.classList.remove("products__category--active");
    }

    if (activeProduct) {
      activeProduct.forEach((item) => {
        // console.log(item);
        item.classList.remove("products__item--active");
        // console.log("Удалили класс");
        // console.log(item);
      });
    }

    productsCards.forEach((item) => {
      item.classList.add("products__item--active");
    });

    button.classList.add("products__category--active");
  }

  /*================================================================*/
  /*========================SLIDER menu=============================*/
  /*================================================================*/

  const swiper = new Swiper(".categories__slider", {
    // Optional parameters
    spaceBetween: 30,
    slidesPerView: 2,
    grid: {
      fill: "row",
      rows: 2,
    },
    centeredSlides: false,

    //Navigation arrows
    navigation: {
      nextEl: ".categories-next",
      prevEl: ".categories-prev",
    },

    breakpoints: {
      501: {
        slidesPerView: 3,
        grid: {
          rows: 1,
        },
      },
      851: {
        slidesPerView: 6,
        grid: {
          rows: 1,
        },
      },
    },
  });
})();
