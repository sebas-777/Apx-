# Partes

![funcion puras](/nivel-1/img/funcionPura.png)

Supongamos que queremos crear una función que convierta grados Celsius a Fahrenheit. La fórmula para convertir grados `Celsius a Fahrenheit es: F = (C * 9/5) + 32.`

Aquí está el código para crear una función en JavaScript que convierte grados Celsius a Fahrenheit:

~~~
function convertirCelsiusAFahrenheit(celsius) {
  const fahrenheit = (celsius * 9/5) + 32;
  return fahrenheit;
}

const temperaturaEnCelsius = 20;
const temperaturaEnFahrenheit = convertirCelsiusAFahrenheit(temperaturaEnCelsius);
console.log(temperaturaEnFahrenheit); // Imprime 68
~~~

hora, analicemos las partes de esta función:

1. La palabra clave function indica que estamos definiendo una función. Después de la palabra clave function, escribimos el nombre de la función, convertirCelsiusAFahrenheit, seguido de paréntesis que contienen los argumentos que la función toma, en este caso celsius.  

2. Dentro de las llaves {} de la función, definimos el código que la función ejecutará cuando se llame. n este caso, estamos declarando una variable llamada fahrenheit y asignándole el resultado de la fórmula de conversión. Luego, devolvemos fahrenheit utilizando la palabra clave return.

3.Al llamar la función, pasamos un valor de temperatura en Celsius como argumento, almacenamos el resultado devuelto en una variable llamada temperaturaEnFahrenheit y lo imprimimos en la consola.

Las funciones se utilizan para crear bloques de código reutilizable que pueden tomar argumentos y devolver valores. Una vez que se ha definido una función, se puede llamar varias veces con diferentes argumentos para realizar la misma tarea. Esto hace que el código sea más legible, más fácil de mantener y reduce la cantidad de código que necesita ser escrito y mantenido. En resumen, las funciones son una herramienta muy poderosa para crear código limpio, modular y eficiente en JavaScript.