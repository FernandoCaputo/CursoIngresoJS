/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{

	let numero = parseInt ( prompt ("ingrese un número entre 0 y 10."));

	while ( numero < 0 || numero > 10 || isNaN (numero))
	 {

		alert ("Numero incorrecto !");

		numero = parseInt( prompt ("Ingrese un numero entre 0 y 10"));

	}
		
	document.getElementById("txtIdNumero").value = numero;
}//FIN DE LA FUNCIÓN