//ciclo while
/* var index = 0;
while (index<10){
    document.write(index + ", ");
    index++;
} */


/* var arreglo = [];
var userInput;
//el ! significa NO, mientras no este vacio es la instruccion de abajo, se sigue repitiendo
while (!(userInput=="")) {
    userInput = prompt("Ingresa una letra");
    arreglo.push(userInput);
}
document.writea("Valores introducidos: "+arreglo); */


//do while
/* var index = 0;
do {
    document.write(index + ", ");
    index++;
}while (index<=10); */

var frutas = ['Manzana','Pera','Limnon','Uva','Fresa'];

for (var index=0; index<frutas.length; index++){
    console.log(frutas[index]);
}