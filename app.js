
//PARA QUE libreri 
const express = require('express');
//Incvocas el constructor de express y hace la app y la guarda en el servidor de app las combenciones dicen que le pongas ap
const app = express();

// PARA QUE libreria
const bodyParser = require("body-parser");
// aqui configure que utilice el body parser
app.use(bodyParser.urlencoded({extended: false}));

//express funciona atravez de middleware usando use y recibe tres 
// parametros request: peticion response: respuesta, hay gente que le pone req y resp
//next lo que hace es pasar al siguiente midelware
//imprime en la consola en 
//Middleware

// cualquier otra ruta entra esta por que esta es la global
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

//PARA QUE importar un modulo
const plantasRoutes = require("./routes/plantas.routes");
//PARA QUE el router se lo cuelgas a las demas rutas
app.use('/plantas', plantasRoutes);


/*//primera ruta añadida
app.use("/plantas/agregar",(request, response, next)=> {
    response.send(html_header+html_form+html_footer);
});*/

// send es la combinacion de las tres lineas el set header el write y el end 
app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

// 404 tiene que ser tu ultimo midelware

//escucha por el puerto 3000
app.listen(3000);