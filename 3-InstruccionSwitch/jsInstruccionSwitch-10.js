function mostrar() {
	let destino;
	let estacion;
	let estado;
	const SV = "Se viaja";
	const NV = "No se viaja";
	destino = document.getElementById("txtIdDestino").value;
	estacion = document.getElementById("txtIdEstacion").value;

	switch (estacion) {
		case "Invierno":
			if (destino != "Bariloche") {
				estado = NV;
			}
			else {
				estado = SV;
			}
			break;
		case "Verano":
			if ((destino == "Bariloche") || (destino == "Cordoba")) {
				estado = NV;
			}
			else {
				estado = SV;
			}
			break;
		case "Otoño":
			estado = SV
			break;
		case "Primavera":
			if (destino != "Bariloche") {
				estado = SV;
			}
			else {
				estado = NV;
			}
			break;
		default:
			alert("Esta estación no esta contemplada")
	}
	alert(estado);

}//FIN DE LA FUNCIÓN