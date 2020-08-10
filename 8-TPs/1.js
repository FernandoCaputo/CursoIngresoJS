/*
De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
punto 2
*/
function mostrar(){
let nombre;
let edad=0;
let sexo;
let cantidadF=0;
let cantidadM=0;
let banderaNombre;
let banderaTemperatura=0;

for (let i = 1; i <= 5; i++) {
    nombre = prompt("Ingresar nombre: ");
    temperatura = parseFloat(prompt("Ingresar temperatura: "));
    sexo = prompt("Ingresar tu sexo: F/M").toLowerCase();
    while (!(sexo == "f" || sexo == "m")) {
        sexo = prompt("Error. Ingresar tu sexo: F/M").toLowerCase();
    }
    if(sexo=="f"){
        cantidadF++;
    }else{
        cantidadM++;
    }
    edad = parseInt(prompt("Ingresar tu edad"));
    if(banderaTemperatura == 0 || sexo == "f" && temperatura>banderaTemperatura){
        banderaNombre=nombre;
        banderaTemperatura=temperatura;
    }
    console.log(i + " Nombre: " + nombre + " y su sexo " + sexo);        
}
    if(cantidadF>0){
        console.log("Cantidad mujeres " + cantidadF);
    }
    else if(cantidadM>0){
        console.log("Cantidad hombres " + cantidadM);
    }
    console.log("Edad promedio "+ (edad/5));
    if(!(banderaTemperatura == 0)){
        console.log("La mujer con mas temp es " + banderaNombre + " y su temp es " +banderaTemperatura);
    }
}