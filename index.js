// JAIME FERNÁNDEZ CALVO
// https://github.com/jaimecamocha/formularioSimple.git

document.getElementById("Registro").addEventListener("click", function(event) {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let email = document.getElementById("email").value;
    let contrasena = document.getElementById("contrasena").value;

    if (nombre != "" && apellidos != "" && email != "" && contrasena.length >= 8) {
        document.getElementById("nombre").value = "";
        document.getElementById("apellidos").value = "";
        document.getElementById("email").value = "";
        document.getElementById("contrasena").value = "";

        alert("REGISTRADO CORRECTAMENTE");
    } else {
        alert("Por favor, complete todos los campos y asegúrese de que la contraseña tenga al menos 8 caracteres.");
    }
});