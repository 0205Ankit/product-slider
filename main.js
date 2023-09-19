import { mainIcon } from "./icons";
import "./style.css";
import { arrivalSlider } from "./arrivalSlider";
import { bigSlider, miniSlider } from "./helper";

document.querySelector(".header").innerHTML = `
    <div class="navbar">
      ${mainIcon()}
    </div>
`;

document.querySelector("#feature_slider").innerHTML = `
  <div style="position:relative">
    <div class="slider">
      <div class="slider-wrapper">
        <div class="slider-content">
            <img class="desktop_image" src="/1.webp" alt="" />
            <img class="mobile_image" src="/1mini.jpeg" alt="" />
        </div>
        <div class="slider-content">
            <img class="desktop_image" src="/2.webp" alt="" />
            <img class="mobile_image" src="/2mini.webp" alt="" />
        </div>
        <div class="slider-content">
            <img class="desktop_image" src="/3.jpeg" alt="" />
            <img class="mobile_image" src="/3mini.webp" alt="" />
        </div>
        <div class="slider-content">
            <img class="desktop_image" src="/4.webp" alt="" />
            <img class="mobile_image" src="/4mini.webp" alt="" />
        </div>
      </div>
      <button class="nav_buttons" id="prev_button">
        <img src="/left-arrow.png"/>
      </button>
      <button class="nav_buttons" id="next_button">
        <img src="/right-arrow.png"/>
      </button>
    </div>
  </div>
    `;

bigSlider();

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

miniSlider();
