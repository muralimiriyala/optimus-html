jQuery(document).ready(function ($) {
  let sbrforSlide = $(".sbr-slide-image");
  sbrforSlide.on("click", function (e) {
    e.preventDefault();
    let $this = $(this);
    let slideno = $this.data("sbr-img");
    sbrforSlide.removeClass("sbr-active sbr-hover-active");
    $(`.sbr-slide-image[data-sbr-img='${slideno}']`).addClass( "sbr-active" );
    $(`.sbr-slide-desktop`).hide();
    $(`.sbr-slide-desktop[data-sbr-text='${slideno}']`).fadeIn(1000);

    $(`.sbr-slide-mobile`).css({ "height": "0px", })
    let $targetMobile = $(`.sbr-slide-mobile[data-sbr-text='${slideno}']`);
    let scrollHeight = $targetMobile[0].scrollHeight;
    $targetMobile.css({ "height": `${scrollHeight}px` });

  });
  sbrforSlide.hover(function(){
    let $sib = $(this).siblings();
    $($sib).children(".sbr-slide-image").filter('.sbr-active').toggleClass("sbr-hover-active")
  });
});
