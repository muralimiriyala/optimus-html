jQuery(document).ready(function($){
    const _ctabtn = $(".get-resource-main");
    const _ctacolse = $(".cta-resource-close");
    _ctabtn.on("click", function(e){
        e.preventDefault();
        $("html").toggleClass("cta-scroll-hide");
        $(".cta-resource-bg").toggleClass("open");
    });
    _ctacolse.on("click", function(e){
        e.preventDefault();
        $("html").removeClass("cta-scroll-hide");
        $(".cta-resource-bg").removeClass("open");
    });
});
 