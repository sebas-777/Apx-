<script />
Para integrar JavaScript en un archivo HTML, podemos usar una de estas dos formas.

Archivo
Importar un archivo externo JavaScript usando la etiqueta

Copiar
<script src="ruta/al/archivo.js"></script>
Es importante que la ruta especificada sea la correcta para que el archivo sea encontrado.

Copiar
<!DOCTYPE html>
<html>
<head>
  <title>Mi Página Web</title>
</head>
<body>
  <h1>Hola mundo</h1>
  <script src="script.js"></script>
</body>
</html>
Inline
Escribir el código JavaScript directamente en el archivo HTML, envuelto en etiquetas <script></script>.

Copiar
<!DOCTYPE html>
<html>
<head>
  <title>Mi Página Web</title>
</head>
<body>
  <h1>Hola mundo</h1>
  <script>
    console.log("Hola desde JavaScript!");
  </script>
</body>
</html>
PDF
Anterior
Rutas
