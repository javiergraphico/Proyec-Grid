ScrollReveal().reveal('.grid', {
  delay: 200,
  origin: 'top',
  distance: '1500px',
  duration: 2000,
  opacity: 0.4,
  easing: 'cubic-bezier(0.4, 0.2, 0.1, 2)',

});


const swith = document.querySelector('.container_toogle');

swith.addEventListener('click', () => {
  swith.classList.toggle('active');
  document.body.classList.toggle('active');
})