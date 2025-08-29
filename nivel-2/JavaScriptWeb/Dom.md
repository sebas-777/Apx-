# DOM

El Document Object Model (DOM) es una interfaz de programación que representa la estructura de un documento HTML como un árbol de nodos en el navegador. Cada nodo representa un elemento, atributo o texto del documento y puede ser manipulado mediante JavaScript para actualizar su contenido o estilo.

Por ejemplo, supongamos que tenemos el siguiente código HTML:

Copiar
<!DOCTYPE html>
<html>
  <head>
    <title>Mi página web</title>
  </head>
  <body>
    <h1>Bienvenidos a mi página</h1>
    <p>Esta es una página de prueba</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
  </body>
</html>Copiar
</html>Copiar
</html>Copiarer
En este caso, el árbol de nodos generado por el navegador sería similar a esto:

Copiar
- Document
  - html
    - head
      - title
    - body
      - h1
      - p
      - ul
        - li
        - li
        - li
Podemos acceder a cada uno de estos nodos mediante JavaScript utilizando los métodos y propiedades del objeto document, por ejemplo:


// Seleccionar el elemento <h1>
const h1 = document.children[0].children[1].children[0];

// Obtener el contenido del elemento <h1>
const h1Content = h1.textContent;

// Seleccionar el elemento <ul>
const ul = document.children[0].children[1].children[2];

// Seleccionar el segundo elemento <li> dentro del <ul>
const secondLi = ul.children[1];

// Obtener el contenido del segundo elemento <li>
const secondLiContent = secondLi.textContent;
