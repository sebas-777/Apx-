/* El objetivo de este ejercicio es empezar a jugar con los condicionales, 
en este caso el if, para tomar decisiones y generar resultados en base a 
ciertas preguntas.

Escribe código que calcule el costo total del envío basado en las siguientes condiciones:

El costo base es de $300

1.Si el envío es internacional, añade un recargo adicional de $100 al costo total.
2. Si el envío es express, añade un recargo adicional de $200 al costo total.
3.Añade $10 al costo base por cada kilo total de peso de los productos.
*/

const envio = {
    id:"Env123456",
    fechaEnvio:{dia:20,mes:11,anio:2023},
    tipo:{
        esInternacional:true,
        esExpress:false,
    },
    pesoTotal:1000
};

let costoDeEnvio = 300;

if(envio.tipo.esInternacional){
    costoDeEnvio += 100;
}

if(envio.tipo.esExpress){
    costoDeEnvio += 200;
}

costoDeEnvio += 10 * envio.pesoTotal;

console.log(`El precio final de envio es: $${costoDeEnvio}`);