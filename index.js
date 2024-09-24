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
  document.getElementById("avataresGuardados").innerHTML = ""
  const modeloF = document.getElementById("modelo--f");
  const modeloM = document.getElementById("modelo--m");

  // Crea nuevos contenedores para los modelos guardados
  const avatarF = modeloF.cloneNode(true);
  const avatarM = modeloM.cloneNode(true);

  // Crea un contenedor para los avatares guardados
  const contenedorAvatares = document.getElementById("avataresGuardados");

  // Estilo para los avatares guardados

  // Añade los avatares al contenedor
  contenedorAvatares.appendChild(avatarF);
  contenedorAvatares.appendChild(avatarM);

  // Añade un mensaje de amor
  const mensajeAmor = document.createElement("p");
  mensajeAmor.textContent = "❤️ Aveces quiero ser cursi para decir : la amo a usted con locura.A veces tengo ganas de ser tonto para gritar : LA QUIERO TANTO !!!❤️";
  mensajeAmor.style.textAlign = "center";
  mensajeAmor.style.fontSize = "30px";
  mensajeAmor.style.color = "red";
  mensajeAmor.classList.add("pepino");

  // Añade el mensaje de amor solo si no existe ya
  if (!contenedorAvatares.querySelector("p")) {
    contenedorAvatares.appendChild(mensajeAmor);
  }
});