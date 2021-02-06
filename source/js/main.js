let navMain = document.querySelector(".main-nav");
let navToggle = document.querySelector(".main-nav__toggle");

navMain.classList.remove("main-nav--nojs");
navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});


$('.slider').slick({
  arrows: true,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  centerMode: true,
  centerPadding: "0",
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
				