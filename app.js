function login() {
    var user, password

    user = document.getElementById("Usuario").value;
    password = document.getElementById("Contraseña").value;

    if (user == "juanabiliomejiaquispe200@gmail.com" && password == "1234") {
        window.location = "usuarioform.html";
    } else {
        alert("Datos Incorrectos! Intente nuevamente")
    }
}