// let navMain = document.querySelector(".main-nav");
// let navToggle = document.querySelector(".main-nav__toggle");

// navMain.classList.remove("main-nav--nojs");
// navToggle.addEventListener('click', function() {
//   if (navMain.classList.contains("main-nav--closed")) {
//     navMain.classList.remove("main-nav--closed");
//     navMain.classList.add("main-nav--opened");
//   } else {
//     navMain.classList.add("main-nav--closed");
//     navMain.classList.remove("main-nav--opened");
//   }
// });

window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.main-nav'),
  menuItem = document.querySelectorAll('.main-nav__item'),
  hamburger = document.querySelector('.main-header__hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('main-header__hamburger-active');
      menu.classList.toggle('main-nav__active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('main-header__hamburger-active');
          menu.classList.toggle('main-nav__active');
      })
  })
});