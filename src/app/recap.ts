// Conceptos de typescript para generar componentes en angular
const username: string | number = 'Joan';
const sum = (a: number, b: number) => {
  return a + b;
}
sum(1,3);

class Persona {

  constructor(public age: number, public lastName: string) {}
}

const joan = new Persona(15, 'Molina');
joan.age;
