jQuery(document).ready(function ($) {
    
    $('a.subtitle-link').on("click", function(e) {
        e.preventDefault();
        console.log("clickes")
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        let index = $(this).data("index");
        $(".switch-cirle").attr("data-switch", index);
        $(".service-sub-page").hide();
        $(`.service-sub-page[data-pages=${index}]`).fadeIn(800).addClass("red");
        return false;
    });

    const serviceSlider = jQuery(".service-lists");
    function initialServiceSlider() {
      serviceSlider.each(function () {
        const $this = $(this);
        const serviceSlides = $this.children(".service-item").length;
        const serviceAppend = $this.siblings(".service-append-arrows");
        if (window.matchMedia("(max-width: 1439px)").matches) {
          if (!$this.hasClass("slick-initialized")) {
            $this.slick({
              slidesToShow: 1,
              slidesToScroll: 4,
              arrows: true,
              prevArrow: '<div class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
              nextArrow: '<div class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
              dots: true,
              appendArrows: serviceAppend,
              appendDots: serviceAppend,
              speed: 1000,
              infinite: false,
              autoplay: false,
              variableWidth: true,
              responsive: [
                {
                  breakpoint: 1023,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                  },
                },
                {
                  breakpoint: 743,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                  },
                },
              ],
            });
          }
        } else {
          if (serviceSlides >= 5 && !$this.hasClass("slick-initialized")) {
            $this.slick({
              appendArrows: serviceAppend,
              appendDots: serviceAppend,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              prevArrow:
                '<div class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
              nextArrow:
                '<div class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
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
    function destroyserviceSlider() {
      serviceSlider.each(function () {
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
    initialServiceSlider();
    $(window).on("resize", function () {
      destroyserviceSlider();
      initialServiceSlider();
    });
    
});