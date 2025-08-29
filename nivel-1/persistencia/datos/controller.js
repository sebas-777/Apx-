import "./datos.js";

const getAll =()=>{
    return personas;
}

const getOlderThan =(number)=>{
    return personas.filter(persona => persona.edad >number);

}




export {getAll,getOlderThan};