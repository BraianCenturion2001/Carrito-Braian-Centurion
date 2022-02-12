productos=[
        {
            "id": 1,
            "title": "Almohada Dakimakura BRAIAN CENTURION",
            "precio": 15000,
            "imagen": "images/PRODUCTO-ALMOHADA.png"
        },
        {
            "id": 2,
            "title": "Taza BRAIAN CENTURION",
            "precio": 3000,
            "imagen": "images/PRODUCTO-TAZA.png"
        },
        {
            "id": 3,
            "title": "Camiseta BRAIAN CENTURION",
            "precio": 5000,
            "imagen": "images/PRODUCTO-CAMISETA.png"
        },
        {
            "id": 4,
            "title": "Gorra BRAIAN CENTURION",
            "precio": 2000,
            "imagen": "images/PRODUCTO-GORRA.png"
        },
        {
            "id": 5,
            "title": "Cartuchera BRAIAN CENTURION",
            "precio": 3000,
            "imagen": "images/PRODUCTO-CARTUCHERA.png"
        },
        {
            "id": 6,
            "title": "Funda Iphone BRAIAN CENTURION",
            "precio": 8000,
            "imagen": "images/PRODUCTO-FUNDA.png"
        }
];

setInterval('mostrarCarrito()', 500) //Cada 0,5 segundos revisa el carrito

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
        document.getElementById('carritoCantidad').innerHTML = carrito.length
    }
    
}


function traerCarrito() {
    var carrito = sessionStorage.getItem('carro');
    carrito = JSON.parse(carrito);

    return carrito
}
