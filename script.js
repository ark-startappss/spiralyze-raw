let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const track = document.querySelector(".carousel-track");
const totalSlides = slides.length;

document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
document.querySelector(".next").addEventListener("click", () => moveSlide(1));

function moveSlide(step) {
  currentIndex = (currentIndex + step + totalSlides) % totalSlides;
  updateCarousel();
}

function moveToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function updateCarousel() {
  // Move slides using translateX
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

  // Update slides
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentIndex].classList.add("active");

  // Update dots
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[currentIndex].classList.add("active");
}

// Auto-play (Optional)
setInterval(() => moveSlide(1), 5000);
