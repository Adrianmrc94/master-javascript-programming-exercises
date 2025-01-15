function getAverageOfElementsAtProperty(obj, key) {
  // your code here
    // Verificamos si la propiedad es un array y si tiene al menos un elemento
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
      // Calculamos la suma de los elementos
      const sum = obj[key].reduce((acc, curr) => acc + curr, 0);
      // Retornamos el promedio
      return sum / obj[key].length;
  }
  return 0; // Si no es un array o no tiene elementos, retornamos 0
}

let obj = {
  numbers: [1, 2, 3, 4, 5],
  moreNumbers: [10, 20, 30],
  emptyArray: [],
  noNumbers: 'string'
};

console.log(getAverageOfElementsAtProperty(obj, 'numbers'));     // --> 3
console.log(getAverageOfElementsAtProperty(obj, 'moreNumbers')); // --> 20
console.log(getAverageOfElementsAtProperty(obj, 'emptyArray'));  // --> 0
console.log(getAverageOfElementsAtProperty(obj, 'noNumbers'));  // --> 0
console.log(getAverageOfElementsAtProperty(obj, 'notExist'));   // --> 0
