const items = document.querySelector("#items");
const tienda = document.querySelector('#carrito');
const total = document.querySelector('#total');

//Muestra todos los producto agregados al carrito
function imprimirTienda(carroImprimir){
    tienda.textContent = '';

    if (carrito.length>0){ //Si el carrito no esta vacio lo imprime

        precioTotal = 0;

        carroImprimir.forEach(item =>{
            precioUnidad = (item.cantidad * item.precio)
            precioTotal = precioTotal + precioUnidad

            const miNodo = document.createElement('ul');
            miNodo.classList.add('ul-tienda');

            const liImagen = document.createElement('li');
            const liTexto = document.createElement('li');
            const liMasMenos = document.createElement('li');
            const liBoton = document.createElement('li');
            // Texto del Producto
            const miNodoTexto = document.createElement('p');
            miNodoTexto.classList.add('mx-3');
            miNodoTexto.textContent = item.titulo+'  BRAIAN CENTURION ('+item.cantidad+') - $'+precioUnidad;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'boton-tienda');
            miBoton.textContent = 'X';
            miBoton.dataset.item = item;
            miBoton.setAttribute('marcador', item.id);
            miBoton.addEventListener('click', borrarItemCarrito);
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('mx-3', 'imagen-tienda');
            miNodoImagen.setAttribute('src', item.imagen);
            // Boton Sumar
            const miNodoBotonMas = document.createElement('button');
            miNodoBotonMas.classList.add('btn', 'btn-primary', 'mx-2', 'boton-mas-menos');
            miNodoBotonMas.textContent = '+';
            miNodoBotonMas.setAttribute('marcador', item.id);
            miNodoBotonMas.addEventListener('click', aumentarCantidad);
            // Boton Restar
            const miNodoBotonMenos = document.createElement('button');
            miNodoBotonMenos.classList.add('btn', 'btn-danger', 'mx-1', 'boton-mas-menos');
            miNodoBotonMenos.textContent = ' - ';
            miNodoBotonMenos.setAttribute('marcador', item.id);
            if (!((item.cantidad-1)==0)){ //Esto evita dejar la cantidad en 0
                miNodoBotonMenos.addEventListener('click', restarCantidad);
            }
            // Mezclamos nodos

            liImagen.appendChild(miNodoImagen);
            liTexto.appendChild(miNodoTexto);
            liMasMenos.appendChild(miNodoBotonMas);
            liMasMenos.appendChild(miNodoBotonMenos);
            liBoton.appendChild(miBoton);

            miNodo.appendChild(liImagen);
            miNodo.appendChild(liTexto);
            miNodo.appendChild(liMasMenos)
            miNodo.appendChild(liBoton);

            tienda.appendChild(miNodo);
        })

        total.textContent = '$'+precioTotal;

    } else { //Si esta vacio, alerta

        //Creamos el cartel
        const miNodoCarritoVacioCartel = document.createElement('h3');
        miNodoCarritoVacioCartel.textContent = 'Ups! Parece que tu carrito está vacio';

        //Lo imprimimos
        tienda.appendChild(miNodoCarritoVacioCartel)

        total.textContent = '$-';
    }
}

//Elimina ese producto especifico del carrito
function borrarItemCarrito(evento){

    idEliminar = (evento.target.getAttribute('marcador'))

    carrito = carrito.filter((item) => item.id !== idEliminar);

    sessionStorage.setItem('carro', JSON.stringify(carrito)); //Seteamos el carrito

    imprimirTienda(carrito) //Actualizamos los precios

    mostrarCarrito()

}

//Aumenta la cantidad de ese producto en el carrito
function aumentarCantidad(evento){

    idSumar = (evento.target.getAttribute('marcador'))

    carrito.forEach(itemActual=>{
        if (itemActual.id==idSumar){ //Buscamos el objeto del carrito
            itemActual.cantidad++ //Aumentamos su cantidad
        }
    })

    sessionStorage.setItem('carro', JSON.stringify(carrito)); //Seteamos el carrito

    imprimirTienda(carrito) //Actualizamos los precios

}

//Resta la cantidad de ese producto en el carrito
function restarCantidad(evento){
    idRestar = (evento.target.getAttribute('marcador'))

    carrito.forEach(itemActual=>{
        if (itemActual.id==idRestar){ //Buscamos el objeto del carrito
            itemActual.cantidad-- //Restamos su cantidad
        }
    })

    sessionStorage.setItem('carro', JSON.stringify(carrito)); //Seteamos el carrito

    imprimirTienda(carrito) //Actualizamos los precios
}

//Elimina todos los productos del carrito
function vaciarCarrito(){
    // Limpiamos los productos guardados
    carrito = [];

    mostrarCarrito()
    
    sessionStorage.setItem('carro', JSON.stringify(carrito)); //Seteamos el carrito

    imprimirTienda(carrito) //Actualizamos los precios
}

var carrito = traerCarrito() //Carrito

imprimirTienda(carrito) //Imprime los precios
