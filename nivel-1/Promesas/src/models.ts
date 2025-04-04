import "./products.json";
import fs from "fs";
import path from "path";

class Product{
    id: number;
    name: string;
    price: number;
    stock: number;

    constructor(id: number, name: string, price: number, stock: number){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
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

        return jsonData.map((product: any) => new Product(product.id, product.name, product.price, product.stock));
        
    }



    getAll(){
        return this.products;
    }

    getById(id: number){
        return this.products.find(products => products.id === id);
    }
}

export {Product, ProductCollection};