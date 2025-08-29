 
 class Peli{
    titulo: string;
    rating: number;
    getPeli(){
        return this;
    }

 }


function main() {
    // instancia 
    const pelicula1 = new Peli();
    pelicula1.titulo = "El señor de los anillos";
    pelicula1.rating = 5;

    const pelicula2 = new Peli();
    pelicula2.titulo = "El señor de los anillos 2";
    pelicula2.rating = 4;

    console.log("first movie", pelicula1.getPeli());
    console.log("second movie", pelicula2.getPeli());
 }

 main();