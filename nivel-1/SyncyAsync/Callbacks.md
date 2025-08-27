# Callbacks

Son funciones que se pasan por parámetro a otras funciones. Veamos un ejemplo de cómo podemos usarlas para realizar tareas asincrónicas:

~~~
setTimeout(function() {
  console.log("Soy una función callback");
}, 100);
~~~

En el ejemplo, le decimos a setTimeout() que ejecute la función callback que le hemos pasado como primer parámetro cuando transcurran 100 milisegundos.

El mismo código se puede entender asi:

~~~
function elCallback() {
  console.log("Soy una función callback");
}

const tresSegundos = 3000;
setTimeout(elCallback, tresSegundos);
~~~

De esta forma, estamos usando una función callback para pasársela a setTimeout(), que es otra función. En este caso, se trata de proyectar un suceso que ocurrirá en un momento conocido del futuro, pero muchas veces desconoceremos cuándo se producirá (incluso puede no suceder nunca).

Si bien las funciones callbacks son muy útiles para trabajar de forma asíncrona, tienen algunas desventajas. La principal es que pueden derivar en un código un poco caótico y difícil de leer, en especial cuando usamos la asincronía varias veces en una misma función, creando una estructura anidada que es conocida como `Callback Hell o Pyramid of Doom`, debido a su poca legibilidad.