/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
// var banderaDelPrimero;
let	num;
let	max;
let min;
let resp;

//iniciar variables
//banderaDelprimero="es el primero";

resp='s';

num = parseInt(prompt("Ingrese un numero: "));
min = num;
max = num;
resp = prompt("Ingresa otro? s/n");


while(resp=='s')
{
	num = parseInt(prompt("Ingrese un numero: "));
	if(num<min)
	{
		min=num;
	}else if(num>max){
		max=num;
	}
	resp= prompt("Ingresa otro? s/n");
}

document.getElementById("txtIdMaximo").value = max;
document.getElementById("txtIdMinimo").value = min;


}//FIN DE LA FUNCIÓN