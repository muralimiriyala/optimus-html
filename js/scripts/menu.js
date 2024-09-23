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

  $('ul.main_menu > li > a')
    .on('mouseenter', function () {
      $(this).attr('aria-expanded', 'true');
    })
    .on('mouseleave', function () {
      $(this).attr('aria-expanded', 'false');
    });
});
