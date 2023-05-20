const carousel = document.querySelector('.our-services__carousel');
const slides = carousel.querySelectorAll('.our-services__slide');
const slideWidth = slides[0].offsetWidth;
let currentPosition = 0;

function moveToNextSlide() {
  if (currentPosition === slides.length - 3) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  updateSlidePosition();
}

function updateSlidePosition() {
  carousel.style.transform = `translateX(-${ slideWidth*currentPosition }px)`;
}

setInterval(moveToNextSlide, 3000);
