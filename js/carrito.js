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

carrito = [];

//sessionStorage.setItem('id', 'valor');
//sessionStorage.getItem('id') 

//Agrega el producto al carrito y lo lleva directamente a carrito.html
function comprarProducto(idProducto, clase){
    encontrarYAgregarProducto(idProducto)

    if (clase=="Agregar"){

    } else if (clase=="Comprar"){
        //window.location.assign("carrito.html"); //Te redirecciona a carrito. html
    }

    if (carrito.length>0){ //Si el carrito no esta vacio
        mostrarCarrito()
    }
    
}

//Recorre el carrito y busca el producto por Id, si lo encuentra, aumenta su cantidad, sino lo añade y deja la cantidad en 1
function encontrarYAgregarProducto(idProdu){
    var encontrado = false;
    for (var producto in carrito){
        if (carrito[producto].id == idProdu){
            encontrado = true;

            if (encontrado) { //Si esta en el carrito solo agrega una cantidad
                carrito[producto].cantidad +=1;
            }
        }
    }

    if (!encontrado){ //Si no esta en el carrito lo agrega
        carrito.push({id:idProdu, cantidad:1})
    }
}

//Muestra la cantidad de objetos que hay en el carrito al lado del link "Carrito"
function mostrarCarrito(){
    document.getElementById('carritoCantidad').innerHTML = carrito.length
}

