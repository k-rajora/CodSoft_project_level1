

const slides = document.querySelectorAll('.slide'); 
const totalSlides = slides.length; 
let currentSlide = 0; 

// Function to show the next slide
function showNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides; 
  const offset = -currentSlide * 100;
  document.querySelector('.hero-slides').style.transform = `translateX(${offset}vw)`; 
}


setInterval(showNextSlide, 5000);


showNextSlide();
