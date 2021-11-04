//spread operator
function master(programa, ...senseis){
    return `${programa} tiene ${senseis} senseis`;
}

console.log(master("Master en Coding", "Danny","Fabricio"));


//old function
/* function suma(n1,n2){
    return n1+ n2;
} 
console.log(suma(2,3));
*/


//new function

/* 
const suma = (n1,n2) => {
    return n1+n2;
}; 
console.log(suma(2,3));
*/

const suma = (n1, ...addNumbers) => Number(n1 + addNumbers);

const result = suma(3,2,2,3,4);

console.log(result);

console.log();