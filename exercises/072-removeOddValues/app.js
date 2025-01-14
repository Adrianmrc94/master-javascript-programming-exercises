function removeOddValues(obj) {
    // your code here
    // Recorremos todas las propiedades del objeto
    for (let key in obj) {
      // Verificamos si el valor es un número y si es impar
      if (typeof obj[key] === 'number' && obj[key] % 2 !== 0) {
          delete obj[key];
      }
  }
  return obj;  // Retornamos el objeto modificado
}

let obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
