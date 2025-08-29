// 1.declaro la funcion crear Saludo 

function crearSaludo(nombre){
    // 2. declaro la variable saludo con el valor de "hola"
    console.log("Empieza la funcion crearSaludo con elparametro",nombre);
    return "Hola" + nombre;
}

//2. declaro la funcion main 
function main(){
    //3. empieza la funcion Main
    console.log("Empieza la funcion main");

    var saludoAMarce = crearSaludo("Marce");
    var saludoAPau = crearSaludo("Pau");

    console.log("Se imprimen los resultados");
    console.log(saludoAMarce);
    console.log(saludoAPau);

    console.log("Termina la funcion main");
}

//4. Llamo a la funcion main
main();