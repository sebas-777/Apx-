// interfaces de cosas

interface Cosas{
    id: number;
    name: string;
    description: string;
}

// creamos un modulo de cosas
const cosas ={
    //Creamos la coleccion de objetos 
    collection:[
        {id: 1, name: "cosa1", description: "descripcion1"},
        {id: 2, name: "cosa2", description: "descripcion2"},
        {id: 3, name: "cosa3", description: "descripcion3"}
    ],

    // metodo para obtener la coleccion de cosas 
    getAll:function(): Cosas[]{
        return this.collection;
    },

    getById:function(id: number): Cosas| undefined{
        return this.collection.find(cosas => cosas.id === id);
    }


}

export{
    cosas
}