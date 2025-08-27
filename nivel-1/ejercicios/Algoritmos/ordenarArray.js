/* Para este desafío, les proponemos que creen un array con 40 números (pueden ser generados por Math.random()) y los ordenen de menor a mayor, a través de una función. Para eso, 
tienen que investigar sobre algoritmos de ordenamiento. */


function ordenarPorBurbuja(array) {
        n = array.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            // comparamos elementos adyacentes
            if (array[j] > array[j + 1]) {
                // intercambiamos si estan en orden incorrecto
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        
    }
    return array;
    
}


// creamos un array vacio para llenarlos de numeros
let a = [];


// llenamos el array
for (let i = 0; i < 40; i++) {
    const numero = Math.floor(Math.random() * 100);
    a.push(numero);  
}

console.log('array original',a);

// ordenamos el array
const arrayOrdenado = ordenarPorBurbuja(a);

//a.sort((a,b)=>a-b);

console.log("array ordenado",arrayOrdenado);
