productos=[
        {
            "id": 1,
            "title": "Almohada",
            "precio": 14.999
        },
        {
            "id": 2,
            "title": "Taza",
            "precio": 2.999
        },
        {
            "id": 3,
            "title": "Camiseta",
            "precio": 4.999
        },
        {
            "id": 4,
            "title": "Gorra",
            "precio": 1.999
        },
        {
            "id": 5,
            "title": "Cartuchera",
            "precio": 2.999
        },
        {
            "id": 6,
            "title": "Funda",
            "precio": 6.999
        }
];

setInterval('mostrarCarrito()', 800) //Cada 0,8 segundos revisa el carrito

//Agrega el producto al carrito y lo lleva directamente a carrito.html
function comprarProducto(idProducto, clase){
    encontrarYAgregarProducto(idProducto)

    if (clase=="Comprar"){
        //window.location.assign("carrito.html"); //Te redirecciona a carrito. html
    }
    
}

//Recorre el carrito y busca el producto por Id, si lo encuentra, aumenta su cantidad, sino lo añade y deja la cantidad en 1
function encontrarYAgregarProducto(idProdu){
    var encontrado = false;

    var carrito = sessionStorage.getItem('carro');
    carrito = JSON.parse(carrito);

    for (var producto in carrito){
        if (carrito[producto].id == idProdu){
            encontrado = true;

            // MODIFICA LA CANTIDAD --->  carrito[producto].cantidad +=1;
        }
    }

    if (!encontrado){ //Si no esta en el carrito lo agrega
        carrito.push({id:idProdu, cantidad:1})
    }

    sessionStorage.setItem('carro', JSON.stringify(carrito));

}

//Muestra la cantidad de objetos que hay en el carrito al lado del link "Carrito"
function mostrarCarrito(){

    var carrito = sessionStorage.getItem('carro');
    carrito = JSON.parse(carrito);
    
    if (carrito.length>0){ //Si el carrito no esta vacio
        document.getElementById('carritoCantidad').innerHTML = carrito.length
    }
    
}

