# Precedencia y especificidad.
Cuando empezamos a trabajar con CSS, aprendimos que los navegadores otorgan a los elementos ciertos estilos por defecto. Es decir, cuando no se declara ningún valor para determinada propiedad CSS, el navegador le asigna uno predeterminado.

Ahora, vamos a ver qué sucede cuando se declaran múltiples valores para la misma propiedad de un elemento. Para esto, utilizamos un concepto clave en CSS que, de hecho, forma parte de su nombre. Nos referimos a la cascada (CSS significa hojas de estilo en cascada).

La cascada es un comportamiento mediante el cual se ordenan por prioridad las declaraciones CSS que están en conflicto. De esta forma, se establece cuál de esas declaraciones "gana" de acuerdo a una serie de criterios.

CSS utiliza una fórmula para calcular la precedencia de una declaración sobre otra. Uno de esos criterios es la especificidad.

<!DOCTYPE html>
<html>
<head>
	<title>Ejemplo de Cascada y Especificidad en CSS</title>
	<style>
		/* Selector de tipo */
		p {
			color: blue;
		}
		
		/* Selector de clase */
		.destacado {
			color: red;
		}
		
		/* Selector de ID */
		#parrafo-1 {
			color: green;
		}
	</style>
</head>
<body>
	<!-- Creamos un párrafo con un ID y una clase -->
	<p id="parrafo-1" class="destacado">Este es un ejemplo de cascada y especificidad en CSS.</p>
	<!-- Creamos otro párrafo con una clase -->
	<p class="destacado">Si se declara más de un valor para la misma propiedad, la cascada de CSS establece cuál de esas declaraciones “gana” de acuerdo a una serie de criterios.</p>
	<!-- Creamos un tercer párrafo sin clases ni IDs -->
	<p>El orden en que se declaran las reglas también es importante, ya que la última declaración sobrescribe a las anteriores en caso de conflicto.</p>
</body>
</html>
 
En este ejemplo, definimos tres reglas de estilo para párrafos:  

- La primera regla de estilo se aplica a todos los párrafos (p) y establece el color azul. 
- La segunda regla de estilo se aplica a cualquier elemento con la clase destacado y establece el color rojo. 
- La tercera regla de estilo se aplica a cualquier elemento con el ID parrafo-1 y establece el color verde. 
El primer párrafo tiene tanto el ID parrafo-1 como la clase destacado, por lo que cumple con los criterios de la segunda y la tercera regla. Sin embargo, la regla con el ID tiene mayor especificidad que la regla con la clase, por lo que el color que se aplicará es verde.

El segundo párrafo solo tiene la clase destacado, por lo que se aplicará la regla correspondiente a esa clase, y su color será rojo.

El tercer párrafo no tiene clases ni IDs, por lo que se aplicará la primera regla que establece el color azul.

En resumen, la cascada de CSS establece que la regla con mayor especificidad será la que se aplique en caso de conflicto. Además, el orden en que se declaran las reglas también es importante, ya que la última declaración sobrescribe a las anteriores en caso de conflicto.

