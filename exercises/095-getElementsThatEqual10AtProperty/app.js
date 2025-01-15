// Write your function here
function getElementsThatEqual10AtProperty(obj, key) {
    // Verificamos si la clave existe y si el valor de la propiedad es un array
    if (Array.isArray(obj[key])) {
        // Filtramos los elementos del array que son iguales a 10
        return obj[key].filter(element => element === 10);
    }
    return []; // Si no es un array o la clave no existe, retornamos un array vacío
}

let obj = {
    numbers: [10, 20, 10, 30],
    scores: [5, 10, 10, 15, 10],
    empty: [],
    colors: ['red', 'blue']
};

console.log(getElementsThatEqual10AtProperty(obj, 'numbers')); // --> [10, 10]
console.log(getElementsThatEqual10AtProperty(obj, 'scores'));  // --> [10, 10, 10]
console.log(getElementsThatEqual10AtProperty(obj, 'empty'));   // --> []
console.log(getElementsThatEqual10AtProperty(obj, 'colors'));  // --> []
console.log(getElementsThatEqual10AtProperty(obj, 'notExist'));// --> []
