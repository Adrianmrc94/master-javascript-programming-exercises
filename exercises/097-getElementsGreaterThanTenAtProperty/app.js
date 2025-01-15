// Write your function here
function getElementsGreaterThan10AtProperty(obj, key) {
    // Verificamos si el objeto tiene la propiedad y si es un array
    if (Array.isArray(obj[key])) {
        // Filtramos los elementos mayores a 10
        return obj[key].filter(element => element > 10);
    }
    return [];  // Si no es un array o la clave no existe, retornamos un array vacío
}

let obj = {
    numbers: [50, 200, 5, 30],
    scores: [8, 120, 70, 130, 9],
    empty: [],
    colors: ['red', 'blue']
};

console.log(getElementsGreaterThan10AtProperty(obj, 'numbers')); // --> [50, 200, 30]
console.log(getElementsGreaterThan10AtProperty(obj, 'scores'));  // --> [120, 70, 130]
console.log(getElementsGreaterThan10AtProperty(obj, 'empty'));   // --> []
console.log(getElementsGreaterThan10AtProperty(obj, 'colors'));  // --> []
console.log(getElementsGreaterThan10AtProperty(obj, 'notExist'));// --> []
