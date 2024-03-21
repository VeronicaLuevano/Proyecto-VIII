document.addEventListener("DOMContentLoaded", function() {
  var menuButton = document.getElementById('menu-button');
  var menu = document.getElementById('menu');

  var menuOptions = [
    { text: 'Inicio', href: 'index.html' },
    { text: 'Quiénes Somos', href: 'Quienes somos.html' },
    { text: 'Nuestros productos', href: 'Catalogo.html' },
    { text: 'Contacto', href: 'Contacto.html' }
  ];
  // Iteramos sobre las opciones del menú y las agregamos al menú
  menuOptions.forEach(function(option) {
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.textContent = option.text;
      a.href = option.href;
      li.appendChild(a);
      menu.appendChild(li);
  });

  menuButton.addEventListener('click', function() {
      // Alterna la clase "show" para mostrar u ocultar el menú
      menu.classList.toggle('show');
  });

  // Agregamos un event listener para cerrar el menú si se hace clic fuera de él
  document.addEventListener('click', function(event) {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
          menu.classList.remove('show');
      }
  });
});
