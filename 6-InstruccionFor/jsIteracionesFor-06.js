function mostrar()
{
	let num;
	let cont=0;

	num = parseInt(prompt("Ingrese la cantidad de números"));

	for (let i = 1; i<=num; i++ )
	{
		if(i%2==0){
			alert("El número "+i+"es par.");
			cont++;
		}
	}

	alert(" Se encontraron "+ cont+" números pares");



}//FIN DE LA FUNCIÓN