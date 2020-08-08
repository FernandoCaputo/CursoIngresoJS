function mostrar() {

	let divisores;
	let numero;

	numero = prompt("Ingrese un número");
	for (let i = 0; i != numero; i++) {
		if (numero % i == 0) {
			alert("El número " + i, " es un divisor de " + numero);
			divisores++;
		}
	}
	alert("La cantidad de divisores es de "+ divisores);

}//FIN DE LA FUNCIÓN