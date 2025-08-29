### Introducción  

Para asegurarnos de que nuestro código funcione como debería, existen algunas herramientas que nos ayudan a monitorear su comportamiento. En el mundo de la programación, se conoce como testing a las pruebas sobre un programa que se hacen con el fin de obtener información acerca de su calidad.  

Si bien hay muchos niveles de testing, en esta ocasión vamos a hablar de dos de los más conocidos y usados. Por un lado, tenemos las pruebas unitarias que, básicamente, testean trozos específicos de software y chequean que funcionen sin errores.  

Este tipo de tests se utilizan, por ejemplo, para comprobar el correcto comportamiento de las funciones de un programa. Con ese propósito, podríamos crear un documento que almacene una serie de funciones que prueben que las funciones del código fuente de un programa devuelvan los datos que esperamos.  

~~~ 

unction sumar(a, b) {
  return a + b;
}

function testSumar() {
  const result = sumar(2, 3);
  const expected = 5;

  if (result !== expected) {
    console.log('La prueba falló!');
  } else {
    console.log('La prueba pasó!');
  }
}

testSumar();

~~~

