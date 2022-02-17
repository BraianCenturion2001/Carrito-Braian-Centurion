const corazon = document.querySelector("#corazon");

function cambiarColor(){

    idCorazon = (corazon.target.getAttribute('id'))

    favoritos.forEach(corazonActual => {
        if (corazonActual.id==idCorazon){
            if(corazonActual.marcado){
                corazon.setAttribute('checked','checked');
            }
        }
    });
}

function encontrarCorazon(){

}

function traerFavoritos() {
    var favoritos = sessionStorage.getItem('favoritos');
    favoritos = JSON.parse(favoritos);

    return favoritos
}

function setearFavoritos(favoritos){
    sessionStorage.setItem('favoritos', JSON.stringify(favoritos)); //Seteamos el array de favoritos
}

favoritos =  traerFavoritos();


