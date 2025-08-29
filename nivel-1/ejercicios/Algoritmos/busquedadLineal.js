// se crea una variable llamada listaNumeros que contiene un arreglos con una serie de numeros.  
const listaNumeros = [1,3,6,98,105,209,987,1024];

// se crea una funcion llamada buscar que recibe dos parametros una lista  de numeros y el numero a buscar.
function buscar(listaNumeros,numeroABuscar) { 

    // se crea un ciclo for que va  a iterar por cada elemento del arreglo
    for(let i = 0; i< listaNumeros.length;i++){
        if(listaNumeros[i] === numeroABuscar)return i;
            
        }
        // si no se encuentra el numero se retorna -1
        return -1;
    } 

    


// se crea una variable llamada donde que almacena el resultado de llamar a la funcion buscar con la lista de numeros y el numero a buscar.
const donde = buscar(listaNumeros,98);

// se imprime en consola un mensaje indicando la posicion donde se encontro el numero y el mismo.
console.log("encontrado en la posicion " + donde, listaNumeros[donde]);