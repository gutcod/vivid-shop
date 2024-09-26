function initSlider() {
  const slides = document.querySelectorAll('.slide');
  const navDots = document.querySelectorAll('.slider-nav a');
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

  function showSlide(index) {
    index = Math.max(0, Math.min(index, slides.length - 1));

    slides.forEach(slide => slide.style.opacity = 0);
    navDots.forEach(dot => dot.classList.remove('active'));

    slides[index].style.opacity = 1;
    navDots[index].classList.add('active');
    currentSlide = index;
  }

  function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  }

  // Add click events to navigation dots
  navDots.forEach((dot) => {
    dot.addEventListener('click', (e) => {
      e.preventDefault();
      const slideIndex = parseInt(dot.getAttribute('data-slide'));
      if (!isNaN(slideIndex)) {
        showSlide(slideIndex);
        resetInterval();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') {
      nextSlide();
      resetInterval();
    } else if (e.key === 'ArrowLeft') {
      prevSlide();
      resetInterval();
    }
  });

  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }

  showSlide(0);
}
document.addEventListener('DOMContentLoaded', initSlider);
