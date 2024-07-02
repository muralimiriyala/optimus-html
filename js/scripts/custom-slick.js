jQuery(document).on("ready", function(){
    const pageSlider = jQuery(".industry-slider");
    function initializeSlider() {
        pageSlider.each(function(){
            const _this = jQuery(this);
            const pageSlide = _this.children(".industry-slide").length;
            const $status = _this.closest('.who-for-page').find(".industry-count");
            if(jQuery(window).width() <= 1024){
                if (!_this.hasClass('slick-initialized')) {
                    _this.on('init reInit afterChange', function(event, slick, currentSlide) {
                        let i = (currentSlide ? currentSlide : 0) + 1;
                        $status.text(i + '/' + slick.slideCount);
                    });
                    _this.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        prevArrow: '<div class="slick-arrow slick-prev flex flex-center"><span class="slick-arrows slick-prev-arrow"></span></div>',
                        nextArrow: '<div class="slick-arrow slick-next flex flex-center"><span class="slick-arrows slick-next-arrow"></span></div>',
                        dots: false,
                        speed: 1500,
                        infinite: false,
                        autoplay: false,
                        variableWidth: true,
                    });
                }
            }
            else {
                if (pageSlide >= 5 && !_this.hasClass('slick-initialized')) {
                    _this.on('init reInit afterChange', function(event, slick, currentSlide) {
                        let i = (currentSlide ? currentSlide : 0) + 1;
                        $status.text(i + '/' + slick.slideCount);
                    });
                    _this.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: true,
                        prevArrow: '<div class="slick-arrow slick-prev flex flex-center"><span class="slick-arrows slick-prev-arrow"></span></div>',
                        nextArrow: '<div class="slick-arrow slick-next flex flex-center"><span class="slick-arrows slick-next-arrow"></span></div>',
                        dots: false,
                        speed: 1500,
                        infinite: false,
                        autoplay: false,
                        variableWidth: true,
                    });
                }
            }
        });
    }
    function destroySlider() {
        pageSlider.each(function(){
            const _this = jQuery(this);
            if(jQuery(window).width() >= 1024 && _this.hasClass('slick-initialized')) {
                _this.slick('unslick');
            }
        });
    }

    jQuery(window).on('resize', function() {
        destroySlider();
        initializeSlider();
    });

    // Initial call
    initializeSlider();
});
