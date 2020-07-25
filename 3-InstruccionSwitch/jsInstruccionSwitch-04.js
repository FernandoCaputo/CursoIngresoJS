function mostrar()
{
//tomo la edad  
var month = document.getElementById("txtIdMes").value;

switch (month)
{
    case ("Febrero") : 
        alert("Tiene 28 dias")
        break;

    case ("Marzo") : 
    case ("Abril") : 
    case ("Junio") : 
    case ("Septiembre") :
    case ("Noviembre") : 
        alert("Tiene 30 dias")
        break;

    case ("Enero") : 
    case ("Mayo") : 
	case ("Julio") : 
	case ("Agosto") : 
    case ("Octubre") :
    case ("Diciembre") : 
        alert("Tiene 31 dias")
        break;
}


	
	



}//FIN DE LA FUNCIÓN
