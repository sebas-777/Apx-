import {ProductCollection} from './models';

class ProductController {
    
    productCollection: ProductCollection

    constructor(){
        this.productCollection = new ProductCollection();
     }

     processOptions(options){

        if(options.search){
            return this.productCollection.getById(options.search)
        }else{
            return this.productCollection.getAll();
        }
     }
}

export {ProductController};