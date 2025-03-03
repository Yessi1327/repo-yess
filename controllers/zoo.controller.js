const path = require("path")
const Animal =require("../models/animal.models");

//se le llama accion del controlador get_agregar
exports.get_agregar =(request, response, next)=> {
    //response.send(html_header+html_form+html_footer);
    response.render('agregar_animal');
    };

exports.post_agregar = (request, response, next)=> {
    //Hace un objeto tipo request
    console.log(request.body);

    const mi_animal = new Animal (request.body.nombre);
    mi_animal.save();
    response.redirect("/zoo/");

   
};

exports.get_alimentar= (request,response, next)=>{
  
  //Leer un documento,y path join junta los pedazoss de la ruta al doc
  //por que si no deberias usar la ruta absoluta
  response.sendFile(path.join(__dirname, "..", "views", "index.html"));
};

exports.get_root = (request, response, next)=>{
    response.render('lista_animales', {
        animales: Animal.fetchAll(),
      });
};