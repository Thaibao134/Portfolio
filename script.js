document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".info-box");
  const display = document.getElementById("info-display");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      display.textContent = box.getAttribute("data-info");
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".info-box");
  const display = document.getElementById("info-display");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      display.textContent = box.getAttribute("data-info");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var glide = new Glide("#intro", {
    type: "carousel",
    perView: 4,
    focusAt: "center",
    breakpoints: {
      800: { perView: 2 },
      480: { perView: 1 },
    },
  });
  glide.mount();
});

// Project carousel text-slide click handler

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll("#glide-carousel-demo .text-slide");
  const display = document.getElementById("project-display");
  slides.forEach((slide) => {
    slide.addEventListener("click", function () {
      const title = slide.querySelector(".slide-title")?.textContent || "";
      const desc = slide.querySelector(".slide-desc")?.textContent || "";
      display.innerHTML = `<div style='font-size:1.5rem;font-weight:600;margin-bottom:0.5rem;'>${title}</div><div>${desc}</div>`;
    });
  });
});

// Swiper vertical carousel initialization and click handler

document.addEventListener("DOMContentLoaded", function () {
  if (window.Swiper) {
    var swiper = new Swiper(".mySwiper", {
      direction: "vertical",
      slidesPerView: 3,
      spaceBetween: 20,
      mousewheel: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    // Click handler for text-slide
    document
      .querySelectorAll("#swiper-carousel-demo .text-slide")
      .forEach((slide) => {
        slide.addEventListener("click", function () {
          const title = slide.querySelector(".slide-title")?.textContent || "";
          const desc = slide.querySelector(".slide-desc")?.textContent || "";
          const display = document.getElementById("project-display");
          display.innerHTML = `<div style='font-size:1.5rem;font-weight:600;margin-bottom:0.5rem;'>${title}</div><div>${desc}</div>`;
        });
      });
  }
});
