function getEvenLengthWordsAtProperty(obj, key) {
    // your code here
        // Verificamos si la propiedad es un array
        if (Array.isArray(obj[key])) {
          // Filtramos las palabras cuya longitud es par
          return obj[key].filter(word => word.length % 2 === 0);
      }
      return []; // Si no es un array o no existe, retornamos un array vacío
}

let obj = {
  key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
