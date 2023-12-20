// Esto es un comentario de una sola linea
/*
 Comentarios de varias lineas 
*/
// mostrar comentarios desde el archivo de js
console.log("Mensaje por consola");
// mostrar un comentario en el documento html
document.write('<p class="text-center text-primary">Primer mensaje en el documento HTML</p>');
// ventanas emergentes 

//alert('Ejemplo de alerta');

// declarar e inicializar una variable
// declarar o crear una variable (var - let - const)
let regaloNavidad = 'Camiseta de Boca'
document.write('Regalo de navidad 2023: ' + regaloNavidad + '<br>')

//modificar el contenido de una variable creada con let
regaloNavidad = 'Camiseta de Messi'
document.write('Regalo de navidad 2023: ' + regaloNavidad)

const urlUniverse = 'https://universe.rollingcodeschool.com/';
document.write('<br>Página de universe: ' + urlUniverse)

let precioSinImpuesto = 1100;
let impuestos = 600;

document.write('<br>El precio de la camiseta de Boca es: $'+ (precioSinImpuesto + impuestos) + 'USD')
// agregamos el ejercicio de Elias

//parsInt()  *es para usar los datos tipo entero*
//parsFloat() *es para decimales*
let gradosCelsius = parseInt(prompt('Ingrese un valor en grados centigrados'));
console.log(gradosCelsius)
let gradosFahrenheit = (gradosCelsius * 9) / 5 + 32;

document.write(
  "<br>" +
    gradosCelsius +
    "°C grados celsius son equivalentes a " +
    gradosFahrenheit +
    "°F grados farenheit"
);
document.write("<br>Otro ejemplo: " + (gradosCelsius + 50));
