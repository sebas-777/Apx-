/* Crear un nuevo array que contenga la suma de los números de cada subarray. 
El nuevo array debe ser un array simple que contenga las sumas de cada subarray en 
el mismo orden que aparecen en el array original. 

array original 
[
    [3, 567, 23],
    [23, 54, 23],
    [27, 457, 67],
    [34, 675, 12], 
];

array resultante 

// array resultante

[593, 100, 551, 721]

*/ 

const originalArray =[
    [4,6,9],
    [56,96,32],
    [89,63,74]
]; 

const resultArray=[];

for(let i=0; i< originalArray.length; i++){ 
    console.log("Indice array original",i);
    let sum = 0;
    for(let j of originalArray[i]){ 
        console.log("Indice array interno",j);
        sum+=j;
        console.log("suma j + j: ",sum); 
    }
    resultArray[i]=sum;
}

console.log(resultArray);