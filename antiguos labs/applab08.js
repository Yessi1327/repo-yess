//Importar librerias
const { isUtf8 } = require('buffer');//QUE ES ESTO
const file_system = require('fs');
const http = require("http");

// =Problema 1=
// Función que recibe un arreglo de números y devuelve su promedio.
function calcularPromedio(arr) {
    //Verifica si el arreglo esta vacio y si si retorna 0
    let suma =0;
    if(arr.length === 0) return 0;

    // Itera sobre cada elemento del arreglo.
    //length devuelve la longitud del arreglo
    for (let i = 0; i < arr.length; i++) { 
        // Suma el valor actual a 'suma'.
        suma += arr[i]; 
    }
    return suma / arr.length;
}


const arregloNumeros = [10, 20, 30, 40, 50];
console.log("El promedio de", arregloNumeros, "es:", calcularPromedio(arregloNumeros));

//=Problema 2=
//Función que recibe un string y lo escribe en un archivo de texto.
//Escritura sincronico bloqueo el sistema y pregunta algo y estara bloqueado hasta que te responda
    file_system.writeFileSync("Problema 2","hola aqui se escribio un archivo con el texto de la string que acabamos de escribir desde la aplicación web")
    console.log("Se ha escrito el archivo 'problema2.txt'");

//=Problema 3=   
//Ejemplo de un problema implementado en c++ funcion recursiva: calcular el factorial de un número.
function factorial(n) {
    //no se saca factorial de negativos
    if(n < 0) return undefined;  
    if(n === 0) return 1;
    return n * factorial(n - 1);
}

const numero = 5;
console.log(`El factorial de ${numero} es:`, factorial(numero));

//=Problema 4=

    //Ahora si vamos a meter una pagina web de la foma correcta. El css no va funcionar por que eso lo aprenderemos despues 

    //Para meter el html
    const html = file_system.readFileSync ('index.html');

    //Construccion de la app.web
    const server =  http.createServer( (request, response) => {
        console.log (request.url);
        response.setHeader("Content-type", "text/html");
        response.write(html);
        response.end();
        

    });

   

    //escucha el puerto 3000
    //localhost 3000
    // 127.0.01 3000
    // home: 3000
    server.listen (3000);
    console.log("La pagina fue cargada en el puerto 3000");

    /*Siempre que haces una peticion al navegador el hace otra para pedir el icono
    Para mandar una solicitud tienes que poner su ip de su servidor*/

