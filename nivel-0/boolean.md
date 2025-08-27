## Booleanos

Los booleanos son un tipo de dato primitivo comúnmente usado en lenguajes de programación. Por definición, un booleano tiene 2 posibles valores: true (verdadero) o false (falso).

En `JavaScript`, frecuentemente se genera de manera implícita la coerción de tipos a booleano. Si, por ejemplo, tienes una sentencia if que evalúa cierta expresión, esa expresión genera coerción a booleano:

~~~
const a = "Una cadena";
if(a){
    console.log(a); //arroja 'una cadena'
}

~~~

En el ejemplo anterior, la sentencia if evalúa a la constante a. Dado que el valor de a no es de tipo booleano, JavaScript genera coerción de tipo para poder evaluar la sentencia y concluir si se trata de un valor Truthy (verdadero) o Falsy (falso). Obtenemos como resultado 'una cadena' debido a que las cadenas de texto en JavaScript son un valor verdadero.

Solo hay unos cuantos valores que generan coerción a falso: 

- false (en realidad no genera coerción porque ya es falso)
- null
- undefined
- NaN
- 0
-0
- 0n, -0n (BigInt)
- " ", ' ', ` ` (cadena de texto vacía)
- document.all