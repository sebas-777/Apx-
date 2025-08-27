# Promesas

Una solución al caos que pueden provocar las funciones callbacks son las promesas. Estas son objetos que resultan de una operación asíncrona. Este resultado podría estar disponible ahora o en el futuro. Veamos un ejemplo:

~~~

// definimos una constante API que contiene la URL de la API de GitHub para obtener repositorios

const API = "https://api.github.com/users/zapaiamarce/repos"

// hacemos una solicitud a la API usando fetch y guardamos la promesa en una variable

const unaPromesa = fetch(API);

// cuando la promesa se resuelve, ejecutamos la función dentro de then

unaPromesa.then(function (res) {
  // la promesa se resolvió
  // mostramos en consola la respuesta de la API
 
  console.log(res);
});

// si la promesa falla, ejecutamos la función dentro de catch

unaPromesa.catch(function (err) {
  // la promesa disparó un error
  // mostramos en consola el error que ocurrió
  
  console.log(err);
});

// Este fragmento de código realiza una solicitud a la API de GitHub 
// para obtener los repositorios de un usuario específico. 
// Utiliza promesas para manejar la respuesta y los posibles errores 
// que puedan surgir durante la solicitud.

~~~
