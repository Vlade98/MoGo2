"use strict";

// Mobile navigation
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// DROPDOWN
const dropdown = (function () {
  const btnService = document.querySelectorAll(".service-btn");
  const contentService = document.querySelectorAll(".content");

  for (let i = 0; i < btnService.length; i++) {
    btnService[i].addEventListener("click", function () {
      contentService[i].classList.toggle("description-hidden");
      if (contentService[i].classList.contains("description-hidden")) {
        btnService[i].style.transform = "rotate(0deg)";
      } else {
        btnService[i].style.transform = "rotate(180deg)";
      }
    });
  }
})();

// MODAL WINDOW
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelector(".overlay");
const btnsOpenModal = document.querySelectorAll(".img-container-modal");
const btnsCloseModal = document.querySelectorAll(".close-modal");

for (let i = 0; i < btnsCloseModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", function () {
    modal[i].classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  btnsCloseModal[i].addEventListener("click", function () {
    modal[i].classList.add("hidden");
    overlay.classList.add("hidden");
  });
}

// LOGO SLIDER
const logoSlider = (function () {
  const logoSlides = document.querySelectorAll(".logo-item");
  const logos = document.querySelector(".logos");

  let curLogo = -logoSlides.length + 2;
  const maxLogos = logoSlides.length;

  const goToLogo = function (logos) {
    logoSlides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - logos)}%)`)
    );
  };
  goToLogo(curLogo);

  const nextLogo = function () {
    if (curLogo === maxLogos + maxLogos / 2) {
      logoSlides.forEach(slide => (slide.style.display = "none"));
      curLogo = -maxLogos + 1;
    } else {
      logoSlides.forEach(slide => (slide.style.display = "flex"));
      curLogo++;
    }
    goToLogo(curLogo);
  };

  setInterval(nextLogo, 1500);
})();

// SLIDERS
const sliders = (function () {
  const testimonialSlides = document.querySelectorAll(
    ".container--testimonial"
  );
  const testimonialBtnLeft = document.querySelector(".testimonial-btn-left");
  const testimonialBtnRight = document.querySelector(".testimonial-btn-right");

  const slides = document.querySelectorAll(".container--service");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxTSlide = testimonialSlides.length;
  const maxSlide = slides.length;

  const goToSlide = function (sl, slide) {
    sl.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  goToSlide(testimonialSlides, 0);
  goToSlide(slides, 0);

  const nextS = function (maxSlide, sli) {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(sli, curSlide);
  };

  const prevS = function (maxSlide, sli) {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(sli, curSlide);
  };

  testimonialBtnLeft.addEventListener("click", () =>
    prevS(maxTSlide, testimonialSlides)
  );
  testimonialBtnRight.addEventListener("click", () =>
    nextS(maxTSlide, testimonialSlides)
  );

  btnLeft.addEventListener("click", () => prevS(maxSlide, slides));
  btnRight.addEventListener("click", () => nextS(maxSlide, slides));
})();
