const DOMproductos = document.querySelector("#productos");

function listarProductos(productosImprimir){

    productosImprimir.forEach(item => {

        //Capsula del enlace
        const miNodo = document.createElement('div');
        miNodo.classList.add('capsula');

        //Creamos el enlace
        const miEnlace = document.createElement('a');
        miEnlace.classList.add('enlace-ampliado');
        miEnlace.setAttribute('href', item.enlace);

        //Cuerpo Principal
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');

        //Imagen del Producto
        const miImagen = document.createElement('img');
        miImagen.setAttribute('src', item.imagen);
        miImagen.setAttribute('width', 250);
        miImagen.setAttribute('height', 300);

        //Cuerpo Info Producto
        const divInfoProducto = document.createElement('div');
        divInfoProducto.classList.add('info-producto');

        const divPrecioAntes = document.createElement('div');
        divPrecioAntes.classList.add('precio-antes');
        divPrecioAntes.textContent = '$'+item.precio_antes;

        const divPrecioActual = document.createElement('div');
        divPrecioActual.classList.add('precio-actual');
        divPrecioActual.textContent = '$'+item.precio;

        const divDescripcion = document.createElement('div');
        divDescripcion.classList.add('descripcion-producto');
        divDescripcion.textContent = item.descripcion;

        //Unimos los nodos

        divInfoProducto.appendChild(divPrecioAntes);
        divInfoProducto.appendChild(divPrecioActual);
        divInfoProducto.appendChild(divDescripcion);

        divProducto.appendChild(miImagen);
        divProducto.appendChild(divInfoProducto);

        miEnlace.appendChild(divProducto);

        miNodo.appendChild(miEnlace);

        DOMproductos.appendChild(miNodo)
    });
}

console.log(productos)

listarProductos(productos);