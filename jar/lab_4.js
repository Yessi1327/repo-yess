// Problema 1

//Verificar si el usuario ingresó un número válido
function problema1 (){
    //Solicitar un número al usuario
    let numero1 = prompt("Problema 1 -Ingrese un número:");

    //Convertir el valor ingresó un número válido
    //paseInt convierte una cadena de texto en un número entero.
    numero1 = parseInt(numero1);
    
    let tabla =("<h4>Tabla de Números</h4>");
    
    if (!isNaN(numero1)){

        //Escribir la tabla en el html
        //Agregar contenido a la página web durante la carga, pero sobrescribe 
        //Ya no use document.write por que si no borra todo
        //document.write("<h3>Tabla de Números</h3>");
       
        tabla = tabla+("<table border='1'><tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

        for (let i = 1; i <= numero1; i++) {
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



function problema2 (){
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


// Problema 3: Contador de números negativos, ceros y positivos en un arreglo

function problema3(){
    let numeros = prompt("Ingrese los números del arreglo separados por comas ejemplo: -1,0,3,-2,5");

    let arreglo = [];

    //Pedimos al usuario ingresar los números del arreglo
    // Convertimos los números en un arreglo de números
    //split = separa la cadena en un array sin , map= recorre cada elemento
    arreglo = numeros.split(",").map(num => parseInt(num));

    //Función llamado contador que ingresa un arreglo
    function contador(arr) {
        //arr es un arreglo con numeros
        //A la variable negativos sera = a la longitud del arreglo, filtrado por la conndicional.
        // filter() recorre cada elemento del array y aplica la condición (num < 0) y los va guardando
        let negativos = arr.filter(num => num < 0).length;
        let ceros = arr.filter(num => num === 0).length;
        let positivos = arr.filter(num => num > 0).length;
        return { negativos, ceros, positivos };
    }

    //Obtenemos el resultado
    let resultado_contador=contador(arreglo);

    // Casos de prueba con console.assert() para realizar una prueba automática sobre la función contador().
    // Console.assert(condición, "Mensaje de error");
    console.assert(JSON.stringify(contador(arreglo)) === JSON.stringify({ negativos: 2, ceros: 1, positivos: 2 }), "Error en el test");

    // Mostrar el resultado en el documento HTML
    document.getElementById("resultado_contador").innerHTML =`<p>
    Número negativos: ${resultado_contador.negativos}
    </p>
    <p>
    Cero: ${resultado_contador.ceros}
    </p>
    <p>
    Cero: ${resultado_contador.positivos}
    </p>`
    
}

// Asociamos la función al botón
document.getElementById("boton_problema_3").onclick = problema3;

//Problema 4

function problema4() {
    // Pedimos al usuario la cantidad de filas de la matriz
    let filas = parseInt(prompt("Problema 4 - ¿Cuántas filas tendrá la matriz?"));
    let columnas = parseInt(prompt("Problema 4: ¿Cuántas columnas tendra la matriz?: "));
    let matriz = []; 
    let promedio = 0;
    let resultado_promedio =[];


    // Verificamos que el usuario ingresó un número válido
    if (isNaN(filas) || filas <= 0 || isNaN(columnas) || columnas<=0) {
        document.getElementById("resultado_promedios").innerHTML = "<p>Por favor, ingresa un número válido.</p>";
        return;
    }
    
    // Pedimos los números de cada fila
    for (let i = 0; i < filas; i++) {
       matriz[i]=[]
       let sumaNum=0;
       for (let j = 0; j < columnas; j++){
            let num = parseInt(prompt("Ingrese un número"));
            matriz[i].push(num)
            sumaNum = sumaNum + num;
        }

        promedio = sumaNum/columnas;
        resultado_promedio.push(promedio);
    }

    // Mostramos el resultado en la página
    document.getElementById("resultado_promedios").innerHTML =  
        `<h4>Promedios de cada fila:</h4>
        <p>${resultado_promedio.join(" , ")}</p>`;
}

// Asociamos la función al botón
document.getElementById("boton_problema_4").onclick = problema4;


function problema5() {
    // Pedimos al usuario ingresar un número
    let numero5 = parseInt(prompt("Problema 5 - Ingrese un número:"));

    // Verificamos que el usuario ingresó un número válido
    if (isNaN(numero5)) {
        document.getElementById("resultado_inverso").innerHTML = "<p>Por favor, ingresa un número válido.</p>";
        return;
    }

    // Función que invierte un número
    function inverso(num) {
        //to string lo vuelve en unna cadena
        //split lo separa en un arreglo
        //reverse invierte el arreglo y join lo junta
        return parseInt(num.toString().split("").reverse().join(""));
    }

    // Calculamos el número inverso
    let resultado = inverso(numero5);

    // Mostramos el resultado en la página
    document.getElementById("resultado_inverso").innerHTML = `
        <h4>Número inverso:</h4>
        <p>${resultado}</p>
    `;
}

// Asociamos la función al botón
document.getElementById("boton_problema_5").onclick = problema5;

// Definimos la clase Calculadora
class Calculadora {

    //Atributos
    //Aqui no se utiliza las variables por que igual tienes que declararlas con this 
    //para que la variable sea parte del objeto necesita el this
    //Constructor
        constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    
    //Metodos

    // Método para sumar
    sumar() {
        return this.num1 + this.num2;
    }

    // Método para restar
    restar() {
        return this.num1 - this.num2;
    }

    // Método para multiplicar
    multiplicar() {
        return this.num1 * this.num2;
    }

    // Método para dividir (con verificación de división entre 0)
    dividir() {
        if (this.num2 === 0) {
            return "No se puede dividir entre 0";
        }
        return this.num1 / this.num2;
    }
}

// Función que maneja la calculadora
function problema6() {
    // Pedimos los números al usuario
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));

    // Verificamos que sean números válidos
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("resultado_calculadora").innerHTML = "<p>Por favor, ingresa números válidos.</p>";
        return;
    }

    // Creamos el objeto tipo clase calculadora con los números ingresados
    let calcu = new Calculadora(num1, num2);

    // Pedimos la operación al usuario
    let operacion = prompt("Ingrese la operación: + para suma, - para resta, * para multiplicación, / para división");

    let resultado;

    // Ejecutamos la operación según la entrada del usuario
    switch (operacion) {
        case "+":
            resultado = calcu.sumar();
            break;
        case "-":
            resultado = calcu.restar();
            break;
        case "*":
            resultado = calcu.multiplicar();
            break;
        case "/":
            resultado = calcu.dividir();
            break;
        default:
            resultado = "Operación no válida";
            break;
    }

    // Mostramos el resultado en la página
    document.getElementById("resultado_calculadora").innerHTML = `
        <h4>Resultado de la operación:</h4>
        <p>${resultado}</p>
    `;
}

// Asociamos la función al ultimo botón
document.getElementById("boton_problema_6").onclick = problema6;


