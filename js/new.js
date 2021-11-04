let valor = Number(prompt(`Ingresa la operación que desea hacer:
1. Sumar
2. Restar
3. Multiplicar
`));

let sms;

switch (valor) {
  case 1:
    sms = "Es una suma";
    break;

  case 2:
    sms = "Es una resta";
    break;
  case 3:
    sms = "Es una Multiplicacion";
    break;
  default:
    sms = "Invalida";
    break;
}

console.log(sms);