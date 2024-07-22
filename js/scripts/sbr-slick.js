jQuery(document).on("ready", function () {
  $(".sbr-slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".sbr-slider-nav",
  });
  $(".sbr-slider-nav").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".sbr-slider-for",
    dots: true,
    focusOnSelect: true,
  });
});
