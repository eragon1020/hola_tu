import { crearElemento } from './agregarRopa.js'; // Asegúrate de importar crearElemento correctamente

export const agregarCuerpo = (body, contenedor) => {
  // Crear el contenedor del cuerpo
  const modeloBody = crearElemento("div", {
    className: `modelo_body modelo_body--${body.gender}`
  });

  // Agregar la imagen del cuerpo
  const img = crearElemento("img", {
    src: body.img
  });
  modeloBody.appendChild(img);

  // Definir las partes del cuerpo
  const partesDelCuerpo = [
    "cabeza",
    "pecho",
    "pecho--externo",
    "piernas",
    "pies",
  ];

  // Crear cada parte del cuerpo usando la función crearElemento
  partesDelCuerpo.forEach(parte => {
    const divParte = crearElemento("div", {
      className: `parte parte--${parte}`
    });
    modeloBody.appendChild(divParte);
  });

  // Agregar el modelo del cuerpo al documento
  contenedor.appendChild(modeloBody);
};
