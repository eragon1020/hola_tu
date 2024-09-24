import { ropa } from "./info/ropa.js";
import { agregarRopa } from "./src/agregarRopa.js";
import { agregarCuerpo } from "./src/agregarCuerpo.js";
import { body } from "./info/body.js";

agregarCuerpo(body.female, document.getElementById("modelo--f"));
agregarCuerpo(body.male, document.getElementById("modelo--m"));

agregarRopa(
  ropa,
  document.getElementById("guardarropa--f"),
  body.female,
);
agregarRopa(
  ropa,
  document.getElementById("guardarropa--m"),
  body.male,
);

document.getElementById("guardarAvatar").addEventListener("click", function () {
  // Selecciona los dos modelos (masculino y femenino)
  document.getElementById("avataresGuardados").innerHTML = "";
  const modeloF = document.getElementById("modelo--f");
  const modeloM = document.getElementById("modelo--m");

  // Crea nuevos contenedores para los modelos guardados
  const avatarF = modeloF.cloneNode(true);
  const avatarM = modeloM.cloneNode(true);

  // Crea un contenedor para los avatares guardados
  const contenedorAvatares = document.getElementById("avataresGuardados");

  // Añade los avatares al contenedor
  contenedorAvatares.appendChild(avatarF);
  contenedorAvatares.appendChild(avatarM);

  // Añade un mensaje de amor
  const mensajeAmor = document.createElement("p");
  mensajeAmor.textContent = "❤️ Aveces quiero ser cursi para decir : la amo a usted con locura. A veces tengo ganas de ser tonto para gritar : LA QUIERO TANTO !!! ❤️";
  mensajeAmor.style.textAlign = "center";
  mensajeAmor.style.fontSize = "30px";
  mensajeAmor.style.color = "red";
  mensajeAmor.classList.add("pepino");

  // Añade el mensaje de amor solo si no existe ya
  if (!contenedorAvatares.querySelector("p")) {
    contenedorAvatares.appendChild(mensajeAmor);

    // Crea un contenedor para las imágenes
    const contenedorImagenes = document.createElement("div");
    contenedorImagenes.style.textAlign = "center"; // Centrar contenido
    contenedorImagenes.style.margin = "20px 0"; // Espaciado superior e inferior

    // Crea y añade la primera imagen
    const imagen1 = document.createElement("img");
    imagen1.src = "./img/Avatar.jpeg"; // Cambia esta ruta a la ubicación de tu imagen
    imagen1.alt = "Imagen de amor"; // Texto alternativo para la imagen
    imagen1.classList.add("ellaF");
    imagen1.style.display = "inline-block"; // Mostrar en línea
    imagen1.style.margin = "0 10px"; // Margen entre las imágenes
    imagen1.style.width = "200px"; // Cambia el tamaño según tus necesidades

    // Añade la primera imagen al contenedor
    contenedorImagenes.appendChild(imagen1);

    // Crea y añade la segunda imagen
    const imagen2 = document.createElement("img");
    imagen2.src = "./img/beso.jpeg"; // Cambia esta ruta a la ubicación de tu segunda imagen
    imagen2.alt = "Imagen de beso"; // Texto alternativo para la segunda imagen
    imagen2.classList.add("elM");
    imagen2.style.display = "inline-block"; // Mostrar en línea
    imagen2.style.margin = "0 10px"; // Margen entre las imágenes
    imagen2.style.width = "200px"; // Cambia el tamaño según tus necesidades

    // Añade la segunda imagen al contenedor
    contenedorImagenes.appendChild(imagen2);

    // Añade el contenedor de imágenes al contenedor principal
    contenedorAvatares.appendChild(contenedorImagenes);
  }
});
