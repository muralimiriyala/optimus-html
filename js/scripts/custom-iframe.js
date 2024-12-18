
jQuery(document).ready(function($){
    console.log("111111111111111111111")
    const spiframe = $(".social-proof-iframe");
    console.log(spiframe, "tet123")
    if(spiframe){
        spiframe.youtube_background({
            lazyloading: false,
        });
    }
    const iframe = $(".home-banner-iframe");
    if(iframe){
        iframe.youtube_background({
            lazyloading: false,
        });
    }
});