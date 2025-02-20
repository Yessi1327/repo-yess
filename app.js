
//Una aplicacion web es un sistenma distribuido, significa que esta regado y debes comunicarte con los servidores y archivos 
//esto implica conectarte a un archivo que no este en tu entorno
//

//Para ejecutar en node se pone en la terminal node app.js

//importa la libreria para manejar archivos require=import fs es la libreria de node 
const file_system = require('fs');

// escritura sincronico bloqueo el sistema y pregunta algo y estara bloqueado hasta que te responda
// si no se ejecuta es por que no lo guarde 
//Ahorita utiliza el Sync
file_system.writeFileSync("hola.txt","hola desde node")

// pero el asincronico no bloquea el sistema y por default node es asi 
// El codigo asincronico no se ejecuta en orden 
//Tiene una fila de eventos 

//Algoritmo de ordenamiento, codigo asincrono

setTimeout(() => { console.log("jojo te hackie")
    
}, 10000);

const arreglo = [5000,60,90,100,10,20,10000,0,120,2000,340,1000,50];
//No se ejecuta en oreden si no que ,se ejecuta cuando tu le dices por que los imprime en funcion del tiempo del valor del arreglo
//si hay dos elementos que se deban imprimir al mismo tiempo se hara por orden de fila
for ( let item of arreglo){
setTimeout(() => { console.log(item);
    
}, item);
}



