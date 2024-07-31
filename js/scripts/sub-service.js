"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let sublinks = document.querySelectorAll("ul.sub-service-menu > li > a");
  let subnav = document.querySelector(".sub-service-navigation");
  let submobile = document.querySelector(".sub-service-mobile");
  let subSlides = document.querySelectorAll(".sub-service-slide");

  if(sublinks.length > 0){
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
            $(slide).hide();
          });

            let subslideno = this.getAttribute("data-sub-service");
            let targetSubSlide = document.querySelector(`.sub-service-slide[data-sub-service="${subslideno}"]`);
            if(targetSubSlide) {
                $(targetSubSlide).stop(true).fadeIn(1000);
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