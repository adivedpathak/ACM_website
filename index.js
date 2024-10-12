
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