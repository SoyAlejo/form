function validar() {
	var telefono = document.getElementById("Telefono").value;
	var pass = document.getElementById("pass").value;
	var pass2 = document.getElementById("pass2").value;

	if (pass != pass2) {
		alert("Las contraseñas deben de coincidir");
		return false;
	} else {
		return true;
	}
}
