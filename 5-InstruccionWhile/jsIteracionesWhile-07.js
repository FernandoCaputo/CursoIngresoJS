/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador;
	let acumulador;
	let respuesta;
	let num;
	contador = 0;
	acumulador = 0;
	respuesta = 'si';

	do {
		num = parseInt(prompt("Ingrese un numero: "));
		acumulador = acumulador + num;
		contador = contador + 1;

		respuesta = prompt("Ingresa otro numero? si/no");


	} while (respuesta == "si");

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;



}


//FIN DE LA FUNCIÓN

/* function mostrar() {
	let contador;
	let acumulador;
	let respuesta;
	let num;
	contador = 0;
	acumulador = 0;
	respuesta = 'si';

	do {
		num = parseInt(prompt("Ingrese un numero: "));
		acumulador = acumulador + num;
		contador = contador + 1;

		respuesta = prompt("Ingresa otro numero? si/no");


	} while (respuesta == "si");

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;



}//FIN DE LA FUNCIÓN

function mostrar() {
	let contador;
	let acumulador;
	let respuesta;
	let num;
	contador = 0;
	acumulador = 0;
	respuesta = "si";

	while(respuesta == "si"){
		num = parseInt(prompt("Ingrese un numero: "));
		acumulador = acumulador + num;
		contador = contador + 1;

		respuesta = prompt("Ingresa otro numero? si/no");


	} 

	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;


}
*/