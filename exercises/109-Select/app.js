// Write your function here
function select(array, obj) {
    // Creamos un nuevo objeto
    let result = {};

    // Recorremos el array de claves
    for (let key of array) {
        // Si el objeto tiene esa propiedad, la agregamos al nuevo objeto
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }

    return result;  // Retornamos el objeto resultante
}

// Ejemplo de uso
let obj = { a: 1, b: 2, c: 3, d: 4 };
let array = ['a', 'c', 'e'];

let newObj = select(array, obj);
console.log(newObj);  // --> { a: 1, c: 3 }
