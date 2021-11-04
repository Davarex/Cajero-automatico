//Reto palindromo
/* 
var oracion = prompt("Escribe una palabra para saber si es palindromo");
function palindromo(oracion) {
    const strReversed = oracion.split("").reverse().join("")
    return oracion === strReversed ? "La oracion "+oracion+" es un palindromo" : "La oracion "+oracion+" no es un palindromo";
}  

console.log(palindromo(oracion)); */



 


//Reto Pais con más letras
/*     const paises = ["México","Panama","Argentina","Honduras","USA"]

for (let index = 0; index < paises.length; index++) {
    if (paises[index].length>=paises[0].length && paises[index].length>=paises[1].length) {
        if (paises[index].length>=paises[2].length && paises[index].length>=paises[3].length) {
            if (paises[index].length>=paises[4].length) {
                console.log("El pais " +paises[index] + ", tiene más letras");
                
            }
            
        }
        
    }
    
    
} */

const paises = ["México","Panama","Argentina","Honduras","USA"]
function longestCountry(paises) {
    let cantidad_letras = 0;
    let pais_mayor;

    paises.forEach(pais => {
        if (pais.replace(/ /g,"").length > cantidad_letras) {
            cantidad_letras = pais.length;
            pais_mayor = pais;
            
        }
    });
    /* for (const pais of paises) {
        if (pais.replace(/ /g,"").length > cantidad_letras) {
            cantidad_letras = pais.length;
            pais_mayor = pais;
            
        }
    } */

    return pais_mayor;
}

console.log(longestCountry(paises));

//Reto Farenhei a Celsius
/* const farenheit = prompt("Ingresa grados Farenheit");

function farenheit_celsius(farenheit){

    const celsius = ((farenheit-32)*(5/9));

    return celsius;

}

console.log(farenheit + "° F es igual a " +farenheit_celsius(farenheit) + "° Celsius"); */

//Reto valor de todos los parametros que se incluyeron
const parametros_infinitos = (...parametros) => parametros.length;
console.log(parametros_infinitos("hola",1,2,5,"k",{clave: "valor"}));