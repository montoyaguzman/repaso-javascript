const objeto = {
  id: 1,
  name: 'Juanito',
  app: 'Lopez'
};

console.log(' ================= Object.keys con map =================')
const arrToMap = Object.keys(objeto);
arrToMap.map(element => console.log('element: ', objeto[element]))

console.log(' ================= for vs map =================')
const arr = [1, 2, 3, 4, 5];

console.log(' ================= for =================')
for(let i=0; i<arr.length; i++) {
  console.log(`arr[${i}] = ${arr[i]}`)
}

console.log(' ================= map con funcion anonima =================')
arr.map(function(element, index) {
  console.log(`arr[${index}] = ${element}`)
});

console.log(' ================= map con funcion flecha =================')
arr.map((element, index) => {
  console.log(`arr[${index}] = ${element}`)
});

console.log(' ================= map simplificado =================')
arr.map(element => console.log(`element = ${element}`) );

console.log(' ================= map con cuerpo =================')
const arr2 = [1, 2, 3, 4, objeto, 'hOLa Mnd0'];
arr2.map((element, index) => {
  if(typeof element === 'object') {
    console.log(element.name)  
  } else {
    console.log(`arr2[${index}] = ${element}`)
  }
});
