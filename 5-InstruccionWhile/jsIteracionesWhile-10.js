/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{

	let numero;
	let sumNeg = 0;
	let sumPos = 0;
	let cantPos = 0;
	let cantNeg = 0;
	let cantCeros = 0;
	let cantPares = 0;
	let promPos = 0;
	let promNeg = 0;
	let diferencia;
	let respuesta;

	do {

		numero = parseInt ( prompt (" Ingrese un numero : "));
		
		// ----------------------------SIGNOS --------------------------------------------------- 
		if ( numero > 0 ){

			sumPos = sumPos + numero;

			cantPos++;

		}
		else if ( numero < 0 ) {

			sumNeg = sumNeg + numero;

			cantNeg++;

		}
		else { 

			cantCeros++;

		}

		//----------------------------------- NUMEROS PARES -------------------------------------------------

		if (numero % 2 == 0 ) {

			cantPares++;

		}

		respuesta = prompt (" Desea continuar ? : si/no");
		
	}



	while(respuesta == "si");

	if ( sumPos != 0 ){

		promPos = sumPos / cantPos ;

	}
	
	if ( sumNeg != 0 ){

		promNeg = sumNeg / cantNeg; 
	}

	diferencia = sumPos - sumNeg;
	


	document.write ( "1-Suma de los negativos. " + sumNeg + "<br>");
	document.write ( "2-Suma de los positivos. " + sumPos + "<br>");
	document.write ( "3-Cantidad de positivos.  " + cantPos + "<br>");
	document.write ( "4-Cantidad de negativos.  " + cantNeg + "<br>");
	document.write ( "5-Cantidad de ceros.  " + cantCeros + "<br>");
	document.write ( "6-Cantidad de números pares. " + cantPares + "<br>");
	document.write ( "7-Promedio de positivos. " + promPos + "<br>");
	document.write ( "8-Promedios de negativos. " + promNeg + "<br>");
	document.write ( "9-Diferencia entre positivos y negativos. " + diferencia + "<br>");


 }
//FIN DE LA FUNCIÓN
