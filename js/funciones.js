function suma(num1,num2) {
    var total = num1 + num2;
    return total;
}

//console.log(suma(3,4));

function apellidoPaterno (nombreCompleto) {
    var datos =[];
    datos = nombreCompleto.split(" ");
    return datos[1];
}

/* var nombreCompleto = prompt("Como te llamas asshole?");
document.write(apellidoPaterno(nombreCompleto)); */

const carro = {
    marca:"Jetta", 
    modelo:"Sport", 
    año:"2020",
    automatico: true
};

//document.write("El carro es un " +carro.marca + ", el modelo es " +carro.modelo+ " del año " +carro.año +". Automatico: " +carro.automatico);

/* function numeritosPares (num){
    index = 0;
    var numerosPares = [];

    while (index <= num) {
        if (index > 0){
            if(index % 2== 0){
                numerosPares.push(index);
            }
        }
        index++;
    }
    return numerosPares;
} */

/* var numero = prompt("Dame un numero");
console.log(numeritosPares(numero)); */


function numeritosImpares (num1,num2){
    var numerosImpares = [];

    for (var index=0; index<num2; index++){
        if (index > num1){
            if(index % 2 != 0){
                numerosImpares.push(index);
            }
        }
    }
        index++;
    return numerosImpares;
}
var numI = prompt("Dame el numero de inicio");
var numF = prompt("¿Hasta cual numero?");
console.log(numeritosImpares(numI,numF));
