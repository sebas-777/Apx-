# Rutas

Las rutas relativas y absolutas son utilizadas en la web para hacer referencia a recursos como archivos de imagen, hojas de estilo o archivos de script.

Las rutas absolutas son aquellas que especifican la ubicación de un archivo o recurso de forma completa, comenzando desde la raíz del sistema de archivos. Por ejemplo, si tenemos un archivo de imagen ubicado en la siguiente ruta: /var/www/misitio.com/img/foto.jpg, la ruta absoluta para acceder a esta imagen desde el código HTML sería:



<img src="/var/www/misitio.com/img/foto.jpg" alt="Foto">
Por otro lado, las rutas relativas especifican la ubicación de un archivo o recurso en relación con la ubicación actual del archivo HTML que lo referencia. Las rutas relativas pueden comenzar con / para indicar la raíz del sitio web, ./ para indicar el directorio actual o ../ para indicar el directorio padre. Por ejemplo, si tenemos un archivo de imagen ubicado en la siguiente ruta: /var/www/misitio.com/img/foto.jpg y nuestro archivo HTML está ubicado en /var/www/misitio.com/index.html, la ruta relativa para acceder a la imagen sería:

;
<img src="../img/foto.jpg" alt="Foto">
En este ejemplo, la ruta relativa ../img/foto.jpg indica que la imagen se encuentra en el directorio padre (..) del directorio donde se encuentra el archivo HTML, y luego en la carpeta img.

Es importante tener en cuenta que el uso de rutas relativas o absolutas depende del contexto y de la estructura del sitio web. En general, se recomienda utilizar rutas relativas siempre que sea posible, ya que son más fáciles de mantener y permiten que el sitio web sea movido a otra ubicación sin tener que modificar todas las rutas absolutas.
