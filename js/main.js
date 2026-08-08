document.addEventListener('DOMContentLoaded', () => {
    
    
    const formContacto = document.querySelector('.form-contacto');

   
    if (formContacto) {
        
        
        formContacto.addEventListener('submit', (evento) => {
            
           
            evento.preventDefault(); 

            try {
                
                const nombre = document.querySelector('input[name="nombre"]').value.trim();
                const telefono = document.querySelector('input[name="telefono"]').value.trim();
                const email = document.querySelector('input[name="email"]').value.trim();
                const mensaje = document.querySelector('textarea[name="mensaje"]').value.trim();

               
                if (nombre === '' || telefono === '' || email === '' || mensaje === '') {
                  
                    throw new Error('Todos los campos son obligatorios. Por favor, llénelos todos.');
                }

                
                const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!formatoEmail.test(email)) {
                    throw new Error('El formato del correo no es válido. Revíselo e intente de nuevo.');
                }

             
                alert(`¡Éxito, ${nombre}! Tus datos han sido validados correctamente.`);
                
                
                formContacto.reset();

            } catch (error) {
                
                alert(`Atención: ${error.message}`);
            }
        });
    }
});