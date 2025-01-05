/* Para resolver este desafío, te proponemos que crees una función que reciba un array de argumentos introducidos desde la terminal con este formato:

node index.js arg1 arg2 arg3 ... argN

Además, esa función tiene que devolver el array de argumentos convertido en un objeto, por lo tanto, tiene que tener este formato:

{
  "argumento":"valor",
  "otro-argumento":"otro-valor",
  (etc…)
}
*/

const { argv } = require('node:process');

let args = argv.slice(2);


function main(args) {

    args = Object.fromEntries(args.map(arg => arg.split(':')));
    console.log(args);
}

main(args);