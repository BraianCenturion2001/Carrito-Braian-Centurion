const formulario = document.querySelector("#formulario");
const tabla = document.querySelector("#tabla_buscar");

function filtrar(){

    tabla.textContent = '';

    var vigilante = 0;

    const texto = formulario.value.toLowerCase();

    productos.forEach(productoActual => {

        let nombre = productoActual.title.toLowerCase();


        if (nombre.indexOf(texto) !== -1){
            
            const nodoTr = document.createElement("tr");

            const nodoTd = document.createElement("td");

            const nodoEnlace = document.createElement("a");
            nodoEnlace.setAttribute('href', productoActual.enlace);
            nodoEnlace.textContent = productoActual.title;

            nodoTd.appendChild(nodoEnlace);
            nodoTr.appendChild(nodoTd);
            tabla.appendChild(nodoTr);

            vigilante ++;
        }

    });

    if (vigilante==0){
        const nodoTr = document.createElement("tr");

            const nodoTd = document.createElement("td");

            const nodoVacio = document.createElement("p");
            nodoVacio.textContent = "Producto no encontrado..."

            nodoTd.appendChild(nodoVacio);
            nodoTr.appendChild(nodoTd);
            tabla.appendChild(nodoTr);
    }

}

function limpiar(){
    if (formulario.value == ""){
        tabla.textContent = '';
    }
}

setInterval('limpiar()', 100); //Limpia la busqueda en caso de que este vacia cada 0,1 segundos xd
formulario.addEventListener('keyup', filtrar);
