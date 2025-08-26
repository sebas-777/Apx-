# Los grandes objetos

Como ya has leído en la introducción a este módulo, vamos a empezar a usar JavaScript en el contexto del navegador. Si bien la sintaxis de este lenguaje es la misma que aprendimos usando Node.js, el navegador nos permite otras capacidades que tienen que ver con la web específicamente.

Dentro de estas posibilidades, podemos hablar de ciertos objetos globales disponibles en el entorno del navegador. Veamos algunos de ellos:

navigator: es una propiedad del objeto window que permite obtener información sobre el navegador que está ejecutando la aplicación web.
window: es un objeto global que está disponible en el entorno del navegador y representa la ventana que contiene al sitio web. Además, incluye las propiedades y métodos para controlar esa ventana.
document: es una propiedad del objeto window que proporciona una referencia al documento HTML contenido en la ventana.


// Accediendo al objeto global window
console.log(window.innerWidth); // Muestra el ancho de la ventana del navegador
console.log(window.location.href); // Muestra la URL actual de la página

// Accediendo al objeto navigator
console.log(navigator.userAgent); // Muestra el user agent del navegador
console.log(navigator.language); // Muestra el idioma configurado en el navegador

// Accediendo al objeto document
console.log(document.body); // Muestra el contenido del body del documento
console.log(document.title); // Muestra el título del documento
