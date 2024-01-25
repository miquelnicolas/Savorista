//REGSITRO JS


async function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        console.log('Data being sent:', JSON.stringify({ username, password }));

        const response = await fetch('/registerUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        console.log(response);

        if (response.ok) {
            console.log('User registered successfully');
            alert('Usuario registrado correctamente');

            window.location.href = 'iniciar_sesion.html';

        } else {
            console.error('Failed to register user');
            alert('ERROR: el nombre de usuario ya está en uso');
        }
    } catch (error) {
        console.error('Error:', error);
    }
}
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    console.log('Registration');
    event.preventDefault(); // Prevent the default form submission
    registerUser();
});


//AÑADIR RECETA JS


function agregarCampo(listaId) {
    var ul = document.getElementById(listaId);
    var li = document.createElement("li");
    var input = document.createElement("input");
    input.type = "text";
    input.name = listaId.includes("utensilios") ? "utensilio[]" : "ingrediente[]";
    input.required = true;
    li.appendChild(input);

    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        ul.removeChild(li);
    };
    li.appendChild(deleteButton);

    ul.appendChild(li);
}
function agregarPaso() {
    var ul = document.getElementById("pasosList");
    var li = document.createElement("li");

    var inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.name = "paso_nombre[]";
    inputNombre.required = true;

    var textareaDescripcion = document.createElement("textarea");
    textareaDescripcion.name = "paso_descripcion[]";
    textareaDescripcion.required = true;

    li.appendChild(inputNombre);
    li.appendChild(textareaDescripcion);

    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete";
    deleteButton.onclick = function() {
        ul.removeChild(li);
    };
    li.appendChild(deleteButton);

    ul.appendChild(li);
}
function eliminarCampo(button) {
    var li = button.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
}
document.getElementById('formularioRegistro').addEventListener('submit', async (e) => {
    e.preventDefault();
    const ID = document.getElementById('ID').value;
    const nombre = document.getElementById('username').value;
    const contraseña = document.getElementById('password').value;

    try {
        const respuesta = await fetch('/registro', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ID, nombre, contraseña })
        });
        const data = await respuesta.json();
        alert(data.mensaje);
    } catch (error) {
        console.error('Error:', error);
    }
});