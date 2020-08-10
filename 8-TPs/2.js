/*
De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
punto 
*/
function mostrar2(){
    producto;
    respuesta="si";
    marca;
    precio=0;
    acumuladorPeso=0;
    peso=0;
    banderaLiquido=0;
    banderaSolido=0;
    tipo;

    while(respuesta =="si"){
        marca=prompt("Marca del producto");
        precio=parseFloat(pomrpt("Ingrese el precio"));
        while (precio<0) {
            precio=parseFloat(pomrpt("Error. Ingrese el precio"));  
        }
        peso=parseFloat(prompt("Ingrese el peso en Kilos"));
        while (peso<0) {
            peso=parseFloat(prompt("Error. Ingrese el peso en Kilos"));
        }
        acumuladorPeso+=peso;
        tipo=prompt("Que tipo de producto es solido/liquido: ").toLowerCase();
        while (!(tipo == "solido" || tipo == "liquido")) {
            tipo=prompt("Error. Que tipo de producto es solido/liquido: ").toLowerCase();
        }
        switch (tipo) {
            case "solido":
            if(banderaSolido==0 || banderaSolido > peso)  {
                banderaSolido=peso;
            } 
                break;        
            default:
            if(banderaLiquido==0 || banderaLiquido<precio){
                banderaLiquido=nombre;
            }
                break;
        }


        respuesta=prompt("Quiere ingresar otro producto? si/no");
    }
    console.log("a)El peso total de la compra es de " + acumuladorPeso);
    console.log("b)la marca del más caro de los líquidos: " + banderaLiquido);
    console.log("c)la marca del más liviano de los sólidos: " + banderaSolido);
}