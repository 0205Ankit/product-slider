export const arrivalSlider = (name, images, number) => {
  return `
    <div class="mini_slider_box">
        <div class="secondSwiper">
            <div class="swiper-wrapper">
                ${images
                  .map((item, index) => {
                    return `<div
                    key=${index}
                    class="swiper-slide"
                    >
                        <div class="mini_slider_swiper_slide">
                            <img
                                class="mini_slider_image"
                                src="${item}"
                            />
                        </div>
                    </div>`;
                  })
                  .join("")}
            </div>
        </div>
        <h6>${name}</h6>
        <p>
            Rs. 900 <s>Rs. 1500</s>
        </p>
          <div class="swiper-paginations">
            ${images
              .map((item, index) => {
                return `<img
                  class="swiper-paginations-bullet"
                  id="paginations"
                  data-index="${index}"
                  data-slide="${number}"
                  key=${index}
                  src=${item}
                />`;
              })
              .join("")}
          </div>
    </div>
    `;
};
