// Obtener los botones de "Agregar al carrito"
var addToCartButtons = document.querySelectorAll('.add-to-cart');

// Agregar un listener de click a cada botón
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCart);
});

// Función para agregar un producto al carrito
function addToCart(event) {
  console.log('Agregar al carrito');
  var product = event.target.parentNode;
  var productName = product.querySelector('h3').textContent;
  var productPrice = product.querySelector('p').textContent;
  var productImage = product.querySelector('img').src; // Obtener la URL de la imagen

  // Crear un objeto con la información del producto
  var cartItem = {
    name: productName,
    price: productPrice,
    image: productImage // Agregar la URL de la imagen al objeto
  };

  // Obtener el carrito de la sesión actual o crear uno nuevo si no existe
  var cart = JSON.parse(sessionStorage.getItem('cart')) || [];

  // Agregar el producto al carrito
  cart.push(cartItem);

  // Guardar el carrito actualizado en la sesión
  sessionStorage.setItem('cart', JSON.stringify(cart));

  // Mostrar un mensaje de éxito
  alert('El producto ha sido agregado al carrito.');
}
