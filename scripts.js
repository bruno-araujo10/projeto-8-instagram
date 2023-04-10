const images = document.querySelectorAll('.img-h1');
let currentImage = 0;

setInterval(() => {
  images[currentImage].classList.remove('active');
  images[currentImage].classList.add('inactive');
  currentImage = (currentImage + 1) % images.length;
  images[currentImage].classList.add('active');
  images[currentImage].classList.remove('inactive');
}, 2000);