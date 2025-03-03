
//librerias
const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
//Incvocas el constructor de express y hace la app y la guarda en el servidor de app las combenciones dicen que le pongas ap
const app = express();

//dirname es para que se haga la ruta completa de un directorio
app.use(express.static(path.join(__dirname, "public")));

//Para usar el motor de templates de ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Aqui configure que utilice el body parser en vez de use
app.use(bodyParser.urlencoded({extended: false}));

//express funciona atravez de middleware usando use y recibe tres 
//parametros request: peticion response: respuesta, hay gente que le pone req y resp
//next lo que hace es pasar al siguiente midelware

//PARA QUE importar un modulo
const zooRoutes = require("./routes/zoo.routes");
//PARA QUE el router se lo cuelgas a las demas rutas
app.use('/zoo', zooRoutes);


// cualquier otra ruta entra esta por que esta es la global
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

// send es la combinacion de las tres lineas el set header el write y el end 
app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.send('¡Hola mundo!'); //Manda la respuesta
});

/*//Forma tradicional sin usar includes
app.use("/plantas/agregar",(request, response, next)=> {
    response.send(html_header+html_form+html_footer);
});*/

console.log(__dirname)
// 404 tiene que ser tu ultimo midelware

//escucha por el puerto 3000
app.listen(3000);