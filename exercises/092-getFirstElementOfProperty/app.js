// Write your function here
function getFirstElementOfProperty(obj, key) {
    // Verificamos si la clave existe y el valor de la propiedad es un array
    if (Array.isArray(obj[key])) {
        return obj[key][0];  // Retorna el primer elemento del array
    }
    return undefined;  // Si no hay un array o la clave no existe, retornamos undefined
}

let obj = {
    numbers: [10, 20, 30],
    colors: ['red', 'blue', 'green'],
    empty: []
};

console.log(getFirstElementOfProperty(obj, 'numbers'));  // --> 10
console.log(getFirstElementOfProperty(obj, 'colors'));   // --> 'red'
console.log(getFirstElementOfProperty(obj, 'empty'));    // --> undefined
console.log(getFirstElementOfProperty(obj, 'notExist')); // --> undefined
