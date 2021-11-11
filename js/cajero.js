const form_test = document.getElementById("formulario");

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

function view_salida(params) {
    return `
    <main id="error">
    
    <img width="400px"
    src="https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1429&q=80" 
    alt="FOTO PC">
    <h1>ERROR, Usuario o contraseña incorrecto:(</h1>
    </main> 
    `
}

/* function view_main(params) {
    return `
    <main id="opciones">
    
    <h1>¿Que desea hacer?</h1>
    <button name="saldo">Verificar saldo</button>
    <button name="depositar">Ingresar dinero</button>
    <button name="retirar">Retirar dinero</button>
    </main> 
    `
} */
//poner una clase al template a los botones o lo que haya para realizar estilos en css
form_test.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nombre_target = e.target.usuario.value; 
    const contra_target = e.target.contraseña.value;
        do {
        if (getInfo(cuentas,nombre_target,contra_target) > 0) {
            let movimiento= 1;
            while (movimiento<2){
                movimiento = Number(prompt(`Presiona:
                    1. Para hacer un movimiento 
                    2. Para salir`));

                if (movimiento==1) {
                    let opciones = Number(prompt(`Ingresa la operación que desea hacer:
                    1. Veificar saldo
                    2. Ingresar monto
                    3. Retirar monto
                    `));
    
                    switch (opciones) {
                        case 1:
                            alert("Tu saldo es de "+cuentas[indexuser(nombre_target)].saldo);
                            break;
    
                        case 2:
                            let monto_ingresado = Number(prompt("¿Cual es el monto que deseas ingresar?"));
                            let saldo_final = suma(monto_ingresado,cuentas[indexuser(nombre_target)].saldo);
                            cuentas[indexuser(nombre_target)].saldo=saldo_final;
                                if (saldo_final>990) {
                                    let saldonew = cuentas[indexuser(nombre_target)].saldo - monto_ingresado;
                                    cuentas[indexuser(nombre_target)].saldo = saldonew;
                                    alert(`No puede ingresar a su cuenta más de $990. 
                                    Su saldo actual es de `+saldonew);
                        
                                } else {
                                    alert(`Ingreso a su cuenta: $ ${monto_ingresado}. 
                                    Su nuevo saldo es de: $${cuentas[indexuser(nombre_target)].saldo}.`);
                                }
                            break;
    
                        case 3:
                            let monto_retirado = Number(prompt("¿Cual es el monto que deseas retirar?"));
                            let saldo_finalm = resta(cuentas[indexuser(nombre_target)].saldo,monto_retirado);
                            cuentas[indexuser(nombre_target)].saldo=saldo_finalm;
                             if (saldo_finalm<10) {
                                let saldonewm = cuentas[indexuser(nombre_target)].saldo + monto_retirado;
                                cuentas[indexuser(nombre_target)].saldo = saldonewm;
                                alert(`No puede dejar su cuenta con menos de $10 :(. 
                                    Su saldo actual es de ${cuentas[indexuser(nombre_target)].saldo}`)
                        
                             } else {
                                alert(`Retiro de su cuenta: $${monto_retirado}. 
                                Su nuevo saldo es de: $${cuentas[indexuser(nombre_target)].saldo}`);
                             }
                            break;
                    
                        default:
                            alert("No selecciono ninguna opción");
                            break;
                    }
                } else{
                    //form_test.innerHTML = view_salida();
                    alert("Gracias por visitarnos, vuelva pronto");
                    break;
            }}
            
            
        
        }else{ 
            alert("Usuario o contraseña incorrectos. Intenta de nuevo");
        }} while (getInfo(cuentas,nombre_target,contra_target)>0);
});
