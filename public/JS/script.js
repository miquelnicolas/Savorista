<<<<<<< HEAD
=======
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


>>>>>>> c040256b19505342c7d10a695a9c9ee71d6d6b3f
function agregarCampo(listaId) {
    var ul = document.getElementById(listaId);
    var li = document.createElement("li");
    var input = document.createElement("input");
    input.type = "text";
    input.name = listaId.includes("utensilios") ? "utensilio[]" : "ingrediente[]";
    input.required = true;
    li.appendChild(input);

<<<<<<< HEAD
    // Agregar botón de eliminación
    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete"; // Agrega la clase "delete"
=======
    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete";
>>>>>>> c040256b19505342c7d10a695a9c9ee71d6d6b3f
    deleteButton.onclick = function() {
        ul.removeChild(li);
    };
    li.appendChild(deleteButton);

    ul.appendChild(li);
}
<<<<<<< HEAD

=======
>>>>>>> c040256b19505342c7d10a695a9c9ee71d6d6b3f
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

<<<<<<< HEAD
    // Agregar botón de eliminación
    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete"; // Agrega la clase "delete"
=======
    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete";
>>>>>>> c040256b19505342c7d10a695a9c9ee71d6d6b3f
    deleteButton.onclick = function() {
        ul.removeChild(li);
    };
    li.appendChild(deleteButton);

    ul.appendChild(li);
}
<<<<<<< HEAD

=======
>>>>>>> c040256b19505342c7d10a695a9c9ee71d6d6b3f
function eliminarCampo(button) {
    var li = button.parentNode;
    var ul = li.parentNode;
    ul.removeChild(li);
<<<<<<< HEAD
}
=======
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
>>>>>>> c040256b19505342c7d10a695a9c9ee71d6d6b3f
