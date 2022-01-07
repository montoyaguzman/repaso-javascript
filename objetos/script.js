const objeto = {
  id: 1,
  name: 'Juanito',
  app: 'Lopez'
};

console.log(' ================= Ejemplos simples =================')
console.log('objeto', objeto)
console.log('objeto.id', objeto.id)
console.log('objeto["id"]', objeto['id'])

/*
if(key === 'id') {
  objeto.id
} else if (key === 'name') {
  objeto.name
}
// acceder a una prop por medio de su nombre
objeto[key]
*/

// Spread operator
console.log('{ ...objeto }', { ...objeto } )

console.log(' ================= For in =================')
for (const prop in objeto) {
  console.log('prop: ', objeto[prop])
}

console.log(' ================= Object.keys =================')
const keysArr = Object.keys(objeto);
for(let i=0; i<keysArr.length; i++) {
  console.log(`KEY arrFromObjecto[${i}] ${keysArr[i]}`)
  console.log(`VALUE arrFromObjecto[${i}] ${objeto[keysArr[i]]}`)
}

console.log(' ================= Object.values =================')
const valuesArr = Object.values(objeto);
for(let i=0; i<valuesArr.length; i++) {
  console.log(`VALUES arrFromObjecto[${i}] ${valuesArr[i]}`)
}

