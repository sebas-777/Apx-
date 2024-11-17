## Control de flujo  

Cuando aprendemos a programar, una de las primeras cosas que entendemos es que las líneas de código se ejecutan de manera secuencial: `una tras otra.`

~~~
//Input

const precioInicial = 150;
const descuento = 0.1;

//Logica: calculamos el descuento general

const montoDescuento = precioInicial * descuento;
const preciFinal = precioInicial - montoDescuento;

//Output
console.log(`El precio final es: ${precio}`);

~~~
En un principio, esto parece suficiente para resolver tareas simples, como realizar cálculos o manipular datos básicos. Pero, ¿qué pasa cuando enfrentamos situaciones que requieren tomar decisiones basadas en condiciones específicas o realizar operaciones repetitivas sobre un conjunto de datos?

## Preguntas

Imagina que estás construyendo una aplicación para gestionar un carrito de compras. Tenés un objeto que representa un producto con propiedades como nombre y precio. En un momento dado, necesitas aplicar un descuento a este producto, pero solo si cumple con ciertas condiciones, por ejemplo, si es Black Friday.

~~~
const producto = { 
    nombre:"Libro de JavaScript";
    precio: 100,
    EsBlackFriday:true
}
~~~
¿Cómo decides aplicar el descuento solo si esBlackFriday es true?

Otro escenario común es cuando tienes un array de objetos, cada uno representando un producto en el carrito de compras, y necesitas calcular el total a pagar.

~~~
const carrito = [
    {producto:"Libro de JavaScript", precio:100},
    {producto:"Cuaderno", precio:50},
    {producto:"Lapiz",precio:20}
];
~~~
¿Cómo buscamos el producto más caro del array?

## Control de Flujo

Estos casos nos muestran que para resolver el objetivo de nuestro programa, no es suficiente solo con datos y operadores. Nos encontramos con la necesidad de ejecutar código de manera `condicional o reiterativa`.

La solución a este problema radica en el concepto de control de flujo, que permite que nuestro programa tome decisiones y ejecute código de manera no lineal, es decir, no siempre queremos que después de la línea 1 se ejecute la 2 y después la 3. Para resolver algunos problemas, necesitamos que este orden cambie y que, por ejemplo, una línea se ejecute solo cuando una condición se cumple, o que podamos reutilizar líneas de código en distintas partes de nuestro programa.

## Condicionales

Los condicionales son parte de estos mecanismos de control de flujo y nos permiten ejecutar diferentes bloques de código dependiendo de si una condición específica es `verdadera o falsa.`

## if

La estructura if es una de las más utilizadas para este propósito. Considera el objeto producto del ejemplo anterior. Si queremos aplicar un descuento solo si es Black Friday, podríamos hacerlo de la siguiente manera:

~~~
const producto = {
    nombre:"LIbro de JavaScript"
    precio:100,
    esBlackFriday:true
}

let precioFinal;

if(producto.esBlackFriday){
    //Aplicamos un 20% dedescuento
    const montoDescuento = producto.precio * 0.2;
}else{
    precioFinal = producto.precio;
}

console.log(`El precio con descuento es:${precioFinal}`);

~~~

En este bloque de código, la lógica dentro del if se ejecuta solo si producto.esBlackFriday es true. De lo contrario, se ejecuta el bloque de código dentro del else.

## while

El bucle while es un ejemplo sencillo y poderoso. Para sumar todos los valores de "precio" en el array carrito, podemos utilizar un bucle while de la siguiente manera: 

~~~

const carrito = [
    {producto:"Libro de JavaScript", precio:100},
    {producto:"Cuaderno", precio:50},
    {producto:"Lapiz",precio:20}
];

let total = 0;
let i = 0;

while (i< carrito.length){
    total += carrito[i].precio;
    i++;
}

console.log(`El total a pagar es: ${total}`);

~~~

Este bucle se ejecuta mientras i sea menor que la longitud del array carrito, sumando el precio de cada producto al total.

## Cuidado con los bucles infinitos

Es importante asegurarse de que la condición del bucle eventualmente se vuelva falsa; de lo contrario, el bucle se ejecutará indefinidamente, creando un bucle infinito.

~~~
let j = 0;

while (j< 5){
    console.log(j);
    // Olvidamos  incrementar J, lo que tenemos un bucle infinito
}

~~~ 