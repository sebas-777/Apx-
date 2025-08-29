# Introducción 

En JavaScript, una función es un bloque de código reutilizable que realiza una tarea específica. Las funciones son muy útiles para organizar el código, mejorar la legibilidad y mantener el código `DRY (Don't Repeat Yourself).`

Las funciones pueden tomar argumentos, que son valores que se pasan a la función cuando se llama. La función puede utilizar estos argumentos en su código para realizar una tarea específica. Las funciones también pueden devolver un valor cuando se llaman.

Aquí hay un ejemplo simple de una función en `JavaScript` que toma dos números como argumentos y devuelve su suma:

~~~
function sumar(a, b) {
  return a + b;
}

// Llamando la función
const resultado = sumar(2, 3);
console.log(resultado); // Imprime 5
~~~

En este ejemplo, hemos definido una función llamada sumar que toma dos argumentos a y b. Dentro de la función, estamos devolviendo la suma de a y b utilizando el operador +. Finalmente, estamos llamando la función pasando los valores 2 y 3 como argumentos y almacenando el resultado devuelto en la variable resultado. Luego imprimimos resultado en la consola y obtenemos 5, que es la suma de 2 y 3.
