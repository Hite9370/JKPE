  $(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
      centeredSlides: true,
      loop: true,
      slidesPerView: 2,
      spaceBetween: 24,
      slideToClickedSlide: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
        }
      }
    });
  });
