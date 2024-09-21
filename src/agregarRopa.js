export const agregarRopa = (ropa, contenedor ,gender) => {
    
    const ul = document.createElement("ul");

    ul.className = `guardaropa guardaropa--${ropa[0].gender.charAt(0)}`;

    const categorias = ["cabeza", "pecho","pecho--externo", "piernas", "pies"];


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
                label.htmlFor = prenda.id
                let img = document.createElement("img");
                img.src = prenda.img;
                img.alt = prenda.name;
    
                label.appendChild(img);
                li.appendChild(label);
                li.appendChild(radio);
                
    
                ul.appendChild(li);
            }
            
        });
        // Si la prenda pertenece a la categoría, agregar el radio y la imagen

    });

    contenedor.appendChild(ul);
    document.body.appendChild(contenedor);  
}
