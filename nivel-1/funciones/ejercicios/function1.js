
// funcion recibe 3 argumentos
function ejemplo(a,b,c){
    
    // crea un array vacio que llenaramos 
    const d =[];

    // recorremos el array
    for (let i=0; i< a.length; i++){ 

        /*En cada iteración, se obtiene el objeto producto actual y 
        se verifica si su propiedad marca es igual al valor de marca indicado en el parámetro, 
        y si su propiedad precio es menor o igual al valor de precio indicado en el parámetro. 
        Si ambas condiciones se cumplen, 
        el producto actual se agrega al array productosEncontrados usando el método push.*/

        const e = a[i];

        if(e.b === b && e.c <=c){
            d.push(e);
        }
    } 
    return d;    
}

const a =[
    {b: 'ferrari', c: 1000}, 
    {b: 'tesla', c: 2000}, 
    {b: 'lamborghini', c: 3000}, 
    {b: 'bugatti', c: 4000}, 
    {b: 'bmw', c: 5000}
]; 
    const b = 'ferrari'; 
    const c = 1000; 
    


resultado = ejemplo(a,b,c);
console.log(resultado);