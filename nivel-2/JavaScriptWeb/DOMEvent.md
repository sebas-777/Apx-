# DOM: Eventos
10Los eventos son acciones u ocurrencias que ocurren en los elementos del DOM y en la página en general. Algunos ejemplos de eventos son los clics del mouse, movimientos del cursor, envío de formularios, desplazamiento de la página, entre otros.

Los eventos son acciones u ocurrencias que ocurren en los elementos del DOM y en la página en general. Algunos ejemplos de eventos son los clics del mouse, movimientos del cursor, envío de formularios, desplazamiento de la página, entre otros.

Los eventos permiten identificar las acciones del usuario y definir una respuesta de la página cuando se producen. De esta manera, es posible detectar la entrada de datos y generar una salida en consecuencia. Gracias a este comportamiento, las páginas web modernas pueden ser interactivas y dinámicas.

Para capturar estas interacciones de los usuarios, podemos suscribirnos a los eventos que suceden en un elemento del DOM. Para ello, podemos usar el método addEventListener(). Este método permite asociar una función a un evento específico de un elemento del DOM y se activará cada vez que el evento ocurra. Veamos cómo funciona en un ejemplo de código:


<!DOCTYPE html>
<html>
  <head>
    <title>Ejemplo de addEventListener</title>
  </head>
  <body>
    <button id="boton">Haz clic aquí</button>
    <script>
      // Seleccionar el botón mediante el método getElementById()
      var boton = document.getElementById("boton");

      // Agregar un event listener para el evento click
      boton.addEventListener("click", function() {
        alert("¡Haz hecho clic en el botón!");
      });
    </script>
  </body>
</html>

En el ejemplo anterior, se selecciona el botón a través del método getElementById() y se le agrega un event listener para el evento click. Cada vez que el usuario haga clic en el botón, se activará la función asociada al evento y se mostrará un mensaje en la pantalla.