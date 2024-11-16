const peli = {
    titulo:'Jurassic Park',
    sinopsis:'Un multimillonario construye un parque temático con dinosaurios clonados, pero todo sale mal cuando los dinosaurios escapan y aterrorizan a los visitantes.,',
    fechaEstreno:'1993',
    director:'Steven Spielberg',
    duracionMinutos:127,
    calificacion:8.1
};

// process.arg[2]es elargumento enviado desde la terminal
const propiedadSeleccionada = peli[process.argv[2]];
console.log(propiedadSeleccionada);