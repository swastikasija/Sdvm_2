Shery.mouseFollower();
Shery.textAnimate(".hero-content h1", {
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 0.6,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
Shery.textAnimate(".hero-content p", {
  style: 2,
  y: 10,
  delay: 0.1,
  duration: 0.6,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});
Shery.makeMagnet(".hero-content h1", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  effect: "coverflow",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});