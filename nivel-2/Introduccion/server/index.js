const net = require('net');

//configuracion de conexion
const clientOptions = {
    host:'localhost',
    port:3000
};

const cliente = net.createConnection(clientOptions, () => {
    console.log('conectado al servidor');

    cliente.write('Hola servidor , soy el cliente');
});

//Manejar datos recibidos del servidor
cliente.on('data',(data) =>{
    console.log('Respuesta del servidor: ',data.toString())
});

//Manejar desconexion del servidor
cliente.on('end',()=>{
    console.log("Desconectado del servidor");
});