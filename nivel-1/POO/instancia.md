# Instancias  

Ya vimos cómo declarar una clase. Pero, las clases no significan nada si no instanciamos objetos a partir de ellas. Instanciar objetos es el proceso de generar un ejemplar de una clase, es decir, la clase es la declaración de una forma y el objeto es un caso o elemento concreto que responde a esa forma.

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
    const today = new Date();
    const diferenciaEntreFechas = today.getFullYear() - this.fechaNacimiento.getFullYear();
    
    // Verificar si aún no ha pasado el cumpleaños de la persona este año
    if (
      today.getMonth() < this.fechaNacimiento.getMonth() ||
      (today.getMonth() === this.fechaNacimiento.getMonth() && today.getDate() < this.fechaNacimiento.getDate())
    ) {
      return diferenciaEntreFechas - 1;
    } else {
      return diferenciaEntreFechas;
    }
  }
}

const laura = new Persona("Laura", "Vitale", new Date("1995-08-05"));

console.log(`${laura.nombre} ${laura.apellido} tiene ${laura.getEdad()} años.`);

~~~
En el ejemplo, para crear una instancia de la clase "Persona", utilizamos la palabra clave "new" seguida del nombre de la clase que deseamos instanciar. Luego, asignamos esta instancia a una constante, que en este caso llamamos "laura".


~~~
const laura = new Persona("Laura", "Vitale", new Date("1995-08-05"));
~~~

Como resultado, obtenemos un objeto llamado "laura" que se basa en la definición de la clase "Persona". A través de la notación de punto, podemos establecer valores para las propiedades como "nombre", "apellido" y "fechaNacimiento".

De esta manera, creamos un objeto que posee las características especificadas en la clase "Persona". Además, podemos crear múltiples instancias de esta clase, cada una representando un objeto independiente con sus propios valores.


