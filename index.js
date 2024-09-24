import { ropa } from "./info/ropa.js";
import { agregarRopa } from "./src/agregarRopa.js";
import { agregarCuerpo } from "./src/agregarCuerpo.js";
import { body } from "./info/body.js";
import { aplicarRopaAlCuerpo } from "./src/aplicarRopa.js";

agregarCuerpo(body.female, document.getElementById("modelo--f"));
agregarCuerpo(body.male, document.getElementById("modelo--m"));

agregarRopa(
  ropa,
  document.getElementById("guardarropa--f"),
  body.female,
  aplicarRopaAlCuerpo
);
agregarRopa(
  ropa,
  document.getElementById("guardarropa--m"),
  body.male,
  aplicarRopaAlCuerpo
);
