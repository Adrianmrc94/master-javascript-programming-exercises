// Write your function here
function getLastElementOfProperty(obj, key) {
    // Verificamos si la clave existe y si el valor de la propiedad es un array
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
        return obj[key][obj[key].length - 1];  // Retorna el último elemento del array
    }
    return undefined;  // Si la propiedad no es un array o el array está vacío, retornamos undefined
}

let obj = {
    numbers: [10, 20, 30],
    colors: ['red', 'blue', 'green'],
    empty: []
};

console.log(getLastElementOfProperty(obj, 'numbers'));  // --> 30
console.log(getLastElementOfProperty(obj, 'colors'));   // --> 'green'
console.log(getLastElementOfProperty(obj, 'empty'));    // --> undefined
console.log(getLastElementOfProperty(obj, 'notExist')); // --> undefined
