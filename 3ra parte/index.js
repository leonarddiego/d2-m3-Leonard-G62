// Obtén los elementos select por su ID
var selector1 = document.getElementById("numeroSelector1");
var selector2 = document.getElementById("numeroSelector2");
var selector3 = document.getElementById("numeroSelector3");

// Obtén el botón por su ID
var ingresarButton = document.getElementById("ingresarButton");

// Agrega eventos para escuchar los cambios en los selectores
selector1.addEventListener("change", function() {
    mostrarNumeroSeleccionado(selector1);
});

selector2.addEventListener("change", function() {
    mostrarNumeroSeleccionado(selector2);
});

selector3.addEventListener("change", function() {
    mostrarNumeroSeleccionado(selector3);
});

// Agrega un evento para escuchar el clic en el botón "Ingresar"
ingresarButton.addEventListener("click", function() {
    sumarYComparar();
});

function mostrarNumeroSeleccionado(selector) {
    // Obtiene el valor seleccionado y lo muestra en la consola (puedes hacer cualquier otra cosa con él)
    var selectedNumber = selector.value;
    console.log("Número seleccionado: " + selectedNumber);
}

function sumarYComparar() {
    // Obtiene los valores seleccionados de los tres selectores como texto
    var numero1 = selector1.value;
    var numero2 = selector2.value;
    var numero3 = selector3.value;

    // Concatena las cadenas y convierte el resultado a un número entero
    var suma = parseInt(numero1 + numero2 + numero3);

    // Compara con los valores especificados
    if (suma === 911) {
        mostrarResultado("Password 1 correcto");
    } else if (suma === 714) {
        mostrarResultado("Password 2 correcto");
    } else {
        mostrarResultado("Contraseña incorrecta");
    }
}

function mostrarResultado(mensaje) {
    // Muestra el mensaje en el párrafo correspondiente
    var resultadoParrafo = document.getElementById("resultadoParrafo");
    resultadoParrafo.textContent = mensaje;
}
