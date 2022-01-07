const obj = { id: 1, name: 'juan lopez' };
let idExt = 0;

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      /*
      console.log('Dentro de la promise')
      idExt = obj.id;
      resolve(obj)
      */
     reject(new Error('Ocurrio un error'))
    }, 2000);
  });
}

console.log('INICIANDO')
console.log('idExt : ', idExt)
getData().then(res => {
  console.log('res =>', res.id)
  console.log('FIN')
}).catch(error => console.log('err: ', err));

setTimeout(() => {
  console.log('idExt: ', idExt)
}, 5000);
