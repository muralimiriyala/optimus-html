"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const tabTexts = document.querySelectorAll(".tab-text");

    tabTexts.forEach(function(tabText) {
        const tabHead = tabText.querySelector(".tab-head");
        const initialHeight = tabText.offsetHeight;
        tabText.style.height = `${initialHeight}px`;
        tabText.dataset.initialHeight = initialHeight;

        tabText.addEventListener("click", function(e) {
            // Check if the target is not the 'Position or job title' link
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
});
