const form_test = document.getElementById("formulario");
const root = document.getElementById("root");
const saldo_op = document.getElementById("saldo");

const cuentas = [
    { nombre: "Mali", saldo: 200, password: "helloworld" },
    { nombre: "Gera", saldo: 290, password: "abc" },
    { nombre: "Maui", saldo: 67, password: "123" }
];

function suma(num1,num2){
    let resultado = num1 + num2;
    return resultado;
}

function resta(num1,num2){
    let resultado = num1 - num2;
    return resultado;
}

function getInfo(arreglo, user_value, pass_value) {
    /* return arreglo.map((index)=>(index.nombre)); */ //recorre el arreglo y devuelve cada una de las posiciones del arreglo si ponemos index,name solo los nombres, index todo el arreglo, index.password
    const verify = arreglo.filter((index)=>index.nombre === user_value && index.password === pass_value); 
    return verify.length;
}
function indexuser(user_value) {
    switch (user_value) {
        case "Mali":
            return index = 0;

        case "Gera":
            return index = 1;

        case "Maui":
            return index = 2;

        default:
            break;
    }
}

function btn_movimientos(params) {
    return `
    
    <h1>¿Que desea hacer?</h1>
    <button id="btn1">Verificar saldo</button>
    <button id="btn2">Ingresar dinero</button>
    <button id="btn3">Retirar dinero</button>
    `
}

form_test.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nombre_target = e.target.usuario.value; 
    const contra_target = e.target.contraseña.value;
    
        if (getInfo(cuentas,nombre_target,contra_target)>0) {
            e.target.remove();
            root.innerHTML = btn_movimientos();
            root.addEventListener("click", (event)=>{
                const state = event.target.tagName === "BUTTON";
            
                if (state) {
                    
                    switch (event.target.id) {
                        case "btn1":
                            saldo_op.innerHTML = `
                            <h1>Tu saldo es de ${cuentas[indexuser(nombre_target)].saldo}</h1>
                            `;
            
                            break;
            
                        case "btn2":
                            let monto_ingresado = Number(prompt("¿Cual es el monto que deseas ingresar?"));
                            let saldo_final = suma(monto_ingresado,cuentas[indexuser(nombre_target)].saldo);
                            cuentas[indexuser(nombre_target)].saldo=saldo_final;
                            if (saldo_final>990) {
                                let saldonew = cuentas[indexuser(nombre_target)].saldo - monto_ingresado;
                                cuentas[indexuser(nombre_target)].saldo = saldonew;
                                saldo_op.innerHTML = `<h1>No puede ingresar a su cuenta más de $990. 
                                Su saldo actual es de ${saldonew} </h1>`;
                            } else {
                                saldo_op.innerHTML = `<h1> Ingreso a su cuenta: $ ${monto_ingresado}. 
                                Su nuevo saldo es de: $${cuentas[indexuser(nombre_target)].saldo}.</h1>`;
                            }
                            break;
            
                        case "btn3":
                            let monto_retirado = Number(prompt("¿Cual es el monto que deseas retirar?"));
                            let saldo_finalm = resta(cuentas[indexuser(nombre_target)].saldo,monto_retirado);
                            cuentas[indexuser(nombre_target)].saldo=saldo_finalm;
                             if (saldo_finalm<10) {
                                let saldonewm = cuentas[indexuser(nombre_target)].saldo + monto_retirado;
                                cuentas[indexuser(nombre_target)].saldo = saldonewm;
                                saldo_op.innerHTML = `<h1> No puede dejar su cuenta con menos de $10 :(. 
                                    Su saldo actual es de ${cuentas[indexuser(nombre_target)].saldo}</h1>`;
                        
                             } else {
                                saldo_op.innerHTML = `<h1> Retiro de su cuenta: $${monto_retirado}. 
                                Su nuevo saldo es de: $${cuentas[indexuser(nombre_target)].saldo}</h1>`;
                             }
                        break;
                    
                        default:
                            
                            break;
                    }
                }
            });
        } else {
            alert("Contraseña o usuario incorrecto");
        }
});

