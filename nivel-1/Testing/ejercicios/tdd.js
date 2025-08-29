// funcion para testear
function testEsPar() {
    console.log(esPar(2) === true, 'Falla para números pares');
    console.log(esPar(3) === false, 'Falla para números impares');
    console.log(esPar(0) === true, 'Falla para cero');
}


// funcion para saber si es par
function esPar(num) {
    return num % 2 === 0;
}

testEsPar();