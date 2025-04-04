# Un controller

## Desafío  

El objetivo de este desafío es organizar nuestro código utilizando el patrón MVC. Este ejercicio es el primer paso en un proceso gradual donde profundizaremos en cada parte del patrón MVC para integrarlo todo en el desafío final y comprender cómo funciona en conjunto.  

## Diseño general  
La aplicación en la que vamos a trabajar es un `CRUD (Create, Read, Update, Delete)`, o sea, un sistema básico de gestión de datos para administrar información relacionada con inmuebles de una inmobiliaria. Este será el primer paso hacia un proyecto más complejo que construiremos más adelante

Para esto nuestra aplicación tiene que soportar los comandos básicos de cualquier sistema `CRUD`.

## El controlador
En este ejercicio vamos a enfocarnos en entender el alcance del controlador. Para eso vamos a dividir el controlador en dos grupos.

## Controlador de argumentos
Por un lado, tendremos un controlador encargado de interpretar los comandos de la terminal y convertirlos en un objeto sencillo que pueda ser procesado por otra parte de nuestro sistema. Contar con un controlador específico para adaptar este tipo de input será muy útil cuando llevemos nuestro sistema a un entorno web, donde el input no se reciba mediante comandos de terminal, sino a través de llamadas HTTP con un formato diferente.

Esto hace que nuestro sistema sea más adaptable a otras situaciones y le da sentido a la separación propuesta por el patrón MVC. Ya llegaremos ahí.

Una vez que el `controlador de argumentos` determine cual es el comando y los parámetros, este va a invocar al controlador del comando correspondiente para que se encargue de llevar adelante la tarea. El controlador correspondiente al comando (create, read, update, delete) es quien interactúa con el modelo y la vista para generar la salida (output) necesaria.

## ¿Por qué?

¿Por qué además del controller del comando "create" necesitamos el modelo y la vista? ¿Porque no hacemos todo en el controller? De hecho ¿por qué no hacemos todo en el primer controller, el que se encarga de entender los argumentos de la terminal?

La respuesta corta es: es difícil de mantener.

`MVC` (o cualquier otro patrón de arquitectura) nos ofrece una guía para separar nuestro código en partes y cada parte tiene límites y responsabilidades. Cómo entendimos anteriormente, este orden general nos agrega el problema extra de entender e implementar ese orden, pero nos regala un marco de trabajo mucho más organizado que nos permite crecer.

## Objetivo  

Tu misión es leer el código base para entender cómo está planteado el esquema MVC en este ejemplo. Vamos a empezar con algo sencillo y a medida que aprendamos nuevas técnicas, vamos a volver a este código para hacerlo crecer.

Una vez que hagas tu reconocimiento tendrás que completar la lógica del controller de argumentos. Esto es algo similar a lo que ya hicimos en el pasado para parsear los argumentos de la terminal pero con algunas pequeñas diferencias.

En este caso los comandos que debe soportar tu aplicación son los siguientes.

~~~
# Este es el formato 
# node apx-props.js <command> [args]


# Comando: create
node apx-props.js create --title "Departamento" --price 15000
# Este comando debe validar que se le pase al menos un title y un price, de otro modo debe imprimir un error

# Comando: get
node apx-props.js get id-123
# Este comando debe recibir a continuación un id que será utilizado para buscar una propiedad y mostrarla en la terminal

# Comando: update
node apx-props.js update id-123 --precio 300000
# Este comando debe recibir un id y luego una serie de argumento a actualizar.

# Comando: delete
node apx-props.js del id-123
# Este comando debe recibir a continuación el id del inmueble a eliminar. Se usa 'del' en vez de 'delete' porque es una palabra reservada en javascript (una palabra que el lenguaje usa) y usamos 'del' para evitar conflictor.
~~~

<script src="https://gist.github.com/zapaiamarce/f503874871c28bce778833f2a4e817d5.js"></script>


