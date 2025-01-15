function getSquaredElementsAtProperty(obj, key) {
    // your code here
        // Verificamos si la propiedad es un array
        if (Array.isArray(obj[key])) {
          // Utilizamos map para cuadrar cada elemento del array
          return obj[key].map(element => element ** 2);
      }
      return []; // Si no es un array o no existe, retornamos un array vacío
}

let obj = {
  key: [2, 1, 5]
};
let output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]
