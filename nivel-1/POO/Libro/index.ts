class Libro{
    titulo: string;
    autor: string;
    fechaPublicacion:number;

    constructor(titulo:string,autor:string,fechaPublicacion:number){
        this.titulo = titulo;
        this.autor = autor;
        this.fechaPublicacion = fechaPublicacion;
    }

    getAntiguedad(): number{

        const antiguedad = new Date().getFullYear() - this.fechaPublicacion;
        return antiguedad;
    }
}

function main(){

    // instancia

    const libro1 = new Libro("El señor de los anillos","JRR Tolkien",1954);
    const libro2 = new Libro("El señor de los anillos 2","JRR Tolkien",1955);

    const antiguedad1 = libro1.getAntiguedad();
    const antiguedad2 = libro2.getAntiguedad();

    console.log(`el libro ${libro1.titulo} fue publicado hace ${antiguedad1} años`);
    console.log(`el libro ${libro2.titulo} fue publicado hace ${antiguedad2} años`);
} 

main();