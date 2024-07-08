
function menu(){
    const header = document.querySelector("header.site-header");
    const headerHeight = header.clientHeight;
    console.log(headerHeight)
    window.onscroll = function(){
        const scroll = window.scrollY;
        scroll >= headerHeight ? header.classList.add("sticky-header") : header.classList.remove("sticky-header");
    }
  
}
document.addEventListener("DOMContentLoaded", function(){
    menu();
});
function desktopMenu(){
    if(window.matchMedia('(min-width: 1024px)').matches){
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

