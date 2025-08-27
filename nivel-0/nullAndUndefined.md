## ¿Cuál es la diferencia entre Null y Undefined en JavaScript?

~~~
//Null y undefined: eternos conocidos

console.log(null == undefined);
//true

console.log(null === undefined)
// false

~~~

JavaScript es bastante confuso cuando se trata de una variable que no tiene un valor porque puede ser tanto null como undefined. 

### Null y Undefined

Tanto null como undefined significan que no hay valor. Si una variable se establece en null o undefined, no tiene valor y si una función devuelve null oundefined, entonces nos está diciendo que no tiene ningún valor para devolver.

### Null

Es más fácil comenzar con null cuando se comparan las diferencias entre null y undefined ya quenull es muy sencillo. Si una variable es null, significa que la variable no tiene valor y que el programador la estableció explícitamente para que no tuviera valor. Una variable nunca será null a menos que en algún lugar del código un programador establezca una variable en null.

Es importante saber esto, ya que cuando veas un valor null , sabrás que el programador que escribió ese código te está diciendo que no hay ningún valor explícitamente. Un gran ejemplo de donde null es útil es algo así como una función de búsqueda que consulta una base de datos en busca de una entrada. Si no existe ninguna entrada, tiene más sentido devolver null ya que se está indicando que no se ha encontrado ningún valor.

### Undefined

Por otro lado, `undefined` significa que no hay ningún valor porque todavía no se ha establecido ningún valor. Por ejemplo, si creas una variable y no le asignas un valor, entonces estará undefined.

~~~
let a;

console.log(a);
//undefined

~~~

Donde esto se vuelve un poco confuso es el hecho de que se puede establecer una variable con valor de undefined.

~~~

let a = null;
//null

a = undefined;
console.log(a)
//undefined

~~~

Una razón por la cual querrías hacer esto es esencialmente restablecer o resetear una variable. Al establecer una variable en undefined, se está transmitiendo el mensaje de que la variable ya no contiene información útil, mientras que si el valor es null, se está diciendo específicamente que el resultado de alguna acción no tiene valor.

Técnicamente, ambos no indican ningún valor, pero transmiten ese mensaje de formas ligeramente diferentes