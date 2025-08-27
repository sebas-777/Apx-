### Test unitario 

Para ilustrarlo, pensemos en un ejemplo sencillo. La siguiente función cuenta las palabras dentro de un string:

~~~
function contarPalabras(texto) {  
  // Dividimos el texto en palabras utilizando espacios en blanco como delimitadores
  const palabras = texto.split(" ");
  
  // Devolvemos la cantidad de palabras
  return palabras.length;
}
~~~

Si queremos corroborar que la función esté operando correctamente, podemos crear otra función que invoque a la función que queremos testear y le pase unos parámetros de prueba. `Si el resultado que devuelve es el que esperamos, la función de prueba nos va a decir que todo está bien; en el caso contrario, nos va a alertar del error para que revisemos el código.`

Siguiendo con el ejemplo anterior, veamos cómo podríamos probar la función con un testeo unitario:

~~~
function testContarPalabras() {
  const texto = "Esta es una prueba de contar palabras";

  const resultado = contarPalabras(texto);

  // Verificamos los resultados
  if (resultado === 7) {
    console.log("testContarPalabras funciona correctamente");
  } else {
    console.error("testContarPalabras falló en la prueba");
    console.error("Se esperaban 7 palabras y se obtuvo", resultado);
  }
}

testContarPalabras();

~~~