const path = require("path")
const Animal =require("../models/animal.models");

//se le llama accion del controlador get_agregar
exports.get_agregar =(request, response, next)=> {
    console.log(request.session.username);
    response.render('agregar_animal');
    };

exports.post_agregar = (request, response, next)=> {
    //Hace un objeto tipo request
    console.log("Recibido",request.body);

    const mi_animal = new Animal (request.body.nombre);
    mi_animal.save(); // Guarda en el arreglo y en el archivo
    response.redirect("/zoo");

   
};

exports.get_alimentar= (request,response, next)=>{
  
  //Leer un documento,y path join junta los pedazos de la ruta al doc
  //por que si no deberias usar la ruta absoluta
  response.sendFile(path.join(__dirname, "..", "views", "index.html"));
};

// Despliega las tarjetas de los animales en la pagina
exports.get_root = (request, response, next)=>{
    response.render('lista_animales',{
        animales: Animal.fetchAll(),
      });
};
