import { crearElemento } from "./agregarRopa.js";
export const guardarAvatarComoPNG = (body) => {
    const selector = `#modelo--${body.gender.charAt(0)}`;
    const modelo = document.querySelector(selector);

    // Crear un canvas
    const canvas = document.createElement("canvas");
    const contexto = canvas.getContext("2d");

    // Configura el tamaño del canvas según el tamaño del modelo
    canvas.width = modelo.offsetWidth;
    canvas.height = modelo.offsetHeight;

    // Dibuja el contenido del modelo en el canvas
    contexto.drawImage(modelo, 0, 0);

    // Convertir el canvas a un Data URL PNG
    canvas.toBlob((blob) => {
        // Crea un enlace para descargar el archivo
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "avatar.png"; // Nombre del archivo que se descargará
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url); // Libera la URL
    }, "image/png");
};
// const botonGuardarAvatar = crearElemento("button", {
//     innerText: "Guardar Avatar",
//     onClick: () => guardarAvatarComoPNG(body) // Llama a la función al hacer clic
// });
