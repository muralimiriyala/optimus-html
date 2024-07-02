jQuery(function(){
    jQuery('select').selectBox({
        keepInViewport: false,
        menuSpeed: 'slow',
        mobile:  true,
        hideOnWindowScroll: true,
    });
    // jQuery('.res-dropdown-pos select').selectBox({
    //     keepInViewport: false,
    //     menuSpeed: 'slow',
    //     mobile:  true,
    //     hideOnWindowScroll: false,
    // });
    jQuery(".selectBox, .selectBox-dropdown .selectBox-label").removeAttr('style');
});