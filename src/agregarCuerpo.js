export const agregarCuerpo = (gender,contenedor) => {
    const cuerpo = document.createElement('div');
    cuerpo.classList.add('cuerpo');
    cuerpo.innerHTML = gender ==='male'? 'Hola, soy un hombre' : 'Hola, soy una mujer';
    contenedor.appendChild(cuerpo);
}