function mostrar() {

	let destino = document.getElementById("txtIdDestino").value

	switch (destino) {
		case "Bariloche":
		case "Ushuaia":
			alert("FRIO")
			break;
		case "Mar del plata":
		case "Cataratas":
			alert("CALOR")
			break;
		default:
			alert("Esta provincia no esta contemplada");
			break;

	}


}//FIN DE LA FUNCIÓN