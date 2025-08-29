Cuando trabajamos con `TypeScript`, nos encontramos con dos formas muy sencillas de definir tipos: type e interface. Ambas opciones parecen similares a primera vista, pero tienen diferencias importantes que pueden influir en la legibilidad, el rendimiento y la funcionalidad de tu código.

Ambos Representan `Tipos de Objetos`
Tanto type como interface pueden usarse para definir estructuras de datos. Por ejemplo, si quieres describir un usuario con un nombre y un ID, ambos enfoques funcionan:

~~~

// Con interface:
interface User {
 id: string;
 name: string;
}

// Con type:
type User = {
  id: string;
  name: string;
};
~~~

Ambas opciones te permiten crear objetos y verificar que cumplen con la estructura definida.

~~~
const user: User = {
  id: "123",
  name: "Ana",
};
~~~

Sin embargo, las diferencias aparecen cuando necesitas funcionalidades más avanzadas.

## Herencia

Si trabajas con objetos que necesitan extenderse `(heredar propiedades de otros)`, interface es la mejor opción. La instrucción `extends` permite extender interfaces fácilmente, lo que además mejora el rendimiento del chequeo de tipos en TypeScript.

~~~
interface WithId {
  id: string;
}

interface User extends WithId {
  name: string;
}

const user: User = {
  id: "123",
  name: "Carlos",
};
~~~

Aunque puedes lograr lo mismo con type utilizando la intersección (&), no es tan eficiente para el compilador:

~~~
type WithId = {
  id: string;
};

type User = WithId & {
  name: string;
};
~~~

El rendimiento no es una diferencia notable en proyectos pequeños, pero en aplicaciones grandes, este pequeño detalle puede sumar.

## Usa Type para Tipos Complejos  

Type es más versátil cuando necesitas definir uniones, tipos condicionales o tipos mapeados. Estas funcionalidades no están disponibles con interface.

### Ejemplo de unión de tipos

~~~
type StringOrNumber = string | number;

const value: StringOrNumber = 42; // válido
~~~

Con type, también puedes representar estructuras más avanzadas, como tipos condicionales:

~~~
type Response<T> = T extends string ? { text: T } : { value: T };
~~~
Este nivel de flexibilidad es crucial en proyectos donde los tipos dinámicos son comunes.

### Declaración Implícita de Index Signatures

Una diferencia importante entre interface y type en TypeScript es cómo manejan las `index signatures` (firmas de índice), que son útiles cuando necesitas objetos con claves dinámicas.

Con una `index signature`, puedes decirle al compilador que todas las propiedades de un objeto deben tener claves y valores de ciertos tipos. Por ejemplo:

~~~
interface Scores {
  [key: string]: number; 
  // Claves de tipo string, valores de tipo number.
}

const playerScores: Scores = {
  alice: 10,
  bob: 15,
};
~~~

Sin embargo, hay un detalle: los tipos (type) incluyen una firma de índice implícita, mientras que las interfaces (interface) no la tienen a menos que la declares explícitamente. Esto puede llevar a errores si intentas asignar un objeto que debería ser dinámico, pero no tiene una firma de índice definida.

## Ejemplo de error con interface:

~~~
interface KnownAttributes {
  x: number;
  y: number;
}

const attributes: KnownAttributes = {
  x: 10,
  y: 20,
};

const dynamicAttributes: Record<string, number> = attributes; 
// Error: Falta una firma de índice en `KnownAttributes`.
~~~

### Soluciones
Agregar una firma de índice explícita a la interface.

~~~
interface KnownAttributes {
  x: number;
  y: number;
  [key: string]: number; // Ahora permite claves dinámicas.
}
~~~

Usar un type con Record, que ya incluye la firma implícita.

~~~
type KnownAttributes = Record<string, number>;
~~~

### Fusión de Interfaces
Una peculiaridad de las interfaces es que se fusionan automáticamente si tienen el mismo nombre en el mismo ámbito. Esto es útil en algunos casos, pero puede generar errores difíciles de detectar.

`Ejemplo de fusión accidental`

~~~
interface User {
  name: string;
}

interface User {
  id: string;
}

const user: User = { id: "123" }; 
// Error: Falta 'name'
~~~

Con type, esto no es posible. Cualquier intento de duplicación genera un error inmediatamente.

### ¿Cuál Deberías Usar por Defecto?

Aunque TypeScript recomienda usar interface por defecto, muchos desarrolladores prefieren type debido a su flexibilidad y menor propensión a errores inesperados. Una buena estrategia es:

Usa interface cuando necesites herencia o rendimiento óptimo.
Usa type para cualquier otra situación.

Ambas herramientas tienen su lugar en el ecosistema de TypeScript, y tu elección dependerá del contexto. Si buscas flexibilidad y claridad, type es tu mejor aliado. Si trabajas con jerarquías de objetos o estructuras grandes, interface es la opción ideal.

Lo más importante es entender las fortalezas y limitaciones de cada opción, para que puedas tomar decisiones informadas y escribir código limpio y eficiente. ¡Experimenta con ambas y encuentra tu estilo!



