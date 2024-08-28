jQuery(document).ready(function ($) {
  let alink = $('ul.main_menu > li.menu-item-has-children');
  let overly = $('.header-overlay');

  alink
    .on('mouseenter', function () {
      overly.stop(true, true).addClass('open');
    })
    .on('mouseleave', function () {
      overly.stop(true, true).removeClass('open');
    });
});
