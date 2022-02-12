if (!sessionStorage.getItem('carro')){ //Si el carrito no existe lo creamos
    
    var carrito = []; //Creamos el array

    sessionStorage.setItem('carro', JSON.stringify(carrito)); //Lo seteo como JSON y lo llamo cada que lo necesito
}
