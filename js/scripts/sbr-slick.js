jQuery(document).ready(function ($) {
  let $sbrSlider = $(".sbr-slider-nav");
  let $sbSlideImage = $(".sbr-slide-image");
  $sbrSlider.slick({
    slidesToShow: 1,
    dots: false,
    fade: true,
    arrows: false,
    speed: 1500,
    focusOnSelect: true,
  });
  $sbSlideImage.on("click", function (e) {
    e.preventDefault();
    let $this = $(this);
    let slideno = $this.data("sbr-slide");
    $sbSlideImage.removeClass("sbr-active");
    jQuery(`.sbr-slide-image[data-sbr-slide='${slideno}']`).addClass(
      "sbr-active"
    );
    $sbrSlider.slick("slickGoTo", slideno - 1);
  });
});
