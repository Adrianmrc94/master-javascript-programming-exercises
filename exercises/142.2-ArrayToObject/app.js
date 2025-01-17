function fromListToObject(array) {
  // your code here
  let obj = {};
  
  // Recorremos cada sub-array de la matriz
  for (let i = 0; i < array.length; i++) {
    let key = array[i][0];     // primer elemento de cada sub-array (clave)
    let value = array[i][1];   // segundo elemento de cada sub-array (valor)
    obj[key] = value;          // añadimos la clave y su valor al objeto
  }
  
  return obj; // Retornamos el objeto resultante
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // --> { make: 'Ford', model: 'Mustang', year: 1964 }
