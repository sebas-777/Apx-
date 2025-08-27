## IF

El término if se traduce como si y se utiliza en programación para introducir condiciones. Se llama if porque refleja la idea de una pregunta hipotética o condicional en la lógica del programa: si se cumple una condición específica, entonces se ejecuta un determinado bloque de código.

~~~
Si el precio es mayor a 1000 , me parece caro
~~~

Esto en un lenguaje de programación se va a estructurar de esta manera:

~~~
si(precioes mayor a 1000)entonces 
    muestre en la terminal "es caro"
[fin del si]
~~~

if es una estructura que usamos para tomar decisiones en un programa. Podemos decirle al programa: 
"si esto es verdadero, haz esto; si no es verdadero, haz esto otro". Así, podemos controlar qué sucede en nuestro programa en función de ciertas condiciones.

En javascript. usamos las siguiente sintaxis para escribir una sentencia If:

~~~
//cambia esta variable para ver como se evalua la condicion 
const num = 15;
const condicion = num > 3;

if(condicion){
    console.log("La condicion es verdadera");
}

console.log("esto se ejecuta siempre por que se encuentra fuera del if");

~~~

Una condición es una expresión que puede ser verdadera o falsa. Si una condición es verdadera, el programa hace una cosa. Si la condición es falsa, el programa hace otra cosa. Las cosas que el programa hace se escriben entre llaves {}.

## Else

Se utiliza para indicar un bloque de código qué debe ejecutarse si la condición que se ha establecido en el if no se cumple.

~~~
//cambia esta variable para ver como se evalua la condicion

const invitados = ["Fache","Luchito","Carlito"];
const condicion = invitados.length > 2;

if(condicion === true){
    console.log("La condicion es verdadera");
}else{
    console.log("La condicion es falsa");
}

~~~
Las condiciones se escriben después de la palabra if, entre los paréntesis. Si no se cumple la condición, el programa hace lo que está escrito después de la palabra else.

## Else if

Es una estructura que se usa para agregar más condiciones a una estructura de control de flujo if. Se utiliza para especificar una nueva condición que debe evaluarse si la condición del if es falsa.

~~~
const fruta = "manzana"

if(fruta === "manzana" ){
    console.log("la fruta es una manzana");
}else if(fruta === "pera"){
    console.log("la fruta es una pera");
}else{
    console.log("la fruta es otra cosa");
}

~~~

Es importante tener en cuenta que puedes agregar tantos else if como desees a una estructura de control de flujo if, y que cada uno de ellos debe ir acompañado de una condición y de un bloque de código a ejecutar si se cumple la condición. Además, el else if siempre va después del if y antes del else, si lo hay.