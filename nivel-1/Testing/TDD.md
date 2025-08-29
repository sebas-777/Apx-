###  TDD

En la industria del software, hay una forma común de desarrollar llamada Test-Driven Development (TDD). En esta práctica, primero se escriben las pruebas (usualmente unitarias) y luego se escribe el código para satisfacer esas pruebas.  

Aunque parezca extraño, esta forma de desarrollar software nos ayuda a construir un código más resistente, seguro y fácil de mantener, además de permitir una creación más rápida.  

Supongamos que queremos implementar una función que determine si un número es par o impar. En lugar de escribir la función directamente, primero escribiremos el test que valide su correcto funcionamiento.  

~~~
function testEsPar(){
  console.assert(esPar(2) === true, 'Falla para números pares');
  console.assert(esPar(3) === false, 'Falla para números impares');
  console.assert(esPar(0) === true, 'Falla para cero');
}
~~~
Una vez definido el test podemos crear la función `esPar()` sabiendo que el test está chequeando que funcione correctamente.

~~~
function esPar(numero) {
  return numero % 2 === 0;
}
~~~
