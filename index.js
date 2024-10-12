
 //below is for splash screen and typing effect
window.addEventListener('load', function () {
    setTimeout(function () {
      const splash = document.getElementById('splash');
      const mainContent = document.getElementById('main-content');

      splash.classList.add('fade-out');

      setTimeout(function () {
        splash.classList.add('hidden');
        mainContent.classList.remove('hidden');
        mainContent.classList.add('opacity-100');
      }, 2000);
      
    }, 2000);
  });

  const text = "PCCoE ACM STUDENT CHAPTER";
  let index = 0;
  const speed = 102;

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("text").innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(fadeOutText, 1000);
    }
  }

  function fadeOutText() {
    const textElement = document.getElementById("text");
    textElement.classList.add('fade-out');

    setTimeout(function () {
      const splash = document.getElementById('splash');
      const mainContent = document.getElementById('main-content');

      splash.classList.add('hidden');
      mainContent.classList.remove('hidden');
      mainContent.classList.add('opacity-200');
    }, 2000);
  }

  window.onload = typeWriter;


//hamburger
  document.getElementById('hamburger').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
  });

  document.getElementById('close-menu').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.add('hidden');
  });



  const slides = document.querySelector('.slides');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let indexe = 1; // Start at the first duplicate slide

  function showSlide() {
      const offset = -indexe * 100; // Calculate the offset
      slides.style.transform = `translateX(${offset}%)`;
  }

  function showNextSlide() {
    indexe++; // Move to the next slide
      // Check if we've reached the last slide (the duplicate of the first)
      if (indexe === slides.children.length - 1) {
          setTimeout(() => {
            indexe = 1; // Reset to the first original slide
              slides.style.transition = 'none'; // Disable transition
              showSlide(); // Jump to the first original slide
          }, 500); // Wait for the transition duration
      }
      slides.style.transition = 'transform 0.5s ease-in-out'; // Enable transition
      showSlide();
  }

  function showPrevSlide() {
    indexe--; // Move to the previous slide
      // Check if we've reached the first slide (the duplicate of the last)
      if (indexe === 0) {
        indexe = slides.children.length - 2; // Jump to the last original slide
          slides.style.transition = 'none'; // Disable transition
          showSlide(); // Jump to the last original slide
      }
      slides.style.transition = 'transform 0.5s ease-in-out'; // Enable transition
      showSlide();
  }

  nextButton.addEventListener('click', showNextSlide);
  prevButton.addEventListener('click', showPrevSlide);

  setInterval(showNextSlide, 3000); // Change image every 3 seconds