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

new Swiper(".slider", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});