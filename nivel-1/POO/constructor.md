# Constructor

Conozcamos otro elemento muy importante que podemos usar con las clases. Estamos hablando del `método constructor`, que es un tipo especial de método, que se ejecuta automáticamente cuando hacemos un new de una clase.

Le podemos pasar argumentos al método constructor entre los paréntesis que le siguen al nombre de la clase que se está por instanciar. Estos argumentos son los valores iniciales del nuevo objeto que queremos crear.

~~~
class Persona {
   nombre:string;
   apellido:string;
   fechaNacimiento:Date;
   constructor(nombreParaArrancar){
      this.nombre = nombreParaArrancar;
      }
   getEdad(){
      const today = new Date();
      const diferenciaEntreFechas = (today - this.fechaDeNacimiento)
      // y todo lo demás para calcular la edad
      }
}
const laura = new Persona("laura");
console.log(laura.nombre);
// laura
~~~

El método constructor de la clase Persona nos pide que, para instanciar un objeto, le pasemos como argumento el valor que le daremos a la propiedad nombre en el caso del objeto que estamos por crear.

Entonces, la expresión new Persona("laura") que vemos en el ejemplo, significa que queremos crear una instancia de la clase Persona que tome al string “laura” como valor de la propiedad nombre.

Gracias al método constructor podemos determinar ciertos valores mínimos que tienen que tener los objetos en el momento en el que son creados.

