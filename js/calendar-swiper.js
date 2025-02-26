var calendarSwiper = new Swiper('#calendarSwiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    650: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    }
  },
  effect: 'slide',
  speed: 1000,
});
