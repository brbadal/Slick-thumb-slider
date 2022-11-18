/***   slider product js start***/
$( document ).ready(function() {
  let residentsSlider2 = jQuery("#arrow1 .slick-bg-slider");
  residentsSlider2.slick({
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
  jQuery("#arrow1 .slider-arrow2").on("click", ".slick-arrow", function (event) {
    event.preventDefault();
    /* Act on the event */
    if (jQuery(this).hasClass("Slick-Prev")) {
      residentsSlider2.slick("slickPrev");
    } else {
      residentsSlider2.slick("slickNext");
    }
  });

    jQuery('#arrow1 .Slick-Prev').click(function() {
      if (jQuery("#arrow1 .slick-prev").hasClass("slick-disabled")) {
          jQuery("#arrow1 .Slick-Prev").addClass("disabled");
          jQuery("#arrow1 .Slick-Next").removeClass("disabled")
      } else {
          jQuery("#arrow1 .Slick-Next").removeClass("disabled");
          jQuery("#arrow1 .Slick-Prev").removeClass("disabled")
      }
  });
  jQuery('#arrow1 .Slick-Next').click(function() {
      if (jQuery("#arrow1 .slick-next").hasClass("slick-disabled")) {
          jQuery("#arrow1 .Slick-Prev").removeClass("disabled");
          jQuery("#arrow1 .Slick-Next").addClass("disabled")
      } else {
          jQuery("#arrow1 .Slick-Prev").removeClass("disabled");
          jQuery("#arrow1 .Slick-Next").removeClass("disabled")
      }
  });




// for left visible
  let residentsSlider3 = jQuery("#arrow2 .left-visible-slide");
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

  jQuery("#arrow2 .slider-arrow3").on("click", ".slick-arrow", function (event) {
    event.preventDefault();
    /* Act on the event */
    if (jQuery(this).hasClass("Slick-Prev")) {
      residentsSlider3.slick("slickPrev");
    } else {
      residentsSlider3.slick("slickNext");
    }
  });
  jQuery('#arrow2 .Slick-Prev').click(function() {
      if (jQuery("#arrow2 .slick-prev").hasClass("slick-disabled")) {
          jQuery("#arrow2 .Slick-Prev").addClass("disabled");
          jQuery("#arrow2 .Slick-Next").removeClass("disabled")
      } else {
          jQuery("#arrow2 .Slick-Next").removeClass("disabled");
          jQuery("#arrow2 .Slick-Prev").removeClass("disabled")
      }
  });
  jQuery('#arrow2 .Slick-Next').click(function() {
      if (jQuery("#arrow2 .slick-next").hasClass("slick-disabled")) {
          jQuery("#arrow2 .Slick-Prev").removeClass("disabled");
          jQuery("#arrow2 .Slick-Next").addClass("disabled")
      } else {
          jQuery("#arrow2 .Slick-Prev").removeClass("disabled");
          jQuery("#arrow2 .Slick-Next").removeClass("disabled")
      }
  });

// end left visible
});
