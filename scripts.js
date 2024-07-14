document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => form.noValidate = true);


// Cargar usuarios desde JSON
    fetch('usuarios.json')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('Users', JSON.stringify(data));
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
});



// Función validate Consulta
function validateConsulta() {
    const codigo = document.getElementById('codigo').value;
    if (!codigo) {
        alert('Por favor, llene el campo.');
        return false;
    }
    return true;
}



// Función validate Reporte
function validateReporte() {
    const periodo = document.getElementById('periodo').value;
    if (!periodo) {
        alert('Por favor, llene el campo.');
        return false;
    }
    return true;
}






// Función validate Login
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const usernameRegex = /^[a-zA-Z0-9.]{4,10}$/;
    if (!usernameRegex.test(username)) {
        alert('El nombre de usuario debe contener solo letras, números y puntos, y tener entre 4 y 10 caracteres.');
        return false;
    }

    const passwordRegex = /^[a-zA-Z0-9.]{4,10}$/;
    if (!passwordRegex.test(password)) {
        alert('La contraseña debe contener solo letras, números y puntos, y tener entre 4 y 10 caracteres.');
        return false;
    }

    const credencialesSonValidas = true;

    if (credencialesSonValidas) {
        window.location.href = "home.html";
        return false;
    }

    alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.');
    return false;
}







// Función para validar y registrar el usuario
function validateRegister() {
    const id = document.getElementById('id').value;
    const fullname = document.getElementById('fullname').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirm_password = document.getElementById('confirm_password').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.getElementById('gender').value;

    // Verificación de campos vacíos
    if (!id || !fullname || !username || !password || !confirm_password || !email || !phone || !address || !birthdate || !gender) {
        alert('Por favor, llene todos los campos.');
        return false;
    }

    // Validaciones individuales
    const idRegex = /^[a-zA-Z0-9]{1,11}$/;
    const nameRegex = /^[a-zA-Z\s]{1,30}$/;
    const userPassRegex = /^[a-zA-Z0-9.-]{1,20}$/;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const phoneRegex = /^[0-9]{10}$/;
    const addressRegex = /^[a-zA-Z0-9.\s-]{1,50}$/;

    if (!idRegex.test(id)) {
        alert('El ID solo puede contener letras y números y debe tener hasta 11 caracteres.');
        return false;
    }

    if (!nameRegex.test(fullname)) {
        alert('El Nombre Completo solo puede contener letras y debe tener hasta 30 caracteres.');
        return false;
    }

    if (!userPassRegex.test(username)) {
        alert('El Usuario solo puede contener letras, números, puntos y guiones y debe tener hasta 20 caracteres.');
        return false;
    }

    if (!userPassRegex.test(password)) {
        alert('La Contraseña solo puede contener letras, números, puntos y guiones y debe tener hasta 20 caracteres.');
        return false;
    }

    if (password !== confirm_password) {
        alert('Las contraseñas no coinciden.');
        return false;
    }

    if (!emailRegex.test(email)) {
        alert('El Correo Electrónico no es válido.');
        return false;
    }

    if (!phoneRegex.test(phone)) {
        alert('El Teléfono solo puede contener números y debe tener 10 dígitos.');
        return false;
    }

    if (!addressRegex.test(address)) {
        alert('La Dirección solo puede contener letras, números, puntos y guiones y debe tener hasta 50 caracteres.');
        return false;
    }

    // Si todas las validaciones pasan, guarda los datos en localStorage
    const user = {
        id: id,
        fullname: fullname,
        username: username,
        password: password,
        email: email,
        phone: phone,
        address: address,
        birthdate: birthdate,
        gender: gender
    };

    // Obtiene la lista de usuarios registrados desde localStorage, o una lista vacía si no existe
    const users = JSON.parse(localStorage.getItem('Users')) || [];

    // Verifica si el usuario ya está registrado comparando los IDs
    const isUserRegistered = users.find(user => user.id === id);
    if (isUserRegistered) {
        alert('El usuario ya está registrado.');
        return false;
    }

    // Añade el nuevo usuario a la lista de usuarios
    users.push(user);

    // Actualiza la lista de usuarios en localStorage
    localStorage.setItem('Users', JSON.stringify(users));

    // Muestra el mensaje de confirmación
    alert('Registro Exitoso!');
    
    // Redirige al usuario al inicio después del registro
    window.location.href = 'index.html'; 

    return false; // Devuelve false para evitar el envío del formulario real
}

// Asignar la función al evento 'submit' del formulario
document.querySelector('#registerForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío del formulario
    validateRegister(); // Llama a la función de validación
});











