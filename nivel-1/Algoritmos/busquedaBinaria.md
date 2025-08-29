## Búsqueda binaria

Si bien este es un algoritmo válido, que cumple su objetivo, no es el más eficiente en este tipo de casos. Esto se debe a que recorre todas las posiciones del array secuencialmente para encontrar lo que le pedimos, lo que implica un alto uso de recursos.

En programación, existe un conjunto de instrucciones muy eficaz para este tipo de situaciones. Este algoritmo se llama búsqueda binaria, y en JavaScript se codea así:

~~~
var listaDeNumeros = [1, 3, 6, 98, 105, 209, 987, 1024];

function busquedaBinaria(numeros, busqueda){
  var desde = 0;
  var ultimaPosicion = numeros.length - 1;
  var hasta = ultimaPosicion;

  while(desde <= hasta) {
    var laMitad = Math.floor((desde + hasta) / 2);
    var numeroDelMedio = numeros[laMitad];
    if(numeroDelMedio == busqueda){
      return laMitad;
    }
    if(numeroDelMedio > busqueda){
      hasta = laMitad - 1;
    } else {
      desde = laMitad + 1;
    }
  }
  return -1;
}

const donde = busquedaBinaria(listaDeNumeros, 987);

console.log("encontrado en la posición " + donde, listaDeNumeros[donde]);

~~~