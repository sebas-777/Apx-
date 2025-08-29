// Controllers (mock)

function createController(args) {
    const newProp = createPropModel(args);
    showPropView(newProp);
    return newProp;
  }
  
  function getController(mainArg) {
    const prop = getProp(mainArg);
    showPropView(prop);
    return prop;
  }
  
  function updateController(mainArg, args) {
    const updatedProp = updateProp(mainArg, args);
    showPropView(updatedProp);
    return updatedProp;
  }
  
  function delController(mainArg) {
    const result = deleteProp(mainArg);
    console.log("Propiedad eliminada con éxito");
    return result;
  }