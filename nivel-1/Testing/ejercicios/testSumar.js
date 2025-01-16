function sumarDosNumeros(num1,num2) {
    return num1 + num2;
}

function testSumaDosNUmeros() {
    const resultado = sumarDosNumeros(2,2);
    if(resultado == 4){
        console.log("sumarDosNumeros:Test passed");
    }else{
        throw "sumarDosNumeros:Test failed";
    }
}
function main() {
    const resultado = sumarDosNumeros(1,2);
    console.log("El resultado de la suma es: " + resultado);
    testSumaDosNUmeros();    
}

main();