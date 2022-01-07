let numero = 8;
const numero2 = numero;
numero = 10;
console.log('numero:', numero);
console.log('numero2:', numero2);

/*
Los objetos y arrays de javascript guardan valores por referencia
*/

const arreglo = [
  { id: 1, name: 'Juanito 1', app: 'Lopez 1' }, 
  { id: 2, name: 'Juanito 2', app: 'Lopez 2' },
  { id: 3, name: 'Juanito 3', app: 'Lopez 3' }
];
console.log('arreglo:', arreglo);
const arreglo2 = [ ...arreglo ];
const element = { id: 4, name: 'Juanito 4', app: 'Lopez 4' };
arreglo.push(element);
// Este proceso se requiere en lit para que entienda el render q una de sus propiedades cambio
// Lit no reconoce cambios internos de una prop, como por ejemplo llaves de un objeto o un array
// this.arr = [ ...this.arr ];
console.log('arreglo:', arreglo);
console.log('arreglo2:', arreglo2);

const objeto = { id: 1, name: 'Juanito 1', app: 'Lopez 1' };
console.log('objeto:', objeto);
const objeto2 = { ...objeto };
objeto.office = 'polanco';
console.log('objeto:', objeto);
console.log('objeto2:', objeto2);

// Uncaught TypeError: Assignment to constant variable.
// arreglo = [1,2,3]