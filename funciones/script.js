// ES_5
function sayHello(name) {
  console.log('Hola', name);
}
sayHello('Juan');

// Funciones anonimas
/*
function() {
  // sentences 
}
Usada para pasarse como parametro
*/

/*
() => {
  // sentences
  Usada para pasarse como parametro
}
*/

// Funcion flecha que se guarda en una variable
const myFuncion = (name) => {
  console.log('Hola', name);
};
myFuncion('Juan');

// IIFE (Autoinvocadas)

// Funciones como propiedades un objeto

// Retorno y no retorno en una funcion
function suma(a, b) {
  console.log('resultado suma(): ', a + b);
}
suma(8, 9);

function retornaSuma(a, b) {
  const res = a + b;
  // const arr = [ res ];
  return res;
}
const resultado = retornaSuma(8, 9);
console.log('resultado retornaSuma(): ', resultado);
// console.log('resultado retornaSuma(): ', resultado[0]);
