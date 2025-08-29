/* En este ejercicio vamos a construir una pequeña app que nos muestre la información importante de un mes en particular.

Para esto, nuestra app tiene que recibir el número del mes como argumento y mostrarnos información sobre ese mes.

Por ejemplo, al invocar tu programa de esta forma:

node index.js 7

El programa debe mostrar la siguiente información:

Numero de mes: 7
Nombre del mes: Julio
Cantidad de días: 31
Evento del mes: Memes de Julio
*/

const numeroDeMes = process.argv[2];

/* utilizamos el siguiente coleccion array de objetos  para obtener la informacion del mes */

const informacionMensual = [

    {
        nombreDelMes: "Enero",
        cantidadDeDias: 31,
        eventoDelMes: "Nueva año"
    },
    {
        nombreDelMes: "Febrero",
        cantidadDeDias: 28,
        eventoDelMes: "Valentines"
    },
    {
        nombreDelMes: "Marzo",
        cantidadDeDias: 31,
        eventoDelMes: "Carnaval"
    },
    {
        nombreDelMes: "Abril",
        cantidadDeDias: 30,
        eventoDelMes: "semana santa"
    },
    {
        nombreDelMes: "Mayo",
        cantidadDeDias: 31,
        eventoDelMes: "dia del trabajo"
    },
    {
        nombreDelMes: "Junio",
        cantidadDeDias: 30,
        eventoDelMes: "dia de la madre"
    },
    {
        nombreDelMes: "Julio",
        cantidadDeDias: 31,
        eventoDelMes: "vacaciones de mitad de año"
    },
    {
        nombreDelMes: "Agosto",
        cantidadDeDias: 31,
        eventoDelMes: "dia del padre"
    },
    {
        nombreDelMes: "Septiembre",
        cantidadDeDias: 30,
        eventoDelMes: "amor y amistad"
    },
    {
        nombreDelMes: "Octubre",
        cantidadDeDias: 31,
        eventoDelMes: "halloween"
    },
    {
        nombreDelMes: "Noviembre",
        cantidadDeDias: 30,
        eventoDelMes: "dia de los muertos"
    },
    {
        nombreDelMes: "Diciembre",
        cantidadDeDias: 31,
        eventoDelMes: "Navidad"
    }
];

const posicionEnElArray = numeroDeMes - 1;

const infoDelMes = informacionMensual[posicionEnElArray];

console.log("Numero de mes:",numeroDeMes);
console.log("Nombre del mes:",infoDelMes.nombreDelMes);
console.log("Cantidad de dias:", infoDelMes.cantidadDeDias);
console.log("Evento del mes:", infoDelMes.eventoDelMes);