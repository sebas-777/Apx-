
const {getOne,getAll,getAllWith} = require('./products.js');


const idProducto = 1;
const stockMinimo = 10;
function main() {
    
    //Listamos todos los productos
    console.log("Todos los Productos: ",getAll());
    

    //Listamos un producto por id 
    console.log(`El producto con Id ${idProducto} es: ` ,getOne(idProducto));

    //Listamos todos los productos con stock igual o mayor a 10
    console.log(`Los productos con stock igual o mayor a ${stockMinimo} son : `,getAllWith(stockMinimo));


}

main();