function mostrar() {
	let destino = document.getElementById("txtIdDestino").value;
	let estacion = document.getElementById("txtIdEstacion").value;
	const base = 15000;


	if (estacion == "Invierno" && destino == "Bariloche") {
		alert("Precio final para Bariloche es de " + base * 1.20);
	}
	else if (estacion == "Invierno" && destino == "Cataratas") {
		alert("Precio final para Cataratas es de " + base * 0.90);
	}
	else if (estacion == "Invierno" && destino == "Cordoba") {
		alert("Precio final para Cordoba es de " + base * 0.90);
	}
	else if (estacion == "Invierno" && destino == "Mar del plata") {
		alert("Precio final para Mar del plata es de " + base * 0.80);
	}
	else if (estacion == "Verano" && destino == "Bariloche") {
		alert("Precio final para Bariloche es de " + base * 0.80)
	}
	else if (estacion == "Verano" && destino == "Cataratas") {
		alert("Precio final para Cataratas es de " + base * 1.10);
	}
	else if (estacion == "Verano" && destino == "Cordoba") {
		alert("Precio final para Cordoba es de " + base * 1.10);
	}
	else if (estacion == "Verano" && destino == "Mar del plata") {
		alert("Precio final para Mar del plata es de " + base * 1.20);
	}
	
	switch (estacion) {
		case "Otoño":
		case "Primavera":
			if (destino == "Bariloche" || destino == "Cataratas" || destino == "Mar del plata") {
				alert("Precio final  es de " + base * 1.10);
			}
			else {
				alert("Precio final para Cordoba es de " + base);
			}
			break;
	}



}


