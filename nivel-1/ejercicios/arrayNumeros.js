/*Array de números
El objetivo de este ejercicio es crear un array de 50 posiciones con números aleatorios (random). Al finalizar debes mostrar los 50 números en la terminal.

> node random.js 
[
  73, 91, 33, 24, 94,  9, 61, 55, 45, 83, 55,
  83, 66,  9, 11, 20,  4, 10, 18, 38, 47,  9,
  53, 87, 66, 59, 70, 14, 60, 77, 16, 99, 54,
  23, 61, 35, 29, 85, 97, 92,  1, 97, 12, 92,
  64, 82, 39, 64, 55, 49
]

*/

// creamos un array vacio para llenarlos de numeros 
const numerosRandom = [];

/* En cada ciclo del for vamos a generar un nuevo número aleatorio.
   Para esto vamos a usar Math.random() que es una función
  de JavaScript que genera un número aleatorio entre 0 y 1*/

const randomNum = Math.random();
console.log("Math.random():", randomNum);

/* Como Math.random devuelve un valor entre 0 y 1 lo multiplicamos
  por otro valor para obtener números más grandes*/

const numeroGrande = randomNum * 100;

/* en este caso al multiplicarlo por 100
 vamos a generar un número entre 0 y 100 */

 console.log("NumeroGrande:",numeroGrande);

/* Para redondear el número y quitar los decimales usamos Math.floor()
   que redondea hacia "abajo"*/

const numeroRedondeado = Math.floor(numeroGrande);
console.log("numeroRedondeado:",numeroRedondeado);

/* creamos un for para generar 50 numeros aleatorios */

for(i = 0; i < 50; i++){
  numerosRandom[i] = Math.floor(Math.random()*100);
}

console.log(numerosRandom);
