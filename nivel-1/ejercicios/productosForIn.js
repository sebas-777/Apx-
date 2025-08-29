/* Construye un objeto que represente un producto de un e-commerce, el cual deberá tener las siguientes propiedades:

id
nombre
descripción
precio
cantidad en stock
Luego, usa el bucle for...in para recorrer las propiedades de este objeto, e imprimir el nombre de cada propiedad y su valor correspondiente en la consola.*/

const producto = {
   p001:{
    nombre:"Laptop",
    descripcion:"Laptop de 15 pulgadas",
    precio:1000,
    Stock:5
   },
   p002:{
    nombre:"Mouse",
    descripcion:"Mouse inalambrico",
    precio:100,
    Stock:10
   },
p003:{
    nombre:"Teclado",
    descripcion:"Teclado inalambrico",
    precio:100,
    Stock:10
    }
}


for(const id in producto){
    console.log("|----------------|");
    console.log(`ID:${id}`);
    console.log(`Nombre:${producto[id].nombre}`);
    console.log(`Descripcion:${producto[id].descripcion}`);
    console.log(`Precio:${producto[id].precio}`);
    console.log(`Stock:${producto[id].Stock}`);
   

}