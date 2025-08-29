## Switch

La declaración `switch` es una forma de controlar el flujo del código basándose en el valor de una variable. En otras palabras, utilizamos la declaración switch para tomar decisiones en nuestro código dependiendo del valor de una variable. Por ejemplo:

~~~
const fruit = "banana";

switch(fruit){
 case "apple":
    console.log("Es una mazana");
    break
 case "Banana":
    console.log("Es una banana");
    break   
case "Orange"
    console.log("Es una Naranja");
    break
default:
    console.log("No es una fruta conocida");
}
~~~
En este ejemplo, estamos utilizando la declaración switch para comparar el valor de la variable fruit con diferentes casos. Si el valor de fruit es "apple", se ejecutará el código que imprime "Es una manzana". Si el valor de fruit es "banana", se ejecutará el código que imprime "Es una banana". Y así sucesivamente. Si ninguno de los casos coincide con el valor de fruit, se ejecutará el código del caso por defecto, que imprime "No es una fruta conocida".

Imagina una biblioteca con muchos libros. Cada libro está etiquetado con una palabra o frase que representa un tema o género. Por ejemplo, si la palabra es "ciencia ficción", significa que el libro es una novela de ciencia ficción. Si la palabra es "historia", significa que el libro es un libro de historia. Y así sucesivamente.

Cuando quieres encontrar un libro en particular, primero miras la etiqueta para ver qué palabra está escrita. Luego, buscas el libro correspondiente al caso que coincide con la palabra en la etiqueta. Si no encuentras un libro con la palabra que buscas, entonces buscas el libro del caso por defecto, que podría ser un libro de cualquier género o tema.

De esta manera, la declaración switch funciona de manera similar: evalúa el valor de una variable o condición, y ejecuta el código correspondiente al caso que coincide con ese valor. Si ningún caso coincide, entonces se ejecuta el código del caso por defecto.



## Sintaxis

~~~
switch (expression) {
  case value1:
    // código a ejecutar si expression es igual a value1
    break;
  case value2:
    // código a ejecutar si expression es igual a value2
    break;
  ...
  default:
    // código a ejecutar si ningún case coincide con el valor de expression
}
~~~

Luego, después de la expresión, se escriben los casos que se van a evaluar. Cada caso comienza con la palabra clave case seguida del valor que se va a comparar con la expresión. Si el valor de la expresión coincide con el valor del case, entonces se ejecutará el código que está debajo del case.  
Cada case debe terminar con la palabra clave break, que indica al navegador que debe salir de la declaración switch una vez que se ha ejecutado el código correspondiente. Si no se incluye break, el código de los siguientes cases también se ejecutará. 
Por último, se puede incluir un caso por defecto (default) que se ejecutará si ningún otro case coincide con el valor de la expresión. Este caso es opcional, pero es recomendable incluirlo para manejar los casos en los que la expresión tenga un valor que no coincide con ningún case.

## El problema con Switch

Si bien switch es un recurso más, la comunidad acuerda que su uso está desaconsejado ya que tiene varios problemas. 

- La declaración switch es menos legible que otras formas de control de flujo, como las sentencias if y else. Esto se debe a que la declaración switch requiere que cada caso se escriba en una línea diferente, lo que puede dificultar la lectura del código.  

- La declaración switch no es tan flexible como otras formas de control de flujo, ya que solo permite comparar valores con el operador ===. Esto significa que no se pueden hacer comparaciones más complejas, como verificar si un valor está dentro de un rango o si cumple ciertas condiciones.  

- La declaración switch no es tan performante como otras formas de control de flujo, ya que requiere que el navegador evalúe cada caso de manera secuencial. Esto puede reducir la velocidad del código en aplicaciones grandes o con muchos casos.

Además para la mayoría de los casos se puede usar un objeto y sus indices para resolver problemas similares. En el caso del ejercicio anterior esto sería:  

~~~

const day = 3; // declaramos una constante llamada "day" con el valor 3

const dayNames = { // declaramos un objeto llamado "dayNames"
  1: "Lunes", // la propiedad 1 tiene el valor "Lunes"
  2: "Martes", // la propiedad 2 tiene el valor "Martes"
  3: "Miércoles", // la propiedad 3 tiene el valor "Miércoles"
  4: "Jueves", // la propiedad 4 tiene el valor "Jueves"
  5: "Viernes", // la propiedad 5 tiene el valor "Viernes"
  6: "Sábado", // la propiedad 6 tiene el valor "Sábado"
  7: "Domingo" // la propiedad 7 tiene el valor "Domingo"
};

let dayName = dayNames[day] || "Día inválido"; // obtenemos el valor de la propiedad del objeto "dayNames" con clave "day"
// si la propiedad no existe, asignamos el valor "Día inválido" a "dayName"

console.log(dayName); // imprime "Miércoles"
~~~




