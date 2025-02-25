class Producto{


    name:string;
    price:number;
    constructor(name:string, price:number){
        this.name = name;
        this.price = price;

    }

    getPrice(){
        return this.price;
    }
}

class ProductoDigital extends Producto{

    useBatteries:boolean;

    constructor(name:string,price:number,useBatteries){
        super(name,price);
        this.useBatteries = useBatteries;
    }

    setBatteries(usa:boolean){
        this.useBatteries = usa;
    }
}

class ProductoAlimenticio extends Producto{
    
    productoAlimenticio:Date;

    constructor(name:string,price:number,productoAlimenticio){
        super(name,price);
        this.productoAlimenticio = productoAlimenticio;
    } 

    checkCaducidad():boolean{
        const hoy = new Date();
        const caducidad = new Date(this.productoAlimenticio);
        return hoy > caducidad;
    }
}


class ProductoCongelado extends ProductoAlimenticio{

    temperaturaRecomendada:number;
   private margen:number;

    constructor(name:string,price:number,productoAlimenticio,temperaturaRecomendada,margen:number = 5){
        super(name,price,productoAlimenticio);
        this.margen = margen;
        this.temperaturaRecomendada = temperaturaRecomendada;
    }

    isProperlyStored():boolean{
        const temperaturaActual:number = 20;
       if(temperaturaActual<this.temperaturaRecomendada-this.margen ||temperaturaActual>this.temperaturaRecomendada+this.margen){
        return true
       } else{
        return false
       }
    }
}

    
function main() {
    

    // instancia de objetos de producto alimenticio
     const lacteo = new ProductoAlimenticio("quesito",55,"2022-10-25");

    const caduco = lacteo.checkCaducidad();
    console.log("El producto caduco?",caduco ? "si" : "no");

    console.log("El nombre del producto alimenticio es : " , lacteo.name);
    console.log("El precio del producto alimenticio es : ", lacteo.price);
    console.log("la fecha de casducidad es : ", lacteo.productoAlimenticio);

   // Creación de la instancia
const helado = new ProductoCongelado("Helado de Vainilla", 2.99, "2024-12-31", -18);

// Temperatura actual de almacenamiento
const temperaturaActual = -20; // Supongamos que esta es la temperatura actual

// Verificar si el producto está almacenado correctamente
const estaAlmacenadoCorrectamente = helado(temperaturaActual);
console.log("¿Está almacenado correctamente?:", estaAlmacenadoCorrectamente ? "Sí" : "No");

// Verificar si el producto está caducado
const esCaducado = helado.checkCaducidad();
console.log("¿El producto está caducado?:", esCaducado ? "Sí" : "No");

// Mostrar detalles del producto
console.log("Nombre del Producto:", helado.name);
console.log("Precio:", helado.getPrice());
console.log("Fecha de Caducidad:", helado.fechaCaducidad.toDateString());
console.log("Temperatura Recomendada:", helado.temperaturaRecomendada, "grados");

}

main();