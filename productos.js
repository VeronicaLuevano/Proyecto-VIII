document.addEventListener('DOMContentLoaded', function() {
    const productContainer = document.querySelector('.product-list');

    // Cargar datos del archivo JSON
    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            // Generar la presentación de productos
            data.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.imagen}" alt="${product.nombre}">
                    <h2>${product.nombre}</h2>
                    <p>${product.descripcion}</p>
                `;
                productContainer.appendChild(productElement);
            });
        })
        .catch(error => {
            console.error('Error al cargar los datos del archivo JSON:', error);
        });
});













