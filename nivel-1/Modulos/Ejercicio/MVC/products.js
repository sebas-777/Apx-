const  products = [
    {
        id: 1,
        name: "Laptop",
        stock: 5,
        price: 1000
    },
    {
        id: 2,
        name: "Mouse",
        stock: 10,
        price: 100
    },
    {
        id: 3,
        name: "Teclado",
        stock: 40,
        price: 1000  
    }
];

function getOne(id) {
    const product = products.find(product =>product.id === id);
    return product; 
}

function getAll() {
    return products;
    
}

function getAllWith(stock) {
    const productsWithStock = products.filter(product => product.stock >= stock);
    return productsWithStock;
    
}

module.exports = {
    getOne,
    getAll,
    getAllWith
};