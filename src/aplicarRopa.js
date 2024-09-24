export const aplicarRopaAlCuerpo = (body, prenda) => {
  // Obtenemos el contenedor del modelo (div que representa el cuerpo)
  const selector = `#modelo--${body.gender.charAt(0)}`
  const modelo = document.querySelector(selector);

  // Identificamos la parte del cuerpo en la que debe ir la prenda
  const parteDelCuerpo = modelo.querySelector(
    `.parte--${prenda.type}`
  );

  if (parteDelCuerpo) {
    // Limpiar cualquier prenda previa en la parte del cuerpo
    parteDelCuerpo.innerHTML = "";

    // Crear un nuevo div para contener la prenda
    const divPrenda = document.createElement("div");
    divPrenda.classList.add("prenda");

    // Crear la imagen de la prenda
    const imgPrenda = document.createElement("img");
    imgPrenda.src = prenda.img;
    imgPrenda.alt = prenda.name;

    // Agregar la imagen al div de la prenda
    divPrenda.appendChild(imgPrenda);
    // Insertar el div de la prenda dentro de la parte del cuerpo
    parteDelCuerpo.appendChild(divPrenda);
    const prendaElement = document.querySelector(`${selector} .parte--${prenda.type}`)

    generarEstilosCSS(prendaElement, prenda);
  }
};

const generarEstilosCSS = (elemento, prenda) => {
  // Asegurarse de agregar unidades ('px' en este caso) si no están presentes
  const addUnit = (value) => (typeof value === 'number' ? `${value}px` : value);

  // Aplicar estilos de posición, tamaño y ajuste de la prenda
  elemento.style.position = 'absolute';
  elemento.style.left = addUnit(prenda.position[0]);
  elemento.style.top = addUnit(prenda.position[1]);
  elemento.style.width = addUnit(prenda.size[0]);
  elemento.style.height = addUnit(prenda.size[1]);
};