var mainSwiper = new Swiper('#mainSwiper', {
  navigation: {
    nextEl: '#main-swiper-next-button',
    prevEl: '#main-swiper-prev-button',
  },
  pagination: {
    el: '#main-swiper-pagination',
    clickable: true,
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
  spaceBetween: 20,
  effect: 'slide',
  speed: 1000,
});

var teamSwiper = new Swiper('#teamSwiper', {
  spaceBetween: 15,
  slidesPerView: 4,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  effect: 'slide',
  speed: 1000,
});

var teamSwiper = new Swiper('#athletesSwiper', {
  spaceBetween: 15,
  slidesPerView: 4,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
    620: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
  effect: 'slide',
  speed: 1000,
});
