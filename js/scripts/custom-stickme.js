jQuery(document).ready(function ($) {
  const $altStickme = $(".alt-stickme");
  if ($altStickme) {
    $altStickme.stickme({
      onStick: function (e, target) {},
      onUnstick: function (e, target) {},
    });
  }
  $altStickme.each(function (index) {
    let $index = index;
    let $this = $(this).parent();
    let nextParent = $(this).parent().closest("section");
    nextParent.nextAll().css({
      zIndex: $index * 2,
      position: "relative",
    });
    $this.css({
      zIndex: $index,
      position: "relative",
    });
  });
});
