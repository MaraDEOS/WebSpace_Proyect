document.addEventListener('DOMContentLoaded', () => {
    
    const formulario = document.querySelector('.volunteer-form');
    const inputTelefono = document.getElementById('telefono');

   
    inputTelefono.addEventListener('input', function() {
       
        this.value = this.value.replace(/[^0-9+\-\s]/g, '');
    });

    formulario.addEventListener('submit', function(evento) {
        
        evento.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const telefono = inputTelefono.value.trim();
        const area = document.getElementById('area').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (!regexNombre.test(nombre)) {
            alert("Error: Por favor, ingresa un nombre válido (solo letras y espacios).");
            return; 
        }

        if (telefono === "") {
            alert("Error: El número de teléfono no puede estar vacío.");
            return; 
        }

        console.log("--- Nueva Solicitud de Voluntariado ---");
        console.log("Nombre:", nombre);
        console.log("Teléfono:", telefono);
        console.log("Área de interés:", area);
        console.log("Mensaje:", mensaje);

        alert(`¡Gracias por querer unirte a RedMaSolHN, ${nombre}!\n\nHemos recibido tu solicitud para el área de "${area}". Nos pondremos en contacto contigo pronto al número ${telefono}.`);

        formulario.reset();
    });
});