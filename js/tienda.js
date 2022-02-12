const items = document.querySelector("#items");
const tienda = document.querySelector('#carrito');
const total = document.querySelector('#total');
const botonVaciar = document.querySelector('#boton-vaciar');

var carrito = traerCarrito() //Carrito

if (carrito.length>0){ //Si el carrito tiene un item, hace el resto

    imprimirFuncion(carrito) //Actualizamos el listado de objetos
    imprimirTienda(carrito) //Actualizamos los precios

} else { //Sino mostrara un mensaje

    alert("EL CARRITO ESTA VACIO")

}

function imprimirFuncion(carroImprimir) {
    items.textContent = '';

    carroImprimir.forEach((productoActual) =>{
        // Estructura
        const miNodo = document.createElement('div');
        miNodo.classList.add('card', 'col-sm-4');
        // Body
        const miNodoCardBody = document.createElement('div');
        miNodoCardBody.classList.add('card-body');
        // Titulo
        const miNodoTitle = document.createElement('h5');
        miNodoTitle.classList.add('card-title');
        miNodoTitle.textContent = productoActual.titulo;
        // Imagen
        const miNodoImagen = document.createElement('img');
        miNodoImagen.classList.add('img-fluid');
        miNodoImagen.setAttribute('src', productoActual.imagen);
        // Precio
        const miNodoPrecio = document.createElement('p');
        miNodoPrecio.classList.add('card-text');
        miNodoPrecio.textContent = productoActual.cantidad+"x $"+productoActual.precio;
        // Boton Sumar
        const miNodoBotonMas = document.createElement('button');
        miNodoBotonMas.classList.add('btn', 'btn-info', 'btn-sm');
        miNodoBotonMas.textContent = '+';
        miNodoBotonMas.setAttribute('marcador', productoActual.id);
        miNodoBotonMas.addEventListener('click', aumentarCantidad);
        // Boton Restar
        const miNodoBotonMenos = document.createElement('button');
        miNodoBotonMenos.classList.add('btn', 'btn-primary', 'btn-sm');
        miNodoBotonMenos.textContent = ' - ';
        miNodoBotonMenos.setAttribute('marcador', productoActual.id);
        if (!((productoActual.cantidad-1)==0)){ //Esto evita dejar la cantidad en 0
            miNodoBotonMenos.addEventListener('click', restarCantidad);
        }
        // Insertamos
        miNodoCardBody.appendChild(miNodoImagen);
        miNodoCardBody.appendChild(miNodoTitle);
        miNodoCardBody.appendChild(miNodoPrecio);
        miNodoCardBody.appendChild(miNodoBotonMas);
        miNodoCardBody.appendChild(miNodoBotonMenos);
        miNodo.appendChild(miNodoCardBody);
        items.appendChild(miNodo);
    })

}

function imprimirTienda(carroImprimir){
    tienda.textContent = '';
    precioTotal = 0;

    carroImprimir.forEach(item =>{
        precioUnidad = (item.cantidad * item.precio)
        precioTotal = precioTotal + precioUnidad

        // Creamos el nodo del item del carrito
        const miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
        miNodo.textContent = 'PRODUCTO: '+item.titulo+' ('+item.cantidad+') - $'+precioUnidad;
        // Boton de borrar
        const miBoton = document.createElement('button');
        miBoton.classList.add('btn', 'btn-danger', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.dataset.item = item;
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        tienda.appendChild(miNodo);
    })

    total.textContent = precioTotal;
}

function borrarItemCarrito(){

}

function aumentarCantidad(evento){

    idSumar = (evento.target.getAttribute('marcador'))

    carrito.forEach(itemActual=>{
        if (itemActual.id==idSumar){ //Buscamos el objeto del carrito
            itemActual.cantidad++ //Aumentamos su cantidad
        }
    })

    sessionStorage.setItem('carro', JSON.stringify(carrito)); //Seteamos el carrito

    imprimirFuncion(carrito) //Actualizamos el listado de objetos
    imprimirTienda(carrito) //Actualizamos los precios

}

function restarCantidad(evento){
    idRestar = (evento.target.getAttribute('marcador'))

    carrito.forEach(itemActual=>{
        if (itemActual.id==idRestar){ //Buscamos el objeto del carrito
            itemActual.cantidad-- //Restamos su cantidad
        }
    })

    sessionStorage.setItem('carro', JSON.stringify(carrito)); //Seteamos el carrito

    imprimirFuncion(carrito) //Actualizamos el listado de objetos
    imprimirTienda(carrito) //Actualizamos los precios
}

function vaciarCarrito(){
    // Limpiamos los productos guardados
    carrito = [];

    sessionStorage.setItem('carro', JSON.stringify(carrito)); //Seteamos el carrito
}

