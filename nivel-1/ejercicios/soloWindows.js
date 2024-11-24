/* Imprimí en la consola solo los nombres de las computadoras cuyo 
sistema operativo es Windows.*/

const computadoras = [
    {nombre:"Asus",sistemaOperativo:"Windows"},
    {nombre:"Mac",sistemaOperativo:"Mac"},
    {nombre:"HP",sistemaOperativo:"Linux"},
    {nombre:"Lenovo",sistemaOperativo:"Windows"},    
    {nombre:"Dell",sistemaOperativo:"Windows"},
];

// iteramos sobre cada objeto del array "computadoras"
for(const compu of computadoras){
    if(compu.sistemaOperativo === "Windows"){
        console.log(`La computadora ${compu.nombre} es Windows`);
    }

}

