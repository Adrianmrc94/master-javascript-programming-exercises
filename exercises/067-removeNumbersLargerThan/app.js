let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
        // Recorremos todas las propiedades del objeto
        for (let key in obj) {
            // Si el valor de la propiedad es un número y es mayor que 'num', la eliminamos
            if (typeof obj[key] === 'number' && obj[key] > num) {
                delete obj[key];
            }
        }
        return obj;  // Retornamos el objeto modificado
    }

let result = removeNumbersLargerThan(4, obj);
console.log(result);  // { a: 1, d: 3 }
