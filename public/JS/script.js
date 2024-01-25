function agregarCampo(listaId) {
    var ul = document.getElementById(listaId);
    var li = document.createElement("li");
    var input = document.createElement("input");
    input.type = "text";
    input.name = listaId.includes("utensilios") ? "utensilio[]" : "ingrediente[]";
    input.required = true;
    li.appendChild(input);

    // Agregar botón de eliminación
    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete"; // Agrega la clase "delete"
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

    // Agregar botón de eliminación
    var deleteButton = document.createElement("button");
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete"; // Agrega la clase "delete"
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