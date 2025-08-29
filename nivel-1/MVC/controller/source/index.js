function main() {
    const args = process.argv.slice(2);
  
    const argsObject = argsController(args, {
      create: {
        mainArgRequired: false,
        requiredArgs: ["title", "price"],
        resolver: createController
      },
      get: {
        mainArgRequired: true,
        resolver: getController
      },
      update: {
        mainArgRequired: true,
        requiredArgs: ["title", "price"],
        resolver: updateController
      },
      del: {
        mainArgRequired: true,
        resolver: delController
      }
    });
  
    if (argsObject.error) {
      console.error(argsObject.error);
    }
  }
  
  main();