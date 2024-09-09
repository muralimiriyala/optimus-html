jQuery(document).ready(function ($) {
  const sbrsplideImage = $('.sbr-slide-image');
  const rowHeight = $('.sbr-slider-row');
  function sbrHeight() {
    const descs = $('.sbr-slide-desc');
    descs.each(function () {
      let $this = $(this);
      let $height = $this.outerHeight(true);
      if ($height > 0) {
        rowHeight.css({
          'min-height': $height + 'px',
          'align-items': 'center',
        });
      }
    });
  }
  sbrHeight();
  sbrsplideImage.on('click', function (e) {
    e.preventDefault();
    let $this = $(this);

    let slideno = $this.parent().data('sbr-slide');
    $this.parent().siblings().removeClass('sbr-active sbr-hover-active');
    $(`.sbr-for-slide[data-sbr-slide='${slideno}']`).addClass('sbr-active');

    $(`.sbr-data-slide`).hide();
    $(`.sbr-data-slide[data-sbr-text='${slideno}']`).fadeIn(1000);
    let $deskHeight = $(
      `.sbr-data-slide[data-sbr-text='${slideno}'] .sbr-slide-desc`
    ).height();
    if ($deskHeight > 0) {
      rowHeight.css({
        'min-height': $deskHeight + 'px',
        'align-items': 'center',
      });
    }

    $(`.sbr-slide-ipad`).css({ 'max-height': '0px' });
    let $targetMobile = $(`.sbr-slide-ipad[data-sbr-text='${slideno}']`);
    let scrollHeight = $targetMobile[0].scrollHeight;
    $targetMobile.css({ 'max-height': `${scrollHeight}px` });
  });
  sbrsplideImage.hover(function () {
    let $sib = $(this).parent().siblings();
    $($sib).filter('.sbr-active').toggleClass('sbr-hover-active');
  });
});
