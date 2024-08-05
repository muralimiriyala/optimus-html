
"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const tabTexts = document.querySelectorAll(".tab-text");

    const updateHeights = () => {
        tabTexts.forEach(function(tabText) {
            const initialHeight = tabText.querySelector(".tab-head").offsetHeight + 56;
            tabText.style.height = `${initialHeight}px`;
            tabText.dataset.initialHeight = initialHeight;
            
            if (tabText.dataset.tab === "true") {
                const desc = tabText.querySelector(".tab-desc");
                if (desc) {
                    desc.style.maxHeight = `${desc.scrollHeight}px`;
                }
            }
        });
    };

    updateHeights();

    tabTexts.forEach(function(tabText) {
        const tabHead = tabText.querySelector(".tab-head");

        tabText.addEventListener("click", function(e) {
            if (!e.target.closest("a")) {
                e.preventDefault();
                e.stopPropagation();

                if (tabText.dataset.tab !== "true") {
                    document.querySelectorAll(".tab-text").forEach((tabel) => {
                        if (tabText !== tabel) {
                            tabel.dataset.tab = "false";
                            tabel.classList.remove("tab-open");
                            const desc = tabel.querySelector(".tab-desc");
                            if (desc) {
                                desc.style.maxHeight = "";
                            }
                            tabel.style.height = `${tabel.dataset.initialHeight}px`;
                        }
                    });
                    tabText.dataset.tab = "true";
                    tabText.classList.add("tab-open");
                    tabText.style.height = `100%`;
                    const desc = tabText.querySelector(".tab-desc");
                    if (desc) {
                        desc.style.maxHeight = `${desc.scrollHeight}px`;
                    }
                }
            }
        });

        const tabArrow = tabHead.querySelector(".tab-arrow");
        tabArrow.addEventListener("click", function(e) {
            e.stopPropagation();
            e.preventDefault();

            if (tabText.dataset.tab === "true") {
                tabText.dataset.tab = "false";
                tabText.classList.remove("tab-open");
                const desc = tabText.querySelector(".tab-desc");
                tabText.style.height = `${tabText.dataset.initialHeight}px`;
                if (desc) {
                    desc.style.maxHeight = "";
                }
            }
        });
    });

    document.addEventListener("click", function(e) {
        if (!e.target.closest(".tab-text")) {
            document.querySelectorAll(".tab-text").forEach((tabel) => {
                tabel.dataset.tab = "false";
                tabel.classList.remove("tab-open");
                const desc = tabel.querySelector(".tab-desc");
                if (desc) {
                    desc.style.maxHeight = "";
                }
                tabel.style.height = `${tabel.dataset.initialHeight}px`;
            });
        }
    });

    window.addEventListener("resize", updateHeights);
    window.addEventListener("orientationchange", updateHeights);
});

function tabFun(e) {
    e.preventDefault();
    let $this = this;
    tablinks.forEach(function(item) {
        item.classList.remove("active");
    });
    $this.classList.toggle("active");
    let tabattr = $this.getAttribute("data-name");
    const tabRow = document.querySelectorAll(".data-tab-row");
    tabRow.forEach(function(tabitem) {
        $(tabitem).fadeOut(100);
        tabitem.classList.remove("open");
    });
    $(`.data-tab-row[data-tab='${tabattr}']`).fadeIn(500);
    document.querySelector(`.data-tab-row[data-tab='${tabattr}']`).classList.add("open");
}

let tablinks = document.querySelectorAll("ul.tab-links > li > a");
tablinks.forEach(function(tablink) {
    tablink.addEventListener("click", tabFun);
});
