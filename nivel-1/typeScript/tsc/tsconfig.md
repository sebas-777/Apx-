# tsconfig.json

En TypeScript, el archivo tsconfig.json es el archivo de configuración que le dice al compilador de TypeScript cómo debe compilar tu código. Este archivo te permite especificar varias opciones de configuración que afectan la forma en que TypeScript transforma tu código TypeScript (.ts) en JavaScript (.js).

Este archivo se hace necesario cuando empezamos a compilar código que requiere configuraciones específicas, por ejemplo, decirle con que versión de JavaScript queremos que sea compatible el código resultante.

~~~
{
  "compilerOptions": {
    "target": "es5",
    // Define a qué versión de JavaScript se compilará el código TypeScript. 'es5' es una versión antigua que es compatible con muchos entornos.
} 

~~~

## Inicializar un archivo tsconfig.json

El archivo tsconfig.json se ubica en la raíz de tu proyecto. Es decir, en el mismo directorio donde se encuentran tus carpetas de código y otros archivos importantes. Para comenzar ejecuta el siguiente comando.

~~~
tsc --init
~~~

Este comando crea un archivo tsconfig.json con una configuración básica.

~~~

{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}

~~~

### compilerOptions.target  
Indica a qué versión de JavaScript se debe convertir el código TypeScript. es5 es una versión más antigua que asegura una mayor compatibilidad con diferentes entornos.

### compilerOptions.module
Define el sistema de módulos que se usará. commonjs es el sistema de módulos estándar en Node.js.

### compilerOptions.outDir
Especifica dónde se guardarán los archivos JavaScript compilados. ./dist es una carpeta común para colocar archivos compilados.

### compilerOptions.rootDir
Define dónde están tus archivos TypeScript. ./src es el directorio donde colocas tus archivos .ts.

### include
Lista los archivos o directorios que deben ser incluidos en la compilación. Aquí, se incluyen todos los archivos .ts en el directorio src.

### exclude
Lista los archivos o directorios que deben ser excluidos de la compilación. node_modules se excluye para evitar compilar dependencias.

### Más Opciones
Este ejemplo cubre las opciones básicas, pero tsconfig.json tiene muchas más configuraciones avanzadas que puedes usar. Puedes consultar la documentación oficial para ver todas las opciones disponibles: Documentación de TypeScript. A medida que avances, exploraremos más opciones y cómo pueden ayudarte a configurar TypeScript para tus necesidades específicas.


