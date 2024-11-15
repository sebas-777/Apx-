//Array con productos en el carrito 

const carrito =[
    {descripcion:"Teclado mecanico",precioUnitario:300,cantidad:5},
    {descripcion:"Mouse",precioUnitario:100,cantidad:3}
];

/*calculo el precio de cada producto basado
en el precio unitario y la cantidad*/

const precioProducto1 = carrito[0].precioUnitario*carrito[0].cantidad;
const precioProducto2 = carrito[1].precioUnitario*carrito[1].cantidad;

/*calculo el precio total de la compra
sumando los precios de los productos*/

const precioTotal = precioProducto1+precioProducto2;

console.log(precioProducto1);
console.log(precioProducto2);

console.log(`El precio total de la compra es:$${precioTotal}`);