let obj = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
        // Recorremos todas las propiedades del objeto
        for (let key in obj) {
            // Si el valor de la propiedad es un número y es menor que 'num', la eliminamos
            if (typeof obj[key] === 'number' && obj[key] < num) {
                delete obj[key];
            }
        }
        return obj;  // Retornamos el objeto modificado
    }

let result = removeNumbersLessThan(4, obj);
console.log(result);  // { b: 5, c: 10 }