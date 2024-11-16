/* Hola Yo
 Declará una constante miNombre con el valor enviado desde la terminal
*/

const miNombre = process.argv[2];
/* Declará una constante saludo que sea el resultado de la concatenación entre la palabra "Hola" y el nombre que recibas como argumento.*/

const saludo = `Hola ${miNombre}`;

/*Imprimí saludo usando console.log(); deberías ver algo similar a esto:*/
console.log(saludo);