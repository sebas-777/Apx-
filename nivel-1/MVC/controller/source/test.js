// Tests
function testArgsController() {
    const commandsMap = {
      create: {
        mainArgRequired: false,
        requiredArgs: ["title", "price"],
        resolver: () => { },
      },
      get: {
        mainArgRequired: true,
        resolver: () => { },
      },
      update: {
        mainArgRequired: true,
        resolver: () => { },
      },
      del: {
        mainArgRequired: true,
        resolver: () => { },
      },
    };
  
    const tests = [
      { command: ["create", "--title", "Departamento", "--price", "15000"], expectedError: false },
      { command: ["create", "--title", "Departamento"], expectedError: true },
      { command: ["get", "id-123"], expectedError: false },
      { command: ["get"], expectedError: true },
      { command: ["update", "id-123", "--precio", "300000"], expectedError: false },
      { command: ["del", "id-123"], expectedError: false },
      { command: ["del"], expectedError: true },// Tests
      function testArgsController() {
        const commandsMap = {
          create: {
            mainArgRequired: false,
            requiredArgs: ["title", "price"],
            resolver: () => { },
          },
          get: {
            mainArgRequired: true,
            resolver: () => { },
          },
          update: {
            mainArgRequired: true,
            resolver: () => { },
          },
          del: {
            mainArgRequired: true,
            resolver: () => { },
          },
        };
      
        const tests = [
          { command: ["create", "--title", "Departamento", "--price", "15000"], expectedError: false },
          { command: ["create", "--title", "Departamento"], expectedError: true },
          { command: ["get", "id-123"], expectedError: false },
          { command: ["get"], expectedError: true },
          { command: ["update", "id-123", "--precio", "300000"], expectedError: false },
          { command: ["del", "id-123"], expectedError: false },
          { command: ["del"], expectedError: true },
        ];
      
        tests.forEach(({ command, expectedError }, index) => {
          const result = argsController(command, commandsMap);
          const hasError = Boolean(result.error);
          console.log(`Test ${index + 1}: ${hasError === expectedError ? '✅' : '❌'} - Comando: ${command.join(" ")}`);
        });
      }
      
      // Descomentá esta linea parar correr los tests y probar tu argsController
      // testArgsController();
    ];
  
    tests.forEach(({ command, expectedError }, index) => {
      const result = argsController(command, commandsMap);
      const hasError = Boolean(result.error);
      console.log(`Test ${index + 1}: ${hasError === expectedError ? '✅' : '❌'} - Comando: ${command.join(" ")}`);
    });
  }
  
  // Descomentá esta linea parar correr los tests y probar tu argsController
   testArgsController();