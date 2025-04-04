// Modelos (mock)

/**
 * Crea una nueva propiedad en la base de datos y la devuelve.
 */
function createPropModel(data) {
    return { id: Math.floor(Math.random() * 1000), ...data };
  }
  
  /**
   * Elimina una propiedad de la base de datos según su ID y devuelve el resultado.
   */
  function deleteProp(id) {
    return { id, status: "deleted" };
  }
  
  /**
   * Actualiza una propiedad en la base de datos según su ID y devuelve la versión actualizada.
   */
  function updateProp(id, data) {
    return { id, ...data, updatedAt: new Date().toISOString() };
  }
  
  /**
   * Obtiene una propiedad de la base de datos según su ID y la devuelve.
   */
  function getProp(id) {
    return { id, title: "Sample Title", price: 100, createdAt: new Date().toISOString() };
  }
  
  // Views (mock)
  function showPropView(prop) {
    if (Array.isArray(prop)) {
      console.table(prop);
    } else {
      console.table([prop]);
    }
  }