// Función para validar validateAsignatura
function validateAsignatura() {
    const codigo = document.getElementById('codigo').value;
    const nombre = document.getElementById('nombre').value;
    const carrera = document.getElementById('carrera').value;
    const periodo = document.getElementById('periodo').value;
    const sede = document.getElementById('sede').value;
    const fecha = document.getElementById('fecha').value;

    if (!codigo || !nombre || !carrera || !periodo || !sede || !fecha) {
        alert('Por favor, llene todos los campos.');
        return false;
    }

    const codigoRegex = /^[a-zA-Z0-9]{1,6}$/;
    if (!codigoRegex.test(codigo)) {
        alert('El código de la asignatura debe contener solo letras y números, y tener máximo 6 caracteres.');
        return false;
    }

    const nombreRegex = /^[a-zA-Z\s]{1,16}$/;
    if (!nombreRegex.test(nombre)) {
        alert('El nombre de la asignatura debe contener solo letras y tener máximo 16 caracteres.');
        return false;
    }

    const carreraRegex = /^[a-zA-Z\s]{1,16}$/;
    if (!carreraRegex.test(carrera)) {
        alert('El nombre de la carrera debe contener solo letras y tener máximo 16 caracteres.');
        return false;
    }

    const periodoRegex = /^[a-zA-Z0-9\s]{1,10}$/;
    if (!periodoRegex.test(periodo)) {
        alert('El periodo académico debe contener solo letras y números, y tener máximo 10 caracteres.');
        return false;
    }

    const sedeRegex = /^[a-zA-Z0-9\s]{1,20}$/;
    if (!sedeRegex.test(sede)) {
        alert('La sede debe contener solo letras y números, y tener máximo 20 caracteres.');
        return false;
    }

    return true;
}







// Función para validar validateSilabos
function validateSilabos() {
    const nombreDocumento = document.getElementById('nombre_documento').value;
    const codigoAsignatura = document.getElementById('codigo_asignatura').value;
    const nombreAsignatura = document.getElementById('nombre_asignatura').value;
    const paralelos = document.getElementById('paralelos').value;
    const periodoAcademico = document.getElementById('periodo_academico').value;
    const facultad = document.getElementById('facultad').value;
    const docenteResponsable = document.getElementById('docente_responsable').value;
    const anoLectivo = document.getElementById('ano_lectivo').value;
    const descripcion = document.getElementById('descripcion').value;

    if (!nombreDocumento || !codigoAsignatura || !nombreAsignatura || !paralelos || !periodoAcademico || !facultad || !docenteResponsable || !anoLectivo || !descripcion) {
        alert('Por favor, llene todos los campos.');
        return false;
    }

    const nombreDocumentoRegex = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{4,16}$/;
    if (!nombreDocumentoRegex.test(nombreDocumento)) {
        alert('El nombre del documento (sílabo) debe contener solo letras. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    const codigoAsignaturaRegex = /^[a-zA-Z0-9-]{4,16}$/;
    if (!codigoAsignaturaRegex.test(codigoAsignatura)) {
        alert('El código de la asignatura debe contener letras, números y guion. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    const nombreAsignaturaRegex = /^[a-zA-Z\s]{4,16}$/;
    if (!nombreAsignaturaRegex.test(nombreAsignatura)) {
        alert('El nombre de la asignatura debe contener solo letras. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    const paralelosRegex = /^[a-zA-Z\s]{4,16}$/;
    if (!paralelosRegex.test(paralelos)) {
        alert('Paralelos debe contener solo letras. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    const periodoAcademicoRegex = /^[0-9]{4,16}$/;
    if (!periodoAcademicoRegex.test(periodoAcademico)) {
        alert('Período académico debe contener solo números. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    const facultadRegex = /^[a-zA-Z\s]{4,16}$/;
    if (!facultadRegex.test(facultad)) {
        alert('Facultad debe contener solo letras. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    const docenteResponsableRegex = /^[a-zA-Z\s]{4,16}$/;
    if (!docenteResponsableRegex.test(docenteResponsable)) {
        alert('Docente responsable debe contener solo letras. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    const anoLectivoRegex = /^[0-9]{4,16}$/;
    if (!anoLectivoRegex.test(anoLectivo)) {
        alert('Año lectivo debe contener solo números. Mínimo 4, máximo 16 caracteres.');
        return false;
    }

    const palabras = descripcion.split(/\s+/).filter(word => word.trim() !== '');
    if (palabras.length < 5 || palabras.length > 40) {
        alert('Descripción debe contener mínimo 5 palabras y máximo 40 palabras.');
        return false;
    }

    alert('Registro de sílabo exitoso. Redirigiendo...');
    window.location.href = "pagina_de_destino.html";
    return false;
}
