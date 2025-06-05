  $(document).ready(function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 2,
      centeredSlides: true,
      loop: true,      
      spaceBetween: 24,
      slideToClickedSlide: true,
      breakpoints: {
        320: {
          spaceBetween: 16,
        }
      }
    });
  });
