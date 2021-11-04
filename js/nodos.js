//const $home = document.getElementById("home"); //devuelve un objeto

//const $article = document.getElementsByTagName("article"); //Esto devuelve un arreglo, segun 

//const $item = document.getElementsByClassName("item"); //Tambien devuelve un arreglo

/* const $query_class = document.querySelector(".item");
const $query_class_all = document.querySelectorAll(".item");

console.log($query_class_all); */

/* const $item = document.querySelector(".item");

const sms = "QEONDA PERROooooooo0a"

$item.innerHTML = '<h1>' + sms + '</h1>';
 */

/* const $items = document.querySelectorAll(".item");

console.log($items[0].textContent); */


/* 1. Crear un arreglo de objetos que contenga:
    1.a debe tener titulo y texto
    
   2. Debe tener el html listo

   3. Debe usar un ciclo para pintar el arreglo en el html
    
    
    */

   /* const title = "Lorem ipsum dolor sit amet.";
   const description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam explicabo dicta doloremque dolore quaerat minus id dolorum beatae soluta a?";
   const datos = [
       {title,description},
       {title,description},
       {title,description}

   ];

   document.write(title); */

   const home = document.querySelector("#home");

   function template(titulo="sin titulo", texto="sin texto"){
       return `<article>
        <h1 style= "background-color: red;">${titulo}</h1> 
        <p style= "background-color: blue;"> ${texto} </p>
        </article>`;3
   }
   const data = [
        {titulo: "Los tres cochinitos", texto: "Texto1 asdasd" },
        {titulo: "Chivas campeon", texto: "Texto2 asfsadsgdsga",},
        {titulo: "Estetituloesel3",texto: "Texto3 asdfaewwexxxxwaqaawaaaaaa",},
        {titulo: "Ya se me acabaron las ideas",texto: "Texto4sss",},
     ];
   
   var index = 0;
   var user_input;
   user_input = prompt("¿Cuantos titulos deseas?");
   
   /* if (data.length>0){
   for (const dato of datos){
       home.innerHTML += template(dato.titulo, dato.texto);
   }
} */
   while (index<user_input){
    home.innerHTML += template(data[index].titulo,data[index].texto);
    index++;}