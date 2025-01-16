import "./datos.js";

const getAll =()=>{
    return personas;
}

const getOlderThan =(number)=>{
    return personas.filter(persona => persona.edad >=number);

}

console.log(getAll());
console.log(getOlderThan(30));


export {getAll,getOlderThan};