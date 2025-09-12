# Fetch

Ahora que ya nos hemos introducido al concepto de APIs, debemos conocer la forma de invocar desde nuestra aplicación web los datos que nos entregan estas interfaces. Para ello, la función fetch nos ofrece una forma de acceder a los datos del servidor de manera asíncrona, basada en promesas.

La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.

Este tipo de funcionalidad se conseguía previamente haciendo uso de XMLHttpRequest. Fetch proporciona una alternativa mejor que puede ser empleada fácilmente por otras tecnologías como Service Workers. Fetch también aporta un único lugar lógico en el que definir otros conceptos relacionados con HTTP como CORS y extensiones para HTTP.

La especificación fetch difiere de JQuery.ajax() en dos formas principales:

El objeto Promise devuelto desde fetch() no será rechazado con un estado de error HTTP incluso si la respuesta es un error HTTP 404 o 500. En cambio, este se resolverá normalmente (con un estado ok configurado a false), y este solo sera rechazado ante un fallo de red o si algo impidió completar la solicitud.
Por defecto, fetch no enviará ni recibirá cookies del servidor, resultando en peticiones no autenticadas si el sitio permite mantentener una sesión de usuario (para mandar cookies, credentials de la opción init deberan ser configuradas). Desde el 25 de agosto de 2017. La especificación cambió la politica por defecto de las credenciales a same-origin. Firefox cambió desde la versión 61.0b13.
Una petición básica de fetch es realmente simple de realizar. Eche un vistazo al siguente código:

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));

  La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.

Este tipo de funcionalidad se conseguía previamente haciendo uso de XMLHttpRequest. Fetch proporciona una alternativa mejor que puede ser empleada fácilmente por otras tecnologías como Service Workers. Fetch también aporta un único lugar lógico en el que definir otros conceptos relacionados con HTTP como CORS y extensiones para HTTP.

La especificación fetch difiere de JQuery.ajax() en dos formas principales:

El objeto Promise devuelto desde fetch() no será rechazado con un estado de error HTTP incluso si la respuesta es un error HTTP 404 o 500. En cambio, este se resolverá normalmente (con un estado ok configurado a false), y este solo sera rechazado ante un fallo de red o si algo impidió completar la solicitud.
Por defecto, fetch no enviará ni recibirá cookies del servidor, resultando en peticiones no autenticadas si el sitio permite mantentener una sesión de usuario (para mandar cookies, credentials de la opción init deberan ser configuradas). Desde el 25 de agosto de 2017. La especificación cambió la politica por defecto de las credenciales a same-origin. Firefox cambió desde la versión 61.0b13.
Una petición básica de fetch es realmente simple de realizar. Eche un vistazo al siguente código:

fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
Aquí estamos recuperando un archivo JSON a través de red e imprimiendo en la consola. El uso de fetch() más simple toma un argumento (la ruta del recurso que quieres obtener) y devuelve un objeto Promise conteniendo la respuesta, un objeto Response.

Esto es, por supuesto, una respuesta HTTP no el archivo JSON. Para extraer el contenido en el cuerpo del JSON desde la respuesta, usamos el método json() (definido en el mixin de Body, el cual está implementado por los objetos Request y Response).

Nota: El mixin de Body tambien tiene metodos parecidos para extraer otros tipos de contenido del cuerpo. Vease Body para más información.

Las peticiones de Fetch son controladas por la directiva de connect-src de Content Security Policy en vez de la directiva de los recursos que se han devuelto.
Aquí estamos recuperando un archivo JSON a través de red e imprimiendo en la consola. El uso de fetch() más simple toma un argumento (la ruta del recurso que quieres obtener) y devuelve un objeto Promise conteniendo la respuesta, un objeto Response.

Esto es, por supuesto, una respuesta HTTP no el archivo JSON. Para extraer el contenido en el cuerpo del JSON desde la respuesta, usamos el método json() (definido en el mixin de Body, el cual está implementado por los objetos Request y Response).

Nota: El mixin de Body tambien tiene metodos parecidos para extraer otros tipos de contenido del cuerpo. Vease Body para más información.

Las peticiones de Fetch son controladas por la directiva de connect-src de Content Security Policy en vez de la directiva de los recursos que se han devuelto.
