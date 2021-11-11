/* let valor = Number(prompt(`Ingresa la operación que desea hacer:
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

console.log(sms); */

let saldo_final = 1000;

function saldosuma(saldo_final) {
  if (saldo_final>990) {
    return "No puede ingresar a su cuenta más de $990";
  
  } else {
    return "Ingreso a su cuenta: $"+monto_ingresado+". Su nuevo saldo es de: $"+cuentas[index].saldo;
  }
}

console.log(saldosuma(saldo_final));