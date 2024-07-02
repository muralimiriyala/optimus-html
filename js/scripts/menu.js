
function menu(){
    if(window.matchMedia('(max-width: 935px)').matches) {
        jQuery(".humburger-btn").on("click", function(e){
            e.preventDefault();
            jQuery(this).toggleClass("open");
            jQuery(".h_mobile_overlay").toggleClass("open");
            jQuery(".header_right").fadeToggle(600);
        });
        let level1 = jQuery("ul.main_menu > li.menu-item-has-children > a");
        level1.on("click", function(e){
            e.preventDefault();
            jQuery(this).parent("li").closest("ul.main_menu").siblings(".header_btns").toggleClass("off");
            jQuery(this).parent("li").siblings().toggleClass("sib").slideToggle();
            jQuery(this).parent("li").siblings().children("a").removeClass("active");
            jQuery(this).toggleClass("active");
            jQuery(this).parent().siblings("li").find("ul").slideUp(600);
            jQuery(this).siblings("ul").fadeToggle(600);

            jQuery("ul.main_menu > li.nav-product > ul > li > ul > li:first-child > ul").fadeIn(600);
            jQuery("ul.main_menu > li.nav-product > ul > li > ul > li > ul").not(":first").fadeOut(100);
            jQuery("ul.main_menu > li.nav-solutions > ul > li:first-child > ul").fadeIn(600);
            jQuery("ul.main_menu > li.nav-solutions > ul > li > ul").not(":first").fadeOut(100);

        });
        let level2 = jQuery("ul.main_menu > li > ul > li.menu-item-has-children > a");
        level2.on("click", function(e){
            e.preventDefault();
            jQuery(this).parent("li").siblings().children("a").removeClass("active");
            jQuery(this).toggleClass("active");
            jQuery("ul.main_menu > li > ul > li.menu-item-has-children > ul").not(jQuery(this).siblings("ul")).slideUp(600);
            jQuery(this).siblings("ul").slideToggle(600);
        });

        let level3 = jQuery("ul.main_menu > li > ul > li > ul > li.menu-item-has-children > a");
        level3.on("click", function(e){
            e.preventDefault();
            jQuery(this).parent("li").siblings().children("a").removeClass("active");
            jQuery(this).toggleClass("active");
            jQuery("ul.main_menu > li > ul > li > ul > li.menu-item-has-children > ul").not(jQuery(this).siblings("ul")).slideUp(600);
            jQuery(this).siblings("ul").slideToggle(600);
        });
    }
}
jQuery(document).on("ready load", function() { menu(); });
function desktopMenu(){
    if(window.matchMedia('(min-width: 936px)').matches){
        jQuery(".humburger-btn").removeClass("open");
        jQuery(".header_right").removeAttr("style");
        jQuery(".h_mobile_overlay").removeClass("open");
    }
}
jQuery(document).on("ready", function() { desktopMenu(); });
jQuery(window).on("resize", function() { desktopMenu(); });
const observer = new MutationObserver(function(mutationsList) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            desktopMenu();
        }
    }
});
observer.observe(document.body, { childList: true, subtree: true });



