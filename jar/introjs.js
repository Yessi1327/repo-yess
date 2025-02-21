// consola (log, info, warn, error, assert)

// función que se usa para imprimir mensajes en la consola del navegador
//Ayuda a verificar valores de variables y objetos
//Permite entender cómo se están ejecutando las funciones
//Mensajes informativos
console.log("Aquí se publica los laboratorios");

let nombre =  "Yessica";
console.log("El nombre es:", nombre);

//Igual imprimen mensajes en la consola.
//Generalmente se muestra con un ícono de información
console.info("Los laboratorios sirven para crear competencias");

//Para advertir sobre el uso de funciones obsoletas 
//Para alertar sobre valores inesperados o posibles errores
//Para resaltar problemas que podrían causar fallos
console.warn("Cuidado con hacer los laboratorios tarde jeje");

//Mensajes de error graves.
console.error("No se cargo el laboratorio aahhh :/");

console.assert(1 == 1);
//Esto da error
//console.assert(1 === "1"); //tipo
console.assert(1 == "1"); //valor
console.assert(1 == true);
//Esto da error
//console.assert(1 === true);

// variables, constantes

//Antigua forma de declarar variables
var dinosaurio = "T-Rex";
console.log(dinosaurio)

//Nueva forma de declarar variables, solo viene en el ámbito declarado
let felino = "Tigre";

//Para que no cambie
const precio= 20.00;

// Alcance de las variables
// cuando se acabe el ciclo, la variable i muere entonces no se 
// puede ejecutar fuera del ciclo
for (let i = 0; i <= 10; i++){
    
    console.log(i); 
}

 //da error por que i no existe fuera del for
//console.log(i); 

//Manda una alerta al iniciar la pagina
alert("En esta pagina accederas a mucho conocimiento, cuidado ;o");

//Manda una pregunta con un campo a responder 
const pregunta = prompt("Cual es tu dino favorito?");

//Sale una ventana para que confirme una pregunta debuelve un booleano
const tienes_hambre = confirm("Te gustaria aprender");

// funciones
function alimenta_d(){
    console.log("Los dinosaurios te comieron");
    return pregunta;
}

const dino = alimenta_d();

//funciones anonimas
()=>{}

//Asignas una función anonima a una variable
const funcion_anonima = () => {
    console.log("funcion_anonima");
};

//Ejecuta la funcion anonima por la variable
funcion_anonima();

// undefined, pq los paramatros no se le pueden meter a la variable
const suma = (x,y,z) => {
    x + y + z 
};

console.log(suma(1,2,3));




