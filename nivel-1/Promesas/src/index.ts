import minimist from "minimist";
import { ProductController} from "./controllers";


function main(): Promise<void> {

    const args = minimist(process.argv.slice(2));

    const  controller = new ProductController();

    const result = controller.processOptions(args);

    console.log(result);
    return Promise.resolve();
}


main().catch( error=> {
    console.error('Error:', error);
});