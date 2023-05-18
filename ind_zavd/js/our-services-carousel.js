(function Ant() {
    const slides = [
        '<div class="our-services__slider-column-first our-services__slider-column">  <div class="our-services__column-photo-first our-services__column-photo"> <img src="img/our-services-photo1.jpg" alt=""> </div> <p class="our-srevices__paragraph"> Pallentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus. Eu aliquam nibh tempus at</p> <a href="#"> <div class="btn__see-details">see datail</div> </a></div>',
        '<div class="our-services__slider-column-second our-services__slider-column">  <div class="our-services__column-photo-second our-services__column-photo"> <img src="img/our-services-photo2.jpg" alt=""> </div> <p class="our-srevices__paragraph"> Pallentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus. Eu aliquam nibh tempus at</p> <a href="#"> <div class="btn__see-details">see datail</div> </a></div>',
        '<div class="our-services__slider-column-fourth our-services__slider-column">  <div class="our-services__column-photo-fourth our-services__column-photo"> <img src="img/our-services-photo4.jpg" alt=""> </div> <p class="our-srevices__paragraph"> Pallentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus. Eu aliquam nibh tempus at</p> <a href="#"> <div class="btn__see-details">see datail</div> </a></div>',
        '<div class="our-services__slider-column-third our-services__slider-column">  <div class="our-services__column-photo-third our-services__column-photo"> <img src="img/our-services-photo3.jpg" alt=""> </div> <p class="our-srevices__paragraph"> Pallentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus. Eu aliquam nibh tempus at</p> <a href="#"> <div class="btn__see-details">see datail</div> </a></div>',
        '<div class="our-services__slider-column-first our-services__slider-column">  <div class="our-services__column-photo-first our-services__column-photo"> <img src="img/our-services-photo1.jpg" alt=""> </div> <p class="our-srevices__paragraph"> Pallentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus. Eu aliquam nibh tempus at</p> <a href="#"> <div class="btn__see-details">see datail</div> </a></div>',
        '<div class="our-services__slider-column-third our-services__slider-column">  <div class="our-services__column-photo-third our-services__column-photo"> <img src="img/our-services-photo3.jpg" alt=""> </div> <p class="our-srevices__paragraph"> Pallentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus. Eu aliquam nibh tempus at</p> <a href="#"> <div class="btn__see-details">see datail</div> </a></div>',
        '<div class="our-services__slider-column-second our-services__slider-column">  <div class="our-services__column-photo-second our-services__column-photo"> <img src="img/our-services-photo2.jpg" alt=""> </div> <p class="our-srevices__paragraph"> Pallentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus. Eu aliquam nibh tempus at</p> <a href="#"> <div class="btn__see-details">see datail</div> </a></div>',
        '<div class="our-services__slider-column-fourth our-services__slider-column">  <div class="our-services__column-photo-fourth our-services__column-photo"> <img src="img/our-services-photo4.jpg" alt=""> </div> <p class="our-srevices__paragraph"> Pallentesque ac bibendum tortor, vel blandit nulla. Nulla eget lobortis lacus. Eu aliquam nibh tempus at</p> <a href="#"> <div class="btn__see-details">see datail</div> </a></div>'
        ];
    const carousel = document.querySelector(".our-services__carousel-container");
    const slideContainer = carousel.querySelector(
      ".our-services__carousel-container .our-services__carousel-container-inner" 
    );
    let currentSlide = 0;
    function renderSlides(slides) {
      slideContainer.innerHTML = slides[currentSlide];
      if (window.innerWidth > 767) {
        const secondSlide =
          currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[secondSlide];
      }
      if (window.innerWidth > 1200) {
        const thirdSlide =
          currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[thirdSlide];
        const fourthSlide =
          currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
        slideContainer.innerHTML += slides[fourthSlide];
      }
    }
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      renderSlides(slides);
    }
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) {
        currentSlide = slides.length - 1;
      }
      renderSlides(slides);
    }
     setInterval(nextSlide, 3000);
    renderSlides(slides);
  
    renderSlides(slides);
    const buttonPrev = document.querySelector(".our-services__slideshow-btn-left");
    buttonPrev.addEventListener("click", prevSlide);
  
    const buttonNext = document.querySelector(".our-services__slideshow-btn-right");
    buttonNext.addEventListener("click", nextSlide);

    window.addEventListener("resize", () => {
      renderSlides(slides);
    });
  })();