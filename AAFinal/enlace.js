var addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(function(button) {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  console.log('Agregar al carrito');
  var product = event.target.parentNode;
  var productName = product.querySelector('h3').textContent;
  var productPrice = product.querySelector('p').textContent;
  var productImage = product.querySelector('img').src;

  var cartItem = {
    name: productName,
    price: productPrice,
    image: productImage
  };

  var cart = JSON.parse(sessionStorage.getItem('cart')) || [];
  cart.push(cartItem);
  sessionStorage.setItem('cart', JSON.stringify(cart));

  alert('El producto ha sido agregado al carrito.');
}
