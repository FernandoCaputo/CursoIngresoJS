/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let vNum1;
	let vNum2;
	let vresul;

	vNum1	=		parseInt(document.getElementById("txtIdNumeroUno").value);
	vNum2	=		parseInt(document.getElementById("txtIdNumeroDos").value);

	vresul= vNum1 +	vNum2;

	alert("La suma es: "+vresul);

}

function restar()
{
	let vNum1;
	let vNum2;
	let	vresult;

	vNum1	=	document.getElementById("txtIdNumeroUno").value;
	vNum1	=	parseInt(vNum1)
	vNum2	=	parseInt(document.getElementById("txtIdNumeroDos").value);

	vresult	=	vNum1 - vNum2;

	alert("La resta es: "+vresult);	

}

function multiplicar()
{ 
	let	vNum1;
	let	vNum2;
	let vresult;

	vNum1	=	parseInt(document.getElementById("txtIdNumeroUno").value);
	vNum2	=	parseInt(document.getElementById("txtIdNumeroDos").value);

	vresult		=	vNum1	*	vNum2

	alert("La multiplicación es: "+vresult);	

}

function dividir()
{

	let	vNum1;
	let	vNum2;
	let vresult;

	vNum1	=	parseFloat(document.getElementById("txtIdNumeroUno").value);
	vNum2	=	parseFloat(document.getElementById("txtIdNumeroDos").value);

	
	vresult		=	vNum1	/	vNum2

	alert("La división es: "+vresult.toFixed(2));

	// parseFloat me permite que el resultado tengo los decimales
	// var cuando quiero declarar una variable global, let cuando quiero declarar una variarle local.
	// toFixed() me permite que el resultado solo tenga los decimales que yo quiera.
}

