# Un selector  

Al probar HTML, es común notar que el navegador muestra los elementos con algún formato gráfico. Por ejemplo, el texto entre etiquetas h1 aparece en negrita y con un tamaño más grande que el texto entre etiquetas p, que representan los párrafos.  

Aunque estos formatos están relacionados con ciertos estándares (por ejemplo, es común que los títulos estén en negrita y en un tamaño de fuente mayor que los párrafos), estos diseños son dados por la hoja de estilos predeterminada que ofrece el navegador.  

Sin embargo, la mayoría de las veces, el diseño que debemos implementar en nuestros proyectos estará muy alejado de estas configuraciones predeterminadas. Por lo tanto, es fundamental que entendamos cómo funcionan las hojas de estilos y cómo podemos intervenir en ellas usando CSS.  

Para empezar a usar CSS, es necesario conocer su sintaxis. Por un lado, están los selectores, que indican los elementos HTML que queremos modificar, y, por otro lado, están las propiedades, que son los cambios que queremos aplicar a esos elementos.  

Un ejemplo de la sintaxis de CSS sería:  

~~~
body { 
  background-color: red; 
}

~~~

En este ejemplo, usamos la etiqueta HTML body como selector. Esto significa que las propiedades que se declaren dentro de las llaves solo afectarán a las etiquetas body. Existen otros tipos de selectores que veremos en los próximos capítulos.   

Siguiendo con el ejemplo, vemos que entre las llaves usamos la propiedad background-color y le asignamos el valor red. Esta propiedad nos ayuda a modificar el color de fondo de los elementos seleccionados. Las propiedades pueden modificar aspectos como el color, tamaño, ubicación, margen, bordes, etc. de los elementos que indicamos en el selector.   

Como podemos ver, en general, el uso de CSS es bastante sencillo. La complejidad de esta herramienta aparece cuando debemos encontrar la mejor forma de crear selectores y de combinar propiedades para lograr el diseño que nuestra web requiere. Por lo tanto, a lo largo de este módulo, utilizaremos HTML y CSS para crear diferentes componentes gráficos que se encuentran en los sitios web.  