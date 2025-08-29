/* Para este desafío, les proponemos que:

Creen una función main() que no reciba ningún parámetro ni tampoco retorne nada, por ahora. Este va a representar al punto de entrada del programa.
Declaren un array que contenga, por lo menos, 20 objetos. Cada uno de los objetos debe tener un texto y un número distinto: { texto: "hola", unNumero: 4}
Creen otra función que reciba el array de objetos como parámetro y que tenga un nombre acorde a la tarea que hace.
Esta función tiene que devolver un nuevo array solo con los objetos que tengan números pares adentro.
Es decir: Si la segunda función recibe: [{ t:"a", n:1 }, { t:"b", n:2 }, { t:"c", n:3 }] solo debería devolver: [{ t:"b", n:2 }] */ 

//declaramos una funcion Main 
function main(){ 

    // Declarar un array de objetos 
    const arrayObjetos = [
        {texto:"hola",unNumero:1},
        {texto:"adios",unNumero:2},
        {texto:"mundo",unNumero:3},
        {texto:"javaScript",unNumero:4},
        {texto:"php",unNumero:5},
        {texto:"java",unNumero:6},
        {texto:"react",unNumero:7},
        {texto:"angularJS",unNumero:8},
        {texto:"rust",unNumero:9},
        {texto:"c",unNumero:10},
        {texto:"c#",unNumero:11},
        {texto:"c++",unNumero:12},
        {texto:"linux",unNumero:13},
        {texto:"microsoft",unNumero:14},
        {texto:"mac",unNumero:15},
        {texto:"bash",unNumero:16},
        {texto:"unit",unNumero:17},
        {texto:"jest",unNumero:18},
        {texto:"docker",unNumero:19},
        {texto:"webpack",unNumero:20},
    ];

    //llamamos a la funcion soloPares y mostramos el resultado
    const resultado = soloPares(arrayObjetos);
    
    console.log(resultado);

    

} 

function soloPares(arrayObjetos) { 

    const resultado = [];
    
    //recorremos el array de objetos
    for(i=0;i<arrayObjetos.length;i++){
        const objetoActual = arrayObjetos[i];
        if(objetoActual.unNumero % 2 === 0){
            resultado.push(objetoActual);
        }
    }
    
    return resultado;
} 

main();

function testFiltrarObjetosPares(){
    const array1 = [{unNumero:1},{unNumero:2},{unNumero:3},{unNumero:4}];
    const array2 = [{unNumero:1},{unNumero:3},{unNumero:5},{unNumero:7}];

    // prueba 1
    const resultado1 = soloPares(array1);
    const esperado1 = [{unNumero:2},{unNumero:4}];
    console.assert(JSON.stringify(resultado1)=== JSON.stringify(esperado1),'Error en la prueba 1');

    // prueba 2
    const resultado2 = soloPares(array2);
    const esperado2 = [];
    console.assert(JSON.stringify(resultado2) === JSON.stringify(esperado2), 'Error en prueba 2');

    console.log("pruebas completas .No hay errores, todo esta funcionando correctamente ");
}

testFiltrarObjetosPares();