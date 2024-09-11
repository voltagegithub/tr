"use strict";

(function () {
    const layoutNavbar = document.querySelector(".layout-navbar");
    const heroAnimation = document.getElementById("hero-animation");
    const heroDashboardImgs = document.querySelectorAll(".hero-dashboard-img");
    const heroElementsImgs = document.querySelectorAll(".hero-elements-img");
    const swiperClientsLogos = document.getElementById("swiper-clients-logos");
    const swiperReviews = document.getElementById("swiper-reviews");
    const reviewsPreviousBtn = document.getElementById("reviews-previous-btn");
    const reviewsNextBtn = document.getElementById("reviews-next-btn");
    const swiperButtonPrev = document.querySelector(".swiper-button-prev");
    const swiperButtonNext = document.querySelector(".swiper-button-next");
    const priceDurationToggler = document.querySelector(".price-duration-toggler");
    const priceMonthly = [].slice.call(document.querySelectorAll(".price-monthly"));
    const priceYearly = [].slice.call(document.querySelectorAll(".price-yearly"));

    if (screen.width >= 1200 && heroAnimation) {
        heroAnimation.addEventListener("mousemove", function (event) {
            heroElementsImgs.forEach(element => {
                element.style.transform = "translateZ(1rem)";
            });

            heroDashboardImgs.forEach(element => {
                const x = (window.innerWidth - 2 * event.pageX) / 100;
                const y = (window.innerHeight - 2 * event.pageY) / 100;
                element.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`;
            });
        });

        layoutNavbar.addEventListener("mousemove", function (event) {
            heroElementsImgs.forEach(element => {
                element.style.transform = "translateZ(1rem)";
            });

            heroDashboardImgs.forEach(element => {
                const x = (window.innerWidth - 2 * event.pageX) / 100;
                const y = (window.innerHeight - 2 * event.pageY) / 100;
                element.style.transform = `perspective(1200px) rotateX(${y}deg) rotateY(${x}deg) scale3d(1, 1, 1)`;
            });
        });

        heroAnimation.addEventListener("mouseout", function () {
            heroElementsImgs.forEach(element => {
                element.style.transform = "translateZ(0)";
            });

            heroDashboardImgs.forEach(element => {
                element.style.transform = "perspective(1200px) scale(1) rotateX(0) rotateY(0)";
            });
        });
    }
})();

var modals = document.querySelectorAll(".modal");
var imgs = document.querySelectorAll(".tanitim");
imgs.forEach(function(img, index) {
  var modal = modals[0];
  var modalImg = modal.querySelector(".modal-content");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  }
  var span = modal.querySelector(".close");
  span.onclick = function() {
    modal.style.display = "none";
  }
});