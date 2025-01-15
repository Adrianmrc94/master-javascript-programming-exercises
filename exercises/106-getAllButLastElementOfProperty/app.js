function getAllButLastElementOfProperty(obj, key) {
    // your code here
        // Verificamos que el valor de la propiedad sea un array y no esté vacío
        if (!Array.isArray(obj[key]) || obj[key].length === 0) {
          return [];
      }
      
      // Devuelve el array con todos los elementos excepto el último
      return obj[key].slice(0, -1);
}

let obj = {
  key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]
