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
  direction: 'horizontal',
  loop: true,
  effect: "coverflow",
  pagination: {
    el: '.swiper-pagination',
  },
  autoplay: {
    delay: 3000, // Delay between transitions in milliseconds (ms)
    disableOnInteraction: false, // Set to false if you want autoplay to continue even when user interacts with swiper
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
Shery.imageMasker(".mask-target", {
  mouseFollower: true,
  text: "SDVM-CITY",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

Shery.makeMagnet(".magnet", {
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
});

Shery.hoverWithMediaCircle(".media" /* Element to target.*/, {
  // images: ["image1.jpg", "image2.jpg", "image3.jpg"] /*OR*/,
  videos: ["sdvm1.mp4"],
});

Shery.imageMasker(".right-section img", {
  mouseFollower: true,
  text: "Shivani-Kandola",
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});