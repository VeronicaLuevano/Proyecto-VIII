document.addEventListener('DOMContentLoaded', function () {
  // Seleccionar el carrusel por su ID
  var myCarousel = document.getElementById('carruselImagenes');

  // Verificar si el constructor Carousel está definido
  if (typeof Carousel !== 'undefined') {
    // Crear una instancia de Bootstrap Carousel
    var carousel = new Carousel(myCarousel, {
      interval: 5000,
      pause: 'hover',
      wrap: true
    });
  } else {
    console.error('El constructor Carousel no está definido.');
  }
});


  