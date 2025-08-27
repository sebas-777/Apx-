import { cosas } from "./cosas";

function main() { 

    const collection = cosas.getAll();
    console.log(`La coleccion de cosas es: ${JSON.stringify(collection, null, 2)}`);

    const  cosa1 = cosas.getById(1);
    console.log(`La cosa 1 es: ${JSON.stringify(JSON.stringify(cosa1,null,2))}`)
    
}

main();