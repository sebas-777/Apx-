
const fs = require('fs');

function getDatos() { 

    const datos = fs.readFileSync('./datos.json', 'utf-8');
    return JSON.parse(datos);
    
}


exports.getAll = function(){
    return getDatos();
}

exports.getOlderThan = function(edad){
   const datos = getDatos();
   const mayoresQue = datos.filter(function(item){
       return item.edad > edad;
   });
   return mayoresQue;
    
}


console.log(this.getAll());