function removeArrayValues(obj) {
    // your code here
        // Recorremos todas las propiedades del objeto
        for (let key in obj) {
            // Verificamos si el valor es un array
            if (Array.isArray(obj[key])) {
                delete obj[key];  // Eliminamos la propiedad si su valor es un array
            }
        }
        return obj;  // Retornamos el objeto modificado
}
let myObject = {
    a: [1, 2, 3],
    b: 'hello',
    c: 10,
    d: [4, 5, 6]
};

let result = removeArrayValues(myObject);
console.log(result);  // { b: 'hello', c: 10 }