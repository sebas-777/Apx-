import {getAll,getOlderThan} from "./controller.js";
import "./datos.js";
import { personas } from "./datos.js";

const datos = personas;

function testeaModuloDatos() {
    const todos = getAll();
  
    const sorted = todos.sort((a, b) => a.edad - b.edad);
  
    const someWithError = todos.find((i) => {
      return !i.edad || !i.nombre || !i.cosas;
    });
  
    if (!someWithError) {
      console.log("getAll passed");
    } else {
      throw "getAll devuelve algún objeto que no tiene nombre, edad o cosas";
    }
  
    const butFirst = sorted.slice(1);
    const first = sorted[0];
    const mayoresDe = getOlderThan(first.edad);
  
    if (mayoresDe.length == butFirst.length) {
      console.log("getOlderThan passed");
    } else {
      throw "getOlderThan not passed";
    }
  }
  
  function main() {
    testeaModuloDatos();
  }
  
  main();