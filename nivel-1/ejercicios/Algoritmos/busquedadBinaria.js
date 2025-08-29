// se crea una variable llamada listaDeNumeros que contiene un arreglo de numeros 
const listaDeNumeros =[1,3,6,98,105,209,987,1024];

// se crea una funcion llamada buscar que recibe dos parametros una lista  de numeros y el numero a buscar.
function busquedadBinaria(numeros,busqueda){

    // se crean las variables desde,ultimaPosicion y hasta
    var desde = 0;
    var ultimaPosicion = numeros.length - 1;
    var hasta = ultimaPosicion;

    // Mientras el indice desde sea menor o igual al indice hasta se sigue buscando
    while(desde <= hasta){

        // Se calcula el indice del elemento del medio de la lista
        var laMitad = Math.floor((desde + hasta) / 2);

        // Se obtiene el valor del elemento del medio
        var numeroDelMedio = numeros[laMitad];

        // Si el valor del elemento  del medio es igual al numero buscado, se devuelve su posicion en el arreglo
        if (numeroDelMedio == busqueda) {
            return laMitad;
        }

        // Si el valor del elemento del medio es mayor al numero buscado,se busca en la mitad izquierda del arreglo.
        if (numeroDelMedio > busqueda){
            hasta = laMitad - 1;

        // Si el valor del elemento del medio es menor al numero buscado, se busca en la mitad derecha del arreglo.
        } else{
            desde = laMitad + 1;
        }

    }

    // Si no se encuentra el numero se retorna -1
    return -1;
    
}

// se crea una variable llamada donde que almacena el resultado de llamar a la funcion buscar con la lista de numeros y el numero a buscar.
const donde = busquedadBinaria(listaDeNumeros,98);

// se imprime en consola un mensaje indicando la posicion donde se encontro el numero y el mismo.
console.log("encontrado en la posicion " + donde, listaDeNumeros[donde]);