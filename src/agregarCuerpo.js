export const agregarCuerpo = (body, contenedor) => {
  // Crear el contenedor del cuerpo
  const modeloBody = document.createElement("div");
  modeloBody.className = "modelo_body modelo_body--" + body.gender;
  let img = document.createElement("img");
  img.src = body.img;
  // Definir las partes del cuerpo
  const partesDelCuerpo = [
    "cabeza",
    "pecho",
    "pecho--externo",
    "piernas",
    "pies",
  ];

  // Crear cada parte del cuerpo como un div con su clase correspondiente
  partesDelCuerpo.forEach((parte) => {
    let divParte = document.createElement("div");
    divParte.className = `parte parte--${parte} `;
    modeloBody.appendChild(divParte);
  });

  // Agregar el modelo del cuerpo al documento
  modeloBody.appendChild(img)
  contenedor.appendChild(modeloBody);
}
