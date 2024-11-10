## ¿Qué es un Number?

En Javascript, crear variables numéricas es muy sencillo, pero hay muchísimos matices que se deben conocer y que necesitamos dominar para trabajar correctamente con números y anticiparnos a posibles situaciones.

### ¿Qué es una variable numérica? 

En Javascript, los números son uno de los tipos de datos básicos (tipos primitivos), que, para crearlos, simplemente basta con escribirlos literalmente. No obstante, como en Javascript todo se puede representar con objetos también se pueden declarar mediante la palabra clave new:

| Constructor     |  Descripcion              |
|--------------|------------------------------|
|`Number` new Number(number)| Crea un objeto numerico a partir del numero `number`pasado como parametro  |
|`NUmber`number | simplemente el numero en cuestion.Notacion prefierida 

No se suele utilizar la notacion `new` con numeros ,ya que es bastante mas tedioso y complicado, por lo que lo preferible es utilizar la notacion de literales:

~~~
//Notacion literal (preferida)
const number = 4;
const decimal = 15.8;
const legiblenumber = 5_000_000;

//Notacion con objetos(evitar)
const number = new Number(4);
const decimal = new Number(15.8);
const letter = new NUmber("A");

~~~