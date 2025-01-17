// Toggle navigation menu visibility
const navMenu = document.getElementById('nav-menu');
const toggleButton = document.getElementById('toggle');
const closeButton = document.getElementById('nav-close');
const showElement = document.getElementById('show');

// Check if elements exist to avoid runtime errors
if (toggleButton && navMenu) {
  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Toggle the "show" class
  });
}

if (closeButton && navMenu) {
  closeButton.addEventListener('click', () => {
    navMenu.classList.remove('show'); // Remove the "show" class
  });
}

// Handle active link and menu closing
const navLinks = document.querySelectorAll('.navLink');
function linkAction() {
  // Remove active class from all links
  navLinks.forEach(link => link.classList.remove('active'));

  // Add active class to the clicked link
  this.classList.add('active');

  // Close the menu
  if (navMenu) {
    navMenu.classList.remove('show');
  }
}

// Add click event listeners to all nav links
navLinks.forEach(link => link.addEventListener('click', linkAction));

// Add hover functionality
if (showElement) {
  showElement.addEventListener('mouseenter', () => {
    console.log('Hovering over the element!');
    // Add custom logic for hover if needed
    showElement.classList.add('hover-active'); // Example: add a class
  });

  showElement.addEventListener('mouseleave', () => {
    console.log('No longer hovering over the element!');
    showElement.classList.remove('hover-active'); // Remove the class
  });
}
