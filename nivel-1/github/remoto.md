## Repos remotos

Para trabajar con repositorios remotos en Git, necesitamos utilizar un conjunto especial de comandos que nos permiten interactuar con el repositorio remoto y mantener la sincronización de los cambios realizados localmente y en el repositorio remoto.

## Clone

Este comando se utiliza para clonar un repositorio remoto existente en tu computadora local. La sintaxis básica es la siguiente:

~~~
git clone <URL del repositorio>
~~~

## Remote
Este comando se utiliza para ver y gestionar los repositorios remotos que están asociados a nuestro repositorio local. Por ejemplo, si queremos ver los repositorios remotos asociados a nuestro repositorio local, podemos utilizar el comando git remote -v. Si queremos agregar un nuevo repositorio remoto, podemos utilizar el comando:

~~~

git remote add [nombre del repositorio] [url del repositorio]


# por ejemplo
git remote add origin git@github.com:zapaiamarce/mi-primer-repo.git

~~~

## Push

Este comando se utiliza para subir los cambios que hemos realizado en nuestro repositorio local al repositorio remoto. La sintaxis básica es git push [nombre del repositorio remoto] [nombre de la rama].

~~~

git push origin main

~~~

## Pull
Este comando se utiliza para traer los cambios que se han realizado en el repositorio remoto y actualizar nuestro repositorio local. La sintaxis básica es

