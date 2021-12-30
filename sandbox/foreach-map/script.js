const arreglo = [
  { id: 1, name: 'Juanito 1', app: 'Lopez 1' }, 
  { id: 2, name: 'Juanito 2', app: 'Lopez 2' },
  { id: 3, name: 'Juanito 3', app: 'Lopez 3' }
];

console.log('MAP')
const resultMap = arreglo.map(patito => {
  patito = { ...patito, apm: 'martinez' };
  console.log('element: ', patito)
  return patito;
});
console.log('resultMap', resultMap)

console.log('FOR EACH')
const resultForEach = arreglo.forEach(patito => {
  patito = { ...patito, apm: 'martinez' };
  console.log('element: ', patito)
});
console.log('resultForEach', resultForEach)

/*
La diferencia entre map y for each es que el primero retorna un arreglo
y el segundo no retorna nada.
*/