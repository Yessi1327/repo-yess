const express = require('express');
// las combenciones dicen que le pongas app
const app = express();

//express funciona atravez de middleware usando use y recibe tres 
// parametros request: peticion response: respuesta, hay gente que le pone req y resp
//next lo que hace es pasar al siguiente midelware
//imprime en la consola en 
//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// send es la combinacion de las tres lineas el set header el write y el end 
app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

//escucha por el puerto 3000
app.listen(3000);