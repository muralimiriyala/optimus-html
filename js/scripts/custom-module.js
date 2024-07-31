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

  /*-- expand search starts here --*/
  const srcBtn = document.querySelector("button.res-srch-icon");
  if(srcBtn){
      srcBtn.addEventListener('click', function(e) {
          e.preventDefault();
          document.querySelector(".res-srch-form").classList.toggle("open");
      });
  }
  /*-- expand search ends here --*/

  let sublinks = document.querySelectorAll("ul.sub-service-menu > li > a");
  let subnav = document.querySelector(".sub-service-navigation");
  let submobile = document.querySelector(".sub-service-mobile");
  let subSlides = document.querySelectorAll(".sub-service-slide");
  let openSubSlide = document.querySelector(".sub-service-slide.open");

  if (openSubSlide) {
    // Get the scrollHeight and append "px" to it
    let height = openSubSlide.scrollHeight + "px";
    console.log('ScrollHeight:', height);
  
    // Example of setting maxHeight or other styles
    openSubSlide.style.maxHeight = height;
  } else {
    console.log('No element found with .sub-service-slide.open');
  }

  if(sublinks.length > 0){
    // sublinks[0].classList.add("open")
      sublinks.forEach(function(sublink){
        sublink.addEventListener("click", function(e) {
          e.preventDefault();
          sublinks.forEach(function(subitem){
            subitem.classList.remove("open");
          });
          sublink.classList.add("open");
          if(subnav.dataset.open !== "false") {
            subnav.dataset.open = "false";
            submobile.style.maxHeight = "";
            submobile.classList.remove("open");
          }

          subSlides.forEach(function(slide) {
            slide.classList.remove("open");
            slide.style.maxHeight = "";
          });

          let subslideno = this.getAttribute("data-sub-service");
  
         
         
            let targetSubSlide = document.querySelector(`.sub-service-slide[data-sub-service="${subslideno}"]`);
            if(targetSubSlide) {
              targetSubSlide.classList.add("open");
              targetSubSlide.style.maxHeight = `${targetSubSlide.scrollHeight}px`;
            } 
          

        });
      });
  }
  if(subnav){
    subnav.addEventListener("click", function(e){
      e.preventDefault();
      let $this = this;
      $this.classList.toggle("open");
      if($this.dataset.open !== "true") {
        $this.dataset.open = "true";
        submobile.style.maxHeight = `${submobile.scrollHeight}px`;
        submobile.classList.add("open");
      }
      else{
        $this.dataset.open = "false";
        submobile.style.maxHeight = "";
        submobile.classList.remove("open");
      }
    });
  }
});
