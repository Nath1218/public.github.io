let muñeco = document.getElementById("muñeco")

const palabras = ["programacion", "objetos", "ces", "independiente", "medellin", "clases", "rojo"];
        const btn = document.getElementById("boton");
        const btnReiniciar = document.getElementById("reiniciar")

        let palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
        let palabraCifrada = Array(palabraSeleccionada.length).fill("_");
        let intentosRestantes = 6;
        let letrasUtilizadas = [];

        function contarLetras(letra) {
            const output = {};
            for (let i = 0; i < palabraSeleccionada.length; i++) {
                const letraActual = palabraSeleccionada[i];
                if (!output[letraActual]) {
                    output[letraActual] = [];
                }
                output[letraActual].push(i);
            }
            return output;
        }
        
        function actualizarPantalla() {
            document.getElementById("cifrada").innerText = palabraCifrada.join(' ');
            document.getElementById("letras-utilizadas").innerText = "Letras utilizadas: " + letrasUtilizadas.join(', ');
            document.getElementById("vidas").innerText = "Vidas restantes: " + intentosRestantes;
        }

        const cambiarImagen = () => {
            const imagenes = ["photos/2.jpg", "photos/3.jpg", "photos/4.jpg", "photos/5.jpg", "photos/6.jpg", "photos/7.jpg"];
            muñeco.src = imagenes[5 - intentosRestantes];
        };

        actualizarPantalla();

        btn.addEventListener("click", function () {
            const inputLetra = document.getElementById("escribir");
            const letra = inputLetra.value.toLowerCase();

            if (letra.length !== 1 || !/[a-z]/.test(letra)) {
                alert('Por favor, ingresa una letra válida.');
                return;
            }
            inputLetra.value = ''; 

            if (letrasUtilizadas.includes(letra)) {
                alert('Ya has utilizado esa letra. ¡Inténtalo de nuevo!');
                return;
            }

            letrasUtilizadas.push(letra);

            if (palabraSeleccionada.includes(letra)) {
                const posiciones = contarLetras(letra)[letra];
                for (const posicion of posiciones) {
                    palabraCifrada[posicion] = letra;
                }

                if (!palabraCifrada.includes('_')) {
                    alert('¡Ganaste!, la palabra era: ' + palabraSeleccionada);
    
                    return;
                }
            } else {
                alert('La letra no está en la palabra.');
                intentosRestantes--;
                cambiarImagen()
            }

            if(intentosRestantes === 0){
                alert('Perdiste. La palabra era: ' + palabraSeleccionada)
            }
            actualizarPantalla();
        });

btnReiniciar.addEventListener("click", function(){
    palabraSeleccionada = palabras[Math.floor(Math.random() * palabras.length)];
    palabraCifrada = Array(palabraSeleccionada.length).fill("_");
    intentosRestantes = 6;
    letrasUtilizadas = [];
    muñeco.src = "photos/1.jpg"
    actualizarPantalla();
})