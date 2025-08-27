# Medias Queries 

Las media queries son una herramienta fundamental para implementar el responsive design en el desarrollo web. Estas permiten adaptar la representación del contenido a características del dispositivo, como la resolución de pantalla o la orientación, entre otras.


/* Definimos los estilos base */
body {
  font-size: 16px;
  line-height: 1.5;
  margin: 0;
}

/* Usamos media queries para adaptar los estilos a diferentes tamaños de pantalla */
@media (min-width: 768px) {
  /* A partir de 768px, cambiamos el tamaño de fuente y el margen */
  body {
    font-size: 18px;
    margin: 0 20px;
  }
}

@media (min-width: 1024px) {
  /* A partir de 1024px, cambiamos la disposición en dos columnas */
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (min-width: 1440px) {
  /* A partir de 1440px, cambiamos la disposición en tres columnas */
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}
