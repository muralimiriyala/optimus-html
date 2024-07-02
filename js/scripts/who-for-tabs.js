
var $ = jQuery.noConflict();
$(document).ready(function(){
    $("ul.who-for-tabs li:first a").addClass("active");
    const _selflink = $("ul.who-for-tabs li a");
    _selflink.on("click", function(e){
        e.preventDefault();
        _selflink.not(this).removeClass("active");
        $(this).addClass("active");
        let attr = $(this).attr("data-name");
        $(".who-for-page").hide();
        $(".who-for-page[data-value = "+ attr +" ]").fadeIn();
    });
    if($(window).width() <= 767){
        const tabstext = $(".for-tabs-btn > span");
        $(".for-tabs-btn").on("click", function(e){
            e.preventDefault();
            $(this).toggleClass("open");
            $("ul.who-for-tabs").slideToggle();
        });
        _selflink.on("click", function(e){
            e.preventDefault();
            var linktext = $(this).text();
            tabstext.html(linktext)
            $(".for-tabs-btn").removeClass("open");
            $(this).parent("li").closest("ul.who-for-tabs").slideUp();
        });
    }    
});