
//Una aplicacion web es un sistenma distribuido, significa que esta regado debes comunicarte con los servidores y archivos 
// implica conectarte a un archivo que no este en tu entorno
//

//Para ejecutar en node se pone en la terminal node app.js

//importe el archivo tipo fs ?
const file_system = require('fs');

// escritura sincronico bloqueo el sistema y pregunta algo y estara bloqueado hasta que te responda
file_system.writeFileSync("hola.txt","hola desde node")

// pero el asincronico no bloquea el sistema y por default node es asi 
