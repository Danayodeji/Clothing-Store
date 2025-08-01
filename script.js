"use strict";

 var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function showSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = "flex";
}

function hideSidebar(){
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = "none";
}