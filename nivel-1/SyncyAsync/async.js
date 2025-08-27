function mensaje() {
    
    console.log('Soy un mensaje asincrono');
}

console.log('Antes del Mensaje');

let texto = " soy un mensaje";

setTimeout(mensaje,3000);

console.log('Despues delMensaje');