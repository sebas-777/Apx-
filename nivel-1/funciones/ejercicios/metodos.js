
let miString = "Hola mundo";
let mistringMayusculas = miString.toUpperCase();
console.log(mistringMayusculas);

let miNumero =3.1416;
let miNumeroRedondeado = miNumero.toFixed(2);
console.log(miNumeroRedondeado);

let miBoolean = true;
let miBooleanString = miBoolean.toString();
console.log(miBooleanString);

let miArray = [1,2,3];
miArray.push(4);
console.log(miArray); // [1, 2, 3, 4]

let miOtraArray = ["hola","mundo"];
let miNUevoArray = miOtraArray.slice(1);
console.log(miNUevoArray); // ["mundo"]

let miStringArray = ["Hola","mundo"];
let miStringUnido = miStringArray.join(" ");
console.log(miStringUnido);

let miIndice = miArray.indexOf(3);
console.log(miIndice);
