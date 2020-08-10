/*function mostrar() {
	let num;
	let i = 0;
	let acumulador = 0;
	let promedio = 0;
	while (i <= 4) {
		num = parseInt(prompt("Ingrese un numero"));
		acumulador = acumulador + num;
		i = i + 1;
	}
	promedio = acumulador / 5;

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = promedio;
}//FIN DE LA FUNCIÓN

/* function mostrar() {
	let num;
	//let promedio;

	num = parseInt(prompt("Ingrese un numero: "));
	num = num + parseInt(prompt("Ingrese un numero: "));
	num = num + parseInt(prompt("Ingrese un numero: "));
	num = num + parseInt(prompt("Ingrese un numero: "));
	num = num + parseInt(prompt("Ingrese un numero: "));

	//promedio = num /5;
	document.getElementById("txtIdSuma").value = num;
	document.getElementById("txtIdPromedio").value = num / 5;

}//FIN DE LA FUNCIÓN
*/

function mostrar() {

	let num;
	num = parseInt(prompt("Ingrese un numero :"));
	num = num +parseInt(prompt("Ingrese un numero: "));
	num = num +parseInt(prompt("Ingrese un numero: "));
	num = num +parseInt(prompt("Ingrese un numero: "));
	num = num +parseInt(prompt("Ingrese un numero: "));

	document.getElementById("txtIdSuma").value =num;
	document.getElementById("txtIdPromedio").value = num / 5;
}