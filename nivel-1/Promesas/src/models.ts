import "./products.json";
import fs from "fs";
import path from "path";

class Product{
    id: number;
    name: string;
    price: number;
    peliculas:[];
    

    constructor(id: number, name: string, price: number, peliculas:[]) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.peliculas = peliculas;
        
    }

    
}

class ProductCollection{
    
    products: Product[];
    constructor() {
        this.products = this.loadProducts();
    } 

    loadProducts(): Product[] {
        const filePath =  path.join(__dirname, "products.json");
        const data = fs.readFileSync(filePath, "utf-8");
        const jsonData =  JSON.parse(data);

        return jsonData.map((product: any) => new Product(product.id, product.name, product.price, product.peliculas));
        
    }



    getAll(){
        return this.products;
    }

    getById(id: number){
        return this.products.find(products => products.id === id);
    }
}

export {Product, ProductCollection};