/* Completa el siguiente código para definir una interfaz llamada Book que tenga las siguientes propiedades:

title, de tipo string
author, de tipo string
pages, de tipo number
isbn, de tipo string
Luego, crea un objeto que cumpla con esta interfaz y utilízalo para imprimir la información del libro en la consola. */

interface Book{

    title: string;
    author: string;
    pages:number;
    isbn:string
} 

function printPersonInfo(book:Book) {

    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Pages: ${book.pages}`);
    console.log(`ISBN: ${book.isbn}`);
    
}

const book:Book ={
    title:'The Lord of the Rings',
    author:'J. R. R. Tolkien',
    pages: 1000,
    isbn: '123456789'

}


printPersonInfo(book);

