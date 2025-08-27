const canciones = [
    {
        nombre:"cancion1",
        duracion:3,
    },
    {
        nombre:"cancion2",
        duracion:2.5
    },
    {
        nombre:"cancion3",
        duracion:4
    }
];

exports.play = function(cancion){
    const cancionEncontrada = canciones.find(cancionEncontrada => cancionEncontrada.nombre ===cancion);
    return cancionEncontrada;
}

exports.pausa = function(duracion) {
    const cancionEncontrada = canciones.filter(cancionEncontrada => cancionEncontrada.duracion === duracion);
    return cancionEncontrada;
    
}

exports.adelantar = function(cancion){
    const cancionEncontrada = canciones.find(cancionEncontrada => cancionEncontrada.nombre === cancion);
    return cancionEncontrada;
    
}

exports.retroceder = function(cancion){
    const cancionEncontrada = canciones.find(cancionEncontrada => cancionEncontrada.nombre === cancion);
    return cancionEncontrada;
    
}

exports.canciones = canciones;