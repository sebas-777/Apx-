// Este es el controlador que tenés que trabajar
/**
 * Procesa los argumentos y devuelve un objeto con la información del comando o un error.
 * @param {string[]} args - Lista de argumentos de la CLI.
 * @param {Object} commandsMap - Mapa de comandos disponibles y sus configuraciones.
 * @returns {{ command?: string, mainArg?: string, argsObject?: Object, error?: string }} - Resultado del procesamiento.
 */
function argsController(args, commandsMap) {
    /*
    PASO A PASO PARA RESOLVER EL PROBLEMA:
    
    1. Validación inicial:
       - Verificamos si se proporcionaron argumentos (`args`). Si no hay argumentos, devolvemos un error indicando que no se proporcionó ningún comando.
       - Extraemos el nombre del comando (`commandName`) del primer argumento (`args[0]`).
       - Comprobamos si el comando existe en el mapa de comandos (`commandsMap`). Si no existe, devolvemos un error indicando que el comando es desconocido, por ejemplo:
       - Si el comando es `foo` y no existe en el mapa, devolvemos el error `return { error: `Unknown command: foo` };`.
    2. Validación del argumento principal:
       - Inicializamos `mainArg` como `null` y creamos un objeto `argsObject` para almacenar los argumentos adicionales.
       - Si el comando requiere un argumento principal (`commandConfig.mainArgRequired`), verificamos si el siguiente argumento (`args[1]`) existe y no comienza con `--` (indicador de opción o flag).
       - Si no se proporciona el argumento principal cuando es requerido, devolvemos un error indicando que falta.
       - Si se encuentra el argumento principal, lo almacenamos en `mainArg` y avanzamos al siguiente índice (`i++`).
    3. Procesamiento de argumentos adicionales:
       - Iteramos a través de los argumentos restantes (`args[i]`).
       - Si el argumento actual comienza con `--`, lo consideramos como una opción o flag.
       - Verificamos si el siguiente elemento no es otra opción (`--`) para tratarlo como un valor asociado a la opción actual.
       - Si no hay un valor asociado, asumimos que es un flag booleano y lo asignamos como `true`.
       Ejemplo:
       ```bash
       node app.js comando --opcion valor --flag
       Resultado esperado: { opcion: "valor", flag: true }
       ```
    4. Verificación de argumentos requeridos:
       - Si el comando tiene argumentos requeridos (`commandConfig.requiredArgs`), revisamos si todos están presentes en `argsObject`.
       - Si falta algún argumento requerido, devolvemos un error indicando cuáles faltan.
    5. Ejecución del comando:
       - Ejemplo de invocación de `resolver` con `mainArg`:
         `commandConfig.resolver(mainArg, argsObject);`
       - Ejemplo de invocación de `resolver` sin `mainArg`:
         `commandConfig.resolver(argsObject);`
       
    6. Retorno de resultado:
       - Si todo se procesa correctamente, devolvemos un objeto con el nombre del comando, el argumento principal (si aplica) y los argumentos adicionales procesados.
       - Ejemplo de retorno: `{ command: "update", mainArg: "id-123", argsObject: { title: "Departamento", price: 15000 } }`
    */
  }
  
  
  // Todo lo que viene a continuación está mockeado
  // Esto es para entender la estructura general y no hace mucho más
  // Más adelante trabajaremos en estas partes
  