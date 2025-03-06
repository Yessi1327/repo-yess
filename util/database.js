//todas las librerias 

const mysql = require('mysql2');

//Este constructor resive la base de datos 
const pool = mysql.createPool({
    host: 'localhost',
    //no deberia llegar a produccion
    user: 'root',
    database: 'animales',
    password: ''
});

module.exports = pool.promise();