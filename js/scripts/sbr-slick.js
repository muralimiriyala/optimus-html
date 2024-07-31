jQuery(document).ready(function($) {
  let sbrsplideImage = $(".sbr-slide-image");
  sbrsplideImage.on("click", function (e) {
    e.preventDefault();
    let $this = $(this);
    let slideno = $this.parent().data("sbr-slide");
    $this.parent().siblings().removeClass("sbr-active sbr-hover-active");
    $(`.sbr-for-slide[data-sbr-slide='${slideno}']`).addClass( "sbr-active" );
    $(`.sbr-slide-desktop`).hide();
    $(`.sbr-slide-desktop[data-sbr-text='${slideno}']`).fadeIn(1000);

    $(`.sbr-slide-mobile`).css({ "max-height": "0px", })
    let $targetMobile = $(`.sbr-slide-mobile[data-sbr-text='${slideno}']`);
    let scrollHeight = $targetMobile[0].scrollHeight;
    $targetMobile.css({ "max-height": `${scrollHeight}px` });

  });
  sbrsplideImage.hover(function(){
    let $sib = $(this).parent().siblings();
    $($sib).filter('.sbr-active').toggleClass("sbr-hover-active")
  });

  // let sbrimages = $(".sbr-slider-images");
  // let sbrslide = sbrimages.children(".sbr-for-slide");
  // let sbrtotalHeight = 10;
  // sbrslide.each(function(sbrIndex, sbrItem) {
  //   let sbrHeight = $(sbrItem).outerHeight(true);
  //   sbrtotalHeight += sbrHeight; 
  // });
  // sbrimages.css({ 'height': sbrtotalHeight + 'px' });
  
  










});

