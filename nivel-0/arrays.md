## Que es un arrays?

Un tipo de dato array en JavaScript es `una colección o agrupación de elementos en una misma variable, cada uno de ellos ubicado con referencia a la posición que ocupa dentro del mismo.` Tanto la longitud como el tipo de los elementos de un array son variables. Dado que la longitud de un array puede cambiar en cualquier momento y los datos se pueden almacenar en ubicaciones no contiguas, `no hay garantía de que los arrays de JavaScript sean densos; esto depende de cómo decidas usarlos al programar.` 

## Cómo definir un array en JavaScript

Un array en JavaScript se puede definir de varias formas:  

- `new Array(len):` Este se utiliza para definir array JavaScript. crea un array en JavaScript de len elementos.  
- `new Array(e1, e2…):` Otro elemento que se utiliza para definir array JavaScript. Este crea un array en JavaScript con ninguno o varios elementos.  
- `[e1, e2…]:` Otro elemento que te ayuda a definir array JavaScript. Simplemente, crea los elementos dentro de corchetes si es tu notación de preferencia: [] de array en JavaScript.

Piensa en el siguiente ejemplo: podrías tener un array JavaScript que en su primera posición tiene el  `a`, en la segunda el  `b` y en la tercera el  `c`. En Javascript, esto se crearía así:  

~~~
// Forma tradicional

//array asociativo javascript

const array = new Array("a", "b", "c");

// Mediante literales (preferidas)

const array = ["a", "b", "c"]; // Array con 3 elementos

const empty = []; // Array vacío (0 elementos)

const mixto = ["a", 5, true]; // Array mixto (string, number, boolean).

~~~ 

Al contrario que muchos otros lenguajes de programación, Javascript permite que se puedan realizar arrays de tipo mixto, sin que sea obligatorio que todos los elementos sean del mismo tipo de dato (en el ejemplo anterior, “string”). Ten en cuenta que al crear un array con new Array(num), si solo indicas un parámetro y num es un número, Javascript creará un array de num elementos sin definir. Es decir, a = new Array(3) sería equivalente a a = [undefined, undefined, undefined]. Esto no ocurre con su equivalente, a = [3], donde estarías creando un array con un único elemento: 3.

## Acceso a elementos

Al igual que con los `string`, saber el número de elementos que tiene un array en JavaScript es muy sencillo. Solo tendrás que acceder a la propiedad .length, que te arrojará el número de elementos existentes en un array:

- `Método “Number” length:` devuelve el número de elementos del array JavaScript.  
- `Método “Object” [pos]:` operador que devuelve el elemento número pos del array JavaScript. 

Por otro lado, si lo que quieres es acceder a un elemento específico del array, no tienes más que utilizar el operador [], al igual que harías con los string para acceder a un carácter concreto. En este caso, accedes a la posición del elemento que quieres recuperar sobre el array:

~~~
const array = ["a", "b", "c"];

array[0]; // 'a'

array[2]; // 'c'

array[5]; // undefined

~~~ 

Recuerda que las posiciones empiezan a contar desde 0 y que si intentas acceder a una posición que no existe (mayor del tamaño del array), te mostrará un undefined.