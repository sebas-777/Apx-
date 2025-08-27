### La API de Node.js

Por otro lado, `Node.js` es una plataforma de software libre para la ejecución de código JavaScript del lado del servidor. `Node.js` también tiene su propia API que se utiliza para crear aplicaciones web y para interactuar con el sistema operativo.

Una de las funcionalidades más comunes de la API de `Node.js` es la manipulación de archivos. Un ejemplo de código básico de cómo usar la API de `Node.js` para leer un archivo sería el siguiente:  

~~~

const fs = require('fs');

fs.readFile('/ruta/al/archivo.txt',(err,data) =>{
    if(err)throw err;
    console.log(data.toString());
});

~~~

En este ejemplo, estamos usando la función readFile de la `API fs de Node.js` para leer un archivo. La función toma como primer parámetro la ruta del archivo que queremos leer, y como segundo parámetro, una función de callback que se ejecutará cuando se complete la lectura del archivo. Si se produce un error durante la lectura del archivo, la función de callback recibirá el error en su primer parámetro err. Si la lectura del archivo es exitosa, la función de callback recibirá los datos del archivo en su segundo parámetro data. En este ejemplo, simplemente estamos imprimiendo los datos del archivo en la consola utilizando la función console.log().  


[Documentacion Node.js v23.05.0](https://nodejs.org/docs/latest/api/index.html)