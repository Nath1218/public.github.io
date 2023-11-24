let numeroAleatorio = obtenerNumeroAleatorio();
document.getElementById("num").innerHTML = "Número Aleatorio: " + numeroAleatorio;
document.getElementById("num").style.display = "none"

let vidas = 10;

function adivinarNumero() {
    const numero = parseInt(document.getElementById("numeroIngresado").value);

    if (isNaN(numero) || numero < 1 || numero > 100) {
        alert('Ingrese un número entero entre 1 y 100');
    } else {
        if (numero === numeroAleatorio) {
            document.getElementById("resultado").innerHTML = "¡Felicitaciones, ganaste!";
            document.getElementById("num").innerHTML = "";
        } else if (numero < numeroAleatorio) {
            alert("El número secreto es mayor. Ingresa otro número");
            vidas--;
        } else {
            alert("El número secreto es menor. Ingresa otro número");
            vidas--;
        }

        if (vidas > 0) {
            document.getElementById("num").innerHTML = `Te quedan ${vidas} vidas`;
            document.getElementById("num").style.display = "block"
        } else {
            document.getElementById("resultado").innerHTML = `Perdiste, el número era ${numeroAleatorio}`;
        }
    }
}

function reiniciarJuego() {
    numeroAleatorio = obtenerNumeroAleatorio();
    document.getElementById("num").innerHTML = "Número Aleatorio: " + numeroAleatorio;
    document.getElementById("num").style.display = "none";
    document.getElementById("numeroIngresado").value = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("num").innerHTML == "";
    vidas = 10;
}

function obtenerNumeroAleatorio() {
    return Math.floor(Math.random() * 100) + 1;
}

