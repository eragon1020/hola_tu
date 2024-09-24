// Función para crear el elemento <input> (radio)
const crearRadio = (prenda, body) => {
  let radio = document.createElement("input");
  radio.type = "radio";
  radio.id = prenda.id;
  radio.name = prenda.type + body.gender.charAt(0);

  // Agregar evento para aplicar o quitar la prenda al cuerpo cuando se selecciona el radio button
  radio.addEventListener("change", () => {
    aplicarRopaAlCuerpo(body, prenda); // Aplica o quita la prenda al cuerpo
  });

  return radio;
};

// Función para crear el <img> de la prenda
const crearImagenPrenda = (prenda) => {
  let img = document.createElement("img");
  img.src = prenda.img;
  img.alt = prenda.name;
  return img;
};

// Función para crear el <label> y agregar evento de click
const crearLabelPrenda = (prenda, li) => {
  let label = document.createElement("label");
  label.htmlFor = prenda.id;

  // Agregar la imagen al label
  let img = crearImagenPrenda(prenda);
  label.appendChild(img);

  // Agregar evento para seleccionar la prenda (visualmente)
  label.addEventListener("click", () => {
    const labelsEnCategoria = li.querySelectorAll("label");
    labelsEnCategoria.forEach((lbl) => lbl.classList.remove("seleccionado"));
    label.classList.add("seleccionado");
  });

  return label;
};

// Función para crear el <li> para cada categoría
const crearLiCategoria = (categoria) => {
  let li = document.createElement("li");
  li.className = `cajon cajon--${categoria}`;
  return li;
};

// Función principal para agregar la ropa
export const agregarRopa = (ropa, contenedor, body) => {
  const ul = document.createElement("ul");
  ul.className = `guardaropa guardaropa--${body.gender.charAt(0)}`;

  const categorias = ["cabeza", "pecho", "pecho--externo", "piernas", "pies"];

  categorias.forEach((categoria) => {
    let li = crearLiCategoria(categoria);

    ropa.forEach((prenda) => {
      if (prenda.type === categoria && prenda.gender === body.gender) {
        let radio = crearRadio(prenda, body);
        let label = crearLabelPrenda(prenda, li);

        li.appendChild(label);
        li.appendChild(radio);
        ul.appendChild(li);
      }
    });
  });

  contenedor.appendChild(ul);
};

// Función para aplicar o quitar ropa al cuerpo
export const aplicarRopaAlCuerpo = (body, prenda) => {
  // Obtenemos el contenedor del modelo (div que representa el cuerpo)
  const selector = `#modelo--${body.gender.charAt(0)}`;
  const modelo = document.querySelector(selector);

  // Identificamos la parte del cuerpo en la que debe ir la prenda
  const parteDelCuerpo = modelo.querySelector(`.parte--${prenda.type}`);

  // Verificar si ya tiene la prenda aplicada
  const prendaActual = parteDelCuerpo.querySelector(".prenda img");

  if (prendaActual && prendaActual.src.includes(prenda.img)) {
    // Si la prenda ya está aplicada, se quita
    parteDelCuerpo.innerHTML = "";
  } else {
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

    // Aplicar estilos CSS
    generarEstilosCSS(parteDelCuerpo, prenda);
  }
};

// Función para generar estilos CSS de la prenda
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
