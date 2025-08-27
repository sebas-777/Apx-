# Herencia

Una clase es un molde de objetos que define la estructura `(propiedades, métodos)` de cada objeto que se cree a partir de esa clase. El objetivo de las clases es que sean análogas a la relación que tienen los objetos en el mundo real.  

En este capítulo, vamos a hablar de otra particularidad de las clases que contribuye a ese objetivo. Estamos hablando de la herencia.  

Para entender este concepto, vamos a pensar en un caso real. Imaginemos que estamos armando un e-commerce con muchos productos y, por lo tanto, muchas categorías. La clase general de todos los productos podría verse así:  

~~~

class Producto {
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  name: string;
  price: number;
  getPrice() {
    return this.price;
  }
}
~~~ 

Pero, si estuviéramos hablando de un tipo de producto en particular, necesitaríamos propiedades especiales que nos ayuden a describir mejor a ese producto. Por ejemplo, podemos crear una `clase ProductoTecnologico` que tenga una propiedad que indique si usa o no baterías.  

En estos casos, lo que nos permite la herencia es crear clases en base a otras. Entonces, podemos partir de la clase Producto para crear una nueva clase llamada ProductoTecnologico. Así, ProductoTecnologico heredará las características de Producto y no tendremos que escribir la clase desde cero.

~~~

class ProductoTecnologico extends Producto {
  constructor(name: string, price: numer, useBatteries) {
    super(name, price);
    this.useBatteries = useBatteries;
  }
  useBatteries: boolean = false;
  setBatteries(usa: boolean) {
    this.useBatteries = usa;
  }
}

~~~ 

La palabra clave que usamos para indicar que nos vamos a basar en una clase existente es `extends.` Además, tenemos que usar `super()` para llamar al constructor de la clase padre, en este caso Producto.  

En el ejemplo, además de los argumentos `name y price` que `ProductoTecnologico` heredó de `Producto`, sumanos `useBatteries` que es exclusivo de la clase `ProductoTecnologico` y que recibe un boolean.

A partir de esto hay una relación entre ambas clases. `ProductoTecnologico` es una subclase de `Producto `y Producto es la superclase de `ProductoTecnologico`.


