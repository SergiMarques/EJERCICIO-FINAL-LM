// Variables para almacenar los productos y el carrito
var productos = [];
var carrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
  carrito.push(producto);
  console.log("Producto agregado al carrito:", producto);
}

// Función para mostrar los productos en el carrito
function mostrarCarrito() {
  console.log("Productos en el carrito:");
  carrito.forEach(function(producto) {
    console.log("- ", producto);
  });
}

// Ejemplo de uso
productos.push("Producto 1");
productos.push("Producto 2");
productos.push("Producto 3");

agregarAlCarrito(productos[0]);
agregarAlCarrito(productos[2]);

mostrarCarrito();
