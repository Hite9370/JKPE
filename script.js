$('.slider').slick({
    centerMode: true,
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    centerPadding: '20%',
    responsive: [
    {
      breakpoint: 480,
      settings: {
        centerPadding: '5%',
      }
    }
  ]

});
