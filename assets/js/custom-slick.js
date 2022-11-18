/***   slider product js start***/
$( document ).ready(function() {
  let residentsSlider2 = jQuery(".slick-bg-slider");
  residentsSlider2.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  jQuery(".slider-arrow2").on("click", ".slick-arrow", function (event) {
    event.preventDefault();
    /* Act on the event */
    if (jQuery(this).hasClass("Slick-Prev")) {
      residentsSlider2.slick("slickPrev");
    } else {
      residentsSlider2.slick("slickNext");
    }
  });


// for left visible
  let residentsSlider3 = jQuery(".left-visible-slide");
  residentsSlider3.slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite:false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  jQuery(".slider-arrow3").on("click", ".slick-arrow", function (event) {
    event.preventDefault();
    /* Act on the event */
    if (jQuery(this).hasClass("Slick-Prev")) {
      residentsSlider3.slick("slickPrev");
    } else {
      residentsSlider3.slick("slickNext");
    }
  });
// end left visible
});
