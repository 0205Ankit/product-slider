export const bigSlider = () => {
  let counter = 0;
  const slide = document.querySelector(".slider-wrapper");
  const allBigSlides = document.querySelectorAll(".slider-content");
  const prevButton = document.querySelector("#prev_button");
  const nextButton = document.querySelector("#next_button");

  let interval = 4000;

  const checkCounter = () => {
    if (counter === 0) {
      prevButton.disabled = true;
    } else {
      prevButton.disabled = false;
    }

    if (counter === allBigSlides.length - 1) {
      nextButton.disabled = true;
    } else {
      nextButton.disabled = false;
    }
  };
  checkCounter();

  setInterval(() => {
    counter = counter + 1;
    checkCounter();
    if (counter > 3) {
      counter = 0;
    }
    checkCounter();
    slide.style.transform = `translateX(-${counter * 102}%)`;
  }, interval);

  nextButton.addEventListener("click", function (e) {
    counter = counter + 1;
    checkCounter();
    slide.style.transform = `translateX(-${counter * 102}%)`;
  });

  prevButton.addEventListener("click", function (e) {
    counter = counter - 1;
    checkCounter();
    slide.style.transform = `translateX(-${counter * 102}%)`;
  });
};

export const miniSlider = () => {
  const allSwiperContainer = document.querySelectorAll(".mini-swiper-wrapper");

  document.querySelectorAll("#paginations").forEach((slide) => {
    slide.addEventListener("click", function (e) {
      const number = slide.getAttribute("data-slide");
      const index = slide.getAttribute("data-index");

      allSwiperContainer[number].style.transform = `translateX(-${
        index * 100
      }%)`;
    });
  });
};
