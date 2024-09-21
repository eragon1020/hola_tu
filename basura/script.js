let carrito = [];

function agregarAlCarrito(producto) {
  carrito.push(producto);
  document.getElementById("carrito-count").innerText = carrito.length;
  actualizarCarrito();
  alert(`${producto} ha sido agregado al carrito.`);
}

function actualizarCarrito() {
  const listaCarrito = document.getElementById("lista-carrito");
  listaCarrito.innerHTML = ""; // Limpiar lista
  carrito.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    listaCarrito.appendChild(li);
  });
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("Tu carrito está vacío.");
    return;
  }
  alert("Gracias por tu compra!");
  carrito = [];
  document.getElementById("carrito-count").innerText = 0;
  actualizarCarrito();
}

document
  .getElementById("formContacto")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    alert(`Gracias ${nombre}, tu mensaje ha sido enviado.`);
    this.reset(); // Reiniciar formulario
  });
