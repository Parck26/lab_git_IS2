// js/main.js

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Obtener el botón por su ID
    var showMessageButton = document.getElementById("showMessage");

    // Verificar si el botón existe en la página actual
    if (showMessageButton) {
        // Añadir un evento de clic al botón
        showMessageButton.addEventListener("click", function() {
            alert("¡Hola! Este es un mensaje interactivo.");
        });
    }
});
