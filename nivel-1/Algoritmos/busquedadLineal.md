## Búsqueda lineal.  


Los algoritmos de búsqueda son de los más estudiados ya que en muchas ocasiones nos encontramos frente a una gran masa de datos y necesitamos encontrar cosas a gran velocidad. De hecho podemos ver la diferencia entre dos algoritmos con un simple array de números.   

~~~

const listaDeNumeros = [1, 3, 6, 98, 105, 209, 987, 1024];

function buscar(listaDeNumeros, numeroABuscar) {
  for (let i = 0; i < listaDeNumeros.length; i++) {
    if (listaDeNumeros[i] === numeroABuscar) return i;
  }
  return -1;
}

const donde = buscar(listaDeNumeros, 987);

console.log("encontrado en la posición " + donde, listaDeNumeros[donde]);
~~~
Veamos, a grandes rasgos, qué hace este código.

~~~
// Se crea una variable llamada listaDeNumeros que contiene un arreglo con una serie de números.
const listaDeNumeros = [1, 3, 6, 98, 105, 209, 987, 1024];

// Se crea una función llamada buscar que recibe dos parámetros: una lista de números y el número a buscar.
function buscar(listaDeNumeros, numeroABuscar) {
  // Se crea un ciclo for que va a iterar por cada elemento del arreglo.
  for (let i = 0; i < listaDeNumeros.length; i++) {
    // Si el elemento actual es igual al número a buscar, se devuelve su posición en el arreglo.
    if (listaDeNumeros[i] === numeroABuscar) return i;
  }
  // Si no se encuentra el número, se devuelve -1.
  return -1;
}

// Se crea una variable llamada donde que almacena el resultado de llamar a la función buscar con la lista de números y el número a buscar.
const donde = buscar(listaDeNumeros, 987);

// Se imprime en consola un mensaje indicando la posición donde se encontró el número y el número mismo.
console.log("encontrado en la posición " + donde, listaDeNumeros[donde]);
~~~