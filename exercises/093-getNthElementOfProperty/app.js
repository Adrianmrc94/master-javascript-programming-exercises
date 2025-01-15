// Write your function here
function getNthElementOfProperty(obj, key, n) {
    // Verificamos si la clave existe y si el valor de la propiedad es un array
    if (Array.isArray(obj[key]) && obj[key].length > n) {
        return obj[key][n];  // Retorna el elemento en la posición n
    }
    return undefined;  // Si la propiedad no es un array o n está fuera del rango, retornamos undefined
}

let obj = {
    numbers: [10, 20, 30],
    colors: ['red', 'blue', 'green'],
    empty: []
};

console.log(getNthElementOfProperty(obj, 'numbers', 1));  // --> 20
console.log(getNthElementOfProperty(obj, 'colors', 0));   // --> 'red'
console.log(getNthElementOfProperty(obj, 'empty', 0));    // --> undefined
console.log(getNthElementOfProperty(obj, 'colors', 5));   // --> undefined
console.log(getNthElementOfProperty(obj, 'notExist', 0)); // --> undefined
