
jQuery(document).ready(function(){
    jQuery(".res-dropdown").on('click', function(e){
        e.preventDefault();
        // jQuery(this).parent().siblings(".res-dropdown-pos").find(".res-dropdown").removeClass("open");
        // jQuery(this).toggleClass("open");
        jQuery(this).parent().siblings(".res-dropdown-pos").find(".res-tags-list").addClass("open");
        jQuery(this).siblings(".res-tags-list").toggleClass("open");
    });
});
function srchResize(){
    if (window.matchMedia('(min-width: 768px)').matches) {
        jQuery("button.res-srch-icon").on('click', function(e){
            e.preventDefault();
            jQuery(".res-dropdown-main").toggleClass('fade');
            jQuery(".res-srch-form").toggleClass("open");
        });
    } 
}
jQuery(document).on("ready", function(){srchResize()});
jQuery(document).on("load", function(){srchResize()});