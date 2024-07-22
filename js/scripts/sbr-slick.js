jQuery(document).ready(function () {
  jQuery(".sbr-slider-nav").slick({
    slidesToShow: 1,
    dots: false,
    fade: true,
    arrows: false,
    speed: 1500,
    focusOnSelect: true,
  });
  jQuery(".sbr-slide-image").on("click", function (e) {
    e.preventDefault();
    let slideno = jQuery(this).data("sbr-slide");
    jQuery(".sbr-slide-image").removeClass("sbr-active");
    jQuery(`.sbr-slide-image[data-sbr-slide='${slideno}']`).addClass(
      "sbr-active"
    );
    jQuery(".sbr-slider-nav").slick("slickGoTo", slideno - 1);
  });
});
