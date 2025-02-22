var swiper = new Swiper('#mainSwiper', {
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
  effect: 'slide',
  speed: 1000,
});
