jQuery(document).ready(function () {
  const postSlider = jQuery(".post-array-row");
  function initializeSlider() {
    postSlider.each(function () {
      const $this = jQuery(this);
      const postSlide = $this.children(".post-array-list").length;
      const postBtn = jQuery(".post-array-btn");
      const postHead = jQuery(".post-array-head");
      if (window.matchMedia("(max-width: 1439px)").matches) {
        if (!$this.hasClass("slick-initialized")) {
          $this.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow:
              '<div class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
            nextArrow:
              '<div class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
            dots: false,
            speed: 1000,
            infinite: false,
            autoplay: false,
            variableWidth: true,
            appendArrows: postBtn,
            responsive: [
              {
                breakpoint: 1023,
                settings: {
                  appendArrows: postHead,
                },
              },
              {
                breakpoint: 743,
                settings: {
                  adaptiveHeight: true,
                  appendArrows: $this,
                  dots: true,
                },
              },
            ],
          });
        }
      } else {
        if (postSlide >= 5 && !$this.hasClass("slick-initialized")) {
          $this.slick({
            appendArrows: postBtn,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow:
              '<div class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
            nextArrow:
              '<div class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
            dots: false,
            speed: 1000,
            infinite: false,
            autoplay: false,
            variableWidth: true,
          });
        }
      }
    });
  }
  function destroySlider() {
    postSlider.each(function () {
      const $this = jQuery(this);
      if (
        jQuery(window).width() >= 1440 &&
        $this.hasClass("slick-initialized")
      ) {
        $this.slick("unslick");
      }
    });
  }

  jQuery(window).on("resize", function () {
    destroySlider();
    initializeSlider();
  });

  // Initial call
  initializeSlider();
});
