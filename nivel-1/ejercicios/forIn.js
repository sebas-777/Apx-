const iterable = ["🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻"];
for (var key in iterable) {
    console.log(key);
}

for (var key in iterable){
    console.log(iterable[key]);
} 

const productos = {
    "p001":{
        nombre:"Laptop",
        marca:"Lenovo",
        precio:1000
    },
    "p002":{
        nombre:"Mouse",
        marca:"Logitech",
        precio:100
    },
    "p003":{
        nombre:"Teclado",
        marca:"Logitech",
        precio:100
    }
};

//Usamos un bucle for..in para recorrer el objeto

for (const id in productos){
    console.log(`ID:${id}`);
    console.log(`Nombre:${productos[id].nombre}`);
    console.log(`Marca:${productos[id].marca}`);
    console.log(`Precio:$${productos[id].precio}`)
    console.log("----------------");
}