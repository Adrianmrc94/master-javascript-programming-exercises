function getSmallestElementAtProperty(obj, key) {
    // Verificar si el valor de la propiedad es un array válido con elementos
    if (!Array.isArray(obj[key]) || obj[key].length === 0) {
      return [];
  }
  
  // Si es un array válido, encontrar el valor más pequeño
  return Math.min(...obj[key]);
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
