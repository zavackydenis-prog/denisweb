// Hamburger menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Voliteľne: zvýraznenie aktívnej položky menu
const currentLocation = window.location.pathname;
const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(link => {
  if (link.getAttribute('href') === currentLocation.split('/').pop()) {
    link.classList.add('active');
  }
});
