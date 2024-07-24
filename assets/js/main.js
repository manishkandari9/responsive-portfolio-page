// /*===== MENU SHOW Y HIDDEN =====*/
// // Get the navigation menu and toggle button
// const navMenu = document.getElementById('nav-menu');
// const toggleButton = document.getElementById('toggle');

// // Add event listener to the toggle button
// toggleButton.addEventListener('click', () => {
//   navMenu.classList.toggle('show');
// });

// // Add event listener to the close button
// const closeButton = document.getElementById('nav-close');
// closeButton.addEventListener('click', () => {
//   navMenu.classList.remove('show');
// });
// const navMenu = document.getElementById('nav-menu'),
// navToggle = document.getElementById('nav-toggle'),
// navClose = document.getElementById('nav-close')
// /*===== MENU SHOW =====*/
// /*SHOW*/ 
// toggleMenu.addEventListener('click', ()=>{
//   navMenu.classList.add('show')
//   })
// /*HIDDEN*/
// closeMenu.addEventListener('click', ()=>{
//   navMenu.classList.remove('show')
//   })
// /*===== ACTIVE AND REMOVE MENU =====*/
// const navLink = document.querySelectorAll('.navLink');
// function linkAction() {
//   /*Active link*/
//   navLink.forEach(n => n.classList.remove('active'));
//   this.classList.add('active');
//   /*Remove menu mobile*/
//   navMenu.classList.remove('show-menu');
//   }
//   navLink.forEach(n => n.addEventListener('click', linkAction));
/*===== MENU SHOW Y HIDDEN =====*/ 
// Get the navigation menu and toggle button 
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

