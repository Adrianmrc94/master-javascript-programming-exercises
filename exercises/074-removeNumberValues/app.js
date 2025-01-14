function removeNumberValues(obj) {
    // your code here
        // Recorremos todas las propiedades del objeto
        for (let key in obj) {
            // Verificamos si el valor es un número
            if (typeof obj[key] === 'number') {
                delete obj[key];  // Eliminamos la propiedad si su valor es un número
            }
        }
        return obj;  // Retornamos el objeto modificado
    }
let obj = {
    a: 2,
    b: 'remaining',
    c: 4
};

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }
