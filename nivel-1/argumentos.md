## Que es un Argumento?

Un argumento es un dato de entrada que nuestro programa recibe desde el exterior. En nuestras caso venimos usando la terminal para invocar a nuestro programa y es desde la misma terminal que vamos a enviarle datos a nuestro programa.

## process

Para acceder a los datos enviados desde la terminal, vamos a utilizar un objeto generado por Node.js llamado process que tiene un muchísima información acerca del proceso que está sucediendo al ejecutar nuestro programa.

Utiliza `console.log()` para imprimir el objeto process y observar su contenido.

`console.log(process);`

- `process.stdin:` representa el flujo de entrada estándar, que permite la lectura de datos desde la consola o la entrada del usuario.  
- `process.argv:` es un array que contiene los argumentos de línea de comandos que se pasan cuando se inicia la aplicación.  
- `process.env:` contiene el entorno en el que se está ejecutando el proceso, como variables de entorno y configuraciones específicas.  
- `process.stderr:` representa el flujo de error estándar, que se utiliza para mostrar mensajes de error o excepciones.  
-  `process.exitCode:` permite establecer el código de terminación del proceso.  

 Vas a notar que hay mucha información sobre la ubicación de tu programa y sobre Node.js. Por ahora solo vamos a usar un array en particular que se encuentra dentro del objeto process.  

 ## process.argv

 Dentro del objeto process existe un array de strings llamado `argv (argument vector)` que nos indica como fué llamado nuestro programa.

Utiliza `console.log()` para imprimir `argv` y observar su contenido

`console.log(process.argv);`

Para entender el objetivo de argv, prueba utilizando distintos argumentos al invocar tu programa:

~~~
> node programa.js un-argumento
> node programa.js hola chau
> node programa.js 1 2 3 4
> node programa.js argumento-a 2 "hola" 
~~~ 

En cada ejecución vas a ver como argv se llena de lo que le envíes desde la terminal.

`process.argv:` Este es un array que contiene los argumentos de la línea de comandos pasados al proceso. El primer elemento es la ruta del ejecutable de Node.js, el segundo es la ruta del script que se está ejecutando, y los siguientes son los argumentos adicionales.

Ejemplo:

~~~
// script.js
console.log(process.argv);
~~~

Si ejecutas este script con node script.js arg1 arg2, la salida será:

~~~
[ '/path/to/node', '/path/to/script.js', 'arg1', 'arg2' ]

~~~

## process.argv[2]

Ahora que examinamos un poco más el array `process.argv`, podemos empezar a utilizar la tercera posición del array para obtener el primer argumento enviado desde la terminal.

~~~
const argumento = process.argv[2];
console.log(argumento);

~~~

Y desde la terminal

~~~

> node programa.js 'texto enviado desde la terminal'

~~~
Utilizamos la posición [2] de `process.argv` ya que `process.argv[0]` y `process.argv[1]`, corresponden a la primera parte de la invocación.

~~~
const inicio = process.argv[0];
console.log(inicio);

const ruta = process.argv[1];
console.log(ruta);

const primerArgumento = process.argv[2];
console.log(primerArgumento);

~~~


![argumentos](/nivel-1/img/argumentos2.png)

## Conclusión  

El uso de `process.argv` para capturar datos que enviamos desde la terminal es uno de los tantos métodos que existen para enviarle información relevante a nuestro programa. Más allá de esta técnica en particular lo importante es entender que cualquier programa que creemos va a estar relacionado con información que venga desde el exterior (la terminal, una base de datos, un dato que el usuario nos envíe desde la web) y esto empieza a tornar a nuestras aplicaciones en piezas dinámicas y cada vez más realistas.


