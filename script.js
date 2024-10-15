// Escucha el evento de "submit" del formulario
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto (que recarga la página)

    // Obtén los valores de los campos del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validar los campos del formulario
    if (name === '' || email === '' || message === '') {
        alert('Por favor, rellena todos los campos.');
        return; // Detener si falta algún campo
    }

    // Mostrar un mensaje de éxito
    alert(`Gracias ${name}, tu mensaje ha sido enviado con éxito.`);

    // Aquí puedes agregar la lógica para enviar el formulario a un servidor, si tienes uno configurado.
    
    // Reiniciar el formulario después del envío
    form.reset();
});