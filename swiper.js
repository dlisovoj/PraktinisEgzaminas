const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 20
    }
  },
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiper2 = new Swiper('.swiper2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  breakpoints: {
    1000: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 20
    }
  }
});
