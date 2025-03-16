
//Muestra el tooltip cuando el usuario hace clic en el campo de contraseña
document.getElementById("password").addEventListener("focus", function() {
    document.getElementById("tooltip").classList.remove("hidden");
});

//Oculta el tooltip
document.getElementById("password").addEventListener("blur", function() {
    document.getElementById("tooltip").classList.add("hidden");
});

 // Cambia el color del título a azul cuando el usuario pasa el mouse sobre él
document.getElementById("title").addEventListener("mouseover", function() {
    this.style.color = "purple";
});

//Regreda al color original 
document.getElementById("title").addEventListener("mouseout", function() {
    this.style.color = "black";
});


document.getElementById("passwordForm").addEventListener("submit", function(event) {
    // Evita que el formulario se recargue al enviar
    event.preventDefault();

    //Obtiene los valores y elementos
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const message = document.getElementById("message");
    

     // Remueve cualquier clase previa de mensaje
    message.classList.remove("hidden", "error", "success");

    // Si la contraseña tiene menos de 6 caracteres, muestra un mensaje de error
    if (password.length < 6) {
        message.innerHTML = `
            <span class="icon-text has-text-warning">
                <span class="icon">
                    <i class="fas fa-exclamation-triangle"></i>
                </span>
                <span>El password debe tener al menos 6 caracteres.</span>
            </span>
        `;
        message.classList.add("error");

    // Si las contraseñas no coinciden, muestra un mensaje de error
    } else if (password !== confirmPassword) {
        message.innerHTML = `
                <span class="icon">
                    <i class="fas fa-ban"></i>
                </span>
                <span>Las Passwords no coinciden.</span>
        `;
        message.classList.add("error");

    // Si las contraseñas son válidas, muestra un mensaje de éxito con un icono
    } else {
        message.innerHTML = `
                <span class="icon">
                    <i class="fas fa-check-square"></i>
                </span>
                <span>Password válido.</span>
            </span>
        `;

        // Muestra una alerta después de 1 segundo
        message.classList.add("success");
        setTimeout(() => {
            alert("¡Validación exitosa!");
        }, 1000);
    }
});

const dropZone = document.getElementById("dropZone");
dropZone.addEventListener("dragover", function(event) {
    event.preventDefault();
    dropZone.style.borderColor = "green";
});

// Restaura el color original cuando el usuario saca el archivo
dropZone.addEventListener("dragleave", function() {
    dropZone.style.borderColor = "#333";
});

dropZone.addEventListener("drop", function(event) {
    // Evita la apertura del archivo en el navegador
    event.preventDefault();
     // Cambia el borde al soltar el archivo
    dropZone.style.borderColor = "blue";
    // Obtiene el archivo subido
    const file = event.dataTransfer.files[0];
    // Muestra el nombre del archivo cargado
    document.getElementById("fileName").textContent = "Archivo cargado: " + file.name;
});
