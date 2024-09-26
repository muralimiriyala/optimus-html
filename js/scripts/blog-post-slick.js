jQuery(document).ready(function () {
  const blogSlider = jQuery('.blog-post-row');
  const blogAppend = jQuery('.blog-append-arrows');
  function blogSlickSlider() {
    blogSlider.each(function () {
      const $this = jQuery(this);
      const blogSlide = $this.children('.blog-post-list').length;
      if (window.matchMedia('(max-width: 1439px)').matches) {
        if (!$this.hasClass('slick-initialized')) {
          $this.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow:
              '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
            nextArrow:
              '<button type="button" aria-label="next" aria-disabled="false" tabindex="0" class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
            appendArrows: blogAppend,
            dots: true,
            appendDots: blogAppend,
            speed: 1000,
            infinite: false,
            autoplay: false,
            variableWidth: true,
            adaptiveHeight: false,
          });
        }
      } else {
        if (blogSlide >= 5 && !$this.hasClass('slick-initialized')) {
          $this.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            prevArrow:
              '<button type="button" aria-label="previous" aria-disabled="false" tabindex="0" class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
            nextArrow:
              '<button type="button" aria-label="next" aria-disabled="false" tabindex="0" class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
            appendArrows: blogAppend,
            dots: true,
            appendDots: blogAppend,
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
        $this.hasClass('slick-initialized')
      ) {
        $this.slick('unslick');
      }
    });
  }
  blogSlickSlider();
  jQuery(window).on('resize', function () {
    destroyblogSlick();
    blogSlickSlider();
  });
  jQuery(window).on('orientationchange', function () {
    destroyblogSlick();
    blogSlickSlider();
  });
});
