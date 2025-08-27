const net= require('net');


// se crea el servidor
const server = net.createServer((socket) => {
    // se ejecuta cada vez que el cliente se conecta 
    console.log('cliente conectado desde ',socket.remoteAddress,socket.remotePort);

    //Maneja datos recibidos del cliente 
    socket.on('data',(data)=>{
        console.log('datos recibidos:' ,data.toString());

        //Responder del cliente 
        socket.write('hola desde el servidor(' + data.toString() + ')');
    });
    chat
    //Manejar desconexion del cliente
    socket.on('end',()=>{
        console.log('Cliente desconectado');
    }); 

    //Manejar errores del cliente 
    socket.on('error',(err) =>{
        console.log('Error de conexion: ',err.message);
    });

});


server.listen(3000,()=>{
    console.log('Servidor escuchando en el puerto 3000');
});