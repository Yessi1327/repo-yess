////Se deben pasar las variables y arreglos o funciones necesarias para tus controladores 
const animales = [{nombre: 'Tigre'}, {nombre: 'Orca'}, {nombre: 'lobo'}];

module.exports = class Animal {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_nombre) {
        this.nombre = mi_nombre;
    }
      
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        animales.push(this)
    }
      
    //Este método servirá para devolver los objetos del almacenamiento persistente.
    static fetchAll() {
     return animales;
    }
 }