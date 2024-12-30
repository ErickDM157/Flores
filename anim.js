// Sincronizar as letras com a música
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");


// Função para ocultar o título após o tempo determinado
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation = "fadeOut 3s ease-in-out forwards";
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Aguarda 3 segundos antes de esconder
}

// Oculta o título após 12 segundos
setTimeout(ocultarTitulo, 25000);
