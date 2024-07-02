jQuery(function ($) {
    var v = 0;
    var n = {};
    var activeIndex = 0; // To track the currently active index

    function u() {
        $(".ai-feature-section .ai-feature-arts .ai-feature-art").on("click", function () {
            var w = $(".ai-feature-section .ai-feature-arts .ai-feature-art").index(this);
            b(this, w);
        });

        $(".ai-feature-section .ai-feature-arts .ai-feature-art").on("keydown", function (w) {
            q(w);
        });

        window.onresize = function () {
            t();
            c();
        };
    }
    function t() {
        var x = "auto";
        var w = true;

        if ($(document).width() < 1200) {
            $(".ai-feature-section").addClass("scrolled");
            setActive(0);
            l(false, 0);
        } else {
            if (window.scrollY > 100) {
                $(".ai-feature-section").addClass("scrolled");
                setActive(activeIndex);
                s();
                l(false, 1000);
            } else {
                $(".ai-feature-section").removeClass("scrolled");
                setActive(activeIndex, true);
                l(true, 0);
            }
            w = false;
        }
    }

    function c() {
        n.group = document.querySelector(".ai-feature-section .ai-feature-arts");
        n.nodes = document.querySelectorAll(".ai-feature-section .ai-feature-arts .ai-feature-art");
        n.total = n.nodes.length;
        n.ease = Power1.easeInOut;
        n.boxes = [];

        for (var w = 0; w < n.total; w++) {
            var x = n.nodes[w];
            gsap.set(x, { x: 0 });
            n.boxes[w] = { x: x.offsetLeft, y: x.offsetTop, node: x };
        }

        $(document).off("scroll", f);

        if ($(document).width() >= 1200) {
            $(document).on("scroll", f);
        } else {
            l(false, 0);
            $(".ai-feature-section").addClass("scrolled");
            setActive(0);
        }
    }

    function k() {
        $(".ai-feature-section").addClass("scrolled");
        setActive(0);
        var w = document.querySelector(".ai-feature-section").offsetTop;
        window.scrollTo({ top: w - 64, behavior: "smooth" });
    }

    function i(x, w) {
        $(".ai-feature-section .ai-feature-arts .ai-feature-art").removeClass("selected").attr("tabindex", "-1").attr("aria-selected", "false");
        $(".ai-feature-section .slide-blue-bg").hide();
        $(w).addClass("selected").attr("tabindex", "0").attr("aria-selected", "true");

        if (v !== x) {
            $(".ai-feature-section .product-slide").addClass("is-visible");
        }

        v = x;
    }

    function q(w) {
        o(w, $(".ai-feature-section .ai-feature-arts .ai-feature-art"), b);
    }

    function b(x, w) {
        activeIndex = w; // Update activeIndex to the clicked item
        if ($(".ai-feature-section").hasClass("scrolled")) {
            if (v !== w) {
                i(w, x);
            }
        } else {
            k();
            i(w, x);
        }
    }

    function l(w, x) {
        setTimeout(function () {
            var y = $(".ai-feature-section .slide-blue-bg");
            w ? y.show() : y.fadeOut();
        }, x);
    }

    function f() {
        if (window.scrollY >= 300 && !$(".ai-feature-section").hasClass("scrolled")) {
            $(".ai-feature-section").addClass("scrolled");
            setActive(activeIndex);
            s();
            l(false, 1000);
        } else if (window.scrollY <= 200 && $(".ai-feature-section").hasClass("scrolled")) {
            $(".ai-feature-section").removeClass("scrolled");
            setActive(activeIndex, true);
            s();
            l(true, 1000);
        }
    }

    function s() {
        for (var z = 0; z < n.total; z++) {
            var B = n.boxes[z];
            var C = B.x;
            var A = B.y;
            B.x = B.node.offsetLeft;
            B.y = B.node.offsetTop;

            if (C === B.x && A === B.y) {
                continue;
            }

            var w = C - B.x;
            var D = A - B.y;
            gsap.fromTo(B.node, { x: w, y: D }, { duration: 1, x: 0, y: 0, ease: n.ease });
        }
    }

    function o(B, C, D) {
        var x = false;
        var A = C.length;
        var z = C.index(B.currentTarget);
        var w = z;

        switch (B.keyCode) {
            case 37:
            case 38:
                w = (w - 1 + A) % A;
                x = true;
                break;
            case 39:
            case 40:
                w = (w + 1 + A) % A;
                x = true;
                break;
            case 36:
                w = 0;
                x = true;
                break;
            case 35:
                w = A - 1;
                x = true;
                break;
            case 32:
            case 13:
                D(C.eq(w), w);
                break;
            default:
                break;
        }

        if (x) {
            B.stopPropagation();
            B.preventDefault();
            var y = C.eq(w);
            $(y).focus();
        }
    }

    function setActive(index, slideUp = false) {
        $(".ai-feature-art").removeClass("ai-art-open");
        $(".ai-feature-art").find(".ai-feature-head").removeClass("ai-head-open");
        $(".ai-feature-art").find(".ai-feature-content").slideUp(500);
        $(".ai-feature-image").removeClass("active-slide");

        if (!slideUp) {
            $(".ai-feature-art").eq(index).addClass("ai-art-open");
            $(".ai-feature-art").eq(index).find(".ai-feature-head").addClass("ai-head-open");
            $(".ai-feature-art").eq(index).find(".ai-feature-content").slideDown(500);
            $(".ai-feature-image").eq(index).addClass("active-slide");
        }
    }

    $(document).ready(function () {
        c();
        u();
        t(); // Ensure initial state is set based on scroll position
    });

    jQuery(document).ready(function () {
        jQuery('.ai-feature-main').each(function (index) {
            const $prodSlide = $(this);
            $prodSlide.find(".ai-feature-head").on("click", function (e) {
                e.preventDefault();
                var parent = $(this).parent().parent();
                var index = parent.index();
                activeIndex = index;

                parent.toggleClass('ai-art-open');
                parent.siblings().removeClass('ai-art-open');
                parent.siblings().find('.ai-feature-head').removeClass('ai-head-open');
                $(this).toggleClass("ai-head-open");
                $(this).siblings('.ai-feature-content').slideToggle(500);
                parent.siblings().find('.ai-feature-content').slideUp(500);

                /*-- slide --*/
                let data = $(this).data("name");
                $prodSlide.find('.ai-feature-image').removeClass('active-slide');
                $prodSlide.find('.ai-feature-image[data-image="' + data + '"]').addClass('active-slide');
            });
        });
    });
});
