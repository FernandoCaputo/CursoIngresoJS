function mostrar() {
	let  num;
	for ( ; ; ) {
		num = parseInt(prompt("Ingrese un numero "));
		alert("Se ingreso el " + num);
		if (num == 9) {
			break;
		}
	}


}//FIN DE LA FUNCIÓN