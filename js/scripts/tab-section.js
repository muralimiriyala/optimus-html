
"use strict";

document.addEventListener("DOMContentLoaded", function () {
const tabText = document.querySelectorAll(".tab-text");

tabText.forEach(function(tabitem) {
  const initialHeight = tabitem.offsetHeight;
  tabitem.style.height = `${initialHeight}px`;
  tabitem.dataset.initialHeight = initialHeight;

  tabitem.addEventListener("click", function(e) {
    e.preventDefault();
    if (tabitem.dataset.tab !== "true") {
      tabText.forEach((tabel) => {
        if (tabitem !== tabel) {
          tabel.dataset.tab = "false";
          tabel.classList.remove("tab-open");
          const desc = tabel.querySelector(".tab-desc");
          if (desc) {
            desc.style.maxHeight = "";
          }
          tabel.style.height = `${tabel.dataset.initialHeight}px`;
        }
      });
      tabitem.dataset.tab = "true";
      tabitem.classList.add("tab-open");
      tabitem.style.height = `100%`;
      const desc = tabitem.querySelector(".tab-desc");
      if (desc) {
        desc.style.maxHeight = `${desc.scrollHeight}px`;
      }
    } else {
      tabitem.dataset.tab = "false";
      tabitem.classList.remove("tab-open");
      const desc = tabitem.querySelector(".tab-desc");
      tabitem.style.height = `${tabitem.dataset.initialHeight}px`;
      if (desc) {
        desc.style.maxHeight = "";
      }
    }
  });
});
});
