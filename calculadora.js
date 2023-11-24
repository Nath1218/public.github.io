const num1 = document.getElementById("numero1");
const num2 = document.getElementById("numero2");
const operacion = document.getElementsByName("operacion");
const btn = document.getElementById("boton");

btn.addEventListener("click", function () {
    let resultado;

    if (operacion[0].checked) {
        resultado = parseInt(num1.value) + parseInt(num2.value);
    } else if (operacion[1].checked) {
        resultado = parseInt(num1.value) - parseInt(num2.value);
    } else if (operacion[2].checked) {
        resultado = parseInt(num1.value) * parseInt(num2.value);
    } else if (operacion[3].checked) {
        resultado = parseInt(num1.value) / parseInt(num2.value);
    } else {
        alert('Seleccione una operación');
    }

    document.getElementById("resultado").innerHTML = resultado;
});

