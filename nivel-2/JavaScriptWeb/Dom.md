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

DOM: Buscando elementos
El DOM (Document Object Model) es una herramienta esencial en el desarrollo web, ya que nos permite construir documentos, navegar por su estructura, y añadir, modificar o eliminar elementos y contenido. Además, podemos escuchar eventos y percibir interacciones, como clicks, movimientos de mouse, introducción de texto, entre otros.

Si bien podemos navegar por el DOM a través de índices, existen funciones dentro del objeto document que son más prácticas para manipular elementos HTML con JavaScript. Estas son:

getElementById(): devuelve el primer elemento que tenga el ID especificado.

Copiar
<body>
  <h1 id="titulo">Título de la página</h1>
  <p>Este es un párrafo</p>
</body>

<script>
  const titulo = document.getElementById('titulo');
  console.log(titulo); // muestra el elemento h1 con id="titulo"
</script>
getElementsByClassName(): devuelve un array-like de elementos que contienen la clase especificada.

Copiar
<body>
  <h1 class="titulo">Título de la página</h1>
  <p class="parrafo">Este es un párrafo</p>
</body>

<script>
  const elementos = document.getElementsByClassName('titulo');
  console.log(elementos); // muestra un HTMLCollection con el elemento h1 con class="titulo"
</script>

querySelector(): devuelve el primer elemento que cumpla con el selector CSS especificado.

Copiar
<body>
  <h1 id="titulo">Título de la página</h1>
  <p class="parrafo">Este es un párrafo</p>
</body>

<script>
  const titulo = document.querySelector('#titulo');
  console.log(titulo); // muestra el elemento h1 con id="titulo"
  
  const parrafo = document.querySelector('.parrafo');
  console.log(parrafo); // muestra el elemento p con class="parrafo"
</script>
querySelectorAll(): devuelve un array-like de elementos que cumplen con el selector CSS especificado.

Copiar
<body>
  <h1 class="titulo">Título de la página</h1>
  <p class="parrafo">Este es un párrafo</p>
  <p class="parrafo">Este es otro párrafo</p>
</body>

<script>
  const elementos = document.querySelectorAll('.parrafo');
  console.log(elementos); // muestra un NodeList con los elementos p con class="parrafo"
</script>
Estas funciones nos permiten ubicar elementos HTML de manera más práctica y eficiente en el DOM, y a partir de ahí podemos manipularlos y escuchar eventos en ellos.

