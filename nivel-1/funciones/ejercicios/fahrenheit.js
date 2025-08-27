function convertirCelsiusAFahrenheit(celsius){

    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit

};

const temperaturaEnCelsius = 30;
const temperaturaEnFahrenheit = convertirCelsiusAFahrenheit(temperaturaEnCelsius);

console.log(temperaturaEnFahrenheit);