const { error } = require('console');
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'animales.txt'); 

//Se deben pasar las variables y arreglos o funciones necesarias para tus controladores 
let animales = [];

// Cargar datos desde el archivo al iniciar el servidor para despues poder ponerlo en la pagina
fs.readFile(filePath, (error, data) => {
    if (!error && data.length > 0) {
        animales = JSON.parse(data); // Cargar los datos al arreglo en memoria
    }
});


module.exports = class Animal {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }
      
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        animales.push({ nombre: this.nombre });
         // Escribe el arreglo actualizado en el archivo de texto
         fs.writeFile(filePath, JSON.stringify(animales, null, 2), error => {
            if (error) console.log("Error al escribir en el archivo:", error);
        });
    }
      
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
     return animales;
    }
 }