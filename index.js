// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/formularioSimple.git

document.getElementById("Registro").addEventListener("click", function(event) {
 

    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var contrasena = document.getElementById("contrasena").value;

    if (nombre != "" && apellidos != "" && email != "" && contrasena != "") {
        document.getElementById("nombre").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contrasena").value = "";

        alert("REGISTRADO CORRECTAMENTE");
    }
});