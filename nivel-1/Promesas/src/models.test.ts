import test from "ava";
import { ProductCollection} from "./models";

const productCollection = new ProductCollection();

test ('test load from JSON ',t =>{
    const products = productCollection.getAll();
    t.true(products.length > 0);
});

test('test get by id ',t => {
    const product = productCollection.getById(1);
    t.is(product?.name, "Pantalla");
});

test('test get by id unknown ',t => {
    const product = productCollection.getById(100);
    t.is(product, undefined);
});

