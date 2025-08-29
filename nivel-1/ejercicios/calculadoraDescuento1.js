/* El objetivo de este ejercicio es empezar a jugar con los condicionales, en este caso el if, 
para tomar decisiones y generar resultados en base a ciertas características de un producto.*/


const laptop ={
    id:"LAP123456",
    marca:"Lenovo",
    modelo:"IdeaPad 3",
    especificaciones:{
        procesador:"Intel Core i7",
        ram:"16",//en GB
        almacenamiento:512,//en GB
        pantalla:15.6//en pulgadas  
    },
    precioBase:1000,
    incluyeSeguro:false,
    esReacondicionado:false,
    fechaFabricacion:{dia:20,mes:11,anio:2023},
    estado:"Nuevo"// puede ser nuevo o usado
};

let precioFinal = laptop.precioBase;


if(laptop.incluyeSeguro){
    precioFinal += 100;
}else if(laptop.esReacondicionado){
    precioFinal = laptop.precioBase - laptop.precioBase * 0.2;
}else{
    precioFinal = laptop.precioBase;
}

console.log(`El precio final de la laptop es: $${precioFinal}`);