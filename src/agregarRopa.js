import { guardarAvatarComoPNG } from "./guardarAvatar.js";

export const crearElemento = (tipo, atributos = {}, contenido = null) => {
  const elemento = document.createElement(tipo);
  Object.entries(atributos).forEach(([key, value]) => {
    if (key.startsWith('on')) {
      elemento.addEventListener(key.slice(2).toLowerCase(), value);
    } else {
      elemento[key] = value;
    }
  });
  if (contenido) elemento.appendChild(contenido);
  return elemento;
};

const crearRadio = (prenda, body) =>
  crearElemento("input", { type: "radio", id: prenda.id, name: `${prenda.type}${body.gender.charAt(0)}` });

const crearImagenPrenda = (prenda) =>
  crearElemento("img", { src: prenda.img, alt: prenda.name });

const crearLabelPrenda = (prenda, body, li) => {
  const label = crearElemento("label", { htmlFor: prenda.id });
  label.appendChild(crearImagenPrenda(prenda));

  label.addEventListener("click", () => {
    const parteDelCuerpo = document.querySelector(`#modelo--${body.gender.charAt(0)} .parte--${prenda.type}`);
    const prendaActual = parteDelCuerpo.querySelector(".prenda img");

    if (prendaActual?.src.includes(prenda.img)) {
      parteDelCuerpo.innerHTML = ""; // Desseleccionar prenda
      label.classList.remove("seleccionado");
    } else {
      li.querySelectorAll("label").forEach(lbl => lbl.classList.remove("seleccionado"));
      label.classList.add("seleccionado"); // Seleccionar nueva prenda
      aplicarRopaAlCuerpo(body, prenda); // Aplicar nueva prenda
    }
  });

  return label;
};

const crearLiCategoria = (categoria) =>
  crearElemento("li", { className: `cajon cajon--${categoria}` });

export const agregarRopa = (ropa, contenedor, body) => {
  const ul = crearElemento("ul", { className: `guardaropa guardaropa--${body.gender.charAt(0)}` });
  const categorias = ["cabeza", "pecho", "pecho--externo", "piernas", "pies"];

  categorias.forEach(categoria => {
    const li = crearLiCategoria(categoria);
    ropa.filter(prenda => prenda.type === categoria && prenda.gender === body.gender)
      .forEach(prenda => {
        li.appendChild(crearLabelPrenda(prenda, body, li));
        li.appendChild(crearRadio(prenda, body));
      });
    ul.appendChild(li);
  });

  contenedor.appendChild(ul);
};

export const aplicarRopaAlCuerpo = (body, prenda) => {
  const parteDelCuerpo = document.querySelector(`#modelo--${body.gender.charAt(0)} .parte--${prenda.type}`);
  const prendaActual = parteDelCuerpo.querySelector(".prenda img");

  parteDelCuerpo.innerHTML = ""; // Limpiar antes de agregar una nueva prenda

  if (!prendaActual || !prendaActual.src.includes(prenda.img)) {
    const divPrenda = crearElemento("div", { classList: ["prenda"] });
    divPrenda.appendChild(crearImagenPrenda(prenda));
    parteDelCuerpo.appendChild(divPrenda);
    generarEstilosCSS(parteDelCuerpo, prenda);
  }
};

const generarEstilosCSS = (elemento, prenda) => {
  elemento.style.position = 'absolute';
  elemento.style.left = `${prenda.position[0]}px`;
  elemento.style.top = `${prenda.position[1]}px`;
  elemento.style.width = `${prenda.size[0]}px`;
  elemento.style.height = `${prenda.size[1]}px`;
};

export const quitarRopa = (body) => {
  const partesDelCuerpo = document.querySelectorAll(`#modelo--${body.gender.charAt(0)} .parte`);
  partesDelCuerpo.forEach(parte => parte.innerHTML = ""); // Elimina todo el contenido de cada parte
};
