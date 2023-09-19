ScrollReveal().reveal('.grid', {
  delay: 200,
  origin: 'top',
  distance: '1500px',
  duration: 2000,
  opacity: 0.4,
  easing: 'cubic-bezier(0.4, 0.2, 0.1, 2)',

});
//fin de animacion

// evento modo oscuro
const swith = document.querySelector('.container_toogle');

swith.addEventListener('click', () => {
  swith.classList.toggle('active');
  document.body.classList.toggle('active');
})



 // Swiper slider
 const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  direction: "horizontal",
  loop: false,
  
  // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});