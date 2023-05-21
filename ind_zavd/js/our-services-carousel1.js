const carousel = document.querySelector('.our-services__carousel');
const slides = carousel.querySelectorAll('.our-services__slide');
let currentPosition = 0;

function updateSlidePosition() {
  const windowWidth = window.innerWidth;
  let slideWidth;

  if (windowWidth >= 1000) {
    slideWidth = carousel.offsetWidth / 3;
  } else {
    slideWidth = carousel.offsetWidth;
  }

  carousel.style.transform = `translateX(-${slideWidth * currentPosition}px)`;
}

function moveToNextSlide() {
  if (currentPosition === slides.length - 3) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  updateSlidePosition();
}

// setInterval(moveToNextSlide, 3000);

const buttonPrev = document.querySelector(".our-services__slideshow-btn-left");
buttonPrev.addEventListener("click", () => {
  if (currentPosition === 0) {
    currentPosition = slides.length - 3;
  } else {
    currentPosition--;
  }
  updateSlidePosition();
});

const buttonNext = document.querySelector(".our-services__slideshow-btn-right");
buttonNext.addEventListener("click", () => {
  if (currentPosition === slides.length - 3) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  updateSlidePosition();
});

window.addEventListener("resize", updateSlidePosition);
