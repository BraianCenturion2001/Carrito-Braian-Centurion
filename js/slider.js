var slideIndex = 0;

function deslizar() {
  var i;
  var slides = document.getElementsByClassName("slider-div");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    

  slides[slideIndex-1].style.display = "block";
  setTimeout(deslizar, 3500); // Cambia la imagen cada 3,5 segundos
}

deslizar();