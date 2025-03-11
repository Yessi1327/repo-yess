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
      csrfToken: request.csrfToken(),
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

  //Se movio la logica del modelo al controlador
    .then(() => {
        //console.log("animal guardado");
        //Mensaje de confirmación
        request.session.info = `El animal ${mi_animal.nombre} se ha creado`;

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

  //Recupera los privilegios y los imprime en la consola
  console.log(request.session.privilegios);

  //console.log(request.get('Cookie'));
    //Mensaje de confirmación
    const mensaje = request.session.info || '';
    if (request.session.info) {
        request.session.info = '';
    }
    /*response.render('lista_animales',{ 
      //QUE HACE
       isLoggedIn: request.session.isLoggedIn || false,
       username: request.session.username || '',
       animales: Animal.fetchAll(),
       info: mensaje,
      });*/
      
      //Sacar registros de la BD Y Vistas Dinamicas
      Animal.fetch(request.params.id)
      .then(([rows, fieldData]) => {
          console.log(fieldData);
          console.log(rows);
          response.render('lista_animales', {
              isLoggedIn: request.session.isLoggedIn || false,
              username: request.session.username || '',
              //Nombre de la tabla
              animales: rows,
              info: mensaje,
          });
      }).catch((error) => {
          console.log(error);
      });
};
