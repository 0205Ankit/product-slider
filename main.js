import { mainIcon } from "./icons";
import "./style.css";
import { swiper, swiper2 } from "./swiper";
import { arrivalSlider } from "./arrivalSlider";

document.querySelector(".header").innerHTML = `
    <div class="navbar">
      ${mainIcon()}
    </div>
`;

document.querySelector("#feature_slider").innerHTML = `
  <div style="position:relative">
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
            <img class="desktop_image" src="/1.webp" alt="" />
            <img class="mobile_image" src="/1mini.jpeg" alt="" />
        </div>
        <div class="swiper-slide">
            <img class="desktop_image" src="/2.webp" alt="" />
            <img class="mobile_image" src="/2mini.webp" alt="" />
        </div>
        <div class="swiper-slide">
            <img class="desktop_image" src="/3.jpeg" alt="" />
            <img class="mobile_image" src="/3mini.webp" alt="" />
        </div>
        <div class="swiper-slide">
            <img class="desktop_image" src="/4.webp" alt="" />
            <img class="mobile_image" src="/4mini.webp" alt="" />
        </div>
      </div>
    </div>
    <div class="button-container">
        <button class="nav_buttons" id="prev_button">
          <img src="/left-arrow.png"/>
        </button>
        <button class="nav_buttons" id="next_button">
          <img src="/right-arrow.png"/>
        </button>
    </div>
  </div>
`;

swiper();

document.querySelector(".arrival_slider").innerHTML = `
  <div>
        <h1>
          New Arrivals
        </h1>
        <p>
          These are mini sliders with custom pagination
        </p>
        <div class="flex_container">
          <div class="mini_slider_container">
            ${arrivalSlider("NERI Soft Bedsheet", ["/5.webp", "/6.webp"], 0)}
          </div>
          <div class="mini_slider_container">
            ${arrivalSlider(
              "AVA Soft Bedsheet",
              ["/7.webp", "/8.webp", "/9.webp"],
              1
            )}
          </div>
          <div class="mini_slider_container">
            ${arrivalSlider("AVA Soft Bedsheet", ["/10.webp", "/11.webp"], 2)}
          </div>
          <div class="mini_slider_container">
          ${arrivalSlider("NERI Soft Bedsheet", ["/5.webp", "/6.webp"], 3)}
          </div>
        </div>
      </div>
`;

swiper2();
