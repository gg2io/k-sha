document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const header = document.getElementById('main-header');
  const isHomePage = document.body.classList.contains('home');
  const hasVisited = sessionStorage.getItem('hasVisited');

  // Trigger navbar slide-in animation
  if (isHomePage && hasVisited) {
    // Skip animation on subsequent visits
    header.classList.add('nav-visible');
  } else {
    // Play animation on first visit
    setTimeout(() => {
      header.classList.add('nav-visible');
    }, 100);
  }

  // Toggle mobile menu on click
  if (menuToggle) {
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
      // Mark that user has navigated away from home
      sessionStorage.setItem('hasVisited', 'true');
    });
  });
});
