## Configurando Github  

Antes de realizar cualquier acción de subida o bajada de archivos en el repositorio, es necesario configurar nuestro usuario y contraseña de GitHub en nuestra computadora para que GitHub pueda identificarnos como el usuario responsable de los cambios en el repositorio.  

La forma más segura de hacerlo es creando un par de llaves (pública y privada) en nuestra computadora y subir la llave pública a nuestra cuenta de GitHub. De esta manera, cada vez que realicemos una acción en el servidor de GitHub, el servidor sabrá quiénes somos. En caso de cambiar de computadora o no usar esa máquina nuevamente, simplemente se puede eliminar la llave de nuestra cuenta de GitHub.

Si no estás familiarizado con el concepto de llaves, no te preocupes. Sigue los pasos que te indicaremos para configurar tu cuenta de GitHub.

## Crear un par de llaves 

En la terminal, creás las llaves ejecutando el comando ssh-keygen y dándole enter a todas las preguntas:

~~~
ssh-keygen
~~~

Si este paso falla
Intenta inicializar el ssh-agent de esta forma

~~~
eval `ssh-agent -s`
~~~

## Y luego agregar la nuevo llave
~~
ssh-add ~/.ssh/id_rsa
~~


### Agrega tu llave publica en Github

Por último, tenés que copiar la llave pública y pegarla en tu cuenta de Github, en la sección correspondiente de tu perfil.

Con el comando cat imprimí el contenido de la clave pública y la copiala.


~~~
cat ~/.ssh/id_rsa.pub
~~~

Después, en GitHub, entrá a los settings de tu perfil:


Y a la sección de claves:


Agregá una nueva clave SSH:


Elegí un nombre que haga referencia a la computadora a la que se está identificando con esa llave pública y pegá el contenido de lo que copiaste antes.  


Al subir nuestra llave SSH a GitHub, podemos conectarnos de manera segura y el servidor sabe quiénes somos. Esto nos permite no solo bajar contenido de repositorios públicos, sino también acceder y subir cambios a repositorios privados. Es importante usar las direcciones SSH de los repositorios para que todo funcione bien.  


### La primera vez
Una vez que tengas registrada tu llave vas a poder interactuar con el servidor de github.com y este sabrá quien sos. Hay que menciona que la primera vez que interactúes usando un comando git pull o git push vas a recibir una advertencia ya que el servidor es desconocido para tu computadora. Lo único que debes hacer es responderle yes y de ahora en más tu computadora confiará en el servidor de Github.  

