# DOM: Buscando elementos

El DOM (Document Object Model) es una herramienta esencial en el desarrollo web, ya que nos permite construir documentos, navegar por su estructura, y añadir, modificar o eliminar elementos y contenido. Además, podemos escuchar eventos y percibir interacciones, como clicks, movimientos de mouse, introducción de texto, entre otros.

Si bien podemos navegar por el DOM a través de índices, existen funciones dentro del objeto document que son más prácticas para manipular elementos HTML con JavaScript. Estas son:

getElementById(): devuelve el primer elemento que tenga el ID especificado.

<body>
  <h1 id="titulo">Título de la página</h1>
  <p>Este es un párrafo</p>
</body>

<script>
  const titulo = document.getElementById('titulo');
  console.log(titulo); // muestra el elemento h1 con id="titulo"
</script>

getElementsByClassName(): devuelve un array-like de elementos que contienen la clase especificada.


<body>
  <h1 class="titulo">Título de la página</h1>
  <p class="parrafo">Este es un párrafo</p>
</body>

<script>
  const elementos = document.getElementsByClassName('titulo');
  console.log(elementos); // muestra un HTMLCollection con el elemento h1 con class="titulo"
</script>

querySelector(): devuelve el primer elemento que cumpla con el selector CSS especificado.


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



<body>
  <h1 class="titulo">Título de la página</h1>
  <p class="parrafo">Este es un párrafo</p>
  <p class="parrafo">Este es otro párrafo</p>
</body>

<script>
  const elementos = document.querySelectorAll('.parrafo');
  console.log(elementos); // muestra un NodeList con los elementos p con class="parrafo"
</script>

.Estas funciones nos permiten ubicar elementos HTML de manera más práctica y eficiente en el DOM, y a partir de ahí podemos manipularlos y escuchar eventos en ellos.

