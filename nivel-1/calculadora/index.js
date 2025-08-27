

operaciones = require("./operaciones");



function parsearTerminos(texto) { 


    return{
        primerParametro: 5,
        segundoParametro: 5,
        operacion:"+"
    }
}


function ejecutarOPeracion(objetoOperacion) {

    const mapa={
        "+":operaciones.suma,
        "-":operaciones.restar,
        "*":operaciones.multiplicar,
        "/":operaciones.dividir
    };
    
    const simbolo = objetoOperacion.operacion;
     const ejecutor= mapa[simbolo];

    return ejecutor(
        objetoOperacion.primerParametro,
        objetoOperacion.segundoParametro
    );

    
}

function main() {
    const terminos = parsearTerminos(process.argv[2]);
    const resultado = ejecutarOPeracion(terminos);

    console.log("El resultado de la suma es: " + resultado);
}

main();