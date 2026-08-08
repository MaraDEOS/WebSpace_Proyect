document.addEventListener('DOMContentLoaded', () => {
    
    const formularioContacto = document.querySelector('.form-contacto');

    if (formularioContacto) {
        
        const inputTelefono = document.querySelector('input[name="telefono"]');
        
       
        inputTelefono.addEventListener('input', function() {
           
            this.value = this.value.replace(/[^0-9+\-\s]/g, '');
        });

        formularioContacto.addEventListener('submit', function(evento) {
            
            evento.preventDefault();

         
            const nombre = document.querySelector('input[name="nombre"]').value.trim();
            const telefono = inputTelefono.value.trim();
            const email = document.querySelector('input[name="email"]').value.trim();
            const mensaje = document.querySelector('textarea[name="mensaje"]').value.trim();

            const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
            if (!regexNombre.test(nombre)) {
                alert("Error: Por favor, ingresa un nombre válido (solo letras y espacios).");
                return; 
            }

            if (telefono === "") {
                alert("Error: El número de teléfono no puede estar vacío.");
                return;
            }

            const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regexEmail.test(email)) {
                alert("Error: Por favor, ingresa un correo electrónico válido.");
                return;
            }

            console.log("--- Nuevo Mensaje de Contacto ---");
            console.log("Nombre:", nombre);
            console.log("Teléfono:", telefono);
            console.log("Email:", email);
            console.log("Mensaje:", mensaje);

            alert(`¡Gracias por contactarnos, ${nombre}!\n\nHemos recibido tu mensaje. Nos pondremos en contacto contigo pronto al número ${telefono} o a tu correo.`);

            formularioContacto.reset();
        });
    }
});