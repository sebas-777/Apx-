## Sync y Async

Hasta ahora casi todo el código que vimos es sincrónico (sync). Esto quiere decir que cada linea se ejecuta después de la otra en el orden en que se lo ordenamos a la máquina.

El código síncrono en JavaScript es aquel que se ejecuta de forma secuencial, es decir, una línea de código se ejecuta después de la anterior y así sucesivamente. En otras palabras, el código espera a que se complete una tarea antes de pasar a la siguiente.

~~~
function suma(a, b) {
  console.log("Antes de la suma");
  const resultado = a + b;
  console.log("Después de la suma");
  return resultado;
}

console.log(suma(2, 3));
console.log("Fin del programa");
~~~

Por otro lado, el código asíncrono/asincrónico (async) en JavaScript no se ejecuta de forma secuencial, sino que se realiza en segundo plano. Cuando una tarea asíncrona se inicia, el código no espera a que se complete antes de pasar a la siguiente tarea. En su lugar, se continúa con la ejecución del código mientras se espera que la tarea asíncrona se complete.

~~~
function mostrarMensaje() {
  console.log("Hola, soy un mensaje asíncrono");
}

console.log("Antes del mensaje");
setTimeout(mostrarMensaje, 3000);
console.log("Después del mensaje");
~~~

En este caso, la función setTimeout no bloquea la ejecución del código, sino que se ejecuta en segundo plano durante 3 segundos y luego se muestra el mensaje.

