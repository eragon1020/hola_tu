export const agregarRopa = (ropa, contenedor, gender) => {
    
    const ul = document.createElement("ul");
    ul.className = `guardaropa guardaropa--${gender.charAt(0)}`;

    const categorias = ["cabeza", "pecho", "pecho--externo", "piernas", "pies"];

    categorias.forEach((categoria) => {
        // Crear los <li> para cada categoría
        let li = document.createElement("li");
        li.className = `cajon cajon--${categoria}`;

        ropa.forEach((prenda) => {
            if (prenda.type === categoria && prenda.gender === gender) {
                let radio = document.createElement("input");
                radio.type = "radio";
                radio.id = prenda.id;
                radio.name = prenda.type + gender.charAt(0);

                let label = document.createElement("label");
                label.htmlFor = prenda.id;

                let img = document.createElement("img");
                img.src = prenda.img;
                img.alt = prenda.name;
                
                // Añadir evento click al label para seleccionar la prenda
                label.addEventListener("click", () => {
                    // Remover la clase 'seleccionado' de todos los labels en la misma categoría
                    const labelsEnCategoria = li.querySelectorAll("label");
                    labelsEnCategoria.forEach((lbl) => lbl.classList.remove("seleccionado"));
                    
                    // Añadir la clase 'seleccionado' al label actual
                    label.classList.add("seleccionado");
                });

                label.appendChild(img);
                li.appendChild(label);
                li.appendChild(radio);
                ul.appendChild(li);
            }
        });
    });

    contenedor.appendChild(ul);
    document.body.appendChild(contenedor);
};
