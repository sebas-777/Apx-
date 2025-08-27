## MVC 

Cuando empezamos a usar módulos, un problema que empezamos a tener es saber cómo separar el código que conforma un programa. En principio la práctica más común es romper, el `index.js` cuando este se vuelve muy grande y se nos complica leerlo. Esta practica nos sirve al principio, pero rápidamente vamos a notar que necesitamos algún tipo de criterio para distribuir ese código en los distintos módulos.  

Por suerte existen muchos patrones de arquitectura que se usan en el mercado que nos van a ayudar a organizar nuestra base de código de distintas maneras. Uno de los patrones más utilizados en proyectos pequeños y grandes es el patrón `MVC`.  

`MVC` es una forma de organizar el código que se caracteriza por separar los componentes de una aplicación en tres grupos o capas: `el modelo, la vista y el controlador.`


`Model / Modelo`

Es la parte del código que maneja los datos. Es decir, representa la información con la que el programa opera. Es el código que accede a los archivo, bases de datos o cualquier otra fuente de datos. Esta capa se encarga de que todas las operaciones respecto a los datos sean seguras y confiables.  

`View / Vista`

Es la forma en la que se representa la información al usuario. También nos referimos como view al código que genera lo que el usuario puede ver e interactuar. En nuestro caso la vista es la terminal, ya que es donde mostramos la información y donde el usuario nos puede enviar datos. En el futuro nuestra vista (view) será el código que se encarga de mostrar la data en la interface web.  

La vista se encarga de mostrar los datos proporcionados por el modelo de una manera comprensible y atractiva, y captura las acciones del usuario para enviarlas al controlador.

`Controller / Controlador`

Es el punto de entrada de las solicitudes que el usuario hace al programa. También, se encarga de validar las solicitudes y de derivarlas al modelo correspondiente. Este es quien controla que los pedidos tienen sentido y se encarga de "hablar" con el modelo y luego pasarle la data que el modelo nos devuelve a la vista.