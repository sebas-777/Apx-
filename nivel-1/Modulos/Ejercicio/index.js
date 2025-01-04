// importamos el modulo reproductor 
const reproductor = require('./reproductor.js');

const nombreDeCancion = "cancion1";
const duracionDeCancion = 4;

// usamos las funciones del modulo reproductor
reproductor.play(nombreDeCancion);
reproductor.pausa(duracionDeCancion);
reproductor.adelantar(nombreDeCancion);
reproductor.retroceder(nombreDeCancion);

// imprimimos la informacion de las canciones
const lista = reproductor.canciones;
console.log(lista);

const cancionEnReproduccion = reproductor.play(nombreDeCancion);
console.log(cancionEnReproduccion);

