document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;

    // Crear un objeto con los datos del usuario
    var user = {
        username: username,
        password: password,
        email: email
    };

    // Obtener los usuarios existentes desde el almacenamiento XML
    var usersXML = localStorage.getItem('users');
    var users = usersXML ? parseXML(usersXML) : [];

    // Verificar si el usuario ya existe
    var existingUser = users.find(function(u) {
        return u.username === username;
    });

    if (existingUser) {
        alert('El usuario ya existe, por favor elige otro nombre de usuario.');
    } else {
        // Agregar el nuevo usuario a la lista
        users.push(user);

        // Guardar la lista de usuarios en el almacenamiento XML
        localStorage.setItem('users', generateXML(users));

        alert('Registro exitoso, puedes iniciar sesión ahora.');
        location.href = 'login.html'; // Redirigir al formulario de inicio de sesión
    }
});

function parseXML(xmlString) {
    var parser = new DOMParser();
    var xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    var users = Array.from(xmlDoc.getElementsByTagName('user')).map(function(user) {
        var username = user.getElementsByTagName('username')[0].textContent;
        var password = user.getElementsByTagName('password')[0].textContent;
        var email = user.getElementsByTagName('email')[0].textContent;
        return { username: username, password: password, email: email };
    });
    return users;
}

function generateXML(users) {
    var xmlDoc = document.implementation.createDocument(null, 'users');
    users.forEach(function(user) {
        var
        userElem = xmlDoc.createElement('user');
        var usernameElem = xmlDoc.createElement('username');
        usernameElem.textContent = user.username;
        var passwordElem = xmlDoc.createElement('password');
        passwordElem.textContent = user.password;
        var emailElem = xmlDoc.createElement('email');
        emailElem.textContent = user.email;
        userElem.appendChild(usernameElem);
        userElem.appendChild(passwordElem);
        userElem.appendChild(emailElem);
        xmlDoc.documentElement.appendChild(userElem);
        });
        var serializer = new XMLSerializer();
        return serializer.serializeToString(xmlDoc);
        }
