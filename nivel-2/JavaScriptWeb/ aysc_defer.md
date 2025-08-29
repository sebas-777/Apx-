# async / defer

Cuando utilizamos JavaScript desde un archivo externo, podemos indicarle a la etiqueta <script> ciertos atributos que indican la forma en la que tiene que ser ejecutado el archivo .js. Veamos dos de ellos: defer y async.

defer se utiliza para indicar que el archivo .js debe ser descargado de forma asíncrona, es decir, que se descarga en segundo plano mientras el resto de la página web sigue cargándose. Una vez que el archivo .js ha sido descargado, el navegador lo ejecutará, pero siempre después de que se hayan cargado todos los elementos de la página. Esto es útil para no bloquear el renderizado de la página mientras se descarga y ejecuta el archivo .js.

Por otro lado, async también se utiliza para indicar que el archivo .js debe ser descargado de forma asíncrona, pero a diferencia de defer, el archivo .js se ejecuta en cuanto se descarga, incluso si la página web no ha terminado de cargar por completo. Esto puede ser útil si el archivo .js no depende de ningún otro elemento de la página web para funcionar.

Copiar
<!DOCTYPE html>
<html>
<head>
	<title>Mi página web</title>
	<script defer src="mi-script.js"></script>
</head>
<body>
	<p>Hola, mundo!</p>
</body>
</html>
En este ejemplo, el archivo mi-script.js se descarga de forma asíncrona mientras se carga la página web. Una vez que se ha descargado, el navegador lo ejecutará, pero siempre después de que se hayan cargado todos los elementos de la página, como el párrafo que contiene "Hola, mundo!".
