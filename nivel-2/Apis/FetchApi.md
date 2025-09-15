# Fetch: Métodos

Los métodos HTTP son un conjunto de acciones que se pueden realizar en una API REST para interactuar con los recursos disponibles. Estos métodos definen la operación que se va a realizar sobre un recurso y son una parte fundamental de la especificación de HTTP.

En el contexto de la función fetch de JavaScript, es importante conocer los métodos HTTP disponibles para poder utilizarlos de forma adecuada al hacer peticiones a una API. Los métodos más comunes son GET, POST, PUT, PATCH y DELETE, cada uno con un propósito específico:

GET: se utiliza para obtener información de un recurso. Esta petición es idempotente, lo que significa que se puede realizar múltiples veces sin modificar el estado del servidor.

POST: se utiliza para crear un nuevo recurso en el servidor. Esta petición no es idempotente, lo que significa que cada vez que se realiza, se crea un nuevo recurso.

PUT: se utiliza para actualizar completamente un recurso existente en el servidor. Esta petición es idempotente.

PATCH: se utiliza para actualizar parcialmente un recurso existente en el servidor. Esta petición es idempotente.la función fetch de JavaScript

DELETE: se utiliza para eliminar un recurso existente en el servidor. Esta petición es idempotente.

Es importante tener en cuenta que, al hacer una petición con fetch, debemos especificar el método que queremos utilizar en la opción "method" del objeto de configuración de la petición. Por ejemplo, para hacer una petición GET, podemos hacer lo siguiente:


fetch('https://api.github.com/users')
  .then(response => response.json())
  .then(data => console.log(data));

Y para hacer una petición POST, podemos hacer lo siguiente:

fetch('https://api.github.com/users', {
  method: 'POST',
  body: JSON.stringify({ name: 'John', email: 'john@example.com' })
})
  .then(response => response.json())
  .then(data => console.log(data));