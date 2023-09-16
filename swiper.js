import Swiper from "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs";

export const swiper = () => {
  const swiperInstance = new Swiper(".mySwiper", {
    navigation: true,
    spaceBetween: 20,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
  });

  document.getElementById("next_button").addEventListener("click", function () {
    swiperInstance.slideNext();
  });

  document.getElementById("prev_button").addEventListener("click", function () {
    swiperInstance.slidePrev();
  });
};

export const swiper2 = () => {
  const swiperInstance2 = new Swiper(".secondSwiper", {
    navigation: false,
    spaceBetween: 20,
    effect: "fade",
    speed: 1000,
    pagination: true,
  });

  const allBullets = document.querySelectorAll(".swiper-paginations-bullet");

  allBullets.forEach(function (bullet) {
    bullet.addEventListener("click", function (event) {
      const index = event.target.getAttribute("data-index");
      const number = event.target.getAttribute("data-slide");
      swiperInstance2[number].slideTo(index);
    });
  });
};
