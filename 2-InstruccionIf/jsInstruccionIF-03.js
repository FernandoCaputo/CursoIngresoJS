/*function mostrar() {
	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18) {
		alert("Mayor de edad");
	}
	if (edad <= 17) {
		alert("Menor de edad");

	}
	//tomo la edad  


}//FIN DE LA FUNCIÓN

*/
function mostrar() {

	let edad;

	edad = parseInt(document.getElementById("txtIdEdad").value);

	if (edad >= 18){
		alert("Es mayor de edad");
	}
	else{
		alert("Es menor de edad");
	}
}
