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

