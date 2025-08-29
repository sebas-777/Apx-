// crear las clases Edificio, Piso y Departamento aquí

class Departamento{
    nombre: string;

    constructor(nombre:string){
        this.nombre = nombre;
    } 

    getName(){
        return this.nombre
    }

}

class Piso{
    nombre: string;
    deptos:Departamento[] = [];

    constructor(nombre){

        this.nombre = nombre;
        
    }

    pushDepartamento(deptos:Departamento){ 
        return this.deptos.push(deptos)
        
      
    }

    getDepartamentos():Departamento[]{
        return this.deptos;
    }
}


class Edificio{

    pisos:Piso[];
    deptos:Departamento[];
    constructor(pisos:Piso[]){
        this.pisos = pisos;
    } 

    addDepartamentoToPiso(NombreDepiso:string,departamento:Departamento){
       const pisoEncontrado = this.pisos.find(p=>p.nombre == NombreDepiso);
    } 

    getDepartamentosByPiso(nombreDelpiso:string):Departamento[]{
        
        return [];
    }
}



// no modificar este test
function testClaseEdificio() {
    const unPiso = new Piso("planta baja");
    const otroPiso = new Piso("primer piso");
    const unEdificio = new Edificio([unPiso, otroPiso]);
    const deptoUno = new Departamento("depto uno");
    const deptoDos = new Departamento("depto dos");
    const deptoTres = new Departamento("depto tres");
    unEdificio.addDepartamentoToPiso("planta baja", deptoUno);
    unEdificio.addDepartamentoToPiso("planta baja", deptoDos);
    unEdificio.addDepartamentoToPiso("planta baja", deptoTres);
  
    const deptos = unEdificio.getDepartamentosByPiso("planta baja");
    const deptosEmpty = unEdificio.getDepartamentosByPiso("primer piso");
  
    if (
      Array.isArray(deptosEmpty) &&
      deptosEmpty.length == 0 &&
      deptos.length == 3 &&
      deptos[2].getName() == "depto tres"
    ) {
      console.log("testClaseBandaApartment passed");
    } else {
      throw "testClaseBandaApartment not passed";
    }
  }
  
  function main() {
    testClaseEdificio();
  }
  main();