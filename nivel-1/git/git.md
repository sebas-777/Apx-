## Introducción a Git

Git es una herramienta de software de control de versiones que se utiliza para realizar un seguimiento de los cambios en los archivos de un programa. 
En esencia, Git es un sistema que te permite registrar y guardar diferentes versiones de tus archivos a medida que los vas editando,
 lo que facilita la colaboración y la gestión de proyectos en equipo. Además, 
 Git también se utiliza para coordinar el trabajo que varias personas realizan sobre archivos compartidos en un repositorio de código. 
 Si usas Windows, es posible que ya hayas instalado Git-Bash junto con el sistema operativo, lo que te permite comenzar a utilizar Git sin tener que descargar nada adicional.


## Un repo
Un repositorio de Git es un lugar donde se almacenan y se gestionan los archivos de un proyecto utilizando el sistema de control de versiones de Git. Git se utiliza para mantener un historial de cambios en los archivos del proyecto y para coordinar el trabajo de varios desarrolladores que contribuyen al proyecto.

Crear un repositorio es muy sencillo. Dentro de una carpeta de código ejecuta el comando:

~~~
cd mi-proyecto
git init
~~~

Para decirle a git que empiece a "seguir" a los archivos de tu repo tenemos que usar el comando `add`. Por ejemplo, si deseas incluir todos los archivos en la carpeta actual, usa el comando.

~~~
git add .
~~~

Para ver la situación de tu respositorio, incluyendo que archivos están siendo "trackeados" y cuales sufrieron cambios utiliza el comando:

~~~
git status
~~~

Con estos comandos ya inicializaste un repositorio y ahora puedes empezar a decirle a git que tome una "foto" de todos los archivos que se están "trackeando" utilizando otros comandos, por ejemplo: commit.

