
const navMenu = document.getElementById('nav-menu');
const toggleButton = document.getElementById('toggle');
const closeButton = document.getElementById('nav-close');
// show
toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  });
  closeButton.addEventListener('click', () => {
    navMenu.classList.remove('show');
    });
    // *===== ACTIVE AND REMOVE MENU =====*/
    const navLink = document.querySelectorAll('.navLink');
    function linkAction() {
      /*Active link*/
      navLink.forEach(n => n.classList.remove('active'));
      this.classList.add('active');
      /*Remove menu mobile*/
      navMenu.classList.remove('show');
      }
      navLink.forEach(n => n.addEventListener('click', linkAction));

      


