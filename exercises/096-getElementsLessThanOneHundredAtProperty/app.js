// Write your function here
function getElementsLessThan100AtProperty(obj, key) {
    // Verificamos si la clave existe y si el valor es un array
    if (Array.isArray(obj[key])) {
        // Filtramos los elementos que son menores a 100
        return obj[key].filter(element => element < 100);
    }
    return []; // Si no es un array o la clave no existe, retornamos un array vacío
}

let obj = {
    numbers: [50, 200, 30, 150],
    scores: [80, 120, 70, 130, 90],
    empty: [],
    colors: ['red', 'blue']
};

console.log(getElementsLessThan100AtProperty(obj, 'numbers')); // --> [50, 30]
console.log(getElementsLessThan100AtProperty(obj, 'scores'));  // --> [80, 70, 90]
console.log(getElementsLessThan100AtProperty(obj, 'empty'));   // --> []
console.log(getElementsLessThan100AtProperty(obj, 'colors'));  // --> []
console.log(getElementsLessThan100AtProperty(obj, 'notExist'));// --> []
