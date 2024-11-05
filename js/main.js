(function () {


       /*================================================================*/
       /*========================burger menu=============================*/
       /*================================================================*/

    const burgerIcon = document.querySelector('.burger-icon');
    console.log(burgerIcon);
    burgerIcon.addEventListener('click', burgerInit)

    function burgerInit(e) {
        if (document.documentElement.clientWidth > 850) return

        if (!document.body.classList.contains('body--opened-menu')) {
            document.body.classList.add('body--opened-menu')
            document.querySelector('.burger--closed').style.display = 'block'
            document.querySelector('.burger--opened').style.display = 'none'

        } else {
            document.body.classList.remove('body--opened-menu')
            document.querySelector('.burger--closed').style.display = 'none'
            document.querySelector('.burger--opened').style.display = 'block'
        }
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