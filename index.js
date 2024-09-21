import { ropa } from "./info/ropa.js";
import { agregarRopa } from "./src/agregarRopa.js";
import { agregarCuerpo } from "./src/agregarCuerpo.js";
import { body } from "./info/body.js";
 import { aplicarRopaAlCuerpo } from "./src/aplicarRopa.js";

agregarCuerpo(body.female, document.getElementById("modelo--f"));
agregarCuerpo(body.male, document.getElementById("modelo--m"));

agregarRopa(
  ropa,
  document.getElementById("guradaropa--f"),
  "femenino",
  aplicarRopaAlCuerpo
);
agregarRopa(
  ropa,
  document.getElementById("guradaropa--m"),
  "masculino",
  aplicarRopaAlCuerpo
);
