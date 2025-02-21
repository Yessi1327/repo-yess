// Problema 1

//Solicitar un número al usuario
let numero = prompt("Problema 1 -Ingrese un número:");

//Convertir el valor ingresó un número válido
//paseInt convierte una cadena de texto en un número entero.
numero = parseInt(numero);

//Verificar si el usuario ingresó un número válido
function problema1 (){
    
    let tabla =("<h4>Tabla de Números</h4>");
    
    if (!isNaN(numero)){

        //Escribir la tabla en el html
        //Agregar contenido a la página web durante la carga, pero sobrescribe 
        //Ya no use document.write por que si no borra todo
        //document.write("<h3>Tabla de Números</h3>");
       
        tabla = tabla+("<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

        for (let i = 1; i <= numero; i++) {
        tabla += (`<tr><td>${i}</td><td>${i ** 2}</td><td>${i ** 3}</td></tr>`);
        }
        tabla +=("</table>");
    }
    else {
        tabla +=("<p>Por favor, ingrese un número válido.</p>");
    }
    //Insertar tabla en el contenedor de html
    document.getElementById("contenido_tabla").innerHTML = tabla;
}

//Lo que hace es esperar a que la página cargue completamente antes de ejecutar la función
//window.onload = problema1;
// Por que mejor poner un button para acostumbrarme a usar elementos interactivos.
document.getElementById("boton_problema_1").onclick = problema1;



//Problema 2: Verificar el resultado de la suma de dos números aleatorios

// Generar dos números aleatorios entre 1 y 100
//Math.floor() redondea los valores
//Math.random() genera numeros del 0 al 0.9999
const num1 = Math.floor(Math.random() * 100) + 1;
const num2 = Math.floor(Math.random() * 100) + 1;

// Guardar el tiempo de inicio
//Date.now() No requiere instanciar un objeto Date es mejor, cantidad de milisegundos
let inicioTiempo = Date.now();

// Pedir al usuario que ingrese la suma de los dos números
// Se usan comillas invertidas
//sustituye a la concatenacion simple "cuanto es" + num1 "+" + num2+"?"
let respuestaUsuario = prompt(`¿Cuánto es ${num1} + ${num2}?`);

// Guardar el tiempo de finalización
let finTiempo = Date.now();

// Calcular el tiempo que tardó el usuario en responder
let tiempoRespuesta = (finTiempo - inicioTiempo) / 1000;

function problema2 (){
    let resultado_suma= ("");
    // Verificar si la respuesta es correcta
    //Si la respuestaa del usuario es igual a la suma de numeros 
    if (parseInt(respuestaUsuario) === num1 + num2) {
        resultado_suma=(`<p>¡Correcto! Tardaste ${tiempoRespuesta} segundos en responder.</p>`);
    } else {
        resultado_suma=(`<p>Incorrecto. La respuesta correcta era ${num1 + num2}. Tardaste ${tiempoRespuesta} segundos.</p>`);
    } 

    document.getElementById("resultado_suma").innerHTML =resultado_suma;
}

document.getElementById("boton_problema_2").onclick = problema2;


/*
// Problema 3: Contador de números negativos, ceros y positivos en un arreglo

function contador(arr) {
    let negativos = arr.filter(num => num < 0).length;
    let ceros = arr.filter(num => num === 0).length;
    let positivos = arr.filter(num => num > 0).length;
    return { negativos, ceros, positivos };
}

// Casos de prueba con console.assert()
console.assert(JSON.stringify(contador([-1, 0, 3, -2, 5])) === JSON.stringify({ negativos: 2, ceros: 1, positivos: 2 }), "Error en el test");
console.assert(JSON.stringify(contador([0, 0, 0])) === JSON.stringify({ negativos: 0, ceros: 3, positivos: 0 }), "Error en el test");
console.assert(JSON.stringify(contador([-5, -10, -3])) === JSON.stringify({ negativos: 3, ceros: 0, positivos: 0 }), "Error en el test");

// Mostrar el resultado en el documento HTML
let resultadoContador = contador([-1, 0, 3, -2, 5]);
document.write(`<p>Números negativos: ${resultadoContador.negativos}</p>`);
document.write(`<p>Ceros: ${resultadoContador.ceros}</p>`);
document.write(`<p>Números positivos: ${resultadoContador.positivos}</p>`);*/
