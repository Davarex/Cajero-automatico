const form_test = document.getElementById("form-test");

const cuentas = [
    { nombre: "Mali", saldo: 200, password: "helloworld" },
    { nombre: "Gera", saldo: 290, password: "abc" },
    { nombre: "Maui", saldo: 67, password: "123" }
];
function view_main(params) {
    return `
    <main id="cambiar-fondo">
    
    <img width="400px"
    src="https://images.unsplash.com/photo-1592609931095-54a2168ae893?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80" 
    alt="FOTO PC">
    <button>Cambiar</button>
    </main> //poner una clase al template a los botones o lo que haya para realizar estilos en css
    `
}
const verifica_user = usrs_data.filter((user)=> user.name == "mali" && user.password === "helloworld"); //solucion para solucionar el user y password, validación


function getInfo(arreglo, user_value) {
    /* return arreglo.map((index)=>(index.nombre)); */ //recorre el arreglo y devuelve cada una de las posiciones del arreglo si ponemos index,name solo los nombres, index todo el arreglo, index.password
    return arreglo.filter((index)=>index.nombre === user_value && true);
}
//si me devuelve un objeto significa que inicie sesion, si no no inicio sesion ya que no son iguales
/* form_test.addEventListener("submit", ()=>{
    mensaje();
}); */

form_test.addEventListener("submit", (e)=>{
    e.preventDefault();
    const nombre_target = e.target.usuario.value; //aqui la e que es el padre buscamos el target despues el usuario que esta en el name de html y por ultimo value
    //el name se puede desde aqui con jquery o getelement es con id o class
    const state = true;

    if (state) {
        form_test.innerHTML = view_main();
    } else {
        console.log("Error al iniciar sesion");
    }

    //console.log(getInfo(cuentas, nombre_target));
});