"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector("header.site-header");
  const headerHeight = header.clientHeight;
  window.onscroll = function () {
    const scroll = window.scrollY;
    scroll >= headerHeight
      ? header.classList.add("sticky-header")
      : header.classList.remove("sticky-header");
  };

  /*-- menu starts here --*/
  const mobileMenu = (humburger, headerRight, ulMenu, moverlay) => {
    const humburgerBtn = document.querySelector(humburger);
    const hRight = document.querySelector(headerRight);
    const ul = document.querySelector(ulMenu);
    const liitems = ul.querySelectorAll("li.menu-item-has-children");
    const overly = document.querySelector(moverlay);
    humburgerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("open");
      hRight.classList.toggle("open");
      overly.classList.toggle("open");
    });

    liitems.forEach(function (li) {
      atag = li.querySelector("a");
      atag.addEventListener("click", function (e) {
        e.preventDefault();
        let parentElement = this.parentElement;
        let sibling = parentElement.querySelector("ul.sub-menu");

        liitems.forEach(function (item) {
          if (item !== parentElement) {
            const siblingSubMenu = item.querySelector("ul.sub-menu");
            if (siblingSubMenu) {
              siblingSubMenu.style.maxHeight = null;
              const siblingLink = item.querySelector("a");
              siblingLink.classList.remove("active");
              item.dataset.menu = "false";
            }
          }
        });
      
        if (parentElement.dataset.menu === "true") {
          parentElement.dataset.menu = "false";
          sibling.style.maxHeight = null;
          this.classList.remove("active");
        }
        else {
          parentElement.dataset.menu = "true";
          sibling.style.maxHeight = `${sibling.scrollHeight}px`;
          this.classList.add("active");
        }
      });


    });
  };
  mobileMenu(
    ".humburger-btn",
    ".header_right",
    "ul.main_menu",
    ".h-mobile-overlay"
  );
  mobileResize = () =>{
    let myoverlay = document.querySelector(".h-mobile-overlay");
    if(myoverlay){
      myoverlay.classList.remove("open");
    }
  }
  window.addEventListener("resize", mobileResize);
  window.addEventListener("orientationchange", mobileResize);
  /*-- menu ends here --*/

  /*-- accordions starts here --*/
  const accordions = (aList, aHeader, aContent) => {
    const items = document.querySelectorAll(aList);
    if (!items.length) return;

    items.forEach((el) => {
      const header = el.querySelector(aHeader);
      const content = el.querySelector(aContent);

      header.addEventListener("click", () => {
        if (el.dataset.open !== "true") {
          // Close all siblings
          items.forEach((item) => {
            if (item !== el) {
              item.dataset.open = "false";
              const itemHeader = item.querySelector(aHeader);
              if (itemHeader) {
                itemHeader.classList.remove("open");
              }
              const itemContent = item.querySelector(aContent);
              if (itemContent) {
                itemContent.style.maxHeight = "";
              }
            }
          });

          // Open the clicked one
          el.dataset.open = "true";
          header.classList.add("open");
          content.style.maxHeight = `${content.scrollHeight}px`;
        } else {
          el.dataset.open = "false";
          header.classList.remove("open");
          content.style.maxHeight = "";
        }
      });

      const onResize = () => {
        if (el.dataset.open === "true") {
          if (Number(content.style.maxHeight) !== content.scrollHeight) {
            content.style.maxHeight = `${content.scrollHeight}px`;
          }
        }
      };

      window.addEventListener("resize", onResize);
    });
  };
  accordions(".accordion-list", ".accordion-header", ".accordion-content");
  /*-- accordions ends here --*/

  /*-- expand search starts here --*/
  const srcBtn = document.querySelector("button.res-srch-icon");
  if (srcBtn) {
    srcBtn.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(".res-srch-form").classList.toggle("open");
    });
  }
  /*-- expand search ends here --*/



});
