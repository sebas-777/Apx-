## Scope

En programación, una función es un conjunto de instrucciones que realizan una tarea específica en un programa. Una gran ventaja de utilizar funciones es que podemos organizar nuestro código y hacer que una función principal llame a otras funciones.

Sin embargo, en JavaScript, las funciones también tienen otro aspecto importante que debemos tener en cuenta: crean un ámbito en el que se pueden declarar variables. Este ámbito es conocido como scope.

Existen dos tipos de scope en JavaScript: el scope global y el scope local. El scope global se refiere a las variables que se declaran fuera de cualquier función, lo que significa que se pueden acceder a ellas desde cualquier parte del programa. Por otro lado, el scope local se refiere a las variables que se declaran dentro de una función, lo que significa que solo se pueden acceder a ellas dentro de esa función.

Esta limitación de acceso a las variables dentro de una función es en realidad una gran ventaja al programar. Por un lado, nos asegura que nadie pueda modificar las variables de una función desde fuera de ella y alterar su funcionamiento. Por otro lado, nos permite utilizar nombres de variables repetidos en diferentes funciones sin preocuparnos de que entren en conflicto.

Además, cuando declaramos variables dentro de una función, JavaScript se encarga de limpiar la memoria RAM y eliminar los datos que ya no se utilizan en nuestro programa. A este proceso se le llama garbage collector y nos ayuda a optimizar nuestro programa.

En resumen, las funciones en JavaScript no solo nos permiten organizar nuestro código y crear bloques de código reutilizable, sino que también nos ayudan a controlar el acceso y alcance de las variables dentro de nuestro programa, lo que puede mejorar la seguridad y el rendimiento de nuestro código.