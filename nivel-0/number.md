## ¿Qué es un Number?

En Javascript, crear variables numéricas es muy sencillo, pero hay muchísimos matices que se deben conocer y que necesitamos dominar para trabajar correctamente con números y anticiparnos a posibles situaciones.

### ¿Qué es una variable numérica? 

En Javascript, los números son uno de los tipos de datos básicos (tipos primitivos), que, para crearlos, simplemente basta con escribirlos literalmente. No obstante, como en Javascript todo se puede representar con objetos también se pueden declarar mediante la palabra clave new:

| Constructor     |  Descripcion              |
|--------------|------------------------------|
|`Number` new Number(number)| Crea un objeto numerico a partir del numero `number`pasado como parametro  |
|`NUmber`number | simplemente el numero en cuestion.Notacion prefierida 

No se suele utilizar la notacion `new` con numeros ,ya que es bastante mas tedioso y complicado, por lo que lo preferible es utilizar la notacion de literales:

~~~
//Notacion literal (preferida)
const number = 4;
const decimal = 15.8;
const legiblenumber = 5_000_000;

//Notacion con objetos(evitar)
const number = new Number(4);
const decimal = new Number(15.8);
const letter = new NUmber("A");

~~~

### Tipos de números 

En programación, incluso el simple sistema numérico decimal que todos conocemos tan bien, es más complicado de lo que podrías pensar. Usamos diferentes términos para describir diferentes tipos de números decimales, por ejemplo:  

- `Enteros:` son números sin parte decimal, e.g. 10, 400 o -5.
- `Números con coma flotante (floats):` tienen punto decimal y parte decimal, por ejemplo,12.5 y 56.7786543.
- `Doubles:` son un tipo específico de números de coma flotante que tienen una mayor precisión que los    numeros de coma flotante comunes (lo que significa que son más precisos en cuanto a la cantidad de decimales que poseen).

¡Incluso tenemos distintos tipos de sistemas numéricos! El decimal es base 10 (quiere decir que utiliza 0-9 en cada columna), pero también tenemos cosas como:

`Binario` — El lenguaje de computadora de nivel más bajo; 0s y 1s.   
`Octal` — De base 8, utiliza de 0–7 en cada columna.  
`Hexadecimal` — De base 16, utiliza de 0–9 y luego de a–f en cada columna. Puedes haber encontrado estos números antes, cuando colocabas colores en CSS. 

A diferencia de otros lenguajes de programación, JavaScript sólo tiene un tipo de dato para los números, adivinaste, Number. Esto significa que, sin importar el tipo de número con el que estés lidiando en Javascript, los manejas siempre de la misma manera.

`Nota:` En realidad, JavaScript tiene un segundo tipo de número, BigInt, que se utiliza para números enteros muy, muy grandes.