jQuery(function(){
    jQuery('select').selectBox({
        keepInViewport: false,
        menuSpeed: 'slow',
        mobile:  true,
        hideOnWindowScroll: true,
    });
    jQuery(".selectBox, .selectBox-dropdown .selectBox-label").removeAttr('style');
});