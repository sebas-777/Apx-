/* En base al precio inicial de un producto y 
un porcentaje de descuento, determina el precio final de un producto.*/

precioInicial = 420;

// este quieren decir que se le aplica el 30% de descuento

const porcentajeDescuento = 30;

/*cuando la logica conlleva varios pasos es mejor
usar datos intermedios en este caso podemos calcular cuanto significa el descuento
en base al precio */

const valorDescuento =(precioInicial* porcentajeDescuento)/100;

//finalmente calcula cual es el preciocon el descuento aplicado 

const precioFinal = precioInicial- valorDescuento;

console.log(`Precio final con descuento aplicado es:$${precioFinal}`);