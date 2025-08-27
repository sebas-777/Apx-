const  express = require('express');
const path = require('path');


//Crear la aplicacion
const app = express();

// definir la ruta principal 
app.get('/',(req,res)=>{
    
    //Leer el archivo index.html
    res.sendFile(path.join(__dirname,'index.html'),(error)=>{
        if(error){ 
            console.error('error a enviar el archivo',error);
            res.setStatus(500).send('Error al enviar el archivo');
        }
    });
});


//Iniciar el servidor
const PORT = 3000;

app.listen(PORT,() => {
    console.log('Servidor iniciado en el puerto 3000');
});