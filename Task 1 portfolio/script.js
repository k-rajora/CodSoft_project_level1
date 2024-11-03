let currentIndex = 0; 
const cardWidth = 270; 
const totalCards = document.querySelectorAll('.review-card').length / 2; 
const container = document.querySelector(".review-container");

function slideLeft() {
  if (currentIndex === 0) {
    currentIndex = totalCards - 1; 
    container.style.transition = 'none'; 
    container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    setTimeout(() => {
      container.style.transition = 'transform 0.5s ease'; 
      currentIndex--; 
      if (currentIndex < 0) currentIndex = totalCards - 1;
      container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }, 0); 
  } else {
    currentIndex--;
    container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}

function slideRight() {
  if (currentIndex >= totalCards - 1) {
    currentIndex = 0; 
    container.style.transition = 'none'; 
    container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    setTimeout(() => {
      container.style.transition = 'transform 0.5s ease'; 
      currentIndex++; 
      if (currentIndex >= totalCards) currentIndex = 0;
      container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }, 0); 
  } else {
    currentIndex++;
    container.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
  }
}
