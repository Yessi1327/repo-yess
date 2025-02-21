// Problema 1

//Solicitar un número al usuario
//let =
let numero = prompt("Ingrese un número:");

//Convertir el valor ingresó un número válido
numero = parseInt(numero);

//Verificar si el usuario ingresó un número válido
if (!isNaN(numero)){
    //Escribir la tabla en el html
    document.write("<h3>Tabla de Números</h2>");
    document.write("<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

    for (let i = 1; i <= numero; i++) {
        document.write(`<tr><td>${i}</td><td>${i ** 2}</td><td>${i ** 3}</td></tr>`);
    }
    document.write("</table>");
}
else {
    document.write("<p>Por favor, ingrese un número válido.</p>");
}

// Problema 2: Verificar el resultado de la suma de dos números aleatorios

// Generar dos números aleatorios entre 1 y 10
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;

// Guardar el tiempo de inicio
let inicioTiempo = Date.now();

// Pedir al usuario que ingrese la suma de los dos números
let respuestaUsuario = prompt(`¿Cuánto es ${num1} + ${num2}?`);

// Guardar el tiempo de finalización
let finTiempo = Date.now();

// Calcular el tiempo que tardó el usuario en responder
let tiempoTomado = (finTiempo - inicioTiempo) / 1000;

// Verificar si la respuesta es correcta
if (parseInt(respuestaUsuario) === num1 + num2) {
    document.write(`<p>¡Correcto! Tardaste ${tiempoTomado} segundos en responder.</p>`);
} else {
    document.write(`<p>Incorrecto. La respuesta correcta era ${num1 + num2}. Tardaste ${tiempoTomado} segundos.</p>`);
}

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
document.write(`<p>Números positivos: ${resultadoContador.positivos}</p>`);
