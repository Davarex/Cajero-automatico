/* const list = document.querySelector(".list");

const items = document.querySelectorAll(".item");

const btn_send = document.querySelector(".btn-send");
 */
/* 
addEventListener()
recibe 3 parametros
evento -> string
callback -> funcion anonima
estado -> boolean pero no es requerido totalmente
*/

/* Funcion
function sms(){
    console.log("Hola Mundo");

} */

/* btn_send.addEventListener("click",function(){
    //ejecucion del codigo en el function
    //console.log("ok");
    let paises = ["mexico", "colombia", "paraguay", "peru"];
    let contador = 0;

    for (const index of items) {
        
        index.textContent = paises[contador];
        contador++;

    }
}); */
const user = {
    email: "correo@correo.com",
    pass: "holaMundo!",

}

function template(sms){ //podria recibir titulo y texto, retur crear un article que reciba <h3>title<h3> <p>texto<p/>
    return ('<p>' + sms + '<p/>');
}
const loging_form = document.querySelector("#login-form");
const response = document.querySelector(".response");


loging_form.addEventListener("submit",function(event){
    event.preventDefault(); //previene que mande los datos a la url

    const email =loging_form["email"]; 
    const pass =loging_form["pass"];

    const state_login = user.email === email.value && user.pass === pass.value; //esta linea nos da el estado del login si son iguales los valores

    const final_state = state_login ? "LOGIN SUCCES" : "No te la sabes, time to phishing"; //con el ? nos dice si es true pones lo primero y luego : para si es false
    
    response.className= "text"; //poner clases de js para darle estilo en css

    response.innerHTML = template(final_state);

    }
);
