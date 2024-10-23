const introText = "Welcome to PCCOE ACM Student Chapter";
const typedTextElement = document.getElementById('typed-text');
const introElement = document.getElementById('intro');
let charIndex = 0;

function typeText() {
    if (charIndex < introText.length) {
        typedTextElement.innerHTML += introText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(() => {
            introElement.style.opacity = '0';
            setTimeout(() => {
                introElement.style.display = 'none';
            }, 1000);
        }, 1000);
    }
}

window.addEventListener('load', typeText);

// Auto image slider (unchanged)
const headerSlider = document.getElementById('header-slider');
let currentSlide = 0;
const slides = headerSlider.querySelectorAll('[data-carousel-item]');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.remove('hidden');
        } else {
            slide.classList.add('hidden');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 5 seconds
showSlide(currentSlide);



document.addEventListener('DOMContentLoaded', function() {
  const headerSlider = document.getElementById('header-slider');
  const slides = headerSlider.querySelectorAll('[data-carousel-item]');
  let currentSlide = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          if (i === index) {
              slide.classList.add('active');
              slide.classList.remove('hidden'); // Make it visible
          } else {
              slide.classList.remove('active');
              setTimeout(() => {
                  slide.classList.add('hidden'); // Delay hiding to ensure smooth fade-out
              }, 1000); // Match the fade-out time
          }
      });
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // Slide change interval
  showSlide(currentSlide); // Show the first slide initially
});
