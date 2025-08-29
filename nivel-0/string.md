En Javascript y en el mundo del desarrollo web, una de las tareas que más solemos hacer es manejar cadenas de texto y realizar tareas con ellas. Por lo tanto, tenemos que familiarizarnos con el tipo de dato .

## ¿Qué es un String?  

En programación, cuando hablamos de una varible que posee información de texto, decimos que su tipo de dato es `String` . En Javascript, es muy sencillo crear una variable de texto. A rasgos generales, hay dos formas principales de hacerlo:

| Constructor     |  Descripcion              |
|--------------|------------------------------|
|`String` new String(text)| Crea un objeto de texto a partir del texto text pasado por parámetro. Evitar |
|`String`texto | Simplemente, escribimos el texto entre comillas simples o dobles. Notación preferida. |

Los `String` son uno de los tipos de datos básicos (primitivos), y como tal, es más sencillo utilizar los literales que la notación que utiliza la palabra clave new. Para englobar los textos, se pueden utilizar tres tipos de comillas:

- Comillas simples: '
- Comillas dobles: "
- Backticks: ` (Interpolación de variables)

A continuación, un ejemplo de declaración de variables de texto en Javascript:  

~~~
//Notacion literal(preferida)
const text = "Hola a todos!";
const message = "Otro mensaje de texto"

//Notacion mediante a objeto
const text = new String("Hola a todos!");
const message = new String("Otro mensaje de texto");

~~~ 

### Propiedades de un string

Al crear una variable con contenido de texto `String`, automáticamente, esa variable pasa a tener a su disposición todas las propiedades (variables) y métodos (funciones) disponibles para este tipo de dato, por lo que podemos utilizarlos en nuestro código, como iremos viendo a continuación:

| Propiedad    |  Descripcion              |
|--------------|------------------------------|
| `String`.length	Devuelve el número de carácteres totales del texto.|

En el caso de los strings, solo tenemos una propiedad importante, .length, que se encarga de devolver el tamaño total de la cadena de texto en cuestión, como se puede ver en los siguientes ejemplos:

~~~
"Hola".length;    // 4
"Adiós".length;   // 5
"".length;        // 0
"¡Yeah!".length;  // 6

~~~ 

Nótese que se ha utilizado  directamente, sin necesidad de guardarlos en una variable.

### Acceso a un carácter 

Si lo pensamos bien, un `String` está formado por carácteres, de forma que el texto "Hola", esta formado por los carácteres "H", "o", "l" y "a". Si queremos acceder a cada uno de ellos, podemos utilizar el operador [] indicando la posición a la que queremos acceder:

~~~
const text = "Hola";

text[0];      // "H"
text[1];      // "o"
text[2];      // "l"
text[4];      // undefined

~~~

### Métodos de un string 

Pero las características más interesantes de los strings se encuentran en los métodos de dicho tipo de dato. Ten en cuenta que, en las variables de texto, los métodos se ejecutan sobre el propio texto del , devolviendo información modificada a partir de este.

![metodos String](/nivel-0/img/metodosString.jpg)  

### Interpolación de variables 

En ECMAScript `ES2015` se introduce una interesante mejora en la manipulación general de`String` , sobre todo respecto a la legibilidad de código. Antes, sólo se podían definir `String` mediante comillas simples o comillas dobles.

Si queríamos concatenar (unir) varias cadenas de texto, teníamos que hacer algo parecido a esto:

~~~
const firstWord = "frase";
const secondWord = "concatenada";

"Una " + firstWord + " bien " + secondWord;   // 'Una frase bien concatenada'

~~~

A medida que añadimos más variables o contenido, el código se puede hacer más complejo de leer, especialmente si tenemos que concatenar elementos de un array, objetos, etc... Para evitar añadir complejidad innecesaria, se introducen las backticks (comillas hacia atrás), que nos permitirán interpolar el valor de las variables sin tener que cerrar, concatenar y abrir la cadena de texto continuamente:

~~~
const firstWord = "frase";
const secondWord = "concatenada";

`Una ${firstWord} mejor ${secondWord}`;       // 'Una frase mejor concatenada'

~~~

Esto, a priori, es una funcionalidad muy simple, pero puede llegar a mejorar sustancialmente la legibilidad de código generado. Además, nos aporta una serie de ventajas:

- Permite múltiples líneas, algo que no se puede hacer con las demás comillas  
- Permite interpolar expresiones Javascript (no sólo variables)  
- Permite interpolar el valor de variables (ya mencionado)  


