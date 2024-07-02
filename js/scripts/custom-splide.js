const Splider = jQuery(".asset-scroll-slider");
let removeInvalidAriaAttributes = function () {
    var slides = document.querySelectorAll('.splide__slide');
    slides.forEach(function (slide) {
        slide.removeAttribute('aria-roledescription');
        slide.removeAttribute('role'); // Remove the invalid role attribute
        slide.setAttribute('role', 'listitem'); // Set to a valid ARIA role if necessary
    });
    var list = document.querySelector('.splide__list');
    if (list) {
        list.setAttribute('role', 'list'); // Ensure the parent has a valid role
    }
};

let mobileSplide = function () {
    if (jQuery(window).width() <= 1299) {
        if (Splider.length > 0) {
            const splideInstance = new Splide(Splider[0], {
                type: "loop",
                drag: "free",
                focus: "left",
                perPage: 6,
                fixedWidth: "256px",
                autoScroll: {
                    speed: 1
                },
                arrows: false,
                pagination: false
            }).mount(window.splide.Extensions);

            const observer = new MutationObserver(removeInvalidAriaAttributes);
            observer.observe(Splider[0], { childList: true, subtree: true });
            removeInvalidAriaAttributes();
        }
    }
};

jQuery(document).on('ready load', function () { mobileSplide(); });

let desktopSplide = function () {
    if (jQuery(window).width() >= 1300) {
        if (Splider.length > 0) {
            const pageSplide = Splider.find('.splide__slide').length;
            if (pageSplide <= 4) {
                new Splide(Splider[0], {
                    destroy: true,
                }).mount(window.splide.Extensions);
            } else {
                const splideInstance = new Splide(Splider[0], {
                    type: "loop",
                    drag: "free",
                    focus: "left",
                    perPage: 1,
                    fixedWidth: "256px",
                    autoScroll: {
                        speed: 1
                    },
                    arrows: false,
                    pagination: false
                }).mount(window.splide.Extensions);

                const observer = new MutationObserver(removeInvalidAriaAttributes);
                observer.observe(Splider[0], { childList: true, subtree: true });
                removeInvalidAriaAttributes();
            }
        }
    }
};

jQuery(document).on('ready load', function () { desktopSplide(); });
