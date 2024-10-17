jQuery(document).ready(function ($) {
  const $altStickme = $('.alt-stickme123');
  $altStickme.each(function (index) {
    const $selfStick = $(this);
    if ($selfStick) {
      if (window.matchMedia('(min-width: 1024px)').matches) {
        $selfStick.stickOnScroll({
          topOffset: $('header.site-header').outerHeight(),
          bottomOffset: 300,
          footerElement: $('footer.site-footer'),
          setParentOnStick: true,
          setWidthOnStick: true,
          viewport: window,
        });
      } else {
        $selfStick.stickOnScroll({
          topOffset:
            $('header.site-header').outerHeight() +
            18 -
            $('.alt-feature-thumb').outerHeight(),
          bottomOffset: 300,
          footerElement: $('footer.site-footer'),
          setParentOnStick: true,
          setWidthOnStick: true,
          viewport: window,
        });
      }
    }
    $selfStick
      .closest('.alt-feature-section')
      .css({ 'z-index': index, position: 'relative' })
      .nextAll()
      .css({ position: 'relative', 'z-index': 50 });
  });
});
