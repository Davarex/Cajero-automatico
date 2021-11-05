var cuentas = [
    { nombre: "Mali", saldo: 200, password: "helloworld" },
    { nombre: "Gera", saldo: 290, password: "abc" },
    { nombre: "Maui", saldo: 67, password: "123" }
];

let cuenta = prompt("Escribe el nombre de la cuenta que deseas ingresar");

function suma(num1,num2){
    let resultado = num1 + num2;
    return resultado;
}

function resta(num1,num2){
    let resultado = num1 - num2;
    return resultado;
}

for (let index = 0; index < cuentas.length; index++) {
        if(cuenta === cuentas[index].nombre){
            let contraseña;
            do {
                contraseña = prompt("Contraseña de " +cuenta);
            if (contraseña === cuentas[index].password) {
                let movimiento= 1;
                while (movimiento<2) {
                    movimiento = Number(prompt(`Presiona:
                    1. Para hacer un movimiento 
                    2. Para salir`));
                if (movimiento==2) {
                    console.log("Gracias por visitarnos, vuelva Pronto");
                    break;
                } else{
                    let opciones = Number(prompt(`Ingresa la operación que desea hacer:
                    1. Veificar saldo
                    2. Ingresar monto
                    3. Retirar monto
                    `));

                    switch (opciones) {
                        case 1:
                            console.log("Tu saldo es de "+cuentas[index].saldo)
                            break;

                        case 2:
                            let monto_ingresado = Number(prompt("¿Cual es el monto que deseas ingresar?"));
                            let saldo_final = suma(monto_ingresado,cuentas[index].saldo);
                            cuentas[index].saldo=saldo_final;
                                if (saldo_final>990) {
                                    console.log("No puede ingresar a su cuenta más de $990")
                        
                                } else {
                                    console.log("Ingreso a su cuenta: $"+monto_ingresado+". Su nuevo saldo es de: $"+cuentas[index].saldo);
                                }
                            break;

                        case 3:
                            let monto_retirado = Number(prompt("¿Cual es el monto que deseas retirar?"));
                            let saldo_finalm = resta(cuentas[index].saldo,monto_retirado);
                             if (saldo_finalm<10) {
                                console.log("No puede dejar su cuenta con menos de $10 :(")
                        
                             } else {
                                 console.log("Retiro de su cuenta: $"+monto_retirado+". Su nuevo saldo es de: $"+saldo_finalm);
                             }
                            break;
                    
                        default:
                            console.log("No selecciono ninguna opción")
                            break;
                    }
            }
            }}else{
                console.log("Contraseña incorrecta")
            }} while (!(contraseña === cuentas[index].password));
            
        }
}