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

/*Parte del formulario de voluntariado */
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos el formulario usando su clase
    const formulario = document.querySelector('.volunteer-form');

    // Escuchamos el evento 'submit' (cuando se envía el formulario)
    formulario.addEventListener('submit', function(evento) {
        
        // 1. Evitamos que la página se recargue por defecto al enviar
        evento.preventDefault();

        // 2. Capturamos los valores y les quitamos los espacios en blanco al inicio y al final (.trim())
        const nombre = document.getElementById('nombre').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const area = document.getElementById('area').value;
        const mensaje = document.getElementById('mensaje').value.trim();

        // --- INICIO DE VALIDACIONES ---

        // Validación para el Nombre: Solo letras (incluyendo acentos y la ñ) y espacios
        const regexNombre = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
        if (!regexNombre.test(nombre)) {
            alert("Error: Por favor, ingresa un nombre válido (solo letras y espacios).");
            return; // El 'return' detiene el proceso y evita que el formulario se envíe
        }

        // Validación para el Teléfono: Solo números, espacios y los símbolos + o -
        const regexTelefono = /^[0-9+\-\s]+$/;
        if (!regexTelefono.test(telefono)) {
            alert("Error: Por favor, ingresa un número de teléfono válido (solo números).");
            return; 
        }

        // --- FIN DE VALIDACIONES ---

        // Si el código llega hasta aquí, significa que pasó todas las pruebas
        console.log("--- Nueva Solicitud de Voluntariado ---");
        console.log("Nombre:", nombre);
        console.log("Teléfono:", telefono);
        console.log("Área de interés:", area);
        console.log("Mensaje:", mensaje);

        // 3. Mostramos un mensaje de éxito
        alert(`¡Gracias por querer unirte a RedMaSolHN, ${nombre}!\n\nHemos recibido tu solicitud para el área de "${area}". Nos pondremos en contacto contigo pronto al número ${telefono}.`);

        // 4. Limpiamos todos los campos del formulario
        formulario.reset();
    });
});