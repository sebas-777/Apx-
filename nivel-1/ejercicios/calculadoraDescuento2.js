/* El objetivo de este ejercicio es empezar a jugar con los condicionales, en este caso el if, 
para tomar decisiones y generar resultados en base a ciertas características de un producto.*/

/*Suma código que calcule el precio final de la laptop basado en las siguientes condiciones:

1.Si incluye seguro, añade un recargo adicional de $100 al precio final.
2.Si es reacondicionado, aplica un descuento de $150 al precio final.
3.Si la RAM es mayor o igual a 16GB, añade un recargo adicional de $50 al precio final.*/

const laptop ={
    id:"LAP123456",
    marca:"techBrand",
    modelo:"x200",
    especificaciones:{
        procesador:"Intel Core i7",
        ram:24,// en GB
        almacenamiento:512, // en GB
        pantalla:15.6 // pulgadas
    },
    precioBase:1000,
    incluyeSeguro: false,
    esReacondicionado:true,
    fechaFabricacion:{dia:20,mes:11,anio:2023},
    estado:"Nuevo"// puede ser nuevo o usado
};

let precioFinal = laptop.precioBase;

if(laptop.incluyeSeguro){
    precioFinal += 100;
}if(laptop.esReacondicionado){
    precioFinal -= 150;
}if(laptop.especificaciones.ram >= 16){
    precioFinal += 50;
}

console.log(`el precio final de la laptop es: $${precioFinal}`);

    
