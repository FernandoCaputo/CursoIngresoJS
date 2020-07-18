/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var vNum1;
	var vNum2;
	var	suma;
	
	vNum1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	vNum2 = parseInt(document.getElementById("txtIdNumeroDos").value);

	suma = vNum1 + vNum2;

	alert("La suma es: " + suma);

}

//	alert("La suma es "+ (vNum1+vNum2));   otro ejemplo
//	parseInt convertirlo un texto (para que no se haga concatenado) y lo convierte en numero entero para realizar operciones