const path = require("path")
//Se deben pasar las variables y arreglos o funciones necesarias para tus controladores 
const animales = [];

//se le llama accion del controlador get_agregar
exports.get_agregar =(request, response, next)=> {
    //response.send(html_header+html_form+html_footer);
    response.render('agregar_animal');
    };

exports.post_agregar = (request, response, next)=> {
    //Hace un objeto tipo request
    console.log(request.body);

    animales.push(request.body.nombre);
    response.render('lista_animales', {
      animales: animales,
    });
};

exports.get_alimentar= (request,response, next)=>{
  
  //Leer un documento,y path join junta los pedazoss de la ruta al doc
  //por que si no deberias usar la ruta absoluta
  response.sendFile(path.join(__dirname, "..", "views", "index.html"));
};

