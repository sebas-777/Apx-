import {getAll,getOlderThan} from"./controller.js";

const edad = 20;

const personas = getAll();

const mayoresDe = getOlderThan(edad);


function main() {
    
    console.table(`Las personas son ${JSON.stringify(personas, null, 2)} y que tienen una edad mayor a ${edad} son: ${JSON.stringify(mayoresDe, null, 2)}`);
} 

main();