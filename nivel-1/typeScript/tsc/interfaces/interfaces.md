# Interfaces

En TypeScript, una interfaz es una forma de definir la forma de un objeto. Es como un contrato que especifica qué propiedades y métodos debe tener un objeto para cumplir con esa interfaz. 

Para definir una interfaz en TypeScript, puedes utilizar la palabra clave interface, seguida del nombre de la interfaz y la lista de propiedades que debe tener el objeto. Por ejemplo:  

~~~
interface Person {
  name: string;
  age: number;
  email?: string;
}
~~~

En este ejemplo, hemos definido una interfaz llamada Person que especifica que un objeto debe tener una propiedad name de tipo string, una propiedad age de tipo number y una propiedad opcional email de tipo string.  

Para utilizar una interfaz en tu código, simplemente debes definir un objeto que cumpla con los requisitos de esa interfaz. Aquí te dejo un ejemplo:  

~~~

function printPersonInfo(person: Person) {
  console.log(`Name: ${person.name}`);
  console.log(`Age: ${person.age}`);
  if (person.email) {
    console.log(`Email: ${person.email}`);
  }
}

const person: Person = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@example.com',
};

printPersonInfo(person);

~~~

En este ejemplo, hemos definido una función printPersonInfo que espera recibir un objeto que cumpla con la interfaz Person. Esta función imprime en la consola el nombre y la edad de la persona, y si existe la propiedad email, también imprime su valor.
