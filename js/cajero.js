var cuentas = [
    { nombre: "Mali", saldo: 200, password: "helloworld" },
    { nombre: "Gera", saldo: 290, password: "l33t" },
    { nombre: "Maui", saldo: 67, password: "123" }
];

let cuenta = prompt("Escribe el nombre de la cuenta que deseas ingresar");


for (let index = 0; index < cuentas.length; index++) {

    let intentos = 0;

    while(intentos < 1) {
        if(cuenta === cuentas[index].nombre){
            let contraseña = prompt("Contraseña de " +cuenta);
            if (contraseña === cuentas[index].password) {
                let opciones = prompt("Ingresa 1 para Consultar Saldo, 2 para Ingresar un monto, 3 para Retirar monto")
                if (opciones == 1) {
                    console.log("Tu saldo es de "+cuentas[index].saldo)
                } else if (opciones == 2) {
                    let monto_ingresado = parseInt(prompt("¿Cual es el monto que deseas ingresar?"));
                    let saldo_final = monto_ingresado + cuentas[index].saldo;
                    cuentas[index].saldo=saldo_final;
                    if (saldo_final>990) {
                        console.log("No puede ingresar a su cuenta más de $990")
                        
                    } else {
                        console.log("Ingreso a su cuenta: $"+monto_ingresado+". Su nuevo saldo es de: $"+cuentas[index].saldo);
                    }
                    
                } else {
                    let monto_retirado = parseInt(prompt("¿Cual es el monto que deseas retirar?"));
                    let saldo_finalm = cuentas[index].saldo - monto_retirado;
                    if (saldo_finalm<10) {
                        console.log("No puede dejar su cuenta con menos de $10 :(")
                        
                    } else {
                        console.log("Retiro de su cuenta: $"+monto_retirado+". Su nuevo saldo es de: $"+saldo_finalm);
                    }
                }
                break;
            } else {
                console.log("Contraseña incorrecta");
                contraseña = prompt("2 intento, contraseña de " +cuenta);
                if (contraseña === cuentas[index].password) {
                    let opciones = prompt("Ingresa 1 para Consultar Saldo, 2 para Ingresar un monto, 3 para Retirar monto")
                    if (opciones == 1) {
                        console.log("Tu saldo es de "+cuentas[index].saldo)
                    } else if (opciones == 2) {
                        let monto_ingresado = parseInt(prompt("¿Cual es el monto que deseas ingresar?"));
                        let saldo_final = monto_ingresado + cuentas[index].saldo;
                        if (saldo_final>990) {
                            console.log("No puede ingresar a su cuenta más de $990")
                            
                        } else {
                            console.log("Ingreso a su cuenta: $"+monto_ingresado+". Su nuevo saldo es de: $"+saldo_final);
                        }
                        
                    } else {
                        let monto_retirado = parseInt(prompt("¿Cual es el monto que deseas retirar?"));
                        let saldo_finalm = cuentas[index].saldo - monto_retirado;
                        if (saldo_finalm<10) {
                            console.log("No puede dejar su cuenta con menos de $10 :(")
                            
                        } else {
                            console.log("Retiro de su cuenta: $"+monto_retirado+". Su nuevo saldo es de: $"+saldo_finalm);
                        }
                    }

                break;
                } else {
                    console.log("Contraseña incorrecta");
                    contraseña = prompt("3 intento, contraseña de " +cuenta);
                    if (contraseña === cuentas[index].password) {
                        let opciones = prompt("Ingresa 1 para Consultar Saldo, 2 para Ingresar un monto, 3 para Retirar monto")
                        if (opciones == 1) {
                            console.log("Tu saldo es de "+cuentas[index].saldo)
                        } else if (opciones == 2) {
                            let monto_ingresado = parseInt(prompt("¿Cual es el monto que deseas ingresar?"));
                            let saldo_final = monto_ingresado + cuentas[index].saldo;
                            if (saldo_final>990) {
                                console.log("No puede ingresar a su cuenta más de $990")
                                
                            } else {
                                console.log("Ingreso a su cuenta: $"+monto_ingresado+". Su nuevo saldo es de: $"+saldo_final);
                            }
                            
                        } else {
                            let monto_retirado = parseInt(prompt("¿Cual es el monto que deseas retirar?"));
                            let saldo_finalm = cuentas[index].saldo - monto_retirado;
                            if (saldo_finalm<10) {
                                console.log("No puede dejar su cuenta con menos de $10 :(")
                                
                            } else {
                                console.log("Retiro de su cuenta: $"+monto_retirado+". Su nuevo saldo es de: $"+saldo_finalm);
                            }
                        }

                break;
                }
                } 
            
        }} else {
        break;
        intentos++;
    }}
        
    
}


/* console.log(cuentas[1].nombre);
console.log(cuentas.length); */