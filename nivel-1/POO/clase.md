# CLASE

Podemos decir que una clase es un molde de objetos. Ese molde es el que define la estructura (propiedades, métodos) que va a tener cada objeto que se cree a partir de cierta clase. Entonces, si queremos que un grupo de objetos comparta una serie de características, crearemos una clase que predefina las condiciones que tienen que tener esos objetos.

Veamos cómo se crea una clase con TypeScript:

~~~
class Persona {
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;

  constructor(nombre: string, apellido: string, fechaNacimiento: Date) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fechaNacimiento = fechaNacimiento;
  }

  getEdad(): number {
    const fechaActual = new Date();
    const tiempoDiferencia =
      fechaActual.getTime() - this.fechaNacimiento.getTime();
    const edad = Math.floor(tiempoDiferencia / (1000 * 3600 * 24 * 365.25));
    return edad;
  }
}

// Crear una instancia de la clase Persona
const persona1 = new Persona("Juan", "Perez", new Date(1990, 5, 15));

// Obtener y mostrar la edad de la persona
const edad = persona1.getEdad();
console.log(`${persona1.nombre} ${persona1.apellido} tiene ${edad} años.`);
~~~ 

En este ejemplo, declaramos el método `getEdad()` para obtener la edad actual de la persona a partir de su fecha de nacimiento. Entonces, cada objeto que creemos con la clase Persona, va a poder usar esta función para calcular una edad.

En este punto, no es importante que se detengan en la lógica que usamos para el método getEdad(). Lo importante es que entiendan que las clases nos permiten definir una serie de métodos para realizar acciones que compartirán los objetos que se desprendan de la misma clase.


## This
La palabra clave this hace referencia al objeto instanciado. Entonces, en el ejemplo, cuando se hace referencia a this.fechaNacimiento se está haciendo alusión a la fecha de nacimiento que le asignamos a cada objeto que se instancie a partir de la clase Persona.

~~~
class Persona {
  nombre: string;
  fechaNacimiento: string;

  constructor(nombre: string, fechaNacimiento: string) {
    this.nombre = nombre;
    this.fechaNacimiento = fechaNacimiento;
  }

  mostrarInfo() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Fecha de Nacimiento: ${this.fechaNacimiento}`);
  }
}

// Crear dos objetos de la clase Persona
const persona1 = new Persona("Juan", "1990-05-15");
const persona2 = new Persona("María", "1985-08-20");

// Llamar al método mostrarInfo para cada objeto
console.log("Persona 1:");
persona1.mostrarInfo();
console.log("Persona 2:");
persona2.mostrarInfo();
~~~


