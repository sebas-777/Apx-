# DOM: Bubbling

El bubbling es un fenómeno importante a tener en cuenta al trabajar con eventos en el DOM. Básicamente, cuando un evento ocurre en un elemento hijo, también se dispara en sus elementos padres, siguiendo un orden de propagación desde el elemento más interno hasta el más externo en la jerarquía del DOM.

Para entender mejor este concepto, podemos ver un ejemplo sencillo:

Copiar
<div>
  <p>
    <button>Click me!</button>
  </p>
</div>

<script>
  const button = document.querySelector('button');
  const paragraph = document.querySelector('p');
  const div = document.querySelector('div');

  button.addEventListener('click', () => {
    console.log('Button clicked!');
  });

  paragraph.addEventListener('click', () => {
    console.log('Paragraph clicked!');
  });

  div.addEventListener('click', () => {
    console.log('Div clicked!');
  });
</script>

En este ejemplo, hemos creado tres elementos: un div, un párrafo y un botón dentro del párrafo. También hemos suscrito cada uno de estos elementos al evento click, y hemos agregado una función que imprime un mensaje en la consola cuando el evento ocurre.

Si hacemos clic en el botón, veremos que se dispara el evento click en el botón, el párrafo y el div en ese orden. Esto se debe a que el evento se propaga desde el botón hasta su elemento padre más externo, el div.

Para evitar este comportamiento de propagación, podemos utilizar el método stopPropagation() dentro de la función que se ejecuta cuando el evento ocurre en un elemento específico. De esta forma, evitaremos que el evento se propague más allá de ese elemento.

PDF
