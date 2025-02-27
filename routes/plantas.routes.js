const express = require('express');

const router = express.Router();

const plantas = [];


//para peticiones http GET
router.get("/agregar",(request, response, next)=> {
    //response.send(html_header+html_form+html_footer);
    response.render('agregar_planta');

});

//para peticiones http POST
router.post("/agregar",(request, response, next)=> {
    //Hace un objeto tipo request
    console.log(request.body);

    plantas.push(request.body.nombre);
    response.render('lista_plantas', {
      plantas: plantas,
    });
});


const path = require("path")

router.get("/regar", (request,response, next)=>{
  
  //Leer un documento,y path join junta los pedazoss de la ruta al doc
  //por que si no deberias usar la ruta absoluta
  response.sendFile(path.join(__dirname, "..", "views", "index.html"));
});

// Esto es lo que estoy importando el router
module.exports = router;