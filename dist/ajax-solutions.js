var $ = jQuery.noConflict();

$(document).ready(function() {
    const serviceAppend = $(".service-append-arrows");

    function destroyCarousel() {
        if ($('.healthcare-slider').hasClass('slick-initialized')) {
            $('.healthcare-slider').slick('unslick');
        }
    }

    function applySlider() {
        $('.healthcare-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 4,
            infinite: false,
            speed: 1000,
            dots: true,
            arrows: true, 
            prevArrow: '<div class="slick-arrow slick-prev flex flex-center radius-50"><span class="slick-arrows slick-prev-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
            nextArrow:'<div class="slick-arrow slick-next flex flex-center radius-50"><span class="slick-arrows slick-next-arrow fa-light fa-sharp fa-arrow-right"></span></div>',
            variableWidth: true,
            appendArrows: serviceAppend,
            appendDots: serviceAppend,
            responsive: [
                {
                    breakpoint: 1299,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 743,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        });

        $(".slick-next").on("click", function() {
            $(".slick-prev").removeClass("slick-disabled");
            $(this).addClass("slick-disabled");
        });

        $(".slick-prev").on("click", function() {
            $(".slick-next").removeClass("slick-disabled");
            $(this).addClass("slick-disabled");
        });
    }

    function loadContent(sub_page_id) {
        var ajaxURL = MyAjax.ajaxurl;

        $.ajax({
            type: 'POST',
            url: ajaxURL,
            data: {"action": "load-solutions-content", sub_page_id: sub_page_id},
            success: function(response) {
                destroyCarousel(); // Destroy slick slider first
                $('.healthcare-slider').html(''); // Empty the HTML
                $("#healthcare-cont").html(response); // Apply new data
                applySlider(); // Reinitialize slick slider
                $(".spinner").fadeOut(300);
            }
        });
    }

    // Load initial content and initialize slider
    $(".spinner").fadeIn(300);
    var initialSubPageId = $('a.solutions_sub[name=tab]').first().data("index");
    loadContent(initialSubPageId);

    // Event handler for tab click
    $('a.solutions_sub[name=tab]:first').addClass("active");
    $('a.solutions_sub[name=tab]').on("click", function() {
        $(".spinner").fadeIn(300);
        let index = $(this).data("index");
        $(".switch-cirle").attr("data-switch", index);

        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        var sub_page_id = $(this).data("index");
        loadContent(sub_page_id);
        return false;
    });
});
