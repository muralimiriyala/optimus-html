jQuery(document).ready(function ($) {
  const postSlider = jQuery(".post-array-row");
  function initializeSlider() {
    postSlider.each(function () {
      const $this = $(this);
      const postSlide = $this.children(".post-array-list").length;
      const postBtn = $(".post-array-btn");
      const postHead = $(".post-array-head");
      const postAppend = $(".post-array-appends");
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
                  appendArrows: postAppend,
                  appendDots: postAppend,
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
            prevArrow: '<div class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
            nextArrow: '<div class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
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
  // Initial call
  initializeSlider();
  $(window).on("resize", function () { destroySlider(); initializeSlider(); });

  function recentSlider() {
    if ($(window).width() <= 743) {
      if (!$('.recent-insights-list').hasClass('slick-initialized')) {
        $('.recent-insights-list').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          arrows: false,
          dots: true,
          speed: 1500,
          infinite: false,
          autoplay: false,
          adaptiveHeight: true,
        });
      }
    } else {
      if ($('.recent-insights-list').hasClass('slick-initialized')) {
        $('.recent-insights-list').slick('unslick');
      }
    }
  }
  recentSlider();
  
  function serviceSlider() {
      if (!$('.service-lists').hasClass('slick-initialized')) {
        $('.service-lists').slick({
          slidesToShow: 1,
          slidesToScroll: 4,
          variableWidth: true,
          arrows: true,
          prevArrow: '<div class="slick-arrow slick-prev step-slick-arrow flex flex-center"><span class="fa-sharp fa-thin fa-arrow-left"></span></div>',
          nextArrow: '<div class="slick-arrow slick-next step-slick-arrow flex flex-center"><span class="fa-sharp fa-thin fa-arrow-right"></span></div>',
          dots: false,
          speed: 1500,
          infinite: false,
          autoplay: false,
          responsive: [
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 743,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
              },
            },
          ],
        });
      }
     else {
      if ($('.service-lists').hasClass('slick-initialized')) {
        $('.service-lists').slick('unslick');
      }
    }
  }
  serviceSlider();


});
