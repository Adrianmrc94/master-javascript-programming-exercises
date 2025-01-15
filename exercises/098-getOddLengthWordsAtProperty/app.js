// Write your function here
function getOddLengthWordsAtProperty(obj, key) {
    // Verificamos si el objeto tiene la propiedad y si es un array
    if (Array.isArray(obj[key])) {
        // Filtramos las palabras con longitud impar
        return obj[key].filter(word => word.length % 2 !== 0);
    }
    return [];  // Si no es un array o la clave no existe, retornamos un array vacío
}

let obj = {
    words: ['hello', 'there', 'is', 'now', 'odd', 'lengths'],
    phrases: ['apple pie', 'banana split', 'cherry tart'],
    empty: [],
    colors: ['red', 'blue']
};

console.log(getOddLengthWordsAtProperty(obj, 'words'));   // --> ['hello', 'there', 'odd']
console.log(getOddLengthWordsAtProperty(obj, 'phrases')); // --> ['apple pie', 'banana split']
console.log(getOddLengthWordsAtProperty(obj, 'empty'));   // --> []
console.log(getOddLengthWordsAtProperty(obj, 'colors'));  // --> ['blue']
console.log(getOddLengthWordsAtProperty(obj, 'notExist'));// --> []
