/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{

var clave = prompt("ingrese el número clave.");

while ( clave != "utn750" ) {

    alert ("clave incorrecta ");

    clave = prompt ("ingrese el numero clave ");



}

    alert ("Clave correcta: " + clave );

}
//FIN DE LA FUNCIÓN