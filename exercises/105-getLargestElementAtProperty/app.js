function getLargestElementAtProperty(obj, key) {
    // your code here
        // Verificar si el valor de la propiedad es un array válido con elementos
        if (!Array.isArray(obj[key]) || obj[key].length === 0) {
          return [];
      }
      
      // Si es un array válido, encontrar el valor más grande
      return Math.max(...obj[key]);
}

let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
