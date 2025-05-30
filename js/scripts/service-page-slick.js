jQuery(document).ready(function ($) {
  $('a.subtitle-link').on('click', function (e) {
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    let index = $(this).data('index');
    $('.switch-cirle').attr('data-switch', index);
    $('.service-sub-page').hide();
    $(`.service-sub-page[data-pages=${index}]`).fadeIn(800).addClass('red');
    return false;
  });

  const serviceSlider = jQuery('.service-lists');
  function initialServiceSlider() {
    serviceSlider.each(function () {
      const $this = $(this);
      const serviceSlides = $this.children('.service-item').length;
      const serviceAppend = $this
        .closest('.service-sub-page')
        .children('.service-append-arrows');
      if (window.matchMedia('(max-width: 1439px)').matches) {
        if (!$this.hasClass('slick-initialized')) {
          $this.slick({
            slidesToShow: 4,
            slidesToScroll: 4,
            appendArrows: serviceAppend,
            arrows: true,
            prevArrow:
              '<button type="button" class="slick-arrow slick-prev flex flex-center radius-50" aria-disabled="false" tabindex="0"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></button>',
            nextArrow:
              '<button type="button" class="slick-arrow slick-next flex flex-center radius-50" aria-disabled="false" tabindex="0"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></button>',
            dots: true,
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
        if (serviceSlides >= 5 && !$this.hasClass('slick-initialized')) {
          $this.slick({
            appendDots: serviceAppend,
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
            prevArrow:
              '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></button>',
            nextArrow:
              '<button type="button" aria-label="next" aria-disabled="false" tabindex="0" class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></button>',
            appendArrows: serviceAppend,
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
        $this.hasClass('slick-initialized')
      ) {
        $this.slick('unslick');
      }
    });
  }
  // Initial call
  initialServiceSlider();
  $(window).on('resize', function () {
    destroyserviceSlider();
    initialServiceSlider();
  });
});
