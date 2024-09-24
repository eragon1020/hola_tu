// Función para crear el elemento <input> (radio) 
const crearRadio = (prenda, body, aplicarRopaAlCuerpo) => {
  let radio = document.createElement("input");
  radio.type = "radio";
  radio.id = prenda.id;
  radio.name = prenda.type + body.gender.charAt(0);

  // Agregar evento para aplicar la prenda al cuerpo cuando se selecciona el radio button
  radio.addEventListener("change", () => {
    aplicarRopaAlCuerpo(body, prenda); // Aplica la ropa al cuerpo
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
export const agregarRopa = (ropa, contenedor, body, aplicarRopaAlCuerpo) => {
  const ul = document.createElement("ul");
  ul.className = `guardaropa guardaropa--${body.gender.charAt(0)}`;

  const categorias = ["cabeza", "pecho", "pecho--externo", "piernas", "pies"];

  categorias.forEach((categoria) => {
    let li = crearLiCategoria(categoria);

    ropa.forEach((prenda) => {
      if (prenda.type === categoria && prenda.gender === body.gender) {
        let radio = crearRadio(prenda, body, aplicarRopaAlCuerpo);
        let label = crearLabelPrenda(prenda, li);

        li.appendChild(label);
        li.appendChild(radio);
        ul.appendChild(li);
      }
    });
  });

  contenedor.appendChild(ul);
};
