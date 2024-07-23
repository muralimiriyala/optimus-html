jQuery(document).ready(function ($) {
  let $sbSlideImage = $(".sbr-slide-image");
  let sbrtext  =  $(".sbr-slide-text");
  console.log(sbrtext)
  $sbSlideImage.on("click", function (e) {
    e.preventDefault();
    let $this = $(this);
    let slideno = $this.data("sbr-img");
    console.log(slideno)
    $sbSlideImage.removeClass("sbr-active sbr-hover-active");
    $(`.sbr-slide-image[data-sbr-img='${slideno}']`).addClass( "sbr-active" );
    $(`.sbr-slide-text`).hide();
    $(`.sbr-slide-desktop[data-sbr-text='${slideno}']`).fadeIn(800);
    sbrtext
    .style.maxHeight = `${sbrtext.scrollHeight}px`;
  });
  $sbSlideImage.hover(function(){
    let $sib = $(this).siblings();
    $($sib).filter('.sbr-active').toggleClass("sbr-hover-active")
    console.log($sib)
  });
});
