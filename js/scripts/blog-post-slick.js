
jQuery(document).ready(function () {
    const blogSlider = jQuery(".blog-post-row");
    const $slickappend = jQuery(".blog-append-arrows");
    function blogSlickSlider() {
        blogSlider.each(function () {
        const $this = jQuery(this);
        const blogSlide = $this.children(".blog-post-list").length;
        if (window.matchMedia("(max-width: 1439px)").matches) {
          if (!$this.hasClass("slick-initialized")) {
            $this.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              prevArrow: '<div class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
              nextArrow: '<div class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
              dots: true,
              speed: 1000,
              infinite: false,
              autoplay: false,
              variableWidth: true,
              responsive: [
                {
                  breakpoint: 743,
                  settings: {
                    adaptiveHeight: true,
                    appendArrows: $slickappend,
                    appendDots: $slickappend,
                  },
                },
              ],
            });
          }
        } else {
          if (blogSlide >= 5 && !$this.hasClass("slick-initialized")) {
            $this.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              prevArrow:'<div class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
              nextArrow:'<div class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
              dots: true,
              speed: 1000,
              infinite: false,
              autoplay: false,
              variableWidth: true,
            });
          }
        }
      });
    }
    function destroyblogSlick() {
        blogSlider.each(function () {
        const $this = jQuery(this);
        if (
          jQuery(window).width() >= 1440 &&
          $this.hasClass("slick-initialized")
        ) {
          $this.slick("unslick");
        }
      });
    }
    blogSlickSlider();
    jQuery(window).on("resize", function () { destroyblogSlick(); blogSlickSlider(); });
});  