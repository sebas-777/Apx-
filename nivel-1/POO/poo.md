# POO

## Object oriented programming (OOP)

Programación orientada a objetos (POO)  

La Programación Orientada a Objetos (POO) es un enfoque fundamental en el mundo de la programación que se basa en la idea de que podemos modelar el mundo real y resolver problemas de una manera más organizada y estructurada.

En la POO, imaginamos que todo en nuestro programa es como un objeto.


## Clase

Una clase es como una plantilla que describe cómo debe ser un objeto. Podemos pensar en una clase como un conjunto de instrucciones para crear objetos de un cierto tipo. Por ejemplo, si estamos creando un juego, podríamos tener una clase llamada `Jugador` que define cómo debería ser un jugador en el juego.

~~~

class Jugador {
  nombre: string;
  puntaje: number;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.puntaje = 0;
  }

  jugar() {
    console.log(`${this.nombre} está jugando.`);
  }
}

~~~
## Objeto

Un objeto es una instancia de una clase. Es como si tomáramos el molde de la clase y lo usáramos para crear algo usable. Siguiendo nuestro ejemplo, podríamos crear un objeto de la clase `Jugador` para representar a un jugador específico en el juego.

~~~

const jugador1 = new Jugador("Alice");
const jugador2 = new Jugador("Bob");

jugador1.jugar(); // Muestra "Alice está jugando."
jugador2.jugar(); // Muestra "Bob está jugando."

~~~

## Propiedades y Métodos

Los atributos o propiedades son características que tienen los objetos. En nuestro ejemplo, nombre y puntaje son propiedades del objeto `Jugador`.

Los métodos son funciones que pueden realizar los objetos. En nuestro ejemplo, `jugar()` es un método que muestra un mensaje en la consola.

~~~

class Jugador {
  nombre: string;
  puntaje: number;

  constructor(nombre: string) {
    this.nombre = nombre;
    this.puntaje = 0;
  }

  jugar() {
    console.log(`${this.nombre} está jugando.`);
    this.puntaje++; // Incrementa el puntaje del jugador en 1
  }

  obtenerPuntaje() {
    return this.puntaje; // Devuelve el puntaje del jugador
  }
}

// Creamos un objeto de la clase Jugador
const jugador1 = new Jugador("Alice");

// Accedemos a las propiedades del jugador
console.log(`Nombre del jugador: ${jugador1.nombre}`); 
// Muestra "Nombre del jugador: Alice"

console.log(`Puntaje del jugador: ${jugador1.puntaje}`); 
// Muestra "Puntaje del jugador: 0"

// Llamamos al método para que el jugador juegue
jugador1.jugar(); 
// Muestra "Alice está jugando."

// Accedemos al puntaje actualizado del jugador
console.log(`Puntaje del jugador: ${jugador1.obtenerPuntaje()}`); 
// Muestra "Puntaje del jugador: 1"

~~

La Programación Orientada a Objetos se trata de organizar nuestro código de manera que sea fácil de entender y mantener. Clases y objetos nos permiten agrupar datos y funciones relacionadas en un solo lugar, lo que hace que el código sea más claro y manejable. Con TypeScript, podemos aprovechar estos conceptos para construir programas más estructurados y eficientes.
