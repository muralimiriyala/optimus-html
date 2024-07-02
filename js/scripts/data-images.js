document.addEventListener("DOMContentLoaded", function(){
    const dataimages = document.querySelectorAll('[data-images]');
    const dataimagesimg = document.querySelectorAll('[data-images] img');
    let imagesLoaded = 0;
    const totalImages = dataimagesimg.length;
    dataimagesimg.forEach(function(dataimage) {
        dataimage.addEventListener('load', function() {
            imagesLoaded++;
            if (imagesLoaded === totalImages) {
                dataimages.forEach(function(dataimage) {
                    dataimage.classList.add("loaded");
                });
                console.log("All images loaded");
            }
        });
        // For cached images
        if (dataimage.complete) {
            dataimage.dispatchEvent(new Event('load'));
        }
    });
});