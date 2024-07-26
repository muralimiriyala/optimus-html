
jQuery(document).ready(function($){
    const iframe = $(".home-banner-iframe");
    if(iframe){
        iframe.youtube_background({
            lazyloading: false,
        });
    }
});