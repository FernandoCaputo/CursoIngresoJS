function mostrar() {
	let destino = document.getElementById("txtIdDestino").value




	switch (destino) {
		case "Bariloche":
			alert("Se encuentra al Oeste");
			break;
		case "Cataratas":
			alert("Se encuentra en el Norte")
			break;
		case "Mar del plata":
			alert("Se encuentra al Este");
			break;
		case "Ushuaia":
			alert("Se encuentra en el Sur");
			break;
		default:
			alert("Esta provincia no esta contemplada");
			break

	}




}//FIN DE LA FUNCIÓN

/*
function mostrar() {
	let destino = document.getElementById("txtIdDestino").value

if(destino =="Bariloche")
{
alert("Se encuentra al Oeste");
}
else if(destino == "Mar del plata")

{
alert("Se encuentra en el Este")
}
else if (destino == "Cataratas")
{
	alert("Se encuentra en el Norte")
}
else (destino == "Ushuaia")
{
alert("Se encuentra en el Sur");
}
}

			*/