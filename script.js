document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const header = document.getElementById('main-header');
  const isHomePage = document.body.classList.contains('home');
  const hasVisitedOtherPage = sessionStorage.getItem('hasVisitedOtherPage');

  // Trigger navbar slide-in animation
  if (isHomePage) {
    // Home page - always animate menu, but logo is hidden
    setTimeout(() => {
      header.classList.add('nav-visible');
    }, 100);
    // Clear the flag when returning to home
    sessionStorage.removeItem('hasVisitedOtherPage');
  } else {
    // Other pages - animate only on first visit after leaving home
    if (hasVisitedOtherPage) {
      // Already visited another page, show immediately
      header.classList.add('nav-visible');
    } else {
      // First page after home, animate the logo
      setTimeout(() => {
        header.classList.add('nav-visible');
      }, 100);
      // Mark that we've visited a non-home page
      sessionStorage.setItem('hasVisitedOtherPage', 'true');
    }
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
    });
  });
});
