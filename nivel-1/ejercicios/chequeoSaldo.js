// Estado de cuenta 
const estadoDeCuenta = {
 saldoDisponible : 100   
};

// producto deseado 
const producto ={
    nombre:"Teclado mecanico",
    precio:300
};

const saldoSuficiente = estadoDeCuenta.saldoDisponible >= producto.precio;

if(saldoSuficiente){
    console.log("Compra realizada");
}else{
    console.log("Saldo insuficiente");
}