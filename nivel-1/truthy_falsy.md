## Truthy / Falsy

`JavaScript` es un lenguaje de tipado débil, lo que significa que las variables pueden cambiar de tipo durante la ejecución del programa. En el contexto de una condición, esto se manifiesta en la coerción de tipos, en la que `JavaScript` convierte implicitamente un valor a un booleano para poder evaluarlo.

~~~
const nombre = "marce";

if(nombre){
    console.log("el nombre existe");
}

/ en el contexto de una condición
// el valor aunque es un string
// es tomando como true
// esto es un valor truthy (verdadero, ponele)
~~~

Los valores que se consideran verdaderos en una condición se llaman "truthy", mientras que los que se consideran falsos se llaman "falsy". En general, todos los valores son truthy, excepto los definidos como falsy: `false, 0, -0, 0n, "", null, undefined y NaN`

