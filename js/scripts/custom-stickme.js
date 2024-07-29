jQuery(document).ready(function ($) {
  const $altStickme = $(".alt-stickme");
  $altStickme.each(function(index){
    const $selfStick = $(this);
    if($selfStick){
      $selfStick.stickOnScroll({
        topOffset:$("header.site-header").outerHeight(),
        bottomOffset:300,
        footerElement:$("footer.site-footer"),
        setParentOnStick:true,
        setWidthOnStick:true,
        viewport:window,
      });
    }
    $selfStick.closest(".alt-feature-section").css({ 'z-index': index, 'position': 'relative', }).nextAll().css({ 'position': 'relative', 'z-index': 50, });
  });
});