# Import / Export  

Hasta ahora, en Node.js, venimos usado la sintaxis de `CommonJS` para importar y exportar módulos. Esto se hace con `require` para importar y module.exports para exportar.

exportamos 
~~~
archivo1.js

module.exports = function greet(name) {
  return `Hello, ${name}`;
};
~~~

importamos 
~~~
const greet = require('./archivo1');
console.log(greet('World')); // Imprime: Hello, World
~~~

`TypeScript` nos ofrece una forma más moderna y estandarizada de trabajar con módulos llamada `ESM (ECMAScript Modules)`. Utiliza `import` para traer funcionalidades y `export` para compartirlas entre archivos.

exportamos
~~~
archivo 1
export function greet(name: string): string {
  return `Hello, ${name}`;
}
~~~

importamos 

~~~
archivo 2
import { greet } from './archivo1';
console.log(greet('World')); // Imprime: Hello, World
~~~

##  Configuración en TypeScript

Para usar la sintaxis `ESM` y asegurarte de que tu código funcione bien con `Node.js`, debes configurar tu archivo `tsconfig.json` asegurandote que la opción module tenga el valor `CommonJS.`

~~~

{
  "compilerOptions": {
    "module": "CommonJS",    // Compila el código a la sintaxis de módulos CommonJS para que funcione en Node.js.
    "target": "ES6",         // Convierte el código a ES6 (también conocido como ES2015), que es moderno y compatible.
    "outDir": "./dist",      // Guarda el código compilado en la carpeta 'dist'.
    "rootDir": "./src",      // Encuentra los archivos TypeScript en la carpeta 'src'
  },
  "include": [
    "src/**/*.ts"            // Incluye todos los archivos .ts dentro de la carpeta 'src'.
  ],
  "exclude": [
    "node_modules"           // Excluye la carpeta 'node_modules' de la compilación.
  ]
}

~~~

Esta configuración nos permite usar la sintaxis moderna de `import / export` en tu código `TypeScript,` haciéndolo más limpio y fácil de mantener.  

Y además nos asegura que el código `TypeScript` se compile a una forma que `Node.js` pueda entender `(CommonJS),` evitando errores de ejecución.


## Conclusión  

Por el momento no es necesario profundizar mucho en esto ya que lo vamos a usar en casos muy puntuales. Más adelante cuando veamos ECMAScript Modules en el contexto de la web vamos a profundizar en esto. Por ahora solo es necesario saber que existe.


