var btn = document.getElementById("agregarBtn");
var tareasContainer = document.getElementById("tareasContainer");

btn.addEventListener("click", function () {
    var nuevaTarea = document.getElementById("tarea").value;

    if (nuevaTarea !== "") {
        var tareaDiv = document.createElement("div");
        var nuevoLabel = document.createElement("label");
        var nuevoRadio = document.createElement("input");
        var btnEliminar = document.createElement("button");

        nuevoRadio.type = "checkbox"; 
        nuevoRadio.name = "realizadas";
        btnEliminar.type = "button";
        btnEliminar.textContent = "x";

        nuevoLabel.textContent = nuevaTarea;

        tareaDiv.appendChild(nuevoRadio);
        tareaDiv.appendChild(nuevoLabel);
        tareaDiv.appendChild(btnEliminar);
        tareaDiv.appendChild(document.createElement("br"));
        document.getElementById("tarea").value = "";
        tareasContainer.appendChild(tareaDiv)

        btnEliminar.addEventListener("click", function () {
            tareasContainer.removeChild(tareaDiv);
        });

        nuevoRadio.addEventListener("change", function () {
            if (nuevoRadio.checked) {
                alert('Tarea completada: ' + nuevaTarea);
            }
        });
    }
});