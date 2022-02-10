if (!sessionStorage.getItem('carro')){
    var crearCarrito = true

    if (crearCarrito){
        var carrito = []; //Creamos el array
        window.crearCarrito = false
    }

    sessionStorage.setItem('carro', JSON.stringify(carrito)); //Lo seteo como JSON y lo llamo cada que lo necesito
}
