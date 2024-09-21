export const aplicarRopaAlCuerpo = (gender, prenda) => {
  // Obtenemos el contenedor del modelo (div que representa el cuerpo)
  const modelo = document.querySelector(`#modelo--${gender.charAt(0)}`);

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
  }
};

const generarEstilosCSS = (prenda) => {
    return  `
      .parte--${prenda.type} {
        position: absolute;
        top: ${prenda.top};
        left: ${prenda.left};
        width: ${prenda.width};
        height: ${prenda.height};
      }
    `;
}

// Uso de la función
// const estilosGenerados = generarEstilosCSS(prendas);
// console.log(estilosGenerados);

