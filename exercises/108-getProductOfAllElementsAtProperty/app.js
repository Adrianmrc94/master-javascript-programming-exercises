function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
        // Verificamos si la propiedad en la key es un array y no está vacía
        if (Array.isArray(obj[key]) && obj[key].length > 0) {
          // Usamos reduce para multiplicar todos los elementos del array
          return obj[key].reduce((product, currentValue) => product * currentValue, 1);
      } else {
          return 0;  // Si no es un array o está vacío, retornamos 0
      }
}

let obj = {
  key: [1, 2, 3, 4]
};
let output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24
