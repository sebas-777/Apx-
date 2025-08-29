# Métodos

En el contexto de una clase, un método es una función que está asociada a esa clase y puede realizar acciones específicas o cálculos basados en los datos o propiedades de la instancia de la clase. Los métodos son parte fundamental de la `Programación Orientada a Objetos (POO)` y se utilizan para encapsular el comportamiento relacionado con la clase.

~~~

class Rectangulo {
  ancho: number;
  alto: number;

  constructor(ancho: number, alto: number) {
    this.ancho = ancho;
    this.alto = alto;
  }

  calcularArea(): number {
    return this.ancho * this.alto;
  }

  calcularPerimetro(): number {
    return 2 * (this.ancho + this.alto);
  }
}

// Crear una instancia de la clase Rectangulo
const miRectangulo = new Rectangulo(5, 10);

// Calcular el área y el perímetro utilizando los métodos
const area = miRectangulo.calcularArea();
const perimetro = miRectangulo.calcularPerimetro();

console.log(`Área: ${area}`);
console.log(`Perímetro: ${perimetro}`);

~~~