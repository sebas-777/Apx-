## Métodos

Los métodos en JavaScript son funciones que se aplican a un objeto o a un valor primitivo, y permiten realizar operaciones específicas sobre ellos. Los métodos pueden ser llamados directamente sobre el objeto o valor, y se invocan mediante la notación de punto. Por ejemplo, podemos usar el método "toUpperCase()" en un string para convertir todas sus letras en mayúsculas.

~~~
let miString = "Hola mundo";
let miStringMayusculas = miString.toUppercase();
console.log(miStringMayusculas)
~~~

## En primitivos  

Los métodos de primitivos se utilizan para manipular valores primitivos, como strings, números y booleanos. Estos métodos no cambian el valor original, sino que devuelven un nuevo valor con la modificación realizada.  

Algunos métodos de primitivos incluyen:

`toUpperCase():` Convierte un string a mayúsculas.  
`toLowerCase():` Convierte un string a minúsculas.  
`toString():` Convierte un valor en su representación como string.  
`toFixed(n):` Convierte un número en un string con n decimales.  
`parseInt():` Convierte un string en un número entero.  

~~~
let miString = "Hola mundo";
let mistringMayusculas = miString.toUppercase();
console.log(mistringMayusculas);

let miNumero =3.1416;
let miNumeroRedondeado = miNumero.toFixed(2);
console.log(miNUmeroRedondeado);

let miBoolean = true;
let miBooleanString = miBoolean.toString();
console.log(miBooleanString);

~~~

## En arrays

Los arrays en JavaScript tienen una gran cantidad de métodos que permiten manipular su contenido de diversas formas. Estos métodos pueden agregar o eliminar elementos del array, buscar elementos, realizar operaciones sobre ellos y mucho más.

Algunos métodos de arrays incluyen:

~~~ 

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

~~~