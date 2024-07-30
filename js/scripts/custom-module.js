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
  const mobileMenu = (humburger, headerRight, ulMenu, lis) => {
    const humburgerBtn = document.querySelector(humburger);
    const hRight = document.querySelector(headerRight);
    const ul = document.querySelector(ulMenu);
    const liitems = ul.querySelectorAll(lis);
    humburgerBtn.addEventListener("click", function (e) {
      e.preventDefault();
      this.classList.toggle("open");
      hRight.classList.toggle("open");
    });
    liitems.forEach(function (li) {
      atag = li.querySelector("a");
      atag.addEventListener("click", function (e) {
        // e.preventDefault();
      });
    });
  };
  mobileMenu(
    ".humburger-btn",
    ".header_right",
    "ul.main_menu",
  );
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

<<<<<<< HEAD
  /*-- expand search starts here --*/
  const srcBtn = document.querySelector("button.res-srch-icon");
  if(srcBtn){
      srcBtn.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(".res-srch-form").classList.toggle("open");
      });
  }
    /*-- expand search ends here --*/
=======
  if ($(window).width() >= 744) {
    jQuery(".sub-service-menu > li, .sub-service-menu > li a").click(function (e) {
      e.preventDefault;
      jQuery(".sub-service-menu > li").removeClass("active");
      jQuery(this).addClass("active");   
    });
  }
  
  if ($(window).width() <= 743) {
    jQuery(".sub-service-navigation").click(function (e) {
      e.preventDefault;
      jQuery(".sub-service-navigation").toggleClass("open");
      jQuery(".sub-service-menu").toggle(500);   
    });
  
    jQuery(".sub-service-menu > li").click(function (e) {
      e.preventDefault;
      jQuery(".sub-service-menu").slideUp(500);   
    });
  }
  
>>>>>>> 0b46f411e31e6ebfefa6305700128d5b612fdc3b

});
