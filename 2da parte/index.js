// Obtén los elementos input por su ID
var input1 = document.getElementById("numeroInput1");
var input2 = document.getElementById("numeroInput2");
var input3 = document.getElementById("numeroInput3");

// Obtén el botón por su ID
var ingresarButton = document.getElementById("ingresarButton");

// Agrega un evento para escuchar el clic en el botón "Ingresar"
ingresarButton.addEventListener("click", function() {
    mostrarMensaje();
});

function mostrarMensaje() {
    // Obtiene los valores introducidos en los tres campos de entrada
    var numero1 = parseInt(input1.value.trim()) || 0;
    var numero2 = parseInt(input2.value.trim()) || 0;
    var numero3 = parseInt(input3.value.trim()) || 0;

    // Calcula la suma
    var suma = numero1 + numero2 + numero3;

    // Determina el mensaje según la suma
    var mensaje = (suma <= 10) ? `Llevas ${suma} stickers.` : "Llevas demasiados stickers.";

    // Muestra el mensaje en el párrafo correspondiente
    var mensajeParrafo = document.getElementById("mensajeParrafo");
    mensajeParrafo.textContent = mensaje;
}
