// usando fs
const fs = require('fs');

//leemos el archivo
const content = fs.readFileSync('README.md', 'utf-8');


//contamos las palabras
const words = content.split(' ');

const reactWordCount =  content.match(/Angular/gi ?? []).length;

console.log('Palabras:', words.length);
console.log('Palabras React:',reactWordCount);