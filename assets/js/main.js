
const navMenu = document.getElementById('nav-menu');
const toggleButton = document.getElementById('toggle');
const closeButton = document.getElementById('nav-close');
// show
toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('show');
  });
//  hidden
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

      window.addEventListener('scroll', scrollActive)
      const sr = scrollreveal({
        origin:'top',
        distance:'60px',
        duration: '2000',
        delay:200,
        reset: true
      });
      sr.reveal('.home-text, .about-image, .skills__subtitle, .skills__text',{}); 
      sr.reveal('.home_img, .subtitle1, .about-text, .skills__img',{delay: 400}); 
      sr.reveal('.social',{ interval: 200}); 
      sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
      



