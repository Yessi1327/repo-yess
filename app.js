
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

//importar un modulo
const zooRoutes = require("./routes/zoo.routes");
//PARA QUE el router se lo cuelgas a las demas rutas
app.use('/zoo', zooRoutes);

const infoRoutes = require("./routes/info.routes");
app.use('/zoo/info', infoRoutes);

// 404 tiene que ser tu ultimo midelware
// send es la combinacion de las tres lineas el set header el write y el end 
app.use((request, response, next) => {
    console.log('Error 404!');
    //response.statusCode= 404; 
    response.render('error_404');//Manda la respuesta
});

console.log(__dirname)


//escucha por el puerto 3000
app.listen(3000);