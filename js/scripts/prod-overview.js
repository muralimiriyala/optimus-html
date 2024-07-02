jQuery(document).ready(function(){
    jQuery('.prod-overview-section').each(function(index){
        const $prodSlide = jQuery(this);
        jQuery(".prod-overview-bg:first-child").addClass("active");
        jQuery(".prod-overview-bg:first-child .prod-art-head").addClass("open");
        jQuery(".prod-overview-bg:first-child .prod-art-content").slideDown(500);
        jQuery('.prod-image-list:first-child').addClass('active-slide');

        $prodSlide.find(".prod-art-head").on("click", function(e){
            e.preventDefault();
            jQuery(this).parent().toggleClass('active');
            jQuery(this).parent().siblings().removeClass('active');
            jQuery(this).parent().siblings().find('.prod-art-head').removeClass('open');
            jQuery(this).toggleClass("open");
            jQuery(this).siblings('.prod-art-content').slideToggle(500);
            jQuery(this).parent().siblings().find('.prod-art-content').slideUp(500);

            /*-- slide --*/
            let data = jQuery(this).data("name");
            $prodSlide.find('.prod-image-list').removeClass('active-slide');
            $prodSlide.find('.prod-image-list[data-image="' + data + '"]').addClass('active-slide');
        });
    });
    jQuery('.prod-overview-section').each(function(index){
        var $container = jQuery(this);
        var $imageSlider = $container.find('.prod-image-slider');
        var $contentSlider = $container.find('.prod-content-slider');
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
        $container.find('ul.prod-tab-links li a[data-slide]').on("click", function(e){
            e.preventDefault();
            jQuery(this).parent("li").siblings().removeClass("prod-tab-active");
            jQuery(this).parent("li").addClass("prod-tab-active");
            var slideno = jQuery(this).data('slide');
            $contentSlider.slick('slickGoTo', slideno - 1);
        });
    });
});