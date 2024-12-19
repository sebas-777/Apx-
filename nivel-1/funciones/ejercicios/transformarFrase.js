/* Crear la función transformarFrase.
1. Crear una copia del array frase con la primera letra de cada palabra en mayúscula utilizando el método map.
2. En cada iteración de map, convertir la primera letra de la palabra a mayúscula y concatenarla con el resto de la palabra en minúscula utilizando los métodos charAt y slice. Devolver cada palabra con la primera letra en mayúscula.
3. Unir las palabras de fraseMayuscula en una sola cadena de texto, separadas por un espacio, utilizando el método join
4. Devolver la variable oracion desde la función.
5. Por último, se puede invocar la función transformarFrase con el array frase como argumento para obtener la oración con las palabras en mayúscula.*/ 



function transformarFrase(frase) {
    
    const fraseMayuscula = frase.map(palabra =>{
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    });
     
    const union = fraseMayuscula.join(" ");
    return union;
    
    
} 


function main() { 
    const arraydePalabras = ["hola","pendejo","como" ,"va", "todo"];
    const oracion = transformarFrase(arraydePalabras);
    console.log(oracion);
} 


main();