"use strict";

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const menuBtn = document.querySelector(".icon-mobile-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Dropdown
const btnService1 = document.querySelector(".service-btn-1");
const btnService2 = document.querySelector(".service-btn-2");
const btnService3 = document.querySelector(".service-btn-3");
const contentService1 = document.querySelector(".content-2");
const contentService2 = document.querySelector(".content-3");
const contentService3 = document.querySelector(".content-4");

btnService1.addEventListener("click", function () {
  contentService1.classList.toggle("description-hidden");
  contentService2.classList.add("description-hidden");
  contentService3.classList.add("description-hidden");
});

btnService2.addEventListener("click", function () {
  contentService2.classList.toggle("description-hidden");
  contentService1.classList.add("description-hidden");
  contentService3.classList.add("description-hidden");
});

btnService3.addEventListener("click", function () {
  contentService3.classList.toggle("description-hidden");
  contentService1.classList.add("description-hidden");
  contentService2.classList.add("description-hidden");
});

// Slider
const slides = document.querySelectorAll(".container--service");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

let curSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector(".service-footer");

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

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
