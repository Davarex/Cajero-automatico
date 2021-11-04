/* const meses = ["enero","febrero","marzo","abril","mayo","junio","julio"];

const multiplica = [1,2,3,4,5];

const cicle_forEach = meses.forEach(index => console.log(index)); //nos da undefined problema del foreach

const cicle_mapMulti = multiplica.map((number) => number * 2);//lo que hace esto map devuelve una copia del arreglo inicial no lo modifica, el foreach si

const cicle_filter = multiplica.filter((number) => number > 2);//devuelve otro arreglo pero cumple una condicion

const cicle_map = meses.map((mes) => mes);

console.log(cicle_filter);
console.log(cicle_mapMulti); */

const words = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, illum veritatis. Beatae magni ex veniam in obcaecati vitae pariatur 
doloremque vero consectetur quod quia nobis totam, ducimus corporis rerum delectus? Doloremque, atque fugiat! Quod magni eos eaque consectetur iure 
fuga libero debitis laudantium architecto, dignissimos et eius nesciunt doloremque atque est impedit eligendi. Illum est omnis, repudiandae ipsam, 
ut similique cumque architecto, qui laboriosam odit soluta fugit error? Voluptatibus dicta ipsum cumque, aliquid aliquam ipsam placeat dolore facere 
beatae provident quae perferendis, similique labore doloremque animi perspiciatis ea. Id consequuntur asperiores cumque soluta architecto, modi 
perferendis temporibus eligendi libero molestiae!`

const words_array = words.split(" ");

console.log(words_array);