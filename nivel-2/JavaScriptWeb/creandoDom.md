# DOM: Creando elementos

Crear nuevos elementos HTML con JavaScript es una de las funcionalidades más útiles que nos ofrece el DOM. Podemos generar cualquier elemento que necesitemos y agregarlo a nuestro documento HTML de forma dinámica.

Para crear un nuevo elemento, primero debemos crear un objeto de elemento mediante el método createElement() del objeto document. Luego, podemos asignarle atributos y contenido usando propiedades y métodos de ese objeto. Finalmente, podemos agregar el nuevo elemento a un nodo existente utilizando el método appendChild().

Veamos un ejemplo que ilustre este proceso:

<!DOCTYPE html>
<html>
  <head>
    <title>Mi página web</title>
  </head>
  <body>
    <h1>Bienvenidos a mi página</h1>
    <p>Esta es una página de prueba</p>
    <ul id="miLista">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>

    <script>
      // Crear un nuevo elemento li
      var nuevoLi = document.createElement("li");

      // Asignarle contenido
      nuevoLi.innerHTML = "Item 4";

      // Agregarlo a la lista
      document.getElementById("miLista").appendChild(nuevoLi);
    </script>
  </body>
</html>

En este ejemplo, creamos un nuevo elemento li utilizando el método createElement() y le asignamos contenido utilizando la propiedad innerHTML. Luego, agregamos el nuevo elemento a la lista existente utilizando el método appendChild() y accediendo al nodo padre mediante su atributo id utilizando getElementById().

