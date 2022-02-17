productos=[
        {
            "id": 1,
            "title": "Almohada",
            "precio": 15000,
            "imagen": "images/PRODUCTO-ALMOHADA.png",
            "precio_antes": "20.450",
            "descripcion": "Dakimakura de BRAIAN CENTURION",
            "enlace": "producto-almohada.html"
        },
        {
            "id": 2,
            "title": "Taza",
            "precio": 3000,
            "imagen": "images/PRODUCTO-TAZA.png",
            "precio_antes": 5.999,
            "descripcion": "Taza con logo BC",
            "enlace": "producto-taza.html"
        },
        {
            "id": 3,
            "title": "Camiseta",
            "precio": 5000,
            "imagen": "images/PRODUCTO-CAMISETA.png",
            "precio_antes": 6.999,
            "descripcion": "Camiseta con logo BC",
            "enlace": "producto-camiseta.html"
        },
        {
            "id": 4,
            "title": "Gorra",
            "precio": 2000,
            "imagen": "images/PRODUCTO-GORRA.png",
            "precio_antes": 3.999,
            "descripcion": "Gorra con logo BC",
            "enlace": "producto-gorra.html"
        },
        {
            "id": 5,
            "title": "Cartuchera",
            "precio": 3000,
            "imagen": "images/PRODUCTO-CARTUCHERA.png",
            "precio_antes": 4.999,
            "descripcion": "Cartuchera con logo BC",
            "enlace": "producto-cartuchera.html"
        },
        {
            "id": 6,
            "title": "Funda Iphone",
            "precio": 8000,
            "imagen": "images/PRODUCTO-FUNDA.png",
            "precio_antes": 10.999,
            "descripcion": "Funda para Iphone con logo BC",
            "enlace": "producto-funda.html"
        }
];

setInterval('mostrarCarrito()', 500) //Cada 0,5 segundos revisa el carrito y actualiza el contador

//Agrega el producto al carrito y lo lleva directamente a carrito.html
function comprarProducto(idProducto, clase){
    encontrarYAgregarProducto(idProducto, productos)

    if (clase=="Comprar"){
        window.location.assign("carrito.html"); //Te redirecciona a carrito. html
    }
    
}

//Recorre el carrito y busca el producto por Id, si lo encuentra, añade su id y deja la cantidad en 1
function encontrarYAgregarProducto(idProdu, arregloProductos){
    var encontrado = false;

    var carrito = traerCarrito()

    for (var producto in carrito){
        if (carrito[producto].id == idProdu){ //Busca si el producto ya esta añadido
            encontrado = true;
        }
    }

    if (!encontrado){ //Si no esta en el carrito lo agrega
        arregloProductos.forEach(item => {
            if (item.id == idProdu){
                carrito.push({
                    id : idProdu,
                    titulo : item.title,
                    precio : item.precio,
                    imagen : item.imagen,
                    cantidad : 1
                })
            }
        });
    }

    sessionStorage.setItem('carro', JSON.stringify(carrito)); //Seteamos el carrito

}

//Muestra la cantidad de objetos que hay en el carrito al lado del link "Carrito"
function mostrarCarrito(){

    var carrito = traerCarrito()
    
    if (carrito.length>0){ //Si el carrito no esta vacio
        document.getElementById('carritoCantidad').innerHTML = carrito.length;
    } else { //Si esta vacio borra el contenido
        document.getElementById('carritoCantidad').textContent = '';
    }
    
}

//Devuelve el carrito
function traerCarrito() {
    var carrito = sessionStorage.getItem('carro');
    carrito = JSON.parse(carrito);

    return carrito
}
