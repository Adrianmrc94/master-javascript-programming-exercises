function getEvenElementsAtProperty(obj, key) {
    // your code here
        // Verificamos si la propiedad es un array
        if (Array.isArray(obj[key])) {
          // Filtramos los números pares en el array
          return obj[key].filter(element => element % 2 === 0);
      }
      return []; // Si no es un array o no existe, retornamos un array vacío
}

let obj = {
  key: [1000, 11, 50, 17]
};
let output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
