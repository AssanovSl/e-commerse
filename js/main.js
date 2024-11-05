(function () {
  /*================================================================*/
  /*========================burger menu=============================*/
  /*================================================================*/

  // const burgerIcon = document.querySelector('.burger-icon');
  // console.log(burgerIcon);
  // burgerIcon.addEventListener('click', burgerInit)

  // function burgerInit(e) {
  //     if (document.documentElement.clientWidth > 850) return

  //     if (!document.body.classList.contains('body--opened-menu')) {
  //         document.body.classList.add('body--opened-menu')
  //         document.querySelector('.burger--closed').style.display = 'block'
  //         document.querySelector('.burger--opened').style.display = 'none'

  //     } else {
  //         document.body.classList.remove('body--opened-menu')
  //         document.querySelector('.burger--closed').style.display = 'none'
  //         document.querySelector('.burger--opened').style.display = 'block'
  //     }
  //   }

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
    initialSlide: 0,
    slidesPerView: 6,
    centeredSlides: false,

    //Navigation arrows
    navigation: {
      nextEl: ".categories-next",
      prevEl: ".categories-prev",
    },

    // breakpoints: {
    //     601: {
    //         slidesPerView: 3,
    //     }
    // }
  });
})();
