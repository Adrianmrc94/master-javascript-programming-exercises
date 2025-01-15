function getOddElementsAtProperty(obj, key) {
    // your code here
        // Verificamos si la propiedad es un array
        if (Array.isArray(obj[key])) {
          // Filtramos los números impares en el array
          return obj[key].filter(element => element % 2 !== 0);
      }
      return []; // Si no es un array o no existe, retornamos un array vacío
}

let obj = {
  key: [1, 2, 3, 4, 5]
};
let output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
