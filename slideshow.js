let slides = document.querySelectorAll('.slide');

const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentSlide = 0;

const cycleNext = () => {
  slides.forEach((slide) => {
    slide.classList.remove('current');
  });
  currentSlide++;
  if (currentSlide === 3) {
    currentSlide = 0;
  }
  slides[currentSlide].classList.add('current');
};
const cyclePrev = () => {
  slides.forEach((slide) => {
    slide.classList.remove('current');
  });
  currentSlide--;
  if (currentSlide === -1) {
    currentSlide = 2;
  }
  slides[currentSlide].classList.add('current');
};

prev.addEventListener('click', cyclePrev);
next.addEventListener('click', cycleNext);
