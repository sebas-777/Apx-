// declaramos la funcion nombre 

function nombre(n){
    console.log("Empieza la funcion nombre con elparametro",n);
    return "Mi Nombre es: " + n;
};

// declaramos la funcion edad

function edad(e){
    console.log("Empieza la funcion edad con elparametro ",e);
    return "Mi edad es:" + e
}

// declaramos la funcion main 

function main(){
    console.log("comineza la funcion main");

    let miNombre = nombre("Sebas");
    let miEdad = edad(42);

    console.log(`Persona: ${miNombre} Y ${miEdad}`);
}

// invocamos la funcion main
main();