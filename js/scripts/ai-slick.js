jQuery(document).ready(function(){
    jQuery('.ai-feature-section').each(function(index){
        var $container = jQuery(this);
        var $imageSlider = $container.find('.ai-image-slider');
        var $contentSlider = $container.find('.ai-tab-slider');
        $imageSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            asNavFor:  $contentSlider,
        });
        $contentSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            asNavFor: $imageSlider,
            dots: false,
            arrows: false,
            focusOnSelect: true,
            fade: true,
            cssEase: 'linear',
        });
        $container.find("ul.ai-tab-links li:first-child").addClass("ai-tab-active");
        $container.find('ul.ai-tab-links li a[data-slide]').on("click", function(e){
            e.preventDefault();
            jQuery("ul.ai-tab-links").removeClass("ai-links");
            jQuery(this).parent("li").siblings().removeClass("ai-tab-active");
            jQuery(this).parent().siblings("li").removeClass("ai-tab-open");
            jQuery(this).parent().addClass("ai-tab-open");
            var slideno = jQuery(this).data('slide');
            $contentSlider.slick('slickGoTo', slideno - 1);
        });
    });
});