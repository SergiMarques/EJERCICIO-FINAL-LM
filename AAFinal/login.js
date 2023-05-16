document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Obtener los usuarios registrados desde el almacenamiento local
    var usersXML = localStorage.getItem('users');
    var users = usersXML ? parseXML(usersXML) : [];

    // Verificar las credenciales del usuario
    var authenticatedUser = users.find(function(user) {
        return user.username === username && user.password === password;
    });

    if (authenticatedUser) {
        alert('Inicio de sesión exitoso.');
        location.href = 'index.html'; // Redirigir al índice o página principal después del inicio de sesión exitoso
    } else {
        alert('Credenciales de inicio de sesión incorrectas. Por favor, inténtalo de nuevo.');
    }
});
