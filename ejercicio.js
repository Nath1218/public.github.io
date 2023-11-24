document.getElementById("ingresarBtn").addEventListener("click", function(){
    let cont1 = document.getElementsByName("contraseña")[0].value;
    let cont2 = document.getElementsByName("confirmación")[0].value;
    let usr = document.getElementsByName("usuario")[0].value;

    if (usr === "") {
        alert('Debe ingresar un usuario');
    } else if (cont1 === cont2 && cont1 !== "" && cont2 !== "") {
        alert('Registro exitoso');
    } else {
        alert('La contraseña no coincide o está vacía');
    }
    document.getElementsByName("contraseña")[0].value = "";
    document.getElementsByName("confirmación")[0].value = "";
    document.getElementsByName("usuario")[0].value = "";
});



