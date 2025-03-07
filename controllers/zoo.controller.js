const path = require("path")
const Animal =require("../models/animal.models");

//se le llama accion del controlador get_agregar
exports.get_agregar =(request, response, next)=> {
    
  //Imprime variable guardada del usuario
    console.log(request.session.username);
    
    //QUE HACE?
    response.render('agregar_animal', {
      isLoggedIn: request.session.isLoggedIn || false, 
      username: request.session.username || '',
  });

};

exports.post_agregar = (request, response, next)=> {
    //Hace un objeto tipo request
    console.log("Recibido",request.body);

    const mi_animal = new Animal (request.body.nombre);
  
    mi_animal.save() // Guarda en el arreglo y en el archivo

    //cookie
    /*response.setHeader('Set-Cookie', `ultimo_animal=${mi_animal.nombre}`);
    response.redirect("/zoo/");*/

    .then(() => {
        console.log("animal guardado");
        response.redirect('/zoo/');
    })
    .catch((error) => {
        console.log(error);
    });
};

exports.get_alimentar= (request,response, next)=>{
  
  //Leer un documento,y path join junta los pedazos de la ruta al doc
  //por que si no deberias usar la ruta absoluta
  response.sendFile(path.join(__dirname, "..", "views", "index.html"));
};

// Despliega las tarjetas de los animales en la pagina
exports.get_root = (request, response, next)=>{
    console.log(request.get('Cookie'));
    response.render('lista_animales',{ 
      //QUE HACE
       isLoggedIn: request.session.isLoggedIn || false,
       username: request.session.username || '',
       animales: Animal.fetchAll(),
      });
};
