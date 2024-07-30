jQuery(function(){
    jQuery('select').selectBox({
        keepInViewport: false,
        menuSpeed: "normal",
        mobile: true,
        hideOnWindowScroll: true,
        menuTransition: "slide",
    });
    jQuery(".selectBox, .selectBox-dropdown .selectBox-label").removeAttr('style');
});