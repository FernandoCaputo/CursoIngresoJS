/*function mostrar() {


	let hora = document.getElementById("txtIdHora").value;

	switch (hora) {


		case ("7"):
		case ("8"):
		case ("9"):
		case ("10"):
		case ("11"):
			alert("Es de manaña")
			break;

	}
	if (hora > 24 || hora < 1) {
		alert("No es una hora valida")
	}


}//FIN DE LA FUNCIÓN*/
function mostrar() {
	let hora = document.getElementById("txtIdHora").value;

	switch (hora){
		case ("7"):
		case ("8"):
		case ("9"):
		case ("10"):
		case ("11"):
		alert("Es de mañana");
		break;
		default:
			alert("La hora no valida");
	
	}


}
