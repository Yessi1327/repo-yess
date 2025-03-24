
//librerias
const express = require('express');
const path = require("path");
const bodyParser = require("body-parser");
const multer = require('multer');
//Incvocas el constructor de express y hace la app y la guarda en el servidor de app las combenciones dicen que le pongas ap
const app = express();

const session = require('express-session');

app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
    resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
    saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));


//dirname es para que se haga la ruta completa de un directorio
app.use(express.static(path.join(__dirname, "public")));

//Para usar el motor de templates de ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

// Aqui configure que utilice el body parser en vez de use
app.use(bodyParser.urlencoded({extended: false}));


//fileStorage: Es nuestra constante de configuración para manejar el almacenamiento
const fileStorage = multer.diskStorage({
    destination: (request, file, callback) => {
        //'uploads': Es el directorio del servidor donde se subirán los archivos 
        callback(null, 'public/uploads');
    },
    filename: (request, file, callback) => {
        //aquí configuramos el nombre que queremos que tenga el archivo en el servidor, 
        //para que no haya problema si se suben 2 archivos con el mismo nombre concatenamos el timestamp
        callback(null, new Date().getMilliseconds() + file.originalname);
    },
});
//En el registro, pasamos la constante de configuración y
//usamos single porque es un sólo archivo el que vamos a subir, 
//pero hay diferentes opciones si se quieren subir varios archivos. 
//'archivo' es el nombre del input tipo file de la forma
app.use(multer({ storage: fileStorage }).single('imagen')); 



const csrf = require('csurf');
const csrfProtection = csrf(); 
app.use(csrfProtection); 

//importar un modulo


const zooRoutes = require("./routes/zoo.routes");
//PARA QUE el router se lo cuelgas a las demas rutas
app.use('/zoo', zooRoutes);

const usersRoutes = require("./routes/users.routes");
app.use('/users', usersRoutes);

const infoRoutes = require("./routes/info.routes");
app.use('/info', infoRoutes);



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