$('.screenslider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplayspeed: 700,
    speed: 700,
    slidesToShow: 7.5,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6.2,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5.2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4.2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 2
        }
      }
    ]
  });

  AOS.init();