const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});
// $("#slider1").responsiveSlides({
//   pager: true,
//   speed: 500,
//   namespace: "transparent-btns",
// });

var swiper = new Swiper(".image-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2,
    slideShadows: true,
  },
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnIntraction: false,
  },
});

// let button = document.getElementById("download_button");
// button.addEventListener("click", () => {
//   alert("hello");
// });
